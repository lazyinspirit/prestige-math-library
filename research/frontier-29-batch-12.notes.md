# frontier-29 · Beta · batch-12 notes — `simplicial-complexes-and-simplicial-homology`

Run `frontier-29`, batch `12`, one A/B pair, category `algebraic-topology`.
Author: Beta. Session date: Tuesday, September 1, 2026.

Artifacts owned by this dispatch:

- `research/frontier-29-batch-12.pages.json`
- `research/frontier-29-batch-12.coverage.json`
- this file

Per the dispatch, I did not edit workflow state, another batch artifact,
published content, or plan structure outside batch `12`.

## 1. Outcome

The pair is now scaffolded with:

- A page `simplicial-complexes-and-simplicial-homology`: **30 items**
- B page `simplicial-complexes-and-simplicial-homology-examples`: **9 items**

No split is needed. The A page stays well below the hard 60-item ceiling.

The route follows the design literally where it matters:

1. abstract simplicial complexes first, not delta-complexes
2. intrinsic geometric realization before simplicial maps and chains
3. orientations and boundary signs before homology
4. induced maps, contiguity, and the simplex contraction before `H_0`,
   disjoint unions, and Euler-Poincare

No forward references or external fallbacks are planned. B-page items depend
only on A-page or published A-page items, or are standalone leaves.

## 2. Control Files And Live Run Context

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated batch
task `research/frontier-29-beta-12.task.md`, the dispatch prompt
`research/frontier-29-dispatch/beta-batch-12.prompt.md`, the seed manifest
`research/frontier-29-batch-12.pages.json`, the live plan entry in
`research/plan-spec.json`, the run note `research/frontier-29-step0-notes.md`,
and the cited design block in `research/plan-algebraic-topology-track.md`.

Per `AGENTS.md`, I also checked the live controller and recent history from
disk rather than trusting older resume prose:

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  reports live run `frontier-23` at stage `5-author`.
- `git log --oneline --decorate -5 -- .autopilot research/frontier-29-batch-12.pages.json research/frontier-29-dispatch/beta-batch-12.prompt.md`
  shows no batch-local workflow override on disk.

That is context to record, not something this batch is allowed to repair.

## 3. Design Control And Drift

### Controlling design material

The dispatch points to:

- `research/plan-algebraic-topology-track.md:336`
- `research/plan-algebraic-topology-track.md:382`

These are not competing amendments. Line `336` starts the full `AT-1` block,
and line `382` is the B-page subsection inside that same block. I therefore
treated the full `AT-1` section beginning at line `338` as controlling, with
the later line `382` read as part of the same control text rather than as a
rival source.

### Design-vs-spec prerequisite drift

There is a real prerequisite conflict:

- the design says `subspaces-products-and-quotients`,
  `free-modules-and-exact-sequences`, and
  `chain-complexes-and-homology`
- the live spec and the batch manifest say only
  `schur-multipliers-and-universal-central-extensions-examples`

Per the dispatch, I did not adjudicate that conflict locally. The scaffold
follows the current spec and records the disagreement here for the run-wide
drift machinery.

### Small design-normalization choice

The design's item
`def-locally-finite-and-finite-dimensional-simplicial-complex` explicitly warns
that finite dimension is separate from having finitely many simplices, while the
same A page later uses the phrase "finite simplicial complex." Rather than mint
a redundant extra definition, I expanded that item's title/payload to carry all
three notions: local finiteness, finiteness, and finite dimensionality.

## 4. Proposed Page Summaries

### `simplicial-complexes-and-simplicial-homology`

This page fixes the library's simplicial convention at the abstract level:
faces are vertex-determined, the empty face is present, and delta-complexes are
not silently substituted in. From there it builds the intrinsic barycentric
realization, simplicial maps, orientations, simplicial chains, reduced
homology, induced maps, contiguity, the simplex contraction, the `H_0`
component calculation, disjoint-union splitting, and the simplicial
Euler-Poincare formula.

The page does not jump ahead to singular chains, simplicial approximation, or
the simplicial-singular comparison theorem. Those are recorded in the harvest
but routed to later pages when they appear in the sources.

### `simplicial-complexes-and-simplicial-homology-examples`

The examples page keeps the low-dimensional calculations concrete: a point, an
edge, a triangle boundary, a tetrahedron boundary, a contractible cone,
contiguous maps on a subdivided interval, a circle with Euler characteristic
zero, the failure of an arbitrary vertex map to be simplicial, the separation
between finite dimension and local finiteness, and the efficient delta-complex
torus model that the A page intentionally does not adopt as its foundational
language.

## 5. Exact Item Inventory

### A page — 30 items

1. `def-abstract-simplicial-complex`
2. `def-simplicial-subcomplex-star-closure-and-link`
3. `def-locally-finite-and-finite-dimensional-simplicial-complex`
4. `def-geometric-simplex-spanned-by-affinely-independent-vertices`
5. `lem-barycentric-coordinates-are-unique`
6. `def-geometric-realization-of-an-abstract-simplicial-complex`
7. `lem-geometric-simplices-intersect-in-the-realization-of-their-common-face`
8. `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`
9. `def-simplicial-map-and-its-geometric-realization`
10. `lem-the-realization-of-a-simplicial-map-is-continuous-and-functorial`
11. `def-orientation-of-a-simplex`
12. `lem-an-odd-permutation-reverses-oriented-simplex-sign`
13. `def-simplicial-chain-groups-and-boundary`
14. `lem-simplicial-boundary-is-independent-of-oriented-representative`
15. `thm-the-simplicial-boundary-squares-to-zero`
16. `def-simplicial-cycles-boundaries-and-homology`
17. `def-augmentation-and-reduced-simplicial-homology`
18. `lem-the-simplicial-augmentation-is-a-chain-map`
19. `def-induced-simplicial-chain-map`
20. `lem-induced-simplicial-chain-maps-commute-with-boundaries`
21. `prop-simplicial-homology-is-functorial`
22. `def-contiguous-simplicial-maps`
23. `lem-contiguous-simplicial-maps-have-homotopic-realizations`
24. `thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology`
25. `lem-the-augmented-simplicial-chain-complex-of-a-simplex-is-contractible`
26. `cor-the-simplex-has-zero-reduced-simplicial-homology`
27. `prop-zero-th-simplicial-homology-is-free-on-connected-components`
28. `prop-simplicial-homology-of-a-disjoint-union-is-the-direct-sum`
29. `def-simplicial-euler-characteristic`
30. `thm-euler-poincare-formula-for-a-finite-simplicial-complex`

### B page — 9 items

1. `ex-simplicial-homology-of-a-point-and-an-edge`
2. `ex-boundary-of-a-triangle-has-first-homology-z`
3. `ex-simplicial-homology-of-the-tetrahedron-boundary`
4. `ex-a-contractible-simplicial-cone`
5. `ex-two-contiguous-maps-of-a-subdivided-interval`
6. `ex-a-finite-complex-with-euler-characteristic-zero`
7. `cex-a-vertex-map-need-not-be-simplicial`
8. `cex-finite-dimensional-does-not-imply-finite-or-locally-finite`
9. `ex-a-delta-complex-structure-on-the-torus`

## 6. Sources Actually Read

I harvested one textbook treatment and one independent full lecture-note
treatment, split across Nanda's Week 1-3 PDFs because the course distributes
them that way:

1. Allen Hatcher, *Algebraic Topology*:
   `https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf`
2. Vidit Nanda, *Computational Algebraic Topology*, Lecture 01:
   `https://people.maths.ox.ac.uk/nanda/cat/Lecture%2001%20Complexes.pdf`
3. Vidit Nanda, *Computational Algebraic Topology*, Lecture 02:
   `https://people.maths.ox.ac.uk/nanda/cat/Lecture%2002%20Homotopy.pdf`
4. Vidit Nanda, *Computational Algebraic Topology*, Lecture 03:
   `https://people.maths.ox.ac.uk/nanda/cat/Lecture%2003%20Homology.pdf`

I also opened the Nanda course landing page
`https://people.maths.ox.ac.uk/nanda/cat/` to confirm the table of contents and
the Week 1/2/3 split, but I did not record that page as a coverage source
because it is not the full mathematical text.

### Source roles

- Hatcher is the qualifying primary treatment: it gives the canonical textbook
  route and the explicit delta-complex torus example.
- Nanda is the second independent full treatment: it gives the abstract
  simplicial-complex convention directly, plus contiguous maps and the Week 3
  homology definitions.

### URL handling

The coverage file carries honest fetch receipts for all four recorded source
URLs:

- the Hatcher URL reuses the exact `fetch_verified` block already present on
  disk for the same `AT%2B.pdf` URL
- each Nanda Week 1/2/3 PDF was re-opened in the web reader on Tuesday,
  September 1, 2026 and therefore carries a manual PDF/page-count receipt in
  the batch coverage rather than a fabricated shell-side byte/hash stamp

This is why `source-fetch-check` in check mode passes on the current bytes even
though runner-local DNS is unavailable for fresh shell fetches.

### What each source is doing

- Hatcher is used for the delta-complex seam, reduced homology paragraph,
  `H_0`, componentwise direct sums, and the later simplicial-approximation seam.
- Nanda Week 1 is the main source for abstract simplicial complexes,
  realizations, simplicial maps, stars, links, and cones.
- Nanda Week 2 is the main source for contiguity and the cone-as-contractible
  example, while its carrier machinery is explicitly declined.
- Nanda Week 3 is the main source for Euler characteristic, orientations,
  boundaries, chain groups, homology, and the low-dimensional worked examples.

## 7. Key Route Choices And Dependency Rationale

- **Abstract, not delta-complex, foundations.** The design's trap is real.
  Hatcher's delta-complex language is not silently substituted into AT-1. The
  only live delta-complex item is the B-page torus example.
- **Intrinsic realization.** The realization is scaffolded by barycentric
  functions on the vertex set, not by committing the page to one affine
  embedding. Nanda's embedding-independence proposition is therefore recorded as
  a conscious non-item, not quietly imported.
- **Topological seams remain published.** The page reuses the published topology
  interface for product/subspace topology, homotopy, connected components,
  Heine-Borel compactness, and Hausdorff separation.
- **Homological algebra seams remain published.** The page reuses the published
  chain-complex interface for homology quotients, induced maps on homology,
  chain homotopy, contractible complexes, and the finite-free Euler-Poincare
  theorem.
- **No false source attribution.** Three items are intentionally treated as
  locally specialized consequences rather than source-named theorems:
  `prop-simplicial-homology-is-functorial`,
  `prop-simplicial-homology-of-a-disjoint-union-is-the-direct-sum`, and
  `thm-euler-poincare-formula-for-a-finite-simplicial-complex`. Their route is
  honest: harvested simplicial definitions plus published homological-algebra
  theorems.
- **`H_0` is kept simplicial, not singular.** Hatcher's singular `H_0`
  proposition is used as an independent route check, but the scaffolded item is
  the simplicial statement and its proof route is combinatorial.

## 8. Coverage And Scope Notes

The coverage harvest records four source entries for the single A page. Their
declines are deliberate and should survive Alpha review:

- Hatcher's broader delta-complex development is declined from the A page
  because the design fixed abstract simplicial complexes as foundational.
- Hatcher's singular-homology homotopy-invariance theorems are deferred to
  `singular-chains-and-singular-homology`.
- Hatcher's Theorem 2C.1 is deferred to
  `orientations-poincare-lefschetz-and-alexander-duality`, where the live plan
  already homes `thm-simplicial-approximation-after-sufficient-subdivision`.
- Nanda's carrier language and carrier lemma are out of scope because this pair
  takes the direct simplexwise homotopy route for contiguity and no later
  planned AT page currently claims carriers or nerves as a primary scaffold.

No result was declined merely because it needed a local lemma that this pair
could have built. The boundary-independence, induced-map, simplex-contraction,
component, and Euler-Poincare seams are all scaffolded locally.

## 9. Published Dependencies Opened On Disk

I opened and checked the published pages or items actually carrying the reused
interfaces:

- `library/homological-algebra/chain-complexes-and-homology.md`
- `library/homological-algebra/chain-homotopy-and-the-homotopy-category.md`
- `items/def-product-topology.md`
- `items/def-subspace-topology-top.md`
- `items/def-homotopy-relative-and-path-homotopy.md`
- `items/def-homotopy-equivalence.md`
- `items/def-nullhomotopic-map-and-contractible-space.md`
- `items/def-connected-component-and-quasicomponent.md`
- `items/thm-heine-borel-rn.md`
- `items/thm-metric-hausdorff-separation.md`

This is enough for the scaffold's declared proof routes. I did not identify any
need for a `proved_here: false` boundary item.

## 10. Validation

- `node -e "JSON.parse(...)"` on `research/frontier-29-batch-12.pages.json`
  and `research/frontier-29-batch-12.coverage.json`: **PASS**
- `node tools/coverage-checklist.mjs research/frontier-29-batch-12.coverage.json --require-destination`:
  **PASS** — `1 page(s), 50 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-12.coverage.json`:
  **PASS** — `4/4 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`:
  **PASS** — `252 scoped item(s), 0 error(s), 0 warning(s)`
- temporary merged-plan validation:
  `node tools/validate-plan.mjs /tmp/frontier-29-batch-12.merged-plan.json`:
  **PASS** — exit `0`; only the repository's standing out-of-batch
  `redundant-prereq` warnings were reported
- `git diff --check -- research/frontier-29-batch-12.pages.json research/frontier-29-batch-12.coverage.json research/frontier-29-batch-12.notes.md`:
  **PASS**
- `node tools/url-sweep.mjs --coverage research/frontier-29-batch-12.coverage.json --out /tmp/frontier-29-batch-12-url-liveness.json --recover --fail-on-dead`:
  **FAIL** — `0/4 live; 4 failed; 0 recoverable from the archive`

The `url-sweep` failure is runner-local DNS, not a source-specific dead-link
finding. The exact shell errors were:

- `Could not resolve host: people.maths.ox.ac.uk` for all three Nanda PDFs
- `Could not resolve host: pi.math.cornell.edu` for Hatcher

Independently of that shell-side liveness failure, the same four source URLs
were re-opened through the web reader while preparing this scaffold, so the
coverage harvest itself remains fetch-verified. The unresolved blocker is that
the shell gate cannot confirm liveness from this environment.

## 11. Open Risks

- The weakest source-backed seam is Euler-Poincare: the local simplicial theorem
  is a specialization of the already-published finite-free theorem rather than a
  source-named theorem in Hatcher or Nanda's exact read ranges. This is
  deliberate and should be defended as a no-false-attribution choice.
- The other challengeable seam is the component statement in `H_0`: the title
  names connected components, while the proof route is through edge-path
  components plus the realization argument that every point lies in the same
  component as some vertex of its simplex. That equivalence needs to stay
  explicit at authoring time.
- The only live gate blocker is `url-sweep` under runner-local DNS failure. No
  source replacement is justified on the mathematics: the recorded URLs were
  re-opened outside the shell and the exact same texts were read. What remains
  blocked is the shell environment's network layer, not the harvest itself.

## Step-3 fix pass

- Finding set used: `research/frontier-29-alpha-d-step3-scaffold-review.md`,
  as directed by the batch-12 fix dispatch. The generic
  `research/frontier-29-scaffold-closure.json` file named in the reusable brief
  is not present on current disk.
- Batch-12 finding ids: none. The alpha-d review's findings table contains only
  `D17-1`, and its batch-12 page review explicitly marks
  `simplicial-complexes-and-simplicial-homology` sufficient.
- Disposition: no batch-12 scaffold repair applied.
- Evidence: alpha-d review, `## Findings`, lists no batch-12 row; alpha-d
  review, `### simplicial-complexes-and-simplicial-homology`, states
  `**Verdict:** sufficient`.
- Changed scaffold record: none. This pass leaves
  `research/frontier-29-batch-12.pages.json` and
  `research/frontier-29-batch-12.coverage.json` unchanged.

## Step-5 authoring

Authoring date: Wednesday, September 2, 2026 (Australia/Sydney).

Artifacts authored in this step:

- `library/algebraic-topology/simplicial-complexes-and-simplicial-homology.md`
- `library/algebraic-topology/simplicial-complexes-and-simplicial-homology-examples.md`
- `research/frontier-29-batch-12.proof-contracts.json`

Authored item ids on the A page:

- `def-abstract-simplicial-complex`
- `def-simplicial-subcomplex-star-closure-and-link`
- `def-locally-finite-and-finite-dimensional-simplicial-complex`
- `def-geometric-simplex-spanned-by-affinely-independent-vertices`
- `lem-barycentric-coordinates-are-unique`
- `def-geometric-realization-of-an-abstract-simplicial-complex`
- `lem-geometric-simplices-intersect-in-the-realization-of-their-common-face`
- `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`
- `def-simplicial-map-and-its-geometric-realization`
- `lem-the-realization-of-a-simplicial-map-is-continuous-and-functorial`
- `def-orientation-of-a-simplex`
- `lem-an-odd-permutation-reverses-oriented-simplex-sign`
- `def-simplicial-chain-groups-and-boundary`
- `lem-simplicial-boundary-is-independent-of-oriented-representative`
- `thm-the-simplicial-boundary-squares-to-zero`
- `def-simplicial-cycles-boundaries-and-homology`
- `def-augmentation-and-reduced-simplicial-homology`
- `lem-the-simplicial-augmentation-is-a-chain-map`
- `def-induced-simplicial-chain-map`
- `lem-induced-simplicial-chain-maps-commute-with-boundaries`
- `prop-simplicial-homology-is-functorial`
- `def-contiguous-simplicial-maps`
- `lem-contiguous-simplicial-maps-have-homotopic-realizations`
- `thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology`
- `lem-the-augmented-simplicial-chain-complex-of-a-simplex-is-contractible`
- `cor-the-simplex-has-zero-reduced-simplicial-homology`
- `prop-zero-th-simplicial-homology-is-free-on-connected-components`
- `prop-simplicial-homology-of-a-disjoint-union-is-the-direct-sum`
- `def-simplicial-euler-characteristic`
- `thm-euler-poincare-formula-for-a-finite-simplicial-complex`

Authored item ids on the B page:

- `ex-simplicial-homology-of-a-point-and-an-edge`
- `ex-boundary-of-a-triangle-has-first-homology-z`
- `ex-simplicial-homology-of-the-tetrahedron-boundary`
- `ex-a-contractible-simplicial-cone`
- `ex-two-contiguous-maps-of-a-subdivided-interval`
- `ex-a-finite-complex-with-euler-characteristic-zero`
- `cex-a-vertex-map-need-not-be-simplicial`
- `cex-finite-dimensional-does-not-imply-finite-or-locally-finite`
- `ex-a-delta-complex-structure-on-the-torus`

Provenance rationale actually used:

- Foundational definitions and standard named simplicial results were tagged
  `statement: literature-derived`.
- The connector statements assembled locally from the existing homological
  algebra layer or from batch-local specialization were tagged
  `statement: ai-altered`: `prop-simplicial-homology-is-functorial`,
  `prop-simplicial-homology-of-a-disjoint-union-is-the-direct-sum`,
  `thm-euler-poincare-formula-for-a-finite-simplicial-complex`,
  `ex-two-contiguous-maps-of-a-subdivided-interval`,
  `ex-a-finite-complex-with-euler-characteristic-zero`, and
  `cex-a-vertex-map-need-not-be-simplicial`.
- Authored proof bodies with numbered steps were tagged `proof: ai-generated`.
- Definitions were tagged `proof: not-applicable`.

Well-definedness and contract notes:

- `def-simplicial-chain-groups-and-boundary` uses `justified_by` to record the
  boundary well-definedness discharge by
  `lem-simplicial-boundary-is-independent-of-oriented-representative`.
- No `forward_refs`, `external_refs`, or `proved_here: false` fallbacks were
  needed in this batch.
- The proof-contract file scopes exactly the 17 A-page items with numbered proof
  sections. The B-page items are written as established examples/counterexamples
  in prose rather than phase-format proof items.

Narrowed or dropped claims:

- Narrowed: `thm-euler-poincare-formula-for-a-finite-simplicial-complex` now
  explicitly assumes each simplicial homology group is free of finite rank.
  This keeps the statement honest against the exact currently published
  dependency `thm-euler-poincare-formula-for-finite-free-complexes`.
- Dropped claims: none.

Checks run in this authoring step:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-12 item files...`:
  **PASS** — `17 checked, 0 failing — all clean`.
- `node tools/validate-plan.mjs research/plan-spec.json`:
  **PASS** — exit `0`; only standing repository-wide `redundant-prereq`
  warnings were reported.
- `node tools/content-policy.mjs research/frontier-29-batch-12.pages.json`:
  **PASS** — `39 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/proof-contract.mjs research/frontier-29-batch-12.proof-contracts.json --strict`:
  **PASS** — `17/17 item(s) checked`.
- `git diff --check`: **PASS**.

Blockers:

- None in Step 5. The batch authored cleanly after precheck-normalization of
  proof-row numbering and paragraph layout.
