# frontier-25 — Step 8 closure recovery, group c, rejudge round 1

## Summary

Handled all eight exact current rejection tuples owned by group c: three
`confirmed_fatal`, five `confirmed_nonfatal`, and zero `false_positive`. Only
the three fatal items were edited. No published item or other group's content
was changed, and no cross-group alert was needed.

## Exact outcomes

| item | context_sha256 | outcome | disposition |
|---|---|---|---|
| `ex-a-lax-monoidal-functor-that-is-not-strong` | `7770029f7b82643e5d18b26377317cc84a83aafe955dfd2fb1f237954caf08a2` | `confirmed_nonfatal` | `[L2]` abbreviates the definition too aggressively, but step 2.1 directly checks the associativity and both unit equations. The mathematical construction remains correct; no edit. |
| `fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad` | `19b7507d1785637bd43261ad66e7602f13c46abd9d73a90abe3377781c39bd58` | `confirmed_fatal` | The purported large-category counterexample never established that `Set` is large. Added the published largeness result as `[L3]` and used it at step 2.1. |
| `fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms` | `e78fad9f3e2f9a2510d162456ceb81385e34989c13dd13dddeda01df42589430` | `confirmed_fatal` | The refutation asserted that a non-strong lax functor exists without a witness. It now constructs the covariant power-set lax structure inline and exhibits a diagonal subset outside the binary structure map's image. |
| `fs-the-unit-constraints-must-be-imposed-as-axioms` | `c659fc4a1ae220fe0cc3cf0b72848181bef9a878e96e2eb98ead0231d0bb9dca` | `confirmed_fatal` | `[L1]` and `[L2]` falsely said that whole unitors were determined by the associator. They now quote exactly the two tensor-product unitor identities proved by their sources. |
| `prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category` | `eb551fc59e6b94c7ddb65c69a489b3f6c20c02b57595266d438596d4e6507044` | `confirmed_nonfatal` | The missing component formula is the immediate meaning of null-homotopy already used on the page; the claim and witness are correct. No edit. |
| `thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split` | `bfa18b5d2cfa9da197d19871bcbc9897fa2d91883c3c33e5cc3ef73584e87a2f` | `confirmed_nonfatal` | Step 1.1 explicitly produces the compatible cycle decomposition, and the contraction is the immediate dual of the displayed split criterion. The objection is a local citation bridge, not a false theorem or construction. No edit. |
| `thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense` | `8197784ebd65384d5f96c123a2853df7c9aa3abc168f56494c51a720923ec81f` | `confirmed_nonfatal` | `Set`'s finite products and cartesian monoidal structure are established earlier on the same page; the missing explicit citation is local and the specialization is correct. No edit. |
| `thm-monoidal-functors-compose-and-laxness-is-preserved` | `9e79a587078f4f8806f165c423df52582c31db570a2f34ab9d7e377b770e87b6` | `confirmed_nonfatal` | Naturality of the composite binary structure map follows immediately by composing the natural transformations `G_2` and `G(F_2)`. The claim is correct and the gap is a routine one-line verification. No edit. |

## Fatal licensing and defect rows

- `fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad`:
  guard hash `dc5d36e07a3553f905f37702545670f0bccbef99a3521ccec1be7162ff4404d0`;
  defect row `frontier-25-c-step8-r1-001`.
- `fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms`:
  guard hash `7f02beddb124ce9ffbe33cf218f5fe9e8621e1a07c66350dbcd2d6ffa9ec87eb`;
  defect row `frontier-25-c-step8-r1-002`.
- `fs-the-unit-constraints-must-be-imposed-as-axioms`:
  guard hash `aba5ffa42234e5e52009dc21ee824406442c4e67c96bcdc662e1763e26cc1f8f`;
  defect row `frontier-25-c-step8-r1-003`.

All eight exact outcomes were appended to
`research/frontier-25-judge-adjudications.jsonl`. The three fatal rows were
appended through `tools/defect-ledger.mjs append` from
`research/frontier-25-alpha-c-step8-rejudge-round-1-ledger-rows.json`, which
also refreshed the generated ledger view.

## Rejudge targets

`fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad`,
`fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms`, and
`fs-the-unit-constraints-must-be-imposed-as-axioms`.

The engine owns whether the durable cycle budget permits another targeted
judgment or requires terminal resolution; this dispatch did not initiate a
judge cycle.

## Changed files

- The three repaired item files named above.
- `research/frontier-25-batch-6.proof-contracts.json`, regenerated for the
  three repaired entries.
- `research/frontier-25-proof-contracts.json`, mechanically re-merged from all
  eleven batch contracts.
- `research/frontier-25-judge-adjudications.jsonl`.
- `research/frontier-25-alpha-c-step8-rejudge-round-1-ledger-rows.json`.
- `research/defect-ledger.jsonl` and generated `research/DEFECT-LEDGER.md` via
  the prescribed append interface.
- This closure-recovery report.

## Checks

- Targeted precheck: all three repaired refutations pass in stored phase form.
- Targeted render check: all three repaired files pass YAML, delimiter, and
  KaTeX validation.
- Targeted strict proof contract: 3/3 checked, 0 errors, 0 warnings.
- Batch-6 citation fidelity: 78 citations, no missing quote and no widening
  candidate.
- Forward-reference check passes after the final repair uses no generated
  statement as a dependency.
- Dependency check exits successfully; it reports only existing advisory
  warnings.
- Exact recovery accounting: 8/8 outcomes present, with 3 fatal, 5 nonfatal,
  and 3/3 fatal rows linked to exactly matching defect evidence.
- Step-8 scope check: 4 groups and 381 items scoped, with zero open rejection
  and zero unresolved cross-group alert in the rendered partition.
- Frontier-25 defect-ledger schema validation: 238 rows checked, 0 errors.

## Cross-group alerts and sources

None. No web search was needed; the eight decisions were resolved from the
current items and their exact cited library dependencies.

## Blocker

Group c has no unadjudicated current tuple. The run-wide Step-8 guard remains
red because two group-d items are edited without fatal licences:
`def-deterministic-pda` has no adjudication at all for its changed baseline
state, and `lem-dpdas-have-unique-computations` has only nonfatal outcomes.
The guard reports 109 of 111 current item changes licensed. Group c does not
own either item and made no change to them.
