# Batch 9 Step 5a adjudication

Run `frontier-38-owner-30`; group `batch-9`; assigned scope group `j` preserved. This is local mathematical review, not judging or certification.

Read the dispatch, order task, scope, reader report/findings, refuter report, schema, and pre/post hash snapshots. All 25 current carriers initially matched the post snapshot. The reader reports eight carrier repairs and four additional contract-only corrections; scope owes twelve touched and six flagged decisions. No page obligations. No evidence bundle was located in the named batch artifacts.

## `def-hook-arm-leg-and-hook-length`

Reviewed the full definition against the published partition, corner and tableau definitions and Craven §1.2 printed pp. 2–3, Chan §7 p. 27, Etingof §4.17 PDF pp. 17–18. The anchor is counted once; arm and leg are nonnegative; h=1 iff both vanish iff the box is removable. Empty diagram has no box and hook product 1. Finite products need no AC. No reader/refuter finding for this carrier.

## `def-row-insertion-and-bumping-route`

Reviewed the definition and complete termination argument against Schensted printed p. 180, Knuth §2 pp. 711–712 and Craven §1.5 pp. 11–12. Distinct real entries and x absent give strict carried inequalities; rank relabelling preserves comparisons; each row is visited once and the empty next row terminates in at most k+1 visits. Empty input produces (1,1). Corrected Craven locator to pp. 11–12 because the numbered insertion procedure is on p. 12. This is citation metadata polish; the construction and content contract are unchanged. No AC.

## `lem-standard-tableau-removal-recursion`

Read all six proof steps, published largest-entry/corner/tableau suppliers, Craven §1.4 p. 7 and Chan chapter 7 p. 27. n≥1 is essential: delete the unique largest entry at a corner; inverse inserts n at that specified corner; row and column inequalities are preserved. Disjoint components carry the corner index. For n=1 the singleton maps to the unique empty tableau; n=0 is explicitly excluded from the recursion and f(empty)=1 separately. Deterministic finite bijections, no AC; no reader/refuter finding.

## `def-reverse-row-deletion`

Read the complete definition and well-definedness proof against Knuth DELETE D1–D5 printed p. 713, Schensted Lemma 3 proof p. 182, and Craven Theorem 1.14 proof pp. 12–13. At each upward row the original box above the last selected position supplies an entry below the carry; hence the rightmost admissible index exists and is at least the index below. Rows remain strict, and both equal-position and farther-right cases preserve the lower column inequality; subsequent upward overwrites preserve the upper inequality by the same invariant. The expelled letter is removed once, all others survive, and s finite visits terminate. Singleton deletion returns empty and its sole entry. No deletion from empty is asserted, no AC. Corrected both Schensted and Craven locators; Definition unchanged.

Verdict for `refuter:9:4`: **confirmed_fatal**. Schensted printed pp. 179–180 contain definitions and forward insertion, whereas Lemma 3 on p. 182 gives upward recovery using the Q corner. The locator now identifies p. 182 and that qualification. Also corrected the Craven deletion locator to the full Theorem 1.14 proof pp. 12–13. Algorithms and contracts remain sound. Defect `f38-owner30-b9-5a-01`; repair confidence 1.

## `lem-hook-product-change-under-corner-removal`

Checked all six steps and exact hook/partition/corner suppliers, Craven Lemma 1.11 and Theorem 1.13 pp. 8–10 and Chan Lemma 7.2/Theorem 7.3(b) p. 28. Deletion reduces exactly row a and column b, so their two disjoint surviving hook sets lose 1 and all others are unchanged; affected original hooks are ≥2, making division legal. The deleted hook is 1. For singleton or removal of a bottom singleton row, row-coordinate comparisons use zero extension (now explicitly stated) while the resulting partition has no zero part. Empty R_x gives product 1. Accepted the reader’s precise first-column source qualification and corrected contract boundary; added only the local zero-extension convention. No Statement change or consumer impact, no AC.

Verdict for `touched:9:lem-hook-product-change-under-corner-removal`: **amended_repair**. Pre/post hashes show a carrier and contract change; initial current hash equals post. Reader correctly restricted the Craven attribution to first-column hooks and replaced the false claim that all surviving hooks remain unchanged by the exact complement of R_x. The current coordinate proof verifies the general formula. Added the explicit zero-extension convention needed when the removed row disappears. Statement unchanged. Defect `f38-owner30-b9-5a-02`; repair confidence 1.

## `lem-row-bumping-route-monotonicity`

Read every step, insertion/corner/tableau suppliers, Schensted Lemma 1 p. 181, Knuth I2–I5 and (2.5) pp. 711–713, and Craven pp. 11–12. Each bump increases the letter; comparing the original entry below a bump or the shorter-row length gives r(i+1)≤r(i). At append, that bound gives addability. For strict columns, equal-route positions contain successive carries, and a route shifting left leaves the original upper/lower comparison valid. The multiset gains precisely x. Empty input and a newly opened row satisfy the same argument, no AC. Expanded the Craven locator to include the procedure on p. 12; mathematical carrier unchanged.

## `lem-hook-product-branching-identity`

Read all eleven steps, exact polynomial ring/degree/evaluation/degree-laws/root-bound suppliers, Craven Lemma 1.11 and Proposition 1.12 pp. 8–10, Etingof PDF p. 18. Row-hook complement has distinct positive integers, including the disjointness proof via column height. The b=1 case forces the bottom row; b≥2 preserves the number of rows and the factorial ratios. Noncorners give a zero factor, distinct first-column hooks make denominators nonzero. Over any field, interpolation is licensed by the root bound and coefficient support, including the zero polynomial. Repaired 1.3/2.3 to use vanishing coefficients rather than undefined degrees: in F2 with r=2, rQ=0, but top coefficient cancellation and the integer binomial identity remain valid. Final application is over Q; r=0 empty and r=1 handled separately. No AC, Statement unchanged and no downstream impact.

Verdict for `refuter:9:1`: **confirmed_fatal**. For K=F2, r=2 and (z1,z2)=(0,1), rQ is zero and has neither degree nor leading coefficient under the cited definition. Replaced every local degree bound involving a possibly zero interpolation polynomial by an explicit coefficient-support bound. Step 2.3 now calculates the cancelling coefficients directly in K and treats binomial(r,2) as an integer mapped into K. The finite identity and final hook branching claim are unchanged. Defect `f38-owner30-b9-5a-03`; repair confidence 1.

## `lem-robinson-schensted-recording-tableau-is-standard`

Read all five proof steps against the reviewed insertion/corner/tableau suppliers and Schensted Lemma 2 p. 182, Knuth construction A2 p. 715, Chan §8 p. 29. A newly added corner has no right or lower neighbour; old labels all precede k, so comparisons into the corner hold. One new box and one new distinct label give the bijection of diagrams to 1,…,k, preserving P/Q shape. Induction includes Q0 empty and Q1 singleton; no AC and no reader/refuter finding.

## `lem-row-insertion-and-reverse-deletion-are-inverse`

Read all six steps, reviewed insertion/deletion/route suppliers, Knuth pp. 713–714 (both inverse directions), Schensted Lemma 3 p. 182 and Craven Theorem 1.14 pp. 12–13. Forward undo: entries right of r_i exceed the displaced carry, so reverse deletion selects exactly r_i. Converse: positions left of j_i are below the expelled value while j_i contains the larger carry, so reinsertion selects j_i and reconstructs every row, then appends at the specified corner. Empty insertion/singleton deletion and a first-row corner are covered; an insertion into a singleton can visit one or two rows depending on the inequality. Accepted the reader contract correction for that latter boundary; repaired two source locators. No Statement change, no AC.

Verdict for `touched:9:lem-row-insertion-and-reverse-deletion-are-inverse`: **amended_repair**. Carrier pre/post hashes agree; the contract hash changed and the initial current carrier equals post. The original one-row-only singleton boundary is false for insertion of a smaller value into a one-box tableau; the reader correctly distinguishes append (one visit) and bump (two visits). Both directions of the current inverse proof were checked independently. Defect `f38-owner30-b9-5a-04`; repair confidence 1.

Verdict for `refuter:9:5`: **confirmed_fatal**. Schensted p. 180 defines forward insertion, while Lemma 3 on p. 182 contains the upward recovery argument. Updated that locator and the related Craven locator to the full Theorem 1.14 proof pp. 12–13. No proof or Statement change. Defect `f38-owner30-b9-5a-05`; repair confidence 1.

## `lem-row-and-column-insertion-commute`

Read all twelve authored steps, column-insertion supplier in full, reviewed row-route and tableau suppliers, Schensted Lemma 6 pp. 183–187, Abram–Reutenauer entire nine-page note (Theorem 3.1, Lemma 2.1, §§4–7), and Knuth p. 724. Translated French geometry to English coordinates. Two occupied common boxes force contradictory trail label orders; a shared empty box cannot coexist with an occupied intersection. Bump stability is proved locally, and occupied meeting cases i<a and i>a explicitly determine S,B,J labels and handle missing predecessors/empty successors. The shared empty meeting appends below or right according to the strict inequality; empty T is included. Compared with Abram–Reutenauer Proposition 6.2 and §7; the carrier supplies boundary details the source omits. Distinct x,y absent from T are essential; no repeated-letter extension asserted, no AC. No defect found.

## `thm-hook-length-formula`

Read all six steps, the reviewed removal recursion, corner ratio and branching suppliers, and the exact published standard-polytabloid-basis Statement and initial facts (n≥0, complex basis, including empty dimension 1). Did not audit its deeper straightening proof. Craven pp. 7–11 supplies the complete induction; Chan pp. 27–28 recalls the formula and states its hook-product identity; Etingof Theorem 4.53 PDF pp. 17–18 gives a separate character-formula argument. The n=0,1 bases are explicit; for n≥2 summing (n−1)!R(x)/P(lambda) and branching gives n!/P(lambda), all hook denominators positive. Accepted reader restriction of row/column partitions to n≥1, as (0) is not a partition. Amended Chan locator to avoid claiming a printed proof absent from those pages. Direct consumers are exactly the three owned hook/boundary examples; their facts use the general formula or positive-size endpoints and remain sound, so no outside impact. No AC.

Verdict for `touched:9:thm-hook-length-formula`: **amended_repair**. Pre/post carrier and contract hashes differ and initial current equals post. Reader correctly excludes n=0 from the named row partition (n), since the published partition definition requires positive parts; the empty formula remains valid. Current induction and complex dimension supplier checked. Amended the Chan locator: pp. 27–28 recall the formulas and state Theorem 7.3(b), rather than print the attributed proof. All three direct consumers were checked; none requires a further repair. Defect `f38-owner30-b9-5a-06`; repair confidence 1.

## `thm-robinson-schensted-correspondence`

Read all eight steps and all nine exact suppliers, Craven pp. 11–13, Schensted pp. 180 and 182–183, Chan pp. 29–30. Q locates the newly added removable box, deletion expels one distinct P entry at each stage, and both inverse directions reconstruct the original pair and word. This supplies injectivity as well as surjectivity onto every common-shape standard pair. Empty n=0 is the empty word/pair and singleton n=1 performs one insertion/deletion. Accepted reader correction of Craven Theorem 1.14 versus Corollary 1.15; independently confirmed and repaired Chan Theorem 8.6 (deletion standardness) to Theorem 8.9 (bijection), with Theorem 8.7 as the inverse result. No Statement change or AC.

Verdict for `touched:9:thm-robinson-schensted-correspondence`: **amended_repair**. Pre/post carrier hashes differ; initial current equals post. Craven printed pp. 12–13 give bijection Theorem 1.14 and its deletion proof; Corollary 1.15 is only the sum-of-squares consequence. Reader correctly repaired that attribution. Current forward/reverse bijection checked including n=0 and n=1. Defect `f38-owner30-b9-5a-07`; repair confidence 1.

Verdict for `refuter:9:2`: **confirmed_fatal**. Chan Theorem 8.6, printed p. 29, asserts deletion standardness, not a bijection. Theorem 8.7 on p. 30 gives inverse insertion/deletion and Theorem 8.9 on p. 30 gives the correspondence bijection. Corrected the carrier locator to these exact results. Defect `f38-owner30-b9-5a-08`; repair confidence 1.

## `thm-rsk-correspondence-for-two-line-arrays`

Read all fourteen proof steps and eight actual suppliers; in particular the published semistandard definition allows general composition content in its Remarks, and local steps 1.1–2.2 prove the repeated-letter procedures without invoking distinct-letter lemmas beyond their domain. Read Knuth complete §§2–4 pp. 711–720, Martin §9.10 pp. 198–200 of the freshly downloaded PDF, Schensted Part II pp. 189–190. Weak rows/strict columns license the leftmost-strictly-greater insertion and rightmost-strictly-less reverse step, retaining repeated expelled letters elsewhere. Successive x≤x′ terminate with strictly increasing new columns; x>x′ end lower and no farther right. These facts prove semistandard Q, rightmost-maximum tie deletion, lex recovery and both inverse identities. For transpose, source layers have increasing u/decreasing v; first-row minima/maxima and the shifted bump pairs match Knuth Lemma 1, and swapped smaller bump arrays prove all lower rows by induction. Identical occurrences are ordered consistently and need no AC. Empty arrays, repeated identical pairs, one-row/one-column extremes, and chronological word recording are covered. Accepted reader correction of Knuth Theorem 1 and empty-array contract evidence; no mathematical repair needed.

Verdict for `touched:9:thm-rsk-correspondence-for-two-line-arrays`: **accepted_repair**. Pre/post carrier and contract hashes differ; initial current equals post. Knuth Theorem 1, printed p. 714, equation (2.8), supplies x≤x′ iff s≥s′ iff t′>t, not the previously mislocated result. Reader locator is exact and the local two comparison proofs establish the needed directions. The corrected zero-size contract now cites step 5.1 empty-array identity instead of hook-product boilerplate. Defect `f38-owner30-b9-5a-09`; repair confidence 1.

## `cor-rsk-symmetry-under-inversion`

Read all eight steps, exact finite-symmetric-group convention (acts on 0,…,n−1), standard tableau and both reviewed correspondence suppliers. Knuth Theorem 3 p. 719, Chan Remark 8.3 p. 29 and Martin §9.10 Proposition 9.10.9 agree. Transposing (k,w_k) and sorting gives exactly (i,p_i), where w(p_i)=i, hence transpose interchange supplies the inverse pair. Group conversion p_i=sigma^{-1}(i−1)+1 is correct for the published zero-based convention. Empty/singleton sorting is canonical and vacuous/identity, no AC. Normalized Martin locator to exact proposition number because the freshly downloaded PDF prints it on p. 198 whereas the web-indexed pagination has p. 197; no mathematical defect.

## `cor-sum-of-squares-of-standard-tableau-numbers`

Checked all four steps, exact tableau/count and RS bijection suppliers, Craven Corollary 1.15 p. 13 (n positive), Chan Corollary 8.10 p. 30, Martin Corollary 9.10.6. Finite disjoint union over shapes counts each ordered pair once as f(lambda)^2 and counts words as n!, with empty case separately proved in step 3.1. The reader correctly repaired only the contract endpoint: row and column are distinct shapes for n≥2, coincide for n=1, and n=0 has just the empty shape. Carrier proof unchanged; normalized Martin to its exact corollary number for pagination drift. No AC.

Verdict for `touched:9:cor-sum-of-squares-of-standard-tableau-numbers`: **amended_repair**. Pre/post carrier hashes agree and contract hashes differ; current initially equals post. Reader correctly restricts two distinct endpoint summands to n≥2: at n=1 row and column are the same partition, and at n=0 only the empty partition contributes. The proof counts the disjoint union correctly for every n. Defect `f38-owner30-b9-5a-10`; repair confidence 1.

## `lem-word-reversal-transposes-the-insertion-tableau`

Read all seven steps against column insertion, row insertion, route standardness and the fully reviewed commutation lemma; Schensted complete Lemma 7 pp. 186–188 and its Q warning, Knuth p. 724, Craven p. 11. First-letter column recursion follows by induction commuting x1 past the final row insertion; hypotheses hold because all word letters are distinct and the middle tableau contains exactly its middle letters. Transposing that recursion and using the smaller reversal statement gives P(reverse)^t=P(word). Empty/singleton bases explicit; converse equivalence follows from transposing the reverse-word row recursion. Only P is asserted, not Q. No AC and no defect.

## `ex-empty-and-singleton-rsk-boundaries`

Read all six verification steps and exact hook, insertion, hook-formula and RS suppliers, plus Craven pp. 7–13, Schensted p. 180 and Chan pp. 27–30. Empty input is a unique word, both tableaux empty, P(empty hook product)=1 and f(empty)=1; no empty recursion is asserted. Singleton yields [1],[1], sole hook 1 and deletion/removal to empty. Accepted reader contract clarification that the zero-size evidence comes from these direct computations. Confirmed Craven Corollary 1.15 has positive-n domain, so restricted its attribution to n=1 and made local n=0 derivation explicit; likewise corrected the other two locators to their actual insertion/formula statements without attributing explicit empty-shape conventions. No Example change or AC.

Verdict for `touched:9:ex-empty-and-singleton-rsk-boundaries`: **reviewed_no_defect**. Pre/post carrier hashes agree; only contract quotations were refreshed after the hook-formula endpoint restriction. Actual uses here are the general formula at n=0,1 and the positive-size recursion at n=1; current boundary proof is sound. This obligation records reader audit enrichment, distinct from the independently confirmed source-attribution defect. No reader finding exists. 

Verdict for `refuter:9:6`: **confirmed_fatal**. Craven Corollary 1.15 explicitly assumes positive n, so its attribution at n=0 was overextended. Now cites the corollary only for n=1 and identifies empty verification as local. Related Schensted and Chan locators were narrowed to the insertion/formula statements they actually contain. All six local boundary steps are correct without relying on a source extension. Defect `f38-owner30-b9-5a-11`; repair confidence 1.

## `ex-hook-lengths-for-row-column-and-hook-shapes`

Checked all six verification steps against exact hook and hook-formula suppliers, Craven pp. 7–11, Chan p. 27 and Martin Examples 9.10.7–9.10.8. Row/column hooks are n,…,1. For n≥3, hook shape has anchor n, arm factors n−2,…,1 and bottom factor 1, giving n(n−2)! and n−1 tableaux. n=2 is (1,1), product 2 and count 1; n=1 hook-family input is excluded since (0,1) is not a partition; empty input is outside the Example domain. Accepted reader correction of the smallest family member and absent-column heights to zero. Source locator normalized to exact examples and their finite sizes. No new mathematical repair or AC.

Verdict for `touched:9:ex-hook-lengths-for-row-column-and-hook-shapes`: **amended_repair**. Pre/post carrier and contract hashes differ; initial current equals post. The n=2 member of (n−1,1) is (1,1), not (2); columns beyond a one-column shape have height 0, not 1. Reader corrections match the exact partition/conjugation definition and all hook computations, including n=1 domain exclusion and n=2 empty arm product. Defect `f38-owner30-b9-5a-12`; repair confidence 1.

## `ex-hook-table-for-shape-three-two-one`

Read all six verification steps, reviewed hook/count/removal suppliers, Craven pp. 7–11, Chan pp. 27–28 and Schensted p. 180 hook-table example. Direct coordinate hooks for (3,2,1) are [[5,3,1],[3,1],[1]], product 45, count 16. The three actual corners produce (2,2,1),(3,1,1),(3,2) with products 24,20,24 and counts 5,6,5. These sum to 16. Accepted reader replacement of the false general 3−j expression by lambda_i−j and inclusion of the omitted unit in the smaller product. All individual arithmetic and boundary/corner contract locators verified; no empty input or AC here.

Verdict for `touched:9:ex-hook-table-for-shape-three-two-one`: **accepted_repair**. Pre/post carrier and contract hashes differ; initial current equals post. The universal expression 3−j is wrong outside row 1; the current lambda_i−j hook formula yields all six displayed hooks correctly. Reader also included all five factors of P(3,2). Recomputed products 45,24,20,24 and counts 16,5,6,5 directly. Defect `f38-owner30-b9-5a-13`; repair confidence 1.

## `ex-rsk-insertion-and-reverse-deletion`

Read seven verification steps and every exact insertion/deletion/recording/inverse/RS supplier, Craven printed p. 12 (PDF 14), Chan Algorithm 8.4/Example 8.5 p. 29 and Martin §9.10 Example 9.10.2 (independent worked run). Directly followed (6,4,1,2,5,3): new boxes (1,1),(2,1),(3,1),(1,2),(1,3),(2,2), P rows [1,2,3],[4,5],[6] and Q [1,4,5],[2,6],[3]. Delete Q labels 6,…,1 at the corresponding corners; expelled sequence 3,5,2,1,4,6 restores empty. Accepted reader correction of Craven example locator and row-2 endpoint boundary evidence. Martin source uses exact example number to avoid pagination drift. No content change or AC.

Verdict for `touched:9:ex-rsk-insertion-and-reverse-deletion`: **amended_repair**. Pre/post carrier and contract hashes differ; initial current equals post. Craven displayed sigma=(1,6,3)(2,4) insertion is on printed p. 12/PDF p. 14, as repaired by reader, not p. 11. Checked every P/Q insertion and deletion, including the actual row-2 corner (2,2); the boundary contract now identifies its correct row/column endpoint. Defect `f38-owner30-b9-5a-14`; repair confidence 1.

## `cor-involutions-are-counted-by-standard-tableaux`

Read all six steps, exact RS bijection, inversion symmetry, tableau count and zero-based finite group suppliers; Chan Remark 8.3 p. 29, Knuth symmetric-matrix Theorem 4 pp. 719–720, Martin Proposition 9.10.9. Forward self-inversion gives P=Q; conversely swapped pairs coincide and RS injectivity gives w=w^{-1}. Every diagonal (P,P) has a unique preimage, so restriction to involutions is a bijection, not merely a count. Empty identity and singleton both contribute one; row and column give different endpoint summands only at n≥2. Accepted reader contract endpoint correction. Normalized Martin locator to the exact proposition. No Statement change, no AC.

Verdict for `touched:9:cor-involutions-are-counted-by-standard-tableaux`: **amended_repair**. Pre/post carrier hashes agree; contract hash differs and current initially equals post. The reader corrected the contract endpoint that treated row/column as two summands even at n=1, where they coincide; n=0 has one empty tableau. Both iff directions and the restricted bijection in the unchanged carrier are sound. Defect `f38-owner30-b9-5a-15`; repair confidence 1.

## `thm-schensted-longest-increasing-and-decreasing-subsequence-theorem`

Read all seven proof steps, the six-step first-row basic-subsequence supplier in full, and the reviewed insertion/recording/route/reversal suppliers. Schensted Lemmas 4–5 and Theorem 1 p. 183 and Lemma 7/Theorem 2 pp. 186–188 supply exact distinct-letter statements; Knuth p. 724 confirms the row/LDS consequence. The S_j partition insertion events into decreasing subsequences, hence any increasing subsequence meets each at most once. A finite backward predecessor chain produces an increasing subsequence of length lambda1. Reversing indices bijects increasing subsequences of the reversed word with decreasing subsequences of the original, and P transposition converts width to height. Empty widths/heights explicitly mean 0, singleton lengths are 1. No AC: select a specified final row entry and deterministic predecessor chain, finitely many steps. Confirmed Martin Theorem 9.10.12 is the Hall-inner-product Schur-basis result (fresh PDF p. 200, indexed earlier version p. 199), not a subsequence theorem; p. 205 is unrelated. Narrowed that source to the actual insertion/recording conventions read in §9.10, keeping Schensted as the exact subsequence source. No Statement change.

Verdict for `refuter:9:3`: **confirmed_fatal**. Martin Theorem 9.10.12 concerns a Schur-function basis and Hall inner product, not LIS/LDS; the cited p. 205 does not establish the attributed theorem. Replaced the locator by the actual §9.10 insertion/recording convention passage, explicitly limited to that use, and identified Schensted Theorems 1 and 2 as the subsequence statements. Current complete local LIS/LDS proof and all prerequisite hypotheses checked. Defect `f38-owner30-b9-5a-16`; repair confidence 1.

## `ex-rsk-for-involutions`

Checked all five verification steps against the exact involution iff/bijection, inversion symmetry and RS suppliers, Chan Remark 8.3 p. 29, Knuth Theorem 4 p. 719 and Martin Proposition 9.10.9. Insertion of 2143 gives P=Q=[1,3;2,4], and 321 gives the equal column [1;2;3]. Both words are self-inverse; these non-row examples establish only the claimed failure of P=Q to force row shape. The three size-3 shapes have counts 1,2,1; identity and three transpositions exhaust the four involutions. Accepted reader removal of false smallest-nontrivial title (size 2 was omitted) and of the unsupported all-shapes inference, replaced with the exact limited non-row conclusion. Normalized source pagination only; no new mathematical repair.

Verdict for `touched:9:ex-rsk-for-involutions`: **amended_repair**. Pre/post carrier and contract hashes differ; initial current equals post. Original title incorrectly called sizes 3 and 4 the smallest nontrivial examples, omitting the size-2 transposition; reader title now correctly describes two nonidentity involutions. Reader also replaced an unsupported all-shapes conclusion by the actual non-row counterexamples. Direct computations and the n=3 enumeration verify the current Example and Verification. Defect `f38-owner30-b9-5a-17`; repair confidence 1.

Additional distinct repaired defect `f38-owner30-b9-5a-18` for `thm-hook-length-formula`: Chan printed pp. 27–28 recall the hook formula and state Theorem 7.3(b), but do not print the attributed Young-Frobenius/determinant proof. Replaced the false proof attribution by the exact statement-only locator. Repair confidence 1; referenced by `touched:9:thm-hook-length-formula`.

Additional distinct repaired defect `f38-owner30-b9-5a-19` for `ex-hook-lengths-for-row-column-and-hook-shapes`: Reader corrected the absent-column heights for a one-column partition: lambda prime j=0 for j≥2, not 1. Verified against the exact published partition definition; independent of the n=2 shape correction. Repair confidence 1; referenced by `touched:9:ex-hook-lengths-for-row-column-and-hook-shapes`.

Additional distinct repaired defect `f38-owner30-b9-5a-20` for `ex-rsk-for-involutions`: The original examples purported to infer all shapes from only three examples. Reader replaced this inference by the limited non-row conclusion the explicit computations establish; the general diagonal-pair bijection is proved separately by the cited corollary. Repair confidence 1; referenced by `touched:9:ex-rsk-for-involutions`.

## Sources and review limits

Fresh source PDFs were fetched and extracted with PyMuPDF into `/tmp/alpha-batch-9/`; exact relevant sections were read completely, continuing across page breaks. No source-reading claim relies solely on a report or a search snippet. Sources and locators:

- [Craven](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf): §1.2 printed pp. 2–3; complete §§1.4–1.5 pp. 7–13, including Lemma 1.11, Proposition 1.12 and Theorems 1.13–1.14; Corollary 1.15 has n positive.
- [Chan](https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf): chapter 7 pp. 27–28 and chapter 8 pp. 29–30, especially Theorems 8.6, 8.7 and 8.9; the former proves deletion standardness and the latter bijectivity.
- [Etingof et al.](https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf): §4.17 PDF pp. 17–18, hook definition and Theorem 4.53.
- [Schensted](https://sites.math.washington.edu/~billey/classes/561.fall.2019/articles/schensted.1961.pdf): complete relevant printed pp. 179–190: row/column insertion, Lemmas 1–7, Theorems 1–2, and Part II repeated-letter reduction; Lemma 3 recovery is on p. 182.
- [Knuth](https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf): complete §§2–4 pp. 711–720, plus dual insertion pp. 720–721 and the reversal/LDS passage p. 724.
- [Abram–Reutenauer](https://arxiv.org/pdf/2303.16026): complete pp. 1–9, especially Theorem 3.1, bump stability, all trail intersection cases, Proposition 6.2 and §7.
- [Martin](https://jeremymartinmath.github.io/CombinatoricsNotes.pdf): complete relevant §9.10 printed pp. 196–200 in the freshly downloaded PDF: Example 9.10.2, inverse examples, Corollary 9.10.6, Proposition 9.10.9, generalized array (9.22), and Theorem 9.10.12. Web-indexed earlier pagination differs by one page; exact result-number locators prevent drift.

All 25 batch carriers were read either as ordered routed reviews or as the first-row/column prerequisites. Relevant published suppliers were read at the exact claims used; the polynomial propositions/root-bound proof and largest-entry proof were read fully. The published standard-polytabloid basis was read through its exact Statement and initial Facts; its deeper Garnir/straightening proof was not freshly audited. No transitive library-wide audit is claimed.

## Published and outside-scope routing

No published mathematical defect or unmet prerequisite was found in the claims used. One formatting-only supplier alert remains: published `lem-largest-entry-of-a-standard-tableau-is-removable`, final step 4.1 has QED before `[step 3.1, L1]`. Its mathematical removal argument is sound. Recorded its raw hash, two supplier IDs, formatting repair strategy and pending A-P classification in `research/published-consumer-supplier-ledger.md`, after acquiring `research/.published-consumer-ledger.lock`, rereading/merging, updating the deduplicated index and counts, and releasing only this writer’s lock. Published content was left unchanged. This is an owner formatting follow-up, not a blocker to the batch mathematics; no closed mathematical defect-ledger row was manufactured for it.

Read `briefs/tasks/frontier-dependency-ledger.md` and the owned `research/frontier-38-owner-30-batch-9.cross-batch-dependencies.json`. Its empty array remains correct: every in-run supplier used here belongs to batch 9, and other required suppliers are published. No dependency or manifest edge was changed, no refresh or outside-consumer repair is required, and no withdrawal is proposed. The only reader Statement interface change, the hook-formula positive-size endpoint qualification, has exactly three direct consumers, all owned and checked: `ex-hook-lengths-for-row-column-and-hook-shapes`, `ex-hook-table-for-shape-three-two-one`, and `ex-empty-and-singleton-rsk-boundaries`. Their actual uses remain valid.

## Contract and decision reconciliation

Exactly 18 decisions: {'confirmed_fatal': 6, 'amended_repair': 9, 'accepted_repair': 2, 'reviewed_no_defect': 1}. Six flagged findings are independently confirmed fatal; each references exactly one closed row. Other distinct confirmed reader/local defects are recorded separately when necessary. Appended 20 closed `5a-adjudicate` rows via `tools/defect-ledger.mjs append`, which also refreshed the generated ledger view. The empty/singleton touched obligation concerns only refreshed contract quotations and is `reviewed_no_defect`, `change_kind: audit_enrichment`, with no defect IDs; its source defect is closed by the separate flagged decision.

Accepted versus amended dispositions compare the pre/post hashes with the initially matching post carriers and the reader’s exact recorded corrections. Any retained reader repair with an additional current source correction is marked amended, not accepted. Source precision/pagination normalization in risk-only carriers is recorded as metadata enrichment without inventing a finding. Contract derivation claims for branching steps 1.3/2.3 and corner-removal step 1.1 match the edited proof paragraphs. All 109 contract source quotations match their current exact supplier text after whitespace normalization, and all authored derivation claims match their current numbered steps. Proof provenance remains accurate; the branching proof was already ai-altered, and no stale judge stamp was present for its material repair. All scoped items remain draft; page and manifest content unchanged. No independent certification or decision hashes were generated.

## Local checks and handoff

`node tools/risk-report.mjs research/frontier-38-owner-30-batch-9.proof-contracts.json` passed initially; every reported HIGH/CRITICAL carrier received a specific complete risk review in order. The final rerun with `--require-reviewed` passed: 25 items routed, 0 errors.

Batched reflow was unchanged on every path. Batched precheck passed: 16 proof-bearing items, 0 failing (two definitions have no proof precheck). Batched rendercheck passed on 18 files with real KaTeX and renderer YAML parsing. `node tools/defect-ledger.mjs validate --run frontier-38-owner-30` passed: 123 run rows checked, 0 errors at invocation time. Exact decision coverage and unique obligations were checked locally; every flagged decision has exactly one ledger ID.

Independent finite checks passed: 151 distinct-point subsets over F2,F3,F5,F7 verify repaired coefficient support, the coefficient of t^(r−1) and the finite identity; 139 partitions of sizes 0–10 verify the hook formula against an independent corner-count recursion and exact rational branching ratios. These supplement the general proof review. No previously reported reader/refuter enumeration is claimed as an Alpha-run check.

After all final item edits and reflow, the required single batched proof-layout command was:

```sh
node tools/proof-layout.mjs items/lem-hook-product-change-under-corner-removal.md items/lem-hook-product-branching-identity.md items/thm-hook-length-formula.md items/def-row-insertion-and-bumping-route.md items/lem-row-bumping-route-monotonicity.md items/def-reverse-row-deletion.md items/lem-row-insertion-and-reverse-deletion-are-inverse.md items/thm-robinson-schensted-correspondence.md items/thm-schensted-longest-increasing-and-decreasing-subsequence-theorem.md items/thm-rsk-correspondence-for-two-line-arrays.md items/cor-rsk-symmetry-under-inversion.md items/cor-sum-of-squares-of-standard-tableau-numbers.md items/cor-involutions-are-counted-by-standard-tableaux.md items/ex-hook-table-for-shape-three-two-one.md items/ex-hook-lengths-for-row-column-and-hook-shapes.md items/ex-rsk-insertion-and-reverse-deletion.md items/ex-rsk-for-involutions.md items/ex-empty-and-singleton-rsk-boundaries.md
```

Result: **18 items, 113 steps, 0 defects**, exit 0. No item was edited afterward.

No unresolved routed mathematical finding, prerequisite escalation or local check blocker remains. The published formatting alert is retained for the owner. The engine owns decision hashing, gates, Step 5b routing and stage transitions; no judge or gate cycle was initiated.

Final reviewed raw item hashes (evidence only; these are not engine decision stamps):

| Item | SHA-256 |
|---|---|
| `lem-hook-product-change-under-corner-removal` | `697c2b670a0f763af0dfe11c9ed84925f595acb435f147b9cb467083dc848755` |
| `lem-hook-product-branching-identity` | `1c3f90222b22f0e3d802a6e3d4b93678d5bf694615dc59cbebf5807484e5d81b` |
| `thm-hook-length-formula` | `8837f02ec61cee1aec6fec8636787f44920a4deacb162d6809af59efa1bc51ec` |
| `def-row-insertion-and-bumping-route` | `2a08f91c316945b1c6ea032cfcbfd706cd68fb02ef6fd3b1488020f507502eb3` |
| `lem-row-bumping-route-monotonicity` | `729da451755ad1fcb9877ec512a42c998cb7e57eb6b7fd2c41247b976c7e3939` |
| `def-reverse-row-deletion` | `ff23e701a81b38c65b1808391c4eb3d9493bf5a7667a7ae028290bb5c298ab19` |
| `lem-row-insertion-and-reverse-deletion-are-inverse` | `c46ae9a590db283d17cf8c6db8db0302f08fa73fe82dfb70a53d6fe21a0b3e12` |
| `thm-robinson-schensted-correspondence` | `9e5bd69edf2c6aadc6b5775b333f49760560fa4039316c230cf408e9dd40430a` |
| `thm-schensted-longest-increasing-and-decreasing-subsequence-theorem` | `197c48552728bd9246dab3900b3b0e8437ab03c95a9a5bad9344775b09794dee` |
| `thm-rsk-correspondence-for-two-line-arrays` | `b3bea11fc34ea681569b98bf831255f725fce21e299fe09ba7ffa1ad7a13811a` |
| `cor-rsk-symmetry-under-inversion` | `3d3d11672b805b24ae1fcd7131dc2d7496ac792eb2d6bc855c14e86e3be70025` |
| `cor-sum-of-squares-of-standard-tableau-numbers` | `00ac7b3a123a20341315757575e2ba0a0f49c15a0c21c1e95b9a53cf927884de` |
| `cor-involutions-are-counted-by-standard-tableaux` | `37f298d33f81fb0ecb59a8071081c2eb2512b89b856b2adab2b3012cf871b248` |
| `ex-hook-table-for-shape-three-two-one` | `b72cf156054e26cb43946f77421e2159e01071bd8a2789f0060818dda824078e` |
| `ex-hook-lengths-for-row-column-and-hook-shapes` | `3328e965e58a4ae70617edf30fc3a67226ce235e44a0922ca5a7b4f7f0321fa6` |
| `ex-rsk-insertion-and-reverse-deletion` | `78ae664cde92733588fb1b1b2166448dcda9428c1d001334a36ebe5eb3fa74b1` |
| `ex-rsk-for-involutions` | `832acdea0419896b1a381c8e0cd6c1fc4f186aae2198f4964a167510fc2d62ba` |
| `ex-empty-and-singleton-rsk-boundaries` | `d53bab53209d25084a75cf6d7579a8b415c0f0550c747b4ffcf5cada36024a7a` |

Reference-consumer follow-up: searched `library/` and `articles/` for the changed hook-formula Statement supplier. The only direct page placement is the owned A page; its complete summary uses the general count formula and the unchanged Specht-dimension statement. The accompanying B summary was also read within its existing scope and agrees with the corrected computations and empty/singleton cases. Neither page needs repair or owes a page decision. No article reference consumer was found.
