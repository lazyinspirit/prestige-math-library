# Batch 57 Step 3a adjudication

Run: `inverse-problems-knot-theory-all-109-2026-10-19`; group: `batch-57`.

Review proceeds in the generated dependency order. Engine owns hashes, judgments, gates and transitions.

## Level 0 completed

`lem-knot-normal-circle-bundle-trivialization`: independently checked the quotient-plane construction, finite frame patching and smooth endpoint-germ closure (steps 1.1, 1.2, 2.1). The proof is choice-free. Read both local Definition suppliers and Hatcher, *Vector Bundles and K-Theory*, §1.2, Proposition 1.14, printed pp.24–26 (https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf). The citation enrichment is sound; retain it as `reviewed_no_defect`, `change_kind: audit_enrichment`. Pre/post snapshots differ only in this carrier; the reader report and root partial-reader57 routing review independently identify the added Hatcher bibliography/link, with no proof change.

Reader 57:1 is confirmed nonfatal only for the stale endpoint references: the proof closes at 2.1, not 1.3. Corrected both endpoint and finite-choice boundary descriptions and completed the current risk review. The missing-evidence allegation does not hold for the current or checkpoint `66722d74a1` contract: every checked row already has evidence. Git records that checkpoint as the contract's sole prior commit and the pre-review contract diff was empty. Root's partial-reader57 routing review explicitly preserves this observation limit and grants no acceptance. Exact historical reader contract bytes are not bound, so retain historical uncertainty rather than invent a historical repair.

The subsequent sections record the remaining item reviews in the required order.

## Level 1 completed

`lem-knot-tubular-exterior-and-boundary`: checked closedness of the compact embedded knot, the published tubular theorem's exact AC_omega premise, uniform strictly positive radius by finite subcover (2.1), compactness and collar (3.1), and the punctured-fibre strong retraction including r=epsilon and t=0,1 (4.1). All six declared dependencies were read in their actual use. Corrected two separate stale boundary locators from 1.1 to 2.1. Reader 57:2 is false-positive on available unchanged checkpoint/current evidence: checked boundary evidence fields are present, not repaired by this adjudication. Its original unbound contract observation is not reconstructed. Risk review complete; no statement or dependency changed.

## Level 2 completed

`lem-knot-exterior-has-peripheral-torus`: checked the one-vertex/two-edge/one-face CW model, zero d1 and zero commutator incidence degrees, and natural cellular-to-singular identification of the actual meridian/section basis. Read the eight supplier interfaces, including the incidence-degree theorem's n=1 endpoint convention. Hatcher Example 2.36 (printed p.141) agrees. The TikZ square correctly uses horizontal sigma, vertical mu, and diagonal sigma+mu with like-directed identified edges; no diagram repair is needed. Corrected a separate stale endpoint locator. Reader 57:3 is false-positive for missing evidence on the available unchanged checkpoint/current contract, with historical reader-byte limits preserved. Risk review complete.

## Level 3 completed

`thm-knot-exterior-homology-and-longitude`: reader 57:4 confirmed nonfatal contract drift. The current derivation *claims* already reproduce the Mayer–Vietoris proof; their IDs still misleadingly named circle cohomology and Alexander duality. Renamed them by their actual role and replaced nonexistent boundary locators and full-AC claims with current steps and AC_omega. Preserved the old root template review as historical evidence. Updated the manifest strategy to the current Mayer–Vietoris argument.

Refuter 57:1 confirmed nonfatal: the old V clause omitted r=2epsilon although V contains it. Extended its formula to that endpoint and specified the closed double-radius tube. At that radius max(r,epsilon)=r for every t, so the extension is the identity and is continuous across the gluing boundary. The current Statement and all dependency edges are unchanged.

Independently checked all open-cover/retraction domains, including zero and epsilon, overlap homotopies, and the exact sequence with H2(S3)=H1(S3)=0. Its first inclusion map may carry a minus sign in one component; the determinant and kernel argument are invariant under this convention. Step 5.1 proves the rank-one free group by an elementary subgroup splitting; step 6.1's unimodular matrix forces the meridian coefficient to be +/-1. Step 7.1 gives the unique degree-one primitive kernel class and a periodic embedded integer-slope representative. Only AC_omega is imported. All eleven supplier interfaces were read, with their hypotheses checked. Risk review complete.

## Level 4 counterexample completed

`cex-knot-kt-02-boundary-case`: checked its complete refuted quantifiers and all three steps. For refutation choose any small admissible tube from the reviewed tubular-exterior lemma, which satisfies the homology theorem's larger-radius premise. The slope lambda+mu is embedded by its first coordinate, has degree +1, is primitive in the integral basis, and maps to the nonzero meridian generator. Thus a valid instance refutes the universal assertion. Corrected only the separate contract description claiming full AC: the actual supplier premise is AC_omega. Reader 57:6 missing-evidence allegation is false-positive on available checkpoint/current bytes. No item repair; risk review complete.

## Level 4 example completed

`ex-knot-kt-02-worked-cases`: checked the tube and complementary solid-torus diffeomorphisms, their inverses at both disk zero and boundary, positive meridian orientation in R4, and the constant-phase bounding disk. Checked the homology theorem's exact double-radius hypothesis: precompose the displayed map with w ↦ w/sqrt(1+|w|²). This gives a normal parametrization on all R² whose radius-1 disk maps onto the same tube N(U), with the same boundary marking, and whose radius-2 disk is defined. Thus applying the theorem to this exterior is sound; the original chart itself need not contain radius sqrt(2). The diagram's horizontal lambda and vertical mu match the formulas and edge identifications. Corrected the separate contract full-AC and nonexistent-step description. Reader 57:5 missing-evidence allegation is false-positive on available checkpoint/current bytes. No item repair; risk review complete.

## Sources and reading limits

- [Hatcher, Vector Bundles and K-Theory](https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf), §1.2, printed pp.24–26, Proposition 1.14 and the following circle discussion: checked connectedness of GL+ and classification of oriented real bundles over the circle. The local proof supplies smooth frame patching itself.
- [Hatcher, Algebraic Topology, Chapter 2](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf), §2.2, Example 2.36, printed p.141: checked the surface CW attaching word and zero differentials at genus one. The exact local cellular supplier Statements and the incidence-degree proof were also read.
- [Hatcher, Algebraic Topology, Chapter 3](https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf), Theorem 3.44 and Corollary 3.45, printed pp.254–256: read the relevant statements and argument. The former concerns relative homology of a compact locally contractible subset in a closed orientable manifold; the latter additionally requires a nonempty proper subset of a sphere. A smooth embedded circle meets those conditions. These are background references; the present theorem imports neither result and uses its proved local Mayer–Vietoris suppliers.
- [Cattabriga–Francaviglia](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf), §4.1/Example 4.1.2, printed p.19, and §4.4 through Remark 4.4.4, printed pp.24–25: checked exterior, meridian, longitude and peripheral conventions. Their torus boundary is oriented as the boundary of the tube, whereas the local exterior Definition uses the opposite exterior-boundary orientation. Neither local diagram asserts an ordered positively oriented tangent basis, and the independent proofs fix each factor orientation explicitly, so this difference causes no sign error. Their Remark 4.4.4 is understood for essential simple curve classes, not arbitrary multiples; the local theorem correctly states a primitive rank-one kernel.
- [Calegari](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf), printed pp.29–30: web retrieval failed because of file size; downloading the PDF and extracting these pages with PyMuPDF succeeded. Read the meridian paragraph, Proposition 3.17 with its proof, and the positive meridian linking/intersection normalization. This is a convention check; no global theorem from that proof was imported.

All directly cited dependency Statements/Definitions needed by the six proofs were read from current carriers. Published supplier proofs were not recursively re-audited through their entire transitive closures. No unresolved mathematical uncertainty, defective published supplier or outside repair requirement was found. Published content remained read-only.

## Dispositions and records

Exactly eight obligations are decided in the companion decisions JSON: one touched citation enrichment, reader findings 1–6, and refuter finding 1. The touched enrichment uses `reviewed_no_defect` with `audit_enrichment` and no defect IDs; it does not close reader 57:1. Three findings are confirmed nonfatal: reader 57:1 endpoint-contract drift, reader 57:4 contract drift, and refuter 57:1 homotopy endpoint. Four reader allegations of absent evidence fields are false-positive on the available unchanged checkpoint/current bytes. Each finding has its own closed ledger row (`ipkt109-b57-3a-reader-1` through `reader-6`, and `ipkt109-b57-3a-refuter-1`); seven rows were appended through the serialized ledger tool. Completed repairs have confidence 1. No fatal mathematical defect was confirmed.

The four false-positive decisions do not claim that a repaired historical defect was false: no missing-field repair is evidenced. The sole contract commit before this dispatch is `66722d74a1`; its contract was byte-identical to the pre-adjudication current contract. Its checked evidence fields are already present. The original reader's exact observed contract bytes are unavailable; all six reader decisions retain `historical_delta_unknown: true` and an explicit resolution describing this dispatch's authorization and root's durable routing evidence. The original report/findings remain untouched. This is an evidentiary limit, not invented historical observation or inherited acceptance.

Additional boundary descriptions were aligned with already sound current arguments as audit metadata: uniform-radius/finite-cover locations, cellular-edge endpoint location, and the countable-choice uses in the two worked cases. These changes do not assert missing mathematical premises or missing evidence fields. The manifest now mirrors the accepted Hatcher bibliography and the actual Mayer–Vietoris strategy. No Statement/Definition, claim strength, dependency, inventory, item ID or publication status changed; neither item consumer propagation nor outside supplier repair was triggered. Existing frontier records and proposed withdrawals remain present. The batch cross-batch index is empty. Both assigned pages retain empty bodies and `page_layout: compact-v1`.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-57.proof-contracts.json`: six HIGH/CRITICAL carriers, zero errors. All six current risk reviews are now complete, in the dispatched dependency order.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-57.proof-contracts.json --strict`: 6/6 checked, zero errors and warnings.
- `node tools/risk-report.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-57.proof-contracts.json --require-reviewed`: six routed, zero errors.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-knot-exterior-homology-and-longitude.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-knot-exterior-homology-and-longitude.md`: one checked, zero failures.
- Final post-edit/formatter `node tools/proof-layout.mjs items/thm-knot-exterior-homology-and-longitude.md`: one item, eight steps, zero defects.
- `node tools/rendercheck.mjs items/thm-knot-exterior-homology-and-longitude.md`: one file, no errors; math parsed with real KaTeX and frontmatter with the renderer's YAML parser. An earlier attempt to request rendercheck help started its unscoped default scan and was interrupted; that invocation is not counted as validation.
- `node tools/defect-ledger.mjs append --file /tmp/alpha57-ledger-rows.json`: seven rows appended and the generated view refreshed successfully.

No local blockers or open escalations remain. Read-only live status recomputed from `.autopilot/` showed active Step 3 work and an unrelated collect-49 retry blocker; no engine controls were changed. No judge, stamp, certification, gate battery, agent dispatch, publication, commit or push was performed. The engine must stamp current decision hashes and run its ordinary checks.
