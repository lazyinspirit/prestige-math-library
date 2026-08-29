# Frontier 23 — independent reader 2 report

Date: 2026-08-29  
Run: `frontier-23`  
Batch: `2`  
Role: `reader`

## Scope opened

- Task and run artifacts: `research/frontier-23-reader.task.md`, `research/frontier-23-batch-2.pages.json`, `research/frontier-23-batch-2.coverage.json`, `research/frontier-23-batch-2.notes.md`, `research/frontier-23-batch-2.proof-contracts.json`, and the live run state from `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`.
- Page files: `library/linear-algebra/complexification-realification-and-real-structures.md`, `library/linear-algebra/complexification-realification-and-real-structures-examples.md`, `library/linear-algebra/exterior-powers-orientation-and-hodge-duality.md`, and `library/linear-algebra/exterior-powers-orientation-and-hodge-duality-examples.md`.
- Batch items: all 70 assigned item files on those four pages.
- Published dependency items opened directly while checking the current proofs and contracts: `thm-universal-property-of-module-tensor-products`, `cor-module-tensor-products-are-unique-up-to-unique-isomorphism`, `def-dimension`, `def-binomial-coefficient`, `def-characteristic-polynomial-of-an-operator`, `lem-minimal-polynomial-is-invariant-under-field-extension`, `def-primary-component-and-generalised-eigenspace`, `def-inner-product-space`, `thm-adjoint-exists-and-is-unique-in-finite-dimension`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `thm-finite-dimensional-isometry-characterisations`, `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`, `thm-determinant-of-transpose`, and `thm-operator-determinant-scales-every-alternating-top-form`.

## Outcome

I read every assigned page summary, every assigned Statement/Definition/Example/Refutation, every proof or verification block, and the current batch proof-contract file. I found two repairable proof-text defects in in-flight items and two repairable boundary-contract defects. I found no remaining uneditable defect in published content or outside the batch.

## Repaired defects

### R2-1 — `cor-the-top-exterior-power-acts-by-the-determinant` — fixed — nonfatal

**Location.** Proof step 3.1 and the corresponding contract derivation entry.

**Defect.** The proof said “the wedge map is an alternating $n$-linear form” and then cited `thm-operator-determinant-scales-every-alternating-top-form`. That theorem is about scalar-valued alternating top forms, while the wedge map lands in `\Lambda^n V`. The cited inference was therefore false as written, even though the corollary's main claim was already proved by the one-dimensional top-exterior-power argument in steps 1.1-2.1.

**Repair.** Removed the unused dependency on `thm-operator-determinant-scales-every-alternating-top-form`, deleted the false fact line, and rewrote step 3.1 to use one-dimensionality directly: every decomposable top wedge is a scalar multiple of the top basis vector, so step 2.1 propagates the determinant action to all decomposable top wedges. Regenerated the proof-contract citations and derivations for this item.

### R2-2 — `fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field` — fixed — nonfatal

**Location.** Facts `[L2]-[L3]`, proof steps 1.2 and 3.1, and the corresponding contract entry.

**Defect.** The old closing step claimed, via the universal property of `\Lambda^k V`, that the antisymmetrization formula is “the unique formula with no choices,” then used that philosophical overreach to finish the refutation. The item already had a direct characteristic-two witness showing the universal claim fails, so the uniqueness assertion was unnecessary and not supported by the cited theorem.

**Repair.** Removed the unused universal-property dependency, renumbered the facts, kept the direct computation of `\pi \circ \mathrm{Alt} = k! \cdot \mathrm{id}`, and rewrote the closing step to conclude directly from the explicit `\mathbb F_2` witness. Regenerated the proof-contract citations and derivations for this item.

### R2-3 — proof-contract boundary rows — fixed — nonfatal

**Location.** `research/frontier-23-batch-2.proof-contracts.json`.

**Defects.**

- `thm-gram-inner-product-on-exterior-powers-is-positive-definite` marked the `iff-forward` and `iff-reverse` axes as `not_applicable`, but the item's own Statement says the Gram determinant vanishes **exactly when** the list is dependent.
- `fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field` marked the `empty` axis `not_applicable`, even though the universal statement quantifies all `k \ge 0`; the relevant boundary is harmless, but it still exists.

**Repair.** Replaced those rows with accurate checked dispositions tied to the item text: step 2.2 handles both biconditional directions for the Gram-determinant theorem, and the `k=0` boundary does not rescue the false universal claim because the `k=2` characteristic-two witness already refutes it.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/cor-the-top-exterior-power-acts-by-the-determinant.md items/fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/cor-the-top-exterior-power-acts-by-the-determinant.md items/fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field.md` — PASS, 2 checked, 0 failing.
- `node tools/regen-contract-entries.mjs research/frontier-23-batch-2.proof-contracts.json cor-the-top-exterior-power-acts-by-the-determinant fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field` — regenerated 2 entries.
- `node tools/proof-contract.mjs research/frontier-23-batch-2.proof-contracts.json --strict` — 0 errors, 0 warnings, 54/54 checked.
- `node tools/citation-fidelity.mjs research/frontier-23-batch-2.proof-contracts.json --fail-on-missing-quote` — 152 citations, no missing quote or widening candidate.
- `node tools/boundary-audit.mjs research/frontier-23-batch-2.proof-contracts.json --fail-on-contradicted --fail-on-template` — no contradicted dispositions remain; the command still reports template-reuse clusters among repeated honest `not_applicable` rationales and exits nonzero for that heuristic.
- `node tools/finite-smoke.mjs research/frontier-23-batch-2.proof-contracts.json` — 0 errors, 0 registered checks.
- `node tools/content-policy.mjs research/frontier-23-batch-2.pages.json` — 70 scoped items, 0 errors, 0 warnings.
- `node tools/rendercheck.mjs items/cor-the-top-exterior-power-acts-by-the-determinant.md items/fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field.md` — OK.

## Per-page verdicts

- `complexification-realification-and-real-structures` — pass. I found no item-level or page-summary defect requiring change.
- `complexification-realification-and-real-structures-examples` — pass. The examples, counterexample, and false statements are mathematically sound.
- `exterior-powers-orientation-and-hodge-duality` — pass after repair. R2-1 corrected the only proof-text defect I found on the A page.
- `exterior-powers-orientation-and-hodge-duality-examples` — pass after repair. R2-2 corrected the only proof-text defect I found on the B-page item set.

## Blockers

None.

## Residual note

`boundary-audit` still flags repeated template wording across many `not_applicable` boundary rows. After reading the reported clusters, I did not confirm any remaining mathematical or citation defect from those repeated rationales, so I am not promoting them to findings.
