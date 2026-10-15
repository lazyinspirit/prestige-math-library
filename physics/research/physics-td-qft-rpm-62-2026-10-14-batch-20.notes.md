# Batch 20 notes — Continuum Heat Model

Run: physics-td-qft-rpm-62-2026-10-14  
Role: beta, batch 20  
Owned pair: td-continuum-heat-model / td-continuum-heat-model-examples

## Plan comparison and scope

The binding owner direction and complete design section were read before authoring. plan-spec.json matches the A/B page IDs, title, category, library, order 301/302, companion, and required pages. Its items: [] is the pre-authoring placeholder.

There is one stale-design conflict. The earlier TD11 prose-scaffold row in research/first-principles-2026-10-03/thermodynamics/scaffold/prose-scaffold.md reserves five A items and two examples and says there is no general PDE existence claim. The current detailed plan reservation in plan-thermodynamics-track.md names ten A items, including the collision H theorem, constant-conductivity Neumann existence, and Neumann relaxation. Its later amendment identifies the latter two as the scoped M34 results. The current plan controls. The authored PDE result is restricted to positive constant capacity and conductivity and even-periodic uniformly regular initial data; no rough-data or arbitrary-domain existence claim was added.

The A page has the ten reserved items plus two local prerequisites: post-td-local-equilibrium-entropy-density, an explicitly adopted caloric relation needed by the local entropy proof, and lem-td-rectangular-poincare, a complete local proof needed by the stated relaxation rate. Inventory is 12/24 reserved A items and 2/8 reserved B items, below both reserved limits and the 100-item hard cap. The examples are constructed model calculations, not observations.

## Inventory and dependency levels

Batch dependency level is 4, with batch prerequisites 2, 5, and 12. The current item graph was inspected before authoring and recomputed after the inventory was populated. Supplier-first page order is recorded in the A page and manifest.

| Item | Level |
| --- | ---: |
| lem-td-rectangular-poincare | 0 |
| def-td-rectangular-local-equilibrium-fields | 1 |
| def-td-regular-elastic-collision-model | 1 |
| post-td-fourier-conductivity | 2 |
| post-td-boltzmann-molecular-chaos-model | 2 |
| pthm-td-collision-h-theorem | 3 |
| post-td-local-energy-balance | 5 |
| post-td-local-equilibrium-entropy-density | 5 |
| pthm-td-fourier-entropy-production | 6 |
| pthm-td-constant-conductivity-neumann-existence | 6 |
| ex-td-diffusive-infinite-propagation | 7 |
| pthm-td-neumann-heat-relaxation | 7 |
| rem-td-solution-existence-scope | 8 |
| ex-td-insulated-polynomial-relaxation | 8 |

The full-run item-level checker reports unrelated empty inventories and level mismatches outside batch 20; none names a batch-20 item. The full batch-level checker reports the persisted whole-run graph as stale. The read-only batch dependency record still declares batch 20 at level 4 with prerequisites 2/5/12. Shared graph and engine state were left unchanged.

## Prerequisite and interface review

The three declared page prerequisites were inspected:

- td-entropy-foundation is present as a draft; its entropy postulate supplies macroscopic context only. The local caloric entropy-density relation is adopted separately.
- td-math-local-pfaff-geometry is present as a draft, but its required page edge to td-math-nonsmooth-equilibrium is open. The local-rank supplier appeared in the batch-4 A manifest after the batch-20 Step-1 records were written; its current statement and proof match the Frobenius use (m=2N, q=N, solved minor D_Phi(0)). The page edge remains open through td-math-nonsmooth-equilibrium → td-math-ordered-composition. No batch-20 item uses the Frobenius theorem.
- td-math-mixture-dynamics-and-shells is present as a draft, but its required edge to td-math-ensembles-and-limits is open. Its current collision definition and entropy theorem are present; their Step-1 records are themselves escalated on that page-level blocker.

The exact item edges and evidence are in batch-20.cross-batch-dependencies.json. In particular, the batch-12 collision definition matches the physical three-dimensional collision set, exchange symmetries, and weak-identity convention. The physical model adds explicit sigma-finiteness so the spatial/collision product measures in the consumer are well-defined. The entropy theorem interface matches the positive regular periodic d=3 solution, moments, domination, symmetry, weak identity, and kinetic equation. Its current carrier is a draft with a complete written proof but no verification stamp or independent acceptance. The consumer states it as a conditional premise and uses only the entropy inequality and collision-balance equality condition; it does not use the optional Maxwellian classification or claim that molecular chaos follows from many-particle mechanics.

The root mathematical heat-kernel theorem and its direct proof dependencies were inspected. Countable Choice is the only choice principle used. The constant-coefficient result separately verifies the Gaussian convolution, the even-periodic Neumann faces, regularity at the initial time, local energy balance, and uniqueness. The local Poincare lemma proves its exact constant from the named rectangle-integration suppliers. No imported mathematics or other pair's carrier was edited.

## Source reading, harvest, and recovery

The coverage file records 24 harvested results and every disposition. The low-yield warning is explained by the page's small scope: 9 source results are scaffolded as items; the other 15 are explicitly inline context absorbed into those definitions, postulates, proofs, or scope caveats. No result is silently omitted.

Two independent full-text treatments were read for the page, including complete lecture notes and a complete textbook: Arovas's 607-page lecture notes and Likharev's 224-page current-edition textbook. The Arovas PDF is fetch-verified; Likharev's complete PDF was retrieved and read but its compressed page count could not be verified by mutool. Fitzpatrick's complete author-hosted H-theorem section is also fetch-verified. Hunter's complete 242-page notes and the relevant full chapter PDFs, MIT's full lecture notes, and the full OCW lectures were inspected for the listed sections.

source-fetch-check --stamp exhausted the initial attempt plus five retries on seven PDF URLs because mutool could not verify their compressed page trees. These URLs and all attempts/searches are preserved with per-item alternative arguments and dependencies in batch-20.coverage.json. The final fetch check reports 2/9 sources fetch-verified and 9/9 resolved; the seven failures are documented drops, not unrecorded retrievals. The active Arovas, Fitzpatrick, and complete local conditional arguments preserve the covered claims.

## Scoped checks and readiness

Final scoped checks:

- proof-layout.mjs: 14 assigned items, 27 steps, 0 defects.
- Physics precheck: 14 files, 11 checked, 0 failures; the two definitions and scope remark are not applicable.
- Strict proof contracts: 14/14 items, 0 errors, 0 warnings.
- Focused content policy: 14 items, 0 errors, 0 warnings.
- Focused rendercheck: 16 item/page files, 0 errors, 0 warnings.
- Focused depcheck: 14 assigned items and their prerequisite closure, 0 errors, 0 warnings.
- Focused fwdcheck: 0 open forward references; the remark's cross-page reference to the B example is closed.
- Focused extcheck: 14 items, 0 errors, 0 warnings.
- Coverage checklist: 24 harvested results, 0 errors, 1 explained low-yield warning.
- Source fetch check: 2 fetch-verified, 7 documented drops, 0 unresolved sources.
- Item dependency recomputation has no batch-20 errors; unrelated whole-run level and empty-inventory findings remain outside this assignment.
- Batch dependency check reports the persisted whole-run graph as stale; it was not edited.

All 14 item carriers, both pages, manifests, source coverage, proof contracts, and cross-batch inputs are complete. Step-1 readiness is escalated for the exact open page-level prerequisites recorded above: td-math-local-pfaff-geometry → td-math-nonsmooth-equilibrium → td-math-ordered-composition, and td-math-mixture-dynamics-and-shells → td-math-ensembles-and-limits. The collision definition and entropy theorem also retain their actual current batch-12 draft/escalated status. These records do not constitute independent proof approval.

Step-1 record verification: all 14 assigned items have current owner:false escalated records, and their saved hashes match the current transitive inputs. The full-run Step-1 check reports 659 items, 236 ready, and remains open on other run blockers; no batch-20 record is stale.

Post-readiness supplier update: batch-4 later added thm-tdmath-local-implicit-rank to its A manifest. I inspected its current statement and proof against the batch-5 Frobenius use (m=2N, q=N, solved minor D_Phi(0)); the actual interface matches. The batch-5 Frobenius Step-1 record remains escalated, and its page edge still reaches open td-math-nonsmooth-equilibrium → td-math-ordered-composition. Batch-20 Step-1 escalations are not overwritten; the current cross-batch evidence records the newly available rank carrier and the remaining page blocker. The assigned readiness remains escalated.
