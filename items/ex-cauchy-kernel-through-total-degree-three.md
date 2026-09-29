---
id: ex-cauchy-kernel-through-total-degree-three
kind: example
title: Cauchy kernel through bidegree three
status: draft
origin: pipeline
deps:
  - thm-cauchy-kernel-has-power-complete-and-schur-expansions
  - def-hall-inner-product-on-symmetric-functions
  - thm-schur-functions-form-an-orthonormal-integral-basis
  - thm-jacobi-trudi-and-dual-jacobi-trudi-identities
  - def-stable-graded-ring-of-symmetric-functions
  - def-power-sum-and-complete-homogeneous-symmetric-polynomials
  - def-monomial-symmetric-polynomials
  - thm-monomial-symmetric-polynomials-form-a-basis
  - thm-monomial-symmetric-functions-form-the-integral-stable-basis
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
  - def-bidegree-completed-symmetric-function-tensor-product
justified_by: []
aliases: []
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
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §4, equations (4.2)–(4.3), printed pp. 62–63
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §9.9, printed pp. 191–195
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Example

Let $\Omega_{\le3}:=\sum_{d=0}^3\Omega_{d,d}$ be the part of the Cauchy kernel in bidegrees $(d,d)$ with $0\le d\le3$. Its complete–monomial and Schur expansions are computed below. Pairing the $x$-factor with $s_{21}(x)$ gives $s_{21}(y)$.

## Facts & Assumptions

**Given:** The degreewise stable ring, the finite complete and monomial conventions, their stable bases, the Cauchy expansions, the Hall form, and Jacobi–Trudi.

[F1] In the bidegree completion, $\Omega(x,y)=\sum_\lambda h_\lambda(x)m_\lambda(y)=\sum_\lambda s_\lambda(x)s_\lambda(y)$; both sums are taken by diagonal bidegree ([[thm-cauchy-kernel-has-power-complete-and-schur-expansions]]).

[F2] Each $\Lambda^d$ is the inverse limit of the rank-$N$ homogeneous symmetric-polynomial parts, and multiplication is induced by rankwise polynomial multiplication ([[def-stable-graded-ring-of-symmetric-functions]]).

[F3] In rank $N$, $h_k$ is the sum of all monomials of total degree $k$, with $h_0=1$ ([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[F4] In rank $N$, $m_\lambda$ is the sum of the distinct monomials whose exponent tuples are permutations of the padded tuple $\lambda$ ([[def-monomial-symmetric-polynomials]]).

[F5] In rank $N$, the $m_\lambda$ indexed by partitions of length at most $N$ form a $\mathbb Z$-basis of the symmetric polynomials ([[thm-monomial-symmetric-polynomials-form-a-basis]]).

[F6] The stable orbit sums $m_\lambda$, for $\lambda\vdash d$, form a $\mathbb Z$-basis of $\Lambda^d$ and project to the finite orbit sums whenever $N\ge d$ ([[thm-monomial-symmetric-functions-form-the-integral-stable-basis]]).

[F7] The finite $h_r$ specialize compatibly to stable elements, and $h_\lambda=\prod_i h_{\lambda_i}$ denotes their stable product ([[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F8] The Hall form is graded and satisfies $\langle h_\lambda,m_\mu\rangle_H=\delta_{\lambda\mu}$ ([[def-hall-inner-product-on-symmetric-functions]]).

[F9] For $r\ge\ell(\lambda)$, $s_\lambda=\det(h_{\lambda_i-i+j})_{1\le i,j\le r}$, with $h_0=1$, negative subscripts zero, and the empty determinant equal to $1$ ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]]).

[F10] The stable Schur functions form an orthonormal basis for the Hall form: $\langle s_\lambda,s_\mu\rangle_H=\delta_{\lambda\mu}$ ([[thm-schur-functions-form-an-orthonormal-integral-basis]]).

[F11] The completed tensor product has diagonal bidegree kernel $\Omega=\prod_{i,j}(1-x_i y_j)^{-1}$ ([[def-bidegree-completed-symmetric-function-tensor-product]]).

## Verification

**Proof technique:** direct.

1.1 At rank $3$, the projection $\Lambda^d\to A_3^d$ is an isomorphism for each $0\le d\le3$: for $d>0$, every partition of $d$ has length at most $d\le3$, and [F5] and [F6] identify the stable and finite monomial bases; for $d=0$, both components are $\mathbb Z$ with basis $1$. Thus finite rank-$3$ coefficient calculations determine the stable coefficients in all degrees used here. [F2, F5, F6]

2.1 At rank $3$, grouping monomials by distinct exponent orbits and counting ordered products gives the complete-function identities below; $m_2m_1=m_3+m_{21}$ and $m_{11}m_1=m_{21}+3m_{111}$, while types $(3),(2,1),(1,1,1)$ occur in $h_1^3$ with multiplicities $1,3,3!=6$. [F3, F4, F7, step 1.1, algebra]

$$h_1=m_1,\quad h_2=m_2+m_{11},\quad h_{11}=h_1^2=m_2+2m_{11}.$$

$$h_3=m_3+m_{21}+m_{111},\quad h_{21}=h_2h_1=m_3+2m_{21}+3m_{111},\quad h_{111}=h_1^3=m_3+3m_{21}+6m_{111}.$$

$$m_2m_1=m_3+m_{21},\quad m_{11}m_1=m_{21}+3m_{111}.$$

3.1 Jacobi–Trudi evaluates the Schur functions through degree three as shown; substituting step 2.1 gives the monomial expressions, including $s_{111}=h_1^3-2h_2h_1+h_3$. [F9, step 2.1, algebra]

$$s_1=h_1,\quad s_2=h_2,\quad s_{11}=h_1^2-h_2,\quad s_3=h_3,\quad s_{21}=h_2h_1-h_3,\quad s_{111}=h_1^3-2h_2h_1+h_3.$$

$$s_1=m_1,\quad s_2=m_2+m_{11},\quad s_{11}=m_{11},\quad s_3=m_3+m_{21}+m_{111},\quad s_{21}=m_{21}+2m_{111},\quad s_{111}=m_{111}.$$

$$s_{111}=(m_3+3m_{21}+6m_{111})-2(m_3+2m_{21}+3m_{111})+(m_3+m_{21}+m_{111})=m_{111}.$$

4.1 The partitions of degrees $0,1,2,3$ are respectively $\{\varnothing\}$, $\{(1)\}$, $\{(2),(1,1)\}$, and $\{(3),(2,1),(1,1,1)\}$, so [F1] gives these complete–monomial and Schur components of $\Omega_{\le3}$ in bidegrees $(d,d)$. [F1, step 1.1, step 2.1, step 3.1]

$$\Omega_{0,0}=1\otimes1,\quad \Omega_{1,1}=h_1(x)\otimes m_1(y),\quad \Omega_{2,2}=h_2(x)\otimes m_2(y)+h_{11}(x)\otimes m_{11}(y).$$

$$\Omega_{3,3}=h_3(x)\otimes m_3(y)+h_{21}(x)\otimes m_{21}(y)+h_{111}(x)\otimes m_{111}(y).$$

$$\Omega_{0,0}=1\otimes1,\quad \Omega_{1,1}=s_1(x)\otimes s_1(y),\quad \Omega_{2,2}=s_2(x)\otimes s_2(y)+s_{11}(x)\otimes s_{11}(y).$$

$$\Omega_{3,3}=s_3(x)\otimes s_3(y)+s_{21}(x)\otimes s_{21}(y)+s_{111}(x)\otimes s_{111}(y).$$

4.2 Since $s_{21}=h_{21}-h_3$, duality in [F8] gives $\langle s_{21},h_3\rangle_H=\langle h_{21}-h_3,m_3+m_{21}+m_{111}\rangle_H=1-1=0$. [F8, step 2.1, step 3.1, algebra]

4.3 Similarly, $\langle s_{21},h_{21}\rangle_H=\langle h_{21}-h_3,m_3+2m_{21}+3m_{111}\rangle_H=2-1=1$. [F8, step 2.1, step 3.1, algebra]

4.4 Also, $\langle s_{21},h_{111}\rangle_H=\langle h_{21}-h_3,m_3+3m_{21}+6m_{111}\rangle_H=3-1=2$. [F8, step 2.1, step 3.1, algebra]

5.1 Gradedness removes degrees below three, so contracting the first factor in the complete–monomial expansion gives $m_{21}(y)+2m_{111}(y)=s_{21}(y)$; contraction of the Schur expansion gives the same result by [F10]. [F1, F8, F10, step 3.1, step 4.1, step 4.2, step 4.3, step 4.4]

6.1 Degree $0$ gives $1\otimes1$ (and [F11] specializes to $1$ when either alphabet is zero); in degree $1$, $h_1=m_1=s_1$ has coefficient one. Degree $3$ is the retained upper endpoint and rank $3$ is its threshold rank; repeated parts in $h_{11}$ and $h_{111}$ have the coefficients from step 2.1, while each $m_\lambda$ lists distinct monomials. All counts are finite, so no choice is used, and no equivalence is asserted. [F1, F3, F4, F5, F6, F11, step 2.1, algebra] ∎
