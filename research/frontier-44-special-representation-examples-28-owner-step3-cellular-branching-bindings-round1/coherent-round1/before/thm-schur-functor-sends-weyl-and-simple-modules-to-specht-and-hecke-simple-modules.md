---
id: thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules
kind: theorem
title: "The Schur functor sends Weyl and simple modules to Specht and Hecke simple modules"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras, def-type-a-hecke-specht-module-and-cell-form, def-type-a-q-schur-algebra-and-weyl-modules, prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality, thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra, thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions]
justified_by: []
aliases: []
landmark: false
dependency_level: 11
proof_strategy: direct
verification:
  precheck: pass
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

Let $F$ be a field, $q\in F^{\times}$, $d\ge n$, and let $F$ denote the Schur
functor of [[def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras]].
For $\lambda\in\Lambda^{+}(d,n)$ let $W^{\lambda}$ be the Weyl module and
$L^{\lambda}$ its simple head
([[def-type-a-q-schur-algebra-and-weyl-modules]]). Then, in the source's
(dual-Specht) normalisation:

1. $F(W^{\lambda})\cong S^{\lambda}_{\mathrm{M}}$ and
   $F(L^{\lambda})\cong D^{\lambda}_{\mathrm{M}}$ as right $H$-modules (where
   $S^{\lambda}_{\mathrm{M}}$, $D^{\lambda}_{\mathrm{M}}$ are the source's cell
   module and its cell-form quotient, which is its simple head when nonzero);
2. $F(L^{\lambda})\ne0$ if and only if $\lambda$ is $e$-restricted; and
3. for every $e$-restricted $\nu\vdash n$ one has
   $[W^{\lambda}:L^{\nu}]=[S^{\lambda}_{\mathrm{M}}:D^{\nu}_{\mathrm{M}}]$.

In the Dipper-James convention of this page
([[def-type-a-hecke-specht-module-and-cell-form]]) the dictionary reads:
$F(W^{\lambda'})\cong(S^{\lambda})^{\theta}$ is the sign-automorphism pullback
of the page's Specht module, $F(L^{\lambda'})\cong(D^{\lambda})^{\theta}$ is the
sign-automorphism pullback of the page's simple module when $\lambda$ is
$e$-regular and $F(L^{\lambda'})=0$ otherwise, and
$[W^{\lambda'}:L^{\nu'}]=[S^{\lambda}:D^{\nu}]$ for $e$-regular $\nu$; the
labels are conjugated and both modules are twisted by the same $\theta$ as in
[[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]].
The theorem is the exact bridge that transports Jantzen/Schaper identities on
Weyl modules to Specht modules and hence to decomposition numbers. No choice is
used.

## Facts & Assumptions

**Given:** A field $F$, $q\in F^{\times}$, $d\ge n$, the q-Schur algebra $S(d,n)$ with Weyl modules $W^{\lambda}$ and simple heads $L^{\lambda}$ ([[def-type-a-q-schur-algebra-and-weyl-modules]]), and the Schur functor $F(X)=Xe$ with $e=\varphi_{t^\omega t^\omega}$ ([[def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras]]).

[F1] ([[def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras]]) $e$ is the projection of $M$ onto $M^{\omega}=H$, $e^2=e$, $eSe\cong H$, and $F(X)=Xe\cong X\otimes_SSe$ is exact and $R$-linear.

[F2] ([[def-type-a-q-schur-algebra-and-weyl-modules]], [[def-type-a-hecke-specht-module-and-cell-form]]) The semistandard basis $\{\varphi_{ST}\}$ of $S(d,n)$ has the triangular multiplication with respect to the dominance cellular structure and matrix-unit-like diagonal idempotents; the Weyl module $W^{\lambda}$ is its cell module with basis $\{\varphi_T\}$; the Murphy cell module $S^{\lambda}_{\mathrm M}$ of the Hecke algebra is the cell module of the Murphy cellular basis, and the signed normalization of this page is $S^{\lambda}=(S^{\lambda'}_{\mathrm M})^\theta$, $D^{\lambda}=(D^{\lambda'}_{\mathrm M})^\theta$.

[F3] ([[thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]]) For a cellular algebra over a field the nonzero cell-form quotients are a complete set of pairwise non-isomorphic absolutely irreducible modules, and for each nonzero quotient the form radical is the unique maximal submodule.

[F4] Source bridge (Mathas, Proposition 4.19 with Section 4.3, printed pp. 40-44): the corner $W^{\lambda}e$ is the free module on the Murphy basis of the Hecke cell module, the comparison of the cellular forms identifies the form on $W^{\lambda}e$ with the cell form on $S^{\lambda}_{\mathrm M}$, and the exact functor preserves composition multiplicities; combined with Theorem 3.39 this gives (1)-(3) in the source's normalisation.

[F5] ([[thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions]], [[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]) The nonzero $D^{\lambda}$ are indexed by the $e$-regular partitions, and conjugation relates the $e$-regular and $e$-restricted labelings.



## Proof

**Proof technique:** direct.

1.1 Weyl modules: multiplying by $e=\varphi_{t^{\omega}t^{\omega}}$ kills every semistandard basis element whose type is not $\omega$; for type $\omega$ the surviving basis elements $\varphi_T$ are exactly those indexed by standard $\lambda$-tableaux, and the resulting corner $W^{\lambda}e$ is free on the Murphy basis of the Hecke cell module $S^{\lambda}_{\mathrm M}$, giving $F(W^{\lambda})\cong S^{\lambda}_{\mathrm M}$. This is part (1) for Weyl modules. [given, F1, F2, F4]

2.1 Forms: the product $\varphi_{T^{\lambda},s}\varphi_{t,T^{\lambda}}$, evaluated at $m_{\lambda}$, is the Murphy product $m_{t^{\lambda}s}m_{t\,t^{\lambda}}$, and higher Schur shapes evaluate to higher Murphy shapes; the scalar coefficient therefore identifies the form on $W^{\lambda}e$ with the cell form on $S^{\lambda}_{\mathrm M}$. Since $e^*=e$, associativity makes $W^{\lambda}e$ orthogonal to $W^{\lambda}(1-e)$, so $\mathrm{rad}(W^{\lambda})e=\mathrm{rad}(W^{\lambda}e)$; the Weyl form is nonzero because the canonical semistandard projection has Gram value $1$, and by [F3] the quotient $L^{\lambda}=W^{\lambda}/\mathrm{rad}(W^{\lambda})$ is the unique simple head. Exactness of $F$ now gives $F(L^{\lambda})\cong S^{\lambda}_{\mathrm M}/\mathrm{rad}(S^{\lambda}_{\mathrm M})=D^{\lambda}_{\mathrm M}$, including the zero-form case. This completes part (1). [step 1.1, F1, F2, F3]

3.1 Nonvanishing: by the source's nonvanishing criterion recorded in [F4] the quotient $D^{\lambda}_{\mathrm M}$ is nonzero exactly for $e$-restricted $\lambda$; by step 2.1 this is exactly the nonvanishing condition for $F(L^{\lambda})$. This is part (2). [step 2.1, F4]

4.1 Multiplicities: applying the exact functor $F$ to a composition series of $W^{\lambda}$ and using steps 1.1 and 2.1 termwise identifies $[W^{\lambda}:L^{\nu}]$ with $[S^{\lambda}_{\mathrm M}:D^{\nu}_{\mathrm M}]$ for every $e$-restricted $\nu$, since $F$ preserves exact sequences and sends each composition factor $L^{\nu}$ to $D^{\nu}_{\mathrm M}$. This is part (3). [step 1.1, step 2.1, step 3.1, F1, F4]

5.1 Dictionary: replacing $\lambda$ by $\lambda'$ and using $S^{\lambda}=(S^{\lambda'}_{\mathrm M})^\theta$, $D^{\lambda}=(D^{\lambda'}_{\mathrm M})^\theta$ from [F2] turns parts (1)-(3) into the stated Dipper-James dictionary, with the conjugation of labels supplied by [F5] and the same involutive pullback applied to both sides, which preserves composition multiplicities because $\theta$ is an algebra automorphism. [step 2.1, step 3.1, step 4.1, F2, F5] ∎
