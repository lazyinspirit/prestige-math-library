---
id: def-fppf-sheaf-and-sheafification
kind: definition
title: "Fppf sheaves of sets and sheafification"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
justified_by: []
aliases: []
deps:
  - def-fppf-topology-on-schemes
  - def-presheaf-representable-functor-and-representation
  - def-functor-and-contravariant-functor
  - def-natural-transformation
  - def-equivalence-relation
  - def-fibre-product-schemes-universal-property
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chapter 34 (Topologies on Schemes), Section 34.7 and Chapter 35 (Descent)"
      url: "https://stacks.math.columbia.edu/download/topologies.pdf"
      locator: "Definition 34.7.1 (tag 021L) with Section 34.10 (sheaves on the big fppf site)"
    - title: "Angelo Vistoli, Notes on Grothendieck topologies, fibered categories and descent theory (arXiv:math/0412512)"
      url: "https://arxiv.org/pdf/math/0412512"
      locator: "Sections 2.3.1-2.3.3 (topologies, sheaves) and Section 2.3.7 (sheafification)"
---

## Definition

Throughout, $S$ is a fixed base scheme and $(\mathit{Sch}/S)_{fppf}$ is the
fppf site of [[def-fppf-topology-on-schemes]].

A **presheaf of sets** on $(\mathit{Sch}/S)_{fppf}$ is a contravariant functor
from the category of $S$-schemes to the category of sets
([[def-presheaf-representable-functor-and-representation]],
[[def-functor-and-contravariant-functor]]); the associated representable
presheaf of a scheme is the contravariant functor it represents. It is an
**fppf sheaf** when for every fppf covering $\{T_i\to T\}_{i\in I}$ the
diagram
$$F(T)\longrightarrow\prod_iF(T_i)\rightrightarrows\prod_{i,j}F(T_i\times_TT_j)$$
is an equalizer of sets ([[def-fibre-product-schemes-universal-property]]),
the two maps being the pullbacks along the two projections
$T_i\times_TT_j\to T_i,T_j$. Equivalently, restriction identifies $F(T)$
with the set of families $(s_i)_{i\in I}$, $s_i\in F(T_i)$, whose two
pullbacks to every $T_i\times_TT_j$ agree ([[def-equivalence-relation]] for
the underlying set-theoretic relation); the two descriptions agree because an
equalizer in sets consists of the elements on which the two maps coincide.

A **morphism of presheaves** is a natural transformation
([[def-natural-transformation]]); the presheaves on
$(\mathit{Sch}/S)_{fppf}$ thus form a category. The **sheafification** of a
presheaf $F$ is an fppf sheaf $F^{\mathrm a}$ together with a morphism
$F\to F^{\mathrm a}$ such that every morphism $F\to G$ with $G$ an fppf sheaf
factors uniquely through $F\to F^{\mathrm a}$. When it exists it is unique up
to unique isomorphism, by the usual universal property; in this library its
existence is established separately for the presheaves used below. A
representable presheaf is an fppf sheaf
([[lem-nonaffine-fppf-descent-of-scheme-morphisms]]), under the Axiom of
Choice recorded there, since fppf descent for morphisms of schemes is
effective.

All sheaves below are set-valued unless stated otherwise. The empty family is
an fppf covering of the empty scheme, so for a sheaf the sheaf condition on
that covering forces $F(\varnothing)$ to be a one-point set; this holds in
particular for every representable presheaf, since $\operatorname{Hom}_S(\varnothing,X)$
is a one-point set for every $S$-scheme $X$, because the empty scheme is initial
in the category of $S$-schemes.
