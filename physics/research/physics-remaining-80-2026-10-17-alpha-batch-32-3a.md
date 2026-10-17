# Batch 32 Step 3a adjudication

Run: `physics-remaining-80-2026-10-17`; group: `batch-32`.

Scope has two touched items, one page obligation, and no reader/refuter findings. No agents, judging or stamping are used.

## Completed review in dependency order

### def-csm-dk-reflection-collision-gain

Reviewed the complete Definition and six exact supplier interfaces. AC_omega is explicit for completion/Borel representatives, sigma is a normalized pushforward Borel measure on S^2, X is weighted L1 modulo a.e. equality, and the continuous pair map makes Borel integrands jointly measurable. The dedicated justified_by lemma supplies a.e. existence, representative independence and the weighted bound; no reverse deps cycle is introduced. Zero inputs and arbitrary signed classes are admissible. No physical premise or unrestricted choice is used.

### lem-csm-dk-reflection-measure-and-gain-identities

Reviewed all six steps and F1-F4 at exact supplier Statements. The orthogonal involution preserves pair energy and momentum, including r=0 and identical reflected pairs; sigma has full support. Fixed-normal change of variables and completed-product Tonelli apply under explicit AC_omega. Reader steps 2.1 and 4.1 select Borel representatives before angular integration, preserve null exceptional sets, and use signed changes only on integrable sections. Weighted bilinear bound covers signed/zero inputs; particle exchange gives the three moments and incoming/outgoing exchange gives the factor 1/4 with the displayed sign. Four absolute-integrability conditions cover the unbounded test class. Accepted reader proof repair; no Statement change.

### lem-csm-dk-gaussian-mixture-regularity

Checked six proof steps and exact spectral, Gaussian, change-of-variables, Tonelli and DCT supplier statements. Positive eigenvalue bounds a<=Sigma<=b imply normalization and both envelopes; Schur-complement integration yields the marginal covariance P O diag(Sigma,Tau) O^T P^T in the same interval. Finite Borel partitions approximate the continuous angular average in weighted L1. Bilinear continuity extends to closure. Uniform derivative bounds and the explicitly described rational-grid diagonal argument (AC_omega only) give smooth representatives; uniqueness of continuous representatives identifies the X limit. Applying the same derivative compactness to a sequence of those representatives gives the stated subsequence claim. Endpoint covariances aI,bI and zero mixture weights are allowed; a=0 and a=b are excluded as stated.

### post-csm-dk-selected-cutoff-kinetic-model

Reviewed complete Postulate and mathematical formulation suppliers: velocity v in R3, normalized densities, norm-C1 trajectories and representative-specific pointwise equation are explicit. SI units make lambda a prescribed inverse-time rate and v0^3 f dimensionless. Fixed finite angular law and independent incoming-pair closure are adopted model assumptions, not a microscopic derivation or measurement. Physical scope excludes inhomogeneous dynamics, generic gases and limits; no empirical premises, sampling or precision claims. Tong sections 2.2 and 2.3 and Fitzpatrick H-theorem are context; the exact speed-independent law is explicitly selected locally.

### thm-csm-dk-exact-kinetic-moments

Checked all three steps using the macroscopic Definition and exact DCT/Fubini statements. N>6 in dimension three gives third-moment integrability; the uniform first derivatives dominate difference quotients on compact time slabs. Velocity integration by parts has boundary O(R^(4-N)) at worst and a independent of v. Zero source moments give raw balances. Centered expansion yields Pi u+q with correct sign, and symmetry of Pi yields the displayed internal energy equation after subtracting bulk energy. n>0 licenses u; zero source/acceleration and spatially constant densities are admissible. No constitutive closure or empirical deduction is asserted.

### thm-csm-dk-global-cutoff-collision-evolution

Reviewed all eight steps and exact Banach, Tonelli, DCT and local supplier statements. Summable increments prove weighted-L1 completeness; moment functionals are continuous and positivity is closed, so K and the uniform path space are complete/nonempty. Gain preserves all K constraints; M0=1+E2/v0^2 bounds paths, and T=1/(8 lambda M0) gives contraction constant 1/2. Exact exponential weights preserve the convex mixture class. Restart with the same M0 gives unique global evolution and the positive lower bound. Uniform derivative compactness identifies continuous representatives from X-continuity; centered pair-energy preservation supplies the w-Gaussian dominator and the pointwise mild integral. The fundamental theorem yields pointwise C1 time regularity including right derivative at zero. E2=0 cannot occur for an absolutely continuous mass-one input; no excluded singular measure is introduced.

### cex-csm-dk-moments-do-not-close-stress

Reviewed both steps against the macroscopic and exact-moment suppliers. Reader correctly distinguishes scalar n,e from vector u and chooses 0<a_*<b_* using positive alpha,beta,gamma and alpha!=beta. However current step 1.1 omitted the definitions of Sigma_1 and Sigma_2. Amended the repair by explicitly defining diag(alpha,beta,gamma) and diag(beta,alpha,gamma) before use. Both lie in K_{a_*,b_*}; F_j=n0 gamma_{Sigma_j,0} is smooth, rapidly decaying, spatial/time constant and solves the exact-moment equation with a=Q=0. Gaussian normalization, odd mean and integration-by-parts variance give identical n,u,e and unequal Pi. Positive n0,m and unequal alpha,beta are essential; gamma may equal either. No choice beyond inherited supplier assumptions and no physics premise is introduced. Manifest title/Statement synchronized; public claim is unchanged from reader post.

### thm-csm-dk-regular-collision-h-and-equality

Read all eight steps and exact cited supplier interfaces. Uniform Gaussian lower/upper bounds give a quadratic log bound and polynomial-Gaussian dominators for H, H derivative and all four weak-test integrals. Reference factors cancel, giving Hprime=-lambda/4 integral (B-A)log(B/A) with correct nonnegative production. Full support and continuity upgrade a.e. zero to everywhere detailed balance. One-reflection coverage yields radial second differences; Taylor expansion forces scalar Hessian, zero mixed derivatives then force constant scalar Hessian. Integrability excludes alpha>=0, and normalization fixes the isotropic Gaussian. The converse gives detailed balance and stationary gain via the bounded sign test; uniqueness gives stationarity. Centered marginal fourth moments differ from a Gaussian by 3(a-b)^2/4>0, proving strict initial production. Endpoint t=0 uses the right derivative. No long-time convergence or physical second law is inferred.

### pthm-csm-dk-qualified-kinetic-entropy

Read both steps and the complete postulate and H-theorem interfaces. The initial mixture and finite normalized reflection measure are exactly those of the mathematical theorem. kB>0 transfers Hprime<=0 to SBprime>=0 with factor kB lambda/4, including strict initial production and both equality directions. v0^3 f is dimensionless; entropy units are J/K and rate units are inverse seconds. Explicit physical_scope, empty empirical_premises and final qualification retain the adopted one-particle homogeneous model and distinguish it from N-particle fine-grained entropy and reported measurements. No uncertainty or empirical certainty is fabricated.

## Routed decisions

- `touched:32:lem-csm-dk-reflection-measure-and-gain-identities`: **amended_repair**. The reader proof repair is sound: steps 2.1 and 4.1 reduce to finite Borel representatives before angular Fubini, preserve null exceptional sets using fixed-normal orthogonal changes of variables, and establish all signed integrability conditions. Current item raw hash equals the post-reader hash fdd3052077414f7972582e8700f7d9fa475ee1937d681122646d0774d680049f. Alpha amended its contract because the completion-corollary F2 citation omitted its actual uses at 2.1 and 4.1. Strict contract validation now passes for all ten items. The Statement is unchanged; no consumer interface changed. Closed ledger row: `physics-remaining-80-2026-10-17-batch-32-completion-test-mapping`; repair confidence 1.

- `touched:32:cex-csm-dk-moments-do-not-close-stress`: **amended_repair**. Reader post hash 6912079b431b5f36da1db18a67825c68d507febf9573611afede266c7d22c7c8 has the corrected field types and covariance bounds, but step 1.1 uses Sigma_1 and Sigma_2 without defining them. Alpha explicitly defines diag(alpha,beta,gamma) and diag(beta,alpha,gamma) before those uses; the missing definitions were immediately recoverable from step 2.1, so this is a nonfatal exposition defect. Gaussian normalization, mean and covariance calculations prove equal n,u,e and unequal Pi for alpha!=beta. The contract witness, manifest title and Statement now match. Current item hash 9a95f50e682363af7438815dbb9593c2b3a6ae526d8b3d9076d6f050ba6a9fcd differs from pre and reader post. Closed ledger row: `physics-remaining-80-2026-10-17-batch-32-undefined-covariances`; repair confidence 1.

- `page:32:csm-collision-transport`: **accepted_repair**. Accepted the reader summary correction. The related td-math-mixture-dynamics-and-shells page is published; thm-tdmath-regular-collision-entropy explicitly assumes a weak collision identity. The local reflection lemma independently proves its own identity using pre/post involution and simultaneous exchange of the particle labels. The summary keeps the published theorem as related context, not a proof prerequisite or an assertion that every hypothesis of the separately formulated model holds here. The page preserves the restricted adopted physical model, exact mathematical conclusions and absence of empirical results. Current raw page hash matches reader post 4a3914363f3dab4b6082e0d5114a28c1c23b4796be48813ae7b0aab4362a4156. Closed ledger row: `physics-remaining-80-2026-10-17-batch-32-page-context`; repair confidence 1.

## Page and consumer review

The A-page summary is accepted at its current reader-post bytes. Its particle exchange is the simultaneous exchange used in reflection step 3.1; independent incoming-only or outgoing-only exchange invariance from the separately defined published kernel is not imported. All conclusions use the locally proved weak identity. The examples page retains the same two Gaussian probability laws scaled by n0 and accurately distinguishes this mathematical witness from observation. An exact-ID search of items/ and library/ finds no item consumer of the counterexample and only its own B-page placement. Its reader interface clarification is sound; Alpha changes only its proof. The reflection Statement is unchanged. No public physical interface changed and no additional consumer repair or outside escalation is required.

The owned cross-batch input remains `[]`; stable IDs and page inventory are preserved. Imported suppliers and published content are read-only. Exact published supplier Statements/Definitions and their hypotheses were inspected; their complete transitive proof closures were not re-audited. No defective published item was identified in the reviewed uses, so no published-ledger mutation was made.

## Sources and evidence limits

Reader and refuter reports were reviewed independently; both finding arrays are empty. Pre/post snapshots were compared to current raw item/page SHA256 values. Historical repair descriptions are attributed to the reader report; no absent pre-reader source bytes were reconstructed or claimed read. Current proof validity was checked directly.

[Tong, Kinetic Theory, Part 2](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf): checked §2.2.1, equations (2.17)–(2.22), printed pp. 21–22; final molecular-chaos passage on printed p. 32; and §2.3, printed pp. 33–35, equations (2.38)–(2.42) and the subsequent qualifications. These provide context for adopted closure and entropy symmetrization; the exact cutoff operator and all analytic hypotheses are local. [Fitzpatrick, Boltzmann H-Theorem](https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html): checked equations (3.123)–(3.141), homogeneous model, four-term averaging, sign, detailed balance and Maxwellian formula. No convergence-to-equilibrium claim is imported from the source discussion. No measured inputs or statistical inference appear in this batch.

## Local checks

- Initial risk report: nine HIGH/CRITICAL carriers identified, with the macroscopic definition ORDINARY. Each required risk review is now complete and specific in the owning contract. Final `risk-report.mjs ... --require-reviewed`: 0 errors, 10 items.
- Strict proof contract: initial run identified the two omitted F2 use mappings; after correction, `proof-contract.mjs research/physics-remaining-80-2026-10-17-batch-32.proof-contracts.json --strict`: 0 errors, 0 warnings, 10/10 items checked.
- `node tools/tsx-run.mjs tools/physics-support/reflow.mts items/cex-csm-dk-moments-do-not-close-stress.md`: unchanged.
- Precheck through `tools/tsx-run.mjs`: 1 checked, 0 failing. Direct `node ...precheck.mts` initially failed because Node lacks an .mts loader; the documented wrapper succeeded. This was a tooling invocation failure, not a content defect.
- Explicit changed-item rendercheck: 1 file, no defects.
- Final required `node tools/physics-support/proof-layout.mjs items/cex-csm-dk-moments-do-not-close-stress.md`: 1 item, 2 steps, 0 defects, run after the last item edit and formatter.

No unresolved mathematical blocker, withdrawal, or owner escalation remains. These are local checks only; the engine owns decision stamping and the full gate battery.
