# Batch 14 — mathematical/source disposition, 2026-09-08

## Current operator repair — primitive existential rules, 2026-09-08

The owner-requested calculus repair is applied. Read
`research/phase-2-primitive-existential-repair-2026-09-08.md`, the amended
batch manifest and plan, SET-2 prose, and the new draft
`def-set-coded-formal-derivation`. Free-for existential introduction is now
an explicit axiom; restricted existential elimination is the third rule.
The updated proof strategies specify deduction, soundness, finite-support,
fresh-constant, quantifier-rewriting and Henkin cases. This is a resolved
specification gap. The subsequent current Step-5 completion below authors the
25 remaining items while preserving the 64 earlier items and new definition,
and completes all 90 contracts and checks. Old notes below asking Alpha to choose a
calculus are historical and superseded by this repair. No theorem was dropped
and no published content changed. Normal independent review is still required.

## Historical scaffold and authoring checkpoints

## Scope

SET-2 retains 35 A / 6 B items. SET-9 now has 41 A / 7 B items: 89 total
batch items, three more than its initial scaffold. Pair identities and reading
orders are unchanged. New items, before their consumer remark:

- `def-finite-beth-iteration-above-a-cardinal`
- `lem-erdos-rado-pattern-closure-and-end-homogeneity`
- `thm-general-cardinal-erdos-rado`

The complete local proof, source-read evidence, citation corrections and
later proof obligations are in
`phase-2-set-blocker-resolution-2026-09-08.md`.
Source coverage has per-result mappings and current read receipts.
Historical diagnostics in coverage are evidence of earlier attempts, not
current gate results. No historical RESUME or obsolete manifest is a supplier.

## Dispositions

| Finding | Current disposition |
|---|---|
| F1: missing SET-2 cardinal and SET-9 ultrafilter page edges | Repaired in canonical plan/prose by the paused-run sync. |
| F2: failed byte fetch and URL checks | Repaired; actual fetch stamps exist. Final run-level checks are separate from proof reading. |
| F3: incomplete selected source reads | All seven sources' selected passages read. Exercise-only proofs, source slips and cardinal generalizations are explicitly supplied or assigned in the resolution receipt. |
| F4: full semantic transitive published-supplier audit | Still not certified. Neither a resolving graph nor these source reads proves every published prerequisite adequate. |
| F5: unassigned general-cardinal Erdős–Rado | Proved locally via pattern closure and induction; no new pair or large-cardinal prerequisite. |

The SET-9 A inventory remains below 60. Kurepa and Halpern–Läuchli orientation
remarks are not proof suppliers. SET-17 and SET-21 explicitly own their
preparatory lemmas and full proofs. Diamond in L remains SET-12's theorem;
SET-9 uses only conditional diamond constructions.

## Mathematical corrections

- Indexed delta systems follow locally from the finite-set theorem and the
  repeated-support case. Monk's cited 14.70 is an unrelated forcing result.
- The arbitrary-cardinality Henkin construction now has the full staged
  consistency and cardinal-bound argument; Moschovakis 1J.6 is not falsely
  credited with providing that proof.
- The elementary-diagram proof is supplied explicitly; Weiss–D'Mello leaves
  the elementary implication as an exercise.
- Source locators distinguish printed from PDF page numbers. Monk's
  Halpern–Läuchli proof occupies printed pp.661–670, not merely p.660.
- Normalization, completion, rational specialization and the final
  common-height cone step have explicit local corrections in their later
  proof contracts. No theorem was dropped or weakened to clear a check.

## Verification boundary

The 89-item manifest passes content policy with zero errors or warnings.
The run-sync audit after this landing finds zero metadata drift, missing
items, undeclared item homes, external pending/draft item suppliers or
recorded-result paths. Its inherited page-prerequisite findings remain
ledgered, not cleared. Canonical published text is the only inherited
supplier source; forbidden historical catalogue edges must never be replayed.
F4 remains open until its actual proof-by-proof audit is completed.

## Step-3 fix pass

### F4 — complete semantic transitive published-supplier proof audit

**Disposition: resolved.** I recomputed the live `deps` closure from all 89
owned manifest items, following every declared item dependency and the complete
page-`requires` closure. The live closure has 320 IDs: the 89 owned items and
231 published suppliers, with 52 distinct immediate external suppliers across
101 immediate manifest edges. It has no missing ID and no cycle. Its complete
published-item snapshot (statement, argument and whole-file hash per item) is
`e379582b4d58388bb8287255324cb6ebc73627423c385318ed7c04b36517b134`;
the direct-interface inventory is
`8194267cc5aa7aca27236a2d78287c3f29f1ef670d3aa2de7136880932d2326d`.
Both inventories, each direct consumer/supplier path, and the exact local
statement/argument locators are recorded under
`dependency_audit.step_3_semantic_proof_audit` in this batch's coverage file.

The audited page roots are both owned A/B pairs and their prerequisite paths
through `formal-set-theoretic-syntax-structures-and-satisfaction`,
`countability-and-uncountability`, `cardinal-arithmetic-and-cofinality`,
`club-stationary-sets-and-pressing-down`, and `filters-and-ultrafilters`.
The audit confirmed the required conventions at every immediate interface:
set structures have nonempty carriers; syntax substitutions are free-for;
generalization and deduction retain their sentence/fresh-variable side
conditions; the countable Henkin route stays in ZF while the arbitrary
well-orderable-language and Skolem-size conclusions state ZFC; tree and club
claims retain their ZFC and regularity hypotheses; filters are proper; and the
diamond construction is conditional, not an appeal to `V=L`.

The cardinal interfaces were checked separately: Hessenberg and absorption are
used only in their ZF well-orderable-cardinal forms, while well-ordering,
Zorn, countable unions, and successor-aleph regularity enter only the local
ZFC items. The Erdős--Rado path retains
`beth_n(kappa)^+ -> (kappa^+)^(n+1)_kappa` for every infinite `kappa` and
finite `n`, including zero. No page or item path reaches
`deferred-set-theory-beyond-choice`, including through `justified_by` or a
load-bearing forward reference.

The prior 352-ID `owned_deps_only_closure` was stale: it retained 38
unreachable real-analysis IDs and missed the three new Erdős--Rado items plus
`thm-every-infinite-cardinal-is-an-aleph`, `thm-product-rule`, and
`thm-regularity-of-the-alephs`. It is preserved, renamed
`pre_step_3_stale_deps_only_closure`, as historical drift evidence; it is not
used by the current audit. The current inventory has no dependency gap, so the
batch manifest is unchanged and no new A/B prerequisite pair is required.

The owned same-frontier dependency input remains `[]`: neither batch-14 page
nor any owned item has a same-run cross-batch supplier. I refreshed the unified
ledger after the review.

**Changed record:** `research/phase-2-wave-1-batch-14.coverage.json` now closes
F4, clears `open_obligations`, marks the prior traversal historical, and records
the current proof-interface audit. No published item, page, shared plan, prose
scaffold, or another batch was edited.

**Checks run.** `coverage-checklist` passed: 2 pages, 115 harvested results,
0 errors, 0 warnings. Whole-run `manifest-deps` passed: 434 items, 0 normalized,
0 errors. Manifest-only `content-policy` passed: 89 scoped items, 0 errors,
0 warnings. `extcheck` exited 0; its recorded-not-proved warnings are outside
this supplier closure. `source-fetch-check --stamp` passed: 7/7 active sources
fetch-verified and resolved, 0 newly stamped and 0 documented drops.
`source-backing --require-verified` passed: all 59 authored results in this
coverage file retain an openable source or documented alternative argument.
`frontier-dependency-ledger refresh` completed and deduplicated.

`validate-plan` now passes (exit 0): declared page order is acyclic and
consistent, with no item-level cycles, forward references, B-page dependencies,
or unresolved IDs among the 892 pages with item lists.

## Final adjudication amendment (2026-09-08)

The current batch has 90 items: SET2 35 A / 6 B and SET9 42 A / 7 B.
The earlier 89-item counts above describe the pre-final inventory. Added
`lem-normal-set-theoretic-tree-sequence-representation` after the normal-tree
definition, with ZFC transfinite-recursion and well-ordering suppliers already
audited. Added the two elementary dense-set equivalences inline and separate
coverage dispositions for Monk p661 Propositions 1–2. Proposition 9.33 now
maps to the proved representation lemma, not merely the normality definition.
Exact arguments, current checks and terminal outcomes are in
`research/phase-2-wave-1-alpha-b-recheck.md`. No cross-batch dependency was added.

## Step-5 authoring

### Current completion — author-recover-14-1

The primitive-existential specification repair is implemented and all 25 formerly missing items are now authored. The current batch has 90 complete draft items and four composed draft pages. The historical blocker and missing-file reports below describe earlier recoveries and are superseded by this completion record and the final check table at the end. No promised item was removed, narrowed, renamed or converted into a recorded result during this recovery. Independent reviews below and in their separate files are preserved.

### Current input verification and Alpha obligation: primitive existential gap

The current manifest contains 90 items and four pages. At entry none of its
90 `items/ID.md` files existed and the proof-contract file was absent. Read
SCHEMA, both assigned design sections, current Step-3 verdicts and the full
initial review and recheck; the latter supersedes the initial insufficiency.
The coverage's historical command outputs are not current verification.

**New mathematical blocker, not a scope deletion.** The assigned
`def-set-coded-formal-derivation` uses the published primitive syntax
`def-set-coded-terms-and-formulas`: negation, conjunction and existential
quantification; universal quantification abbreviates negated existential
negation. Its proposed axioms omit existential introduction, while
`lem-hilbert-propositional-and-equality-rules` promises to derive it by
contraposing universal instantiation. That produces
`phi[t/x] -> exists x not not phi`, not `phi[t/x] -> exists x phi`.
Quantified double-negation replacement has not been supplied by this calculus.

This is an actual nonderivability obstruction, not merely a missing argument.
In the empty nonlogical signature give every equality atom Boolean value 1;
evaluate negation and conjunction classically. Define the value of
`exists x psi` to be `1 - V(chi)` when the *syntactic* outer constructor of
`psi` is negation, `psi = not chi`, and 0 otherwise. This recursion is
well-founded on formula length. Term substitution preserves formula-constructor
shape and the constant value of atoms, so `V(phi[t/x]) = V(phi)`. Consequently
`V(forall x phi) = V(phi)` by its actual abbreviation. Every propositional
axiom, universal instantiation and distribution axiom, reflexivity axiom and
formula-substitution equality axiom has value 1. MP and generalization preserve
value 1. But `exists x (x=x)` has value 0, as does its proposed instance
`x=x -> exists x (x=x)`. Thus the promised derived existential introduction
and nonempty-domain completeness cannot hold for the listed calculus.

**Source checked:** Moschovakis, Lecture Notes in Logic (2014), §§1H.1–1H.2,
printed pp34–35 (PDF pages 38–39, one-based), explicitly includes existential
introduction as axiom (11), and existential elimination as rule (14). Read the
complete pp34–37 passage from recovered PDF text and opened the original
https://www.math.ucla.edu/~ynm/lectures/lnl.pdf during this dispatch. The source's
calculus is not the abbreviated scaffold calculus. Its §1H.8 statement leaves
the deduction proof as an exercise.

**Proposed change for owning Alpha b:** retain all promised items and add the
free-for existential-introduction axiom and the restricted existential-
elimination rule from Moschovakis 1H.1, or specify another complete calculus
with an explicit syntactic translation to the existing primitive syntax. The
former also requires cases for the added rule in finite-support, deduction,
soundness and fresh-constant transformation proofs. No plan, workflow state,
independent review, or published supplier is changed here. Do not certify the
derived-rule/Henkin/completeness chain until this prerequisite is resolved.
Other mathematical work in the batch remains independent of this blocker.

### Item checkpoint: `def-set-theoretic-tree-and-levels`

Authored the current definition; exact conventions are in its Definition section. Source: Monk, Set theory following Jech (2024), Chapter 9, printed p65 (tree terminology; normality conventions adapted) (https://euclid.colorado.edu/~monkd/jech.pdf). Dependencies: def-well-order, def-ordinal, thm-mostowski-collapse. Individual boundary and step evidence is recorded in the owned contract. No judge stamp was applied. Checks pending the explicit batch run. Next action: continue the next independent assigned item; the primitive-existential Alpha obligation remains open.

### Item checkpoint: `def-normal-splitting-set-theoretic-tree`

Authored the current definition; exact conventions are in its Definition section. Source: Monk, Set theory following Jech (2024), Chapter 9, printed p65 (tree terminology; normality conventions adapted) (https://euclid.colorado.edu/~monkd/jech.pdf). Dependencies: def-set-theoretic-tree-and-levels. Individual boundary and step evidence is recorded in the owned contract. No judge stamp was applied. Checks pending the explicit batch run. Next action: continue the next independent assigned item; the primitive-existential Alpha obligation remains open.

### Item checkpoint: `lem-tree-predecessors-and-common-extensions`

Authored the current lemma; exact conventions are in its Statement/argument section. Source: Monk, Set theory following Jech (2024), Chapter 9, printed p65 (tree terminology; normality conventions adapted) (https://euclid.colorado.edu/~monkd/jech.pdf). Dependencies: def-set-theoretic-tree-and-levels. Individual boundary and step evidence is recorded in the owned contract. No judge stamp was applied. Checks pending the explicit batch run. Next action: continue the next independent assigned item; the primitive-existential Alpha obligation remains open.

### Item checkpoint: `thm-konig-finite-level-tree`

Authored the current theorem; exact conventions are in its Statement/argument section. Source: Monk, Set theory following Jech (2024), Theorem 9.32, printed p86 (https://euclid.colorado.edu/~monkd/jech.pdf). Dependencies: def-set-theoretic-tree-and-levels, thm-recursion, thm-well-ordering-theorem, lem-tree-predecessors-and-common-extensions, def-axiom-of-choice. Individual boundary and step evidence is recorded in the owned contract. No judge stamp was applied. Checks pending the explicit batch run. Next action: continue the next independent assigned item; the primitive-existential Alpha obligation remains open.

### Item checkpoint: `lem-normal-set-theoretic-tree-sequence-representation`

Authored the current lemma; exact conventions are in its Statement/argument section. Source: Monk, Set theory following Jech (2024), Proposition 9.33, printed p86; successor labels adapted to injections (https://euclid.colorado.edu/~monkd/jech.pdf). Dependencies: def-normal-splitting-set-theoretic-tree, lem-tree-predecessors-and-common-extensions, thm-transfinite-recursion, thm-well-ordering-theorem, def-axiom-of-choice. Individual boundary and step evidence is recorded in the owned contract. No judge stamp was applied. Checks pending the explicit batch run. Next action: continue the next independent assigned item; the primitive-existential Alpha obligation remains open.

### Item checkpoint: `def-kappa-tree-and-tree-property`

Authored the current definition; exact conventions are in its Definition section. Source: Monk, Set theory following Jech (2024), Chapter 9, printed p65; cardinal-tree convention made explicit (https://euclid.colorado.edu/~monkd/jech.pdf). Dependencies: def-set-theoretic-tree-and-levels, def-cardinal, def-cofinality. Individual boundary and step evidence is recorded in the owned contract. No judge stamp was applied. Checks pending the explicit batch run. Next action: continue the next independent assigned item; the primitive-existential Alpha obligation remains open.

### Item checkpoint: `def-aronszajn-suslin-and-special-tree`

Authored the current definition; exact conventions are in its Definition section. Source: Karagila, Axiomatic Set Theory, Chapter 9, Definition 9.1 and Exercise 9.4, printed p43; Definition 9.5, p44; specialization convention adapted (https://karagila.org/files/set-theory-2017.pdf). Dependencies: def-kappa-tree-and-tree-property, def-countable, def-first-uncountable-ordinal, thm-rationals-countable. Individual boundary and step evidence is recorded in the owned contract. No judge stamp was applied. Checks pending the explicit batch run. Next action: continue the next independent assigned item; the primitive-existential Alpha obligation remains open.

### Item checkpoint: `def-finite-delta-system`

Authored the current definition; exact conventions are in its Definition section. Source: Monk, Set theory following Jech (2024), delta-system definition immediately before Theorem 9.20, printed pp77–78; indexed convention supplied locally (https://euclid.colorado.edu/~monkd/jech.pdf). Dependencies: def-intersection-of-a-set-and-binary-intersection. Individual boundary and step evidence is recorded in the owned contract. No judge stamp was applied. Checks pending the explicit batch run. Next action: continue the next independent assigned item; the primitive-existential Alpha obligation remains open.

### Item checkpoint: `thm-regular-uncountable-finite-delta-system`

Authored the current theorem; exact conventions are in its Statement/argument section. Source: Monk, Set theory following Jech (2024), Theorem 9.20, printed pp77–78 (https://euclid.colorado.edu/~monkd/jech.pdf). Dependencies: def-finite-delta-system, thm-cofinality-basics, cor-cardinal-absorption, thm-transfinite-recursion, def-axiom-of-choice. Individual boundary and step evidence is recorded in the owned contract. No judge stamp was applied. Checks pending the explicit batch run. Next action: continue the next independent assigned item; the primitive-existential Alpha obligation remains open.

### Item checkpoint: `ex-binary-tree-and-konig-branch`

Authored the current example; exact conventions are in its Statement/argument section. Source: Monk, Set theory following Jech (2024), Theorem 9.32, printed p86; explicit binary-tree instance (https://euclid.colorado.edu/~monkd/jech.pdf). Dependencies: thm-konig-finite-level-tree. Individual boundary and step evidence is recorded in the owned contract. No judge stamp was applied. Checks pending the explicit batch run. Next action: continue the next independent assigned item; the primitive-existential Alpha obligation remains open.

### Item checkpoint: `ex-uncountable-delta-system-with-one-point-root`

Authored the current example; exact conventions are in its Statement/argument section. Source: Monk, Set theory following Jech (2024), Theorem 9.20, printed pp77–78; explicit pairwise-intersection instance (https://euclid.colorado.edu/~monkd/jech.pdf). Dependencies: def-finite-delta-system. Individual boundary and step evidence is recorded in the owned contract. No judge stamp was applied. Checks pending the explicit batch run. Next action: continue the next independent assigned item; the primitive-existential Alpha obligation remains open.

### Item checkpoint: `cex-infinite-sets-delta-system-hypothesis`

Authored the current counterexample; exact conventions are in its Statement/argument section. Source: Monk, Set theory following Jech (2024), Theorem 9.20, printed pp77–78; explicit pairwise-intersection instance (https://euclid.colorado.edu/~monkd/jech.pdf). Dependencies: def-finite-delta-system, thm-regular-uncountable-finite-delta-system. Individual boundary and step evidence is recorded in the owned contract. No judge stamp was applied. Checks pending the explicit batch run. Next action: continue the next independent assigned item; the primitive-existential Alpha obligation remains open.

### Step-5 checkpoint — incomplete, no completion attestation

Authored 12 of 90 items: five definitions and seven numbered arguments. These are completed local arguments/definitions with individual contracts, not independent mathematical review. The remaining 78 items are unauthored; they were not replaced by strategy text or empty contracts. The 90-ID contract scope and full manifest inventory remain intact.

**Authored item IDs:**

- `def-set-theoretic-tree-and-levels`
- `lem-tree-predecessors-and-common-extensions`
- `def-kappa-tree-and-tree-property`
- `def-normal-splitting-set-theoretic-tree`
- `lem-normal-set-theoretic-tree-sequence-representation`
- `def-aronszajn-suslin-and-special-tree`
- `thm-konig-finite-level-tree`
- `def-finite-delta-system`
- `thm-regular-uncountable-finite-delta-system`
- `ex-binary-tree-and-konig-branch`
- `ex-uncountable-delta-system-with-one-point-root`
- `cex-infinite-sets-delta-system-hypothesis`

**Page composition:** wrote all four draft page files at their canonical paths with the complete assigned inventory and scope-specific summaries. None is a complete mathematical page while its listed items are missing.

- `library/foundations/deduction-soundness-completeness-and-compactness.md`
- `library/foundations/deduction-soundness-completeness-and-compactness-examples.md`
- `library/foundations/set-theoretic-trees-delta-systems-and-diamond.md`
- `library/foundations/set-theoretic-trees-delta-systems-and-diamond-examples.md`

**Current conventions and proof evidence:** the tree definition permits an empty tree and uses maximal chains for branches; normality is nonempty and separates splitting; the predecessor lemma now explicitly states strict increase of height. Representation uses injective successor labels (including finite/empty successor sets), recursive limit unions, and both order directions. König selects good roots/successors and proves the resulting chain maximal. Delta systems distinguish set families from indexed repetitions and leave a root unconstrained for fewer than two members. The regular-cardinal proof derives the small-union bound before its finite-size induction and recursion. The binary instance calculates 2^n and exhibits its branch; the two delta examples calculate their intersections, with the nested-ordinal witness failing already at three members.

**Sources and provenance:** retained ai-altered statement provenance for these source-adapted constructions and results, ai-altered for the seven arguments, and not-applicable for definition proof provenance. No generated statement is a supplier. Sources are Monk printed p65 (tree terminology), p86 (Theorem 9.32 and Propositions 9.33–9.34), pp77–78 (Theorem 9.20), and Karagila Chapter 9 pp43–44 (Aronszajn/Suslin terminology); these relevant passages were read in full bounded text chunks. Monk 14.70 is not credited with indexed delta systems. Local proofs supply the finite-branching representation correction and all explicit example calculations. Sources use block YAML with reference URLs, as required by the current policy parser. Full source reading for the 78 remaining items is still outstanding in this dispatch.

**Dependency input:** consumer batch 14 remains `[]`; added direct prerequisites only name published suppliers or owned earlier items. Explicit AC dependencies were added where well-orderings or cardinal-bound injections are selected. The order-type supplier was declared for tree heights; the rational-countability supplier was declared for rational specialization. The consumer input was replaced atomically and the unified ledger refreshed after dependency edits. No plans, workflow state, published content, or independent reviews were edited.

**Checks actually run:** the prescribed bare `node tools/validate-plan.mjs` exits 2 with usage because this implementation requires a plan path; reran with `research/plan-spec.json`. Initial authored prechecks required canonical phase numbering; adopted it with a check that only numbering changed, and updated all contract step uses and boundaries. Added the explicit logical branch dependency before canonicalization to prevent the delta proof from being reordered across its case setup. Initial YAML flow-object/indentation incompatibilities were corrected without modifying tools. Final results:

- full manifest precheck: exit 1. Error: ENOENT: no such file or directory, open 'items/def-set-coded-formal-derivation.md'
- authored-item precheck: exit 0. 7 checked, 0 failing — all clean
- plan validation with required argument: exit 0. OK — declared page order is acyclic and consistent; no item-level cycles, forward
- full content policy: exit 1. content-policy: 90 scoped item(s), 78 error(s), 0 warning(s)
- full strict contracts: exit 1. proof-contract: 78 error(s), 0 warning(s), 12/90 item(s) checked
- authored strict contracts: exit 0. proof-contract: 0 error(s), 0 warning(s), 12/12 item(s) checked

The full content-policy and strict-contract failures are precisely the 78 absent item files. The full precheck exits before reaching authored tree files because `def-set-coded-formal-derivation` is absent; the separate explicit authored-file invocation verifies all seven numbered arguments. Passing those scoped checks does not establish completion of the batch.

**Open obligations and next action:** owning Alpha b must reconcile the primitive-existential proof-system defect described above while preserving every promised result. The proposed extra axiom/rule has not been silently inserted into the assigned calculus. Resume tree authoring independently with `lem-countable-normal-tree-cofinal-branch`, reading its current statement, dependency statements and Karagila Lemma 9.11 in full; then continue the rational-limit/Aronszajn spine, indexed delta and Knaster products, specialization, diamond sealing, partition relations, and remaining examples. The following full inventory is still unauthored (not narrowed, deferred or removed):

For `deduction-soundness-completeness-and-compactness`:

- `def-set-coded-formal-derivation`
- `def-first-order-syntactic-consistency`
- `lem-derivation-finite-support-and-concatenation`
- `lem-hilbert-propositional-and-equality-rules`
- `thm-first-order-sentence-deduction`
- `thm-set-language-first-order-soundness`
- `lem-proof-fresh-constant-elimination`
- `lem-consistent-sentence-decision`
- `def-henkin-witness-extension`
- `lem-fresh-henkin-axiom-preserves-consistency`
- `lem-countable-henkin-syntax-coding`
- `thm-countable-lindenbaum-henkin-completion`
- `lem-complete-henkin-theory-truth-rules`
- `lem-henkin-term-equality-congruence`
- `def-henkin-closed-term-model`
- `thm-henkin-closed-term-truth-lemma`
- `thm-countable-first-order-completeness`
- `thm-countable-first-order-compactness`
- `def-elementary-set-structure-embedding`
- `thm-tarski-vaught-set-structure-test`
- `def-skolem-witness-hull`
- `lem-skolem-hull-size-and-elementarity`
- `thm-downward-lowenheim-skolem-with-parameters`
- `thm-elementary-ordinal-chain-union`
- `thm-well-ordered-language-henkin-completeness`
- `def-elementary-diagram-of-set-structure`
- `lem-elementary-diagram-embedding`
- `thm-upward-lowenheim-skolem-with-choice`
- `cor-arbitrarily-large-finite-models-give-infinite-model`
- `def-nonstandard-natural-number-structure`
- `thm-nonstandard-natural-number-model-exists`
- `cor-countable-los-vaught-test`
- `def-coded-first-order-zf-theory`
- `lem-models-of-coded-zf-are-infinite`
- `rem-first-order-choice-strength-boundary`

For `deduction-soundness-completeness-and-compactness-examples`:

- `ex-first-order-sentence-deduction`
- `cex-generalization-after-open-assumption`
- `ex-seed-constant-for-empty-signature`
- `cex-isomorphic-inclusion-need-not-be-elementary`
- `ex-nonstandard-element-above-every-numeral`
- `fs-categorical-first-order-zf`

For `set-theoretic-trees-delta-systems-and-diamond`:

- `lem-countable-normal-tree-cofinal-branch`
- `lem-splitting-cofinal-branch-gives-antichain`
- `lem-bounded-rational-tree-limit-extension`
- `thm-special-aronszajn-tree-construction`
- `cor-indexed-omega-one-delta-system`
- `def-poset-ccc-and-knaster-property`
- `def-finite-support-poset-product`
- `lem-finite-knaster-poset-products`
- `thm-finite-support-knaster-poset-products`
- `lem-cocountable-ultrafilter-on-uncountable-set`
- `lem-aronszajn-finite-petals-incomparability`
- `def-finite-aronszajn-specialization-poset`
- `thm-aronszajn-specialization-poset-ccc`
- `lem-specialization-dense-domains-and-union`
- `def-diamond-on-omega-one`
- `prop-diamond-implies-continuum-hypothesis`
- `def-ostaszewski-club-principle`
- `prop-diamond-implies-ostaszewski-club`
- `def-jensen-square-sequence`
- `lem-countable-tree-antichain-sealing`
- `lem-club-tree-coding-antichain-reflection`
- `thm-diamond-constructs-normal-suslin-tree`
- `thm-splitting-suslin-tree-poset-square-not-ccc`
- `def-suslin-line-order-interface`
- `rem-kurepa-suslin-line-tree-interface`
- `def-partition-arrow-notation`
- `thm-infinite-ramsey-finite-colors`
- `def-finite-beth-iteration-above-a-cardinal`
- `lem-erdos-rado-pattern-closure-and-end-homogeneity`
- `thm-general-cardinal-erdos-rado`
- `rem-ramsey-and-erdos-rado-orientation`
- `def-pruned-tree-products-and-dense-matrices`
- `rem-halpern-lauchli-finite-tree-statement`

For `set-theoretic-trees-delta-systems-and-diamond-examples`:

- `cex-countable-levels-do-not-suffice-for-konig`
- `ex-finite-specialization-compatibility`
- `ex-diamond-suslin-ccc-square`
- `fs-every-omega-one-tree-has-a-cofinal-branch`


### Recovery checkpoint: `lem-countable-normal-tree-cofinal-branch`

Completed the countable cofinal branch construction and countable covering in ZF. Current statement preserves the promised nonzero countable limit height and normality hypotheses. Read Karagila Chapter 9, Lemma 9.11 and proof, printed p45 (PDF page 46); the author-hosted URL https://karagila.org/files/set-theory-2017.pdf currently identifies the notes as updated November 18, 2025. The scaffold citation says 2017, which is the URL filename, not the current edition date. The source asserts branch existence; the local proof expands it using two fixed enumerations, a cofinal sequence, least-index extension recursion, and a maximality argument. Read the current normality, predecessor, and recursion suppliers completely. Dependencies now name those three exact inputs; bounded-subsets/cofinality suppliers are unnecessary for the explicit enumeration proof. No AC is used, so manifest axiom_base is ZF. Individual contract maps all five steps and eight boundaries. Checks pending the recovery batch invocation. The logic-calculus prerequisite remains unresolved by the current Step-3 recheck. Next action: splitting branch-to-antichain lemma, then remaining tree spine.

### Recovery checkpoint: `lem-splitting-cofinal-branch-gives-antichain`

Completed the ZFC construction of an aleph_1-sized antichain from a cofinal branch in a splitting omega_1-tree. Read Karagila Exercise 9.6, printed p44, together with its standing normal/splitting convention on p43; this is an exercise, so the argument is locally supplied, not attributed as a source proof. Current local proof first derives that a maximal cofinal branch meets every level, then identifies all immediate successor heights, selects one off-branch successor by explicit AC, and proves pairwise incomparability using unique predecessors. Normality is not required. Added direct owned kappa-tree and published AC dependencies; the original predecessor and splitting inputs remain. Contracts map all four steps, exact supplier excerpts, and eight boundaries. Checks pending below. No scope was removed. Next action: bounded rational limit extensions and Aronszajn construction; the logic-calculus Alpha prerequisite remains open.

### Recovery checkpoint: `lem-countable-tree-antichain-sealing`

Completed sealing, with countability, all normality clauses, preservation of existing splitting, and maximality of A in the extension proved explicitly. Source: Karagila Lemma 9.11, complete statement/proof on printed p45, read from the current author-hosted PDF; local least-index construction avoids the source's simultaneous choice phrasing. A fixed countable covering family from the completed branch lemma provides least-index branches above comparable antichain witnesses. Deduplication precedes disjoint tagged tops, whose predecessor order types are proved to be delta. Dependencies: completed branch lemma, predecessor lemma, and explicit normal/splitting definition. Axiom base sharpened to ZF without narrowing any conclusion. Five step contracts and eight boundaries are recorded. No independent review edited. Checks pending recovery invocation. Next action: rational bounded-limit construction, then the special Aronszajn tree and remaining independent scope.

### Recovery checkpoint: `lem-bounded-rational-tree-limit-extension`

Completed the full rational-bound limit extension, retaining infinitely many small immediate successors as an explicit hypothesis. Read Karagila Theorem 9.2 proof on printed p43 completely; its embedding-valued presentation is adapted to rational node labels. The local proof supplies the extra finite-branch avoidance needed for distinct predecessor sets at the new limit level. For each enumerated request (x,r), midpoint q is strictly intermediate, one successor avoids all finitely many earlier branches, and least-index cofinal recursion keeps every branch label strictly below q. Distinct tagged tops preserve normality if present, countability, strict labeling, and every bounded-extension request. The lemma does not assume normality to prove the basic extension assertion. Read current rational countability, ordered-field, countable-product and recursion supplier statements; the new direct ordered-field and product dependencies record their actual uses. No arbitrary choice is needed, so manifest axiom_base is ZF. Six individually authored step contracts and eight boundaries are complete. Checks pending. Next action: special Aronszajn construction, whose omega_1-recursion still requires ZFC, and then the remaining tree and logic items. The primitive-existential calculus defect remains an Alpha b obligation; no scope change was made to that calculus.

### Recovery checkpoint: `thm-special-aronszajn-tree-construction`

Completed the ZFC special Aronszajn construction and non-Suslin conclusion. Exact source: Karagila Theorem 9.2 and Exercise 9.4, printed p43, read in full. The rational-label version has root label zero, one successor for each larger rational, midpoint calculations for bounded extension, and the completed distinct-branch lemma at limits. To justify transfinite recursion rather than informal repeated choice, AC fixes enumerations of all nonzero countable ordinals; each level retains an enumeration, and least indices with level tags define a deterministic rule. Countable chains inject into Q and have bounded height images. Some label fiber is uncountable, since otherwise countable choice makes the entire height-surjective tree countable. Read the transfinite-recursion rule and proof, the countable-union statement and proof, bounded-subsets statement, and current special-tree definition. Added direct ordered-field, countable-product, bounded-subsets and AC dependencies for the actual uses. Seven individual step contracts and eight boundaries recorded. No theorem scope was dropped or weakened. Checks pending recovery checkpoint. Next action: Aronszajn counterexamples and indexed delta system, then the remaining specialization, diamond, partition and logic obligations.

### Recovery verification and continuation — author-recover-14-1

**Incomplete batch: 17/90 items authored; 73 item files remain absent.** This recovery completed five additional items:

- `lem-countable-normal-tree-cofinal-branch`
- `lem-splitting-cofinal-branch-gives-antichain`
- `lem-countable-tree-antichain-sealing`
- `lem-bounded-rational-tree-limit-extension`
- `thm-special-aronszajn-tree-construction`

The four page files retain their full assigned inventories. No page is mathematically complete; no completion or independent-review attestation is made. The earlier 12 authored items and their independent evidence were preserved. The initial 78-missing-item list above is historical; remove these five newly completed IDs from it to obtain the current 73-item outstanding inventory. No promised item or page was removed, narrowed, or reclassified as recorded without proof.

**Provenance and sources:** all five statements and local proofs remain ai-altered; no generation field or generated supplier was introduced. Karagila's author-hosted Chapter 9 pp43–45 was reopened and the relevant complete passages read. Exact locators and local adaptations appear in each item checkpoint and source field. The current PDF at the 2017 filename reports a November 18, 2025 update. The recursive rational-label argument is locally expanded from Theorem 9.2, not represented as a verbatim source proof. The complete batch coverage file was too large for the initial combined read; only relevant current records and passages were used, and no new whole-coverage or whole-supplier audit is claimed.

**Dependency decisions:** countable branch, sealing, and bounded-limit constructions are explicitly proved in ZF with least-index selections; the two uncountable constructions assume AC and name its exact uses. The manifest dependencies were updated to the actual owned/published inputs. The consumer-batch input remains `[]`, replaced atomically, and the prescribed frontier refresh was run after dependency edits. No cross-batch supplier was added. Plans, workflow state, published content, and independent reviews were not edited.

**Checks actually run:**

- Full manifest precheck with all 90 explicit paths: exit 1, ENOENT for `items/def-set-coded-formal-derivation.md` before checking later arguments.
- Explicit precheck of the five new items: exit 0, 5 checked, 0 failing. No canonical phase repair was required. The bounded-limit contract initially caught a textual self-reference in its recursion explanation; that wording was repaired before the final pass.
- Strict contracts for the five new IDs: exit 0, 0 errors and warnings, 5/5 checked.
- Full strict contracts: exit 1, 73 missing-item errors, 0 warnings, 17/90 checked.
- Full content policy: exit 1, 90 scoped items, 73 missing-item errors, 0 warnings.
- Prescribed bare `node tools/validate-plan.mjs`: exit 2 with usage; the implementation requires a plan path. Rerun with `research/plan-spec.json`: exit 0, declared page order acyclic/consistent and no item-level cycles, forward-reference violations, B-page dependencies, or unresolved IDs among pages with item lists. These checks do not attest mathematical completeness.
- An explicit-path invocation on all 17 authored files and a strict-contract invocation restricted to those 17 also returned exit 0; the tool wrapper did not retain their summary text. The independently visible five-item outputs above and full strict-contract 17/90 summary are the retained evidence, not an invented count of format-checked arguments.

**Unresolved mathematical/scope obligation:** Alpha b's current Step-3 recheck does not resolve the primitive-existential calculus obstruction already documented above. The assigned derivation axioms still cannot yield their promised primitive existential introduction. Proposed remedy remains an explicit complete primitive-existential calculus (including the source's introduction axiom and restricted elimination rule), with corresponding extra proof cases throughout the downstream chain. No unauthorized calculus or plan edit was made. This blocker concerns the logic spine; it does not excuse the unauthored independent tree, specialization, diamond, partition, semantic model-theory, and example work.

**Next action:** reread this checkpoint and current supplier statements, then author the assigned decreasing-sequence counterexample and Aronszajn false statement, indexed delta lemma, finite/finite-support Knaster products, specialization, diamond sealing/reflection and Suslin construction, partition relations, and remaining logic items after the owning Alpha resolves the exact calculus prerequisite. Full manifest checks must pass only after all 73 missing items receive their actual arguments and contracts.

### Recovery checkpoint — author-recover-14-2: `cor-indexed-omega-one-delta-system`

Claim/scope: For an ω1-indexed family of finite sets there is an uncountable indexed delta subsystem, even if supports repeat.

Source read: Monk, Set theory following Jech (2024), Theorem 9.20, printed pp77–78; indexed repetition argument supplied locally (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `thm-regular-uncountable-finite-delta-system`, `thm-countable-union-of-countable`, `thm-countable-subsets-of-omega-one-are-bounded`, `def-finite-delta-system`, `def-axiom-of-choice`. Axiom base: ZFC. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `def-poset-ccc-and-knaster-property`

Claim/scope: Order posets with stronger conditions smaller. Compatibility means having a common lower bound. ccc means every set of pairwise incompatible conditions is countable; Knaster means every uncountable set of conditions has an uncountable pairwise compatible subset.

Source read: Monk, Set theory following Jech (2024), property (K) definition preceding Lemma 15.14, printed p265; reverse-tree comparison expanded locally (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-partial-order`, `def-countable`, `lem-tree-predecessors-and-common-extensions`. Axiom base: ZF. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `def-finite-support-poset-product`

Claim/scope: For posets Pi with greatest conditions 1i, the finite-support product consists of tuples equal to 1i except at finitely many coordinates, ordered coordinatewise.

Source read: Monk, Set theory following Jech (2024), finite-support definition preceding Lemma 15.12, printed p265; coordinatewise compatibility verified locally (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-poset-ccc-and-knaster-property`. Axiom base: ZF. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `lem-finite-knaster-poset-products`

Claim/scope: Every finite product of Knaster posets is Knaster.

Source read: Monk, Set theory following Jech (2024), Lemma 15.14, printed pp265–266; indexed thinning expanded locally (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-finite-support-poset-product`, `def-poset-ccc-and-knaster-property`, `thm-countable-union-of-countable`, `thm-well-ordering-theorem`, `def-axiom-of-choice`. Axiom base: ZFC. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `thm-finite-support-knaster-poset-products`

Claim/scope: A finite-support product of any set-indexed family of Knaster posets is Knaster. In particular finite partial functions from any set to a fixed nonempty countable set, ordered by extension, form a Knaster poset.

Source read: Monk, Set theory following Jech (2024), Lemma 15.15 and Corollary 15.16, printed p266; partial-function encoding supplied locally (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `lem-finite-knaster-poset-products`, `cor-indexed-omega-one-delta-system`, `def-finite-support-poset-product`, `def-poset-ccc-and-knaster-property`, `thm-well-ordering-theorem`, `def-axiom-of-choice`. Axiom base: ZFC. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `cex-countable-levels-do-not-suffice-for-konig`

Claim/scope: Finite strictly decreasing sequences of natural numbers form a height-ω tree with countable levels and no infinite branch.

Source read: Monk, Set theory following Jech (2024), Theorem 9.32, printed p86; decreasing-sequence witness supplied locally (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-set-theoretic-tree-and-levels`, `thm-konig-finite-level-tree`, `thm-product-of-countable`, `lem-subset-of-countable`, `thm-well-ordering-principle`. Axiom base: ZF. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `fs-every-omega-one-tree-has-a-cofinal-branch`

Claim/scope: Even a normal splitting ω1-tree with countable levels can have no cofinal branch.

Source read: Karagila, Axiomatic Set Theory, Theorem 9.2 and Exercise 9.4, printed p43; application of the local special-tree construction (https://karagila.org/files/set-theory-2017.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `thm-special-aronszajn-tree-construction`, `def-kappa-tree-and-tree-property`, `def-aronszajn-suslin-and-special-tree`, `thm-countable-subsets-of-omega-one-are-bounded`, `def-axiom-of-choice`. Axiom base: ZFC. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `lem-cocountable-ultrafilter-on-uncountable-set`

Claim/scope: For any uncountable set X, there is an ultrafilter U on X containing all cocountable subsets; every member of U is uncountable.

Source read: Monk, Set theory following Jech (2024), Lemma 16.36 proof, assertion (1), printed p331; proper-filter construction expanded locally (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-filter`, `thm-ultrafilter-lemma`, `thm-countable-union-of-countable`, `lem-subset-of-countable`, `def-axiom-of-choice`. Axiom base: ZFC. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `lem-aronszajn-finite-petals-incomparability`

Claim/scope: For an uncountable family of pairwise disjoint finite subsets of an Aronszajn tree, two members have every node of one incomparable with every node of the other.

Source read: Monk, Set theory following Jech (2024), Lemma 16.36, printed pp331–332; bounded-level exclusion and maximal-branch argument expanded locally (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-aronszajn-suslin-and-special-tree`, `lem-cocountable-ultrafilter-on-uncountable-set`, `lem-ultrafilter-prime`, `lem-tree-predecessors-and-common-extensions`, `thm-countable-union-of-countable`, `def-filter`, `def-axiom-of-choice`. Axiom base: ZFC. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `def-finite-aronszajn-specialization-poset`

Claim/scope: P(T) consists of finite partial maps p:T→ω such that x<_T y in dom(p) implies p(x)≠p(y). Order by reverse inclusion of graphs.

Source read: Monk, Set theory following Jech (2024), Lemma 16.37, printed p332; reflexive order and distinct-node conventions corrected explicitly (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-aronszajn-suslin-and-special-tree`, `def-poset-ccc-and-knaster-property`. Axiom base: ZF. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `thm-aronszajn-specialization-poset-ccc`

Claim/scope: For every Aronszajn tree T, P(T) is ccc.

Source read: Monk, Set theory following Jech (2024), Lemma 16.37, printed p332; corrected indexed-delta reference and complete union case analysis (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-finite-aronszajn-specialization-poset`, `cor-indexed-omega-one-delta-system`, `lem-aronszajn-finite-petals-incomparability`, `thm-countable-union-of-countable`, `thm-product-of-countable`, `thm-well-ordering-theorem`, `def-poset-ccc-and-knaster-property`, `def-axiom-of-choice`. Axiom base: ZFC. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `lem-specialization-dense-domains-and-union`

Claim/scope: For each t∈T, Dt={p:t∈dom(p)} is dense. If a downward-directed family G meets every Dt, its union is a total specializing function.

Source read: Monk, Set theory following Jech (2024), Theorem 16.38 proof, printed p332; density and union argument only, with no invocation of Martin’s axiom (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-finite-aronszajn-specialization-poset`, `def-aronszajn-suslin-and-special-tree`. Axiom base: ZF. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `ex-finite-specialization-compatibility`

Claim/scope: For x<_T y, {(x,0)} and {(y,0)} have disjoint domains but are incompatible; {(x,0)} and {(y,1)} have a common extension.

Source read: Monk, Set theory following Jech (2024), Lemma 16.37 defining condition (iii), printed p332; two singleton assignments calculated locally (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-finite-aronszajn-specialization-poset`. Axiom base: ZF. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `def-diamond-on-omega-one`

Claim/scope: Diamond is a sequence ⟨Aα:α<ω1⟩ with Aα⊆α such that {α:A∩α=Aα} is stationary for every A⊆ω1.

Source read: Karagila, Axiomatic Set Theory, Definition 9.7, printed p44 (https://karagila.org/files/set-theory-2017.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-club-subsets-of-ordinals`, `def-club-filter-and-nonstationary-ideal`, `def-first-uncountable-ordinal`. Axiom base: ZFC. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `prop-diamond-implies-continuum-hypothesis`

Claim/scope: In ZFC, diamond implies 2^ℵ0=ℵ1.

Source read: Karagila, Axiomatic Set Theory, Proposition 9.8, printed p44; least-index injection expanded locally (https://karagila.org/files/set-theory-2017.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-diamond-on-omega-one`, `def-cardinal`, `thm-cantor-powerset`, `def-club-subsets-of-ordinals`, `def-axiom-of-choice`. Axiom base: ZFC + diamond. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `def-ostaszewski-club-principle`

Claim/scope: Clubsuit is a sequence Cα cofinal in α for nonzero countable limit α, such that for every uncountable X⊆ω1, stationarily many α satisfy Cα⊆X. One may require each Cα to have order type ω.

Source read: Mildenberger–Shelah, Specialising Aronszajn Trees, September 4, 2015 draft, Definition 1.11, printed p4; order-type-omega thinning proved locally (https://home.mathematik.uni-freiburg.de/mildenberger/postings/paperspdf/988_2015_09_04.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-club-filter-and-nonstationary-ideal`, `def-cofinal-subset-of-an-ordinal`, `def-first-uncountable-ordinal`, `def-axiom-of-choice`, `thm-recursion`. Axiom base: ZFC. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `prop-diamond-implies-ostaszewski-club`

Claim/scope: Diamond implies the club principle.

Source read: Mildenberger–Shelah, Specialising Aronszajn Trees, September 4, 2015 draft, Definitions 1.9 and 1.11, printed p4; implication derived locally (https://home.mathematik.uni-freiburg.de/mildenberger/postings/paperspdf/988_2015_09_04.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-diamond-on-omega-one`, `def-ostaszewski-club-principle`, `lem-limit-points-of-unbounded-sets`, `thm-small-intersections-of-clubs`, `thm-countable-subsets-of-omega-one-are-bounded`, `def-axiom-of-choice`. Axiom base: ZFC + diamond. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `def-jensen-square-sequence`

Claim/scope: For infinite κ, squareκ asserts a sequence Cα, indexed by nonzero limit α<κ+, where Cα is club in α, otp(Cα)≤κ, and Cβ=Cα∩β whenever β is a limit point of Cα. A thread is a club D⊆κ+ with D∩α=Cα at every limit point α of D.

Source read: Cummings–Magidor, Martin’s Maximum and weak square, Definition 1.1, p1, and width-one identification, p2; no-thread consequence proved locally (https://www.math.cmu.edu/users/jcumming/papers/mm_square_final.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-club-subsets-of-ordinals`, `def-cardinal`, `def-axiom-of-choice`, `thm-regularity-of-the-alephs`, `cor-cardinal-absorption`. Axiom base: ZFC. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `lem-club-tree-coding-antichain-reflection`

Claim/scope: For a tree T of height ω1 with countable levels and a maximal antichain A, code T bijectively on ω1. There is a club of limit δ for which the coded nodes below δ are exactly T below level δ and A∩δ is maximal in that restriction.

Source read: Karagila, Axiomatic Set Theory, Theorem 9.10 proof, printed p45; direct closure-map alternative to elementary-substructure reflection (https://karagila.org/files/set-theory-2017.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `lem-closure-points-on-regular-cardinals`, `lem-tree-predecessors-and-common-extensions`, `thm-small-intersections-of-clubs`, `thm-countable-subsets-of-omega-one-are-bounded`, `cor-cardinal-absorption`, `def-axiom-of-choice`. Axiom base: ZFC. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `thm-diamond-constructs-normal-suslin-tree`

Claim/scope: In ZFC, diamond implies that a normal splitting Suslin tree exists.

Source read: Karagila, Axiomatic Set Theory, Theorem 9.10 and Lemma 9.11, printed pp44–45; consecutive coding and deterministic recursion expanded locally (https://karagila.org/files/set-theory-2017.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-diamond-on-omega-one`, `lem-countable-tree-antichain-sealing`, `lem-club-tree-coding-antichain-reflection`, `lem-splitting-cofinal-branch-gives-antichain`, `thm-transfinite-recursion`, `thm-countable-union-of-countable`, `thm-zorn`, `thm-well-ordering-theorem`, `def-normal-splitting-set-theoretic-tree`, `def-aronszajn-suslin-and-special-tree`, `lem-tree-predecessors-and-common-extensions`, `def-axiom-of-choice`. Axiom base: ZFC + diamond. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `thm-splitting-suslin-tree-poset-square-not-ccc`

Claim/scope: If T is a normal splitting Suslin tree, its reverse-extension poset is ccc but T×T is not ccc.

Source read: Monk, Set theory following Jech (2024), tree definitions printed p65 and Proposition 9.34 printed pp86–87; split-pair product proof supplied locally (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-poset-ccc-and-knaster-property`, `def-finite-support-poset-product`, `def-normal-splitting-set-theoretic-tree`, `def-aronszajn-suslin-and-special-tree`, `lem-tree-predecessors-and-common-extensions`, `def-axiom-of-choice`. Axiom base: ZFC. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `ex-diamond-suslin-ccc-square`

Claim/scope: Assuming diamond, the constructed tree poset is ccc and its square contains the explicit uncountable split-pair antichain.

Source read: Karagila, Axiomatic Set Theory, Theorem 9.10, printed pp44–45; ordinal-coded instance of the local split-pair theorem (https://karagila.org/files/set-theory-2017.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `thm-diamond-constructs-normal-suslin-tree`, `thm-splitting-suslin-tree-poset-square-not-ccc`, `lem-finite-knaster-poset-products`, `def-poset-ccc-and-knaster-property`, `def-axiom-of-choice`. Axiom base: ZFC + diamond. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `def-partition-arrow-notation`

Claim/scope: κ→(λ)^n_r means every map from n-element subsets of κ to r has a homogeneous subset of cardinality λ.

Source read: Monk, Set theory following Jech (2024), Chapter 29 opening partition definitions, printed p647; zero-arity and empty-subset conventions made explicit (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-cardinal`. Axiom base: ZFC. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `thm-infinite-ramsey-finite-colors`

Claim/scope: For positive finite n and r, every r-coloring of the n-element subsets of ω has an infinite homogeneous set.

Source read: Monk, Set theory following Jech (2024), Theorem 29.1, printed p648; increasing-tail recursion and choice of homogeneous tails expanded locally (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-partition-arrow-notation`, `thm-recursion`, `thm-induction-principle`, `thm-well-ordering-theorem`, `def-axiom-of-choice`. Axiom base: ZFC. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `def-finite-beth-iteration-above-a-cardinal`

Claim/scope: For infinite cardinal kappa, define beth_0(kappa)=kappa and beth_(n+1)(kappa)=2^beth_n(kappa) for natural n. A superscript + on these cardinals denotes the successor cardinal.

Source read: Monk, Set theory following Jech (2024), Theorem 9.9, printed pp62–63; relative finite iteration for the arbitrary-cardinal adaptation (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-aleph-and-beth-hierarchies`, `thm-recursion`, `thm-transfinite-recursion`, `def-axiom-of-choice`. Axiom base: ZFC. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `def-pruned-tree-products-and-dense-matrices`

Claim/scope: For a rooted finitely branching height-ω tree with no terminal nodes, A is (h,k)-dense if some node at height h has every extension at height h+k below a member of A. A k-matrix for T1,...,Td is a product of (0,k)-dense sets; an (h,k)-matrix uses that common h in every factor. The level product uses tuples of equal height. Define k-dense as (0,k)-dense, infinity-dense as k-dense for every natural k, and domination of a node t by A as the existence of a in A with t<=a. Then A is k-dense iff it dominates the entire kth level, and infinity-dense iff it dominates every node.

Source read: Monk, Set theory following Jech (2024), Halpern–Läuchli definitions and Propositions 1–2 preceding Theorem 29.28, printed p661 (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-set-theoretic-tree-and-levels`. Axiom base: ZF. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `def-suslin-line-order-interface`

Claim/scope: A Suslin line here is a dense linear order without endpoints, Dedekind complete, with no countable order-dense subset and no uncountable family of pairwise disjoint nonempty open intervals.

Source read: Monk, Set theory following Jech (2024), Theorem 9.17, printed pp72–73; dense complete order convention separated from nowhere-separable reduction (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-partial-order`, `def-countable`. Axiom base: ZFC. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `lem-erdos-rado-pattern-closure-and-end-homogeneity`

Claim/scope: Let mu be infinite, 1<=r<=mu, d>=1 finite, lambda=(2^mu)^+, and F:[lambda]^(d+1)->r. There are distinct x_alpha for alpha<mu^+ and a outside their range such that F(u union {x_alpha})=F(u union {a}) for every d-element subset u of {x_beta:beta<alpha}. The sequence need not be increasing in lambda.

Source read: Monk, Set theory following Jech (2024), Theorem 9.9, printed pp62–63, countable-color pattern closure; arbitrary-cardinal proof expanded from the assigned local resolution (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-partition-arrow-notation`, `lem-cardinal-arithmetic-basic-laws`, `cor-cardinal-absorption`, `thm-regularity-of-the-alephs`, `thm-every-infinite-cardinal-is-an-aleph`, `thm-transfinite-recursion`, `thm-cantor-powerset`, `def-axiom-of-choice`. Axiom base: ZFC. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `thm-general-cardinal-erdos-rado`

Claim/scope: In ZFC, beth_n(kappa)^+ -> (kappa^+)^(n+1)_kappa for every infinite cardinal kappa and every natural n, including n=0.

Source read: Monk, Set theory following Jech (2024), Theorem 9.9, printed pp62–63; arbitrary infinite-cardinal generalization and zero case proved locally (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-finite-beth-iteration-above-a-cardinal`, `lem-erdos-rado-pattern-closure-and-end-homogeneity`, `cor-cardinal-absorption`, `thm-induction-principle`, `def-partition-arrow-notation`, `thm-cantor-powerset`, `def-axiom-of-choice`. Axiom base: ZFC. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `rem-ramsey-and-erdos-rado-orientation`

Claim/scope: Retain the classical targets ω→(ω)^n_r for positive finite n,r, and beth_n(κ)+→(κ+)^(n+1)_κ for infinite κ and finite n. The latter uses beth_0(κ)=κ and beth_(m+1)(κ)=2^beth_m(κ).

Source read: Monk, Set theory following Jech (2024), Theorem 29.1, printed p648, and Theorem 9.9, printed pp62–63; orientation to the completed local proofs (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-partition-arrow-notation`, `thm-infinite-ramsey-finite-colors`, `thm-general-cardinal-erdos-rado`. Axiom base: ZFC. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `rem-kurepa-suslin-line-tree-interface`

Claim/scope: Orientation: in ZFC a Suslin line exists iff a Suslin tree exists. The full equivalence is to be proved on suslin-trees-lines-algebras-and-independence, with normal-tree reduction, lexicographic maximal branches, order completion, and the nowhere-separable core accounted for.

Source read: Monk, Set theory following Jech (2024), Theorems 9.13, 9.17 and 9.18, printed pp68–75; recorded equivalence with later proof ownership (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-suslin-line-order-interface`, `def-aronszajn-suslin-and-special-tree`. Axiom base: ZFC. Provenance: ai-altered / not-supplied.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. The general recorded result remains unproved here as assigned; its later proof destination is retained and no item uses it as a dependency. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `rem-halpern-lauchli-finite-tree-statement`

Claim/scope: For a positive finite family of rooted finitely branching height-ω trees without terminal nodes and Q⊆∏Ti, either every k admits a k-matrix inside Q, or there is h such that every k admits an (h,k)-matrix inside the complement of Q.

Source read: Monk, Set theory following Jech (2024), standing tree conventions and Theorem 29.28 statement, printed p661; full proof destination pp661–670 (https://euclid.colorado.edu/~monkd/jech.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-pruned-tree-products-and-dense-matrices`. Axiom base: ZFC. Provenance: ai-altered / not-supplied.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. The general recorded result remains unproved here as assigned; its later proof destination is retained and no item uses it as a dependency. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `def-elementary-set-structure-embedding`

Claim/scope: An elementary embedding preserves and reflects every formula on finite tuples. An elementary substructure is an inclusion with this property. An elementary chain is an increasing ordinal-indexed sequence whose earlier terms are elementary substructures of later terms. Elementary equivalence means agreement on all sentences (without a specified map). A sentence theory is categorical in cardinality kappa if any two of its kappa-sized models are isomorphic; consistency/nonvacuity is asserted separately. Nonempty carriers, positive arities for original function/relation symbols, finite free-variable tuples, and primitive negation/conjunction/existential syntax are used. Witness functions may have arity zero.

Source read: Weiss–D’Mello, Fundamentals of Model Theory, Definitions 18–22, printed pp.15–16; Definition 24, p.20; elementary-map formulation made explicit. (https://www.math.toronto.edu/weiss/model_theory.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-set-structures-and-variable-assignments`, `def-theories-models-and-semantic-consequence`, `lem-satisfaction-coincidence`. Axiom base: ZF. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `thm-tarski-vaught-set-structure-test`

Claim/scope: For a nonempty L-substructure A⊆M, A≺M iff every existential formula with parameters from A that holds in M has a witness in A. Nonempty carriers, positive arities for original function/relation symbols, finite free-variable tuples, and primitive negation/conjunction/existential syntax are used. Witness functions may have arity zero.

Source read: Weiss–D’Mello, Fundamentals of Model Theory, Lemma 5 and complete proof, printed p.19. (https://www.math.toronto.edu/weiss/model_theory.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-elementary-set-structure-embedding`, `thm-set-structure-satisfaction-recursion`, `thm-structural-recursion-on-set-coded-syntax`, `def-term-denotation-in-a-set-structure`, `lem-satisfaction-coincidence`. Axiom base: ZF. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `def-skolem-witness-hull`

Claim/scope: A witness family chooses for each existential L-formula and parameter tuple a satisfying element of M when one exists, and a fixed default otherwise. Its hull of A is the ω-iteration of closure under these functions, original functions and constants. Nonempty carriers, positive arities for original function/relation symbols, finite free-variable tuples, and primitive negation/conjunction/existential syntax are used. Witness functions may have arity zero.

Source read: Weiss–D’Mello, Fundamentals of Model Theory, Theorem 5 proof, printed p.20; witness family and default made explicit. (https://www.math.toronto.edu/weiss/model_theory.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-elementary-set-structure-embedding`, `thm-recursion`, `lem-satisfaction-coincidence`, `thm-set-structure-satisfaction-recursion`. Axiom base: ZF. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `lem-skolem-hull-size-and-elementarity`

Claim/scope: In ZFC, if κ is infinite, |L|≤κ, |A|≤κ and A⊆M, a witness hull of A has size at most κ and is elementary in M. For countable L and A the hull is at most countable. Nonempty carriers, positive arities for original function/relation symbols, finite free-variable tuples, and primitive negation/conjunction/existential syntax are used. Witness functions may have arity zero.

Source read: Weiss–D’Mello, Fundamentals of Model Theory, Theorem 5 proof, printed p.20; finite-word count and choices expanded. (https://www.math.toronto.edu/weiss/model_theory.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-skolem-witness-hull`, `thm-tarski-vaught-set-structure-test`, `thm-hessenberg`, `cor-cardinal-absorption`, `thm-well-ordering-theorem`, `def-axiom-of-choice`, `def-set-coded-terms-and-formulas`. Axiom base: ZFC. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `thm-downward-lowenheim-skolem-with-parameters`

Claim/scope: In ZFC, if M is infinite and max(|L|,ℵ0)≤κ≤|M|, then each A⊆M of size at most κ lies in an elementary substructure of M of size exactly κ. Nonempty carriers, positive arities for original function/relation symbols, finite free-variable tuples, and primitive negation/conjunction/existential syntax are used. Witness functions may have arity zero.

Source read: Weiss–D’Mello, Fundamentals of Model Theory, Theorem 5, printed p.20; equality endpoint included. (https://www.math.toronto.edu/weiss/model_theory.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `lem-skolem-hull-size-and-elementarity`, `cor-cardinal-absorption`, `def-axiom-of-choice`. Axiom base: ZFC. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `thm-elementary-ordinal-chain-union`

Claim/scope: The union of a nonempty ordinal-indexed elementary chain is an L-structure in which each stage is elementary. Nonempty carriers, positive arities for original function/relation symbols, finite free-variable tuples, and primitive negation/conjunction/existential syntax are used. Witness functions may have arity zero.

Source read: Weiss–D’Mello, Fundamentals of Model Theory, Theorem 4 and complete proof, printed pp.16–18; ordinal-index extension described before the theorem. (https://www.math.toronto.edu/weiss/model_theory.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-elementary-set-structure-embedding`, `thm-structural-recursion-on-set-coded-syntax`, `thm-set-structure-satisfaction-recursion`, `def-term-denotation-in-a-set-structure`, `lem-satisfaction-coincidence`. Axiom base: ZF. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `cex-isomorphic-inclusion-need-not-be-elementary`

Claim/scope: The ordered structures (ω,<) and (ω\{0},<) are isomorphic, but the natural inclusion of the latter into the former is not elementary.

Source read: Weiss–D’Mello, Fundamentals of Model Theory, Example 7, printed p.16; shift and failed formula computed. (https://www.math.toronto.edu/weiss/model_theory.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-elementary-set-structure-embedding`, `thm-set-structure-satisfaction-recursion`, `lem-nat-nonzero-is-successor`, `lem-nat-order-add-compatible`, `lem-nat-trichotomy`. Axiom base: ZF. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `def-elementary-diagram-of-set-structure`

Claim/scope: Expand L by a distinct constant c_a for each a∈M. The elementary diagram of M is the set of all expanded-language sentences true in the expansion naming every a. Nonempty carriers, positive arities for original function/relation symbols, finite free-variable tuples, and primitive negation/conjunction/existential syntax are used. Witness functions may have arity zero.

Source read: Weiss–D’Mello, Fundamentals of Model Theory, Chapter 3 opening and Definition 25, printed p.24. (https://www.math.toronto.edu/weiss/model_theory.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-elementary-set-structure-embedding`, `def-set-signature-and-finite-syntax-strings`, `thm-set-structure-satisfaction-recursion`, `lem-satisfaction-coincidence`, `def-theories-models-and-semantic-consequence`. Axiom base: ZF. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `lem-elementary-diagram-embedding`

Claim/scope: A model N of the elementary diagram yields the elementary embedding a↦c_a^N from M into the L-reduct of N; conversely such an embedding provides an expansion satisfying the diagram. Nonempty carriers, positive arities for original function/relation symbols, finite free-variable tuples, and primitive negation/conjunction/existential syntax are used. Witness functions may have arity zero. Both embedding directions and literal-inclusion transport are proved; the source leaves Theorem 9(2) as an exercise.

Source read: Weiss–D’Mello, Fundamentals of Model Theory, Theorem 9(2), Exercise 13 and Exercise 14, printed p.25; full local proof supplied, not attributed to the exercise. (https://www.math.toronto.edu/weiss/model_theory.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-elementary-diagram-of-set-structure`, `def-elementary-set-structure-embedding`, `lem-formula-substitution-satisfaction`, `lem-satisfaction-coincidence`, `thm-set-structure-satisfaction-recursion`, `thm-structural-recursion-on-set-coded-syntax`, `def-membership-rank-of-a-set`, `prop-ranks-of-ordinals-and-hierarchy-stages`. Axiom base: ZF. Provenance: ai-altered / ai-generated.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `def-nonstandard-natural-number-structure`

Claim/scope: Let N be the standard set structure (ω,0,S,<), let Th(N) be its set of true sentences, and let the numeral n denote S iterated n times at 0. A model of Th(N) is nonstandard if it is not isomorphic to N.

Source read: Weiss–D’Mello, Fundamentals of Model Theory, Example 6 and Theorem 3, printed p.15; definition adapted to the assigned language (0,S,<). (https://www.math.toronto.edu/weiss/model_theory.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-theories-models-and-semantic-consequence`, `thm-recursion`, `def-natural-numbers`, `thm-set-structure-satisfaction-recursion`, `lem-satisfaction-coincidence`, `def-term-denotation-in-a-set-structure`. Axiom base: ZF. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `def-henkin-witness-extension`

Claim/scope: A sentence theory in a language with a constant is Henkin if for every existential sentence ∃xφ(x) it contains an axiom ∃xφ(x)→φ(c) for some constant c; all other parameters in φ are already closed terms. This is only the assigned witness-axiom convention; source Henkin sets additionally impose consistency and completeness. The unused formal-derivation dependency was replaced by actual syntax and theory suppliers.

Source read: Moschovakis, Lecture Notes in Logic (2014), Definition 1I.2, printed p.39, and Lemma 1I.4, pp.40–41; witness-axiom convention explicitly distinguished. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-set-coded-terms-and-formulas`, `def-set-signature-and-finite-syntax-strings`, `def-free-variables-and-syntactic-substitution`, `def-theories-models-and-semantic-consequence`. Axiom base: ZF. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `lem-countable-henkin-syntax-coding`

Claim/scope: Given an explicit injection of the signature into ω, every staged Henkin alphabet, term set, formula set and proof set has an explicit injection into ω. Sentences admit an exhaustive sequence, with repetitions allowed. The proof codes the joint potential alphabet and finite lists with a length tag; no countable choice or decidability assumption is made.

Source read: Moschovakis, Lecture Notes in Logic (2014), Lemma 1I.4, Sublemma 1 and proof, printed pp.40–41; explicit uniform pairing codes supplied locally. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-set-signature-and-finite-syntax-strings`, `def-set-coded-terms-and-formulas`, `thm-n-cross-n-countable`, `thm-recursion`. Axiom base: ZF. Provenance: ai-altered / ai-altered.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `def-coded-first-order-zf-theory`

Claim/scope: T_ZF is the set of coded membership-language sentences consisting of Extensionality, Pairing, Union, Power Set, Infinity and Foundation, and every Separation and Replacement instance. All free parameters in a schema instance are universally closed. The Axiom of Choice is excluded. Implication-only Power Set, functional-image Replacement, successor-form Infinity and universal closure of every free parameter exactly follow the local published suppliers.

Source read: Exact published axiom Definition sections listed here; comparison: Moschovakis, Lecture Notes in Logic (2014), Definition 1G.12, printed pp.33–34, and Definition 1A.5, pp.3–4. Published local Power Set and Infinity forms retained. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-language-of-set-theory`, `def-axiom-of-extensionality`, `def-axiom-schema-of-separation`, `def-axiom-of-pairing`, `def-axiom-of-union`, `def-axiom-of-power-set`, `def-axiom-schema-of-replacement`, `def-axiom-of-infinity`, `def-axiom-of-foundation`, `def-set-coded-terms-and-formulas`, `lem-countable-henkin-syntax-coding`, `def-free-variables-and-syntactic-substitution`. Axiom base: ZF. Provenance: ai-altered / not-applicable.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `lem-models-of-coded-zf-are-infinite`

Claim/scope: If a nonempty set structure (M,E) satisfies T_ZF, its external domain M is infinite. No transitivity or external well-foundedness of E is assumed. The completed proof gives an external injection omega into M via unique successors. It never identifies E with external membership.

Source read: Published ZF axiom definitions, exactly translated in def-coded-first-order-zf-theory; Moschovakis Definition 1G.12, pp.33–34, and Definition 1A.5, pp.3–4, for comparison; local infinitude argument uses the published successor-form Infinity. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-coded-first-order-zf-theory`, `thm-set-structure-satisfaction-recursion`, `thm-recursion`, `thm-induction-principle`, `lem-pigeonhole`, `lem-nat-trichotomy`. Axiom base: ZF. Provenance: ai-altered / ai-generated.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Recovery checkpoint — author-recover-14-2: `cex-generalization-after-open-assumption`

Claim/scope: The unrestricted discharge rule would falsely prove P(x)→∀xP(x).

Source read: Moschovakis, Lecture Notes in Logic (2014), Theorem 1H.8 and Theorem 1H.9, printed p.37, sentence side condition; explicit two-element refutation. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Relevant complete passage read; the exact local supplier excerpts and their individual step uses are in the contract. Dependencies: `def-set-coded-terms-and-formulas`, `thm-set-structure-satisfaction-recursion`. Axiom base: ZF. Provenance: ai-altered / ai-generated.

Evidence: the individual contract maps each actual proof step once and addresses all eight boundary cases. Canonical numbering repairs were applied to the actual item and contract together. Checks: see the final recovery check table below for the explicit final invocations; a full-batch pass is not claimed. No mathematical gap is asserted in this completed draft; it has not been independently judged. Next action: owning Alpha b resolves the primitive-existential calculus prerequisite; retain this completed content while authoring the remaining dependent items.

### Final recovery checkpoint — author-recover-14-2

**Status: Step 5 remains incomplete.** All 90 assigned IDs and all four page inventories remain in the manifest. There are now 64 authored item drafts: 47 newly authored in this recovery and 17 retained from the earlier recovery. Of these, 40 have written proofs/refutations, 21 are definitions, and three are remarks (two explicitly recorded without proof). Counts describe substantive draft content and the verification below, not independent mathematical adjudication.

The completed page pair is `set-theoretic-trees-delta-systems-and-diamond` and `set-theoretic-trees-delta-systems-and-diamond-examples`, at their assigned `library/foundations/` paths, with all 49 assigned items. The A-page introduction now follows the actual compatibility, sealing, coding and partition arguments. Its two later-proof orientation results are explicitly recorded rather than presented as proved here. The other page pair, `deduction-soundness-completeness-and-compactness` and its `-examples` page, remains incomplete: 15 of its 41 items are authored. Its full inventories are preserved at the assigned paths.

#### Newly authored item IDs (47)

- `def-henkin-witness-extension`
- `lem-countable-henkin-syntax-coding`
- `def-elementary-set-structure-embedding`
- `thm-tarski-vaught-set-structure-test`
- `def-skolem-witness-hull`
- `lem-skolem-hull-size-and-elementarity`
- `thm-downward-lowenheim-skolem-with-parameters`
- `thm-elementary-ordinal-chain-union`
- `def-elementary-diagram-of-set-structure`
- `lem-elementary-diagram-embedding`
- `def-nonstandard-natural-number-structure`
- `def-coded-first-order-zf-theory`
- `lem-models-of-coded-zf-are-infinite`
- `cex-generalization-after-open-assumption`
- `cex-isomorphic-inclusion-need-not-be-elementary`
- `cor-indexed-omega-one-delta-system`
- `def-poset-ccc-and-knaster-property`
- `def-finite-support-poset-product`
- `lem-finite-knaster-poset-products`
- `thm-finite-support-knaster-poset-products`
- `lem-cocountable-ultrafilter-on-uncountable-set`
- `lem-aronszajn-finite-petals-incomparability`
- `def-finite-aronszajn-specialization-poset`
- `thm-aronszajn-specialization-poset-ccc`
- `lem-specialization-dense-domains-and-union`
- `def-diamond-on-omega-one`
- `prop-diamond-implies-continuum-hypothesis`
- `def-ostaszewski-club-principle`
- `prop-diamond-implies-ostaszewski-club`
- `def-jensen-square-sequence`
- `lem-club-tree-coding-antichain-reflection`
- `thm-diamond-constructs-normal-suslin-tree`
- `thm-splitting-suslin-tree-poset-square-not-ccc`
- `def-suslin-line-order-interface`
- `rem-kurepa-suslin-line-tree-interface`
- `def-partition-arrow-notation`
- `thm-infinite-ramsey-finite-colors`
- `def-finite-beth-iteration-above-a-cardinal`
- `lem-erdos-rado-pattern-closure-and-end-homogeneity`
- `thm-general-cardinal-erdos-rado`
- `rem-ramsey-and-erdos-rado-orientation`
- `def-pruned-tree-products-and-dense-matrices`
- `rem-halpern-lauchli-finite-tree-statement`
- `cex-countable-levels-do-not-suffice-for-konig`
- `ex-finite-specialization-compatibility`
- `ex-diamond-suslin-ccc-square`
- `fs-every-omega-one-tree-has-a-cofinal-branch`

#### Retained completed item IDs (17)

- `def-set-theoretic-tree-and-levels`
- `lem-tree-predecessors-and-common-extensions`
- `def-kappa-tree-and-tree-property`
- `def-normal-splitting-set-theoretic-tree`
- `lem-normal-set-theoretic-tree-sequence-representation`
- `def-aronszajn-suslin-and-special-tree`
- `thm-konig-finite-level-tree`
- `lem-countable-normal-tree-cofinal-branch`
- `lem-splitting-cofinal-branch-gives-antichain`
- `lem-bounded-rational-tree-limit-extension`
- `thm-special-aronszajn-tree-construction`
- `def-finite-delta-system`
- `thm-regular-uncountable-finite-delta-system`
- `lem-countable-tree-antichain-sealing`
- `ex-binary-tree-and-konig-branch`
- `ex-uncountable-delta-system-with-one-point-root`
- `cex-infinite-sets-delta-system-hypothesis`

#### Checks actually run, after canonical repairs

| Invocation | Final actual result |
|---|---|
| `node tools/tsx-run.mjs tools/precheck.mts` with all 90 explicit manifest `items/ID.md` paths | Exit 1: stops at absent `items/def-set-coded-formal-derivation.md`; no full-manifest precheck pass. |
| Same precheck with all 64 existing owned explicit paths | Exit 0: 40 proof-bearing items checked, zero failing. Initial numbering repairs were applied and rerun; term/formula and diagram steps were also reordered to canonical dependency levels with matching contract references. |
| `node tools/validate-plan.mjs` | Exit 2: this CLI requires a plan filename; usage output, not a validation pass. |
| `node tools/validate-plan.mjs research/plan-spec.json` | Exit 0: no item cycles, improper forward references, B-page dependencies or unresolved plan IDs among 930 pages with item lists; 685 other planned pages lack item lists as a global advisory. No plan edit was made. |
| `node tools/content-policy.mjs research/phase-2-wave-1-batch-14.pages.json` | Exit 1: exactly 26 `scope-item-missing` errors, listed below; no other policy errors. |
| `node tools/proof-contract.mjs research/phase-2-wave-1-batch-14.proof-contracts.json --strict` | Exit 1: exactly 26 missing-item errors; 64/90 checked. No full-contract pass. |
| Same strict contract command with `--items` selecting the 64 existing owned IDs | Exit 0: 64/64 checked, zero errors and zero warnings. Each written proof step has one derivation row, actual inputs, source excerpts and use locations. |
| `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1` | Exit 0 after dependency/input edits; the atomic owned consumer input remains `[]`. A current cross-check against all available same-run batch manifests found no other-batch supplier among this batch's declared dependency/justification/forward edges. |

Format checks do not establish mathematical truth. No judge, audit, verification, publication or workflow stamp was added; no independent review was replaced. Unproved-result `verification.precheck: n/a` is schema metadata for the two recorded remarks, not a proof pass.

#### Sources, provenance and dependency decisions

All new statement provenance remains `ai-altered`, with reference URLs and exact locators. There are no AI-generated statement dependency targets and no `generation` fields on these non-generated statements. Proof provenance is `ai-generated` for the elementary-diagram embedding exercise, the local infinitude proof for coded ZF, and the explicit open-assumption counterexample; those local arguments are not presented as supplied source proofs. Other adapted arguments remain `ai-altered`. Definitions have `proof: not-applicable`. The source-support locators in the manifest now agree with the new drafts and per-item evidence.

The two recorded items are `rem-kurepa-suslin-line-tree-interface` and `rem-halpern-lauchli-finite-tree-statement`. Both have `proved_here: false`, source URLs, exact recorded claims, the actual local-proof-attempt description and necessity. Their later proof destinations and full promised statements are retained; no item targets them through `deps`.

The tree spine uses the direct closure-map option allowed by the Step-3 scaffold for `lem-club-tree-coding-antichain-reflection`; an unused elementary-initial-segment dependency was removed. This avoids making the diamond construction depend on the unresolved calculus. The indexed delta-system argument handles repeated values; finite-support products handle the empty root/product; specialization handles empty petals and requires a supplied directed family for the dense-domain union; the Suslin construction uses consecutive ordinal allocation, the coding club and antichain sealing. Erdős–Rado retains arbitrary infinite cardinals and every finite index, including zero. No promised theorem was narrowed to the countable-color case.

The independent semantic items use the published positive-arity signature convention; only auxiliary witness functions may have arity zero. Tarski–Vaught explicitly evaluates the witness matrix in the ambient structure. Hull existence for arbitrary structures and cardinal counting explicitly assume AC, while supplied witness families, elementary chains and diagram embeddings are handled in ZF. The diagram embedding proof gives both directions and literal-inclusion transport. Coded ZF retains the local implication-only Power Set and successor-form Infinity formulas, rather than silently adopting different source presentations. Syntax/Henkin definitions and the open-assumption counterexample now depend on the actual syntax/satisfaction suppliers rather than unused missing deduction results.

Consumer-batch input is `research/phase-2-wave-1-batch-14.cross-batch-dependencies.json`, as specified in `briefs/tasks/frontier-dependency-ledger.md`. Existing published suppliers are not same-frontier edges. All mathematical edits are owned draft content, contracts, notes and dependency input; no other batch mathematics, published supplier, plan or workflow state was edited.

#### Unresolved mathematical/scope obligation for Alpha b

The primitive-existential obstruction at the start of this Step-5 section still applies. This recovery reread Moschovakis §§1H.1–1H.2 and the complete printed pp.34–37 passage from the author-hosted PDF. The source explicitly contains axiom (11), free-for existential introduction, and rule (14), restricted existential elimination. The proposed abbreviated scaffold calculus contains only MP and universal generalization and cannot derive its promised primitive existential-introduction instance. The displayed constructor-sensitive countervaluation validates its listed axioms and rules while assigning value zero to `exists x (x=x)`.

**Prerequisite and proposed remedy:** Alpha b must select and record a complete calculus compatible with the already published primitive syntax, retaining every promised item. The concrete proposal is to add the source's free-for existential-introduction axiom and restricted existential-elimination rule, then add the corresponding cases to finite-support, deduction, soundness and fresh-constant transformation proofs. An alternative requires a fully supplied syntactic translation. This is a proposed owning-Alpha change, not an implemented plan or scope edit. No permission is requested here.

The following 26 IDs remain absent and uncompleted. The list includes the calculus definitions and proofs whose specification/cases depend on that choice, the Henkin/completeness chain, and its promised applications. It is not a claim that all 26 statements are individually false. In particular ordinary soundness and deduction must be written for the selected calculus rather than silently supplied for a different one. The seed-constant example still owes its promised consistent Henkin theory and singleton quotient calculation; it was not narrowed to merely exhibiting a singleton semantic structure.

- `def-set-coded-formal-derivation`
- `def-first-order-syntactic-consistency`
- `lem-derivation-finite-support-and-concatenation`
- `lem-hilbert-propositional-and-equality-rules`
- `thm-first-order-sentence-deduction`
- `thm-set-language-first-order-soundness`
- `lem-proof-fresh-constant-elimination`
- `lem-consistent-sentence-decision`
- `lem-fresh-henkin-axiom-preserves-consistency`
- `thm-countable-lindenbaum-henkin-completion`
- `lem-complete-henkin-theory-truth-rules`
- `lem-henkin-term-equality-congruence`
- `def-henkin-closed-term-model`
- `thm-henkin-closed-term-truth-lemma`
- `thm-countable-first-order-completeness`
- `thm-countable-first-order-compactness`
- `thm-well-ordered-language-henkin-completeness`
- `thm-upward-lowenheim-skolem-with-choice`
- `cor-arbitrarily-large-finite-models-give-infinite-model`
- `thm-nonstandard-natural-number-model-exists`
- `cor-countable-los-vaught-test`
- `rem-first-order-choice-strength-boundary`
- `ex-first-order-sentence-deduction`
- `ex-seed-constant-for-empty-signature`
- `ex-nonstandard-element-above-every-numeral`
- `fs-categorical-first-order-zf`

Next action: resolve the named calculus prerequisite in the owning Alpha's authorized scope, then author all 26 remaining items and their contracts, finish the deduction page pair, and rerun all 90 explicit-path checks. Neither file existence nor the passing 64-item subset is a basis for treating batch 14 as complete.

Final bookkeeping checks: exact written-step/contract-claim equality was checked for all 47 newly authored items with zero mismatches; an owned-only scan of 72 draft/content/contract/note/input files found zero trailing-whitespace lines. These checks do not add mathematical evidence beyond the written arguments.

### Current recovery checkpoint: `def-first-order-syntactic-consistency`

Completed draft argument/definition and individual contract. Claim and conventions: ## Definition  Fix a set signature $L$ and sentence theory $T$, with derivability as in [[def-set-coded-formal-derivation]]. Fix the sentence $\bot:=\exists v_0\neg(v_0=v_0)$.  The theory $T$ is **consistent** when $T\nvdash\bot$. It is **syntactically complete** when for every $L$-sentence $\sigma$, $T\vdash\sigma$ or $T\vdash\neg\sigma$. Deductive closure of a sentence theory means closure under its sentence consequences; it does not include open formulas as members.  If $L\subseteq L'$ and $T\subseteq U$ are sentence theories in their respective signatures, $U$ is **conservative over $T$** when every $L$-sentence provable from $U$ is provable from $T$. The reverse preservation follows by retaining the same derivation in the expansion. These are syntactic definitions, including when $T$ is empty; no model existence is asserted.

Source read: Moschovakis, Lecture Notes in Logic, Definition 1H.11, printed p38; fixed-bottom convention adapted. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-set-coded-formal-derivation`. Proof provenance: not-applicable. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `lem-derivation-finite-support-and-concatenation`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF, every derivation from a sentence theory uses finitely many assumptions. Weakening, concatenation and replacement of proved sentence premises by their proofs preserve derivability. The union of an inclusion-chain of consistent sentence theories in one fixed signature is consistent, including the empty chain.

Source read: Moschovakis, Lemma 1H.3 pp35–36 and Lemma 1H.12 p38; local all-three-rule and empty-chain arguments. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-set-coded-formal-derivation`, `thm-induction-principle`, `def-first-order-syntactic-consistency`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `lem-hilbert-propositional-and-equality-rules`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In the fixed calculus, Boolean identity, double negation, contraposition, conjunction introduction/elimination and explosion are derivable. Equality is symmetric and transitive and permits free-for formula substitution. Existential introduction, existential monotonicity, quantified double-negation replacement and fresh-variable quantifier renaming are derivable without completeness. Monotonicity means: from $T\vdash\phi\to\psi$ infer $T\vdash\exists x\phi\to\exists x\psi$. Renaming uses a variable $y$ absent from $\phi$.

Source read: Moschovakis, §§1H.5–1H.10 pp36–38; explicit local derivations for the adapted axiom schemes. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-set-coded-formal-derivation`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `thm-first-order-sentence-deduction`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF, for a sentence theory $T$, a sentence $\sigma$ and any formula $\theta$,  $$T\cup\{\sigma\}\vdash\theta\quad\Longleftrightarrow\quad T\vdash\sigma\to\theta.$$  The forward transformation also works for an open discharged assumption $\sigma$ provided every variable generalized or existentially eliminated in the given derivation is absent from $\operatorname{FV}(\sigma)$; the other assumptions remain sentences.

Source read: Moschovakis, Theorem 1H.8 p37 (proof assigned as exercise); complete local three-rule induction. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `lem-derivation-finite-support-and-concatenation`, `lem-hilbert-propositional-and-equality-rules`, `def-set-coded-formal-derivation`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `thm-set-language-first-order-soundness`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF, for any set signature and sentence theory $T$, if $T\vdash\phi$, every nonempty set structure satisfying $T$ satisfies $\phi$ under every assignment. Consequently a theory with a model is consistent.

Source read: Moschovakis, Theorem 1H.4 p36; local semantic verification of all six axiom schemes and three rules. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-set-coded-formal-derivation`, `lem-formula-substitution-satisfaction`, `lem-satisfaction-coincidence`, `def-theories-models-and-semantic-consequence`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `lem-proof-fresh-constant-elimination`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF, if a constant $c$ occurs in neither a sentence theory $T$ nor an $L$-sentence $\sigma$, any $L(c)$-proof $T\vdash\sigma$ yields an $L$-proof. More generally replace $c$ uniformly in a finite proof by a variable $z$ absent from its formulas and annotations: this gives a proof from $T$ of the replaced conclusion, which may then be universally generalized in $z$. Expanding a signature by any set of fresh constants is conservative for original-language sentences.

Source read: Moschovakis, Lemma 1H.6 pp36–37 and Lemma 1I.4 pp40–41; local proof transformation including existential rules. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-set-coded-formal-derivation`, `lem-fresh-bound-variable-renaming`, `lem-derivation-finite-support-and-concatenation`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `lem-consistent-sentence-decision`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF, for a consistent sentence theory $T$ and sentence $\sigma$, at least one of $T\cup\{\sigma\}$ and $T\cup\{\neg\sigma\}$ is consistent. Moreover, for any sentence theory $T$,  $$T\cup\{\neg\sigma\}\text{ is inconsistent}\quad\Longleftrightarrow\quad T\vdash\sigma.$$

Source read: Moschovakis, Lemma 1H.12(3)–(4), printed p38; local deduction proof. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-first-order-syntactic-consistency`, `thm-first-order-sentence-deduction`, `lem-hilbert-propositional-and-equality-rules`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `lem-fresh-henkin-axiom-preserves-consistency`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF, if $T$ is consistent, $\exists x\phi$ is a sentence, and $c$ is a new constant absent from both, then $T\cup\{\exists x\phi\to\phi[c/x]\}$ is consistent in the expanded language. A seed constant adjoined without axioms is conservative.

Source read: Moschovakis, Lemma 1I.4 pp40–41 and Lemma 1H.12(5) p38; witness-implication variant proved locally. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-henkin-witness-extension`, `lem-proof-fresh-constant-elimination`, `thm-first-order-sentence-deduction`, `lem-consistent-sentence-decision`, `lem-hilbert-propositional-and-equality-rules`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `thm-countable-lindenbaum-henkin-completion`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In classical ZF, given an explicit injection of a set signature $L$ into $\omega$ and a consistent $L$-sentence theory $T$, there is a countable constant expansion $L_\infty$ and a consistent, deductively closed, syntactically complete Henkin sentence theory $H\supseteq T$ in it. A seed constant is included. Countability here means an injection into $\omega$; no effective decision algorithm is asserted.

Source read: Moschovakis, Lemma 1I.4 and both sublemmas, printed pp40–41; explicit two-round-index witness-axiom adaptation. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `lem-countable-henkin-syntax-coding`, `lem-fresh-henkin-axiom-preserves-consistency`, `lem-consistent-sentence-decision`, `lem-derivation-finite-support-and-concatenation`, `thm-recursion`, `lem-proof-fresh-constant-elimination`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `lem-complete-henkin-theory-truth-rules`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF let $H$ be a consistent, deductively closed, syntactically complete sentence theory in a language with a seed constant and all Henkin witness axioms. For sentences $\sigma,\tau$ and an existential sentence $\exists x\phi$,  $$\neg\sigma\in H\iff\sigma\notin H,\qquad \sigma\land\tau\in H\iff(\sigma\in H\text{ and }\tau\in H),$$ $$\exists x\phi\in H\iff\phi[t/x]\in H\text{ for some closed term }t.$$  No countability assumption on the language or $H$ is needed.

Source read: Moschovakis, Lemma 1I.3, printed pp39–40; witness-axiom formulation adapted. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-henkin-witness-extension`, `def-first-order-syntactic-consistency`, `lem-hilbert-propositional-and-equality-rules`, `lem-derivation-finite-support-and-concatenation`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `lem-henkin-term-equality-congruence`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF, let $H$ be a consistent deductively closed complete Henkin sentence theory with a seed constant. On its closed terms put $s\sim t$ iff $(s=t)\in H$. This is an equivalence relation. Every function symbol respects it, and every relation's atomic-sentence membership in $H$ is independent of representatives. More generally closed instances of any formula obtained by equal closed-term substitutions have the same membership in $H$ (and the corresponding implication is provable even if other free variables remain).

Source read: Moschovakis, Lemma 1I.5 Sublemmas 1–4, pp41–43; closed-term and full-formula congruence adaptation. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `lem-complete-henkin-theory-truth-rules`, `lem-hilbert-propositional-and-equality-rules`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `def-henkin-closed-term-model`

Completed draft argument/definition and individual contract. Claim and conventions: ## Definition  Let $H$ be a consistent, deductively closed, complete Henkin sentence theory in a set signature $L'$ with a seed constant $c_*$. Let $C$ be the set of closed $L'$-terms and $s\sim t$ mean $(s=t)\in H$. By [[lem-henkin-term-equality-congruence]], this is an equivalence relation and a congruence. The **closed-term model** $\mathcal M_H$ has carrier $C/{\sim}=\{[t]:t\in C\}$, where $[t]=\{s\in C:s\sim t\}$, and interpretations  $$c^{\mathcal M_H}=[c],\qquad f^{\mathcal M_H}([t_1],\ldots,[t_n])=[f(t_1,\ldots,t_n)],$$ $$R^{\mathcal M_H}([t_1],\ldots,[t_n])\iff R(t_1,\ldots,t_n)\in H.$$  The earlier congruence proves that these values and truth assignments do not depend on representatives. Each finite tuple of classes has a tuple of representatives by finite induction, so the function interpretation is total; its value is unique, and defining its graph does not select representatives for the entire carrier. All graphs and relations are sets by Separation and Replacement. The seed gives $[c_*]$ in the carrier, so it is nonempty. Equality is literal equality of classes, not an additional relation. Thus this is a structure in the sense of [[def-set-structures-and-variable-assignments]]. Its satisfaction of $H$ is a separate truth-lemma conclusion.

Source read: Moschovakis, Lemma 1I.5, printed pp41–43; quotient on closed terms instead of constants. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `lem-henkin-term-equality-congruence`, `def-set-structures-and-variable-assignments`. Proof provenance: not-applicable. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `thm-henkin-closed-term-truth-lemma`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF let $H$ be any consistent deductively closed complete Henkin theory with a seed, and $\mathcal M_H$ its term quotient. For a formula $\phi$, distinct variables $x_1,\ldots,x_n$ covering its free variables, closed terms $t_1,\ldots,t_n$, and an assignment $a$ with $a(x_i)=[t_i]$,  $$\mathcal M_H,a\models\phi\iff\phi[t_1/x_1,\ldots,t_n/x_n]\in H.$$  Substitution is simultaneous at original free occurrences. In particular $\mathcal M_H\models H$. Neither the size of $H$ nor choice of representatives for all classes is required.

Source read: Moschovakis, Lemma 1I.5, pp41–43; full local free-variable constructor induction for the closed-term quotient. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-henkin-closed-term-model`, `lem-complete-henkin-theory-truth-rules`, `lem-formula-substitution-satisfaction`, `thm-structural-recursion-on-set-coded-syntax`, `lem-henkin-term-equality-congruence`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `thm-countable-first-order-completeness`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In classical ZF, every consistent sentence theory in an explicitly countable set language has a nonempty model whose carrier injects into $\omega$. For every sentence $\sigma$ in that language,  $$T\models\sigma\iff T\vdash\sigma.$$

Source read: Moschovakis, Theorem 1I.1 pp38–39 and final proof p44; least-code countability supplied explicitly. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `thm-countable-lindenbaum-henkin-completion`, `thm-henkin-closed-term-truth-lemma`, `lem-consistent-sentence-decision`, `thm-set-language-first-order-soundness`, `lem-countable-henkin-syntax-coding`, `lem-satisfaction-coincidence`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `thm-countable-first-order-compactness`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In classical ZF, a sentence theory $T$ in an explicitly countable language has a model iff every finite subset has a model. A model with carrier injecting into $\omega$ can be obtained when it is satisfiable. Moreover, if $T\models\sigma$ for a sentence $\sigma$, some finite $T_0\subseteq T$ entails $\sigma$.

Source read: Moschovakis, Theorem 1J.1 p44; Weiss–D’Mello Theorem 1 and Exercise 6 p14 for finite entailment. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `thm-countable-first-order-completeness`, `lem-derivation-finite-support-and-concatenation`, `thm-set-language-first-order-soundness`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `thm-well-ordered-language-henkin-completeness`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZFC, if $\kappa$ is an infinite cardinal and a finite-arity set signature $L$ has size at most $\kappa$, every consistent $L$-sentence theory has a nonempty model of size at most $\kappa$. If every finite subset of a sentence theory has a model, it likewise has a model of size at most $\kappa$. This is an explicitly choice-assuming size theorem.

Source read: Moschovakis, Lemmas 1I.4–1I.5 pp40–43 and Remark 1J.6 p46; full local cardinal-length adaptation, not a proof credited to the remark. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `lem-fresh-henkin-axiom-preserves-consistency`, `lem-consistent-sentence-decision`, `lem-derivation-finite-support-and-concatenation`, `thm-henkin-closed-term-truth-lemma`, `thm-transfinite-recursion`, `thm-well-ordering-theorem`, `cor-cardinal-absorption`, `def-axiom-of-choice`, `lem-proof-fresh-constant-elimination`, `thm-set-language-first-order-soundness`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `thm-upward-lowenheim-skolem-with-choice`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZFC, let $M$ be an infinite structure for a set signature $L$. For every infinite cardinal $\kappa\ge\max(|M|,|L|)$, $M$ has an elementary extension of size exactly $\kappa$, with literal inclusion after transport. Consequently a countable-language theory with an infinite model has models in every infinite cardinality.

Source read: Weiss–D’Mello, Theorem 6 proof p21, Theorem 9(2) and Exercise 15 p25; full elementary-diagram extension argument supplied locally. (https://www.math.toronto.edu/weiss/model_theory.pdf). Dependencies: `lem-elementary-diagram-embedding`, `thm-well-ordered-language-henkin-completeness`, `thm-downward-lowenheim-skolem-with-parameters`, `def-axiom-of-choice`, `cor-cardinal-absorption`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `cor-arbitrarily-large-finite-models-give-infinite-model`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF, a sentence theory in an explicitly countable language with arbitrarily large finite models has an infinite model. “Arbitrarily large” means that for every natural number $m$ it has a finite model of size at least $m$.

Source read: Moschovakis, Corollary 1J.2 p44; Weiss–D’Mello, Theorem 2 pp14–15, constant-inequality proof. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `thm-countable-first-order-compactness`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `thm-nonstandard-natural-number-model-exists`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF there is an at most countable nonempty model $M$ of $\operatorname{Th}(\mathcal N)$ in the fixed language $(0,S,<)$ and an element $b\in M$ such that $M\models\overline n<b$ for every standard $n<\omega$. The reduct $M$ is not isomorphic to the standard structure $\mathcal N=(\omega,0,S,<)$.

Source read: Moschovakis, Theorem 1J.5 pp45–46; Weiss–D’Mello, Theorem 3 p15, greater-than-numerals variant. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-nonstandard-natural-number-structure`, `thm-countable-first-order-compactness`, `thm-countable-first-order-completeness`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `cor-countable-los-vaught-test`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZFC, let $T$ be a consistent sentence theory in an explicitly countable language. Assume every model of $T$ is infinite and any two models of $T$ of a fixed infinite cardinality $\kappa$ are isomorphic. Then $T$ is syntactically complete.

Source read: Weiss–D’Mello, Theorem 6 and full proof, printed pp20–21; syntactic completeness obtained through local countable completeness. (https://www.math.toronto.edu/weiss/model_theory.pdf). Dependencies: `thm-upward-lowenheim-skolem-with-choice`, `thm-downward-lowenheim-skolem-with-parameters`, `def-first-order-syntactic-consistency`, `thm-countable-first-order-completeness`, `def-axiom-of-choice`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `rem-first-order-choice-strength-boundary`

Completed draft argument/definition and individual contract. Claim and conventions: ## Choice boundary  The proofs of [[thm-countable-first-order-completeness]] and [[thm-countable-first-order-compactness]] are in classical ZF for a language supplied with an injection into $\omega$. Their decisions are definable tests of consistency, not computable tests; minimum syntax codes avoid any countable choice of enumerations or representatives.  The general size bounds in [[thm-downward-lowenheim-skolem-with-parameters]] and [[thm-upward-lowenheim-skolem-with-choice]] explicitly assume AC. Arbitrary witness hulls use a well-order to choose witnesses, and the stated general-language Henkin theorem retains its choice hypothesis. This records the assumptions actually used, without claiming their optimality.  Arbitrary-language compactness over ZF and its Boolean-prime-ideal comparison are assigned to the later Boolean-algebras/Stone-duality page. No version of that comparison is asserted or used as a prerequisite here. In particular no result from the recorded Set Theory Beyond Choice catalogue supplies the present proofs.

Source read: Moschovakis, Remark 1J.6 p46 compared with the complete constructions of Lemmas 1I.4–1I.5 pp40–43. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `thm-countable-first-order-completeness`, `thm-countable-first-order-compactness`, `thm-downward-lowenheim-skolem-with-parameters`, `thm-upward-lowenheim-skolem-with-choice`. Proof provenance: not-applicable. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `ex-first-order-sentence-deduction`

Completed draft argument/definition and individual contract. Claim and conventions: ## Example  In the signature with unary relations $P,Q$, write $A=\forall x(P(x)\to Q(x))$, $B=\forall xP(x)$ and $C=\forall xQ(x)$. From the two sentence assumptions $A,B$ derive $C$, and then discharge either assumption.

Source read: Moschovakis, axioms and rules §§1H.1–1H.2 pp34–35 and Theorem 1H.8 p37; explicit local instance. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `thm-first-order-sentence-deduction`, `def-set-coded-formal-derivation`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `ex-seed-constant-for-empty-signature`

Completed draft argument/definition and individual contract. Claim and conventions: ## Example  In the empty nonlogical signature there are no closed terms. After adjoining constants $c_0,c_1,\ldots$ with seed $c_0$, there is a consistent complete deductively closed Henkin theory whose term quotient has exactly one element.

Source read: Moschovakis, Lemmas 1I.4–1I.5 pp40–43; singleton complete-theory example supplied locally. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-henkin-closed-term-model`, `thm-set-language-first-order-soundness`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `ex-nonstandard-element-above-every-numeral`

Completed draft argument/definition and individual contract. Claim and conventions: ## Example  In the constructed countable model of $\operatorname{Th}(\mathcal N)$, the new constant exceeds every numeral. Each finite list of these inequalities is realized in the standard structure, but their entire list has no standard realization.

Source read: Weiss–D’Mello, Theorem 3 p15; explicit finite-fragment calculation in the local (0,S,<) language. (https://www.math.toronto.edu/weiss/model_theory.pdf). Dependencies: `thm-nonstandard-natural-number-model-exists`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `fs-categorical-first-order-zf`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  **False conditional claim:** If the coded first-order theory $T_{\mathrm{ZF}}$ is syntactically consistent, it has a unique set model up to isomorphism.  The refutation is conditional in ZFC: assuming that consistency antecedent, there are nonisomorphic models of cardinalities $\aleph_0$ and $\aleph_1$. No assertion of $\operatorname{Con}(\mathrm{ZF})$ is made.

Source read: Moschovakis, Theorem 1J.3 and discussion pp44–45, Remark 1J.6 p46; Weiss–D’Mello Exercise 15 p25 with locally proved upward theorem. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-coded-first-order-zf-theory`, `lem-models-of-coded-zf-are-infinite`, `thm-countable-first-order-completeness`, `thm-upward-lowenheim-skolem-with-choice`, `def-axiom-of-choice`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `lem-derivation-finite-support-and-concatenation`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF, every derivation from a sentence theory uses finitely many assumptions. Weakening, concatenation and replacement of proved sentence premises by their proofs preserve derivability. The union of an inclusion-chain of consistent sentence theories in one fixed signature is consistent, including the empty chain.

Source read: Moschovakis, Lemma 1H.3 pp35–36 and Lemma 1H.12 p38; local all-three-rule and empty-chain arguments. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-set-coded-formal-derivation`, `thm-induction-principle`, `def-first-order-syntactic-consistency`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `lem-hilbert-propositional-and-equality-rules`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In the fixed calculus, Boolean identity, double negation, contraposition, conjunction introduction/elimination and explosion are derivable. Equality is symmetric and transitive and permits free-for formula substitution. Existential introduction, existential monotonicity, quantified double-negation replacement and fresh-variable quantifier renaming are derivable without completeness. Monotonicity means: from $T\vdash\phi\to\psi$ infer $T\vdash\exists x\phi\to\exists x\psi$. Renaming uses a variable $y$ absent from $\phi$.

Source read: Moschovakis, §§1H.5–1H.10 pp36–38; explicit local derivations for the adapted axiom schemes. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-set-coded-formal-derivation`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `thm-set-language-first-order-soundness`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF, for any set signature and sentence theory $T$, if $T\vdash\phi$, every nonempty set structure satisfying $T$ satisfies $\phi$ under every assignment. Consequently a theory with a model is consistent.

Source read: Moschovakis, Theorem 1H.4 p36; local semantic verification of all six axiom schemes and three rules. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-set-coded-formal-derivation`, `lem-formula-substitution-satisfaction`, `lem-satisfaction-coincidence`, `def-theories-models-and-semantic-consequence`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `lem-consistent-sentence-decision`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF, for a consistent sentence theory $T$ and sentence $\sigma$, at least one of $T\cup\{\sigma\}$ and $T\cup\{\neg\sigma\}$ is consistent. Moreover, for any sentence theory $T$,  $$T\cup\{\neg\sigma\}\text{ is inconsistent}\quad\Longleftrightarrow\quad T\vdash\sigma.$$

Source read: Moschovakis, Lemma 1H.12(3)–(4), printed p38; local deduction proof. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-first-order-syntactic-consistency`, `thm-first-order-sentence-deduction`, `lem-hilbert-propositional-and-equality-rules`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `lem-complete-henkin-theory-truth-rules`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF let $H$ be a consistent, deductively closed, syntactically complete sentence theory in a language with a seed constant and all Henkin witness axioms. For sentences $\sigma,\tau$ and an existential sentence $\exists x\phi$,  $$\neg\sigma\in H\iff\sigma\notin H,\qquad \sigma\land\tau\in H\iff(\sigma\in H\text{ and }\tau\in H),$$ $$\exists x\phi\in H\iff\phi[t/x]\in H\text{ for some closed term }t.$$  No countability assumption on the language or $H$ is needed.

Source read: Moschovakis, Lemma 1I.3, printed pp39–40; witness-axiom formulation adapted. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-henkin-witness-extension`, `def-first-order-syntactic-consistency`, `lem-hilbert-propositional-and-equality-rules`, `lem-derivation-finite-support-and-concatenation`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `lem-henkin-term-equality-congruence`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF, let $H$ be a consistent deductively closed complete Henkin sentence theory with a seed constant. On its closed terms put $s\sim t$ iff $(s=t)\in H$. This is an equivalence relation. Every function symbol respects it, and every relation's atomic-sentence membership in $H$ is independent of representatives. More generally closed instances of any formula obtained by equal closed-term substitutions have the same membership in $H$ (and the corresponding implication is provable even if other free variables remain).

Source read: Moschovakis, Lemma 1I.5 Sublemmas 1–4, pp41–43; closed-term and full-formula congruence adaptation. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `lem-complete-henkin-theory-truth-rules`, `lem-hilbert-propositional-and-equality-rules`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `thm-henkin-closed-term-truth-lemma`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF let $H$ be any consistent deductively closed complete Henkin theory with a seed, and $\mathcal M_H$ its term quotient. For a formula $\phi$, distinct variables $x_1,\ldots,x_n$ covering its free variables, closed terms $t_1,\ldots,t_n$, and an assignment $a$ with $a(x_i)=[t_i]$,  $$\mathcal M_H,a\models\phi\iff\phi[t_1/x_1,\ldots,t_n/x_n]\in H.$$  Substitution is simultaneous at original free occurrences. In particular $\mathcal M_H\models H$. Neither the size of $H$ nor choice of representatives for all classes is required.

Source read: Moschovakis, Lemma 1I.5, pp41–43; full local free-variable constructor induction for the closed-term quotient. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `def-henkin-closed-term-model`, `lem-complete-henkin-theory-truth-rules`, `lem-formula-substitution-satisfaction`, `thm-structural-recursion-on-set-coded-syntax`, `lem-henkin-term-equality-congruence`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `thm-countable-first-order-compactness`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In classical ZF, a sentence theory $T$ in an explicitly countable language has a model iff every finite subset has a model. A model with carrier injecting into $\omega$ can be obtained when it is satisfiable. Moreover, if $T\models\sigma$ for a sentence $\sigma$, some finite $T_0\subseteq T$ entails $\sigma$.

Source read: Moschovakis, Theorem 1J.1 p44; Weiss–D’Mello Theorem 1 and Exercise 6 p14 for finite entailment. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `thm-countable-first-order-completeness`, `lem-derivation-finite-support-and-concatenation`, `thm-set-language-first-order-soundness`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `ex-first-order-sentence-deduction`

Completed draft argument/definition and individual contract. Claim and conventions: ## Example  In the signature with unary relations $P,Q$, write $A=\forall x(P(x)\to Q(x))$, $B=\forall xP(x)$ and $C=\forall xQ(x)$. From the two sentence assumptions $A,B$ derive $C$, and then discharge either assumption.

Source read: Moschovakis, axioms and rules §§1H.1–1H.2 pp34–35 and Theorem 1H.8 p37; explicit local instance. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `thm-first-order-sentence-deduction`, `def-set-coded-formal-derivation`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

### Current recovery checkpoint: `lem-henkin-term-equality-congruence`

Completed draft argument/definition and individual contract. Claim and conventions: ## Statement  In ZF, let $H$ be a consistent deductively closed complete Henkin sentence theory with a seed constant. On its closed terms put $s\sim t$ iff $(s=t)\in H$. This is an equivalence relation. Every function symbol respects it, and every relation's atomic-sentence membership in $H$ is independent of representatives. More generally closed instances of any formula obtained by equal closed-term substitutions have the same membership in $H$ (and the corresponding implication is provable even if other free variables remain).

Source read: Moschovakis, Lemma 1I.5 Sublemmas 1–4, pp41–43; closed-term and full-formula congruence adaptation. (https://www.math.ucla.edu/~ynm/lectures/lnl.pdf). Dependencies: `lem-complete-henkin-theory-truth-rules`, `lem-hilbert-propositional-and-equality-rules`. Proof provenance: ai-altered. Each completed numbered step is mapped once with its actual text, inputs and exact local source passage. Boundary evidence is item-specific. No open gap identified in this item; independent review remains required. Checks pending the full-batch run below. Next action: complete the remaining assigned logic items and rerun required checks.

## Author-check repair reconciliation — 36355561a549

The assigned report `phase-2-wave-1-author-check-14.json` reported eight
canonical-precheck repairs and three unanchored boundary entries. During this
repair dispatch the current shared batch files acquired those repairs; this
worker did not overwrite them with the older report's proposed text. In
particular the current function-congruence proof retains its more precise
right-to-left replacement order. The report remains intact as historical
check evidence. No detector defect was reproduced: the current boundary
entries explicitly name the remark's statement, which the checker accepts.

The following affected items now pass precheck directly, without auto-repair:

- `lem-derivation-finite-support-and-concatenation`: empty-chain argument is step 3.1.
- `lem-hilbert-propositional-and-equality-rules`: universal renaming is step 1.2, equality step 2.1, existential monotonicity step 2.2, existential renaming step 3.1.
- `thm-set-language-first-order-soundness`: existential elimination is step 3.1 and the conclusion step 4.1.
- `lem-consistent-sentence-decision`: consistent decision is step 2.1.
- `lem-complete-henkin-theory-truth-rules`: existential membership equivalence is step 2.1.
- `lem-henkin-term-equality-congruence`: substitution is step 2.1, relation/formula invariance step 3.1, function congruence step 4.1; the latter replaces entries in decreasing index order.
- `thm-henkin-closed-term-truth-lemma`: existential reverse implication is step 4.1 and induction closure step 5.1.
- `thm-countable-first-order-compactness`: finite entailment support is step 2.1.

`rem-first-order-choice-strength-boundary` has explicit statement anchors for
empty, degenerate and nonempty-choice evidence. The prior item checkpoints
and current contracts retain the exact claims, conventions, source locators
and dependencies; this reconciliation adds no mathematical claim or source
receipt. No dependency edit was needed, so the consumer-batch dependency
input is unchanged. No promised item or page was removed.

Focused checks rerun against the current files: explicit 90-item precheck
selection, 62 proof-bearing items checked, zero failures; strict proof-contract,
90/90 checked, zero errors or warnings; rendercheck on the 90 items and four
owned page paths, all 94 clean; content-policy on the owned batch manifest,
90 scoped items, zero errors or warnings. These are structural checks, not
independent mathematical review. All findings in the assigned report are
resolved on current disk. Next action: the build driver may rerun its author
validation and produce the pre-Step-6 hash artifact; this author did not
change workflow state or independent reviews.

### Final current completion record — author-recover-14-1

**Completed content.** All 90 assigned IDs remain stable and have substantive draft content. The 25 previously missing items were authored during this recovery; the 65 existing drafts were retained. All four page inventories exactly match the current plan: 35 A + 6 B logic items and 42 A + 7 B tree items. The logic introductions now describe the actual completed proof route. The complete ID census follows, rather than relying on file existence as evidence of an argument.

- Page `deduction-soundness-completeness-and-compactness` at `library/foundations/deduction-soundness-completeness-and-compactness.md`:
  `def-set-coded-formal-derivation`, `def-first-order-syntactic-consistency`, `lem-derivation-finite-support-and-concatenation`, `lem-hilbert-propositional-and-equality-rules`, `thm-first-order-sentence-deduction`, `thm-set-language-first-order-soundness`, `lem-proof-fresh-constant-elimination`, `lem-consistent-sentence-decision`, `def-henkin-witness-extension`, `lem-fresh-henkin-axiom-preserves-consistency`, `lem-countable-henkin-syntax-coding`, `thm-countable-lindenbaum-henkin-completion`, `lem-complete-henkin-theory-truth-rules`, `lem-henkin-term-equality-congruence`, `def-henkin-closed-term-model`, `thm-henkin-closed-term-truth-lemma`, `thm-countable-first-order-completeness`, `thm-countable-first-order-compactness`, `def-elementary-set-structure-embedding`, `thm-tarski-vaught-set-structure-test`, `def-skolem-witness-hull`, `lem-skolem-hull-size-and-elementarity`, `thm-downward-lowenheim-skolem-with-parameters`, `thm-elementary-ordinal-chain-union`, `thm-well-ordered-language-henkin-completeness`, `def-elementary-diagram-of-set-structure`, `lem-elementary-diagram-embedding`, `thm-upward-lowenheim-skolem-with-choice`, `cor-arbitrarily-large-finite-models-give-infinite-model`, `def-nonstandard-natural-number-structure`, `thm-nonstandard-natural-number-model-exists`, `cor-countable-los-vaught-test`, `def-coded-first-order-zf-theory`, `lem-models-of-coded-zf-are-infinite`, `rem-first-order-choice-strength-boundary`.

- Page `deduction-soundness-completeness-and-compactness-examples` at `library/foundations/deduction-soundness-completeness-and-compactness-examples.md`:
  `ex-first-order-sentence-deduction`, `cex-generalization-after-open-assumption`, `ex-seed-constant-for-empty-signature`, `cex-isomorphic-inclusion-need-not-be-elementary`, `ex-nonstandard-element-above-every-numeral`, `fs-categorical-first-order-zf`.

- Page `set-theoretic-trees-delta-systems-and-diamond` at `library/foundations/set-theoretic-trees-delta-systems-and-diamond.md`:
  `def-set-theoretic-tree-and-levels`, `lem-tree-predecessors-and-common-extensions`, `def-kappa-tree-and-tree-property`, `def-normal-splitting-set-theoretic-tree`, `lem-normal-set-theoretic-tree-sequence-representation`, `def-aronszajn-suslin-and-special-tree`, `thm-konig-finite-level-tree`, `lem-countable-normal-tree-cofinal-branch`, `lem-splitting-cofinal-branch-gives-antichain`, `lem-bounded-rational-tree-limit-extension`, `thm-special-aronszajn-tree-construction`, `def-finite-delta-system`, `thm-regular-uncountable-finite-delta-system`, `cor-indexed-omega-one-delta-system`, `def-poset-ccc-and-knaster-property`, `def-finite-support-poset-product`, `lem-finite-knaster-poset-products`, `thm-finite-support-knaster-poset-products`, `lem-cocountable-ultrafilter-on-uncountable-set`, `lem-aronszajn-finite-petals-incomparability`, `def-finite-aronszajn-specialization-poset`, `thm-aronszajn-specialization-poset-ccc`, `lem-specialization-dense-domains-and-union`, `def-diamond-on-omega-one`, `prop-diamond-implies-continuum-hypothesis`, `def-ostaszewski-club-principle`, `prop-diamond-implies-ostaszewski-club`, `def-jensen-square-sequence`, `lem-countable-tree-antichain-sealing`, `lem-club-tree-coding-antichain-reflection`, `thm-diamond-constructs-normal-suslin-tree`, `thm-splitting-suslin-tree-poset-square-not-ccc`, `def-suslin-line-order-interface`, `rem-kurepa-suslin-line-tree-interface`, `def-partition-arrow-notation`, `thm-infinite-ramsey-finite-colors`, `def-finite-beth-iteration-above-a-cardinal`, `lem-erdos-rado-pattern-closure-and-end-homogeneity`, `thm-general-cardinal-erdos-rado`, `rem-ramsey-and-erdos-rado-orientation`, `def-pruned-tree-products-and-dense-matrices`, `rem-halpern-lauchli-finite-tree-statement`.

- Page `set-theoretic-trees-delta-systems-and-diamond-examples` at `library/foundations/set-theoretic-trees-delta-systems-and-diamond-examples.md`:
  `ex-binary-tree-and-konig-branch`, `cex-countable-levels-do-not-suffice-for-konig`, `ex-uncountable-delta-system-with-one-point-root`, `cex-infinite-sets-delta-system-hypothesis`, `ex-finite-specialization-compatibility`, `ex-diamond-suslin-ccc-square`, `fs-every-omega-one-tree-has-a-cofinal-branch`.

**Evidence and checks actually run.** Each newly written item has its exact completed claim, hypotheses, conventions, source locator, step inputs, exact cited local source passages, and eight boundary dispositions in its individual contract and checkpoint above. The canonical numbering repairs were adopted in the item text, step maps, citation uses and boundary references together. The preserved earlier 65 contracts were not replaced by templates.

| Command | Actual result |
| --- | --- |
| `node tools/tsx-run.mjs tools/precheck.mts` followed by all 90 explicit manifest item paths | Initial exit 1, eight canonical-layout repairs. After adopting repairs: exit 0, 62 proof-bearing items checked, zero failures. |
| `node tools/validate-plan.mjs` | Exit 2: CLI usage; this tool requires a plan filename. |
| `node tools/validate-plan.mjs research/plan-spec.json` | Exit 0: no page-order/item cycles, forward-reference, B-page dependency or unresolved-ID failure among 930 pages with item lists. The global advisory that 685 pages lack item lists remains outside this batch. |
| `node tools/content-policy.mjs research/phase-2-wave-1-batch-14.pages.json` | Exit 0: 90 scoped items, zero errors and warnings. |
| `node tools/proof-contract.mjs research/phase-2-wave-1-batch-14.proof-contracts.json --strict` | Initial exit 1 for three unanchored remark boundary references, then exit 0 after anchoring them: 90/90 checked, zero errors and warnings. |
| `node tools/rendercheck.mjs` with the explicit 90 items and four page paths, `--quiet` | Exit 0: all 94 files pass real KaTeX and renderer-YAML parsing and delimiter checks. |
| `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1` | Exit 0 after dependency changes; refreshed and deduplicated. |

**Provenance and sources.** All statement provenance is retained as source-derived/adapted `ai-altered`; no statement was made AI-generated or used as a generated dependency target. The newly supplied proofs of sentence deduction, fresh-constant elimination and consistent sentence decision are tagged `ai-generated`: Moschovakis states these results but assigns their proofs as exercises. Other new proof adaptations are `ai-altered`; new definitions and the assumption-ledger remark have `not-applicable`. The general-cardinality proof is explicitly a local transfinite adaptation, not attributed as a proof in Moschovakis's Remark 1J.6. The online author-hosted Moschovakis and Weiss–D'Mello PDFs were checked, and complete relevant source passages read in bounded chunks: Moschovakis §§1H–1J pp34–46, Weiss–D'Mello Theorem 6 pp20–21 and Theorem 9/Exercise 15 p25, plus the actual local supplier statements and proofs used above. Exact locators accompany each item. No new recorded result, source drop or later-result dependency was introduced. The two retained recorded tree-orientation remarks keep their prior later proof destinations.

**Dependencies and scope.** The repaired calculus uses all three rules. The countable construction remains in ZF with explicit alphabet codes; the general size theorem and its consumers declare `def-axiom-of-choice` and identify the use. Extra declarations expose direct local uses of the calculus, coding, coincidence, congruence, pure constant expansion, soundness and cardinal absorption. An explicit scan against all other current same-run manifests found zero cross-batch supplier edges; the owned input remains `[]`. Existing published suppliers are not same-frontier edges. The manifest/page ID lists and page requirements match the current plan. No plan, workflow state, published supplier, other batch, judge stamp or independent review was edited.

**Remaining obligations.** No unresolved mathematical or scope gap is identified in the completed authoring. No narrowing or removal is proposed for Alpha. Independent mathematical review remains necessary and is not claimed by these structural passes. The retained Kurepa/Suslin-line and Halpern–Läuchli recorded orientation results still have their already assigned later proof destinations; neither is used to support a local proof. The former primitive-existential blocker is resolved by the repaired definition and the full new rule cases, rather than by an assumed quantified rewrite.

Final post-provenance/page-edit checks: content policy again passed (90 items, zero errors/warnings); strict contracts again passed (90/90, zero errors/warnings); rendercheck again passed all 94 files. Removed trailing whitespace introduced in checkpoint paragraphs; the final owned-file scan is clean. These metadata and page edits did not change the already passing proof text.

## Stage-5 gate batch 3 amendment — `lem-elementary-diagram-embedding`

The current item, batch manifest, canonical plan row, and owning proof contract
now use the same ZF literal-inclusion argument. For
$C=\{(M,b):b\in B\setminus e[M]\}$, the Kuratowski definition gives
$M\in\{M\}\in(M,b)$; if $(M,b)\in M$, this is the forbidden three-cycle from
`thm-foundation-excludes-membership-cycles`. Hence `C` is disjoint from `M`,
and `thm-the-characterising-property-of-ordered-pairs` makes
$b\mapsto(M,b)$ injective. This supports the bijection used to transport the
structure and needs no rank supplier, no Choice, and no later page. Exact local
suppliers: `items/def-ordered-pair.md`,
`items/thm-the-characterising-property-of-ordered-pairs.md`, and
`items/thm-foundation-excludes-membership-cycles.md`. The external source for
the elementary-diagram claim remains Weiss-D'Mello, *Fundamentals of Model
Theory*, Theorem 9(2), Exercises 13-14, printed p.25,
<https://www.math.toronto.edu/weiss/model_theory.pdf>; the transport is the
complete local proof, not an attributed exercise solution.

This repairs the `validate-plan:undeclared-prereq` finding without adding the
later `well-founded-relations-rank-and-the-cumulative-hierarchy` page, and it
repairs all eight `proof-contract` diagnostics in
`research/phase-2-wave-1-5-author-gate-batch-3.json`: F7-F9 now cite the three
actual suppliers, and `claim-1.3` lists F7, F8, and F9. The earlier checkpoint
above that lists `def-membership-rank-of-a-set` and
`prop-ranks-of-ordinals-and-hierarchy-stages` is historical and superseded by
this amendment. The owned same-frontier input remains `[]`: all three new
suppliers are published items, not other batches in this run.

The frozen Step-6a reader and refuter are preserved. The reader recorded no
finding, and the refuter opened this item without flagging it, at item hash
`60e0c7bbc44b2433a10308d0c753388f2b176051fabafcd455292076d6b925af`.
The current item hash is
`a47906c9008f28269260bfcb69abd775aae99d3125e22fd98728fcd4561d2e3b`;
the contract hash changed from
`43a2eca370570198ee2440be0b42622e6c6745c5f5285353dd5080bad45398c0`
to `721274e65545f61166bd1db504d7775c129fcc7ef6fb6c148f4b6b0c5e8b0b7d`;
and the item-manifest hash changed from
`a1db18d0d2193583f143af7b25c896cb15e477f4945bb6b854011b1258370456`
to `95a6de3cc260af17d8c89cb0a917afae97194331703192a6d63f51804b39ab61`.
Therefore 6b must make an amended decision for this post-6a change. Repair
confidence is 1.

Focused current checks: `validate-plan` exits 0; strict `proof-contract` on
this item reports 0 errors and 0 warnings, 1/1 checked; direct `precheck`
passes; `rendercheck` passes the item and owning page; manifest-only
`content-policy` reports 90 scoped items with no errors or warnings;
`coverage-checklist` reports 2 pages and 117 harvested results with no errors
or warnings; and `depcheck` exits 0. The frontier dependency ledger refresh
also exits 0, with the batch-14 input still `[]`. The evidence-captured
`fwdcheck` error was exact and initially reproduced: the published consumer
`cor-holomorphic-functional-calculus-in-the-wiener-algebra` placed its
load-bearing L3 supplier `thm-global-cauchy-integral-formula-homology` in
`forward_refs`, although the supplier page (#288.07813) precedes the consumer
page (#288.1401). Neither carrier belongs to this dispatch, so no in-scope
workaround or edit was made. During this task the authorised published-content
owner independently moved that supplier to `deps` and recorded the repair in
`research/published-consumer-supplier-ledger.md`. The current run-level
`fwdcheck` exits 0 with no remaining error.

## Step-8 FA completion — group b, position 1

`thm-special-aronszajn-tree-construction` independently repaired and recorded through `tools/step8-terminal-resolution.mjs` with disposition `repaired`, source status `verified`, and final guard hash `047be343612e2d1593b46126e0112ae8560bdb96fb3b98e4a860926910067023`. The successor invariant now applies only where the successor level exists; fixed AC choice on eligible level-code sets supplies the functional recursion. The ZFC normal splitting special Aronszajn conclusion and all ten dependency IDs are unchanged. Exact independent mathematical argument, source URL/locator (Karagila, https://karagila.org/files/set-theory-2017.pdf, printed p43, Section 9.1), contract corrections, and dependency inventory are in `research/phase-2-wave-1-step8-fa-b-1-thm-special-aronszajn-tree-construction.md`. Focused precheck, rendercheck, strict contract check and dependency check passed; owning batch-14 frontier input remains `[]` and was atomically refreshed. Recorder accepted the sole queue item. No unresolved item obligation or new lemma remains; next action is engine-managed run closure. No third judge call or pass stamp was created.
