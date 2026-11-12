---
id: lem-author-13e6fe931c45-weight-one-identifications
kind: lemma
title: Low-degree consequences of a weight-one comparison
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - lem-author-13e6fe931c45-shifted-units
  - lem-author-13e6fe931c45-cone-exact-range
  - math:def-axiom-of-choice
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  lem-author-13e6fe931c45-shifted-units: mathematical-premise
  lem-author-13e6fe931c45-cone-exact-range: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
formulation_deps:
  - def-motivic-cohomology
  - lem-author-13e6fe931c45-shifted-units
  - lem-author-13e6fe931c45-cone-exact-range
  - math:def-axiom-of-choice
argument_deps:
  - def-motivic-cohomology
  - lem-author-13e6fe931c45-shifted-units
  - lem-author-13e6fe931c45-cone-exact-range
  - math:def-axiom-of-choice
dependency_level: 13
---

## Statement
Assume the Axiom of Choice and compatible fixed universe and site-size bounds for both [[lem-author-13e6fe931c45-shifted-units]] and [[def-motivic-cohomology]]. In particular retain the motivic functor's nested universes with $\omega$ in its scheme-data universe; universe existence is separately assumed. Let $X$ be a qcqs scheme over a field, and suppose a morphism $f:R\Gamma_{\rm Nis}(X,\mathbb G_m)[-1]\to\mathbb Z(1)_{\rm mot}(X)$ has cofiber supported in degrees $>3$. Then it induces $H^{i-1}_{\rm Nis}(X,\mathbb G_m)\cong H^{i,1}_{\rm mot}(X,\mathbb Z)$ for $i\leq3$. In particular the motivic groups are zero for $i\leq0$, global units for $i=1$, and the Picard group for $i=2$.

## Facts & Assumptions

**Given:** $X$, $f$, the cofiber bound, Choice, and the compatible fixed motivic and Nisnevich universe and site-size bounds.

**Goal:** Derive the displayed cohomology identifications.

[A1] The Choice premise is [[math:def-axiom-of-choice]]. Use the small Nisnevich site and derived sections of [[lem-author-13e6fe931c45-shifted-units]] and the compatible fixed scheme, site and coefficient bounds of [[def-motivic-cohomology]]. These are inherited when [F2] is used in both proof steps. The cofiber-connectivity deduction in [F1] introduces no additional choice principle.

[F1] The cofiber bound gives an isomorphism on cohomology through degree three ([[lem-author-13e6fe931c45-cone-exact-range]]).

[F2] The source groups and their low degrees are identified in [[lem-author-13e6fe931c45-shifted-units]]. Motivic cohomology is cohomology of the target complex ([[def-motivic-cohomology]]).

## Proof

1.1 Apply [F1] to $f$. By [F2], the source of the resulting degree-$i$ isomorphism is $H^{i-1}_{\rm Nis}(X,\mathbb G_m)$ and the target is $H^{i,1}_{\rm mot}(X,\mathbb Z)$. [A1, F1, F2, given]

2.1 Substitute the computations of [F2] for $i\leq2$. This gives zero, units and the Picard group in the stated ranges, retaining the assumptions required by the supplier. [A1, F2, step 1.1] ∎
