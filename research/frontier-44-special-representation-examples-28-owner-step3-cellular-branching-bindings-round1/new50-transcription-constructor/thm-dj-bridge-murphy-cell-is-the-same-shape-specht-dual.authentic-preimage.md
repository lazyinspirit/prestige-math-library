---
id: thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual
kind: theorem
title: "Murphy cells are the same-shape contragredient Specht duals"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-dj-bridge-row-column-permutation-modules-and-polytabloids, lem-dj-bridge-sign-automorphism-and-star-dual, lem-dj-bridge-permutation-form-invariance-and-restriction, lem-dj-bridge-murphy-cellular-basis-and-cell-form, lem-dj-bridge-integral-murphy-and-polytabloid-straightening, lem-dj-bridge-parabolic-double-coset-annihilation, lem-dj-bridge-row-permutation-module-standard-action]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Mathas, Iwahori-Hecke algebras and Schur algebras of the symmetric group, author-hosted prepublication manuscript, 79 PDF pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed pp. 18-27 (PDF pp. 27-36): the row module and its distinguished basis, the dominance ideals, the Murphy basis and the cell form; the trace pairing and the perfect cross-pairing computed below are the local reconstruction of the standard duality between the Murphy cell and the Specht dual, without any nondegeneracy of the restricted form."
    - title: "Steen Ryom-Hansen, On the denominators of Young's seminormal basis, arXiv:0904.4243v5, 28 PDF pages"
      url: "https://arxiv.org/pdf/0904.4243"
      locator: "Section 2, equations (5) and (6), PDF pp. 5-6: the standard elements x_st = T_{d(s)}^{-1}x_lambda T_{d(t)} and the cell form used in the explicit coefficient formula."
---

## Statement

Let $R$ be a commutative ring, $q\in R^\times$ and $\lambda\vdash n$, and let
$C_{\mathrm M}(\lambda)$ with its basis $\{m_t\}$, $P(\lambda)=z_\lambda H$,
the permutation form $\beta$ on $M(\lambda)$ and the DJ form on $P(\lambda)$
be as in
[[def-dj-bridge-row-column-permutation-modules-and-polytabloids]],
[[lem-dj-bridge-murphy-cellular-basis-and-cell-form]] and
[[lem-dj-bridge-integral-murphy-and-polytabloid-straightening]]. Then:

1. Setting $B_\lambda(m_s,p):=\beta(x_\lambda T_{d_\lambda(s)},p)$ for
   $s\in\operatorname{Std}(\lambda)$ and $p\in P(\lambda)$ defines an explicit
   $R$-bilinear pairing
   $B_\lambda\colon C_{\mathrm M}(\lambda)\times P(\lambda)\to R$ that is
   $H$-balanced, $B_\lambda(mh,p)=B_\lambda(m,ph^*)$, and whose adjoint
   $c\mapsto B_\lambda(c,-)$ is an isomorphism of right $H$-modules
   $C_{\mathrm M}(\lambda)\to P(\lambda)^\circ$ onto the star-contragredient
   module of [[lem-dj-bridge-sign-automorphism-and-star-dual]]. No
   nondegeneracy of the DJ form $\beta_{P(\lambda)}$ is required.

2. Equivalently, the kernel of the quotient map
   $M(\lambda)\to C_{\mathrm M}(\lambda)$ is the orthogonal complement
   $P(\lambda)^\perp=\{a\in M(\lambda):\beta(a,p)=0\text{ for all }p\in P(\lambda)\}$,
   and its preimage under the quotient is
   $M(\lambda)\cap I^{\rhd\lambda}$; the pairing matrices in the bases
   $\{m_s\}$ and $\{e_t\}$ have entries $B_\lambda(m_s,e_t)=q^{\ell(d_\lambda(s))}a_{t,d_\lambda(s)}$
   and determinant a unit of $A=\mathbb Z[v^{\pm1}]$.

3. All statements are compatible with every base change $A\to R$,
   $v\mapsto q$; the construction uses no generic semisimplicity, no
   nondegeneracy of $\beta_{P(\lambda)}$ and no choice principle.

## Facts & Assumptions

**Given:** A commutative ring $R$, $q\in R^\times$, a partition $\lambda\vdash n$,
the Hecke algebra $H=H_{R,q}(S_n)$ with its standard basis, star
anti-involution, the modules $M(\lambda)=x_\lambda H\supseteq P(\lambda)=z_\lambda H$,
the distinguished basis $\{b_r=x_\lambda T_{d_\lambda(r)}\}$ of $M(\lambda)$
and the permutation form $\beta$, the Murphy basis $\{m^\rho_{st}\}$, the
dominance ideal $I^{\rhd\lambda}$, the cell module $C_{\mathrm M}(\lambda)$
with basis $\{m_s\}$ and the Murphy form $G_\lambda$.

[F1] The trace $\tau\colon H\to R$, $\tau(T_w)=\delta_{w,1}$, satisfies
$\tau(ab)=\tau(ba)$ and $\tau(a^*b)=B_0(a,b)=\delta_{u,v}q^{\ell(u)}$ for
standard basis elements $a=T_u$, $b=T_v$; the bilinear form $\tau(a^*b)$ has
unit diagonal in the standard basis
([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]]).

[F2] $M(\lambda)$ is free on $\{b_r\}$, $\beta(b_r,b_v)=\delta_{r,v}q^{\ell(d_\lambda(r))}$,
and $\beta$ is $H$-contravariant; $P(\lambda)$ is free on
$\{e_t=z_\lambda T_{d_\lambda'(t)}\}$ and a split direct summand of $M(\lambda)$
([[lem-dj-bridge-row-permutation-module-standard-action]],
[[lem-dj-bridge-permutation-form-invariance-and-restriction]],
[[lem-dj-bridge-integral-murphy-and-polytabloid-straightening]]).

[F3] $C_{\mathrm M}(\lambda)=M(\lambda)/(M(\lambda)\cap I^{\rhd\lambda})$,
$K:=M(\lambda)\cap I^{\rhd\lambda}$ is the kernel of the quotient,
$I^{\rhd\lambda}$ is spanned by the Murphy elements $m^\nu_{uv}$ with
$\nu\rhd\lambda$, and $\{m_s\}$ is an $R$-basis of the cell module
([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]]).

[F4] $x_\kappa Hy_\rho=0$ whenever
$\sum_{i\le k}\kappa_i>\sum_{i\le k}\rho'_i$ for some $k\ge1$
([[lem-dj-bridge-parabolic-double-coset-annihilation]]).

[F5] The star-contragredient $N^\circ=\operatorname{Hom}_R(N,R)$ of a right
$H$-module is a right $H$-module via $(fh)(m)=f(mh^*)$; for finite free $N$ it
is finite free of the same rank and $(-)^\circ$ commutes with base change
([[lem-dj-bridge-sign-automorphism-and-star-dual]]).



## Proof

**Proof technique:** direct.

1.1 **The trace formula for the row module.** For $d,e\in D_\lambda$ one has $\tau(b_d^*b_e)=\delta_{d,e}q^{\ell(d)}$: by [F1] this equals $B_0(x_\lambda T_d,x_\lambda T_e)$, and $x_\lambda T_d$ has standard-basis support the coset $S_\lambda d$ with coefficient $1$ on each element, so the supports for $d\ne e$ are disjoint and the diagonal value is $q^{\ell(d)}$ times the number of identity contributions, namely one. Extending bilinearly, $\tau(a^*b)=\beta(a,b)$ for all $a,b$ in $M(\lambda)$ with $\beta$ the permutation form: comparing the two $R$-bilinear forms on the basis $\{b_r\}$ gives equality because both are diagonal with the same entries $\delta_{r,v}q^{\ell(d_\lambda(r))}$. [F1, F2, algebra]

2.1 **The adjoint pairing and its well-definedness.** For $s\in\operatorname{Std}(\lambda)$ and $p\in P(\lambda)$ put $B_\lambda(m_s,p):=\beta(x_\lambda T_{d_\lambda(s)},p)$. This is well defined on the cell: if $a\in K$ then $a^*p=0$, because $a$ is a combination of Murphy elements $m^\nu_{uv}=T_{d_\nu(u)}^*x_\nu T_{d_\nu(v)}$ with $\nu\rhd\lambda$ by [F3], and $m_{uv}^\nu{}^*p\in T_{d_\nu(u)}x_\nu HT_{d_\nu(v)}z_\lambda H\subseteq x_\nu Hy_{\lambda'}H$, which vanishes by [F4] since $\nu\rhd\lambda=(\lambda')'$ gives $\sum_{i\le k}\nu_i>\sum_{i\le k}(\lambda')'_i$ for some $k$; hence by step 1.1 $\beta(a,p)=\tau(a^*p)=0$. Therefore $B_\lambda$ descends to a well-defined $R$-bilinear pairing on $C_{\mathrm M}(\lambda)\times P(\lambda)$, and it is $H$-balanced: $B_\lambda(mh,p)=\beta(xh,p)=\beta(x,ph^*)=B_\lambda(m,ph^*)$ by the contravariance [F2]. [step 1.1, F2, F3, F4, algebra]

3.1 **The adjoint is an isomorphism.** The adjoint map $\Phi\colon C_{\mathrm M}(\lambda)\to P(\lambda)^\circ$, $c\mapsto B_\lambda(c,-)$, is a well-defined $H$-module homomorphism by the balancing of step 2.1 and [F5]. It is surjective: the map $M(\lambda)\to P(\lambda)^\circ$, $a\mapsto\beta(a,-)$, is the composition of the inverse of the isomorphism $M(\lambda)\to M(\lambda)^\circ$, $a\mapsto\beta(a,-)$ (its matrix in the basis $\{b_r\}$ and its dual basis is diagonal with the unit entries $q^{\ell(d_\lambda(r))}$), with the restriction $M(\lambda)^\circ\to P(\lambda)^\circ$, which is surjective because $P(\lambda)$ is a split submodule of $M(\lambda)$ by [F2]; since $K$ is killed by step 2.1, this surjection factors through the quotient $M(\lambda)\to C_{\mathrm M}(\lambda)$, so $\Phi$ is surjective. Both $C_{\mathrm M}(\lambda)$ and $P(\lambda)^\circ$ are free of rank $f^\lambda$ by [F3], [F2] and [F5]. A surjection between free modules of the same finite rank has a right inverse: choose preimages of the finitely many basis vectors, whose coordinate columns form a right inverse of the square matrix of $\Phi$; hence $\det\Phi$ is a unit of $R$ and $\Phi$ is an isomorphism. This gives clause 1. [step 2.1, F2, F3, F5, algebra]

4.1 **Kernel, explicit matrices and base change.** Since $\Phi$ is an isomorphism by step 3.1 and $M(\lambda)\to P(\lambda)^\circ$ has kernel exactly $P(\lambda)^\perp$ by construction, the kernel of the quotient $M(\lambda)\to C_{\mathrm M}(\lambda)$ is $P(\lambda)^\perp$; by [F3] that kernel is $M(\lambda)\cap I^{\rhd\lambda}$, which is the second assertion of clause 2. Writing $e_t=\sum_r a_{r,t}b_r$ with the coefficients of [[lem-dj-bridge-integral-murphy-and-polytabloid-straightening]], the entries of the pairing matrix are $B_\lambda(m_s,e_t)=\beta(b_{d_\lambda(s)},e_t)=q^{\ell(d_\lambda(s))}a_{d_\lambda(s),t}$ by [F2]; these are finite Laurent-polynomial expressions, and the invertibility of the pairing matrix is a consequence of the isomorphism of step 3.1, so its determinant is a unit of $A=\mathbb Z[v^{\pm1}]$ and remains a unit under every base change. All constructions are given by formulas with coefficients in $A$ and specialise termwise, so clause 3 holds. No generic semisimplicity and no nondegeneracy of the $\beta_{P(\lambda)}$ were used, and no choice principle is used. [step 3.1, F2, F3, algebra] ∎
