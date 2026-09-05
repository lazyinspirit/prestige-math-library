## Step-5 authoring

Session date: Friday, September 4, 2026.

Authored artifacts:

- A page: `library/differential-topology/morse-functions-critical-values-and-genericity.md`
- B page: `library/differential-topology/morse-functions-critical-values-and-genericity-examples.md`
- Proof-contract report: `research/frontier-30-batch-18.proof-contracts.json`
- A-page items: `lem-morse-functions-are-transverse-differentials`, `thm-morse-functions-are-dense-by-relative-jet-transversality`, `thm-morse-functions-form-a-residual-subset`, `lem-compact-morse-critical-points-have-uniform-hessian-gaps`, `lem-no-new-critical-points-under-a-compact-c1-small-perturbation`, `thm-morse-functions-are-open-dense-on-a-compact-manifold`, `lem-finitely-many-critical-values-can-be-separated-locally`, `thm-excellent-morse-functions-are-open-dense-on-a-compact-manifold`, `thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse`, `thm-generic-squared-distance-functions-are-morse`, `cor-every-compact-smooth-manifold-admits-an-excellent-morse-function`, `lem-properness-survives-a-controlled-locally-finite-perturbation`, `prop-proper-morse-exhaustions-exist-on-smooth-manifolds`, `rem-noncompact-morse-genericity-is-not-an-open-dense-claim`, `rem-morse-does-not-mean-distinct-critical-values`
- B-page items: `ex-generic-and-exceptional-height-directions-on-a-torus`, `ex-squared-distance-to-a-circle-and-its-medial-axis`, `ex-separating-equal-critical-values-by-bump-functions`, `cex-morse-functions-need-not-have-distinct-critical-values`, `cex-noncompact-smallness-without-the-strong-topology-can-create-critical-points-at-infinity`

Provenance rationale kept on disk:

- `literature-derived` statement provenance is used on the standard Morse-genericity theorems, the compact existence corollary, the two remarks, and the standard torus/circle counterexample-example carriers.
- `ai-altered` statement provenance is used on the scaffold-split packaging items whose exact formulation is this batch's local decomposition of standard arguments: the relative strong-topology density theorem, the compact Hessian-gap lemma, the no-new-critical-points lemma, and the properness-preservation lemma.
- `ai-generated` statement provenance is used only on the two non-load-bearing B-page witness items that are explicit local constructions for this library, `ex-separating-equal-critical-values-by-bump-functions` and `cex-noncompact-smallness-without-the-strong-topology-can-create-critical-points-at-infinity`, each with the required `generation.role`. Neither generated statement is a dependency target.
- Every authored page and item remains `status: draft`, and no authored in-flight item carries a `verification.judge` record.

Authoring route, claim control, and local adjustments:

- I kept the design's compact/noncompact split: compact pages say `open dense`, while the arbitrary-manifold statement says `residual in the strong topology`.
- I wrote `thm-morse-functions-are-dense-by-relative-jet-transversality` directly at the function level. I did not try to deduce it by perturbing `df` as an arbitrary map, because that would lose the fact that the perturbed section is still a differential of a function.
- The residual theorem is written as an explicit countable intersection of open dense sets on compact exhaustions; it does not silently import a separate unproved "strong topology is Baire" theorem.
- I widened a few on-disk `deps` lists beyond the seed scaffold where the written proof genuinely needed existing suppliers, in particular for the direct density theorem and the compact Hessian-gap lemma. I did not alter `research/frontier-30-batch-18.pages.json` or plan structure.
- No planned item was dropped. No top-level claim was narrowed beyond the already-recorded design choice that the noncompact genericity theorem is residual rather than a global open-dense claim.

Blockers:

- No batch-local authoring blocker remains.
- The live `.autopilot` status on disk still reports another run (`frontier-23`) as the shell-controlled active workflow. I did not alter workflow state and confined this work to the explicit `frontier-30` batch-18 artifacts and page/item files.
