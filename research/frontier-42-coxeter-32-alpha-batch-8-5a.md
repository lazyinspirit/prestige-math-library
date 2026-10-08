# Batch 8 Step 5a adjudication — frontier-42-coxeter-32

Reviewer/group: `alpha-batch-8` / `batch-8`. Covers batch 8 only; original scope assignment group `e` is unchanged. Reviewed the dispatched order, scope, immutable pre/post fingerprints, reader report/findings, refuter artifact, current carriers, current citation contracts and actual dependency interfaces. All 12 owed obligations are decided. All seven critical risk reviews are complete. No owned mathematical blocker remains; Step 5b follow-ups below remain open. No judgment, certification, decision-hash stamping or engine gate was performed.

## Decisions

| Obligation | Verdict | Closed defect IDs |
|---|---|---|
| `touched:8:def-cg-spherical-gram-simplex-and-angular-link` | `accepted_repair` | `f42-b8-normal-normalization`, `f42-b8-polyhedral-link-scope` |
| `reader:8:3` | `confirmed_nonfatal` | `f42-b6-length-extension-sum` |
| `touched:8:ex-cg-link-edge-lengths-versus-dihedral-angles` | `accepted_repair` | `f42-b8-supplementary-angles`, `f42-b8-rotation-orientation` |
| `reader:8:1` | `confirmed_fatal` | `f42-b6-geodesic-tail-infima` |
| `reader:8:2` | `confirmed_nonfatal` | `f42-b6-geodesic-choice-accounting` |
| `touched:8:lem-cg-spherical-simplex-existence-and-link-gram-formula` | `amended_repair` | `f42-b8-component-metric`, `f42-b8-unit-arc-domain`, `f42-b8-inverse-radial-identity`, `f42-b8-link-restriction` |
| `touched:8:def-cg-euclidean-cone-and-spherical-join-metrics` | `accepted_repair` | `f42-b8-spherical-versus-euclidean-cone` |
| `touched:8:ex-cg-spherical-simplex-and-vertex-link-schur-complement` | `accepted_repair` | `f42-b8-link-off-diagonal` |
| `touched:8:thm-cg-cone-join-metric-and-local-product-chart` | `amended_repair` | `f42-b8-local-ball-component`, `f42-b8-zero-sphere-boundary`, `f42-b8-angular-separation` |
| `refuter:8:1` | `confirmed_fatal` | `f42-b8-local-ball-component` |
| `touched:8:ex-cg-disconnected-universal-coxeter-nerve-and-angular-truncation` | `amended_repair` | `f42-b8-nerve-prerequisite`, `f42-b8-geodesic-codomain`, `f42-b8-nonempty-connected-subset` |
| `page:8:spherical-simplex-metrics-angular-links-and-cones` | `amended_repair` | `f42-b8-page-tangent-cone`, `f42-b8-page-whole-product`, `f42-b8-page-component-metric`, `f42-b8-page-local-ball` |

Every completed repair has `repair_confidence: 1`. The three historical supplier findings share the existing closed producer rows, with explicit `same_defect_as` evidence; no duplicate historical defect was appended. The local-chart touched/refuter obligations share one closed row for the same observed defect. Twenty owned mathematical defect rows were appended with `caught_at_stage: "5a-adjudicate"`; no mechanical failure received a row.

## Mathematical evidence in dependency order

**Level 1 — Gram/Euclidean-link definition.** The reader's normal construction is sound after discarding constant inequalities: nonemptiness makes their constants nonnegative, so discarding preserves C and prevents division by a zero gradient. Redundant active hyperplanes are not necessarily facets. Checked the active-gradient kernel U(F), both tangent descriptions, n=0, the full-face empty normal link, and vertex U={0}. General polyhedral links retain coface incidences; the existing combinatorial-link identification is restricted to simplicial complexes. All ten declared interfaces were read. Item bytes match the reader-post snapshot.

**Level 3 — length producer and polygon example.** Independently reviewed the entire current batch-6 length argument, actual cited interfaces, contract and manifest. The historical extension-sum equality is false: for gamma(t)=t on [0,2], adding 2 to partition (0,1) increases its sum from 1 to 2. Current 1.1 uses the correct nonnegative added-chord lower bound. Verdict `confirmed_nonfatal`: additivity's intended inference follows immediately from that existing nonnegativity premise; the false auxiliary equality is recorded and corrected. Current partition lower semicontinuity, continuity/surjectivity of the arclength function, its unique factorization, canonical supremum lifts and both length bounds are sound. The producer added an explicit r=q singleton branch during this session; the current proof was reopened and that branch reviewed before handoff.

The polygon's seven steps compute unit edge directions (-sin a,+/-cos a), a=pi/(2m), with dot product -cos(pi/m), and inward normals with dot product cos(pi/m). Thus link and mirror angles sum to pi and are supplementary. Mirror vectors have squared norm 1-c^2>0 and pairing c(1-c^2). A determinant-one orthogonal 2x2 matrix with the given trace is rotation by +/-2pi/m, up to orientation. Checked m=2 and m>=3, all denominators, exact rank-two form interfaces and the full reflection/order proof. Reader corrections are accepted.

**Level 4 — geodesic producer.** Independently reviewed all seven current proof steps, exact Ascoli/length/metric interfaces, producer citation contract and manifest. The historical reversed liminf inequality fails for a_k=1-1/(k+1). Current F10/5.1 bound every tail infimum by R+epsilon, then their supremum, yielding limit length R via lower semicontinuity and the endpoint chord. This finding is `confirmed_fatal`. Current 2.1 applies AC to the countable near-minimizing decorated-chain family, 4.1 invokes the AC-dependent Ascoli corollary, and 7.1 records cell selection for arbitrary input chains. The omitted exact-use accounting is `confirmed_nonfatal` because AC was already assumed; it added no missing hypothesis to the theorem. The compact nonempty domain, proper target, continuous equicontinuous family, pointwise boundedness, endpoint preservation, arbitrary-chain subsequence clause and R=0 case are all checked. The endpoint triangle squeeze proves distance preservation after arclength reparametrization.

Both geodesic findings retain the original pre-reader observed SHA-256 and immutable producer/split metadata from the dispatch. `reader:8:3` remains unbound: `historical_delta_unknown: true` and the concrete owner-resolution record are preserved. The owner dispatch explicitly authorizes normal historical disposition after independent current review; the original reader description and current corrected proof support the finding, while neither current bytes nor the stored pre-reader inventory recovers the missing observed-byte binding. The counterexamples concern historical assertions, not corrected current bytes. No historical escalation is silently cleared or false-positive invented. Producer verification/receipt status is not certified here.

**Level 5 — spherical-simplex lemma.** All 17 steps and exact supplier interfaces were read, together with current star, chain-metric, length and geodesic supplier arguments. Verified Gram uniqueness, hemisphere functional, radial bijection, positive attained m0, both radial Lipschitz constants and the round/chord bounds. Reader corrections to disconnected component metrics, empty complexes, explicit AC selection/Ascoli use, the inverse radial difference identity and restriction-versus-further-link distinction are accepted. Schur positivity, normalized residuals, geometric normal-link identification and order-independent perpendicular projection are sound. The active-gradient kernel is U(F); its normal cone is pointed, and the great-circle/IVT argument establishes intrinsic angular lengths.

Additional local statement repair: clause (v) formerly quantified arcs over the whole cone N_FC, including zero and nonunit vectors. It now quantifies over N_FC intersect S(V) and specifies the shorter arc, exactly as proved in 2.3. Updated statement provenance, owning manifest, zero boundary and complete risk review. No judge record existed to invalidate.

**Level 6 — cone definition and Schur example.** The definition's item bytes equal both pre and post; its construction, truncation, separate apex, empty cone/join conventions, quotient endpoints and cosine domain are sound. Its touched contract carrier nevertheless contained a mathematical reader correction: a point join is a bounded spherical cone, not an unbounded Euclidean cone. S0*{p} is an interval of length pi; C(S0) is the line. This is accepted repair with a closed false-boundary row, not routine audit enrichment. All exact interfaces and source conventions were checked.

All seven Schur-example steps are sound. C=(1/2)I+(1/2)11^T is positive definite; w=(2/5)sum u_i pairs to 1 with every vertex. The vertex link has diagonal 1 and off-diagonal 1/3. The two-vertex inverse Gram yields Pu2=Pu3=(u0+u1)/3, residual squared norms 2/3 and residual pairing 1/6; normalized cosine is 1/4, matching the iterated Schur value, with final determinant 15/16>0. Reader off-diagonal and vertex-to-vertex wording corrections are accepted.

**Level 7 — cone/join/local-chart theorem.** Reviewed all 18 steps, 16 citation records and every declared supplier interface. Cone triangle cases, product-cone algebra, the radius s*=sin(A+B)/(sin A+sin B) placing the intermediate comparison point on its chord, angular triangle inequality, associativity, empty factors, zero radii, angles 0/pi, geodesic radius containment and k=0/k=1 all check. The developed-chain bounds establish the cone function before using separation; local injection into a genuine metric then proves separation, and scaling handles the full tangent gluing. Orthogonal splitting and synchronized face/normal paths give the square-sum product metric and preserve intrinsic lengths.

The refuter's ball-typing finding is confirmed fatal. Two disjoint singleton cells satisfy H2/H3 but have no cross-component real chain metric. Clause (4) now specifies the ball B_Xp(p,epsilon) in the connected component X_p; 1.6 checks that this cell subgluing inherits H1-H3. This retains disconnected-gluing scope. Updated Given, statement provenance/manifest, derivation, degenerate boundary and complete risk review. Also corrected the one-boundary assertion: S0 has two points and S0*S0=S1, rather than a join of two singleton spaces.

**Level 8 — disconnected nerve example.** All six steps and exact supplier interfaces were read. Sending two generators to -u and 2-u gives their product translation u-2; distinct powers force every two-generator subgroup infinite, while singletons are finite. The discrete nerve, auxiliary infinite distances, pi truncation, radial/star distances, open-ray projection, apex passage and unique unit-speed geodesics follow. Reader corrections to the constant link-segment codomain L and separate apex value are accepted. Replacement angle zero fails separation; a positive angle below pi leaves branches separated but gives chord distance below r+s, so no geodesic joins them. No arbitrary Choice is used.

Additional local fact repair: F8 now requires a nonempty connected subset of a discrete space before concluding it is a singleton; the empty subset is connected under the exact cited definition. The path-image application already satisfies nonemptiness. Updated empty/endpoint boundaries and risk record. This Facts repair changes no Statement or Definition.

**Page obligation.** The entire A-page summary, four carrier formulas and placement anchors were checked. Accepted reader tangent-half-space, componentwise metric/AC and ball-to-ball corrections. Added the connected-component ambient to its local metric ball. The B-page summary remains sound and was left unchanged; it owes no page decision. All seven stable item IDs and both page memberships/order anchors are retained.

## Sources and prerequisite coverage

Read every cited dependency's actual Definition/Statement interface; complete current in-run proofs were read for the star-radius, chain-metric/properness, metric-length, proper-geodesic and rank-two reflection suppliers. Exact source quotations and their step uses are retained in the owning proof contract. The foundational published proof closure was not recursively audited. No published defect was identified, so the published-consumer ledger remains untouched.

Primary source consulted: [Bridson-Haefliger, Metric Spaces of Non-Positive Curvature](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf), I.1.18-I.1.20 (printed pp.12-13), I.5.6-I.5.10 (pp.59-62), I.5.13-I.5.16 (pp.63-64), I.7.14-I.7.17 (pp.102-105; PDF indices 124-127), including the complete local cone-neighborhood proof. These cover metric length, cone/truncation formulas, geodesic development, joins and string development. The scan itself at p.104 incorrectly calls the link distance a supremum in Claim 1; I.7.15 defines an infimum, and its ensuing chain approximation and the authored proof use that correct infimum. Inspected the image to distinguish the printed typo from OCR. No Davis full-text reading is claimed.

## Consumer impact and Step 5b follow-ups

The unit-direction amendment has no consumer that needs cone zero/nonunit endpoints. Actual uses were checked in the owned Gram/cone definitions, cone theorem and examples; outside uses concern Gram realization, radial coordinates, component geodesics, Schur links or unit spherical links. The component-ball amendment preserves the connected Davis applications and the explicitly connected cone-CAT criterion. Other consumers use unchanged cone/join/truncation clauses. The sole library reference consumer is the assigned A page, updated here. No outside item or contract was edited, and no further statement-impact hop was required.

Step 5b must handle the following current cross-group evidence refreshes:

- Batch 22 spherical-lemma cached Statement quotes: `lem-cg-metric-flag-links-and-local-cat-one` F2/F4; `lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion` F2; `thm-cg-large-metric-flag-short-loop-radial-contradiction` F2; `thm-cg-large-metric-flag-complexes-are-cat-one` F4; `cor-cg-coxeter-nerve-is-cat-one-and-has-girth-at-least-two-pi` F7.
- Batch 30 spherical-lemma cached quotes: `lem-cg-davis-angular-vertex-link-is-metric-flag-nerve` F8/F17/F18.
- Batch 22 local-chart cached quotes: `lem-cg-cat-zero-products-and-cat-one-joins` F8; `lem-cg-metric-flag-links-and-local-cat-one` F7; `lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion` F7.
- Batch 30 local-chart cached quotes: `lem-cg-davis-angular-vertex-link-is-metric-flag-nerve` F12; `thm-cg-finite-rank-davis-moussong-cat-zero-theorem` F2. The latter's general Fact F2 repeats the old H2/H3 ball shorthand: its owner should add the component metric qualification. Its actual application to connected Sigma is sound.

Other actual-use consumers read: batch 11 `def-cg-cat-zero-cat-one-and-local-geodesic`, `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion`; batch 15 `lem-cg-finite-spherical-comparison-disks-and-radius-estimates`; batch 19 `lem-cg-ordered-root-complex-is-geometric-simplicial`; batch 22 `ex-cg-all-right-triangle-versus-disconnected-universal-coxeter-nerve`, `def-cg-coxeter-nerve-and-moussong-metric`, `def-cg-large-spherical-metric-flag-and-almost-negative-matrix`. No surgical content repair is required by their actual uses.

Owned cross-batch input now appends current-use evidence, retaining all prior open/removed rows and stable IDs. In particular the two rank-two producer receipt caveats remain open for owner disposition; current mathematical interfaces are sound but this review does not refresh certificates. The three historical batch-6 findings retain normal verdicts and their immutable original routing evidence. No proposed withdrawal was introduced or deleted. The engine and Step 5b lead own computed edge obligations, both impact windows and gate closure.

## Local checks and final state

- Initial risk routing identified all seven items as CRITICAL. Final `node tools/risk-report.mjs research/frontier-42-coxeter-32-batch-8.proof-contracts.json --require-reviewed`: 0 errors, seven complete reviews.
- `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-8.proof-contracts.json --strict`: 0 errors, 0 warnings, 7/7 items.
- Reflow and precheck on each of the three Alpha-edited items: reflow unchanged, all prechecks pass.
- Explicit rendercheck on the seven batch items and both assigned pages: nine files, all math and YAML parse.
- Final single batched `node tools/proof-layout.mjs items/lem-cg-spherical-simplex-existence-and-link-gram-formula.md items/thm-cg-cone-join-metric-and-local-product-chart.md items/ex-cg-disconnected-universal-coxeter-nerve-and-angular-truncation.md`: three items, 41 steps, zero defects; run after all item edits and formatters.
- Defect append/render succeeded; `node tools/defect-ledger.mjs validate --run frontier-42-coxeter-32`: 145 rows checked, zero errors at invocation.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32`: refreshed and deduplicated. Exact local decision coverage verified against scope: 12 distinct obligations, no extras, all closed references; no engine seals supplied.

These are local mathematical reviews and format/evidence checks, not independent judging or engine gate acceptance. No owned blocker remains. Historical unbound evidence, producer receipt caveats and cross-group follow-ups remain explicit for the owner/Step 5b lead.

## Current carrier evidence

Raw current item fingerprints (informational evidence only; engine decision seals are intentionally absent):

- `def-cg-spherical-gram-simplex-and-angular-link`: `11a7812d32cd153c358e5ff0599340bf807c330f6ca04b08b4a736e91109bdbe` (matches reader-post).
- `lem-cg-spherical-simplex-existence-and-link-gram-formula`: `c5efc99a2e490a7cb3202fba8ad78195e91fdbfd29d3272855f465830d39815a` (Alpha amended).
- `def-cg-euclidean-cone-and-spherical-join-metrics`: `e7c5efd36df6e1f7fec3a86b138d55694e54b352ca35065958ed8b51418ccb0e` (matches reader-post).
- `thm-cg-cone-join-metric-and-local-product-chart`: `00aa559b89b3907332b41d012b8d02fc5579aa2cc152dfe2952b8d603fc9d154` (Alpha amended).
- `ex-cg-spherical-simplex-and-vertex-link-schur-complement`: `a6335ef27179a90830e92ee70d353d333c23257a287945c15591f925ed8ae6c0` (matches reader-post).
- `ex-cg-link-edge-lengths-versus-dihedral-angles`: `d62c911729cae9583565565299da1adf27f6f28cfe354e134a0bdd1450cfd673` (matches reader-post).
- `ex-cg-disconnected-universal-coxeter-nerve-and-angular-truncation`: `2f1bf175184de40650fd93ea58ac3eb6941e463f505d6e7c65d3e11aa8f4792c` (Alpha amended).
- Read-only producer `lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity`: `18f311789200a303985795a195a9c873ebf6fb4f816cee46a7b89666a7e11340`; producer batch 6 contract and manifest independently opened.
- Read-only producer `thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics`: `fa0e3a0b7101a01c3132426ea4e2ddf212265c609b6da9939bece5f9df72977d`; producer batch 6 contract and manifest independently opened.
