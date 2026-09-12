# All six guarded logical axiom constructors

Date: 2026-09-12. This is research support, not an L-domain definition,
owner decision, or arithmetic consistency certificate.

The [executable](support-phase-2-next-17-guarded-logical-axioms.mjs) generates
whole numerically checked proofs of the guarded translations of **all six
logical axiom schemes**. Together with the
[three-rule transporter](support-phase-2-next-17-guarded-inference-transport.md),
it automatically handles the entire logical part of the fixed pure-membership
proof calculus. The caller still supplies exact checked translated
**nonlogical** proofs and a checked nonempty-domain proof. No missing
L-Separation, L-Replacement, or GCH certificate is manufactured by this layer.

## 1. Exact interface and domain boundary

Use an actual formula d with free variables among `{v_0}`. The intended
constructibility formula is still not an expanded certified code in this
artifact. The tests' domain formulas are not represented as definitions of L.

For a whole accepted source proof p, `transportContext(d,p)` fixes one common
normalization of the inserted domain formula. All its bound indices are
strictly above every index occurring in any source proof formula. Each D_i
is the same normalized body with its designated free variable replaced by i.
This is exactly the existing transporter context; the new constructor does
not independently choose a different alpha-equivalent copy at each leaf.

Write τ for the literal primitive translation, `G(phi)` for the increasing,
right-associated free-variable domain guard, and `t(phi)=G(phi)→τ(phi)`.
Empty guards use the already fixed `top=∀v_0(v_0=v_0)`. Universals,
implications and equivalences are expanded before translation.

`logicalLeafProof(d,p,i,nd)` requires:

- p passes the unchanged source ZF numerical verifier;
- i is an actual BigInt source index whose tag is 1 through 6;
- nd passes the unchanged target ZF verifier with exact endpoint
  `∃v_0 D_0` in this whole-proof normalization.

It returns a proof of exactly t(p_i), with records and endpoint, or zero
on rejection. Its numerical-only wrapper is `logicalLeafProofCode`.
Every generated proof is fed to the **original whole-integer verifier**
before it is returned. Unneeded nd records are dependency-pruned; most
schemes do not use domain nonemptiness in their mathematical proof.

The API nonetheless consistently requires a checked nd input because the
generic proof-interpretation application has a nonempty domain. In the
unused-variable UI/EI cases that proof is genuinely necessary.

## 2. Exact substitution: why a proof bridge is usually unnecessary here

Suppose y is free for x in the source matrix phi and x actually occurs
freely in phi. In UI/EI the resulting free y is visible in the source axiom
formula; in equality substitution both replacement indices are visible in
the explicit equality antecedent. Thus none of these replacement indices
is an inserted bound name of D.

Structural induction then gives the **literal syntax identity**

    sub(τ(phi),x,y) = τ(sub(phi,x,y)).

Atoms and Boolean nodes commute directly. At a binder of x, both substitutions
stop at that source binder. At any other binder j, the inserted D_j has no
free x, since its only possible free index is j. Hence substitution leaves
that inserted guard unchanged and recurses on the original child. The
source free-for condition prevents capture by source binders, and the
normalization prevents capture by inserted D binders. This proves both
that the translated substitution is free-for and that the results are
identical, not merely alpha-equivalent.

The designated substitution index x itself can be an inserted bound name
when it occurs only in an equality-scheme annotation, not in the source
formula. That is harmless: it is bound only inside an inserted D_j that
contains no free x; elsewhere the actual free occurrences are substituted.
A dedicated numerical test exercises exactly that collision.

The constructor computes both sides and asserts literal equality before
emitting each relevant primitive substitution annotation. There is no
alpha-equivalence test being used as an extra inference rule.

### The important exception: an unused source variable

If x is absent from FV(phi), the UI/EI annotation's y may be absent from the
entire source axiom formula. It can then coincide with an inserted D binder.
It is unsound to assume that the same free-for argument covers that index.
These branches do not substitute y at all: the source instance is literally
phi, and the proofs below instead use the actual nonempty-domain certificate.
This also covers an unused x under nested quantified source formulas.

These identities address the present common-copy raw-relativization
convention. They do not establish arbitrary alpha-conversion between a
caller's independently normalized certificate and this context; such an
endpoint mismatch is still rejected.

## 3. Propositional tautology and equality reflexivity

For scheme 1, raw translation commutes with the Boolean constructors.
Substituted quantified subformulas remain arbitrary Boolean letters and
repeated source formulas have identical translations. Thus t(phi) is a
Boolean tautology instance. The constructor emits a real Boolean skeleton
and substitution list for this exact target, checked by the original
truth-table certificate verifier.

For scheme 5, emit the actual equality-reflexivity axiom at its source term
(a variable in the pure-membership signature), followed by Boolean guard
weakening. Large variable indices remain BigInt.

## 4. Universal instantiation

The source is `∀x phi → phi[y/x]` with its checked free-for annotation.
Put B=τ(phi) and

    C = D_x ∧ ¬B.

Its raw universal antecedent is exactly `¬∃x C`.

If x occurs freely in phi, EI applied to C at y gives

    (D_y ∧ ¬B[y/x]) → ∃x C.

The guard of the source axiom includes D_y. Boolean contraposition and
guard rearrangement therefore give

    G(source) → (¬∃x C → B[y/x]),

which is exactly the required target by Section 2's syntax identity.
No guarded-universal normalization theorem or semantic completeness is used.

If x is unused, B has no free x. EI at the identity witness x and Boolean
rearrangement give `D_x→(¬B→∃x C)`. Restricted EE in x gives

    (∃x D_x) → (¬B→∃x C).

Obtain `∃x D_x` from nd using the existing literal EI/EE bound-renaming
construction. MP and contraposition give `¬∃x C→B`; weaken by the
source guard. The potentially colliding, irrelevant y annotation is never
substituted into B or D.

## 5. Existential introduction

The source is `phi[y/x]→∃x phi`. Put B=τ(phi).
For a freely occurring x, apply EI to `D_x∧B` at y:

    (D_y∧B[y/x]) → ∃x(D_x∧B).

The source guard supplies D_y, and Section 2 supplies literal identity of
the substituted matrix. Boolean rearrangement yields the exact t(source).

For unused x, EI at x gives `(D_x∧B)→∃x(D_x∧B)`. Rearrange, apply
restricted EE in x (which is absent from B), then use nd to obtain
`B→∃x(D_x∧B)`. Add the guard. This is where an empty-domain shortcut
would fail; the implementation never accepts an unproved nonempty premise.

## 6. Restricted distribution

The source is `∀x(phi→psi)→(phi→∀x psi)` with x absent from FV(phi).
Put B=τ(phi), C=τ(psi), and define

    U = D_x ∧ ¬C,
    V = D_x ∧ ¬(B→C).

The required raw implication is

    ¬∃x V → (B→¬∃x U).

EI gives `V→∃x V`. Boolean reasoning gives `U→(B→∃x V)`.
Because x is absent from B, restricted EE yields
`∃x U→(B→∃x V)`. Boolean contraposition/rearrangement then yields
the displayed raw implication; guard weakening completes the construction.
This is a six-line primitive proof in the tested realization. It neither
uses a stronger distribution rule nor drops the source free-variable check.

## 7. Equality substitution

The source is `u=v→(phi[u/x]→phi[v/x])`, with both substitutions free-for.
When x occurs freely, set B=τ(phi) and apply the **actual** scheme 6 with
matrix B and the same designated/replacement variables:

    u=v → (B[u/x]→B[v/x]).

Both matrices are literally the translated source instances by Section 2.
Guard weakening gives the target. If x is unused, both source instances
and their translations are identical, and the target is a Boolean tautology.

This provides substitution for arbitrary quantified source matrices in the
specified pure-membership calculus. It does not introduce a function-symbol
interpretation, alternate term algebra, or an unproved equality congruence.

## 8. Automatic filling and full generic composition

`fillLogicalLeaves(d,p,nonlogicalProofList,nd)` expects an aligned numerical
list, with checked target proof integers at source tag-0 positions and zero
everywhere else. It verifies every supplied nonlogical endpoint, constructs
every logical leaf with the preceding six cases, and retains zero at
inference positions. A missing nonlogical proof, unexpected extra proof,
malformed source, or wrong nonempty-domain endpoint returns zero.

`compileGuardedProof` composes this filler with the existing three-rule
transporter; `compileGuardedProofCode` returns only its numerical proof code.
Consequently the generic logical algorithm now requires the caller to supply
only the nonlogical axiom proofs and nd, not handwritten logical leaf proofs.
All callers and imports use the same source-proof hygiene context.

The mathematical correctness invariant is induction on the source proof:
six constructions establish the leaf cases, the previously proved three
inference constructors establish rule cases, and checked dependency copying
preserves annotation/index validity. Every output endpoint remains the exact
guarded translation of its corresponding source formula. These are finite
syntax/record algorithms with explicit failure defaults, not searches for
missing ZF proofs. Physical memory limits are not claims of mathematical
non-totality or of polynomial proof size.

## 9. Executed whole-code checks

Run:

```bash
node research/support-phase-2-next-17-guarded-logical-axioms.mjs
```

Sixteen individual generated proof integers pass the unchanged whole-integer
verifier. The twelve main cases cover all six schemes for domains `v_0=v_0`
and `∃v_1(v_0=v_1)`. Their proof sizes are:

| Scheme | Lines | Bits, first domain | Bits, quantified domain |
|---|---:|---:|---:|
| Boolean | 1 | 52,144 | 87,600 |
| UI | 3 | 347,932 | 463,708 |
| Distribution | 6 | 2,167,498 | 2,425,418 |
| EI | 3 | 300,188 | 415,964 |
| Reflexivity | 3 | 62,596 | 91,028 |
| Equality substitution | 3 | 3,616,916 | 3,720,020 |

Four additional cases cover unused-variable UI/EI whose invisible witness
index is **asserted equal** to the inserted domain binder, equality
substitution whose designated index collides with that binder, and an unused
equality-substitution variable. Ten literal substitution comparisons pass.
The main tests include quantified matrices and a variable index `2^80+7`.

Automatic leaf filling followed by actual inference transport produces a
32-line, 7,896,178-bit proof. Filling/transporting all six scheme leaves
produces a 28-line, 13,056,522-bit proof. Exact caller-supplied nonlogical
Separation insertion also passes. No record-array-only exception is used.

Twelve negative checks reject malformed domain, negative/out-of-range source
index, selecting an inference as a leaf, missing nd, capturing UI,
distribution with an illegal free variable, unexpected logical proof input,
wrong list length, missing nonlogical proof, invalid nd on a nonlogical-only
source, and output MP self-reference. Execution and syntax checking exit zero.

## 10. Remaining owner-gate boundary

This completes the implemented **D-independent logical schemes and rule
transport** for the selected raw-relativization calculus, given checked nd
and translated nonlogical leaves. It does not complete U-AX or make
`lem-finite-fragment-l-interpretation-with-gch` reopenable.

Still missing are the expanded constructibility-domain D and its verified
meaning/nonemptiness; uniform arbitrary L-Separation and L-Replacement proof
constructors; the fixed translated ZF axiom proofs; separate AC/GCH proof
blocks and finite-fragment assembly; and the internal arithmetic-base
totality/acceptance verification for the fixed representations. No executed
PA proof object, GCH certificate, or Cohen-forcing application is supplied.
Certificates produced under another hygiene convention still need an actual
endpoint bridge. No live item, owner receipt, or controller state was edited.

The reused inference source hash is
`bbf4beaf7fe4ebfc2f78cf3490bda1269821cf17ab80191718b166406cf67ba9`;
the guarded-schema source hash is
`165340610c259f4432a3c89b5d19ff3b1ef860427088d2c6310537470c3b51d4`.
The unchanged underlying verifier/decoder/serializer/importer identities
are recorded in those preceding support documents. Recheck literal-code
claims if an imported implementation changes; these are research provenance
observations, not engine certificates.
