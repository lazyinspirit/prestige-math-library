# Step 3a scope review — `blowups-exceptional-divisors-and-strict-transforms`

- Run: `frontier-38-owner-30`, batch 2, role alpha (step 3a scope review).
- A page: `blowups-exceptional-divisors-and-strict-transforms`.
- B page: `blowups-exceptional-divisors-and-strict-transforms-examples`.
- Scope decision: **sufficient** (receipt `research/frontier-38-owner-30-step3a-review-blowups-exceptional-divisors-and-strict-transforms.json`).
- This report decides scope only. It is not an item approval, proof review, or owner record.

## Inputs read (exact paths)

- Design: `research/plan-algebraic-geometry-track.md` AV-26 (header L1846, A inventory
  L1850 ff., B inventory L1891 ff., binding termination route L1907 ff.), source crosswalk
  row `AV-26` (L2083), and the deferred-scope rows (L2475, L2482).
- Binding direction: `research/frontier-38-owner-30-owner-authoring-direction.md`
  (pair 366.091/.092; local-prerequisite construction rule; source/gate discipline).
- Contract: `research/plan-spec.json` rows for both page ids (order 366.091/.092, empty
  planned item lists; the A row's 15 `requires` match the manifest verbatim).
- Manifest: `research/frontier-38-owner-30-batch-2.pages.json` (A: 48 items, B: 12 items).
- Coverage: `research/frontier-38-owner-30-batch-2.coverage.json` (A: 7 sources / 58
  harvested rows; B: 4 sources / 13 harvested rows).
- Construction and repair record: `research/frontier-38-owner-30-batch-2.notes.md`,
  including the “Owner chart and surface repair” Step-1 handoff (2026-10-03, 48 A +
  12 B = 60 items).
- Readiness: `research/frontier-38-owner-30-step1-<id>.json` for all 60 items (60/60
  present, `ready`).
- Dependency records: `research/frontier-38-owner-30-batch-2.cross-batch-dependencies.json`
  (empty), `research/frontier-38-owner-30-cross-batch-dependencies.json` (batch-2 edges,
  all `verified`), and the consumer manifests
  `research/frontier-38-owner-30-batch-26.pages.json` /
  `...-batch-27.pages.json`.
- Source spot checks (fetched 2026-10-03): Stacks tags 01OF, 0H1G, 052P, 061M; local
  `milne-ag.pdf` printed p. 196; local `mit18725.pdf` PDF pp. 24–25.
- Mechanical gates actually run on current batch 2: `node tools/coverage-checklist.mjs
  research/frontier-38-owner-30-batch-2.coverage.json` → 2 pages, 71 harvested results,
  0 errors, 0 warnings; `node tools/manifest-deps.mjs
  research/frontier-38-owner-30-batch-2.pages.json` → 60 items, 0 errors.

## Design vs delivered scaffold

- All 32 design A ids and all 12 design B ids are present in the manifest (checked id by
  id); no design id is missing and the B page is exactly the 12 design leaves.
- The A page adds 16 local prerequisites, all owner-authorized on the consuming page:
  the 15 recorded in the batch notes plus `lem-regular-sequence-associated-graded-polynomial`,
  added by the 2026-10-03 Step-1 owner chart/surface repair (it supplies the arbitrary
  regular-immersion corollary without Noetherian/domain hypotheses). None is a scope
  expansion; each closes a named interface of the commissioned route.
- The Step-1 repair reworded several interfaces (charts/overlaps, normal cone chart ring,
  total-transform zero cycle, resolution-round termination). The batch notes record no
  design claim dropped, weakened, or re-hypothesised, and my statement-level spot checks
  confirm the commissioned conclusions survive: the universal property; `I O = O(1)`
  with the fixed convention `O(-E)=I O=O(1)`; flat base change with its failure caveat;
  `E = Proj gr_I O_X` and `E ≅ P(I/I²)` for regular centres; and the resolution theorem
  with the `r·binom(m,2)` δ-drop and the lexicographic contact-order descent.
- Kind counts (no placeholders): A = 8 definitions, 13 theorems, 21 lemmas, 4 corollaries,
  2 remarks (48; page cap 100 respected); B = 9 examples, 3 counterexamples (12).

## Subject coverage (definitions, results, examples)

- Construction: Rees algebra sheaf and its degree-one generation; blowup as relative
  `Proj`; affine blowup algebras `A[I/a]` with the a-power-torsion kernel; standard charts,
  ratio transition maps, independence of the generating set; locality on opens; exceptional
  subscheme `E = pi^{-1}(Z)`.
- Properties: chart-level and global universal property; uniqueness up to unique
  isomorphism; isomorphism off the centre; projectivity/properness; birationality and
  integrality for integral `X`; flat base change and the explicitly stated failure without
  flatness; blowups of invertible ideals are isomorphisms; invariance under powers and
  invertible fractional rescaling.
- Divisors and transforms: strict transform by schematic closure/saturation; total
  transform of Cartier divisors; `pi^*C = C' + mE` with the degree-`m` intersection
  zero cycle; exceptional divisor as the projectivised normal cone and as `P(I/I²)` for
  regular centres; `O_E(E) = O(-1)`.
- Surfaces and curves: point blowup of a regular finite-type surface over any field is
  regular with `E ≅ P^1_{kappa(p)}` (no smoothness over imperfect k asserted); two-chart
  pushforward vanishing; Euler-characteristic drop `chi(O_{C'}) = chi(O_C) + r·binom(m,2)`;
  normalization defect `delta_k` of reduced curves and its residue-degree-weighted
  identity; contact order of regular components and its descent; resolution of reduced
  projective plane curves to regular embedded normal-crossing support; rational maps
  resolved by blowing up the base ideal.
- B page: the two plane charts; `A^3` origin with `E = P^2`; principal-ideal identity;
  Veronese invariance; cusp and node strict transforms; `[x:y]` resolution; nonflat
  base-change failure; singular centre `y^3 = x^5`; normalization vs blowup; total vs
  strict transform of a line through the origin; empty centre.
- Two remarks explicitly disclaim deletion of the centre and any higher-dimensional or
  imperfect-field smooth resolution inference; the resolution theorem itself carries the
  regular-embedded-NC-support (not relative-SNC) caveat.

## Prerequisites and dependency scope

- Item level: the two pages have 168 distinct dependency references; 45 distinct in-run
  deps, all resolving to items of this same pair (the batch-2 cross-batch file is empty
  and no dep points at another batch); 107 distinct external deps, each resolving to an
  `items/*.md` file with matching `id` and `status: published` (0 mismatches, 0 absent).
- Page level: all 15 `requires` resolve to fully published pages (frontier-33/35/36/37,
  frontier-27/28/31, frontier-13, level9-mixed); every item of each required page is
  `status: published`.
- Consumers: the unified ledger's batch-26/27 item edges (all `verified`) reference only
  items present in this pair's manifest, and neither consumer manifest has an unresolved
  dependency; no consumer needs a strict transform of quasi-coherent sheaves.
- Recorded design/plan discrepancy (already logged in the batch notes, no action needed
  here): AV-26's `requires` paragraph and proof route name
  `cor-regular-local-ring-satisfies-s-two` and
  `lem-r-one-s-two-intersection-of-height-one-localisations`, which the plan-spec page
  `requires` does not list and which no scaffold item consumes — the page closes the
  relevant H⁰ and surface-regularity steps by explicit two-chart Čech computations.
  Both named items are published and remain available, so this is a route discrepancy,
  not an unmet prerequisite.
- **Unmet prerequisites: none found.** No consuming planned item or result on this pair
  requires a claim absent from both the published library and the current scaffold.

## Source coverage

- A page: Stacks *Divisors* 31.33–31.36 / *More on Morphisms* 37.16–37.18, Vakil Ch. 19
  §§19.1–19.4, MIT 18.725 Lecture 9, Milne Ch. 8 §§g–h, plus Stacks 10.70, 27.8, and
  10.69 for the local prerequisites; 58 harvested rows = 39 `included`, 2 `inline`, 17
  `out-of-scope`, every exclusion carrying a written reason (generic-point bookkeeping,
  admissible blowups, Fitting-ideal flattening, fibre-wise flatness, relative assassins,
  survey/ADE remarks, Chow's lemma, non-projective surface application, resolution
  history).
- B page: 4 sources, 13 rows, all `included`; the checklist reports 0 errors and
  0 warnings across both pages.
- Fetched spot checks confirm the load-bearing locator claims: tag 01OF contains
  Definition 31.33.1 and Lemmas 31.33.2–31.33.14, with Lemma 31.33.4 giving
  `O_{X'}(-1) = O_{X'}(E)`; tag 0H1G contains Lemma 37.17.3 (smooth centre:
  `X'`, `E` smooth, `E ≅ P(I/I²)`, relative `O_E(1) = O(-E)|_E`), matching the
  manifest's fixed sign convention; 052P and 061M contain the claimed 10.70 and 10.69
  results used by the local prerequisites; local `milne-ag.pdf` p. 196 shows §g,
  Examples 8.66–8.67, and §h; local `mit18725.pdf` pp. 24–25 show the Lecture 9 blowup
  construction and Proposition 13.
- Minor annotation nuance, no scope impact: Stacks Definition 31.34.1 also disposes the
  strict transform of a quasi-coherent sheaf, whereas
  `def-strict-transform-closed-subscheme` defines the scheme-level transform (and its
  iteration) only. AV-26 promised only the scheme version and no consumer uses the sheaf
  version, so this is coverage-row wording, not an omission; flagged for the Step-5
  reader, no file edited.

## Residual uncertainty

1. Proof correctness and authorship are out of scope for 3a; the manifest strategies are
   proof routes, not proofs, and Step 3b/Step 5 own them.
2. The Step-1 repair changed statement wording and interfaces after the design. I verified
   the design ids and the commissioned conclusions survive and that the notes record the
   downstream reconciliation; a full wording-level consumer audit remains the owner's
   Step-1/Step-4 domain.
3. This decision's receipt is bound to the current batch-2 A+B manifest hash. Any later
   item-list, title, or statement change voids it and requires a fresh 3a decision.

## Decision

`sufficient`: the scaffolded A/B pair carries every definition, result, example, and
counterexample the AV-26 design and the pair's library role require, its local additions
are documented prerequisites rather than scope expansion, all dependencies resolve to
published or in-run material, and no omitted topic warrants enrichment or a pair merger.
