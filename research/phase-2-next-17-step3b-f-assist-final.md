# Step 3b group F final disjoint authoring handoff

Run: `phase-2-next-17`  
Dispatch: `step3b-f-f71b8c8e8b405305`  
Owned batch/page: batch 7, B page `geodesics-the-exponential-map-completeness-and-hopf-rinow-examples`  
Owned item: `cex-a-complete-manifold-with-zero-global-injectivity-radius`

This is a bounded authoring checkpoint for the active group-D author and the serial integrator. It is not a Step-3 gate pass, independent audit, owner decision, or resolution of an owner-held escalation.

## Ownership and verified starting state

Before writing, both an exact-path test and a repository-wide stem search confirmed that `items/cex-a-complete-manifold-with-zero-global-injectivity-radius.md` was absent. I repeated both checks immediately before creation. The file had not appeared, so it was created once; no concurrent author file was overwritten.

The shared batch manifest already contained the item scaffold and the shared proof-contract scope already named the item. The shared contract object and target item file were absent, and `research/plan-spec.json` still had an empty `items` array for the B page. I wrote only the owned item and this handoff note. I did not edit a shared manifest, proof contract, coverage file, scope record, decision, page, plan, group-D report, frontier ledger, or published item.

`CLAUDE.md`, `README.md`, `SCHEMA.md`, DG20 in `research/plan-differential-geometry-track.md`, the batch-7 manifest and coverage, the Step-3a group-D scope report, the owner authoring direction, the current supplier items and receipts, and the frontier-ledger instructions were read. The owner direction contains no unresolved obligation specific to this cusp item. Its general requirements on exact dependencies, assumptions, boundaries, source qualification, and owner-only escalation are reflected below.

## Confirmed prerequisite state

The complete current statements and proofs of `thm-hopf-rinow` and `lem-geodesics-can-be-continued-while-their-velocity-lifts-remain-in-a-compact-subset` were read before authoring. A read-only call to `itemDecision` in `tools/step3-decisions.mjs` reports both as `closed: true`, with non-owner `repaired` decisions at confidence `1`.

- Hopf--Rinow assumes `AC_omega`, a nonempty connected boundaryless Riemannian manifold, and proves the metric/geodesic/exponential-domain/properness equivalences together with a minimizing exponential vector of norm equal to distance.
- The continuation lemma assumes `AC_omega`, a boundaryless manifold, a nonempty maximal interval, and a compact subset of the full velocity phase space `TM` containing the relevant tail; it has distinct right- and left-endpoint clauses.

The proof below uses those exact interfaces. Completeness is proved from bounded full velocity lifts and then Hopf--Rinow; it is not inferred from the quotient picture.

## Authored claim and exact construction

The new item fixes

`M = (R/Z) × R`,  `g = 4 pi^2 e^{-2u} dtheta^2 + du^2`,

where `theta` has period one. In the angular coordinate `phi=2 pi theta`, this is `g=e^{-2u}dphi^2+du^2`. It proves that this connected boundaryless hyperbolic surface is both geodesically and metrically complete, while

`0 < inj(p_u) <= pi e^{-u}`  and  `inj(M)=0`.

The factor `4 pi^2` is deliberate: it reconciles the period-one quotient convention with the scaffold's period-`2 pi` circumference `2 pi e^{-u}` without changing the hyperbolic cusp.

The completed argument is:

1. Verify the smooth positive-definite product metric and identify it with the quotient of the upper-half-plane metric using `x=2 pi theta`, `y=e^u`.
2. Prove connectedness from the two factors.
3. For an arbitrary maximal geodesic, write `gamma'=alpha partial_theta+beta partial_u`. Constant speed gives
   `c^2=4 pi^2 e^{-2u} alpha^2+beta^2`, hence `|u'|<=c` and `|alpha|<=ce^u/(2 pi)`.
4. At any finite right endpoint, the mean-value bound confines `u`, `alpha`, and `beta` to a closed box. Its continuous image in `TM` is compact and contains the complete velocity tail, contradicting the right continuation clause. Repeat separately at a finite left endpoint. The `c=0` case gives a stationary geodesic and a degenerate compact box, so every maximal geodesic has domain `R`.
5. Apply the exact nonempty/connected/boundaryless Hopf--Rinow theorem to obtain metric completeness and pointwise minimizing exponential vectors.
6. Compute the degree-one horizontal loop length exactly as `L_u=2 pi e^{-u}` and prove it noncontractible by projection to `R/Z`.
7. Every loop point has distance at most `L_u/2` from its basepoint by taking the shorter horizontal subarc.
8. If `inj(p_u)>L_u/2`, choose one admissible radius `rho>L_u/2`. The local normal-distance formula gives the exponential image `U` inside the metric `rho`-ball, while the pointwise Hopf--Rinow minimizing vector gives the reverse inclusion. Thus `U` is that metric ball. The whole loop lies in `U` and contracts explicitly by radial scaling through `exp_p`, contradicting its degree.
9. Therefore `inj(p_u)<=pi e^{-u}`; positivity is supplied by the current injectivity-radius definition and its verified normal-neighborhood argument, while `e^{-u}->0` gives the global infimum zero.

No angular-momentum conservation law is needed: the speed identity alone bounds the complete velocity lift on finite time intervals. This is a proof-level repair of the scaffold strategy, not a change to the promised claim.

## Source evidence and qualification

Primary source: Bruno Martelli, *Hyperbolic Geometry*, `https://people.dm.unipi.it/martelli/didattica/matematica/2014/Hyperbolic_geometry.pdf`.

The complete relevant passage read was Chapter 3, Section 2.2, Remark 2.3, Example 2.5, and Proposition 2.6, printed pp. 58--59 (PDF pp. 64--65). It supplies the quotient-cusp model, the tensor `e^{-2u}g_M+du^2`, the assertion that the full two-dimensional cusp is complete, and the parabolic-displacement argument for global injectivity radius zero. Chapter 1, Section 2.4, Definition 2.7 through Theorem 2.8, was also read to check the source's intended injectivity-radius, normal-ball, and Hopf--Rinow interfaces; the repository proof uses the more explicit current local suppliers instead of silently importing those assertions.

There are two important qualifications.

- Immediately after displaying `e^{-2u}` as the horizontal metric coefficient, the source prints `e^{-2u}` as the horizontal circle's length. Those statements are inconsistent: lengths scale by the square root of the metric coefficient. The correct scale is `e^{-u}`, and the period-`2 pi` circumference is calculated directly as `2 pi e^{-u}` in item step 1.4.
- Example 2.5 asserts completeness but does not prove it locally. Item steps 1.3, 2.1, 3.1, and 4.1 supply a complete compact-velocity-lift proof. The injectivity estimate is likewise proved locally from an explicit noncontractible loop, distance bounds, Hopf--Rinow, and a normal-ball contraction rather than treating the source citation as proof.

These are resolved source qualifications, not unresolved mathematical uncertainty. The authored statement is `ai-altered` and the proof is `ai-altered`, as the scaffold required.

## Scaffold dependency repair and exact uses

The scaffold declared only five dependencies. A complete proof requires 24 direct dependencies: seven are other batch-7 A-page items and seventeen are existing published suppliers. No supplier belongs to another batch in the current frontier, so this item introduces no cross-batch ledger row. The manifest must nevertheless be repaired to the exact frontmatter list before canonical integration.

For proof-contract integration, each stored `quote` is the complete current body of the named section, excluding its heading. Those exact excerpts, with the following fact labels and use lists, were supplied to the strict checker:

| Fact | Direct dependency and exact source section | Uses |
|---|---|---|
| `A1` | `def-countable-choice`, `Definition` | 4.1, 8.1 |
| `F1` | `ex-the-flat-torus-metric-from-periodic-euclidean-coordinates`, `Example` | 1.1, 1.3 |
| `F2` | `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure`, `Statement` | 1.1 |
| `F3` | `prop-coordinate-criterion-for-a-riemannian-metric`, `Statement` | 1.1 |
| `F4` | `thm-derivative-of-exponential`, `Statement` | 1.1 |
| `F5` | `thm-exponential-limits-and-range`, `Statement` | 1.1, 7.1 |
| `F6` | `prop-real-line-mod-integers-is-compact-and-path-connected`, `Statement` | 1.2 |
| `F7` | `thm-path-connected-implies-connected`, `Statement` | 1.2 |
| `F8` | `cor-connected-subsets-of-the-line`, `Statement` | 1.2 |
| `F9` | `thm-product-of-connected-spaces`, `Statement` | 1.2 |
| `F10` | `thm-fundamental-theorem-of-riemannian-geometry`, `Statement` | 1.3 |
| `F11` | `thm-existence-uniqueness-and-smooth-dependence-of-geodesics`, `Statement` | 1.3, 8.1 |
| `F12` | `def-geodesically-complete-riemannian-manifold`, `Definition` | 3.1, 8.1 |
| `F13` | `prop-geodesics-have-constant-speed-for-a-metric-compatible-connection`, `Statement` | 1.3 |
| `F14` | `cor-mean-value-theorem`, `Statement` | 2.1 |
| `F15` | `thm-heine-borel-rn`, `Statement` | 2.1 |
| `F16` | `thm-compactness-under-continuous-maps`, `Statement` | 2.1 |
| `F17` | `lem-geodesics-can-be-continued-while-their-velocity-lifts-remain-in-a-compact-subset`, `Statement` | 2.1, 3.1, 8.1 |
| `F18` | `thm-hopf-rinow`, `Statement` | 4.1, 5.1, 8.1 |
| `F19` | `def-riemannian-speed-and-length`, `Definition` | 1.4, 2.2 |
| `F20` | `def-riemannian-distance-on-a-connected-manifold`, `Definition` | 2.2 |
| `F21` | `def-injectivity-radius-at-a-point-and-of-a-manifold`, `Definition` | 5.1, 7.1, 8.1 |
| `F22` | `cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood`, `Statement` | 5.1, 8.1 |
| `F23` | `thm-fundamental-group-of-the-circle`, `Statement` | 1.4 |

This is the exact dependency order used in the item frontmatter. It retains all five original scaffold suppliers and adds every load-bearing smoothness, connectedness, geodesic, compactness, length, distance, and assumption interface. It consumes no Recorded result and introduces no new supplier or pair.

## Proof-contract payload for canonical integration

The shared batch proof-contract file already has this ID in `scope` but has no entry under `contracts`. Add one object keyed by `cex-a-complete-manifold-with-zero-global-injectivity-radius` using the citation map above. Each derivation `claim` is the complete corresponding numbered paragraph in the current item, with only its terminal square-bracket input tag and final proof symbol removed. Use the following exact IDs and inputs:

| Contract ID | Actual claim | Inputs |
|---|---|---|
| `step-1-1` | The period-one quotient carries the displayed smooth positive-definite metric, and the coordinate substitution identifies its hyperbolic quotient model without asserting completeness. | `F1`, `F2`, `F3`, `F4`, `F5`, `algebra` |
| `step-1-2` | Both factors, hence their product, are connected. | `F6`, `F7`, `F8`, `F9` |
| `step-1-3` | Every maximal geodesic has constant speed and the displayed bounds on `u'` and `alpha`. | `F1`, `F10`, `F11`, `F13`, `algebra` |
| `step-1-4` | The horizontal degree-one loop is noncontractible and has length `2 pi e^{-u}`. | `F19`, `F23`, `algebra` |
| `step-2-1` | A finite right endpoint yields a compact full-velocity-lift tail and hence a continuation contradiction. | `F14`, `F15`, `F16`, `F17`, `step 1.3`, `assume-contra`, `discharge-contradiction` |
| `step-2-2` | Every point on the horizontal loop has distance at most half its circumference from the basepoint. | `F19`, `F20`, `step 1.4` |
| `step-3-1` | The analogous left-endpoint argument proves all-real maximal domains, including the stationary case. | `F12`, `F17`, `step 1.3`, `step 2.1`, `assume-contra`, `discharge-contradiction` |
| `step-4-1` | Hopf--Rinow converts the verified geodesic completeness into metric completeness and supplies minimizing radial vectors. | `A1`, `F18`, `step 1.1`, `step 1.2`, `step 3.1` |
| `step-5-1` | If the pointwise radius exceeded half the loop length, an admissible exponential normal neighborhood would equal the metric ball of that radius. | `F18`, `F21`, `F22`, `step 4.1`, `assume-contra` |
| `step-6-1` | The loop would then contract radially in that normal ball, so `inj(p_u)<=pi e^{-u}`. | `step 1.4`, `step 2.2`, `step 5.1`, `discharge-contradiction` |
| `step-7-1` | Positive pointwise radii have global infimum zero by the explicit bound and exponential decay. | `F5`, `F21`, `step 4.1`, `step 6.1` |
| `step-8-1` | Empty, dimension, zero-speed, endpoint, choice, and non-iff qualifications are discharged. | `A1`, `F11`, `F12`, `F17`, `F18`, `F21`, `F22`, `step 2.1`, `step 3.1`, `step 1.4`, `step 6.1`, `step 7.1` |

Use `derivations` for all twelve rows and `routine_steps: []`. The exact boundary entries are:

- `empty`: `not_applicable`; the counterexample fixes the explicitly nonempty cusp, and step 8.1 says no empty-manifold variant is asserted.
- `zero`: `checked`; step 7.1 proves numerical global injectivity radius zero while each pointwise radius is positive, and step 8.1 distinguishes this from dimension zero.
- `one`: `not_applicable`; step 1.1 constructs a two-dimensional product surface, and step 8.1 expressly excludes a one-dimensional variant.
- `degenerate`: `checked`; step 3.1 retains `c=0`, for which `V=c=0` and the geodesic is stationary.
- `endpoints`: `checked`; steps 2.1 and 3.1 separately treat finite right and left maximal endpoints, while steps 1.4 and 6.1 check the based loop and homotopy endpoints.
- `nonempty-choice`: `checked`; step 8.1 identifies every `AC_omega` interface, and step 5.1 uses one pointwise existential minimizer rather than a simultaneous selection.
- `iff-forward`: `not_applicable`; this is a counterexample to one implication, not an equivalence.
- `iff-reverse`: `not_applicable` for the same item-specific reason.

The exact current section excerpts and full numbered claims described above were assembled into an isolated version-1 contract through `/dev/stdin`; strict validation checked 1/1 item with zero errors and zero warnings. No third repository file was created.

## Checks actually run

- Explicit-path precheck: pass, 1 checked and 0 failing.
- Explicit-path rendercheck: pass; YAML parses, every math span parses under KaTeX, and no delimiter or multiline-display defect was reported.
- Focused citecheck: pass.
- `git diff --check` on the item: pass.
- Batch-7 coverage checklist with `--require-destination`: 2 pages, 89 harvested results, 0 errors, 0 warnings.
- Batch-7 content policy: exit 1 because the unrelated concurrent item `fs-geodesic-completeness-means-the-manifold-is-compact` still has no file. The checker reported no finding for this cusp item. This is not represented as a batch pass.
- Focused shared strict proof-contract check: expected exit 1 with exactly `scope-missing-contract` for this item, 1 error, 0 warnings, 0/1 checked. The payload above is the required integration repair.
- Isolated strict proof-contract check through `/dev/stdin`: 0 errors, 0 warnings, 1/1 checked.
- `validate-plan research/plan-spec.json`: exit 1 on the current pre-splice/global worktree. It still reports plan order 481 and 482 for the DG20 A/B pages with zero items. It also reports the existing redundant page prerequisite from the B page to `the-fundamental-group-of-the-circle`, because the A page already reaches it, plus many unrelated global plan diagnostics. No item-specific diagnostic names this cusp item because it has not yet been spliced. This is not represented as a plan pass.

The final authored item SHA-256 is `87fb971528490572427e6072e6c4cd72d98a5ec01058a7dee8ceb49c95414428` before this note's final no-op verification. No decision was recorded, because this dispatch forbids decision edits and newly created fully authored files are handled by the run's post-author inventory certification mechanism. No owner, judge, audit, or Step-3 stamp was added.

## Canonical integration needed

1. In the batch-7 manifest, retain the original ID, kind, title, statement, provenance, and source, but replace the five-dependency scaffold list with the exact 24-item frontmatter list recorded above.
2. On the B page, place this item after `cex-antipodal-points-on-a-round-sphere-have-many-minimizing-geodesics` and before `ex-hopf-rinow-on-a-flat-cylinder`, matching manifest index 10.
3. Preserve the two existing coverage rows: Martelli Example 2.5 and Proposition 2.6, both at Chapter 3 Section 2.2, p. 59. Refresh their support prose from future-tense scaffold language to the completed local proof and retain the source-length qualification.
4. Add the exact proof-contract entry above and rerun the shared focused strict checker, then rerun required batch checks in the integrated state.
5. No item row is required in the cross-batch dependency ledger: the seven run-local suppliers are all in batch 7 and the other seventeen suppliers predate this frontier. Do not disturb unrelated existing batch-7 ledger rows.
6. Step 4 must splice the canonical batch manifest into the still-empty plan page. The serial reconciler should decide whether to remove the now-redundant direct B-page prerequisite on `the-fundamental-group-of-the-circle`; this author did not hide or edit that plan mismatch.
7. Let the run engine apply the authorized post-author certification for this newly created file. Do not infer a gate result from this handoff or add an independent-review stamp.

## Published concern for owner reconciliation

Confirmed metadata/certification defect, confidence 1: published item `thm-fundamental-theorem-of-riemannian-geometry` on published page `connections-levi-civita-and-parallel-transport` is a proved-here theorem whose current frontmatter has only `verification.judge`; it has neither `verification.audited` nor `verification.verified`. That violates the published proved-here requirement in `SCHEMA.md` section 2.

The complete theorem proof was read for this consumer and its existence/uniqueness and choice-free claims are mathematically sound on the reviewed scope. This is therefore a confirmed metadata defect, not a suspected mathematical defect, and it does not block the sound new consumer. The owner should arrange the required owner audit or delegated verification before publication closure. No published file or `published-consumer-supplier-ledger.md` was edited.

No other potentially defective published item was found in this item's direct dependency audit.

## Final checkpoint

Completed ID: `cex-a-complete-manifold-with-zero-global-injectivity-radius`. No local supplier was added. There is no unresolved mathematical or primary-source uncertainty in the authored item. Open obligations are limited to the exact manifest/page/coverage/contract integration above, ordinary Step-4 plan splicing and prerequisite reconciliation, the run engine's post-author certification, the unrelated concurrent batch content-policy miss, and owner handling of the published supplier's certification metadata.
