# Batch 53 Step 3a adjudication

Run: numerical-optimization-dynamics-2026-10-16. Group: batch-53. Review in the dispatched dependency order; no judge or engine gate invoked.

## lem-maximal-ode-solution-extends-from-compact-tube

Reviewed steps 1.1–4.1 and all eight supplier statements. C is nonempty because it contains the graph at t0; coordinate bounds give a Lipschitz curve and the explicit tn gives a limit without countable selection. Closedness places (b,xb) inside D; MVT proves the one-sided derivative there, and local existence and gluing give a proper extension whether b was included. M=0 and d=1 are harmless. No defect found.

## thm-ode-residual-a-posteriori-error-bound

Reviewed steps 1.1–5.1 and all 23 direct supplier statements. The exact solution is C1 with bounded derivative on the compact time interval, hence coordinatewise AC; finite sums give e and its norm AC. At q=0 its derivative is zero wherever it exists; elsewhere Cauchy–Schwarz gives the scalar inequality even for signed ell. The integrating factor is bounded and AC, and w*rho is integrable. The positive-part argument legitimately integrates the a.e. inequality; t=a, zero residual and M=0 are covered. Countable Choice and DC are expressly retained for the AC FTC and Countable Choice covers the L1 FTC. No defect found.

## thm-piecewise-c1-ode-residual-a-posteriori-error-bound

Refuter 53:1: confirmed_nonfatal. The original F5 overstates thm-ftc-first-part: it proves differentiation of an integral, not endpoint recovery for an arbitrary C1 function. The argument is sound after citing the published thm-ftc-second-part (Statement and full six-step proof reviewed); closed-panel C1 regularity meets its one-sided endpoint and integrable-derivative hypotheses. Added that dependency and the exact positivity supplier to F4; updated contract citations and manifest dependencies. No Statement change or consumer impact. repair_confidence: 1. Risk review complete, including zero error, nonnegative ell, single panel, internal nodes and both horizon endpoints.

## alg-bounded-adaptive-runge-kutta-controller

Touched: amended_repair; repair_confidence: 1. Reader mathematical repair retained; contract/manifest reconciliation described below.  Reviewed the entire Definition and all six direct suppliers. Positive atol makes exact scales positive; d>=1 and all displayed lists are nonempty; Q=0 avoids root division and Q>0 has a unique positive root. Initial t0=T, clipped terminal step below hmin, minimum rejection, budget priority and rounded failure branches are specified. The loop has finite attempt indices; accuracy is expressly excluded from acceptance semantics. The reader addition of lem-finite-set-has-max is valid and its raw post source equals current. No Statement/Definition obligation changes beyond the justified existence citation.

## Read-only producer: thm-outward-rounded-operations-are-isotone-and-dag-sound

Reader 53:1: confirmed_nonfatal historical citation defect, currently corrected. Independently read the entire current proof, batch-14 contract and manifest, and all seven current direct supplier Statements/Definitions. Current L7 correctly cites def-complete-ordered-real-field, which defines absolute value; def-complete-ordered-field defines completeness and does not. Checked endpoint interval hulls, the positive exact rational rectangle denominator before rounding, origin-centered ball bounds M and m, their monotonicity under inclusion, nonfinite status exclusion, and finite topological induction. The checker only needs real interval enclosure, supported by this proof. No current producer defect or producer edit.

Historical uncertainty remains: the earlier incorrect bytes were not retained. The explicit dispatch authorizes disposition of this unbound observation after independent current producer review. The immutable reader report and scope retain the original observation and routing fingerprints; they establish the reported citation defect, not its unavailable exact bytes. This is not a claim that the historical observation refutes the corrected source. historical_delta_unknown: true.

## def-validated-residual-tube-certificate

Read the full Definition and four supplier definitions. Finite rational DAGs specify their open nonzero-denominator domain; d>=1 and a<T exclude empty coordinate/panel lists. Reconstruction and radius endpoint agreement are exact, cells cover each panel, and initial target d0<R0 is strict. Outward dyadic conversion failure never validates. Residual/Jacobian squared sums use conservative absolute-endpoint bounds; the format only defines a certificate and leaves soundness to its theorem. No defect found.

## prop-embedded-pair-estimator-asymptotics

Reviewed both steps and all three suppliers. Subtraction cancels the exact endpoint, and reverse triangle inequality gives both h-scaled norms tending to ||a||. Division is justified eventually only for a!=0; for a=0 the yprime=t^2 Heun/Euler witness gives defects -h^3/3 and h^3/6, estimator h^3/2, ratio 3/2. Zero field separately disproves nonvanishing. No defect found.

## thm-bounded-adaptive-runge-kutta-controller-terminates

Reviewed both steps against the exact controller Definition. Each attempt has fixed finite stage count and dimension, with evaluation/primitive operations understood as the stipulated finite operations. Branch priorities preserve final success and minimum rejection before exhaustion. There are at most N indexed attempts; t0=T uses zero. Rounding stagnation does not affect the finite budget argument. No accuracy conclusion is inferred.

## rem-fixed-mesh-global-error-does-not-certify-adaptivity

Touched: reviewed_no_defect, change_kind audit_enrichment, defect_ids empty. Source bytes are identical in pre, post and current; the contract alone changed. Checked the scope warning against the fixed-uniform-mesh global-error theorem Statement and the current variable-step controller. The warning accurately separates pair differences from exact defects; no content repair is needed.

## lem-rational-expression-derivative-recursion-correct

Touched: amended_repair; repair_confidence: 1. Reader mathematical repair retained; contract/manifest reconciliation described below.  Reviewed four steps and all six suppliers. The bounded-bilinear Banach rule has the same normwise remainder as the Euclidean total derivative; multiplication is bounded bilinear. At a quotient node the displayed remainder identity is algebraically correct, with denominator bounded away from zero; its terms are o(||h||). Finite denominator intersections give an open ball, and continuous partials plus scalar MVT/Cauchy–Schwarz give local Lipschitzness on a smaller convex ball. Constant DAGs, repeated nodes and nonzero denominator restrictions are covered. Accepted reader repair; source equals immutable post snapshot; statement unchanged.

## thm-heun-euler-pair-local-orders-and-estimator

Touched: amended_repair; repair_confidence: 1. Reader mathematical repair retained; contract/manifest reconciliation described below.  Reviewed all three steps and six suppliers. Along the exact path C2 f yields bounded continuous y triple derivative, including one-sided endpoints. The explicit Rolle auxiliary function has G(0)=G(u)=Gprime(0)=Gsecond(0)=0; three MVT applications give remainder ytriple(xi)*u^3/6. The Euler-stage increment lies in a compact convex set and has a small open convex neighborhood for scalar component Taylor. Common bounds give uniform theta and compact-start estimates with a common admissible h0. Defect signs and Heun cancellation agree; ratio is asserted only for g!=0. Accepted reader repair including the added uniform within-step expansion. The only direct result consumer is dense output; its new F2 uses exactly the stronger supplier statement, with no outside consumer repair needed.

Consumer search found no outside consumer of the Heun theorem. The derivative lemma retains its Statement; checker and soundness use the unchanged derivative/local-Lipschitz interface. The controller change only supplies finite extrema; termination, warning, and the three assigned examples remain sound. Outside batch consumers alg-ctrl1-runge-kutta-shooting-and-collocation-transcription and ex-ctrl1-chemical-dosing-linear-model merely invoke the same unchanged procedure, so no surgical edit is required.

## alg-validated-residual-tube-certificate-checker

Read the complete five-step defining procedure and all five actual suppliers. Structural rejection covers gaps, cycles and endpoint mismatches; formal derivatives use the reviewed recursion. Every rational constant/endpoint is outward converted before real interval DAG evaluation; any nonfinite status returns inconclusive. Positivity tests use strict lower endpoints and squared residual/Jacobian/initial bounds use exact rational comparisons. Certified requires all tests, with no unsupported operations or automatic search. Finite data include nonempty mesh and dimension conditions from the certificate Definition. No defect found.

## thm-heun-dense-output-local-order-two

Touched: amended_repair; repair_confidence: 1. Reader mathematical repair retained; contract/manifest reconciliation described below.  Read the complete proof and all three suppliers. The corrected F2 is now exactly supplied by the Heun theorem uniform-in-theta expansion. Dividing the endpoint difference by h/2 is valid for h>0; multiplying its O(h^2) remainder by h theta^2/2 preserves the uniform O(h^3) bound, including theta=0 and theta=1. Statement unchanged.

## thm-validated-residual-tube-certificate-sound

Touched: amended_repair; refuter 53:2: confirmed_nonfatal; repair_confidence: 1. The reader correctly added nonnegative square monotonicity and coordinatewise error control, and current source matched its post snapshot before this edit. F10 still incorrectly attributed endpoint recovery to the first FTC. Replaced that supplier with the exact second FTC and added the positivity supplier to F11, updating contract and manifest. The radius/exponential product is C1 on each closed panel, meeting the second FTC hypotheses. Statement unchanged; no propagated claim repair.

Reviewed all four steps and all direct dependencies, including the exact second FTC now used at F10. Squared residual/Jacobian/initial tests imply norm bounds by nonnegative square monotonicity. Convex box MVT and rowwise Cauchy–Schwarz give the required one-sided state Lipschitz bound. Strict initial gap and positive supersolution margin persist via the C1 panel integrating-factor identity; ||error||<R gives strict coordinate inequalities, hence an interior point of the radius cube and checked box, excluding first exit. Exact reconstruction/radius node agreement propagates the gap. A finite union of checked compact time-state boxes lies in the open rational field domain and prevents a finite maximal endpoint. Zero residual/Jacobian bounds, one panel and t=a are covered. Refuter 53:2 confirms the inaccurate FTC attribution, now corrected; statement unchanged.

## thm-validated-residual-tube-checker-terminates

Reviewed both steps against the full checker Definition and its real interval operation supplier. Finite syntax/graph validation terminates, and derivative DAG construction makes only finitely many nodes per source and coordinate. Finite panels/cells then use rational endpoint arithmetic and comparisons; nonfinite statuses return inconclusive. No recursive subdivision or unbounded search occurs. Malformed finite input is rejected structurally. This proves termination, not successful certification.

All twelve required HIGH/CRITICAL risk reviews are now complete. No missing prerequisite, unresolved mathematical uncertainty, or defective published supplier was found. No published carrier was changed.

## Carrier comparison and metadata reconciliation

All six touched items were compared with immutable pre/post item, contract and manifest fingerprints. Five mathematical reader repairs are retained. Their final verdict is amended_repair because source-aligned contract citation/use records or manifest mirrors required reconciliation; the soundness item also received the local FTC repair. The unchanged remark receives reviewed_no_defect with audit_enrichment. No historical full preimage is asserted merely from a hash. The reports and current argument supply the review evidence; the producer historical observation alone remains explicitly unbound.

| Carrier | Pre item SHA-256 | Reader post item SHA-256 | Current item SHA-256 |
| --- | --- | --- | --- |
| alg-bounded-adaptive-runge-kutta-controller | d06c9746f6f6596c7c24bbb98bd525f0ab3c298742df6808250f9629b8a68e68 | 97f9864db2adf597d29588dc9316681a283c7991516ffcc1553618e1eaa52d35 | 97f9864db2adf597d29588dc9316681a283c7991516ffcc1553618e1eaa52d35 |
| lem-rational-expression-derivative-recursion-correct | a986946a5b41dd9b9b2da4a0d1e34402396ff1c9bc587339b0c29871602a54bb | 39857982360af5c8dd5baf2d9493ace0e173410b3a1f24954ab488fcc35380ad | 39857982360af5c8dd5baf2d9493ace0e173410b3a1f24954ab488fcc35380ad |
| rem-fixed-mesh-global-error-does-not-certify-adaptivity | 828cbe7a60afc85a5f7db61e52a23fca2996950843a7a3dac4d7d27adf489364 | 828cbe7a60afc85a5f7db61e52a23fca2996950843a7a3dac4d7d27adf489364 | 828cbe7a60afc85a5f7db61e52a23fca2996950843a7a3dac4d7d27adf489364 |
| thm-heun-dense-output-local-order-two | e61334cb7d761bb33ba0472adae8918ec1aeef53d6bb367a1c49c98a03a9bb33 | e38960fcfbd55bf80823aff95c3dc8d3927dd1146128a6759106e8a3a989b90e | e38960fcfbd55bf80823aff95c3dc8d3927dd1146128a6759106e8a3a989b90e |
| thm-heun-euler-pair-local-orders-and-estimator | ad3b15632075f6cf40907d601674a8f79c39acb8e10bbe42a0cb944e194995ee | 040b0d4cdbeaebfe0edef5fa83b2bf6b926a25eb74063a70b80574d39e5566ef | 040b0d4cdbeaebfe0edef5fa83b2bf6b926a25eb74063a70b80574d39e5566ef |
| thm-validated-residual-tube-certificate-sound | b6dfac88e8d993b5416aa3cbe50529dec0375b4baa7da7bed5c23e2708f62fa6 | 0e9e480325d924e614507fef337675793cb601fbce89cd76c3877e9d789d0a22 | ff0a4d1390763fae99386b6f3782aba24c7313ff949da7b8e756de3ad3460123 |

The first strict contract check found 18 stale quote/use/boundary-record errors. Regenerated exact citations and step inputs for the nine affected proof entries; anchored three endpoint/single-coordinate worksheets; synchronized affected manifest dependencies and the enriched Heun Statement. These are mechanical corrections, with no defect-ledger rows manufactured for check failures. All twelve independent risk reviews remain specific and complete. No material proof rewrite was made here and neither edited source had a judge record.

## Sources and boundaries

Consulted exact local Statement/Definition sections for every direct dependency of each routed/risk-reviewed carrier, plus the full published thm-ftc-second-part proof and the full current batch-14 producer proof. No external text retrieval or external-source verification is claimed. The calculus, finite DAG induction, elementary norm estimates and ODE continuation arguments were checked directly. Source locations are the Facts labels and numbered steps detailed above; the exact source excerpts are retained in the batch contract. Checked empty/zero exclusions, single dimension/panel, both time endpoints, partition nodes, denominator domains, nonfinite statuses, and the nonzero-leading-coefficient caveat. No iff assertion is used without its required direction.

## Outputs and local checks

Exactly nine decisions: five amended reader repairs, one audit enrichment, and three confirmed nonfatal findings. Eight distinct closed defect rows are appended, one per confirmed defect; the reader historical row records the known finding without inventing an original preimage. Published findings: none. Blockers: none. The engine owns hashing, stamps and gate battery; no judge, self-certification, dispatch or stage transition was invoked.

Local checks (all exit 0 after reconciliation):

- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-53.proof-contracts.json --strict`: 20/20 entries, 0 errors, 0 warnings. The initial 18 stale-record errors above were corrected before this pass.
- `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-53.proof-contracts.json`: initial routing read; then the same command with `--require-reviewed`: 20 items, 0 errors, all 12 HIGH/CRITICAL reviews complete.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-piecewise-c1-ode-residual-a-posteriori-error-bound.md items/thm-validated-residual-tube-certificate-sound.md`: both unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-piecewise-c1-ode-residual-a-posteriori-error-bound.md items/thm-validated-residual-tube-certificate-sound.md`: 2 checked, 0 failures.
- `node tools/rendercheck.mjs items/thm-piecewise-c1-ode-residual-a-posteriori-error-bound.md items/thm-validated-residual-tube-certificate-sound.md`: renderer YAML and real KaTeX parse pass for both files.
- Final post-edit `node tools/proof-layout.mjs items/thm-piecewise-c1-ode-residual-a-posteriori-error-bound.md items/thm-validated-residual-tube-certificate-sound.md`: 2 items, 7 steps, 0 defects. No subsequent item edit.
- `node tools/frontier-dependency-ledger.mjs refresh --run numerical-optimization-dynamics-2026-10-16`: refreshed and deduplicated after updating the owned consumer record.
- Exact decision inventory comparison: 9/9 obligations, no duplicates or extras. The standard serialized ledger append added the eight referenced rows and refreshed its generated view.

Handoff: local adjudication complete. Engine must stamp current decision hashes and run its own gate battery. No publication, commit, or push performed.
