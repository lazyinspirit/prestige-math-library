# Step 3a scope review — hochschild-homology-and-triply-graded-link-homology

- Run `frontier-40-geometry-braids-rep-27`, batch 11, role alpha, label
  `step3a-pair-hochschild-homology-and-triply-graded-link-homology-52a5dab87ab6f082`,
  covers `hochschild-homology-and-triply-graded-link-homology`.
- A page `hochschild-homology-and-triply-graded-link-homology` (order 765,
  category `braid-groups`, 13 items). B page
  `hochschild-homology-and-triply-graded-link-homology-examples` (order 766,
  4 examples). Companion pointers agree A↔B; the B page requires only its A
  page and nothing in `plan-spec.json` requires the B page (dependency leaf).
- Decision: **sufficient**. Scope only — no item approval, no owner record, no
  edit to any scaffold, manifest, coverage, plan or page.

## Evidence read

- `research/frontier-40-geometry-braids-rep-27-batch-11.pages.json` (13 A +
  4 B items with statements, 66 declared dep edges, 42 distinct deps,
  `dependency_level` 0–12, proof strategies),
  `research/frontier-40-geometry-braids-rep-27-batch-11.coverage.json`
  (one page, four sources, 66 harvested rows; dispositions 27 included,
  7 inline, 6 already-published, 11 deferred, 15 out-of-scope),
  `research/frontier-40-geometry-braids-rep-27-batch-11.notes.md` (source
  conventions, dependency adjustments, AC routing, load-bearing checks) and
  `research/frontier-40-geometry-braids-rep-27-batch-11.cross-batch-dependencies.json`
  (2 page + 14 item rows, all `open`).
- Prose design: `research/plan-braid-groups-track.md` BG-19 — heading L902,
  page id L904, `Requires` L905–910, A table L913–924 (the twelve designed
  ids), Examples section L926–935 (the four designed ids), track role L57
  (“Hochschild/Rouquier model and comparison with KR homology”), graph
  narrative L974 (“BG-19 joins BG-16–BG-18 with HA-22/23”).
- Plan contract: `research/plan-spec.json` rows 765/766 (empty item arrays,
  fixed `companion`/`requires`); the A page’s only consumer is its B page.
- Run records: `research/frontier-40-geometry-braids-rep-27-scope-ledger.json`
  (pair at batch 11), `…-planning-notes.md` L23 (design ref L902),
  `…-alpha-step1-drift.md` L65–69 (verdict `no-drift` for this pair),
  `…-drift-evidence.json`, and all 17
  `research/frontier-40-geometry-braids-rep-27-step1-<item>.json` readiness
  records (17/17 present, every `decision: ready`). No owner decision exists
  for this pair; `…-owner-authoring-direction.md` permits required local
  helper items under the ordinary workflow rules.
- Published suppliers re-read at item level in `items/`:
  `def-hochschild-chain-complex-of-a-bimodule`,
  `def-termwise-hochschild-homology-complex-and-iterated-homology`,
  `def-hochschild-hyperhomology-of-a-bimodule-complex`,
  `thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex`,
  `def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring`,
  `thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex`
  (hypothesis `M` k-central, satisfied by the `Q`-algebra bimodule `B'(D)`),
  `def-regular-sequence-on-a-module`,
  `thm-regular-sequences-give-acyclic-koszul-complexes`,
  `cor-koszul-complex-resolves-a-regular-quotient`,
  `def-type-a-reflection-realization-and-polynomial-ring`,
  `def-type-a-soergel-bimodule-for-a-simple-reflection`,
  `lem-the-rank-one-soergel-bimodule-square-splits`,
  `def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization`,
  and the published Markov/closure/oriented-link items.
  `library/homological-algebra/hochschild-homology-and-diagonal-koszul-resolutions.md`
  and `…-hyperhomology-and-cyclic-tensor-invariance.md` were checked for the
  required claims.
- In-run suppliers re-read: batches 9 and 10 each contain every cited id
  (`def-positive-and-negative-rouquier-generator-complexes`,
  `def-rouquier-complex-of-a-braid-word`,
  `thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence`,
  `def-khovanov-rozansky-complex-and-trigraded-braid-homology`,
  `def-factorization-of-a-marked-moy-graph`,
  `def-arc-and-wide-edge-khovanov-rozansky-factorizations`,
  `def-bigraded-matrix-factorization-with-potential`,
  `def-chi-zero-and-chi-one-wide-edge-morphisms`,
  `def-positive-and-negative-khovanov-rozansky-crossing-complexes`,
  `thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift`,
  `thm-khovanov-rozansky-homology-categorifies-the-homflypt-polynomial`,
  `def-normalized-khovanov-rozansky-homflypt-bigraded-euler-series`).
- Source re-verification at review time (2026-10-05): Khovanov
  `math/0510265v3` re-downloaded, 190287 B, sha256_16
  `548a0eece08bd967` (matches the coverage stamp); I read the sections this
  pair uses — Hochschild homology pp. 1–2, Soergel bimodules pp. 3–4, braid
  action pp. 4–5, Link homology/Theorem 1/proof sketch and the trigrading
  paragraph pp. 6–10, the `m=2` example pp. 15–16. Khovanov–Rozansky II
  `math/0505056v2` re-downloaded, 303442 B, sha256_16 `1b6580406c3d35b5`
  (matches); I read the end of §1, printed pp. 11–12 (reduced ring,
  `H(D)=Hbar(D)\otimes Q[x]`, one-dimensional reduced unknot).

## Scope against the prose design

- All twelve designed A rows and all four designed B rows are present, in
  design order with the designed kinds: the three setup definitions
  (reduced ring/bimodules, unreduced bimodules and trivial factor, Khovanov’s
  generator complexes), the termwise-HHH definition, the five comparison
  lemmas (`a=0` wide-edge Koszul complex; first-layer regular sequence;
  remaining closure Koszul complex = diagonal Hochschild complex; the
  resolution-wise Koszul-to-HHH identification with the reduced summand; the
  crossing/trigrading comparison), the theorem, and the invariance and
  Euler-characteristic corollaries; the B page’s rank-one computation,
  two-strand torus example, trivial-braid normalization and
  termwise-versus-total example. No designed claim is dropped or weakened.
- **One addition:** `def-reduced-khovanov-rozansky-homology`. This is a
  required local helper, not a scope change: the design’s promised theorem
  compares HHH with “the reduced homology `H(σ)` as defined in KR II, end of
  Section 1”, but no design row defines the reduced theory, and the in-run
  batch-10 supplier `def-khovanov-rozansky-complex-and-trigraded-braid-homology`
  defines only the unreduced groups (its one-mark-circle computation is
  `Q[x]{-1,1}`, the trivial tower). The helper is source-backed (KR II
  printed pp. 11–12, verified above) and is consumed by the theorem, the
  comparison lemma and the trivial-braid example; documented in the batch
  notes §1.
- Deliberate boundaries, not omissions: Kazhdan–Lusztig positivity, the
  geometric `B_w` model and the `m=3`/GSV–DGR remarks are `out-of-scope` with
  reasons; the Tor/Ext duality, Soergel tensor-product relations,
  indecomposable `B_w` and Alexander/Markov material are `deferred` to
  destinations that exist (published Soergel, braid-closure and Hochschild
  pages, in-run Rouquier/MF scaffolds). None of these is used by any planned
  item of the pair.
- The pair keeps the full grading scope promised by the design: the trigrading
  dictionary `a=-h`, `q=p-h`, `t=c` after the global `(1,-1,0)` correction is
  stated and required to be verified locally; invariance up to the transported
  KR shift and the HOMFLYPT Euler characteristic are both present; no
  fractional absolute normalization is silently added.
- Intended role: the pair is the capstone of the braid-groups link-homology
  branch (BG-19) and consumes BG-17/BG-18 through their scaffolds plus three
  published homological-algebra pages; it has no downstream planned consumer
  beyond its own B leaf.

## Source coverage

- Four sources, 66 harvested rows, all disposed; `coverage-checklist` reports
  0 errors/0 warnings. Every `included`/`inline` row names an existing item
  (checked programmatically: 0 rows point at a missing id); every `deferred`
  row names an existing destination; every `out-of-scope` row carries a
  specific reason.
- One coverage-record discrepancy (not an unmet prerequisite, no consumer):
  the Khovanov row deferring the Tor/Ext duality `HH_i \cong HH^{m-i}` to
  `hochschild-homology-and-diagonal-koszul-resolutions` justifies it as
  “part of the published Hochschild development”, but that published page’s
  item list contains no Hochschild-cohomology/duality item, and a library-wide
  search for “Hochschild cohomology” returns nothing. The pair does not use
  the duality (it works with chain-level/Tor HH throughout, and the termwise
  definition deliberately avoids the AC Tor identification), so no scaffold
  addition is recommended; the coverage note should not be relied on if a
  later item ever needs the duality.

## Prerequisites and dependency findings

- `requires` (design L905–910 = manifest = plan-spec): three published pages
  (`hochschild-homology-and-diagonal-koszul-resolutions`,
  `hochschild-hyperhomology-and-cyclic-tensor-invariance`,
  `bounded-bimodule-complexes-and-derived-tensor`) and two in-run scaffolds
  in earlier batches (`rouquier-complexes-and-categorical-braid-relations`
  batch 9 order 761; `matrix-factorizations-and-khovanov-rozansky-link-homology`
  batch 10 order 763). All five are on disk or in the current frontier.
- All 66 declared dep edges resolve (`manifest-deps`: 17 items, 0 missing,
  0 errors); a wikilink scan of all 17 items resolves every referenced id
  (45 refs: 16 published items, 28 in-run items, 1 page-id reference in a
  strategy sentence). No declared dependency belongs to a third in-run batch.
- **Unmet prerequisites: none found.** No prerequisite needed by the planned
  definitions, lemmas, theorem, corollaries or examples is absent from both
  the published library and the current scaffold. Near-misses checked and
  cleared: the two-strand example’s reduction uses the published
  `lem-the-rank-one-soergel-bimodule-square-splits` (present; see hygiene note
  below); the published diagonal-Koszul theorem’s `k`-central hypothesis holds
  for the `Q`-algebra bimodule `B'(D)`; the AC used in the comparison is
  declared where consumed and traced to its consumers; the reduced-KR object
  the theorem needs is scaffolded by the local helper.
- Cross-batch ledger `…-batch-11.cross-batch-dependencies.json`: 16 rows
  (2 page, 14 item) into batches 9/10, all `open` because no proof is authored
  yet; every named supplier exists.

## Checks actually run (with results)

| check | command | result |
|---|---|---|
| manifest dependency fields | `node tools/manifest-deps.mjs research/…-batch-11.pages.json` | 17 items, 0 missing, 0 errors |
| scaffold policy (whole run) | `node tools/content-policy.mjs --manifest-only research/…-batch-*.pages.json` | 892 items, **0 errors, 0 warnings** |
| scaffold policy (batch 11 alone) | `node tools/content-policy.mjs --manifest-only research/…-batch-11.pages.json` | 14 `batch-dependency-missing` errors, all naming batch-9/10 suppliers — the documented check-scope limitation of a single-batch invocation; clean under the whole-run invocation above |
| coverage contract | `node tools/coverage-checklist.mjs research/…-batch-11.coverage.json --require-destination` | 1 page, 66 rows, 0 errors, 0 warnings |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` | 892 items, 54 pages; no error names a batch-11 item |
| readiness records | presence check of `…-step1-<item>.json` for all 17 batch-11 items | 17/17 present, all `ready` |
| scope gate state | `node tools/step3-decisions.mjs check --run … --phase scope` | pair listed as “current scope review required”; this record closes it |

## Carried to Step 3b (non-blocking; no effect on this decision)

1. The exact trigrading constants and the `(1,-1,0)` correction remain the
   authoring verification obligation already flagged in the batch notes §7,
   anchored by the unknot and `(2,n)` normalizations.
2. `def-reduced-khovanov-rozansky-homology` says “at `a=0` … the ring
   `Q[a,x_1,\dots,x_m]` is replaced by `Q[a,x_2-x_1,\dots,x_m-x_1]`”; the
   source’s reduced ring retains `a` (KR II printed p. 12), so the phrase
   should be aligned at authoring. The statement’s substantive content
   (`H(D) \cong Hbar(D)\otimes Q[x]`, one-dimensional reduced unknot,
   construct-not-quotient caveat) matches the source.
3. `ex-hhh-of-the-positive-two-strand-torus-knot`: the source’s displayed
   `HH_1` complex (printed p. 16) begins with a contractible pair
   (`1: R{2n+2}\to R{2n+2}`) that the example’s “differentials alternate
   between `2y` and `0`” simplification omits; the stated bidegree start
   `(2n-2,3)` agrees with the source, and the authoring proof must reconcile
   the normalization. The `h=0` “parity-dependent endpoint” hedge should be
   replaced by exact values.
4. Dependency hygiene: the two-strand example invokes the published
   `lem-the-rank-one-soergel-bimodule-square-splits` in its strategy without
   listing it in `deps`; the item exists, so this is a declaration choice for
   the author, not a missing prerequisite.

## Conclusion

The planned definitions, comparison lemmas, theorem, corollaries and examples
adequately cover the pair’s intended subject (“Hochschild/Rouquier model and
comparison with KR homology”), every promised design row is present, the
single addition is a required and source-backed local helper, all four sources
are disposed with complete coverage, and no prerequisite is absent from both
the published library and the current scaffold. Decision: **sufficient**.
