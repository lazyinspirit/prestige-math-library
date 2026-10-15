---
id: thm-dirichlet-process-polya-urn-predictive-law
kind: theorem
title: "Dirichlet-process Pólya-urn predictive law"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - def-dirichlet-process
  - thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure
  - thm-dirichlet-process-posterior-update
  - thm-dirichlet-multinomial-conjugate-update
  - def-dirichlet-distribution
  - def-probability-measure
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited through the normalized-gamma and posterior theorems and implies the Countable Choice used in Dirichlet conjugacy."
provenance:
  statement: literature-derived
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

## Statement

Assume AC. In the conditionally IID model
$G\sim DP(\alpha)$, $X_i\mid G\sim G$, the posterior version after
$x_{1:n}=(x_1,\ldots,x_n)$ has one-step predictive probability
$$\Pr(X_{n+1}\in A\mid X_{1:n}=x_{1:n})=\frac{\alpha(A)+\sum_{i=1}^n\mathbf1_A(x_i)}{\alpha(\mathsf X)+n}$$
for every measurable $A$ and every data vector. The formula is a
data-indexed version on prior-predictive null data sets; those pointwise
values are not uniquely determined by the disintegration identity.

## Facts & Assumptions

**Given:** Full AC; a standard Borel space; finite nonzero $\alpha$; and conditionally IID sampling from $G\sim DP(\alpha)$.

[A1] Full AC is assumed. [[def-axiom-of-choice]].

[A2] AC implies Countable Choice, as required by the Dirichlet-multinomial update. [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]].

[F1] The data-indexed posterior version is $DP(\alpha+\sum_i\delta_{x_i})$. [[thm-dirichlet-process-posterior-update]].

[F2] Given the random measure and the observed past, the next observation has conditional probability $G(A)$ of falling in $A$, by the conditionally IID product sampling kernel. [[def-dirichlet-process]] [[def-probability-measure]].

[F3] On every finite partition, positive-base cells have the Dirichlet law and zero-base cells have mass zero. [[def-dirichlet-process]] [[thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure]].

[F4] Under Countable Choice, the one-trial Dirichlet-multinomial evidence for the first cell of a two-cell partition with positive parameters $(b,c)$ is $b/(b+c)$. [[thm-dirichlet-multinomial-conjugate-update]].

## Proof

**Given:** The hypotheses in the Statement and $n\ge0$.

1.1 Put $\beta_x=\alpha+\sum_{i=1}^n\delta_{x_i}$. For $n\ge1$, [F1]
makes the posterior law $DP(\beta_x)$; for $n=0$ it is the prior $DP(\alpha)$. In either case, $\beta_x(\mathsf X)=\alpha(\mathsf X)+n>0$. [given, F1, construct]

2.1 Let $b=\beta_x(A)$ and $c=\beta_x(A^c)$. If $b=0$, [F3] gives $G(A)=0$ almost surely under $DP(\beta_x)$; if $c=0$, it gives $G(A)=1$ almost surely. If both are positive, apply [F4] to one Bernoulli draw on the partition $(A,A^c)$: its probability of the first cell is the Dirichlet-multinomial evidence $b/(b+c)$, which equals $\mathbb E_{DP(\beta_x)}G(A)$ by the sampling kernel [F2]. Thus in all cases the predictive probability is $b/(b+c)=(\alpha(A)+\sum_i\mathbf1_A(x_i))/(\alpha(\mathsf X)+n)$. [A1, A2, F2, F3, F4, step 1.1, cases, algebra] ∎
