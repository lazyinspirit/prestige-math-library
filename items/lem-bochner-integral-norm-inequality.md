---
id: lem-bochner-integral-norm-inequality
kind: lemma
title: "Bochner integral norm inequality"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-bochner-integrability-criterion, lem-banach-valued-simple-integral-is-well-defined, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral]
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
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Section 11.6, Lemmas 11.28(v) and 11.29, printed pp. 332--333"
pipeline_run: phase-2-next-18
---

## Statement

If $f:\Omega\to X$ is Bochner integrable, then for every measurable $E$,

$$\left\|\int_E f\,d\mu\right\|\leq\int_E\|f\|\,d\mu.$$

## Facts & Assumptions

[L1] For a strongly measurable function, Bochner integrability is equivalent
to finite integrability of its norm. Every Bochner-integrable function has a
defining integrable-simple approximation converging in $L^1$
([[thm-bochner-integrability-criterion]]).

[L2] The inequality holds for integrable Banach-valued simple functions
([[lem-banach-valued-simple-integral-is-well-defined]]).

[L3] The nonnegative integral is additive
([[cor-additivity-of-the-nonnegative-lebesgue-integral]]) and monotone
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

## Proof

**Proof technique:** direct.

**Given:** A Bochner-integrable $f$ and a measurable set $E$.

1.1 Restrict a defining simple approximation to $E$. [given, L1, choose]
Choose integrable simple $s_n$ with $\int\|f-s_n\|\to0$. Replacing each
by $\mathbf1_Es_n$ shows from [L1] that $\mathbf1_Ef$ is Bochner integrable and
that its integral is the norm limit of $\int_Es_n$. [given, L1, choose]

2.1 Bound each simple integral. [L2, L3, step 1.1]
The triangle inequality and [L2] give
$\|\int_Es_n\|\leq\int_E\|s_n\|$. Since
$\|s_n\|\leq\|f\|+\|s_n-f\|$, [L3] yields
$\|\int_Es_n\|\leq\int_E\|f\|+\int_E\|s_n-f\|$. [L2, L3, step 1.1]

3.1 Pass to the limit and conclude. [step 1.1, step 2.1]
Let $n\to\infty$ in step 2.1. Norm continuity and step 1.1 identify the
left limit with $\|\int_Ef\|$, while the last term tends to zero. This proves
the inequality, including $E=\varnothing$ and $f=0$. [step 1.1, step 2.1] ∎
