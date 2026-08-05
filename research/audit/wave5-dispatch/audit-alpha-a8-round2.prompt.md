<!-- TEMPLATE. Copy into the audit Alpha prompt and substitute 5 (wave).
     The published-page audit workflow is AUDIT-WORKFLOW.md; this brief is its
     Alpha-side half for steps A6 and A8. -->

# Audit-Alpha brief — wave 5 (steps A6 and A8)

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> Claude runtimes pass `dangerouslyDisableSandbox: true` on every Bash call.
> If an indispensable operation has no escalation-free form, report a blocker.
>
> **Pass it on.** You dispatch independent readers and read-only proof-refuters;
> put this rule in their prompts verbatim.

> **Model/routing rule (owner, 2026-08-02; Alpha amended 2026-08-03;
> ALL-CLAUDE REROUTE 2026-08-05).** You are **`claude-opus-5`**, dispatched as
> an Anthropic subagent of the orchestrator session. The lanes you dispatch are
> now:
>
> - `--role certifier` → **`claude-sonnet-5`, read-only**, for the independent
>   current reading of any repair. It has `Read`/`Glob`/`Grep`/`WebSearch`/
>   `WebFetch` and nothing else, so it can check a source but cannot edit.
> - `--role audit-refuter` → **DeepSeek V4 Pro, read-only**, for adversarial
>   proof reading. **It is tool-less: it cannot open a file.** You must assemble
>   the item text and every cited dependency into a `--task` file. `dispatch.mjs`
>   refuses a refuter dispatched without one — that error means your context is
>   missing, not that the lane is broken.
>
> **The separation you used to get for free is gone, and one lane carries it
> now.** Audit-Beta is `claude-opus-5` — the same model as you. You adjudicate
> its findings and certify its repairs; the certifier is Sonnet, same family as
> both; the orchestrator is `claude-opus-5`. **The DeepSeek refuter is the only
> cross-family reader on the audit side.** So: your own agreement with a Beta
> determination is weak corroboration, not strong; "this proof reads correctly
> to me" is the least reliable evidence available to you; and a DeepSeek refuter
> finding deserves more weight than its terseness suggests, while a Sonnet
> certifier's agreement deserves less. Dispatch refuters generously —
> deliberately more than feels necessary — because they are the only lane that
> can see what your family cannot.

> **Context continuity (owner, 2026-08-01).** At 60% of your own context
> length, and before a context-heavy operation when practical, update
> `research/audit/wave5-alpha.md` with your active substage, owned
> artifacts, completed checks, open constraints, and exact next action. Never
> record credentials or copied transcripts. After compaction, read it, verify
> the action-critical files, and continue immediately.

> **Mandatory recovery before a resumed Alpha role (owner, 2026-08-02).**
> Before taking any audit action, read in full `CLAUDE.md`,
> `AUDIT-WORKFLOW.md`, `research/audit/RESUME.md`, this full Alpha report, all
> wave findings/A3/adjudication ledgers, and repair/touch/impact/contracts/
> manifest receipts. Verify `git status`, the current commit, the relevant
> current item texts, and their current hashes. Append a recovery receipt to
> `wave5-alpha.md` naming files read, baseline, inherited open actions, and
> exact next action. Only then act.

You are the wave's **sole adjudicator**. The orchestrator runs gates and keeps
ledgers; it does not substitute its judgment for yours. Your 30-second
threshold is binding: a logical gap a competent human reader closes in 30
seconds is **nonfatal** — record or polish it if useful, never escalate it as
a fatal defect or start a repair cycle on it.

## Triage — the standing rule (verbatim, binding on you and everyone you dispatch)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal
  quirks; imperfection at the level of the letter.

## What the orchestrator hands you at A6, and must not be redone

The orchestrator precomputes the mechanical parts so your context goes to
mathematics (`AUDIT-WORKFLOW.md` §7, "A6 efficiency protocol"). Spot-check each,
then use it:

- **A URL liveness table** for every URL in the wave's ledgers and on disk in the
  scoped items. The orchestrator's shell has outbound network; your Sol readers'
  sandboxes do not. You own the **disposition** of anything dead or off-topic —
  not the fetching.
- **The pure/material split** from `tools/audit-split.mjs`. A4 rewrites the
  frontmatter of every scoped item, so "changed" means nothing on its own:
  wave 3 was 198 pure retags / 26 material out of 224. Your impact
  classification is that list plus a wholesale disposition of the pure class.
- **Stage touch snapshots** (`pre-A4`, `post-A4`, `pre-a8`). **Take none
  yourself** — wave 2's per-item snapshots made a 95 MB ledger and a phantom
  "51 twice-touched" that cost an escalation to disprove.

**Your reading surface is NOT the changed set.** Measured wave 3: **6 of the 11
confirmed fatal defects were in items A4 left byte-identical.** A retro-audit
that reads only what it changed can only find what it introduced. Use
`risk-report` levels to *order* your reading, never to bound it — the level is a
size heuristic, not evidence — and say explicitly in your report what you read in
full and what you sampled. Dispatch refuter and certifier lanes generously; they
are read-only and independent, and wave 3 ran 14 concurrently without
contention. Refuters are now HTTP calls rather than processes, so they are
cheaper in memory than that measurement assumed — but each needs its context
assembled into its `--task` file.

## A6 — Audit

1. **Certify every Beta repair from disk, not from its report:** changed text,
   dependency lists, provenance tags, deleted stale judge blocks, gate status.
   You may confirm, refute, amend, revert, or extend. A repair you author is
   certified by an independent reader you assign — no author certifies its own
   repair. Write `verification.verified` with `scope: published-audit` and
   `delegated_by: owner` only after the independent current reading of the
   final text.
2. **Adjudicate D2 concurrences and classification escalations:** for every
   ledger row claiming `established-knowledge`, independently decide whether
   the statement is a standard established result. Concur
   (`alpha_concurred: true`) or refuse. Beta's recognition alone never clears
   it. On a refusal, and on every item Beta escalated as undecidable, YOU
   determine the final label under the positive-determination standard
   (owner, 2026-08-02): `ai-generated` only when you are sure the claim is
   genuinely AI-invented — a recoverable restatement or alteration of
   established mathematics is `ai-altered`; record your determination and
   rationale in the ledger row you amend.
3. **Dispatch read-only proof-refuters** on every `risk-report` high/critical
   item, every `ai-generated` seed, and the largest-cone consumers. They use
   the judges' adversarial standard, inspect a cited dependency before
   alleging it is too weak, and return evidence, never edits. You alone
   adjudicate each finding from disk.
4. **Audit every cross-batch and cross-level edge** against
   `research/audit/wave5-audit-manifest.json`: read the source item's use
   and the target item on disk; the citation must be semantically and
   mathematically exact — right statement, right hypotheses, right direction,
   no hidden stronger claim. Reconcile your report against the generated
   checklist so omission is visible.
5. **Disposition every load-bearing `genrisk` seed** in
   `research/audit/genrisk.json`, tried in order: retag → restate → unfold →
   narrow → verified-generated (counterexample-searched, refuter-read,
   judged). A seed needing a deletion, id change, or reading-order change is
   `owner-queue` with evidence. Repairing a proof never establishes a
   Statement; probe an AI-generated claim, witness, or refutation for
   counterexamples whenever truth is in doubt.
6. **Disposition every `impact-audit` consumer** of any changed public
   interface with concrete evidence: `still-licensed`, `repaired`, or
   `not-load-bearing`.
7. Before A7, merge the batch contracts and re-run the
   `QUALITY-CONTROLS.md` gates; every high/critical item needs your
   `risk_review` record.

## A8 — Adjudicate judge rejections (Alpha-n)

A rejection from **either** judge now lands on text that has cleared the step-6
audit, so Alpha-n adjudicates it from disk. **Adjudicate, do not
comply.** Each rejection gets either a fix, with the defect named, or a
refutation, with a verbatim quote from the cited item. Append a per-model,
per-context owner decision to `research/audit/wave5-judge-adjudications.jsonl` so
step 10 can separate confirmed fatal logic/dependency-citation detections from
nonfatal findings and false positives. Every row also carries `item_sha256`, the
full sha256 of the normalized item text (its `verification:` block removed) as it
stood when you adjudicated. Then delete
`verification.judge` on anything materially rewritten and re-run both judges
only on what changed.

**A8 is fatal-only (R1, owner 2026-08-03) — now enforced, not only written.**
§9's rule stands: only `confirmed_fatal` licenses a mutation, and
`confirmed_nonfatal`/`false_positive` get their ledger row and nothing else.
Snapshot before you adjudicate and gate the stage after:

```
node tools/touchlog.mjs snap research/audit/wave5-touches.json "pre-a8"
node tools/step8-guard.mjs --touches research/audit/wave5-touches.json \
  --baseline "pre-a8" --adjudications research/audit/wave5-judge-adjudications.jsonl
```

`nonfatal-edit` names an item you changed that no confirmed-fatal finding
licensed: revert it, or record the fatal adjudication that justifies it. Fatal
repairs are uncapped.

Any Step-8 public-interface repair also re-runs `impact-audit.mjs`; regenerate
the audit receipt and repeat the final `level-coverage.mjs
--verify-current-context` gate after its targeted paired rejudge. A stale
receipt or pair of ledger rows is not publication evidence.

Standing instruction: re-read your own Remarks with a numbered step's suspicion.
Remark prose is where falsehoods hide.

## Escalation

An item refuted or repaired more than once (judge ledger + touch ledger,
measured from disk) escalates to the orchestrator's personal audit; report
such items in a separate list and still make necessary fixes. Only deletions,
id changes, and reading-order changes wait for the owner; everything else in
the R1 delegation is yours to settle, and your settlement is recorded with its
evidence in `research/audit/wave5-alpha.md`.


---

# This dispatch

# Wave 5, A8 round 2 — 25 rejections to adjudicate

Paired coverage is now **209/209**: every item has a real verdict from both
lanes at its current frozen context. Getting there took two extra sweeps and
both are worth knowing about, because they change how you should read these.

**The Sonnet lane had refused 207 calls at concurrency 16**, returning 69 nulls.
Re-run at concurrency 4 it answered normally. So a large share of the list below
is Sonnet reading items it never actually read the first time — these are fresh
readings, not repeats of verdicts you already saw.

**Your 6 fatal A8 repairs invalidated 91 items frozen contexts** — 87 of which
you never touched. Their contexts embed the text of dependencies they cite, so
repairing a dependency re-froze every consumer. Those were rejudged too.

## The 25

| model | item | the allegation |
|---|---|---|
| `claude-sonnet-5` | `cor-monotone-converges-iff-bounded` | Remarks claim the forward implication (converges implies bounded, defined in the Statement as holding for every sequence) fails without boundedness, citing a nondecreasing unbounded sequence; but such a sequence diverges, so it does not converge and the forward implication holds vacuously for it. Th |
| `claude-sonnet-5` | `rem-completeness-routes` | The remark asserts 'no inconsistency is possible between them' because of uniqueness of the complete ordered field up to isomorphism, but never cites thm-uniqueness-complete-ordered-field (not wikilinked, not in deps) - a load-bearing named fact used with nothing establishing it. |
| `claude-sonnet-5` | `lem-geometric-sequence-null` | Step 3.5 multiplies M/h' < n by h'>0 to get M <= n h', citing L9, but L9 only licenses products of nonnegative-bounded inequalities and M is arbitrary (possibly negative), so the citation does not license this move. |
| `claude-sonnet-5` | `thm-contractive-implies-cauchy` | Remark 'Where completeness is spent' says the least-upper-bound property (thm-cauchy-criterion-via-lub, L13) is used only in step 10.1, but L13 is actually cited in step 8.1, not step 10.1, which cites only L14 and prior steps. |
| `claude-sonnet-5` | `cex-sqrt-k-differences-null-not-cauchy` | Step 1.2 concludes M' >= 0 from M' := \|M\| >= M, but the cited fact L6 only states \|t\| = t for t>=0 and \|t\| >= t, omitting the \|t\| >= 0 clause of lem-of-abs-value that this inference actually needs. |
| `deepseek-v4-pro` | `cex-sqrt-k-differences-null-not-cauchy` | Fact [L6] incorrectly attributes \|t\|=t for t>=0 to lem-of-abs-value; the lemma only gives \|t\|>=0 and -\|t\|<=t<=\|t\|, not that equality. This is a specific inaccuracy in a cited fact. |
| `claude-sonnet-5` | `lem-euclidean-polygonal-paths-are-continuous` | Step 1.1 asserts each coordinate of gamma_i is an affine real function of t, hence continuous, citing only L3 (the componentwise vector-continuity criterion). L3 does not establish that a scalar affine function of t is itself continuous; no algebra-of-continuous-functions or affine-continuity fact i |
| `claude-sonnet-5` | `thm-open-connected-subsets-of-rn-are-polygonally-connected` | Step 2.1 builds a polygonal path between any two points of U by reversing one polygonal path and concatenating it with another, but cites no fact for either operation (tag is just [step 1.1]). The analogous concatenation move in the cited lemma lem-polygonally-reachable-set-is-clopen explicitly invo |
| `deepseek-v4-pro` | `lem-euclidean-polygonal-paths-are-continuous` | Step 1.1 claims each coordinate is an affine real function, hence continuous, but provides no fact establishing that affine functions on R are continuous. None of the cited facts (L1–L3) state this, and no additional lemma is cited. This missing dependency leaves the continuity of the pieces unjusti |
| `deepseek-v4-pro` | `lem-polygonally-reachable-set-is-clopen` | [L2] states a geometric property (segment stays in ball) citing only the lemma that d2 is a metric. That lemma does not provide this property; the step is unsupported. |
| `claude-sonnet-5` | `thm-metric-spaces-are-tychonoff-and-perfectly-normal` | Step 7.1 asserts Y is T3, T5/2, T2, T1, T0 'by the implications already proved on this page' but its own tag cites only step 6.1, L7, L8, none of which establish completely-regular-implies-regular or T4-implies-T3 (thm-completely-regular-implies-regular, thm-t4-implies-t3 are page siblings but not i |
| `deepseek-v4-pro` | `lem-normality-via-shrinking` | Fact [L2] incorrectly attributes the property 'complementation reverses inclusion' to [[def-topological-space]], which defines only open/closed sets; the reversal of inclusion is not stated there. |
| `claude-sonnet-5` | `thm-continuity-characterised-by-nets` | Step 2.1 infers p in closure(A) from 'every neighbourhood of p meets A', but this equivalence (thm-closure-characterisation-top) is neither in the Facts block (A1-A3) nor in deps; A2 only gives closure iff net-convergence, not the meets-every-neighbourhood criterion, so the move is uncited. |
| `claude-sonnet-5` | `thm-hausdorff-iff-net-limits-are-unique` | Step 2.2 builds E from triples (U,V,z) with U,V neighbourhoods and needs U cap U', V cap V' to remain neighbourhoods of p,q for directedness, but no fact for finite intersections of neighbourhoods being neighbourhoods is listed or cited (only A1, A2 are cited), unlike sibling items on the same page  |
| `claude-sonnet-5` | `lem-filter-derived-net-preserves-convergence-and-cluster-points` | Step 2.1 concludes N in F by invoking upward closure of the filter, but this axiom is never established: A1 only defines the derived-net index set and A2 only gives the neighbourhood formulations of convergence, neither states that filters are closed upward under supersets. |
| `claude-sonnet-5` | `thm-compactness-via-nets-filters-and-ultrafilters` | Steps 2.1 and 2.2 rely on the biconditional that p is in the closure of a set exactly when every neighbourhood of p meets that set (used both directions: closure implies meeting in 2.1, meeting implies closure in 2.2). This fact is never listed among L1-L4 nor cited to any source (e.g. thm-closure-c |
| `claude-sonnet-5` | `thm-first-countable-frechet-urysohn-sequential-hierarchy` | Step 1.2 claims seqcl(C) subseteq C follows from sequential closedness but cites only [L2], which merely gives A subseteq seqcl(A) subseteq closure(A); L2 never asserts seqcl(C)=C for sequentially closed C, and no fact in the block states the definition of sequentially closed needed to license that  |
| `claude-sonnet-5` | `fs-every-subnet-of-a-sequence-is-a-subsequence` | Fact A2 cites lem-index-map-grows both for the definition of subsequence as x-compose-h with h strictly increasing and for the claim that such h is injective, but that lemma only proves the growth bound n_k>=k for strictly increasing maps and never defines subsequences or states injectivity, so the  |
| `claude-sonnet-5` | `ex-neighbourhood-indexed-net-converging-to-a-closure-point` | L1 attributes every neighbourhood of p meets A to thm-closure-characterised-by-nets, but that item's actual statement is the net-closure biconditional; the meets-A fact is only an internal step of that item's own proof, sourced there from thm-closure-characterisation-top, which is not among this ite |
| `claude-sonnet-5` | `ex-finite-subset-net-for-unordered-real-summation` | ReportFindings tool was called per the active review instructions; a genuine citation-fidelity defect was found and reported (L2 overstates thm-sum-rule's disjoint-union hypothesis). |
| `claude-sonnet-5` | `thm-unordered-summability-of-real-families` | Reported a specific missing-citation/logical-gap defect: the identification of the net limit with the produced series sum is never justified via a cited uniqueness-of-limits fact. |
| `claude-sonnet-5` | `ex-free-ultrafilter-converging-in-a-convergent-sequence-space` | Step 1.1 derives freeness of U from {k} intersect T_{k+1}=empty, which requires filter closure under intersection (F3) and properness (F2), i.e. fact L3, but the step cites only L1 and L2, neither of which state those filter axioms. Step 3.1 has the same gap, using upward closure (F4, part of L3) wi |
| `claude-sonnet-5` | `ex-cocountable-closure-detected-by-a-net-not-a-sequence` | Step 1.1 infers 2 in closure(A) from 'every neighbourhood meets A' but no cited fact licenses that equivalence: L1/L2 give only the countable-complement fact and uncountability, and L4 (closure iff a net in A converges) presupposes 2 in closure(A) rather than establishing it from neighbourhoods meet |
| `claude-sonnet-5` | `ex-arens-space-is-sequential-not-frechet-urysohn` | Step 1.2 never discharges the case infinity in C before claiming a constructed neighbourhood of infinity is disjoint from C; e.g. C={infinity} is sequentially closed with zero x_n in C, breaking the claimed dichotomy. |
| `deepseek-v4-pro` | `ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy` | Fact L1 does not state the definitions of the separation axioms; it is only a list of names. Steps citing it for those definitions (e.g., step 1.2 for Hausdorff, step 1.5 for T0) lack a stated fact to support the conclusion. |

## What to do

Adjudicate each from disk and record one exact-hash row in
`research/audit/wave5-judge-adjudications.jsonl`: `{id, model, context_sha256,
outcome, item_sha256, at, defect_type?}`. `outcome` is `confirmed_fatal`,
`confirmed_nonfatal` or `false_positive`. `item_sha256` is required and must be
the pre-edit text.

**A8 is fatal-only.** Only `confirmed_fatal` licenses an edit; the other two
outcomes close on the ledger row with no content, page, frontmatter or judge
mutation. Your 30-second rule governs the classification, not whether to polish.

**A fatal repair here re-triggers the drift you just saw**: it will invalidate
the frozen context of every item citing what you repair, and each of those needs
a rejudge before the coverage gate passes. That is not a reason to under-call a
fatal — a false statement stays false — but it is a reason to make the smallest
correct repair, and to tell me exactly which items you touched so I can rejudge
precisely rather than sweeping broadly.

Nine of these are nets/filters items Sonnet is seeing for the first time. Read
them on their merits, not as a batch.

Do not write `verification.judge`. Report the exact rejudge list. Take a
`touchlog` baseline before your first edit. Append "A8 round 2" to
`research/audit/wave5-alpha.md`.
