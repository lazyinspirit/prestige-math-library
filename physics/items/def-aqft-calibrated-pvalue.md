---
id: def-aqft-calibrated-pvalue
kind: definition
title: Upper-tail p-values under an explicit null calibration
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-borel-sigma-algebra
  - def-cm-statistical-test-and-size
  - def-probability-measure
dependency_roles:
  def-borel-sigma-algebra: mathematical-premise
  def-cm-statistical-test-and-size: mathematical-premise
  def-probability-measure: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: not-applicable
physical_scope: Pure statistical-mathematical definition; it makes no physical or empirical claim.
axiom_base: ZF
sources:
  references:
    - title: "Larry Wasserman, All of Statistics: A Concise Course in Statistical Inference"
      url: https://sites.santafe.edu/~aaronc/shared/Wasserman_AllOfStatistics_BOOK.pdf
      locator: Chapter 10, §§10.2 and 10.12, the nested-test and null-tail definitions and the warning that a p-value is not the probability the null is true.
    - title: "Glen Cowan, Kyle Cranmer, Eilam Gross, and Ofer Vitells, “Asymptotic formulae for likelihood-based tests of new physics”"
      url: https://arxiv.org/pdf/1007.1727v3
      locator: Section 2.1, equations (8)–(9), and Section 2.3, equation (13), p-values from the stated statistic distribution under the tested hypothesis.
verification:
  precheck: pending
---

## Definition

Let $(S,\mathcal S)$ be a measurable data space, let $\Theta$ be a nonempty parameter set, and let $(\mathbb P_\theta)_{\theta\in\Theta}$ be a family of probability measures on $(S,\mathcal S)$; these data form the statistical model. Let $\Theta_0\subseteq\Theta$ be a nonempty null set and let $T:S\to\mathbb R$ be a measurable statistic, meaning $T^{-1}(A)\in\mathcal S$ for every $A\in\mathcal B(\mathbb R)$; in particular every upper-tail set is measurable. Fix an explicit calibration probability measure $Q_0$ on $(\mathbb R,\mathcal B(\mathbb R))$ for the statistic under the null procedure. For a simple null $\Theta_0=\{\theta_0\}$, the exact calibration is $Q_0=\mathbb P_{\theta_0}\circ T^{-1}$, meaning $Q_0(A)=\mathbb P_{\theta_0}(T^{-1}(A))$ for every Borel set $A$. For a composite null or an asymptotic analysis, $Q_0$ is supplied by the specified calibration procedure, whose nuisance-parameter treatment and approximation assumptions are part of the data.

For an observed datum $s\in S$, with the convention that larger $T$ values are more extreme, the upper-tail p-value is
$$p_0(s):=Q_0\bigl(\{t\in\mathbb R:t\ge T(s)\}\bigr).$$
It is a probability under the stated null calibration for a test statistic at least as extreme as the observed one. It is not a probability assigned to the null hypothesis conditional on the data; no probability distribution on $\Theta$ is supplied by this definition. The definition alone establishes neither type-I error control nor super-uniformity; any such validity claim requires a separate argument for the specified sampling model and calibration. A lower-tail or two-sided procedure must specify its own measurable extremeness set instead of using the displayed upper-tail convention.

## Definition references

[[def-cm-statistical-test-and-size|Model families, null sets, and statistical tests]]

[[def-borel-sigma-algebra|Borel sets used for the calibration law]]

[[def-probability-measure|Probability measures]]

[Wasserman, full statistics textbook, Chapter 10 §§10.2 and 10.12](https://sites.santafe.edu/~aaronc/shared/Wasserman_AllOfStatistics_BOOK.pdf)

[Cowan et al., full likelihood-based tests paper, §§2.1 and 2.3](https://arxiv.org/pdf/1007.1727v3)
