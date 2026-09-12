# Exact guarded inference and certificate transport

Date: 2026-09-12. This is an independently checked continuation of the
[guarded schema transformer](support-phase-2-next-17-guarded-schema-transformer.md),
not an owner receipt or a completed L-interpretation theorem.

The [executable companion](support-phase-2-next-17-guarded-inference-transport.mjs)
now transports **all three source inference rules**, for arbitrary formulas,
using exact checked translated-leaf proofs and a checked nonempty-domain
proof. Source nonlogical leaves are checked by the actual canonical ZF axiom
recognizer; supplied target proofs must end in their exact guarded translation.
There is no identity-matrix restriction in this transporter, but there is
also no missing-axiom fallback: general L-schema proofs must still be supplied.

## 1. Constructibility-domain selection: what is and is not fixed

The intended domain remains the ordinary hierarchy domain

    x∈L  iff  there are an ordinal gamma and its actual hierarchy history h
              with x∈h(gamma).

This is the definition in
`def-constructible-hierarchy-and-constructible-rank`, not an alternative
inner model or a weakened domain of only hereditarily finite sets.

However, this sentence is **not yet an expanded numerical membership formula**
in the committed proof machinery. Its uniform Hist/Def test must use the
selected pure-language parsing, table and decoding formulas. The current
set-word quotation, ambient assignment and truth-set operations do not yet
complete that bridge. The [stage-bound support](support-phase-2-next-17-l-stage-bounds.md)
states exactly that remaining interface and does not certify its formula.

Consequently this artifact does not pretend to freeze a numerical D for L.
Doing so with Hist or Sat as an unexpanded primitive would change the pure
membership proof language. Using `D(x):x=x` would interpret the whole universe,
not L. A future selection must record an actual expanded code and prove its
equivalence to the stated hierarchy domain. This is an uncompleted part of
the requested L-specific work, not evidence that such a formula cannot be
constructed.

The new transporter is deliberately parameterized by an actual supplied
formula d with `FV(d)⊆{v_0}`. It is already reusable when the intended L code
and its certificate suppliers become available; it does not presume them.

## 2. Exact input/output contract

`transportProofCode(d,p,leaves,nd)` returns zero on a rejected input or the
numerical code of a target ZF proof. Its richer `transportProof` wrapper
also returns records, endpoint indices and rule counters.

- p is a **complete accepted source ZF proof integer**, checked using the
  unchanged original `verifyZF`. This includes the canonical schema
  certificates for any source Separation or Replacement leaf.
- leaves is a numerical sentinel list with exactly one entry per source
  record. At each leaf (tags 0–6) its entry is a full accepted target ZF
  proof of that leaf's exact guarded translation. At each inference
  (tags 7–9) the entry must be zero. Extra or missing payloads are rejected.
- nd is a full accepted target ZF proof of the exact normalized sentence
  `∃v_0 D_0`. Its truth is not accepted as an unproved assumption.
- The output ends at `G(last)→τ(last)`, with the precise definitions below.

A source leaf need not be an identity schema. It may be any formula allowed
by the source checker, provided its independently checked translated proof
is supplied. This is **certificate transport**, not certificate manufacture.
Supplying a proof of an identity Separation translation for a different
Separation source is explicitly rejected.

Before assembly, accepted numerical records are decoded back to annotated
AST records and immediately reserialized; each result must be byte-for-code
identical to its original numerical record. Formula, variable and certificate
fields remain exact. Only previously checked finite record/Boolean-slot
indices are converted to JavaScript array indices; variable indices remain
BigInt. The existing dependency-closure importer rebases only premise links.

## 3. One hygiene context for the entire proof

The normalizer reserves bound names for d above **all indices occurring in
all source proof formulas**, not separately at each line. It preserves lexical
binding and the designated free v_0. The same normalized D body is then used
for every D_i. Thus all source-premise translations use literally identical
copies when the inference transporter combines them.

The raw translation is the committed primitive recursion:

    equality/membership unchanged;
    negation and conjunction commute;
    τ(∃x φ) = ∃x(D_x ∧ τ(φ)).

Implication and universal notation are expanded first. G(phi) is the
right-associated conjunction of D_i for the increasing free-variable list
of phi; for an empty list use `top=∀v_0(v_0=v_0)`.
The transporter proves this top explicitly from reflexivity and
generalization. It does not treat a quantified top formula as a Boolean
tautology without a proof; this matters when combining closed and open
premises under different guards.

All input leaf and nd endpoints are checked **after** this common context
has been selected. An independently produced proof with different fresh
names needs an actual alpha-conversion bridge; semantic equivalence alone
does not pass the endpoint check.

## 4. Modus ponens and removal of surplus guards

Suppose the translated premise endpoints already prove

    G(A)→τ(A),             G(A→B)→(τ(A)→τ(B)).

Let S be the sorted union of their free indices, equivalently FV(A→B).
Using the proved top for empty guards and the two endpoints, Boolean
reasoning gives `G(S)→τ(B)`.

For each x in `S\FV(B)`, let S' be S with x removed. Rearrange the proved
implication to

    D_x → (G(S')→τ(B)).

The consequent has no free x: source FV preservation gives this for τ(B),
and x was removed from the guard. Restricted existential elimination gives

    (∃x D_x) → (G(S')→τ(B)).

Derive `∃x D_x` from the supplied nd proof. For x≠0, EI provides
`D_0→∃x D_x` because the common-copy hygiene makes substitution of v_0
for x literal and free-for. Restricted elimination in v_0 gives
`(∃v_0 D_0)→∃x D_x`; MP with nd finishes. For x=0, reuse nd directly.
MP removes the current guard. Iterate through all surplus indices.

The resulting endpoint is exactly `G(B)→τ(B)`. The domain's nonemptiness
is used here, not inferred from logical validity of the guarded premises.
The premise endpoints are proved theorems in the imported target derivation,
not open assumptions; that distinction licenses the general rule use.

## 5. Generalization, including an absent source variable

For a source inference from phi to `∀x phi`, put
`K=G(∀x phi)` and A=τ(phi). The previous endpoint gives, by guard
rearrangement and weakening,

    K → ¬(D_x ∧ ¬A).

The index x is not free in K. Conditional generalization gives
`K→∀x¬(D_x∧¬A)`, whose literal syntax includes a double negation inside
the existential abbreviation. To obtain the exact raw target rather than
merely an equivalent normalized formula, lift the Boolean implication
`C→¬¬C`, for `C=D_x∧¬A`, through ∃x using EI and restricted elimination.
Boolean reasoning then yields

    K → ¬∃x(D_x∧¬A),

which is precisely `G(∀x phi)→τ(∀x phi)`.
This works also when x is absent from phi. The executable tests both that
case and a binder which removes an actual free source variable.

## 6. Restricted existential elimination

Suppose the accepted source rule has premise `A→B` and conclusion
`(∃x A)→B`, with x absent from FV(B). Let K be the conclusion guard.
Rearrange the translated premise to

    (D_x∧τ(A)) → (K→τ(B)).

Its consequent has no free x: K omits that index, and raw translation
preserves FV(B). Apply the **actual** restricted EE rule and rearrange:

    K → ((∃x(D_x∧τ(A)))→τ(B)).

That is the exact translated conclusion. No general existential-elimination
rule, deduction theorem, semantic completeness, or new alpha-equivalence
rule is introduced.

## 7. Certificate insertion and the finite-prefix invariant

At a leaf, verify its supplied proof against `G(f)→τ(f)`, decode it exactly,
and append its needed dependency closure. At an inference, use the already
recorded translated premise indices and the corresponding construction
above. After every source record, assert that its recorded endpoint is the
literal guarded translation of that source formula.

Induction on source length gives the mathematical correctness invariant:

1. The accumulated output is an accepted target proof.
2. Every processed source index has an earlier output endpoint with the
   exact required formula.
3. All copied annotations and rewritten premise indices preserve their
   original rule checks; every new rule instance has the stated side conditions.

The induction starts with the checked nonempty-domain proof and the explicit
top theorem. Checked leaf proofs and the three proved rule constructions
preserve it. A final logical identity use makes the requested last endpoint
the actual last output record, including when dependency reuse found that
formula earlier.

All operations are finite syntactic recursions or record-copy loops with
failure defaults; there is no search for a missing mathematical proof.
As elsewhere, mathematical totality of these natural-number algorithms is
distinct from JavaScript resource limits on giant proof integers.

## 8. Executed validation

Run:

```bash
node research/support-phase-2-next-17-guarded-inference-transport.mjs
```

Two complete transports pass the original whole-integer ZF verifier:

| Supplied domain | Output lines | Proof bits |
|---|---:|---:|
| `v_0=v_0` | 82 | 254,164,842 |
| `∃v_1(v_0=v_1)` | 84 | 277,512,742 |

Each processes six leaves, five MP inferences, two generalizations and one
restricted EE; each removes two surplus guard variables. The source fixture
also includes a closed premise later combined under a nonempty guard, so
the explicit top proof is exercised. The second domain checks hygienically
renamed inserted binders. These domains test the generic algorithm; neither
is claimed to define L.

A canonical Separation and a canonical Replacement source axiom, each with
its separately compiled guarded certificate, are inserted and both resulting
full proofs also pass. The latter also exercises decoding and reserialization
of equality-substitution records. Twelve
negative checks reject invalid domain/source/nonempty proofs, the wrong
nonempty endpoint, missing or swapped leaf proofs, wrong list length,
unexpected inference payload, a wrong-schema leaf proof, output MP
self-reference, an output EE side-condition violation, and a wrong requested
output endpoint. The EE mutation rebuilds its formula to isolate the
side-condition failure. Syntax and execution pass; no record-array-only
verification exception is needed.

## 9. What remains before the finite-fragment L/GCH owner gate

`lem-finite-fragment-l-interpretation-with-gch` must remain held. This increment
closes the implemented **generic three-rule transport** slice, conditional on
checked leaf and nonempty-domain certificates. It does not supply:

- the actual expanded constructibility D and its semantic identification;
- a checked `∃x D(x)` proof for that D;
- uniform arbitrary L-Separation and L-Replacement leaf-proof constructors;
- translated fixed ZF axioms or the general logical-axiom/substitution bridge
  constructors (this transporter accepts such proofs but does not generate them);
- the separate AC/GCH derivations, finite-fragment extraction and any
  ZFC+GCH source-checker extension;
- internal verification of the total compiler/acceptance invariant in the
  selected arithmetic base and its fixed representations.

The displayed finite-prefix proof is a mathematical correctness argument.
No executed PA proof object or completed L-specific uniform PA acceptance
theorem is asserted. GCH and the separate Cohen application remain untouched.
No owner decision or promised consistency strength is changed.

## 10. Read-only implementation provenance

The source proof, nd proof and every leaf proof are checked with the unchanged
`verifyZF` before decoding. The constructors, common-copy normalization and
dependency importer are reused from these committed sources:

| File | SHA-256 |
|---|---|
| `support-phase-2-next-17-zf-axiom-operation-kernel.mjs` | `c75276e5bc2028a098a3e730feefe5654a22371e10765ad118566d66ef17d152` |
| `support-phase-2-next-17-guarded-schema-transformer.mjs` | `165340610c259f4432a3c89b5d19ff3b1ef860427088d2c6310537470c3b51d4` |
| `support-phase-2-next-17-update-existence-proof.mjs` | `56a635da58b1fcfc17a299eed03d6e0d32f446368f0415e8367733b275fdb620` |

The serializer and independent numerical decoder are the unchanged inputs
whose hashes are recorded in the preceding guarded-schema document. Recheck
these proof results if any referenced implementation changes. These are
research provenance records, not engine certificates or live owner artifacts.
