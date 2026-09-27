---
id: thm-continuous-mean-value-functions-are-harmonic
kind: theorem
title: "Continuous ball-mean-value functions are harmonic"
status: published
origin: pipeline
deps: [def-laplacian-of-a-c2-function, def-spherical-averages-and-local-ball-means-in-rn, lem-sphere-and-ball-measures-scale, thm-polar-coordinates-formula-for-lebesgue-measure, lem-radial-mollification-fixes-local-mean-value-functions, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, cor-second-order-taylor-expansion-with-the-hessian, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (thm-continuous-mean-value-functions-are-harmonic). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Statement

Assume the Axiom of Countable Choice. If $u\in C(\Omega)$ has the ball mean-value property, then $u\in C^\infty(\Omega)$ and $\Delta u=0$.

## Facts & Assumptions

**Given:** Countable Choice, an open $\Omega\subseteq\mathbb R^n$ with $n\ge1$, and $u\in C(\Omega)$ with the ball mean-value property.

[L1] Polar coordinates for nonnegative Borel functions hold under Countable Choice ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[L2] The sphere and ball measure formulas hold under Countable Choice ([[lem-sphere-and-ball-measures-scale]]).

[L3] A radial mollifier fixes a continuous function with the spherical mean-value property under Countable Choice ([[lem-radial-mollification-fixes-local-mean-value-functions]]).

[L4] Convolution of a locally integrable function with a smooth compactly supported mollifier is smooth under Countable Choice ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]).

[L5] The second-order Taylor formula has a Peano remainder for $C^2$ functions ([[cor-second-order-taylor-expansion-with-the-hessian]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in\Omega$ and $R>0$ with $\overline{B_R(x)}\subseteq\Omega$. Polar coordinates and the ball-volume formula give, for $0<r\le R$, $\int_0^r t^{n-1}M_u(x,t)\,dt=\frac{r^n}{n}A_u(x,r)=\frac{r^n}{n}u(x)$. Here $M_u(x,t)$ is continuous in $t$: $u$ is uniformly continuous on the compact closed ball, and the sphere measure is finite. Differentiating the two sides for $0<r<R$ gives $r^{n-1}M_u(x,r)=r^{n-1}u(x)$, hence the spherical mean-value property. [given, L1, L2, algebra]

2.1 To justify smoothness locally, choose $x_0\in\Omega$ and $R>0$ with $\overline{B_{3R}(x_0)}\subseteq\Omega$. Define $f$ on $\mathbb R^n$ to equal $u$ on $B_{2R}(x_0)$ and zero outside it. This is locally integrable, since $u$ is bounded on the compact closed $2R$-ball. Choose a radial mollifier $\rho_\varepsilon$ with $0<\varepsilon<R$. For every $x\in B_R(x_0)$ its convolution with $f$ uses only values inside $B_{2R}(x_0)$, so step 1.1 and [L3] give $(f*\rho_\varepsilon)(x)=u(x)$. The convolution is smooth by [L4]. Since $x_0$ was arbitrary, $u\in C^\infty(\Omega)$. [step 1.1, L3, L4, construct]

3.1 Taylor's formula at any $x$ gives $u(x+h)=u(x)+\nabla u(x)\cdot h+\tfrac12 h^TH_u(x)h+o(|h|^2)$ uniformly as $|h|\le r\to0$. Averaging over $B_r(0)$ kills the linear and off-diagonal quadratic terms by reflection symmetry. Rotation symmetry makes every diagonal second moment equal; their sum is $|B_r|^{-1}\int_{B_r}|h|^2\,dh=nr^2/(n+2)$ by the polar formula and the ball-volume formula. Thus each diagonal moment is $r^2/(n+2)$, and $A_u(x,r)=u(x)+\frac{r^2}{2(n+2)}\Delta u(x)+o(r^2)$. [step 2.1, L1, L2, L5, algebra]

4.1 The ball mean-value identity makes the left side equal to $u(x)$. Divide step 3.1 by $r^2$ and let $r\downarrow0$ to obtain $\Delta u(x)=0$. The point $x$ was arbitrary. [given, step 3.1] ∎
