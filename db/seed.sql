CREATE TABLE houser_sim (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  address VARCHAR(80),
  city VARCHAR(30),
  state VARCHAR(30),
  zip INTEGER
);

INSERT INTO houser_sim (name, address, city, state, zip)
VALUES ('Link', 'Super Smash Bros', 'N64', 'Nintendo', '12345');

ALTER TABLE houser_sim
  ADD image TEXT;

ALTER TABLE houser_sim
  ADD mortgage INTEGER;

ALTER TABLE houser_sim
  ADD rent INTEGER;