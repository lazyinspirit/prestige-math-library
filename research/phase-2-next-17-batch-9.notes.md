# Phase 2 next 17 — batch 9 scaffold notes

Run `phase-2-next-17`; beta batch 9. Owned pair:
`brauers-first-main-theorem` / `brauers-first-main-theorem-examples`.

## Controlling design and plan conflicts

The complete RG-16 design section and its source-disposition table were read in
`research/plan-representation-theory-groups-track.md`. The current
`research/plan-spec.json` controls metadata and prerequisites.

- The design heading and theorem typography use the possessive “Brauer's”,
  whereas the canonical plan title is `Brauers First Main Theorem` (and the B
  title is `Brauers First Main Theorem — Examples`). The manifest preserves the
  plan titles.
- The stable design ID `ex-defect-one-first-main-theorem-boundary` says
  “defect-one”, but its designed statement is the boundary `D=1`, which is
  trivial defect group / numerical defect zero. The stable unused ID is
  preserved; the item title and statement use the mathematically correct
  terminology.
- The plan-spec item arrays are empty placeholders. They do not override the
  design inventory. The imported 12 A and 4 B items were preserved, except that
  two local prerequisite items were inserted before their consumers after the
  proof-dependency audit: modular block central characters, and preservation of
  relative projectivity under tensor product. No selected pair or page
  prerequisite was changed.

The page metadata otherwise agrees exactly with the current plan: order
510.061/510.062, category `representation-theory`, companions, and the four A
page requirements. No page split is required.

## Construction and proof audit

The imported scaffold was audited in item order against the complete relevant
source arguments and the actual published prerequisite proofs. The final
inventory is 14 A items followed by 4 B items. It retains the design route:
choose a maximal Brauer pair to fix the literal representative, establish
local existence, injectivity and surjectivity separately, define the Brauer
correspondent only after the bijection, and then apply diagonal Green
correspondence to block bimodules. The theorem explicitly covers `D=1`,
`N_G(D)=G`, and possibly empty block sets, and makes no canonical choice of a
defect-group representative.

The following dependency repairs were necessary:

- `thm-modular-block-central-characters-correspond-to-blocks` was inserted
  before block induction so the central-character criterion and its uniqueness
  are not implicit. Its proof uses the published block-idempotent decomposition,
  locality of each block centre, and the splitting-field scalar action.
- `lem-block-induction-exists-under-centralizer-containment` now uses the actual
  `H×H` double-coset decomposition of `Res kG`, multiplicity one for the identity
  double coset, vertex exclusion for the other cosets, the Brauer map, and the
  new central-character result. The earlier shorthand identifying the whole
  restriction with one induced diagonal module was removed.
- `lem-block-induction-is-transitive` now assumes that `c^H`, `(c^H)^G`, and
  `c^G` are all defined. The sources do not justify deriving existence of the
  third from the first two.
- `lem-first-main-theorem-surjectivity` explicitly depends on the
  centralizer-containment existence lemma.
- `lem-tensoring-preserves-relative-projectivity-for-finite-group-modules` was
  inserted before Brauer–Green compatibility. Its explicit induction–tensor
  isomorphism supplies the relative-projectivity fact used on the off-identity
  double-coset terms.
- `thm-brauer-green-nagao-block-compatibility` now declares that tensor lemma
  and Krull–Schmidt, and its strategy records the block-idempotent splitting
  maps. It does not consume the later Nagao decomposition theorem.
- `cor-every-block-has-an-indecomposable-module-of-full-defect-vertex` now
  declares the projective-cover/simple-module correspondence, central-block
  decomposition, and restriction-retention input needed to prove that the
  inflated projective module lies in the local block and has vertex exactly
  `D`.

The four direct prerequisite pages are published. Their load-bearing statements
and proofs were read, including block ideals as indecomposable double-group
modules, diagonal vertices and defect groups, Brauer maps and maximal Brauer
pairs, Green correspondence and its exceptional families, projective covers,
simple-module/block membership, and Brauer-character block partitions. A
transitive item-dependency traversal from this manifest examined 702 reachable
items and found no missing item, draft item, `Recorded` proof, forward
dependency, or path to `deferred-set-theory-beyond-choice`. No defective actual
prerequisite was found. Older import notes describing the representation-theory
suppliers as drafts are stale; the files inspected in this run are published.

## Choice ledger

`def-axiom-of-choice` is declared on every item that consumes the published
Green-correspondence theorem or selects its correspondent, and each strategy
identifies that use. Block induction, defect control, transitivity, the tensor
lemma, Brauer–Green block compatibility, and the centralizer counterexample are
choice-free. The `D=1` calculation is choice-free but retains the theorem's AC
hypothesis when presented as a specialization. No result in this pair uses a
Recorded replacement or any result in `deferred-set-theory-beyond-choice`.

## Sources inspected

All four cited documents were fetched as full PDFs, their stamped byte counts
and hashes were rechecked, and the complete relevant argument ranges were
inspected rather than relying on snippets or status codes:

- Martínez/Navarro, *Representation Theory of Finite Groups*: Theorem 2.11,
  Lecture 3 pp. 15–20, and Lecture 4 pp. 23–28, especially Definition 4.2,
  Lemma 4.4, and Theorems 4.5 and 4.10 (71 pages; 505068 bytes;
  `67988b80c2a008a5`).
- Craven, *The Brauer Correspondence*: Chapter 1 §§1.1–1.3 and §1.6,
  printed pp. 1–16 (87 pages; 518601 bytes; `c8baed359312aced`).
- Saunders, *Modular Representation Theory*: §5 pp. 40–45 and Examples 4.31
  and 5.5 (59 pages; 716178 bytes; `cb96f7b75ffacde9`).
- Farrell–Lassueur, *Modular Representation Theory of Finite Groups*, complete
  Chapter 40, pp. 1–13 (13 pages; 182227 bytes; `bb55f1ba1d73d93f`).

Every harvested named result has an included, inline, already-published,
deferred, or specific out-of-scope disposition in the owned coverage file.
The later Second and Third Main Theorems remain deferred to their planned page;
Craven's conjectural character placement is out of scope. No source was dropped
and no recovery allowance was consumed in this dispatch.

## Cross-batch and published-defect findings

The owned consumer dependency input is `[]`: every external item dependency is
already published, and the B page depends only on this batch's A page. No new
prerequisite pair, cross-batch supplier, or published defect requiring a
canonical-ledger entry was found. The frontier dependency ledger was refreshed
from the owned inputs.

## Validation evidence

Batch-9 checks after the repairs:

- coverage checklist with destination enforcement: 1 page, 44 harvested
  results, 0 errors, 0 warnings;
- full-text source stamps: 4/4 fetch-verified and 4/4 resolved;
- temporary liveness sweep: 4/4 live, with no failure, archive recovery, or bot
  suspicion; source backing: 17 authored results, all backed;
- manifest dependency gate: 18 items, 0 normalized, 0 errors;
- manifest-only content policy: 18 items, 0 errors, 0 warnings;
- fresh Step-1 readiness verification: 18/18 records current and closed;
- plan validation: passed; external-reference check: passed with 55 pre-existing
  `unproved-on-published` warnings unrelated to this pair.

Whole-run checks over all eleven current manifests found 480 items and no
manifest dependency errors; manifest integrity found all 34 owed pages with no
scope drift; drift review found all 17 A pages reviewed and no blocked edges;
and source fetch checking resolved all 50 sources (49 stamped, one documented
drop). Two run-wide construction findings remain outside batch 9 ownership:

- manifest-only content policy reports three missing dependencies in
  `thm-regular-value-formula-for-degree` and
  `prop-degree-is-multiplicative-under-composition`;
- coverage reports missing A-page coverage entries for
  `orientations-poincare-lefschetz-and-alexander-duality` (batch 5) and
`affine-lie-algebras-and-loop-central-extensions` (batch 8).

The run-wide readiness command reported 224/521 current records and remains
open because other batches still have missing records. Batch 9 contributes no
missing or stale readiness record.

These unrelated consumer/coverage findings do not invalidate batch 9's
published suppliers or its scaffold readiness. Step 3 remains responsible for
independent mathematical review and approval.
