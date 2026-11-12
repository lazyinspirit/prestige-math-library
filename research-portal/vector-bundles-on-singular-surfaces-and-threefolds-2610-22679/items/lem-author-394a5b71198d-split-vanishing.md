---
id: lem-author-394a5b71198d-split-vanishing
kind: lemma
title: A split trivial line annihilates the exterior and top Chow classes
status: published
domain: mathematics
deps:
  - lem-author-394a5b71198d-exterior-dual-interface
  - def-exterior-determinant-bundles
  - math:lem-operational-chern-classes-and-whitney-formula
  - math:def-chern-classes-of-a-vector-bundle
  - math:def-axiom-of-choice
  - def-vector-bundle-classes
  - math:def-intersection-with-a-cartier-divisor-and-first-chern-class
  - math:def-affine-scheme
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-presentation-morphism
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-sheaf-hom
  - math:def-module-on-ringed-space
  - math:def-sheaf-on-topological-space
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  lem-author-394a5b71198d-exterior-dual-interface: mathematical-premise
  def-exterior-determinant-bundles: mathematical-premise
  math:lem-operational-chern-classes-and-whitney-formula: mathematical-premise
  math:def-chern-classes-of-a-vector-bundle: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-vector-bundle-classes: mathematical-premise
  math:def-intersection-with-a-cartier-divisor-and-first-chern-class: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-presentation-morphism: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-sheaf-hom: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:def-sheaf-on-topological-space: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 16
---

## Statement
Assume AC. Let $r\geq1$ and let $E\cong\mathcal O_X\oplus F$ be a rank-$r$ bundle on a noetherian affine scheme, with $F$ of rank $r-1$. Then $\varepsilon(E)=0$. If $X$ is smooth and equidimensional over a field, then also $c_r(E)=0$ in the ordinary integral Chow group $\mathrm{CH}^r(X)$.

## Facts & Assumptions

**Given:** The hypotheses and data in the statement, with AC and the article's fixed universes wherever perfect K-theory is used.

**Goal:** Establish the asserted conclusion.

[F1] The actual exterior-dual class is $\varepsilon(E)=\sum_{i=0}^r(-1)^i[\Lambda^iE^\vee]\in K_0(X)$, with the spectral perfect K-zero and bundle object-class conventions. [[lem-author-394a5b71198d-exterior-dual-interface]]

[F2] Exterior powers of a rank-$s$ bundle have increasing-wedge bases, with $\Lambda^0G=\mathcal O_X$ and $\Lambda^iG=0$ for $i>s$; in this proof set also $\Lambda^{-1}G=0$. [[def-exterior-determinant-bundles]]

[F3] On the smooth equidimensional scheme, write $c_t(G)=\sum_{i\geq0}c_i(G)t^i$, where $t$ is a formal indeterminate. Whitney gives $c_t(E)=c_t(\mathcal O_X)c_t(F)$, the line normalization gives $c_t(L)=1+c_1(L)t$, and Chern classes vanish above the rank. These are ordinary integral Chow classes obtained from the operational classes; for the zero bundle $c_t(0)=1$. [[math:lem-operational-chern-classes-and-whitney-formula]], [[math:def-chern-classes-of-a-vector-bundle]]

[F4] Bundles are finite locally free module sheaves, with isomorphisms the invertible module-sheaf maps. On an affine scheme their spectral classes obey the bundle Grothendieck-group relations; the split exact sequence with inclusion $v\mapsto(v,0)$ and projection $(v,w)\mapsto w$ gives $[V\oplus W]=[V]+[W]$. Taking both terms zero gives $[0]=0$. [[def-vector-bundle-classes]]

[F5] The first-Chern-class operation of the trivial line is zero. Its global generator $1$ has zero divisor on every integral cycle, and on a smooth scheme the resulting operation gives the first Chern class in the Chow ring. Thus $c_1(\mathcal O_X)=0$. [[math:def-intersection-with-a-cartier-divisor-and-first-chern-class]]

[F6] An affine scheme is isomorphic to a ring spectrum with its structure sheaf, and a noetherian scheme is locally noetherian and quasi-compact. Smoothness over the field includes local finite presentation, hence local finite type. Quasi-compactness then makes this structure morphism finite type, so the smooth Chow-class interface applies. Equidimensional here means that all irreducible components have the same dimension, as required by that interface. [[math:def-affine-scheme]], [[math:def-locally-noetherian-and-noetherian-scheme]], [[math:def-smooth-morphism-schemes]], [[math:def-locally-finite-presentation-morphism]], [[math:def-locally-finite-type-and-finite-type-morphism]], [[math:def-chern-classes-of-a-vector-bundle]]

[F7] Write $G^\vee=\mathcal Hom_{\mathcal O_X}(G,\mathcal O_X)$, whose sections are module-sheaf morphisms on the open set. A finite direct sum is the sheaf of pairs of sections, with componentwise module operations and restrictions. The sheaf axioms hold componentwise. Compatible local maps glue by gluing their values on each section; compatible local inverses then give an isomorphism. [[math:def-sheaf-hom]], [[math:def-module-on-ringed-space]], [[math:def-sheaf-on-topological-space]]

[F8] AC and suitable fixed universes are inherited hypotheses of the supplied perfect K-theory and Chow constructions. Universe existence is assumed separately from AC, using the supplied closure convention. The finite wedge maps and cancellation below require no further choice. [[math:def-axiom-of-choice]], [[math:def-grothendieck-universe-closure-convention]], [[def-vector-bundle-classes]], [[math:lem-operational-chern-classes-and-whitney-formula]]

## Proof

1.1 Dualize the given splitting: a functional on $\mathcal O_X\oplus F$ is uniquely $(a,f)\mapsto ba+\varphi(f)$, so $E^\vee\cong\mathcal O_X\oplus F^\vee$ by [F7]. Local dual bases make $F^\vee$ a rank-$(r-1)$ bundle. Let $e_0$ be the functional projecting onto the trivial line. For $0\leq i\leq r$, the map $(u,v)\mapsto u+e_0\wedge v$ identifies $\Lambda^iF^\vee\oplus\Lambda^{i-1}F^\vee$ with $\Lambda^i(\mathcal O_X\oplus F^\vee)$: the increasing-wedge basis splits into wedges omitting $e_0$ and those containing it first. This formula is independent of the frame of $F^\vee$, so the local maps and their inverses glue by [F7]. By [F4], $[\Lambda^iE^\vee]=[\Lambda^iF^\vee]+[\Lambda^{i-1}F^\vee]$. Substituting in [F1] and using the degree conventions of [F2] gives $\varepsilon(E)=\sum_{j=0}^{r-1}(-1)^j[\Lambda^jF^\vee]+\sum_{j=0}^{r-1}(-1)^{j+1}[\Lambda^jF^\vee]=0$. This includes $r=1$, when $F=0$. [F1, F2, F4, F7, F8, given, algebra]

2.1 Under the additional smooth equidimensional hypothesis, [F6] supplies the finite-type scope of [F3] and [F5]. By [F5], $c_1(\mathcal O_X)=0$, so the line normalization in [F3] gives $c_t(\mathcal O_X)=1$. Whitney therefore gives $c_t(E)=c_t(F)$. Since $F$ has rank $r-1$, its coefficient in degree $r$ is zero, including $r=1$ by the zero-bundle convention. Hence $c_r(E)=0$ in $\mathrm{CH}^r(X)$. Together with step 1.1, this is the asserted necessary vanishing for an actual splitting. [F3, F5, F6, F8, step 1.1, given, algebra] ∎
