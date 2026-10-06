# Batch 17 Step 5a adjudication

Run: `frontier-40-geometry-braids-rep-27`; group: `batch-17`. Scope: 19 touched items, one touched A page, reader:17:1 on the examples page; no refuter findings. Dependency order follows the generated task. The engine remains responsible for hashes, gates, scheduling and judgments.

Evidence read: CLAUDE.md, README.md, SCHEMA.md, dispatched task/order, scope, reader report/findings, refute-17.json, pre/post fingerprint inventories. Live state reports stage 5a-read, unpaused. Pre/post inventories bind carrier changes; the reader report describes repairs, and current arguments are reviewed independently. Raw pre-reader item bytes were not located in HEAD or the available shadow; no verbatim historical diff is claimed.

Sources: local Brion PDF pages 11–14 (printed 10–13), complete linearization and projective quotient section; Hoskins official PDF retrieved at https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf. Newstead, Dolgachev and Knop–Kraft–Luna–Vust are not independently read; the external existence theorem stays recorded and unused.

## def-g-linearization-of-an-invertible-sheaf

Verdict: `accepted_repair` for `touched:17:def-g-linearization-of-an-invertible-sheaf`.

The algebraic total-space action gives inverse fibre transport phi: L_gx -> L_x; at (g,h,x) the cocycle composes h^{-1}g^{-1}=(gh)^{-1}. Algebraic character twists preserve that identity and fibre linearity, including the zero section, trivial group and empty variety. The total space glues by invertible transition functions; no existence or uniqueness is inferred. Brion Definition 1.33 agrees. The reader repair makes algebraicity explicit, which is necessary for regular section actions. Pre/post item hashes differ; current raw hash 9216f8df2679e2a401a47e7b89028799897d9b845f5afcad56e9f2fb011ae13d matches post-reader hash.

Defects: frontier-40-geometry-braids-rep-27-5a-batch-17-def-g-linearization-of-an-invertible-sheaf. Risk review: ordinary review; no HIGH/CRITICAL routing.

## lem-proj-of-finitely-generated-graded-algebra-is-projective

Verdict: `accepted_repair` for `touched:17:lem-proj-of-finitely-generated-graded-algebra-is-projective`.

Reviewed all eight steps and all eleven supplier interfaces. For a minimal failed degree mkL decomposition, at most k-1 disjoint L-blocks leave degree at least (k+1)L >= NL; the absence of each pure L-block bounds the remainder below NL, a contradiction. N=1 and N=2 work with k=1; N=0 and S_d=0 give empty Proj, including nilpotent positive parts. Degree-one bases give a homogeneous quotient and finite-type affine charts. On D_+(x_i), the free shifted frame x_i pulls back to g_i and the transition ratios agree; no arbitrary base-change claim is needed. AC is explicitly inherited; finite bases introduce no new choice. The weighted 2,12,15,20 witness has no degree-60 submonomial (if the 2 is used, residues give no solution; without it, 12a+15b+20c=60 has no solution within a<=4,b<=2,c<=2). Pre/post item hashes differ; current raw hash 1ca1b463daf3d52bbff84babf317b86da9068ea25eaaddf0b95e2ac8bcf39063 matches post-reader hash.

Defects: frontier-40-geometry-braids-rep-27-5a-batch-17-lem-proj-of-finitely-generated-graded-algebra-is-projective. Risk review: complete.

## rem-linearization-existence-outside-this-pair

Verdict: `accepted_repair` for `touched:17:rem-linearization-existence-outside-this-pair`.

Read the entire recorded statement and Brion printed p.12 after Lemma 1.34. Connectedness, normality, a positive power and a finite group covering are exactly the source qualifications. The PGL example is restricted to dim V>=2; dim V=1 would give the trivial group on a point and a linearizable bundle. The original external proof is not supplied or used, as both metadata and prose state. No downstream logical premise depends on this existence result. Pre/post item hashes differ; current raw hash 6a4493bbd7a1fe9b7c409ef486ba9b0f8c95b9ceee89f65a80b6149d735f04a5 matches post-reader hash.

Defects: frontier-40-geometry-braids-rep-27-5a-batch-17-rem-linearization-existence-outside-this-pair. Risk review: ordinary review; no HIGH/CRITICAL routing.

## def-good-and-geometric-quotients-for-group-actions

Verdict: `accepted_repair` for `touched:17:def-good-and-geometric-quotients-for-group-actions`.

Checked the seven prerequisite interfaces. X is the associated reduced finite-type scheme, whereas orbit fibres are asserted only on complex closed points. The five good-quotient clauses include scheme surjectivity, affineness, all-open invariant sheaves, closed images and disjoint-image separation. The categorical and orbit-topology comparisons are proved by the locality lemma rather than assumed from the classical affine supplier. Empty quotients satisfy the clauses vacuously; no choice is used by the definition itself. This repairs the reader-identified register attribution without equating classical points with all primes. Pre/post item hashes differ; current raw hash 2439a4d9fc6dafe3f6403ace72927ee765d22e19a4cf3ebbe3b97c24aa7ce27f matches post-reader hash.

Defects: frontier-40-geometry-braids-rep-27-5a-batch-17-def-good-and-geometric-quotients-for-group-actions. Risk review: complete.

## lem-linearizations-powers-and-equivariant-section-ring

Verdict: `accepted_repair` for `touched:17:lem-linearizations-powers-and-equivariant-section-ring`.

Read all seven proof steps and ten suppliers. Tensor powers preserve the inverse-transport cocycle, including n=0. The section action is regular on G times each finite affine trivializing chart; product-ring decomposition puts every orbit in a finite-dimensional restriction space. Scalar evaluations separate sections on reduced classical varieties and therefore span the dual of the orbit span; translating spanning sections gives regular matrix entries (the inverse determinant is regular using the action at g^{-1}). Multiplication/restriction are equivariant and powers/products have the asserted nonvanishing loci. Empty X gives the zero section space/ring; degree-zero constants equal C only on nonempty irreducible projective X. The projective supplier uses precisely that irreducible convention. Brion Lemma 1.34 and Hoskins Lemma 5.19 support the action, with the local proof supplying its rationality. No nonreduced evaluation argument or arbitrary choice is asserted. Pre/post item hashes differ; current raw hash debab2578dad08a80a77fba492cb02d10b79d5189783364043cac69606bc50f4 matches post-reader hash.

Defects: frontier-40-geometry-braids-rep-27-5a-batch-17-lem-linearizations-powers-and-equivariant-section-ring. Risk review: complete.

## def-invariant-section-ring-and-projective-git-quotient

Verdict: `reviewed_no_defect` for `touched:17:def-invariant-section-ring-and-projective-git-quotient`.

The graded action preserves each section space, so the displayed direct sum is exactly the invariant subalgebra. Proj and its degree-zero localization charts exist under the stated inherited AC, including f=0 and an empty Proj when no positive invariant survives. A positive tensor power yields precisely the corresponding Veronese invariant algebra. No finite generation, orbit-space property or general existence of linearizations is silently asserted. All seven supplier interfaces were checked; source comparison is Brion Proposition 1.35 and Hoskins Section 5.4. Item bytes are unchanged; the routed change is contract boundary/citation audit enrichment. Pre/post item hashes agree; current raw hash b7cae3c8e1a8ac4b38de62242837abed2483537e5132201e789165aec6d8a17d matches post-reader hash.

Defects: none. Risk review: complete.

## lem-ample-linearization-power-equivariant-embedding

Verdict: `accepted_repair` for `touched:17:lem-ample-linearization-power-equivariant-embedding`.

Read all four steps and thirteen supplier interfaces. Nonempty irreducible projective X is proper of finite type over the Noetherian field base; the cited ample-power theorem gives a generating subsystem defining a closed immersion. Coherent proper finiteness makes H0 finite-dimensional. Enlarging to its full basis preserves chart surjectivity, gives a closed immersion on the projection domain, and properness closes the image in the entire separated projective target. Evaluation is equivariant for the section action and dual representation, and dualizing the tautological evaluation line identifies O(1) with L^m equivariantly. m>=1, including a one-point X, is explicit; empty X is outside this classical projective convention. Brion printed p.12 and Hoskins Remark 5.20 agree. The reader added the properness supplier needed by the existing inference. Pre/post item hashes differ; current raw hash dbd406b7fa8e8b0cbbb394e1830513a2b36e21fc1110e5262d41ad7ccd14c36e matches post-reader hash.

Defects: frontier-40-geometry-braids-rep-27-5a-batch-17-lem-ample-linearization-power-equivariant-embedding. Risk review: complete.

## lem-good-quotient-local-on-target

Verdict: `accepted_repair` for `touched:17:lem-good-quotient-local-on-target`.

Read all seven steps and thirteen suppliers. Each of the five clauses localizes and glues over target opens; affineness follows from the affine-locality theorem. Disjoint invariant inverse images of distinct complex target points imply fibre constancy. On finite affine charts A_i tensor_B_i A_i is a quotient of A_i tensor_C A_i, hence the kernel pair is finite type even if B_i is not. Closed-point density puts its entire underlying set in the separated-target equalizer; no equality of possibly nonreduced schemes is claimed. Nonzero tensor products of residue-field extensions and prime existence extend constancy to all topological fibres. Saturated inverse images of target affine charts descend through the all-open invariant sheaf isomorphism and the global-sections/affine-target correspondence. Orbit fibres then give quotient topology on complex points. Empty source forces empty quotient; AC is inherited and used for prime existence. Reader repairs supply affineness locality and descent for possibly nonaffine W; they are necessary exact prerequisite corrections. Pre/post item hashes differ; current raw hash 4d98046ff96eaa72e21abd1a903aeb16e0d7d2a52b6d521d8bef6e1226d8f71c matches post-reader hash.

Defects: frontier-40-geometry-braids-rep-27-5a-batch-17-lem-good-quotient-local-on-target. Risk review: complete.

## def-semistable-and-stable-points-for-a-linearization

Verdict: `accepted_repair` for `touched:17:def-semistable-and-stable-points-for-a-linearization`.

Positive-power invariant nonvanishing defines semistability; stability adds orbit closedness in the semistable open and a finite stabilizer. Empty invariant-positive part gives empty loci; a fixed point of a positive-dimensional group is never stable. Zero-dimensional stabilizer is finite for these closed finite-type complex groups. An equivariant embedding preserves orbit closures/stabilizers once invariant-section and polynomial semistability are compared. That comparison requires high-degree restriction and invariant lifting; the reader now names both exact arguments in the main theorems rather than deriving them from rationality and tensor powers alone. No openness or nonemptiness is assumed by the definition. Checked all nine interfaces, Brion Proposition 1.35 and Hoskins Definition 5.21. Pre/post item hashes differ; current raw hash a49d71de38d7f3e85f0221e8dc440d88e1f364c8b7156851931f35a5d81c17c4 matches post-reader hash.

Defects: frontier-40-geometry-braids-rep-27-5a-batch-17-def-semistable-and-stable-points-for-a-linearization. Risk review: complete.

## lem-ample-invariant-section-charts-are-affine

Verdict: `accepted_repair` for `touched:17:lem-ample-invariant-section-charts-are-affine`.

Read all four proof steps and fourteen suppliers. The embedding identifies sigma^m with a section of O_X(n); a sufficiently large additional q kills H1 of the coherent ideal sheaf at degree nq. The exact twisted-ideal cohomology sequence and projective-space H0 identification then lift sigma^{mq} to a homogeneous form. Its chart intersects X in a closed subscheme of affine D_+(F), proving affineness without projective normality. Fibre powers preserve nonvanishing; invariant sections give G-stable charts covering exactly semistability. sigma=0 gives the empty affine chart; a point/P0 and a nowhere-vanishing positive section are included. The reader added the precise ideal/coherence/exact-sequence/polynomial suppliers required by the lifting inference, with AC inherited throughout. Pre/post item hashes differ; current raw hash 2240164098b0f2e3ff361d6672cc6e50295911ea069197604137c36bce79dedb matches post-reader hash.

Defects: frontier-40-geometry-braids-rep-27-5a-batch-17-lem-ample-invariant-section-charts-are-affine. Risk review: complete.

## lem-graded-invariants-of-localization-at-an-invariant-element

Verdict: `reviewed_no_defect` for `touched:17:lem-graded-invariants-of-localization-at-an-invariant-element`.

Read all six steps and the complete-reducibility and Reynolds arguments relevant to the five cited dependencies. Invariant A-linearity makes the localized projection independent of fractional representatives, including zero divisors. Splitting the G-stable f-torsion K gives A=K plus C; an invariant c/f^n forces gc-c in both K and C, so its numerator can be taken invariant. Both inclusions and degree-zero consequences follow. If f is zero or nilpotent, both localizations are zero; for a degree-zero unit the assertion reduces to invariants of A. No domain or finite-generation assumption is needed. All choice is inherited from complete reducibility; grading is respected. Current item bytes are unchanged and contract audit enriches the zero/nilpotent and arbitrary-degree boundaries. Pre/post item hashes agree; current raw hash ac212356e629184a542f9b8ca966f5dcc51b810ab6a19bf79044a91bbe4abf23 matches post-reader hash.

Defects: none. Risk review: complete.

## lem-section-ring-of-ample-line-bundle-finitely-generated

Verdict: `accepted_repair` for `touched:17:lem-section-ring-of-ample-line-bundle-finitely-generated`.

Read four proof steps and all ten supplier statements. Proper finite-type projective X admits a very ample positive power. For each residue j mod m, the exact graded-section supplier applies directly to i_*(L^j), giving a finitely generated tail; finitely many finite-dimensional initial spaces extend this to a finite S-module. The action factors through the coordinate-ring image A because forms restricting to zero annihilate every section. The finite sum of the M_j is then module-finite over a finite-type C-algebra, hence a finite-type and Noetherian C-algebra. This works for nonreduced/disconnected projective schemes and the empty zero ring; A is not asserted to equal the full section ring. The corrected Hoskins Section 5.4 locator actually states the ample-section-ring finite-generation assertion, whereas Theorem 5.3 uses an embedded coordinate ring. AC inherited from projective/cohomological suppliers is explicit. Pre/post item hashes differ; current raw hash a9a3def9cf4934f6ea5f4c9dbea9554878615d957323ddf7a00c46698ee289f1 matches post-reader hash.

Defects: frontier-40-geometry-braids-rep-27-5a-batch-17-lem-section-ring-of-ample-line-bundle-finitely-generated. Risk review: complete.

## lem-invariants-of-finitely-generated-graded-rational-algebra-are-finitely-generated

Verdict: `reviewed_no_defect` for `touched:17:lem-invariants-of-finitely-generated-graded-rational-algebra-are-finitely-generated`.

Read four steps, all six suppliers and the full finite-dimensional invariant-generation proof. Homogeneous components of finite algebra generators give a finite generating list; finite orbit spans and their degree projections give a finite-dimensional graded generating module W. Sym(W)=C[W*] maps equivariantly and surjectively onto A, and exactness of invariant projection makes Sym(W)^G map onto A^G, proving finite generation, including nonreduced A. Homogeneous pieces of any invariant generating list still generate, so the final homogeneous-generators remark is justified. A=C allows the empty generating module and yields C; a zero algebra is excluded by A0=C. Choice is inherited through the cited invariant-theory results. Current item unchanged; contract updates are audit enrichment. Pre/post item hashes agree; current raw hash ead806d5afb2d4b026af5fe273670bf8a1802a457baf4e1e4a3537e7f3509ff1 matches post-reader hash.

Defects: none. Risk review: complete.

## cex-semistable-locus-depends-on-linearization

Verdict: `accepted_repair` for `touched:17:cex-semistable-locus-depends-on-linearization`.

Read all three counterexample steps and eleven dependencies, including the torus character decomposition and the reductivity bridge. P0=Proj C[t] is Spec C by its single degree-zero chart, and O on the point is ample. The two algebraic fibre actions have weights 0 and 1; in degree n>=1 the latter weight is n and evaluation at t=2 rules out a nonzero invariant. Thus invariant rings are C[t] and C, semistable loci are a point and empty, and quotient schemes are a point and empty. Both stable loci are empty because the stabilizer is the infinite G_m (or semistability is absent). Hoskins Example 5.18(1)-(2) matches. Reader corrections explicitly limit the witness conclusion to semistability, and supply inherited Proj AC and the precise torus reductivity/chart justifications. Pre/post item hashes differ; current raw hash 2e5b0cb2b6befbf81a98c75481ea7055de87fcf541482445669946449dcf1fe5 matches post-reader hash.

Defects: frontier-40-geometry-braids-rep-27-5a-batch-17-cex-semistable-locus-depends-on-linearization. Risk review: complete.

## lem-affine-chart-quotients-for-invariant-sections

Verdict: `accepted_repair` for `touched:17:lem-affine-chart-quotients-for-invariant-sections`.

Read all six steps and all nineteen suppliers, including the complete affine quotient proof. Arbitrary reduced projective algebraic sets use standard Proj charts directly, so reducibility is allowed. Degree-zero invariant localization is the torsion-safe lemma. The finite chart generators split each monomial exponent into d times a quotient plus a remainder below d, including d=1; f=0 gives zero localizations. For C=O(X_f), Reynolds splitting of B=C^G embeds each residue field into its fibre algebra and a prime proves scheme surjectivity. Invariant localization gives the sheaf identity on principal opens and gluing gives all opens. Exactness on stable radical ideals gives image V(I cap B); projecting a+b=1 separates disjoint subsets. Overlap ratios g^{deg f}/f^{deg g} give the same localized ring map, and empty X gives zero/empty charts. The reader correctly replaced an irreducibility-restricted chart citation and an inapplicable positive-grading finite-generation citation by the actual Proj-chart and monomial arguments. AC is used only through named suppliers. Pre/post item hashes differ; current raw hash 1efa67d3db2722955f65a3fafd012aab42732bd21be231cb39a63d9dc789c615 matches post-reader hash.

Defects: frontier-40-geometry-braids-rep-27-5a-batch-17-lem-affine-chart-quotients-for-invariant-sections. Risk review: complete.

## thm-linear-action-projective-git-quotient

Verdict: `reviewed_no_defect` for `touched:17:thm-linear-action-projective-git-quotient`.

Read nine proof steps and all twenty-eight cited supplier interfaces; full affine quotient, orbit/stabilizer/separation and affine stable-locus arguments were opened. Finite generation and corrected Veronese generation make Proj projective, including empty X and R^G=C. Overlap ratios establish the necessary preimage identity pi^{-1}D_+(f)=X_f before quotient locality is invoked. For a stable x, invariant separation excludes the positive-dimensional stabilizer locus inside its affine chart; clearing its invariant fraction with an extra f0 power gives a positive homogeneous chart with finite stabilizers everywhere. Orbit boundary dimension then proves all its orbits closed. Conversely a closed chart and a finite stabilizer give closedness in Xss by saturation of quotient fibres. Both directions of the orbit-closure fibre criterion hold on a common saturated affine chart. Closed charts glue geometric quotients; removing the invariant closed positive-stabilizer locus gives an open saturated stable target. Empty stable loci and trivial/positive-dimensional kernels behave as stated. Hoskins Theorems 5.3/5.6 and Lemma 5.9 were read in full and agree with the route. Current item unchanged; contract updates refine supplier/zero-case evidence. Pre/post item hashes agree; current raw hash 849b57dd7002ac2a24f582348cb0d21bd6d9d76a7e27efdd3568b17f66066c37 matches post-reader hash.

Defects: none. Risk review: complete.

## thm-projective-git-quotient-from-invariant-section-ring

Verdict: `accepted_repair` for `touched:17:thm-projective-git-quotient-from-invariant-section-ring`.

Read all eight steps and twenty-six suppliers, including the entire section-extension proof and exact faithful-module integrality statement. S=C[V]=Sym(V*) has the correct variance. For any compatible embedding, residue modules M_j are finite over its coordinate-ring image A; R contains 1 and is faithful over A[b], so the finite-module criterion makes each homogeneous b integral. Projecting a monic relation to total degree rn gives homogeneous coefficients in A; Reynolds naturality and invariant linearity preserve the relation. Evaluation proves full-section semistability is covered by invariant coordinate charts; applying the same relation at homogeneous primes proves those charts cover Proj R^G. Section-extension isomorphism gives both injectivity and surjectivity R_(f)=O(X_f)=A_(f) on qcqs projective X. Their invariant rings and transitions agree, so the quotient targets and maps glue canonically. Invariant lifting along Sym(V*) -> A identifies ambient semistability; closed invariant X preserves orbit-closure and stabilizer conditions. All positive powers have equal semistability by taking powers in one direction and viewing their sections as sections of L in the other; Veronese also identifies quotient maps. Empty semistability/quotient is allowed; empty X is excluded by the projective-variety convention. Reader repairs correct the polynomial dual, faithful integrality citation and statement clause numbering. No existence or numerical criterion is imported. Pre/post item hashes differ; current raw hash 9dfa7145c7df6487b96dab8ee65278b2d275d15fcc016b30f0138cb8292a722b matches post-reader hash.

Defects: frontier-40-geometry-braids-rep-27-5a-batch-17-thm-projective-git-quotient-from-invariant-section-ring. Risk review: complete.

## thm-good-and-geometric-quotient-on-stable-locus

Verdict: `reviewed_no_defect` for `touched:17:thm-good-and-geometric-quotient-on-stable-locus`.

Read all six steps and eleven supplier interfaces. The prior theorem identifies the embedded coordinate quotient with the full invariant section quotient chartwise, rather than equating the rings. The linear theorem then transports open/saturated stable loci, geometric orbit fibres and invariant sheaves. Every positive power preserves loci and maps under the Veronese isomorphism. For the forward chart criterion, restrict an invariant coordinate form from the embedded stable chart. In the reverse direction, any invariant section chart is saturated: on overlapping degree-d charts sigma^d/f^n is the pullback of the same Proj fraction. A quotient fibre containing an orbit and its closure lies inside this chart, hence chart-closedness plus a finite stabilizer proves global stability. This handles arbitrary section charts, not only coordinate-originating sections, and preserves the finite-stabilizer condition in both directions. Empty stable loci and Xs=Xss (including empty Xss) are valid. All choice is inherited and no Hilbert–Mumford criterion is used. Item unchanged; contract updates are current supplier/Veronese audit enrichment. Pre/post item hashes agree; current raw hash 400da060a2d06255b79c6b25a39e0d432cb9db48940590661d9b939ccf34c33c matches post-reader hash.

Defects: none. Risk review: complete.

## ex-gm-on-projective-line-with-two-linearizations

Verdict: `amended_repair` for `touched:17:ex-gm-on-projective-line-with-two-linearizations`.

Read all four verification steps and fourteen prerequisite interfaces. Point-coordinate weights are -1,+1; contragredient section-coordinate weights are +1,-1 and degree-n fibre twist adds kn. Thus a monomial has weight 2i-n+kn. k=0 has invariant generator e0e1 of degree 2, transitive C* semistability and stabilizer mu2; k=+1 and -1 have degree-one generators e1 and e0, affine-line semistability, a fixed point of infinite stabilizer and a nonclosed C* orbit, hence empty stability and a non-geometric one-point quotient. For |k|>=2 weight zero requires i outside [0,n], so no positive invariants exist and Proj C is empty. Proj C[u] is Spec C for either generator degree via its single chart; n=0 only supplies constants and n=1 has no invariant in the standard case. The two affine coordinate sections prove ampleness and the torus supplier proves reductivity. Hoskins Examples 5.8/5.18(2) and Brion Example 1.32(2) were checked; Newstead and Dolgachev locators remain unread and are not needed for the explicit computation. Reader repairs supply those exact section/torus/chart prerequisites and correctly limit the Brion attribution to the standard case. Pre/post item hashes differ; current raw hash 15d4619e4d4bf736e07a98e9a0512e2575cccd3b1f846e6e0ccbb02202631bb9 matches post-reader hash.

Defects: frontier-40-geometry-braids-rep-27-5a-batch-17-ex-gm-on-projective-line-with-two-linearizations. Risk review: complete.

## projective-git-from-linearized-line-bundles

Verdict: `accepted_repair` for `page:17:projective-git-from-linearized-line-bundles`.

Reviewed the full A-page summary, declared prerequisites and ordered item list against the nineteen current carriers. The restored finite-stabilizer condition in the invariant-chart characterization matches both directions in the linear and ample stable-locus theorems. The page distinguishes a given linearization from the unused recorded existence theorem, full section rings from invariant chart rings, good quotients from stable orbit quotients, and the necessary corrected Veronese power. All seventeen A-page items occur in supplier-before-consumer order; no B-page item is imported as a prerequisite. Pre/post page inventories retain the same item ordering and record the reader prose change. No further mathematical page defect is identified.

Defects: frontier-40-geometry-braids-rep-27-5a-batch-17-projective-git-from-linearized-line-bundles. Risk review: ordinary review; no HIGH/CRITICAL routing.

## projective-git-from-linearized-line-bundles-examples

Verdict: `confirmed_fatal` for `reader:17:1`.

Confirmed the original false summary: cex Counterexample 1.1 gives an infinite stabilizer under the trivial linearization, and 1.2 has no semistable point, so both stable loci are empty. The projective-line Verification 1.1-2.1 does change stability. The current B page correctly says both examples change semistability/quotient and only P1 changes stability. Its raw hash matches the owner-local correction receipt research/frontier-40-geometry-braids-rep-27-step5-git-page-owner-repair.json after_raw_sha256; that receipt binds the original pre/post inventory page hash and describes the exact correction. Scope observed_sha256 b025a915133bb3888c6c23214daeb2d005cf0c621d64a507e704bfb34e19fd09 is retained as routing evidence separately from the receipt raw hashes. No claim is made that the historical counterexample refutes current corrected prose. The owner repair is accepted after independent computation; no new page edit is needed.

Defects: frontier-40-geometry-braids-rep-27-5a-batch-17-projective-git-from-linearized-line-bundles-examples. Risk review: ordinary review; no HIGH/CRITICAL routing.

## Final contract reconciliation and local amendment

`ex-gm-on-projective-line-with-two-linearizations` is amended_repair: Alpha explicitly declares inherited AC in Example and Given, updates statement provenance and synchronizes the B manifest row, including corrected source locators and the direction of the fixed-point orbit-closure sentence. The exact computations and proof steps remain unchanged. The separate closed defect frontier-40-geometry-braids-rep-27-5a-batch-17-ex-gm-inherited-ac records the missing-choice scope. No judge record existed to invalidate. Boundary audit enrichment clarifies that S0=C excludes the zero ring, recorded existence uses n>=1, arbitrary quotient targets do not remove the source finite-type/classical hypotheses, and tensor degree n=1 differs from projective dimension 1.

## Closure and local checks

Exactly 21 obligations are decided: 19 touched items, one touched A page and reader:17:1. The decisions file contains no extra obligations. All 18 referenced defect rows are closed at caught_at_stage 5a-adjudicate; reader:17:1 references exactly one. No escalation, unresolved mathematical finding, proposed withdrawal or defective published supplier was identified. Published content remained read-only.

The one Alpha-edited item is items/ex-gm-on-projective-line-with-two-linearizations.md; its four proof steps and numerical computations are unchanged. Its reference consumers are the one-point counterexample Remarks, the two definitions’ example mentions and the B-page summary: they use the already reviewed computation and need no repair. Its manifest row is synchronized to the corrected assumption/source locators and the actual fixed-point closure direction. No other item or page was edited by Alpha.

All 67 direct external supplier interfaces were opened, in addition to the nineteen owned carriers. Full selected supplier proofs opened: the Reynolds/complete-reducibility bridge, Reynolds ideal properties, finite-dimensional invariants, affine quotient, orbit dimensions, stabilizer semicontinuity, affine stable locus, invariant separation, torus grading and section extension. This is not a recursive independent audit of their entire transitive prerequisite closure. The 30 owned cross-batch rows were reconciled to current actual uses; six removed direct edges remain recorded and no proposed item withdrawal was deleted. The unified ledger was refreshed through its prescribed tool.

Initial local proof-contract diagnostics found stale fact attributions/use lists, one stale exact source quote, three missing explicit inputs and unanchored boundary notes. Synchronization removed five invalid fact-source attributions (the relevant suppliers remain cited where actually used), refreshed one quote, completed use/input lists and added nine explicit anchors. No item mathematics was changed for those mechanical diagnostics.

Checks actually run after the final item edit:

- node tools/tsx-run.mjs tools/reflow.mts items/ex-gm-on-projective-line-with-two-linearizations.md — unchanged, exit 0.
- node tools/tsx-run.mjs tools/precheck.mts items/ex-gm-on-projective-line-with-two-linearizations.md — 1 checked, 0 failing, exit 0.
- node tools/proof-layout.mjs items/ex-gm-on-projective-line-with-two-linearizations.md — 1 item, 4 steps, 0 defects, exit 0. This was the final batched layout command on every Alpha-changed item path.
- node tools/rendercheck.mjs with the 19 explicit batch item paths and both explicit page paths — 21 files, all YAML and KaTeX parsing passed, exit 0.
- node tools/prosecheck.mjs on the two assigned pages — 0 errors, one count-in-prose heuristic warning, exit 0. The page lists exactly two examples, so that warning is harmless.
- node tools/proof-contract.mjs research/frontier-40-geometry-braids-rep-27-batch-17.proof-contracts.json --strict — 19/19 checked, 0 errors, one shotgun-bracket warning, exit 0. The warning names linear-theorem step 2.3; each of F3/F4/F5/F7 is used there, and later fact-free steps cite earlier established results, so no logical defect follows.
- node tools/risk-report.mjs research/frontier-40-geometry-braids-rep-27-batch-17.proof-contracts.json — 19 routed, 0 errors, exit 0; then the same command with --require-reviewed — 19 routed, 0 errors, exit 0. All 17 HIGH/CRITICAL records have specific complete risk reviews.

These are local checks, not judgments, acceptance stamps, or the engine gate battery. The engine owns current decision hashes and remaining stage transitions.

Final verdict index:

| Obligation | Verdict | Defect rows |
| --- | --- | --- |
| `touched:17:def-g-linearization-of-an-invertible-sheaf` | accepted_repair | `frontier-40-geometry-braids-rep-27-5a-batch-17-def-g-linearization-of-an-invertible-sheaf` |
| `touched:17:lem-proj-of-finitely-generated-graded-algebra-is-projective` | accepted_repair | `frontier-40-geometry-braids-rep-27-5a-batch-17-lem-proj-of-finitely-generated-graded-algebra-is-projective` |
| `touched:17:rem-linearization-existence-outside-this-pair` | accepted_repair | `frontier-40-geometry-braids-rep-27-5a-batch-17-rem-linearization-existence-outside-this-pair` |
| `touched:17:def-good-and-geometric-quotients-for-group-actions` | accepted_repair | `frontier-40-geometry-braids-rep-27-5a-batch-17-def-good-and-geometric-quotients-for-group-actions` |
| `touched:17:lem-linearizations-powers-and-equivariant-section-ring` | accepted_repair | `frontier-40-geometry-braids-rep-27-5a-batch-17-lem-linearizations-powers-and-equivariant-section-ring` |
| `touched:17:def-invariant-section-ring-and-projective-git-quotient` | reviewed_no_defect | none |
| `touched:17:lem-ample-linearization-power-equivariant-embedding` | accepted_repair | `frontier-40-geometry-braids-rep-27-5a-batch-17-lem-ample-linearization-power-equivariant-embedding` |
| `touched:17:lem-good-quotient-local-on-target` | accepted_repair | `frontier-40-geometry-braids-rep-27-5a-batch-17-lem-good-quotient-local-on-target` |
| `touched:17:def-semistable-and-stable-points-for-a-linearization` | accepted_repair | `frontier-40-geometry-braids-rep-27-5a-batch-17-def-semistable-and-stable-points-for-a-linearization` |
| `touched:17:lem-ample-invariant-section-charts-are-affine` | accepted_repair | `frontier-40-geometry-braids-rep-27-5a-batch-17-lem-ample-invariant-section-charts-are-affine` |
| `touched:17:lem-graded-invariants-of-localization-at-an-invariant-element` | reviewed_no_defect | none |
| `touched:17:lem-section-ring-of-ample-line-bundle-finitely-generated` | accepted_repair | `frontier-40-geometry-braids-rep-27-5a-batch-17-lem-section-ring-of-ample-line-bundle-finitely-generated` |
| `touched:17:lem-invariants-of-finitely-generated-graded-rational-algebra-are-finitely-generated` | reviewed_no_defect | none |
| `touched:17:cex-semistable-locus-depends-on-linearization` | accepted_repair | `frontier-40-geometry-braids-rep-27-5a-batch-17-cex-semistable-locus-depends-on-linearization` |
| `touched:17:lem-affine-chart-quotients-for-invariant-sections` | accepted_repair | `frontier-40-geometry-braids-rep-27-5a-batch-17-lem-affine-chart-quotients-for-invariant-sections` |
| `touched:17:thm-linear-action-projective-git-quotient` | reviewed_no_defect | none |
| `touched:17:thm-projective-git-quotient-from-invariant-section-ring` | accepted_repair | `frontier-40-geometry-braids-rep-27-5a-batch-17-thm-projective-git-quotient-from-invariant-section-ring`, `frontier-40-geometry-braids-rep-27-5a-batch-17-section-integrality-prerequisite` |
| `touched:17:thm-good-and-geometric-quotient-on-stable-locus` | reviewed_no_defect | none |
| `touched:17:ex-gm-on-projective-line-with-two-linearizations` | amended_repair | `frontier-40-geometry-braids-rep-27-5a-batch-17-ex-gm-on-projective-line-with-two-linearizations`, `frontier-40-geometry-braids-rep-27-5a-batch-17-ex-gm-inherited-ac` |
| `page:17:projective-git-from-linearized-line-bundles` | accepted_repair | `frontier-40-geometry-braids-rep-27-5a-batch-17-projective-git-from-linearized-line-bundles` |
| `reader:17:1` | confirmed_fatal | `frontier-40-geometry-braids-rep-27-5a-batch-17-projective-git-from-linearized-line-bundles-examples` |
