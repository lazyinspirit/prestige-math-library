# Frontier 8 final repair — DC propagation

## Scope

Only `thm-nowhere-differentiable-functions-are-dense-in-c01` was repaired.

## Defect and correction

The prior title and Statement asserted density in $C([0,1],\mathbb R)$ without
the Axiom of Dependent Choice, while Fact L5 invoked
`thm-baire-category-for-complete-metric-spaces`, whose corrected public
Statement is conditional on DC.

- **Old public claim:** continuous nowhere differentiable functions are dense in
  $C([0,1],\mathbb R)$.
- **New public claim:** under the Axiom of Dependent Choice ($\mathrm{DC}$),
  continuous nowhere differentiable functions are dense in
  $C([0,1],\mathbb R)$.

The title, Statement, Given clause, and L5 now all state the same DC condition.
The mathematical conclusion and every numbered proof step are unchanged.

## Contract alignment

The Batch 3 and merged proof-contract source quote for L5 were mechanically
updated to include the opening DC hypothesis of the current Baire theorem
Statement. No dependency edge changed.

## Validation

Focused validation passed after the edit:

- `precheck.mts`: 1 checked, 0 failing.
- `rendercheck.mjs`: 1 file, no delimiter or KaTeX parse error.
- `proof-contract.mjs --strict`: 0 errors, 0 warnings, 190/190 items checked.
