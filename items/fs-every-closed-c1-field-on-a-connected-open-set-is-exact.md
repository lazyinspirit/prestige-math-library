---
id: fs-every-closed-c1-field-on-a-connected-open-set-is-exact
kind: false-statement
title: "False: every closed C1 field on a connected open set is exact"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-closed-and-exact-c1-vector-fields, thm-gradient-theorem-for-line-integrals, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, lem-integral-elementary-bounds, def-pi-via-first-positive-cosine-zero, thm-intermediate-value, cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J.-B. Campesato, Poincare Lemma, sections 1 and 2"
      url: "https://www.math.toronto.edu/campesat/ens/1920/poincare.pdf"
pipeline_run: null
---

## Statement

Every closed $C^1$ vector field on a connected open subset of $\mathbb R^n$ is exact.

## Facts & Assumptions
**Given:** The proposed implication, the punctured plane $U=\mathbb R^2\setminus\{0\}$, and the vortex field $$F(x,y)=\left(\frac{-y}{x^2+y^2},\frac{x}{x^2+y^2}\right).$$

[L1] Closedness means $\partial_yF_1=\partial_xF_2$, while exactness supplies a $C^2$ potential with gradient $F$ ([[def-closed-and-exact-c1-vector-fields]]).

[L2] A gradient line integral is its potential's endpoint increment and is therefore zero on a closed path ([[thm-gradient-theorem-for-line-integrals]]).

[L3] Vector line integrals integrate $\langle F(\gamma(t)),\gamma'(t)\rangle$; sine and cosine have derivatives $\cos t$ and $-\sin t$ and satisfy $\sin^2t+\cos^2t=1$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]], [[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L4] The integral of $1$ on $[0,2\pi]$ is $2\pi$, and $\pi>0$ ([[lem-integral-elementary-bounds]], [[def-pi-via-first-positive-cosine-zero]]).

[L5] A continuous real function on a closed interval takes every value between its endpoint values ([[thm-intermediate-value]]).

[L6] On a star-shaped open domain, closedness and exactness are equivalent for $C^1$ vector fields ([[cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains]]).



## Refutation

**Proof technique:** direct.

1.1 Direct differentiation gives $\partial_yF_1=(y^2-x^2)/(x^2+y^2)^2=\partial_xF_2$, so [L1] makes $F$ closed and $C^1$ on the open set $U$. Radial segments at positive radius followed by a circular arc give a piecewise-$C^1$ path in $U$ between any two of its points. [given, L1, algebra]

1.2 For $\gamma(t)=(\cos t,\sin t)$ on $[0,2\pi]$, [L3] gives $F(\gamma(t))=\gamma'(t)=(-\sin t,\cos t)$. Hence [L3] and [L4] give $$\int_\gamma F\cdot d\mathbf r=\int_0^{2\pi}1\,dt=2\pi\ne0.$$ [given, L3, L4, algebra]

2.1 If $U=A\cup B$ were a separation into disjoint nonempty relatively open sets, choose $u\in A$ and $v\in B$ and let $\eta:[0,1]\to U$ be the path from step 1.1. The function equal to $0$ when $\eta(t)\in A$ and to $1$ when $\eta(t)\in B$ is locally constant, hence continuous, and has endpoint values $0$ and $1$. By [L5] it would take the value $1/2$, which is impossible. Thus $U$ is connected. [step 1.1, L5, choose, algebra]

3.1 If $F$ were exact, [L1] and [L2] would make the integral in step 1.2 zero. Thus it is not exact, and the statement is false despite steps 1.1 and 2.1. The valid correction in [L6] replaces connectedness by the stronger star-shaped hypothesis. [step 1.1, step 2.1, step 1.2, L1, L2, L6] ∎
