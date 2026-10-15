---
id: thm-dirichlet-multinomial-conjugate-update
kind: theorem
title: "Dirichlet-Multinomial conjugate update"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-dirichlet-distribution
  - def-dirichlet-density-kernel
  - thm-dirichlet-density-normalization
  - def-multinomial-distribution
  - lem-multinomial-law-normalization
  - def-countable-choice
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - prop-fiberwise-posterior-propriety-iff-finite-positive-evidence
  - thm-bayes-formula-for-dominated-kernels
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used through the Dirichlet density normalization theorem. No stronger choice principle is used."
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
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §3.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Gero Walter, A Technical Note on the Dirichlet-Multinomial Model, 2013"
      url: "https://epub.ub.uni-muenchen.de/14068/1/tech-rep-131_gero-walter.pdf"
---

## Statement

Assume Countable Choice. Let $p\sim\operatorname{Dirichlet}(\alpha_1,\ldots,
\alpha_k)$, with each $\alpha_j>0$. Conditional on $p$, observe a
Multinomial$(n,p)$ count vector $y\in\mathbb N_0^k$ with $\sum_jy_j=n$.
For $k\ge2$, the data space is equipped with counting measure on its finite
set of admissible counts. The evidence is
$$m(y)=\frac{n!}{\prod_jy_j!} \frac{\Gamma(\alpha_+)}{\prod_j\Gamma(\alpha_j)} \frac{\prod_j\Gamma(\alpha_j+y_j)}{\Gamma(\alpha_++n)} \in(0,\infty),$$
where $\alpha_+=\sum_j\alpha_j$, and the posterior is
$\operatorname{Dirichlet}(\alpha_1+y_1,\ldots,\alpha_k+y_k)$.
For $k=1$, the parameter and count are both deterministic and the posterior
equals the prior point mass.

## Facts & Assumptions

**Given:** Countable Choice, positive $\alpha_j$, $n\ge0$, and admissible
counts $y_j\ge0$ summing to $n$.

[A1] Countable Choice is required by the Dirichlet simplex normalization theorem. [[def-countable-choice]].

[F1] The Dirichlet law has density $\Gamma(\alpha_+)/\prod_j\Gamma(\alpha_j)\prod_jp_j^{\alpha_j-1}$ on the open simplex for $k\ge2$, and is a point mass at $1$ for $k=1$. [[def-dirichlet-distribution]].

[F2] The Dirichlet simplex density is normalized by iterated Beta integrals under Countable Choice. [[thm-dirichlet-density-normalization]].

[F3] The Multinomial$(n,p)$ likelihood is $n!\prod_jp_j^{y_j}/\prod_jy_j!$ and is normalized. [[def-multinomial-distribution]].

[F4] A proper prior and parameter-measurable probability sampling kernel constitute a Bayesian model. [[def-bayesian-model-as-prior-and-sampling-kernel]].

[F5] The evidence is the integral of the likelihood against the prior; no quotient is defined unless it is finite and positive. [[def-posterior-evidence-normalizer-and-fiberwise-update]].

[F6] A likelihood-weighted prior is a probability after normalization exactly for finite positive evidence. [[prop-fiberwise-posterior-propriety-iff-finite-positive-evidence]].

[F7] The dominated Bayes formula identifies the normalized likelihood quotient as a posterior conditional kernel. [[thm-bayes-formula-for-dominated-kernels]].

## Proof

**Given:** The hypotheses in the Statement and observed count vector $y$.

1.1 If $k=1$, then $p_1=1$ and the only admissible count is $y_1=n$. The likelihood and evidence are one, so the point-mass prior is unchanged. Assume henceforth $k\ge2$. Multiplying the prior and likelihood densities [F1, F3] gives a constant times $\prod_{j=1}^kp_j^{\alpha_j+y_j-1},$ with every updated coordinate positive. The finite count space, proper prior, and normalized measurable likelihood give the model in [F4]. [A1, F1, F3, F4, given, cases]

2.1 By [F2], the integral of this updated simplex kernel is $\prod_j\Gamma(\alpha_j+y_j)/\Gamma(\alpha_++n)$, finite and positive. Multiplying by the prior normalizing constant and the Multinomial coefficient from [F3] yields exactly the displayed evidence. It is finite positive, so [F5] and [F6] place this fiber in the valid update domain. [A1, F2, F3, F5, F6, step 1.1, algebra]

3.1 Divide the product density from step 1.1 by its evidence from step 2.1. The resulting density is $\frac{\Gamma(\alpha_++n)}{\prod_j\Gamma(\alpha_j+y_j)} \prod_{j=1}^kp_j^{\alpha_j+y_j-1},$ the normalized Dirichlet$(\alpha_1+y_1,\ldots,\alpha_k+y_k)$ density by [F2]. The evidence is positive finite, so [F7] makes this normalized law the posterior conditional kernel. Zero counts leave their coordinates positive and unchanged; no boundary parameter points are introduced. [A1, F2, F5, F7, step 2.1, cases] ∎