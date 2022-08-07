SELECT cohorts.name, avg(completed_at - started_at) as average_assistance_time
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = 'MAR12'
GROUP BY cohorts.name;

-- **alternatively, instead of WHERE, you can** 
-- ORDER BY average_assistance_time DESC
-- LIMIT 1;