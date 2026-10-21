---
id: lem-torus-knot-sign-changes-give-mirror-or-reversal
kind: lemma
title: "Sign changes of torus-knot parameters give mirror and reversal"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-coprime-torus-knot
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "Proposition 5.1.4 and Lemma 5.1.5, printed pp. 27–28"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. For coprime nonzero integers $p,q$, the fixed orientation-reversing reflection used for the mirror convention sends the oriented curve $T(p,q)$ to the image-oriented curve $T(p,-q)$, and reversing the orientation of $T(p,q)$ gives $T(-p,-q)$.

## Statement references

[[def-coprime-torus-knot|The torus-knot parameterization and mirror convention]]

[Cattabriga and Francaviglia, Proposition 5.1.4 and Lemma 5.1.5](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

## Facts & Assumptions

**Given:** Countable Choice, coprime nonzero integers $p,q$, and the parameterization in the torus-knot definition.

[A1] Countable Choice is the choice-function principle for sequences of nonempty sets ([[def-countable-choice]]).

[F1] [[def-coprime-torus-knot]] parameterizes $T(p,q)$ by $(r e^{2\pi i p s},\sqrt{1-r^2}e^{2\pi i q s})$ and fixes reflection in the second coordinate as the mirror convention.

## Proof

1.1 Applying $(z_1,z_2)\mapsto(z_1,\overline{z_2})$ to the parameterization changes its second angular coordinate from $q s$ to $-q s$ and leaves the first coordinate and parameter direction unchanged. Its image is therefore exactly the oriented curve $T(p,-q)$. [A1, F1, given, algebra]

2.1 Replacing the parameter $s$ by $-s$ traverses the same geometric curve in the opposite direction and changes the angular winding pair $(p,q)$ to $(-p,-q)$. Hence the reversed orientation is the orientation specified for $T(-p,-q)$. [A1, F1, given, algebra] ∎

