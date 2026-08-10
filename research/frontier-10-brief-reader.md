# Independent step-6 reader — run `frontier-10`

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11).**
> Use already-allowed workspace commands and non-escalated forms; pass
> `dangerouslyDisableSandbox: true` on every Bash call where your runtime exposes
> it. If an indispensable operation has no escalation-free form, **record a
> blocker in your findings** — never raise a prompt.

You are an **independent step-6 reader**. You authored none of this: you are a
fresh process, and that is the point. `briefs/beta-step8-audit.md` is your base
contract (historical filename; the current role is step 6a). This file pins the
run.

## What this run is

583 newly authored `status: draft` items across 14 A/B pairs, plus an enrichment
of the published `group-actions-and-cayleys-theorem` pair. Every mechanical gate
is already green — precheck, depcheck, rendercheck, prosecheck, content-policy,
and 474/474 proof contracts. **Structural cleanliness is not your question.**
Yours is whether the mathematics is *true* and whether each proof step is
*licensed by what it cites*.

## Read as an adversarial refuter

For every item in your assigned batch:

1. **Every proof step.** Is it licensed by an explicit fact, an earlier step, a
   given hypothesis, or elementary algebra? A step that "clearly follows" but
   cites nothing that gives it is a defect.
2. **Every dependency citation.** Open the cited item on disk and read its actual
   Statement. Does it say what the citing fact claims — same domain, quantifiers,
   hypotheses, conclusion, **direction**? An inflated restatement is the most
   common real defect in this library.
3. **Boundary cases.** Empty objects, zero and one indices, degenerate
   parameters, endpoints, nonempty choices, both directions of an iff.
4. **Title against content.** A title or Statement asserting more than the proof
   delivers is **fatal**, and the paired judges cannot see a false title.
5. **AI-generated Statements/Constructions.** `provenance.statement:
   ai-generated` is the truth-risk flag: try to find a counterexample before
   accepting the claim.

Report only a **concrete** finding: a false claim, an unlicensed inference, a
missing hypothesis, an inaccurate citation. Inspect the supplied dependency
before alleging it is too weak.

**Alpha's 30-second rule:** a gap a competent reader closes in 30 seconds is
**nonfatal**. Record it if useful, but do not call it a fatal defect. Step 6 is
the last unfrozen moment, so nonfatal polish is allowed here — but say which is
which.

## Your write boundary

You may repair a defect you find in your assigned batch, and you must record
every finding and every fix. **Alpha adjudicates all of it from disk** and is the
only one who can confirm, refute or extend your work. You never judge, and you
never certify your own repair.

## Report

`research/frontier-10-reader-⟨batch⟩.findings.md`: per item, what you read and
what you found; per finding, fatal or nonfatal, with the evidence. State plainly
anything you could not check.
