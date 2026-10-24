---
id: thm-change-of-basis-for-a-sesquilinear-form
kind: theorem
title: 'For the linear-first convention, a basis change by $P$ sends a sesquilinear matrix $A$ to $P^{\mathsf T}A\,\sigma(P)$; Hermitian forms satisfy $A=\sigma(A)^{\mathsf T}$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sesquilinear-and-hermitian-forms-over-a-field-with-involution, thm-matrix-multiplication-laws, prop-transpose-laws]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §7.8'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

Let $H$ be sesquilinear over a field with involution $\sigma$, using the convention linear in the first variable. If its old matrix is $A$ and a basis change has matrix $P$, then its new matrix is

$$P^{\mathsf T}A\,\sigma(P),$$

where $\sigma(P)$ is obtained entrywise. Moreover, $H$ is Hermitian if and only if $A=\sigma(A)^{\mathsf T}$.

## Facts & Assumptions

**Given:** A field involution $\sigma$, a sesquilinear form $H$, and the displayed basis data.

[L1] Sesquilinearity is linear in the first variable and $\sigma$-linear in the second; Hermitian symmetry is $H(u,v)=\sigma(H(v,u))$ ([[def-sesquilinear-and-hermitian-forms-over-a-field-with-involution]]).

[L2] Matrix multiplication expands as the corresponding finite row-column sums ([[thm-matrix-multiplication-laws]]).

[L3] Transpose reverses products ([[prop-transpose-laws]]).

## Proof

**Proof technique:** coordinate calculation.

1.1 If $x,y$ are new coordinate columns, their old columns are $Px,Py$. Expanding [L1] in an old basis gives $H(u,v)=(Px)^{\mathsf T}A\,\sigma(Py)=x^{\mathsf T}P^{\mathsf T}A\,\sigma(P)\sigma(y)$. [L1, L2, L3, algebra]

1.2 In a basis $(e_i)$, Hermitian symmetry is $A_{ij}=H(e_i,e_j)=\sigma(H(e_j,e_i))=\sigma(A_{ji})$ for every $i,j$, which is exactly $A=\sigma(A)^{\mathsf T}$. [L1, algebra]

2.1 Since step 1.1 holds for every $x,y$, the new matrix is $P^{\mathsf T}A\sigma(P)$. This includes the identity involution, where it reduces to ordinary congruence. [step 1.1]

2.2 Conversely, if $A=\sigma(A)^{\mathsf T}$, the coordinate formula and $\sigma^2=\operatorname{id}$ give $H(u,v)=\sigma(H(v,u))$ for arbitrary coordinate columns, so $H$ is Hermitian. [step 1.2, L1, L2, L3, algebra]

3.1 Steps 2.1, 1.2, and 2.2 prove the basis-change formula and both directions of the Hermitian criterion. [step 2.1, step 1.2, step 2.2] ∎
