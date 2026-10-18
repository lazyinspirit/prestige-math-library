# Batch 6 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-6`.
Scope: batch 6 only. Engine owns scheduling, hashes and gates.

## Dependency-order review

### Level 0 — finite relative entropy continuity

Reviewed current `items/lem-it-finite-relative-entropy-continuity-on-simplex.md` and full direct supplier carriers `def-qa-35-finite-probability-entropy-and-stochastic-matrices` and `thm-logarithm-derivative-and-integral`. The proof bounds |t ln t| by 2 sqrt(t) and writes D(q||p) as a finite continuous sum minus a finite linear expression. Full support is essential; zero q coordinates, point masses and the one-letter simplex are covered. No choice is used. Reader:6:1 is confirmed_nonfatal: the zero boundary contract cited nonexistent step 1.2. Corrected to steps 1.1 and 2.1; repair confidence 1. The item is unchanged. Risk review is complete. Defect: `math81-b6-continuity-zero-reference`.


### Level 1 — finite product law is iid

Read both proof steps, product-mass Definition and all eight other exact cited supplier interfaces: finite distribution/space, measurable maps, random elements, generated sigma-algebras, independent event classes/sigma-algebras/random elements. Normalization and rectangular factorization are finite distributivity. Setting omitted coordinates to the alphabet proves mutual independence for every subfamily and isolates each marginal. Empty rectangles, zero-mass letters, n=1 and singleton alphabets are valid. No AC. No routed decision; complete risk review recorded.

### Level 2 — type-class cardinality

Read all five proof steps and each cited carrier. With m=nq, the factorial ratio for every supported count vector r is a product of factors <=1, in both r>m and r<m cases; unsupported r has zero mass. Thus m is modal. Partition/count and product-law normalization give the sharp polynomial lower factor, while event mass <=1 gives the upper bound. Zero coordinates and k=1 cause no division by zero. Complete risk review recorded; no routed decision. Source comparison: Polyanskiy–Wu Proposition 1.5, printed pp.15–16, PDF zero-based pages39–40, confirms both bounds and the full mode proof. Its item locator's extra “author PDF pp.15–16” is misleading if read as physical PDF pages: owner may normalize that bibliographic shorthand in the unrouted cardinality/count carriers; printed pages and Proposition number are correct. No mathematical repair required.

### Level 2 — exact type probability

Read both proof steps and all four direct carriers. If q places positive mass on a p-null letter, integrality makes every word contain it, so both sides vanish with D=+infinity. Otherwise expansion of H+D is a finite sum over positive q, with positive p there; multiplying each common atom mass by |T_q| proves the formula. Point masses and omitted zero coordinates are valid, without 0^0 conventions or AC. Reader:6:2 (zero) and reader:6:3 (endpoints) are confirmed_nonfatal: each cited nonexistent step 1.2; each now names steps 1.1 and 2.1 and the exact branches. Two distinct contract-row defects: `math81-b6-identity-zero-reference`, `math81-b6-identity-endpoints-reference`; repair confidence 1. Item unchanged; risk review complete.

### Level 3 — type-class probability bounds

Read both steps and all actual suppliers. For finite D, cancelling finite entropy factors gives both bounds; for infinite D, every term is zero by the already-proved support branch. k=1 gives exact equality. No infinity subtraction or AC is used. Risk review complete; no decision owed.

### Level 4 — finite-alphabet Sanov theorem

Verdict `accepted_repair`, repair confidence 1. Recovered the complete pre-reader carrier at `research/non-ml-math-remaining-81-2026-10-18-owner-it-route-reconciliation/extension-5-6-7/archive/items/thm-it-finite-alphabet-sanov-theorem.md`: raw SHA256 `b864e5c3d7853ce265bf7acb71480c85f11518526486cec4f39a4f33b7d9aa89` exactly matches the pre snapshot. Current raw SHA256 `ff46b3b7c50fecd0fc5cd2796c56b781d4881f13da2caabf41592ab204daa996` exactly matches post. The manifest fingerprint is unchanged. The diff corrects the empirical map's pointwise codomain, states almost-sure support membership, and supplies exact product-atom justification in F8 and step 1.1. Historical witness: A={0,1}, p=(1,0), n=1, word (1) remains an ambient outcome but its empirical type lies outside Delta(S). Current wording correctly assigns it zero mass; no historical uncertainty remains. Defect `math81-b6-sanov-pointwise-support` is fatal for the old pointwise assertion, repaired in reader bytes.

Read all eight current steps and all supplier carriers. Support restriction preserves atom/event masses and allows the k=|S| type bounds. The finite upper sum bounds every class using the closure infimum. For each relative-interior q, explicit rounding gives an attainable q_n in Gamma for every sufficiently large n and continuity of D applies because p is positive on S; the single-class lower bound gives liminf >= -D(q||p). Taking all q proves the interior bound. Empty Gamma, empty interior, zero probabilities, boundary coordinates, singleton support and equality of infinite infima are covered with stated conventions. Any Gamma has measurable inverse image because the sample space is finite; no Borel hypothesis is needed. No AC or unmet prerequisite. Complete risk review recorded before the next level.

Direct item/reference search in items/ and library/ returns only the Bernoulli example and A page (besides the theorem itself). The example's actual Sanov use is full-support 0<p<a<1 and treats p=0 separately; no body correction is necessary. The A-page summary and diagram state the type partition and support-simplex bounds correctly. No outside consumer repair or additional hop is required.


### Level 5 — Bernoulli tail

Verdict `reviewed_no_defect`, change_kind `metadata`, defect_ids empty. Pre, post and current item SHA256 all equal `108c4e202ec756369234f75e449a72d556718d2afa7bec5507552cbebd20f86d`; the scope's touched obligation concerns the F5 contract quote refreshed after the Sanov Statement acquired a newline. Pre/post contract fingerprints differ (`f8a1f164176f6911eb48109987ccc4ddb4410fecb0a0ce6a7eda1917a2fbd845` / `9056cd9122d3b073530b31760a867400d985a4a7d48ee50c6a37ff85dfacd3cb`); the manifest fingerprint is unchanged. No item proof repair is claimed.

Read all six verification steps and every direct supplier, including complete current published Hoeffding, MVT and AC carriers. The ceiling n-type is in the tail and at most 1. The derivative of d is positive above p, and MVT plus endpoint continuity gives all tail rates >=d(a||p). At most n+1 classes give the upper bound. For 0<p<a<1, relative interior (a,1] and closure [a,1] have the same infimum by continuity; a=1 uses the exact all-ones mass p^n, and p=0 gives zero tail and infinite rate. For n=4, p=1/2, a=3/4 there are 4+1 favorable words, giving 5/16. Hoeffding's one-sided bound applies to independent integrable [0,1] coordinates with t=1 and V=4, hence exp(-1/2), with its AC hypothesis explicitly inherited only for this comparison. Complete risk review recorded. No consumer interface changed here.

## Sources and scope limits

Primary source comparisons were made against the actual linked book sections, not the prior reports' verdicts:

- [Polyanskiy–Wu author-hosted book](https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf): complete Proposition 1.5 proof, printed pp.15–16 (physical PDF pp.40–41); Theorem 15.13 and its regularity paragraph, printed pp.307–308 (physical pp.332–333); complete Exercise III.23(a)–(f), printed pp.334–335 (physical pp.359–360). The method-of-types modal calculation and finite/full-support hypotheses were checked. The present local argument supplies its own arbitrary-set interior/closure bounds and support-face reduction; the exercise's informal final equality is not used as an unrestricted premise.
- [Cover–Thomas Chapter 11](https://sgfin.github.io/files/notes/Cover_and_Thomas_ch11_info_and_stats.pdf): Theorem 11.1.2 and proof (printed pp.349–350), complete Theorem 11.1.3 mode proof (pp.350–352), Theorem 11.1.4 and proof (pp.354–355), complete Theorem 11.4.1 proof (pp.362–363), and Example 11.5.2 (p.365). Source exponentials use bits; local entropy and divergence use natural logarithms, so local formulas use exp with rates in nats. Exact printed locators, rather than inconsistent auxiliary PDF-page shorthand in some item references, identify the checked sections.

No unrelated claims from other batches were repaired or reviewed. Local cited prerequisite Statements/Definitions and the proof bodies needed to assess the routed arguments were read; this is not a transitive audit of every published supplier. No defective published item was established, so no published-consumer ledger mutation was needed. Existing batch-6 cross-batch records remain present; owned current consumer interfaces and the Sanov consumer check are recorded in `briefs/tasks/frontier-dependency-ledger.md`. No withdrawal, new item/page, dependency change, provenance change or manifest change was needed. All item bytes were left unchanged by Alpha, so no judge record was invalidated by an Alpha rewrite.

## Decisions and defect ledger

Exactly five owed obligations: reader:6:1, reader:6:2 and reader:6:3 are confirmed_nonfatal; touched Sanov is accepted_repair; touched Bernoulli is reviewed_no_defect with change_kind metadata and no defect IDs. The metadata disposition does not close any reader finding. Four closed defect rows were appended through `tools/defect-ledger.mjs append` at caught_at_stage 3a-adjudicate, each bound to its exact decision. Each of the three reader findings has exactly one row; the accepted Sanov repair has its own row. All completed repairs have repair_confidence 1. The generated defect-ledger view was refreshed by the append tool. Decisions are not stamped by this worker.

## Local validation and handoff

- Initial `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-6.proof-contracts.json`: exit 0; seven HIGH/CRITICAL carriers identified. All seven were reviewed in generated dependency order and each risk_review was completed before proceeding higher.
- Final same command with `--require-reviewed`: exit 0; 12 scoped proof contracts routed, zero errors; all seven required reviews complete.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-6.proof-contracts.json --strict --json`: exit 0; 12 checked, no errors or warnings.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-it-finite-alphabet-sanov-theorem.md items/ex-it-finite-sanov-bernoulli-tail.md`: exit 0; both pass.
- Final batched `node tools/proof-layout.mjs items/thm-it-finite-alphabet-sanov-theorem.md items/ex-it-finite-sanov-bernoulli-tail.md`: exit 0; 2 items, 14 steps, zero defects. Alpha did not edit item files or run a formatter; this checks the dispatch's reader-changed/touched carriers at handoff.
- Local obligation/ledger/manifest checks: exact five-decision coverage, one closed row per reader finding, all current item hashes still match reader-post, and unchanged manifest fingerprints verified below.

No mathematical blocker or open risk review remains in this batch. The auxiliary source-pagination normalization alert above is outside routed carrier repair scope and does not block any proof. The engine retains ownership of hashes, gate battery and transitions; no judging, stamping, dispatch or publication was performed.
