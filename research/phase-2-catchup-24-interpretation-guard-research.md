# Open-line interpretation: applied scaffold repair

Root, 2026-09-09 16:31 UTC. Applied to batch 14 and the canonical plan
after group g released its files. Source coverage, SET-3 prose and the
published-consumer ledger are reconciled. Authorized operator receipts:
definition af0e808d2445017f909f814fcf7876ee18acc9d2ba66790db3f517ca0c76d761;
lemma 12aa387d1c9d12a44b05e8d59e4bab940ad2d5df7b0e53a886de8747d6161813.
These are local scaffold repairs, not independent judgments or publication.
All 14 changed-dependency consumer receipts were reconciled by 16:34 UTC.
The conservative-extension strategy was refined to prove old-formula
equivalence for the witness-expanded translation, rather than literal syntax
identity. Its full-domain guards are provable. The final item check closes
734/735; only the unrelated spectral-convention escalation remains.

Target: `lem-interpretation-translates-finite-derivations`. Preserve all
source-proof translations by defining the correct guarded open conclusion;
do not merely delete the open-formula claim. For free-variable set V define
G_V as the conjunction of D(v), and prove T derives G_FV(phi)→phi^I.
Sentence conclusions retain their ordinary translation. The formalized
consistency consequence remains conditional on the supplied verified proof
map, never automatic from external effectiveness.

Read actual proposed interpretation and target contracts and the published
six-scheme/three-rule formal calculus. The equality counterexample in the
groupg report establishes why guards matter. The repair supplies a syntactic
term-value/substitution induction, including functional graphs modulo E;
then explicit guarded simulations of all six schemes and three rules.
For MP, combine guards on the union of premise variables, then eliminate
surplus variable guards using nonemptiness and the restricted existential
rule. Generalization discharges only its variable guard; other free
guards stay outside the quantified variable. Existential elimination must
respect its actual freshness restriction. The complete local strategy below
discharges these obligations in the existing lemma.

Authoritative source discovery:

- Freiburg course notes, Lemma3.5.12 p54: complete short proof read; gives
  sentence consistency transport, not the missing open-line invariant.
  https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf
- *Ontological Purity for Formal Proofs*, Review of Symbolic Logic,
  section3.3 explicitly uses a free-variable domain guard for theorem
  preservation; section3.6 describes proof simulation. Read these passages.
  Root has now read AppendixA through the end of TheoremA.4, including all
  derivation trees (PDF pages30–38, printed424–432). Curl recovered the full
  publisher PDF after browser screenshot cache failures; mutool rendered it
  locally. SHA256:0170078816eba0a48595dac3c604bd09ca293292fd70015931054e61cb79a153.
  LemmasA.2/A.3 supply term-witness and formula-substitution arguments; A.4
  simulates natural deduction. This is not the library's Hilbert calculus:
  its six axiom schemes and three inference rules still need an explicit
  local adaptation. In particular, do not assume a guarded-axiom base case
  from a definition that already requires preservation of all theorems.
  https://www.cambridge.org/core/journals/review-of-symbolic-logic/article/ontological-purity-for-formal-proofs/085F0E6FFAC2FFC0A4F80ED75BCBE535
- Visser, *Categories of Theories and Interpretations*, university PDF
  discovery only; browser open returned an internal error. Not read or used.
  https://dspace.library.uu.nl/bitstream/1874/26909/1/preprint228.pdf

No new Phase2 supplier or pair has been established necessary. Existing
deduction and syntax suppliers must be read in their exact used clauses;
semantic completeness is not a shortcut unless independently justified and
compatible with the effective/primitive-recursive proof-map requirements.

## Local Hilbert adaptation — prepared 2026-09-09 15:55 UTC

Root reread the full live definition/lemma and published
`def-set-coded-formal-derivation`, `thm-first-order-sentence-deduction`,
`lem-hilbert-propositional-and-equality-rules`, and
`lem-derivation-finite-support-and-concatenation`. The following supplies
the previously missing adaptation; it is now the applied scaffold strategy.
Keep it within the existing definition and lemma, not an extra A/B pair.

### Interpretation data and local structural inductions

Use one domain variable for each source variable, a domain formula D, an
equivalence E on D, relations invariant under E on D, and function graphs
total and single-valued modulo E on D and invariant under equivalent inputs.
T proves these obligations and the translations of the source sentence
axioms. These are data, not an assumption of logical theorem preservation.
Choose auxiliary variables fresh from the finite expressions being handled.

Define the term-value relation V_t(z) with output restricted to D:
for a variable x use D(z) and E(x,z); for a function application existentially
quantify the argument values and use its graph. The nullary case is the
constant graph. Translate atomic relations/equalities by existentially
quantifying their term values and applying the interpreted relation/E.
Commute with negation/conjunction and translate existential quantification
as exists x (D(x) and phi^I). All variables other than the designated domain
variables in the interpretation formulas must be bound or fixed constants.

Under the guard on the free input variables, induction on t proves existence
of a value, uniqueness modulo E, and invariance under E-equivalent inputs.
The variable case uses reflexivity/symmetry/transitivity of E on D. At a
function node, finitely many argument witnesses come from the induction;
totality supplies the output, and argument congruence plus graph uniqueness
compares any two outputs. Existence uses only finitely many existential
introductions/eliminations, not an infinite choice function.

Induction on formulas then proves invariance under E-equivalent free-variable
assignments: atomic cases use those value comparisons and relation congruence;
negation and conjunction use propositional rules; an existential witness
can be retained when changing the other free variables, so both directions
follow by existential monotonicity and fresh-variable elimination.

The simultaneous term/formula substitution induction gives, for free-for t,
under the guard on FV(phi) minus x together with FV(t),

    (phi[t/x])^I <-> exists z (V_t(z) and phi^I[z/x]).

Here z is fresh. Atomic cases substitute the value relations recursively.
For conjunction, two values can be identified modulo E and formula
invariance transports both conjuncts to one witness. For negation, values
exist and every value gives the same truth value by invariance; hence
negating the existential value formula equals existence of a value satisfying
the negated formula. This is the necessary uniqueness step; existential
quantification does not simply commute with negation. For quantifiers,
rename their binders away from t,z and use existential monotonicity and
fresh-variable elimination to commute the independent witnesses. If x is
absent, the same equivalence follows by value existence. Every operation
uses the published syntactic rules, not semantic completeness.

### Guard removal and six axiom cases

Let G_V be the conjunction of D(v) for the finite free-variable set V.
If T proves G_(V union {x}) -> A and x is absent from A and G_V, Boolean
commutation gives D(x) -> (G_V -> A). Restricted existential elimination
gives (exists x D(x)) -> (G_V -> A). Apply domain nonemptiness to remove
that guard. Repeating this removes every surplus free-variable guard.
An empty guard is a fixed provable Boolean tautology.

1. Boolean tautologies remain tautologies after substituting translated
   formulas for their propositional atoms; add the guard by weakening.
2. Universal instantiation: under the needed input guard, obtain a value
   of t. The relativized universal premise gives phi^I at that value.
   The substitution equivalence gives the translated conclusion. Remove
   surplus guards; if x never occurs in phi this is simply A -> A.
3. Distribution: from forall x(D(x) -> (A -> B)) and A, infer
   forall x(D(x) -> B), since x is absent from A. This is the target
   distribution axiom after Boolean rearrangement and generalization.
4. Existential introduction: substitution provides a value of t with
   phi^I at that value, hence exists x(D(x) and phi^I). Again remove
   any guard not in the actual source axiom's free-variable set.
5. Reflexivity: the term has a value; E is reflexive on its values, so
   the interpreted t=t follows. A variable outside D is never asserted
   E-reflexive without its free-variable guard.
6. Equality substitution: choose values of s and t. Interpreted equality
   makes them E-equivalent. Formula invariance transfers the substituted
   formula between them; the substitution equivalences recover the exact
   two interpreted formulas. Discharge the interpreted equality premise
   and remove surplus guards. All witnesses are fresh.

These finite derivations can be written with temporary open assumptions
only using variables absent from those assumptions for generalization or
existential elimination. The published open-discharge clause then applies.
Equivalently all steps can be expressed as Boolean implication templates.

### Three rule cases and consistency

Maintain T proves G_FV(phi) -> phi^I for every source line phi.
Source sentence assumptions use their supplied target proofs directly.

- MP: enlarge both premise guards to their finite union, apply MP to the
  translated formulas, then remove variables absent from the conclusion.
- Generalization in x: let G omit x. From the transformed premise obtain
  G -> (D(x) -> phi^I), adding a vacuous D(x) guard if necessary.
  Generalize x and use distribution, since x is absent from G, to get
  G -> forall x(D(x) -> phi^I). Expanding the primitive syntax and using
  the published quantified double-negation rule gives the relativized
  universal conclusion.
- Restricted existential elimination: x is absent from psi. Rewrite the
  transformed implication as (D(x) and phi^I) -> (G -> psi^I), where G
  contains the remaining free-variable guards and omits x. Eliminate x,
  which is absent from G -> psi^I, then commute the implication to obtain
  G -> ((exists x(D(x) and phi^I)) -> psi^I). Remove surplus guards.

The fixed source contradiction is exists v0 not(v0=v0). Its translation
is refutable in T by guarded E-reflexivity and the term-value argument.
It has no free variables, so a translated source contradiction proof gives
its unguarded translation; explosion then gives T's fixed contradiction.
This proves external consistency transport without changing the calculus.

For each finite source proof only finitely many interpretation-obligation
and source-axiom certificates are needed; finite selection and concatenation
are justified in ZF by the read finite-support lemma. Effective certificate
data gives an effective translation through these explicit templates.
Do not infer a PA-verifiable primitive-recursive map merely from that fact.
The formalized claim retains its separate hypothesis that B verifies a total
map from S-contradiction certificates to T-contradiction certificates; quantify
over codes and contrapose that verified implication inside B.

Next: resolve the spectral-convention escalation and run the mechanical gates.
All open, sentence, external-consistency and
conditional formalized claims are retained, with the exact published helpers
declared. No published-item classification changes from this scaffold repair.
