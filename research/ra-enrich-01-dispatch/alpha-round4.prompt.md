# ra-enrich-01 — adjudicate the judge rejections and repair the drafts

**You are an expert of real analysis, acting as Alpha.**

You are the sole adjudicator of the paired-judge rejections on the seven new
real-analysis drafts, and you may repair them. You did not author them.

## No permission prompts, ever

Owner's standing rule (2026-07-30, broadened 2026-08-11): *"Do not ask and do not
let any agents ask for shell command permissions, edit permissions, web search
permissions, git permissions, or any permissions whatsoever."* No segment of an
`&&` chain may prompt. Record a blocker instead; never prompt.

## The situation

Seven items were authored as **drafts** and have never been published. Both judge
lanes read all seven — 14 verdicts, zero nulls. An independent Sol reader audited
them separately and returned four findings, **all nonfatal**, landing on the same
proof steps the judges flagged.

Read, in full:

- `research/ra-enrich-01-judge.jsonl` — every verdict with its `reason`
- `research/ra-enrich-01-audit-findings.md` — the independent reader
- `research/ra-enrich-01-PLAN.md` — the approved statements and controls
- `research/ra-enrich-01-author-report.md` — the author's own proof routes
- the seven item files under `items/`

## Repair is expected here, not withheld

The build's step-8 fatal-only rule (R1) does **not** apply. That rule exists
because editing a *frozen, judged* text voids its verdict and starts an unbounded
resample loop. These items are unfrozen drafts on their first pass, nothing is
published, and the owner has asked for them to be published. This is the
equivalent of **step 6**, where polish belongs precisely because no verdict is
being protected.

So: where a rejection identifies a real gap, **fix it**. Publishing a known
citation gap is the worse outcome.

The 30-second rule still governs severity: a gap a competent reader closes in
thirty seconds is **nonfatal**. Nonfatal here means "repair it cheaply and
correctly", not "ignore it".

## What the judges actually found

Every rejection is a **citation-licensing** complaint — the judges check local
licensing only, so an abbreviated fact restatement trips them. Verify each
against the item text and the cited item before accepting it:

| item | lane(s) | complaint |
|---|---|---|
| `thm-taylor-series-representation-by-remainder` | **both** | step 1.3 applies the extreme value theorem to $[a-r,a+r]$ without any cited fact establishing that a closed bounded interval is compact |
| `thm-standard-maclaurin-expansions` | **both** | step 1.4's binomial-coefficient identification is not licensed by the cited factorial rule; step 1.6 derives the derivative of $(1+x)^\alpha$ from a fact stating only the derivative of $x^\beta$ on $(0,\infty)$, needing a chain rule or explicit limit |
| `thm-euler-mascheroni-constant-and-harmonic-asymptotic` | terra | step 2.3 compares logarithms with different upper endpoints, but the cited fact compares integrals on one fixed interval |
| `def-radian-angle-by-unit-circle-arc-length` | deepseek | at $t=0$ the cited circular-arc definition requires $\alpha<\beta$, so there is no arc to measure — the degenerate case is outside the cited definition's domain |
| `cex-smooth-function-not-equal-to-its-maclaurin-series` | deepseek | steps 1.1–1.2 use derivatives of the identity and of powers with no cited fact supplying them |

The library almost certainly publishes what is missing — Heine–Borel, the chain
rule, derivatives of powers, the logarithm's integral identity. **Open each
candidate before citing it** and confirm its exact published statement licenses
the step. If a needed result genuinely is not published, say so rather than
inventing a citation.

The $t=0$ case is the one finding that is not merely a missing citation: it is a
real degenerate-boundary defect. Fix it honestly — either restrict the definition
to $t>0$ and handle $t=0$ explicitly, or license the degenerate arc from a fact
that actually covers it.

## What you produce

1. **`research/ra-enrich-01-adjudications.jsonl`** — one row per rejection:
   `{id, model, item_sha256, outcome, defect_type?, note}` where `outcome` is
   `confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`. Take
   `item_sha256` from the judge ledger row you are adjudicating.
2. **The repairs**, applied directly to the draft item files. Keep every approved
   statement unchanged — the five controls in the plan are binding, including
   acute-angle-only, the $|x|<1$ binomial restriction, and the explicit $M_{n+1}$
   index. Repair the *licensing*, not the mathematics, unless a statement is
   actually false, in which case stop and report it.
3. Re-run `node tools/tsx-run.mjs tools/precheck.mts <each repaired file>` until
   clean; keep `verification.precheck: pass`.
4. **`research/ra-enrich-01-rejudge-targets.json`** — `{"items": [...]}`, the
   exact ids whose text you changed. Only those rejudge; untouched siblings do
   not.
5. **`research/ra-enrich-01-alpha-report.md`** — per rejection: what you
   confirmed, what you repaired and with which published citation, and anything
   you judged a false positive with the evidence.

Do not write `verification.judge` or `verification.audited`, do not edit
`library/`, `plan-spec.json`, or any published item, and do not publish. The
orchestrator rejudges and the owner publishes.


---

# This dispatch

# ra-enrich-01 — round 4, FINAL. Two items, two narrow questions.

This is the last repair round. Whatever survives it closes on the adjudication
ledger as `confirmed_nonfatal`, per the stopping rule you already accepted.

## Why the stopping rule did not fire on its own

You were told a fourth distinct objection on `thm-standard-maclaurin-expansions`
closes without repair. I am overriding that for one specific reason, and only for
part 1: **both lanes now flag a defect that your round-3 repair introduced.** That
is a regression, not a resample. Publishing an item whose Remarks cite the wrong
step numbers would be shipping an error we created. The stopping rule exists to
stop an unbounded hunt for *fresh* nitpicks in unchanged text, not to protect a
mistake in the newest edit.

## Part 1 — `thm-standard-maclaurin-expansions`: bookkeeping only

Both lanes, independently:

> **Terra:** The Remarks twice miscite step 1.4: it only proves a derivative
> formula for a negative real power. Agreement with natural powers and
> identification with the counting binomial coefficient are proved in step 2.1.
>
> **DeepSeek:** Step 1.2 applies L9 to a series known only to converge on
> $|x|<R$, but L9 needs its radius; no cited fact gives radius at least $R$. The
> Remarks also attribute the integer-real power agreement and binomial-count
> match to Step 1.4, though Step 2.1 proves them.

Two fixes, both mechanical:

1. **Correct the Remarks' step references.** Your nine-phase restratification
   renumbered the steps and the Remarks were not carried across. Check **every**
   cross-reference in the item — Remarks, Facts, and step-to-step citations —
   against the current numbering, not just the two the lanes named. A renumber
   breaks references in bulk, so audit them in bulk.
2. **Cite the radius for the L9 application at step 1.2**, or restrict the step
   to where the cited radius actually holds.

**Do nothing else to this item.** No new sweep, no new facts beyond what these
two fixes require. Its mathematics has now been audited three times and the
statement is settled.

## Part 2 — `thm-analytic-sine-cosine-agree-with-right-triangle-ratios`: does it overstate?

This item passed both lanes twice. It is here because repairing
`def-radian-angle-by-unit-circle-arc-length` moved its context hash, forcing a
rejudge, and on that rejudge Terra raised something new. DeepSeek passes it.

> **Terra:** Step 8.1 is unsupported: $P=H(\cos\theta,\sin\theta)$ gives
> collinearity, but no cited fact or definition relates the triangle's interior
> angle at the origin to the unit-circle swept angle, or establishes invariance
> of that angle under positive scaling.

**This is the one objection in the whole run that could be fatal, so treat it as
the serious question it is.** The fatal class is "a title or Statement asserting
more than the proof gives".

Decide precisely what the item claims:

- If it claims only the **ratio identity** — that for the coordinate right
  triangle with vertices $(0,0),(A,0),P$, the parameter $\theta$ satisfies
  $\cos\theta=A/H$ and $\sin\theta=O/H$ — then that follows from
  $(A/H,O/H)=(\cos\theta,\sin\theta)$ and Terra is over-reading a remark. Record
  it as a **false positive with the evidence**, and change nothing. That is the
  approved statement in `research/ra-enrich-01-PLAN.md`; check it.
- If the item anywhere claims the **triangle's interior angle at the origin
  equals $\theta$**, then Terra is right that this needs angle-invariance under
  positive scaling, which the library may not publish. In that case **scope the
  claim back to what the plan approved and what the proof delivers** — do not
  invent an angle-invariance theorem to rescue a sentence.

Either outcome is acceptable. What is not acceptable is leaving an unlicensed
geometric assertion in the text because the ratio identity happens to be true.

Remember this item is the reason the whole commission exists — the owner asked
for the bridge from the power-series sine and cosine to $\cos\theta=A/H$,
$\sin\theta=O/H$. Getting its scope exactly right matters more than getting it
published tonight.

## Deliverables

- Repairs to those two files only.
- Adjudication rows appended for both, with the evidence, including a
  `false_positive` row if that is your finding on part 2.
- `research/ra-enrich-01-rejudge-targets.json` overwritten with the ids you
  actually changed — **if you change nothing on part 2, it does not go in.**
- `precheck` and `rendercheck` clean; a round-4 section in the Alpha report.

Do not write `verification.judge` or `verification.audited`, do not edit
`library/`, `plan-spec.json`, or any other item, and do not publish.
