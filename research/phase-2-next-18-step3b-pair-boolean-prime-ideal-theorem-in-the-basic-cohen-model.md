# Step 3b authoring report — Boolean Prime Ideal Theorem in the basic Cohen model

Run: `phase-2-next-18`  
Role: `alpha-high`  
A page: `boolean-prime-ideal-theorem-in-the-basic-cohen-model`  
B page: `boolean-prime-ideal-theorem-in-the-basic-cohen-model-examples`

## Authority and preserved scope

This dispatch owns only the displayed A/B pair in batch 7. The sibling
`symmetric-collapse-and-ultrafilter-free-models` pair and all of its manifest
and coverage rows are preserved. There is no
`research/phase-2-next-18-owner-authoring-direction.md`. The batch-7 incoming
cross-batch dependency input remains empty: this pair uses published suppliers
only, and later batch 8 is a consumer rather than an input.

## Source audit and scaffold repairs

The complete four-page Repický paper was reread from the verified PDF
`e9fa0c8091b657a5...`: Lemma 2 on printed pp.543-544, Corollary 3 on p.545,
and the maximal-ideal/Boolean-expansion argument on pp.545-546. Jech's complete
Theorem 7.1 passage was reread from the full book at printed pp.97-98. Contrary
to the prior batch note and coverage wording, Jech explicitly says that it does
**not** give the proof for the basic Cohen model; the ensuing proof concerns the
Mostowski permutation model. The owned coverage row now records that exact
qualification. Jech corroborates the theorem statement, not its Cohen-model
proof.

Two scaffold defects required repair before authoring.

1. `lem-basic-cohen-model-schema-of-continuity` was false for an arbitrary
   fixed parameter tuple from the symmetric model. If `f=a_0` and
   `phi(a,A,f)` is `a=f`, no neighbourhood of `a_0` can preserve the formula
   under all substitutions from the dense set `A`. Repický's actual Lemma 2
   permits ground parameters; its Corollary 3 permits supported definable
   parameters only while the varied tuple is disjoint from the fixed support.
   The manifest now states those hypotheses explicitly.
2. `cor-basic-cohen-model-finite-set-continuity` had the same missing
   disjoint-support hypothesis and was too unary for the eventual finite-orbit
   use. Its repaired statement is the simultaneous finite-arity form obtained
   by applying Lemma 2 to the support tuple concatenated with all varied
   coordinates.

There is also a load-bearing unresolved point in the cited p.545 proof of
`lem-basic-cohen-continuity-forces-the-maximal-ideal-to-be-prime`. The paper
chooses `k` minimal so that `I` is nonprime on elements definable with `k+1`
additional Cohen parameters, then says that primality on the smaller
`OD(A,f,h)` subalgebra makes `I` maximal among ideals definable from
`A,f,h`. That implication is not valid merely from the displayed premise: a
nonempty set definable from `A,f,h` need not contain an element definable from
those parameters (the symmetric set `A` itself is the basic warning). Hence a
definable proper ideal may properly extend `I` without presenting a point of
the smaller definable subalgebra outside `I`. A public Math StackExchange
thread raises the same issue; its answer and follow-up comments do not justify
the exact maximality inference. The thread is only corroborating evidence, not
an authoritative repair. The 2025 arXiv preprint *On BPI in Symmetric Extensions,
Part 1* calls the Repický proof efficient and supplies a different direct proof;
its introductory endorsement also does not establish the disputed inference.

The owned scaffold now records the proposed repair: vary the full finite
support of a nonprime witness, use maximality only for the two full-orbit
generated ideals (which really are `OD(A,f)`), and prove the required finite
product amplification locally before the Boolean expansion. It does not use
the later Halpern--Läuchli page. This is a proof obligation, not yet a completed
argument; item 4 and every consumer remain open unless that finite
amplification is fully derived.

## Checkpoint 0 — audit complete

- Current item: `lem-basic-cohen-model-schema-of-continuity`.
- Exact convention: `P=Add(omega,omega)` consists of finite maps
  `omega x omega -> 2`, stronger conditions extend weaker ones, and
  `a_i(n)` is the generic bit at `(i,n)`. The lemma needs only a ZF ground
  together with the given generic; the source's ambient ZFC hypothesis is not
  propagated because Choice is unused.
- Source locator: Repický, Lemma 2, printed pp.543-544; Corollary 3, p.545.
- Examined dependencies: `def-basic-cohen-symmetric-system`,
  `def-ordinal-definability-and-hod`,
  `lem-forcing-monotonicity-density-and-decision`,
  `lem-symmetry-lemma-for-forcing-automorphisms`, `thm-forcing-theorem`.
- Decision: scaffold repaired; no item decision has been recorded before the
  proof is written and checked.
- Open gap: the downstream full-orbit finite amplification described above.
- Next action: author item 1 from the forcing compatibility argument, run its
  explicit precheck/render checks, append its completed checkpoint, and only
  then record the item decision.

## Checkpoint 1 — continuity schema authored

- Completed ID: `lem-basic-cohen-model-schema-of-continuity`.
- Exact claim: Repický's ground-parameter clopen-box continuity, plus the
  supported-parameter consequence only for a varied tuple disjoint from the
  fixed support. The empty tuple is handled separately. The argument is
  choice-free over ZF once the displayed generic is assumed.
- Proof: a truth-lemma condition is extended to a finite square with distinct
  rows; a decided countertuple is moved to the original tuple by disjoint
  transpositions, and the permuted countercondition is checked row by row to
  be compatible with the square.
- Source locator: Repický Lemma 2, printed pp.543-544, and the definability
  substitution in Corollary 3, p.545. Jech printed pp.97-98 is statement-only
  corroboration.
- Examined dependencies: `def-basic-cohen-symmetric-system`,
  `lem-basic-cohen-generic-reals-form-a-symmetric-set`,
  `def-ordinal-definability-and-hod`,
  `lem-forcing-monotonicity-density-and-decision`,
  `lem-symmetry-lemma-for-forcing-automorphisms`, `thm-forcing-theorem`.
- Checks: explicit-path precheck passed; explicit-path rendercheck passed with
  every math span parsed by KaTeX; strict item-selected proof-contract check
  passed with 0 errors and 0 warnings. Batch manifest dependencies and coverage
  also passed. Full post-author content-policy is deferred until all batch item
  files exist; its manifest-only mode correctly rejects an already-authored
  in-flight item and is not a post-authoring invocation.
- Decision recorded: `repaired`, confidence 1. The repair is necessary because
  the original support-free claim has the counterexample recorded above.
- Open gap: unchanged downstream item-4 finite amplification.
- Next action: author `cor-basic-cohen-model-finite-set-continuity` from the
  supported-parameter consequence, including simultaneous substitutions and
  all finite/empty cases.

## Checkpoint 2 — finite-set continuity authored

- Completed ID: `cor-basic-cohen-model-finite-set-continuity`.
- Exact claim: a finite family of injective input tuples for a finite-arity
  supported map may be substituted coherently through pairwise disjoint
  clopens, provided the union of varied coordinates is disjoint from the fixed
  support. One fixed finite conjunction of membership, nonmembership, and
  Boolean-complement assertions is preserved. The clopens can be shrunk inside
  previously prescribed basic neighbourhoods.
- Source locator: Repický Corollary 3, printed p.545. The proof explicitly
  compiles the supported objects' ordinal definitions and the finite
  conjunction into one formula before applying checkpoint 1.
- Examined dependencies: `lem-basic-cohen-model-schema-of-continuity`,
  `def-set-difference-and-symmetric-difference`, and
  `def-boolean-ideals-filters-and-primality`.
- Checks: explicit-path precheck passed; explicit-path rendercheck passed with
  KaTeX parsing; strict item-selected proof-contract check passed with 0 errors
  and 0 warnings. Empty `F`, arity zero, singleton, shared-coordinate,
  prescribed-neighbourhood, and choice cases are all dispositioned.
- Decision recorded: `repaired`, confidence 1. The original unary statement
  omitted the necessary disjoint-support condition; the current statement is
  the exact simultaneous form needed by a full finite-orbit argument.
- Open gap: unchanged downstream item-4 finite amplification.
- Next action: author
  `lem-ordinal-definable-maximal-proper-ideal-in-the-basic-cohen-model` by a
  recursion through the definable proper ideals themselves, checking the
  empty/trivial Boolean-algebra boundary and avoiding Zorn's lemma.

## Checkpoint 3 — supported-definable maximal proper ideal authored

- Completed ID:
  `lem-ordinal-definable-maximal-proper-ideal-in-the-basic-cohen-model`.
- Exact claim: if the supported-definable Boolean algebra is nontrivial, it
  has a proper ideal maximal among the proper ideals definable from the same
  fixed parameters. It does not claim maximality among every ideal of the
  algebra.
- Proof: Separation forms the set of supported-definable proper ideals. Each
  receives its least rank/formula/finite-ordinal-tuple definition code, and
  Replacement collects those codes into the canonical set well-order. A unique
  transfinite recursion accepts an enumerated ideal exactly when it contains
  the current stage and takes unions at limits. Transfinite induction keeps
  every stage proper, and any supported-definable proper extension of the
  terminal ideal would already have been accepted at its own stage.
- Source locator: Repický, maximal-ideal construction at printed p.545. The
  implementation additionally uses the published definition-code well-order
  and the choice-free ZF transfinite-recursion theorem.
- Examined dependencies: `def-boolean-ideals-filters-and-primality`,
  `def-ordinal-definability-and-hod`,
  `lem-canonical-well-order-of-finite-definition-codes`,
  `thm-transfinite-recursion`.
- Model-membership check: the item states Repický's finite-support
  parameter-HOD convention explicitly. Since the terminal ideal is
  `OD(A,f)` and its transitive closure is contained in itself together with
  the transitive closure of `B`, it belongs to that presentation directly;
  the proof does not substitute the theorem about ordinary parameter-free
  HOD.
- Checks: explicit-path precheck passed after adopting its canonical step
  numbering; explicit-path rendercheck passed with all mathematics parsed;
  strict item-selected proof-contract check passed with 0 errors and 0
  warnings.
- Decision recorded: `repaired`, confidence 1. The original statement was
  false for the trivial Boolean algebra, and the repair now states and uses
  `0_B != 1_B`.
- Open gap: item 4 still requires the local finite product-Ramsey
  amplification that is absent from the cited proof; accepting checkpoint 3
  supplies no license to identify relative definable maximality with ordinary
  maximality.
- Next action: revalidate and record the repaired scope/item decision, then
  either derive that finite amplification completely or escalate item 4 and
  its consumers with the exact source gap.

## Checkpoint 4 — primality lemma escalated

- Escalated ID:
  `lem-basic-cohen-continuity-forces-the-maximal-ideal-to-be-prime`.
- Promised claim: the supported-definable maximal proper ideal from checkpoint
  3 is a prime ideal of the full Boolean algebra in the basic Cohen model.
- Exact unresolved proof use: Repický p.545 first obtains that `I` decides
  Boolean elements individually definable from `A,f,h`, then calls `I`
  maximal among all proper ideals definable from `A,f,h`. A definable proper
  extension `J` only makes `J minus I` a nonempty definable set; it does not
  supply an element of that difference definable from the same parameters.
  The paper immediately uses the unsupported maximality to declare two
  generated ideals equal to `B` and obtain the finite meet witnesses.
- Corroboration and qualification: the Mathematics StackExchange thread
  identifies exactly this inference. Its answer restates the minimal-support
  argument, but the questioner's follow-up correctly points out that the
  generated-ideal maximality use remains; the thread therefore supplies no
  authoritative proof. Ransom's 2025 arXiv paper calls Repický's argument
  efficient but gives a different forcing/orbit proof; that endorsement does
  not repair the displayed inference.
- Repair attempted: the full orbit over every coordinate of a nonprime witness
  is definable from the original support, so checkpoint 3 would make its two
  generated ideals improper. For arity greater than one, however, turning the
  resulting finite clopen-supported witness patterns into a two-colour
  contradiction needs a finite partite pattern-amalgamation theorem, not just
  the elementary finite product Ramsey rectangle lemma. Continuity preserves
  a fixed equality/cell pattern, whereas an arbitrary monochromatic rectangle
  need not realize those prescribed cells. I found no completed earlier
  supplier and did not substitute the later Halpern--Läuchli result forbidden
  by this page's dependency boundary.
- Examined dependencies:
  `cor-basic-cohen-model-finite-set-continuity`,
  `lem-ordinal-definable-maximal-proper-ideal-in-the-basic-cohen-model`, and
  `def-boolean-ideals-filters-and-primality`.
- Decision recorded: `escalate`. No item body or proof contract was created,
  and no confidence-1 completion is claimed.
- Owner remedies: (1) add and prove a choice-free finite partite
  clopen-pattern amplification before item 4, with enough detail to cover
  arbitrary support arity and equality patterns; or (2) reopen the page's
  dependency boundary and replace this spine with a completely verified
  Halpern--Lévy or modern forcing/orbit proof. The owner must resolve the
  escalation before this item can be accepted.
- Next action: checkpoint and escalate each consumer in prerequisite order;
  none can be authored honestly while its load-bearing supplier remains open.

## Checkpoint 5 — semantic model theorem escalated

- Escalated ID: `thm-basic-cohen-model-satisfies-bpi-and-fails-choice`.
- Exact status by conjunct: the published symmetric-model theorem supplies a
  transitive ZF model, and the published Cohen-set argument supplies failure
  of AC. The BPI conjunct depends directly on checkpoint 4 and is therefore
  unproved in this dispatch.
- Additional presentation gap: `def-basic-cohen-symmetric-system` names the
  hereditarily symmetric model `N`, whereas checkpoints 1--3 follow Repický's
  parameter-HOD notation and require a finite tuple `f` for an arbitrary
  Boolean algebra. No declared supplier identifies these presentations or
  proves the finite-parameter representation for every `B` in `N`.
- Examined dependencies:
  `lem-basic-cohen-continuity-forces-the-maximal-ideal-to-be-prime`,
  `def-boolean-prime-ideal-principle`,
  `thm-hereditarily-symmetric-interpretations-form-a-zf-model`,
  `cor-basic-cohen-model-fails-well-orderability-and-choice`, and
  `def-axiom-of-choice`.
- Decision recorded: `escalate`; no theorem body or proof contract was
  created.
- Owner remedy: resolve checkpoint 4 and add a precise finite-support versus
  parameter-HOD presentation lemma before this theorem. Its statement must
  specify whether ground-model parameters are allowed; Repický's continuity
  lemma explicitly permits them.
- Next action: examine the formal relative-consistency endpoint, including
  whether its finite-fragment supplier actually covers the new BPI proof.

## Checkpoint 6 — relative-consistency corollary escalated

- Escalated ID: `cor-relative-consistency-of-bpi-without-choice-over-zf`.
- Exact claim retained: `Con(ZF)` implies
  `Con(ZF + BPI + not-AC)`, and hence BPI does not imply AC over ZF. No
  countable-transitive-model hypothesis may replace this formal implication.
- Dependency audit: `thm-formal-consistency-of-zfc-plus-gch-from-zf` provides
  the source-theory consistency reduction.
  `lem-basic-cohen-symmetric-construction-is-uniformly-formalizable` proves
  fixed-fragment model existence only for fragments of `ZF + not-AC`; its
  statement and proof do not include the BPI sentence or a formalized
  prime-ideal construction. The missing BPI verification cannot be inferred
  from that lemma, and checkpoint 5 is independently escalated.
- Examined dependencies:
  `thm-basic-cohen-model-satisfies-bpi-and-fails-choice`,
  `lem-basic-cohen-symmetric-construction-is-uniformly-formalizable`, and
  `thm-formal-consistency-of-zfc-plus-gch-from-zf`.
- Decision recorded: `escalate`; no corollary body or proof contract was
  created.
- Owner remedy: after checkpoints 4--5 are repaired, prove that their actual
  finite forcing/symmetry derivation of the single BPI sentence can be added
  to every required fixed target fragment, then perform the formal compactness
  or proof-reduction step. Do not cite semantic model existence alone.
- Next action: audit the B-page Boolean expansion as a potentially independent
  conditional finite calculation.

## Checkpoint B1 — finite Boolean expansion authored

- Completed ID: `ex-continuity-contradiction-for-a-supported-boolean-algebra`.
- Exact repaired claim: for finite `y`, if every truth-assignment atom in the
  elements `d(a)` belongs to a proper ideal `I`, their Boolean expansion puts
  `1` in `I`. The example separately prints Repický's two unary clopen-pattern
  hypotheses and proves that they imply every atom membership. It explicitly
  does not assert that checkpoint 4 has constructed those hypotheses.
- Calculation: induction on `y` partitions subsets after adjoining one element
  and derives
  `1 = join_{z subseteq y}((meet_{a in z} d(a)) meet
  (meet_{a in y minus z} not d(a)))`. If `z` meets every top cell, downward
  closure uses its positive meet; if it misses a top cell, its complement meets
  every refinement and downward closure uses the negative meet. Finite join
  closure contradicts propriety.
- Source locator: Repický, final displayed calculation and cases (i)--(ii),
  printed pp.545--546.
- Examined dependencies: `def-boolean-algebra-for-stone-duality` and
  `def-boolean-ideals-filters-and-primality`. The unproved primality lemma was
  removed as a prerequisite because this item now assumes the finite pattern
  it calculates from.
- Checks: explicit-path precheck passed; explicit-path rendercheck passed with
  all math parsed; strict item-selected proof-contract check passed with 0
  errors and 0 warnings. Empty `y`, singleton `y`, trivial algebra,
  `z=empty`, `z=y`, and finite-choice cases are dispositioned.
- Decision recorded: `repaired`, confidence 1.
- Next action: audit `fs-bpi-is-ac`; its refutation depends on the escalated
  formal relative-consistency corollary and cannot silently consume the older
  published Recorded remark.

## Checkpoint B2 — false statement escalated

- Escalated ID: `fs-bpi-is-ac`.
- Exact claim retained: the sentence “BPI is equivalent to AC” is false only
  under the explicit metatheoretic hypothesis `Con(ZF)` used to establish a
  model of `ZF + BPI + not-AC`. The unconditional direction `AC => BPI`
  remains true.
- Dependency audit: `thm-choice-implies-boolean-prime-ideal-principle` proves
  the positive direction and has now been added to the manifest;
  `thm-bpi-equivalent-to-set-ultrafilter-lemma` fixes the BPI/UFL convention.
  Neither proves failure of `BPI => AC`. That failure requires checkpoint 6,
  which is escalated.
- Prohibited shortcut: published `rem-halpern-levy-bpi-not-ac` has
  `proved_here: false` and says explicitly that its difficult half is not
  developed there. It is a Recorded result and was not consumed as proof.
- Examined dependencies:
  `cor-relative-consistency-of-bpi-without-choice-over-zf`,
  `def-axiom-of-choice`, `thm-bpi-equivalent-to-set-ultrafilter-lemma`, and
  `thm-choice-implies-boolean-prime-ideal-principle`.
- Decision recorded: `escalate`; no false-statement body or proof contract was
  created.
- Owner remedy: close checkpoint 6, then author this refutation with
  `Con(ZF)` propagated through the nonimplication and without replacing it by
  a countable-transitive-model assumption.

## Source locators retained for owner repair

- Miroslav Repický, *A proof of the independence of the Axiom of Choice from
  the Boolean Prime Ideal Theorem*, complete journal pp.543--546,
  `https://im.saske.sk/~repicky/-r30.pdf`. The disputed inference and the two
  generated ideals are on p.545; the clopen refinements and Boolean expansion
  continue through p.546. The inspected file has SHA-256 prefix
  `e9fa0c8091b657a5`.
- Thomas Jech, *The Axiom of Choice*,
  `https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf`, Theorem 7.1 and
  its complete surrounding passage at printed pp.97--98. The passage states
  the basic-Cohen result, explicitly omits its proof, and then turns to the
  Mostowski permutation model.
- Brian Ransom, *On BPI in Symmetric Extensions Part 1*, arXiv:2511.21684,
  `https://arxiv.org/abs/2511.21684`. The abstract and Introduction pp.1--4,
  together with the full generalized-Cohen development, were read. The paper
  describes Repický's proof as efficient but develops the filter-extension,
  Harrington, and virtual-Ramsey machinery instead; it is an alternate repair
  route, not evidence for the disputed sentence.
- Mathematics StackExchange question 4861586,
  `https://math.stackexchange.com/questions/4861586/bpi-in-cohen-model`.
  This is the exact public objection and discussion, used only as
  corroboration.

## Published-item and consumer findings for serial reconciliation

No mathematical defect was confirmed in a published supplier during this
dispatch. The following exact publication-boundary and impact findings must
nevertheless remain visible to the serial reconciler; I did not edit
`research/published-consumer-supplier-ledger.md`.

| Classification | Exact published target | Evidence and confidence | Required supplier / repair |
|---|---|---|---|
| Confirmed proof-boundary debt; statement not refuted | `rem-choice-strength-of-hahn-banach` | It directly declares `rem-halpern-levy-bpi-not-ac`, a Recorded item with `proved_here: false`, as a dependency and uses the basic-Cohen countermodel to justify strict weakness from AC. Confidence 1 that the dependency is not a proof-bearing Foundations replacement; no claim that the mathematical comparison is false. | After publication, replace that dependency and matching body link with `cor-relative-consistency-of-bpi-without-choice-over-zf`, exactly as the existing Phase-3 mapping prescribes. That supplier is currently escalated. |
| Downstream impact-review candidate, not a confirmed defect | `rem-hahn-banach-open-choice-questions` | It depends on `rem-choice-strength-of-hahn-banach` and repeats no BPI proof itself. Confidence high. | Recheck after the direct consumer is cut over; no independent repair is presently indicated. |
| Recorded boundary is explicit; no new defect | `rem-halpern-levy-bpi-not-ac` | Its frontmatter says `proved_here: false`, and its Remarks say that neither the symmetric model nor Halpern--Läuchli is developed there. Confidence 1 that it cannot supply B2 or an A-page proof under the Foundations bootstrapping rule. | Keep it Recorded until the new semantic and formal-consistency suppliers are published; do not cite it as proof. |
| Supplier-interface gap, not a defect in the published definition | `def-basic-cohen-symmetric-system` | It defines the hereditarily symmetric model `N=HS_F^G`; it does not identify `N` with Repický's parameter-HOD presentation or give the finite-parameter representation used for arbitrary `B`. Confidence 1 about the missing interface. | Add a proof before item 5, for example a locally owned `lem-basic-cohen-hs-and-parameter-hod-presentations-agree`, with exact ground-parameter conventions. |
| Supplier-interface gap, not a defect in the published lemma's stated range | `lem-basic-cohen-symmetric-construction-is-uniformly-formalizable` | Its Statement covers externally fixed finite fragments of `ZF + not-AC`; no step formalizes BPI or the prime-ideal construction. Confidence 1 that it does not supply item 6 as currently stated. | After items 4--5 are repaired, add a local finite-formalization lemma for their actual BPI derivation, then use the published source-model consistency transfer. |

The binding design and prior shared prose also need Step-4 serial amendments,
not concurrent edits here. Section 7.9 says pp.545--546 simply prove primality
and records no full-text blocker; the Step-3a report says all load-bearing
stages are accounted for and the finite-fragment machinery suffices. Those
sentences must be qualified by checkpoints 4--6. The batch-7 construction note
must likewise cease treating the direct Repický route as fully closed. Jech's
locator must remain printed pp.97--98 with the explicit statement-only
qualification already placed in the owned manifest and coverage row.

## Cross-batch dependencies

The batch-7 consumer input remains exactly `[]`; no other pair's row was
deleted or edited. After the manifest repairs I ran
`frontier-dependency-ledger refresh`. Batch 8's current input and the unified
ledger correctly leave these dependent items open:

- `thm-halpern-lauchli-and-the-basic-cohen-bpi-model`, on the escalated
  primality and semantic-model suppliers;
- `cor-relative-consistency-of-halpern-lauchli-bpi-without-choice`, on the
  escalated formal relative-consistency supplier;
- `thm-strict-relative-placement-of-bpi-over-zf`, on that same supplier; and
- `fs-bpi-well-orders-every-set`, on the escalated semantic and formal
  suppliers.

The three completed A-page suppliers remain unpublished and those edges are
therefore still recorded as open as well. Batch 8's owner has already recorded
the exact escalation evidence in its consumer input; completion must be
rechecked rather than inferred from this report.

## Axiom audit

The four authored items are choice-free. In particular, item 1 was tightened
from Repický's ambient `V models ZFC` convention to the `V models ZF` actually
used by the finite forcing argument; a given generic is a hypothesis, not a
choice construction. Items 2, 3, and B1 use only finite operations, definable
least codes, Replacement, and deterministic recursion. No authored item
declares `def-axiom-of-choice`.

The unauthored semantic theorem targets a model of `not-AC`, while its ambient
source-model construction may use ZFC. B2 retains
`thm-choice-implies-boolean-prime-ideal-principle` and
`def-axiom-of-choice` for the positive `AC implies BPI` direction. The exact
ambient use and its propagation through item 6 cannot be certified until the
missing finite BPI formalization is written; this is part of checkpoint 6, not
an implicit use accepted here.

## Decision currentness and final handoff

Completed with current confidence-1 `repaired` receipts:

- `lem-basic-cohen-model-schema-of-continuity`;
- `cor-basic-cohen-model-finite-set-continuity`;
- `lem-ordinal-definable-maximal-proper-ideal-in-the-basic-cohen-model`; and
- `ex-continuity-contradiction-for-a-supported-boolean-algebra`.

Owner-held and incomplete:

- `lem-basic-cohen-continuity-forces-the-maximal-ideal-to-be-prime`;
- `thm-basic-cohen-model-satisfies-bpi-and-fails-choice`;
- `cor-relative-consistency-of-bpi-without-choice-over-zf`; and
- `fs-bpi-is-ac`.

Escalation receipts were recorded for all four before the final choice-free
item-1 and exact-code item-3 repairs. Those real input changes invalidate the
transitive receipt hashes. The final Step-3 decision check now reports
`changed inputs require a current owner decision` for precisely these four
owned incomplete items. Because an escalation is owner-held, I did not
overwrite it. The mathematical evidence and remedies in checkpoints 4--B2
remain current; the owner must record the current hold or reopen decision.

No new item ID was minted. The completed local suppliers are repairs of the
assigned existing inventory. The A and B page files were not written: four of
their eight promised items lack proof bodies and contracts, so a page claiming
the full theorem would be misleading.

Final checks actually run:

- explicit-path precheck: 4/4 authored proof items passed;
- explicit-path renderer/YAML/KaTeX check: 4/4 passed;
- strict batch proof contracts: 4/4 passed, 0 errors, 0 warnings;
- batch-7 manifest dependencies: 42 items, 0 errors;
- batch-7 coverage: 2 A-page entries, 34 harvested results, 0 errors,
  0 warnings;
- `validate-plan research/plan-spec.json`: exit 0, acyclic and consistent;
- normal batch-7 content policy: expected nonzero, exactly 38 missing-file
  errors and 0 warnings--the four owner-held items above plus all 34 untouched
  sibling-pair items; and
- frontier dependency ledger refresh: completed and deduplicated.

The pre-splice plan still contains empty item arrays for these A/B shells,
whereas the batch manifest contains the preserved eight-item inventory. Step 4
must splice the repaired statements, provenance, strategies, and dependencies;
in particular item 3 no longer declares the inapplicable ordinary-HOD theorem,
B1 no longer declares the unproved primality lemma, and B2 now declares the
published `AC implies BPI` supplier. This expected staging mismatch must not be
used to hide the four mathematical blockers above.
