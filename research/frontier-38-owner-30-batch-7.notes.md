# Frontier 38 owner 30, batch 7: Step 1 construction notes

Owned pair: `projectives-standard-filtrations-and-bgg-reciprocity` (A page,
order 510.009) and `projectives-standard-filtrations-and-bgg-reciprocity-examples`
(B page, order 510.010), both `lie-theory`. The binding
`research/frontier-38-owner-30-owner-authoring-direction.md` was read before
construction; its BGG clause ("the BGG projective-Verma claim uses a finite
block truncation with its exact hypotheses") is followed exactly. No published
item, shared plan, engine state or verdict was edited. This dispatch rebuilt an
in-flight batch: the manifest left by the previous attempt was reviewed item by
item, repaired where unsound, and completed with the coverage, notes,
cross-batch and readiness records.

## Design, plan, and conflicts

- The design is RL-5 of `research/plan-representation-theory-lie-track.md`
  (the section beginning at line 958). All sixteen A-page design rows
  (`def-truncated-category-o-at-a-finite-weight-ideal` through
  `thm-translation-to-and-from-a-wall-on-standard-modules`) and all five B-page
  design rows are present in the manifest, at the design's scope and with the
  design's conventions (finite downward-closed ideal of one linkage class;
  maximality, not antidominance; reciprocity through restricted duality).
- `research/plan-spec.json` carries the pair at 510.009/.010 with the five
  declared `requires` and **empty** `items` arrays, so the design section
  governs the inventory, as in the sibling batches of this run. No page, pair
  or scope change is requested.
- No design/plan conflict. Two design locators were checked against the fetched
  full texts and refined in the coverage record, not escalated:
  - Etingof 18.757: the design's §16/§20/§§23-24 range is correct; the added
    rows use the printed pages of the fetched edition (Lemma 23.4 pp. 116-118,
    Theorem 24.1 and Remark 24.2 pp. 119-121).
  - Lin Chen lectures 8-9: the design's "pp. 1-10 and pp. 1-7" match the
    fetched files (§4 of lecture 8 is pp. 6-8, Appendix A pp. 8-10; §3 of
    lecture 9 is pp. 4-7).

## Inventory

36 items: 29 on the A page and 7 on the B page (both far below the 100-item
cap).

- A page: the 16 design items plus 13 local prerequisites, all proved from
  published suppliers or from earlier items of this page:
  `lem-maximal-label-vectors-in-a-finite-truncation-are-singular`,
  `lem-dominant-weights-are-maxima-of-their-weyl-orbits`,
  `lem-finite-dimensional-tensors-reach-every-block-simple`,
  `lem-finite-length-objects-decompose-into-indecomposables`,
  `lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags`,
  `lem-maximal-weight-verma-peels-off-a-standard-filtration`,
  `lem-direct-summands-of-verma-filtered-objects-are-verma-filtered`,
  `lem-hom-to-costandards-counts-verma-flag-factors`,
  `cor-projective-standard-labels-lie-above-the-head`,
  `def-dot-action-facets-and-single-wall-translation-data`,
  `lem-single-wall-tensor-weight-exclusion`,
  `lem-weight-norm-bound-for-finite-dimensional-simple-modules`,
  `lem-dominant-norm-distance-comparison`.
- B page: exactly the five designed leaves plus two hypothesis tests
  (`ex-truncation-projectivity-does-not-mean-block-projectivity`,
  `cex-standard-filtrations-are-not-closed-under-quotients`) that make the
  maximality hypothesis and Warning 1.9 visible at the smallest rank.

## Proof route (as scaffolded, in dependency order)

1. Truncation at a finite downward-closed ideal `Gamma` of one linkage class;
   maximality of a label makes every weight-lambda vector of every object of
   `O_Gamma` singular (no weight may exceed a maximal label), and the weight
   functor is exact; hence a maximal-label Verma is projective in the
   truncation (`lem-maximal-label-vectors-...`, `lem-maximal-verma-...`).
2. Finite-dimensional tensoring preserves projectives; block projection does
   too; tensoring a maximal-label Verma by `L(N rho)` produces a projective in
   any prescribed block mapping onto its simple, so `O` has enough projectives
   and projective covers are unique (`lem-finite-dimensional-tensors-...`,
   `thm-category-o-has-enough-projectives`,
   `prop-projective-covers-in-o-are-indecomposable-and-unique`).
3. Standard (Verma) flags, independence of multiplicities via the standard
   basis of `K_0(O)`, preservation of flags under finite-dimensional tensoring
   with multiplicities `dim E_eta`, peeling of a maximal-weight Verma, and
   closure of Verma-filtered objects under direct summands give the
   standard-filtration theorem for projectives
   (`thm-projectives-in-category-o-have-verma-flags`).
4. `Hom(Delta(mu), nabla(nu)) = C` iff `mu = nu` and
   `Ext^1(Delta(mu), nabla(nu)) = 0`; induction on flag length converts Hom into
   Verma-flag multiplicities; restricted duality plus
   `dim Hom(P(lambda), X) = [X : L(lambda)]` proves BGG reciprocity, the
   triangular restriction on projective flags, and costandard flags of
   injectives.
5. Single-wall translation data (dot-antidominant regular `lambda`, `mu` on one
   wall, translating weight `nu`): the tensor-weight exclusion lemma (proved
   with the weight-norm bound and the dominant distance-comparison lemmas)
   identifies the unique surviving standard factor; translation of standards
   and the two-step flag of the reverse translation follow.

## Repairs made to the in-flight manifest (all recorded because the previous
attempt's file failed the scaffold joins)

1. **False auxiliary lemma replaced.** The previous
   `lem-weights-in-a-finite-truncation-lie-below-its-maximal-labels` asserted
   that every weight of every object of `O_Gamma` lies below a maximal label
   `lambda` of `Gamma`. That is false for a general finite downward-closed ideal
   with incomparable maximal elements: take `g = sl3`, `lambda = rho` and
   `Gamma = W·rho \ {rho}`; the simple `L(mu)` for `mu = s_1·rho` lies in
   `O_Gamma` and has the weight `s_1·rho`, which is incomparable with, hence not
   below, `s_2·rho` (the other maximal element of `Gamma`). The replacement
   `lem-maximal-label-vectors-in-a-finite-truncation-are-singular` states and
   proves exactly what the projectivity argument needs: no weight strictly
   above a maximal label exists, every maximal-label vector is singular, and
   the weight functor is exact (the principal-ideal case is noted as the one
   where the stronger weight bound does hold).
2. **Wrong dependency levels.** Seven items carried labels computed before the
   dependency arrays were final (`lem-hom-from-projectives-...` 2 vs 5,
   `thm-projectives-in-category-o-have-verma-flags` 4 vs 5,
   `lem-hom-to-costandards-...` 2 vs 1, `thm-bgg-reciprocity` 5 vs 6,
   `cor-projective-standard-labels-...` 6 vs 7, `cor-injectives-...` 6 vs 7,
   `cex-a-projective-verma-flag-need-not-split` 9 vs 8). All labels were
   recomputed from the final `deps` arrays; no cycles.
3. **Unresolvable dependency.** `def-translation-functor-between-o-blocks`
   depended on a non-existent `def-h-semisimple-module`. It now depends on the
   published `def-weight-and-weight-space-of-a-lie-algebra-representation`,
   which fixes the weight-space notation used throughout.
4. **Missing dependencies added.** `cor-projective-standard-labels-...` now
   depends on `def-verma-flag-and-its-multiplicities` and
   `thm-projectives-in-category-o-have-verma-flags` (flag existence and the
   multiplicity notation it uses); `thm-translation-to-and-from-a-wall-...` now
   depends on `thm-category-o-decomposes-by-generalized-central-character` and
   `cor-central-characters-are-dot-weyl-orbits` (both used in its proof route);
   `ex-translation-through-the-sl2-wall` now depends on
   `lem-every-nonzero-verma-submodule-contains-a-singular-vector` and
   `lem-maximal-verma-is-projective-in-a-finite-truncation`;
   `lem-finite-dimensional-tensors-reach-every-block-simple` now depends on
   `prop-highest-weight-of-the-dual-representation` (for `E^* = E`); the
   weight-space definition was added wherever weight multiplicities of a
   finite-dimensional module are used.
5. **Unsupported strengthening removed.** The previous version of
   `thm-translation-to-and-from-a-wall-on-standard-modules` claimed *nonsplitness*
   of the two-step reverse translation. That is true but needs the
   simple-translation statement of Lin Chen Theorem 3.12(iii) (equivalently a
   head computation), which is not part of the design and was not scaffolded;
   the design's claim is exactly the two-factor flag. The flag and
   Grothendieck-class statement are kept; the sl2 example obtains `P(-2)` and
   nonsplitness independently, from projectivity of `L(-1)` in its block plus
   the flag multiplicities; the reverse-direction norm comparison in part (b)
   is stated with the dominant weights `-lambda_bullet` (regular) and
   `-mu_bullet`, matching the distance-comparison lemma's hypotheses exactly.
6. **Two local prerequisites added for the exclusion lemma.** The previous
   route invoked "Etingof's norm-comparison lemma" with no local item. The
   replacement proof route uses two scaffolded lemmas:
   `lem-weight-norm-bound-for-finite-dimensional-simple-modules` (weights of
   `L(nu)` lie in the norm ball, equality only on `W nu`, multiplicity one) and
   `lem-dominant-norm-distance-comparison` (dominant `xi`, `eta`: `|xi - w eta|`
   is minimised at `eta`, with the equality case `w eta in W_xi eta`). Both are
   proved from published items; Etingof Lemma 23.4 remains a cited source.
7. **SL2 wall datum made consistent with the definition.** The A-page
   definition and the translation theorem use the dot-*antidominant*
   representative; `0` is not dot-antidominant. The B example now uses the
   datum `(-2, -1)` (same central character as `(0, -1)`), and justifies
   `Delta(-1) = L(-1)` from the explicit sl2 action plus
   `lem-every-nonzero-verma-submodule-contains-a-singular-vector` rather than
   from the strict-antidominance corollary, which does not apply on the wall.
8. **Counterexample sentence corrected.** The kernel remark in
   `cex-standard-filtrations-are-not-closed-under-quotients` was a
   non-sequitur (the kernel in its sequence *is* Verma-filtered); the item now
   states only the quotient failure and its proof.
9. **Dependency-free claims.** `def-verma-flag-and-its-multiplicities` records
   `justified_by: [lem-verma-flag-multiplicities-are-independent-of-the-flag]`
   for the well-definedness of `(X : Delta(mu))`, matching the schema.

## Sources

- Four full texts back the pair, all retrieved and inspected in full at
  harvest time and stamped by `source-fetch-check --stamp`: Etingof 18.757
  (3,494,075 bytes), Lin Chen Lecture 8 (398,363 bytes), Lin Chen Lecture 9
  (353,100 bytes), Gaitsgory Geometric Representation Theory (483,626 bytes).
  The pair therefore has two independent complete treatments plus a third
  check, all fetch-verified; the coverage file records the per-result
  dispositions (73 harvested rows, 0 undecided).
- Humphreys, *Representations of Semisimple Lie Algebras in the BGG Category O*
  is retained only as a title-only bibliographic locator for the facet
  definition, the Key Lemma and §7.6/§7.12 in three items: the AMS landing
  page `https://www.ams.org/books/gsm/094/` answers a Cloudflare challenge
  (HTTP 403, no full text) and the kolxoz/nzdr.ru copy already cited by three
  published items is a 404. Every result those locators support is covered by
  the fetch-verified treatments above, so no item's statement or route depends
  on an unfetched text. This is recorded rather than escalated; a missing
  second locator is not a blocker under the owner direction.
- Published source defect for the canonical ledger (not blocking this batch,
  no statement affected): `cor-restricted-duality-preserves-linkage-blocks`,
  `def-integral-weyl-group-of-a-weight` and
  `ex-a-singular-a2-central-character-summand` cite the dead URL
  `https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20...pdf`
  (HTTP 404 on 2026-10-03); the publisher page is bot-walled. Planned repair:
  retire the dead URL once a live redundant backing is confirmed for the
  Humphreys locators, or re-point to an accessible edition.

## Checks run (actual results, 2026-10-03)

- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`:
  0 errors for batch 7 (the 20 reported errors are empty scaffolds of other
  batches, awaiting their own Betas). Maximum in-batch level 9.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-7.pages.json`:
  36 item(s), 0 normalized, 0 error(s). Whole-run variant over all 30 batch
  manifests: 659 item(s), 0 normalized, 0 error(s).
- `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-7.pages.json`:
  36 scoped item(s), 0 error(s), 0 warning(s); the whole-run invocation
  reports 659 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-7.coverage.json`:
  2 page(s), 73 harvested result(s), 0 error(s), 0 warning(s).
- `node tools/source-fetch-check.mjs --coverage ... --stamp`:
  7/7 source(s) fetch-verified; check mode also 7/7 resolved.
- `node tools/validate-plan.mjs research/plan-spec.json`: OK (page order
  acyclic and consistent; 289 planned pages still carry no item list).
- `node tools/fwdcheck.mjs`: OK. `node tools/extcheck.mjs`: OK (two
  pre-existing informational findings on unrelated published items).
- `node tools/depsource.mjs`: OK, 0 unresolved.

## Unresolved findings and instructions for Step 3

- Re-record of the two readiness receipts invalidated by the final manifest edit
  (`thm-translation-to-and-from-a-wall-on-standard-modules` and its B consumer
  `ex-translation-through-the-sl2-wall`) was performed after the edit; all 36
  batch-7 receipts verify against the current bytes (checked with the tools'
  own `step1Decision`).

- No mathematical escalation: every A item has a complete proof route with met
  prerequisites (published or earlier on the page), and every B item is a leaf
  whose verifications use A items only.
- Step 3 must not link B-page items from A items: the A-page theorem
  `thm-translation-to-and-from-a-wall-on-standard-modules` mentions the sl2
  example prose only; a wikilink there would create a reversed reference.
- `def-verma-flag-and-its-multiplicities` must carry the recorded
  `justified_by` in the authored item, not in `deps`.
- The two B-page additions beyond the design's leaf table are hypothesis tests
  with their own complete arguments; they are not padding and should stay on
  the B page.

## Step 3b addendum (2026-10-03)

All 36 items are authored and both pages written; every batch gate listed in
`research/frontier-38-owner-30-step3b-pair-projectives-standard-filtrations-and-bgg-reciprocity.md`
is green and all 36 Step-3b decisions are recorded `accept`. Changes made
after Step 1: the manifest deps were synchronised to the authored item files
(24 rows), one dependency level was corrected
(`cex-a-projective-verma-flag-need-not-split`: 8 -> 9), and the seven B-page
dependencies on other examples pages were replaced by a local rank-one
computation plus A-page suppliers (depcheck now reports no finding for any of
the 36 items). The Step 3a `sufficient` scope receipt remains current for the
pair. The stale note above about 20 dependency-level errors from other
batches is superseded: the current run check reports 0 errors.
