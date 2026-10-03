# Step 3a scope review — `the-artin-action-on-a-free-group`

- Run: `frontier-38-owner-30`, batch 15, role alpha (step 3a scope review; this pair only).
- A page: `the-artin-action-on-a-free-group` (plan order 743, braid-groups).
- B page: `the-artin-action-on-a-free-group-examples` (order 744).
- Scope decision: **sufficient** — receipt
  `research/frontier-38-owner-30-step3a-review-the-artin-action-on-a-free-group.json`.
- This report decides **scope only**. It is not an item approval, a proof review, or an
  owner record. No owner scope record exists for this pair and none was assumed. No
  scaffold, item, plan, page, coverage, owner, or engine file was edited.

## Inputs read (exact paths)

| Artifact | Use |
|---|---|
| `research/plan-braid-groups-track.md` L451–478 (BG-8 A design), L479–497 (BG-8 examples design), L46 (role row "faithful action, peripheral classes, and the boundary word"), L968 (track routing: BG-8 consumes BG-4 and BG-6; BG-9 consumes BG-8 and BG-7) | Binding prose/table design and page role |
| `research/braid-groups-planning/proposed-items.json` (BG-8 rows, 22 proposed A ids) | Commissioned item list behind the design |
| `research/frontier-38-owner-30-owner-authoring-direction.md` (pair 743/744 selected; local-prerequisite, source and gate discipline) | Binding owner direction |
| `research/plan-spec.json` orders 743/744 (metadata matches the manifest; item lists empty — Step-4 splice territory) and requirements at orders 60, 735, 739 | Plan/contract reconciliation |
| `research/frontier-38-owner-30-batch-15.pages.json` (A 23 items, B 4 items, states/statements/deps/requires) | Current scope carrier |
| `research/frontier-38-owner-30-batch-15.coverage.json` (3 sources, 28 harvested rows: 16 `included`, 3 `inline`, 5 `already-published`, 4 `out-of-scope`, each decline reasoned; 3 fetch stamps) | Source coverage |
| `research/frontier-38-owner-30-batch-15.notes.md` | Scaffolder reconciliation and repair record |
| `research/frontier-38-owner-30-step1-<item>.json` for all 27 pair items | Readiness: 27/27 `ready`, records current against the frozen manifest |
| `research/frontier-38-owner-30-batch-15.cross-batch-dependencies.json` (`[]`) and `research/frontier-38-owner-30-cross-batch-dependencies.json` (no row for this pair) | Cross-batch edges |
| `research/frontier-38-owner-30-alpha-step1-drift.md` §`the-artin-action-on-a-free-group` (VERDICT: no-drift) and `research/frontier-38-owner-30-drift-evidence.json` | Step-1 verdict and closure set |
| `research/frontier-37-owner-30-batch-20.coverage.json` (deferred row, destination this page) and `research/frontier-37-owner-30-step3a-pair-artin-presentation-completeness-and-braid-combing.md` L127–131 | Prior-run deferral and supplier role |
| `library/braid-groups/punctured-disks-mapping-classes-and-point-pushing.md`, `library/abstract-algebra/free-groups-and-presentations.md`, `library/braid-groups/artin-presentation-completeness-and-braid-combing.md` (all `status: published`) | Published page-level prerequisites |
| `items/*.md` for the 34 distinct published dependency ids (spot-read the load-bearing ones) | Supplier statements/hypotheses |
| Full texts in `scratchpad/source-cache/braid-groups/`: `gonzalez-meneses-basic-results.pdf` (474454 B, sha256 8fef987df3601d1e), `farb-margalit-primer-v5-author-draft.pdf` (3609750 B, 46c4cc848134ba38), `artin-theory-of-braids-1947.pdf` (1916072 B, 6fb7ae639cc46039) | Direct source checks (byte counts and sha256 prefixes match the coverage `fetch_verified` stamps exactly) |

## Design versus delivered scaffold

- All 18 design A ids are present (checked id by id against the design table), with one
  documented rename: `lem-cutting-a-punctured-disk-along-a-full-stem-system-leaves-a-disk`
  is delivered as `lem-the-standard-stem-system-cuts-the-punctured-disk-open-to-a-disk`
  (same claim, Jordan–Schönflies route instead of surface classification; recorded in the
  batch notes). All 4 design B ids are present; the B page is exactly the designed leaves.
- The A page adds 5 genuine local prerequisites, each a named joint of a designed route:
  `lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis`,
  `lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians`,
  `lem-a-based-self-map-of-the-punctured-disk-inducing-the-identity-on-pi-one-is-based-homotopic-to-the-identity`,
  `lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints`
  and `lem-smooth-relative-isotopy-extension-for-disk-arcs-with-puncture-endpoints`. None
  widens the promised subject; each is consumed by a designed item or by the commissioned
  B route, matching the owner's local-prerequisite rule. Page sizes 23/4 are far below the
  100-item cap.
- Kind counts: A = 4 definitions, 1 proposition, 13 lemmas, 4 theorems, 1 corollary;
  B = 2 examples, 2 counterexamples. No placeholder or remark-only item.

## Subject coverage (definitions, results, examples)

- Geometric spine: punctured-disk model, standard meridians and boundary word; explicit
  flower deformation retraction with free basis and asphericity; free fundamental group on
  the meridians; boundary loop $[\partial]=[x_1]\cdots[x_n]$; stem-system cut-to-disk;
  homotopic proper arcs are isotopic rel endpoints (F-M arc bigon, half-bigon caveat);
  smooth relative isotopy extension at puncture endpoints; trivial meridian action forces
  puncture- and stem-fixing up to isotopy; straightening and the isotopy-to-identity lemma
  (Alexander contraction after cutting).
- Algebraic spine: frozen Nielsen formulas and inverses; braid-relation check; descent to
  $\rho:B_n\to\operatorname{Aut}(F_n)$ by von Dyck; the geometric read-off proposition;
  faithfulness (geometric action + isotopy-to-identity + published completeness);
  conjugacy/boundary-word lemma; peripheral-boundary-preserving definition; Artin's
  product-cancellation dichotomy and extremal shortening; the sufficiency theorem;
  Artin's characterization of the image with uniqueness; word-problem corollary.
- Examples page: the $B_3$ generator table and braid-relation check; $\rho(\Delta^2)$ as
  conjugation by the boundary word; the two designed counterexamples (a conjugate-
  permuting automorphism violating the ordered boundary product; the trivial induced
  permutation not determining the braid).
- Deliberate declines are recorded and defensible for this role: GM §1.6.2 (residual
  finiteness, Hopfianity) and Artin's Theorems 13, 14, 17–19 (coordinate encoding,
  groupoid/substitution identification, normal form/center). No claim of the pair asserts
  or consumes them, and Artin's norm-form/center material belongs to the later Garside
  page of the same track.

## Prerequisites and dependency scope

- Item level: the pair has 139 dependency references (55 distinct ids: 21 same-pair items,
  34 published `items/*.md` files). Every published id exists with `id` match and
  `status: published`; every in-run id is a manifest item of this same pair; zero
  cross-batch, zero missing, zero non-published references.
- Page level: the three `requires` pages (orders 60, 735, 739) are fully published and
  earlier in reading order; the B page requires the A page only. The published supplier
  statements match their uses at the level of hypotheses (spot-read:
  free-on-meridians/free-basis items, retract/deformation-retract fundamental-group
  proposition, smooth finite-arc-system extension lemma, Alexander contractibility,
  Jordan–Schönflies with its AC hypothesis, braid–mapping-class theorem, presentation
  surjection and completeness, von Dyck, the presentation definition, and the symmetric-
  group surjection).
- Consumer: the designed consumer BG-9 (`the-burau-representations`, order 745, not part of
  this run) needs this pair's `def-standard-meridians-of-a-punctured-disk` and
  `thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians`; both are
  present. The unified dependency ledger holds no consumer edge out of this pair.
- The prior-run deferral directing F-M §1.2.7's arc bigon criterion and straightening
  ("used in the later Artin-action faithfulness proof") to this page is honored by the arc,
  extension and straightening lemmas, and the coverage harvests exactly those F-M rows.
- **No unmet prerequisite was found.** One declaration matter for Step 3b/5, not a scope
  omission: the corollary's effectivity clause ("reduced words ... effectively computable,
  hence $B_n$ has solvable word problem") is supported by the published
  `thm-word-problem-for-free-groups` ("The word problem for a finitely generated free group
  is solvable by free reduction"), which is not currently listed among the corollary's
  deps. The prerequisite exists; the item should declare it when authored.

## Source coverage and direct source checks

- Three independent treatments back the pair; all three are fetch-verified with matching
  byte counts and sha256 prefixes in the coverage and in the local full-text cache.
  Directly re-read in the cache: GM §1.6 (the displayed $\rho_{\sigma_i}$ formulas, the
  conjugacy and boundary-word observations, Theorem 1.3's characterization), GM §1.6.1
  (the word problem by comparing automorphisms), GM §1.6.2's heading (residual
  finiteness/Hopfianity) as the declined section; Artin 1947 formulas (14)/(15), Theorem 15
  (the ordered product is fixed), Theorem 16 (characterization plus generation) with the
  length induction, and the Theorem 13/14/17–19 headings behind the declines; F-M §1.2.7's
  proper-arc definitions and the half-bigon caveat for isotopies relative to the boundary.
- Every design locator is addressed by a harvested row; the only reasoned declines are the
  ones listed above. Counts: 28 harvested rows — 16 `included`, 3 `inline`, 5
  `already-published`, 4 `out-of-scope`.
- The B page declares no separate coverage rows. All four B items are direct computations
  from A-page definitions/results (checked at statement and dependency level); the design's
  only extra pointer, GM §4 on the full twist, attaches to a claim the item defines locally
  ($\Delta^2:=(\sigma_1\cdots\sigma_{n-1})^n$) and evaluates with the frozen §1.6 formulas.
  Uncertainty: if Step 3b imports a §4-specific centrality/normal-form claim instead of the
  direct computation, the coverage should be extended for that example.

## Checks actually run on current batch 15

- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-15.pages.json` → 27 items, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-15.pages.json` → 27 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-15.coverage.json` → 1 page, 28 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-15.coverage.json` → 3/3 fetch-verified, 3/3 resolved, 0 documented drops.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` → 812 items / 60 pages, maximum level 16, no batch-15 error.
- `node tools/step1-decisions.mjs check --run frontier-38-owner-30` → 27/27 batch-15 records current (`ready`); run-wide 785/812 ready, none open on this pair.
- `node tools/step3-decisions.mjs check --run frontier-38-owner-30 --phase scope` before this review → `the-artin-action-on-a-free-group: current scope review required` (no owner record).

## Findings, uncertainties, and Step-3 obligations (scope-relevant)

1. The pair's scope matches its intended role and its design; nothing designed is missing
   and nothing delivered lies outside the designed subject. No merged/split page is
   warranted.
2. Recorded route deviations are conservative and preserve the claims: the cut-to-disk
   lemma uses Jordan–Schönflies (with AC declared) instead of surface classification; the
   boundary-word lemma is split and rerouted through the flower retraction so it is
   choice-free; the published completeness theorem is added so injectivity of the
   presented group is explicit. AC/AC$_\omega$ declarations are present where the routes
   use choice. These are authoring choices, not scope changes.
3. Authoring obligations already recorded in the batch notes (not scope omissions): print
   the geometric read-off at the support disc $U_i$ and check the conjugation direction
   against the frozen stacking convention; give the end-continuity argument for tracked
   punctures; give the explicit smooth/topological arc-isotopy comparison; reproduce the
   F-M bigon and Jordan–Schönflies arguments rather than cite-only. The design's sentence
   about shortest conjugator representatives in the peripheral definition should be visible
   in the sufficiency proof's length induction.
4. No defective published item was found among the examined suppliers; they were checked
   at statement/hypothesis level against their uses, not re-audited.

**Decision: sufficient.** The A/B pair's definitions, results and examples adequately
cover the intended subject (faithful action, peripheral classes, boundary word, and the
examples companion), its sources are full-text verified, its prerequisites resolve to
published or same-pair items, and the one declaration matter above is for Step 3b/5. No
owner action is required at scope.
