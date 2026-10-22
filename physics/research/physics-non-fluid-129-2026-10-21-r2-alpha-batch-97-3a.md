# Batch 97 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-97`.

Reviewed the dispatch, scope, reader report/findings, refuter artifact and immutable pre/post hash snapshots. Exactly three decisions are owed: two touched source-locator changes and refuter:97:1. Engine owns stamping and gates.

## Completed dependency-order review

### lem-csm-frontier-finite-box-cube-max-fiber-influence

Checked all ten steps: two-point inequality for p=1,2 and the interior; mixed-norm tensorization direction; finite Fourier variance identity; dyadic error n/2^m; actual endpoint sections including degenerate boxes; b_ik <= 2^(1-k) F_i; zero M and n>=2 cases. All integration is finite subdivision or one-variable calculus; no product-measure or choice input. The loose constant in step 4.2 suffices in both L<=1 and L>=1 regimes. Reader reported no defect; refuter supplies none here.

### lem-csm-frontier-fk-independent-cluster-animal-envelope

Checked seven steps and F1/F2 measure/integral and monotone-convergence suppliers. The marked-site displacement count overcounts and independence applies only to distinct roots; dyadic failure bounds are summable for Q>8. Layer-sum error tends to zero and the deterministic constant is uniform over shapes. Envelope maxima use countable union bounds, not independence of M_z. Delta is a connected animal, U>=mt and U<=K(m+U/t) force t<=2K. Given probability space is retained; no new product law or AC is asserted. Reader/refuter report no finding here.

The subsequent entries complete the remaining review in the dispatched dependency order.

## Finite FK coupling — refuter:97:1

Confirmed fatal as written: on one edge q=1, p1=1/4, p2=3/4, a common U=1/2 separates the closed chains. The current step 4.1 now proves each marginal converges by coupling two copies of its own fixed kernel to a stationary FK initial law; the r-update all-closed event has probability delta=r^(-r)(1-p2)^r>0 and equality is absorbing only for these same-kernel copies. The original ordered different-kernel chains yield domination after taking their separate marginal limits. Complete local repair, confidence 1. Component-count, conditional-law and association arguments were independently checked. Statement and Definition unchanged, so no interface consumer propagation; contract step 4.1 now mirrors the repair. No judge stamp was present.

### lem-csm-frontier-fk-planar-duality

Checked four steps with exact plane-graph, dual-multigraph, disconnected Euler and edge-face incidence suppliers: deletion inductively matches dual components to current faces, bridge deletion preserves faces, nonbridge deletion merges two. Euler gives k(A)=k*(A*)+|V|-|A|-1 and the odds relation cancels every A-dependent factor. Single vertex/no edge and disconnected spanning subgraphs work; exterior dual vertex retained. No criticality assertion.

### lem-csm-frontier-fk-torus-cellular-duality

Checked all ten finite-matrix steps: labelled dual isomorphism preserves endpoints at m=1 (two loops) and m=2 (parallel labels); incidence rank V-k and face-kernel dimension 1 give dim H=2. Restricted two-chains have dimension k*, yielding component identity and complementary rank r*=2-r. At self-duality weights have ratio q^(r-1); Z=Z* from the actual graph isomorphism. Normalized likelihood q^(1-r*) and weaker event bounds follow even for empty events and q=1. No cellularity of random open components assumed.

### lem-csm-frontier-fk-cylinder-pressure-comparison

Checked seven steps: monotone all-open cylinder limits and inclusion-exclusion; positive-activity tiling yields finite pressure sup and wiring changes log partition by O(boundary). Translation sandwiches and quarter-turns identify edge orbit densities. Convex secants inject nondifferentiability intervals into rationals; derivative squeeze forces equal densities off countable D_q. Finite ordered couplings bound arbitrary cylinder differences by summed edge differences, justified by repaired finite FK supplier. A single parameter between p,pprime avoids D_q; one-arm truncation and infimum establish moving-boundary limit. Only numerical tables/real limits, no Borel law extension or AC claimed.

### lem-csm-frontier-fk-free-wired-limits

Checked three steps and the actual Countable Choice and finite-alphabet compactness suppliers. Spatial Markov comparison gives increasing free/decreasing wired probabilities on fixed finite edges; inclusion-exclusion handles nonincreasing atoms. Finite-sum limits preserve nonnegative consistent tables. Explicit countable edge reindexing meets the supplier finite-alphabet countable-product hypotheses, and AC_omega is assumed only for extension; uniqueness is equality on the cylinder-generated Borel sigma-algebra. No critical free/wired equality asserted.

### lem-csm-frontier-fk-influence-threshold

Checked five steps, conditional likelihood-ratio monotonicity and association including extra forced coordinate, exact disjoint sequential boxes including thresholds, and both endpoint reorder comparisons. Forced U_j=0/1 is evaluation rather than null-event conditioning. Reordered conditional chain rule gives F_j<=I_A(j); finite-box supplier applies for n>=2 and yields c=1/4. Positivity for p in [epsilon,1-epsilon] and q>=1 ensures all conditional laws exist; no product law for FK edges or integer-q restriction.

### lem-csm-frontier-fk-mixed-reflection-gluing

Checked all 25 steps with finite FK, labelled torus likelihood and polygonal Jordan interfaces. DFS clockwise query sectors lie above horizontal output; transposed search queries right of vertical output. Adaptive transcripts constrain only queried states. Even-N half-open square has exact complementary dual crossing; extension costs r(q). Auxiliary separate terminals remain distinct through contraction; face count and reflection identify joined dual law, giving connection >=1/(1+q). First intersection along g2, last axis return and four direction determinants ensure the shaved disk and forward exit. Colored crosscut tree retains original same-color terminal wiring; outside retained-region components cannot join opposite classes. Only unqueried F embeds in R under m>3N/2, not the full disk. Conditional association handles unrevealed H(R2), with final a^3/[2(1+q^2)] bound. Singleton arcs, parity, boundary contacts and 4|N shifts checked; no diagrams present.

### thm-csm-frontier-fk-torus-rsw

Checked six steps: lattice/period map is bijective; two vertical 3/2 rectangles plus overlap square give d=b^2a. For n>=32 the scales L=16k,h=4k,S=12k keep patches embedded (24k<n<m); adjacent lift overlaps give actual intersections. Connected lifted path stays in y-strip and truncates to target x=0..ceil(alpha n), which separately embeds. J<=16alpha+5/4 makes finite FKG bound uniform. For 1<=n<32 a distinct-label row and finite-energy bound cover all remaining sizes. Repaired finite comparison is used without any distinct-kernel coalescence assertion.

### lem-csm-frontier-fk-wired-annuli-and-numerical-threshold

Checked fourteen steps and all seven actual supplier interfaces. Finite differentiation and two edge orbits give logistic amplification; translation grid cover and association of complements convert it to high wired rectangle crossings. Outermost-circuit fiber tests use exterior labels only and preserve outgoing outer events; descending conditional bounds give products with a finite wired seed. Numerical cylinder limits suffice for every finite annulus intersection and uniform one-arm lower bound above ps. Free center-grid duality removes independent perimeter loops and respects exterior vertex. Off-countable exceptional dual parameter, disjoint dual circuits force finite Hamming distance; alpha chosen with log alpha=(t-s)/(4d+8) gives exponent 2d+4. Empty/finite initial scales are absorbed; no critical value or Borel extension/choice assertion.

### lem-csm-frontier-fk-subcritical-exponential-decay

Checked all twelve steps against numerical annuli, finite comparison, compactness, independent-envelope and monotone convergence/Fatou interfaces. Arbitrary-order one-arm tails bound cluster moments; positive finite cluster-history events factor across closed boundary edges. Fixed-closed heat-bath comparison and binary-pair compactness give ordered kernels. AC_omega chooses the countable family fixed in advance; unary binary encoding explicitly extends the countable-output process, whose second marginals remain iid despite histories. Actual cluster-set law transfers by cylinder uniqueness. Uniform animal bound gives closed-edge count >=m/K0-1, and Fatou handles random cutoff before exponential Hamming integration at p<s<ps. Translation and increasing finite-box connection events extend the same constants to every arbitrary-boundary cylinder limit. No critical-state uniqueness assumed.

### thm-csm-frontier-potts-square-critical-temperature

Checked three steps with the exact finite Potts, real-q boundary, Edwards-Sokal and numerical wired-threshold suppliers. Pinned boundary B_n is nonempty; the color count is Q^(k_xi-1), so the constant Q^-1 cancels. Conditional coloring gives 1/Q+(1-1/Q)a_n, hence existence of numerical order parameter without Borel extension. Strictly increasing beta map and positivity above/zero below ps identify the infimum independent of the value at criticality. Q=2 included; J>0 essential. Reader source-locator repair correctly excludes Q=2 from external Theorem 3 and directs it to Theorem 1 and Ising introduction. No mathematical statement/proof change required.

### lem-csm-frontier-fk-crossing-amplification

Checked all three steps: actual Borel states exist under declared AC_omega; decreasing D_r intersections characterize unbounded origin cluster and continuity from above identifies theta with numerical infimum. Across distinct parameters t=(p+ps)/2, pressure comparison transfers wired positivity to free positivity without critical equality. Exponential two-point bound and 8r boundary union bound give vanishing one-arm probabilities below ps. All arbitrary-boundary states inherit the supplier bound; threshold infima use above/below sets, not behavior at criticality.

### ex-csm-frontier-ising-coupling-conversion

Checked both verification steps and the exact Potts theorem: indicator=(1+spin product)/2 holds for both products. J_P=2J_I gives H_P=H_I-J_I|E_n|; the spin-independent factor cancels for each finite plus-boundary law. Equal finite probabilities give the same numerical limits/positive-set infima. Dividing the Q=2 Potts critical coupling by two gives the stated value. Corrected source locator accurately points to introduction q=2 discussion and excludes q=2 from Theorem 3; no critical exponent or empirical assertion.

### thm-csm-frontier-fk-square-critical-point

Checked three steps against the already reviewed crossing-amplification supplier, infinite-volume definitions and exact AC_omega hypothesis. Positivity above and vanishing below identify wired infimum; supplier directly establishes free infimum. Uniform two-point bound for all cylinder-limit states is inherited under the same choice hypothesis. q=1 is covered by local proofs; no external theorem restricted to q>1 is silently applied there. No conclusion about critical free/wired measures or transition order.

## Touched citation repairs and historical comparison

Both reader edits are accepted with repair_confidence 1. Current raw item hashes exactly match the immutable post-reader snapshot: Potts `73f05b77c4eb9a4f0bd70c409e126616df6bf2e1292de2d9948c435e3d5d3e8e`; Ising `4a1426d4a5411550b889465fbdbd6e8a395c74c0eac63b4554b8d916ebb8d0ec`. Restoring only the first locator from the native-final-before-integration archive reproduces the immutable pre-reader raw hashes exactly (`4e4dd42142403df58813ebbf3d34300b2a1712238ec2f46d3bfe33a9ae34ebd6`, `8b49ffe72de5a05840cdfbdafd12da3397fefd3377d69be7d8e5bac4357b3d99`). This verifies the delta without treating that older archive's different proofs as the pre-reader source. The original locators were respectively “Theorem 3 and Section 1: finite Potts/FK coupling and the square-lattice critical-temperature formula.” and “Theorem 3, q=2 Potts critical inverse temperature.” Only source metadata changed; statements, proofs, manifest interfaces and dependency uses are unchanged.

Independent source check: https://arxiv.org/pdf/1006.5073, PDF pages 1–3, introduction and Theorems 1–3. Theorem 1 assumes q>1, including Q=2; introduction discusses the q=2 Ising case; Theorem 3 assumes integer q>2. The local pinned finite-sum proof establishes the Q=2 conclusion. These are mathematical model deductions, with no measured input or empirical inference.

## Source and prerequisite reading limits

Read current local carriers and the actual cited supplier interfaces. External source statements checked via authoritative full-text URLs: Beffara–Duminil-Copin PDF above (introduction, Theorems 1–3 and 5, Lemmas 6–7/Proposition 8, and Section 4 annulus/cluster context); O'Donnell https://arxiv.org/pdf/2105.10386, Theorem 9.18; Grimmett–Janson–Norris https://arxiv.org/pdf/1207.1780, Theorem 2.3/Remark 2.1; Graham–Grimmett https://arxiv.org/pdf/math/0505057, Theorem 2.10 and sequential encoding; Grimmett https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf, pressure §4.5. The primary PDF retrievals are not full-book proof-reading attestations. Local arguments replace the cube, cellular, reflection, numerical-pressure and greedy-animal inputs; no external reference is treated as a locally proved supplier. Earlier source-reading notes contain historical unresolved authoring holds and are evidence, not current verdicts. No published supplier defect affecting the reviewed uses was identified. Published/imported content was left unchanged.

All scoped item/page carriers contain no TikZ/tikzcd blocks. No missing diagram is required to establish the reviewed arguments, which are explicit finite constructions and independent of diagrams. Stable IDs, page inventories and prerequisite graph are preserved; no proposed withdrawal.

## Local checks and handoff

- Initial risk report: exit 0, 17 proof-bearing items routed, of which 16 HIGH/CRITICAL; all 16 now have item-specific complete risk reviews. Final `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-97.proof-contracts.json --require-reviewed`: exit 0, zero errors.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-97.proof-contracts.json --strict`: exit 0, 17/17 checked, zero errors/warnings.
- `node tools/tsx-run.mjs tools/physics-support/reflow.mts items/lem-csm-frontier-fk-fkg-spatial-markov.md`: exit 0, unchanged.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/lem-csm-frontier-fk-fkg-spatial-markov.md`: exit 0, 1 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs items/lem-csm-frontier-fk-fkg-spatial-markov.md`: exit 0, YAML/math render check clean.
- Final batched layout after all item edits/reflow: `node tools/physics-support/proof-layout.mjs items/lem-csm-frontier-fk-fkg-spatial-markov.md items/thm-csm-frontier-potts-square-critical-temperature.md items/ex-csm-frontier-ising-coupling-conversion.md`: exit 0, 3 items, 11 steps, 0 defects.
- Native locked defect-ledger append accepted exactly three fixed rows (one for the coupling defect, one per inaccurate citation locator) and regenerated its view. Initial append was rejected for invalid taxonomy spellings and appended nothing; corrected to citation-inaccurate/frontmatter before successful append. This was mechanical, with no extra defect row. Initial guessed checker invocation was unavailable and direct node execution of .mts failed; the actual supported .mjs strict checker and tsx-run commands above passed.

No remaining scientific escalation was identified in this dispatch. No public Statement/Definition changed, so no direct/indirect interface repair is triggered and no outside source was edited. The existing reader note about owner-controlled Step-1 readiness refresh remains historical workflow context; this dispatch makes no readiness/stamp/gate claim. Exactly the three owed obligations are present in the decisions JSON. Engine owns current decision hashing, gate battery and stage transition; no judge cycle, stamping, certification, agent dispatch or publication was initiated.
