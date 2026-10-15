# Batch 27 authoring notes — physics-td-qft-rpm-62-2026-10-14

## Scope and inventory

Owned pair: A page rpm-spin-finite-size and B companion rpm-spin-finite-size-examples. The authored inventory is the 13 planned A items and 4 planned B examples in the sibling pages manifest. The page orders, titles, category, library and exact declared page prerequisites match the plan. Both pages remain drafts; neither page exceeds the 100-item cap.

## Plan and design reconciliation

The current plan-spec row and the assignment agree on A order 423, B order 424, titles, category, library, companion and all five A-page prerequisites. The plan-spec item arrays are empty by design; the assigned item inventory comes from the plan reservation and owner dispatch, so no shared plan file was edited. The owner direction to continue authoring without a prerequisite wait barrier was followed.

The research inventory and proof modules contain stale supplier aliases: thm-gr-local-geodesics-transport-and-normal-charts, thm-gr-convex-normal-neighborhood-and-causal-tools, and thm-gr-lorentz-curvature-bianchi-and-jacobi are not current carriers. The local body-moment definition instead uses the inspected current carriers thm-gr-local-geodesics-and-exponential-map, lem-gr-parallel-transport-and-geodesic-speed, and thm-gr-convex-normal-neighborhoods. The current curvature definition and algebraic-symmetry theorem replace the stale curvature alias. The nonexistent research identifiers research-S10-right-wedge-and-FW-contract and research-NR-E2-local-ODE-contract were not used as suppliers.

The current batch-24 files now contain def-rpm-charge-spin-model, post-rpm-bmt-dipole-model and pthm-rpm-external-charge-action-equivalence. Their exact live statements were inspected. The BMT theorem and rest-frame theorem explicitly depend on the action-equivalence result to obtain the Lorentz-force translation equation; the adopted postulate alone states stationarity of a local action. The BMT postulate remains an adopted classical law, with its curved varying-field use identified as an independent model extension. The current field convention is def-em-electromagnetic-tensor; no nonexistent def-em-covariant-sign-conventions carrier is used.

## Dependency order and levels

Batch-level evidence assigns batch 27 level 2 and requires batch 24. Item levels below use one plus the maximum level of in-run suppliers, or zero when there is no in-run supplier. Draft/model suppliers are evaluated at their exact current statement and proof status, not presumed accepted from their status label.

| Item | Level | In-run supplier calculation |
|---|---:|---|
| `lem-rpm-bmt-transport-algebra` | 0 | No in-run item supplier. |
| `lem-rpm-body-spin-size-bound` | 0 | No in-run item supplier. |
| `lem-rpm-charge-multipole-remainder` | 0 | No in-run item supplier. |
| `lem-rpm-flat-centroid-shift` | 0 | No in-run item supplier. |
| `lem-rpm-ssc-momentum-identity` | 0 | No in-run item supplier. |
| `lem-rpm-td-local-closure` | 1 | One plus the level-0 local SSC identity; its other suppliers are outside this run batch. |
| `def-rpm-body-moments` | 2 | One plus the batch-24 charged-spin definition at level 1. |
| `post-rpm-mpd-truncation` | 3 | One plus body-moments definition at level 2. |
| `pthm-rpm-bmt-constraints` | 4 | One plus the maximum level 3 of the adopted BMT postulate and charged-action equivalence from batch 24. |
| `pthm-rpm-spherical-charge-size-bound` | 3 | One plus body-moments definition at level 2. |
| `pthm-rpm-hidden-momentum` | 4 | One plus neutral MPD postulate at level 3. |
| `pthm-rpm-rest-spin-and-size-bound` | 4 | One plus the maximum level 3 of the BMT postulate and charged-action equivalence. |
| `pthm-rpm-td-invariants` | 4 | One plus MPD postulate at level 3; closure lemma is level 1. |
| `ex-rpm-bmt-fw-and-g-two` | 5 | One plus BMT constraint theorem at level 4. |
| `ex-rpm-fixed-versus-scaled-charge` | 4 | One plus spherical energy theorem at level 3. |
| `ex-rpm-rest-spin-and-size-bound` | 5 | One plus rest-spin theorem at level 4. |
| `ex-rpm-spinless-td` | 5 | One plus TD invariants theorem at level 4. |

All current required carriers exist. The batch-24 charged-spin definition (level 1), action-equivalence theorem (level 3), and adopted BMT postulate (level 3) are drafts; their exact interfaces and conditional proof/model status are preserved in consuming statements. No unresolved prerequisite was omitted or treated as published. The cross-batch dependency file records exact excerpts and consumer use for all external item and page edges.

## Mathematical and physical scope

The local TD closure is a mathematical conditional theorem on the explicit open region where K is invertible and K-inverse-p is future timelike. It proves TD-constraint preservation and local uniqueness and makes no continuation claim beyond that region. The pole-dipole equations remain an adopted test-body truncation, not a consequence of the body-moment definition. BMT conclusions are conditional on the adopted model and local action-equivalence result; the BMT polarization vector s is never identified with the body's angular-momentum vector s-star. The spherical energy inequality assumes a Coulomb exterior and nonnegative remaining energy and does not infer either from spherical symmetry. The positive-energy spin-size result keeps e>=0 and |j|<=e/c as explicit hypotheses. The multipole remainder is componentwise in a fixed smooth trivialization.

## Source harvest and retrieval history

The A-page coverage ledger records the complete relevant Costa–Natário article sections, the UVA BMT lecture, Likharev’s full HTML textbook section on electrostatic field energy, the CMU interval-integration notes, and the complete two-page BMT author-hosted paper. Costa–Natário is recorded as a survey/book-chapter treatment; UVA and Likharev provide independent full treatments. Every harvested source result has an explicit disposition and an assigned item or a specific out-of-scope reason.

The APS BMT PDF endpoint returned HTTP 401 on the prior attempt and five recorded recovery retries. The complete author-hosted IHES copy was found and inspected in full; its full-document receipt and verified hash are reused from batch 24. Tong’s PDF was fetched six times, but its compressed page count could not be verified because mutool is unavailable; the Feynman HTML alternative then returned HTTP 403 to the fetcher. The point-charge and spherical-field results are preserved through the fully readable Likharev textbook section, with exact attempts and per-item arguments in source_resolution. No mathematical result or item was dropped. The source-fetch-check stamps are retained only for the exact bytes and full-text records they verify.

## Contracts, checks and readiness

The proof-contract file covers every proof-bearing item and supplies the actual proof steps, exact supplier excerpts, fact-to-step uses, all eight standard boundary dispositions, risk notes and applicable finite algebra checks. The MPD postulate has a formulation/scope/source/non-derivation physics review; the body-moment definition has no manufactured proof worksheet.

Required scoped check results will be appended after the final source stamps and proof-layout pass. Readiness records will reflect current direct dependencies and drafts, not independent mathematical approval. Completion evidence does not constitute independent review.
