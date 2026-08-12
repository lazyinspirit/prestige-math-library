---
id: cor-operator-determinant-on-the-general-linear-group
kind: corollary
title: "Determinant is a group homomorphism $\\operatorname{GL}(V)\\to F^{\\times}$, and $\\det(T^{-1})=\\det(T)^{-1}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-operator-determinant-is-multiplicative,
       thm-operator-invertible-iff-determinant-nonzero,
       def-linear-isomorphism-and-invertible-linear-map,
       lem-ring-units-form-a-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed."
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

For a finite-dimensional vector space $V$ over a field $F$, determinant
restricts to a group homomorphism

$$\det:\operatorname{GL}(V)\to F^\times.$$

For every $T\in\operatorname{GL}(V)$,
$\det(T^{-1})=\det(T)^{-1}$.

## Facts & Assumptions

**Given:** $V,F$, and invertible operators on $V$.

[L1] $\det(S\circ T)=\det(S)\det(T)$
([[thm-operator-determinant-is-multiplicative]]).

[L2] An operator is invertible exactly when its determinant is nonzero
([[thm-operator-invertible-iff-determinant-nonzero]]).

[F1] An invertible linear map has a two-sided inverse
([[def-linear-isomorphism-and-invertible-linear-map]]).

[L3] The units of a commutative ring form a group
([[lem-ring-units-form-a-group]]).

## Proof

**Proof technique:** direct.

1.1 If $T$ is invertible, [L2] gives $\det(T)\neq0$, so $\det(T)\in F^\times$ and [L3] supplies its inverse. [L2, L3]

1.2 Put $d=\det(I_V)$. By [L1], $d=d^2$, and [L2] gives $d\neq0$ because $I_V$ is invertible. Field cancellation yields $d=1$. [L1, L2, algebra]

2.1 Multiplicativity [L1] and step 1.2 show that determinant preserves the group product and identity. [L1, step 1.2]

2.2 For invertible $T$, [F1] gives $T\circ T^{-1}=I_V$. Applying [L1] and step 1.2 yields $\det(T)\det(T^{-1})=1$, so uniqueness of inverses in [L3] gives $\det(T^{-1})=\det(T)^{-1}$. [F1, L1, step 1.2, L3]

3.1 Steps 1.1, 2.1, and 2.2 prove the homomorphism and inverse claims. [step 1.1, step 2.1, step 2.2] ∎