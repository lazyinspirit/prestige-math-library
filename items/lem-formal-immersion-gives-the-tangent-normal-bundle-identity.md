---
id: lem-formal-immersion-gives-the-tangent-normal-bundle-identity
kind: lemma
title: "Formal immersion gives the tangent normal-bundle identity"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-normal-bundle-of-a-formal-immersion, def-whitney-sum-of-vector-bundles, cor-every-vector-subbundle-has-a-smooth-complement, thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle, def-pullback-vector-bundle-as-a-fibre-product, def-countable-choice, thm-the-pullback-fibre-product-is-a-smooth-vector-bundle, prop-bundle-maps-over-f-are-sections-of-the-pulled-back-hom-bundle, def-quotient-vector-bundle-by-a-subbundle, prop-orthogonal-complements-of-subbundles-are-smooth-subbundles, thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric, def-normal-and-conormal-bundles-of-an-embedded-submanifold, prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 7 §2 “Obstructions to the existence of embeddings and immersions, the Hirsch–Smale theorem”, printed pp. 226–232 (Theorem 7.5, Corollary 7.6)"
      url: http://math.stanford.edu/~ralph/bookR4.pdf
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery, Ch. 7 §7.4 “The Smale–Hirsch classification of immersions”, printed pp. 142–146 (Theorem 7.35, Proposition 7.39)"
      url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
dependency_level: 2
---

## Statement

Assume $\mathrm{AC}_\omega$. For every formal immersion $(f,F)$ from $M^m$ to $N^n$ the image $F(TM)$ is a smooth subbundle of the pullback $f^*TN$, and the quotient normal bundle $\nu_F:=f^*TN/F(TM)$ has rank $n-m$ when $m\le n$; if $M=\varnothing$ and $m>n$, use the empty rank-zero bundle as in [[def-normal-bundle-of-a-formal-immersion]]. The quotient map exhibits the short exact sequence of smooth vector bundles over $M$ $$0\longrightarrow TM\xrightarrow{\ F\ }f^*TN\longrightarrow\nu_F\longrightarrow0,$$ which splits over $M$: a smooth complement $C\subseteq f^*TN$ of $F(TM)$ restricts to an isomorphism $C\to\nu_F$ and gives a smooth bundle isomorphism $TM\oplus\nu_F\to f^*TN$, $(v,q(c))\mapsto F(v)+c$. The splitting is not canonical in general; if a bundle metric on $f^*TN$ is chosen, the orthogonal complement $F(TM)^{\perp}$ is a canonical complement for that metric, the orthogonal splitting $TM\oplus F(TM)^{\perp}\cong f^*TN$ restricts to $F$ on the tangent summand, and different metrics give isomorphic splittings. In particular, for a genuine immersion the isomorphism identifies the normal bundle of the immersion with the quotient $f^*TN/df(TM)$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and smooth manifolds $M^m,N^n$ and a formal immersion $(f,F)$ with $F:TM\to TN$ a smooth bundle map over $f$ that is injective on every fibre.

[F1] The pullback $f^*TN$ is a smooth vector bundle over $M$, and a smooth bundle map over $f$ is the same as a smooth section of $\operatorname{Hom}(TM,f^*TN)$ ([[thm-the-pullback-fibre-product-is-a-smooth-vector-bundle]], [[prop-bundle-maps-over-f-are-sections-of-the-pulled-back-hom-bundle]], [[def-pullback-vector-bundle-as-a-fibre-product]]).

[L1] The quotient of a smooth vector bundle by a smooth subbundle is a smooth vector bundle, with the quotient bundle map over the identity ([[thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle]], [[def-quotient-vector-bundle-by-a-subbundle]]).

[L2] Under $\mathrm{AC}_\omega$, every smooth subbundle of a smooth vector bundle has a smooth complement, and a smooth bundle metric produces the orthogonal complement as a smooth subbundle ([[cor-every-vector-subbundle-has-a-smooth-complement]], [[prop-orthogonal-complements-of-subbundles-are-smooth-subbundles]], [[thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]]).

[L3] The normal bundle of an embedded submanifold is the quotient of the ambient tangent bundle restricted to it by the tangent bundle, and an ambient Riemannian metric identifies it with the orthogonal normal bundle ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]], [[prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]]).

## Proof

**Proof technique:** direct.

1.1 If $M=\varnothing$, all total spaces and maps in the claimed sequence and splitting are empty, so exactness and the isomorphisms hold vacuously, with the stated normal-rank convention. Hence assume $M$ is nonempty, so $m\le n$, and fix $x_0\in M$. In a chart $U$ of $M$ around $x_0$, a trivialization of $TM|_U$ and a trivialization of $TN$ over a chart containing $f(U)$, the section of [F1] is given by a smooth matrix function $A$ of rank $m$ at every point. Reordering coordinates we may suppose an $m\times m$ block $B(x)$ of $A(x)$ is invertible near $x_0$; then the image of $A(x)$ equals the image of the block matrix $\binom{I_m}{C(x)}$ with $C=A_2B^{-1}$ smooth, so the image is a smooth subbundle over $U$ with the columns of $\binom{I}{C}$ as a smooth frame. [F1, given, construct]

2.1 The local frames of step 1.1 agree on overlaps because they span the same subspace at every point, so they glue to a smooth subbundle $F(TM)\subseteq f^*TN$ of rank $m$. The quotient $\nu_F:=f^*TN/F(TM)$ is a smooth vector bundle by [L1], and the quotient map is a smooth bundle map over $\operatorname{id}_M$; composing the fibrewise isomorphisms $F_x:T_xM\to F(TM)_x$ with the inclusion gives a smooth bundle map $TM\to f^*TN$ with image $F(TM)$ and kernel $0$, so $0\to TM\xrightarrow{F}f^*TN\to\nu_F\to0$ is a short exact sequence of smooth vector bundles; ranks give $\operatorname{rank}\nu_F=n-m$. [F1, L1, step 1.1]

3.1 Let $C\subseteq f^*TN$ be a smooth complement of $F(TM)$, which exists by [L2]. Fibrewise, $F_x\oplus\operatorname{id}:T_xM\oplus C_x\to f^*TN_x$ is injective between spaces of dimension $n$, hence an isomorphism; it is smooth as a bundle map over $\operatorname{id}_M$, so it is a smooth bundle isomorphism $TM\oplus C\to f^*TN$ restricting to $F$ on $TM$. The quotient map restricts to an isomorphism $C\to\nu_F$ because $C\oplus F(TM)=f^*TN$ and $C\cap F(TM)=0$; composing the inverse of this isomorphism with the isomorphism above gives $TM\oplus\nu_F\cong f^*TN$, $(v,q(c))\mapsto F(v)+c$. The construction depends on the choice of $C$; the formula displays that dependence, and no complement is distinguished without further data, so the splitting is not canonical. [F1, L2, step 2.1, algebra]

4.1 Choose a smooth bundle metric on $f^*TN$, which exists by [L2]. Its orthogonal complement $F(TM)^{\perp}$ is a smooth subbundle, is a complement of $F(TM)$, and is canonically determined by the metric; step 3.1 applied to it gives the orthogonal splitting, and applying step 3.1 to two different complements $C,C'$ exhibits both $\nu_F$-decompositions as isomorphic, since both are identified with the quotient. [L2, step 3.1]

5.1 For a genuine immersion $(f,F)=(f,df)$ the image is $df(TM)$ and the same sequence exhibits $\nu_{df}=f^*TN/df(TM)$; when $f$ is an embedding this is the normal bundle of the embedded image by [L3], where the metric identification with the orthogonal normal bundle is precisely the construction of step 4.1. [L3, step 2.1, step 4.1] ∎
