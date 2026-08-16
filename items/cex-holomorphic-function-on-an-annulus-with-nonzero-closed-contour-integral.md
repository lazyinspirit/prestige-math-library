---
id: cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral
kind: counterexample
title: "A holomorphic function on an annulus can have a nonzero closed-contour integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-polynomials-and-rational-functions-are-holomorphic, lem-complex-conjugation-and-modulus-laws, thm-circle-integrals-of-integer-monomials, thm-polar-form-with-unique-principal-argument, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-path-connected-implies-connected, def-path-connected, def-complex-domain, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-differentiability-implies-continuity]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard Howell and John Mathews, Complex Analysis, Example 6.4.9"
      url: "https://complexanalysis.org/web/sec_integration-theorems.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** If $U$ is a complex domain, $f$ is holomorphic on $U$, and $\gamma$ is a closed rectifiable contour in $U$, then $\int_\gamma f(z)\,dz=0$.

Take

$$A=\left\{z\in\mathbb C:\frac12<|z|<2\right\},\qquad f(z)=\frac1z,$$

and let $\gamma(t)=\exp(it)$, $0\le t\le2\pi$, be the positively oriented unit circle. Then $A$ is a complex domain, $f$ is holomorphic on $A$, and

$$\int_\gamma f(z)\,dz=2\pi i\ne0.$$

## Facts & Assumptions

**Given:** The annulus $A$, the function $f(z)=1/z$, and the unit circle $\gamma$.

[L1] The modulus is multiplicative and satisfies the triangle inequality, hence $\big||z|-|w|\big|\le|z-w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L2] A rational function is holomorphic wherever its denominator is nonzero ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

[L3] Every nonzero complex number has a polar representation $r(\cos\theta+i\sin\theta)$ with $r>0$, and $\exp(i\theta)=\cos\theta+i\sin\theta$ for real $\theta$ ([[thm-polar-form-with-unique-principal-argument]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L4] A space is path-connected when each pair of points is joined by a continuous path, and every path-connected space is connected ([[def-path-connected]], [[thm-path-connected-implies-connected]]).

[L5] A complex domain is a nonempty connected open subset of $\mathbb C$ ([[def-complex-domain]]).

[L6] The integral of $z^{-1}$ around the positively oriented unit circle is $2\pi i$ ([[thm-circle-integrals-of-integer-monomials]]).

[L7] The complex exponential is entire and therefore continuous ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-differentiability-implies-continuity]]).

## Refutation

**Proof technique:** direct.

1.1 The point $1$ lies in $A$. For $z\in A$, let $\delta=\tfrac12\min\{|z|-1/2,2-|z|\}>0$; if $|w-z|<\delta$, [L1] gives $1/2<|w|<2$, so $A$ is open. [given, L1]

1.2 Given $z=r\exp(i\theta)$ and $w=s\exp(i\phi)$ in $A$ as in [L3], the radial paths $t\mapsto((1-t)r+t)\exp(i\theta)$ and $t\mapsto((1-t)s+t)\exp(i\phi)$ stay in $A$, and the unit-circle arc $t\mapsto\exp(i((1-t)\theta+t\phi))$ joins their unit endpoints. By [L7] these paths are continuous; the first, the arc, and the reversal of the second concatenate to join $z$ to $w$, so [L4] makes $A$ path-connected and connected. [L3, L4, L7]

2.1 Steps 1.1 and 1.2 show that $A$ is nonempty, open, and connected, hence a complex domain by [L5]; since $0\notin A$, [L2] makes $f(z)=1/z$ holomorphic on $A$. [step 1.1, step 1.2, L2, L5]

3.1 The unit circle is a closed rectifiable contour in $A$, while [L6] gives its integral as $2\pi i\ne0$. Thus the displayed domain, function, and contour refute the claim. [step 2.1, L6] ∎
