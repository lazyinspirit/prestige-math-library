# Batch 67 — Step 1 authoring notes

Run: `physics-non-fluid-129-2026-10-21-r2`  
Pair: `qftx-inclusive-soft-model` / `qftx-inclusive-soft-model-examples`  
Category/library: `quantum-field-theory-mathematics` / `mathematics`

## Plan and scope

- Read the assigned design at `research/plan-quantum-field-theory-frontier-expansion-track.md` L1299 and the complete linked soft-model section in `research/frontier-expansion-2026-10-19/quantum-field-theory/prose-scaffold.md` (L593–650), along with the task, run plan, source ledger, and batch dependency inventory. No `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` was present.
- The A/B IDs, title, category, library, and page prerequisites match both the design and `research/plan-spec.json`: A requires `qft-mx03` and `qft-mg03`; B requires A. The plan-spec item arrays are empty placeholders. The detailed design lists the definition, two propositions, and B example.
- Added `lem-qftx-coherent-band-poisson` on A as a local mathematical intermediate. The definition delegates well-definedness to it, and both propositions use its finite-band law. This addition is required by the Step 1 instruction to create missing local results before using them; it does not change the designed claims or page prerequisites. A has four items and B has one, below the 100-item cap.
- Kept the finite-cutoff free coherent model and exact finite-resolution identity. The text explicitly does not claim interacting-QED real–virtual cancellation, a detector response, empirical photon statistics, or a continuum QED construction. The energy variable is angular frequency `nu = c|k|` in s^-1; `hbar nu` is photon energy in J. Endpoint assignments are justified by zero one-particle measure.

## Items and dependencies

The finished A items are `def-qftx-resolved-soft-poisson`, `lem-qftx-coherent-band-poisson`, `prop-qftx-soft-unresolved-cancellation`, and `prop-qftx-soft-energy-finite`; B contains `ex-qftx-resolution-probability`.

- Scoped item levels recompute to 0, 1, 2, 2, and 3 respectively. The level-0 definition has no in-run `deps`; the local coherent-band lemma depends on it; both propositions depend on the lemma; the B example depends on the inclusive proposition. Out-of-run suppliers do not increase an in-run item level.
- Inspected the current published `thm-qft-example-soft-current-angular-coherent` statement and complete proof. The definition/lemma use its exact balanced-current, transverse angular-profile, and energy-to-length conventions. The local proof handles the Borel angular acceptance by restricting the full-sphere profile.
- Inspected the current published `lem-qft-qed-coherent-ir-obstruction` statement and complete proof. The energy proposition maps its inverse-length cutoffs by `kappa = Delta/c` and `delta = epsilon/c`; its angular coefficient is `C_b = C`. This supplies the no-strong-Fock-limit conclusion under its stated hypotheses. The one-particle displacement norm divergence is also proved directly in the local item.
- Both required supplier pages are current and published. The qft-mg03 obstruction lemma has no dependency on this batch's energy proposition; the scoped dependency check found no item or page cycle. The previous historical cycle note did not match the current published carrier and was not carried forward as a blocker.
- `research/physics-non-fluid-129-2026-10-21-r2-batch-67.cross-batch-dependencies.json` contains 55 direct external edges (2 page, 53 item), each with a scoped `verified` interface check. A validator audit found exactly 55 expected edges, with no omissions, extras, or malformed rows. Verification does not represent independent proof approval.

## Sources and retrieval

Complete source records, page locators, item coverage, per-result dispositions, recovery attempts, and fetch stamps are in `research/physics-non-fluid-129-2026-10-21-r2-batch-67.coverage.json`.

- Jan Dereziński, *Introduction to Representations of the Canonical Commutation and Anticommutation Relations*, [full author lecture notes](https://arxiv.org/pdf/math-ph/0511030), §§5.3–5.6, PDF pp. 19–21. Used for symmetric Fock sectors and the Fock tensor-product context; the assigned proof supplies the exact finite-band occupation calculation.
- Physikalisch-Technische Bundesanstalt, [Quantum Optics, Lecture 5](https://www.ptb.de/cms/fileadmin/internet/institute/fpm/Quantenoptik19/lecture_5.pdf), PDF pp. 1–2, equations (1)–(8) and photon statistics. Used for coherent-state normalization and the single-mode Poisson weights; the assigned proof derives the continuum band law.
- Mark Srednicki, *Quantum Field Theory*, [author-posted draft](https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf), Chapter 26, printed pp. 167–170. Used only for finite-resolution/unresolved-state context in a different scalar model; no QED cancellation or energy estimate is imported.
- The A page has two independent full-text treatments (Dereziński and PTB), plus Srednicki for resolution context. Retrieval succeeded without recovery retries. `source-fetch-check --stamp` verified 5/5 coverage entries, 0 newly stamped, and 0 documented drops. `source_resolution` and its history remain empty because no retrieval failed.

## Contracts and checks

- The proof contract covers all five items with exact current supplier-section excerpts, actual numbered steps/inputs, all standard boundary cases, and no invented finite-smoke check. The model's zero-profile, one-band, endpoint, and cutoff cases are covered in the arguments and boundary records; the repository has no applicable named finite-smoke checker for this continuum model.
- `precheck.mts` on the five assigned items: 4 proof-bearing items checked, 0 failing (the definition has no phase proof). `proof-layout.mjs` on all five: 5 items, 17 steps, 0 defects.
- `rendercheck.mjs` on all five items and both page files: pass; all math rendered with KaTeX and all frontmatter parsed.
- `content-policy.mjs` on the batch manifest: 5 items, 0 errors, 0 warnings. `proof-contract.mjs --strict`: 5/5 items, 0 errors, 0 warnings.
- Scoped `depcheck.mjs --items-file /tmp/physics-batch67-item-selection.json`: pass across the selected dependency closure (1,257 items and 394 pages); no unresolved references or cycles. Scoped item-level recomputation: pass with the levels above.
- The run-wide `item-dependency-levels.mjs check` remains blocked by 202 empty scaffold inventories in other batches. The run-wide `batch-dependency-levels.mjs check` reports the shared batch-level record as stale. These owner-managed, run-wide inputs were left unchanged; they do not change batch 67's recomputed local levels or the current exact supplier interfaces.

## Step 1 readiness

Before recording readiness, `loadStep1Record` and `step1Decision` were called for all five assigned items and the two named published supplier items. All five assigned-item records were absent before closeout. The helper also reports no run-specific Step 1 record for the two published, out-of-run suppliers; their current statements, complete relevant proofs, status, and exact interface were inspected. Missing independent approval or an out-of-run readiness row was not treated as a prerequisite gap.

All five assigned items have complete current inputs, A/B placement, dependency levels, contracts, and scoped checks, so their final Step 1 decisions are `ready`. These records close authoring readiness only; they do not certify independent acceptance.
