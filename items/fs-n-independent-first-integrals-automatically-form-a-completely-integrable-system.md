---
id: fs-n-independent-first-integrals-automatically-form-a-completely-integrable-system
kind: false-statement
title: $n$ independent first integrals automatically form a completely integrable system
status: published
origin: pipeline
deps: ["def-completely-integrable-hamiltonian-system", "def-poisson-bracket-on-a-symplectic-manifold", "def-hamiltonian-vector-field-and-hamiltonian-function"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Definition 18.10, p. 110
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement refuted

On a $2n$-dimensional phase space, any $n$ independent first integrals
automatically form a completely integrable system.

## Facts & Assumptions

**Given:** The proposed sufficiency claim.

[F1] Complete integrability also requires pairwise zero Poisson brackets.
[[def-completely-integrable-hamiltonian-system]].

[F2] Hamiltonian fields satisfy $\iota_{X_F}\omega=dF$, and
$\{F,G\}=\omega(X_F,X_G)$.
[[def-hamiltonian-vector-field-and-hamiltonian-function]],
[[def-poisson-bracket-on-a-symplectic-manifold]].

## Refutation

**Proof technique:** direct.

1.1 On standard $\mathbb R^4$ take the Hamiltonian $H=0$ and the two functions $F_1=q^1$, $F_2=p_1$. Every function is a first integral of the zero flow, and $dF_1,dF_2$ are independent everywhere. [given]

2.1 With $\omega=dq^1\wedge dp_1+dq^2\wedge dp_2$, [F2] gives $X_{q^1}=-\partial_{p_1}$ and $X_{p_1}=\partial_{q^1}$, hence $\{F_1,F_2\}=\omega(-\partial_{p_1},\partial_{q^1})=1$. Thus the functions are not in involution and fail the separate requirement in [F1], refuting the claim for $n=2$. [F1, F2, step 1.1] ∎
