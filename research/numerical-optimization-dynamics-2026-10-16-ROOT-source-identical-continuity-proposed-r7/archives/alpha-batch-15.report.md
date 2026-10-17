# Batch 15 Step 3a adjudication

Run: numerical-optimization-dynamics-2026-10-16. Group: batch-15. Engine owns hashes and gates.

Reviewed scope, reader report/findings, refuter report and generated item order. No rendered bundle supplied; source Markdown is the review carrier.

Completed level 0 risk reviews:

`lem-na-bluestein-chirp-convolution-factorization`: Reviewed Proof 1.1–3.1 and all declared supplier statements: distinct residues follow from |t-t'|<M, the chirp exponent is -2jk, and the unitary cyclic convolution multiplier is sqrt(M). N=M=1 and zero input satisfy the same identities; M>=2N-1 is sufficient. No choice or coprimality premise. The mention of dividing after inverse application is harmless redundant prose: the displayed conclusion has the correct sqrt(M) multiplier.

`lem-na-mixed-radix-cooley-tukey-factorization`: Reviewed Proof 1.1–3.1 and declared suppliers. Unique quotient/remainder indexing j=u+rv and k=k2+sk1 covers every coordinate; expansion leaves the integer vk1 phase, and r^-1/2 s^-1/2=(rs)^-1/2. No coprimality or choice required; r,s>=2 exclude empty branches; zero input works.

`lem-na-zero-padding-removes-linear-convolution-aliasing`: Reviewed both proof steps against cyclic convolution, finite sums and modular algebra. Positive n,m and M>=n+m-1 imply supported index sums lie in [0,M-1]; negative k-j wraps beyond b support. Checked n=m=M=1, zero inputs and exact minimal padding. Tail indices have no contributing supported pair. No choice or iff assertion.

These level-0 items are complete. All subsequent items and obligations are completed below.

Completed levels 1–2:

`lem-na-complex-product-six-operation-roundoff-bound`: Checked four rounded products and two sums in the fixed operationwise model; each component error is (2u+u²) times the corresponding absolute-product sum. Two Cauchy–Schwarz bounds give sqrt(2)(2+u)u<3u for 0<u<=1/16. Exact zeros are allowed, cancellation causes no relative-output assumption, and underflow/overflow are excluded explicitly. Read all five supplier statements.

`thm-na-dct-ii-orthogonality-inverse-and-dft-extension`: Checked all four steps and cited supplier statements. Geometric cosine sums vanish for 1<=r<2N including odd r via a purely imaginary quotient; row Gram diagonal is N,N/2. Right inverse plus finite rank-nullity proves the actual inverse. Paired even-extension phases have the positive phase exp(pi i k/(2N)) and factor sqrt(2/N). N=1 and zero data work; no infinite choice.

`thm-na-dst-i-orthogonality-inverse-and-dft-extension`: Checked all three steps and exact supplier statements. The doubled root-of-unity sum yields T_even=-1,T_odd=0 over 1..2N. The two off-diagonal frequencies have equal parity; symmetry makes the scaled S a two-sided inverse. Odd-extension pair is -2i sin and endpoints are zero. N=1 gives S=[1], and zero data is valid.

`ex-na-prime-length-five-bluestein-transform`: Checked all verification steps with the reviewed Bluestein factorization and exponential addition/kernel statements. Least power of two >=9 is 16, all four nontrivial fifth roots are different from 1, and their geometric sums vanish. Engineering output is (5,0,0,0,0); the unitary lemma converts by sqrt(5). No floating-point claim or extra choice.

`thm-na-dct-ii-chebyshev-coefficient-extraction`: Checked both steps against the Chebyshev recurrence/multiple-angle supplier and reviewed DCT Gram identity. Samples satisfy x=C^T a; X=CC^T a yields X0=N a0 and Xk=N ak/2. N=1 yields only the constant coefficient; zero polynomial valid; degree<N is essential and stated. No interpolation or convergence assumption.

Pi identification and its routed finding are completed below.

Pi identity, level 7 original / 9 with exact Machin supplier: confirmed refuter:15:3 nonfatal missing citation and final implication. Added F6 citing `lem-trigonometric-identities-machin-and-range-reduction`, read its complete proof and checked 3.1 arithmetic 2A(1/5)=A(5/12), 4A(1/5)=A(120/119)=A(1/239)+A(1). Definition of A is the same oriented integral. All original supplier statements read; Abel endpoint and continuity proof is sound. Statement preserved; contract and manifest synchronized, proof provenance ai-altered. Risk review complete. Sources are exact local supplier sections cited above; no external-source assertion used. Producer and phase review follows below.

Batch 14 producer (read-only), level 10: read the entire current `thm-real-elementary-range-enclosures`, current owning contract and manifest entry, `alg-certified-elementary-range-evaluation` Definition, real-function Definition, interval arithmetic Definition and soundness Statement, complete series-tail and Machin proofs, Cauchy-product proof and MVT Statement. The current producer still names the multinomial theorem. Its finite coefficient identity follows by counting words of length k over d letters: for counts n1,...,nd there are k!/(n1!...nd!) words, and altogether d^k; division by k! gives the displayed identity, including k=0,d=1. Thus this is immediately closable algebraic exposition, not an invalid scaling identity. Reader:15:1 and refuter:15:1 are confirmed_nonfatal, nonfatal-recorded, one shared ledger defect; owner/batch 14 may insert this counting sentence. No substantial missing prerequisite blocks phase enclosure. Current producer manifest Statement is stale (omits the fixed format/truncation and typed-node qualifiers); route this metadata correction to batch 14, without changing its source here. Original immutable producer pre-reader fingerprint, routing carrier and dependency path will be retained verbatim in both decisions. No historical repaired-source assertion is made.

Phase routine (level 11): current item hash equals immutable reader-post; the reader's explicit rational Machin interval and outward qP conversion repair is mathematically sound. Read every direct dependency above. Both arctangent arguments lie in [-1/2,1/2], the exact tail denominator is positive, signed q uses the endpoint min/max, and outward rounding contains canonical pi*q. Finite evaluator results therefore contain both target coordinates; lower-left corner distance is bounded by the sum of widths. All caps are finite; inconclusive and range statuses have no accuracy promise. q=0 and negative q work, tau>0, and no choice is used. Accept reader repair. Its changed Definition's direct consumers were checked at their routed order; outside consumers were inventoried below.

Completed levels 12–13 (before butterfly):

`alg-na-computed-unitary-radix-two-fft`: Reviewed entire procedure with exact recursive FFT supplier, fixed operationwise model, standard relative model, unitary DFT and certified phase Definition. Reader-post source matches snapshot; representability check prevents using phase endpoints from another format as illegal operands. Both length-N/2 calls retain the same arithmetic model, signed phase q=-2k/N, unitary scaling sqrt(1/2), inverse conjugation and first failure propagation. N=1 returns input; cap=0 at N>1 fails. No unconditional success or unstated accuracy claim.

`thm-na-certified-unit-circle-phase-enclosure`: Read both proof steps and all direct supplier statements. The reader changed only contract evidence (source pre/post hashes identical). Exact rational Machin construction now supplies a dyadic interval containing canonical pi*q. Real range theorem gives cos/sin containment and the lower-left corner errors are bounded by coordinate widths. Triangle inequality then gives epsilon<=tau on certified return. q=0, signed q and finite failure branches covered; no source repair needed.

`alg-na-computed-fft-cyclic-and-linear-convolution`: Read full procedure and all eight direct suppliers. Fixed-model representable inputs and zero padding feed two forward unitary FFTs, six-operation pointwise products, inverse FFT and rounded sqrt(M) scaling, exactly matching the unitary convolution factor. Positive lengths and least dyadic M>=n+m-1 prevent linear aliasing; M=1 and zero inputs work subject to explicit range checks. All phase and recursion failures propagate; reader operand-domain repair accepted.

Butterfly and mixed-radix review follows below.

`lem-na-computed-unitary-butterfly-error-bound`: Reviewed all four proof steps and all nine suppliers. Product error 15u/4+epsilon gives |t|<=95|b|/64; rounded addition and scale contribute alpha=3u+3u²+u³<=817u/256. Squaring constants gives sqrt((817/256)²+9²)<10. Pair norm bound includes independent sqrt, sum and component scaling errors. Zero a/b valid with exact-zero rules. Corrected the missing backslash on the second computed output symbol in the Statement; no hypothesis, bound or consumer meaning changed.

The level-14 procedure review follows below.

Arbitrary-length algorithm, level 14: amended reader repair; refuter:15:2 confirmed_fatal, repaired explicit per-k2 length-r call/output mapping. N=6 has the required three outer calls and two inner calls. All eight suppliers read; recursive factor sizes decrease; prime branch invokes padded radix-two convolution. Definition retains engineering normalization. Original model/representability repair accepted. Risk review complete. Direct consumers and citation quotations have been checked as recorded below.

Completed levels 14–16:

`thm-na-computed-unitary-radix-two-fft-error-bound`: Reviewed all four steps and all sixteen actual suppliers. Normalized even/odd block is unitary; stacked child error <=rho_(m-1)||x||, computed child norms <=(1+rho)||x||, and direct-sum local errors yield rho_m=(1+eta)rho_(m-1)+eta. Base m=0 is exact; inverse conjugation is norm preserving. For m eta<=1, exponential series yields (1+eta)^m-1<=2m eta, with t=0 equality covered by weak final inequality. All no-range-failure/twiddle/smallness hypotheses are explicit. No choice or uniform mixed-radix stability inference.

`thm-na-arbitrary-length-fft-correctness-and-cost`: Reviewed six steps and all eighteen direct supplier statements. Formal exact-constant model suppresses phase/arithmetic failures and counts only complex/scalar operations; it is explicitly separate from computed execution. Strong induction uses r,s<N, mixed normalization cancels sqrt(r)sqrt(s), and prime chirps use exact padded convolution. M<4N, three dyadic transforms and O(M) products give a uniform prime bound. Normalized recurrence S(N)<=S(r)+S(s)+C has comparison-tree leaves multiplying to N and <=log2 N leaves; finite tree internal count L-1 proves O(N log N). N=1 constant work; positive logs and excluded integer/phase/bit costs checked. Reader changed only citation/contract evidence, not source pre/post hashes. Repaired supplier loop now explicitly realizes the call count; theorem needs no change.

`thm-na-computed-fft-convolution-error-bound`: Read all three steps and all thirteen direct suppliers. Forward perturbation is 2rho+rho²; six-operation products add 3u(1+rho)², giving lambda. Inverse norm preservation plus its error adds rho(1+lambda); sqrt(M) rounding and component scalings add (2u+u²)(1+rho)(1+lambda). Exact unitary convolution factor sqrt(M) retained. Linear restriction cannot increase norm and padding prevents aliasing; M=1, zero a/b and all explicit success hypotheses checked. No unconditional range-success claim.

`thm-na-bluestein-chirp-phase-error-separate-from-fft-error`: Reviewed all three steps and eleven direct suppliers. Injective b padding has K=2N-1 unit phases; modulation/chirp errors give ||da||<=delta||x|| and ||db||<=delta sqrt(K). Bilinear convolution perturbation is sqrt(MK)delta(2+delta), assumed computed-convolution error adds E(1+delta)²; demodulation gives delta+(1+delta)H. Bound holds for N=2,M>=3 dyadic and zero input, and distinguishes assumed E from the actual convolution theorem conditional estimate. No mixed-radix stability or unconditional success inferred.

Consumer inventory, exact decisions/defect records and focused final checks are completed below.

Exact historical source comparison:

`alg-na-certified-unit-circle-phase`: exact pre-reader bytes recovered at `research/numerical-optimization-dynamics-2026-10-16-owner-step2-b11-utility-association-validation-20261016T103033541152Z/before/items/alg-na-certified-unit-circle-phase.md`, matching `4db7294c18d494c3a225d45e85e3661147dd9ff07f33a72ff8973e0d3bab99a8`; unified diff read against current source. Immutable reader-post source hash `71d5775b6f7354e8c38ba4664346ccaccf40bc2a2cd5113da0412daaef2f10dd`. Reader phase-input/operand-domain repair is accepted; the arbitrary-length carrier additionally has the explicit per-k2 call repair described above.

`alg-na-computed-fast-transforms-and-convolution`: exact pre-reader bytes recovered at `research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/generations/20261016T114106891879Z/current-sources/alg-na-computed-fast-transforms-and-convolution.md`, matching `6f632cb8a63908caba7b816197185f7e24e285d1fbcd2e3667936e2a4b67c78f`; unified diff read against current source. Immutable reader-post source hash `77c6ebda289a6ca20beec7abf9d0e88418a626d4d09ee102291082d41fc664f1`. Reader phase-input/operand-domain repair is accepted; the arbitrary-length carrier additionally has the explicit per-k2 call repair described above.

`alg-na-computed-fft-cyclic-and-linear-convolution`: exact pre-reader bytes recovered at `research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/generations/20261016T114106891879Z/current-sources/alg-na-computed-fft-cyclic-and-linear-convolution.md`, matching `7300c9ee8b53e646f9d75be5fdd480b1cc257d8add323e2ebea3f3d762f504fe`; unified diff read against current source. Immutable reader-post source hash `c9360c802c4e273ebcc44665d8fffb7009414c89e16e2d46592694d3d13b3264`. Reader phase-input/operand-domain repair is accepted; the arbitrary-length carrier additionally has the explicit per-k2 call repair described above.

`alg-na-computed-unitary-radix-two-fft`: exact pre-reader bytes recovered at `research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/generations/20261016T114106891879Z/current-sources/alg-na-computed-unitary-radix-two-fft.md`, matching `dccb245b20192ea607a1e40acde00d60c2b73941890333c47bdde72d689f2817`; unified diff read against current source. Immutable reader-post source hash `431dce30810478b545e1fb431224409e8994a1daa3d2f6ff2bd167545244c48a`. Reader phase-input/operand-domain repair is accepted; the arbitrary-length carrier additionally has the explicit per-k2 call repair described above.

`thm-na-arbitrary-length-fft-correctness-and-cost`: pre/post source identical (`0d701a38ec3bf4e1a5cdc0f6f5722121db3eee4e38b31c509dc2179589adfb62`); only contract changed, so reviewed_no_defect / audit_enrichment.

`thm-na-certified-unit-circle-phase-enclosure`: pre/post source identical (`426253bef9c3aefa1dcdc12bc8b8e159f9a50ff3eadae5513f6bc6747cf18f9f`); only contract changed, so reviewed_no_defect / audit_enrichment.

Consumer review: complete item/library reference scan found only owned result/procedure consumers and two foreign direct consumers. `alg-box-muller-finite-bit-transform` step 4 passes exact rational 2u2 and finite phase controls, then uses only the unchanged certified epsilon; its dyadic final products remain exact. `alg-na-computed-clenshaw-curtis-via-fast-dft` step 2 forms a length-2n even extension, expressly requires sample representability in the called model for n>=1, passes all controls and propagates failure. The per-k2 loop completion realizes its intended DFT call, without changing its return convention. Both consumers are sound as written; no foreign edits or further-hop repairs required. All owned direct consumers were read at their generated order: phase enclosure, radix-two procedure, butterfly lemma, multiplicative FFT error, convolution procedure/error, arbitrary-length correctness/cost and chirp error. Butterfly output-symbol backslash correction preserves its exact mathematical output pair and bound. Both owning page summaries remain accurate. No published defect found; published files stayed read-only and no published ledger mutation is needed. No proposed withdrawal removed or introduced.

Batch-14 owner follow-up: reader:15:1/refuter:15:1 are one nonfatal exposition defect; add the word-count proof in producer Proof 1.1 if desired. Its actual fixed-format typed-node Statement also needs its owning manifest quote refreshed; this is outside batch-15 edit scope. Neither issue supplies an invalid phase enclosure or requires a substantial prerequisite escalation.

Final dispositions:

| Obligation | Verdict | Defect records |
|---|---|---|
| `touched:15:alg-na-certified-unit-circle-phase` | accepted_repair | `nod-b15-3a-phase-input` |
| `touched:15:alg-na-computed-unitary-radix-two-fft` | accepted_repair | `nod-b15-3a-radix-operands` |
| `touched:15:alg-na-computed-fft-cyclic-and-linear-convolution` | accepted_repair | `nod-b15-3a-convolution-operands` |
| `touched:15:alg-na-computed-fast-transforms-and-convolution` | amended_repair | `nod-b15-3a-arbitrary-operands`, `nod-b15-3a-mixed-loop` |
| `touched:15:thm-na-certified-unit-circle-phase-enclosure` | reviewed_no_defect | none (audit enrichment) |
| `touched:15:thm-na-arbitrary-length-fft-correctness-and-cost` | reviewed_no_defect | none (audit enrichment) |
| `reader:15:1` | confirmed_nonfatal | `nod-b15-3a-multinomial-exposition` |
| `refuter:15:1` | confirmed_nonfatal | `nod-b15-3a-multinomial-exposition` |
| `refuter:15:2` | confirmed_fatal | `nod-b15-3a-mixed-loop` |
| `refuter:15:3` | confirmed_nonfatal | `nod-b15-3a-machin-link` |

Seven closed ledger rows were appended using `tools/defect-ledger.mjs append`; the producer omission is `nonfatal-recorded`, all six repaired defects are `fixed`. The touched arbitrary-length carrier and refuter:15:2 share its loop defect with explicit same-defect evidence; reader:15:1 and refuter:15:1 share the producer exposition row and preserve exact producer/path/pre-reader fingerprints from the immutable scope. The two source-identical theorem obligations are contract audit enrichment and have empty defect_ids. Every completed repair has repair_confidence 1. The butterfly Statement's missing output-symbol backslash was a mechanical notation correction, with no altered hypothesis or mathematical bound, no phase proof rewrite, and no manufactured mathematical defect row. None of the three edited items had a judge stamp; no judging or certification was performed.

Validation on final inputs:

- Initial `risk-report` run without `--require-reviewed` routed nineteen HIGH/CRITICAL items. Final `--require-reviewed` run: 22 items routed, zero errors; all nineteen required reviews complete.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-15.proof-contracts.json --strict`: 22/22 checked, zero errors and warnings. An earlier run found five stale source quotations (three operationwise-model citations, butterfly Statement, arbitrary-length Definition); synchronized these exact owned quotes and reran successfully. No mechanical mismatch was entered as a mathematical defect.
- Reflow on the three edited item paths: all unchanged. Precheck on those paths: two proof-bearing items checked, zero failing; algorithm has no phase proof.
- Rendercheck on those same three paths: all three parse in real KaTeX and renderer YAML, zero defects.
- `node tools/defect-ledger.mjs validate --run numerical-optimization-dynamics-2026-10-16`: 88 run rows checked, zero errors at execution time (other batches may append later).
- Final single batched `node tools/proof-layout.mjs items/thm-na-interval-pi-matches-canonical-fourier-pi.md items/lem-na-computed-unitary-butterfly-error-bound.md items/alg-na-computed-fast-transforms-and-convolution.md`: three items, seven steps, zero defects, after all source edits and reflow.
- Exact decision inventory checked against immutable scope: ten obligations, no duplicates, omissions or extras; group `batch-15`.

All nineteen current risk reviews are specific to the authored proofs/procedures and their exact local suppliers; no external source was required to resolve unfamiliar mathematics, and no claim is made to have independently reread the external books cited in provenance. Live `.autopilot` status and recent git log were consulted; the selected run is at Step 3, and concluded RESUME files were not used as authority. Published content remained read-only. Stable item IDs, page inventory and prior withdrawal proposals are preserved. Cross-batch dependency records include the new exact Machin edge and frontier ledger has the owned-consumer dispositions.

Handoff: all batch-15 routed adjudication and required local checks are complete. No substantial unmet prerequisite, unresolved mathematical uncertainty or escalation remains. The two nonfatal batch-14 owner follow-ups are retained above; they do not claim a supplier repair or mathematical failure of its current range theorem. The engine must stamp current decision hashes and run its gate battery; no worker gate, stamp, self-certification, stage transition, publication or commit was initiated.
