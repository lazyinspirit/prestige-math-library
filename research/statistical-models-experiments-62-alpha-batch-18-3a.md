# Step 3a adjudication — batch 18

Run: `statistical-models-experiments-62`. Dispatch group: `batch-18` (scope's original group `f` preserved). Covers batch 18 only.

## Obligations and disposition

Read the dispatch order, scope, reader report and empty findings, refuter artifact, pre/post snapshots, batch manifest, proof contracts and cross-batch dependency record. The scope has no touched items, touched pages, reader findings, or refuter findings. Consequently no decision obligations are owed and the decisions array is empty. The sole ordered obligation is the level-4 HIGH-risk review of `thm-mean-and-variance-under-biological-and-technical-replication`; it is complete. No mathematical defect, repair, escalation, proposed withdrawal, or published-supplier alert was found.

All three current item raw hashes equal their pre-reader and post-reader item hashes. Both current page raw hashes also equal their pre/post hashes. The pre/post item, contract and manifest snapshot entries agree. No item or page was edited. The only contract change is independent audit enrichment of the theorem's `risk_review`; its prior author review is retained under `prior_author_review`. No historical uncertainty or missing carrier was encountered.

## Independent theorem review

Reviewed the current Statement, Facts F1–F6 and every authored proof step 1.1–4.1. The balanced model requires positive integer counts, centered real square-integrable biological effects and technical errors on one probability space, common finite variances, and mutual independence of the complete component family. The fixed-schedule and assignment-averaged branches are interpreted under their declared laws with those component assumptions; the random treatment vector additionally has finite second moments. No inference that conditioning preserves arbitrary marginal independence is used.

The exact six direct suppliers were read: `def-biological-and-technical-replication-model`, `def-moments-variance-and-covariance`, `thm-covariance-bilinearity-and-symmetry`, `thm-factorization-of-expectations-for-independent-variables`, `def-independent-random-elements`, and `cor-expectation-linearity-monotonicity-and-modulus-bound`. The three cited result proofs were also read. Additional prerequisite context read: `def-scientific-statistical-model-contract`, `def-linear-mixed-model`, `def-random-element-and-real-random-variable`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `lem-variance-and-covariance-identities-for-random-variables`, and `def-independent-sigma-algebras-and-events`.

Step 1.1 sums each biological and treatment term exactly m times, giving Y-bar = mu + tau-bar + B-bar + E-bar. Square-integrability implies integrability by 2|X| <= 1 + X², so expectation linearity applies. Step 1.2 uses two distinct members of the mutually independent family and Borel identity functions in expectation factorization; centering makes their covariance zero. Covariance bilinearity then gives Cov(B-bar,E-bar)=0 with coefficient 1/(n²m). Finite sums remain square-integrable, as follows by repeated (a+b)² <= 2a²+2b².

Steps 2.1–2.2 correctly count n biological diagonal terms and nm technical diagonal terms, giving sigma_b²/n and sigma_e²/(nm). Step 3.1 removes only fixed constants and the already-proved biological–technical covariance. Step 4.1 expands the three random averages, retaining Var(tau-bar), 2Cov(tau-bar,B-bar), and 2Cov(tau-bar,E-bar). Independence of tau-bar from each of the other averages suffices to remove those two terms; joint three-way independence is unnecessary. The covariance sum for Var(tau-bar) holds even with dependent treatment contributions. Their mutual independence and common variance suffice for sigma_tau²/n; identical distributions are unnecessary. The statement's qualification is sound.

Checked n=m=1, either or both component variances zero, constant treatment contributions, and dependent assignment contributions. In particular, with n=m=1, tau_1=-B_1 and E_11=0, the random-branch variance is sigma_b² + sigma_b² - 2sigma_b² = 0, as required by Y_11=mu. For constrained two-unit treatment contributions tau_2=-tau_1 independent of the components, the covariance sum is zero rather than the independent-treatment specialization. Counts zero are excluded and would make the averages undefined. No interval endpoints, biconditional, or choice principle are involved. No Gaussianity, causal identification, representativeness or empirical adequacy is claimed.

The local definition's used scientific-contract clauses distinguish unit roles and quantity/conditioning laws without inferring independence. Its mixed-model specialization has nm observation rows, n random intercepts, an incidence matrix selecting B_i, and fixed mean mu+tau_i. The theorem does not require the outside batch's marginal-covariance result. No supplier Statement/Definition changed; no downstream repair is necessary. The frontier dependency ledger records this owned-consumer disposition.

Read the local example and both pages as context, without adding decision obligations. Its arithmetic is 4+1/5=21/5 versus 4/5+1/5=1, difference 16/5, with equality when biological variance is zero. Page summaries preserve the model qualifications.

## Source evidence

Independently opened the cited original sources, rather than relying on the reader's account. [Oehlert, A First Course in Design and Analysis of Experiments](https://users.stat.umn.edu/~gary/book/fcdae.pdf), §1.3 printed p.6 (PDF page index 25, lines 547–570) defines treatment and measurement units; §1.5 printed pp.8–10 (indices 27–29, lines 616–701) discusses clustered assignment, measurement units, replication allocation and unit-size caveats. These support the interpretation, without asserting the exact local moment formula.

[Holmes and Huber, Modern Statistics for Modern Biology, Chapter 13](https://www.huber.embl.de/msmb/13-chap.html), §13.3.2 (lines 112–136), §13.4.2 (158–168), and §13.4.5 (436–444) discuss replication levels, generalization, effect size and context-dependent sample size. The authored variance identity is proved locally using the cited probability suppliers. No source statement was substituted for its proof.

## Checks and handoff

- Initial `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-18.proof-contracts.json`: exit 0, zero errors; theorem HIGH score 7, other two items MODERATE.
- Updated only the theorem risk review with specific independent evidence, preserving its author review and all other contract entries.
- Final `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-18.proof-contracts.json --require-reviewed`: exit 0, zero errors, three items routed; the sole HIGH item's independent review is complete.
- No changed item paths: proof-layout, reflow and item precheck are not applicable to this audit-only update. No judge, stamping, certification, or gate battery was initiated.

No unresolved mathematical obligations or blockers remain in this dispatch. Next action belongs to the engine: collect the empty decisions and completed risk review, stamp current decision evidence as applicable, and run its checks.
