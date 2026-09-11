# A checked composite Kuratowski-pair block

Date: 2026-09-12 (Australia/Sydney).

Isolated research support, not an accepted item or workflow receipt. The
[executable proof constructor](support-phase-2-next-17-kuratowski-proof-block.mjs)
emits ordinary annotated membership-language proof lines and checks their
sentinel numerical encodings with the existing
[ZF kernel](support-phase-2-next-17-zf-axiom-operation-kernel.md).
No existing support factory, live input, controller, item, or state is edited.

The bounded result is ambient ordered-pair existence, uniqueness, and
injectivity. It does not prove graph update, satisfaction clauses, any
L-relativization, reflection, GCH, BRIDGE, SEP, or U-AX.

## 1. Exact formulas and endpoints

Use the kernel's literal unordered-pair predicate

    P(a,b,u) := ∀v₃(v₃∈u ↔ (v₃=a ∨ v₃=b)).

All ∀, →, ↔, ∨ symbols are expanded before comparison or serialization.
Let C(a,b,p,r,s)=P(a,a,r)∧(P(a,b,s)∧P(r,s,p)), with the displayed
right association. Define

    O(a,b,p) := ∃v₂₄∃v₂₅ C(a,b,p,v₂₄,v₂₅).

Every occurrence is a pure membership formula; ordered pairs are not new
terms, and O is not a primitive predicate or certificate tag. Interfaces
a=v₂₀,b=v₂₁,p=v₂₂,q=v₂₃,c=v₃₀,d=v₃₁ are all outside the internal
v₃,v₂₄,v₂₅ binders. The code's exact two closed endpoints are:

    ∀a∀b ∃p(O(a,b,p) ∧ ∀q(O(a,b,q)→q=p));               (OP-UNIQUE)

    ∀a∀b∀p∀q∀c∀d
      ((O(a,b,p) ∧ (O(c,d,q) ∧ p=q)) → (a=c ∧ b=d)).   (OP-INJECTIVE)

This is the relational rendering of (a,b)=(c,d) implying a=c and b=d.
OP-UNIQUE has the displayed q=v₂₃ uniqueness binder, not a claim that the
canonical schema's ∃! abbreviation chooses that index. These are derived
theorems, so their names do not modify the axiom certificate policy.

The endpoint tests build both formulas separately from the theorem
construction and compare them literally. They do not only check that the
constructor agrees with its own last-line variable.

## 2. Actual imports and primitive proof assembly

The program imports `operationProof('pair')` and `verifyZF` from the
committed kernel. It copies all 39 lines of the returned Pair proof at the
start of its new proof, with their original earlier-line indices intact.
It does not turn the final Pair theorem into a nonlogical axiom.

The imported proof already contains an intermediate endpoint

    (P(v₁₀,v₁₁,v₁₂) ∧ P(v₁₀,v₁₁,v₁₃)) → v₁₃=v₁₂.

The constructor locates this **exact formula** in that actual checked
prefix, generalizes its four free variables, and later instantiates it.
This supplies the reusable unordered-pair functionality proof. Failure to
find the endpoint stops construction; no theorem-name lookup is accepted
by the numerical checker.

Only two nonlogical axiom certificates occur anywhere: the existing fixed
Pairing and Extensionality certificates. No Separation, Replacement,
Infinity, Choice, completeness, or set-theoretic soundness premise is used.

All other operations emit the kernel's six logical schemes or three rules:

- UI: a scheme-2 line with its literal free-for substitution, then MP.
- EI: scheme 4, retaining its body, variable and variable-term annotation.
- CG: generalization, restricted distribution (scheme 3), and MP; the
  generalized variable is absent from the context's free-variable list.
- EE: rule 9 with its earlier premise index and checked absence condition.
- EM: EI, propositional composition, and EE.
- Equality transport: scheme 6 with placeholder v₉₉, fresh for the fixed
  interfaces, and the exact two substituted formulas.
- PC: a Boolean skeleton/substitution-list axiom followed by MP lines.

PC combines multiple supplied premises through a balanced conjunction
tree. Each conjunction introduction is the fixed tautology
A→(B→A∧B); a final Boolean axiom derives the requested conclusion from
the conjunction. This avoids an unnecessarily deep nested-implication
certificate under the sentinel encoding. Complete quantified subformulas
and explicitly named interface subformulas may be Boolean letters. Their
substitution reconstructs the literal formula, and the numerical checker
still checks every Boolean valuation; no tautology test is waived.

The returned objects retain every primitive annotation. The new document
does not contain any rule allowing arbitrary first-order consequences to
be inserted as PC lines.

## 3. Existence: three real Pair witnesses

The imported closed Pair theorem is instantiated at the required inputs.
EM projects away its uniqueness conjunct; an explicit one-direction EA
proof renames its existential witness. This gives actual proof endpoints

    ∃r P(a,a,r),  ∃s P(a,b,s),  ∃p P(r,s,p),

where r=v₂₄,s=v₂₅,p=v₂₂. The last is a theorem with r,s free, not an
open premise silently generalized.

Let G=∃p O(a,b,p). Three EI lines, introducing s, then r, then p,
give C(a,b,p,r,s)→G by PC. Curry this to

    P(r,s,p) → ((P(a,a,r)∧P(a,b,s))→G).

EE in p is permitted: p is absent from the consequent's free variables.
MP with ∃p P(r,s,p) yields (P(a,a,r)∧P(a,b,s))→G. Curry and
eliminate s using its actual existence theorem, then eliminate r using
its existence theorem. The endpoint is exactly G. This is finite witness
assembly, not an appeal to “closure under composite operations.”

## 4. Uniqueness: align the three unordered pairs

Use r=v₂₄,s=v₂₅ for the first code and t=v₂₆,u=v₂₇ for the second.
Under

    J=C(a,b,p,r,s)∧C(a,b,q,t,u),

the imported functionality theorem first gives t=r from the two singleton
predicates and u=s from the two doubleton predicates. Two scheme-6
transports turn P(t,u,q) into P(r,s,q). Functionality applied to
P(r,s,p) and P(r,s,q) then gives q=p. Every statement under J is a
proved implication J→F, not a new unchecked assumption.

The next section explains the exact witness elimination and binder
alignment used for both uniqueness and injectivity. It yields

    (O(a,b,p)∧O(a,b,q))→q=p.

PC curries this; CG in q gives O(a,b,p)→∀q(O(a,b,q)→q=p).
Conjoin the retained O(a,b,p), apply EM in p, and combine with existence.
Generalizing b then a gives OP-UNIQUE. No value is selected uniformly from
an arbitrary indexed family; there is no use of AC.

## 5. Fully annotated injectivity argument

Now let the first component pair use a,b and the second c,d, and assume
in the implication context

    J=C(a,b,p,r,s) ∧ (C(c,d,q,t,u) ∧ p=q).

The code projects the six P predicates and p=q from J. Each use of a
pair's element clause is a real UI line followed by PC. Reflexivity and
that clause give each required element's membership. The ensuing finite
argument is as follows.

### First coordinate

1. Since r∈p and p=q, equality substitution gives r∈q. The outer pair
   clause gives r=t or r=u.
2. The second singleton/doubleton clauses give c∈t and c∈u. In either
   equality case, transport gives c∈r. Since r={a}, this gives c=a;
   the explicit equality symmetry derivation gives a=c.

Reverse equality transport is derived, not assumed: scheme 6 for ¬F gives
x=y→(¬F(x)→¬F(y)), and PC gives x=y→(F(y)→F(x)). Symmetry itself
uses scheme 6 on F(h)=(h=x), equality reflexivity, and PC. No additional
equality rule is introduced.

### Second coordinate, including degenerate pairs

3. The same outer transport gives s∈q, hence s=t or s=u. Since b∈s,
   the first case gives b=c and the second gives b=c or b=d. Thus
   b=c or b=d. Using a=c, transport gives b=a or b=d.
4. In the reverse direction u∈q and p=q give u∈p, hence u=r or
   u=s. Since d∈u, the first case gives d=a and the second gives
   d=a or d=b. Thus d=a or d=b.
5. If b=d, the conclusion is already obtained. If d=b, equality symmetry
   gives it. The remaining propositional case has b=a and d=a; reverse
   equality transport on F(h)=(b=h) gives b=d. A PC certificate combines
   these cases, then conjoins a=c with b=d.

The Boolean reasoning in steps 2–5 is compiled into the actual skeleton
certificates present in the output and checked numerically. In particular
the proof does not assume a≠b or c≠d. The singleton/doubleton coincidences
that make Kuratowski pairs delicate are covered by step 5.

## 6. Existential elimination and exact binder alignment

The first implication context contains r,s only in its first C clause.
Curry that clause to the left and use EE in s, then r; neither variable
is free in the remaining consequent. Reorder the implication so the second
C clause is to the left, and use EE in u, then t. This produces a theorem
using O(a,b,p) and the fresh-binder copy

    O'(c,d,q)=∃v₂₆∃v₂₇ C(c,d,q,v₂₆,v₂₇).

The final endpoint must instead use the chosen O with v₂₄,v₂₅. The
constructor supplies O(c,d,q)→O'(c,d,q): first rename its inner v₂₅
binder to v₂₇ using EI and EE; propagate through the outer existential
using EM; then rename that outer v₂₄ binder to v₂₆. PC composes the two
implications. The chosen new names occur nowhere in the original body.

Combining this explicit bridge with the implication obtained after witness
elimination gives the exact endpoint with O in both places. Universal
generalization in d,c,q,p,b,a order gives the displayed closed injectivity
sentence. The checker compares its literal code, not an alpha-equivalence
class.

## 7. Arithmetic verification claim and tests

The sentinel producer and numerical ZF checker are reused read-only.
The arithmetic implementation uses finite-list copies, fixed finite
macro programs, formula substitution with verified absence conditions,
and Boolean skeleton rebuilding. The concrete program generates two
particular finite proof codes: the OP-UNIQUE prefix and the complete
OP-INJECTIVE proof. PA-total representations of these fixed operations
therefore permit the closed arithmetic judgments

    PA ⊢ Prf_ZF(q_unique,a_unique),
    PA ⊢ Prf_ZF(q_injective,a_injective).

The proof is the same finite checked-prefix argument as the operation
kernel: every import is a copied checked line, every reference points
earlier, every macro unfolds to its stated scheme/rule cases, and the
last code has the independently specified endpoint. For Boolean
subformula slots, structural induction proves that rebuilding the
skeleton gives the emitted formula; direct Boolean valuation establishes
the displayed fixed patterns. Balanced premise conjunction preserves the
same implication at every node. This is a mathematical arithmetic
verification argument, **not an executed PA proof-assistant artifact** or
a claim about the truth of all ZF theorems.

Run from the repository root:

```bash
node research/support-phase-2-next-17-kuratowski-proof-block.mjs
```

The tests numerically check both complete proof encodings and compare
their endpoints with separate literal formula constructions. Mutations
must be rejected for: an illegal fixed axiom certificate; an MP
self-reference; a changed equality-substitution term; an existential
elimination variable free in its consequent; and a wrong requested final
endpoint. A rejection means the actual numerical checker returned false,
not merely that a producer assertion noticed a changed object.

Recorded final run: **230 lines / 103,595,490 bits** for the
OP-UNIQUE prefix, **560 lines / 360,090,374 bits** for the complete
OP-INJECTIVE proof, and five rejected mutations. Both separate endpoint
constructions and sentencehood checks pass; the only nonlogical labels
are fixed Extensionality and Pairing. The EE mutation also rebuilds the
purported conclusion to match its changed variable, isolating the actual
forbidden-free-variable condition rather than just a stale formula string.

The proofs deliberately retain the imported Pair prefix in the complete
injectivity derivation. The injection statement does not logically require
every earlier existence line, but harmless earlier theorems are permitted
in this calculus. No proof minimization or feasible-size guarantee is
claimed. Deep sentinel nesting initially exceeded the host string limit;
balanced Boolean certificate construction made whole-proof checking
possible without changing the checker or accepted calculus.

## 8. Provenance and remaining boundary

Read-only imported-file SHA-256 values at this authoring checkpoint:

| File | SHA-256 |
|---|---|
| `support-phase-2-next-17-zf-axiom-operation-kernel.mjs` | `c75276e5bc2028a098a3e730feefe5654a22371e10765ad118566d66ef17d152` |
| `support-phase-2-next-17-annotated-separation-adapter.md` | `69a445ce740a45857ae840b4c6289fbcc1e2b27660102cc9a192f6d8a4858cb6` |
| `support-phase-2-next-17-numerical-logical-proof-decoder.md` | `f83842c3a214ca807303654b34556b8662f61be7c3d4ee817dbd2dfc5f7a215a` |

These are provenance observations, not frozen workflow receipts. Any
change to imported factories requires rerunning the tests. No new item
ID is invented or imported as a proof axiom.

The mathematical comparison is the relational Kuratowski definition in
[Paulson, §4.1](https://arxiv.org/html/2104.12674v1#S4.SS1), read in the
preceding kernel investigation. Its representation and implementation
are not used as this repository's proof codes. The injectivity argument,
all annotations, and the numerical tests here are local constructions.

The next absent block is still the graph-update theorem and its exact
tuple/coordinate clauses. Existence of an ordered pair and its injectivity
do not supply those clauses automatically. Finite-word constructor/formula
membership, the selected Sat_m formula and recursive clauses, EVAL/VALUE/
padding proof compilation, and all L-specific reflection/Def work remain
open. No graph-update, satisfaction, relativized-L, GCH, reflection, U-AX,
consistency-strength, or controller-transition conclusion is licensed by
this bounded operation proof.
