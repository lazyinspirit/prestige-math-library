---
id: ex-dirichlet-process-finite-partition-posterior-and-polya-urn
kind: example
title: "Finite-partition posterior and Pólya-urn draws"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 8
deps:
  - lem-countable-discrete-space-is-standard-borel
  - prop-dirac-measure-is-a-probability-measure
  - thm-nonnegative-weighted-sums-of-measures
  - def-dirichlet-process
  - thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure
  - thm-dirichlet-process-posterior-update
  - thm-dirichlet-process-polya-urn-predictive-law
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the normalized-gamma construction and posterior result."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Thomas S. Ferguson, A Bayesian Analysis of Some Nonparametric Problems, 1973, Sections 2 and 3"
      url: "https://users.wpi.edu/~balnan/Ferguson1973.pdf"
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, 2017, Chapter 1"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
---

## Example

Assume AC. Let $\mathsf X=\{a,b,c\}$ with its discrete sigma-algebra and
base masses $\alpha(\{a\})=2$, $\alpha(\{b\})=1$, and
$\alpha(\{c\})=1$. For $G\sim DP(\alpha)$, consider two conditionally IID
draws with observed values $X_1=a$, $X_2=b$.

## Facts & Assumptions

**Given:** The finite space and base measure in the Example.

[A1] Assume AC, as required by the normalized-gamma and posterior results. [[def-axiom-of-choice]].

[F1] The finite-partition masses under $DP(\alpha)$ have the Dirichlet law. [[def-dirichlet-process]] [[thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure]].

[F2] After data with cell counts $y_j$, the finite-partition posterior is Dirichlet with parameters $\alpha_j+y_j$. [[thm-dirichlet-process-posterior-update]].

[F3] The next-draw probability in a measurable cell is its base mass plus its observed count, divided by total base mass plus sample size. [[thm-dirichlet-process-polya-urn-predictive-law]].

[F4] Every nonempty finite discrete space is standard Borel. Dirac set functions are probability measures; finite nonnegative weighted sums of them are measures. [[lem-countable-discrete-space-is-standard-borel]] [[prop-dirac-measure-is-a-probability-measure]] [[thm-nonnegative-weighted-sums-of-measures]].

## Verification

**Given:** The specified three-cell partition, its base masses, and the observed cell sequence $(a,b)$.

1.1 The nonempty finite discrete space $\mathsf X$ is standard Borel by [F4]. Define $\alpha=2\delta_a+\delta_b+\delta_c$, equivalently $\alpha(B)=2\mathbf1_B(a)+\mathbf1_B(b)+\mathbf1_B(c)$. By [F4] it is a measure with total mass $4$, hence finite and nonzero, so [F1] and [F2] apply. The prior vector $(G(\{a\}),G(\{b\}),G(\{c\}))$ has law $\operatorname{Dirichlet}(2,1,1)$ by [F1]. The observed counts are $(1,1,0)$, so [F2] gives posterior $\operatorname{Dirichlet}(3,2,1)$, whose parameters sum to $6$. [A1, F1, F2, F4, given]

2.1 Applying [F3] after the two observations gives next-draw probabilities $3/6=1/2$ for $a$, $2/6=1/3$ for $b$, and $1/6$ for $c$; they sum to one. [F3, step 1.1, algebra]

3.1 Before any draw, [F3] gives $\Pr(X_1=a)=2/4=1/2$. After observing $X_1=a$, the same rule gives $\Pr(X_2=a\mid X_1=a)=3/5$. Therefore $\Pr(X_1=a,X_2=a)=(1/2)(3/5)=3/10$: the first draw increases the next draw's mass for its cell from $2/4$ to $3/5$. [F3, algebra] ∎
