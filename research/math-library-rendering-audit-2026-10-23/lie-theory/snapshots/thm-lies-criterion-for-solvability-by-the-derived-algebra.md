---
id: thm-lies-criterion-for-solvability-by-the-derived-algebra
kind: theorem
title: Solvability criterion via the derived algebra
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [cor-the-derived-algebra-of-a-finite-dimensional-solvable-lie-algebra-is-nilpotent-in-characteristic-zero, prop-nilpotent-lie-algebras-are-solvable, prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Corollary 3.8"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Corollary 3.8, printed p. 17"
---

## Statement

A finite-dimensional Lie algebra $\mathfrak g$ over a characteristic-zero
field is solvable if and only if its derived algebra
$\mathfrak g'=[\mathfrak g,\mathfrak g]$ is nilpotent.

## Facts & Assumptions

**Given:** A finite-dimensional Lie algebra $\mathfrak g$ over a characteristic-zero field.

[L1] The derived algebra of a solvable finite-dimensional characteristic-zero Lie algebra is nilpotent ([[cor-the-derived-algebra-of-a-finite-dimensional-solvable-lie-algebra-is-nilpotent-in-characteristic-zero]]).

[L2] Every nilpotent Lie algebra is solvable ([[prop-nilpotent-lie-algebras-are-solvable]]).

[L3] A Lie algebra with a solvable ideal and solvable quotient is solvable ([[prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathfrak g$ is solvable, [L1] says directly that $\mathfrak g'$ is nilpotent. This is the direction that uses finite dimensionality and characteristic zero. [given, L1]

2.1 Conversely suppose $\mathfrak g'$ is nilpotent. It is solvable by [L2], while $\mathfrak g/\mathfrak g'$ is abelian and hence solvable. Applying the extension assertion [L3] to the ideal $\mathfrak g'$ shows that $\mathfrak g$ is solvable. This reverse direction is valid over every field and includes $\mathfrak g'=0$ and $\mathfrak g=0$. [L2, L3, algebra] ∎
