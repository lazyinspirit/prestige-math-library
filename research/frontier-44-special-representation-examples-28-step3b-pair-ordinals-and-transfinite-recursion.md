# Step 3b — pair `ordinals-and-transfinite-recursion` (batch 4)

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-ordinals-and-transfinite-recursion-ef5de0f8038f5305`.
Owned A page: `ordinals-and-transfinite-recursion` (22 published items, frozen by
the owner direction), B page: `ordinals-and-transfinite-recursion-examples`
(12 newly commissioned items). Batch 4 contains only this pair, so the shared
batch files hold no sibling rows.

## Entry checkpoint

Owned item IDs and open obligations at entry (2026-10-10):

- A page (published, preserved; audit + ordinary item decisions owed):
  `def-well-order`, `def-initial-segment`, `def-order-isomorphism`,
  `def-ordinal`, `thm-well-ordering-implies-ac`, `lem-ordinal-basics`,
  `thm-transfinite-induction`, `thm-well-ordering-theorem`,
  `cor-ac-iff-well-ordering`, `lem-ordinal-trichotomy`, `lem-well-order-rigid`,
  `thm-transfinite-recursion`, `def-limit-ordinal`,
  `fs-transfinite-induction-needs-choice`, `lem-well-order-comparability`,
  `thm-burali-forti`, `thm-mostowski-collapse`, `fs-ordinals-form-a-set`,
  `lem-omega-least-limit-ordinal`, `thm-hartogs`, `def-cardinal`,
  `rem-choice-ledger`.
- B page (to author fully; files do not exist yet):
  `cex-the-lexicographic-order-on-integer-pairs-is-not-a-well-order`,
  `ex-an-explicit-well-ordering-of-the-integers`,
  `cex-the-shift-is-a-nonidentity-order-automorphism`,
  `ex-lexicographic-orders-on-products-of-naturals`,
  `ex-the-one-point-extension-of-a-well-order`,
  `ex-the-mostowski-collapse-of-a-finite-chain`,
  `cex-the-collapsing-recursion-has-no-solution-on-the-integers`,
  `ex-the-finite-von-neumann-ordinals-and-the-limit-ordinal-omega`,
  `cex-a-set-of-ordinals-that-is-not-transitive`,
  `ex-the-hartogs-number-of-a-finite-set`,
  `ex-the-hartogs-number-of-the-naturals-is-a-limit-ordinal`,
  `cex-transfinite-induction-fails-when-the-minimum-is-exempted`.

Open obligations: author the 12 B items and the B page; audit the 22 published A
items in place (no reauthoring); write
`research/frontier-44-special-representation-examples-28-batch-4.proof-contracts.json`
(strict) for the 34-item batch; run the batch gates; record 34 item decisions;
refresh the cross-batch dependency input where proof uses have reconciled.

Checks and results are appended below as each item is completed.

## Checkpoint — authored B items

Each new item is written in dispatch dependency order and checked with
explicit-path `precheck`, `rendercheck` and `proof-layout` before the next item
is started. Source locators are the ones recorded by the Step-1 scaffold
(Marks, *Set Theory*, §§3–9; Moore, *MATH 6870*, §§3–8); the mathematics was
re-derived from the published library items cited in each Facts block.

| # | item | claim (short) | checks |
|---|---|---|---|
| 1 | `cex-the-lexicographic-order-on-integer-pairs-is-not-a-well-order` | lex order on ℤ×ℤ is total but the column {0}×ℤ has no least element | precheck pass; rendercheck OK; proof-layout 10 steps 0 defects |
| 2 | `ex-an-explicit-well-ordering-of-the-integers` | 0≺1≺−1≺2≺−2≺⋯ is a well-order of ℤ; least-absolute-value computation, initial segments, usual order not a well-order | precheck pass; rendercheck OK; proof-layout 10 steps 0 defects |
| 3 | `cex-the-shift-is-a-nonidentity-order-automorphism` | x↦x+1 is a nonidentity order isomorphism of (ℤ,<); x↦x−1 is strictly increasing with x−1<x, so totality does not suffice for rigidity claims (a),(c) | precheck pass; rendercheck OK; proof-layout 7 steps 0 defects |
| 4 | `ex-lexicographic-orders-on-products-of-naturals` | ℕ×ℕ and {0,1}×ℕ are well ordered, W_{<(1,0)}={0}×ℕ with n↦(0,n) an isomorphism, and the collapse gives F(0,n)=n, F(1,0)=ω | precheck pass (canonical numbering adopted); rendercheck OK; proof-layout 11 steps 0 defects |
| 5 | `ex-the-one-point-extension-of-a-well-order` | V∪{∞} is a well-order with V≅W_{<∞}; for V=ω the extension is equinumerous with but not isomorphic to ω, and its order type is ω⁺ | precheck pass; rendercheck OK; proof-layout 13 steps 0 defects |
| 6 | `ex-the-mostowski-collapse-of-a-finite-chain` | the 4-chain collapses to 0,1,2,3, so its order type is 4, and any solution of the recursion equals the collapse | precheck pass (canonical numbering adopted); rendercheck OK; proof-layout 6 steps 0 defects |
| 7 | `cex-the-collapsing-recursion-has-no-solution-on-the-integers` | F(a)={F(b):b<a} has no solution on (ℤ,<): the descending values form a set that Foundation forbids | precheck pass (canonical numbering adopted); rendercheck OK; proof-layout 8 steps 0 defects |
| 8 | `ex-the-finite-von-neumann-ordinals-and-the-limit-ordinal-omega` | 0,1,2,3 are ordinals with k={ξ:ξ<k}; ω is an ordinal, a limit, ω=⋃ω, and the least limit ordinal | precheck pass; rendercheck OK; proof-layout 4 steps 0 defects |
| 9 | `cex-a-set-of-ordinals-that-is-not-transitive` | {0,1,ω} is well ordered by ∈ but 2∈ω∈A while 2∉A, so it is not an ordinal | precheck pass (canonical numbering adopted); rendercheck OK; proof-layout 7 steps 0 defects |
| 10 | `ex-the-hartogs-number-of-a-finite-set` | ℵ(A)=n⁺ for A≈n, by identifying the order types of well-orders of subsets of A with the ordinals at most n | precheck pass; rendercheck OK; proof-layout 6 steps 0 defects |
| 11 | `ex-the-hartogs-number-of-the-naturals-is-a-limit-ordinal` | ℵ(ω) is the set of at most countable ordinals, an uncountable limit ordinal above ω | precheck pass; rendercheck OK; proof-layout 8 steps 0 defects |
| 12 | `cex-transfinite-induction-fails-when-the-minimum-is-exempted` | on ω the hypothesis checked only at a≠0 holds for S=ω\{0} while S≠ω, refuting the restricted induction form | precheck pass (canonical numbering adopted); rendercheck OK; proof-layout 6 steps 0 defects |

Dependency additions recorded for the manifest rows: both ℤ items cite
`lem-nat-embeds-int`,
`thm-omega-is-peano-system`, `thm-int-comm-ring` and `def-int-operations` for the
integer order/ring facts, and `ex-an-explicit-well-ordering-of-the-integers`
cites `def-int-abs` (with `lem-int-abs-properties`) in place of the scaffold's
`def-abs-value`, which is stated for ordered fields and does not apply to ℤ; it
also cites `def-nat-order`, `thm-nat-linear-order` and
`def-axiom-schema-of-separation`.

## Dependency reconciliation and manifest sync

Item `deps` are authoritative and the batch-4 manifest rows mirror them
(`manifest-deps: 34 item(s), 0 normalized, 0 error(s)`). Repairs recorded in the
item receipts. Diff against the Step-1 scaffold `dependencies` rows (per item):
`cex-a-set-of-ordinals-that-is-not-transitive` +`def-limit-ordinal`;
`ex-lexicographic-orders-on-products-of-naturals` +`def-axiom-schema-of-separation`,
`def-nat-order`, `lem-nat-order-is-membership`, `thm-the-characterising-property-of-ordered-pairs`;
`ex-the-one-point-extension-of-a-well-order` +`def-injection-surjection-bijection`,
`def-ordinal`, `lem-nat-order-is-membership`;
`cex-the-lexicographic-order-on-integer-pairs-is-not-a-well-order` +`def-int-operations`,
`def-natural-numbers`, `lem-nat-embeds-int`, `thm-omega-is-peano-system`;
`ex-an-explicit-well-ordering-of-the-integers` +`def-axiom-schema-of-separation`,
`def-int-abs`, `def-int-operations`, `def-nat-order`, `lem-nat-embeds-int`,
`thm-int-comm-ring`, `thm-nat-linear-order`, `thm-omega-is-peano-system`,
−`def-abs-value` (ordered-field only, inapplicable to ℤ);
`cex-the-shift-is-a-nonidentity-order-automorphism` +`def-int-operations`,
`lem-nat-embeds-int`, `thm-int-comm-ring`, `thm-omega-is-peano-system`;
`cex-the-collapsing-recursion-has-no-solution-on-the-integers` +`def-int-operations`,
`lem-nat-order-is-membership`, `thm-int-comm-ring`;
`ex-the-hartogs-number-of-a-finite-set` +`def-injection-surjection-bijection`,
`def-order-isomorphism`, `def-well-order`, `lem-omega-least-limit-ordinal`;
`ex-the-hartogs-number-of-the-naturals-is-a-limit-ordinal` +`def-injection-surjection-bijection`,
`def-order-isomorphism`, `def-well-order`, `thm-mostowski-collapse`,
−`lem-nat-nonzero-is-successor`, `lem-ordinal-trichotomy`;
`cex-transfinite-induction-fails-when-the-minimum-is-exempted` +`def-nat-order`,
`thm-nat-linear-order`, `thm-well-ordering-principle`,
−`lem-omega-least-limit-ordinal` (unused; recomputed level 3). The remaining
items (`ex-the-finite-von-neumann-...`, `ex-the-mostowski-collapse-...`) kept
their scaffold dependencies unchanged; the ℤ items also dropped applied-iota
notation. All 12 new items carry their computed
`dependency_level` identically in item frontmatter and manifest row
(cross-checked: `def...` computed = manifest = frontmatter for every B item;
`node tools/item-dependency-levels.mjs check --run ...` reports 0 batch-4
errors). The published A items were not edited.

## Final checks (2026-10-10, explicit paths / batch scope)

- `precheck` on 34 explicit item paths: 27 checked, 0 failing — all clean.
- `rendercheck` on both page files: OK.
- `proof-layout` batched on all 12 changed item paths: 12 items, 96 steps, 0 defects.
- `content-policy` on the batch-4 manifest: 34 scoped items, 0 errors, 0 warnings.
- `proof-contract --strict` on the batch-4 contracts: 0 errors, 1 warning (34/34 items).
- `boundary-audit`: 272 rows over 1 file, 108 not_applicable; no template reuse, no contradicted dispositions.
- `citation-fidelity`: 207 citations over 34 authored items; no missing quote.
- `finite-smoke` on the batch-4 contracts: 0 errors, 1 live check
  (mostowski-finite-chain-collapse); `--self-test` passes.
- `gate-liveness --run ... --contracts ... --checklists ...`: finite-smoke live
  (1), proof-contract live (34), coverage-checklist live (97); `precheck` probe
  `unparsed` because the run-wide scope cannot assemble (388 sibling-batch item
  files do not exist yet) — an in-flight boundary, not a pair defect.
- `item-dependency-levels check --run ...`: 862 items / 100 pages, max level 47, no batch-4 errors.
- `coverage-checklist`: 2 pages, 97 harvested results, 0 errors, 1 advisory
  (`coverage-low-yield` on the A page, 4/69 scaffolded; declines are the
  scaffold's inline absorptions, to be confirmed by Alpha/Step 4).
- `prosecheck` on both pages: 0 errors, 0 warnings.
- `pathcheck` on the pair: 1 pathway file, 0 errors.
- `depcheck`/`fwdcheck` scoped to the 34 items: OK (page and prerequisite cycle
  checks pass; no forward or dependency defect).
- `extcheck` scoped: 34 items, 0 recorded-not-proved. `depsource`: 34/34 consumer
  coverage, 0 unresolved (252 deps to published pages, 0 to earlier planned pages).
- `manifest-integrity --run ...`: 100/100 pages, no scope drift.
- `validate-plan research/plan-spec.json --run ...`: exit 1 with 4 run-level
  errors, none on this pair; plan orders 348/349 carry 22/12 items, matching the
  current manifests. The errors are owned elsewhere: two on
  `kashiwara-operators-and-crystal-lattices` (`b-leaf`, `undeclared-prereq`) and
  one each on `character-polynomials-fi-modules-and-representation-stability`
  and `projective-functors-and-the-soergel-functor-in-category-o`
  (`undeclared-prereq`). No pre-splice plan mismatch for this pair.
- `step3-decisions check --phase final` and `--phase scope`: zero open rows for
  either page or for any of the 34 items. Receipts: 24 accept, 10 repaired
  (6 `["dependency"]`, 4 `["dependency","notation"]`), 0 escalate.
- `proof-contract-coverage --run ... --contracts ...` cannot assemble its
  run-wide scope yet (first missing sibling item
  `def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum`); the batch-4
  contract by itself checks 34/34 items with 0 errors.

## Handoff

Completed: all 22 published A items audited in place and accepted with ordinary
current item decisions; all 12 B items fully authored, checked and accepted
(2 accepted as new, 10 repaired and recorded); the B page
`library/foundations/ordinals-and-transfinite-recursion-examples.md` written
(draft, 12 items in `examples:`, `requires: [ordinals-and-transfinite-recursion]`,
no `items:` rows); batch-4 manifest rows synced to item `deps` including
`dependency_level`; proof contracts (34/34, strict) and the coverage file
updated; the cross-batch dependency input refreshed with 16 edges to
`countability-and-uncountability` (2 page + 14 item rows, all `open`);
finite-smoke registry extended with `mostowski-finite-chain-collapse` and a
contract obligation on `ex-the-mostowski-collapse-of-a-finite-chain`.

Suppliers added by repairs (union over the 12 B items): `def-axiom-schema-of-separation`,
`def-injection-surjection-bijection`, `def-int-abs`, `def-int-operations`,
`def-limit-ordinal`, `def-nat-order`, `def-natural-numbers`,
`def-order-isomorphism`, `def-ordinal`, `def-well-order`, `lem-nat-embeds-int`,
`lem-nat-order-is-membership`, `lem-omega-least-limit-ordinal`, `thm-int-comm-ring`,
`thm-mostowski-collapse`, `thm-nat-linear-order`, `thm-omega-is-peano-system`,
`thm-the-characterising-property-of-ordered-pairs`, `thm-well-ordering-principle`;
removed: `def-abs-value` (inapplicable), `lem-nat-nonzero-is-successor`,
`lem-ordinal-trichotomy`, and one relocation of `lem-omega-least-limit-ordinal`.
No supplier is unfinished and no decision is escalated.

Published concerns (for the owner; not repaired under this scope):

1. `thm-mostowski-collapse` (published A item) trips the strict-contract
   `shotgun-bracket` warning: step 2.1 cites 4 of 7 declared facts while two
   other steps cite none. Evidence: `node tools/proof-contract.mjs research/frontier-44-special-representation-examples-28-batch-4.proof-contracts.json --strict`
   → 1 warning. Formatting-level suspicion, not a mathematical defect; owner
   decides any published amendment.

Open obligations: the 16 cross-batch rows stay `open` (Step 5 verification of
the `countability-and-uncountability` supplier interfaces, not authoring work);
the B page remains `status: draft` for the Step-4 splice; independent audit and
systematic defect repair are Steps 5–7. No blocker, no unrecoverable source
uncertainty, and no cross-group change was required.
