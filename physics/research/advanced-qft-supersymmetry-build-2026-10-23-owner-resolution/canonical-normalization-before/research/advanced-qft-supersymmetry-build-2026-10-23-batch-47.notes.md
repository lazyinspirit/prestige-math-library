# Batch 47 authoring notes — Rigid Supersymmetric Backgrounds and Localization Data

## Owner repair observation — 2026-10-23 (supersedes historical readiness below)

The completed batch31 native records were observed before owner source repair
with `loadStep1Record`/`step1Decision`: all eight rows closed and hash-current.
The authorized source edits now invalidate affected rows; root must recertify
the current sources rather than reuse those historical observations.
The original missing-readiness observations below describe the worker's actual
earlier input state; their preimages and native rows are preserved in
`research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/susy-conventions-before/`.
Current scoped edge checks are in the cross-batch file and the owner report
`susy-conventions-readiness-repair.md`. Root alone will recertify readiness;
this update creates no native row or proof-acceptance stamp.

No background model or public claim was changed. The superseded missing-N4
readiness sentence was removed from the S4 postulate Facts, keeping all actual
model and quantum/continuum qualifications. Realification applies to the
supplied smooth finite-dimensional complex representations (Spin4 and any
complex spin/R matter representation); its real quotient theorem is not
silently used as a complex theorem. The selected Euclidean spin data and
curved S4 action are supplied independently of the flat Minkowski N4 action.

## Historical native authoring notes (unchanged below)

Run: advanced-qft-supersymmetry-build-2026-10-23  
Owned pair: qftx-susy-backgrounds / qftx-susy-backgrounds-examples  
Scope: physics library, advanced-qft-and-supersymmetry, A-page order 1003.

## Plan, inventory, and ownership

The complete design at research/plan-advanced-qft-and-supersymmetry-track.md, section “Rigid Supersymmetric Backgrounds and Localization Data” (lines 653–660), agrees with the selected research/plan-spec.json entries: title, category, library, A/B page IDs, and requires [qftx-susy-extended-actions, qftx-equivariant-cohomology]. No plan/design conflict was found.

The original A inventory listed def-qftx-susy-background-data and post-qftx-rigid-supersymmetric-background. During prerequisite inspection I found that the imported associated-vector-bundle theorem only covers finite-dimensional real representations, while the spinor bundles use complex representations on C². I therefore added thm-qftx-complex-associated-bundle-realification as a local mathematical supplier on the A page. It proves the induced complex structure from the real associated-bundle atlas. The page order is supplier theorem, background definition, S4 postulate. This is the required local well-definedness result, not a change to the shared plan.

The planned B inventory was empty as a planning placeholder. Under the current owner direction I authored two examples: the flat periodic four-torus geometric-spinor example and the conditional round-S4 Q-square/finite-base-Cartan example. The A and B page files contain YAML frontmatter only; both page bodies remain empty, with no summary. The page cap is not close to being reached.

## Dependency levels

The current run-level graph has batch 47 at level 5, requiring batches 7 and 31. After a later check observed a stale run manifest during the shared build, I rewrote the derived graph and immediately rechecked it. The final batch-dependency-levels check passed for 55 batches with maximum level 9. Page-level and item-level levels are distinct scheduling metadata.

| Item | In-run suppliers and levels | Item level |
|---|---|---:|
| thm-qftx-complex-associated-bundle-realification | none; its inputs are imported mathematical suppliers | 0 |
| def-qftx-susy-background-data | local complex-associated-bundle theorem (0) | 1 |
| post-qftx-rigid-supersymmetric-background | definition (1), current batch-31 N4 carrier (7), Cartan definition (2) | 8 |
| ex-qftx-susy-flat-torus-geometric-background | definition (1) | 2 |
| ex-qftx-susy-round-s4-localization-data | definition (1), S4 postulate (8), N4 carrier (7), Cartan definition (2) | 9 |

The N4 carrier appeared in the current batch-31 manifest during this authoring session. Its actual item level is 7, so the previous provisional levels 3 and 4 for the S4 postulate/example were recomputed to 8 and 9. No item cycle was found.

## Mathematical suppliers and interface checks

The direct mathematical inputs of def-qftx-susy-background-data are def-countable-choice, def-smooth-manifold, def-riemannian-metric-and-riemannian-manifold, def-frame-bundle-of-a-smooth-manifold, def-oriented-real-vector-bundle-and-oriented-frame-bundle, def-smooth-principal-g-bundle, def-principal-g-bundle-and-associated-fiber-bundle, def-principal-connection-and-vertical-curvature, thm-associated-vector-bundle-is-well-defined, thm-qftx-complex-associated-bundle-realification, and thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle. The imported originals are published and read-only. Their relevant statements were inspected; the associated-vector-bundle and Levi-Civita theorem proofs were read in full. The definition makes the metric-dependent SO(4) frame structure and spin lift/connection supplied data, so it does not claim a spin structure or Killing spinor exists on every metric.

The local theorem thm-qftx-complex-associated-bundle-realification treats W as a real vector space, applies thm-associated-vector-bundle-is-well-defined, defines J[p,w]=[p,iw], checks the quotient relation using complex-linearity, and verifies smoothness in the local real bundle charts. John M. Lee, Introduction to Smooth Manifolds, 2nd ed., §10, Lemma 10.6 and complete proof (PDF pp. 270–271) supports the real vector-bundle chart criterion; the complex-structure extension is proved locally in this batch. Its full-text fetch is stamped.

The current mathematical supplier qftx-equivariant-cohomology was inspected, including def-torus-equivariant-cohomology-cartan-model and its d_T-squared proof. It defines Borel and real Cartan equivariant cohomology for compact tori, but it does not claim a general Borel–Cartan isomorphism. loadStep1Record plus step1Decision reports the Cartan item ready at hash 5487bc1bcee36dafba1b3e4747874ed8427cefc586a5a1f8ec92687e20924551.

The current batch-31 qftx-susy-extended-actions A/B pages and item carriers now exist. I read the full post-qftx-n4-super-yang-mills-model statement and the relevant transitive N2, N1 gauge-matter, and non-Abelian Yang–Mills statements, along with its four superspace/algebra definition inputs. The N4 carrier's direct dependencies are def-qftx-super-poincare-algebra-4d, def-qftx-superspace-grassmann-algebra, def-qftx-n1-chiral-superfield, def-qftx-n1-vector-superfield, post-qftx-n1-gauge-matter-model, post-qftx-n2-vector-hypermultiplet-model, and post-qftx-nonabelian-yang-mills-model. The N4 carrier is an adopted physical postulate, not a proof of extended invariance. Its actual interface matches the S4 use in global form SU(2), basis T_a=-i sigma_a/2, invariant form kappa=-2 Tr_2, positive dimensionless coupling g, connection-normalized adjoint chiral fields, and one vector plus three adjoint chirals (six real adjoint scalars and four adjoint Weyl fermions on shell). In the Euclidean gauge term, -Tr_2(F^2/2g^2)=kappa(F,F)/(4g^2), consistent with the Wick-continued vector normalization. This is a scoped group/normalization/component check; it does not identify the supplier's flat Minkowski action with the separately adopted curved S4 action, curvature coupling, localizing algebra, gauge fixing, contour, or regulator.

Current readiness checks for that dependency chain: post-qftx-n4-super-yang-mills-model has no Step 1 record; post-qftx-n2-vector-hypermultiplet-model also has no Step 1 record. post-qftx-n1-gauge-matter-model is ready at hash 4c4e6f0042ee659c16e4a24c8e1866526d9aaa69fefd881b617d0fe91cb8cb52, and post-qftx-nonabelian-yang-mills-model is ready at hash 8f4f7b5ace5187170381ad383d2dc6475e8b326b46e786499305b6fcc476667b. The N4 carrier's missing current readiness record is a genuine unresolved Step 1 prerequisite; draft status or its not-applicable proof field alone is not the reason for escalation.

## Item claims and decisions

### thm-qftx-complex-associated-bundle-realification

Claim: for a smooth complex representation of a finite-dimensional Lie group, the real associated vector bundle carries the complex structure J[p,w]=[p,iw]; in its local charts J is smooth and the transition maps remain complex-linear. The item uses only mathematical prerequisites, has axiom base ZF, and does not assert uniqueness among unrelated complex structures on the underlying real bundle. Its proof is complete and contract IDs, exact supplier excerpts, and checked boundary cases match steps 1.1 and 2.1.

### def-qftx-susy-background-data

Claim: defines explicit Euclidean four-dimensional spin/R/gauge background inputs, the model-specific Killing-spinor equation, off-shell multiplet and square, gauge fixing and ghosts, contour, measure or regulator, and the analytic conditions required for a localization deformation. It treats the metric-dependent frame structure, spin lift, and connections as supplied data and claims no arbitrary-background existence or constructed continuum measure. Natural units and the right principal-bundle/associated-bundle conventions are stated. Its direct mathematical dependencies are listed above; item level 1.

### post-qftx-rigid-supersymmetric-background

Claim: adopts the source-qualified massless N=4 SU(2) model on round S4 with explicit metric, fields/action, gamma conventions, selected conformal Killing spinors, seven auxiliaries, off-shell transformations, gauge fixing, zero modes, contours, and formal measure/regulator inputs. The zero-theta convention is explicit. The actual batch-31 N4 carrier interface matches the group, trace/coupling, scalar normalization, and component content. The carrier's Step 1 readiness record is missing, so this consumer is escalated despite the completed conditional authoring.

The BRST notation distinguishes the connection from adjoint tensors: delta A_mu=D_mu c=-delta_gauge(c)A_mu, with delta_gauge(u)A_mu=-D_mu u. This makes the connection square use the same declared gauge-action convention as the adjoint fields.

### ex-qftx-susy-flat-torus-geometric-background

Claim: on the explicitly trivial periodic spin bundle over a flat four-torus, every fixed nonzero constant positive-chiral spinor is parallel. The example proves the constant section directly and states that this is only geometric spin/R/Killing-spinor input, not a localization package. It is ready at level 2.

### ex-qftx-susy-round-s4-localization-data

Claim: checks the actual N4 component/normalization interface conditionally, expands Q=s+delta on adjoint tensor fields, the connection, and ghosts, and applies the Cartan definition only to the finite-dimensional smooth circle action on S4. It makes no inference to the infinite-dimensional field space or continuum localization. The Q-square and Cartan steps are complete; Step 1 remains escalated because the current N4 supplier readiness record is missing.

## Source reading and disposition

- Festuccia–Seiberg, Rigid Supersymmetric Theories in Curved Superspace, https://arxiv.org/pdf/1105.0689: retrieved the full 28-page paper and read §2 equations (2.9)–(2.11), including the rigid Planck-mass limit and complete gravitino/Killing-spinor passage, plus §4 equation (4.1). Supports the general fixed-background definition. The old-minimal N=1 S4 reality qualification is retained only as a warning and is not transferred to N=4.
- Pestun, Localization of Gauge Theory on a Four-Sphere and Supersymmetric Wilson Loops, https://arxiv.org/pdf/0712.2824: retrieved the full 58-page paper and read §1's explicit assumed/not-constructed S4 noncommutative-regulator caveat; §2 equations (2.1)–(2.14), (2.26)–(2.30); §§4.1–4.3 equations (4.1)–(4.15); and Appendix C's off-shell closure calculation. Supports the background definition, S4 postulate, and S4 example. This includes the action/contour, selected spinors, seven auxiliary fields, Faddeev–Popov zero-mode treatment, mixed supersymmetry/BRST algebra, and total Q-square.
- Peelaers, 4d N=2 Localization lecture notes, https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf: retrieved the full 21-page note and read §1.1–§1.2, equations (19)–(26), PDF pp. 3–4. Supports the independent S4 background, measure/off-shell assumptions, and S4 example scope; it explicitly defers the localization argument.
- Lee, Introduction to Smooth Manifolds, 2nd ed., https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf: retrieved the 726-page full-text PDF and inspected the complete Vector Bundle Chart Lemma 10.6 statement and proof, PDF pp. 270–271, for thm-qftx-complex-associated-bundle-realification's local real-bundle atlas criterion. The complex structure itself is proved in this batch.

Coverage records per-item dispositions and source limitations. No retrieval failed and no source was dropped. source-fetch-check --stamp reports 6/6 source records fetch-verified and resolved; no source-resolution drop record is required.

## Cross-batch dependencies

research/advanced-qft-supersymmetry-build-2026-10-23-batch-47.cross-batch-dependencies.json is a JSON array with one row per direct external page/item edge. The qftx-susy-extended-actions page edge and the two Cartan page/item edges are verified as scoped interface checks. The postulate→N4 and S4-example→N4 item rows remain open because the supplier's current Step 1 record is missing; the evidence records the matching interface without claiming supplier readiness, proof approval, or publication. Transitive N2/N1/non-Abelian observations remain in these notes, not as unsupported cross-batch rows.

## Final readiness records and scoped checks

Step 1 records were written without --owner. Ready: thm-qftx-complex-associated-bundle-realification (hash e3ff8dca35dafa80f09392ba121585ba4b463fae431122fe62aa1641027d3a1d), def-qftx-susy-background-data (hash 9d8e8fa8e51ce07b5a4f9a55be7d9d3139a1323c7355d8b1a36286e651fe5207), and ex-qftx-susy-flat-torus-geometric-background (hash 1e77d74ce4e920df5b077d565c9db5cb3b37a8a292a0b2c9ff68de646c5b02b3). Escalated: post-qftx-rigid-supersymmetric-background and ex-qftx-susy-round-s4-localization-data, each for the exact missing current Step 1 readiness record on post-qftx-n4-super-yang-mills-model. loadStep1Record plus step1Decision confirmed the three ready rows current, both owned escalations intact, N4/N2 supplier records missing, and Cartan readiness current.

The two escalated records were authored before the final postulate field-strength typing clarification and the example's N4 interface-check step. Their stored hashes (postulate 2333eadd06b23ca1061c3d45399be93958b35a027065cc6264577c4be982521b; S4 example d8fbe64c24a173dbe0e709e7e2b0e660a457112d13293b40eafd0a55d573cbb5) differ from the current item hashes (postulate 9f6e71b071425245b43272e6d1352aefd6338ff8c99bcfed1da45241201ceff4; S4 example 452f6e4ea9d020c411ff47775237cee5146bf70c62d994770a7ce6353164694a). step1Decision still returns both as escalated with the same genuine missing N4 readiness prerequisite; I did not overwrite either escalation under the Step 1 instruction. An owner must refresh these escalated records after reviewing the final clarifications.

Final scoped checks:

- batch-dependency-levels write/check: pass, 55 batches, maximum level 9; batch 47 level 5.
- source-fetch-check --stamp: pass, 6/6 verified and resolved.
- content-policy: pass, 5 items, 0 errors and 0 warnings.
- depcheck: pass for 5 items and their closure, 0 errors and 0 warnings.
- rendercheck: pass for 5 items and 2 pages, 7 files checked.
- proof-layout: pass for 5 items, 10 steps, 0 defects.
- precheck: pass, 5 files, 4 checked, 0 failed; the definition is not applicable and the postulate is checked as nonproof structure.
- proof-contract.mjs --strict scoped to the 5 owned items: pass, exact supplier excerpts and phase-step/input mappings current.
- coverage-checklist: pass, 2 pages, 22 harvested results, 0 errors and 0 warnings.
- Run-wide proof-contract-coverage could not complete because batch 34 still has empty A/B inventories: qftx-susy-breaking-and-phenomenology and qftx-susy-breaking-and-phenomenology-examples. This is outside batch 47 ownership; the scoped proof-contract validator passes for every batch-47 item.

## Remaining owner handoff

The only owned readiness escalations are the two S4 consumers awaiting the current N4 Step 1 record. The N4 field/group/normalization interface has been checked and matches; the missing N4 and transitive N2 readiness records remain explicit. Run-wide proof-contract coverage also needs batch 34's empty inventories resolved by that owner. No mathematical uncertainty remains in the local realification proof, flat-torus calculation, or conditional Q-square derivation; no continuum measure or localization theorem is claimed.
