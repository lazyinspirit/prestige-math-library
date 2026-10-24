---
id: prop-additive-functors-preserve-chosen-homological-gaussian-cancellations
kind: proposition
title: Additive functors preserve chosen Gaussian cancellations
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology, prop-homological-gaussian-elimination-gives-a-strong-deformation-retract, thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex, def-invertible-differential-block-and-schur-complement-reduction, def-complex-homotopy-and-contractibility-in-an-additive-category, def-additive-functor, thm-an-additive-functor-preserves-finite-biproducts, prop-an-additive-functor-preserves-zero-morphisms, thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David Clark, Scott Morrison and Kevin Walker, Fixing the Functoriality of Khovanov Homology, Appendix A.1, printed pp. 1562-1563"
      url: "https://msp.org/gt/2009/13-3/gt-v13-n3-p08-p.pdf"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, ch. 1, printed pp. 2-5 and 17-18"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $F:\mathcal A\to\mathcal B$ be an additive functor between additive
categories, let $X^\bullet$ be a cochain complex in $\mathcal A$ with a pivot
decomposition at degree $n$, Schur complement $\bar d=a-b\varphi^{-1}c$,
candidate reduction $\bar X^\bullet$ and two-term complex $K$ as in
[[def-invertible-differential-block-and-schur-complement-reduction]] and
[[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]],
and let $(p,\imath,h)$ be the strong deformation retract data of
[[prop-homological-gaussian-elimination-gives-a-strong-deformation-retract]].

1. **Complexes and pivots.** $F(X^\bullet)$, with differentials $F(d^n)$, is a
   cochain complex in $\mathcal B$; the pivot $F(\varphi)$ is invertible with
   inverse $F(\varphi^{-1})$; and with respect to the biproduct decompositions
   $F(X^n)=F(A)\oplus F(U)$, $F(X^{n+1})=F(B)\oplus F(V)$ whose structure maps
   are the $F$-images of those of $X^\bullet$, the differential $F(d^n)$ has the
   entrywise image matrix $\begin{pmatrix}F(a)&F(b)\\ F(c)&F(\varphi)\end{pmatrix}$.
2. **The corresponding cancellation.** The reduction of $F(X^\bullet)$ at the
   pivot $F(\varphi)$ is $F(\bar X^\bullet)$: its objects and neighbouring
   arrows are the $F$-images of those of $\bar X^\bullet$, and its differential
   in degree $n$ is the Schur complement
   $F(a)-F(b)F(\varphi)^{-1}F(c)=F(\bar d)$.
3. **Retract data.** The images $F(p),F(\imath),F(h)$ satisfy
   $F(p)F(\imath)=1$, $1-F(\imath)F(p)=F(d)F(h)+F(h)F(d)$, $F(p)F(h)=0$,
   $F(h)F(\imath)=0$ and $F(h)^2=0$, so they are strong deformation retract data
   of $F(X^\bullet)$ onto $F(\bar X^\bullet)$. Moreover $F(K)$ is the two-term
   complex $F(U)\xrightarrow{F(\varphi)}F(V)$ with vanishing neighbouring terms,
   contractible via $F(\varphi^{-1})$, and $F(T),F(T^{-1})$ remain mutually
   inverse cochain isomorphisms between $F(X^\bullet)$ and $F(\bar X^\bullet\oplus K)$.
4. **Scope.** Clauses 1 to 3 use only additivity: no exactness of $F$ is assumed
   or needed. If $\mathcal B$ is abelian, the image retract maps induce inverse
   isomorphisms on the homology of $F(X^\bullet)$ and $F(\bar X^\bullet)$,
   by [[cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology]].
   No comparison of $F(H_n(X))$ with $H_n(F(X))$ is asserted; these
   expressions both make sense when $\mathcal A$ and $\mathcal B$ are abelian,
   but comparing them is a separate question about commuting $F$ with homology.

## Facts & Assumptions

**Given:** An additive functor $F:\mathcal A\to\mathcal B$ between additive categories, a cochain complex $X^\bullet$ in $\mathcal A$ with the pivot decomposition at degree $n$, its reduction $\bar X^\bullet$, the two-term complex $K$, the chain isomorphism $T$, and the explicit cochain maps $p,\imath$ and homotopy $h$ of the strong deformation retract.

[L1] $p,\imath$ are cochain maps and $h$ has degree $-1$, with $p\imath=1_{\bar X^\bullet}$, $1_{X^\bullet}-\imath p=dh+hd$, $ph=0$, $h\imath=0$ and $h^2=0$ ([[prop-homological-gaussian-elimination-gives-a-strong-deformation-retract]]).

[L2] The decomposition $X^n=A\oplus U$, $X^{n+1}=B\oplus V$ has $\varphi:U\to V$ invertible, $d^n=\begin{pmatrix}a&b\\ c&\varphi\end{pmatrix}$, $d^{n-1}=(p;q)$, $d^{n+1}=(r\ s)$, and the candidate reduction replaces degrees $n,n+1$ by $A,B$ with $d^n$ replaced by $\bar d=a-b\varphi^{-1}c$ and neighbouring arrows $p$ and $r$ ([[def-invertible-differential-block-and-schur-complement-reduction]]).

[L3] $T:X^\bullet\to\bar X^\bullet\oplus K$ is an isomorphism of cochain complexes with inverse $T^{-1}$, where $K$ has $K^n=U$, $K^{n+1}=V$, vanishing terms elsewhere and differential $\varphi$, and $K$ is contractible with contracting homotopy $\varphi^{-1}$ in degree $n+1$ ([[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]]).

[L4] An additive functor preserves composition and identities, and its induced maps on hom-groups are homomorphisms: $F(f+g)=F(f)+F(g)$ and hence $F(-f)=-F(f)$ ([[def-additive-functor]]).

[L5] An additive functor preserves finite biproducts, so the $F$-images of the injections and projections of a finite biproduct exhibit $F(A\oplus U)$ as a biproduct $F(A)\oplus F(U)$ with the same identity-sum relations; it also preserves zero morphisms; and composition of morphisms between finite biproducts is matrix multiplication ([[thm-an-additive-functor-preserves-finite-biproducts]], [[prop-an-additive-functor-preserves-zero-morphisms]], [[thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication]], [[def-complex-homotopy-and-contractibility-in-an-additive-category]]).

[L6] In an abelian category, the maps of a Gaussian strong deformation retract induce mutually inverse maps on every homology object of the reindexed chain complexes ([[cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology]]).

## Proof

**Proof technique:** direct.

1.1 Complex and pivot. Since $d^{n+1}d^n=0$ in $X^\bullet$, [L4] gives $F(d^{n+1})F(d^n)=F(d^{n+1}d^n)=F(0_{X^n,X^{n+2}})$, which is the zero morphism by [L5]; thus $F(X^\bullet)$ is a cochain complex. Likewise $F(\varphi)F(\varphi^{-1})=F(\varphi\varphi^{-1})=F(1_V)=1_{F(V)}$ and $F(\varphi^{-1})F(\varphi)=1_{F(U)}$, so $F(\varphi)$ is invertible with the displayed inverse. [L4, L5, algebra]

1.2 Image matrices. By [L5] the $F$-images of the injections and projections of $X^n=A\oplus U$ and $X^{n+1}=B\oplus V$ exhibit $F(X^n)$ as $F(A)\oplus F(U)$ and $F(X^{n+1})$ as $F(B)\oplus F(V)$. Writing $d^n=i_Bap_A+i_Bbp_U+i_Vcp_A+i_V\varphi p_U$ with the biproduct structure maps [L2], additivity of $F$ on hom-groups, preservation of composition and the biproduct relations give $F(d^n)=F(i_B)F(a)F(p_A)+F(i_B)F(b)F(p_U)+F(i_V)F(c)F(p_A)+F(i_V)F(\varphi)F(p_U)$, whose matrix with respect to the image decompositions is $\begin{pmatrix}F(a)&F(b)\\ F(c)&F(\varphi)\end{pmatrix}$ by the matrix convention of [L5]. The same computation applies to $d^{n-1}$ and $d^{n+1}$, giving the image neighbouring components $F(p),F(q),F(r),F(s)$. [L4, L5, algebra]

1.3 Retract identities are preserved. Applying [L4] to the identities of [L1] and using [L5] for the zero morphisms: $F(p)F(\imath)=F(p\imath)=F(1_{\bar X^\bullet})=1_{F(\bar X^\bullet)}$; $F(d)F(h)+F(h)F(d)=F(dh+hd)=F(1_{X^\bullet}-\imath p)=1_{F(X^\bullet)}-F(\imath)F(p)$; $F(p)F(h)=F(ph)=F(0)=0$; $F(h)F(\imath)=F(h\imath)=0$; and $F(h)^2=F(h^2)=F(0)=0$. Since $p,\imath$ are cochain maps, $F(p),F(\imath)$ are cochain maps by [L4]. [L1, L4, L5, algebra]

2.1 The contractible summand and the isomorphism. By [L3] and [L4], $F(T)F(T^{-1})=F(TT^{-1})=F(1)=1$ and $F(T^{-1})F(T)=1$, so $F(T)$ is an isomorphism of complexes with inverse $F(T^{-1})$; and $F(K)$ has objects $F(U),F(V)$ in degrees $n,n+1$, vanishing terms elsewhere with zero differentials, and differential $F(\varphi)$, with $F(\varphi)F(\varphi^{-1})=1_{F(V)}$ and $F(\varphi^{-1})F(\varphi)=1_{F(U)}$ from step 1.1, so $F(\varphi^{-1})$ is a contracting homotopy for $F(K)$. [L3, L4, L5, step 1.1, algebra]

2.2 The reduction of $F(X^\bullet)$ is $F(\bar X^\bullet)$. By step 1.2 the reduction problem for $F(X^\bullet)$ in degrees $n,n+1$ is the image matrix $\begin{pmatrix}F(a)&F(b)\\ F(c)&F(\varphi)\end{pmatrix}$ with pivot $F(\varphi)$, and by step 1.1 that pivot is invertible; [L4] gives $F(a)-F(b)F(\varphi^{-1})F(c)=F(a-b\varphi^{-1}c)=F(\bar d)$, and applying $F$ to the remaining data of [L2] gives objects $F(A),F(B)$ in degrees $n,n+1$, neighbouring arrows $F(p),F(r)$ and the unchanged images of the outside objects and arrows. Hence the candidate reduction of $F(X^\bullet)$ at this pivot is exactly $F(\bar X^\bullet)$, its differential in degree $n$ being the image $F(\bar d)$ of the Schur complement. [L2, L4, step 1.1, step 1.2, algebra]

3.1 Conclusion. Step 1.1 shows that $F(X^\bullet)$ is a complex with invertible pivot $F(\varphi)$, step 1.2 computes the image matrices, and step 2.2 identifies the reduction of $F(X^\bullet)$ with $F(\bar X^\bullet)$, which is clause 2 and the matrix assertion of clause 1. Step 1.3 verifies all five strong deformation retract identities for $F(p),F(\imath),F(h)$, and step 2.1 shows that $F(K)$ is contractible via $F(\varphi^{-1})$ and that $F(T)$ is an isomorphism, which is clause 3. Only additivity, preservation of finite biproducts and preservation of zero morphisms are used, so no exactness hypothesis enters; if $\mathcal B$ is abelian, [L6] applied to the image cancellation identified in step 2.2 gives inverse homology maps. This compares the homology of the two image complexes, not the image under $F$ of a homology object in $\mathcal A$. ∎ [L6, step 2.1, step 2.2, step 1.3, step 1.2, step 1.1, algebra]
