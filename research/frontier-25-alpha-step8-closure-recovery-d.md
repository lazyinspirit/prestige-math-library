# Step 8 closure recovery — group d

Run: `frontier-25`  
Group: `d`  
Batches: `10`, `11`

## Rejudge adjudication — round 1

Seven current exact rejection tuples were owned by group d and adjudicated.

| item | outcome | evidence and disposition |
|---|---|---|
| `def-multitape-and-nondeterministic-machines` | `confirmed_fatal` | The definition used `k` without quantification. It now begins the multitape clause with an integer `k >= 1`. |
| `ex-cfg-to-pda-construction` | `confirmed_nonfatal` | The cited theorem's proof explicitly gives the one-state pop/expand construction; the objection is at most a direct-statement citation gap, and the example's computation is correct. No edit. |
| `ex-valid-computation-histories-are-decidable` | `confirmed_nonfatal` | The one-step legality follows immediately from the displayed transition table and configuration convention. The missing direct dynamics citation is nonfatal. No edit. |
| `lem-dpdas-have-unique-computations` | `confirmed_nonfatal` | “State and top symbol” should include the next unread symbol, but the full-configuration argument closes immediately and the theorem is correct. No edit under the fatal-only rule. |
| `lem-pda-fragment-variables-compose` | `confirmed_fatal` | The repaired converse still allowed the post-`Y` segment to inspect and restore the lower suffix. It now stops at the first exposure of the lower suffix and retains the unread suffix `v`. |
| `prop-deterministic-cfls-are-unambiguous` | `confirmed_nonfatal` | The cited unambiguity proposition names the standard fragment grammar, whose language equality is supplied by its construction theorem. The omitted direct citation is nonfatal. No edit. |
| `prop-valid-computation-histories-are-decidable` | `confirmed_fatal` | The decoder accepted any tail beginning with `0`. It now accepts the empty-list marker only when the entire current candidate is exactly `0`. |

Exact guard-form adjudication rows were appended for all seven tuples. Matching
defect rows `frontier-25-S8R1-d-001` through
`frontier-25-S8R1-d-003` were appended for the three fatal defects.

### Rejudge targets

1. `def-multitape-and-nondeterministic-machines`
2. `lem-pda-fragment-variables-compose`
3. `prop-valid-computation-histories-are-decidable`

### Checks

- focused precheck: 2/2 repaired proof-bearing items passed
- focused render check: 3/3 repaired items passed
- strict proof contract: 2/2 repaired proof-bearing items passed
- citation fidelity: no missing quote or widening candidate on the owned
  batch-10/batch-11 scope
- Step-8 guard: all current edits licensed, including the exact owner
  prerequisite repairs
- defect-ledger validation: 0 errors for `frontier-25`
- exact group-d rejection/adjudication join: 0 unadjudicated rows
- Step-8 scope check: passed; remaining routed rejections belong to other groups

### Current blocker

`frontier-25-S8-d-009` still says `open` in the append-only defect ledger even
though the owner-authorized prerequisite repair, the proposition repair, and
the live closure all record the mathematical defect as repaired. No established
append interface can mutate that existing row, so this dispatch did not rewrite
the ledger.

## Round 3 live audit

The owning group corrected the previously malformed fatal-type field. The
current shared adjudication ledger now has no confirmed-fatal row outside the
allowed `logic`, `dependency_citation`, and `other` enum.

- current unadjudicated rows owned by group d: **0**
- invalid fatal-type rows owned by group d: **0**
- invalid fatal-type rows anywhere in the current adjudication ledger: **0**
- configured adjudication comparison: **complete**
- Step-8 scope check: **passed**
- new group-d outcomes, item repairs, rejudge targets, or alerts: **0**

The remaining group-d open fatal and its missing prerequisite licence are
unchanged. No mathematical item or shared ledger was changed in round 3.

## Round 2 live audit

The second recovery dispatch recomputed the exact tuple and ownership checks.
The state is unchanged:

- current unadjudicated rows owned by group d: **0**
- new outcomes, repairs, rejudge targets, or alerts: **0**
- the gate-blocking malformed adjudication at line 6 remains owned by group
  `a`
- `prop-deterministic-cfls-are-unambiguous` remains group d's open fatal with
  no new licence for its defective prerequisite

No mathematical item or shared ledger was changed in round 2.

## Exact recovery scope

The live judge ledger, adjudication ledger, judge-closure receipt, and
`by_item` ownership map were compared by exact
`(id, model, context_sha256)` key.

- current unadjudicated rows owned by group d: **0**
- rows handled in this recovery dispatch: **0**
- adjudication outcomes appended: **0**
- licensed mathematical repairs: **0**
- rejudge targets added: **0**
- cross-group alerts added: **0**

No mathematical item or shared JSONL row was changed in this recovery
dispatch.

## Historical blockers from initial recovery

1. The active `judge-closure` failure is
   `research/frontier-25-judge-adjudications.jsonl:6`. Its subject is
   `cor-winding-number-classifies-loops-in-the-punctured-plane`, which the
   generated ownership map assigns to group `a`. The row records
   `defect_type: "ill-formed"`, outside the adjudication schema's permitted
   fatal types. Group d cannot rewrite or supersede another group's row.

2. The live closure receipt still lists
   `prop-deterministic-cfls-are-unambiguous` as group d's open fatal. Its exact
   adjudication and open defect-ledger row were recorded in the primary group-d
   Step-8 dispatch. A coherent repair still requires correcting
   `def-deterministic-pda`, whose definition permits multiple epsilon moves but
   has no exact Step-8 rejection licence. This unadjudicated-row recovery task
   supplies no new authority to alter either item.

## Focused checks

- Exact group-d rejection/adjudication comparison: `0` current unadjudicated
  tuples.
- Ownership check for the malformed line-6 row: owner is group `a`, not group
  `d`.
- Judge-closure receipt check: `unadjudicated` is empty; the group-d
  proposition above remains in `open_fatal`.
