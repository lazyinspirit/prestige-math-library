# Step 7 adjudication — group e

Run: `phase-2-next-20`  
Batches: 7, 8, 9  
Status: complete; awaiting the engine-owned rejudge and run-wide closure

## Adjudications

### `cor-field-kunneth-isomorphism-for-homology-of-products`

- Rejection tuple: `gpt-5.6-terra`; context `ab5c1846ff857d1996ee76211e23c120b918a002fc93e494f598347da8c6c1dd`.
- Pre-edit guard: `180db3c7f7ebcb7c24e21f2360436d37d65c3aeb4592773b375da651c20112ef`.
- Outcome: `false_positive`.
- Decision: F3 gives an exact locator, not a bare attribution. The opened supplier `lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel`, proof step 1.1, explicitly derives the required AC-to-DC implication and applies balanced Tor to the supplied length-one free resolutions. The consumer additionally supplies its degree-zero resolution. The challenged use is licensed exactly as written.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `def-fibration-connecting-homomorphism`

- Rejection tuple: `gpt-5.6-terra`; context `1770d904e8363a530407ae0c1641669dea837ef02c6c9518c4c7ca5a620d85b7`.
- Pre-edit guard: `6c42f464c57b6581dbdebf74f14b06611e7277087b614f6d08151a9c69ec9352`.
- Outcome: `confirmed_fatal`; defect type `other`.
- Decision: the unqualified title calls the construction a homomorphism while the definition includes degree one, whose target is the pointed set $\pi_0(F)$ and for which the item expressly assumes no group structure. This is a false title, not a merely omitted proof step.
- Repair: changed the display title to “Fibration connecting map”; preserved the established item id and the complete degreewise construction. Synchronized the title mirror in the batch-8 page manifest.
- Post-edit guard: `a0b6e4750b914c123dfe2645df138161476be149b61cf32025654226c7334a64`.
- Focused checks: item/page `rendercheck` passed; batch-8 `content-policy` passed with 58 scoped items and no errors or warnings.
- Defect ledger: `phase-2-next-20-A7-e-001` (`false-or-overstrong-title`).
- Rejudge target: yes.

### `def-levi-civita-connection`

- Rejection tuple: `gpt-5.6-terra`; context `56eba807158ede48d312d6a3439628bc82d18787aaabf1e036a2f442ac3f48fa`.
- Pre-edit guard: `1a1c8b47643969a1f88f72a0355a38afdfe98eb881f9436233192651f200933e`.
- Outcome: `confirmed_nonfatal`.
- Decision: “proved below” is accurate page navigation. The page immediately follows this definition with the Koszul necessity lemma, the Koszul construction theorem, and `thm-fundamental-theorem-of-riemannian-geometry`; the opened proof of that theorem establishes metric compatibility, torsion freeness, and uniqueness. The absence of the theorem id in the navigational sentence is at most an immediately closable citation/presentation gap, not a false definition or unsupported result.
- Repair, checks, and rejudge: none under the fatal-only rule.

### `def-vector-field-and-section-along-a-smooth-curve`

- Rejection tuple: `gpt-5.6-terra`; context `19a039e72ef8d39c7b87a0f33f49fcf4c5f93c6a4f045d783d4d49e5f89b498f`.
- Pre-edit guard: `ed3d970e928554a01d29342eff8878f0f1843ad9ed8d8a0463474d37ec77b9fb`.
- Outcome: `confirmed_fatal`; defect type `other`.
- Decision: the original definition used both $E$ and $\pi$ in $\gamma^*E$ and $\pi(V(t))=\gamma(t)$ without binding either symbol, so the construction was ill-typed as written.
- Repair: added the missing opening hypothesis “Let $\pi:E\to M$ be a smooth vector bundle.” Synchronized the exact statement mirror in the batch-9 page manifest.
- Post-edit guard: `0fa8ff275fff64ce91afeeae606644e195853d7ce739cff05fe9975d5b17f3df`.
- Focused checks: item/page `rendercheck` passed; batch-9 `content-policy` passed with 102 scoped items and no errors or warnings.
- Defect ledger: `phase-2-next-20-A7-e-002` (`ill-typed-construction`).
- Rejudge target: yes.

### `ex-a-finite-chain-needing-different-subdivision-depths-on-its-simplices`

- Rejection tuple: `gpt-5.6-terra`; context `f18785cb01ac02f59a23b8157497092f00490b0b00449756bc20c7e99faea0a5`.
- Pre-edit guard: `8f61661619830bc8db2db41d622154376bd0823f9be8f6b29dbf7417c8f047f0`.
- Outcome: `confirmed_nonfatal`.
- Decision: the proposition’s Statement asserts preservation rather than the affine-piece description, so F1 should ideally include the proof-step locator. But the example also directly declares `def-barycentric-subdivision-chain-operator`; F2 gives the explicit one-dimensional halves, and the opened proposition proves in step 1.1 that all subdivision terms arise by affine domain maps. The displayed halves directly verify smallness and least depth. This is an immediately closable locator gap, not a false example or unsupported inference.
- Repair and rejudge: none under the fatal-only rule.

### `ex-christoffel-symbols-in-polar-coordinates`

- Rejection tuple: `gpt-5.6-terra`; context `c0ca5e60adea683cba594fa9c5e67e82759391a50bb453d1fc3eb633acbe699b`.
- Pre-edit guard: `fe09466a2661d7268265d6e18ebecf3911d801b88e698d9f4e292bfd361ebb55`.
- Outcome: `confirmed_fatal`; defect type `logic`.
- Decision: step 2.1’s explanation is false as written. The derivative $\partial_rg_{\theta\theta}=2r$ occurs in the summed formulas for the two mixed upper-$r$ symbols and for $\Gamma^\theta{}_{\theta\theta}$; those contributions vanish because the relevant inverse-metric entries are zero, not because every appearing derivative is zero.
- Repair: replaced the false explanation with the explicit diagonal inverse-metric calculation and synchronized the exact step claim in the batch-9 proof contract.
- Post-edit guard: `ffa228e900aea453586c22a33060fd7b8591ae9e33f0b6fb9ae20d45ade154ff`.
- Focused checks: proof `precheck`, item `rendercheck`, and strict item-scoped batch-9 proof-contract check all passed.
- Defect ledger: `phase-2-next-20-A7-e-003` (`false-claim`).
- Rejudge target: yes.

### `ex-cohomology-of-lens-spaces-from-uct`

- Rejection tuple: `gpt-5.6-terra`; context `708fd8ec9c4fbbf3977350af3251ddbd8b0c792834a14d9e36dcda1f98074a0a`.
- Pre-edit guard: `aeefcc051fc8e3d1c383047782634cfabc105ecbeb5ba507534218031957c14f`.
- Outcome: `confirmed_nonfatal`.
- Decision: the supplier’s Statement gives the torsion/free-rank consequence rather than spelling out Hom and Ext. Its opened proof steps 1.1–1.2 nevertheless compute $\operatorname{Hom}(\mathbb Z/m,\mathbb Z)=0$, $\operatorname{Ext}^1(\mathbb Z/m,\mathbb Z)=\mathbb Z/m$, and zero Ext for $\mathbb Z$ from explicit free resolutions—the exact cases used here. Moreover, the example’s additive group conclusions follow directly from the supplier’s stated torsion/rank interface. F3 lacks an exact proof-step locator, but there is no mathematical gap.
- Repair and rejudge: none under the fatal-only rule.

### `ex-integral-cohomology-of-real-projective-space-from-uct`

- Rejection tuple: `gpt-5.6-terra`; context `3b51d67ec482131cff2567fdd0b71a457c71c2b3207ce34da456ddd8231db76f`.
- Pre-edit guard: `e8825d5b4dbc95030afcf70cc7ab494221400f36e9f3af758c1f2e5806470c6c`.
- Outcome: `confirmed_nonfatal`.
- Decision: the cited corollary’s Statement gives torsion and free rank, while its opened proof steps 1.1–1.2 explicitly compute all four Hom/Ext values quoted in F2 from the relevant free resolutions. These apply exactly to the adjacent homology groups here, and the example’s displayed groups also follow directly from the supplier’s stated torsion/rank conclusion. The missing proof-step locator is nonfatal citation precision.
- Repair and rejudge: none under the fatal-only rule.

### `ex-pullback-of-the-flat-connection`

- Rejection tuple: `gpt-5.6-terra`; context `c0e637aa11fcf6545250f67e073a9112f4ddbef434836bb029488348be842693`.
- Pre-edit guard: `ca75edf3ace63fe2b0f1540d87dfac4082b6d478282703c44c917eb462ee6899`.
- Outcome: `confirmed_nonfatal`.
- Decision: the theorem’s displayed formula is restricted to pulled-back sections, but its opened proof step 1.1 establishes the pulled-back connection-matrix prescription, and its declared defining item states that prescription for arbitrary coefficient columns. The example itself identifies the canonical product frame and substitutes the zero matrix, so the componentwise derivative follows immediately. F1 should ideally name the proof/definition locator, but the computation is correct and the bridge is elementary.
- Repair and rejudge: none under the fatal-only rule.

### `ex-relative-smoothing-fixes-the-endpoints-of-a-path`

- Rejection tuple: `gpt-5.6-terra`; context `b2c243546dc5e81cf4c0ad92e4806388fb3ddfb2cc2c88b6e8322cf72a569f30`.
- Pre-edit guard: `a2ff2537eebaa8d17ca120614ca20b24f7686137fac2e2dbe709e43fa040aaf5`.
- Outcome: `false_positive`.
- Decision: step 2.1 is expressly an explanation of the opened supplier’s proof, not an extra hypothesis imposed on its Statement. That proof constructs the boundary-neighbourhood extension in steps 1.1 and 4.1 and then applies relative Whitney approximation in step 5.1. In dimension one, the supplier’s face-extension lemma step 6.1 handles the two endpoint values. The consumer accurately describes those two stages and uses the supplier’s stated conclusion in its actual smoothing step.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `fs-direct-sum-and-product-totalisations-are-always-isomorphic`

- Rejection tuple: `gpt-5.6-terra`; context `c499a53a7ac279b010fe6922b5356e863b70a28e7901a07b14d967a4de4b23bd`.
- Pre-edit guard: `ebc000d22dd67d31a5b30c1d50fa62241e904979302817093f740858ddf1a76a`.
- Outcome: `false_positive`.
- Decision: the rejection mistakes the counterexample item’s “Statement refuted” section for its asserted interface. The opened counterexample supplies exactly the infinite-diagonal $\mathbb Z/2$ witness in its Given block and proves that the direct sum is countable while the product is uncountable. This false-statement item repeats the witness and also directly cites the sequence-group lemma. The refutation is fully licensed.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `fs-every-exact-couple-is-a-long-exact-sequence-with-no-extra-grading-data`

- Rejection tuple: `gpt-5.6-terra`; context `6c893fd9ef16ed71ad36d841dfea4d9273814dcf31b8526237649b977f44b810`.
- Pre-edit guard: `bbe46750db5dc6020e17054eb0a6fe445215f1a67350e9e4a664740dbab7f01b`.
- Outcome: `confirmed_fatal`; defect type `logic`.
- Decision: the original step 2.1 showed only that one arbitrary concentrated placement was incompatible with the required degree of $i$. That does not prove nonuniqueness or non-determination, because the same ungraded triangle does admit compatible bigradings.
- Repair: for each $c\in\{0,1\}$ the revised refutation places $\mathbb Z$ and $\mathbb Z/2$ on the diagonal $p+q=c$, checks every exact-couple degree and exactness condition, and observes that the two different $E^1$ supports forget to the same ungraded periodic sequence. Synchronized the batch-7 manifest strategy and exact proof-contract derivation/boundary rows.
- Post-edit guard: `5a647f5c40724078ce3ed8be9890316600402c68806bf4d9ba1663ff68d2caa7`.
- Focused checks: proof `precheck`, item `rendercheck`, strict item-scoped batch-7 proof-contract check, and batch-7 `content-policy` all passed.
- Defect ledger: `phase-2-next-20-A7-e-004` (`invalid-refutation`).
- Rejudge target: yes.

### `fs-one-fixed-number-of-barycentric-subdivisions-makes-every-singular-simplex-cover-small`

- Rejection tuple: `gpt-5.6-terra`; context `a7246e8d59137f9da7b8dbd7566f10c868e39ad3564ae2530d0cb4527bbc3f10`.
- Pre-edit guard: `0d24844819f226d3a7e075f076a3b151e227fcc4a8b2ce58373181908fe0c232`.
- Outcome: `false_positive`.
- Decision: the item directly depends on the subdivision definition, and step 1.1 derives the affine dyadic pieces by induction from its recursive affine-cone formula. The opened preservation proposition also proves in step 1.1 that every subdivision simplex is obtained by an affine domain map. Thus the alleged premise is both locally derived and present in the cited dependency proof; the sine witnesses and noncancellation calculation are valid.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `fs-parallel-transport-depends-only-on-the-endpoints-of-a-curve`

- Rejection tuple: `gpt-5.6-terra`; context `b4e0efef391057e9ad101e33f46e347cdb47de3e292289d6a2396bf07136b01b`.
- Pre-edit guard: `a54a620dcff895d8a6d9d2fac98007e38a417bc94bac2bc9390844d60c9b4eef`.
- Outcome: `confirmed_nonfatal`.
- Decision: the proposition’s Statement includes constant pauses rather than a standalone constant-curve clause, but its opened proof step 2.1 explicitly says constant pieces have identity transport. Independently, F2 makes the constant-loop equation $v'=0$ because its velocity is zero. The comparison with the constant loop is correct; only a proof-step locator is omitted.
- Repair and rejudge: none under the fatal-only rule.

### `lem-a-bundle-connection-is-local-and-restricts-to-open-sets`

- Rejection tuple: `gpt-5.6-terra`; context `0f4545585592d5d57ae24f16da2bfa7e7945df369e2a48795f6c2f53467fe4f7`.
- Pre-edit guard: `93d8288f5f6930232b460b35f993dc298a8b71d6f33a046c3f4752619bbe18d1`.
- Outcome: `false_positive`.
- Decision: F1 does not attribute plateau cutoffs to the displayed directional laws alone; it explicitly names the converse proof. The opened supplier proof step 1.2 constructs exactly a cutoff supported in a prescribed neighbourhood and equal to one on a smaller neighbourhood, including boundary and zero-dimensional charts. The consumer uses that construction exactly.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `lem-compatible-smooth-simplex-faces-have-a-neighbourhood-extension`

- Rejection tuple: `gpt-5.6-terra`; context `b7d291c7ed05a2ae720f2032d36a147cf6a03bcfd1e5b140edc416f31b6ab558`.
- Pre-edit guard: `8937589500f2945e50068f3d1144915833c23fedbd4d0367ca0e05fe92021a72`.
- Outcome: `false_positive`.
- Decision: F2 cites the Whitney theorem at the exact proof locator “Proof 1.1–6.1,” rather than claiming that its displayed approximation statement contains the auxiliary data. The opened proof constructs a proper smooth embedding $j$, proves its image is an embedded closed submanifold, constructs an open normal neighbourhood $U$ and smooth retraction $R:U\to j(N)$ fixing the image, and identifies the smooth inverse. Step 5.1 uses exactly these proved data. The citation is therefore accurate and load-bearing support is present.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `lem-relative-smoothing-of-a-continuous-simplex-along-its-faces`

- Rejection tuple: `gpt-5.6-terra`; context `8776f4337aa28053b199506516f845d5bff364c0e751c1b560384460f7d04adc`.
- Pre-edit guard: `1260a99266a196ccf3c0932dcff036049e0cf695d4a02e4e3d079fa60c664c24`.
- Outcome: `false_positive`.
- Decision: F4 gives the exact proof locator “Proof 1.1–6.1” in the Whitney theorem. That opened proof constructs the embedding, its embedded closed image and smooth inverse, and the ambient neighbourhood retraction. The relative Whitney theorem independently restates and uses those same proved auxiliary data in L1 and proof steps 1.1–4.1. The consumer’s steps 3.1–4.1 use precisely this construction, so no interface is overstated.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace`

- Rejection tuple: `gpt-5.6-terra`; context `88cef91b30f154c1ef6391f6793658176896f8179820184d87ca43e4292c7590`.
- Pre-edit guard: `7ff3b81e0c73fd2f479204f386ab3490376bb27ada851f7fc5c45307617f0cc8`.
- Outcome: `false_positive`.
- Decision: F2 expressly locates the NDR construction in the supplier’s proof steps 1.2–2.1. The opened supplier starts from the strip retraction for a closed cofibration, defines continuous $u$ and $h$, proves $u^{-1}(0)=A$, proves $h$ fixes $A$, and proves $h(x,1)\in A$ when $u(x)<1$. Those are exactly the data and hypotheses used in steps 1.3–3.1. The rejection considers only the supplier’s displayed Statement and overlooks the exact cited proof passage.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `prop-collapse-with-projective-associated-graded-pieces-splits-the-finite-filtration-noncanonically`

- Rejection tuple: `gpt-5.6-terra`; context `2c9ffe1142494c5d207a56c7310748911162901331ab9111c6c247e664bd1c57`.
- Pre-edit guard: `5617dd24609ee914e42794e3817da2112d5a25651b716f9f99d2758cc4c587cb`.
- Outcome: `confirmed_fatal`; defect type `logic`.
- Decision: weak convergence explicitly supplies neither finiteness nor even separatedness of the target filtration. The first sentence and splitting proof assume a finite filtration, but the original spectral-sequence corollary did not unambiguously impose that load-bearing hypothesis; finitely many nonzero limiting terms would not suffice because a nonseparated tail may remain invisible.
- Repair: required the collapsed convergent spectral sequence’s target filtration itself to be finite and its graded target pieces to be projective; made proof step 3.1 explicit that finiteness is assumed rather than derived from convergence or collapse. Synchronized the page-manifest statement and proof-contract derivation.
- Post-edit guard: `5def88906a79608b3cc52a9e162f3edbe40c8361cfafdc05346b3739edd0597a`.
- Focused checks: proof `precheck`, item/page `rendercheck`, and strict item-scoped batch-7 proof-contract check all passed.
- Defect ledger: `phase-2-next-20-A7-e-005` (`missing-hypothesis`).
- Rejudge target: yes.

### `prop-levi-civita-connection-commutes-with-musical-isomorphisms`

- Rejection tuple: `gpt-5.6-terra`; context `429aa27eb8ee244fedda33bb7fe3f658b4d7520b899098f758f74651f9a7107c`.
- Pre-edit guard: `7a548425fad59f92c2cbda98b23325a7a91d0b1a9833db9d7090c8a23ea5cf42`.
- Outcome: `confirmed_nonfatal`.
- Decision: the theorem’s displayed Statement says only that the musical maps are smooth inverse bundle isomorphisms, so F3 should ideally cite its defining dependency or the theorem’s F1. The opened theorem’s Facts block, however, states the defining characterization $g(\alpha^\sharp,v)=\alpha(v)$ verbatim from `def-musical-isomorphisms`, and its proof uses that characterization. The proposition’s one-line calculation is correct and the missing exact sublocator is an immediately closable citation gap, not a false claim or missing mathematical argument.
- Repair and rejudge: none under the fatal-only rule.

### `prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume`

- Rejection tuple: `gpt-5.6-terra`; context `2667580acf238e74751deaba4a6fe795a070039a1437d546c47b7bbd548eedde`.
- Pre-edit guard: `c0483f04c5376417ffe2dc6039e8832555bebd737e91efaa78e330fd32c2d755`.
- Outcome: `false_positive`.
- Decision: the supplied theorem states that the constructed connection is Levi–Civita. By the library’s defining item, which the theorem directly declares and quotes as F3, “Levi–Civita” means metric compatible and torsion free. The theorem’s proof step 1.1 also proves the metric-compatibility identity explicitly. F1 merely unfolds the defined term, so the premise needed to invoke F2 is fully licensed.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `prop-local-frame-formula-for-covariant-differentiation-along-a-curve`

- Rejection tuple: `gpt-5.6-terra`; context `a43b8af82704e53404347a743fcad8d73efa34cb047ec068a2ca272f9a134ceb`.
- Pre-edit guard: `c30736024b2cb61481d7b3c25e3be05268ec60a9837a6b9bee8d6daf2eed88a2`.
- Outcome: `confirmed_nonfatal`.
- Decision: the theorem’s displayed Statement emphasizes frame independence and agreement with extensions, but its opened F1 explicitly gives $D_t=(\gamma^*\nabla)_{\partial_t}$ from the defining item, and its proof step 1.1 uses that intrinsic definition. More importantly, this proposition directly cites `def-pullback-connection`, whose displayed definition gives the formula for arbitrary coefficient columns. Applying it to $f=\gamma$ and $X=\partial_t$ yields step 1.1 immediately. F1 is imprecise shorthand, but the proof is fully supported by F2 and the opened defining chain.
- Repair and rejudge: none under the fatal-only rule.

### `prop-the-cohomology-universal-coefficient-sequence-splits-nonnaturally`

- Rejection tuple: `gpt-5.6-terra`; context `24c9bd6109c8e5a91fe1499c3bfaea7012de86fa09f094af5f25ede7f26da8bf`.
- Pre-edit guard: `3b46b499ee49de181fbc35905200cb4591d9d91b83144a4920bb2e3a64312174`.
- Outcome: `false_positive`.
- Decision: the opened supplier’s F1 defines the cycle projection $\pi_n(c)=c-s_nd_nc$, and proof step 2.2 proves verbatim that $u\mapsto[uq\pi_n]$ is a cocycle-valued linear construction with evaluation $u$. Its Statement records the resulting surjectivity rather than the chosen section, but the consumer cites the entire proved lemma and accurately reports its construction. Step 1.1 is fully licensed.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `prop-the-exact-couple-and-subquotient-constructions-of-the-filtered-complex-spectral-sequence-agree`

- Rejection tuple: `gpt-5.6-terra`; context `ba3c66c314085d3f323bd012af647b744b791315765f5cbd11ea1b9c3759b4ce`.
- Pre-edit guard: `44c08221e4f1b8d53dae5b40dd831423090a21393ec8c5d717b0917ecefc09d3`.
- Outcome: `false_positive`.
- Decision: the opened exact-couple theorem does supply the allegedly absent transition construction. Its proof step 1.1 constructs the repeated derived couples with the homology identifications required by the spectral-sequence definition; steps 3.1–4.1 identify the next homology quotient by inclusion of the next numerator and prove compatibility throughout the iteration; step 5.1 records the specified canonical transitions. The filtered next-page theorem likewise defines its isomorphism as the inverse of the inclusion-induced map. This proposition’s step 5.1 compares exactly those two constructions.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `prop-the-homology-kunneth-sequence-splits-nonnaturally`

- Rejection tuple: `gpt-5.6-terra`; context `23ece2a9441a4352406b4536dcb52e0ff96c391751863cc88655b607cc9759ef`.
- Pre-edit guard: `4144bf3f9cbf6d1df892923634aed23fedf2de0caa489e48291079c1c6c2eab7`.
- Outcome: `false_positive`.
- Decision: the opened topological Künneth theorem explicitly defines $s=S_*$ and its inverse $t=T_*$ in proof step 1.2, then sets $\gamma=\beta t$ there and defines the left arrow as $s\alpha$ in step 2.1, identifying it with the singular cross product. F3 cites that theorem as F1 as well as the shuffle equivalence. Thus the transported maps $j'=sj$ and $r'=rt$ are tied to the actual displayed Künneth arrows exactly as claimed.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `prop-the-riemannian-hessian-is-symmetric`

- Rejection tuple: `gpt-5.6-terra`; context `864daff3b955a7db49fe281dbb26ca5c8bcbae6543fb081b52bfec579ff01fd3`.
- Pre-edit guard: `b28fa62ee54ae3298b92e488d4bd3d3031533b1b4a638e46258710f5ca66bcb3`.
- Outcome: `false_positive`.
- Decision: the supplied theorem states existence and uniqueness of a Levi–Civita connection. Its direct defining dependency says that “Levi–Civita” means metric compatible and torsion free, and the theorem’s F3 repeats that definition; moreover proof step 2.1 proves the torsion equation explicitly. F2 therefore licenses exactly the cancellation used in step 1.1 by unfolding the defined term.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `thm-every-smooth-vector-bundle-admits-a-connection`

- Rejection tuple: `gpt-5.6-terra`; context `feb961c34f15d62ce5e28f153b57f5094b8698c5bf69227f55d6e747f09e580e`.
- Pre-edit guard: `729972fe7e644711a0e49715fdec9a742f8ab0d76fde12027c19d8acbe85de41`.
- Outcome: `false_positive`.
- Decision: in the library’s established terminology, a smooth vector bundle has a fixed rank $r\in\mathbb N$, real vector-space fibres, and a smooth-manifold base; the manifold definitions impose Hausdorffness and second countability. Thus “every smooth vector bundle” in the title is precisely the conventional class whose qualifications the Statement spells out, not a broader infinite-rank, complex, or non-Hausdorff class. Allowing boundary broadens rather than narrows that conventional result.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `thm-excision-for-singular-cohomology`

- Rejection tuple: `gpt-5.6-terra`; context `bd7a976481deee2ecf3d34e2072753a1bc06b4a08638c506998cc42b1aac9e84`.
- Pre-edit guard: `cd7bef284f6b921ecbd1a38060ff41ad9387808082e4837ee12a9b12585a6cbd`.
- Outcome: `false_positive`.
- Decision: F1 explicitly says it is using the integral operators in the supplier’s proof. The opened proof defines the least depth $m(\sigma)$ in step 2.1, $D$ and $R$ in step 3.1, and proves in step 4.1 that every small simplex has $m=0$, hence $D|_M=0$, $R|_M=1$, and $1-iR=\partial D+D\partial$. Since every simplex in $A$ is small for the chosen cover, preservation of $C_A$ follows exactly as the consumer proves. This is not an inference from an arbitrary homotopy inverse.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `thm-mayer-vietoris-sequence-in-real-singular-cohomology`

- Rejection tuple: `gpt-5.6-terra`; context `fb1de50b0d5e2ed82cf7d7aa90f95657b02f4515e0500f8f2447023d356bc6de`.
- Pre-edit guard: `3b1e66d4468f68aa8f02054b81f0b9927927d074a21732b9878ca62f64d0a764`.
- Outcome: `false_positive`.
- Decision: the objection would apply to an arbitrary chain-homotopy inverse, but the cited supplier constructs a special inverse. Its proof step 4.1 defines $r=R$ and proves exactly $rI=1$ because its least-depth operator has $D=0$ on already-small chains; it also proves $1-Ir=\partial D+D\partial$. Step 1.1 uses those exact supplier operators, as its wording states, so both cochain identities and the induced isomorphism are licensed.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `thm-naturality-of-singular-mayer-vietoris-connectors`

- Rejection tuple: `gpt-5.6-terra`; context `94006ad1061df9e287c0aa5c1c515f4acda967bb150ace5ff4b264d7e80b55a7`.
- Pre-edit guard: `a925ce4e62f18a47534c4f01a0b0d83c1b738efb04337e40156e427270f173d9`.
- Outcome: `false_positive`.
- Decision: the opened real Mayer–Vietoris theorem does construct the exact small-chain model, its canonical inclusion $I$, the positive lift-differential connector, and the transport isomorphism $\theta=H(I^*)$ in proof steps 1.1–3.1. The naturality theorem cites that proved theorem and then directly constructs the chain/cochain diagram from postcomposition. Its generator identity with the canonical inclusions is elementary and explicit. The rejection again reads only the supplier’s displayed Statement and overlooks the cited proof.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `thm-parallel-transport-is-a-linear-isomorphism`

- Rejection tuple: `gpt-5.6-terra`; context `82e41a5018e8583a5fed965d9bdf342fd10e600b5d806482b524c0dcaccaa1ca`.
- Pre-edit guard: `4edc1a17cc7abe4800534b87ddff6d3026848500fb71c4c34ffffcee7cf9ca72`.
- Outcome: `false_positive`.
- Decision: the opened existence-and-uniqueness theorem’s F1 states that parallel sections solve the local homogeneous linear system, and proof step 1.1 constructs them by solving $v'=-\omega(\dot\gamma)v$ and proves uniqueness from the matrix ODE. Thus the theorem supplies more than its compact displayed Statement: it proves the exact homogeneous equation used for the linear-combination argument. F2 accurately reports that proved fact.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `thm-pullback-connection-is-well-defined-and-functorial`

- Rejection tuple: `gpt-5.6-terra`; context `d8368ac798cc52a6e4bea31d40e097d2044c8923ccc7628ea9d9117041fe5932`.
- Pre-edit guard: `df23d47980f2577f78f49dd737b1a2b9f186cc8c1f0466e3f6019b5c0e578e67`.
- Outcome: `false_positive`.
- Decision: the opened pullback-functoriality proposition’s proof step 2.1 gives the canonical maps explicitly and states that, in pulled-back bundle charts, both are the identity on the fibre coordinate. That is exactly F4 and exactly what is needed to compare the matrices in step 2.1. The terse displayed Statement does not erase the fully proved coordinate description.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `thm-smooth-and-continuous-real-singular-cohomology-agree`

- Rejection tuple: `gpt-5.6-terra`; context `f35b2e04c7a9d58d59ec43b5ef71074c7956f3cb8edc71f662c4aa7c37548df0`.
- Pre-edit guard: `6d7f9e29075fd296431eef84607dadb8ef916d7f0d1f95001830ca235fa502c2`.
- Outcome: `false_positive`.
- Decision: the ordinary real Mayer–Vietoris theorem’s proof steps 1.1–3.1 explicitly construct its actual small-chain inclusion, dual homotopy equivalence, and positive lift-differential connector. The smooth Mayer–Vietoris theorem’s Statement explicitly specifies the same convention and its proof steps 1.1–5.1 construct the smooth small-chain model. Step 1.1 compares these actual constructions generator-by-generator. F1 accurately summarizes the full opened dependencies, and F5 therefore receives the required connector square.
- Repair, checks, and rejudge: no content change is licensed or needed.

### `thm-smooth-singular-mayer-vietoris-sequence`

- Rejection tuple: `gpt-5.6-terra`; context `f8e245b0f490809eae20751040dc3c2874bdf4d40be420b16f6a44bc69a5ce7a`.
- Pre-edit guard: `b2dd48a1826818815d0e08faf1f615ef9de3c4485f89294d5a5d1a3cde3e3d8b`.
- Outcome: `false_positive`.
- Decision: F4 explicitly says it is using the ordinary supplier’s constructed least-subdivision inverse, and the opened supplier proves the entire construction: $1-S=\partial T+T\partial$ in step 1.1, least depths in step 2.1, $D$ and $R$ in step 3.1, and $rI=1$, $1-Ir=\partial D+D\partial$ in step 4.1. This smooth theorem then reconstructs the same operators on the smooth basis and uses the separately cited preservation result. Steps 2–3 are fully licensed.
- Repair, checks, and rejudge: no content change is licensed or needed.

## Sources consulted

No external source was needed. Every disputed point was resolved from the complete current consumer and supplier arguments on disk, including each exact proof passage identified above.

## Reader-warning dispositions

### `s8a-2d69191cac0036a12169946c` — `thm-complete-exhaustive-filtered-complex-convergence-criterion`

- Outcome: `not_defect`.
- Decision: the formal hypothesis is exactly the one used. For degree-$n$ boundary closedness, step 1.2 applies the degree-$(n+1)$ diagonal bound to a primitive $y\in F_sC_{n+1}$ and decreases $s$ finitely until $P_{n+1}$; $t\le P_{n+1}-a_{n+1}$ preserves the $a$-cycle condition at every descent. Step 6.1 uses the same degree-$(n+1)$ diagonal to kill the incoming source $E^r_{p+r,n+1-p-r}$ once $r\ge a_{n+1}$ and $p+r>P_{n+1}$. The proof’s full-AC assumption covers the cited tower lifts and the countable representatives in step 3.2; step 4.1 only needs separate existential approximants to establish membership in each neighbourhood. The internal Delta/tower proof is complete, so no appeal to an unproved correspondence with Weibel is load-bearing.
- Repair and rejudge: none.

### `s8a-8c0272480b676a909ab5128b` — `def-connection-on-a-smooth-vector-bundle`

- Outcome: `not_defect`.
- Decision: the Hom-bundle construction is compressed but sound. The common-base locus over a simultaneous trivializing neighbourhood has the stated $U\times GL(r)\times M_{s\times r}$ coordinates; the map $(p,C,V)\mapsto(p,VC^{-1})$ is an open quotient map, and restriction of a quotient to the open saturated $D_U$ gives precisely the subspace topology on $H_U$. Global openness of $q$ makes the images of a countable basis of $D$ a countable basis of $H$. For two distinct maps over one base point, a common simultaneous trivialization supplies one open Hausdorff Hom chart containing both, hence disjoint open neighbourhoods in $H$; distinct base points separate through the base. The transition $T\mapsto hTg^{-1}$ and its inverse are smooth, including in boundary charts. The zero-rank cases reduce canonically to the zero bundle.
- Repair and rejudge: none.

### `s8a-5f2898102a372fbedaf9ac9e` — `lem-relative-smoothing-of-a-continuous-simplex-along-its-faces`

- Outcome: `not_defect`.
- Decision: I reopened both Whitney suppliers rather than treating their verification metadata as mathematical evidence. The ordinary Whitney proof steps 1.1–6.1 fully construct the proper embedding, closed embedded image, continuous normal-radius tube, smooth retraction and inverse used in F4. The relative Whitney theorem’s L1 and proof steps 1.1–4.1 restate and correctly use those data. The face-extension lemma and this smoothing lemma cite the exact supplier passage and their statements match it. The absence of an independent judge stamp on a prior owner repair is an evidence-history observation, not a defect in the current proved dependency chain.
- Repair and rejudge: none.

### `s8a-856f829a571dcb911d2d9e06` — `double-complexes-exact-couples-and-convergence-examples`

- Outcome: `nonfatal`.
- Decision: the warning is accurate: the library page’s phrase “unresolved general complete-convergence criterion” is stale after the companion theorem’s owner repair and complete proof. It is authoring-state prose, not a mathematical claim used by an item, and the surrounding sentence conservatively says the examples do not rely on that theorem. The page-level warning supplies no item-edit licence, and this presentation defect is nonfatal under Step 7.
- Repair and rejudge: none.

### `s8a-0997436bdb788cfbb634d3e4` — `thm-numerable-fiber-bundles-are-hurewicz-fibrations`

- Outcome: `not_defect`.
- Decision: the three delicate continuity points check out. In step 1.1, compactness of each $J_j$ turns pointwise continuity of $\rho_{i_j}\alpha$ into finitely many compact-open conditions controlling the whole interval, and minima are uniformly stable. In step 1.3, local finiteness near the compact image $\alpha(I)$ leaves a finite alphabet for each fixed word length; step 2.1 then uses one shorter positive word to kill every sufficiently long word locally, giving local finiteness over all lengths. In step 5.1, that local finiteness leaves a fixed finite word list; indices whose weight vanishes near the base path are removed, while every remaining path lies in the corresponding $V_T$ by the support inclusion. The resulting finite composition uses continuous clipped endpoints and the exact zero-length identity, so it is jointly continuous even as active weights vanish. All other choices are finite/local; the sole simultaneous global selection is the well-order of finite words under AC.
- Repair and rejudge: none.

## Rejudge targets

- `def-fibration-connecting-homomorphism`
- `def-vector-field-and-section-along-a-smooth-curve`
- `ex-christoffel-symbols-in-polar-coordinates`
- `fs-every-exact-couple-is-a-long-exact-sequence-with-no-extra-grading-data`
- `prop-collapse-with-projective-associated-graded-pieces-splits-the-finite-filtration-noncanonically`

These are the only five group-e items changed under a `confirmed_fatal` decision. The engine owns their configured-judge recheck.

## Cross-group alerts

None. No rejection or reader-warning investigation exposed a defect in another group's item.

## Aggregate validation

- Coverage/ledger audit: all 34 scoped rejection tuples have exactly one group-e adjudication: 21 `false_positive`, 8 `confirmed_nonfatal`, and 5 `confirmed_fatal`. All five Step-6 warning ids have exactly one owning-group disposition, and all five fatal items have exactly one matching group-e defect row.
- Hash audit: every nonfatal/false-positive item still matches its recorded pre-edit `itemHashGuard`; every fatal item differs from its pre-edit guard and exactly matches the repaired digest reported above.
- Focused proof precheck: 3 proof-bearing repaired items checked, 0 failures. The two repaired definitions are correctly skipped by this proof-only checker.
- Render check: all five repaired Markdown item files passed the real KaTeX/YAML renderer check.
- Content policy: batches 7, 8, and 9 passed together, covering all 215 scoped items with 0 errors and 0 warnings.
- Strict proof contracts: the two repaired batch-7 proof items and the repaired batch-9 example passed item-scoped strict checks with 0 errors and 0 warnings.
- Scope check: the exact run-wide check remained open only on 13 undispositioned alerts belonging to groups a, b, and h. The same check with its documented `--allow-pending-alerts` mode passed: 8 groups scoped, 625 items partitioned, 16 open rejections routed, and 27/39 alerts dispositioned. No listed problem belongs to group e.
- Fatal-only guard: the run-wide guard remained open on nine unlicensed/mismatched edits, all in group b; none is a group-e item. Its summary recognized 59 licensed changes and reported no deletions or creations.
- Defect-ledger check: the run-wide check remained open on one missing defect row for `lem-square-integrable-kernels-define-bounded-compact-integral-operators`, owned by group a. All five group-e fatal decisions have matching rows.

The failed run-wide checks are concurrent owners' unresolved work, not authority for this group to edit their artifacts. Group e has no remaining local validation failure.

## Current obligation

All group-e adjudications, licensed repairs, warning dispositions, defect records, and focused checks are complete. The remaining rejudge and run-wide closure belong to the engine after the other groups finish.
