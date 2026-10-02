# Step 3a scope review — riemann-roch-for-curves-via-euler-characteristics

- Run: `frontier-37-owner-30` (batch 7), role alpha, label
  `step3a-pair-riemann-roch-for-curves-via-euler-characteristics-07f26a5fef7e7afd`.
- A page: `riemann-roch-for-curves-via-euler-characteristics` (order 366.087,
  category `scheme-theory`, 34 manifest items: the 31-item design inventory
  plus 3 local supports).
- B page: `riemann-roch-for-curves-via-euler-characteristics-examples`
  (order 366.088, 10 items); the A→B and B→A companion pointers agree.
- Decision: **sufficient** for the A page (with the B page as its leaf
  companion), recorded at the current pair scope hash with
  `node tools/step3-decisions.mjs record-scope --run frontier-37-owner-30
  --page riemann-roch-for-curves-via-euler-characteristics --decision
  sufficient --reason "<scope evidence; this report>"`. Receipt:
  `research/frontier-37-owner-30-step3a-review-riemann-roch-for-curves-via-euler-characteristics.json`;
  re-check with `node tools/step3-decisions.mjs check --run
  frontier-37-owner-30 --phase scope`.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval,
  writes no item decision, and edits no scaffold, item, plan row or owner
  record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-37-owner-30-step3a-pair-riemann-roch-for-curves-via-euler-characteristics-07f26a5fef7e7afd.task.md` | Exact dispatch: own only this pair; read the library and sibling pairs as dependencies require |
| `research/frontier-37-owner-30-batch-7.pages.json` | Current A inventory (34 items: ids, kinds, statements, strategies, `deps`, provenance, sources) and B inventory (10 items); page `requires`; A↔B companions; order 366.087/366.088 |
| `research/frontier-37-owner-30-batch-7.coverage.json` | 4 source records with locators, fetch stamps (bytes + sha256_16) and 69 harvested result rows, each with a disposition (`included`/`inline`/`deferred`+destination/out-of-scope+reason) |
| `research/frontier-37-owner-30-batch-7.notes.md` | Step-1 construction record: design conformance, the 3 local supports, the listing-order deviation, harvest corrections, AC declarations, cross-batch input, unresolved findings, validation snapshot |
| `research/frontier-37-owner-30-batch-7.cross-batch-dependencies.json` | 118 open cross-batch rows (116 item + 2 page edges) to batches 5 and 6 with required-claim evidence |
| `research/frontier-37-owner-30-batch-8.pages.json` | Sibling consumer/successor: the AV-25 duality pair's 47 A + 11 B items, including every item this page's coverage defers (full Riemann–Roch, canonical degree, thresholds) |
| `research/frontier-37-owner-30-batch-8.cross-batch-dependencies.json` | The duality pair's item edges into this page (14 supplier ids + page edge) |
| `research/plan-algebraic-geometry-track.md` lines 1722–1779 (`## AV-24` heading at 1722; the dispatch's L1698 pointer lands inside AV-23's B table, as the batch-7 notes already recorded) | Controlling prose design: route, `requires`, 31-item A table, 10-item B table, source locators; the audit matrix rows for Fulton/Artin/Vakil/Stacks §8 assignments |
| `research/plan-spec.json` rows 366.087/366.088 | Page identity, order, kind, category, companion, empty item lists, the four `requires`; rows whose `requires` name this page (366.088, 510.0163) |
| `research/frontier-37-owner-30-scope-ledger.json`, `frontier-37-owner-30-drift-evidence.json`, `frontier-37-owner-30-alpha-step1-drift.md` (§ "riemann-roch-for-curves-via-euler-characteristics", VERDICT `no-drift`) | Owed pages; declared-requires closure; drift verdict |
| `research/frontier-37-owner-30-operator-record.md`, `frontier-37-owner-30-planning-notes.md` | Owner direction (no `*-owner-authoring-direction.md` exists for this run), the batch-6 repair and batch-8 scaffold history, the 67 preserved full-overlay findings |
| `research/frontier-37-owner-30-step1-*.json` → `node tools/step1-decisions.mjs check --run frontier-37-owner-30` | All 778 run items `ready`, closed (rerun at review time) |
| Stamped source texts cached in the environment: `/tmp/f37b7/{fulton,artin,vakil,stacks-curves}.pdf` + `.txt` (sha256_16 prefixes equal to the coverage fetch stamps) and live Stacks tags fetched during this review | Independent locator/statement verification (below) |

## Scope against the prose design

- Design AV-24 fixes the route: the Euler-characteristic form proved *without*
  Serre duality, with the symmetric form `l(D) = deg D + 1 − g + l(K−D)` and
  the canonical-divisor and `2g−1 / 2g / 2g+1` threshold material assigned to
  AV-25, `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`
  (batch 8). The page `requires` in the manifest equal the design's four
  pages, and unlike the empty plan rows the manifest carries the inventory.
- Inventory match (checked programmatically): all 31 designed A ids are
  present; all 10 B design ids are present in design order; every item kind
  matches the design table (`def/lem/thm/cor/rem`, `ex/cex`); all items are
  `literature-derived` statements and the three B statements designed as
  `ai-generated` carry that provenance. Nothing designed was dropped, renamed
  or re-kinded, and the B page was not enlarged beyond the design.
- Three A items beyond the design table are local supports of designed
  claims, each placed before its consumer and each consumed inside the run:
  `lem-projective-line-divisors-classified-by-degree` (degree list / rank-one
  base case; consumed by four batch-8 items), `lem-smooth-curve-coherent-torsion-free-locally-free`
  (the torsion-free criterion behind the maximal-line-quotient step; consumed
  by three batch-8 items) and `lem-nonzero-map-invertible-to-locally-free-injective`
  (nonvanishing ⇒ injective). No new subject matter is introduced.
- Listing order follows the design except the prerequisite reordering recorded
  in the batch-7 notes: `cor-existence-rational-function-bounded-pole` and
  `cor-smooth-proper-curve-finite-map-projective-line` precede
  `thm-h1-line-bundle-vanishes-sufficiently-high-degree` (whose statement
  takes the finite map as input), with `cor-riemann-theorem-large-degree`
  following. That is an ordering repair, not a scope change.
- Subject coverage delivered: the definitions `l(D)`, `h^i`, χ, genus
  `g = h^1(O_C) = 1 − χ(O_C)`, index of speciality `i(D)`, special/nonspecial;
  finite-dimensionality and vanishing above degree 1; monotonicity of `L(D)`
  and the one-point exact sequence; the point-addition Euler-characteristic
  shift; the Euler-characteristic Riemann–Roch `h^0 − h^1 = deg + 1 − g`;
  the Riemann inequality and the negative-degree vanishing; the monotone
  stabilisation of `h^1`; fixed-direction Serre vanishing via a finite
  `φ : C → P^1`; Riemann's theorem in that fixed direction; existence of
  rational functions with a bounded pole and finiteness of `C → P^1`;
  the genus-zero criterion; `Pic(P^1_k) ≅ Z` and the Birkhoff–Grothendieck
  splitting theorem; the degree-zero section corollaries; the `l(D) − i(D)`
  form; `dim |D| = deg − g + i(D)`; and an explicit scope remark that the
  sharp thresholds wait for the duality pair.
- The B page supplies exactly the designed examples and failure modes: P^1 in
  every degree, conic with a rational point, a genus-zero curve without one,
  the 0-or-residue-degree jump `l(D+p) − l(D)`, strictness of the Riemann
  inequality for special divisors, a principal divisor on P^1, the pole pencil
  and its finite map, a nonspecial large divisor, negative-degree consistency
  of Riemann–Roch, and the empty-divisor/genus boundary cases. I spot-checked
  the numerics (`l(d∞) = max(d+1,0)`, `i(−d∞) = d−1`, the jump cases on
  P^1_R including `l(V(t²+1)) = 3`, the quartic genus-3 zero-divisor case);
  they are correct as statements.
- The withheld half of the classical subject is not lost: every deferred row
  in the coverage file names a batch-8 item, and all of those items exist on
  the scaffolded duality pair — `thm-full-riemann-roch-divisor`,
  `cor-h0-canonical-differentials-genus`, `cor-canonical-degree-two-g-minus-two`,
  `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two`,
  `cor-rr-exact-high-degree-formula`, `thm-degree-two-g-line-bundle-basepoint-free`,
  `thm-degree-two-g-plus-one-line-bundle-very-ample`, plus the residue/duality
  chain. The page's own statements refuse to quote them ("No Serre duality is
  used…", "This is only a fixed-direction statement…", `rem-sharp-degree-thresholds-wait-for-duality`),
  so the pair is internally honest about its boundary.

## Source coverage assessment

- Four independent treatments back the A page, each with a full-text fetch
  stamp in the coverage file. I re-computed `sha256_16` on the environment's
  cached extractions and they equal the stamps exactly:
  Fulton *Algebraic Curves* (706,612 bytes, `937a5c2a962b5de1`; Ch. 8
  §§8.1–8.6), Artin MIT 18.721 (3,056,656 bytes, `c81f79d211aa4d49`;
  Ch. 8 §§8.1–8.4), Vakil *The Rising Sea* 2025-10-21 (9,643,655 bytes,
  `d07177aa0317c134`; §18.4, §18.5.3–18.5.7 with Exercises 18.5.A–18.5.I),
  Stacks *Algebraic Curves* 0BRV (745,082 bytes, `c4e3d4c0fc533a3d`;
  standalone §§3, 5–8).
- Harvest and gates (rerun at review time): `coverage-checklist.mjs
  research/frontier-37-owner-30-batch-7.coverage.json --require-destination`
  reports 1 page, 69 rows, **0 errors, 1 advisory** `coverage-low-yield`
  (13/69 scaffolded). `manifest-deps.mjs` on batch 7: 44 items, 0 errors.
  The 37 item ids named in harvest rows all resolve to in-run or published
  items; the deferred destinations resolve to batch-8 items.
- Independent verification I performed, beyond the file's own evidence:
  - Live Stacks tags fetched during this review match the harvest rows:
    0BS5 (χ(O_X) = χ(ω^•) and −χ(ω_X) in the CM 1-dimensional case),
    0BS6 (Riemann–Roch: ω invertible, `deg(ω_X) = −2χ(O_X)`,
    `χ(E) = deg E − ½ rank(E) deg(ω_X)`), 0BY7 (genus `g = dim H^1(O_X)`),
    0CCP (linear series and the morphism to `P^r`), 0BY9 (genus invariance
    under field extension), 0C19 (`deg ω_X = 2g−2`), 0C1A
    (`h^0(Ω_{X/k}) = g`, `deg Ω = 2g−2`), and titles for 0B5D (Situation
    53.6.2) and 0E8V (Lemma 53.7.1), as cited.
  - Vakil's stamped 2025 PDF places the material exactly as the coverage says:
    §18.4 "Riemann-Roch, and arithmetic genus", §18.4.1 the theorem for line
    bundles (Euler-characteristic form), §18.4.4 `p_a = 1 − χ(O_C)`,
    §18.5.1–18.5.4 Serre duality and its Riemann–Roch restatements (deferred),
    §18.5.6 the P^1 splitting theorem with Exercise 18.5.I finishing it. The
    design's "Ch. 21 §§21.5–21.9" is an older-edition locator; the batch notes
    and the coverage record that drift, and the 2025 locators are correct.
  - Artin's stamped PDF has Lemma 8.1.1 (finite torsion-free ⇔ locally free on
    a smooth curve), Lemma 8.2.4, Theorem 8.3.3 (Riemann–Roch version 1) and
    Theorem 8.4.1 (Birkhoff–Grothendieck) where the rows put them.
  - Fulton's stamped text has §8.2 Proposition 3(1)–(4), §8.3 Riemann's
    theorem with Corollaries 1 and 3, and §8.6 the Riemann–Roch theorem in the
    `l(W−D)` form with Noether's reduction lemma — matching the rows,
    including the ones correctly deferred.
- The declinations are real, not padding-in-reverse. The large deferred blocks
  (Fulton §8.4–8.6, Vakil §18.5.1–18.5.4, Stacks §§6–8) are exactly the
  duality/canonical-divisor route that AV-24 excludes and AV-25 owns; the
  batch-5/6 destinations (`thm-principal-divisor-degree-zero-proper-curve`,
  `cor-degree-descends-picard-curve`, `thm-plane-curve-arithmetic-genus`, …)
  exist. The low-yield advisory is the expected consequence of splitting one
  classical chapter across the Euler-characteristic pair and the duality pair;
  Step 5's reader still re-confirms the 24 `inline` absorptions against the
  four sources, as the notes request.
- One mapping nuance (bookkeeping, not a gap): the Fulton §8.2 Proposition
  3(3)–(4) row is marked `included` into
  `lem-riemann-roch-space-finite-dimensional`, whose statement covers
  finite-dimensionality and vanishing but not the "depends only on the
  linear-equivalence class" clause; that clause is realised on the page by
  `def-little-l-divisor` (through `O_C(D)`) and by
  `def-index-speciality-divisor` ("depends only on the linear equivalence
  class of D"). Content is present; the row's item pointer is slightly loose
  and can be re-labelled at Step 5 if the owner wants exact row/item pairing.

## Role in the library

- Prerequisites: `cartier-and-weil-divisors-line-bundles-and-picard-groups`
  (batch 5, 36 items) and `smooth-proper-curves-divisors-genus-and-ramification`
  (batch 6, 36 items; its ramification/different repair landed 2026-09-30
  05:23 UTC) are in-run drafts, both Step-1 ready; `sheaf-cohomology-cech-cohomology-and-comparison`
  and `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`
  are published pages in `library/scheme-theory/`, and every external
  supplier this page names exists in `items/`. `step1-decisions check`
  returns 778/778 ready; `drift-review-check` passed with this page above the
  published-or-earlier-in-run threshold.
- Consumers: the batch-8 AV-25 page consumes 14 of this page's items —
  `def-little-l-divisor` (11 uses), `def-index-speciality-divisor` (6),
  `def-genus-euler-characteristic-curve` (4),
  `lem-projective-line-divisors-classified-by-degree` (4),
  `thm-riemann-roch-as-l-minus-index` (3),
  `lem-smooth-curve-coherent-torsion-free-locally-free` (3),
  `cor-degree-zero-line-bundle-section-trivial`, `cor-picard-projective-line-integers`,
  `cor-smooth-proper-curve-finite-map-projective-line`,
  `cor-existence-rational-function-bounded-pole`,
  `cor-dimension-complete-linear-system`, `def-nonspecial-divisor`,
  `lem-add-one-point-exact-sequence-line-bundle`,
  `thm-riemann-roch-euler-characteristic-curve` — plus the page edge. Every
  consumed clause is a planned item on this page; the consumer never waits on
  content this pair omits. No published page consumes the pair yet (both
  pages are draft).
- B page: exact design inventory; its own dependencies all resolve. Two
  page-internal edges (`ex-nonspecial-large-divisor`,
  `cex-negative-degree-rr-right-side-negative` → `ex-riemann-roch-projective-line-divisor`)
  keep it a leaf for external consumers.
- Observation, no action requested: the Birkhoff–Grothendieck cluster
  (`thm-birkhoff-grothendieck-vector-bundles-p1` and the three
  `lem-vector-bundle-p1-*` items, with their two support lemmas) has no
  consumer inside this run or the published library. It is design-mandated
  (AV-24 A table; the design's own Artin §8.4 / Vakil §18.5.6 mapping), so it
  is an appendix carried for the design's source range rather than a scope
  omission; the owner may want to know it is currently end-of-chain.

## Known non-scope findings on this pair (already preserved elsewhere)

- The owner's full 30-manifest overlay probe currently lists, for this pair:
  **1 `intra-order`** (`def-little-l-divisor` depends on
  `lem-riemann-roch-space-finite-dimensional`, which appears later on the
  page — introduced by the batch-7 Step-1 dependency repair), **19 `b-leaf`**
  (9 A-side + 10 B-side items depending on published example items homed on
  examples pages, e.g. `ex-cohomology-o-d-projective-line-all-d`,
  `ex-skyscraper-sheaf-acyclic`, `ex-twisting-sheaf-projective-line-transitions`),
  **8 `undeclared-prereq`** (the corresponding example pages are not in the
  declared `requires` closure), and **4 `redundant-prereq`** advisories on
  this A page. The operator record reserves all 67 run-wide overlay findings
  for Step-4 reconciliation; none of them changes the scope decision above,
  and this review changed no file to "fix" them.
- Batch-6 design promise: AV-23 stored `cex-degree-zero-line-bundle-no-section`
  "for post-RR proof", and this page's
  `cor-nontrivial-degree-zero-line-bundle-no-sections` supplies that promised
  proof; batch 6's frozen manifest instead gives the cex an independent local
  route and declares no edge. Owner/Step-3 reconciliation (accept the
  independent proof, or add the single edge row to batch 6's input and refresh
  the ledger) is recorded in the batch-7 notes; this page's side of the
  promise is present whether or not the edge is added.

## Limits and uncertainty

- Scope review only; no proof checking. Whether each proof closes is Step 3b
  and Step 5 work. My statement-level checks were confined to what the scope
  verdict needs (inventory vs design, deferred destinations, B-page numerics,
  source locators).
- The "sufficient" verdict certifies this pair's share of the subject under
  the design's explicit no-duality split. Full/symmetric Riemann–Roch is
  covered only because batch 8 carries the deferred items; if batch 8 were
  dropped, re-scoped or failed, this pair alone would no longer cover the
  classical theorem, and the owner should re-review the split.
- I verified sources against the environment's hash-stamped extractions and
  live Stacks tags; I did not re-download the four PDFs. Locator drift already
  recorded (Vakil edition numbering; Stacks book vs standalone numbering) is
  not a coverage gap.
