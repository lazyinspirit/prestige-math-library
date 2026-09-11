# Checked graph UPDATE insertion, existence, and uniqueness

Date: 2026-09-12 (Australia/Sydney).

The [executable companion](support-phase-2-next-17-update-existence-proof.mjs)
now emits and numerically verifies a finite ZF proof of unique existence
for the exact UPDATE element equation. This closes the insertion/existence
composition left open by the
[graph-removal package](support-phase-2-next-17-graph-removal-update-interface.md).
It does **not** close the coordinate identity, tuple preservation, Sat,
BRIDGE, SEP, L-relativization, reflection, GCH, or U-AX.

This is isolated research support, not an accepted item, gate receipt, or
controller input. No live/controller/owner/item file, existing support
factory, or state was edited; no commit is made by this authoring lane.

## 1. Exact statement and variable interfaces

Use the committed literal predicates

    P(a,b,u) := ∀v₃(v₃∈u ↔ (v₃=a ∨ v₃=b)),
    O(a,b,p) := ∃v₂₄∃v₂₅
      (P(a,a,v₂₄) ∧ (P(a,b,v₂₅) ∧ P(v₂₄,v₂₅,p))),
    R(s,i,r) := ∀v₂₁
      (v₂₁∈r ↔ (v₂₁∈s ∧ ¬∃v₂₂ O(i,v₂₂,v₂₁))),
    B(k,t) := ∀v₂(v₂∈t ↔ ∃v₃(v₃∈k ∧ v₂∈v₃)).

B is the ordinary Union relation, not a new axiom. The actual UPDATE
predicate in the executable has the fixed pointwise binder v₅₀:

    U(s,i,b,t) := ∀v₅₀(v₅₀∈t ↔
      ((v₅₀∈s ∧ ¬∃v₂₂ O(i,v₂₂,v₅₀)) ∨ O(i,b,v₅₀))).

All abbreviations expand into negation, conjunction, existential
quantification, equality, and membership before serialization.
The external indices are s=v₄₀,i=v₄₁,b=v₄₂,t=v₄₃, with alternate
output v=v₄₈. The exact closed endpoint is

    ∀s∀i∀b ∃t(U(s,i,b,t) ∧ ∀v(U(s,i,b,v)→v=t)).     (UPDATE-UNIQUE)

The displayed uniqueness binder v₄₈ is literal; it is not claimed to be
the fresh index selected by the canonical ∃! schema abbreviation. This
is a derived theorem, so its chosen binder changes no axiom policy.

The theorem holds for arbitrary sets s,i,b. If s is not a graph, the
output may still contain its non-pair elements. No finite ordinal,
functionality, domain, or carrier-membership hypothesis is needed for
existence and uniqueness of this set. Such hypotheses belong to the
separate tuple-preservation theorem, not to UPDATE-UNIQUE.

## 2. Checked imports rather than theorem-name axioms

The program composes actual proof-line arrays from these committed modules:

- [ZF operation kernel](support-phase-2-next-17-zf-axiom-operation-kernel.md):
  Pair and Union unique existence, the Extensionality axiom, and the
  numerical verifier with its exact ambient ZF certificate recognition.
- [Kuratowski block](support-phase-2-next-17-kuratowski-proof-block.md):
  ordered-pair existence and the same-input functionality endpoint
  (O(a,b,p)∧O(a,b,q))→q=p. The needed intermediate formulas are located
  by **literal equality** in the actual emitted proof; their antecedent
  proof lines are imported. Ordered-pair injectivity is not needed here.
- [Graph removal](support-phase-2-next-17-graph-removal-update-interface.md):
  unique existence for R, including its actual canonical Separation
  certificate. Projection supplies its existence conjunct.

The Kuratowski module's read-only formula/assembler factory is reused by
the same source-marker extraction convention as the removal package.
The namespace and hashes below make that research dependency explicit;
it is not advertised as a stable production API.

The only nonlogical labels in the final proof are exactly:

    fixed:0 Extensionality
    fixed:1 Pairing
    fixed:2 Union
    schema:1 canonical ambient Separation.

In particular no theorem-name axiom, Replacement, Power Set, Infinity,
Foundation, Choice, or semantic soundness premise enters this proof.
The Separation line is the removal matrix from the previous package,
with designated variable v₂₁ and certificate L(1,NumForm(φ),21).
Its finite parameter/closure policy remains unchanged and is checked
again as part of the whole numerical proof.

## 3. Actual insertion witnesses

Reserve h=v₄₄,r=v₄₅,w=v₄₆,k=v₄₇. Project and specialize the
checked existence blocks to obtain

    ∃r R(s,i,r),
    ∃h O(i,b,h),
    ∃w P(h,h,w),
    ∃k P(r,w,k),
    ∃t B(k,t).

Thus r is the pruned set, h is the new ordered pair, w={h}, k={r,w},
and t=⋃k=r∪{h}. Each displayed relation is the literal formula above,
not a function term added to the language. Existing unique-existence
proofs are projected by EM, and their witness binders are renamed with
actual EI/EE alpha-conversion proofs. All new external indices exceed
the source interfaces and avoid their remaining internal binders.

Let J be the right-associated conjunction

    R(s,i,r) ∧ (O(i,b,h) ∧ (P(h,h,w) ∧ (P(r,w,k) ∧ B(k,t)))).

All reasoning “under J” below is emitted as a theorem J→F; no open
assumption is added to the sentence-theory proof checker.

## 4. The membership calculation, with both Union directions

Write p=v₅₀ and e=v₃. Instantiating the Union relation gives

    J → (p∈t ↔ ∃e(e∈k ∧ p∈e)).

The e index is not free in J despite its uses as a locally bound variable
in P and B. Let D be p∈r∨p=h.

For the forward implication, the element equation for k gives e=r∨e=w.
Equality substitution carries p∈e to p∈r or p∈w. The singleton
equation gives p∈w↔p=h, so each existential witness implies D.
Curry the finite implication and use restricted EE in e; the consequent
J→D has no free e. This yields

    J → (∃e(e∈k ∧ p∈e) → D).

For the reverse implication, the Pair relation for k and reflexivity give
r∈k and w∈k. If p∈r, EI with witness r supplies the Union existential.
If p=h, the singleton equation gives p∈w and EI with witness w supplies
it. A Boolean certificate combines these cases, yielding

    J → (D → ∃e(e∈k ∧ p∈e)).

Combine these endpoints with the Union clause to obtain

    J → (p∈t ↔ (p∈r∨p=h)).

This is not an appeal to an unexpanded union-of-two-sets theorem: both
directions and the two witness terms appear in primitive annotations.

## 5. Replacing singleton equality by the exact new-pair predicate

Specialize the checked ordered-pair functionality theorem at i,b,h,p:

    (O(i,b,h)∧O(i,b,p))→p=h.

Under J this gives O(i,b,p)→p=h. For the converse, scheme 6 on the
negated formula O(i,b,x), followed by Boolean contraposition, gives
p=h→(O(i,b,h)→O(i,b,p)). Hence under J the formulas p=h and O(i,b,p)
are equivalent. This uses functionality for fixed inputs, not the stronger
two-input injectivity theorem.

The removal relation gives its exact p∈r biconditional. Substituting both
equivalences into the membership equation from §4 by PC gives

    J → (p∈t ↔
      ((p∈s∧¬∃v₂₂ O(i,v₂₂,p))∨O(i,b,p))).

Conditional generalization in p is permitted because p∉FV(J). The
result is exactly J→U(s,i,b,t), with the chosen v₅₀ binder.

## 6. Discharging every construction witness and proving uniqueness

EI turns U(s,i,b,t) into G=∃t U(s,i,b,t). The construction implication
is then curried and discharged in the dependency-correct order:

1. Eliminate the Union witness t using ∃t B(k,t).
2. Eliminate k using ∃k P(r,w,k).
3. Eliminate w using ∃w P(h,h,w).
4. Eliminate h using ∃h O(i,b,h).
5. Eliminate r using ∃r R(s,i,r).

At each stage the remaining consequent has no free occurrence of the
eliminated variable. Every EE annotation contains that exact variable and
the earlier implication line; MP uses the corresponding existence proof.
The result is the unconditional G with only s,i,b free.

For uniqueness, assume the implication context U(s,i,b,t)∧U(s,i,b,v).
Instantiate both universal element equations at v₂. Their right sides
are literally identical. PC, conditional generalization in v₂, and the
actual Extensionality axiom give v=t. Curry, generalize v conditionally,
retain U(s,i,b,t), and lift through ∃t with EM. Combining with G and
generalizing b,i,s gives UPDATE-UNIQUE exactly.

No step assumes that t is finite or that its graph is functional. A
collision at i is handled by the already proved removal predicate, and
an already present (i,b) is removed and reinserted as the same set element.
There is no multiset convention and no selection of one old value.

## 7. Dependency copying, deduplication, and arithmetic verification

`appendDependencyClosure` follows only the actual earlier-premise fields:
both fields for MP; the first field for generalization or EE; none for
axioms. It rejects non-earlier source references, sorts the retained source
indices, and maps them to output indices. Variable indices, term/formula
codes, Boolean annotations, and axiom certificates are never rebased as
though they were premise indices.

If the target prefix already proves the exact same formula, that earlier
line can be reused and the import redirected to it. This deduplication is
legitimate because every line is a theorem from the **same sentence theory**,
not a derivation with a hidden open-assumption context. The code retains
exact formula equality, not alpha equivalence. The returned root indices
are used explicitly; callers do not assume every reused endpoint is newly
appended.

For checked source and target prefixes, induction on the retained index
list proves that every imported endpoint has the same formula, each new
reference is earlier, and the target remains checked. The deduplication
case uses the existing checked target line; the copying case uses the
source rule annotation with its mapped premises. The final closure pass
selects the actual endpoint's dependency closure, and the whole numerical
checker validates the resulting list independently of the importer's
decision to copy or reuse a line.

These are fixed finite-list/history recursions with primitive-recursive
updates. Together with the committed macro and numerical-checker
correspondence arguments, PA-total representations of these operations
give the closed arithmetic judgment

    PA ⊢ Prf_ZF(q_update, a_update).

The proof constant and endpoint are determined by the supplied executable
program and literal formula construction. This is a mathematical PA
verification argument and an executed **ZF numerical checker** test, not
an executed PA proof-assistant artifact, arithmetic soundness of ZF, or a
uniform proof constructor for arbitrary formulas.

## 8. Reproducible tests and limitations

Run:

```bash
node research/support-phase-2-next-17-update-existence-proof.mjs
```

The final proof has **550 primitive lines and 470,837,502 bits** in the
selected nested sentinel representation. Numerical checking passes. A
separately assembled literal UPDATE-UNIQUE sentence matches, and its
free-variable set is empty. No small-proof or feasible uniform-growth
claim is made; the deliberately explicit encoding is large.

The test suite also:

- Confirms exactly the four axiom labels listed in §2.
- Rejects a changed Separation designated variable, an MP self-reference,
  an EE variable free in its consequent, and a wrong requested endpoint.
  The EE mutation rebuilds its conclusion to match the changed binder,
  so the free-variable restriction is genuinely exercised.
- Prepends an unrelated equality-reflexivity theorem, rebases the entire
  proof, and checks the resulting numerical proof again.
- Tests reuse of a duplicate proved formula, checks that a generalization
  premise shifts while its variable index remains unchanged, and rejects
  a malformed self-referencing source passed to the importer.

These are local executable tests, not independent review or a workflow
acceptance claim. The independent coordinate-identity/tuple tests in the
previous package remain **finite semantic tests**; this new proof does
not promote them to annotated proof acceptance.

## 9. Provenance and remaining mathematical interface

Read-only imported-file SHA-256 values at this authoring checkpoint:

| File | SHA-256 |
|---|---|
| `support-phase-2-next-17-zf-axiom-operation-kernel.mjs` | `c75276e5bc2028a098a3e730feefe5654a22371e10765ad118566d66ef17d152` |
| `support-phase-2-next-17-kuratowski-proof-block.mjs` | `fe7d18bb4f91535327245132d428b3192b8855650d70944b9b531546f645c303` |
| `support-phase-2-next-17-graph-removal-update-interface.mjs` | `34ac42bfb71ebf4a8a5cb73af0eb01a83d9f8a3988567f74f7a6c2188021e98f` |
| `support-phase-2-next-17-annotated-separation-adapter.md` | `69a445ce740a45857ae840b4c6289fbcc1e2b27660102cc9a192f6d8a4858cb6` |
| `support-phase-2-next-17-numerical-logical-proof-decoder.md` | `f83842c3a214ca807303654b34556b8662f61be7c3d4ee817dbd2dfc5f7a215a` |

These are reproducibility observations, not frozen receipts or item
certification. Changes to a factory require rerunning the tests. No new
item ID or external theorem is inserted as an axiom.

The relational pair/Union conventions were checked against the primary
comparison [Paulson, §4.1](https://arxiv.org/html/2104.12674v1#S4.SS1) during
the preceding kernel investigation. His representation is not substituted
for this repository's formulas or proof codes. The concrete composition,
annotations, importer, and verification above are local work.

Remaining next steps are the actual two-direction coordinate proof using
the committed **injectivity** block, then exact functionality/domain/value
preservation. Neither is emitted here. The Sat_m formula/clauses,
finite-word/assignment quotation alignment, EVAL/VALUE/padding proof
compilation, Def, reflection, SEP, and U-AX remain separate open work.
There is no assertion of internal Infinity in Lω, no model-existence
premise, no change of consistency strength, and no controller action.
