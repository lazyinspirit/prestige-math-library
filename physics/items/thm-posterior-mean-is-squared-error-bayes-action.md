---
id: thm-posterior-mean-is-squared-error-bayes-action
kind: theorem
title: Under AC, the finite-second-moment posterior mean uniquely minimizes squared risk
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-posterior-risk-and-bayes-action
  - thm-conditional-expectation-is-the-l2-orthogonal-projection
  - def-axiom-of-choice
  - def-conditional-expectation-given-a-sigma-algebra
  - thm-measurability-of-integration-against-a-kernel
  - def-random-element-and-real-random-variable
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC exactly for the published L²-projection supplier; the remaining measurability argument is choice-free."
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
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.3.1, PDF pp. 104–105"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Andrew Gelman et al., Bayesian Data Analysis, 3rd ed., §9.1"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
---

## Statement

Assume AC. Let $\Pi$ be a probability kernel from a measurable data space $(\mathsf Y,\mathcal Y)$ to $\mathbb R$, and take the action space to be $\mathbb R$ with its Borel sigma-algebra. Put
$$D_2=\left\{y:\int_{\mathbb R}\theta^2\,\Pi_y(d\theta)<\infty\right\},\qquad \mu(y)=\int_{\mathbb R}\theta\,\Pi_y(d\theta)\quad(y\in D_2).$$
Then $D_2\in\mathcal Y$, $\mu$ is measurable on $D_2$, and for every $y\in D_2$, $\mu(y)$ is the unique action minimizing the finite squared posterior risk $\int(\theta-a)^2\Pi_y(d\theta)$ over $a\in\mathbb R$. Thus $\mu$ is a measurable Bayes action rule on $D_2$.

## Facts & Assumptions

**Given:** AC, the posterior probability kernel $\Pi$, and the finite-second-moment data domain $D_2$.

[A1] The Axiom of Choice asserts that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] Under AC, conditional expectation is the orthogonal projection onto the square-integrable functions measurable with respect to the conditioning sigma-algebra, with a unique minimizing almost-sure class. [[thm-conditional-expectation-is-the-l2-orthogonal-projection]]

[F2] A conditional expectation version is an integrable measurable function satisfying the integral identity on every conditioning event. [[def-conditional-expectation-given-a-sigma-algebra]]

[F3] A Bayes action rule must be measurable, have finite posterior risk, and attain the minimum among finite-risk actions. [[def-posterior-risk-and-bayes-action]]

[F4] Integrating a product-measurable nonnegative function against a probability kernel gives a measurable function; an integrable signed function has a measurable signed integral on its finite-absolute-integral domain. [[thm-measurability-of-integration-against-a-kernel]]

[F5] A real random variable is a measurable map into $\mathbb R$ with its Borel sigma-algebra. [[def-random-element-and-real-random-variable]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 The squared loss $L(\theta,a)=(\theta-a)^2$ is continuous on $\mathbb R^2$, hence product-Borel measurable as required by [F3]. Let $s_2(y)=\int\theta^2\Pi_y(d\theta)$. The function $(y,\theta)\mapsto\theta^2$ is product-measurable, so [F4] makes $s_2$ measurable and $D_2=\{s_2<\infty\}$ measurable. On $D_2$, $2|\theta|\le1+\theta^2$ gives a finite absolute first moment; [F4] therefore makes the signed mean $\mu$ measurable on $D_2$. [given, F3, F4, algebra]

1.2 Fix $y\in D_2$ and use $(\mathbb R,\mathcal B(\mathbb R),\Pi_y)$ as a probability space with trivial sub-sigma-algebra $\mathcal G=\{\varnothing,\mathbb R\}$. The identity variable $\theta$ is a real random variable by [F5] and is square-integrable. The constant function $\mu(y)$ is $\mathcal G$-measurable and satisfies $\int_H\theta\,d\Pi_y=\int_H\mu(y)\,d\Pi_y$ for both possible $H\in\mathcal G$; by [F2] it is a conditional-expectation version. [given, F2, F5]

2.1 By [F1] under [A1], this conditional expectation uniquely minimizes squared distance over $L^2(\mathcal G)$. The real-valued $\mathcal G$-measurable functions are exactly constants, and every finite constant is in $L^2(\Pi_y)$; hence $\mu(y)$ uniquely minimizes $\int(\theta-a)^2\Pi_y(d\theta)$ over all real actions. This risk is finite because both $\theta$ and the constant action are square-integrable. [A1, F1, step 1.2]

3.1 By step 1.1 the mean rule is measurable on $D_2$, and by step 2.1 it has finite risk and attains the minimum on every fiber. The definition [F3] therefore makes it a Bayes action rule on $D_2$. [F3, step 1.1, step 2.1] ∎
