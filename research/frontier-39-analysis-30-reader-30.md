# Reader 30 — batch 30, frontier-39-analysis-30

Independent Step 5a review completed. This report records mathematical review, repairs and local checks; it is not a judgment, publication audit or certification. Both current page bodies and all 21 assigned item bodies were opened. The Sobolev/Plancherel interfaces were read before the coordinate and summed Heisenberg arguments; the local continuation and rigidity suppliers before Hardy; and the finite Fourier interfaces before the finite support proof. Additional elementary supplier clauses were opened during the audit before the corresponding repairs. No published item, another batch, B-page prose, shared plan or engine state was edited.

## Page verdicts and outstanding finding

- **A: `uncertainty-principles-for-fourier-analysis` — sound after the repairs below.** The lower bound remains on the full stated H1/spatial-moment domain, with equality classification quoted only on Schwartz functions. The compact-support and Hardy conclusions retain their original strength. The summary now describes coordinate slices and the actual direct Hardy proof, and explicitly distinguishes Gaussian decay's implication of finite moments from equivalence of localization hypotheses.
- **B: `uncertainty-principles-for-fourier-analysis-examples` — item mathematics sound after local repairs; summary wording needs Step 5b correction.** Line 35 calls the delta and constant functions “the two extremisers”. This reads as an exhaustive equality claim, which the examples do not prove and which is false for composite lengths. At N=4, the indicator h of {0,2} has unitary transform F4 h=h, hence support product 2·2=4; it is neither the displayed delta nor the constant function. Tao's finite-group paper, §1, printed p. 2, also explicitly records subgroup indicators as equality cases. Replace the phrase with “two extremisers” or “two examples of extremisers”, unless the lead supplies a qualified classification. This potentially exhaustive wording is the sole uneditable finding and is routed as `overstrong-title-or-statement`, fatal under the rule for defective statements. B-page prose was left untouched.

No withdrawal is proposed. The remaining blocker is the lead's disposition of that B-page wording. No unresolved mathematical uncertainty remains in the repaired arguments reviewed here.

## Repairs and evidence

1. **`def-spatial-and-frequency-centres-and-variances`, Well-definedness and source locator.** The displayed absolute-product Cauchy–Schwarz estimate was described as pairing |x_j||f| with the complex f. Corrected the second function to |f|, so its actual pairing equals the numerator being bounded. Also corrected the Laugesen Heisenberg locator: Example 24.5 and Remark 24.6, printed pp. 145–146; Theorem 24.2 is Benedicks' support theorem, not the Heisenberg result. Nonzero norms, representative independence, integrability of means and shifted second moments were checked against the opened L2 and Plancherel interfaces.

2. **`lem-compact-support-gives-an-entire-fourier-laplace-transform`, F5, original Proof steps 4.1–5.1 and bibliography.** Its choice-free statement used an arbitrary-sequence limit to infer a full complex derivative without establishing the necessary sequential criterion. Replaced that route by a uniform exponential-remainder estimate on bounded K, followed by the integral triangle inequality. The remainder is bounded by 2π S ε exp(2π S |Im w|)||g||1; letting ε decrease proves the derivative directly. F5 now explicitly restricts the suprema to nonempty K, with empty K still handled in step 1.1. Removed the unrelated Gaussian-continuation thesis citation and pointed the Sheagren compact-support reference to the observation after Lemma 5.1, printed p. 11. The n-dimensional slice proof is local.

3. **`lem-separately-holomorphic-vanishing-on-a-real-box-is-zero`, F3 and bibliography.** The fixed point p+ε/2 was said to lie in every neighbourhood of p. Replaced it by p+min(ε,r)/2 for neighbourhood radius r. This supplies the actual accumulation point needed by the opened identity theorem. The finite induction and arbitrary-interior-point argument were checked. Removed the unsupported thesis identity-theorem locator and identified the one-variable observation in Sheagren after Lemma 5.1; the iteration is proved locally.

4. **`thm-qualitative-compact-support-uncertainty-principle`, F1, F5 and original steps 1.2–3.1.** The proof falsely put a point with nonzero transform outside K2, despite the hypothesis that the transform vanishes there. Compactness itself supplies a bounded K2 and a nonempty open complement, independently of nonvanishing. Rebuilt the short proof around this fact, real-box rigidity and L1 Fourier uniqueness. The proposed box had coordinate half-length ε/2, whose Euclidean corner distance is sqrt(n)ε/2; corrected it to ε/(2 sqrt(n)). Empty and singleton supports are included. Corrected the source locator to Sheagren's actual compact-support observation.

5. **`lem-gaussian-decay-gives-an-entire-fourier-laplace-transform`, bibliography only.** The thesis's printed/PDF page ranges did not locate the cited argument. Corrected the locator to §3.2, Lemmas 3.2.2–3.2.3, PDF pp. 35–36, and identified the local coordinate-slice extension. Independently checked square completion, the polynomial-Gaussian majorant, representative changes, the C=0 case and dominated complex difference quotients under its stated Countable Choice hypothesis. The authored mathematics needed no change.

6. **`lem-hardy-entire-growth-rigidity`, F6, dependency and thesis locator.** The complex-field theorem does not supply polar representation. Added the exact opened polar-form theorem and distinguished it from the Cartesian field calculations. Corrected the thesis locator to PDF pp. 35–40. The proof's two sectors, opposite signs in q_delta, phase-centered damping, vertex continuity, uniform infinity control, removal of epsilon/theta/delta, lower-half-plane reflection and Liouville conclusion were independently checked. In particular tan(theta)>π/(2a delta) gives the far-ray bound, and (2+epsilon)theta<π makes the damping constant positive. No change to the lemma's conclusion or sector argument was needed.

7. **`lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp`, steps 2.1–3.1 and contract endpoints.** The exponent comparison was incorrectly strict at ξ=0; made it non-strict. A nonzero witness alone disproves vanishing, but not the critical classification: added the nonconstant ratio exp(-π(c-a)|x|²), with values at 0 and a unit coordinate vector and continuity excluding an almost-everywhere constant ratio. The contract no longer incorrectly calls the bound strict at every frequency. The Gaussian supplier supplies all integrability and normalization constants.

8. **`thm-support-measure-uncertainty-inequality`, bibliography.** The old Sheagren and Laugesen locators did not state this product bound. Replaced them by Donoho–Stark, §3 Theorem 2, equation (3.1), printed pp. 909–911: zero concentration errors give |T||W|≥1 on the line. The n-dimensional elementary Hölder/transform-supremum/Plancherel proof remains local and was checked independently. In particular the real Hölder supplier is applied to |f| and 1_E, finite support makes f integrable, integral/Plancherel agreement applies, and division uses the nonzero class norm.

9. **`cor-dimensional-heisenberg-uncertainty-inequality`, bibliography only.** Replaced the incorrect Heisenberg attribution to Laugesen Theorem 24.2 by Example 24.5 and Remark 24.6(2)–(3), printed pp. 145–146. The weak-derivative Fourier multiplier gives ||D_j f||2=2π||ξ_j fhat||2; summing the local coordinate estimate and applying finite-tuple Cauchy–Schwarz gives n/(4π) with no additional smoothness assumption. The full H1 domain is retained.

10. **`thm-hardy-gaussian-uncertainty-principle`, Statement, Given, proof and contract.** The original induction hypothesis asserted an arbitrary separately holomorphic growth-rigidity theorem, although the stated theorem only quantified over Fourier transforms of Gaussian-bounded functions. Replaced this unproved strengthened induction by direct application of the already proved one-variable rigidity to each coordinate slice with all other coordinates real. Critical factors iterate in finitely many coordinates; real-box rigidity extends the factorization to complex arguments, and L1 uniqueness returns f with scalar fhat(0)a^(n/2). Supercritical slices vanish directly. Added n≥1 explicitly to the Statement, removed obsolete y-prime notation and corrected the claim that the choice-free rigidity lemma carries Countable Choice. Adopted the precheck's canonical phase numbering 1.1/2.1/3.1/4.1. No dichotomy or equality claim was weakened.

11. **`rem-proof-cost-and-complex-analysis-interface-for-hardy-uncertainty`, Remarks and contract.** Its “precise” description named the obsolete auxiliary h_M rather than the phase-centered h_epsilon and q_delta of the current supplier. Replaced it with the actual sector-dependent construction and its uniform angular bound, then described the coordinate-slice use. Clarified that Tao's cited real-variable proof is non-sharp; the survey's §1 also records a complete sharp real-variable proof, so this is not a universal limitation of real-variable methods.

12. **`thm-finite-dft-support-product-uncertainty`, F1 and step 1.2.** Applied counting Cauchy–Schwarz explicitly on the supplier's space C^(Z/N), to |f| and 1_S, rather than silently changing that interface to functions on S. Explained the finite complex triangle inequality by induction from the opened modulus-laws lemma. Independently checked the N^(-1/2) normalization, nonempty transform support through Parseval, division by ||f||2² and the N=1 case.

13. **`cex-finite-variance-is-not-the-same-as-compact-support`, F2/F5, steps 1.1–3.1 and contract.** The claimed frequency-moment majorant reused the full Gaussian exponent after bounding the polynomial factor, effectively asking a quadratic polynomial to be uniformly bounded. Replaced it with the exact supplier's polynomial-times-Gaussian integrability clause. Added integral/Plancherel agreement explicitly. Added the opened Heine–Borel and box-measure clauses to establish that compact sets have finite measure and Rn has infinite measure. The strictly positive Gaussian and transform cannot vanish a.e. off any finite-measure set. Zero means are computed by integrable reflection, not assumed.

14. **`ex-gaussian-attains-heisenberg-equality`, Given, F4/F6 and steps 2.1–3.1.** Removed pre-assumed zero means and moments from Given. Added integral/Plancherel agreement and the integer-order Fourier Sobolev characterization, with its exact reverse construction at k=1 in supplier Proof step 1.3. The computed frequency moment now establishes H1 before applying the local inequality. Parameter differentiation is performed on an open neighbourhood with compact closure in (0,infinity), where a single integrable derivative majorant is available. The variances n/(4πa) and na/(4π), product n²/(16π²), and λ=2πa remain unchanged.

15. **`ex-hardy-critical-and-subcritical-gaussian-regimes`, F5, step 1.3 and contract.** Dividing the Gaussian transform bound produces exp(π(b-1/c)|ξ|²), not exp(π(1/c-b)|ξ|²). Corrected the sign and explicitly ruled out b>1/c by divergence, retaining c≤1/b. Added the unit-cube measure argument that a full-measure set is unbounded. Corrected the contract's false assertion that no nonvanishing witness exists whenever ab≥1: critical witnesses do exist at ab=1.

16. **A-page summary.** Corrected the obsolete support-complement and Hardy-induction descriptions, described the continuation through entire coordinate slices without requiring an unstated several-variable holomorphy theorem, and stated the Gaussian-decay implication of finite moments explicitly.

17. **Proof contracts.** Regenerated citations and derivations for the 13 changed proof-bearing items, using current supplier statements; removed their obsolete routine-step entries and updated all affected boundary claims and step references. Also corrected two contract-only inaccuracies: the quoted Heisenberg inequality has equality for the zero function even though its nonzero classification excludes c=0; the singleton-support refutation does not prove or need DFT invertibility, since the positive support-product bound already excludes empty supports. The remark's contract now describes the actual auxiliary function. No acceptance record was added. All 15 edited item carriers had no `verification.judge` record, and the final check found none to retain or remove.

## Read-only assigned items

The complete current bodies of `lem-position-derivative-commutator-estimate`, `lem-centering-by-translation-and-modulation-preserves-the-variance-product`, `rem-heisenberg-uncertainty-is-owned-by-functional-analysis`, `rem-uncertainty-principles-measure-different-notions-of-localisation`, `ex-finite-dft-delta-and-constant-extremisers`, and `cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one` were reviewed without item edits. Their current mathematical claims and proofs supplied no additional defect. The cutoff argument correctly proves conjugate weak derivatives from bilinear tests, uses compactly supported W1,2 integration by parts, and controls both escaping annulus and derivative-product tails. The centering argument extends L1 covariance to Plancherel classes by Schwartz density rather than applying the L1 law directly to an arbitrary L2 function. The finite examples use the orthogonality supplier with parameters 0,k to obtain the negative-sign sum. The Heisenberg remark quotes the exact opened published theorem and does not import its Schwartz equality classification into the enlarged local H1 domain.

## Authoritative source sections actually inspected

- [Laugesen, Harmonic Analysis Lecture Notes](https://arxiv.org/pdf/0903.3845), chapter 24, printed pp. 141–146: Proposition 24.1(b), Theorem 24.2 (Benedicks), Example 24.5 and Remark 24.6. The labels resolve the inaccurate Heisenberg and support-product references.
- [Sheagren, Uncertainty Principles with Fourier Analysis](https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf), Theorem 3.1 and equations (3.3)–(3.12), Lemma 5.1 and its following compact-support observation, Theorem 5.2's complete argument and Corollary 5.3. The support-product theorem is not supplied by §3.
- [Tao, Hardy's uncertainty principle](https://terrytao.wordpress.com/2009/02/18/hardys-uncertainty-principle/), Theorems 1–2 and complete §1 complex-variable proof. The nested sector perturbations justify the local rigidity route; the weak real-variable statement has a larger absolute threshold.
- [Lindell's thesis](https://lup.lub.lu.se/luur/download?func=downloadFile&recordOId=9206853&fileOId=9206856), §3.2, relevant continuation/growth lemmas and complete sector-bound argument plus the critical-case continuation, PDF pp. 35–40. PDF extraction corrupts some numeral glyphs; references were corrected using PDF page positions and section content, not guessed printed-page numbers. The screenshot endpoint failed, so no screenshot reading is claimed for this source.
- [Fernández-Bertolín–Malinnikova survey](https://arxiv.org/pdf/2210.03369), §1 Theorem 1, higher-dimensional discussion and real-variable proof discussion, printed pp. 1–3. Its unitary angular-frequency convention was distinguished from this library's 2π convention.
- [Tao, An Uncertainty Principle for Cyclic Groups of Prime Order](https://arxiv.org/pdf/math/0308286), §1, printed pp. 1–2: the complete general finite-group product-bound proof and subgroup equality discussion. Prime-order sum refinements are not consumed.
- [Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf), §11, formulas (11.5)–(11.6) and Proposition 11.2's character-orthogonality proof. This is context for the finite transform interface; the product-bound source is Tao.
- [Donoho–Stark, Uncertainty Principles and Signal Recovery](https://web.stanford.edu/dept/statistics/cgi-bin/donoho/wp-content/uploads/2018/08/UPSR.pdf), §3 Theorem 2 and complete proof, printed pp. 909–911. The PDF is scanned; those three pages were rendered locally and visually read. Its exact zero-error specialization supplies the continuous support bound on the line; the local proof supplies arbitrary n. The Berkeley mirror returned 403 and was not relied on.

## Validation and limitations

Every one of the 15 edited item paths was passed to `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and then `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`. Final results: exit 0 for each; 13 proof-bearing items report PASS, while the definition and remark have no numbered proof to check. An initial Hardy precheck required canonical phase renumbering; that was adopted, its contract regenerated, and its focused reflow/precheck rerun successfully. An earlier output-capture run was repeated to recover complete check evidence after yielding without retaining its session handle.

`node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-30.proof-contracts.json --strict` finished with 0 errors, 0 warnings, 21/21 items checked. Scoped `rendercheck` on the 15 edited items and both assigned pages finished with exit 0: all 17 files' math and YAML parse under the actual renderer. A mistaken `rendercheck --help` invocation began an unscoped read-only scan; it was interrupted (exit 130) and none of its output is used as coverage or validation evidence.

After all item edits and formatters, one explicit batched `node tools/proof-layout.mjs` command on all 15 changed item paths returned exit 0: **15 items, 56 steps, 0 defects**. No item edit followed that check.

Supplier review checked the exact consumed definitions/statements and relevant proof clauses, not every proof in their recursive published dependency graph. The assignment's current item mathematics was read in full; the scaffold notes were consulted only in part, and their truncated historical narrative was not used to accept any claim. No rendered evidence bundle was supplied at an exact task path, so current source files were used. No source access failure leaves a necessary local argument unsupported. The remaining B-summary ambiguity is explicitly preserved for the lead rather than silently edited.

## Opened inventory

### Assigned pages

- `library/fourier-analysis/uncertainty-principles-for-fourier-analysis.md` (A).
- `library/fourier-analysis/uncertainty-principles-for-fourier-analysis-examples.md` (B).

### Assigned item bodies

- `items/def-spatial-and-frequency-centres-and-variances.md`.
- `items/lem-centering-by-translation-and-modulation-preserves-the-variance-product.md`.
- `items/lem-position-derivative-commutator-estimate.md`.
- `items/rem-heisenberg-uncertainty-is-owned-by-functional-analysis.md`.
- `items/cor-dimensional-heisenberg-uncertainty-inequality.md`.
- `items/thm-support-measure-uncertainty-inequality.md`.
- `items/lem-compact-support-gives-an-entire-fourier-laplace-transform.md`.
- `items/thm-qualitative-compact-support-uncertainty-principle.md`.
- `items/lem-hardy-entire-growth-rigidity.md`.
- `items/thm-hardy-gaussian-uncertainty-principle.md`.
- `items/lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp.md`.
- `items/rem-proof-cost-and-complex-analysis-interface-for-hardy-uncertainty.md`.
- `items/thm-finite-dft-support-product-uncertainty.md`.
- `items/rem-uncertainty-principles-measure-different-notions-of-localisation.md`.
- `items/lem-gaussian-decay-gives-an-entire-fourier-laplace-transform.md`.
- `items/lem-separately-holomorphic-vanishing-on-a-real-box-is-zero.md`.
- `items/ex-gaussian-attains-heisenberg-equality.md`.
- `items/cex-finite-variance-is-not-the-same-as-compact-support.md`.
- `items/ex-hardy-critical-and-subcritical-gaussian-regimes.md`.
- `items/ex-finite-dft-delta-and-constant-extremisers.md`.
- `items/cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one.md`.

### External item statements and definitions

The following 64 direct suppliers were opened at the consumed statement/definition clauses (four draft finite-Fourier suppliers belong to current-run batch 28; the other 60 are published). Additional supplier proof clauses were read where identified above.

- `items/cor-c-one-change-of-variables-for-l-one-functions.md`.
- `items/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity.md`.
- `items/cor-principal-logarithm-is-holomorphic-on-the-slit-plane.md`.
- `items/cor-uniqueness-of-the-l-one-fourier-transform.md`.
- `items/def-compact-space.md`.
- `items/def-complex-differentiability-holomorphic-and-entire.md`.
- `items/def-complex-exponential.md`.
- `items/def-complex-logarithms-principal-logarithm-and-complex-powers.md`.
- `items/def-complex-lp-and-euclidean-test-function-conventions.md`.
- `items/def-countable-choice.md`.
- `items/def-counting-inner-product-on-complex-functions-on-z-mod-n.md` — current-run batch 28.
- `items/def-finite-sum-in-a-commutative-monoid.md`.
- `items/def-fourier-transform-on-l-one-of-rn.md`.
- `items/def-integers-modulo-n.md`.
- `items/def-integrable-real-and-complex-functions-and-their-integrals.md`.
- `items/def-l-p-space-as-a-quotient-by-null-functions.md`.
- `items/def-rational-power.md`.
- `items/def-real-power.md`.
- `items/def-sobolev-space-wkp-and-its-norm.md`.
- `items/def-translation-of-a-function-on-rn.md`.
- `items/def-unitary-discrete-fourier-transform-on-z-mod-n.md` — current-run batch 28.
- `items/lem-complex-conjugation-and-modulus-laws.md`.
- `items/lem-complex-lp-completeness-density-and-inner-product.md`.
- `items/lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization.md`.
- `items/lem-exponential-dominates-one-plus-x.md`.
- `items/lem-finite-sum-laws.md`.
- `items/lem-l-one-fourier-transform-is-well-defined.md`.
- `items/lem-orthogonality-of-characters-on-a-finite-cyclic-group.md` — current-run batch 28.
- `items/lem-rational-power-laws.md`.
- `items/lem-schwartz-cutoffs-from-the-standard-smooth-step.md`.
- `items/lem-schwartz-functions-and-all-derivatives-are-integrable.md`.
- `items/lem-schwartz-space-is-dense-in-l-two.md`.
- `items/lem-sobolev-integration-by-parts-for-dual-exponents.md`.
- `items/lem-weak-derivatives-are-polynomial-fourier-multipliers.md`.
- `items/lem-weak-leibniz-rule-with-a-smooth-factor.md`.
- `items/prop-order-and-scalar-rules-for-the-nonnegative-integral.md`.
- `items/thm-algebra-of-complex-derivatives.md`.
- `items/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces.md`.
- `items/thm-chain-rule-for-complex-derivatives.md`.
- `items/thm-complex-exponential-addition-and-real-extension.md`.
- `items/thm-complex-exponential-is-entire-with-derivative-itself.md`.
- `items/thm-complex-numbers-form-a-field.md`.
- `items/thm-differentiation-under-the-integral-sign.md`.
- `items/thm-dominated-convergence.md`.
- `items/thm-exponential-is-strictly-increasing.md`.
- `items/thm-extreme-value-metric.md`.
- `items/thm-finite-parseval-and-plancherel.md` — current-run batch 28.
- `items/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces.md`.
- `items/thm-fourier-translation-modulation-dilation-and-reflection-laws.md`.
- `items/thm-gaussian-integral.md`.
- `items/thm-heine-borel-rn.md`.
- `items/thm-holder-inequality-for-integrals.md`.
- `items/thm-identity-theorem-holomorphic-functions.md`.
- `items/thm-integral-triangle-inequality.md`.
- `items/thm-l-one-l-two-agreement-of-fourier-transform.md`.
- `items/thm-lebesgue-measure-of-a-box-of-every-kind.md`.
- `items/thm-linearity-of-the-lebesgue-integral-on-l-one.md`.
- `items/thm-liouville-bounded-entire-function.md`.
- `items/thm-maximum-modulus-principle-with-boundary-and-infinity-control.md`.
- `items/thm-plancherel.md`.
- `items/thm-polar-form-with-unique-principal-argument.md`.
- `items/thm-real-power-continuity-and-derivatives.md`.
- `items/thm-riemann-lebesgue.md`.
- `items/thm-the-lebesgue-integral-respects-almost-everywhere-equality.md`.

Also opened `items/thm-heisenberg-uncertainty-inequality.md` at its published Statement, for the quoted Schwartz inequality and exact equality family.

Workflow/evidence files opened: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, the exact batch pages manifest, cross-batch dependency evidence and proof-contract file. The batch scaffold notes were read only in part. Existing author decisions were treated as historical evidence, not verdicts.
