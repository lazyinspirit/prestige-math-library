---
id: lem-knot-genus-zero-iff-unknot
kind: lemma
title: "A knot has genus zero exactly when it is the unknot"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-knot-connected-sum-and-prime-knot
  - def-oriented-seifert-surface-and-knot-genus
  - def-countable-choice
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - thm-isotopy-extension
  - lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations
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
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Countable Choice. For every smooth oriented knot $K$ in $S^3$, its Seifert genus is zero if and only if $K$ is ambient isotopic through orientation-preserving diffeomorphisms to the standard unknot.

## Statement references

[[def-knot-connected-sum-and-prime-knot|The standard unknot convention]]

[[def-oriented-seifert-surface-and-knot-genus|Seifert genus]]

## Facts & Assumptions

**Given:** AC$_\omega$ and a smooth oriented knot $K$.

[F1] Genus is the minimum genus of a connected compact oriented spanning surface; a genus-zero surface with one boundary circle is topologically a disk. For smooth input, the disk-and-band construction in steps 7.1–12.1 of [[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]] gives a smooth disk parametrization, including its boundary collar: its interval and circle extensions are smooth for smooth data, and all subsequent disk/band moves are smooth. ([[def-oriented-seifert-surface-and-knot-genus]], [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

[F2] An isotopy of an embedded compact circle extends to an ambient isotopy under AC$_\omega$. ([[thm-isotopy-extension]], [[def-countable-choice]])

## Proof

**Given:** AC$_\omega$ and $K$.

1.1 If $K$ is ambient isotopic to the standard unknot, carry its planar spanning disk through the isotopy. This is a genus-zero spanning surface, and nonnegativity gives $g(K)=0$. [given, F1, construct]

1.2 Conversely, use [F1] to let a smooth embedding $e:D^2\to S^3$ parametrize a genus-zero spanning surface with oriented boundary $K$. For $0<r\le1$ the circles $x\mapsto e(rx)$, $x\in S^1$, are embedded and form a smooth isotopy from $K$ to a sufficiently small circle about $e(0)$. This contracts circles inside the embedded disk; it does not contract the final circle to a point. Choose a point outside this spanning disk and the fixed standard disk; their union has empty interior, since finitely many surface slice charts cover each compact disk. Its stereographic complement is one common positive chart $\mathbb R^3$ containing both disks. Write $p$ for the chart image of $e(0)$ and $E$ for the expression of $e$ translated by $-p$, so $E(0)=0$. For small fixed $r>0$, the maps $x\mapsto E(trx)/t$ for $0<t\le1$, continued at $t=0$ by $r\,dE_0(x)$, are an isotopy of embedded circles in that chart. Indeed Taylor's formula gives the smooth extension and, on a small disk, the derivatives are uniformly close to the injective linear map $r\,dE_0$; projection onto its image plane gives a uniform injectivity estimate by integration along line segments. Their images lie in the chart after decreasing $r$. [given, F1, construct]

2.1 The final linear ellipse is isotopic to an oriented round circle in its plane: use the positive square root of its two-dimensional Gram matrix to deform its ordered independent spanning vectors to an orthonormal pair. Complete that pair by its positive normal to a positive ambient frame. Apply the same shrinking and linearization to the fixed standard disk in the common stereographic chart, obtaining an oriented round circle about its interior point $q$. Join the two round circles explicitly in this $\mathbb R^3$: move the center along the segment from $p$ to $q$, interpolate their positive radii, and rotate the first positive frame to the second through rotations in $SO(3)$ (successive rotations about coordinate axes suffice). Each intermediate circle is embedded, and the whole finite track is compact in the chart. A half-turn about a diameter reverses a circle orientation if required while preserving the ambient orientation. Reverse the standard disk shrinking to finish at the fixed standard unknot. Extend the concatenated circle isotopies by [F2]; each ambient diffeomorphism preserves orientation since it starts at the identity. Thus $K$ is the standard oriented unknot. [F2, step 1.2, construct] ∎

## Sources

[[thm-isotopy-extension]]
