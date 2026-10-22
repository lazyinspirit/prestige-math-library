# Batch 12 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-12`.

## Completed in dependency order

### def-emx-whitney-semidescretization

Verdict: accepted_repair; repair_confidence: 1. Pre/post raw hashes: bfd06e6591a2e1ee43e23fc8bb2eb73b88df2ea86ce208bf036d3afb8b8f6387 / e8cac7f4c5388d8dcd541a6d96d7f21db4d797e243b440b83225f9becf4cc3bf. The added nodal identity is sound: expand using sum lambda_i=1 and sum grad lambda_i=0. Oriented circulations are endpoint differences. Compact smooth H1 approximants establish closure membership. It explains the already declared gradient map without changing spaces or hypotheses. Opened all ten direct dependencies and the cohomology proof; checked empty bases, positive mass matrices, nonnegative loss, units and weak-system signs. Risk review completed in the owning contract. Consumer uses remain to be checked in their ordered positions.


### pthm-emx-coercive-maxwell-galerkin

refuter:12:1: confirmed_fatal, repair_confidence: 1. Added “Assume Countable Choice” to the Statement, matching the existing Given/A1 and the exact assumptions in thm-lax-milgram and thm-na-uniformly-bounded-commuting-cochain-projection. This is a missing public hypothesis, not a counterexample to the conditional proof. Checked both full proofs, the L2 Hilbert lemma, the projection correction and averaged-pullback arguments. Closed curl graph, positive length norm equivalence, spectral bounds, real Lax–Milgram, zero-space and zero-error branches, Galerkin orthogonality and relative graph convergence prove the advertised estimate. Risk review completed. Reference/dependency search finds only ex-emx-resonance-outside-coercivity as an item consumer, to be reviewed at level 3; no outside consumer repair is indicated. Updated manifest mirrors for this hypothesis and the accepted definition clarification.

### pthm-emx-discrete-maxwell-balance

No decision owed; full risk review completed. Read thm-emx-matrix-energy-constraints and its current finite-system definition. Variation of constants yields the global C1 solution, with the empty-block branch explicit. Continuous L2 forcing gives continuous coordinates. The two matrix cross terms cancel; differentiating Db and q uses DC=CG=0 with the stated signs. Checked joules, watts, webers and coulombs. The accepted Whitney clarification changes none of these premises.

### pthm-emx-topological-zero-modes

No decision owed; risk review complete. Read full cohomology, full-Dirichlet regular decomposition and discrete compactness proofs and the exact projection interface. Use is of the general-domain harmonic-quotient clause, not the contractible-only X_h inequality. All stronger AC and regular-decomposition assumptions are explicit. The finite-dimensional orthogonal split and nonzero-harmonic obstruction are valid, including zero harmonic dimension. The Whitney definition clarification preserves grad S_h subset V_h. Diagram review: all four vertical moment maps have correct domains/codomains and directions; gradient endpoint difference, signed face-edge circulation and signed cell-face flux are the three coboundaries. No diagram repair/addition needed; proof is independent.

### cex-emx-edge-moment-domain-failure

No decision owed; risk review complete. The zero representative and the unit-tangent representative supported on the segment are measurable and equal almost everywhere in three dimensions. Their curls coincide distributionally; their raw line integrals are 0 and length(e)>0. This single well-defined pair refutes representative independence without needing to define all possible restrictions. Polynomial moments and conditional smoothed projection existence remain separate. No repair needed.

### ex-emx-resonance-outside-coercivity

Verdict: accepted_repair; repair_confidence: 1. Pre/post raw hashes: 8a22911c6acac31044cfa59a2fca342aa8c8d2361e0b2e64cc02daab1a7fd9fd / 8f0405a4fc17a728bf438c4b38a1c8eb59048094e4109fe383cf11040a395c20. The positive root, SI time/frequency units and end-wall B_z=0 additions are correct. Read the complete rectangular-mode supplier, particularly Statement (b),(e), Facts F1–F5 and proof 2.2: beta=0 gives precisely this spatial electric field and magnetic amplitude i E_* omega epsilon/k^2 times e_z cross grad f. Thus B_z=0 and side-wall normal components vanish. No broadband material inference is used. Direct coordinate differentiation proves the double curl. The cutoff proof handles all faces and corner overlaps; the z derivative is parallel to u, while vanishing sine factors bound the x/y terms. Density extends the kernel identity to V. Nonzero at the displayed interior point implies positive L2 norm by continuity. This is a mathematical model resonance, not an observed cavity measurement.

Consumer check for the coercivity Statement repair: this example cites the positive-shift form only to distinguish its plus sign and s>0 assumption from the explicit real-frequency kernel. It does not invoke unqualified weak-solution existence or convergence. The added Countable Choice hypothesis changes no calculation or comparison. No further item consumers of this example exist in items/library search. All five local direct/indirect uses of the Whitney clarification were reviewed above; no outside affected consumers found.

## Published maintenance and source limits

Read-only supplier `thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes` contains stale prose step ranges in proof 5.1 and 6.1 referring to nonexistent 2.2. Its actual steps 1.1, 2.1, 3.1 and 4.1 supply the cochain and homology-duality argument; the relevant explicit justification tags are correct. This is nonfatal locator maintenance, recorded with exact supplier/consumer IDs and repair strategy in `research/published-consumer-supplier-ledger.md` under `physics-non-fluid-129-2026-10-21-r2-b12-cohomology-step-locators`. Acquired the specified published-ledger lock, reread/merged the current ledger and classification index, then released only this lock. No published bytes were edited. This maintenance remains OPEN for the mathematics owner and does not block the reviewed conditional uses. Existing publication-marker maintenance for `def-em-si-conventions` is already indexed; no new publication acceptance is claimed.

The reader and refuter independently reported checking AFW and failing retrieval of Chen/Hiptmair. Those reports and the author's source-reading log are evidence, not this adjudicator's retrieval claims. This review used the exact local mathematical/physical suppliers and their proofs identified above; no new external full-text retrieval or independent reproduction of every transitive analytic supplier is claimed. The local elementary barycentric, energy, coercive, null-set and resonance arguments are explicit. No item contains measured premises, statistical inference or an empirical observation.

## Records and checks

Exactly three decisions are recorded: two touched-carrier accepted repairs and one confirmed-fatal refuter finding. Each references its own closed defect row at 3a-adjudicate; completed repair confidence is 1. Six item-specific Alpha risk reviews are complete. Stable IDs, inventory and draft status are preserved; no withdrawal or out-of-batch source repair is required. The owning manifest now mirrors both accepted reader clarifications and the added Countable Choice premise. Contract citation F3 for the topological theorem was synchronized to the current Whitney Definition after a focused contract check exposed its stale quotation; this mechanical synchronization creates no separate defect row. No judge stamp was present to invalidate.

Checks actually run:

- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-12.proof-contracts.json`: six HIGH/CRITICAL carriers, zero errors; reread and completed each review in the dispatched order. The rerun with `--require-reviewed` also reported zero errors.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/pthm-emx-coercive-maxwell-galerkin.md items/def-emx-whitney-semidescretization.md items/ex-emx-resonance-outside-coercivity.md`: 2 proof carriers checked, 0 failing; the definition has no numbered proof. A preliminary direct Node invocation of the .mts helper failed on unsupported extension; the documented tsx wrapper succeeded.
- `node tools/physics-support/rendercheck.mjs` with those same three explicit paths: 3 files, YAML/math checks passed.
- Final `node tools/physics-support/proof-layout.mjs items/def-emx-whitney-semidescretization.md items/pthm-emx-coercive-maxwell-galerkin.md items/ex-emx-resonance-outside-coercivity.md`: 3 items, 8 steps, 0 defects. No item edit followed.
- Defect-ledger append: 3 closed rows appended successfully and generated view refreshed.

Strict proof-contract check initially reported one stale quotation, repaired as described above; final result follows below. Engine hashing, gates, scheduling and judgment remain engine-owned. No scientific escalation remains; the published locator maintenance above remains outside-scope owner work.

Final strict proof-contract check: 0 errors, 0 warnings, 6/6 items checked. Final reviewed-risk rerun: 0 errors. Exact obligation set verified (3/3); both accepted reader carriers retain their immutable reader-post raw hashes.
