# Step 3a scope review — chow-groups-intersection-products-and-grothendieck-riemann-roch

- Run: `frontier-40-geometry-braids-rep-27` (batch 22), role alpha, label
  `step3a-pair-chow-groups-intersection-products-and-grothendieck-riemann-roch-68d75369ef21a750`.
- A page: `chow-groups-intersection-products-and-grothendieck-riemann-roch`
  (order 899, algebraic-geometry, 38 items: 23 lemmas, 9 definitions, 5
  theorems, 1 remark).
- B page: `chow-groups-intersection-products-and-grothendieck-riemann-roch-examples`
  (order 900, 2 items: 1 example, 1 counterexample); A/B companion pointers agree.
- Decision: **sufficient** (recorded with `tools/step3-decisions.mjs record-scope`,
  non-owner review, at the current pair scope hash). Scope only: no item
  approval, no owner record, no scaffold, plan, manifest, coverage or page edit.

## Evidence read

- `research/frontier-40-geometry-braids-rep-27-batch-22.pages.json` (38 A + 2 B
  items with explicit `deps`; `justified_by` and `forward_refs` are empty
  throughout), its `.coverage.json` (page A: 13 source entries / 70 harvested
  rows; page B: 6 entries / 48 rows), `.notes.md`, and
  `.cross-batch-dependencies.json` (one open page-level edge).
- Step-1 readiness: all 40 `research/frontier-40-geometry-braids-rep-27-step1-<item>.json`
  records carry `decision: ready`; `node tools/step1-decisions.mjs check --run
  frontier-40-geometry-braids-rep-27` reports 892/892 ready, closed.
- Owner repair packet `research/frontier-40-geometry-braids-rep-27-owner-chow-grr/`:
  `source-proof-map.json` (40 statements, local arguments, exact suppliers,
  levels, two source-read receipts), `repair-checks.json`, and the retrieved
  texts `stacks-chow.txt`, `borel-serre.txt`, `vakil14/16/17/19.txt`. The
  recorded read hashes match the files on disk
  (`stacks-chow.txt` 5c6f81b2…, `borel-serre.txt` 62bccb57…).
- Prose design: `research/plan-algebraic-geometry-expansion-track.md` L43
  (canonical page row: AG-CHOW-1, order 899, companion at 900) and L254 (the
  AG-CHOW-1 contract: five named A results, two named B examples, and the
  source gate "read Fulton and an independent complete proof"); L351 note 10
  ("Surface intersection is not the same as Chow theory/GRR");
  `research/algebraic-geometry-expansion-2026-09-30/audit-repair.md` L194/L278
  (contract retained, source gate open); `research/plan-spec.json` rows 899/900
  (empty item arrays; the manifest rows match spec order, title, `requires` and
  `companion` exactly).
- Owner decisions: `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`
  ("Preserve each pair's complete promised claim scope"; required local helper
  items permitted; new pairs or scope changes need owner resolution); no owner
  scope receipt exists for this page, so nothing overrides the design. Run
  record entries of 2026-10-04, including root's acceptance of the Fulton
  substitution at 08:55–08:57Z (batch 22 40/40 current-ready at 09:00Z).
- Sources re-checked for this review: live Stacks tags **02UO** (Section 42.66),
  **0EAX** (Lemma 42.6.3, Key Lemma), **0FEX** (Section 42.58) and **02RW**
  (Definition 42.19.1) resolve with exactly the titles the coverage locators
  claim; the local `stacks-chow.txt` §66 is confirmed **statement-only** (the
  proper-smooth special case with locally free higher images), and
  `borel-serre.txt` contains Théorème 2 (L377: $K^0=K_0$ for nonsingular
  quasi-projective varieties) and the Riemann–Roch theorem for proper
  morphisms of nonsingular quasi-projective varieties over an algebraically
  closed field (L704) with Todd classes.

## Checks run here

- `node tools/manifest-deps.mjs …-batch-22.pages.json` — 40 items, 0 errors.
- `node tools/coverage-checklist.mjs …-batch-22.coverage.json --require-destination`
  — 2 pages, 118 harvested results, 0 errors, 0 warnings.
- Dependency scan of all 372 `deps` edges (139 distinct targets): 212 edges to
  102 distinct published items (all `status: published`, homed on 35 pages),
  160 edges to 37 distinct items of this same pair; **0 missing, 0
  planned-only, 0 other-pair**. No duplicate item IDs across the run's 27
  manifests; no other batch references any pair ID at item or page level.
- `node tools/item-dependency-levels.mjs check --run …` — 892 items / 54 pages
  clean; the pair's levels run 0…19 in order.
- Kind/prefix and math-delimiter scans over the 40 statements (results in the
  observations below).

## Scope against the prose design

All seven design IDs are present verbatim: `def-chow-group-of-cycles-mod-rational-equivalence`,
`lem-proper-pushforward-of-cycles-well-defined`, `lem-flat-pullback-chow-groups`,
`def-chern-character-and-todd-class`, `thm-grothendieck-riemann-roch-for-projective-morphisms`,
`ex-chow-ring-of-projective-space`, `cex-arbitrary-pullback-does-not-define-a-chow-operation`.
Nothing promised is dropped or weakened: rational equivalence is defined via
order functions on (possibly singular) integral closed subschemes, with the
locally finite variant for merely locally finite type schemes; proper
pushforward carries the norm formula, functoriality, flat base change and the
finite-flat normalization; flat pullback carries the pure-fibre-dimension
hypothesis, functoriality and the localization sequence; Chern character and
Todd class are defined via Chern roots with $\mathbb Q$-coefficients; GRR is
stated for projective (hence proper) morphisms of nonsingular irreducible
quasi-projective $k$-schemes over an algebraically closed field, with the
Hirzebruch–Riemann–Roch specialization, and the conventions remark states the
exact hypotheses and the excluded singular/non-projective/perfect-complex
scope.

The manifest adds 33 A items beyond the five named design IDs. This is the
route the design gate itself requires ("locally establish cycle operations,
Chern character/Todd class, and the exact proper-morphism theorem"): a
transitive-`deps` closure of the seven promised IDs computed here contains
**39 of the 40 pair items**; the only item outside the closure is
`rem-chow-ring-and-grr-conventions`, which supplies the design's "state exact
hypotheses" obligation. So the additions are consumed by the promised claims
(cycles and cycle groups, K-theory of coherent sheaves and vector bundles,
K-theory pushforward/projection formula, projective-bundle formula, bivariant
operations, deformation to the normal cone, refined Gysin, operational Chern
classes and the intersection product/Chow ring, Chern-class splitting, RR for
projective-space projections and for regular embeddings, and the composition
step to GRR), matching the owner direction permitting required local helpers.
The design's note 10 boundary is respected: no surface-intersection
application is included (see the splice observation under prerequisites).

The B page carries exactly the two design-promised examples: the Chow ring
$A^*(\mathbb P^n_k)\cong\mathbb Z[h]/(h^{n+1})$ with the Bézout-degree
computation and its explicit disclaimer about the proper-intersection
identification, and the blowup-of-$\mathbb P^2$-at-a-point counterexample to
the scheme-theoretic preimage recipe, with a complete argument and a
"discussion" that limits the refuted claim.

## Source coverage

Nineteen coverage source entries (13 on A, 6 on B): Stacks Chapter 42 (fetched,
190 pp.), Stacks Chapter 43 (fetched, 37 pp.), nine Vakil Math 245 classes
(Classes 2, 4, 6, 11, 14, 16, 17, 18, 19; fetched, read in full at the stated
levels), Borel–Serre 1958 (fetched, 41 pp.), and Fulton, owner-dropped. The 118
harvested rows are all disposed: 104 `included`, 7 `inline`, and 7
`out-of-scope` with written reasons (Stacks 42.22–42.23 envelopes/Chow–K
comparison; Stacks 43.1 moving-lemma construction; Stacks 43.13–43.17 Tor
multiplicities; Borel–Serre §17 application) — all alternative-route or
excluded material, and no promised claim depends on them.

The design-named Fulton text was **not** retrieved or read; the owner dropped
that source entry with `confidence: certain` and recorded five item-level
alternatives per page, explicitly including both B items (coverage
`source_resolution`; `source-proof-map.source_gate_decision`). The
independent complete proof in the design's scope is Borel–Serre 1958, with
Stacks 42 supplying the constructions (and only a statement-only special-case
GRR, as the coverage itself records). The Vakil classes are flagged as partial
comparisons with omitted details, not as the closure. I found no fabricated or
shifted locator in the load-bearing rows I re-checked live; the retrieval
history in the coverage is observed-history evidence, not a proof-reading
receipt, and this review does not re-audit the proofs.

## Role in the library

The pair is the expansion roadmap's AG-CHOW-1 series page for Chow groups,
intersection products and GRR. Its declared prerequisites are AV-8
`plane-curves-local-intersection-multiplicity-and-bezout` (in-run batch 1),
AV-12/18/19/22 (published) and AG-SURF-1
`intersection-products-on-smooth-projective-surfaces` (published, order 895).
The B page requires only the A page. In the current plan no other selected or
planned page requires this pair (a plan-spec scan finds only the B companion),
and no other batch manifest references any pair ID, so the pair is a frontier
leaf for now; later pairs (e.g. contraction/birational pages) may consume it in
a future selection.

## Unmet prerequisites

None confirmed. All 212 external dependency edges resolve to published items
with `status: published` (102 distinct items homed on 35 published pages), and
all 160 in-pair edges resolve inside this scaffold; there are 0 missing, 0
planned-only and no other-batch references. The single in-run page
prerequisite (`plane-curves…`, batch 1) is earlier in run order, carries a
current `sufficient` scope review receipt, and no pair item consumes a batch-1
item, so it is a page-level reading prerequisite only (recorded `open` in
`.cross-batch-dependencies.json`). Sample statement checks of load-bearing
published suppliers used by the GRR route and the added smooth-immersion
helper (`lem-projective-morphism-relative-proj-presentation`,
`thm-proper-pushforward-coherent`, `thm-leray-spectral-sequence-for-sheaf-cohomology`,
`def-grothendieck-group-of-an-essentially-small-abelian-category`,
`lem-regular-local-regular-quotient-ideal-is-parameter-generated`) find
matching, published claims; the ledger's classification index carries only
eight of the 102 suppliers, and the regular-local family there records the
2026-09-23/24 owner-delegated audited repairs, with no open defect carrier
naming this pair. I did not re-audit those published audits.

Two observations (not gaps, no scaffold edit made; Step-4 splice/plan matters
if the owner wants alignment):

1. Of the 35 published pages homing consumed suppliers, 17 lie outside the
   transitive closure of the six declared `requires` (all published, plan
   orders at most 719, far earlier than 899) — the declared `requires` row
   under-approximates the consumed-home closure.
2. AG-SURF-1 is declared in `requires` but consumed by no item: the design's
   conditional "when surface applications are included" is not exercised. The
   page is published and earlier, so this is not an unmet prerequisite.

## Uncertainty and observations for the owner (Step 3b referrals)

1. `def-bivariant-chow-operations` has manifest `kind: lemma` with a `def-`
   ID prefix; SCHEMA.md line 12 says the kind determines the prefix, and the
   statement defines the operations, so authoring should use
   `kind: definition` (the ID stays; other items depend on it).
2. `lem-flat-pullback-chow-groups` item 2 contains `pushed to $X$$,` — an
   unmatched delimiter (odd `$` count, 71) presumably meant as `$X$,`; a
   statement-level wording repair for the author.
3. `rem-chow-ring-and-grr-conventions` still says "The design-named Fulton
   source decision remains root-owner-held", which predates root's
   2026-10-04T08:57Z drop acceptance; refresh at authoring.
4. The B page is minimal by design (exactly the two promised examples). The
   design contract is fully met; additional worked GRR/HRR computations
   (e.g. HRR on $\mathbb P^n$ or a curve) would be enrichment beyond the
   promised scope and are recorded as an owner option, not as an omission.

Proof correctness, statement-level fidelity and dependency minimality are
**not** judged here (Step 3b/Step 5); the items above are the only
statement-level concerns I found.

## Scope decision

The planned definitions, results and examples cover the pair's intended
subject — rational equivalence and Chow groups, proper pushforward and flat
pullback with their compatibility, the Gysin/intersection-product and
Chern-class machinery, the Chern character and Todd class, and
Grothendieck–Riemann–Roch for projective morphisms with exact hypotheses and
Hirzebruch–Riemann–Roch as the point-target case, together with the two
designed examples — at design breadth, with every design ID present, every
planned addition consumed by the promised claims, source backing for every
harvested heading (including owner-recorded alternatives for the dropped
Fulton entry), and no confirmed unmet prerequisite. Recorded: **sufficient**.
