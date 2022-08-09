const { Pool } = require('pg');

const pool = new Pool({
  user: 'zacharypantalone',
  password: '',
  host: 'localhost',
  database: 'bootcampx'
});

const query = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON students.id =  student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = $1 
ORDER BY teacher;
`;

const values = [process.argv[2] || 'JUL02'];

pool.query(query, values)
  .then(res => {
    res.rows.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
    });
  });