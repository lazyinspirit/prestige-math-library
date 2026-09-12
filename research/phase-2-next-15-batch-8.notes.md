# phase-2-next-15 batch 8 — Brauer's First Main Theorem

## Scope and plan comparison

Owned pair only: `brauers-first-main-theorem` and
`brauers-first-main-theorem-examples`. The current `research/plan-spec.json`
metadata agrees with the generated manifest on orders 510.061/510.062,
category, companions, and all page-level `requires` edges.

One presentational conflict was recorded and resolved in favor of the current
plan: the prose design heading uses “Brauer’s First Main Theorem”, while the
plan title is `Brauers First Main Theorem` (and the B title is the corresponding
dash form). The page metadata preserves the plan spelling; theorem/item titles
use the mathematically conventional possessive. There is no item-inventory
conflict because these plan entries have empty `items` arrays.

The design ID `ex-defect-one-first-main-theorem-boundary` is potentially
misleading: its prescribed case is the trivial defect *group* `D=1`, hence a
defect-zero block, not numerical defect one. The stable unused ID is preserved,
but its title and statement say “trivial-defect-group” and “defect-zero”.

## Mathematical construction and dependency audit

The 12 A items and four B items were scaffolded in the design order. No stable
ID collision was found. Definitions precede their consumers, and each item has
an explicit dependency array.

The primary proof package is the block-bimodule formulation of induction plus
Green correspondence for the diagonal subgroup. This was selected because the
Saunders and Farrell–Lassueur treatments give complete Mackey/Green proofs,
whereas the two inspected central-character treatments invoke a Min–Max block
theorem that is stated but not proved in their relevant ranges. The design's
central-character route is retained exactly where its hypotheses justify it:
for `H≤N_G(D)`, the induced block is identified by
`λ_(b^G)=λ_b∘Br_D`. No such formula is asserted for arbitrary `H`.

The maximal-Brauer-pair step remains in the local-existence proof: a maximal
pair `(D,e)` fixes the literal representative `D` and certifies its defect role.
The actual local block is then the distinguished `N_G(D)×N_G(D)` Green summand
of the global block bimodule. This avoids choosing a nonexistent canonical
representative of a conjugacy class.

The item named `thm-brauer-green-nagao-block-compatibility` does **not** consume
the later Nagao decomposition. Farrell–Lassueur Theorem 40.5 supplies a complete
direct proof: centralizer containment defines `b^G`; if the module's global
block differed, the block-idempotent tensor factorization plus the double-coset
exclusion would make the retained local summand relatively projective for a
proper subgroup of its vertex. That contradicts vertex minimality. This closes
the apparent forward-dependency risk.

Other checked boundary points:

- block induction is a partial operation, so every use has an existence proof;
- defect control has the direction “local defect embeds in a global defect”;
- First Main states a bijection of possibly empty sets;
- `D=1` and `N_G(D)=G` give identity maps;
- the S7 example uses only proved block/defect data, not Craven's explicitly
  conjectural assignment of individual ordinary characters;
- the SL2(Fp) example separates the projective Steinberg defect-zero block from
  the two positive-defect parity blocks.

## Axiom strength

Items invoking the published Green-correspondence theorem explicitly assume AC,
depend on `def-axiom-of-choice`, and identify the use as the inherited selection
of indecomposable summands in that theorem's finite-length decomposition chain.
The block-induction definition, defect-control lemma, transitivity lemma,
centralizer-containment existence lemma, direct block-compatibility theorem,
and dihedral counterexample are choice-free. No item depends on or reaches
`deferred-set-theory-beyond-choice`, and no Recorded result is used as a proof
premise.

## Published prerequisite defect and readiness escalation

All 16 owned item records are `escalated`, even though each has a complete proof
strategy. This is an actual-prerequisite defect rather than unrelated consumer
debt:

- `library/representation-theory/blocks-defect-groups-and-the-brauer-homomorphism.md`
  says `status: published`, but all 37 listed item files say `status: draft`.
  The exact load-bearing draft items examined here are
  `def-block-bimodule-for-the-double-group`,
  `lem-group-algebra-bimodule-is-induced-from-the-diagonal`,
  `lem-relative-projectivity-mackey-intersections-for-finite-modules`,
  `thm-block-bimodule-has-a-diagonal-vertex`,
  `def-defect-group-and-numerical-defect-of-a-block`,
  `thm-vertices-of-modules-in-a-block-lie-in-a-defect-group`,
  `prop-principal-block-has-sylow-defect`,
  `thm-defect-zero-blocks-are-simple-algebras`,
  `thm-brauer-homomorphism-is-multiplicative`,
  `thm-maximal-brauer-pairs-exist-and-are-conjugate`, and
  `thm-maximal-brauer-pairs-detect-defect-groups`, and
  `cor-block-defect-groups-are-p-radical`.
- `library/representation-theory/vertices-sources-and-the-green-correspondence.md`
  likewise says `status: published`, but all nine listed items say
  `status: draft`. The exact load-bearing item is
  `cor-green-correspondence-for-modules-of-vertex-exactly-p`, through
  `thm-green-correspondence-with-exceptional-families`,
  `lem-green-exceptional-family-containment-and-fusion`, and
  `def-axiom-of-choice`.

These files are tracked and were not modified by this batch. The canonical
published-consumer/supplier ledger contains no existing repair row for either
page. There is no separate planned supplier: the nominally published RG14 and
RG15 pages are the intended suppliers. The owner/operator repair is therefore
to review their existing verification evidence and either publish the listed
item files consistently or demote/repair the page publication state. This Step
1 worker has no authority to change either page or its items. Until that repair,
the direct premises are not adequately published and every transitive consumer
in this pair remains escalated.

## Sources inspected

Four complete authoritative treatments were fetched and read at the exact
locators recorded in the coverage file: Martínez's 71-page course notes,
Craven's 87-page monograph, Saunders's 59-page full lecture notes, and the
complete 13-page Farrell–Lassueur chapter. The A page therefore has more than
the normal two independent treatments, including a monograph and two full
lecture-note sets. Every harvested result has an included/inline/deferred/
out-of-scope disposition in the coverage record. No source failed initial
retrieval, so no retry or `source_resolution` record is applicable.

## Cross-batch ledger input

This batch introduces no new current-run A/B pair and no dependency on another
current-run batch. Its B page depends only on its own A page. The owned consumer
input is therefore the empty array; the published RG14/RG15 defect is recorded
above for canonical owner reconciliation rather than fabricated as a current-run
cross-batch edge.

## Validation results

Final Step 1 command results (2026-09-11):

- batch coverage checklist with destination checking: **pass**, one A page,
  41 harvested results, zero errors and zero warnings;
- source fetch check: **pass**, 4/4 complete sources fetch-verified and 4/4
  resolved, with four new byte/hash/page-count stamps written;
- batch-only manifest content policy: **pass**, 16 items, zero errors and zero
  warnings;
- whole-run manifest dependency-array check: **pass**, 454 items, zero missing
  arrays and zero errors;
- plan validation: **pass**, 1,624 pages, no hard error;
- external-reference check: **pass**, no hard error; it reports 55 existing
  repository-wide `unproved-on-published` warnings, none introduced by or
  referenced from this batch;
- manifest integrity: **pass**, all currently owed run manifests present;
- cross-batch ledger refresh: **pass** and deduplicated;
- Step 1 readiness check: the run is intentionally not closed (454 items, 147
  ready, 307 open at the final instant checked); all 16 batch-8 rows are present as
  non-owner `escalated` records. A final proof-line audit subsequently added
  the necessary explicit `cor-block-defect-groups-are-p-radical` dependency to
  the full-vertex corollary, the Mackey/diagonal suppliers to global-to-local
  existence, and the centralizer-containment supplier to local-to-global
  definedness. It also removed the false intermediate claim that `D` must be
  Sylow in `N_G(D)`. The escalations were not overwritten, as required; their
  publication-state blocker remains unchanged;
- repository `depcheck --quiet`: **pre-existing global failure**, 525 errors.
  Its page summary presently indexes both RG14 and RG15 pages as zero-item
  pages even though their page files list 37 and nine draft items respectively,
  consistent with the publication-state defect recorded above;
- whole-run manifest-only content policy: **shared-run failure**, 11 missing
  dependencies, all outside batch 8. They concern the other batches' Hurewicz
  (`prop-homotopies-of-pairs-induce-the-same-map-in-relative-homology`,
  `def-fundamental-group`, `def-path-component`), degree
  (`def-fundamental-class-of-a-compact-oriented-manifold`,
  `def-degree-of-a-map-between-oriented-closed-manifolds`,
  `prop-manifold-degree-is-functorial-and-detected-by-top-cohomology`), and
  affine Kac–Moody (`def-null-root-central-coroot-and-affine-level`,
  `prop-roots-of-an-untwisted-affine-lie-algebra`,
  `thm-loop-and-affine-gcm-presentations-are-isomorphic`,
  `prop-affine-weyl-group-is-a-coroot-lattice-semidir-product`) scaffolds.

For completeness, `audit-manifest` was also run against this pre-authoring
manifest. It reports the expected 16 `missing-source` item-file findings because
Step 1 is forbidden to author `items/*.md`; that check is meaningful after the
authoring stage and does not contradict the clean manifest-only content-policy
or source-coverage results.
