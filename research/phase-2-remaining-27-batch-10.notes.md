# Phase 2 remaining 27 — beta batch 10 construction evidence

Status: **READY FOR OWNER/OPERATOR RECONCILIATION**. The owned A page has
19 items and its B companion has 6. All 25 have current non-owner `ready`
records. These records are Step-1 construction evidence, not publication,
independent mathematical approval, a verdict, or the Step-3 review.

No published content, shared plan, selected pair, engine state, shared ledger,
or verdict was edited. The owned writes are the pages manifest, coverage,
these notes, 25 item-readiness records, and the batch cross-dependency input.

## Scope and controlling evidence

I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`,
`briefs/beta-scaffold.md`, the dispatch/task evidence,
`briefs/tasks/frontier-dependency-ledger.md`, the current plan entry, and the
complete AT-19 section in `research/plan-algebraic-topology-track.md`. I read
the binding `research/phase-2-remaining-27-owner-authoring-direction.md` before
constructing any item. Live engine state was taken from `.autopilot/`: it
currently describes the unrelated `frontier-23` run, so no concluded
`research/*RESUME.md` was treated as live evidence for this run.

The two supplied design locators are not competing designs. Line 2210 begins
the complete AT-19 A/B design section and therefore controls the inventory,
scope, conventions, warnings, and proof route; line 2243 is the nested B-page
subsection within that same section. The owner direction additionally controls
the tautological-class construction and odd-rank Euler proof.

## Plan/design reconciliation

`research/plan-spec.json` agrees with the dispatch and prose design on page IDs,
title, category, orders 366.037/366.038, companion relation, and the A-page
`requires` pair
`bocksteins-steenrod-squares-and-cohomology-operations` and
`leray-hirsch-thom-isomorphism-and-gysin-sequences`. Its empty item arrays are
the pre-scaffold state, not a design conflict. No conflict, page split, selected
pair change, new prerequisite pair, or owner escalation was required.

The only interface reconciliation is local and non-defective: the earlier
published page already supplies
`def-thom-euler-class-of-an-oriented-vector-bundle`. The designed
`def-euler-class-by-zero-section-pullback-of-the-thom-class` is therefore a
typed alias/normalization bridge, explicitly spelling out
`e(E)=s^*j^*u_E`, rather than a competing Euler construction.

## Mathematical and transitive dependency audit

- The degree-one class on `P(E)` is defined from a classifying map of
  `gamma_E`, without using `w_1`. Its next lemma proves independence from the
  classifying-map choice and restriction to the standard fiber generator.
  Leray–Hirsch is invoked only after this fiber-basis statement, and the
  Stiefel–Whitney coefficients are defined only after the monic projective
  bundle relation is established.
- Naturality uses the pullback square of projective bundles and coefficient
  uniqueness. The real splitting space is built iteratively with bundle
  metrics; projective-bundle freeness proves injectivity at each stage.
- The Whitney sum proof follows the complete relative-cohomology argument on
  `P(E⊕F)`: the two characteristic polynomials lift relative to disjoint
  projective subbundles, their relative product vanishes absolutely, and monic
  relation uniqueness gives the convolution formula. It does not assume the
  desired formula inside the splitting construction.
- `H^*(BO(n);F_2)` is proved by Gysin induction on the sphere bundle of the
  universal bundle. The degree-`n` kernel generator is identified with `w_n`
  by pulling back to `n` copies of the universal real line, so this argument
  does not forward-reference the later general theorem `e_2=w_n`.
- The orientability statement checks line-bundle classification, tensor
  additivity, the determinant-line sign cocycle, and the published equivalence
  between orientation and `SO(n)` reduction.
- Euler naturality, orientation sign, and the ordered Whitney product are
  derived from the corresponding Thom-class results. The mod-two equality
  `e_2(E)=w_n(E)` uses a common splitting space, the line case, Thom
  self-intersection, and injectivity. The nowhere-zero-section implication uses
  the disk/sphere pair exact sequence.
- For odd positive rank, `-id` is used as the orientation-preserving map
  `(E,o)→(E,-o)`. Oriented naturality and the orientation-sign law give
  `e(E,o)=e(E,-o)=-e(E,o)`. No homotopy of fiberwise `-id` to the identity is
  asserted.
- The Thom identity uses the line case, top-square normalization,
  self-intersection, Cartan, Whitney products, and injective splitting pullback.
  Its Steenrod and Thom inputs were checked in the two required published
  prerequisite pages.
- The B-page converse counterexample clutches an oriented rank-three bundle on
  `S^4` with the non-null `SU(2)→SO(3)` cover, proves `e=0` from
  `H^3(S^4;Z)=0`, and rules out a section by reduction to an `SO(2)` clutching
  map. The odd-rank example on `RP^∞×RP^∞` has
  `E=L_a⊕L_b⊕L_{a+b}`, so `w_1=0` and
  `w_3=ab(a+b)≠0`; reduction mod two and the odd-rank result make its
  integral Euler class nonzero of order two.

The published statements and proofs actually used were opened and checked,
including real and oriented bundle classification, projective-space
cohomology, Leray–Hirsch, Thom existence/naturality/product/sign conventions,
Gysin, Steenrod naturality/top-square/Cartan, orientation reduction, clutching,
covering-space lifting, sphere degree, UCT, and bundle splitting. Their
hypotheses, directions, coefficient conventions, and publication states match
the manifest uses. The owned dependency graph has no missing, circular,
forward, or inadequate edge. No Recorded result is consumed, and no actual
proof path reaches `deferred-set-theory-beyond-choice`.

## Choice ledger and published defects

`def-real-projective-bundle-and-tautological-line` is the choice-free local
construction. Classifying-map existence, the general Thom theorem, bundle
metrics, classification, and affected consumers state AC, declare
`def-axiom-of-choice`, and identify the inherited or direct use in
`axiom_strength`/proof strategy. The final audit propagated AC directly to the
four consumers that initially inherited it only transitively. No incompatible
axiom branch is merged.

No defect was found in an actual published prerequisite, and no unrelated
published defect requiring a canonical-ledger entry was discovered. Planned
future suppliers were not treated as published.

## Source evidence and dispositions

Coverage records 55 harvested results, each included/inline with an item ID,
deferred to an existing destination, or excluded with a specific scope reason.
Both pages use two independent complete authoritative treatments:

- Allen Hatcher, *Vector Bundles & K-Theory*, author-hosted 124-page PDF,
  Chapter 3 §§3.1–3.3 (printed pp.77–106) and the clutching construction in
  §1.2 (printed pp.25–27). Full-text stamp: 1,563,812 bytes,
  SHA-256 prefix `04282b30dfa63051`.
- Haynes Miller, *MIT 18.906 Algebraic Topology II*, official 162-page lecture
  notes, Lectures 33–37 (printed pp.119–142). Full-text stamp: 1,467,813 bytes,
  SHA-256 prefix `6fb68a6d53af20b4`.

The Hatcher retrieval succeeded directly. The first Miller retrieval returned
404; the alternate download form with a browser user agent returned the full
PDF, so recovery stopped after that successful retry. The original failure and
successful recovery remain in coverage history. There are no drops,
`source_resolution` waivers, source-count shortfalls, or unresolved source
uncertainties.

## Cross-batch dependency input

`research/phase-2-remaining-27-batch-10.cross-batch-dependencies.json` is `[]`.
Both A-page prerequisites are already published, the B page consumes its A page
inside this batch, and the later AT-20 pair owns any downstream consumer edge.
No same-run supplier owned by another batch is used, so no shared-ledger row is
required and the shared ledger was not edited.

## Checks actually executed

Owned batch:

- `manifest-deps`: 25 items, 0 normalized, 0 errors.
- `content-policy --manifest-only`: 25 scoped items, 0 errors, 0 warnings.
- `coverage-checklist --require-destination`: 2 pages, 55 harvested results,
  0 errors, 0 warnings.
- `source-fetch-check`: 4/4 page-source entries fetch-verified and resolved,
  with 0 documented drops.
- `url-sweep --recover --fail-on-dead`: 2/2 unique source URLs live, 0 failed,
  archive-recovered, or suspect URLs.
- `source-backing --require-verified`: all 15 authored result records remain
  backed by an openable verified source.
- Readiness audit: 25/25 owned records current `ready`; 0 owned open, stale,
  missing, or escalated records.

Whole run at the final snapshot:

- `manifest-integrity --run phase-2-remaining-27`: all 54 owed pages present,
  with 0 missing and 0 scope additions.
- Whole-run `manifest-deps`: 283 items, 0 normalized, 0 errors.
- Whole-run `content-policy --manifest-only`: 283 items, 0 errors, 0 warnings.
- `validate-plan research/plan-spec.json --repo . --max-items 60`: success;
  declared order is acyclic and consistent, with no item-level cycle, forward
  reference, B-page dependency, or unresolved ID among the 1,134 itemized
  pages. It reports 485 planned pages not yet carrying item lists and existing
  redundant-prerequisite notices.
- `extcheck --quiet`: final verdict OK with 55 existing warnings for published
  consequences of recorded-not-proved material; none is an owned item or an
  actual prerequisite of this batch.
- The whole-run Step-1 readiness command remains open. At the final check it
  reported 239/283 currently constructed items ready and 82 non-owned work
  rows (including 38 empty page inventories and readiness made stale by
  concurrent supplier changes), with no owned Batch-10 work row.

Owner/operator reconciliation and the full engine gate follow construction.
