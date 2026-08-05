# Wave 5 — A8 round 3: adjudicate the last 6 judge rejections

You are audit-Alpha, the wave's **sole adjudicator**. This is the final blocker
on A8. Everything else in the wave is clean: paired coverage is 209/209,
`step8-guard` passes, `impact-audit` passes. These six rejections are the only
reason `level-coverage --verify-current-context` still fails.

## The binding rules for this round

**A8 is fatal-only (R1, owner 2026-08-03).** Only a `confirmed_fatal`
adjudication licenses ANY edit to an item. `confirmed_nonfatal` and
`false_positive` close the rejection on its ledger row and change **nothing** —
no content, no frontmatter, no provenance, no judge block, not even a typo fix.
`step8-guard.mjs` mechanically enforces this against a `pre-a8` touch baseline
and will fail the stage with `nonfatal-edit` if you polish something.

**Your 30-second threshold is binding.** A logical gap a competent human reader
closes in 30 seconds is nonfatal. At A8 you do not even polish it.

**A judge rejection is adjudicated, not obeyed.** Each one gets either a fix,
with the defect named, or a refutation, with a **verbatim quote from the cited
item on disk**. Five of these six allege the same shape of defect — "the `[F#]`
/`[L#]` fact restates its citation more strongly than the cited item states it".
That is a real and common defect class, and it is also DeepSeek's most common
false positive, because the judge sees only the pages in its frozen pair context
and calls a fact unsupported when the support sits in a page it was not given.
**Open the cited item on disk before ruling either way.** If the cited item does
state the clause, quote it and record `false_positive`. If it genuinely does
not, decide whether the step actually needs the overstated part — if the proof
closes without it, the fact is loose but the mathematics is sound, and that is
`confirmed_nonfatal`.

## The six rejections

### 1. `cex-cauchy-rationals-no-rational-limit` — deepseek-v4-pro
context `1bdc1c0c6d6fbaafe6c6f9185740b744d6b34ded768b8fe1caff38ea84b6502b`
item `08b2f59681cd...`

> Fact [L1] incorrectly asserts that [[fs-rationals-complete]] provides the
> construction and properties of the sequence, but the cited item (as supplied)
> contains only the statement of the false claim, not the required proof. The
> argument is unjustified.

**Prior history: adjudicated `false_positive` THREE times already** (contexts
`25aa8ed147`, `219bb013fd`, `0fa147e02d`), each on item text `beede7a2a1`. The
item hash has since changed to `08b2f59681`, so check what actually changed —
if the A4 retag was the only change to the Statement/Proof, the prior reasoning
almost certainly still applies and this is a fourth `false_positive`. Note
`fs-rationals-complete` is a **false-statement** item; a `fs-` page states a
false claim deliberately, so "contains only the statement of the false claim"
may be exactly correct and not a defect.

### 2. `cex-strictly-decreasing-gaps-no-limit` — deepseek-v4-pro
context `2d42909c16d01ee615a8c6a9d76ee02fd23edf05499e37ae286258f884371382`
item `322a89fac705...`

> L3 states that $(u+v)^2 = u^2+2uv+v^2$ follows from def-integer-power and
> lem-power-monotone, but neither item contains that identity. The computation
> in step 2.2 cites L3 for that expansion, making the citation invalid.

**Prior history: `confirmed_nonfatal` once** (context `4094a56b7c`, item
`500244f25a`). Binomial expansion from ring axioms is the archetypal
30-second gap.

### 3. `cor-monotone-converges-iff-bounded` — deepseek-v4-pro  ⚠ TWICE-TOUCHED
context `d79f1c274a4a1949654f1531f64342a0967c7fdf9fe8491a0972e497811cc509`
item `8b8bb45b4a10...`

> Fact [L5] claims '|t| ≤ M exactly when -M ≤ t ≤ M' citing lem-of-abs-value,
> but that lemma only states the strict inequality (|x| < c iff -c < x < c).
> The non-strict equivalence is not in the cited source, so step 1.2 relies on
> an inaccurate restatement.

**Prior history: 4 adjudications, TWO of them `confirmed_fatal`** (both lanes at
context `3726503bbe`), plus two `confirmed_nonfatal`. Under the twice-touched
escalation this item goes to the orchestrator's personal audit regardless of how
you rule. **Report it in a separate list, and still make any necessary fix.**
A third distinct real defect is the signal to stop repairing and reconsider
whether the Statement is right as written.

### 4. `ex-nested-intervals-single-point` — deepseek-v4-pro
context `2de5ec88e71376bd802b253aa13e7846c0adaa461f9f046170367f35fd59d6b9`
item `f78a0b3d2400...`

> [L6] claims |t|=t for t>=0 from [[lem-of-abs-value]] which does not state that
> property; the fact is stronger than its citation and the step lacks proper
> support.

**Prior history: `confirmed_nonfatal` once** (context `74e0ac7cff`, item
`581f2d0519`).

### 5. `ex-two-subsequential-limits` — deepseek-v4-pro
context `31582302297d7ece02009ff5eca44388aeea07e89649cd8f6e8048ecea2d4b33`
item `d4e4b61852e4...`

> Fact [L5] overstates its sources: [[lem-of-abs-value]] and [[def-abs-value]]
> do not state that |t|=1 forces t=1 or t=-1, yet step 4.1 relies on this clause
> to conclude L=+-1. The proof is incomplete without it.

**Prior history: none. This is a first-time rejection — read it fresh and give
it the most care of the six.** Sonnet judged the same item `keep`.

### 6. `lem-cauchy-sequence-bounded` — claude-sonnet-5
context `ad5e1adb0f26d5ed855592cc6d7497ae7badf23482844bce8cb89e2a066a535b`
item `81e425b0eee7...`

> Reported a specific citation defect in the Remarks: lem-convergent-implies-cauchy
> is cited to justify 'Cauchy implies convergent,' but that lemma's supplied text
> only states the reverse (convergent implies Cauchy).

**Prior history: `confirmed_nonfatal` once** (context `5ea5b5b1ee`, item
`048956e6fe`). This one is in **Remark prose**, and the standing instruction is
to read your own Remarks with a numbered step's suspicion — Remark prose is
where falsehoods hide. A Remark asserting a converse the library does not have
is a genuine falsehood, not a citation quirk. Weigh it on that basis. Note this
is the only Sonnet rejection here, and Sonnet is the same model family as you,
so your agreement with it is weak corroboration.

## Procedure

1. Snapshot first — the guard baseline must exist before your first edit:
   ```
   node tools/touchlog.mjs snap research/audit/wave5-touches.json "pre-a8-round3"
   ```
2. Adjudicate each of the six from **current disk text**, opening every cited
   item named in the rejection.
3. Append one row per rejection to
   `research/audit/wave5-judge-adjudications.jsonl`:
   `{id, model, context_sha256, item_sha256, outcome, defect_type?}` —
   `outcome` is `confirmed_fatal` | `confirmed_nonfatal` | `false_positive`;
   `defect_type` is `logic` | `dependency_citation` | `other`, fatal rows only.
   `context_sha256` must be the **exact hash printed above**, and `item_sha256`
   the sha256 of the normalized item text (its `verification:` block removed) as
   it stands when you adjudicate. A hash that does not match exactly does not
   clear the gate.
4. Repair **only** what you ruled `confirmed_fatal`. Delete `verification.judge`
   on anything you materially rewrite. Batch an item's repairs into one pass.
5. Gate yourself:
   ```
   node tools/step8-guard.mjs --touches research/audit/wave5-touches.json \
     --baseline "pre-a8-round3" \
     --adjudications research/audit/wave5-judge-adjudications.jsonl
   ```
6. If a fatal repair touches a public interface, re-run `impact-audit.mjs` from
   that baseline and disposition every consumer.

## What you must report back

- **The exact list of item ids whose text you changed — that list IS the
  rejudge set** (owner, 2026-08-06). Only items you actually edited are
  rejudged; their unedited page-mates are not. An item you repaired but did not
  name will go to A10 carrying a verdict cast against text that no longer
  exists. If you changed nothing, say "no items edited" explicitly — that is the
  expected and cheapest outcome here, and it lets A8 close immediately.
- Your ruling on each of the six, one line each, with the evidence quote.
- `cor-monotone-converges-iff-bounded` in a separate twice-touched list.
- Anything you believe belongs in the A10 owner report.

Append your record to `research/audit/wave5-alpha.md` as usual.
