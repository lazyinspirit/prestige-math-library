# Checked guarded schema translation: first verified proof families

Date: 2026-09-12. Research-only support for the formal L-interpretation chain.
The [executable](support-phase-2-next-17-guarded-schema-transformer.mjs) adds:

- total syntactic translation of arbitrary canonical Separation and
  Replacement certificates into exact raw and guarded relativizations;
- an actual annotated proof compiler for `Sep(z=z,z)` and
  `Rep(w=z,z,w)`, valid for **every** supplied one-free-variable domain formula;
- a total fail-closed finite-axiom-list proof-code transformer for those two
  families, including dependency pruning, rebasing, and repeated endpoints.

The Replacement identity family is new. The Separation identity family
reimplements the earlier checked pilot through the current BigInt numerical
kernel and exact canonical schema recognizer. No arbitrary L-Separation or
L-Replacement proof constructor is claimed. In particular, **a total syntax
translator is not a total proof supplier for every translated axiom**.

No fixed expanded formula defining constructibility is silently selected.
This family is parameterized by an actual numerical domain formula d with
`FV(d)⊆{v_0}`. Any later L application must instantiate its chosen D and
establish D's intended meaning. All items, manifests, owner receipts, and
controller state remain unchanged.

## 1. Literal numerical contract

The imported kernel uses the existing sentinel list encoding and original
delimited membership-language words. It recognizes certificates

    L(1,num(phi),z)       for canonical Sep(phi,z),
    L(2,num(phi),z,w)     for canonical Rep(phi,z,w), z≠w.

`translateSchema(d,c)` rejects malformed domain/certificate/formula codes and
domain formulas with another free parameter. For a valid certificate it
reconstructs the source sentence with the kernel's exact fresh variables,
uniqueness clause, free-variable ordering, and abbreviation expansion. It
then checks that exact source code against `axiomCertificate`.

Replacement's fresh uniqueness variable is selected locally from the matrix
and output variable, exactly as the existing kernel requires. It may coincide
with a bounding variable used elsewhere in the source sentence. The
implementation does not silently strengthen this freshness convention.
An independently written test for `Rep(v_1=v_0,0,1)` checks this case: the
uniqueness binder and outer bounding variable are both v_2, in distinct
appropriate scopes.

For the whole source sentence reserve bound-variable indices for d strictly
above every source and domain index. Rename d's binders with lexical scope
preserved; even a binder of its designated v_0 is treated correctly. All
copies D_i use that common normalized body, changing only its free v_0 to
v_i. Separate copies may share their internally bound names without capture.
Indices remain BigInt throughout, including the tested `2^80+7` input.

With that fixed hygiene convention, raw translation is literally

    τ(eq(i,j)) = eq(i,j),       τ(in(i,j)) = in(i,j),
    τ(¬φ) = ¬τ(φ),             τ(φ∧ψ) = τ(φ)∧τ(ψ),
    τ(∃v_i φ) = ∃v_i(D_i ∧ τ(φ)).

Universals, implications and biconditionals are expanded into this primitive
syntax **before** translation. The algorithm does not replace their outputs
by merely logically equivalent guarded-universal formulas.

For an open matrix phi the output also includes its translated matrix and
its guarded translation `G(phi)→τ(phi)`. G is the right-associated
conjunction of D_i in increasing free-index order; the empty guard is
`top=∀v_0(v_0=v_0)`. For the universally closed schema sentences the guard
is always this top. Output fields `rawCode`, `guardedCode`, `matrixRawCode`,
and `matrixGuardedCode` retain these distinctions.

Structural induction verifies free-variable preservation and correct
relativization: atomic variables are unchanged; Boolean constructors commute;
at a binder the only newly free index before binding is its own source
index, since the other domain indices are bound and fresh. The finite-word
parser, not an informal expression string, determines the input tree.

## 2. A new proof family: Replacement of the identity relation

Take phi(z,w) to be `w=z`. Let a,b be the canonical fresh bounding/output
variables. The translated image equation for a candidate b is

\[
 \neg\exists w\bigl(D_w\land\neg(w\in b\leftrightarrow J(w,a))\bigr),
 \qquad
 J(w,a)=\exists z\bigl(D_z\land(z\in a\land w=z)\bigr).
\]

We prove its b=a instance without using the Replacement antecedent.
For `D_w ∧ w∈a`, equality reflexivity gives `w=w`; existential introduction
with witness z=w gives J(w,a). Conversely, equality substitution gives

    w=z → (z∈a → w∈a).

The emitted primitive scheme uses the matrix `¬(v_h∈a)` at fresh h and a
Boolean contraposition rearrangement, so it does not rely on an undeclared
symmetry rule. Ignore the extra D_z conjunct and apply the actual restricted
existential-elimination rule in z, obtaining `J(w,a)→w∈a`. The consequent
has no free z, because z,w,a are distinct.

Boolean combination now gives `D_w→(w∈a↔J(w,a))`. The NEX macro below
therefore derives the displayed universally restricted image equation at
b=a. Under D_a, existential introduction chooses b=a, yielding

    D_a → ∃b(D_b ∧ translated-image-equation(b)).

Thus the whole translated Replacement implication follows by Boolean
weakening, whatever its translated totality/uniqueness antecedent says.
NEX closes the outer a binder. The implementation reads that antecedent
from the actual canonical source AST, preserving all its literal uniqueness
binders and guarded quantifiers, and checks exact equality of the produced
endpoint with raw τ(Rep(w=z,z,w)).

Why arbitrary D is allowed: the image equation is tested only at w in D.
Even if a has members outside D, using a itself as b gives exactly the same
membership tests on D. No transitivity, closure under subsets, nonemptiness,
sethood of the domain class, or constructibility assumption is needed.

## 3. Primitive proof rules and the Separation pilot

All proofs contain **logical records only**. The compiler imports no
nonlogical ZF axiom, model assumption, or named theorem as a premise.
It uses the committed Boolean, EI, equality-substitution and reflexivity
schemes, MP, generalization, and restricted existential elimination.

From a proved negation `¬A`, the NEX macro derives `¬∃x A` by:

1. Generalize to `∀x¬A`, literally `¬∃x¬¬A`.
2. Lift the Boolean implication `A→¬¬A` through ∃x using EI and restricted
   elimination, obtaining `∃x A→∃x¬¬A`.
3. Apply propositional reasoning to obtain `¬∃x A`.

The double-negation bridge is necessary for the literal universal
abbreviation; it is not omitted as an informal normalization.

For `Sep(z=z,z)`, reflexivity proves the separating equation with witness
b=a. NEX restricts the tested z quantifier, D_a permits the same b=a
witness, and another NEX closes a. This preserves the previously specified
pilot's exact raw endpoint. A final Boolean weakening supplies `top→τ(A)`
when the caller requests the guarded schema sentence.

The mathematical uniform correctness argument is the displayed fixed
sequence of proof macros with their checked variable conditions: hygiene
makes each substitution free-for, z does not occur in the Replacement
elimination consequent, and each NEX elimination has a bound consequent
variable. No matrix-specific proof search is performed.

## 4. Totality, finite-list assembly, and unsupported inputs

`schemaProofCode(d,c,guarded)` returns the numerical proof code for a
supported certificate, and zero for malformed inputs or other matrices.
Its richer `schemaProof` wrapper also returns records, exact endpoint, and
translation data. There are exactly two implemented mathematical families:

    tag 1 with phi literally Eq(z,z);
    tag 2 with phi literally Eq(w,z).

Logically equivalent matrices are not silently admitted by a semantic test.
They would require their own checked proof bridges. Unsupported valid schema
certificates still have a legitimate syntax translation; they do not acquire
a fabricated proof merely because translation succeeds.

`schemaBatchProofCode(d,cs,guarded)` takes a numerical sentinel list of
certificates, not an arbitrary first-order derivation. Any malformed,
unsupported, or empty list returns zero; no partial prefix is represented
as a proof of the requested final axiom. For a supported nonempty list,
the existing dependency-closure importer copies the actual needed records,
rebases only premise references, and can reuse identical prior theorem lines.
A final logical identity use ensures the requested last translated axiom is
the final record even when its previous proof was reused.

Induction on copied records proves the assembly invariant: all original
axiom annotations are unchanged, each MP/generalization/elimination reference
points to an earlier record of the same formula, and each requested endpoint
has a recorded index. This proves validity of assembly given the per-instance
proofs; it is not a generic translator for arbitrary source inference rules.

These are fixed finite recursion and syntax/record-copying algorithms, not
unbounded searches for ZF proofs. Their natural-number algorithms are total
with the stated defaults; ordinary JavaScript memory/stack limits still
constrain very large executable inputs. No polynomial size bound is asserted.

## 5. Executed checks

Run:

```bash
node research/support-phase-2-next-17-guarded-schema-transformer.mjs
```

The run checks 96 general Sep/Rep translations, including bound-variable
shadowing, unused designated variables, fresh-name collisions, closed/false
domain formulas, and 80-bit variable indices. Source endpoints for the two
basic schemas are independently written, not merely builder/recognizer
round trips. Translated open matrices preserve their free-variable lists.
An independent recursive finite semantics checks all 16 binary relations on
two elements for each translated sentence: 1,536 comparisons with the source
sentence evaluated over the domain selected by D. Empty-domain cases use
the literal vacuous quantifier clauses, not an assertion that an empty
structure is a model of ZF. None of these finite relational structures is
represented as a set-theoretic model.

Twelve full proof integers pass the **original** `verifyZF` numerical
verifier. Eight core output sizes are:

| Domain | Schema | Raw lines / bits | Guarded lines / bits |
|---|---|---:|---:|
| `v_0=v_0` | identity Separation | 31 / 58,914,492 | 33 / 59,140,864 |
| `v_0=v_0` | identity Replacement | 42 / 44,947,106 | 44 / 45,369,046 |
| `∃v_1(v_0∈v_1)` | identity Separation | 31 / 62,083,052 | 33 / 62,328,128 |
| `∃v_1(v_0∈v_1)` | identity Replacement | 42 / 45,723,378 | 44 / 46,196,950 |

Four additional raw Replacement proofs check a false domain, a domain with
its own rebinding of v_0, different small designated indices, and the
`2^80+7` designated index. The mixed/repeated three-certificate batch has
71 lines and 103,923,840 bits and also passes the original whole-integer
verifier. No record-array-only exception is used.

Ten negative checks reject: malformed domain; extra free domain parameter;
unknown certificate tag; coincident Replacement designated indices;
unsupported matrix; unsupported member of a batch; empty batch; MP
self-reference; an illegal EE variable; and a wrong requested endpoint.
The EE mutation rebuilds its conclusion using the changed variable, so it
actually tests the free-variable side condition rather than only formula
equality. Executable and syntax checks pass with exit zero.

## 6. Exact remaining formal-interpretation obligations

This increment does not provide the requested complete L-axiom proof
transformer. The substantial missing obligations remain:

1. Select an actual expanded pure-membership D defining the intended L
   domain, with the exact code and proof of its intended interpretation.
2. Construct and verify arbitrary L-Separation certificates, including the
   syntax-recursive reflection/Def argument. Applying the ambient Separation
   tag to τ(phi) does not prove that the resulting subset belongs to L.
3. Construct arbitrary L-Replacement certificates: actual rank-bound and
   uniqueness reasoning, followed by the appropriate verified Separation
   application. The identity case avoids these obligations and cannot be
   substituted for them.
4. Supply all remaining fixed translated ZF axiom proofs and the generic
   guarded logical-rule translator with substitution/alpha-conversion
   bridges, then compose a transformer for arbitrary finite source proofs.
5. Prove totality and acceptance **inside the selected arithmetic base and
   its actual representations**, not merely by running these finite tests.
   No executed PA proof object or completed uniform PA invariant is supplied
   by this artifact. The fixed macros' mathematical correctness is distinct
   from that internalized statement.
6. Supply the independent translated AC/GCH blocks and the GCH proof
   obligations before claiming a reduction from ZFC+GCH. Nothing here
   addresses those blocks or the separate Cohen-forcing application.

Accordingly no held owner gate becomes reopenable from this commit. The
work provides a verified first proof-transformer slice and exposes unsupported
schema matrices deterministically, without changing the promised strength
of any original theorem.

## 7. Reproducibility inputs

The executable reuses the committed formula constructors, exact schema
builders, assembler, and record serializer by extracting their identified
source sections, and imports the unchanged numerical verifier and dependency
copier. It does not rewrite or weaken the verifier. These source identities
were checked before this support commit:

| Input | SHA-256 |
|---|---|
| `support-phase-2-next-17-zf-axiom-operation-kernel.mjs` | `c75276e5bc2028a098a3e730feefe5654a22371e10765ad118566d66ef17d152` |
| `support-phase-2-next-17-annotated-separation-adapter.md` | `69a445ce740a45857ae840b4c6289fbcc1e2b27660102cc9a192f6d8a4858cb6` |
| `support-phase-2-next-17-numerical-logical-proof-decoder.md` | `f83842c3a214ca807303654b34556b8662f61be7c3d4ee817dbd2dfc5f7a215a` |
| `support-phase-2-next-17-update-existence-proof.mjs` | `56a635da58b1fcfc17a299eed03d6e0d32f446368f0415e8367733b275fdb620` |

If these sources change, rerun the proof checks and reconsider any affected
literal-coding claim. These recorded hashes are evidence, not engine receipts.
