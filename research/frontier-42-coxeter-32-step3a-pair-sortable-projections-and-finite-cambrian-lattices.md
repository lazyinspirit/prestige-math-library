# Step 3a scope review — sortable-projections-and-finite-cambrian-lattices

- Run: `frontier-42-coxeter-32` (batch 32), role alpha, label
  `step3a-pair-sortable-projections-and-finite-cambrian-lattices-caa9edcd5b98fde9`.
- A page: `sortable-projections-and-finite-cambrian-lattices` (order 1780,
  `coxeter-groups`; 3 items: definition
  `def-cg-recursive-sortable-projection-and-cambrian-congruence`, theorem
  `thm-cg-sortable-meet-join-closure-and-cambrian-quotient`, theorem
  `thm-cg-sortable-projection-greatest-element-and-interval-fibers`).
- B page: `sortable-projections-and-finite-cambrian-lattices-examples`
  (order 1781; 2 examples `ex-cg-cambrian-quotient-of-s3-and-two-orientations`,
  `ex-cg-a3-sortable-subset-and-a-three-element-fiber`).
- Companion pointers agree A<->B; the B page's only `requires` is the A page,
  and no other page in the 32-batch run requires either page (dependency leaf,
  as designed).
- Decision: **sufficient** at the current pair scope hash (recorded with
  `tools/step3-decisions.mjs record-scope` as a non-owner review; see
  Recording below). Scope only: no item approval, no owner record, and no
  scaffold, plan, manifest, coverage or page edit.

## Evidence read

- `research/frontier-42-coxeter-32-batch-32.pages.json` (all 5 items: full
  statements, strategies, provenance, deps/justified_by),
  `...-batch-32.coverage.json` (3 sources, 26 harvested rows across both pages),
  `...-batch-32.notes.md` (batch record: design reconciliation, dependency
  levels, source stamps, construction order),
  `...-batch-32.cross-batch-dependencies.json` (50 rows: 48 item edges + 2 page
  edges, all `open` at Step 3).
- Prose design and binding inputs: `research/plan-coxeter-groups-track.md`
  section CG-29 (lines 578-591: three A local supplier contracts and the B
  companion text); the native prose pages
  `library/coxeter-groups/sortable-projections-and-finite-cambrian-lattices{,-examples}.md`;
  `research/plan-spec.json` orders 1780/1781 (empty item arrays; ids, companion
  and `requires` equal the manifests); `research/coxeter-scaffold/inventory.json`
  CG-29; `research/coxeter-scaffold/definition-justifications.json` (the
  definition's recorded justifier is exactly
  `thm-cg-sortable-projection-greatest-element-and-interval-fibers`, matching
  the manifest); `research/coxeter-scaffold/independent-audit.md` line 28
  (the audited decision that the traditional least-contraction Cambrian
  congruence is *not* silently identified with the sortable-kernel quotient).
- Owner inputs: `research/frontier-42-coxeter-32-owner-scope.json` (this pair
  is in the owner-selected scope),
  `research/frontier-42-coxeter-32-owner-authoring-direction.md`,
  `research/frontier-42-coxeter-32-alpha-step1-drift.md` section for this page
  (verdict `no-drift`, "No prerequisite gap"), and the five step-1 readiness
  records `research/frontier-42-coxeter-32-step1-<item>.json` (all
  `decision: ready`, no findings).
- Supplier evidence at clause level (statements of the in-run items cited by
  the A items): `def-cg-coxeter-oriented-euler-form-and-c-sorting-word`,
  `def-cg-initial-letter-sortable-projection`,
  `def-cg-sortable-element-skip-roots-and-cone`,
  `lem-cg-sortable-cone-criterion-and-projection-monotonicity` (2),(3),(4),
  `lem-cg-sortable-recursion-output-and-initial-choice-independence` (2),(4),
  `lem-cg-sortable-skips-basis-and-cover-decomposition` (1),(3),(5),
  `thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions` (1)-(4),
  `lem-cg-weak-parabolic-projection-and-cover-joins` (1)-(4),
  `lem-cg-finite-rank-two-inversion-set-recognition` (1),(2),
  `lem-cg-uniform-omega-positive-and-aligned-sortability` (2),
  `thm-cg-finite-parabolic-longest-element-and-opposition` (1),(2),
  `def-cg-finite-lattice-congruence-and-interval-projections` (1),
  `lem-cg-lattice-quotient-descent-and-class-intervals`,
  `thm-cg-finite-lattice-interval-congruence-criterion`,
  `thm-cg-weak-order-meet-semilattice-and-finite-lattice` (2),
  `lem-cg-weak-order-is-a-graded-partial-order` (4),
  `lem-cg-weak-order-prefix-property-and-left-translation` (1),
  `def-cg-parabolic-quotient-and-two-sided-minima` (2),
  `def-hh-coxeter-matrix-word-group-and-length`. Every clause cited by the
  batch-32 items exists with the stated hypotheses and direction.
- Sources re-verified by me against fresh arXiv e-print fetches (network):
  Reading-Speyer, arXiv:0803.2722 (v3 tarball, 2010-02-08; read section 7:
  Theorem 7.1 with its proof, Corollary 7.2's statement, Theorem 7.3 with its
  full proof, Theorem 7.4's statement, the inversion-set remark after the proof
  of Theorem 7.1, and the opening of section 8) and Reading, arXiv:math/0512339
  (v1 tarball, 2005-12-14; read the introduction's four main results (the
  congruence theorem, the sublattice theorem, the `w -> w w_0` anti-isomorphism
  proposition and the identification theorem) and section 3's Lemma 3.4 (`piup
  formula`), Lemma 3.5 (`pidown alt form`), Lemma 3.6 (`piup alt form`) and
  Proposition 3.7 (`equiv`) with proofs). Uncertain where I did not read: I read
  selected sections of the extracted LaTeX, not the full papers; in particular
  I read only the statement of RS Theorem 7.4 and did not audit Reading's later
  sections 4-5.
- Independent machine spot-check of the B examples' computational claims
  (honest note: this checks the examples' arithmetic, not the written proofs):
  I implemented the scaffold's initial-letter recursion `pi_c` directly and
  reproduced, for `c=s1s2s3` and `c'=s1s3s2`, the 14-element c-sortable subset
  of `S_4`, the six nontrivial fibers with their exact members and sizes
  (including `pi_c^{-1}(s3)={s3,s3s2,s3s2s1}` of size 3), the
  `u_c`-endpoints, the five-element `s2`-fiber for `c'`, and meet/join
  preservation on all 36 pairs of `S_3` for both orientations. All match the
  manifest claims.

## Scope against the prose design

All three CG-29 A contracts are present with their exact ids and kinds, and the
manifest statements carry the design's clauses:

1. `def-cg-recursive-sortable-projection-and-cambrian-congruence` recalls the
   proved projection `pi_c`, defines the sortable equivalence/quotient order
   and the proposed class operations, and records the explicit abstentions
   (no congruence, no interval fibers, no identification with the least
   oriented rank-two contraction congruence, no counting/noncrossing/fan
   claims) exactly as the design demands, with the recorded justifier named.
2. `thm-cg-sortable-meet-join-closure-and-cambrian-quotient` contains the
   designed clauses: meet closure with the inversion-set intersection identity
   (RS Theorem 7.1 plus the remark), join closure via greatest-sortable-below
   (RS Theorem 7.1 / Reading Theorem 1.2), the initial-letter join formula
   (RS Theorem 7.3's special case), meet/join preservation with the
   both-above/both-below/mixed induction (RS Theorem 7.3 full statement), and
   the conclusion that `pi_c` is a surjective lattice homomorphism whose kernel
   is the congruence (Reading Theorem 1.1 content), plus the abstention.
3. `thm-cg-sortable-projection-greatest-element-and-interval-fibers` contains
   the explicit upper projection `u_c(w)=pi_{c^{-1}}(w w_0) w_0` with the three
   recursions (Reading Lemmas 3.4-3.6), monotonicity/idempotence of `u_c`, the
   interval-fiber theorem with both endpoints and the interval-congruence
   criterion application (Reading Proposition 3.7 and the proof of Theorem
   1.1), and the abstention.

The B companion is exactly the design's commissioned computation set: the S3
example covers both orientations, the fiber profiles, the upper endpoint and
meet/join preservation; the A3 example covers the 14-element sortable subset,
a three-element fiber, the endpoint maps, a sample meet/join computation and a
second orientation whose `s2`-fiber has five elements ("a fiber that has more
than two elements", as the design asks).

No design/plan conflict was found. The only plan-level diagnostics touching
this pair are the `redundant-prereq` warning (the A page names
`finite-lattice-projections-and-coxeter-chain-labels` although it also reaches
it through `coxeter-euler-forms-and-sortable-chamber-cones`) and the advisory
`coverage-low-yield` warning discussed below; both are warnings, and the batch
notes record the same reading.

## Source coverage and decline confirmation

The A page harvests 19 source results (7 `included`, 4 `inline`, 5 `deferred`,
3 `out-of-scope`) and the B page 7 (6 `included`, 1 `inline`); all six source
rows carry fetch stamps (`tools/source-fetch-check.mjs`: 6/6 verified,
0 drops) and `tools/coverage-checklist.mjs --require-destination` reports
0 errors. Because the A page builds 7 of 19 harvested results, the checklist
emits the advisory `coverage-low-yield` warning and asks Alpha to confirm the
declines; I confirm them individually:

- The five `deferred` rows name in-run destinations
  (`coxeter-euler-forms-and-sortable-chamber-cones` for RS section 6 and
  Reading Propositions 3.2/Corollary 3.3;
  `weak-order-inversions-and-lattice-operations` for the Bjorner-Brenti weak
  order and parabolic-factorization facts). Each destination page exists in
  this run with items whose statements contain the deferred claims (RS section
  6 material is the sortable-cones page's own contract list; the weak-order
  page supplies the graded-order, prefix and finite-lattice statements).
- The four `inline` rows (Reading Proposition 3.1; Bjorner-Brenti Proposition
  3.1.2, Proposition 3.1.5, Lemmas 3.2.3-3.2.4) are absorbed into the two A
  theorems' proofs, and the absorbed content (length identity/prefix property
  for the order-isomorphism argument, the `w -> w w_0` antiautomorphism, the
  cover-join lemmas) is visible in the item strategies.
- The three `out-of-scope` rows are RS Theorem 7.4 (the `c`- to `scs`-sortable
  bijection), Reading Remark 3.8 (W-Catalan counting) and Reading Lemma 3.9
  (a technical fiber-comparison lemma). I checked from the sources that none of
  them is used by the pair's promised claims: the chosen fiber route is
  Reading's section 3 (Lemmas 3.4-3.6, Proposition 3.7) and the join route is
  RS section 7's Theorems 7.1/7.3, whose proofs do not invoke Theorem 7.4; the
  counting and Bruhat-label developments are separate subjects the design
  excludes (and the pages' abstention clauses repeat that).

So the low yield is the honest shape of a pair whose design deliberately
re-uses a prerequisite page for the section 6 material; it is not evidence of
an unfinished pair.

## Prerequisites and dependency closure

- Recursive closure of the five items over `deps`+`justified_by`: 183 ids,
  0 unresolved. Split: the 5 own items; 54 further items in 11 other pages of
  this run (canonical-roots-signs-and-faithful-reflections,
  coxeter-euler-forms-and-sortable-chamber-cones,
  coxeter-presentations-exchange-and-reduced-word-theorems,
  finite-coxeter-diagrams-and-complete-classification,
  finite-lattice-projections-and-coxeter-chain-labels,
  finite-reflection-arrangements-and-spherical-coxeter-complexes,
  parabolic-subgroups-and-double-coset-geometry,
  real-forms-and-reflection-geometry,
  tits-cones-chambers-and-parabolic-stabilizers,
  weak-order-inversions-and-lattice-operations; the B page's items reuse the
  same closure); and 124 ids that are published `items/*.md` files. I checked
  every closure id against both the run manifests and the on-disk item corpus:
  nothing is absent.
- The two `requires` page edges resolve in-run: `coxeter-euler-forms-and-sortable-chamber-cones`
  (batch 29, its own Step 3a review still in flight) and
  `finite-lattice-projections-and-coxeter-chain-labels` (batch 5, review
  recorded `sufficient`).
- The 48 item-level cross-batch edges each state the required claim and its
  use; spot-checking every clause the A items cite (listed under Evidence read)
  found each clause present with the right hypotheses and direction. In
  particular the two facts that could have been gaps are present:
  `def-cg-finite-lattice-congruence-and-interval-projections` (1) supplies the
  interval-congruence criterion the fiber theorem applies, and
  `def-hh-coxeter-matrix-word-group-and-length` plus its page's exchange
  theorem supply length additivity/parity and the definition of the length
  (subadditivity of `l` used in the meet/join proof is a one-line consequence
  of the length definition via concatenation of reduced words, so citing the
  definition is legitimate).
- No confirmed unmet prerequisite, and no uncertainty that would need
  escalation: everything the pair consumes is either published or scaffolded
  in this run, and each item is `ready` in its Step 1 record.

## Consumers and role in the library

No item of this pair has a consumer in this run or in the published library
(checked all 32 batch manifests and `items/`): the only edge into the pair is
the B page's `requires`, and the pair is the last element of the
`davis-noncrossing-and-cambrian-theory` part of
`library/coxeter-groups/_pathway.md`. Its designed role is to carry the
sortable-quotient/Cambrian-lattice results as a terminal branch, and the
manifest matches that role; nothing downstream depends on claims it does not
make.

## Non-blocking observations for the owner

1. The classical identification "the sortable-kernel congruence equals the
   least lattice congruence contracting the `c`-oriented rank-two pairs"
   (Reading Theorem 1.4), and the W-Catalan counting of `c`-sortable elements
   (Reading Remark 3.8), are deliberately not asserted anywhere in this run;
   the page's definition and theorems carry explicit abstention clauses, and
   `independent-audit.md` line 28 records the decision. This is a scope
   boundary of the design, not an omission of the promised claims; if the owner
   later wants the traditional identification or the counting theorem in the
   library, that requires a new item/pair rather than an enrichment of this
   one.
2. `research/coxeter-scaffold/inventory.json` CG-29 lists
   `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` (a
   Bruhat-interval-labels page item) among the definition's `depends_on`, and
   lists `thm-cg-finite-lattice-interval-congruence-criterion` as a dependency
   of the meet/join theorem, while the manifest cites that criterion on the
   fiber item and does not cite the shelling lemma at all. The batch manifest,
   the plan-spec and the cross-batch ledger agree with each other and are the
   authoritative item-level records; the inventory summaries look shifted.
   No scope effect; noted because Step 3a may not edit scaffolds.
3. The A3 example cites `thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions`
   inline (for `pi_c` being the identity on sortable elements) without listing
   it among the item's `deps`; the theorem is in the item's transitive closure
   through the two A theorems, so the audit hash is unaffected, but an item
   author may prefer to declare the direct edge.
4. The definition's abstention speaks of "the `c`-orientation" and "oriented
   rank-two pairs"; the prerequisite page describes exactly that orientation
   (`def-cg-coxeter-oriented-euler-form-and-c-sorting-word` (2): the sign of
   `omega_c` on a rank-two subsystem is its orientation induced by `c`) but
   does not introduce the bare term. Since the clause asserts nothing, the
   current wording is usable; a one-clause naming convention would remove any
   ambiguity.

## Recording

Recorded with `node tools/step3-decisions.mjs record-scope --run
frontier-42-coxeter-32 --page sortable-projections-and-finite-cambrian-lattices
--decision sufficient --reason "<scope evidence and this report path>"`. The
reason carries the contract match, the confirmed declines, the 183-id closure
with 0 unresolved, the clause-level supplier check, the no-consumer fact and
the non-blocking observations. No item approval and no owner record was
written.
