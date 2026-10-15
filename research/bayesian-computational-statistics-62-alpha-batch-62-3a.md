# Batch 62 Step 3a adjudication

Run: `bayesian-computational-statistics-62`. Group: `batch-62`. Scope group `u` retained. Exactly two touched obligations; reader/refuter findings and page obligations are empty. No agents, judgments, stamps or gate cycles initiated.

## Dependency-ordered review

### lem-gaussian-density-integrals-for-supplied-length-measures (level 0)

Checked Proof 1.1–6.1 against all 17 direct supplier statements: finite enclosing boxes and arbitrarily thin slabs make faces null; finite disjoint Darboux sums squeeze bounded Borel Riemann integrands, with a finite constant shift for signed functions. Explicit expanding boxes justify MCT; Gaussian substitution gives mass one, compact integration by parts gives second moment one with vanishing boundary term, |t|≤1+t² gives absolute integrability and DCT gives centered mean zero. Affine compact substitutions give every m∈R,v>0; v=0 and degenerate boxes are excluded. Measures are supplied, not constructed, and no sequence of choices is used. Reader/refuter no-findings independently assessed; no defect found.

Evidence: current item Facts F1–F7 and Proof 1.1–6.1; direct suppliers’ Statement/Definition sections, especially thm-multidimensional-darboux-equals-riemann, thm-gaussian-integral, thm-substitution, thm-integration-by-parts, thm-monotone-convergence-for-the-integral and thm-dominated-convergence. Bibliographic citations are context; the compatibility argument is proved locally. Risk review complete. No decision owed. Next: total-variation theorem.

### thm-total-variation-bounds-for-expectations (level 0)

Proof 1.1–4.1 checked against all ten direct suppliers. Explicit threshold sums satisfy 0≤w−s_n≤L/n including w=L; finite additivity gives the event-supremum bound L·TV and probability mass one bounds remainders. Archimedean reciprocals remove 2L/n without any choice of a sequence. Shifting signed f by M gives the exact factor 2M; boundedness proves absolute integrability. M=0 is separate, P=Q is harmless, and an empty space cannot carry the assumed probability laws. Reader/refuter evidence checked; no defect.

Evidence: current Facts F1–F7, Proof 1.1–4.1, and all direct supplier Statement/Definition sections. Risk review complete; no decision owed. Next: exact-target definition.

### def-exact-inferential-target-and-approximation-chain (level 1)

Checked entire Definition and all seven direct supplier statements. A supplied nonnegative measurable fixed-data likelihood and 0<Z_x<∞ yield a countably additive normalized law by the indefinite-integral theorem. Zero/infinite evidence is expressly excluded; no measurable family of density versions or common exceptional set is inferred from def-likelihood-density. The finite chain requires m≥1 and a single declared metric scale; the scalar ledger uses actual same-space signed differences, without independence, centering or convergence assertions. No new choice is needed for supplied data. Reader/refuter no-findings independently assessed; no defect.

Evidence: Definition and direct supplier Definition/Statement sections, particularly the version caveats in def-likelihood-density and measure construction theorem. Risk complete; no decision owed. Next: metric-chain theorem.

### thm-metric-approximation-error-decomposition (level 2)

Proof 1.1–2.1 independently checked against the five direct suppliers, including full current pathwise/MSE proofs. Finite induction and a final triangle inequality give an upper bound, with m=0 reducing to equality and m=1 valid. Scalar telescoping is exact, while MSE retains bias and covariance under square integrability; the text asserts no variance addition or independence. All elements belong to the same declared metric space. No choice or limiting argument; no defect.

Evidence: current Facts F1–F4 and Proof 1.1–2.1, thm-pathwise-error-ledger-decomposition Proof 1.1–3.1 and thm-error-ledger-mse-covariance-identity Proof 1.1–6.1. Risk complete; no decision owed. Next: summary-loss example.

### cex-identifiable-nonconstant-summary-loses-parameter (level 2)

Checked Counterexample 1.1–3.1 and all twenty direct supplier statements. The discrete metric proves finite spaces standard Borel, and completeness/dense countable rationals supplies R. Each model row has exactly two masses 1/2; event z=0 separates parameters. Observation (0,0) has evidence 1/4 and posterior δ0. Nonconstant measurable S(z,w)=w has Bernoulli(1/2) law at both parameters; closed zero-tolerance acceptance is {0}, with probability 1/2>0, leaving the prior unchanged. Event θ=0 gives TV≥1/2. No zero-event conditioning or choice, and no assertion that nonconstant implies informative. Reader/refuter no-findings independently assessed; no defect.

Evidence: Facts F1–F6 and Counterexample 1.1–3.1, direct supplier definitions including current ABC closed-ball/positive-event convention. Risk complete; no decision owed. Next: touched Hessian example.

### cex-local-hessian-does-not-capture-multiple-modes (level 2; touched)

All six proof steps and all 26 direct suppliers checked. Each finite sampling row sums to one and p(1) is injective; positive bounded indexed likelihood gives finite positive evidence on [-2,2]. Both modes ±1 have h″=−8, so unique-mode Laplace assumptions fail rather than being invoked. Gaussian precision 8n gives the stated normalization. Affine half-line transforms exhaust R, and reflection plus null singleton yields posterior half-mass, proving liminf TV≥1/2. Endpoints ±2 cause no extra modes. Countable Choice is explicitly carried through Gaussian/Lebesgue suppliers; the full current Gaussian supplier proof was checked. Exact historical preimage found at owner-step2-gate1-57-62-before and matches pre-reader hash ed55b42c…; diff contains only indexed-likelihood clarification and matching step 1.2. Current raw hash 77862e91… equals frozen post-reader. Accept reader repair; nonfatal notation defect closed, no statement change or consumer repair.

Verdict: `accepted_repair`, repair confidence 1. Defect `bcs62-b62-3a-hessian-index`: original Facts used undefined p_θ although the experiment was indexed by n; the intended likelihood was immediate from step 1.2. Evidence: exact before archive `research/bayesian-computational-statistics-62-owner-step2-gate1-57-62-before/cex-local-hessian-does-not-capture-multiple-modes.md`, current Facts and Counterexample 1.1–3.1, direct supplier statements and Gaussian supplier proof. Risk complete. Next: mean-field example.

### cex-mean-field-variational-posterior-misses-correlation (level 2; touched)

All four proof steps and sixteen direct supplier statements checked. Supplied area gives a length measure; (-n,n] exhaustions establish sigma-finiteness and the generating-box uniqueness theorem identifies its product with the area Borel restriction. Conditional Gaussian factorization proves mass one, marginal variances 1 and covariance 1/2; |xy|≤(x²+y²)/2 justifies signed Fubini. Every family member has positive finite densities and integrable absolute quadratic logs, satisfying the current amended ELBO definition. Completing the mean quadratic gives the unique zero means. MVT on compact positive intervals proves the unique global variance maximum β=3/4, including both sides and excluding v=0. Thus the optimizer has covariance zero and smaller marginal variances. No extra choice is needed with supplied measures. Reader calculus elaboration is nonfatal polish; the repaired Blei locator is independently verified at §2.3 printed 862 and Figure 1 printed 863 (PDF 5–6). Exact pre-reader source is recovered by simultaneous step-number remap 1.2→2.1,2.1→3.1,3.1→4.1 only within the archived Counterexample; its SHA256 equals 45bd793e… and current source equals post-reader 827a12b8…. Amended acceptance retains all reader source edits and refreshes the F2 current-source quotation and manifest mirrors.

Verdict: `amended_repair`, repair confidence 1. No source edit. The four calculus dependencies and provenance are mirrored into the owning manifest; F2 now quotes the actual current supplier Definition, resolving the batch25 handoff. No Statement/Definition changes or affected mathematical consumers. The earlier derivative-sign inference was immediately closable calculus polish; it is not classified fatal. Closed defect `bcs62-b62-3a-blei-locator` records the erroneous historical PDF 2–3 locator.

Historical reconstruction: use `research/bayesian-computational-statistics-62-owner-step2-gate1-57-62-before/cex-mean-field-variational-posterior-misses-correlation.md`; split at `## Counterexample`, simultaneously replace standalone step labels `1.2`, `2.1`, `3.1` in the suffix by `2.1`, `3.1`, `4.1` respectively, retaining every other byte. SHA256 is `45bd793ebcbd3325f552d7974591600eedd80397e1407117e97bf1de65ae4f93`, exactly the immutable pre snapshot. This is authenticated by the frozen digest, not an assumed historical delta. Source changes relative to that reconstructed preimage are the four calculus dependencies, F9/F10, expanded step 4.1 and Blei locator, matching the reader report.

External source independently opened: [Blei et al.](https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2017.pdf), §2.3 p.862 and Figure 1 p.863, PDF 5–6, paragraphs on independent factors and covariance/variance loss. This is motivation; exact β and optimizer are proved locally. Risk complete. Next: synthetic likelihood.

### cex-synthetic-likelihood-changes-inferential-target (level 2)

Counterexample 1.1–3.1 and thirteen direct supplier statements checked. Finite rows each total 24/24 and differ at y=1, identifying the parameter. Both first moments are 36/24=3/2, second moments 84/24=7/2, variance 5/4>0. Finite spaces guarantee likelihood/summary measurability; equal prior gives exact evidence 5/16 and posterior mass 3/5 at 1. Exact-moment Gaussian likelihoods coincide and are strictly positive, leaving posterior mass 1/2. Event {1} gives TV≥1/10. The ideal branch explicitly assumes AC, no finite-simulation unbiasedness or singular-covariance claim is made. Reader/refuter evidence assessed; no defect.

Evidence: Facts F1–F5 and Counterexample 1.1–3.1; current def-synthetic-likelihood ideal versus finite-simulation Definition and other direct suppliers. Risk complete; no decision owed. Next: positive-tolerance ABC.

### cex-positive-abc-tolerance-changes-posterior-target (level 4)

Counterexample 1.1–3.1 and all thirteen direct supplier statements checked, plus the complete current rejection algorithm/theorem. Finite kernel and summary are measurable and standard-Borel admissible. At observed 1, exact evidence is 1/2 and posterior mass 4/5. The closed real ball [2/5,8/5] has support trace {1/2,1} (the finite tolerance event meant in step 1.2), giving acceptance 4/5 and 9/10 at the two parameters, hence prior-predictive p=17/20>0 and ABC mass 9/17. Exhausting all four parameter events proves TV exactly 23/85. Rejection-law use is expressly conditional on an existing mutually IID proposal-simulator sequence; its geometric proof handles p=1 as well and asserts almost-sure, not deterministic, termination. No zero-probability conditioning, extra choice or convergence assertion. Reader/refuter evidence independently assessed; no defect.

Evidence: Facts F1–F6, Counterexample 1.1–3.1, thm-abc-rejection-target-is-tolerance-conditioned-posterior full proof, alg-abc-rejection Definition, and direct supplier statements already checked for the summary-loss example. Risk complete; no decision owed. All nine item reviews complete.

## Final dispositions, checks and limits

Exactly two routed decisions were written: `touched:62:cex-local-hessian-does-not-capture-multiple-modes` is `accepted_repair`; `touched:62:cex-mean-field-variational-posterior-misses-correlation` is `amended_repair`. Both have repair confidence 1. Three append-only closed ledger rows record the indexed notation correction (nonfatal), Blei locator correction (nonfatal), and `bcs62-b62-3a-variance-calculus-citations` (citation polish). The last records the immediately closable calculus citation omission; it does not imply an invalid optimizer. Mechanical quotation mismatches did not receive defect rows. No reader/refuter or page decision is owed, and none was invented.

The mean-field amendment changes only batch metadata/evidence: four reader-added calculus dependencies and current provenance are mirrored in the manifest; the ELBO F2 and calculus F9/F10 quotations now match their actual current suppliers. The batch25 handoff is resolved. All nine current item raw hashes equal the frozen post-reader hashes; neither item source nor either page was edited here. The two page summaries were checked as context and retain the metric upper-bound, fixed-data normalizer, finite ABC-event/IID and supplied-measure/choice qualifications. No Statement/Definition changed, no consumer repair is necessary, all stable IDs are preserved, and no withdrawal was proposed or removed. Existing owned cross-batch item-edge evidence and `briefs/tasks/frontier-dependency-ledger.md` were updated. Published content remained read-only; no defective published supplier was found, so no published ledger entry or lock was needed.

Local checks actually run:

- Initial `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-62.proof-contracts.json`: nine CRITICAL items, zero errors; all received item-specific complete reviews before proceeding higher.
- Final same command with `--require-reviewed`: nine items, zero errors.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-62.proof-contracts.json --strict`: 9/9 items, zero errors and warnings. An initial check identified three nonliteral calculus quotations; replacing them with actual current Statement sections resolved the check. No mathematics was changed for this mechanical failure.
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-local-hessian-does-not-capture-multiple-modes.md items/cex-mean-field-variational-posterior-misses-correlation.md`: two checked, zero failures.
- Final `node tools/proof-layout.mjs items/cex-local-hessian-does-not-capture-multiple-modes.md items/cex-mean-field-variational-posterior-misses-correlation.md`: two items, ten numbered steps, zero defects. No source edit or formatter followed it.
- Raw SHA256 comparison: all nine current sources match immutable post-reader item hashes. Both touched preimages are authenticated as detailed above; no historical uncertainty or owner historical disposition is required.
- Native defect-ledger append recorded three closed rows and refreshed its generated view. The first append attempt used an invalid class value; it appended nothing, and the corrected canonical accuracy row succeeded. This was bookkeeping only, with no defect row for the tool failure.

No unresolved mathematical blocker or escalation remains in this dispatch. Direct dependencies were read at their exact Statement/Definition sections; the particular Gaussian, scalar-ledger and rejection arguments needed additional full-proof inspection as recorded. This is independent review of the assigned carriers and their actual uses, not an audit of every transitive foundation or every bibliography entry. The Blei locator was independently checked in the external PDF; other bibliography entries were not claimed as exhaustively verified. Decision hashes, full gate battery and stage transitions remain engine-owned. No judgment, stamping, certification or engine transition was performed.
