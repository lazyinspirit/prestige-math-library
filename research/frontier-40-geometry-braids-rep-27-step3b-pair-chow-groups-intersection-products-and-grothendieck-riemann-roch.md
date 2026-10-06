# Step 3b report — chow-groups-intersection-products-and-grothendieck-riemann-roch

- Run `frontier-40-geometry-braids-rep-27`, batch 22, role `alpha-high`, label
  `step3b-pair-chow-groups-intersection-products-and-grothendieck-riemann-roch-4aaa487d4eb13cfd`.
- A page `chow-groups-intersection-products-and-grothendieck-riemann-roch`
  (order 899, 38 items), B page `...-examples` (order 900, 2 items).
- Inputs read at entry: `CLAUDE.md`, `SCHEMA.md`, the dispatch task, the Step 3a
  scope review (`...-step3a-pair-...md`, decision `sufficient`), the batch-22
  manifest (`...-batch-22.pages.json`), its coverage and notes, the
  cross-batch dependency row, the owner repair packet
  `research/frontier-40-geometry-braids-rep-27-owner-chow-grr/`
  (`source-proof-map.json`, `repair-checks.json`, `dependency-levels.txt`,
  `stacks-chow.txt`, `borel-serre.txt`, `vakil1x.txt`), the owner authoring
  direction, and the plan contract (`research/plan-algebraic-geometry-expansion-track.md`,
  `research/plan-spec.json` rows 899/900).

## Owned IDs (40; author in dependency level order, ties by page/ID)

Level 0: `def-algebraic-cycle-and-cycle-group`,
`def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme`,
`lem-order-function-one-dimensional-local-domain`,
`lem-smooth-immersion-normal-sequence-and-deformation-charts`.
Level 1: `def-chow-group-of-cycles-mod-rational-equivalence`,
`def-pushforward-in-algebraic-k-theory`, `lem-cycle-of-a-closed-subscheme`,
`lem-k-zero-vector-bundles-versus-coherent-sheaves`.
Level 2: `lem-k-theory-of-projective-space-and-projections`,
`lem-projection-formula-in-algebraic-k-theory`,
`lem-proper-pushforward-of-cycles-well-defined`.
Level 3: `lem-flat-pullback-chow-groups`, `lem-two-dimensional-tame-symbol-reciprocity`.
Level 4: `def-intersection-with-a-cartier-divisor-and-first-chern-class`,
`lem-chow-localization-and-vector-bundle-homotopy`,
`lem-pushforward-pullback-compatibility-chow`.
Level 5: `def-bivariant-chow-operations`,
`def-deformation-to-the-normal-cone-and-specialization`,
`lem-chow-groups-of-projective-space`, `thm-projective-bundle-formula-for-chow-groups`.
Level 6: `lem-koszul-resolution-and-flat-fibre-restriction`,
`lem-operational-chern-classes-and-whitney-formula`,
`lem-vector-bundle-chow-homotopy-invariance`.
Level 7: `lem-relative-projective-bundle-k-theory-generators`,
`lem-zero-section-gysin-and-excess-vector-subbundle`.
Level 8: `lem-gysin-specialization-bivariant-and-base-change`.
Level 9: `lem-refined-gysin-commutation-and-composition`.
Level 10: `def-refined-gysin-pullback-for-regular-embeddings`.
Level 11: `thm-intersection-product-and-chow-ring-of-a-smooth-scheme`,
`cex-arbitrary-pullback-does-not-define-a-chow-operation` (B).
Level 12: `lem-chow-ring-naturality-and-projection-formula`.
Level 13: `def-chern-classes-of-a-vector-bundle`.
Level 14: `lem-chern-class-naturality-additivity-and-splitting`.
Level 15: `def-chern-character-and-todd-class`,
`ex-chow-ring-of-projective-space` (B).
Level 16: `lem-chern-character-and-todd-class-multiplicativity`.
Level 17: `thm-rr-for-projective-space-projections`, `thm-rr-for-regular-embeddings`.
Level 18: `thm-grothendieck-riemann-roch-for-projective-morphisms`.
Level 19: `rem-chow-ring-and-grr-conventions`.

## Open obligations at entry

1. All 40 item Markdown files are absent from `items/`; every one must be
   authored, registered on the two new pages, and given a current Step-3 item
   decision. All 40 are original scaffold IDs (present in the immutable
   Step-3 auditor baseline), so the auditor-authored bypass does not apply.
2. `research/frontier-40-geometry-braids-rep-27-batch-22.proof-contracts.json`
   does not exist; a strict-clean per-batch contract must be authored.
3. In-run reading prerequisite `plane-curves-local-intersection-multiplicity-and-bezout`
   (batch 1) is page-level only and `open` in the cross-batch row; no pair item
   consumes a batch-1 item, so authoring may proceed and the row stays `open`
   for Step 4 unless the batch-1 pair lands.
4. Step 3a referrals to apply while authoring: (a) `def-bivariant-chow-operations`
   must be authored with `kind: definition` (manifest kind says `lemma`, ID has a
   `def-` prefix); (b) `lem-flat-pullback-chow-groups` statement contains an
   unmatched `$` in item 2 to repair; (c) `rem-chow-ring-and-grr-conventions`
   must record the accepted Fulton drop rather than "root-owner-held".
5. Dependency levels must be recomputed after any dependency change and checked
   with `tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`.

## Checkpoint log

| # | item | lvl | status | notes |
|---|---|---|---|---|
| 1 | `def-algebraic-cycle-and-cycle-group` | 0 | complete | definition; finite and locally finite cycle groups |
| 2 | `lem-order-function-one-dimensional-local-domain` | 0 | complete | 5 steps; **statement repaired**: AC declared, used only for finite length via Artinian characterisation; added suppliers `thm-artinian-ring-characterisation-by-primes`, `thm-artinian-ring-has-finite-length`, `thm-noetherian-ring-quotients-and-localisations`, `thm-prime-spectrum-of-a-quotient-bijection`, `thm-one-dimensional-regular-local-rings-are-dvrs`, `def-zero-divisor-and-integral-domain` |
| 3 | `def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme` | 0 | complete | definition; K_0, K^0, pullback, pushforward reference |
| 4 | `lem-smooth-immersion-normal-sequence-and-deformation-charts` | 0 | complete | 8 steps; regular sequence, conormal/tangent sequences, étale-local model, deformation blowup smooth and quasi-projective, smooth sections over singular bases; added suppliers `thm-ag-standard-smooth-geometric-regularity`, `def-ag-standard-smooth-algebra`, `def-ag-geometrically-regular-algebra-and-fibre`, `lem-ag-standard-smooth-regular-geometric-fibres`, `thm-smooth-morphisms-stable-base-change-composition`, `lem-etale-stable-base-change-composition`, `def-etale-morphism-schemes`, `def-relative-dimension-smooth-morphism`, `thm-formally-unramified-differentials-zero`, `thm-etale-equivalent-flat-unramified-fp`, `cor-segre-veronese-embedding`, `def-quasi-projective-morphism` |
| 5 | `def-chow-group-of-cycles-mod-rational-equivalence` | 1 | complete | definition; **statement repaired**: AC declared (inherited from the order function); well-definedness paragraph; added `cor-minimal-prime-over-a-nonzerodivisor-has-height-one`, `cor-radical-ideal-has-finitely-many-minimal-primes-noetherian` |
| 6 | `lem-cycle-of-a-closed-subscheme` | 1 | complete | 5 steps; generic-length coefficients, additivity, fundamental cycles, flat pullback, divisor restriction + witness |
| 7 | `def-pushforward-in-algebraic-k-theory` | 1 | complete | definition; well-definedness/functoriality paragraph (Leray page-invariance, no degeneration) |
| 8 | `lem-k-zero-vector-bundles-versus-coherent-sheaves` | 1 | complete | 5 steps; bounded resolutions, common refinement, additivity, comparison isomorphism |
| 9 | `lem-k-theory-of-projective-space-and-projections` | 2 | complete | 5 steps; diagonal Koszul resolution, generation by twists, basis by Euler pairing; added `thm-cohomology-projective-space-twisting-sheaves`, `def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles`, `lem-projection-formula-invertible-twist` |
| 10 | `lem-projection-formula-in-algebraic-k-theory` | 2 | complete | 3 steps; local trivialization, projection formula in K_0 |
| 11 | `lem-proper-pushforward-of-cycles-well-defined` | 2 | complete | 6 steps; norm formula via lattice indices, dimension-drop cases via proper curves; assertion 3 points to `lem-pushforward-pullback-compatibility-chow` (statement-level forward pointer, unchanged) |
| 12 | `lem-flat-pullback-chow-groups` | 3 | complete | 5 steps; pure dimension, generic-length divisor identity, descent, functoriality, localization; statement typo `$X$$` repaired to `$X$` |
| 13 | `lem-two-dimensional-tame-symbol-reciprocity` | 3 | complete | 6 steps; two-periodic invariant e(M,a,b), nilpotent and multiplier identities, normal and non-normal cases, Cartier consequences; step 5.1 wording repaired at handoff re-verification (see below) |
| 14 | `lem-chow-localization-and-vector-bundle-homotopy` | 4 | complete | 3 steps; localization, surjectivity and injectivity for affine bundles |
| 15 | `def-intersection-with-a-cartier-divisor-and-first-chern-class` | 4 | complete | definition; well-definedness and Cartier Gysin |
| 16 | `lem-pushforward-pullback-compatibility-chow` | 4 | complete | 4 steps; cycle-of-sheaf identities and flat base change |
| 17 | `def-bivariant-chow-operations` | 5 | complete | definition with `kind: definition` per Step 3a referral; well-definedness paragraph |
| 18 | `def-deformation-to-the-normal-cone-and-specialization` | 5 | complete | definition; chart computation, flatness, specialization well-definedness |
| 19 | `lem-chow-groups-of-projective-space` | 5 | complete | 4 steps; **statement repaired**: the false/unclear affine clause `A_0(A^n)=0 and A_d(A^n)=0 for d>0` replaced by the correct homotopy-invariance statement `A_d(A^n)=Z for d=n and 0 otherwise` (the packet's own local argument already stated the correct form) |
| 20 | `thm-projective-bundle-formula-for-chow-groups` | 5 | complete | 5 steps; pushforward identities, injectivity, surjectivity by trivializing open + Noetherian induction |
| 21 | `lem-operational-chern-classes-and-whitney-formula` | 6 | complete | 4 steps; projective-bundle relation, bivariant compatibility, Whitney binomial computation, section formula |
| 22 | `lem-koszul-resolution-and-flat-fibre-restriction` | 6 | complete | 3 steps; Koszul mapping-cone induction, Tor fibre restriction, deformation application |
| 23 | `lem-vector-bundle-chow-homotopy-invariance` | 6 | complete | 3 steps; projective completion, image of the infinity pushforward, graded isomorphism |
| 24 | `lem-relative-projective-bundle-k-theory-generators` | 7 | complete | 3 steps; diagonal identity, generation by twists, `q_!O(a)=Sym^a(E^∨)` |
| 25 | `lem-zero-section-gysin-and-excess-vector-subbundle` | 7 | complete | 3 steps; excess and zero-section Gysin identities |
| 26 | `lem-gysin-specialization-bivariant-and-base-change` | 8 | complete | 4 steps; cone embedding, bivariant axioms, base change via blowup comparison, excess factor (fixed a typo'd dep id at authoring time) |
| 27 | `lem-refined-gysin-commutation-and-composition` | 9 | complete | 4 steps; commutation via Cartier reduction, composition with the saturated-chart cone identity, sections of smooth morphisms, graph composition |
| 28 | `def-refined-gysin-pullback-for-regular-embeddings` | 10 | complete | definition; construction, excess form, Cartier agreement, operational projection formula |
| 29 | `thm-intersection-product-and-chow-ring-of-a-smooth-scheme` | 11 | complete | 5 steps; exterior product, diagonal product, ring pullback, projection formula, operational Chern identification |
| 30 | `cex-arbitrary-pullback-does-not-define-a-chow-operation` | 11 | complete | counterexample; blowup of P² at a point, degree contradiction via `π_*` |
| 31 | `lem-chow-ring-naturality-and-projection-formula` | 12 | complete | 3 steps; ring naturality, flat agreement, proper projection formula |
| 32 | `def-chern-classes-of-a-vector-bundle` | 13 | complete | definition; projective bundle relation and basic properties |
| 33 | `lem-chern-class-naturality-additivity-and-splitting` | 14 | complete | 4 steps; Whitney, naturality, splitting principle, duality/consequences |
| 34 | `def-chern-character-and-todd-class` | 15 | complete | definition; Chern roots, character, Todd class, line-bundle specializations |
| 35 | `ex-chow-ring-of-projective-space` | 15 | complete | example; `Z[h]/(h^{n+1})`, linear classes, Bezout degrees, explicit scope disclaimer |
| 36 | `lem-chern-character-and-todd-class-multiplicativity` | 16 | complete | 5 steps; additivity, Todd multiplicativity, tensor/duality, naturality, coherent transport |
| 37 | `thm-rr-for-projective-space-projections` | 17 | complete | 3 steps; generators, fibre residue computation, projective-bundle extension |
| 38 | `thm-rr-for-regular-embeddings` | 17 | complete | 3 steps; model case by Koszul/regular-section, deformation reduction, conclusion |
| 39 | `thm-grothendieck-riemann-roch-for-projective-morphisms` | 18 | complete | 3 steps; relative Proj factorization, composition of the two RR squares, HRR specialization |
| 40 | `rem-chow-ring-and-grr-conventions` | 19 | complete | remark; conventions, exact hypotheses, excluded cases, Choice; Fulton wording refreshed per Step 3a referral (c) |

## Checks actually run (current bytes)

- `node tools/tsx-run.mjs tools/precheck.mts <all 40 items>` — `29 checked, 0
  failing` (the 11 definitions/remarks are not-applicable).
- `node tools/rendercheck.mjs <all 40 items>` — 40 files, no wikilink inside
  math, no unbalanced delimiters, all KaTeX and YAML parse.
- `node tools/proof-layout.mjs <all 40 items>` — 40 items, 122 steps, 0 defects.
- `node tools/manifest-deps.mjs research/frontier-40-geometry-braids-rep-27-batch-22.pages.json`
  — 40 items, 0 errors (after syncing manifest statements/deps/kind/levels from
  the authored items).
- `node tools/content-policy.mjs research/frontier-40-geometry-braids-rep-27-batch-22.pages.json`
  — 40 scoped items, 0 errors, 0 warnings.
- `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`
  — 894 items/54 pages clean; every authored item's manifest `dependency_level`
  matches its computed level.
- `node tools/proof-contract.mjs research/frontier-40-geometry-braids-rep-27-batch-22.proof-contracts.json --strict`
  — `0 error(s), 0 warning(s), 40/40 item(s) checked` (citations and derivations
  regenerated from the final item text).
- `node tools/coverage-checklist.mjs research/frontier-40-geometry-braids-rep-27-batch-22.coverage.json --require-destination`
  — 2 pages, 118 harvested rows, 0 errors, 0 warnings (unchanged; no new sources
  were needed).
- `node tools/validate-plan.mjs research/plan-spec.json` — acyclic and
  consistent; no item-level cycles, forward references, B-page dependencies or
  unresolved ids across 1420 pages with item lists.
- `node tools/depcheck.mjs` — no error or warning mentions any of the 40 pair
  items or either new page (the library-wide error count is pre-existing
  other-work/unfinished sibling pairs).

## Scope and item decisions

- Step 3a scope decision refreshed (non-owner, `sufficient`) at the current pair
  scope hash `7e934419ca565cd53bda5ad016c4db5aed74e3163e11d3c91b83d93811fe8a53`,
  with the statement repairs listed above as the reason. The prior Step 3a
  receipt (decision `sufficient`, sha256
  `c26589630e4f791b476b393d462faa4d5943a2c8acda0af8c510e91010f084be`, at
  2026-10-04T13:56:40.224Z) is preserved here and remains the baseline scope
  certification in
  `research/frontier-40-geometry-braids-rep-27-step3-auditor-baseline.json`.
- All 40 items recorded with `tools/step3-decisions.mjs record-item` at
  `decision: accept`, `confidence: 1`, each with its examined dependency list
  (the item's own dependency list, whose transitive closure is the audited
  closure) and the concrete evidence below. `check --phase final` reports 0
  pending items for this pair and no pending scope for either page.

## Step 3a referrals — dispositions

1. `def-bivariant-chow-operations` kind: authored as `kind: definition` and the
   manifest row synced to `definition`; ID unchanged and all consumers intact.
2. `lem-flat-pullback-chow-groups` statement: the unmatched `$` in `$X$$,` was
   repaired to `$X$,`; no claim changed.
3. `rem-chow-ring-and-grr-conventions`: the superseded "design-named Fulton
   source decision remains root-owner-held" sentence was replaced by the
   owner-accepted drop record (owner/certain/dropped, five item-level
   alternatives per page, not retrieved, comparison only).

## Published concerns (for the owner / Step 5, not edited here)

1. `def-intersection-multiplicity-of-closed-subschemes` (published,
   `intersection-products-on-smooth-projective-surfaces`), Remarks [R1]: it
   proves "a zero-dimensional Noetherian local ring has finite length" and
   states "No choice principle beyond the ambient definition is used", but the
   step "Nil(A), which is the intersection of all prime ideals, equals
   $\mathfrak m$" uses the identification of the nilradical with the
   intersection of the primes, whose library supplier
   (`cor-nilradical-as-intersection-of-primes`) declares the Axiom of Choice,
   and [R1] cites only the choice-free
   `thm-nilradical-of-a-noetherian-ring-is-nilpotent`. Confidence: high that the
   *claim* is true and the *choice accounting in the remark* is incomplete; the
   item does not declare AC. Repair strategy: either add the AC declaration
   inherited from `cor-nilradical-as-intersection-of-primes`, or replace the
   identification by a direct nilpotency argument. Not repaired here because it
   is published content outside this pair.
2. `lem-proper-pushforward-of-cycles-well-defined` (this pair, statement 3):
   the statement promises "For a cartesian square with flat $g$ and proper $f$,
   the compatibility of `lem-pushforward-pullback-compatibility-chow` holds",
   i.e. a forward pointer to a later item of the same page. The item's proof
   records this explicitly and does not use it; the later item proves the
   identity. Flagged for Step 4 as a pre-existing statement-level ordering
   quirk, not a mathematical gap. Confidence: high.
3. `lem-zero-section-gysin-and-excess-vector-subbundle` and several later items
   rest on the `s_N^!` inverse of vector-bundle flat pullback and on the
   operational Chern formalism, whose full local arguments are given in the
   named suppliers; no defect found, recorded here only as the load-bearing
   chain for the independent Step 5–8 audits.

## Open obligations at handoff

1. The in-run page-level reading prerequisite
   `plane-curves-local-intersection-multiplicity-and-bezout` (batch 1) is still
   being constructed; `.cross-batch-dependencies.json` remains `open` and
   unchanged. No item of this pair consumes any batch-1 item, so no item
   decision is escalated for it.
2. All manifest/page/contract/coverage artifacts for the pair are
   written; the only remaining work is the engine's own Step 3 dispatch
   certification, Step 4 splicing and the later review steps.
3. Proof correctness beyond the local checks (independent audit) is left to
   Steps 5–8 as designed; the deepest scaffold-local arguments in this pair
   (tame-symbol reciprocity, the diagonal Koszul generation, the deformation
   chart computations and the refined-Gysin composition) are the items to
   audit first.

## Post-report handoff verification (re-run on current bytes)

A final verification pass on the current bytes (after the report was first
written) re-ran the batch and run gates, found no mathematical defect in this
pair, and made three local repairs: a proof-wording repair, a missing
dependency registration, and a dependency-level metadata recomputation.

- **Repair (proof text, no claim change).** In
  `lem-two-dimensional-tame-symbol-reciprocity` step 5.1 the clause "Since both
  sides are bilinear in $f$ and $g$, clearing denominators by an element
  nonexisting at a given set of primes extends the identity..." was replaced by
  the correct bimultiplicativity statement: "$\partial_q$ and
  $\operatorname{ord}_{A/q}$ are bimultiplicative in $f$ and $g$, writing $f$
  and $g$ as quotients of elements of $A$ extends the identity...". The
  Statement section is byte-identical; no hypothesis, dependency or conclusion
  changed. Re-checks on the item: precheck clean, rendercheck OK, proof-layout
  0 defects, regenerated strict contract entry valid.
- **Hash cascade handled.** The engine's item hash includes the transitive
  dependency closure's bytes, so the proof-wording change invalidated the
  Step-3 decisions of the 25 transitive consumers of the repaired item
  (`def-intersection-with-a-cartier-divisor-and-first-chern-class` through
  `rem-chow-ring-and-grr-conventions`; the direct non-consumers
  `lem-pushforward-pullback-compatibility-chow` and
  `lem-chow-localization-and-vector-bundle-homotopy` were untouched). Because
  only the supplier's proof step changed and its Statement is unchanged, each
  consumer was re-recorded with `decision: accept`, `confidence: 1`, its own
  examined dependency list, and a reason recording the supplier repair; the
  consumers' own statements, deps and proofs are unchanged. `check --phase
  final` now reports **0 pending items** and no pending scope for this pair
  again.
- **Run-wide note.** The re-run of `item-dependency-levels.mjs check --run`
  currently reports 8 errors, all in other still-in-flight pairs (Burau/
  Khovanov-Seidel items), none in this pair; this pair's 40 items and 2 pages
  carry no dependency-level, extcheck, fwdcheck, depsource, prosecheck or
  pathcheck finding attributable to them. The run-level `step3-decisions`
  result is `closed: false` only because other pairs of the run are still being
  authored.

- **Dependency registration repair (depcheck).** The final `depcheck.mjs` pass
  flagged `[cited-not-in-deps] items/thm-grothendieck-riemann-roch-for-projective-morphisms.md:
  cites "def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme"
  in Statement/Facts but it is not in deps`. That definition is the carrier of
  $K_0(X)$ in the theorem's statement and was missing from the frontmatter
  `deps`; it was added, the manifest row re-synced, and the item's contract and
  decision refreshed. `depcheck.mjs` still fails run-wide on other in-flight
  pairs, but it now has no item-level finding for this pair (its only lines
  mentioning the pair are the two informational page listings).
- **Dependency levels recomputed from actual dependencies.** With the manifest
  `deps` synced from the final item files, `tools/item-dependency-levels.mjs`
  computes a level one higher than the Step-1 scaffold estimate for a suffix of
  19 items whose final dep lists contain in-run suppliers that the scaffold list
  did not (for example `thm-projective-bundle-formula-for-chow-groups` depends
  on the level-5 `lem-chow-groups-of-projective-space`). The item frontmatter
  `dependency_level` of those 19 items was updated to the recomputed value, so
  item metadata, manifest entry and the repository check agree. The `lvl`
  column of the checkpoint log records the Step-1 scaffold ordering levels; the
  recomputed values below are what item metadata and the manifest now carry.

  | item | scaffold | recomputed |
  |---|---|---|
  | `thm-projective-bundle-formula-for-chow-groups` | 5 | 6 |
  | `lem-operational-chern-classes-and-whitney-formula` | 6 | 7 |
  | `lem-vector-bundle-chow-homotopy-invariance` | 6 | 7 |
  | `lem-zero-section-gysin-and-excess-vector-subbundle` | 7 | 8 |
  | `lem-gysin-specialization-bivariant-and-base-change` | 8 | 9 |
  | `lem-refined-gysin-commutation-and-composition` | 9 | 10 |
  | `def-refined-gysin-pullback-for-regular-embeddings` | 10 | 11 |
  | `thm-intersection-product-and-chow-ring-of-a-smooth-scheme` | 11 | 12 |
  | `cex-arbitrary-pullback-does-not-define-a-chow-operation` | 11 | 12 |
  | `lem-chow-ring-naturality-and-projection-formula` | 12 | 13 |
  | `def-chern-classes-of-a-vector-bundle` | 13 | 14 |
  | `lem-chern-class-naturality-additivity-and-splitting` | 14 | 15 |
  | `def-chern-character-and-todd-class` | 15 | 16 |
  | `ex-chow-ring-of-projective-space` | 15 | 16 |
  | `lem-chern-character-and-todd-class-multiplicativity` | 16 | 17 |
  | `thm-rr-for-projective-space-projections` | 17 | 18 |
  | `thm-rr-for-regular-embeddings` | 17 | 18 |
  | `thm-grothendieck-riemann-roch-for-projective-morphisms` | 18 | 19 |
  | `rem-chow-ring-and-grr-conventions` | 19 | 20 |

  Every recomputed level is computed from the item's actual dep list, so the
  authoring order remains a valid topological order and suppliers still precede
  consumers. Re-recorded decisions cover the union of the 25 transitive
  consumers of the tame-symbol wording repair, the 19 level-metadata updates and
  the GRR dep addition (overlapping sets); all 40 item decisions are current
  (`decision: accept`, `confidence: 1`, own dependency lists).
- **Final re-check after the repairs.** `step3-decisions.mjs check --phase
  final` reports 0 pending items for this pair and `--phase scope` 0 pending
  scope rows; `item-dependency-levels.mjs check --run` reports no line for this
  pair, and an explicit frontmatter-vs-manifest-vs-computed comparison over the
  40 items shows 0 mismatches; `depcheck.mjs` has no item-level finding for the
  pair; `proof-layout.mjs` on all 40 items: 40 items, 122 steps, 0 defects;
  `rendercheck.mjs` OK on 40 items and both pages; `precheck.mts` 29 checked, 0
  failing; `manifest-deps.mjs` 40 items, 0 errors; `content-policy.mjs` 40
  scoped items, 0 errors, 0 warnings; `proof-contract.mjs --strict` 0 errors, 0
  warnings, 40/40; `coverage-checklist.mjs --require-destination` 2 pages, 118
  harvested rows, 0 errors; `validate-plan.mjs research/plan-spec.json` exit 0.
  Run-wide failures in the other gates belong to other, still-in-flight pairs
  of the run and no line of them names this pair.

## Manifest sync note

For every one of the 40 items the batch-22 manifest row now carries the item's
authored Statement/Definition/Example/Statement-refuted section as `statement`,
the item's frontmatter dependency list as `deps`, the item's `kind`, and the
recomputed `dependency_level`. This changed the pair scope hash once; the
refreshed scope decision above is current, and `item-dependency-levels.mjs`
validates every level.

Checks: `precheck.mts`, `rendercheck.mjs` and `proof-layout.mjs` run per item at
authoring time; all items above PASS. Manifest statements/deps for the repaired
items are synced at the bottom of this log.

## Independent unresolved-item audit — 2026-10-05

The assigned batch22 review re-read all 40 current carriers, their exact direct
suppliers, native manifests/contracts, and relevant retrieved Stacks Chow and
Borel–Serre passages. Current native item decisions now close 40/40 items with
explicit examined dependency lists and reviewer confidence 1. This supersedes
the stale closure claims above; closure was recomputed from current disk inputs.

Proof repairs preserve the commissioned Chow, K-theory and GRR claims. The
main repairs are generic support lengths and nonreduced flat-fibre
multiplicities; compatible vector-bundle resolution comparisons; consistent
quotient/lines diagonal Koszul models; signed operational Chern coefficient
extraction and a complete Whitney flag-filtration proof; the projective Chow
bundle support induction; exact supported-sheaf fibre restriction; the
operational/Chow-ring graph evaluation inverse; and the corrected projective
RR divided-difference sign. Source mappings now use algebraic exterior powers,
all-field affine dimension, the exact smooth-geometric-regularity and proper
coherence suppliers, prime filtrations, regular-sequence associated graded
algebras, and actual proper/birational/Cartier-center blowup theorems.

Owner-authorized carrier clarifications: order positivity only on nonzero
elements (closure32); arbitrary-field A1 closed points use their irreducible
polynomials (closure20); Todd multiplicative versus character additive
(closure6); rankzero projective bundle has zero groups/pushforwards separately
from the positive-rank symmetric-power formula (closure4); and the deformation
product identity holds away from infinity, with normal-cone special fibre
(closure18). Every computed closure is confined to batch22, with no outside
lane overlap. The three later escalation/reopen pairs and the normal-cone
escalation/reopen were resolved by fresh current reviewer receipts.

The root applied all shared manifest/contract/quote operations under guarded
payloads; this reviewer edited no shared manifests/contracts. No items or pair
scope were added. The explicit Burau and cotangent-complex holds were untouched.

Focused checks on final carriers: `node tools/proof-layout.mjs` on the 40
explicit item paths reported 40 items, 124 steps, 0 defects; every subsequent
proof edit also received its focused layout check. The final batch22 strict
contract check reported 0 errors, 0 warnings, 40/40 checked. A batch-only native
`loadStep3`/`itemDecision` scan reported total40, closed40, work=[]. No
Autopilot gates/retries, global recertification, tests, commits, publication or
push were run by this reviewer.
