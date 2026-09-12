# Step 7 owner mathematical adjudication: logic and complexity

Scope: local adjudication of three current repaired items against their latest
rejudge objections. This is owner assistance, not a new judge verdict, a gate
approval, or a whole-dependency-closure audit. Item files, contracts and shared
workflow receipts were not edited by this reviewer. The cited local supplier
definitions and statements were read; the fixed-calculus argument below was
checked directly. No external source retrieval is claimed.

## lem-no-recursive-bound-covers-all-recursive-unary-languages

Reviewed file SHA-256: `9738f0c5a10fa4a0dec57619c73309a8dbe5854f05a48d63e2f5980d0a1f3501`.

Latest rejected carrier: `9cd5c89259c33c6087764882e6cb63706b17b15e2ca0450262da17fc94ccdfa3`.
The objection was the attribution of variable-arity parsing to a supplier that
only provided a two-tape code and simulation.

Disposition: repair resolves the objection; no remaining substantive local gap
found. The current proof supplies its own finite numeric serialization and
finite validity checks. It claims effectiveness only, so there is no hidden
efficient-simulation requirement. Enumerating all binary strings contains a
code for every fixed finite-tape nondeterministic machine. Invalid codes may
denote a fixed rejector without harming coverage. Encoding metadata within the
advertised finite fields is sufficient for a computable parser; no uniqueness
across machine descriptions is needed.

The repeated triple enumeration places each machine and integer multiplicative
constant at unbounded lengths. The bounded finite computation-tree search
terminates because branching and its computed depth are finite. The two-case
diagonal contradiction correctly handles bounds applying only to members,
arbitrary finite exceptional lengths, and zero values of the recursive bound.
In particular, an empty depth still tests the initial state, and an assumed
recognizer's bound supplies the contradiction on a length declared a member.
The inspected acceptance-time definition has exactly this shortest-accepting-
branch convention. No two-tape normalization or choice assumption is needed.

## thm-tqbf-pspace-completeness-interface

Reviewed file SHA-256: `f41b70285854b5e3eb497a1441f97f545a473c547ddce2923c17fc2e777ac4f6`.

Latest rejected carrier: `2446929ee0822a82b6f6a7eff0a16215b880950f0378fe10343f887c6d178e3a`.
The objection was that equisatisfiability alone did not license the asserted
pointwise gate extension or quantified DNF conversion.

Disposition: repair resolves the objection; no remaining substantive local gap
found. Step 7.1 now writes the local NOT and AND gate clauses and specifies OR
by duality. Direct checking shows that each clause family enforces precisely
its gate equation. Induction in the acyclic gate order gives a unique assignment
satisfying all gate equations for each old-variable assignment. Adding the
output unit admits that assignment exactly when the old formula is true. This
proves the necessary pointwise existential equivalence, which remains valid
under any old quantifier prefix. Applying the same construction to the negated
matrix gives the pointwise universal equivalence with the negated CNF; De Morgan
then gives terms of width at most three. No unjustified uniform choice of gate
values before the old quantifiers occurs.

The main completeness proof also checks out locally: the fixed number of tapes
makes the explicitly enumerated one-step formula polynomial; the special target
has exactly the required reachability meaning; the universally selected halves
use one copy of the preceding reachability formula; both midpoint implications
hold, including invalid encodings; and the simple-path bound makes the recursion
depth polynomial. The fresh-variable prenex operation preserves size and truth.
The supplied all-tape space convention is respected by first enlarging the space
bound above the input length. The auxiliary logspace generation claim separately
excludes input/output storage and uses polynomially bounded, constantly many
counters for a fixed machine. Supplier inspection confirms the stated machine
and formula conventions.

## thm-formal-consistency-of-zfc-plus-gch-from-zf

Initially reviewed file SHA-256: `c3f7848c93ce3ffc5bf4c450a0ed49c0370371d81c9b1cc2caa0b65d07c21672`.

Latest rejected carrier: `2739e860a90b5926179ad70a86a54f4cac9e555da9af57f5ff6d28543a4f13de`.
The objection was the missing reflexivity interface. That specific repair is
sound: the directly declared formal-derivation definition has the logical axiom
`t=t`, and its existential-introduction and restricted elimination rules suffice
with Boolean reasoning to build the finite contradiction block.

One further endpoint clarification was requested from the owner before closure.
The general interpretation definition translates atomic equality through
domain-valued term graphs, while step 1.1 calls the simpler direct relativization
the literal translated endpoint. The finite-fragment supplier stipulates a raw
relativization convention, but an endpoint-safe proof should work directly with
the exact translated atom rather than identify two syntactically different
formulas without an explicit block.

Recommended repair: write the exact translated contradiction as
`top → exists v (D(v) and not A(v))`, with `A(v)` the translator's fixed output
for `v=v`. In the literal convention it is `v=v`. In the term-graph convention
it existentially quantifies two domain values equal to `v` and to each other.
Under `D(v)`, choose both witnesses equal to `v`; reflexivity, conjunction
introduction and existential introduction prove `A(v)`. Boolean reasoning and
restricted existential elimination therefore refute the existential matrix.
The fixed empty guard is a theorem. Append this finite block and explosion to
the supplied PA-verified proof translation. The append map and shifted fixed
references are primitive recursive, and PA can verify the finitely many added
line templates uniformly. The stated consistency-transfer supplier then gives
the claimed PA implication without a model-existence assumption.

The upstream finite-fragment translator's asserted uniform PA verification was
read as a supplier interface; this local review does not independently establish
all of its constructibility and proof-compiler prerequisites.
