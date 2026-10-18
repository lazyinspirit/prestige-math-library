---
id: rem-algebraic-weyl-modules-do-not-automatically-exponentiate
kind: remark
title: "Algebraic Weyl modules and exponentiated representations are different objects"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-polynomial-weyl-algebra, thm-polynomial-weyl-algebra-normal-ordered-basis]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "François Dumas, Noncommutative Invariants, §2.1.1"
      url: "https://lmbp.uca.fr/~fdumas/fichiers/B-Mat60.pdf"
    - title: "Pavel Etingof, Lectures on Calogero-Moser Systems, Lecture 8"
      url: "https://math.mit.edu/~etingof/zlecnew.pdf"
---

## Remark

The algebra $W_n(k;\hbar)$ is the algebraic tensor-algebra quotient defined in [[def-polynomial-weyl-algebra]]. Its definition supplies no topology, involution, Hilbert space, or one-parameter unitary groups. This page therefore proves no infinitesimal-to-exponentiated representation theorem.

Any later bridge from unbounded generators $Q_i,P_j$ to exponentiated Weyl relations must state a common invariant dense domain on which all products $Q_iP_j$ and $P_jQ_i$ are defined, the self-adjointness assumptions on the generators, the strong-continuity/regularity of the unitary groups, and the argument integrating the commutators. Those are unproved prerequisites here; arbitrary algebraic $W_n(k;\hbar)$-modules are not treated as regular unitary representations. The designated later page is *Exponentiated Weyl Relations and Regular Representations* (page ID `regular-weyl-representations-and-stone-von-neumann`).
