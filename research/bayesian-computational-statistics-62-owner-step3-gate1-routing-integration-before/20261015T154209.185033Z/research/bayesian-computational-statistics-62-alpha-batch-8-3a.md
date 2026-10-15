# Batch 8 Step 3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-8`.

Scope: one touched obligation; no reader, refuter, page, or published-supplier obligation. Reader report and findings and refute-8.json read; both findings arrays are empty. Review follows the generated dependency order. The sole adjudicator item edit is the shrinkage qualification documented below.

## Completed reviews

### `lem-finite-products-of-dominated-kernels-have-product-density`

Reviewed Statement and steps 1.1, 1.2, 2.1 against all eight cited dependency statements. Positive finite n excludes the empty index case; n=1 reduces to the given density. The rational-superlevel identity handles zero/infinity with 0*infinity=0, including threshold zero. Recursive sigma-finite products justify repeated Tonelli; factor masses are finite probabilities, including zero rectangle masses. Whole-space mass one supplies the constant finite exhaustion required by pi-system uniqueness. No selection or AC is used. Reader and refuter supply no counterexample; no defect found.

### `lem-normal-location-scale-density`

Reviewed Statement and steps 1.1-2.1 against normal-law pushforward, unit Gaussian integral, AC/countable-choice definitions and implication, and C1 change-of-variables Statement. sigma>0 makes T(x)=m+sigma*x a diffeomorphism on R, with positive Jacobian sigma. The nonnegative Borel test function is admissible and cancels that Jacobian exactly, proving density on every Borel set including empty and whole sets. sigma=0 is excluded; no zero division or extra choice. AC explicitly supplies the library normal law and countable-choice hypothesis. Reader/refuter report no finding; no defect found.

### `def-hierarchical-bayesian-model`

Reviewed entire Definition and all ten direct dependency statements/definitions. m>=1, proper Pi, and G probability kernel force nonempty latent spaces; each likelihood is specified jointly measurably, rather than merely almost everywhere. Finite product kernels and prior-kernel joint-law construction type-check; coordinate pullbacks provide the common source and the reviewed product-density lemma supplies the sigma-finite product likelihood. Z may be zero or infinite, and no quotient is defined there. The finite product assumption is explicit, with no finite de Finetti assertion. AC is isolated to conditional-expectation-class terminology; the construction makes no arbitrary selection. No reader/refuter finding or defect.

### `thm-hierarchical-latent-tuple-has-rcd-given-data`

Reviewed both proof steps and all seven direct dependency statements/definitions. The canonical joint law uses proper P0 and a probability observation kernel. Coordinate maps are measurable; the finite latent target H x Theta^m is standard Borel. The cited RCD theorem requires AC and a standard-Borel target, but allows an arbitrary conditioning sub-sigma-algebra, so arbitrary observation spaces cause no gap. The target is nonempty because its proper prior exists. Every section is a probability under the exact RCD definition; this does not identify exceptional pointwise evidence fibers. No extra measurable factorization or normalization claimed. No reader/refuter finding or defect.

### `thm-hierarchical-posterior-normalization-on-positive-finite-evidence`

Reviewed steps 1.1-2.1 against model, product-density lemma, prior-kernel joint law and dominated Bayes theorem Statements. The supplied likelihood is jointly measurable on Xi x Y and dominates every kernel section against the sigma-finite finite product measure. P0 is a probability, so all Bayes hypotheses hold; Z is exactly its evidence m. Each positive finite fiber is normalized, while P0 is the probability filler on Z=0 or infinity. Those fibers have prior-predictive mass zero (infinite densities can occur only on nu-null sets since total integral is one). No quotient or canonical posterior uniqueness on exceptional fibers is asserted. No AC is used in this density derivation and no reader/refuter defect.

### `ex-improper-variance-hyperprior-can-make-posterior-improper`

Reviewed Example and steps 1.1-2.1 with all six direct dependency statements/definitions. The improper t^(-1)dt measure is explicitly outside the proper-hyperprior theorem. E_n=[1/n,n] (n>=1) gives a sigma-finite exhaustion. Multiplying the positive Gaussian densities yields exponent -(1+t^(-1))*theta^2/2 and fixed-t evidence 1/sqrt(2*pi*(1+t)), as checked by affine substitution into the unit Gaussian integral. Each disjoint dyadic interval has q-integral at least 1/(2*sqrt(4*pi)), so countable additivity forces infinite mass near zero regardless of the tail. The propriety supplier forbids finite positive normalization of infinite mass; no improper-prior predictive probability is asserted. AC inherited for normal laws only. No reader/refuter finding or defect.

### `thm-normal-normal-hierarchical-shrinkage`

Reviewed all three proof steps and eleven direct dependency statements. The n=1 Normal-Normal supplier applies with AC and positive variances and the canonical pointwise likelihood. Repeated Tonelli factors fixed-hyperparameter rectangle masses; probability uniqueness has the full-space finite exhaustion. Kernel integration makes M_j, m_j and Q_j measurable, with finite positive m_j, and the normalized full posterior yields the hyperposterior mixture. Corrected the overstrong plug-in sentence: a proper point-mass hyperprior yields exactly its conditional component, so universal inequality was false. The Statement now says need not; step 3.1 explicitly handles a point-mass Pi_y. Consumer examples use only the unchanged conditional formula; their finite mixture inequality and endpoint calculations are independent of universal inequality. Page prose remains accurate. AC adds no unrecorded selection; evidence exceptions remain excluded. Repair complete with confidence 1; defect bayesian-computational-statistics-62-3a-b8-plugin-degenerate.

Local risk-review repair decision: `amended_repair`, repair_confidence: 1, defect_ids: [`bayesian-computational-statistics-62-3a-b8-plugin-degenerate`]. This newly discovered defect is recorded here without adding an unowed routed obligation to the decisions array. Counterexample: one group, mu=0, tau^2=s^2=1, y=0, hyperprior delta_(0,1). The hyperposterior remains delta_(0,1), and both full and plug-in laws are N(0,1/2). The formula and supported hierarchy are preserved. The manifest Statement, contract derivation, degenerate boundary, and the two consumer citation quotations were synchronized. No verification.judge record was present.

### `thm-current-and-new-group-posterior-predictive-laws-are-probability-kernels`

Reviewed all three steps, predictive Definition, and all nine direct dependency statements. MCT proves sectionwise countable additivity including empty and full events; finite probability-kernel integration proves measurability for each event, including the inner G_eta mixture for new groups. The future and data kernels form a product conditional on Xi, giving an explicit extension with original (Xi,Y) marginal; conditional integration applied to bounded H(Xi,A) proves every data-event identity. This product extension supplies the required conditional independence for a future draw. P0 filler gives prior predictions on zero/infinite evidence fibers without normalization. No coverage claim or unrecorded AC use. Bayes Rules Chapter 16 section 16.5 lines 472-479 and 514-520 independently confirm the corrected locator: sampling at posterior draws for a current group, then an extra population draw for a new group. Locator is metadata enrichment; mathematics is unchanged and sound.

### `ex-full-hyperposterior-versus-plug-in-normal-hierarchy`

Reviewed Example and steps 1.1-4.1 with all six direct dependency statements (including current shrinkage theorem). The canonical normal likelihood and positive variances meet the conditional-update hypotheses; embed the two t values as (0,t) in H. Direct Gaussian integration gives m_t(0)=1/sqrt(2*pi*(1+t)); equal prior masses give odds sqrt(5/2)>1, so both posterior weights are positive and the unique mode is t=1. Conditional variances are 1/2 and 4/5; since means vanish, the mixture second moment w/2+(1-w)*4/5 strictly exceeds 1/2. Thus its specific plug-in inequality is proved directly, unaffected by the supplier correction concerning degenerate hyperpriors. Empty support and zero evidence are excluded by the stated two-point model and calculation. No extra AC use or defect.

### `ex-hierarchical-normal-pooling-extremes`

Reviewed Example and steps 1.1-3.1 with all four direct dependency statements/definitions. Positive tau^2 and s_j^2 give weight a=tau^2/(tau^2+s_j^2) strictly between zero and one, mean a*ybar+(1-a)*mu and V=tau^2*s_j^2/(tau^2+s_j^2). Direct limits give (mu,0) at tau^2 down to zero and (ybar,s_j^2) at infinity. At zero the separate normal-law definition gives delta_mu, with canonical positive likelihood preserving that point mass; no formula divides by zero. Infinity is only a limit and no proper infinite-variance prior is claimed. Equal means ybar=mu do not affect strictness of the weights. Uses only unchanged conditional formulas from the repaired supplier, not a universal plug-in inequality. No extra choice or defect.

## Routed disposition and source evidence

`touched:8:thm-current-and-new-group-posterior-predictive-laws-are-probability-kernels`: `reviewed_no_defect`, change_kind `metadata`, defect_ids `[]`. The reader clarified a bibliographic locator; no mathematical statement or proof changed. Raw hashes: pre 9726f1944151e96f71023b3ef8208d1c1c145bd5c4cec730f8754e03d13025ba; post/current bc764f0f52b39c4201e505e563fc79eeff199362c4fdc69d1d21b6ebfbe66de8. Pre/post contract and manifest fingerprints agree. Current raw carrier equals the exact post-reader fingerprint.

Primary-source check: [Bayes Rules!, Chapter 16, section 16.5](https://www.bayesrulesbook.com/chapter-16.html), lines 472–479 (equation 16.11) and 514–520: current-group outcomes are sampled at posterior parameter draws; new-group outcomes require a population draw of their group mean first. This supports the retained locator. The kernel and normal calculations above were checked from the authored proofs and actual local supplier statements; no claim to reread BDA3 or recursively audit all foundational proofs.

## Local validation and final state

The first focused contract check found an existing F5 citation-quote mismatch against the current thm-normal-normal-conjugate-update Statement. Its current hypotheses (AC, positive variances, n>=1 and Borel/Lebesgue data) and posterior formula had already been independently checked in the review above. Synchronized the exact quotation; no mathematical carrier change or defect-ledger row for that mechanical mismatch.

Final local checks:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-normal-normal-hierarchical-shrinkage.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-normal-normal-hierarchical-shrinkage.md`: PASS, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/thm-normal-normal-hierarchical-shrinkage.md`: 1 item, 3 steps, 0 defects; run after the final item edit and formatter.
- `node tools/rendercheck.mjs items/thm-normal-normal-hierarchical-shrinkage.md`: OK, real KaTeX and renderer YAML checks passed.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-8.proof-contracts.json --strict`: 0 errors, 0 warnings, 11/11 checked after exact F5 quotation synchronization.
- `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-8.proof-contracts.json`: initial report read; ten HIGH/CRITICAL items reviewed specifically above.
- Same risk-report command with `--require-reviewed`: 0 errors after final contract edits; all ten required reviews complete.
- Defect-ledger append: one closed row, `bayesian-computational-statistics-62-3a-b8-plugin-degenerate`, severity fatal (overstrong Statement), disposition fixed, repair_confidence 1; generated ledger view refreshed by the append tool. Its local risk-review repair decision is recorded in this report. The decisions JSON contains exactly the original one owed routed obligation.

No published item edited or defective published supplier identified; no published-consumer ledger change needed. The frontier-dependency ledger records both owned consumer checks. No unresolved mathematical prerequisite, owner escalation, or withdrawal. No judge, stamp, engine transition, or gate battery was initiated.
