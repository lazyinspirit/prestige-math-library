# Authoring support: arbitrary-limit condensation and formal L interpretation

Date: 2026-09-12. Scope: the reopened batch-11 constructibility chain in
`phase-2-next-17`. This is an isolated mathematical support package, not an
item decision, proof certificate, independent review, or acceptance. No item,
manifest, plan, receipt, or engine state was changed. The actual repair author
must reconcile the proposed formulas with the library's fixed encodings,
author the items, and complete the engine's checks.

Read `CLAUDE.md`, `README.md`, the owner authoring direction, batch-11 manifest
and coverage, group-g author report, and the relevant published suppliers. The
unresolved condensation, L-interpretation, formal-consistency, positive
corollary, and false-statement item files were absent when examined; their
current claims and dependencies were read from the manifest.
The proposed new supplier was likewise absent. This note does not treat the
older scaffold claim of readiness as current evidence.

## 1. Exact mathematical boundaries

The published `thm-constructibility-is-absolute-and-l-is-minimal` explicitly
requires a transitive model of ZF. The published canonical-order theorem
compares its construction in V and L, after proving ZF in L. Neither supplier
asserts the needed comparison with arbitrary limit levels or their collapses.
Their narrower statements are not defects.

The missing supplier should prove its weak-model facts directly, with no
internal Infinity, Replacement, Power Set, full Separation scheme, or choice
assumption on the weak transitive set. Ambient ZF is available throughout.
Finite reflection gives sufficiently good levels above prescribed bounds; it
does not establish a fixed ZF fragment in every limit level.

Recommended conclusions of
`lem-finite-stage-l-history-and-limit-level-absoluteness`:

1. A fixed finite-certificate satisfaction formula is correct in transitive
   sets having its explicitly stated coding closure and certificate existence.
2. Every nonzero limit L-level has that closure and those certificates. Every
   initial hierarchy history belongs to finitely many successor stages above
   its last index. The analogous augmented history for the *published*
   canonical order has the same kind of bound.
3. One explicit finite sentence characterizes the nonzero limit L-levels
   among nonempty transitive sets. Its clauses require these local coding
   operations and histories, not a nameless fragment of ZF.
4. A specified local formula for the canonical order agrees with the
   published order on every nonzero limit level. The required restriction
   includes agreement of *least* codes, not merely order preservation of
   two selected elements.

Do not state that all transitive pairing-closed sets compute satisfaction or
Def correctly. Pairing alone does not supply the sets of assignments and truth
tables used below. Do not require a single full truth relation in L_omega.

## 2. Finite satisfaction certificates

Here is a concrete construction that avoids both a truth predicate for a
proper class and an internal set of all formulas in L_omega.

Use the fixed membership syntax, with negation, conjunction and existential
quantification. A natural number is recognized without an omega parameter:
it is an ordinal n such that every nonzero ordinal at most n is a successor.
In a transitive set this identifies exactly the actual finite ordinals that
belong to the set. The finite syntax tests can be written with finite
computation certificates. Empty Set, Pairing and Union ensure that every
individual hereditarily finite code belongs to a nonempty transitive model
of these axioms; this is an external induction, not internal Infinity.

For a formula code e choose k greater than every variable index occurring in
e, including bound indices, and let E be its finite set of subformula codes.
Encode a length-k assignment as its finite graph
`{<i,a_i>:i<k}`, using Kuratowski ordered pairs. The domain U consists of all
such graphs with values in the supplied nonempty set A. A certificate is a
relation T contained in E times U satisfying the following recursion:

- At equality and membership atoms, use the actual assigned values.
- At negation, membership in T is the complement of membership for the child.
- At conjunction, membership is the conjunction of the two child tests.
- At an existential in variable i, `(e,s)` is in T exactly when some a in A
  makes the child true at the assignment obtained by replacing coordinate i
  of s by a.

All assignments have domain k; unchanged coordinates stay in place. The
definition asserts both that U contains precisely the indicated functions
and that T has precisely its intended domain and obeys every recursion
clause. Set `Sat*(A,e,s)` to mean existence of E,k,U,T with these properties
and with `(e,s)` in T. If an input assignment only supplies the free
variables, existentially extend it to k; independence of unused coordinates
follows from the same induction. For Def of the empty set use the separate
convention `Def(empty)={empty}`, matching the published supplier.

**Soundness in weak transitive sets.** If N is transitive, contains A and the
input codes, and is closed under finite sets and the displayed pairing, every
actual finite assignment into A belongs to N. Thus N cannot mistake a proper
subset of A^k for U: the omitted assignment would itself be quantified over
inside N. E and finite syntax are also correct. For any accepted T, induction
on the actual finite formula tree proves the recursion agrees with external
satisfaction. The existential case quantifies over precisely the same A;
the negation case uses the certificate for the child, not an upward
absoluteness claim. Consequently false certificates cannot be introduced by
passing to N. Completeness additionally needs existence in N of a correct
U,T for every relevant input. State that extra hypothesis explicitly.

**Finite-stage existence.** Suppose eta is infinite and A is in L_eta. Every
natural number and every fixed syntax code belongs to L_eta. If the
components of a Kuratowski pair belong to L_xi, the pair belongs to
L_(xi+2). A finite subset of L_xi belongs to L_(xi+1): name its finitely many
elements as parameters in a disjunction of equalities. It follows that all
flat assignment graphs into A belong to L_(eta+3), independently of k.
The set U is definable over L_(eta+3), with A and k as parameters, and is in
L_(eta+4). Pairs of a subformula and an assignment belong to L_(eta+5).

For *this fixed external e*, form T by one finite disjunction, one clause for
each subformula psi of e: the clause reads the assignment coordinates and
uses the actual finite formula psi with all quantifiers restricted to A.
This defines T over L_(eta+5), so T belongs to L_(eta+6). This existence proof
uses Def with an arbitrarily long but finite formula; it does not use a
uniform truth formula over L_eta. The uniform certificate-checking formula
subsequently recognizes this T. Its truth clauses are absolute once U,T are
present. Finite additional packing of E,k,U,T can be avoided by existentially
quantifying the components separately, or paid for by increasing the finite
offset.

The same construction supplies each decoded subset
`b={x in A: Sat*(A,e,<x,parameters>)}` at a finite successor stage: evaluate
the fixed formula e directly over a level containing A and the parameters,
with its quantifiers restricted to A. There is a uniform finite overhead in
the ambient level parameter, although the defining formula varies with e.

When eta is finite and A is hereditarily finite, E,U,T and every decoded b
are individually hereditarily finite. Their ranks may depend on e and k;
no uniform bound in e is needed to place them in V_omega. Thus every
nonzero limit L_lambda has these certificates and decoded subsets: for
lambda>omega choose an infinite eta<lambda containing the finitely many set
parameters and absorb the fixed finite overhead below lambda; for
lambda=omega use the hereditarily finite argument. This proves the needed
closure without asserting Infinity in L_omega.

This construction concerns truth in the *set* A. Neither Sat*(L_lambda,...)
inside L_lambda nor truth for the proper class L is claimed.

## 3. Weak-model package and hierarchy history bound

Define a finite sentence W containing Empty Set, Pairing, Union, and the
following two uniform assertions using Sat*:

- For every nonempty set A, formula code e and admissible finite assignment,
  the correct assignment domain and a recursion certificate exist.
- For every A, formula code and parameter tuple, its decoded subset of A
  exists; handle A empty by the designated empty definition.

These are single first-order assertions about finite codes, not infinite
lists of axioms. The preceding construction proves every nonzero limit
L_lambda satisfies W. In any transitive N satisfying W, satisfaction and
decoding on a supplied A in N agree with V. In particular if N says that a
supplied B is exactly Def(A), then B is the actual Def(A): completeness of
decoding supplies all the external definable subsets, while certificate
soundness excludes false ones. Do not infer that N contains Def(A) for every
A from W alone; existence of that collection is required only where a
history supplies it.

Let Hist(h,gamma) say that h is a function on gamma+1, starts at empty, uses
the displayed Def predicate at successors, and uses union of earlier values
at nonzero limits. Express the limit clause directly by bounded membership
in earlier values. Transitive weak models satisfying W evaluate any supplied
history correctly by external ordinal induction. No recursion theorem
*inside* such a model is needed. Its existence will be a separate clause.

Write `H_gamma={<delta,L_delta>:delta<=gamma}`. A concrete generous target
bound with Kuratowski pairs is

`H_gamma in L_(gamma+8)`.

The essential proof is a simultaneous induction using the already established
W for every limit level. The offset is for the hierarchy graph, not a
uniform bound on all syntax codes at finite stages.

- Zero is a directly checked hereditarily finite graph.
- At a successor gamma=delta+1, H_delta is in L_(delta+8) by induction.
  The new value L_(delta+1) and the index delta+1 are in L_(delta+2), so
  their ordered pair is in L_(delta+4). Define H_gamma over
  L_(delta+8) by membership in H_delta or equality to that new pair.
  It belongs to L_(delta+9)=L_(gamma+8).
- At a nonzero limit lambda, reconstruct the *strict* prefix over L_lambda
  as the pairs `<delta,y>` for which delta is an ordinal and there is an h
  satisfying Hist(h,delta) whose terminal value is y. Every actual H_delta
  is in L_lambda because delta+8<lambda. Conversely W and history
  soundness show that every witness has terminal value L_delta. All these
  ordered pairs lie in L_lambda. Hence the strict prefix belongs to
  L_(lambda+1). Now append `<lambda,L_lambda>`: both components belong to
  L_(lambda+1), their pair is in L_(lambda+3), and the resulting graph is
  definable over L_(lambda+3). Thus H_lambda is in L_(lambda+4), which is
  more than enough for the displayed bound.

In the limit reconstruction the quantifier over h ranges over L_lambda;
correctness follows from W, whose proof did not use hierarchy histories.
This order of proof removes a potential circularity.

The finite characterization sentence C is W together with:

1. Every ordinal has its ordinal successor.
2. For every ordinal gamma there is an h satisfying Hist(h,gamma).
3. Every set belongs to some value of some such history.

Every L_lambda at a nonzero limit satisfies C by the history bound and
level exhaustion. Conversely, for a nonempty transitive N satisfying C,
beta=N intersect Ord is a nonzero limit ordinal. For each gamma<beta the
internal witness is the actual H_gamma, by weak-model history soundness.
Hence L_gamma belongs to N and L_gamma is contained in N. Clause 3 gives
the reverse inclusion N contained in the union of those L_gamma. Thus
N=L_beta. This is the desired arbitrary-limit characterization; C is not
claimed to be a conjunction of a predetermined finite fragment of ZF.

**Separate omega proof.** Inductively L_n=V_n because every subset of finite
V_n is finite and definable using its elements as parameters. Therefore
L_omega=V_omega, which fails Infinity. Every individual H_n and relevant
satisfaction certificate is hereditarily finite. Moreover every elementary
X of V_omega equals V_omega: empty is parameter-free definable; if all
members of a hereditarily finite x belong to X, the formula asserting that
a set consists exactly of those finitely many parameters has the unique
witness x, so x belongs to X. External rank induction completes the proof.
Condensation at omega can therefore be proved directly even before invoking
the general characterization.

## 4. Canonical order agreement, preserving the published coding

Use exactly `lem-canonical-well-order-of-finite-definition-codes`: formula
and arity code first, then fixed-arity lexicographic parameter tuples. Retain
old elements as an initial segment. The different enumeration/order in
Kunen VI.4 is not a license to replace the published canonical order.

Let R_gamma be the actual published order on L_gamma. Use augmented
histories

`K_gamma={<delta,<L_delta,R_delta>>:delta<=gamma}`.

Their successor rule is an explicit formula: retain the old order, put old
elements before new ones, and compare new sets by their least defining
codes using Sat*. At limits, union the earlier relations. A supplied weak
history is unique and correct by simultaneous external induction on its
levels and orders. At a successor every competing formula code and every
finite parameter tuple is present, its decoding is correct, and the preceding
order is already identical. Therefore the least codes are identical. This
proves the least-code assertion instead of assuming it from order agreement.

For authoring, use separate generous offsets, for example

`R_gamma in L_(gamma+32)` and `K_gamma in L_(gamma+40)`.

These bounds have the following bookkeeping proof. At finite gamma the
relations and histories are finite sets built from V_gamma, and direct
Kuratowski-pair rank counts give much smaller offsets. At an infinite
successor delta+1, define R_(delta+1) over L_(delta+32), with R_delta and
the two levels as parameters. The relevant assignment domains and truth
certificates over L_delta have already appeared well before delta+32 by
Section 2. Every finite code and tuple that competes in minimization is
present there, so the formula computes the actual new relation. Its pairs
also lie there, giving R_(delta+1) in L_(delta+33). To append this new
entry to K_delta, its components and their two nested ordered pairs all
lie in L_(delta+40); one Def step gives K_(delta+1) in L_(delta+41).
At a limit lambda reconstruct the strict augmented prefix from correct
shorter histories, exactly as for H. All shorter histories are in
L_lambda. The union order is definable over L_lambda, so R_lambda belongs
to L_(lambda+1); finite pairing then appends the endpoint well before
lambda+40. Write these packing bounds out against the actual encoding
when materializing the item; none requires adding omega to the stage.

Consequently the formula “some augmented history orders x before y” defines
precisely R_lambda on L_lambda at every nonzero limit lambda. In ambient ZF
it defines the same global relation as the published recursion, by uniqueness.
Use this formula as an explicitly proved local presentation of the published
order. If the published prose's unspecified formula is treated as a fixed
syntactic formula, also prove equivalence with that particular formula in
the weak package; equivalence merely over full ZF is insufficient for its
arbitrary weak models. The recommended consumer interface refers to the
local presentation and the actual published relation, avoiding an unstated
syntactic identification.

## 5. Condensation and downstream contracts

For arbitrary nonzero limit alpha and X elementary in L_alpha, the published
collapse theorem gives a transitive M isomorphic to X. The finite sentence C
transfers first to X and then to M; Section 3 gives M=L_beta where
beta=Ord intersect M. The collapse-on-ordinals lemma identifies beta as the
order type of X intersect alpha, hence beta<=alpha. The same supplier proves
the already promised fixed-transitive-part clause. No reflected full-ZF
fragment is involved. Smallness of a hull is needed for the later cardinal
application, not for the statement of condensation itself.

For the subset bound work internally in L, or explicitly assume V=L while
using its derived AC. For an infinite cardinal kappa and x subset kappa,
take a sufficiently large **limit** alpha with x,kappa in L_alpha. Hull
`kappa union {kappa,x}`; including each ordinal below kappa is essential.
The canonical term-code hull has size kappa without choosing stagewise
enumerations. Collapse fixes all ordinals below kappa, kappa itself, and x,
because every element of x lies in X. Condensation puts x in L_beta with
|beta|<=kappa, so beta<kappa^+. This proves the subset-stage bound in the
universe in which those cardinals are computed. Do not silently replace
`(kappa^+)^L` by the ambient successor cardinal in a statement about internal
GCH. Level counting then gives the upper bound for the internal power set;
Cantor supplies the lower bound.

For diamond, order absoluteness alone does not transport arbitrary
counterexample predicates. In the least-counterexample construction also
verify that “D is club in beta” and the failure-to-guess tests are absolute
for the actual supplied ordinal, subsets and restricted sequence. These
conditions use bounded membership quantifiers once all those objects are
present. If a candidate c in the collapse is internally least, any globally
earlier candidate belongs to the same L-level, because that level is an
initial segment of the canonical order. It would therefore be recognized
internally and contradict leastness. This is the missing bridge from order
comparison to minimality. Prove the collapse images of the sequence and
club explicitly; closure of C and unboundedness of C intersect beta imply
beta belongs to C. Preserve *stationary* guessing on omega_1.

The Suslin corollary must still carry the published tree supplier's AC
hypothesis, explaining that under V=L it has been derived. The examples
inherit exactly the relevant bounds and guessing hypotheses.

Recommended new-supplier direct dependencies: the constructible-hierarchy
definition; transitivity/ordinal/finite-set level properties; the finite
syntax and substitution definitions; set-satisfaction/relativization for
comparison in ambient ZF; transfinite induction/recursion; the finite-code
well-order lemma; and the canonical global L-order theorem for identification
of the specific published relation. Read the actual bodies before fixing the
minimal list. Do not make full-ZF absoluteness a load-bearing dependency of
the weak-model comparison. Condensation should directly depend on this new
supplier and the two collapse suppliers. Diamond should directly declare
the new supplier if it uses its order-agreement clause.

## 6. Actual effective relativization and finite proof support

Fix the pure membership language and a parameter-free domain formula D(x)
defining x in L. If Section 3's local presentation is used, first prove in
ZF that its union-of-history-values domain equals the published L predicate.
Define the raw translation tau by structural recursion:

`tau(x=y)=(x=y)`; `tau(x in y)=(x in y)`;
`tau(not phi)=not tau(phi)`;
`tau(phi and psi)=tau(phi) and tau(psi)`;
`tau(exists x phi)=exists x(D(x) and tau(phi))`.

Choose fresh indices deterministically; expand all abbreviations using the
existing syntax. For open formulas output the increasing-variable guard
`G_FV(phi) -> tau(phi)`. Atomic relations may equivalently use the published
interpretation's value-graph translation; if using raw atoms, include the
structural equivalence proof between the two conventions rather than
silently mixing their numerical codes. Equality is actual equality, and
the fixed ZF proof that empty belongs to L proves domain nonemptiness.

The parse-tree algorithm is primitive recursive: process subexpressions in
increasing size, renumber binders above every input variable index, and
assemble the translated constructors. It agrees with the formula displayed
above by structural induction. Invalid formula inputs have the prescribed
zero output. This constructs the **formula** translator; it does not yet
construct an axiom-proof translator.

For each certified finite Delta in ZFC+GCH the published fixed-axiom L schema
supplies ZF proofs of the translated ZFC axioms; the fully authored GCH item
will supply the extra fixed GCH proof. Collect their nonlogical axiom lines
and the interpretation obligation proofs to obtain a finite Gamma in ZF.
Translate a Delta-derivation line by line, appending these axiom blocks and
the guards-and-inference blocks from
`lem-interpretation-translates-finite-derivations`. Rebase every cited line
index when concatenating. The result is a Gamma derivation of the guarded
translation. This is the exact fixed-fragment conclusion of the proposed
finite-fragment lemma.

There is a concrete **recursive** way to select the needed axiom blocks:
enumerate all numerical certified ZF proof codes and search for one whose
conclusion is tau(sigma). The fixed-axiom theorem proves termination for
every standard input axiom sigma. This supplies an effective algorithm,
without choice or a model-existence assumption. It uses unbounded search:
do not call it primitive recursive, and do not claim PA proves its totality.
Similarly, enumerating proofs until one is found cannot supply the formal
theorem's verification merely because every standard search terminates.

## 7. What the formal consistency theorem still has to author

For the fixed arithmetizations, take B=PA as a sufficient explicit target
base unless a weaker base is actually proved. The consistency strength stays
Con(ZF); choosing a metamathematical base is not assuming Con(ZF) in ZF.
The required statement is

`PA proves Con(ZF) -> Con(ZFC+GCH)`.

To obtain it from the library's verified-reduction theorem, the author must
supply the following finite proof-template data, not just reference Section
6's recursive search:

| Certified source tag | Required ZF proof constructor |
| --- | --- |
| Each fixed ZF axiom, AC, and GCH | A fixed translated proof block in the exact certified calculus |
| Separation instance with input phi | A syntax-recursive reflection proof for the subformula closure of phi, followed by the published reflected-Def Separation argument |
| Replacement instance with input phi | The exact ambient Replacement instance for `D(y) and tau(phi)`, the rank-bound block, and the translated Separation block for the bounded image |
| Logical schemes | The six guarded scheme translations with substitution certificates and free-variable side conditions |
| MP, generalization, restricted existential elimination | The three guard-handling proof blocks in the existing interpretation lemma, with index rebasing |

For Separation's reflection block the hard uniform step is not evaluation
of a formula: recursively construct a *proof* of reflection for its finite
subformula list. Existential nodes append the least-witness-stage bound
using a specific Replacement instance with the already constructed
relativized child formula. Negation and conjunction append fixed agreement
blocks. Add the omega-iteration/limit witness argument and its specific
instances. The single resulting ZF proof varies effectively with syntax;
the construction must use bounded traversal and primitive-recursive
substitution/concatenation, not theorem search. A finite library of fixed
set-theoretic blocks may be inlined. Any lemma block with a formula
parameter must itself have an explicit schema instantiator.

Let A(a,w) be the assembled ZF proof for the source axiom with certificate
w. Verify in PA, by induction on the input syntax construction, that it
has the claimed final formula and passes every annotated proof-line test.
Validity of a schema instance is certified by its tag, input formula,
designated variables and fresh-variable convention; do not recognize the
schema by informal semantic equivalence. The implication-only Power Set
form and the von Neumann-successor Infinity form in
`def-coded-first-order-zf-theory` must be preserved.

Then define r(p) by primitive recursion on proof lines, using A for
nonlogical axioms and the fixed logical/rule blocks elsewhere. Maintain
these inductive invariants inside PA:

1. The output prefix is a valid certified ZF derivation.
2. The stored endpoint for each processed input line proves its guarded
   translation, with the exact deterministic variable convention.
3. Every referenced index is earlier than its use; every side condition
   and nonlogical certificate is valid.
4. The output and endpoint table are total primitive-recursive functions
   of the processed input, including specified defaults on malformed input.

The contradiction is the library's fixed
`exists v_0 not(v_0=v_0)`, not an undefined `0=1` in the pure set language.
Its raw translation is `exists v_0(D(v_0) and not(v_0=v_0))`.
Append a fixed equality/explosion block converting this to the target
contradiction; append the corresponding guarded block if using the general
value-graph interpretation. PA then proves uniformly

`Prf_(ZFC+GCH)(p,bottom) -> Prf_ZF(r(p),bottom)`.

The published verified-reduction theorem now gives the desired implication.
This does not use a transitive model or imply that ZF proves Con(ZF).

**Outstanding work in this support package.** No numerical fixed ZF proof
blocks, syntax-recursive reflection constructor, or PA proof of its checking
invariant has been supplied here. The table and invariants specify the
concrete missing authoring interface. They are not a claim of verification.
The unconditional formal theorem cannot be marked complete by merely making
these data a new hypothesis, since the owner preserved its promised claim.
The external finite-fragment lemma can be completed first with the recursive
construction above. If the schema proof templates cannot be supplied with
confidence, the remaining formal obligation must stay escalated.

## 8. Corollaries and false statement: exact strength

Once the preceding PA-verified map exists, obtain Con(ZFC+CH) by a second
verified map: replace each CH axiom use with the fixed derivation of CH from
GCH at omega. This is not literal axiom-set inclusion. The implication
Con(ZFC) -> Con(ZF) is the ordinary weakening map on proof certificates.
Both are fixed-block substitutions whose checks are provable in PA. State
the same base and coding convention in the corollary.

For `fs-l-equals-v-in-zf`, preserve the claim as a false statement and the
qualification “assuming Con(ZF), ZF does not prove V=L.” A conditional CTM
forcing example is illustrative but cannot alone establish that exact
claim from Con(ZF). The published forcing-transfer theorem currently
requires base-verified proof constructors as explicit application data.
Its Cohen application therefore still needs its verified finite-fragment
data, including the fragment sufficient for preservation of constructibility
and the nonconstructible generic. Full-ZF absoluteness can be applied to
full transitive ZF grounds/extensions in the semantic illustration; it must
not silently be applied to the weaker finite-fragment models in the formal
proof. Alternatively, prove the appropriate fragment version for that use.

After both reductions are available, compose

`Con(ZF) -> Con(ZFC) -> Con(ZFC + V != L)`.

A hypothetical ZF proof of V=L weakens to the latter theory and, with its
extra axiom, gives a contradiction by a fixed proof transformation. Thus
Con(ZF) rules out such a proof. At no point infer that Con(ZF) or Con(ZFC)
produces a countable transitive model of full ZFC. Do not strengthen the
consistency premise to obtain one. The semantic CTM case and the formal
application must remain explicitly distinct until the proof constructors
are actually supplied.

## 9. Source evidence and limits

- Andreas Lietz, [Set Theory](https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf),
  sections 7.1–7.3: independently read the displayed condensation argument,
  its finite-history exercise, the canonical-order definition and its
  arbitrary-limit agreement exercise, and the diamond proof. These motivate
  the interfaces above; they do not supply the omitted coding proofs.
- Kenneth Kunen, [Set Theory (1980)](https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf),
  VI.3.8–3.9 and the start of VI.4: read the already retrieved complete text
  in `/tmp/phase2next17-b11.swTID3/kunen.txt`. The finite-fragment hypotheses
  are explicit, and the code-order convention differs from the published
  local choice of formula-first order. Do not silently substitute it.
- The owner direction identifies the precise Marks/Hamburg source boundary.
  The Hamburg PDF opened, but no complete relevant proof passage was read
  for this support note. The attempted Marks PDF open returned an internal
  retrieval error after its search result was found. Neither is represented
  as an independently read proof here; no source was dropped or waived.
- Paulson's [author-listed mechanization](https://arxiv.org/abs/2104.12674)
  was found in search, but no full formal development was read here. A guessed
  Cambridge PDF path failed to open. No arithmetic proof translation is
  credited to that search result, and no formalization certificate is claimed.

The finite-certificate and history arguments in Sections 2–4 are locally
developed proof material. Their concrete formulas, offsets, and compatibility
with the repository's exact coding still require the repair author's normal
item-level scrutiny. Sections 6–8 deliberately distinguish proved external
algorithms, proposed proof constructors, and the remaining verification gap.

Next action: materialize and check the new finite-history supplier first;
author its constructibility consumers in dependency order; separately author
and verify the schema/proof-code constructors before closing the formal
consistency theorem and its consumers. Engine transitions remain exclusively
with `tools/autopilot/`.
