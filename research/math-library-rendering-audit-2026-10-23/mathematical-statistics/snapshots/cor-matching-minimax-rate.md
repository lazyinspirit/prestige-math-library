---
id: cor-matching-minimax-rate
kind: corollary
title: "Matching minimax rate in a Gaussian orthogonal sequence model"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-loss-function-and-risk
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - lem-measurable-functions-preserve-independence
  - cor-continuous-functions-are-borel-measurable
  - thm-composition-with-borel-functions-preserves-measurability
  - lem-isotropic-gaussian-noise-is-subgaussian
  - thm-sparse-subset-risk-upper-bound
  - lem-finite-support-projection-selection-is-borel
  - thm-gaussian-sparse-sequence-minimax-lower-bound
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 2, Corollaries 2.8–2.9"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Statement

Assume the Axiom of Choice. Let $n=d\ge2$, let $1\le s\le n/2$, and take
the fixed design $X=\sqrt n\,I_n$. For
$$\Theta_s:=\{\theta\in\mathbb R^n: |\{j\in\{1,\ldots,n\}:\theta_j\ne0\}|\le s\},$$
observe $Y=X\theta+\varepsilon$ with one common noise law
$\varepsilon\sim N_n(0,\sigma^2I_n)$, where $\sigma>0$. For Borel fitted-vector
estimators $T:\mathbb R^n\to\mathbb R^n$, define
$$R^*_{n,s}:=\inf_{T\ \mathrm{Borel}}\ \sup_{\theta\in\Theta_s} \mathbb E_\theta\left[\frac1n\|T(Y)-X\theta\|_2^2\right].$$
Then for $C=32(4+2\log6)$,
$$\frac{\sigma^2s\log(en/s)}{200000n} \le R^*_{n,s} \le\sup_{\theta\in\Theta_s}\mathbb E_\theta\left[ \frac1n\|\widehat\mu_s(Y)-X\theta\|_2^2\right] \le C\frac{\sigma^2s\log(en/s)}n,$$
where $\widehat\mu_s$ is the constrained support-search fitted vector. Thus
this Gaussian orthogonal-sequence model has a matching minimax rate up to
universal constants. The sparse upper-bound theorem itself is choice-free; this corollary
assumes AC for its Gaussian law and Fano lower-bound suppliers.

## Facts & Assumptions

**Given:** AC; integers $n=d\ge2$, $1\le s\le n/2$; $X=\sqrt n I_n$; and a
common noise vector $\varepsilon\sim N_n(0,\sigma^2I_n)$ with $\sigma>0$.

[A1] AC is assumed by the multivariate-normal and Fano lower-bound suppliers
([[def-axiom-of-choice]]).

[F1] For every fixed design and every truth with at most $s$ nonzero
coordinates, the constrained least-squares fitted vector has expected
normalized squared error at most $C\sigma^2s\log(en/s)/n$
([[thm-sparse-subset-risk-upper-bound]]).

[F2] The finite tie-broken support-search output is Borel measurable
([[lem-finite-support-projection-selection-is-borel]]).

[F3] Isotropic Gaussian noise is centered sub-Gaussian with proxy $\sigma^2$
([[lem-isotropic-gaussian-noise-is-subgaussian]]).

[F4] By [[def-multivariate-normal-law]], $N_n(0,\sigma^2I_n)$ has the
independent-coordinate realization $\sigma(G_1,\ldots,G_n)$ for independent
standard-normal $G_j$. Its characteristic-function formula and uniqueness in
[[lem-characteristic-function-of-a-multivariate-normal-law]] identify that
realization with the stated multivariate-normal law. Since $\sigma>0$, its
coordinates are independent $N(0,\sigma^2)$ variables.

[F5] In the Gaussian sequence model $Z_j\sim N(\theta_j,\sigma^2/n)$ with
at most $s$ nonzero coordinates, every Borel vector estimator has maximum
squared-error risk at least
$\sigma^2s\log(en/s)/(200000n)$
([[thm-gaussian-sparse-sequence-minimax-lower-bound]]).

[F6] The general risk definition integrates a nonnegative loss against the
sampling law and, for randomized rules, the action kernel
([[def-loss-function-and-risk]]).

[F7] Measurable coordinatewise transformations preserve independence, and an
affine image $a+bG$ of a standard normal $G$ has law $N(a,b^2)$
([[lem-measurable-functions-preserve-independence]],
[[def-standard-normal-and-normal-laws]]).

[F8] Continuous affine maps on Euclidean spaces are Borel, and compositions of
measurable maps remain measurable
([[cor-continuous-functions-are-borel-measurable]],
[[thm-composition-with-borel-functions-preserves-measurability]]).

## Proof

1.1 By [F3], the noise satisfies the centered vector proxy condition required by [F1]. The support-search fitted vector is Borel by [F2], so it is an admissible estimator for [F6]. Applying [F1] at each $\theta\in\Theta_s$ and taking the supremum and then the infimum gives the upper bound. [A1, F1, F2, F3, F6, algebra]

1.2 Fix any Borel fitted-vector estimator $T$. Put $Z=Y/\sqrt n$ and $S(z)=T(\sqrt n z)/\sqrt n$, which is Borel by [F8]. Under the independent realization in [F4], the coordinates of $Z$ are coordinatewise measurable affine transforms of independent standard normals. By [F7], they remain independent and have laws $N(\theta_j,\sigma^2/n)$, exactly the sequence experiment in [F5]. Applying [F5] to the Borel estimator $S$ gives $$\sup_{\theta\in\Theta_s}\mathbb E_\theta\|S(Z)-\theta\|_2^2 \ge\frac{\sigma^2s\log(en/s)}{200000n}.$$ [A1, F4, F5, F7, F8, algebra]

2.1 Since $X=\sqrt n I_n$, pointwise $$\frac1n\|T(Y)-X\theta\|_2^2 =\left\|\frac{T(Y)}{\sqrt n}-\theta\right\|_2^2 =\|S(Z)-\theta\|_2^2.$$ By [F6] these pointwise losses define the respective risks. Thus every Borel $T$ has supremum fitted-value risk at least the lower bound in step 1.2. Taking the infimum over $T$ proves the minimax lower bound. [F6, step 1.2, algebra]

3.1 The upper bound in step 1.1 and the lower bound in step 2.1 give the displayed comparison, with universal constants $1/200000$ and $C$. [step 1.1, step 2.1, algebra] ∎
