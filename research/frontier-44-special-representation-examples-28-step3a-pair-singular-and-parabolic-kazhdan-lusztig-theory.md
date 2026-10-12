# Step 3a scope review — pair `singular-and-parabolic-kazhdan-lusztig-theory` / `singular-and-parabolic-kazhdan-lusztig-theory-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role/label: alpha / `step3a-pair-singular-and-parabolic-kazhdan-lusztig-theory-b022dda4dda49b23`
- Batches: 15 (A page `singular-and-parabolic-kazhdan-lusztig-theory`, order 1786; B page
  `singular-and-parabolic-kazhdan-lusztig-theory-examples`, order 1787)
- Date: 2026-10-10
- Current scope hash (recorded value): `f6179825853b6692f94297a77c2dbcbe74d4f6ff82e928aea8d64e821d229e8a`
- **Decision: `sufficient`** — scope only; this is not item approval, proof
  certification or an owner record.

## Inputs read

- Manifests: `...-batch-15.pages.json` (both pages, 18 items: 14 A + 4 B),
  the A/B entries in `research/plan-spec.json` (pair requires KL-4, root
  systems, projective/standard filtrations, `parabolic-subgroups-and-double-coset-geometry`;
  empty item inventories — the scaffold carries the items),
  `...-batch-15.cross-batch-dependencies.json` (6 rows, all `open`),
  `...-scope-ledger.json`, `...-planning-notes.md`, `...-batch-15.notes.md`.
- Coverage: `...-batch-15.coverage.json` (2 pages, 9 source rows, 41 harvested
  results).
- Prose/design: KL-5 of `research/plan-kazhdan-lusztig-track.md` (design table
  L166–193 and B inventory L339–401), the pair's page rows in §1, and the
  published sibling `library/special-topics-in-representation-theory/kazhdan-lusztig-bases-polynomials-and-cells.md`
  for the track's page shape.
- Owner decisions: `...-owner-authoring-direction.md` §"Owner genuine parabolic
  and singular interface correction — 2026-10-08" (binding for this pair) and
  §"Owner Category O prerequisite/order decision";
  `...-owner-category-o-batch15-local-proof.md` (8 sections),
  `...-owner-category-o-batch15-review.json`,
  `...-owner-category-o-batch15-readiness-pass.json`,
  `...-owner-category-o-batch15-finite-matrices.json`,
  `...-owner-category-o-batch15-metadata-integration.json`.
- Drift/readiness: `...-alpha-step1-drift.md` §`singular-and-parabolic-kazhdan-lusztig-theory`
  (verdict `drift-applied`, owner correction adding
  `parabolic-subgroups-and-double-coset-geometry`), all 18 batch-15
  `step1-*.json` records (current: 18/18 `ready`, owner).
- Sibling frontier inputs: batch-14 page `the-kazhdan-lusztig-character-and-multiplicity-theorem`
  and its supplier items `def-regular-integral-dot-orbit-labelling-convention`,
  `thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values`,
  `prop-translation-identifies-regular-integral-blocks` (current scaffold
  interfaces checked); published KL-1 Hecke items, published single-wall
  translation items, published Coxeter/parabolic and Lie-theory suppliers.

## A-page scope (14 scaffolded items)

The manifest inventory equals the KL-5 design table item for item, in the
design's prerequisite order (the three "local prerequisite" rows — the
standard-bases/actions/bars lemma, the parabolic-basis existence theorem and
the facet tensor-weight exclusion — are folded into the current design table
as rows 2, 3 and 4 and carry their exact design ids):

1. `def-parabolic-hecke-module-and-antispherical-standard-basis` (spherical
   `M^J` and antispherical `N^J` modules, `W_J`, `^JW`/`W^J`);
2. `lem-the-parabolic-hecke-modules-have-standard-bases-actions-and-compatible-bars`;
3. `thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis`;
4. `lem-facet-tensor-weight-exclusion`;
5. `def-parabolic-kazhdan-lusztig-basis-and-polynomials` (both polynomial
   families, Deodhar `u=-1`/`u=q` dictionary, spherical reduction);
6. `thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones`;
7. `def-singular-integral-category-o-block-and-stabilizer`;
8. `thm-translation-to-the-wall-on-verma-simple-and-projective-objects`;
9. `thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials`
   (spherical normalization, `k(w)=w_J w^{-1} w_0`);
10. `def-standard-parabolic-and-levi-subalgebras-from-simple-roots`;
11. `def-parabolic-category-o-for-a-standard-parabolic`;
12. `thm-parabolic-category-o-is-a-highest-weight-category`;
13. `thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials`
    (antispherical `n_{y,x}(1)`, dominant regular base);
14. `thm-parabolic-kazhdan-lusztig-character-formula` (weighted inverse of the
    unitriangular antispherical matrix).

This covers the pair's declared subject — the antispherical/spherical parabolic
Hecke modules and their KL bases, the singular integral block with translation
to the wall and its spherical multiplicities, and genuine parabolic category O
with its highest-weight structure, antispherical multiplicities and character
formula. The plan's own exclusions are explicit and are part of the intended
scope, not omissions: no categorical singular/parabolic equivalence, no
Koszul/Ext grading, no geometric realization, and no super-duality or
imported source category with different objects (owner direction; plan §3
ledger and §4 hard-gate checklist). The pair keeps orders 1786/1787 and the
owner-corrected `requires` set of four pages.

Intended role in the library: KL-5 consumes KL-4's regular-block multiplicity
suppliers and the published KL-1/translation/Coxeter items, and it is consumed
by the KL-6 page `parabolic-category-o-and-fock-space-bases` (plan KL-6; the
page-level dependency is on record) and by its own B page. The two interfaces
KL-6's design names — the antispherical polynomial family and the spherical
singular coefficients at one — are exactly rows 5/6 and 9.

## B-page scope (4 scaffolded items)

The four items equal the plan's KL-5 B inventory by exact id:
`ex-parabolic-kl-polynomials-for-s-three-modulo-s-two`,
`cex-spherical-and-antispherical-normalizations-give-different-polynomials`,
`ex-translation-to-a-singular-wall-in-type-a-two`,
`ex-a-small-parabolic-category-o-character-formula`. They compute both
normalizations for the smallest nontrivial parabolic (S_3/S_2), exhibit the
wall translation on Verma/simple/projective objects (sl_2 and an sl_3 singular
block, including the big antipodal-projective flags read from columns), and
invert both the antispherical and the spherical matrices in a small case, with
the counterexample fixing the boundary that the two normalizations may not be
substituted for one another.

The B page requires only the A page; the only dependency edges into the four B
items are two same-page edges (both from the small parabolic character
example). No other run manifest declares a batch-15 B item, and no cross-batch
ledger row names the B page: it is a dependency leaf as designed.

## Prerequisite closure — no unmet prerequisites

- `node tools/manifest-deps.mjs ...-batch-15.pages.json` → 18 items, 0 errors.
- The 18 items have 107 distinct direct dependencies: 88 are published
  (`items/<id>.md`, all `status: published` — including the KL-1 Hecke items,
  the single-wall translation/facet items and the `def-cg-…`/`thm-hh-…`
  parabolic-supplier items on the published `parabolic-subgroups-and-double-coset-geometry`
  page); 19 are scaffolded in this run (16 batch-15 items plus the three
  batch-14 KL-4 suppliers listed above). **0 ids are absent from both the
  published library and the current scaffold.**
- An independent transitive walk from the 18 items over the run manifests and
  the published item front matter reaches 4338 distinct ids with **0 missing**
  (nothing that is neither on disk nor in this run's scaffold).
- Cross-batch ledger: 6 rows, all `open` (the three batch-14 item/page
  suppliers of rows 9 and 13 are scaffolded but not authored, and the KL-6
  consumer edge). Open at Step 3a is the expected supplier-before-consumer
  state; nothing here is absent.
- Two historical batch-15 escalations (rows 13/14, recorded before the owner's
  supplier-first local repair) are preserved as history; both current
  `step1` records are owner-`ready`, and the owner review records
  `missing_results: []`. No new scaffold addition or pair merger is
  recommended.

## Source coverage

9 source rows across the two pages, all `fetch_verified`
(`source-fetch-check` 9/9 resolved): Libedinsky–Williamson *The anti-spherical
category* §§1.1–1.3/2.1–2.7 (modules, standard bases, right action, bar,
Deodhar alternating sum and spherical reduction), Lin Chen Lecture 9
(standard filtrations, BGG reciprocity, translation functors, facets,
Examples 3.11/3.16), Mazorchuk–Stroppel (properly stratified
parabolic-presentable category, disposed `out-of-scope` with reasons),
Ko–Mazorchuk–Mrđen §§3.1/3.4/4.1–4.2 (blocks, wall translation, O^p),
Björner–Brenti §5.1/§7.7 and Moreau §13.3 (S_3 data; finite Weyl character).
`coverage-checklist --require-destination` → 2 pages, 41 harvested results,
0 errors, 0 warnings, every result disposed. The Mazorchuk–Stroppel
out-of-scope dispositions are exactly the owner direction's category
distinction, not missing coverage.

## Scope-level spot checks (mine; not proof certification)

To be honest about my own understanding rather than repeat the owner's claims:
I recomputed the S_3/S_2 data from the scaffold's own formulas —
`n_{e,s_2s_1}=p_{e,s_2s_1}-v p_{s_1,s_2s_1}=v^2-v^2=0`,
`m_{e,s_2s_1}=p_{s_1,w_0}=v^2` — and checked the sl_2 wall translation
(`M(-2)` simple, `M(0)` with factors `L(0),L(-2)`, `T P(-2)=2P(-1)`) and the
sl_3 singular matrices and `k`-dictionary against the standard antidominant
conventions; the small parabolic inverse `N^{-1}` is the correct integer
inverse. These are the pair's diagnostic boundary cases and they are
consistent at scope level. Proof validity of the general statements is
expressly **not** assessed here.

## Uncertainty

- I did not re-download the source PDFs in this session; the source-coverage
  evidence is the run's fetch-verified stamps plus my statement-level checks
  above. No independent source reading is claimed.
- The exact Deodhar index dictionary (`u=-1` spherical, `u=q` antispherical,
  `k(w)=w_J w^{-1} w_0`) is taken from the owner-corrected interfaces; I
  verified only that the S_3/sl_2/sl_3 consequences recorded in the pair are
  consistent with it.
- Scope of this review: definitions/results/examples coverage, dependency
  closure and source coverage. It is not an authored-item audit, and the
  owner's local proof and 18/18 readiness records are scaffold evidence, not
  independent certification.

## Decision

`sufficient` for `singular-and-parabolic-kazhdan-lusztig-theory`: the planned
definitions, results and examples of the pair adequately cover the intended
subject (KL-5), with no unmet prerequisites absent from the published library
and the current scaffold, adequate and disposed source coverage, and the
designed supplier/consumer roles preserved. Recorded with
`tools/step3-decisions.mjs record-scope`; no scaffold edit is made or
recommended.
