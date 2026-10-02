# Step 3a scope review — pair `analytic-hypersurfaces-and-local-parametrisation`

- Run: `frontier-37-owner-30` (stage `3a-scope`), dispatch label
  `step3a-pair-analytic-hypersurfaces-and-local-parametrisation-0d58d8835c9cd2fb`
- Role: alpha scope reviewer (not owner, not item author)
- A page: `analytic-hypersurfaces-and-local-parametrisation` (batch 30, order
  869, category `complex-analysis`, 19 items: 6 definitions, 7 lemmas,
  5 theorems, 1 corollary)
- B page: `analytic-hypersurfaces-and-local-parametrisation-examples` (batch
  30, order 870, `requires` only the A page, 8 items: 6 examples,
  1 counterexample, 1 remark)
- Decision: **`sufficient`**, recorded with the prescribed `record-scope`
  command.
- Date: 2026-09-30.

This review decides scope only. It is not an item approval, not a proof
judgment, and not an owner record. No scaffold, manifest, coverage, item,
design, plan or engine artifact was edited; the only writes are this report
and the scope receipt.

## 1. Intended subject and role in the library

Controlling prose design: `research/plan-complex-analysis-track.md` SC-8,
lines 4282–4323 (id and `requires` 4284–4285; the ten designed A items
4287–4298; companion scope 4300–4303; sources and proof strategy 4305–4318;
forward references 4320). Supporting normative rows: the handoff summary
naming SC-5–SC-8 (lines 19–32, especially 26–27); the choice-strength row
“SC-5 / SC-8 local integral and hypersurface theory | ZF relative to
prerequisites” (line 428); the well-definedness obligations for the reduced
equation/discriminant, the Puiseux parameter/normalisation and the local
dimension (lines 506, 507, 510); the normative scope-boundary row
“Global analytic-space dimension theory, Remmert proper mapping, Remmert–Stein,
arbitrary analytic-set singular loci and resolution of singularities” —
“SC-8 deliberately develops hypersurface germs, regular points, finite
projection, irreducible hypersurface germs and Puiseux in dimension one”
(lines 514–537, row 527); and the canonical-coverage harvest (lines
4460–4969), where Lebl Ch. 6 §§6.5–6.7 is disposed to the hypersurface and
plane-curve parts of SC-8 (lines 4883–4885), Freitag Ch. I §§1–4 (including
Theorem 4.10 on the hypersurface singular locus) to SC-1/SC-3/SC-8 (lines
4937–4943), and the pair-backing matrix row for SC-5–SC-8 (line 4969).

Intended subject: the local theory of complex-analytic hypersurface germs in
$\mathbb C^n$ — the germ as the zero germ of one nonzero nonunit, square-free
reduction and uniqueness of the reduced equation, regular and singular points
via the reduced gradient, generic-linear-coordinate Weierstrass preparation
making the germ a finite branched cover over a polydisc in
$\mathbb C^{n-1}$, the discriminant and branch set of that fixed projection,
finite and unique irreducible decomposition, local Krull dimension of the
germ ring and independence of the reduced equation, pure codimension one, the
analytic lower-dimensional singular locus, and — the dimension-one part of
local parametrisation — the convergent Newton–Puiseux parametrisation of an
irreducible plane branch, its uniqueness up to the declared
reparametrisation, and the resulting normalisation and branch separation of a
reduced plane curve germ. Explicitly outside the design: arbitrary analytic
sets, coherence-based theorems, the general local parametrisation theorem for
higher-dimensional irreducible germs, Segre/CR and global analytic geometry.

Plan record: `research/plan-spec.json` `pages[1618]`/`pages[1619]` carry orders
869 (A) and 870 (B), category `complex-analysis`, the A `requires` list of six
pages, and the B `requires` `[analytic-hypersurfaces-and-local-parametrisation]`;
both planned item arrays are still empty (unspliced), so the batch manifest is
the inventory of record.

Role and consumers. Within this run the pair is a dependency leaf: a scan of
all 30 batch manifests finds no in-run consumer item and no in-run page
`requires` naming either page other than the pair’s own A→B link;
`research/frontier-37-owner-30-batch-30.cross-batch-dependencies.json` is `[]`,
and the unified `research/frontier-37-owner-30-cross-batch-dependencies.json`
contains no edge naming either page. A recursive scan of `items/`, `library/`
and `articles/` returns zero references to any of the 27 new ids, so the pair
consumes predecessors and nothing consumes it yet. All six declared
prerequisite pages are published and earlier in the reading order:
`holomorphic-inverse-and-weierstrass-preparation` (order 353),
`modules-and-module-homomorphisms` (102), `noetherian-rings-and-hilbert-basis`
(111.001), `localisation-of-modules-and-support` (111.003),
`krull-dimension-and-height-theorems` (111.019) and
`the-dbar-complex-and-integral-solutions` (849). The run-level Step-1 drift
review records `no-drift` for SC-8, and `research/frontier-37-owner-30-step1-blockers.json`
names only unit 29 (Hörmander), not this pair. `research/frontier-37-owner-30-owner-authoring-direction.md`
does not exist, and there is no owner scope decision on file for this page.

## 2. Design-to-manifest mapping

I extracted the ten designed A ids and the companion description from SC-8 and
diffed them against `research/frontier-37-owner-30-batch-30.pages.json`. All ten
designed ids are present, in design order, with matching kinds:

| designed item (SC-8) | kind | manifest |
| --- | --- | --- |
| `def-complex-analytic-hypersurface-germ-and-reduced-equation` | def | present |
| `def-regular-singular-point-analytic-hypersurface` | def | present |
| `thm-weierstrass-finite-projection-hypersurface-germ` | thm | present |
| `def-discriminant-and-branch-locus-weierstrass-hypersurface` | def | present |
| `thm-local-irreducible-decomposition-hypersurface-germ` | thm | present |
| `def-local-dimension-hypersurface-germ` | def | present |
| `thm-hypersurface-germs-have-pure-codimension-one` | thm | present |
| `thm-singular-locus-reduced-hypersurface` | thm | present |
| `thm-puiseux-parametrisation-plane-curve-germ` | thm | present |
| `cor-normalisation-plane-curve-germ` | cor | present |

The nine further A items are local prerequisites that the designed proofs
need and that no published item supplies; every one is reachable from a
designed item through the manifest dependency edges and every one is consumed
(none is orphaned):

| added item | role | consumed by |
| --- | --- | --- |
| `def-reduced-holomorphic-germ-for-hypersurface` | fixes the equation-level notion before geometric identification | `lem-square-free-reduction…`, `thm-weierstrass-finite-projection…` |
| `lem-square-free-reduction-of-holomorphic-germ` | existence and unit-uniqueness of the square-free reduction | `lem-vanishing-ideal…`, `def-complex-analytic-hypersurface-germ…`, B `ex-nonreduced-equation…` |
| `lem-reduced-prepared-polynomial-has-nonzero-discriminant` | reduced preparation is square-free ⇒ nonzero base discriminant | `thm-weierstrass-finite-projection…`, `def-discriminant-and-branch-locus…`, `lem-reduced-prepared-hypersurface-remains-reduced…` |
| `lem-reduced-prepared-hypersurface-remains-reduced-near-germ` | one fixed reduced equation works near the whole germ | `def-regular-singular-point…`, `thm-singular-locus-reduced-hypersurface` |
| `lem-vanishing-ideal-of-a-reduced-hypersurface-germ` | vanishing ideal is principal, generated by the reduced equation | `def-complex-analytic-hypersurface-germ…`, `def-regular-singular-point…`, `thm-local-irreducible-decomposition…`, `def-local-dimension…`, `def-total-quotient-ring…`, `cor-normalisation…` |
| `lem-dimension-of-holomorphic-germ-ring` | $\dim\mathcal O_{\mathbb C^n,p}=n$ (AC-qualified) | `thm-hypersurface-germs-have-pure-codimension-one`, `thm-singular-locus…`, B `ex-regular-hyperplane…` |
| `lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve` | irreducibility ⇒ connected punctured covering | `thm-puiseux-parametrisation-plane-curve-germ` |
| `def-total-quotient-ring-and-normalisation-of-reduced-plane-curve-germ` | total quotient ring and normalisation interface | `lem-total-fractions-split…`, `cor-normalisation…` |
| `lem-total-fractions-split-over-hypersurface-branches` | total fractions split over branches without an unplanned normality theorem | `cor-normalisation…` |

The B manifest is exactly the eight ids promised by the companion sentence
(“node, cusp and crossing; regular hyperplanes; a nonreduced equation with the
same zero set; finite projection and branch locus; Puiseux series for
$y^2=x^3$ and $y^2=x^5$; a warning that arbitrary analytic sets require more
than the hypersurface proof”): `ex-regular-hyperplane-hypersurface-germ`,
`ex-ordinary-node-plane-curve-germ`, `ex-cusp-puiseux-y-two-equals-x-three`,
`ex-crossing-coordinate-axes-hypersurface`,
`ex-nonreduced-equation-same-hypersurface-germ`,
`cex-projection-branch-locus-is-not-singular-locus`,
`ex-cusp-puiseux-y-two-equals-x-five`,
`rem-general-analytic-sets-need-more-than-hypersurface-arguments`. The A
manifest’s `requires` array equals the plan-spec array verbatim; the B page
requires only its A companion.

Statement qualifications recorded by the scaffold and consistent with the
design (not scope reductions): the branch set is defined for a fixed
projection and explicitly need not equal the singular-locus image (the B
counterexample `y^2=x` witnesses this); the Puiseux statement normalises
$\gamma(t)=(t^m,h(t))$ with $\operatorname{ord}h>m$ after a linear coordinate
choice and declares uniqueness only up to $t\mapsto\zeta t$, $\zeta^m=1$; the
normalisation corollary asserts branch separation and integral closures
explicitly rather than assuming a normality theorem; and the pure-codimension
and singular-locus dimension claims assert nothing about arbitrary analytic
ideals. The design’s well-definedness rows 59/60/63 are all realised by these
items.

## 3. Source coverage

`research/frontier-37-owner-30-batch-30.coverage.json` records two independent
book-length treatments for each page. Counts: the A page has 24 harvested
source rows (Lebl 14: 3 `already-published`, 8 `included`, 3 `out-of-scope`;
Demailly 10: 1 `already-published`, 5 `included`, 2 `inline`, 2 `out-of-scope`)
plus 19 `canonical` rows, all `included`; the B page has 12 source rows
(Lebl 7: 5 `included`, 1 `inline`, 1 `out-of-scope`; Demailly 5: 1 `included`,
3 `inline`, 1 `out-of-scope`) plus 8 `canonical` rows, all `included`. Every
one of the 27 items carries references to both treatments.

I re-fetched both PDFs and verified the fetch stamps are genuine: my downloads
are byte-identical in size and share the recorded SHA-256 prefixes — Lebl,
`https://www.jirka.org/scv/scv.pdf`, 1,652,309 bytes, `729cdb8a00685da5…`,
248 pages; Demailly,
`https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf`,
3,557,990 bytes, `d7c7654a7417e832…`, 455 pages. I then checked every cited
locator against the fetched text (statements read in full; proof sketches
read where scope required):

- Lebl v4.4, Ch. 6 “Complex Analytic Varieties” (§6.1 p. 167, §6.8 p. 197, so
  §§6.1–6.7 occupy pp. 167–196 as recorded): Theorem 6.3.3 (dependence of
  zeros and discriminant set, p. 178); Theorem 6.4.1 (Noetherian, p. 181);
  Theorem 6.4.2 (UFD, p. 182); Theorem 6.5.9 (zero set of a nonzero
  holomorphic function is empty, pure codimension one, or all of $U$;
  regular set open dense, p. 187); Theorem 6.6.1 (hypervariety germ is
  $Z_f$ with $I_p(X)=(f,p)$, p. 188); Theorem 6.6.5 (singular set of a
  hypervariety is a subvariety of dimension $\le n-2$, p. 191); Proposition
  6.7.3 (finite irreducible decomposition, p. 194); Theorem 6.7.4 (local
  parametrisation; stated without proof in the general case, p. 194);
  Exercise 6.7.5 (one-to-one parametrisation of a plane branch, p. 196);
  Theorem 6.7.6 (Puiseux, p. 195). Companion rows: Example 6.2.4
  ($y^2=x$ branch discontinuity, p. 172), Example 6.5.6 (cusp
  $z_1^3-z_2^2=0$, and the crossing $z_1^2-z_2^2=0$ as two lines,
  p. 185), Example 6.6.4 (sideways parabola $z_2^2-z_1=0$ with branched
  projection but no singular point, p. 190), Example 6.7.5 ($\xi\mapsto
  (\xi^2,\xi^3)$, p. 195), Exercise 6.6.8 (quadratic cones, pp. 190/193,
  out of scope).
- Demailly (2012), Chapter II “Coherent Sheaves and Analytic Spaces” (§2
  p. 78, §4 p. 90, §6 p. 105 per the contents): (2.7) Noetherianity of
  $\mathcal O_n$ (p. 81); (2.10) factoriality (p. 82); (4.19) local
  parametrization theorem with finite integral extension, degree, discriminant
  and connected unramified part (p. 95); (4.21) vanishing ideal of a prime
  (p. 96); (4.22) Hilbert Nullstellensatz (p. 97); (4.23) regular/singular
  points (p. 98); (4.27) connected punctured covering and covering
  isomorphism $t\mapsto t^q$ for curve germs (pp. 98–99); Remark (6.5)
  (a codimension-one set in a singular ambient need not be principal,
  p. 106); Theorem (6.6) (principal ideal of a pure codimension-one germ,
  product of irreducible germs, pp. 106–107); Exercise 11.8 (Puiseux
  expansions of the branches of a plane curve germ, p. 128).

The out-of-scope rows carry specific reasons and match the design’s declared
boundary: Lebl Theorem 6.5.11 (arbitrary analytic-set singular locus),
Theorem 6.7.4 (general local parametrisation) and §6.8 (Segre/CR); Demailly
Theorem 4.22 for arbitrary ideals and §4.4 coherence; on the B page, Lebl
Exercise 6.6.8 (quadratic cones) and Demailly §4.4. The `already-published`
rows name `def-holomorphic-germ-ring-and-its-maximal-ideal`,
`thm-weierstrass-preparation-theorem` and `thm-holomorphic-germ-ring-is-a-ufd`,
all of which exist on the published prerequisite page
`holomorphic-inverse-and-weierstrass-preparation`. No included result rests on
an unread or unverified source, and no deferred result is recorded.

Scope-check honesty: I verified numbering, page and mathematical content of
every cited named result and read their statements in full; I read Demailly
(4.19), (4.27), (6.6) and Lebl 6.6.1/6.6.5 proof sketches far enough to
confirm that the harvested content matches the items it is mapped to. I did
not re-prove any item and did not audit proofs end-to-end — that is Steps 3b
and 5 work.

## 4. Dependency and interface checks

- Step-1 readiness: 27/27 `research/frontier-37-owner-30-step1-<id>.json`
  receipts are `ready`, none `escalated`; `node tools/step1-decisions.mjs
  check --run frontier-37-owner-30` reports `closed` with zero work rows.
- Re-run today on the current files: `manifest-integrity` 60/60 pages owed,
  no scope drift; `coverage-checklist --require-destination` 2 pages,
  63 harvested results, 0 errors, 0 warnings; `source-fetch-check` 4/4
  fetch-verified and 4/4 resolved; `manifest-deps` 27 items, 0 errors;
  `content-policy --manifest-only` 27 items, 0 errors, 0 warnings;
  `item-dependency-levels check --run frontier-37-owner-30` exit 0 (778 items,
  60 pages, maximum level 31).
- Dependency audit of the 27 items: 50 distinct direct dependency ids; 17 are
  in-run A items of this page, 33 are published items (all with
  `status: published`), 0 missing, 0 unresolved. No item depends on a B-page
  item, and the only cross-page in-run edges are the B page’s dependencies on
  A items, so the A `requires` contains no B page and the reading-order
  invariants hold. Dependency levels are present for every item (A: 0–9,
  B: 7–9).
- The six required pages and their supplier items exist on disk; transitively,
  the published dependency closure reaches 5 of the 6 (`holomorphic-inverse…`
  22 items, `krull-dimension…` 10, `modules-and-module-homomorphisms` 7,
  `noetherian-rings-and-hilbert-basis` 5, `localisation…` 1). The dbar page is
  not reached — see observation 1.
- Choice: the plan’s row 428 assigns SC-8 “ZF relative to prerequisites”. The
  four scaffold items with a numerical dimension assertion
  (`lem-dimension-of-holomorphic-germ-ring`,
  `thm-hypersurface-germs-have-pure-codimension-one`,
  `thm-singular-locus-reduced-hypersurface`, B
  `ex-regular-hyperplane-hypersurface-germ`) declare the Axiom of Choice and
  depend on `def-axiom-of-choice`; their suppliers
  (`thm-krull-height-theorem`,
  `cor-dimension-preserved-by-integral-extensions`) state and use AC in their
  published forms. This is inherited supplier cost, not a new choice
  principle, and is consistent with the plan row. The finite-projection,
  Puiseux and normalisation arguments consume no AC-specific clause.

## 5. Observations for the owner (no decision change)

1. **Declared but non-load-bearing SC-5 prerequisite.** The A `requires`
   names `the-dbar-complex-and-integral-solutions` because the design names
   SC-5 (line 4284), and the manifest retains it. No item on that page
   appears in the transitive dependency closure of any of the 27 items; the
   published closure reaches the other five required pages. This is the
   plan’s own advisory “redundant direct page prerequisite”, not a scope gap;
   dropping or keeping it is an owner/plan decision.
2. **Freitag named by the design, not harvested.** SC-8 names Freitag Ch. I
   §§1–4 (especially Theorem 4.10), and the plan harvest disposes Freitag
   Ch. I §§1–4 to SC-1/SC-3/SC-8 (lines 4937–4943). The pair instead carries
   the accessible Demailly text as its second independent treatment, after a
   documented failed mirror retrieval at scaffold time; nothing in the pair
   cites Freitag, and every included item rests on Lebl or Demailly material I
   verified. Also, the pair-backing matrix row (line 4969) labels the Demailly
   share of SC-5–SC-8 as Ch. VIII, which is the $L^2$/Hörmander chapter; the
   coverage’s Chapter II locators (§2/§4/§6 and Exercise 11.8) are the correct
   local theory and were verified page by page. The row’s “at least two
   independent treatments” contract is satisfied; the plan label is a
   record-level oddity for a future plan refresh.
3. **Lebl Exercise 6.7.6 has no disposition row.** Its plane-curve product
   description (branch-wise Puiseux factors after a linear coordinate change)
   is essentially the content of `cor-normalisation-plane-curve-germ`’s
   branch-separation clause, in the pair’s own formulation; Exercise 6.7.7
   (dimension $\ge2$ germ connectivity through curves) is outside the
   declared boundary. This is a coverage-record completeness note — a future
   coverage refresh could add rows — not an omitted promised result.
4. **Demailly (4.19) “included” vs Lebl 6.7.4 “out-of-scope”.** Both are the
   general local-parametrisation theorem. Demailly’s complete proof supplies
   the finite-projection item; Lebl’s statement, which Lebl gives without
   proof in the general case, is marked out of scope. Both dispositions are
   honest to the pair’s boundary (finite projection retained, disc
   parametrisation of arbitrary-dimension germs excluded by line 527).
5. **No merger is proposed.** The adjacent pairs are prerequisites (SC-3
   `holomorphic-inverse-and-weierstrass-preparation`, SC-5,
   commutative-algebra dimension/localisation pages) or unrelated CA
   enrichment pages; no pair overlaps this subject, and merging would damage
   the reading order of the several-variables band.

## 6. Scope judgement

`sufficient`. The planned definitions, results and examples cover the intended
subject: the A inventory is exactly SC-8’s ten designed items plus nine local
prerequisites, each reachable from a designed item and consumed; the B
inventory is exactly the eight promised companion items; every A item is
backed by at least one of two fetch-verified, independent book-length
treatments whose named results, numbering and pages I checked against the
PDFs; the coverage, manifest-dependency, content-policy, dependency-level and
manifest-integrity checks all pass on the current files; all six declared
prerequisite pages are published and earlier in the reading order; the pair
is a dependency leaf with no in-run consumer, no cross-batch edge, zero
library references and no owner decision or deferral pending; and the
declared exclusions (general analytic sets, coherence, higher-dimensional
local parametrisation, Segre/CR) are consistent with the design’s normative
scope boundary. The §5 observations need no action for this decision and are
recorded rather than presumed resolved.

## 7. Evidence index

- Design: `research/plan-complex-analysis-track.md` SC-8 lines 4282–4323
  (items 4287–4298, companion 4300–4303, sources 4305–4318); summary 19–32;
  choice row 428; well-definedness rows 506/507/510; scope boundary 514–537
  (row 527); harvest 4460–4969 (Lebl 4873–4894, Freitag 4937–4943,
  pair-backing 4969).
- Plan: `research/plan-spec.json` orders 869/870 (items empty, unspliced) and
  the six prerequisite page ids; `research/frontier-37-owner-30-planning-notes.md`
  (batch 30 row, design pointer L4282).
- Batch inputs: `research/frontier-37-owner-30-batch-30.pages.json`,
  `…-batch-30.coverage.json`, `…-batch-30.notes.md`,
  `…-batch-30.cross-batch-dependencies.json` (`[]`);
  `research/frontier-37-owner-30-scope-ledger.json` (both pages, batch 30);
  `research/frontier-37-owner-30-cross-batch-dependencies.json` (no edge
  naming either page); `research/frontier-37-owner-30-step1-blockers.json`
  (unit 29 only); owner direction file absent; no step3a owner receipt.
- Step-1 status: 27 `research/frontier-37-owner-30-step1-<id>.json` receipts
  (all `ready`); `research/frontier-37-owner-30-alpha-step1-drift.md`
  (`no-drift`, lines 150–153).
- Sources (re-downloaded and stamped this review):
  `https://www.jirka.org/scv/scv.pdf`
  (`sha256` prefix `729cdb8a00685da5…`, 248 pages) and
  `https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf`
  (`sha256` prefix `d7c7654a7417e832…`, 455 pages).
- Checks run in this review: design-vs-manifest id and kind diff (A 10/10
  plus 9 extras, B 8/8); dependency resolution and B-page-dependency scan
  (50 direct deps, 0 missing); in-run consumer and `requires` scan; recursive
  id-collision scan of `items/`, `library/`, `articles/` (0 hits);
  prerequisite-page existence and reading-order check; transitive published
  closure and AC-supplier inspection; `manifest-integrity`;
  `coverage-checklist --require-destination`; `source-fetch-check`;
  `manifest-deps`; `content-policy --manifest-only`;
  `item-dependency-levels check --run frontier-37-owner-30`;
  `step1-decisions check`; `step3-decisions check --phase scope`.

## 8. Not done (out of role)

No item approval or refutation, no proof-level verification of the 27 items,
no owner record, no ledger or scaffold, manifest, coverage, prose, plan or
engine edit. Step 3b and Step 5 own proof correctness and item evidence.
