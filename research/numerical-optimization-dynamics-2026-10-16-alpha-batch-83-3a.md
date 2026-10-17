# Step 3a — batch 83

Run: `numerical-optimization-dynamics-2026-10-16`. Group: `batch-83`. Only batch 83 is edited. Nine touched obligations and refuter:83:1 are owed; no reader or page obligations.

Read the order task, scope, reader report/findings, refuter artifact, pre/post snapshots and canonical instructions. All nine touched current carriers initially match their immutable reader-post item hashes. Exact pre-reader source preimages were recovered by matching SHA256 in run-owned archives (principally owner-step2-owner-final-binding-before/items); historical uncertainty is not needed. Risk-report initially routed 19 HIGH/CRITICAL items.

### def-complex-stiefel-grassmann-optimization-conventions

Reviewed Definition and steps 1.1, 1.2, 2.1 against frame-bundle, real metric and coordinate inner-product suppliers. Realification preserves multiplication and adjoints; Re tr(U*V) is the real coordinate pairing. In graph charts the vertical Cayley velocity XA subtracts to the unique horizontal Z; DP=ZX*+XZ* has half its Frobenius pairing equal to Re tr(Z*W). Thus the metric coefficients are smooth and unitary frame changes preserve the pairing. The reader adds this valid local calculation; no statement change. r=1, r=n and zero tangent are valid; r=0 is excluded; no AC. Exact pre/post comparison supports acceptance.

Decision: accepted_repair.

### def-stiefel-grassmann-optimization-conventions

Reviewed Definition and all three steps with actual frame-bundle and finite-dimensional Grassmann definitions, real metric and coordinate pairing. The projector differential ZX^T+XZ^T has half-pairing tr(Z^T W), with cross terms zero by horizontality. The Cayley curve supplies all vertical velocities and the frame-bundle chart identifies the quotient tangent. Positive definiteness and smooth coefficients follow, including the one-point r=n Grassmannian. r=0 is outside the explicit domain; zero tangent causes no issue and no arbitrary choice occurs. Reader smoothness argument is sound and leaves the Definition unchanged.

Decision: accepted_repair.

### prop-stiefel-grassmann-are-compact

Reviewed all three steps: polynomial constraint gives closedness, trace(X^T X)=r gives boundedness, [e1,...,er] proves nonemptiness. Finite-dimensional Heine–Borel applies; pulling back any quotient open cover and taking a finite subcover proves compactness without choice or Hausdorff assumptions on the quotient. Both endpoints r=1,n are included; zero frames and rank zero are excluded.

### thm-complex-stiefel-grassmann-tangent-projections

Reviewed all four proof steps and actual regular-level-set and frame-bundle suppliers. DF_X[Z]=X*Z+Z*X is onto Hermitian matrices via XH/2; normal XS is orthogonal because Re tr(SK)=0 for Hermitian S and skew-Hermitian K. The reader Cayley-curve converse correctly realizes every vertical velocity. Corrected step 3.1: tr(G*XZ) was ill-typed for n>r and omitted X*; the valid residual pairing is Re tr(G*XX*Z)=0 by X*Z=0. Projection statement, hypotheses and consumers are unchanged. Includes r=n zero horizontal space, r=1 and zero tangent; no AC.

Decision: amended_repair.

### thm-stiefel-grassmann-tangent-projections

Reviewed all four steps: DF_X is onto symmetric matrices via XH/2 so the cited regular-level kernel theorem applies. Symmetric/skew trace cancellation proves normality; the explicit Cayley curve proves the missing converse for vertical velocities, and Z=X(X^TZ)+(I-XX^T)Z is an orthogonal unique decomposition. The horizontal residual pairing vanishes and changes equivariantly under orthogonal frame changes. Endpoint r=n has zero horizontal space; zero tangents and r=1 satisfy the formulas; no AC. Exact pre/post delta is the sound Cayley explanation only.

Decision: accepted_repair.

### def-complex-grassmann-polar-retraction

Reviewed Definition and steps 1.1–3.1 with complex tangent, quotient and square-root suppliers. Horizontality gives C=I+eta*eta positive definite for every horizontal input, including zero; the positive root is invertible and Y*Y=I. Uniqueness conjugates C^(-1/2) under unitary frame changes, so Y changes to YQ and the range is intrinsic. The square-root theorem explicitly allows complex finite-dimensional spaces. r=n has only zero horizontal input; rank zero is excluded. No AC or extra norm/metric convention is used.

### prop-stiefel-grassmann-riemannian-gradient-formulas

Reviewed all three steps and the exact gradient, criticality, Jacobian and real coordinate inner-product statements. Coordinate expansion proves dF[Z]=<G,Z>; orthogonal projection gives its metric dual. Invariance is needed only on frames, and smooth local sections give smooth descent. The reader replaces the unstated exponential with an explicit valid Cayley curve, whose velocity is X Omega; the differential annihilates every vertical vector. Horizontal pairing proves the Grassmann formula. The criticality iff uses both directions of the cited metric-dual criterion. Zero tangent and r=n remain valid, no AC, no Statement change.

Decision: accepted_repair.

### thm-complex-grassmann-polar-retraction-is-first-order

Reviewed all three steps with actual real bundle square-root theorem, finite-k inversion lemma, complex realification, quotient and polar definitions. rho(C) and rho(C^(1/2)) are symmetric positive definite; uniqueness identifies the latter with the smooth real square root, and inversion is smooth on this open domain. Restriction to bundle charts gives smoothness. The argument I+t^2 eta*eta has zero derivative, so DR_X(0)[eta]=eta and R_X(0)=X. Equivariance descends to the quotient. The zero-dimensional r=n case is constant and all conditions hold; no AC.

### ex-repeated-eigenspace-on-grassmann

Reviewed both proof steps with gradient and horizontal-space suppliers. For diag(0,0,2), f=2x3^2>=0 and all lines in span(e1,e2) have f=0 and projected gradient zero. The half-open theta interval [0,pi) gives pairwise distinct lines, avoiding the sign endpoint duplication; thus the continuum claim is valid. The objective is invariant under O(1), uses unit vectors, and contains no rank-zero or arbitrary-choice assertion.

### ex-trace-eigenspace-optimization-with-lanczos-start-angle

Reviewed all three steps and exact current Lanczos supplier. For eigenvalues 5,2,0, Pb!=0, lower interval width 2>0, and tau^2=2; theorem case 2 applies with m=2, T1(4)=4, yielding Ritz error <=5/8. Independently recomputed filtered vector (1,1/4,-1/4)/sqrt(3), norm squared 3/8, energy 41/24, quotient 41/9 and gap 4/9. b and Ab are independent. The bound is formally on the Ritz maximum; the explicit candidate separately satisfies 4/9<=5/8, and no universal candidate bound is inferred. Stationarity at e2 follows by projection; no AC or breakdown endpoint is hidden.

### def-stiefel-qr-polar-retractions

Reviewed Definition and both proof steps with Gram–Schmidt, reduced QR, spectral and smooth square-root suppliers. Tangency gives Gram I+eta^T eta positive definite globally; for general full-rank Y positivity follows from ||Yv||^2>0, not merely the spectral theorem. Positive QR diagonal fixes its unique frame; the upper-triangular orthogonal change with positive diagonal is identity by induction. Polar uniqueness gives orthogonal equivariance. Reader explicitly selects horizontal Grassmann steps, essential to intrinsic endpoint dependence. Direct uses in retraction theorem, Armijo, trust-region and transport were checked: algorithm gradients/steps are horizontal in Grassmann branches, retraction theorem uses horizontal identification, and the separate transport omission is adjudicated at its own level. No outside direct QR consumer requires repair. Zero tangent, r=1,n and exact-arithmetic caveat hold; no AC.

Decision: accepted_repair.

### prop-complex-grassmann-projector-energy-gradient

Reviewed both proof steps with current complex projection, first-order polar and metric-dual suppliers. XX* is invariant under XQ; differentiating its horizontal polar curve gives ZX*+XZ*. Hermitian K makes the two real trace terms equal, yielding df[Z]=<2KX,Z> and horizontal projection 2(I-XX*)KX. A C1 objective has this pointwise metric dual, as derived locally; no smooth vector-field claim is made. Domain is an open set in the real Hermitian matrix space, so all directions used are admissible. r=n gives zero horizontal gradient; zero directions and r=1 are valid, no AC.

### thm-stiefel-retractions-are-first-order

Reviewed all four steps with QR recurrences, smooth SPD square-root and inversion suppliers. Gram–Schmidt residual norms stay positive on the full-rank open set, proving smooth positive-diagonal QR. Polar has I+O(t^2) inverse-root factor on tangent lines. Differentiating Y=QR at zero makes R prime both upper triangular and skew, hence zero and Q prime=eta. Shared column spaces descend QR to Grassmann even though the QR frames are not equivariant; polar frames are equivariant. For quotient inputs horizontal eta is required by its Definition. Both fix zero; includes r=1,n; makes no second-order assertion and uses no AC.

### alg-riemannian-armijo-backtracking

Reviewed the entire defining procedure, not a phase proof. Inputs give a smooth real Stiefel/Grassmann objective, fixed retraction, 0<a,beta<1, and finite J>=0. Zero gradient returns before trials; all nonzero trial directions -beta^j g are tangent/horizontal. Tests j=0,...,J, first acceptance, rank rejection and exhausted return are explicit, including J=0. Tangent retractions are globally available by the reviewed supplier; no success within an arbitrary budget is claimed. Quantitative termination/step bounds are separate downstream results. No AC.

### alg-riemannian-trust-region

Reviewed entire Definition and exact reader delta: S now receives model/radius/current real tangent or horizontal space and returns a vector there or failure within a stated cap; no quality is assumed. Stationary/target/outer-cap ordering handles N=0 and zero-dimensional spaces before division. Cauchy branches c<=0 and c>0 are explicit, candidate feasibility and Cauchy fraction are checked, and small-radius safeguard uses infinity when M_B=0. Retractions accept the specified tangent/horizontal inputs; rho threshold equalities, radius clipping and failure statuses are complete. C2 pointwise gradient convention is locally defined. Direct consumers ratio lemma and complexity theorem need only these same checks; outside finite-basis example uses S returning failure immediately and B=0, which meets the clarified interface. No necessary consumer edit or AC.

Decision: accepted_repair.

### def-stiefel-grassmann-projected-vector-transport

Confirmed fatal refuter:83:1 against the exact observed carrier SHA256 88f42f0a2bad095928224dec1d4f6a6e52c662756dabb9a1e00f2c49ce9cc6ca. With X=[e1,e2], H=[e3,0], V=X[[0,-1],[1,0]], H and H+V have equal quotient differential but their polar endpoints have different ranges: e2 lies in span(e1+e3,e2), but solving e2=a(e1+e2+e3)+b(e2-e1) forces a=b=0 from e3,e1. Right-equivariance alone does not fix lift dependence. Repaired Definition and Given to require the unique horizontal step in the Grassmann branch; retained Stiefel tangent inputs. Reviewed both proof steps: projections are linear and tangent, polar equivariance gives VQ, and at zero both are identity. Direct consumer prop-stiefel-grassmann-vector-transport-is-tangent inherits the defined domain and its three steps remain valid; it makes no assertion for an arbitrary lift of a fixed Grassmann tangent. No other item references this definition. Zero step, r=1,n and no AC checked.

### lem-riemannian-trust-region-ratio-accuracy-for-small-radii

Reviewed every step with real-coordinate Cauchy step/decrease, compatible norm, Cauchy–Schwarz and scalar MVT suppliers. c<=M_B||g||^2 puts p_C on the boundary when Delta<=||g||/(2M_B); Cauchy fraction gives P>=theta_C||g|| Delta/2. The MVT remainder bound L_R||p||^2 plus model bound M_B||p||^2/2 yields the stated conservative ratio constant. Added Delta>0 explicitly: at Delta=0 the feasible step and predicted decrease are zero and the original positivity/ratio conclusion fails. M_B=0 and L_R+M_B=0 use infinite thresholds and exact ratio 1 for positive radius. Sole direct consumer thm-riemannian-trust-region-first-order-complexity has positive initial radius and positive update factors, so all invoked radii satisfy the repaired hypothesis; no consumer edit. No AC.

### thm-retraction-armijo-acceptance-and-step-lower-bound

Reviewed all three steps and actual Armijo, retraction, metric-dual and Cauchy–Schwarz suppliers. For 0<t<=delta, the segment has norm <=1/2 and the integrated radial gradient bound gives sufficient decrease; minimal crossing of the beta grid gives first accepted t>=beta delta even if acceptance occurs earlier. Corrected the final Statement sentence to restrict its tangent-ball upper bound to 0<t<=delta. Counterexample to its former unrestricted wording: on St(2,1), polar R, f(x)=-2x1, x=e2, a=1/10, G=2, the first t=1 passes because 4/sqrt(5)>=0.4, but t||g||=2>1/2. The theorem does not require earlier accepted trials to lie in the unit ball. Direct consumer thm-retraction-armijo-best-iterate-complexity uses only sufficient decrease and the unchanged lower bound; no consumer repair is needed. L_R=0 uses infinity; G=0 has no nonstationary iterate; no AC.

### thm-retraction-armijo-best-iterate-complexity

Reviewed both proof steps with actual Armijo algorithm and corrected acceptance supplier. Every accepted nonstationary update gives decrease >=a beta delta ||g||^2; telescoping and the lower bound imply the minimum/average estimate for N>=1. If all N norms exceed epsilon>0, the sum exceeds N epsilon^2, giving the asserted count. Reader correctly binds the previously free epsilon with an explicit positive quantifier. The supplier correction restricts only its tangent-ball explanation and leaves sufficient decrease and t>=beta delta intact. Stationary calls return directly and are not counted as accepted updates; zero objective gap is consistent. No evaluation count or AC is asserted.

Decision: accepted_repair.

### thm-riemannian-trust-region-first-order-complexity

Reviewed all seven steps against the actual algorithm, corrected positive-radius ratio lemma, real-coordinate Cauchy decrease, compactness, metric extreme-value, logarithm, Archimedean and geometric-null suppliers. Minimum exists on the compact nonempty frame set and descends by surjectivity, so no quotient-metric EVT is presumed. Positive radii and the small-radius ratio give a uniform floor r_epsilon; rejected updates start above the threshold, accepted updates never shrink. r_epsilon>=c_R epsilon for epsilon<=1, so each accepted step decreases by >=c_S epsilon^2. Infinite rejection tails contradict the floor, and infinitely many accepted steps contradict the attained lower bound. Product of rejection factors and accepted factors in [1,gamma_inc] yields the log bound with |log gamma_dec|>0. log(1/epsilon)<=1/epsilon<=1/epsilon^2 proves total order. Reader chain rule DR(0)=Id identifies the pullback gradient for C2 f without demanding a smooth field. M_B=L_R=0 gives infinite thresholds but finite c_R via Delta_max; zero tangent or initial target returns immediately; equality thresholds and finite-cap ordering are valid. No inner operation bound or AC is claimed.

Decision: accepted_repair.

## Repair and contract closure

Four additional defects were repaired in current sources: the complex projection trace product, the horizontal transport-step hypothesis, positive ratio radius, and the Armijo trial-size qualification. Their exact witnesses and consumer dispositions are above. Reader source repairs are retained; final carrier verdicts below also account for necessary contract amendments. Each repaired original omission and additional defect has its own closed ledger row with repair_confidence 1. No mechanical diagnostic is entered as a mathematical defect.

Contract reconciliation repaired missing step-1.2 citation uses, the omitted F6 citation for the horizontal real retraction input, old supplier Definition/Statement quotes, and stale step-2.1 tags/uses in the trust-region theorem. The current Lanczos Statement quote was refreshed after independently checking its exact hypotheses and calculation. No logical edge, item ID, proof conclusion, or page inventory was added. The changed transport, ratio and Armijo claim summaries were mirrored in the owning manifest. All four edited carriers already use draft status, literature-derived statements and ai-generated proofs; no judge record exists or was retained after rewriting.

## Final dispositions and sources

The decisions file is authoritative: three accepted reader repairs (real tangent projections, gradient formulas, trust-region algorithm), six amended reader repairs (both metric conventions, complex tangent projections, QR/polar Definition, and both complexity theorems), and one confirmed-fatal repaired refuter finding. Five source-identical reader repairs needed contract amendments beyond risk_review; the complex projection source also needed its trace correction. All ten originally owed obligations are decided exactly once. The source acceptance statements in the item checkpoints above precede this contract reconciliation.

Exact pre-reader sources used for the before/after comparison were SHA256-matched to the pre snapshot. Both conventions, both tangent theorems, and Armijo complexity were recovered under `research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/`; trust-region algorithm, gradient formula and trust-region complexity under `research/numerical-optimization-dynamics-2026-10-16-owner-final-ledger-page-closure/before/`; and the real retraction Definition under `research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/integration-current-sources/`. These are historical evidence only. Current prerequisites were independently read by their exact Definition/Statement and checked against their uses.

Consulted [Boumal's book](https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf), §§7.3 and 9.16, equations (7.15)–(7.24), (9.78)–(9.93), PDF pages 174–176 and 265–269. The horizontal lift is unique; changing frames multiplies it on the right. The quotient retractions take horizontal lifts as inputs. The projector representation scales the quotient metric by two, consistent with the local half-pairing calculation. Complex identities and all optimization estimates were checked directly from their local arguments and actual suppliers; no unread literature argument is claimed as verification.

No defective published carrier was found; published content was not edited and no published-ledger lock or row was needed. Direct/reference consumer search found no outside consumer requiring repair. The outside finite-basis example uses immediate S failure and the Cauchy fallback, satisfying the clarified algorithm interface. Its presence in the generated item-scope but absence from this batch's manifest is retained as the reader's inventory observation, not a new review obligation. Existing batch-owned cross-batch records were preserved and enriched only for the independently checked Cauchy interfaces; the required refresh completed.

## Local checks

- Initial risk-report: 23 items routed, 19 HIGH/CRITICAL; no errors. All 19 now have item-specific complete risk_review records, finished in dependency order.
- Final risk-report --require-reviewed: 0 errors, 23 items routed.
- Final proof-contract --strict: 0 errors, 0 warnings, 23/23 checked. Initial stale citation/use diagnostics were repaired; they were not logged as mathematical defects.
- Reflow: all four edited items unchanged. Precheck: 4 checked, 0 failing.
- Rendercheck: all four edited items parse, including YAML and actual KaTeX.
- Final proof-layout, one batched invocation after all item edits and reflow: 4 items, 12 steps, 0 defects.
- Defect ledger: 13 closed rows appended, one per independently reviewed original omission or additional defect; repair_confidence 1. Its generated view was refreshed under the ledger append lock.

The initial CLI discovery attempts `precheck --help` and the nonexistent plural `proof-contracts.mjs` failed without editing files. The actual explicit-file precheck and singular `proof-contract.mjs` commands above passed.

## Engine handoff and routing blocker

No mathematical uncertainty or unmet prerequisite remains in this batch. Two previously untouched, unflagged HIGH/CRITICAL carriers were necessarily corrected during their routed risk reviews: `lem-riemannian-trust-region-ratio-accuracy-for-small-radii` (Delta>0) and `thm-retraction-armijo-acceptance-and-step-lower-bound` (trial-size qualifier). Their closed ledger rows are `numopt-3a-b83-positive-ratio-radius` and `numopt-3a-b83-armijo-ball-qualifier`. They have no originally owed touched/finding obligations in the supplied scope. The engine/owner must route these additional changed carriers and their existing rows before Step-3 closure; the worker has preserved the original scope and authored exactly its ten decisions, without fabricating extra obligations or binding either defect to a different consumer. Current reviews, complete repairs, exact witnesses and consumer checks are recorded above. No scope, snapshot, decision hash, judge record, stage transition or gate receipt was stamped or synthesized.
