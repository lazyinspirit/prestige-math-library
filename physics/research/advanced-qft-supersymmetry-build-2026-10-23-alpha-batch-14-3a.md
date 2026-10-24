# Batch 14 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`; group: `batch-14`; role: alpha.

Scope: two touched examples, four HIGH risk reviews, no reader/refuter/page decisions. Scope group `q` is preserved. Review follows the dispatched item order. No agents, judgment, acceptance stamps or engine gates are initiated.

Completed level 4: `def-aqft-background-gauging-data`, Proof 1.1–2.1 and its four direct dependencies, plus the consistency proof needed by the coherence supplier. Finite classes and positive denominators give finite sums; conjugation and inverse whiskering identify stabilizers on equivalent objects. Retained raw arrows yield point mass |A|/|G|; identity-only 2-arrows recover ordinary cardinality. Relative restrictions and empty/trivial cases are sound. Scalar invariance is a hypothesis, with boundary line actions explicitly excluded. Complete specific risk review is recorded in the owning contract.

Sources checked so far: Freed–Quinn, §2, (2.1), Lemma 2.4 and the boundary-line discussion (https://www.math.ru.nl/~mueger/TQFT/FQ.pdf). Moore–Saxena PDF fetch failed because of size, but https://arxiv.org/html/2510.07408v1 was retrieved through urllib; §23.3 was read for the alternating homotopy measure (23.34) and closed-target cardinality (23.36)–(23.38). This is context for the local construction, not a proof of its explicit cochain formulas.

Historical evidence: Git HEAD has exact raw SHA256 preimages for both touched carriers, matching `step3-hash-14-pre.json`. Current raw carrier SHA256 values match `step3-hash-14-post.json`. Reader report/findings and refuter report were read; their findings arrays are empty.

Checkpoint status at level 4: remaining reviews, reconciliation and checks were pending; their completed results are recorded below.

Completed level 5 example: `ex-aqft-finite-z2-cocycle-circle`, all three proof steps. The trivial coefficient action makes the stated 1-cocycle condition precisely multiplicativity; both conjugation stabilizers have order two, so 1/2−1/2=0. Reader clarification is mathematically correct. Amended repair: synchronized the stale manifest Example transcription with the reader's current text; item bytes and proof remain unchanged. Exact HEAD preimage and post-reader hashes match the immutable snapshots. The only library occurrence is its B-page inventory; no item dependency/reference consumer exists. One closed nonfatal undefined-notation defect will record the omitted coefficient action and groupoid composition convention. No physical premises or infinite choice.

Completed level 5 ordinary theorem: `thm-aqft-finite-group-gauging`, Proof 1.1–4.1 and all F1–F3 suppliers. Orbit-stabilizer on the finite isomorphism sets proves both source and boundary coefficients; nonisomorphic boundary pairs contribute zero and isomorphic pairs contribute |Aut(s)| before source denominators. Empty fibers and trivial groups are valid. Its single tikzcd square has correct restrictions and orientations. The explicitly assumed comparison equivalence and scalar factorization are essential. No repair or new decision is owed; complete risk review saved.

Completed level 5 higher theorem: `thm-aqft-finite-two-group-gauging-gluing`, Proof 1.1–4.1 and all three dependencies. For each object, kernel/image counting gives pi2/pi1=|A|^V/|S_x|. Raw outgoing parameters number |G|^V|A|^E, with each target receiving |S_x| arrows: fixed-arrow composition solves uniquely for vertex labels and then edge labels, and invertibility on background fields verifies the solved stabilizer condition. Dividing gives c(K). The relative argument uses V−V_L and E−E_L. Boundary arrows extend to bulk parameters, so extension sums are invariant; local simplex equations glue uniquely and inclusion-exclusion proves contraction. Checked K empty, L=K, trivial A, beta zero, a point and empty extension sets. All statements are finite mathematical deductions. No repair/decision owed; complete risk review saved.

Completed level 6: `ex-aqft-finite-c2-gluing-identity`, all three proof steps and F1–F3 suppliers. The two pullback objects are connected, each with stabilizer C2. Each identity fiber instead has a unique arrow between each pair of its two objects, hence mass one. The identity comparison and unit weights satisfy the theorem hypotheses, yielding 1/2 on both sides. Retained the reader's complete BG definition and amended the stale manifest transcription. No item consumers; the sole B-page inventory is unchanged. Complete risk review saved. Both touched decisions are `amended_repair`, solely because manifest synchronization changes their reader-result carriers; item bytes remain the exact post-reader bytes.

## Dispositions and changes

Exactly two obligations are owed and decided in the companion decisions JSON:

| Obligation carrier | Verdict | Closed defect suffix |
|---|---|---|
| `touched:14:ex-aqft-finite-z2-cocycle-circle` | `amended_repair` | `batch-14-circle-coefficient-action` |
| `touched:14:ex-aqft-finite-c2-gluing-identity` | `amended_repair` | `batch-14-bg-definition` |

Both defect IDs begin with the run name. Each is a nonfatal `undefined-notation` defect, fixed with `repair_confidence: 1`, owned at `caught_at_stage: 3a-adjudicate`, and linked to its exact decision. The reader's actual omissions and sound repairs were independently checked rather than inferred from the empty findings lists. Both rows were appended with the serialized defect-ledger tool; its generated view was refreshed. No row was created for a command failure.

Amendments synchronize the two Example transcriptions in the owning batch page manifest with current item text. All nine batch item files remain byte-identical to the post-reader snapshot; no item was edited in this dispatch. There was no material proof rewrite or judge stamp to invalidate. The four HIGH items now have complete specific `risk_review` entries. No new items, pages, prerequisite edges or physical interface changes were made. No agent, judge cycle, seal/stamp or engine gate battery was invoked.

Historical preimages are exact, not inferred: `git show HEAD:physics/items/<id>.md` reproduces the immutable pre-reader raw item hashes. For the circle these are `66ae7bd2744a56d890601065bd63238d424e69fccf7967ffe5a63501d27569c9` before and `04c108ad37a42e451a23f6fe6e86edfef6a6b85f0c3eec12b6d708d71af30aa1` after. For BG they are `d15474c7256245e07d7bf2ba44a34eebb3952f58a72d1dadf8d74c7ca5803ba9` before and `c88d15fedc2155c0fd4df1c55faaf5caf0e05f5df6b6ff551243658547d4c297` after. Pre/post contracts contain the reader's corresponding clarification; pre/post manifest hashes are unchanged because those transcriptions were stale. This dispatch corrects them, so `amended_repair` is the appropriate carrier verdict. No missing historical bytes, owner-resolution exception or historical escalation is claimed.

## Suppliers, sources and scope

Actual dependency review covered the five routed carriers, `def-aqft-two-group-background`, `thm-aqft-two-group-background-consistency`, `def-aqft-finite-background-two-groupoid`, `thm-aqft-finite-background-two-groupoid-coherence`, and the two published finite-groupoid definitions. The draft consistency and coherence proofs were read through their explicit cocycle cancellations, affine composition, associator direction, pentagon, reverse arrows and relative restrictions. Source status is retained: draft suppliers remain draft; published suppliers remain read-only. The import ledger contains none of these IDs. No published supplier defect was found, so no published-consumer ledger row or lock was needed.

External source checking was focused:

- [Freed–Quinn, §2](https://www.math.ru.nl/~mueger/TQFT/FQ.pdf), PDF pp. 8–11: automorphism measure (2.1), compatible boundary identifications, Lemma 2.4 and its stabilizer proof, and the scalar/line-valued boundary distinction. This supports finite measure and gluing context, not arbitrary scalar boundary actions.
- [Moore–Saxena, HTML §23.3](https://arxiv.org/html/2510.07408v1#S23.SS3): (23.34) gives alternating homotopy-group weights, (23.35) the closed partition function, and (23.36)–(23.38) the Eilenberg–MacLane specialization. The PDF and web HTML requests exceeded tool size limits; urllib successfully retrieved the HTML, and the relevant text was extracted and read. No PDF-page inspection is claimed. The explicit local cochain gluing proof does not rest on an unproved identification with mapping spaces.
- [Baez–Lauda, §8.3](https://arxiv.org/pdf/math/0307200), PDF pp. 58–59: skeletal group/action/abelian automorphism data and the pentagon-to-normalized-cocycle calculation. The converse construction there is an exercise; local consistency/coherence proofs supply the explicit finite construction used here.
- [Benini–Córdova–Hsin, §2.3](https://arxiv.org/pdf/1803.09336), (2.14)–(2.20), PDF pp. 19–20: flat edges, twisted face constraint, coefficient action, and gauge-shift equation. The particular zeta/tau representatives and their coherence are local results, not attributed to that passage.
- [Dijkgraaf–Witten, §§6.4–6.5](https://www.ias.edu/sites/default/files/sns/%5B126%5DCommMathPhys129-1990.pdf), PDF pp. 27–28: finite flat connections, ordered simplex weights and the closed-manifold restriction on deriving an action solely from edge data. This is motivation for the explicit invariance/factorization hypotheses, not an extension to all boundary scalar weights.

These carriers are mathematical finite-model statements. They report no measurements, statistical inference or empirical support and imply no realization of a physical symmetry or continuum theory. No AC hypothesis or hidden infinite choice is used; finite representative selection and elementary orbit-stabilizer counts suffice.

All six existing owned cross-batch records were updated with actual supplier uses and current-review evidence. The matching batch-14 note was appended to `briefs/tasks/frontier-dependency-ledger.md`. The unified ledger remains engine/tool-owned. The two changed example descriptions have no item dependency/reference consumers (searched all items and library); their B-page inventory remains consistent. The definition/theorem public interfaces did not change. The sole routed diagram was checked in the ordinary theorem; no diagram additions are needed.

## Focused checks and remaining owner action

Successful local checks:

- Precheck through `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` on all five routed item paths: 5 checked, 0 failing.
- `rendercheck.mjs` on those five paths: all five passed YAML and real KaTeX checks.
- `proof-contract.mjs` on the owning contract, `--strict --items` with the five routed IDs: 0 errors, 0 warnings, 5/5 checked. Reader contract paraphrases in the two examples were checked for mathematical fidelity; they need not duplicate item prose byte-for-byte.
- `risk-report.mjs` on the batch contract, first without `--require-reviewed`, then with it after all four specific reviews: 0 errors, 9 items routed; all four HIGH obligations complete.
- Final batched layout check: `node tools/physics-support/proof-layout.mjs items/ex-aqft-finite-z2-cocycle-circle.md items/ex-aqft-finite-c2-gluing-identity.md`: 2 items, 6 steps, 0 defects.
- Explicit raw-hash comparison: all nine current items match post-reader hashes; both Git HEAD preimages match pre-reader hashes. Decisions have exactly the two owed obligations; each names one unique fixed Stage-3a ledger row.

Exploratory invocation notes: direct Node execution of the `.mts` precheck failed because this Node installation needs the supplied tsx runner; the corrected runner command passed. An attempted `proof-contract-check.mjs --help` path did not exist; the actual `proof-contract.mjs` command above passed. Neither failure is mathematical evidence or a defect-ledger row.

**Outside-scope mechanical blocker:** both attempts at `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run advanced-qft-supersymmetry-build-2026-10-23` failed on `items/post-qftx-nonabelian-yang-mills-model.md:38`: the Vákár `locator` is indented at the mapping/list level instead of beneath its reference entry, producing “All mapping items must start at the same column.” The exact source was inspected at lines 35–40. This carrier is outside batch 14, was not edited, and does not supply these deductions. The owner must route its YAML correction and rerun the unified-ledger refresh. The owned input and frontier note are already updated; no successful unified refresh is claimed.

No mathematical escalation or open defect remains in the two assigned decisions or four risk reviews. The sole unresolved local-operation issue is the outside YAML failure above. Engine hash stamping, coverage and gate-battery outcomes remain for the engine after handoff.
