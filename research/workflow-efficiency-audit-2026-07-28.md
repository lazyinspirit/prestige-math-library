# Workflow efficiency audit — step 0 to 10, measured on `frontier-1`

**Owner request, 2026-07-28.** Audit the per-level workflow for time and token
efficiency, across Claude models and GLM 5.2, and recommend changes. The owner's
own proposals — shrink summary/Remark content, cut judging and auditing, possibly
delete step 8, possibly author with Sonnet 5 — are each addressed below, adopted
where the evidence supports them and contested where it does not.

**This is a PROPOSAL. `LEVELS.md` is unchanged; nothing here is in force.**

---

## 1. What the build actually cost

**GLM 5.2** (`research/frontier-1-cost.jsonl`, 292 logged calls):

| | |
|---|---|
| judge calls | **292**, for **212 items** |
| items called more than once | **75** — **80 redundant calls, 27% of all calls** |
| prompt tokens | **27,392,723** |
| completion tokens | 2,083,456 |
| **mean prompt per call** | **93,810** |

**Claude**, summed from subagent reports: **≈ 6.5M tokens**, of which the six
**authoring agents alone were ≈ 3.46M (53%)** — 508k to 628k each. The two Betas
were ≈ 650k combined, the two step-8 audits ≈ 644k, step 9 ≈ 414k, the 10a sweep
211k.

**Wall clock:** the authors ran 7–8 hours each. Almost none of that was writing.
One reported a single item holding a judge process **over 90 minutes**; several
ran watch loops re-checking for verdicts; all of them retried a `402` payment
error repeatedly because the harness treats it like a transient fault.

## 2. The finding everything else follows from

**Across steps 7, 8 and 9, ~40 defects were found and NOT ONE was in a numbered
proof step.** Every one was in a Statement paragraph, an Example paragraph, a
Remark, or a page summary. Seven consecutive builds carry that signature.

Look at *what kind* of prose failed, because this is the actionable part. Almost
none of it was mathematical exposition. It was **claims about the library**:

| defect | example from this build |
|---|---|
| false scope denial | "this library has no sum over a subset of an index range" — the other batch minted it at order 20 |
| a count | "half of this page cites claim 2" — 7 of 20 |
| a position | "developed on a **later** page" — the page is order 255, the citer 283 |
| citing an item for a claim it disclaims | a theorem citing its companion counterexample for a case that counterexample expressly excludes |
| a witness that witnesses nothing | `(1,1)/2` offered as outside the 1-norm unit ball; its 1-norm is exactly 1 |
| a title omitting a hypothesis its Statement carries | AC_ω dropped from two titles |

**These are not hard to write correctly. They are impossible to verify while
writing**, because each is a claim about a file the author is not looking at. That
is why they survive to the audit tiers and why the audit tiers are expensive.

**The owner's instinct is right, and it can be sharpened: the problem is not prose
volume, it is UNVERIFIABLE prose.** A Remark explaining why a hypothesis is needed
has never been wrong here. A Remark saying how many items on the page use it is
wrong roughly every other build.

## 3. Recommendations, in descending value

### R1 — Ban the class, and gate what remains. *Highest value, lowest cost.*

Three rules, statable in one line each and enforceable in briefs today:

1. **No count in prose.** Ever. Not "seven items", not "half of this page", not
   "three things take their shape from this". If a count matters, the reader can
   count. Every count written in this library's history has eventually been wrong.
2. **No positional claim that is not `deps`-derived.** No "later page", no
   "earlier". If scope must be described, name the page id and let the renderer
   resolve position — or say "not built".
3. **Scope denials are scoped to THIS PAGE'S DECLARED PREREQUISITES, never to
   "the library".** This single rewrite is what fixed the ω-exponentiation defect,
   and it is the only form an author can actually warrant. A claim about the whole
   corpus requires knowledge no author has.

Then **build `prosecheck.mjs`** to catch mechanically what these rules ban:

- a numeral or number-word within N tokens of "item(s)", "page", "of this page";
- "later"/"earlier"/"below"/"above" within N tokens of a page reference, verified
  against `plan-spec.json` order;
- the scope-denial verb list (`develop`, `prove`, `contain`, `build`, `define`,
  `establish`, `introduce`, `have`) in library scope rather than prerequisite
  scope;
- a `[[wikilink]]` in a Statement or Facts block absent from `deps` (extends
  `citecheck`).

**Expected effect: it converts the dominant defect class from expensive human
reading into a gate that costs milliseconds.** It cannot catch everything — "a
witness that witnesses nothing" needs a reader — but on this build's evidence it
would have caught roughly half of ~40 defects before any agent read anything.

### R2 — Judge ONCE, on final text, after step 9. *Biggest saving on both budgets.*

Today the judge runs at step 6, during authoring. Then steps 7, 8 and 9 rewrite
prose, and SCHEMA §3 correctly requires deleting the verdict on any materially
rewritten item. **30 passes were destroyed this way, and 80 of 292 calls (27%)
were re-calls of an item already judged.**

Moving the judge to a single bounded sweep after step 9 gives:

- **212 calls instead of 292** — a 27% cut in GLM calls outright;
- **no destroyed passes ever**, because the text is final when it is judged;
- **authors that finish when their gates are clean.** This is the big Claude-side
  win: the authoring agents' 3.46M tokens and most of their 7–8 hours went on
  judge loops, watch timers and retry babysitting, not on mathematics.

The measured counter-argument is weak. The judge caught 5 defects during authoring
in this build; every one was in prose, and steps 8 and 9 read all 212 items
anyway. Nothing was found early enough to save downstream work.

### R3 — `--batch` only along real dependency edges. *Halves GLM prompt tokens.*

Mean prompt was **93,810 tokens**. The batch is most of it. Measured on this
build: a six-slug batch produced ~136k-token prompts at **one verdict per 15
minutes**, while the harness printed `batch context budget reached; omitted:` for
**three of five sibling pages on every call** — paid for, then discarded.

The cross-page edge set is computable in seconds. This build had **three edges
among twelve pages**, so **nine of twelve pages needed no batch at all**. I applied
this to today's re-sweep; it should be the rule:

> `--batch` takes exactly the pages the item's own page declares in `requires`
> **and** actually cites. Computed mechanically, never typed.

`--batch` earns its cost across a genuine dependency level. Across a frontier set
of mutually independent pairs it is close to pure waste.

**R1 + R2 + R3 together: roughly 27.4M → ~9M GLM prompt tokens, a ~65% cut**, with
*more* items judged on final text than today.

### R4 — Merge step 8 into step 9. *Adopts the owner's proposal, in the safer form.*

The owner proposes deleting step 8. The evidence supports **merging**, not
deleting, and the distinction matters.

Step 8 is productive — 11 defects here, 22 items plus ~14 summary corrections at
level 8. But in this build **step 9 read all 212 items anyway**, via six readers
Alpha dispatched, so step 8's findings were inside step 9's coverage. Two passes
over the same text, and the second was the complete one.

So: **one audit stage, fanned out.** Alpha's pattern — dispatch N readers, then
adjudicate every finding against the file before acting — is what should survive,
because it is what produced full coverage in one pass.

What must be preserved when step 8 goes:

- **The honest coverage statement.** Step 9's risk map was built from step 8's
  "here is what nobody read". A merged stage must produce that statement for the
  *owner*, not for a later stage.
- **The scaffolder's context.** Betas audit batches they scaffolded and catch
  their own errors — the `[3]^1` witness, the unexecutable `thm-recursion`
  instruction. Keep one scaffolder-authored reader in the merged fan-out.

### R5 — Redirect reading, do not reduce it. *This is where I contest the owner.*

The owner proposes reducing auditing. On the measurement, **reducing audit volume
is the change most likely to ship a defect**: the audits found ~40 real defects,
and the gates found none of them, because no gate reads prose.

But audit *effort* is badly allocated. Roughly 1,500 items across seven builds
have been read with **zero proof defects found**. Meanwhile every build finds a
dozen prose defects. So:

> **Read every line of prose. Sample proofs by risk rather than reading all of
> them.** Risk = long proofs, proofs the author flagged least-confident, and
> proofs nothing else depends on being right.

That is a large saving inside the audit tiers with no loss on the measured defect
distribution. **The honest caveat: this reasons from absence.** It is possible
proofs contain defects that readers are worse at spotting than prose defects.
Reading proofs is the only evidence we have that they are clean, so the sampling
rate should not go to zero, and any proof defect ever found should reset this rule.

### R6 — Shrink the surface. *Adopts the owner's first proposal.*

Page summaries and Remarks are where the defects live and **no mechanical tier
reads a page summary at all**. Shrinking them removes defect sites directly.

- **Page summaries stop describing the page.** No counts, no "the hardest proof
  here", no "every computation on the companion page". Mathematical orientation
  only — what the page is for and what a reader should take away.
- **Remarks justify, they do not survey.** A Remark saying *why* a hypothesis is
  needed is valuable and has never been wrong. A Remark surveying what else the
  library contains is the defect class.

This is not a cut to the library's substance: not one theorem, example or proof
is affected.

### R7 — Fix the harness's failure modes. *Small change, hours of wall-clock.*

- **Fail fast on `402 insufficient_credits`.** Today it is retried like a
  transient fault, inside a 7-minute timeout × 3 attempts ≈ 21 minutes per item.
  Multiple agents burned **hours** on a payment error that will never succeed.
  A 402 should abort the process immediately with a distinct exit code.
- **Preflight the balance once per sweep**, so a dead account is discovered in one
  call rather than ninety.
- **Snapshot `touchlog` after every item-modifying stage.** This build's ledger
  reported 0 repairs for a build with ~20, because two snapshots at the ends make
  everything a first appearance. Already recorded in `ARCHITECTURE.md` §4.
- **Count judge concurrency by invocation, not by process.** `ps | grep -c`
  overcounts 4×; it produced two false alarms in one day. `ARCHITECTURE.md` §5.

### R8 — Sonnet 5 for authoring: pilot it, do not switch blind.

The owner's proposal is plausible on the defect data — the authors' **proofs were
clean** and their prose was not, and prose quality is not obviously
model-limited.

But the authoring role did far more than write. In this build the authors:
refused a `justified_by` the scaffold demanded, on the ground that SCHEMA
restricts the field to well-definedness discharges; found `thm-recursion`
inapplicable because `β ↦ ω^β` is a class operation; caught the Abel indexing trap
and fixed it by re-choosing the tags; shipped the general Bonnet second MVT by
finding a route the scaffold did not have; discovered that a scaffolded false
statement **was not false** and restated it; and **deleted a judge pass one of them
had earned** rather than let it stand on text the judge never saw.

Those are the moments that keep this library correct, and they are judgement, not
throughput.

**This repo already has the right rule for this and it is not "try it and see":
`deepseek/deepseek-v4-flash` was adopted for 14× lower latency and reverted
because it passed an injected false claim. Never adopt a model without a test.**

So: **author one A/B pair with Sonnet 5 and one comparable pair with Opus 5 in the
same build, run the identical audit over both, and compare defect counts by class
and the number of scaffold errors caught.** If Sonnet matches on proofs and on
scaffold-error catching, switch the bulk and keep Opus for items the scaffold
flags high-risk. A blind switch trades a measured strength for an unmeasured
saving.

## 4. The judge got better, and the recorded precision number is stale

`CLAUDE.md`, `ARCHITECTURE.md` and every brief quote **21–24% precision** and
**0/3 on real historical defects**, measured 2026-07-25.

**On this build the judge issued 7 rejections and every one adjudicated so far has
been a real defect** — five confirmed by the agents that received them, two more
arriving from the current sweep and not yet adjudicated. Five of five is not 21%.

The plausible cause is that **the benchmark predates two changes**: the
`briefs/judge-conventions.txt` triage file, which stops it flagging 30-second
gaps, and the A/B pair context plus relevance-ordered batch, which stops it judging
an item without the page it cites. Both landed after the benchmark.

**Recommendation: re-run the benchmark before acting on the old number.** It is
quoted in four places to justify "adjudicate, do not comply", and that instruction
is still right — but if precision is now materially higher, the judge is a better
buy than the docs claim, which cuts *against* reducing judging and *for* R2's
"judge once, on final text, and act on what it says".

## 5. Summary of expected effect

| change | GLM | Claude | wall clock |
|---|---|---|---|
| R1 gate the prose class | — | large cut in audit load | large |
| R2 judge once, after step 9 | **−27% calls** | **large** — authors stop babysitting | **large** |
| R3 batch on real edges only | **−~50% prompt tokens** | — | large |
| R4 merge step 8 into step 9 | — | ~−650k | one stage |
| R5 redirect reading | — | moderate | moderate |
| R6 shrink summaries/Remarks | small | moderate | moderate |
| R7 harness fixes | small | small | hours |
| R8 Sonnet pilot | — | potentially −50% of 3.46M | — |

**Combined GLM: ~27.4M → ~9M prompt tokens (≈65%), while judging more items on
final text than today.** The Claude saving is dominated by R2 and R8 and is
plausibly of the same order.

**What I would not cut:** the eight gates (cheap, and they prove absence of whole
defect classes), the requirement that every item be read by one human-grade reader
before publish, and the honesty rules — never record a pass the judge did not
give, and never let a stale verdict stand on rewritten text. Those cost little and
are the reason the record can be trusted.
