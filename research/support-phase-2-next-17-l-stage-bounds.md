# Constructible-stage bounds and the remaining weak-model bridge

Date: 2026-09-12. Target:
`lem-finite-stage-l-history-and-limit-level-absoluteness`.

This support proves a fixed-stage placement result for actual finite assignment
universes and truth tables, completes the separate omega argument, and checks
the proposed hierarchy/order-history offsets **conditional on an explicit
uniform-checker interface**. It does not claim that interface has been compiled
or that the missing supplier, condensation, or an owner gate is complete.
Only this document and its executable companion are new authored files.

## 1. Inputs and the two kinds of bounds

Ambient theory throughout is ZF. Read-only mathematical inputs are:

- `def-constructible-hierarchy-and-constructible-rank`;
- `prop-constructible-levels-transitivity-ordinals-and-rank`;
- `def-definable-subsets-of-a-membership-structure`;
- `lem-canonical-well-order-of-finite-definition-codes`;
- `thm-canonical-definable-global-well-order-of-l`;
- `lem-finite-tuple-satisfaction-is-absolute`, for its ambient finite-tuple
  semantics, **not** its full-ZF-model absoluteness applied to weak domains.

The committed support includes ambient assignment-universe existence
(`b0ee88e48`), truth-set operations (`f85e09bdc`), and numerical subformula
schedules/external finite truth-set proof histories (`d7104a94c`). Their
Power Set/Separation proofs do not place their outputs in a specified L-level.
Their documents also explicitly leave the uniform internal Sat/table bridge
unfinished. Nothing below silently strengthens those imported endpoints.

Write `x ∈ L_(eta+c)` for **membership**, not just inclusion or ambient rank.
For x,y in L_xi, their unordered pair is in L_(xi+1), since it is definable
over L_xi using x,y as parameters. Therefore the Kuratowski ordered pair
`<x,y>={{x},{x,y}}` is in L_(xi+2). Every fixed finite subset of L_xi is in
L_(xi+1), by a finite disjunction of equalities with its elements as parameters;
the empty subset is also definable. Cardinality of that finite subset does
not add stages. These are direct **Def constructions**, not the invalid
inference from a small ambient rank to early constructibility.

The displayed offsets use graph-coded finite tuples with Kuratowski pairs.
They do not apply unchanged to nested tuple encodings of unbounded depth.

## 2. Unconditional placement of actual assignments and truth rows

Fix an infinite ordinal eta, a set A in L_eta, a finite ordinal m, and a
fixed finite membership formula phi whose variable indices, including bound
indices, are all below m. All hereditarily finite codes and indices belong
to L_omega and hence to L_eta. Parameters from A belong to L_eta by
transitivity. Let

    U(A,m) = {s : s is a function with domain m and range contained in A},

with functions represented as sets of Kuratowski pairs. Empty A is allowed
for this graph construction; satisfaction of a nonempty structure is treated
separately below.

Every individual s in U(A,m) is in L_(eta+3): its entries `<i,a>` are in
L_(eta+2), and it is a finite set of those entries. This holds for **all**
finite m with the same offset; their indices are already in L_eta.

The predicate saying s is such a function is absolute when evaluated over
the transitive domain B=L_(eta+3), with A,m,s in B. Here is the explicit
reason, rather than an appeal to full ZF in B:

- Every entry of s and every member of such an entry belongs to B.
- An assertion that an entry is `<i,a>` is absolute. In the relational
  Kuratowski expansion, its singleton/doubleton witnesses are members of
  that entry; transitivity supplies them. The unordered-pair membership
  equations are absolute because all possible members and both named
  endpoints are in B.
- Totality tests only i in m and a in A. Functionality needs only actual
  coordinates of entries of s, all in its finite transitive closure within B.
  Thus no external counterexample can be hidden from the internal test.

Conversely **every** external m-assignment is in B by the preceding bound;
the internal quantifier over candidate s therefore omits none. Hence
`{s in B : s is such a function}` is exactly U(A,m), giving

\[
 U(A,m)\in L_{\eta+4}.
 \tag{U}
\]

This proof does not use an internal power set of A, internal Replacement,
or an assertion that B models a Separation scheme. It uses the definition
`L_(eta+4)=Def(B)` in ambient ZF.

Now assume A is nonempty. For each **fixed external subformula** psi of phi,
let R_psi consist of the s in U(A,m) at which psi is true. There is one
ordinary finite formula defining R_psi over B: conjoin the absolute assignment
predicate with psi relativized to A, replacing its free coordinates by their
unique values in s. Concretely, existentially introduce values in A for the
finitely many distinct free indices and assert their coordinate equations;
inside psi all object quantifiers are bounded to A. Bound variables are
renamed before this insertion. Coordinate equations are absolute as above,
and the relativized formula has exactly the same quantifier domain A.
Its truth over B is consequently actual set-structure truth. Thus

\[
 R_\psi\in L_{\eta+4}
 \quad\text{for every subformula }\psi.
 \tag{R}
\]

Crucially, these definitions do **not** construct each row by performing a
new Def step after its child rows. Each is defined directly over the same B.
The finite defining formula may become longer when psi becomes longer;
the ambient stage does not. A uniform truth predicate over B is not asserted.

Let w_psi be the original finite set-word for psi. Its code is hereditarily
finite. The actual finite table with these words as keys is

\[
 H_{\varphi,A,m}=\{\langle w_\psi,R_\psi\rangle:
                                      \psi\text{ a subformula of }\varphi\}.
\]

Each entry is in L_(eta+6), so

\[
 H_{\varphi,A,m}\in L_{\eta+7}.
 \tag{T}
\]

This is the graph-of-truth-sets representation used by the current support,
not a silently substituted relation of true word/assignment pairs. Repeated
identical subformulas have identical rows; set formation removes duplicates.
The table, assignment universe, and syntax code can be quantified separately.
Packing them into an additional tuple must pay an additional declared offset.

For every fixed formula and parameter tuple, its actual decoded subset of
A is already in L_(eta+1): use its relativization directly over L_eta with
the finitely many individual parameters and A. Again this is an external
fixed-formula definition, not a uniform internal decoding theorem.

These arguments establish actual constructible membership (U), (R), and (T).
They do **not** yet prove that a selected pure-language uniform checker accepts
this H in an arbitrary weak model, nor that all accepted H are sound. That
recognition step is a distinct obligation, stated next.

## 3. Exact missing uniform interface

To use the bounds in a **single history formula**, the following interface I
must be established for the repository's selected fixed coding:

1. Finite-word and formula/arity-code recognition is correct in transitive
   domains containing all individual HF objects. Its actual internal parsing
   certificates and subword reindexing must be specified. Numerical JavaScript
   parsing alone is not this statement.
2. A fixed pure-membership formula `Tab(A,m,w,U,H)` expresses exactly the
   total functional word-to-truth-set graph above: exact assignment universe,
   all and only subformula rows, row subsets of U, and the five recursion
   clauses using the committed coordinate/update predicates.
3. Soundness and completeness of this formula hold (a) in transitive,
   finite-set-closed domains with the relevant witnesses and (b) locally
   over every L_theta with theta>=eta+8 and A in L_eta (eta infinite),
   with all the actual assignments, U and H from Section 2 present.
   Case (b) must not assume that this successor
   L-level is globally pairing-closed or a model of the weak sentence W.
4. The resulting `Decode(A,e,a,b)` agrees with the published formula/arity
   enumeration, permits unused parameters, and has the designated empty-A
   clause. Its least-code comparison uses that same enumeration and
   fixed-arity lexicographic tuples, not a different canonical order.

Why these are the right local hypotheses: once U is exact, the existential
clause quantifies over the same A and its actual updated assignments, and
negation is complement in that same U. External induction on the actual
finite syntax then identifies every row. Totality and parsing justify doing
that induction; they cannot be discarded as cosmetic typing checks.

For successor-stage evaluation below we use A=L_delta with eta=delta+1.
The witnesses are in L_(delta+8), far below the evaluation domain
L_(delta+32); the interface must justify reading them there without importing
global axioms of that domain. This is the precise open bridge, not a remaining
arithmetic offset calculation.

## 4. Weak histories and H_gamma: a conditional theorem with proof

**Assume interface I.** Let W be the single finite conjunction of Empty Set,
Pairing, Union, and existence of the correctly specified U,H for every
admissible finite formula/carrier input, together with existence of every
decoded subset (using the empty-A convention). Uniform coding makes these
individual first-order sentences; they are not a schema or internal Infinity.

Every nonzero limit L_lambda satisfies W. For lambda>omega choose an infinite
eta<lambda containing the finitely many parameters and use eta+7<lambda
and Section 2. For lambda=omega use Section 6. Pairing and Union follow
directly by choosing an earlier level containing the parameters and making
their defining sets one stage later. No history theorem is used here.

In a nonempty transitive N satisfying W, all HF objects and all individual
finite assignments over any A in N belong to N: external finite induction
using Pairing and Union proves finite-set closure. Interface I and the
existence clauses make decoding correct on the same entire set of actual
formula codes and parameter tuples. Therefore a supplied B internally
recognized as Def(A) is the actual Def(A). The sentence W does not by itself
require the collection Def(A) to be an element of N for every A.

Define `Hist(h,gamma)` to assert: h is a graph with domain gamma+1; h(0) is
empty; the successor values satisfy this exact Def relation; and limit
values are the union of previous values. The limit clause is expressed
directly by bounded membership in earlier values. External ordinal induction
shows that any history accepted in N is the actual history

    H_gamma = {<delta,L_delta> : delta<=gamma}.

All values and indices of an internal history are in N by transitivity.
There is no internal transfinite-recursion premise in this soundness proof.

Now prove `H_gamma ∈ L_(gamma+8)` by ordinal induction. Finite gamma follows
from Section 6. At gamma=delta+1, the preceding history is in L_(delta+8),
while delta+1 and L_(delta+1) are in L_(delta+2). Their ordered pair is in
L_(delta+4). Define the appended history over L_(delta+8), with the preceding
history and this pair as parameters. The result is in L_(delta+9), as required.

At an infinite limit lambda, over L_lambda define the strict prefix to be
the pairs `<delta,y>` whose delta is an ordinal and whose y is the terminal
value of some accepted `Hist(h,delta)`. Every actual shorter H_delta belongs
to L_lambda since delta+8<lambda. Conversely W and soundness show every
accepted h is correct. All actual pairs are in L_lambda. Consequently the
strict prefix is definable over L_lambda and lies in L_(lambda+1).
Both lambda and L_lambda belong to L_(lambda+1); their pair is in
L_(lambda+3). Appending it costs one Def step, so in fact
`H_lambda ∈ L_(lambda+4)`, which suffices for the uniform +8 bound.

This induction is noncircular **under I**: W for limit levels was proved
by the fixed-formula stage construction before using any hierarchy histories.

Conjoin W with ordinal-successor existence, existence of Hist(h,gamma) for
every ordinal gamma, and the assertion that every set belongs to some value
of such a history. This finite sentence C characterizes the nonempty
transitive nonzero limit L-levels. In the reverse direction, Ord∩N is a
nonzero limit beta; sound histories give every L_gamma in N for gamma<beta,
and transitivity gives L_beta⊆N. Exhaustion gives N⊆L_beta. In the forward
direction the bound just proved supplies all histories in L_lambda. No
reflected finite ZF fragment is being assumed in every limit level.

## 5. Canonical order and K_gamma: conditional bookkeeping and agreement

Continue to assume I, preserving the **actual published** order. Write R_gamma
for its restriction to L_gamma and

    K_gamma = {<delta,<L_delta,R_delta>> : delta<=gamma}.

Use augmented histories whose successor rule retains the old order, places
old before new elements, and orders new elements by least defining codes.
The code comparison is the published formula/arity-number-first order, then
lexicographic comparison of the fixed-length parameter tuples. At limits
take the union of preceding relations. Do not add an internal assertion
that the old order well-orders every subset of the weak domain; correctness
is obtained by induction from the actual earlier order.

In a transitive domain satisfying W, induction on a supplied augmented
history gives both correct levels and correct orders. At a successor,
**all** actual finite codes and parameter tuples occur internally; decoding
and comparison are identical. Thus each decoding fibre is the same, not
just a subset. Its unique least element is consequently identical. At limits
both relations are the same unions. This is the missing least-code reasoning,
not merely order preservation of selected elements.

Simultaneous induction gives the safe bounds

\[
 R_\gamma\in L_{\gamma+32},\qquad
 K_\gamma\in L_{\gamma+40}.
\]

Finite gamma is handled in Section 6. For an infinite successor delta+1,
define R_(delta+1) over L_(delta+32), with R_delta, L_delta, and L_(delta+1)
as parameters. All its pairs belong to that domain. Formula/arity codes,
parameter tuples, decoded subsets, and necessary truth tables over L_delta
are available by Section 2 with eta=delta+1. Interface I supplies the
local soundness/completeness at this successor evaluation domain. Hence the
one definition gives exactly R_(delta+1), in L_(delta+33).

For the history append, `<L_(delta+1),R_(delta+1)>` is in L_(delta+35), and
the outer pair with delta+1 is in L_(delta+37). K_delta is a parameter in
L_(delta+40); one Def step appends the entry, putting K_(delta+1) in
L_(delta+41). Every parameter is an **element** of its defining domain.

At an infinite limit lambda, correctly recognized shorter augmented histories
are available in L_lambda. The strict prefix of K is definable there and
belongs to L_(lambda+1). The union order is also definable there, so R_lambda
belongs to L_(lambda+1). The inner endpoint pair is in L_(lambda+3), the
outer one in L_(lambda+5), and appending gives K_lambda in L_(lambda+6).

The local formula chi(x,y), “some accepted augmented history puts x before
y,” therefore agrees with R_lambda on each nonzero limit L_lambda. Every
comparison appears in an earlier level whose history is present; every
accepted witness is sound. Ambient recursion uniqueness identifies this
relation with the published global order. This does **not** prove that every
other formula equivalent to chi over full ZF agrees in weak L-levels. A
condensation/diamond consumer must transfer chi itself, or separately prove
the needed weak-model equivalence of its chosen formula.

## 6. The unconditional omega case, with no internal Infinity

For every finite n, `L_n=V_n`. Induct from empty. Every subset of finite V_n
is finite and definable using its members as parameters; the empty subset
is definable too. Thus Def(V_n)=P(V_n)=V_(n+1). Consequently
`L_omega=V_omega`, the hereditarily finite sets. It does not satisfy Infinity:
an inductive set would contain every finite ordinal by external induction
and hence could not be finite.

Every individual finite assignment universe, truth row and finite syntax
table over A in V_omega is hereditarily finite. This proves their existence
in L_omega without a single set of all formulas or a single truth relation
for the structure L_omega inside itself. Arbitrarily large code/arity ranks
are harmless here; no uniform finite stage for all those codes is asserted.

For finite n, `rank(H_n)=n+3`, since each terminal ordered pair has rank n+2.
For any relation R_n on V_n, `rank(R_n)<=n+2`; hence the nested endpoint
pair in K_n has rank at most n+6 and `rank(K_n)<=n+7`. These give actual
finite constructible membership by L_k=V_k, with one extra stage beyond
the rank. The +8/+32/+40 bounds are therefore safe at all finite indices.

Finally, any elementary substructure X of `(V_omega,in)` equals V_omega.
The empty set is uniquely definable without parameters. If all members of
a finite set a belong to X, its exact finite membership formula, with those
members as parameters, has the unique witness a; elementarity puts a in X.
External rank induction now gives every HF set. Thus condensation at omega
is unconditional and needs neither C nor internal Infinity. Agreement of
the **selected uniform formula chi** there still awaits I; the actual finite
order restrictions themselves exist as HF relations.

## 7. Executed checks and exact remaining gap

Run `node research/support-phase-2-next-17-l-stage-bounds.mjs`.
It checks the +3/+4/+4/+7 assignment/universe/row/table arithmetic, the
conditional successor offsets +9/+33/+41, and the limit offsets +4/+1/+6.
An independent finite HF DAG constructs V_0 through V_4 and actual histories,
verifies H ranks 3–7, and verifies the R/K bounds for arbitrary enumerated
finite orders. Those orders are deliberately **not** represented as the
published canonical order. Five negative checks reject insufficient offsets
and confusion of membership with inclusion. Execution and syntax checking
pass. This is finite regression evidence, not a proof of transfinite induction,
L membership from ambient rank, an internal Sat verifier, or a ZF proof-code
certificate. The infinite placement proofs are Sections 1–2.

The source comparison read was
[Lietz's notes](https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf),
Lemma 7.11 and its complete proof on printed pp.57–58, and Proposition 7.21
on p.60 (PDF page indexing differs). The former leaves the finite history
offset as an exercise; the latter leaves canonical-order absoluteness to the
reader. They motivate the targets, not an imported proof of interface I.

**Owner-readiness conclusion:** keep the missing U-L supplier and dependent
originals held. Actual fixed-stage assignment/table placement and the omega
case are now supplied mathematically, and the H/R/K offsets are proved from
a precise interface. Still required is one selected pure-membership finite
syntax/table/Decode presentation, proved sound and complete in the weak and
successor evaluation domains, and its bridge to the published code order.
Until those contracts are discharged, the conditional H/R/K proof is not an
unconditional local U-L lemma and does not warrant reopening an owner gate.
The separate formal L-interpretation/axiom-proof compiler remains untouched.
