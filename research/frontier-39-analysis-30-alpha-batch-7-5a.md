# Batch 7 Step 5a adjudication — frontier-39-analysis-30

Scope: batch 7 only, group batch-7. Engine status confirms a live Step-5 run. No agents dispatched, judge cycles, stamps or engine transitions initiated. Current carriers are reviewed independently of reader/refuter conclusions. All 23 item hashes initially match the post-reader snapshot; four touched items have unchanged item bytes and changed contract evidence only. Pre-reader hashes do not themselves recover historical proof bytes.

## Historical producer finding: reader:7:2

Independently opened current `def-bmo-seminorm-and-quotient-by-constants`, its four dependency interfaces, batch-6 contract and manifest. On the unit interval, b=1 on its first quarter and zero elsewhere gives mean 1/4, deviation 3/8, but deviation 1/4 at c=0. The historical optimality assertion is false. Current factor-two wording and its complete triangle-inequality argument are sound: average |b-b_Q| <= 2 average |b-c| for every complex c; taking the infimum gives the stated comparison. Zero seminorm means a.e. constant, using the explicit nested cubes and their positive-measure overlaps; both enclosing cube/ball comparisons follow from the displayed E-subset-F estimate. No infimum minimizer or representative selection is needed. Exact cited conventions apply to integrable restrictions on each finite cube. Tao Definition 3.1, printed p. 11, gives the equivalent infimum formulation; Williams Definition 7.1(b), printed p. 29, gives the cube seminorm.

Verdict: confirmed_fatal for the historical assertion, already corrected by the producer. Current producer SHA-256 is `dfd892fc2d174f85edb7b8466f2ebb1098b30f0f701905db28656d6c395ef23f`. Preserve observation_basis unbound and historical_delta_unknown: the original full-byte carrier is unavailable. This dispatch expressly authorizes disposition from the historical report, immutable pre-reader fingerprint and independently reviewed current source; it does not authorize claiming the current bytes are the old counterexample target. Original producer pre-snapshot and routing bindings are retained in the decision. Producer manifest still mirrors the old optimality sentence; route this metadata reconciliation to batch 6/Step 5b, without editing producer files. Batch-6 decision already names `f39-a6-bmo-optimal-constant`; use that same defect identity rather than duplicating the historical defect.

## Dependency-ordered current review

### `def-lusin-area-function-for-a-fixed-admissible-kernel`

Reviewed all four well-definedness clauses. Holder gives absolute convergence for every point at p=1 and infinity as well as intermediate p. Parameter-dependent Schwartz kernels are continuous in the conjugate norm; the local majorant works for t bounded away from zero. Fatou with the strict cone inequality gives lower semicontinuity even at infinite values. No finiteness or square-function equivalence is asserted. Zero f, aperture a>0 and representative invariance checked; Countable Choice is explicit. Williams §7.6 is orientation for the cone convention, not a claimed theorem for this arbitrary fixed kernel.

Disposition: risk review only; no routed carrier decision.

### `def-rademacher-functions-on-the-unit-interval`

Binary digit is the parity of the floor, not the floor itself (k=2,t=3/4 gives 1 versus 3). Floor quotient identities prove digits in {0,1}, alternating half-open interval values and zero mean exactly, including t=0 and all internal dyadic endpoints. j>=0,k>=1 and Countable Choice for Lebesgue box measure are explicit; construction selects nothing. Grafakos Appendix C.1 uses the same dyadic signs up to indexing and null endpoint values; Tao §5.5 supplies uniform independent signs.

Disposition: reader repair accepted; decision/closed ledger mapping will be written with the final obligation inventory.

### `lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition`

Read all six steps. Smooth-step composition q=(9-4|xi|^2)/5 constructs the cutoff without choice. Local telescoping is eventually exact on every fixed ball. For u=2^{-j}|xi|, the disjoint transition ranges show positivity even without monotonicity, and closed annular support includes boundary points while nonzero values lie strictly inside. At most two positive-index pieces plus the low piece yield the stated three-term frame bound, including xi=0. The derivative conversion correctly uses |xi|<=2^{j+1}; outside support all derivatives vanish. Williams (6.3), Remark 6.7(a) and Tao Proposition 5.3 provide the matching low-pass/annular context.

Disposition: reader repair accepted; decision/closed ledger mapping will be written with the final obligation inventory.

### `def-inhomogeneous-dyadic-frequency-partition`

Reviewed all four clauses against the Fourier, Schwartz convolution and smooth-symbol interfaces. S and S-prime domains agree under Countable Choice; finite-p convolution classes have Schwartz kernels. Nonzero sets are open annuli whereas supports are closed; endpoint vanishing makes phi_j phi_k=0 when |j-k|>=2, including the low block. The locally finite companion sum is exactly one, and low kernels have integral one rather than cancellation. Added Schwartz convolution citation justifies everywhere inversion. Reader repairs accepted. Williams (5.11), (6.3) and Tao p.24 supply the reconstruction conventions.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `lem-finite-rademacher-blocks-are-equidistributed`

Read all five steps and finite-measure/simple-integral suppliers. Successive binary quotient/remainders prove unique expansion and 2^(J-m) extensions of a prescribed digit pattern. Half-open intervals partition [0,1) exactly, including dyadic endpoints; free digits give every sign tuple measure 2^-m. Finite-valued complex F integrates componentwise, not by an assumed complex positivity order. Empty monomial N=0 gives one; repeated indices yield parity factors and the delta_jk formula. The main Given uses m>=1; if the implicit empty tuple m=0 is allowed, both sides equal its single constant value immediately. Correct s_i coordinates, explicit Countable Choice and Williams (5.2), printed p.16, are sound reader repairs.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds`

All seven steps checked. The piece rescaling has j-1 (not j); it gives cancellation for positive j only. Companions are finite neighboring sums; j=1 includes K0 and its fixed Schwartz bound, and j=0 is handled separately. The dyadic-shell estimate 2^(2n-k) proves integrability at N=n+1. Young applies at p=1 and infinity under explicit Countable Choice. Arbitrary admissibility only requires vanishing beyond radius 2, so reader's removal of the radius-3/2 restriction is necessary. Tao p.23 kernel bounds and Williams (5.11) match these smooth kernels.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `lem-littlewood-paley-reproducing-formula-in-tempered-distributions`

All five steps checked against bilinear distribution transform, both Fourier automorphisms, Parseval and dual topology definitions. Companion partial symbols are bounded by one and equal one on an expanding ball; derivative tails and R^-1 weighted Schwartz tails give convergence uniformly on bounded sets. N=0 has zero symbol with no plateau claim. Correct transposition is pairing Ff with (sigma_N-1) F-inverse g. Real companion symbols are self-adjoint for Hermitian pairing; testing against conjugate g identifies the limit. Finite Cauchy-Schwarz plus Holder gives absolute summability only under the stated square-norm hypotheses. Reader's transposition/tail corrections are sound.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds`

All four steps checked with the exact current Mihlin definition and theorem, whose full proof was also read. Locally finite sums are smooth, and positivity/partition unity gives |m|<=1 for complex |c_j|<=1. For derivatives, at most three positive-index closed annuli plus the low block give 4*2^|alpha| C_alpha. Zero coefficients, empty truncation and origin are harmless; bounds are required only off the origin and p remains strictly between 1 and infinity. Current carrier bytes are unchanged: reader enriched the contract only. Tao p.26 gives this signed-symbol route. No carrier defect found.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `thm-khintchine-inequality-for-finite-rademacher-sums`

All six steps checked. Finite equidistribution supplies independence and the complex second moment. Factorial comparison proves cosh<=exp(y^2/2); positivity and addition/increase interfaces justify moments and Markov. Zero component variances are omitted, equal nonzero variances are counted twice, and union bound gives 4 exp(-lambda^2/(4s^2)). The substitution yields 4p 2^(p-1) Gamma(p/2) s^p. Fourth-moment splitting gives tail mass >=9/(16 C4^4), hence a lower bound for every p>0 without Minkowski below one. Empty J and zero coefficients are explicit, and p=2 is exact. Reader's index and elementary exponential/substitution supplier repairs accepted; Tao Lemma 5.6 proof independently checked.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces`

All five steps checked against the exact Bessel-completion embedding and weighted Fourier characterisation, Plancherel, distribution injectivity, Schwartz density and L2 completeness. Forward pieces are compactly supported L2 densities; bracket bounds 2^(j-1)<=<xi><=sqrt(5)2^j give two-sided comparisons for every real s, including negative s and j=0. Conversely the closed annuli have overlap at most three, so weighted L2 partial sums are Cauchy with controlled tails. Compact tests use the locally finite partition before Schwartz density extends equality; g_j=phi_j g then gives both norm comparisons. The +infinity convention for non-L2 pieces prevents illegal norms. Reader's reconstruction and supplier repairs accepted. No hidden representative choices or full AC use; Countable Choice is explicit.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded`

All four steps and exact supplier domains checked. Low symbol derivatives vanish outside radius 2; annular derivatives give uniform homogeneous bounds for positive levels; companion bounds follow by three finite sums. Positivity and partition unity bound both symbols by one. Mihlin theorem applies for strict finite p; Young and complex C-c-infinity density identify the unique extension with convolution on all Lp. Endpoint boundedness of individual kernels is not confused with endpoint square equivalence. Reader changed contract evidence only; item bytes are unchanged and no mathematical defect found.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `lem-ltwo-almost-orthogonality-of-dyadic-pieces`

All four steps checked. Plancherel identifies each piece on S; both convolution and Fourier multiplication are bounded on L2 and agree on the dense S core, hence agree on every L2 class. Tonelli for counting measure times Lebesgue measure converts the nonnegative norm series to the integral of sum phi_j^2 |F2 f|^2. The [1/3,1] frame bound gives constants 1 and 3, including zero f and origin. No independent orthogonality of overlapping blocks is assumed. Current item unchanged; reader contract enrichment accepted without creating a mathematical defect.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels`

All three counterexample steps and every Fourier, exponential, trigonometric and integral supplier checked. Positive-sign inverse is exp(3*pi*i*x) sin(pi*x)/(pi*x), with value one at zero; L1/L2 agreement supplies the correct continuous representative. Cos(2*pi*x)<=0 on each [m+1/4,m+3/4] yields a positive harmonic-series lower bound. Dilation preserves the infinite L1 norm for every integer j, including negative j. Countable Choice inherited. Reader's exact elementary suppliers, corrected locator and one-dimensional sharp-square caveat are sound. Grafakos p.427 discussion and entire Theorem 6.1.5 proof through p.428 were independently opened; nonintegrable kernels do not imply failure of strict-range sharp square estimates on the line.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `ex-sobolev-weight-on-a-single-dyadic-annulus`

All four verification steps checked. The narrower cutoff exists via the explicit smooth-step polynomial q with positive denominator because 0<epsilon<1. Low A0 is a ball; positive Aj is a nonempty annulus whose strict inner bound kills all lower pieces while its closed outer bound makes all higher pieces zero. j=0 and positive j are treated separately. Support-contained Fourier data give Delta_j f=f by Fourier injectivity; Sobolev comparison follows from the reviewed exact weighted Fourier theorem for every real s. Zero f and negative s are allowed. Reader's low-ball/annulus and choice corrections accepted.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `def-littlewood-paley-square-function`

All four defining clauses checked. Holder against Schwartz kernels gives absolute convergence at every x and every finite 1<=p, including conjugate exponent infinity at p=1. Translations are continuous in conjugate norm, by a common Schwartz majorant for finite exponent and bounded first derivatives at infinity. The actual convolution representatives are therefore continuous and Borel, rather than relying on an a.e. Young estimate. Monotone finite sums define an extended measurable square function with N=0 equal zero. Representative invariance holds even everywhere for these representatives, so the weaker a.e. clause is valid. No premature global finiteness is claimed. Reader's well-definedness repair accepted.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `lem-rademacher-randomisation-converts-square-functions-to-multipliers`

All four steps checked. Pointwise finite Khintchine applies to complex coefficients Delta_j f(x), including empty F. Rademacher domain is [0,1), so t=1 is not an undefined endpoint. Finite sign vectors make the mixed integrand product measurable; Tonelli applies before finiteness and the finitely many Schwartz random sums have all positive p moments by Mp>n decay. Thus p<1 uses no norm triangle inequality. Symbols are compactly supported; companion argument is identical for finite data. Reader's domain and finiteness repairs accepted. Tao Corollary 5.8 and p.26 argument read completely.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `rem-square-function-characterisation-of-real-hone`

Recorded statement checked against the current radial maximal H1 definition and Williams Propositions 6.10/7.30, Remark 6.9(c), and Proposition 7.32, printed pp.26/40. The input is f in L1, the square function is homogeneous over all integer scales, and the norm contains the L1 term; no polynomial quotient ambiguity or inhomogeneous endpoint equivalence is asserted. Zero f and mean-zero conclusion agree with the source. Countable Choice explicitly carries the norm convention. Reader's hypothesis correction accepted; this remains a sourced unproved leaf, with no judge evidence claimed.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `ex-dyadic-square-function-of-two-separated-frequency-packets`

All three verification steps checked. For nonnegative 0<=j<k and k>=j+3, positive active levels belong respectively to {j-1,j,j+1} and {k-1,k,k+1}; low block can be active only when packet level <=1. Endpoint vanishing excludes touching-annulus cross terms. The two finite active sets are disjoint, giving the pointwise squared identity and finite integration; disjoint packet Fourier supports give Hermitian orthogonality via Plancherel. Zero packets allowed. Negative j would break the claim through the low block, so reader's nonnegative-index repair is essential and sound; page summary must inherit it.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `ex-square-function-of-one-frequency-localised-function`

Both verification steps checked. The entire Fourier support, not merely an intersecting subset, is contained in every positive-level vanishing region and in the low plateau. Inversion gives Delta0 f=f, other pieces zero and Sf=|f| for finite p including one. For nonzero Schwartz f its norm is positive, so c_p<=1<=C_p is forced, rather than both coefficients >=1. Zero f is allowed but imposes no coefficient constraint. Reader's containment, inequality and Countable Choice repairs accepted. The corresponding page summary still reverses the lower coefficient.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `thm-littlewood-paley-square-function-equivalence-on-lp`

All six steps checked. Finite Khintchine plus signed Mihlin bounds and Tonelli give uniform upper truncation estimates, then monotone convergence. Neighbor sums give companion upper bound 3*C_p without asserting companion rescaling. Reproducing Hermitian pairing and exact complex Lp norm recovery give the lower estimate; conjugation preserves the dual unit ball and S density holds at finite p-prime. Nonlinear extension uses the reverse l2 triangle inequality, not a linear extension theorem. Every finite S_N is continuous on Lp; density passes the uniform bound, monotone convergence establishes the actual convolution square's finiteness, and domination gives Lp convergence of S_N. The global Lipschitz inequality identifies it with every Schwartz approximation limit. p=1/infinity are excluded throughout, zero f and N=0 covered, Countable Choice explicit. Reader's replacement of diagonal extraction, corrected t-domain and reverse triangle accepted.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `cor-dyadic-partition-choice-does-not-change-the-lp-square-function-space`

All three steps checked. Apply the same proved strict-range theorem separately to each admissible cutoff; eliminating ||f|| gives c1/C2 and C1/c2 with finite positive denominators. Mixed smooth multipliers compose on S and their support lies in the actual intersection; |j-k|>=3 yields strictly disjoint frequency sets, including j=0's low ball. Boundedness and finite-p density extend the zero composition to Lp. Choice of cutoffs means fixed data, not a choice axiom. Countable Choice is inherited. Current item unchanged, reader enriched contract evidence only; no carrier defect found.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `rem-littlewood-paley-linfinity-endpoint-needs-bmo-carleson-control`

Recorded leaf reviewed against Williams Theorem 7.19, Definition 7.21 and Proposition 7.22 with its entire orthogonality proof, pp.36-37. Real Haar coefficients permit a_J^2; complex coefficients would require |a_J|^2. Mean-zero Lp, L1 and L2 domains are separated; real L2-normalised Haar basis and inclusive J subset I convention are explicit. This last inclusion is essential: f=h_I contributes to oscillation on I. The classical conical functional is mentioned without a new equivalence. Reader's source hypotheses repair accepted. This is an unproved record, not a new endpoint theorem.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

### `rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements`

Current scope remark and its five actual dependency interfaces checked. The strict-range theorem excludes both endpoints; lower homogeneous H1 record applies among L1 and identifies the same classical space as the radial maximal convention. Current BMO mean comparison is factor-two only; this consumer uses the quotient definition, not historical mean-minimizer optimality. Independently read all four steps of current H1-BMO duality and the bounded-functional/atom-pairing interfaces on the routed path: the duality map is bilinear in the complex BMO representative and lands in the complex linear dual. Full AC is explicitly inherited from the duality construction, without assigning it to the local square-function proofs. This remark makes no unproved new endpoint substitution. No item edit or new defect found. The historical reader:7:2 finding is preserved separately and remains confirmed fatal for the original wording.

Current review complete. Routed disposition and exact closed-defect mapping are recorded in the decisions file at finalization.

## Page decisions and repairs

Read the complete A summary and item order against all 18 reviewed carriers. Reader replaced the unsupported inhomogeneous H1 endpoint assertion by the exact recorded homogeneous characterization, with separate strict-range and duality scopes; Countable Choice and full AC inheritance are correctly distinguished. At most two nonzero pieces is true (below radius one only the low block survives; between one and two low and first blocks; above two at most two annular blocks). High kernel scaling, companion finite sums, reconstruction and extension agree with the proofs. Removed the stale published adjective because the current Mihlin supplier is draft. Page order is unchanged.

The examples-page lower coefficient and missing nonnegative-level defects are confirmed fatal and surgically corrected. Both lanes reporting the coefficient error share one closed defect row. The negative-level counterexample remains evidence against the old page, not the corrected packet item. No item file was changed during this Alpha dispatch. No withdrawal was proposed or removed.

## Decision inventory

- `touched:7:cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels`: **accepted_repair**; `f39-a7-cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels-1`, `f39-a7-cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels-2`, `f39-a7-cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels-3`, `f39-a7-cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels-4`.
- `touched:7:cor-dyadic-partition-choice-does-not-change-the-lp-square-function-space`: **reviewed_no_defect**; audit enrichment; no defect row.
- `touched:7:def-inhomogeneous-dyadic-frequency-partition`: **accepted_repair**; `f39-a7-def-inhomogeneous-dyadic-frequency-partition-1`, `f39-a7-def-inhomogeneous-dyadic-frequency-partition-2`.
- `touched:7:def-littlewood-paley-square-function`: **accepted_repair**; `f39-a7-def-littlewood-paley-square-function-1`.
- `touched:7:def-rademacher-functions-on-the-unit-interval`: **accepted_repair**; `f39-a7-def-rademacher-functions-on-the-unit-interval-1`, `f39-a7-def-rademacher-functions-on-the-unit-interval-2`.
- `touched:7:ex-dyadic-square-function-of-two-separated-frequency-packets`: **accepted_repair**; `f39-a7-ex-dyadic-square-function-of-two-separated-frequency-packets-1`, `f39-a7-ex-dyadic-square-function-of-two-separated-frequency-packets-2`, `f39-a7-ex-dyadic-square-function-of-two-separated-frequency-packets-3`.
- `touched:7:ex-sobolev-weight-on-a-single-dyadic-annulus`: **accepted_repair**; `f39-a7-ex-sobolev-weight-on-a-single-dyadic-annulus-1`, `f39-a7-ex-sobolev-weight-on-a-single-dyadic-annulus-2`.
- `touched:7:ex-square-function-of-one-frequency-localised-function`: **accepted_repair**; `f39-a7-ex-square-function-of-one-frequency-localised-function-1`, `f39-a7-ex-square-function-of-one-frequency-localised-function-2`, `f39-a7-ex-square-function-of-one-frequency-localised-function-3`.
- `touched:7:lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded`: **accepted_repair**; `f39-a7-lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded-1`.
- `touched:7:lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds`: **accepted_repair**; `f39-a7-lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds-1`, `f39-a7-lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds-2`.
- `touched:7:lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition`: **accepted_repair**; `f39-a7-lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition-1`.
- `touched:7:lem-finite-rademacher-blocks-are-equidistributed`: **accepted_repair**; `f39-a7-lem-finite-rademacher-blocks-are-equidistributed-1`, `f39-a7-lem-finite-rademacher-blocks-are-equidistributed-2`, `f39-a7-lem-finite-rademacher-blocks-are-equidistributed-3`.
- `touched:7:lem-littlewood-paley-reproducing-formula-in-tempered-distributions`: **accepted_repair**; `f39-a7-lem-littlewood-paley-reproducing-formula-in-tempered-distributions-1`, `f39-a7-lem-littlewood-paley-reproducing-formula-in-tempered-distributions-2`.
- `touched:7:lem-ltwo-almost-orthogonality-of-dyadic-pieces`: **reviewed_no_defect**; audit enrichment; no defect row.
- `touched:7:lem-rademacher-randomisation-converts-square-functions-to-multipliers`: **accepted_repair**; `f39-a7-lem-rademacher-randomisation-converts-square-functions-to-multipliers-1`, `f39-a7-lem-rademacher-randomisation-converts-square-functions-to-multipliers-2`.
- `touched:7:lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds`: **reviewed_no_defect**; audit enrichment; no defect row.
- `touched:7:rem-littlewood-paley-linfinity-endpoint-needs-bmo-carleson-control`: **accepted_repair**; `f39-a7-rem-littlewood-paley-linfinity-endpoint-needs-bmo-carleson-control-1`, `f39-a7-rem-littlewood-paley-linfinity-endpoint-needs-bmo-carleson-control-2`.
- `touched:7:rem-square-function-characterisation-of-real-hone`: **accepted_repair**; `f39-a7-rem-square-function-characterisation-of-real-hone-1`.
- `touched:7:thm-khintchine-inequality-for-finite-rademacher-sums`: **accepted_repair**; `f39-a7-thm-khintchine-inequality-for-finite-rademacher-sums-1`, `f39-a7-thm-khintchine-inequality-for-finite-rademacher-sums-2`.
- `touched:7:thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces`: **accepted_repair**; `f39-a7-thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces-1`, `f39-a7-thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces-2`.
- `touched:7:thm-littlewood-paley-square-function-equivalence-on-lp`: **accepted_repair**; `f39-a7-thm-littlewood-paley-square-function-equivalence-on-lp-1`, `f39-a7-thm-littlewood-paley-square-function-equivalence-on-lp-2`, `f39-a7-thm-littlewood-paley-square-function-equivalence-on-lp-3`.
- `page:7:littlewood-paley-theory-and-square-functions`: **amended_repair**; `f39-a7-littlewood-paley-theory-and-square-functions-1`.
- `reader:7:1`: **confirmed_fatal**; `f39-a7-littlewood-paley-theory-and-square-functions-examples-1`.
- `reader:7:2`: **confirmed_fatal**; `f39-a6-bmo-optimal-constant`.
- `refuter:7:1`: **confirmed_fatal**; `f39-a7-littlewood-paley-theory-and-square-functions-examples-1`.
- `refuter:7:2`: **confirmed_fatal**; `f39-a7-littlewood-paley-theory-and-square-functions-examples-2`.

All routed decisions are complete locally. Three unchanged-item contract enrichments use reviewed_no_defect/audit_enrichment. The fourth contract-only touched carrier has a genuine false numerical boundary (max(2,1)=2, not 1) and therefore an accepted_repair with its own arithmetic defect row. Historical full proof bytes are not claimed: pre/post fingerprints, reader repair descriptions and independently checked present mathematics ground accepted reader repairs.

## Consumer impact and outside dispositions

A complete direct item dependency/reference search found no consumers outside batch 7 of the 17 reader-modified carriers. Every internal direct consumer was reviewed in the ordered item pass; hypotheses, support containment, low-block restrictions and source qualifications remain compatible. Stable item IDs and page orders are preserved. The owned cross-batch rows are maintained with current evidence. The outside BMO producer manifest still carries its historical optimality assertion and needs batch-6/Step-5b metadata reconciliation. The separate batch-6 historical-preimage escalation for atom-pairing injectivity is not cleared here; its current proof is sound according to the independently checked exact use, and our consumer does not resolve its missing historical evidence. No defective published item was found; published content was kept read-only and no published ledger edit is needed.

## Sources and review limits

Authoritative PDFs were opened from their live URLs and relevant complete passages read. Tao, https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf: Definition 3.1 p.11, Proposition 5.3 p.23, complete Corollary 5.4 p.24, Lemma 5.6 and Corollary 5.8 with proofs pp.24-26. Williams, https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf: Proposition 5.1 and proof pp.15-16; (6.3), Definition 6.5, Theorem 6.6 with its proof and endpoint clarification pp.24-26; Definition 7.1(b) p.29; Theorem 7.19, Definition 7.21, Proposition 7.22 with complete proof pp.36-37; Propositions 7.30/7.32 and cone Definition 7.31 p.40; endpoint mapping p.32 and complete Theorem 7.40 construction pp.46-48. Grafakos, https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf: Definition 6.1.1 p.420; sharp discussion and full Theorem 6.1.5 proof pp.427-428; Appendix C.1-C.3 pp.585-588, including independent dyadic signs and full tail/Khintchine derivation. Grafakos r0 is constant; our epsilon_j agrees with the nonconstant family starting at r1 apart from null endpoint conventions. Source formulas are checked mathematically rather than copied as verdicts.

Every direct assigned supplier Statement/Definition interface was opened, as were the complete current Mihlin proof and the current duality proof where the main arguments required them. This is not a recursive audit of all published prerequisites or a complete bibliography audit; source qualifications from current cited interfaces were checked. Initial grouped terminal outputs sometimes truncated unrelated artifact retrieval; the required mathematical carrier sections were retrieved completely before disposition. Temporary PDF extraction used PyMuPDF because pdftotext is unavailable; failed extraction commands are not counted as evidence. Local check results will be appended below.

## Final local checks

- Initial risk routing: `node tools/risk-report.mjs research/frontier-39-analysis-30-batch-7.proof-contracts.json` — exit 0; 23 items routed, 20 HIGH/CRITICAL reviews required.
- Required risk review: `node tools/risk-report.mjs research/frontier-39-analysis-30-batch-7.proof-contracts.json --require-reviewed` — exit 0; all required reviews complete.
- Strict contract check: `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-7.proof-contracts.json --strict` — exit 0; 23/23 items, 0 errors, 0 warnings.
- Precheck: `node tools/tsx-run.mjs tools/precheck.mts items/def-rademacher-functions-on-the-unit-interval.md items/lem-finite-rademacher-blocks-are-equidistributed.md items/thm-khintchine-inequality-for-finite-rademacher-sums.md items/lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition.md items/def-inhomogeneous-dyadic-frequency-partition.md items/lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds.md items/lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded.md items/lem-ltwo-almost-orthogonality-of-dyadic-pieces.md items/def-littlewood-paley-square-function.md items/lem-rademacher-randomisation-converts-square-functions-to-multipliers.md items/lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds.md items/lem-littlewood-paley-reproducing-formula-in-tempered-distributions.md items/thm-littlewood-paley-square-function-equivalence-on-lp.md items/cor-dyadic-partition-choice-does-not-change-the-lp-square-function-space.md items/thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces.md items/def-lusin-area-function-for-a-fixed-admissible-kernel.md items/rem-square-function-characterisation-of-real-hone.md items/rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements.md items/ex-square-function-of-one-frequency-localised-function.md items/ex-dyadic-square-function-of-two-separated-frequency-packets.md items/cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels.md items/rem-littlewood-paley-linfinity-endpoint-needs-bmo-carleson-control.md items/ex-sobolev-weight-on-a-single-dyadic-annulus.md` — exit 0; 16 proof sections checked, 0 failing. Definitions and recorded remarks do not acquire mathematical certification.
- Rendering: `node tools/rendercheck.mjs items/def-rademacher-functions-on-the-unit-interval.md items/lem-finite-rademacher-blocks-are-equidistributed.md items/thm-khintchine-inequality-for-finite-rademacher-sums.md items/lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition.md items/def-inhomogeneous-dyadic-frequency-partition.md items/lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds.md items/lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded.md items/lem-ltwo-almost-orthogonality-of-dyadic-pieces.md items/def-littlewood-paley-square-function.md items/lem-rademacher-randomisation-converts-square-functions-to-multipliers.md items/lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds.md items/lem-littlewood-paley-reproducing-formula-in-tempered-distributions.md items/thm-littlewood-paley-square-function-equivalence-on-lp.md items/cor-dyadic-partition-choice-does-not-change-the-lp-square-function-space.md items/thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces.md items/def-lusin-area-function-for-a-fixed-admissible-kernel.md items/rem-square-function-characterisation-of-real-hone.md items/rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements.md items/ex-square-function-of-one-frequency-localised-function.md items/ex-dyadic-square-function-of-two-separated-frequency-packets.md items/cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels.md items/rem-littlewood-paley-linfinity-endpoint-needs-bmo-carleson-control.md items/ex-sobolev-weight-on-a-single-dyadic-annulus.md library/fourier-analysis/littlewood-paley-theory-and-square-functions.md library/fourier-analysis/littlewood-paley-theory-and-square-functions-examples.md --quiet` — exit 0; 25 files, real KaTeX and renderer YAML parsing passed.
- Final proof layout: `node tools/proof-layout.mjs items/def-rademacher-functions-on-the-unit-interval.md items/lem-finite-rademacher-blocks-are-equidistributed.md items/thm-khintchine-inequality-for-finite-rademacher-sums.md items/lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition.md items/def-inhomogeneous-dyadic-frequency-partition.md items/lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds.md items/lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded.md items/lem-ltwo-almost-orthogonality-of-dyadic-pieces.md items/def-littlewood-paley-square-function.md items/lem-rademacher-randomisation-converts-square-functions-to-multipliers.md items/lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds.md items/lem-littlewood-paley-reproducing-formula-in-tempered-distributions.md items/thm-littlewood-paley-square-function-equivalence-on-lp.md items/cor-dyadic-partition-choice-does-not-change-the-lp-square-function-space.md items/thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces.md items/def-lusin-area-function-for-a-fixed-admissible-kernel.md items/rem-square-function-characterisation-of-real-hone.md items/rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements.md items/ex-square-function-of-one-frequency-localised-function.md items/ex-dyadic-square-function-of-two-separated-frequency-packets.md items/cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels.md items/rem-littlewood-paley-linfinity-endpoint-needs-bmo-carleson-control.md items/ex-sobolev-weight-on-a-single-dyadic-annulus.md` — exit 0; 23 items, 71 steps, 0 defects. Single batched final layout run after all content and metadata edits; no item formatter/edit was needed in this dispatch.
- Defect ledger append: `node tools/defect-ledger.mjs append --file /tmp/f39-b7-ledger-rows.json` — exit 0; 41 closed defect rows appended, generated view refreshed under the append lock.
- Scoped row validation: `node tools/defect-ledger.mjs validate --ledger /tmp/f39-b7-ledger-rows.jsonl` — exit 0; 41 rows, 0 errors. Initial validation mistakenly passed a JSON array where JSONL was required; its parser errors were invocation errors, corrected by serialization to JSONL, with no mathematical defect row.
- Dependency merge: `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30` — exit 0; refreshed and deduplicated.

Independent structural inventory check: exactly 26 owed obligations (21 touched, 1 A page, 2 reader, 2 refuter), no duplicates or extras; every defect ID resolves to a closed row for the matching subject, and each finding maps to exactly one row. All 23 item raw hashes still equal the collected post-reader snapshot; both page order anchors remain unchanged. No mathematical content in an item was edited by this Alpha. Source/statement/dependency/provenance mirrors for owned touched carriers were synchronized without adding pages or items.

Final current page raw SHA-256 bindings:

- `littlewood-paley-theory-and-square-functions`: `50992979af83b0e83818eb24ff22d24f095c2a1af1f252b42b66e154321d60d8`.
- `littlewood-paley-theory-and-square-functions-examples`: `3550f35421eb48e5947a7e60fd3fa3cb6cddc43cfca4063d113e86c86a5d6a12`.

No local mathematical repair is blocked and no published defect was identified. The historical original-byte uncertainty and outside producer metadata reconciliation remain explicit for owner/Step 5b. No judge stamp, self-certification or engine gate battery was initiated; engine decision hashing and gate closure remain pending its normal dispatch processing.
