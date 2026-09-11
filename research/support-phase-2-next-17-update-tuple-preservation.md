# Exact ambient UPDATE preservation for typed graphs

Date: 2026-09-12 (Australia/Sydney).

The [executable companion](support-phase-2-next-17-update-tuple-preservation.mjs)
compiles the three typing/domain/functionality clauses and their combined
preservation theorem. Every emitted line is numerically checked. The larger
proofs use the kernel's unchanged record-checking loop with a record-array
input, not a successfully materialized single proof integer; §5 states this
host-resource distinction precisely.

This is research support, not an accepted item, PA proof-assistant certificate,
or engine receipt. Only these two new support files are authored by this lane.
No commit, live input, controller, owner direction, item, or state change is
made. Finite-word quotation and Sat/BRIDGE remain separate and open.

## 1. Exact formulas

Use the literal `update` predicate U and coordinate predicate C from the
committed [UPDATE coordinate block](support-phase-2-next-17-update-coordinate-proof.md):

    U(s,i,b,t) := ∀v₅₀(v₅₀∈t ↔
      ((v₅₀∈s ∧ ¬∃v₂₂ O(i,v₂₂,v₅₀)) ∨ O(i,b,v₅₀))),
    C(s,j,c) := ∃v₆₂(O(j,c,v₆₂) ∧ v₆₂∈s).

O is the same fully expanded relational Kuratowski predicate, with internal
v₂₄,v₂₅ and the unordered-pair membership binder v₃. It is not a new
function symbol or primitive relation.

The tuple definition is the exact three-clause contract already stated in
[the graph-removal interface, §5](support-phase-2-next-17-graph-removal-update-interface.md):

    Sh(A,m,s) := ∀p(p∈s → ∃j∃c(j∈m ∧ (c∈A ∧ O(j,c,p)))),
    Dm(A,m,s) := ∀j(j∈m → ∃c(c∈A ∧ C(s,j,c))),
    Fn(s) := ∀j∀c∀d((C(s,j,c) ∧ C(s,j,d)) → c=d),
    T(A,m,s) := Sh(A,m,s) ∧ (Dm(A,m,s) ∧ Fn(s)).

Binders are p=v₆₅,j=v₆₀,c=v₆₁,d=v₆₄. The parameters are
A=v₇₀,m=v₇₁,s=v₄₀,i=v₄₁,b=v₄₂,t=v₄₃. The hypothesis is exactly

    K := T(A,m,s) ∧ (i∈m ∧ (b∈A ∧ U(s,i,b,t))).

The four emitted endpoints universally close, in A,m,s,i,b,t order,

    K → Sh(A,m,t),
    K → Dm(A,m,t),
    K → Fn(t),
    K → T(A,m,t).

All displayed notation expands to equality, membership, negation,
conjunction, and existential quantification before encoding. Independent
endpoint tests reconstruct the three clauses without calling the tuple
factory, and check that the endpoints have no free variables.

Together Sh and Dm state exact domain m, not merely a lower bound on the
domain. Sh excludes non-pair junk, coordinates outside m, and values outside
A; Dm supplies a value at every element of m. Fn is a separate, actual
functionality condition, not inferred from sethood of s.

No finite-ordinal hypothesis is needed. For the finite-tuple use, the same
parameter m remains a finite ordinal if it was one before; this artifact
does not construct or quote that ordinal. No transitivity or nonemptiness
of A is assumed.

## 2. Compiled proof of graph shape

Fix p. UI on U says an element p of t is either retained from s or satisfies
O(i,b,p). UI on the old Sh supplies its existing typed witnesses in the
retained case. In the inserted case i∈m and b∈A give

    i∈m ∧ (b∈A ∧ O(i,b,p)).

Two explicit existential-introduction lines choose c=b and j=i, obtaining
the exact ∃j∃c body required by Sh. A numerical Boolean certificate joins
the two cases under K. Conditional generalization in p gives Sh(A,m,t).

This proof needs no ordered-pair existence assertion, since O(i,b,p) is
part of this case's antecedent. Its dependency-pruned proof has no
nonlogical axiom lines. It does not assert that U itself exists by logic.

## 3. Compiled domain and functionality proofs

The constructor locates and copies the actual proved open implication

    U → (C(t,j,c) ↔
      ((j=i ∧ c=b) ∨ (j≠i ∧ C(s,j,c))))

inside the committed coordinate proof. This intermediate line is already
a theorem with free variables, not a hypothesis or newly authorized axiom.
Its complete dependency closure is copied and premise indices are rebased.
Universal generalization in c followed by UI supplies the b and d
specializations, using the ordinary annotated rules.

For domain coverage, fix j∈m. If j=i, the specialized coordinate identity,
b=b, and b∈A give C(t,j,b), then EI with b supplies the new typed value.
If j≠i, an old witness c∈A∧C(s,j,c) transfers through the coordinate
identity. EI gives ∃c(c∈A∧C(t,j,c)); restricted EE removes the old witness.
This EE is legal because c is not free in K, j=i, or the existentially
bound target. Old Dm supplies that existential premise. A Boolean
case split and conditional generalization in j yield the new Dm.

For functionality, fix j,c,d with C(t,j,c) and C(t,j,d). If j=i, the two
coordinate identities give c=b and d=b. The actual equality-substitution
scheme, with reverse transport in the second equality, gives c=d. If
j≠i, both old coordinate relations hold and the three UI steps on old
Fn give c=d. Conditional generalization in d,c,j yields Fn(t).

Finally a checked Boolean certificate conjoins the three conclusions.
There is no theorem-name rule, first-order consequence oracle, assumption
stack, or unannotated witness selection.

The compiler avoids the O binders v₂₄,v₂₅,v₃, the U binders v₅₀,v₂₂,
and the C binder v₆₂ when introducing its outer witnesses. Its equality
placeholder v₉₉ is fresh. Numerical checking tests substitution capture,
EE's free-variable condition, and all earlier-premise references.

## 4. Boundaries and counterfixtures

The theorem is conditional on both i∈m and b∈A. These conditions are not
optional restrictions inferred from informal tuple language.

- For m=∅ the empty graph is a legitimate tuple; there is no i∈m.
  Inserting a pair creates an out-of-domain graph, not a zero-length tuple.
- A=∅ permits an empty-domain tuple, but supplies no b∈A and no typed
  tuple on a nonempty domain. No nonempty carrier is tacitly selected.
- Updating at an external i generally enlarges the graph's domain, violating
  Sh for the old m. Replacing with b outside A violates value typing and,
  at the replaced coordinate, typed coverage.
- If the existing value already equals b, the graph is unchanged: removal
  and insertion are set operations, not multiset operations.
- Several old values at i are all removed; this alone does not repair
  nonfunctionality at another coordinate. Junk entries are retained, so
  UPDATE does not repair a failed graph-shape hypothesis either.

The executable hereditary-finite-set fixtures check 108 typed updates, 54
reinsertion identities, four updates on the non-ordinal domain {2}, and
15 explicit boundary assertions. These fixtures use extensional canonical
set IDs, genuine Kuratowski pairs, and pair-component recognition; they
are finite semantic tests separate from, and not replacements for, the
compiled quantified proofs.

## 5. Numerical validation and outer serialization boundary

Run:

```bash
node research/support-phase-2-next-17-update-tuple-preservation.mjs
```

The dependency-pruned proof sizes are:

| Endpoint | Primitive lines | Exact outer sentinel bit length | Nonlogical lines |
|---|---:|---:|---:|
| Shape | 47 | 154,725,524 | 0 |
| Domain | 606 | 677,584,958 | 2 |
| Functionality | 606 | 671,605,690 | 2 |
| Combined preservation | 697 | 1,042,075,792 | 2 |

Every formula, annotation and complete record is encoded as the actual
BigInt used by the committed adapter. The complete combined outer proof
list exceeds V8's single-string limit. Therefore `numericalRecordVerifier`
reads the committed ZF kernel source and changes exactly the unique
`const records=D.list(proof);` acquisition to `const records=proof;`.
It removes module imports/exports and injects the same bindings and original
source URL to instantiate this research-only adapter. The remaining
verification body, including decoding each record and annotation, verifying
the numerical formula, fixed/schema certificates, all rule side conditions,
and the exact final numerical endpoint, is unchanged. Nothing edits the
committed kernel on disk or extends its axiom/rule collection.

The array is only an outer transport representation. Its members are not
trusted decoded formulas. The kernel still decodes and checks each numerical
record, including the complete numerical logical certificates. It rejects
an invalid record and an empty proof. Shape is also checked by the original
whole-integer `verifyZF`; its actual bit length agrees with the measured
length. The two transports agree on the small Pair proof, a wrong endpoint,
and an MP self-reference mutation.

For records r₀,…,rₙ₋₁ the original outer encoding's length is exactly

    2+n+Σₖ(1+2 bitlength(rₖ)).

Thus the table measures the literal sentinel encoding, not a replacement
Gödel numbering. Decoding the mathematically defined original list returns
these same records. Applying the identical verification loop therefore has
the same result. A single huge outer integer was **not** materialized or
fed to the original checker for the other three endpoints; this artifact
does not claim that host-level execution occurred.

Seven rejection tests cover an MP self-reference, illegal EE variable,
changed equality-substitution term, each of the two hypothesis-deleted
requested endpoints, a malformed numerical record, and an empty proof.
Both hypothesis deletions also have the semantic counterfixtures in §4;
endpoint rejection alone is not a proof of their mathematical necessity.
An unrelated prefixed and rebased combined proof is accepted.

Only fixed Extensionality and Pairing nonlogical certificates occur in
the combined proof. They enter through the selected coordinate equivalence
proof's ordered-pair existence dependency. No new Separation, Replacement,
Choice, Infinity, Union, Power Set, or Foundation instance is asserted here.
This does not change the separately proved UPDATE existence prerequisites.

## 6. PA-verification scope and remaining imports

The finite-line assembly and numerical trace use the existing primitive-
recursive syntax, substitution, certificate and earlier-line operations.
The usual finite-prefix induction verifies the emitted constants; the
sentinel-list encode/decode identities connect the outer transport to the
original arithmetic proof predicate. These give a mathematical PA
verification argument for these concrete traces. This is not an executed
PA proof-assistant derivation, a correctness proof for the JavaScript host,
a uniform interpretation of ZF, or a new assertion of its soundness.

The existing [UPDATE existence/uniqueness block](support-phase-2-next-17-update-existence-proof.md)
already provides the separate U witness and its uniqueness. Its conjunction
with this conditional typing theorem has the ordinary mathematical
consequence that an in-domain, in-carrier update is a unique typed graph.
An additional existentially closed composite of those two full numerical
proofs is not emitted by this artifact. No further mathematical premise is
needed for that composition, but it should not be reported as an executed
extra proof code.

The graph-UPDATE typing/domain/functionality implication is now compiled.
Finite ordinal quotation, set-coded word construction, the selected Sat_m
formula, all recursive satisfaction clauses, EVAL/VALUE/padding compilation,
Def, BRIDGE, general SEP/U-AX, reflection and GCH remain separate imports.
In particular this ambient result says nothing about internal satisfaction
or containment in L, and asserts no internal Infinity at Lω.

## 7. Read-only provenance

The coordinate module was committed as `67763944a` when read. SHA-256
observations for direct or transitive factories/checkers are:

| File | SHA-256 |
|---|---|
| `support-phase-2-next-17-update-coordinate-proof.mjs` | `bf2ce9f359bef03d5656a71497f51bd1b47d0109564496af7f8bf6f579144b09` |
| `support-phase-2-next-17-update-existence-proof.mjs` | `56a635da58b1fcfc17a299eed03d6e0d32f446368f0415e8367733b275fdb620` |
| `support-phase-2-next-17-kuratowski-proof-block.mjs` | `fe7d18bb4f91535327245132d428b3192b8855650d70944b9b531546f645c303` |
| `support-phase-2-next-17-zf-axiom-operation-kernel.mjs` | `c75276e5bc2028a098a3e730feefe5654a22371e10765ad118566d66ef17d152` |
| `support-phase-2-next-17-annotated-separation-adapter.md` | `69a445ce740a45857ae840b4c6289fbcc1e2b27660102cc9a192f6d8a4858cb6` |
| `support-phase-2-next-17-numerical-logical-proof-decoder.md` | `f83842c3a214ca807303654b34556b8662f61be7c3d4ee817dbd2dfc5f7a215a` |

These observations are not frozen workflow receipts. Any factory or kernel
change requires rerunning the executable. This proof is a local derivation
from the listed source files, not an import of an external theorem or an
invented item ID. Existing support documents remain unchanged and may
describe this once-open frontier historically.
