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
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Andrew Mathas, Iwahori-Hecke algebras and Schur algebras of the symmetric group, author-hosted prepublication manuscript, 79 PDF pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed pp. 18-27 (PDF pp. 24-33): the row module and its distinguished basis, the dominance ideals, the Murphy basis and the cell form; the trace pairing and the perfect cross-pairing computed below are the local reconstruction of the standard duality between the Murphy cell and the Specht dual, without any nondegeneracy of the restricted form."
    - title: "Steen Ryom-Hansen, On the denominators of Young's seminormal basis, arXiv:0904.4243v5, 28 PDF pages"
      url: "https://arxiv.org/pdf/0904.4243"
      locator: "Section 2, equations (5) and (6), PDF pp. 5-6: the Murphy tableau construction and its cell form; the exact star and form normalizations used here are the standalone local definitions, not a replacement by inverse-Hecke-generator conventions."
---

## Statement

Let $R$ be a commutative ring, $q\in R^\times$ and $\lambda\vdash n$, and let $C_{\mathrm M}(\lambda)$ with its basis $\{m_t\}$, $P(\lambda)=z_\lambda H$, the permutation form $\beta$ on $M(\lambda)$ and the DJ form on $P(\lambda)$ be as in [[def-dj-bridge-row-column-permutation-modules-and-polytabloids]], [[lem-dj-bridge-murphy-cellular-basis-and-cell-form]] and [[lem-dj-bridge-integral-murphy-and-polytabloid-straightening]]. Then:

1. Setting $B_\lambda(m_s,p):=\beta(x_\lambda T_{d_\lambda(s)},p)$ for $s\in\operatorname{Std}(\lambda)$ and $p\in P(\lambda)$ defines an explicit $R$-bilinear pairing $B_\lambda\colon C_{\mathrm M}(\lambda)\times P(\lambda)\to R$ that is $H$-balanced, $B_\lambda(mh,p)=B_\lambda(m,ph^*)$, and whose adjoint $c\mapsto B_\lambda(c,-)$ is an isomorphism of right $H$-modules $C_{\mathrm M}(\lambda)\to P(\lambda)^\circ$ onto the star-contragredient module of [[lem-dj-bridge-sign-automorphism-and-star-dual]]. No nondegeneracy of the DJ form $\beta_{P(\lambda)}$ is required.

2. Equivalently, the kernel of the quotient map $M(\lambda)\to C_{\mathrm M}(\lambda)$ is the orthogonal complement $P(\lambda)^\perp=\{a\in M(\lambda):\beta(a,p)=0\text{ for all }p\in P(\lambda)\}$, namely $M(\lambda)\cap I^{\rhd\lambda}$; the pairing matrices in the bases $\{m_s\}$ and $\{e_t\}$ have entries $B_\lambda(m_s,e_t)=q^{\ell(d_\lambda(s))}a_{d_\lambda(s),t}$ with $e_t=\sum_d a_{d,t}b_d$, and determinant a unit of $A=\mathbb Z[v^{\pm1}]$. Their inverses are finite tableau formulas given by the adjugate divided by this unit.

3. All statements are compatible with every base change $A\to R$, $v\mapsto q$; the construction uses no generic semisimplicity, no nondegeneracy of $\beta_{P(\lambda)}$ and no choice principle.

## Facts & Assumptions

**Given:** A commutative ring $R$, $q\in R^\times$, a partition $\lambda\vdash n$, the Hecke algebra $H=H_{R,q}(S_n)$ with its standard basis, star anti-involution, the modules $M(\lambda)=x_\lambda H\supseteq P(\lambda)=z_\lambda H$, the distinguished basis $\{b_r=x_\lambda T_{d_\lambda(r)}\}$ of $M(\lambda)$ and the permutation form $\beta$, the Murphy basis $\{m^\rho_{st}\}$, the dominance ideal $I^{\rhd\lambda}$, the cell module $C_{\mathrm M}(\lambda)$ with basis $\{m_s\}$ and the Murphy form $G_\lambda$.

[F1] The trace $\tau\colon H\to R$, $\tau(T_w)=\delta_{w,1}$, satisfies $\tau(ab)=\tau(ba)$ and $\tau(a^*b)=B_0(a,b)=\delta_{u,v}q^{\ell(u)}$ for standard basis elements $a=T_u$, $b=T_v$; the bilinear form $\tau(a^*b)$ has unit diagonal in the standard basis ([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]], Proof step 1.3).

[F2] $M(\lambda)$ is free on $\{b_r\}$, $\beta(b_r,b_v)=\delta_{r,v}q^{\ell(d_\lambda(r))}$, and $\beta$ is $H$-contravariant; $P(\lambda)$ is free on $\{e_t=z_\lambda T_{d_\lambda'(t)}\}$ and a split direct summand of $M(\lambda)$ ([[lem-dj-bridge-row-permutation-module-standard-action]], [[lem-dj-bridge-permutation-form-invariance-and-restriction]], [[lem-dj-bridge-integral-murphy-and-polytabloid-straightening]]).

[F3] $C_{\mathrm M}(\lambda)=M(\lambda)/(M(\lambda)\cap I^{\rhd\lambda})$, $K:=M(\lambda)\cap I^{\rhd\lambda}$ is the kernel of the quotient, $I^{\rhd\lambda}$ is spanned by the Murphy elements $m^\nu_{uv}$ with $\nu\rhd\lambda$, and $\{m_s\}$ is an $R$-basis of the cell module ([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]]).

[F4] $x_\kappa Hy_\rho=0$ whenever $\sum_{i\le k}\kappa_i>\sum_{i\le k}\rho'_i$ for some $k\ge1$ ([[lem-dj-bridge-parabolic-double-coset-annihilation]]).

[F5] The star-contragredient $N^\circ=\operatorname{Hom}_R(N,R)$ of a right $H$-module is a right $H$-module via $(fh)(m)=f(mh^*)$; for finite free $N$ it is finite free of the same rank and $(-)^\circ$ commutes with base change ([[lem-dj-bridge-sign-automorphism-and-star-dual]]).





## Proof

**Proof technique:** direct.

1.1 **The correctly scaled universal trace formula.** Work first over $A=\mathbb Z[v^{\pm1}]$, using $q=v$ as the formal parameter. For $d,e\in D_\lambda$, length additivity gives $b_d=\sum_{u\in S_\lambda}T_{ud}$, and [F1] gives $\tau(b_d^*b_e)=0$ when $d\ne e$, while $\tau(b_d^*b_d)=\sum_{u\in S_\lambda}q^{\ell(ud)}=q^{\ell(d)}P_\lambda(q)$, where $P_\lambda(q):=\sum_{u\in S_\lambda}q^{\ell(u)}$. By bilinearity, $$\tau(a^*b)=P_\lambda(q)\,\beta(a,b)\qquad(a,b\in M_A(\lambda)).$$ The factor $P_\lambda$ is essential; it is not generally a unit and can vanish after specialization. It is nonzero in the domain $A$, since its constant coefficient is $1$. [F1, F2, algebra]

2.1 **Orthogonality before specialization.** Put $K_A=M_A(\lambda)\cap I_A^{\rhd\lambda}$ and $p=z_\lambda h$. For a higher Murphy element $m^\nu_{uv}=T_{d_\nu(u)}^*x_\nu T_{d_\nu(v)}$ with $\nu\rhd\lambda$, its product with $p$ after star is $$ (m^\nu_{uv})^*p=T_{d_\nu(v)}^*x_\nu\bigl(T_{d_\nu(u)}x_\lambda T_{w_\lambda}\bigr)y_{\lambda'}h=0,$$ because $x_\nu Hy_{\lambda'}=0$ by [F4]. The outer factor multiplies a zero vector; no factor is silently discarded. Expand $k\in K_A$ in the higher Murphy basis using [F3]. Then $k^*p=0$ and step 1.1 gives $P_\lambda(q)\beta(k,p)=0$. Cancel this nonzero polynomial only in the universal domain $A$, proving $\beta(K_A,P_A)=0$. The quotient and its kernel in [F3] are base-change compatible: the quotient is free on the supplied standard basis, its kernel is the split kernel of that quotient, and the independent Murphy construction identifies its specialization with $M_R(\lambda)\cap I_R^{\rhd\lambda}$. Thus tensoring the zero pairing identity gives $\beta(K_R,P_R)=0$ for every $R$ and unit $q$. No cancellation is performed in $R$, including when $P_\lambda(q)=0$. [step 1.1, F2, F3, F4, algebra]

3.1 **The descended pairing is perfect.** Define $B_\lambda(a+K_R,p)=\beta(a,p)$; step 2.1 proves this is well defined. Contravariance gives $B_\lambda(ch,p)=B_\lambda(c,ph^*)$, so its adjoint $C_{\mathrm M}(\lambda)\to P(\lambda)^\circ$ is an $H$-homomorphism by [F5]. The map $M(\lambda)\to M(\lambda)^\circ$, $a\mapsto\beta(a,-)$, is an isomorphism with unit diagonal $q^{\ell(d)}$. Compose this map itself with restriction $M(\lambda)^\circ\to P(\lambda)^\circ$, which is onto because $P(\lambda)$ is split in $M(\lambda)$. The resulting surjection kills $K_R$ and therefore factors onto $C_{\mathrm M}(\lambda)\to P(\lambda)^\circ$. Both are free of rank $f^\lambda$. Choosing preimages of their finitely many basis vectors gives a right inverse of its square matrix; the determinant is a unit, so the adjoint is an isomorphism. This proves clause 1 without any nondegeneracy of the DJ self-form. [step 2.1, F2, F3, F5, algebra]

4.1 **Kernel, finite formulas and every base change.** The kernel of $M(\lambda)\to P(\lambda)^\circ$ is $P(\lambda)^\perp$ by its definition. Since the factored adjoint is an isomorphism, this is exactly $K_R=M(\lambda)\cap I^{\rhd\lambda}$. Write $e_t=\sum_d a_{d,t}b_d$ with the finite Laurent-polynomial coefficients of the integral polytabloid basis. Then $B_\lambda(m_s,e_t)=q^{\ell(d_\lambda(s))}a_{d_\lambda(s),t}$. Compute these coefficients by the finite signed-symmetrizer expansion and standard-basis multiplication; the inverse pairing matrix is $\det(B_\lambda)^{-1}\operatorname{adj}(B_\lambda)$. Over $A$ its determinant is a Laurent unit by step 3.1, so both the pairing and its inverse specialize to every $R$, retaining perfectness and the kernel identity. Empty shapes have the rank-one pairing $1$. No generic semisimplicity, nondegeneracy of the DJ self-form, division by a specialized Poincaré polynomial or choice principle is used. [step 3.1, F1, F2, F3, F5, algebra] ∎

