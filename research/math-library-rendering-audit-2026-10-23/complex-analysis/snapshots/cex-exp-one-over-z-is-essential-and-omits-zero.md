---
id: cex-exp-one-over-z-is-essential-and-omits-zero
kind: counterexample
title: "e^{1/z} has an essential singularity at 0 and omits the value 0"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-isolated-singularity-trichotomy, thm-casorati-weierstrass, thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-addition-and-real-extension]
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

**Refuted claim:** an essential singularity attains every complex value on each
punctured neighbourhood.

The witness is

$$f(z)=e^{1/z}$$

at $a=0$. The singularity is essential, but the value $0$ is omitted on every
punctured neighbourhood of $0$.

## Facts & Assumptions

**Given:** The function $f(z)=e^{1/z}$ on $0<|z|<1$.

[L1] Every isolated singularity is removable, a pole, or essential ([[thm-isolated-singularity-trichotomy]]).

[L2] The complex exponential is entire ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[L3] The exponential satisfies $\exp(u+v)=\exp(u)\exp(v)$ for all complex $u,v$ ([[thm-complex-exponential-addition-and-real-extension]]).

## Counterexample

**Proof technique:** direct.

1.1 Since $z\mapsto1/z$ is holomorphic on $0<|z|<1$ and $\exp$ is entire by [L2], the function $f(z)=e^{1/z}$ is holomorphic on $0<|z|<1$. [L2, algebra]

1.2 If $e^{1/z_0}=0$ for some $z_0\ne0$, then [L3] gives $1=e^{1/z_0}e^{-1/z_0}=e^0=0$, impossible. Hence $e^{1/z}$ never takes the value $0$. [L3, algebra]

2.1 Along the positive real axis, $f(t)=e^{1/t}\to\infty$ as $t\downarrow0$, so the singularity is not removable. Along the negative real axis, $f(-t)=e^{-1/t}\to0$ as $t\downarrow0$, so the singularity is not a pole. [step 1.1, algebra]

3.1 By [L1], a singularity that is neither removable nor a pole is essential, so $0$ is an essential singularity of $e^{1/z}$. [step 2.1, L1]

4.1 Thus $e^{1/z}$ has an essential singularity at $0$ and still omits the value $0$, refuting the claim and showing why [[thm-casorati-weierstrass]] gives density rather than surjectivity. [step 3.1, step 1.2] ∎
