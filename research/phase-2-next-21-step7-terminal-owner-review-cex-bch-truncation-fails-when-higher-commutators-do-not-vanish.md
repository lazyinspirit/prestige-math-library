# Step-7 terminal owner-review draft: `cex-bch-truncation-fails-when-higher-commutators-do-not-vanish`

**Status:** DRAFT — mathematical owner review only; no judge verdict or terminal disposition recorded.

**Current Terra context SHA-256:** `03c05d8d3fd91633fd6c47e4e5644bbaee8dec3140f14468f034dbe266bcef02`  
**Rejected-item SHA-256 (historical):** `368c07ef2359dd88a001106a9f214c489c1b762f0e2a620b97be46cc177d50e4`  
**Proposed disposition:** `repair-required`

## Mathematical review

The concrete counterexample is correct: X²=E02, [X,Y]=E13, [X,[X,Y]]=E03, and direct multiplication gives the E03 coefficients 1/2 in exp(X)exp(Y) and 5/12 in exp(Z0). Since E03 commutes with every strictly upper triangular 4-by-4 matrix and E03²=0, exp(Z0+E03/12)=exp(Z0)(I+E03/12)=exp(X)exp(Y); this also proves the claimed exact logarithm. But F3 as written attributes degree-three coefficients to the current BCH theorem's Statement, which only provides a local convergent series, and Step 1.1 never places the fixed (X,Y) inside its neighbourhood W. These are actual unsupported proof assertions, even though the witness survives.

## Repair disposition

Delete the F3/Step 1.1 appeal or replace it with the displayed finite nilpotent matrix calculation of the exact logarithm. If retaining BCH, scale to (tX,tY)∈W and derive the polynomial identity before t=1; cite a source that actually states the coefficients. Synchronize Facts and the proof contract.

## Implemented repair — draft owner evidence

**Repaired item SHA-256:** `6f41a877da6c04c6ca61a002c1012dae2099d9d278b25621460c0338f3bfa1eb`  
**State:** local repair implemented; terminal owner decision and judge verdict still pending.

Removed the local BCH theorem dependency and the unsupported F3 coefficient assertion. Refutation Step 1.4 now compares the exact E03 coefficients and proves the exact logarithm by the central square-zero E03 correction and the finite nilpotent log polynomial. The fixed X,Y need not lie in any local BCH neighbourhood. Batch 7 manifest uses the current 0-based matrix units and current dependencies; its contract quotes only actual suppliers and maps the new 1.4 step.
