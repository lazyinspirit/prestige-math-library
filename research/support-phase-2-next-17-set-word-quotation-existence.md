# Checked E/P/U quotation existence, with successor-level interface

This is a research-only prerequisite, not an item repair or certification.
The executable companion is
[support-phase-2-next-17-set-word-quotation-existence.mjs](support-phase-2-next-17-set-word-quotation-existence.mjs).
It supplies an annotated proof constructor for the **unchanged** finite
E/P/U quotation formula. Six concrete traces, including the quotation of
ordinal 2, pass the actual numerical ZF checker. It does not yet supply an
internal set-word parser, quotation uniqueness proof, quoted truth-table
graph, uniform Sat formula, BRIDGE, SEP, reflection, GCH, or U-AX. No
batch-11 owner gate changes on the strength of this artifact alone.

## 1. Exact interface and syntax

The input is a nonempty array `h` of instructions `['E']`, `['P',a,b]`,
or `['U',a]`. Every operand is an earlier node number. An arbitrary valid
root `r` selects the result; unused nodes are still quantified and proved.
There are no externally supplied set-valued inputs. `E` denotes the empty
set, `P` the unordered pair, and `U` union. Multiple empty nodes and
repeated operands are permitted. `traceDepth` rejects malformed opcodes,
arities, roots, and non-earlier references before proof assembly.

For output variable `e`, allocate every node variable `u_j` first, in
order, above all source variable indices and `e`; then allocate each row's
bound variables monotonically. The exact rows are

    E(u)   := ∀t ¬(t∈u)
    P(a,b,u) := ∀t (t∈u ↔ (t=a ∨ t=b))
    U(a,u) := ∀t (t∈u ↔ ∃v (v∈a ∧ t∈v)).

Write `R_j` for the selected row and associate conjunctions to the right.
The literal target is

    ∃e Q_h,r(e),
    Q_h,r(e) := ∃u_0 … ∃u_(n−1)
                (R_0 ∧ (… ∧ (R_(n−1) ∧ u_r=e))).

This is obtained from `quoteTrace` in the existing
[finite-word templates](support-phase-2-next-17-finite-word-satisfaction-templates.md),
not an alpha-equivalent replacement. The implementation checks that its
independent row decomposition reconstructs that formula exactly. Tests
also build the final endpoint literally without calling `quoteTrace` or
reusing the compiler's row list.

`quotationExistence(h,r,e=90n,sourceIndices=[])` returns annotated proof
lines and the endpoint. The adapter deliberately requires `e≥90`; this
makes every generated row variable greater than all fixed imported
operation binders/parameters (2, 3, 10–13). It does not claim support for
the historical quotation API's entire low-slot domain. Source indices
are nonnegative BigInts and need not be small or contiguous. A checked
test uses a source index `2^80` and preserves the next binder exactly.

`wordQuotationExistence(f,e)` parses the **numerical** word, uses the
existing set-word trace builder, and invokes this constructor. A token
`L(k,j)` becomes the Kuratowski set pair `⟨k,j⟩` of finite von Neumann
ordinals; a word becomes the graph `i↦⟨k_i,j_i⟩`. Numerical sentinels are
unchanged: zero is invalid; `L()` is 2. The token's numerical list code
is not substituted for its set-theoretic Kuratowski representation.

The wrapper's full formula-word output has **not** been numerically
checked end-to-end in this artifact: its much longer proof would exceed
the bounded test budget. The finite set-word graph checks described below
are separate from numerical proof acceptance. This limitation must not
be hidden by calling all five word examples “checked quotation proofs.”

## 2. Annotated construction and uniform invariants

For each row, import the existing unique-existence operation proof,
specialize its input parameters, project existence, and rename its
existential output to `u_j`. These are actual copied and rebased proof
records, not operation-shaped assertions admitted under a new axiom tag.

The row adapter then changes the operation proof's fixed binder to the
fresh historical quotation binder. Empty and Pair need universal
instantiation followed by conditional generalization. Union additionally
uses both directions of

    ∃x B(x) ↔ ∃y B(y),

where `y` is fresh: existential introduction with witness `x`, followed
by existential elimination of `x`, supplies one implication, and the
reverse construction supplies the other. A Boolean composition changes
the Union biconditional, and conditional generalization closes its outer
membership variable. This explicitly avoids treating alpha-conversion
as an unrecorded equivalence.

Let `C=conj(R_0,…,R_(n−1),u_r=e)` and `G=∃e Q_h,r(e)`.

1. Repeated existential introductions give `C→G`.
2. Generalize over `e` and instantiate it by `u_r`; `e` is bound in `G`.
   Reflexivity and the recorded conjunction-association lemma give
   `conj(R_0,…,R_(n−1))→G`.
3. Eliminate row witnesses in reverse order. At stage `j`, curry the
   implication to `R_j→(conj(R_0,…,R_(j−1))→G)`, apply existential
   elimination in `u_j`, then use the already proved `∃u_j R_j`.
   No earlier row contains `u_j`; `G` has no free variables. Hence the
   elimination side condition holds, even for an unused row or a root
   that is not last.
4. Extract the dependency closure, rebase references, and retain the same
   final formula. No theory-strengthening occurs during extraction.

Associativity is itself a small proof constructor. It proves
`(conj(xs)∧z)→conj(xs appended with z)` by induction on the nonempty list
`xs`. Each local Boolean certificate has at most four opaque atoms. In
the two-element base transition the composite `tail∧z` is deliberately
expanded; treating that composite as an independent opaque atom would
produce an invalid certificate. The same precaution applies at the
one-row and two-row final discharges. Thus the compiler does not ask for
an exponential truth table with all trace rows as independent atoms.

These equations give a uniform finite syntactic correctness argument:
induct on trace length for valid operand slots and row existence; on
conjunction length for association; and on the reverse elimination count
for the endpoint invariant. All substitutions have explicit freshness
bounds. Imported operation proofs are fixed constants; Boolean
certificates, substitutions, dependency traversals, list encodings, and
bounded loops have primitive-recursive numerical presentations. PA can
formalize these finite inductions for the previously specified coding.

This executable uses JavaScript arrays, recursion, and BigInts, not a PA
proof assistant or a literally unbounded arithmetic machine. In
particular, JavaScript resource limits are not counterexamples to the
mathematical primitive-recursive presentation. We do **not** present an
encoded PA derivation of its fully expanded global compiler-correctness
sentence. The remaining arithmetic import is the exact code-level
identification of this constructor and its helper equations with that
presentation, followed by the stated induction, before using a uniform
`PA ⊢ Prf_ZF(QuoteExist(h,r,e), code(∃e Q_h,r(e)))` assertion as a formal
owner dependency. Numerical tests are not a substitute for that import.

The current Empty proof uses the separately recognized fixed Infinity
axiom; the retained operation proofs also use Extensionality. Pair and
Union use their actual fixed tags. This is an **ambient ZF proof**, not a
proof that an arbitrary `L_α` satisfies Infinity. No stronger Power Set,
new Separation instance, or Replacement instance is silently inserted.

## 3. Executed checks

Run from the repository root:

    node research/support-phase-2-next-17-set-word-quotation-existence.mjs
    node --check research/support-phase-2-next-17-set-word-quotation-existence.mjs

An optional case name, for example `ordinal-2`, restricts the numerical
trace-proof tests. The finite representation and malformed-input checks
still run.

| Trace | Nodes | Proof lines | Complete proof-code bits |
| --- | ---: | ---: | ---: |
| Empty | 1 | 97 | 9,989,880 |
| Singleton of empty | 2 | 175 | 47,367,456 |
| Union of empty | 2 | 182 | 33,402,446 |
| Kuratowski pair of zero with zero | 4 | 256 | 83,482,162 |
| Ordinal 1 | 4 | 308 | 97,634,302 |
| Ordinal 2 | 7 | 472 | 200,180,474 |

Every listed endpoint passes both numerical record-array verification
and the original **whole integer** `verifyZF` check. The record-array
transport changes only the outer list decoder; it retains the same line
and axiom checks. The companion uses a conservative 500,000,000-bit
threshold for packing a complete code; all six examples are below it.

There are 32 rejected mutations/malformed inputs: each proof rejects a
self-referencing modus-ponens premise, a wrong endpoint, an unsupported
fixed axiom tag, and an altered universal-instantiation witness; eight
additional cases reject malformed traces, a forbidden low output slot,
or an invalid numerical formula word. A separate huge-binder example
passes numerical record verification.

An independent extensional finite-set interner verifies ordinal quotes
0 through 20 and five complete formula-word graphs, with **109 exact
coordinates**. It checks the graph against an independently assembled
set of Kuratowski pairs and checks each trace operation. It is not a
finite model of ZF and does not evaluate the quotation formula's
unbounded quantifiers in a truncated universe.

## 4. Ambient-level and finite-overhead contract

The following is a mathematical compatibility argument, **not** an
emitted numerical proof of an `L` theorem. It uses the usual transitivity
and successor-Def facts; these are established in the local
[constructible-level proposition](../items/prop-constructible-levels-transitivity-ordinals-and-rank.md).
The primary reference is Stefan Geschke's
[Models of Set Theory, §§5.1–5.2](https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf),
with the repository's explicit empty-level convention from
[Def](../items/def-definable-subsets-of-a-membership-structure.md).

For a transitive `L_β`, empty, unordered pairing of members, and union of
a member are subsets definable over `L_β`, so belong to `L_(β+1)`.
For any nonzero ordinal `α`, set

    d(E)=1, d(P(a,b))=max(d(a),d(b))+1, d(U(a))=d(a)+1.

Induction gives the value of node `j` in `L_(α+d_j)`. The executable
reports both the selected root depth and the **maximum over all rows**;
the latter is the correct common-witness bound for `Q`. No limit-level
assumption is needed. Because every trace here has no set-valued inputs,
all its values are hereditarily finite; every fixed trace and all its
witnesses already lie in `L_ω`.

The displayed E/P/U formulas are absolute between a transitive ambient
set and the universe when their input/output sets belong to it. For
Union, its existential witness is a member of the given input, hence is
already in the transitive ambient set. Pair and Empty are immediate by
the same membership argument. Consequently the fixed quotation formula
has its intended witnesses in any containing transitive level. This
argument does not relativize the imported Infinity proof to that level.

Here is the exact match with the other stream's proposed fixed-stage
contract. Let `η` be infinite (successor **or** limit), `A∈L_η`, and `m`
an external finite ordinal. Let `T(A,m,s)` be precisely the flat tuple
predicate in the committed
[assignment-universe artifact](support-phase-2-next-17-assignment-universe.md).

- Each `i<m` and each `b∈A` is in `L_η`. A Kuratowski pair `⟨i,b⟩` is
  in `L_(η+2)`, and its finite graph is in `L_(η+3)`.
- `T` is absolute for these parameters over `M=L_(η+3)`: graph-pair
  witnesses and their components are in `M` by transitivity; coverage
  restricts coordinates to `m` and values to `A`; every functionality
  counterexample would already be made of components of graph members.
  Thus `{s∈M:T(A,m,s)}` is exactly the external assignment universe and
  belongs to `L_(η+4)` by Def.
- For each **fixed external** subformula `ψ`, its row can be defined over
  `M` using `T`, the required coordinate values, and the hygienic
  relativization `ψ^A`. The row belongs to `L_(η+4)`. This uses a different
  externally selected defining formula for each `ψ`; it does not assert
  a uniform internal satisfaction predicate.
- A fixed word quote is in `L_η`. Pairing such a word with its row takes
  two successor steps from `η+4`; collecting finitely many such pairs
  takes one more. The finite word-to-row graph is in `L_(η+7)`.

These bounds include `η=ω` without internal Infinity. The set-existence
and graph bounds also allow `A=∅` and `m=0`; ordinary nonempty-structure
satisfaction keeps its own nonemptiness hypothesis. An adequate `m`
must still exceed every variable index used by the selected formula.
The ambient Power-Set-based proof of assignment-universe existence is
**not** the proof of the `η+4` bound; the independent Def construction
above is essential. This file neither adds to nor certifies the other
stream's stage-history bookkeeping.

## 5. Exact remaining imports

The existing [external subformula schedule and history compiler](support-phase-2-next-17-subformula-truthset-history.md)
is not internalized merely by having `∃e Q_h,r(e)`.

1. **Quotation determinacy and components:** compile the literal
   `Q_h,r(e)∧Q_h,r(e′)→e=e′` after freshening both witness blocks;
   specialize it to ordinal, token, and word quotes; prove their exact
   coordinate/domain clauses. Extensional operation uniqueness gives a
   mathematical induction, but its long existential/equality adapters
   have not been emitted here.
2. **Internal grammar agreement:** select the exact set-language formula
   for formula-word well-formedness, immediate children, variable
   payloads, occurrences, and child-before-parent scheduling. Then prove
   each numerical schedule certificate is realized by the corresponding
   quoted sets. The local
   [unique-parsing lemma](../items/lem-unique-parsing-of-set-coded-syntax.md)
   and the numerical schedule verifier alone are not those proof records.
3. **Quoted history assembly:** use the existing operation-history
   existence outputs to construct a finite graph keyed by quoted words,
   prove functionality, and verify each actual coordinate link and the
   exact set-coded schedule/table clauses. `R_j` row existence is not a
   proof of a single graph `H` with those properties.
4. **Internal Sat recognition:** state one selected defining formula,
   establish table existence and independence/uniqueness, and prove its
   recursive clauses. The already checked conditional table-negation
   interface still needs its actual graph-link hypotheses discharged.
5. **Owner-level bridge:** prove VALUE and padding/coincidence against the
   selected Sat formula; integrate the code-level PA correctness import
   from §2; then complete the finite `L`/Separation/Replacement and
   remaining reflection/GCH/U-AX interfaces. None follows from this
   bounded quotation constructor alone.

## 6. Read-only provenance

All imports are existing support code read without edits. These are the
exact SHA-256 values used while authoring and testing this artifact:

| Imported file (all under `research/`) | SHA-256 |
| --- | --- |
| `support-phase-2-next-17-annotated-separation-adapter.md` | `69a445ce740a45857ae840b4c6289fbcc1e2b27660102cc9a192f6d8a4858cb6` |
| `support-phase-2-next-17-numerical-logical-proof-decoder.md` | `f83842c3a214ca807303654b34556b8662f61be7c3d4ee817dbd2dfc5f7a215a` |
| `support-phase-2-next-17-finite-word-satisfaction-templates.md` | `f67bba8156a99066f2ddac92981d038aeebadc340e69679ef4f330cf7b4a5a29` |
| `support-phase-2-next-17-zf-axiom-operation-kernel.mjs` | `c75276e5bc2028a098a3e730feefe5654a22371e10765ad118566d66ef17d152` |
| `support-phase-2-next-17-kuratowski-proof-block.mjs` | `fe7d18bb4f91535327245132d428b3192b8855650d70944b9b531546f645c303` |
| `support-phase-2-next-17-update-existence-proof.mjs` | `56a635da58b1fcfc17a299eed03d6e0d32f446368f0415e8367733b275fdb620` |
| `support-phase-2-next-17-update-tuple-preservation.mjs` | `31f46a0fb525b6b70492b93ea3de99b984908e33412186147b9c62c309fe565f` |

The companion extracts the existing documented factories read-only.
It does not alter the fixed-axiom certificate recognizer, proof checker,
parser, protected item inventory, owner direction, or run state. The
source-level factory extraction is provenance-sensitive and should be
revalidated if any listed import changes.
