---
id: def-easton-function
kind: definition
title: Easton functions on regular cardinals
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-regular-continuum-function-constraints, thm-cofinality-basics, def-cofinality]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Thomas Jech, Set Theory, Chapter 15, Theorem 15.18 conditions (15.7), printed p.232"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15_applications_of_forcing.pdf"
    - title: "Kameryn J. Williams, Math 655 Lecture Notes 2.2, Definition 52, PDF p.11"
      url: "https://juliakw.net/teaching/2019/math655/part2.2.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

An **Easton function** is a function $F$ such that:

- $\operatorname{dom}(F)$ is a set, or a definable class, of infinite regular
  cardinals ([[def-cofinality]]);
- $F(\kappa)$ is a cardinal for every $\kappa\in\operatorname{dom}(F)$;
- $F$ is **nondecreasing**: $F(\kappa)\le F(\lambda)$ whenever
  $\kappa\le\lambda$ are in $\operatorname{dom}(F)$;
- $\operatorname{cf}(F(\kappa))>\kappa$ for every
  $\kappa\in\operatorname{dom}(F)$.

Because $\operatorname{cf}(\mu)\le\mu$ for every ordinal $\mu$
([[thm-cofinality-basics]]), the last clause forces
$\kappa<\operatorname{cf}(F(\kappa))\le F(\kappa)$, so the values of an Easton
function automatically satisfy the strictness $F(\kappa)>\kappa$; the two
displayed inequalities together are the classical form (15.7)(i) and (iii) of
[[thm-regular-continuum-function-constraints]]. An Easton function with a set
domain is a **set-sized** Easton function.

The **class version** is understood over a two-sorted class theory in which the
set variables range over the sets of the ground model and $F$ itself is one of
the classes; there $F$ is required to be definable from set parameters, its
domain is the class of all infinite regular cardinals, and the four clauses above
are read with set quantifiers and the class parameter $F$. A proper-class
Easton function is not a set of ordered pairs. Its set-sized restrictions
specify the cardinal index data for set-sized Easton products; forcing
conditions are partial binary-valued functions on the associated triples. The class-theoretic ground assumptions are recorded separately on this page
and are not part of the definition of $F$.
