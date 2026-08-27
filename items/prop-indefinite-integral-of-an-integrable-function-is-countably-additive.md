---
id: prop-indefinite-integral-of-an-integrable-function-is-countably-additive
kind: proposition
title: "The indefinite integral of an integrable function is countably additive on measurable sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Proposition 2.23"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

If $f\in L^1(\mu)$ and
$$\nu_f(A):=\int f\chi_A\,d\mu \qquad (A\in\mathcal A),$$
then $\nu_f$ is countably additive on pairwise disjoint measurable families.
Here $f\chi_A$ is integrable because $|f\chi_A|\le |f|$; this formula defines
the notation $\int_A f\,d\mu$ for integrable real or complex $f$.

## Facts & Assumptions

**Given:** An integrable function $f$.

[L1] For every nonnegative measurable $h$, the set function $A\mapsto\int_A h\,d\mu$ is a measure ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]).

[L2] Real and complex integrability are defined by positive/negative parts and by real/imaginary parts ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

[L3] The Lebesgue integral is linear on $L^1(\mu)$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** direct.

1.1 For real-valued $f$, write $f=f^+-f^-$. Then [L1, L2, L3]
$$\nu_f=\nu_{f^+}-\nu_{f^-},$$
and both $\nu_{f^+}$ and $\nu_{f^-}$ are measures by [L1]. Because
$f\in L^1(\mu)$, the total masses of those measures are finite, so subtracting
their countably additive values on a disjoint family is legitimate and gives
countable additivity of $\nu_f$.

2.1 For complex-valued $f=u+iv$, one has [step 1.1, L2, L3] ∎
$$\nu_f=\nu_u+i\nu_v,$$
and step 1.1 applies to the real-valued functions $u$ and $v$. Therefore
$\nu_f$ is countably additive as well.
