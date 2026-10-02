# Step 3a scope review — Punctured Disks, Mapping Classes, and Point Pushing

- Run: `frontier-37-owner-30` (role: alpha; batch 20; this pair only)
- A page: `punctured-disks-mapping-classes-and-point-pushing` (plan order 735,
  `braid-groups`)
- B page: `punctured-disks-mapping-classes-and-point-pushing-examples`
  (plan order 736)
- Inventory: A has 14 items (4 definitions, 6 lemmas, 3 theorems, 1 corollary)
  at declared levels 0–7; B has 4 items (2 examples, 2 counterexamples) at
  levels 6–8. A `requires` four pages, all `status: published`
  (`braids-as-fundamental-groups-of-configuration-spaces`,
  `fibrations-fiber-bundles-and-homotopy-exact-sequences`,
  `partitions-of-unity-and-paracompactness`,
  `vector-fields-flows-and-lie-derivatives`); B requires the A page only.
- Scope decision: **sufficient**, recorded with
  `node tools/step3-decisions.mjs record-scope --run frontier-37-owner-30
  --page punctured-disks-mapping-classes-and-point-pushing
  --decision sufficient`; receipt
  `research/frontier-37-owner-30-step3a-review-punctured-disks-mapping-classes-and-point-pushing.json`.
- This file judges **scope only**, not proof correctness. No scaffold, item,
  plan, page, coverage, engine or owner record was edited; nothing below is an
  item approval. No owner scope record exists for this pair, and nothing was
  assumed from one.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-37-owner-30-batch-20.pages.json` | Current scope carrier: the 14 A items (levels 0–7) and 4 B items (levels 6–8), statements, `requires`, orders, companion pointers |
| `research/frontier-37-owner-30-batch-20.coverage.json` | 3 full-text sources, 23 harvested rows: 15 `included`, 3 `inline`, 1 `already-published`, 2 `deferred` (with destinations), 2 `out-of-scope` (with reasons); no drops or retries |
| `research/frontier-37-owner-30-batch-20.notes.md` | Scaffolder construction record: design/plan reconciliation, the two support insertions, the inverse-endpoint convention note, dependency-clause audit, two relayed published findings |
| `research/frontier-37-owner-30-batch-20.cross-batch-dependencies.json` | `[]` — no cross-batch edges out of this pair |
| `research/plan-braid-groups-track.md` L42 (BG-4 role), L38–49 (inherited suppliers), L131–166 (source keys), L299–327 (binding BG-4 prose design, incl. the deferred proof joint), L329–339 (BG-4 examples design); consumers at L448–467 (BG-8), L530–554 (BG-10) | Binding prose design, scope boundary and the homes of deferred claims |
| `research/plan-spec.json` orders 735/736 (page facts match the manifest; item arrays empty in the plan; neighbours 733/734 BG-3 published, 737/738 BG-5, 739/740 BG-6) | Plan reconciliation and build boundary |
| `research/frontier-37-owner-30-scope-ledger.json`, `research/frontier-37-owner-30-operator-record.md` | Both pages are in the owner's 60-page scope; `allow_in_run_dependencies: true`; no pair-specific owner direction and no `research/frontier-37-owner-30-owner-authoring-direction.md` |
| `research/frontier-37-owner-30-alpha-step1-drift.md` (`### punctured-disks-mapping-classes-and-point-pushing`, VERDICT: no-drift) | Step-1 verdict; topological vs smooth representatives flagged for authoring, point-pushing injectivity postponed to BG-5 |
| `research/frontier-37-owner-30-step1-<item>.json` for all 18 pair items | 18/18 `ready`; whole-run `step1-decisions check` reports 778/778 current, `closed: true` |
| Batch-21 and batch-22 manifests | In-run consumers: `thm-point-pushing-is-the-kernel-of-forgetting-a-puncture`, `ex-pure-braid-generators-as-point-pushes` (BG-5) and `cor-all-four-classical-braid-models-realize-the-artin-presentation` (BG-6) |
| Cached full texts under `scratchpad/source-cache/braid-groups/` | Independent hash/byte match against the coverage `fetch_verified` records (below), then direct reading of the cited sections |

## Inventory versus the design

The BG-4 design table (L307–320) lists 12 A items; the manifest carries all 12
in design order. It adds two declared support insertions before the
braid–mapping-class theorem:

- `lem-configuration-loops-admit-smooth-separated-point-motion-representatives`
  and `lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies`
  make explicit the design's own "load-bearing smooth-representative
  refinement" attached to the theorem row (L318) and to the design note at
  L44–48 ("every topological disk mapping class is represented by the endpoint
  of an explicit smooth point motion"). They change the proof inventory, not
  the promised scope; both are consumed by the braid–mapping-class theorem.

The B design table (L333–338) lists 4 items; the manifest keeps all four, in
order, with the design's example/counterexample roles. Nothing designed is
missing on either page, and no manifest item lies outside the designed
subject.

Subject coverage rolls up as:

- the two mapping-class-group definitions (boundary-fixed, with the pure
  variant fixing each puncture and pointwise boundary throughout);
- Alexander contractibility of `Homeo⁺(D²,∂D²)` in the compact-open topology;
- the evaluation map to unordered configurations: local continuous point-motion
  sections, local-triviality plus numerability (hence a Hurewicz fibration),
  the inverse-endpoint boundary map, its well-definedness/homomorphism lemma,
  and the low-degree exact-sequence isomorphism;
- the braid–mapping-class isomorphism with explicit smooth representatives, the
  pure-braid identification, and the smooth point-motion machinery behind them;
- the point-pushing homomorphism for one puncture, tagged `n≥1` and explicitly
  without an injectivity claim, plus the designed deferral of injectivity to
  BG-5;
- the B witnesses: the disk-supported half rotation representing the positive
  generator, the `n=2` clockwise push computed as the positive full twist, and
  the two convention counterexamples (setwise boundary fixing; setwise puncture
  preservation).

The scaffold records one deliberate convention correction to stale design
wording: the design says to take the endpoint component of a lifted loop, while
the manifest uses the inverse endpoint to match the library's
first-loop-then-second product and the published fibration LES convention
(batch-20 notes; `def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes`).
This is a documented convention choice with local proof obligations, not a
scope change; I did not adjudicate its correctness (scope only).

## Scope boundaries and their homes

Every content boundary the pair draws has a recorded disposition and a named
destination; nothing that the subject promises is silently dropped:

| Content not stated here | Disposition row | Home |
|---|---|---|
| Birman exact-sequence setup: Push injective and image = kernel of Forget | `deferred` (FM §4.2.1 row, batch-20 coverage) | `pure-braids-fadell-neuwirth-and-asphericity` (BG-5, in-run batch 21, requires this page; its `thm-point-pushing-is-the-kernel-of-forgetting-a-puncture` consumes this pair's `def-point-pushing-…`, `cor-pure-braids-…`, `thm-the-evaluation-bundle-…`) |
| Arc bigon criterion, homotopy-versus-isotopy for arcs, straightening | `deferred` (FM §1.2.7 row) | `the-artin-action-on-a-free-group` (BG-8, plan order 743; L463–464 consumes this pair's smooth arc-extension lemma) |
| Spherical braid groups and the punctured-plane mapping-class quotient | `out-of-scope`, written reason (different total homeomorphism group) | — |
| Smale's contractibility of smooth diffeomorphisms | `out-of-scope`, written reason (the pair needs the topological statement with an explicit contraction) | — |

The design's "Deferred proof joint" (L322–327) is preserved verbatim in scope:
the pair defines point pushing and proves neither injectivity nor the short
exact sequence, so BG-5's `π₂`-vanishing proof cannot be bootstrapped from the
Birman sequence it justifies. This split is inside the designed subject, and
its destination page is a selected pair of this run.

## Source coverage

Three independent full treatments back the pair, including a textbook-length
author draft (design's source keys GM/BB/FM, L131–166):

- González-Meneses, *Basic results on braid groups*, §1.4–§1.5 (printed
  pp. 5–8): mapping classes of the punctured disc, Alexander's trick,
  punctured-disc versus punctured-plane comparison with the full twist Δ²,
  standard generators.
- Birman–Brendle, *Braids: A Survey*, §1.3 through Theorem 1 and its complete
  evaluation-fibration proof (manuscript pp. 5–7): `B_n ≅ M_{0,1,n}`,
  `P_n ≅ M_{0,1,ˆn}`, the 5-lemma comparison with the symmetric-group
  extensions.
- Farb–Margalit, *A Primer on Mapping Class Groups*, Version 5.0 author draft:
  §1.2.5–§1.2.7 (pp. 35–38, Prop 1.11 extension of isotopies and the arc
  conventions), Lemma 2.1 + §2.2.1 (pp. 50–51, Alexander trick with the
  radial isotopy formula and the Smale comparison), §4.2.1–§4.2.3 (pp. 101–106,
  point pushing, Birman exact sequence, push maps via Dehn twists),
  §9.1.3–§9.1.4 (pp. 255–257, supported half twists `H_α` for σ_i and the
  generalized Birman exact sequence specializing to `B_n ≅ Mod(D_n)`).

I re-verified the three cached PDFs byte-for-byte against the coverage
`fetch_verified` records: GM `8fef987df3601d1e`, 474,454 B; BB
`22f52d9961a3f0fc`, 809,077 B; FM `46c4cc848134ba38`, 3,609,750 B, and read
the sections above directly. `coverage-checklist --require-destination` exits
0 with 23 rows, 0 errors, 0 warnings.

Record deltas against the design's source cells (none removes a promised
result; none is scope loss):

1. Fadell–Neuwirth §IV appears in the design cells for the point-pushing
   definition and the boundary-map lemma, but this batch harvests FM §4.2.1 for
   the definition and the canonical row for the inverse-endpoint convention;
   FN itself is harvested in batch 21, where BG-5 owns the evaluation-fibration
   method. Hatcher §4.2's numerability-to-fibration interface likewise arrives
   here through the published library item.
2. Three items are not named by any coverage row (the checklist does not require
   per-item rows): `def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes`
   (implicit in the BB low-degree exact-sequence row and the canonical
   homomorphism row), `ex-point-pushing-one-puncture-around-another` (FM
   §4.2.1–§4.2.2 point-pushing computation) and
   `cex-setwise-puncture-preservation-does-not-define-the-pure-mapping-class-group`
   (immediate from the FM §9.1.3 half-twist row). The owner may add explicit
   rows if coverage history should be exhaustive.
3. FM's printed Prop 1.11 concerns smooth isotopies of simple closed curves;
   §1.2.7 says "much of the discussion about curves carries over to arcs"
   (with the half-bigon subtlety). The design's phrase "the explicit statement
   that the arc variants hold" overstates the printed text slightly. This does
   not affect the scaffold, whose arc lemma is a self-contained smooth proof
   from published vector-field interfaces; it is a locator-precision note.

## Dependencies and role in the library

- All four page-level prerequisites exist with `status: published`, and the
  two pages sit at plan orders 735/736 directly after the published BG-3 pair
  (733/734). Batch-20 has no cross-batch dependency edges (`[]`), so no
  unfinished sibling supplier is needed.
- In-run consumers: batch 21 (BG-5) uses `def-point-pushing-…`,
  `cor-pure-braids-…` and `thm-the-evaluation-bundle-…`; batch 22 (BG-6) uses
  `thm-braid-group-…`. Both are already scaffolded and require this A page at
  page level.
- Outside the run, the plan wires this pair into BG-8 (order 743: the smooth
  arc-extension lemma and the braid–mapping-class theorem), BG-10 (order 747)
  and BG-15 (order 757). The pair is thus a genuine supplier for the track's
  later mapping-class/linearity pages, which the design's broad scope covers
  by including the smooth-representative and arc-extension lemmas here.
- The B page is a leaf (requires A only; no incoming item edges), which matches
  its example/counterexample role.

## Checks run now (read-only)

| Check | Actual result |
|---|---|
| `node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-20.coverage.json --require-destination` | exit 0: 1 page, 23 harvested results, 0 errors, 0 warnings |
| `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-20.pages.json` | exit 0: 18 items, 0 errors |
| `node tools/step1-decisions.mjs check --run frontier-37-owner-30` | 778/778 current, `closed: true` (includes all 18 pair items) |
| `node tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase scope` | pair reported "current scope review required" before this review (the record below closes it) |
| Cached-PDF sha256-16 / byte re-check vs coverage `fetch_verified` | 3/3 matched exactly |

## Uncertainty and limits of this review

- I audited scope only; every proof obligation (Alexander contraction
  continuity, bi-Lipschitz local sections, bundle charts, numerability under
  AC, the inverse-endpoint homomorphism computation, the smooth-representative
  lemmas, the `n=2` push computation, both counterexamples' degree arguments)
  remains for Step 3b/Step 5.
- I accepted the designed split that point-pushing injectivity and the Birman
  exact sequence belong to BG-5. This is a deliberate page boundary, not a
  mathematical gap: the destination is a selected pair in this run that
  requires this page, and the coverage disposes the deferral.
- The inverse-endpoint convention is recorded in the scaffold notes as a
  correction of stale design wording; whether the resulting orientation matches
  the published LES and the "positive full twist" reading is a correctness
  question I did not decide.
- The source-record deltas in §"Source coverage" are the only gaps I found
  between the design's declared reading and the batch coverage; item 3 is the
  one place where the design's wording is stronger than the printed source
  text, and the scaffold's local proof makes that harmless for scope.

## Owner action

- None required for this scope. `sufficient` is recorded; the pair may proceed
  to Step 3b authoring.
- Optional, non-blocking: add coverage rows naming the three items listed
  above (or record them as canonical), and consider a locator note that FM
  Prop 1.11 is stated for closed curves with arcs treated in §1.2.7.
