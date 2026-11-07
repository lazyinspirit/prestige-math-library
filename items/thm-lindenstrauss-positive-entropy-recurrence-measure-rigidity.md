---
id: thm-lindenstrauss-positive-entropy-recurrence-measure-rigidity
kind: theorem
title: "Lindenstrauss measure rigidity from positive entropy and recurrence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps: [thm-bourgain-lindenstrauss-positive-entropy-for-arithmetic-quantum-limits, thm-lindenstrauss-hecke-eigenfunction-measures-are-p-adically-recurrent, thm-lindenstrauss-horocycle-recurrence-from-positive-entropy, lem-ratner-h-property-for-sl2-horocycle-flow, thm-lindenstrauss-besicovitch-maximal-inequality-for-leafwise-conditionals, thm-ratner-s-arithmetic-measure-classification-for-unipotent-actions, def-lindenstrauss-t-space, def-lindenstrauss-recurrence-along-t-leaves]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  scraped: []
  references:
    - title: "Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity"
      url: "https://math.huji.ac.il/~elon/Publications/quantum.pdf"
      locator: "Theorem 1.1, Theorem 1.4, §§3, 7–8, and Appendix A."
    - title: "Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes"
      url: "https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf"
      locator: "§§4–5, pp. 14–16."
---

## Statement

Let G=SL₂(ℝ)×L with L S-algebraic, K⊂L compact, Γ⊂G discrete with Γ∩L finite, and X=Γ\G/K. If μ is an A-invariant probability, almost every component in the A-ergodic decomposition of μ has positive entropy, and μ is recurrent along L/K leaves, then μ is a linear combination of algebraic measures invariant under the SL₂(ℝ) factor.

## Statement references

[Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity, Theorem 1.1, Theorem 1.4, §§3, 7–8, and Appendix A.](https://math.huji.ac.il/~elon/Publications/quantum.pdf)

[Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes, §§4–5, pp. 14–16.](https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf)

## Facts & Assumptions

**Given:** The complete objects, parameters, conventions and hypotheses in the Statement.

[L1] Lindenstrauss Theorem 1.1 states this rigidity theorem. Its proof imports S-arithmetic measure classification and the local entropy, recurrence and maximal-inequality inputs. [Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity, Theorem 1.1, Theorem 1.4, §§3, 7–8, and Appendix A.](https://math.huji.ac.il/~elon/Publications/quantum.pdf)

[L2] The H-property supplier now has the actual homogeneous product-metric hypotheses and trivial Γ∩L. Applying it here with finite Γ∩L requires the source finite-quotient reduction; that reduction and the full recurrence/conditional/entropy argument remain local proof obligations. The arithmetic entropy and Hecke recurrence dependencies do not by themselves prove this generic theorem from its already assumed hypotheses.
