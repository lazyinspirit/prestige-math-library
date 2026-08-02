# Frontier 8 final distance-family Beta repair

## Scope

Only `items/ex-distance-functions-form-a-compact-family-in-c01.md` and its
single record in `research/frontier-8-proof-contracts.json` were changed. The
dedicated `pre-final-distance-repair` touch snapshot was already present, so no
additional snapshot was taken.

## Source evidence

The cited published dependency
[`thm-metric-compactness-equivalences`](../items/thm-metric-compactness-equivalences.md)
states: “Assume the Axiom of Countable Choice
([[def-countable-choice]]) and the Axiom of Dependent Choice
([[def-dependent-choice]]).” It then includes the equivalence of compactness and
sequential compactness for metric spaces. The distance-family example invoked
that implication in Step 3.1 without carrying these hypotheses.

## Exact correction

- Added Countable Choice and Dependent Choice to the title, Statement, and
  Given context; added the two axiom definitions to `deps`.
- Restated Fact L2 with both named assumptions, faithfully matching the cited
  theorem's scope.
- Retagged the materially narrowed statement from `literature-derived` to
  `ai-altered`; its already `ai-altered` proof tag is unchanged.
- In the merged proof contract, added `given` to Step 3.1's inputs and changed
  the `nonempty-choice` boundary evidence to the explicit Statement, Given,
  L2, and Step 3.1 scope chain.

The proof steps and their mathematical argument were not changed.

## Scoped validation

- `reflow.mts`: unchanged.
- `precheck.mts items/ex-distance-functions-form-a-compact-family-in-c01.md`:
  pass.
- `proof-contract.mjs research/frontier-8-proof-contracts.json --strict --items
  ex-distance-functions-form-a-compact-family-in-c01 --json`: pass, with the
  explicit `given` input and choice-scope boundary evidence verified.
