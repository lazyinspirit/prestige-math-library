# Batch 48 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`. Group: `batch-48`.

## Dependency-order review

### lem-dense-cube-polynomial-norming-and-reproduction (level 0)

Read all eight steps and six supplier statements. The finite Fourier kernel derivative integral is at most 20m, giving 100N for V_N; Lagrange interpolation gives R=(3e)^d. The weighted polynomial maximum stays delta away from the boundary; n eta <= kappa controls its gradient and gives S<=2M. Finite convex separation gives one coefficient vector for all degree-n polynomials, with l1 norm <= A^n. Affine rotation/scaling gives eta=2h/L. Checked n=1, zero polynomial, nonempty samples, positive side, no separation and no infinite choice. No defect or required diagram. Sources: current item, its six dependencies (compactness, extreme value, Euler formula and trigonometric derivatives), Rieger source metadata; the argument is local and does not assume the cited reproduction theorem. No item edit. Next: uniform fill distance.

### lem-iid-uniform-fill-distance-rate (level 0)

Read all three proof steps and seven supplier statements. Under the explicit Countable Choice assumption, closed boundary faces are null, so the half-open partition cells have probability m^(-d). Mutual independence gives (1-m^(-d))^n and the finite union bound gives <=1/n. For t>=2, floor(t)>=t/2 gives exactly C_d=2 sqrt(d) 2^(1/d). Positive L, d>=1 and sufficiently large n exclude zero volume and log endpoints. Fill distance is a continuous function of the finite sample coordinates (supremum of uniformly Lipschitz functions), so the event is measurable. No stronger choice, separation or almost-sure claim is used. No defect or diagram. Sources: current item and its seven cited probability/Lebesgue suppliers. No edit. Next: finite-dimensional risk.

### lem-ridgeless-risk-decomposition (level 1)

Read all three steps and the estimator, SVD and Penrose interfaces. X^+=VD^(-1)U^T gives X^+(X^+)^T=(X^TX)^+ and S^+=n(X^TX)^+. Conditional isotropic test second moment reduces prediction error to squared coefficient error; centered independent noise kills the cross term and contributes sigma^2 times the trace. Checked X=0 using empty rank-zero SVD, arbitrary deficient rank, sigma=0 and beta=0. No finite higher moments or rank assumptions needed; all terms finite for fixed X. No defect or diagram. Sources: four direct suppliers. No edit. Next: Gaussian power function.

### lem-gaussian-rbf-power-function-fill-distance-bound (level 2)

Read all seven steps and all six direct supplier statements. Gaussian multi-index features have unit squared norm and reproduce k by absolutely convergent coordinate series. Reweighting the polynomial coefficients cancels all degrees <=n, with coefficient l1 bound exp(t/2) A^n. The uniform tail is <=2(et/(n+1))^(n+1) when n+2>=2t. For D=kappa L/2 and n=floor(D/h), eventually n>=D/(2h), log(n+1)>=4K and >=|log h|/2, giving c=D/16 and C=1. Checked rotated cube coordinates, sigma>0, positive h, finite dependent sections and no separation assumption. Countable Choice is carried exactly for canonical RKHS existence. No defect or diagram. Sources: local reproduction lemma and current RKHS/projection suppliers. No edit. Next: noiseless interpolation.

### thm-noiseless-rkhs-interpolation-fill-distance-bound (level 3)

Read all three steps and nine direct supplier statements. Interpolation makes g=h-h* orthogonal to the finite kernel span, so Cauchy-Schwarz bounds evaluation by ||g|| P_X uniformly for every interpolant on the same sample event. Orthogonal affine coordinates preserve normalized Lebesgue sampling and distances under the stated Countable Choice hypothesis. For positive h<=bar h<e^(-1), |log h|/h>=1/bar h, giving the displayed weaker exponential rate with constants independent of h and target. A finite nonempty set cannot fill a positive-dimensional positive-side cube exactly, so h>0. Checked repeated samples, zero target/interpolant, rotated cubes, and simultaneous quantifier over all interpolants. No defect or diagram. Sources: current interpolation, power-function, measure transformation, RKHS and projection suppliers. No edit. Next: batch-47 routed findings.

### Batch-47 producer: thm-directional-sample-covariance-resolvent-limit (level 6)

Both `reader:48:1` and `refuter:48:1`: **confirmed_fatal**, repaired by the existing owner application; `repair_confidence: 1`. Both decisions reference the same closed row `ml101-b48-3a-variance-fact`.

Archived pre-repair F2 (raw SHA 66648222c924a314a643efe066a394a6eb84c9587bcb4f1390b3916a49f6f48e) is false: for square iid entries taking +4 and -4 equally, ||X_n||/sqrt(n)>=4 from any column, exceeding 2 sqrt(2). Its supplier states (sigma_R+sigma_I)(1+sqrt(c)). The owner-applied current F2 and step 2.1 (raw SHA ef3bafbd44af0945cc7c5bedc369b51e19db5f1497117ba31220db6926c741e0) supply sqrt(2) tau (1+sqrt(c)), including tau=0. Independent review of all four current proof steps, each cited supplier statement, batch47 contract derivations/citations and manifest confirms truncation variance convergence, covariance norm comparison, countable intersections over K and a dense z set, tightness and uniqueness. No producer edit here; Statement unchanged. The historical defect is repaired, not a counterexample to the current theorem.

The reader digest binds the actual archived old bytes. The refuter digest instead binds the corrected ef3bafbd source while its prose repeats the old false fact. This provenance discrepancy remains explicit (`historical_delta_unknown: true`); the original finding is not relabelled false-positive and is not attributed to the corrected bytes. Decisions retain the original producer pre-reader fingerprint, routing carrier and dependency path. The owner application and focused review are historical repair evidence, not inherited acceptance; current proof review is independent. No unresolved local producer defect identified. Next: owned zero-signal consumer.

### lem-zero-signal-isotropic-risk-limit (level 8)

Read all four steps, current finite-risk decomposition and full current batch47 edge-gap corollary, including its actual MP, edge, rank, projector and directional supplier statements. Norm-one and norm-two auxiliary signals on the same design give R1=B+V and R2=4B+V, hence V=(4R1-R2)/3. Two probability-one events suffice; the r>0 corollary applies separately and cancels its bias terms. Checked sigma=0, p_n=1 initially, gamma on either open side of 1, same signal-independent noise term and AC propagation. The current reached directional producer has the corrected variance factor and its full proof was independently reviewed. No defect or diagram; historical supplier findings recorded separately. The edge-gap proof uses bounded continuous reciprocal cutoffs and a zero-atom cutoff; its MP integrals are 1/(1-gamma) below 1 and 1/[gamma(gamma-1)] on the positive spectrum above 1. No limit interchange across the zero atom is used. No edit. Next: total risk.

### thm-isotropic-ridgeless-risk-across-interpolation-threshold (level 9)

Read all three steps and five direct supplier interfaces. For fixed deterministic norm r>0 the current edge-gap corollary has exactly the nested design, finite fourth moment, isotropic test and independent centered noise hypotheses. For r=0 the signal is identically zero and the preceding lemma applies. These cases exhaust r>=0 and retain AC. Checked sigma=0 and r=0, both aspect-ratio branches and explicit exclusion of gamma=1; no claim at the critical ratio or convergence uniform in directions is inferred. No defect or diagram. Sources: estimator, current edge-gap corollary, zero-signal lemma, AC and iid definitions. No edit. Next: bias/variance components.

### lem-isotropic-minimum-norm-risk-components (level 10)

Read both steps and all three direct current supplier interfaces. The exact finite decomposition is R=B+V. Replacing the signal by zero leaves V=(sigma^2/n) tr(S^+) unchanged, so the zero-signal lemma yields its limit; subtracting it from the total-risk limit gives B. Intersecting the two probability-one events is valid. Checked r=0, sigma=0, both sides of gamma=1 and inherited AC/nested-array hypotheses. No unsupported separation of expectations or limit exchange is used. No defect or diagram. No edit. Next: scalar risk-curve example.

### ex-isotropic-risk-components-and-signal-to-noise-regimes (level 11)

Read all three verification steps, complete Example and current component supplier. Differentiation gives sigma^2/(1-gamma)^2 below 1 and r^2/gamma^2-sigma^2/(gamma-1)^2 above 1. For r<=sigma with sigma>0 the latter is strictly negative; for r>sigma>0 its sole zero r/(r-sigma)>1 changes sign from negative to positive. Checked equality r=sigma, r=0, sigma=0 including r=sigma=0, gamma approaching 0, either side of 1 and infinity. Positive-noise risk is positive at every admissible finite gamma and tends to zero as gamma downarrow0; noiseless risk is zero throughout the underparameterized interval. The claimed infimum/minimum and critical-ratio caveats follow. No defect or diagram. No edit. All nine routed risk reviews now complete. Next: final local risk check and evidence inventory.

## Audit enrichment and retained history

`reviewed_no_defect`, `change_kind: audit_enrichment`, `defect_ids: []`: all nine risk reviews were written into the owned batch contract. No untouched item owes a new decision. The obsolete noiseless-theorem endpoint worksheet was replaced with the actual positive-fill-distance and closed-threshold check. The old Gaussian missing-proof escalation was moved intact from `unresolved` to `historical_escalations`, with the explicit owner resolution in `research/machine-learning-all-101-2026-10-19-owner-step1-readiness-reconciliation-48.json` (decision `ready-current-input-after-genuine-native-return`, 2026-10-19T03:56:24.292Z). This is contract reconciliation against an existing owner resolution and the independently read current proof, not a new mathematical repair or invented historical source reading. The old author notes and source-resolution evidence remain unchanged and retain their original escalation and inaccessible-source history.

## Sources and scope limits

Current local proofs and the supplier statements named in each review above are the mathematical basis. Also consulted the original source statements:

- [Rieger dissertation](https://d-nb.info/994624026/34), printed p. 43, Theorem 4.2.1: compact-cube reproduction under h<=c0/ell with exponential coefficient bound, attributed there to [32]. The local lemma proves the needed nonlocal form independently; no source locality assertion is imported. The browser text was readable; a screenshot request failed with a cache miss.
- [Belkin et al.](https://arxiv.org/pdf/1812.11118), Appendix A, printed pp. 14–15: iid uniform cube data with noiseless RKHS target, interpolant norm sum and a proof sketch using a covering grid and Wendland 11.22. The local proofs establish their own quantitative probability and power estimate.
- [Hastie et al.](https://arxiv.org/pdf/1903.08560), §2.4 Proposition 2 and §3.2 Theorem 1, printed pp. 9–10: the overparameterized source theorem assumes a 4+eta moment; the local finite-fourth claim is supported by the actual local directional/edge-gap results rather than an inference from that stronger source hypothesis. The scalar curve analysis was checked directly.
- [Bai, Miao and Pan](https://arxiv.org/pdf/0708.1720), Theorem 1, printed pp. 8–9: centered complex iid finite-fourth entries, bounded deterministic nonnegative population, aspect ratio and directional population-resolvent condition. These match the local producer's use; its nested-array convention and variance-scaled truncation argument were checked locally.

No recursively exhaustive audit of all foundational suppliers or complete external source proofs is claimed. No published item defect was identified, so no published ledger entry or published edit was needed. No Statement or Definition changed, and no consumer propagation repair is required. No diagrams occur in the routed carriers and none is needed for their arguments.

## Concurrent producer-ledger reconciliation

After the batch48 append, the home-batch47 adjudicator appended `ml101-b36-3a-variance-fact` for its mandatory foreign-gate ID, explicitly superseding `ml101-b48-3a-variance-fact` and preserving both batch48 adjudication references. The two batch48 decisions have therefore been rebound to the single active closed row `ml101-b36-3a-variance-fact`. The original batch48 row remains append-only history; the earlier report references describe its original append, not a second active defect. No outside decision or ledger row was edited. Any required owner authentication for gate/touched sharing remains engine/owner work.

## Checks and handoff

- Initial `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-48.proof-contracts.json`: 0 errors, 11 items routed; nine HIGH/CRITICAL items reviewed.
- Final `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-48.proof-contracts.json --strict`: 0 errors, 0 warnings, 11/11 items checked.
- Final risk report with `--require-reviewed`: 0 errors, 11 items routed; all nine required reviews complete.
- Focused JSON/evidence assertions: exactly two owed decisions, each retaining producer/consumer routing and referencing exactly one active shared closed defect row. All eleven owned item raw hashes equal both immutable pre-reader and post-reader snapshots. There are no reader source repairs to accept, amend or revert, no touched/page obligations and no foreign-gate obligation in this dispatch.
- No item changed; no formatter, reflow, precheck or proof-layout run was required. Contract checks are local metadata checks. No judge, stamp, dispatch, engine transition, gate battery, publication or commit was performed.

Native status was read from `.autopilot/machine-learning-all-101-2026-10-19`: Step 3 is active, batch48 adjudication pending collection; unrelated split-51 and collect-36 failures remain listed. Latest Git head observed: `38f95712f5 Allow exact owner unit holds without removing native work`. Old handoffs were not used to infer active state.

No unresolved mathematical blocker was found in this dispatch. The refuter observation-byte discrepancy remains explicit historical uncertainty. The engine/owner owns hash stamping, aggregate regeneration, remaining gates, authentication of the concurrent ledger sharing and stage transitions. Outside holds remain unchanged.
