---
id: thm-linear-change-of-variables-for-lebesgue-measure
kind: theorem
title: "A linear map $T$ of $\\mathbb{R}^n$ sends Lebesgue measurable sets to Lebesgue measurable sets, with $\\lambda_n(T[E])=|\\det T|\\,\\lambda_n(E)$ when $T$ is invertible and $T[E]$ Lebesgue null when it is not"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant, lem-coordinate-scalings-and-permutations-scale-the-unit-cube-by-the-absolute-determinant, lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one, thm-invertible-matrices-factor-into-elementary-matrices, cor-elementary-matrices-are-invertible, thm-determinant-multiplicative, thm-determinant-of-a-triangular-matrix, thm-real-square-matrix-invertible-iff-determinant-nonzero, thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null, lem-lipschitz-images-of-lebesgue-null-sets-are-lebesgue-null, thm-littlewood-characterisations-of-lebesgue-measurability, thm-lebesgue-measure-is-a-complete-measure, thm-borel-sets-are-lebesgue-measurable, def-determinant-of-a-square-matrix, def-elementary-matrix, def-matrix-product-and-identity-matrix, def-extended-reals, def-g-delta-and-f-sigma-in-a-topological-space, def-kernel-and-image-of-a-linear-map, thm-linear-kernel-image-and-injectivity, lem-euclidean-linear-maps-have-matrices-and-are-bounded, def-linear-map, def-lipschitz-holder-contraction, def-measure, lem-p-norms-are-norms-and-induce-the-published-metrics, def-p-norms-on-rn, lem-metrics-on-rn, thm-induction-principle, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "linear change of variables"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Theorem 2.33"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.2.21"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Theorem 3.1"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$, **assume the Axiom of Countable Choice**
([[def-countable-choice]]) and let $T : \mathbb{R}^n \to \mathbb{R}^n$ be linear
with matrix $A$ ([[def-linear-map]],
[[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]).

1. **Invertible case.** If $\det A \ne 0$, then $T[E]$ is Lebesgue measurable for
   every Lebesgue measurable $E$ and
   $$\lambda_n\big(T[E]\big) \;=\; |\det A|\;\lambda_n(E),$$
   both sides possibly $+\infty$; the product is defined in
   $\overline{\mathbb{R}}$ because $|\det A| > 0$.
2. **Singular case.** If $\det A = 0$, then $T[E]$ is Lebesgue measurable with
   $\lambda_n(T[E]) = 0$ for **every** $E \subseteq \mathbb{R}^n$.

**The singular clause is stated as nullity and not as a product.** When
$\det A = 0$ and $\lambda_n(E) = +\infty$ the expression
$|\det A|\,\lambda_n(E)$ is $0\cdot(+\infty)$, which [[def-extended-reals]]
leaves undefined; writing the conclusion as $\lambda_n(T[E]) = 0$ says the same
thing wherever the product is defined and remains a statement where it is not.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, a linear map $T$ of $\mathbb{R}^n$ with matrix $A$, and a set $E \subseteq \mathbb{R}^n$.

[L1] An invertible linear map carries Borel sets to Borel sets, and there is a strictly positive real $c(T) = \lambda_n\big(T[(0,1]^n]\big)$ with $\lambda_n(T[E]) = c(T)\lambda_n(E)$ for every Borel $E$, with $c(S\circ T) = c(S)c(T)$ and $c(\mathrm{id})=1$ ([[thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant]]).

[L2] $\lambda_n\big(D_p(c)[(0,1]^n]\big) = |c| = |\det D_p(c)|$ and $\lambda_n\big(E_{pq}[(0,1]^n]\big) = 1 = |\det E_{pq}|$ ([[lem-coordinate-scalings-and-permutations-scale-the-unit-cube-by-the-absolute-determinant]]).

[L3] For $n \ge 2$ a shear satisfies $\lambda_n\big(T_{ij}(t)[(0,1]^n]\big) = 1 = |\det T_{ij}(t)|$ ([[lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one]]).

[L4] Every proper linear subspace $W \subsetneq \mathbb{R}^n$ is Lebesgue measurable with $\lambda_n(W) = 0$ ([[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]]).

[L5] A Lipschitz self-map of $\mathbb{R}^n$ carries a set of Lebesgue outer measure zero to a Lebesgue measurable set of measure zero ([[lem-lipschitz-images-of-lebesgue-null-sets-are-lebesgue-null]], [[def-lipschitz-holder-contraction]]).

[L6] $E$ is Lebesgue measurable if and only if $E = H\cup W$ for an $F_\sigma$ set $H$ and a set $W$ with $\lambda_n^*(W)=0$ ([[thm-littlewood-characterisations-of-lebesgue-measurability]], condition 4; [[def-g-delta-and-f-sigma-in-a-topological-space]]).

[L7] Assuming countable choice, $\lambda_n$ is a complete measure on $\mathcal{L}(\mathbb{R}^n)$ ([[thm-lebesgue-measure-is-a-complete-measure]]) and every Borel set is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]], [[def-measure]]).

[F1] Every invertible matrix $A\in M_n(\mathbb R)$ is a finite product of elementary matrices, the identity being the empty product ([[thm-invertible-matrices-factor-into-elementary-matrices]]), and every elementary matrix is invertible ([[cor-elementary-matrices-are-invertible]], [[def-elementary-matrix]]).

[F2] For $n\ge1$ and $A,B\in M_n(R)$ over a commutative ring, $\det(AB)=\det(A)\det(B)$ ([[thm-determinant-multiplicative]], [[def-determinant-of-a-square-matrix]], [[def-matrix-product-and-identity-matrix]]), and a triangular matrix has determinant the product of its diagonal entries ([[thm-determinant-of-a-triangular-matrix]]).

[F3] For every $n\ge1$ and every real matrix $A\in M_n(\mathbb R)$, $A$ is invertible if and only if $\det(A)\ne0$ ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]]).

[F4] For every linear $L:\mathbb R^m\to\mathbb R^n$ there is a unique matrix $A$ with $(Lh)_i=\sum_{j<m}a_{ij}h_j$, and there is $K\ge0$ with $\|Lh\|_2\le K\|h\|_2$ for every $h$ ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[def-p-norms-on-rn]], [[lem-metrics-on-rn]]).

[F5] For a linear map $T:V\to W$, $\operatorname{im}T:=\{T(v):v\in V\}$ ([[def-kernel-and-image-of-a-linear-map]]), and it is a linear subspace ([[thm-linear-kernel-image-and-injectivity]]).

[F6] Every product with one factor $0$ and the other $\pm\infty$ is left undefined in $\overline{\mathbb{R}}$ ([[def-extended-reals]]).

[F7] Let $S \subseteq \mathbb{N}$; if $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\det A = 0$. Then $\operatorname{im}T$ is a proper linear subspace of $\mathbb{R}^n$: were $T$ surjective, each standard vector $e_i$ would be $T(v_i)$ for some $v_i$, finitely many instantiations, and the matrix $B$ with $b_{ji} := (v_i)_j$ would satisfy $(AB)_{ki} = \sum_j a_{kj}(v_i)_j = (Tv_i)_k = (e_i)_k$, so $AB = I_n$ and $\det A\,\det B = \det I_n = 1$, contradicting $\det A = 0$. [F2, F3, F4, F5]

1.2 $T$ is Lipschitz, since $\lVert Tx - Ty\rVert_2 = \lVert T(x-y)\rVert_2 \le K\lVert x-y\rVert_2$ for a real $K \ge 0$. [F4]

1.3 Every elementary matrix $M$ of $M_n(\mathbb{R})$ satisfies $c(M) = |\det M|$: at $n=1$ the only elementary matrices are the scalings $D_0(c)$, and for $n \ge 2$ the three types are the scalings, the transpositions and the shears, whose unit-cube images have the measures $|c|$, $1$ and $1$, matching $|\det|$ in each case. [L1, L2, L3, F1]

2.1 Suppose $\det A \ne 0$, so $A$ is invertible and factors as a finite product $M_1\cdots M_r$ of elementary matrices, each invertible. Multiplicativity of $c$ and of the determinant then give $c(T) = \prod_{s}c(M_s) = \prod_s|\det M_s| = |\det A|$ by induction on $r$, the empty product giving $c(\mathrm{id}) = 1 = |\det I_n|$. [step 1.1, step 1.3, L1, F1, F2, F3, F7]

2.2 For $\det A = 0$, step 1.1 makes $\operatorname{im}T$ a proper linear subspace, hence Lebesgue null; every $T[E]$ is a subset of it, so completeness makes $T[E]$ Lebesgue measurable with $\lambda_n(T[E]) = 0$, which is claim 2; stating it as a product would require the undefined $0\cdot(+\infty)$ when $\lambda_n(E)=+\infty$. [step 1.1, L4, L7, F6]


3.1 For $\det A \ne 0$ and $E$ Lebesgue measurable, write $E = H\cup W$ with $H$ an $F_\sigma$ set, hence Borel, and $\lambda_n^*(W) = 0$; then $T[E] = T[H]\cup T[W]$, where $T[H]$ is Borel and $T[W]$ is Lebesgue measurable of measure $0$ by step 1.2 and the Lipschitz lemma, so $T[E]$ is measurable. Since $H \subseteq E$ and $E\setminus H \subseteq W$, and $T[H]\subseteq T[E]$ with $T[E]\setminus T[H] \subseteq T[W]$, both pairs differ by null sets, so $\lambda_n(E) = \lambda_n(H)$ and $\lambda_n(T[E]) = \lambda_n(T[H]) = c(T)\lambda_n(H) = |\det A|\,\lambda_n(E)$, which is claim 1; claim 2 is step 2.2. [step 1.2, step 2.1, step 2.2, L1, L5, L6, L7] ∎