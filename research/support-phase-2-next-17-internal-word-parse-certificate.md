# A selected internal set-word parsing certificate

This research-only block selects and expands an actual pure-membership
formula recognizing well-formed formula words through a finite parsing
certificate. It proves the formula correct in transitive domains
containing all individual HF objects, and in successor constructible
evaluation levels. The executable evaluates the **expanded bounded
certificate matrix**, not a numerical parse substituted for internal
recognition.

This is the first complete internal **formula-word parser** in this
support chain, but it is not a truth-table or Decode block. In particular,
it does not discharge all of interface I in
[the stage-bounds support](support-phase-2-next-17-l-stage-bounds.md).
The published formula/arity enumeration agreement, `Tab`, `Decode`, and
the bridge to the selected finite satisfaction formula remain open. No
owner gate, item acceptance, or certification is asserted.

Companion:
[support-phase-2-next-17-internal-word-parse-certificate.mjs](support-phase-2-next-17-internal-word-parse-certificate.mjs).
It generates and numerically parses the literal defining formulas and
checks finite semantic examples. It does **not** emit numerical ZF
proofs of the uniform parsing theorem or a PA proof of compiler
correctness. Keep this distinction from the separately committed
[quotation-existence proof constructor](support-phase-2-next-17-set-word-quotation-existence.md).

## 1. Selected formula and representation

Use `Word`, `FinOrd`, bounded `OP`, and exact `Graph` from the committed
[internal finite-word predicate](support-phase-2-next-17-internal-finite-word-predicate.md).
They are genuine bounded pure-language formulas, not new primitive
predicates admitted to the proof checker. The companion expands them.

The free variables of the certificate matrix are exactly:

    w:0, c:1, q:2, K_0:3, …, K_12:15.

`K_0,…,K_12` are constrained to be the finite ordinals 0 through 12 by
the same Empty/successor equations as before. All bound variables are
allocated freshly, starting at slot 100. The selected formula is

    Parse(w,c,q,K),

where `q` is a nonempty finite ordinal and `c` is a flat graph on `q`.
Each value of `c` is a flat 12-tuple with exactly these fields:

| Position | Field |
| ---: | --- |
| 0 | complete set-word `u` of this subexpression |
| 1 | its finite length `m` |
| 2 | constructor tag `t` (0 term, 1 membership, 2 equality, 3 negation, 4 conjunction, 5 existential) |
| 3 | variable payload `v` for terms/existentials, otherwise 0 |
| 4, 5 | left and right child row indices |
| 6, 7 | first child interval endpoints `a,b` |
| 8, 9 | second child interval endpoints `d,e` |
| 10, 11 | first and second child position-map graphs `g,h` |

Unused fields are exactly zero. Term rows have no children. Atomic rows
have two **term** children; negation, conjunction, and existential rows
have **formula** children. Every used child index is a member of the
parent index, not merely a different natural number.

`Coord(s,i,F)` is the following bounded abbreviation:

    ∃p∈s ∃r∈p ∃v∈r (OP(i,v,p) ∧ F(v)).

With the exact graph hypothesis this reads the unique coordinate and
does not silently choose among conflicting entries. `Fields` is nested
application of this abbreviation at fixed field indices. All row and
certificate graph-shape/totality/functionality assertions are included
in `Parse`; they are not assumptions omitted from the checker.

The corresponding one-free-variable formula is literally

    IsFormula(w) := ∃c ∃q ∃K_0 … ∃K_12 Parse(w,c,q,K).

`internalParseCertificateFormula()` and `internalFormulaPredicate()`
return these exact ASTs. The matrix is bounded; the existentially closed
predicate is not claimed to be bounded.

## 2. Explicit subword reindexing without internal arithmetic

Write `a≤b` for `a=b∨a∈b`, where the relevant sets are finite ordinals.
`Segment(u,m,v,n,a,b,g)` asserts:

1. `a≤b≤m`.
2. `g` is an exact graph on `n`, with every value `x` satisfying
   `a≤x` and `x∈b`.
3. Every `x∈b` with `a≤x` occurs as a value of `g`.
4. If `i∈j` are in `n`, their values under `g` satisfy `g(i)∈g(j)`.
5. At each `i∈n`, `v(i)=u(g(i))`, using the bounded `Coord` formula.

The graph and coordinate expansions make every quantifier bounded by a
named set or a component of a named set. In context, both words have
their exact finite lengths. Thus `g` is the unique increasing bijection
from `n` to the interval `[a,b)`. In ordinary external arithmetic,
`b=a+n` and `g(i)=a+i`, by induction on `i<n`. Conversely that actual
finite shift graph satisfies the formula. This proves exact substring
reindexing. No internal ordinal-addition function or global sequence
universe is assumed.

The shift graph is an explicit field of the supplied certificate; it is
not an unavailable witness hidden in the interpretation of concatenation.
The witness is HF even when the containing transitive domain has no
general pairing or collection axiom.

## 3. Complete local constructor tests

Every row asserts `Word(u,m,K_0,…,K_5)` and these initial tokens:

    u(0)=⟨3,0⟩,  u(1)=⟨2,t⟩,  u(2)=⟨3,2⟩.

They are opening parenthesis, constructor, and comma. Let `v` be the
payload field. The remaining conditions are exactly:

| Kind | Exact conditions in addition to the common prefix |
| --- | --- |
| term, tag 0 | `m=5`, `FinOrd(v)`, `u(3)=⟨0,v⟩`, `u(4)=⟨3,1⟩`; all fields 4–11 are zero |
| membership, tag 1 | `v=0`, `u(3)=⟨1,0⟩`, `u(4)=⟨3,2⟩`; two term children on `[5,b)` and `[d,e)`, `d=b+1`, `m=e+1` |
| equality, tag 2 | `v=0`; two term children on `[3,b)` and `[d,e)`, `d=b+1`, `m=e+1` |
| negation, tag 3 | `v=0`; one formula child on `[3,b)`, `m=b+1`; fields 5,8,9,11 are zero |
| conjunction, tag 4 | `v=0`; two formula children on `[3,b)` and `[d,e)`, `d=b+1`, `m=e+1` |
| existential, tag 5 | `FinOrd(v)`, `u(3)=⟨0,v⟩`, `u(4)=⟨3,2⟩`; one formula child on `[5,b)`, `m=b+1`; fields 5,8,9,11 are zero |

Each child interval is enforced by its `Segment` formula and its actual
child row word/length. “`x=y+1`” in the table is the bounded `Succ(y,x)`
formula, not a term in the object language. In binary cases the token at
`b` is comma and at `e` closing parenthesis. In unary cases the token at
`b` is closing parenthesis. Therefore the prefix, child intervals,
separators, and closing token cover **every** position of the exact word
domain. There is no untested suffix or gap.

These clauses are precisely the delimited serialization in
[terms and formulas](../items/def-set-coded-terms-and-formulas.md), with
the same numerical adapter token meanings. No de Bruijn-index syntax or
alternate tuple representation is introduced. The underlying grammar
reference is
[Moschovakis, Lecture Notes in Logic, §1B](https://www.math.ucla.edu/~ynm/lectures/lnl.pdf);
the repository's
[unique-parsing lemma](../items/lem-unique-parsing-of-set-coded-syntax.md)
supplies the exact local delimiter argument.

## 4. Global matrix and correctness proof

In addition to the constants, finite domain, exact row graphs, and every
local constructor clause, `Parse` asserts:

- Distinct row indices have distinct complete words.
- The last row (`Succ(i,q)`) has word `w` and nonzero constructor tag.
- Every other row is a used child of some later row. For membership,
  equality, and conjunction either child field counts; for negation and
  existential only the left child counts. Unused zero fields do not
  create incoming edges.

**Soundness in the universe.** Since `FinOrd(q)` is the exact finite
ordinal predicate, perform external induction on `i<q`. A term row has
exactly its variable-term serialization. For an atomic row, both earlier
children are terms by their tags and the induction hypothesis; their
shift graphs and literal tokens give exactly the required atom. The
three formula constructors follow identically, with the required sorts.
The interval argument in §3 excludes extra symbols. Thus every row is
an actual term or formula with exactly the indicated constructor and
children. The last row is a formula whose word is `w`.

The incoming-edge condition implies every row is a descendant of that
last row. Starting at any nonlast index, repeatedly choose a later
parent; a strictly increasing chain in finite `q` must reach the last
index. Reverse this chain to obtain a path from the root. Conversely
every immediate child is present, and iterating this fact includes all
subexpressions. Distinct words remove duplicate rows. Hence the rows
are **all and only** the distinct actual subexpression words of `w`,
not a finite superset with unrelated valid rows. The formula rows alone
are exactly its distinct subformula words.

The local unique-parsing lemma ensures that another accepted certificate
has the same constructor/payload and immediate-child **words** for every
row. It may use another topological ordering of its row indices; Parse
does not claim uniqueness of that ordering or of the complete certificate.
The increasing interval maps themselves are uniquely determined once
the word and child boundaries are fixed.

**Completeness in the universe.** Given an actual formula, traverse its
finite syntax tree, including variable terms, in child-first order.
Deduplicate by the entire serialized word. For each first-completed
subexpression, make its exact 12-tuple with the displayed literal
boundaries and increasing shift graphs. The source formula is last.
Every other row is a child of some later row; shared/repeated words use
the same row. All local and global clauses now hold directly. This is
the executable producer `parsingCertificate`; it has no unbounded
proof search. Its projection to formula rows matches the existing
[external subformula schedule](support-phase-2-next-17-subformula-truthset-history.md).

All certificate components are HF: the source tree is finite, every
variable index is an actual finite ordinal, and words, fields, shifts,
and row graphs are finite Kuratowski constructions. In particular,
there is a supplied finite parsing certificate, not a collection of
all syntax trees assumed to exist internally.

## 5. Weak transitive domains and successor evaluation levels

For a transitive set `M` containing `w,c,q,K`, bounded absoluteness gives

    M ⊨ Parse(w,c,q,K)  iff  Parse(w,c,q,K) actually holds.

The premise does not say `M` satisfies ZF, internal Infinity, pairing,
replacement, or the finite sentence W from the history stream. Its
transitivity alone supplies all members traversed by bounded quantifiers.
The exact `FinOrd` formula prevents a spurious infinite “finite” parse.

Now suppose `M` contains all individual HF objects. If `M ⊨ IsFormula(w)`,
its actual witnesses satisfy Parse by the preceding equivalence, so
`w` is an actual formula word by soundness. If `w` is an actual formula
word, completeness constructs an HF certificate and HF parameters, all
in `M`; hence `M ⊨ IsFormula(w)`. This proves

    M ⊨ IsFormula(w)  iff  w is an actual formula word,

for `w∈M`. For a particular formula, completeness needs only the specific
finite witnesses, not all HF closure as a global assumption.

Consequently the same statement holds in every `L_θ` with `θ≥ω`, including
successor levels. Every parsing certificate in this artifact is already
in `L_ω`; there is **zero additional stage overhead** above an infinite
ambient base. This meets the syntax-recognition part of both weak-domain
and successor-domain demands in interface I. It does not assume a
successor `L_θ` is globally pairing-closed, and applies at `L_ω` without
internal Infinity.

It does not internalize truth-set rows. Their separate `η+4` placement
and the full word-to-row table's `η+7` placement from the history stream
remain separate mathematical facts. No extra packing of those large
objects into this all-HF parsing certificate is implicit.

## 6. Executed validation

Run:

    node research/support-phase-2-next-17-internal-word-parse-certificate.mjs
    node --check research/support-phase-2-next-17-internal-word-parse-certificate.mjs

The matrix serializes to a 3,285,536-bit numerical formula code; its
existential closure to 3,288,192 bits. Both independently parse to their
literal ASTs. Every matrix quantifier is syntactically bounded. Exact
free-variable sets are checked: slots 0–15 for the matrix, only 0 for
IsFormula.

Five certificates are accepted: equality, membership, negation,
conjunction with a repeated subformula, and an existential/conjunction
example with a shadowed variable. Their row counts are 2,3,3,3,7. Each
is evaluated in two distinct transitive finite parameter domains (10
checks). All five projections to formula rows agree with the existing
external schedule. These finite domains are not models of ZF; the
mathematical theorem, not the tests, handles arbitrary weak domains.

Thirteen negative checks reject a self-child, wrong constructor tag,
wrong child start, absent shift, nonmonotone shift, wrong variable
payload, reversed child words, a duplicate/nonformula final row, wrong
closing boundary, an otherwise valid but **unreachable** term row,
wrong root word, invalid numerical input, and a term presented as the
source formula. The verifier evaluates the expanded membership matrix
against the mutated HF certificate; it does not merely rerun the
producer and compare arrays.

The finite HF interner materializes ordinal sets using safe JavaScript
integer indices. The producer therefore rejects out-of-range variable
payloads instead of rounding them; runtime and memory also bound actual
executions. Those host limits are not restrictions in the selected
membership formula, whose `FinOrd` payload clause admits every actual
finite ordinal. The completeness argument describes the unrestricted
finite mathematical construction, not a claim that this JavaScript
process can materialize every such certificate.

These are no more and no less than exact formula/finite semantic
checks. A uniform numerical ZF proof compiler for the theorem would
still need accepted adapters for bounded OP/graph equivalence, finite
ordinal arithmetic, finite induction over certificates, substring
construction and word uniqueness, plus its code-level PA correctness
argument. This artifact supplies none of those as an unexamined axiom.

## 7. Interface I and owner-readiness accounting

- **Supplied mathematically:** selected pure-language finite-word and
  formula-word recognition; explicit HF parsing certificates; exact
  child-word reindexing; all-and-only distinct subexpression coverage;
  soundness/completeness in both transitive HF-containing domains and
  successor `L` evaluation levels.
- **I(1) still partly open:** the published formula/arity-number
  enumeration and unused-parameter convention have not been connected
  to this selected parser. The certificate is allowed any valid
  topological order; a consumer needing the canonical external span
  inventory must prove that additional exact relation.
- **I(2)–I(4) remain open:** select and verify the single `Tab` formula
  using this parser; assemble actual truth-row graphs and prove the
  five recursion clauses and table independence; define and verify the
  exact Decode/arity/parameter/empty-carrier/order interface.
- **Formal consistency remains separate:** quotation uniqueness,
  numerical proof adapters, VALUE/padding, BRIDGE, full SEP, finite
  L-interpretation, reflection/GCH, and U-AX are not closed here.

Therefore the complete interface I and batch-11 owner prerequisites
remain held. This file does not duplicate or modify the other stream's
hierarchy/order-history bookkeeping.

## 8. Read-only provenance

| Import under `research/` | SHA-256 |
| --- | --- |
| `support-phase-2-next-17-annotated-separation-adapter.md` | `69a445ce740a45857ae840b4c6289fbcc1e2b27660102cc9a192f6d8a4858cb6` |
| `support-phase-2-next-17-numerical-logical-proof-decoder.md` | `f83842c3a214ca807303654b34556b8662f61be7c3d4ee817dbd2dfc5f7a215a` |
| `support-phase-2-next-17-internal-finite-word-predicate.mjs` | `f81ac34c62344a2c28336f9530086465a13fde9dd6e1d45e802d2ad892a5225f` |
| `support-phase-2-next-17-subformula-truthset-history.mjs` | `19afbb738a4ad8e65bc3e55ec45c8bba30c2f363e69cb7352293ed0d3db58f4e` |

Only this document and its companion are new authored paths. Existing
support factories are read-only. No item, owner direction, receipt,
controller, or live run input/state is changed or certified.
