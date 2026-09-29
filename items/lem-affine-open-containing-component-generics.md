---
id: lem-affine-open-containing-component-generics
kind: lemma
title: Affine neighbourhood containing component generic points
status: draft
origin: pipeline
deps:
  - def-quasi-compact-and-quasi-separated-scheme
  - def-noetherian-topological-space
  - def-irreducible-component-of-a-topological-space
  - def-generic-point-irreducible-closed-subset
  - def-scheme
  - def-affine-open-subscheme
  - lem-distinguished-open-refinement-at-a-point
  - lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union
  - thm-morphisms-into-affine-scheme-global-sections
  - thm-gluing-sheaves
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Properties of Schemes, Lemma 28.30.4 (tag 01ZX) and Lemma 28.30.1 (tag 01ZV)"
      url: "https://stacks.math.columbia.edu/tag/01ZX"
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, §§30.2–30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), §§8.4, 11.5, 19.1, 19.6, 19.8–19.9, 28.1–28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Let $X$ be a quasi-separated Noetherian scheme
([[def-quasi-compact-and-quasi-separated-scheme]],
[[def-noetherian-topological-space]]) whose irreducible components are
finitely many, say $Z_1,\dots,Z_r$, with generic points $\eta_i\in Z_i$
([[def-irreducible-component-of-a-topological-space]],
[[def-generic-point-irreducible-closed-subset]]), so that $Z_i=\overline{\{\eta_i\}}$
and $X=Z_1\cup\cdots\cup Z_r$. Then for every point $x\in X$ there is an affine
open subscheme $U\subseteq X$ ([[def-affine-open-subscheme]]) with $x\in U$ and
$\eta_1,\dots,\eta_r\in U$. In particular $U$ is affine and contains $x$ and
all the generic points of the components of $X$. If $X=\varnothing$ there is no
point $x$ and the assertion is vacuous.

## Facts & Assumptions

**Given:** A quasi-separated Noetherian scheme $X$ with finitely many irreducible components $Z_1,\dots,Z_r$ and generic points $\eta_i\in Z_i$, and a point $x\in X$.

[F1] A scheme is a locally ringed space in which every point has an open neighbourhood which is an affine scheme; an affine open subscheme is an open subscheme that is affine for its restricted structure sheaf. ([[def-scheme]], [[def-affine-open-subscheme]])

[F2] Let $R$ be a commutative ring, $U\subseteq\operatorname{Spec}(R)$ open and $\mathfrak p\in U$. Then there is $f\in R$ with $\mathfrak p\in D(f)\subseteq U$, and $D(f)$ with its restricted structure sheaf is an affine open subscheme. ([[lem-distinguished-open-refinement-at-a-point]])

[F3] A point $\eta$ is a generic point of a closed subset $Z$ when $\overline{\{\eta\}}=Z$; in that case $Z=\overline{\{\eta\}}$ is closed and equals the closure of $\eta$. ([[def-generic-point-irreducible-closed-subset]])

[F4] An irreducible component of a topological space is an irreducible subset maximal under inclusion among irreducible subsets. ([[def-irreducible-component-of-a-topological-space]])

[F5] For pairwise disjoint open subsets $U_1,\dots,U_s$ of a scheme $X$ with union $U$, the restriction maps exhibit $\Gamma(U,\mathcal O_X)$ as a product $\prod_{i=1}^s\Gamma(U_i,\mathcal O_X)$: sections are uniquely determined by, and may be prescribed independently on, the pieces. ([[thm-gluing-sheaves]])

[F6] For a scheme $U$ and a ring $A$, taking global sections induces a natural bijection $\operatorname{Hom}(U,\operatorname{Spec}A)\cong\operatorname{Hom}_{\mathrm{CRing}}(A,\Gamma(U,\mathcal O_U))$, compatible with restriction to open subschemes. ([[thm-morphisms-into-affine-scheme-global-sections]])

[F7] For a product of rings $A=\prod_{i=1}^sA_i$ with idempotents $e_i$, the spectrum is the disjoint union of the clopen pieces $D(e_i)$, and the morphism $\operatorname{Spec}A_i\to\operatorname{Spec}A$ induced by the projection $A\to A_i$ is an isomorphism of locally ringed spaces onto $D(e_i)$. ([[lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union]])

## Proof

**Proof technique:** direct: separate the components through $x$ from the remaining components by an affine open, then adjoin pairwise disjoint affine neighbourhoods of the remaining generic points, and show that a finite disjoint union of affine opens of a scheme is affine via the product-ring description of its global sections.

1.1 Since $X=Z_1\cup\cdots\cup Z_r$, the point $x$ lies in at least one component. Reindex the components so that $x\in Z_1,\dots,Z_{r'}$ and $x\notin Z_{r'+1},\dots,Z_r$ for some $0\le r'\le r$. If $r'=r$ there are no indices in the second range and the set $X$ below is all of $X$. [given]

2.1 Every $Z_i$ equals $\overline{\{\eta_i\}}$ and is closed in $X$, by [F3]. Hence $V:=X\setminus(Z_{r'+1}\cup\cdots\cup Z_r)$ is an open subset of $X$ containing $x$, and the union displayed is a finite union of closed subsets. [F3, step 1.1]

3.1 Choose an affine open $W_0\subseteq X$ with $x\in W_0$, possible by [F1]. Then $W_0\subseteq\operatorname{Spec}(A_0)$ for $A_0=\Gamma(W_0,\mathcal O_X)$ under the affine structure, $W_0\cap V$ is an open subset of the affine scheme $W_0$ containing $x$, and by [F2] there is $f\in A_0$ with $x\in W:=D(f)\subseteq W_0\cap V$. Thus $W$ is an affine open subscheme of $X$ with $x\in W$ and $W\cap Z_i=\varnothing$ for $i>r'$. [F1, F2, step 2.1]

4.1 Let $i\le r'$. Then $W\cap Z_i$ is a nonempty open subset of the irreducible space $Z_i$, since $x\in W\cap Z_i$. If the generic point $\eta_i$ did not lie in $W\cap Z_i$, then $Z_i\setminus W$ would be a closed subset of $Z_i$ containing $\eta_i$; as $Z_i=\overline{\{\eta_i\}}$, this forces $Z_i\setminus W\supseteq\overline{\{\eta_i\}}=Z_i$, contradicting $W\cap Z_i\ne\varnothing$. Hence $\eta_i\in W$ for every $i\le r'$. [F3, F4, step 3.1]

4.2 For $i>r'$ the generic point $\eta_i$ does not lie in any $Z_k$ with $k\ne i$: otherwise $Z_i=\overline{\{\eta_i\}}\subseteq Z_k$, and since $Z_i$ is an irreducible component contained in the irreducible subset $Z_k$, maximality [F4] forces $Z_i=Z_k$, contrary to the components being indexed distinctly. Hence $X\setminus\bigcup_{k\ne i}Z_k$ is an open neighbourhood of $\eta_i$; choosing an affine open of $X$ inside it and then a distinguished open inside the resulting affine scheme as in step 3.1, we obtain an affine open subscheme $V_i$ with $\eta_i\in V_i$ and $V_i\cap Z_k=\varnothing$ for all $k\ne i$. [F3, F4, step 3.1]

5.1 The opens $V_i$ from step 4.2 are already pairwise disjoint. Indeed, $V_i\subseteq X\setminus\bigcup_{l\ne i}Z_l$, and every point of $X$ belongs to one of the components $Z_l$, so $V_i\subseteq Z_i$. For $k\ne i$, step 4.2 gives $V_k\cap Z_i=\varnothing$; hence $V_i\cap V_k=\varnothing$. Also, for $i>r'$ step 3.1 gives $W\cap Z_i=\varnothing$, so $W\cap V_i=\varnothing$. [step 3.1, step 4.2, given]

6.1 For each $i>r'$ put $U_i':=V_i$. This is an affine open containing $\eta_i$ by step 4.2. By step 5.1 these opens are pairwise disjoint and each is disjoint from $W$; no further shrinking or openness of a set difference is needed. [step 4.2, step 5.1]

7.1 Put $U:=W\cup\bigcup_{i>r'}U_i'$. This is an open subscheme of $X$. It contains $x$ and all $\eta_1,\dots,\eta_r$: the points $\eta_i$ with $i\le r'$ lie in $W$ by step 4.1, and each $\eta_i$ with $i>r'$ lies in $U_i'$ by step 6.1. The pieces are pairwise disjoint open subschemes: $W\cap U_i'=\varnothing$ for every $i>r'$ by step 6.1 and $U_i'\cap U_k'=\varnothing$ for $i\ne k$ by step 6.1, and each piece is affine. [step 4.1, step 6.1]

8.1 The open subscheme $U$ is affine and $\Gamma(U,\mathcal O_X)\cong\Gamma(W,\mathcal O_X)\times\prod_{i>r'}\Gamma(U_i',\mathcal O_X)$. Indeed, $U$ is the disjoint union of the affine open subschemes $W$ and $U_i'$ ($i>r'$), so by [F5] the restriction maps identify $\Gamma(U,\mathcal O_X)$ with the product $A:=\Gamma(W,\mathcal O_X)\times\prod_{i>r'}\Gamma(U_i',\mathcal O_X)$, the product being taken over the empty set when $r'=r$. Let $e_0,e_i$ ($i>r'$) be the idempotents of $A$; by [F7] the spectrum $\operatorname{Spec}A$ is the disjoint union of the clopen pieces $D(e_0)=\operatorname{Spec}\Gamma(W,\mathcal O_X)$ and $D(e_i)=\operatorname{Spec}\Gamma(U_i',\mathcal O_X)$, and the morphisms induced by the projections are isomorphisms onto these pieces. The inverse ring isomorphism $A\to\Gamma(U,\mathcal O_X)$ of [F5] corresponds by [F6] to a morphism $h:U\to\operatorname{Spec}A$; for each piece, restriction to that piece corresponds by the compatibility in [F6] to the composite of the inverse isomorphism with the projection, so $h$ restricts to an isomorphism $W\to D(e_0)$ on $W$ and to an isomorphism $U_i'\to D(e_i)$ on $U_i'$. Since the sources of these restrictions cover $U$, the targets cover $\operatorname{Spec}A$, and on each piece the structure-sheaf map is an isomorphism, $h$ is a homeomorphism and induces an isomorphism of structure sheaves; hence $h$ is an isomorphism of schemes and $U\cong\operatorname{Spec}A$ is affine. [F5, F6, F7, step 7.1]

9.1 By steps 7.1 and 8.1 the subscheme $U$ is an affine open subscheme of $X$ containing $x$ and all generic points $\eta_1,\dots,\eta_r$ of the components of $X$. If $X=\varnothing$ then $r=0$ and there is no point $x$, so the assertion is vacuous. The quasi-separatedness hypothesis is retained though the argument above only used that affine opens form a basis of the topology, that finitely many pairwise disjoint affine opens may be adjoined, and that the union is affine. No choice principle is used: all selections are made inside the single affine charts $W_0$ and $V_i$ by [F2], and the family of components is finite and given. [step 3.1, step 8.1, given] ∎
