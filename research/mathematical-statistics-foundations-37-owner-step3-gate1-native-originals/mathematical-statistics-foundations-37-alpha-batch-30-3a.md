# Batch 30 Step 3a adjudication

Run: `mathematical-statistics-foundations-37`; group: `batch-30`.

Scope: exactly the touched finite-dimensional convolution lemma and `refuter:30:1`; all seven HIGH/CRITICAL risk reviews in generated dependency order. Reader findings are empty. Published prerequisites remain read-only.

## Completed item reviews

- Level 2, `thm-asymptotic-linearity-implies-normality`: reviewed every step and six supplier interfaces. Centered L2 iid CLT plus scalar Slutsky on every projection gives the asserted fixed Gaussian limit by Cramer–Wold; singular/zero covariance causes no inverse. AC is explicit; the zero-dimensional singleton convention is trivial if admitted. No regularity or moment convergence is inferred. Risk review complete; no decision owed. Source: Kennedy, https://arxiv.org/pdf/1709.06418, §3, PDF p.3, equations (2)–(3).

- Level 3, `lem-finite-dimensional-functional-convolution-bound`: six proof steps and twenty direct prerequisite interfaces checked, including full current Le Cam third lemma and Fubini proofs. Pointwise LAN proxy and common target-centered limit give the tilt identity; Gaussian exponential moments justify coordinatewise analytic continuation. The substitution `u-K^{-1}D^Tt` cancels mixed terms and gives residual factorization. The bounded product integrand is complex L1 under a product probability, so the added Fubini dependency is applicable; scalar uniqueness and Cramer–Wold identify the joint product law. Positive-definite K is essential; singular/zero target covariance is harmless. No residual moments are assumed. Risk review complete.

  Reader comparison: current pre-edit item SHA256 equals the frozen post-reader `fb1dc04d69169ac3426dc78113dd43e192cfb0bd792a814abcdc5865c74cd18d`; pre-reader item hash is `42ba0b58a4eade9c67dd0c5039b9a8a153c332e2f19c32585fe21393e92ff7f6`. The manifest retains the added Fubini supplier, the contract its exact statement and step-6 input. Preserve this sound reader repair. Touched disposition: `amended_repair` because the refuter markup defect also needs correction.

  `refuter:30:1`: `confirmed_nonfatal`. Current step 5.1 has the reported math/prose adjacency `.$Set` and `gives$E` and punctuation inside closing math spans. Restore math delimiters and ordinary spaces, moving full stops outside formulas; the residual algebra and references are unchanged. The intended formulas were mathematically sound and recoverable. Mirror the repaired step in the contract. Repair confidence: 1. Statement and dependencies unchanged, so no consumer interface repair is triggered. No judge record existed.

  Source consulted independently: van der Vaart, https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf, Theorem 4.12 and complete proof (a)–(b), PDF pp.44–46, printed pp.44–46. It supplies convolution context; the authored characteristic-function proof was checked locally rather than inferred from the citation.

- Level 5, `lem-one-sided-dqm-implies-iid-lan`: reviewed seven steps, eighteen direct supplier interfaces and the complete DQM-score mean-zero proof. DQM bounds both singular mass and zero-density base mass by o(t²); normalization gives the mean drift, iid L2 remainder variance vanishes, square-sum convergence and uniform-integrable row tails justify log Taylor expansion. The product mixture TV bound is at most n alpha; Tonelli and generating rectangles identify the normalized probability proxy. h=0, I=0, alpha=0, and sufficiently-large-n path admissibility are sound. Risk review complete; no decision owed.

- Level 9, `thm-general-regular-estimator-convolution-bound`: reviewed four steps and nine supplier interfaces, full influence-representer and QMD-to-LAN proofs. Finite-dimensional orthogonal projections have covariance DI^{-1}D^T; the explicit per-model regularity and target shifts permit convolution. Finite covariance of L and the Gaussian gives finite residual covariance on the independent-sum realization by the squared triangle bound. Density yields each scalar canonical-gradient quadratic form without requiring a countable cofinal family. Zero tangent space is separate. AC/Countable Choice are explicit; no attainment is asserted. Risk review complete; no decision owed. Source context: van der Vaart Theorems 2.7 and 4.12, printed pp.18 and 44.

- Level 9, `thm-semiparametric-information-bound-for-regular-al-estimators`: reviewed six steps and the direct supplier interfaces. Joint L2 CLT, scalar perturbations, mean-one proxy tilt and TV transfer give the local Gaussian mean shift. Fixed h>0 and regularity equate derivative and estimator-score pairing; continuity extends to the tangent closure. Orthogonality eliminates covariance cross terms. Singular/zero covariance and zero tangent space require no inverse. Risk review complete.

  Additional nonfatal defect found during the assigned risk review: step 3.1 explicitly attributed nonlinear exponentiation to [F7], whose supplier is Cramer–Wold. Add continuous mapping as F11 and a direct dependency, use it for `(T_n,ell_n) -> (T_n,exp(ell_n))`, and mirror the dependency and derivation in the owning manifest/contract. This is an inaccurate citation, not a false probabilistic conclusion. Repair confidence: 1; statement unchanged, so no consumer interface change. No extra routed decision is invented; the closed defect will be recorded in the ledger and this report.

- Level 9, `cex-finite-mean-functional-without-l2-influence-curve`: reviewed four steps and four suppliers. The geometric atomic law has finite mean/infinite second moment; bounded centered tilts are normalized DQM paths with exact finite L1 derivatives. Truncation scores have derivative D_M and squared norm at most D_M, while large included atoms each contribute at least 1/4 to D_M. The derivative/norm ratio diverges and contradicts any L2 representer by Cauchy–Schwarz. Nonzero denominators are used only for large truncations; no infinite-integral subtraction or L2 assumption on the centered f occurs. Risk review complete; no decision owed.

- Level 10, `ex-sample-mean-attains-unrestricted-mean-bound`: reviewed five steps and fifteen supplier interfaces. Bounded score tilts are explicit DQM paths; centered truncations approximate L2_0 and make X-mu the canonical gradient. The sample mean expansion is exact. Joint CLT and the mean-one proxy tilt yield the local shift; the exact target shift cancels it, proving regularity under precisely the designated paths. Finite/zero variance, h=0 and zero score are covered. AC/Countable Choice are in Facts & Assumptions. No claim of regularity on arbitrary other DQM paths is made. Risk review complete; no decision owed. Source: van der Vaart Example 2.11, printed pp.18–19 (PDF pp.18–19).

## Review limits and disposition

All seven authored arguments and their direct dependency statements/definitions were read. Full supplier proofs read where material: Le Cam third lemma, Fubini, DQM-score mean zero, influence-curve representers, and QMD-implies-LAN. This is not a new audit of the entire upstream transitive closure. Independent external reading included Kennedy §3 equations (2)–(3); van der Vaart Theorems 2.7/4.12, complete convolution proof (a)–(b), and Example 2.11; Duchi §4.3.1 Lemma 4.2 and bounded-score tilt construction; Bartlett QMD definition and LAN theorem, PDF pp.9–11. The local one-sided proof supplies its own singular-mass, normalization and Taylor argument; external LAN citations do not replace it.

No defective published supplier, out-of-batch consumer defect, withdrawal, or unmet prerequisite was found. Published carriers were not edited. Both edited items retain their Statements and existing source-backed ai-altered proof provenance. The only new dependency is the existing continuous mapping theorem. Exactly two routed decisions are written; the additional local citation repair is recorded without inventing an obligation. All three confirmed nonfatal defects have closed ledger rows; final focused checks are recorded below.

## Decisions and closed defects

- `touched:30:lem-finite-dimensional-functional-convolution-bound`: `amended_repair`, confidence 1. Retain the reader Fubini repair (ledger `mathematical-statistics-foundations-37-3a-batch-30-fubini`) and correct the separately adjudicated markup.
- `refuter:30:1`: `confirmed_nonfatal`, confidence 1, exactly one row: `mathematical-statistics-foundations-37-3a-batch-30-markup`.
- Additional assigned-risk-review citation defect: `mathematical-statistics-foundations-37-3a-batch-30-continuous-mapping`, fixed with confidence 1. No extra decision owed.

All rows were appended with caught_at_stage `3a-adjudicate`, role `group-alpha`, severity `nonfatal`, disposition `fixed`; the ledger tool refreshed its generated view. No historical source reconstruction or unknown-content disposition was required: the current convolution lemma before editing exactly matched the frozen reader-post source. Pre/post item, contract and manifest hash records were compared; the reader report describes the added Fubini premise and exact contract citation. Neither edited item had a judge record. Changes are local citations, dependencies, delimiter spacing and risk evidence; no material mathematical rewrite or Statement change occurred.

## Local checks

- Initial `node tools/risk-report.mjs research/mathematical-statistics-foundations-37-batch-30.proof-contracts.json`: seven CRITICAL items, zero errors. All seven now have specific complete risk reviews.
- Final `node tools/risk-report.mjs research/mathematical-statistics-foundations-37-batch-30.proof-contracts.json --require-reviewed`: seven reviewed items, zero errors.
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-finite-dimensional-functional-convolution-bound.md items/thm-semiparametric-information-bound-for-regular-al-estimators.md`: both unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on those two explicit item paths: 2 checked, 0 failing.
- `node tools/proof-layout.mjs items/lem-finite-dimensional-functional-convolution-bound.md items/thm-semiparametric-information-bound-for-regular-al-estimators.md`: run once after final edits/reflow; 2 items, 12 steps, 0 defects.
- `node tools/rendercheck.mjs` on those two explicit item paths: both pass real KaTeX and renderer YAML parsing.
- `node tools/proof-contract.mjs research/mathematical-statistics-foundations-37-batch-30.proof-contracts.json --strict`: final 7/7 checked, 0 errors, 0 warnings. Initial check caught my stale F7 use-list entry after the citation replacement; removed that obsolete contract use, then the final check passed. This mechanical synchronization failure was not given a defect row.
- `node tools/frontier-dependency-ledger.mjs refresh --run mathematical-statistics-foundations-37`: refreshed and deduplicated. Owned input rows retain prior evidence, owner resolutions and the removed candidate; added independent alpha_review evidence for current exact uses. The new supplier is published and adds no cross-batch in-run edge. Both owned page summaries and three page prerequisite interfaces were opened for these records; they owe no page decisions.

## Owner alert and handoff

`node tools/defect-ledger.mjs validate --run mathematical-statistics-foundations-37` failed on outside-scope row `msf37-batch24-3a-fixed-radius-truncation`: subclass `proof-step-overstatement` is outside the closed enum (29 run rows checked at that instant, one error). The three batch-30 rows passed the append tool's closed-schema validation. Route the existing batch-24 row to its owner for schema correction; I did not edit its row or create a defect for the validator failure. This is a run-wide bookkeeping alert, not an unresolved batch-30 mathematical prerequisite.

No batch-30 mathematical blocker, open risk review, outside mathematical defect or proposed withdrawal remains. Report and decisions are complete; engine hashing, stamping and the gate battery remain engine-owned. No judge, certification, dispatch, stage transition or publication action was performed.

Final edited source hashes (raw SHA256, evidence only):

- `lem-finite-dimensional-functional-convolution-bound`: `6955b2e597e69a52b423a5d0fdab2791f8a05473be6e280c1c6f015000f32332`.

- `thm-semiparametric-information-bound-for-regular-al-estimators`: `3146c087aa6543b63d7eb56cdb038eaf760133def59788d0efc393552964595c`.
