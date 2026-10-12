# Step 3a scope review — relative-smooth-triangulation-and-bundle-fitting

- Run: `frontier-44-special-representation-examples-28`, role alpha, label
  `step3a-pair-relative-smooth-triangulation-and-bundle-fitting-fb950390392c190f`.
- A page: `relative-smooth-triangulation-and-bundle-fitting` (order 1794,
  category `differential-topology`, 7 planned items), batch 29.
- B page: `relative-smooth-triangulation-and-bundle-fitting-examples`
  (order 1795, 1 planned item), companion pointer A↔B consistent.
- Decision: **sufficient**, recorded with `tools/step3-decisions.mjs
  record-scope` (non-owner review) at the current pair content hash. Receipt:
  `research/frontier-44-special-representation-examples-28-step3a-review-relative-smooth-triangulation-and-bundle-fitting.json`;
  re-verify with `node tools/step3-decisions.mjs check --run
  frontier-44-special-representation-examples-28 --phase scope`.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item, plan row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-44-special-representation-examples-28-batch-29.pages.json` | Current A inventory (7 items) and B inventory (1 item) with every statement, strategy, `deps`, provenance and source locator; page `requires`; companion pairing |
| `research/frontier-44-special-representation-examples-28-batch-29.coverage.json` | Two source records (Munkres 1966 Ch. II; Putz 1967, DOI 10.4153/CJM-1967-042-3) with locators, 25 row dispositions, item destinations and fetch stamps (sha256_16 `7157fa3f5b9876d7`, `da51ecbe601fc5bb`) |
| `research/frontier-44-special-representation-examples-28-batch-29.notes.md` | Step-1 construction record: design/plan conflicts, dependency audit, check results, open flags, 2026-10-09 owner integration update |
| `research/frontier-44-special-representation-examples-28-batch-29.cross-batch-dependencies.json` (`[]`) and `…-batch-37.cross-batch-dependencies.json` | Batch 29 has no incoming cross-batch dependency; the consumer batch 37 records three verified item edges plus the page edge into this pair |
| `research/frontier-44-special-representation-examples-28-append-1-drift-evidence.json` | Pair entry: declared `requires` (9 pages), 155-page closure, design locations |
| `research/plan-klr-foundation-prerequisites.md` §"Relative smooth triangulation and bundle fitting" (lines 23–109 and 111–203) | Controlling prose design (two copies); same 8 contracts, declared inputs and example in both copies |
| `research/frontier-44-special-representation-examples-28-klr-foundation-relative-triangulation-proposal.json`, `…-source-ledger.json`, `…-native29-repair/integration-round1.json` | Frozen proposal inventory (`metadata_graph_frozen: true`), source ledger, and the round-1 scaffold repair (statements unchanged; deps/strategy of the fitting lemma, corner theorem and bundle theorem corrected) |
| `research/plan-spec.json` rows 1794/1795 | Page identity, order, kind, category, companion, `requires` and item order; agrees with the manifest |
| `research/frontier-44-special-representation-examples-28-owner-authoring-direction.md` §"Owner same-frontier prerequisite extension — 2026-10-09" | Binding owner direction adding this pair to the original frontier, with the "no silent omission / no citation substitute" requirement |
| `research/frontier-44-special-representation-examples-28-batch-37.pages.json` and both consumer item statements | In-run consumer (`complex-algebraic-stratified-topology`): exact uses of the three consumed A items |
| Published items and pages named below | Dependency resolution, host-page closure membership, statement-level match |
| `/tmp/klr-foundation-relative-triangulation/munkres-chapter-II.txt` (OCR of the stamped Edinburgh scan) and `/tmp/klr-foundation-topology/putz.{pdf,txt}` (sha256_16 `da51ecbe` = coverage stamp) | Spot re-verification of the load-bearing source rows at the recorded locators |

## Inventory against the prose design

All 7 designed A items and the single designed B example are present with the
design's exact IDs, kinds, titles and `deps`, in the plan-spec order
(definition, stability lemma, shape-controlled secants, corner-orthant lemma,
fitting lemma, corner theorem, bundle theorem; B example last). No designed item
was dropped, renamed or re-kinded and no extra claim was added relative to the
frozen inventory; `requires` and companion agree with the plan. The design's two
copies differ only in the position of the corner-orthant lemma; the plan-spec
order (corner lemma before the fitting lemma) controls and is the manifest's
order.

- The definition item fixes the pair's whole interface: whole-star
  immersion/embedding of a finite complex (tangent-star injectivity, not
  simplexwise rank), piecewise smooth maps and their differentials, strong
  piecewise $C^1$ approximation, relative approximation fixed on a subcomplex,
  shape control, fitting in a (full) subcomplex, projection-preserving
  diagrams, and the corner-adapted face/tangent-orthant contract. The strategy
  records the consistency facts the later items use (well-defined $df_b$,
  well-defined gluing, no choice, no mesh/shape bound asserted). "No generic
  smooth map is called a bundle merely because it is proper" preserves the
  design's boundary.
- The load-bearing results are exactly the design's three-lemma spine (stability
  of embeddings under strong approximation with no meshor shape bound;
  shape-controlled secant approximation with relative/tapered extension and
  affine-plane preservation; finite fitting with exact bundle projection and a
  closed protected region) plus the corner-orthant leaf that supplies the side
  control Munkres 9.8(e) shows plane preservation does not give, and the two
  headline theorems (relative corner triangulation; bundle triangulation over a
  fixed base with piecewise affine $r$, $\pi F=hr$, and the supplied
  projection-preserving collar clause).
- Dependency additions relative to the design are the two published metric
  suppliers requested by the round-1 scaffold repair
  (`prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`,
  `thm-lebesgue-number-lemma`) on the fitting and bundle items; these are
  proof-mechanism suppliers of designed claims, not scope expansion. The two
  conservative `def-axiom-of-choice` edges are frozen metadata-cleanup
  candidates, and both theorem statements already say the ambient AC hypothesis
  is dispensable.
- B page: the single designed example (projection-preserving product
  triangulation of a trivial bundle via the product-cell complex) is present
  with the design sentence, and its deps stay on the definition item and one
  published supplier, so B supplies nothing outside the pair.

## Source coverage assessment

`coverage-checklist --require-destination` reports 2 pages, 25 harvested rows,
0 errors, 0 warnings; `manifest-deps` reports 8 items, 0 errors. Every harvested
row is dispositioned: 14 `included` (each with a named destination item), 9
`inline`, and 2 `out-of-scope` with written reasons (Putz 2.10–2.11 PL local
triviality/submanifold extension; Putz 5.1–5.2 boundary product collar), which
the affected items' statements do not claim. I re-read the load-bearing rows in
the cached full texts at their recorded locators:

- Munkres Ch. II: 8.1 (non-degeneracy; the illustrated failure of stability for
  merely non-degenerate homeomorphisms), 8.5 (strong $\delta$-approximation,
  constant $\delta$ for finite $K$), 8.6–8.8 (finite-star angle control and the
  stability theorem), 9.4 (lattice-cell construction of arbitrarily fine
  subdivisions with a uniform thickness bound), 9.8 and Exercises 9.8(c),(d),
  (e) (tapered extension; affine-plane preservation; the explicit half-plane
  warning), 10.2–10.4 with Exercises 10.4(a),(b) (Euclidean fitting, full
  subcomplexes, supported fitting, submanifold preservation), 10.5–10.6
  (compatibility and boundary extension). This matches the coverage locators and
  the manifest statements clause by clause.
- Putz 1967: 1.3 (stability restated from Munkres 8.8), 2.1 (diagram fitting),
  2.2–2.3 (bundle triangulation over a fixed base; fibre with boundary), 3.3–3.4
  and 4.1–4.4 (fitting with a fixed linear subcomplex, extension preserving
  commutativity, finite simplex-order induction). The manifest's bundle theorem
  keeps Putz's exact-projection and supplied-diagram content and adds the
  compact corner contract and protected-neighbourhood clause, which the design
  and the coverage row note are supplied by this pair.
- The two out-of-scope rows remove nothing the pair's statements assert; the
  design itself assigns the boundary-collar supply to downstream consumers.

## Role in the library and prerequisite closure

- All 9 declared `requires` pages are published with nonempty inventories, and
  all of them sit inside the pair's 155-page closure recorded in the append
  drift evidence.
- The pair declares 18 distinct dependency ids: 12 published items
  (`cor-vector-valued-ftc-and-lipschitz-bound`, `def-axiom-of-choice`,
  `def-barycentric-subdivision-of-an-abstract-simplicial-complex`,
  `def-simplicial-subcomplex-star-closure-and-link`,
  `lem-finite-convex-cell-complexes-admit-compatible-triangulations`,
  `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`,
  `thm-brouwer-fixed-point-theorem`, `thm-chain-rule-for-total-derivatives`,
  `thm-extreme-value-metric`, `thm-lebesgue-number-lemma`,
  `thm-picard-lindelof-local-existence-and-uniqueness`,
  `thm-smooth-dependence-of-ode-solutions-on-parameters`) and the pair's own 6
  earlier A items. None is missing, none is a B page, and no dependency points
  forward (in-run levels 0,1,1,2,3,4,5 for A and 1 for B). Each published
  dependency's host page lies on the declared `requires` path
  (`thm-brouwer-fixed-point-theorem` ← `homology-axioms-degree-and-classical-applications`,
  `thm-extreme-value-metric`/`thm-lebesgue-number-lemma` ←
  `compactness-in-metric-spaces`, `cor-vector-valued-ftc-and-lipschitz-bound` ←
  `rn-as-a-normed-space`, `thm-chain-rule-for-total-derivatives` ←
  `the-total-derivative`, `def-barycentric-subdivision…`/`lem-finite-convex-cell…` ←
  `simplicial-subdivision-and-simplicial-approximation`,
  `def-simplicial-subcomplex-star-closure-and-link` ←
  `simplicial-complexes-and-simplicial-homology`, `def-axiom-of-choice` ←
  `relations-functions-and-quotients`, `thm-picard-lindelof…` ←
  `picard-lindelof-and-first-order-odes`, `thm-smooth-dependence…` ←
  `euclidean-ordinary-differential-equations-with-smooth-dependence`), and the
  needed clauses match the consuming uses at statement level (whole-star
  stability, finite minima, vector FTC/Lipschitz, chain rule, compact Hausdorff
  realization, Lebesgue number, disk Brouwer, local Picard–Lindelöf, smooth
  parameter dependence, barycentric face chains, convex-cell triangulations).
- Intended role: the pair is the differential-topology supplier for the KLR
  prerequisite frontier. The only consumer wired today is batch 37
  `complex-algebraic-stratified-topology`, whose
  `lem-compact-semialgebraic-families-admit-compatible-finite-triangulations`
  consumes the corner theorem, the bundle theorem and the fitting lemma with
  hypotheses the scaffold supplies (compact corner cores, genuine product
  charts, closed protected collars), and whose downstream theorem consumes that
  lemma. Those three consumer rows are `verified` in the consumer batch's own
  input, and the consumed clauses (finite corner-adapted triangulation of
  compact corners relative to boundary data; PL bundle projection over the fixed
  base; fixed-collar fitting with exact diagrams) are exactly what the three
  supplier statements provide. The corner-orthant lemma covers the one subtle
  side-control obligation the design added for this use.
- No published page requires this A page (nothing of the pair is published yet),
  and no other current-frontier run's manifest references these item ids.

## Unmet prerequisites

None confirmed. Every prerequisite named by the pair's items is present in the
published library (or is another item of the pair) with matching hypotheses, as
listed above, and each published dependency's host page is on the declared
requires path. Two uncertainty-level observations, neither a blocker:

1. **No standalone definition of a smooth manifold with corners.** No item in
   `items/` and no item in any of the 50 scaffolded batches of this run defines
   that notion (searched item ids and statements; the published library has
   `def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary` but no
   corners analogue). The consuming items are self-contained: the corner
   theorem stipulates its convention inline ("charts in relatively open subsets
   of $[0,\infty)^c\times\mathbb R^{n-c}$, transition maps smoothly extendible
   with invertible derivative at corner points, preserving local depth and face
   germs") and the definition item stipulates the corner-adapted face/tangent
   conditions it uses. So this is not an unmet prerequisite for the pair as
   scaffolded; if owners want a shared corner notion for this pair and its
   consumers (batch 37 speaks of "compact corner cores"), the natural home is a
   definition item on this A page, e.g.
   `def-smooth-manifold-with-corners-and-local-face-germs` carrying exactly the
   inline convention. Recommended owner consideration only; adding it requires
   reopening the frozen graph.
2. **Metric-separation suppliers exist but are not declared.** The fitting,
   corner and bundle arguments use "positive distance from a compact image of a
   complement" (flagged forward in the batch notes). The published library does
   contain matching suppliers: `ex-distance-to-a-set-is-attained-on-a-compact-set`
   (metric spaces; compact vs compact, hence disjoint compact images) and
   `lem-relative-compact-closed-sets-have-a-positive-distance-gap` (normed
   spaces; compact vs closed, the Euclidean case used here). Neither is on the
   pair's declared dependency path (`norming-and-separation-under-hahn-banach`
   is outside the 155-page closure), so the authoring stage should cite the
   appropriate one and refresh readiness if the frozen graph permits a `deps`
   addition; this is a citation/routing task, not a scope gap.

Recorded but not a scope defect: the B page is thin (one example; 17 of the 50
B pages scaffolded in this run have at most one item). The B-page
design and frozen inventory contain exactly this one example, and the natural
second subject (a counterexample showing plane preservation does not preserve a
half-space, the Munkres 9.8(e) warning behind the corner-orthant lemma) is
recorded in the batch note as an expansion option for the owner. It is an
enrichment option, not an omission from the approved design, and no
pair-merger is implied or recommended.

## Uncertainty statement

I verified inventory against the design and plan, page identity and pairing,
source-row dispositions and the load-bearing locators in the actual cached full
texts, dependency resolution and closure membership, the consumer interfaces of
batch 37, and the absence of a corner definition item. I did not re-derive the
eight proof strategies or audit the published suppliers' proofs; that is Step
3b/5 work, and this review endorses no proof strategy. The two source readings
above were spot checks of the stamped texts, not a full re-read; the batch
notes' complete-reading claims are taken as the authors' evidence, with the
stamps and hashes recorded.

## Decision

**sufficient** for both pages of the pair. The planned definitions, results and
example realise the frozen design exactly (7 A + 1 B, same ids, deps, order and
`requires`); both sources are fully harvested at the promised locators with
every row dispositioned and the two out-of-scope rows justified; all 18
declared dependencies resolve to published items or the pair's own earlier
items, on the declared requires closure; and the pair's role — the relative
corner-triangulation, bundle-fitting and protected-collar supplier for the
constructible/stratified-topology consumer — is covered by the three items that
consumer names. No confirmed unmet prerequisite was found; the two uncertainty
observations above (optional corner-definition item; authoring-stage citation
of the published metric-separation suppliers) and the recorded B-page thinness
need no scope change before Step 3b authors against this scope.
