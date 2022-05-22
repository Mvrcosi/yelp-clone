

-- for helps \?


-- adding extra constraints 
CREATE TABLE restaurants ( 
  id BIGSERIAL NOT NULL PRIMARY KEY, 
  name VARCHAR(50) NOT NULL, 
  location VARCHAR(50) NOT NULL, 
  price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);


INSERT INTO restaurants (name, location, price_range) values ('burger king', 'texas', 4);




 
select * from restaurants where id = 1;



UPDATE restaurants SET name = 'red lobster', location ='miami', price_range = 3 where id = 5


DELETE FROM restaurants WHERE id = 4


CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
  name VARCHAR(50) NOT NULL,
  review TEXT NOT NULL,
  rating INT NOT NULL check(rating >= 1 AND rating <= 5)
);

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(
        rating >= 1
        and rating <= 5
    )
);