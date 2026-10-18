# Batch 27 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-27`.

Scope owes only `touched:27:ex-hmm-viterbi-exact-sequence-map`; reader/refuter findings and page obligations are empty. Three additional HIGH-risk reviews are required, without extra decisions.

## Level 1 — prefix recurrence

Reviewed current Definition and Proof 1.1, 1.2, 2.1 and exact F1 citation. The T=0 empty prefix has score 1; at T>=1 a prefix starts at positive alpha and omits beta. Positive edge weights preserve the maximizing predecessor and make score zero equivalent to absence of a prefix. Finite maxima with an adjoined zero cover empty predecessor sets, empty layers, alpha=0 and T=1. The stated induction establishes every layer; no infinite choice is used. Reader and refuter report no finding. No defect or unmet prerequisite.

Sources: `items/def-finite-layered-trellis.md`, `items/lem-finite-trellis-prefix-score-recurrence.md`, batch 27 contract citations/boundaries, reader and refuter reports. Risk review complete; current proof unchanged. Next: finish trellis optimality review, then HMM theorem and touched example.

## Level 3 — trellis optimality

Reviewed current Proof 1.1, 2.1, 3.1 and F1-F3 against the trellis definition, proved prefix recurrence and actual algorithm. Terminal multiplication by nonnegative beta preserves prefix optimality; a positive terminal maximum exists exactly when an admissible full path exists. Empty terminal sets satisfy the all-zero test vacuously. T=0 returns the empty score-1 path; T=1 needs no pointer. At T>=2 each positive candidate has an attaining predecessor with positive prefix score; backward induction proves every pointer exists and the product telescopes to the optimum. Supplied finite orders settle ties without AC. Finite loops terminate. Counting each edge candidate once, vertex scans and at most T traceback steps gives O(1+T+V+E) unit-real operations; scores and pointers use O(1+V) auxiliary storage (a returned nonempty path has T<=V). No bit-complexity claim is made. Reader/refuter evidence supplies no counterexample. No defect or unmet prerequisite.

Risk review complete; item carrier unchanged.

## Level 4 — HMM sequence MAP

Reviewed current Proof 1.1, 2.1 and exact F1-F4 against both definitions, both algorithms, the trellis theorem and normalization lemma. Nonnegative finite factors make positive joint mass equivalent to positive initial/emission factors and every retained edge; terminal factor 1 gives identical trellis and joint scores. Finite nonnegative summation makes evidence zero exactly when every path mass is zero, proving both no-path directions. With positive evidence, division by its common positive value preserves all maximizers, including ties; zero-mass omitted paths cannot maximize against a positive path. T=1 uses only pi times the first emission; T=0 is excluded by the HMM input domain. Normalization independently follows by summing emission coordinates then transition coordinates in reverse, ending with sum pi=1. Supplied orders require no AC. All cited local statements and their hypotheses match. Reader/refuter report no defect. No unmet prerequisite.

Risk review complete; item carrier unchanged.

## Level 5 — touched worked example

Verdict: **accepted_repair**, repair confidence 1. The exact archived pre-reader carrier at .autopilot/non-ml-math-remaining-81-2026-10-18/owner-step2-source-baseline/items/ex-hmm-viterbi-exact-sequence-map.md has raw SHA256 70275c17b7d7cb80acfa9ae053b16e917869a04070b1ad1bca791d0234446fcc, equal to the supplied pre snapshot. Its delta to current is the explicit order u≺v plus whitespace-only reflow of F1-F3. Current raw SHA256 5650e2131962f05b3a428de75ffb33cf5d501d7be7a0ab88d0f41783f6a1e34a equals the post snapshot. The decoder requires a total state order; the addition supplies it. All eight joint masses, evidence 33/256, recurrence and uvv traceback are correct; uvv uniquely maximizes joint mass and has posterior mass 81/176. The omission is nonfatal because this computation has no maximizing-predecessor or terminal ties. Retain the smallest complete input repair and corresponding contract boundary update.

Closed nonfatal defect: `non-ml-math-remaining-81-2026-10-18-3a-batch-27-state-order`. No new item edit was necessary. Its provenance remains an AI-generated worked example, the page manifest/dependencies remain accurate, and no judge stamp is present. The reader changed the Example input, not a Statement or Definition; no consumer interface changed. All actual cited prerequisites were read and checked as described above. The existing frontier-dependency inputs require no update because neither dependencies nor supplier interfaces changed; no proposed withdrawal was removed.

## Sources and boundaries

Independently consulted [MIT OCW Lecture 7](https://ocw.mit.edu/courses/6-096-algorithms-for-computational-biology-spring-2005/c48f8fdb8e1ff0cb6336e5b9b6cab23f_lecture7.pdf), PDF pp. 6, 21–23 (zero-based pages 5, 20–22), for HMM parameters, the optimal-prefix recurrence, traceback and conventional arithmetic-operation complexity. Consulted [Stanford CS262 Lecture 7](https://web.stanford.edu/class/cs262/presentations/lecture7.pdf), PDF pp. 2, 16, 19–20, for the HMM tuple and single-sequence Viterbi recurrence. The latter's pair-HMM discussion is outside the local claim. These sources support the standard recurrence; the local proofs independently establish their additional empty-trellis, endpoint and zero-evidence conventions. No external theorem substitutes for a local proof.

No published defect, outside-batch defect, uncertainty or blocker was found in the reviewed dependency closure. Published files remained read-only. Reader/refuter findings arrays are empty, so the decision file contains exactly the one touched obligation; the three risk reviews add no decisions.

## Local checks

- Initial risk-report: 12 items, exactly three HIGH items (scores 6, 7, 6); no errors. Each received the specific complete risk review above, in supplier order.
- `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-27.proof-contracts.json --require-reviewed`: 12 items, 0 errors.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-hmm-viterbi-exact-sequence-map.md`: 1 proof checked, 0 failing.
- All 12 current item raw SHA256 values equal their supplied post snapshots. Only the worked example changed between pre and post; its archived preimage was authenticated against the supplied pre hash. Contract changes in this dispatch add only the three risk reviews.

The serialized ledger append succeeded (one closed nonfatal row), and its generated view was refreshed by the ledger tool. Final `node tools/proof-layout.mjs items/ex-hmm-viterbi-exact-sequence-map.md` passed: 2 steps, 0 defects. No item edit or formatter followed this check. Required local work is complete; no blockers remain. Engine-owned hashing and gates remain for the engine; no judgment, stamp or certification was performed.
