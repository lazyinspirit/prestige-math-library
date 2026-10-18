# Batch 68 — PA-37 authoring notes

Run: `non-ml-math-remaining-81-2026-10-18`  
Pair: `quantum-groups-at-roots-of-unity-and-tilting-quotients` / companion examples  
Batch dependency level: 2; prerequisite batch: 64  
Scheduling input observed at dispatch: `825ada459eb8a44f2bca9b180e0d40e43ed62d08f26d224468ce63c38b792042`.

## Plan and design reconciliation

- The current `research/plan-spec.json` retains PA-37 at order 2950 (A) and 2951 (B), category `quantum-groups-and-crystal-bases`, the specified companion, and the page prerequisite `hopf-hecke-and-quantum-symmetry-interfaces`. Its item arrays were empty at authoring start. That is the scaffold inventory input, not a narrower mathematical scope.
- `research/plan-physics-algebras-track.md` line 84 is only the PA-37 identity row. The complete mathematical direction is in `research/physics-algebras-planning-2026-10-17/dossiers/04-hopf.md` §7, with the category distinctions in §9. There is no conflict with the plan-spec page identity. The owner direction takes precedence over stale empty-inventory or reuse language.
- The design route begins with rank one; distinguishes De Concini–Kac, Lusztig divided-power, and small forms; requires exact root order, parity, Cartan divisibility, toral lattice, Frobenius map, and module-category hypotheses; and restricts the Verlinde construction to the stated simply-laced sufficiently-large odd-order branch. It explicitly forbids inferring root-of-unity semisimplicity from generic parameter results or identifying the small quantum group with the Verlinde quotient. Those broad Frobenius and Verlinde claims remain on the A page as unproved obligations; they are not silently replaced by the local rank-one items.
- The checked EGNO formulation has simple simply-laced type, odd `ell > h`, and `ord(zeta^2)=ell`; the actual selected root/weight lattice and pivotal trace convention still have to be stated and proved by the future supplier. The page separates a fusion-category assertion from any additional modularity claim, which needs a nondegenerate braiding proof.
- The pair has six local items, four on A and two on B, below the 100-item cap. The A/B page lists match the manifests. The B page uses `items: []` and puts its two carriers in `examples` so the renderer/depcheck do not count them twice.

## Inventory, dependencies, and levels

`research/non-ml-math-remaining-81-2026-10-18-batch-68.pages.json` records dependencies before the carriers. Recomputed local levels are:

| Level | Item |
|---:|---|
| 0 | `def-root-of-unity-quantum-group-forms` |
| 1 | `def-root-of-unity-tilting-and-negligible-quotient-interface` |
| 1 | `lem-sl2-small-quantum-group-root-power-quotient-is-hopf` |
| 2 | `prop-sl2-specialization-map-from-dk-to-lusztig-is-not-injective` |
| 2 | `ex-sl2-small-quantum-group-at-fifth-root` |
| 3 | `cex-sl2-specialization-map-not-injective-at-fifth-root` |

Levels ignore out-of-run prerequisites and use one plus the maximum level of in-run suppliers. The carrier frontmatter and manifest dependency arrays were reconciled; the root-form definition is the only in-run supplier of the level-1 definition and lemma, the proposition and example consume the lemma, and the B counterexample consumes the proposition. There are no in-run cycles.

## Supplier and convention checks

- The generic Drinfeld–Jimbo definition fixes the generator relations and torus. The rank-one convention uses `K E K^{-1}=zeta^2 E`, `K F K^{-1}=zeta^{-2} F`, and `[E,F]=(K-K^{-1})/(zeta-zeta^{-1})`.
- The local coproduct/antipode convention is `Delta(E)=E tensor K^{-1}+1 tensor E`, `Delta(F)=F tensor 1+K tensor F`, `S(E)=-EK`, `S(F)=-K^{-1}F`, and `S(K)=K^{-1}`. The Etingof–Semenyakin notes use a different coproduct convention; their root-form statements were not copied into the proof without a local relation check.
- `def-root-of-unity-quantum-group-forms` is now explicit about its coefficient rings, inverted denominators, `ell_i=ord(zeta_i^2)`, specialization, and the `K_i` toral-lattice convention. It asserts no specialized inclusion, Hopf-ideal property, finite dimension, Frobenius theorem, or semisimplicity.
- `thm-quantized-sl-two-string-formulas` supplies the generic rank-one ordered monomial independence used in the local R-free/base-change argument. Only its rank-one clause (i) is used. Its proof points to the choice-free tensor triangular decomposition and one-color half; the separate generic PBW-rank branch is where the triangular-decomposition item invokes AC. The PA-37 proof does not use that branch and does not add AC as a dependency.
- The Hopf definition supplies the two convolution/antipode equations. The local lemma verifies preservation of the rank-one presentation, coassociativity, counit identities, antipode induction, central root powers, coproduct/counit/antipode stability of `J_ell`, and the truncated quotient basis.
- The divided-power definition and reordering lemma were checked at `T_{1,0,1}`. They justify the identity-on-generators map and `E^ell=[ell]_zeta! E^(ell)` in the Lusztig target.
- The tilting interface uses the actual category, additive, k-linear, braided, rigid, pivotal, module, Cartan, and categorical-trace definitions as direct dependencies. It treats the module tensor action, Weyl/dual-Weyl families, and their root-order construction as inputs; it does not claim they exist for the higher-rank Lusztig specialization or prove any ideal-closure result.
- The declared batch-64 page prerequisite was read at its current location `library/hopf-hecke-algebras/hopf-hecke-and-quantum-symmetry-interfaces.md`, with its actual carriers. `def-hh-rational-spectral-r-matrix` defines only the finite `C^2` family `R(u)=uI+iP`; `lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter` proves the finite parameterized identities by an `S_3` operator calculation. The page expressly excludes universal/completed R-matrices and affine-module braidings. PA-37's item proofs do not use either batch-64 item, so the required page edge is reading context and is not a logical item dependency or acceptance claim. Its own page prerequisites remain reading context as well.

## Local mathematical results and scope gap

- The rank-one normal-order rewrite terminates by the lexicographic pair (number of inversions in `F<K<E`, number of `E`/`F` symbols). It proves spanning over `R=C[v,v^{-1},(v-v^{-1})^{-1}]`; the generic rank-one supplier proves independence, hence the `R`-form is free and the basis survives base change to a primitive odd root.
- At primitive odd order `ell>2`, both explicit commutator expansions show `E^ell` and `F^ell` commute with the opposite root generator; toral conjugation makes them central. The q-binomial coproduct calculation uses exact order of `zeta^2`, and the antipode powers use `zeta^{ell(ell-1)}=1`; it proves the local root-power ideal is a Hopf ideal in the stated convention. The quotient basis has `0<=a,b,c<ell`, giving dimension `ell^3`.
- In the Lusztig target, `[ell]_zeta=0` makes the image of `E^ell` vanish, while rank-one PBW independence keeps it nonzero in the De Concini–Kac source. The fifth-root B example and counterexample are direct specializations of those complete proofs.
- The tilting carrier is only a conditional definition/interface. It does not construct the root category, Weyl or dual-Weyl modules, tensor closure, a tensor ideal of negligible morphisms, semisimplicity, fusion rules, or modularity. No higher-rank quantum Frobenius map or kernel theorem was authored. No generic-q semisimplicity statement was transferred.
- No TikZ diagram was needed for the authored proofs: the arguments are explicit algebra computations, and no claim relies on a diagram.

## Source harvest and retrieval history

The full-text records and every harvested result's disposition are in `research/non-ml-math-remaining-81-2026-10-18-batch-68.coverage.json`. EGNO's complete 362-page book, Etingof–Semenyakin's complete 43-page notes, AJS's complete Astérisque volume (324 PDF pages), and Andersen–Stroppel's complete 22-page paper were retrieved and their listed sections inspected. `source-fetch-check --stamp` verified the four accessible sources; byte counts and hash prefixes are in `fetch_verified`.

The direct Andersen–Paradowski paper could not be retrieved. Its correct Springer DOI is `10.1007/BF02099312`; Springer serves a subscription preview, and the Project Euclid record returns an Incapsula challenge. A false search lead, DOI `10.1007/BF00704588`, was checked and excluded: it is Michio Jimbo's unrelated 1985 article, not Andersen–Paradowski. Five confirmed full-text route attempts and alternative-source searches are recorded under `source_resolution`. The earlier compacted retrieval note mentions a Springer and Project Euclid attempt without exact URLs or timestamps; I did not fabricate additional attempt rows from that incomplete history. The exact article remains owner-escalated rather than dropped. The accessible EGNO and Andersen–Stroppel treatments name or refer the foundational quotient proof to Andersen–Paradowski, so no local higher-rank proof is claimed. The local complete rank-one arguments are recorded per item with exact dependencies in that source-resolution record.

The coverage harvest contains 12 result records. Results backing the six scoped carriers are `included` or `inline`; results whose theorems are not proved here are `deferred` to the A page with reasons. There are no source drops.

## Unresolved theory and proposed placement

The exact unresolved claims and hypotheses are retained in the A page and in `coverage.json` under `source_resolution.unresolved_claims`:

1. `thm-root-of-unity-lusztig-module-category-is-braided-rigid` belongs before applying the tilting interface to an actual module category. It must prove the divided-power form's Hopf stability at the root and the type-1 tensor, braiding, and rigidity structure under the declared parameter/lattice conditions.
2. `def-root-of-unity-weyl-and-dual-weyl-module-families` belongs before the tilting-object definition, with a complete construction and hypotheses for the standard families and the highest-weight category structure they require.
3. `thm-quantum-frobenius-map-and-kernel-in-good-root-order-regime` belongs after the root-form definitions. It must state the full Cartan, divisibility, lattice, parameter, and type-1 module branch before proving the map and kernel.
4. The tensor-stability/tilting result belongs after the category and module-family suppliers. Proposed central item: `thm-negligible-morphisms-form-a-tensor-ideal-on-root-of-unity-tiltings`.
5. `thm-verlinde-tilting-quotient-in-simply-laced-large-odd-order-regime` belongs after the tensor-ideal and trace prerequisites. It must prove quotient semisimplicity, alcove labels, and fusion rules under the exact simply-laced, odd `ell>h`, `ord(zeta^2)=ell`, selected-lattice branch. Any modularity claim needs a separate nondegenerate-braiding result.

These are substantial higher-rank prerequisites, not a page-capacity issue. No existing item supplies the complete chain, and no claim was weakened or omitted to fit.

## Final checks and readiness

- Local `dependencyLevels` recomputation: 6 items, no cycles/errors, levels 0–3 as listed above. `node tools/manifest-deps.mjs` and carrier/manifest reconciliation pass.
- Focused `depcheck` for all six items and prerequisite closure: 0 errors, 0 warnings; 658 closure items and 290 pages checked.
- `content-policy.mjs` on the batch manifest: 6 items, 0 errors, 0 warnings.
- `precheck.mts` on four proof-bearing items: 4/4 pass with direct strategy. `proof-layout.mjs`: 4 items, 14 steps, 0 defects.
- `proof-contract.mjs ... --strict`: 4/4 proof-bearing items, 0 errors, 0 warnings. Definitions have no proof contract. `rendercheck.mjs` on the six items and two PA-37 pages: all 8 files pass YAML, KaTeX, link, and display-math checks.
- `source-fetch-check --stamp`: 4/5 sources fetch-verified (four newly stamped); the fifth is the documented Andersen–Paradowski owner escalation. A later check pass is 4/5 resolved with one unresolved source. `coverage-checklist --require-destination`: 1 page and 12 harvested results; its only 3 errors are the owner-escalation status, uncertain source resolution, and five-attempt limit for the inaccessible AP source. No deferred result lacks its A-page destination.
- `node tools/item-dependency-levels.mjs check --run non-ml-math-remaining-81-2026-10-18` remains nonzero run-wide: 162 pages, 1,058 items, 121 errors (41 empty inventories and 80 stale dependency-level labels), with no duplicate item claim or cycle. The scoped PA-37 calculation is clean. No other batch was changed.
- `node tools/batch-dependency-levels.mjs check --run ...` reports the shared scheduling artifact stale after assigned manifests were authored; it was not refreshed because run-wide scheduling metadata belongs to the owner.
- Step-1 records were written for all six items with decision `ready`, exact examined dependencies, no `--owner`, and hash-bound current carriers. Definitions require no proof contract; the four proof-bearing items have strict contracts. These records are completion evidence, not independent approval.
- The recomputed autopilot status is at `1-scaffold`, 39/81 pairs covered, with nothing in flight. Its current blocker is `stage 1-scaffold: plan() threw — Unexpected non-whitespace character after JSON at position 6647 (line 129 column 2)`. The checked `plan-spec.json` and batch-68 manifest parse correctly; the stage blocker remains in run state and belongs to owner reconciliation. The plan and engine state were left untouched; no published content, shared plan, engine state, or verdict was edited.
