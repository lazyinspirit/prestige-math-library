# Batch 30 — Thom Spectra and Unoriented Bordism Detection (notes)

Run: `frontier-41-ha-dt-29`. Batch 30 covers exactly one A/B pair.

| | |
|---|---|
| A | `thom-spectra-and-unoriented-bordism-detection` (order 548.5, `algebraic-topology`, 55 items) |
| B | `thom-spectra-and-unoriented-bordism-detection-examples` (order 548.6, 4 examples) |
| A requires | `thom-spaces-normal-data-and-collapse-maps` (published, order 547) |
| B requires | its A companion only |

Outputs owned here: `research/frontier-41-ha-dt-29-batch-30.pages.json`,
`research/frontier-41-ha-dt-29-batch-30.coverage.json`,
`research/frontier-41-ha-dt-29-batch-30.cross-batch-dependencies.json`,
`research/frontier-41-ha-dt-29-batch-30-url-liveness.json`,
`research/frontier-41-ha-dt-29-batch-30-source-fetch-receipt.md`,
`research/frontier-41-ha-dt-29-batch-30-manifest-preservation-baseline.json`,
the 59 per-item `frontier-41-ha-dt-29-step1-<id>.json` readiness records, and
this note. No published content, shared plan, engine state or verdict was
edited.

## 1. Design control (which source controls, and why)

The binding owner instruction is
`research/frontier-41-ha-dt-29-owner-authoring-direction.md`: the owner
approved adding exactly this support pair on 2026-10-04 at orders 548.5/548.6,
after the published Thom-spaces pages 547/548 and before DT-9 (549) and DT-19
(553); it fixes the A page's sole page prerequisite to
`thom-spaces-normal-data-and-collapse-maps`, the moved prespectrum definition,
the strict comparison endpoints, and the AC/justification rules.

Of the two listed design locations:

- `research/plan-algebraic-topology-track.md` (section "Frontier 41 Algebraic
  Topology support pair (approved 2026-10-04)", the location of the L2982 id
  mention) **controls the pair**: it is the design section that creates the
  A/B pair, fixes its scope, page prerequisite, inventory size (54 new A items,
  4 B examples, one moved definition), proof route, and the DT-19 consumer
  edge.
- `research/plan-differential-topology-track.md` L2235 is the §12.4 canonical
  `requires` table row for DT-19,
  `characteristic-numbers-and-cobordism-obstructions`; it only records that
  DT-19 consumes the new A page. It supplies the consumer edge, not the
  inventory or proof route, so it does not control construction.

`research/plan-spec.json` agrees with both: the pair at 548.5/548.6 with the
same ids, kinds, companions and `requires` arrays, and DT-19's `requires`
containing `thom-spectra-and-unoriented-bordism-detection`. The item lists of
both new pages are empty in `plan-spec.json` (pre-splice), as expected for a
Step-1 scaffold. **No design/plan conflict was found.**

Owner-direction compliance verified in the manifest:

- The A page requires only the published page 547 and does not depend on DT-19
  in any proof or prerequisite path (no cross-batch consumer edge; see §5).
  DT-9 receives no edge (DT-9's `requires` was re-read: no such page).
- One shared MO/MSO definition
  `def-thom-prespectrum-of-the-universal-real-and-oriented-bundles` is moved
  from DT-19 to the A page; its statement carries both the MO and MSO levels,
  the fixed coordinate-first structure maps and the two stable-homotopy
  colimits, and its strategy carries the locally proved CW/well-pointedness and
  stabilization construction. The temporary MO-only definition is merged into
  it (no second MO item exists). The four DT-19 consumers in the batch-11
  manifest still reference this exact item id, and batch-11's DT-19 page now
  carries the `thom-spectra-and-unoriented-bordism-detection` page edge.
- Strict endpoints are preserved verbatim: mod-two cohomology isomorphism for
  `k < 2r` with no `2r` claim
  (`thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r`);
  integral homology isomorphism for `i < 2r-1` with surjectivity at `2r-1` and
  no endpoint injectivity
  (`thm-finite-thom-detector-is-an-integral-homology-isomorphism-below-2r-minus-1`);
  homotopy isomorphism through `2r-2`
  (`thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2`);
  stable detection on the cofinal tail `r >= n+2`
  (`thm-stable-unoriented-thom-homotopy-is-injectively-detected`); rational
  Hurewicz range `c <= i <= 2c-2` with no `2c-1` injectivity
  (`thm-rational-hurewicz-for-highly-connected-cw-complexes`).
- No represented-spectrum comparison, no spectrification, and no Omega
  condition is imported: `def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum`
  defines the inverse-limit prespectrum invariant explicitly, and the detector
  is a finite product of Eilenberg–Mac Lane spaces
  (`def-finite-thom-classifying-detector-map`).
- Definition audit covered all six A-page definitions. Three construction-
  dependent definitions name separate local well-definedness lemmas through
  `justified_by`: the Whitney-sum coalgebra
  (`lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology`), the
  finite detector (`lem-finite-thom-classifying-detector-map-exists-and-is-continuous`),
  and the degreewise prespectrum cohomology
  (`lem-stable-thom-cohomology-is-degreewise-eventually-constant`). The moved
  MO/MSO prespectrum definition carries its fixed maps, CW/well-pointedness,
  and construction proof in its own strategy. The weak-join definition is an
  explicit quotient construction, and its following local lemma proves the
  CW, covering, and K(G,1) properties. The square-algebra definition explicitly
  constructs the free algebra and quotient; the published Adem theorem makes
  the operation map well-defined, while the local admissible-basis theorem
  proves the presentation. No definition is left relying on a missing local
  construction or an unstated spectral comparison.
- AC is declared through `def-axiom-of-choice` in `deps` for the 37 items whose
  proofs use it, with the use identified in the strategy (classification
  choices, basis/section choices, CW approximations, EM uniqueness). Choice-free
  items are left free of the dependency. See the caveat in §6.

## 2. Inventory and dependency verification

- A page: 55 items (54 new local items + the moved definition), maximum
  dependency level 14, computed with `dependencyLevels` on this batch alone:
  `59 item(s)`, `0 error(s)`. All `dependency_level` labels equal the computed
  levels; no cycle, no forward edge, and every in-run dependency sits at a
  strictly lower level.
- B page: 4 examples, all level 3–8, each depending only on A-page items; no
  example depends on another example.
- Every dependency resolves. 165 out-of-run dependencies were checked
  individually: every one has an existing `items/<id>.md` and `status:
  published`; none is `proved_here: false` and none reaches
  `deferred-set-theory-beyond-choice`. The sole page prerequisite
  (`thom-spaces-normal-data-and-collapse-maps`) is published.
- Fidelity to the local item inventories: all 58 non-moved items match
  (kind, title, statement, strategy, deps, provenance, source URLs) across the
  manifest and the five supplier item files
  (`at-support-steenrod-items.json`,
  `at-support-freeness-stable-items.json`,
  `at-support-rational-items.json`,
  `at-support-integral-homotopy-items.json`,
  `at-support-core-and-examples-items.json`). During this audit, the finite
  detector definition and its existence/continuity lemma were amended in both
  carriers to fix one global homogeneous basis and degree-preserving section
  once, then use the initial segments $B(r)=\bigcup_{d<r}B_d$. This removes
  an ambiguity: the stable-coordinate lemma needs the same $B_n$ and lifts at
  every rank. It makes suspension compatibility explicit without changing the
  detector claim, endpoints, dependencies or approved scope. No claim was
  weakened, no hypothesis dropped and no dependency silently added; the only
  manifest item not from those files is the owner-directed moved prespectrum
  definition.
- Proof strategies are complete for all 59 items: every item carries a
  strategy naming its exact proof route and supplier interfaces, and the 58
  draft items additionally carry their full local proof carriers in the six
  supplier drafts. Load-bearing endpoints were re-read item by item.
- Page caps: A 55 <= 100, B 4 <= 100. No page split is required.
- The rational $K(\mathbb Z,n)$ proof draft now states the normalization
  explicitly: the path-fibration transgression is a nonzero scalar multiple
  of the class dual to the marked generator, and over $\mathbb Q$ the fiber
  generator is rescaled so $d_n(y)=x$. This matches the normalized base class
  in the local lemma without changing the ring calculation or theorem.
- Focused `proof-layout` is not applicable to this Step-1 clarification: the
  batch-30 scaffold has manifest entries and proof-strategy drafts but no
  authored `items/<id>.md` proof carriers or numbered proof rows. Run the focused
  layout check after Step-3 writes those item files; do not treat this as a pass.

## 3. Sources

- 14 sources on the A page, all live and full-text fetch-verified
  (`research/frontier-41-ha-dt-29-batch-30-url-liveness.json`: 14/14 live;
  `source-fetch-check`: 14/14 fetch-verified with recorded bytes/sha256).
  Two independent treatments including books/lecture notes: Hatcher,
  *Algebraic Topology*; Milnor–Stasheff, *Characteristic Classes*; Freed,
  *Bordism: Old and New*; Weston, *An Introduction to Cobordism Theory*;
  Hatcher, *Vector Bundles & K-Theory* and *Spectral Sequences*; May, *A
  Concise Course*; Weibel, Chapters 1 and 3; Miller, MIT 18.906 notes;
  Altman–Kleiman, *A Term of Commutative Algebra*; Milnor, *Construction of
  Universal Bundles II*.
- Coverage: 89 harvested locator rows, every disposition `included`, each
  mapping to an id in the batch manifest
  (`coverage-checklist --require-destination`: 1 page, 89 results, 0 errors,
  0 warnings). `source-backing`: 59 authored results, all still backed.
- The MIT OCW (Miller) URL had six earlier transient fetch failures, all
  preserved in the coverage record, followed by a successful full-text fetch
  (1,467,813 bytes, sha256 `6fb68a6d...`); the history is retained in
  `batch-30-source-fetch-receipt.md` and no retry history was reset.
- Source-gap audit: Weston’s *An Introduction to Cobordism Theory* §8
  defers the Eilenberg–Mac Lane polynomial calculation; its Lemma 12.2 also
  claims disjoint monomial supports, which is false (the local draft records a
  concrete counterexample and replaces it with a leading-monomial proof).
  Hatcher’s *Algebraic Topology* §4.L states the polynomial theorem but defers
  its proof to *Spectral Sequences in Algebraic Topology*; the latter’s full
  proof was fetched and read, then its path-fibration/transgression steps were
  expanded locally. Weston’s odd-primary BO/BSO calculation does not supply
  an unoriented Thom isomorphism with trivial coefficients: the local proof uses the
  orientation local system and anti-invariants, retaining the even-rank
  degree-$2r$ Euler class. The finite-range draft separately proves the
  integral coefficient upgrade and strict endpoint instead of attributing
  them to Hatcher’s relative-Hurewicz comparison.

## 4. Checks run (actual results)

| Check | Command | Result |
|---|---|---|
| Initial readiness snapshot | `node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29` | At the original batch-30 scaffold completion: 649/649 then-inventoried run items ready; batch-30 open 0. This predates the present audit refresh and later manifest additions. |
| Focused readiness before owner-directed AC Statement edits | `checkStep1(loadStep3(...))`, filtered to batch 30 | 59/59 batch-30 items ready; 0 pending. Seven affected batch-30 receipts had been refreshed after the global-basis clarification. The later full-AC Statement edits invalidate the 27 batch-30 receipts in the Thom-detection dependency closure; no receipts have been refreshed for that edit. The transitive batch-11 consumer receipt is also left for dependency-ordered reconciliation. |
| Dependency levels (batch) | `dependencyLevels` on the batch-30 manifest | 59 items, max level 14, 0 errors |
| Dependency levels (run) | `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | batch-30 clean; residual errors only for the still-empty scaffolds 12, 16, 20, 23, 24 |
| Coverage | `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-30.coverage.json --require-destination` | 1 page, 89 harvested, 0 errors, 0 warnings |
| Manifest deps (whole run) | `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-*.pages.json` | 649 items, 0 errors |
| Content policy (manifest) | `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-*.pages.json` | 649 scoped items, 0 errors, 0 warnings |
| Plan | `node tools/validate-plan.mjs research/plan-spec.json` | OK; declared order acyclic and consistent |
| External refs | `node tools/extcheck.mjs` | OK; every recorded-not-proved statement is a cited remark |
| Manifest integrity | `node tools/manifest-integrity.mjs --run frontier-41-ha-dt-29` | 60 pages owed, 60 present; no scope drift |
| Source fetch | `node tools/source-fetch-check.mjs --coverage ...batch-30.coverage.json` | 14/14 fetch-verified, 14/14 resolved |
| URL liveness | `node tools/url-sweep.mjs` evidence in `batch-30-url-liveness.json` | 14/14 live |
| Source backing | `node tools/source-backing.mjs --coverage ...batch-30.coverage.json --liveness ...batch-30-url-liveness.json` | 59 authored results, all backed |
| Frontier dependency ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29 --require-reviewed` | refreshed and deduplicated; all 30 batches reviewed, 443 edges, 0 orphaned |

## 5. Cross-batch dependencies

The batch-30 consumer input
`research/frontier-41-ha-dt-29-batch-30.cross-batch-dependencies.json` is the
empty array. This is correct and was verified by computing every item/page
edge of the batch against all run manifests: the A page requires only the
published out-of-run page 547, the B page requires only its A companion, and no
batch-30 item has a `deps` or `justified_by` target in another batch. The
reverse edges (DT-19, batch 11, consuming this A page and its items) are owned
and already recorded by batch-11's input file, which names the page edge and
the item edges for `def-thom-prespectrum-...`,
`thm-rational-hurewicz-for-highly-connected-cw-complexes`,
`lem-rationalization-is-exact-and-commutes-with-singular-homology`,
`lem-oriented-grassmannian-has-two-lifted-schubert-cells`,
`lem-stable-thom-cohomology-is-degreewise-eventually-constant`,
`def-finite-thom-classifying-detector-map` and
`thm-stable-unoriented-thom-homotopy-is-injectively-detected`.

## 6. Unresolved findings and caveats carried to Step 3

These do not block scaffold readiness; they are obligations the authoring and
review stages must discharge.

1. **Rational branch needs independent review.** The rational-Hurewicz draft
   (`at-support-rational-hurewicz-draft.md`, line ~707) states that its
   mathematical steps "require independent review before incorporation or
   readiness certification". The 11 rational items are recorded `ready` only
   as scaffolds with a complete proof strategy and met published prerequisites;
   Step 3 owns the independent mathematical review. The manifest endpoints
   (`c <= i <= 2c-2`, no `2c-1` injectivity) are preserved.
2. **Odd-primary branch carries reviewer-owned repairs.** The odd-primary
   draft's "Independent repair receipt" records the lifted BSO/-orientation-cover
   CW construction for item 3 and the relative Thom
   chain-filtration/collar/excision/convergence proof for item 5
   (`thm-bo-bso-cohomology-away-from-two`,
   `thm-integral-finite-generation-of-mo-and-mso-homology`), including the
   monodromy-sign correction and the Gysin degree-`k` check. The authored items
   must include these repairs; the receipt is a bounded review, not a gate
   certification.
3. **Finite-range endpoint caveat.** The finite-range comparison draft states
   that the off-by-one endpoint and the integral coefficient upgrade are
   genuine conditions for the Thom route and must stay explicit in every
   consumer; the manifest keeps them (integral iso `i<2r-1`, surjection at
   `2r-1`; homotopy through `2r-2`; stable tail `r>=n+2`).
4. **Full-AC statement contract — owner-directed repair (2026-10-05).** The
   original twelve items below had `def-axiom-of-choice` in `deps` and
   identified the use in their proof strategies, but omitted AC from their
   Statements. The owner directed us to preserve all claims and state the
   full-AC premise, rather than weaken the claims to avoid repair:
   `lem-mod-two-eilenberg-maclane-base-and-path-loop-inputs`,
   `lem-infinite-real-projective-space-is-a-marked-mod-two-eilenberg-maclane-space`,
   `lem-admissible-square-action-has-a-distinct-leading-monomial`,
   `lem-fundamental-path-fibration-class-has-the-normalized-relative-lift`,
   `lem-relative-lifts-produce-cohomological-transgressions`,
   `thm-borel-polynomial-base-from-a-transgressive-simple-fiber-system`,
   `lem-universal-mod-two-class-detects-admissible-composites-in-the-strict-range`,
   `lem-external-evaluation-detects-tensor-square-operations`,
   `prop-serre-polynomial-cohomology-of-mod-two-eilenberg-maclane-spaces`,
   `thm-admissible-square-algebra-is-a-connected-bialgebra`,
   `lem-metastable-cohomology-of-eilenberg-maclane-spaces`, and
   `thm-stable-unoriented-thom-cohomology-is-free-over-the-square-algebra`.
   Ten in-run consumers also inherit this contract and now state AC and list
   `def-axiom-of-choice` directly:
   `thm-admissible-composites-present-the-mod-two-square-algebra`,
   `lem-zero-section-proves-injectivity-of-the-thom-unit-orbit`,
   `lem-stable-thom-cohomology-is-a-square-module-coalgebra`,
   `thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r`,
   `thm-finite-thom-detector-is-an-integral-homology-isomorphism-below-2r-minus-1`,
   `thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2`,
   `lem-stable-thom-detector-coordinates-commute-with-suspension`,
   `thm-stable-unoriented-thom-homotopy-is-injectively-detected`,
   `ex-low-degree-admissible-steenrod-monomials`, and
   `ex-strict-metastable-eilenberg-maclane-range`. This follows SCHEMA's rule
   to state choice in the item contract, declare the dependency, and carry it
   to consumers. Full AC covers inherited AC\u03c9 uses; no proof here establishes
   a weaker AC\u03c9-only contract. The statements and direct dependencies were
   aligned in the batch-30 manifest and the two item-inventory JSON carriers;
   the exact statements in the Steenrod--Eilenberg--Mac Lane and integration
   proof drafts were aligned as well. The batch-11 Thom/Stiefel--Whitney
   detection consumer also now states its inherited AC premise; its direct
   AC dependency was already present. Proof arguments and mathematical claims
   are unchanged. The edit invalidates the 27 batch-30 receipts in the
   dependency closure and the affected batch-11 receipt; no receipt or gate
   was refreshed here. The rational branch has no such omission in its AT
   dependency closure.
5. **DT-19 consumer re-read.** Batch-11's cross-batch rows for the moved
   prespectrum definition are marked `open` and require a re-read of the final
   authored supplier; this batch does not own those rows.

No newly identified published defect was found while checking this batch: all
165 out-of-run dependencies are published items, all six supplier drafts were
read at scaffold level, and the only repair obligations found are the three
authoring-side items in 1–3 above (which concern drafts, not published items).

## 7. Outcome

At initial scaffold completion all 59 batch-30 items carried `ready` Step-1
records (58 new, plus the re-recorded moved definition). The owner-directed
full-AC Statement repair later changed 22 AT cards and their direct-dependency
metadata; five additional batch-30 descendants and the batch-11 detection
consumer inherit the changed hashes. Thus 27 batch-30 and one batch-11 Step-1
records now require dependency-ordered refresh once content is stable. No
receipt or gate was refreshed by this repair. The prior records certify only
scaffold construction readiness, not independent mathematical approval; Step 3
still supplies that review.
