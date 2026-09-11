# Checked arbitrary-set UPDATE coordinate identity

Date: 2026-09-12 (Australia/Sydney).

The [executable companion](support-phase-2-next-17-update-coordinate-proof.mjs)
compiles and numerically verifies **both directions** of the exact UPDATE
coordinate identity. It separately checks the forward implication, reverse
implication, and their equivalence. There are no tuple, functionality,
finite-domain, or carrier-membership hypotheses in this theorem.

This is isolated research support, not an accepted item or controller
receipt. Typed tuple preservation, Sat, BRIDGE, SEP, relativized L,
reflection, GCH, and U-AX remain open. No live/controller/owner/item/state
or existing support file was edited; no commit is made by this lane.

## 1. Literal endpoint and relation to UPDATE existence

Use the exact `update` formula exported by the committed
[UPDATE existence module](support-phase-2-next-17-update-existence-proof.md):

    U(s,i,b,t) := ∀v₅₀(v₅₀∈t ↔
      ((v₅₀∈s ∧ ¬∃v₂₂ O(i,v₂₂,v₅₀)) ∨ O(i,b,v₅₀))).

O is the literal relational Kuratowski formula from the
[checked ordered-pair block](support-phase-2-next-17-kuratowski-proof-block.md),
with its v₂₄,v₂₅ witnesses and v₃ unordered-pair element binder. No new
function term, primitive coordinate predicate, or certificate tag is used.

The present coordinate predicate fixes its witness binder at v₆₂:

    C(s,j,c) := ∃v₆₂(O(j,c,v₆₂) ∧ v₆₂∈s).

The external indices are s=v₄₀,i=v₄₁,b=v₄₂,t=v₄₃,j=v₆₀,c=v₆₁.
Write

    D := (j=i ∧ c=b) ∨ (j≠i ∧ C(s,j,c)).

All abbreviations expand before serialization. The exact closed endpoints
are the universal closures, in s,i,b,t,j,c order, of

    U(s,i,b,t) → (C(t,j,c) → D),                      (COORD-FORWARD)
    U(s,i,b,t) → (D → C(t,j,c)),                      (COORD-BACKWARD)
    U(s,i,b,t) → (C(t,j,c) ↔ D).                     (COORD-IFF)

The independent endpoint tests reconstruct these outer formulas separately
from the proof construction and verify their free-variable sets are empty.
The coordinates are arbitrary sets; they need not be finite ordinals.

The earlier UPDATE-UNIQUE proof supplies the existence and uniqueness of
a set t satisfying U. This new theorem is **conditional on U**. It imports
the exact predicate and checked proof-copying machinery from that module,
but does not redundantly inline the entire 550-line existence proof into
these conditional conclusions. Nothing replaces U by a new axiom: every
line involving it is part of a proved implication. Combining the earlier
existence theorem with COORD-IFF is mathematically immediate but is not
represented as an additional emitted existential theorem in this artifact.

## 2. Actual imported proof data

The constructor imports dependency closures of two concrete Kuratowski
endpoints:

- ∃v₂₂ O(v₂₀,v₂₁,v₂₂), then universally closes its two inputs and
  specializes it to i,b with a fresh witness h=v₆₃.
- The fully closed injectivity theorem, whose two output codes may be
  specialized to the **same** p=v₆₂. Equality reflexivity supplies p=p.

Intermediate formulas are located by literal equality in the actual
Kuratowski proof array. Its ordinary primitive axiom/rule lines are
copied and rebased through the committed dependency importer. There is
no theorem-name axiom or hidden first-order consequence rule.

After dependency pruning, COORD-FORWARD has **no nonlogical axiom lines**:
injectivity of the displayed Kuratowski representation follows by logic
from the pair equations in its antecedent. The reverse/equivalence proofs
retain exactly the committed Pairing and Extensionality lines through
the chosen ordered-pair existence proof. They contain no Separation,
Union, Replacement, Infinity, Power Set, Foundation, or Choice axiom.
That is not a claim that UPDATE existence needs no Separation/Union;
existence is the separate previously checked theorem.

## 3. Forward implication, with the witness cases compiled

Fix p=v₆₂ and let

    Q := O(j,c,p),
    E := ∃v₂₂ O(i,v₂₂,p),
    N := O(i,b,p),
    W := Q∧p∈t.

UI on the exact U predicate at p yields
p∈t↔((p∈s∧¬E)∨N), under U.

### Retained witness

Scheme 6 gives j=i→(O(j,c,p)→O(i,c,p)), and scheme 4 with witness
c gives O(i,c,p)→E. PC therefore derives (j=i∧Q)→E. If the retained
disjunct holds, Q and ¬E imply j≠i. EI on Q∧p∈s supplies C(s,j,c).
Thus this case yields the second disjunct of D.

### Inserted witness

Instantiate the actual injectivity proof with input pairs (j,c) and (i,b),
and with both output variables replaced by p. Reflexivity and PC give

    (O(j,c,p)∧O(i,b,p)) → (j=i∧c=b).

Thus this case yields the first disjunct of D. A checked Boolean
certificate combines the two cases into U→(W→D).

PC curries this to W→(U→D). Restricted EE in p is permitted: p is
not free in U→D, since p occurs there only bound in C(s,j,c). It gives
C(t,j,c)→(U→D). Reordering and universal closure give COORD-FORWARD.
The proof never assumes old values are unique.

## 4. Reverse implication at the replaced coordinate

Assume the first disjunct j=i∧c=b in the implication context. The
committed ordered-pair existence proof supplies ∃h O(i,b,h), where
h=v₆₃ is fresh for U,D,C(t,j,c) and all outer parameters.

Reverse equality transport changes O(i,b,h) first to O(j,b,h), then
to O(j,c,h). Each reverse transport is derived from scheme 6 applied
to the negated predicate and Boolean contraposition; it is not an extra
equality rule. UI on U at h and the new-pair disjunct give h∈t.
EI with witness h then gives C(t,j,c).

The emitted implication is

    O(i,b,h) → (U → ((j=i∧c=b)→C(t,j,c))).

Restricted EE in h and MP with the actual ordered-pair existence proof
remove the witness, giving U→((j=i∧c=b)→C(t,j,c)). There is no
unjustified choice of a name or graph entry.

## 5. Reverse implication at an unchanged coordinate

Take a witness p for C(s,j,c), and suppose j≠i. For an arbitrary
v₂₂, instantiate injectivity on O(j,c,p) and O(i,v₂₂,p), again using
p=p. Its conclusion includes j=i. Hence

    (O(j,c,p)∧j≠i) → ¬O(i,v₂₂,p).

The context on the left has no free v₂₂. Conditional generalization,
the explicit double-negation/EM bridge, and PC therefore give

    (O(j,c,p)∧j≠i) → ¬∃v₂₂ O(i,v₂₂,p).

This quantifies over **every** possible removed value, not just c or b.
The same p lies in s, so the retained disjunct of U gives p∈t. EI
supplies C(t,j,c). Curry, eliminate p using restricted EE, and reorder
to obtain U→((j≠i∧C(s,j,c))→C(t,j,c)).

Combining the two reverse cases by PC gives COORD-BACKWARD. PC on the
two implication proofs gives the literal ↔ expansion in COORD-IFF.

## 6. Variable hygiene and exact formula copying

Source injectivity closes its variables in v₂₀,v₂₁,v₂₂,v₂₃,v₃₀,v₃₁
order. The first specialization uses targets j,c,p,p,i,b, all outside
the remaining source/internal binders. The second specialization uses
j,c,p,p,i,v₂₂: the new free v₂₂ is introduced only at the **last** UI
step, after the original v₂₂ source binder has already been instantiated
at p. It therefore cannot capture the previously inserted arguments.
Its occurrences inside O(i,v₂₂,p) are exactly those subsequently bound
by the explicit ∃v₂₂ removal test.

Coordinate witness p=v₆₂ and inserted-pair witness h=v₆₃ avoid the
committed O binders v₂₄,v₂₅ and its element binder v₃. The final U binder
v₅₀ and coordinate binder v₆₂ are unchanged. The helper equality slot
v₉₉ is fresh throughout. The numerical checker checks the actual
free-for substitutions and EE variable restrictions on every line.

The dependency importer follows only rule premise indices, preserves
variable/formula/axiom annotation fields, and may reuse an earlier proved
line with the identical formula. All lines are theorems of the same
sentence theory; there is no unrecorded open-assumption context. The
entire copied numerical proof is checked after rebasing, not merely
assumed valid because its named supplier was previously checked.

## 7. Executed validation and arithmetic claim

Run:

```bash
node research/support-phase-2-next-17-update-coordinate-proof.mjs
```

Recorded numerical proof results:

| Endpoint | Primitive lines | Sentinel proof bits | Nonlogical lines |
|---|---:|---:|---:|
| COORD-FORWARD | 376 | 328,230,274 | 0 |
| COORD-BACKWARD | 521 | 395,810,424 | 2 |
| COORD-IFF | 557 | 472,548,200 | 2 |

All three complete proof codes pass the committed ZF verifier. Their
separately built literal endpoints and sentencehood checks pass. The
test confirms that the only nonlogical certificates in COORD-IFF are
L(0,0) and L(0,1), the fixed Extensionality and Pairing tags.

Four rejection tests pass: an MP self-reference, an EE variable free
in its consequent, a changed equality-substitution term, and a requested
endpoint whose unchanged-coordinate guard has j=i instead of j≠i.
The EE mutation rebuilds its displayed conclusion to match its changed
variable, directly exercising the forbidden-free-variable condition.
A separately prefixed and rebased complete equivalence proof also passes.

The annotations use the already specified PC, UI, EI, EE, EM, CG, alpha,
and equality-transport programs. Finite syntax/substitution and prefix
induction, with the committed primitive-recursive numerical algorithms
and PA-total graph representations, gives the three closed arithmetic
proof-checker assertions for these concrete proof constants. This is a
mathematical PA-verification argument, not an executed PA proof-assistant
derivation, a uniform interpretation of ZF, or arithmetic soundness of ZF.

The explicit nested sentinel representation is large; no efficient-size
or feasible uniform-growth theorem is claimed. The tests are local
execution evidence, not independent review, item certification, or an
engine gate decision.

## 8. What remains open

The arbitrary-set coordinate identity is now compiled and checked. The
separate conditional tuple theorem remains uncompiled:

    T(A,m,s)∧i∈m∧b∈A∧U(s,i,b,t) → T(A,m,t),

where T must expand its actual graph-shape, exact domain coverage, value
typing, and functionality clauses. Nothing here replaces those clauses
by a vague “assignment” hypothesis. For m=0 the condition i∈m is
impossible; UPDATE still exists on the empty set but is not a zero-length
tuple. This distinction is unchanged by proving COORD-IFF.

The finite-word constructor/quotation imports, selected Sat_m formula and
recursive clause proofs, EVAL/VALUE/padding proof compilation, Def,
reflection, full SEP/U-AX, and GCH remain separate. There is no claim
of internal Infinity in Lω, no stronger model-existence premise, no
change to the required consistency strength, and no controller action.

## 9. Provenance and source boundary

Read-only direct/transitive import SHA-256 observations:

| File | SHA-256 |
|---|---|
| `support-phase-2-next-17-update-existence-proof.mjs` | `56a635da58b1fcfc17a299eed03d6e0d32f446368f0415e8367733b275fdb620` |
| `support-phase-2-next-17-kuratowski-proof-block.mjs` | `fe7d18bb4f91535327245132d428b3192b8855650d70944b9b531546f645c303` |
| `support-phase-2-next-17-zf-axiom-operation-kernel.mjs` | `c75276e5bc2028a098a3e730feefe5654a22371e10765ad118566d66ef17d152` |
| `support-phase-2-next-17-graph-removal-update-interface.mjs` | `34ac42bfb71ebf4a8a5cb73af0eb01a83d9f8a3988567f74f7a6c2188021e98f` |
| `support-phase-2-next-17-annotated-separation-adapter.md` | `69a445ce740a45857ae840b4c6289fbcc1e2b27660102cc9a192f6d8a4858cb6` |
| `support-phase-2-next-17-numerical-logical-proof-decoder.md` | `f83842c3a214ca807303654b34556b8662f61be7c3d4ee817dbd2dfc5f7a215a` |

These are reproducibility observations, not frozen workflow receipts.
Any import change requires rerunning the tests. No new item ID or
external theorem is treated as an axiom.

The relational Kuratowski/graph conventions have the primary comparison
in [Paulson, §4.1](https://arxiv.org/html/2104.12674v1#S4.SS1), read for
the preceding kernel. The exact coordinate proof, annotations, and
numerical checks here are local constructions, not an import of his
different variable representation or formalization.
