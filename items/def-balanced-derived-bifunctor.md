---
id: def-balanced-derived-bifunctor
kind: definition
title: "A balanced derived bifunctor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied, def-natural-transformation, thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor, thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Definition

Assume the Axiom of Dependent Choice. Let
$\mathcal A,\mathcal C,\mathcal D$ be abelian categories, let
$B:\mathcal A^{\mathrm{op}}\times\mathcal C\to\mathcal D$ be additive in
each variable, let $P$ be supplied projective resolution data on a class
$\mathcal D_A$ in $\mathcal A$, and let $I$ be supplied injective resolution
data on a class $\mathcal D_C$ in $\mathcal C$. Assume moreover that for each
fixed $A\in\mathcal D_A$ the covariant functor
$B(A,-):\mathcal C\to\mathcal D$ is left exact, and that for each fixed
$C\in\mathcal D_C$ the functor
$B(-,C):\mathcal A^{\mathrm{op}}\to\mathcal D$ is left exact.

A **balanced derived bifunctor relative to $(P,I)$ on
$\mathcal D_A^{\mathrm{op}}\times\mathcal D_C$** consists of the two candidate
one-variable right-derived constructions from
[[prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied]]
together with, for every $n\ge0$, a natural isomorphism
$$R_I^n(B(A,-))(C)\xrightarrow{\sim}R_{P^{\mathrm{op}}}^n(B(-,C))(A)$$
natural in $A\in\mathcal D_A$ and $C\in\mathcal D_C$.
These isomorphisms must satisfy:

1. in degree $0$, when the two candidates are identified with $B(A,C)$ by
   [[thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor]]
   on $\mathcal C$ and on $\mathcal A^{\mathrm{op}}$, the balance
   isomorphism becomes the identity of $B(A,C)$;
2. the isomorphisms are natural in both variables in the sense of
   [[def-natural-transformation]].

This is a definition relative to the displayed supplied data $P$ and $I$; it
does not impose an unquantified condition involving alternative data. The
definition records extra comparison data, while the previous proposition only
constructs the two candidates.
