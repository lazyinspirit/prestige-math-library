# B5 Forward Declarations — Final Drain

## Scope and result

Updated only the `deps` and `forward_refs` frontmatter declarations for the five assigned items, and the corresponding five B5 manifest rows in `frontier-37-owner-30-batch-5.pages.json`. No proof text or other source fields were changed.

Each named supplier is an existing `published` item, and its current statement/proof supports the use cited by the target:

| Target | Declared forward supplier | Current supplier claim used |
| --- | --- | --- |
| `cex-weil-divisor-not-cartier-singular-cone` | `lem-noetherian-subspaces-and-compact-opens` | Subspaces of a Noetherian space are compact; in particular, its open subsets are compact. |
| `def-sheaf-total-quotient-rings` | `lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions` | The constant sheaf is the sheaf of locally constant functions, with the stated stalk identification. |
| `lem-cartier-divisor-local-equation-equivalence` | `lem-filtered-colimits-of-abelian-groups-are-exact` | Filtered colimits of abelian groups are exact. |
| `lem-effective-cartier-divisor-exact-sequence` | `lem-filtered-colimits-of-abelian-groups-are-exact` | Filtered colimits of abelian groups are exact. |
| `thm-cartier-to-weil-divisor-normal-scheme` | `lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions` | The constant sheaf is the sheaf of locally constant functions, with the stated stalk identification. |

For every target, the supplier was removed from `deps` and declared exactly once in `forward_refs`. All other source declarations were preserved. The matching manifest row now has `deps` and `forward_refs` equal, in order, to the current arrays parsed from source with `tools/frontmatter-list.mjs`.

## Forward-order consequence

The `cex` target is a counterexample, a consequence kind allowed to rest on later material by `tools/fwdcheck.mjs`. The other four targets are definitions, lemmas, or a theorem; their load-bearing citations fall outside Remarks. The current fwdcheck implementation reports `forward-on-spine` for such uses even when the forward declaration is accurate. This declaration-only task does not resolve that ordering constraint, so those four items may still fail fwdcheck and need a separately authorized structural/order resolution. I did not run a gate.

## Final source hashes

| Item file | SHA-256 |
| --- | --- |
| `items/cex-weil-divisor-not-cartier-singular-cone.md` | `7133c49fcde023af9e80ca16911b948bb5ad30b955177510a61a709f882eacce` |
| `items/def-sheaf-total-quotient-rings.md` | `a5869570a6cc0e1f6d96531d9f0d64f2c99ac112f2650a5455abc6f15af875aa` |
| `items/lem-cartier-divisor-local-equation-equivalence.md` | `9e740885df7d31201a341a1e7a7aeb799791845c2af77dc1a21d08897264af52` |
| `items/lem-effective-cartier-divisor-exact-sequence.md` | `83c3740f54cd20688471bd51411ea3640a003d75170851b70fbf5d063b5c251a` |
| `items/thm-cartier-to-weil-divisor-normal-scheme.md` | `c5f8fa99ebe866811f84ca550dfc0b8b51598d30a167d0de128600f02ee9a3a8` |

Manifest SHA-256: `38341c6ff95a69b410be10ad93b9c02a5667bb446568139e06866fe3dd8b403d`.
