# Step-6a independent reader report — batch 14

Run: `phase-2-wave-1`  
Reader: `reader-14`  
Date: 2026-09-08

## Scope opened

Read the current batch manifest, proof-contract file, notes, current Alpha-b
recheck, author-check receipt, all four assigned page files, and all 90 current
assigned item files. The page inventory is:

| Page | Kind | Items opened | Reader result |
| --- | --- | ---: | --- |
| `deduction-soundness-completeness-and-compactness` | A | 35 | no reader-found mathematical defect after the repair below |
| `deduction-soundness-completeness-and-compactness-examples` | B | 6 | no reader-found defect |
| `set-theoretic-trees-delta-systems-and-diamond` | A | 42 | no reader-found mathematical defect |
| `set-theoretic-trees-delta-systems-and-diamond-examples` | B | 7 | no reader-found defect |

The opened A-page logic/model-theory inventory was
`def-set-coded-formal-derivation`, `def-first-order-syntactic-consistency`,
`lem-derivation-finite-support-and-concatenation`,
`lem-hilbert-propositional-and-equality-rules`,
`thm-first-order-sentence-deduction`,
`thm-set-language-first-order-soundness`,
`lem-proof-fresh-constant-elimination`, `lem-consistent-sentence-decision`,
`def-henkin-witness-extension`,
`lem-fresh-henkin-axiom-preserves-consistency`,
`lem-countable-henkin-syntax-coding`,
`thm-countable-lindenbaum-henkin-completion`,
`lem-complete-henkin-theory-truth-rules`,
`lem-henkin-term-equality-congruence`, `def-henkin-closed-term-model`,
`thm-henkin-closed-term-truth-lemma`,
`thm-countable-first-order-completeness`,
`thm-countable-first-order-compactness`,
`def-elementary-set-structure-embedding`,
`thm-tarski-vaught-set-structure-test`, `def-skolem-witness-hull`,
`lem-skolem-hull-size-and-elementarity`,
`thm-downward-lowenheim-skolem-with-parameters`,
`thm-elementary-ordinal-chain-union`,
`thm-well-ordered-language-henkin-completeness`,
`def-elementary-diagram-of-set-structure`,
`lem-elementary-diagram-embedding`,
`thm-upward-lowenheim-skolem-with-choice`,
`cor-arbitrarily-large-finite-models-give-infinite-model`,
`def-nonstandard-natural-number-structure`,
`thm-nonstandard-natural-number-model-exists`,
`cor-countable-los-vaught-test`, `def-coded-first-order-zf-theory`,
`lem-models-of-coded-zf-are-infinite`, and
`rem-first-order-choice-strength-boundary`.

The logic B-page inventory was `ex-first-order-sentence-deduction`,
`cex-generalization-after-open-assumption`,
`ex-seed-constant-for-empty-signature`,
`cex-isomorphic-inclusion-need-not-be-elementary`,
`ex-nonstandard-element-above-every-numeral`, and
`fs-categorical-first-order-zf`.

The tree/set-theory A-page inventory was
`def-set-theoretic-tree-and-levels`,
`lem-tree-predecessors-and-common-extensions`,
`def-kappa-tree-and-tree-property`,
`def-normal-splitting-set-theoretic-tree`,
`lem-normal-set-theoretic-tree-sequence-representation`,
`def-aronszajn-suslin-and-special-tree`, `thm-konig-finite-level-tree`,
`lem-countable-normal-tree-cofinal-branch`,
`lem-splitting-cofinal-branch-gives-antichain`,
`lem-bounded-rational-tree-limit-extension`,
`thm-special-aronszajn-tree-construction`, `def-finite-delta-system`,
`thm-regular-uncountable-finite-delta-system`,
`cor-indexed-omega-one-delta-system`, `def-poset-ccc-and-knaster-property`,
`def-finite-support-poset-product`, `lem-finite-knaster-poset-products`,
`thm-finite-support-knaster-poset-products`,
`lem-cocountable-ultrafilter-on-uncountable-set`,
`lem-aronszajn-finite-petals-incomparability`,
`def-finite-aronszajn-specialization-poset`,
`thm-aronszajn-specialization-poset-ccc`,
`lem-specialization-dense-domains-and-union`, `def-diamond-on-omega-one`,
`prop-diamond-implies-continuum-hypothesis`,
`def-ostaszewski-club-principle`,
`prop-diamond-implies-ostaszewski-club`, `def-jensen-square-sequence`,
`lem-countable-tree-antichain-sealing`,
`lem-club-tree-coding-antichain-reflection`,
`thm-diamond-constructs-normal-suslin-tree`,
`thm-splitting-suslin-tree-poset-square-not-ccc`,
`def-suslin-line-order-interface`, `rem-kurepa-suslin-line-tree-interface`,
`def-partition-arrow-notation`, `thm-infinite-ramsey-finite-colors`,
`def-finite-beth-iteration-above-a-cardinal`,
`lem-erdos-rado-pattern-closure-and-end-homogeneity`,
`thm-general-cardinal-erdos-rado`,
`rem-ramsey-and-erdos-rado-orientation`,
`def-pruned-tree-products-and-dense-matrices`, and
`rem-halpern-lauchli-finite-tree-statement`.

The tree/set-theory B-page inventory was `ex-binary-tree-and-konig-branch`,
`cex-countable-levels-do-not-suffice-for-konig`,
`ex-uncountable-delta-system-with-one-point-root`,
`cex-infinite-sets-delta-system-hypothesis`,
`ex-finite-specialization-compatibility`, `ex-diamond-suslin-ccc-square`, and
`fs-every-omega-one-tree-has-a-cofinal-branch`.

I also opened the 67 distinct immediate published dependency interfaces named
by the manifest, including syntax/satisfaction, countability/cardinality,
club/filter, tree, recursion, and Choice interfaces. In particular, the
quantifier rules retain the published primitive-existential syntax; the
countable proofs retain their ZF route; and well-ordering, ultrafilters,
Skolem hull sizes, arbitrary-language Henkin completion, and the tree/cardinal
constructions state their ZFC uses. No assigned dependency path reaches the
recorded `deferred-set-theory-beyond-choice` catalogue.

## Mathematical review

- The specified derivation calculus now includes free-for existential
  introduction and restricted existential elimination. The finite-support,
  deduction, soundness, fresh-constant, Henkin, quotient, truth-lemma and
  compactness steps preserve the relevant sentence/fresh-variable conditions.
- The tree proofs preserve the strict-order height convention, normality versus
  splitting distinction, countable-limit construction, and explicit ZFC uses.
  The diamond construction is conditional; the recorded Kurepa and
  Halpern–Läuchli statements are not proof suppliers.
- The Erdős–Rado argument retains the relative-beth convention and its
  zero-arity base case. The closure lemma does not assume that its selected
  sequence is increasing in the ambient ordinal.
- The page summaries match the current conclusions and do not overstate the
  conditional diamond, Choice, or recorded-result boundaries.

## Repair made

Repaired `items/lem-models-of-coded-zf-are-infinite.md`, proof step 3.1.
The displayed finite-bijection map had been corrupted from `$M\\to n$` to
`$M<TAB>o n$`, and the endpoint sentence read `bound1`. It now reads
`$M\\to n$` and `bound $1$`. The corresponding `claim-3.1` and `one` boundary
receipt in `research/phase-2-wave-1-batch-14.proof-contracts.json` were
updated. This is a local presentation/type-setting repair; it changes no
claim, dependency, or proof strategy. There was no stale `verification.judge`
record on this in-flight item to remove.

## Checks

- Reflow of the repaired item: unchanged (already canonical).
- Focused precheck of the repaired item: pass.
- Full explicit 90-item batch precheck: 62 proof-bearing items checked, 0
  failing (definitions/remarks are not proof-bearing precheck targets).
- Strict proof contract: 90/90 checked, 0 errors, 0 warnings.
- Batch content policy: 90 scoped items, 0 errors, 0 warnings.
- `validate-plan`: pass.

`depcheck --quiet` was also run after the focused review. It reports two
unrelated repository-wide YAML-escape errors and a large legacy-warning set;
neither file is in batch 14 and none was edited.

## Findings and blockers

There are no remaining uneditable findings for batch 14. No blocker prevents
the Step-6a reader handoff. This report is a reader audit, not a judge stamp or
publication decision.
