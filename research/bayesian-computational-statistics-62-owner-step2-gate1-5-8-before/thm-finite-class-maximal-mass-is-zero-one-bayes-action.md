---
id: thm-finite-class-maximal-mass-is-zero-one-bayes-action
kind: theorem
title: A maximal-mass action is Bayes under finite-class zero–one loss
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-posterior-risk-and-bayes-action
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.3.1, PDF pp. 104–105"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §9.1"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
---

## Statement

Let $\Pi$ be a posterior probability kernel on a nonempty finite class $\Theta=\{1,\ldots,k\}$ with the sigma-algebra of all its subsets; give the action class the same measurable structure and use zero–one loss $L(\theta,a)=\mathbf 1_{\{\theta\ne a\}}$. Every posterior-mass maximizer minimizes pointwise posterior risk. The least-indexed posterior-mass maximizer is a measurable, finite-risk Bayes action rule. This statement is choice-free.

## Facts & Assumptions

**Given:** The finite posterior probability kernel, finite nonempty class, action space, and zero–one loss in the Statement.

[F1] Posterior risk is the finite integral of a jointly measurable nonnegative loss, and a Bayes action rule is a measurable finite-risk minimizer whose minimum is attained. [[def-posterior-risk-and-bayes-action]]

[F2] Each kernel event evaluation is measurable in its index and each posterior section is a probability measure. [[def-measure-kernel-and-probability-kernel]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For $j=1,\ldots,k$, put $p_j(y)=\Pi_y(\{j\})$. By [F2], every $p_j$ is measurable. The zero–one posterior risk of action $j$ is $\rho_y(j)=\sum_{\ell\ne j}p_\ell(y)=1-p_j(y).$ Thus the risk is minimized exactly by maximizing $p_j(y)$. [given, F1, F2, algebra]

2.1 Since $k\ge1$ is finite, the nonempty finite list $p_1(y),\ldots,p_k(y)$ has a maximum. Define $j^*(y)$ to be the least index attaining it. For each $j$, $\{y:j^*(y)=j\}=\bigcap_{\ell>j}\{y:p_j(y)\ge p_\ell(y)\}\ \cap\ \bigcap_{\ell<j}\{y:p_j(y)>p_\ell(y)\}.$ Both intersections are finite, and each set is measurable because the $p_\ell$ are measurable; hence $j^*$ is measurable. Its risk is finite and it attains the pointwise minimum from step 1.1, so [F1] makes it a Bayes action rule. Choosing the least maximizing index uses only the displayed finite order, not AC. [given, F1, step 1.1, algebra] ∎