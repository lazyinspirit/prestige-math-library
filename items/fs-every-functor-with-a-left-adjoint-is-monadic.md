---
id: fs-every-functor-with-a-left-adjoint-is-monadic
kind: false-statement
title: "FALSE: Every functor with a left adjoint is monadic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-monadic-functor-is-conservative, thm-the-discrete-and-indiscrete-topologies-form-an-adjoint-triple-over-set, def-standard-topologies, def-continuous-map-top, def-homeomorphism-and-open-maps]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.3.1 and Theorem 5.5.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

**False claim:** every functor that has a left adjoint is monadic.

The underlying-set functor $U:\mathbf{Top}\to\mathbf{Set}$ is a counterexample.

## Facts & Assumptions

**Given:** The underlying-set functor $U:\mathbf{Top}\to\mathbf{Set}$.

[L1] The discrete-topology functor is left adjoint to $U$ ([[thm-the-discrete-and-indiscrete-topologies-form-an-adjoint-triple-over-set]]).

[L2] Every monadic functor is conservative ([[thm-a-monadic-functor-is-conservative]]).

[L3] A continuous bijection is an isomorphism in $\mathbf{Top}$ exactly when its inverse is continuous ([[def-homeomorphism-and-open-maps]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], $U$ has a left adjoint. [L1]

1.2 On a two-element set $X$, let $X_d$ have the discrete topology and $X_i$ the indiscrete topology. The identity function $q:X_d\to X_i$ is continuous and $U(q)$ is a bijection, but $q^{-1}:X_i\to X_d$ is not continuous because a singleton is open in $X_d$ and not in $X_i$. [L3]

2.1 Thus $U(q)$ is an isomorphism while $q$ is not, so $U$ is not conservative. By [L2] it is not monadic, even though step 1.1 gives it a left adjoint. [L2, step 1.1, step 1.2] ∎
