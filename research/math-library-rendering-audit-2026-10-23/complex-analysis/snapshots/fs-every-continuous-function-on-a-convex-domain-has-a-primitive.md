---
id: fs-every-continuous-function-on-a-convex-domain-has-a-primitive
kind: false-statement
title: "FALSE: every continuous complex-valued function on a convex domain has a primitive"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-convex-subset-of-euclidean-space, lem-complex-conjugation-and-modulus-laws, thm-circle-integrals-of-integer-monomials, cor-closed-contour-integral-of-a-derivative-is-zero, def-complex-primitive, cor-rn-is-polygonally-connected-and-locally-path-connected, def-complex-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Richard Howell and John Mathews, Complex Analysis, Example 6.2.16"
      url: "https://complexanalysis.org/web/sec_contour-integrals.html"
pipeline_run: null
---

## Statement

**False claim:** Every continuous function $f:U\to\mathbb C$ on a convex complex domain $U$ has a primitive.

On $U=\mathbb C$, the continuous function $f(z)=\overline z$ is a counterexample.

## Facts & Assumptions

**Given:** The whole complex plane $U=\mathbb C$, the function $f(z)=\overline z$, and the positively oriented unit circle $\gamma(t)=\exp(it)$.

[L1] Complex conjugation preserves differences and modulus, and $z\overline z=|z|^2$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L2] The whole Euclidean plane is convex, since every segment between two of its points remains in the plane ([[def-convex-subset-of-euclidean-space]]).

[L3] The integral of $z^{-1}$ around the positively oriented unit circle is $2\pi i$ ([[thm-circle-integrals-of-integer-monomials]]).

[L4] A primitive $F$ of $f$ is holomorphic and satisfies $F'=f$ ([[def-complex-primitive]]).

[L5] If $F$ is holomorphic, $F'$ is continuous, and $\gamma$ is closed and rectifiable, then $\int_\gamma F'=0$ ([[cor-closed-contour-integral-of-a-derivative-is-zero]]).

[L6] The Euclidean plane $\mathbb R^2$ is connected ([[cor-rn-is-polygonally-connected-and-locally-path-connected]]).

[L7] A complex domain is a nonempty connected open subset of $\mathbb C$ ([[def-complex-domain]]).

## Refutation

**Proof technique:** contradiction.

1.1 By [L1], $|\overline z-\overline w|=|z-w|$, so $f$ is continuous; by [L2], its domain $\mathbb C$ is convex. The complex plane is nonempty and open, and it is connected under its Euclidean identification by [L6], so [L7] makes it a complex domain. [L1, L2, L6, L7]

1.2 On the unit circle, $z\overline z=1$, so $\overline z=z^{-1}$ and [L3] gives $\int_\gamma f(z)\,dz=2\pi i\ne0$. [L1, L3, algebra]

1.3 Suppose, for contradiction, that $f$ has a primitive $F$ on $\mathbb C$. [assume-contra]

2.1 By [L4], $F$ is holomorphic and $F'=f$; step 1.1 makes this derivative continuous, and the unit circle is closed and rectifiable, so [L5] gives $\int_\gamma f=0$, contradicting step 1.2. Hence no primitive exists and the claim is false. [step 1.1, step 1.2, step 1.3, L4, L5, discharge-contradiction] ∎
