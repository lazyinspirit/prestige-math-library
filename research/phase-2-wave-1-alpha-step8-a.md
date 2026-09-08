# Step 8 adjudication — group a

Run: `phase-2-wave-1`  
Batches: `1`, `3`, `6`  
Pages read in full: `small-cancellation-disc-diagrams-and-torsion-toolkit`, `small-cancellation-disc-diagrams-and-torsion-toolkit-examples`, `modular-traces-and-brauer-character-independence`, `modular-traces-and-brauer-character-independence-examples`, `group-homology-transfer-and-low-degree-exact-sequences`, `group-homology-transfer-and-low-degree-exact-sequences-examples`, `hall-malcev-coordinates-and-bass-guivarch-growth`, `hall-malcev-coordinates-and-bass-guivarch-growth-examples`  
Owned items read in full: 82 of 82

All eight current page files, all 82 owned item files, the Step-7 digest, every declared page prerequisite, and the exact owned or published dependencies touched by the ten rejections were opened. No dependency edge crosses this group's boundary, and no rejection exposed a cross-group or published-item defect.

## Adjudications

| Item | Exact rejection | Pre-edit guard SHA-256 | Outcome | Decision |
|---|---|---|---|---|
| `def-free-presentation-lyndon-bar-bicomplex-and-edge-maps` | `gpt-5.6-terra` / `d75c379c385a99a5839beecaebab41b2491350d10f5de442eec72a05f916c964` | `51fc4dd277d75182ee56f24aabf2eae886384a0eba4426455a836e2ab0496f80` | `confirmed_fatal` (`logic`) | The subgroup inclusion `R -> F` induces a homomorphism `R/[F,R] -> F_ab`, but that induced map need not be injective; its kernel is exactly the nontrivial term measured later by the five-term sequence. Calling it an inclusion was a false structural assertion. |
| `ex-relator-root-versus-proper-power` | `gpt-5.6-terra` / `64b252c5f0d03c6df2acfc622bd3bf5ec1eb27078862a536314edc73c58bab8b` | `3252059e9bccd55bdea50d61d352cde78fe3cda7e7c15fa608ff36040e7111e4` | `confirmed_nonfatal` | F1's shorthand omits the relator-power clause, but the Given data explicitly state `r=a^7`, and the cited definition states that a relator root is a primitive cyclic word whose positive power is the relator. The actual example applies the complete definition correctly; this is a local restatement omission. |
| `ex-transfer-annihilation-for-a-cyclic-group` | `gpt-5.6-terra` / `f93c5d013f89c2544c1545013e6fdd26bbebce5fd2b3f91eb4b65e55ab2e9de7` | `525ed12a489834b26ce67ca9d4ad88f769d0c5de4d68f189cbc05758d02e9393` | `confirmed_fatal` (`dependency_citation`) | The former F2 cited a normalized-bar computation as though it supplied comparison with an arbitrary projective resolution. That source does not state the required resolution-independence interface. |
| `lem-corestriction-after-bar-transfer-is-index-multiplication-on-homology` | `gpt-5.6-terra` / `8bae620e5a8c9cc697935efeecef958d3b6198c380f7a47d2ed06593c852458c` | `8dccf8ac8ada9dfd86d64c3246e162297ae06d30cf3725189aac3acd3388c00c` | `confirmed_fatal` (`dependency_citation`) | The proof used a prism homotopy between each coset retraction and the identity, including descent under coset permutation and normalization, but neither proved that construction nor cited a supplier that did. This was the load-bearing reason the transfer-corestriction composite became index multiplication. |
| `lem-finite-lower-central-coordinate-systems-exist` | `gpt-5.6-terra` / `ec548078c71cca641e3b25dcbf85e903ae31f35d547d1cd63e50e41443722712` | `225f513c4089e8eb8be1088463d0a13ba3410a80e4041fb356a3896306b93c40` | `confirmed_fatal` (`dependency_citation`) | The proof silently identified the free ranks of the lower-central factors of `G` and `G/T(G)`. The cited finite-normal-quotient result supplied an end result but not the layerwise quotient, kernel, and finite-kernel rank argument used here. |
| `lem-free-group-augmentation-ideal-has-the-generator-difference-basis` | `gpt-5.6-terra` / `9ceecd82ee67cdaf843b2ac98e126dff1011ca7978efcaa12c52a2ea0b80c419` | `18acfba3f7c6711f20852339ea30f50902e17eaee9e500fa9864a516aefaf72c` | `confirmed_fatal` (`dependency_citation`) | As in the cyclic example, the former F2 widened a normalized-bar computation into an arbitrary-resolution comparison. The proof needed the exact homotopy-equivalence theorem for projective resolutions and functorial preservation of its homotopies. |
| `lem-minimal-power-diagram-has-a-periodic-boundary-shell` | `gpt-5.6-terra` / `f5e0a532ddd1d492f850899b2af9d3370019da80394e1b330094b44f2b209a4f` | `7c6a7989893f039517912b11351e22c9de2b41b8e2bb46ff15fa71ea4cc7fdea` | `confirmed_fatal` (`other`) | The title promised a periodic boundary shell, while the Statement and proof establish only that a shortest finite-order representative and a relator share a word root. The title was materially stronger than the item proved. |
| `thm-degree-one-inflation-restriction-exact-sequence` | `gpt-5.6-terra` / `995114d653a2cc771910b3e6a91ec941323cdb8ed0a30651e3e7e2c705044b0b` | `1600f1dfb245f3c54fb023785d099a9c77ace3e1f5ff063ad117e2e4ffac7188` | `false_positive` | A displayed sequence ending at `H^1(N,M)^Q` without a following arrow or `0` asserts exactness only at the terms having both an incoming and outgoing map. The item also explicitly says that no surjectivity of restriction is asserted. The rejection imposed an absent terminal-zero convention. |
| `thm-free-presentation-homology-five-term-sequence` | `gpt-5.6-terra` / `b3cdc289e4f4a5a4dc8dabaa6f355ffd9235066ed324619b592936807f38132c` | `82c18abdf65a49f50d1c3f967d0ef6b5746ef1ac549f3c07777a88bf67fc3327` | `confirmed_fatal` (`dependency_citation`) | The filtration lemma gives an abstract low-degree sequence but does not define the transgression or identify it with the edge maps in the theorem. The proof had not supplied the representative map, its well-definedness, injectivity, or the total-complex chase identifying `im(d_2)` with the kernel of the edge map. |
| `thm-greendlinger-shell-existence-from-the-curvature-count` | `gpt-5.6-terra` / `523733d9bc31ba285dd917d87a33901bbcf53fbe1f36e21e3fb9af6e74ab7cf8` | `fd04f796d0a55b175d356fc23b30a9d229c0bc406e36a58ed7dce5aba0a6abac` | `confirmed_fatal` (`dependency_citation`) | The curvature shell lemma assumes a reduced diagram, while the theorem's cited van Kampen existence result supplied only a diagram. Minimum-area existence and reducedness were proved in an earlier owned lemma but were neither cited nor reconstructed here. |

## Fatal repairs and rejudge targets

### `def-free-presentation-lyndon-bar-bicomplex-and-edge-maps`

- Replaced “inclusion” by “homomorphism induced by subgroup inclusion” and explicitly recorded that injectivity is not asserted.
- The statement and proof now agree with the later five-term sequence's potentially nonzero kernel.
- Post-repair guard SHA-256: `f06c4acea06f81cf9774b73f8eab9823bc44f7470a3150e54d59f40f14bc6fce`.
- Rejudge target: `def-free-presentation-lyndon-bar-bicomplex-and-edge-maps`.

### `ex-transfer-annihilation-for-a-cyclic-group`

- Replaced the widened bar-resolution citation by direct dependencies on `def-group-homology-as-a-derived-functor` and `thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object`.
- Added the comparison from the supplied periodic resolution to the group-homology definition and proved that tensoring with the trivial module preserves the comparison homotopies.
- Post-repair guard SHA-256: `db050978e6a52d334813eb9219b9efc452d6098aed990dd671b6bab2bf88d32a`.
- Rejudge target: `ex-transfer-annihilation-for-a-cyclic-group`.

### `lem-corestriction-after-bar-transfer-is-index-multiplication-on-homology`

- Added the exact transfer definition as a direct dependency and stated its retraction formula without widening.
- Constructed the alternating prism homotopy locally, checked all face cancellations, normalization, and descent after the coset permutation, and hence proved the chain-level composite homotopic to index multiplication.
- Post-repair guard SHA-256: `8259dbebec649e0b9b5a62b9f6ff93a753677df140d58267585b8d14a646fdae`.
- Rejudge target: `lem-corestriction-after-bar-transfer-is-index-multiplication-on-homology`.

### `lem-finite-lower-central-coordinate-systems-exist`

- Replaced the unused finite-normal-quotient rank citation by the exact finite-generation result for lower-central factors.
- Proved that `G -> G/T(G)` maps each lower-central factor onto the corresponding quotient factor, that its kernel is the image of the finite group `T(G) intersect gamma_i(G)`, and that finite-kernel rank preservation gives the common rank `r_i`.
- Clarified the layer-rank equivalence in the Statement. The separate reader-warning membership equivalence required no edit.
- Post-repair guard SHA-256: `c11919621c645869c3294ce6837304bb6c0b82654109a0fd1ebb4cf25a9505fc`.
- Rejudge target: `lem-finite-lower-central-coordinate-systems-exist`.

### `lem-free-group-augmentation-ideal-has-the-generator-difference-basis`

- Replaced the widened bar-resolution citation by the exact group-homology definition and projective-resolution comparison theorem.
- Applied the trivial-module tensor functor to the comparison maps and homotopies, proving the resolution-independence step actually used.
- Post-repair guard SHA-256: `091d38928ad8a5ae7fad70d5d4775393e7d9594ed590ec90da71c414a7742d2d`.
- Rejudge target: `lem-free-group-augmentation-ideal-has-the-generator-difference-basis`.

### `lem-minimal-power-diagram-has-a-periodic-boundary-shell`

- Narrowed the title to “A shortest finite-order representative shares a word root with a relator.” The established item ID is unchanged.
- No mathematical statement or dependency changed.
- Post-repair guard SHA-256: `6ccb0e4d1a7b303f54983bf330f16737005d4ed807b67e1c9fc4c3938712156a`.
- Rejudge target: `lem-minimal-power-diagram-has-a-periodic-boundary-shell`.

### `thm-free-presentation-homology-five-term-sequence`

- Added `def-free-presentation-lyndon-bar-bicomplex-and-edge-maps` as a direct dependency for the exact bicomplex and edge maps.
- Defined the representative transgression by `hx=-vy` mapping to `[hy]`, proved independence from both choices, proved injectivity using the vanishing of positive `F`-homology, and supplied the total-complex chase for `im(d_2)=ker(j)`.
- Post-repair guard SHA-256: `2711a407b16ffffbd02fe985b35bdb5224c631ab9e7b39494ab4c69c32ebe139`.
- Rejudge target: `thm-free-presentation-homology-five-term-sequence`.

### `thm-greendlinger-shell-existence-from-the-curvature-count`

- Added `lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction` as a direct dependency.
- The proof now invokes its exact minimum-area existence and reducedness statement before applying the curvature shell lemma.
- Post-repair guard SHA-256: `c6ee96d6473ed01c506337fefd4c037bb4bf00a55e1ba46cc8e1e827e9dd6926`.
- Rejudge target: `thm-greendlinger-shell-existence-from-the-curvature-count`.

The exact rejudge target set is therefore:

1. `def-free-presentation-lyndon-bar-bicomplex-and-edge-maps`
2. `ex-transfer-annihilation-for-a-cyclic-group`
3. `lem-corestriction-after-bar-transfer-is-index-multiplication-on-homology`
4. `lem-finite-lower-central-coordinate-systems-exist`
5. `lem-free-group-augmentation-ideal-has-the-generator-difference-basis`
6. `lem-minimal-power-diagram-has-a-periodic-boundary-shell`
7. `thm-free-presentation-homology-five-term-sequence`
8. `thm-greendlinger-shell-existence-from-the-curvature-count`

## Reader warning

- `s8a-8cc9b3d3c663bb3f07065c8e` on `lem-finite-lower-central-coordinate-systems-exist`: `nonfatal`. Later-layer lifts lie in `gamma_i(G) <= gamma_k(G)` for `i >= k`; conversely, successive projection through every earlier factor forces the corresponding earlier coordinate to vanish. This is the immediate normal-form argument described by the warning, not a false statement. The separate judge rejection concerns equality of layer ranks and licenses only that repair.

## Sources consulted

No external web search was needed: the uncertainties were resolved by reading the exact on-disk source interfaces and complete relevant proofs.

- `def-group-homology-as-a-derived-functor` states group homology from an arbitrary projective resolution, and `thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object` supplies comparison maps inverse up to chain homotopy over the augmented object. These support the cyclic-transfer and augmentation-ideal repairs.
- `def-finite-index-transfer-on-normalized-bar-chains` gives the precise coset-retraction transfer formula, while `lem-bar-transfer-is-a-chain-map-and-choice-independent-up-to-chain-homotopy` supplies only the stated chain-map and choice-independence interface. This comparison identified exactly which new prism argument had to be proved locally.
- `lem-low-degree-filtration-sequence-for-a-first-quadrant-bicomplex`, `def-free-presentation-lyndon-bar-bicomplex-and-edge-maps`, and `lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree` give, respectively, the abstract filtration sequence, the concrete differentials and edge maps, and the needed vanishing. These support the repaired representative-level five-term argument.
- `lem-hall-malcev-integer-abelian-structure-and-rank` gives finite-kernel rank preservation for finitely generated abelian groups; `lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian` gives the exact layer finiteness. These support the repaired layer-rank comparison.
- `lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction` supplies minimum-area existence and reducedness, and `lem-boundary-spur-or-at-most-three-shell-from-curvature` assumes reducedness. Reading both fixes the missing Greendlinger dependency exactly.
- `def-minimal-cyclic-power-diagram-and-relator-root` includes the positive-relator-power clause used by `ex-relator-root-versus-proper-power`; `def-degree-one-restriction-inflation-and-quotient-action` and the theorem's own terminal disclaimer fix the exact sequence convention used in the two nonfatal closures.

## Alerts, scope additions, and blockers

- Incoming Step-7 warning: one, disposition recorded above.
- Incoming or outgoing cross-group alerts: none.
- Published-item repairs: none.
- New supporting lemmas or Step-8 scope additions: none.
- Frontier-ledger additions: none; the new direct dependencies are published or in the same batch, so no frontier edge changed.
- Mathematical blockers: none.

## Validation

- Exact tuple/hash audit: pass. All ten assigned `(id, model, context_sha256)` tuples have exactly one adjudication; all eight fatal adjudications have exactly one matching defect-ledger link; all ten current `itemHashGuard` digests match the recorded post-state, including unchanged pre-edit digests for the nonfatal and false-positive items; the reader warning has exactly one `nonfatal` disposition.
- Focused precheck: pass for all seven proof-bearing repairs, 7/7 clean.
- Rendering: pass for the eight repaired items plus the independently checked nonfatal relator-root example, 9/9 clean under YAML, delimiter, and KaTeX checks.
- Focused citation heuristic: pass for all eight repaired items; every recognized elementary move cites a source that states it.
- Content policy: pass for batches 1, 3, and 6: 82 scoped items, zero errors and zero warnings.
- Strict proof contracts: pass for all seven proof-bearing repaired items: 1/1 in batch 1, 5/5 in batch 3, and 1/1 in batch 6. Their citation/derivation entries and risk reviews were regenerated after repair.
- Citation fidelity: pass across all three owned batches: 189 citations over 82 authored items, no missing quotations, and no widening candidates.
- Risk review: pass with `--require-reviewed` for the same seven proof-bearing repaired items; zero errors.
- Dependency graph: `depcheck --quiet` has no hard failure: all references resolve, no cycles occur, and no draft item lies on a published page. It reports 473 existing repository warnings outside this adjudication's repair scope.
- Defect ledger: `validate` and the adjudication/reader-decision `check` both pass for all 72 current-run rows with zero errors. The eight group-a defects are `phase-2-wave-1-step8-a-001` through `phase-2-wave-1-step8-a-008`.
- Step-8 scope: pass: 7 groups scoped, 402 items partitioned, zero open rejections, and 2/2 reader warnings or alerts dispositioned.
- Step-8 edit guard: pass against `pre-step8`: 15,818 items at baseline, 26 changed, zero created or deleted, and 26/26 changes licensed.
- Whitespace/error-marker check: `git diff --check` passes.
- Published-page splice verification is intentionally pending engine action: it reports seven batch-manifest/page differences, including this group's repaired pages and four pages owned by other groups. No splice or stage transition was run here because those duties are engine-owned.
- Rejudge and stage transition: not run. The engine owns both.

No group-a obligation or mathematical blocker remains. The engine's next action is the targeted rejudge of the eight items listed above.
