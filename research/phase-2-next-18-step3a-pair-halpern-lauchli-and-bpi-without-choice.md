# Step 3a scope review — Halpern–Läuchli and BPI without Choice

Run: `phase-2-next-18`  
Role: `alpha`  
Pair: `halpern-lauchli-and-bpi-without-choice` /
`halpern-lauchli-and-bpi-without-choice-examples`  
Review type: scope only; no item or proof approvals

## Scope decision

**Sufficient.** The 13-item A page and five-item B page adequately cover the
pair's intended subject and library role. No merger or scaffold enrichment is
recommended.

## Evidence

- The A page contains the complete designed finite-tree spine: finitistic-tree,
  full-product, level-product, density and matrix conventions; the finite word
  calculus; endpoint rearrangement; rule soundness and density-preserving
  thinning; the dense-matrix dichotomy; and the finite truncation/terminal-level
  partition theorem. It then covers finite partial prime-ideal diagrams and
  extension, the countable compactness tree, `BPI <-> UFL` over ZF, composition
  with the preceding basic-Cohen-model theorem, formal relative consistency,
  and both conditional strict-placement directions over ZF.
- The B page exercises both halves of the A page: it distinguishes full and
  level products, exhibits the common-height cone repair, prints the dimension-2
  word rearrangement, computes the compactness tree for the finite–cofinite
  algebra, and corrects the claim that BPI well-orders every set. These are
  representative examples rather than duplicate theorem statements.
- The original prose assigned the Cohen-model automorphism/support analysis to
  SET-21. The binding replacement cut and current plan instead put its complete
  continuity, supported-maximal-ideal, primeness, semantic-model and formal
  consistency chain on the earlier
  `boolean-prime-ideal-theorem-in-the-basic-cohen-model` page. The present
  scaffold depends on those exact items and does not pretend that the local
  Halpern–Läuchli proof supplies symmetric-name analysis. The other live edge,
  to `symmetric-collapse-and-ultrafilter-free-models`, supplies only the formal
  no-free-ultrafilter-on-omega direction needed to show that BPI is not a ZF
  theorem. The stronger source-blocked all-sets Blass result is not needed.
- I read the complete eight-page Halpern–Läuchli paper, *A partition theorem*,
  Trans. AMS 124 (1966), 360–367. Its definitions, Theorems 1–2, Corollaries
  1–2, word rules, rearrangement lemma, semantic rule proof and complement-case
  argument are all represented by the planned local items. I also read the
  complete four-page Repický paper, *A proof of the independence of the Axiom
  of Choice from the Boolean Prime Ideal Theorem*, CMUC 56 (2015), 543–546.
  Its continuity and finite Boolean-expansion proof are represented on the
  preceding BPI page and consumed here through explicit dependencies. The
  coverage entry records both complete readings and gives every harvested
  result an included, inline or reasoned out-of-scope disposition.
- I did not recover and independently read the complete 1971 Halpern–Lévy
  paper. That does not leave an authored argument uncovered in the current
  scope: this scaffold proves the finite combinatorics from the 1966 primary
  paper and obtains BPI-without-AC through the complete Repický route. If an
  author later adds the original Halpern–Lévy deduction itself, the prose's
  mandatory full-primary-text gate must be reopened before that addition.
- The pair supplies proved destinations for the mathematical clauses of
  `rem-halpern-lauchli-finite-tree-statement` and
  `rem-halpern-levy-bpi-not-ac`, while correctly flagging the latter remark's
  obsolete claim that full Halpern–Läuchli is logically required. It also gives
  the planned later SET-22 page a clean weak-choice comparison prerequisite.
  No item or page dependency reaches `deferred-set-theory-beyond-choice` or a
  Recorded result.

There is a plan-history conflict, but not a mathematical scope omission:
`research/plan-set-theory-completion-track.md` section 7.9 calls the old SET-21
root planned-only Phase-3 cleanup, whereas the current `plan-spec.json`, scope
ledger and this explicit dispatch select it for the active Phase-2 run. This
review follows the current selected scope and does not purport to amend or
resolve that prose/spec timing conflict. No current Step-3a owner decision
exists for this A page.

## Checks

- Batch-8 `manifest-deps`: 46 items, 0 errors.
- Batch-8 `coverage-checklist`: 2 A pages, 59 harvested results, 0 errors or
  warnings; this pair has three fetch-verified source records.
- Batch-8 `source-fetch-check`: 5/5 source records fetch-verified and resolved.
- Whole-run `content-policy --manifest-only`: 533 scoped items, 0 errors or
  warnings. The expected batch-only check reports the ten unpublished Batch-7
  suppliers as absent; whole-run mode resolves all ten.
- Both page-level dependencies and all ten item-level current-run dependencies
  are present in the cross-batch ledger as open solely because the ready
  suppliers are not yet published.

This decision concerns scope only. It does not approve any statement, proof,
dependency proof, item, source interpretation beyond the stated coverage, or
owner transition.
