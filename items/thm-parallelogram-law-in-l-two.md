---
id: thm-parallelogram-law-in-l-two
kind: theorem
title: "The parallelogram law in $L^2$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, thm-generalized-holder-inequality-for-products, thm-linearity-of-the-lebesgue-integral-on-l-one]
proof_strategy: "Expand |f + g|^2 + |f - g|^2 pointwise to 2|f|^2 + 2|g|^2 and integrate."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory, Chapter 15"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Section 7B"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

For $u,v\in L^2(\mu)$ one has

$$\|u+v\|_2^2+\|u-v\|_2^2=2\|u\|_2^2+2\|v\|_2^2.$$

## Facts & Assumptions

**Given:** Classes $u,v\in L^2(\mu)$ with measurable representatives $f,g$.

[L1] The $L^2$ norm is well defined on quotient classes
([[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]).

[L2] Products of two $L^2$ functions lie in $L^1$
([[thm-generalized-holder-inequality-for-products]]).

[L3] The Lebesgue integral is linear on $L^1$
([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** Expand $|f + g|^2 + |f - g|^2$ pointwise to
$2|f|^2 + 2|g|^2$ and integrate.

1.1 Because $f,g\in L^2(\mu)$, step [L2] puts $fg$ in $L^1(\mu)$, so every term [L2, L3, given, algebra]
in the algebraic expansions below is integrable. Pointwise,
$$|f+g|^2+|f-g|^2=(f+g)^2+(f-g)^2=2f^2+2g^2.$$
Integrating and using [L3] gives
$$\int |f+g|^2\,d\mu+\int |f-g|^2\,d\mu=2\int |f|^2\,d\mu+2\int |g|^2\,d\mu.$$

2.1 Rewriting the four integrals as $\|u+v\|_2^2$, $\|u-v\|_2^2$, [step 1.1, L1]
$\|u\|_2^2$, and $\|v\|_2^2$ is legitimate by [L1]. That yields the
parallelogram identity. ∎
