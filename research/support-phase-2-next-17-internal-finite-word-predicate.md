# A selected internal bounded finite-word predicate

This research-only block supplies a fixed pure-membership formula for
finite ordinal domains and exact alphabet-token graphs. Its mathematical
correctness is absolute over arbitrary transitive sets containing its
parameters, including successor constructible levels. It does **not**
recognize well-formed formula syntax, subformula schedules, truth tables,
or Decode, and therefore does not discharge interface I in
[the stage-bounds support](support-phase-2-next-17-l-stage-bounds.md).

The executable companion is
[support-phase-2-next-17-internal-finite-word-predicate.mjs](support-phase-2-next-17-internal-finite-word-predicate.mjs).
It emits a completely expanded pure-language AST, numerically serializes
and independently parses that AST, checks that every quantifier is bounded,
and evaluates the formula on explicit finite sets. **These are formula
and finite semantic checks, not accepted ZF proof lines.** The earlier
[quotation-existence constructor](support-phase-2-next-17-set-word-quotation-existence.md)
supplies numerical proof lines for a different, carefully delimited claim.

## 1. Why internal finiteness needs an exact predicate

Saying that a code is a finite word must not mean “its length is an
ordinal the weak domain happens to regard as natural.” Nor may an
internal set of all natural numbers be assumed at `L_ω`. The following
bounded definition avoids both problems.

All quantifiers displayed below are membership-bounded. Expand
`∃x∈s φ` as `∃x(x∈s∧φ)` and `∀x∈s φ` as
`¬∃x(x∈s∧¬φ)`. Bound variables are globally fresh and differ from their
bounding-set variable. These are the literal expansions used in the code.

    Empty(x) := ∀z∈x z≠z
    Tr(x) := ∀y∈x ∀z∈y z∈x
    Succ(a,b) := a∈b ∧ (∀z∈a z∈b) ∧ (∀z∈b (z∈a ∨ z=a))
    Ord(x) := Tr(x) ∧ (∀y∈x Tr(y))
              ∧ (∀y∈x ∀z∈x (y=z ∨ y∈z ∨ z∈y))
    ZS(x) := Empty(x) ∨ ∃y∈x Succ(y,x)
    FinOrd(x) := Ord(x) ∧ ZS(x) ∧ ∀y∈x ZS(y).

In ambient ZF, `Ord` says exactly that `x` is an ordinal. Transitivity and
the last condition give a linear membership order; transitivity of the
members gives transitivity of that order. Ambient Foundation makes every
nonempty subset have a membership-minimal element, which by linearity is
least. No Foundation axiom in the evaluation domain is being invoked.

For an ordinal, `ZS` means zero or successor. Every finite ordinal and
all its members have that property. Conversely, if an ordinal `x` is
infinite, either `x=ω`, so its own `ZS` fails, or `ω∈x`, so the bounded
universal clause fails at `ω`. Hence `FinOrd(x)` is equivalent to
`x∈ω` **externally**, without mentioning an internal set `ω` in its
defining formula. This argument works for all sets, not just finite HF
examples used by the executable tests.

Every displayed formula is bounded. Structural induction on formulas
therefore proves absoluteness between a transitive domain and the universe:
for parameters in the domain, each quantifier ranges over exactly the
same members of its bounding set. Atoms agree, and Boolean operations
preserve agreement. This is the specific elementary absoluteness
argument needed here, not a claim that the domain models ZF. Compare
the primary treatment of bounded formulas and transitive absoluteness in
[Moschovakis, Lecture Notes in Logic, Chapter 7B](https://www.math.ucla.edu/~ynm/lectures/lnl.pdf).

## 2. Exact token and graph formulas

Use the bounded operations

    Pair(a,b,p) := a∈p ∧ b∈p ∧ ∀z∈p (z=a ∨ z=b)
    OP(a,b,p) := ∃r∈p ∃s∈p
                 (Pair(a,a,r) ∧ Pair(a,b,s) ∧ Pair(r,s,p)).

These say exactly `p={a,b}` and `p={{a},{a,b}}`. Degenerate cases
`a=b`, empty endpoints, and coincident singleton/doubleton witnesses are
included. For the converse, the two inner witnesses are actual members
of the ordered pair, so transitivity supplies them automatically.
Mathematically these formulas are equivalent to the committed unbounded
Pair/OP expansions for parameters in transitive domains. Their **literal
numerical proof adapters** to the committed expansions are not emitted
in this artifact and remain an import for a proof-code consumer.

Let six additional parameters `K_0,…,K_5` satisfy

    Constants(K) := Empty(K_0) ∧ ∧_(i<5) Succ(K_i,K_(i+1)).

This forces the actual finite ordinals 0 through 5. A token `t` satisfies
`Token(t,K)` exactly when some `r∈t` and `k,j∈r` satisfy `OP(k,j,t)`
and one of the following alternatives:

| Tag `k` | Allowed payload `j` | Meaning |
| --- | --- | --- |
| `K_0` | `FinOrd(j)` | variable symbol |
| `K_1` | `j=K_0` | the sole membership-relation symbol |
| `K_2` | `j=K_0 ∨ … ∨ j=K_5` | one of six constructors |
| `K_3` | `j∈K_3` | one of three punctuation symbols |

The bounded witness choice is complete: for a genuine ordered pair
`⟨k,j⟩`, its member `{k,j}` contains both `k` and `j`. Tags and payloads
are finite **set ordinals**, not numerical sentinel-list codes.

Define `Graph(s,m,Value)` as the conjunction of:

    ∀p∈s ∃r∈p ∃i∈r ∃v∈r
      (i∈m ∧ OP(i,v,p) ∧ Value(v));

    ∀i∈m ∃p∈s ∃r∈p ∃v∈r
      (OP(i,v,p) ∧
       ∀q∈s ∀t∈q ∀w∈t (OP(i,w,q) → q=p)).

The first clause rejects non-pair junk and out-of-domain entries. The
second supplies exactly one graph entry at each domain coordinate.
Indeed every possible competing ordered pair has its second coordinate
in a member of that pair, so none escapes the bounded universal test.
Kuratowski injectivity then gives uniqueness of values. Conversely, an
actual total functional graph satisfies both clauses, with `{i,v}` as
the indicated extraction witness. The clauses do not merely assert
functionality on the entries that a partial internal search happened to
find.

The selected predicate is

    Word(w,m,K) := Constants(K) ∧ FinOrd(m)
                   ∧ Graph(w,m,λt.Token(t,K)).

In the companion, its only free variable slots are `0,1,2,…,7`: word,
length, and the six constants respectively. Fresh binders start at 100.
`internalWordFormula()` returns that exact expansion. The grammar's
variable/constructor/punctuation tags agree with the committed numerical
adapter and with
[set signatures and finite strings](../items/def-set-signature-and-finite-syntax-strings.md),
specialized to the pure-membership signature. The definition of
[terms and formulas](../items/def-set-coded-terms-and-formulas.md) imposes
additional well-formedness conditions not asserted here.

## 3. Correctness in weak domains and successor levels

For any transitive set `M` and `w,m,K_0,…,K_5∈M`,

    M ⊨ Word(w,m,K)

holds exactly when `K_i=i`, `m` is the actual finite ordinal length,
and `w` is a total function on `m` into the indicated actual alphabet,
using the existing Kuratowski token and flat graph representation.

Proof: bounded absoluteness reduces to the universe. The `FinOrd` proof
from §1 identifies the length. The constant, token, and graph proofs from
§2 then give both directions. A graph accepted here is externally
finite, because its domain is finite and it has exactly one entry per
coordinate. Every token is HF because its tag and payload are finite
ordinals. Therefore the entire accepted word is HF. No ambient set of
all words, all ordinals, or all formula codes was used by the predicate.

Existentially closing the seven auxiliary parameters gives a fixed
formula `IsWord(w)`. Completeness for this existential version requires
the actual length and the six constants to be in `M`; transitivity alone
does not always give the successor of the largest index. Domains
containing **all individual HF objects**, as in interface I(1), meet this
requirement. So do all `L_θ` with `θ≥ω`. No global pairing closure of a
successor `L_θ` is needed: all witnesses in this particular predicate
are either named HF constants or members of supplied sets.

Thus this block is valid both in the weak transitive domains and in the
successor evaluation domains specified by interface I. Its additional
stage overhead is **zero once those parameters are present**; it neither
constructs nor asserts a truth-table witness. It does not change the
`η+3/+4/+7` assignment/row/table placement argument. In particular,
`L_ω` is a valid evaluation domain without satisfying Infinity.

## 4. Executable checks and boundaries

Run:

    node research/support-phase-2-next-17-internal-finite-word-predicate.mjs
    node --check research/support-phase-2-next-17-internal-finite-word-predicate.mjs

The tests serialize the entire selected formula through the existing
sentinel/word producer, recover it with the independent numerical parser,
and check syntactically that every quantifier has a genuine membership
bound. A self-bounded quantifier is rejected, as is a naked existential.

An extensional HF interner supplies actual finite sets. The evaluator
interprets the expanded bounded AST, not the numerical word parser, and
requires transitivity and parameter containment if an ambient finite
domain is supplied. The same six word graphs (including the empty word)
are tested in both their small transitive parameter closures and larger
transitive closures containing unrelated HF objects. Neither finite
domain is being represented as a model of ZF or as containing all HF.
The semantic theorem in §3, not the finite model tests, handles domains
with all HF and arbitrary infinite input sets.

Mutation tests reject missing coordinates, conflicting duplicate
coordinates, an out-of-domain coordinate, non-pair junk, four invalid
alphabet tags/payloads, a nonordinal variable payload, incorrect constant
parameters, two nonordinal candidate lengths, three invalid bounded-formula
shapes, and an explicitly nontransitive evaluation domain. Separate
tests accept finite ordinals 0 through 40 and compare Pair/OP against
independent set constructions, including degeneracies.

There are 16 negative checks. The tests also assert the exact free-variable
set `0,…,7`, and reject an extra field in a bounded-quantifier guard.
The selected formula code is 160,160 bits; all quantifiers pass the
boundedness check. There are 6 word examples, 12 transitive-domain
evaluations, 41 finite-ordinal checks, and 736 independent Pair/OP
comparisons. The graph-shape conjunction checks `OP` before the token
predicate, so failed coordinate candidates do not trigger an unnecessary
scan of an ordinal as though it might be a token pair.

A one-token variable-symbol word is deliberately **accepted** by Word
but **rejected** by the formula parser. This guards the main scope
boundary: being a finite alphabet word is not being a well-formed term
or formula, much less being a correctly recognized satisfaction table.

No proof-code soundness or uniform PA interpretation is claimed. The
formula builder and its boundedness/parser checks are explicit finite
syntax computations; a PA proof-code compiler still needs accepted
adapters for the displayed mathematical equivalences and their uniform
arithmetic identification.

## 5. What remains before interface I or an owner reopen

This closes the selected **finite-word typing** part of I(1)
mathematically, with executable formula checks. Still missing are the
internal parsing certificates, constructor/child-word and reindexing
relations, their soundness/completeness against the exact external
schedule, and the formula/arity enumeration agreement. Consequently
I(1) as a whole is not discharged. I(2)'s `Tab` formula, I(3)'s complete
table-recognition theorem, and I(4)'s exact Decode/order/unused-parameter
and empty-carrier interface are also not discharged. General Sat,
BRIDGE, SEP, reflection, GCH, and U-AX remain outside this artifact.

Only the new companion and this document are authored here. Read-only
executable imports are the annotated adapter and numerical decoder;
their SHA-256 values are respectively
`69a445ce740a45857ae840b4c6289fbcc1e2b27660102cc9a192f6d8a4858cb6`
and
`f83842c3a214ca807303654b34556b8662f61be7c3d4ee817dbd2dfc5f7a215a`.
No protected item, receipt, owner direction, controller, or run state is
changed, and no item acceptance/certification is asserted.
