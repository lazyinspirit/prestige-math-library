# Batch 37 Step 3a adjudication

Run `non-ml-math-remaining-81-2026-10-18`; group `batch-37`. Review follows generated dependency order. Native pre/post hashes are raw file SHA256 (distinct from verification-stripped guard hashes). All 23 initial current carriers match native post hashes. No judge, stamp, scheduling or publication action is performed.

## `def-ahat-and-relative-chern-character-forms`

Definition checked against supplied Chern/connection/orientation and Chern–Weil statements: curvature normalization is a finite formal series with constant square root 1; local multiplicity supertrace is assigned to the later well-definedness lemma. In dimension zero Gamma_W=epsilon Gamma_V gives epsilon(dim V+ - dim V-), and oriented integration cancels epsilon; empty and rank-zero cases agree. Full AC is needed only for the cohomological interpretation and is now explicit. Exact pre bytes recovered computationally by deleting the new introductory AC paragraph and reinserting erification: precheck:n/a before axiom_strength, keeping ai-altered provenance; SHA256 matches 146e9eb271b60c422435de79434ed02de9fe74aee3b4f04a8a4ae346cc162576. Post matches 88f4edb6dc77444d7969ee537e8695452212b9d8515d45d9529d28a36bde9862. Retain the assumption repair and malformed metadata removal; consumers of forms need no stronger assumption, and cohomological consumers already assume AC.

Disposition: accepted_repair.

## `lem-good-cover-nerve-computes-singular-cohomology`

Read all seven current proof steps and exact supplier statements. Local finiteness makes the partition map locally finite-dimensional; the explicit level-set subdivision inverse respects faces. Recursive geodesic coning agrees on faces, and uniqueness glues the inverse homotopy. Each carrier is the star of sigma_0, contracts linearly to its barycenter, and is nested for faces; prism extension and the interval exponential law justify the ordinary-product homotopy for an infinite weak realization. UCT over free integral chains gives F2-cohomology and refinement naturality. Empty covers/members and singleton simplices are handled. Full AC covers simultaneous choices and UCT. Published comparison supplier step 4.1 has duplicated tags only, reported separately as reader:37:1; it does not invalidate the homology comparison or this consumer. Native pre and post raw hashes coincide.

Disposition: risk review only; no routed decision.

## `def-graded-hermitian-clifford-module-and-geometric-dirac`

Exact archived pre in owner-step2-dirac-zero-orientation-resolution/before/items differs only by the stray erification mapping. The current definition has negative Clifford square, skew-Hermitian odd action, a grading-preserving unitary compatible connection, and an orthonormal contraction defining D. Tensorial contraction glues across arbitrary orthogonal changes; oddness is immediate. Supplied Levi–Civita and bundle definitions suffice; this defines supplied data, not an existence assertion. Reader metadata normalization retained; no mathematical defect or change to Definition.

Disposition: reviewed_no_defect.

## `lem-geometric-dirac-operator-is-well-defined`

Exact pre in owner-step2-dirac-zero-orientation-resolution/before/items lacks the reader-added Countable Choice sentence and Given qualifier; native post duplicates the original assertion. Retain the necessary AC_omega hypothesis from the divergence supplier and delete its redundant second copy (refuter:37:1 confirmed). Frame changes contract sum_i a_ij a_ik=delta_jk, so derivatives of transition coefficients do not enter. The first-variable-linear metric and c_i*=-c_i give div Y=<Du,v>-<u,Dv>; integrate real and imaginary parts on closed oriented M. In dimension zero D=0, so symmetry is direct without the n>=1 divergence supplier; empty and rank-zero cases are vacuous. All direct consumers retain the same assertion and already assume full AC or AC_omega, so deleting the duplicate creates no consumer repair. This is an editorial amendment to the reader assumption repair, with no material proof rewrite or stale judge.

Disposition: amended_repair.

## `cex-dirac-on-euclidean-space-is-not-fredholm`

Exact archived pre and current post compared: retain AC_omega and the explicit two-direction H1 multiplier-domain argument, supported by actual Plancherel and weak-derivative statements with 2pi normalization. The matrix multiplier has norm 2pi|xi| and is invertible off zero; subsequence convergence proves closedness, Schwartz density gives dense domain. Orthogonal complement of range vanishes by invertibility a.e. The witness has squared radial integral integral_0^1 r dr, while its unique inverse has integral_0^1 dr/r, hence the dense range is proper. This remains valid for n=1, any nonzero finite module, and arbitrary positive rank; rank zero and n=0 are explicitly excluded. The new Sobolev citation supplies the defining weak derivatives; no statement consumer uses a stronger choice-free conclusion.

Disposition: accepted_repair.

## `lem-lichnerowicz-formula-for-geometric-dirac-operators`

Exact native pre recovered from owner-step2-dirac-zero-orientation-resolution/before/items and compared with post. Normal-frame expansion gives the connection Laplacian plus sum_{i<j}c_i c_j F_ij. The commutator [c_a c_b,c_k]=2(delta_ak c_b-delta_bk c_a) matches cotangent curvature with the stated Rm convention. In the four-generator contraction Bianchi kills degree 4, symmetric Ricci kills degree 2, and the two scalar contractions give 2 scal/8=scal/4. The current principal symbol is |xi|²I; compact boundaryless n>=2 satisfies the cited Laplace-type domain, while dimension zero is treated directly. Empty and rank-zero cases are harmless, with the metric supplying the scalar principal form in rank zero. Retain the reader qualification rather than claiming that the n>=2 supplier defines dimension-zero Laplace type. All compact analytic consumers use positive even dimension or their separate finite-dimensional zero case.

Disposition: accepted_repair.

## `lem-dirac-maximal-domain-is-h1`

All four steps checked against the current compact bundle elliptic and Hodge supplier statements, which assume AC, n>=2, and domain H2. Energy identity bounds H1 by the D graph norm and conversely. B=(D²+lambda)^-1 maps L2 to H2, and DB to H1; commuting on smooth data then density makes DB bounded symmetric on L2. Testing (D²+lambda)u=Df+lambda u against Bh proves u=DBf+lambda Bu in H1 without incorrectly applying the H1-input elliptic theorem to an arbitrary L2 distribution. The adjoint distribution domain therefore equals the smooth closure H1 and gives selfadjointness. Compactness, empty base and rank zero cause no exception; no dimension-zero assertion is made. Native carrier unchanged.

Disposition: risk review only; no routed decision.

## `lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel`

Three steps checked with H1 selfadjoint domain and compact second-order Green suppliers. Ker D+=ker P+ follows by distributional D² and the H1-input elliptic regularity theorem; converse is the energy identity. Q=D-G- is bounded L2 to H1 and D+Q=I-Pi-, giving range exactly ker P- perpendicular. Smooth two-sided identity QD+=I-Pi+ extends in H1, so kernels/cokernels are finite and smooth and the complex Fredholm index has the asserted sign. All assumptions remain compact, boundaryless, positive even dimension and full AC, including rank-zero summands. Unchanged carrier, no routed decision.

Disposition: risk review only; no routed decision.

## `lem-dirac-heat-trace-and-mckeen-singer-index`

Four current steps and actual compact spectral/elliptic statements read. Retain the cell-average replacement: energy bounds H1 on E_L; mean-zero cube Poincare follows by coordinate-segment FTC and integration; choosing h=c(1+L)^(-1/2) makes the finite average map injective, yielding O((1+L)^(n/2)) counting. Polynomial elliptic eigenfunction bounds then imply absolute uniform convergence of every fixed kernel derivative at t>0, trace class, and diagonal integration. Positive chiral eigenvalues cancel via inverse lambda^-1 D-, leaving the Fredholm index. Empty and zero-dimensional closed M give zero or finite-dimensional sums directly. Exact pre/post differ only in step 1.1. The reader report overstates the old defect: finite-dimensional point-evaluation targets DO bound HS norm by rank times operator norm squared. The old argument omitted that elementary factor, a nonfatal gap rather than an invalid theorem. The replacement is independently sound and concise enough to retain. No stale judge was present.

Disposition: accepted_repair.

## `lem-dirac-heat-parametrix-has-graph-norm-remainder`

All five proof steps checked. The radial transport ODE has unique smooth solution from the integral with s^(j-1); g^-1/4 cancels radial density, and u0(y,y)=I normalizes the Gaussian initial identity. Differentiation cancels powers through J-1; cutoff derivatives away from the diagonal are exponentially small. The Duhamel sign is negative for K-H and its zero initial difference holds on smooth data. Spectral contraction in (1+P)^a graph norms combined with elliptic equivalence supplies arbitrary H^(2a)_x C^b_y remainders; Sobolev embedding gives the asserted differentiated bound, with J increased before integration to ensure integrability. Compact normal neighborhoods, full AC and finite chart choices are legitimate; zero dimension is direct and rank zero vacuous. No unjustified rescaled-kernel limit is imported from a source sketch. Unchanged carrier.

Disposition: risk review only; no routed decision.

## `def-spin-lift-of-oriented-orthonormal-frame-bundle`

Exact archived pre differs from post only by the malformed erification mapping. Definition read against full-even Spin and its actual topological double cover, principal right-action and oriented-frame suppliers. Fiberwise smooth Gram–Schmidt gives the SO reduction; an equivariant lift is a principal full-even Spin bundle over the fixed frame bundle, up to lift isomorphism. Restriction n>=1 avoids incorrectly assigning rank-zero orientation choices to the vector-bundle supplier. No existence or H1 torsor is claimed here. Metadata cleanup retained, with unchanged mathematical Definition.

Disposition: reviewed_no_defect.

## `def-even-dimensional-spinor-bundle-chirality-and-spin-connection`

Read Definition and both algebraic proof steps with actual even-algebra, complex classification and spin-module interfaces. c0=i c+ changes squares to negative and preserves Spin equivariance; Gamma0=(-1)^m Gamma+ exchanges half-spin labels precisely for odd m. The n(n-1)/2 swaps give volume square (-1)^m, canceled by i^(2m), and anticommutation exchanges equal-dimensional halves. Oriented orthogonal changes preserve the volume product. Associated realification descends its commuting complex structure, and the connection/global metric assertions are assigned to the later justified_by lemma. Full AC is correctly made explicit in Definition/Given for the later metric construction. Exact archived pre differs by these AC qualifiers only. n>=2 excludes the exceptional zero-dimensional orientation line, treated separately elsewhere. No other consumer requires change: their AC assumption is already explicit.

Disposition: accepted_repair.

## `lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor`

All eight steps and 37 declared prerequisite interfaces inspected. The exact pre is the owner-step2-root-formatting-round1-reviewed/proposals carrier matching native pre SHA; reader adds covering lifting, cellular comparison and naturality, not a new statement. Contractible overlaps meet covering-criterion hypotheses; associativity gives the central sign 2-cocycle; primitive signs give existence in both directions and differences modulo vertex signs give a free transitive H1 action. For n>=3 the stable frame fibration is Serre by numerability over compact disk cylinders. Its contractible total space and simply connected Spin cover give pi1 BSO=0 and pi2 BSO=Z/2; Hurewicz and UCT give H2-cohomology F2. Disk clutching signs form a cellular cocycle, change by edge coboundaries, and pull back to the nerve sign class after cellular approximation. The rotating two-plane clutching loop lifts from 1 to -1, identifying the nonzero obstruction with w2 of the real Hopf line plus a trivial summand. n=2 uses the degree-two circle cover and CP-infinity; n=1 has trivial SO bundle and principal sign bundles. Empty base has one lift, rank zero is excluded, and full AC covers all simultaneous cover, lift and cell choices. Wernli sections 2.3.1–2.3.2, pp.60–68, independently read online: it defines w2 by signs rather than proving equality with the projective-bundle definition, so that equality is verified here from the authored universal calculation rather than attributed to Wernli. No unresolved prerequisite remains in this argument.

Disposition: accepted_repair.

## `lem-spinor-and-clifford-associated-bundles-are-well-defined`

All five proof steps and actual associated-bundle, transition-law, local logarithm and Clifford suppliers read. Repaired Step 1.1: arbitrary topological Spin sections need not project to smooth frames; equivariance makes lambda a two-sheeted cover in principal charts, so choose continuous lifts of smooth local frame sections on smaller countably many domains. Their transitions lift smooth SO transitions and are smooth by the local logarithm branch. Repaired Step 3.1: without a global Spin structure, multiplicity B transitions can fail the cocycle identity by the inverse central sign of the spin transitions; they do not define an ordinary global W bundle. Their conjugations do satisfy the cocycle identity and d(epsilon)=0 makes the local connection laws consistent. Curvature supertraces and transgressions therefore still patch exactly as the unchanged Statement asserts. Finite monomial averaging gives the skew-Hermitian Clifford metric, c+=-ic0 gives the spin infinitesimal sign, full matrix units give local smooth factorization and graded commutants. In dimension zero Gamma_W=epsilon Gamma_V gives the signed reference-line character. Empty base and rank-zero multiplicities are harmless. Contract derivations synchronized; no prior judge present. These local nonfatal supplier clarifications preserve every Statement/Definition; attached to the touched Ahat definition whose justified_by obligation they complete.

Disposition: risk review only; no routed decision.

## `lem-getzler-radial-gauge-oscillator-leading-term`

Six proof steps checked with current local factorization, curvature and differentiated heat-transport suppliers; Wernli section 4.4.3 pp.101–105 read in full online, including its explicit warning that operator convergence alone does not establish heat-kernel convergence. Our carrier instead uses finite transport coefficients and arbitrary-order graph-norm remainders. Radial gauge integrates x^j F_ji to A_i=half x^j F_ji+O(x²); Clifford filtration makes the principal symbol an exterior oscillator, and the relative term must be F-wedge. Traces below Clifford degree n vanish by conjugation; the volume trace is (-2i)^m. Direct differentiation checks t B prime=B-B²+t² R²/4 and a prime/a=-tr B/(2t), with x^T R B x=0; these verify the Mehler ansatz and Gaussian normalization. Smooth radial transport uniqueness identifies the required coefficient, and arbitrary remainder order absorbs every fixed rescaling/derivative loss. Dimension zero uses epsilon-graded reference line, with u0=I and all higher coefficients zero. Exact pre recovered from owner-step2-root-metadata/before with only statement provenance changed to ai-altered, matching native pre hash. Retain the exterior-multiplication repair and correct step 4.1 reference: transport uniqueness comes from F1, not this item step 1.1 (which integrates connection curvature). No material rewrite or prior judge.

Disposition: amended_repair.

## `prop-positive-scalar-curvature-forces-untwisted-spinor-kernel-zero`

Both proof steps and current Lichnerowicz, associated-bundle, divergence and extreme-value interfaces checked. Untwisted relative curvature is zero. Integrating D² psi gives nonnegative gradient energy plus scal|psi|²/4; on nonempty compact M scalar curvature attains a strictly positive minimum because its image is compact and contained in (0,infinity). This bounds the L2 norm by zero; smoothness gives pointwise vanishing. Empty base is immediate and the positive-curvature hypothesis cannot hold on a nonempty zero-dimensional manifold. This conclusion concerns smooth untwisted spinors, with no assertion for arbitrary twists. Full AC covers integration assumptions. Unchanged carrier.

Disposition: risk review only; no routed decision.

## `ex-complex-projective-plane-has-nonspin-tangent-bundle`

All three steps and actual projective tangent/cohomology, Schubert-cell, cellular homology, UCT and mod-two Chern supplier statements checked. c1(T CP2)=3x for the dual tautological generator; integral H2=Z and H1=0 follow from cells 0,2,4. UCT naturality sends evaluation plus/minus 1 to 1 mod 2, so rho2(x) is nonzero. Thus w2=rho2(3x) is nonzero and the rank-four oriented tangent bundle has no Spin lift. The cohomology-ring supplier names the tautological generator with opposite sign; either generator evaluates plus/minus 1, so this use is valid. Full AC is now explicit and inherited by all uses. Exact pre/post differ only in AC clauses and tags, with unchanged mathematical conclusion; retain the repair.

Disposition: accepted_repair.

## `ex-flat-even-torus-spin-dirac-has-index-zero`

Four steps checked against the actual compact Fourier supplier (AC and DC), product duality and complex Clifford dimensions. The local small-argument character logarithm is additive; subdividing arguments gives a well-defined continuous additive real lift, hence alpha t, and periodicity forces alpha integral. Thus the frequency basis is Z^(2m). The periodic spin connection is trivial and D acts by 2pi i c(k), invertible at k nonzero. Weak testing against characters forces harmonic H1 sections to be constant, separately in each chirality. Equal dimensions 2^(m-1) give index zero, including m=1; m=0 and other spin structures are outside the stated example. Native pre/post comparison retains explicit AC/DC and hypothesis tags, with no new conclusion or consumer obligation.

Disposition: accepted_repair.

## `lem-mehler-supertrace-normalization-is-ahat-times-relative-chern-character`

Five steps checked using the current oscillator, Chern/volume and Ahat definitions. Formal nilpotence avoids analytic branch and matrix diagonalization assumptions. B=z coth z is symmetric, commutes with skew R, and its Riccati identity and determinant logarithmic derivative cancel the Gaussian heat equation exactly. W endomorphisms need not commute with each other, only with scalar tangent curvature. Top Clifford trace (-2i)^m combines with (4pi)^(-m), distributing -i/(2pi) per curvature two-form. The even tangent determinant becomes Ahat while exp(-F) becomes exp(iF/(2pi))=exp(-F/(2pi i)); signs agree with the fixed volume chirality. At a signed zero-dimensional point the unsigned heat density str_V I becomes epsilon str_V I as an oriented top form, exactly str_W I. Empty/rank-zero cases follow. Exact native pre reconstructed from root-metadata/before with ai-altered statement provenance; retain the reader F-wedge typing clarification in F1 and step 2.1. This clarifies the existing exterior action without changing a conclusion.

Disposition: accepted_repair.

## `ex-positive-scalar-curvature-sphere-has-zero-spin-dirac-kernel`

Three steps and current projective tangent, mod-two Chern, Spin obstruction, sphere-curvature and positive-curvature supplier statements checked. c1(T CP1)=2x reduces to zero, so the oriented rank-two tangent bundle has a Spin lift. Unit sectional curvature has two ordered scalar terms, giving scal=2 with Rm(u,v,v,u)>0. The compact untwisted vanishing result applies to smooth harmonic spinors. Full AC is now explicit in Facts/Given and A1, covering the exact inherited assumptions. The conclusion is unchanged and does not extend to arbitrary twists. Exact pre/post compare as the reader assumption/tag repair; retain it.

Disposition: accepted_repair.

## `thm-geometric-clifford-module-dirac-index-formula`

Four steps and every current prerequisite interface checked after the supplier risk reviews. For positive dimension the H1 Fredholm domain and heat supertrace are established locally. Arbitrary differentiated parametrix remainder is uniform on finitely many compact charts; all supertrace coefficients j<m vanish, j>m vanish after multiplication by t^(j-m), and j=m is the normalized Ahat-relative character form. Finite volume justifies the integrated limit without exchanging an unbounded spectral sum at t=0. No global spinor bundle is assumed for a geometric Clifford module: the repaired projective multiplicity transition proof gives the invariant supertrace used here. For m=0, compact discreteness gives finite fibers and D+=0; its index is sum(dim V+ - dim V-), while the integrand has epsilon times that dimension and oriented integration contributes the second epsilon. Negative points, mixed orientations, arbitrary given gradings, zero-rank modules and empty M all agree. This is a complex Fredholm index only. Native carrier unchanged.

Disposition: risk review only; no routed decision.

## `cor-spin-dirac-index-formula-with-arbitrary-twist`

All three steps checked with current index, spinor, relative-character and signed-integration suppliers. Positive dimension uses the unitary compatible product connection on S tensor E; its commutant curvature is FE and multiplicity grading is even, so the relative supertrace is the ordinary Chern character. Rank-zero twist gives zero spaces and trace. In zero dimension the reference line has point grading epsilon and the zero chiral map has index sum epsilon rank E, matching signed integration of rank. Full AC is already in Statement and now repeated explicitly in Facts/Given, which is valid audit enrichment rather than correction of a missing theorem hypothesis. Exact pre reconstructed from root-metadata/before with ai-altered provenance matches the native pre hash; the only delta is this Given clarification. No historical mathematical defect is assigned for that repetition.

Disposition: reviewed_no_defect.

## `ex-twisted-sphere-dirac-index-and-curvature-term`

All three proof steps and exact suppliers checked. The north/south potentials extend smoothly since (1-cos theta)dphi and (1+cos theta)dphi have quadratic pole zeros; their difference is ik dphi=g^-1 dg for e^(ik phi), a single-valued transition for every integer k. Both give F=-ik/2 area=-2pi i k omega. Normalized Chern curvature -F/(2pi i) integrates to k, the integral group is torsion-free, and c1(Lk)=kx. The twisting contraction c1 c2(-ik/2)=-k Gamma/2 has the stated sign. In dimension two Ahat=1 and ch=1+k omega, hence index k, including negative k and zero. Retain the reader full-AC assumption/tag repair. Amend F5 to cite the existing tangent-projective supplier, whose x=c1(gamma*) has positive pairing; the previously cited cohomology-ring supplier names the tautological generator and does not state that pairing. The conclusion and all dependencies are unchanged, and the exact F5 contract quote is synchronized. No stale judge was present.

Disposition: amended_repair.

## Final corrections and interface checks

The final A-hat Definition now attributes only its curvature convention to `def-chern-pontryagin-and-euler-characteristic-forms`; that supplier does not itself define A-hat. The formal series and all consumer formulas are unchanged. Lichnerowicz F4 now distinguishes the scalar positive symbol defining Laplace type from the separate formal-symmetry identity. The torus A1 now explicitly links the already-declared AC supplier, with actual citation uses synchronized. These final textual corrections are included in the seven-file precheck/render/layout selection below.

Current direct dependency/reference consumers of the touched interfaces were searched in `items/`; all found consumers belong to batch 37 and their actual uses were reviewed above. The compact analytic consumers satisfy positive even dimension, compactness and full AC; relative-character and index consumers need invariant local multiplicity traces, not a global multiplicity bundle on a nonspin base. The A-hat defining formula and every theorem Statement formula are preserved. Removing the redundant Dirac sentence changes no assertion. No outside consumer repair or further propagation is required. Manifest dependencies were synchronized for the reader-added Sobolev supplier on the Euclidean counterexample and the three added topology suppliers on the spin obstruction lemma. No item/page addition, removal or withdrawal; no page decision is owed.

## Routed findings and published disposition

`refuter:37:1` is confirmed_nonfatal, closed by `nmm81-b37-3a-dirac-duplicate`: the redundant Statement sentence is removed. The scope's observed fingerprint is `8504a639ac203ab8458c0aeb5af0334029c884daf3444a70e8710fd2e73a3d3c`; initial current raw bytes matched native post `481fe2e26b71505ee4006a460bf1bf07946ffd41b8327e87de2f69d1a1ea9eaf` and independently contained that duplication. No equality between these different raw fingerprints is claimed.

`reader:37:1` is confirmed_nonfatal, closed bounded adjudication `nmm81-b37-3a-published-comparison-tags` with disposition `nonfatal-recorded`. The published simplicial/singular comparison still has `[step 3.1, step 2.2]. [step 3.1, step 2.2]` at Proof 4.1. Current raw SHA256 is `ad8bb7d6312a1516d2fc46fc460e40bc3a51ede76c081e94b802507c7ebdd6e4`; guard hash `2bfc8d62a7d9f1fdf29c793305d2ea9cee05415b849b126ddc12133b87366c14` matches routed pre_sha256. The separate observation fingerprint `6b28fbb29712ee4fdf05b32b237a42bd52268410af55ff8ccdbbbed3df7b53a9` is retained without raw-byte equality or invented original-source recovery. Complete current proof review checks finite relative simplex generators, finite attachment induction, choice-free compact finite support and coning naturality. The owned nerve consumer F5/5.1 validly applies the natural comparison and free-chain UCT. Published bytes were not edited. After acquiring `research/.published-consumer-ledger.lock`, the published ledger was reread/merged, its existing index entry moved from A-R to A-P without duplication, counts updated, and only this lock released. Owner editorial maintenance remains pending: replace the doubled tags by punctuation followed by one final tag group. This is not an open substantial mathematical prerequisite and grants no whole-item audit.

## Sources and historical evidence

The current local proof and exact cited supplier statements, rather than prior reader/refuter conclusions, control these verdicts. Source browsing independently read [Wernli, Lecture Notes on Spin Geometry](https://arxiv.org/pdf/1911.09766), §§2.3.1–2.3.2, printed pp.60–68, and §4.4.3, pp.101–105. The former uses the sign-cocycle definition of w2, so the carrier's equality with the repository projective-bundle class was checked through its universal-cell calculation. The latter leaves a heat rescaling convergence subtlety to the literature; the authored finite-transport and graph-norm remainder route was checked independently. No claim of reading Nicolaescu or Melrose's full argument is made here. The local Riccati, Clifford contraction, Fourier and sign calculations are explicitly discussed above.

Every initial current item matched its native post raw hash. Exact pre carriers for ordinary assumption/domain changes are in `research/non-ml-math-remaining-81-2026-10-18-owner-step2-dirac-zero-orientation-resolution/before/items/`; the obstruction pre is also in `...-owner-step2-root-formatting-round1-reviewed/proposals/items/`. The A-hat pre is recovered exactly by removing its new introductory AC paragraph and restoring the stray erification mapping; Getzler/Mehler/twist-corollary pre carriers are recovered exactly from `...-owner-step2-root-metadata/before/items/` by setting statement provenance to ai-altered. Each recovered pre was SHA256-compared to the task pre snapshot, not guessed from the reader report. There is no unresolved preimage escalation for a touched carrier. The twist corollary's already-stated AC repeated in Given is audit enrichment, not a fabricated mathematical defect.

## Local validation and handoff

- Final strict proof contract: 23/23 items, 0 errors, 0 warnings. Initial stale reader citation excerpts and torus A1 use mappings were corrected; no defect row was created for those mechanical failures.
- Final risk report with `--require-reviewed`: all 21 HIGH/CRITICAL items have complete specific reviews; 23 items routed, no errors. Two ordinary routed definitions also have review notes.
- Final batched precheck of all seven Alpha-edited item paths: six proof-bearing items PASS, one definition not applicable, 0 failures.
- After all final item edits, one final batched `node tools/proof-layout.mjs` on those same seven paths: 7 items, 24 steps, 0 defects.
- Final renderer check on the same seven files: YAML and real KaTeX parse pass. No formatter was needed.
- Manifest dependency-array check: 23 items, no errors. The two reader-source/manifest dependency mismatches are synchronized.
- Exact obligation coverage: 16 touched plus one reader plus one refuter = 18 decisions, with no duplicates or extra obligations. Each finding decision references exactly one closed defect row. All completed repairs have repair_confidence 1. No judge stamps were present on the changed carriers.
- Run-wide defect-ledger schema validation reports seven errors in other owners' rows (batch 35 even-subalgebra missing date; batch 36 sphere projection missing date/class/location; three batch 52 caught_by_role labels). Those rows are read-only here. Batch-37 rows are separately checked below.
- A mistaken `rendercheck --help` invocation began an unselected check because this tool has no help mode; it was interrupted with exit 130 and supplies no validation credit. All reported rendering results above use the explicit seven-file selection. A precheck help probe likewise supplied no evidence; its explicit-file run is the recorded check.

Read-only recomputed autopilot status is running, stage 3a, with batch 37 awaiting adjudication collection. No engine state or stage transition was altered. No substantial mathematical blocker remains in owned scope. The published nonfatal tag maintenance and unrelated ledger schema errors remain owner obligations. Next action: engine stamps current hashes and performs its own routed gates/collection; this report supplies no self-certification.

Alpha-edited current raw SHA256 values:

- `def-ahat-and-relative-chern-character-forms`: `e872c3509622e8b9afc5e95080aef48ac718e733aaa02b7d779e1ac7b6dc059d`.
- `lem-geometric-dirac-operator-is-well-defined`: `f2eda66d993fb03d3c61c5db507d6ea52963a4da1b8f1ead0a08f61357c6f907`.
- `lem-lichnerowicz-formula-for-geometric-dirac-operators`: `154227858fcdc9ee6497ba4d5ef14242d9a2a2015f04e95b8e58d113558819d3`.
- `lem-spinor-and-clifford-associated-bundles-are-well-defined`: `dbad7cd8c7c13f061b8458c366b78f12cfb9c0b76634115deb61b35746539f97`.
- `lem-getzler-radial-gauge-oscillator-leading-term`: `520591ea7da6663b555f19478a45c5ac0e30dcfad3bd170ee3b5ded11c5b403d`.
- `ex-flat-even-torus-spin-dirac-has-index-zero`: `5e78ab54ff0ca74e34f692be0b8d3c3154a7e670e7e5be8686799950905bf041`.
- `ex-twisted-sphere-dirac-index-and-curvature-term`: `fcfc21e1d529c4350256a9f561de1083e6044e7a8673518bf35d485d25f21b42`.

Final verdict counts: accepted_repair 7, amended_repair 6, confirmed_nonfatal 2, reviewed_no_defect 3.

Batch-37-only defect-ledger schema validation: 18 closed rows, 0 errors (`node tools/defect-ledger.mjs validate --run non-ml-math-remaining-81-2026-10-18 --ledger /tmp/nmm37-own-ledger.jsonl`). This is a local row-schema check, not the engine gate battery.
