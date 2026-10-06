---
id: def-faithful-weak-categorical-action
kind: definition
title: "Faithful weak action"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - def-weak-action-of-a-group-on-a-category
  - def-natural-isomorphism
  - def-group-action
justified_by: []
forward_refs: [cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, after Proposition 2.7"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Text after Proposition 2.7, printed p. 14"
verification:
  precheck: n/a
---

## Definition

Let $(F_g)_{g\in G}$ be a weak action of a group $G$ on a category $Q$ in the
sense of [[def-weak-action-of-a-group-on-a-category]], with unit $1$ of $G$
([[def-group-action]]). The action is **faithful** if for every $g\ne1$ the
functor $F_g$ is not isomorphic to the identity functor of $Q$, that is, there
is no natural isomorphism
$$F_g\cong\operatorname{Id}_Q$$
of functors $Q\to Q$ ([[def-natural-isomorphism]]).

**Equivalently**, the action is faithful when the functor assignment
$g\mapsto F_g$ is injective up to natural isomorphism: if $F_g\cong F_h$ then
$g=h$, since $F_g\cong F_h$ is equivalent to
$F_{h^{-1}g}\cong F_{h^{-1}}F_g\cong\operatorname{Id}_Q$ by the weak action
property and the definition, so that $h^{-1}g=1$ for a faithful action.

## Remarks

**Remarks on the notion.**

- Faithfulness is a property of the functor assignment $g\mapsto F_g$ itself,
  not of an induced action on any invariant of $Q$. In particular a group
  element may act nontrivially on $Q$ while inducing the identity on a
  Grothendieck group or another functorial invariant; the pair of this
  definition with
  [[cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences]]
  records exactly that contrast.
- Because the components of a weak action are compared only through the
  existence of natural isomorphisms $F_{fg}\cong F_fF_g$, faithfulness is a
  property of the weak action and not of an underlying coherent $2$-action:
  nothing in the definition refers to the compositors $\mu_{f,g}$ of a
  coherent action, and the notion is well defined for a bare functor
  assignment.
- The source states this definition for the action of the braid group on
  $C_m$ and proves faithfulness in Corollary 1.2; the definition here is the
  general one used on this page, of which that statement is the instance
  [[thm-the-khovanov-seidel-weak-braid-action-is-faithful]].
