---
id: thm-normal-surface-unknot-algorithm-terminates-and-is-correct
kind: theorem
title: "Termination, correctness, and bounds of normal-surface unknot recognition"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - alg-haken-jaco-tollefson-unknot-recognition
  - thm-haken-jaco-tollefson-unknot-recognition-procedure-properties
  - thm-haken-finite-box-search-correctness
  - thm-jaco-tollefson-vertex-search-correctness
  - lem-meridian-disk-criterion-for-unknot-exterior
  - lem-good-linear-size-exterior-triangulation-from-diagram
  - thm-smooth-knot-has-compatible-pl-exterior-model
  - lem-normal-coordinate-matching-equations-and-finite-bounds
  - lem-small-integer-matrix-linear-algebra-in-quadratic-logarithmic-space
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)"
      url: "https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf"
      locator: "§§4–8 and §10, complete disk criterion, normal-surface searches, triangulation bounds and certificate analysis."
    - title: "Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture notes (2009)"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf"
      locator: "§§14.1–14.4, complete six-page note on normal surfaces and knot recognition."
---

## Statement

Assume countable choice. For every valid one-component knot code with $n$ crossings, both the Haken and JT normal-surface searches terminate and decide whether the smooth knot represented by the code is ambient isotopic to the standard unknot. The Haken search uses $2^{O(n^2)}$ Turing time and $O(n^2\log(n+2))$ Turing space. The JT primitive-vertex search uses $2^{O(n)}$ Turing time and the same space bound. The zero-crossing case is handled by a fixed finite construction. No polynomial-time claim is made.

## Statement references

[[alg-haken-jaco-tollefson-unknot-recognition]] — the two searches and their finite outputs.

[[thm-haken-jaco-tollefson-unknot-recognition-procedure-properties]] — termination of both modes.

[[thm-haken-finite-box-search-correctness]] — Haken search completeness conditional on Haken normal essential-disk existence.

[[thm-jaco-tollefson-vertex-search-correctness]] — JT search completeness conditional on JT vertex-disk existence.

[[lem-meridian-disk-criterion-for-unknot-exterior]] — the essential-disk unknot criterion in the compatible smooth/PL exterior.

[[thm-smooth-knot-has-compatible-pl-exterior-model]] — code-to-smooth-knot compatibility and linear-size exterior.

## Facts & Assumptions

**Given:** Countable choice, a valid one-component oriented knot code with $n$ crossings, and either search mode.

[A1] $\mathrm{AC}_\omega$ is inherited through the smooth isotopy-extension and exterior-model interfaces.

[F1] [[thm-haken-jaco-tollefson-unknot-recognition-procedure-properties]]: both finite search modes terminate on every finite code.

[F2] [[thm-haken-finite-box-search-correctness]]: the Haken search accepts exactly when its triangulated exterior contains an essential disk, conditional on the Haken existence theorem.

[F3] [[thm-jaco-tollefson-vertex-search-correctness]]: the JT search accepts exactly when its triangulated exterior contains an essential disk, conditional on the JT vertex-disk theorem.

[F4] [[lem-meridian-disk-criterion-for-unknot-exterior]]: the represented smooth knot is unknotted exactly when its compatible PL exterior contains such a disk; the supplier proves the finite relative rounding, peripheral annulus and smooth ambient-isotopy implications.

[F5] [[thm-smooth-knot-has-compatible-pl-exterior-model]]: the code's exterior has a good triangulation with $t\le C(n+1)$ and the original meridian marked.

[F6] [[lem-normal-coordinate-matching-equations-and-finite-bounds]]: Haken vectors have coordinates at most $t2^{7t+2}$ and primitive vertex vectors at most $2^{7t-1}$.

[F7] [[lem-small-integer-matrix-linear-algebra-in-quadratic-logarithmic-space]]: exact rank and primitive nullity-one kernel computations for the active small-entry matching matrices have polynomial bit time and $O(t^2\log(t+2))$ workspace via streamed prime-field elimination and bounded Chinese remaindering.

## Proof

1.1 The given countable-choice hypothesis [A1] supplies the choice assumption in [F5]. That item constructs a finite good exterior triangulation with $t\le C(n+1)$ tetrahedra and a marked original meridian; the zero-crossing case uses its fixed product model. By [F1], validation and either search mode terminate. [given, A1, F1, F5, construct]

1.2 For Haken mode, the box has $(t2^{7t+2}+1)^{7t}=2^{O(t^2)}$ vectors. Testing fundamentalness checks at most the same number of coordinatewise decompositions per vector, so the squared count remains $2^{O(t^2)}$; all tests on each compressed vector take polynomial time. Store only the current vector, one decomposition vector, counters and the matching matrix, using $O(t^2\log(t+2))$ bits. [F1, F6, algebra]

1.3 For JT mode, the support enumeration has at most $2^{7t}$ subsets. Use the streamed modular rank/kernel implementation [F7], whose prime bound and stopping rule give polynomial bit time and $O(t^2\log(t+2))$ workspace for each support. The candidate tests use polynomial time in $t$ and the $O(t)$-bit coordinates from [F6], giving total $2^{O(t)}$ time. The implementation reuses one residue matrix and a bounded CRT accumulator, while the candidate and support counter fit within $O(t^2\log(t+2))$ bits; no list of prior rays is stored because each ray is enumerated at its exact zero support. [F1, F6, F7, algebra]

2.1 In Haken mode, [F2] identifies acceptance exactly with existence of an essential disk in that exterior; by [F4], this is equivalent to the smooth knot being the unknot. In JT mode, the same conclusion follows from [F3] and [F4]. Thus each terminating branch returns the correct decision, conditional on the exact Haken and JT existence supplier proofs recorded in those items. [F2, F3, F4, step 1.1, algebra]

3.1 Substituting $t\le C(n+1)$ in steps 1.2–3.2 yields the stated time and space bounds; the fixed $n=0$ branch is constant size. The statements in [F2]–[F4] still depend on the two exact unresolved normal-disk existence proof obligations identified in their contracts, so this theorem is escalated rather than ready. [F2, F3, F4, F5, step 1.2, step 1.3, algebra] ∎
