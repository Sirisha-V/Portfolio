import React from 'react';

function Achievements() {
  const achievements = [
    {
      title: 'Outstanding Developer Award (2023)',
      description: 'Recognized for exceptional performance and contribution to project success.',
    },
    // Add more achievements here using the same structure
  ];

  return (
    <section className="achievements">
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement) => (
          <li key={achievement.title}>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
