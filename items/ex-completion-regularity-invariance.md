---
id: "ex-completion-regularity-invariance"
kind: "example"
title: "completion regularity invariance"
deps: ["lem-completion-preserves-embedding-dimension", "thm-completion-preserves-regular-local-rings", "thm-completion-of-a-noetherian-local-ring", "thm-completion-preserves-dimension-and-hilbert-samuel-data", "thm-dimension-at-most-embedding-dimension"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lecture 25, Example 25.1 and property (6), pp.68–69"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
provenance:
  statement: ai-generated
  proof: ai-altered
status: "draft"
origin: "pipeline"
generation:
  role: example
proof_strategy: "Explicit algebraic derivation"
---

## Example

The ring $R=k[x,y]_{(x,y)}$ and its completion $k[\![x,y]\!]$ both have dimension and embedding dimension two. For every $q\ge1$, their quotients by the $q$th powers of the maximal ideals agree and have basis the monomials of total degree less than $q$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-completion-preserves-embedding-dimension]]: For a nonzero Noetherian local ring $(R,\mathfrak m,k)$, its maximal-adic completion $\widehat R$ has maximal ideal $\widehat{\mathfrak m}=\mathfrak m\widehat R$, residue field $k$, and a canonical isomorphism $\mathfrak m/\mathfrak m^2\cong\widehat{\mathfrak m}/\widehat{\mathfrak m}^2$. In particular their embedding dimensions agree.

[F2] [[thm-completion-preserves-regular-local-rings]]: A nonzero Noetherian local ring $R$ is regular if and only if its maximal-adic completion $\widehat R$ is regular.

[F3] [[thm-completion-of-a-noetherian-local-ring]]: Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a Noetherian local ring, and let $\widehat R$ be its $\mathfrak m$-adic completion. 1. $\widehat R$ is a Noetherian local ring with maximal ideal $\mathfrak m\widehat R$. 2. The residue field is unchanged: $$ \widehat R/\mathfrak m\widehat R \cong R/\mathfrak m. $$ 3. The completion map $R \to \widehat R$ is faithfully flat.

[F4] [[thm-completion-preserves-dimension-and-hilbert-samuel-data]]: Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a Noetherian local ring, let $M \neq 0$ be a finitely generated $R$-module, and let $\widehat R$, $\widehat M$ denote the $\mathfrak m$-adic completions. 1. For every $n \ge 0$, $$ \widehat M/\mathfrak m^{n+1}\widehat M \cong M/\mathfrak m^{n+1}M. $$ In particular the Hilbert-Samuel functions of $M$ and $\widehat M$ agree. 2. The Hilbert-Samuel multiplicity of $M$ equals that of $\widehat M$. 3. The support dimensions of $M$ and $\widehat M$ are equal.

[F5] [[thm-dimension-at-most-embedding-dimension]]: Every nonzero commutative Noetherian local ring $R$ satisfies $\dim R\le\operatorname{edim}R<\infty$.

## Verification

1.1 Degree truncation identifies series modulo $(x,y)^q$ with polynomials modulo that ideal. In the truncated polynomial ring, every denominator allowed in $R$ is a unit, by a finite geometric-series expansion of its nonconstant part. Thus both quotients have the stated monomial basis, and their inverse limit is $k[\![x,y]\!]$, identifying it as the maximal-adic completion. [given, algebra]

2.1 The coordinate chain and two maximal-ideal generators give $\dim R=\operatorname{edim}R=2$. The cotangent-completion theorem preserves embedding dimension and the completion dimension theorem preserves dimension independently. The completion is Noetherian local and regular. At $q=1$ the quotient is $k$; at $q=2$ the basis $1,x,y$ exhibits the two cotangent classes. [F1, F4, F3, F2, F5, step 1.1] ∎
