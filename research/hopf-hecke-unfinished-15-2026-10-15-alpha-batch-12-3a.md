# Batch 12 Step 3a adjudication

Run: `hopf-hecke-unfinished-15-2026-10-15`; group: `batch-12`; original scope assignment group `d` retained. Seven touched carriers, one reader finding and one refuter finding are owed; no page-only obligations. Review follows the generated dependency order. No judge, stamp or engine transition is performed.

Read scope, reader report/findings, refuter JSON, immutable pre/post snapshots, order task, alpha brief and current manifest/contracts. The initial seven current raw hashes all equal their frozen post-reader item hashes. Reversing the full Kirillov title to the prior Cherednik title (six items), or replacing both `1\otimes T_i` occurrences by `T_i\otimes1` (finite basis), reproduces every corresponding immutable pre-reader raw hash exactly. This establishes the exact historical delta, without assuming a missing preimage from hashes alone. The source/statement and dependency interfaces otherwise remain unchanged.

Sources independently consulted: [Kirillov](https://arxiv.org/pdf/math/9501219), PDF title page and Lecture 3, Lemma 3.10 and Theorems 3.11–3.13, PDF pages 19–20; [Lusztig](https://arxiv.org/pdf/math/0108172), §3.2 and complete Proposition 3.3, PDF pages 8–9. Kirillov's title page establishes authorship. His basis theorem explicitly defers independence; his generic-specialization center argument is not used as a local proof. The authored batch supplies its own arguments. Local supplier statements are checked at their actual interfaces, rather than treating source citations as unproved replacements.

Initial `node tools/risk-report.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-12.proof-contracts.json` passed with seven HIGH/CRITICAL carriers. Reviews below supply item-specific notes. Final validation and handoff dispositions are recorded below.

## def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences

Checked Definition and all five proof steps against the Laurent/localization lemma Statement parts 2–3, parabolic theorem part 4, integer cancellation, natural embedding and domain definition. Integer and Laurent coefficient rings are nonzero domains. The three finite geometric-sum branches are correct for arbitrary integer a,b (negative exponents included); a=b gives zero, 1-X_i/X_{i+1} is nonzero by distinct monomials, and cancellation yields uniqueness. The twisted Leibniz numerator expands exactly. n=2 and zero f present no exception; no AC. Kirillov authorship correction is accepted; mathematics and contracts remain unchanged. Verdict: `accepted_repair`; repair confidence 1.

## lem-hh-type-a-finite-hecke-basis-in-multiplicative-normalization

Checked Statement and all five steps against the generic Coxeter standard basis, multiplicative normalization part 4, presentation/base-change parts 1–3, Laurent monomial basis, type-A identification, Matsumoto part 1 and free-presentation quotient. Equal braid lengths justify scaling, and the inverse map sends U_i to v^{-1}(1 tensor T_i). R_v=R_0 plus vR_0 gives psi plus psi, so both injectivity and surjectivity descend without a flatness theorem. Arbitrary commutative base change includes the zero ring; n=2 and the identity reduced word are valid. No AC. Reader tensor-order repair is complete. Published length-operator omission is immediate nonfatal polish, independently closed in the report, not an unmet substantial prerequisite. Verdict: `accepted_repair`; repair confidence 1.

## reader:12:1 — published length-operator supplier

`lem-hh-commuting-left-right-hecke-length-operators`, Proof 1.4/2.1: `confirmed_nonfatal`. The proof omits the short explanation that its six cases exhaust possibilities. Put q=ell(x). In either mixed-sign case, ell(sxt) belongs to both {q,q+2} and {q-2,q}, hence equals q by F1 applied on the two sides. With equal signs, F1 allows exactly q and q+2 (both increasing) or q-2 and q (both decreasing). Thus the six configurations are exhaustive. All six displayed operator expansions agree; in the two equal-sign middle cases the local two-length lemma 1.3 and conjugacy parameter rule give sx=xt and u_s=u_t. Quadratic, braid and reduced-product arguments also check, including the empty word. The generic standard basis proof uses these operators to evaluate a finite relation at e_1, and the owned finite-basis lemma uses precisely that standard basis. The omitted sentence cannot affect its conclusion. Lusztig Proposition 3.3 uses the same six cases.

Published source remains read-only. Owner strategy: optionally insert the intersection-of-two-length-sets calculation before the case split, then perform ordinary published repair maintenance. No Statement change, consumer repair or withdrawal is needed. This is a closed nonfatal finding disposition with pending published editorial work, not a claimed published repair. Historical observed and pre digests remain as supplied by scope; the finding still describes the current proof, so no repaired-history inference is required.

## def-hh-type-a-affine-bernstein-presentation

Checked Definition and all five proof steps against the divided-difference definition, free associative quotient lemma Statement parts 1–3 and normalization part 4. The quotient does not assume coefficient injection. D_i(X_i)=-X_{i+1}, D_i(X_{i+1})=X_{i+1}, and distant values vanish. Product closure and the inverse formula extend the relation to every Laurent monomial, then by linearity to A. Multiplication by T_i and cancellation of the unit Q give both directions of the compact-relation equivalence; T_i^{-1}=Q^{-1}(T_i-(Q-1)). n=2 has no adjacent braid triple, and zero Laurent expressions obey the relation. No AC or specialization assumption. Kirillov title correction accepted. Verdict: `accepted_repair`; repair confidence 1.

## def-hh-type-a-rational-skew-group-algebra

Checked Definition and all four steps against the already reviewed Laurent-domain statement and localization lemma Statement part 3. Automorphisms preserve nonzero denominators; cross-multiplication gives independence of representatives and w^{-1} gives the inverse. On three pure symbols both associations give a w(b) (wv)(c)[wvu]; distributivity extends this to finite sums, including empty support. The identity, formal K-basis and action on K are correct. Multiplication is skew in the second K-coefficient; the finite-sum extension is distributive, not a claim that K is central. No faithfulness is asserted or needed here. n=2 and unit coefficients are valid; no AC. Kirillov title correction accepted. Verdict: `accepted_repair`; repair confidence 1.

## lem-hh-demazure-lusztig-operators-satisfy-affine-relations

Checked all seven proof steps against the presentation, divided differences, rational skew product and Laurent localization suppliers. Recomputed c(z)+c(z^{-1})=Q-1, d(z)=Q-c(z), d(z^{-1})=1+c(z), and all quadratic coefficients. For adjacent r,u, (Q-1)-c_r-c_u=(Q-1)(ru-1)/((1-r)(1-u)), so the crucial identity with c_ru is exact. Independently expanding the eight choices in each triple product gives the six stated coefficient pairs; the scalar difference factors as written, and the s/t pairs reduce to the same identity. Distant coefficients are fixed by the other permutation. Distinct Laurent monomials make denominators and d(r_i) nonzero over R0. The cross-relation and preservation of A follow directly, giving the quotient homomorphism. n=2 has no adjacent braid obligation, f=0 works, no AC. Kirillov attribution repair accepted; no mathematical edit needed. Verdict: `accepted_repair`; repair confidence 1.

## thm-hh-affine-type-a-bernstein-pbw

Checked all six steps and six supplier interfaces. Lexicographic induction on T-count then out-of-order T/Laurent pairs terminates: the swapped term decreases inversions and every correction loses a T even if its Laurent expansion is longer. The full Laurent relation is established in the presentation supplier Proof 2.1, before use here. The finite Hecke presentation maps to H without assuming injection. In each reduced-word operator expansion, omitting a reflection has length below ell(w); the unique full reflection choice has nonzero product of automorphic images of d_i. For any nonzero finite relation, comparing a maximal-length group coefficient eliminates every other support term. This proves independence and Laurent injection without assuming either initially. Universal free bases then tensor to arbitrary R0-algebras, including rings with zero divisors and the zero ring; no specialized rational denominators or AC are used. Identity/empty reduced word has coefficient 1. Kirillov title repair accepted; his deferred independence is supplied locally. Verdict: `accepted_repair`; repair confidence 1.

## thm-hh-affine-type-a-center

Independently checked Statement, all four proof steps and five actual suppliers. Commutation with all X_j forces a nonzero skew coefficient to fix every distinct variable, hence have identity permutation support. A maximal positive-length PBW term has a unique nonzero leading group coefficient, so a central element lies in A. Comparing the distinct basis vectors T_{s_i} and T_id then forces each adjacent invariance; conversely invariant Laurent polynomials commute with A and all T_i. Both inclusions hold over R0, with no claim about specialized centers, no division by Q-1 and no AC. Confirmed refuter citation issue: F1 proves A into H, not A into K. Added F5 from the existing Laurent-domain dependency, used it at both sites and synchronized contract citations/derivations. Clarified the identity basis notation in step 3.1. No Statement/Definition/deps change or stale judge existed. Reader Kirillov title correction retained. Verdict: `amended_repair`; repair confidence 1.

## Manifest and evidence synchronization

The current manifest for `def-hh-type-a-rational-skew-group-algebra` falsely called the skew group algebra a K-algebra. Under the library central-coefficient convention this is false: [s_i]X_i=X_{i+1}[s_i], whereas centrality would give X_i[s_i], and the distinct variables remain distinct in K. Corrected only the manifest summary to an R0-algebra with underlying K-vector space. The existing Definition already specifies exactly that skew multiplication; its interface is unchanged. Clarified the proof's finite-sum distributivity and central R0 coefficients, synchronized the corresponding contract derivation/boundary evidence, and amended its touched verdict to `amended_repair`. This is a confirmed nonfatal manifest accuracy defect, separately ledgered. No outside consumer needs a changed interface. The two stale Cherednik titles in the owned coverage evidence now name Kirillov; stable source IDs and historical fetch records remain unchanged.

Center contract check initially rejected `source_section: Proof` because the contract schema permits source claim sections only. Corrected F5's locator to Definition (the fraction-field quotient clause), whose full well-definedness argument was independently read in Proof 1.1–2.1. This mechanical schema correction creates no defect row. The two original inaccurate citations are a genuine nonfatal defect and have their own row.

## Final checks and disposition

All commands below exited 0 after final edits:

- `node tools/tsx-run.mjs tools/reflow.mts items/def-hh-type-a-rational-skew-group-algebra.md items/thm-hh-affine-type-a-center.md`: both unchanged.
- `node tools/proof-contract.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-12.proof-contracts.json --strict`: 11/11 items; zero errors or warnings.
- `node tools/risk-report.mjs research/hopf-hecke-unfinished-15-2026-10-15-batch-12.proof-contracts.json`, followed by the same command with `--require-reviewed`: seven current HIGH/CRITICAL reviews complete, zero errors. Center is now CRITICAL because the explicit fraction-field fact changes the heuristic score; its full review is complete.
- `node tools/tsx-run.mjs tools/precheck.mts` on the seven touched paths: 7 checked, 0 failing.
- `node tools/rendercheck.mjs` on the same seven paths with `--quiet`: all seven parse and render without error.
- Final single batched `node tools/proof-layout.mjs` on all seven touched paths: 7 items, 36 steps, 0 defects.
- `node tools/defect-ledger.mjs validate --run hopf-hecke-unfinished-15-2026-10-15`: 26 current run rows, 0 errors (includes other batches). This worker appended ten closed rows through the tool's serialized append/render path; generated view refreshed.
- Exact local obligation/ledger cross-check: 9 unique decisions, exactly the 7 touched plus reader:12:1 and refuter:12:1, 10 distinct closed rows; each finding references exactly one row and every decision-row link is reciprocal.

The published ledger update acquired `research/.published-consumer-ledger.lock` exclusively, reread/merged under the lock, added one deduplicated A-P index row and synchronized that class count, then removed only its own lock. The owned consumer record was appended to `briefs/tasks/frontier-dependency-ledger.md`. No published carrier was changed. The modified skew empty-support boundary no longer retains the old hash-bound template-review annotation; the current mathematical/risk review covers its corrected distributivity wording. No verification.judge record was present in either locally amended item.

Final raw carrier hashes (engine decision stamping remains deferred to the engine):

- `def-hh-type-a-affine-bernstein-presentation`: `a115cc455001f4b7b1ef01ed702ec6c6e66581f90dd1b9fd13ed75cdce431ef9` (reader-post bytes retained).
- `def-hh-type-a-rational-skew-group-algebra`: `2fad6ed4cb29b1c98ffd1b2838b455ffbb6e008c3b73d55bddb0745b91bd5df6` (amended locally).
- `def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences`: `1d7ceb342d7db0c8d0a26b276498895ef1c8ecbbb45935c862b95e82d6c775c9` (reader-post bytes retained).
- `lem-hh-demazure-lusztig-operators-satisfy-affine-relations`: `ea2c8713de1606cc470862454ef09d771d4f78e0e090ce3d2bcb26b98bcb31ea` (reader-post bytes retained).
- `lem-hh-type-a-finite-hecke-basis-in-multiplicative-normalization`: `de5c9036de6f0122a9f29cbded816467a5d20038d73aa6c5be1cc8ff1244cb2f` (reader-post bytes retained).
- `thm-hh-affine-type-a-bernstein-pbw`: `789ecc44edd1e0e2b8297363a3a09ca08c515daaf0886cf73dba218af6fbc6a7` (reader-post bytes retained).
- `thm-hh-affine-type-a-center`: `3d7ba998918b197387b92771d880743408c9e6d44bf8e8f6e94daa31f52aa705` (amended locally).

No substantial mathematical blocker or unresolved escalation remains in this dispatch. The one published omission has a closed nonfatal finding disposition and a pending owner editorial strategy; no repair of that published item is claimed. No Statement/Definition or actual prerequisite interface changed, so no supplier-driven consumer amendment or withdrawal is required. No unrelated source, page or other batch carrier was edited; no new item or page was created. No independent review, judge cycle, hash stamping, full gate battery, publication or engine transition was initiated. The engine owns current-hash stamps and closure gates.
