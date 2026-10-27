---
page: rational-cherednik-algebras-and-category-o-examples
title: "Rational Cherednik Algebras and Their Category O: Examples and Counterexamples"
status: published
requires: [rational-cherednik-algebras-and-category-o]
items: [ex-rational-cherednik-trivial-group-is-the-weyl-algebra,
  cex-rational-cherednik-category-o-not-semisimple-at-half]
examples: []
---

This companion checks the A-page conventions in two small cases. The trivial group gives the first Weyl algebra. In rank one at $c=1/2$, the polynomial standard module contains $x\mathbb C[x]$ and the resulting short exact sequence is nonsplit, so category $\mathcal O$ is not semisimple at that parameter.

Companion to [[rational-cherednik-algebras-and-category-o]].

## Examples

For $W=\{1\}$ and $\dim\mathfrak h=1$, the reflection sum vanishes and $[y,x]=1$; the polynomial standard module is $\mathbb C[x]$ with $y=d/dx$. The full presentation and verification are in [[ex-rational-cherednik-trivial-group-is-the-weyl-algebra]].

For $W=\mathbb Z/2$ acting on $\mathfrak h=\mathbb C$ by $s(x)=-x$, the fixed normalization is $[y,x]=1-2cs$. At $c=1/2$, the explicit formula
$$y x^n=\begin{cases}n x^{n-1},&n\text{ even},\\(n-1)x^{n-1},&n\text{ odd},\end{cases}$$
shows that $x\mathbb C[x]$ is a submodule. The quotient is the trivial one-dimensional module, and no invariant complement exists because multiplication by $x$ has no nonzero polynomial eigenvector. See [[cex-rational-cherednik-category-o-not-semisimple-at-half]].

## Scope

These finite computations test the sign and normalization of the A-page relations. The rank-one sequence refutes semisimplicity at $c=1/2$; it makes no claim about other parameter values. Source locators and the inspected full-text evidence appear in the batch coverage record.

## Definition, diagram, and repair contracts

Apply the [definition and diagram contracts](../../research/physics-algebras-planning-2026-10-17/definition-and-diagram-contracts.md) and [prerequisite and repair holds](../../research/physics-algebras-planning-2026-10-17/prerequisites.md) before treating examples as suppliers. No diagram is needed for these finite algebra calculations; any later diagram must state its objects, maps, orientations and algebraic verification. The lane reference is [05-hecke](../../research/physics-algebras-planning-2026-10-17/dossiers/05-hecke.md) and its [source inventory](../../research/physics-algebras-planning-2026-10-17/sources/05-hecke/README.md). The full placement record is the [placed-pages inventory](../../research/physics-algebras-planning-2026-10-17/splice/placed-pages.json), entry `rational-cherednik-algebras-and-category-o-examples`; the original audited research inventory is unchanged.
