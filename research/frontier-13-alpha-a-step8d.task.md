## Step 8d — the seven live single-lane rejections nobody adjudicated

You are the **lead Alpha** for run `frontier-13`. The level is otherwise complete
and the owner has asked to publish it. It cannot publish: the post-step-7 hard
receipt gate (`level-coverage.mjs --verify-current-context`) was never run on
this level, and running it now surfaces **seven items whose CURRENT frozen
context carries a live judge rejection with no exact-hash adjudication of yours
on record**.

Every one of these follows the same history: the item was rejected in the main
sweep, you adjudicated it `confirmed_fatal`, it was repaired, it was rejudged at
~09:52 on 2026-08-15 — and in that rejudge **one lane still rejects**. The
second-round rejection was never read.

Your job is to adjudicate each of the seven against **the text on disk right
now**, and to record an exact-hash row for each.

### The seven, with the live rejection verbatim

1. **`ex-frobenius-on-f-four`** — context `c4165c3db966`, **gpt-5.6-terra**
   rejects (deepseek keeps):
   > Step 3.1 mis-cites L1: L1 says the second Frobenius iterate is the
   > fourth-power map, not that the fourth-power map is the identity. The
   > identity follows from the swap in step 2.1, but it is not a consequence of
   > L1 as claimed.

2. **`ex-gram-determinant-of-two-vectors`** — context `bedeb7cb6bc8`,
   **deepseek-v4-pro** rejects (terra keeps):
   > Fact L2 restates Cauchy-Schwarz as a squared inequality, but the cited
   > theorem states the unsquared inequality; squaring is an additional
   > derivation, so the cited item does not state what L2 asserts.

3. **`ex-lifting-a-primitive-root-through-powers-of-five`** — context
   `b7b0680540a5`, **deepseek-v4-pro** rejects (terra keeps):
   > L2 overstates its source: the cited lemma is stated only for a generator of
   > a finite cyclic group, but L2 asserts the order formula for any element of
   > finite order without citing the needed fact that the element's cyclic
   > subgroup has that order. Step 1.2 uses this stronger form.

4. **`ex-symmetric-reduction-in-two-variables`** — context `90e5933109bf`,
   **gpt-5.6-terra** rejects (deepseek keeps):
   > [L1] is stronger than its cited theorem statement: that statement asserts
   > only existence of Q(e1,...,en), not that lexicographic leading-monomial
   > cancellation produces it. Step 1.1 relies on this added algorithmic claim.

5. **`prop-carmichael-function-as-maximal-order`** — context `c64776202eea`,
   **gpt-5.6-terra** rejects (deepseek keeps):
   > L2 says the unit group is a direct product, but its cited structure theorem
   > only gives an isomorphism to an external direct product. Thus treating the
   > chosen tuple as an actual unit is not licensed as written.

6. **`rem-tower-and-wowzer-bounds-in-regularity`** — context `6730312a4612`,
   **gpt-5.6-terra** rejects (deepseek keeps):
   > The wowzer claim is overstated: a sequence can depend strictly on the index
   > yet remain bounded below by half its initial parameter. Then every
   > refinement may use that fixed lower parameter, so the displayed proof gives
   > a tower bound, not a wowzer.

   **Read this one with particular care.** Your step-8b round already corrected
   this remark from wowzer to tower once, on essentially this ground. Terra says
   the current text still overstates. Either the earlier correction did not take
   in full, or Terra is re-reporting a defect already fixed. Determine which from
   the text on disk, not from the earlier ledger row.

7. **`thm-triangle-counting-lemma-for-regular-triples`** — context
   `d1621746a4ed`, **gpt-5.6-terra** rejects (deepseek keeps):
   > The statement permits epsilon=0 via the library's 0-regular convention, as
   > the companion example uses it. But step 1.1 applies L1, whose strict
   > fewer-than-epsilon times X conclusion cannot hold at epsilon=0; no separate
   > zero-regular case is proved.

   **Also read with care.** This is a boundary case of exactly the class that
   twice hid a fatal defect on this run behind a templated `not_applicable`
   contract row. Terra names a concrete convention (`ex-complete-and-empty-pairs-are-zero-regular`
   is on the companion page and does use 0-regularity). Check whether $\epsilon=0$
   is genuinely admitted by the Statement, and if it is, whether step 1.1's cited
   fact survives there.

### The rules that bind you here

- **Fatal-only (R1, owner 2026-08-03).** Only `confirmed_fatal` licenses an edit.
  `confirmed_nonfatal` and `false_positive` close the row and change **nothing** —
  no content, page, frontmatter, contract, impact or judge mutation. Do not tidy,
  do not polish, do not improve a restatement you merely dislike.
- **The 30-second rule.** A gap between proof steps a competent reader closes in
  30 seconds is nonfatal. It covers gaps *between steps*; a defect in the
  Statement itself is never 30-second. Note that four of these seven are
  citation-precision complaints about an `[L#]` restatement — and the house rule
  is explicit that a restatement may be an exact quote or the smallest faithful
  shortening, with **no changed domain, quantifier, hypothesis, direction or
  conclusion**. An inflated restatement over a sound argument is the dominant
  fatal class on this run; it is also the easiest thing to wave through. Decide
  each on whether the cited item's Statement actually says what the fact claims.
- **Inspect the cited dependency before agreeing or disagreeing.** Open it from
  disk. Do not reason about what it probably says.
- **Baseline `pre-step8d` is recorded.** After any repair,
  `node tools/step8-guard.mjs --touches research/frontier-13-touches.json
  --baseline pre-step8d --adjudications research/frontier-13-judge-adjudications.jsonl`
  must pass. Every item you change must be licensed by a `confirmed_fatal` row
  carrying `item_sha256` of the **pre-repair** text.
- **Check consumers before you edit.** Two of these (6 and 7) sit on the
  regularity page whose items cite each other. A narrowing that closes a hole
  here can open one downstream. `node tools/consumers.mjs <id>` and
  `impact-audit.mjs` are there for this.

### What you write

1. **`research/frontier-13-judge-adjudications.jsonl`** — append one row per
   rejection, shape
   `{id, model, context_sha256, item_sha256, outcome, defect_type?, stage: "step8d", note}`.
   `context_sha256` is the context hash named above, **not null** — four earlier
   rows on this ledger carry `context_sha256: null` and fail the gate's shape
   check for it. `item_sha256` is the pre-repair hash from
   `node tools/item-hash.mjs <id>`. `defect_type` (`logic`,
   `dependency_citation`, `other`) is required on `confirmed_fatal`.
2. **`research/frontier-13-alpha-a-step8d.md`** — your report. For each of the
   seven: what the judge alleged, what the cited dependency actually says, your
   outcome and why, and for a repair, exactly what changed and which consumers
   you checked.

Name in the report any item you repaired, so the orchestrator can rejudge exactly
those and no others.

---

## Second job — two high-risk items have no `risk_review` at all

`gates.mjs --step 6` is **also** blocked on disk right now. `risk-report.mjs
--require-reviewed` fails with:

```
ERROR risk-review-missing [cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field]
ERROR risk-review-missing [thm-naturality-of-the-adjunction-bijection-is-transposition-of-squares]
```

I checked every batch contract file: neither item has a `risk_review` key in any
of them, so this is not a disposition that lapsed after a repair — it was never
written. That matches finding 3 of your own step-10 report: seven refuter
dispatches produced prompts and no results, leaving 74 risk_review dispositions
silently unwritten, and these two were never recovered.

A `risk_review` is a disposition **only Alpha may write**. Write one for each,
into the owning batch contract file — `research/frontier-13-batch-1.proof-contracts.json`
for the corollary, `research/frontier-13-batch-6.proof-contracts.json` for the
theorem — then re-merge with `tools/merge-proof-contracts.mjs` and confirm
`node tools/risk-report.mjs --require-reviewed research/frontier-13-proof-contracts.json`
reports 0 errors.

Match the shape and the honesty of the existing complete records: `status`,
`reviewer`, and `notes` that state what was actually read, what mechanical
evidence is current, and — as the existing ones do — the limitation the gates do
not close.

`cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field` deserves a real
read rather than a pro-forma record. It is the item that took two repair rounds,
carried a false uniqueness claim in both title and Statement, and had a
DeepSeek countermodel ($R=\mathbb Z$, $S=\mathbb Z/2$, $f=1$, $P=0$, $Q=2$)
reproduced against it. Your own step-10 report calls it out for the owner's eye.
Its high-risk tier and its defect history point the same way.

**No permission prompts, from you or any subagent you dispatch** (owner,
2026-07-30, broadened 2026-08-11). Choose non-escalated command forms and stay in
the workspace sandbox. If you truly cannot proceed without new authority, record
a blocker in your report instead of asking.

Your read-only proof-refuter subagents are available and are the right tool for
items 6 and 7. They return evidence and never edit; you alone adjudicate.
