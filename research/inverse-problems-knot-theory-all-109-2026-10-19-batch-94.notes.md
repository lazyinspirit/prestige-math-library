# Batch 94 authoring record

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Pair: KT-41, beta batch 94  
Scheduling input: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-dependency-levels.json`  
Scheduling input hash from the dispatched task: `9284b36bc6e0fd19751819c3c112413699fe438266d6273ed9d6155366f197c1`

## Scope and active-run check

The current `.autopilot/inverse-problems-knot-theory-all-109-2026-10-19` status is `running`, held at `1-scaffold` for the owner repair in `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json`; the latest status recomputation reports 99/109 covered, lists batch 94 among the uncovered batches, and has no worker in flight. The batch-94 page scaffold was untracked at HEAD `50139bdcb619a39f8d99e13d17d846b8628e7312`. No engine state, shared plan, verdict, published item, or other pair's carrier was changed.

Owned pages are `tau-invariant-and-the-four-ball-genus` and `tau-invariant-and-the-four-ball-genus-examples`. The item inventory, direct dependencies, and item levels were added to the batch-94 page manifest before item carriers were created.

## Plan and design resolution

The controlling design is `research/plan-knot-theory-track.md`, KT-41 at lines 1212–1232. It controls the abbreviated assignment because the assignment explicitly names those locations and requires the complete design section. The current `research/plan-spec.json` entries agree on page identities, titles, category, order, companions, and required pages; both `items: []` fields are preauthoring placeholders, so they do not conflict with the explicit KT-41 item inventory.

The controlling page requirements remain `smooth-and-topological-knot-concordance`, `grid-homology-and-combinatorial-knot-floer-theory`, and `knot-cobordism-maps-and-functoriality`; the examples page retains its planned requirement on the A page. The track section names three principal A items and two B items. The cited `research/knot-theory-planning-2026-10-18/prerequisite-map.md` adds the two planned A-page proof modules `lem-knot-floer-large-surgery-and-filtered-cobordism-input` and `lem-tau-connected-sum-filtered-tensor-product`. The final A inventory also includes the choice-free threshold/tensor lemmas, unknot normalization, mirror-duality module, and a Whitehead-double value module so the B claims and their unresolved checks have explicit suppliers.

The prerequisite map's broad edge list is not copied literally where it creates a cycle or an unused edge. In particular, it lists `thm-tau-is-concordance-invariant-and-four-ball-genus-bound` among the prerequisites of `lem-tau-is-independent-of-heegaard-grid`, while the theorem itself needs the invariant to be well-defined; it also groups the tau definition with its later proof modules. The authored graph instead orders the diagram-level definition, the two choice-free filtered-complex lemmas, the Heegaard/grid invariance result, the two knot-level modules, and then the main theorem. No item is used to prove its own replacement. The plan map also lists `def-axiom-of-choice`; the actual relevant suppliers and source arguments use at most countable choice (`AC_omega`), while the finite filtered-complex lemmas are choice-free. No proof use of full AC has been found, so full AC is not added as a premise.

The current batch-93 notes say the smooth/topological concordance page was absent. The current page carrier is present and its relevant current bodies and readiness records were inspected; the earlier absence note is stale. The current issues are instead the escalated grid-to-HFK and cobordism-map proof obligations recorded below.

## Dependency and cross-batch reconciliation

The dispatch named page dependency level 7, prerequisite batches 74/92/93, and scheduling-input hash `9284b36b…`. The batch-94 item graph also uses batch 59, 60, 90, and 91 suppliers; batch 91's `def-rasmussen-s-invariant` is currently ready, while its genus-bound theorem and Lee-cobordism lemma are escalated. The current on-disk dependency-level file instead carries hash `a027c237…` and records batch 94 at level 6 with page prerequisites 60/74/91/92/93. This differs from the dispatched input and must be reconciled by the owner; I did not edit the shared scheduling input. The batch-94 cross-batch file contains all 62 current declared external page/item edges; a manifest-only comparison found no missing or extra edge. The native batch-dependency and frontier-ledger recomputations are blocked by an unrelated malformed YAML escape in `items/lem-closed-hyperbolic-three-manifold-has-no-z2-subgroup.md:29` (`\\mathbb` inside a double-quoted scalar); that file is outside this batch and was left untouched.

The current `def-generic-movie-of-an-oriented-knot-cobordism` body has an actual dependency on `lem-smooth-link-cobordisms-admit-finite-generic-movies`, although the batch-93 page manifest and its current Step-1 record omit that edge. The helper carrier and its long proof body exist, but it has no current Step-1 readiness record or manifest ownership. The movie decomposition claim in the KT-41 cobordism route therefore remains unresolved until the owner reconciles this input. No missing supplier excerpt or readiness is inferred.

## Item inventory and levels

The batch manifest records these exact inventories and item levels, computed as zero without in-run suppliers and otherwise one plus the maximum in-run supplier level:

| Item | Home | Direct in-run suppliers | Level |
|---|---|---|---:|
| `def-knot-floer-filtration-and-tau` | A | `def-admissible-pointed-heegaard-floer-data`, `def-oriented-seifert-surface` | 1 |
| `lem-knot-floer-mirror-complex-duality` | A | `def-knot-floer-filtration-and-tau`, `def-knot-connected-sum-and-prime-knot`, `def-admissible-pointed-heegaard-floer-data` | 2 |
| `lem-tau-additive-for-filtered-tensor-products` | A | `def-knot-floer-filtration-and-tau` | 2 |
| `lem-tau-of-the-unknot-is-zero` | A | `def-knot-floer-filtration-and-tau`, `lem-standard-unknot-hat-diagram-rank-one` | 2 |
| `lem-tau-preserved-by-filtered-chain-homotopy-equivalence` | A | `def-knot-floer-filtration-and-tau` | 2 |
| `lem-knot-floer-large-surgery-and-filtered-cobordism-input` | A | `def-knot-floer-filtration-and-tau`, smooth concordance/slice-genus inputs, pointed and grid models, grid comparison, disk analysis, generic movie, decorated target/map, triangle analysis, movie naturality | 8 |
| `lem-tau-is-independent-of-heegaard-grid` | A | `def-knot-floer-filtration-and-tau`, filtered-equivalence lemma, Seifert normalization, grid definition/algorithm, grid-move generation, local grid invariance, pointed invariance, grid-to-analytic theorem | 8 |
| `lem-tau-connected-sum-filtered-tensor-product` | A | tau definition/additive lemma, grid independence, connected-sum definition/choice lemma, Seifert definitions, pointed/grid models and invariance | 9 |
| `thm-tau-is-concordance-invariant-and-four-ball-genus-bound` | A | tau definition, grid independence, unknot value, cobordism estimate, connected-sum formula, smooth concordance/genus/minimum inputs | 10 |
| `lem-knot-kt41-whitehead-double-values` | A | tau/grid inputs, Rasmussen/Lee definitions and bound, Khovanov/Floer algorithms, genus minimum inputs | 11 |
| `ex-knot-kt-41-worked-cases` | B | tau definition, grid independence, unknot value, mirror duality, main theorem, grid and Seifert inputs | 11 |
| `cex-knot-kt-41-boundary-case` | B | tau definition, grid independence, Rasmussen definition/bound, Lee lemma, genus, Whitehead values | 12 |

The `dependency_level` labels are mirrored in the item carriers and independently recomputed after authoring. The two batch-91 suppliers also create the separate page-batch reconciliation described above.

## Current supplier inspection and limits

- Batch 74: `def-smooth-knot-concordance`, `def-smooth-and-topological-slice-genus`, and `lem-smooth-and-topological-slice-genus-minima-exist` were read. Their current Step-1 records are ready; the slice-genus definition carries `AC_omega` and the minimum argument is choice-free after nonemptiness.
- Batch 92: `def-admissible-pointed-heegaard-floer-data`, the grid diagram, the finite grid algorithm, and the standard one-pointed unknot computation are current and ready. `thm-grid-moves-generate-oriented-knot-isotopy`, `thm-grid-commutation-stabilization-invariance-proof`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, `thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization`, and the pointed-disk analysis item are currently escalated. The grid-to-analytic comparison, normalized grading, bridge/grid-move generation, and analytic inputs cannot be treated as completed proofs.
- Batch 93: the current decorated target, cobordism representative, triangle analysis, and naturality/movie-invariance carriers explicitly retain unsupplied proof obligations, and their current Step-1 records are escalated. They do not prove the filtration-shift input required by KT-41.
- Batch 60: the oriented connected-sum definition and local-choice lemma have current owner readiness records. The definition fixes an oriented gluing convention; the lemma proves independence of the local choices under `AC_omega`.
- Batches 59 and 90: the Seifert-surface definitions, disk-and-band genus theorem, and finite Khovanov chain algorithm used by the example/value helper have current ready records. Their statements and relevant proofs were inspected; they do not supply the Whitehead-double reductions.
- Batch 91: the current `def-rasmussen-s-invariant` record is ready. The current genus-bound theorem and its Lee cobordism filtration supplier are escalated; neither is used as a proved premise.

## Source readings

All twelve source entries in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-94.coverage.json` were fetched and stamped; `coverage-checklist --require-destination` passes with two pages, 34 harvested results, zero errors, and zero warnings. The source calculations are still not treated as substitutes for local proofs. Exact remaining proof/source obligations are recorded per item below.

## Item checkpoints

### `def-knot-floer-filtration-and-tau`

Authored the absolute Alexander filtration and the threshold definition for a specified admissible doubly pointed diagram and Seifert surface, with explicit hypotheses that the hat complex is a chain complex, its differential is filtration-nonincreasing, and its total homology is `F_2`. The formula uses the capped Seifert surface in zero-framed surgery and fixes the standard unknot generator at Alexander level zero. The general finite filtered-complex threshold has a complete two-step minimum-existence verification. The diagramwise value is kept distinct from the knot invariant until the diagram/surface comparison is proved; this avoids claiming the unresolved grid-to-analytic identification.

Dependencies: `def-admissible-pointed-heegaard-floer-data`, `def-oriented-seifert-surface`, the published Spin-c definition, and `thm-well-ordering-principle`; no choice axiom is used for supplied data. The threshold minimum proof explicitly shifts a bounded-below integer set into $\mathbb N_0$. Sources inspected: Ozsvath–Szabo, *Knot Floer homology and the four-ball genus*, §2.1; Hom, *A survey on Heegaard Floer homology and concordance*, §§2.2, 3.1; Ozsvath–Stipsicz–Szabo, *Grid Homology for Knots and Links*, Chapters 4, 6, 8, 13. These independent paper/survey/book treatments are fetch-stamped in the coverage file.

### `lem-tau-additive-for-filtered-tensor-products`

Authored a choice-free proof for finite integer-filtered complexes with one-dimensional total homology. The contract uses the field-linear Kunneth decomposition, filtered cycles for the upper bound, and separating cocycles annihilating the lower tensor filtration for the reverse bound. Dependencies: the tau threshold definition. Sources inspected: Ozsvath–Szabo, Proposition 3.2; Hom, §3.1. No knot-level connected-sum identification is asserted here. Next: complete the standard unknot normalization calculation.

### `lem-tau-preserved-by-filtered-chain-homotopy-equivalence`

Authored and proved the abstract invariance of the first nonzero filtration threshold for finite filtered complexes with one-dimensional total homology. The proof uses only filtration preservation, the commuting inclusion square, and the chain homotopy inverse; it introduces no choice. Dependency: `def-knot-floer-filtration-and-tau`. Sources inspected: Ozsvath–Szabo, §2.1; Hom, §3.1. No external analytic or grid-equivalence claim is used.

### `lem-tau-of-the-unknot-is-zero`

Authored a complete finite computation in the standard genus-zero one-pointed diagram. The one generator is the only homology class, and the absolute Alexander convention places it at level zero, so the first nonzero inclusion level is exactly zero. Dependencies: tau definition and the current ready record for `lem-standard-unknot-hat-diagram-rank-one`. Sources inspected: Hom, §§2.1 and 3.1; Manolescu, §3.5. No choice axiom is used.

### `lem-knot-floer-mirror-complex-duality`

Authored a diagram-level duality argument for supplied regular pointed data. The finite dual-threshold calculation proves the sign change algebraically; reflecting a holomorphic strip reverses its ends, transposes the differential, and the conjugate relative Spin-c structure reverses the absolute Alexander pairing. Sources inspected: Ozsvath–Szabo, *Holomorphic disks and knot invariants*, §3.5, Propositions 3.7–3.9; Hom, *The knot Floer complex and the smooth concordance group*, §3, Proposition 3.2(3) proof; Manolescu, *An Introduction to Knot Floer Homology*, §§3.1 and 3.5. No choice axiom is used for the supplied diagrams.

### `lem-tau-is-independent-of-heegaard-grid`

Authored the full intended statement and the complete conditional implication from a specified filtered chain homotopy equivalence to equal tau thresholds. The universal conclusion remains escalated. Exact unresolved suppliers: `thm-grid-moves-generate-oriented-knot-isotopy` (bridge/grid-move generation), `thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization` (filtered maps/homotopies after variable restriction), `thm-grid-commutation-stabilization-invariance-proof` (local grid move maps and inverse homotopies), and `thm-grid-homology-independent-of-grid-and-equals-knot-floer` (normalized grid-to-analytic comparison including the $V$ factors and absolute grading). All four current Step-1 records are escalated. The last comparison cannot be inferred from its Statement or from fully collapsed associated-graded grid homology alone. AC_omega is explicit; no full AC branch is used. Sources inspected: Ozsvath–Szabo §2.1, Hom §§2.2–3.1, Grid Homology Chapters 5, 6, 13.

### `lem-knot-floer-large-surgery-and-filtered-cobordism-input`

Authored the full genus-$g$ cobordism estimate and the designated large-surgery/movie proof route. The claim remains escalated. Exact unresolved inputs: `def-knot-floer-cobordism-map` is only a representative, `lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing` has no supplied proof, `lem-knot-floer-cobordism-naturality-and-movie-invariance` has unsupplied movie checks, `lem-smooth-link-cobordisms-admit-finite-generic-movies` is an actual transitive dependency of the movie definition but is unregistered and has no current Step-1 decision, and `thm-grid-homology-independent-of-grid-and-equals-knot-floer` is escalated. Required hypotheses include regular triangle data, compactified boundary/gluing analysis, the exact Alexander/Spin-c shift and adjunction inputs, and nonvanishing of the relevant surgery map. Sources inspected: Ozsvath–Szabo Theorem 1.1 and §§3.3–3.5; Hom §§3.1–3.2; Zemke Theorem 1.4, §§7.3, 9.9, 10.1. AC_omega is recorded; no full AC branch is used.

### `lem-tau-connected-sum-filtered-tensor-product`

Authored the full $CFK^\infty$ bifiltered connected-sum statement, the induced finite-hat tensor statement, and its conditional tau-additivity consequence. The missing geometric premise is the neck-stretched filtered Künneth equivalence. The exact current analytic supplier `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing` does not include the required factorization; `thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization` and `thm-grid-homology-independent-of-grid-and-equals-knot-floer` are also escalated. Required remaining checks: disk splitting/factorization, compactness and gluing both ways, and additive Maslov/Alexander normalization. Sources inspected: Ozsvath–Szabo Proposition 3.2, Hom §3.1, Grid Homology Chapters 5, 6, 13. The conditional algebra is choice-free; AC_omega is reserved for analytic diagram selection.

### `lem-knot-kt41-whitehead-double-values`

Authored the full source-convention Statement for $D_+(T_{2,3},2)$ and recorded why the values are not locally verified. Hedden–Ording's Theorem 1.1 and §§2.1–2.2 report the values, but the local carrier does not contain the 25-generator knot Floer differential, the Khovanov matrices/reduction, or the Lee filtration check. The current grid-to-analytic supplier `thm-grid-homology-independent-of-grid-and-equals-knot-floer` is escalated; the source's selection of $s=2$ additionally uses `thm-rasmussen-s-bounds-smooth-four-ball-genus`, whose Lee supplier `lem-lee-cobordism-filtration-genus-bound` is escalated. Sources inspected: Hedden–Ording Theorem 1.1 and §§2.1–2.2; Rasmussen §§3–4; Hom §§3.1 and 5. Exact unresolved matrix/filtration inputs remain explicit.

### `thm-tau-is-concordance-invariant-and-four-ball-genus-bound`

Authored the full theorem and proved its consequences conditionally: genus-zero cobordisms give concordance invariance, the connected-sum supplier gives additivity, and puncturing a minimal genus slice surface gives the genus inequality from the cobordism estimate and $\tau(U)=0$. The grid-independence, large-cobordism, and connected-sum suppliers are not proved in their current carriers, so the theorem remains escalated. The finite surface puncture, genus calculation, and final inequality are recorded explicitly; `thm-isotopy-extension` is the stated compact support input for standardizing the small interior ball.

### `ex-knot-kt-41-worked-cases`

Authored the full unknot/right-trefoil/reverse-mirror staircase model and direct threshold calculations. The right staircase calculation checks $F_0=\langle b,c\rangle$ is acyclic and $a$ first survives at filtration one; the dual mirror model first survives at minus one. The Seifert disk-and-band surface gives the genus-one upper bound; the lower bound is conditional on the escalated main theorem. The source staircase's identification with the normalized analytic/grid knot complex remains open under `thm-grid-homology-independent-of-grid-and-equals-knot-floer`. A TikZ positive-braid closure diagram records the knot convention and is not used in the proof.

### `cex-knot-kt-41-boundary-case`

Authored the complete counterexample claim and the arithmetic implication from $s=2$ to $g_4^{\mathrm{sm}}\ge1$. Its numerical prerequisite `lem-knot-kt41-whitehead-double-values` and Rasmussen bound `thm-rasmussen-s-bounds-smooth-four-ball-genus` are both escalated through the exact finite-computation and Lee-map obligations above; therefore the B item is escalated and does not claim a locally verified nonsliceness proof.

## Step 1 decisions and final scoped checks

Recorded current, non-owner Step 1 records for all 12 items using the exact dependencies in their carriers. Ready: `def-knot-floer-filtration-and-tau`, `lem-knot-floer-mirror-complex-duality`, `lem-tau-additive-for-filtered-tensor-products`, `lem-tau-of-the-unknot-is-zero`, and `lem-tau-preserved-by-filtered-chain-homotopy-equivalence`. Escalated: `lem-knot-floer-large-surgery-and-filtered-cobordism-input`, `lem-tau-is-independent-of-heegaard-grid`, `lem-tau-connected-sum-filtered-tensor-product`, `thm-tau-is-concordance-invariant-and-four-ball-genus-bound`, `lem-knot-kt41-whitehead-double-values`, `ex-knot-kt-41-worked-cases`, and `cex-knot-kt-41-boundary-case`. The ready records' item hashes were rechecked against the current carriers; escalations preserve the exact open suppliers and are not acceptance.

Final scoped checks: `proof-contract.mjs --strict --json` passes all 12 contracts with zero errors/warnings; `proof-layout.mjs` reports 12 items, 27 steps, zero defects; `rendercheck.mjs` reports 14 files, zero errors/warnings; `content-policy.mjs` reports 12 items, zero errors/warnings; coverage reports 2 pages and 34 harvested results with zero errors/warnings; `source-fetch-check.mjs --coverage ...batch-94.coverage.json` verifies all 12 source entries and all 12 are resolved with zero documented drops. The assigned item dependency labels match recomputed levels exactly: 1, 2, 2, 2, 2, 8, 8, 9, 10, 11, 11, 12 in manifest order; no batch-94 item has a dependency-level error.

The scoped phase precheck passes the five ready items. It reports `no-qed` for the seven escalated items because their supplier-dependent proof routes are explicitly incomplete; no false QED was added. The run-wide item-level check still reports five unrelated errors: empty inventory on `character-varieties-and-the-a-polynomial-examples`, and stale labels for `lem-property-p-instanton-surgery-triangle-and-rank-input` (5 vs. 6), `thm-property-p-for-nontrivial-knots` (6 vs. 7), `lem-s-three-filling-detects-the-meridian-slope` (7 vs. 8), and `thm-gordon-luecke-knot-complement-determines-knot` (8 vs. 9). Native batch-level and frontier-ledger recomputation remain blocked by the malformed YAML at `items/lem-closed-hyperbolic-three-manifold-has-no-z2-subgroup.md:29`; it is outside scope and untouched. The run remains held at Step 1 pending owner repair/recertification and unresolved suppliers; this batch did not modify engine state or assert workflow completion.
