# Batch 18 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`. Group: `batch-18`.

Review proceeds in the generated dependency order. Initial risk-report routed 14 HIGH/CRITICAL items, with zero mechanical errors.

## def-it-two-user-real-awgn-mac-code

Reviewed Definition and steps 1.1–3.1 against the actual Gaussian-integral, bounded substitution, positive square-root and sigma-finite Tonelli statements. Linear substitution has continuous integrand and positive scale sqrt(2N); finite products normalize. Finite nonempty messages and Borel maps define measurable errors. N>0 excludes singular noise; Pj=0 forces zero input almost surely; Mj=1 gives rate zero. No AC use or repair.

## lem-it-finite-gaussian-mixture-entropy-bounds

Reviewed all six steps with the differential-entropy definition, Gaussian normalization and Tonelli. Positive convolution has a bounded density and a quadratic log lower bound from positive mass in a finite ball; finite second moment therefore gives absolute entropy integrability. KL inequalities against the matching Gaussian, marginal product and PX times PY yield the three claimed bounds. Conditional laws inherit the finite second moment a.s.; h(Z) lower bound and integrable logarithmic variance upper bound justify averaging before Jensen. N>0 handles constant X and degenerate conditional inputs. No AC use or defect.

## lem-it-ozarow-feedback-sum-corner-achievable

Reviewed steps 1.1–7.1 against the code definitions and current covariance-update proof. F strictly decreases between opposite endpoint signs; temporary positive powers preserve strict positive rates. Startup noises give exactly the desired correlated Gaussian initial pair, independent of messages. Recursive inputs are Gaussian innovations independent of recursive past. Root identity and positive unsquared numerator keep correlation fixed. Invertible affine relation of Uj and current Vji conditional on past justifies the conditional Gaussian information calculation and exponential posterior variance. Midpoint spacing plus Chebyshev gives reliability for strict rates; O(1) startup energy is absorbed by power slack, and n+3 normalization and closure give the boundary. Positive powers and N are essential; no AC.

The touched covariance-update lemma is sound: its Gaussian characteristic-function factorization supplies independence; covariance subtraction and opposite-sign normalization give the exact displayed formulas. Reader addition accepted provisionally pending historical delta comparison.

Next: rate splitting and level-4 touched theorems, then higher-level consumers. No blocker identified so far.

## lem-it-awgn-feedback-rate-splitting-achievable

Reviewed all eight steps against the covariance and sum-corner lemmas and Lapidoth–Wigger Remark IV.15 proof, printed pp.5449–5450, equations (82)–(85). Phi>0 gives a unique strictly positive private-layer split below 1-rho²; residual root algebra preserves positive powers/noise. Before fixing codebooks the chosen private Gaussian sequence is IID and fresh from recursive past. Genie subtraction is valid when feedback messages are correct, and false private words are independent of genie output. Quadratic-energy representation includes feedback dependence on the entire private word; tr K=O(n), nonnegative c and exponential private message count give concentration for both users. Power slack absorbs startup cost. Strict rates, rho in (0,rho_star) and closure are essential; no AC.

## thm-it-cover-leung-feedback-mac-inner-bound

Reviewed all seven steps against finite MAC/causal-feedback definitions and finite information definitions, and Cover–Leung Theorem 1 pp.293–294. Clouds encode prior user-2 chunk; sender 1 decodes it causally. Receiver backwards knows current user-2 chunk. True-state/wrong-user-1 candidates retain the true user-2 satellite and are charged only to the conditional user-1 test; wrong-state candidates have independent entire codebook groups and use the pair test. Confirmed refuter counterexample and restricted the erroneous all-message-pairs independence assertion to wrong preceding states. Finite block union bounds, dummy terminal block, deterministic codebook selection and b then n diagonal limits work. Singleton chunks omit tests; scaling positive rates handles zero-information faces. No AC.

## thm-it-two-user-real-awgn-mac-capacity-region

Reviewed all nine steps with the current density Fano, convolution-entropy and no-feedback-code suppliers. IID Gaussian codebooks with smaller positive powers give true thresholds by finite quadratic variance, and false subset words are independent of output given complementary true words; each subset likelihood ratio has reference mean one. Gaussian energy tail and separate bad-word deletion preserve rates and joint error under product uniform messages. Converse density entropy expansion, conditional variance bounds, no-feedback input independence, Jensen and uniform information bounds give bounded rates before normalized Fano vanishes. Zero powers reduce to singletons/single-user specialization; closed region includes endpoints. Reader closure and rate-control repairs are valid. No AC.

Level 4 complete. Cover–Leung refuter:18:1 confirmed nonfatal and locally repaired in step 3.2; no Statement changed. Current raw bytes matched the immutable reader-post hashes for all eight touched carriers before adjudicator edits.

## lem-it-cover-elgamal-salehi-conditional-packing

Reviewed steps 1.1–4.1 and all eight exact supplier interfaces. Conditional type counts apply to fixed (Q,S_complement,X_complement,Y); unexposed entries indexed by genuinely different source blocks remain independent after exposing the true tuple. Conditional type cardinality is a product of ordinary type-class upper bounds. Support-restricted frequencies bound finite log kernels and entropy continuity uniformly. Entropy expansions use Q independent of sources, X2 independent of S1 given S2,Q, and channel conditional independence; the resulting three exponents are exactly the asserted ones. Both-source candidates cannot reuse either true entry. Deterministic and zero-probability kernels are covered on positive support; strict exponent gaps needed only by consumer. No AC or defect.

## thm-it-ozarow-awgn-mac-feedback-capacity-region

Reviewed all nine steps with six current actual suppliers. Causal Borel density factorization justifies Fano and Gaussian entropy differences; fresh noise is independent of history. Linear predictor residual bound, zero-variance convention, Jensen and Cauchy–Schwarz yield individual bounds with a common absolute averaged correlation. Replacing negative covariance by its absolute value enlarges sum bound, and powers plus Fano give rate boundedness before taking a convergent correlation subsequence. Positive-power achievability uses rate-splitting endpoints below rho_star and the sum corner plus both single-user axes at rho_star. Deterministic public subblocks preserve private message independence and powers. Higher rho rectangles are contained in rho_star rectangle; zero powers reduce to single-user/no-feedback. Reader axis-vertex repair is mathematically sound; no AC.

Level 5 complete. Pre-reader SHA-bound full archives have been located for covariance-update, correlated-adder, DM-MAC, broadcast and page; search continues for four remaining preimages. Historical uncertainty is not mathematical rejection.

## thm-it-cover-el-gamal-salehi-correlated-source-mac-sufficient-condition

Reviewed all five steps and actual source-code, conditional-packing, finite entropy and information suppliers. Q is a deterministic public rounded schedule, independent of source pairs; zero Q-mass letters can and must receive zero schedule counts. Source-indexed random entries give an independent per-coordinate ensemble true tuple despite reuse across possible source messages. Chebyshev on finite frequencies proves support-restricted typicality. Uniform conditional packing bounds from the prior lemma apply after exposing the true tuple, and strict entropy gaps absorb omega(delta) and polynomial counts. Finite ensemble yields deterministic separate encoders without shared runtime randomness. Statement is sufficient only; it does not assert a boundary converse. No AC or defect.

## ex-it-ozarow-awgn-mac-feedback-rate-region-at-rho

Confirmed reader:18:1: finite-check anchor 1.2 does not exist; changed it to 2.1. Confirmed refuter:18:2: the no-feedback comparison lacked its direct supplier. Added F3, direct dependency, manifest edge and exact citation contract; step 2.1 now invokes it. Direct calculation gives individual 0.5 ln(7/4), sum cap ln 2, and ln(7/4)>0.5 ln3 since 49>48. No Statement change. Both findings are nonfatal and fully repaired.

## thm-it-finite-dmc-feedback-does-not-increase-capacity

Reviewed four proof steps and all eight actual supplier statements. Given message and past, encoder input is deterministic and causal channel transition is exactly W, so averaged conditional entropy H(Yi|M,past) equals H(Yi|Xi). Dropping past from first output entropy gives I(M;Yi|past)<=I(PXi;W)<=C. Fano directly yields (1-Pe)R<=C+ln2/n, without assuming bounded rates. Ordinary random coding applies to finite DMC without costs; zero capacity handled by a singleton message. No claim about constrained channels or maximal error. No AC or defect.

## thm-it-physically-degraded-dm-broadcast-capacity-region

Reviewed eight steps and all eight actual supplier statements. Cloud decoding is possible at both receivers since physical degradation gives I(U;Y1)>=I(U;Y2). False clouds are charged by cloud test irrespective of their satellites, while wrong satellites in true cloud use conditional test. Singleton cloud/satellite rates omit corresponding tests and closure covers zero-information faces. Converse U_i=(M2,Y1past) has correct channel Markov chain; past weak outputs are generated from strong past independently of current output, giving weak converse equality. Finite output entropy bounds justify normalized Fano remainders and independent Q inclusion gives the claimed union. Reader rate-control addition is sound enrichment of an immediate finite-output inference. No AC.

## thm-it-two-user-discrete-memoryless-mac-capacity-region

Reviewed seven steps with seven exact suppliers. Separate message-only encoders preserve independent input laws at fixed coordinate; public Q in converse is independent uniform time index. Conditional entropy chain bounds give each subset converse. Deterministic rounded schedule, independent finite codebooks and bounded positive-support density terms give all true tests; false subset words have reference likelihood mean one. Only positive-total-rate subsets need tests, so singleton faces and zero-information bounds are included via scaling and closure. Finite |Y| bounds rates before normalized Fano disappears; reader addition makes this immediate inference explicit. Average joint error is essential. No AC.

Level 7 complete. Next: XOR and correlated-adder examples, page scope, then final local checks and decision reconciliation.

## ex-it-binary-xor-dm-mac-product-input-region

Reviewed steps 1.1,2.1,3.1 against no-feedback MAC, product-law capacity and finite entropy/information suppliers. Conditional XOR bijections give hb(p), hb(q); deterministic output gives hb(p+q-2pq). Binary output bounds each Q-conditioned sum by ln2, attained by independent fair inputs, hence exact triangle. For diagonal correlated input, every positive-mass product mixture component has zero off-diagonal masses and so must be a deterministic matching bit pair, including zero marginal cases. Therefore no private rate remains conditional on public Q. Confirmed reader:18:2 nonexistent contract step 1.2; replacement anchor covers current 1.1,2.1,3.1. No item defect or AC.

## ex-it-correlated-source-binary-adder-dm-mac

Reviewed all eight steps with six actual suppliers. Exact inverse table is zero-error on the three-atom IID source; entropy ln3 exceeds 1.5ln2 by 9>8. Product-input output probabilities are correct. For T<=0 endpoint balancing and decreasing hb(b)+(1-b)ln2 yield 1.5ln2; b=1 is obtained by continuity. For T>=0 minimum imbalance at equal signed biases reduces to the displayed scalar entropy with nonnegative derivative proved by g prime; endpoints follow by continuity. Product-Q averages preserve the upper bound. Fano is correctly applied to actual Y^n, and deterministic J with S->J->Y gives I(S;Y)=I(J;Y)<=ln(M1M2). This establishes the stated failure of the independent-private-message separated rate region, without claiming a converse for arbitrary correlated channel inputs. Reader entropy expansions and Fano clarification are sound.

All 14 HIGH/CRITICAL current mathematical risk reviews are complete. Historical preimage search remains distinct from these current-content reviews.

## Historical delta evidence recovered

The exact native reader diff is retained at `research/non-ml-math-remaining-81-2026-10-18-dispatch/reader-reader-18.attempt-1.log`, lines 13735–13862 (whole log raw SHA-256 `09b5b2dba846bf582cf31dc5243ce56b7157d530aea7bd637ba5440376c94958`). Inverting its actual hunks against the verified reader-post bytes reproduced each frozen pre-reader hash, in memory, without changing any history or carrier:

- `lem-it-ozarow-feedback-sum-corner-achievable`: inverse of the actual native reader diff reconstructs pre SHA-256 `23c313be72e5bfa05f53e5586792ad56db3ac9131b3199dd6e32aeba3e5ad8b9` exactly; no original-byte uncertainty remains.
- `thm-it-cover-leung-feedback-mac-inner-bound`: inverse of the actual native reader diff reconstructs pre SHA-256 `1e2baa79d033ae1129dbe6bd3c3616a21be3dfba6942f5696e4b58a594c0aab7` exactly; no original-byte uncertainty remains.
- `thm-it-ozarow-awgn-mac-feedback-capacity-region`: inverse of the actual native reader diff reconstructs pre SHA-256 `9f23e85a049d6fc91d9bb35f3b727068edd47ef895bfc9a1543bfc73b11c6596` exactly; no original-byte uncertainty remains.
- `thm-it-two-user-real-awgn-mac-capacity-region`: inverse of the actual native reader diff reconstructs pre SHA-256 `01b3b48e334b66c0489cfe9dbc2df413c8cbe2ee7dd7b499fae640b30b9b8981` exactly; no original-byte uncertainty remains.

Earlier preimage-search uncertainty is resolved by these exact hash comparisons. The diff confirms: positive-rate grid qualification; closed Cover–Leung polytopes with singleton tests; Ozarow rho-star axes; and correction of the malformed closure operator plus explicit Fano rate control.

## Statement and consumer review

The reader strengthened the covariance Statement to include Gaussian residual independence. Its only item consumers are `lem-it-ozarow-feedback-sum-corner-achievable` (F3, steps 3.1 and 5.1) and `lem-it-awgn-feedback-rate-splitting-achievable` (F4, steps 4.1 and 6.1). Both were fully reviewed above; the strengthened conclusion licenses their Gaussian conditioning without changing their Statements. Manifest and exact citation quotes are synchronized.

The reader changed Cover–Leung to the closure of the union of closed nonnegative polytopes; no direct item consumer exists. The page calls it only an inner bound and remains correct. Its manifest now records closed faces and singleton handling. The no-feedback AWGN Statement repair corrects closure notation without changing the numerical region. The only item consumers are the Ozarow theorem (F6, steps 6.1–8.1) and the rho example (new F3, step 2.1); both use the same individual/sum bounds. No outside-batch affected item consumer was found, and no further Statement/Definition change is needed.

## Page scope

`multiuser-channel-networks` current raw hash equals reader-post `6a286b79c92bb9d1de6d74dad718599e9bd5af4349bd38878de3003139bb0007`. Its exact preimage is `research/non-ml-math-remaining-81-2026-10-18-owner-step2-qre-resolution/batch24-owner-addendum/before/consumer-context/library/information-theory/multiuser-channel-networks.md`, matching pre `496cbe0578bf98c28a1b496954b0a227d1fc03d9f2504aafa3f0d143f9ec74df`. The positive-power qualification repairs the old unconditional feedback-enlargement sentence, false when both powers vanish. The closure/singleton summary is accurate. The three diagrams agree with causal own-message encoders, strong-to-weak degradation and separate source observations, and supply no proof premise. Accept reader page repair; no page edit made here.

## Published findings and scope

Actual cited supplier statements were opened and their interfaces checked. No defective published supplier was confirmed, so the published ledger remains untouched. No withdrawal is proposed or removed. No new items/pages, external messages, judgments, stamps or stage transitions were made.

## Mechanical reconciliation

The first strict contract check found one omitted input: Ozarow step 8.1 now cites 6.1, but the reader contract inputs omitted it. Added that exact input; this is contract synchronization, not a new mathematical defect or extra obligation.

## Final dispositions

Routine reader expansions are recorded as `reviewed_no_defect` / `audit_enrichment`, with no defect rows: covariance independence calculation; positive strict-rate grid convention; rho-star rectangle completion; finite-output Fano rate control in broadcast and DM-MAC; elementary entropy and conditional-Fano expansions in the adder example. They are sound and retained. In particular, the original adder conditional-entropy bound can be closed immediately by data processing, so it is not falsely characterized as invalid mathematics.

- `touched:18:lem-it-awgn-feedback-estimation-covariance-update`: `reviewed_no_defect` (audit enrichment; no defect).
- `touched:18:lem-it-ozarow-feedback-sum-corner-achievable`: `reviewed_no_defect` (audit enrichment; no defect).
- `touched:18:thm-it-cover-leung-feedback-mac-inner-bound`: `amended_repair` — `math81-b18-3a-cover-leung-wrong-state`.
- `refuter:18:1`: `confirmed_nonfatal` — `math81-b18-3a-cover-leung-wrong-state`.
- `touched:18:thm-it-two-user-real-awgn-mac-capacity-region`: `accepted_repair` — `math81-b18-3a-gaussian-closure-notation`.
- `touched:18:thm-it-ozarow-awgn-mac-feedback-capacity-region`: `reviewed_no_defect` (audit enrichment; no defect).
- `touched:18:thm-it-physically-degraded-dm-broadcast-capacity-region`: `reviewed_no_defect` (audit enrichment; no defect).
- `touched:18:thm-it-two-user-discrete-memoryless-mac-capacity-region`: `reviewed_no_defect` (audit enrichment; no defect).
- `touched:18:ex-it-correlated-source-binary-adder-dm-mac`: `reviewed_no_defect` (audit enrichment; no defect).
- `reader:18:1`: `confirmed_nonfatal` — `math81-b18-3a-rho-contract-anchor`.
- `refuter:18:2`: `confirmed_nonfatal` — `math81-b18-3a-rho-no-feedback-citation`.
- `reader:18:2`: `confirmed_nonfatal` — `math81-b18-3a-xor-contract-anchor`.
- `page:18:multiuser-channel-networks`: `accepted_repair` — `math81-b18-3a-page-positive-power-feedback`.

Exactly 13 decisions cover eight touched items, one page and four findings. Six distinct nonfatal closed defect rows support the repaired findings/notation/page sentence. The touched Cover–Leung amendment and refuter:18:1 share one exact defect row with explicit equivalence; no duplicate defect is counted. Repair confidence is 1 for each completed repair. No escalation remains.

## Sources and evidence limits

The mathematics was checked against the actual current local supplier statements, not the reader/refuter verdicts. Specialized sources consulted were:

- Cover–Leung, Theorem 1, printed pp.293–294: https://isl.stanford.edu/~cover/papers/transIT/0292cove.pdf (web PDF opened successfully; also `/tmp/prestige-cover-leung-1981.txt`). The finite conditional-product law and three information bounds agree after conversion from bits to nats. The local one-sided block-Markov/backward-decoding argument was checked independently; the paper is not a substitute for that proof.
- Cover–Thomas, `/tmp/prestige-cover-thomas-eit2.txt`, §15.3.6 (text lines 41090–41295, including (15.133)–(15.149)), §15.6.2–3 (42459–42710), and Theorem 7.12.1 (16799 onward). Source URL: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf . The Gaussian source imposes per-codeword powers; the actual local proof separately supplies expected-power converse and codeword trimming. The broadcast source explicitly leaves its converse to an exercise, so the local converse was reviewed directly.
- El Gamal–Kim lecture notes, `research/information-theory-planning/sources/r5/elgamal-kim-network-information-theory-arxiv1001.3404-v3.txt`, Lecture 15, pp.15-10–15-12 (text 26350–26565), for the source-indexed wrong-one-source and wrong-both-source packing entropy expansion. Source URL: https://arxiv.org/pdf/1001.3404v3 . The local deterministic-Q conditional-type argument was checked in full and retains strict sufficient conditions, not general necessity.
- Lapidoth–Wigger, `/tmp/prestige-lapidoth-wigger-awgn-mac.txt`, §III-A (text 390–470) and proof of Remark IV.15, equations (82)–(85) (2776–2860). Source URL: https://www.isi.ee.ethz.ch/papers/docu/alap-mwig-2010-2.pdf . Web retrieval returned an inaccessible-tool error, while the existing complete cached text was available. Its text extraction omits some mathematical glyphs; no missing formula was inferred from that extraction. The exact current local residual-root, split-power, information, and energy formulas were derived and checked algebraically above. This review does not claim a fresh reading of the unavailable original Ozarow 1984 paper or every cited book in full.

Hash-bound historical preimages for the remaining five touched carriers were read from the owner archives documented above. The covariance preimage is `research/non-ml-math-remaining-81-2026-10-18-owner-multiuser-proof-format/root-metadata/before/items/lem-it-awgn-feedback-estimation-covariance-update.md`. The correlated-adder and DM-MAC preimages are under `research/non-ml-math-remaining-81-2026-10-18-owner-step2-battery-source-integration/proposals/`. The broadcast preimage is under `research/non-ml-math-remaining-81-2026-10-18-owner-step2-qre-resolution/batch24-owner-addendum/before/consumer-context/items/`. Each actual raw SHA-256 equalled its immutable pre-reader snapshot entry. The four diff reconstructions and page comparison are documented separately above. No snapshot, native report, scope or dispatch evidence was rewritten.

## Final local checks and owner alerts

- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-18.proof-contracts.json --strict`: after the documented input synchronization, 26/26 items, zero errors, zero warnings.
- Initial `node tools/risk-report.mjs` on that contract ran before reviews. Final rerun with `--require-reviewed`: 26 routed items, zero errors, all 14 HIGH/CRITICAL reviews complete.
- Reflow on each of the nine touched/repaired items: all unchanged. Precheck on each: nine passes, zero failures.
- `node tools/rendercheck.mjs` on the explicit nine item paths and the touched A page with `--quiet`: ten files pass, including actual renderer YAML and KaTeX parsing.
- The single final `node tools/proof-layout.mjs` command batched the eight reader-touched items plus the repaired rho example: **9 items, 61 steps, 0 defects**. It ran after all final item edits and reflow; there were no subsequent item edits.
- Exact decision-set reconciliation: 13/13 obligations, no duplicates/extras; 14/14 required reviews complete; all decision defect references resolve to the matching fixed rows.
- `node tools/defect-ledger.mjs append --file /tmp/math81-b18-ledger-rows.json`: appended six rows and regenerated the standard shared ledger view. Focused validation of precisely those six rows: zero errors.

The run-wide `node tools/defect-ledger.mjs validate --run non-ml-math-remaining-81-2026-10-18` failed on seven outside-scope schema errors among 210 rows: batch-35 `b35-even-subalgebra-citation` lacks `at`; batch-36 `b36-sphere-fixed-projection-section` lacks `at` and has invalid `class` and `location`; batch-52 rows `52-unbased-fiber-convention`, `52-equivalence-subspace`, and `52-first-pullback-data` use invalid `caught_by_role: alpha-batch-52`. These are owner alerts, not batch-18 mathematical defects; no foreign ledger row was changed and no mechanical-failure defect row was created. The engine must route their correction before its run-wide checks can pass.

Batch-18 mathematical work and all owed decisions are complete. No mathematical escalation or published-supplier alert remains. Engine hash stamping, gate battery, certification and scheduling remain engine-owned; none was initiated here.
