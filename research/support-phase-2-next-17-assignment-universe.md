# Checked assignment universe with exact tuple membership

Date: 2026-09-12 (Australia/Sydney).

The [executable companion](support-phase-2-next-17-assignment-universe.mjs)
compiles and numerically verifies, for arbitrary sets A and m,

    ∃!D ∀s(s∈D ↔ T(A,m,s)).

T is exactly the committed graph-shape/domain/functionality predicate.
No finite-ordinal quotation is needed: the theorem holds for any set domain
m, so in particular for each finite m required by finite-tuple satisfaction.
The unique universe D may be empty. Its existence is not an assertion that
there is a function from m into A when A is empty and m is nonempty.

This is research support, not an accepted item or an engine certificate.
It closes the assignment-universe prerequisite identified in
[the truth-set operations document, §6](support-phase-2-next-17-satisfaction-truthset-operations.md).
It does not define uniform Sat_m or close Sat/BRIDGE, general SEP/U-AX,
reflection, GCH, or any batch-11 owner gate. Only the new executable and this
companion document are authored and committed by this lane, as explicitly
requested; no live/controller/owner/item/state input is changed.

## 1. Literal endpoint

Use the [committed tuple predicate](support-phase-2-next-17-update-tuple-preservation.md):

    T(A,m,s) := Sh(A,m,s) ∧ (Dm(A,m,s) ∧ Fn(s)),
    Sh(A,m,s) := ∀p(p∈s → ∃j∃b(j∈m ∧ (b∈A ∧ O(j,b,p)))),
    Dm(A,m,s) := ∀j(j∈m → ∃b(b∈A ∧ C(s,j,b))),
    Fn(s) := ∀j∀b∀c((C(s,j,b) ∧ C(s,j,c)) → b=c).

O is the literal Kuratowski relation with internal witnesses v₂₄,v₂₅ and
unordered-pair membership binder v₃; C uses its unchanged v₆₂ witness.
Sh has p=v₆₅,j=v₆₀,b=v₆₁; Dm uses v₆₀,v₆₁; Fn uses v₆₀,v₆₁,v₆₄.
No object-language function term, numeral, Cartesian-product symbol, or
new primitive graph predicate appears in the emitted formulas.

The external slots are A=v₇₀,m=v₇₁,D=v₇₂,V=v₇₃,s=v₄₀. Define

    E(D) := ∀v₄₀(v₄₀∈D ↔ T(A,m,v₄₀)).

The two final endpoints are exactly

    ∀v₇₀∀v₇₁ ∃v₇₂ E(v₇₂),
    ∀v₇₀∀v₇₁ ∃v₇₂(E(v₇₂) ∧ ∀v₇₃(E(v₇₃) → v₇₃=v₇₂)).

The test independently rebuilds Sh,Dm,Fn and E rather than obtaining its
expected endpoint from the `tuple` or `assignmentUniverse` factories.
All endpoints are checked to have no free variables.

## 2. A bounded carrier without assuming exact power sets

Let Pair and Union be the exact relational definitions from the committed
operation kernel. The following are expanded abbreviations:

    Sub(x,y) := ∀v₃(v₃∈x → v₃∈y),
    PowCover(x,y) := ∀v₂(Sub(v₂,x) → v₂∈y),
    Cover(A,m,c) := ∀v₆₆((v₆₆∈m ∨ v₆₆∈A) → v₆₆∈c).

The fixed Power Set certificate L(0,3) licenses exactly

    ∀v₀∃v₁ PowCover(v₀,v₁).

It is implication-only: y is permitted to have elements that are not subsets
of x. The present proof uses only this covering direction. It does not
silently replace that axiom by an exact power-set equation. Exact Power Set
is recoverable in the surrounding theory by a separately certified
Separation instance, but that additional equivalence is not needed here.

Choose w=v₈₀,c=v₈₁,p₁=v₈₂,p₂=v₈₃,p₃=v₈₄ with

    Pair(m,A,w), Union(w,c),
    PowCover(c,p₁), PowCover(p₁,p₂), PowCover(p₂,p₃).

Pairing and Union provide the first two witnesses, and three instances of
the displayed fixed Power Set sentence provide the others. No Replacement,
Infinity, Choice, finite-word construction, or ordinal induction is used.

UI, equality reflexivity, and existential introduction into the Union
membership formula prove that the first two relations imply Cover(A,m,c).
Thus c contains every element of m or A. The proof never assumes that A
or m is transitive.

## 3. Compiled bounding argument

The compiler first proves a logical pair-subset implication:

    Pair(x,y,r) ∧ x∈c ∧ y∈c → Sub(r,c).

For a generic element v₃ of r, the pair equation says v₃=x or v₃=y.
The exact equality-substitution scheme transports x∈c or y∈c back to
v₃∈c. Conditional generalization binds v₃.

Expand O(j,b,p) with its witnesses q=v₂₄,r=v₂₅:

    Pair(j,j,q) ∧ (Pair(j,b,r) ∧ Pair(q,r,p)).

If j,b∈c, the first pair-subset implication gives Sub(q,c), and the second
gives Sub(r,c). PowCover(c,p₁) puts both q and r in p₁. A third
pair-subset implication gives Sub(p,p₁); PowCover(p₁,p₂) puts p in p₂.
Explicit EE in r then q removes the O witnesses. This proves the ordered-
pair bound from its definition, without importing an ordered-pair existence
or injectivity theorem.

Write B for the conjunction

    Cover(A,m,c) ∧ (PowCover(c,p₁) ∧
                    (PowCover(p₁,p₂) ∧ PowCover(p₂,p₃))).

For p∈s, Sh supplies j∈m,b∈A and O(j,b,p). Cover puts j,b in c, so
the previous argument gives p∈p₂. The two typed witnesses are removed
with explicit EE, and conditional generalization gives s⊆p₂.
PowCover(p₂,p₃) therefore gives s∈p₃.

The compiler emits the universally closed bounding theorem

    B → (T(A,m,s) → s∈p₃).

This proof has no nonlogical premises: every cover relation is in the
antecedent. Domain and functionality are not needed for bounding, but the
later Separation predicate retains both. Sh's element binder v₆₅ is
converted to Sub's v₃ using UI and conditional generalization only after
the inner ordered-pair expansion has been eliminated; substituting v₃
directly under O's v₃ binder would be an invalid capture.

## 4. Exact Separation and witness discharge

Apply the actual canonical Separation certificate

    L(1,num(T(v₇₀,v₇₁,v₄₀)),40)

to its independently displayed sentence

    ∀v₀∀v₇₀∀v₇₁∃v₁∀v₄₀
      (v₄₀∈v₁ ↔ (v₄₀∈v₀ ∧ T(v₇₀,v₇₁,v₄₀))).

The fresh bounding/output slots are 0 and 1; neither occurs in T. UI
specializes v₀ to p₃ and preserves A,m. Explicit existential alpha
conversion gives D=v₇₂. The bounding theorem eliminates the redundant
s∈p₃ conjunct, yielding E(D), not merely a one-way containment.

The Pair, Union and three power-cover witnesses are then discharged in
reverse construction order. Each existence proof is an actual dependency-
copied proof or a specialized fixed axiom. Each EE checks that its witness
is absent from the remaining conclusion. The endpoint is ∃D E(D), with
no residual bounding-set hypothesis.

For uniqueness, UI on E(D) and E(V) gives equal memberships because their
right-hand predicates are the identical T formula. Conditional
generalization and fixed Extensionality give V=D. The existing D witness
and the annotated existential-mapping program yield the final ∃!D endpoint.

## 5. Executed validation

Run:

```bash
node research/support-phase-2-next-17-assignment-universe.mjs
```

| Endpoint | Primitive lines | Full sentinel proof bits |
|---|---:|---:|
| Typed-graph bound | 123 | 68,439,996 |
| Assignment-universe existence | 318 | 243,690,550 |
| Assignment-universe unique existence | 352 | 392,486,054 |

Every complete proof integer passes the original ZF numerical verifier.
Every proof also passes the committed numerical-record transport. None
of these endpoints needs an outer-serialization exception.

The unique-existence proof contains exactly the fixed Extensionality,
Pairing, Union, and implication-only Power Set certificates plus the one
Separation(T) instance. Mutation tests reject MP self-reference, a changed
Separation designated variable, a changed Power Set tag, an illegal EE
variable, and a different requested endpoint that uses graph shape alone.
The EE mutation rebuilds its conclusion with the changed variable, so it
tests the free-variable side condition. A prefixed/rebased proof passes.

The separate finite hereditary-set test enumerates 262,196 candidate graphs
inside the actual finite triple-power bound over eight carrier/domain
choices. Filtering by the exact three-clause predicate agrees with an
independent recursive enumeration of all total functions: 12 assignments
in total. The predicate excludes nine shaped but nonfunctional graphs and
14 shaped but domain-incomplete graphs in these cases.

Cases include empty A, empty m, both empty, a nontransitive carrier {1,2},
and a non-ordinal domain {2}. Empty domain yields the singleton universe
{∅}; empty carrier with nonempty domain yields the empty universe. The
finite fixtures are semantic checks, not finite models of ZF or a proof
that every set domain is finite.

The PA-verification claim is the same bounded claim as the preceding
kernels: the established primitive-recursive coding/checking operations
and finite-prefix induction verify these concrete proof traces. There is
no executed PA proof-assistant derivation, uniform interpretation theorem,
or arithmetic soundness assertion.

## 6. Precisely what this changes at the satisfaction frontier

The assignment-universe import in the truth-set operations support is now
an actual compiled theorem, for all set m. A future author can specialize
it to an adequately large finite ordinal and use the exact E(D) equation
to identify the bounding set in each truth-set operation with all typed
assignments. No quote of m is required by this theorem itself.

Remaining imports are the internal finite-word constructor/child-field
predicates and their parsing proofs; finite subformula closure; the selected
expanded evaluation-table/Sat_m formula; table existence and uniqueness;
word-index instantiation of the table clauses; and comparison to the
repository's finite-tuple satisfaction, EVAL, VALUE and padding interfaces.
The already checked conditional table-negation theorem does not discharge
those syntax or recursive-table premises.

No batch-11 owner gate changes state or becomes mathematically complete
from this support alone. The new proof removes one explicit prerequisite
from the prospective Sat_m/BRIDGE construction. General SEP/U-AX,
relativized L satisfaction, reflection and GCH still require their own
proofs. Nothing asserts internal Infinity in Lω or changes consistency
strength. No item acceptance, author completion, or engine waiver is claimed.

## 7. Read-only provenance

The local normative inputs are the exact tuple formula, canonical ZF
certificate recognizer, and annotated proof factories. No new item ID or
external theorem is treated as an axiom. Imported source SHA-256 values:

| File | SHA-256 |
|---|---|
| `support-phase-2-next-17-update-tuple-preservation.mjs` | `31f46a0fb525b6b70492b93ea3de99b984908e33412186147b9c62c309fe565f` |
| `support-phase-2-next-17-zf-axiom-operation-kernel.mjs` | `c75276e5bc2028a098a3e730feefe5654a22371e10765ad118566d66ef17d152` |
| `support-phase-2-next-17-update-existence-proof.mjs` | `56a635da58b1fcfc17a299eed03d6e0d32f446368f0415e8367733b275fdb620` |
| `support-phase-2-next-17-update-coordinate-proof.mjs` | `bf2ce9f359bef03d5656a71497f51bd1b47d0109564496af7f8bf6f579144b09` |
| `support-phase-2-next-17-kuratowski-proof-block.mjs` | `fe7d18bb4f91535327245132d428b3192b8855650d70944b9b531546f645c303` |
| `support-phase-2-next-17-annotated-separation-adapter.md` | `69a445ce740a45857ae840b4c6289fbcc1e2b27660102cc9a192f6d8a4858cb6` |
| `support-phase-2-next-17-numerical-logical-proof-decoder.md` | `f83842c3a214ca807303654b34556b8662f61be7c3d4ee817dbd2dfc5f7a215a` |

These are reproducibility observations, not immutable workflow receipts.
Rerun the proof checks if any imported factory or checker changes.
