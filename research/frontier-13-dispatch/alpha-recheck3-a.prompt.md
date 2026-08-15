# frontier-13 — Alpha re-check, round 2 (final gate before step 4)

Narrow pass. Your round-1 report stands; verify **only** the corrective work
listed in your task file, and answer one question per pair:

> **`ready-for-splice` or `not-ready`?**

After this, item text stops being cheap to change.

## Hard rules

- **No permission prompts of ANY kind**, from you or any subagent. If blocked,
  **record a blocker** — never a prompt.
- Author nothing. Edit no batch file, no `plan-spec.json` entry, no published
  item. Write only `research/frontier-13-alpha-<g>-recheck2.md`.
- **Read from disk.** A Beta's account of its own repair is not evidence.
- Your batches only.

## The failure shape to hunt

Every round of this run has produced the same defect: **a repair fixes the claim
and leaves its obligations behind.** A Statement, title or id moves while its
`deps`, proof-contract input map, provenance row or coverage row stays put. It has
appeared in batch 6 (poset hypothesis with no antisymmetry dependency), batch 4
(hereditary property asserted without the licensing lemma), and batch 6 again (a
rename that reached three artifacts but not the notes' provenance table).

Check that shape on every item the corrective pass touched, then check the pass's
own additions for it.

## Also verify, briefly

- **New items**: dependency in closure or an earlier same-pair item; component
  provenance on both axes; contract citations that state a **proposition**, not a
  clause's opening words; a coverage row naming the item.
- **Ids versus content** — last free moment before immutability.
- **Nothing else regressed**: item counts, gates, closure.

## Verdict

`ready-for-splice` / `not-ready` per pair. `not-ready` names the exact remaining
work. Close with anything the orchestrator or the step-4 splice must know.


---

# This dispatch

## Group A round 3 — batch 2 only (targeted)

Everything else in your scope is `ready-for-splice` and must not be re-opened:
orders 58, 96, 68, 106.

Verify only `cor-number-of-solutions-of-a-binomial-congruence` on
`primitive-roots-and-unit-groups-modulo-n` (57.001), dispatched to Beta 2 from
your own spec:

1. Present, positioned after `thm-eulers-criterion-for-binomial-congruences`, page
   now at **28** items.
2. Statement is the $\gcd(\varphi(n),m)$ count under the preceding theorem's
   hypotheses ($n$ admits a primitive root, $\gcd(a,n)=1$, $m\ge1$) — and is
   **true**, not merely well-formed.
3. Deps are the four you named, with no new published dependency and no new
   `requires` edge.
4. **The obligations moved with it**: contract entry with an input map covering its
   numbered steps and citations quoting propositions rather than clause openings;
   provenance on both axes with a notes rationale; and the Hackman C.III.1 coverage
   row now naming **both** items rather than one row disposing a heading that
   yields two results.
5. The general/special inversion is resolved — the page no longer has
   `cor-power-congruence-solution-count-modulo-a-prime` saying more than the
   general criterion.

Verdict: `ready-for-splice` or `not-ready` for 57.001. Nothing else.
