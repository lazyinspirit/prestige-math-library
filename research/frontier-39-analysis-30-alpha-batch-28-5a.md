# Batch 28 Step-5a adjudication — frontier-39-analysis-30

Status: complete for the fifteen routed obligations. Scope is batch 28 only; no agents, stamps, judges, gates or engine transitions are initiated.

## Evidence and conventions

Read CLAUDE.md, README.md, SCHEMA.md, the dispatch order, both Step-5 briefs, scope, reader report/findings, refuter artifact and pre/post snapshots. Raw SHA-256 (including verification) matches the post-reader snapshot for all nineteen current item files. Four touched items changed only contract evidence; nine changed item content. The snapshots store hashes rather than historical item text; historical descriptions below are attributed to the reader report, not an invented byte-level diff.

Positive natural N; functions are on Z/NZ. The forward unitary transform uses a negative exponent and N^(-1/2), the pairing is linear-first with counting weight one, and convolution is unnormalised. No Axiom of Choice or general LCA inversion theorem is needed in these finite arguments.

## Completed items in dispatch order

- `def-counting-inner-product-on-complex-functions-on-z-mod-n`: accepted reader locator repair. Definition and both definiteness directions checked against finite sum, conjugation, inner-product and representatives suppliers. Einsiedler–Ward inner product is printed 435; the counting-dual paragraph is printed 436. Risk review complete. Closed defect: `f39-b28-counting-locator` (nonfatal citation correction).
- `def-cyclic-convolution-on-z-mod-n`: accepted reader prerequisite/normalisation repair. Added supplier proves cardinality N, and reindexing by y->x-y proves commutativity; zero and N=1 checked. Taylor (11.30) uses convolution divided by N. Risk review complete. Closed defects: `f39-b28-convolution-finiteness`, `f39-b28-convolution-source`.
- `def-unitary-discrete-fourier-transform-on-z-mod-n`: unchanged and owes no decision. Class/frequency periodicity, linearity, negative sign and normalization verified; risk review complete.
- `lem-orthogonality-of-characters-on-a-finite-cyclic-group`: reviewed_no_defect / audit_enrichment for the contract-only boundary locator update. Six-step proof checks the geometric identity by induction, both congruence cases, canonical natural and N=1. Risk review complete; no defect row.

## Source coverage to date

- Taylor, https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf: read complete finite transform/orthogonality passages (11.1)–(11.6), printed 87–88; convolution formulas and FFT passages are retrieved for the next items. Its 1/N transform and convolution differ from this batch's convention.
- Einsiedler–Ward, https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf: independently read printed 434–436, including the orthogonality calculation, C.8 and counting-dual paragraph after C.10. Only the finite orthogonality/counting passages are used, not the adjacent general claims.
- MIT lecture and Cooley–Tukey source PDFs retrieved; relevant sections remain to be read before closing their items.

## Scope limits

The hash snapshots do not contain historical source text. Historical reader repairs are accepted on the independently reviewed current post-reader bytes, source statements and specific reader repair descriptions. No missing-byte reconstruction, historical false-positive or current-content owner resolution is claimed. No published defect or proposed withdrawal was identified.

## Level 1 completed

- `lem-dft-squares-to-reflection-and-has-fourth-power-identity`: reviewed_no_defect / audit_enrichment. Two negative exponents collapse at y=-x, and R^2=id yields the two-sided inverse F_N^3. Small-length contract evidence names the actual Remark; N=1,2 and N=3 checked. Risk review complete.
- `lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product`: accepted reader repair of the false normalization comparison, closed defect `f39-b28-convolution-normalization`. Direct finite reindexing gives sqrt(N); independently multiplying by N^(-1/2) gives (f*g)#=N f# g#. Source Taylor (11.30)–(11.31), printed 92, divides convolution by N. Risk review complete.
- `thm-finite-fourier-inversion`: unchanged, no decision owed. Both inverse compositions, quotient periodicity and singleton collapse checked; risk review complete.
- `thm-finite-parseval-and-plancherel`: unchanged, no decision owed. Conjugation and orthogonality give the counting identity, without using inversion; risk review complete.

Actual additional prerequisites opened: injection/surjection/bijection and the two-sided inverse theorem. All previously opened finite-sum, class, exponential, field, rational-power and orthogonality interfaces are preserved. Next: level 2 engineering convention and witnesses.

## Level 2 completed

- `def-unnormalised-engineering-dft-and-conversion`: accepted reader source/convention repair. X=sqrt(N) F_N and its 1/N inverse checked. Taylor (12.1) is normalised; his odd-branch positive twiddle (12.9) conflicts with negative forward sign, while the local factorisation uses the correct sign. MIT headings 3–4 read completely; their positive primitive root is inverted here. Closed defects `f39-b28-engineering-source`, `f39-b28-engineering-convention`; risk complete.
- `cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding`: accepted reader repair. Finite polynomial expansion supplies the interpretation directly; cyclic (2,2) contradicts linear degree-zero value 1. The product has three coefficients, with length-three minimum padding and optional length-four radix-two padding. Closed defects `f39-b28-padding-citation`, `f39-b28-padding-count`; risk complete.
- `ex-unitary-dft-for-n-equals-one-and-two`: unchanged, no decision. One-term identity and the normalized 2x2 matrix check directly, including A^2=I and Parseval. Exponential addition/kernel imply exp(-pi i)=-1 by its square and exclusion of +1. Risk complete.

Additional supplier definitions read: modular operations and matrix product/identity. Next: level 3 factorisation and convolution example.

## Level 3 completed

- `lem-radix-two-even-odd-dft-factorisation`: accepted reader repair of misattributed Fact L2; closed defect `f39-b28-factorisation-citation`. Checked quotient maps, integer cancellation, disjointness, division-algorithm coverage, finite sum splitting and all-integer frequency periodicity. M=1 included. Taylor/MIT mirrors and negative twiddle caveat checked independently. Risk complete.
- `ex-cyclic-convolution-via-the-dft`: amended_repair. Reader's contract enrichment is sound, but Example incorrectly wrote f(x)=inverse(X(f*g)); at x=1 this asserted 1=2. Changed only that left side to (f*g)(x). Verification 1.1–3.1 and all tuples check directly. Fatal closed defect `f39-b28-convolution-inverse-subject`; confidence 1. Existing provenance already says ai-altered, no judge record exists, manifest's formula is already correct. Risk complete.

No Statement or Definition changed in the Alpha edit. No additional prerequisite, contract quote or manifest claim needs alteration. Next: level 4 recursive algorithm.

## Level 4 completed

`def-recursive-radix-two-fast-fourier-transform`: unchanged; no decision. Read its fixed tagged state set, total successor operator, frequency periodicity, first-coordinate induction and termination. This supplies a genuine application of the recursion theorem despite the varying domains F_m. Power-law rescaling is valid; no AC. Risk review complete. Next: level 5 complexity, correctness and odd-length counterexample.

## Level 5 completed

- `thm-radix-two-fft-arithmetic-complexity`: unchanged, no decision. Per-output model counts no sharing: recurrence T_m=2T_(m-1)+2*2^m gives 2m2^m, including T_0=0. Its broader exclusions and independent-evaluation baseline are explicit. Log/power suppliers checked; risk complete.
- `thm-radix-two-fft-correctness`: accepted reader correction of the Remark's induction level, closed nonfatal defect `f39-b28-correctness-index`. Universal input/frequency induction hypothesis applies at m to both level-m inputs in the m+1 successor proof. Risk complete.
- `cex-radix-two-recursion-does-not-directly-apply-to-odd-length`: accepted reader correction of the false true-claim label and domain comparison, closed defect `f39-b28-odd-label`. Independently checked both three-class permutations and odd-N inverse [q+1]; half-size quotient maps belong only to N=2M. Risk complete.

Additional actual suppliers opened: natural numbers, recursion, logarithm-to-base, natural logarithm, real power, logarithm laws and rational/real agreement. Next: level 6 recorded mixed-radix remark and four-point example, then page-only findings.

## Level 6 completed

- `rem-cooley-tukey-factorisation-for-composite-lengths`: accepted reader citation/stage-description repair, closed defects `f39-b28-mixed-radix-source`, `f39-b28-mixed-radix-stage`. Independently read the scanned Cooley–Tukey printed 297–298, all of (1)–(13), especially complete (3)–(8). Set R=r_2,S=r_1 and invert their positive primitive root: R length-S transforms, then twiddles and S length-R transforms. Both R,S>=2 require composite N; prime N has no nontrivial split. The item stays recorded, not proved here, with proof not-supplied and no local proof or arbitrary-length complexity promise. Taylor Exercise 4, printed 99, only asks for small-prime extensions. No high-risk review is required; the full current Remark was nevertheless reviewed.
- `ex-four-point-radix-two-fft`: reviewed_no_defect / audit_enrichment. Arbitrary complex inputs and all four direct/recursive formulas check; in the expressly unoptimized per-output model T_0=0,T_1=4,T_2=16. Removing spurious trailing-zero boundary evidence is correct. Risk complete. Its Verification 3.1 and 4.1 check correctness and complexity conclusions, confirming the routed B-page finding.

All nineteen items have now been independently reviewed in dispatch order, with all eighteen required risk reviews complete. Next: repair and decide the two routes for the one page defect, finish ledger dispositions and local checks.

## Page finding and final dispositions

`reader:28:1` and `flagged:28:1` are both **confirmed_fatal**, sharing exactly one closed row, `f39-b28-page-witness-roles`; the flagged decision explicitly identifies reader:28:1 as the same defect. Both immutable scope findings bind carrier SHA-256 `1399a99d25198b62ec0b7a17f59f80351d4518d5541e260038aced1e9dd0f6bc`. The original page sentence falsely put both witnesses on the hypothesis side. Current prose states that the odd-length witness tests the length hypothesis and the four-point example checks correctness and arithmetic count. The source of those checks is the current four-point Verification 3.1–4.1 and the odd-length Counterexample 1.1–4.1, not the reviewers' conclusions alone. Repair confidence is 1; item/page lists and manifest contracts are unchanged by this prose repair.

There are exactly fifteen decisions: nine accepted reader repairs, one amended repair for the convolution example, three reviewed_no_defect/audit_enrichment contract-only changes, and two confirmed-fatal routes for one page defect. Fifteen distinct closed mathematical/citation defect rows are recorded, each owned at 5a-adjudicate. Multiple distinct defects on a touched carrier have separate rows; the two reviewers' common page defect has one row. No mechanical failure receives a row. Decision hashes are left to the engine.

## Consumer impact and dependency record

The reader's counting Definition changed only its source locator. The convolution Definition adds a finite-cardinality prerequisite while preserving its formula, and the engineering Definition corrects the stated convention of its later convolution lemma while preserving X=sqrt(N) F_N and its inverse. Every owned direct dependency/reference consumer was checked at its actual use: the convolution lemma, engineering/factorisation/recursive definitions, FFT correctness and complexity, Parseval, the padding counterexample, and the convolution/four-point examples. They use the corrected conventions and formulas coherently. No necessary consumer repair changes a Statement or Definition; no second hop is triggered.

A repository reference search also found outside-batch `thm-finite-dft-support-product-uncertainty` and `ex-finite-dft-delta-and-constant-extremisers`. Opened their actual Given/F2/counting uses and full arguments for impact assessment: they use the same counting inner product and its positivity, unchanged by the locator correction. They need no edit. Their ownership and any computed Step-5b obligations remain with their owning batch/Step-5b lead; no Step-5b edge verdict or impact-window closure is claimed here.

Batch 28 retains its two verified conceptual page prerequisite records to `bochner-inversion-and-plancherel-on-lca-groups` and `pontryagin-duality-for-locally-compact-abelian-groups`. No finite proof cites an item on either page. The main-page opening expressly derives the finite claims from finite sums; no new item-level cross-batch edge is needed. The batch input remains unchanged and its review is recorded in `briefs/tasks/frontier-dependency-ledger.md`; no withdrawal is proposed or removed.

The refuter artifact's coverage note mentions an unrelated batch-11 choice issue without a routed batch-28 carrier ID. It is outside this dispatch and is neither independently adjudicated nor cleared here; its owning batch/Step-5b lead retains that report evidence. It is not a mathematical prerequisite of these finite-sum proofs.

## Sources and coverage limits

- Taylor: read (11.1)–(11.6), printed 87–88, complete (11.30)–(11.31), printed 92, and complete FFT discussion (12.1)–(12.23), printed 95–99, plus Exercise 4. Normalization and the printed sign inconsistency were checked directly. Adjacent analytic examples are not proof inputs.
- MIT 18.310 lecture 23: retrieved its HTML after browser failure and read complete headings 3–4, including root inversion, coefficient recovery, coefficient-halves reduction and the worked modulo-17 example. Its positive-sign mirror differs from the local negative-sign convention. No unrelated continuous-Fourier claim is imported.
- Einsiedler–Ward: read printed 434–436, with exact finite orthogonality, inner-product/Parseval and counting-dual passages. No general LCA theorem is needed locally.
- Cooley–Tukey: visually read printed 297–298, equations (1)–(13), including the full two-stage derivation (3)–(8). The inherited author locator says its author read the five-page paper; this adjudicator's coverage is only the two pages listed here. The current general remark remains recorded without local proof.

Opened all forty-five directly cited published supplier Definition/Statement interfaces; the exponential-value uses were additionally checked through the Euler and quarter-turn Statements and the Cartesian exponential corollary's argument. Finite sum laws, scalar types, quotient maps, rational powers, recursive domains and inverse directions were independently traced in the nineteen current carriers. This is not a whole-library or complete transitive-prerequisite audit. No defective published supplier was identified in the passages used; published content and its ledger remain unchanged.

## Local validation

- Initial risk-report without --require-reviewed: 19 routed, 18 HIGH/CRITICAL, zero tool errors. All eighteen specific risk reviews now complete; final --require-reviewed run: zero errors, 19 routed.
- Strict owning-batch proof contracts: 19/19 checked, zero errors and warnings. This checks citation quotations and boundary/step records mechanically; it does not prove the arguments.
- Reflow after the one item correction: unchanged. Precheck: one proof checked, zero failures.
- Focused rendercheck: the changed item and B page, two files, pass with actual KaTeX and renderer YAML parsing.
- Final proof-layout after the last item edit and reflow: `node tools/proof-layout.mjs items/ex-cyclic-convolution-via-the-dft.md` — one item, four steps, zero defects. This is the full Alpha-changed item-path batch; reader edits were independently preserved and reviewed, not rewritten.

No test suite or numerical smoke test was run or claimed; the finite identities and tuples were checked algebraically. No judge, stamp, self-certification, dispatch or gate cycle was initiated. No unresolved mathematical blocker remains within the dispatched obligations. The live engine status shows unrelated batch coverage/collection work pending; this report claims batch-28 local completion only.

Focused artifact consistency check passed: exactly fifteen owed obligations and decisions, closed same-subject ledger references, one explicitly deduplicated reader/refuter page defect, eighteen complete risk reviews, unchanged manifest fingerprints, and post-reader contract fingerprints recovered by removing only risk_review. Every item still matches the post-reader raw hash except the deliberately amended convolution Example. Ledger append used the tool’s exclusive append/render lock and recorded fifteen rows; no other owner’s row was modified.
