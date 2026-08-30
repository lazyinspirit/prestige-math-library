---
id: fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness
kind: false-statement
title: "FALSE: the Radon-Nikodym theorem holds without sigma-finiteness"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-counting-measure, prop-counting-measure-is-a-measure,
       def-measure-with-density, cor-interval-uncountable,
       cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity,
       thm-existence-of-the-lebesgue-stieltjes-measure]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Exercise 13"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Example 6.28"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

**False claim:** If positive measures satisfy $\nu\ll\mu$, then there is always
a nonnegative measurable function $f$ with
$\nu(E)=\int_Ef\,d\mu$ for every measurable set $E$, even when $\mu$ is not
sigma-finite.

## Facts & Assumptions

**Given:** Counting measure $c$ and Lebesgue measure $\lambda$ on $[0,1]$.

[L1] Counting measure is a measure with $c(\{x\})=1$ for each point. ([[def-counting-measure]], [[prop-counting-measure-is-a-measure]])

[L2] A nonnegative density representation would satisfy
$\lambda(E)=\int_Ef\,dc$ on every measurable set
([[def-measure-with-density]]).

[L3] The interval $[0,1]$ is uncountable ([[cor-interval-uncountable]]).

[L4] Lebesgue measure is the Lebesgue--Stieltjes measure of the identity, and
that measure assigns $(a,b]$ the increment $b-a$
([[cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity]],
[[thm-existence-of-the-lebesgue-stieltjes-measure]]).

## Refutation

**Proof technique:** direct.

1.1 Lebesgue measure is absolutely continuous with respect to counting measure on $[0,1]$, because every counting-null measurable set is empty. Moreover, a set has finite counting measure only when it is finite. If $c$ were sigma-finite, $[0,1]$ would be a countable union of finite sets and hence countable, contradicting [L3]. Thus the dominating measure is not sigma-finite. [L1, L3, given, algebra]

2.1 If a density $f$ as in [L2] existed, then applying it to singletons and using [L1] would give $f(x)=0$ for every $x\in[0,1]$. But [L4] gives $\lambda((0,1])=1$, whereas the assumed representation gives $\lambda((0,1])=\int_{(0,1]}f\,dc=0$. Hence the theorem fails without sigma-finiteness of the dominating measure. [step 1.1, L1, L2, L4, contradiction: total mass one, discharge-contradiction] ∎
