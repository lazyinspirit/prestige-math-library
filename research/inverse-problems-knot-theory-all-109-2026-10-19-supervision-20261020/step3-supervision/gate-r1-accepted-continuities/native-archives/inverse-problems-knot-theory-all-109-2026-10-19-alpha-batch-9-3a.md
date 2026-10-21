# Batch 9 Step 3a adjudication

Run: `inverse-problems-knot-theory-all-109-2026-10-19`; group: `batch-9`.

## Dependency-order review checkpoint

### Level 3 — scalar Gaussian comparison

Independently reviewed Statement, F1–F17 and all eight proof steps against current direct supplier statements and Ding–Mathé §2 (equations 12–13). The two-point posterior variance is b² sech²(by/τ²); predictive mixing and affine Lebesgue substitution give b² exp(-u²/2) I(u). Checked normalization by the half-line bridge, reflection, null singleton and full-line scaling, with ACω explicitly assumed. For 0≤u≤1, I(u)≥I(1)≥1/√2 follows from cosh x≤exp(x²/2); the monotonic derivative argument is valid on every finite interval. Randomized actions cannot improve conditional posterior variance. r=0 gives a point prior and zero risk; τ>0 excludes division by zero. Identity and zero estimators give τ² and r². No mathematical gap found. Published Lebesgue definition has malformed explanatory prose, separately routed as reader:9:1; its explicit all-test-set criterion and restriction remain intact. No diagrams in this carrier.

Sources read: current direct dependency Statement/Definition sections; Ding and Mathé, https://arxiv.org/pdf/1707.01706v2, §1 and complete §2, PDF pp. 1–5. The source is supporting context; the local scalar calculation was checked independently. Original Johnstone 2011 pages have not been checked in this review.

Next: complete level-5 coefficient and minimax reviews, then rates and routed example/page decisions. Published reader finding remains pending ledger disposition.

### Level 5 — power-source coefficient identification

Independently checked both coefficient inclusions in steps 1.1–2.2 and monotonicity in 3.1 against current model, power-source, minimum-norm, compact SVD, spectral-multiplier and real-power supplier statements. Kernel components vanish under the positive power, Bessel bounds forward coefficients, and w_j=s_j^{-ν}θ_j is square summable with norm ≤ρ, so the inverse coefficient isometry constructs the converse vector. The multiplier is bounded on the compact spectrum. Positive singular values prevent inverse-power division by zero; ν,ρ>0 are explicit; zero belongs to both sets; nontrivial kernels cause no loss because all source vectors lie in N(K)⊥. s_j nonincreasing and ν>0 imply weights nondecreasing, with equality allowed. Countable Choice is inherited only through SVD/spectral prerequisites. Ding–Mathé Definition 2, PDF p.2 supports the source convention, but its displayed coefficient formula appears to omit a square on φ; the local proof uses the correct squared weights and is independently valid. No repair or diagram needed.

Dependencies: `def-ip-gaussian-sequence-inverse-model`, `def-ip-statistical-ellipsoid-class`, `def-ip-power-source-set`, `lem-ip-index-source-elements-are-minimum-norm`, compact spectral-multiplier and compact SVD items, real-power laws/derivatives and mean-value theorem. No unresolved mathematical obligation on this item. Next: minimax comparison.

### Level 5 — general minimax comparison

Independently reviewed all 13 steps and current direct supplier statements. Q=0 is separated. For Q>0, a_1>0 bounds the ℓ¹ budget and τ_j²→∞ permits weighted-tail compression into N+1; this proves existence of a finite-support maximizer using finite-dimensional extreme values, without assuming a_j→∞ or infinite-dimensional compactness. The exchange of δ from a later saturated coordinate to the first gap preserves feasibility and cannot decrease J, giving a saturated prefix. Finite-direction derivatives have the correct cap signs; summable tails justify passage m→∞. The finite endpoint prior lies inside the ellipsoid, its likelihood ratio extends from generating cylinders by equal finite mass and pi-system uniqueness, and the posterior variance lower bound applies to arbitrary measurable action kernels given the data. Cutoff loss is Borel and its exact risk is used correctly. Verified R_cut²≤2J*, R_*²≥J*/√(2e), and the explicit factorial/geometric estimate gives 2√(2e)<(11/5)². D=0, zero prior coordinates, equal adjacent axes and bounded weights are covered. Ding–Mathé §1 equation (9) and complete §2 were read; the local proof supplies the finite-support replacement rather than inheriting the source compactness assertion. Johnstone 2011 fetch timed out, so its pagination is unverified; no local inference depends on an unread Johnstone theorem. No repair or diagram needed.

Dependencies additionally checked: cutoff algorithm, exact cutoff-risk theorem, factorial/canonical-natural/induction/integer-power/order-limit/geometric-series statements, finite-measure uniqueness and finite-dimensional extreme-value theorem. No unresolved mathematical obligation on this item. Next: four rate balances.

### Level 6 — four estimation rates

Independently checked Statement, F1–F7 and all six steps against current suppliers and Ding–Mathé §3/Table 1 (PDF pp.5–6). Polynomial sums are trapped between (D/2)^(q+1) and D^(q+1); geometric sums are comparable to the final term for p>0. Recomputed all four squared-risk balances and matching lower bounds by D≤D0 versus D>D0. The mixed cases correctly include logarithmic corrections in D0; substituting L=exp(t) in t/exp(t)→0 proves log L/L→0. Floors change exponential terms only by fixed factors and polynomial terms by tail constants. D0→∞, so any initially exceptional indices in axis comparisons are absorbed; bounded D and D=0 are controlled by the bias lower bound. Q,p,κ are fixed strictly positive; no uniform radius-zero or exponent-zero endpoint is asserted. The factor-2.2 comparison transfers both bounds to RMS error. ACω is inherited, no further choice used. Johnstone 2011 source fetch timed out and its printed locators are not newly verified; local proof plus the read Ding–Mathé table suffice. No repair or diagram needed.

Additional suppliers read: natural-logarithm definition/laws and exponential-dominates-polynomial theorem. All other direct suppliers were reviewed earlier. No unresolved mathematical obligation. Next: touched example and reader/refuter dispositions.

## Routed decisions and repairs

- `touched:9:ex-ip-power-source-minimax-rates`: **accepted_repair**. Reader made the real Hilbert spaces, compact infinite-rank map and its positive singular-value sequence explicit in Example and Given. Independently checked coefficient identification and both rate substitutions; original context was recoverable from Facts, and the clarification is sound. Current carrier equals post-reader SHA256 9b7da84ef29c78937f43c4a4d278e6243bc9fe6c498b30ff5a590e8205d7412c. Manifest/notes now mirror the accepted Example. For ν=1 the ellipsoid weights are s_j^{-1}; p=κ=1 yields 2/5 and 1/2. Search of items/library found only its own carrier and B-page inventory, so no item consumer requires repair. Closed row `ipkt109-b9-3a-power-source-interface`.

- `reader:9:1`: **confirmed_nonfatal**. Independently confirmed duplicated Countable Choice clause and incomplete outer-measure/completeness theorem prose. Explicit Carathéodory criterion and restricted set function remain intact and scalar consumer uses them correctly. Published carrier left read-only. Owner editorial correction is pending in published-consumer-supplier ledger; closed disposition records routing only, not source repair. Current raw SHA256 5a6846f8d796d5c198ff73e67b5d6519cc02b35d861a4bc00ee038e6b42572b4. Definition references retain both theorem IDs. Closed row `ipkt109-b9-3a-published-lebesgue-prose`.

- `refuter:9:1`: **confirmed_fatal**. Independently inspected all three listed kinds: each is example, and no counterexample is inventoried. Removed unsupported “and Counterexamples” from draft page title and matching batch manifest. Preserved complete inventory, empty body and page_layout compact-v1; adding content would exceed this necessary repair. Closed row `ipkt109-b9-3a-examples-page-title`.

The touched example current raw hash exactly equals the post-reader snapshot; its pre-reader snapshot is `3dd373d3f02b2aea801ac417618063b7dd3da60dd97e6c1797fa8321b2d0777e`. Original Statement/Definition changes require consumer review: searched actual `items/` and `library/` uses of the example ID; only its own carrier and unchanged B-page membership occur. No dependent item or outside consumer repair is needed. Both rates follow from the already reviewed real infinite-rank coefficient lemma, with radius ρ fixed and ε tending to zero. No judge record existed to invalidate. All seven assigned statements are already uninterrupted and reference sections are separate; no item was edited by this adjudicator.

The page title finding is factual, rather than a requirement to invent a counterexample. The schema permits B pages containing examples only. Updated only the draft page title and corresponding page-manifest title. Synchronized the touched example Statement mirror in the manifest and its author notes; preserved original hash-bound historical boundary records. Published source unchanged; its ledger classification is A-P.

## Scope and remaining work

Four complete current risk reviews are recorded in the batch contract. Current owned cross-batch direct supplier-use reviews are recorded without replacing historical evidence; the native ledger refresh maintains the frontier record. No new edges, withdrawals, algorithms or diagrams were authored. None of the five reviewed item carriers or the assigned B page contains TikZ/tikzcd; no argument requires an added diagram. No supplier mathematical blocker was found. The owner still owes the published-definition editorial repair. Johnstone 2011 retrieval timed out: exact original pagination remains unverified, and no claim of reading it or inheriting old acceptance is made. Ding–Mathé §1, complete §2 and §3/Table 1 were read; this review does not audit the full transitive foundation of published suppliers.

## Final local checks

- `risk-report` before review and `risk-report --require-reviewed` afterward: 7 items routed, four HIGH/CRITICAL reviews complete, 0 errors.
- `proof-contract --strict` on the batch contract: 7/7 checked, 0 errors or warnings.
- `precheck` on the reader-edited example: 1 checked, 0 failing.
- Final `proof-layout` on `items/ex-ip-power-source-minimax-rates.md`: 1 item, 3 steps, 0 defects. No item edits followed it; this adjudicator changed supporting records and the draft page title only.
- `rendercheck` on the example and repaired page: 2 files pass actual KaTeX and renderer YAML parsing.
- `manifest-deps` on batch 9: 7 items, 0 normalized, 0 errors.
- Defect-ledger append: 3 valid closed rows appended with native serialization and generated-view refresh. Checked each of the three decisions references exactly one of those closed rows; no extra routed decision was created.
- `frontier-dependency-ledger refresh`: refreshed and deduplicated. Retained all original cross-batch edges and historical records; added bounded current supplier-use evidence for reviewed consumers.
- All seven current item raw hashes equal the post-reader snapshot. The accepted example Statement mirror matches its current carrier.

Read the two other example carriers to verify the B-page title finding: both are genuine examples, correctly substituting p=κ=1 in the other two pairs of rates, and neither supplies a counterexample. No diagram occurs in either. The A page retains its four-item inventory, three prerequisites, empty body and compact layout; its metadata was read for context, not given an unowed decision.

Active-run check against `.autopilot/` recomputed Step 3a in progress (batch 9 adjudication still owed); latest Git commit inspected was `ace06e03bc`. No historical resume was used as authority. No judgment, stamp, publication, scheduling or engine gate was initiated. Engine collection and the gate battery remain engine-owned. The only remaining owner action identified here is the recorded nonfatal published-definition prose correction.
