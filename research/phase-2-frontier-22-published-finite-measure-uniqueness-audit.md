# Frontier-22 published finite-measure uniqueness audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 | Disposition |
|---|---|---|
| `def-pi-system` | `e38cd210f9f7b90a7eac5b66524d67053667ffa3565048a1925cb6ab0d5c0252` | clear |
| `prop-measure-of-a-set-difference` | `fc93a834e6bfc7b920114066fd2ab43e7b2902d0a17f81edfb321e0bb25e2ea8` | U-P to clear |
| `thm-continuity-from-below-for-measures` | `a5c45da8ee1da34efc2b3dde786d5f4fbb6352e4a80507a41b36391eec29b92e` | U-P to clear |
| `lem-finite-measure-uniqueness-on-a-pi-system` | `ba07e1fe722f8cc0d866a386a3e340a3954c1f44b60038a1ebe761a72152a3a0` | U-P to clear |

All four complete targets and the exact uniqueness clause used by the current
product-measure pullback draft were read. Before disposition, every exact ID,
alias field, non-unital pi-system convention, finite difference, increasing
union, Dynkin class and total-mass mechanism was searched across the whole
ledger. The last three items each had one U-P row. The pi-system definition was
unclassified. Each moves or enters exactly once.

## Findings

The pi-system definition coherently requires a nonempty family closed under
binary intersections and explicitly does not require the whole ambient space.
This is why the uniqueness lemma separately assumes equality of total masses.

For measurable `A subset B` with finite `mu(A)`, disjoint additivity gives the
displayed difference formula. If `mu(B)` is finite, real cancellation is valid;
if it is infinite, the other summand must be infinite. No undefined extended
subtraction is formed.

Continuity from below disjointifies an increasing sequence into successive
differences. If one finite-stage measure is infinite, both sides are immediately
infinite; otherwise the finite partial sums telescope and their supremum is the
nonnegative extended series. The now-cleared extended-real completeness lemma
supplies the displayed supremum.

For finite measures `mu,nu`, the equality class contains the whole space and
the generating pi-system. Finite set-difference cancellation and continuity
from below make it a lambda-system, so the already-cleared pi-lambda theorem
gives equality on the generated sigma-algebra. The proof correctly keeps the
whole-space hypothesis separate from the pi-system convention.

Classification: one new bounded clear and three U-P-to-clear moves. No choice,
repair, new supplier or Phase-2 pair is needed.

## Current frontier impact

`lem-lc-random-coordinate-product-measure-pullback` uses exactly the final
finite-measure uniqueness clause after checking the generating cylinder family
and total mass. That published interface is adequate; no current frontier
blocker arises from this branch.

## Limits

This pass is bounded to the four targets and the exact finite-measure uniqueness
path. It does not audit the Kolmogorov extension theorem or the draft pullback
argument. No published or draft item was edited, no external source was newly
consulted, and no independent judgment or exhaustive discovery claim is made.
