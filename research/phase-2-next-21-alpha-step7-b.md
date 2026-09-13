# Step 7 adjudication — group b

Run: `phase-2-next-21`  
Batches: 5, 6, 9

## Progress

- Exact rejections completed: 52/52 (`confirmed_fatal`: 43; `confirmed_nonfatal`: 1; `false_positive`: 8).
- Reader warnings completed: 6/6 (`nonfatal`: 6).
- Rejudge targets: all 43 `confirmed_fatal` items recorded below; no rejudge was initiated here.
- No cross-group alert, new lemma, or published repair was required. The unified frontier ledger was refreshed after the dependency edits; all nine owned cross-batch edges remain verified.

## Completed decisions

### `cex-the-top-square-formula-does-not-define-all-lower-squares`

- Context: `55dc978c45c3ec040e2023a9d7d91010ee3872bb78e4530c341f084ce2ab4164`.
- Pre-edit guard: `fc74d52c2295f337cbbae371a5ef97e2fb43e577b550607b31d68fe57f410a96`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the exact supplied Statement establishes commutation with the standard suspension, but the counterexample additionally attributed a cone-pair construction to that Statement and used the unsupported attribution in step 1.1.
- Repair: removed the construction overstatement and reduced step 1.1 to the defining suspension isomorphism plus the supplied stability formula; synchronized the batch-5 proof contract.
- Post-edit guard: `1479b3c90b421039e29af368fd83224cac0c963d35ce057faaefebd7d762d33a`.
- Checks: focused precheck passed; focused strict proof-contract check passed with zero errors and warnings.
- Rejudge target: yes.

### `cex-the-untwisted-e-two-page-misses-monodromy-in-a-mapping-torus`

- Context: `3cff62a50e5e419d1282425afe429940da69cc68abd428ae93b8c26c4b8599c4`.
- Pre-edit guard: `a23248411ed3288aa3644658202eeb7052fd8915d095718c39a0d9ed3cb234e1`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: for an arbitrary self-map the mapping-torus projection need not be a bundle or Hurewicz fibration, so the transport/local-system interfaces used in step 1.1 do not apply.
- Repair: required `h` to be a homeomorphism in the Statement and Given. The reflection witness is unchanged.
- Post-edit guard: `d24b742d599eb6fa47143cceb822d46aa503fa776da70291d2077da0187eb275`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `cor-classifying-space-of-a-discrete-group-is-a-k-g-one`

- Context: `201ca366369d7a000b6417f5fbeef7e4f0ae128d04ea57080c7caa3a8ee9a1fe`.
- Guard: `60b36ac7c6fa49cecc35354dbbe0015b9aa617e9d1d794be09866d6929f72c6f`.
- Outcome: `false_positive`.
- Evidence: A1 is the required assumption declaration, not a claim that the AC definition proves a lifting result. F1's exact Statement assumes AC; the corollary repeats that hypothesis in its Statement and Given, and step 1.1 says precisely that it is inherited through F1.
- Repair/checks: no content change is licensed or warranted; the complete consumer, F1 supplier, and AC definition were read.
- Rejudge target: no.

### `cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces`

- Context: `7ea7921db6de99c3725c72715d85f16ef557c5ce7879226a29a66bc551261a52`.
- Pre-edit guard: `4d396a6701636b61a0cd15efc3e2d7dea8bbabef12c823ae7db16e42c0ffcd2c`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1's exact representability theorem requires the based CW complex's basepoint to be a vertex, while the original corollary quantified over every based CW complex and invoked F1 without recovering that hypothesis.
- Repair: restricted the operation category and Given data to based CW complexes whose basepoints are vertices.
- Post-edit guard: `e526c9f16625263f05267133986c067de0b2894943dada646697a9e49a1df1ba`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `def-bockstein-connecting-operation`

- Context: `cb144a05e4cbeec8fe8e43c2121b7013600c13ce50c63944f64a28be9c26021c`.
- Pre-edit guard: `97b7f889d72fe21e6e98f18ebe95702276cd5aa21a89f360c050728dd5e5b4f8`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: at `m=1` the integral Bockstein has zero source but target `H^{n+1}(X;Z)`, which need not vanish.
- Repair: stated that both operations are zero because their source vanishes, while only the mod-`m` target is forced to be zero; synchronized the three affected contract notes.
- Post-edit guard: `784a2f4f2e8c35d3cdb4c27467e9921c28c7df58e553b1c7ad2de08f57c814ab`.
- Checks: the definition needs no proof precheck; its focused strict proof-contract check passed.
- Rejudge target: yes.

### `def-fundamental-groupoid-of-a-space`

- Context: `fd8955e70626ab28bda8a0caab362fb2d5dfb9ce0803ac7ec86143a7b4efd17c`.
- Guard: `2a5d24694a022c5fd12429f974f3362a9bd65428c856bd753d13871b85c24bd2`.
- Outcome: `confirmed_nonfatal`.
- Evidence: although the dependency's Statement is loop-based, its complete proof gives the explicit endpoint-fixed concatenation, reassociation, unit, and reversal homotopies. The same formulas apply verbatim to composable paths, with the appropriate seam and endpoint replacing the single loop basepoint.
- Repair/checks: no content change is licensed; this is an immediately closed citation-compression gap rather than a missing category law.
- Rejudge target: no.

### `def-pairing-and-unital-multiplication-of-sequential-prespectra`

- Context: `76e8f768eab60ce3cab87785ed6918349d43bf20ef1e1944e43a40708fbee148`.
- Guard: `30addc6aba6f12a555a74f7b57ba5134ed566905b1b51e8c52d4ca8c74e24d6e`.
- Outcome: `false_positive`.
- Evidence: the cited book was fetched and the exact locator read. Chapter 25 §3, printed pp. 222–223, explicitly defines a ring prespectrum using `S^0 -> T_0` and `T_m ∧ T_n -> T_{m+n}`, displays both structure-coordinate compatibility diagrams and both unit diagrams, and states the associativity and `(-1)^{mn}` commutativity comparisons. The rejection misdescribes those pages.
- Repair/checks: no content change is licensed or warranted.
- Rejudge target: no.

### `def-right-group-ring-action-on-the-chains-of-a-universal-cover`

- Context: `900ed1394d99dcdd05dc1dda7da330721c2114871b8008aecfe8f328a954b4c5`.
- Pre-edit guard: `6d7eccb9ffa4b14934533c0407e28639335c43546fe831bc7fbd5e5ad1c40d6e`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: `def-group-ring` supplies only the underlying free module and explicitly defers multiplication, so it could not support the right-module laws.
- Repair: added and cited `thm-group-ring-is-a-unital-algebra-with-basis-g`, using its product, unit, and bilinear extension to finite sums.
- Post-edit guard: `7332e724bdf99850c5ced94ee60203d8b3e8cc3125f563d62432415299128815`.
- Checks: the definition needs no proof precheck; its focused strict proof-contract check passed.
- Rejudge target: yes.

### `def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra`

- Context: `5b9e2eee28051f89788bddb68f145409cc60f2c28e0d72e499e62ec77ae5ddee`.
- Pre-edit guard: `d3f572061a3e5b83ea16e9bcdebc59077025a0f313cf03b28edbe5e2648b315c`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: compatibility of every time slice with structure maps does not make the family a homotopy from the named `f` to `g` without endpoint equations.
- Repair: added `H_{n,0}=f_n` and `H_{n,1}=g_n` to the definition.
- Post-edit guard: `96ed1905ad299307fd6d2faf41436c33116761f00c99203f1a0b089a128a04b7`.
- Checks: the definition needs no proof precheck; its focused strict proof-contract check passed.
- Rejudge target: yes.

### `def-universal-principal-bundle-and-classifying-space`

- Context: `5d6ac32c11f05f34e1250307f20bf202b03280fb8a036830ec17518ca7279475`.
- Guard: `675c330faccd0c91638d9dbded750ad234bda47244f500046957a9aae1b0ffb3`.
- Outcome: `false_positive`.
- Evidence: the item is an abstract definition and says the construction occurs “below,” not inside itself. Its owning page immediately follows it with the Milnor model definition, finite-join models, contractibility/numerability theorem, and classification theorem; the page summary states the same sequence.
- Repair/checks: no content change is licensed or warranted; the definition and complete owning page were read.
- Rejudge target: no.

### `ex-adem-relation-sq-one-sq-one-equals-zero`

- Context: `d653e0ce244446a23f2123dcc7de6bd276b40b9413f9623be4e9478e0559ce77`.
- Guard: `1dba4f5ac6fa4c34c572b652d2627d77f30ebae67a5769b9771c10b4402e489c`.
- Outcome: `false_positive`.
- Evidence: the general coefficient-surjection construction assumes AC, but its Definition expressly isolates the two cyclic sequences and supplies deterministic least-residue lifts. The example uses only those lifts and proves both comparison identities directly. F2's exact Statement independently supplies `Sq^1=beta` without AC.
- Repair/checks: no content change is licensed or warranted; the complete general definition, general independence lemma, special `Sq^1` proposition, and example calculation were read.
- Rejudge target: no.

### `ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space`

- Context: `f343db106f7a3b37a6bc25b470b680dc3dcb1b019ffe4791cd73287922ce7c44`.
- Pre-edit guard: `9a78bd73a81b52f112910c4e1b53928dd8520ce8b2f139fd902322f90422bf85`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F5 replaced the supplier's actual infinite polynomial ring plus degree-range restriction isomorphisms with a full truncated finite-space ring statement that the supplier does not assert.
- Repair: restated the exact interface and derived only the needed degree-one and degree-two facts by restriction and cup-product naturality; synchronized the proof derivation. This check also exposed three owned contract quotations made stale by the earlier `def-bockstein-connecting-operation` repair, and all three were refreshed to the repaired definition.
- Post-edit guard: `6556e101ed2cdb2b8f31e8c1127ef3de9778c6b05a2c06cd9964206a5da5180a`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `ex-first-postnikov-stage-of-a-simply-connected-space`

- Context: `ea15a06d61dff7ee198f8cce575f1e364207c00eda2c1bfc7ffacac2ea92b5f5`.
- Guard: `c4de8b1f8cd2532a9a1eeed8ce7f1264563296fc88323daa7e790ae475f41ee9`.
- Outcome: `false_positive`.
- Evidence: the supplier Statement calls the maps “Postnikov sections.” The exact owned definition of that term requires `pi_i(P_nX)=0` for every `i>n`; the supplier's step 4.1 also displays that conclusion. F1 is therefore a faithful definitional expansion, not an unsupported strengthening.
- Repair/checks: no content change is licensed or warranted; the example, theorem, and exact definition were read completely.
- Rejudge target: no.

### `ex-p-sections-and-brauer-subsections-in-a-small-finite-group`

- Context: `55278de095d2bc85f984439f1aae321f81701ab88f30e3fe07fdca33b15bb676`.
- Pre-edit guard: `0c5bc835cde08b91e10ef4ea28ef1171ec39556a2b2b5322d0972c13e6257ae5`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F4 inaccurately restated the First Main Theorem's bijection between defect-`D` blocks as an unqualified unique local/global-block theorem. The actual example proves separately that `c` is the only local block and that `B_0` is the only global defect-`D` block.
- Repair: replaced F4 by the exact defect-`D` bijection and rewrote step 2.1 to combine it with the explicit uniqueness calculations; synchronized the proof derivation.
- Post-edit guard: `ca4cf18f5c259528b0a035693965c2820013db3ddcca9ccc6b22a7e6420aa76e`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `ex-real-projective-infinity-as-b-z-two`

- Context: `84a8523809b86227285d93f3dfedfc913ad9dce6a25942c5f011f02e7a38f89a`.
- Pre-edit guard: `c2b7fd5fe88a8db6fe2eb3664fbbf12b01a2b8b5c3facdf47d2e6e6e15ba98b5`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the finite-join supplier identifies the compatible sphere and projective-space stages but does not prove that the infinite total space is contractible or that the orbit map is locally trivial, so it cannot alone support “universal double cover.”
- Repair: added the exact Milnor-join theorem, then used its contractibility and principal-bundle conclusion; discreteness of `Z/2` makes each local product chart an evenly covered neighborhood. The `K(Z/2,1)` conclusion remains supplied separately by the discrete-group corollary.
- Post-edit guard: `6b1aeb920f4fb1da6924ef774e2cb0f331d3c31a8eb886e6dc14f1c5008c2555`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `ex-second-main-theorem-with-no-inducing-local-block`

- Context: `cbeb5082182607a119b9498bf3c25e15769de961b82981de8b5a5777fbb88896`.
- Pre-edit guard: `2ab2d49b6893129126abc45af9a005a474946e7e3bca217d761cc7f2efc0752a`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1 attributed the explicit idempotents `1+a+a^2` and `a+a^2` to a supplier interface that only names the two blocks and their induction behavior. Step 1.1 needed those idempotents to identify the standard-character row.
- Repair: restated F1 exactly and inserted the finite center calculation in step 1.1, deriving the two primitive central idempotents and identifying the principal one before applying the lift theorem; synchronized the proof derivation.
- Post-edit guard: `3bf6856dcccb987b25e85cb881316145a22977c766589fdb91911ff7b5959124`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `ex-steenrod-squares-on-real-projective-space`

- Context: `7324c8e99a352363331523fc48c1e4fa33f2001e304444c5d1a80e5b2db83957`.
- Pre-edit guard: `bf2b144dca8ba1b463e0238b9f70660c07d5da6f0cfee894f2a772c84f49f684`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1 claimed that restriction preserves a degree-one generator for all `n>=0`, while the supplier explicitly says that the `n=0` restriction sends `a` to zero.
- Repair: split the statement into the `n>=1` generator case and the `n=0` zero case, matching the proof's existing endpoint treatment.
- Post-edit guard: `2e08a6caf36b5668206e980388068879b9e23086dfe1f14881777dd41f719255`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `ex-the-orientation-system-of-the-mobius-band`

- Context: `72df89a929f399fe570b324b1e5a1c4c11cc9c63e9ae0cae5a5ecda4f7f4d52c`.
- Pre-edit guard: `60fdbd3eddc10d4cb5b55a05a6a46a5b6c869bacd0b71b3aae41e97f9b9005b4`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the orientation-cover supplier is explicitly restricted to boundaryless manifolds. The boundary extension defines the local system on the Mobius band but does not extend that cover construction.
- Repair: narrowed the cover assertion to what the explicit geometry proves: unwrapping the core twice gives an annular double cover, and its degree-two core map squares the monodromy to `+1`, so the pulled-back local system is constant. Removed the inapplicable supplier and synchronized the contract.
- Post-edit guard: `68c6fca71550800695bb4b68718a6aa33ef37f2a0be42bbbe9fdafbdf216e10f`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `ex-trivial-principal-bundle-corresponds-to-a-nullhomotopic-classifying-map`

- Context: `ee8e5759f5403628c46ff59749f47797d74bb516f0088ac2728793bb782549f6`.
- Pre-edit guard: `493fdd4ac096847c2b5cdcdde17adcf34202017dad23e8dc3ba28e3f5f68d00d`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the Claim quantified without the classification theorem's AC, well-pointed/CW-type group, and CGWH-base hypotheses, while F1 silently dropped the same restrictions.
- Repair: added every exact hypothesis to the Claim, F1, and Given; the constant-pullback and classification-bijection proof is otherwise unchanged.
- Post-edit guard: `d6d1f07658259a001821fc4c34cbbf2ab42564a9fe224349ad902ccf3d3ddcb9`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `ex-wu-classes-of-a-closed-surface`

- Context: `a397704e6fc73a11a66c2b8c7263230917167c56d6e60ee649243148e45988d3`.
- Pre-edit guard: `363d93146831f951fd2ee269956b09485acd7937653966e51aaa00751b47b884`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F10's exact Definition only defines the unique classes and the outside-`0<=i<=n` convention. It does not state the subsequently proved `2i>n` vanishing, so step 9.1 could not cite it as the source of `v_2=0`.
- Repair: restated F9 and F10 exactly, then derived `v_0=1` from `Sq^0=id` and `v_2=0` from `Sq^2(H^0)=0`, using the defining uniqueness in both cases; synchronized the proof contract.
- Post-edit guard: `8ba1a859ae43440f913320a26e2758f6f82fe9572b2fc806a65adb7024d699e2`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

#### Reader warning `s8a-13a2f39f014eafa988ab2684`

- Outcome: `nonfatal`.
- Evidence: the Remarks expose build-process bookkeeping and raw IDs, which is poor rendered presentation but does not alter a mathematical statement, dependency edge, proof, or witness. Step 7 is fatal-only, so no separate content change was made.

### `lem-adem-double-power-comparison`

- Context: `61d65dfa49c3a17db1a77887f44c36fb072ccd18f4e829c7cd6a0c9179d0fa45`.
- Pre-edit guard: `a9c11b5634d94ce007be3161151c09f78e9e84361bcc434cca5f0440426dfa53`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the cyclic-power supplier's full expansion includes `D_r(x)` for `0<=r<=2q`; step 1.1 replaced it by the square range `r<=q` without proving that the omitted terms vanish. They can contribute to the subsequent Cartan coefficient unless removed first.
- Repair: added the exact full-coefficient naturality/additivity interface and proved the missing vanishing by restriction to the cellular `q`-skeleton, collapse to a wedge of `q`-spheres, zero intermediate cohomology, and the `r=2q` point restriction; only then rewrote the full expansion in square coordinates. The contract now records that argument.
- Post-edit guard: `fd49032883f91e62d6e54137b06a9a58b1b191200c781385c835be4841fb5111`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `lem-bockstein-square-parity-recurrence`

- Context: `d449c1527e92eb476b6baf0309ff5213c85cb846e009ee04e4faa86af1c0a0c1`.
- Guard: `581af3c469fa8ba4ee9fa290eed3eafe39b8dc389bbdfd0b141807c5ff26786c`.
- Outcome: `false_positive`.
- Evidence: solving step 1.1's equation gives `D_i d=(-1)^i dD_i-(-1)^iD_{i-1}-TD_{i-1}`. Evaluation of `dD_i` supplies `(-1)^r` on the second cochain differential, while `(u tensor v)T=(-1)^{rs}(v tensor u)`. Therefore the two cup-`(i-1)` coefficients are exactly `-(-1)^i` and `-(-1)^{rs}`, as printed. Their difference is required, not an inconsistency.
- Repair/checks: no content change is licensed or warranted; the integral chain-map and tensor-evaluation signs were derived directly, and their mod-two reduction agrees with F4.
- Rejudge target: no.

### `lem-canonical-twisted-fundamental-classes-over-compact-subsets`

- Context: `9c7dda76cc1d91256e59c55d1c602f3fd83bf448a8492dd429b81836c3831cc5`.
- Guard: `3c992978088e8f3d567b3bd3f49064b1a1dde7947ad20f2b77939f7f017ac9bc`.
- Outcome: `false_positive`.
- Evidence: F2 expressly calls the published constant-coefficient closed-support lemma only an exact quotient-complex pattern “adapted explicitly in step 1.2.” That step independently constructs and proves exact the short sequence for the intrinsic local chain complex. The cited local-coefficient excision theorem supplies the subdivision/prism equivalence from the small quotient to the full relative complex, including coefficient transport.
- Repair/checks: no content change is licensed or warranted; the consumer and both exact suppliers were read completely.
- Rejudge target: no.

### `lem-equivariant-p-fold-external-power-and-diagonal`

- Context: `a59de306020d386079624edf06137e77b4a84a807593016f0cbbb994e22abe36`.
- Pre-edit guard: `57d9474a8fb8a721e96fed843676c7e4c228fb0b13c6fbbd690eaba7e96abe0f`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: an arbitrary invariant subcomplex of a free `F_p[Gamma]`-complex need not be spanned by free orbit-basis elements or be relatively projective. The orbit-by-orbit extension proof therefore cannot extend a prescribed map from the stated general `E_0`.
- Repair: required `E_0` to be the subcomplex spanned by a union of free cell orbits and made the same condition explicit in step 1.2. The interval endpoints used later are exactly such orbit-basis subcomplexes.
- Post-edit guard: `22899595296e39547e4b7d071469347bafeeef3f6b2dd56a8ccd6b81bed66e6e`.
- Checks: focused precheck and strict proof-contract checks passed; the contract remains valid JSON.
- Rejudge target: yes.

### `lem-extending-a-map-over-one-cell-is-equivalent-to-nullhomotoping-its-attaching-sphere`

- Context: `172075cd1ca0f48432a7bbae26621934b441dc0f01ee563dc888e00335f554dd`.
- Pre-edit guard: `8499e9fd436cb5033d385034ccfe76e0aaa55ab782be5daf2b38bd0122e84e14`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the absolute disk/cone criterion is correct, but “relative to any subspace” neither defines compatible relative data nor assumes that subspace is a cofibration. HEP for the different inclusion `A -> B` does not repair that quantifier.
- Repair: removed only the unqualified relative assertion, its unused HEP dependencies, and its proof references; made the natural domain `n>=0` explicit. The complete two directions of the absolute criterion remain.
- Post-edit guard: `d2ada54730b2e19fb10614114432ccaf7000894b857b951089e4987018ad44dd`.
- Checks: focused precheck and strict proof-contract checks passed; the contract remains valid JSON.
- Rejudge target: yes.

### `lem-free-cyclic-resolution-and-transfer-for-power-operations`

- Context: `16881e6f9c72d30dc498cd03b9016d711641a1420031af12eef17ca3d235b864`.
- Pre-edit guard: `ab727c619e1e74d96861e415c9b379fe0450b29e5973370a71d8caa0636a7884`.
- Outcome: `confirmed_fatal` (`other`).
- Evidence: the former title promised “transfer for power operations,” but the Statement and proof establish ordinary cochain transfer, its cochain-map property, and `Tr Res=[G:H]`; they do not define a power operation in the transfer clause.
- Repair: narrowed the title to “Free cyclic resolution, group cohomology, and cochain transfer,” preserving the immutable item ID, and synchronized the owned batch page manifest.
- Post-edit guard: `584f9287fa51a49414343a85ba55183fdc0f5815fd41fc36793fc748ab4f2c15`.
- Checks: focused precheck and strict proof-contract checks passed; the page manifest remains valid JSON.
- Rejudge target: yes.

### `lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres`

- Context: `d5951995ffabe7428f83e720fc691dbb06bd11a8032427166835656cb370206b`.
- Pre-edit guard: `cfdbc0c1ba142b9f8f0e57120aa4927e339a8f6878be4630ab88e154458c063e`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F2 dropped both `n>=1` and Freudenthal's positive range `1<=i`, then called the degree-zero map an isomorphism although the supplier carefully calls it a bijection of singleton pointed sets.
- Repair: restored the exact positive range and separate degree-zero clause in F2 and explicitly quantified `n>=1` in the consumer Statement. The proof uses `i=n+k>=1`, so its stable-range calculation is unchanged.
- Post-edit guard: `32ec981e57a109bee99574e0edfca17c5a9d225d536ffa28a828ea1986a8c4af`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `lem-local-block-projection-controls-generalized-decomposition-support`

- Context: `ccd8de6e633d40881f81dca411686c6b9b4a0f98b54bf92c168a65eaf2a8b4d0`.
- Pre-edit guard: `68f926eed55a3166414b99f58db2e9fb5bbdfae30ca7a0f9724f18494b8bd36f`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: Nagao's exact Statement says every indecomposable in `M_corr` belongs to a block inducing to `B`; it does not directly say a noncorresponding `c`-projection lies in `M_err`.
- Repair: restated Nagao exactly and supplied the omitted inference. If `c^G!=B`, then `c` is orthogonal to every block acting on an indecomposable of `M_corr`; hence `c M_corr=0` and `M_c=cM=cM_err` is a direct error summand. The zero-trace lemma then applies to its indecomposables.
- Post-edit guard: `06d75d09e2b1796f9df56fd9c71d41a45b03a515bab01e6a4f39af37968e3d72`.
- Checks: focused precheck and strict proof-contract checks passed; the contract remains valid JSON.
- Rejudge target: yes.

### `lem-mod-two-cohomology-ring-of-infinite-real-projective-space`

- Context: `114f722515123c1c9378a70c2c8047a59a5f80c2abd7ac2295fac03d4f75d76e`.
- Pre-edit guard: `2478609af6781560e6d3435fbd0b59c6650583d2556dd7944a388c1bcea09790`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1's exact Statement constructs each finite `RP^m` and computes its incidences, but does not assert compatible choices, the CW union, or that every standard inclusion is skeletal.
- Repair: restated the finite supplier exactly and constructed the infinite CW structure in step 1.1: last-nonzero-coordinate loci are open cells, their upper-hemisphere characteristic maps close on the preceding projective space, and the finite coordinate inclusions select precisely the cells through their dimension. The supplier's incidence calculation applies to those same characteristic maps.
- Post-edit guard: `e77fc88bbcb650c831e8e38d9d6e1443e62b8a29a373408ba108929dbb9fc064`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `lem-the-stable-homotopy-colimit-is-independent-of-the-chosen-cofinal-tail`

- Context: `3f2647672102a73740c1d28beabd682aa577ca6cebbe072ba36cdb8397aed9a6`.
- Pre-edit guard: `6a08d15d3b5248480d7673cb0abb188eed487348c5d8f9b783efa44d248a02c9`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the stable-group definition begins at a chosen legal cutoff `n_0`; for negative stable degree the groups or bonding homomorphisms at zero can be outside their defined positive homotopy-group range.
- Repair: formulated tail invariance for a system beginning at `n_0`, with `N>=n_0`, and updated both representative arguments to compare against that legal colimit. The finite-tail proof is otherwise unchanged.
- Post-edit guard: `15db9c7161f98290c04f982cf474f874a8c76b5dcdb014a32cfd25c6e784dc19`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `lem-wreath-double-power-coefficient-symmetry`

- Context: `ef3b63cf5dd10ed2f2bd4fac17a9e8f4d5516dbae12852f55ce5feffae6085eb`.
- Pre-edit guard: `cf81d863cd4333519ccfc06bbcb87e4783ab3a9b9edb92a203afb0cb8ec0aead`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the finite regular `p`-fold supplier cannot be reapplied to the infinite, initially nonregular resolution-space input, and it does not itself construct an `R=C_p x C_p` equivariant `p^2`-fold power. The cited original explicitly flags this rigor issue before its Lemma 1.3.
- Repair: replaced the derived-skeleton invocation by the common chain-level construction used in the original source. The repaired proof constructs the free row-column `R`-resolution, defines the direct `p^2` tensor cocycle on it, proves cocycle-representative independence using the now-exact general relative carrier theorem, identifies the iterated cocycle under the signed regrouping, and only then pulls both back. It also derives the double coordinate decomposition directly instead of reapplying the finite-space supplier.
- Post-edit guard: `78fbb2e5f611e036a8ef89b91c1a188d7dc30e7fa9287a3c60abe03d183ff55b`.
- Checks: focused precheck and strict proof-contract checks passed; the contract remains valid JSON.
- Rejudge target: yes.

### `prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism`

- Context: `691dec003a585bd7c9578bb75c0c1cda5a256a977787a8e703ec1aca899fa374`.
- Guard: `28d2aeaece345074aff922c7cca6a6fbf872950490572c14eefd1ff41faf9ff1`.
- Outcome: `false_positive`.
- Evidence: the rejection's own specialization has the direction backwards. For `f=id`, clause 2 takes `theta: K -> L` and induces `H^n(X;K) -> H^n(X;L)`, so cohomology is covariant in the coefficient morphism. It is contravariant only in the space map. Step 1.2 proves the coefficient direction by postcomposition on every cochain value.
- Repair/checks: no content change is licensed or warranted; the Statement, local-system definition, and complete chain/cochain formulas were read.
- Rejudge target: no.

### `prop-loop-space-of-bg-recovers-g-up-to-homotopy`

- Context: `0badd6c1cfae54df5bddfd6cd6b1dff5f3fd8ddf20d4fe8295dd50c434339f42`.
- Pre-edit guard: `77e5503b915fd01b33f7a5e0d47a305713c8035313b08802119cc711acb58f01`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the fibration supplier defines connecting maps on homotopy classes. It does not supply a point-set map `Omega BG -> G`, so the original pointwise identification of a map from one arbitrary lifting function with “the” connecting map was not licensed.
- Repair: defined `delta=inv∘epsilon` from the chosen endpoint-label map and proved that it induces the class-level connecting maps: for a continuous family of chosen lifts, right translation by the inverse endpoint label produces the lift ending at the basepoint used in the boundary construction. The weak-equivalence argument now applies the long exact sequence only after this comparison.
- Post-edit guard: `5d2df7f29ce1503caa8254b024bec2329d9325ec33a7adcf0229b941bc0bb211`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `prop-steenrod-square-normalization-instability-and-top-square`

- Context: `340c1bd3aaa35015c7ede09bf53cab12819e73b7970374ead183a2040a5651f7`.
- Pre-edit guard: `16703ff84482e1727d5fda22eb5633b9a608875bcc3e42b230c4400384b8fa99`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the original claim that both sides are outside range fails at `k=n+1`: the source square vanishes, while the target square is the top square of a degree-`n+1` class.
- Repair: treated that endpoint separately. The relative cochain `b cup_0 delta b` restricts to zero on the cone base and has coboundary `delta b cup_0 delta b`, so it kills the target top square; only `k<0` and `k>n+1` are now dismissed by range.
- Post-edit guard: `f06c6f41b6281d99d4563861708b0f12fdc500c70aae55e6b65aea2295376ee7`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `prop-the-manifold-orientation-system-is-a-local-system`

- Context: `233b310e4a6d055f7c2eab38e28acc4d05b6b17d5efdaf72abc722661fa39d3d`.
- Pre-edit guard: `f7839d6835d204fcffcc89e0a2d07d44baf4003c9d78cba27a141beb634d60d3`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the tensor-product supplier expressly constructs only an abelian group and disclaims arbitrary-ring module structure; it does not supply the asserted scalar-extension functoriality.
- Repair: defined the left `R`-action and `T_gamma tensor 1` on elementary tensors, checked each tensor relation, `R`-linearity, identities, compositions, and inverses, and supplied explicit inverse maps proving every stalk is rank one.
- Post-edit guard: `6dad1e45675c9c9ed50ba274d2d40aa449677c8d8346da5c0196db7361fa37ff`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `prop-the-mod-two-bockstein-is-a-derivation`

- Context: `fcc23e48b1588c9c6966bad569f62d18e652e5d9b8e9d896a10bc28f58409498`.
- Pre-edit guard: `7d0c245045c544743d19bf912d45935724973092ea527147ecea4a0002f2f72d`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the cup product of the two canonical factor lifts need not be the canonical residue lift of the cup product, so the original proof had not yet identified its divided coboundary with the defined Bockstein.
- Repair: proved the required special lift-independence inline. The convenient product lift differs from the canonical lift uniquely by `m h`, so their divided coboundaries differ by the coboundary `delta h`.
- Post-edit guard: `9f47197a4c030151e807739540a42e8873bcb0502dfd697380438ee84c964ad1`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `prop-the-vertex-group-of-the-fundamental-groupoid-is-the-published-fundamental-group`

- Context: `5f5061f9b19fc5aad165c63ce92f83b3551695ff1970db215ceb9e1969f51656`.
- Pre-edit guard: `ab9cc147604d61d63e587e98cbe0d484e9fdef5ab28ba2150b52478ce28334c0`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the based-loop definition proposes multiplication and names constant and reversed loops, but expressly postpones well-definedness, identity, and inverse laws to `thm-fundamental-group-laws`.
- Repair: added that theorem as an exact dependency and separated its group-law interface from the two definitions throughout the facts, proof steps, and proof contract.
- Post-edit guard: `143eac42416d6186ef7f09b90e34be4e2c2cbcbb661066b5eb5a33d775d9dba1`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `thm-cellular-chains-compute-homology-with-local-coefficients`

- Context: `591fde35773b3259a260debee9877a414ff62240e90a0117cc88301e3c87e947`.
- Pre-edit guard: `7cf247fdc7391d027730c2bedd8e9aa3a57f88ef29e8470030bc95941ff0a601`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the cited ordinary cellular-homology theorem states only a constant-coefficient comparison; it supplies no local-coefficient skeletal theorem to apply “word for word.”
- Repair: removed that dependency and supplied the complete local exact-sequence chase: high-degree skeletal vanishing, the injection identifying `ker d_n`, the image corresponding to `im d_{n+1}`, and the quotient comparison with `H_n(X^{n+1} union A,A;L)`.
- Post-edit guard: `0e8de08d5e8bff9512c30be8a8f3cd1a0a0d2aa40f72ff1880203de49fa9bf60`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `thm-cellular-cochains-compute-cohomology-with-local-coefficients`

- Context: `ac632457200bcfb69e143be674a777767e380d634a4062a38abe21e965ecebdb`.
- Pre-edit guard: `c7359f9a1f3ee70776cd3b44d9d962f29857ee5e26c1753c5176f77439d8a52b`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the alternating telescope pieces are disconnected unions. The local-cohomology definition expressly warns that, in ZF, cohomology of their product cochain complexes need not be the product of component cohomologies because choosing all componentwise primitives may require choice.
- Repair: assumed AC in the theorem, added its exact dependency, and isolated the use to assembling primitives for the product-cohomology comparison. The eventually constant `Delta` recursion itself is now stated explicitly and needs no further choice.
- Post-edit guard: `8565c8a0e7a739fb852efd93a2efc7d6ede85ec7d179595dfe45dc75c559827b`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `thm-cup-i-coboundary-identity`

- Context: `291b4ac87f8c7b239f597847dcd135ae4d959529f9fab2d6474dc00a9d9a1849`.
- Pre-edit guard: `f894ec101274fcf6c88c593ba0b5b16fe2779e5f1580fa10a1ea62d55aea362e`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the theorem quantifies over every integer `i`, but the proof invoked `D_i` and its recurrence for negative `i`, where only the zero convention for cup products is defined.
- Repair: disposed of `i<0` first as the literal zero identity, then restricted the higher-diagonal evaluation and recurrence to `i>=0`.
- Post-edit guard: `0051a4bb21e18b702ed654dc5f41e7f071b24dd56f01afb4a023213a58d7966d`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `thm-vanishing-of-the-primary-obstruction-is-equivalent-to-extension-over-the-next-skeleton`

- Context: `7dfed8ee8b2d2546883bb78d7b94e060409a1f4daa2343644e5e670b493795ad`.
- Pre-edit guard: `9974c144f162811fdbfbb18d91a0c18a2ab3cdc3bc368ac7b4d7f1bd58d2b969`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: a homotopy of an `n`-cell relative to its boundary necessarily has zero difference class, so the former HEP prism construction could not realize an arbitrary cochain value.
- Repair: replaced the impossible homotopy by the relative pinch action `D^n -> D^n wedge S^n`, inserting a signed sphere representative on each cell. The modified maps agree only on the prior skeleton, glue by the CW pushout, and are explicitly not claimed homotopic on the `n`-cells; the difference identity then kills the obstruction. The Statement now exposes this precise realization interface.
- Post-edit guard: `34747cb7e25bb1d3f277f66693c1e2f353856756ba28d9ad3760451b66322bbe`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage`

- Context: `ce6970d38bb0d912c1f89ba3cf5cfe4ac2697fa5ecb989024f5506d42f0a1575`.
- Pre-edit guard: `0f96cd2a5a117ce818197d2ec82a9ab1ab357aa5a6e9bae80c5f2a761f1d5de8`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: at the frozen context F4's cited Statement supplied only the vanishing-obstruction extension criterion and did not realize a prescribed difference cochain. Its claim that HEP supplied that realization was also impossible: a homotopy rel an `n`-cell boundary has zero difference class. The supplier's separately licensed repair now gives the exact relative-pinch realization interface, but this consumer still contained the stale HEP restatement and truncated contract quote.
- Repair: restated F4 exactly as the repaired supplier now proves, including its no-homotopy qualification; cited F4 at the product-pair vanishing step; and refreshed the contract quote and uses.
- Post-edit guard: `5e3d3febfef7f079027e7655120ea89a9accf4c7740a3c66d3074ac777277248`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `thm-excision-and-mayer-vietoris-with-local-coefficients`

- Context: `2e0e7fbea9ebd093550d52b98b904600a25c93bfd57e1181ea9d408f00ebf821`.
- Pre-edit guard: `2960071a7ae24028c5c6b90f4d40dbb765104309264a0344e29b91d83ec3c592`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F2 claimed a general long exact sequence from a degreewise short exact complex, but its cited pair theorem supplies only the special chain and cochain sequences associated with `A subset X`. Steps 2.2 and 2.3 apply the general construction to Mayer–Vietoris complexes, so that inference was not licensed.
- Repair: replaced the pair-theorem dependency by the exact published general homology and cohomology long-exact-sequence theorems, separated their fact labels, and preserved the ordinary suppliers only for the small-chain and sign conventions.
- Post-edit guard: `24745eb1b65e1f0bc95c3a55b3662e9080f7952433bb2426e2656c1bd34333ea`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `thm-generalized-decomposition-numbers-exist-and-are-unique`

- Context: `7dd3c7a665c73e030eb01a734d66cfbdcc28b009b7e8c16317c47f1d7b4223f8`.
- Pre-edit guard: `0de16c05fac740da245a35837391bb01c73c133dd952b2922a0556560c53d56d`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the generalized decomposition numbers and character values are in `K`, whereas F5 states only complex linear independence after realizing the prime-to-`p` roots in `C`. Step 3.1 applied that theorem directly to `K`-coefficients, which can also contain `p`-power roots, without a field embedding.
- Repair: formed the finite Brauer evaluation matrix over the cyclotomic subfield generated by the Teichmüller lifts. Its standard complex realization is invertible by the published complex basis theorem, so its determinant is already nonzero in the cyclotomic field and the matrix remains invertible over `K`. This proves uniqueness for `K`-coefficients without embedding them into `C`.
- Post-edit guard: `5ffc27ec12b77b2d74f5ffcf41512b1a71523b13bc84c4132a910a9be89e8e2c`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `thm-obstruction-theory-for-lifting-through-a-fibration`

- Context: `feb72a62be2d7a99416657e7afe234bacffe2fd86250ac9d7167daaf5547ea10`.
- Pre-edit guard: `d588f5bf9643a45d11e4aff505936ed83d93e721189e5cab326f0fa4dcffce48`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F4 attributed the cocycle construction, prism difference identity, and cochain realization criterion to a theorem whose frozen Statement supplied only the zero-class extension criterion. Steps 4–6 relied on all three absent interfaces.
- Repair: cited the exact ordinary cocycle, difference, and repaired pinch-realization statements separately. The proof now derives their fiberwise forms: disk contractions transport sections to a center fiber, relative pinch maps insert prescribed sphere classes there, and relative Serre lifting returns sections fixed on cell boundaries.
- Post-edit guard: `2c49d2282cdd4417d989462edf3a97b677767f36e22825911fcca343a39a2dbf`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `thm-poincare-duality-with-the-orientation-local-system`

- Context: `1cd0259e57c4743518a31367e1ff72297e0163d755f4e088e7ae2b6f2ae96062`.
- Pre-edit guard: `58cccf5a52ca27209ff4dbd67036c5de2c6f9d10df128737cedcf1022a502884`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: a trivialization of the orientation system changes `O_M^R tensor L` to `L`; it does not turn an arbitrary local system into the constant system. F5's published theorem supports only the constant-coefficient oriented comparison.
- Repair: retained the arbitrary-local-system duality, stated its oriented target as homology with `L`, and restricted the claimed identification with the published map to `L=underline R`. Refreshed both downstream exact contract quotes.
- Post-edit guard: `abefb4d618d52d2cd7020cd385a6ae782a93259cfd0924ffe4f0de60781fb3a0`.
- Checks: focused precheck passed; strict contracts for this item and its two owned consumers passed.
- Rejudge target: yes.

### `thm-principal-bundles-are-classified-by-maps-to-bg`

- Context: `53aca2e45c1fc2948598f2e4e1e6f3aacf0813709f954da5d081030173bfb24f`.
- Pre-edit guard: `fcd289ebe23aca43c07354e008f38471422cb2c5febb5cee52a9d0cbf158bbcd`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1's frozen source Statement did not expose the even/odd coordinate embeddings, their equivariant homotopies, or the disjoint-support interpolation used essentially in Step 1.3.
- Repair: the independently rejected Milnor supplier now exposes those proved point-set constructions in its Statement; refreshed F1 and its exact contract quote to that interface.
- Post-edit guard: `eb80dd2745552e4cb95ffef8baf814dfd26b50be7b0480d1a252bf5a3c271959`.
- Checks: focused prechecks and strict proof contracts for the consumer and in-flight supplier passed.
- Rejudge target: yes.

### `thm-reduced-powers-satisfy-naturality-instability-cartan-and-adem-relations`

- Context: `22577231cf5192edb727a320cb76e03f4c1fe79f2aba0ed479cd03ff4db05318`.
- Pre-edit guard: `8fa149df0c0392d5e4556ff798961cf894c1f3b3f56a51f54f29be035b20ab6b`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: step 1.1 attributed `P^0=id` and strict instability to the reduced-power definition, whose exact interface only supplies the normalized formula and conventions. The cyclic supplier separately supplies both the coefficient range and the top coefficient needed for those claims.
- Repair: derived strict instability from the vanishing of negative cyclic indices and computed `P^0(x)` by cancelling both normalization factors against the exact top coefficient; added the precise supplier fact and synchronized the contract.
- Post-edit guard: `18d04dbc3dda1bd6925bdfb3afa2b3e80c5f1629a4136bd6dd70803932e46278`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `thm-milnor-join-model-is-a-contractible-free-g-space`

- Context: `702bca3571bc04359efa13671b5401cf4fe1c8ce57986dec4fd64a485e819f74`.
- Pre-edit guard: `54a02be8586da745f4723573e9167476d915200c976855282afe2290476f291b`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F2 proves quotient behavior only for compactly generated products, whereas the bundle definition requires an ordinary-product chart and expressly disallows silently replacing it by a k-product chart. The cited primary join theorems prove ordinary principality and the positive-coordinate normalization chart for this direct-limit model.
- Repair: added the exact primary-source fact, identified its normalization with the displayed section and ordinary chart, and stated explicitly that no k-product-to-ordinary-product inference is used. The earlier in-flight parity-interpolation interface required by the separately adjudicated classification theorem remains in the repaired item.
- Post-edit guard: `28e61b9f303abaa363166c2da0464b4f65ed352ba3561b2963c7c572bc28b4ac`.
- Checks: focused precheck and strict proof-contract checks for this item and its classification consumer passed.
- Rejudge target: yes.

### `thm-simple-postnikov-stages-are-classified-by-k-invariants`

- Context: `6f442e6e63c58eb03e27d26d758c10d975156f5f8e21797099488f449999ad43`.
- Pre-edit guard: `a42c762963911629786e945bbdb26616f0dd2053271ad72859f123ec43d0c975`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the homotopy-fiber definition fixes only the point set, topology, endpoints, and functorial map. It expressly does not assert that endpoint evaluation is a fibration or that the path-space total space is contractible. The published path-loop example states both facts exactly.
- Repair: cited the path-loop fibration for the Hurewicz-fibration, contractible-total-space, and loop-fiber assertions; retained the homotopy-fiber definition under a separate fact for the endpoint convention; synchronized the previously malformed step numbering in the contract.
- Post-edit guard: `c7b87c49f440bce8e5e70c4153f5ba01de5a611e5cec9f09863e2089eff3d42f`.
- Checks: focused precheck passed; strict proof-contract validation returned zero errors and one nonblocking shotgun-citation warning.
- Rejudge target: yes.

#### Reader warning `s8a-8c0b511e6c93ff7f5306d0ad`

- Outcome: `nonfatal`.
- Evidence: the fiberwise mapping-path assembly in steps 2.4–3.1 is compressed, but it specifies the equivalence data, section interpretation, weak fiber type, and characteristic-cell obstruction comparison. The omitted point-set assembly is standard reader-closable detail; no statement, direction, or hypothesis is false. It is separate from the targeted F2 source defect.

### `thm-steenrod-squares-are-well-defined-and-natural`

- Context: `93e45953ebea80277177e1c050fb7cb601e9aba27d30e412d882f3eb25f1b501`.
- Pre-edit guard: `beef7997b41e98b97450b82710be2ba170d16a6564d0a7eb47dda722b4f71ec8`.
- Outcome: `confirmed_fatal` (`logic`).
- Evidence: the definition represents a square by `a cup_(n-k) a` only when `0<=k<=n`; outside that range it defines the operation to be zero. The proof nevertheless used the cochain formula for every integer `k`, including `k<0`.
- Repair: discharged `k<0` and `k>n` first as the definitionally zero homomorphism and restricted the polarization, coherence, naturality, and representative calculations to `j=n-k>=0`; refreshed the exact contract quote.
- Post-edit guard: `051a479df3e70bf1f8aa45069a839e2680ca7ac8acbfcc1fde4e405ac9f0d903`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

### `thm-the-primary-obstruction-class-is-independent-of-cellular-choices`

- Context: `fb7f6b73549ac02e220776c830e0adf946315dc8e444cb4a38341de96b73ef95`.
- Pre-edit guard: `287b1d32fce38914daba37b599038de7fea2620e5745ec7fa647cee824139b2d`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: the difference-cochain definition fixes the prism orientation and comparison coordinates but does not prove canonical cochain invariance under changed cell orientations, lifts, whiskers, and transport coordinates. Exact published interfaces separately give the orientation/lift equivariant-Hom rule and homotopy-group path transport.
- Repair: cited the primary-cochain rule for orientations and lifts; derived whisker invariance from transport around the comparison loop; and proved that a stalkwise natural coordinate isomorphism intertwines every cellular incidence transport and hence the cellular coboundary. The prism identity is unchanged.
- Post-edit guard: `9ac7f66c9fad41be739e5f5dc56d0221ca6840208b385f8c351588142cabb0a1`.
- Checks: focused precheck and strict proof-contract checks passed.
- Rejudge target: yes.

#### Reader warning `s8a-7f1e3417f3f8f07c4ffbc2a9`

- Outcome: `nonfatal`.
- Evidence: the definition invokes the standard reduced-cohomology suspension isomorphism abstractly. The Bockstein proposition then fixes its chain-level cone realization as `sigma_n=(-1)^n partial` and proves commutation with that convention. Omitting the chain-level sign from the abstract definition is a presentation seam, not an underdetermined or false mathematical statement.

#### Reader warning `s8a-5a8067907d3f5cbc0849147c`

- Outcome: `nonfatal`.
- Evidence: Steenrod–Epstein Chapter VII §5, printed p. 112, explicitly computes `a_1=m! u^p·J_1^p=(-1)^{p(p-1)/2}m!`, which confirms the sign and coefficient used locally. Describing the convention-dependent pairing sign as arising from bare tensor-functional evaluation is imprecise relative to the library's additive-cross-product convention, but it does not make the coefficient or theorem false and is immediately repaired mentally by reading the displayed source convention.

#### Reader warning `s8a-9a44384d30e00a1b836b1b5f`

- Outcome: `nonfatal`.
- Evidence: Steenrod–Epstein Theorem 5.4, printed p. 112, states the local top coefficient exactly. The inverse factorial is instead part of the normalized `P^i`: the printed Definition 6.1 displays a positive exponent, while Lemma 6.4's proof on p. 113 explicitly uses `(m!)^{-q}`. That internal source inconsistency explains the local normalization correction and does not undermine Theorem 5.4; the item's own recurrence also derives its coefficient.

#### Reader warning `s8a-dc52a7a4aefd0043ef42bd40`

- Outcome: `nonfatal`.
- Evidence: the claimed parity is the immediate decomposition `k+i+j=2k`, `m(r^2+r+s^2+s)` even, and `mrs(1+p)` even. For the Adem calculation, step 4.1 fixes the normalized expansion, its four parity rows, coefficient action, transposition signs, and coordinate comparison, while steps 5.1–5.2 display the resulting two coefficient identities. Steenrod–Epstein Chapter VIII §1, printed pp. 119–121, contains the same four finite sums and reductions. Expanding every intermediate row would improve presentation, but the omission does not conceal a false inference.

## Sources consulted

- J. P. May, *A Concise Course in Algebraic Topology*, Chapter 25 §3, printed pp. 222–223, fetched from `https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf`: supports the ring-prespectrum multiplication, structure compatibility, unit, associativity, and graded commutativity data used in `def-pairing-and-unital-multiplication-of-sequential-prespectra`.
- N. E. Steenrod and D. B. A. Epstein, *Cohomology Operations*, Chapter VIII §1, printed pp. 115–118, fetched from `https://web.archive.org/web/20230124163804if_/https://people.math.rochester.edu/faculty/doug/otherpapers/steenrod-epstein.pdf`: supplies the row-column free resolution, the cochain-level direct/iterated comparison (Lemma 1.1), the explicit finite/regular caveat, and the transposition formula of Lemma 1.3 used to repair `lem-wreath-double-power-coefficient-symmetry`.
- N. E. Steenrod and D. B. A. Epstein, *Cohomology Operations*, Chapter VII §§5–6, printed pp. 112–113, fetched from the same primary-source PDF: Theorem 5.4 confirms the circle and general top coefficients; Definition 6.1 and the proof of Lemma 6.4 expose the printed factorial-exponent inconsistency in the normalization of `P^i`.
- N. E. Steenrod and D. B. A. Epstein, *Cohomology Operations*, Chapter VIII §1, printed pp. 119–121, fetched from the same primary-source PDF: gives the four odd-primary double-power coefficient sums and the high-degree binomial reductions used for the two Adem relations.
- Ralph L. Cohen, *The Topology of Fiber Bundles*, Chapter 2 §4.1, Theorem 2.21, printed pp. 64–66, fetched from `https://math.stanford.edu/~ralph/fiber.pdf`: proves that the direct-limit infinite join orbit projection is a universal ordinary principal bundle, via its free equivariant-CW structure.
- Donald Stanley and Pooya Ronagh, *Algebraic Topology*, §3, Propositions 33–34, printed pp. 64–66, fetched from `https://pooya-git.github.io/files/algtop2011.pdf`: states ordinary local triviality and numerability for the colimit join and constructs the positive-coordinate section by normalizing the chosen label.
- The other completed decisions used complete local consumers and exact supplier interfaces.

## Validation and closure status

- Exact-ledger reconciliation passed: every one of the 52 owned rejection tuples has exactly one adjudication. Outcomes are 43 `confirmed_fatal`, one `confirmed_nonfatal`, and eight `false_positive`.
- Reader-warning reconciliation passed: every one of the six owned warning ids has exactly one owning-group disposition; all six are `nonfatal`.
- The 43 fatal adjudications have exactly 43 matching group-b defect-ledger rows, with no missing, multiple, or extra group-b adjudication reference.
- Group-wide `precheck` passed on 135/135 owned items. `rendercheck` initially identified four multiline displays; joining each unchanged formula onto one source line repaired the rendering in `lem-adem-double-power-comparison`, `ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space`, `prop-the-manifold-orientation-system-is-a-local-system`, and `thm-milnor-join-model-is-a-contractible-free-g-space`. The rerun passed 135/135 with zero errors and warnings. Their final guards are respectively `edec94eec8fdd0cfc3730f51bd5d6f0274e521f31a12ff6ac3342735fceedcfb`, `1e774934a84989cae81d2db7fa404e8e36f2144ee3550b81f9f589a0ceaecfb3`, `c69d8c3a3b64e4ad75ece2e0f20652e582d585e48c3ab62fff4054f9308ff6a2`, and `ec7dfd9e84cb3cf0d21102bbc8e224cc379776655fcf238d6db8e197fc05ffdc`.
- Strict proof-contract checks restricted to the 43 licensed fatal repairs passed: Batch 5, 24/24; Batch 6, 15/15 with one nonblocking shotgun-citation warning on the already dispositioned Postnikov presentation gap; Batch 9, 4/4.
- The full Batch-9 strict contract passed 20/20. The full Batch-5 and Batch-6 sweeps retain one and seven hard errors, respectively, all in items without a content/contract edit licence in this dispatch. They are stale exact quotes or step-use records after licensed supplier Statements changed: `lem-cyclic-p-fold-power-construction`; `prop-maps-of-prespectra-induce-functorial-maps-on-stable-homotopy-groups`; `prop-the-sphere-prespectrum-homotopy-groups-are-the-stable-stems`; `thm-postnikov-towers-exist-for-connected-cw-complexes`; `cor-classifying-space-of-a-discrete-group-is-a-k-g-one`; and `cex-cellwise-vanishing-obstructions-with-incompatible-choices-need-not-give-a-global-extension`. The prespectrum-maps item accounts for three of the seven Batch-6 errors. The two stale contract records on licensed items (`lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres` and `thm-principal-bundles-are-classified-by-maps-to-bg`) were synchronized and now pass.
- `manifest-deps` passed for all 135 owned manifest entries. `git diff --check` passed.
- `frontier-dependency-ledger refresh` completed. All twelve batch inputs are reviewed; the nine edges whose consumers are in Batches 5, 6, or 9 have verified reviews, with no owned open edge or orphaned review.
- `step7-scope check` passed: four groups, 765 partitioned items, zero open rejections, and 24/24 warning/alert dispositions.
- The run-wide defect-ledger checker reached all 262 run rows and failed only on the out-of-scope duplicate group-a references `phase-2-next-21-step7-a-047` and `phase-2-next-21-step7-a-077` for `thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup`. The group-b reconciliation above is clean.
- The official Step-7 guard was run against `pre-step7`. It reports 12 group-b `nonfatal-edit` errors because each affected fatal row carries the true current pre-edit guard captured during this adjudication, but the item had already moved away from the immutable baseline state before that row was recorded. The affected ids are `ex-steenrod-squares-on-real-projective-space`, `lem-adem-double-power-comparison`, `thm-excision-and-mayer-vietoris-with-local-coefficients`, `thm-generalized-decomposition-numbers-exist-and-are-unique`, `thm-milnor-join-model-is-a-contractible-free-g-space`, `thm-obstruction-theory-for-lifting-through-a-fibration`, `thm-poincare-duality-with-the-orientation-local-system`, `thm-principal-bundles-are-classified-by-maps-to-bg`, `thm-reduced-powers-satisfy-naturality-instability-cartan-and-adem-relations`, `thm-simple-postnikov-stages-are-classified-by-k-invariants`, `thm-steenrod-squares-are-well-defined-and-natural`, and `thm-the-primary-obstruction-class-is-independent-of-cellular-choices`. The append-only adjudication ledger cannot be rewritten or given a duplicate tuple in this task; this requires the engine's Step-7 guard-recovery route.

## Blockers

- Engine-routed guard recovery is required for the 12 immutable-baseline/pre-edit guard mismatches above.
- Eight downstream contract errors remain outside this dispatch's fatal repair licences and require an authorized closure pass.
- Run-wide defect-ledger closure remains blocked by the out-of-scope duplicate group-a defect row.
