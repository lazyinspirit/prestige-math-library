# Step 3a scope review — `ordered-and-unordered-configuration-spaces`

- Run: `frontier-35-ten-categories` · role alpha · dispatch
  `step3a-pair-ordered-and-unordered-configuration-spaces-4016d04af793a0e7`
- A page: `ordered-and-unordered-configuration-spaces` (order 731, `braid-groups`)
- B page: `ordered-and-unordered-configuration-spaces-examples` (order 732)
- Batches: 16. Owned pair only; no other pair in the shared batch files was touched.
- Decision: **sufficient** (recorded as the Step 3a review receipt for the A page).

Scope only. This report does not judge proof correctness, does not approve any
item, and writes no owner record.

## Inputs read

- `research/frontier-35-ten-categories-batch-16.pages.json` (both pages of the pair),
  `…-batch-16.coverage.json`, `…-batch-16.notes.md`,
  `…-batch-16.cross-batch-dependencies.json`.
- Prose design: `research/plan-braid-groups-track.md` BG-2 A at line 229 and
  BG-2 B at line 251 (the controlling design; read in full), plus BG-3 (L262),
  BG-5 (L333) and BG-10 (L511) as the deferral destinations and consumers.
- `research/plan-spec.json` rows for both pages; `research/frontier-35-ten-categories-owner-authoring-direction.md` (no braid-group direction that overrides the design).
- Published suppliers in `items/` for every declared dependency id.

Design/plan control: the BG-2 A table controls mathematical scope and proof
route; the following BG-2 B table controls the examples page; the current plan
controls page id, title, order, category, companion and `requires`. All six
fields agree with the manifest for both pages, so there is no design/plan
conflict to reconcile.

## Design ↔ scaffold conformance

Every design item is present, with the design's content and conventions:

| design item | manifest item | note |
|---|---|---|
| ordered configuration space, fixed ordered base configuration | `def-ordered-configuration-space` | adds `n≥0`, `F_0(X)` a point |
| coordinate-permutation action is continuous and free | `prop-the-symmetric-group-acts-freely-on-ordered-configurations` | left-action convention fixed |
| unordered quotient with orbit basepoint | `def-unordered-configuration-space` | |
| disjoint coordinate disks give the `n!` sheets | `lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations` | Hausdorff hypothesis stated |
| connected-manifold cover, deck group `S_n`, path-connectedness | `thm-ordered-configurations-cover-unordered-configurations-regularly` | strengthened to manifolds possibly with boundary, `d≥2` — required by the closed-disk model |
| `PB_n = π₁(F_n(D²),q)` | `def-pure-braid-group-from-ordered-configurations` | |
| `B_n^conf = π₁(C_n(D²),[q])` | `def-braid-group-from-unordered-configurations` | decoration retained until BG-3 |
| endpoint monodromy `B_n^conf → S_n` | `def-endpoint-monodromy-of-a-configuration-loop` | inverse-endpoint convention fixed to the published right monodromy action |
| `1 → PB_n → B_n^conf → S_n → 1` | `thm-configuration-braid-pure-braid-short-exact-sequence` | surjectivity by adjacent half twists, not by later pages |
| local triviality of `F_{m+n}(M) → F_m(M)` | `lem-forgetting-configuration-points-is-locally-trivial` | boundaryless locally Euclidean `M`, `d≥2` |
| Fadell–Neuwirth bundle, disk case numerable/Hurewicz | `thm-fadell-neuwirth-forgetful-fibration` | AC declared for the Hurewicz upgrade only |
| — | `lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent` | justified addition: bridges the closed-disk group model to the boundaryless fibration; equivariant radial homotopy, quotient-compatible |

B page: the four design examples are present verbatim in intent
(`ex-two-point-ordered-configurations-of-the-plane`,
`ex-the-two-point-unordered-cover-and-its-monodromy`,
`cex-collisions-destroy-freeness-of-coordinate-permutation`,
`cex-the-ordered-to-unordered-two-point-quotient-is-not-one-to-one`), each with a
source reference and a proof route. No B item is consumed by any other page
(B pages are leaves), and no A item depends on a B item.

No design item is dropped and no claim is weakened. The one addition is
load-bearing (without it the closed-disk definitions and the boundaryless
fibration are not comparable) and stays inside the page's subject.

## Source coverage

Three primary sources, all live and fetch-verified in the coverage file
(`coverage-checklist.mjs` re-run by me: 2 pages, 42 harvested results, 0 errors,
0 warnings).

1. González-Meneses, *Basic results on braid groups* (arXiv:1010.0321). I
   re-fetched the PDF: 474454 bytes, 45 pages, sha256 prefix
   `8fef987df3601d1e` — byte-identical to the recorded stamp. I read the
   covered sections directly from the PDF text:
   - §1.1 printed pp. 3–4: `M_n = ℂ^n \ 𝒟`, Definition 1.1 `PB_n = π₁(M_n)` → `def-ordered-configuration-space`, `def-pure-braid-group-from-ordered-configurations`.
   - §1.3 printed p. 5: `N_n = M_n/Σ_n`, Definition 1.2 `B_n = π₁(N_n)` → `def-unordered-configuration-space`, `def-braid-group-from-unordered-configurations`.
   - §2.1 printed pp. 11–13: equation (2.1) `1 → PB_n → B_n → Σ_n → 1`; Theorem 2.1 (`p: M_{n+1}→M_n` forgetting the last point is a locally trivial fiber bundle, cross-section `|z_1|+···+|z_n|+1`); equation (2.2) `1 → F_n → PB_{n+1} → PB_n → 1` with its splitting; Theorem 2.2 (`M_n`, `N_n` are `K(π,1)` spaces).
   - Locators in the coverage file ("pp. 3–6, 11–13") agree with the paper's own
     table of contents (1.1→3, 1.2→4, 1.3→5, 2→11, 2.1→11).
   - Deferrals are real and land on planned pages: §1.2 labelled strands →
     BG-3 (which has the trace/slice items); (2.2) splitting and Theorem 2.2
     asphericity → BG-5 (which has `cor-the-pure-braid-extension-splits`,
     `thm-pure-braid-forgetting-a-strand-short-exact-sequence`,
     `thm-ordered-planar-configuration-spaces-are-aspherical`,
     `cor-unordered-planar-configuration-spaces-are-aspherical`).
2. Fadell–Neuwirth, *Configuration Spaces* (1962). **Honest limitation:** the
   official scan is an image-only PDF (8 CCITTFax page images, no text layer)
   and this session has no OCR or image-view capability, so I could not read
   the original statements myself; my check is the recorded visual inspection
   in the coverage file plus an independent restatement of the theorem I did
   fetch (University of Michigan summer-school notes: forgetting a point,
   `Conf_{k+1}(M) → Conf_k(M)`, is a locally trivial fibre bundle with fibre
   `Conf_k(M∖{points})`, and `Conf_n → C_n` is an `n!`-sheeted covering with
   discrete fibre `Σ_n`). Those restatements match the two scaffolded claims
   and the coverage dispositions (`included` Theorem 1 local point-moving
   homeomorphism, `included` Theorem 3 retaining several points, `deferred`
   cross-sections and Theorem 2 homotopy corollaries to BG-5, `out-of-scope`
   §III Theorem 4 product criterion).
3. Hatcher, *Algebraic Topology*: §0 homotopy-equivalence definition, used by
   the disk-equivalence lemma; §4.2 paracompact-base strengthening, used inline
   by the Hurewicz upgrade. Coverage also records why Proposition 4.48 alone
   (CW pairs) is not consumed and why the numerable-bundle interface is used
   instead.

No source heading in the covered ranges lacks a disposition, and every
disposition is `included`, `inline`, `deferred` (with destination and reason)
or `out-of-scope` (with reason).

## Dependency records and role in the library

- All 21 external dependency items are **published** (`items/<id>.md`,
  `status: published`), e.g. `thm-path-lifting-for-covering-maps`,
  `thm-covering-maps-inject-fundamental-groups`, `def-regular-covering`,
  `def-monodromy-action-on-a-covering-fibre`,
  `def-locally-trivial-fiber-bundle`,
  `thm-numerable-fiber-bundles-are-hurewicz-fibrations`,
  `cor-metric-spaces-admit-subordinate-partitions-of-unity`, `def-axiom-of-choice`,
  `def-dependent-choice`.
- Each of those items' home pages lies in the transitive closure of the pair's
  declared `requires` (`the-fundamental-group`, `covering-spaces-and-lifting`,
  `fibrations-fiber-bundles-and-homotopy-exact-sequences`,
  `classification-of-covering-spaces`,
  `partitions-of-unity-and-paracompactness`,
  `subspaces-products-and-quotients`); computed closure 143 pages, no
  dependency outside it, so no `undeclared-prereq` exposure.
- `…-batch-16.cross-batch-dependencies.json` records no open or unresolved edge
  for this pair (its rows concern the sibling BG-14 pair only).
- Consumers: `ordered-and-unordered-configuration-spaces-examples` (B),
  `braids-as-fundamental-groups-of-configuration-spaces` (BG-3),
  `pure-braids-fadell-neuwirth-and-asphericity` (BG-5),
  `lawrence-krammer-bigelow-and-linearity` (BG-10). Their designs use the
  unordered/ordered definitions, the regular cover, the endpoint monodromy, the
  short exact sequence and the forgetful bundle — all supplied here. The
  Fadell–Neuwirth splitting, cross-section and asphericity that BG-5/BG-7 need
  are deliberately deferred to BG-5 rather than duplicated.

## Uncertainty and non-blocking observations

- I could not personally read the Fadell–Neuwirth scan (image-only; no OCR in
  this session). Its dispositions are recorded as visually inspected by the
  scaffolder and cross-checked against an independent restatement of the
  bundle theorem; the item-level hypotheses there remain for Step 3b/Step 5 to
  verify against the scan.
- The coverage file does not itemise Corollary 2.4 (torsion-freeness of `B_n`),
  which follows Theorem 2.2 in §2.1. The topic is carried elsewhere in the
  track (BG-5 `thm-pure-braid-groups-are-torsion-free`, BG-7 torsion-freeness
  via the Garside lattice), so this is a granularity observation, not an
  omitted result of this page.
- The B page has four worked items; the design's examples table has exactly
  these four, but none of them illustrates the forgetful bundle. That is a
  richness judgement the owner may revisit later; it is not a missing topic the
  design assigns to the pair, and the pair remains adequate for the documented
  role (`configuration quotients, covering monodromy and pure subgroup`).

## Checks run

- `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-16.coverage.json`
  → 2 page(s), 42 harvested result(s), 0 error(s), 0 warning(s).
- `node tools/step3-decisions.mjs check --run frontier-35-ten-categories --phase scope`
  → pair loads; this page listed as awaiting a current scope review (no owner
  receipt existed for it).
- Printed-page locators and equations (2.1)/(2.2), Theorem 2.1/2.2 verified
  directly in the fetched González-Meneses PDF.

## Decision

**sufficient.** The planned definitions, results and examples cover the intended
subject and role: ordered/unordered configuration spaces with their topology,
the free `S_n` action and quotient, the regular `n!`-sheeted cover with deck
group `S_n`, the configuration-space braid and pure-braid groups on both disk
models, endpoint monodromy and the braid-to-symmetric short exact sequence, and
the Fadell–Neuwirth forgetful bundle with its declared-choice Hurewicz upgrade.
No enrichment or pair merger is required; no owner action is requested. Any
later change to this pair's items, titles or statements changes the Step 3a
scope hash and requires a fresh scope review.
