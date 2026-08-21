---
id: cex-uniqueness-does-not-require-local-lipschitz-continuity
kind: counterexample
title: "An almost-Lipschitz vector field has a unique solution through zero but is not locally Lipschitz there"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-osgood-uniqueness-criterion-for-first-order-odes, def-locally-lipschitz-in-the-state-variable, thm-logarithm-derivative-and-integral, def-modulus-of-continuity-and-osgood-condition]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement refuted

Local Lipschitz continuity is necessary for uniqueness through an initial point. Define $f(0)=0$ and, for $0<|x|<e^{-1}$,

$$f(x)=x(1+|\log|x||),$$

with any continuous extension outside that interval. An almost-Lipschitz vector field has a unique solution through zero but is not locally Lipschitz there.

## Facts & Assumptions

**Given:** The displayed field and the zero IVP $y'=f(y)$, $y(0)=0$.

[L1] The Osgood divergence condition gives uniqueness of solutions through the same initial value ([[thm-osgood-uniqueness-criterion-for-first-order-odes]]).

[L2] For $x>0$, $\log'(x)=1/x$ and $\log x=\int_1^xdt/t$ ([[thm-logarithm-derivative-and-integral]]).

[L3] An Osgood modulus is positive away from zero, nondecreasing, and has a divergent reciprocal integral at zero ([[def-modulus-of-continuity-and-osgood-condition]]).

## Counterexample

**Proof technique:** direct.

1.1 The quotient $|f(x)-f(0)|/|x|=1+|\log|x||$ is unbounded as $x\to0$ by [L2], so $f$ is not locally Lipschitz at zero. [given, L2, algebra]

2.1 Define $\phi(r)=r(1-\log r)$ for $0<r\le e^{-1}$ with $\phi(0)=0$, and put $\rho=2\phi$ on $[0,e^{-1}]$. Differentiation using [L2] shows that $\phi$ is increasing and concave on this interval. On one side of zero, concavity with $\phi(0)=0$ gives $|\phi(a)-\phi(b)|\le\phi(|a-b|)$; on opposite sides, $|a-b|=|a|+|b|$ and monotonicity gives $\phi(|a|)+\phi(|b|)\le2\phi(|a-b|)$. Since $f$ is the odd extension of $\phi$ near zero, $\rho$ is therefore a state modulus there. It has the properties in [L3], and the substitution $u=1-\log r$ gives its reciprocal divergence, so [L1] makes the zero solution unique through the origin. [step 1.1, L1, L2, L3, algebra] ∎
