# Step 7 adjudication — group e

Run: `phase-2-nine-step-25`  
Batches: 10, 11

This report is updated after each item. The Step-6 context contained no concerns or incoming alerts for this group.

## Completed adjudications

### `def-kac-moody-verma-module`

- Tuple: `gpt-5.6-terra` / `c1e8cf88e7e97972441286f601b70b96455980b156b492583079a4e1b90f9607`.
- Outcome: `false_positive`.
- Current/pre-edit guard: `9125cfb9f492590919416663af5d28e8911d929ec106445da5be99b894f2715a`.
- Evidence: the rejection assumes an infinite simple-root index set, but the page convention fixes every GCM index set as `I={1,...,n}` with finite `n>=1`. Therefore only finitely many positive-lattice degrees have height at most a fixed bound. `prop-kac-moody-root-spaces-are-finite-dimensional` bounds every root space by `n^height`; choosing homogeneous bases and PBW then leaves finitely many basis elements and bounded-exponent monomials at each fixed weight. The countable generality of the PBW lemma does not enlarge the GCM’s finite index set.
- Dependencies opened: `def-generalized-cartan-matrix`, `def-realization-of-a-generalized-cartan-matrix`, `def-kac-moody-root-lattice-height-and-positive-cone`, `prop-kac-moody-root-spaces-are-finite-dimensional`, `lem-pbw-for-countably-presented-kac-moody-lie-algebras`, `def-kac-moody-category-o`.
- Sources consulted: none; the exact local finite-rank convention and root-space bound resolve the objection.
- Repair/validation/rejudge: no content change permitted or warranted; no rejudge target.

### `cex-imaginary-root-spaces-need-not-have-multiplicity-one`

- Tuple: `gpt-5.6-terra` / `2e466f7f243013461e1f63869aa61e892764a51154e5783473e51dc0c49530c4`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `b0ee9621f3f420e3589e0b353d9d3fac4987d10a74f8f159aeb01d402501ac7d`.
- Evidence: [F1] supplies the Cartan–Serre presentation, which gives the homomorphism in step 3.1 but not the maximal Cartan-disjoint-ideal property invoked for injectivity in step 5.1. That property is explicitly stated by `def-kac-moody-algebra-associated-to-a-gcm`.
- Repair: added the Kac–Moody quotient definition as a direct dependency and exact [F4], and changed step 5.1 to cite [F4] for the kernel argument instead of treating it as part of the Serre-presentation interface.
- Dependencies opened: `thm-serre-presentation-of-a-kac-moody-algebra`, `def-kac-moody-algebra-associated-to-a-gcm`, `def-contragredient-lie-algebra-before-the-maximal-ideal-quotient`.
- Sources consulted: none; the exact local definition states the required nonzero-ideal intersection property and its maximal-ideal justification.
- Post-edit guard: `03849d6b89f8e385e3ee6924aaa976632c6075b01367bf8477b1ac2143a832b1`.
- Validation: focused precheck passed (1 checked, 0 failing), and render check passed.
- Rejudge target: yes.

### `thm-maximal-brauer-pairs-exist-and-are-conjugate`

- Tuple: `gpt-5.6-terra` / `52551c1ade658adde2986845d36bda3414f11f58ff9207c9acbadf72fa5d5e2a`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `e0d852df34728fcce85dfe2906ddd56fec42fb70f6f9f5ae5029ab8d4672b2ff`.
- Evidence: [F6] attributed the coefficientwise definition of the Brauer projection to `lem-brauer-kernel-and-relative-trace-support`, whose statement instead gives a kernel/relative-trace characterization. Steps 3.1, 4.1, and 6.1 use coefficient retention directly. That exact interface is supplied by `def-brauer-homomorphism-for-a-p-subgroup`.
- Repair: replaced the inaccurate dependency with the exact Brauer-map definition and retained [F6] with that citation. The unused kernel/trace lemma was removed from `deps`.
- Dependencies opened: `lem-brauer-kernel-and-relative-trace-support`, `def-brauer-homomorphism-for-a-p-subgroup`, `thm-brauer-homomorphism-is-multiplicative`, `thm-brauer-pair-order-is-independent-of-the-normal-chain`, `thm-every-brauer-pair-determines-a-unique-global-block`.
- Sources consulted: none; the exact local definition states coefficientwise retention verbatim.
- Post-edit guard: `f5b585e9827ebeabeb48eff62cf5f19219d7c7c94a3a0036bc6bec4c883a0bed`.
- Validation: focused precheck passed (1 checked, 0 failing), and render check passed.
- Rejudge target: yes.

### `thm-every-brauer-pair-determines-a-unique-global-block`

- Tuple: `gpt-5.6-terra` / `e7f9da3bccc4d86d1a5268028a2116a49f8814070d6d26a1025e62a641e4f67c`.
- Outcome: `false_positive`.
- Current/pre-edit guard: `27cd7be9fc70368725adf4f68db7c2d3732080b917c74cc5b754e566c7725e73`.
- Evidence: [F1] states that for normal subgroup inclusions the pair order agrees with direct normal inclusion. At `1 normal P`, unfolding `def-normal-inclusion-of-brauer-pairs` gives `b` `P`-stable and `Br_(P/1)(b)e=e`; centrality of the global block makes stability automatic, and the relative-map definition identifies `Br_(P/1)` with `Br_P`. This is exactly the membership definition in `def-brauer-pair-for-a-block`.
- Dependencies opened: `thm-brauer-pair-order-is-independent-of-the-normal-chain`, `def-normal-inclusion-of-brauer-pairs`, `def-relative-brauer-homomorphism`, `def-brauer-pair-for-a-block`, `lem-brauer-homomorphism-is-conjugation-equivariant`.
- Sources consulted: none; unfolding the exact local definitions resolves the objection.
- Repair/validation/rejudge: no content change permitted or warranted; no rejudge target.

### `thm-brauer-pair-order-is-independent-of-the-normal-chain`

- Tuple: `gpt-5.6-terra` / `dd43dac0e547d00aab5c577ee12256febf262d559134ecda53141503ebfa262e`.
- Outcome: `false_positive`.
- Current/pre-edit guard: `9e1e769cf554e0be1fd7c5fc81b2f5de3c6dc8f38d7b42fdfd59f6985312760e`.
- Evidence: [F1] states that the unique `f` satisfies `(Q,f) normal-included (P,e)`. Unfolding the exact definition in `def-normal-inclusion-of-brauer-pairs` gives both disputed clauses: `f` is `P`-stable and `Br_(P/Q)(f)e=e`. Step 3.1 uses precisely those defining clauses.
- Dependencies opened: `thm-unique-normal-subpair-below-a-brauer-pair`, `def-normal-inclusion-of-brauer-pairs`, `lem-relative-brauer-homomorphisms-are-transitive`, `def-relative-brauer-homomorphism`.
- Sources consulted: none; the exact locally defined relation resolves the objection.
- Repair/validation/rejudge: no content change permitted or warranted; no rejudge target.

### `thm-unique-normal-subpair-below-a-brauer-pair`

- Tuple: `gpt-5.6-terra` / `21e9aea3f6b1e22a7b5ca508a68a352d407e60b1a2336e01934c51acd0e10e98`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `5c0710c08cc1deae48cea655b8569665c25a22d6a02dbb00e9c19acee361831e`.
- Evidence: [F3], the proposition about the absolute Brauer map, did not state the surjectivity, multiplicativity, or centrality behavior of the relative map used in step 1.1. Those properties are the exact interface of `def-relative-brauer-homomorphism`.
- Repair: added that relative-map definition as a direct dependency and exact [F3], removed the misapplied absolute proposition, and wrote the one-line lift argument proving centrality of each relative image.
- Dependencies opened: `def-normal-inclusion-of-brauer-pairs`, `def-relative-brauer-homomorphism`, `lem-brauer-maps-kill-nontrivial-idempotent-orbit-sums`, `prop-central-idempotents-under-the-brauer-homomorphism`.
- Sources consulted: none; the exact local relative-map interface and the displayed centrality argument prove the result.
- Post-edit guard: `3318ee6db6d98cd9cca00e866c60638040e72f63902a96fc06a9d7b96237e9ff`.
- Validation: focused precheck passed (1 checked, 0 failing); the dependency change will be included in the group-level dependency check.
- Rejudge target: yes.

### `prop-principal-block-has-sylow-defect`

- Tuple: `gpt-5.6-terra` / `664e4ddc528847e338f13aa3ec5e91ca68ce9665f8f5af1a5efc59c4f69df75f`.
- Outcome: `false_positive`.
- Current/pre-edit guard: `20c9952a43baaade4f63605b7bc84b2dce8d490ad82602a8b4ea4a7177e9f855`.
- Evidence: step 2.1 already proves the alleged missing converse. If `Delta D` is a vertex, conjugation by `(x,x)` gives `Delta(xDx^-1)`; the split relative-projectivity witnesses and inclusion-minimality are preserved by conjugation. By the definition of defect group, `xDx^-1` is a defect group. [F3] then says every Sylow subgroup is such a conjugate.
- Dependencies opened: `thm-vertices-of-modules-in-a-block-lie-in-a-defect-group`, `thm-higman-criterion-for-relative-projectivity`, `thm-sylow-second-theorem`, `def-defect-group-and-numerical-defect-of-a-block`, `thm-defect-groups-of-a-block-are-conjugate` (the latter confirms but is not needed for the displayed elementary derivation).
- Sources consulted: none; the result follows directly from the definition and conjugation of split induction witnesses.
- Repair/validation/rejudge: no content change permitted or warranted; no rejudge target.

### `lem-relative-brauer-homomorphisms-are-transitive`

- Tuple: `gpt-5.6-terra` / `229396f989ef88442969da5a02fe9575b10ea853f673092b939b139d1aeb3202`.
- Outcome: `confirmed_fatal` (`other`).
- Pre-edit guard: `b2ad28a406d30002cbd36a9370cc8dd1dec49adab7dab93086ee589e99cb6021`.
- Evidence: `def-relative-brauer-homomorphism` defines `Br_(P/Q)` only when the ambient `P` is a `p`-group. The lemma omitted that hypothesis, so all three relative maps could be undefined as stated.
- Repair: added `P <= G` a `p`-subgroup to the statement and Given block. Then `Q` and `R` are automatically `p`-subgroups and each relative map is well-typed.
- Dependencies opened: `def-relative-brauer-homomorphism`, `lem-brauer-homomorphism-is-conjugation-equivariant`.
- Sources consulted: none; the exact local definition settles the required domain, and coefficient truncation proves both identities.
- Post-edit guard: `61979136f2dd182f63a4acf2428bb58a47bf210c647754946dc2301b50fd3b87`.
- Validation: focused precheck passed (1 checked, 0 failing).
- Rejudge target: yes.

### `lem-block-defect-is-an-intersection-of-two-sylow-subgroups`

- Tuple: `gpt-5.6-terra` / `3030d49d19b791149aca15e9b88d32843760fe45f4969461c6d79afe7b20b45b`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `a140296389ec5c9411ffcfccffbc83f3e99106fb4af31ce8b266339842d616ed`.
- Evidence: [F1] claimed that `thm-block-bimodule-has-a-diagonal-vertex` makes the specified `D` a vertex, whereas that theorem only produces some diagonal vertex up to conjugacy. The required exact property is instead the definition of “`D` is a defect group.”
- Repair: replaced the theorem dependency by `def-defect-group-and-numerical-defect-of-a-block` and rewrote [F1] as the exact defining equivalence. The restriction lemma can now be applied to the literal subgroup `Delta D`.
- Dependencies opened: `thm-block-bimodule-has-a-diagonal-vertex`, `def-defect-group-and-numerical-defect-of-a-block`, `lem-restriction-to-a-containing-p-subgroup-retains-a-vertex`, `lem-transitive-p-group-permutation-modules-have-point-stabilizer-vertices`, `thm-krull-schmidt-for-finite-dimensional-kg-modules`, `thm-green-vertex-source-existence-and-conjugacy`.
- Sources consulted: none; the exact local definition supplies the missing identification, and the double-coset stabilizer calculation was checked directly.
- Post-edit guard: `fe0f3eac0b9151ace83bdfc08c541d8bf3107f649d2e016f0ae47e49d8ccef94`.
- Validation: focused precheck passed (1 checked, 0 failing); the dependency change will be included in the group-level dependency check.
- Rejudge target: yes.

### `lem-block-centre-locality-and-trace-ideal-sums`

- Tuple: `gpt-5.6-terra` / `1fbca6e52b07d895ae2a18dd076e29c45a2b1f6d202f1a88a3ca7b4646ef4178`.
- Outcome: `confirmed_nonfatal`.
- Current/pre-edit guard: `7fb0b947b2c4835d1f2abd9018c07d14527f3cf08af403d83ace6aa12a04e67b`.
- Evidence: the displayed statement of the Krull-Schmidt supplier does not mention Fitting stabilization, but its opened proof step 2.1 proves exactly the kernel/image stabilization and direct sum for indecomposable finite-length modules. Moreover, in the present finite-dimensional block, stabilization follows immediately from monotonicity of the integer dimensions, and the consumer’s step 1.1 proves the remaining direct-sum argument. The dependency phrasing is imprecise but the gap is immediately closed.
- Dependencies opened: `def-block-bimodule-for-the-double-group`, `thm-krull-schmidt-for-finite-dimensional-kg-modules` (including proof step 2.1).
- Sources consulted: none; finite-dimensional stabilization and rank-nullity are elementary, and the exact local supplier proof was read.
- Repair/validation/rejudge: no content change permitted or warranted; no rejudge target.

### `def-block-bimodule-for-the-double-group`

- Tuple: `gpt-5.6-terra` / `5e3090eddf4d2afaac6c0d1a3c540b4e309f6b8fdb1c8c36d699e8186b662d6e`.
- Outcome: `confirmed_fatal` (`other`).
- Pre-edit guard: `214981b2feb7d21161e0148e4480998ca0eb04c75d0912a1625db11e80753c92`.
- Evidence: `def-p-blocks-by-primitive-central-idempotents` permits block idempotents in either `OG` or `kG`, but the definition immediately formed `kGb`, `bZ(kG)`, and right multiplication by `b` without choosing the residue-field branch. The construction was therefore ill-typed as written for an `OG` idempotent.
- Repair: fixed `b` explicitly as a primitive central idempotent of `kG` and identified it as the residue-field branch of the cited block definition. The bimodule action and indecomposability argument then type-check.
- Dependencies opened: `def-p-blocks-by-primitive-central-idempotents`, `def-splitting-p-modular-system-for-a-finite-group`.
- Sources consulted: none; the exact local definitions and elementary bimodule calculation settle the type issue.
- Post-edit guard: `a8e579d77ff2206d0139640bd4372579ee6425907481fe518907b76fc4dc3867`.
- Validation: render check passed for the item; it has no proof section, so focused precheck examined 0 proof-bearing files and reported 0 failures.
- Rejudge target: yes.

### `thm-uniqueness-of-left-haar-measure-up-to-scale`

- Tuple: `gpt-5.6-terra` / `6a0d40cc383d8e650312a4d07befdd675143b3db3cf96843ca16a2a0bb304620`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `79f9da5ee8ad64e5ba70bb2d4a77648e665d7ab945eabc622bffc371a269f74d`.
- Evidence: [F3] attributed an “inherited cutoff and kernel argument” to `def-axiom-of-choice`, whose interface only states AC; both steps 1.1 and 2.1 cited it. Step 1.1 also used the nontrivial LCH cutoff existence without its exact supplier.
- Repair: replaced the false AC restatement with [A1], added exact dependencies for AC implies DC and the LCH cutoff, and expanded step 1.1’s regularity argument. Step 2.1 now cites only the comparison lemma that supplies its symmetric-kernel estimate.
- Dependencies opened: `def-axiom-of-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set`, `lem-haar-integral-comparison-inequality`, `thm-rmk-uniqueness-among-radon-measures`.
- Sources consulted: none; the exact local interfaces and the displayed regularity argument settle the repair.
- Post-edit guard: `9204849711d5d24b04c764b8f783c79a67ec2ada6fc7ae305be8be17c7a3b008`.
- Validation: focused precheck passed (1 checked, 0 failing). The global dependency check again reported only the unrelated concurrent `published-unaudited` error and existing warnings, with no error for this item.
- Rejudge target: yes.

### `thm-existence-of-a-left-haar-integral`

- Tuple: `gpt-5.6-terra` / `5e6048fa194ab8d5a8c483a1ab4c2e39717693c54b766aaa08247e26dad7d721`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `608a09c4d66457161905d57c954001937bf457243fb89f429ab91ca5a4b69fbb`.
- Evidence: [F3] attributed actual additivity of the selected common point to the asymptotic-additivity lemma, which only controls individual approximants. Actual additivity and all other needed properties are already the exact conclusion of [F2], the candidate-set lemma.
- Repair: removed the redundant, inaccurate [F3] row and direct dependency; step 1.1 now cites [F2] for actual additivity. The AC row is now an assumption [A1] rather than a derived construction claim.
- Dependencies opened: `lem-haar-candidate-sets-have-the-finite-intersection-property`, `lem-haar-covering-functionals-are-asymptotically-additive`, `def-left-haar-integral-and-left-haar-measure`, `def-axiom-of-choice`.
- Sources consulted: none; the exact local statements settle the interface issue, and the positive-cone linear extension was checked directly.
- Post-edit guard: `746d3cde24bed27cd973b526abe86320cb96f326f0c64eef4f13ba150157a00a`.
- Validation: focused precheck passed (1 checked, 0 failing). The global dependency check reported one unrelated concurrent `published-unaudited` error in `prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps` plus existing warnings; it reported no error for this item.
- Rejudge target: yes.

### `lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets`

- Tuple: `gpt-5.6-terra` / `bf929369358212ee6ba3fec3e3f0769cf5cb8e61c33608cc91b7cfcc9d9f977f`.
- Outcome: `confirmed_nonfatal`.
- Current/pre-edit guard: `9b25459f9460483d7859e2646ec261137ccd1f79fa9b20e3e48eb0f42766d50d`.
- Evidence: the cited ratio lemma states `(g:f)<infinity` for nonzero `f`; `def-haar-covering-ratio-of-test-functions` defines the ratio as the infimum of finite translating covers and explicitly sets `inf emptyset=+infinity`. Hence a cover exists by immediate unpacking, and step 1.1 is valid. The local fact row omits that one-line derivation but does not leave a fatal gap.
- Dependencies opened: `lem-haar-covering-ratios-are-finite-and-positive`, `def-haar-covering-ratio-of-test-functions`, `def-left-haar-integral-and-left-haar-measure`, `def-radon-measure-on-an-lch-space`.
- Sources consulted: none; the disposition follows from the exact local definitions and lemma proof.
- Repair/validation/rejudge: no content change permitted or warranted; no rejudge target.

### `ex-normalized-haar-measure-on-a-finite-group`

- Tuple: `gpt-5.6-terra` / `61972e2ab6d40e17f003858d6d7f23eb85cfddbd4429d065c5e4777825a653a5`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `ede2dfc5252f9ea2a01dae5d6becc87b8c8da126274898c263de8423ff087daf`.
- Evidence: [F1] changed the cited corollary’s “compact Hausdorff group” hypothesis to “compact group,” so step 1.1 did not match the exact supplied interface as written.
- Repair: restored the Hausdorff hypothesis in [F1], explicitly verified that the finite discrete topology is compact Hausdorff, and made the AC row an assumption cited exactly where the general AC-dependent uniqueness theorem is invoked.
- Dependencies opened: `cor-normalized-haar-probability-on-a-compact-group`, `ex-counting-measure-as-haar-measure-on-a-discrete-group`, `def-axiom-of-choice`.
- Sources consulted: none; compactness and Hausdorffness of a finite discrete space and the normalized counting calculation are elementary and were checked directly, including the one-element group.
- Post-edit guard: `8987305b0177b17c98cfce8f00753addc864f87ea01b4f8ea3fcd74e89ed4ed3`.
- Validation: focused precheck passed (1 checked, 0 failing), strict proof-contract check passed (0 errors, 0 warnings), and render check passed.
- Rejudge target: yes.

### `ex-haar-measure-on-an-infinite-product-of-compact-groups`

- Tuple: `gpt-5.6-terra` / `2699f5df7e86fffd2d0fdd82ebdfa4410f7c99e2f70ab3b16f7e69ac44c45bfe`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `fdef3435d69e50a2643ca22ab14ee8ea30174508fe0ae90538af81380169e80d`.
- Evidence: [F7] attributed product compactness and Haar existence to `def-axiom-of-choice`, although that item only states AC. Those conclusions are instead the exact interfaces of [F2] (`thm-tychonoff`) and [F1] (`cor-normalized-haar-probability-on-a-compact-group`).
- Repair: replaced [F7] by an accurate AC assumption row [A1] and cited it exactly where step 1.1 invokes the AC-dependent Tychonoff and Haar-existence results; [F1] and [F2] still supply the two conclusions.
- Dependencies opened: `def-axiom-of-choice`, `thm-tychonoff`, `cor-normalized-haar-probability-on-a-compact-group`, `thm-rmk-uniqueness-among-radon-measures`, `def-radon-measure-on-an-lch-space`, `thm-product-universal-property`, `thm-compactness-under-continuous-maps`.
- Sources consulted: none; the decision follows from the exact local dependency interfaces. The finite-marginal and cylinder calculations were also checked directly, including the empty-index and empty-cylinder cases.
- Post-edit guard: `c2704c0b34cd5d32c93ad74f0f23adba7fb0c95e510b116fb79802be723645ec`.
- Validation: focused precheck passed (1 checked, 0 failing), strict proof-contract check passed (0 errors, 0 warnings), and render check passed.
- Rejudge target: yes.

### `cor-normalized-haar-probability-on-a-compact-group`

- Tuple: `gpt-5.6-terra` / `3a2be3aa0f73228780001f662417500f1193e7aab2a75b5199ead3072032ca2b`
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `4ddb364385e7fecd5ed5f9835c47465b587266033d0d015afd877fa32c628d07`.
- Evidence: [F4] falsely attributed an “inheritance” claim to `def-axiom-of-choice`, whose exact interface only states AC. Step 1.1 cited that false row.
- Repair: replaced [F4] by an accurate assumption row [A1] and cited it at step 1.1's invocation of AC-dependent Haar existence. The explicit AC dependency remains because the statement and upstream Haar existence/uniqueness are choice-scoped.
- Dependencies opened: `def-axiom-of-choice`, `cor-existence-of-left-and-right-haar-measures`, `lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets`, `thm-uniqueness-of-left-haar-measure-up-to-scale`.
- Sources consulted: none; the decision follows from the exact local dependency interfaces and the elementary normalization argument.
- Post-edit guard: `3e4bd780bf51ae3d7100a2673bafe485e12aac29b5226c87cec7c7136dbe100e`.
- Validation: focused precheck passed (1 checked, 0 failing), strict proof-contract check passed (0 errors, 0 warnings), and render check passed.
- Rejudge target: yes.

### `ex-a-symmetrizable-indefinite-rank-two-gcm`

- Tuple: `gpt-5.6-terra` / `91f6bced4f4fdb93a8eaca43d38e27533e1930a0e9886d4e3b1d6853006bc629`.
- Outcome: `false_positive`.
- Current/pre-edit guard: `14895e81bf3dce51a3e5accfa1643e2f2282e2311d450daa05b5f2c12847c831`.
- Evidence: “finite symmetrizable GCM” in the cited Serre theorem means a GCM with a finite index set, not a finite-type GCM. The page convention fixes every GCM index set as `I={1,...,n}`; the displayed matrix is `2` by `2`, symmetric, and therefore symmetrizable with `D=I`. The theorem's separate positive-half presentation applies to indefinite matrices satisfying those hypotheses. Its Serre generators have heights five, so their homogeneous ideal has no height-two component and cannot kill `[e_1,e_2]`.
- Dependencies opened: `def-generalized-cartan-matrix`, `def-symmetrizable-generalized-cartan-matrix`, `thm-serre-presentation-of-a-kac-moody-algebra`, `thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra`, `def-real-and-imaginary-kac-moody-roots`, `thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms`.
- Sources consulted: none; the exact local finite-index convention and theorem hypotheses resolve the objection.
- Repair/validation/rejudge: no content change permitted or warranted; no rejudge target.

### `lem-nonsingular-indecomposable-kac-moody-algebras-are-simple`

- Tuple: `gpt-5.6-terra` / `8c3f5a47dc0a8f21eb8943044662f9888ccbab3b9d0053a716912873355e6451`.
- Outcome: `confirmed_nonfatal`.
- Current/pre-edit guard: `124343d2ce91083c62cf7a25eec9064f0926fee47d2fda409f15e13f902983d1`.
- Evidence: [F3] by itself states the Cartan-dimension formula for a minimal realization, so the step's citation locator is compressed. The construction chain supplies the omitted link: `def-contragredient-lie-algebra-before-the-maximal-ideal-quotient` explicitly fixes a minimal realization, and `def-kac-moody-algebra-associated-to-a-gcm` defines `g(A)` as the quotient of that contragredient algebra while retaining its Cartan. Therefore `det A != 0` gives `rank A=n` and `dim h=2n-rank A=n` exactly as used. The remaining ideal-propagation argument is valid: indecomposability makes the finite adjacency graph connected, and the nonzero brackets propagate all simple generators into the ideal.
- Dependencies opened: `def-realization-of-a-generalized-cartan-matrix`, `prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism`, `def-contragredient-lie-algebra-before-the-maximal-ideal-quotient`, `prop-contragredient-algebra-has-a-triangular-decomposition`, `lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h`, `def-kac-moody-algebra-associated-to-a-gcm`, `prop-kac-moody-root-spaces-are-finite-dimensional`, `def-generalized-cartan-matrix`.
- Sources consulted: none; the exact local construction chain resolves the hypothesis and the proof is elementary after that link.
- Repair/validation/rejudge: no content change permitted or warranted; no rejudge target.

### `lem-pbw-for-countably-presented-kac-moody-lie-algebras`

- Tuple: `gpt-5.6-terra` / `c68458f8c1305f58e1d07fb0a30a847c195fe5735fc2a84bad09b0f4d2f5cc7d`.
- Outcome: `confirmed_fatal` (`logic`).
- Pre-edit guard: `1c4a2de8a45f4c410df8cdf13e39bc826169f30ff9daa022dce3debfb6a49bd3`.
- Evidence: step 4.1 asserted that a homogeneous component arising from a countably infinite basis is spanned by finitely many bracket words. Degree one is already infinite-dimensional in the material countercase, so row reduction on a purported finite-dimensional whole component did not establish the stated choice-free compatible-basis consequence. The ordered-word PBW normal form in steps 1.1–3.1 is unaffected.
- Repair: replaced only step 4.1 by a finite-coordinate exhaustion. For a countable ordered component basis `(b_r)`, the spaces `E_r=span(b_0,...,b_r)` and `W_r=W intersect E_r` are finite-dimensional and exhaust the component and specified subspace. Their dimensions rise by at most one; normalizing the new coordinate and eliminating old pivot columns gives a unique new vector whenever the dimension rises. The union is a basis of `W`, scanning the ambient basis extends it, and the complementary images give a quotient basis. Applying the fixed construction degree by degree requires no family of choices.
- Dependencies opened: `def-universal-enveloping-algebra-as-a-tensor-quotient` and every owned consumer found by direct search: `lem-free-lie-construction-for-finite-kac-moody-generators`, `def-kac-moody-verma-module`, `lem-bounded-above-kac-moody-weight-modules-are-generated-by-primitive-vectors`, `lem-enveloping-quotient-kernels-and-augmentation-intersections`, `thm-serre-presentation-of-a-kac-moody-algebra`. The repair preserves their PBW injectivity, spanning, and compatible-basis interfaces.
- Sources consulted: none; the countercase and repaired exhaustion are elementary linear algebra, and the only cited dependency supplies exactly the tensor-quotient relations used by the unchanged PBW proof.
- Post-edit guard: `aa71de2af20d73a1c5f78ea1c882aba04e8a2f48848d3ba18dd5bb51152c376b`.
- Validation: focused precheck passed (1 checked, 0 failing), strict proof-contract check passed (0 errors, 0 warnings), and render check passed.
- Rejudge target: yes.

### `lem-serre-elements-vanish-before-serre-generation`

- Tuple: `gpt-5.6-terra` / `0915247382f685946dbbe63134b408b59b3f2b6d2df543e712b8b6b63f952684`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `f0285d339272e432f0c8cd3a21becb93bd288a526d3a9bfb1b6d292b82d51efa`.
- Evidence: [F2] claimed that the root-space proposition makes the full simple triples nonzero, whereas that proposition's statement identifies the `+/- alpha_i` spaces and excludes other multiples on the simple-root line; it does not state nonzeroness of every `h_i`. The cited material was unnecessary: the proof uses only the defining generator relations, their descent to the quotient, and the quotient's sign-changing involution.
- Repair: removed the inaccurate root-space dependency. New exact [F2] cites `def-kac-moody-algebra-associated-to-a-gcm` for the quotient, retained generator names, and descending involution; [F3] cites `def-contragredient-lie-algebra-before-the-maximal-ideal-quotient` for the generator relations. Steps 1.1–3.1 now cite those interfaces at each use. The adjoint calculation and centralizer argument are otherwise unchanged.
- Dependencies opened: `prop-kac-moody-root-spaces-are-finite-dimensional`, `lem-kac-moody-opposite-simple-centralizer-vanishes`, `def-kac-moody-algebra-associated-to-a-gcm`, `def-contragredient-lie-algebra-before-the-maximal-ideal-quotient`.
- Sources consulted: none; the exact local definitions and a direct verification of the adjoint identity resolve the repair. The exponent-one boundary uses `a_ij=0` iff `a_ji=0`, and the rank-one case is vacuous because there is no pair `i != j`.
- Post-edit guard: `450ef8256b0d288184ac52727e6fcafdc0abaa2cb34695ce778ba551d60f8397`.
- Validation: focused precheck passed (1 checked, 0 failing), strict proof-contract check passed (0 errors, 0 warnings), and render check passed.
- Rejudge target: yes.

### `prop-kac-moody-root-spaces-are-finite-dimensional`

- Tuple: `gpt-5.6-terra` / `1e9e60e432d305892ee6b46f197c32b7452baa422bc1f7909a1050f727e3cf7e`.
- Outcome: `confirmed_nonfatal`.
- Current/pre-edit guard: `680b0d0dbdecbcb844aa3020ecbe044967c87533ca47065a848b676c76313415`.
- Evidence: [F1] compresses a transitive construction, but the exact cited Kac–Moody definition says that `g(A)` is the quotient by the largest Cartan-disjoint ideal constructed in `lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h` and immediately uses its `r^+` and `r^-` pieces. That construction lemma's statement explicitly proves that every ideal is `Q`-graded, that `r` has zero Cartan intersection, and that `r=r^- direct-sum r^+`. Thus quotienting componentwise in step 1.1 is valid. The finite-dimensional bound then follows from the `n^m` right-nested words of height `m`, and the simple-root spaces follow from one-generator freeness and Cartan injectivity.
- Dependencies opened: `def-kac-moody-algebra-associated-to-a-gcm`, `lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h`, `prop-contragredient-algebra-has-a-triangular-decomposition`, `def-realization-of-a-generalized-cartan-matrix`.
- Sources consulted: none; the exact local construction and its proof settle the grading and splitting.
- Repair/validation/rejudge: no content change permitted or warranted; no rejudge target.

### `thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms`

- Tuple: `gpt-5.6-terra` / `dd2285a73913ef2f16dd19fc333c627146775615f20f6618a75f3625598a410f`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `11f963b8b8a56ce31f3887130bec3b9c678b40ad619c3fddf5a6879d76827017`.
- Evidence: [F3] dropped the strict linear alternative's essential cone hypothesis and therefore read as an unconditional assertion that a positive vector has negative image; finite GCMs are immediate counterexamples. The proof itself is sound: before contraposition it rules out such a negative image, and before the direct application it proves that the only nonnegative `u` with `A^t u>=0` is zero.
- Repair: restored the complete conditional hypothesis in [F3] and the corresponding proof-contract quotation. No proof step changed. All three cone alternatives, transpose invariance, the finite/affine symmetrization construction, the singleton case, and the quadratic-form converses were checked.
- Dependencies opened: `lem-strict-linear-alternative-for-gcm-trichotomy`, `def-generalized-cartan-matrix`, `def-symmetrizable-generalized-cartan-matrix`.
- Sources consulted: none; the exact local linear-alternative statement and the theorem's explicit cone argument settle the issue.
- Post-edit guard: `3bb5a0360dec37e9c4517f10b877e82983ed1e862d861298de22a87355b2feac`.
- Validation: focused precheck passed (1 checked, 0 failing), strict proof-contract check passed (0 errors, 0 warnings), and render check passed.
- Rejudge target: yes.

## Alerts

None.

## Group checks and handoff

- All 23 exact group-e rejection tuples have durable decisions: 14 `confirmed_fatal`, 4 `confirmed_nonfatal`, and 5 `false_positive`.
- Every one of the 14 licensed repairs completed its engine-managed item handoff with one completed rejudge cycle. Twelve were accepted by that rejudge; `thm-maximal-brauer-pairs-exist-and-are-conjugate` and `ex-haar-measure-on-an-infinite-product-of-compact-groups` received terminal `accepted-after-review` resolutions after their rejudge objections were independently rejected. No second repair cycle was initiated.
- The earlier block-bimodule definition repair changed its exact wording. The three stale quotations in the owned batch-10 proof contract were synchronized to current exact excerpts; no consumer content changed. Six owned manifest dependency arrays affected by licensed repairs were also reconciled with their current item frontmatter, leaving 0 group-e manifest dependency mismatches.
- Full strict proof-contract validation: batch 10 has 0 errors and one existing `shotgun-bracket` warning on `lem-block-defect-is-an-intersection-of-two-sylow-subgroups`; batch 11 has 0 errors and 0 warnings. Both contracts, both owned page manifests, and the refreshed unified dependency ledger parse as JSON. Manifest integrity reports all 50 owed pages present, with 0 missing and 0 added. Focused `git diff --check` over the owned repairs, manifests, contracts, and this report is clean.
- The dependency-ledger refresh required after the same-batch Serre dependency replacement completed successfully; no batch input row changed because no cross-batch edge was added or removed.
- Final `step7-scope --check`: passed with 8 groups, 760 partitioned items, 10 currently routed rejections, and 3/3 warning/alert dispositions.
- Final Step-7 guard: passed with 76 changed items, all 76 licensed by a fatal decision or terminal resolution, and 0 errors / 0 warnings.
- Supplementary whole-run defect-ledger check: 99 defect rows checked, 0 errors.

## Next action

Group e has no remaining item handoff or adjudication. The engine may complete this group; whole-run closure remains with the other groups and the serial lead.
