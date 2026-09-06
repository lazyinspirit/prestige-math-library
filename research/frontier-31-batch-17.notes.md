# frontier-31 · Beta · batch-17 notes — `brauer-induction-and-elementary-subgroups`

Run `frontier-31`, Batch 17, one representation-theory A/B pair. This dispatch
may edit only `research/frontier-31-batch-17.{pages,coverage}.json` and this
notes file; no page, item, plan, workflow-state, or other-batch file was edited.

## Outcome and page split

- A page: 20 planned items.
- B page: 4 planned items.
- No split: 14 is below the enforced 60-item A-page ceiling.

The scaffold retains every design-listed claim and adds eight non-padding
prerequisites necessary for its stated integral *linear-character* conclusion:

1. `lem-induction-ideal-of-a-subgroup-family-is-an-ideal`, because the earlier
   cyclic-only ideal lemma does not by its statement license the elementary
   family.
2. The supersolvability/monomiality support span
   `def-supersolvable-groups-and-monomial-characters`,
   `lem-p-elementary-groups-are-supersolvable`,
   `prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup`,
   `lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup`,
   `lem-monomiality-lifts-along-a-quotient`, and
   `thm-finite-supersolvable-groups-are-monomial`, followed by
   `lem-p-elementary-characters-are-induced-from-linear-characters`.
   These separate the actual induction-on-order proof rather than hiding its
   faithful, nonfaithful, and proper-inertia branches in one oversized lemma.

These are not a scope expansion: the first is the hard plan's stated ideal
step, and the remaining steps are required to prove its exact
linear-character theorem statement.

## Design/spec and convention record

The RG-2 design block at
`research/plan-representation-theory-groups-track.md:261` and the live spec
agree on order `510.033` and the declared direct prerequisite
`artin-induction-and-rational-characters-examples`. There is no local
design/spec conflict to adjudicate.

The inherited direct page prerequisite is an examples page. It is preserved
exactly as required by the spec; none of this batch's item-level dependencies
uses a B-page item, so the item graph remains compatible with the B-leaf rule.

Terminology is fixed as follows:

- A **$p$-elementary** group is $C\times P$, with $C$ cyclic of order prime to
  $p$ and $P$ a finite $p$-group.
- A **$p$-hyperelementary** group is $C\rtimes P$ under the same order
  conditions. Li calls this second notion *$p$-quasi-elementary*; the item
  states the synonym explicitly rather than silently changing convention.
- `cor-elementary-local-integrality-criterion` takes Li's accurate
  splitting-field formulation: an $F$-valued class function is a generalized
  character exactly when all elementary restrictions are. It must not claim
  the result for arbitrary rational-valued functions over a nonsplitting
  field.
- Banaschewski's source lemma applies directly to the proper integer-valued
  **hyperelementary permutation subring**, not to the full character-valued
  elementary induction ideal. The plan separates that obstruction from the
  subsequent reduction into the induction ideal; this is the source-faithful
  version of the design's abbreviated "prime obstruction" description.

## Item checkpoints: claims, dependencies, and proof route

### A page

1. `def-p-elementary-and-p-hyperelementary-finite-groups` — the two group
   forms and the Li/quasi-elementary synonym. Dependencies:
   `def-finite-p-group`, `def-generated-subgroup`,
   `def-external-semidirect-product`.
2. `lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed` — the
   two forms survive subgroups. Dependencies: item 1,
   `lem-subgroups-of-finite-p-groups-are-p-groups`, `thm-sylow-first-theorem`.
3. `def-induction-ideal-of-a-family-of-subgroups` — the sum of induction
   images in $R(G)`. Dependencies: the published character-ring and induction
   definitions.
4. `lem-induction-ideal-of-a-subgroup-family-is-an-ideal` — general-family
   projection-formula closure. Dependencies: item 3 and the published
   projection formula.
5. `lem-p-primary-character-value-congruence` — for the integral-valued
   cyclotomic coefficient ring, values at $g$ and its $p'$ part agree mod $p$.
   Dependencies: item 1, character ring, cyclic-character example.
6. `lem-hyperelementary-permutation-subring-reduction` — subring closure and
   transitivity-based conversion of a unit relation. Dependencies: items 1–3,
   subgroup closure, Mackey, induction transitivity.
7. `lem-banaschewski-prime-obstruction` — a proper finite ring of
   integer-valued functions has a pointwise prime obstruction. Dependencies:
   item 6 and the permutation-character fixed-point theorem.
8. `lem-elementary-detection-at-a-fixed-element` — the two source-level
   local detectors at a fixed element: Li's $p$-hyperelementary permutation
   character negates the Banaschewski obstruction, while Kramár's
   $p$-elementary cyclotomic construction independently supplies the
   congruence-based elementary form. Dependencies: items 1 and 5, Sylow
   definition, induced-character formula.
9. `lem-isaacs-linear-character-step` — Isaacs's fixed-point criterion for a
   linear character in the proper-stabilizer reduction. Dependencies: item 1,
   the $p$-group fixed-point congruence, semidirect-product definition.
10. `def-supersolvable-groups-and-monomial-characters` — normal
    cyclic-factor series and the definition of a monomial irreducible
    character. Dependencies: published normal-subgroup, quotient-group,
    irreducibility, and induced-character definitions.
11. `lem-p-elementary-groups-are-supersolvable` — construct the requisite
    normal cyclic-factor series for $C\times P$. Dependencies: items 1 and
    10, the finite-$p$-group centre theorem, and quotient-group definition.
12. `prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup`
    — the weight-space/proper-stabilizer step for a faithful irreducible.
    Dependencies: item 10, irreducibility and induction definitions, complete
    reducibility, and induction/restriction adjunction.
13. `lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup`
    — the normal-series structural branch. Dependencies: item 10 and
    published normal-subgroup/quotient definitions.
14. `lem-monomiality-lifts-along-a-quotient` — the nonfaithful branch
    factors through a quotient and pulls inducing data back. Dependencies:
    item 10, published factor-through, quotient, and induction-transitivity
    statements.
15. `thm-finite-supersolvable-groups-are-monomial` — combine 12–14 by
    induction on group order. Dependencies: items 10 and 12–14, induction
    transitivity, and the abelian irreducible-character theorem.
16. `lem-p-elementary-characters-are-induced-from-linear-characters` —
    apply 11 and 15 constituentwise, then add in the character ring.
    Dependencies: items 1, 11, 15, and the virtual-character definition.
17. `thm-brauer-induction` — every complex virtual character is an integral
    combination induced from linear characters of elementary subgroups.
    Dependencies: items 1, 3–9, 16 and published induction transitivity.
18. `cor-elementary-restriction-detects-generalized-characters` — elementary
    restrictions jointly inject on $R(G)$. Dependencies: item 17, projection
    formula, character ring.
19. `cor-elementary-local-integrality-criterion` — splitting-field local
    generalized-character criterion. Dependencies: item 17, projection
    formula, character ring.
20. `cor-cyclotomic-field-splits-a-finite-group` — a characteristic-zero field
    containing all exponent roots, particularly $\mathbb Q(\zeta_{|G|})$,
    splits $G$. Dependencies: item 17, complete reducibility, induction
    transitivity.

### B page

1. `ex-elementary-and-hyperelementary-small-groups` — direct/semidirect
   classification for $C_{pq}$, $S_3$, $D_{2p}$, and $C_7\rtimes C_3$.
2. `ex-brauer-induction-for-s3` — integral expressions for all three
   irreducible $S_3$ characters from $C_2$ and $C_3$.
3. `ex-trivial-factors-in-an-elementary-group` — $C=1$, $P=1$, and the trivial
   group.
4. `cex-cyclic-subgroups-do-not-give-integral-induction-in-general` — the
   degree-parity obstruction for $1_{A_5}$.

Each B item has explicit dependencies only on A-page or already-published
material; no external B-page item is used.

## Sources read, exact locators, and support

All listed URLs were opened as complete PDFs before this scaffold was written.
The coverage file records every heading/result harvested from each claimed
range and its individual disposition.

1. Wen-Wei Li, *Yanqi Lake Lectures on Algebra: Part 1* —
   <https://www.wwli.asia/downloads/YAlg1.pdf>. Contents PDF pp. 3–5 verify a
   full lecture-note treatment and its Lecture 14 table of contents; read
   Lecture 14 §§14.1–14.4, printed pp. 159–166 / PDF pp. 165–172. It is the
   primary proof route: definitions, induction ideal, Banaschewski/Solomon/
   Isaacs reduction, local criterion, and splitting-field corollary.
2. János Kramár, *Artin's and Brauer's Theorems on Induced Characters* —
   <https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf>.
   Read §§1.1–1.2 PDF pp. 1–2 and §3 PDF pp. 4–7. It independently supplies
   the $p$-primary congruence, the $p$-elementary localized construction, and
   a direct Brauer theorem statement.
3. Tammo tom Dieck, *Representation Theory* —
   <https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf>.
   The PDF contents confirms a textbook table of contents; read §4.3 printed
   pp. 57–58 / PDF pp. 56–58 and §4.6 printed pp. 63–66 / PDF pp. 62–65. It
   independently checks terminology, supplies the proof-level supersolvable
   monomiality support needed for item 10, and supports the detection,
   local-integrality, and splitting-field consequences.

The intentionally excluded tom Dieck 4.6.1/4.6.2 route is explicitly recorded
in coverage: 4.6.1 defers its own proof, so it cannot be a dependency here.

## Validation checkpoint and known limit

- JSON parsing passed for the manifest and coverage.
- `coverage-checklist --require-destination`: **1 page, 53 harvested
  results, 0 errors, 0 warnings**.
- `manifest-deps`: **24 items, 0 normalized, 0 errors**.
- Whole-run manifest-only `content-policy` initially passed at **684 scoped
  items, 0 errors, 0 warnings**. Its final rerun saw concurrent Batch 1
  materialization and reported six missing dependencies, all in
  `research/frontier-31-batch-1.pages.json`:
  `def-group-homology-as-a-derived-functor`,
  `def-group-cohomology-as-a-derived-functor`, and
  `thm-universal-coefficient-theorem-for-cohomology-over-a-pid`.
  Batch 17 is not named in any diagnostic, and this dispatch is not
  authorized to edit Batch 1.
- `validate-plan`: passed — declared page order is acyclic and consistent,
  with no item cycles, forward references, B-page dependencies, or unresolved
  IDs among the itemized pages.
- `git diff --check` on the three authorized files passed.

Full-text reader verification remains positive: on 2026-09-05 the reader
opened Li's 178-page PDF, Kramár's 7-page PDF, and tom Dieck's 67-page PDF at
the exact recorded URLs. The repository transport validators could not stamp
them in this environment: `source-fetch-check --stamp` returned
`EAI_AGAIN` for all three hosts, and the liveness sweep's curl attempts all
returned `Could not resolve host`; its archive recovery likewise had no DNS.
This is a shared DNS failure rather than evidence that any one source is dead.
No false `fetch_verified` stamp, URL swap, or re-harvest has been made. The
next runner with DNS should rerun:

    node tools/source-fetch-check.mjs --coverage research/frontier-31-batch-17.coverage.json --stamp
    node tools/url-sweep.mjs --coverage research/frontier-31-batch-17.coverage.json --out /tmp/frontier-31-batch-17-url-liveness.json --recover --fail-on-dead
