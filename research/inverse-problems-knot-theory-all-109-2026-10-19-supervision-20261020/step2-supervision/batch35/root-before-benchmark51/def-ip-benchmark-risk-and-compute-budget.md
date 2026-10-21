---
id: def-ip-benchmark-risk-and-compute-budget
kind: definition
title: Benchmark risk, compute budgets, and uncertainty records
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-admissible-constraint-class
  - def-ip-inverse-risk-under-train-and-test-laws
  - def-ip-learned-reconstruction-estimator
  - def-ip-operator-and-prior-mismatch
  - def-ip-pde-solver-admissibility-contract
justified_by: []
forward_refs: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
axiom_use: "No choice axiom is used; laws, methods, samples, solvers, and finite budgets are supplied inputs."
sources:
  references:
    - title: "Guillaume Bal, Introduction to Inverse Problems, E6901 Lecture Notes for 2011 course, full 132-page PDF"
      url: "https://www.stat.uchicago.edu/~guillaumebal/COURSES/E6901/LectureNotesIP.pdf"
      locator: "§1.1, PDF pp. 3–4, separates measurement operator, modeling/noise, prior information, and numerical implementation; §§8.2–8.3, PDF pp. 91–97, specify data misfit, regularization/prior, likelihood, and computational limits."
    - title: "Hongkai Zheng et al., InverseBench: Benchmarking Plug-and-Play Diffusion Priors for Inverse Problems in Physical Sciences, ICLR 2025, full 29-page paper and appendices"
      url: "https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf"
      locator: "§§2.1–2.3 and 3–4.2, PDF pp. 2–7, specify forward models, noise types, algorithm requirements, training/test populations, metrics, and compute measures; Appendix B.7.2, PDF pp. 27–28, describes validation-based hyperparameter selection."
---

## Definition

Fix measurable spaces $(X,\mathcal X)$ and $(Y,\mathcal Y)$, a metric target space $(Q,d_Q)$ with its Borel sigma-algebra $\mathcal Q$, and a nonempty truth class $U\subseteq X$ with inherited sigma-algebra $\mathcal U=\{A\cap U:A\in\mathcal X\}$. Let $q:U\to Q$ and $F:U\to Y$ be measurable target and forward maps. The **admissible state set** is a declared nonempty $\mathcal U$-measurable subset $C\subseteq U$. The observation model is a specified probability kernel $K(dy\mid x)$ from $(U,\mathcal U)$ to $(Y,\mathcal Y)$; in an additive-noise model, when $Y$ has a measurable addition operation, it is the law of $F(x)+\varepsilon$ for a declared noise law of $\varepsilon$, while nonadditive or model-dependent observation noise is encoded directly by $K$.

The forward solver, when a numerical evaluation is used, is the specified procedure for evaluating this model, including its discretization, tolerances, finite call budget, and any model-specific admissibility test; exact evaluation is the special case with no numerical-solver error. A failed admissibility test or solver call is recorded with its failure status and is not silently omitted from the benchmark results.

A **benchmark specification** also declares a training law $P_{\rm train}$ on a named measurable space for all random variables used to fit a method or select its hyperparameters; those variables may be paired or unpaired. It declares a test law $P_{\rm test}$ on $(Y\times Q,\mathcal Y\otimes\mathcal Q)$ for evaluation pairs $(Y,q(X))$, and any separate validation law used for tuning. The training and test laws need not agree. Each candidate method is identified by its fitting procedure and by its deployed measurable deterministic reconstruction rule $g:Y\to Q$ or randomized reconstruction kernel $L(da\mid y)$ from $Y$ to $Q$. Its population test risk is the risk under $P_{\rm test}$ as defined by the inverse-risk functional; a reported finite-sample score must additionally name its test sample and empirical aggregation rule. No risk transfer or generalization bound follows from the benchmark specification.

Before comparison, the specification fixes a nonnegative product-measurable loss $\ell:Q\times Q\to[0,+\infty]$, an uncertainty diagnostic, and a finite compute-budget vector. An uncertainty diagnostic is a declared measurable statistic of the method outputs and, when applicable, target labels, together with its target quantity; for example, if a reported set-valued estimate $C(y)\subseteq Q$ has a product-measurable membership event $\{(y,a):a\in C(y)\}\in\mathcal Y\otimes\mathcal Q$, its test coverage is $P_{\rm test}(\{(y,a)\in Y\times Q:a\in C(y)\})$. The budget vector records the applicable maximum counts of forward-model queries, adjoint queries, gradient evaluations, ODE right-hand-side evaluations, solver or sampling steps, and elapsed runtime; inapplicable counts are marked as not applicable, not zero. It also records the hardware, numerical precision, software/model versions, random seeds, tuning data, and stopping tolerances needed to interpret those counts. Each method's result records its metric values, uncertainty diagnostic, realized compute counts, solver status, and failed runs. A comparison is tied to the declared test law, test sample, loss, solver, admissibility rules, and tuning protocol; when budgets or other conditions differ, those differences are reported as part of the comparison. The specification defines an evaluation protocol, not a theorem ranking algorithms.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,rounded corners,align=center] (train) at (0,1.3) {$P_{\rm train}$};
  \node[draw,rounded corners,align=center] (fit) at (3,1.3) {fit and tune};
  \node[draw,rounded corners,align=center] (rule) at (6.2,1.3) {$g$ or $L$};
  \node[draw,rounded corners,align=center] (forward) at (0,-0.2) {$F$, noise $K$, solver};
  \node[draw,rounded corners,align=center] (test) at (3,-0.2) {$P_{\rm test}$ pairs};
  \node[draw,rounded corners,align=center] (eval) at (6.4,-0.2) {loss and uncertainty};
  \node[draw,rounded corners,align=center] (record) at (10,-0.2) {scores, budget, status};
  \draw[->] (train)--(fit);
  \draw[->] (fit)--(rule);
  \draw[->] (forward)--(test);
  \draw[->] (test)--(eval);
  \draw[->] (rule)--(eval);
  \draw[->] (eval)--(record);
\end{tikzpicture}
```

The arrows label declared information flow into fitting, observation generation, and evaluation. The diagram asserts no equality between $P_{\rm train}$ and $P_{\rm test}$ and no risk-transfer result.

## Definition references

[[def-ip-admissible-constraint-class|A nonempty constrained truth class and restricted forward map]]

[[def-ip-inverse-risk-under-train-and-test-laws|Risk under a specified joint evaluation law]]

[[def-ip-learned-reconstruction-estimator|Point reconstruction rules and randomized posterior kernels]]

[[def-ip-operator-and-prior-mismatch|Separate forward operators, observation laws, and prior support]]

[[def-ip-pde-solver-admissibility-contract|A model-specific finite solver/admissibility contract]]

[Bal, *Introduction to Inverse Problems*, §1.1 and §§8.2–8.3, full lecture notes](https://www.stat.uchicago.edu/~guillaumebal/COURSES/E6901/LectureNotesIP.pdf)

[Zheng et al., *InverseBench*, ICLR 2025, full paper and appendices](https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf)
