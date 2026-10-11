# Batch 36 — `constructible-incidence-and-cochain-models` (order 1805) / `constructible-incidence-and-cochain-models-examples`

Run `frontier-44-special-representation-examples-28`, role beta, one A/B pair, category
`algebraic-geometry`. Owner authoring direction
(`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`) read first;
it authorizes this pair as one of the 21 necessary same-frontier prerequisite pairs and forbids
scope growth beyond the same frontier. Canonical plan: `research/plan-spec.json` orders 1805/1810,
`requires` `relations-functions-and-quotients`, `sheaf-operations-exactness-ringed-spaces-and-module-pullback`,
`sheaf-cohomology-cech-cohomology-and-comparison`, `analytic-constructible-sheaf-foundations`,
`compact-support-sheaf-calculus` for the A page and the A page for the B page — the batch task and
the stub manifest carry the same two `requires` lists. Design: `research/plan-klr-foundation-prerequisites.md`
section "Constructible Incidence And Cochain Models". The appended-pair drift review
(`...-alpha-step1-append-1-drift.md`) returned `no-drift (order 1805; declared closure complete; no change)`
for this page and that verdict was preserved.

Scaffold written: **2 A items + 1 B item = 3**, all recorded `ready`, in-run dependency levels
9 (L1), 9 (L2), 10 (B). No item was escalated; no page split was needed (both pages far below the
100-item cap). No published content, shared plan, engine state or verdict was edited. Only this
batch's manifest, coverage, notes, `[]`-style cross-batch input and Step-1 readiness records were
written, plus the ledger refresh and the appended ledger section.

## Design / plan comparison (conflicts recorded)

1. **Task locator drift, not a scope conflict.** The batch task cites the design at
   `research/plan-klr-foundation-prerequisites.md` **L428**. The file now has 1523 lines; the
   "Constructible Incidence And Cochain Models" section begins at line **550** and ends at line 585
   (line 428 falls inside "Mixed Hodge Structures And Strictness", which begins at line 426). The
   section was located by title and read in full, together with its three linked carrier drafts under
   `research/frontier-44-special-representation-examples-28-klr-foundation-constructible-drafts/` and
   the constructible packet/source evidence. The plan-spec inventory of this pair (2 A + 1 B) matches
   the design exactly; no scope conflict.
2. **Dependency completion against the design's declared inputs (no claim changed).** The design and
   the carriers declare 8 inputs for `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`
   and 4 for `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`. Reading the two
   carrier proofs against the published pages shows that the declared inputs are necessary but not
   sufficient; the manifest therefore adds the load-bearing suppliers actually used, each read on disk
   for statement/hypotheses:
   - L1 added: `lem-closed-immersion-preserves-sheaf-cohomology` and `def-sheaf-cohomology-derived-global-sections`
     (the `RΓ` equalities of Steps 1.7–1.12), `lem-sheaf-cohomology-classes-as-derived-morphisms`
     (`RHom(k,−) = RΓ` in Step 1.14), `def-sheaf-hom` (internal derived Hom, Step 1.19),
     `def-direct-image-sheaf`, `lem-direct-image-is-sheaf`, `def-inverse-image-presheaf-and-sheaf`,
     `lem-stalk-inverse-image-sheaf`, `def-restriction-sheaf-open-subspace`, `def-extension-by-zero-abelian-sheaf`,
     `def-sheaf-on-topological-space`, `def-presheaf-on-topological-space`, `def-stalk-of-presheaf`,
     `thm-sheaf-morphism-isomorphism-stalkwise`, `thm-exactness-of-sheaves-stalkwise`,
     `def-derived-category-of-an-abelian-category`, `def-derived-hom-in-the-bounded-setting`,
     `def-canonical-truncation-of-a-complex`, `thm-canonical-truncations-fit-a-distinguished-triangle`,
     `thm-the-derived-category-inherits-a-triangulated-structure`, `def-geometric-realization-of-an-abstract-simplicial-complex`,
     `def-simplicial-subcomplex-star-closure-and-link`, `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`
     and `cor-kunneth-over-a-field` (Steps 1.1–1.22), plus the in-run definitions
     `def-locally-constant-sheaf-of-finite-rank` (batch 30) and `def-compactly-supported-global-sections`
     (batch 32).
   - L2 added: `thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective`
     (products of injectives), `thm-injective-complexes-model-the-bounded-below-derived-category`,
     `def-derived-category-of-an-abelian-category`, `def-cochain-complex-in-an-abelian-category`,
     `def-direct-sum-total-complex-of-a-double-complex`, `lem-the-total-differential-squares-to-zero`,
     `thm-the-cohomological-filtered-complex-construction`, `def-sheaf-cohomology-derived-global-sections`,
     `def-direct-image-sheaf`, `lem-direct-image-is-sheaf`, `def-inverse-image-presheaf-and-sheaf`,
     `def-sheaf-on-topological-space`, `def-presheaf-of-groups-rings-modules`,
     `thm-exactness-of-sheaves-stalkwise`, `def-canonical-truncation-of-a-complex`,
     `thm-canonical-truncations-fit-a-distinguished-triangle`,
     `thm-the-derived-category-inherits-a-triangulated-structure`, plus the in-run
     `def-algebraically-constructible-complex-of-analytic-field-sheaves` (batch 30) for the final clause.
   The additions preserve every design claim, hypothesis and conclusion; they make the declared
   closure match the actual proof text. They are reported here because the design's "declared inputs"
   lists are the binding contract being completed, not replaced.
3. **One declared input retained although the current route does not visibly load it.**
   `thm-extension-by-zero-adjunction-exactness` is declared for L2 by the design and the carrier
   frontmatter. The carrier proof text never invokes extension by zero; the exactness it uses is
   exactness of inverse image along the simplicial operators and of sheaf direct sums. Rather than
   delete a binding-design input, the manifest retains it and the L2 strategy flags it for the Step-3
   author: exhibit an explicit open-subspace adjunction use or record it as a declared input that is
   not used. No claim or hypothesis depends on this choice.
4. **Statement wordings preserved; clarifications only.** The three statements are the carriers'
   statements with minimal copyediting ("the face poset of the open simplices of $K$ not in $D$,
   ordered by inclusion of faces"; "its" expanded to avoid ambiguity). The analytic qualifier in L2,
   the AC hypotheses, and both `ai-altered`/`ai-generated` provenance tags are preserved.
5. **B-example provenance corrected to its actual status.** The carrier already marks the interval
   example `ai-generated` / `ai-generated` with `generation.role: example`. The exact two-term witness
   is not stated in Goresky or Bernstein–Lunts; the *method* is the incidence lemma's (Goresky
   §2.1–2.3, §32.2), so the example is scaffolding-level `ai-generated` and the method is cited. The
   example is a B-page leaf; nothing depends on it.

## Dependency audit and prerequisite order

Every declared dependency was resolved: published items exist in `items/` with matching statements
(read on disk during the audit, whether declared or examined: `thm-inverse-direct-image-adjunction`, `thm-extension-by-zero-adjunction-exactness`,
`lem-sheaf-supported-on-a-closed-subset-is-a-pushforward`,
`lem-closed-immersion-preserves-sheaf-cohomology`, `def-sheaf-cohomology-derived-global-sections`,
`lem-morphisms-from-the-constant-sheaf-are-global-sections`, `lem-sheaf-cohomology-classes-as-derived-morphisms`,
`def-sheaf-hom`, `def-direct-image-sheaf`, `lem-direct-image-is-sheaf`, `def-inverse-image-presheaf-and-sheaf`,
`lem-stalk-inverse-image-sheaf`, `def-restriction-sheaf-open-subspace`, `def-extension-by-zero-abelian-sheaf`,
`def-sheaf-on-topological-space`, `def-presheaf-on-topological-space`, `def-stalk-of-presheaf`,
`thm-sheaf-morphism-isomorphism-stalkwise`, `thm-exactness-of-sheaves-stalkwise`,
`def-derived-category-of-an-abelian-category`, `def-derived-hom-in-the-bounded-setting`,
`def-canonical-truncation-of-a-complex`, `thm-canonical-truncations-fit-a-distinguished-triangle`,
`thm-the-derived-category-inherits-a-triangulated-structure`,
`def-geometric-realization-of-an-abstract-simplicial-complex`,
`def-simplicial-subcomplex-star-closure-and-link`, `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`,
`cor-kunneth-over-a-field`, `def-cochain-complex-in-an-abelian-category`,
`def-direct-sum-total-complex-of-a-double-complex`, `lem-the-total-differential-squares-to-zero`,
`thm-the-cohomological-filtered-complex-construction`,
`thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective`,
`thm-injective-complexes-model-the-bounded-below-derived-category`, `def-presheaf-of-groups-rings-modules`,
`def-axiom-of-choice`, `lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions`); the seven
in-run suppliers are scaffolded by batches 30 and 32 in this same run (five on
`analytic-constructible-sheaf-foundations` — `lem-field-module-sheaves-have-injective-derived-models`,
`lem-finite-poset-diagrams-have-bounded-finite-bar-models`,
`lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology`,
`def-locally-constant-sheaf-of-finite-rank`,
`def-algebraically-constructible-complex-of-analytic-field-sheaves` — and two on
`compact-support-sheaf-calculus`, `lem-c-soft-field-sheaves-are-compact-support-acyclic` and
`def-compactly-supported-global-sections`; their current statements were read from the batch manifests). No dependency is homed later than order 1805; there is no cycle, no
forward reference and no B-leaf target. In-run levels are 9, 9 (A) and 10 (B) and equal the computed
levels (`node tools/item-dependency-levels.mjs check --run …` reports no finding for this batch).
The two items that could have triggered a same-run escalation — the parallel-transport triviality of
a locally constant sheaf on a contractible simplex, and the closed-pushforward exactness/injectivity
preservation — are proved inline in the strategies (they are elementary and short), so no new pair
and no page split is required; this matches the drift review's "declared closure complete".

## Source work (fetched and inspected, not snippets)

`source-fetch-check --stamp` fetched and stamped **4/4** source instances (2 distinct URLs on the A
page, the same two on the B page). Check mode: `4/4 source(s) fetch-verified`, `4/4 resolved (0
documented drops)`. The two treatments are:

- **Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026**
  (complete 168-page set; `sha256_16 dfd4e0721c8c2e31`, byte-identical to the cached copy recorded in
  the constructible packet). Read/sections inspected in this dispatch: §1(d) (local systems), §2.1–2.3
  (definition of simplicial sheaves, leaf-space realization, cohomology by r-chains), §2.5–2.8
  (elementary injectives $I_\sigma$ and projectives $P_\sigma$, injective resolutions and cohomology as
  sections of a resolution), §3.1–3.3 (hypercohomology, quasi-isomorphisms), §32.2–32.3 (simplicial
  derived category, the equivalence $D^b(\mathrm{Sh}^\Delta_K)\to D^b_c(K)$, canonical injective
  resolution by flags, local calculations). The wider ranges recorded in the constructible packet
  (§§4.1–4.4, §§9.1–9.2, §32.1) were read by the carrier author; this dispatch inspected their
  headings and the passages above.
- **Bernstein–Lunts, Equivariant Sheaves and Functors, Part I** (complete part, 66 pages;
  `sha256_16 d5c84bf06367288d`, byte-identical to the cached copy). Read/sections inspected: §1.9.1–1.9.4
  (n-acyclic maps, the equivalence $f^*:D^I(Y)\to D^I(X|Y)$, the local-section base-change lemma, the
  Vietoris–Begle criterion) with Appendix A2–A4 (their proofs); §2.1–2.5.2 (resolution categories,
  fibered description, triangulated structure); Appendix B1–B6 (simplicial description of $D^b(X)$,
  the Cartesian subcategory, and $D^b_{eq}([G\backslash X]_\bullet)\simeq D^b_G(X)$ via the free case
  and an ∞-acyclic resolution); §3.1–3.2 and §5.1–5.2 headings (deferred).

Every harvested heading received a disposition in
`research/frontier-44-special-representation-examples-28-batch-36.coverage.json`
(26 harvested results: 21 on the A page, 5 on the B page; 0 errors; 1 advisory warning). The warning
is `coverage-low-yield` on the A page (2 of 21 harvested results are separately scaffolded there,
because the two planned supplier lemmas absorb the simplicial-sheaf, injective-model, cohomology-model
and derived-equivalence material inline; the plan-spec prescribes exactly these two A items and one
B example). The Goresky local-system, constructibility and cellular-perverse headings are disposed to
`analytic-constructible-sheaf-foundations` (deferred), the equivariant headings to
`equivariant-constructible-perverse-foundations` (deferred), and the cellular perverse/Vietoris–Begle
headings out of scope with written reasons. No source needed a drop and no `source_resolution` record
was created.

## Cross-batch dependencies

Owned consumer input `research/frontier-44-special-representation-examples-28-batch-36.cross-batch-dependencies.json`
carries **10 rows** (2 page edges to `analytic-constructible-sheaf-foundations` (batch 30) and
`compact-support-sheaf-calculus` (batch 32), and 8 item edges: the six L1 suppliers of batches 30/32
and the two L2 suppliers of batch 30), each `verified` at declaration level with the exact used claim,
hypotheses and the note that the suppliers' authored proofs are still owed to Steps 3–5, where the
uses must be rechecked. `frontier-dependency-ledger.mjs refresh --run …` records batch 36 as reviewed,
no orphaned review names a batch-36 item, and the unified ledger carries 14 edges touching batch 36:
the 10 above plus 4 page edges where batch 36 is the **supplier** (consumers
`complex-algebraic-stratified-topology`, `analytic-derived-six-operations-and-duality`,
`equivariant-constructible-perverse-foundations`, `proper-cohomological-descent-and-constructible-hypercovers`).
Those four consumer rows are owned by those batches, are currently unreviewed because their manifests
are still stubs, and are listed here for the Step-8 reconciler; the plan-spec also declares literal
item consumers of both A lemmas on `complex-algebraic-stratified-topology`, whose owner must check the
actual uses after scaffolding. The appended section of `briefs/tasks/frontier-dependency-ledger.md`
records this state.

## Published defects

None found. All published suppliers used here were read on disk and their statements, hypotheses and
directions match the uses (in particular the closed-immersion cohomology comparison for closed
subsets, the pushforward criterion for sheaves with vanishing stalks off a closed subset, the
cohomology-as-derived-morphisms identification, and Künneth over a field). No published repair was
needed and no defect row is entered for the canonical ledger. No published item is consumed to prove
its own replacement, and neither page reaches `deferred-set-theory-beyond-choice` through any proof
or prerequisite path (`validate-plan --run` rule 19 reports no finding).

## Findings belonging to other batches (reported, not repaired here)

- The run-wide dependency-level check reports `empty scaffold inventory` for the sibling batches whose
  scaffolds were still pending at this writing (32 page rows at the final run; the count moves as sibling
  writers work). Those belong to other in-flight/stub
  batches.
- `frontier-item-gate --tool extcheck` and `--tool fwdcheck` (item mode) both FAIL at this boundary
  with 555 `focus-item-unknown` errors — the documented Step-1 state: item validators resolve manifest
  IDs through authored item files, which do not exist until Step 3. The three IDs of this batch are
  among them. The manifest-only policy pass below covers the retired external-record fields that exist
  at this boundary; none of this batch's items declares `forward_refs`, `proved_here`, `external_refs`
  or `external_dependency`.
- The four page-level consumer edges on this page (listed above) are future obligations owned by
  batches 37–40 etc., not current defects.

## Checks (actual results)

- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  — no label, shape or cycle error for any populated batch; the only findings are `empty scaffold
  inventory` for sibling stub batches. This batch's three labels equal the computed levels (9/9/10).
- `node tools/manifest-deps.mjs research/…-batch-36.pages.json` — `manifest-deps: 3 item(s), 0
  normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/…-batch-30.pages.json research/…-batch-32.pages.json research/…-batch-36.pages.json`
  — `content-policy: 21 scoped item(s), 0 error(s), 0 warning(s)`. Whole run:
  `content-policy: 639 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/…-batch-36.coverage.json --require-destination` —
  `coverage-checklist: 2 page(s), 26 harvested result(s), 0 error(s), 1 warning(s)` (the advisory
  `coverage-low-yield` on the A page explained above).
- `node tools/source-fetch-check.mjs --coverage research/…-batch-36.coverage.json --stamp` —
  `4/4 source(s) fetch-verified (4 newly stamped)`; check mode `4/4 source(s) fetch-verified`,
  `4/4 resolved (0 documented drops)`.
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28`
  — 0 errors. No `b-leaf`, `undeclared-prereq`, `resolve`, `intra-order`, `forward-ref`, `orphan` or
  page-scope finding involves either batch-36 page. The page keeps the pre-existing plan-level
  advisory `redundant-prereq` (`relations-functions-and-quotients` is reached transitively through
  four of the declared `requires`); the plan, the batch task and the plan-spec all declare the same
  five-element `requires`, so it was preserved unchanged and is recorded for the Step-4 reconciler.
- `node tools/step1-decisions.mjs check --run frontier-44-special-representation-examples-28` — after
  the three records: `639 items, 638 ready, closed: false` run-wide at the latest run; the ready count continued to move
  (637-638) as sibling batches registered further records during the same session — the counts move as
  sibling batches write concurrently, and sibling batches still lack inventories/records; the work list contains
  **zero** rows for any batch-36 item in every run, i.e. all three records are current against the
  written manifest.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28`
  — `refreshed and deduplicated`; batch 36 reviewed, 10 owned rows, no orphaned review naming a
  batch-36 item.

## Step-1 decisions

All three items were recorded `ready` one at a time in prerequisite order with the examined dependency
IDs and the evidence above: `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`,
`lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`,
`ex-incidence-model-of-a-closed-interval`. Owner/operator reconciliation and the engine's Step-1 gate
follow; a readiness record is not independent mathematical approval (Step 3 provides that review).

## Residual risks for the Step-3 author

- L1 Step 1: the parallel-transport triviality of a locally constant sheaf of finite rank on the
  contractible, simply connected open simplices must be written out (well-definedness on paths via
  simple connectivity, transitivity, and the stalkwise isomorphism criterion); it is the only use of
  simple connectivity on the page.
- L1 Steps 2/4: the finite-poset bar models must be used for both the injective resolutions of the
  diagrams and the explicit projective (representable) resolution whose evaluation fixes the matrix
  complex; the dualization between the two conventions should be stated.
- L1 Step 7: the local product comparison is the longest technical step (tensor product of resolutions,
  acyclicity of product cells, identification of the cochain complex as a tensor product, unit and
  cone bound). `cor-kunneth-over-a-field` is the declared algebraic supplier; the polyhedral acyclicity
  comes from the constant-polyhedral comparison.
- L2: the vertex-zero contracting homotopy and the finite-diagonal argument for the augmentation
  spectral sequence must be written, not cited; the Cech-specific step must use the local sections
  explicitly (Bernstein–Lunts §1.9.3). The general total model must not be advertised as proper
  hypercover descent.
- L2: the declared-but-not-visibly-used `thm-extension-by-zero-adjunction-exactness` must be either
  used explicitly or recorded as an unused declared input (see conflict 3).
- Conventions: the plan titles use ASCII "Cech" while the carriers use "Čech"; the manifest keeps the
  plan titles. Künneth and the filtered-complex construction use the library's cohomological
  conventions; the carrier's homological double-complex phrasing must be translated carefully.

## Owner downstream integration update

After native writer drain, inherited AC is now explicit in interval B Statement/deps. The full computation remains unchanged. Same original reviewer checked all6actualtransitive consumers of the repaired native30Definition and found no further focused defect. Exact afterhash/consumer evidence: research/frontier-44-special-representation-examples-28-klr-foundation-constructible-native36-consumer/final-consumer-closure-round1.json. Normal scaffold readiness rebound; no authored-proof audit or gate pass. Historical native source reading/checks above retained.
