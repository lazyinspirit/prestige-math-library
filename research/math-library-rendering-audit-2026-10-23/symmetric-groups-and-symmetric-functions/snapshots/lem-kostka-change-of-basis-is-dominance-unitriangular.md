---
id: lem-kostka-change-of-basis-is-dominance-unitriangular
kind: lemma
title: The Kostka change of basis is dominance-unitriangular
status: published
origin: pipeline
deps:
  - def-partition-young-diagram-and-conjugate-partition
  - def-stable-graded-ring-of-symmetric-functions
  - def-monomial-symmetric-polynomials
  - thm-monomial-symmetric-functions-form-the-integral-stable-basis
  - def-semistandard-tableau-and-kostka-number
  - def-dominance-order-on-partitions
  - def-stable-schur-function-by-bialternants
  - def-skew-schur-function-by-hall-adjointness
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
  - def-hall-inner-product-on-symmetric-functions
  - thm-schur-functions-form-an-orthonormal-integral-basis
  - thm-skew-jacobi-trudi-and-tableau-expansion
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-09-30
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §6 equations (6.4)–(6.6), printed pp. 101–102; §4 equations (4.5)–(4.8), printed pp. 63–64
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
---

## Statement

For every $d\ge0$ and partitions $\lambda,\mu\vdash d$,
$$h_\mu=\sum_{\lambda\vdash d}K_{\lambda\mu}s_\lambda.$$
Moreover, $K_{\lambda\mu}=0$ unless $\lambda\unrhd\mu$, and
$K_{\mu\mu}=1$. Thus, after ordering the partitions of $d$ by any linear
extension of dominance from smaller to larger, the matrix
$(K_{\lambda\mu})_{\lambda,\mu\vdash d}$ is lower unitriangular over
$\mathbb Z$.

## Facts & Assumptions

**Given:** The stable graded ring and monomial basis, stable Schur functions,
the tableau formula and Kostka counts, the Hall pairing, and the integral
Schur and complete-function bases.

[F1] A partition $\lambda\vdash d$ has finitely many positive parts, padded
with zeros when needed; its diagram has $\lambda_i$ cells in row $i$, and
$\varnothing$ is the only partition of $0$
([[def-partition-young-diagram-and-conjugate-partition]]).

[F2] For each $d$, the stable monomial symmetric functions
$\{m_\nu:\nu\vdash d\}$ form a $\mathbb Z$-basis of $\Lambda^d$; at every
rank $N\ge d$ their projections are the finite monomial orbit sums and give
the corresponding basis ([[thm-monomial-symmetric-functions-form-the-integral-stable-basis]]).

[F3] A finite monomial symmetric polynomial is the sum of the distinct
monomials whose exponent vectors are permutations of its partition label;
it is symmetric by construction ([[def-monomial-symmetric-polynomials]]).

[F4] A semistandard tableau has positive integer entries, weakly increasing
rows, strictly increasing columns, and content $\nu_i$ copies of label $i$;
$K_{\lambda\nu}$ counts such tableaux of straight shape $\lambda$
([[def-semistandard-tableau-and-kostka-number]]).

[F5] For partitions of $d$, $\lambda\unrhd\mu$ means
$\sum_{i=1}^r\lambda_i\ge\sum_{i=1}^r\mu_i$ for every $r\ge1$, with zero
padding ([[def-dominance-order-on-partitions]]).

[F6] Each finite-rank Schur polynomial is symmetric and specializes
compatibly to the stable Schur function $s_\lambda\in\Lambda^d$
([[def-stable-schur-function-by-bialternants]]).

[F7] The skew Schur function is defined by its finite Schur-coordinate sum
$s_{\lambda/\mu}:=\sum_{\nu\vdash d}\langle s_\lambda,s_\mu s_\nu\rangle_Hs_\nu$
([[def-skew-schur-function-by-hall-adjointness]]).

[F8] In every finite rank, the straight-shape specialization of the skew
tableau formula is $s_\lambda=\sum_T x^{\operatorname{wt}(T)}$ over
semistandard tableaux ([[thm-skew-jacobi-trudi-and-tableau-expansion]]).

[F9] The products $h_\mu=\prod_i h_{\mu_i}$ indexed by $\mu\vdash d$ form
an integral basis of $\Lambda^d$
([[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F10] The Hall form is $\mathbb Z$-bilinear and satisfies
$\langle h_\mu,m_\nu\rangle_H=\delta_{\mu\nu}$
([[def-hall-inner-product-on-symmetric-functions]]).

[F11] The Schur functions form a $\mathbb Z$-basis of each $\Lambda^d$ and
satisfy $\langle s_\lambda,s_\kappa\rangle_H=\delta_{\lambda\kappa}$
([[thm-schur-functions-form-an-orthonormal-integral-basis]]).

[F12] The stable symmetric-function ring is the graded direct sum of its
degree components, with degreewise inverse-limit projections
([[def-stable-graded-ring-of-symmetric-functions]]).

## Proof

**Proof technique:** direct.

1.1 Fix $d>0$, $\lambda\vdash d$, and rank $N\ge d$. Setting $\mu=\varnothing$ in [F7] and using [F11] reduces the defining sum to $s_{\lambda/\varnothing}=s_\lambda$; [F8] therefore expresses the rank-$N$ specialization of $s_\lambda$ as the weight-monomial sum over semistandard $\lambda$-tableaux. For $\nu\vdash d$, the coefficient of $x_1^{\nu_1}x_2^{\nu_2}\cdots$ is $K_{\lambda\nu}$ by [F4]. By [F6], permuting variables preserves this polynomial, so every monomial in the orbit of $\nu$ has the same coefficient. Since $m_\nu$ is the sum of the distinct orbit monomials [F3], the coefficient of $m_\nu$ is $K_{\lambda\nu}$. The projection in [F2] identifies the rank-$N$ expansion with the stable one, giving $s_\lambda=\sum_{\nu\vdash d}K_{\lambda\nu}m_\nu$. For $d=0$, this is $s_\varnothing=m_\varnothing=1$ with $K_{\varnothing,\varnothing}=1$. [F1, F2, F3, F4, F6, F7, F8, F11, F12]

1.2 If a semistandard tableau $T$ has shape $\lambda$, each cell in row $i$ has a cell above it in every preceding row. Positivity and strict increase down columns force its entry to be at least $i$, so all entries at most $r$ lie in the first $r$ rows. A tableau of content $\mu$ has $\sum_{i=1}^r\mu_i$ entries at most $r$, hence $\sum_{i=1}^r\mu_i\le\sum_{i=1}^r\lambda_i$ for every $r\ge1$. By [F5], $\lambda\unrhd\mu$. If $\lambda$ does not dominate $\mu$, no such tableau exists and $K_{\lambda\mu}=0$. [F1, F4, F5]

2.1 Suppose $\lambda=\mu$. For each $r$, the first $r$ rows have exactly $\sum_{i=1}^r\mu_i$ cells, and all entries at most $r$ lie in those rows; the content supplies exactly that many such entries. Thus every cell in the first $r$ rows has entry at most $r$. Taking $r=i$ and using the lower bound at least $i$ from step 1.2 forces every cell in row $i$ to contain $i$. This filling is semistandard and unique, so $K_{\mu\mu}=1$. The empty shape has its unique empty tableau, giving the same conclusion for $d=0$. [F1, F4, step 1.2]

2.2 By step 1.1 and [F10], $\langle h_\mu,s_\lambda\rangle_H=\sum_{\nu\vdash d}K_{\lambda\nu}\langle h_\mu,m_\nu\rangle_H=K_{\lambda\mu}$. The form is symmetric: by [F11], writing $f=\sum_\alpha a_\alpha s_\alpha$ and $g=\sum_\alpha b_\alpha s_\alpha$ gives $\langle f,g\rangle_H=\sum_\alpha a_\alpha b_\alpha=\langle g,f\rangle_H$. Therefore $\langle s_\lambda,h_\mu\rangle_H=K_{\lambda\mu}$; this symmetry follows from the proved orthonormal basis, not from an extra assumption on the defining pairing. Expand $h_\mu=\sum_{\lambda\vdash d}c_{\lambda\mu}s_\lambda$ in the integral Schur basis [F11]. Pairing on the left with $s_\kappa$ gives $c_{\kappa\mu}=\langle s_\kappa,h_\mu\rangle_H=K_{\kappa\mu}$. Thus the stated expansion holds. [F9, F10, F11, step 1.1]

3.1 The set of partitions of $d$ is finite; order it by a linear extension of dominance from smaller to larger. By step 1.2, a nonzero off-diagonal entry $K_{\lambda\mu}$ can occur only when row label $\lambda$ follows column label $\mu$; by step 2.1 every diagonal entry is one. The entries are integers because they count finite sets [F4], so the matrix is lower unitriangular over $\mathbb Z$. For $d=0$ it is the one-by-one matrix $(1)$. Both families are integral bases [F9, F11], so this is their integral change-of-basis matrix. [F4, F5, F9, F11, step 1.2, step 2.1, algebra]

4.1 In degree zero the empty tableau gives $h_\varnothing=s_\varnothing=1$, and in degree one the sole tableau gives $h_{(1)}=s_{(1)}$. Empty or impossible tableau sets give zero counts by definition; zero inputs pair to zero by bilinearity. Zero padding covers prefix sums beyond either partition's length. Each degree has finitely many partition labels and tableaux, so the finite order extension and expansions use no choice. No converse criterion is asserted. [F1, F4, F9, F10, F11, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, algebra] ∎
