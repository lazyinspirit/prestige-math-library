# Frontier-22 published Turing-machine variant audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `def-deterministic-one-tape-turing-machine` | `c99b7ae74b604218ef1d8a4462724fdcf5d36b73f71b1dc8b90258fe3c21d0ea` |
| `def-multitape-and-nondeterministic-machines` | `bb451856c6ca5b01d13b5739a42752429de000cf90f88540c13e2f6830fe73ab` |

Both complete definitions and the exact finite-alphabet/function/cardinality
interfaces were read. Neither declares aliases. The complete ledger was
searched by both exact IDs and by right-infinite tape, left-boundary,
multitape transition, finite-valued nondeterministic transition and finite-
branching mechanisms. The multitape ID occurs only as a supplier in existing
simulation/configuration evidence, and the one-tape ID had no occurrence;
neither had a classification row or item-specific defect record.

## Bounded dispositions

The deterministic base tuple has finite state/input/tape alphabets, distinct
start/accept/reject states and a total transition function exactly on
nonhalting state-symbol pairs. It intentionally leaves tape contents,
configurations and one-step dynamics to the following items. Those later items
provide the right-infinite tape's left-boundary convention, so its absence from
this machine-syntax definition is not a contradictory or partial operation.

For positive finite `k`, the multitape transition simultaneously reads and
writes one symbol and moves one head on each of `k` right-infinite tapes. The
nondeterministic variant replaces the single instruction by a finite set of
instructions; the empty set coherently represents a stuck nonhalting branch.
The later repaired `def-nondeterministic-accepting-computation` applies the same
local rewrite/boundary recipe and defines acceptance by existence of a finite
accepting branch. No enumeration or selection from all branches is part of the
machine definition.

Classification: two new bounded no-repair-needed dispositions. These are the
exact finite-control and finite-branching clauses used by current clocked
simulation and complexity drafts. Their separate simulation/configuration
proof obligations remain independently classified. No current Step-5 blocker,
new Phase-2 supplier or new pair was found.

## Limits

This pass certifies only the two complete machine-syntax definitions and their
exact later boundary interface. It does not certify every simulation, resource
bound, configuration encoding or complexity-class consumer. No external source
was newly consulted, no published item was edited, and no independent judgment
or exhaustive discovery claim is made.
