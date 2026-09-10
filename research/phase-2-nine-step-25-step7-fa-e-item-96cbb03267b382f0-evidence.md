# Final adjudication: infinite compact-group product

Run: `phase-2-nine-step-25`. Group: `e`. Queue position: 1 of 1 in
`research/phase-2-nine-step-25-step7-fa-e-item-96cbb03267b382f0.json`.
Item: `ex-haar-measure-on-an-infinite-product-of-compact-groups`.
Decision: **accepted-after-review**. Source status: **familiar**.

## Scope and evidence inspected

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the exact queue,
the complete current item, and both pages
`library/representation-theory/haar-measure-existence-and-uniqueness.md` and
`library/representation-theory/haar-measure-existence-and-uniqueness-examples.md`.
Read the item's entry in `research/phase-2-nine-step-25-batch-10.pages.json`,
its complete contract (citations, derivations, boundaries, risk review) in
`research/phase-2-nine-step-25-batch-10.proof-contracts.json`, the relevant Haar
coverage entries in `research/phase-2-nine-step-25-batch-10.coverage.json`, and
the Haar convention in `research/phase-2-nine-step-25-alpha-e-step7-context.json`.
Coverage's old scaffold-status labels are not mathematical certifications.

Opened all seven declared dependency files in `items/`:
`cor-normalized-haar-probability-on-a-compact-group`, `thm-tychonoff`,
`thm-rmk-uniqueness-among-radon-measures`, `def-radon-measure-on-an-lch-space`,
`thm-product-universal-property`, `thm-compactness-under-continuous-maps`,
and `def-axiom-of-choice`. Also opened the complete
`def-left-haar-integral-and-left-haar-measure` and
`cor-existence-of-left-and-right-haar-measures` to check the exact meaning and
construction of the supplier's Haar measure.

Reviewed the two item rows in `research/phase-2-nine-step-25-judge.jsonl`, the
initial row in `research/phase-2-nine-step-25-judge-adjudications.jsonl`, Sol's
item-specific account in `research/phase-2-nine-step-25-alpha-step7-e.md`, and
`research/phase-2-nine-step-25-step7-item-ex-haar-measure-on-an-infinite-product-of-compact-groups-closure.json`.
The initial rejection, context
`2699f5df7e86fffd2d0fdd82ebdfa4410f7c99e2f70ab3b16f7e69ac44c45bfe`,
objected to attributing Tychonoff and Haar existence to the definition of AC.
Sol correctly replaced that assertion by assumption A1, retaining the exact
theorem citations F1 and F2 at step 1.1.
The final rejection, context
`86402a7a61e9799cb5308cb3cab0ed4df64591d092aff01e66a90e8b164db170`,
claims F1 supplies a Haar probability without Radon regularity.

## Independent mathematical basis

That final objection is false under the fixed local definition. The Definition
section of `items/def-left-haar-integral-and-left-haar-measure.md` defines a
left Haar measure to be a nonzero invariant Borel measure finite on compact
sets, outer regular on Borel sets, and inner regular on opens, explicitly
identifying these conditions with `def-radon-measure-on-an-lch-space`.
Thus the Statement of `cor-normalized-haar-probability-on-a-compact-group`
already supplies a Radon measure by its use of this defined term. No added
theorem or strengthened supplier is necessary. Its proof step 1.1 divides a
Haar measure by a positive finite scalar, which preserves all three regularity
conditions. Its existence supplier explicitly constructs a Radon measure in
step 2.1. This agrees with the A-page summary and the contract's full-Borel
Radon convention.

I independently checked the remaining argument:

1. The identity tuple establishes nonemptiness without a choice selection.
   Coordinatewise operations are continuous and coordinate separation proves
   Hausdorffness. Tychonoff under the stated AC gives compactness, hence local
   compactness. F1 applies both to this product and its finite subproducts.
   The section filling omitted coordinates with identities is continuous and
   a right inverse of the finite projection.
2. On compact G with total mass one, outer approximation of the complement
   of a Borel B produces a closed, hence compact, subset K of B with
   measure arbitrarily close to the measure of B. For the projection
   pushforward, compact K inside the inverse image of E has compact image
   inside E. That image is closed in the Hausdorff finite product and hence
   Borel, and its inverse image contains K. This proves compact inner
   approximation for every Borel E. Complementation in the finite compact
   target gives outer regularity; finite total mass gives finiteness on
   compact sets. Lifting translations by the section proves left invariance,
   so normalized Haar uniqueness identifies the marginal.
3. Continuity of h provides basic cylinders of oscillation less than epsilon
   at every point; compactness gives a finite cover. With F the union of their
   finite coordinate supports, x and the identity-filled section of its
   F-projection lie in the same selected cylinder containing x. Consequently
   h composed with that section and projection approximates h uniformly.
   Equal finite marginals give equal integrals of this cylinder function.
   The error in the two probability integrals is at most twice epsilon.
   On compact G every continuous real function has compact support, so F3
   applies and identifies the two measures on all Borel sets. No equality
   of cylinder and full Borel sigma algebras is used.
4. Translation invariance on the finite group C2^F gives equal singleton
   masses summing to one, hence mass 2^(-|F|). Projection gives the asserted
   cylinder formula. The empty-coordinate cylinder means the unrestricted
   cylinder and has mass one; the empty set has mass zero. Empty I gives
   the singleton group. All contract boundary cases are consistent.

These are familiar compactness, measure-regularity, pushforward and uniform
approximation arguments. I have no unresolved mathematical uncertainty in
this item and did not require external verification. No external source was
consulted in this adjudication, and inherited source-reading receipts are not
claimed as my own reading. The decision rests on the exact local definitions
and the complete argument above, not on an unstated alternate Haar convention.

## Focused checks and disposition

- `node tools/tsx-run.mjs tools/precheck.mts items/ex-haar-measure-on-an-infinite-product-of-compact-groups.md`: exit 0; 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/ex-haar-measure-on-an-infinite-product-of-compact-groups.md`: exit 0; one file passed YAML and math rendering checks.
- `node tools/proof-contract.mjs research/phase-2-nine-step-25-batch-10.proof-contracts.json --strict --items ex-haar-measure-on-an-infinite-product-of-compact-groups`: exit 0; 0 errors, 0 warnings, 1/1 checked.
- Current `itemHashGuard`: `c2704c0b34cd5d32c93ad74f0f23adba7fb0c95e510b116fb79802be723645ec`, matching Sol's post-repair guard.
- Current `itemHashJudge`: `b6224d62093b4d6da9821f11f2242f16e12b890136a13678d45bd1fe05687038`, matching the final rejection.

No item, dependency, page, manifest or contract was edited. No missing
dependency was found. The consumer-batch ledger instructions in
`briefs/tasks/frontier-dependency-ledger.md` were read; no dependency repair or
edge change occurred, so no owning input row requires alteration or refresh.
No new lemma, prerequisite-repair licence, third judgment or pass stamp is
appropriate. This is an independent terminal resolution, not a judge verdict
or whole dependency-closure certification. There are no unresolved obligations
for this queued item. Next action: record this acceptance using the exact
authorized terminal recorder; the owning Alpha may then resume.
