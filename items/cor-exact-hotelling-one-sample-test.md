---
id: cor-exact-hotelling-one-sample-test
kind: corollary
title: The one-sample Hotelling F test has exact size alpha
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - thm-hotelling-t2-exact-f-distribution
  - def-multivariate-normal-sample-model-and-statistics
  - def-axiom-of-choice
  - def-randomized-test
  - def-randomized-procedure-as-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-measurable-function-between-measurable-spaces
  - def-test-size-and-power
  - def-student-t-and-f-laws
  - lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing
  - cor-continuous-functions-are-borel-measurable
  - thm-sylvesters-criterion-for-positive-definiteness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arak Mathai, Serge Provost, and Hans J. Haubold, Multivariate Statistical Analysis in the Real and Complex Domains, Chapter 6 §§6.3–6.4, PDF pp. 20–42"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-95864-0_6.pdf"
    - title: "Soumendu Mukherjee, Multivariate Analysis 2021, Lecture 3, PDF pp. 1–5"
      url: "https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-3.pdf"
    - title: "Peter D. Hoff, Multivariate Statistical Analysis, Duke STA 832 lecture notes, relevant sections in Chapters 4 and 7"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/832/Materials/notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Assume AC, $n>p\ge1$, and the one-sample multivariate-normal model with covariance $\Sigma\succ0$. For a specified $\mu_0\in\mathbb R^p$ and $0<\alpha<1$, reject $H_0:\mu=\mu_0$ when
$$\frac{n-p}{p(n-1)}T^2>F_{p,n-p}^{-1}(1-\alpha),$$
where $T^2$ is the statistic in [[thm-hotelling-t2-exact-f-distribution]]. Against $H_1:\mu\ne\mu_0$, this test has size exactly $\alpha$ over all null covariances $\Sigma\succ0$.

## Facts & Assumptions

**Given:** AC, $n>p\ge1$, the iid multivariate-normal experiment, fixed $\mu_0$, and $0<\alpha<1$.

[A1] AC is part of the Gaussian model and the exact Hotelling theorem. [[def-axiom-of-choice]] [[thm-hotelling-t2-exact-f-distribution]]

[F1] The scaled Hotelling statistic has the common law $F_{p,n-p}$ under every null covariance $\Sigma\succ0$. [[thm-hotelling-t2-exact-f-distribution]]

[F2] A randomized test is a measurable test function into $[0,1]$, and the size is the supremum of its rejection probability over the null parameter set. [[def-randomized-test]] [[def-test-size-and-power]]

[F3] A probability kernel assigns a probability measure to each observation and has measurable event-probability functions; this includes deterministic kernels supported on a measurable action. [[def-randomized-procedure-as-a-markov-kernel]] [[def-measure-kernel-and-probability-kernel]] [[def-measurable-function-between-measurable-spaces]]

[F4] The $F_{r,s}$ CDF for positive degrees of freedom is continuous on $\mathbb R$ and strictly increasing on $(0,\infty)$; each probability level in $(0,1)$ has a unique support quantile. [[lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing]]

[F5] For real symmetric matrices, positive definiteness is equivalent to positivity of all leading principal minors. [[thm-sylvesters-criterion-for-positive-definiteness]]

[F6] Continuous Euclidean functions are Borel measurable. [[cor-continuous-functions-are-borel-measurable]]

[F7] The model parameter set consists of every $\mu\in\mathbb R^p$ and every $\Sigma\succ0$. [[def-multivariate-normal-sample-model-and-statistics]]

## Proof

1.1 The statistic is Borel measurable: the sample maps $\bar X$ and $S$ are continuous by the model definition [F7]; by [F5], the event $S\succ0$ is the finite intersection of strict polynomial inequalities on its leading principal minors. On this open set, $S^{-1}$ has entries equal to cofactors divided by $\det S>0$, so the quadratic-form formula for $T^2$ is continuous by [F6]. Extending that function by zero on the Borel complement remains Borel. Let $D(x)$ be the indicator that the scaled statistic exceeds the stated threshold and define a kernel on actions $\{0,1\}$ by $K(x,A)=1$ if $D(x)\in A$ and $0$ otherwise. For each $x$ this is a probability measure, and $x\mapsto K(x,A)$ is measurable because $D$ is measurable. Thus [F3] makes this a randomized procedure and [F2] its test function. [F2, F3, F5, F6, F7]

1.2 Since $p\ge1$, $\mathbb R^p\setminus\{\mu_0\}$ is nonempty; hence the stated null and alternative parameter sets are nonempty and disjoint. Under AC [A1], [F4] gives a unique $q=F_{p,n-p}^{-1}(1-\alpha)>0$ satisfying $P(F_{p,n-p}\le q)=1-\alpha$. For each null covariance, [F1] gives rejection probability $P(F_{p,n-p}>q)=\alpha$, with no boundary atom because its CDF is continuous. [A1, F1, F4, F7, given]

2.1 Taking the supremum of the same value $\alpha$ over the nonempty null set leaves it equal to $\alpha$. By [F2] this supremum is the test's size, proving exact size. The argument includes every positive-definite null covariance and uses the exact finite-sample F law; no asymptotic calibration is used. [F2, step 1.2, algebra] ∎