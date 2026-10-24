---
id: ex-ip-closure-only-feature-is-not-exactly-estimable
kind: example
title: A compact diagonal map has a closure-only feature
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-feature-estimability-through-adjoint-range
  - def-ip-compact-linear-inverse-model
  - def-countable-choice
  - def-hilbert-space
  - lem-square-summable-sequences-form-a-hilbert-space
  - def-square-summable-family-on-an-arbitrary-index-set
  - lem-finite-rank-operators-are-compact
  - thm-norm-limit-of-compact-operators-is-compact
  - thm-p-series-real-exponents
  - thm-hilbert-space-fourier-expansion
  - def-hilbert-space-adjoint
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is used through the norm-limit compactness, Hilbert adjoint, Fourier, and exact-estimability interfaces. The reindexing, diagonal map, density of finite sequences, and failure of exact range membership are established directly.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §1.2.2"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
    - title: "Kretschmann and Werner, Maximum a posteriori testing in statistical inverse problems, §1.1"
      url: https://arxiv.org/pdf/2402.00686
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Assume Countable Choice. Set $I=\{j\in\mathbb N:j\ge1\}$. On the real Hilbert space $X=H=\ell^2(I,\mathbb R)$ with standard basis $(e_j)_{j\in I}$, define $Kx=(x_j/j)_{j\in I}$ and the feature vector $h=(1/j)_{j\in I}$. Fix $\epsilon>0$, let $Z$ be a jointly Gaussian centered family indexed by $H$, linear into $L^2$ with covariance $\mathbb E[Z(g)Z(k)]=\langle g,k\rangle_H$, and define $Y_x(g)=\langle Kx,g\rangle_H+\epsilon Z(g)$. The map $K$ is compact and self-adjoint. Its adjoint range contains every finitely supported sequence, so $\overline{R(K^*)}=\ell^2(I,\mathbb R)$. The vector $h$ belongs to $\ell^2(I,\mathbb R)$ but not to $R(K^*)$, since any preimage would have all coordinates equal to $1$. Thus this feature lies in the closure of the adjoint range but is not exactly estimable by one probe.

## Example references

[[def-ip-feature-estimability-through-adjoint-range|Exact linear feature estimability through the adjoint range]]

[[def-ip-compact-linear-inverse-model|Compact linear inverse model between Hilbert spaces]]

[[thm-p-series-real-exponents|Convergence and divergence of real p-series]]

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, §1.2.2](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

## Facts & Assumptions

**Given:** The real square-summable sequence Hilbert space, its standard basis, the diagonal map and feature in the Example.

[F1] The real square-summable sequences form a Hilbert space with inner product $\langle x,y\rangle=\sum_jx_jy_j$ and norm squared $\sum_jx_j^2$. This holds for $I$ as well as $\mathbb N$: the bijective linear reindexing $(x_j)_{j\in I}\mapsto(x_{n+1})_{n\in\mathbb N}$ preserves inner products and norms, hence transfers completeness from $\ell^2(\mathbb N,\mathbb R)$. [[lem-square-summable-sequences-form-a-hilbert-space]], [[def-hilbert-space]]

[F2] For a square-summable sequence indexed by $I$, its coordinate truncations converge in norm because $\sum_{j>N}x_j^2\to0$. Thus the standard coordinate vectors are orthonormal with dense span, hence form a complete orthonormal basis to which Fourier expansion applies. [[def-square-summable-family-on-an-arbitrary-index-set]], [[thm-hilbert-space-fourier-expansion]]

[F3] The series $\sum_{j\ge1}j^{-2}$ converges. [[thm-p-series-real-exponents]]

[F4] Every bounded finite-rank operator is compact, and under Countable Choice an operator-norm limit of compact operators into a Banach space is compact. [[lem-finite-rank-operators-are-compact]], [[thm-norm-limit-of-compact-operators-is-compact]], [[def-countable-choice]]

[F5] The adjoint identity is $\langle Kx,y\rangle=\langle x,K^*y\rangle$. [[def-hilbert-space-adjoint]]

[F6] A feature vector is exactly estimable by one probe iff it belongs to $R(K^*)$. [[def-ip-feature-estimability-through-adjoint-range]]

[F7] The compact inverse model has Hilbert parameter and data spaces and a compact forward map. [[def-ip-compact-linear-inverse-model]]

[A1] Countable Choice is inherited through the compactness of norm limits in [F4], the Hilbert adjoint in [F5], Fourier expansion in [F2], and the exact-estimability interface in [F6]. [[def-countable-choice]]

## Proof

1.1 The map is linear and $\|Kx\|_2^2=\sum_jx_j^2/j^2\le\|x\|_2^2$, so it is bounded. For $N\ge1$, let $K_Nx$ retain only the first $N$ output coordinates. Its range is spanned by $e_1,\ldots,e_N$, and $\|K_Nx\|_2\le\|x\|_2$ makes it bounded, so [F4] makes $K_N$ compact. Also $\|(K-K_N)x\|_2^2=\sum_{j>N}x_j^2/j^2\le(N+1)^{-2}\|x\|_2^2$, with equality in the operator norm on $e_{N+1}$. Thus $\|K-K_N\|=1/(N+1)\to0$, and [F4] makes $K$ compact. The diagonal real entries show $\langle Kx,y\rangle=\sum_jx_jy_j/j=\langle x,Ky\rangle$; by [F5], $K^*=K$. For every finitely supported $z$, the sequence $x_j=jz_j$ is finitely supported and $Kx=z$, so $c_{00}\subseteq R(K^*)$. Truncations are dense in $\ell^2$ by [F2], proving $\overline{R(K^*)}=\ell^2$. [given, F1, F2, F4, F5, F7, A1, algebra, construct]

2.1 By [F3], $h=(1/j)$ is square-summable. If $K^*x=h$, self-adjointness and the coordinate equations give $x_j/j=1/j$, hence $x_j=1$ for every $j$. But the first $N$ squared coordinates of such an $x$ sum to $N$ for every $N$, so no finite bound can contain all partial sums; this contradicts $x\in\ell^2$. Therefore $h\notin R(K^*)$. Since $h\in\overline{R(K^*)}$ by step 1.1, [F6] shows that the feature is not exactly estimable by a single probe despite lying in the closure of the adjoint range. [given, F1, F3, F6, step 1.1, algebra] ∎
