---
id: def-author-5a1e77100001-salvetti-poset
kind: definition
title: The incident facet and chamber poset
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-author-5a1e77100001-sign-facets
  - lem-author-5a1e77100001-facet-incidence
  - math:def-partial-order
dependency_roles:
  def-author-5a1e77100001-sign-facets: mathematical-premise
  lem-author-5a1e77100001-facet-incidence: mathematical-premise
  math:def-partial-order: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 4
proof_strategy: direct
sources:
  references:
    - title: Luis Paris, K(π, 1) conjecture for Artin groups (2014)
      url: https://www.numdam.org/item/AFST_2014_6_23_2_361_0.pdf
      locator: §3.1, printed pp.385–386 (PDF pages 26–27), definitions of facet
        incidence, localized chambers and the displayed Sal_0(A) order after
        Figure 3.1; arrangement hypotheses on printed p.364 (PDF page 5).
      statement: Paris defines $\operatorname{Sal}_0(\mathcal A)$ as pairs $(F,C)$
        with $F\preceq C$, where $F\preceq G$ means $F\subseteq\overline G$ in
        $I$ and $C_F$ is the chamber of $\mathcal A_F=\{H:F\subset H\}$
        containing $C$. Its order is $(F,C)\leq(G,D)$ exactly when $F\preceq G$
        and $C_F\subseteq D_G$, allowing equality.
      hypotheses: A locally finite set of linear hyperplanes, each meeting a nonempty
        open convex cone I in a finite-dimensional real vector space.
      reading_limits: Read the PDF text on printed p.364 and pp.385–386 through the
        displayed poset definition. Only the definition and ordering convention
        are imported; no homotopy or equivariance theorem is used. The
        partial-order verification below is local.
---

## Definition

For the facets, incidence and localized chambers of *Facet incidence and localized chamber signs*, define $P(\mathcal A)=\{(F,C):F\in\mathcal F,\ C\in\mathcal C,\ F\preceq C\}$. Give it the relation $(F,C)\leq(G,D)$ if $F\preceq G$ and $C_F\subseteq D_G$. A partial order has the reflexivity, antisymmetry and transitivity axioms of *Partial order and partially ordered set*. This is Paris's $\operatorname{Sal}_0(\mathcal A)$, with the same direction of ordering.

## Definition references

[[def-author-5a1e77100001-sign-facets]]

[[lem-author-5a1e77100001-facet-incidence]]

[[math:def-partial-order]]

## Justification

**Given:** the incident pairs and relation in the Definition; the facets, chambers and signs of [[def-author-5a1e77100001-sign-facets]]; the incidence and localized chamber signs of [[lem-author-5a1e77100001-facet-incidence]]; and the order axioms of [[math:def-partial-order]].

1.1 For $F\preceq G$, the containment $C_F\subseteq D_G$ holds exactly when the signs of $C,D$ agree on $\mathcal A_G$: necessity follows by evaluating any point of the nonempty $C_F$, and sufficiency follows because $\mathcal A_G\subseteq\mathcal A_F$. [given]

1.2 Reflexivity follows from reflexivity of incidence and containment. For transitivity, if $(F,C)\leq(G,D)\leq(K,L)$, then the signs of $C,D$ agree on $\mathcal A_G$, hence on $\mathcal A_K$, and those of $D,L$ agree on $\mathcal A_K$. Incidence is transitive, so $(F,C)\leq(K,L)$. [given, step 1.1]

1.3 For antisymmetry, opposite inequalities force $F=G$ and $C_F=D_F$; the last assertion of the incidence lemma gives $C=D$. Thus the displayed relation satisfies all three partial-order axioms. [given, step 1.2] ∎

## Source notes

Construction compared with Paris §3.1, printed pp.385–386, including the displayed order on $\operatorname{Sal}_0(\mathcal A)$. Its elementary order verification is supplied here.
