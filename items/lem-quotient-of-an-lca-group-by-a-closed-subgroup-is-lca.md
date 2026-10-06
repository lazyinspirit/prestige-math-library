---
id: lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca
kind: lemma
title: The quotient of an LCA group by a closed subgroup is LCA
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [cor-quotient-of-an-abelian-group-is-abelian, def-compact-space, def-hausdorff-space, def-homeomorphism-and-open-maps, def-locally-compact-space, def-neighbourhood-top, def-quotient-group, def-quotient-topology, def-subgroup, def-topological-group, lem-compactness-of-a-subspace-is-ambient, lem-open-or-closed-surjection-is-quotient, lem-topological-group-translations-and-inversion, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-compactness-under-continuous-maps, thm-product-universal-property, thm-quotient-universal-property]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: 'Section 28C, theorem and Corollary 1, printed p. 111: quotient projections are open and quotients are locally compact.'
  - title: T. W. Koerner, Topological Groups (author lecture notes)
    url: https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf
    locator: 'Lemmas 3.1 and 3.7, printed pp. 7-8: quotient group operations and the Hausdorff property for closed normal subgroups.'
proof_strategy: direct
verification:
  precheck: pass
---
## Statement

Let $G$ be a locally compact Hausdorff abelian topological group ([[def-locally-compact-space]], [[def-hausdorff-space]], [[def-topological-group]]) and let $H\le G$ be a closed subgroup ([[def-subgroup]]). Then the quotient group $G/H$ with the quotient topology ([[def-quotient-group]], [[def-quotient-topology]]) is a locally compact Hausdorff abelian topological group. No choice principle is used.

## Facts & Assumptions

**Given:** A locally compact Hausdorff abelian group $G$, a closed subgroup $H\le G$, and the quotient map $q:G\to G/H$.

[F1] $G/H$ is the abelian group of cosets with $(x+H)+(y+H)=x+y+H$ and the quotient topology, the finest topology making $q$ continuous; a set $V\subseteq G/H$ is open exactly when $q^{-1}(V)$ is open in $G$. ([[def-quotient-group]], [[def-quotient-topology]], [[def-subgroup]], [[cor-quotient-of-an-abelian-group-is-abelian]])

[F2] Translations and inversion in $G$ are homeomorphisms and the group operations are continuous; for open $U$ and $h\in H$ the translate $U+h$ is open. ([[def-topological-group]], [[lem-topological-group-translations-and-inversion]], [[def-homeomorphism-and-open-maps]])

[F3] A continuous image of a compact set is compact; a compact subset of a Hausdorff space is closed; every point of a locally compact space has a compact neighbourhood. ([[thm-compactness-under-continuous-maps]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-compact-space]], [[def-locally-compact-space]], [[def-neighbourhood-top]], [[lem-compactness-of-a-subspace-is-ambient]])

[F4] If $q:X\to Y$ is a continuous open surjection then $q$ and $q\times q$ are quotient maps, and a map out of $Y$ is continuous exactly when its composite with $q$ is; composites and coordinatewise maps into products are handled by the universal properties. ([[lem-open-or-closed-surjection-is-quotient]], [[thm-quotient-universal-property]], [[thm-product-universal-property]])

## Proof

1.1 The quotient map $q$ is open: for open $U\subseteq G$ one has $q^{-1}(q(U))=U+H=\bigcup_{h\in H}(U+h)$, a union of open translates, hence open in $G$; by the definition of the quotient topology $q(U)$ is open in $G/H$. [F1, F2]

2.1 $G/H$ is Hausdorff: let $q(x)\ne q(y)$, so $x-y\notin H$. Since $H$ is closed, choose an open neighbourhood $W$ of $x-y$ with $W\cap H=\varnothing$; by continuity of subtraction there are open neighbourhoods $U,V$ of $0$ with $(x-y)+U-V\subseteq W$. Then $q(x+U)$ and $q(y+V)$ are open by step 1.1 and are disjoint: if $x+u+H=y+v+H$ with $u\in U$, $v\in V$, then $x-y+u-v\in H\cap W=\varnothing$, a contradiction. [F1, F2, step 1.1]

3.1 $G/H$ is locally compact: given $x\in G$, choose a compact neighbourhood $N$ of $x$ and an open $U$ with $x\in U\subseteq N$. Then $q(N)$ is compact as a continuous image of $N$, and it is closed because $G/H$ is Hausdorff by step 2.1; $q(U)$ is an open neighbourhood of $q(x)$ contained in $q(N)$. Hence $q(N)$ is a compact neighbourhood of $q(x)$. [F3, step 1.1, step 2.1]

4.1 The quotient operations are continuous: the product $q\times q:G\times G\to G/H\times G/H$ is a continuous open surjection (images of basic open rectangles are open rectangles), hence a quotient map, and $m_{G/H}\circ(q\times q)=q\circ m_G$ where $m_G$ and $m_{G/H}$ are the respective addition maps. The quotient universal property therefore makes addition on $G/H$ continuous, and inversion descends in the same way from inversion in $G$. Thus $G/H$ is an abelian topological group which is Hausdorff and locally compact, as claimed. [F1, F2, F4, step 1.1, step 2.1, step 3.1] ∎
