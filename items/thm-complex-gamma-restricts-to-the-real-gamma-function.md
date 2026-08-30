---
id: thm-complex-gamma-restricts-to-the-real-gamma-function
kind: theorem
title: "The complex Gamma function restricts to the real Gamma function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-euler-gamma-function,
       def-real-gamma-function-by-the-euler-integral,
       thm-euler-gamma-function-is-holomorphic,
       thm-real-gamma-euler-integral-convergence]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1(iii)"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

For every real $x>0$, the complex Gamma function satisfies

$$\Gamma(x)=\int_0^\infty t^{x-1}e^{-t}\,dt,$$

so its restriction to $(0,\infty)$ is exactly the previously defined real Gamma
function.

## Facts & Assumptions

**Given:** A real number $x>0$.

[L1] The real Gamma function is defined by the same Euler integral for $x>0$
([[def-real-gamma-function-by-the-euler-integral]]).

[L2] That real Euler integral converges exactly for $x>0$
([[thm-real-gamma-euler-integral-convergence]]).

[L3] The complex Gamma function is defined by the same integral on
$\operatorname{Re}z>0$ ([[def-euler-gamma-function]]).

## Proof

**Proof technique:** direct.

1.1 For $t>0$ and real $x$, the complex-analytic convention gives $t^{x-1}=\exp((x-1)\log t)$, which is the ordinary real power. [given]
2.1 Since $x>0$, [L2] says the integral converges, and [L1] names its value as the real Gamma function. By [L3], the complex Gamma function assigns exactly the same integral to $x$. Therefore the two constructions agree on $(0,\infty)$. [step 1.1, L1, L2, L3] ∎