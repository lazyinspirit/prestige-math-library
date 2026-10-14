---
id: thm-likelihood-ratio-change-of-measure
kind: theorem
title: "Likelihood-ratio change of measure"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-probability-measure
  - def-total-variation-of-a-signed-or-complex-measure
  - def-likelihood-ratio-as-rn-derivative
  - def-absolutely-continuous-with-respect-to-a-positive-measure
  - thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - lem-positive-lebesgue-components-of-a-positive-measure
  - lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative
  - def-measure
  - def-measure-with-density
  - thm-integration-against-a-density
  - cor-integral-over-a-null-set-vanishes
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-positive-and-negative-parts-of-a-function
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - thm-linearity-of-the-lebesgue-integral-on-l-one
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §3.2, PDF pp. 54–55"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 13.4 and proof, §13.2 (book pp. 100–103)"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 6.27 and proof, §6.8 (notes pp. 75–77)"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume AC and let $P_0,P_1$ be probability measures on one measurable space.
Let $r$ be a nonnegative measurable representative of the likelihood-ratio
class for $P_1$ versus $P_0$. If $P_1\ll P_0$, then
$$
E_{P_0}[g r]=E_{P_1}[g]
$$
for every nonnegative measurable $g$, and also for every real-valued
$P_1$-integrable measurable $g$. Here $E_{P_i}[h]$ means
$\int h\,dP_i$. Without $P_1\ll P_0$, this identity need not hold because the
singular component may be nonzero.

## Facts & Assumptions

**Given:** AC; probability measures $P_0,P_1$ on $(X,\mathcal A)$; a
nonnegative representative $r$ of their likelihood-ratio class; and, for the
identity, the additional hypothesis $P_1\ll P_0$.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has a choice function.

[F1] [[def-likelihood-ratio-as-rn-derivative]]: the likelihood-ratio class is $dP_{1,\mathrm{ac}}/dP_0$, where $P_1=P_{1,\mathrm{ac}}+P_{1,\mathrm{s}}$ is its Lebesgue decomposition.

[F2] [[thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures]]: two decompositions into an absolutely continuous part and a singular part have identical components.

[F3] [[lem-positive-lebesgue-components-of-a-positive-measure]] and [[def-total-variation-of-a-signed-or-complex-measure]]: for a positive finite $P_1$, both Lebesgue components are positive; hence $P_{1,\mathrm{ac}}$ is finite and its total variation equals itself.

[F4] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]] and [[lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative]]: under AC, a finite positive measure absolutely continuous with respect to the probability $P_0$ has a nonnegative density representative satisfying the setwise integral formula, and every representative of that class agrees with it $P_0$-almost everywhere.

[F5] [[def-measure-with-density]] and [[def-measure]]: $r\,dP_0$ is the measure $A\mapsto\int_A r\,dP_0$ when $r$ is nonnegative measurable, so its setwise values are additive over measurable partitions.

[F6] [[thm-integration-against-a-density]]: for nonnegative measurable $g$, $\int g\,d(r\,dP_0)=\int gr\,dP_0$.

[F7] [[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-positive-and-negative-parts-of-a-function]], [[prop-closure-properties-of-measurable-functions-used-by-the-integral]], and [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: a real integrable function has integrable measurable positive and negative parts, and the integral is linear on $L^1$.

[F8] [[cor-integral-over-a-null-set-vanishes]]: the integral of a nonnegative measurable function over a $P_0$-null set is zero.

## Proof

**Proof technique:** direct.

1.1 The decomposition $P_1=P_1+0$ has absolutely continuous part $P_1$ and singular part $0$, because the hypothesis gives $P_1\ll P_0$. Comparing it with the decomposition in [F1], uniqueness [F2] gives $P_{1,\mathrm{ac}}=P_1$ and $P_{1,\mathrm{s}}=0$. [A1, F1, F2, given, algebra]

2.1 By [F3], $P_{1,\mathrm{ac}}$ is positive and finite, and $P_0$ is a finite positive measure. Choose a nonnegative representative $\widehat r$ supplied by [F4], so $P_{1,\mathrm{ac}}(A)=\int_A\widehat r\,dP_0$ for every $A\in\mathcal A$. By step 1.1, $P_{1,\mathrm{ac}}=P_1$. The representative $r$ in the statement belongs to this same Radon–Nikodym class, so [F4] gives a measurable $P_0$-null set $N$ outside which $r=\widehat r$. By [F5], both $r\,dP_0$ and $\widehat r\,dP_0$ are measures; their values on $A\cap N$ are zero by [F8], and their values on $A\setminus N$ agree because the densities agree there. Measure additivity therefore gives $\int_A r\,dP_0=\int_A\widehat r\,dP_0=P_1(A)$ for every measurable $A$. Thus the density measure $r\,dP_0$ in [F5] equals $P_1$. [A1, F3, F4, F5, F8, step 1.1, given, choose]

3.1 For nonnegative measurable $g$, equality of these measures and [F6] give $\int g\,dP_1=\int g\,d(r\,dP_0)=\int gr\,dP_0$. This is the asserted expectation identity in the nonnegative case. [F5, F6, step 2.1]

4.1 Now let $g$ be real-valued and integrable under $P_1$. By [F7], $g^+$ and $g^-$ are measurable and integrable. Applying step 3.1 to each gives $\int g^\pm r\,dP_0=\int g^\pm\,dP_1<\infty$; applying it to $|g|$ also shows $\int |g|r\,dP_0=\int |g|\,dP_1<\infty$. Thus $gr\in L^1(P_0)$, and linearity from [F7] yields $\int gr\,dP_0=\int g^+r\,dP_0-\int g^-r\,dP_0=\int g\,dP_1$. [F7, step 3.1, given, algebra] ∎
