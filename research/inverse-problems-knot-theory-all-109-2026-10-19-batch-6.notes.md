# Batch 6 authoring notes — Factorized and composite linear inversion

## Scope and controlling design

- Run: inverse-problems-knot-theory-all-109-2026-10-19; assigned pair: factorized-and-composite-linear-inversion / factorized-and-composite-linear-inversion-examples (orders 3008/3009), in inverse-problems.
- The owner direction and the Step-1 assignment control. Only this pair's draft items, A/B page frontmatter, and batch evidence are in scope.
- The complete IP-06 design in research/plan-inverse-problems-track.md calls for the composite double-regularization definition, a conditional double-discrepancy theorem, and an optimality open problem; its B leaves are a commuting diagonal case and a noncommuting rank-deficient failure.
- The plan-spec.json entries agree on page identities, orders, titles, category, companions, and all four A-page requires edges. Their empty items arrays are scaffold placeholders, not a design conflict. No shared plan was changed.

## Pre-carrier inventory and dependency order

The batch-6 manifest inventory was filled before writing any item carriers. Item `dependency_level` is computed over direct supplier edges to any item in any batch of this run: it is zero with no in-run item supplier, otherwise one plus the maximum level of those suppliers. Cross-batch in-run suppliers therefore count; out-of-run published suppliers do not. The dispatched batch level 4 is a page-requirement scheduling level and is distinct from these item levels.

- def-ip-composite-double-regularization: item level 2; its direct in-run supplier has level 1 (def-ip-compact-linear-inverse-model); def-compact-spectral-filter-and-qualification is published/out-of-run.
- thm-ip-double-discrepancy-conditional-convergence: item level 6; its direct in-run suppliers have maximum level 5, including the local definition and batch-2/3 interfaces; it also depends on published SVD/filter sources.
- ex-ip-composite-linear-inversion-commuting-diagonal: item level 3; its direct in-run supplier is the local level-2 definition; Tikhonov/filter and finite-matrix pseudoinverse interfaces are published/out-of-run.
- cex-ip-composite-pseudoinverse-factorization-fails: item level 3; its direct in-run supplier is the local level-2 definition; finite-matrix Moore–Penrose interfaces are published/out-of-run.
- op-ip-optimal-composite-discrepancy-rate: item level 7; its direct in-run suppliers are the level-2 definition and level-6 theorem, with the theorem used only as formulation context, not as a proof supplier.
- The full in-run item graph is acyclic. Supplier-first authoring order within this pair is definition (2), B leaves (3) and theorem (6), then open problem (7). The A page has 3 items and the B page 2, below the 100-item cap.

The dispatch task names scheduling input 1ccd466b2cb898a84cf5ecb84646c7967f8245bf2994895e79a5a131bbfecfef; the current shared batch-dependency artifact records input_sha256 394b3a6ddc24d5039024b0a5f3fa1ca2983c11bce6777cd1089a3afdc1d9e4e8. The item graph for this pair is independently calculated above. The shared scheduling artifact is owner-owned and will need current recomputation after manifest updates; it was not edited.

## Prerequisite audit

- linear-operators-pseudoinverses-and-picard-criteria exists at its required inverse-problems path. The actual compact inverse-model and Hilbert Moore–Penrose definitions and the Picard-range theorem were inspected. The Moore–Penrose domain is R(K) ⊕ R(K)^perp; it returns the minimum-norm solution for the range component and annihilates the orthogonal component. The exact current Step-1 records for the compact model, Moore–Penrose definition, and Picard theorem say ready; these are handoff records, not independent acceptance.
- deterministic-source-conditions-and-optimal-recovery and its batch-3 manifest are present. The actual power-source definition, spectral interpolation lemma, minimum-norm source lemma, and conditional-modulus proof were inspected. The convention is X_{nu,rho}(K) = {|K|^nu w : ||w|| <= rho}, with |K|=(K^*K)^(1/2); Countable Choice is carried. Current Step-1 records for the used source interfaces say ready; no acceptance or publication is inferred.
- parameter-choice-and-bakushinskii-veto is a required page-level prerequisite. Its actual noise-level-free rule and veto statement/proof were inspected, and both current Step-1 records are ready. IP-06's rules take the noise bound delta, so the veto is not used as an item-level theorem premise; the declared page requirement remains.
- spectral-regularization-and-parameter-choice is the published page in library/numerical-optimization-inverse-problems-and-uncertainty-quantification/. The actual published compact-filter definition was inspected: it uses R_eta=f_eta(H^*H)H^*, residual p_eta(t)=1-t f_eta(t), and source powers of H^*H. Its qualification exponent is on H^*H, so the theorem states the corresponding singular-value form explicitly.
- No supplier body, proof, axiom, or placement needed by the authored claims is missing. The required page edges remain explicit in the A-page manifest and cross-batch dependency input.

## Source reading, order resolution, and source defects

- Christina Brandt and Patrick Horn, “Regularisation and Parameter Choice Rules for Composite Linear Inverse Problems,” arXiv:2610.13483v1, 22 pages, submitted 9 October 2026: https://arxiv.org/pdf/2610.13483. The complete PDF was fetched and inspected. Relevant locations: abstract and introduction (printed pp. 1–2); equation (2), §2.1 and Theorem 1/proof (pp. 2–3); Theorem 2 and one-stage cases (pp. 3–4); Theorem 4 and Assumption 5 (pp. 5–6); Theorem 6, Lemmas 7–8, and its complete proof (pp. 6–9); Example 1 and conclusion (pp. 15–17); appendix interpolation inequality and filter norm lemma (pp. 20–21). The arXiv record is v1 only as of 2026-10-19; no peer-review status is claimed.
- The abstract says A=F o G, but introduction equation (2), §2.1, and the rest of the theoretical body say A=G o F, with estimator R_F_gamma R_G_alpha. The controlling IP-06 plan agrees with the latter. The authored definition follows A=G o F and R^F_gamma R^G_alpha.
- Theorem 6's closing statement writes z=|A|^nu w, although z is data in Z and |A|^nu w is a solution in X. Its proof instead sets x^dagger=A^dagger z=|A|^nu w and z=A x^dagger; the authored theorem uses this type-correct convention and states the compatible minimum-norm factorization.
- Theorem 6's printed rho exponent does not follow from its proof. Equation (20) gives ||R_F_gamma|| = O(rho^(1/(nu+1)) delta^(-1/(nu+1))), while the one-stage estimate is O(rho^(1/(nu+1)) delta^(nu/(nu+1))). Their product is O(rho^(2/(nu+1)) delta^((nu-1)/(nu+1))), not the displayed rho^(1/(nu+1)^2). The local proof retains both terms, C1 rho^(1/(nu+1)) delta^(nu/(nu+1)) + C2 rho^(2/(nu+1)) delta^((nu-1)/(nu+1)), so its convergence claim is fully supported without repeating the source's radius typo.
- The source proof's first-index estimate explicitly assumes nonzero exact data. The authored theorem therefore assumes z != 0 and remains conditional on existence of both first-crossing indices; no claim is made that the rules are defined for every zero-data/noise pair.
- Christian Clason, Regularization of Inverse Problems, full 137-page lecture notes: https://arxiv.org/pdf/2001.00617. Sections 5.1–5.2, printed pp. 46–54, were inspected, including the complete spectral-filter norm lemmas and Theorem 5.11 proof for Morozov under source conditions. This is an independent full lecture-notes treatment of the one-stage filter/discrepancy ingredients; it does not purport to treat Brandt–Horn's composite DDP.
- The Springer full-book PDF URL for Engl–Hanke–Neubauer was inaccessible through the browser. Alternative full sources were searched and retrieved successfully (Brandt–Horn PDF and Clason's full lecture notes); the book is not included as a used source and no retry is needed.
- Targeted searches for later work/resolution used queries for the exact arXiv title, 2610.13483 with “double discrepancy” and “optimality,” and “double discrepancy principle composite inverse problem.” As of 2026-10-19, the arXiv record lists only v1 and the paper's conclusion explicitly questions optimality of the a-priori rate and separately states the finite-qualification DDP rate without posing its sharpness; the DDP sharpness question is the local item's own formulation. No resolution was found. No source was dropped and no source_resolution drop record is warranted; successful used sources will receive actual source-fetch-check --stamp evidence.

## Item checkpoints

- def-ip-composite-double-regularization — local definition of A=G o F, domains/codomains, and estimator order R_F_gamma R_G_alpha; explicitly does not assert a general pseudoinverse product identity. The composition diagram is explanatory only.
- thm-ip-double-discrepancy-conditional-convergence — common singular system and compatible minimum-norm factorization; source ball x^dagger=|A|^nu w; both exact first-crossing residual rules; proof separates the exact composite bias from first-stage error amplified by the outer regularizer. The source's incorrect radius power is corrected in the local bound described above.
- ex-ip-composite-linear-inversion-commuting-diagonal — explicit invertible diagonal factors, exact Tikhonov maps, matrix product, and zero-parameter limit.
- cex-ip-composite-pseudoinverse-factorization-fails — rank-one noncommuting orthogonal projections; verifies the four Penrose equations and computes A^+ versus F^+G^+.
- op-ip-optimal-composite-discrepancy-rate — precise deterministic worst-case rate question for the two-stage first-crossing method. The open problem is terminal and is not a supplier.

## Run state and next action

The recomputed native status at authoring start was 45/109 Step-1 pages covered, with no active worker; Step 1 is held for owner repair/recertification under research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json. This batch proceeds independently and does not alter .autopilot/ state or the blocker. Recent git log was inspected. Final scoped check results and any global blockers are appended after authoring.


### Definition checkpoint — def-ip-composite-double-regularization

- Claim and convention: for compact Hilbert maps $F:X\to Y$ and $G:Y\to Z$, set $A=G\circ F$; the two-stage estimator applies $R^G_\alpha$ first and $R^F_\gamma$ second. The definition explicitly does not assert a general pseudoinverse product identity.
- Dependencies: def-ip-compact-linear-inverse-model and def-compact-spectral-filter-and-qualification; item dependency level 0 because both suppliers are outside this batch.
- Sources read: Brandt–Horn §2.1/equation (2)/Theorem 1, printed pp. 2–3, https://arxiv.org/pdf/2610.13483; Clason full lecture notes §5.1, printed pp. 44–50, https://arxiv.org/pdf/2001.00617.
- The operator-order discrepancy and source Theorem 1's minimum-norm compatibility conditions are recorded above. No missing supplier or unresolved definition remains.
- The carrier is frontmatter plus a domain/order diagram, with the definition statement uninterrupted by links. Definition precheck is n/a. Pair-local checks remain pending until all carriers are complete.
- Next action: author the level-1 conditional double-discrepancy theorem against the checked source and supplier interfaces.


### Example checkpoint — ex-ip-composite-linear-inversion-commuting-diagonal

- Claim: for F=diag(2,1) and G=diag(3,4), the composite Tikhonov estimator is diag(6/((4+gamma)(9+alpha)), 4/((1+gamma)(16+alpha))) and converges to A^+z.
- Dependencies: local composite-order definition, published spectral-filter convention, finite matrix pseudoinverse definition and existence/uniqueness theorem; level 1.
- The finite verification is exact matrix arithmetic; no numerical tolerance or general infinite-dimensional conclusion is used. Statement has no inline links and follows with its references section.
- Item authored; proof-layout, scoped proof/precheck, and contract checks are pending final batch validation.
- Next action: author the rank-deficient noncommuting counterexample and prove its Penrose equations directly.


### Counterexample checkpoint — cex-ip-composite-pseudoinverse-factorization-fails

- Refuted claim: the product identity for Moore–Penrose inverses holds for every composite. The witness uses rank-one orthogonal projections; direct products are FG = (1/2)B, GF = A, and A^+ = B.
- Dependencies: local composite convention and the published finite-matrix Penrose definition plus existence/uniqueness theorem; level 1.
- The four Penrose equations are verified explicitly, so the example does not infer a product rule from the source paper. Statement and counterexample descriptions are link-free; references follow each complete section.
- Item authored; finite arithmetic is exact. Pair-local proof-layout and contract checks remain pending.
- Next action: author the precise open-problem formulation after the two level-1 B leaves.


### Open-problem checkpoint — op-ip-optimal-composite-discrepancy-rate

- Formulation: determine the fixed-source-radius deterministic worst-case order for the exact two-stage first-crossing rules under the common singular-system and finite-qualification hypotheses; the candidate exponent is (nu-1)/(nu+1).
- Dependencies: composite estimator definition and local conditional-convergence theorem; level 2. This open problem has no consumers and is never a proof supplier.
- Status basis: Brandt–Horn v1 conclusion, printed p. 17, explicitly questions optimality of the a-priori rate and separately states the finite-qualification DDP rate without posing its sharpness. DDP sharpness is the local item's own formulation. Searches on 2610.13483, the exact title, “double discrepancy” and “optimality” found no later resolution as of 2026-10-19. No matching lower bound is claimed.
- Source corrections carried forward: the theorem's solution/data variable is corrected, and the displayed rho power is not reused; the local proved two-term bound is used in the formulation.
- The open-problem contract will record formulation, status, source-review evidence, and the terminal/no-supplier boundary. No proof or proof-acceptance stamp is present.
- Next action: complete pair cross-batch input and source coverage; author the final step-1 proof contracts, B-item checks, A/B frontmatter, and scoped validation.


## Final authoring evidence and handoff

### Final item inventory and readiness

The final item levels are computed from direct dependencies on any item in this run, including suppliers in other batches; published out-of-run suppliers do not raise an item level. The dispatched batch level 4 is a separate page-requirement scheduling level. The five carrier and manifest labels now match the run graph:

| Item | Claim | Direct in-run level | Step-1 decision |
| --- | --- | ---: | --- |
| def-ip-composite-double-regularization | Defines $A=G\circ F$ and the ordered two-stage estimator; no general pseudoinverse product identity | 2 | ready |
| ex-ip-composite-linear-inversion-commuting-diagonal | Exact finite-dimensional Tikhonov calculation and invertible limit | 3 | ready |
| cex-ip-composite-pseudoinverse-factorization-fails | Rank-one projections refute the universal pseudoinverse product identity | 3 | ready |
| thm-ip-double-discrepancy-conditional-convergence | Conditional two-term convergence estimate for the stated double-discrepancy rules | 6 | ready |
| op-ip-optimal-composite-discrepancy-rate | Sharp deterministic worst-case rate remains open under the full theorem hypotheses | 7 | ready |

Direct item dependencies are recorded in the batch manifest and the five readiness records. The theorem level 6 reflects its level-5 in-run suppliers; the open problem level 7 depends on the level-6 theorem only as formulation context. The assigned A page contains three items, and the B page contains two examples, below the 100-item cap. Both page carriers are YAML frontmatter only and have no summaries.

All five `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-<item>.json` records are `ready`, `owner: false`, and recheck as closed against current hashes. They record direct dependency IDs and authoring evidence; they are not independent review or acceptance.

The final theorem proof uses the canonical dependency-layer order `1.1`, `2.1`–`2.3`, `3.1`, `4.1`: stage bias, exact composite bias and outer parameter bound precede the noisy first-stage estimate, and the final estimate cites all four. The proof includes the compatible minimum-norm factorization, both first-grid cases, and the corrected two-term radius bound. The counterexample's witness description is in a link-free `Counterexample description` section with its references immediately following; its complete Penrose verification remains numbered under `Verification`.

### Validation results

- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-6.proof-contracts.json --strict`: 0 errors, 0 warnings, all 5 items checked.
- `node tools/tsx-run.mjs tools/precheck.mts` on the theorem and both B arguments: 3 checked, 0 failing; `verification.precheck: pass` is recorded for those items. The definition and open problem record precheck as not applicable.
- `node tools/proof-layout.mjs` on all 5 changed items: 5 items, 12 proof steps, 0 defects.
- `node tools/rendercheck.mjs` on all 5 items and both page files: 7 checked, no errors or warnings.
- Scoped `node tools/depcheck.mjs` on these five item IDs: 0 errors, 0 warnings; the reachable prerequisite item graph has 1,029 items.
- `node tools/content-policy.mjs` on the batch manifest: 5 items, 0 errors, 0 warnings.
- Scoped item-level recomputation reports manifest/computed pairs `2/2`, `6/6`, `7/7`, `3/3`, `3/3` for the five IDs above.
- `node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-6.coverage.json --stamp`: 2/2 sources fetch-verified, 0 newly stamped on the final pass, 0 dropped sources. The earlier initial stamping succeeded; the final non-stamping source check also reports 2/2 verified and resolved.
- `node tools/coverage-checklist.mjs` reports 0 errors and one review warning: 3 of 26 harvested results were scaffolded. Each remaining Brandt–Horn/Clason result has an item, inline disposition, or a reasoned out-of-scope disposition in coverage; Alpha should confirm those declines.

### Owner reconciliation items

- The read-only global `item-dependency-levels` check still exits nonzero outside this batch: it reports 76 empty scaffold page inventories and seven unrelated item-level metadata defects. The seven item defects are `cex-knot-kt-21-boundary-case` (dependency_level must be a nonnegative integer), `lem-kauffman-smoothing-operators-for-braid-crossings` (0, computed 1), `lem-alternating-state-adequacy-and-jones-span` (3, computed 5), `thm-reduced-alternating-diagram-minimizes-crossings` (3, computed 4), `cor-jones-span-detects-crossing-number-for-reduced-alternating-knots` (4, computed 6), `cex-knot-kt-50-boundary-case` (1, computed 5), and `ex-knot-kt-50-worked-cases` (5, computed 7). No out-of-scope carrier was edited. The existing run blocker inventory is `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json`.
- The dispatch names scheduling input `1ccd466b2cb898a84cf5ecb84646c7967f8245bf2994895e79a5a131bbfecfef`, while the shared batch-dependency artifact records `394b3a6ddc24d5039024b0a5f3fa1ca2983c11bce6777cd1089a3afdc1d9e4e8`. The read-only `node tools/batch-dependency-levels.mjs check --run inverse-problems-knot-theory-all-109-2026-10-19` reports stale levels. Reconciliation belongs to the owner; this batch did not rewrite the shared scheduling artifact.
- No direct supplier body, proof, convention, or axiom needed by these five items remains unresolved. The inaccessible Engl–Hanke–Neubauer full-book URL was not used or dropped; the full Brandt–Horn paper and Clason lecture notes were retrieved and read as alternatives, so no `source_resolution` drop record applies.
- Final recomputed native status remains `running`, with Step 1 scaffold at 56/109 pages, no work in flight, and the existing 1-scaffold owner-repair/recertification blocker pointing to the blocker inventory above. No runtime state or verdict was edited by this batch.


## Cross-batch prerequisite input

The batch-6 cross-batch dependency file records the four required page edges and every direct external item edge actually used by the five items. All supplier bodies named there were inspected. The item-level dependencies exclude the IP-05 veto theorem because the new parameter rules explicitly use the known noise bound; its required page remains a verified page-level prerequisite. The open problem is terminal.
