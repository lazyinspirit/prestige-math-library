# UC-73 Astra agent 4 receipts

Scope: assigned items inspected sequentially, with direct load-bearing contracts
and relevant proof interfaces. These are local owner-delegated audits, not
independent judges or whole-closure certification. No AC use is implicit in
the finite or effective constructions below. Shared ledger/plan changes belong
to the parent. Date: 2026-09-08.

## 1. def-number-sat — A-R

Read the complete definition and draft `def-boolean-formula-cnf-and-sat`.
The counting convention (including unused declared variables and malformed
inputs) is sound, but its only supplier is draft. Closed locally by spelling
out finite Boolean syntax, truth evaluation and effective encoding; removed
the draft edge. No AC needed. Planned replacement, if desired for later
harmonisation, is `def-boolean-formulas-cnf-and-satisfiability-interface` on
`sat-tableaux-and-quantified-space-completeness` (620.2); no longer needed to
close this definition. Familiar elementary definition; no uncertain theorem
or external source reading required. Changed `items/def-number-sat.md`,
replaced old verification with truthful local scope. Targeted precheck exited
0 (definition: 0 proof items checked); rendercheck passed one file with real
KaTeX and YAML. No downstream contract change or unresolved limitation beyond
the stated local audit scope.

## 2. def-oracle-ce-completeness — A-R (revisited after item 4)

Full item and both direct definitions read. Natural-number total oracle maps
are the appropriate convention here; the invalid-string-output issue reported
for arithmetical completeness does not occur in this displayed contract.
Nevertheless the ordinary many-one supplier is draft, and relative
computability has draft dependencies. The ordinary reduction is redundant
mathematically but removing it alone leaves the latter unresolved interface.
Phase-3 strategy: define explicitly a total map from naturals to naturals,
implemented by a halting oracle program, and retain the displayed biconditional.
Map `def-computable-many-one-reduction` to
`def-computable-many-one-reducibility-interface`, and the relative-computability
interface to `def-oracle-turing-reducibility-interface` and
`def-acceptable-numbering-with-universal-evaluation`, all on A612.2
`effective-numberings-reductions-resources-and-randomness` (planned, unpublished;
inventory in prose §53.1). No AC. No source uncertainty for this definition.
No item edit/check performed; local closure will be reconsidered after the
assigned relative-computability item is examined in sequence.

Revisit completed after item 4's local closure: removed the redundant ordinary
many-one draft edge and explicitly typed oracle, sets, and total function on
the naturals. The sole remaining prerequisite is now locally repaired
`def-relative-computability-and-enumerability`. Thus the provisional Phase-3
blocker above is discharged, without changing the mathematical convention.
Changed assigned item and local verification; targeted precheck exit 0
(definition, 0 proof items), rendercheck passed. No pending supplier remains
for this definition; no independent review claimed.

## 3. def-read-only-input-workspace-classes — A-R

Read full item, `def-asymptotic-resource-comparison` (draft), and published
`def-multitape-and-nondeterministic-machines`. The bounded endmarked input and
charged work-tape model, output constructibility, and logarithmic guard are
coherent. The only unpublished direct edge was the elementary big-O
definition. Supplied its quantified definition locally and specified natural
number resource bounds; removed that edge. Planned
`def-uniform-asymptotic-time-space-comparison` on A612.2 is no longer needed
for this contract. No AC. Familiar finite-machine definitions; no unresolved
mathematics or web reading needed. Changed only assigned item plus this
receipt; truthful local verification. Targeted precheck exited 0 (0 proof
items), rendercheck passed. No proof of the downstream hierarchy was audited
or certified by this definition repair.

## 4. def-relative-computability-and-enumerability — A-R

Full item, both draft suppliers, and published ordinary machine,
configuration and one-step contracts read. No acceptable numbering is used
to define oracle recognition. Closed locally by supplying explicit numeral,
query, initial-run, decision, recognition and total-function semantics over
the published `def-one-step-configuration-relation`. Removed both draft
edges and the body link. No AC or universal-numbering existence theorem used.
The replacement A612.2 oracle and acceptable-numbering interfaces are no
longer prerequisites of this elementary definition. Changed assigned item
and receipt; scoped local verification. Targeted precheck exit 0 (0 proof
items), rendercheck pass. Scope is the definition and direct machine interface,
not certification of all consumers or their index-numbering arguments.

## 5. lem-bounded-quantifiers-preserve-primitive-recursiveness — A-R

Read full proof, draft primitive-recursion definition, and agent 3's completed
local repair of `def-bounded-arithmetic-formula`. Its complete initial-function,
composition and recursion contract now suffices. Removed the redundant draft
edge and expanded the proof to explicit addition, multiplication, sign,
bounded sum/product recurrences and characteristic functions, including zero
bounds. No AC. Familiar elementary recursion argument; no uncertain external
result used. Planned replacement
`def-primitive-recursive-functions-by-initial-functions-and-schemes` on A612.2
is no longer needed for this proof. Changed assigned lemma with local scoped
verification. Initial precheck required phase renumbering; adopted canonical
1.1/2.1/3.1 and re-ran: one proof passed. Final rendercheck passed. Dependency
contract read after agent 3's repair; no whole closure certification.

## 6. lem-cook-levin-can-be-made-parsimonious — A-P

Full item and all five direct contracts read; also the draft local-window
legality proof. The desired parsimonious theorem is valid in the stated
tagged-choice convention; unused-variable inflation is already prevented.
However L1--L3 are unpublished, and step 1.1 additionally uses an undeclared
path-preserving multitape-to-one-tape simulation. Mere decision-equivalence
would not justify counting paths. A complete local replacement would require
rebuilding the tableau and simulator arguments, not just deleting citations;
retain for Phase 3 with explicit bijection proof.

Exact replacements on A620.2 `sat-tableaux-and-quantified-space-completeness`:
`def-bounded-turing-computation-tableau-interface`,
`lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations`, and
`lem-tableau-to-cnf-map-has-polynomial-size-and-time`. They are planned and
unpublished (canonical plan row currently `items: []`; binding inventory is
prose §53.1, not absent scope). The standard simulation can be avoided by
using an explicitly encoded deterministic verifier of tagged path strings,
rejecting noncanonical padding after halting, then a unique-extension tableau
formula. If retained, supply its deterministic sweeps and choice-tag invariant
locally and declare the adequate published simulator after its repair.
The new correctness contract must establish assignment/tableau uniqueness,
not only existential satisfiability; if auxiliary gates are introduced,
enforce equivalences and prove unique extension.

Read accessible authoritative full-text Arora--Barak January 2007 draft
`https://theory.cs.princeton.edu/complexity/book.pdf`, §2.3.4 proof of Lemma
2.12, §§2.3.5--6 and Exercise 2.11 (deterministic verification and parsimonious
encoding); Fortnow `https://lance.fortnow.com/papers/files/counting.pdf`,
§§2--3 for path-count convention. No AC. No item edits or repair checks;
the existing proof remains pending and no new prerequisite pair is needed.

## 7. lem-halting-oracle-is-not-computably-dominated — A-R

Read complete item, domination definition, jump definition, draft recursion
theorem and self-reference lemma, and published jump-strictness proof. Found
a substantive proof defect beyond draft status: extensional recursion-theorem
equality does not transfer the dummy-step running time to the fixed-point
index. Its closing sentence also misstated the quantifier pattern (although
the intended fixed function would have sufficed).

Closed locally by retaining the halting-time function and observing that any
computable bound would decide the diagonal halting set by bounded simulation.
Use the already-published earlier-on-the-same-page
`thm-every-oracle-is-strictly-below-its-jump`; its diagonal noncomputability
argument was read and is adequate without acceptable-numbering self-reference.
Removed `thm-kleenes-second-recursion-theorem`; its A612.2 replacement
`thm-kleene-fixed-point-theorem-for-program-indices` is no longer needed here.
No AC. Familiar diagonal halting argument, fully supplied; no unresolved
mathematics or external source required. Changed assigned item with local
verification; targeted precheck one proof passed and rendercheck passed.
Consumers using non-domination retain the same theorem contract; no whole
closure or independent review claimed.

## 8. lem-hashing-commits-public-randomness — A-R

Read full item, draft hash definition, published public-coin definition and its
IP interface, and published finite expectation/variance definitions. The
elementary second-moment proof is sound; no Goldwasser--Sipser simulation
theorem is asserted here. Closed the draft edge by explicitly stating finite
domain/range/family and the joint law in the hypothesis. Expanded finite-sum
covariance/variance calculations and declared the earlier published expectation
and variance definitions. The challenge is defined directly with every random
bit revealed; no IP-class theorem is needed, so removed that unrelated
dependency chain as well. This retains the entire quantitative and public
challenge claim. The optimal strategy chooses a preimage in finitely many
finite cases; no AC is used. No construction/existence of a hash family is
assumed or proved. A612.2 `def-pairwise-independent-hash-family-interface` is
therefore no longer required for this conditional lemma. Familiar finite-sum
argument; no source uncertainty. Item changed with local metadata, precheck
one proof passed, rendercheck passed. Parent should add the earlier finite
probability A-page to the consumer page's requires if not already in closure;
exact new deps are `def-expectation-on-a-finite-probability-space` and
`def-variance-and-covariance`. This is not a repair of the public/private-coin
equivalence consumer.

## 9. lem-polynomial-space-oracle-absorption — A-P

Read full item and all three direct supplier contracts, including the draft
TQBF completeness proof. The two containment arguments are mathematically
sound conditional on TQBF membership and hardness: exhaustive branch replay
has polynomial workspace, queried words are clock-bounded, query workspaces
are reused, and the reverse inclusion uses one many-one query. No AC.
Confirmed publication prerequisite defect: both PSPACE definition and TQBF
completeness are draft. The F1/F2 copied prose also contains meaningless
`stated convention` placeholders and should be rewritten as concise references.
Exact Phase-2 suppliers are
`def-polynomial-space-and-nondeterministic-polynomial-space` and
`thm-tqbf-pspace-completeness-interface`, on A620.2
`sat-tableaux-and-quantified-space-completeness`, planned/unpublished with
binding §53.1 inventory and empty current plan item array. The charged-query
and clock conventions in published `def-relativized-complexity-class` are
adequate for the arguments at issue. Local closure of the second containment
would require a full TQBF-hardness proof; retain for Phase 3 rather than
silently weaken the theorem. Repair strategy is exact edge cutover, short
facts, and explicit branch-counter/query-size accounting. Familiar standard
oracle simulation; no unresolved mathematical uncertainty or new supplier
pair. No item edits or validation claimed.

## 10. lem-protocol-value-is-computable-in-polynomial-space — A-R

Read full lemma, game-tree definition, deterministic-optimum proof, and the
now-repaired transcript and resource-class contracts from agent 3. Checked
hidden-history semantics carefully: at prover nodes one response serves all
compatible tapes, verifier children partition tapes, and termination markers
with dummy rounds give a fixed finite depth. Integer numerators never exceed
$2^r$, so polynomial depth-first stack space suffices, including threshold
integer inputs. No AC: each finite maximum is achieved and combined in a
finite tree. Added the PSPACE union definition locally and replaced the draft
PSPACE supplier with published `def-dtime-ntime-dspace-and-nspace`. Repaired
actual tab-corrupted `tau`/`text` commands, missing sum/max/inequality slashes,
and charged input cells explicitly. No stronger Phase-2 theorem is required;
planned A620.2 PSPACE interface becomes optional harmonisation.

Goldreich source `https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf`
was indexed successfully; §11.3.1 Claim 11.3.1 identified, but detailed opens,
screenshots, and direct download failed (timeout/reset). This is not recorded
as successful full-text reading. The local finite counting/induction proof
above was checked directly and resolves the mathematics without relying on
that inaccessible passage. No unfamiliar theorem was imported. Item changed
with truthful local scope; targeted precheck one proof passed, rendercheck
passed. No independent review or full consumer closure claimed.

## 11. lem-sequential-repetition-amplifies-error — A-R

Read full lemma, draft one-sided iid Chernoff supplier, and published
completeness/soundness and finite-total-probability contracts. Original
adaptive conditional-mgf idea was correct but its final tail calculation was
omitted; the iid supplier alone does not establish the adaptive bound.
Closed locally with a complete finite-sum generating-function proof using
$p\in(\max\{s,1-c,0\},1/2)$ and $t=1/(2p)$, giving error at most
$q^k$ with $q=1-2(1/2-p)^2<1$. An elementary binomial induction supplies
the required fixed odd repetition count, without logarithms or imported tail
theorems. Explicitly reset the verifier and restart the honest strategy;
condition on full previous-copy histories for cheating soundness. No AC.
Added published expectation and finite-total-probability deps; removed draft
Chernoff. Its A612.2 replacement
`lem-chernoff-bound-for-independent-bernoulli-trials` is no longer required
for this statement. This complete local argument uses familiar finite
probability algebra; no uncertain external result imported. Changed assigned
item with scoped metadata; precheck one proof passed and rendercheck passed.
Parent should ensure finite-probability A-page is in interactive-proof page
requires. Scope is fixed target error (as statement/proof specify); no claim
about arbitrary noncomputable input-dependent error schedules.

## 12. lem-space-bounded-universal-simulation — A-R; consumers reopened

Read full lemma, clocked-simulator contract, draft constructibility definition,
repaired resource-class contract and explicit machine coding. Confirmed the
proof's uniformity defect: a simulated variable-alphabet symbol costs
$\lceil\log_2(|\Gamma_M|+1)\rceil$ bits on a fixed simulator. Full-text
Arora--Barak §1.2.2 Claims 1.8--1.9 at
`https://theory.cs.princeton.edu/complexity/book.pdf` explicitly describes
symbol blocks and head-marker sweeps; source section was read completely.

Repaired with an explicit uniform $O(n+Sb)$ bound, fixed-machine
$O_M(n+S)$ and fixed-alphabet uniform $O(n+S)$ consequences, and the complete
encoded-workspace cap interface needed by hierarchy proofs. Expanded the
multitape representation, update-marker, scratch, and cap accounting. Removed
unused constructibility and efficient-clock deps, using published explicit
encoding and resource definitions directly. No AC. A612.2
`def-machine-time-and-space-constructibility` is not needed for this
unclocked simulator lemma. This explicitly corrects the overstrong original
uniform contract; it does not claim the original arbitrary-alphabet bound.
Direct consumers `lem-space-diagonal-machine-halts` and
`thm-deterministic-space-hierarchy` need their old uniform-use clauses repaired
(confirmed impact, coordinated with agent 5); cap the fixed simulator's full
encoded workspace, not raw cells of variable-alphabet adversaries.
Changed assigned item and local metadata; precheck one proof passed,
rendercheck passed. No Phase-2 supplier remains for this repaired interface.

## 13. lem-space-diagonal-machine-halts — A-R

Read full item, draft configuration-count lemma and draft constructibility
contract, and the just-repaired fixed-simulator interface. Original proof did
not specify whether its configuration-count constant belonged to a fixed
simulator or the variable decoded adversary; the latter is not uniform.
Closed locally by defining constructibility in the contract, counting states
of the fixed capped simulator, and clocking its actual transitions (including
scans/scratch), with an explicit $q(K+1)^k a^{k(K+1)}<2^{dK}$ bound.
Explained why any halting capped run halts before timeout and why the separate
counter does not enter the configuration count. Constructor, input, cap and
counter together use $O(s)$ because $n=O(s)$. No AC. Removed both draft
suppliers: A620.2 `lem-space-bounded-machine-configuration-count` and A612.2
`def-machine-time-and-space-constructibility` are no longer needed for this
local proof. The fixed-simulator counting argument is fully supplied and
familiar; no uncertain theorem imported. Changed assigned item with local
metadata; precheck one proof passed, rendercheck passed. The hierarchy
consumer must use this encoded cap (agent 5 notified), not its old raw-cell
or variable-description constant claims.

## 14. lem-time-diagonal-language-respects-its-budget — A-P

Read full item, effective clocked enumeration, clocked simulator definition,
and constructibility/resource contracts. The fixed-interpreter outer timer
correctly avoids a second universal-simulation slowdown and covers malformed
codes/large multipliers. Its amortized least-significant-bit countdown is
linear; for each fixed pair the claimed small-o conclusion follows if the
fast simulator interface is proved. However step 4.1 uses an unproved
$O(b\log b)$ existence claim packaged in a definition, not just a missing
constructibility definition. Parent/agent 3 confirmed the gap and commissioned
`thm-clocked-universal-simulation-with-time-and-space-bounds` in existing
A612.2 `effective-numberings-reductions-resources-and-randomness` (planned,
unpublished). This is an exact necessary supplier in addition to
`def-machine-time-and-space-constructibility` on the same A page. Existing
`thm-universal-simulation-with-logarithmic-overhead` is draft and its
reblocking assertion does not supply the missing full construction.

Local closure would require the complete efficient multitape buffer simulation;
do not infer it from ordinary universality or the space-only lemma repaired
above. Phase-3 strategy: retain the sound fixed-R outer timer, use the new
theorem's time clause (separate from its potentially different space
simulator), and explicitly charge constructing/reading the clock and padded
input. Inspect the new theorem's exact fixed-M constants and supplied-clock
boundary before cutting over. No AC. No edits/checks on this item. Source
mathematics is the Hennie--Stearns argument already assigned to the supplier;
this receipt certifies only the conditional consumer reasoning, not that
unavailable supplier proof. Scope amendment is already parent-owned and
recorded, not a new unreported prerequisite.

## 15. lem-universal-martin-lof-test-exists — A-P

Read full lemma, test and effectively-open definitions, draft acceptable
numbering, and the accessible full proof of Simpson Theorem 8.4.8, printed
pp.113--114, `https://sgslogic.net/t20/notes/cur.pdf` (PDF pages 112--113).
The trimming and shifted-union construction is valid; exact rational measure
of a finite cylinder union is decidable by deleting prefix extensions and
summing disjoint cylinder weights. Rejecting an oversize cylinder permanently
does not harm any genuine test because none of its finite subunions exceeds
its final component mass. The main unpublished prerequisite is uniform
enumeration of all candidate c.e. relations: replace
`def-universal-and-acceptable-numbering` by
`def-acceptable-numbering-with-universal-evaluation` on A612.2
`effective-numberings-reductions-resources-and-randomness`, planned/unpublished.
Make the dovetailing over program inputs explicit; acceptability/s-m-n is
stronger than what enumeration itself requires, but an adequate proved
universal evaluation interface is needed for that proof route.

Also found body-only measure prerequisites: continuity from below at trimming
limits and countable subadditivity for the shifted union. Exact available
published suppliers are `thm-continuity-from-below-for-measures` and
`thm-finite-and-countable-subadditivity-of-measures`. The effectively-open
definition gives cylinder masses without constructing the ambient fair-coin
measure. A repair can explicitly specialise published
`thm-countable-product-of-probability-spaces` (home A288.101
`infinite-product-measures-and-kolmogorov-extension`) to two-point fair laws.
That general supplier assumes countable/dependent choice: under the owner's
AC authorization, declare `def-axiom-of-choice` and state the exact use in
the ambient measure construction, propagating it to consumers which take
this route. The effective enumeration/trimming itself uses no AC. A direct
choice-free fair-coin construction is an alternative, but was not silently
assumed completed here. The measure suppliers already exist; no new Phase-2
pair is necessary. Parent should record `def-effectively-open-set-in-cantor-space`
as an impact-review candidate for its measure interface, not automatically
label all its consumers defective.

Phase-3 strategy: explicit universal dovetail, finite prefix-free mass
calculation, continuity from below, subadditivity with geometric weights,
and exact shift $e+1$, with the chosen measure-foundation assumptions stated.
No item edits or local checks claimed. This is a conditional proof audit plus
precise unresolved supplier/definition debt, not a false verdict on the
universal-test theorem.

## 16. prop-ph-containments-and-polynomial-space — A-R

Read complete item and all direct contracts, plus adaptive-transcript proof,
bounded-alternation completeness and first-level identification. The level
containments and fixed-depth PSPACE evaluation are sound. Closed locally by
defining PSPACE as the union of published DSPACE classes, removing its draft
definition and the copied placeholder facts. Replaced the unnecessarily broad
oracle-characterization supplier by exactly the used, earlier published
adaptive-transcript normal form. Its proof packages polynomially many YES/NO
queries into alternating blocks, and was checked with the published block
closure proof. The consumer does not use that other theorem's QBF
completeness clause. Explicitly handled $k=0$, complementing deterministic
oracle deciders, zero-length blocks, and counting input cells. No AC: all
witness combinations here are finite. A620.2
`def-polynomial-space-and-nondeterministic-polynomial-space` is no longer
needed for this proposition. Familiar fixed-level predicate simulation; no
uncertain external theorem imported. Changed assigned item with truthful
metadata; initial precheck requested canonical phase order, adopted it and
rechecked: one proof passed. Final rendercheck passed. No independent or
whole-closure certification.

## Assignment completed

All 16 assigned items audited. Final dispositions: 12 A-R local repairs and
4 A-P (parsimonious Cook--Levin, oracle absorption, time diagonal budget,
universal Martin-Löf test). No sound item was called repaired without an
actual prerequisite or proof/definition change. Shared ledger/plan/page
requires updates remain parent-owned. Necessary new fast-simulator supplier
was already commissioned by parent; the other deferred suppliers are mapped
to existing A612.2/A620.2 scope, with available measure suppliers for ML tests.

Final structural check: global `node tools/depcheck.mjs --quiet` exits 1
with repository-wide existing/in-flight missing-page-item diagnostics and
474 warnings. A captured full-output filter finds no diagnostics naming any
of these 16 assigned items. This is not a global pass. All 12 repaired items
have published direct dependency targets at handoff. Their individual
precheck/rendercheck results above are the actual successful local checks.
