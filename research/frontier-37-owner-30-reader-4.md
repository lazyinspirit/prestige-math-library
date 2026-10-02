# Step 5a reader report — batch 4

Run: `frontier-37-owner-30`  
Batch: `4`  
Role: independent reader

## Opened inventory

Read the batch manifest `research/frontier-37-owner-30-batch-4.pages.json`,
the corresponding batch proof contracts, and both listed pages:

- A page: `library/number-theory/cyclotomic-arithmetic-and-reciprocity-via-frobenius.md`
- B page: `library/number-theory/cyclotomic-arithmetic-and-reciprocity-via-frobenius-examples.md`

Read all 31 assigned item files:

- A-page items: `def-conductor-of-a-cyclotomic-field`,
  `lem-prime-power-cyclotomic-integral-structure`,
  `lem-coprime-discriminant-compositum-integral-basis`,
  `thm-cyclotomic-ring-of-integers`,
  `thm-discriminant-of-a-cyclotomic-field`,
  `cor-total-ramification-in-a-prime-power-cyclotomic-field`,
  `lem-monogenic-prime-factorisation-by-polynomial-reduction`,
  `lem-arithmetic-frobenius-on-a-cyclotomic-field`,
  `thm-prime-factorisation-in-a-cyclotomic-field`,
  `cor-cyclotomic-ramification-criterion`,
  `thm-conductor-of-a-full-cyclotomic-field`,
  `cor-unramified-prime-decomposition-in-a-cyclotomic-field`,
  `cor-complete-splitting-in-a-cyclotomic-field`,
  `def-quadratic-gauss-sum-in-a-cyclotomic-field`,
  `lem-galois-action-on-the-quadratic-gauss-sum`,
  `thm-quadratic-gauss-sum-square`,
  `thm-quadratic-subfield-of-a-prime-cyclotomic-field`,
  `thm-quadratic-frobenius-restriction-identity`,
  `cor-quadratic-reciprocity-via-frobenius`,
  `cor-first-supplement-via-cyclotomic-frobenius`, and
  `cor-second-supplement-via-cyclotomic-frobenius`.
- B-page items: `ex-reduced-conductor-of-q-zeta-six`,
  `ex-arithmetic-of-q-zeta-five`,
  `ex-prime-decomposition-in-q-zeta-eight`,
  `ex-prime-decomposition-in-q-zeta-twelve`,
  `ex-quadratic-gauss-sum-for-three`,
  `ex-quadratic-gauss-sum-for-five`,
  `ex-quadratic-subfield-of-q-zeta-seven`,
  `ex-frobenius-restriction-for-p-five-q-three`,
  `ex-second-supplement-from-q-zeta-eight`, and
  `cex-gauss-sum-sign-without-a-complex-embedding`.

Also opened the required prerequisite page
`library/number-theory/decomposition-inertia-and-frobenius.md` and the
dependency statements central to the audit: the published
`thm-number-field-integral-ideal-factorisation-in-zf`,
`thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field`,
`thm-decomposition-and-inertia-in-towers`,
`cor-orders-of-decomposition-and-inertia-groups`,
`thm-unramified-frobenius-element-exists-uniquely`,
`cor-the-galois-group-of-a-rational-cyclotomic-field`,
`thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity`,
`cor-splitting-fields-are-unique-up-to-base-isomorphism`,
`def-arithmetic-frobenius-coset`, and `def-cyclotomic-extension`.

## Repairs and evidence

1. **A-page prime-factorisation summary.** The original page summary said the
   monogenic lemma identified ideal exponents “without invoking a general
   ideal factorisation theorem.” The current assigned lemma explicitly applies
   the published choice-free ideal-factorisation theorem for existence, then
   compares local nilpotency indices with polynomial multiplicities
   (`lem-monogenic-prime-factorisation-by-polynomial-reduction`, proof steps
   1.2–6.1 and its Supplier route remark; published
   `thm-number-field-integral-ideal-factorisation-in-zf`, proof steps 1.2,
   2.2–7.2). I revised the page to distinguish the coprime-discriminant proof
   of the general ring-of-integers result from the monogenic prime
   factorisation argument and to state its actual supplier route.

2. **A-page Frobenius summary.** The page said quadratic reciprocity and both
   supplements followed from the Frobenius power map “alone.” The current
   reciprocity corollary also uses the first supplement, while the two
   supplementary corollaries use Euler’s criterion
   (`cor-quadratic-reciprocity-via-frobenius`, `cor-first-supplement-via-cyclotomic-frobenius`,
   and `cor-second-supplement-via-cyclotomic-frobenius`). I revised the page
   summary to state these inputs.

3. **Second-supplement fact F3.** In
   `items/cor-second-supplement-via-cyclotomic-frobenius.md`, F3 described the
   parity of $(q^2-1)/8$ as the “number of factors of 3” in a residue class,
   which is undefined. I replaced that phrase with the explicit parity table:
   residues $1,7$ give an even exponent and residues $3,5$ give an odd
   exponent. This is exactly the table used by the proof’s step 1.2 and the
   displayed Frobenius signs in step 4.1.

The batch-4 proof-contract entry for the changed corollary was regenerated
from the current item. Its linked citations and numbered proof steps were
unchanged. No `verification.judge` record was present in that item. Required
item checks completed:

- `node tools/tsx-run.mjs tools/reflow.mts items/cor-second-supplement-via-cyclotomic-frobenius.md` — reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts items/cor-second-supplement-via-cyclotomic-frobenius.md` — PASS.
- `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-4.proof-contracts.json --strict --json` — all 31 entries checked; no errors or warnings.

## Source checks

- J. S. Milne, *Algebraic Number Theory*,
  <https://www.jmilne.org/math/CourseNotes/ANT.pdf>: Proposition 6.2 and its
  proof (Ch. 6, pp. 96–98) state the prime-power ring of integers, the
  factorisation of $(p)$ by $1-\zeta$, and the prime-power discriminant;
  Theorem 6.4 and Remark 6.6 (Ch. 6, pp. 99–101) give the cyclotomic ring of
  integers, reduced-index ramification exception, and discriminant formula.
  Theorem 3.41 and proof (Ch. 3, pp. 62–63) state the monogenic polynomial
  reduction factorisation. Example 8.18 (Ch. 8, p. 144) identifies arithmetic
  Frobenius with $\zeta_n\mapsto\zeta_n^\ell$ and its order with
  $\operatorname{ord}_n(\ell)$; Example 8.19 and the following quadratic
  reciprocity application (Ch. 8, pp. 144–145) give the quadratic Frobenius
  sign comparison.
- Jerry Shurman, *Math 361 Ninth Lecture*,
  <https://people.reed.edu/~jerry/361/lectures/lec09.pdf>, sections 2–4,
  pp. 5–8: the finite Gauss-sum square calculation, its Frobenius action in
  quadratic reciprocity, and the second-supplement sign computation.

These source passages support the cited formulas and conventions; the audited
in-flight proofs also give their own finite derivations where used.

## Uneditable defects

None found. The published ideal-factorisation dependency was inspected at its
current file; its statement and local nilpotency/layer argument supply the
facts used by the assigned monogenic lemma. No published defect is being
reported.

## Page verdicts

- A page: mathematically coherent after the two summary repairs above. Its
  reduced-index convention, discriminant and prime decomposition summary, and
  Frobenius/reciprocity summary agree with the assigned items.
- B page: mathematically coherent. Its conductor-six, prime-splitting, Gauss
  sum, quadratic-subfield, Frobenius-restriction, and sign-counterexample
  summaries agree with the ten assigned examples.

## Blockers and coverage limitation

No blocker remains for this batch. All listed pages and assigned items were
read, and the complete batch proof-contract file passed its scoped check. I did
not recursively audit the proofs of every item in the full 86-item distinct
direct-dependency set or their transitive dependencies; I opened the current
dependency statements and source passages central to the audited inferences
and repairs.
