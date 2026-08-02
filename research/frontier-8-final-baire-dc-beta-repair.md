# Frontier 8 final Baire/DC repair — Beta record

Date: 2026-08-02

## Authorized scope

Only `items/thm-baire-category-for-complete-metric-spaces.md` was changed.
The confirmed fatal was a public choice-scope omission: the proof invokes
Dependent Choice in step 2.1, while the title and Statement previously asserted
the result with no explicit choice assumption. This conflicts with the
library-wide convention recorded by [[def-dependent-choice]].

## Exact public-claim change

| Surface | Old | New |
|---|---|---|
| Title | `A nonempty complete metric space is not a countable union of closed sets with empty interior` | `Under Dependent Choice, a nonempty complete metric space is not a countable union of closed sets with empty interior` |
| Statement | `If a nonempty metric space $X$ is complete, then it is not the union of a sequence of closed sets each having empty interior. Equivalently, the intersection of countably many open dense subsets of $X$ is dense.` | `Assume the Axiom of Dependent Choice ($\mathrm{DC}$). If a nonempty metric space $X$ is complete, then it is not the union of a sequence of closed sets each having empty interior. Equivalently, the intersection of countably many open dense subsets of $X$ is dense.` |

The Given line now names the same assumed axiom, and `[L2]` says explicitly that
the recursive ball sequence is licensed under that assumption. The nonempty
complete-metric-space condition is unchanged.

## Rationale and untouched artifacts

This is a restatement that restores the hypothesis actually used by existing
step 2.1; the proof, its three dependencies, its phase steps, and its boundary
handling are unchanged. `research/frontier-8-proof-contracts.json` already
records `[L2]` from [[def-dependent-choice]] as the input to step 2.1, so it
needs no contract change. The plan specification and batch manifest are
scaffolding records whose pre-existing descriptive titles are not an exact copy
of the item title; the new explicit public assumption does not alter their
dependency or ordering data, so they are intentionally unchanged.

## Focused checks

Run after this edit:

- `precheck.mts` on the repaired item;
- `rendercheck.mjs` on the repaired item;
- `proof-contract.mjs --strict --items thm-baire-category-for-complete-metric-spaces`.
