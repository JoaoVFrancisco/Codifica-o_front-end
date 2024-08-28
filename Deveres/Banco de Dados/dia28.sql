CREATE DATABASE test_db;

USE test_db;

CREATE TABLE olist_orders (
    order_id VARCHAR(50) PRIMARY KEY,
    customer_id VARCHAR(50),
    order_status VARCHAR(20),
    order_purchase_timestamp DATETIME,
    order_approved_timestamp DATETIME,
    order_delivered_carrier_date DATETIME,
    order_delivered_timestamp DATETIME,
    order_estimated_delivery_date DATETIME,
    payment_sequential INT,
    payment_type VARCHAR(20),
    payment_installments INT,
    payment_value DECIMAL(10, 2),
    shipping_cost DECIMAL(10, 2)
);

select order_id, order_estimated_delivery_date, shipping_cost from olist_orders where order_status = "delivered";