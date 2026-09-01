# frontier-28 — Step 8 round-1 rejudge closure recovery, group b

## Summary

Handled all 17 current round-1 rejudge rejection tuples owned by group b: 13 `confirmed_fatal` and 4 `confirmed_nonfatal`. The 13 fatal outcomes licensed 13 coherent repairs and matching defect-ledger rows. No false-positive outcome, cross-group alert, published repair, or blocker arose.

## Sources consulted

- No web source was needed. Current item text, opened published dependencies, and existing batch source records resolved every point. The curvature repair uses the batch-1 locator for Touikan Proposition 3.5.5.

## Exact outcomes

| item | context_sha256 | pre-edit guard hash | outcome | rejection | disposition |
|---|---|---|---|---|---|
| `cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations` | `0998be64860a86691344604688f272458beaffa1dd0d3089ebd4c5b7ae692c10` | `1580a4ba9ad8a338d331cfa71a26f1b071927a69d2eaabd55af0e050e89eb19f` | `confirmed_nonfatal` | Step 2.1’s construction starts with a minimal diagram for the unreduced replacement word, so it yields at most Area(u)≤Area(unreduced)+1. It never proves that this area equals Area(u') after free reduction; free-reduction invariance of minimal area is uncited. | The claim and area induction are correct; free reduction changes a boundary word by zero-area spur operations, an immediately closable local proof detail. No edit. |
| `def-profinite-completion-of-an-abstract-group` | `4e2c8fd94b3a57a9584dfe32f1b6a2de7a79e16ee74944080d89d020a22ce56b` | `36760cf9598d75095c03dfb80f0373662b123abe6a5ff132a885753d5bed6996` | `confirmed_fatal` | The final sentence that \(\widehat G\) is a profinite topological group is unsupported. The cited inverse-limit-topology definition supplies only a subspace topology; this item neither establishes compatible tuples form a group with continuous operations nor cites the needed results. | Cited the inverse-limit definition of a profinite group for the topological-group conclusion. |
| `def-secant-and-tangent-direction-maps-of-an-euclidean-embedding` | `f352d1a03f8e0dbb392ca475a603270b083fcdc64a9a6c147e756726ac59be84` | `56f0d5ccf6fca77280d38938c80794ff874ed4fe71fa317132556bba192cd2ef` | `confirmed_fatal` | The definition omits N≥1. Since the library permits N=0, S^{N-1}=S^{-1} is not defined; e.g. the empty manifold embeds in R^0, so the displayed maps are ill formed. | Added the required ambient-dimension hypothesis N at least 1. |
| `def-tubular-neighbourhood-of-an-embedded-submanifold` | `ad505013e15547729d2ee57e006b8a1a817fd081ec5aaeb0679151e9c21e5388` | `23f3ac5c490cc8d7576ab2c936c4978f13d61c266b631a727600b8ac90dcd6e5` | `confirmed_fatal` | The definition has no ACω hypothesis, but it requires Ω⊂ν(S) to be a smooth domain. Its cited proposition supplies the smooth vector-bundle structure on ν(S) only assuming ACω, so “smooth embedding Φ” is not defined as stated. | Made the chosen smooth normal-bundle structure part of the definition and recorded the countable-choice existence boundary. |
| `ex-projecting-a-space-curve-can-create-a-double-point` | `df4c99548dcde4aeb82196108dc99d2b8dc15b6561f71ca7893dc3851deb262b` | `93e7ab8a11cd7d6929e3a5f77b102cc73b797e7ab9d7cc4f8833b48a272befce` | `confirmed_nonfatal` | Step 3.1 invokes the generic-projection lemma for γ:S¹→R³, but its hypothesis is N>2n+1; here N=3 and 2n+1=3. The cited lemma therefore does not apply to this curve. | The explicit projection calculation already proves the double point; the generic-projection citation is only interpretive and not load-bearing. No edit. |
| `fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding` | `7673e0e0fe18ee835054a37c49df2d90631f2685fc54009c590cd94b2990ca6d` | `f7660b60d96c12d5ee5f7b24085e10f5ee7a5616bb62b1b3a1f530d06ef42237` | `confirmed_nonfatal` | [L1] misstates its citation: the lemma assumes N>2n+1 and concludes only that a dense set of directions works. Here S¹⊂R² has N=2, so the lemma does not support L1 or step 2.1. | The circle projection directly proves noninjectivity and failure of immersion; the dimension-scoped generic lemma is illustrative only. No edit. |
| `lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands` | `0817876b17cc91e0abe5739713a0d668425ed2de5c95c96a92c3dce55f359cce` | `0fdec03e2b12f50f8969d77c342f6698169830079af27ff58cac344cf615c4be` | `confirmed_fatal` | Step 2.1 is not licensed by [L2]. That lemma only shrinks a given countable coordinate-ball cover; it neither supplies a cover subordinate to the bands K_m nor makes each shrunken chart lie in one chosen band. | Constructed finite coordinate-bump data inside explicit disjoint modulo-four band neighborhoods using smooth Urysohn cutoffs. |
| `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams` | `89a271981fc4282cb7398858d1e5e0b19e2c7409c1651645b1dcdcce75f1b6cd` | `c3a35b4b3af0f5f34c09845ec64936e3e528b34b06190dd0bb8693f54dfefc54` | `confirmed_fatal` | The essential [F2] $D(6)$ curvature lemma is neither proved nor cited to a library item or identified external source, and this item is not marked RECORDED. Step 3.1 therefore imports the shell conclusion without a supported dependency. | Identified the imported D(6) shell lemma exactly as Touikan Proposition 3.5.5. |
| `prop-relative-transversality-preserves-a-map-on-a-closed-good-region` | `b11fa6a62051a7a3993f6860befab66d358b01d3856f50bfdbd65e173451ed80` | `ca04cfee8bf12f3023092659015295a3d29583a7a1e8b46ed0e724c3e7b9ab70` | `confirmed_fatal` | [L3] is stronger than its citation. Parametric transversality says only that nontransverse parameters form a null set; it does not state that transverse slices are dense. Step 3.1 relies on the unsupported density claim to choose a. | Added the null-set dense-complement result and ensured a positive-dimensional parameter ball. |
| `thm-euclidean-tubular-neighbourhood-theorem` | `288c5f4abe0fb6d39e5bfa2c7ee13ef31da4535f1250f813af492cae866f549a` | `ad46dbf2f97366b9b98fe2895c5a132244b8c022ce892c95d2412ec541c3e64b` | `confirmed_fatal` | Step 1.1 asserts that the injectivity radius can be shrunk to a positive smooth δ with Ωδ inside the union of local-diffeomorphism neighbourhoods. [L2] gives neither this smooth-radius refinement nor a fact licensing it. | Built a smooth local-diffeomorphism radius with a locally finite partition and combined it with the injectivity radius. |
| `thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected` | `8f7e3b5b05096245e815b46e31454b673263b65dba2e2dff2481eba9dfb2137a` | `4898353429bd0d1ff398c4f4df3dc7ea821099d63ce72e6427c01d33a581394f` | `confirmed_fatal` | Step 1.1 is not licensed by its citations: [F2] only defines compactness and Hausdorffness, but the step uses the uncited theorems that products of Hausdorff spaces are Hausdorff and closed subspaces of compact/Hausdorff spaces retain those properties. | Added exact product-Hausdorff, cylinder-basis, and closed-in-compact dependencies and separated the Choice-scoped compactness clause. |
| `thm-profinite-completion-is-functorial` | `7821ad73f851d777ce486b89a6bbcd1c2b5b7702d10a09003160ffcced77f864` | `ac95e3f8c2d5564e8d50d5828204d25b94fddc0f274b645de1bbf064e8362b0f` | `confirmed_fatal` | Step 1.1 is not licensed by [F1]. [F1] merely says the completion and canonical map are “defined by” two items; it does not state the needed conclusion that \(\widehat H\) is a profinite topological group, despite the step citing it for that claim. | Restated the completion fact with the exact profinite topological-group conclusion used by the universal property. |
| `thm-the-double-braiding-center-is-symmetric` | `6153ea0ad61d6607e745c91440b582956fca8974c5d1223164806f3efcf8e817` | `0474e178322f99a862048fc6e10a31fbcd7e55aa2ce48e5e06e6573c0cb6bbe1` | `confirmed_fatal` | Step 3.1 uses [L2] in the converse direction. [L2] says only that a symmetric monoidal category has involutive braiding; it does not state that a braided monoidal category with involutive braiding is symmetric, which is the inference made. | Restated symmetry as the defining equivalence for a braided category with involutive braiding. |
| `thm-topological-characterisation-of-profinite-groups` | `50d55f9a94a7ff1f82253d14f6ba846de01313dcc94a55e77aa941cf6b2a6d17` | `0da597fd2f58e719c687caabdb3517cba61f477f3b70a24f24e295b30ad330b2` | `confirmed_fatal` | Step 2.1 wrongly invokes a continuous bijection from \(G\) onto the closure of \(\eta[G]\). The preceding argument gives only injectivity and density; surjectivity onto that closure is precisely what remains to prove, and continuity of \(\eta\) is not established or cited. | Proved continuity of the canonical quotient map, then used compact-image closedness and density before invoking the compact-to-Hausdorff homeomorphism. |
| `thm-universal-property-of-profinite-completion` | `fe384081b4492bedba48cbd551b915cb19ba36b51eff4dbca97dbf1fe7d09ddb` | `157acb6fb7fdcf20cb52a6025c78508b93fe29973dc7570dbfc8965e9c96c7a6` | `confirmed_fatal` | Step 1.1 is not licensed by [L1]. [L1] states only that a profinite group has an open-normal neighbourhood basis; it does not identify \(P\) with the inverse limit of the quotients \(P/U\) over all open normal \(U\), which the construction requires. | Used a fixed finite inverse-limit presentation of the profinite target and factored each coordinate through its canonical kernel. |
| `thm-weak-whitney-proper-embedding-theorem` | `9931ee06d3140fed9732f64e8c74cb3cba695e05d4fb6555edda56ed37456fde` | `c0907676e84be23aa6c49a681f079762c1735dbe2fd4437209811be757ded330` | `confirmed_fatal` | The compact case is not carried through. Step 2.1 performs only one projection, which may still have ambient dimension >2n+1; step 3.1 authorizes iteration only in the noncompact case, while step 4.1 claims a final map from that step for all M. | Extended the repeated-projection induction to compact manifolds and retained the bounded-plus-proper argument for noncompact manifolds. |
| `lem-a-generic-projection-can-preserve-properness` | `43fcaaddd92a59de49e7873d3416bbe6877fff6c2b651498799fb35867ce27a4` | `ed6c9ec71d2c53ed58beaec1764996c0f724c84f89298997817e8b29575a65cb` | `confirmed_nonfatal` | [F1] overstates the generic-projection lemma, whose stated density conclusion assumes the ambient dimension exceeds \(2n+1\), while this item invokes the bad-direction characterization without that hypothesis. | The statement and step 1.1 remain correct: the secant and tangent definitions give the two projection-kernel equivalences by immediate linear algebra. No content, contract, impact, or verification edit; no rejudge target. |

## Licensed repairs and rejudge targets

- `def-profinite-completion-of-an-abstract-group` — Cited the inverse-limit definition of a profinite group for the topological-group conclusion. Rejudge target.
- `def-secant-and-tangent-direction-maps-of-an-euclidean-embedding` — Added the required ambient-dimension hypothesis N at least 1. Rejudge target.
- `def-tubular-neighbourhood-of-an-embedded-submanifold` — Made the chosen smooth normal-bundle structure part of the definition and recorded the countable-choice existence boundary. Rejudge target.
- `lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands` — Constructed finite coordinate-bump data inside explicit disjoint modulo-four band neighborhoods using smooth Urysohn cutoffs. Rejudge target.
- `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams` — Identified the imported D(6) shell lemma exactly as Touikan Proposition 3.5.5. Rejudge target.
- `prop-relative-transversality-preserves-a-map-on-a-closed-good-region` — Added the null-set dense-complement result and ensured a positive-dimensional parameter ball. Rejudge target.
- `thm-euclidean-tubular-neighbourhood-theorem` — Built a smooth local-diffeomorphism radius with a locally finite partition and combined it with the injectivity radius. Rejudge target.
- `thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected` — Added exact product-Hausdorff, cylinder-basis, and closed-in-compact dependencies and separated the Choice-scoped compactness clause. Rejudge target.
- `thm-profinite-completion-is-functorial` — Restated the completion fact with the exact profinite topological-group conclusion used by the universal property. Rejudge target.
- `thm-the-double-braiding-center-is-symmetric` — Restated symmetry as the defining equivalence for a braided category with involutive braiding. Rejudge target.
- `thm-topological-characterisation-of-profinite-groups` — Proved continuity of the canonical quotient map, then used compact-image closedness and density before invoking the compact-to-Hausdorff homeomorphism. Rejudge target.
- `thm-universal-property-of-profinite-completion` — Used a fixed finite inverse-limit presentation of the profinite target and factored each coordinate through its canonical kernel. Rejudge target.
- `thm-weak-whitney-proper-embedding-theorem` — Extended the repeated-projection induction to compact manifolds and retained the bounded-plus-proper argument for noncompact manifolds. Rejudge target.

The late `lem-a-generic-projection-can-preserve-properness` tuple was nonfatal and licensed no repair or rejudge target.

## Documentary synchronization

The current proof text was synchronized into:

- `research/frontier-28-batch-1.proof-contracts.json`
- `research/frontier-28-batch-7.proof-contracts.json`
- `research/frontier-28-batch-10.proof-contracts.json`
- `research/frontier-28-proof-contracts.json`

Complete current-byte risk reviews were retained or added for every high/critical group-b item. The 13 fatal defects were appended through `research/frontier-28-alpha-b-step8-rejudge1-ledger-rows.json`.

## Validation

- Focused precheck: 10 proof-bearing repaired items, 0 failures.
- Focused rendercheck: 13 repaired items passed YAML, delimiter, wikilink, and KaTeX checks.
- Strict proof contract: 53/53, 28/28, and 48/48 passed with 0 errors and 0 warnings.
- Risk review: all three owned batches passed with 0 missing reviews.
- Citation fidelity: 256 citations over 129 authored items; no missing exact quote and no widening candidate.
- `depcheck --quiet`: no errors; standing repository warnings only.
- `defect-ledger validate --run frontier-28`: 396 run rows checked, 0 errors.
- `defect-ledger check`: exited 0.
- Judge closure: 389/424 current configured-verdict sets plus 35 terminal resolutions; 0 need rejudge, 0 unadjudicated, 0 open fatal, and 168 adjudicated rejections closed nonfatally.
- `step8-scope check --run frontier-28`: 0 open rejections and 0 cross-group alerts.
- `step8-guard`: all 113 current Step-8 item changes are licensed; 0 unlicensed changes.

## Alerts and blockers

None for group b.
