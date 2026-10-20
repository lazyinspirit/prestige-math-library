# Batch 32 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-32`. Local adjudication complete; no certification or engine gate claimed.

Reviewed in generated dependency order; all 20 HIGH/CRITICAL risk reviews are complete.

## lem-hyperplane-arrangement-region-count

Checked every step: convex old cells give the deletion/restriction recurrence; Pascal induction includes m=0 and rank zero. Vandermonde normals give codimension q for q<=d and augmented invertibility excludes d+1 intersections. For d=1 the induced zero-dimensional count is one. No choice or diagram reliance.

## lem-sobolev-taylor-grid-approximation

Accepted reader repair after checking Sobolev definition, real Lipschitz representative theorem, local finite-p approximation, mollification identity and AC=>AComega statements. All derivatives through n are bounded on a finite-measure cube, licensing W^{n,1}; mollification preserves top derivative bounds and lower representatives converge uniformly. Taylor along interior segments gives d^n/n! remainder; continuity extends to boundary centers. Hats are nonnegative, sum to one and overlap finitely. n=1, boundary centers and N=2 included. Statement extension clarifies existing coefficients, with no strength loss. Consumer review remains below in order.

## thm-borsuk-ulam-general

Checked current cohomology, finite-CW vanishing, projective-cell, homotopy and cup-natural supplier statements. Explicit block homotopies are representative-independent continuous maps into finite RP^{2m}; pullback identifies degree-one generators. Their mth powers contradict vanishing above dimension. m=1 uses a_0=0; m=0 is the singleton codomain case. AC is inherited from precisely the stated cohomological suppliers.

## thm-warren-polynomial-sign-pattern-bound

Independently verified quotient monomial reduction strictly decreases total degree, finite evaluation interpolation bounds distinct zeros without multiplicities or AC. Coercive P^2 minus even powers has a positive interior maximum per strict vector, giving normalized leading x_i^D gradients. Finite shifts encode >, >= and ternary signs even for zero polynomials; arbitrary domain restriction only removes vectors. Degree-one and k=m=1 cases included.

## thm-sobolev-continuous-nonlinear-width-lower-bound

Checked C^n endpoint-flat polynomial bumps, integration-by-parts weak derivatives, disjoint scaled supports and exact max norm at centers. Sphere-to-cube radial normalization is odd continuous; current Borsuk-Ulam yields identical encoder values for +/-f, and triangle inequality works for arbitrary decoder. k=ceil((W+1)^{1/d}) and W+1<=2W give claimed constants; W=d=n=1 and boundary cubes valid. AC inherited.


## lem-relu-folding-block

Verified ordered knots and alternating values, slope jump a_3=-s_0 including n=3, left hinge cancellation at x=0, and substitution into adjacent layers. Every child interval has a distinct new activation pattern and old masks distinguish parents, so counts multiply. TikZ graph for n=3 is exactly (0,0),(1/7,1),(3/7,0),(5/7,1),(1,0); axes and knots agree with proof. No diagram-dependent inference.

## lem-relu-network-vc-dimension-bound

Checked fixed graph bias slots against ReLU and published VC definitions. Removing input-independent vertices enlarges realization class without adding slots; ranks give K<=w and L-1. Masked outputs have degree<=K; all-mask sign vectors and rank-by-rank cells are bounded using the independently checked coarse polynomial theorem, including zero preactivations and >= thresholds. Both sample-size logarithmic calculations work at w=1; conversion gives W^2 and WLlog(2W). Constant-output class handled separately.

## lem-relu-tent-iterate-depth

Verified tent formulas on both halves, dyadic midpoint induction and slope magnitude; q=0 is the identity affine network with depth 2. Two hidden hinges per iteration compose by affine substitution, retaining O(q+1) slots and depth q+2. Endpoints agree, and skip permissions match current definition.

## lem-univariate-relu-affine-interval-count

Verified induction on common partitions of every earlier unit, including skip edges. A nonconstant affine preactivation adds at most one root; identically zero adds none. Output adds no breakpoints, AM-GM gives fixed-total-unit bound. H=0, singleton/empty restrictions and roots at interval endpoints cannot increase count.

## thm-yarotsky-adaptive-one-dimensional-lipschitz-approximation

Read all six steps and actual Sobolev/Lipschitz/AC suppliers. Verified endpoint extension, residual 2-Lipschitz, finite floor quantization increments and conservative 3/m interpolation error. Grouped cache sees at most one nonzero selector and gamma(0)=0. Continuous selector and four-hinge comb gate remove discontinuity; transition widths <=2delta/T give 8delta/T. delta<=1/4 keeps plateaus ordered. Four hidden levels (selectors, nonnegative grouped sums, cache hinges, final gate) give depth six with skip-connected coarse spline. m,T,delta choices cover all 0<epsilon<1/2 and give T+m3^m=O(1/(epsilon log(1/epsilon))). AC only through representatives. No unproved source estimate substituted.

## fs-telgarsky-unrestricted-gate-parameter-separation

Reviewed original universal quantifiers and explicit Bernstein witness independently: k=d=t=alpha=1, beta=2^22 permits one polynomial gate with constant true predicate; h^5 has Lipschitz constant 32 and uniform/L1 error <=1/128<1/64. The refutation does not import the corrected separation theorem. Shared-parameter gate convention is distinguished from affine-output depth.

## lem-relu-rank-sensitive-region-recursion

Verified relative-image hyperplane restriction, constant and identically zero preactivations, convexity of fixed patterns and output rank <=min(r,|A|). At most S distinct subsets occur; monotonic continuation permits replacement by S largest-cardinality subsets with binomial multiplicities. Backward induction establishes both monotonicity and the bound. r=0 and r>=width cases work; full-dimensional regions acquire no extra boundary-only patterns.

## thm-telgarsky-depth-separation-l1

Checked every computational gate, root count and degree under skip edges against stated conventions. Common partition grows by 1+t*m_i*alpha*beta^(i-1), threshold adds 1+beta^ell, AM-GM yields B. Alternating target threshold intervals have end mass 1/(8T); discarding boundary-containing intervals leaves at least (N-2C)/2 disagreements. Fubini gives d-dimensional error. Verified B<=4(sm)^(k^2), explicit s*2^(k/s)<=2^k sufficiency and eventual fixed-s condition, including s=k=1. Full-binary tree edge count and convexity bound hold for t>k^3 too. Bernstein one-gate counterexample proves necessity of a parameter qualification. No unqualified literature assertion adopted.

## thm-yarotsky-approximation-lower-bounds

All three distinct hypotheses checked against exact width, VC, interval and Sobolev suppliers. Endpoint-flat disjoint bumps have weak derivatives bounded by one and center amplitudes >=4epsilon, hence fixed-architecture shattering. Both W^2 and L^2Wlog(2W) rearrangements checked, including large W split and large epsilon. Nonaffine real C^2 function on cube has interior Hessian direction of fixed sign; line restriction plus rank-partition count covers skips. Midpoint second difference gives epsilon>=c0/(16M^2), then hidden units and counted biases each give claimed fixed-depth lower bound. AC and selector uniform topology preserved.

## cex-telgarsky-small-k-large-degree-gate

Verified same original all-parameter claim and independent one-gate witness as false-statement supplier: h^5 Lipschitz 32, N=2^22 Bernstein error 1/128, constant predicate with degree 0<=1, integer node budget permits exactly one. L1 bound strictly below 1/64; no inference against the corrected budget theorem.

## lem-relu-bounded-product-approximation — confirmed_fatal, repaired

Preserved M>0 and 0<epsilon<M^2, approximation and exact-zero contracts. Replaced the false bound by C_M(1+log(M^2/epsilon)). The explicit delta choice proves this on the whole range, including M<1 and epsilon near M^2. Made the existing global axis cancellation explicit. The sole direct item consumer is the fixed-architecture Sobolev theorem; its small-accuracy, fixed-domain use is compatible and reviewed next. No outside consumer found by item/page source census. Square supplier proof independently checked. Repair confidence: 1.

## thm-relu-linear-region-upper-bound

Expanded the current rank recurrence exactly: successive minimum ranks give J and each branch contributes its binomial factor. Terminal count is one. For L=1, current general-position arrangement supplier achieves all full-dimensional patterns; zero-inactive boundaries add no new pattern. Positive dimensions/widths and rank-zero continuations handled.

## thm-relu-linear-region-lower-bounds

Verified exact 1D product by current fold construction and factorization of rank-sensitive J for widths>=3. In higher dimension, floor(width/n0)>=3 yields independent coordinate folds, extra units stay inactive, and every parent box maps affinely bijectively onto the cube. Finite chamber representatives permit one translate/scale bringing every last-layer chamber into the cube interior; full-dimensional patterns distinguish boxes and final chambers. L=1 gives empty product 1 and the arrangement bound; n0=1 agrees with exact case. Finite constructions need no AC.

## thm-yarotsky-fixed-architecture-sobolev-approximation-rate

Accepted reader repair after authenticated preimage/current diff and independent proof review. Current Taylor supplier makes boundary coefficients unambiguous. Product supplier now has valid 1+log(M^2/error) complexity for the full range; with M fixed by d,n and local small error this is O_{d,n}(1+log(1/eta)), so no consumer statement/proof edit is needed. Approximate hat multiplication preserves zero whenever any exact hat factor vanishes; global axis cancellation holds even if off-support polynomial branches are large. On support all factors and intermediate products have fixed bounds. Bounded overlap yields 2^d eta, N=O(epsilon^(-1/n)), and parallel local gadgets give the stated architecture independent of f. d=n=1 and boundary supports checked. AC inherited, no continuous selection claim. Refreshed stale Taylor supplier quotation in contract only.

## ex-linear-regions-do-not-guarantee-learning

Checked 1+10+45=56 full-dimensional activation patterns for ten general-position lines in R^2. Count is for all input space; the regression distribution alone is restricted to the cube, with no assertion that every chamber intersects it. Setting every affine output coefficient/bias to zero gives prediction 0 and squared risk exactly 1 for Y=1. Thus regions supply no guarantee. No training convergence inference.

## ex-relu-tent-map-depth-vs-width

Verified q=10 gives 2q=20 units, depth q+2=12 and 2^q=1024 intervals. Second hinge activation at each layer records branch bits; inverse bijections give distinct length-ten words, so patterns counted on interval interiors are distinct. Supplier one-layer region bound with input dimension 1 and width 20 is 21 for the same zero-inactive convention. Endpoint bits cannot create additional full-dimensional regions.

## Citation repair and unrouted alerts

The actual Illinois notes masthead identifies Matus Telgarsky, not Michael J. Sullivan. Chapter 5 contents put tents in 5.1, separation in 5.2, squares in 5.3, and Sobolev balls in 5.4. Corrected the author and replaced unsupported secondary-source section locators with accurate Chapter 5 context on routed carriers only. Retained all hyperlinks and primary citations; no mathematical interface changes. Repair confidence: 1.

Changed: `lem-univariate-relu-affine-interval-count`, `lem-relu-tent-iterate-depth`, `lem-relu-bounded-product-approximation`, `lem-sobolev-taylor-grid-approximation`, `thm-yarotsky-fixed-architecture-sobolev-approximation-rate`, `thm-yarotsky-adaptive-one-dimensional-lipschitz-approximation`, `lem-hyperplane-arrangement-region-count`, `lem-relu-rank-sensitive-region-recursion`, `thm-relu-linear-region-upper-bound`, `lem-relu-folding-block`, `thm-relu-linear-region-lower-bounds`, `ex-relu-tent-map-depth-vs-width`, `ex-linear-regions-do-not-guarantee-learning`.

Owner alert (unrouted carriers, not edited): `def-relu-network`, `def-relu-linear-region`, `lem-relu-square-approximation`, `lem-bernstein-polynomial-lipschitz-error`, `ex-target-specific-vs-target-independent-approximation`. These contain the same false Sullivan attribution/section locators at https://mjt.cs.illinois.edu/dlt/index.html. Owner should route citation-only corrections; statements/proofs need no consequent change from this defect.

## Routed dispositions and history

Exactly four obligations: two reader-touched carriers receive `amended_repair` (mathematical reader corrections accepted, secondary citations corrected); `refuter:32:1` is `confirmed_fatal`, repaired; `refuter:32:2` is `false_positive`, unchanged. Each flagged finding maps to exactly one closed ledger row. No reader findings were routed. No extra decisions are invented for risk-only subjects.

Authenticated reader preimages are under `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/items/`. Their SHA256 values match the native-pre snapshot: Taylor `f6ee8a1b4111fef2e2e9345c20e8d4d2778443934991e4f9b7282c8a207bc411`; fixed-rate `eace5efbc01056c3bca6945c71c88672e972a9c15a6ecd4f05b0aa58c62b1d49`. Before citation corrections both current files matched the exact native-post hashes `621d96520bab22840233ef70f75861ad5cda360dce96b13570330bc4f6db10a8` and `a570064956424cec3bf52c7763b14595dacbb16a61f768bc380e1ba48b189597`. Complete diffs were read, with no missing item historical preimage or owner-resolution substitution.

For the page finding, the authenticated preimage archive under the same directory's `library/machine-learning/`, pre/post snapshots and current source all match `8e1118f2f62807a166de99bf38c6ce2a5e3c7aee72d9c13bfd459665c250a1b1`. The actual page contains `status: draft`; its body is empty and all four examples and the A-page prerequisite are present. The refuter's different claimed observation hash could not be recovered by a filename-specific archive search. This limits any assertion about that unidentified byte stream; it does not establish a defect in the authenticated assigned page. No page status repair was performed or claimed.

## Consumer and scope review

An item/page source census finds the product's only direct item consumer is the fixed-rate theorem, using fixed M and accuracy tending to zero. The corrected dimensionless logarithm gives its existing O_{d,n}(1+log(1/eta)) estimate. Taylor's only direct item consumer is also that theorem; its boundary coefficients now explicitly use the same continuous extension. The fixed-rate Statement is unchanged, and its sole direct item consumer is `ex-target-specific-vs-target-independent-approximation`. That example's polynomial has norms 1/2 and 1 and is unit-Lipschitz; its two supplied existence upper bounds have the displayed logarithmic ratio. No necessary mathematical consumer repair or outside consumer escalation results. No new item, page, dependency or withdrawal is introduced. Existing stable IDs and proposed withdrawals are retained. Manifest titles/deps/levels and page inventories remain accurate without modification.

The batch-31 feedforward DAG definition was opened as context: current ReLU definitions specialize its finite acyclic ordered graph and hidden/output activation conventions, without importing universal approximation. Its diagram's arrows point inputs to both hidden nodes to linear output, consistently. Published supplier Statements/Definitions were inspected at the exact used interfaces: Sobolev maximum norms and real Lipschitz representatives, AC and countable choice, local smoothing and weak-derivative commutation; projective-space/cohomology/homotopy/cup interfaces; polynomial degree, compact extrema and Fermat; and shattering/VC dimension. No defective published mathematical supplier was identified, so no published ledger edit or lock was needed. This is interface review, not a new audit of all their transitive proofs. Bibliography alerts on five unrouted draft carriers remain for owner routing as listed above.

## Sources consulted

[Telgarsky's Illinois notes](https://mjt.cs.illinois.edu/dlt/index.html), masthead and Chapter 5 contents, establish the author and actual section organization; §17.3 is context for VC counting. The local polynomial sign theorem is independently proved and does not import the notes' unproved sharp Warren estimate.

[Yarotsky](https://arxiv.org/pdf/1610.01145), Proposition 3 (printed pp. 8–9), states bounded-domain multiplication and global zero-axis behavior; its equation (4) has a coefficient different from the locally verified polarization scaling. Theorem 1 and §3.2 provide the localization context, Theorem 2 and §3.3 the cache construction, Theorem 4 the two VC-based bounds, and Theorem 6 the fixed-depth context. The local arguments and constants were checked independently; no source theorem was treated as a verdict.

[Telgarsky](https://proceedings.mlr.press/v49/telgarsky16.pdf), Theorem 1.1 and Definition 2.1, give the original all-parameter gate assertion and semi-algebraic convention. Current theorem's explicit crossing budget and parameter condition, and both retained high-degree Bernstein refutations, were checked from their written proofs.

[Serra et al.](https://proceedings.mlr.press/v80/serra18b/serra18b.pdf), §2 and Theorems 1, 7–8, give the activation/region context. The supplement returned no extracted text; no claim of reading its scanned proof is made. The assigned arrangement, fold, rank recursion and cube constructions are complete local proofs and were independently verified, including zero and constant preactivations and last-layer chambers intersecting each folded cube.

[DeVore–Howard–Micchelli](https://gwern.net/doc/cs/algorithm/1989-devore.pdf), Theorem 3.1 proof and §4, give the antipodal and bump-space context. [Hatcher](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf), §2.B Borsuk–Ulam discussion, was consulted for context; the current proof uses the exact local projective cohomology suppliers and its explicit block homotopies.

## Checks and handoff

Focused local checks completed successfully:

- Initial risk-report and final `--require-reviewed`: 26 contract items routed, 0 errors; all 20 HIGH/CRITICAL reviews are specific Alpha reviews (plus the repaired moderate-risk product).
- Reflow: all 13 changed items unchanged by formatter. Precheck: 13 checked, 0 failing.
- Final proof-layout after every item edit and reflow, batched once: 13 items, 35 steps, 0 defects.
- Uninterrupted Statement/Definition/Example inspection on 21 routed items: 0 inline-link defects.
- Exact routed decision coverage: 4/4, with all referenced ledger rows present, closed, and matching subjects. Ledger append validated 17 new disposition rows and regenerated its view.
- Both owned pages retain valid draft status, compact-v1, complete inventories and empty bodies; neither was edited. No changed item contained a verification.judge record.

Live native status recomputation succeeded during review: run remains in Step 3a, with batch 32 adjudication still owed at that observation. No old handoff was used to infer active completion.

No mathematical blocker remains in routed work. The five unrouted secondary-citation defects are owner alerts, not mathematical prerequisite escalations; exact IDs and repair strategy are above and in the frontier dependency ledger. No published carrier was edited. Engine owns decision hashing, gates, judgment and stage transitions. No judge or certificate was written.
