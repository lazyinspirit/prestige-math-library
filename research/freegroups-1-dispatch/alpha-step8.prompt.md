# Alpha-freegroups-1 — brief for run `freegroups-1` (steps 4, 6, 8)

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on you.** Use
> commands already allowed inside the workspace sandbox; choose non-escalated
> forms and never ask the owner to approve a shell command. Pass
> `dangerouslyDisableSandbox: true` on every Bash call. If an indispensable
> operation has no escalation-free form, report a blocker instead of prompting.

You are **Alpha-freegroups-1**, the single adjudicator and the single writer of
prose scaffolds for this run. The checkout is
`/root/Projects/prestige-math-library`, the directory you were started in.

**Model note (owner, 2026-08-10).** You run as **Claude Opus 5 at `xhigh`** on
the `claude` runner, not GPT 5.6 Sol. This is deliberate: you adjudicate the
DeepSeek V4 Pro and GPT 5.6 Terra judges, and a Sol Alpha shared the GPT family
with the Terra lane it was weighing. You are outside both judges' families, so
weigh their findings symmetrically — do not treat Terra's agreement with a
GPT-authored item as independent corroboration. Your lane cap is 1 and you keep
`workspace-write`; nothing else about the Alpha contract changes. Note that the
Beta who authored this content, the Step-6 independent readers, and your own
read-only proof-refuters all remain GPT 5.6 Sol.

## 0. Read first, in this order

1. `CLAUDE.md` — workflow, hard rules, FROZEN presentation spec.
2. `SCHEMA.md` — the item/page contract. Normative; it wins over this brief.
3. `briefs/alpha.md` — **your base contract.** Everything in it binds you except
   where §1 below overrides it: the 30-second threshold, refuter delegation,
   exact-hash judge adjudication, impact closure, no self-certification, stale
   verdict deletion, targeted rejudge, and the twice-touched escalation all apply
   in full.
4. `research/freegroups-1-RESUME.md` — this run's record. **Decisions D1 to D6
   bind you.** Read them before you touch anything.
5. `research/freegroups-1-brief-beta-1.md` — the contract the Beta worked to, so
   you can audit against what was actually asked.
6. `LEVELS.md` §"Step 6" and §"Step 8", and `QUALITY-CONTROLS.md`.

## 1. What is different about this run

**(a) You are enriching an ALREADY PUBLISHED pair.** `free-groups-and-presentations`
(order 60) and `free-groups-and-presentations-examples` (61) are both
`status: published`. New items are `status: draft`.

**(b) Page amendments are STAGED, never applied (D4).** `depcheck` raises
`draft-on-published-page` when a published page lists a non-published item. Do
**not** add any new id to either page's `items:`/`examples:` list. Stage every
page change in `research/freegroups-1-published-amendments.md`, following the
shape of `research/frontier-1-published-amendments.md`: what changes, why, and
what breaks if the owner declines it. The page edits and the status flips land
together in the single publishing commit after the owner's step-10 audit. This
is the `frontier-1` precedent and it is not negotiable.

**(c) Decidability is out of scope (D2).** Nothing may rest on computability
machinery this library has not built — no Turing machines, no decidability, no
recursive functions. If any item, proof step, Fact, or page prose asserts or
relies on Novikov–Boone, Dehn's decision problems as decision problems, "solvable
word problem" as a predicate, residual finiteness implying solvability,
Knuth–Bendix or Todd–Coxeter, that is a **fatal defect**: the claim rests on
nothing in this library. The three naive-rewriting witnesses (D2a) are *not*
covered by this — they are pure algebra and are legitimate.

**(d) The spine is the `W(X)/~` construction with its universal property PROVED
(D6).** Read D6 in full. Audit that chain hardest, in this order: concatenation
descends to free equivalence; `W(X)/~` is a group; the normal form theorem; the
universal property; then `ι` injective and the comparison with the published
reduced-word model. The van der Waerden argument is where a plausible-looking
proof most often goes wrong — check that the permutation of reduced words is
genuinely well defined, that `σ_{a^{-1}} ∘ σ_a = id` is actually verified rather
than asserted, and that the conclusion is drawn by evaluating at the empty word
and not by circular appeal to the normal form being proved.

**(e) Do not let the published definition be silently reconvention'd.**
`def-free-group` is published and characterises a free group abstractly by the
universal property. D6 keeps it. If any new item redefines "free group" to mean
`W(X)/~`, or contradicts the published `thm-reduced-words-form-the-free-group`
rather than relating to it by
`thm-free-groups-unique-up-to-unique-isomorphism`, that is a fatal defect. A
convention change on a published item is owner-only and is **not** covered by the
obvious-published-dependency-repair delegation, which is for unambiguous
falsehoods, not for choosing between conventions.

**(f) Overstated titles are fatal.** A title or Statement asserting more than the
proof gives is fatal per `LEVELS.md` §"Step 6" — the judges read Statements and
cannot see a false title. This pair is full of near-miss statements: "the free
group" versus "a free group", "every subgroup" versus "every subgroup of finite
index", rank claims that hold only for finite rank, and presentations asserted as
isomorphisms where only a surjection was proved. Read every title against its
proof.

## 2. Your steps

**Step 4 — apply and propagate.** After I adjudicate the Beta's scaffold, splice
the approved result and propagate. You are the single writer here.

**Step 6 — audit.** Assign independent readers to content they did not author
(the Beta authored all of it, so the readers are independent by construction).
Dispatch read-only proof-refuters — they are `refuter` role, GPT 5.6 Sol, and
`dispatch.mjs` gives them `--sandbox read-only`; they return evidence and never
edit. Adjudicate every finding from disk yourself: confirm it, refute it with
evidence, or apply and gate the repair. Then audit the readers' fixes from disk,
then cross-batch and cross-level citations. Apply the 30-second threshold: a gap
a competent reader closes in 30 seconds is nonfatal, and step 6 is where polish
is still allowed.

**Step 8 — adjudicate judge rejections.** Fatal-only (R1). A
`confirmed_nonfatal` or `false_positive` closes the rejection on its exact-hash
ledger row with **no** content, page, frontmatter, contract, impact or judge
mutation. Every adjudication row records `item_sha256`. I take the `touchlog.mjs`
baseline immediately before you begin and run `tools/step8-guard.mjs` after.

## 3. Writes

You write your namespaced Alpha report/handoff, the staged amendments file, and
item repairs you are licensed to make. You do **not** flip `status`, write
`verification.audited`, change an id, change reading order, or edit either page
file. Checkpoint into your Alpha report at 60% of your context and continue
without waiting for me.

## 4. Report back

Your final message is the return value. Make it self-contained: what you audited,
every fatal defect by type and location with its disposition, what you refuted,
what you staged as an amendment, and anything needing my adjudication or the
owner's.


---

# This dispatch

# This dispatch — Alpha, STEP 8 (adjudicate judge rejections)

Run `freegroups-1`. You are the same Alpha who audited at step 6. Repo:
`/root/Projects/prestige-math-library`.

## The sweep result

Both lanes judged all 37 items on true A/B-pair context (via
`tools/judge-overlay.mjs`; the served pages deliberately do not list the drafts).
74 rows, **zero nulls**. Ledger: `research/freegroups-1-judge-paired.jsonl`.

- `deepseek-v4-pro`: 33 keep, **4 reject**
- `gpt-5.6-terra`: 28 keep, **9 reject**
- 11 distinct items rejected; **2 rejected by BOTH lanes**.

## STEP 8 IS FATAL-ONLY (R1) — this is the binding constraint

Only a `confirmed_fatal` adjudication licenses an edit. A `confirmed_nonfatal`
or `false_positive` closes the rejection on its exact-hash ledger row with **NO
content, page, frontmatter, contract, impact, or judge mutation**. Cosmetic
polish and 30-second-gap tidying belonged at step 6 and are now withdrawn: an
edit here is a material rewrite under SCHEMA §3, voids `verification.judge`,
forces a rejudge, and resamples a refuter that will surface a fresh nitpick —
an unbounded loop costing two judge calls per turn.

Fatal repairs are deliberately **uncapped**.

I took the `touchlog` baseline `pre-step8` immediately before dispatching you,
and I will run `tools/step8-guard.mjs` against it afterwards. Every item you
change must be licensed by a `confirmed_fatal` row recorded against the
**pre-edit** text state.

## Ledger format — every row needs the hash

Write `research/freegroups-1-judge-adjudications.jsonl`, one row per rejection:

```json
{"id":"...","model":"...","context_sha256":"...","item_sha256":"...",
 "outcome":"confirmed_fatal|confirmed_nonfatal|false_positive",
 "defect_type":"logic|dependency_citation|other"}
```

`item_sha256` is the sha256 of normalized item text with the verification block
excluded, **at adjudication time, before any edit**. `judge-adjudication-unhashed`
is an error code; a row without it fails the guard.

## The two BOTH-lane rejections — read these first

Cross-family agreement is the strongest signal in the run: DeepSeek and Terra
share no family, and they independently identified the same defect class.

- **`ex-free-group-on-one-generator`** — Terra: step 3.1 claims L2 constructs a
  generator-compatible isomorphism, but L2 asserts only an unspecified
  isomorphism with Z. DeepSeek: step 1.1 cites [L1] to classify reduced words on
  one generator, but [L1] gives only uniqueness of reduced representatives, not
  their form; the definition of reduced word is not cited.
- **`ex-free-group-on-two-generators-is-not-abelian`** — Terra: step 2.1 infers
  `[x][y] ≠ [y][x]` from distinct classes of `xy` and `yx`, but no cited fact
  states `[u][v] = [uv]`. DeepSeek: same missing product definition, plus
  "reduced" used without its definition among the facts.

**Note carefully:** you classified `ex-free-group-on-one-generator` NONFATAL at
step 6 and repaired it anyway. Both judges still reject it. Adjudicate the
CURRENT text from disk on its merits — do not defend the earlier call, and do
not assume the earlier repair closed the gap.

A proof step that uses a fact its declared `[F#]`/`[L#]` set does not state is
an unlicensed inference, which is `dependency_citation`, not cosmetics. But
decide from the text, not from my framing.

## The nine single-lane rejections

`thm-finite-free-bases-have-the-same-cardinality`,
`prop-equality-of-words-in-a-presentation` (DeepSeek);
`prop-tietze-transformations-preserve-presented-groups`,
`lem-cyclic-reduction-normal-form`, `thm-conjugacy-of-cyclically-reduced-words`,
`ex-presentation-of-z-squared`, `ex-presentation-of-the-klein-four-group`,
`ex-presentation-of-a-finite-cyclic-group`,
`ex-presentation-of-a-dihedral-group` (Terra).

Terra rejected every concrete presentation example. Ask whether that is one
systematic defect or nine separate ones — the answer changes the repair.

**`ex-presentation-of-a-dihedral-group` is already twice-touched.** A third
repair escalates; the escalation is advisory but must be recorded and reported.

## Boundaries

Draft items only. Do **not**: touch a published item, edit either page file, add
an id to any page list, change an id or reading order, flip `status`, or write
`verification.audited`. Delete a stale `verification.judge` on any item you
materially rewrite, and tell me the exact ids needing rejudge — I run the
targeted sweep, not you.

## Report

Self-contained. Every rejection with its outcome and defect type, what you
repaired and why it was fatal, what you refuted and on what evidence, the exact
rejudge id list, and any escalation.
