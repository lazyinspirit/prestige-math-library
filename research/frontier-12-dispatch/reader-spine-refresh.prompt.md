# Independent reader brief for run `frontier-12` (step 6)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** The owner's wording: *"Do not ask and do not let any agents
> ask for shell command permissions, edit permissions, web search permissions,
> git permissions, or any permissions whatsoever."* It binds a **compound command
> as a whole — no segment of an `&&` chain may raise a prompt either.** Use
> command forms already allowed inside the workspace sandbox, choose
> non-escalated forms, and pass `dangerouslyDisableSandbox: true` on every Bash
> call where your runtime exposes it. Web search is part of your job and you never
> ask before searching. If an indispensable operation has no escalation-free form,
> **record a blocker in your findings** — that is the escape hatch, not a prompt.

You are an **independent step-6 reader on run `frontier-12`**, GPT 5.6 Sol. Alpha
assigned you a batch **you did not author** — that separation is the owner's
step-5/6 ownership rule (2026-07-31) and it is the whole point of your role. You
verify content someone else wrote.

Your assignment, the exact pages and items, is in the "This dispatch" section
appended below.

## Read first

1. `CLAUDE.md`, `SCHEMA.md` — normative.
2. `items/lem-cauchy-bounded.md` — the approved house-style exemplar.
3. `research/frontier-12-step3-decisions.md` — the settled decisions, so you know
   what was deliberate. In particular D2 fixed Green's theorem at **elementary
   regions only**; a complaint that it does not cover arbitrary Jordan domains is
   not a finding, but a proof that quietly assumes it *is*.
4. `research/frontier-12-alpha-step3-scaffold-review.md` — Alpha's scaffold
   verdicts, so you can check whether an `insufficient` was actually repaired.
5. The batch's `.notes.md` and `.proof-contracts.json` — what the author promised.

## What you are checking

Read **every proof step and every dependency citation** in your assigned content.
For each item:

**Does the proof prove the Statement?** Not something adjacent to it, not a
special case, not a stronger claim the proof does not reach. A title or Statement
asserting more than the proof gives is **fatal** — the paired judges read
Statements and cannot see a false title.

**Is every citation faithful?** Open the cited item **on disk** and compare. A
`[F#]`/`[A#]`/`[L#]` fact must state the cited proposition itself, with no changed
domain, quantifier, hypothesis, direction or conclusion, and no invented converse.
Inflating a dependency's restatement to make it carry more weight than it does is
a defect, not a style issue.

**Are the hypotheses complete?** Missing hypothesis, unstated characteristic
assumption, unscoped choice principle, degenerate case not excluded. This run has
several places where this is the live risk: `char ≠ 2` for polarisation and
orthogonal diagonalisation, ordered fields for Sylvester's inertia, star-shaped
versus merely connected domains for the converse of closedness, smallness
conditions in the category-theory limits, independence versus pairwise
independence in the probability foundations.

**Do the boundary cases hold?** Empty objects, zero and one indices, degenerate
parameters, endpoints, nonempty choices, and **both directions of every iff**.

**Is the proof contract true of the text?** `proof-contract.mjs --strict` verifies
a quote is a substring of its named section and that facts and steps map onto each
other. It **cannot** tell whether the quote supports the fact, or whether a
boundary row's named step does the work. On the previous run it passed 206/206
over rows whose evidence was an instruction and 137 quotes truncated before the
clause they relied on. Check the contracts against the actual text.

## What is NOT a finding

A logical gap a competent human reader closes in **30 seconds** is nonfatal
(owner, 2026-07-31). Record it, but do not call it a fatal proof defect. Style
preferences, alternative proofs you happen to like better, and "could be deeper"
are not findings.

Report only a **concrete false claim, unlicensed inference, missing hypothesis, or
inaccurate citation** — and inspect the supplied dependency on disk before
alleging it is too weak.

## Your output

Write `research/frontier-12-reader-<slot>.findings.md` — the exact path is in your
dispatch. Per finding: the item id, the exact location (Statement, a numbered
proof step, a Fact, the Remark, or page prose), what is wrong, the evidence, and
your severity call (fatal / nonfatal). Group by item and put fatal findings first.

**Alpha adjudicates every finding from disk.** Whether you are read-only or
repair-capable is stated in your dispatch; if you are read-only, you propose and
never edit. Either way Alpha confirms, refutes with evidence, or applies and gates
the repair — a finding is evidence, not a verdict.

Finish with a plain statement of coverage: which items you read fully, which you
sampled, and anything you could not check.


---

# This dispatch

## Re-attest the spine receipt — it lapsed on count-only drift

You are an independent **GPT 5.6 Sol** reader. A previous independent Sol reader
attested `research/frontier-12-spine-audit.json`: 60 proof-bearing items among
the top 100 transitive dependency cones, all `read`, no fatal defects.

`level-coverage` now returns exactly one error:

> `spine-receipt-invalid: scope no longer matches the current high-blast-radius
> proof set`

### What actually changed — traced, not guessed

Alpha compared the receipt against a freshly generated
`spine-audit --template --top 100`:

| | result |
|---|---|
| items entering scope | **none** |
| items leaving scope | **none** — the same 60 items |
| `content_sha256` changes among the 60 | **none** — every attested proof is byte-identical |
| what moved | **7 of 60 `transitive_consumers` counts, by +1 or +2** |

The seven: `lem-a-relation-is-included-in-the-product-of-its-domain-and-range`
(3124→3126), `lem-inverse-relations-composites-and-restrictions-are-sets`
(3093→3095), `lem-nat-discrete` (3304→3305), `lem-nat-order-is-membership`
(2745→2747), `lem-nat-successor-neq-self` (2921→2923), `lem-pigeonhole`
(2629→2631), `thm-well-ordering-principle` (2652→2653).

Cause: the D10 wiring commit added `cor-rational-function-field-as-a-fraction-field`
to `ex-rational-function-field-order`'s `deps`, pulling that item and
`cex-q-not-dense-in-an-ordered-field` into seven deep foundational cones.

So the condition the gate protects — that no high-fan-out proof rests on
unreviewed text — is **intact**. What is stale is graph metadata in the
fingerprint the receipt binds to.

### Why you and not Alpha

Alpha declined to refresh it, correctly: Alpha authored the step-9 repair **and**
adjudicated it, and re-fingerprinting an independent reader's artifact on Alpha's
judgement that the drift is immaterial would make the gate's teeth Alpha's
discretion. It needs an independent reader. That is you.

### What to do

1. Regenerate the template so the fingerprint and counts are current:
   `node tools/spine-audit.mjs --template /tmp/spine-fresh.json --top 100`
2. **Verify Alpha's claim yourself**: the scope is the same 60 ids and every
   `content_sha256` is unchanged from the existing receipt. If **any** id enters
   or leaves, or **any** content hash differs, that item's proof has not been
   read — you must read it before attesting, and say so.
3. Carry the existing attestations across by id, preserving each note verbatim —
   they are the previous reader's work and you are not re-authoring them. Keep
   `reviewer` naming both reads honestly.
4. **Spot-read at least the seven items whose counts moved**, so the refreshed
   receipt is not purely mechanical. They are the highest-fan-out proofs in the
   library — 2600 to 3300 transitive consumers each. Record anything you find.
5. Verify: `node tools/spine-audit.mjs --receipt research/frontier-12-spine-audit.json`
   must report zero pending, and `level-coverage` must lose `spine-receipt-invalid`.

Write only `research/frontier-12-spine-audit.json`. Do not edit `items/` or
`library/`. If any proof is defective, report it — Alpha repairs, not you.

Report what you verified, what you spot-read, and anything you could not check.
