# Batch 91 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-91`; scope-file original group remains `g`.

## Outcome and exact obligations

The two owed obligations are `reader:91:1` and `refuter:91:1`, both concerning `def-csm-frontier-finite-generator-chain` in producer batch 85, reached by owned consumer `def-csm-frontier-ssep-diffusive-model`. Both are escalated for producer-owner resolution of the same nonfatal metadata defect. There are no touched or page decisions. No item or page was edited, and no completed repair or proof acceptance is claimed.

The current supplier still has `deps: []` and no `justified_by`. Its final Definition paragraph claims that every finite rate matrix and initial law admits a realization; the linked existence lemma proves exactly that well-definedness result and depends on the definition. SCHEMA.md requires the reverse well-definedness relation through `justified_by`, rather than a cyclic `deps` edge. Add `justified_by: [lem-csm-frontier-finite-generator-chain-existence]` in producer batch 85 and synchronize the owning contract and manifest as necessary. This dispatch cannot make that outside edit. Both findings are supported; neither is a false positive merely because the producer's other Definition issues have since been repaired.

The attempted local closure was independent review of the entire uniformization proof, producer contract and manifest, plus the actual SSEP use. The existence result is mathematically adequate under AC: its product kernel is measurable and stochastic; cylinder factorization gives independent clocks; infinitely many waiting times at least 1/q give nonexplosion; memorylessness gives Poisson increments; summing R^k yields exp(tL); conditioning down uses the tower property with nested sigma-algebras and an integrable indicator. The q=0 branch supplies a constant process. No missing mathematical theorem blocks this consumer, which explicitly declares the existence lemma. The unresolved issue is the mandated supplier metadata relation and outside ownership, not the mathematical existence argument. Owner/batch 85 must resolve it before these decisions and the affected risk record can close.

One OPEN ledger row, `physics-non-fluid-129-2026-10-21-r2-3a-b91-generator-justification-open`, retains the issue for both escalations. It is deliberately not represented as a closed or repaired defect. Closed-row requirements cannot truthfully be satisfied before owner resolution. No repair_confidence is asserted for this unfinished repair.

## Historical and current evidence

Batch-91 pre/post snapshot `hashes` mappings are identical, and all eight current raw item SHA256 values match both snapshots. The reader made no local repair to accept, amend or revert. Exact per-finding producer pre-reader fingerprints, producer carriers at split, dependency paths, observed-source hashes and consumer IDs are copied unchanged into the decisions JSON; reader and refuter observed different historical producer bytes and are not merged into an invented single observation.

The reader observed generator SHA256 `12a1668c53a7d4f20d72bb8c4d6a05b638509f11524f62054a44d1e54f625a2b`; the refuter observed `4e0b67ab066885ccb67bd8fcdf5a2c046e67cd4ae754c8d1f108e744ed181bd0`, which remains the current definition. The current existence lemma additionally declares and uses the tower-property supplier at F5/5.1; that update was inspected against `thm-tower-property-of-conditional-expectation`, whose AC, integrability and nested-sigma-algebra hypotheses are met. No historical uncertainty is invented: both routed observations have bindings.

## Ordered risk reviews

### `lem-csm-frontier-ssep-heat-flow` — complete

Independently checked all seven steps against the weak-solution and Fourier/Parseval interfaces under AC_omega. Polynomial Fourier decay via lattice shells makes all fixed derivatives summable; Gaussian damping handles L1 initial data on positive-time strips. Duality gives continuity and weak identity; Parseval gives L2 convergence at zero, convex smooth truncations give both 0 and 1 bounds, the zero mode preserves mass, and scalar Fourier ODE uniqueness applies at each time to L-infinity classes. T=0 and zero/constant data are covered. No load-bearing source beyond the explicit local proof and exact suppliers; no defect found.

### `def-csm-frontier-ssep-diffusive-model` — open

Checked the whole Definition against AC, finite reversible rate model, finite-generator Definition and existence proof, and sector-connectivity proof. N>=3 gives each unordered bond once, including N=3; distinct nontrivial swaps change precisely their endpoints, so no duplicated target-rate ambiguity. Rates N^2, mass N^-d and centered Laplacian give D=1. Finite uniformization permits reducibility and arbitrary initial vectors; q=0, singleton empty/full sectors and zero exit states are covered by the existence proof. Uniform sector weights satisfy detailed balance. The missing justified_by metadata on the outside batch-85 generator definition is confirmed and referred to its owner; this consumer separately declares the sound existence lemma, so no mathematical premise is absent. No consumer interface edit needed. Mathematical review is complete, but this risk disposition remains open until owner resolution of reader:91:1 and refuter:91:1; do not infer closure from the proof check.

### `lem-csm-frontier-ssep-bracket` — complete

Read both proof steps and the current finite-chain martingale proof. The rate-matrix row convention yields exactly the centered Laplacian after reindexing. Each jump is N^-d times the occupation difference times the reversed test difference; squaring removes the sign. Multiplying by N^2 and counting N^d bonds per direction gives T N^-d sum_i ||partial_i G||_infinity^2. Periodicity handles boundary bonds; equal occupations, constant G, empty/full sectors and T=0 yield zero. The current supplier establishes all-pairs square-integrability, predictable continuous compensator and uniqueness without completed filtration. No mathematical defect; outside metadata referral retained.

### `lem-csm-frontier-ssep-time-dependent-martingale` — complete

Read all five steps against the current uniformization, finite-chain martingale and predictable-sigma-algebra interfaces. For fixed N the finite rate bound gives uniform O_N(h^2) errors and bounded increments; smoothness of H gives bounded time derivatives on the compact horizon. Summing conditional mean errors over deterministic partitions proves the all-pairs martingale, and the conditional second-moment expansion plus exact martingale cross-term cancellation proves M^2-A. No estimate interchanges N and partition limits. Continuous adapted A is predictable by left-step approximation; squared jump and gradient bound have the stated normalization. Checked T=0, self-transitions and singleton sectors. No defect beyond the separately routed outside generator metadata.

### `thm-csm-frontier-ssep-heat-limit` — complete

Independently reviewed all four proof steps and exact six declared supplier interfaces. Backward H_s=P_(t-s)G is real and smooth through s=t; heat derivative bounds make centered-difference error O(N^-2) uniformly on the horizon. Bracket O(N^-d) gives fixed-time convergence for every d>=1 on possibly different probability spaces; initial convergence applies to the real smooth P_tG. The fixed-test Doob bound and deterministic mass<=1 give the finite-mesh argument and uniform-in-time conclusion. Checked cadlag path hypothesis from uniformization, bracket expectation identity, T=0, G constant, and zero/full density. Full AC implies the heat supplier AC_omega. Remarks correctly derive D=ell_0^2/tau_0 for this mathematical model and claim no empirical result. No mathematical defect; outside generator metadata remains referred.

### `ex-csm-frontier-ssep-density-mode` — complete

Checked both verification steps against the current heat-flow and heat-limit suppliers. The cosine eigenvalue is -4 pi^2 |k|^2, constant part has eigenvalue zero, and |b|<=min(a,1-a) bounds the datum in [0,1]. For k=0 the profile is the constant a+b, not a distinct pair of nonzero modes; the displayed formula still holds. b=0 and a=0 or 1 are valid, and T=0 is the initial-law premise. The empirical convergence is explicitly conditional on the full initial test-profile assumption; it neither constructs measurements nor infers physical truth. Full AC is explicit in Given/A1 and inherited in the cited theorem. No defect found.

## Exact mathematical suppliers and ancillary review

Opened every assigned carrier and the current direct dependency interfaces: `def-countable-choice`, `def-axiom-of-choice`, `def-fourier-coefficients-and-trigonometric-polynomials`, `thm-fourier-basis-and-parseval-on-the-n-torus`, `def-csm-dk-finite-reversible-rate-model`, `def-csm-frontier-finite-generator-chain`, `lem-csm-frontier-finite-generator-chain-existence`, `lem-csm-frontier-finite-chain-martingale`, `def-progressively-measurable-and-predictable-process`, and `lem-csm-frontier-finite-doob-bound`. The full local generator-existence, fixed martingale and Doob proofs were read. Additional exact interfaces opened for those arguments were Ionescu–Tulcea, pi-lambda, monotone convergence, continuous-time adapted martingales, conditional-expectation algebra and tower property, Fubini, continuous finite-variation martingale uniqueness, Cauchy–Schwarz, layer cake and Tonelli. These supply mathematical objects/results, not empirical premises.

The weak-heat definition permits a separate L-infinity class at every time and requires continuous smooth-test pairings and the integral identity. Fourier uniqueness applies at each fixed time without imposing unstated uniform L-infinity bounds. Sector connectivity's spanning-tree and leaf induction work for one vertex and both singleton cardinalities; vacancy/particle transport uses legal moves in each direction. Neither lower-risk item owes a separate decision. No item in this scope contains a TikZ/tikzcd diagram, and these scalar/lattice proofs need no added diagram.

## Source reading and limits

[Varadhan, Chapter 4](https://math.nyu.edu/~varadhan/Spring2012/Chapter4.pdf), §4.3, printed pp. 53–56, was inspected through the theorem and generator/martingale argument. Its general symmetric jump normalization gives one-half the covariance Laplacian; the local unordered unit-bond convention was independently calculated to give D=1. Its initial condition is deterministic, whereas the local proof explicitly handles convergence in probability of random initial measures. The local theorem is checked from its own proof rather than attributed verbatim to that source.

[Biswal–Lanchier](https://arxiv.org/pdf/1906.01752), §3, Lemmas 5–6 and their proofs, was inspected for finite connected-graph sector communication. The assigned lemma supplies its own graph-theoretic proof. [Norris](https://www.statslab.cam.ac.uk/~jrn10/Lectures/ap.pdf), §4.3, printed pp. 26–27, was checked for the all-pairs convention and dyadic approach to Doob inequalities. The local finite-state proof supplies the generator calculation; no usual-filtration regularity is silently imported.

The Landim PDF at `https://math.arizona.edu/~sethuram/588/Landim.pdf` timed out. Its exact printed locators were not verified here. Bertini et al. `https://arxiv.org/pdf/1404.6466` was opened and the headings for hydrodynamic description and the boundary-driven one-dimensional exclusion section located; no full-section reading or theorem attribution is claimed. Aldous–Fill and Durrett were not independently retrieved here. These retrieval/reading limits do not replace local proof checks with presumed source authority.

## Consumer records, published content and checks

The owned batch-91 cross-batch input records the generator and probability-interface-page rows OPEN for this referral; other actual finite-chain existence, martingale and Doob uses remain mathematically verified with specific evidence. Stable IDs, inventories and proposed-withdrawal status are preserved; no withdrawal is proposed. The task ledger records this disposition. No published defect was identified, no published item was edited, and no published-ledger mutation was needed.

Executed checks:

- Initial `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-91.proof-contracts.json`: exit 0; six HIGH/CRITICAL items routed.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-non-fluid-129-2026-10-21-r2`: exit 0, refreshed and deduplicated.
- Required rerun of the risk command with `--require-reviewed`: exit 1, exactly the deliberately OPEN `def-csm-frontier-ssep-diffusive-model` risk record. Five other required risk records are complete. This unresolved escalation is not concealed as a passing check.
- Read-only hash comparison: all eight item files match both frozen snapshots; no item mutation occurred. Decisions JSON has exactly the two routed obligations and retains producer/consumer bindings.

No item edit occurred, so repair-only precheck, reflow and proof-layout were not applicable. No judge, stamp, certification, dispatch, full gate battery or stage transition was initiated. The engine owns hashing and gates. Remaining action: producer batch 85/owner resolves the justified_by relation, then the routed decisions and affected risk record receive owner-authorized closure.
