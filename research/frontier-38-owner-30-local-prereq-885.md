# A885/B886 local prerequisite authoring — frontier-38-owner-30

## Scope and stable handoff

Authorized subject: nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties and its examples. It remains one of the exact 30. Only its draft item files and this note were edited by this repairer; disjoint helper evidence is listed below. No plan-spec, manifest, ledger, task, shared track document, page edge, or autopilot-state file was edited. Existing 873/877 page edges were retained.

**Local proof packet complete for independent review; engine certification is not claimed.** The promised perfect-field and arbitrary-field Barsotti–Chevalley theorems, exact 8.6/8.26 reductions, projectivity, and both B examples all have full local proofs. Final inventory: **69 A items and 2 B items**, below 100/page. All remain draft. No recorded-unproved remark replaces a commissioned result and no verification/audit/judge stamp was invented.

The perfect-field theorem retains the unique smooth connected affine normal subgroup for a connected group variety. The arbitrary-field theorem retains existence for an arbitrary connected finite-type group scheme, allowing a nonsmooth subgroup even for smooth source; no uniqueness is asserted there.

## Full-source retrieval and actual reading


All PDFs are complete source texts. Reading was targeted to the named sections, not cover to cover. Existing Milne/source reports, binding AG-GRP-1/quotient-boundary contract, CLAUDE.md, README.md, and SCHEMA.md were read. This is a local author source check, not an independent whole-item audit.

| Source | Full-text evidence | Targeted reading and exact route |
|---|---|---|
| Milne, *Algebraic Groups*, corrected 2022 printing | https://www.jmilne.org/math/Books/iAG2022.pdf; `/tmp/frontier38-groups-review.pdf`; SHA256 `f2ddd8fa4d263085f173934664b246007a2c0bd539739b7c82de39bfb5d21f40` | All §8(a–h), printed pp.148–156, including proofs 8.6/8.26/8.27/8.28. Also 5.14, 6.42, and Appendix B.35–B.38, printed pp.606–610, for quotient imports. 8.25 is explicitly a sketch, not a completed local proof; 8.16–8.21 import Milne 1986. |
| Brion, *Some structure theorems for algebraic groups*, arXiv:1509.03059v3, 12 Dec 2016 | https://arxiv.org/pdf/1509.03059; `/tmp/ag885-brion-structure.pdf`; SHA256 `dd956bc2ef9b7d148be05fdabc92aefa5ace28582c721afc0f2e2ef8c2225ea7` | §2.7 pp.19–20, §2.9 pp.25–27; §4.1–4.3 pp.33–41. Thm.2.7.2 delegates arbitrary subgroup quotients to SGA3 VIA.3.2. Lemma 4.3.1 is also an outline importing the next text. Lemma 2.9.1/Prop.2.9.2 give the correct high-Frobenius **image** reduction. Lemma 4.3.5 gives the exponent/power-ideal inseparable descent. |
| Brion–Samuel–Uma, *Lectures on the structure of algebraic groups and geometric applications* | https://www-fourier.univ-grenoble-alpes.fr/~mbrion/chennai.pdf; `/tmp/ag885-chennai.pdf`; SHA256 `367319f7b220fd8a4384657fbbed52bd1d757937de34f6377610970df992fb38` | Chapter 2, especially §2.3 pp.27–32: rational fixed-point affineness Prop.2.3.2, composition Lemma 2.3.3, boundary modification Prop.2.3.4, divisorial-valuation Lemma 2.3.5, and full dichotomy Lemma 2.3.6. This is the exact full treatment missing from the Milne 8.25 sketch. The commissioned group-case dichotomy is now supplied locally; the separately uncommissioned general-X compactification assertion is unnecessary. |
| Milne, *Abelian Varieties*, v2.0, 16 March 2008 | https://www.jmilne.org/math/CourseNotes/AV.pdf; `/tmp/ag885-av.pdf`; SHA256 `f5ca4e63e5092a4b102daad1470e4cbed5fe8f82115e3a28c8881e3f67f6aaef` | Chapter I §3, printed pp.16–19, rational-map extension Thms.3.1/3.2, group-target Lemma 3.3, rigidity and homomorphism route. Supplies the full text of the M22 8.16–8.19 import, rather than a citation to the claim alone. |
| Stacks 0BFA, 0BF7, 0B45 | https://stacks.math.columbia.edu/tag/0BFA; https://stacks.math.columbia.edu/tag/0BF7; https://stacks.math.columbia.edu/tag/0B45; HTML saved in `/tmp/ag885-*` | Actual statement/proof read at all three tags. 0BFA is only the short reduction to group quasi-projectivity and proper-plus-ample. 0BF7 contains the substantive regular-divisor/étale norm family construction; its constant line-bundle-class step imports 33.30.5. These imports are now reproduced by the local projectivity packet. |

The Brion and Brion–Samuel–Uma sources are independent authoritative full treatments of the structure argument; they do **not** supply a second independent proof of general quotient representability. Brion's theorem explicitly cites SGA3 instead.


### Further complete sources read



| Source | URL, hash, targeted reading |
|---|---|
| Corrected SGA3 Exposé V, 13 Oct 2024 | https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp5-13oct24.pdf; SHA256 `9198200633f929fe1822520371a9200da4f8cf2513efab3d6a0c7e9330db84cf`; read §7/§8 generic quasi-section and quotient proof, especially Thm.8.1 and its saturated finite-flat-locus construction, printed pp.279–281. |
| Corrected SGA3 Exposé VIA, 13 Oct 2024 | https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp6A-13oct24.pdf; SHA256 `6c8795572d1fc3b21bd02d24b1bfb20a8fb447475702c2674c96939b1eb69582`; read Thm.3.2 and §§3.2.1–3.2.5, printed pp.313–317, including field extension, affine-neighbourhood descent, quotient torsor and separatedness. Unlike the abbreviated imports in Milne/Brion, this supplies the omitted saturated quasi-section proof, with its finite-flat quotient/descent prerequisites now reproduced locally. |
| Conrad, *A modern proof of Chevalley's theorem on algebraic groups* | https://virtualmath1.stanford.edu/~conrad/papers/chev.pdf; SHA256 `ebe1921f22bbe0ffdf8a269ddd65bc06cad82e192113a4ecbc62dbffb780e846`; full PDF retrieved; targeted introduction and §2 quotient/rigidity inputs and sections constructing faithful divisor representations (targeted reading, not an independent whole-text audit). This is an independent full treatment of perfect-field Chevalley, but it also starts by importing general homogeneous quotients, so is not a replacement for their local proof. |
| Milne, *A proof of the Barsotti–Chevalley theorem*, arXiv:1311.6060v2 | https://arxiv.org/pdf/1311.6060; SHA256 `c2d5dcd2a6d56939d7f73a7f7b20c77b2a56ccfc28be24ec3d6dd32e3ff2e43c`; read §§1–2 and its explicit quotient/isomorphism assumptions. It supplies the exact extension/maximal-affine/pseudo-abelian proof structure but expressly imports the general quotient theory. |

Actual additional Stacks text read: [0AFZ] and [0AG0] complete regular-local Picard/factorial proofs; [0BCW] Cartier boundary; [0BEH] parameter Picard constancy; [03BM] finite locally free affine equivalence-relation quotient and its semilocal free-basis reduction; full [0BF9] §39.9 through multiplication [0BFG] and its theorem-of-the-cube import. The cube and multiplication route is now reproduced by the separate three-item packet. Milne AV Chapter I §6 projectivity and §7 multiplication were also located/read; §6's point/tangent separation ends with “the proof ... is similar,” so the local proof deliberately follows the fully spelled-out Stacks construction instead.


Stacks Lemma 39.8.2 [047N], https://stacks.math.columbia.edu/tag/047N, was additionally read in full. The general characteristic-zero group smoothness prerequisite is locally proved by adapting Milne 3.23's nilpotent calculation to multiplication on the identity local ring times its second infinitesimal neighbourhood. It does not assume globally affine coordinates.

## Exact local closure

| Chain | Proof route and exact consumer |
|---|---|
| Proper groups | Finite-cover equalizer for scalar global sections; proper-factor rigidity including nonreduced parameters; commutativity and scheme centrality; proper geometrically integral affine schemes are points. |
| Projectivity | Stacks 0AFZ/0AG0 finite-resolution determinant Picard argument and regular-local factoriality; 0BCW Cartier affine boundary; 0BEH parameter Picard constancy; 0BF7 finite étale norm-family construction; descent of ampleness of the bundle already defined over k; proper-plus-ample 0B45. This proves the main theorem rather than citing Milne 8.45. |
| Rational extension | Codimension-one proper extension, divisorial group-target indeterminacy, arbitrary-field rational extension with full K tensor K descent, including nonreduced tensors; normal projective completion, anti-affine smooth locus, infinitesimal/Krull rigidity, and pointed group-to-abelian homomorphism. No BC theorem is imported. |
| Quotients | Full invariant characteristic-polynomial/semilocal basis finite-relation argument; saturated affine norm neighbourhoods, represented quotient gluing and quasisection descent; effective affine algebra and morphism descent. SGA3 V 8.1/VIA 3.2 cutting/quasisection/generic quotient and finite-field affine-orbit descent produce arbitrary-field normal quotients with torsor identity, separatedness and finite presentation. Nonsmooth subgroups remain allowed. |
| Affine quotient | Faithful comodule representation, line stabilizer, inverse multiple of a normal-subgroup character, normal representation kernel, represented quotient closed in GL. Pure p-power vectors inside a symmetric power form the necessary Frobenius subrepresentation; the full tensor power is not substituted. |
| Jets/dichotomy | Group monomorphisms are closed immersions; finite jet scheme kernels stabilize and Krull intersection proves faithfulness; centre is the stable jet kernel. Rational-action composition, divisorial valuation models, fixed-point reduction, and complete group-case Rosenlicht dichotomy reproduce Brion–Samuel–Uma 2.3. No separately uncommissioned general-X boundary assertion is needed. |
| Multiplication/almost-complement | Full specialized cube/see-saw argument via cohomology, formal axis obstructions and completion; symmetric pullback arithmetic; multiplication finite faithfully flat of rank n^(2g), including characteristic dividing n. Torsor norm, rational extension and pointed homomorphism give connected normal almost-complements, smooth over perfect fields. |
| Exact 8.6 | Images are exact kernel quotients; affine/smooth/connected extension and quotient properties, products, largest smooth connected affine normal subgroup by dimension, unique pseudo-abelian quotient. No abelian quotient is assumed in this supplier. |
| Exact 8.26 | Separable-algebraic stability via maximal subgroup and finite Galois ideal descent; properness field descent; reduced neutral subgroup. The centre's reduced identity component A is proper by dichotomy; G/Z is affine by jets, Z/A finite, and G/A affine. A smooth normal almost-complement is then affine and trivial by pseudo-abelianness. This Brion centre-quotient route has no BC cycle and avoids Milne's unsupported global-function shortcut in the zero-dimensional-centre case. |
| Perfect BC8.27 | Exact 8.6 plus exact 8.26. An abelian quotient is pseudo-abelian by the proper/affine point criterion, giving uniqueness. |
| Arbitrary BC8.28 | Explicit finite coefficient model over a finite purely inseparable stage of the perfect closure; power-ideal descent retains nilpotent thickening; quotient properness proved from the proper abelian source and descended. General positive-characteristic source reduces through the smooth Frobenius image, not the whole twist, with connected finite kernel and affine extension. Characteristic zero uses the new general Cartier lemma. |
| B examples | Smooth proper elliptic cubic with regular multiplication proved from rational chord formulas and a local completion/Taylor algebraicity bridge; split extension A times G_m with scheme kernel and quotient verified on all test schemes. Both reuse A. |

Independent structure treatments are Brion's full monograph, Brion–Samuel–Uma's full dichotomy, and Conrad's complete Chevalley treatment. The general quotient proof is reproduced from SGA3 and reconciled with Milne Appendix B and Brion's imports; those imports are not falsely called independent quotient proofs. These readings and local audits are not an independent whole-packet certification.

## Integrated helper evidence

- research/frontier-38-owner-30-local-prereq-885-rosenlicht.md: four group-case supports.
- research/frontier-38-owner-30-local-prereq-885-quotients.md: five SGA3 quotient supports.
- research/frontier-38-owner-30-local-prereq-885-affine-quotient.md: five affine quotient supports.
- research/frontier-38-owner-30-local-prereq-885-abelian-multiplication.md and its wikilink receipt: three cube/multiplication supports.
- research/frontier-38-owner-30-local-prereq-885-pseudo-abelian.md: five reduced-neutral, almost-complement, separable-stability, properness and completeness supports.

The repairer read every helper proof before consuming it. The properness helper uses the minimal approved ID lem-nonaffine-geometric-properness-field-descent; no unused quasiprojectivity claim was added.

## Final checks and hashes

Fresh YAML-based traversal from all 71 exact scoped files: **3,052 resolved recursive nodes; no missing dependency; no cycle**. All external suppliers are published; there is no external draft dependency, including unbuilt 873/877. Scoped wikilinks resolve and are declared. This audit preserves the protected page edges.

The final normative precheck initially requested canonical phase renumbering and induction tags. Those repairs were adopted, including all numbered step references, without changing statements or mathematical arguments. Earlier raw helper hashes for renumbered files are superseded by the consolidated hashes below.

Final explicit-path commands used PRESTIGE_APP_DIR=/tmp/ag885-render-app and every path in the inventory below:

- node tools/tsx-run.mjs tools/precheck.mts [71 paths] --json: **71 files, 70 proof-bearing files, 0 failures**, exit 0.
- node tools/rendercheck.mjs [71 paths] --json: **71 checked, no errors or warnings**, exit 0.
- node tools/proof-layout.mjs [71 paths]: **71 items, 216 steps, 0 defects**, exit 0, after every final item edit.

The temporary app-layout shim selects the actual renderer and existing tsx installation through symlinks; neither repository was edited for the shim. No test suite was run. These are local format/render/dependency checks, not independent mathematical acceptance.

**Remaining status:** no known mathematical Step-1 supplier or commissioned Step-3 claim is unauthored. The parent must integrate page inventories through the authorized workflow, independently certify stable proofs and sources, and decide the held gate. This note does not clear a gate or advance run state. Authoring is stopped after this stable handoff.

## Exact inventory and final raw SHA-256

### A885 — 69 items, in local dependency order

| Item | Raw SHA-256 |
|---|---|
| `def-abelian-variety-over-a-field` | `1d29b1f20dcf0c988c551f0d94afeb66920249cd1681ed0d678f9818e2060cf1` |
| `lem-proper-geometrically-integral-affine-scheme-is-point` | `aca868dd2caacec76f88c13d177524ebe7cf0561689dfe685c75273ac33daf71` |
| `lem-nonaffine-holomorphic-rational-map-product-curves-algebraic` | `f90cc5da34354ba63eb1153d74d4f90654761fb201336bcddccd304cd2a3a24a` |
| `lem-nonaffine-effective-affine-algebra-descent` | `c50f052c3cdd2069a36f86f9c93cba9432551d0d5514b7f30748b7f7e40fcb4f` |
| `lem-nonaffine-fppf-descent-of-scheme-morphisms` | `bdf3f465531658c9e24b38075893f826eef48740516d9d98ac9a53e3201d9569` |
| `lem-nonaffine-affine-and-finite-morphism-fppf-descent` | `e7fac6e3a70be826163e1b2d1f259a430408a647afcbc1279ad2c98f34b04178` |
| `lem-nonaffine-affine-group-faithful-representation` | `a2879c585c9f833646de67b7341c3d4df5b28afb826e473d7e123d68ebe57a04` |
| `lem-nonaffine-affine-nilpotent-thickening` | `1facaa0dda259fda0d124ad58e14d2797c82f920ef547365764d9fecb9de5ca0` |
| `lem-nonaffine-flat-hypersurface-slice` | `eb8a493d5b1e72bc6089f02f009926255641cf4d009f9fa9ec88b92c5d8d5723` |
| `lem-nonaffine-generic-quasisection-flat-groupoid` | `b20207c9a39be7ededef007c863c17e54119b4758b48a8646f70c9cd21e1d0e1` |
| `thm-nonaffine-finite-flat-affine-equivalence-quotient` | `c6d7053490b6574e56d4762be9d40972bef0104df65e115ba28db13c2598ce03` |
| `lem-nonaffine-finite-relation-saturated-affine-neighbourhood` | `20ecbbf8b725be21a2966fdb120ed5de0bc695c2f55c0b533783125bdb8df8b6` |
| `thm-nonaffine-finite-relation-quotient-with-affine-orbits` | `4879231338b2cd412691b9393470d40e824232d2403c96203b22f43d49151749` |
| `thm-nonaffine-groupoid-quotient-from-quasisection` | `ee3b9e89482cd501e0746d24a94e1246702be8e916c5d9ba17ede2e8b5937641` |
| `thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation` | `eecfb6f71ca1cdd2fbb6f03e101954764d9ebc1506d9ab917956426aa2c0526f` |
| `lem-nonaffine-finite-field-descent-scheme-with-affine-orbits` | `ac4d50159ac4789af6ea830dffaceee7602d033ea3c6020c8c6fe76696742553` |
| `thm-nonaffine-group-scheme-normal-subgroup-quotient` | `9c6ca17d8d5d337e5e494bcc97a661bd19bacc08dc129d451d84e19a3aa5029c` |
| `lem-nonaffine-global-sections-flat-field-base-change` | `819e6a4b3d3f92a0d26cc6150ecd77ab808ea5bef6870307cb3003695e56d5ad` |
| `lem-nonaffine-group-monomorphism-closed-immersion` | `c294484d25d7d6a92bd019e5c88d6a77bd95b4346e2f7c78a9e7dbf9803de5f5` |
| `lem-nonaffine-connected-group-geometrically-connected` | `1fd3770f67b3fbd52a3b1ccddb643f6196a90489bb60cc01ecb40f217b03b415` |
| `lem-nonaffine-subgroup-scheme-stabilizer-of-line` | `db689086a5b9b204dea662aff1e8cbc33898359d6960ee74f309d59ce51a5b65` |
| `lem-nonaffine-high-frobenius-smooth-image` | `bc8c92c6e3a95c3e0977a96ad23ccd7bc1e844bd199b7ab7d9f533b194189988` |
| `lem-nonaffine-normal-subgroup-inverse-multiple-character` | `fc7f3cc4e75f94f105fabb4ad0b7cdf1a0d9f905d2ad862a7dbe54945fb8b3f1` |
| `lem-nonaffine-normal-subgroup-kernel-of-representation` | `9693fd34874438631c7dc51520fa01bf1bb47c44df8eecb5e54a18df32ce2694` |
| `thm-nonaffine-affine-normal-group-quotient-affine` | `9871a86b30569ab961e35793d497aec412ccb8ec3e04e4d571a76daaa36db1d1` |
| `lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties` | `17c90efbc99055ecf08901683c369f7321f7e13cb9de56b2ef15a605ff575f23` |
| `lem-nonaffine-group-image-exact-quotient-properties` | `4ab1924ff75b3c04713ca087bc767e485c928a502a0c0e622ef26fc4be9d1030` |
| `lem-nonaffine-affine-normal-subgroup-products` | `48333cd2818aae777bf0a71f4a4db284f20bf9015728bc83ef958d797d6dfd0b` |
| `lem-nonaffine-ample-finite-type-projective-immersion` | `68e6ea52687437a74455105b761470ec98827a0dc5b4c804405814c44f164f11` |
| `lem-nonaffine-ample-line-bundle-field-descent` | `2dfeb6bade3ec62f92e0e86ed034f4cd13ac6bc4a4c5e1db455f16f8ec6328cc` |
| `lem-nonaffine-antiaffine-factor-rigidity` | `d3cc7f9ce49d5a6724fba9404c0aa5ae8116b680f5024ecc1286cd70a25572b0` |
| `lem-nonaffine-faithful-fixed-point-jet-representation` | `dbe6035cbd784b394f5db8c2983645d2ce5e4e7620f20b85f36f3c1d0a22d517` |
| `lem-nonaffine-centre-is-stable-jet-kernel` | `c26003c9633db7efc1063ce464c46a2f4c6d8ffb531eca3541539a04ebfbe956` |
| `lem-nonaffine-characteristic-zero-group-smooth` | `9d91377435373cdc89f809818757902f2bf464fdcc242456f8dbe3c48b0f6de8` |
| `lem-nonempty-smooth-scheme-finite-separable-point` | `9d12c4ab900ab971a6c3d300f63295b9524c1986df06ba3a77ad6661a363cbbc` |
| `lem-nonaffine-finite-galois-descent-of-morphisms` | `4aefbd8a1e4ab1a573990630957f21fbad9471b441dd166ddb7e9b723e430d77` |
| `lem-nonaffine-commutative-torsor-norm-map` | `109f6fde5bd0a11a158a2efca54f46df6eb1a3399d7a366ff230749c03dda97d` |
| `lem-nonaffine-rational-map-normal-to-proper-codimension-two` | `a0f854efe8aae918abc6214e4fbc762d0c490f88d182fc1ad6fd6a7ff3555962` |
| `lem-nonaffine-divisorial-valuation-restriction-model` | `6cb76d1fd3578cff3bda9d446921d46071d5ebfbbd186584c5e8ede806c53061` |
| `lem-nonaffine-finite-field-descent-of-morphisms` | `111a241b72bcba2271f92c415be1e363af6e971471b245928d66cc8f7be9b51d` |
| `lem-nonaffine-purely-inseparable-affine-proper-descent` | `7d9b6089468f765807fda11649e1cd38ae0ff1f06b3b4735692d126f810f9a03` |
| `lem-nonaffine-frobenius-power-ideal-subgroup-descent` | `28807e835a2c572580e875c0b84267773b9ffda08ffa1b8d880dbaf878d53138` |
| `lem-nonaffine-geometric-properness-field-descent` | `8d6de990c09ffbb0ce0d9d3a7fd7fb548e592882bcb121f1f990f1bebeb1654e` |
| `lem-nonaffine-regular-local-picard-principal-localization` | `aa79f128b268bd453fa3d82c991214e0f84fbd34534c174a7636f1cf6fc5bb6b` |
| `thm-nonaffine-regular-local-ring-is-ufd` | `7c2658372d9873cb98f0d8179239caf2911452c86a8a0f69a65f0cbaef1fdac9` |
| `lem-nonaffine-group-target-rational-indeterminacy-divisors` | `d17b82be060e70f1a6201b34628c409be1a179a129e92d60bcfc27eb709c44e6` |
| `lem-nonaffine-line-bundle-affine-space-parameter-constancy` | `89de0882682a559c9cff0f0b758cf01f84511918db7503d88017136265e0a641` |
| `lem-nonaffine-rigidity-proper-geometrically-integral-factor` | `efa32bd454faf59452863594178da4caa3ba4c92ef994f513c0d309304d30e92` |
| `prop-abelian-variety-commutativity-from-rigidity` | `b32d0ac5ded0f49c2e12586c535704a6bb0f02d79594ae01b0b61ef620ecab27` |
| `lem-nonaffine-smooth-affine-open-cartier-boundary` | `7da95a24054b5726aa0b6996ac2f524768a25edbcfea65374b302572520bf6c5` |
| `lem-nonaffine-smooth-connected-group-has-ample-line-bundle` | `faf693ea90303bcc8fc05fd0a7bbf5df576c114d50ed43437771836bdc05f667` |
| `thm-abelian-variety-is-projective` | `efa46328b0fb1a4b279e55b791307dd9b95979b69fa20f93c50bd8efcba2ca53` |
| `lem-nonaffine-theorem-of-the-cube-for-abelian-variety` | `a0e70a5abc1eec4c62fe0a0f999d1dcae54c8abcac8a0c722befccfe16fc7c59` |
| `lem-nonaffine-multiplication-pullback-symmetric-line-bundle` | `39335d766d6be0f88c8efd6cfbeb360f6863b9a57751d0ac82b25d13788279e8` |
| `lem-nonaffine-normal-completion-smooth-locus-antiaffine` | `795145574d2ddfad5911f34d9634751b9670e574d60854251124891f7eee46f2` |
| `thm-nonaffine-maximal-smooth-connected-affine-normal-subgroup` | `c81700a2913a3451aef0c3474e9b90f8e68ff917907cf7dca8f8a67b1a542ecd` |
| `lem-nonaffine-pseudo-abelian-separable-field-extension` | `300afc0f2ea37fe1d67e665073ba81678c7f903a4ce3f95a49175ad64ce4110a` |
| `lem-nonaffine-rational-action-composition-domain` | `9a86b86b1c33f2db18d76c6792f6bfa8759430bdfdf95fe2a4b18406818de45e` |
| `lem-nonaffine-rational-fixed-point-affineness` | `6e9c3697b276a9d6c59902acf404a870aefb400ad1435f850e9412a987f31e70` |
| `lem-nonaffine-reduced-neutral-subgroup-over-perfect-field` | `6589ac58199d1546130172da46f6de71ca32b7df57b97baa0fa677022e99591b` |
| `prop-nonaffine-smooth-group-pseudo-abelian-quotient` | `7e7f7a6607e0ffde37329e399b23887106710b5e81af106c3f2ffc7cefadca70` |
| `thm-nonaffine-rosenlicht-dichotomy` | `b0c745aa17b1c56713a464327df2a5896570e8ff189217e4d47971e04fd8d671` |
| `thm-nonaffine-rational-map-smooth-variety-to-abelian-variety-extends` | `363f9eec12e17004c8f4700052503aa92a0f03a29ad4c1a3c35395df523c996f` |
| `thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism` | `2e903f48ab503aa875adc4887f9692ce9b28af79c0122801e62f301105f06d03` |
| `thm-nonaffine-abelian-multiplication-finite-faithfully-flat` | `b45bb22a632ff4cc7bcc7a22eba1650ca4731a27c42993e7de384f7666b39708` |
| `thm-nonaffine-rosenlicht-almost-complement` | `60489b28d6b17b468ee5feda2be2bc8d2c1d8ea1e0c47c9e4d9ec4d22dc396ee` |
| `thm-nonaffine-pseudo-abelian-perfect-field-is-complete` | `ad13a47c236ba42101b9aa6b739ee677b8dbad198e020c4b27346e1fe3a7cbe8` |
| `thm-barsotti-chevalley-perfect-field-group-variety` | `7457e4c14718683f195892bf1ed1425154577aba438731ef844d31253447dc4c` |
| `thm-barsotti-chevalley-existence-over-arbitrary-field` | `7c5c874bab28aefed42c2fcf87f885b27f5c50b3cd836dbbda951a4e90541048` |

### B886 — 2 examples

| Item | Raw SHA-256 |
|---|---|
| `ex-affine-extension-of-an-abelian-variety` | `9455485f16374b7e6eea64d3c828bada515b40103581bcd1b778c05f3ea0b54f` |
| `ex-elliptic-curve-as-nonaffine-algebraic-group` | `95ff2470d5e1309dd7411ad67a1d6988f570a7e703b0addf68f806560007b44b` |
