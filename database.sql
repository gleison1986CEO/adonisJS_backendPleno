sqlcmd -S localhost -U sa -P XXXXXXX
sqlcmd -S localhost -U gleison -P XXXXXXXXXXXXXXX


CREATE LOGIN gleison WITH PASSWORD = 'XXXXXXXXXXXXXXXXXXX';
GRANT SELECT, INSERT, DELETE, UPDATE, EXECUTE TO gleison;


-- ##################

DROP DATABASE backendplenoAdonis
GO
CREATE DATABASE backendplenoAdonis
GO
USE backendplenoAdonis
GO
-- ##################


--############################---
SELECT name FROM sys.tables
SELECT name FROM master.dbo.sysdatabases
--############################---


-- ##################
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- ##################

