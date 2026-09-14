# Step 3b authoring report — Halpern–Läuchli and BPI without Choice

Run: `phase-2-next-18`  
Role: `alpha-high`  
Pair: `halpern-lauchli-and-bpi-without-choice` /
`halpern-lauchli-and-bpi-without-choice-examples`

## Scaffold audit and source record

The assigned inventory contains 13 A-page items and five B-page items.  The
complete Halpern–Läuchli paper, *A partition theorem*, Trans. AMS 124 (1966),
printed pp. 360–367, was read from the fetch-verified eight-page PDF recorded in
batch coverage.  Monk, *Set theory following Jech*, Theorem 29.28 and its
complete proof, printed pp. 661–670, was independently checked for the word
calculus and thinning argument.  Repický, *A proof of the independence of the
Axiom of Choice from the Boolean Prime Ideal Theorem*, CMUC 56 (2015), printed
pp. 543–546, was read in full for the model interface and for the historical
qualification described below.

Two local scaffold repairs are required before authorship.

1. `lem-halpern-lauchli-rule-soundness-and-finite-thinning` must not say that a
   rule preserves a fixed pointwise interpretation.  The source proves that a
   derivation preserves the quantified scheme
   $\forall\mathbf n\,\exists\mathbf p\,\Phi(W,\mathbf n,\mathbf p)$; Rule 3
   changes density parameters by finite thinning.  The manifest statement and
   strategy will be repaired to state that exact implication.
2. `thm-halpern-lauchli-finite-level-partition-compactness` applies König's
   lemma to the tree of bad finite colorings.  Arbitrary finite levels do not
   carry a canonical compatible ordering merely because each level is finite.
   The audited library theorem `thm-konig-finite-level-tree` states this result
   in ZFC and identifies AC's exact use: well-order the node set, then recurse
   through the least good successor.  The local theorem will therefore assume
   AC and depend on `def-axiom-of-choice` and
   `thm-konig-finite-level-tree`.  This does not alter or contaminate the
   choice-free dense-matrix theorem.

`lem-finite-partial-prime-ideal-extension` also needs a wording correction in
its strategy: existence of one nonzero refining atom is a single finite
existential argument, not a purported least choice from an ordering absent from
the hypotheses.  The theorem remains ZF.

## Published concern for owner reconciliation

Confirmed prose defect, not a premise of the new proof:
`rem-halpern-levy-bpi-not-ac` on page
`deferred-set-theory-beyond-choice` says the difficult BPI half rests on the
full Halpern–Läuchli theorem and calls that partition theorem genuinely
required.  Repický's complete 2015 proof, pp. 543–546, proves BPI in the same
basic Cohen model by the elementary continuity/finite-Boolean-expansion route
and explicitly contrasts it with the original full-theorem route.  Confidence:
high.  Required suppliers are Batch 7's
`thm-basic-cohen-model-satisfies-bpi-and-fails-choice` and
`cor-relative-consistency-of-bpi-without-choice-over-zf`, together with this
pair's independent `thm-halpern-lauchli-dense-matrix-dichotomy`.  After those
items are published, canonical repair should describe Halpern–Läuchli as the
historical method, not as logically necessary, and replace the Recorded remark
as a proof destination.  No published file or canonical defect ledger is being
edited in this dispatch.

## Item checkpoints

- `def-halpern-lauchli-finitistic-trees-density-and-matrices` — authored and
  accepted at confidence 1.  Claim/conventions: positive finite dimension;
  finitistic rooted trees with finite levels and no terminal nodes; distinct
  full and common-level products; domination, $(h,k)$-density and matrices;
  explicit $k=0$, $d=1$, excluded $d=0$, finite extension, and common-maximum
  cone restriction.  Sources: Halpern–Läuchli §1, pp. 360–361; Monk p. 661.
  Dependencies examined: `def-natural-numbers`,
  `def-product-of-an-indexed-family`.  Explicit-path precheck checked no
  proof-bearing block and found no failure; strict item contract passed.

- `def-halpern-lauchli-finite-word-calculus` — authored and accepted at
  confidence 1.  It gives the exact $L_d$ pair condition, ordinary
  commutations, bidirectional matched-pair replacement, the directed finite
  block rule, and reflexive-transitive finite derivability.  It explicitly
  warns that Rule 3 is not pointwise quantifier logic.  Sources:
  Halpern–Läuchli §2, pp. 362–363; Monk pp. 662–663.  Dependency examined:
  `def-halpern-lauchli-finitistic-trees-density-and-matrices`.  Explicit-path
  precheck and strict contract passed.

Current item: `lem-halpern-lauchli-word-calculus-rearrangement`.

- `lem-halpern-lauchli-word-calculus-rearrangement` — authored and accepted at
  confidence 1.  The proof reproduces the source's five-stage last-coordinate
  bridge, proves lifting through both outside matched pairs, prints the $d=1$
  Rule 2 derivation, performs the induction, and checks $L_d$ membership for
  every intermediate.  Source locators: Halpern–Läuchli Lemma 1, pp. 364–365;
  Monk pp. 662–664.  Dependency examined:
  `def-halpern-lauchli-finite-word-calculus`.  Explicit-path induction precheck
  and strict item contract passed.

Current item: `lem-halpern-lauchli-rule-soundness-and-finite-thinning`.

- `lem-halpern-lauchli-rule-soundness-and-finite-thinning` — authored and
  recorded `repaired` at confidence 1.  The completed proof defines the exact
  recursive semantics and $\Phi$, proves monotonicity, checks Rules 1 and 2,
  and performs Rule 3's finite root-tuple thinning with the source recurrence
  for density bounds.  Least natural density witnesses and one finite
  enumeration replace any hidden choice.  Sources: Halpern–Läuchli §3 and
  Lemma 2, pp. 365–367; Monk pp. 664–669.  Direct dependencies examined:
  `def-halpern-lauchli-finitistic-trees-density-and-matrices` and
  `def-halpern-lauchli-finite-word-calculus`.  The unused rearrangement edge was
  moved to the dichotomy that actually consumes it.  Explicit-path precheck
  and strict contract passed.

Current item: `thm-halpern-lauchli-dense-matrix-dichotomy`.

- `thm-halpern-lauchli-dense-matrix-dichotomy` — authored and accepted at
  confidence 1.  The positive semantic endpoint yields a $k$-matrix in $Q$;
  failure of the universal endpoint yields complement cones.  For the latter,
  the proof explicitly sets $h=\max_i n_i$, extends each root to height $h$,
  and restricts the $h+k$-dense frontier, including $k=0$.  This theorem is ZF
  and uses only finite selections.  Sources: Halpern–Läuchli Theorem 1 and its
  proof, pp. 361–367; Monk Theorem 29.28, pp. 661–670.  All three direct local
  suppliers were examined.  Explicit-path dichotomy precheck and strict
  contract passed.

Current item: `thm-halpern-lauchli-finite-level-partition-compactness`.

- `thm-halpern-lauchli-finite-level-partition-compactness` — authored and
  recorded `repaired` at confidence 1.  It proves the $q=1$ base, constructs
  the finite-level tree of bad colorings, invokes
  `thm-konig-finite-level-tree` under `def-axiom-of-choice`, handles both
  dense-matrix alternatives, and transfers the result to one terminal common
  level.  AC is used exactly to obtain the infinite branch; all domination
  maps and matrix thinnings are finite.  Source: Halpern–Läuchli Theorem 2 and
  Corollary 2, pp. 362–363.  All four direct dependencies were examined.
  Explicit-path precheck and strict contract passed.

Current item: `def-finite-partial-prime-ideal-diagrams`.

- `def-finite-partial-prime-ideal-diagrams` — authored and accepted at
  confidence 1.  A diagram is a homomorphism on the whole finite generated
  subalgebra, not a locally plausible partial assignment.  The cell
  construction treats empty generating lists, repetitions, zero cells and the
  trivial ambient algebra, and its zero fibre is checked prime.  Dependency
  examined: `def-boolean-ideals-filters-and-primality`.  Explicit-path
  precheck and strict contract passed.

Current item: `lem-finite-partial-prime-ideal-extension`.

- `lem-finite-partial-prime-ideal-extension` — authored and recorded
  `repaired` at confidence 1.  The proof identifies the unique $A$-atom with
  value one, takes one nonzero refining $C$-atom, proves evaluation there is a
  homomorphism extending $e$, and passes to $\langle A\cup F\rangle$.  It no
  longer assumes a nonexistent displayed ordering; a single finite
  existential witness uses no choice principle.  Dependency examined:
  `def-finite-partial-prime-ideal-diagrams`.  Explicit-path precheck and strict
  contract passed.

Current item: `lem-countable-boolean-algebra-prime-ideal-compactness-tree`.

- `lem-countable-boolean-algebra-prime-ideal-compactness-tree` — authored and
  accepted at confidence 1.  Finite homomorphisms on
  $\langle b(0),\ldots,b(n-1)\rangle$ form finitely coded levels; the branch
  takes the good bit-0 successor when available and bit 1 otherwise, so the
  supplied enumeration makes the recursion definable in ZF.  The coherent
  union is a homomorphism with prime zero fibre.  Both directions of the
  explicitly enumerated Boolean-diagram equivalence are included, with
  repetitions, the empty generated subalgebra, and nontriviality checked.
  Dependencies examined: the finite-diagram definition and extension lemma.
  Explicit-path precheck and strict contract passed.

Current item: `thm-bpi-and-set-ultrafilter-lemma-are-equivalent-over-zf`.

- `thm-bpi-and-set-ultrafilter-lemma-are-equivalent-over-zf` — authored and
  recorded `repaired` at confidence 1.  The forward direction quotients
  $\mathcal P(S)$ by the ideal dual to the supplied filter, pulls back a prime
  ideal, and proves maximality of the complementary filter.  The reverse
  direction uses finite deciding diagrams, their finite-intersection filter,
  UFL, and value cells to build a total homomorphism.  The finite-diagram
  extension lemma was added as the actual supplier.  Empty carriers, trivial
  algebras, properness and both implication directions were checked.  All four
  direct dependencies were examined; explicit-path precheck and strict
  contract passed.

Current item: `thm-halpern-lauchli-and-the-basic-cohen-bpi-model`; its Batch 7
suppliers must now be rechecked from completed files before authorship.

- `ex-a-two-tree-level-product-and-dense-matrix` — dependency-ready leaf
  authored while Batch 7 remained incomplete, and accepted at confidence 1.
  It lists all 16 level-2 pairs, gives the mixed-height full tuple $(0,101)$,
  and calculates explicit $(1,2)$-dense factors, including a mixed-height
  matrix member.  Dependency examined: the local tree/matrix definition.
  Explicit-path precheck and strict contract passed.

Next dependency-ready item: `ex-common-height-cone-repair-in-the-complement-case`;
item 11 remains open pending its four absent Batch 7 files.

- `ex-common-height-cone-repair-in-the-complement-case` — authored and
  recorded `repaired` at confidence 1.  It extends roots of heights 1 and 3 to common
  height 3, verifies parametric $(3,k)$-density, lists both $k=2$ frontiers,
  and checks $k=0$ singleton frontiers.  The unnecessary dependency on the
  preceding AI-generated example was removed because no statement from it is
  used; the local definition is the sole examined dependency.  Explicit-path
  precheck and strict contract passed.

Next dependency-ready item:
`ex-halpern-lauchli-word-rearrangement-in-dimension-two`; item 11 remains
pending the same Batch 7 supplier files.

- `ex-halpern-lauchli-word-rearrangement-in-dimension-two` — authored and
  accepted at confidence 1.  The ten-stage calculation prints every word,
  names Rule 3 permutations $(2,1)$ and $(1,2)$, uses both required directions
  of Rule 2, and checks membership in $L_2$ throughout.  Both local syntax and
  rearrangement dependencies were examined.  Explicit-path precheck and strict
  contract passed.

Next dependency-ready item:
`ex-prime-ideal-compactness-tree-for-a-finite-cofinite-algebra`; item 11 remains
pending the same Batch 7 supplier files.

- `ex-prime-ideal-compactness-tree-for-a-finite-cofinite-algebra` — authored
  and accepted at confidence 1.  It supplies an onto paired enumeration,
  computes levels 0 through 5 and their atom evaluations, constructs the
  coherent cofinite-remainder branch, and verifies that its zero fibre is the
  proper prime ideal `Fin`.  Dependency examined: the countable compactness
  lemma.  Explicit-path precheck and strict contract passed.

- `thm-halpern-lauchli-and-the-basic-cohen-bpi-model` — escalated after the
  required Batch 7 recheck.  The local Halpern--Läuchli conjunct is proved,
  but Batch 7 has an owner-held escalation on
  `lem-basic-cohen-continuity-forces-the-maximal-ideal-to-be-prime`: the item
  has no authored file or contract because the cited argument requires an
  unproved finite partite pattern amplification.  Its semantic consumer
  `thm-basic-cohen-model-satisfies-bpi-and-fails-choice` is also escalated and
  absent; independently, its declared suppliers do not identify the
  hereditarily symmetric presentation with the parameter-HOD presentation or
  prove the required finite-parameter representation for every Boolean
  algebra in the model.  All six declared dependencies and Batch 7's exact
  receipts/report were examined.  No body or contract was created, and the
  item decision was recorded `escalate` rather than overriding the owner-held
  gap.

Current item:
`cor-relative-consistency-of-halpern-lauchli-bpi-without-choice`.

- `cor-relative-consistency-of-halpern-lauchli-bpi-without-choice` —
  escalated.  Its local supplier proves the complete dense-matrix scheme in
  ZF, but the exact Batch 7 formal-consistency supplier is owner-held
  escalated and has no body or contract.  Batch 7's finite-formalization lemma
  covers fixed fragments of ZF plus not-AC, not the BPI sentence or a uniform
  prime-ideal construction; its semantic BPI theorem is independently
  escalated.  Thus the promised primitive-recursive proof substitution cannot
  yet be performed, and a semantic countable-transitive-model slogan would
  not repair it.  Both direct dependencies were examined; no body or contract
  was created, and the item decision was recorded `escalate`.

Current item: `thm-strict-relative-placement-of-bpi-over-zf`.

- `thm-strict-relative-placement-of-bpi-over-zf` — escalated.  The local
  theorem `thm-bpi-and-set-ultrafilter-lemma-are-equivalent-over-zf` is fully
  authored and would justify extending the cofinite filter.  Neither model
  input is available, however: the basic-Cohen relative-consistency corollary
  is owner-held escalated, while
  `cor-relative-consistency-of-no-free-ultrafilter-on-omega-over-zf` and its
  finite-formalizability prerequisite have no item bodies, contracts, or
  current Step 3 item decisions.  All three direct dependencies and the
  published formal source-consistency theorem were examined.  Both
  conditional nonprovability directions therefore remain unproved; no body or
  contract was created, and the item decision was recorded `escalate`.

Current item: `fs-bpi-well-orders-every-set`.

- `fs-bpi-well-orders-every-set` — escalated.  The internal calculation is
  elementary and choice-free: if an infinite Dedekind-finite set were
  well-ordered, recursion through the least unused point would give an
  injection from $\omega$.  But the promised countermodel and conditional
  nonimplication consume the same absent, owner-held escalated semantic and
  formal-consistency BPI suppliers.  `def-axiom-of-choice` and both of those
  dependencies were examined.  The least-element calculation cannot by
  itself establish a ZF+BPI countermodel, so no body or contract was created
  and the item decision was recorded `escalate`.

All dependency-ready items are complete.  The four exact downstream items
above remain owner-held through their Batch 7 inputs; both pages consequently
remain unauthored rather than falsely presenting a complete pair.

## Open obligations

- Owner resolution is required for
  `lem-basic-cohen-continuity-forces-the-maximal-ideal-to-be-prime`, including
  either a proved choice-free finite partite pattern amplification or a
  different verified proof.  Its semantic consumer also requires an exact
  bridge between the hereditarily symmetric and parameter-HOD presentations.
- After that repair, Batch 7 still needs a genuine finite-proof transformation
  covering the BPI sentence before
  `cor-relative-consistency-of-bpi-without-choice-over-zf` can be closed.
- The separate Batch 7 items
  `lem-feferman-tail-flip-model-is-finitely-formalizable` and
  `cor-relative-consistency-of-no-free-ultrafilter-on-omega-over-zf` remain
  unauthored and uncertified.
- Once the owner reopens and resolves those suppliers, author items 11--13 and
  18, add their four contracts, author and render both pages, and rerun the
  batch content policy.  Until then their cross-batch rows must remain open.

## Batch checks and handoff

The current owned scope decision is `sufficient`; the local statement and
dependency repairs did not add or drop a promised item.  No owner authoring
direction file exists.  The manifest now records the exact AC/König
dependency for finite partition compactness, the finite diagram-extension
supplier, and removal of one unused AI-generated example dependency.  Coverage
separately registers both the finite extension lemma and the published
König/AC supplier, and it explicitly says that reading Repický's complete
argument did not certify its disputed inference.

Completed IDs (14):

- `def-halpern-lauchli-finitistic-trees-density-and-matrices`
- `def-halpern-lauchli-finite-word-calculus`
- `lem-halpern-lauchli-word-calculus-rearrangement`
- `lem-halpern-lauchli-rule-soundness-and-finite-thinning`
- `thm-halpern-lauchli-dense-matrix-dichotomy`
- `thm-halpern-lauchli-finite-level-partition-compactness`
- `def-finite-partial-prime-ideal-diagrams`
- `lem-finite-partial-prime-ideal-extension`
- `lem-countable-boolean-algebra-prime-ideal-compactness-tree`
- `thm-bpi-and-set-ultrafilter-lemma-are-equivalent-over-zf`
- `ex-a-two-tree-level-product-and-dense-matrix`
- `ex-common-height-cone-repair-in-the-complement-case`
- `ex-halpern-lauchli-word-rearrangement-in-dimension-two`
- `ex-prime-ideal-compactness-tree-for-a-finite-cofinite-algebra`

The explicit-path precheck passed all 11 proof-bearing files among those 14;
the three definition files had no proof block to check.  Explicit-path
rendering passed all 14 with valid YAML and KaTeX.  The strict proof-contract
gate passed 14/14 with no warning.  Manifest dependencies passed 49/49 across
the shared batch, coverage passed two pages and 65 dispositions, and all five
batch sources retain full-text fetch verification.  `validate-plan` exited 0:
the declared reading order is acyclic and its currently populated item lists
have no item cycle, forward edge, B-page dependency, or unresolved ID.

The full shared-batch content-policy check was also run.  After the unused
generated-example edge was repaired, its only failures were 35 absent item
files: the four exact owner-blocked owned IDs above and 31 untouched Solovay
sibling IDs.  It reported no remaining content-policy defect in an authored
owned file.  The plan remains intentionally pre-splice: both owned page rows in
`research/plan-spec.json` still have empty item arrays, while the batch
manifest has 13 A-page and five B-page items.  Step 4 must reconcile that
inventory only after the owner-held mathematics is resolved; no shared prose
or plan file was silently spliced here.

The local supplier added during audit is
`lem-finite-partial-prime-ideal-extension`.  The published-content concern is
the high-confidence defect in `rem-halpern-levy-bpi-not-ac` documented above;
it remains routed to the owner, with no edit to published content or the serial
consumer-supplier ledger.  The sibling Solovay manifest, coverage, and
dependency row were preserved.
