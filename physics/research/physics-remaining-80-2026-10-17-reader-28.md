# Step 3a reader report — batch 28

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Batch: `28`

## Scope and inventory

The assigned pages were opened in `research/physics-remaining-80-2026-10-17-batch-28.pages.json` and in the current workspace:

- A page: `csm-continuum-limits` — [library/classical-statistical-mechanics/csm-continuum-limits.md](../library/classical-statistical-mechanics/csm-continuum-limits.md)
- B page: `csm-continuum-limits-examples` — [library/classical-statistical-mechanics/csm-continuum-limits-examples.md](../library/classical-statistical-mechanics/csm-continuum-limits-examples.md)
- Page prerequisites also opened: `csm-gibbs-lattice` and `td-math-interacting-ensemble-geometry`.

All six assigned items were opened and reviewed:

- `def-csm-continuum-dlr-kernels`
- `lem-csm-continuum-kernel-normalization`
- `pthm-csm-qualified-continuum-equilibrium-limits`
- `cex-csm-finite-range-attraction-collapse`
- `cex-csm-stable-not-superstable`
- `cex-csm-bulk-field-changes-pressure`

The direct item suppliers of the assigned items were opened. The in-batch dependency edges are covered by the assigned-item inventory above; external direct suppliers are grouped below:

- CSM formulation and postulates: `def-csm-stable-superstable-continuum-interaction`, `def-csm-gibbs-physical-parameters`, `post-csm-interacting-equilibrium-gibbs`, `post-csm-counting-and-physical-observables`, `def-csm-phase-space-reference`, `def-csm-statistical-state-observable`, `def-cm01-units`.
- Choice and continuum model definitions: `def-axiom-of-choice`, `def-countable-choice`, `def-ultrafilter-extension-principle`, `def-dependent-choice`, `def-hahn-banach-extension-principle-relative`, `def-tdmath-stable-power-tempered-particle-model`, `def-tdmath-superstable-regular-interaction`, `def-tdmath-poisson-configuration-reference`, `def-tdmath-van-hove-sequence`, `def-tdmath-local-tame-topology`, `def-tdmath-periodized-empirical-field`.
- Continuum limit and empirical-field results: `lem-tdmath-superquadratic-positive-core`, `lem-tdmath-integrable-tail-diagonal-gap`, `lem-tdmath-canonical-empirical-field-conditioning`, `thm-tdmath-stable-tempered-free-cube-grand-pressure`, `thm-tdmath-canonical-interior-density-limit`, `thm-tdmath-canonical-grand-duality`, `thm-tdmath-continuum-variational-pressure`, `thm-tdmath-retained-hard-zero-beta-limit`, `thm-tdmath-uniform-tempered-exterior-pressure`, `thm-tdmath-superstable-van-hove-pressure`, `thm-tdmath-periodic-fixed-n-limit`, `thm-tdmath-fixed-n-local-ensemble-equivalence`, `thm-tdmath-controlled-shell-three-ensemble-equivalence`, `thm-tdmath-van-hove-fixed-n-limit`.
- Normalization, measure, and elementary suppliers: `thm-tdmath-poisson-reference-count-properties`, `thm-nonnegative-measurable-functions-admit-increasing-simple-approximations`, `def-factorial-and-falling-factorial`, `def-multinomial-coefficient`, `thm-multinomial-theorem`, `def-real-exponential-function-and-e`, `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, `def-natural-logarithm`, `lem-integer-part`, `thm-tdmath-monotone-convergence`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-dynkin-pi-lambda`.
- Page-level dependencies were additionally checked against their actual page files and summaries. The published `td-math-interacting-ensemble-geometry` page and the draft `csm-gibbs-lattice` page were present; the local claims use the exact definitions and physical assumptions listed above.

I parsed the current `deps` and `justified_by` graph rather than relying on the author's inventory. Its full transitive closure contains 1,455 item IDs because the published mathematical suppliers have extensive foundational closures. I reviewed the assigned items, every direct supplier, and the nontrivial intermediate results used by the continuum-limit proofs. I did not independently audit the full proofs of every foundational theorem in that 1,455-item closure. The remaining deep mathematics is recorded as a coverage limitation, not as independently verified content.

I also opened the batch-28 proof-contract record, batch notes, task file, coverage record, cross-batch dependency record, and `research/math-imports.json`. All 1,391 pinned imported items in the full transitive item closure matched their recorded SHA-256 pins. The manifest and contracts were used as navigation/evidence only.

## Review evidence and repairs

The local DLR definition and normalization lemma were checked against their exact current suppliers. The proof derives the bounded-Borel Poisson sector density, uses the stability bound on finite configurations and two-point lists, proves joint pair-energy measurability from count maps, establishes a finite positive normalizer, and supplies the kernel measurability, nested-region consistency, and fixed-kernel/conditional-law equivalence. It asserts no existence or uniqueness of an infinite-volume DLR state.

The three examples were checked as mathematical counterexamples or conditional model calculations. The clustered potential refutes stability from finite range alone; the zero potential refutes cell superstability for every proposed side and constants; the ideal positional gas calculation retains its explicit one-species `1/N!` convention and fixed physical activity, and reports no observation.

The physical theorem is a conditional model statement. I checked the SI-to-dimensionless parameter map, the action-reference identification, the separate formal `beta=0` retained-hard-exclusion branch, and the distinction between normalized Poisson and `1/N!` positional pressure. The directly invoked published theorem statements and their exact hypothesis classes were checked, including the interior-density, choice-principle, positive-core, exterior-class, supporting-activity, differentiability, and outer-probability qualifications.

Two confirmed missing hypotheses in `pthm-csm-qualified-continuum-equilibrium-limits` were repaired in its Statement:

1. **Statement, clause 4 (original line 103):** its exact-particle van Hove limit invokes `thm-tdmath-van-hove-fixed-n-limit` and the canonical interior-rate suppliers, which require full AC. Clause 4 previously named the superstable regular interaction but omitted full AC, although proof step 1.4 and Facts [A5] used it. Clause 4 now states full AC.
2. **Statement, clause 5 (original line 105):** the periodic and free exact-particle concentration suppliers require the same superstable regular interaction and positive inverse-energy parameter as the variational and periodic canonical results. Clause 5 previously named the choice assumptions, density, and supporting activity without naming that interaction class or positive beta. It now explicitly carries the superstable regular model and positive beta from clause 3.

These are repairs to the assigned in-flight item; neither is an outstanding finding. The clause 1.4 and 1.5 derivation records and the nonempty-choice boundary record in `research/physics-remaining-80-2026-10-17-batch-28.proof-contracts.json` were updated to match. The item had no `verification.judge` record to remove.

The theorem's sole item consumer outside its own A-page placement is `cex-csm-bulk-field-changes-pressure`. I reopened and checked that item and the A-page summary after the Statement repair. The example uses only the unchanged clause 7 exterior-class restriction; its hypotheses and pressure calculation remain valid. The A-page summary remains accurate. No other current item or page links to this theorem as a prerequisite.

Source checks: I retrieved and inspected the relevant passages in Jansen, *Gibbsian Point Processes*, §§3.1–3.3 and 5.1–5.2 (finite-range boundary energy, kernels, consistency, and DLR conditional laws), and Dereudre, *Introduction to the Theory of Gibbs Point Processes*, §§1.1–1.4 and 2.3–2.4 (including Definition 8's stationarity and positive-volume conditions). I also retrieved Georgii, *Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction*; I checked the Theorem 1 and Theorem 2 statements and their hypotheses (printed pp. 174–176) against the local variational supplier uses. I did not independently reread every line of that article's Sections 3–5 proof; the local published theorem proofs were reviewed directly for the uses made here.

## Validation after the repair

- `reflow.mts items/pthm-csm-qualified-continuum-equilibrium-limits.md`: unchanged.
- `precheck.mts items/pthm-csm-qualified-continuum-equilibrium-limits.md`: pass; 1 checked, 0 failing.
- `proof-layout.mjs items/pthm-csm-qualified-continuum-equilibrium-limits.md`: 1 item, 9 steps, 0 defects.

## Page verdicts

- `csm-continuum-limits` (A): **pass after the two stated item repairs**. Definitions and proof claims are explicit, and the page summary preserves the conditional scope and limitations.
- `csm-continuum-limits-examples` (B): **pass**. All three examples match their present claims and the B-page summary; the physics example is a model calculation, not empirical evidence.

## Uneditable defects and blockers

No confirmed defect remains in the reviewed assigned items or pages, and no published or other-batch defect was confirmed. There is no workflow blocker. Coverage is limited as stated above: the transitive mathematics closure has 1,455 item IDs, and I did not perform a full proof audit of every foundational item below the directly used result suppliers.
