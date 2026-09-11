# Frontier-22 published density and null-integral propagation audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 | Prior disposition | Current disposition |
|---|---|---|---|
| `def-integral-over-a-measurable-set` | `44cb41869f5d6264dd35356dfc9dd39e16160ce3fc5549171e5061693762aa86` | U-P | A-P |
| `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure` | `06deb902fd37f4c946fb72f926107cb0a95c74764a6d0caee87b469548b22c05` | clear | A-P |
| `def-measure-with-density` | `e5ac92f139ecd887b6830e814407e1e896e6710fe4390028c5a957fee8f25697` | unclassified | A-P |
| `cor-finite-nonnegative-integral-implies-finite-almost-everywhere` | `b7fe11d69fd69cc5f44c84c01dfdd669c51776ef6b9493736f6a5b494546f1f0` | unclassified | A-P |
| `cor-integral-over-a-null-set-vanishes` | `0f20569a638757dd147b9116e9285b616dd1c1f2234dbf5bb841fe9c9bea0e34` | unclassified | A-P |

The five complete targets and their exact uses in the current published
Lebesgue-decomposition proof were read. Each exact ID, alias field, measurable
restriction, density-measure construction, finite-almost-everywhere threshold,
null-integral simple minorants, zero-complement mechanism and supplier ID was
searched across the whole ledger before classification. The measurable-set
integral had one U-P row and the indefinite-integral theorem one clear row; both
move. The other three IDs were new to the index. No duplicate is introduced.

## Exact propagation and repair

`def-integral-over-a-measurable-set` defines the restricted integral through
the now-A-P nonnegative-integral definition. Indicator multiplication is
measurable and handles the pointwise zero-times-infinity value explicitly in
its own supplier, but the resulting integral still uses the incomplete
arbitrary simple-representation foundation.

`thm-indefinite-integral-of-a-nonnegative-function-is-a-measure` applies
monotone convergence to finite unions and nonnegative additivity to the finite
partial sums. Both exact suppliers are now A-P for the same foundation gap. Its
countable-additivity proof is otherwise sound.

`def-measure-with-density` names that indefinite-integral theorem as the
well-definedness proof that its displayed set function is a measure. The
affected clause is therefore load-bearing.

`cor-finite-nonnegative-integral-implies-finite-almost-everywhere` uses positive
integer multiples of the infinite-value indicator and the now-A-P
zero-integral criterion. Its threshold contradiction is sound and never uses
zero-scalar homogeneity, but the underlying simple-integral foundation remains
load-bearing.

`cor-integral-over-a-null-set-vanishes` takes the supremum of the arbitrary
simple minorants of a null-supported function and uses the now-A-P simple
indefinite-measure theorem. Its displayed null-support proof is sound after the
same finite zero-complement refinement.

Install that refinement upstream or inline the restricted simple-function
calculation in each target. Every repair is finite and choice-free, and no new
supplier or Phase-2 pair is needed.

## Current frontier impact

The current published Lebesgue-decomposition proof invokes the density measure
and both corollaries in its finite-density, null-normalization and annular
assembly. The active Solovay-density draft then invokes Lebesgue decomposition
through RN. The finite probability-space path uses no problematic zero scalar;
one local zero-complement foundation proof restores every exact clause. Until
that bypass or the published repair is present, this remains a Step-5
prerequisite issue rather than a false draft theorem.

## Limits

This pass is bounded to the five targets and their exact current path. It does
not classify every consumer of restricted integrals or density measures. No
published or draft item was edited, no external source was newly consulted,
and no independent judgment or exhaustive discovery claim is made.
