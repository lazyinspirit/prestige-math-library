---
id: lem-cft-pseudotrace-basis-independent
kind: lemma
title: Basis independence of the Hattori–Stallings pseudo-trace
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
deps:
  - def-cft-pseudotrace
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-pseudotrace: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras II: Convergence of Sewing and Higher Genus Pseudo-q-traces"
      url: https://arxiv.org/pdf/2411.07707v4
      locator: "§4.4.1, PDF pp. 61–62; the finite-dual-basis independence is checked directly here."
---

## Statement

For a finite projective right module $P$ over a unital $\mathbb C$-algebra $A$, an $A$-linear endomorphism $T\in\mathrm{End}_A(P)$, and a symmetric linear functional $\omega:A\to\mathbb C$, the candidate value set $\mathsf{Tr}_{\omega,A}(T)$ defined above is a singleton. Hence the pseudo-trace is independent of the chosen finite dual basis.

## Statement references

[[def-cft-pseudotrace]]

## Facts & Assumptions

**Given:** Two finite dual bases $(p_i,\phi_i)_i$ and $(q_j,\psi_j)_j$ of $P$, an $A$-linear endomorphism $T$, and a symmetric functional $\omega$.

[F1] [[def-cft-pseudotrace]]: each dual basis satisfies $p=\sum_i p_i\phi_i(p)$, and $\omega$ vanishes on every commutator $ab-ba$.

## Proof

1.1 Apply the dual-basis identity for $(q_j,\psi_j)_j$ to each $p_i$, then the identity for $(p_i,\phi_i)_i$ to each $Tq_j$. Right $A$-linearity gives
$$
\sum_i\phi_i(Tp_i)=\sum_{i,j}\phi_i(Tq_j)\psi_j(p_i),\qquad \sum_j\psi_j(Tq_j)=\sum_{i,j}\psi_j(p_i)\phi_i(Tq_j).
$$
Subtracting, the difference is a finite sum of commutators $[\phi_i(Tq_j),\psi_j(p_i)]$ in $A$. [given, F1, algebra]

2.1 Apply $\omega$ to the difference from step 1.1. Symmetry makes every commutator term vanish, so the two dual-basis formulas have the same scalar value. Since the bases were arbitrary, $\mathsf{Tr}_{\omega,A}(T)$ is a singleton. [given, F1, step 1.1, algebra] ∎
