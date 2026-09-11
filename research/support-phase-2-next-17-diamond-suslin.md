# Authoring support: diamond in L and the Suslin-tree consequence

Date: 2026-09-12 (Australia/Sydney).

This isolated support package addresses `thm-v-equals-l-implies-diamond`,
`cor-v-equals-l-gives-a-suslin-tree`, and the sealing example
`ex-diamond-seals-a-maximal-antichain-in-l`. It contains a complete deduction
of diamond from the exact constructibility interfaces stated below, and a
complete diamond-to-Suslin construction. The constructibility interfaces
remain conditional on the reopened local supplier and condensation theorem.
This file is not an item, receipt, certification, or acceptance decision.

## 1. Current scope and exact dependencies

The preserved batch-11 contract promises:

- ZF proves V=L implies diamond on ω₁, with stationary correct guesses for
  every subset of ω₁;
- ZF proves V=L implies a normal splitting Suslin tree on ω₁;
- a correctly guessed maximal antichain at an appropriate countable limit
  stage is sealed by the new level.

At inspection the two theorem/corollary item files were absent. The
diamond-to-Suslin theorem and its local construction suppliers already exist
as published items. This support file does not edit them.

The diamond proof below uses these constructibility interfaces:

**C1 — Global order, already supplied.**
`thm-canonical-definable-global-well-order-of-l` gives a fixed parameter-free
formula defining <L, a setlike well-order of L. Every Lα is an initial
segment, and the restriction to a set level is a set well-order. Under V=L
this orders every set under discussion. The formula/code convention must be
the same one used in C3.

**C2 — Countable hull and condensation, partly pending.**
`def-skolem-hulls-in-constructible-levels` and
`lem-canonical-small-skolem-hulls-in-l` supply a canonical countable elementary
hull of a finite seed in any nonzero limit Lθ. The reopened
`thm-condensation-for-constructible-levels` must show that its transitive
collapse is Lγ for a nonzero limit γ. The existing
`thm-collapse-of-elementary-membership-submodels` and
`lem-collapse-fixes-transitive-parts-and-orders-ordinals` supply the collapse
equation, elementarity after collapse, and the fixed-point calculations.

**C3 — Correct order formula inside limit levels, pending.**
The proposed
`lem-finite-stage-l-history-and-limit-level-absoluteness` must supply the
clause

\[
 L_\lambda\models x<_Ly\quad\Longleftrightarrow\quad x<_Ly
 \qquad(x,y\in L_\lambda)
 \tag{Order-agreement}
\]

for the required nonzero limit levels λ, with the **same formula** as C1.
This applies both to the large Lθ and to the collapsed Lγ. C1's already
published agreement between V and the full inner class L does not supply
agreement with arbitrary weak limit levels. The new supplier also supports
condensation; its proof must not apply full-transitive-ZF absoluteness to an
Lγ not known to satisfy ZF.

The rest of the diamond argument uses `thm-transfinite-recursion`, ZF
Separation and Replacement, elementary ordinal/countability facts, and the
definitions of club and diamond. The current manifest should explicitly
register the direct uses of C3, recursion, and collapse-fixing, unless the
completed condensation item packages precisely those clauses. No GCH,
constructible-subset successor bound, or Lω₂ parameter bound is needed for
this proof. It respects the planned page order without making that order an
unnecessary mathematical dependency.

For the corollary, the existing declared chain is correct:

\[
 \text{V=L}\Longrightarrow\diamondsuit,
 \qquad \text{V=L}\Longrightarrow\mathrm{AC},
 \qquad \mathrm{ZFC}+\diamondsuit\Longrightarrow\text{a Suslin tree}.
\]

The second implication is
`thm-constructible-universe-satisfies-choice`; the third is
`thm-diamond-constructs-normal-suslin-tree`. Its AC hypothesis is derived
under V=L, not silently assumed as an additional premise of the ZF
corollary. The example's contract should also make its derivation of AC
explicit, directly or through the corollary.

## 2. Diamond: an item-ready proof conditional on C2–C3

### Statement and recursive construction

In ZF, assume V=L and the constructibility interfaces C1–C3 above. Put
κ=ω₁. For a nonzero limit ordinal λ, a sequence s of length λ with
s(β)⊆β, and x,c⊆λ, write Bad(λ,s,x,c) for

\[
 c\text{ is club in }\lambda
 \quad\text{and}\quad
 \forall\beta\in c\quad x\cap\beta\ne s(\beta).
\]

Use the club convention in `def-club-subsets-of-ordinals`: unbounded means
strictly above every smaller ordinal, and closed means containing every
nonzero limit point below λ. With all displayed parameters present in a
transitive set, Bad is absolute. Indeed subset, unboundedness, closure at
each ordinal δ<λ, function evaluation, and equality of subsets have only
bounded quantifiers after expansion of their set coding. In particular its
closure test does not quantify over all external countable sequences.

Recursively define S=⟨Sα:α<κ⟩. Put Sα=∅ at zero and successor stages.
At a nonzero limit α, consider the set of Kuratowski-coded pairs ⟨x,c⟩
with x,c⊆α satisfying Bad(α,S↾α,x,c). If it is nonempty, choose its
unique <L-least member and put Sα=x, its first coordinate. Otherwise put
Sα=∅. Each candidate collection is a set, being a definable subcollection
of P(α)×P(α). C1 gives its least element. The rule is single-valued and
ZF transfinite recursion produces S as a set. Every Sα⊆α.

The fallback value ∅ need not itself furnish a bad pair. The argument uses
the least-pair clause only at a stage where an actual bad pair is exhibited.

### Suppose a failure exists

If S is not a diamond sequence, some A⊆κ and club C⊆κ have

\[
 \forall\beta\in C\quad A\cap\beta\ne S_\beta.
 \tag{Failure}
\]

Choose the <L-least pair z=⟨A,C⟩ among **all** pairs satisfying
Bad(κ,S,A,C). The witness set is a subset of P(κ)×P(κ), so this is
another ordinary least element of a set. The pair need not be the least
club for a previously fixed A: the well-order compares the entire coded
pair, exactly as in the local recursion.

For each 0<β<κ let g(β) be the <L-least surjection ω→β; put g(0)=∅.
Such a surjection exists by the definition of a countable nonempty ordinal.
Its candidates form a set. Under V=L they are constructible, so C1 gives
a unique least one and Replacement forms the single set function g. This
is an explicit definable selection, not an appeal to arbitrary-index Choice.

Choose a nonzero limit θ so large that κ,S,z,g,ω belong to Lθ. V=L
places each of these finitely many sets in some constructible level; taking
one larger limit suffices. No claim that they belong to Lκ⁺ is needed.

By C3 and the bounded absoluteness of Bad, Lθ satisfies that z is the
<L-least bad pair at κ for S. Its being bad is absolute, and any internally
smaller bad pair would be an actual smaller bad pair, contradicting the
global choice. This argument needs no assertion that Lθ satisfies all ZF
or internally reconstructs the entire definition of S.

### A canonical countable hull with an ordinal intersection

Let X be the canonical hull in Lθ of the finite seed
{κ,S,z,g,ω}. By C2 it is countably infinite and X≺Lθ. The projections
A,C of z belong to X by elementarity. Every natural number belongs to X:
the empty set and each finite ordinal successor are uniquely definable in
the transitive limit level, and the hull is closed under these definitions.

If 0<β∈X∩κ, evaluation of g at β is uniquely defined in Lθ and hence
g(β)∈X. For any ξ<β, some n∈ω satisfies g(β)(n)=ξ. Since n∈X,
another function evaluation gives ξ∈X. Thus β⊆X. The case β=0 is
vacuous, so X∩κ is downward closed and is an ordinal, call it δ.

It is countable because it is a subset of the countable set X. Therefore
δ<κ, by the definition of κ. The hull is closed under ordinal successors
below κ, so δ has no largest element and is a nonzero limit. In fact
ω∈X∩κ, so δ>ω. This proof does not need regularity of ω₁ or a countable
union of independently enumerated countable sets.

For every β<δ, the least ordinal ξ∈C with β<ξ exists by unboundedness
of C and is uniquely definable from β,C in Lθ. Hence ξ∈X∩κ=δ.
Therefore C∩δ is unbounded in δ. Since C is closed and δ is a nonzero
limit below κ,

\[
 \delta\in C.
 \tag{Club-hit}
\]

### Collapse and identify the least local pair

By the conditional condensation interface, let π:X→Lγ be the transitive
collapse, where γ is a nonzero limit. The collapse-fixing lemma gives

\[
 \pi(\kappa)=\delta,\qquad
 \pi(\beta)=\beta\quad(\beta<\delta),\qquad
 \pi(A)=A\cap\delta,\quad\pi(C)=C\cap\delta.
\]

For β<δ, Sβ∈X by evaluation of S at β. Since Sβ⊆β⊆X and π fixes
β pointwise, the collapse equation gives π(Sβ)=Sβ. The equation for the
graph S, together with preservation of finite ordered-pair coding, therefore
gives

\[
 \pi(S)=S\mathbin{\upharpoonright}\delta.
 \tag{Sequence-collapse}
\]

In detail, a graph entry belonging to X has its two coordinates in X by
elementarity. Conversely, evaluating S at β∈X produces Sβ∈X and then
the graph pair in X. Thus the collapsed graph has exactly the indices β<δ
and exactly the displayed values; none are lost or added.

Elementarity of X in Lθ and the isomorphism π now imply that Lγ satisfies:

\[
 z'=\langle A\cap\delta,C\cap\delta\rangle
 \text{ is the }<_L\text{-least bad pair at }\delta
 \text{ for }S\upharpoonright\delta.
 \tag{Internal-least}
\]

This is the critical place where the pending constructibility supplier is
used. C3 identifies Lγ's order formula with the actual <L. Bounded
absoluteness makes z′ an actual bad pair. If there were an actual earlier
bad pair y<Lz′, C1's initial-segment property and z′∈Lγ would put y
in Lγ as well. Its badness and its order comparison would then hold inside
Lγ, contradicting (Internal-least). Consequently z′ is the actual least
bad pair at δ.

The global recursive definition of S at the nonzero limit δ therefore
chooses its first coordinate:

\[
 S_\delta=A\cap\delta.
\]

This contradicts (Failure) because (Club-hit) gives δ∈C. Thus no failure
pair exists. For every A⊆κ and every club C⊆κ, some δ∈C satisfies
Sδ=A∩δ. This is precisely stationarity of the correct-guess set, including
the targets ∅ and κ. QED, conditional on the identified C2–C3 clauses.

### Boundary of this proof

The collapse Lγ need not satisfy ZF and is countable externally even though
it sees π(κ)=δ as having whatever internal properties transfer from κ.
No inference from internal uncountability to actual uncountability is made.
Only its transitivity, its identity as a limit constructible level, and the
specific order-agreement clause enter the decisive step.

The proof transfers one least-pair assertion and the **given** sequence as
a graph. It does not need to show that Lγ reconstructs the full recursion
correctly on all its stages. This keeps the missing supplier obligation
precise. The owner-required treatment of Lω=Vω remains necessary in the
general condensation supplier, even though the present collapse has
γ>δ>ω.

## 3. Full diamond-to-Suslin construction

This section is independent of C2–C3: its assumptions are ZFC and a supplied
diamond sequence D=⟨Dα:α<κ⟩ on κ=ω₁. It expands the already published
`thm-diamond-constructs-normal-suslin-tree` and its sealing/coding lemmas.
No new constructibility input is used.

### 3.1 Conventions and deterministic recursion

Use `def-normal-splitting-set-theoretic-tree`: a normal tree has a unique
root, extensions at every higher level below its height, and distinct
predecessor sets for distinct nodes of a nonzero limit level. Splitting
separately requires at least two immediate successors whenever the
successor level exists. Distinct predecessors of the same height cannot
lie below a common node.

Allocate nodes as ordinals consecutively. Set T₀={0}, η₀=0, η₁=1.
At positive height α use the fresh block

\[
 T_\alpha=[\eta_\alpha,\eta_\alpha+\omega),\qquad
 \eta_{\alpha+1}=\eta_\alpha+\omega;
 \qquad \eta_\lambda=\sup_{\beta<\lambda}\eta_\beta
 \quad(\lambda\text{ a nonzero limit}).
\]

Thus the node set below level α is the ordinal ηα. Countable unions of
countable ordinals are countable under AC, so every ηα<κ for α<κ.
The sequence η is strictly increasing and continuous at nonzero limits.

Fix, using the well-ordering theorem under AC, a well-order of
P(κ×κ). At each stage choose the least extension relation on the prescribed
new node set satisfying the requirements below. Legal extensions exist by
the next two paragraphs. This converts their existence assertions into one
single-valued set recursion. Relations belong to P(κ×κ), so no proper-class
choice of orders or branches is hidden in the construction.
For histories failing the stated stage invariants, define the rule to return
the empty relation; induction shows those histories never occur in this run.

At successor height α=β+1, give each node of Tβ countably infinitely
many immediate successors, allocating the pairs Tβ×ω bijectively to the
new block. The old predecessors of each new node are its parent and all
that parent's predecessors. This preserves the tree order, root, and old
predecessor sets; every old node reaches the new level by first extending
to Tβ. Each parent now splits. The product Tβ×ω is countably infinite,
including the root case, so the allocation exists.

### 3.2 Explicit covering branches at a countable limit

Let 0<δ<κ be limit and suppose U=T<δ has already been built. It is
countable under AC, because δ is countable and all levels are countable.
Its union order is normal of height δ: any particular pair of old nodes
and any requested old extension appear in an earlier stage. Every old
node already has its splitting successors because δ is limit.

If the raw diamond guess Dδ is a subset of U and a maximal antichain of
U, put Aδ=Dδ. Otherwise put Aδ={root}. The latter is a maximal
antichain because the root is below every node. The test uses the actual
node codes and actual partial order; it does not assume δ=ηδ at every
stage.

Fix two surjections e:ω→U and d:ω→δ for this one existence proof.
For each t∈U, maximality of Aδ gives a member comparable with t;
otherwise t could be adjoined. Let a(t) be the first such member in the
e-enumeration and let u(t) be the larger of t and a(t) in the tree order.

Construct a strictly increasing cofinal sequence in δ by
ζ₀=d(0), ζₙ₊₁=max(ζₙ+1,d(n+1)). Given t, start v₀=u(t) and define
vₙ₊₁ to be the first e(k) extending vₙ at height
max(ζₙ,ht(vₙ)+1). This height is below δ and normality provides the
node. These are unique least-index choices, so recursion and Replacement
give all the sequences, using the two fixed enumerations.

Let bₜ be the downward closure of {vₙ:n<ω}. It is a chain, has exactly
one node at every height below δ, and is cofinal. Indeed its heights are
cofinal by construction; unique predecessors give existence and uniqueness
at each lower height. A node comparable with all of bₜ lies below a vₙ
of larger height and already belongs to bₜ. Thus bₜ is a maximal cofinal
branch. It contains t and a(t).

The family Bδ={bₜ:t∈U} is countable, covers U, and each member meets
Aδ. Take it as a set to remove repeated branches. It is infinite: the
level T₁ is countably infinite, each branch contains only one member of
that level, and the branches cover T₁. Hence Bδ is countably infinite.

Add one top for each distinct member of Bδ and biject these tops with
the fresh block Tδ. The predecessors of its top are exactly that branch.
They have order type δ. Covering guarantees that every old node has an
extension at δ; removing duplicate branches guarantees distinct predecessor
sets at the new limit level. The old splitting pairs persist; new tops
have no immediate-successor requirement yet. Every new top extends a
member of Aδ. This proves existence of a legal stage for the deterministic
recursion in 3.1.

### 3.3 The final tree and its coding

Transfinite recursion produces all stages. Let T be their union order.
Predecessor sets of old nodes are never changed; root, normality, and
splitting therefore pass to the full tree. The level Tα is nonempty at
each α<κ and has the required countability. T has height κ.

The node set is an ordinal at most κ, since every stage used ordinals
below κ. It cannot be countable: sending α to the least ordinal node
of Tα injects κ into it. Thus the final node set is exactly κ. This
allows each antichain of T to be a target subset of κ for D without
introducing an extra coding bijection.

### 3.4 Why maximal antichains reflect on a club

Fix a maximal antichain A of the final T. For each node code ξ<κ let
w(ξ) be the least ordinal code of a member of A comparable with ξ.
Maximality gives such a member. Consider the set E of nonzero limit
ordinals δ<κ satisfying

\[
 \forall\xi<\delta\qquad \eta_\xi<\delta
 \quad\text{and}\quad w(\xi)<\delta.
 \tag{Coding-club}
\]

Here ηξ is defined for every ξ<κ by the allocation sequence. E is club.
For unboundedness above β<κ, start a₀=β+1 and iterate

\[
 a_{n+1}=\sup\bigl(\{a_n+1\}\cup
      \{\eta_\xi+1,w(\xi)+1:\xi<a_n\}\bigr).
\]

Every aₙ is countable; the displayed supremum and then
δ=supₙaₙ stay below κ by countable choice/countable-union boundedness.
The sequence strictly increases. For any ξ<δ, some n has ξ<aₙ,
so ηξ,w(ξ)<aₙ₊₁<δ. Thus δ∈E and δ>β. For closedness, if
δ is a nonzero limit point of E, every ξ<δ is below some ρ∈E∩δ,
giving ηξ,w(ξ)<ρ<δ. Hence δ∈E. This is the explicit two-function
instance of `lem-closure-points-on-regular-cardinals`.

For δ∈E, continuity gives ηδ=supξ<δηξ≤δ. Since η is increasing
and ηξ≥ξ, also ηδ≥δ. Hence

\[
 T_{<\delta}=\eta_\delta=\delta
 \quad\text{as sets of node codes}.
 \tag{Correct-coding}
\]

For any node t∈T<δ, its code is below δ and w(t)<δ. Thus it has a
comparable member of A∩δ in the partial tree. A∩δ remains an antichain,
so it is maximal in T<δ. This is the exact reflection fact required for
the guess test at stage δ; maximality in the full tree alone would not
establish it at arbitrary stages.

### 3.5 Stationarity selects a stage that seals the full antichain

Diamond gives a stationary set

\[
 S_A=\{\delta<\kappa:D_\delta=A\cap\delta\}.
\]

Choose δ∈E∩S_A. It is a nonzero countable limit, satisfies
T<δ=δ, and its guessed set is a maximal antichain of that partial tree.
Consequently the actual construction at δ used Aδ=Dδ=A∩δ and put
every level-δ node above one of its members.

Every later node has a unique level-δ predecessor and therefore also
extends some member of A∩δ. A member a of A at height at least δ
would be strictly above another member of A at height below δ, contradicting
the antichain property. Thus A⊆T<δ=δ, so A is countable.

For an arbitrary antichain B, the poset of antichains containing B has
chain upper bounds given by union (and B bounds its empty chain).
Zorn's lemma under AC gives a maximal antichain A⊇B. The previous
paragraph makes it countable, hence B is countable. This retains the
maximal-antichain-extension hypothesis used by the published theorem.

### 3.6 No cofinal branch

Suppose a maximal cofinal branch b existed. It contains a unique node bα
at every height α<κ: cofinality supplies higher branch nodes and their
unique predecessors, and maximality inserts those predecessors into b.
For each α choose the least ordinal-coded immediate successor cα of bα
different from bα₊₁. Splitting makes this set nonempty; the existing ordinal
coding makes this particular selection definable.

If α<β and cα,cβ were comparable, their heights α+1<β+1 force
cα<cβ. But bα₊₁≤bβ<cβ as well. The two distinct nodes cα and
bα₊₁ would be predecessors of cβ at the same height, impossible. Thus
{cα:α<κ} is an antichain of size κ; their distinct heights make its
indexing injective. This contradicts 3.5. There is no cofinal branch.

The final tree is therefore normal, splitting, of height ω₁ with
countable levels, and has neither an uncountable antichain nor a cofinal
branch. This is a Suslin tree in the repository's explicit definition.
Its root level is a singleton and every positive level is countably infinite.

## 4. Item-ready corollary and sealing example

### Corollary

**Statement.** ZF proves that V=L implies the existence of a normal
splitting Suslin tree on ω₁.

**Proof, conditional only on completion of the diamond supplier.** Assume
ZF and V=L. `thm-constructible-universe-satisfies-choice` states that AC
holds internally in L, and V=L identifies this with AC in the universe.
The completed `thm-v-equals-l-implies-diamond` supplies a diamond sequence
on this same ω₁. The published
`thm-diamond-constructs-normal-suslin-tree` now applies with its ZFC
hypothesis satisfied and gives exactly the asserted tree. Neither Con(ZF)
nor a countable transitive model nor any syntactic consistency transfer is
part of this internal mathematical assertion. QED.

### Sealing example with all hypotheses visible

Work under ZF+V=L and use the tree constructed from its diamond sequence.
Derived AC licenses the countable-stage and global-recursion choices.
Let A be a maximal antichain of the final tree, and choose δ in the
intersection of its coding/reflection club and its stationary set of correct
guesses as in 3.4–3.5. Then

\[
 T_{<\delta}=\delta,\qquad
 D_\delta=A\cap\delta,\qquad
 A\cap\delta\text{ is maximal in }T_{<\delta}.
\]

For each t∈T<δ, the construction selects a comparable a(t)∈A∩δ,
extends the larger of the two through a cofinal branch, and puts a top
over that branch at level δ. Removing duplicate branches preserves
countability and ensures normality. Thus every new top, and then every
later node, extends a member of A∩δ. No additional member of A can
appear at height at least δ; hence A=A∩δ.

For a **local** maximal antichain Aδ alone, the conclusion is that it
remains maximal in every later tree and in the final tree. The conclusion
that an arbitrary full-tree antichain was anticipated needs the separate
coding-club and stationary-guess argument. A raw correct guess at a stage
with ηδ≠δ, or a guess that is not maximal in T<δ, does not trigger
the required sealing clause.

## 5. Assumptions, bookkeeping, and remaining authoring boundary

The diamond proof uses canonical least elements and a canonical finite-seed
hull. Its countability calculation for X∩ω₁ uses the supplied set g of
canonical enumerations; it does not invoke ambient AC or regularity as an
unproved fact of ZF. When using the repository's stationary-set terminology,
V=L also derives AC and hence the usual regularity of ω₁, so the existing
club-filter definition's ZFC setting is satisfied. The proof itself proves
the defining meet-every-club property directly.

The Suslin construction retains the published ZFC boundary. It uses AC to
well-order P(ω₁×ω₁), to apply the countable-union/boundedness results
at countable limits and in the coding-club proof, and to extend an arbitrary
antichain by Zorn. The branch family at a single countable stage is obtained
from two fixed enumerations by least-index recursion and adds no further
choice requirement. The final off-branch successor selection uses the
already supplied ordinal node order. Under V=L all required AC is derived.

The published items read for this pass were the global canonical order,
constructible Choice, canonical hull definition and size/elementarity lemma,
collapse and collapse-fixing theorems, finite L-reflection, diamond and tree
definitions, the diamond-to-Suslin theorem, the countable cofinal-branch and
antichain-sealing lemmas, club coding/reflection, splitting-branch antichain,
closure points, and countable boundedness of ω₁. This is a focused review
of their used interfaces, not an independent audit of all transitive
prerequisite closures.

For actual integration, retain all original IDs and claims. Author and
register the constructibility supplier and condensation result before using
C2–C3; then author the diamond theorem, corollary, and example and reconcile
their actual dependencies. The full-Suslin construction is already supplied
by published content and need not be duplicated in a new item merely because
it is expanded here. No published-item defect was established in this pass.
The unresolved prerequisite is the exact constructibility interface,
not the sealing bookkeeping.

## 6. Primary-source evidence and its limits

[Lietz, Set Theory, Theorem 7.20, Proposition 7.21, and Claims 7.22–7.23](https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf)
were read completely. They give the least-local-counterexample method and
isolate canonical-order absoluteness; Proposition 7.21 leaves that proof to
inspection. Section 2 supplies the hull/collapse deduction for ω₁ but keeps
that order-agreement prerequisite explicit.

[Kunen, Set Theory (1980), VI.3.8–3.9 and VI.5.1–5.2, pp.172 and 177–179](https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf)
were read from the already retrieved complete text in
`/tmp/phase2next17-b11.swTID3/kunen.txt`. The first results require a
specified finite theory for weak-model absoluteness; VI.5.2 proves the
stronger diamond-plus principle and explicitly tracks canonical order under
collapse. Those hypotheses are not replaced here by full-ZF absoluteness.

[Karagila, Axiomatic Set Theory, Theorem 9.10 and Lemma 9.11, pp.44–45](https://karagila.org/files/set-theory-2017.pdf)
were read completely for the Suslin construction. Its concise limit-stage
and coding steps are expanded in Section 3, using the repository's separate
normality and splitting conventions and its already published local proofs.
No claim is made that a source's omitted proof was completed merely by
reading the statement.
