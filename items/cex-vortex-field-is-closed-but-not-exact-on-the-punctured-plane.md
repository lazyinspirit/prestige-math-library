---
id: cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane
kind: counterexample
title: "The vortex field is closed but not exact on the punctured plane"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-closed-and-exact-c1-vector-fields, thm-gradient-theorem-for-line-integrals, thm-conservative-path-independent-and-zero-loop-equivalence, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, lem-integral-elementary-bounds, def-pi-via-first-positive-cosine-zero]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Example 9.3.7"
      url: "https://www.jirka.org/ra/html/sec_pathind.html"
    - title: "J.-B. Campesato, Poincare Lemma, section 1"
      url: "https://www.math.toronto.edu/campesat/ens/1920/poincare.pdf"
pipeline_run: null
---

## Statement refuted

Every closed $C^1$ vector field on a piecewise-$C^1$ path-connected open set is exact.

## Facts & Assumptions
**Given:** On $U=\mathbb R^2\setminus\{(0,0)\}$, let $$F(x,y)=\left(\frac{-y}{x^2+y^2},\frac{x}{x^2+y^2}\right).$$

[L1] Closedness requires $\partial_yF_1=\partial_xF_2$, while exactness requires a $C^2$ potential whose gradient is $F$ ([[def-closed-and-exact-c1-vector-fields]]).

[L2] A gradient line integral is its potential's endpoint increment and is therefore zero on a closed path ([[thm-gradient-theorem-for-line-integrals]]).

[L3] On a nonempty open piecewise-$C^1$ path-connected domain, conservativity, path independence, and zero closed-loop integrals are equivalent ([[thm-conservative-path-independent-and-zero-loop-equivalence]]).

[L4] Vector line integrals use the integrand $\langle F(\gamma(t)),\gamma'(t)\rangle$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[L5] Sine and cosine have derivatives $\cos t$ and $-\sin t$ and satisfy $\sin^2t+\cos^2t=1$ ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L6] The integral of the constant $1$ on $[0,2\pi]$ is $2\pi$, and $\pi>0$ ([[lem-integral-elementary-bounds]], [[def-pi-via-first-positive-cosine-zero]]).



## Counterexample

**Proof technique:** constructive.

1.1 The rational formulas defining $F$ are $C^1$ on $U$. Direct differentiation gives $$\partial_yF_1=\frac{y^2-x^2}{(x^2+y^2)^2}=\partial_xF_2,$$ so $F$ is closed by [L1]. [given, L1, algebra, construct]

1.2 The punctured plane is piecewise-$C^1$ path-connected: choose a positive radius at least as large as the radii of two given points, join each point outward along its own ray to that circle, and join the resulting points by a circular arc. None of these pieces meets the origin. [given]

1.3 On the counterclockwise unit circle $\gamma(t)=(\cos t,\sin t)$, $0\leq t\leq2\pi$, [L5] gives $$F(\gamma(t))=(-\sin t,\cos t)=\gamma'(t).$$ [given, L5, algebra]

2.1 By [L4], [L5], and [L6], $$\int_\gamma F\cdot d\mathbf r =\int_0^{2\pi}(\sin^2t+\cos^2t)\,dt=2\pi\ne0.$$ [step 1.3, L4, L5, L6]

3.1 If $F$ were exact, [L1] would give a potential and [L2] would make the closed-circle integral zero, contradicting step 2.1. Thus $F$ is closed but not exact. By [L3] and step 1.2, it is also neither conservative nor path-independent. [step 1.1, step 1.2, step 2.1, L1, L2, L3]

4.1 The domain is not star-shaped: for any proposed centre $a\ne0$, the segment from $a$ to $-a$ passes through the omitted origin. [given, step 3.1, algebra, discharge-construct] ∎
