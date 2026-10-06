---
id: def-c1-germ-of-a-local-diffeomorphism-at-a-point
kind: definition
title: "C¹ germs of local diffeomorphisms at a point"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-c-one-map-and-local-inverse, def-group, def-subgroup]
justified_by: [lem-c1-germs-of-local-diffeomorphisms-form-a-group]
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§2.16.2, Theorem 2.119, printed pp. 106–107 (the C¹ interval-germ group used in the local proof)"
dependency_level: 0
---

## Definition

Let $T$ be a one-dimensional manifold equipped with a $C^1$ atlas: its charts
are homeomorphisms onto open subsets of $\mathbb R$ whose transition maps are
$C^1$ with $C^1$ inverses, and "of class $C^1$" for maps of $T$ means of class
$C^1$ in these charts, which is exactly the Euclidean notion of
[[def-c-one-map-and-local-inverse]]. Fix $x\in T$.

A **$C^1$ local diffeomorphism of $T$ at $x$ fixing $x$** is a map
$f:U\to T$ defined on an open neighbourhood $U\subseteq T$ of $x$ such that
$f(U)$ is open, $f:U\to f(U)$ is a bijection, $f(x)=x$, and both $f$ and
$f^{-1}:f(U)\to U$ are of class $C^1$. Two such local diffeomorphisms
$f:U\to T$ and $g:V\to T$ define the same **$C^1$ germ at $x$** when they agree
on some neighbourhood of $x$ contained in $U\cap V$; write $f\sim_x g$ for this
relation.

The equivalence classes of $\sim_x$ are the **$C^1$ germs of local
diffeomorphisms of $T$ at $x$**, and their set is denoted
$\operatorname{Diff}^1_x(T)$. Composition of representatives induces a binary
operation
$$\operatorname{Diff}^1_x(T)\times\operatorname{Diff}^1_x(T)\to\operatorname{Diff}^1_x(T),$$
the class of $f\circ g$ being independent of the chosen representatives, and
with this operation $\operatorname{Diff}^1_x(T)$ is a group ([[def-group]])
whose identity is the germ of $\mathrm{id}_T$. Well-definedness of the
operation, associativity, the two-sided identity and two-sided inverses are
verified in [[lem-c1-germs-of-local-diffeomorphisms-form-a-group]].

Finally suppose an orientation of a neighbourhood of $x$ is fixed, represented
by a chart $t$ at $x$ with $t(x)=0$; write $\tilde f$ for the coordinate
expression of a representative $f$. The sign of the derivative
$\tilde f'(0)$ is independent of the positively oriented chart and of the
representative of the germ, so the germs whose representatives have
$\tilde f'(0)>0$ in such a chart are well defined. They form a subgroup
$$\operatorname{Diff}^{1,+}_x(T)\le\operatorname{Diff}^1_x(T)$$
([[def-subgroup]]), the **orientation-preserving $C^1$ germs at $x$**; both the
invariance of the sign and the subgroup property are proved in
[[lem-c1-germs-of-local-diffeomorphisms-form-a-group]].

Only the case $\dim T=1$ is used in this pair, and there only for the transverse
coordinate of a codimension-one foliation, where the sign of the derivative is
the transverse orientation datum.
