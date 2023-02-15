use MinhaAPICore;

select * from dbo.AspNetUserClaims;

set IDENTITY_INSERT dbo.AspNetUserClaims ON;


INSERT INTO [dbo].[AspNetUserClaims]
           ([Id]
		   ,[UserId]
           ,[ClaimType]
           ,[ClaimValue])
     VALUES
           (1,'e1a5ad75-ec55-43cc-a93d-03424d35b3a7', 'Fornecedor', 'Atualizar_Remover')
SELECT [Id]
      ,[UserId]
      ,[ClaimType]
      ,[ClaimValue]
  FROM [dbo].[AspNetUserClaims]


  set IDENTITY_INSERT dbo.AspNetUserClaims OFF;