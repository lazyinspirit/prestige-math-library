---
id: thm-gaussian-oblivious-l2-subspace-embedding
kind: theorem
title: Gaussian sketches embed a fixed subspace at the additive dimension rate
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings
dependency_level: 3
deps:
  [
    def-oblivious-l2-subspace-embedding,
    def-standard-real-and-normalized-complex-gaussian-matrix-law,
    lem-gaussian-matrix-law-normalization-and-second-moments,
    lem-gaussian-squared-norm-tail,
    lem-hermitian-sphere-net-controls-operator-norm,
    lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence,
    cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases,
    def-countable-choice,
    def-operator-norm-on-a-finite-dimensional-inner-product-space,
    thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces,
    thm-finite-union-bound
  ]
justified_by: []
axiom_use: "Countable Choice is required by the finite-dimensional Gaussian
  product measures; no unrestricted Axiom of Choice is used."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra,
        §2.1, Theorem 6"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "Michael W. Mahoney, Randomized Algorithms for Matrices and Data, §3.1"
      url: "https://www.math.ucdavis.edu/~strohmer/courses/270/RandLA.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice for the finite-dimensional Gaussian probability law.
Let $1\le d\le n$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, and let
$U\subseteq\mathbb K^n$ be a fixed $d$-dimensional subspace. Let
$G\in\mathbb K^{m\times n}$ have iid standard real Gaussian entries when
$\mathbb K=\mathbb R$, or iid normalized complex Gaussian entries with
$\mathbb E|g|^2=1$ when $\mathbb K=\mathbb C$. Put $S=G/\sqrt m$.
For $0<\varepsilon,\delta<1$, if
$$
m\ge192\varepsilon^{-2}\bigl(d+\log(1/\delta)\bigr),
$$
then with probability at least $1-\delta$, $S$ is an
$\varepsilon$-subspace embedding for $U$. Thus this Gaussian distribution
is an $(\varepsilon,\delta)$ oblivious $\ell_2$ subspace embedding for
dimension $d$.

## Facts & Assumptions

**Given:** Countable Choice for the finite Gaussian law, and a fixed subspace $U$ of dimension $d$, the stated Gaussian law, $m\ge1$, $0<\varepsilon,\delta<1$, and the displayed sample-size condition.

[F1] An $\varepsilon$-subspace embedding preserves every squared norm on the fixed subspace within factors $1\pm\varepsilon$; an $(\varepsilon,\delta)$ oblivious embedding has this probability for each fixed subspace ([[def-oblivious-l2-subspace-embedding]]).

[F2] The real standard and normalized complex Gaussian entries have the densities and independent product law stated in [[def-standard-real-and-normalized-complex-gaussian-matrix-law]]. Their unit scalar masses, normalized second moments and all finite-product normalizations and independence are proved under Countable Choice in [[lem-gaussian-matrix-law-normalization-and-second-moments]].

[F3] Right orthogonal or unitary multiplication preserves the iid Gaussian matrix law, including independence of the resulting entries ([[lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence]]).

[F4] A finite-dimensional real or complex inner-product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F5] For independent standard real or normalized complex Gaussian scalars, the squared-norm deviation probability is at most $2e^{-mt^2/8}$ for $0<t<1$ ([[lem-gaussian-squared-norm-tail]]).

[F6] A complex unit sphere is a real sphere of twice the dimension, and its $1/4$-net can be chosen with at most $9^{2d}$ points; the Hermitian quadratic net controls the operator norm by factor two ([[lem-hermitian-sphere-net-controls-operator-norm]]).

[F7] The operator norm of $H$ is $max_{\|y\|_2=1}\|Hy\|_2$ ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F8] The inner product obeys Cauchy--Schwarz over $\mathbb R$ and $\mathbb C$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F9] The probability of a finite union of measurable events is at most the sum of their probabilities ([[thm-finite-union-bound]]).

[A1] Countable Choice supplies the finite-dimensional Lebesgue probability laws used in [F2] ([[def-countable-choice]]).

## Proof

**Given:** The hypotheses in the Statement.

1.1 Choose an orthonormal basis matrix $Q\in\mathbb K^{n\times d}$ for $U$, and let $\mathcal N$ be a $1/4$-net of its unit sphere with $|\mathcal N|\le9^{2d}$, which covers the real case too. For each fixed $v\in\mathcal N$, $Qv$ is a unit vector. Extend $Qv$ to an orthonormal basis of $\mathbb K^n$ by applying [F4] to its orthogonal complement; [F3] then shows that $GQv$ has $m$ independent standard Gaussian coordinates. [F2, F3, F4, F6, A1, choose]

2.1 For each fixed $v\in\mathcal N$, apply [F5] with $t=\varepsilon/2$ to obtain $\Pr\{|\|SQv\|_2^2-1|\ge\varepsilon/2\}\le2e^{-m\varepsilon^2/32}$. The finite union bound [F9] for the fixed finite net gives $\Pr\{\exists v\in\mathcal N:|\|SQv\|_2^2-1|\ge\varepsilon/2\}\le2\,9^{2d}e^{-m\varepsilon^2/32}\le2e^{2d\log9-6d-6\log(1/\delta)}\le\delta$. Here the sample-size hypothesis gives $m\varepsilon^2/32\ge6(d+\log(1/\delta))$, and $\log2+2d\log9<6d$ for $d\ge1$. [F5, F6, F9, step 1.1, given, algebra]

3.1 On the complementary event, put $H=Q^*S^*SQ-I_d$. This is Hermitian and $|v^*Hv|=|\|SQv\|_2^2-1|<\varepsilon/2$ for every $v\in\mathcal N$. By [F6], $\|H\|_2\le\varepsilon$. For nonzero $y$, [F7] and [F8] give $|y^*Hy|\le\|y\|_2\|Hy\|_2\le\|H\|_2\|y\|_2^2$; the zero vector satisfies the same inequality. Therefore $(1-\varepsilon)\|y\|_2^2\le\|SQy\|_2^2\le(1+\varepsilon)\|y\|_2^2$. Since $Q$ is an isometry onto $U$, [F1] identifies this as the required embedding inequality for every $x=Qy\in U$. [F1, F6, F7, F8, step 2.1, algebra] ∎
