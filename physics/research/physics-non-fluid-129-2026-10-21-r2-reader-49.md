# Step 3a Reader Report — Batch 49

Run: `physics-non-fluid-129-2026-10-21-r2`

## Inventory reviewed

Assigned pages opened:

- `nrqmx-weyl-galilei-representations` (A page, draft)
- `nrqmx-weyl-galilei-representations-examples` (B page, draft)

Assigned items opened:

- `thm-nrqmx-finite-weyl-uniqueness-interface`
- `thm-nrqmx-boost-translation-cocycle`
- `thm-nrqmx-spin-cover-projective-rotations`
- `thm-nrqmx-finite-superselection-algebra`
- `ex-nrqmx-boost-interferometric-phase`
- `cex-nrqmx-finite-matrix-ccr`

Direct item suppliers checked for the assigned claims:

- Weyl and spin results: `thm-stone-von-neumann-for-finite-dimensional-weyl-systems`, `def-symplectic-vector-space`, `def-regular-weyl-system-on-a-symplectic-vector-space`, `lem-schrodinger-weyl-system-is-regular-and-irreducible`, `thm-nrqm-orbital-and-spin-finite-spin-block-decomposition`, and `ex-su-two-to-so-three-as-a-covering-homomorphism`.
- Choice, Hilbert-space, measure, and continuity results: `def-axiom-of-choice`, `def-countable-choice`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-integrals-are-invariant-under-measure-preserving-maps`, `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`, `lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p`, `def-complex-lp-and-euclidean-test-function-conventions`, `def-c-c-and-c-c-infinity-on-rn`, and `thm-tdmath-dominated-convergence`.
- Exponential, trigonometric, and calculus results: `lem-complex-conjugation-and-modulus-laws`, `def-complex-exponential`, `thm-complex-exponential-addition-and-real-extension`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-eulers-formula`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `def-real-exponential-function-and-e`, `cor-exponential-reciprocal-and-positivity`, `thm-quarter-turn-values-and-shift-formulas`, `thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions`, `thm-sine-and-cosine-derivatives`, `thm-sine-and-cosine-addition-formulas`, `thm-algebra-of-derivatives`, and `cor-mean-value-theorem`.
- Trace supplier: `lem-nrqm-composites-nuclear-bounded-cyclicity`.

Required prerequisite pages opened: `qm-math-composites`, `qm-math-orbital-and-spin`, `regular-weyl-representations-and-stone-von-neumann`, `density-separability-and-convolution-in-lp`, `td-math-ensembles-and-limits`, and `lie-subgroups-actions-and-homogeneous-spaces`.

After clarifying the finite-Weyl statement, I checked its other direct current-run consumer, `thm-nrqmx-finite-metaplectic-construction` (batch 52), against its declared `def-nrqmx-finite-mode-symplectic-data` supplier. Its concrete finite phase space and parameter satisfy the clarified interface; no consumer edit was needed.

## Repairs

- `thm-nrqmx-finite-weyl-uniqueness-interface`: stated the alternating and nondegeneracy conditions on the bilinear form explicitly, made the invariant-subspace condition explicit, and wrote the canonical pairings of the chosen symplectic basis. The imported Stone–von Neumann statement has the same finite-dimensional, nonzero-parameter, regularity, irreducibility, and AC hypotheses. Its proof remains an exact application followed by composition of intertwiners. Updated its proof-contract derivation.
- `thm-nrqmx-spin-cover-projective-rotations`: specified the smooth matrix-manifold structure on `SU(2)`, the finite-dimensional operator-norm topology on `End_C(V)`, and that `D` is a `C^1` matrix-valued group homomorphism. This supplies the regularity used by the derivative calculations without changing the result. Updated its proof-contract derivation. The `tikzcd` square has the correct objects and arrows and commutes by the stated lift-independent definition; the proof does not rely on the diagram.
- `thm-nrqmx-boost-translation-cocycle`: before applying finite Weyl uniqueness, verified that the displayed form on `R^d ⊕ R^d` is bilinear, alternating, and nondegenerate, identified its dimension and nonzero parameter, and cited Countable Choice for the regular/irreducible model supplier. Updated the proof-contract derivation and the Countable Choice use record.

No changed item had a `verification.judge` record to remove. Reflow reported all three items unchanged. Precheck passed for all three. The final `proof-layout.mjs` run on the changed paths reported 3 items, 18 steps, and 0 defects.

## Uneditable findings

- Published item `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, Proof 1.1–2.1: the steps use the exponential addition law and Euler formula; modulus multiplicativity, the Pythagorean identity, and positivity of the real exponential; and the quarter-turn values. The `Facts & Assumptions` block gives only real `x,y`, and each affected step is tagged only `[given]`. The needed published suppliers are listed as dependencies/references, but the proof does not state them as facts or cite them in the steps. This is a nonfatal citation-trace defect; the exact supplier statements close the calculations. Assigned consumers are the boost theorem, spin theorem, and boost-phase example.
- Published page `regular-weyl-representations-and-stone-von-neumann`, opening summary: its frontmatter marks the page published, while the body calls it “This draft”; it also lists the published Stone–von Neumann theorem. The assigned finite-Weyl theorem depends on that published member.
- Published page `qm-math-orbital-and-spin`, body at line 128: it says “All items are draft mathematics under construction,” while its page inventory includes published `thm-nrqm-orbital-and-spin-finite-spin-block-decomposition`. The assigned spin theorem depends on that published member.

These findings are recorded only in the findings JSON; no published item or page was edited.

## Page verdicts

- `nrqmx-weyl-galilei-representations` (A): **pass after the finite-Weyl and boost proof repairs**. Its summary matches the finite uniqueness hypotheses, the formal central extension, the spin-cover result, and the algebra-relative trace identity.
- `nrqmx-weyl-galilei-representations-examples` (B): **pass**. Its summary accurately distinguishes a common phase from a relative two-arm phase and states the finite-matrix trace obstruction without claiming anything about unbounded generators.

## Coverage and blocker

All six assigned items, both assigned pages, their direct claim suppliers, the six declared prerequisite pages, and the directly affected batch-52 consumer context were inspected. The assigned carriers were initially opened together to establish the dependency inventory; the subsequent supplier checks and final proof review proceeded from suppliers to consumers. I did not independently re-audit every transitive dependency of every published mathematical supplier. No blocker remains.
