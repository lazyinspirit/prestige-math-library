---
id: thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one
kind: theorem
title: "The $p$-power triangle inequality for nonnegative functions when $0 < p < 1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-calligraphic-l-p-on-a-measure-space, def-real-power, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing, prop-order-and-scalar-rules-for-the-nonnegative-integral, cor-additivity-of-the-nonnegative-lebesgue-integral]
proof_strategy: "For nonnegative numbers a, b and 0 < p < 1 one has (a + b)^p <= a^p + b^p. Apply this pointwise to f and g and integrate."
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorem 8.16"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
    - title: "John K. Hunter, Measure Theory, reverse inequality discussion before Definition 7.6"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-08-outside-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $0<p<1$ and let $f,g\in\mathcal L^p(\mu)$ be nonnegative. Then

$$\|f+g\|_p^p\le\|f\|_p^p+\|g\|_p^p.$$

Equivalently,

$$\int (f+g)^p\,d\mu\le\int f^p\,d\mu+\int g^p\,d\mu.$$

## Facts & Assumptions

**Given:** An exponent $0<p<1$ and nonnegative functions $f,g\in\mathcal L^p(\mu)$.

[L1] For $0<p<1$ and $0<u\le1$, $p\log u\ge\log u$, hence $u^p\ge u$ by the definition of real power and strict increase of the exponential. The same inequality holds at $u=0$ ([[def-real-power]], [[thm-natural-logarithm-laws]], [[thm-exponential-is-strictly-increasing]]).

[L2] The nonnegative integral is monotone and additive ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

## Proof

**Proof technique:** For nonnegative numbers $a,b$ and $0<p<1$ one has $(a+b)^p\le a^p+b^p$. Apply this pointwise to $f$ and $g$ and integrate.

1.1 For nonnegative reals $a,b$ with $a+b>0$, set $s=a+b$, $u=a/s$ and $v=b/s$. Then $u,v\in[0,1]$, $u+v=1$, and [L1] gives $a^p+b^p=s^p(u^p+v^p)\ge s^p=(a+b)^p$; for $a+b=0$ equality is immediate. Apply this scalar inequality pointwise to $f,g$ to obtain [L1, given, algebra]
$$(f+g)^p\le f^p+g^p.$$

2.1 Integrating and using monotonicity and additivity from [L2] yields [step 1.1, L2]
$$\int (f+g)^p\,d\mu\le\int f^p\,d\mu+\int g^p\,d\mu.$$ This is exactly the displayed $\|\,\cdot\,\|_p^p$ inequality. ∎
