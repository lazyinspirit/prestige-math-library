# Frontier-31a independent reader report — batch 19

## Opened scope

I read `research/frontier-31a-batch-19.pages.json`, both assigned pages, all
24 assigned item files, and the direct dependency closure needed by their
arguments.

- A page: `library/representation-theory/brauer-induction-and-elementary-subgroups.md`
  (items 1–20): `def-p-elementary-and-p-hyperelementary-finite-groups`,
  `lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed`,
  `def-induction-ideal-of-a-family-of-subgroups`,
  `lem-induction-ideal-of-a-subgroup-family-is-an-ideal`,
  `lem-p-primary-character-value-congruence`,
  `lem-hyperelementary-permutation-subring-reduction`,
  `lem-banaschewski-prime-obstruction`, `lem-elementary-detection-at-a-fixed-element`,
  `lem-isaacs-linear-character-step`, `def-supersolvable-groups-and-monomial-characters`,
  `lem-p-elementary-groups-are-supersolvable`,
  `prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup`,
  `lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup`,
  `lem-monomiality-lifts-along-a-quotient`, `thm-finite-supersolvable-groups-are-monomial`,
  `lem-p-elementary-characters-are-induced-from-linear-characters`, `thm-brauer-induction`,
  `cor-elementary-restriction-detects-generalized-characters`,
  `cor-elementary-local-integrality-criterion`, and `cor-cyclotomic-field-splits-a-finite-group`.
- B page: `library/representation-theory/brauer-induction-and-elementary-subgroups-examples.md`
  (items 21–24): `ex-elementary-and-hyperelementary-small-groups`,
  `ex-brauer-induction-for-s3`, `ex-trivial-factors-in-an-elementary-group`, and
  `cex-cyclic-subgroups-do-not-give-integral-induction-in-general`.
- Published dependencies opened: finite p-groups and their subgroup/centre/fixed-point
  results; generated subgroups; external semidirect products; Sylow theory; normal
  subgroups and quotients; virtual characters, induction, restriction, projection,
  adjunction and Frobenius reciprocity; irreducibility, complete reducibility, quotient
  factorisation and abelian character theory; Mackey, transitivity and induced-character
  formulae; permutation characters; and cyclic induction subgroups.
- Independent external source sections opened: Wen-Wei Li, *Yanqi Lake Lectures on
  Algebra I*, Lecture 14.3, PDF pp. 168–170 and Lecture 14.4, PDF pp. 171–172
  (<https://www.wwli.asia/downloads/YAlg1.pdf>); the relevant Artin–Brauer notes by
  János Kramár (<https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf>);
  and Tammo tom Dieck's monomial-character treatment
  (<https://www.uni-math.gwdg.de/tammo/d01.pdf>).

## Confirmed defects repaired

1. `thm-brauer-induction`: the former proof said that nontrivial constituents of
   `Ind_Z^C 1_Z` vanish on `Z`.  They are instead trivial on `Z`; that distinction is
   needed for the Clifford/Isaacs step.  The proof also did not establish the necessary
   normalizer–Sylow reduction, fixed-coset congruence, multiplicity-one calculation, or
   inertia-subgroup induction.  I replaced the argument with the complete reduction,
   declared its dependencies, and regenerated its contract entry.
2. `cor-cyclotomic-field-splits-a-finite-group`: a virtual expression by
   F-defined induced modules was treated as an immediate F-model of an irreducible
   complex character.  I added the scalar-extension/decomposition argument using
   complete reducibility and disjoint irreducible supports, and regenerated its
   contract entry.

Edits are confined to the two in-flight item files, the batch-19 manifest dependency
list for `thm-brauer-induction`, and
`research/frontier-31a-batch-19.proof-contracts.json`.  Neither repaired item had a
`verification.judge` record to remove.

## Verdicts

- A page: pass after the two repairs.  Definitions, local lemmas, monomiality route,
  Brauer theorem, detection/integrality corollaries, and the page summary now preserve
  the required hypotheses and directions.
- B page: pass.  The small-group classifications, the `S_3` induction computation,
  trivial-factor observation, and the degree-parity counterexample are correct.
- Published dependency review: no uneditable defect found.

## Validation

- Reflowed both repaired items.
- `precheck.mts` passed for both repaired items.
- Strict proof-contract check: 21/21 entries, zero errors or warnings.
- Manifest dependency check: 24 items, zero errors.
- Scoped content-policy check: 24 items, zero errors.
- Citation-fidelity check: 32 citations, no missing quote or widening diagnostic.
- `git diff --check` passed.

## Uneditable findings and blockers

None.  There is no remaining uneditable defect in the assigned scope and no blocker.
