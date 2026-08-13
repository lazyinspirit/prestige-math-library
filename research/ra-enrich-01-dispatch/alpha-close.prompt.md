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

# ra-enrich-01 — final adjudication ONLY. Repair nothing.

Six of the seven items now pass both lanes. One remains:

**`thm-standard-maclaurin-expansions`** — DeepSeek **PASS**, Terra **REJECT**:

> Step 2.2 claims 1/(n+1) tends to 0 by L23, but L23 only supplies a single n
> for each positive epsilon. It gives neither an eventual bound nor convergence
> of the reciprocal sequence, so the ratio-test limit is not licensed.

## Your task: adjudicate this rejection. Do not repair it.

The stopping rule you accepted in round 3 now fires. This is the **fifth**
distinct Terra objection on this item, it is on a step unchanged since it was
authored, and it comes after your exhaustive round-3 notation audit. Round 4's
override applied only because that defect was a regression we introduced; this
one is not.

Assess Terra's objection on the merits and record the outcome:

- Is the claim TRUE? (Archimedean gives some $N$ with $1/N<\varepsilon$;
  monotonicity of $1/(n+1)$ then gives the eventual bound.)
- Is the gap closable by a competent reader in thirty seconds?
- Is it a `confirmed_nonfatal`, or is it a `false_positive` because `[L23]` or a
  neighbouring fact already supplies what is needed?

**`confirmed_fatal` is the only outcome that would block publication**, so if you
believe this is genuinely fatal — the ratio-test limit truly unlicensed and the
binomial radius therefore unproved — say so plainly and I will stop the publish.
Anything else closes it.

Write the row to `research/ra-enrich-01-adjudications.jsonl` against the current
`item_sha256`, and a short closing section in
`research/ra-enrich-01-alpha-report.md` recording: this outcome, the final
per-item judge state, and your one-paragraph view for the owner on whether this
item should later be SPLIT — six collated families in one item, the generalized
binomial in another. It has now exhausted DeepSeek's 40,000-token reasoning
budget TWICE (round 3 and round 4, rescued by retry both times), drawn five
distinct objections where the other six items drew six between them, and needed
a nine-phase restratification to make its own internal citations expressible.
That reviewability argument is separate from the defect-distribution argument you
made against splitting in round 3; weigh both and give the owner your view.

Do not edit any item file. Do not write `verification.judge` or
`verification.audited`. Do not publish.
