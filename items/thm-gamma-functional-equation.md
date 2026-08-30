---
id: thm-gamma-functional-equation
kind: theorem
title: "The Gamma functional equation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-euler-gamma-function,
       lem-gamma-integral-converges-locally-uniformly,
       thm-integration-by-parts]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1(iv)"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
    - title: "M. Weber, Complex Analysis, §3.7"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

For every $z$ with $\operatorname{Re}z>0$,

$$\Gamma(z+1)=z\Gamma(z).$$

## Facts & Assumptions

**Given:** A complex number $z$ with $\operatorname{Re}z>0$.

[L1] Integration by parts holds on compact intervals
([[thm-integration-by-parts]]).

[L2] The Gamma integral converges locally uniformly on right-half-plane compact
sets ([[lem-gamma-integral-converges-locally-uniformly]]).

[L3] Euler's Gamma function is the improper integral
$\int_0^\infty t^{z-1}e^{-t}\,dt$ on $\operatorname{Re}z>0$
([[def-euler-gamma-function]]).

## Proof

**Proof technique:** direct.

1.1 For $0<\varepsilon<R$, apply [L1] on $[\varepsilon,R]$ with $u(t)=t^z$ and $v'(t)=e^{-t}$. This gives $$\int_\varepsilon^R t^ze^{-t}\,dt =\bigl[-t^ze^{-t}\bigr]_\varepsilon^R +z\int_\varepsilon^R t^{z-1}e^{-t}\,dt.$$ [given, L1]
2.1 Since $\operatorname{Re}z>0$, one has $|\varepsilon^ze^{-\varepsilon}|=\varepsilon^{\operatorname{Re}z}e^{-\varepsilon}\to0$ as $\varepsilon\downarrow0$, and $|R^ze^{-R}|=R^{\operatorname{Re}z}e^{-R}\to0$ as $R\uparrow\infty$. Passing to the improper limits in step 1.1 and using [L2] and [L3] gives $\Gamma(z+1)=z\Gamma(z)$. [step 1.1, L2, L3, algebra] ∎