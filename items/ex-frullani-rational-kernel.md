---
id: ex-frullani-rational-kernel
kind: example
title: "A rational-kernel Frullani integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-frullani-integral-proper-factor,
       thm-comparison-test-for-improper-integrals,
       thm-improper-p-test-rational, thm-algebra-of-function-limits,
       def-oriented-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Frullani integral exercise"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Example

For $a,b>0$,
$$\int_0^\infty\frac{(1+ax)^{-1}-(1+bx)^{-1}}x\,dx=\int_a^b\frac{dt}{t}.$$

## Facts & Assumptions

**Given:** Positive $a,b$ and $f(t)=1/(1+t)$.

[L1] Frullani's formula gives $(f(0)-L)\int_a^b dt/t$ when $f(t)\to L$ ([[thm-frullani-integral-proper-factor]]).

[L2] The $p$-test gives convergence of $\int_1^\infty x^{-2}dx$ ([[thm-improper-p-test-rational]]).

## Verification

**Proof technique:** computation.

1.1 Here $f$ is continuous, $f(0)=1$, and $f(t)\to0$. Thus [L1] gives exactly the displayed identity. [L1]

1.2 For $x>0$, the integrand simplifies to [L2]
$$\frac{b-a}{(1+ax)(1+bx)}.$$
It has finite limit $b-a$ at zero and is bounded in absolute value by a constant multiple of $x^{-2}$ for $x\ge1$. This independently confirms local convergence at zero and tail convergence by [L2], without replacing the proper factor by a logarithm. ∎
