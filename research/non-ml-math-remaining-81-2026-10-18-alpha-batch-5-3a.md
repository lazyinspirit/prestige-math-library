# Batch 5 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-5`; scope original group: `n`.

Reader and refuter artifacts report no findings. Exactly three touched obligations are owed. Engine owns stamps, gates and transitions.

## Completed reviews in dispatched order

### lem-kl-invariant-under-measurable-bijections

Read Proof 1.1–1.2 and exact KL, measurable-map, AC and push-forward interfaces. Measurable inverse sends a Q-null witness to a push-forward null witness in the singular branch. In the dominated branch r composed with the inverse satisfies the RN identity on every event. Integrate positive and negative logarithm parts separately; P(r=0)=0 and finite negative part remove all ambiguities even when KL is infinite. Probability laws exclude empty E; bijection then excludes empty F. AC is inherited only from RN. No defect.

### lem-product-of-two-probability-kernels

Read all three steps and kernel, product-measure, product-sigma-algebra and pi-lambda statements. Every section is the unique product probability; rectangle evaluations are products of measurable [0,1]-valued functions. Complements and disjoint countable unions close the measurable-event class as a lambda-system, giving every product event. Empty base is vacuous; nonempty base rules out empty targets. No versions or choice selections enter the construction. No defect.

### def-measure-theoretic-mutual-information

Read the complete Definition and all seven prerequisite interfaces. Marginals of the supplied joint probability are probabilities, their finite product exists uniquely, and directional KL gives a nonnegative extended value with natural logarithms. No entropy subtraction or standard-Borel hypothesis is needed. Empty value spaces cannot support the hypothesized probability. AC is inherited from KL; no new selection. No defect.

### lem-same-marginal-conditional-product-law-well-defined

Read both proof steps and every cited supplier statement. The reviewed product-kernel lemma and prior/kernel joint-law theorem give the measure and conditional identity. Its Z marginal follows by setting A and B to whole spaces in the displayed formula. The wording about taking C whole is an immediately resolvable slip, not a false conclusion. Conditional-law definition supplies simultaneous equality outside a P_Z-null set via a countable determining family; the RCD uniqueness theorem has the same standard-Borel/AC hypotheses. Union of the two null sets gives equality of product measures; rectangles determine the full joint law. No additional AC beyond declared conditional interfaces. No fatal defect or necessary edit.

### thm-general-kl-variational-and-partition-formulas

Read all five proof steps and all six dependency interfaces. Finite-KL tilt uses bounded f and equivalent Q_f, so its logarithm subtraction is integrable. Singular witness t1_A gives unbounded values. Clipping log r handles r=0 on a P-null set, integrable negative part and infinite positive part separately; exp(f_n)<=1+r gives dominated convergence to normalization one. Fixed-partition maximization handles positive p/zero q, zero p/positive q and zero/zero; uniform simple approximation changes Phi by at most 2 epsilon. No infinity subtraction. AC inherited from RN. Gray corrected first edition Theorem 5.2.1, printed pp.98–99 (PDF 119–120), read with preceding tilted-measure argument: its hypothesis is P<<M; the local proof separately establishes the singular and bounded-function variants. No defect.

### def-finite-alphabet-conditional-entropy-given-observation

Read the Definition and all twelve dependency statements. Finite nonempty target admits a discrete standard-Borel presentation; AC/standard-Borel observation supply a conditional kernel through existence and factorization. Entropy integrand is a finite sum of continuous bounded functions -t ln t with value zero at t=0, so is measurable and finite; equality outside one P_Y-null set proves version independence. For finite Y only positive-mass atoms are divided, and the weighted-sum expectation recovers the earlier conditional entropy exactly. Null conditioning points and singleton target cause no issue. No defect.

### def-standard-borel-conditional-mutual-information

Read full Definition and all ten prerequisite interfaces. Product law is constructed in Z,X,Y coordinate order, as the displayed rectangles specify; P_XYZ denotes the same full joint law under that convention (coordinate reordering is a measurable isomorphism). Reviewed same-marginal lemma supplies a unique version-independent reference probability with P_Z marginal. Nonnegative directional KL allows singular and infinite cases without entropy differences. Standard-Borel existence/factorization and RN use the declared AC. No defect.

### thm-conditional-kl-is-measurable

Read all three steps and four exact supplier statements. Finite rho=P+Q ensures the generating algebra is dense in measure: approximate a countable union by a finite subunion, then approximate its members. Rational algebra-simple functions can be uniformly bounded while approximating a bounded function in L1(rho). Exponential is Lipschitz on the common bounded interval and the denominator is bounded below; thus Phi is continuous for this approximation. The same countable family works for every pair of laws, so its supremum, applied to each fiber, is measurable. No uncountable supremum, jointly measurable RN selection or fiberwise AC assumption is used. Empty base vacuous; infinite KL retained. AC exactly for algebra and KL. No defect.

### ex-finite-deterministic-copy-has-mutual-information-equal-to-entropy

Read all three proof steps and nine dependency interfaces. Finite discrete metric is complete and separable with all singletons Borel. At p=0 or 1 the joint and product are the same point mass. For 0<p<1 only the two positive diagonal masses contribute, with product denominators p² and (1-p)², giving the stated binary entropy. Off-diagonal zero joint mass contributes zero. Natural logarithms and inherited RN AC match the finite KL bridge. No defect.

### def-conditional-kl-for-probability-kernels

Read full Definition and its five suppliers. Earlier measurability theorem applies to supplied probability kernels into the standard-Borel target, so the nonnegative extended fiber divergence has a defined base integral. Singular fibers give infinity, including on null sets without affecting the integral. Equality of kernels as measures outside one mu-null set gives version invariance. Base and target must be nonempty because a base probability and probability fibers are assumed. AC inherited from KL and countable algebra. No defect.

### thm-finite-alphabet-conditional-entropy-version-and-chain-rule

Read all four current steps and all eight suppliers; compared exact frozen preimage at .autopilot/non-ml-math-remaining-81-2026-10-18/owner-step2-source-baseline/items/. Reader added the finite-product fact and an event-testing derivation of p_i*m_ij=p_ij. Disintegrating (X,Z) gives the first integral, and joint disintegration given Z gives the second; testing bounded discrepancies on every measurable C proves a.e. equality simultaneously for finitely many pairs. Positive rows permit division and logarithm splitting; zero rows contribute zero regardless of their conditional versions. The final disintegration identifies the actual H(U|X,Z) and bounded finite sums ensure integrability (the Definition already supplies the sufficient |alphabet|/e bound). Version invariance applies to the finite pair (X,U) as well as each listed target. Statement unchanged; exact raw current hash equals reader-post. Accept reader repair with confidence 1. Historical gap was nonfatal: the required elementary conditional identity follows directly from cited disintegration.

### thm-law-entropy-countable-support-characterization

Read all four steps and fourteen supplier interfaces. At most n atoms have mass >=1/n; Archimedean reciprocals and declared AC make their union countable. Countable singleton support is measurable; increasing finite sums prove measurability of r, its RN identity for every product event, and the nonnegative log-density integral, including infinite entropy. Finite support uses a finite enumeration (partial sums then stabilize), with point mass giving zero. For positive residual non-atomic mass, the separating algebra makes the diagonal measurable; the residual diagonal has positive diagonal-law mass but every product section has zero P mass, proving singularity. Reader adds explicit MCT dependency/fact and completes both limit passages. Exact baseline raw hash matches pre and current raw hash matches post; Statement unchanged. Accept this nonfatal explanatory repair with confidence 1.

### thm-mutual-information-and-conditional-mutual-information-equality-conditions

Read all three steps and ten exact suppliers. Both MI iff statements first use KL=0 iff equality of probability laws. Equality with the conditional-product law gives, on every conditioning preimage event, the correct indicator conditional-expectation product; finite linearity and bounded simple approximation with conditional dominated convergence extend to all bounded real f,g. Conversely the all-bounded-functions definition contains indicators, yielding equality on all C×A×B rectangles and hence the full measures by pi-lambda. Null sets may depend on the tested f,g exactly as in the definition; no invalid simultaneous uncountable intersection occurs. AC declared for KL, conditional laws and expectation classes. No defect.

### thm-mutual-information-and-conditional-mutual-information-quantization

Read all four steps and nine suppliers. Finiteness of P+Q and continuity from below give approximation in measure by the union algebra of the increasing sigma-algebras. Bounded simple approximants remain in one finite level and a common bound; exponential Lipschitz and positive lower bound on its integral give convergence of the variational functional. Restricted KL therefore increases to full KL, including infinity. For unconditional output, finite-map factors identify the restricted laws and product marginal reference. For conditional output, all of Z is retained; output-event preimages and uniform simple approximation suffice to identify variational suprema, and rectangle evaluation identifies the pushed reference with the quantized conditional product. No quantization/coarsening of Z is asserted. Gray Lemmas 5.5.5 and 5.5.7, printed pp.119,122–123, statements and latter proof read; the local proof independently avoids source infinite-entropy differences. No defect.

### ex-coarsening-conditioning-can-increase-conditional-mutual-information

Read all three steps and eleven supplier interfaces. Finite discrete metric proves standard-Borel hypotheses and finite products preserve them. Given Z=(X,Y), positive-mass conditional joint and marginal product are the same point mass, yielding zero KL; arbitrary zero-probability Z values have no effect. Given constant W, diagonal joint masses 1/2 against product masses 1/4 give two terms (1/2)ln2, totaling ln2. W is a measurable constant function of Z, so the claimed strict increase under coarsening is verified. No choice beyond declared KL/conditional-law AC. No defect.

### thm-general-kl-chain-rule-for-standard-borel-kernels

Read all three current proof steps, full Statement/Facts and fifteen supplier statements. If the base is singular, its cylinder is a joint singularity witness; if the base is dominated but the joint is not, finite conditional KL would force fiber domination a.e. and contradict that joint singularity. For P<<Q, finite nonnegative RN representatives exist under AC. Eventwise equality of two finite-integral functions gives equality a.e.; the countable determining algebra gives one mu-full S with a>0 and a globally measurable r=h/a on S, zero elsewhere. Normalization on F and measure determination identify r as every fiber density on S. In 2.1 the measurable nonnegative kernel integral g_C can be changed from mu to a*nu by the newly cited density integration theorem (unlike the old supplier restricted to simple functions); joint-law integration yields h=ar Q-a.e., hence P-a.e. All three densities are positive finite on a P-full set, and each logarithm has integrable negative part <=1/e; integrating their sum is valid even with infinite positive parts. Equal-base case gives exactly conditional KL; null fibers are irrelevant. The repaired reciprocal formula uses only finite-valued measurable arithmetic, with no 0/0 or jointly selected fiberwise density. Exact pre-reader raw carrier was recovered at research/non-ml-math-remaining-81-2026-10-18-owner-step2-root-formatting-round1-reviewed/proposals/items/thm-general-kl-chain-rule-for-standard-borel-kernels.md and matches frozen pre hash; current matches post. Statement unchanged. Accept complete nonfatal supplier/derivation repair, confidence 1. Gray Theorem 5.3.2 with preceding generalized-conditional-entropy argument, printed pp.110–111, independently checked for singular-case compatibility.

### ex-null-conditional-kernel-version-does-not-change-information

Read all three proof steps and eighteen prerequisite interfaces. Unit-interval Borel restriction is a probability and singleton 0 is null under declared countable choice (implied by AC). Explicit finite discrete targets and their product are standard Borel. Kernel replacement at a Borel singleton remains a measurable probability kernel and preserves every conditioning-event integral. The fixed joint kernel delta_(0,0) and modified marginal product delta_(1,0) are singular at 0, so fiber KL becomes infinity there; elsewhere it is zero, and the nonnegative integral remains zero. The full reference measure is unchanged by the null modification and equals the actual joint law. Thus CMI stays zero independently of the fiber-version mismatch. No assertion of simultaneous pointwise compatibility of arbitrary versions. No defect.

### ex-uniform-law-has-infinite-self-information-entropy

Read all three steps and ten suppliers, including the complete differential-entropy remark. Under countable choice the interval has length one and each degenerate singleton has length zero, so the atomic set is empty. The identity has law P on the standard-Borel Borel unit interval; the reviewed countable-support theorem yields infinite self-MI. Extending density by zero gives 1_[0,1] on R and f ln f=0 everywhere under the zero convention, so its defined differential entropy equals zero. Borel restriction, completion and measure on all R are not conflated. AC covers the KL and countable-choice prerequisites. No defect.

### thm-mutual-information-chain-rule

Read all four steps and nine supplier interfaces, after completing the general KL chain-rule review. Rectangle calculation identifies Q=P_ZX tensor P_Y as base P_Z and conditional kernel P_X|z tensor P_Y. Equal-base KL disintegration gives the first integral. For each fixed z, standard-Borel disintegration of P_XY|z over Y and the constant-X reference gives the marginal D(P_Y|z||P_Y) plus conditional-X KL; a second equal-base application identifies that remainder with D(P_XY|z||P_X|z tensor P_Y|z). These per-z disintegrations need no jointly selected density: the remainder is the measurable joint-fiber KL furnished by the reviewed theorem/product-kernel construction. Integrating the first term gives I(Z;Y) after coordinate swap; integrating the second gives the same-Z-marginal CMI by equal-base KL. All terms are nonnegative and the identity remains valid when any is infinite. Finite products satisfy standard-Borel hypotheses, supplied kernels are probabilities everywhere, exceptional Z values are null, and AC is inherited exactly as declared. No defect.

## Historical comparison and decisions

All 21 current item raw hashes equal the frozen reader-post hashes. All three touched Statements are unchanged. The two entropy preimages and the chain-rule preimage match their respective frozen pre-reader hashes; no historical exception, owner-resolution fiction or unknown delta is used.

### thm-finite-alphabet-conditional-entropy-version-and-chain-rule historical binding

Pre-reader raw SHA256: `3f58d0f02059a2c8fa9ece1737aff2fb9f783e08e15c1f47a6429256dc5e133b`. Post-reader/current raw SHA256: `f1737d61d9457ed1b21540e18f9a22000df53fd569e49eec37557b16089c60e4`. Exact authenticated preimage: `research/non-ml-math-remaining-81-2026-10-18-owner-it-route-reconciliation/appendix-10/archive/items/thm-finite-alphabet-conditional-entropy-version-and-chain-rule.md`. The pre/post/current comparison is a raw-byte comparison, independent of the engine decision hashes.

### thm-law-entropy-countable-support-characterization historical binding

Pre-reader raw SHA256: `e3169d8d45bdff3c0cee9b6de9d7ade689de3115ad4bc9b9a9006e3f8ebd0a38`. Post-reader/current raw SHA256: `a116b24522827464431171b0628489bfe0b39f2153752f4ac18c42ac7ff3c995`. Exact authenticated preimage: `research/non-ml-math-remaining-81-2026-10-18-owner-it-route-reconciliation/extension-5-6-7/archive/items/thm-law-entropy-countable-support-characterization.md`. The pre/post/current comparison is a raw-byte comparison, independent of the engine decision hashes.

### thm-general-kl-chain-rule-for-standard-borel-kernels historical binding

Pre-reader raw SHA256: `be9522d1d672a873ab551f0fd4e30d594e08489cdfb16026339ae5dd8be459f3`. Post-reader/current raw SHA256: `c0f0d73555f3652de298b118e54be9f5cd2c99d95b3f2b3ae89f45630c4a03fb`. Exact authenticated preimage: `research/non-ml-math-remaining-81-2026-10-18-owner-step2-root-formatting-round1-reviewed/proposals/items/thm-general-kl-chain-rule-for-standard-borel-kernels.md`. The pre/post/current comparison is a raw-byte comparison, independent of the engine decision hashes.

Accepted all three reader repairs, each with `repair_confidence: 1`. Closed nonfatal rows `non-ml-math-remaining-81-2026-10-18-batch-5-D001`, `non-ml-math-remaining-81-2026-10-18-batch-5-D002`, and `non-ml-math-remaining-81-2026-10-18-batch-5-D003` record the respective conditional-law identification, countable-density limit derivation, and general-density integration citation omission. The decisions file contains exactly the three touched obligations; reader/refuter/page obligations are empty. Alpha made no item edit. The manifest omitted the reader-added MCT dependency and three chain-rule dependencies; synchronized those two dependency arrays without altering Statements or Definitions. Contracts retain the reader derivations and now include all 19 specific completed risk reviews.

## Sources and prerequisite boundaries

Read every current routed carrier and the exact Statement/Definition of every direct dependency; also read the complete finite-KL bridge proof used in the finite calculations. Inspected all 14 existing batch-5 cross-batch records, retaining their stable identities and finite-alphabet/AC/zero-mass conventions. Published suppliers were read as exact interfaces, not re-audited through their entire transitive proof closure. No source-backed assertion of a new supplier audit or judge approval is made.

Authoritative source passages opened directly: [Gray, corrected first edition](https://ee-www.stanford.edu/~gray/it.pdf), Theorem 5.2.1 with its tilted-measure proof (printed pp.97–99), generalized conditional relative entropy and Theorem 5.3.2 (pp.110–111), Lemmas 5.5.5 and 5.5.7 with the latter proof (pp.119,122–123); [Polyanskiy–Wu, MIT Chapter 3](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/486b7d83cc428acf75b74323ecafcc11_MIT6_441S16_chapter_3.pdf), Theorem 3.7 and its proof (printed p.36). Gray assumes domination in the variational theorem; local singular-case and bounded-test-function arguments were verified independently. The local additive KL proof supports infinite values without borrowing a subtraction of infinities from source formulas. No reading of Duchi or the full MIT Chapter 2 is claimed in this adjudication.

## Consumer and owner disposition

No Statement or Definition changed, so no interface-change consumer propagation is triggered. The final MI chain-rule consumer was independently reviewed after the KL supplier and remains sound. Existing cross-batch sidecar rows are retained; no outside-batch or published item was changed. No defective published item, substantial missing prerequisite, new withdrawal, owner escalation, or unresolved uncertainty was identified. The published ledger needs no new row or lock transaction.

## Local validation

- `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-5.proof-contracts.json` was run before recording reviews; the final `--require-reviewed` run succeeds with 21 items, 19 required reviews, all 19 complete, and zero errors.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-5.proof-contracts.json --strict`: 21/21 items checked, zero errors or warnings.
- `node tools/manifest-deps.mjs research/non-ml-math-remaining-81-2026-10-18-batch-5.pages.json`: 21 items, zero errors. An independent exact-list comparison confirms all 21 manifest dependency arrays equal the current item arrays.
- `node tools/tsx-run.mjs tools/precheck.mts` with the three explicit touched item paths: three checked, zero failures.
- `node tools/rendercheck.mjs` with those same three paths: all three parse with the actual KaTeX and renderer YAML parser; zero defects.
- Final single batched `node tools/proof-layout.mjs items/thm-finite-alphabet-conditional-entropy-version-and-chain-rule.md items/thm-law-entropy-countable-support-characterization.md items/thm-general-kl-chain-rule-for-standard-borel-kernels.md`: three items, eleven steps, zero defects. No item edit or formatter followed it.
- Exact decision coverage independently checked: three owed touched obligations, three decisions, three referenced fixed ledger rows at `3a-adjudicate`; all 21 item raw hashes still equal reader-post.

The precheck executable needs the repository `tsx-run.mjs` wrapper under this Node version; a direct `.mts`/help probe failed before the actual successful three-file run. PDF text extraction was unavailable locally; source passages were read through the web PDF text instead. No engine gate battery, judge, stamp, dispatch, publication or commit was initiated.

Sequence caveat: some bounded reads included next-level carrier text before the preceding level's risk notes were persisted. Lower-level risk dispositions were then recorded before higher-level adjudication; no prerequisite or review was omitted. This reports the actual read/persistence sequence rather than claiming a perfectly serialized file-opening order.

No blocker remains in this dispatch. Mathematical acceptance here is the Alpha disposition only; engine validation and hash stamping remain outstanding engine work.
