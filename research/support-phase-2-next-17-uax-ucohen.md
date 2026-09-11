# U-AX and U-Cohen: proof-constructor obligations and partial reductions

Date: 2026-09-12 (Australia/Sydney).

This is isolated authoring support for the two open obligations in
[the batch-11 integration map](support-phase-2-next-17-batch11-integration-map.md).
It does not close either obligation, supply a checked numerical derivation,
mark an item ready, or claim acceptance or certification. No item, manifest,
contract, plan, receipt, other support file, or engine state was changed.

## 1. Result of this investigation

The required arithmetic claim is substantially stronger than an external
effective list of fixed-fragment arguments. The local suppliers deliberately
do not assert the stronger claim. No source inspected here supplies a
PA-verified compiler for the repository's particular calculus and certificates.

The useful reductions established below are:

1. A precise finite-template substitution interface isolates the syntactic
   operations from the mathematical template proofs. Uniform predicate
   substitution must rebuild schema certificates and protect free variables;
   unrestricted substitution into a relativized template is invalid.
2. A single explicit reflection-constructor design serves both L-Separation
   and the source-model-existence part of finite-fragment forcing. Its outputs
   are formula and proof codes, never ordinal witnesses or truth values.
3. L-Replacement reduces to L-Separation plus fixed hierarchy/rank blocks;
   no additional uniform choice-of-witness constructor is needed.
4. The Cohen nonconstructibility application can use fixed finite supports of
   two-model constructibility absoluteness. Add the *extension-side* support
   to the target fragment first, then compute ground requirements. This avoids
   pretending that an arbitrary weak forcing extension models full ZF and
   avoids an unnecessary iteration seeking a self-supporting fragment.
5. Once the explicitly listed template library is supplied, all remaining
   support scans, fragment assembly, proof concatenation, and final refutation
   reduction are primitive-recursive operations with direct PA inductions.

Items 1–5 do not constitute the missing library. Sections 4 and 7 specify its
exact outstanding contracts. In particular, statements displayed below as
**required PA judgment** are targets, not assertions proved in this file.

## 2. Fixed local interfaces

Use these current local suppliers under their actual hypotheses:

- `def-set-coded-formal-derivation`: the six logical axiom schemes and three
  rules, with primitive syntax equality, membership, negation, conjunction,
  and existential quantification. Universal quantification and implication
  are expanded abbreviations. Terms in the membership signature are variables.
- `def-effective-theory-and-certified-godel-numbering` and
  `lem-primitive-recursive-syntax-and-proof-checking`: sentinel-list codes,
  explicit axiom certificates, bounded checking, exact free-for substitution,
  and rejected-input defaults. An output rejected derivation has code zero;
  the empty-list code is two, not zero.
- `def-coded-first-order-zf-theory`: six fixed ZF sentences and the exact
  Separation and Replacement constructors. Preserve its implication-only
  Power Set sentence, its von Neumann successor version of Infinity, fresh
  variable policy, increasing parameter order, and certificate reconstruction.
- `lem-finite-reflection-along-constructible-levels`,
  `lem-finite-formula-witness-rank-bounds`, and
  `thm-montague-levy-finite-reflection`: fixed-formula mathematical schemes,
  not arithmetic assertions that a single proof-generating program works.
- `cor-countable-transitive-models-of-fixed-zfc-fragments`: a ZFC theorem
  for each external finite fragment, with ambient AC for the countable
  elementary submodel. It expressly excludes one internal assertion of
  models of all coded finite fragments.
- `lem-forcing-transfer-for-finite-zfc-fragments`: input includes a specified
  formal forcing verification for the particular fragment.
- `thm-formal-consistency-transfer-by-forcing`: verification of the source,
  conversion, and soundness constructors in the arithmetic base is an input.

The owner direction requires the original unconditional promised formal
consistency claim to be fulfilled, not changed to a conditional theorem with
U-AX or U-Cohen as a new unproved premise. The following conditional interfaces
are therefore work specifications, not replacement item statements.

Fix PA as the common arithmetic base. Introduce function symbols only as a
definitional extension by the chosen PA-provably-total primitive-recursive
graph definitions; eliminate those symbols when stating the final theorem.
The arithmetic proof predicates must be these particular definitions, not
arbitrary formulas merely extensionally equivalent in the standard model.

For L let D(x) be the fixed membership-in-L formula and let τ be literal
relativization of parsed formulas, preserving atoms and Boolean constructors
and sending ∃x φ to ∃x(D(x) ∧ τφ), with the specified capture avoidance.
Guard free variables exactly as in
[the formal translation package](support-phase-2-next-17-formal-proof-translation.md),
§§1–5. Set ⊥ to ∃v₀ ¬(v₀=v₀). Fix the normalization proof τ⊥ → ⊥.

## 3. What a verified finite template can and cannot do

### 3.1 A suitable template interface

A template is a finite annotated derivation in the membership language
extended by finitely many temporary relation letters R₀,…,Rₖ. For each Rᵢ
record an ordered argument-variable list and a formula slot. A schema line
records its matrix, distinguished variables, parameter list, and exact
constructor, not merely the words “Separation” or “Replacement.” A template
may have a finite list of open premises, tracked line by line.

An instantiation supplies membership formulas θᵢ and their free-variable
interfaces. It must distinguish:

- variables intended to be bound through an Rᵢ argument;
- external parameters of θᵢ, which must remain free in the substituted proof.

Before substitution rename binders/eigenvariables away from those external
parameters and from every current interface variable. Use successive integers
above the largest index in the input and template. Rename bound occurrences
by scope, not by global textual replacement. Replace each Rᵢ occurrence by
the corresponding capture-free θᵢ substitution. Rebuild every annotation.

Logical schemes 2, 4, and 6 need the exact *free-for* substitution code tested
by the repository checker. If an intermediate capture-avoiding implementation
has alpha-renamed a result, append a verified two-way renaming proof; do not
ask the checker to identify alpha-equivalent strings. Generalization and
restricted existential elimination must retain their free-variable conditions,
including absence from undischarged assumptions when using a deduction macro.

On a nonlogical schema line substitute in its matrix, recompute the actual
free-variable list, and rerun the exact ZF schema constructor and certificate
encoder. If canonical closure differs from the substituted displayed line,
derive that line from the canonical schema sentence by instantiation and
renaming. A source-language predicate letter is not an axiom of pure ZF.

These operations are primitive recursive: scan finite input trees and finite
template lines; compute maxima; recurse on stored trees; append boundedly many
macro blocks per input node; rebase premise indices by the accumulated length.
No universal program evaluator or unbounded proof search is used.

### 3.2 The exact verification lemma needed

Let ValidTemplate(c) be a *syntactic* checker for this template language, and
let Allowed(c,θ) check the explicit substitution interfaces. With the necessary
logical bridge blocks already verified, the instantiator I must satisfy:

    PA ⊢ ValidTemplate(c) ∧ Allowed(c,θ)
             → Deriv_ZF(I(c,θ), InstPrem(c,θ), InstEnd(c,θ)).       (INST)

Here Deriv permits the listed premises; discharge them by the proved
deduction constructor before using Prf. The proof of (INST) is induction on
the finite derivation, using induction on syntax for capture avoidance. Its
invariant includes endpoint equality, acceptance of each output line, the
renaming environment, and correct earlier-line references. This is a
proof-checking theorem, not soundness of ZF and not reflection for arithmetic.

If c is a particular accepted finite template, PA can prove the corresponding
closed checker computation on its numeral. A single such computation is not
an induction proving acceptance of a family c(n). Conversely, an explicitly
specified parametric template plus (INST) is enough; listing decimal proof
codes is not intrinsically required in an item-level mathematical proof.

**Unclosed here:** no complete template calculus, finite bridge library, or
PA proof of (INST) is implemented by the existing support. The description
above is a precise implementation interface, not an assertion that the local
checker has accepted it.

### 3.3 Do not substitute across relativization blindly

For a temporary R and a matrix ψ,

    (R(x))^L[R := ψ] = ψ(x),
    (R(x)[R := ψ])^L = ψ^L(x),

when R is treated as atomic by the first relativization. The two expressions
need not agree. A reflection template must carry already constructed formulas
ψ^L and ψ^{Lβ} as distinct slots and discharge their recursive agreement
obligations. “Substitute the desired formula into the reflection theorem”
does not by itself construct its proof.

## 4. U-AX: explicit reflection and schema constructor specification

### 4.1 Syntax outputs of the shared reflection constructor

Work with one of two fixed, uniformly definable hierarchies Wα:

- Wα=Lα and W=L, for translated Separation;
- Wα=Vα and W=V, for source-model existence.

Each hierarchy comes with fixed finite ZF proofs of monotonicity, nonempty
eventual stages, continuity at nonzero limits, ordinal-indexed exhaustion,
and unique definition of each level. These are hypotheses about supplied
proof blocks, not assumptions that each level satisfies ZF.

On input a finite list Φ, expand abbreviations, normalize binders according
to the declared renaming policy, and list distinct subformulas in postorder.
For each existential subformula eᵢ=∃y ψᵢ(y,x̄), construct:

    Eᵢ(ξ,x̄) := Ord(ξ) ∧ ∃y(y∈Wξ ∧ ψᵢ^W(y,x̄)),

    Rᵢ(x̄,ρ) :=
       [ρ=0 ∧ ¬∃ξ Eᵢ(ξ,x̄)]
       ∨ [Eᵢ(ρ,x̄) ∧ ∀ξ∈ρ ¬Eᵢ(ξ,x̄)].

All terms such as Wξ are relational abbreviations eliminated with fresh
variables. The tuple x̄ lists all free variables of eᵢ in increasing order;
its length is determined by syntax. The matrix ψᵢ^W is a syntactically
constructed formula, not a satisfaction assertion about the proper class W.

For each stage α, form the set of tuples (Wα)^{|x̄|}, with a singleton empty
tuple at arity zero. Canonical finite-tuple projections are expanded formulas.
Generate a Replacement certificate for Rᵢ on this tuple set. The least-ordinal
principle proves unique existence of ρ for every tuple: if a witnessing ordinal
exists, separate the witnessing ordinals below any one such ordinal and take
their least element. This chooses an ordinal, not a witness y.

From the finitely many ranges Tᵢ form

    b(α) = sup({α} ∪ ⋃ᵢ Tᵢ) + 1.

There is no quantification over formulas in this set-theoretic definition:
the displayed finite family expands to a finite formula/conjunction produced
from Φ. The empty-family case gives b(α)=α+1. If an existential is true at a
tuple in Wα, some witness belongs to W_{b(α)}.

Construct the formula B(α,δ) for this particular definable class function.
Construct FinAttempt_B(n,f) saying that f has domain n+1, starts at α₀,
and obeys B at consecutive indices. Choose α₀ above the prescribed bound
and at a nonempty stage. Generate the actual induction and Replacement
instances proving unique finite attempts and collecting their endpoints for
n∈ω. Their union gives β=sup_n α_n, a nonzero limit, and continuity gives
Wβ=⋃_n W_{α_n}. This is an ω-recursion *inside the emitted ZF proof*.
The arithmetic compiler never runs this ordinal recursion.

### 4.2 Proof synthesis by formula structure

Emit in postorder, for every subformula θ, the assertion

    ∀x̄∈Wβ (θ^{Wβ}(x̄) ↔ θ^W(x̄)).

At atoms, membership and equality are the same restricted relations.
Negation and conjunction use fixed propositional/congruence templates. At
∃y ψ, the forward implication uses the child's assertion and Wβ⊆W. For
the reverse implication, put all finitely many parameters in a single
W_{α_n}, use the corresponding least-witness bound, and apply the child
assertion to that witness in W_{α_{n+1}}. Empty parameter tuples need no
selected index. Alpha-renaming bridges connect normalized formulas back to
the exact requested code.

Let Ref_W(Φ) be the pure membership sentence asserting arbitrarily high
nonzero limit reflection for that fixed finite family. The required compiler
H_W is the concatenation of the just specified stages, implemented with the
actual finite templates. Its target is:

    PA ⊢ FormulaList(Φ)
             → Prf_ZF(H_W(Φ), code(Ref_W(Φ))).                    (RF-W)

The needed PA invariant is: at subformula index j the stored proof endpoints
are exactly the recursively computed agreement formulas for indices ≤j;
all generated schema certificates reconstruct their emitted sentences;
each cited endpoint is earlier than its consumer. A second invariant handles
the scan of existential matrices and the generated least-rank graph formulas.

The mathematical proof above explains why the template family exists in
principle. It is not a completed proof of (RF-W): the least-ordinal,
finite-tuple, finite-attempt, schema-closure, and witness-criterion macro
derivations and their substitution checking remain to be supplied. In
particular, the published reflection proof is not itself their encoded library.

### 4.3 Separation output S(φ,z,p̄)

Decode an admissible Separation certificate and retain its exact original
variable lists. Invoke H_L on φ and the finite formulas needed for the
bounding set/parameters. Using their membership in L, choose α with the
bounding set a and all parameters in Lα, then a reflecting nonzero limit β>α.
Transitivity ensures every element of a is in Lβ. Define over Lβ

    y = {z∈Lβ : z∈a ∧ φ^{Lβ}(z,p̄)}.

The definition uses the original finite formula code and the finite parameter
list, so y∈Def(Lβ)=L_{β+1}⊆L. Reflection identifies this y with the desired
subset defined by φ^L. Expand the Def-membership witness using a
syntax-recursive satisfaction/relativization bridge for the particular φ;
merely naming the formula code is not a proof of that bridge.

Close the parameters/guards using the exact source schema policy and the
relativization-renaming bridges. The required output judgment is:

    PA ⊢ AdmSep(φ,z,p̄)
             → Prf_ZF(S(φ,z,p̄), τ(Sep(φ,z,p̄))).                 (SEP-L)

This further needs a primitive-recursive satisfaction-bridge constructor
SatBridge(φ), proving that the set-model satisfaction of the canonical code
of φ agrees with the syntactically relativized φ. Its atomic, Boolean and
quantifier proof cases use the chosen assignment coding; its PA verification
is another syntax induction. No truth predicate for L is introduced.

### 4.4 Replacement output R(φ,z,w,p̄)

Decode an admissible Replacement certificate. Under the translated hypothesis
that φ^L defines a unique L-output for each z∈a, use the ambient Replacement
instance with matrix

    D(w) ∧ φ^L(z,w,p̄)

to form the exact image Y. Its members are in L. A fixed level-bound argument
collects their least constructibility stages by ambient Replacement and
places Y⊆Lγ for an ordinal γ. The ordinal γ may be enlarged; Lγ∈L.

Use S for the formula

    ∃z(z∈a ∧ φ(z,w,p̄))

with bounding set Lγ and all parameters in L. Its translated subset is
exactly Y, so Y∈L. Finish the exact translated Replacement sentence by
guard discharge and renaming. Parameters a and Lγ must be retained through
the schema constructor and then bound at the stated conclusion.

Thus (SEP-L), the instantiated ambient Replacement constructor, and fixed
level-bound templates suffice for:

    PA ⊢ AdmRep(φ,z,w,p̄)
             → Prf_ZF(R(φ,z,w,p̄), τ(Rep(φ,z,w,p̄))).             (REP-L)

There is no independent choice principle hidden in this reduction. The two
least-stage constructions collect uniquely defined ordinals, not arbitrary
elements from witness classes. The extra uniform obligation beyond SEP-L is
certificate/template correctness, not a new mathematical Replacement lemma.

### 4.5 Fixed axiom blocks and assembly

For U=ZFC+GCH, the remaining non-schema axiom labels are finite: the six ZF
sentences, the chosen AC sentence, and the chosen GCH sentence. Use a fixed
ZF proof of the exact τ-translation of each. The support does not currently
contain all these proof objects; notably the promised GCH item is still an
authoring dependency. Do not label those constants “checked” before the
finite proofs have been supplied and inspected.

Given those fixed blocks, (SEP-L), and (REP-L), define A(a,w) by the bounded
case distinction on the certified axiom label. Reject invalid certificates.
The exact required PA judgment is

    PA ⊢ E_U(a,w) → Prf_ZF(A(a,w),τ(a)).                          (AX-L)

Together with the generic guarded proof compiler and τ⊥→⊥ this yields a
primitive-recursive r_L with the PA refutation-reduction assertion. This
last assembly does not require PA to prove a single translated set-theory
axiom *true*. It proves that each output string is a ZF derivation.

## 5. U-Cohen: use precise model-conversion contracts

Put T=ZFC+¬(V=L). A finite target support Δ is a list of sentences together
with valid T-certificates. Let Mod_Δ(N) abbreviate the **finite conjunction**
of their relativizations to the nonempty set N, with any satisfaction-code
presentation connected by the verified SatBridge constructor.

The required total primitive-recursive outputs are a finite certified
Γ(Δ)⊆ZFC and two proof codes E(Δ), C(Δ) satisfying:

    PA ⊢ CertifiedTargetList(Δ)
      → Prf_ZFC(E(Δ), code(∃M CTM_{Γ(Δ)}(M))),                  (EX-CTM)

    PA ⊢ CertifiedTargetList(Δ)
      → Prf_ZFC(C(Δ), code(∀M(CTM_{Γ(Δ)}(M)
                                  → ∃N Mod_Δ(N)))).           (CONVERT)

The formula CTM_Γ includes countability, transitivity, nonemptiness and the
finite conjunction of Γ. It is not the unbounded assertion “M models ZFC.”
The proof of CONVERT may construct G and N internally, but the arithmetic
function C only emits a finite ZFC proof of that assertion.

For EX-CTM use H_V on Γ together with Extensionality and the fixed formulas
needed to ensure an infinite reflecting stage above ω. Append the fixed
countable-elementary-submodel and transitive-collapse proof blocks, and the
syntax-recursive satisfaction/isomorphism bridges for Γ. Reflection of
Choice, if it occurs, is just reflection of that particular fixed sentence
followed by its ambient ZFC proof. This route uses ambient AC, explicitly.

Uniformity must hold over certified lists, including nonstandard lists in
the arithmetic verification; proving a separate theorem for every standard
Γ is not (EX-CTM). There is no Gödel conflict: PA verifies a map to separate
ZFC proofs, not the truth of all their conclusions. ZFC does not thereby
prove one assertion that every internally coded finite ZFC fragment has a CTM.

## 6. Cohen nonconstructibility and the finite-fragment boundary

### 6.1 The finite mathematical argument

Use P=2^{<ω}, ordered by extension, with top the empty sequence. For a
transitive ground with the finite closure facts actually needed, P and its
elements are the actual finite binary sequences. The sets

    D_n = {s∈P : n<length(s)},
    E_x = {s∈P : ∃i<length(s) (s(i)≠χ_x(i))},

for n∈ω and ground reals x⊆ω are dense and belong to the ground. For E_x,
extend any s by the bit opposite χ_x(length(s)). An M-generic filter gives
the real c={n : (⋃G)(n)=1}; the D_n make it total and the E_x give c≠x for
every ground real. The canonical name for c and its valuation use only the
fixed finite closure and forcing blocks cited for this application.

Thus c∉M. That statement alone does **not** imply N⊨c∉L when N is a weak
extension: its internal hierarchy definition must have the required
absoluteness properties. This is the missing extra step in an argument that
only invokes the usual full-ZF theorem on a finite-fragment model.

### 6.2 A fixed two-model support route

Author a finite first-order derivation Q_abs proving a conditional statement
of this form, with explicit fixed finite fragments K_M,K_N⊆ZF:

    Trans(M) ∧ Trans(N) ∧ M⊆N ∧ Ord∩M=Ord∩N
      ∧ Mod_{K_M}(M) ∧ Mod_{K_N}(N)
       → ∀x∈N (D^N(x) → x∈M).                                 (ABS-FIN)

This is a legitimate finite-support target. To obtain it, formalize the
usual comparison of internal L-histories in two transitive set domains:
the hierarchy histories exist on each internal ordinal interval; each
successor Def operation is absolute; union at limits is absolute; and the
definition D^N(x) presents membership in some internally constructed level.
Equal ordinal heights then put the same level in M. Ambient transfinite
induction is over actual ordinals in these set domains, not an internal
assumption that an arbitrary weak level models full ZF.

Track every use of a schema inside M or N as its exact relativized sentence.
After expanding all cited proof blocks, let K_M and K_N be the corresponding
finite sentence/certificate lists. Ambient ZFC axiom lines remain ambient
proof support, not automatically axioms required inside both models.

The published `thm-constructibility-is-absolute-and-l-is-minimal` explains the
mathematical comparison, but its full-ZF model hypothesis cannot be renamed
K_M by fiat. **Q_abs and the exact two support lists remain unprovided.**
This file does not invent either list or assert that an unspecified weak
fragment suffices. It also does not use the separate U-L arbitrary-limit
supplier without proving that its different hypotheses apply here.

### 6.3 Noncircular order of finite support construction

Once Q_abs has been supplied, define the augmented target ZFC fragment

    Δ⁺ = (the ZFC-labelled sentences of Δ) ∪ K_N ∪ K_basic,N.

K_basic,N is the fixed finite extension support for having ω, the canonical
real c, transitivity/ordinal comparison, and the displayed conclusion.
Compute ground requirements for forcing every sentence of Δ⁺. Add K_M and
the fixed ground support for P, D_n, E_x, names, valuation, genericity and
ordinal preservation. This resulting list is Γ(Δ).

There is no requirement Γ⊆Δ⁺ or Γ=Δ⁺. Therefore one need not repeatedly
apply the support operation until a fixed point is reached. Source-only
requirements do not have to be forced into the extension unless Q_abs or
another target proof actually needs them there. The compiler must maintain
this source/target polarity in its proof premises.

From CTM_Γ choose a generic G using the available countable enumeration,
form N=M[G], and derive Mod_{Δ⁺}(N). The fixed name/dense-set argument gives
c∈N\M; the fixed same-ordinals block and Q_abs imply N⊨¬D(c), hence
N⊨¬(V=L). Together with the original ZFC-labelled Δ sentences this gives
Mod_Δ(N), whether or not Δ actually uses its extra axiom label.

## 7. The remaining forcing proof-template library

To make §6 into (CONVERT), define a syntactic formula transformer F by the
actual local forcing clauses. Its atoms are the fixed atomic forcing
formulas from the ranked name recursion; negation and conjunction use the
fixed forcing clauses; existential quantification uses the dense-witness
clause with all names. Fresh parameters for P, the order and the condition
must be protected. Formula recursion is primitive recursive; recursion on
the names belongs to the emitted set-theory proof, not to this syntax map.

Required constructor families, each with a PA proof of endpoint correctness,
are the following. Their output proofs must carry source/target assumptions
explicitly so that the ground-fragment extraction is meaningful.

| Constructor | Output obligation | Essential varying schema lines |
|---|---|---|
| FT(φ) | Definability/truth/monotonicity-dense forcing blocks for φ on the chosen finite ground support | Sets of conditions and names defined by F of subformulas; existential truth/dense-witness instances |
| ForceSep(φ) | Extension's exact Separation instance for φ | Ground Separation on dom(σ)×P by F(ρ∈σ ∧ φ(ρ,p̄)) |
| ForceRep(φ) | Extension's exact Replacement instance for φ | Ground Replacement for least ordinal rank of a name forced by p to satisfy φ; ground Separation for the bounded name set; target range-separation proof from ForceSep |
| ForceFixed(j) | Each of the six fixed ZF axioms and AC in the extension | Fixed finite blocks, including Power Set's subset-name construction and Choice's well-order of a ground name set |
| SatBridge(φ) | Satisfaction/relativization identity in a nonempty set structure | Assignment update and variable renaming, by syntax induction |
| Sound(p) | Soundness of this particular finite certified derivation in a model of its support | Six logical cases, MP, generalization and restricted existential elimination |

For ForceRep(φ), the graph formula is explicit: at (ρ,p), assign zero if
there is no name τ with Fφ(p,ρ,τ,p̄); otherwise assign the least ordinal γ
with such a τ∈Vγ. Collect those ordinals, bound them by δ, and retain all
names in Vδ. The generic truth lemma and uniqueness of the target output
identify a bounded-name value with the desired output. No representative
name is chosen for every pair. This is the choice-free proof already given
in `thm-generic-extensions-satisfy-zf-and-zfc`, but its variable-formula
instances still need the certified proof constructor.

ForceFixed(AC) is one fixed output block, but its proof uses specific
instances of the already designed ForceSep and ForceRep families to build
least-index fibres and the final choice function. Retain those particular
schema instances in the source support. Do not treat the fixed AC label as
permission to invoke full target ZF. Ambient AC is used for obtaining the
CTM; ground AC is used for the well-order of names. Neither permits silently
introducing a maximum-principle witness-name selector in the ZF branch.

For each generated proof, scan its nonlogical *ground premise* lines and
collect their exact ZFC certificates. Expand all theorem/macro references
first. A scan of high-level theorem names is not the finite support of the
derivation. Prefix induction proves that the generated Γ supplies every
premise actually used by CONVERT.

**Unclosed:** FT, ForceSep, ForceRep and the required fixed forcing blocks
are not given as complete finite annotated template programs with PA
correctness proofs. The generic equivalence support U-F supplies none of
these arithmetic compiler obligations. The existing semantic forcing proof
and its explicit least-rank Replacement argument are mathematical input,
not a substitute for those proofs.

## 8. Final arithmetic assembly, conditional on the missing library

Let Support(p) scan the certified nonlogical lines of a T-proof p, retaining
their axiom certificates. On invalid input return zero. On valid refutations:

    Δ := Support(p)
    q₁ := E(Δ)
    q₂ := C(Δ)
    q₃ := Sound(p)
    r_C(p) := concatenate/rebase(q₁,q₂,q₃, fixed contradiction block).

Sound(p) is not an assertion that T is sound. It emits a ZFC proof that any
nonempty set model of the finitely many axiom lines of this particular
derivation satisfies its final formula. It works for open intermediate
lines by universal validity under assignments, with the logical rules'
actual side conditions. The final formula ⊥ cannot hold in such a model.

From (EX-CTM), (CONVERT), the Sound correctness judgment, and the verified
concatenation operations, PA prefix induction gives

    PA ⊢ ∀p(Prf_T(p,⊥) → Prf_ZFC(r_C(p),⊥)).                  (COHEN)

Compose this with r_L restricted to ZFC proofs, or first weaken ZFC proofs
to ZFC+GCH with the explicit certificate injection. One then obtains

    PA ⊢ Con(ZF) → Con(ZFC+¬(V=L)).

Consequently, under Con(ZF), a ZF proof of V=L would give a refutation of
ZFC+¬(V=L), contrary to that implication. The consumer remains a false
statement item. No CTM of full ZFC is inferred from Con(ZF), and no proof
of Con(ZF) in ZF is asserted.

All assertions in this section are conditional on the displayed constructor
judgments. They are not evidence that U-AX or U-Cohen has been discharged.

## 9. Exactly what remains to close

The irreducible gaps *in the currently supplied material* are these; this
is not a claim that they are impossible or independent of PA.

- **AX-0:** Fully specify the finite-template format, schema instantiation,
  logical/hygiene bridge library, and the PA proof of (INST). Choose exact
  pure-membership formulas for every fixed abbreviation used in the outputs.
- **AX-1:** Supply the actual H_L and SatBridge templates and their PA
  syntax/prefix invariants; prove (RF-L) and (SEP-L). This is the principal
  L-specific unclosed family.
- **AX-2:** Supply/check the fixed hierarchy/rank and translated fixed-axiom
  proof blocks, including the authored GCH derivation; implement the stated
  Replacement/axiom dispatch to prove (REP-L) and (AX-L).
- **C-1:** Instantiate the shared reflection design for V and append the
  countable elementary-submodel/collapse templates to prove (EX-CTM).
- **C-2:** Supply FT, ForceSep, ForceRep, ForceFixed and their PA proofs;
  explicitly preserve source/extension premise polarity and prove (CONVERT).
- **C-3:** Supply Q_abs, its exact K_M/K_N support lists and the fixed Cohen
  name/dense-set/same-ordinals blocks. A full-ZF semantic reference does not
  close this finite-fragment application.
- **C-4:** Supply the finite set-model Sound template and its PA invariant,
  then carry out the conditional assembly in §8 with the actual proof codes.

A repair author may fully author a local supplier for these obligations on
the assigned existing A pages, before consumers, subject to the owner
direction. This support adds no IDs and changes no manifests/contracts.
If the library cannot be supplied, keep these exact obligations open; do not
replace them with “effective by inspection,” unbounded proof search, an
unspecified sufficiently strong arithmetic base, or a full-CTM assumption.

## 10. Primary-source checks and their limits

Paulson's account explicitly separates the constructibility mathematics
from the metatheoretic consistency conclusion and identifies comprehension
as a formula-indexed task. Its finite-instance methods are useful for the
template design, but it is not a checked proof of (AX-L) for this calculus.
Read the proof-outline and reflection/comprehension discussion in
[Paulson, *The Relative Consistency of the Axiom of Choice Mechanized Using
Isabelle/ZF*, §§2 and 7](https://arxiv.org/html/2104.12674v1).

The later forcing formalization gives notably precise Replacement-support
bookkeeping, but states that consistency and first-order-calculus metatheory
were not formalized. Moreover its displayed background ZC includes the
Separation schema; a finite list of extra Replacement instances is not, by
itself, a finite ZFC fragment. These observations explain why that source
cannot be imported as (COHEN). Read §§1.2, 2.1–2.3 and 4.1–4.2 of
[Gunther–Pagano–Sánchez Terraf–Steinberg, *The formal verification of the ctm
approach to forcing*](https://cs.famaf.unc.edu.ar/~pedro/forcing/independence_ch_isabelle.pdf).
Its abstract also states a specific fragment-transfer result; no transfer
of its alternative encodings into the repository checker was carried out.

Retrieval record for this investigation: Paulson HTML succeeded; the initial
PMC forcing-paper page returned a browser challenge, and an author-hosted
2020 PDF subsequently opened (a later page fetch timed out). For the later
paper the arXiv HTML URL returned 404; the author-hosted 34-page PDF opened
successfully and supplied the sections just cited. A later request for its
§6.1 page text timed out. No claim of reading that entire section or checking
its code is made. The successful source locations above should be reused,
not treated as exhausted-source failures. All detailed constructor designs
in §§3–8 are local deductions/proposals, not results attributed to those
formalization projects.
