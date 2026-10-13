---
id: lem-schur-specialization-coproduct-and-plethysm-identities
kind: lemma
title: "Schur functions on sums and products of alphabets"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-lambda-ring-specializations-and-the-sigma-series,
       thm-littlewood-richardson-schur-product-expansion,
       def-littlewood-richardson-tableau-and-coefficient,
       def-kronecker-coefficient-and-internal-tensor-product,
       def-internal-product-on-symmetric-functions,
       thm-cauchy-kernel-has-power-complete-and-schur-expansions,
       prop-power-sums-diagonalize-the-internal-product,
       cor-power-sums-are-orthogonal-for-the-hall-inner-product,
       thm-newtons-identities,
       thm-fundamental-theorem-of-symmetric-polynomials,
       prop-power-sums-form-a-rational-not-integral-stable-basis,
       lem-complete-homogeneous-expansion-in-power-sums,
       def-power-sum-and-complete-homogeneous-symmetric-polynomials,
       thm-schur-functions-form-an-orthonormal-integral-basis,
       def-stable-schur-function-by-bialternants,
       def-bidegree-completed-symmetric-function-tensor-product,
       def-stable-graded-ring-of-symmetric-functions,
       thm-monomial-symmetric-functions-form-the-integral-stable-basis,
       thm-monomial-symmetric-polynomials-form-a-basis,
       def-hall-inner-product-on-symmetric-functions]
justified_by: []
aliases: []
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
    - title: "Emmanuel Briand, Amarpreeet Rattan and Mercedes Rosas, On the growth of the Kronecker coefficients, arXiv:1607.02887v1 (2016); section 2.3 pp. 5-6 (lambda-ring formalism: s_lambda[A+B] and s_lambda[AB])"
      url: "https://arxiv.org/pdf/1607.02887"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press 1995; Chapter I sections 2-5 (complete functions, Schur functions, the Hall inner product, plethysm)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
---

## Statement

Let $A,B$ be specializations
([[def-lambda-ring-specializations-and-the-sigma-series]]).

- **(a)** For every partition $\lambda$,
  $$s_\lambda[A+B]=\sum_{\mu,\nu}c^\lambda_{\mu,\nu}\,s_\mu[A]\,s_\nu[B],$$
  the sum over pairs of partitions with $|\mu|+|\nu|=|\lambda|$, where
  $c^\lambda_{\mu,\nu}$ is the Littlewood–Richardson coefficient
  ([[def-littlewood-richardson-tableau-and-coefficient]]).
- **(b)** For every partition $\lambda$,
  $$s_\lambda[AB]=\sum_{\mu,\nu}g^\lambda_{\mu,\nu}\,s_\mu[A]\,s_\nu[B],$$
  the sum over pairs with $|\mu|=|\nu|=|\lambda|$, where
  $g^\lambda_{\mu,\nu}$ is the ordinary Kronecker coefficient
  ([[def-kronecker-coefficient-and-internal-tensor-product]],
  [[def-internal-product-on-symmetric-functions]]).

Both sums are finite. No multiplicativity or bilinearity of $s_\lambda$ in
the alphabet variables, and no unproved Schur-functor decomposition, is
assumed.

## Facts & Assumptions

**Given:** Specializations $A,B,U,V,W$ into commutative $\mathbb Q$-algebras, partitions $\lambda,\mu,\nu,\rho$ and integers $d,n\ge0$.

[F1] Specializations are the algebra homomorphisms determined by arbitrary power-sum values, with $p_k[A+B]=p_k[A]+p_k[B]$, $p_k[AB]=p_k[A]p_k[B]$; for a product $\rho$ one has $p_\rho[A+B]=\prod_i(p_{\rho_i}[A]+p_{\rho_i}[B])$ and $p_\rho[AB]=p_\rho[A]p_\rho[B]$ ([[def-lambda-ring-specializations-and-the-sigma-series]]).

[F2] $\Lambda_{\mathbb Q}=\mathbb Q[p_1,p_2,\dots]$ and $\{p_\lambda:\lambda\vdash d\}$ is a $\mathbb Q$-basis of $\Lambda_{\mathbb Q}^d$ ([[prop-power-sums-form-a-rational-not-integral-stable-basis]]).

[F3] $h_n=\sum_{\lambda\vdash n}p_\lambda/z_\lambda$ in $\Lambda_{\mathbb Q}$, where $z_\lambda=\prod_ii^{m_i(\lambda)}m_i(\lambda)!$; in a finite alphabet, $h_k$ is the sum of all monomials of total degree $k$ and $\sum_{k\ge0}h_kt^k=\prod_x(1-xt)^{-1}$ ([[lem-complete-homogeneous-expansion-in-power-sums]], [[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[F4] Newton's identities: with $e_0=1$, $e_k=0$ for $k>n$, one has $ke_k=\sum_{i=1}^k(-1)^{i-1}e_{k-i}p_i$ in $R[x_1,\dots,x_n]^{\operatorname{Sym}_n}$ ([[thm-newtons-identities]]).

[F5] The fundamental theorem of symmetric polynomials: substitution $T_k\mapsto e_k$ is an isomorphism $R[T_1,\dots,T_n]\to R[x_1,\dots,x_n]^{\operatorname{Sym}_n}$ ([[thm-fundamental-theorem-of-symmetric-polynomials]]).

[F6] In the bidegree completion [[def-bidegree-completed-symmetric-function-tensor-product]], the Cauchy kernel satisfies $\Omega(X,Y)=\sum_\lambda h_\lambda(X)m_\lambda(Y)=\sum_\lambda s_\lambda(X)s_\lambda(Y)$, and in the rational completion $\Omega(X,Y)=\sum_\lambda z_\lambda^{-1}p_\lambda(X)p_\lambda(Y)$; each sum is by diagonal bidegree ([[thm-cauchy-kernel-has-power-complete-and-schur-expansions]]).

[F7] $s_\mu s_\nu=\sum_\lambda c^\lambda_{\mu\nu}s_\lambda$ in $\Lambda$, and $s_{\lambda/\mu}=\sum_\nu c^\lambda_{\mu\nu}s_\nu$ ([[thm-littlewood-richardson-schur-product-expansion]], [[def-littlewood-richardson-tableau-and-coefficient]]).

[F8] The Schur functions form an orthonormal $\mathbb Z$-basis: $\langle s_\lambda,s_\mu\rangle_H=\delta_{\lambda\mu}$ ([[thm-schur-functions-form-an-orthonormal-integral-basis]], [[def-hall-inner-product-on-symmetric-functions]]), and $\langle p_\rho,p_\sigma\rangle_H=\delta_{\rho\sigma}z_\rho$ ([[cor-power-sums-are-orthogonal-for-the-hall-inner-product]]).

[F9] The internal product $*$ satisfies $s_\mu*s_\nu=\sum_\lambda g^\lambda_{\mu\nu}s_\lambda$ and $p_\rho*p_\sigma=\delta_{\rho\sigma}z_\rho p_\rho$ ([[def-kronecker-coefficient-and-internal-tensor-product]], [[def-internal-product-on-symmetric-functions]], [[prop-power-sums-diagonalize-the-internal-product]]).

[F10] The rank-$N$ projection $\Lambda^d\to A_N^d$, $f\mapsto f(x_1,\dots,x_N)$, sends $m_\lambda$ to the orbit sum $m_\lambda(x_1,\dots,x_N)$ for $\ell(\lambda)\le N$ (and to $0$ otherwise) and $s_\lambda$ to $s_\lambda(x_1,\dots,x_N)$; for $N\ge d$ it carries the basis $\{m_\lambda:\lambda\vdash d\}$ bijectively onto the basis $\{m_\lambda(x):\lambda\vdash d\}$ of the symmetric polynomials, hence is injective on $\Lambda^d$ ([[thm-monomial-symmetric-functions-form-the-integral-stable-basis]], [[thm-monomial-symmetric-polynomials-form-a-basis]], [[def-stable-schur-function-by-bialternants]], [[def-stable-graded-ring-of-symmetric-functions]]).

## Proof

**Proof technique:** universal polynomial identities checked on finite alphabets.

1.1 *Genericity.* Fix $d\ge0$ and $N\ge d$. The substitution $\sigma_d$ from $\mathbb Q[A_1,\dots,A_d;B_1,\dots,B_d]$ to $\mathbb Q[x_1,\dots,x_N,y_1,\dots,y_N]$ with $A_k\mapsto p_k(x)$, $B_k\mapsto p_k(y)$ is injective. Indeed, by [F4] over $\mathbb Q$ the identities $ke_k=(-1)^{k-1}p_k+\sum_{i=1}^{k-1}(-1)^{i-1}e_{k-i}p_i$ express each $e_k$ recursively in $p_1,\dots,p_k$ and each $p_k$ recursively in $e_1,\dots,e_k$ for $k\le N$, so $\mathbb Q[e_1,\dots,e_N]=\mathbb Q[p_1,\dots,p_N]$ as subrings of $\mathbb Q[x_1,\dots,x_N]$; by [F5] that ring is a free polynomial ring on $N$ generators, so $p_1,\dots,p_N$, and hence $p_1,\dots,p_d$, are algebraically independent. The same holds in the $y$-variables, and the tensor product over $\mathbb Q$ of two injective substitutions is injective. [F4, F5]

2.1 *Multiplicativity.* For all specializations $U,V$ and all $n\ge0$ one has $h_n[U+V]=\sum_{i+j=n}h_i[U]h_j[V]$; consequently $\sigma[U+V]=\sigma[U]\sigma[V]$ coefficientwise. By [F3], $h_n=\sum_{\lambda\vdash n}p_\lambda/z_\lambda$ involves only $p_1,\dots,p_n$, so both sides of the claimed identity are the value at $(p_1[U],\dots,p_n[U],p_1[V],\dots,p_n[V])$ of the universal polynomial $D_n(A;B):=\sum_{\lambda\vdash n}\prod_i(A_{\lambda_i}+B_{\lambda_i})/z_\lambda-\sum_{i+j=n}\bigl(\sum_{\mu\vdash i}p_\mu(A)/z_\mu\bigr)\bigl(\sum_{\nu\vdash j}p_\nu(B)/z_\nu\bigr)$, where $p_\mu(A)=\prod_iA_{\mu_i}$. At honest alphabets $x_1,\dots,x_n$ and $y_1,\dots,y_n$, the generating function $\sum_kh_k(\ell)t^k=\prod_\ell(1-\ell t)^{-1}$ of [F3] gives $\sum_kh_k(x\sqcup y)t^k=\prod_\ell(1-\ell t)^{-1}=\bigl(\sum_ih_i(x)t^i\bigr)\bigl(\sum_jh_j(y)t^j\bigr)$, so $D_n(p(x);p(y))=0$. By step 1.1 with $d=N=n$ the substitution is injective, so $D_n=0$, and the identity holds universally; since $\sigma=\sum_nh_n$, this is multiplicativity of $\sigma$, coefficient by coefficient finite. [F1, F3, step 1.1]

2.2 *Cauchy identities for arbitrary specializations.* For all specializations $X,Y$ and all $d\ge0$, $h_d[XY]=\sum_{\lambda\vdash d}s_\lambda[X]s_\lambda[Y]=\sum_{\rho\vdash d}z_\rho^{-1}p_\rho[X]p_\rho[Y]$, equivalently $\sigma[XY]=\sum_\lambda s_\lambda[X]s_\lambda[Y]=\sum_\lambda z_\lambda^{-1}p_\lambda[X]p_\lambda[Y]$ coefficientwise. The second equality is [F3] applied to the alphabet $XY$: $h_d[XY]=\sum_{\rho\vdash d}z_\rho^{-1}p_\rho[XY]=\sum_\rho z_\rho^{-1}p_\rho[X]p_\rho[Y]$ by [F1]. For the first, fix $d$; both $\sum_{\lambda\vdash d}s_\lambda[X]s_\lambda[Y]$ and $\sum_{\rho\vdash d}z_\rho^{-1}p_\rho[X]p_\rho[Y]$ are values of universal polynomials in $(p_k[X],p_k[Y])_{k\le d}$, by [F2]. At honest alphabets $x_1,\dots,x_N$, $y_1,\dots,y_N$ with $N\ge d$, apply the projection $\Lambda^d(X)\otimes\Lambda^d(Y)\to A_N^d(x)\otimes A_N^d(y)$ of [F10] to the degree-$(d,d)$ component of the Cauchy identity [F6]: it maps the two sides to $\sum_{\lambda\vdash d}s_\lambda(x)s_\lambda(y)$ and $\sum_{\rho\vdash d}z_\rho^{-1}p_\rho(x)p_\rho(y)$, which are therefore equal. By step 1.1 with $d=N$ the universal difference vanishes identically, proving the first equality for all $X,Y$. [F1, F2, F3, F6, F10, step 1.1]

3.1 *Coproduct (a).* Apply step 2.2 to the pair of specializations $(U+V,Z)$, where $Z$ denotes the tautological specialization into a fresh copy of $\Lambda$; the resulting chain of identities is $\sum_\lambda s_\lambda[U+V]s_\lambda[Z]=\sigma[(U+V)Z]=\sigma[UZ+VZ]=\sigma[UZ]\sigma[VZ]=\sum_{\mu,\nu}s_\mu[U]s_\nu[V]s_\mu[Z]s_\nu[Z]$, where the second equality uses $p_k[(U+V)Z]=p_k[UZ]+p_k[VZ]$ from [F1], the third is step 2.1, and the last is step 2.2 applied twice. By [F7], $s_\mu[Z]s_\nu[Z]=\sum_\lambda c^\lambda_{\mu\nu}s_\lambda[Z]$, so the right side equals $\sum_\lambda\bigl(\sum_{\mu,\nu}c^\lambda_{\mu\nu}s_\mu[U]s_\nu[V]\bigr)s_\lambda[Z]$, each coefficient being a finite sum. The $s_\lambda[Z]$ form a $\mathbb Z$-basis of $\Lambda^d(Z)$ by [F8] and [F10], so comparing coefficients of $s_\lambda[Z]$ gives $s_\lambda[U+V]=\sum_{\mu,\nu}c^\lambda_{\mu\nu}s_\mu[U]s_\nu[V]$ for every $\lambda$. [F1, F7, F8, step 2.1, step 2.2]

3.2 *Kernel identity.* For $f,g\in\Lambda^d_{\mathbb Q}$ and independent formal alphabet variables $U,V,W$, with the Hall form of [[def-hall-inner-product-on-symmetric-functions]] extended $\mathbb Q$-bilinearly to $\Lambda(U)\widehat\otimes\Lambda(V)$, one has $\langle f[U]g[V]\,|\,\sigma[UVW]\rangle_{U,V}=(f*g)[W]$. By step 2.2 applied to the pair $(UV,W)$, $\sigma[UVW]=\sum_{\rho\vdash d}z_\rho^{-1}p_\rho[U]p_\rho[V]p_\rho[W]$ in the relevant degree, and the pairing is a finite sum because only $\rho\vdash d$ matches the bidegree $(d,d)$ of $f[U]g[V]$. Writing $f=\sum_\rho a_\rho p_\rho$ and $g=\sum_\rho b_\rho p_\rho$, so that $\langle f,p_\rho\rangle_H=a_\rho z_\rho$ and $\langle g,p_\rho\rangle_H=b_\rho z_\rho$ by [F8], the left side is $\sum_{\rho\vdash d}z_\rho^{-1}p_\rho[W]a_\rho b_\rho z_\rho^2=\sum_\rho a_\rho b_\rho z_\rho p_\rho[W]$, which is $(f*g)[W]$ by the power-sum diagonalization [F9]. [F8, F9, step 2.2]

4.1 *Plethysm (b).* Keep $U,V,W$ independent formal alphabet variables. Apply step 2.2 to the pair $(UV,W)$: $\sigma[UVW]=\sum_\lambda s_\lambda[UV]s_\lambda[W]$. Pairing with $f[U]g[V]$ and using step 3.2 gives $\sum_\lambda\langle f[U]g[V],s_\lambda[UV]\rangle_{U,V}s_\lambda[W]=(f*g)[W]=\sum_\lambda\langle f*g,s_\lambda\rangle_Hs_\lambda[W]$, the last equality being the orthonormal expansion [F8]. Comparing coefficients of $s_\lambda[W]$, legitimate exactly as in step 3.1, yields $\langle f[U]g[V],s_\lambda[UV]\rangle_{U,V}=\langle f*g,s_\lambda\rangle_H$. Taking $f=s_\mu$, $g=s_\nu$ of degree $d$ gives $\langle s_\mu[U]s_\nu[V],s_\lambda[UV]\rangle_{U,V}=g^\lambda_{\mu\nu}$ by [F9] and [F8]. The products $s_\mu[U]s_\nu[V]$ with $\mu,\nu\vdash d$ are an orthonormal basis of the bidegree-$(d,d)$ piece of $\Lambda(U)\widehat\otimes\Lambda(V)$ for the tensor Hall form, because tensor products of orthonormal families are orthonormal and each bidegree piece is finite dimensional; expanding $s_\lambda[UV]$ in that basis gives $s_\lambda[UV]=\sum_{\mu,\nu}g^\lambda_{\mu\nu}s_\mu[U]s_\nu[V]$. This is a finite identity in the independent power sums of $U,V$, so applying the two specialization homomorphisms proves (b) for arbitrary $A,B$. [F8, F9, step 2.2, step 3.2]

5.1 *Finiteness, empty case and choice.* In (a), $c^\lambda_{\mu\nu}=0$ unless $\mu\subseteq\lambda$ and $|\mu|+|\nu|=|\lambda|$, so only finitely many pairs contribute, and the identity is verified coefficient of $s_\lambda[Z]$ by coefficient of $s_\lambda[Z]$. In (b), $g^\lambda_{\mu\nu}=0$ unless $|\mu|=|\nu|=|\lambda|$ by [F9], so again only finitely many pairs contribute. Both identities hold for arbitrary specializations into arbitrary commutative $\mathbb Q$-algebras, and the proofs use only finite sums, finite bases and the substitution of step 1.1; no choice principle is used. The empty case is included: $s_\varnothing=1$ and $c^\varnothing_{\varnothing,\varnothing}=g^\varnothing_{\varnothing,\varnothing}=1$, so both displays hold for $\lambda=\varnothing$. [F1, F7, F9, step 3.1, step 4.1] ∎
