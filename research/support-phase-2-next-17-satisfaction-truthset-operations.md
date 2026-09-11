# Satisfaction frontier: checked truth-set operations and a table negation clause

Date: 2026-09-12 (Australia/Sydney).

The [executable companion](support-phase-2-next-17-satisfaction-truthset-operations.mjs)
provides 17 fully serialized, numerically accepted proof endpoints: unique
existence, subset, and guarded pointwise clauses for five ambient truth-set
operations, plus functional-table lookup and a conditional table negation
clause. All 17 fit the original whole-integer verifier.

This does **not** provide the uniform selected Sat_m defining formula, an
evaluation-table existence proof, or full Sat/BRIDGE. Those omissions are
listed precisely in §6. The local operations are prerequisites to that
definition, not a disguised assumption that the recursive relation exists.
No item, live input, controller, receipt, or owner direction was changed;
the lane creates only the two new research support files and makes no commit.

## 1. What the selected repository interface actually supplies

The ambient construction in
[lem-finite-tuple-satisfaction-is-absolute](../items/lem-finite-tuple-satisfaction-is-absolute.md),
proof 2.1, recurses over subformulas into truth subsets of A^m.
[thm-set-structure-satisfaction-recursion](../items/thm-set-structure-satisfaction-recursion.md)
likewise specifies atomic truth sets, relative complement, intersection,
and the assignment-update witness operation before invoking structural
recursion. These describe the mathematics but do not give a fully expanded
membership formula for Sat_m with accepted clause proof records.

The existing [finite-word support](support-phase-2-next-17-finite-word-satisfaction-templates.md),
§7, explicitly identifies that missing formula/template interface. The
committed UPDATE blocks now close its graph-update prerequisite; they do not
automatically supply word parsing or satisfaction-table assembly.

The current bounded unit selects the exact relational operations below,
in the repository's existing variable and graph representation. It does
not replace the finite words of
[def-set-coded-terms-and-formulas](../items/def-set-coded-terms-and-formulas.md)
by expression trees or de Bruijn indices.

## 2. Five fixed pure-language operation formulas

Use exactly the committed coordinate predicate C and update predicate U:

    C(s,i,b) := ∃v₆₂(O(i,b,v₆₂) ∧ v₆₂∈s),
    U(s,i,b,t) := ∀v₅₀(v₅₀∈t ↔
       ((v₅₀∈s ∧ ¬∃v₂₂ O(i,v₂₂,v₅₀)) ∨ O(i,b,v₅₀))).

O has its unchanged Kuratowski expansion with witnesses v₂₄,v₂₅ and
unordered-pair element binder v₃. No new axiom, function symbol, or
semantic predicate is admitted by the proof checker.

Let D be an arbitrary ambient bounding set. It is intended eventually to
be A^m, but its identification with the tuple universe is **not assumed
proved** in this artifact. Let B,C be prospective child truth sets. For an
assignment variable s define these fixed matrices:

    φ_eq(s) := ∃b∃c(C(s,i,b) ∧ (C(s,j,c) ∧ b=c)),
    φ_rel(s) := ∃b∃c(C(s,i,b) ∧ (C(s,j,c) ∧ b∈c)),
    φ_neg(s) := ¬(s∈B),
    φ_and(s) := s∈B ∧ s∈C,
    φ_exists(s) := ∃b∃t(b∈A ∧ (U(s,i,b,t) ∧ t∈B)).

The parameter slots are A=v₇₀,D=v₇₁,B=v₇₂,C=v₇₃,i=v₇₄,j=v₇₅.
The tested assignment slot is s=v₄₀; output and rival truth sets are
R=v₄₁,V=v₄₂. Atomic value witnesses are v₄₄,v₄₅; the existential
operation uses v₄₄ for b and v₄₆ for t. These avoid every C/U/O binder.

For each of the five literal matrices, put

    Op_k(D,parameters,R) := ∀v₄₀(v₄₀∈R ↔
                                  (v₄₀∈D ∧ φ_k(v₄₀))).

The three emitted endpoints, with universal closure over their actual free
variables in increasing numerical slot order, are exactly:

    ∃R(Op_k(R) ∧ ∀V(Op_k(V) → V=R)),
    (Op_k(R) ∧ s∈D) → (s∈R ↔ φ_k(s)),
    Op_k(R) → ∀s(s∈R → s∈D).

They hold for arbitrary D and arbitrary child sets. In particular, the
existential operation does not assume B⊆D merely to obtain its separating
set. For its intended finite-assignment use, B⊆D and the domain/index/type
conditions are supplied by the evaluation-table invariant and UPDATE
preservation, not silently deleted from those separate prerequisites.

## 3. Actual nonlogical proof construction

For each k, 0 and 1 are absent from all variables, free or bound, in φ_k.
The independently displayed canonical Separation sentence is

    ∀v₀ ∀parameters ∃v₁ ∀v₄₀
      (v₄₀∈v₁ ↔ (v₄₀∈v₀ ∧ φ_k(v₄₀))),

where the parameter quantifiers occur in increasing slot order. The lists
are [74,75], [74,75], [72], [72,73], [70,72,74], respectively. The exact
tag-0 certificate is L(1,num(φ_k),40), checked by the committed canonical
ZF certificate recognizer before being added to the proof.

UI at D and the parameter slots specializes the sentence; explicit
existential alpha conversion changes its output v₁ to v₄₁. This produces
∃R Op_k(R), with no theorem-name import.

For uniqueness, UI on Op_k(R) and Op_k(V) at fresh v₂ yields identical
membership conditions. A Boolean certificate gives pointwise membership
equivalence, conditional generalization binds v₂, and the actual fixed
Extensionality axiom gives V=R. Conditional generalization in V and the
ordinary existential-mapping program combine that uniqueness with the
existing R witness. Every primitive line is then dependency-pruned and
rebased. Exactly one Extensionality and one Separation certificate remain
in each unique-existence proof; Pairing and other inherited factory lines
are pruned away.

For the guarded clause and subset endpoint, UI on the defining formula and
a checked Boolean implication suffice. Those conditional proofs have no
nonlogical axiom lines. In particular, negation means complement **inside
D**. Without s∈D, the unguarded equivalence s∈R↔¬s∈B can fail.

## 4. First conditional recursive table clause

Let H be an arbitrary graph. Use the exact functionality component of the
committed tuple predicate, with H in the graph slot:

    Fn(H) := ∀j∀b∀c((C(H,j,b) ∧ C(H,j,c)) → b=c).

Let w=v₇₆ and q=v₇₇ be arbitrary set keys, H=v₇₈, and define the
fully expanded lookup predicate

    Truth(H,w,s) := ∃v₇₉(C(H,w,v₇₉) ∧ s∈v₇₉).

These keys are not claimed to be formula words. Their intended connection
to a negation constructor remains a separate syntax premise.

The first emitted logical theorem is the universal closure of

    (Fn(H) ∧ C(H,w,R)) → (Truth(H,w,s) ↔ s∈R).

The forward direction takes a v₇₉ witness, obtains R=v₇₉ by three UI steps
on Fn(H), uses actual equality substitution to transport membership, and
eliminates v₇₉ with the checked EE side condition. The reverse direction
chooses R by EI. This does not assume H is total or has a set-coded domain.

Specialize that theorem to child q with value B. Together with the local
negation definition, it yields the second emitted theorem:

    Fn(H) ∧ (C(H,w,R) ∧ (C(H,q,B) ∧ (Op_neg(R) ∧ s∈D)))
       → (Truth(H,w,s) ↔ ¬Truth(H,q,s)).

The endpoint is universally closed in slot order, has no free variables,
and contains no nonlogical axiom lines. This is a genuine annotated
table-negation clause, but it is conditional on the two table rows and
their defining equation. No assertion constructs H, proves its rows obey
syntax, or identifies Truth with the selected Sat_m relation.

## 5. Executed checks and arithmetic scope

Run from the repository root:

```bash
node research/support-phase-2-next-17-satisfaction-truthset-operations.mjs
```

All 17 full sentinel proof integers were fed to the original ZF verifier.
The 15 operation endpoints also pass the previously committed numerical
record transport. There is no outer-integer resource exception in this unit.

| Operation | Unique existence lines / bits | Clause lines / bits | Subset lines / bits |
|---|---:|---:|---:|
| Equality | 48 / 82,898,298 | 8 / 8,249,474 | 10 / 7,474,410 |
| Membership | 48 / 83,005,818 | 8 / 8,259,458 | 10 / 7,483,626 |
| Negation | 45 / 9,160,176 | 7 / 1,374,024 | 9 / 1,133,928 |
| Conjunction | 48 / 10,510,458 | 8 / 1,527,746 | 10 / 1,269,738 |
| Existential UPDATE image | 51 / 164,543,332 | 9 / 16,588,860 | 11 / 14,709,260 |

Functional-table lookup is 49 lines / 57,860,208 bits. Its conditional
negation clause is 67 lines / 83,661,788 bits.

Tests independently rebuild each literal endpoint and check sentencehood.
Twelve rejection tests cover the five changed Separation designated-variable
certificates, five unguarded requested endpoints, an unsupported operation,
and a table-proof MP self-reference. Five prefixed/rebased unique-existence
proofs also pass. The surviving nonlogical certificate labels are asserted.

Finite hereditary-set fixtures check 72 atomic comparisons, 4,104 Boolean
comparisons, and 260 existential-image comparisons over singleton,
transitive two-element, and nontransitive two-element carriers. They also
exhibit the outside-D negation failure and an empty-carrier existential
image. They test actual finite set graphs but are not finite models of ZF.

The mathematical PA claim is limited to checking these explicit finite
syntax/proof traces through the established primitive-recursive coding and
checker operations. Prefix induction verifies each emitted line against
its certificate or earlier premises. No PA proof-assistant derivation is
executed; no uniform Sat interpreter, ZF soundness statement, or full
Separation-in-L translator is claimed. The five ambient Separation instances
must not be confused with the still-open general relativized SEP compiler.

## 6. Exact missing assembly interface

A finite-table route matching the selected repository construction would
eventually define Sat_m(A,w,s) by the existence of D,F,H such that:

1. D is exactly the assignment set: ∀s(s∈D↔T(A,m,s)).
2. F is a finite set of valid finite-word formula codes containing w,
   closed under immediate subformulas, with all variable indices below m.
3. H is a functional graph on exactly F, with every value a subset of D.
4. Every H row obeys the appropriate one of the five Op equations, using
   the exact word constructor and its decoded symbol/child fields.
5. Truth(H,w,s) holds.

This is an **assembly contract**, not a supplied expanded Sat_m formula.
The smallest remaining tasks in this route are:

- Supply the literal set-word constructor/child-field predicates, finite
  subformula-closure predicate, and their unique-parsing/shorter-child proofs.
  Tokens remain Kuratowski pairs of finite ordinals and words finite function
  graphs. The numerical decoder does not supply these internal set formulas.
- Compile existence of the assignment bounding set D and its exact T
  equivalence. Neither a set called A^m nor P(A^m) is presently supplied as
  an accepted constant/proof by this module.
- Specify one expanded finite-table formula with exact graph domain and
  subset conditions, then compile its existence and uniqueness by finite
  well-founded/length recursion. The local operation uniqueness proved here
  is the row-level supplier, not this recursion theorem. The prose supplier
  [thm-structural-recursion-on-set-coded-syntax](../items/thm-structural-recursion-on-set-coded-syntax.md)
  cannot be inserted as an unrecognized tag-0 theorem name.
- Instantiate the row clauses at actual quoted parent/child words; compile
  the remaining table-level atomic, conjunction and existential clauses;
  discharge table witnesses and prove independence of the chosen F,H.
  The UPDATE typing theorem supplies the existential assignment invariant,
  but its mere availability does not discharge the table or syntax premises.
- Prove comparison with the selected finite-tuple satisfaction convention,
  and then finite-word quotation/EVAL/VALUE/padding. No finite-to-infinite
  assignment extension or coincidence proof is emitted here.

The formula-parameter indices i,j above denote *set-valued ordinal indices*
when this interface is used. Their decimal slot numbers are metasyntactic
variable names, never ordinal numerals or set-word terms in the output logic.
Quoted-index identity and the condition i∈m must be established separately.

This leaves full Sat/BRIDGE, Def, L-reflection, general SEP/U-AX and GCH
open, with unchanged consistency strength and no internal Infinity claim
about Lω. The absence of these compiled pieces is not an impossibility or
independence claim.

## 7. Provenance and source boundary

The tuple-preservation module was committed as `baa1b815e` when read.
Read-only imported source SHA-256 observations are:

| File | SHA-256 |
|---|---|
| `support-phase-2-next-17-update-tuple-preservation.mjs` | `31f46a0fb525b6b70492b93ea3de99b984908e33412186147b9c62c309fe565f` |
| `support-phase-2-next-17-zf-axiom-operation-kernel.mjs` | `c75276e5bc2028a098a3e730feefe5654a22371e10765ad118566d66ef17d152` |
| `support-phase-2-next-17-update-coordinate-proof.mjs` | `bf2ce9f359bef03d5656a71497f51bd1b47d0109564496af7f8bf6f579144b09` |
| `support-phase-2-next-17-update-existence-proof.mjs` | `56a635da58b1fcfc17a299eed03d6e0d32f446368f0415e8367733b275fdb620` |
| `support-phase-2-next-17-kuratowski-proof-block.mjs` | `fe7d18bb4f91535327245132d428b3192b8855650d70944b9b531546f645c303` |
| `support-phase-2-next-17-annotated-separation-adapter.md` | `69a445ce740a45857ae840b4c6289fbcc1e2b27660102cc9a192f6d8a4858cb6` |
| `support-phase-2-next-17-numerical-logical-proof-decoder.md` | `f83842c3a214ca807303654b34556b8662f61be7c3d4ee817dbd2dfc5f7a215a` |

These are reproducibility observations, not certification receipts. The four
linked item IDs are actual local items and are used to locate the intended
interface, not imported as proof-checker axioms.

[Paulson, §6.2 and §9.1](https://arxiv.org/html/2104.12674v1#S6.SS2)
was consulted as a primary comparison: satisfaction recursion changes
environments at quantifiers, while internalizing and proving absoluteness
of that recursion requires additional formal work. His syntax uses nameless
variables and lists; it is not substituted for this repository's words and
fixed named-variable updates. The proof records here are local constructions.
