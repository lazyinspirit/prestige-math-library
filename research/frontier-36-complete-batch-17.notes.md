# Batch 17 Step-1 scaffold — Specht modules

Run `frontier-36-complete`, role beta, one representation-theory A/B pair.
The owner direction was read before construction. Its scheme-theory and
algebraic-group instructions do not change this pair. The plan's A/B page
identities, orders 510.047–510.048, category, companion, and `requires` fields
were retained. The A inventory has 17 items, the B inventory four; all 21 have
explicit `deps` and `dependency_level`, and each received a current `ready`
record in prerequisite order. This is scaffold readiness, not Step-3 proof
approval. No item file or published page was edited.

Both selected page entries have empty `items` arrays in the current plan. The
design supplies the target mathematical inventory; this batch manifest
materializes that inventory without editing the shared plan.

## Plan and design reconciliation

The RG-9 design at `research/plan-representation-theory-groups-track.md` lines
592–641 names Maschke, Schur and the class-count consequences as conceptual
prerequisites. The current `research/plan-spec.json` entry at order 510.047
lists only the Young-tableau, Maschke and character pages as direct page
requirements; it does not list a Schur page. The plan controls. The scalar Hom
assertion is proved locally from the one-dimensional antisymmetrizer image,
with Maschke used only to extend a Specht-domain map to the permutation
module. No Schur result is silently assumed. The required character page is
retained in `requires`, although the classification proof actually uses the
published class-count theorem on the Maschke page and the published
cycle-type classification.

The design offers an RSK sum-of-squares dimension argument for the standard
basis, but its RSK page is later. The scaffold uses the design's permitted
local Garnir route, adding the tabloid/column orders, adjacent-column Garnir
relation, and terminating straightening lemma before the basis theorem. The
extra A items are proof prerequisites, not inventory padding. No page split or
new pair is required (17 A items, below the 100-item cap).

## Proof and dependency audit

- `def-column-antisymmetrizer-polytabloid-and-specht-module` fixes the
  published English-diagram, labelled-row and left-action conventions. The
  published abstract-algebra sign is stated on the finite ordinal realization
  of `S_n`; the construction transports it to the published Young-page
  realization on `{1,…,n}` by the canonical shift. Both give the same parity.
  The empty partition and `S_0={1}` are handled explicitly.
- `lem-column-collision-causes-antisymmetrizer-cancellation` uses a row-fixed
  transposition in one column. The published
  `lem-basic-combinatorial-lemma-for-tableaux` then gives exactly
  `λ ⊒ μ`, and its equality clause gives
  `κ_t M^λ = C e_t`; the dominance direction was checked against the full
  published proof, not inferred from page membership.
- The tabloid basis gives a positive definite invariant **Hermitian** product.
  Its column antisymmetrizers are self-adjoint. James's alternative follows
  from the one-dimensional image and `⟨u,e_t⟩=⟨κ_tu,{t}⟩`. Positivity gives
  `S^λ ∩ (S^λ)^⊥=0`, so the Specht module is irreducible. Craven's printed
  p. 21 argument says ambient bilinear nondegeneracy implies this restricted
  statement, which is not valid over complex vector spaces in general; the
  Hermitian argument is the deliberate repair to that source proof, and no
  published library item relies on the shortcut.
- The Hom-dominance item depends on the **actual** Maschke projection
  `M^λ → S^λ`: without extending a map `S^λ → M^μ`, the identity
  `φ(e_t)=κ_t φ({t})` is ill-typed. The extension makes it valid. Two
  directions of the published dominance order separate distinct Specht
  modules. The published class-count theorem applies to finite `S_n` over
  algebraically closed `C` in characteristic zero; the published cycle-type
  tuples biject with partitions, including `n=0`.
- Standard polytabloids are independent by a unique leading tabloid. For
  spanning, the local Garnir relation factors the signed sum using **left**
  coset representatives (Wildon uses right actions). At a row inversion,
  lower-left-column entries exceed upper-right-column entries; every
  nonidentity swap moves the largest changed entry right. The finite column
  order strictly increases, so straightening terminates. No RSK result or
  forward item is used.
- The B-page calculations use three `(2,1)` tabloids, the row/column extreme
  modules, and the resulting three `S_3` simples. For the modular
  counterexample, the `F_2` construction is defined explicitly: in shape
  `(3,1)` its Specht subspace is the three-dimensional augmentation subspace
  of `F_2^4`, containing the proper invariant all-ones line. This does not
  weaken the complex theorem.

The direct published proof suppliers examined were
`def-partition-young-diagram-and-conjugate-partition`,
`def-young-tableau-standard-tableau-and-shape`,
`def-row-and-column-stabilizers-of-a-tableau`,
`def-young-subgroup-tabloid-and-permutation-module`,
`lem-tableau-stabilizers-transform-by-conjugation`,
`lem-basic-combinatorial-lemma-for-tableaux`,
`def-dominance-order-on-partitions`, `thm-sign-is-a-homomorphism`,
`thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order`,
`thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order`,
and `cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types`, including
their relevant proofs and hypotheses. The class-count chain's matrix-block,
simple-module and center-dimension proofs, and the sign-parity proof, were
also read for the actual uses. All named pages and these items are published.
A mechanical manifest/published-dependency closure walk reached 408 IDs,
found no missing ID, no `proved_here: false` result and no
`def-axiom-of-choice` edge; this graph check does not certify proofs. The
plan's existing page-requirement closure contains the sign and
cycle-type pages, so no new cross-batch or page prerequisite is requested.
The batch-owned cross-batch input is `[]`; the merge tool refreshed the
unified ledger. No defective actual published prerequisite was found. No AC
assumption is used: all choices of permutations and coset representatives are
over finite sets, and no recorded set-theory result enters this pair.

## Source reading and dispositions

Full relevant arguments were inspected in three independent complete lecture
note sets, including the original page design's Chan and Craven sources and a
separate Garnir proof in Wildon. Exact result-level included, inline,
already-published, deferred and out-of-scope dispositions are in the owned
coverage file (51 harvested rows). The only deferral is Young's rule to the
planned branching/Young graph page. No source failed retrieval, so no source
drop or recovery decision was needed.

| Source | Full text and exact locators inspected | Fetch stamp |
|---|---|---|
| [Charlotte Chan, *Representation Theory of Symmetric Groups*](https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf) | Chapters 3–4, printed pp. 12–17: Definitions 3.8, 3.12; Lemmas 3.10–3.11; Theorem 4.1; Corollaries 4.2, 4.5; Theorems 4.4, 4.11; the explicit `(2,1)` and extreme-shape examples | 40-page PDF, 303971 bytes, SHA-256 prefix `8a3cac907770c66d` |
| [David A. Craven, *Groups, Geometries and Representation Theory*](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf) | §§1.8, 2.1, printed pp. 16–22: leading tabloid, James theorem, Hom dominance, classification, and the RSK-dependent basis proof, used only as an independent comparison | 42-page PDF, 369993 bytes, SHA-256 prefix `b2b190e9a1928b17` |
| [Mark Wildon, *Representation Theory of the Symmetric Group*](https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf) | Example 2.6, §4 Theorem 4.3, §6 Definitions 6.3, 6.6, 6.9; Theorem 6.8, Lemma 6.10 and the standard-basis proof, printed pp. 6–7, 14–15, 26–33 | 34-page PDF, 322040 bytes, SHA-256 prefix `31e3817f5bd1f4d0` |

`source-fetch-check --stamp` fetched all five page/source entries (three A,
two B) on 2026-09-27; later check mode found 5/5 verified. The PDF bodies,
not previews or HTTP status alone, are what was inspected. The source
conventions were compared explicitly with the manifest.

## Checks on the current disk state

- Batch coverage: 2 pages, 51 harvested rows, 0 errors and 0 warnings.
  Batch source check: 5/5 full-text stamps valid. Batch manifest dependencies:
  21 items, no missing arrays. Batch manifest-only content policy: 21 scoped
  items, 0 errors and 0 warnings. All 21 Step-1 records remained current and
  `ready`. Recomputing the batch's dependency levels found no mismatch; its
  maximum level is 6.
- The required whole-run `item-dependency-levels check --run
  frontier-36-complete` was run after this batch's suppliers were scaffolded.
  It returned exit 1 because other in-progress A/B pages still had empty
  inventories; it reported no batch-17 mismatch or cycle. The whole-run
  Step-1 readiness check likewise remained open on other in-progress pages.
- Whole-run `manifest-deps` passed (259 items at that instant); whole-run
  manifest-only `content-policy` passed (261 scoped items at its instant, with
  concurrent writers active); `validate-plan` passed on the current canonical
  plan; `manifest-integrity` found 58/58 planned pages present; `extcheck`
  passed with 43 pre-existing published-result warnings outside this pair.
- Whole-run coverage check saw 20 coverage pages and 692 harvested rows at
  that instant and returned 113 errors, beginning with batch 10's coverage
  claims for items not yet in its still-empty manifest. None named this pair.
  Whole-run source check found 59/62 entries stamped; three unstamped URLs
  belonged to the in-progress fundamental-solutions batch, not batch 17.
  These moving whole-run findings are unresolved for their owning batches;
  this batch's local checks passed.

## Current dispatch checkpoint — 216df4242f007501

Superseding state note: the section above records an earlier pass; the
current disk state and receipts are these.

- **State found.** All 21 items authored; 18 item receipts open because the
  interrupted `7ba91d54477d28e8` pass repaired level-0
  `def-column-antisymmetrizer-polytabloid-and-specht-module` (sign
  prerequisite changed to `def-inversions-inversion-number-and-sign`) after
  the other receipts were recorded, and `ex-specht-modules-of-s3` had no
  receipt. The pair scope receipt was already current at unchanged claim hash
  `0c8aafd7a98e0a9dfeb2121809ad91085f09e3cc0a07871a1974fb2168ac62b2`.
- **Repairs made.** Three stale contract citation quotes refreshed to the
  current Definition text; literal inversion-count wording fixed in
  `ex-polytabloids-for-shape-two-one` step 1.2 and `ex-specht-modules-of-s3`
  step 1.4 (sign conclusions and dependencies unchanged); missing source stamp
  added for `etingof-characters-and-class-count` (7/7 fetch-verified); six
  templated `iff-forward`/`iff-reverse` boundary rationales on the three
  level-0 definitions replaced by item-specific dispositions and the
  `lem-adjacent-column-garnir-relation` `empty` row sharpened with a
  `reviewed.upheld` record (subgroups and a transversal always contain the
  identity, so the flagged sums are never over an empty family).
- **Decisions.** All 18 open items recorded at confidence 1 with examined
  direct dependency IDs: 16 `accept`, 2 `repaired`
  (`ex-polytabloids-for-shape-two-one`, `ex-specht-modules-of-s3`); the three
  level-0 receipts stayed current. No `--owner` record, no judge/audit stamp,
  no new pair, no dropped promise, no AC use (all choices are canonical over
  finite sets).
- **Checks.** Batch `precheck` 18/0; `rendercheck` 23 files (21 items + both
  `library/representation-theory/` pages) clean; `content-policy` 21/0/0;
  `proof-contract --strict` 21/21 0/0; `boundary-audit` exit 0 (0 templates,
  0 contradicted, 1 upheld); `citation-fidelity` 193 citations, no missing
  quote, no widening; `coverage-checklist` 2 pages / 57 rows 0/0;
  `source-fetch-check` 7/7; `item-dependency-levels` 926 items / 60 pages,
  max 18, no batch-17 mismatch; `validate-plan` exit 0 (379 planned pages
  still without item lists — pre-splice limitation); merge dry-run to /tmp
  green (the run-level merged file is engine-owned); `depcheck`/`extcheck`/
  `fwdcheck` with explicit batch-17 paths name no batch-17 item (run-wide
  failures are other pairs' drafts); `step3-decisions check --phase final`
  has zero batch-17 work rows.
- **Open gaps / next action.** None for this pair. Cross-batch input is `[]`;
  the unified ledger lists batch 17 as reviewed with no edges and no orphaned
  reviews. Run-level merge, other batches' boundary candidates and
  `research/frontier-36-complete-alpha-contract-audit.md` belong to the
  contract-audit task. No potentially defective published item found; no
  escalation, no cross-group change, no unresolved prerequisite.
