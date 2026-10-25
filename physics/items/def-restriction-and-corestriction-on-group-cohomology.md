---
id: def-restriction-and-corestriction-on-group-cohomology
kind: definition
title: "Restriction and corestriction in group cohomology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-cohomology-as-a-derived-functor, def-restriction-induction-and-coinduction-for-group-modules, thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction, lem-the-group-ring-is-free-over-a-subgroup-ring, thm-effaceable-cohomological-delta-functors-are-universal, prop-positive-right-derived-functors-are-effaceable-by-injectives]
verification:
  audited: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, §6.7"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Definition

Assume the Axiom of Dependent Choice and supplied injective resolution data on all left $G$-modules and all left $H$-modules, for $H\leq G$. Use the resolution-independent group cohomology of [[def-group-cohomology-as-a-derived-functor]]. On the category of $G$-modules, both $H^*(G;-)$ and $T^*=H^*(H;\operatorname{Res}(-))$ are cohomological delta functors; for $T$ this follows by composing with the exact restriction functor. The first is positively effaceable by injectives by [[prop-positive-right-derived-functors-are-effaceable-by-injectives]], hence universal by [[thm-effaceable-cohomological-delta-functors-are-universal]]. Define restriction as its unique delta-functor morphism extending the natural inclusion $M^G\hookrightarrow M^H$:
$$\operatorname{res}_H^G:H^n(G;M)\longrightarrow H^n(H;\operatorname{Res}M).$$

For corestriction assume in addition $[G:H]<\infty$. A transversal $X$ for the left cosets $G/H$ exists by finite choice, which requires no additional choice axiom. Define
$$N_H^G:M^H\longrightarrow M^G,\qquad N_H^G(m)=\sum_{x\in X}xm.$$
Replacing $x$ by $xh$, for $h\in H$, leaves $xm$ unchanged; multiplication by any $g\in G$ permutes the left cosets. Thus the sum is representative-independent and $G$-invariant, and it commutes with $G$-module maps.

The finite transversal supplies the hypothesis of [[lem-the-group-ring-is-free-over-a-subgroup-ring]] on the right $\mathbb Z[H]$-module $\mathbb Z[G]$. Hence induction is a finite direct sum on underlying abelian groups and is exact. Its adjunction with restriction, [[thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction]], shows that a $G$-injective $I$ restricts to an $H$-injective: to extend an $H$-map across a monomorphism, apply exact induction, extend into $I$, and use the adjunction back. Consequently a supplied $G$-injective embedding effaces every positive $T^n$, since the target restricts to an injective. The effaceability theorem therefore makes $T$ universal on $G$-modules. Define corestriction as the unique delta-functor morphism extending $N_H^G$:
$$\operatorname{cor}_H^G:H^n(H;\operatorname{Res}M)\longrightarrow H^n(G;M).$$
