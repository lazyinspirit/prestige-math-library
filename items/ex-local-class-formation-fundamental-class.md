---
id: ex-local-class-formation-fundamental-class
kind: example
title: The local fundamental class and invariant map
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-local-class-formation-for-finite-residue-local-field
- lem-local-unramified-degree-two-cohomology-and-inflation
- def-axiom-of-choice
- def-dependent-choice
dependency_level: 10
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
generation:
  role: example
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter III §2, definition of the local fundamental class, printed pp.105–106.
verification:
  precheck: n/a
---

## Example

Assume AC and DC. Let $K$ be a complete discretely valued field with finite residue field, and let $L/K$ be a finite Galois extension of degree $2$ whose ramification index is $1$ and whose residue-field extension has degree $2$. Put $H=\operatorname{Gal}(L/K)$. In the local class formation, the relative fundamental class is the unique $u_{L/K}\in H^2(H,L^\times)$ whose invariant is $1/2\pmod{\mathbb Z}$; it is the nonzero element of this group.

## Example references

[[thm-local-class-formation-for-finite-residue-local-field]]

[Milne, Class Field Theory, Chapter III §2](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** AC and DC, a finite-residue complete discretely valued field $K$, and the unramified quadratic extension $L/K$ in the Example.

[A1] AC and DC are the hypotheses of the local cohomology construction. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] The local class formation uses unramified inflation, valuation, the inverse connecting map and arithmetic Frobenius evaluation. [[thm-local-class-formation-for-finite-residue-local-field]]

[F2] At a finite unramified level of degree $n$, this construction embeds degree-two cohomology as $(\frac1n\mathbb Z)/\mathbb Z$, with cyclic valuation class $r\bmod n$ mapping to $r/n$. [[lem-local-unramified-degree-two-cohomology-and-inflation]]

## Verification

**Given:** The data above.

1.1 The ramification and residue-degree hypotheses make $L/K$ the degree-two unramified level. By [F2] its relative invariant is an isomorphism onto $\frac12\mathbb Z/\mathbb Z$. Hence the class mapping to $1/2$ exists and is unique; its normalization is precisely [F1]'s invariant. This uses the finite unramified calculation and no general continuous LHS theorem. [A1, F1, F2, given]

1.2 The element $1/2$ has order two and is nonzero in $\mathbb Q/\mathbb Z$. Its unique preimage therefore has order two and generates the two-element relative group. This is the asserted fundamental class. [F2, step 1.1, algebra] ∎
