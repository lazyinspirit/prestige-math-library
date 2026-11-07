---
id: thm-bourgain-lindenstrauss-positive-entropy-for-arithmetic-quantum-limits
kind: theorem
title: "Positive entropy for arithmetic Hecke quantum limits"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps: [def-weight-zero-maass-form-on-gamma0n, def-quantum-limit-of-hecke-maass-eigenfunctions, def-hecke-operator-on-weight-zero-maass-forms, thm-bourgain-lindenstrauss-burgess-bound-for-small-squareful-moduli, thm-bourgain-lindenstrauss-brun-fundamental-lemma-application, thm-bourgain-lindenstrauss-corrected-plaque-mass-or-flow-escape, thm-bourgain-lindenstrauss-geodesic-flow-maximal-inequality, thm-mahler-compactness-and-split-orbit-escape, thm-bourgain-lindenstrauss-local-dimension-implies-entropy, thm-chebyshev-prime-counting-bounds, def-compact-arithmetic-surface-from-quaternion-order]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  scraped: []
  references:
    - title: "Jean Bourgain and Elon Lindenstrauss, Entropy of Quantum Limits"
      url: "https://math.huji.ac.il/~elon/Publications/pos_entropy.pdf"
      locator: "§2, Corollary 2.2(1), for the entropy conclusion; §5, Theorems 5.1–5.4, for arithmetic Burgess/sieve inputs."
    - title: "Jean Bourgain and Elon Lindenstrauss, Correction to Entropy of Quantum Limits"
      url: "https://math.huji.ac.il/~elon/Publications/erratum-pos-entropy.pdf"
      locator: "Theorem 2 and §2, printed pp. 2–3."
    - title: "Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes"
      url: "https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf"
      locator: "§§4–5, pp. 14–16."
---

## Statement

Let Γ\ℍ be a compact arithmetic surface arising from a quaternion algebra split over ℝ or a finite-area congruence surface over ℚ, and μ a weak-* limit of microlocal lifts of L²-normalized joint Laplace and Hecke eigenfunctions with eigenvalues tending to infinity. For nonzero μ, almost every probability component in the geodesic-flow ergodic decomposition of its normalization to total mass one has entropy at least 2/9 in the normalization where Liouville measure has entropy 2.

## Statement references

[Jean Bourgain and Elon Lindenstrauss, Entropy of Quantum Limits, §2, Corollary 2.2(1), for the entropy conclusion; §5, Theorems 5.1–5.4, for arithmetic Burgess/sieve inputs.](https://math.huji.ac.il/~elon/Publications/pos_entropy.pdf)

[Jean Bourgain and Elon Lindenstrauss, Correction to Entropy of Quantum Limits, Theorem 2 and §2, printed pp. 2–3.](https://math.huji.ac.il/~elon/Publications/erratum-pos-entropy.pdf)

[Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes, §§4–5, pp. 14–16.](https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf)

## Facts & Assumptions

**Given:** The complete objects, parameters, conventions and hypotheses in the Statement.

[L1] Bourgain–Lindenstrauss §2, Corollary 2.2(1), states the 2/9 entropy conclusion for almost every component; the 2004 correction, Theorem 2, supplies the corrected noncompact plaque-or-escape alternative. Section 5 supplies arithmetic Burgess/sieve inputs, rather than the local dimension-to-entropy proof. The complete local derivation remains unsupplied. [Jean Bourgain and Elon Lindenstrauss, Entropy of Quantum Limits, §2, Corollary 2.2(1), for the entropy conclusion; §5, Theorems 5.1–5.4, for arithmetic Burgess/sieve inputs.](https://math.huji.ac.il/~elon/Publications/pos_entropy.pdf)
