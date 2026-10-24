# Batch 63 — Oka coherence and local coherent free resolutions

## Scope and controlling evidence

- Assigned pair: `qftx-gaga-analytic-coherence` and `qftx-gaga-analytic-coherence-examples`, category `quantum-field-theory-mathematics`, library `mathematics`; all items remain draft.
- No separate design section governs this pair. The assigned task says “design none found”; the plan track contains no matching design section. The pair is being scaffolded from the current plan contract, the owner’s append-2 research dossier, and the full-text sources below.
- The current `research/plan-spec.json` preserves the exact theorem statement and two B-page example contracts: `thm-qftx-gaga-analytic-oka-coherence`, `ex-qftx-gaga-analytic-relation-kernel`, and `ex-qftx-gaga-analytic-skyscraper-presentation`. The separate proposal is `research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/adhm-gaga-analytic-scaffold.md` §967.15.
- **Plan conflict recorded:** the task and append-2 supplier-consumer handoff list four A-page `requires` pages, while current `plan-spec.json` and the assigned batch manifest list a fifth, `compact-laplace-type-operators-and-hodge-representatives`. The current plan controls; the authored A page retains all five exact page prerequisites. The fifth page supplies the precise complex-manifold definition used here.
- **Level conflict recorded:** the plan’s proposed item levels (theorem 1, examples 2) do not follow the current Step-1 rule when only external suppliers are present. The current batch dependency graph records batch 63 at level **0**, `requires: []`. Item levels below are recomputed from actual in-run item edges after adding the necessary local definition and module lemmas; external imports do not raise a level.
- The initial empty inventories in `batch-63.pages.json` are placeholders. The task, current plan, and owner direction require the theorem plus both planned examples, with additional A-page mathematics where needed.

## Mathematical interface, conventions, and supplier audit

The main item proves, under the planned full-AC premise, Oka coherence on every finite-dimensional complex manifold: each finite tuple of local holomorphic sections has a relation sheaf generated on a neighborhood by finitely many sections. It then proves the stated kernel, cokernel, finite-extension, and finite partial free-resolution consequences. A partial resolution of length `l` is exact through the last map into the coherent sheaf and at every intermediate free term; exactness at the leftmost free term is not asserted. No global analytic free resolution is claimed.

The exact planned external item dependencies are `def-axiom-of-choice`, `thm-holomorphic-germ-ring-is-noetherian`, `thm-weierstrass-preparation-theorem`, `thm-weierstrass-division-theorem`, `lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular`, `thm-finite-generation-and-finite-presentation-over-a-noetherian-ring`, and `thm-exactness-of-sheaves-stalkwise`. I inspected each current statement and proof. Their actual interfaces are: full AC; Noetherianity of every `O_{m,0}` for `m≥1`; preparation of a germ regular in the last variable as a unit times a monic Weierstrass polynomial of the exact order; unique division with a remainder of degree below the Weierstrass degree; a complex-linear coordinate making a nonzero germ regular; the equivalence of Noetherian, finitely generated, and finitely presented modules over a Noetherian commutative ring; and exactness of a sheaf sequence iff it is exact at every stalk.

The published item proofs were checked at their actual uses. In particular, `thm-holomorphic-germ-ring-is-noetherian` proves only stalkwise ring Noetherianity; it does not imply neighborhood-uniform relation generation. The proof therefore establishes uniform generators over one common product neighborhood using a bounded-degree Weierstrass reduction and finite-matrix kernels. Zero tuple entries, unit entries, arbitrary points of the product neighborhood, and the local unit in the Weierstrass factorization are handled explicitly. AC is retained because the approved statement assumes it; the local constructions use only finite choices, so no indispensable arbitrary-choice step is claimed.

All seven direct suppliers are outside the current run inventory, `status: published`, and their current bytes match `research/math-imports.json`; `loadStep1Record` confirms none is an in-run item. I inspected the full direct statements and proofs rather than inferring validity from status. The transitive closure contains **1,046** imported items; all are present, published, and their current bytes match their import pins (zero missing, unpublished, or hash-mismatched items). No unresolved supplier or authoring-readiness gap was found, so no supplier escalation is open.

## Full-text source evidence

- Demailly, *Complex Analytic and Differential Geometry*, [full text](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf), Chapter II §3.3, Theorem 3.19 and Lemma 3.20, printed/PDF pp. 89–90. The full 455-page PDF was fetched and hash-checked by `source-fetch-check --stamp`; I read the complete Oka proof and bounded-degree relation lemma. Demailly explicitly distinguishes stalkwise Noetherianity from locally uniform generators. The local proof supplies the common-neighborhood finite-matrix step and the later coherent-module/resolution calculus not contained in Theorem 3.19.
- Wehler, *Stein Manifolds* lecture script, [full text](https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf), §4.2, Definitions 4.25–4.26, Remark 4.27, and Theorem 4.28 with its complete two-induction proof, printed pp. 136–145/PDF pp. 140–149. The full 253-page PDF was fetched and hash-checked by `source-fetch-check --stamp`; I read the complete cited range. Its target-rank induction independently confirms the finite-matrix-kernel step.
- **Proof comparison note:** both sources compress a unit normalization in the local bounded-degree reduction. At Wehler §4.2, PDF pp. 142–143, the local factor is written `p_1=e p`, division is by `p`, and the displayed elementary relations use the original `p_1`; the coefficient of those relations must therefore be divided by the unit `e`. The authored argument writes that factor explicitly and verifies the resulting polynomial relation by uniqueness of Weierstrass division. No source shorthand is used as a substitute for this check.
- `source-fetch-check --stamp` has verified both independent sources on both A/B coverage entries: **4/4 source rows fetched**, all complete PDFs, with no recovery retries or unresolved sources. Exact named-result harvests and each result’s disposition are in `batch-63.coverage.json`.

## Item authoring checkpoints

Item-specific claim, conventions, dependencies, source locators, decisions, validation, and next action are appended here after each completed carrier.

### `def-qftx-analytic-coherent-module`

- Claim/convention: defines locally finite type, the relation sheaf as the kernel of the finite-section map, coherent module sheaves, and analytic coherent modules over `O_M`; includes the zero-rank convention.
- Dependencies: `def-ringed-space`, `def-module-on-ringed-space`, `def-kernel-cokernel-image-sheaves`, `def-stalk-of-presheaf`, and `def-complex-manifolds-and-holomorphic-vector-bundles`, all `mathematical-premise`; item level **0** (all suppliers are external imports).
- Sources: Demailly, *Complex Analytic and Differential Geometry*, Ch. II §3.3 Definition (3.18), pp. 89–90; Wehler, *Stein Manifolds*, §4.2 Definitions 4.25–4.26, printed pp. 136–137/PDF pp. 140–141. Both are full-text sources in the batch coverage record.
- Decision: authored the exact local interface needed to state Oka coherence and the conditional module lemmas; no proof is applicable to this definition.
- Validation: the strict proof contract, proof layout, focused dependency closure, content policy, rendering, source coverage, and local dependency-level checks pass.
- Readiness: Step 1 record is ready after complete prerequisites, page placement, proof contract, and scoped checks; independent review remains a later gate.

### `lem-qftx-analytic-coherent-matrix-kernels`

- Claim/convention: on a ringed space with coherent structure sheaf, kernels of every finite free map `O^p -> O^q` are locally of finite type. The proof is a target-rank induction with a scalar relation kernel as its base case.
- Dependencies: `def-qftx-analytic-coherent-module`, `def-kernel-cokernel-image-sheaves`, and `thm-exactness-of-sheaves-stalkwise`, all `mathematical-premise`; item level **1**.
- Source: Wehler, *Stein Manifolds*, §4.2, Theorem 4.28 proof, target-rank induction, printed pp. 138–140/PDF pp. 142–144. The local statement and proof spell out the map and stalk argument used by the source's induction.
- Decision: complete conditional lemma authored; it will be used over the lower-dimensional base after the Oka induction supplies the coherent-structure-sheaf hypothesis.
- Validation: the strict proof contract, proof layout, focused dependency closure, content policy, rendering, source coverage, and local dependency-level checks pass.
- Readiness: Step 1 record is ready after complete prerequisites, page placement, proof contract, and scoped checks; independent review remains a later gate.

### `lem-qftx-gaga-analytic-bounded-degree-relations`

- Claim/convention: for integers `n,q,d≥1`, a finite tuple of monic Weierstrass polynomials in the last variable with degrees at most `d` has every relation germ reduced to polynomial relation germs of degree at most `d` at each point of the product neighborhood. The proof separates the unit case, factors the vanishing polynomial locally, and explicitly divides relation coefficients by the local unit before using the elementary syzygies.
- Dependencies: local coherence definition, regular-germ and Weierstrass-polynomial definitions, preparation/division, and power-series uniqueness (all `mathematical-premise`); item level **1**.
- Sources: Demailly, *Complex Analytic and Differential Geometry*, Ch. II §3.3 Lemma 3.20, printed/PDF pp. 89–90; Wehler, *Stein Manifolds*, §4.2 Theorem 4.28 proof, bounded-degree reduction, printed pp. 140–144/PDF pp. 144–148.
- Decision: the full local factorization and quotient/remainder argument is authored, including the normalization by the local unit. No source shorthand is used in place of this argument.
- Validation: the strict proof contract, proof layout, focused dependency closure, content policy, rendering, source coverage, and local dependency-level checks pass.
- Readiness: Step 1 record is ready after complete prerequisites, page placement, proof contract, and scoped checks; independent review remains a later gate.

### `lem-qftx-coherent-analytic-module-calculus`

- Claim/convention: coherent module sheaves are closed under kernels and cokernels; in a short exact sequence, coherence of any two terms implies coherence of the third. The proof uses the local finite-presentation consequence of the definition, stalkwise epimorphisms, and explicit kernel/cokernel maps.
- Dependencies: `def-qftx-analytic-coherent-module`, `def-kernel-cokernel-image-sheaves`, `def-exact-sequence-sheaves`, and `thm-exactness-of-sheaves-stalkwise`, all `mathematical-premise`; item level **1**.
- Source: Wehler, *Stein Manifolds*, §4.3 Propositions 4.32 and 4.34, complete proofs, printed pp. 148–153/PDF pp. 152–157. Corollary 4.33 falls between these results and is recorded as out of scope in the coverage harvest.
- Decision: the local proof handles all three possible coherent pairs in a short exact sequence; it does not treat the source citation as a substitute for the argument.
- Validation: the strict proof contract, proof layout, focused dependency closure, content policy, rendering, source coverage, and local dependency-level checks pass.
- Readiness: Step 1 record is ready after complete prerequisites, page placement, proof contract, and scoped checks; independent review remains a later gate.

### `thm-qftx-gaga-analytic-oka-coherence`

- Claim/conventions: preserves the plan’s full-AC Oka relation-sheaf claim on every finite-dimensional complex manifold, closure under kernels/cokernels/finite extensions, and arbitrary finite partial local free resolutions. Exactness is asserted at all terms except the leftmost one; no global resolution is claimed.
- Dependencies (all `mathematical-premise`): `def-axiom-of-choice`, `def-complex-manifolds-and-holomorphic-vector-bundles`, `def-qftx-analytic-coherent-module`, `def-stalk-of-presheaf`, `lem-qftx-analytic-coherent-matrix-kernels`, `lem-qftx-gaga-analytic-bounded-degree-relations`, `lem-qftx-coherent-analytic-module-calculus`, `def-regular-holomorphic-germ`, `def-weierstrass-polynomial`, `thm-holomorphic-germ-ring-is-noetherian`, `thm-weierstrass-preparation-theorem`, `thm-weierstrass-division-theorem`, `lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular`, `thm-finite-generation-and-finite-presentation-over-a-noetherian-ring`, `thm-exactness-of-sheaves-stalkwise`, `thm-power-series-expansion-in-several-complex-variables`, and `cor-uniqueness-of-multivariable-power-series-coefficients`. Item level **2** follows from the three in-run level-1 helper lemmas.
- Proof decisions: zero entries are removed by a direct-sum relation decomposition; a unit entry gives elementary generators; simultaneous regular coordinates are obtained by applying the published single-germ coordinate lemma to the nonzero product; finite generators over one common neighborhood are obtained by the bounded-degree lemma and the finite-matrix kernel lemma. AC remains the planned ambient premise, while only finite local selections are used.
- Sources: Demailly, Ch. II §3.3 Theorem 3.19/Lemma 3.20 (pp. 89–90), and Wehler, §4.2 Theorem 4.28 with complete proof (printed pp. 138–145/PDF pp. 142–149). These sources establish Oka coherence; the module closure and arbitrary finite partial resolutions are proved locally using the authored module-calculus lemma.
- Decision: the proof includes the local uniformity step and the exact Noetherian finite-matrix use; it does not infer neighborhood coherence from stalk Noetherianity.
- Validation: the strict proof contract, proof layout, focused dependency closure, content policy, rendering, source coverage, and local dependency-level checks pass.
- Readiness: Step 1 record is ready after complete prerequisites, page placement, proof contract, and scoped checks; independent review remains a later gate.

### `ex-qftx-gaga-analytic-relation-kernel`

- Claim/conventions: on a centered bidisc, the relation sheaf of the row `(z_1,z_2)` has the single generator `(-z_2,z_1)`, including at the origin; the item also verifies its coherent-module status through the A-page theorem and module-calculus supplier.
- Dependencies (all `mathematical-premise`): `def-axiom-of-choice`, `def-qftx-analytic-coherent-module`, `def-stalk-of-presheaf`, `thm-qftx-gaga-analytic-oka-coherence`, `lem-qftx-coherent-analytic-module-calculus`, `thm-exactness-of-sheaves-stalkwise`, `thm-power-series-expansion-in-several-complex-variables`, and `cor-uniqueness-of-multivariable-power-series-coefficients`; item level **3**.
- Sources: Demailly II §3.3 Theorem 3.19/Lemma 3.20, pp. 89–90; Wehler §4.2 Theorem 4.28, printed pp. 138–145/PDF pp. 142–149. Their scope is general coherence; the explicit bidisc generator and origin divisibility are proved locally.
- Decision: away from the origin a coordinate is a unit; at the origin the convergent series factorization proves divisibility by `z_1` and the relation follows from the local germ-domain property.
- Validation: the strict proof contract, proof layout, focused dependency closure, content policy, rendering, source coverage, and local dependency-level checks pass.
- Readiness: Step 1 record is ready after complete prerequisites, page placement, proof contract, and scoped checks; independent review remains a later gate.

### `ex-qftx-gaga-analytic-skyscraper-presentation`

- Claim/conventions: for the coordinate quotient `O_D/(z_1,...,z_N)`, the stalk is `C` at the origin and zero elsewhere; its first relation module is generated by the pairwise coordinate Koszul sections, including the `N=1` empty-kernel case. Coherence follows from the current Oka theorem and the proved module-calculus lemma.
- Dependencies (all `mathematical-premise`): `def-axiom-of-choice`, `def-complex-manifolds-and-holomorphic-vector-bundles`, `def-qftx-analytic-coherent-module`, `thm-qftx-gaga-analytic-oka-coherence`, `lem-qftx-coherent-analytic-module-calculus`, `def-kernel-cokernel-image-sheaves`, `def-stalk-of-presheaf`, `thm-exactness-of-sheaves-stalkwise`, `thm-power-series-expansion-in-several-complex-variables`, and `cor-uniqueness-of-multivariable-power-series-coefficients`; item level **3**.
- Sources: Demailly II §3.3 Theorem 3.19/Lemma 3.20, pp. 89–90; Wehler §4.2 Theorem 4.28, printed pp. 138–145/PDF pp. 142–149. The finite point quotient and coordinate syzygy calculation are proved directly here.
- Decision: the stalk quotient is computed by evaluation; syzygies are proved by induction on `N`, with divisibility by the last coordinate derived from the convergent series.
- Validation: the strict proof contract, proof layout, focused dependency closure, content policy, rendering, source coverage, and local dependency-level checks pass.
- Readiness: Step 1 record is ready after complete prerequisites, page placement, proof contract, and scoped checks; independent review remains a later gate.

## Final validation and readiness

- All seven items have current Step 1 `ready` records (`owner: false`); each record was rechecked with `loadStep1Record` and `step1Decision`. No item readiness record substitutes for independent review.
- Current in-pair dependency levels are: definition 0; three A-page helper lemmas 1; Oka theorem 2; both B-page examples 3. The local seven-item graph has no cycle. The two A/B page files have empty bodies, and every assigned claim section has no embedded hyperlinks.
- `proof-contract.mjs --strict`: 7/7 items, zero errors or warnings. `proof-layout.mjs`: 9 files, 36 proof steps, zero defects. `rendercheck.mjs`: all 9 item/page files pass. `content-policy.mjs`: both normal and manifest-authored checks pass for all 7 items with zero errors or warnings.
- Focused `depcheck.mjs`: zero errors or warnings across 1,341 dependency-closure items and 367 pages. The assigned-page manifest matches all item claims, domains, libraries, direct dependencies, dependency roles, and levels.
- `coverage-checklist.mjs`: 2 pages, 29 harvested results, zero errors or warnings. `source-fetch-check.mjs --stamp`: all 4/4 source rows remain fetch-verified; no new retrieval attempts were needed. No source is dropped or unresolved.
- The batch-63 cross-batch dependency file is the required JSON array `[]`. A scan of the current run manifests found no item or page edge from this batch to another batch.
- The full-run `item-dependency-levels.mjs check` cannot pass while five other, unassigned pairs have empty scaffold inventories: `qftx-gaga-local-coherent-acyclicity`, `qftx-gaga-compact-coherent-finiteness`, `qftx-gaga-projective-scalar-dolbeault`, `qftx-coupled-penrose-vanishing-on-the-round-four-sphere`, and `qftx-positive-real-linear-monad-normal-forms`, each with its `-examples` page. No out-of-scope inventory was edited.
- The shared `batch-dependency-levels.json` check reports stale input after the assigned manifest was completed. A read-only recomputation from current manifests gives batch 63 level 0 with `requires: []` (current full run: 69 batches, maximum level 9). The shared index was left unchanged as owner-controlled plan state; owner should refresh it against the current manifests.

The only remaining owner action is refreshing the run-wide batch-level index and completing the five unassigned pair inventories before the global dependency-level gate can pass. Batch 63’s authored prerequisites and local checks are complete.
