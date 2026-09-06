# frontier-31a beta batch-19 notes

## Scope and plan agreement

This dispatch owns only the Brauer induction A/B pair and changed only its
manifest, coverage harvest, and this note. The RG-2 design at
research/plan-representation-theory-groups-track.md line 261 agrees with
research/plan-spec.json: order 510.033, title, category, companion, and direct
predecessor artin-induction-and-rational-characters-examples. The run drift
review independently records no drift. The direct predecessor is a B page, but
none of this batch's item dependencies targets a B-page item.

The A page has 20 items, safely below the 60-item limit; the B page has four.
No split is needed. The eight additions beyond the 12 design-listed results
are non-padding proof prerequisites: a general-family ideal lemma and the
supersolvability/monomiality bridge needed to prove induction from linear
characters, not merely arbitrary characters of elementary subgroups.

## Conventions and proof route

- A p-elementary group is C x P, where C is cyclic of order prime to p and P
  is a finite p-group. A p-hyperelementary group is C semidirect P under the
  same order conditions. Li's name for the latter is p-quasi-elementary; the
  definition must state this synonym.
- R(G) is the published complex virtual-character ring. Banaschewski applies
  to the integer-valued hyperelementary permutation subring, never directly to
  the full character-valued elementary induction ideal.
- The local-integrality corollary has Li's splitting-field hypothesis. It must
  not become a claim for arbitrary rational-valued functions over a
  nonsplitting field. The cyclotomic corollary uses the exponent m of G;
  Q(zeta_|G|) is a convenient field, not asserted minimal.

The Step-5 proof route is fixed as follows.

1. Define the two subgroup families and their induction ideal; use the
   published projection formula for ideal closure.
2. Follow Li: Mackey and subgroup closure make the hyperelementary permutation
   span a subring; Banaschewski produces a point and prime if it lacks the
   unit; Li's normalizer/Sylow construction contradicts the obstruction; then
   Isaacs gives the proper-stabilizer induction-on-order reduction.
3. Keep Kramar's p-primary congruence and p-elementary local construction as
   an independent, qualified check of the p-local argument.
4. Prove p-elementary groups supersolvable and prove the narrow
   supersolvable-monomial theorem through faithful, nonfaithful, and
   proper-inertia branches. Only then convert elementary characters to
   inductions from linear characters.
5. Apply the resulting unit relation and the projection formula to prove
   Brauer induction, restriction detection, and local integrality.

## Item checkpoints

Every statement/proof is literature-derived and every manifest item has an
explicit dependency array. The planned sequence is:

1. def-p-elementary-and-p-hyperelementary-finite-groups: group forms and
   synonym; published p-group, generated-subgroup, and semidirect definitions.
2. lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed: recover
   p-prime part and Sylow part; depends on 1 and published Sylow facts.
3. def-induction-ideal-of-a-family-of-subgroups: sum of induction images in
   R(G); published character-ring and induction definitions.
4. lem-induction-ideal-of-a-subgroup-family-is-an-ideal: termwise published
   projection formula; depends on 3.
5. lem-p-primary-character-value-congruence: integral cyclotomic values at g
   and its p-prime part agree modulo p; depends on 1 and cyclic characters.
6. lem-hyperelementary-permutation-subring-reduction: Mackey subring closure
   and transitivity reduction to elementary induction; depends on 1--3.
7. lem-banaschewski-prime-obstruction: pointwise prime obstruction; depends
   on 6 and published fixed-point permutation-character formula.
8. lem-elementary-detection-at-a-fixed-element: Li's nonzero permutation
   detector and Kramar's elementary local construction; depends on 1, 5,
   Sylow, and induced-character formula.
9. lem-isaacs-linear-character-step: p-group action on a linear-character
   fibre; depends on 1, p-group fixed points, and semidirect products.
10. def-supersolvable-groups-and-monomial-characters: normal cyclic-factor
    series and monomiality.
11. lem-p-elementary-groups-are-supersolvable: central order-p quotient
    induction; depends on 1 and 10.
12. prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup:
    normal-abelian weight spaces yield a proper stabilizer.
13. lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup:
    extract it from the normal series.
14. lem-monomiality-lifts-along-a-quotient: pull inducing data through a
    quotient in the nonfaithful branch.
15. thm-finite-supersolvable-groups-are-monomial: combines 12--14 by order
    induction.
16. lem-p-elementary-characters-are-induced-from-linear-characters: applies
    11 and 15 to each constituent.
17. thm-brauer-induction: combines 1, 3--9, 16, and induction transitivity.
18. cor-elementary-restriction-detects-generalized-characters: multiply the
    Brauer unit relation and apply the projection formula.
19. cor-elementary-local-integrality-criterion: the splitting-field restriction
    criterion, by the same unit relation.
20. cor-cyclotomic-field-splits-a-finite-group: the exponent-root splitting
    field conclusion.
21. ex-elementary-and-hyperelementary-small-groups: classify C_pq, S3, D_2p,
    and C7 semidirect C3.
22. ex-brauer-induction-for-s3: integral identities from elementary C2/C3.
23. ex-trivial-factors-in-an-elementary-group: C=1, P=1, and trivial group.
24. cex-cyclic-subgroups-do-not-give-integral-induction-in-general: degree
    parity keeps 1_A5 out of the integral cyclic induction span.

## Sources, exact ranges, and source support

The coverage JSON is the complete result-by-result harvest and disposition
record. Each URL was opened as a full-text PDF in the web reader on 2026-09-05:

1. Wen-Wei Li, Yanqi Lake Lectures on Algebra: Part 1,
   https://www.wwli.asia/downloads/YAlg1.pdf. Its 178-page contents lists
   Lecture 14; I read that contents and Lecture 14 sections 14.1--14.4,
   printed pp. 159--166 / PDF pp. 165--172. It supplies the main proved route:
   definitions, induction ideal, Banaschewski/Solomon/Isaacs reduction,
   local integrality, and the splitting-field corollary.
2. Janos Kramar, Artin's and Brauer's Theorems on Induced Characters,
   https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf.
   I read sections 1.1--1.2 and 3, PDF pp. 1--7. This independently supplies
   the p-primary congruence, E_p local construction, and Brauer theorem.
3. Tammo tom Dieck, Representation Theory,
   https://www.uni-math.gwdg.de/tammo/d01.pdf. This 67-page textbook has a
   contents; I read section 4.3, printed pp. 57--58 / PDF pp. 56--58, and
   section 4.6, printed pp. 63--66 / PDF pp. 62--65. It supplies the complete
   monomiality support span and independently checks terminology, detection,
   local integrality, and splitting field.

Li is the qualifying full lecture-note set with a harvestable contents, and
tom Dieck is additionally a textbook. The source treatments are independent.
The tom Dieck 4.6.1/4.6.2 route is expressly excluded: its requisite
permutation relation is deferred there, while Li/Kramar prove the selected
route.

## Validation and known limits

- Manifest JSON parsing and manifest-deps pass: 24 items and zero missing deps.
- Every included or inline coverage row names a batch item; every deferred row
  names a resolving destination.
- Runner-local DNS cannot resolve these hosts: curl and source-fetch stamping
  produce EAI_AGAIN despite the web reader's successful direct full-text
  opens. The coverage receipts therefore honestly record web-open and page
  counts, with no fabricated shell byte or hash evidence. A DNS-capable runner
  must rerun source-fetch-check stamp and url-sweep before authoring.
- Step 5 must retain the splitting-field qualifier, complete the monomiality
  bridge before linear-character induction, and never cite tom Dieck's
  unproved hyperelementary permutation relation.

## Validation execution and handoff state (2026-09-05)

- JSON parsing passed for the manifest and coverage files. The manifest
  dependency audit reported `24 item(s), 0 normalized, 0 error(s)`; every
  proposed item has its explicit `deps` array.
- `coverage-checklist.mjs --require-destination` passed: 1 page, 53 harvested
  results, 0 errors and 0 warnings. `source-fetch-check.mjs` recognized all
  3 direct-reader fetch-verification receipts.
- The Batch 19 manifest-only content-policy check passed: 24 scoped items,
  0 errors, 0 warnings. `validate-plan.mjs research/plan-spec.json` exited
  successfully and reported no declared dependency cycle or forward B-page
  dependency.
- The required whole-run manifest-only content-policy check found 7
  pre-existing errors outside this authorization: five in
  `frontier-31a-batch-1.pages.json` missing
  `def-group-homology-as-a-derived-functor`, and two in
  `frontier-31a-batch-3.pages.json` missing elementary exponential lemmas.
  Batch 19 is not named in those diagnostics; this dispatch leaves the other
  batches unchanged.
- The URL liveness/recovery sweep (`tools/url-sweep.mjs`, output retained in
  `/tmp/frontier-31a-batch-19-url-liveness.json`) attempted every recorded
  current and archive URL, but local DNS returned `Could not resolve host` for
  all of them: 0 live, 3 failed, 0 recovered. It does not supersede the
  successful web-reader fetch verification above and no replacement was
  fabricated.
- Whitespace checks over the three new files produced no diagnostics. The only
  remaining external condition is a later DNS-capable verification environment
  if byte-level liveness stamps are required; the next build step can use this
  dependency-closed scaffold as written.

## Step-3 fix pass

### Alpha-a Batch-19 verdict (the review assigns no separate finding id)

**Disposition: applied, with one validator-discovered dependency repair.**
The Alpha-a review's Batch-19 finding is that the pair is sufficient, needs no
split, and has no missing local source result or backward prerequisite. Its
claimed proof order remains sound: induction ideal; hyperelementary
permutation subring and Banaschewski obstruction; p-local detection and the
Isaacs step; supersolvability/monomiality; then the integral Brauer relation
and its restriction, integrality, and splitting-field consequences.

I re-read the governing RG-2 block at
`research/plan-representation-theory-groups-track.md`, lines 240--390, and
fetch-verified all recorded source documents at their recorded locators:

- Li, <https://www.wwli.asia/downloads/YAlg1.pdf>, Lecture 14,
  §§14.1--14.4, printed pp. 159--166 / PDF pp. 165--172: Definitions
  14.1.1, Lemma 14.1.2, Remark 14.1.3, Definitions/Lemma 14.2.5--14.2.6,
  Theorem/Corollary 14.3.1--14.3.2, Lemmas 14.3.3--14.3.6, and Corollaries
  14.4.1--14.4.2 support the selected route.
- Kramár, <https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf>,
  §§1.1--1.2 and §3, PDF pp. 1--7: Lemma 4 supplies the p-primary
  character-value congruence, Lemma 5 the elementary local construction, and
  Theorem 2 the integral conclusion.
- tom Dieck, <https://www.uni-math.gwdg.de/tammo/d01.pdf>, §4.3, printed
  pp. 57--58 / PDF pp. 56--58, and §4.6, printed pp. 63--66 / PDF pp. 62--65:
  Theorem 4.3.1 and Proposition/Lemmas 4.3.2--4.3.4 support the monomiality
  bridge; Theorems 4.6.1--4.6.2 remain expressly out of the proof route
  because their required permutation relation is deferred in that source.

The source harvest remains unchanged: its 53 result dispositions still name a
carrier, destination, or reason, and no source result was removed to clear a
gate. `source-fetch-check` confirms all three recorded source receipts.

The batch-spliced `validate-plan` check did expose one in-scope closure defect
not enumerated in the review: the planned
`lem-p-primary-character-value-congruence` depended on the published B-page
example `ex-the-irreducible-complex-characters-of-a-finite-cyclic-group-are-the-n-powers-of-a-primitive-nth-root`.
The required fact in Kramár's Lemma 4 is only that irreducibles of the cyclic
group $\langle g\rangle$ over the splitting field $\mathbb C$ have degree one.
That fact is supplied more directly by the earlier A-page theorem
`thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional`;
its Statement covers every finite abelian group over a splitting field.

**Changed scaffold record:**
`research/frontier-31a-batch-19.pages.json`, item
`lem-p-primary-character-value-congruence`: replaced the B-page example in
`deps` with
`thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional`.
This preserves the exact claim, the $p$-part/$p'$-part convention, the
splitting-field qualification, and the Kramár proof strategy while making the
edge an allowed backward A-page dependency. No item ID, source disposition,
page count, page split, or other dependency changed.

Post-repair checks:

- `manifest-deps`: 24 items, 0 normalized IDs, 0 errors.
- `coverage-checklist --require-destination`: 1 page, 53 harvested results,
  0 errors, 0 warnings.
- `source-fetch-check`: 3/3 sources fetch-verified.
- `content-policy --manifest-only research/frontier-31a-batch-*.pages.json`:
  903 scoped items, 0 errors, 0 warnings.
- `validate-plan` on both `research/plan-spec.json` and the temporary
  batch-19-spliced plan: declared order is acyclic, with no unresolved IDs,
  forward references, B-page dependencies, or item-level cycles.

The current next action is authoring the unchanged 24 planned items from this
dependency-closed scaffold.

## Step-5 authoring

Authored draft pages `brauer-induction-and-elementary-subgroups` and
`brauer-induction-and-elementary-subgroups-examples` directly under
`library/representation-theory/`, with all 24 planned items:

- A: `def-p-elementary-and-p-hyperelementary-finite-groups`,
  `lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed`,
  `def-induction-ideal-of-a-family-of-subgroups`,
  `lem-induction-ideal-of-a-subgroup-family-is-an-ideal`,
  `lem-p-primary-character-value-congruence`,
  `lem-hyperelementary-permutation-subring-reduction`,
  `lem-banaschewski-prime-obstruction`,
  `lem-elementary-detection-at-a-fixed-element`,
  `lem-isaacs-linear-character-step`,
  `def-supersolvable-groups-and-monomial-characters`,
  `lem-p-elementary-groups-are-supersolvable`,
  `prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup`,
  `lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup`,
  `lem-monomiality-lifts-along-a-quotient`,
  `thm-finite-supersolvable-groups-are-monomial`,
  `lem-p-elementary-characters-are-induced-from-linear-characters`,
  `thm-brauer-induction`,
  `cor-elementary-restriction-detects-generalized-characters`,
  `cor-elementary-local-integrality-criterion`, and
  `cor-cyclotomic-field-splits-a-finite-group`.
- B: `ex-elementary-and-hyperelementary-small-groups`,
  `ex-brauer-induction-for-s3`, `ex-trivial-factors-in-an-elementary-group`,
  and `cex-cyclic-subgroups-do-not-give-integral-induction-in-general`.

Every item remains `status: draft`, has literature-derived statement and proof
provenance (definitions have `not-applicable` proof provenance), and cites the
Li/Kramár/tom Dieck source at the recorded source locus. The argument uses the
Li Banaschewski--Solomon--Isaacs route, Kramár's $p$-part congruence and
$p$-local construction, and tom Dieck's supersolvable-monomial bridge.
The local-integrality statement retains its characteristic-zero splitting-field
hypothesis; the splitting corollary uses the exponent $m$ and says only that
$\mathbb Q(\zeta_{|G|})$ is a convenient splitting field. No claim was dropped
or narrowed after authoring. There are no batch-local blockers.

Created `research/frontier-31a-batch-19.proof-contracts.json` with all 21
proof-bearing item contracts, each numbered proof row mapped and every standard
boundary axis disposed. Each proof has a local `[F1]` prerequisite citation;
its contract records the exact current dependency statement, source section,
and the first proof row that uses it.

Validation executed after the canonical precheck tag repair:

- `node tools/tsx-run.mjs tools/precheck.mts` with the explicit 21 proof-item
  paths: 21 checked, 0 failing.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed; declared
  order is acyclic with no item cycles, forward references, B-page dependencies,
  or unresolved listed ids.
- `node tools/content-policy.mjs research/frontier-31a-batch-19.pages.json`:
  24 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs
  research/frontier-31a-batch-19.proof-contracts.json --strict`: 0 errors,
  0 warnings, 21/21 checked.

After a broader graph check exposed absent explicit `kind` fields on the new
items, those fields were added with the manifest kind for every authored item.
The focused precheck, plan validation, content-policy, and strict
proof-contract checks above were then rerun with the same passing results;
the relevant-id filter of `depcheck --quiet` reported no Batch-19 diagnostic.

## Step-3 fix pass

### Alpha-a Batch-19 verdict — current dispatch (no finding id supplied)

**Disposition: applied; no scaffold change is warranted.** The review gives
`brauer-induction-and-elementary-subgroups` the verdict `sufficient`, with no
numbered finding and no requested repair.  I rechecked the current manifest,
coverage harvest, design block (`research/plan-representation-theory-groups-track.md`,
RG-2), and the plan-spec entries.  The A page remains 20 items and the B page
four items, so the 60-item A-page split rule does not apply.  All 24 manifest
objects carry explicit `deps` arrays; their order preserves the induction
ideal and p-local route before the monomiality bridge, Brauer theorem, and
three consequences.  In particular,
`lem-p-primary-character-value-congruence` retains the backward A-page
splitting-field theorem dependency rather than the prohibited B-page example
dependency.

**Fresh source evidence and harvest disposition.** I fetch-verified and read
the recorded full-text ranges at the current canonical HTTP(S) URLs:

- Wen-Wei Li, <https://www.wwli.asia/downloads/YAlg1.pdf>, contents and
  Lecture 14 §§14.1--14.4, PDF pp. 165--172: the p-elementary and
  p-quasi-elementary conventions, subgroup closure, induction ideal,
  Banaschewski/Solomon/Isaacs proof route, integral induction theorem, and
  both applications agree with their existing `included`, `inline`, and
  `already-published` carriers.
- János Kramár, <https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf>,
  §§1.1--1.2 and §3, PDF pp. 1--7: Lemmas 4--5 and Theorem 2 support the
  p-part/p-prime-part congruence, elementary local step, and integral
  conclusion.  Its cyclic-coefficient refinement and bibliography remain
  out of scope for their recorded, result-specific reasons.
- Tammo tom Dieck, <https://www.uni-math.gwdg.de/tammo/d01.pdf>, contents,
  §4.3 (PDF pp. 56--58), and §4.6 (PDF pp. 62--65): the monomiality lemmas,
  elementary restriction and local-integrality consequences, and splitting
  result support their assigned carriers.  Theorems 4.6.1--4.6.2 remain
  deliberately out of the proof route because that treatment defers the
  required permutation-relation proof; the existing Li/Kramár route remains
  complete.  The recorded later destinations for monomial-character and
  field-of-definition material remain valid.

The coverage harvest is unchanged: its 53 results still have a concrete
carrier, destination, or result-specific reason.  **Changed scaffold record:
none.** No item id, claim, dependency, source row, page split, plan entry, or
published content was changed by this pass.

**Validation:** `manifest-deps` reports 24 items, 0 normalized IDs, 0 errors;
`coverage-checklist --require-destination` reports 1 page and 53 harvested
results with 0 errors or warnings; `source-fetch-check` confirms 3/3 source
records; whole-run `content-policy --manifest-only research/frontier-31a-batch-*.pages.json`
reports 908 scoped items with 0 errors or warnings; and
`validate-plan research/plan-spec.json` confirms acyclic declared order, no
item-level cycles, forward B-page dependencies, or unresolved IDs among
itemized pages.  The remaining known limit is only that the manifest is a
scaffold: authoring must supply the actual proofs without reintroducing tom
Dieck's deferred relation.
