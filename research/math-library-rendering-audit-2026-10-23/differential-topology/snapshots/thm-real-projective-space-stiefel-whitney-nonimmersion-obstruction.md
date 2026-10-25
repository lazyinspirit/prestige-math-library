---
id: thm-real-projective-space-stiefel-whitney-nonimmersion-obstruction
kind: theorem
title: "Real projective space Stiefel-Whitney non-immersion obstruction"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["lem-stiefel-whitney-classes-of-the-tangent-bundle-of-real-projective-space", "lem-the-inverse-of-one-plus-the-generator-in-a-truncated-mod-two-polynomial-ring", "def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold", "cor-high-normal-stiefel-whitney-classes-obstruct-low-codimension-immersions", "def-stiefel-whitney-classes-from-the-projective-bundle-relation", "thm-mod-two-real-projective-bundle-theorem", "cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms", "def-real-projective-bundle-and-tautological-line", "ex-real-projective-space-from-affine-charts", "def-axiom-of-choice", "lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class"]
justified_by: []
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft, complete 568-page text)"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
      locator: "SS7.2, printed pp. 226-232: Whitney Theorems 7.2-7.3, the RP^{2^k} embedding obstruction (Proposition 7.4), Hirsch-Smale Theorem 7.5, Corollary 7.6 (existence of an immersion iff a k-dimensional inverse bundle exists) and Theorem 7.7"
---

## Statement

Assume AC. Let $m\ge1$, let $a$ denote the nonzero degree-one class of $H^*(\mathbb{RP}^m;\mathbb F_2)=\mathbb F_2[a]/(a^{m+1})$ ([[thm-mod-two-real-projective-bundle-theorem]], [[def-real-projective-bundle-and-tautological-line]]), and let $\bar w(\mathbb{RP}^m)$ be the total normal Stiefel-Whitney class ([[def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold]]). Then $$w(T\mathbb{RP}^m)=(1+a)^{m+1},\qquad \bar w(\mathbb{RP}^m)=(1+a)^{-(m+1)}=\sum_{i\in S_m}a^i,$$ with $S_m=\{0\le i\le m:i\wedge m=0\}$ and digitwise AND, and the highest nonzero term is $\bar w_{d(m)}(\mathbb{RP}^m)=a^{d(m)}$, where $d(m)=\max S_m$. Consequently:

(i) $\mathbb{RP}^m$ does not immerse in $\mathbb R^{m+k}$ for any $k<d(m)$; that is, no immersion of $\mathbb{RP}^m$ has codimension less than $d(m)$ ([[cor-high-normal-stiefel-whitney-classes-obstruct-low-codimension-immersions]]);

(ii) if $m=2^p$ with $p\ge1$, then $d(m)=m-1$ and $\bar w_{m-1}(\mathbb{RP}^m)=a^{m-1}\neq0$, so $\mathbb{RP}^{2^p}$ does not immerse in $\mathbb R^{2^{p+1}-2}$;

(iii) $w(T\mathbb{RP}^m)=1$ exactly when $m+1$ is a power of two. This is a characteristic-class criterion only; it does not assert that these projective spaces are parallelizable.

## Facts & Assumptions

**Given:** An integer $m\ge1$, real projective space $\mathbb{RP}^m$ with $H^*(\mathbb{RP}^m;\mathbb F_2)=\mathbb F_2[a]/(a^{m+1})$, and AC ([[def-axiom-of-choice]]).

[F1] The tangent class is $w(T\mathbb{RP}^m)=(1+a)^{m+1}$ and the normal class is its inverse, $\bar w(\mathbb{RP}^m)=w(T\mathbb{RP}^m)^{-1}=(1+a)^{-(m+1)}$, the latter by the normal Stiefel-Whitney inverse identity ([[lem-stiefel-whitney-classes-of-the-tangent-bundle-of-real-projective-space]], [[lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class]], [[def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold]]).

[F2] In $\mathbb F_2[t]/(t^{m+1})$ one has the unit $1+t$ and the identity $(1+t)^{-(m+1)}=\sum_{i\in S_m}t^i$ with $S_m=\{0\le i\le m:i\wedge m=0\}$, $d(m)=\max S_m$; if $m+1$ is a power of two then $S_m=\{0\}$ ([[lem-the-inverse-of-one-plus-the-generator-in-a-truncated-mod-two-polynomial-ring]]).

[F3] If a closed smooth $M^m$ has $\bar w_i(M)\ne0$ for some $i>k$, then $M$ does not immerse in $\mathbb R^{m+k}$ ([[cor-high-normal-stiefel-whitney-classes-obstruct-low-codimension-immersions]]).

[F4] For the trivial rank-$(m+1)$ bundle $\varepsilon^{m+1}$ over the one-point base, the projective bundle is $P(\varepsilon^{m+1})=\mathbb{RP}^m$, and the projective-bundle theorem gives the ring $H^*(\mathbb{RP}^m;\mathbb F_2)=\mathbb F_2[x_L]/(x_L^{m+1})$, free on $1,x_L,\dots,x_L^m$, because the relation classes $c_i\in H^i(\mathrm{pt};\mathbb F_2)$ vanish for $i\ge1$ by the dimension axiom for singular cohomology ([[thm-mod-two-real-projective-bundle-theorem]], [[cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms]], [[def-real-projective-bundle-and-tautological-line]]); the group $H^1(\mathbb{RP}^m;\mathbb F_2)$ is then one-dimensional, so the nonzero class $a$ of the statement equals $x_L$ and $a^i\ne0$ for $0\le i\le m$ because $1,a,\dots,a^m$ is a basis. The tangent-bundle computation is that of the local lemma based on the affine charts of $\mathbb{RP}^m$ ([[ex-real-projective-space-from-affine-charts]], [[lem-stiefel-whitney-classes-of-the-tangent-bundle-of-real-projective-space]]). AC is the hypothesis of these suppliers ([[def-axiom-of-choice]]).

## Proof

1.1 The two displayed computations are [F1] and [F2] read in the ring $\mathbb F_2[a]/(a^{m+1})$: $w(T\mathbb{RP}^m)=(1+a)^{m+1}$, and $\bar w(\mathbb{RP}^m)=(1+a)^{-(m+1)}=\sum_{i\in S_m}a^i$ with $d(m)=\max S_m$ the highest index with nonzero coefficient, so the highest nonzero normal class is $\bar w_{d(m)}(\mathbb{RP}^m)=a^{d(m)}\neq0$ by [F4]. By definition of $d(m)$, every $\bar w_i$ with $i>d(m)$ vanishes. [F1, F2, F4]

2.1 For clause (i): if $k<d(m)$ then $i:=d(m)>k$ and $\bar w_i(\mathbb{RP}^m)\neq0$, so [F3] forbids an immersion of $\mathbb{RP}^m$ into $\mathbb R^{m+k}$; equivalently every immersion has codimension at least $d(m)$. For clause (ii): if $m=2^p$ with $p\ge1$, then the binary expansion of $m$ has the single nonzero digit $2^p$, so $i\wedge m=0$ for $0\le i\le m$ exactly when $i<2^p=m$, that is $S_m=\{0,1,\dots,m-1\}$ and $d(m)=m-1$; hence $\bar w_{m-1}=a^{m-1}\neq0$ and, applying clause (i) with $k=m-2<d(m)$, there is no immersion into $\mathbb R^{m+(m-2)}=\mathbb R^{2m-2}=\mathbb R^{2^{p+1}-2}$. For $m=2$ this is $k=0$: the final clause of [F3] with the nonzero degree-one normal class excludes this equal-dimensional immersion; its proof treats that instance by the local-diffeomorphism and compact-image argument. [F2, F3, F4, step 1.1]

3.1 For clause (iii): write $m+1=\sum_{j\in B}2^j$ with $B$ the set of binary digit positions. In characteristic two, $(1+a)^{m+1}=\prod_{j\in B}(1+a^{2^j})$: this follows by iterating $(1+a)^{2^{j+1}}=((1+a)^{2^j})^2=1+a^{2^{j+1}}$, as in [F2]. If $B=\{j_0\}$ has one element then $m+1=2^{j_0}$ is a power of two and $(1+a)^{m+1}=1+a^{m+1}=1$ in $\mathbb F_2[a]/(a^{m+1})$. If $B$ has at least two elements and $j_0=\min B$, then $2^{j_0}<m+1$ and the product contains the monomial $a^{2^{j_0}}$ with coefficient $1$ (choose the factor $j_0$ and the constant term from every other factor); no other selection of factors contributes to degree $2^{j_0}$, and $2^{j_0}\le m$ so this term is nonzero in the truncation. Hence $w(T\mathbb{RP}^m)\neq1$ in that case, establishing the equivalence. The criterion concerns the tangent class only and says nothing about parallelizability or about Massey-type improvements of the non-immersion bound for general $m$. [F1, F2, F4] ∎
