---
id: cex-power-sums-do-not-form-an-integral-basis
kind: counterexample
title: Power sums fail to span integrally in degree two
status: published
origin: pipeline
deps:
  - def-stable-graded-ring-of-symmetric-functions
  - def-power-sum-and-complete-homogeneous-symmetric-polynomials
  - def-monomial-symmetric-polynomials
  - thm-monomial-symmetric-polynomials-form-a-basis
  - thm-monomial-symmetric-functions-form-the-integral-stable-basis
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
  - prop-power-sums-form-a-rational-not-integral-stable-basis
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §2, equations (2.10)–(2.14′), printed pp. 23–25
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §9.6, printed pp. 181–183
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Statement

In degree two, the integral stable symmetric function
$$h_2=\frac{p_{(1,1)}+p_{(2)}}{2}$$
cannot be expressed as a $\mathbb Z$-linear combination of
$p_{(1,1)}$ and $p_{(2)}$. Thus the power-sum family does not span
$\Lambda^2$ over $\mathbb Z$.

## Facts & Assumptions

**Given:** The stable graded ring, the finite power-sum and complete-homogeneous conventions, the finite monomial orbit sums, the stable monomial and complete bases, and the rational power-sum basis.

[F1] Each $\Lambda^d$ is the inverse limit of its finite-rank homogeneous symmetric-polynomial pieces, and the rank-$N$ projections are compatible ([[def-stable-graded-ring-of-symmetric-functions]]).

[F2] In rank $N$, $p_r=\sum_{i=1}^N x_i^r$ for $r\ge1$, and $h_k$ is the sum of all monomials of total degree $k$ ([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[F3] At rank $N$, $m_\lambda$ is the sum of the distinct monomials in the variable-permutation orbit of the padded partition $\lambda$ ([[def-monomial-symmetric-polynomials]]).

[F4] The stable $h_r$ are the compatible sequences obtained from the finite $h_r$ by setting added variables to zero ([[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F5] The stable functions $m_{(2)}$ and $m_{(1,1)}$ form a $\mathbb Z$-basis of $\Lambda^2$, and projection to rank $N=2$ identifies this basis with the finite orbit sums ([[thm-monomial-symmetric-functions-form-the-integral-stable-basis]]).

[F6] The stable power-sum products $p_\lambda$ for $\lambda\vdash2$ form a $\mathbb Q$-basis of $\Lambda_{\mathbb Q}^2$ ([[prop-power-sums-form-a-rational-not-integral-stable-basis]]).

[F7] In rank $N$, the monomial orbit sums indexed by partitions of length at most $N$ form a $\mathbb Z$-basis of the symmetric polynomials ([[thm-monomial-symmetric-polynomials-form-a-basis]]).

## Proof

**Proof technique:** direct.

1.1 At rank two, [F2] and [F3] give $m_{(2)}=x_1^2+x_2^2$, $m_{(1,1)}=x_1x_2$, $h_2=m_{(2)}+m_{(1,1)}$, $p_1^2=m_{(2)}+2m_{(1,1)}$, and $p_2=m_{(2)}$. By [F7], $m_{(2)}$ and $m_{(1,1)}$ are a basis in rank two; by [F5] and the stable-ring projection in [F1], the rank-two projection $\Lambda^2\to A_2^2$ carries the stable basis to that finite basis and is an isomorphism. The stable $h_2$ projects to its finite polynomial by [F2] and [F4], and the finite power sums form compatible stable sequences by [F1] and [F2]. Thus the same three equations hold in $\Lambda^2$. At rank one the three finite functions $h_2,p_1^2,p_2$ all equal $x_1^2$, while rank zero has no degree-two monomials; rank two is the first rank that distinguishes the two monomial orbits. [F1, F2, F3, F4, F5, F7, algebra]

2.1 Since $p_{(1,1)}=p_1^2$, step 1.1 yields $h_2=\tfrac12(p_{(1,1)}+p_{(2)})$. By [F6], $p_{(1,1)}$ and $p_{(2)}$ are a $\mathbb Q$-basis, so this is the unique rational coordinate vector of $h_2$. If $h_2=a p_{(1,1)}+b p_{(2)}$ for integers $a,b$, including zero values, uniqueness forces $a=b=\tfrac12$, impossible. Equivalently, comparison in the integral basis of [F5] forces the $m_{(1,1)}$ coefficient to satisfy $2a=1$. Thus $h_2$ is a witness to failure of integral spanning. [F5, F6, step 1.1, algebra] ∎
