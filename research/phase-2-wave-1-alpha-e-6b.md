# Step 6b group e — phase-2-wave-1

Scope: batches 4 and 5. Adjudication returned with two owner escalations; group closure is not claimed. No judge, hash stamp, dispatch, or stage transition was performed.

Read the current scopes, reader reports/findings, refuter reports, all 26 owned item bodies, four pages, and 52 batch-4 plus 17 batch-5 direct external dependency statements (counts include overlap between batches). Both refuters and both readers report no in-flight item findings; reader 4 additionally routes the published dependency finding below. Reports were tested against current claims, hypotheses, definitions, proof steps, examples and dependencies. Individual records follow.

## Decisions and owner blockers

Exactly two obligations are recorded in `research/phase-2-wave-1-alpha-e-6b-decisions.json`, both escalated with evidence and empty defect references as permitted by the brief.

- `reader:4:1`, route `reader`, subject `thm-riesz-fischer-completeness-of-l-p`: current published Proof 1.2 permits arbitrary assignments on a measurable null set and incorrectly concludes measurability. On X={a,b,c} with sigma-algebra {empty,{a,b},{c},X}, give {a,b} measure zero and {c} measure one. The extension 1_{a} of zero outside E={a,b} is not measurable. The owned complex consumer sets exceptional values to zero and declares countable choice; nevertheless the published supplier finding remains unresolved. The dispatched task supplies no published-content repair protocol. Owner disposition must authorize/assign the published repair and its affected records. No published item was edited.
- `post-reader:4:thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`, route `touched`: the complete current item is mathematically sound. Replacing only the current title's en dash with the literal YAML escape `\u2013` recovers the exact post-reader SHA256 `e1434cc97007056b3ce54637fe7aa5db7e3a048edcba1479c502fe876bc01b26`. The current SHA256 `9103d4755c9b991897c912816290d9c693dcb630be68ffee39fe3dbde387d207` equals pre-6b. The depcheck event at 2026-09-08T12:53:04.776Z identifies that escape; mathematical bytes, contracts, manifests and pages did not change. The brief prohibits a defect row for purely mechanical failures, but `tools/step6-scope.mjs` requires a repaired defect reference for accepted/amended repair. Owner disposition is needed for this accounting conflict. Retain the sound current carrier; no fictitious mathematical defect was created.

Batch 5 has no post-reader/pre-6b differences. Batch 4 has only the title normalization above. There are no other touched/page/reader/refuter obligations. No content repair was completed by this dispatch, so no repair-confidence claim or closed defect outcome is supplied. Decisions were appended while preserving existing decisions; shared defect ledgers and independent evidence were not rewritten.

## Risk review and focused validation

Initial `risk-report.mjs` runs without `--require-reviewed` passed both owned contracts and identified 20 HIGH/CRITICAL items: 11 in batch 4 and 9 in batch 5. Specific mathematical risk records now mark 18 complete. Batch-4 `thm-complex-lp-completeness-and-almost-everywhere-subsequences` and `lem-complex-lp-completeness-density-and-inner-product` remain pending through `reader:4:1`. Their notes name that dependency and do not claim closure. The translation interface does not use the completeness clause of its declared collected supplier; its own convolution and approximation proof was independently checked.

Final checks:

- `node tools/proof-contract.mjs research/phase-2-wave-1-batch-{4,5}.proof-contracts.json --strict`, separately: 12/12 and 14/14, zero errors or warnings.
- `node tools/content-policy.mjs research/phase-2-wave-1-batch-{4,5}.pages.json`, separately: all 26 scoped items, zero errors or warnings.
- `node tools/tsx-run.mjs tools/precheck.mts` with the 21 explicit owned proof-bearing item paths: 21 passed, zero failed.
- `node tools/rendercheck.mjs` with the four explicit owned library page paths: passed real KaTeX and renderer YAML parsing.
- `node tools/risk-report.mjs research/phase-2-wave-1-batch-5.proof-contracts.json --require-reviewed`: passed.
- Same required risk command for batch 4: exit 1, exactly two `risk-review-missing` errors for the pending completeness items above. These are deliberate unresolved reviews, not closed defects.

No material item edit occurred; reflow was not applicable. Contract changes are risk-review metadata only. No manifest, provenance, impact or verification record became stale through an item repair by this dispatch.

## Frontier dependency records

Checked all current run batch manifests to map suppliers to batches, compared owned manifest dependencies/page prerequisites and current item/page references, and reviewed implicit proof uses while reading the bodies. Neither owned batch consumes a supplier from a different batch in this frontier. Both `research/phase-2-wave-1-batch-4.cross-batch-dependencies.json` and `research/phase-2-wave-1-batch-5.cross-batch-dependencies.json` correctly remain `[]`. No input or dependency edit occurred, so no merge refresh was necessary. This record does not replace Step-6 decisions.

## Authoritative source evidence

- [Teschl, Topics in Real and Functional Analysis](https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf): §10.1 formulas (10.1)–(10.8), pp.281–283; Theorem 10.4 and Corollary 10.5/Lemma 10.6, pp.285–287; Theorem 10.12/Corollary 10.13, pp.290–291; Theorem 10.16 and Lemmas 10.18–10.19, pp.294–298. Checked conjugate exponents, phase, finite-support tests, sigma-finite/semifinite endpoint restrictions, finite-p density, C0 endpoint and mollifier hypotheses. Source pairing conjugates the first slot; local convention explicitly conjugates the second. Also checked Theorem 4.14 and Corollaries 4.15–4.16, pp.113–114, and Lemma 5.1/Theorems 5.2–5.3/Corollary 5.4, pp.138–140, for complex extension, gauge and separation. Local signed-tail estimates and asymmetric-gauge bounds were verified from the written proofs.
- [Brezis, Functional Analysis](https://www.math.utoronto.ca/almut/Brezis.pdf): Theorem 1.1, Corollaries 1.3–1.4, Lemmas 1.2–1.3, Theorems 1.6–1.7 and canonical bidual embedding, pp.1–9. Checked real sublinear domination, complex reconstruction, nonempty/open/convex and compact/closed conditions, strict separation and dual norms. The local text treats HB as an additional principle over ZF, and uses an intrinsic finite compact cover before finite choice.
- [Hunter, Measure Theory](https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf): Theorem 7.10 and preceding summable-series argument, pp.81–83. Checked finite-p and infinity completeness mechanisms and measurable exceptional sets. These do not justify arbitrary nonmeasurable assignments on a null set.
- [Laugesen, Harmonic Analysis Lecture Notes](https://arxiv.org/pdf/0903.3845): Lemma 14.6 p.81, Definition 15.1 (SR1–SR3) p.87 and Theorem 15.7 p.92. Checked finite-p translation and summability kernels with bounded L1 norms, unit mass and absolute tails; the local complex proof independently handles the nonnegative integral envelope and C0 uniform endpoint.

Next action: owner resolves the two named escalations. Until then the published finding and its two dependent risk reviews stay open. The engine owns subsequent routing, stamping and transitions.

## Item review records

The following records concern the current local proofs and dependency statements. Source passages were independently opened as listed below; local review is not a judge outcome.

### def-complex-lp-and-euclidean-test-function-conventions

Current carrier: `items/def-complex-lp-and-euclidean-test-function-conventions.md`. Definition: finite-valued component measurability closes under the displayed modulus/power threshold formulas. Quotient is only a set quotient here; essential support uses open zero-a.e. sets without claiming their union is null. Zero simple test and zero measures are admitted. Compact/ball local-integrability equivalence uses Heine-Borel. Countable choice is stated for the rational-indicator example; Dirac norm is one.

Dependencies: `def-l-p-space-as-a-quotient-by-null-functions`, `def-essential-supremum-with-respect-to-a-measure`, `def-l-one-of-a-measure`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-c-c-and-c-c-infinity-on-rn`, `def-c-zero-on-rn`, `def-ck-and-multi-index-notation-in-several-variables`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-threshold-characterisations-of-real-and-extended-real-measurability`, `def-dirac-measure`, `prop-dirac-measure-is-a-probability-measure`, `prop-countable-subsets-of-rn-are-lebesgue-null`, `lem-q-and-irrationals-dense-r`, `thm-heine-borel-rn`, `def-countable-choice`, `def-integrable-real-and-complex-functions-and-their-integrals`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### thm-complex-holder-minkowski-and-the-quotient-norm

Current carrier: `items/thm-complex-holder-minkowski-and-the-quotient-norm.md`. Proof 1.1 applies real Holder to moduli with both conjugate endpoints. Steps 1.3-1.5 use essential bounds, handle scalar zero separately and use the countable union of {|f|>1/m} for definiteness. Null disagreement sets are measurable; representative independence and both component bounds follow for all p including infinity and zero measure.

Dependencies: `def-complex-lp-and-euclidean-test-function-conventions`, `lem-complex-conjugation-and-modulus-laws`, `thm-holder-inequality-for-integrals`, `thm-minkowski-inequality-for-integrals`, `thm-integral-triangle-inequality`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `def-essential-supremum-with-respect-to-a-measure`, `thm-finite-and-countable-subadditivity-of-measures`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### thm-complex-lp-completeness-and-almost-everywhere-subsequences

Current carrier: `items/thm-complex-lp-completeness-and-almost-everywhere-subsequences.md`. Proof 1.1/2.1 recombines the two real limit classes, and 1.2 takes successive component subsequences; 3.1 declares countable choice and zero values on measurable exceptional sets. However F2 imports thm-riesz-fischer-completeness-of-l-p whose current Proof 1.2 explicitly permits arbitrary null-set values. reader:4:1 remains escalated for published-owner disposition; this dependency risk is not closed.

Dependencies: `thm-complex-holder-minkowski-and-the-quotient-norm`, `thm-riesz-fischer-completeness-of-l-p`, `cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences`, `def-countable-choice`, `thm-finite-and-countable-subadditivity-of-measures`.

Disposition: pending reader:4:1 owner disposition. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p

Current carrier: `items/thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p.md`. Proof 1.1 uses two approximants for a fixed tolerance, with finite fiber partition and finite union of nonzero supports; it does not select a whole sequence. Smooth Euclidean density retains countable choice. Steps 1.3/2.1 prove both essential-norm C0 closure directions by real projections/recombination. Finite-p claims do not extend to all L-infinity.

Dependencies: `thm-complex-holder-minkowski-and-the-quotient-norm`, `thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p`, `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn`, `thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn`, `def-countable-choice`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz

Current carrier: `items/thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz.md`. Entire Proof 1.1-3.1 checked. Holder ensures integrability, the two measurable null disagreement sets ensure class independence, and component integration supplies conjugation. With first-variable linearity c=<f,g>/||g||² gives the exact nonnegative square; equality is equivalent in both directions to f=cg for nonzero g. The tuple proof uses a common scalar, proves its triangle inequality, and handles G=0 and m=0. The title-only Unicode normalization changes no mathematics; its separate post-reader accounting is escalated.

Dependencies: `def-complex-l-two-inner-product`, `thm-complex-holder-minkowski-and-the-quotient-norm`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `lem-complex-conjugation-and-modulus-laws`, `def-integrable-real-and-complex-functions-and-their-integrals`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### lem-complex-lp-completeness-density-and-inner-product

Current carrier: `items/lem-complex-lp-completeness-density-and-inner-product.md`. Steps 1.1-2.1 copy exact finite-p, Euclidean, countable-choice and first-variable-linear hypotheses from the named suppliers, with the zero-g equality exception. The completeness branch remains pending through thm-complex-lp-completeness-and-almost-everywhere-subsequences -> thm-riesz-fischer-completeness-of-l-p and reader:4:1. No claim of a resolved completeness dependency audit is made.

Dependencies: `thm-complex-lp-completeness-and-almost-everywhere-subsequences`, `thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p`, `def-complex-l-two-inner-product`, `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`.

Disposition: pending reader:4:1 owner disposition. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### lem-complex-lq-norm-from-finite-simple-dual-tests

Current carrier: `items/lem-complex-lq-norm-from-finite-simple-dual-tests.md`. Steps 1.1-2.1 use measurable conjugate phase and normalized bounded finite-grid tests; errors are uniform on a finite-measure set with integrable |g|. Steps 3.1/3.2 separately justify sigma-finite exhaustion and finite-q level-set exhaustion for already-Lq inputs. Step 4.1 uses a bounded positive finite-measure subset at infinity, with semifiniteness explicitly required. Zero test treats M=0 and null spaces; singleton infinite-mass counterexample verifies endpoint necessity. Extended norms never produce undefined test integrals.

Dependencies: `thm-complex-holder-minkowski-and-the-quotient-norm`, `thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p`, `def-finite-sigma-finite-and-semifinite-measures`, `def-conjugate-exponents`, `def-essential-supremum-with-respect-to-a-measure`, `thm-monotone-convergence-for-the-integral`, `thm-integral-triangle-inequality`, `lem-complex-conjugation-and-modulus-laws`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-threshold-characterisations-of-real-and-extended-real-measurability`, `def-complex-lp-and-euclidean-test-function-conventions`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-finite-and-countable-subadditivity-of-measures`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### lem-complex-translation-and-approximate-identity-interfaces

Current carrier: `items/lem-complex-translation-and-approximate-identity-interfaces.md`. Proof 1.1-4.1 checked against current real suppliers. Countable choice licenses Borel representatives and Euclidean measure; real Young on absolute values proves absolute existence and the sharp bound including infinity. Fixed-x null sets prove representative invariance. The finite-p integral envelope is product measurable with integrable section norm and sigma-finite factors. Absolute kernel tails, not signed tails, control both errors. Local compact domination justifies derivatives for signed real smooth kernels; support closure is compact for compact input. No general infinity convergence is claimed. The collected completeness interface is declared but its completeness clause is not used in this proof.

Dependencies: `def-complex-lp-and-euclidean-test-function-conventions`, `thm-complex-holder-minkowski-and-the-quotient-norm`, `lem-complex-lp-completeness-density-and-inner-product`, `def-translation-of-a-function-on-rn`, `def-l-one-approximate-identity-on-rn`, `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity`, `thm-young-convolution-inequality`, `thm-minkowski-integral-inequality`, `thm-l-one-approximate-identities-converge-in-l-p`, `thm-integral-triangle-inequality`, `lem-borel-representatives-make-the-convolution-integrand-borel-measurable`, `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`, `thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `def-countable-choice`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-lebesgue-measure-under-dilations-and-reflections`, `thm-the-lebesgue-integral-respects-almost-everywhere-equality`, `thm-dominated-convergence`, `thm-completion-measurable-functions-have-base-measurable-representatives`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-heine-borel-rn`, `thm-heine-cantor-metric`, `thm-extreme-value-metric`, `thm-lebesgue-measure-of-a-box-of-every-kind`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### ex-complex-phase-in-l-q-dual-norming

Current carrier: `items/ex-complex-phase-in-l-q-dual-norming.md`. Verification 1.1-3.1: omega cubed is one and the three phases sum to zero. Conjugate test gives one; convex weights reduce real cube tests to eight vertices, whose maximum modulus is 2/3 and is attained. Unconjugated test gives zero. Finite atomic supports meet every dual-test hypothesis.

Dependencies: `lem-complex-lq-norm-from-finite-simple-dual-tests`, `lem-complex-conjugation-and-modulus-laws`, `def-integral-of-a-nonnegative-simple-function`, `def-integrable-real-and-complex-functions-and-their-integrals`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### ex-complex-l-two-pairing-on-two-step-functions

Current carrier: `items/ex-complex-l-two-pairing-on-two-step-functions.md`. Verification 1.1-3.1: two disjoint length-one intervals give squared norms two. Products are -i and i for the pairing, i and i for bilinear integration; multiplication by i gives 2i in the first slot and -2i in the second. Countable choice matches the current box-measure supplier.

Dependencies: `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`, `def-nonnegative-lebesgue-integral`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `def-countable-choice`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `def-integral-of-a-nonnegative-simple-function`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### ex-complex-mollification-by-components

Current carrier: `items/ex-complex-mollification-by-components.md`. Verification 1.1-3.1: interval convolution bounds have the correct orientation; the shared endpoint is null. For epsilon<1/4 the error is zero outside three intervals totaling 6 epsilon and bounded by sqrt(2)<=2. Every continuous candidate would force |h(0)| and |h(0)-1| below 1/2 if its essential error were below 1/2, contradiction using positive interval measure. Nonnegative kernel and countable-choice hypotheses are retained.

Dependencies: `lem-complex-translation-and-approximate-identity-interfaces`, `thm-complex-holder-minkowski-and-the-quotient-norm`, `def-countable-choice`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-finite-and-countable-subadditivity-of-measures`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### thm-relative-hahn-banach-norm-preserving-extension

Current carrier: `items/thm-relative-hahn-banach-norm-preserving-extension.md`. Proof 1.1-5.1: p=C||x|| is sublinear, real extension has both signed bounds; complex reconstruction U(x)-iU(ix) agrees on M because iM=M. For nonzero F(x) the explicit conjugate phase yields |F(x)|<=C||x||; F(x)=0 is separate. Restriction yields the reverse norm bound. C=0, M={0}, and zero X are covered. HB is assumed, with no completeness or closedness requirement.

Dependencies: `thm-relative-hahn-banach-dominated-extension`, `def-dual-space-of-a-normed-space`, `lem-real-part-determines-a-complex-linear-functional`, `def-linear-subspace`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### cor-relative-hahn-banach-dual-norming

Current carrier: `items/cor-relative-hahn-banach-dual-norming.md`. Proof 1.1-4.1: unique coefficients on Kx define the norm-one initial functional for a fixed nonzero x; HB extends it. The maximum is over functionals at a fixed vector, not norm attainment by a fixed functional or simultaneous selection. Zero functional covers zero space/vector. Finite linear combinations and epsilon norm approximation justify the dense-span annihilator conclusion.

Dependencies: `thm-relative-hahn-banach-norm-preserving-extension`, `lem-span-is-the-set-of-linear-combinations`, `def-metric-interior-closure-boundary`, `def-dual-space-of-a-normed-space`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### lem-relative-bidual-evaluation-is-a-contraction

Current carrier: `items/lem-relative-bidual-evaluation-is-a-contraction.md`. Proof 1.1-4.1 types X* as a normed operator space before forming its dual. Evaluation is bounded and scalar-linear, including over C; supremum over the nonempty unit ball gives ||Jx||<=||x||. At zero the evaluation vanishes. This uses neither HB nor injectivity and is valid over ZF.

Dependencies: `def-dual-space-of-a-normed-space`, `lem-operator-norm-is-a-norm`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### cor-relative-hahn-banach-bidual-isometry

Current carrier: `items/cor-relative-hahn-banach-bidual-isometry.md`. Proof 1.1-3.1 combines the already typed contraction with a norm-one functional for each fixed nonzero x under HB. It gives the reverse bound; zero is separate. Linearity yields distance preservation and injectivity, with no surjectivity assertion.

Dependencies: `cor-relative-hahn-banach-dual-norming`, `lem-relative-bidual-evaluation-is-a-contraction`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### def-relative-open-convex-gauge

Current carrier: `items/def-relative-open-convex-gauge.md`. Definition checks S_x is nonempty using t=1+||x||/r and bounded below by zero; the real infimum gives a unique finite value without simultaneous choices. S_0 has infimum zero. Unit ball and strip calculations are exact, and {0} is explicitly rejected as a neighborhood in a nonzero space. No symmetry or boundedness of U is assumed.

Dependencies: `def-relative-normed-convexity-and-separation`, `thm-infimum-property`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### lem-relative-open-convex-gauge-properties

Current carrier: `items/lem-relative-open-convex-gauge-properties.md`. Proof 1.1-3.1 checks admissibility of every scale above p(x), positive homogeneity including zero, and convex combination of admissible x/s,y/t. Both U={p<1} directions hold, with x=0 treated before division in the openness direction. Oppositely oriented subadditivity bounds prove Lipschitz continuity without assuming p(-x)=p(x).

Dependencies: `def-relative-open-convex-gauge`, `def-sublinear-functional`, `lem-inf-epsilon`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### lem-relative-compact-closed-sets-have-a-positive-distance-gap

Current carrier: `items/lem-relative-compact-closed-sets-have-a-positive-distance-gap.md`. Proof 1.1-5.1 uses the set of all admissible balls, proves their intersections with K intrinsically open, obtains a finite nonempty subcover and only then invokes finite choice for ball representatives. Its positive minimum radius and the 3r-r triangle estimate yield a uniform gap. Compact and closed nonempty sets are explicitly disjoint; no HB, completeness or infinite choice is used.

Dependencies: `rem-real-and-complex-normed-space-convention`, `def-metric-compactness`, `def-metric-topology`, `lem-finite-choice`, `lem-finite-set-has-max`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### thm-relative-hahn-banach-geometric-separation

Current carrier: `items/thm-relative-hahn-banach-geometric-separation.md`. Proof 1.1-7.1: A-B is open convex and excludes zero; point separation yields a finite supremum, and perturbations in a direction of positive real-part value give open-side strictness. For closed A/compact B the positive distance gap makes A+B(0,delta/2) disjoint from B. Step 5.1 proves the open-ball supremum rho N without norm attainment, and 6.1 yields uniform margin rho N/2>0. Labels/negation and singleton specialization are valid. All order is on real parts.

Dependencies: `lem-relative-hahn-banach-separates-an-open-convex-set-from-a-point`, `lem-relative-compact-closed-sets-have-a-positive-distance-gap`, `def-relative-normed-convexity-and-separation`, `lem-sup-epsilon`, `thm-infimum-property`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.

### ex-relative-norming-in-a-finite-dimensional-space

Current carrier: `items/ex-relative-norming-in-a-finite-dimensional-space.md`. Verification 1.1-5.1 proves max is a norm, takes the least maximizing coordinate with nonzero modulus, and uses its conjugate phase to give norm/value one. No infinite choice or HB is used. Zero vector and n=0 are handled separately, and the coordinate functionals at (1,1) are explicitly distinct.

Dependencies: `def-dual-space-of-a-normed-space`, `rem-real-and-complex-normed-space-convention`, `lem-finite-set-has-max`, `thm-well-ordering-principle`.

Disposition: mathematical risk reviewed; no item edit. Final strict contract and content-policy checks passed; all owned proof-bearing items passed precheck and all four pages passed rendercheck. Risk-gate results and unresolved obligations are recorded above.
