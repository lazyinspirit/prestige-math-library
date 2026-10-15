# Batch 61 notes — `qft-ir03` / `qft-ir03-examples`

Run `physics-td-qft-rpm-62-2026-10-14`, beta batch 61, 2026-10-14. This batch owns this A/B pair only. The ten item carriers, both pages, and batch evidence remain draft authoring; readiness records are not independent approval.

## Instructions, plan comparison, and conflicts

Read the parent and workspace instructions, physics content model, schema, workflow, complete QFT-IR03 design section, current plan-spec, assigned task, owner authoring direction, batch-dependency-level file, current dependency-level and batch evidence, and the relevant QFT-MF01/02/03/04 supplier statements and proofs. The owner direction controls the stale design reservation and requires complete conditional arguments to be authored while prerequisites are unresolved.

The design section at `research/plan-quantum-field-theory-track.md` L895–928 lists page prerequisites QFT-MF04 and QFT-MF02. The current canonical `plan-spec.json` and assigned manifest list `distributions-test-functions-and-differentiation` and `qft-mf04`. The plan controls this conflict: the A page keeps those two current prerequisites. QFT-MF02 remains an exact direct item dependency of the causal-factorization theorem through the inspected scalar covariance and commutator carriers, and it is also transitive through QFT-MF04/QFT-MF03. The conflict and resolution are recorded here; shared plans and the dependency-level file were not changed.

The density lemma had a circular presentation in the initial draft: the definition cited uniqueness while the uniqueness result depended on that definition. It is resolved locally by defining \(\mathcal P_{\rm reg}\) as finite coefficient families with a field-evaluation map; the density lemma then proves that evaluation is injective. The B remark also needed a proved diagonal-delta input, so one local A-page theorem was added as explicitly required; the pair scope is unchanged, and the authorized inventory expansion is recorded in the manifest.

## Inventory, dependencies, and levels

The exact planned inventory is seven A items and two B items. One A-page prerequisite was added under the instruction to create missing local definitions before use, giving eight A items and two B items; its manifest row sets `inventory_expansion_required: true`. Both pages remain below the 100-item cap. Dependency levels are zero with no in-run item supplier, otherwise one plus the maximum in-run supplier level. The batch remains level 4 under the inspected batch-dependency record (batch 43 prerequisite).

| Item | Page | Level | In-run supplier(s) setting the level |
|---|---|---:|---|
| `def-qft-regular-polynomial-functional-algebra` | A | 0 | none |
| `thm-qft-diagonal-delta-distribution` | A | 0 | none; local expanded prerequisite |
| `thm-qft-bounded-regulator-dyson-factorization` | A | 0 | none |
| `lem-qft-tensor-test-function-density` | A | 1 | regular-algebra definition (0) |
| `thm-qft-regular-wick-star-associativity` | A | 2 | density lemma (1) |
| `rem-qft-local-wick-diagonal-obligation` | B | 7 | formal time-ordering definition (6), star theorem (2), density lemma (1), diagonal-delta theorem (0) |
| `lem-qft-regular-normal-order-isomorphism` | A | 3 | star-associativity theorem (2) |
| `ex-qft-regular-quadratic-star-product` | B | 3 | star-associativity theorem (2) |
| `def-qft-regular-formal-time-ordering` | A | 6 | QFT-MF04 kernel carrier (5) |
| `thm-qft-regular-formal-causal-factorization` | A | 7 | formal time-ordering definition (6) |

The regular-algebra definition directly names the test-space and LF topology, multi-index smoothness, fixed-compact Riemann integration/Fubini, and compact-parameter differentiation inputs. The local density proof adds the cutoff, Fourier/Fejer, compact-uniform-continuity, and test-topology suppliers. The bounded Dyson theorem states its Countable Choice strength for Hilbert adjoints and directly names Hilbert completeness, bounded-operator norm, compact-interval boundedness, the exponential series, Riemann integration, and the fundamental theorem of calculus. The finite contraction and normal-ordering arguments depend on the published tensor-product-distribution and smooth-parameter-pairing results. All imported mathematics is pinned; no imported item was edited.

## Supplier interfaces and readiness

The current QFT-MF04 kernel carrier was read in full. It fixes the `(-+++)` chart, `mu >= 0`, the partial spatial Fourier definition of `H_mu`, no extra prefactor `i`, symmetry under exchange, positive-time ordering, spacelike agreement, and `(Box-mu^2) H_mu = i delta`. The local time-ordering definition and causal theorem use those clauses explicitly. Its carrier exists in the batch-43 A manifest, and its Step 1 row recomputes closed/ready at 2026-10-14T05:13:54.713Z after the current QFT-MF02 statement update. Batch 43 is no longer listed in flight or artifact-missing. This is a current draft input for conditional proofs, not independent approval; the exact page and item interfaces are in the cross-batch ledger.

The current QFT-MF02 smeared-scalar statement was reread after its update: it gives the field formula, second-variable-linear vacuum covariance, the exact relative-coordinate $W_\mu$ shell integral, its translation-invariant bidistribution, and draft proof. The scalar causal-commutator statement gives `[Phi_mu(f), Phi_mu(g)] = -i Delta_mu(f,g) I` and closed causal support. Both items’ Step 1 records remain escalated pending owner repair/recertification of their QFT-MF01 dependencies. The causal-factorization proof is complete conditionally on those exact QFT-MF02 statements, but its readiness is escalated. A final prerequisite audit made the partition-of-unity input (`lem-test-function-cutoffs-and-euclidean-localization`) and tensor-product support rule (`thm-tensor-product-distributions-and-iterated-pairings`) explicit in that item and its contract; both are published mathematical suppliers and do not raise its in-run level. The Step 1 escalation was already recorded, so its record was preserved without overwrite; its dependency array predates these two final direct links, which are listed here for owner reconciliation. The formal-time-ordering definition has a current ready QFT-MF04 kernel prerequisite and is marked ready.

The B-page diagonal remark directly depends on the density/uniqueness lemma and the new diagonal-delta theorem for the intrinsic derivative obstruction. Its final scope claim also cites the regular star-product theorem and formal time-ordering definition, whose regular-polynomial input domains it uses explicitly; these in-run suppliers raise the remark to level 7. All ten item levels recompute exactly from the current manifest. Nine Step 1 records are ready for independent review, and causal factorization is escalated on its two QFT-MF02 inputs. Readiness is not acceptance.

## Sources and harvested results

Two independent complete QFT lecture-note treatments were read: Fredenhagen–Rejzner, the complete 42-page text at <https://arxiv.org/html/1208.1428>, §§4–7; and David Tong, complete Cambridge Chapter 3 at <https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html>, §§3.1.1 and 3.3.1–3.3.2. Fredenhagen–Rejzner support the regular/local distinction, contraction and normal-order formulas, and formal causal-factorization context. Tong supports the Dyson ordering structure and Wick contraction coefficients. Each source heading and its item disposition is recorded in coverage; local Fourier density and the diagonal-delta helper are separately listed as canonical results. The source results are context, not substitutes for complete local proofs.

The local density proof supplies a Fourier-series argument not supplied by those QFT treatments. The Dyson theorem adds a rigorous bounded-operator result to Tong’s formal series. The B-page quadratic coefficients are fully checked in proof steps 1.1–1.3. The local extension discussion is deferred to planned page `qft-ir04`; the B remark proves only the diagonal obstruction and makes no local product claim.

## Plan, status, checks, and blockers

The existing physics-local autopilot state is at `.physics-autopilot/physics-td-qft-rpm-62-2026-10-14`. Its status command at 2026-10-14T06:03:56.746Z still reports that live recomputation is unavailable because the workflow revision differs, while showing its refreshed last report: stage `1-scaffold`, 58/64 batches covered, batch 61 in flight, and no artifact-missing flag for 61. The remaining artifact-missing batches are 13, 18, 47, and 52; the report retains an owner repair/recertification blocker and a scheduling-scope mismatch. The parent `.autopilot` has no per-run directory for this run; its status invocation could not initialize one because that path is outside the writable physics workspace. No controller state, shared plan, or verdict was edited by this batch.

Final scoped checks: precheck passed 8/8 proof-bearing items; strict proof-contract validation passed all 8 with zero errors or warnings; rendercheck passed all 10 items and both pages; depcheck passed 10 items and 2 pages with zero errors or warnings; content policy passed 10 items; manifest dependencies passed 10 items; coverage checklist passed 13 harvested results with zero warnings; source-fetch check verified both full-text sources (0 newly stamped); and the batch author-check passed its precheck, renderer, full content-policy, and strict proof-contract gates and wrote `physics-td-qft-rpm-62-2026-10-14-author-check-61.json`. The proof-layout command was run on all 10 changed items, but the renderer could not load the app alias `@/components` from `web/components/library/ItemBody.tsx`; this environment blocker is unresolved.

The run-wide item-level dependency check currently reports five unrelated mismatches: `def-td-cross-type-reaction-network`, `pthm-td-contact-product-comparison`, `pthm-td-entropy-under-product-comparison`, `pthm-td-universal-mixing-entropy`, and `rem-td-entropy-construction-hypotheses`. None names batch 61. All ten batch-61 levels match the computed levels shown in the table. The batch-dependency-level check reports the shared run file stale; it was left unchanged as required.

Step 1 records: nine items are `ready`; `thm-qft-regular-formal-causal-factorization` is `escalated` because `lem-qft-smeared-free-scalar` and `lem-qft-scalar-causal-commutator` remain escalated pending owner repair and recertification of their QFT-MF01 inputs. The causal proof and contract remain complete at the actual current supplier interfaces. The QFT-MF04 kernel carrier is ready and supports the formal-time-ordering definition. All ready records are authoring dispositions for independent review, not independent approval.
