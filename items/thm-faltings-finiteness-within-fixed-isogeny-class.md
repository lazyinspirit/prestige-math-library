---
id: thm-faltings-finiteness-within-fixed-isogeny-class
kind: theorem
title: "Finiteness of isomorphism classes within a fixed isogeny class"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - lem-faltings-height-change-under-isogeny
  - thm-abelian-variety-frobenius-weights
  - thm-faltings-semisimplicity-of-tate-module
  - thm-faltings-tate-hom-isomorphism
  - thm-raynaud-isogeny-kernel-differential-exponent
  - thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Faltings–Wüstholz, *Rational Points*, Chapter V, Theorems 3.5 and 3.8"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
      locator: "Printed pp. 173–174 and 176–177; fixed-isogeny-class finiteness from Raynaud and height bounds."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC, CC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC, DC, and CC. Let $K$ be a number field, $S$ a finite set of finite places of $K$, and $A/K$ an abelian variety with good reduction outside $S$. Then only finitely many $K$-isomorphism classes of abelian varieties $B/K$ are both $K$-isogenous to $A$ and have good reduction outside $S$.

## Statement references

[[lem-faltings-height-change-under-isogeny]]

[[thm-raynaud-isogeny-kernel-differential-exponent]]

[[thm-faltings-tate-hom-isomorphism]]

[Faltings–Wüstholz, *Rational Points*, Chapter V, §§3–4](https://yhzhumath.github.io/Mordell2024/RP.pdf)

[Raynaud 1974, Théorème 4.1.1](https://www.numdam.org/article/BSMF_1974__102__241_0.pdf)

## Facts & Assumptions

**Given:** AC, DC, and CC; a number field $K$, finite set $S$, and abelian variety $A/K$ with good reduction outside $S$.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A3] [[def-countable-choice]]: CC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[lem-faltings-height-change-under-isogeny]]: an isogeny changes Faltings height by its degree and the kernel differential exponent.

[F3] [[thm-faltings-tate-hom-isomorphism]]: Galois-equivariant maps of rational Tate modules are induced by abelian-variety homomorphisms.

## Proof status

The unrestricted bounded-stable-height assertion formerly cited as F2 is false: quadratic twists give infinitely many arithmetic forms of one geometric elliptic curve. It is excluded from this proof route. Faltings–Wüstholz, Chapter V §3, uses a semistable principally polarized bounded-height finiteness theorem together with a reduction of the relevant isogenies and a differential estimate. A corrected fixed-$S$ bounded-height theorem could also supply the required finiteness once a uniform height bound for this family is proved. Neither corrected finiteness theorem is supplied here. The necessary semistable/model reduction, valid replacement for the refuted Raynaud statement, and uniform-height argument remain unresolved; this theorem remains held.

Unresolved proof prerequisite (not an accepted given): The Raynaud bound on possible kernel differential exponents and the arithmetic comparison that makes heights uniformly bounded within the fixed isogeny class are not proof-closed. Proposed supplier ID: `lem-faltings-isogeny-degree-reduction-for-fixed-class` (not scaffolded or accepted in this run; proposed placement is this A page before this consumer).
