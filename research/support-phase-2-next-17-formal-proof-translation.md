# Supplement: formal proof translation through L

Date: 2026-09-12. Isolated support for the reopened batch-11 work in
`phase-2-next-17`. This note develops the arithmetic proof interface; it does
not certify an implementation or close an item. It leaves all items, plans,
run outputs, receipts, engine state, and the earlier constructibility support
file unchanged.

**Result of this investigation:** the generic proof compiler has a precise
primitive-recursive construction and an induction proof of its arithmetic
correctness, conditional on a uniform axiom-proof constructor. The remaining
L-specific lemma is stated exactly in Section 7. The existing fixed-instance
inner-model theorem does not establish that lemma. The difficult schema
constructor is Separation, through reflection on formula syntax; Replacement
can then use it with the published rank-bound proof. This supplement does not
claim to have supplied the missing constructor and its PA verification.

## 1. Fix the arithmetic interface before stating the theorem

Let T=ZF and U=ZFC+GCH, in the pure membership signature with logical equality.
Variables are the only terms. Use the repository's six logical axiom schemes
and three inference rules from `def-set-coded-formal-derivation`, after
expanding negation/conjunction/existential abbreviations exactly as prescribed.

Use the numerical presentation in
`def-effective-theory-and-certified-godel-numbering`. If b(n) is the
canonical binary word for n, and c(w)=1^|w| 0 w, the code of a list
`(a_0,...,a_(k-1))` has binary word

`1 1^k 0 c(b(a_0)) ... c(b(a_(k-1)))`.

The empty list is 2. Invalid list codes have validity false, length and
coordinates zero; invalid append/concatenation has the stated empty-list
default. Tokens, formula words, line records and proof lists use nested
applications of this same encoding. The graph of a compiler on malformed
inputs must still be total; choose output 0 for a rejected proof, which is
not an accepted derivation.

Write E_T(a,w) and E_U(a,w) for the fixed primitive-recursive predicates
checking nonlogical axiom certificates. A certificate for a ZF schema must
include its schema tag, input formula, designated variables and parameter
information sufficient to reconstruct the *exact* axiom sentence. Checking
means syntactic equality with this reconstruction, not logical equivalence
or unbounded search for a matching formula. In U add the fixed AC and GCH
sentence tags. For a different already fixed certificate presentation,
provide primitive-recursive adapters and PA proofs that they preserve
certificate validity; do not silently change the proof predicate.

The two local schema constructors will be denoted Sep and Rep. They implement
the exact definitions in `def-coded-first-order-zf-theory`:

- `Sep(phi,z)` universally closes
  `exists y forall z (z in y iff (z in x and phi(z,parameters)))`,
  choosing x,y fresh and listing all remaining free variables in increasing
  index order for the universal closure.
- `Rep(phi,z,w)` universally closes
  `forall z(z in A -> exists!w phi(z,w,parameters)) ->
   exists B forall w(w in B iff exists z(z in A and phi(z,w,parameters)))`,
  with A,B fresh, the repository's fresh variable in the uniqueness clause,
  and its exact expansion of the abbreviations.

The fixed ZF axioms here are the repository's six listed sentences, not a
textbook's alternative list. In particular Power Set has its implication-only
form and Infinity uses von Neumann successor. Empty Set has a fixed ZF
derivation; it is not an extra axiom tag in this presentation.

Let `chk_T(p,a)` be the characteristic function of certified proof checking,
with **proof first**. Use the chosen PA-provably total representations, not
an arbitrary formula with the same standard truth values.
`thm-primitive-recursive-numeralwise-representability` provides representations
that are total and single-valued in PA and PA-equivalent to syntactic Sigma_1
graphs. `lem-primitive-recursive-syntax-and-proof-checking` specifies the
finite algorithms. Their correctness arguments must be internalized for
these representations whenever used in a uniform PA assertion.

The conclusion sought is `PA proves Con(T) -> Con(U)`, where the contradiction
sentence is the fixed pure-language formula
`bottom := exists v_0 not(v_0=v_0)`.
No claim that Q proves compiler totality, that all primitive-recursive graphs
are bounded formulas in bare arithmetic, or that ZF proves Con(ZF) is made.

## 2. Formula translation with explicit hygiene

Fix one actual membership formula D(v_0) defining constructibility. It has
no other free variable. Expand every abbreviation in D once; its code is a
fixed compiler parameter. D_i is a capture-free renamed copy with only v_i
free. Relativization tau is the structural recursion

`tau(v_i=v_j) = (v_i=v_j)`;
`tau(v_i in v_j) = (v_i in v_j)`;
`tau(not phi) = not tau(phi)`;
`tau(phi and psi) = tau(phi) and tau(psi)`;
`tau(exists v_i phi) = exists v_i(D_i and tau(phi))`.

This is a raw relational interpretation, equivalent to the published
domain/equality/value-graph interpretation with domain D and actual equality.
If the application consumes the latter's literal numerical translation,
insert the syntax-recursive equivalence proof. Their atomic codes differ.

For an open formula a let G(a) be the right-associated conjunction of D_i
over its increasing free-variable list, and set `t(a)=G(a) -> tau(a)`.
For an empty list fix `top := forall v_0(v_0=v_0)` and use `top` as the guard.
For invalid formula codes t(a)=0. Keep the association and exact expansion
of implication fixed; semantic associativity is not code equality.

The compiler processes the parsed subexpressions in increasing interval
length and records the translation at each node. Lists of free indices,
their sorted unions and differences, and a fresh index exceeding all indices
in a finite input are primitive recursive. The translated output can be
very large; its size need not be bounded by a polynomial or fixed-height
exponential. A primitive recursion retaining the finite output history is
enough. Its register-update functions are fixed, not a universal evaluator
for arbitrary primitive-recursive programs.

PA proves by induction on the parse computation that valid formulas translate
to valid formulas and that `FV(tau(a))=FV(a)`. The induction is on an
arithmetically defined finite parse table. It does not evaluate satisfaction
in L. Totality of this specific primitive recursion follows from the local
PA-total representation theorem.

**Substitution must have proof bridges.** Because D_i introduces bound
variables, tau(phi[y/x]) and tau(phi)[y/x] need not have identical codes.
Even if y is free for x in phi, it may conflict with a binder introduced by
the chosen D_x expansion. Rename those binders first. A primitive-recursive
bridge constructor traverses the formula tree and emits the two implication
proofs connecting the translations after capture-free substitution. At atoms
only the variable substitution is checked. At negation and conjunction use
fixed Boolean congruence blocks. At an existential rename the binder away
from the substitution indices, use the child's bridge, and apply quantified
congruence. Renaming a bound variable uses the explicit two-direction
derivations in `lem-hilbert-propositional-and-equality-rules`.

In PA the bridge invariant states *proof-checker acceptance with the exact
two endpoints*. An alpha-equivalence test alone is insufficient: alpha
conversion is not an extra inference rule in the fixed calculus. The same
bridge principle handles any normalized universal abbreviation
`forall x(D(x)->A)` versus the literal translation obtained from
`forall x phi := not exists x not phi`.

## 3. Fixed proof blocks versus uniform proof templates

A fixed proof block is a finite natural-number constant together with its
actual accepted conclusion. For a fixed true checker computation, PA proves
its numeral instance by the representation theorem. Externally choosing a
proof of one fixed known ZF theorem is harmless; there are only finitely many
such choices. It gives no uniform algorithm for all instances of a schema.

A proof template instead has finitely many formula and variable holes, a
finite list of annotated lines, and explicit syntactic side conditions. Its
instantiator first reserves fresh variables, substitutes the supplied
formulas, expands abbreviations and rebases premise indices. It must also
instantiate the axiom annotations, not just the displayed formulas.

For a template with a fixed number of lines, PA verifies the instance by
checking each of those lines symbolically. A formula hole in a propositional
tautology is treated as one Boolean letter. A schema hole in a nonlogical
axiom is checked by rebuilding Sep/Rep with the substituted formula. For
variable-length output templates, PA induction on the constructing loop
must prove the same endpoint and validity invariant. “The instantiated
formula is a theorem” is not this invariant.

Templates can be combined by the following two primitive-recursive operations:

- Concatenation: copy all line records, adding the preceding output length
  to *local* premise indices in the appended block; imported premises are
  replaced using a supplied endpoint table.
- Inlining: replace a proved nonlogical premise by its certified proof block,
  store the new endpoint, and redirect all later uses to that endpoint.

PA verifies both by induction on copied lines: the formulas and certificates
are unchanged and each transformed reference points to the intended earlier
line. A block carrying an imported open formula is used only as a reference
to an already proved line. It does not become an additional sentence-theory
axiom or an unguarded open assumption.

## 4. Guarded logical translation: all six schemes and three rules

Fix a certified T proof N_D of `exists x D(x)`. This is the only
nonlogical input required for the generic raw-relativization compiler.
Its existence follows from empty being constructible once D is fixed.

The fundamental guard-removal block is explicit. From a proved
`(G and D(x))->B` with x absent from G,B, append:

1. The Boolean rearrangement `D(x)->(G->B)`.
2. Restricted existential elimination,
   `(exists x D(x))->(G->B)`; its side condition is exactly x absent from
   G and B.
3. A renamed copy of N_D and MP, obtaining `G->B`.

A loop removes any finite list of surplus guard variables. PA checks their
absence using the syntactic FV function. This block is needed even in pure
membership logic: source proofs can use free variables absent from the
eventual conclusion.

Each logical axiom is compiled as follows. All displayed formulas below are
proof templates; universal and implication notation is expanded before
checking. Substitution bridges from Section 2 are appended where required.

| Scheme | Construction of its guarded translation |
| --- | --- |
| Boolean tautology | Reuse its certified Boolean skeleton with translated formula substitutions, then add the guard by a Boolean tautology. PA proves the skeleton's truth-table test is unchanged. |
| Universal instantiation | Under the union guard include D(y); instantiate the normalized `forall x(D(x)->A)` at y, apply MP under the guard, and connect to tau(phi[y/x]) by the substitution bridge. Remove any surplus y guard. |
| Restricted distribution | From `forall x(D(x)->(A->B))` and A derive `forall x(D(x)->B)`, generalizing only with x absent from A and from the retained outer guard. The input annotation provides x absent from the source antecedent; FV preservation supplies its translated form. |
| Existential introduction | Under the union guard combine D(y) with the translated substituted matrix, use `theta[y/x]->exists x theta` for `theta=D(x) and A`, and append the substitution bridge. Remove surplus guards. |
| Reflexivity | Actual equality reflexivity followed by guard weakening. |
| Equality substitution | Apply the equality-substitution axiom to the translated, hygienically renamed matrix and use the two substitution bridges; actual equality also transports each D guard. |

Universal instantiation and existential introduction above cover every term
because every term in this signature is a variable. The distribution block
is derived from the stated quantifier axioms and generalization, not from a
semantic completeness theorem.

For the three source inference rules:

- **MP:** enlarge the two premise guards to the union of their free-variable
  lists, use the fixed propositional MP-combination block, and remove all
  variables absent from the consequent by the guard-removal loop.
- **Generalization in x:** after adding D(x) if it is absent, write the
  translated premise as `G -> (D(x)->A)` with x absent from G. Generalize
  x, use restricted distribution, and normalize to the translation of
  `forall x phi`. The original premises are sentence-theory theorems, so
  this generalization has no undischarged open assumption.
- **Restricted existential elimination:** the input is phi->psi with x
  absent from psi. Put G equal to the guard on all free variables of the
  input except x. Rearrange its translated premise, adding D(x) if necessary,
  to `(D(x) and tau(phi))->(G->tau(psi))`. Apply the *actual* restricted
  elimination rule; x is absent from its consequent. Rearrange back and
  remove surplus guards to obtain the desired guarded translation.

These constructions give a syntax-recursive library of logical proof
blocks. Its PA correctness proof uses induction on bridge construction and
the finite guard loops, followed by the fixed scheme/rule checks. These
are syntactic inductions over codes. PA is not proving soundness of ZF.
The local interpretation lemma provides the mathematical derivations; an
item claiming a fully fixed numerical implementation must still instantiate
these templates and their annotations, rather than use this table as a
claimed machine-checked artifact.

## 5. The compositional compiler theorem

Suppose a specified primitive-recursive function A(a,w) is supplied, with
PA proof

`forall a,w (E_U(a,w) -> Prf_T(A(a,w),tau(a)))`.                 (AX)

Suppose also that the coding algorithms, N_D, hygiene bridges and logical
templates have the PA verifications specified above. There is then a
primitive-recursive r, with a PA proof

`forall p,a (Prf_U(p,a) -> Prf_T(r(p),t(a)))`.                  (TR)

**Construction.** Reject malformed source proofs with the fixed default.
Otherwise initialize Q with the fixed T proof N_D and initialize an empty
endpoint list J. At source line i:

1. Read its formula, tag, certificate or inference parameters, and earlier
   source indices. This is bounded decoding, with no search for a certificate.
2. At a nonlogical axiom append A(a_i,w_i), then a fixed block proving
   `top->tau(a_i)`; all such axioms are sentences.
3. At a logical axiom append the corresponding guarded block from Section 4.
4. At an inference use J to locate translated premise endpoints and append
   the corresponding inference block.
5. Append the new endpoint index to J and retain Q,J as the recursion state.

All updates are compositions of specific primitive-recursive functions.
Ordinary primitive recursion on the source proof length therefore defines
the compiler, regardless of growth in the Q register. A second compiler
version can produce a result for arbitrary prefixes, with a persistent
invalid flag; this gives a convenient PA induction without a partial function.

**PA proof.** Induct on i with the assertion that, provided the first i
source lines pass checking, Q is a valid T derivation and for each j<i,
the line at J(j) is exactly t(a_j). Also maintain `J(j)<len(Q)`, the
strictly earlier premise condition, and the correct source-prefix decoding.
At a nonlogical line apply (AX); at a logical line use its verified template;
at an inference use the endpoint invariant and its template theorem.
Concatenation's index theorem preserves all earlier lines and references.
Each branch is checked by the same tag cases as the proof checker. At the
last line this proves (TR). The PA-total graphs for the primitive-recursive
functions eliminate the temporary function symbols in this proof.

For contradiction transfer append a fixed block converting
`top -> exists x(D(x) and not(x=x))` to bottom: prove top, apply MP,
derive the contradiction from equality reflexivity, and use explosion.
Let R be this append operation composed with r. Its verified assertion is

`forall p (Prf_U(p,bottom) -> Prf_T(R(p),bottom))`.             (REF)

Working in PA under Con(T), an arbitrary p cannot satisfy the antecedent,
since its output R(p) would be a T refutation. Universal generalization gives
Con(U). This is exactly the published verified-reduction theorem's hypothesis
and conclusion. Totality alone gives neither (TR) nor (REF).

## 6. How the L axiom constructor should be built

Fixed axioms, AC and the final GCH proof contribute finitely many fixed
blocks. Once the upstream GCH item has a full ZF proof of its relativization,
that block is constant; GCH does not create a new infinite schema of proof
obligations. No proof of the currently open GCH item is assumed certified
by this supplement.

The two infinite tags require functions A_Sep and A_Rep on their admissible
formula/variable payloads. Their outputs must end with the **relativization
of the source schema sentence**. Neither merely substituting tau(phi) into
an ambient schema nor using an ambient bounding set establishes that the
resulting set belongs to L.

### Separation

Let Ref_L(phi) be the pure-language sentence obtained by expanding:

“Above every ordinal alpha there is a nonzero limit beta such that, for
every tuple a in L_beta in the free-variable places of phi,
phi^L(a) iff phi^(L_beta)(a).”

This is a primitive-recursive *sentence constructor*. The hierarchy and D
formulas are fixed; tuple guards and both relativizations are built from the
input syntax. This statement is about each produced sentence, not an
internal truth predicate for all formulas in L.

An adequate stronger helper is a primitive-recursive proof generator H with
the PA theorem

`Form(phi) -> Prf_ZF(H(phi),Ref_L(phi))`.                       (RF)

Given (RF), construct A_Sep by appending the fixed proof pattern of
`thm-separation-in-the-constructible-universe`: place a and all parameters
in one level, invoke Ref_L(phi), define the desired subset over that
reflecting level, and infer it belongs to the next level. The input
parameter list varies, so forming the common bound and universally closing
the result are finite loops with explicit FV guards. The final block proves
tau(Sep(phi,z)), including D for the subset witness.

To build H from the existing reflection proof, the compiler must explicitly
carry a list of subformulas and, for every existential matrix psi, its
actual relativization psi^L. Form the least witness-stage formula:

`r_psi(tuple)=0` if no y in L satisfies psi^L;
otherwise it is the least eta with such a y in L_eta.

The compiler emits the Replacement instance for this *specific formula*
over the tuple set of L_alpha, then the supremum-plus-one bound. It forms
the finite conjunction of bounds, emits the finite-attempt recursion and
Replacement-on-omega instances for its iteration, and the limit/supremum
argument. Finally it emits a structural proof of the witness criterion:
atoms are identical, Boolean nodes append equivalence blocks, and each
existential uses its generated bound and the child equivalence. Every
generated schema axiom carries the exact reconstructed certificate.

The finite-attempt recurrence here occurs in the *output ZF proof*. H does
not calculate any ordinal or evaluate whether psi^L holds. Its arithmetic
computation only assembles formula and proof codes. This distinction is
what makes a primitive-recursive generator plausible without a set-theoretic
truth algorithm.

The unresolved work is to express these output blocks as actual proof
templates in the fixed calculus and prove their syntactic correctness in
PA. The existing reflection items give the mathematical scheme, not (RF).
There is no valid shortcut replacing the whole variable input phi with a
single predicate hole in one fixed reflection proof: predicate substitution
does not commute with relativization when the substituted formula contains
quantifiers. The structural compiler must account for those quantifiers.

### Replacement

For a functional source matrix phi(z,w,p), the guarded internal antecedent
implies that the ambient formula

`D(w) and tau(phi)(z,w,p)`

is functional on a. Use the certified ambient Replacement instance for that
formula to obtain its image Y. Use the fixed constructible-rank definition
and another ambient Replacement instance to bound all elements of Y in
one L_beta. Apply A_Sep to the formula

`exists z(z in a and phi(z,w,p))`

on the set L_beta, thereby placing the image in L. The uniqueness and
universal-closure clauses require the fixed substitution/quantifier bridges.
All formulas passed to Sep/Rep are specified syntax transformations, so
this assembly is primitive recursive if A_Sep is. PA proves its validity
using (AX) for those Separation outputs and the fixed schema-certificate
checks. Thus no second reflection compiler is needed for Replacement.

## 7. Minimal exact remaining lemma

At the abstract boundary the necessary supplier is the following, with
the numerical presentations and D fixed as in Sections 1–2:

**Verified L axiom-proof constructor.** Supply a particular
primitive-recursive function A and particular PA-total graph representations
such that PA proves (AX), for E_U coding exactly ZFC+GCH. Supply the finitely
many fixed proof blocks and the primitive-recursive constructions for the
Separation/Replacement tags. Each output is an accepted ZF derivation of
the exact tau(a), not merely an equivalent sentence without a proof bridge.

Within the presently read mathematical dependencies, the only unbounded
L-specific family not reduced to a generic compiler or fixed proof block is
the verified Separation constructor. A sufficient sharpened statement is:

`PA proves forall phi,z (AdmSep(phi,z) ->`
`  Prf_ZF(S(phi,z),tau(Sep(phi,z))))`,                          (SEP)

where S is a specified primitive-recursive function and AdmSep includes the
precise formula/variable payload checks. Section 6 explains how (RF) implies
(SEP), and how (SEP), with the fixed rank-bound blocks, supplies the
Replacement branch. Proving (RF) is one route; (SEP) is the smaller interface
actually consumed by the L interpreter.

This is an unresolved **proof-construction and internal verification lemma**,
not an unresolved claim that L satisfies Separation. No contradiction with
Tarski arises from (SEP): it asserts existence of syntactic ZF proofs of
particular sentences, not their set-theoretic truth. No contradiction with
second incompleteness arises from (REF): it transfers refutations from U to
T and yields a conditional consistency implication, never Con(T) itself.

One cannot responsibly close the unconditional formal-consistency item from
the files examined without this lemma. Reasons are exact:

- `thm-constructible-inner-model-semantic-and-formal-schema` expressly proves
  each externally fixed axiom translation and disclaims arithmetic transfer.
- `lem-interpretation-translates-finite-derivations` expressly treats uniform
  base verification as extra data.
- The representability theorem proves totality and single-valuedness of a
  supplied primitive-recursive construction. It does not assert that an
  unspecified proof constructor is primitive recursive or correct.
- Searching certified ZF proofs gives a total recursive selector on valid
  standard source axioms, using the fixed-instance theorem. Its unbounded
  search has neither an established primitive-recursive bound nor an
  established PA totality proof.

The proper handoff is therefore the exact (SEP)/(AX) interface and its
compiler obligations, preserving the original theorem as still open until
they are supplied. Adding (AX) as an unproved hypothesis to the promised
unconditional theorem would not complete the owner's requested claim.

## 8. Composing subsequent proof transformations

With (REF) verified in PA, the positive corollary uses two further
primitive-recursive substitutions. For CH, replace the CH axiom with a
fixed proof of CH from GCH at omega and rebase indices. This is not literal
axiom-set inclusion. For Con(ZFC)->Con(ZF), convert ZF axiom certificates
to the corresponding ZFC certificates without changing the logical proof.
Composition of the verified functions proves each assertion in PA.

For the false-statement consumer, the Cohen-forcing refutation reduction
is separate required data. The generic theorem presently authored for
forcing has an explicit verified-constructor hypothesis. Neither (SEP) nor
(REF) fills that application-specific hypothesis. Once its verified reduction
is present, compose the PA maps for
`Con(ZF)->Con(ZFC)->Con(ZFC+V!=L)` and the fixed contradiction block for
a hypothetical ZF proof of V=L. The external premise remains exactly
Con(ZF). No countable transitive model of full ZFC is inferred from it.

## 9. Evidence read for this supplement

Local sources were read directly: the effective-theory and sentinel-coding
definitions; both primitive-recursive coding/checking lemmas; the strengthened
Q/PA representability theorem; the interpretation definition and full
derivation-transport proof; the coded-ZF definition; the Hilbert derived-rule
proof; finite reflection and its witness-rank and witness-criterion suppliers;
and the existing constructibility and verified-reduction contracts read in
the earlier support task.

[Moschovakis, Lecture Notes in Logic](https://www.math.ucla.edu/~ynm/lectures/lnl.pdf),
4C.1 and 7C.9 with its following paragraph, were read. The former definition
requires a primitive-recursive sentence map and external theorem preservation;
it does not by itself provide the repository's stronger PA-verified proof
map. The latter gives the relativization consistency argument and describes
its finitistic status, without the exact local certificate construction.
The notes identify themselves as informal and error-prone; the local proof
contracts control every strengthening here.

[Paulson, The Relative Consistency of the Axiom of Choice Mechanized Using
Isabelle/ZF](https://arxiv.org/html/2104.12674v1), sections 2.2–2.5 and 11,
were read in full. They explicitly separate relativized axiom proofs from
the metatheoretic proof transformation and explain why comprehension requires
recursion on formula structure. The reported formalization omits the
metatheoretic combination and does not supply a PA-verified reduction for
these local codes. It is evidence for the remaining obligation, not a
certificate discharging it.

The Freiburg PDF opened, but searches did not locate the previously cited
3.5.12 under that numbering. No complete corresponding passage was read
for this supplement, and no conclusion here is credited to that locator.
No source drop, source waiver, code test, or independent mathematical review
is claimed.
