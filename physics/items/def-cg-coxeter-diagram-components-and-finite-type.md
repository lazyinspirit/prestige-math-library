---
id: def-cg-coxeter-diagram-components-and-finite-type
kind: definition
title: "Coxeter diagrams: edges, labels, components and finite type"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 1
deps: [def-hh-coxeter-matrix-word-group-and-length, def-generated-subgroup, def-connected-graph-and-connected-component, def-graph-adjacency-incidence-neighbourhood-and-degree, def-graph-walk-trail-path-and-cycle, def-group]
justified_by: [thm-cg-finite-type-positive-definite-criterion]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Definitions 3.5.1 and 3.5.3 (printed pp. 42-43) for Coxeter diagrams, irreducibility and components; Section 6.9, Table 6.1 (printed p. 104), and Appendix C.1 (printed p. 433) for the finite-type classification"
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Printed p. 2 (Coxeter graph definition), p. 3 (classification preview), and Section 5, printed pp. 12-15: the definition of the Coxeter graph (vertices S, an edge when the order m of ss' is > 2, labels omitted for 3, and infinity for infinite order) and the statement that finite irreducible types are A, B, D, E, F, G, H, I"
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $S$ be a finite set and let $m:S\times S\to\{1,2,3,\dots\}\cup\{\infty\}$ be a
Coxeter matrix on $S$ ([[def-hh-coxeter-matrix-word-group-and-length]]), with
presented group $W$, length function $\ell$ and standard parabolics
$W_T=\langle s:s\in T\rangle$ for $T\subseteq S$ ([[def-generated-subgroup]],
[[def-group]]).

**(1) The diagram.** The **Coxeter diagram** $\Gamma(W,S)$ of $(W,S)$ has vertex
set $S$, and two distinct vertices $s\ne t$ are joined by an edge exactly when
$m(s,t)\ge3$; that edge carries the **label**
$m(s,t)\in\{3,4,5,\dots\}\cup\{\infty\}$. By convention the label $3$ is omitted
(an unlabelled edge has label $3$) and no edge is drawn when $m(s,t)=2$. Thus
$\Gamma$ is a finite simple graph whose edges are labelled in
$\{3,4,\dots\}\cup\{\infty\}$
([[def-graph-adjacency-incidence-neighbourhood-and-degree]]), and $m$ is
recovered from the pair $(S,\Gamma)$ by $m(s,s)=1$; $m(s,t)=m(t,s)=2$ if
$\{s,t\}$ is not an edge; $m(s,t)=3$ if $\{s,t\}$ is an unlabelled edge; and
$m(s,t)=$ the label otherwise. In particular $m\mapsto\Gamma$ is injective on
the Coxeter matrices on $S$. For $T\subseteq S$ the **subdiagram** $\Gamma_T$ is
the induced labelled graph on $T$, i.e. the diagram of the restricted matrix
$m|_{T\times T}$.

**(2) Graph-theoretic vocabulary.** A **cycle** of $\Gamma$ is a cycle of the
underlying simple graph ([[def-graph-walk-trail-path-and-cycle]]); a **path** (or
**chain**) is a diagram whose underlying graph is a path. $\Gamma$ is
**connected** when its underlying graph is connected
([[def-connected-graph-and-connected-component]]); its **components** are the
connected components of the underlying graph, and their vertex sets are
nonempty and partition $S$. For $s\in S$ the **neighbours** of $s$ are
$N(s):=\{t\in S:t\ne s,\ m(s,t)\ge3\}$ and the **degree** of $s$ is $|N(s)|$
([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

**(3) Irreducibility.** $(W,S)$ is **irreducible** when $\Gamma$ is connected,
and **reducible** otherwise. (For $S=\emptyset$ the diagram is empty; the
trivial system is not called irreducible.)

**(4) Finite type.** $(W,S)$ - and, by extension, $\Gamma$ - is **of finite
type**, or **spherical**, when the group $W$ is finite. This is a property of
$W$ itself: **no list of diagrams is part of the definition**, and no
positivity, definiteness or nondegeneracy of any bilinear form, and no geometric
realization, is asserted here.

**(5) Invariance and abstentions.** By the conventions of
[[def-hh-coxeter-matrix-word-group-and-length]], $m(s,t)$ is the order of $st$
in $W$; consequently an isomorphism of Coxeter systems $(W,S)\to(W',S')$ (a
group isomorphism carrying $S$ onto $S'$) matches the two diagrams, so
connectedness, irreducibility and finite type depend only on the isomorphism
type of $(W,S)$. It is **not** asserted here that $W$ is the direct product of
the standard parabolics of its components - that is the content of
[[lem-cg-diagram-products-and-invariant-form-comparison]] - nor that a diagram
of finite type is one of the diagrams classified in
[[thm-cg-finite-coxeter-classification-including-h-and-dihedral]].

## Remarks

- **The diagram is a complete record of the matrix.** The reconstruction rule
  displayed in (1) is a dictionary, not a theorem about groups: it lists the
  value of $m$ on every ordered pair of vertices in terms of $(S,\Gamma)$, and
  therefore shows simultaneously that distinct Coxeter matrices on $S$ give
  distinct labelled graphs, and that the induced labelled subgraph on $T$ is the
  diagram of the restricted matrix $m|_{T\times T}$.
- **Conventions used consistently on this page.** Labels lie in
  $\{3,4,\dots\}\cup\{\infty\}$; a label $3$ edge is drawn unlabelled; a pair
  with $m(s,t)=2$ is not joined at all. Consequently the edge set of $\Gamma$ is
  $\{\{s,t\}:s\ne t,\ m(s,t)\ge3\}$, and $N(s)$ of (2) is exactly the open
  neighbourhood of $s$ in the underlying simple graph.
- **What finite type does not mean here.** In (4) "spherical" is a synonym for
  finiteness of $W$ only. The equivalence with positive definiteness of the
  Coxeter form is a theorem
  ([[thm-cg-finite-type-positive-definite-criterion]]), and the explicit list of
  finite type diagrams is the content of
  [[thm-cg-finite-coxeter-classification-including-h-and-dihedral]]; neither is
  built into the definition.
