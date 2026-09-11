# Frontier-22 published total-variation consumer audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 | Disposition |
|---|---|---|
| `thm-total-variation-is-a-measure` | `e98f27e36fbfce27dcacbbb80c9b2046d6370183df4a811f48bf7629f9db8dcb` | existing A-P, unchanged |
| `def-simple-integral-against-a-signed-or-complex-measure` | `6331961f557ef0fde938a10f708bd64808e9dc114b1d2db312a5360c0b49940b` | clear |
| `prop-simple-integrals-are-bounded-by-total-variation` | `8bac32f2a4bd60f71aae87e57e0c4484bdd3d5e399f862ffe94749d981ce62db` | A-P |
| `thm-l-one-functions-admit-dominated-complex-simple-approximations` | `5d1a40235883a33d9c87986a6081e29e2fab65d1f696915e488e97120ff7348e` | clear |
| `def-integration-against-a-signed-or-complex-measure` | `748001e822630410b276ab493e90ac7b1a7a16a5104e902da64075eb96fc6f4c` | clear to A-P correction |

All five complete targets and the exact total-variation clauses used by the
three consumers were read together. Before changing the index, each exact ID,
the partition-selection defect, finite-partial-sum repair, simple-integral
domination, `L^1(|nu|)` and approximation mechanisms were searched across the
whole ledger and every classification section. The total-variation theorem
already had exactly one A-P row for this mechanism and was not duplicated.
The simple-integral definition and dominated-approximation theorem were new.
The domination proposition was new. The integration definition had just been
entered as clear in the preceding bounded pass; this follow-up corrects that
single row rather than adding a second classification.

## Existing supplier defect and exact propagation

In `thm-total-variation-is-a-measure`, proof 1.2 chooses one partition for every
member of a countable disjoint family and then passes from those arbitrary
partitions to a sum of suprema without near-maximality. This is exactly the
already recorded A-P finding. Its repair is choice-free: bound each finite
partial sum using finitely many near-maximal partitions and finite choice, then
take the supremum of partial sums; if a variation is infinite, use one partition
above each fixed finite threshold.

`def-integration-against-a-signed-or-complex-measure` invokes that theorem to
treat `|nu|` as a positive measure before defining `L^1(|nu|)` and the integral.
The known proof gap is therefore load-bearing. Repairing the upstream theorem
repairs this definition; its subsequent Cauchy and independence calculation is
sound by total-variation domination.

`prop-simple-integrals-are-bounded-by-total-variation` also invokes the affected
theorem to integrate `|s|` against `|nu|` and use measure monotonicity. Its
finite weighted-sum inequality is correct, but the published proof does not
inline the finite-additivity argument that would bypass the supplier gap.
Repair the upstream theorem or prove the required finite variation clauses
directly here.

Classification: the integration definition moves from its one clear row to one
A-P row, and the domination proposition is one new A-P item. No new supplier or
Phase-2 pair is needed.

## Bounded clears

The simple integral uses the unique nonzero-level-set representation and only
sets of finite variation; a one-piece partition makes every displayed measure
value finite, so the finite sum is well defined without countable additivity.

The dominated simple-approximation theorem chooses four approximation sequences
for four fixed nonnegative functions, which is finite choice. Monotone
convergence gives componentwise `L^1` convergence, and the component inequality
gives the complex result. These are two new bounded clears.

## Current frontier impact

The active draft `thm-fourier-transform-of-a-finite-complex-measure` uses the
integration definition. The supervising worker was notified that its
well-definedness path needs the existing finite-partial-sum repair or an
equivalent local bounded-character integral construction. This is downstream
impact of the existing total-variation defect, not a duplicate supplier finding.

## Limits

This pass certifies the four consumer targets only against the exact
total-variation and approximation clauses. It does not re-audit the separate
Radon–Nikodym density finding or arbitrary integration consumers. No published
or draft item was edited, no external source was newly consulted, and no
independent judgment or exhaustive discovery claim is made.
