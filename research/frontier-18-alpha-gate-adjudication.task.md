# Gate adjudication, run `frontier-18`

A gate failed and no mechanical repair and no specialised route covers it. You
are the route. **A failing gate is a finding to adjudicate, not an instruction to
make the gate pass.**

## Why this task exists

Step 5's failure hook used to name three gate ids and fall through for every
other one — no repair, no dispatch, just a bare return. The engine then spent its
whole round budget re-running an identical failure and reported "did not clear"
for a repair it never ran. On `frontier-18` that shape produced **three separate
blockers in one run** — `depcheck`, `rendercheck` and `content-policy-items` —
each of which stopped an otherwise healthy build until a person read the output.
Every one was adjudicable from disk.

## What to do

1. **Find the failing gate.** `.autopilot/status.md` lists it under `## Blockers`,
   and `.autopilot/events.jsonl` carries its full output — the last
   `{"type":"gate"` record with `"code":1`. Your dispatch label names it too.
2. **Reproduce it** from the repo root. Never adjudicate from the log alone; the
   tree has moved since the gate ran.
3. **Adjudicate every finding from disk, one at a time.** For each, decide:
   - **a real defect in this run's content** — repair it under your step-6
     licence and record what you changed;
   - **a real defect in a published item this level depends on** — the
     obvious-published-dependency rule applies, with its snapshot and repair
     record; if the correction needs a debatable restatement, a new theorem, a
     deletion or a reading-order change, it is NOT obvious: report it;
   - **a false positive** — say so with the evidence, and do not touch content to
     silence it.
4. **Re-run the gate** and report the exact output you leave behind.

## The one thing that must not happen

**Do not edit a gate, a detector or a threshold to make it pass.** If a detector
is broader than the rule it enforces, that is a finding worth reporting in
precisely those terms — quote the rule, quote the detector's behaviour, name the
items it fires on wrongly — and it is the owner's to settle, not yours. A gate
narrowed to clear a run is a defect class silently switched off for every run
after it.

Equally: do not rewrite correct mathematics to satisfy a detector. If a proof
legitimately needs the construction a detector objects to, the proof wins and the
detector is the finding.

## Report

Write your findings and dispositions into your normal step-6 report for this
group. One line per gate finding: the id, the disposition
(`repaired` / `false-positive` / `owner-decision`), and the evidence. If anything
is left failing, say exactly what and why, so the blocker that reaches the owner
carries a read rather than a stack trace.

**No permission prompts of any kind**, including inside an `&&` chain.
