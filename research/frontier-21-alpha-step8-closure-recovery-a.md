# Frontier-21 group a — Step-8 closure recovery

## Outcome

Handled all 7 current unadjudicated rejudge tuples owned by group a: 3
`confirmed_fatal`, 4 `confirmed_nonfatal`, and 0 `false_positive`. The three
fatal rows were appended against their exact current contexts and pre-edit guard
hashes, repaired narrowly, recorded as three distinct defects, and added to the
rejudge target set. No other group's row or item was changed.

## Exact dispositions

| item | context SHA-256 | outcome | evidence and action |
|---|---|---|---|
| `cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis` | `608446b2c7a75e5017c41e2f1b2aa9f7cf550ee3fb746247f84a1d2f88dd713a` | `confirmed_fatal` | The local Schreier-generator definition requires a Schreier system, while the witness deliberately uses a non-Schreier transversal. Defined raw transversal elements for arbitrary right transversals, stated that they agree with Schreier generators only for Schreier systems, and recomputed the witness in that terminology. Licence hash: `13a4e62626c1745735cbb534c464e636765abc443f39c6696f2a629484f13b79`. Ledger: `frontier-21-S8-a-r1-001`. |
| `fs-folner-sequences-exist-for-every-uncountable-amenable-group` | `1f1560e39f5e03fc3b35a16f28d473785702810d94621a0e7fa89dd3c126f35b` | `confirmed_fatal` | The repaired local definition indexed the sequence by positive integers despite the library's natural-number sequence convention. Changed it to `(F_n)_{n\in\mathbb N}`; the proof already works uniformly for every natural index. Licence hash: `7b4e2667ea2336e233efddb1070d677450970d302bd5c9a53fe3f0c092d5409a`. Ledger: `frontier-21-S8-a-r1-003`. |
| `lem-schreier-rewriting-is-invariant-under-free-reduction` | `0cd5c5c0c62df42ddb77e5bbe7d864cc0e5c45ebe3d7893f45ef914973c25ff7` | `confirmed_fatal` | The repaired Statement used `tau` and “the subgroup” without fixing the ambient subgroup or Schreier system. Added `F(X)`, `H`, `T`, and its rewriting map `tau` to both Statement and Given. Licence hash: `212ae33cfb62b129c094024d872f3c6bf8d34bbab194a927f88f946d393aec4e`. Ledger: `frontier-21-S8-a-r1-002`. |
| `thm-folner-criterion-for-amenability` | `962fc409d188ca82af97b8ed7ac216a75dfcdd53665a099217697e73d56bb615` | `confirmed_nonfatal` | A finite-intersection family must first generate its proper filter before the ultrafilter-extension lemma is applied. That standard one-line construction is immediate in both occurrences and does not invalidate the theorem or proof strategy. No edit. |
| `thm-free-group-of-rank-two-is-nonamenable` | `8dc90ca4cbb552fe1f9346417f6b0b25e9f9a287fb971a61ed47f67c1b44f0d1` | `confirmed_nonfatal` | Fact L3 abbreviates the full paradoxical-decomposition definition, but steps 2.1 and 3.1 explicitly verify the omitted disjoint original partition and both translated partitions. No edit. |
| `thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects` | `047bc2b26530649504ed03a6e345de4ea27e7435699bb19fe0a5d651a4ce54c7` | `confirmed_nonfatal` | The current theorem is correct under the library's quotient-order convention. A sibling fact still calls it an anti-isomorphism, but that stale word is non-load-bearing there: the sibling proof uses only representative independence and equality of classes. No edit to the rejected theorem or to an unlicensed sibling item. |
| `thm-tarski-alternative` | `d4b3a377cf17cbc866ec1f9d7e46c2f770d8d184f32ad0789d7730e337204506` | `confirmed_nonfatal` | Step 1.1 omits the amenability definition when translating “no invariant mean” to “not amenable.” The definition is already a declared dependency, and the inference is immediate. No edit. |

## Rejudge targets

1. `cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis`
2. `fs-folner-sequences-exist-for-every-uncountable-amenable-group`
3. `lem-schreier-rewriting-is-invariant-under-free-reduction`

The engine owns the durable cycle limit and whether these targets require a
terminal-resolution path rather than another automatic cycle.

## Documentary synchronization

Regenerated the current proof-contract entries for the three repaired items and
the two consumers of the expanded Schreier-rewriting Statement. Existing
item-specific risk reviews were preserved by the regeneration script.

## Checks

- Exact tuple join: 7 current group-a tuples, 7 unique adjudication rows, with
  3 confirmed fatal and 4 confirmed nonfatal.
- Focused precheck: all 3 repaired items passed.
- Focused render check: all 3 repaired items passed.
- Focused strict proof-contract check: 5/5 affected entries passed with no
  error or warning.
- Focused reviewed risk report: 3/3 repaired high-risk items routed with no
  missing review.
- Dependency check exited successfully with repository-wide pre-existing
  warnings only.
- Step-8 guard passed: all 41 contemporaneous whole-run item changes were
  licensed by exact confirmed-fatal adjudications or terminal resolutions.
- Each of the 3 new group-a fatal tuples has exactly one defect-ledger row.
- The whole-run defect-ledger check was attempted but remained red at check
  time because five confirmed-fatal tuples owned by another group had not yet
  acquired their ledger rows; group a did not alter those rows.

## Alerts and blockers

- No incoming alert and no outgoing cross-group finding.
- No group-a blocker. Whole-run ledger closure still depended, at check time,
  on five other-group defect rows.
