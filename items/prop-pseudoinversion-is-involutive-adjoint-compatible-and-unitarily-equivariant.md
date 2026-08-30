---
id: prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant
kind: proposition
title: "Pseudoinversion is involutive, commutes with adjoints, and is equivariant under unitary left and right factors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-linear-isometry-and-orthogonal-or-unitary-operator,
       thm-moore-penrose-pseudoinverse-exists-and-is-unique]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Roger Penrose, A generalized inverse for matrices"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0305004100030929"
---

## Statement

Let $A$ be a finite real or complex matrix.

1. $(A^+)^+=A$.
2. $(A^*)^+=(A^+)^*$.
3. If $U$ and $V$ are unitary of compatible sizes, then
   $(UAV)^+=V^*A^+U^*$.

## Facts & Assumptions

**Given:** A matrix $A$ over $\mathbb R$ or $\mathbb C$, and compatible unitary matrices $U$ and $V$.

[L1] Every finite real or complex matrix has a unique Moore--Penrose pseudoinverse ([[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]).

[L2] Unitary operators preserve the inner product and satisfy $U^*U=I=UU^*$ ([[def-linear-isometry-and-orthogonal-or-unitary-operator]]).

## Proof

**Proof technique:** direct.

1.1 Because $A^+$ satisfies the Penrose equations for $A$, the same equations read in reverse order show that $A$ satisfies the Penrose equations for $A^+$: $$A^+AA^+=A^+,\qquad AA^+A=A,$$ and the products $A^+A$ and $AA^+$ are already self-adjoint. [L1, algebra]

1.2 Put $B:=V^*A^+U^*$. Using [L2] and the Penrose equations for $A$, $$ (UAV)B(UAV)=UAA^+AV=UAV, $$ and similarly $B(UAV)B=B$. The products $(UAV)B$ and $B(UAV)$ are $U(AA^+)U^*$ and $V^*(A^+A)V$, hence self-adjoint. [L2, algebra]

2.1 By uniqueness in [L1], the Moore--Penrose pseudoinverse of $A^+$ is $A$. Hence $(A^+)^+=A$. [L1, step 1.1]

2.2 Taking adjoints of the Penrose equations for $A$ shows that $(A^+)^*$ obeys $$A^*(A^+)^*A^*=A^*,\qquad (A^+)^*A^*(A^+)^*=(A^+)^*,$$ and that $A^*(A^+)^*$ and $(A^+)^*A^*$ are self-adjoint. [step 1.1, algebra]

3.1 Therefore $(A^+)^*$ is the Moore--Penrose pseudoinverse of $A^*$, so uniqueness in [L1] gives $(A^*)^+=(A^+)^*$. [L1, step 2.2]

4.1 So $B$ is a Moore--Penrose pseudoinverse of $UAV$, and [L1] yields $(UAV)^+=V^*A^+U^*$. Together with steps 2.1 and 3.1, this proves the three claims. [L1, step 2.1, step 3.1, step 1.2] ∎
