---
id: thm-cauchy-kernel-has-power-complete-and-schur-expansions
kind: theorem
title: Power-sum, complete, and Schur expansions of the Cauchy kernel
status: draft
origin: pipeline
deps:
  - def-bidegree-completed-symmetric-function-tensor-product
  - def-stable-graded-ring-of-symmetric-functions
  - thm-monomial-symmetric-functions-form-the-integral-stable-basis
  - def-monomial-symmetric-polynomials
  - thm-monomial-symmetric-polynomials-form-a-basis
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
  - prop-power-sums-form-a-rational-not-integral-stable-basis
  - def-stable-schur-function-by-bialternants
  - def-power-sum-and-complete-homogeneous-symmetric-polynomials
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §2, equations (2.14)–(2.15), printed pp. 24–25; §4, equations (4.1)–(4.3), printed pp. 62–63
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §9.9, printed pp. 191–195
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Statement

Let $\Omega(x,y)$ be the Cauchy kernel in the bidegree completion
[[def-bidegree-completed-symmetric-function-tensor-product]]. In
$\Lambda(x)\widehat\otimes\Lambda(y)$,
$$\Omega(x,y)=\sum_\lambda h_\lambda(x)m_\lambda(y)=\sum_\lambda s_\lambda(x)s_\lambda(y).$$
In the componentwise rational completion
$$\prod_{a,b\ge0}\bigl(\Lambda_{\mathbb Q}^a(x)\otimes_{\mathbb Q}\Lambda_{\mathbb Q}^b(y)\bigr),$$
it also has the expansion
$$\Omega(x,y)=\sum_\lambda z_\lambda^{-1}p_\lambda(x)p_\lambda(y),\qquad z_\lambda:=\prod_{r\ge1}r^{m_r(\lambda)}m_r(\lambda)!,\qquad m_r(\lambda):=\#\{i:\lambda_i=r\}.$$
All three sums are by bidegree $(d,d)$; the empty products indexed by
$\varnothing$ equal $1$.

## Facts & Assumptions

**Given:** The bidegree completion and its Cauchy kernel, the degreewise stable ring, the stable and finite monomial bases, the stable complete basis, the finite power-sum and complete-homogeneous conventions, the rational power-sum basis, and the bialternant definition of stable Schur functions.

[F1] The completed tensor product is the product of bidegree pieces, and $\Omega$ is the diagonal-bidegree stable limit of the finite products $\prod_{i,j}(1-x_i y_j)^{-1}$ ([[def-bidegree-completed-symmetric-function-tensor-product]]).

[F2] Each $\Lambda^d$ is the inverse limit of finite rank-$N$ symmetric-polynomial pieces, with coordinatewise multiplication ([[def-stable-graded-ring-of-symmetric-functions]]).

[F3] For $\lambda\vdash d$, $m_\lambda\in\Lambda^d$ is the compatible sequence of finite monomial orbit sums, and $\{m_\lambda:\lambda\vdash d\}$ is a $\mathbb Z$-basis of $\Lambda^d$ ([[thm-monomial-symmetric-functions-form-the-integral-stable-basis]]).

[F4] The finite orbit sum $m_\lambda(x_1,\ldots,x_N)$ is the sum of the distinct monomials whose exponent tuples are permutations of the padded tuple $\lambda$ ([[def-monomial-symmetric-polynomials]]).

[F5] In rank $N$, the finite orbit sums indexed by partitions of length at most $N$ form a $\mathbb Z$-basis of the symmetric polynomials ([[thm-monomial-symmetric-polynomials-form-a-basis]]).

[F6] Each stable $h_r$ is the compatible sequence obtained from the finite $h_r$ by setting added variables to zero, and the products $h_\lambda$ for $\lambda\vdash d$ form a $\mathbb Z$-basis of $\Lambda^d$ ([[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F7] In rank $N$, $h_k$ is the sum of all monomials of total degree $k$, while $p_r=\sum_{i=1}^N x_i^r$ for $r\ge1$ ([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[F8] The compatible $p_r$ generate $\Lambda_{\mathbb Q}$ freely, and $\{p_\lambda:\lambda\vdash d\}$ is a $\mathbb Q$-basis of $\Lambda_{\mathbb Q}^d$ ([[prop-power-sums-form-a-rational-not-integral-stable-basis]]).

[F9] For $N\ge\ell(\lambda)$, $s_\lambda(x_1,\ldots,x_N)=a_{\lambda+\delta_N}(x)/a_{\delta_N}(x)$; these finite quotients are compatible and define $s_\lambda\in\Lambda^{|\lambda|}$ ([[def-stable-schur-function-by-bialternants]]).

## Proof

**Proof technique:** direct.

1.1 For $N\ge1$, put $K_N=( (1-x_i y_j)^{-1})_{i,j=1}^N$, $P_N=\prod_{i,j=1}^N(1-x_i y_j)$, and $D_N=P_N\det K_N$. Clearing denominators gives $D_N=\sum_{\sigma\in S_N}\operatorname{sgn}(\sigma)\prod_i\prod_{j\ne\sigma(i)}(1-x_i y_j)$. This polynomial is alternating separately in the $x$ and $y$ variables. Vandermonde divisibility gives $\Delta_N(x)\Delta_N(y)\mid D_N$ in $\mathbb Z[x_1,\ldots,x_N,y_1,\ldots,y_N]$. Since $D_N$ has degree at most $N-1$ in each individual variable and each Vandermonde has degree $N-1$ in each of its variables, the quotient has degree zero in every variable and is an integer constant. Here $\Delta_N(x)=\det(x_i^{N-j})$, and likewise for $y$. To determine the constant, truncate each geometric series at a common exponent bound $M\ge N-1$ and apply finite Cauchy–Binet; the least possible total $y$-degree uses the distinct exponents $0,1,\ldots,N-1$ and contributes $\Delta_N(x)\Delta_N(y)$. Reversing exponent order changes both determinants by the same sign. This lowest-degree term is unchanged as $M$ increases, so it is the least-degree part of $\det K_N$. Since $P_N$ has constant term $1$ in the $y$ variables, the least-degree part of $D_N$ is also $\Delta_N(x)\Delta_N(y)$, and the constant is $1$. Thus $\det K_N=\Delta_N(x)\Delta_N(y)\Omega_N$, where $\Omega_N=P_N^{-1}$. For $N=0$ the identity holds with empty determinants and products equal to $1$. [F1, algebra]

1.2 Fix $d\ge0$ and $N\ge d$. If $d>0$, every partition of $d$ has length at most $d\le N$. By [F3], projection carries the stable basis $m_\lambda$ to the finite orbit sums; by [F5] those form a basis of the rank-$N$ symmetric polynomials. Therefore $\Lambda^d\to A_N^d$ is an isomorphism. For $d=0$, it is the unit map $\mathbb Z\to\mathbb Z$. Tensoring these projection isomorphisms in the two variables makes equality at rank $N\ge d$ sufficient to prove equality in bidegree $(d,d)$. [F2, F3, F5]

1.3 For $N\ge1$, put $K_N=((1-x_i y_j)^{-1})_{i,j=1}^N$, truncate each geometric series at exponent $M$, apply finite Cauchy–Binet, and let $M$ increase; every fixed bidegree receives contributions from finitely many exponent sets, giving $\det K_N=\sum_{0\le k_1<\cdots<k_N}\det(x_i^{k_j})_{i,j}\det(y_i^{k_j})_{i,j}$. The assignment $\lambda_i=k_{N+1-i}-(N-i)$ is a bijection from these strictly increasing exponent sets to partitions of length at most $N$, since strict increase makes the parts weakly decreasing and nonnegative. [F4, algebra]

2.1 At finite rank $N$, write $\Omega_N=\prod_{i,j=1}^N(1-x_i y_j)^{-1}$. Expand each geometric product as $\prod_{i=1}^N(1-x_i y_j)^{-1}=\sum_{a_j\ge0}h_{a_j}(x_1,\ldots,x_N)y_j^{a_j}$, since multiplying the $N$ one-variable geometric series gives the coefficient formula in [F7]. Hence $\Omega_N=\sum_{(a_1,\ldots,a_N)\in\mathbb N^N}(\prod_j h_{a_j}(x))y_1^{a_1}\cdots y_N^{a_N}$. Sort the positive entries of each exponent tuple into a partition $\lambda$. Its coefficient is $h_\lambda(x)$, and its distinct coordinate permutations sum to exactly $m_\lambda(y)$ by [F4]. Thus $\Omega_N=\sum_{\ell(\lambda)\le N}h_\lambda(x)m_\lambda(y)$. Each bidegree has finitely many partitions; the kernel's stable coefficients are those finite-rank limits by [F1], so passing rank $N\ge d$ by step 1.2 proves the stable complete–monomial expansion. [F1, F4, F6, F7, step 1.2, algebra]

2.2 At finite rank write $\Omega_N=\prod_{i,j=1}^N(1-x_i y_j)^{-1}$. Formal logarithms over $\mathbb Q$ give $\log\Omega_N=\sum_{i,j}\sum_{r\ge1}(x_i y_j)^r/r=\sum_{r\ge1}p_r^{(N)}(x)p_r^{(N)}(y)/r$. In the componentwise rational completion, the positive-degree part of $\Omega$ is topologically nilpotent for the bidegree filtration: each fixed bidegree receives contributions from only finitely many powers and finitely many $r$. Thus formal logarithm and exponential are defined coefficientwise. By [F2], [F7], and [F8], the finite identity lifts to $\log\Omega=\sum_{r\ge1}p_r(x)p_r(y)/r$. Exponentiating and multiplying the commuting series $\exp(p_r(x)p_r(y)/r)=\sum_{m_r\ge0}(p_r(x)p_r(y))^{m_r}/(r^{m_r}m_r!)$ over $r\ge1$ gives one term for each finitely supported multiplicity sequence $(m_r)$, equivalently each partition $\lambda$. Its coefficient is $1/z_\lambda$. By [F8] these are the rational power-sum basis elements in the two degree-$d$ factors, proving the stated expansion. [F1, F2, F7, F8, step 1.2, algebra]

2.3 Reversing the exponent columns in both determinants of step 1.3 changes each by $(-1)^{N(N-1)/2}$, so their product becomes $a_{\lambda+\delta_N}(x)a_{\lambda+\delta_N}(y)$. By [F9], each alternant is $\Delta_N$ times its finite Schur quotient. Combine the determinant expansion of step 1.3 with step 1.1 and cancel the nonzero polynomial $\Delta_N(x)\Delta_N(y)$ in each homogeneous bidegree of the integral-domain polynomial ring; this gives $\Omega_N=\sum_{\ell(\lambda)\le N}s_\lambda(x_1,\ldots,x_N)s_\lambda(y_1,\ldots,y_N)$. [F9, step 1.1, step 1.3, algebra]

3.1 For each bidegree $(d,d)$, take $N\ge d$ and use the projection isomorphisms of step 1.2 to pass the finite Schur identity of step 2.3 to the stable completion. The empty rank $N=0$ has empty determinants and products equal to $1$, and the empty partition gives the constant term in all three expansions. Setting either alphabet to zero leaves only that term; all off-diagonal components are zero by [F1]. At degree one, rank-one projection sends $h_{(1)},m_{(1)},p_{(1)}$, and $s_{(1)}$ to $x_1$, so every expansion has coefficient one. These arguments include the threshold rank $N=d$ and the first allowed bialternant rank $N=\ell(\lambda)$. [F1, step 1.2, step 2.3, algebra] ∎
