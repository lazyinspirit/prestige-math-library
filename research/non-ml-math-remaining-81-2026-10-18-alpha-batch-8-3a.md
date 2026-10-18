# Batch 8 Step 3a adjudication

Run: non-ml-math-remaining-81-2026-10-18. Group: batch-8.

Scope: 14 touched obligations; no reader/refuter findings, page changes or outside-producer routes. Risk routing initially reports 11 HIGH/CRITICAL carriers. Current item raw hashes agree with all reader-post item hashes; all 14 touched item hashes differ from pre. Alpha subsequently corrected one closing math delimiter in the Shannon facts; all mathematical Statements and Definitions were preserved.

## Item checkpoints (dependency order)

### lem-finite-gibbs-inequality — accepted_repair

Reviewed both MVT orientations for t>1 and 0<t<1, with positive closed interval, continuous logarithm and derivative 1/t. Weighted gaps are nonnegative; equality forces full support because every q_i>0, then every ratio is one. Conversely p=q gives zero. Zero coordinates of p and the one-coordinate law are covered; all sums and choices are finite. Exact F1–F6 statements read in the five declared suppliers; no remaining defect. Reader repair adds explicit calculus suppliers and supplies a finite MVT argument. Dependencies: def-qa-35-finite-probability-entropy-and-stochastic-matrices, def-it-information-units-and-logarithm-base, thm-natural-logarithm-laws, thm-logarithm-derivative-and-integral, cor-mean-value-theorem. Local source locations: supplier Definition/Statement and Gibbs steps 1.1–2.1. Risk review complete. Next: ideal interval definition.

### def-ideal-real-arithmetic-interval-code — accepted_repair

Width recursion gives positive product width at every prefix and w<=1. Positive ln(2), monotonicity, inversion and the floor property yield r>=0, s>=2 and 0<=k<2^s. Checked one-symbol w=1 gives s=2, k=2. Fixed n and frame count are explicit. The added suppliers justify the output type without changing the interval or midpoint rule.

Evidence: current items/def-ideal-real-arithmetic-interval-code.md, its Facts and exact declared supplier Statements/Definitions; reader report and empty refuter findings. Risk review complete. No mathematical repair by Alpha.

### thm-mcmillan-inequality-for-finite-binary-codes — accepted_repair

Injectivity bounds each length-s tuple class by 2^s; nonempty codewords bound totals between k and k lambda. For epsilon=K-1>0 the explicit integer k exceeds 1+2(lambda-1)/epsilon^2, so the quadratic binomial term contradicts the linear bound, including lambda=1. The finite replacement is valid; the stale axiom-use mention of a real limit is harmless descriptive residue.

Evidence: current items/thm-mcmillan-inequality-for-finite-binary-codes.md, its Facts and exact declared supplier Statements/Definitions; reader report and empty refuter findings. No mathematical repair by Alpha.

### alg-binary-huffman-coding — accepted_repair

Read complete operational Definition: singleton returns 0; least (weight, serial) selection, parent insertion, fresh serial, left/right labels and stop rule determine a finite tree. m-1 merges terminate. The added justified_by edge is the proper direction for the separately proved output property; its proof will be checked at level 4.

Evidence: current items/alg-binary-huffman-coding.md, its Facts and exact declared supplier Statements/Definitions; reader report and empty refuter findings. No mathematical repair by Alpha.

### alg-finite-register-rational-arithmetic-coder — accepted_repair

Read complete configuration, register, encoder and decoder instructions. Q>=1 and N>=1; doubling from 1 gives the least B with Q^N<=2^B, including Q=1 giving B=0. Encoder lists every integer update and finite search; decoder constructs the finite fixed-n trie and has explicit rejection and frame-count rules. The added justified_by points to the level-4 well-definedness theorem, reviewed there.

Evidence: current items/alg-finite-register-rational-arithmetic-coder.md, its Facts and exact declared supplier Statements/Definitions; reader report and empty refuter findings. No mathematical repair by Alpha.

### thm-binary-kraft-criterion-for-finite-lengths — risk-only review; no decision owed

Reviewed both directions against the complete current thm-kraft-inequality proof: excluded leaves prove necessity; distinct-depth free nodes and greatest available depth prove effective allocation. A finite request list is computably enumerable; its positive lengths exclude empty codewords, and allocated distinct prefix-free words give the required nonsingular code. Singleton positive lengths cause no exception. No arbitrary choice is used.

Evidence: current items/thm-binary-kraft-criterion-for-finite-lengths.md, its Facts and exact declared supplier Statements/Definitions; reader report and empty refuter findings. Risk review complete. No mathematical repair by Alpha.

### thm-ideal-real-arithmetic-interval-code-is-prefix-and-lossless — accepted_repair

All four steps checked. Full-support cumulative subdivisions partition [0,1), with product widths. The exact floor bounds give 2^(-(r+1))<w<=2^(-r), so delta=2^(-(r+2))<w/2. Both cell endpoints lie strictly inside the source interval, including dyadic midpoint cases. Disjoint nonempty dyadic cells prohibit equality and prefix nesting. Fixed-n parsing and s<=-log2(w)+2 follow; singleton w=1 is covered.

Evidence: current items/thm-ideal-real-arithmetic-interval-code-is-prefix-and-lossless.md, its Facts and exact declared supplier Statements/Definitions; reader report and empty refuter findings. Risk review complete. No mathematical repair by Alpha.

### ex-uniquely-decodable-code-not-prefix — risk-only review; no decision owed

The 0/01 witness fails prefix-freeness. For words actually in the extension range, a leading 01 forces 01 and a leading 00 or final 0 forces 0; this strictly shortens the suffix and uniquely parses all finite inputs, including the empty word. Kraft sum 3/4 is used only as a consistency check, not as sufficiency.

Evidence: current items/ex-uniquely-decodable-code-not-prefix.md, its Facts and exact declared supplier Statements/Definitions; reader report and empty refuter findings. Risk review complete. No mathematical repair by Alpha.

### cor-ideal-real-arithmetic-code-average-length — accepted_repair

The pointwise two-bit bound is averaged under the normalized positive product law. Natural-log product laws divided by ln2 split block self-information; direct coordinate marginal summation gives p_i, including n=1 and singleton entropy zero. All expectations are finite, so no convergence or independence theorem is tacitly invoked.

Evidence: current carrier and complete declared supplier interfaces, reader repair account and empty refuter findings. Next: level-5 corollaries and examples.

### thm-finite-register-rational-arithmetic-coder-is-prefix-and-lossless — accepted_repair

Checked all four steps and operational supplier. The scaled prefix invariant is [L,L+W Q^(n-t)); old W in the L update and new W in the width give exact disjoint children. W>=1 and D<=2^B make j=0 admissible and u<=B, with D<2^(u+1)W even when u=B. Midpoint cells are strictly interior; disjointness gives prefix parsing. Doubling terminates by 2^P>=P. q_i,c_i,L,W,D<=2^B; updates and their partial products are <=D, search products <=2^(2B), numerator <=3*2^(2B+2)<2^(2B+4). Ceiling-log counters represent N and B+2. Q=1 gives B=u=0, s=2 and k=2; all registers still fit. These are configuration-dependent fixed-frame bounds, not constant-width streaming.

Evidence: current carrier and complete declared supplier interfaces, reader repair account and empty refuter findings. Risk review complete. Next: level-5 corollaries and examples.

### thm-huffman-coding-is-prefix-optimal — accepted_repair

Read every induction step. Existence uses m<=2^m, Kraft and finite positive integer length vectors bounded by L0/p_i. For m>=2 unary-edge contraction keeps all leaf paths nonempty and strictly reduces cost, so an optimum is full; a deepest leaf has a deepest leaf sibling. Exchange differences (p_a-p_x)(d-e)<=0 put both minimum weights in that sibling pair; the second slot cannot contain the already placed a. Contraction/expansion changes cost exactly by p_a+p_b. Reduced size is >=2 for the induction step, avoiding an empty-codeword singleton. Size-two and singleton bases are separate. The strengthened active-list induction covers arbitrary serials and tied minimum weights.

Evidence: current carrier and complete declared supplier interfaces, reader repair account and empty refuter findings. Risk review complete. Next: level-5 corollaries and examples.

### thm-shannon-bounds-for-finite-binary-codes — amended_repair

K>0 and McMillan give K<=1; q_i=2^(-ell_i)/K is a positive probability vector. Checked the sign in D=-H+ln(2)L+ln K and division by positive ln2. For m>=2 full support gives 0<p_i<1; ceiling lengths are positive, their Kraft weights are <=p_i, and ceil(a)<a+1 gives strict expectation bound. Singleton has entropy zero and nonempty one-bit output. All facts match current suppliers. Alpha corrected the missing closing dollar in F8 after ln2>0; this affects well-formedness only, with no Statement or proof change.

Evidence: current carrier and complete declared supplier interfaces, reader repair account and empty refuter findings. Risk review complete. Next: level-5 corollaries and examples.

### cor-finite-register-arithmetic-coder-average-length — accepted_repair

The newly explicit pointwise supplier bound applies to every rational-source fixed-n block. Product-log expansion and the directly summed coordinate marginal p_i give E[-log2 p^n]=n H2(p). Averaging adds exactly two bits; n=1 and the one-symbol source remain valid.

Current carrier and complete relevant supplier statements read. No Alpha mathematical edit. Next: level-6 dyadic example.

### cor-huffman-code-lengths-are-within-one-bit-of-entropy — accepted_repair

For m>=2 the proved Huffman output is prefix and hence uniquely decodable, so Shannon gives the lower bound. Optimality compares with the Shannon prefix code for the strict upper bound. At m=1 the source is p1=1, ln1=0 makes H2=0, and the operational singleton branch outputs one bit. All seven facts and actual supplier conclusions match; no arbitrary choice.

Current carrier and complete relevant supplier statements read. Risk review complete. No Alpha mathematical edit. Next: level-6 dyadic example.

### ex-finite-register-arithmetic-coder-block-ab — accepted_repair

Recomputed AB with q=(3,2,1), Q=6, n=N=2: (L,W) goes (0,1) to (0,3) to (9,6), D=36 and B=6. Since 24<=36<48, u=2 and s=4; k=floor(16/3)=5 gives 0101. Exact cell [5/16,3/8) lies strictly inside [1/4,5/12), of width 1/6=pA pB. The repaired F2 uses only the proved decoder conclusion; cell containment is independently established, not imported from an overbroad citation. Diagram coordinates match these rational values.

Current carrier and complete relevant supplier statements read. Risk review complete. No Alpha mathematical edit. Next: level-6 dyadic example.

### ex-huffman-dyadic-source-and-code-tree — accepted_repair

Serials 2,3 are merged first at weights 1/4,1/4 into fresh serial 4. The remaining equal weights 1/2 put serial 1 before 4, giving 0,10,11. Recomputed lengths (1,2,2), expected length 3/2 and entropy 3/2 from log2(2^u)=u for u=-1,-2. The depicted leaf labels and left/right bits match, and the cited optimality and one-bit bounds apply to this full-support three-symbol law. Risk review complete. All routed mathematics and risk-only items have now been reviewed. Next: synchronize the reader changes into the owned manifest and record defect dispositions and checks.

## Final dispositions and bookkeeping

The item checkpoints above preserve the mathematical review sequence. Final verdicts below supersede the checkpoint labels where manifest synchronization was subsequently necessary. The current item files initially matched every reader-post raw hash, and precisely the 14 scoped touched items differed from their reader-pre hashes. Alpha changed only the final closing math delimiter of Shannon F8. The full mathematical claims were retained; no judge stamp was present or added.

The reader had not mirrored its new dependencies, well-definedness edges, or expanded definitions/statements into the batch manifest. Alpha synchronized the 12 affected manifest entries against the current carriers. Those repaired carriers use `amended_repair`; the unchanged Huffman optimality and rational AB example use `accepted_repair`. Adding Huffman's `justified_by` is metadata enrichment, with `reviewed_no_defect`, `change_kind: metadata`, and no defect row. No mathematical defect in that operational procedure is alleged.

- `touched:8:lem-finite-gibbs-inequality`: `amended_repair`; `math81-b8-3a-lem-finite-gibbs-inequality`.
- `touched:8:def-ideal-real-arithmetic-interval-code`: `amended_repair`; `math81-b8-3a-def-ideal-real-arithmetic-interval-code`.
- `touched:8:thm-mcmillan-inequality-for-finite-binary-codes`: `amended_repair`; `math81-b8-3a-thm-mcmillan-inequality-for-finite-binary-codes`.
- `touched:8:alg-binary-huffman-coding`: `reviewed_no_defect`; metadata only, no defect IDs.
- `touched:8:alg-finite-register-rational-arithmetic-coder`: `amended_repair`; `math81-b8-3a-alg-finite-register-rational-arithmetic-coder`.
- `touched:8:thm-ideal-real-arithmetic-interval-code-is-prefix-and-lossless`: `amended_repair`; `math81-b8-3a-thm-ideal-real-arithmetic-interval-code-is-prefix-and-lossless`.
- `touched:8:cor-ideal-real-arithmetic-code-average-length`: `amended_repair`; `math81-b8-3a-cor-ideal-real-arithmetic-code-average-length`.
- `touched:8:thm-finite-register-rational-arithmetic-coder-is-prefix-and-lossless`: `amended_repair`; `math81-b8-3a-thm-finite-register-rational-arithmetic-coder-is-prefix-and-lossless`.
- `touched:8:thm-huffman-coding-is-prefix-optimal`: `accepted_repair`; `math81-b8-3a-thm-huffman-coding-is-prefix-optimal`.
- `touched:8:thm-shannon-bounds-for-finite-binary-codes`: `amended_repair`; `math81-b8-3a-thm-shannon-bounds-for-finite-binary-codes`, `math81-b8-3a-shannon-f8-delimiter`.
- `touched:8:cor-finite-register-arithmetic-coder-average-length`: `amended_repair`; `math81-b8-3a-cor-finite-register-arithmetic-coder-average-length`.
- `touched:8:cor-huffman-code-lengths-are-within-one-bit-of-entropy`: `amended_repair`; `math81-b8-3a-cor-huffman-code-lengths-are-within-one-bit-of-entropy`.
- `touched:8:ex-finite-register-arithmetic-coder-block-ab`: `accepted_repair`; `math81-b8-3a-ex-finite-register-arithmetic-coder-block-ab`.
- `touched:8:ex-huffman-dyadic-source-and-code-tree`: `amended_repair`; `math81-b8-3a-ex-huffman-dyadic-source-and-code-tree`.

Thirteen reader-documented mathematical citation, closure or case-completion repairs were independently accepted, with one closed ledger row apiece; Shannon's distinct authored delimiter defect has its own closed nonfatal row. All are owned at `3a-adjudicate`, have disposition `fixed`, and are referenced by their decisions. These rows document the reader's repair account and independently checked current closure; no exact historical counterexample or unseen historical argument is claimed. The ledger append tool serialized the append and regenerated its view. No mechanical check failure was recorded as a defect.

## Interface and consumer checks

Alpha made no Statement or Definition change. For the reader's expanded ideal-real definition, all current item/reference consumers are the ideal-real correctness theorem, rational-coder algorithm and rational-coder correctness theorem, all owned and checked here. For the rational algorithm's configuration instructions, actual consumers are its correctness theorem, rational AB example and average-length corollary. The correctness theorem's added pointwise bound is used by that corollary; the example uses only decoding. Its algorithm also links back through justified_by. All are in batch 8 and sound under the current hypotheses; no outside repair or new supplier is required.

Preserved all IDs, pages and inventory, with no withdrawal. Updated the owned `research/non-ml-math-remaining-81-2026-10-18-batch-8.cross-batch-dependencies.json` from 8 to 17 distinct rows to record the newly explicit in-run units-convention edges; existing rows were retained. Each new use was checked against the complete current units Definition and the positive base-2 hypotheses. Ran the authorized frontier-dependency-ledger refresh successfully. Published context remained read-only; no defective published supplier was found, so no published-consumer ledger edit or lock was needed.

## Sources and exact mathematical interfaces

Local evidence is in each named current carrier's complete Facts/Proof or Definition and the corresponding supplier Statement/Definition. In particular, read the complete used interfaces for finite probability and KL, full-support product sources, binary extension and prefix trees, natural-log units, logarithm continuity and product laws, logarithm derivative, MVT, base change/inversion, floors, ceilings, the effective Kraft allocation, and prefix-code parsing. The published Kraft supplier's current free-node allocation proof preserves distinct free depths and capacity, so the finite converse used here is justified locally.

External corroboration consulted (none substitutes for local proof):

- [Stanford EE376A course notes](https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf), Chapter 4 §§4.3–4.6, printed pp.21–26: rounded Shannon lengths, Theorem 25's tuple-counting argument, Theorem 26's entropy lower bound, minimum-weight Huffman merges and sibling contraction. Our finite binomial closure supplies the limiting prerequisite locally. The full-support/singleton conventions and exact strengthened active-list induction are checked in the authored proof.
- [Roweis CSC310 Lecture 8, Arithmetic Coding — Details](https://cs.nyu.edu/home/people/in_memoriam/roweis/csc310-2005/notes/lec8x.pdf), slides 8–15: interval refinement, positive rational frequencies, bounded integer arithmetic and decoder conditions. This source uses renormalized streaming updates; the authored fixed-frame coder has different exact integer scaling, which was verified directly rather than attributed to those update formulas.
- [Lebl, Basic Analysis §5.4](https://www.jirka.org/ra/html/sec_logandexp.html), Proposition 5.4.1 and its proof: differentiability with derivative 1/x on positive arguments, normalization at 1 and monotonicity. The current local MVT supplier explicitly requires continuity on the closed positive interval and differentiability inside, both verified in the Gibbs proof.
- [MIT 6.450 Lecture 3](https://ocw.mit.edu/courses/6-450-principles-of-digital-communication-i-fall-2009/f57623d4056984d18685fdb37cea01d6_MIT6_450F09_slide03.pdf), PDF page 23 (printed slide 24), Kraft inequality for unique decodability: corroborates the normalized Kraft-weight setup. Its asymptotic argument is not imported as a prerequisite.

## Actual focused checks and handoff

- Initial `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-8.proof-contracts.json`: 21 items, 11 HIGH/CRITICAL risk reviews required, zero errors. Every required current risk review is complete and specific; untouched Kraft and nonprefix example have risk records but no invented decisions.
- Final same command with `--require-reviewed`: 21 items, zero errors.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-shannon-bounds-for-finite-binary-codes.md`: unchanged after the final delimiter edit.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-shannon-bounds-for-finite-binary-codes.md`: one proof checked, zero failures.
- `node tools/rendercheck.mjs items/thm-shannon-bounds-for-finite-binary-codes.md`: one file, zero defects; actual YAML and KaTeX parsing passed.
- Final `node tools/proof-layout.mjs items/thm-shannon-bounds-for-finite-binary-codes.md`: one changed item, four steps, zero defects. No item edit followed this check.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-8.proof-contracts.json --strict`: 21/21 items, zero errors. One pre-existing heuristic shotgun-bracket warning in Huffman 3.1 remains: its four facts are all used in the exchange argument; induction-scaffolding steps need no new facts, so this is not a mathematical defect.
- `node tools/manifest-deps.mjs research/non-ml-math-remaining-81-2026-10-18-batch-8.pages.json`: 21 items, zero errors.
- Decision inventory checked against scope: exactly 14 touched obligations, no duplicates, no added risk-only/page/reader/refuter decisions. All closed repairs have confidence 1.

No remaining mathematical blockers, escalations or required outside-consumer repairs. No judging, stamping, certification, dispatch or gate battery was initiated. The engine owns subsequent hashes and gates.
