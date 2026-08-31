---
id: prop-local-coordinate-expression-for-a-differential-form
kind: proposition
title: "Local coordinate expression for a differential form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-smooth-differential-k-form,
       lem-wedge-monomials-in-a-dual-basis-form-a-basis,
       prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components,
       thm-coordinate-differentials-form-the-dual-cotangent-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement

On a chart $(U,x^1,\ldots,x^n)$, every smooth differential $k$-form $\omega$ has
a unique expression

$$
\omega=\sum_{1\le i_1<\cdots<i_k\le n}\omega_{i_1\cdots i_k}\,dx^{i_1}\wedge\cdots\wedge dx^{i_k}
$$

with smooth coefficient functions $\omega_{i_1\cdots i_k}$ on $U$.

## Facts & Assumptions

**Given:** A smooth $k$-form $\omega$ on a chart domain $U$ with coordinates $x^1,\ldots,x^n$.

[F1] A smooth $k$-form is a smooth section of $\bigwedge^kT^*M$ ([[def-smooth-differential-k-form]]).

[L1] The coordinate differentials $dx^1,\ldots,dx^n$ form the dual basis of the cotangent fibres, and their increasing wedges form a basis of the alternating $k$-covectors ([[thm-coordinate-differentials-form-the-dual-cotangent-basis]], [[lem-wedge-monomials-in-a-dual-basis-form-a-basis]]).

[L2] Smoothness of a section is equivalent to smoothness of its local components ([[prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]]).

## Proof
**Proof technique:** direct.

1.1 At each point $p\in U$, [L1] gives a basis of $\bigwedge^kT_p^*M$, so $\omega_p$ has a unique expansion $$ \omega_p=\sum_I \omega_I(p)\,dx^I_p $$ over increasing multi-indices $I$. [F1, L1, given]
2.1 The coefficient functions $p\mapsto\omega_I(p)$ are exactly the local components of the section $\omega$ in the bundle frame from [L1]. Therefore [L2] makes them smooth on $U$. [L1, L2, step 1.1]
3.1 This gives the unique local coordinate expression for $\omega$. [step 1.1, step 2.1] ∎