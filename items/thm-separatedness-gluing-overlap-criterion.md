---
id: thm-separatedness-gluing-overlap-criterion
kind: theorem
title: Affine-overlap criterion for separatedness
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-separated-morphism-schemes, def-diagonal-morphism-scheme, def-scheme, thm-affine-fibre-product-tensor-ring, thm-affine-closed-immersions-quotient-rings, lem-fibre-product-open-restriction, lem-closed-immersion-local-on-target]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemmas 26.21.7-8 (tags 01KP-01KQ), printed p.41"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Vakil, The Rising Sea, Sections 11.3.11-12, printed pp.311-312"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $f:X\to S$ be a morphism of schemes, let $S=\bigcup_iW_i$ be an affine open
cover and for each $i$ let $f^{-1}(W_i)=\bigcup_jU_{ij}$ be an affine open cover.
Then $f$ is separated if and only if for every $i,j,k$, writing
$W_i=\operatorname{Spec}A_i$, $U_{ij}=\operatorname{Spec}B_{ij}$,
$U_{ik}=\operatorname{Spec}B_{ik}$, the intersection $U_{ij}\cap U_{ik}$ is
affine and the natural ring map
$$B_{ij}\otimes_{A_i}B_{ik}\longrightarrow\Gamma(U_{ij}\cap U_{ik},\mathcal O_X)$$
is surjective. The same condition may be checked for all pairs of affine opens
$U,V\subseteq X$ lying over one and the same affine open of $S$, without
reference to a fixed chosen cover. Empty intersections use the zero ring.

## Facts & Assumptions

**Given:** A morphism $f:X\to S$ with diagonal $\Delta_{X/S}:X\to X\times_SX$ and projections $\operatorname{pr}_1,\operatorname{pr}_2$.

[F1] A morphism is **separated** when its diagonal is a closed immersion. ([[def-separated-morphism-schemes]])

[F2] The diagonal satisfies $\operatorname{pr}_1\Delta_{X/S}=\operatorname{id}_X=\operatorname{pr}_2\Delta_{X/S}$. ([[def-diagonal-morphism-scheme]])

[F3] If affine opens $U,V\subseteq X$ map into an open $W\subseteq S$, then $\operatorname{pr}_1^{-1}(U)\cap\operatorname{pr}_2^{-1}(V)$ is an open subscheme of $X\times_SX$ representing $U\times_WV$. ([[lem-fibre-product-open-restriction]])

[F4] For ring maps $A\to B$, $A\to C$, allowing the zero ring, $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_AC)$. ([[thm-affine-fibre-product-tensor-ring]])

[F5] For a ring $A$, closed immersions $Z\to\operatorname{Spec}A$ are, up to unique isomorphism over $\operatorname{Spec}A$, precisely the morphisms $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ for ideals $I\subseteq A$. ([[thm-affine-closed-immersions-quotient-rings]])

[F6] A morphism $Z\to T$ is a closed immersion if and only if its restriction to each member of an open cover of $T$ is a closed immersion. ([[lem-closed-immersion-local-on-target]])

[F7] Every point of a scheme has an affine open neighbourhood, so affine opens form a basis. ([[def-scheme]])

## Proof

**Proof technique:** direct.

1.1 Fix $i,j,k$ and put $Q=\operatorname{pr}_1^{-1}(U_{ij})\cap\operatorname{pr}_2^{-1}(U_{ik})$. By [F3] the open subscheme $Q$ of $X\times_SX$ represents $U_{ij}\times_{W_i}U_{ik}$, which by [F4] is the affine scheme $\operatorname{Spec}(B_{ij}\otimes_{A_i}B_{ik})$. [F3, F4, given]

2.1 By [F2] a point $x\in X$ has $\Delta_{X/S}(x)\in Q$ exactly when $x\in U_{ij}\cap U_{ik}$, so $\Delta_{X/S}^{-1}(Q)=U_{ij}\cap U_{ik}$, and the restriction of $\Delta_{X/S}$ to $Q$ is the canonical morphism $U_{ij}\cap U_{ik}\to\operatorname{Spec}(B_{ij}\otimes_{A_i}B_{ik})$. [F2, step 1.1]

2.2 The subschemes $Q$ of step 1.1 form an open cover of $X\times_SX$: given a point $z$ with common image $w\in S$, choose $i$ with $w\in W_i$, so that $\operatorname{pr}_1(z),\operatorname{pr}_2(z)\in f^{-1}(W_i)$, and then choose $j,k$ with $\operatorname{pr}_1(z)\in U_{ij}$ and $\operatorname{pr}_2(z)\in U_{ik}$. [given, step 1.1]

3.1 Assume first the intersection condition of the statement. Then each $U_{ij}\cap U_{ik}=\operatorname{Spec}D$ is affine and, as $B_{ij}\otimes_{A_i}B_{ik}\to D$ is surjective, [F5] exhibits the restriction of step 2.1 as a closed immersion. [F5, step 2.1]

3.2 Conversely, if $f$ is separated then the restriction of step 2.1 is a closed immersion, so by [F5] applied over the affine target $\operatorname{Spec}(B_{ij}\otimes_{A_i}B_{ik})$ the source $U_{ij}\cap U_{ik}$ is affine, say $\operatorname{Spec}D$, and $B_{ij}\otimes_{A_i}B_{ik}\to D$ is surjective; for an empty intersection $D=0$ is the zero ring. [F5, step 2.1]

3.3 For the version with all affine pairs: given $z$ as above and an affine open $W\ni w$, the affine opens of $X$ contained in $f^{-1}(W)$ form a basis of $f^{-1}(W)$ by [F7], so there are affine $U\ni\operatorname{pr}_1(z)$ and $V\ni\operatorname{pr}_2(z)$ with $U,V\subseteq f^{-1}(W)$; the corresponding open subschemes $\operatorname{pr}_1^{-1}(U)\cap\operatorname{pr}_2^{-1}(V)$ again cover $X\times_SX$. [F7, step 2.2]

4.1 Combining steps 3.1 and 3.2 with the locality statement [F6] applied to the open cover of step 2.2, the diagonal is a closed immersion exactly when the stated intersection condition holds; the same argument applies to the larger family of all affine pairs over a common affine base open by step 3.3. [F6, step 3.1, step 3.2, step 2.2, step 3.3]

5.1 By [F1] the morphism $f$ is separated exactly in that case. Affineness of the intersections alone is not sufficient: the surjectivity clause is what fails for the doubled-origin line on the companion page. [F1, step 4.1] ∎
