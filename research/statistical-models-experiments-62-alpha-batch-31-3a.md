# Batch 31 Step 3a adjudication

Run: `statistical-models-experiments-62`. Group: `batch-31`.

Scope: no touched items/pages or reader/refuter findings; no decisions owed. Initial risk-report: all five items CRITICAL (11, 11, 8, 8, 8), zero errors.

## thm-iid-terminal-influence-limit

Checked current steps 1.1–3.1 and all eight direct supplier carriers. Measurable preimages preserve common law and mutual independence; finite second moment identifies covariance. The IID CLT explicitly allows singular and zero covariance under AC, carried in the statement. Same-sample scaled remainder tends to zero in probability, so vector Slutsky applies to addition without independence. Fixed finite d>=1 excludes empty dimensions; sample indices tend to infinity. No converse, process limit or derivation of the expansion is claimed. Reader and refuter have no findings; no mathematical defect found.

Evidence: current item Statement, Facts and Proof; eight declared direct suppliers, including the current IID CLT and vector Slutsky proofs; reader and refuter artifacts. Complete risk review recorded. Next: independent-groups theorem.

## thm-independent-groups-terminal-influence-limit

Independently checked steps 1.1–5.1 and all fifteen current direct suppliers. Fixed finite G and positive deterministic limiting proportions imply n_g tends to infinity; measurable images preserve within-group IID and independence of the subject-family sigma-algebras. Each group CLT carries AC and finite second moments. Deterministic scaling follows from vector Slutsky; projections are continuous. Independence gives the finite product of characteristic functions; its limit is exp(-t^2 u^T V u/2) with symmetric positive semidefinite V=sum rho_g^(-1) Sigma_g. Current normal definition and normal characteristic-function lemma include zero variance; characteristic criterion and Cramer–Wold apply to the specified Gaussian law under AC. Final same-sample o_P(1) remainder is handled by addition in Slutsky. No inverses of covariance, allocation endpoints, growing group count, process CLT, or derived estimator expansion are asserted. No mathematical defect found; reader/refuter findings are empty.

Evidence: current Statement, Facts and Proof; the fifteen declared supplier carriers, including characteristic-function definition, affine/sum lemma, normal lemma/definition, continuity theorem/criterion, Cramer–Wold, IID CLT, vector Slutsky, CMT, covariance and stochastic-order definitions. Complete risk review recorded. Next: level-1 examples.

## ex-bernoulli-terminal-influence-limit

Checked Example and Verification 1.1–2.1 against all four current direct suppliers. Shift by p is measurable and preserves mutual independence and common law. Direct Bernoulli expectation gives E(B-p)=0 and E(B-p)^2=p(1-p), finite for every p in [0,1]. Sample mean identity supplies exactly zero remainder; current IID terminal theorem applies in d=1 under explicitly inherited AC. At p=0 and p=1 all errors vanish almost surely and the limiting point mass N(0,0) is explicitly included. No empty sample or converse is asserted. Reader/refuter have no findings; no defect or repair.

Evidence: current Example and Verification, IID terminal theorem already reviewed, IID/moments/AC definitions. Complete risk review recorded. Next: weighted group example.

## ex-independent-groups-weighted-mean-limit

Checked Example and Verification 1.1–2.1 against all five direct suppliers. The target and estimator use the same fixed rho weights, so no unassumed sqrt(n) allocation-rate remainder occurs. Contributions rho(X-p_1) and (1-rho)(X-p_2) are measurable, centered, square integrable and mutually independent across groups. The displayed expansion is exact because sqrt(n/n_g)/sqrt(n_g)=sqrt(n)/n_g. With positive limiting proportions the group theorem applies (sample means require positive sample sizes, which in any case hold eventually). Covariance simplifies to rho p_1(1-p_1)+(1-rho)p_2(1-p_2). Each p_g endpoint, one or both zero variances, is included; rho endpoints are excluded. AC is explicitly carried; no converse is claimed. Reader/refuter report no findings; no defect or repair.

Evidence: current Example and Verification and its five direct suppliers; the group theorem risk review above checks the covariance formula and independence requirements. Complete risk review recorded. Next: empty-risk-set example.

## ex-uncontrolled-risk-set-denominator

Checked Example and Verification 1.1–2.1 against all six current direct suppliers. For every n>=2 the deterministic threshold t_n=2^(-1/n) is interior; uniform continuity of the event-time law makes P(T_i<t_n)=t_n. Finite independence gives P(K_n=0)=t_n^n=1/2 exactly. The explicit empty-set convention defines the ratio at denominator zero; since X_i=1 it equals one off that event and zero on it. Thus root-n error has masses 1/2 at 0 and -sqrt(n); for each fixed M>0 its eventual tail is 1/2. Taking eta=1/4 violates the stated O_P(1) definition. Current stochastic-order theorem part 3 (proof 1.1) makes any finite-dimensional weakly convergent sequence O_P(1); contradiction excludes a weak limit and hence any centered finite-variance fixed-IID influence expansion under the terminal theorem with AC. No independence across rows or process-level CLT is needed, no converse is asserted, and K_n=1 is harmless. Reader/refuter have no findings; no defect or repair.

Evidence: current Example, Facts and Verification; stochastic-order calculus Statement part 3 and Proof 1.1; IID terminal theorem and IID, independence, stochastic-order and AC definitions already reviewed. Complete risk review recorded. No remaining item review.

## Source and prerequisite evidence

All direct dependency carriers of the five assigned items were read, including their current definitions/statements and supplied arguments. The covariance definition's well-definedness lemma was also read: integrability follows from coordinate square bounds, and finite linearity gives positive semidefiniteness. This is a focused prerequisite review, not a recursive audit of every transitive supplier or of the unrelated counting-process batch.

- [Chatterjee, Stats 310A notes](https://souravchatterjee.su.domains/stat310a-lecture-notes.pdf), PDF pp. 104–107 / printed pp. 100–103: read Proposition 8.5.3 and its proof, Theorem 8.7.1 and proof, Proposition 8.8.1 and proof, and Theorem 8.9.1 and proof. Slutsky assumes a constant probability limit with the paired variables on the same probability space; finite-dimensional projection convergence and the IID covariance CLT support the applications here. Current bibliography locators are correct. The stale source-locator concern in batch notes does not describe current content.
- [Durrett, Probability: Theory and Examples, fifth edition](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf), PDF pp. 208–209 / printed pp. 200–201: read Theorems 3.10.5–3.10.7 and proofs. The convergence theorem uses a specified limiting characteristic function; Cramér–Wold uses all scalar projections; the vector IID CLT assumes finite covariance. All those conditions are met in the current arguments. The singular Gaussian construction on printed p. 201 also confirms that no positive definiteness is required.
- [Bartlett, Lecture 16](https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/16notes.pdf), PDF pp. 9–12: read the delta-method statement and proof. Its conclusion uses a vanishing probability remainder and continuous mapping/Slutsky. The assigned proofs use their local suppliers directly rather than importing a delta-method hypothesis.

The web tool timed out fetching Chatterjee and Durrett. Direct Python HTTPS retrieval succeeded for both complete PDFs; PyMuPDF extracted the specified pages for reading. Bartlett opened in the web tool. An attempted `pdftotext` extraction failed because that executable is absent; PyMuPDF resolved that mechanical issue. No mathematical uncertainty resulted.

Both current page summaries were read for context and accurately distinguish assumed expansions from terminal limits; there are no page obligations. The cross-batch page prerequisite record concerns counting-process context; none of these five arguments uses a compensator or stochastic-integral theorem. No outside supplier defect or affected published consumer was identified. No published ledger edit is warranted. A targeted search of `briefs/tasks/frontier-dependency-ledger.md` for the five owned consumers found no existing entries to maintain; there is no new supplier change or withdrawal.

## Outputs, changes and checks

The pre/post snapshots agree for every item/contract/manifest projection and both page projections. Independent SHA-256 comparison confirms that all five current raw item files and both current raw page files still match their post-reader snapshots. No reader repair is present to accept, amend or revert. No source item, page, manifest, verification record or defect ledger was edited.

The batch contract gained five complete, item-specific `risk_review` records. One stale audit-text locator was normalized: the IID theorem's nonempty-choice boundary now points to its actual CLT step 2.1 rather than nonexistent step 1.2. This is metadata/audit enrichment, with no mathematical defect or defect-ledger row. The formal decision inventory remains exactly empty as required by the scope.

Checks performed:

- `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-31.proof-contracts.json`: exit 0; all five items routed CRITICAL.
- `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-31.proof-contracts.json --require-reviewed`: exit 0; five complete risk reviews, zero errors.
- Current raw item/page comparisons against pre/post snapshots: all seven match; pre/post projections agree.
- Decisions JSON contains `version: 1`, the exact run, `group: "batch-31"`, and `decisions: []`.

No items were edited, so proof-layout/reflow/precheck are not triggered. No judge, stamp, certification or gate battery was run. No escalation, published finding, mathematical repair, or unresolved blocker remains in this dispatch. Handoff is to the engine for hash stamping and its gate battery.
