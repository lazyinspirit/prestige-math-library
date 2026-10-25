---
id: def-aqft-profile-likelihood-ratio
kind: definition
title: Profile likelihood ratios with nuisance parameters
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-cm-likelihood-function
  - def-extended-reals
  - lem-extended-reals-complete
dependency_roles:
  def-cm-likelihood-function: mathematical-premise
  def-extended-reals: mathematical-premise
  lem-extended-reals-complete: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: not-applicable
physical_scope: Pure statistical-mathematical definition; it makes no physical or empirical claim.
axiom_base: ZF
sources:
  references:
    - title: "Glen Cowan, Kyle Cranmer, Eilam Gross, and Ofer Vitells, “Asymptotic formulae for likelihood-based tests of new physics”"
      url: https://arxiv.org/pdf/1007.1727v3
      locator: Section 2, equations (7)–(8), with the conditional and unconditional nuisance-parameter fits distinguished.
    - title: "Larry Wasserman, All of Statistics: A Concise Course in Statistical Inference"
      url: https://sites.santafe.edu/~aaronc/shared/Wasserman_AllOfStatistics_BOOK.pdf
      locator: Chapter 10, §10.6, Definition 10.21 and Theorem 10.22, likelihood-ratio testing with constrained parameter sets.
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Let $(S,\mathcal S)$ be a measurable data space, let $\nu$ be a measure on it, and let $\Psi$ and $H$ be nonempty parameter sets. For each $(\psi,\eta)\in\Psi\times H$, let $p_{\psi,\eta}:S\to[0,+\infty]$ be a specified measurable density with $\int_S p_{\psi,\eta}\,d\nu=1$. A specified pointwise version of each density is part of the model because an observed-data likelihood can depend on the representative chosen within an almost-everywhere equivalence class. The coordinate $\psi$ is the parameter of interest; $\eta$ is a nuisance coordinate, meaning that it is retained in the probability model but is not the parameter whose value is tested or reported. The common dominating measure $\nu$ and the full density family are part of the model.

For observed data $s\in S$, define the likelihood $L_s(\psi,\eta)=p_{\psi,\eta}(s)$. Take both suprema below in the extended real line and suppose the global supremum
$$M_s:=\sup_{(\psi',\eta')\in\Psi\times H}L_s(\psi',\eta')$$
satisfies $0<M_s<+\infty$. For each $\psi\in\Psi$, define the profile likelihood $M_s(\psi)=\sup_{\eta\in H}L_s(\psi,\eta)$ and the profile likelihood ratio
$$\lambda_s(\psi):=\frac{M_s(\psi)}{M_s}\in[0,1].$$
The associated likelihood-ratio statistic is
$$q_s(\psi):=\begin{cases}-2\log\lambda_s(\psi),&\lambda_s(\psi)>0,\\ +\infty,&\lambda_s(\psi)=0,\end{cases}$$
where $\log$ is the real natural logarithm on $(0,\infty)$. These definitions use suprema and do not require a maximizing parameter value to exist. The distribution of $q_s$, a p-value calibration, and the coverage of a confidence set require additional model and sampling assumptions; none follows from this definition.

## Definition references

[[def-cm-likelihood-function|Dominated parametric likelihoods and their common dominating measure]]

[[def-extended-reals|Extended-real order and arithmetic conventions]]

[[lem-extended-reals-complete|Existence and uniqueness of extended-real suprema]]

[Cowan et al., full likelihood-based tests paper, §2](https://arxiv.org/pdf/1007.1727v3)

[Wasserman, full statistics textbook, Chapter 10 §10.6](https://sites.santafe.edu/~aaronc/shared/Wasserman_AllOfStatistics_BOOK.pdf)
