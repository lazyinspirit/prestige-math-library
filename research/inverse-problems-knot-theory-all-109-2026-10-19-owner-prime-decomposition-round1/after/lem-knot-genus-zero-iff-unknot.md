---
id: lem-knot-genus-zero-iff-unknot
kind: lemma
title: "A knot has genus zero exactly when it is the unknot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-knot-connected-sum-and-prime-knot
  - def-oriented-seifert-surface-and-knot-genus
  - def-countable-choice
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - thm-isotopy-extension
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Burde and Zieschang, Knots, 2nd revised and extended edition"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf"
      locator: "Chapter 7, §§7.4–7.7, printed pp.93–94"
    - title: "Stefan Friedl, Introduction to Knots and Links, 2024 lecture notes"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
      locator: "Chapter 11, Proposition 11.7, printed pp.160–162; source explicitly leaves smooth ball details to the reader"
---

## Statement

Assume the Axiom of Countable Choice. For every smooth oriented knot $K$ in $S^3$, its Seifert genus is zero if and only if $K$ is ambient isotopic through orientation-preserving diffeomorphisms to the standard unknot.

## Statement references

[[def-knot-connected-sum-and-prime-knot|The standard unknot convention]]

[[def-oriented-seifert-surface-and-knot-genus|Seifert genus]]

## Facts & Assumptions

**Given:** AC$_\omega$ and a smooth oriented knot $K$.

[F1] Genus is the minimum genus of a connected compact oriented spanning surface; a genus-zero surface with one boundary circle is a disk. ([[def-oriented-seifert-surface-and-knot-genus]], [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

[F2] An isotopy of an embedded compact circle extends to an ambient isotopy under AC$_\omega$. ([[thm-isotopy-extension]], [[def-countable-choice]])

## Proof

**Given:** AC$_\omega$ and $K$.

1.1 If $K$ is ambient isotopic to the standard unknot, carry its planar spanning disk through the isotopy. This is a genus-zero spanning surface, and nonnegativity gives $g(K)=0$. [given, F1, construct]

1.2 Conversely, let $e:D^2\to S^3$ parametrize a genus-zero spanning surface with oriented boundary $K$. For $0<r\le1$ the circles $x\mapsto e(rx)$, $x\in S^1$, are embedded and form a smooth isotopy from $K$ to a sufficiently small circle about $e(0)$. This contracts circles inside the embedded disk; it does not contract the final circle to a point. Choose a positive ambient coordinate chart about $e(0)$ and write its expression of $e$ as $E$ with $E(0)=0$. For small fixed $r>0$, the maps $x\mapsto E(trx)/t$ for $0<t\le1$, continued at $t=0$ by $r\,dE_0(x)$, are an isotopy of embedded circles in that chart. Indeed Taylor's formula gives the smooth extension and, on a small disk, the derivatives are uniformly close to the injective linear map $r\,dE_0$; projection onto its image plane gives a uniform injectivity estimate by integration along line segments. Their images lie in the chart after decreasing $r$. [given, F1, construct]

2.1 The final linear ellipse is isotopic to an oriented round circle in its plane: use the positive square root of its two-dimensional Gram matrix to deform its ordered independent spanning vectors to an orthonormal pair. Complete that pair by its positive normal to a positive ambient frame, then rotate it to the fixed coordinate frame and change the radius inside a coordinate ball. If necessary a half-turn in three-space reverses the plane-circle orientation while preserving the ambient orientation. The same shrinking argument applied to the fixed standard disk identifies this small coordinate circle with the standard unknot. Extend the concatenated circle isotopies by [F2]; each ambient diffeomorphism preserves orientation since it starts at the identity. Thus $K$ is the standard oriented unknot. [F2, step 1.2, construct] ∎

## Proof references

[[thm-isotopy-extension]]
