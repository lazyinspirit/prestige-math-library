---
id: thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel
kind: theorem
title: A mean and positive-semidefinite kernel define a Gaussian process
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-consistent-family-of-finite-dimensional-distributions
  - def-coordinate-maps-and-cylinder-sigma-algebra
  - def-gaussian-process
  - def-multivariate-normal-law
  - def-stochastic-process-and-finite-dimensional-distributions
  - lem-real-line-is-standard-borel
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-kolmogorov-extension-for-standard-borel-coordinate-spaces
  - thm-non-negative-square-root-exists-and-is-unique
justified_by: []
proof_strategy: direct
axiom_use: "AC is used to obtain finite Gaussian laws, coordinate enumerations across all finite subsets, and the arbitrary-index Kolmogorov extension. The proof makes no continuity or Banach-valued assertion."
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
    - title: "A. W. van der Vaart and J. H. van Zanten, Reproducing kernel Hilbert spaces of Gaussian priors (2008)"
      url: "https://arxiv.org/pdf/0805.3252"
    - title: "Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning (MIT Press, 2006), Chapter 2"
      url: "https://gaussianprocess.org/gpml/chapters/RW2.pdf"
---

## Statement

Assume the Axiom of Choice. Let $T$ be a set, let $m:T\to\mathbb R$, and let
$k:T\times T\to\mathbb R$ be symmetric and positive semidefinite, meaning that
for every finite list $t_1,\ldots,t_n\in T$ and every $a\in\mathbb R^n$,
$$\sum_{i,j=1}^n a_i a_j k(t_i,t_j)\ge0.$$
There is a unique probability measure $\mu$ on the cylinder sigma-algebra
$\mathcal C_T$ of $\mathbb R^T$ whose marginal on each finite-coordinate space
$\mathbb R^F$, for $F\subseteq T$ finite, is the Gaussian law with mean
$(m(t))_{t\in F}$ and covariance matrix $(k(s,t))_{s,t\in F}$. The coordinate
process $X_t(x)=x(t)$ is Gaussian, has mean function $m$, and has covariance
kernel $k$. This construction gives only the cylinder-space process; it
asserts no sample-path continuity, joint measurability in $(t,x)$, or tight
Banach-valued law.

## Facts & Assumptions

**Given:** AC, a set $T$, a real-valued mean function $m$, and a symmetric
positive-semidefinite kernel $k$ as stated.

[A1] The Axiom of Choice states that every family of nonempty sets has a
choice function. [[def-axiom-of-choice]]

[F1] Every finite-dimensional symmetric positive-semidefinite matrix has a
unique positive-semidefinite square root. [[thm-non-negative-square-root-exists-and-is-unique]]

[F2] Under AC, a finite mean vector and symmetric positive-semidefinite
covariance matrix define a possibly singular multivariate normal law; its
scalar projections have the corresponding normal laws. [[def-multivariate-normal-law]]

[F3] Under AC, the characteristic function of $N_n(a,\Sigma)$ is
$u\mapsto\exp(iu^Ta-\tfrac12u^T\Sigma u)$, and it uniquely determines the
law, including when $\Sigma$ is singular.
[[lem-characteristic-function-of-a-multivariate-normal-law]]

[F4] A family of finite-coordinate probability laws is consistent when each
larger law pushes forward under restriction to the smaller law.
[[def-consistent-family-of-finite-dimensional-distributions]]

[F5] The real line with its Borel sigma-algebra is standard Borel.
[[lem-real-line-is-standard-borel]]

[F6] Under AC, a consistent family on arbitrary standard-Borel coordinates
has a unique extension to the cylinder sigma-algebra.
[[thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]]

[F7] On the cylinder sigma-algebra of $\mathbb R^T$, every coordinate map is
measurable. [[def-coordinate-maps-and-cylinder-sigma-algebra]]

[F8] A stochastic process is a family of random elements on one probability
space; it is Gaussian when every finite linear combination of its coordinates
is normally distributed. [[def-stochastic-process-and-finite-dimensional-distributions]]
[[def-gaussian-process]]

## Proof

**Given:** AC, $T$, $m$, and $k$ as in the Statement.

1.1 For each nonempty finite $F\subseteq T$, use AC to choose an enumeration $e_F:\{1,\ldots,n\}\to F$. Set $a_i=m(e_F(i))$ and $\Sigma_{ij}=k(e_F(i),e_F(j))$. Positive semidefiniteness of $k$ makes $\Sigma$ positive semidefinite; [F1] supplies its positive square root and [F2] gives the possibly singular law $N_n(a,\Sigma)$. Push this law to $\mathbb R^F$ by relabelling coordinate $i$ as $e_F(i)$. A different enumeration changes both the mean and covariance by the same permutation; [F3] shows that the relabelled law is unchanged. For $F=\varnothing$, take the unique law on the singleton empty product. [A1, F1, F2, F3, given, choose, construct]

2.1 If $F\subseteq G$ are finite, the characteristic function of the restriction pushforward of the $G$-law at $u\in\mathbb R^F$ is $ \exp\!\left(i\sum_{t\in F}u_t m(t)-\frac12\sum_{s,t\in F}u_su_t k(s,t)\right). $ This is also the characteristic function of the $F$-law. By [F3] the two pushforward laws agree, so the family constructed in step 1.1 is consistent in the sense of [F4]. The empty marginal is the singleton law. [F3, F4, step 1.1, algebra]

3.1 Each coordinate space $(\mathbb R,\mathcal B(\mathbb R))$ is standard Borel by [F5]. The consistent family from step 2.1 therefore satisfies [F6], which gives a unique probability measure $\mu$ on $\mathcal C_T$ with exactly these finite-coordinate marginals. [A1, F5, F6, step 2.1, construct]

4.1 Define $X_t(x)=x(t)$ on $(\mathbb R^T,\mathcal C_T,\mu)$. By [F7] these coordinates are measurable, and step 3.1 gives each finite evaluation vector the stated multivariate normal law. Every finite linear combination is a scalar projection of such a vector, hence is normal by [F2]. Thus [F8] makes $X$ a Gaussian process. Its one- and two-coordinate laws give mean $m$ and covariance $k$, including zero-variance coordinates and singular finite covariance matrices. [F2, F6, F7, F8, step 3.1, algebra]

5.1 The extension in step 3.1 is unique on $\mathcal C_T$. It supplies no topology or probability law on a path-continuous or Banach-valued function space, so no such regularity or tightness conclusion is included. [F6, step 3.1] ∎

## Source notes

van der Vaart–van Zanten define an arbitrary-index Gaussian process through
its finite-dimensional Gaussian laws and covariance function. Rasmussen–Williams
give the mean/covariance and marginalization convention for Gaussian processes.
The finite-coordinate consistency and cylinder extension are proved here from
the cited local suppliers; neither source is used to infer path regularity.
