import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        width: '300px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <img
        src={destination.image}
        alt={destination.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '16px' }}>
        <h3 style={{ color: '#007BFF' }}>{destination.name}</h3>
        <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>{destination.location}</p>
        <p style={{ marginBottom: '8px', color: '#555' }}>{destination.description}</p>
        <p style={{ fontWeight: 'bold', color: '#000' }}>{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
