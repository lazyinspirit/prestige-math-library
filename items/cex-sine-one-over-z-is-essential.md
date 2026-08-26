---
id: cex-sine-one-over-z-is-essential
kind: counterexample
title: "sin(1/z) has an essential singularity at 0"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-trigonometric-and-hyperbolic-functions, thm-complex-trigonometric-hyperbolic-dictionary, thm-isolated-singularity-trichotomy]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Greenfield, Rutgers Math 403 diary"
      url: "https://sites.math.rutgers.edu/~greenfie/mill_courses/math403/diary2.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if a holomorphic function on a punctured disc stays bounded
along one approach ray to the centre, then its singularity there must be
removable or a pole.

The witness is

$$f(z)=\sin(1/z)$$

at $a=0$. It stays bounded on the positive real axis but still has an essential
singularity at $0$.

## Facts & Assumptions

**Given:** The function $f(z)=\sin(1/z)$ on $0<|z|<1$.

[L1] The complex sine is defined from the complex exponential, and $\sin(iu)=i\sinh(u)$ for real $u$ ([[def-complex-trigonometric-and-hyperbolic-functions]], [[thm-complex-trigonometric-hyperbolic-dictionary]]).

[L2] Every isolated singularity is removable, a pole, or essential ([[thm-isolated-singularity-trichotomy]]).

## Counterexample

**Proof technique:** direct.

1.1 For $t>0$, one has $|f(t)|=|\sin(1/t)|\le1$, so the function is bounded along the positive real axis approaching $0$. [given, algebra]

1.2 For $t>0$, $$f(it)=\sin(-i/t)=-i\sinh(1/t),$$ so $|f(it)|=|\sinh(1/t)|\to\infty$ as $t\downarrow0$; therefore the singularity is not removable. [L1, algebra]

2.1 Since $f$ is bounded along the positive real axis by step 1.1, the modulus does not tend to $\infty$ along every approach to $0$; therefore the singularity is not a pole. [step 1.1]

3.1 By [L2], a singularity that is neither removable nor a pole is essential, so $0$ is an essential singularity of $\sin(1/z)$. [step 1.2, step 2.1, L2] ∎
