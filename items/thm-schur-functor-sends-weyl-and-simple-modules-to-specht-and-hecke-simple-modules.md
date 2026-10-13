---
id: thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules
kind: theorem
title: "The Schur functor sends Weyl and simple modules to Specht and Hecke simple modules"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras, def-type-a-q-schur-algebra-and-weyl-modules, def-type-a-hecke-specht-module-and-cell-form, lem-dj-bridge-murphy-cellular-basis-and-cell-form, thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell, thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra, thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions, def-quantum-characteristic-of-an-invertible-hecke-parameter, def-e-regular-and-e-restricted-partitions]
justified_by: []
aliases: []
landmark: false
dependency_level: 12
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Proposition 4.19 with Section 4.3 and (4.15), printed pp. 40-44: the Schur functor sends Weyl modules to Specht modules and preserves composition multiplicities; Theorem 3.39 for the nonvanishing labels"
    - title: "Richard Dipper, Gordon James and Andrew Mathas, The (Q,q)-Schur algebra, Proc. London Math. Soc. (3) 77 (1998) 327-361; arXiv:q-alg/9701024"
      url: "https://arxiv.org/abs/q-alg/9701024"
      locator: "Lemmas 5.3 and 5.5 and Definition 5.6, printed pp. 28-29: the corner idempotent, the identification of the Hecke algebra with the corner, and the weight-space decomposition used in the comparison of the cell forms"
---

## Statement

Let $k$ be a field, $q\in k^\times$, $d\ge n$, and let $\mathcal F(X)=Xe$ be the right-module Schur functor of [[def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras]]. Set $e_q=e(k,q)$ ([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]). For each $\lambda\in\Lambda^+(d,n)$ let $W^\lambda$ be the Weyl module with Schur cell form $B_\lambda$ and nonzero simple head $L^\lambda$ ([[def-type-a-q-schur-algebra-and-weyl-modules]]). Write $C_{\mathrm M}(\lambda)$ and $D_{\mathrm M}(\lambda)$ for the independent Murphy cell module and its cell-form quotient ([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]]). Then:

1. $\mathcal F(W^\lambda)\cong C_{\mathrm M}(\lambda)$ as right $H$-modules, and this isomorphism identifies $B_\lambda|_{W^\lambda e}$ exactly with the Murphy cell form. 2. $\mathcal F(L^\lambda)\cong D_{\mathrm M}(\lambda)$, including the zero quotient; it is nonzero exactly when $\lambda$ is $e_q$-restricted. 3. For every $e_q$-restricted $\nu\vdash n$, $$[W^\lambda:L^\nu]=[C_{\mathrm M}(\lambda):D_{\mathrm M}(\nu)].$$

In the page's ordinary Dipper–James normalization ([[def-type-a-hecke-specht-module-and-cell-form]], [[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]]), these identities become $$\mathcal F(W^{\lambda'})\cong(S^\lambda)^\theta,\qquad \mathcal F(L^{\lambda'})\cong(D^\lambda)^\theta.$$ The latter module is nonzero exactly for $e_q$-regular $\lambda$ and is zero otherwise. For $e_q$-regular $\nu$, $$[W^{\lambda'}:L^{\nu'}]=[S^\lambda:D^\nu].$$ The accepted ordinary polytabloid comparison identifies $S^\lambda$ with the historical DJ module $P(\lambda)$ and identifies their form radicals through an explicit unit factor. Thus the dictionary concerns the actual ordinary modules, not merely a renamed cell module. A zero Hecke cell-form quotient is not asserted to be its actual module head. No semisimplicity or choice principle is assumed, and $n=0$ is included.

## Facts & Assumptions

**Given:** The field, parameter, stable range and modules in the Statement; all modules are right modules and multiplication in $S=\operatorname{End}_H(M)$ is ordinary composition $(fg)(x)=f(g(x))$.

[F1] The actual projection $e$ onto $M^\omega=H$, for $\omega=(1^n,0^{d-n})$, satisfies $e^2=e$ and $eSe\cong H$ by left multiplication $\rho(h)(a)=ha$. The functor is $X\mapsto Xe$ ([[def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras]]).

[F2] The legitimate semistandard cellular construction is supported from $M^{\operatorname{type}(T)}$ to $M^{\operatorname{type}(S)}$ and sends its generating $m_{\operatorname{type}(T)}h$ to $m_{ST}h$; its star swaps $S,T$ and its right-cell coefficients fix the first index modulo higher shapes. The Weyl cell basis is $(w_T)_T$ ([[def-type-a-q-schur-algebra-and-weyl-modules]]). Only the actual summand projections are weight idempotents; no assertion that all diagonal cellular elements are idempotent is used.

[F3] The independent Murphy cellular datum uses $m_{st}=T_{d(s)}^*x_\lambda T_{d(t)}$, with its higher ideal $I^{\rhd\lambda}$, right cell basis $(c_t)_t$ and form $G_\lambda$ characterized by $m_{as}m_{tb}\equiv G_\lambda(c_s,c_t)m_{ab}$ modulo that ideal ([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]]).

[F4] The nonzero cell-form quotients are pairwise distinct absolutely irreducible modules; when the form is not identically zero its radical is the unique maximal submodule. These are the general cellular conclusions of [[thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]].

[F5] The genuine ordinary bridge gives $P(\alpha)\cong C_{\mathrm M}(\alpha')^\theta$ and an explicit unit-scaled form identity, hence $D_{\mathrm{DJ}}(\alpha)\cong D_{\mathrm M}(\alpha')^\theta$ including zero quotients. This is the page's signed Specht normalization, and $\theta$ is an involutive algebra automorphism whose pullback is exact ([[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]], [[def-type-a-hecke-specht-module-and-cell-form]]).

[F6] The full type-A classifier proves that $D_{\mathrm M}(\nu)$ is nonzero precisely for $e_q$-restricted $\nu$ over the original field, including the finite-$e_q$ range and the empty partition; its ordinary-label statement is transported through the signed-conjugate form bridge, not inferred from a group-only specialization ([[thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions]], [[def-e-regular-and-e-restricted-partitions]]).



## Proof

**Proof technique:** direct.

1.1 Under [F1], $\rho(h)\rho(k)=\rho(hk)$ because both act on $H$ by left multiplication, so the identification uses $H$, without an opposite algebra. The functor $X\mapsto Xe$ is exact: for a short exact sequence, a lift $x$ of an element $y\in X''e$ yields the lift $xe$, and an element in the kernel lies in $X'$ and is fixed by $e$, hence lies in $X'e$. The tensor description uses the $(S,eSe)$-bimodule $Se$, which is a direct summand as a left $S$-module. [given, F1, algebra]

2.1 The support in [F2] gives $e\varphi_{ST}e=\delta_{\operatorname{type}(S),\omega}\delta_{\operatorname{type}(T),\omega}\varphi_{ST}$ and $w_Te=\delta_{\operatorname{type}(T),\omega}w_T$. Semistandard tableaux of type $\omega$ have each label once and are exactly standard tableaux. For standard $s,t$, their defining sum $m_{st}$ has one term, so $\varphi_{st}|_H(a)=m_{st}a$ and $\rho^{-1}(\varphi_{st})=m_{st}$. Thus the higher Schur ideal cuts out exactly $I^{\rhd\lambda}$ in the corner. Read the Schur right-cell law with first index any standard tableau of type $\omega$; coefficient independence permits this choice. Restricting the multiplication by $\rho(h)$ to $H$ gives $m_{st}h$, so its coefficients are the Murphy right-cell coefficients. Consequently $\Psi_\lambda:W^\lambda e\to C_{\mathrm M}(\lambda)$, $w_t\mapsto c_t$, is an $H$-isomorphism. [F1, F2, F3, step 1.1, construct, algebra]

3.1 By the Schur cell product, $\varphi_{as}\varphi_{tb}\equiv B_\lambda(w_s,w_t)\varphi_{ab}$ modulo higher Schur shapes, with coefficient independent of the outer indices. Choose all four indices standard of shape $\lambda$ and type $\omega$. They lie in $eSe$; applying $\rho^{-1}$, or evaluating their endomorphisms at $1\in H$, gives $m_{as}m_{tb}\equiv B_\lambda(w_s,w_t)m_{ab}$ modulo $I^{\rhd\lambda}$. The unique coefficient in [F3] is $G_\lambda(c_s,c_t)$, proving $B_\lambda|_{W^\lambda e}=\Psi_\lambda^*G_\lambda$ exactly, with factor $1$. [F2, F3, step 2.1, algebra]

4.1 Since $e^*=e$, contravariance gives $B_\lambda(xe,y(1-e))=B_\lambda(x,y(1-e)e)=0$. The decomposition $W^\lambda=W^\lambda e\oplus W^\lambda(1-e)$ is therefore orthogonal. A vector in $W^\lambda e$ pairs trivially with its complement, so it is in the restricted form radical exactly when it lies in $\operatorname{rad}_{\mathrm{form}}W^\lambda$. Since the latter is an $S$-submodule, $\operatorname{rad}_{\mathrm{form}}(W^\lambda e)=(\operatorname{rad}_{\mathrm{form}}W^\lambda)e$. This holds even if the corner form is identically zero. [F2, step 3.1, algebra]

5.1 For the canonical semistandard tableau $T^\lambda$ of shape and type $\lambda$, the map $\varphi_{T^\lambda,T^\lambda}$ is the actual projection onto $M^\lambda$: it sends $m_\lambda h$ to itself and is zero on every other summand. Its square equals itself, so the Schur cell product gives $B_\lambda(w_{T^\lambda},w_{T^\lambda})=1$. Hence the Weyl form quotient is nonzero and is its simple head $L^\lambda$ by [F4]. Exactness, step 4.1 and step 3.1 give $L^\lambda e\cong W^\lambda e/(\operatorname{rad}_{\mathrm{form}}W^\lambda)e\cong C_{\mathrm M}(\lambda)/\operatorname{rad}_{\mathrm{form}}C_{\mathrm M}(\lambda)=D_{\mathrm M}(\lambda)$, including when this corner quotient is zero. [F2, F4, step 1.1, step 2.1, step 3.1, step 4.1, algebra]

6.1 By [F6] and step 5.1, $L^\lambda e\ne0$ precisely for $e_q$-restricted $\lambda$. Apply the exact functor to a finite composition series of $W^\lambda$: every factor $L^\nu$ gives $D_{\mathrm M}(\nu)$ or zero. Delete repeated terms. The remaining factors are the distinct nonzero Murphy simples in [F4], giving $[W^\lambda:L^\nu]=[C_{\mathrm M}(\lambda):D_{\mathrm M}(\nu)]$ for each $e_q$-restricted $\nu$. No multiplicity preservation is asserted for a killed simple label. [F4, F6, step 1.1, step 2.1, step 5.1, algebra]

7.1 Apply [F5] and the involution $\theta$ to obtain $C_{\mathrm M}(\lambda')\cong(S^\lambda)^\theta$ and $D_{\mathrm M}(\lambda')\cong(D^\lambda)^\theta$. Replacing the Weyl label by $\lambda'$ in steps 2.1 and 5.1 gives the ordinary dictionary, including zero quotients. Conjugation makes $\lambda'$ restricted precisely when $\lambda$ is regular. Twisting both modules by the same exact equivalence preserves composition multiplicities, so step 6.1 gives $[W^{\lambda'}:L^{\nu'}]=[S^\lambda:D^\nu]$ for regular $\nu$. The genuine unit-scaled ordinary form bridge in [F5] also identifies these with the historical DJ polytabloid modules and quotients. At $n=0$, $e=1$ and each form has value $1$, so the same proof includes the empty partition. [F4, F5, F6, step 2.1, step 5.1, step 6.1, algebra] ∎

