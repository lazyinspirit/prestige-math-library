# Exact numerical subformula schedules and checked truth-set histories

Date: 2026-09-12 (Australia/Sydney).

The [executable companion](support-phase-2-next-17-subformula-truthset-history.mjs)
adds two bounded components:

1. A deterministic, independently checked subformula schedule for the exact
   numerical realization of the repository's completely delimited words.
2. An annotated ZF proof compiler for the finite existential history of truth
   sets assigned to that schedule, using the committed five truth-set operations.

The executable checks six actual proof histories, 181 parsing/schedule cases,
19 rejections, and 33 finite-environment comparisons. It is not an internal
set-word parsing theorem, a set-coded table H, a uniform Sat_m formula, or
Sat/BRIDGE. These distinctions are the principal interface constraints, not
qualifications to be dropped when the support is consumed.

Only this document and its executable are authored/committed by this lane.
No protected item, owner direction, live run, receipt, or controller is changed.
No batch-11 owner gate is reopened or certified by this research commit.

## 1. Preserved word grammar

The local contracts remain
[set-coded terms and formulas](../items/def-set-coded-terms-and-formulas.md),
[set signatures and finite syntax strings](../items/def-set-signature-and-finite-syntax-strings.md),
and [unique parsing](../items/lem-unique-parsing-of-set-coded-syntax.md).
For the pure membership signature, the existing numerical realization uses
tokens L(0,i) for variables, L(1,0) for membership, L(2,k) for constructors,
and L(3,k) for punctuation. The outer code of a word is the original
sentinel-list encoding of its complete token list.

The exact constructor equations consumed by this block are:

    term(i) = enc(con(0), tok(0,i)),
    rel(i,j) = enc(con(1), tok(1,0), term(i), term(j)),
    eq(i,j) = enc(con(2), term(i), term(j)),
    neg(f) = enc(con(3), word(f)),
    and(f,g) = enc(con(4), word(f), word(g)),
    exists(i,f) = enc(con(5), tok(0,i), word(f)).

Here enc retains the actual opening/closing delimiters and commas. Children
are inserted as complete words, never replaced by pointers or tree tags.
The variable field of exists is a token; atomic arguments are complete
variable-term words. The schedule producer consumes the committed decoder's
AST only after it accepts the original numerical word.

Every source index stays a BigInt; tests include 2^80+7. No source index is
converted to Number by the parser/scheduler/compiler. Numeric array positions
are used only for lengths or indices bounded by already allocated lists.
Finite semantic fixtures separately use the small indices 0 and 1.

## 2. Exact schedule certificate and independent check

The certificate is the sentinel list

    L(source, root, L(rows), L(index_payloads)),

and each row is

    L(full_word, constructor_tag, L(indices), L(children), L(spans)).

Constructor tags are 1=membership, 2=equality, 3=negation, 4=conjunction,
5=existential. A span is L(start,end) with exclusive end, measured in token
positions in the source word. Term subexpressions are parsed but are not
formula rows. `root` must be the final row.

Rows are ordered by first completion in a left-to-right postorder traversal,
deduplicated by their **entire numerical word**, not a hash or constructor
label. Children always refer to earlier rows. Repeated occurrences of the
same formula retain every occurrence span but share one row. Index payloads
include bound indices and are sorted and deduplicated numerically.

The producer calculates formula-child starts from the exact grammar:
negation starts its child at offset 3; conjunction starts the left child at
3 and the right at 4+left-word-length; exists starts its child at 5.

The verifier does not trust those offsets or the producer's occurrence list.
It scans the original token word with a bracket stack. At each closing
parenthesis it extracts the matching complete subword, asks the committed
decoder whether that subword is a formula, and records its first-completion
position and every occurrence. It checks that the supplied rows and spans
match this independently obtained inventory exactly.

It then checks each constructor's exact field arities/sorts, verifies all
children are earlier, and reserializes the constructor using their full
words and the supplied symbol fields. The resulting numerical word must
equal the row's word. It also checks that each child is strictly shorter,
the final row is the input word, and the index-payload inventory is exact.
Malformed sentinels, term-only roots, concatenated roots, missing/extra rows,
wrong occurrences, wrong fields, and cyclic/self references are rejected.

This establishes the numerical occurrence inventory and deterministic finite
subformula dependency schedule. It does **not** establish the same scan as
an internal pure-membership relation on arbitrary set-coded words. In
particular a child's set-coded word must be reindexed to domain 0,…,length−1;
it is not literally the parent graph restricted to an untranslated interval.
The span metadata alone does not prove that reindexing theorem in ZF.

## 3. Exact finite history endpoint

The compiler consumes only a schedule accepted by the preceding checker.
For the distinct source indices i₀<…<iₖ₋₁, it reserves external slots

    indexSlots(i_r) = v_(100+r).

For n schedule rows, output truth sets use slots

    R_t = v_(100+k+t),       0≤t<n.

All these slots exceed the internal binders of the imported truth-set
formulas and are disjoint. A=v₇₀ and D=v₇₁ retain their existing meanings.
The index slots are arbitrary set parameters: this compiler does not yet
identify them with quoted finite ordinals i_r. The returned `indexSlots`
mapping is the explicit future quotation obligation.

For row t, define F_t by specializing its literal
[truth-set operation](support-phase-2-next-17-satisfaction-truthset-operations.md)
as follows:

- Atomic equality/membership use the two protected index slots.
- Negation uses the truth-set slot of its one child.
- Conjunction uses the two child slots, allowing them to be identical.
- Exists uses its protected index slot, child truth-set slot, and A.
- Every operation uses the same bounding assignment set D.

Each F_t is the expanded equation

    ∀s(s∈R_t ↔ (s∈D ∧ φ_t(s))).

The compiler emits the universal closure over actual free parameters of

    ∃R₀ … ∃R_(n−1) (F₀ ∧ (F₁ ∧ … ∧ F_(n−1))).

The conjunction is right-associated and a singleton history uses F₀
without a dummy conjunction. The output is an ordinary formula in pure
membership/equality logic, not an extension by n new constant symbols.
The root truth set is the final output slot. No word key or table graph H
is claimed by this endpoint.

Deduplicating identical subformulas is valid for this construction because
each output is a truth **set over all assignments in D**. It is not one
Boolean value cached under the environment of the first occurrence. An
exists row applies its child truth set to updated assignments; repeated
variable binding therefore does not invalidate subformula sharing.

## 4. Primitive proof assembly and correctness argument

For each constructor kind used, the compiler copies the actual checked
unique-existence proof for its operation. The dependency importer rebases
only premise-index fields and preserves the numerical certificates and
variable/formula annotations. No theorem name is accepted as a new axiom.

UI specializes the operation's universally closed parameters to A,D,
protected index slots, and earlier output slots. The compiler projects
unique existence to ordinary existence by the annotated existential-mapping
program, then explicitly alpha-renames its output to R_t. It checks literal
equality with ∃R_t F_t. Because children precede t, the free output slots
of F_t all belong to earlier rows.

Starting with the conjunction of all F_t, a sequence of actual EI steps
introduces the history binders in reverse order. The compiler then removes
the provisional node equations in reverse schedule order. At each step it
curries the last equation, applies restricted EE in that row's output, and
uses the actual ∃R_t F_t proof. Earlier equations do not mention the later
output; the final history binds every output. EE's side condition therefore
holds. After the first row is discharged, only the existential history
remains; ordinary generalization closes its external parameters.

Induction on the schedule proves the dependency/freshness invariant, and
induction over this reverse elimination proves the displayed endpoint.
All local operation instantiations retain their actual canonical Separation
certificate. The compiled history does not assume the existence of an
evaluation table or of a recursive semantic function.

The schedule and proof programs have primitive-recursive finite-list
realizations: bounded token scans, finite dictionaries implemented by list
search, syntactic substitutions, and prefix proof transformations. Their
mathematical invariants can be expressed in PA using the established
coding definitions. This is a mathematical correctness argument for this
external finite compiler, not an executed uniform PA proof-assistant
derivation or the missing Prf_ZF(B(f),Bridge(f)) theorem. Concrete numerical
execution evidence is exactly the six programs in §5.

## 5. Executed checks

Run:

```bash
node research/support-phase-2-next-17-subformula-truthset-history.mjs
```

The six checked proof histories are:

| Source formula | Distinct nodes | Primitive lines | Sentinel bits | Original whole-integer check |
|---|---:|---:|---:|---|
| v₀=v₀ | 1 | 69 | 120,203,904 | yes |
| ¬(v₀=v₀) | 2 | 135 | 155,299,176 | yes |
| (v₀=v₀)∧(v₀=v₀) | 2 | 140 | 157,761,306 | yes |
| ∃v₀ ¬(v₀=v₀) | 3 | 210 | 501,561,354 | not attempted |
| (v₀=v₀)∧(v₀∈v₁) | 3 | 211 | 344,704,432 | yes |
| ∃v₁(v₀∈v₁ ∧ ∃v₁(v₁=v₁)) | 5 | 312 | 1,069,509,194 | not attempted |

All six pass the committed exact numerical-record verifier, with every
formula, annotation, certificate and record encoded as its actual BigInt.
The two largest skip the monolithic encoding under the test's explicit
500,000,000-bit resource threshold. That threshold is not an arithmetic
bound on the theorem or an assertion of V8's precise maximum. The existing
record transport changes only outer list acquisition; its kernel's full
line-validation body is unchanged. No complete original proof integer was
fed to the original checker for those two rows.

The 181 schedule tests cover every constructor, repeated child words,
bound-variable rebinding, and the index 2^80+7. Deterministic regeneration
produces identical certificate codes. Nineteen rejections comprise five
invalid source words, seven corrupted schedules, an invalid compiler input,
and an MP self-reference in each of the six proof histories.

Each history endpoint is reconstructed separately from its operation rows
and checked for sentencehood. Five small syntax trees over three finite
carriers yield 33 comparisons between schedule-based truth-set evaluation
and an independent recursive evaluator with environment maps. These include
the nontransitive carrier {1,2} and nested rebinding. The finite tests use
small environment arrays/maps, not an internal ZF satisfaction relation or
a finite model of ZF.

## 6. Remaining obligations before the intended batch-11 repair

The [assignment-universe theorem](support-phase-2-next-17-assignment-universe.md)
already supplies a D with ∀s(s∈D↔T(A,m,s)). The new history theorem can be
specialized to that D. Their combined existential theorem is a routine
further proof composition, but is **not** emitted as an additional numerical
proof by this artifact.

The next still-unproved interfaces are:

1. **Quotation and internal parsing.** Compile the finite E/P/U quotation
   histories for every protected ordinal and complete word key; prove their
   unique outputs, constructor identities, distinctness and reindexing.
   Supply a single expanded membership formula for the internal word scan
   and finite subformula closure, and prove agreement with this numerical
   schedule. The existing numerical decoder and this schedule do not prove
   that arbitrary constructible levels see those internal words correctly.
2. **Set-coded evaluation table.** Turn the finite existential truth-set
   history into a graph H keyed by the quoted subformula words. Compile exact
   domain, subset-value typing, functionality, and uniqueness. The current
   endpoint asserts history existence only; it does not emit a joint
   history-uniqueness theorem or a graph-assembly proof.
3. **One selected Sat_m formula.** Expand the actual finite-table definition
   with its internal parsing and assignment-universe predicates. Prove table
   existence/uniqueness and independence of auxiliary finite subformula sets,
   and discharge those witnesses in the recursive clauses. The previously
   checked conditional table-negation clause is only a local component.
4. **Bridge and owner obligations.** Identify the formula with the selected
   repository finite-tuple satisfaction convention, compile EVAL/VALUE and
   padding, then meet the remaining SEP/L-reflection/U-AX obligations. This
   artifact does not repair protected items or substitute for their exact
   proof contracts, dependency closure and engine adjudication.

Thus no batch-11 owner reopen or completion is warranted *solely* by these
files. They provide a checked numerical schedule and a compiled finite
truth-set existence history, reducing that part of the proof-construction
debt. They do not close full Sat/BRIDGE, general SEP, reflection, GCH or
U-AX, assert internal Infinity in Lω, or change consistency strength.

## 7. Read-only provenance

The truth-set operation supplier was committed as `f85e09bdc` when read.
Imported file SHA-256 observations:

| File | SHA-256 |
|---|---|
| `support-phase-2-next-17-satisfaction-truthset-operations.mjs` | `2bc9ed58ba5d47a9a492fba061e566e41b4a9a2b07e95a53f0c06997e8eb7d84` |
| `support-phase-2-next-17-update-tuple-preservation.mjs` | `31f46a0fb525b6b70492b93ea3de99b984908e33412186147b9c62c309fe565f` |
| `support-phase-2-next-17-update-existence-proof.mjs` | `56a635da58b1fcfc17a299eed03d6e0d32f446368f0415e8367733b275fdb620` |
| `support-phase-2-next-17-zf-axiom-operation-kernel.mjs` | `c75276e5bc2028a098a3e730feefe5654a22371e10765ad118566d66ef17d152` |
| `support-phase-2-next-17-kuratowski-proof-block.mjs` | `fe7d18bb4f91535327245132d428b3192b8855650d70944b9b531546f645c303` |
| `support-phase-2-next-17-annotated-separation-adapter.md` | `69a445ce740a45857ae840b4c6289fbcc1e2b27660102cc9a192f6d8a4858cb6` |
| `support-phase-2-next-17-numerical-logical-proof-decoder.md` | `f83842c3a214ca807303654b34556b8662f61be7c3d4ee817dbd2dfc5f7a215a` |

These are reproducibility observations, not engine receipts. The three
linked item IDs describe the intended local syntax; they are not imported
as unrecognized proof axioms. Existing support and protected items remain
unchanged. Rerun tests if any imported factory or checker changes.
