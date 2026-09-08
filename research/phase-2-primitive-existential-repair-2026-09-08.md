# Primitive-existential calculus repair

Run `phase-2-wave-1`, batch 14, SET-2. Owner instruction: resolve the
mathematical blocker. This is a specification repair, not a completed-batch
or independent proof-review certificate. No published item is changed.

## Finding and source

The earlier scaffold combined primitive existential syntax with an incomplete
quantifier calculus. Its proposed derivation yielded an existentially bound
double negation, not the promised existential introduction. The author's
constructor-sensitive valuation is a valid counterexample to derivability
in that earlier calculus. It does not refute ordinary first-order logic.

Read the full published syntax and free-for substitution definitions and
Moschovakis, *Lecture Notes in Logic* (2014), §§1H.1–1H.12, printed pp34–38,
plus the Henkin construction through §1I.4, pp39–41:
https://www.math.ucla.edu/~ynm/lectures/lnl.pdf.
The source explicitly includes existential introduction and restricted
existential elimination. The local presentation retains Boolean tautologies
and formula-level equality substitution, with all abbreviations expanded in
the library's existing primitive syntax.

## Applied repair

Authored `def-set-coded-formal-derivation` as a draft with all six axiom
schemes and all three inference rules stated. In particular, free-for
existential introduction is an axiom, and the elimination rule from
phi→psi to exists x phi→psi requires x not free in psi. This rejects the
old countervaluation. No choice principle or completeness theorem is used.

Eight existing scaffold/plan items now specify the necessary cases. No ID,
pair or promised conclusion is removed, and no new pair is required.

- Deduction: from sigma→(phi→psi), commute to phi→(sigma→psi), apply
  existential elimination, then commute back. The side condition is x not
  free in sigma or psi. Open-assumption discharge must guard this rule as
  well as generalization.
- Soundness: an existential witness changes only x; coincidence transfers
  the conclusion back. Sentence assumptions survive the changed assignment.
- Quantifier rewriting: from phi→psi, compose with psi→exists x psi and
  eliminate x to get exists x phi→exists x psi. Applying this in both
  directions to Boolean double negation justifies the previously missing
  quantified equivalence. Renaming is derived, not syntactic identification.
- Fresh constants: replace by a variable absent throughout the finite proof;
  check introduction's free-for test and elimination's conclusion restriction.
- Finite support: handle all three rules. The empty-chain case proves empty
  theory consistency locally using the valuation with atoms true and
  existential value equal to the matrix value, not later soundness.
- Henkin consistency/truth: use these actual introduction, elimination and
  renaming rules. Semantic completeness must not supply its prerequisites.

The finite-support lemma additionally declares the preceding syntactic
consistency definition. All new edges are within this existing A page or
point to earlier published syntax. The Foundations recorded-result boundary
is unchanged. Phase 2 remains 144 pairs; this is an existing-pair repair.

## Workflow handoff

Paused dispatch and terminated only the newly started, stale-input
`author-recover-14-3` worker through its verified child process. Its normal
dispatch receipt records interruption, not mathematical success. Preserved
the previous 64 authored items and all scope/review evidence. The new formal
derivation definition makes 65 existing item files; 25 remain to author.

The next engine-managed author must read the amended manifest, prose,
definition and this receipt, retain completed material, fill all remaining
proofs/contracts, and run the full 90-item checks. Old author notes describing
an unresolved choice of calculus are historical; the new explicit calculus
is now the binding specification. Do not reuse an old scaffold hash as
approval of changed bytes. Later reader/judge gates remain mandatory.

## Checks and current decision

Targeted definition rendering and strict proof contract pass (initial boundary
evidence lacked explicit Definition anchors; corrected and rerun). Manifest
integrity reports all 38 owed pages and no scope drift; batch-14 manifest
policy and dependencies pass for all 90 items. Canonical plan ordering/cycle
checks and the Foundations external-dependency boundary pass. Existing global
external warnings are unchanged; no whole-library cleanliness is claimed.

Recorded a normal `repaired` scaffold resolution for SET-2, confidence 1,
bound to its amended manifest/plan hash. It is an operator's local repair
decision, not an independent judge or owner-audit stamp. Re-running the
historical global Step-3 final predicate against current authored manifests
reports 18 other stale/missing final hashes. This repair did not change those
pairs; Step 3 is already complete and their authored work proceeds through
the current reader/judge stages. No historical decision was fabricated or
refreshed for an unreviewed pair.

At 12:24:19 UTC the engine consumed resume after the unit-14 retry was
consumed. At 12:24:21 it launched `author-recover-14-1`, attempt 2, with
Astra (medium). Status at 12:24:53 confirms the worker running. The corrected
inputs are on disk before launch; all 25 remaining items and normal batch
checks remain its responsibility. Next supervision observation: 12:44 UTC,
or sooner for a reported blocker.
