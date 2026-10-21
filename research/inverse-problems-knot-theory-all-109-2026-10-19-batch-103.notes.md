# Batch 103 — authoring notes

## Scope and controlling plan

Owned pair: terminating-computations-for-classical-knot-invariants and its
examples companion only. The controlling content design is KT-48 in
research/plan-knot-theory-track.md (the section named in the batch task).
The current research/plan-spec.json row agrees on A/B page IDs, category,
orders 3202/3203, and all three page prerequisites. Its items arrays are empty
scaffolds, not a conflicting inventory. The KT-48 design supplies the four
planned A claims and two B items; the prerequisite map adds the explicit local
module thm-exact-bracket-output-bit-growth-bound. The batch manifest records
the complete local inventory and logical edges before item carriers are
written.

The detailed KT-48 prerequisite map repeats one broad dependency list for
several logically distinct items. The item graph below uses the exact
dependencies consumed by each argument. In particular, the crossing scan
does not use the bracket, and the bounded move search does not use Fox
coloring or bracket evaluation. The map names def-axiom-of-choice; the actual
ambient-isotopy suppliers use only def-countable-choice (ACω). Finite scans,
row reduction, state counting, and local move bijections remain choice-free.

## Run and scheduling evidence

The task and dependency-order task report batch dependency level 2 with
prerequisite batches 63, 82, and 102, and repeat scheduling input
ffac8436c0131c5e721b7bb4772865c951178ef3b7a2441809a278b32fb8390b.
The current batch-dependency-levels artifact also lists batch 103 at level 2
with those three prerequisites; its own input_sha256 field is
68252736dd60dac548ab9afca4cb887fa52a5673e9e4fa8529c113aa43f6a51b. These
are distinct recorded fields; no equivalence between them is inferred.
Item-level labels are computed from actual in-run item suppliers and appear
in the manifest; they are not the batch-level label.

The latest live status command (updated 2026-10-18T21:11:07.682Z) reported the
run as running, Step 1 scaffold at 27/109 covered, no in-flight workers, and
artifact completion deferred until authoring coverage is complete and writers
drain. The stage remains held for owner repair and recertification under
research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json.
That blocker names batches 31 and 56 as covered but artifact-incomplete and no
longer running. Batch 103's prerequisite batches are 63, 82, and 102; their
current page and item bodies were inspected directly and remain draft, so
interface presence is recorded without claiming acceptance. This batch did
not modify .autopilot/, shared plans, or verdicts.

The shared workspace already contained unrelated plan changes and many
untracked carriers when inspected. No files outside this pair and batch 103
evidence are in this authoring scope.

## Inventory, dependencies, and item levels

The page dependency level is 2. Item levels follow the in-run rule zero
without an in-run supplier, otherwise one plus the maximum supplier levels.

| Item | Page | Level | Direct logical dependencies |
|---|---|---:|---|
| def-encoded-diagram-size-and-exact-output | A | 2 | def-regular-oriented-link-diagram, def-quandle-and-knot-coloring, def-kauffman-bracket-smoothing-and-loop-value, def-planar-diagram-gauss-and-dowker-codes |
| lem-dihedral-fox-coloring-count-is-reidemeister-invariant | A | 2 | def-quandle-and-knot-coloring, lem-dihedral-operation-is-a-quandle, def-oriented-reidemeister-moves |
| thm-exact-bracket-output-bit-growth-bound | A | 3 | def-encoded-diagram-size-and-exact-output, alg-kauffman-bracket-state-sum, thm-kauffman-bracket-state-sum-procedure-properties |
| thm-knot-linking-number-and-fox-coloring-finite-complexity | A | 4 | def-encoded-diagram-size-and-exact-output, alg-oriented-linking-number-from-diagram, thm-oriented-linking-number-scan-terminates-and-is-correct, lem-linking-number-even-sum-and-reidemeister-invariance, alg-dihedral-fox-colorings, thm-dihedral-fox-colorings-terminate-and-are-correct, lem-dihedral-fox-coloring-count-is-reidemeister-invariant, thm-oriented-reidemeister-equivalence-theorem, def-countable-choice |
| thm-bracket-state-sum-exponential-bound | A | 4 | def-encoded-diagram-size-and-exact-output, alg-kauffman-bracket-state-sum, thm-kauffman-bracket-state-sum-procedure-properties, thm-exact-bracket-output-bit-growth-bound, thm-normalized-bracket-is-an-oriented-link-invariant, def-countable-choice |
| alg-reidemeister-move-neighbors-from-code | A | 5 | def-planar-diagram-gauss-and-dowker-codes, alg-planar-code-validation-and-diagram-reconstruction, alg-enumerate-diagrams-up-to-crossing-bound, def-oriented-reidemeister-moves |
| alg-breadth-first-reidemeister-search | A | 6 | def-planar-diagram-gauss-and-dowker-codes, alg-planar-code-validation-and-diagram-reconstruction, alg-reidemeister-move-neighbors-from-code |
| thm-reidemeister-enumeration-is-only-a-semidecision | A | 7 | alg-breadth-first-reidemeister-search, alg-reidemeister-move-neighbors-from-code, alg-enumerate-diagrams-up-to-crossing-bound, thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties, thm-planar-code-validation-and-diagram-reconstruction-procedure-properties, thm-valid-code-reconstructs-the-declared-link-diagram, thm-oriented-reidemeister-equivalence-theorem, def-countable-choice |
| ex-knot-kt-48-worked-cases | B | 4 | def-encoded-diagram-size-and-exact-output, def-quandle-and-knot-coloring, alg-kauffman-bracket-state-sum, thm-kauffman-bracket-state-sum-procedure-properties, alg-dihedral-fox-colorings, thm-dihedral-fox-colorings-terminate-and-are-correct, lem-dihedral-fox-coloring-count-is-reidemeister-invariant, thm-oriented-reidemeister-equivalence-theorem, def-countable-choice |
| cex-knot-kt-48-boundary-case | B | 8 | def-oriented-reidemeister-moves, def-planar-diagram-gauss-and-dowker-codes, thm-valid-code-reconstructs-the-declared-link-diagram, alg-breadth-first-reidemeister-search, thm-reidemeister-enumeration-is-only-a-semidecision, thm-oriented-reidemeister-equivalence-theorem, def-quandle-and-knot-coloring, alg-dihedral-fox-colorings, thm-dihedral-fox-colorings-terminate-and-are-correct, lem-dihedral-fox-coloring-count-is-reidemeister-invariant, def-countable-choice |

The local helper lemma and algorithms are placed on the A page as required.
The neighbor algorithm uses all-codes enumeration through crossing bound c+2
as a finite candidate set, then applies a separate finite code-site test for
one Reidemeister move. The all-codes enumerator itself returns candidates; it
does not supply move adjacency or identify knot types.

## Supplier inspection and interface checks

- fox-colorings-and-quandle-invariants (batch 63): read
  def-quandle-and-knot-coloring, lem-dihedral-operation-is-a-quandle,
  alg-dihedral-fox-colorings, and
  thm-dihedral-fox-colorings-terminate-and-are-correct. The interface uses
  odd prime p, arcs cut at undercrossings, operation a*b=2b-a, one equation
  per crossing, and a complete p^f coloring output. The direct row-reduction
  operation count below counts full row entries and separately includes
  assignment enumeration.
- The same batch's thm-quandle-colorings-are-reidemeister-invariant was read
  but is not used as a supplier. Its final proof step is numbered 2.1 and
  cites nonexistent step 2.3; the item also invokes ACω only for the
  ambient-isotopy-to-moves clause. The assigned A page supplies a complete,
  narrower Fox p-coloring move-bijection proof from the involution and
  distributivity calculations. This local route avoids treating the malformed
  proof as accepted evidence. The defect and affected planned use are reported
  for owner reconciliation; no foreign file was edited.
- kauffman-bracket-state-sum-and-jones-polynomial (batch 82): read
  def-kauffman-bracket-smoothing-and-loop-value,
  alg-kauffman-bracket-state-sum,
  thm-kauffman-bracket-state-sum-procedure-properties, and
  thm-normalized-bracket-is-an-oriented-link-invariant. The bracket is for
  a nonempty typed diagram; its state set has 2^c functions. The raw state
  sum is choice-free; normalized ambient-link invariance uses ACω through the
  oriented Reidemeister theorem.
- planar-diagram-codes-and-knot-table-enumeration (batch 102): read
  def-planar-diagram-gauss-and-dowker-codes,
  alg-planar-code-validation-and-diagram-reconstruction,
  thm-planar-code-validation-and-diagram-reconstruction-procedure-properties,
  alg-enumerate-diagrams-up-to-crossing-bound,
  thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties, and
  thm-valid-code-reconstructs-the-declared-link-diagram. Codes have finite
  dart/rotation/sign/outer-face data; the all-codes enumerator yields
  candidates and explicitly does not identify knot types. The semidecision
  proof uses the code-validity and reconstruction interface, not the
  all-codes enumerator.
- Linking-number suppliers in batch 58 of the current run: read
  alg-oriented-linking-number-from-diagram,
  thm-oriented-linking-number-scan-terminates-and-is-correct, and
  lem-linking-number-even-sum-and-reidemeister-invariance. The algorithm's
  domain is exactly two components and it assumes ACω; it scans the finite
  crossing list once. The latest live owner blocker names batches 31 and 56,
  not batch 58; the batch 58 bodies remain draft mathematical context and are
  not treated as accepted results.
- Published context: read def-oriented-reidemeister-moves,
  thm-oriented-reidemeister-equivalence-theorem, and
  def-regular-oriented-link-diagram. The first lists finite local variants;
  the theorem's ambient-isotopy equivalence uses ACω, while finite move
  calculations are choice-free.

## Mathematical issues and owner attention

1. The KT-48 design and prerequisite map state an O(c) coefficient-bit
   bound for every nonempty diagram using only crossing count c. This is
   false for arbitrary links: a crossingless m-component unlink has bracket
   (-A^2-A^-2)^(m-1), degree 2(m-1), even though c=0. The local theorem
   retains the knot conclusion (m=1, hence O(c+1)) and proves the stronger
   correct general estimate in c and m: degree at most 3c+2m-2, coefficient
   size at most m+2c+1 signed bits; writhe normalization adds at most 3c to
   absolute degree. This affects
   thm-exact-bracket-output-bit-growth-bound and
   thm-bracket-state-sum-exponential-bound. It is recorded as owner
   escalation because the written design's unrestricted c-only bound cannot
   be proved without changing its stated domain or bound.
2. The detailed prerequisite map overstates dependencies and axiom strength:
   it assigns bracket suppliers to the linking/Fox theorem and Fox/linking
   suppliers to the bracket and move-search theorems, and lists full
   def-axiom-of-choice even where the actual finite argument is choice-free.
   The manifest instead records logical direct edges and
   def-countable-choice only for ambient-isotopy claims.
3. No thm-bracket-state-sum-exponential-bound claim is a polynomial-time
   Jones evaluation. The exact state count is exponential, the arithmetic
   model is stated, and coefficient output size is bounded separately.

## Source reading and retrieval history

- Danny Calegari, Introduction to Knot Theory, full 2025 University of
  Chicago course-note PDF,
  https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf: read §1.2–1.3
  (printed pp. 5–8; Reidemeister theorem, invariant meaning, 3-coloring
  values), §3.3 (printed pp. 26–27; linking number), §4.1 (printed pp. 30–32;
  p-coloring move proof and matrix model), and §5.1 (printed pp. 38–41;
  bracket and writhe normalization). Initial web PDF extraction returned
  “content length is too large”; direct full-file retrieval succeeded and
  mutool draw -F txt extracted the complete PDF. No source was dropped.
- Justin Roberts, Knots Knotes, complete Edinburgh course-note PDF,
  https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf (67 pages):
  read §3.2 (printed pp. 14–15), §3.3 (pp. 16–18, including the F3 matrix
  reduction), and §4.3 (pp. 24–25, including the state-sum induction proof).
- Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial,
  arXiv:2204.12104v2, https://arxiv.org/pdf/2204.12104v2: read §2, including
  the bracket specialization, state definition, 2^c states, and state
  summation formula.
- At this source-history checkpoint, fetch stamps were pending; the completed
  coverage file now records the locators, supported items, retrieval attempts,
  dispositions, and stamps. The failed web extraction was recovered by direct
  retrieval and full-text inspection, so no source-resolution drop or
  escalation is recorded; the final fetch result appears below.

## Validation and next action

At this checkpoint, the item inventory and dependency labels are in
batch-103.pages.json. The first completed item is recorded below.

### Completed item: def-encoded-diagram-size-and-exact-output

- Claim/conventions: finite oriented diagram size is recorded by crossings
  c, components m, arcs a=c+q (q crossingless-underpass components), and the
  supplied code's literal bit length L. Exact signed-magnitude integer,
  Laurent coefficient, prime-field representation, and field-operation
  conventions are defined. Inputs are already typed/valid; no parsing or
  malformed-code complexity is claimed.
- Dependencies: def-regular-oriented-link-diagram,
  def-quandle-and-knot-coloring,
  def-kauffman-bracket-smoothing-and-loop-value, and
  def-planar-diagram-gauss-and-dowker-codes; manifest level 2.
- Source paths/URLs and locators: Calegari 2025 course notes,
  https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf, §§1.2–1.3 and 4.1;
  Roberts, Knots Knotes,
  https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf, §§3.3–3.4
  and 4.3. Full sections were inspected as described in source history above.
- Decision: use ai-altered statement provenance because the exact size and
  cost-model conventions are specified locally from standard diagram/color
  and state-sum data.
- Validation at the initial authoring checkpoint: manifest JSON parsed and
  listed this item at level 2. Later scoped precheck, renderer, proof-layout,
  source-fetch, and readiness results are recorded in the final section below.
- Unresolved obligations: the recorded owner escalation on the design's
  c-only coefficient bound remains for the two bracket bounds; this
  definition itself has no unresolved supplier check.

### Completed item: lem-dihedral-fox-coloring-count-is-reidemeister-invariant

- Claim/conventions: for odd prime p, coloring is the arc assignment with
  equation 2x_over=x_under,1+x_under,2. Every planar isotopy and oriented R1,
  R2, or R3 variant gives a unique extension bijection; only finite move
  sequences are claimed, so the proof is choice-free.
- Dependencies: def-quandle-and-knot-coloring,
  lem-dihedral-operation-is-a-quandle, and
  def-oriented-reidemeister-moves; manifest level 2. The malformed
  thm-quandle-colorings-are-reidemeister-invariant is deliberately not a
  dependency; the local proof supplies the exact odd-prime Fox case.
- Sources and locators: Calegari, Introduction to Knot Theory,
  https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf, §4.1, pp. 30–32;
  Roberts, Knots Knotes,
  https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf, §3.3,
  pp. 16–18; Przytycki,
  https://arxiv.org/pdf/math/0608172, §1. Full relevant passages were read.
- Decision: choice-free local bijection proof, no ACω dependency or ambient
  isotopy claim in this lemma.
- Validation: scoped precheck returned exit 0; the definition was
  not-applicable and the lemma passed. Final proof-layout also passed after
  all item edits; see the final validation section.
- Unresolved obligations: none for this lemma. The external malformed proof
  and bracket-bound design defect remain separately recorded for owner review.

The later level-3 and level-4 results and the move-search items were authored
in dependency order; their completion and final checks are recorded below.

### Completed item: thm-exact-bracket-output-bit-growth-bound

- Claim/conventions: for a nonempty link diagram with c crossings and m
  components, the raw bracket has absolute Laurent degree at most
  3c+2m-2 and signed coefficient-bit size at most m+2c+1; the dense exact
  coefficient array uses O((c+m)^2) bits. For knots (m=1), both bounds are
  linear in c+1. The proof counts the circle change by at most one per
  smoothing, uses the binomial l1 norm of each loop factor, and sums over the
  exact 2^c state set.
- Dependencies: def-encoded-diagram-size-and-exact-output,
  alg-kauffman-bracket-state-sum, and
  thm-kauffman-bracket-state-sum-procedure-properties; manifest level 3.
- Sources and locators: Kauffman, Combinatorial Knot Theory and the Jones
  Polynomial, https://arxiv.org/pdf/2204.12104v2, §2, PDF pp. 6–9; Roberts,
  Knots Knotes, https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf,
  §4.3, printed pp. 24–25; Calegari,
  https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf, §5.1,
  pp. 38–40. Full relevant passages were read.
- Decision: the map/design's unrestricted O(c) bound is impossible for
  arbitrary links. The proof preserves the full link domain with an explicit
  c,m estimate and includes the intended knot-only O(c+1) conclusion. Owner
  escalation remains required on this wording/scope discrepancy.
- Validation: scoped precheck over all three current A items returned exit 0;
  the definition was not-applicable and both proof-bearing items passed.
  Final proof-layout and renderer checks later passed; see the final validation
  section.
- Unresolved obligations: owner disposition of the false unrestricted c-only
  design bound; no mathematical gap remains in this carrier's stated
  c,m-dependent theorem.

The level-4 linking/Fox and normalized-bracket complexity theorems and the
finite move-search procedures were completed below.

### Completed item: thm-knot-linking-number-and-fox-coloring-finite-complexity

- Claim/conventions: for a two-component diagram the signed mixed-crossing
  half-sum scan takes one visit per crossing, after the constant-size
  component-count check. For Fox p-colorings with p odd prime, the dense
  c-by-a system has at most 2c coefficient-combination additions and ca
  initialization writes; with r pivots the search uses at most ca entry
  tests and row arithmetic at most ra+2r(c-1)a. The full-list output cost
  includes p^f assignments; a separate count-only repeated-squaring bound is
  stated. ACω is used only for ambient-link invariance.
- Dependencies: def-encoded-diagram-size-and-exact-output,
  alg-oriented-linking-number-from-diagram,
  thm-oriented-linking-number-scan-terminates-and-is-correct,
  lem-linking-number-even-sum-and-reidemeister-invariance,
  alg-dihedral-fox-colorings,
  thm-dihedral-fox-colorings-terminate-and-are-correct,
  lem-dihedral-fox-coloring-count-is-reidemeister-invariant,
  thm-oriented-reidemeister-equivalence-theorem, and
  def-countable-choice; manifest level 4.
- Transitive prerequisite check: read def-countable-choice (ACω definition),
  def-oriented-crossing-sign-writhe-and-blackboard-framing (determinant sign
  and positive braid convention), def-oriented-link-in-s-three-and-ambient-
  isotopy, def-oriented-reidemeister-moves,
  thm-oriented-reidemeister-equivalence-theorem,
  def-mod-two-intersection-number, and
  thm-mod-two-intersection-number-is-homotopy-invariant. The mixed-sign
  half-sum is integer by mod-2 parity and invariant move-by-move; the
  ambient-isotopy bridge uses ACω. The Fox supplier uses exactly the odd-prime
  field hypothesis and all row operations are reversible.
- Sources and locators: Calegari,
  https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf, §3.3 pp. 26–27 and
  §4.1 pp. 30–32; Roberts,
  https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf, §§3.2–3.4
  pp. 14–19; Przytycki,
  https://arxiv.org/pdf/math/0608172, §§0–1. Full relevant passages were
  inspected.
- Validation: scoped precheck of all four current A items returned exit 0;
  the definition was not-applicable and all three proof-bearing items passed.
  Final proof-layout later passed; see the final validation section.
- Unresolved obligations: owner reconciliation of the bracket c-only design
  bound remains separate. The current live blocker names batches 31 and 56;
  the actual batch 58 linking algorithm, scan theorem, and half-sum lemma
  bodies were present and read, with no acceptance claimed.

The normalized-bracket state-count theorem, finite move-neighbor generation,
breadth-first search, and semidecision proof were subsequently completed.

### Completed item: thm-bracket-state-sum-exponential-bound

- Claim/conventions: the raw state-sum part visits exactly 2^c states and the
  writhe normalization uses one sign scan. For c crossings and m components,
  the normalized output has degree at most 6c+2m-2 and coefficient-bit size
  at most m+2c+1; for a knot this is linear in c+1. Its invariance clause is
  conditional on ACω. No polynomial-time Jones evaluation is claimed.
- Dependencies: def-encoded-diagram-size-and-exact-output,
  alg-kauffman-bracket-state-sum,
  thm-kauffman-bracket-state-sum-procedure-properties,
  thm-exact-bracket-output-bit-growth-bound,
  thm-normalized-bracket-is-an-oriented-link-invariant, and
  def-countable-choice; manifest level 4.
- Sources and locators: Kauffman,
  https://arxiv.org/pdf/2204.12104v2, §2, PDF pp. 6–9; Roberts,
  https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf, §4.3,
  printed pp. 24–25; Calegari,
  https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf, §5.1,
  pp. 38–41. Full relevant passages were inspected.
- Decision: the link-general estimate includes m because the c-only source
  claim is false for crossingless unlinks with arbitrary component count.
  This item directly consumes the corrected local theorem, so it is included
  in the same owner escalation as thm-exact-bracket-output-bit-growth-bound.
- Validation: precheck returned exit 0 and status pass for this item.
  Final proof-layout and renderer checks later passed; see the final validation
  section.
- Unresolved obligations: owner disposition of the unrestricted c-only
  design bound. The worked B example has direct state-count dependencies and
  does not rely on this escalated coefficient-bound item.

### Completed item: alg-reidemeister-move-neighbors-from-code

- Claim/conventions: for a valid connected one-component normalized code, the
  procedure enumerates candidate code classes through c+2 crossings and
  tests finite crossing/edge relabelings and finite local R1/R2/R3 subrecords.
  It returns each accepted code with a local or relabeling certificate.
- Dependencies: def-planar-diagram-gauss-and-dowker-codes,
  alg-planar-code-validation-and-diagram-reconstruction,
  alg-enumerate-diagrams-up-to-crossing-bound, and
  def-oriented-reidemeister-moves; manifest level 5. The finite bound follows
  because R1 changes crossing count by one, R2 by two, and R3 by zero.
- Sources and locators: Calegari,
  https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf, §1.2 pp. 5–7;
  Erickson,
  https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html,
  Rotation Systems and Formalities and Trivialities. The local code comparison
  is specified in the item; the cited sources do not replace that procedure.
- Validation: the algorithm passed scoped nonproof-structure precheck; final
  dependency checks later passed as recorded in the final section.
- Unresolved obligations: none in the finite candidate-generation interface;
  the downstream theorem still must prove soundness/completeness of the local
  comparison and use the exact ACω Reidemeister supplier.

### Completed item: alg-breadth-first-reidemeister-search

- Claim/conventions: finite code classes are canonicalized by exhaustive
  crossing/edge relabeling; breadth layers store one predecessor and move
  certificate. Empty frontiers repeat and never return a negative answer.
- Dependencies: def-planar-diagram-gauss-and-dowker-codes,
  alg-planar-code-validation-and-diagram-reconstruction, and
  alg-reidemeister-move-neighbors-from-code; manifest level 6.
- Sources and locators: Calegari, Introduction to Knot Theory,
  https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf, §§1.2–1.3;
  Roberts, Knots Knotes,
  https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf, §2.3,
  printed pp. 10–13. Roberts explains why a fixed crossing bound is
  insufficient; the local algorithm supplies the unbounded layer search.
- Validation: the algorithm passed scoped nonproof-structure precheck; final
  dependency checks later passed as recorded in the final section.
- Unresolved obligations: none in the procedure definition.

### Completed item: thm-reidemeister-enumeration-is-only-a-semidecision

- Claim/conventions: finite neighbor layers terminate; positive output has a
  move path; every ambient-isotopic input pair is eventually found under
  ACω; no negative answer is returned. It claims no decision or
  complexity-class result.
- Dependencies: both local algorithms,
  alg-enumerate-diagrams-up-to-crossing-bound,
  thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties,
  thm-planar-code-validation-and-diagram-reconstruction-procedure-properties,
  thm-valid-code-reconstructs-the-declared-link-diagram,
  thm-oriented-reidemeister-equivalence-theorem, and
  def-countable-choice; manifest level 7. The proof uses the exact
  ambient-isotopy supplier hypothesis ACω.
- Sources and locators: Calegari, Introduction to Knot Theory,
  https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf, §§1.2–1.3;
  Roberts, Knots Knotes,
  https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf, §2.3,
  pp. 10–13. Roberts gives only a sketch of the theorem's difficult
  converse; the proof here instead invokes the complete current local
  supplier and proves the search properties in full.
- Validation: scoped precheck over all eight current A items returned exit
  0; the five proof-bearing items passed, the definition was not-applicable,
  and the algorithms passed nonproof-structure validation. Final proof-layout
  and renderer checks later passed; see the final validation section.
- Unresolved obligations: owner disposition of the corrected bracket
  c-only bound remains. The current run-level owner hold concerns batches 31
  and 56; this theorem's actual batch 58 linking suppliers were inspected and
  are not treated as accepted.

### Completed item: ex-knot-kt-48-worked-cases

- Claim/conventions: c=8 gives 256 bracket states. The standard trefoil is
  represented as a three-crossing two-strand braid closure; the statement
  explicitly names the three arc incidences and Fox equations. Over F3 the
  rows reduce to one nonzero relation, giving 9 colorings; the crossingless
  unknot has one free arc color and 3 colorings. Orientation reversal does
  not change the Fox equation; ACω is used only to infer distinct knot types.
- Dependencies: def-encoded-diagram-size-and-exact-output,
  def-quandle-and-knot-coloring, alg-kauffman-bracket-state-sum,
  thm-kauffman-bracket-state-sum-procedure-properties,
  alg-dihedral-fox-colorings,
  thm-dihedral-fox-colorings-terminate-and-are-correct,
  lem-dihedral-fox-coloring-count-is-reidemeister-invariant,
  thm-oriented-reidemeister-equivalence-theorem, and
  def-countable-choice; manifest level 4. It does not logically depend on
  the escalated general bracket coefficient bound.
- Source paths/URLs: Calegari,
  https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf, §§1.3 and 4.1;
  Roberts, https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf,
  §§3.3 and 4.3; Kauffman,
  https://arxiv.org/pdf/2204.12104v2, §2. Relevant full-text passages were
  inspected.
- Validation: scoped precheck returned pass; the TikZ diagram compiled to an
  81,872-byte SVG with the application renderer. Final proof-layout and
  rendercheck are recorded in the batch validation summary below.
- Unresolved obligations: none for the finite computations. The independent
  owner escalation on the A-page c-only bracket bound remains.

### Completed item: cex-knot-kt-48-boundary-case

- Claim/conventions: the false bounded-search implication is refuted for each
  depth $N$ by the crossingless unknot and the diagram with $2N+1$ disjoint
  type-I kinks. One move changes crossing count by at most two, so no path of
  at most $N$ moves connects the pair, although the explicit kink-deletion
  sequence proves oriented equivalence. A separate local Fox calculation
  gives 3 colorings for the unknot and 9 for the trefoil; orientation reversal
  leaves the equations unchanged and ACω is used only for the ambient-knot
  implication.
- Dependencies: def-oriented-reidemeister-moves,
  def-planar-diagram-gauss-and-dowker-codes,
  thm-valid-code-reconstructs-the-declared-link-diagram,
  alg-breadth-first-reidemeister-search,
  thm-reidemeister-enumeration-is-only-a-semidecision,
  thm-oriented-reidemeister-equivalence-theorem,
  def-quandle-and-knot-coloring, alg-dihedral-fox-colorings,
  thm-dihedral-fox-colorings-terminate-and-are-correct,
  lem-dihedral-fox-coloring-count-is-reidemeister-invariant, and
  def-countable-choice; item level 8. The separate Fox calculation is proved
  from suppliers rather than treating the companion example as a premise.
- Sources and locators: Calegari,
  https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf, §§1.2–1.3
  (printed pp. 5–8) and §4.1 (pp. 30–32); Roberts,
  https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf, §2.3
  (pp. 10–13) and §3.3 (pp. 16–18). The full relevant sections were read.
- Validation: precheck and proof-layout pass; proof contract has exact
  supplier excerpts, every numbered step and all boundary dispositions.
- Unresolved obligations: none in this carrier. The run-level owner hold and
  the two bracket-bound design escalations are recorded separately.

## Final scoped validation and evidence

- `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-103.pages.json`
  has two page records and ten items. A dependency/frontmatter comparison
  found no mismatches; both authored page bodies are empty. Item levels
  recomputed from all current run manifests as
  2, 2, 3, 4, 4, 5, 6, 7, 4, 8, matching the manifest exactly.
- Scoped item precheck: all seven proof-bearing items passed, both algorithm
  definitions passed nonproof-structure validation, and the definition was
  not-applicable. `node tools/proof-layout.mjs`
  over all ten changed items passed with 32 numbered steps and zero defects.
  `node tools/rendercheck.mjs` over the same ten files passed formula and YAML
  rendering checks. The example's TikZ source was separately compiled with
  the application renderer to an SVG of 81,872 bytes.
- Proof contracts: strict validation passed for all 7 proof-bearing items,
  with 46 exact supplier-section excerpts, 32 step derivations, 32 applicable
  finite checks, and all 56 standard boundary dispositions recorded.
- Source coverage: `coverage-checklist` passed for both pages with 17
  harvested results and no warnings. `source-fetch-check --stamp` verified
  all 6 source URLs; the read-only verification pass also returned 6/6. The
  Calegari PDF was 12,780,609 bytes / 48 pages, Roberts 804,354 bytes / 67
  pages, and Kauffman 3,952,456 bytes / 49 pages. Calegari's web extraction
  limit was recovered by direct PDF retrieval and full-text extraction; no
  source was dropped.
- Cross-batch evidence records 37 direct page/item edges for this batch, all
  verified by inspected body interfaces with draft status retained. A scoped
  ledger reconstruction from the relevant manifests confirmed 37/37 reviewed,
  with no open or orphaned batch-103 edges. The full run-wide ledger could not
  parse `items/lem-knot-reverse-mirror-connected-sum-is-ribbon.md:26` because
  its quoted YAML locator contains an invalid `\#` escape; that item belongs
  to batch 60 and was not edited.
- The full run dependency checker reports 170 errors outside batch 103,
  including empty scaffold inventories and stale labels. The batch-103
  dependency scope has zero errors. No foreign inventory or carrier was
  repaired.
- The latest autopilot status (updated 2026-10-18T21:24:08.939Z) has the run
  at 32/109 with no workers in flight. Its owner blocker names batches 31 and
  56 as covered but
  artifact-incomplete and no longer running; those are not batch 103's direct
  prerequisites. The run hold was not altered.
- Native Step 1 records are present for all ten items: eight hash-current
  `ready` records and two `escalated` bracket-bound records. The batch-scoped
  snapshot check confirms 8/10 ready, 2/10 escalated, and no stale hashes.
  The run-wide `step1-decisions check` remains open: it reports 501 items,
  298 ready, and unfinished work in other batches and pages. That global
  result is not an acceptance or closeout for this batch.
- Owner escalations: the KT-48 plan's unrestricted crossing-only bracket
  output bound is false for links with unbounded component count. For the
  crossingless $m$-component unlink, $c=0$ and the raw bracket has degree
  $2(m-1)$. The corrected $c,m$ bound is mathematically proved, but
  `thm-exact-bracket-output-bit-growth-bound` and its dependent
  `thm-bracket-state-sum-exponential-bound` remain escalated for owner scope
  reconciliation. The batch-63
  `thm-quandle-colorings-are-reidemeister-invariant` proof also retains a
  dangling citation: its final step 2.1 names nonexistent step 2.3. The local
  Fox move-bijection lemma proves the required odd-prime case directly, and no
  foreign item was changed.

The ten item readiness records were written with their exact direct
dependencies and inspected after recording. No owner escalation was
overwritten, and the run-wide owner hold remains for the owner to resolve.
