# Step 3a reader report — batch 50

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Scope: batch `50`

## Opened inventory

Assigned pages:

- `qftx-s4-partition-functions` — [A page](../library/advanced-qft-and-supersymmetry/qftx-s4-partition-functions.md)
- `qftx-s4-partition-functions-examples` — [B page](../library/advanced-qft-and-supersymmetry/qftx-s4-partition-functions-examples.md)

Assigned items, read in supplier-to-consumer order:

- `post-qftx-s4-n2-localization-model`
- `pthm-qftx-n2star-u2-regulated-ward-identity`
- `ex-qftx-s4-n2-partition-function`

The batch manifest, proof contracts, reader brief, both page carriers, and all three assigned item carriers were opened. The assigned A/B pages have frontmatter only, `status: draft`, and `page_layout: compact-v1`; their inventories and `requires` fields match the manifest. Their bodies are empty, as required.

Opened the current prerequisite pages declared by the assigned pages: `qftx-qexact-field-theory-localization`, `qftx-adhm-moduli`, `qftx-susy-moduli-and-dualities`, `qftx-noncompact-equivariant-borel-moore-localization`, `qftx-susy-backgrounds`, and `qftx-finite-q-exact-localization`. The imported published mathematics page `relations-functions-and-quotients` was read at `../library/set-theory/relations-functions-and-quotients.md`; its raw SHA-256 matches the pinned entry in `research/math-imports.json` (`4cff89f96ecc098604d924a748e95c8442f42eeea687575b9c7c0373ca57b23a`). The imported page and mathematical originals were left read-only.

Opened direct item prerequisites and the further mathematical statements needed for the assigned calculations:

- For the postulate: `def-qftx-susy-background-data` (batch 47).
- For the Ward theorem: `def-finite-dimensional-q-exact-localization-data` and `thm-finite-dimensional-q-exact-deformation-invariance` (batch 11), plus `thm-differentiation-under-the-integral-sign`, `def-derivative`, `cor-zero-derivative-implies-constant`, `thm-dominated-convergence`, `cor-mean-value-theorem`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, and `lem-rat-embeds-dense`.
- For the ADHM fixed-point calculation: `def-qftx-adhm-linear-data-stability-and-regularity` and `lem-adhm-stable-quotient-and-torus-lift` (batch 59), `lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character` (batch 12), `thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions`, `lem-multiplicative-type-groups-are-linearly-reductive`, `thm-zariski-tangent-space-jacobian-kernel`, and `def-axiom-of-choice`. For the quotient-chart argument I also opened `thm-holomorphic-implicit-function-theorem`, `def-free-and-proper-lie-group-actions`, `thm-free-proper-action-quotient-manifold`, `prop-tangent-space-of-a-free-proper-quotient`, `thm-heine-borel-rn`, `thm-gluing-affine-schemes`, `thm-jacobian-criterion-smooth-morphism`, and `def-categorical-and-geometric-quotients-of-classical-varieties`.
- For the Borel–Moore calculation: `def-qftx-localized-equivariant-borel-moore-data`, `lem-qftx-eigenfunction-open-bm-annihilation`, `thm-qftx-finite-affine-atlas-bm-concentration`, `lem-qftx-fixed-embedding-bm-euler-self-intersection`, `def-qftx-proper-fixed-locus-localized-pushforward`, and `thm-qftx-proper-fixed-locus-noncompact-localization` (batch 61), together with `lem-qftx-module-localization-preserves-exactness`, `lem-qftx-rational-torus-classifying-space-cohomology`, `lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent`, and `lem-qftx-borel-base-is-paracompact-of-cw-type` (batch 8). Supporting published statements opened were `def-equivariant-borel-moore-homology-and-correspondence-convolution`, `thm-constructible-six-functors-proper-base-change-and-verdier-duality`, `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports`, `thm-thom-isomorphism-for-oriented-vector-bundles`, `thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism`, `thm-external-product-and-whitney-sum-formulas-for-thom-classes`, and `def-euler-class-by-zero-section-pullback-of-the-thom-class`.

## Review and edits

### `post-qftx-s4-n2-localization-model`

The adopted action, mass twist, source-ordered supersymmetry square, seven-auxiliary qualification, contour, and formal regulator assumptions match Pestun’s stated conventions. The item continues to distinguish the adopted model from empirical evidence and does not claim a constructed continuum measure, regulator extension, or localization proof.

I repaired the missing spinor bundle typing. The postulate now states the spin structure as the principal `Spin(4)` lift of the oriented orthonormal frame bundle, constructs the bundles associated to the restricted chiral `Spin(9,1)` representations, assigns `Psi`, `epsilon`, `tilde-epsilon`, and `nu_a` to those bundles, relates coordinate gamma matrices to a local orthonormal coframe, and records the source’s duality used to lower chiral spinor indices in bilinears. This makes the gamma bilinears and transformations well-typed while preserving the source conventions. Evidence: the local `def-qftx-susy-background-data` Definition (spin structure and spinor bundles) and Pestun, Appendix A, equations (A.3)–(A.10), especially the duality of `S+` and `S-` and the symmetric chiral blocks, [Pestun PDF](https://arxiv.org/pdf/0712.2824).

The direct assigned consumers were checked after this public-interface clarification. The finite-regulator theorem’s model assumptions remain consistent; the example’s ADHM fixed-point calculation does not use the spinor bundle fields. No consumer change was needed. The postulate contract’s formulation evidence and both current proof-contract citations that quote its Postulate section were updated. No `verification.judge` record was present.

### `pthm-qftx-n2star-u2-regulated-ward-identity`

The Statement supplies a common null set for pointwise differentiability throughout the parameter interval, measurable derivatives, compact-parameter `L1` majorants, exact `Q`-invariance, and the `Q^2 V` condition. These meet the direct finite-dimensional theorem’s hypotheses. The proof derives only finite-parameter constancy for the supplied regulator and fixed bundle sector; it makes no saddle, pole-matching, continuum, or empirical claim. The finite-dimensional theorem’s derivative argument and its measure-theoretic prerequisites were opened and checked. No defect or edit was required. No `verification.judge` record was present.

### `ex-qftx-s4-n2-partition-function`

The source-reported matrix integral, one-loop regularization, Coulomb contour, mass shift, and one-box Nekrasov formula agree with Pestun, equations (1.4), (4.47)–(4.50), and (5.1), (5.11)–(5.12). Pestun identifies the shift `tilde-m = m + (epsilon_1 + epsilon_2)/2` and writes the `U(2)` charge-one term as the sum over the two colored one-box partitions. The group-volume normalization in the example also distinguishes the unscaled volume in (1.4) from the coupling-rescaled volume in (4.3). See [Pestun PDF](https://arxiv.org/pdf/0712.2824), §§1, 4.3, 4.5, and 5. Peelaers’s notes support the round-sphere metric and localization setup at Lecture 1, equation (19), and the matrix-integral structure at equations (34)–(35); the notes state that they were not proofread, and this source limitation is retained ([Peelaers notes](https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf)). Nekrasov’s ADHM discussion, §§3.1–3.5, and Nakajima–Yoshioka, §3.1, were consulted for the stable quotient, framed ADHM data, and partition conventions ([Nekrasov](https://arxiv.org/pdf/hep-th/0206161), [Nakajima–Yoshioka](https://arxiv.org/pdf/math/0311058)).

I repaired the description of the locally computed charge-one coefficient as the positive-FI ADHM fixed-point sum with a mass-twisted tangent Euler insertion. The Statement now identifies the two partition fixed points and specifies their weight `product (w - mu) / product w`. It treats `mu` as an independent formal flavor weight in the rational calculation and specializes it to `tilde-m` only afterward. The proof now defines an actual independent flavor character `eta`, uses the line `L_{eta^{-1}}`, and performs the specialization after computing the rational sum. Assumption [A3] and verification steps 3.1 and 4.1 now name the same inserted fixed-point sum. Evidence: Pestun’s mass-shift and charge-one formula in (5.11)–(5.12), and the assigned ADHM lemma’s fixed-point tangent characters.

The local one-box algebra, the massless round-sphere numerator check, the diagram, and the distinction between the source-reported full sphere prescription and the local coefficient calculation were checked. The full continuum measure, saddle limit, and regulator-to-pole identification remain explicitly unproved model/source inputs as stated. One unresolved dependency-chain defect affects the example’s appeal to the noncompact localized pushforward; it is listed below and was not edited because its carrier belongs to batch 61. The example proof contract’s steps 3.1 and 4.1 were updated. No `verification.judge` record was present.

## Page verdicts

- `qftx-s4-partition-functions` (A): **no page-local defect found**. The draft page is frontmatter-only, its two item IDs and prerequisite list match the assigned manifest, and `page_layout: compact-v1` is preserved.
- `qftx-s4-partition-functions-examples` (B): **no page-local defect found**. The draft page is frontmatter-only, its example placement and prerequisite list match the assigned manifest, and `page_layout: compact-v1` is preserved.

## Uneditable dependency findings

The assigned example directly depends on `thm-qftx-proper-fixed-locus-noncompact-localization`, whose dependency chain uses the following batch 61 carriers. All are read-only in this assignment. The common type defect is that the Borel–Moore groups are defined one homological degree at a time, but positive-degree classes in `R_T` act by cap product across degrees (`u_i cap - : H_j -> H_{j-2}`). A single `H_j` is therefore not an `R_T`-module as required by the displayed fraction localization. The supplier chain needs a graded total module and degree-piece convention (or another explicit graded localization) throughout.

| Subject | Exact location | Defect and evidence | Observed raw SHA-256 |
|---|---|---|---|
| `def-qftx-localized-equivariant-borel-moore-data` | Definition, line 43: “The ring `R_T` acts … by … cap product” followed by localization of an `R_T`-module | `H_j^{BM,T}` is defined as a single degree. Cap by a degree-two generator maps to `H_{j-2}`, so this fixed-degree group is not an `R_T`-module and its stated localization is undefined. This is the foundational carrier used by the assigned example’s dependency closure. | `35ed080f302020fe6c3253a7f432c08fbda9bbf3bc60b333e09417708ef59203` |
| `lem-qftx-eigenfunction-open-bm-annihilation` | Statement, line 39 | The statement says `u_chi` acts on each fixed-degree `H_j^{BM,T}` and then localizes those groups. The class action has degree `-2`, so the claimed module action/localization is ill-formed as written. | `636599b791f7686d4dc1ac4c4c429c2f826104106302d9633b2a9ebafcc8e0ff` |
| `thm-qftx-finite-affine-atlas-bm-concentration` | Statement, lines 41–43; Proof, steps 2.1–4.1 | The isomorphism is asserted between `S_T^{-1}H_j^{BM,T}` for each fixed `j`, but those are not modules over the stated positive-degree multiplicative set. The Čech/localization argument and conclusion therefore lack a well-typed localized group. | `8f3aae71e0c18caa684c92b3bfb4f8de452e169a61c6dd0571fc9a43a955298c` |
| `def-qftx-proper-fixed-locus-localized-pushforward` | Definition, lines 37–40 | The inverse and pushforward are defined on `S_T^{-1}H_j^{BM,T}`; the required fixed-degree module localization is undefined under the cited Borel–Moore grading. | `507fc752735054ecfe566aab24b35a04ef2a0d83b5ce67bedab771290d5d5b1f` |
| `thm-qftx-proper-fixed-locus-noncompact-localization` | Statement, lines 41–43 | The localized pushforward’s source and target again use `S_T^{-1}H_{2d-q}^{BM,T}` degreewise. The claimed theorem is not well-formed until the graded localization type is repaired consistently. The assigned example reaches this supplier directly. | `be134094426c9a9b094c8c6dc60593f191de6dda456c4afe4e77264b5ae954f3` |

For each row, the assigned consumer is `ex-qftx-s4-n2-partition-function`. The path is its direct dependency on `thm-qftx-proper-fixed-locus-noncompact-localization`, followed by the actual item dependency edges stated in the listed carriers. These findings are `in-run-dependency` findings for batch 61; no batch 61 source was edited.

## Checks and limitation

- `reflow.mts` on the postulate and example: both unchanged, exit 0.
- `precheck.mts` on each changed item: pass, 0 failing.
- `proof-layout.mjs items/post-qftx-s4-n2-localization-model.md items/ex-qftx-s4-n2-partition-function.md`: 2 items, 7 steps, 0 defects.

No empirical observations are asserted by these items. This review checked the assigned carriers and the direct mathematical suppliers needed for the recorded claims, including the relevant published statements; it did not audit unrelated corpus material or every transitive prerequisite of those supporting published mathematics. The assigned example’s noncompact global pushforward calculation remains blocked by the batch 61 Borel–Moore grading/type defect above.
