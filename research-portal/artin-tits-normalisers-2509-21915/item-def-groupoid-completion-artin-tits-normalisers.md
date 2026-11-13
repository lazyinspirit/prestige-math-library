---
title: Groupoid completion and its universal property
status: draft
research_item: def-groupoid-completion-artin-tits-normalisers
dependency_level: 2
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 7, §2.4, second paragraph
      statement: The groupoid completion of a small category is obtained by formally
        inverting its morphisms, and every functor from the category to a
        groupoid factors through its canonical functor.
      hypotheses: The input is a small category and the target is a groupoid.
      reading_limits: The frozen article text at the cited paragraph was inspected.
        This reference attributes the original formulation and is not used as a
        proof prerequisite.
---

PDF p. 7: ` §2.4, second paragraph `

## Prerequisites

- [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)
- [def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites)


## Definition

Let $\mathcal G^+$ be a small category: its objects and morphisms form sets. A groupoid is a category in which every morphism has a two-sided inverse. Composition of consecutive arrows is read from left to right.

Form a directed graph with the objects of $\mathcal G^+$ as vertices and a tagged edge $[f]:x\to y$ for every morphism $f:x\to y$ of $\mathcal G^+$. Impose the path relations $[1_x]=1_x$ and $[f][g]=[fg]$ whenever $f:x\to y$ and $g:y\to z$ are composable; the right-hand $1_x$ is the empty path. A path is a finite composable sequence of edges. The presented category has these vertices as objects and paths modulo the smallest endpoint-preserving equivalence relation containing the displayed relations and stable under concatenation.

The **groupoid completion** $\mathcal G$ of $\mathcal G^+$ is the groupoid completion of this presented category: adjoin a separately tagged reverse edge $[f]^{-1}:y\to x$ for each edge $[f]$, and impose $[f][f]^{-1}=1_x$ and $[f]^{-1}[f]=1_y$, in addition to the preceding relations. Its arrows are the resulting equivalence classes of paths. The canonical functor $\kappa:\mathcal G^+\to\mathcal G$ is the identity on objects and sends $f$ to the class of $[f]$.

For every small groupoid $\mathcal H$ and functor $F:\mathcal G^+\to\mathcal H$, there is a unique functor $\overline F:\mathcal G\to\mathcal H$ such that $\overline F\circ\kappa=F$. Thus every such $F$ factors through $\kappa$. No connectedness of $\mathcal G^+$ or $\mathcal H$, and no faithfulness of $\kappa$, is assumed.

## Definition references

[def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites)

[def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites)

## Justification

By [def-path-localisation-interface-artin-tits-prerequisites](item-def-path-localisation-interface-artin-tits-prerequisites), the displayed presentation defines a small category. Evaluation sends a path $[f_1]\cdots[f_n]$ to the composite $f_1\cdots f_n$, and sends an empty path to the appropriate identity. The displayed relations preserve evaluation. Conversely, repeated use of the composition relations reduces every nonempty path to the single edge labelled by its composite, while the identity relation identifies an identity edge with the empty path. Evaluation therefore identifies the presented category with $\mathcal G^+$, preserving objects, identities and composition.

The same supplier constructs the completed groupoid and its canonical functor by adjoining formal inverses, and proves the unique factorisation property for functors into small groupoids. Applying it to the presentation above and transporting along the stated identification gives $\kappa$ and $\overline F$ with the asserted properties. The meaning of groupoid and functor is as in [def-small-groupoid-interface-artin-tits-prerequisites](item-def-small-groupoid-interface-artin-tits-prerequisites).
