---
id: fs-linearity-without-the-integrability-hypothesis
kind: false-statement
title: "FALSE: the Lebesgue integral extends linearly to all measurable functions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-linearity-of-the-lebesgue-integral-on-l-one]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., §2.3"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Whenever measurable real-valued functions $f$, $g$, and $f+g$ all have defined
extended Lebesgue integrals, the extended-real sum
$\int f\,d\mu+\int g\,d\mu$ is defined and equals $\int(f+g)\,d\mu$.

## Facts & Assumptions

**Given:** The statement above.

[L1] The actual linearity theorem only applies on $L^1(\mu)$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Refutation

**Proof technique:** direct.

1.1 On $\mathbb R$ with Lebesgue measure, let $f:=\chi_{[0,\infty)}$; its nonnegative Lebesgue integral is $+\infty$. [given, construct]

2.1 The integrals of $f$, $-f$, and $f-f=0$ are individually defined, with [step 1.1, L1, algebra]
values $+\infty$, $-\infty$, and $0$. But
$$\int f\,d\lambda+\int(-f)\,d\lambda=+\infty+(-\infty)$$
is undefined, so the claimed unrestricted linearity identity fails. This is
why [L1] restricts linearity to $L^1$. [step 1.1, L1, algebra] ∎
