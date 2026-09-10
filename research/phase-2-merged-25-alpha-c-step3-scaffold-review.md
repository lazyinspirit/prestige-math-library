# Phase 2 catch-up 24 — Alpha group c Step-3 scaffold review

Run: `phase-2-catchup-24`  
Group: `c`  
Batches reviewed: `5`, `6`, `7`

| Batch | A page | B page | Verdict |
|---|---|---|---|
| 5 | `tor-flatness-and-global-dimension` | `tor-flatness-and-global-dimension-examples` | **insufficient** |
| 5 | `kunneth-exactness-and-splittings-over-principal-ideal-domains` | `kunneth-exactness-and-splittings-over-principal-ideal-domains-examples` | **insufficient** |
| 6 | `spectral-sequences` | `spectral-sequences-examples` | **insufficient** |
| 7 | `koszul-euler-characteristics-and-hilbert-samuel-multiplicity` | `koszul-euler-characteristics-and-hilbert-samuel-multiplicity-examples` | **insufficient** |

I independently audited the current manifests, coverage, notes, assigned HA-10/HA-11a/HA-15 and CA-16M designs, current plan, both pages in every pair, actual load-bearing published prerequisites, and complete relevant source text. The proposed item graphs resolve and are locally ordered, and the mathematical cores of the new Kunneth, spectral-sequence, and Koszul constructions are sound. They nevertheless fail mandatory scaffold gates: batch 5's released Tor pair has unresolved axiom/dependency defects; its new Kunneth pair uses an axiom-incomplete published supplier; batch 6's binding prose/plan omits two necessary items; and batch 7 has both illegal B-page prerequisites and an omitted necessary local lemma. No new A/B pair is required for these repairs.

## Batch 5 — Tor flatness and global dimension

This page is a page-release-only resubmission of 41 A items and eight B items. The tensor-total, two resolution-defined Tor constructions, double-complex balance route, Tor long exact sequences, flatness criteria, cyclic calculations, dimension definitions, and handedness counterexample are mathematically coherent at their stated level. In particular, the recent direct proofs of degree-zero Tor and projective-implies-flat correctly avoid an unnecessary commutativity assumption. The release manifest has not been synchronized with those proofs:

- `prop-tor-zero-is-the-tensor-product-in-either-construction` still declares `thm-right-exactness-of-tensor-products`; its current proof uses the tensor universal property.
- `lem-projective-modules-are-flat-over-an-arbitrary-ring` still declares commutative direct-sum suppliers; its current proof uses the arbitrary-ring projective characterization and tensor universal property.
- `prop-torsion-free-abelian-groups-are-flat` still declares its superseded Tor-criterion/cyclic-Tor route; its current proof uses finite witnesses, a finite free subgroup, a finite presentation, and right exactness.

Those are exact manifest/body mismatches, not harmless extra context. The owning Beta must replace the three dependency arrays and strategies with the actual current suppliers before release.

The deeper blockers are choice-strength failures on actual proof paths:

1. `prop-each-tor-construction-is-covariant-in-both-variables` uses `thm-projective-comparison-map-exists` and uniqueness up to homotopy; both are supplied under `def-dependent-choice`. `prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions` uses the same comparison machinery. Neither owned statement names DC. `def-balanced-tor-bifunctor` then packages the conditional balance construction as unconditional, and the right-variable LES, `prop-tor-dimension-shifting`, the short-exact obstruction result, and Tor symmetry consume it without DC or explicitly supplied coherent comparison data. The repair is to propagate `def-dependent-choice` precisely through consumers that use those constructions, or to replace each comparison step with a complete canonical/choice-free local construction.
2. `thm-higher-tor-over-the-integers-vanishes` and `prop-the-integers-have-weak-and-global-dimension-one` use `thm-the-integers-have-global-dimension-one`, whose statement assumes AC, but do not propagate AC. `prop-semisimple-rings-have-vanishing-positive-tor-and-ext` likewise uses the AC-bearing `thm-equivalent-characterizations-of-semisimple-rings`; moreover, the latter is a left-module characterization, while the owned proof asserts all left and right modules are projective and injective. It needs `def-axiom-of-choice` plus adequate opposite-ring/right-module and injectivity interfaces, or a complete local replacement.
3. The repaired proof of `prop-torsion-free-abelian-groups-are-flat` is labelled choice-free, but its actual finite-free supplier reaches AC through `cor-finitely-generated-torsion-free-modules-over-a-pid-are-free` → invariant factors → simultaneous basis → maximal-divisor pivot → `thm-principal-ideal-domains-are-unique-factorisation-domains` → `def-axiom-of-choice`. Since the intervening statements do not carry AC, this is not legal hypothesis propagation. Preserve the intended choice-free result by inserting an elementary finite-rank subgroup proof over the integers, or state and propagate AC consistently.

The B/false-statement layer has additional exact missing premises. `fs-flat-modules-have-projective-dimension-zero` and `ex-a-flat-nonprojective-module` need a declared proof that Q is flat and nonprojective (for example: the repaired PID flat criterion plus the canonical free cover and the fact that every map Q → Z, hence Q → a direct sum of copies of Z, is zero). `fs-tor-one-vanishes-only-when-one-module-is-projective` also needs a proof that Z/2 is nonprojective. `fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m` invokes the right-variable Tor LES but omits it and its DC strength. `ex-localization-is-flat-and-has-vanishing-positive-tor` infers all positive vanishing from a Tor-one criterion without an all-degree resolution/dimension argument. `ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers` invokes vector-space freeness and integer global dimension without AC. These conclusions must retain their mathematics and gain the precise suppliers/hypotheses or explicit local calculations.

This is an item-specific audit. For example, the direct clause of `thm-projective-module-characterizations` used in projective-implies-flat is choice-free, so its unrelated AC-bearing clauses are not treated as blockers. Conversely, the comparison maps and integer-global-dimension clauses above are actually used and therefore cannot be waived.

## Batch 5 — Kunneth exactness and splittings over PIDs

The four-item A route and two examples give a sound independent replacement for the defective older general Kunneth proof. A free PID complex decomposes degreewise as cycles plus the preceding boundaries; tensoring the two-term pieces gives the tensor and Tor kernel/cokernel terms; recombination yields the natural short exact sequence; chosen cycle/boundary splittings produce the asserted noncanonical splitting. The `k[t]` and field examples have the correct Tor correction and zero-Tor specialization.

The new route does **not** use the published general Kunneth theorem or its published splitting argument. Their defects remain Phase-3 consumer debt and do not block this supplier. One prerequisite it does use is inadequate, however:

`lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces`
→ `lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free`
→ `thm-submodules-of-free-modules-over-a-pid-are-free`.

The last published proof explicitly well-orders a basis, performs transfinite induction, and makes simultaneous successor choices. Its deps omit `def-axiom-of-choice`, `thm-well-ordering-theorem`, and `thm-transfinite-induction`. Add exactly those interfaces and state the AC hypothesis, or replace the supplier with a complete adequate local PID-submodule proof. The owned Kunneth statements already expose AC, so the route becomes legal once this supplier is repaired and closure is rechecked.

## Batch 6 — spectral sequences

The 44-item A page and seven-item B page form a coherent finite-filtration development. The local subquotient calculus supplies the quotient, modularity, and lifting facts used in the `Z_r/B_r` construction; the induced differential has the stated bidegree and squares to zero; the local lifting calculation establishes `E_{r+1} ≅ H(E_r)` without literal equality; finite filtration gives stabilization and the associated graded of filtered homology; and the edge-map, extension-problem, cohomological-reindexing, and false-statement material all respect the chosen indexing conventions. The finite abelian-group model adequately supports the nonsplit-extension and same-associated-graded counterexamples. No infinite convergence, exact-couple, multiplicative, or completion theorem is imported.

The binding HA-15 design is nevertheless incomplete. Its inventory omits both:

- `lem-spectral-sequence-subquotient-and-local-lifting-calculus`, which must be first because the quotient/modularity/lifting steps depend on it; and
- `lem-abelian-group-model-for-spectral-sequence-computations`, which must precede the explicit filtered-group counterexamples and examples.

Neither ID appears in `research/plan-homological-algebra-track.md`; the current plan entry is still page-only. The authorized prose/plan writer must add the two items in those positions and synchronize the full 44-A/7-B inventory, deps, and strategies. The mathematical additions are already present in the owned manifest, so no new prerequisite pair is needed, but the pair remains insufficient until the binding scaffold and plan contain them.

## Batch 7 — Koszul Euler characteristics and Hilbert–Samuel multiplicity

The seven A items and three B items give a mathematically adequate local route: the new module-relative Hilbert–Samuel polynomial lemma supplies eventual polynomiality for the Koszul comparison; finite-length Koszul homology and bounded-complex Euler identities justify the alternating length; the shifted adic filtration produces the finite-difference comparison; and the first-element reduction has the correct annihilator correction. The empty sequence, redundant zero generator, and annihilator examples respect the sign and degree conventions. The route does not need the published parameter-reduction consumer.

Two scaffold gates fail.

First, the A-page `requires` closure crosses three B pages:

1. `koszul-euler-characteristics-and-hilbert-samuel-multiplicity` → `koszul-complexes-and-regular-sequences` → `zariski-topology-on-prime-spectra-examples`;
2. that path extends through `zariski-topology-on-prime-spectra` → `henselian-rings-and-equicharacteristic-cohen-structure-examples`;
3. it extends again through `henselian-rings-and-equicharacteristic-cohen-structure` → `inverse-limits-and-noetherian-completion-examples`.

The CA design already authorizes the exact repairs: replace each B dependency by its A companion (`zariski-topology-on-prime-spectra`, `henselian-rings-and-equicharacteristic-cohen-structure`, and `inverse-limits-and-noetherian-completion`, respectively). Those shared plan edits must be made by the single authorized writer. Structural closure is mandatory even though no example-page item is load-bearing in the owned proof.

Second, the manifest's necessary first item `lem-module-relative-hilbert-samuel-polynomial-for-koszul-comparison` is absent from both the binding CA-16M prose inventory and current plan; they retain the old six-item A inventory. Add the lemma immediately before `def-koszul-euler-characteristic-and-degree-indexed-multiplicity`, synchronize the complete 7-A/3-B inventory/deps/strategies, and align CA-16M's opening requires list with the manifest's `prime-spectra-and-radicals` edge. No new pair is required.

## Source adjudication

All 14 active records serve complete relevant text and carry current fetch stamps; there are no `source_resolution` drops or owner escalations in these batches. I checked the harvested claims against the named complete ranges:

- Tor: Weibel, *An Introduction to Homological Algebra*, Chapter 2 §2.7, printed pp. 58–61; Chapter 3 §§3.1–3.2, pp. 66–69; Chapter 4 §4.1, pp. 91–95; and Sharifi, *Homological Algebra*, §3.5, pp. 73–77. These support tensor totalization, balance/derived Tor, flatness, and homological-dimension conventions.
- PID Kunneth: tom Dieck, *Algebraic Topology*, Theorem 11.10.1 and full proof, printed pp. 298–299; Friedman, *Singular Intersection Homology*, §6.4.5, printed pp. 314–320, especially (6.11)–(6.13), “Splitting,” Remark 6.4.18, and Lemma 6.4.19. These independently support the exact sequence and splitting route.
- Spectral sequences: Weibel Chapter 5 §§5.1, 5.2, 5.4, and bounded case of 5.5.1, printed pp. 120–136; Sharifi §§4.1–4.2, pp. 87–92; Stacks Project Tags [012K](https://stacks.math.columbia.edu/tag/012K), Definitions/Lemmas 12.24.1–12.24.11, and [00ZX](https://stacks.math.columbia.edu/tag/00ZX), the cited abelian-category lemmas. These support the filtered-complex construction, finite convergence, and local abelian-category calculus.
- Koszul/multiplicity: Stacks Project Tag [0AZU](https://stacks.math.columbia.edu/tag/0AZU), Definition 43.15.1 through Theorem 43.15.5 and Remark 43.15.6; Hochster, *Math 615 Lecture Notes*, pp. 104–108 and 165 (with pp. 163–164 read as context); Stacks Tags [00JV](https://stacks.math.columbia.edu/tag/00JV), Lemmas 10.58.5–10.58.6 and Proposition 10.58.7, and [00K4](https://stacks.math.columbia.edu/tag/00K4), Proposition 10.59.5. These support the Euler-characteristic bridge and the local polynomiality replacement.

Every harvested result has a disposition. The 27 `stands` decisions are either unused out-of-scope enrichments or genuine later-page deferrals (notably general convergence to `double-complexes-exact-couples-and-convergence`, broad Hilbert–Samuel additivity to `rees-modules-artin-rees-and-hilbert-samuel-theory`, and projective/global-dimension enrichments to their designated later pages). Six batch-5 rows remain `owner-decision` because their coverage destinations are placeholders rather than stable mathematical pages: Weibel 3.1.6/3.1.7 and exercises; Weibel 4.1.5 and exercises; Sharifi's nonflat torsion-free ideal, ideal tests, fraction-quotient torsion, and flat resolutions. None is used by an owned proof, but the owner must choose legal destinations that preserve those results.

## Dependency closure, Foundations boundary, and frontier ledger

Whole-run manifest validation resolves all owned IDs and finds no item cycle or forward item edge. Independent transitive graph traversal of the reviewed page roots found no missing ID and no path to `deferred-set-theory-beyond-choice`: Tor reached 612 published/local items, Kunneth 419, spectral sequences 204, and Koszul 534. I separately classified load-bearing body references rather than treating every co-resident or declared edge as a proof premise. None of the reviewed actual paths uses the deferred catalogue. The choice/DC failures listed above are local hypothesis-propagation defects and must be repaired from earlier local machinery.

There is no same-frontier cross-batch dependency among batches 5, 6, and 7, declared or implicit. Each reviewed pair depends only on earlier published pages/items. The existing per-batch frontier input files are therefore correctly `[]`; no read-only reviewer edit was required. The illegal Koszul edges are earlier B-page structural edges, not same-frontier edges.

Published downstream defects remain Phase-3 debt unless actually used. In particular, the new PID Kunneth pair does not consume the defective published general Kunneth proof; later topological Kunneth consumers should be repaired to use the planned PID suppliers where their hypotheses match. The later published parameter-reduction theorem is not a premise of the Koszul page. Conversely, `thm-submodules-of-free-modules-over-a-pid-are-free`, comparison maps, and integer/global-dimension results are actual premises of owned proofs, so their exact defects do affect these verdicts.

## Checks run

- `node tools/scope-decisions.mjs refresh --run phase-2-catchup-24 --group c` — 33 current declines, initially 33 pending.
- `node tools/scope-decisions.mjs check --run phase-2-catchup-24 --group c` — 33 current declines, 0 errors; 27 `stands`, six `owner-decision`.
- `node tools/coverage-checklist.mjs research/phase-2-catchup-24-batch-5.coverage.json` — two A pages, 98 harvested results, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/phase-2-catchup-24-batch-6.coverage.json` — one A page, 119 harvested results, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/phase-2-catchup-24-batch-7.coverage.json` — one A page, 24 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-catchup-24-batch-5.coverage.json,research/phase-2-catchup-24-batch-6.coverage.json,research/phase-2-catchup-24-batch-7.coverage.json --stamp` — 14/14 fetch-verified, 14/14 resolved, 0 newly stamped, 0 documented drops.
- `node tools/content-policy.mjs --manifest-only research/phase-2-catchup-24-batch-5.pages.json research/phase-2-catchup-24-batch-6.pages.json research/phase-2-catchup-24-batch-7.pages.json` — 116 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-*.pages.json` — 691 items, 0 normalized, 0 errors.
- `node tools/validate-plan.mjs research/plan-spec.json` — pass; 1,624 pages, no item cycle, missing item ID, forward item dependency, B-page item dependency, or unresolved item dependency among itemized pages.
- `node tools/extcheck.mjs` — pass at the audited concurrent snapshot; 57 pre-existing resting/unproved warnings, none an actual premise of the reviewed proof routes. The concrete published dependency defects named above are separate semantic/hypothesis failures not reported by this structural check.

## Handoff

The batch-5 Beta should synchronize the released Tor manifest and repair or reroute every exact choice/dependency path above; it should also route the Kunneth prerequisite repair to the owner of `thm-submodules-of-free-modules-over-a-pid-are-free`. The batch-6 Beta should send the two HA-15 inventory additions to the single authorized homological-algebra prose/plan writer. The batch-7 Beta should send both the three already-authorized B-to-A cutovers and the CA-16M inventory/requires synchronization to the single authorized commutative-algebra prose/plan writer. None of these structural or shared-scaffold repairs can be waived, and all four pairs remain blocked until the relevant changes exist and closure is rerun.
