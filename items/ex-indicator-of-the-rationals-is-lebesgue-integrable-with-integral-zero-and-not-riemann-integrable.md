---
id: ex-indicator-of-the-rationals-is-lebesgue-integrable-with-integral-zero-and-not-riemann-integrable
kind: example
title: "The indicator of the rationals in $[0,1]$ is Lebesgue integrable with integral $0$ and not Riemann integrable"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-dirichlet-and-thomae-functions, thm-dirichlet-and-thomae-continuity-sets, lem-countable-sets-are-null, thm-lebesgue-measure-is-a-complete-measure, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, cor-riemann-integrability-and-lebesgue-null-discontinuity-sets, thm-lebesgue-measure-of-a-box-of-every-kind]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Version 5.0, Example 9.2"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Example

Assume the Axiom of Countable Choice. Let
$f:=\mathbf 1_{\mathbb Q\cap[0,1]}:[0,1]\to\mathbb R$. Then $f$ is Lebesgue
integrable with
$$\int_{[0,1]} f\,d\lambda_1=0,$$
but $f$ is not Riemann integrable on $[0,1]$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Dirichlet function
$\mathbf 1_{\mathbb Q}$.

[L1] The Dirichlet function is the indicator of the rationals.
([[def-dirichlet-and-thomae-functions]])

[L2] Every at most countable subset of $\mathbb R$ has measure zero.
([[lem-countable-sets-are-null]])

[L3] Every subset of a measurable null set is Lebesgue measurable and null.
([[thm-lebesgue-measure-is-a-complete-measure]])

[L4] A nonnegative measurable function has integral $0$ exactly when it
vanishes almost everywhere.
([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[L5] The Dirichlet function is continuous at no point of $\mathbb R$.
([[thm-dirichlet-and-thomae-continuity-sets]])

[L6] A bounded function on $[0,1]$ is Riemann integrable exactly when its
discontinuity set has Lebesgue measure $0$.
([[cor-riemann-integrability-and-lebesgue-null-discontinuity-sets]])

[L7] The interval $[0,1]$ has Lebesgue measure $1$.
([[thm-lebesgue-measure-of-a-box-of-every-kind]])

## Verification

**Proof technique:** direct.

1.1 By [L1], the function $f$ is $1$ on $\mathbb Q\cap[0,1]$ and $0$ on its [L1, L2, L3, L4]
complement. The set $\mathbb Q\cap[0,1]$ is countable, hence null by [L2], and
[L3] makes it Lebesgue measurable. Therefore $f=0$ almost everywhere on
$[0,1]$, so [L4] gives
$$\int_{[0,1]} f\,d\lambda_1=0.$$

1.2 By [L5], every point of $[0,1]$ is a discontinuity of $f$. Thus the [L5, L6, L7]
discontinuity set of $f$ is the whole interval $[0,1]$, whose Lebesgue measure
is $1$ by [L7], not $0$. So [L6] shows that $f$ is not Riemann integrable. ∎
