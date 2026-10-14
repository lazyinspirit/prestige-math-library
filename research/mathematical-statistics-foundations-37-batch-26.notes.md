# Batch 26 authoring notes — Regression Estimation (MSF-25)

The controlling design is research/plan-mathematical-statistics-track.md, MSF-25. The pair IDs, category, orders 1894–1895, companion relation and required pages are preserved. There are now eleven A-page items and three B-page items; the added item is thm-local-linear-conditional-bias, a proved local empirical supplier, not an open problem.

## Supplier reconciliation

The earlier missing-body observations were true at authoring but are stale. Current batch25 has nonempty manifests, both pages and def-density-target-and-kernel-density-estimator; its actual Borel density/normalized-kernel interface was read. Current batch3 has nonempty manifests, both pages and def-loss-function-and-risk; its actual nonnegative loss and extended risk interface was read. Batch26 specializes these conventions without editing either supplier. These are focused interface observations, not acceptance or readiness claims. Existing def-statistic-and-estimator uses remain valid.

## Focused mathematical resolution

The local-linear counterexample was independently checked: two distinct active predictors on one side of the target give an invertible fit whose intercept is plus or minus (X1+X2)/(X2-X1), with both expectation parts infinite. The singular-only fallback never fires on that event. Therefore the original unconditional local-linear finite-mean expansion and variance guarantee are false under the stated hypotheses; the counterexample is retained with an explicit mathematical statement. The valid empirical conditional response-law bias is now proved in probability, without implying a classical conditional expectation of a nonintegrable random estimator.

The original kernel class does not assume compact support, boundedness or continuity. Local smoothness alone cannot control its remote weighted tails. The owner evidence gives a precise spiky-kernel/remote-density obstruction. The repaired population NW/LL proofs and NW empirical mean-bias proof preserve compact/local cases and supply explicit sufficient global-bound alternatives for general noncompact kernels. A separate bounded rapid-tail alternative, sup_{|u|>=A}|u|^3 K(u) -> 0 with E[Y^2]<infinity, includes Gaussian kernels with merely local C2 f,m and allows globally unbounded linear regression. These alternatives are sufficient, not necessary/minimal. The LL population proof uses affine-residual cancellation and needs no fourth kernel moment.

The moment-matrix proof uses truncation of integrable kernel moments. Conditional variance is proved for both estimators with explicit squared moments; the unconditional NW variance is also restored under its stated mean/variance bounds or rapid-tail/finite-second-moment option. No unconditional LL variance is inferred. The original nh^3 -> infinity condition is retained for empirical mean-bias and rapid-tail unconditional variance; weaker original compact/global conditional-variance bandwidths remain.

## Sources actually inspected for owner resolution

Read Newey, Nonparametric and Semiparametric Estimation, full relevant PDF pp.8–16; Newey, Locally Linear Regression, complete four-page note; Tibshirani, Nearest Neighbors and Kernels, PDF pp.1 and 5–8 including complete local-linear and boundary arguments. Actual source PDFs were read locally from /tmp/msf26-sources. Newey's derivation conditions on the design and uses additional remainder/moment control; it is not an unconditional random-design expectation proof. Tibshirani explicitly fixes/conditions on inputs in the boundary calculation. The NW exercise is proved locally. The prior author's Martin/Hoff reading is not represented as fresh owner source reading.

## Consumers and verification limits

Read all thirteen original batch26 Step1 escalation records, the current manifest/contracts/cross-batch records, and actual bodies of the changed suppliers and their consumers. Full current-run manifest dependency enumeration and actual item/library reference search find only NW finite-mean bias, kernel conditional variance and the boundary/design-gradient counterexample as existing direct/transitive consumers of the changed mathematical suppliers. The two theorem consumers are repaired in the same pass; the explicit boxcar integrations remain correct and now satisfy the broadened compact-kernel hypothesis. No outside consumers were found. The new conditional-bias theorem is itself checked against the repaired moment lemma. All unrelated item bodies and other batches remain unchanged.

Owner resolution runs only the mandatory explicit-path proof-layout after final item edits. No optional tests, broad validators, hashes, readiness/acceptance decisions, gates, native controls or commits are part of this repair. Root owns recertification and the deterministic engine owns transitions. Original native escalation records remain historical and unchanged; the owner resolution JSON records the current disposition.
