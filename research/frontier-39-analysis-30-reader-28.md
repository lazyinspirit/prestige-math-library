# Reader 28 — frontier-39-analysis-30, batch 28

## Scope and outcome

Independent Step 5a review of the current authored mathematics: two pages, fourteen A items and five B items. Read published suppliers before the assigned consumers, and the assigned items in dependency order. Nine assigned draft items were repaired. No published item, other batch, page prose, plan, engine state, or decision stamp was changed. One B-page summary defect remains outside the reader's editing authority. No withdrawal is proposed.

The finite transform identities and radix-two correctness/complexity proofs close using finite sums, the complex field/exponential results, rational-power laws and induction. The mixed-radix remark remains explicitly recorded without a local proof. No LCA inversion or Pontryagin-duality result is needed by these finite proofs.

## Opened inventory

Guidance: CLAUDE.md, README.md, SCHEMA.md, briefs/reader.md, and the relevant Step-5/source/contract clauses of WORKFLOW.md. Opened the exact batch manifest, batch proof contracts, cross-batch dependency record, and the beginning of the batch author notes as context only. The on-disk run status was also inspected; no run transition was attempted.

Pages, both read in full:

- `library/fourier-analysis/finite-fourier-analysis-and-the-fast-fourier-transform.md`
- `library/fourier-analysis/finite-fourier-analysis-and-the-fast-fourier-transform-examples.md`

All assigned items, read in full (order below groups suppliers before consumers):

- `items/lem-orthogonality-of-characters-on-a-finite-cyclic-group.md`
- `items/def-unitary-discrete-fourier-transform-on-z-mod-n.md`
- `items/def-counting-inner-product-on-complex-functions-on-z-mod-n.md`
- `items/def-cyclic-convolution-on-z-mod-n.md`
- `items/thm-finite-fourier-inversion.md`
- `items/thm-finite-parseval-and-plancherel.md`
- `items/lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product.md`
- `items/lem-dft-squares-to-reflection-and-has-fourth-power-identity.md`
- `items/def-unnormalised-engineering-dft-and-conversion.md`
- `items/lem-radix-two-even-odd-dft-factorisation.md`
- `items/def-recursive-radix-two-fast-fourier-transform.md`
- `items/thm-radix-two-fft-correctness.md`
- `items/thm-radix-two-fft-arithmetic-complexity.md`
- `items/rem-cooley-tukey-factorisation-for-composite-lengths.md`
- `items/cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding.md`
- `items/ex-unitary-dft-for-n-equals-one-and-two.md`
- `items/ex-cyclic-convolution-via-the-dft.md`
- `items/cex-radix-two-recursion-does-not-directly-apply-to-odd-length.md`
- `items/ex-four-point-radix-two-fft.md`

Published suppliers opened at the definitions/statements and relevant arguments used here (not a whole dependency-closure audit):

- `items/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity.md`
- `items/def-addition-and-multiplication-modulo-n.md`
- `items/def-canonical-natural.md`
- `items/def-complex-conjugate-real-imaginary-part-and-modulus.md`
- `items/def-complex-exponential.md`
- `items/def-complex-integer-powers.md`
- `items/def-congruence-modulo-an-integer.md`
- `items/def-counting-measure.md`
- `items/def-divides-in-z.md`
- `items/def-finite-sum.md`
- `items/def-finite-sum-in-a-commutative-monoid.md`
- `items/def-function-space.md`
- `items/def-group-power.md`
- `items/def-injection-surjection-bijection.md`
- `items/def-inner-product-space.md`
- `items/def-integers-modulo-n.md`
- `items/def-logarithm-to-a-base.md`
- `items/def-matrix-product-and-identity-matrix.md`
- `items/def-natural-logarithm.md`
- `items/def-natural-numbers.md`
- `items/def-rational-power.md`
- `items/def-real-and-complex-inner-product-space.md`
- `items/def-real-power.md`
- `items/def-vector-space.md`
- `items/lem-complex-conjugation-and-modulus-laws.md`
- `items/lem-congruence-is-an-equivalence-relation.md`
- `items/lem-finite-sum-laws.md`
- `items/lem-finite-sum-reindexing-and-fubini.md`
- `items/lem-int-cancellation.md`
- `items/lem-integer-multiples-agree-with-canonical-natural.md`
- `items/lem-power-laws.md`
- `items/lem-rational-power-laws.md`
- `items/lem-units-of-z.md`
- `items/thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse.md`
- `items/thm-complex-exponential-addition-and-real-extension.md`
- `items/thm-complex-numbers-form-a-field.md`
- `items/thm-division-algorithm-in-z.md`
- `items/thm-induction-principle.md`
- `items/thm-int-ordered-ring.md`
- `items/thm-integers-modulo-n-basic-algebra.md`
- `items/thm-kernel-and-fibres-of-complex-exponential.md`
- `items/thm-natural-logarithm-laws.md`
- `items/thm-real-power-agrees-with-rational-exponent.md`
- `items/thm-recursion.md`
- `items/thm-standard-representatives-modulo-n.md`
- `items/thm-eulers-formula.md`
- `items/thm-quarter-turn-values-and-shift-formulas.md`

## Source evidence

- [Taylor, Fourier Analysis](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf): read the transform pair and orthogonality argument in §11, (11.1)–(11.6), the convolution/kernel displays (11.30)–(11.31), §12's factorisation proof and cost discussion and iterative formulas through (12.23), and Exercise 4. His forward transform and convolution both include `1/N`; the intended intermediate is unnormalised. His general odd-branch twiddle in (12.9) is printed with the positive sign, inconsistent with (12.1) and the four-point factor in (12.6); implementing the negative-sign transform requires the inverse twiddle. Local proofs derive the signs independently.
- [MIT 18.310 lecture 23](https://math.mit.edu/~djk/18.310/18.310F04/23_finite_fourier.html): retrieved via HTTP after the browser open failed; read headings 3 and 4, including the complete coefficient-recovery and coefficient-halves factorisation arguments. The forward polynomial evaluation uses the positive-sign root; inversion of that root gives this batch's negative sign. Its worked four-coefficient example is over integers modulo 17.
- [Einsiedler–Ward, Appendix C](https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf): read the relevant C.3 passages, the translation proof of character orthogonality around Lemma C.7 (printed 434–435), Theorem C.8 (435), and the counting-dual paragraph after Theorem C.10 (436). The last locator was missing from the authored counting-inner-product reference.
- [Cooley–Tukey (1965)](https://www.cs.jhu.edu/~misha/ReadingSeminar/Papers/Cooley65.pdf): downloaded the scanned PDF and visually read printed 297–298, including the entire two-stage derivation (3)–(8). Set `R=r_2`, `S=r_1` and invert the primitive root to match the local statement. I did not independently read the remaining three printed pages; the inherited author locator's full-paper reading claim is not my coverage claim.

## Mathematical checks and repairs

1. `def-cyclic-convolution-on-z-mod-n`, Definition / Well-definedness: the claim that the index group is finite had no finite-cardinality supplier among its declared dependencies. Added `thm-standard-representatives-modulo-n` and the explicit cardinality conclusion `|Z/NZ|=N`. Corrected the Taylor source locator to describe the removal of his convolution factor `1/N`. This closes the prerequisite for the monoid sum without changing the convolution formula.
2. `lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product`, first Remark: the authored remark incorrectly said a `1/N` forward transform eliminates the factor for the same unnormalised convolution. With `h#=N^(-1/2) F_N h`, the proved identity gives `(f*g)#=N f# g#`; the factor disappears only for `f star g=(f*g)/N`. Replaced the remark by this calculation and made the source locator's normalisations explicit. The theorem and its three-step proof were unchanged.
3. `def-unnormalised-engineering-dft-and-conversion`, Taylor locator, concluding Definition paragraph, first Remark: obtained the raw transform directly by multiplying (12.1) by N, identified the printed general-recursion sign inconsistency, recorded MIT's root inversion for the sign, and removed the false assertion that this page's convolution lemma is stated for the engineering transform. Its conversion and inverse formulas were already correct and remain intact.
4. `lem-radix-two-even-odd-dft-factorisation`, Fact L2: `def-function-space` did not establish the real arithmetic identities or frequency periodicity attributed to it. Replaced that citation with explicit division using `N=2M`, `M>0`, and the period already supplied by F1. Removed the unrelated citation-contract row. Checked the quotient maps' well-definedness, cancellation, disjointness, coverage, exponential decomposition and sign change at `k+M`. Added an explicit source-sign caveat: the odd-frequency mirror of the negative-sign sum needs the inverse twiddle, while Taylor prints a positive twiddle.
5. `thm-radix-two-fft-correctness`, first Remark: the proof performs the successor step from `m` to `m+1`, using the hypothesis at level `m`, while the remark called it level `m-1`. Corrected the indexing. Checked the universal induction hypothesis, the length-one case, and the rational-power rescaling.
6. `cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding`, Fact L1, final step 3.1, first Remark: the transform lemma did not state the polynomial-coefficient interpretation attributed to it. Supplied that interpretation directly by finite distributive expansion and grouping pairs with `i+j=x` modulo `N`; removed the inaccurate citation-contract row. Corrected the false assertion that the length-four padded list is the number of coefficients in the linear product: `(1+z)^2` has three coefficients. Kept the four-point padded witness and explained its minimum padding threshold of three, with the degree formula restricted to nonzero polynomials. Direct calculations give cyclic `(2,2)` at length two and `(1,2,1,0)` at length four.
7. `cex-radix-two-recursion-does-not-directly-apply-to-odd-length`, Fact L2 and Remarks: removed the label “true claim” from the refuted assertion, corrected the confusing comparison of a half-size-domain injection with whole-group doubling, and exhibited the inverse of `2` for odd `N=2q+1` as `[q+1]`. Removed wording suggesting the radix-two recursion handles odd lengths. The explicit length-three permutations and refutation steps remain correct.
8. `rem-cooley-tukey-factorisation-for-composite-lengths`, Remark: the general two-factor decomposition was inaccurately attributed to Taylor's small-prime exercise; the description also omitted the length-R transform stage of the combination. Named Cooley–Tukey's exact derivation, the positive integer nontrivial factor hypotheses, the root-sign translation, and both stages. Kept the unproved/leaf status and did not assert an arbitrary-length complexity bound.
9. `def-counting-inner-product-on-complex-functions-on-z-mod-n`, Einsiedler–Ward source locator: corrected the page range and precise passage for counting measure to include printed 436. The local proof of the counting inner product, especially real nonnegative-sum definiteness, is correct without importing general Haar theory.

The unedited orthogonality proof includes the coincident-root case and derives its complex geometric identity rather than invoking a real-only sum result. Inversion verifies both compositions; Parseval correctly conjugates the exponentials and cancels the normalisation; the squared transform is reflection, including the length-one/two exceptions. The engineering convolution example has transforms `(2,1-i,0,1+i)`, product `(4,-2i,0,2i)` and inverse `(1,2,1,0)`. The four-point FFT formulas agree with direct evaluation for arbitrary complex coefficients. Its count is exactly sixteen in the expressly unoptimised per-output model: `T_1=4`, `T_2=2T_1+8=16`. Sharing twiddle products would be another operation model; the authored bound does not promise that optimisation.

Updated affected contracts, including downstream whole-Definition quotations after the two Definition repairs. Corrected inaccurate boundary evidence: the orthogonality geometric-identity step locator, the squared-transform small-length locators, the padding/zero description, and the four-point example's spurious reference to trailing-zero inputs. That example has arbitrary coefficients. No judge records were present on the nine edited carriers; none were created. Contract annotations and local checks are not judge decisions or mathematical certification.

## Uneditable finding and page verdicts

- A page `finite-fourier-analysis-and-the-fast-fourier-transform`: satisfactory after the assigned item repairs. Its page prose accurately describes the finite scope, conventions, reflection identity, power-of-two bound and operation-model exclusions. No page edit was needed.
- B page `finite-fourier-analysis-and-the-fast-fourier-transform-examples`: its five item arguments are satisfactory after repairs, but its final-paragraph summary requires correction. At lines 24–28, “Two further witnesses test the algorithm's hypotheses rather than its conclusion” includes the four-point recursion. `ex-four-point-radix-two-fft`, Verification 3.1, explicitly checks equality to direct DFT evaluation, hence tests the correctness conclusion; step 4.1 also checks the operation-count conclusion. The odd-length counterexample tests the length hypothesis. Replace the shared characterisation with these distinct roles. Recorded as a fatal false page claim under the dispatch's rule that a defective claim cannot be excused as a short proof omission; the underlying item theorems are unaffected. B-page prose is outside reader edit authority.

No defective published or other-batch item was identified in the supplier statements/arguments used here. The B-page summary is the sole remaining finding and the sole review handoff blocker.

## Validation and coverage limits

Reflow ran on each of the nine changed item paths and reported each unchanged. Precheck ran on each: all five proof-bearing items passed; the four definitions/recorded remarks returned “0 checked, 0 failing”, which is not a proof-format certification for those bodies. The strict batch contract check passed with 19/19 items, zero errors and zero warnings. Scoped rendercheck passed on exactly the nineteen assigned items and two assigned pages, including real KaTeX and renderer YAML parsing. A subsequent source-sign caveat caused focused reflow/precheck and rendercheck to be repeated successfully for the engineering definition and radix-two factorisation lemma, and the strict batch contract check again passed on all nineteen items. The final proof-layout command below ran after all item edits and reflow: nine items, 23 numbered steps, zero defects.

```bash
node tools/proof-layout.mjs items/def-counting-inner-product-on-complex-functions-on-z-mod-n.md items/def-cyclic-convolution-on-z-mod-n.md items/lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product.md items/def-unnormalised-engineering-dft-and-conversion.md items/lem-radix-two-even-odd-dft-factorisation.md items/thm-radix-two-fft-correctness.md items/cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding.md items/cex-radix-two-recursion-does-not-directly-apply-to-odd-length.md items/rem-cooley-tukey-factorisation-for-composite-lengths.md
```


These are local mechanical checks alongside this independent reading, not workflow gates or stamps. No numerical smoke test was run or claimed; the displayed finite calculations were checked directly. Foundational supplier statements and the arguments needed for these uses were opened, but their entire transitive closure was not re-audited. The context-only LCA prerequisite pages were not audited because no batch proof consumes their mathematical items. The source reading is limited to the relevant passages listed above, not entire books or the entire Cooley–Tukey paper. No uncertainty remains in the finite arguments reviewed here. The lead should resolve the B-page prose finding before closing this batch's review.
