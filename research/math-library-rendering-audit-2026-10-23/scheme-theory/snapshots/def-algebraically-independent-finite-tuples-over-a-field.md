---
id: def-algebraically-independent-finite-tuples-over-a-field
kind: definition
title: "Algebraic independence in a field extension"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-field-extension-generated-subfields-and-simple-extension
  - def-polynomial-ring-on-a-family-of-indeterminates
  - thm-polynomial-ring-on-a-family-is-a-commutative-ring
  - thm-universal-property-of-a-polynomial-ring-on-a-family
  - def-algebraic-and-transcendental-elements
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Fields, Definition 9.26.1 (tag 030D)"
      url: "https://stacks.math.columbia.edu/tag/030D"
---

## Definition

Let $K/k$ be a field extension and let $S\subseteq K$. The **evaluation map**
$$\operatorname{ev}_S:k[X_s:s\in S]\longrightarrow K$$
is the unique ring homomorphism extending the field inclusion $k\hookrightarrow
K$ and sending each indeterminate $X_s$ to $s$. The set $S$ is
**algebraically independent over $k$** when $\operatorname{ev}_S$ is injective.
Equivalently, no nonzero polynomial involving finitely many indeterminates
$X_s$ with $s\in S$ evaluates to zero at the corresponding elements of $S$.

## Boundary cases and examples

- **Empty set:** When $S=\varnothing$, the polynomial ring is $k$ and
  $\operatorname{ev}_S$ is the field inclusion $k\hookrightarrow K$, so the
  empty set is algebraically independent.
- **Zero element:** If $0\in S$, then the nonzero polynomial $X_0$ evaluates to
  zero. Thus any set containing zero is algebraically dependent.
- **Singleton:** For $S=\{a\}$, the evaluation map is injective exactly when no
  nonzero polynomial in $k[X]$ vanishes at $a$, that is, exactly when $a$ is
  transcendental over $k$ ([[def-algebraic-and-transcendental-elements]]).
- **Finite tuples:** For a finite set $S=\{s_1,\ldots,s_r\}$, the condition
  uses the polynomial ring in those $r$ variables. It includes $r=0$ and does
  not require an ordering of $S$; renaming variables preserves injectivity.
