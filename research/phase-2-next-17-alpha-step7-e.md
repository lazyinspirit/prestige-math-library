# Step 7 Alpha adjudication — group e

Run: `phase-2-next-17`  
Group: `e`  
Batches: `8`, `9`

## Source record

- Kleshchev, *Lectures on Infinite Dimensional Lie Algebras*, §§6.4, 7.1–7.2, 9.2, 10.2, <https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf>. Read the complete relevant translation, loop-realization, constrained-character, Weyl–Kac, and Kostant passages. These support the normalized invariant form, affine translation formula, loop root spaces, Casimir constraint, coefficientwise character formula, and multiplicity extraction used below.
- Farrell–Lassueur, *Modular Representation Theory of Finite Groups*, §40, Definition 40.1, Proposition 40.3, Theorems 40.4–40.5, <https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload17.pdf>. Read the complete statements and proofs. These support the restriction-summand definition of block induction, the defect-preserving domain of Brauer's first theorem, and the double-coset/vertex argument in the Brauer–Green compatibility theorem.
- Saunders, *Modular Representation Theory*, Lemma 5.14, Example 5.15, Theorems 5.16–5.17 and Corollaries 5.18–5.19, <https://jpsaunders.uk/ModRep/NotesWebsite.pdf>. Read the complete relevant statements and proofs. These independently support the block-induction and Green-correspondence interfaces used below.

## Completed adjudications

### `def-residue-two-cocycle-on-a-loop-algebra`

- Rejection: `(def-residue-two-cocycle-on-a-loop-algebra, gpt-5.6-terra, db45f784b8cfbffae69553403882b4129fcbd11d3ccd72419dc7e80247a75cc0)`.
- Outcome: `confirmed_fatal` (`logic`). Pre-edit guard: `e474c770319b685fcad020b41cd68869673267db1110ed3e57a7a3382c20aca8`; post-edit guard: `111b1a9447856cd675c72edb2e6283101bf9e58dcf3acf32b9632a92fcc278cc`.
- Repair: fixed `B` at the outset as the long-root-normalized rescaling of the Killing form and stated the normalized root-vector identity for an arbitrary long root. This removes both the arbitrary-form contradiction and the forward reliance on existence of the highest root.
- Dependencies checked: `lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy`, `lem-finite-semisimple-cartan-root-and-string-structure`; source check: Kleshchev §§7.1–7.2.
- Validation: definition frontmatter parsed; batch-8 manifest dependency check passed; proof precheck correctly found no proof body.
- Reader warning `s8a-98ddf455f1e4d118aaee7a25`: `covered_by_rejection` using the exact rejection above.

### `def-untwisted-affine-central-extension`

- Rejection: `(def-untwisted-affine-central-extension, gpt-5.6-terra, e8c9153ad3e5e9ff763f5edf47717690a60ecbf9f892dcf62be01fcdc2e4f215)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). Pre-edit guard: `a1d6fb301e47f190a48179f887d15fdc79d7c02a82c99ee2d25cf0f65fa333d2`; post-edit guard: `c5778b7dbc1dbb8f4f3dbc958260df386d2fc3290b8eea468a43918a89773ea2`.
- Repair: added the residue-cocycle definition as a direct dependency and bound both `B` and `omega` to that definition before using the mode formula. The alternation and cocycle lemmas retain their exact roles.
- Dependencies checked: `def-residue-two-cocycle-on-a-loop-algebra`, both residue-form lemmas, and the loop-algebra definition.
- Validation: batch-8 manifest dependency check and frontier-ledger refresh passed; proof precheck correctly found no proof body.

### `prop-affine-weyl-group-is-a-coroot-lattice-semidir-product`

- Rejection: `(prop-affine-weyl-group-is-a-coroot-lattice-semidir-product, gpt-5.6-terra, d2aa7e3aa519e5896e3ef0341c7834896a8449e86899324d8f52303097b546ac)`.
- Outcome: `confirmed_fatal` (`logic`). Pre-edit guard: `f9d4ce78293a03b2f440ef3b1b0e92f7b045877516c39b00370712e1ec45192f`; post-edit guard: `0e5aed9bcb3268b76538d0cf2ec0399bb4b5c3a4aeba2a46a95b0ef09deab9a9`.
- Repair: imported the normalized invariant loop form instead of conflating it with the raw Killing form, and moved the full affine translation formula into the proposition's exported Statement. Under the normalized form, `nu(theta^vee)=theta` and `B(theta^vee,theta^vee)=2` are valid.
- Dependencies checked: normalized residue form, highest-root lemma, finite root/coroot structure, finite Weyl signs, and the loop/GCM comparison; source check: Kleshchev §6.4, especially formula (6.10) and the translation-semidir-product proof.
- Validation: focused proof precheck, strict proof contract, batch manifest dependency check, citation-fidelity check, and frontier-ledger refresh passed. Citation contracts of the same-group consumers of the two repaired definitions were mechanically refreshed to their current exact source text.

### `ex-first-weight-layers-of-the-basic-affine-sl2-character`

- Rejection: `(ex-first-weight-layers-of-the-basic-affine-sl2-character, gpt-5.6-terra, 0b8e8be9a31ef519dce83fadbc62e24e149c5e8811059eab53ac3cddb5b1b60a)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). Pre-edit guard: `9139dbb484cfd517777d865c6784aadc3456293e6725250f9b3729900147e60e`; post-edit guard: `db83af1f939182ff172a453030e2d9cecd79e0af4ef9c8cf8c8acfb71d4d088d`.
- Repair: changed F4 to consume the affine translation formula from the repaired proposition's Statement. The character calculation itself is unchanged.
- Dependencies checked: repaired affine Weyl proposition, affine root list, Weyl–Kac formula, and integral-weight/level conventions.
- Validation: focused proof precheck and strict regenerated proof contract passed.

### `prop-roots-of-an-untwisted-affine-lie-algebra`

- Rejection: `(prop-roots-of-an-untwisted-affine-lie-algebra, gpt-5.6-terra, 0128b3c6028013745133d30833e24cc5f321cc55dbe8989dc504a5d694c215cf)`.
- Outcome: `confirmed_nonfatal`. Guard: `48cbf129c0feaac3235eb81a304eb41e287591cb8bd9379ceca15f88c04c5849`; no content edit.
- Reason: F6 formerly overstated the semidirect-product Statement, but the actual imaginary-root inference uses only the zero square of `n delta`, positive square of each simple root, Weyl invariance of the form, and the definition of real roots as simple-root orbits. Fixing `delta` is also the immediate calculation `s_i(delta)=delta-delta(h_i)alpha_i=delta`. The mathematical claim is intact and the gap is reader-closeable.
- Dependencies checked: root list, null-root definition, Weyl-invariant root form, real-root definition, and the repaired affine Weyl proposition.

### `lem-the-denominator-quotient-has-only-imaginary-cone-support`

- Rejection: `(lem-the-denominator-quotient-has-only-imaginary-cone-support, gpt-5.6-terra, fa34876e4bdb4dde88f86040102432e20ac6da44fe7dbb612e4835159e7a32be)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). Pre-edit guard: `f6540c60be5144bb48c5f41d38c5a1ab9d1380e111792ec07beed2c8f7a914e8`; post-edit guard: `6f65322dfae72c1f86af34e3fb3dafb8dff53780dfb1aecb864f4c1c18ebb46b`.
- Repair: imported the denominator definition for `p_0=1-x`, imported the simple-reflection formula, recorded `a_ij<=0`, and expanded the reduced-word computation showing that a second associated root has nonzero off-axis coordinate.
- Dependencies checked: denominator definition, real-coroot inversion conventions, reduced-word sign lemma, reflection definition, and formal completion; source check: Kleshchev §§10.1–10.2.
- Validation: focused proof precheck, strict regenerated proof contract, batch manifest dependency check, and frontier-ledger refresh passed.
- Reader warning `s8a-dac3cdaa167eb66c97cc157b`: `covered_by_rejection` using the exact rejection above.

### `lem-casimir-norm-excludes-nonzero-denominator-corrections`

- Rejection: `(lem-casimir-norm-excludes-nonzero-denominator-corrections, gpt-5.6-terra, 1b047945d9c3716d1901307cc33047ed61a1f7f9ee2619ec0c6a8276bd7e3a1e)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). Pre-edit guard: `5f2916992deb7b8d437159ed879737133f9afe77594bb3076a569a400f041fff`; post-edit guard: `2eca3c00e10755b53a7782f8a88263a47945b12090bce7917bc13a1e0ea8ae39`.
- Repair: imported the denominator definition and used its exact identity `D=e^rho P` in step 1.1. The Casimir inequality and minimal-support contradiction are unchanged.
- Dependencies checked: constrained Verma expansion, PBW Verma character, denominator definition, invariant form, Weyl vector, and quotient-support lemma.
- Validation: focused proof precheck, strict regenerated proof contract, batch manifest dependency check, and frontier-ledger refresh passed.

### `lem-the-shifted-integrable-character-numerator-is-weyl-skew`

- Rejection: `(lem-the-shifted-integrable-character-numerator-is-weyl-skew, gpt-5.6-terra, f5308cb332126b1344b0d655c2dcf0bd5b4e2a14fe85df27935d188ddda5b9eb)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). Pre-edit guard: `3084c6887e23e838592a9564a67aff7400f67ee50cce97d3667f418619d4d5af`; post-edit guard: `d780bf90f6f9b7f23cd158e841a49bcafaacb415afe941ab6928f8fdbc6761a7`.
- Repair: imported the PBW/Verma theorem and unique-simple-quotient theorem, then used closure of category O under quotients to establish `L(Lambda) in O` before forming its character.
- Dependencies checked: category O, Verma O-membership, simple quotient, integrability criterion, rank-one local finiteness, and denominator skewness.
- Validation: focused proof precheck, strict regenerated proof contract, batch manifest dependency check, and frontier-ledger refresh passed.

### `thm-weyl-kac-character-formula`

- Rejection: `(thm-weyl-kac-character-formula, gpt-5.6-terra, 7e6cd97488fd4344aa0438b4cbfc957c66bd8b39039a012383456f6fc5837e38)`.
- Outcome: `confirmed_nonfatal`. Guard: `d10946996348eae69580fd9d332c21a49dc5cf63fcbc89a777d53b495b8d269c`; no content edit.
- Reason: F2 attributes the supplier proof's explicit length bound to its Statement, but the exact Statement already exports distinctness and coefficientwise local finiteness of the same orbit family. That is precisely the conclusion needed at the disputed sentence, so the gap is closed immediately without changing the theorem or coefficient calculation.
- Dependencies checked: highest-dot-orbit lemma, denominator identity, and integrability criterion; source check: complete Kleshchev Theorem 10.2.2 proof.

### `cor-kac-moody-kostant-multiplicity-formula`

- Rejection: `(cor-kac-moody-kostant-multiplicity-formula, gpt-5.6-terra, caf0a1700219733d2cb65e07f807822cfd3f27571f7494255251c91d7c850748)`.
- Outcome: `confirmed_nonfatal`. Guard: `262bf9ef3d0655dd37f346b63d88e3f50d23d5d557341c196dbc61084b9ca673`; no content edit.
- Reason: F1 wrongly labels a supplier-proof length estimate as part of the Weyl–Kac Statement, but that Statement already asserts a coefficientwise identity in the downward completion. The partition-function definition and completion multiplication therefore give finite coefficient extraction directly. The displayed formula and finiteness claim are sound.
- Dependencies checked: Weyl–Kac theorem, generalized partition function, and formal-completion coefficient finiteness; source check: Kleshchev formula (10.12) and its preceding coefficient comparison.

### `cor-weyl-kac-specializes-to-the-finite-weyl-character-formula`

- Rejection: `(cor-weyl-kac-specializes-to-the-finite-weyl-character-formula, gpt-5.6-terra, abd5ad91f072ba0870c31fb0c889438ad1c5a52b6dfa95d01ac14ce9d193ef0f)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). Pre-edit guard: `2f049458224bc95d5dd2620e4cb942473d9d26907ecd2b908859e9a299997c6e`; post-edit guard: `320b2bf1efa3305ae96f2107f8ee9c1376263c7794684aec8a3862a645aff643`.
- Repair: imported the published finite-type root-descent lemma, whose Statement supplies finiteness of the root set and that every root is real. F2 now claims only the semisimple/simple-root interface its supplier actually exports.
- Dependencies checked: finite-type recovery proposition, finite-type root-descent lemma, real-root multiplicity proposition, and Weyl–Kac theorem.
- Validation: focused proof precheck, strict regenerated proof contract, batch manifest dependency check, and frontier-ledger refresh passed.

### `prop-affine-denominator-separates-real-and-imaginary-root-factors`

- Rejection: `(prop-affine-denominator-separates-real-and-imaginary-root-factors, gpt-5.6-terra, bfab55a1d979577e05d891930daa2baf618974192329192f6efc89931f3d67e3)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). Pre-edit guard: `c0a81fcf3049a9afae4de5f3041933506fa18cc3911bcadd02170b984766b888`; post-edit guard: `9ddea4f3132549319c8e17294e4f8bdc2962ef20502a8b487087d9b485025895`.
- Repair: imported the highest-root and finite positive-root statements and explicitly derived positivity of both `alpha+n delta` and `-alpha+n delta` families from `delta=alpha_0+theta` and `theta-alpha in Q_+`.
- Dependencies checked: affine root list/multiplicities, loop/GCM identification, highest-root lemma, finite one-sign lemma, and denominator identity.
- Validation: after correcting proof-paragraph formatting found by an initial focused precheck, the final focused precheck, strict regenerated proof contract, batch manifest dependency check, and frontier-ledger refresh passed.

### `lem-block-idempotents-are-fixed-by-normal-p-subgroup-brauer-projection`

- Rejection: `(lem-block-idempotents-are-fixed-by-normal-p-subgroup-brauer-projection, gpt-5.6-terra, 8c196fccc315ad846254fd7db3a308d75f5c8798df3f02be547a7b59b1377b6e)`.
- Outcome: `confirmed_nonfatal`. Guard: `a0d83dca5c57a93ac4ff0d084c1fb4a28d3fff1a36e9ee636e469e864072fa58`; no content edit.
- Reason: the central-character Statement does not spell out the scalar-on-simple-module construction named in the proof, but centrality plus the splitting-field Schur property supplies that bridge immediately. The orbit-sum and idempotent-indicator arguments are otherwise complete.
- Dependencies checked: modular central characters, normal-p-subgroup triviality, Brauer projection, and multiplicativity.

### `lem-block-induction-exists-under-centralizer-containment`

- Rejection: `(lem-block-induction-exists-under-centralizer-containment, gpt-5.6-terra, 386534dbd7590a4fc6cd4c841587fc5d9803155d662a08e239787bd4fe4ea353)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). Pre-edit guard: `bc81c3b6506609d00b8891d665d79ab442e6a33d3dd226b6044bc85680621dd7`; post-edit guard: `d655cc9996cbaa3d5367f61d15cf94fece067152f30909468610f3c9d645d11b`.
- Repair: imported the exact defect-group definition and separated it from the diagonal-vertex existence theorem, so the proof now has a cited interface for the assertion that `Delta D` is a vertex of the local block bimodule.
- Dependencies checked: induced-block definition, diagonal-vertex theorem, defect-group definition, Mackey/vertex containment, and Krull–Schmidt; source check: Farrell–Lassueur Proposition 40.3(iii).
- Validation: focused proof precheck, strict regenerated proof contract, batch manifest dependency check, and frontier-ledger refresh passed.

### `lem-first-main-theorem-local-block-existence`

- Rejection: `(lem-first-main-theorem-local-block-existence, gpt-5.6-terra, 0039136220a41111cfaefbd9587d4825b147e462a10e429aa70efa0b39640b4a)`.
- Outcome: `confirmed_fatal` (`logic`). Pre-edit guard: `25cea8a5fccd158986be8614d0b1868455082007deb9150575edb7326569c659`; post-edit guard: `4ce34e726866aafb05d715b7f1bd94f1853baebc70db759fff1d3729d4f5e682`.
- Repair: restricted both the Statement's uniqueness clause and its converse proof to local blocks having defect group `D`, which is exactly the domain in which F5 supplies the `Br_D` central-character formula. The direct consumer already assumes both local blocks have defect group `D`, so its argument remains within the repaired interface without a content edit.
- Dependencies checked: local block-induction formula, modular central characters, maximal Brauer pairs and maximal support; source check: Farrell–Lassueur Theorem 40.4 and Saunders Theorem 5.16.
- Validation: focused precheck, strict regenerated proof contracts, and batch manifest dependency check passed. Contracts consuming the repaired Statement were mechanically refreshed.
- Reader warning `s8a-66ff38cc1eb01f8c7fc3ded1`: `covered_by_rejection` using the exact rejection above.

### `lem-tensoring-preserves-relative-projectivity-for-finite-group-modules`

- Rejection: `(lem-tensoring-preserves-relative-projectivity-for-finite-group-modules, gpt-5.6-terra, 66a401c06d94d3a4542ccee039d40648ea2e63b0517e208988bd66bbee5882b1)`.
- Outcome: `confirmed_nonfatal`. Guard: `51b4bbffdcb7ac97beea75711371ff953b36694aa2656a85a413e1bd33909fdc`; no content edit.
- Reason: F2's headline does not export the counit witness, but the cited proof explicitly constructs the finite witness `W=Res_R X` and its counit splitting. The existing proof contract records that exact supporting passage. Step 1.1 therefore has a valid finite witness and its tensor-induction isomorphism proves the claim.
- Dependencies checked: relative-projectivity definition, the full Mackey/relative-projectivity lemma proof, Krull–Schmidt, and vertex existence.

### `thm-brauer-green-nagao-block-compatibility`

- Rejection: `(thm-brauer-green-nagao-block-compatibility, gpt-5.6-terra, cc4117fad36060a0fbd259b9cf0c3f18a11fd5b4f8314a00c42c72b07517105d)`.
- Outcome: `confirmed_fatal` (`dependency_citation`). Pre-edit guard: `78856d76b57c50b4f3ec54e0810c0d12c98d56aadde4aa239b1da1112a9787d4`; post-edit guard: `4c08ebdf6daa6987d7fdd6eabdcf42a04143f5526f3dcd0f45ef986ce1873fe9`.
- Repair: narrowed F2 to the definedness its Statement exports, imported the double-action convention, and proved the off-identity double-coset vertex exclusion locally from induced point stabilizers, vertex containment, and `C_G(Q) <= H`.
- Dependencies checked: induced blocks, block bimodule action, Mackey/vertex containment, tensor preservation, Krull–Schmidt, and the block defect bound; source check: the complete proof of Farrell–Lassueur Theorem 40.5.
- Validation: focused proof precheck, strict regenerated proof contract, batch manifest dependency check, and frontier-ledger refresh passed.

### `thm-corresponding-block-bimodules-are-green-correspondents`

- Rejection: `(thm-corresponding-block-bimodules-are-green-correspondents, gpt-5.6-terra, 543008db104ecced1595660137bfc1ca2dc00a10e191e95a11d33d59861f01d3)`.
- Outcome: `false_positive`. Guard: `d53ff0eeedeff283d6ffce27c24c3ae92f6e26875f71547a20b44dcfd0a03de1`; no content edit.
- Reason: F1's exact Definition says that the correspondent satisfies `b^G=B`. The already-established meaning of this notation is precisely that `b` is the unique block bimodule occurring as a direct summand of `Res_{N x N} B`. Thus the disputed summand assertion is licensed, while F2 and F4 supply nonzero indecomposability and vertex `Delta D`.
- Dependencies checked: Brauer-correspondent definition, induced-block definition, double-group block module, exact-vertex Green correspondence, and defect-group definition; source check: Farrell–Lassueur Definition 40.1 and Theorem 40.4, and Saunders Theorem 5.16.

## Remaining Step-6 reader-warning dispositions

- `s8a-f39e67bd5f03845f3d4386c4` on `lem-casimir-constrained-verma-character-expansion`: `nonfatal`. Step 1.1 explicitly identifies each simple subquotient as the highest-weight module `L(mu)` supplied by F4, and F5 then applies; the pointwise-finite construction is supplied by the cited Casimir definition/theorem chain. The bridge is compressed but immediate.
- `s8a-2582a4935acc521974ca421e` on `lem-the-kac-moody-denominator-is-weyl-skew`: `not_defect`. F1's exact denominator Definition explicitly exports the sole simple-axis root and multiplicity-one assertion used in step 1.1.
- `s8a-c790502b34b2ea2ae8762203` on `def-induced-block-from-a-subgroup`: `not_defect`. The paragraph binds capital `B` as a block of `kG`, so “no block, or more than one block” unambiguously quantifies over global blocks, while lowercase `b` remains the fixed local block.

## Group closeout

- Exact rejection coverage: 18/18, with 12 `confirmed_fatal`, 5 `confirmed_nonfatal`, and 1 `false_positive`; no duplicate or surplus group-e tuple exists.
- Reader-warning coverage: 6/6, with 3 `covered_by_rejection`, 1 `nonfatal`, and 2 `not_defect`; no duplicate group-e alert decision exists.
- Rejudge targets: `def-residue-two-cocycle-on-a-loop-algebra`, `def-untwisted-affine-central-extension`, `prop-affine-weyl-group-is-a-coroot-lattice-semidir-product`, `ex-first-weight-layers-of-the-basic-affine-sl2-character`, `lem-the-denominator-quotient-has-only-imaginary-cone-support`, `lem-casimir-norm-excludes-nonzero-denominator-corrections`, `lem-the-shifted-integrable-character-numerator-is-weyl-skew`, `cor-weyl-kac-specializes-to-the-finite-weyl-character-formula`, `prop-affine-denominator-separates-real-and-imaginary-root-factors`, `lem-block-induction-exists-under-centralizer-containment`, `lem-first-main-theorem-local-block-existence`, and `thm-brauer-green-nagao-block-compatibility`.
- Defect ledger: every group-e `confirmed_fatal` tuple has exactly one matching row, `phase-2-next-17-step7-e-001` through `phase-2-next-17-step7-e-012`; run-level defect-ledger validation and adjudication/reader-decision reconciliation passed.
- Content scope: no new lemma, published repair, cross-group alert, deletion, page-order change, or scope change was needed. The repaired dependency declarations were synchronized to the owning manifests and the unified frontier ledger was refreshed after every dependency edit.
- Focused validation: both manifests cover all 60 owned items with zero dependency-shape errors; all 46 proof-bearing owned items passed precheck; both strict proof-contract files pass with 46/46 entries and zero errors or warnings; citation fidelity reports 210 citations with no missing quote or widening candidate; rendercheck passes all 60 items and six pages (66 files).
- Step-7 safety: the guard reports every group-e content change licensed by its exact fatal adjudication. Its only current run-wide error is another group's newly created lemma awaiting its auditor-created certification. The pending-alert scope check passes and reports all 6/6 group-e warnings decided; the strict run-wide scope check remains blocked by four warnings owned by other groups.
