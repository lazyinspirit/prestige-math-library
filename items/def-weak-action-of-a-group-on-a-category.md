---
id: def-weak-action-of-a-group-on-a-category
kind: definition
title: "Weak action of a group on a category"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - def-group-action
  - def-category
  - def-functor-and-contravariant-functor
  - def-natural-isomorphism
justified_by: []
forward_refs: [cex-ks-weak-actions-do-not-supply-pentagon-coherence-data]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Definition 2.6"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Definition 2.6, printed p. 14; remark after Proposition 2.7, printed p. 14"
    - title: "Mikhail Khovanov and Richard Thomas, Braid cobordisms, triangulated categories, and flag varieties, Homology Homotopy Appl. 9 (2007) 19-94 (arXiv:math/0609335v2), Section 1 (weak action versus genuine action)"
      url: "https://arxiv.org/pdf/math/0609335"
      locator: "Section 1 (Introduction), arXiv PDF pp. 2-8 (the table of contents is p. 1); definition of a weak action and the associativity constraint (1.1) on arXiv PDF p. 2"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $G$ be a group with unit $1$ ([[def-group-action]]) and $Q$ a category
([[def-category]]). A **weak action** of $G$ on $Q$ is a choice of a functor
$$F_g\colon Q\to Q\qquad(g\in G)$$
for every element of $G$ ([[def-functor-and-contravariant-functor]]) such that

1. $F_1$ is the identity functor of $Q$, and
2. for all $f,g\in G$ the functors $F_{fg}$ and $F_fF_g$ are isomorphic, that
   is, there exists a natural isomorphism between them
   ([[def-natural-isomorphism]]).

No isomorphisms $F_{fg}\cong F_fF_g$ are chosen, they are not required to be
compatible with the associativity of $G$, and no pentagon is imposed: the
definition records only that such isomorphisms exist. This is Definition 2.6 of
the source, stated there for a group and a category with the same comments.

**Normalized coherent actions.** In the identity-unit normalization, the action
is **coherent**, or a genuine $2$-action, when isomorphisms
$$\mu_{f,g}\colon F_fF_g\longrightarrow F_{fg}\qquad(f,g\in G)$$
are chosen so that $\mu_{1,g}=\mathrm{id}_{F_g}$, $\mu_{f,1}=\mathrm{id}_{F_f}$
and the two composites
$$F_fF_gF_h\xrightarrow{\ \mu_{f,g}F_h\ }F_{fg}F_h\xrightarrow{\ \mu_{fg,h}\ }F_{fgh}, \qquad F_fF_gF_h\xrightarrow{\ F_f\mu_{g,h}\ }F_fF_{gh}\xrightarrow{\ \mu_{f,gh}\ }F_{fgh}$$
agree, the associativity (pentagon) condition. This is the normalized special
case of a strong monoidal action. In the general definition, the unit
constraint is a chosen natural isomorphism $u:F_1\Rightarrow\operatorname{Id}_Q$;
when $F_1=\operatorname{Id}_Q$, the unit triangles read
$\mu_{f,1}=F_fu$ and $\mu_{1,g}=uF_g$, and need not be identity maps. No
strictification to the normalized case is asserted. A coherent action with $F_1=\operatorname{Id}_Q$ is in particular a weak
action after forgetting its chosen compositors. For a general coherent action
with only $u:F_1\Rightarrow\operatorname{Id}_Q$, first replace the identity
component of the functor assignment by $\operatorname{Id}_Q$; the unit
isomorphism and the compositors then supply the pairwise isomorphisms required
by the weak definition. This replacement asserts no strictification of the
coherence data.

**Standing convention.** The whole page uses "weak" in the sense of this
definition and never silently substitutes a coherent action: whenever a
compositor or pentagon argument would be needed, the weakness of the available
data is stated.

**Terminology.** The functors $F_g$ are the *components* of the weak action,
the assignment $g\mapsto F_g$ is its *functor assignment*, and a weak action is
determined by the functor assignment with its prescribed identity component
together with the existence of the pairwise isomorphisms in condition 2. We do
not distinguish two weak actions that are naturally isomorphic componentwise.

## Remarks

Arbitrarily chosen pairwise isomorphisms of a weak action need not satisfy
coherence: the companion-page counterexample
[[cex-ks-weak-actions-do-not-supply-pentagon-coherence-data]] exhibits a weak
action with chosen pairwise isomorphisms violating the pentagon. That example
also admits identity compositors satisfying coherence, so it does not assert
that no coherent choice exists.
