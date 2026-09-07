# Frontier 33 — Step 6b group b adjudication

- **Run:** frontier-33
- **Role / group:** Alpha / b
- **Owned batches:** 2 and 12
- **Disposition:** all 66 routed post-reader contract carriers are closed; no reader or refuter finding was routed; no mathematical item defect or blocker was confirmed.

## Evidence and carrier comparison

I read both batch scope files first, then the complete reader reports and findings JSON, refuter reports, all 66 current proof-bearing items, their cited dependency interfaces, both current batch contracts, the pre-6b gate audit, and the frozen post-reader and pre-6b hashes. The independent reports were treated as evidence, not as verdicts.

For every one of the 66 generated post-reader obligations, the post-reader and pre-6b snapshots differ only in contract_sha256; item_sha256 and manifest_sha256 agree, and no owned page carrier changed. The change is the full-gate replacement of repeated template boundary rationales by item-specific evidence (including three explicitly upheld empty-case records in batch 2). Independent comparison against the current written claims and proofs confirms those repairs.

The required high/critical mathematical reviews add a later contract-only amendment to 39 carriers. Consequently, the 27 carriers still equal to pre-6b are accepted_repair, while those 39 carriers differ from both frozen states and are amended_repair. There is no reverted carrier.

| Batch | Obligations | Accepted | Amended | Reverted | High/critical reviews |
|---:|---:|---:|---:|---:|---:|
| 2 | 33 | 9 | 24 | 0 | 24 |
| 12 | 33 | 18 | 15 | 0 | 15 |

## Mathematical adjudication

Batch 2 was checked over quotient/annihilator duality, transposes and closed range, real/complex bilinear dual conventions, weak-star versus norm closure, sequence-space witnesses, and all applicable zero/extreme-space cases. Batch 12 was checked over the weak/strong maximum principles, mean-value equivalences and constants, Hopf barrier signs and boundary geometry, Harnack chains and convergence, Poisson-kernel normalization and limits, Liouville/removability arguments, and the explicit counterexamples. All hypotheses, quantifiers, typing, cited statements, choice uses, endpoints, and iff directions are supported by the current text.

The reader and refuter evidence is clean in both batches and the independent adjudication found no contrary defect. Therefore there are no confirmed_fatal, confirmed_nonfatal, or false_positive finding decisions: the owned scopes contain no reader/refuter finding obligations.

## Required risk reviews

### Batch 2

| Item | Tier | Review resolution |
|---|---|---|
| **thm-dual-of-a-quotient-is-the-annihilator** | HIGH | HIGH risk comes from quotient well-definedness and the zero/extreme subspaces. Steps 1.1–2.1 use the exact quotient universal property, prove representative independence, injectivity, surjectivity, and norm equality, and explicitly cover M=0 and M=X; the reader and refuter found no contrary evidence. |
| **thm-dual-of-a-closed-subspace-is-a-dual-quotient** | CRITICAL | CRITICAL risk comes from the quotient construction, Hahn–Banach extension, norm minimization, and the M=0 norm exception. Steps 1.1–3.1 cite the exact annihilator, quotient, and norm-preserving extension statements and separately prove well-definedness, bijectivity, isometry, and both extreme cases; reader/refuter evidence is clean. |
| **lem-transpose-is-bounded-and-has-the-same-norm** | HIGH | HIGH risk is the reverse operator-norm inequality, especially for Tx=0 and zero spaces. Step 2.1 invokes the exact real/complex norming-functional theorem only when Tx is nonzero and treats zero directly before taking the unit-ball supremum; the current citation quote is exact and both independent reports found no defect. |
| **lem-elementary-kernel-range-annihilator-identities** | HIGH | HIGH risk is the pair of annihilator equalities and the norm-closure identity, including T=0. Steps 1.1–2.1 prove both directions pointwise, use a norming functional only for nonzero Tx, and apply the exact published annihilator-closure theorem in Y; zero operators and nonclosed ranges are explicitly handled, consistently with reader/refuter review. |
| **cor-dense-range-iff-transpose-is-injective** | HIGH | HIGH risk is the biconditional and the zero-codomain case. Steps 1.1 and 2.1 prove the two directions from the exact elementary kernel/range identity, with continuity for the forward direction and preannihilator of {0} for the reverse; Y=0 and the zero functional are covered and the cited statement matches disk. |
| **cor-distance-to-subspace-by-annihilating-functionals** | HIGH | HIGH risk is the supremum over a dual unit ball and quotient degeneracies. Steps 1.1–2.1 combine the exact bidual norm formula with the quotient-dual isometry, note that the unit ball always contains zero, and check x in M, M=X, and M=0; no empty-supremum convention or uncited separation is used. |
| **lem-transpose-range-membership-by-domination** | HIGH | HIGH risk is the iff, representative independence on a possibly nonclosed range, and the existential extension. Steps 1.1–2.1 prove both directions, show the domination kills ker T before defining h(Tx), and use the exact norm-preserving extension theorem; C=0 and T=0 are explicit and reader/refuter evidence is clean. |
| **lem-closed-range-iff-quotient-estimate** | CRITICAL | CRITICAL risk is the two-direction closed-range criterion, quotient completeness under choice, and the zero operator. Steps 1.1–3.1 first close ker T, invoke countable choice through the cited quotient theorem and DC through bounded inverse/bounded-below results, and prove both directions on X/ker T; T=0 and positive-C conventions are correct. |
| **lem-transpose-lower-bound-gives-image-ball-density** | HIGH | HIGH risk is complex separation, open-ball suprema, and the endpoint radius 1/C. Steps 1.1–3.1 use real parts plus phase rotation, justify open-versus-closed unit-ball suprema by scaling, and separate only from a nonempty closed convex balanced set; the proof actually excludes outside points of norm at most 1/C and covers T=0. |
| **thm-surjective-iff-transpose-is-bounded-below** | CRITICAL | CRITICAL risk is the biconditional, DC-dependent passage from dense image of a ball to an actual image ball, and zero targets. Step 1.1 uses the exact quantitative open mapping theorem; steps 1.2–2.1 use the separately cited successive-approximation lemma and an explicit scale, without assuming a primal solution. The endpoint and Y=0 cases are sound. |
| **thm-banach-closed-range-theorem** | CRITICAL | CRITICAL risk is the full three-way equivalence, dual completeness, restriction quotient, and possible circularity. Steps 1.1–3.1 use only preceding exact lemmas: quotient estimate and domination forward, then apply the estimate to T*, restrict to Y0=closure(ran T), and invoke the separately proved surjectivity criterion. Step 4.1 covers T=0; no reflexivity or norm/weak-star substitution occurs. |
| **thm-bounded-below-iff-transpose-is-surjective** | CRITICAL | CRITICAL risk is the biconditional and the inference from onto T* to injective closed-range T. Step 1.1 proves the forward implication by the exact domination lemma; step 1.2 uses closed-range duality and the elementary preannihilator identity before the published bounded-below criterion. X=0 is explicit and all DC hypotheses are retained. |
| **cor-transpose-preserves-invertibility** | CRITICAL | CRITICAL risk is two iff claims, bounded inverse use, and the distinction between a surjective isometry and an embedding. Steps 1.1–2.1 combine the exact surjectivity/bounded-below transpose criteria and transpose both inverse identities; step 3.1 transfers both operator and inverse norm bounds and explicitly covers zero spaces. The title and statement do not overclaim arbitrary embeddings. |
| **lem-finite-truncations-are-dense-in-c0-and-ell-one** | HIGH | HIGH risk is convergence of two different tails, the p=1 endpoint, and the fixed natural-number index set. Steps 1.1–3.1 define the complex l1 model directly, identify the sup and absolute-sum errors, and treat N=0 and zero/finite-support sequences. The upheld empty-case record correctly notes that N is a fixed nonempty index set. |
| **thm-dual-of-c0-is-ell-one** | HIGH | HIGH risk is complex phase choice, infinite-series convergence, and surjectivity. Steps 1.1–4.1 use finite formula-defined phases, absolute convergence, and finite-truncation density; they prove both norm inequalities and uniqueness and cover the zero coefficient sequence. The exact dependency quotations preserve the bilinear complex convention. |
| **thm-complex-dual-of-ell-one-is-ell-infinity** | HIGH | HIGH risk is the p=1 endpoint, lack of a maximizing coordinate, and complex linearity. Steps 1.1–3.1 prove absolute convergence, take a supremum over coordinate tests without assuming attainment, and recover every functional by dense truncations; zero and index-zero cases are included and no conjugation is introduced. |
| **thm-bipolar-closure-for-linear-subspaces** | CRITICAL | CRITICAL risk is weak-star rather than norm closure, both directions of the closure identity, and finite-coordinate separation. Steps 1.1–2.1 use exact initial-topology neighborhoods and the cited finite-evaluation lemma, noting n cannot be zero because 0 lies in N; steps 3.1–4.1 derive the iff/density consequences and all zero/extreme cases without sequential-closure substitution. |
| **thm-kernel-range-annihilator-identities** | HIGH | HIGH risk is the weak-star closure identity and the zero-map case. Step 1.1 imports the exact elementary preannihilator equalities, and step 2.1 applies the local bipolar theorem to ran T* in sigma(X*,X), explicitly retaining weak-star topology. For T=0 the displayed equality reduces correctly to closure of {0}=0. |
| **ex-adjoint-of-the-right-and-left-shifts** | CRITICAL | CRITICAL risk is indexing at zero, domain/codomain preservation, and the real/complex sequence-dual conventions. Steps 1.1–3.1 verify both shifts on c0, l1, and l-infinity and reindex absolutely convergent bilinear pairings; the inserted zeroth coordinate is tracked and the exact real p=1 and complex endpoint dependencies are used. |
| **ex-evaluation-functionals-and-point-masses** | HIGH | HIGH risk is nonempty K, regularity of the Dirac measure, and the pullback direction. Steps 1.1–2.1 use the constant-one function to obtain norm one, verify inner/outer regularity and the integral formula, then invoke the exact Riesz representation statement; step 3.1 computes P* delta_t=delta_phi(t) with correct typing. |
| **ex-annihilator-of-a-coordinate-subspace** | HIGH | HIGH risk is arbitrary coordinate subsets, both annihilator directions, and I empty or all of N. The proof tests coordinate vectors, uses the exact c0/l1 bilinear duality, and checks both extreme subsets explicitly; all products vanish in the converse and no hidden closure or choice assumption is needed. Reader/refuter evidence reports the same clean result. |
| **cex-canonical-bidual-map-need-not-be-surjective** | HIGH | HIGH risk is the two dual identifications, real/complex conventions, and uniqueness of the missing coefficient sequence. Steps 1.1–2.1 transport the exact c0 and l1 dualities through the canonical evaluation map and test every e_n; the constant-one sequence is bounded but no c0 preimage exists. Zero is handled and no conjugation is inserted. |
| **cex-transpose-range-need-not-be-norm-dense** | CRITICAL | CRITICAL risk is distinguishing norm from weak-star closure and computing the transpose between three sequence spaces. Steps 1.1–2.1 prove the inclusion l1→c0 is bounded, injective, and dense, identify T* as l1→l-infinity, and show its sup-norm closure is exactly closed c0; step 3.1 gives the constant-one witness at distance one. |
| **cex-injective-transpose-does-not-imply-surjectivity** | HIGH | HIGH risk is the p=2 diagonal computation, density/nonclosedness, and the explicit nonimage witness. Steps 1.1–2.1 prove boundedness, injectivity, dense range, and self-transpose under the exact real counting-measure pairing; step 3.1 telescopes the squared witness and shows its forced preimage is constant one, including index zero. |

### Batch 12

| Item | Tier | Review resolution |
|---|---|---|
| **thm-weak-maximum-principle-for-the-laplacian** | HIGH | HIGH risk is compactness and attainment on a possibly disconnected bounded open set, plus the epsilon endpoint. Steps 1.1–3.1 use the exact strict perturbation, Heine–Borel, and extreme-value statements, establish a nonempty compact boundary, and let epsilon decrease only after the uniform R bound. No boundary smoothness or connectedness is used. |
| **lem-classical-subharmonic-mean-value-inequalities** | HIGH | HIGH risk is the iff, spherical/ball constants, signed integration, and the radius-zero limit. Steps 1.1–3.1 use the exact radial derivative and countable-choice polar formula, derive coefficients 1/(2n) and 1/(2(n+2)), split positive/negative parts, and prove both converse directions from sufficiently small positive radii. |
| **thm-strong-maximum-principle-for-classical-subharmonic-functions** | HIGH | HIGH risk is propagation from a single global maximum and use of connectedness. Steps 1.1–3.1 make the maximum set nonempty closed, use the exact ball mean inequality plus continuity to make it open, and then apply the cited connectedness definition. The radius choice is justified by openness and constant/zero functions remain valid. |
| **lem-interior-sphere-barrier-for-the-laplacian** | HIGH | HIGH risk is the exponential Laplacian sign, annular endpoints, and outward derivative convention. Steps 1.1–3.1 show c>0, compute Delta v=2c alpha(2 alpha \|z\|^2-n)e^{-alpha\|z\|^2} with the stated alpha threshold, verify both sphere values, and obtain the strictly negative one-sided outward derivative. |
| **thm-hopf-boundary-point-lemma-for-the-laplacian** | CRITICAL | CRITICAL risk is boundary geometry, strictness, sign orientation, and the auxiliary strong-principle route. Steps 1.1–3.1 choose a positive inner-sphere gap, apply the exact subharmonic barrier and weak maximum principle, and convert its negative outward derivative into positive derivative of u. Steps 1.2, 2.2, and 4.1 correctly construct a tangent ball inside the complement and cover the connectedness edge case. |
| **thm-harnack-inequality-on-a-ball** | HIGH | HIGH risk is use of only interior balls, the explicit finite-chain constant, zero functions, and the R endpoint. Steps 1.1–2.1 derive the pointwise factor on radii s<R and pass to R without a boundary trace; step 3.1 uses balls of radius (R-r)/2 along an m-step segment and compares in both directions without dividing by u(a). |
| **cor-harnack-inequality-on-compact-subsets** | HIGH | HIGH risk is disconnected K, the zero-function case, and chaining constants. Steps 1.1–3.1 first separate the identically-zero case, use the exact finite connected overlap cover independent of u, compare points within each ball by 3^n, and multiply along a simple graph path of at most N vertices. Nonempty compact K is retained. |
| **thm-harnack-convergence-principle** | HIGH | HIGH risk is the exhaustive alternative and local-uniform Cauchy argument. Step 1.1 distinguishes pointwise divergence everywhere from one bounded base point; step 2.1 applies compact Harnack to nonnegative harmonic differences on K union {a}; step 3.1 uses real completeness and the exact locally-uniform harmonic-limit theorem, including empty compact sets. |
| **lem-smooth-sphere-data-have-a-harmonic-replacement** | CRITICAL | CRITICAL risk is kernel normalization, differentiation under the integral, harmonicity, boundary convergence, and uniqueness. Steps 1.1–5.1 supply compact interior majorants, compute the Laplacian exactly, normalize via spherical means, prove boundary convergence by near/far splitting, and invoke exact Dirichlet uniqueness. R>0 and positive finite sphere measure are explicit. |
| **lem-derivative-estimate-proof-of-one-sided-harmonic-liouville** | CRITICAL | CRITICAL risk is smoothness bootstrapping, differentiating the Poisson kernel, the s↑R endpoint, and absence of a finite supremum for u≥0. Steps 1.1–3.1 cite the exact mean-value smoothness and derivative facts and bound the center gradient by the sphere average; step 4.1 lets arbitrary finite R tend to infinity pointwise. |
| **cor-entire-harmonic-functions-with-bounded-gradient-are-affine** | HIGH | HIGH risk is that the derivatives must themselves be entire harmonic and that a constant gradient yields a global affine formula. Step 1.1 obtains smoothness from the exact mean-value theorem, applies derivative harmonicity and one-sided Liouville to each bounded derivative, and step 2.1 integrates along the full segment from 0 to x, including x=0. |
| **cor-removable-singularity-for-bounded-harmonic-functions** | CRITICAL | CRITICAL risk is the n=2 versus n≥3 barriers, signed comparison, little-o uniformity, and gluing at the puncture. Steps 1.1–4.1 construct the exact harmonic replacement, compare ±w on nonempty annuli, take the correct logarithmic/power limits, and define the unique missing value. The hypotheses exclude the dimension-one two-component failure. |
| **ex-harmonic-function-attaining-only-boundary-extrema** | HIGH | HIGH risk is uniqueness of the two extrema and the outward derivative sign. Step 1.1 computes zero Laplacian and uses \|x1\|≤\|x\| to locate equality only at ±e1; step 2.1 uses the ball itself as the interior tangent ball and evaluates the one-sided quotient as exactly one. All n≥2 and boundary conventions agree. |
| **ex-harnack-constant-from-the-poisson-kernel-ratio** | HIGH | HIGH risk is deriving two-sided constants without boundary data at radius R. Steps 1.1–2.1 work on each inner sphere s<R, use the normalized positive Poisson kernel and distance bounds s±\|x\|, and step 3.1 passes s upward to R. The u(0)=0 and x=0 cases are separately and correctly resolved. |
| **cex-hopf-lemma-needs-a-boundary-geometry-hypothesis** | CRITICAL | CRITICAL risk is harmonicity of the explicit cusp function, connectedness, continuity at the origin, derivative direction, and exclusion of every tangent ball. Steps 1.1–4.1 verify Cauchy–Riemann derivatives directly, describe the connected angular sections, bound u by r/\|log r\|, construct points inside any proposed tangent ball with u>0, and compute the zero outward derivative. |

## Exact routed decisions

| Obligation | Verdict | Ledger row | Subject SHA-256 |
|---|---|---|---|
| **post-reader:2:lem-annihilators-are-closed-subspaces** | accepted_repair | frontier-33-A6b-b-001 | c09db6bf85194c1ce2579e995bbc737ea54100500bc464867db09ce874942520 |
| **post-reader:2:thm-dual-of-a-quotient-is-the-annihilator** | amended_repair | frontier-33-A6b-b-002 | 2466a47806a4c04042b59f4c317a2beb57e5b1561b076834ad92a0b51a07c39e |
| **post-reader:2:thm-dual-of-a-closed-subspace-is-a-dual-quotient** | amended_repair | frontier-33-A6b-b-003 | 93a67474112ea69d311757e70ea736c7356af5548e3caba8f5c1a22345275425 |
| **post-reader:2:cor-distance-to-annihilator-is-restriction-norm** | accepted_repair | frontier-33-A6b-b-004 | c7e9da892e5d3731caf93cea21e6149bbeaeaa4e2dc4cf1a06bc0e9882202cf1 |
| **post-reader:2:lem-transpose-is-bounded-and-has-the-same-norm** | amended_repair | frontier-33-A6b-b-005 | d222c7e4fda563c8e3f96c181641ac27d652190ac8961f92c86e69a5a10a55db |
| **post-reader:2:lem-transpose-reverses-composition** | accepted_repair | frontier-33-A6b-b-006 | 4eb01e79145239d2dba65fe541f833b3e31557fff7b5fd6ae7bd82f6f4680839 |
| **post-reader:2:lem-elementary-kernel-range-annihilator-identities** | amended_repair | frontier-33-A6b-b-007 | 7962e1fc05320d2a5f0103a6df70447ccd1651a50e91efc6f83c3889cd12a8ea |
| **post-reader:2:cor-dense-range-iff-transpose-is-injective** | amended_repair | frontier-33-A6b-b-008 | 4a6a178b70b6bc792dac69ed9b5c68bf6776a6c58b8c558c74a0843d04f11c46 |
| **post-reader:2:thm-canonical-bidual-map-is-an-isometry** | accepted_repair | frontier-33-A6b-b-009 | 4a80cd1ae2389e0b1afe7fe562a4e6688c33e911758185d3108aa13d2ea6d6aa |
| **post-reader:2:cor-distance-to-subspace-by-annihilating-functionals** | amended_repair | frontier-33-A6b-b-010 | f968168311bf2971b3d4aee5ffb195a8a01ae496e145259cd28dd35d0f4e582c |
| **post-reader:2:lem-canonical-map-is-natural** | accepted_repair | frontier-33-A6b-b-011 | 40bee03e7bb67b756b9ec768d6cdad46ae17b3c7126a6783311a16ccf74bf2b4 |
| **post-reader:2:lem-transpose-range-membership-by-domination** | amended_repair | frontier-33-A6b-b-012 | ae13051b225bf71a24fa6aa3c109a0c358d5ca88c6272646b4edac9de6b17527 |
| **post-reader:2:lem-closed-range-iff-quotient-estimate** | amended_repair | frontier-33-A6b-b-013 | eef8e5ef49e170fc124bd7ac23256e604a199a0d9970ff8b5b7a94b695de0675 |
| **post-reader:2:lem-transpose-lower-bound-gives-image-ball-density** | amended_repair | frontier-33-A6b-b-014 | f3da5ffd5afb5bfb383b1905c4ac8c6872a05bc4dc1b7b992cf29fcbeaa07b48 |
| **post-reader:2:thm-surjective-iff-transpose-is-bounded-below** | amended_repair | frontier-33-A6b-b-015 | 323f299219aec64eae0e5c8177d930bfe550915997e3a29f7653e50fcfa3224c |
| **post-reader:2:thm-banach-closed-range-theorem** | amended_repair | frontier-33-A6b-b-016 | 8d2e600a2e6de7cc75ae61cfaa513411783568307927633877f1ceff3c0d79d1 |
| **post-reader:2:thm-bounded-below-iff-transpose-is-surjective** | amended_repair | frontier-33-A6b-b-017 | 93fbd1dc435c9fd10f58c92f669b5ee8d2ab831e56d3c35e5bf4da9f88751355 |
| **post-reader:2:cor-transpose-preserves-invertibility** | amended_repair | frontier-33-A6b-b-018 | ec7d5b6f8ad6a3ef8c2563556e4d03aa353c3210c8dd10634a5698fb479921bd |
| **post-reader:2:lem-finite-truncations-are-dense-in-c0-and-ell-one** | amended_repair | frontier-33-A6b-b-019 | 341eee50376756d30c37eef1735d1edc4c37edea9b834af1786d2906833da4dc |
| **post-reader:2:thm-dual-of-c0-is-ell-one** | amended_repair | frontier-33-A6b-b-020 | f62e6802af35f19111c5c340ba4b1baecd151524e095cf153e6d39f4e14b56f5 |
| **post-reader:2:thm-complex-dual-of-ell-one-is-ell-infinity** | amended_repair | frontier-33-A6b-b-021 | 2fb6f4d25c73835c095368e42b3ce834584d0b9876f75c071ccdf8d528a8d9ef |
| **post-reader:2:lem-finite-evaluations-separate-from-a-dual-subspace** | accepted_repair | frontier-33-A6b-b-022 | bbbcfecb9678cb5264cb5ed870408b2e1abd668ba431d16e7bdc5b3906a59d67 |
| **post-reader:2:thm-bipolar-closure-for-linear-subspaces** | amended_repair | frontier-33-A6b-b-023 | cf0c8ca86d453f6d0d3ae8539366b3ce4b7c6ddd7314461de020452fabe1e84e |
| **post-reader:2:thm-kernel-range-annihilator-identities** | amended_repair | frontier-33-A6b-b-024 | 63b6fa293cf2a128099b1600834c8c0b127b1d6e5b7193313bee13241c1b36dc |
| **post-reader:2:ex-coordinate-functionals-on-classical-sequence-spaces** | accepted_repair | frontier-33-A6b-b-025 | b87fb8225c04bc4ec6645229bc924a05c1c6c3eaeaa67a7112d4816987216811 |
| **post-reader:2:ex-adjoint-of-the-right-and-left-shifts** | amended_repair | frontier-33-A6b-b-026 | 0fafbd7fc540c47f3f68867276fdd5362dca5e8c2e6213027ec28dc3acc228a5 |
| **post-reader:2:ex-evaluation-functionals-and-point-masses** | amended_repair | frontier-33-A6b-b-027 | b22ffe3aa12c7f731c76542891dea210db46b51738a2f52bba4b2fb1e8f020aa |
| **post-reader:2:ex-annihilator-of-a-coordinate-subspace** | amended_repair | frontier-33-A6b-b-028 | 3f2ea0fb00b17bc13c00a4923fc67653640904a298d97821829bee4ddeec8fc2 |
| **post-reader:2:ex-dual-of-a-finite-dimensional-space** | accepted_repair | frontier-33-A6b-b-029 | 014884ad0fd9fbd62951325d16c690f4963db3ae3d00835a8588bbaee6811065 |
| **post-reader:2:cex-dual-functor-is-not-covariant** | accepted_repair | frontier-33-A6b-b-030 | 908150c59a580c07889bd3934179fb159cc99399e84b4463dc85fb50b84ad907 |
| **post-reader:2:cex-canonical-bidual-map-need-not-be-surjective** | amended_repair | frontier-33-A6b-b-031 | 10c8914f887f6741a28e7f760a4ca62216a9178131a1078b7880c3d5d538c6dc |
| **post-reader:2:cex-transpose-range-need-not-be-norm-dense** | amended_repair | frontier-33-A6b-b-032 | c424b657d58dcee157e2f30b4418a517010696eca89c67ad39fea87132fe3ee7 |
| **post-reader:2:cex-injective-transpose-does-not-imply-surjectivity** | amended_repair | frontier-33-A6b-b-033 | c633dfb7bdf656e45bd7755ecd2afa92ed77bf8dce41be79c27785ca525e8bb1 |
| **post-reader:12:lem-strict-subharmonic-perturbation** | accepted_repair | frontier-33-A6b-b-034 | d1acc908e62fd6de99b3393347b7aa00463ad7592e6ea4f7e9b03234b1d92b4f |
| **post-reader:12:thm-weak-maximum-principle-for-the-laplacian** | amended_repair | frontier-33-A6b-b-035 | dcdfa30a321fd40fdacf9fedb3c219822a24a8113b5d03ff196b4e118d7f8a24 |
| **post-reader:12:cor-weak-minimum-principle-for-the-laplacian** | accepted_repair | frontier-33-A6b-b-036 | e35c7c8413a08633abb72c98aaa8a95a9ef5a073df0bc4aaf366e7797d0cc4d1 |
| **post-reader:12:thm-comparison-principle-for-classical-subharmonic-functions** | accepted_repair | frontier-33-A6b-b-037 | 02048a3e64088e24fa9406e109d5e3b5f03aa7df57ab36024e345c3011cf4504 |
| **post-reader:12:lem-classical-subharmonic-mean-value-inequalities** | amended_repair | frontier-33-A6b-b-038 | e5e4cfcab35657c1a7c042fb50a1b168e374df45e81e01ad2ea1979e9b6a4fa0 |
| **post-reader:12:thm-strong-maximum-principle-for-classical-subharmonic-functions** | amended_repair | frontier-33-A6b-b-039 | f51b875d823bc47ca2be9aae15b20da1d5885b5d3029df0e0dad551a788012f8 |
| **post-reader:12:thm-strong-maximum-principle-for-harmonic-functions** | accepted_repair | frontier-33-A6b-b-040 | 3841d5a5a3d73e7c322966916ddff76802f5cb1b7675fbcd26536df68c5586aa |
| **post-reader:12:cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes** | accepted_repair | frontier-33-A6b-b-041 | 9ab4f480bf3bbc922fb67e0654be2c16fd239b4dfcd646ba63ba240f2f390701 |
| **post-reader:12:cor-uniqueness-for-the-classical-dirichlet-problem** | accepted_repair | frontier-33-A6b-b-042 | df8d84e376bb89acf483807c6a1373f98be4498d112f7442e4320a563e8e916b |
| **post-reader:12:cor-poisson-supremum-estimate-from-a-quadratic-barrier** | accepted_repair | frontier-33-A6b-b-043 | ae274b12bebf10ffee8107a4a0f0eb7109355286c60186b85752366f7f4ced81 |
| **post-reader:12:lem-interior-sphere-barrier-for-the-laplacian** | amended_repair | frontier-33-A6b-b-044 | 22fc5cfdb18318a5590cabe87a2693596f97856ea0f9c8f0e88695d3883ca461 |
| **post-reader:12:thm-hopf-boundary-point-lemma-for-the-laplacian** | amended_repair | frontier-33-A6b-b-045 | 4f7da80bd503045c8f48a8ce2d5a382769f69807e3a6e25b1480f5b944052a22 |
| **post-reader:12:thm-harnack-inequality-on-a-ball** | amended_repair | frontier-33-A6b-b-046 | 0ba8b34a0f9244eb7035199f0ddd21136da56081a0f6daeedfa95ca975ccbd71 |
| **post-reader:12:lem-finite-harnack-chain-on-a-compact-connected-subset** | accepted_repair | frontier-33-A6b-b-047 | 01b498549b7b13330c41229ab841c6fd2660c935d9f4dae4cc74c12ecc7107af |
| **post-reader:12:cor-harnack-inequality-on-compact-subsets** | amended_repair | frontier-33-A6b-b-048 | 2b521cccbf16696cea9511996027720f9bdac97b8eb87eda4ccdc3bde3ea012e |
| **post-reader:12:thm-harnack-convergence-principle** | amended_repair | frontier-33-A6b-b-049 | bac711fb8d4fe3eb91c01e5ad88f73b261c66e7a5b4a6318a62c78894ea4cf18 |
| **post-reader:12:lem-smooth-sphere-data-have-a-harmonic-replacement** | amended_repair | frontier-33-A6b-b-050 | 6918929c9f65f531c5a62e41b724da87187ba681b7d8aa723a8bb2ad130a47d3 |
| **post-reader:12:lem-derivative-estimate-proof-of-one-sided-harmonic-liouville** | amended_repair | frontier-33-A6b-b-051 | e31007847b5d785718aff2ef6d11de9bcc7e27e8f05692e476a98d3aaeda7067 |
| **post-reader:12:thm-liouville-theorem-for-bounded-harmonic-functions** | accepted_repair | frontier-33-A6b-b-052 | 4ce50311904bb467f66ad104caf198574dd4f9813bc87bbe05b099942dbcb7a0 |
| **post-reader:12:cor-positive-entire-harmonic-functions-are-constant** | accepted_repair | frontier-33-A6b-b-053 | 70efc7115f91f0f9f482fe31ad45663fa57944a90542ef4592322b2de9afd2bb |
| **post-reader:12:cor-entire-harmonic-functions-with-bounded-gradient-are-affine** | amended_repair | frontier-33-A6b-b-054 | e86560606eb995fd67d17ea52e65292153d5fd030c252054d27b23e76f931fe0 |
| **post-reader:12:cor-removable-singularity-for-bounded-harmonic-functions** | amended_repair | frontier-33-A6b-b-055 | d2d9aea4aa4e0fa20980269b7952888fad371f7b2697294c9dc6831144c9d6cf |
| **post-reader:12:thm-maximum-principle-with-limsup-control-at-infinity** | accepted_repair | frontier-33-A6b-b-056 | 53ed461e81b74a66d20dc770eb277ddf212cb420b34d03b33c23675abb8b3558 |
| **post-reader:12:ex-harmonic-function-attaining-only-boundary-extrema** | amended_repair | frontier-33-A6b-b-057 | 6010971c296c4a63a4b51d3401aa3ed9d4dae2d7adbcf22025ee13c282660aa7 |
| **post-reader:12:ex-harnack-constant-from-the-poisson-kernel-ratio** | amended_repair | frontier-33-A6b-b-058 | 66ade6cf4f1ef88b8ede461efd86d10812e2d48e2d20bf9ae9ae5f1e5109ca62 |
| **post-reader:12:cex-maximum-principle-fails-for-superharmonic-maxima** | accepted_repair | frontier-33-A6b-b-059 | 17eb5543b1cdb3669bd947ebab55c63eed3d7b7fc3e4cdb6d33a11f5c06ab225 |
| **post-reader:12:cex-weak-maximum-principle-needs-boundedness-or-control-at-infinity** | accepted_repair | frontier-33-A6b-b-060 | d35d2bdbdefaa478c6e468e6bef9ab9601560dfbeb17d5bafe6166602536d96e |
| **post-reader:12:cex-hopf-lemma-needs-a-boundary-geometry-hypothesis** | amended_repair | frontier-33-A6b-b-061 | c9bd6963689c345b21ccd4667d53d7a27f64836f0a8505bd91b25bbd9886dbe4 |
| **post-reader:12:cex-liouville-needs-one-sided-boundedness** | accepted_repair | frontier-33-A6b-b-062 | c8e9bb087b8270827805d81e947a28e05899c6a37fa04dd77a59f0ee911ce966 |
| **post-reader:12:cex-unbounded-punctured-harmonic-singularity-is-not-removable** | accepted_repair | frontier-33-A6b-b-063 | d96c36e0a8585c180821e769b7dc427d314834f251897fc26a30c1a8d606e639 |
| **post-reader:12:cex-strong-maximum-principle-needs-connectedness** | accepted_repair | frontier-33-A6b-b-064 | aa5ed514434d7eb622e6d999df2058b44f5f724cd88c092df0bb9bb7a503fb3d |
| **post-reader:12:cex-hopf-conclusion-needs-a-strict-nonconstant-extremum** | accepted_repair | frontier-33-A6b-b-065 | 4d2245b648290c947b5981c6479b4bcfccf84c6ba1a9dd44f25ac073c74f5812 |
| **post-reader:12:ex-subharmonic-quartic-and-harmonic-saddle** | accepted_repair | frontier-33-A6b-b-066 | d62b073ad5bf18eee163dd88e37837b3efc401dad14089ce6f81a582b3974a29 |

Each ledger row records the nonfatal verification-record defect in the post-reader contract (not the later missing-review state), its exact item and batch carrier, the two frozen snapshots, current item/contract evidence, and the gate-audit cause. Rows were appended through tools/defect-ledger.mjs; the generated ledger view was refreshed by the same transaction.

## Focused validation

- risk-report --require-reviewed: passed, with 24/24 required reviews complete in batch 2 and 15/15 in batch 12.
- proof-contract --strict: passed for 33/33 contracts in each batch, with zero errors and zero warnings.
- citation-fidelity --fail-on-missing-quote: passed over 174 citations, with zero missing quotes and zero widening candidates.
- boundary-audit --fail-on-contradicted --fail-on-template: passed over 528 rows, with zero template clusters and zero contradicted candidates; the three batch-2 empty-case findings remain explicitly upheld.
- step6-scope check --phase adjudicate: the owned group-b decisions close all 66 obligations and report zero remaining adjudication obligations. Before the concurrent batch-6 publication handoff appeared, the batch-2 and batch-12 invocations each returned zero errors. Current invocations also inspect the run-global published-content ledgers and report two external extras for `def-tensor-product-total-complex-of-chain-complexes` / `reader:6:1`; neither error names batch 2, batch 12, group b, or a group-b decision.
- defect-ledger validate --run frontier-33: passed with zero errors. The decision carrier hashes were written by step6-scope.mjs stamp; no judge outcome was requested or self-certified.
- No item bytes were edited in this dispatch, so item reflow/precheck was not triggered; the relevant current item hashes remain the frozen values.

## Unresolved obligations

None in group b. The current run-global Step-6 check is awaiting group c's decision binding for the batch-6 published repair `reader:6:1`; its claim and repair receipts appeared after group b's zero-error check. That cross-group handoff, stage transition, and cross-group closure remain outside this dispatch and were not edited here.
