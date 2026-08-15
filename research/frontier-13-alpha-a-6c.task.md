## Step 6c — cross-batch and cross-level citation audit. LEAD ALPHA ONLY

Steps 4, 6c and 8 are yours alone: one global citation reader. Groups B and C do
not participate. 6a and 6b are complete — three groups adjudicated ~110 reader
findings and repaired the confirmed ones across all seven batches.

### Hard rules

- **No permission prompts of ANY kind**, from you or any subagent; no segment of
  an `&&` chain may raise one. If blocked, **record a blocker**.
- You may repair items anywhere in this run's scope. Outside it, only the narrow
  obvious-published-dependency delegation applies, with its repair record.
- Write `research/frontier-13-alpha-a-6c.md`.

### What 6a and 6b could not see

Each reader saw one batch; each group Alpha saw two or three. **Nobody has read
the run's citations as a whole**, and nobody has checked this run's items against
the published corpus they cite. That is this step.

1. **Cross-batch citations.** The run was batched for zero cross-pair seams and
   that property was verified repeatedly at scaffold time — confirm it survived
   authoring and two rounds of repair. An item that gained a dependency during a
   6b repair is where this would have broken.

2. **Cross-level citations — the substantive half.** All 463 items cite published
   items. For each *load-bearing* published citation, open the cited item and
   check the restatement preserves domain, hypotheses, quantifiers, direction and
   conclusion. **This run's dominant defect class is the inflated restatement**:
   6b confirmed fatal instances of an enlarged domain, a dropped `n≥1`, and a
   citation pointing at an item that does not state the claimed fact at all.
   Those were found *within* batches. The cross-level surface is larger and has
   had no equivalent pass.

3. **Repairs that moved a Statement.** 6b changed at least one Statement's
   content — `thm-szemeredi-regularity-lemma-with-tower-bound`'s recurrence went
   from `⌈ε⁻⁵m_r2^{m_r+2}⌉` to `m_r⌈ε⁻⁵2^{m_r+5}⌉` because the honest estimate
   does not support the old constant. **Every consumer of a changed Statement
   must be re-checked** — a downstream item quoting the old bound is now citing
   something that no longer exists.

4. **The `risk_review` dispositions.** `risk-report` routes CRITICAL and HIGH
   tier items; the level cannot close without your recorded disposition on each.
   Confirm the groups wrote theirs and supply any missing.

5. **Two things still owed from earlier steps**, neither yet done:
   - **Batch 2's Q₈ nonsplitting witness.** Its decline reason states the closure
     does not contain the quaternion page. That is false — `def-quaternions` is
     published on `rings-subrings-and-integral-domains`, inside order 68's
     closure, which the page already cites from. The decline's *first* reason
     holds and the mathematics is covered by the C_{p²} witness, so this is a
     correction plus an optional addition: page 68 sits at 23 items against 60.
     Correct the false reason; author both Q₈ items if they earn their place.
   - **The Chernikov/Zhao section titles** flagged by group C at round 1 and
     never routed to anyone.

### Report

Per finding: item, cited item, what the restatement claims versus what the source
says, verdict, and what you changed. State the number of load-bearing published
citations you actually opened — a verdict over citations you did not read is not
a verdict. Re-run the repo-wide gates after any repair.
