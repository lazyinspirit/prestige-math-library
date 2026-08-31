---
id: ex-a-krylov-chain-with-early-stabilisation-and-its-relative-minimal-polynomial
kind: example
title: "A Krylov chain can stabilize early when the start vector has a short relative minimal polynomial"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yousef Saad, CSCI 8314 Set 13: Krylov subspace methods; Introduction; Krylov subspaces; Gram-Schmidt process (review); The Arnoldi process; FOM and GMRES"
      url: "https://classpages.cselabs.umn.edu/Spring-2019/csci8314/FILES/LecN13.pdf"
---

## Example

Let

$$A=\begin{pmatrix}0&1&0\\0&0&0\\0&0&5\end{pmatrix},\qquad b=\begin{pmatrix}0\\1\\0\end{pmatrix}.$$

Then $Ab=e_1$, $A^2b=0$, and the relative minimal polynomial of $b$ is
$q(z)=z^2$. Hence

$$K_1(A,b)=\operatorname{span}\{e_2\},\qquad K_2(A,b)=\operatorname{span}\{e_2,e_1\},\qquad K_m(A,b)=K_2(A,b)\quad(m\ge 2).$$

So the Krylov chain stabilizes at grade $2$, strictly before the ambient
dimension $3$.

## Facts & Assumptions

**Given:** The matrix $A$ and vector $b$ displayed above.

[L1] Krylov dimensions grow one step at a time until the grade and then
stabilize ([[thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise]]).

## Verification
**Proof technique:** direct.

1.1 Direct multiplication gives $Ab=e_1$ and $A^2b=0$. Therefore $q(A)b=0$ for $q(z)=z^2$, while no nonzero polynomial of degree $<2$ annihilates $b$ because neither $b$ nor $Ab$ is zero. Hence the grade is $\nu(A,b)=2$. [L1, algebra]

2.1 The displayed Krylov spaces follow from the vectors $b,Ab,A^2b$. Since the grade is $2$, [L1] predicts exactly the stabilization $K_m(A,b)=K_2(A,b)$ for $m\ge 2$, which agrees with the calculation. [L1, step 1.1] ∎