# Step 3a scope review — cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes

- Run: `frontier-36-complete` (batch 9), role alpha, label
  `step3a-pair-cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes-77e7db701a9c9c6a`.
- A page: `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`
  (order 366.083, category `scheme-theory`, 51 planned items).
- B page: `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes-examples`
  (order 366.084, 11 planned items); the companion pointers agree in both
  directions.
- Decision: **sufficient** for both pages of the pair, recorded with
  `tools/step3-decisions.mjs record-scope` (non-owner scope review) at the
  current pair content hash. Receipt:
  `research/frontier-36-complete-step3a-review-cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes.json`;
  re-check with `node tools/step3-decisions.mjs check --run frontier-36-complete --phase scope`.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, writes
  no item decision, and edits no scaffold, item, plan row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-36-complete-step3a-pair-cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes-77e7db701a9c9c6a.task.md` | Exact dispatch; own only this pair; read the whole library and sibling pairs as dependencies require |
| `research/frontier-36-complete-batch-9.pages.json` | Current A inventory (51 items) and B inventory (11 items) with every statement, strategy, `deps`, provenance, source references and dependency level; page `requires`; A↔B companion |
| `research/frontier-36-complete-batch-9.coverage.json` | Seven source records with locators, 44 harvested result rows, `included`/`inline` dispositions, item destinations, per-source read evidence and fetch stamps |
| `research/frontier-36-complete-batch-9.notes.md` | Step-1 construction record: all 34 AV-22 design A ids and all 11 design B ids, the 17 local supports, AC declarations, cross-batch placement, published repair findings, gate results |
| `research/frontier-36-complete-batch-9.cross-batch-dependencies.json` | 49 direct item edges (batch 5/7/8 suppliers) plus the two A-page prerequisite edges, all `open` awaiting Step-3 authoring/verification |
| `research/plan-algebraic-geometry-track.md` §AV-22 (lines 1495–1560, i.e. the record at line 1481) | Controlling prose design: role, `requires` (`AV-18`, `AV-19`, `AV-21`, graded/Hilbert theory, homological machinery), A inventory 34 items, B inventory 11 examples, source locators, owner amendments at lines 3569/3615 |
| `research/plan-spec.json` rows 366.083/366.084, with the four plan rows whose `requires` name this A page: 366.085 `smooth-proper-curves-divisors-genus-and-ramification`, 366.087 `riemann-roch-for-curves-via-euler-characteristics`, 366.089 `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`, 510.0161 `smooth-projective-serre-duality-and-flag-variety-line-bundles` | Page identity/order/kind/category/companion/`requires`; empty item lists, so the batch manifest controls the item order; the pair's consumer set |
| `research/frontier-36-complete-owner-authoring-direction.md`, `research/frontier-36-complete-operator-record.md` (entries 14:33–15:28 UTC), `research/frontier-36-complete-planning-notes.md`, `research/frontier-36-complete-step1-blockers.json` | Binding owner direction and the three AV-22 hypothesis amendments; batch 9 is `ready`; the only run-level Step-1 finding is the then-empty batch-16 pages, later dispatched |
| `research/frontier-36-complete-step1-<item>.json` (62 receipts) | Per-item Step-1 readiness and examined dependency lists; all 62 are current `ready`, none escalated |
| `research/frontier-36-complete-drift-evidence.json` (entry for this A page) | Declared `requires` vs computed closure; no drift verdict is recorded against this pair |
| `research/frontier-36-complete-batch-16.pages.json` and `research/frontier-36-complete-cross-batch-dependencies.json` | In-run consumer: 20 item edges plus the page edge from `smooth-projective-serre-duality-and-flag-variety-line-bundles` |
| `research/frontier-36-complete-batch-5.pages.json`, `…-batch-7.pages.json`, `…-batch-8.pages.json` | Sibling supplier inventories: the exact items the 49 edges consume are present on those pages (Proj, twisting sheaves, ampleness; quasi-coherent/coherent sheaves; proper/closed-immersion machinery) |
| Published pages in `library/`: `scheme-theory/sheaf-cohomology-cech-cohomology-and-comparison`, `commutative-algebra/rees-modules-artin-rees-and-hilbert-samuel-theory`, `homological-algebra/{projective-and-injective-resolutions,derived-functors}`, `scheme-theory/diagonals-separated-morphisms-and-valuative-uniqueness` | The pair's published prerequisite/supplier pages and their item inventories (Čech/flasque/Godement machinery, Hilbert–Serre package, resolutions, separatedness) |
| `research/published-consumer-supplier-ledger.md` (lines 32798, 32729, 34739) | Current A-P dispositions of the four published findings inherited from batches 5/7; none is in this pair's dependency closure |
| Live Stacks tags fetched during review (see below) | Independent locator verification of the coverage rows |

## Scope against the prose design

All 34 designed A items and all 11 designed B items are present in the manifests,
in design order, with the design kinds; no designed item was dropped, renamed,
re-kinded or weakened, and no item was added to the B page. The 34 A rows are
the full intended subject: affine acyclicity and its Čech proof; the affine
morphism/derived pushforward interface; the projective twisting-sheaf table with
its monomial core and the three corollaries; Serre vanishing, eventual global
generation and finiteness; Euler characteristic, Hilbert function and Hilbert
polynomial with the support-dimension degree theorem; proper pushforward
coherence; the base-change map, its local criterion, upper semicontinuity and
Euler constancy; cohomological dimension for `P^n_A` and for separated
Noetherian schemes; the closed-immersion and hypersurface sequences; and the two
scope remarks.

The 17 A items beyond the design table are local supports of designed claims,
each placed before its consumer, not new subject matter:
`lem-ringed-space-module-sheaves-enough-injectives` and
`lem-higher-direct-image-local-section-formula` (derived `R^qf_*` on *module*
sheaves, not only abelian sheaves); `lem-affine-qc-cech-unit-ideal-exact` (the
exact augmented principal-open Čech complex); `lem-higher-direct-image-affine-localization`
(the affine-base identification used by the design's affine-morphism item);
`lem-projective-coherent-cohomology-finite-and-vanishing` (Stacks 30.14.1, the
high-twist engine behind Serre vanishing and graded finiteness);
`lem-graded-section-module-finite-projective`, `lem-proper-cohomology-field-extension`
and `lem-support-dimension-preserved-field-extension` (Hilbert-polynomial and
degree-of-support machinery); `lem-affine-open-containing-component-generics`,
`lem-schematic-closure-and-dense-agreement`,
`lem-relative-projective-space-universally-closed`, `lem-chow-lemma-proper-noetherian`
and `lem-coherent-devissage-one-generic-generator` (the Chow/dévissage route to
proper pushforward coherence and proper finiteness, Stacks 30.18–30.19); and
`lem-proper-flat-cohomology-perfect-complex`, `lem-noetherian-approximation-proper-fp-flat-sheaf`,
`lem-proper-flat-fp-cohomology-perfect-complex` and `lem-cohomology-base-change-finite-free-criterion`
(the perfect-complex/arbitrary-base route for the base-change theorem, exactly
the supplier the design's amendment at line 3569 asks for).

The three owner amendments from the operator record are present in the final
manifest Statements: `cor-connected-projective-variety-h0-o` carries
**geometrically connected and geometrically reduced**; `thm-cohomology-and-base-change`
carries a coherent sheaf **flat over the base**; and
`cor-upper-semicontinuity-cohomology-dimension` carries a coherent **S-flat**
sheaf. I checked the underlying mathematics of the amended `H^0` claim: for
`X = Spec K` with `K/k` purely inseparable, `K ⊗_k k̄` is a local ring, so `X`
is geometrically connected and reduced over `k` while `H^0(X,O_X) = K ≠ k`;
the two hypotheses are genuinely needed. The pair's page `requires` match the
design's `AV-18`, `AV-19`, `AV-21`, graded/Hilbert and homological inputs.

## Source coverage assessment

- `coverage-checklist` on the owned coverage file: 1 page, 44 harvested rows,
  0 errors, 0 warnings; no declined row. `source-fetch-check`: 7/7 sources
  fetch-verified and resolved with no drop.
- The harvest is real source maths, not encyclopaedia padding: Stacks
  *Cohomology of Schemes* §§30.2, 30.4, 30.8, 30.12, 30.14, 30.16–30.19 and
  30.22; Vakil *The Rising Sea* (2022 draft) §§8.4, 11.5, 19.1, 19.6, 19.8–19.9,
  28.1–28.2; Gao–Zhang Ch. 6 §§6.3–6.6; plus Stacks *Properties of Schemes*
  §28.30, *Derived Categories of Schemes* §§36.26–36.32, *Limits of Schemes*
  §§32.8–32.13 and *Algebra* Lemma 10.168.1 for the arbitrary-base supports.
- I re-verified the load-bearing locators live on the Stacks site while
  reviewing: 01X9 (30.2.1), 01XB (30.2.2), 0BDX/01XD (30.2.5–2.6),
  01XT (30.8.1), 01YS (30.14.1), 0B5T/0B5S (30.16.1), 02O1 (30.16.2),
  02O4 (30.16.3), 0200 (30.18.1), 02O6 (30.19.2), 07VK (30.22.1),
  0A1H (36.30.1), 0A1I (36.30.2), 0B91 (36.30.4), 0BDN (36.32.1),
  01ZX (28.30.4) and 02JO (10.168.1). Each stated the lemma/remark quoted in
  the coverage file, including the finite-presentation/flat hypotheses for the
  base-change rows and the Noetherian-approximation proof of 36.30.1.
- Design-source deviations, none of which removes content: (i) the design's
  fourth treatment, Artin Ch. 7, is not harvested; three independent complete
  treatments (Stacks, Vakil, Gao–Zhang) back the inventory instead;
  (ii) the design's Vakil pagination/chapter numbers are from another edition —
  the notes record the inspected 2022-draft locators (§§8.4, 11.5, 19, 28);
  (iii) Stacks chapters 32 and 36 and Algebra 10.168.1 are harvested beyond the
  design's Stacks range, to back the design's own finite-presentation
  base-change scope. These are locator notes for the owner, not coverage gaps.

## Role in the library

- Prerequisites: all six declared `requires` pages are available — batch 7 and
  batch 8 A pages are in-run draft suppliers with Step-1 ready receipts, and
  `sheaf-cohomology-cech-cohomology-and-comparison`,
  `rees-modules-artin-rees-and-hilbert-samuel-theory`,
  `projective-and-injective-resolutions` and `derived-functors` are published
  with nonempty inventories. The published sheaf-cohomology page already owns
  the Čech/flasque/Godement machinery, so the pair's scope starts at
  quasi-coherent applications rather than re-minting it.
- In-run consumer: batch 16 `smooth-projective-serre-duality-and-flag-variety-line-bundles`
  requires this A page and consumes exactly 20 of its items
  (`lem-ringed-space-module-sheaves-enough-injectives`,
  `lem-graded-section-module-finite-projective`,
  `thm-cohomology-projective-space-twisting-sheaves`,
  `def-higher-direct-image-sheaf`, `lem-closed-immersion-cohomology-pushforward`,
  `thm-cohomology-and-base-change`, `lem-proper-flat-fp-cohomology-perfect-complex`,
  `lem-eventual-global-generation-coherent-twists`,
  `lem-proper-cohomology-field-extension`,
  `cor-projective-cohomology-finite-dimensional-field`, and the page edge).
  Every consumed clause is a planned item; the consumer is not waiting on a
  result this pair omits.
- Later planned consumers: `plan-spec.json` rows 366.085 (curves),
  366.087 (Riemann–Roch via Euler characteristics) and 366.089 (residues and
  Serre duality for curves) require the pair's finiteness, Euler
  characteristic, `H^0(O_X)` and twisting-sheaf table; all are in the manifest.
  No published page currently requires this A page, and the pair has no
  published content yet.
- Dependency availability: the 49 direct item edges (15 to batch 5, 22 to
  batch 7, 12 to batch 8) plus the two page edges all resolve to Step-1 ready
  in-run suppliers; the 58 external dependencies resolve to existing `items/`
  files; a closure check over the union of run manifests and published item
  frontmatter found 0 missing ids, no A→B edge, and none of the four published
  A-P items (`thm-affine-closed-immersions-quotient-rings`,
  `lem-base-change-open-closed-immersions`, `def-quasi-coherent-ideal-sheaf`,
  `thm-quasi-coherent-ideal-closed-subscheme-correspondence`). The published
  findings recorded at ledger lines 32798/32729/34739 therefore remain outside
  this pair's closure; the batch-9 note's replacement suppliers (batch-5
  `lem-closed-immersion-affine-quotient-and-base-change`, batch-7
  `thm-affine-quasi-coherent-equivalence`) are already the declared routes.

## Observations for the owner (non-blocking, no scope change)

1. `lem-relative-projective-space-universally-closed` deliberately re-proves
   the universal closedness of `P^n_S → S` locally instead of using batch-5
   `thm-projective-space-proper-over-base`, whose published route currently
   carries the A-P affine-quotient finding. The local lemma is a necessary
   support of `lem-chow-lemma-proper-noetherian` here, so it stays in scope;
   after the batch-5 route is verified the owner may prefer to relink it, which
   would be a proof/dependency edit, not a scope change.
2. `thm-cohomology-and-base-change` is stated for arbitrary base with `f`
   proper of finite presentation and coherent `F` flat over the base — the
   design's own finite-presentation form (line 3615's "Noetherian form"
   amendment is satisfied through the added perfect-complex and Noetherian
   approximation supports). Its local criterion at that generality is a
   Step-3b proof obligation; the scope decision does not endorse the proof.
3. `thm-serre-finiteness-projective-cohomology` keeps the design's name while
   asserting the proper form of the theorem (the scaffold says so explicitly).
   This is a naming note only.
4. The pair's 7 items that declare `def-axiom-of-choice`
   (`lem-ringed-space-module-sheaves-enough-injectives`,
   `def-higher-direct-image-sheaf`, `lem-affine-qc-cech-unit-ideal-exact`,
   `lem-relative-projective-space-universally-closed`,
   `thm-hilbert-polynomial-degree-support-dimension`,
   `lem-noetherian-approximation-proper-fp-flat-sheaf`,
   `cor-connected-projective-variety-h0-o`) are the ones whose routes name a use
   (module-sheaf injectives, prime detection, homogeneous-prime/elimination,
   filtered stages, algebraic-closure reductions). Whether any other planned
   route needs AC, and consumer propagation, is Step-3b/5 work.

## Uncertainty statement

I verified page identity and pairing, inventory against the design, the owner
amendments, the declaration and availability of dependencies, the consumer
interface, the B-leaf shape, the coverage-checker result and the load-bearing
Stacks locators (tag 01X9 through 02JO, listed above) at source. I did not
re-derive the 62 planned proof strategies and did not audit the proofs of the
published suppliers; that remains Step 3b/Step 5 work.
I found no omitted topic and no over-claim that would move the pair's subject,
so I propose neither enrichment nor a merger, and I did not treat any planned
item's proof strategy as approved.

## Decision

**sufficient** for both pages of the pair. The planned definitions, results and
examples realise all 34 designed A items and all 11 designed B examples; the
17 additions are source-backed local prerequisites of designed claims; the
seven harvested source treatments (44 rows, 0 errors) cover the intended
subject at the promised locators; the pair's published and in-run prerequisite
closure is intact; and its role as the affine/projective quasi-coherent
cohomology supplier for the curve, Serre-duality and flag-variety pages is
preserved. Step 3b may author against this scope.
