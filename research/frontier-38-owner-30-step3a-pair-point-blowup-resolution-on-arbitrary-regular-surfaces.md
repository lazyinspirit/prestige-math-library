# Step 3a scope review — `point-blowup-resolution-on-arbitrary-regular-surfaces`

- Run: `frontier-38-owner-30`, batch 27, role alpha (step 3a scope review).
- A page: `point-blowup-resolution-on-arbitrary-regular-surfaces` (order 901).
- B page: `point-blowup-resolution-on-arbitrary-regular-surfaces-examples` (order 902).
- Scope decision: **sufficient** (receipt
  `research/frontier-38-owner-30-step3a-review-point-blowup-resolution-on-arbitrary-regular-surfaces.json`).
- This report decides scope only. It is not an item approval, proof review, or owner
  record, and no scaffold, manifest, coverage, prose, or item file was edited.

## Inputs read (exact paths)

- Design: `research/plan-algebraic-geometry-expansion-track.md` — id row L44, AV-26
  separation row L183 ("keep the theorem on AV-26; do not count AG-CRES-1 as a
  supplier"), AG-CRES-1 design row L253 (A inventory, B inventory, proof obligation,
  source gate, no-higher-dimensional boundary).
- Supporting design audit: `research/algebraic-geometry-expansion-2026-09-30/audit-repair.md`
  L190 (same proof obligation and second-source gate) and
  `research/algebraic-geometry-expansion-2026-09-30/amendment-notes.md` L26, L125–130
  (separately gated extension; no higher-dimensional claim).
- Binding direction: `research/frontier-38-owner-30-owner-authoring-direction.md`
  (pair 901/902; local-prerequisite construction rule; "a missing second source
  locator by itself is not a reason to drop or block a pair when one verified
  authoritative treatment is fully reproduced locally with every prerequisite
  proved").
- Contract: `research/plan-spec.json` rows 901/902. A901 `requires` =
  `blowups-exceptional-divisors-and-strict-transforms` (in-run batch 2),
  `normalization-finiteness-for-affine-domains` (published),
  `flat-smooth-and-etale-morphisms` (published),
  `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties` (in-run
  batch 24, order 885) — the earlier-selected UFD supplier edge is present in the
  spec, so the Step-1 reconciliation recorded in the batch notes is applied. B902
  requires A901.
- Manifest: `research/frontier-38-owner-30-batch-27.pages.json` — A: 12 items,
  B: 3 items.
- Coverage: `research/frontier-38-owner-30-batch-27.coverage.json`.
- Construction record: `research/frontier-38-owner-30-batch-27.notes.md`.
- Readiness: `research/frontier-38-owner-30-step1-<id>.json` — 15/15 present for
  this pair.
- Dependency records: `research/frontier-38-owner-30-batch-27.cross-batch-dependencies.json`
  (47 rows = 45 item + 2 page edges, every row `verified`);
  run-wide `research/frontier-38-owner-30-cross-batch-dependencies.json` (no row
  consumes a batch-27 item).
- Step-1 drift: `research/frontier-38-owner-30-alpha-step1-drift.md`
  §`point-blowup-resolution-on-arbitrary-regular-surfaces` — VERDICT `no-drift`.
- Source spot checks (fetched 2026-10-03, independent of the scaffold's stamps):
  Stacks tags 0BI4, 0BI5, 0BI7, 0BI8, 0BIC read at complete statement/proof level.
  0BI7 is byte-identical to the coverage stamp (17,422 bytes, sha256_16
  `bff33c5906e80c89`).

## Design vs delivered scaffold

- All four design A ids are present verbatim and with the commissioned roles:
  `lem-normalization-factors-through-blowup-of-curve-point`,
  `lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center`,
  `thm-regularization-of-finite-normalization-curve-by-point-blowups`,
  `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface`.
- All three design B ids are present verbatim:
  `ex-node-resolved-by-one-blowup`, `ex-cusp-resolution-and-delta-drop`,
  `cex-finite-normalization-does-not-make-the-curve-regular-before-blowups`. The
  B page is exactly the design leaf set; nothing extra, nothing missing.
- The A page adds eight documented local-closure items
  (`def-intersection-multiplicity-of-closed-subschemes`,
  `lem-intersection-multiplicity-drop-under-point-blowup`,
  `lem-point-blowup-of-integral-curve-is-finite`,
  `lem-increasing-sequence-of-coherent-subsheaves-stabilizes`,
  `lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups`,
  `lem-blowup-of-closed-point-of-regular-surface-is-regular`,
  `def-strict-normal-crossings-divisor`,
  `thm-separation-of-regular-curve-components-by-point-blowups`). Each realizes a
  named step of the design's own Stacks route (54.15.1–54.15.4, invariant 54.15.2.1,
  54.3.1, 41.21.2) and is authorized by the owner's local-prerequisite rule; none
  extends the subject beyond point-blowup resolution on regular surfaces.
- Kind counts (no placeholders): A = 2 definitions, 7 lemmas, 3 theorems;
  B = 2 examples, 1 counterexample. Page cap respected.
- Design's "state separately the regular strict-transform conclusion and the
  embedded normal-crossing conclusion" is realized by
  `thm-regularization-of-finite-normalization-curve-by-point-blowups` (regularity of
  the curve after point blowups) and
  `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface` (Cartier total
  transform with SNC support), with `lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups`
  and `thm-separation-of-regular-curve-components-by-point-blowups` as the
  intermediate ambient/contact results.
- "Do not name the plane-curve theorem again": no batch-27 dependency resolves to
  `thm-resolution-plane-curves-by-point-blowups` or to any AV-26 resolution claim
  (checked over all 62 direct references). The B page consumes only batch-2's
  finite-type normalization item, the delta/Euler machinery, and chart items.
- "No higher-dimensional resolution is claimed": the regularization theorem and the
  SNC theorem state the exclusion explicitly, and the blowup-regularity lemma
  asserts regularity only (never smoothness or relative SNC over a non-perfect
  field).

## Subject coverage (definitions, results, examples)

- Definitions: local intersection multiplicity `m_p(Y cap Z)` with its
  dimension-one/finiteness hypotheses and locality/positivity claims; strict normal
  crossings divisor on a regular surface (conditions (a)–(c), with the no-triple-point
  repair and the Stacks 41.21.2 regular-intersection criterion in the locally
  Noetherian case).
- Point-blowup local theory: finiteness of the blowup of a one-dimensional integral
  Noetherian scheme at a closed point, with fibre `Proj(gr_{m_p}O_{Y,p})` and the
  isomorphism criterion "`beta` iso iff `m_p` invertible iff `O_{Y,p}` regular";
  factorization of a finite normalization through the blowup (universal property);
  strict growth of the coherent intermediate algebras at a non-regular center with
  quotient of finite length supported at the center; Noetherian stabilization of
  increasing coherent subsheaves; the multiplicity-drop lemma (off-center
  isomorphism, one point `q` over `p` with `m_q(Y' cap E) = 1`, strict drop
  `m_q(Y' cap Z') < m_p(Y cap Z)`, and disjointness of transversal branches); point
  blowups of regular surfaces stay regular with `E ≅ P^1_{kappa(p)}` in the
  dimension-two case, the dimension-one center case, and no smoothness claim.
- Global results: regularization of an integral one-dimensional scheme with finite
  normalization by finitely many point blowups with termination exactly by Noetherian
  stabilization; ambient regularization of a curve inside an arbitrary Noetherian
  scheme via strict transform = intrinsic blowup; separation of finitely many
  integral curve components to pairwise disjoint regular strict transforms; embedded
  SNC resolution of a reduced curve on a Noetherian regular surface (regularity of
  every intermediate surface, Cartier total transform, regular SNC support) with the
  finite-normalization hypothesis kept explicit for arbitrary Noetherian surfaces
  and the regularity-not-smoothness caveat.
- B page: the node `y^2 = x^2(x+1)` resolved by one blowup into two multiplicity-one
  contact points; the cusp `y^2 = x^3` — regular strict transform after one blowup,
  multiplicity drop 2 → 1, the two further blowups to SNC support, and the delta drop
  `delta_k = 1 → 0` of the projective completion via `r·m(m−1)/2` with `r = 1`,
  `m = 2`; the counterexample that finite normalization alone does not make the
  curve regular before blowups.
- Recorded narrowing (deliberate, consistent with the design): the pair resolves
  reduced curves; Stacks 54.15.5 and the 54.4.1 machinery for non-reduced schemes
  and embedded points are disposed `out-of-scope` with written reasons, and no
  higher-dimensional or relative-SNC statement is made. Consequently the pair does
  not carry the full 54.15.6 statement for arbitrary proper closed subschemes; that
  is the commissioned reduced-curve scope, not an omission.

## Prerequisites and dependency scope

- Direct references: 62 distinct dependency ids — 28 resolve to the in-run batch-2
  A page `blowups-exceptional-divisors-and-strict-transforms`, 1 to the in-run
  batch-24 item `thm-nonaffine-regular-local-ring-is-ufd` (order 885, draft item file
  present and its height-one induction/determinant proof read by the batch author),
  and 33 to published items tracked at HEAD (0 untracked drafts, 0 missing).
- Full recursive closure: 151 nodes = the 15 page items + 30 in-run suppliers
  (28 batch 2, 2 batch 24, including the Picard-localization supplier of the UFD
  item) + 106 published items tracked at HEAD; every reference resolves, with zero
  missing ids at any depth and no dependency on an unbuilt or unselected pair, a
  forward reference, or a citation-only claim.
- Page level: all four A901 `requires` resolve (in-run batch 2 and batch 24 are
  ordered 366.091 and 885, both before 901; the two published pages exist under
  `library/commutative-algebra/` and `library/scheme-theory/`); B902 requires only
  A901.
- Consumers: no in-run pair consumes a batch-27 item (0 reverse edges in the run's
  cross-batch records). The only downstream is the future, unbuilt A913
  `birational-morphisms-contractions-and-surface-singularities`; nothing in this run
  depends on this pair.
- **Unmet prerequisites: none confirmed.** No planned item or result of this pair
  requires a claim absent from both the published library and the current scaffold.
- Two low-severity dependency-edge observations (not omissions; no file edited):
  (i) the statement parentheticals "for a reduced curve of finite type over a field
  this exists and is finite by the normalization theory of curves" in
  `lem-normalization-factors-through-blowup-of-curve-point` and "this is automatic
  when `Z` is of finite type over a field … by the normalization-finiteness theorem
  for integral finite-type curves" in
  `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface` carry no
  declared dep edge; the supporting material exists (published
  `thm-integral-closure-finite-finite-type-domain-over-field`,
  `thm-normalization-glues-integral-finite-type-curves`; in-run batch-2
  `thm-normalization-reduced-curve-exists-finite`). Recommended owner action: have
  the item authors add the edge if the parentheticals are kept. (ii) the in-run
  batch-2 A page scaffolds `thm-blowup-regular-surface-closed-point-regular` with
  the same claim as this page's
  `lem-blowup-of-closed-point-of-regular-surface-is-regular`; both are legal items,
  no consumer edge couples them, and the owner may reconcile the duplication at
  splice.

## Source coverage

- A page: 6 sources, 23 harvested rows — 14 `included`, 6 `inline`, 3
  `out-of-scope`, every exclusion carrying a written reason. Sources: Stacks
  *Resolution of Surfaces* §54.15 complete (0BI3–0BIC, including the invariant
  54.15.2.1), *Étale Morphisms* 41.21.1–41.21.2 (0BIA), *More on Morphisms* 37.44.1
  (02LS) with *Varieties* 33.17.2 (0AB7), *Divisors* 54.3.1 (0AGQ), and Vakil
  *Rising Sea* §28.4.4 (2025-10-21 PDF, pp. 781–782).
- B page: 2 sources, 6 rows — 3 `included`, 2 `inline`, 1 `out-of-scope` with
  reason: Stacks 54.15.3/54.15.4 (0BI7/0BI8) and Vakil §28.4.4 for the field-case
  instance.
- Independent spot checks confirm the load-bearing locators: 54.15.1 is the
  four-way equivalence including finite normalization; 54.15.2 is the ambient strict
  transform statement; 54.15.3 is the chart computation in `A[m/x_1]` with the
  multiplicity drop; 54.15.4 is the separation lemma; 54.15.6 states the inverse
  image is Cartier supported on an SNC divisor — each matching the scaffold's
  claimed use.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-27.coverage.json --json`:
  2 pages, 29 harvested, 0 errors, 0 warnings.
  `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-27.pages.json`:
  15 items, 0 errors. `node tools/item-dependency-levels.mjs check --run
  frontier-38-owner-30`: 812 items / 60 pages, maximum level 16, no batch-27 finding.
- Residual source uncertainty (owner-visible, not a scope blocker): a second
  independent full treatment of the exact arbitrary-Noetherian scope was not
  retrieved; Vakil §28.4.4 is the finite-type-over-a-field projective-curve case
  only, and the recorded search found no open complete proof of the general scope.
  The design's gate asks for that second treatment; the binding owner direction
  permits the single fully reproduced Stacks treatment, and the batch notes record
  the shortage as an open Step-5 source-reconciliation item.

## Residual uncertainty

1. Proof correctness and authorship are out of scope for 3a; manifest strategies are
   routes, not proofs, and belong to Steps 3b/5.
2. This receipt is bound to the current A+B manifest content hash (ids, kinds,
   titles, statements). Any later item-list or statement change voids it and requires
   a fresh 3a decision.
3. The second-treatment shortage and the two dependency-edge observations above are
   the only open items; none of them is an omitted topic, result, or example.

## Decision

`sufficient`: the scaffolded A/B pair carries every definition, result, example, and
counterexample the AG-CRES-1 design and its library role require (strictly broader
than AV-26, not a supplier to it, no higher-dimensional claim), its eight local
additions are documented closures of the commissioned Stacks route rather than scope
expansion, the primary source §54.15 is fully reproduced locally with fetch-verified
locators, all 62 direct and 151 transitive dependencies resolve to published or
earlier-ordered in-run material with no unmet prerequisite, and no omitted topic
warrants enrichment or a pair merger.
