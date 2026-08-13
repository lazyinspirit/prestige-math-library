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

# ra-enrich-01 — adjudication round 2, exactly two items

Your round-1 repairs worked: five items now pass both lanes, and the two that
were untouched still hold their original paired passes. The rejudge surfaced
**two fresh objections**, both from Terra, both on items you repaired. This is
the expected pattern — repairing a loud defect exposes a quieter one underneath
that was previously masked — not a sign the lanes are noisy.

Scope: **exactly these two items. Touch nothing else.**

## 1. `thm-standard-maclaurin-expansions` — Terra, post-repair

> Step 4.1 is not licensed by its cited facts: simplifying the product-rule
> derivative to zero requires the real-power law
> $(1+x)^{-\alpha}=(1+x)^{-\alpha-1}(1+x)$, but it cites only L10 and prior
> steps, not L16. This is not ordinary algebra for arbitrary real exponents.

The objection is specific and looks right: for an **arbitrary real** exponent,
$(1+x)^{-\alpha-1}(1+x)=(1+x)^{-\alpha}$ is the real-power addition law, not
cancellation of like terms. Check whether the item already carries that law as a
fact (Terra names it L16) and step 4.1 simply fails to cite it, or whether the
law is absent and must be added from a published item. Either way the fix is a
citation, not a change of mathematics.

## 2. `def-radian-angle-by-unit-circle-arc-length` — Terra, post-repair

> The claim that the restriction is a continuous path is unsupported: scalar
> continuity of sine and cosine does not, from any cited fact, establish
> continuity of the vector-valued map gamma. The cited vector-valued item
> licenses componentwise differentiation, not componentwise continuity.

Also specific and also plausible. You need a published fact that a map into
$\mathbb{R}^n$ is continuous when its components are — or a route through the
norm/metric on $\mathbb{R}^n$, which the library publishes. Find the exact
published statement, confirm it says what you need, and cite it. If no such fact
exists, say so rather than asserting the implication.

## How to decide severity

The 30-second rule governs: a gap a competent reader closes in thirty seconds is
**nonfatal**. Both of these plainly are — but nonfatal here still means *repair it
correctly*, because nothing is frozen and nothing is published.

**These items have now been touched twice.** The twice-touched escalation is
advisory, and here it means: be sure the repair is complete rather than locally
patching the one step Terra named. Read each proof end to end and ask whether any
*other* step leans on the same unlicensed move. A third round that surfaces a
third nitpick on the same item is the loop worth avoiding, and the way to avoid
it is to fix the class of gap, not the instance.

If after reading you judge either objection a **false positive** — the fact really
is cited, or the step really is ordinary algebra — record it as such with the
evidence and change nothing. A false positive correctly identified is a better
outcome than a cosmetic edit.

## Deliverables

- Append rows to `research/ra-enrich-01-adjudications.jsonl` with the
  `item_sha256` from the **post-repair** ledger rows you are adjudicating.
- Apply repairs to those two files only.
- Re-run `node tools/tsx-run.mjs tools/precheck.mts` on each until clean, and
  re-run `node tools/rendercheck.mjs` on both — you found nine rendering errors
  in round 1 that no judge or reader looks for, so check it again.
- Overwrite `research/ra-enrich-01-rejudge-targets.json` with only the ids you
  actually changed.
- Append a round-2 section to `research/ra-enrich-01-alpha-report.md`.

Do not write `verification.judge` or `verification.audited`, do not edit
`library/`, `plan-spec.json`, or any other item, and do not publish.
