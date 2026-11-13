---
id: lem-author-4ac39e6f1702-component-crossing-label
kind: lemma
title: A finite connected component gives the opposite relative chamber
status: draft
domain: mathematics
origin: pipeline
deps:
  - lem-author-4ac39e6f1702-component-opposition
  - thm-chamber-labelling-artin-tits-normalisers
  - def-chamber-labels-artin-tits-normalisers
  - prop-relative-stratification-artin-tits-normalisers
  - math:thm-cg-root-length-criterion-and-faithfulness
  - math:thm-hh-parabolic-minimal-representatives-and-length-additivity
  - def-connected-support-artin-tits-normalisers
  - def-longest-elements-artin-tits-normalisers
  - def-chambers-walls-artin-tits-normalisers
dependency_roles:
  lem-author-4ac39e6f1702-component-opposition: mathematical-premise
  thm-chamber-labelling-artin-tits-normalisers: mathematical-premise
  def-chamber-labels-artin-tits-normalisers: mathematical-premise
  prop-relative-stratification-artin-tits-normalisers: mathematical-premise
  math:thm-cg-root-length-criterion-and-faithfulness: mathematical-premise
  math:thm-hh-parabolic-minimal-representatives-and-length-additivity: mathematical-premise
  def-connected-support-artin-tits-normalisers: mathematical-premise
  def-longest-elements-artin-tits-normalisers: mathematical-premise
  def-chambers-walls-artin-tits-normalisers: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 13
formulation_deps:
  - def-chamber-labels-artin-tits-normalisers
  - thm-chamber-labelling-artin-tits-normalisers
  - prop-relative-stratification-artin-tits-normalisers
  - def-connected-support-artin-tits-normalisers
  - def-longest-elements-artin-tits-normalisers
  - def-chambers-walls-artin-tits-normalisers
argument_deps:
  - lem-author-4ac39e6f1702-component-opposition
  - thm-chamber-labelling-artin-tits-normalisers
  - def-chamber-labels-artin-tits-normalisers
  - prop-relative-stratification-artin-tits-normalisers
  - math:thm-cg-root-length-criterion-and-faithfulness
  - math:thm-hh-parabolic-minimal-representatives-and-length-additivity
  - def-connected-support-artin-tits-normalisers
  - def-longest-elements-artin-tits-normalisers
  - def-chambers-walls-artin-tits-normalisers
---

## Statement

Let $(W,S)$ be a Coxeter system with finite generating set $S$, in its canonical real representation and dual chamber arrangement, and fix $J\subseteq S$. Let $(x,I)\in\mathrm{Cham}(J)$ and $a\in S\setminus I$ with finite $W_D$, where $D=[I,a]$. Set $L=I+a:=I\cup\{a\}$, $b=\iota_D(a)$, $K=L\setminus\{b\}$, and $v=w_{D\setminus\{a\}}w_D$. Then $(xv,K)\in\mathrm{Cham}(J)$, its chamber has the closed facet $\overline{xC_L}$, and it lies on the opposite side of its supporting hyperplane from $xC_I$. If this facet is the wall of a specified adjacent chamber, that chamber has label $(xv,K)$.

## Facts & Assumptions

[F1] Component opposition gives the simple-root bijection, fixes $C_L$, and gives the strict opposite-side evaluation, by [[lem-author-4ac39e6f1702-component-opposition]].

[F2] The algebraic label conditions are [[def-chamber-labels-artin-tits-normalisers]] and their geometric bijection is [[thm-chamber-labelling-artin-tits-normalisers]].

[F3] Positive images of simple roots are equivalent to absence of right descents, by [[math:thm-cg-root-length-criterion-and-faithfulness]]; absence of right descents indexed by a subset is equivalent to minimality in the left coset of the form $xW_I$, by [[math:thm-hh-parabolic-minimal-representatives-and-length-additivity]], part (3).

[F4] Chamber facets are translated coordinate faces, by [[prop-relative-stratification-artin-tits-normalisers]].

[F5] The component $D=[I,a]$ is defined by [[def-connected-support-artin-tits-normalisers]]. The longest elements and opposition permutation are defined by [[def-longest-elements-artin-tits-normalisers]] for every finite standard parabolic, including the empty one. Since $W_{D\setminus\{a\}}\leq W_D$, both longest elements used in $v$ are defined.

[F6] Walls are codimension-one intersections of chamber closures with arrangement hyperplanes; distinct chambers are adjacent when they share a wall, by [[def-chambers-walls-artin-tits-normalisers]].

## Proof
**Given:** The finite-rank canonical Coxeter representation, root basis and dual action, with the notation and hypotheses in the Statement. **Goal:** prove the stated assertions.


**Proof technique:** direct.

1.1 Both longest elements in $v$ are defined by [F5]. Since $x$ is minimal in $xW_I$, [F3] gives $x\alpha_i\in\Phi^+$ for every $i\in I$. The bijection in [F1] therefore gives $xv\alpha_k\in\Phi^+$ for every $k\in K$. A second application of [F3] shows that $xv$ is minimal in $xvW_K$. Conjugation by $v$ carries each generating reflection indexed by $K$ to a generating reflection indexed by $I$, bijectively, since it carries their simple roots bijectively. Hence $vW_Kv^{-1}=W_I$. It follows that $xvW_K(xv)^{-1}=xW_Ix^{-1}=W_J$. Both label conditions hold. [F1, F2, F3, F5]

2.1 By [F2] this label represents the relative chamber $xvC_K$. Its facet at $b$ is $xvC_{K+b}=xvC_L=xC_L$ by [F1, F4]. The same face is the facet at $a$ of $xC_I$. For $f\in C_K$, the functional $xvf$ has negative value on $x\alpha_a$ by [F1], whereas every point of $xC_I$ has positive value there. Thus the two labelled chambers have the claimed common closed facet and opposite sides. [F1, F2, F4, step 1.1]

3.1 Use the wall and adjacency convention in [F6]. For a facet of a chamber orthant, choose a point in its relative interior that belongs to the arrangement domain. In a sufficiently small neighbourhood, the only active chamber inequality is its facet inequality. Consequently at most one chamber on each side can have that whole facet: two would overlap in an open half-neighbourhood. Applied to the specified adjacent chamber and the chamber in step 2.1, this proves equality on the opposite side. Label uniqueness in [F2] then proves the final assertion. This argument is needed only when the facet is an actual adjacency wall inside the domain. [F2, F4, F6, step 2.1] ∎
