# frontier-11 — Alpha step 8: adjudicate the judge rejections. FATAL-ONLY.

You are **Alpha on run `frontier-11`**, and you are the **sole adjudicator** of a
paired-judge rejection. The orchestrator runs gates and maintains ledgers and
never substitutes its own adjudication for yours.

## The sweep

`research/frontier-11-judge.jsonl` — 478 verdicts over 239 items, **zero nulls**,
so every row is a real verdict rather than a capacity refusal.

| lane | keep | reject |
|---|---|---|
| GPT 5.6 Terra | 150 | 89 (37%) |
| DeepSeek V4 Pro | 208 | 31 (13%) |

- **140 items** took a clean paired pass — not your problem.
- **21 items rejected by BOTH lanes** — adjudicate these first; cross-family
  agreement is the strongest signal available.
- **78 items split**, one lane rejecting.

Weight the lanes knowingly: Terra rejects at nearly 3× DeepSeek's rate, so a
Terra-only rejection is weaker evidence than an agreement. But **a rejection is
not refuted by the other lane passing** — the passing lane may simply have missed
it. Refute with evidence from disk, never with a vote count.

## R1 — STEP 8 IS FATAL-ONLY. This is the binding constraint.

**Only a `confirmed_fatal` adjudication licenses an edit to an item.** A
`confirmed_nonfatal` or `false_positive` closes the rejection on its exact-hash
ledger row with **no content, page, frontmatter, contract, impact or judge
mutation.** None. Not a typo fix, not a clearer word, not a tightened quote.

Why, in the owner's reasoning: any edit is a material rewrite under SCHEMA §3, so
a step-8 polish voids `verification.judge`, forces a rejudge, and resamples a
refuter that surfaces a fresh nitpick every stochastic run — an unbounded loop
converging on nothing. Cosmetic polish belonged at step 6 and that window is
closed.

**The 30-second rule still governs:** a logical gap a competent human reader
closes in 30 seconds is **nonfatal**. At step 8 you may not even polish it — you
record it and move on.

**Fatal repairs are deliberately uncapped.** A proof that keeps yielding real
fatal defects is either converging toward correctness or is actually false, and
both must run to conclusion.

## What is fatal here

Most rejections are one class: **a fact stated stronger than the dependency it
cites**, or a step not licensed by the facts it names. Judge that class
carefully — it is exactly the citation-fidelity rule, and the owner's wording is
that a fact must state the cited definition or theorem itself, with no changed
domain, quantifier, hypothesis, direction or conclusion, and no invented
converse. **Inflating a restatement so a proof appears to close is fatal**, even
when the underlying mathematics is true, because the citation is then false.

Distinguish that from: the fact is faithful and the reader must do 30 seconds of
work to see why it applies. That is nonfatal.

Specific ones to look at hard, all both-lane rejections:

- `def-path-polygonal-length-and-rectifiability-in-rn` — Terra says the singleton
  clause claims a *unique* path on `[a,a]`, and there are infinitely many. That
  reads as a plain mathematical error, not a citation defect.
- `thm-rectifiable-iff-coordinate-functions-have-bounded-variation` — indexes
  `R^n` coordinates `1..n` where this library indexes `0..n-1`. Check the
  library's actual convention before ruling.
- `thm-integral-logarithm-derivative-and-normalisation` — **both lanes**, and this
  is the RA-27b owner obligation. Terra: FTC applied without establishing `1/t`
  integrable on `[a,b]`. DeepSeek: `[L2]` omits an integrability condition.
- The determinant cluster — `thm-operator-determinant-is-basis-independent`,
  `cor-operator-determinant-by-row-reduction`,
  `thm-adjugate-identity-over-a-commutative-ring`,
  `cor-operator-determinant-on-the-general-linear-group`.

## The ledger you write

`research/frontier-11-judge-adjudications.jsonl`, one row per rejection:

```
{"id":…, "model":…, "context_sha256":…, "outcome":…, "defect_type":…, "item_sha256":…}
```

- `outcome` ∈ `confirmed_fatal` | `confirmed_nonfatal` | `false_positive`
- `defect_type` for fatal ∈ `logic` | `dependency_citation` | `other`
- **`item_sha256` is mandatory on every row** — the sha256 of the normalized item
  text (verification block excluded) **at adjudication time**, i.e. the pre-edit
  state. `tools/step8-guard.mjs` uses it against the `pre-step8` baseline I have
  already taken to prove every changed item was licensed. A row without it fails
  with `judge-adjudication-unhashed`; an item changed without a licensing fatal
  row fails with `nonfatal-edit`.

Adjudicate against the **exact frozen text the judge saw** — `context_sha256` and
`item_sha256` on the verdict row tell you what that was.

## After repairs

A repaired item's own `item_sha256` changes, so **it must be rejudged**; its
unedited page-mates are spared. Tell me exactly which ids to rejudge and I will
run `judge-sweep --items`.

## Output

`research/frontier-11-alpha-step8.md`: counts by outcome; every `confirmed_fatal`
with the defect and the repair; every `confirmed_nonfatal` and `false_positive`
with why, and an explicit statement that you changed nothing for those; the
rejudge id list; and anything unresolved.

No permission prompts, for you or any subagent. You have web access.
