CREATE USER docker WITH PASSWORD 'docker';
CREATE DATABASE docker;
GRANT ALL PRIVILEGES ON DATABASE docker TO docker;

create database foodtruck;
CREATE TABLE public.foodtruck (
    id text COLLATE pg_catalog."default" NOT NULL,
    latitude double precision,
    longitude double precision
);
-- Insert
insert into public.foodtruck values('Truck1',45.466646,47.456846);
insert into public.foodtruck values('Truck14',85.466646,99.456846);
insert into public.foodtruck values('Truck2',45.466646,42.456846);
insert into public.foodtruck values('Truck3',45.466646,65.456846);
insert into public.foodtruck values('Truck5',23.466646,50.456846);
insert into public.foodtruck values('Truck6',55.466646,28.456846);
insert into public.foodtruck values('Truck52',10.466646,12.456846);
insert into public.foodtruck values('Truck125',52.466646,80.456846);

GRANT ALL PRIVILEGES ON DATABASE foodtruck TO docker;