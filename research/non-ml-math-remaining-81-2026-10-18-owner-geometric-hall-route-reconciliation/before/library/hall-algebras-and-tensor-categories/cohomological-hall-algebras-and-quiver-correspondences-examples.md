---
page: cohomological-hall-algebras-and-quiver-correspondences-examples
title: "Cohomological Hall Algebras and Quiver Correspondences: Examples and Counterexamples"
status: draft
items: []
examples:
  - ex-jordan-quiver-extension-correspondence
  - ex-jordan-quiver-potential-critical-locus
---

These examples test the A-page conventions at a loop quiver, where extension
fibers need not be finite, and at an isolated critical point, where local
monodromy is visible. They do not supply the unresolved quotient-stack
Borel–Moore operation bridge or any general CoHA action theorem.

Companion: [[cohomological-hall-algebras-and-quiver-correspondences]].

## Reading prerequisites

Read [[cohomological-hall-algebras-and-quiver-correspondences]] first. In
particular, use its subrepresentation-first exact-sequence convention and its
distinction between ordinary and on-shell potential-dependent CoHAs.

## Worked examples

### One-loop quiver in dimension two

For the Jordan quiver with dimensions $1,1$, the exact-sequence atlas is
the incidence space of pairs $(A,L)$ with $L\subset\mathbb C^2$ a line
and $A(L)\subseteq L$. In an adapted basis,
\[
A=\begin{pmatrix}\lambda&c\\0&\mu\end{pmatrix}.
\]
The block extension coordinate and unipotent splitting action both have
dimension one, so $q$ has stack-relative dimension zero. The fiber of $p$
over a scalar matrix is all of $\mathbb P^1$, while a diagonal matrix with
distinct eigenvalues has two invariant lines and a nontrivial $2\times2$
Jordan block has one. Thus the forgetful map is proper without having finite
fibers. The example uses the specified change-of-basis action to fix the sign
of the off-diagonal coordinate.

### The potential $x^2$

For the one-loop quiver in dimension one, $W=x^2$ gives the function
$z\mapsto z^2$. Its only critical point is zero; a small nonzero fiber has
two points, so reduced zeroth cohomology is one-dimensional. A positive loop
around the critical value exchanges the roots and acts by $-1$ on the
difference of the two point classes. This checks the stated local monodromy
normalization. It does not prove equivariant Thom–Sebastiani, proper
pushforward compatibility, or associativity for the standard critical CoHA.

## Boundaries and sources

The examples check the exact sequence, properness, zero-dimensional stack
shift, critical locus, and local monodromy conventions. Neither example
identifies ordinary Ringel–Hall multiplication with CoHA multiplication or
establishes a general CoHA–Yangian comparison.

The exact source passages and dispositions are recorded in the companion
[batch notes](../../research/non-ml-math-remaining-81-2026-10-18-batch-55.notes.md)
and [source coverage](../../research/non-ml-math-remaining-81-2026-10-18-batch-55.coverage.json).
