---
id: ex-one-mode-schrodinger-weyl-relations
kind: example
title: The one-mode Schrödinger formulas and their phase
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-regular-weyl-system-on-a-symplectic-vector-space
  - lem-schrodinger-weyl-system-is-regular-and-irreducible
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes"
      url: "https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf"
---

## Statement

Let $\lambda\ne0$. On $L^2(\mathbb R)$ define
$U_qf(x)=f(x-q)$ and $V_pf(x)=e^{i\lambda px}f(x)$. Then
$U_qV_p=e^{-i\lambda qp}V_pU_q$. The phase-corrected operators
$$W_\lambda(q,p):=e^{i\lambda qp/2}U_qV_p$$
satisfy $W_\lambda(q,p)W_\lambda(q',p')=
e^{-i\lambda(qp'-pq')/2}W_\lambda(q+q',p+p')$ and are exactly the
one-mode Schrödinger Weyl operators in
[[lem-schrodinger-weyl-system-is-regular-and-irreducible]].

## Facts & Assumptions

**Given:** $\lambda\ne0$, Lebesgue $L^2(\mathbb R)$, and the operators in the
Statement.

[F1] The Schrödinger formula
$S_\lambda(q,p,t)f(x)=e^{i\lambda t+i\lambda p(x-q/2)}f(x-q)$ defines a
strongly continuous irreducible unitary representation, and its $t=0$
operators satisfy the Weyl relation ([[lem-schrodinger-weyl-system-is-regular-and-irreducible]]).

[F2] The Weyl phase convention is
$e^{-i\lambda\omega(v,w)/2}$ with
$\omega((q,p),(q',p'))=qp'-pq'$ ([[def-regular-weyl-system-on-a-symplectic-vector-space]]).

## Proof

**Proof technique:** direct.

**Given:** The data in the Statement.

1.1 By [F1], the one-coordinate translations $U_q=S_\lambda(q,0,0)$ and modulations $V_p=S_\lambda(0,p,0)$ are unitary. Direct evaluation gives $(U_qV_pf)(x)=e^{i\lambda p(x-q)}f(x-q)$ and $(V_pU_qf)(x)=e^{i\lambda px}f(x-q)$, so $U_qV_p=e^{-i\lambda qp}V_pU_q$. [F1, given, algebra]

2.1 The formula in the Statement yields $(W_\lambda(q,p)f)(x)=e^{i\lambda qp/2}e^{i\lambda p(x-q)}f(x-q) =e^{i\lambda p(x-q/2)}f(x-q)$. This is precisely the $t=0$ formula in [F1], so the operators are regular and irreducible and use its phase convention. [F1, step 1.1, algebra]

3.1 Since $W_\lambda(q,p)=S_\lambda(q,p,0)$, [F1] gives the asserted product law. Explicitly, its scalar is $e^{-i\lambda(qp'-pq')/2}$ and the sum vector is $(q+q',p+p')$ by [F2]. Thus the phase correction is exactly the one required for the chosen symplectic form. [F1, F2, step 2.1] ∎
## Boundary cases

- The formula requires $\lambda\ne0$ for the cited irreducibility statement;
  its algebraic product identity also holds at $\lambda=0$.
- The two basic operator families commute up to the displayed scalar; omitting
  the factor $e^{i\lambda qp/2}$ changes the Weyl convention.
