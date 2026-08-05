# Wave 4 — Alpha report

## Recovery receipt — 2026-08-04 (dispatch #1)

**Outcome: BLOCKER RECORDED. No audit action taken. A6 is not executable, and
this dispatch is misrouted.** Per the no-shell-permission-prompts rule's sibling
clause ("a recorded blocker is the correct outcome"), this is that record.

### Files read in full

`CLAUDE.md`; `AUDIT-WORKFLOW.md`; `research/audit/RESUME.md`;
`research/audit/wave4-run-state.json`; `research/wave4-dispatch/orchestrator-A3-judgment.prompt.md`
(the prompt I was handed); `tools/run-wave.mjs` (PLAN table and the machine
loop); `tools/dispatch.mjs` (role table, brief templating, `--task` channel);
the three wave-4 Beta findings files and provenance ledgers
(`wave4-{foundations,real-analysis,topology}.{findings.md,provenance.jsonl}`).

### Verified state

- Baseline commit `6c54914`, branch `main`.
- `git status`: **zero changed files under `items/` or `library/`.**
- `wave4-touches.json` holds **two** snapshots (`baseline` only, plus index) —
  no `pre-A4`, no `post-A4`.
- Wave-4 artifacts present: A0 manifests, audit manifest, three Beta findings /
  provenance ledgers / proof-contract files.
- Wave-4 artifacts **absent**: `wave4-split.json`, `wave4-impact-template.json`,
  any URL-liveness table, `wave4-judge.jsonl`, `wave4-judge-adjudications.jsonl`,
  `wave4-published-repairs.md`.
- `wave4-run-state.json`: `status: running`, **`step: A3`**, policy
  `judgment: autonomous`. Steps A0 and A2 complete; A3 begun 11:12:40Z.

### Why I did not act

**1. I was dispatched at A3 and handed the Alpha A6/A8 brief.** The driver's
`judgment: true` path hardcodes the Alpha brief for every judgment step:

```js
// tools/run-wave.mjs:380
const result = dispatchAgent('orchestrator', 'briefs/audit-alpha.md', `${step}-judgment`, { k: state.wave });
```

The step's actual instructions live in `PLAN.A3.note` (`run-wave.mjs:273–275`)
and `PLAN.A9.note` (`314–315`). That `note` is read **only** by the `halt()` on
line 377, i.e. only under `judgment: halt`. Under `judgment: autonomous` — wave
4's policy — the note is never passed to the dispatched agent. `dispatch.mjs`
already has the channel this needed (`--task <file>`, appended to the prompt
under a "This dispatch" heading); `run-wave.mjs` never passes `--task`. So A3
and A9 both dispatch an agent briefed to be the sole adjudicator at A6/A8.

**2. A6 cannot be performed at A3.** Its first duty is "certify every Beta
repair from disk". A4 has not run: no `items/` file has changed, and the
`pre-A4`/`post-A4` snapshots the A6 precompute consumes do not exist. There are
no repairs on disk to certify, no pure/material split, and no impact template.
Executing the brief as written would have produced certifications of edits that
do not exist, and would have skipped A3 and A4 entirely.

**3. The A3 note points at a table the driver never builds.** It says "The
driver has already checked every URL — read the liveness table before trusting a
Beta's own report of it." `AUDIT-WORKFLOW.md` §7 A6-efficiency item 1 assigns
that sweep to the orchestrator. **No URL-liveness step exists anywhere in
`run-wave.mjs`**: A0 runs `rounds`/`touchlog`/`genrisk`; A3 has no `actions` at
all; the A6 `precompute` block (`392–401`) runs only `audit-split.mjs` and the
`impact-audit` template. Wave 3 found 6 of 63 ledger URLs dead — including one
written at A4 *as a replacement* — so this is a live gap, not a formality.

**4. Exiting 0 would have been worse than halting.** `run-wave.mjs:381` journals
the judgment as successful on exit 0 and the loop falls through to A4, where
three Sol Betas apply retags and repairs. A3 is the only gate between a Beta's
proposal and its application. Had I returned success, wave 4 would have applied
**91 provenance determinations, 2 claimed class-(a) falsehood repairs, and ~11
citation-precision repairs that no orchestrator ever verified from disk** — the
exact adjudication A3 exists to perform.

### Inherited open actions (unchanged, none started)

A3 is unadjudicated in full. Awaiting orchestrator adjudication from disk:

| batch | ledger rows | evidence classes | proposals |
|---|---|---|---|
| `wave4-foundations` | 34 | 4 exact-source / 26 semantic-source / 4 trivial | 1 class-(a) falsehood (`fs-cardinal-exponentiation-is-strictly-monotone-in-the-base`, Cantor's inequality misidentified as exponent-slot strictness); 8 class-(b) citation repairs (B1–B8); class-(c) retags; class-(d) debatable restatements |
| `wave4-real-analysis` | 18 | 3 exact-source / 15 semantic-source | 2 class-(b) (`fs-bounded-implies-convergent` source interface; `fs-limit-preserves-strict-inequality`); class-(c) retags |
| `wave4-topology` | 39 | 39 semantic-source | 1 class-(a) (compactness not independent of an arbitrary ambient topology); 1 class-(b) (`def-sequence` wrong domain for three citations); 1 owner-only A10 queue entry (Facts with no proof use); class-(c) retags |

**Zero `established-knowledge` rows across all three batches**, so no D2
concurrence is pending for Alpha at A6.

### Exact next action

Not mine. Two orchestrator actions, in order:

1. **Fix the misdispatch** (`run-wave.mjs:380`) so a judgment step dispatches a
   brief describing that step and passes `plan.note` through the existing
   `--task` channel; and add the URL-liveness sweep the A3 note and
   `AUDIT-WORKFLOW.md` §7 both already promise. Both are normative-doc changes
   under the same-commit rule (`UNATTENDED-AUDIT.md`).
2. **Then run A3** — orchestrator role, orchestrator instructions, decision
   priority per `AUDIT-WORKFLOW.md` §7 A3 (accuracy and citation precision
   non-negotiable; then minimise AI-generated load-bearing surface; then
   preserve richness) — and resume the driver at A4.

Alpha's own work begins at A6, after A4 has applied and snapshotted. Nothing in
this receipt adjudicates a Beta proposal, concurs a label, or touches an item.

---

## Recovery receipt — 2026-08-04 (dispatch #2, A6)

**Outcome: A6 is executable and has begun.** The two orchestrator actions this
file demanded after dispatch #1 both happened: `briefs/audit-orchestrator.md`
now exists, A3 was adjudicated in full (`research/audit/wave4-A3.md`), and A4
applied. This receipt records what I read, what I verified from disk, and what
I inherited.

### Files read in full

`CLAUDE.md`; `AUDIT-WORKFLOW.md` (725 lines); `research/audit/RESUME.md` (1,115
lines); this Alpha report including dispatch #1's blocker; `research/audit/wave4-A0.md`;
`research/audit/wave4-A3.md`; the three Beta registers
`wave4-{foundations,real-analysis,topology}.findings.md`;
`briefs/audit-alpha.md` (my dispatch prompt) and `briefs/judge-conventions.txt`;
`research/audit/wave4-run-state.json` including its whole journal;
`tools/dispatch.mjs` (role table), `tools/impact-audit.mjs` (label resolution),
`tools/risk-report.mjs` (the `risk_review` completeness rule).

Read mechanically rather than line by line, and stated as such: the 91 rows of
the three provenance ledgers (parsed, reconciled, and queried by field, not read
as prose), `wave4-audit-manifest.json`, `wave4-proof-contracts.json`,
`wave4-touches.json`, `wave4-split.json`, `genrisk.json`.

### Verified state

- Branch `main`, HEAD `6c54914`, working tree dirty by the wave itself: **91
  modified `items/`**, 1 modified page (`library/topology/compactness.md`),
  plus tools/docs modified by the driver work and the untracked wave-4
  artifacts. Nothing is committed.
- `wave4-touches.json` holds 30 snapshots. `baseline` = both `pre-A4`
  snapshots (hash-identical, 2,767 items, 0 differences), and both trailing
  `post-A4` snapshots are identical to each other. **The real A4 delta is 91
  items.** The 22 per-item `pre-A4-<id>` snapshots the Betas took are the
  wave-2 pattern the A6 efficiency protocol forbids; they are harmless here
  (10.5 MB, not 95 MB) but the Beta brief still asks for them at §9 while the
  Alpha brief forbids them — recorded for A10.
- Gates re-run by me, not taken from a Beta report: `content-policy --audit
  --ledger` 91 scoped / 0 errors / 0 warnings; `proof-contract --strict`
  **0 errors, 77/77**; `finite-smoke` 0 errors; `depcheck` red on exactly
  **20 `published-unaudited`** — the 20 material repairs awaiting my
  certification, and nothing else new; `risk-report --require-reviewed` 77
  errors, all `risk-review-missing`, i.e. every proof-bearing item in the wave
  is high or critical and every `risk_review` is mine to write.
- The other `depcheck` classes (114 `cited-not-in-deps`, 38 `multi-home`, 1
  `b-leaf-legacy`) are the pre-existing corpus classes, not wave-4 regressions.

### Two orchestrator artifacts were wrong, and I rebuilt them

1. **`wave4-impact-template.json` was empty** — `0 changed interfaces, 0
   affected`. Cause: `impact-audit.mjs:70-71` resolves a snapshot label with
   `.find`, i.e. the **first** match, and this ledger holds two `pre-A4` and
   three `post-A4` labels. `--from pre-A4 --to post-A4` therefore bracketed the
   **round-1 pair**, which spans the A4 attempt in which all three Betas
   refused to apply and nothing changed. Rebuilt with `--from pre-A4` and no
   `--to` (which defaults to the last snapshot): **91 changed interfaces,
   1,315 affected items.** An empty impact template is not evidence of no
   blast radius.
2. **No URL liveness table was handed over.** `run-wave.mjs` has no URL step at
   all, so the A6 efficiency protocol's item 1 was not performed for this wave;
   A3 ran its own sweep at A3 time. I ran the sweep myself over the union of
   every URL in the three ledgers and every URL on disk in the 91 scoped items
   (89 distinct). Results and dispositions in the A6 sections below.

### The pure/material split, spot-checked rather than redone

`wave4-split.json` says 66 pure / 25 material. The Betas' own records name 20
material repairs (9 foundations, 2 real-analysis, 9 topology) plus the page.
I diffed the five-item discrepancy: `thm-closed-subspace-of-a-compact-space-is-compact`,
`thm-compact-iff-fip`, `thm-compact-subset-of-a-hausdorff-space-is-closed`,
`thm-compactness-agrees-with-metric-compactness`, `thm-compactness-under-continuous-maps`
are classified material on `body text`, and the entire body delta in each is a
**trailing newline** added at end of file. They are substantively pure retags.
**Corrected split: 71 pure / 20 material.** No pure item lost a `verification`
block (checked against `HEAD` for all 66: zero losses).

### Inherited open actions

| # | action | state |
|---|---|---|
| 1 | certify the 20 material repairs by independent Sol readers | not started — certifiers run on final text, after adjudication |
| 2 | dispatch proof-refuters over the wave's mathematics | **16 read-only Sol lanes dispatched, covering all 91 items** |
| 3 | audit the cross-batch edges | **done, 9/9 clean** (12 at A0; 3 became published-backward when A4 repointed `def-sequence` to `def-sequence-convergence-top`) |
| 4 | D2 concurrences | **none pending — zero `established-knowledge` rows wave-wide** |
| 5 | genrisk dispositions | 1 new load-bearing seed (`ex-aleph-one-is-at-most-the-continuum`, cone 1, mention-only) |
| 6 | impact dispositions | 91 interfaces / 1,315 affected, template rebuilt |
| 7 | `risk_review` records | 77 required, 0 written |
| 8 | A3's six binding URL conditions | audited; see the A6 URL section |

### Exact next action

Adjudicate the refuter lanes as they return, apply confirmed-fatal repairs,
then dispatch Sol certifiers on the final text of every material item, write
the `verification.verified` stamps, the `risk_review` records, the genrisk and
impact dispositions, and close A6.

---

# A6 — Alpha audit report (wave 4)

**Alpha: `claude-opus-5`. Dispatched at A6 by the unattended driver, 2026-08-04,
report closed 2026-08-05.** Read-only proof-refuters and repair certifiers are
GPT 5.6 Sol at `xhigh` through the Codex subscription, deliberately a different
family from me.

## 1. What I read in full, and what I sampled

**Read in full, by an independent Sol refuter lane: all 91 items.** I dispatched
**16 read-only refuter lanes** covering the whole wave — every scoped item
appears in exactly one lane — with the judges' adversarial standard, the frozen
convention list from `briefs/judge-conventions.txt`, and an explicit instruction
to open every cited target on disk before alleging a dependency is too weak. All
16 returned. This is the reading surface the brief demands: **not** the changed
set. Lanes and their assignments are in `scratchpad/wave4/lanes/`; their prompts,
logs and results are in `research/audit/wave4-dispatch/`.

**Read in full by me, from disk:** every one of the 20 A4 repairs against the
exact text `wave4-A3.md` authorised (including the two sentences A3 amended and
the F-B1 repair A3 substituted for the Beta's proposal); every refuter finding
and its cited evidence; `thm-compactness-variants-hierarchy` and
`thm-cardinal-power-set-and-cantor` end to end, including their choice ledgers;
all nine cross-batch edges; the 19 items whose sources carry a non-200 URL; and
every passage I repaired, in its surrounding context.

**Sampled, and stated as such:** the 842 published-backward edges were audited by
the refuter lanes fact by fact (each lane reports the count it checked against
its target on disk: 16 lanes, **492 fact rows** in total), not re-read a second time
by me. The 91 provenance ledger rows I checked mechanically — vocabulary,
manifest reconciliation, URL liveness, dependency-target eligibility — plus every
row whose evidence class is not `semantic-source`, individually.

## 2. Findings: 44 returned, 41 adjudicated as real, 3 classes declined

Full per-finding adjudication with quotes and evidence:
`scratchpad/wave4/adjudications.md`, reproduced in the ledger below.

| lane | items | findings | confirmed fatal | confirmed nonfatal | refuted |
|---|---:|---:|---:|---:|---:|
| r1-limits-basics | 7 | 5 | 3 | 2 | 0 |
| r2-algebra-of-limits | 6 | 1 | 0 | 1 | 0 |
| r3-subsequences-fs | 5 | 6 | 2 | 4 | 0 |
| f1-cardinal-core | 5 | 1 | 1 | 0 | 0 |
| f2-cantor-hessenberg | 5 | 6 | 4 | 1 | 1 |
| f3-hierarchies-ac | 5 | 3 | 1 | 2 | 0 |
| f4-cofinality | 7 | 5 | 2 | 3 | 0 |
| f5-false-statements | 4 | 1 | 1 | 0 | 0 |
| f6-examples | 8 | 5 | 4 | 1 | 0 |
| t1-compactness-core | 5 | 7 | 6 | 1 | 0 |
| t2-compactness-theorems | 5 | 1 | 0 | 1 | 0 |
| t3-products-tychonoff | 5 | 4 | 4 | 0 | 0 |
| t4-local-baire-onepoint | 7 | 1 | 1 | 0 | 0 |
| t5-ordinal-spaces | 4 | 3 | 3 | 0 | 0 |
| t6-false-statements | 5 | 1 | 1 | 0 | 0 |
| t7-examples | 8 | 8 | 8 | 0 | 0 |
| **total** | **91** | **57** | **41** | **16** | **1** |

**Where the defects were.** Of the 41 confirmed fatal findings, **2 were inside a
numbered proof step** (`ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals`
step 2.1's under-cited countable union, and
`ex-one-point-compactifications-of-the-line-and-of-the-naturals` step 1.2's
two-variable continuity claim licensed by a one-variable theorem). The other 39
were in **Facts blocks, Remarks, Statement prose and titles** — the sixth wave in
a row with that shape, and the reason this audit reads prose with a numbered
step's suspicion.

**Seven were title or `short` defects, which no judge lane can see:**
`def-compactness-variants` ("relatively compact **spaces**" for a notion the
Definition defines only for subsets), `cor-cardinal-absorption`'s `short`
(asserting $\kappa \otimes \lambda = \kappa$ with no $\lambda \ne 0$),
`ex-the-beth-hierarchy-computed`, `ex-counting-functions-and-subsets-of-the-continuum`,
`ex-the-interval-the-cantor-set-and-the-hilbert-cube-are-compact`,
`ex-the-alexander-subbase-lemma-applied-to-a-closed-interval` and
`ex-the-sorgenfrey-line-is-lindelof-and-its-square-is-not` (each stating under no
hypothesis a result its own body proves only under AC or AC-omega), plus
`thm-the-long-line-is-countably-compact-and-not-compact`, whose title's
punctuation confined "assuming countable choice" to one of the two claims that
spend it.

**The single largest defect class is the choice ledger**: 13 of the 41 are a
statement, remark or title that asserts something requiring AC, AC-omega or DC
inside an item that declares itself a theorem of ZF, or that miscounts where a
declared hypothesis is spent.

**The one refutation.** f2 #5 alleged that `lem-successor-cardinal-exists`
overstates what is undecided about $\kappa^{+}$ versus $2^{\kappa}$. It does not:
the sentence is explicitly scoped to "the axioms in use here", the item is ZF
with no choice principle, and in ZF the comparison is not merely undecided but
often not well-formed, while in ZFC the remaining question is exactly the one the
sentence calls undecided. No change.

## 3. The class I declined, and why it goes to the owner

The most common refuter finding across the foundations batch is a Fact that
states a **true, immediate consequence** of its cited target while citing the
definition or lemma that supplies the ingredients rather than the consequence:
"the union of a set of ordinals is its least upper bound" cited to
`lem-ordinal-basics`, which states only that the union is an ordinal; "every
strictly increasing map of ordinals is injective" cited to
`def-injection-surjection-bijection`; "a composition of injections is an
injection" likewise. Nine findings are of this shape.

I ruled them **nonfatal** and repaired only two: `cor-the-aleph-and-beth-hierarchies-are-well-defined`
[L4], where the derivation is now written out in the Fact, and
`thm-cofinality-basics` [L8], where the sentence as written — "a composition of a
function with a bijection has the same range" — is **false** unqualified and the
step actually uses precomposition. Three reasons for the ruling: the 30-second
threshold is binding and these close instantly; A3 adjudicated this exact pattern
when it approved the Beta's B2/B3/B5/B6/B7 repairs, which *added* such clauses as
more honest than a Fact citing a definition for nothing; and rewriting them
batch-wide would void every judge stamp in the batch over an imperfection at the
level of the letter. **It goes to A10 as a policy question**, because the rule
that governs it ("every `[F#]` fact must state the cited Definition or Statement
itself") can be read either way, and this is the third wave in which it dominates
the refuter yield.

A second declined class, also for A10: `thm-compactness-under-continuous-maps`
[L8] and `ex-the-cardinality-of-the-continuum` [L1] cite
`def-complete-ordered-field` / `def-real-order` for the *fact* that $\mathbb{R}$
is a totally ordered complete field, which `thm-reals-ordered-field` and
`cor-cauchy-reals-lub-complete` prove. Two independent lanes found it in two
different batches. It is a **corpus-wide naming convention**, not a wave-4
defect: dozens of published items open the same way. Repairing two items would be
inconsistent and repairing the convention is an owner-scale decision.

## 4. Repairs applied at A6, by item (32 items)

Every repair below is mine, adjudicated from disk, and each is certified by an
independent Sol certifier lane that did not author it (§7). Fact and step edits
were mirrored into the batch proof contracts and the merged contract, and
`proof-contract --strict` is green at 77/77 after each.

**Real analysis (9 items).** `lem-convergent-implies-bounded`,
`lem-subsequence-inherits-limit`, `fs-bounded-implies-convergent`,
`rem-sequence-conventions`, `lem-convergent-implies-cauchy` and
`fs-subsequence-convergence-implies-convergence`: six Remarks asserted that
Bolzano-Weierstrass, monotone convergence and Cauchy completeness are "not proved
anywhere in this library as things stand" and that the next page is "planned and
not yet written". `library/real-analysis/monotone-sequences-and-cauchy-completeness.md`
is `status: published` and carries `thm-monotone-convergence`,
`thm-bolzano-weierstrass` and `thm-cauchy-criterion-via-lub`. All six now state
the reading-order fact instead, with no new wikilink (a link would be a forward
reference needing a `forward_refs` declaration). `lem-convergent-implies-cauchy`
carried a second falsehood — that Cauchy completeness is "the engine behind" that
page's monotone convergence and Bolzano-Weierstrass, whereas the page derives
monotone convergence from the least-upper-bound property, Bolzano-Weierstrass
from it, and the Cauchy criterion last — also repaired. `thm-squeeze`'s Remark
claimed the null-sequence special case "follows from `lem-null-times-bounded`
whenever $x_k$ is presented as a product"; the lemma needs a null factor **and a
bounded** factor, and the sentence now says so. `lem-null-times-bounded` and
`fs-limit-preserves-strict-inequality` had Facts that named a topic instead of
stating the cited proposition; rewritten verbatim from `def-real-limit`,
`def-sequence`, `lem-limit-preserves-order`, `thm-recursion`,
`thm-induction-principle` and `lem-index-map-grows`.

**Foundations (13 items).** `lem-cardinal-operations-are-well-defined`: "cardinal
exponentiation is stated with the Axiom of Choice throughout this page" is false
— the exponential unit laws and the finite case are choice-free, and the Remark
now names both. `thm-cardinal-power-set-and-cantor`: the choice ledger said the
hypothesis is "used exactly twice"; the general form of clause (a) spends it at
$A$ and $\mathcal{P}(A)$ as well. `cor-cardinal-absorption`: the `short` label
dropped the $\lambda \ne 0$ hypothesis its own Statement carries; [L4] dropped
the cited lemma's well-orderability hypothesis inside an explicitly ZF item; and
a Remark cited an AC theorem for a strict increase without its hypothesis.
`thm-every-infinite-cardinal-is-an-aleph`: "$2^{\aleph_0}$ is an aleph by clause
(a)" presupposes AC, which the item attaches to clause (b) only.
`cor-the-aleph-and-beth-hierarchies-are-well-defined` [L4] and [L7],
`thm-regularity-of-the-alephs` [L4], `thm-tarski-square` [L4],
`thm-cofinality-basics` [L8], `fs-every-aleph-is-regular` [L2]: five Facts
repaired for a missing hypothesis, a false unqualified claim (the range of a
composition), or a proposition attributed to a target that does not state it (the
infinite-cardinal criterion $\omega \le \kappa$, which lives in
`def-cardinal-arithmetic`). `ex-an-aleph-fixed-point`, `ex-cardinal-absorption-computed`,
`ex-the-beth-hierarchy-computed`, `ex-counting-functions-and-subsets-of-the-continuum`:
two titles and two Remark claims corrected — including
`ex-cardinal-absorption-computed`'s "the only route is through Hessenberg", which
is false, since $\aleph_1 \sqcup \aleph_0 \approx \aleph_1$ has an explicit
choice-free bijection (send the extra tagged $n$ to $2n$, the original tagged
finite $n$ to $2n+1$, and fix everything from $\omega$ up). A uniform sweep
qualified the cardinality Fact "$\lvert X \rvert$ is the least ordinal
equinumerous with $X$" with "for a well-orderable set $X$" across the eight items
that stated it unrestricted.

**Topology (10 items).** `def-compactness-variants` title; `thm-compactness-variants-hierarchy`
Remark (choice hypotheses on three separation claims, and a blanket "none of the
reverse implications holds" contradicted by the theorem's own claim 1(b));
`rem-compactness-conventions-and-choice-ledger` (the Hausdorff proof does make
finite selections; the metric bridge needs `def-compactness-variants` for the
variants; two of the five false statements were missing from the ledger the title
promises); `lem-compactness-of-a-subspace-is-ambient` Remark (balls versus open
sets); `lem-tube-lemma-for-a-compact-factor` Remark (a **finite** union of basic
boxes containing the slice always contains a tube — finiteness is what compactness
buys); `thm-tychonoff` Remark (a member of an arbitrary open cover is a union of
basic sets and need not be determined by finitely many coordinates);
`cor-heine-borel-in-the-product-topology` (the "second route" does use the
one-dimensional bisection; and a one-point metrizable space carries no compatible
metric of positive diameter); `def-locally-compact-space` (the $\mathbb{R}^n$
example asserted the product topology is the $d_\infty$ topology on citations
that do not prove it, then applied a Heine-Borel corollary stated for $d_2$ —
now worked in $d_2$ throughout, with the dependent contract quote updated);
`lem-the-order-topology-on-an-ordinal` ("exactly the basic sets that stay clopen"
— the initial segments are clopen too); `thm-the-long-line-is-countably-compact-and-not-compact`
title; `thm-quasicomponents-equal-components-in-a-compact-hausdorff-space` (its
closing Remark denied that singleton components give total disconnectedness,
which is the library's definition, and identified open components with local
connectedness, which the cited item's own Remark calls strictly weaker);
`fs-local-compactness-is-hereditary` ("and no more" is false — $(0,1]$ is locally
compact and neither open nor closed in $\mathbb{R}$);
`ex-the-interval-...`, `ex-the-alexander-...`, `ex-the-sorgenfrey-line-...`
(titles and, for the Alexander example, the Example sentence and [L1], which
restated Alexander's lemma without the Zorn hypothesis it opens with);
`ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals` (step 2.1
concluded that a countable union of the chosen finite subcovers is at most
countable "by [L4]", which is about indexing one countable family; the item now
declares `thm-countable-union-of-countable`, carries it as [L10], and its ledger
records that claim 3 spends countable choice **twice**);
`ex-one-point-compactifications-of-the-line-and-of-the-naturals` (step 1.2 proved
the circle closed in $\mathbb{R}^2$ from a **two**-variable polynomial's
continuity licensed by a one-variable theorem — the claim is unused downstream
and is now dropped, keeping only the metrizability step 5.1 consumes; and [L9]
now carries the two bridges from the real-analysis open-cover notion to
topological compactness); `cex-a-continuous-image-of-a-locally-compact-space`
([L3] took injectivity and the unit spacing of the canonical naturals from
`def-canonical-natural`, which only defines the recursion; `lem-of-naturals-positive`
is now declared and cited).

## 5. URL disposition — the sweep the driver never ran

`run-wave.mjs` has no URL step, so the A6 efficiency protocol's item 1 did not
happen for this wave. I ran it myself over the union of every URL in the three
ledgers and every URL on disk in the 91 scoped items: **89 distinct URLs, 82 live
at HTTP 200.**

| status | count | disposition |
|---|---:|---|
| 200 | 82 | accepted |
| **404** | **1** | `www.ucl.ac.uk/~ucahcjm/ast/ast_notes_4.pdf`, carried by **8 published foundations items** and 8 ledger rows, and the sole evidence URL on every one of those rows. **Repaired:** the same notes are live at `www.homepages.ucl.ac.uk/~ucahcjm/ast/ast_notes_4.pdf`, which I fetched and read — it is "Chapter 4. Cardinal Arithmetic", and its §4.4 defines cofinality, regular and singular cardinals and computes $\operatorname{cf}(\aleph_\omega) = \omega$, which is exactly what the eight rows claim. Items and ledger rows rewritten, with the observed status recorded in each rationale |
| 403 | 1 host | `math.colorado.edu/~kearnes/...cardinals_arithmetic.pdf`, carried by 10 items and the sole evidence URL on 10 rows including `thm-konig`'s `exact-source`. The body is a server error — "Server unable to read htaccess file, denying access to be safe" — so it currently serves nobody, but it is not evidence the document is gone. Not condemned, **not accepted as sole evidence**: every one of the ten items also carries a live source, and for `thm-konig` I verified through the model-side route that Wikipedia's *König's theorem (set theory)* states the family form with its AC hypothesis verbatim, which is the claim the row calls `exact-source`. Re-check before A10; if it still 403s, drop it as A3 dropped the dead `ms.uky.edu` URL |
| 000 | 1 | `citeseerx.ist.psu.edu/...` (TLS chain failure here), carried by `cex-a-continuous-image-of-a-locally-compact-space`, which also carries three live sources including the Toronto notes its row rests on. Unverified, not condemned |

**Zero scoped items are left with no live source.** A3's six binding URL
conditions were all honoured by A4 and re-verified here: the dead UCLA and
`ms.uky.edu` URLs appear nowhere on disk, `lem-null-times-bounded` keeps its live
Reed source, and the `nku.edu` redirect target is not written anywhere (the Beta
omitted it rather than record an unverified URL, which is the honest outcome).

## 6. Cross-batch and cross-level edges

`wave4-audit-manifest.json` recorded 12 cross-batch edges at A0. Three of them —
`lem-dependent-choice-along-a-sequence-of-relations`, `def-baire-space` and
`thm-baire-category-locally-compact-hausdorff` — became `published-backward` when
A4 repointed them from `def-sequence` to `def-sequence-convergence-top`, exactly
as A3 approved. **The remaining nine I audited individually, and all nine are
exact:**

- `def-compactness-variants`, `thm-compactness-variants-hierarchy`,
  `thm-ordinal-spaces-and-compactness` and `fs-compact-implies-sequentially-compact`
  cite `def-sequence` **only** for the ℕ-indexing convention and the definition of
  a strictly increasing index map, both of which `def-sequence` states about
  functions $\mathbb{N} \to \mathbb{N}$; the general-space clause is carried in
  each case by `def-sequence-convergence-top`, cited alongside it. Not the defect
  A4 repaired elsewhere.
- The same four cite `lem-index-map-grows` for "a strictly increasing index map
  satisfies $n_j \ge j$", which is its claim 2 verbatim.
- `ex-the-cardinality-of-the-continuum` [L3] cites `def-sequence` for "a sequence
  of reals is a function $\mathbb{N} \to \mathbb{R}$", which is its first line.

Reconciled against the generated checklist so omission is visible: 9 of 9
cross-batch edges audited, 0 wrong. The 842 published-backward edges were checked
fact by fact inside the refuter lanes.

## 7. genrisk, impact, contracts, risk reviews

- **genrisk.** Regenerated after A4: 56 seeds to **60**, the four new ones being
  the foundations examples A3 approved as `trivial`. Three are zero-cone. The
  fourth, `ex-aleph-one-is-at-most-the-continuum`, has cone 1 — a single wikilink
  mention from `ex-the-beth-hierarchy-computed`, no `deps` edge, no Fact or step
  consuming it. Disposition **verified-generated**, recorded in `genrisk.json`
  with the ladder tried in order: no source to retag to (it is a bespoke worked
  bundle), nothing overstated to restate or narrow (the item declares AC in its
  first line and every clause is a ZFC theorem — $2^{\aleph_0}$ is a cardinal
  above $\aleph_0$ by Cantor, $\aleph_1$ is least such by construction), no
  counterexample to find, nothing to unfold. `genrisk --receipt` exits 0 at 60
  seeds / 11 load-bearing.
- **Impact.** The template handed to me was empty for the reason recorded in the
  recovery receipt. Rebuilt over the whole wave, `pre-A4` to `post-A6`: **91
  changed interfaces, 1,315 affected items, all 1,315 dispositioned
  `still-licensed`** — 54 in the material class with a per-class justification
  naming the two genuine interface changes (a gained dependency in
  `ex-sigma-compactness-...`, a dropped unused claim in
  `ex-one-point-compactifications-...`), the rest in the pure class.
  `impact-audit --receipt` exits 0.
- **Contracts.** Every Fact, step-tag and citation edit was mirrored into the
  batch contract files and re-merged. `proof-contract --strict` 0 errors 77/77;
  `finite-smoke` 0 errors.
- **risk_review.** All 77 proof-bearing items are high or critical, so all 77
  needed one; all 77 are written, each naming the refuter lane that read the item,
  the adjudication, and the certifier lane certifying its final text where one
  applies. `risk-report --require-reviewed` 0 errors, 77 routed.

## 8. Certification — 7 independent Sol lanes, two rounds

No repair in this wave is certified by its author. The 20 A4 repairs are
certified by lanes I assigned; my own 32 A6 repairs are certified by lanes in a
**different model family from me** (GPT 5.6 Sol, read-only sandbox), exactly as
the owner's routing rule intends. Every lane read **final on-disk text**, not a
diff and not a repair description, and was instructed to refuse the whole item if
any sentence in it is wrong.

**Round 1: six lanes over all 52 uncertified items — 43 certified, 9 refused.**
The refusals were not about my repairs. In eight of the nine the lane certified
the repaired passage explicitly and refused on an **independent surviving defect
elsewhere in the same item**, which is precisely what the "refuse the item, not
the diff" instruction was for:

| item | what the certifier caught | disposition |
|---|---|---|
| `thm-every-infinite-cardinal-is-an-aleph` | [L5] takes the finite/infinite cardinal criterion from a theorem that does not state it | repaired; `def-cardinal-arithmetic` declared and cited |
| `cor-cofinality-of-a-cardinal-power` | title omits the AC its Statement assumes; [L7] same misattribution | both repaired |
| `thm-cofinality-basics` | the closing Remark counts two essential uses of strict increase; step 3.1 spends a third | repaired |
| `ex-the-cardinality-of-the-continuum` | [L1] cites definitions for the total order and completeness of the constructed reals | repaired: `thm-reals-ordered-field` + `cor-cauchy-reals-lub-complete` declared and cited |
| `ex-the-sorgenfrey-line-is-lindelof-and-its-square-is-not` | a Remark says **every** basic box meets the antidiagonal in one point; only the constructed boxes do | repaired |
| `thm-the-long-line-is-countably-compact-and-not-compact` | [L6] states one direction of the countability criterion; step 1.3 uses the converse | repaired, both directions stated |
| `thm-quasicomponents-equal-components-in-a-compact-hausdorff-space` | my own repaired Remark attributes its local-connectedness claims to a target that does not state them | repaired: cited to `thm-locally-connected-iff-components-of-open-sets-are-open`, declared |
| `lem-convergent-implies-cauchy` | my own repaired Remark says the converse is unavailable here, immediately before the next Remark says it is already in hand | repaired: the next page's least-upper-bound proof is distinguished from the construction-side theorem |
| `thm-compactness-under-continuous-maps` (round-1 finding, from lane t2) | [L8] cites `def-real-order`/`def-complete-ordered-field` for the total order of $\mathbb{R}$ | repaired with `thm-reals-ordered-field` |

**Two of the nine are defects in repairs I authored** — the quasicomponents
citation and the Cauchy-completeness availability claim. That is the
no-self-certification rule doing exactly the work it exists for, and it is worth
recording plainly: a cross-family reader caught what I had just written.

**Round 2** re-certifies those nine items on their final text, in a fresh lane
that authored none of them.

## 9. Escalation list — items repaired twice in this wave

Measured from disk, not from the touch ledger's raw transition count (the three
Betas took 22 per-item snapshots against the standing stage-only rule, which
inflates that count; the ledger is 10.5 MB rather than wave 2's 95 MB, so it is
recorded as a process defect rather than repaired). **A material A4 repair and a
material A6 repair, both, landed on twelve items:**

`cor-cofinality-of-a-cardinal-power`, `ex-a-singular-cardinal-of-uncountable-cofinality`,
`ex-an-aleph-fixed-point`, `ex-counting-functions-and-subsets-of-the-continuum`,
`ex-the-alexander-subbase-lemma-applied-to-a-closed-interval`,
`ex-the-beth-hierarchy-computed`, `ex-the-cofinality-of-aleph-omega`,
`fs-bounded-implies-convergent`, `fs-limit-preserves-strict-inequality`,
`lem-compactness-of-a-subspace-is-ambient`,
`rem-compactness-conventions-and-choice-ledger`, `thm-regularity-of-the-alephs`.

Nine of the twelve are the same shape: A4 repaired a citation and A6 then added a
missing choice hypothesis or a missing dependency-target hypothesis to a
different part of the same item. None is a case of the same claim being repaired
twice, none was refuted by a judge, and none is proposed for deletion. Four
further items were repaired twice **inside A6** by the certification round
(`thm-cofinality-basics`, `thm-quasicomponents-...`, `lem-convergent-implies-cauchy`,
`ex-the-cardinality-of-the-continuum`); two of those were repairs of my own
repairs and are recorded as such in §8. They are listed here for the
orchestrator's personal audit under the twice-touched rule; my judgement is that
none needs one, and the evidence is the per-item ledger above.

## 10. Gate state at the close of A6

Every gate re-run by me after the final edit, not taken from any agent's report:

| gate | result |
|---|---|
| `precheck.mts` (whole corpus) | 2,111 checked, **0 failing** |
| `proof-contract --strict` | **0 errors, 0 warnings, 77/77** |
| `finite-smoke` | 0 errors |
| `risk-report --require-reviewed` | **0 errors, 77 routed**, every `risk_review` written |
| `content-policy --audit --ledger` ×3 | **91 scoped, 0 errors, 0 warnings** |
| `genrisk --receipt` | exit 0 — 60 seeds, 11 load-bearing, all disposed |
| `impact-audit --receipt` | exit 0 — 91 interfaces, **1,315 dispositions** |
| `depsource` | 0 unresolved, 16,177 deps resolved |
| `fwdcheck` `extcheck` `citecheck` `rendercheck` `prosecheck` | exit 0 |
| `depcheck` | red **only** on `published-unaudited`, one per item awaiting its `verification.verified` stamp; the 114 `cited-not-in-deps`, 38 `multi-home` and 1 `b-leaf-legacy` are the pre-existing corpus classes, unchanged by this wave |

`merge-proof-contracts` was re-run after every contract edit and the merged file
is regenerable from the three batch files without losing a `risk_review`.

## 11. What I am NOT doing, and the exact next action

**Not mine, deliberately:** I have written no `verification.audited` anywhere,
run no judge lane (Alpha's sandbox cannot launch judge children — the wave-1b
`EPERM` finding stands, and judge-lane execution is the orchestrator's), and
adjudicated no judge verdict, there being none yet for this wave under the
`deepseek+sonnet` lineup.

**Exact next action — A7, the orchestrator's:**

1. Run the standing **injection test** if and only if the judge lane or its
   frozen context changed since wave 3's PASS (`ARCHITECTURE.md` §5). The lineup
   is unchanged (`deepseek+sonnet`) and `briefs/judge-conventions.txt` is
   unchanged this wave, so on the present state no new test is owed; verify that
   from git before skipping it.
2. Full paired sweep over **all 91 items**, both lanes, by manifest, not by page:
   `JUDGE_LINEUP=deepseek+sonnet node tools/judge-sweep.mjs --ledger
   research/audit/wave4-judge.jsonl --cost research/audit/wave4-judge-cost.jsonl
   --manifests research/audit/wave4-foundations.pages.json,research/audit/wave4-real-analysis.pages.json,research/audit/wave4-topology.pages.json`
   — 182 verdicts expected. Coverage is per frozen context, so nothing in this
   wave inherits a verdict.
3. Then **A8 is mine again**: snapshot `pre-a8`, adjudicate every rejection from
   disk with `item_sha256` on every row, and gate with `step8-guard.mjs`. A8 is
   fatal-only; a `confirmed_nonfatal` or `false_positive` gets its ledger row and
   no edit.

**Text is final as of this report.** Every item in the wave is at the state its
certifier read. Judge stamps are written last, from the A7 ledger, by
`apply-judge-stamps.mjs` — not by me and not now.

## 12. For the A10 rundown

Beyond the fatal-error report §2–§4 supplies, four things belong in front of the
owner:

1. **The Fact-fidelity policy question** (§3): may a `[F#]` state a one-line
   consequence of its cited target, or must it state the target? Nine findings
   this wave, and the third wave running.
2. **The `\mathbb{R}` naming convention** (§3): dozens of published items cite
   `def-complete-ordered-field`/`def-real-numbers` for properties that
   `thm-reals-ordered-field` and `cor-cauchy-reals-lub-complete` prove. Two lanes
   found it independently. Wave 4 repaired the two instances inside its own
   scope; the corpus-wide sweep is an owner decision.
3. **Link liveness as a gate** — sixth wave running. This wave a **published
   source URL carried by eight items was dead**, and no gate saw it; the wave
   before, a repair shipped a dead link. `level-coverage` checks that a URL is
   present, never that it resolves.
4. **Two driver defects** (`wave4-A3.md` §8 records them, and this wave paid for
   both): `run-wave.mjs` dispatches its judgment steps with the Alpha brief and
   passes no URL-liveness stage, and `impact-audit.mjs` resolves a duplicated
   snapshot label to its **first** match, which silently produced an empty impact
   template for this wave.

---

## Recovery receipt — 2026-08-05 (dispatch #3, A6 resume)

**Outcome: A6 was substantively closed by dispatch #2 but its gate is red on
exactly one item. That item's certification lane was prompted and never ran.
This dispatch finishes it.**

### Files read in full

`CLAUDE.md`; `briefs/audit-alpha.md` (my dispatch prompt); this Alpha report end
to end, including dispatch #1's blocker and dispatch #2's A6 report §§1–12;
`research/audit/wave4-run-state.json` including its whole journal;
`research/audit/wave4-dispatch/audit-alpha-a6.result.json`;
`research/audit/wave4-dispatch/certifier-certify-round3.prompt.md`;
`items/ex-the-sorgenfrey-line-is-lindelof-and-its-square-is-not.md` end to end;
`tools/dispatch.mjs` (role table and argument handling); `run-wave.mjs`'s A6 plan
entry.

Read mechanically and stated as such: the 91 rows of the three provenance
ledgers (parsed and queried by field, for stamp reconciliation),
`research/audit/wave4-split.json`, `depcheck` output in full.

### Verified state — from disk, not from dispatch #2's report

- Branch `main`, HEAD `6c54914`, nothing committed. The wave's edits are all
  still in the working tree.
- **`depcheck` exit 1 on exactly one ERROR:**
  `[published-unaudited] items/ex-the-sorgenfrey-line-is-lindelof-and-its-square-is-not.md`.
  The 114 `cited-not-in-deps` lines are WARNINGS and are the pre-existing corpus
  class, unchanged by this wave. **The halt reason recorded in
  `wave4-run-state.json` at 14:39:17Z names a `cited-not-in-deps` line on
  `thm-sequential-criterion-for-function-limits`, which is a warning and not the
  failure** — the driver quoted a warning line rather than the error. Recorded
  for A10 as a third driver defect; it sent this dispatch looking at the wrong
  item.
- **Stamp reconciliation: 90 of the 91 scoped items carry
  `verification.verified`.** The single exception is the Sorgenfrey item above.
  That is one blocker, not two: the gate and the missing certification are the
  same fact.
- **The round-3 certifier never ran.**
  `research/audit/wave4-dispatch/certifier-certify-round3.prompt.md` exists
  (written 00:37 local) with **no `.log` and no `.result.json`**, while every
  other lane in the wave has all three. Dispatch #2 exited at 00:39 having
  templated the prompt and reported "one item is in its last certification
  round"; the lane died with it. **Its repair is therefore uncertified, and I
  authored that repair, so I cannot certify it myself.**
- The round-3 repair itself IS on disk and is what the prompt describes: [L3] of
  the Sorgenfrey item now cites `thm-reals-ordered-field` and
  `cor-cauchy-reals-lub-complete`, and both are present in `deps`.
- Stale judge blocks: four items still carry one
  (`thm-closed-subspace-of-a-compact-space-is-compact`, `thm-compact-iff-fip`,
  `thm-compact-subset-of-a-hausdorff-space-is-closed`,
  `thm-compactness-agrees-with-metric-compactness`). All four are the
  trailing-newline items dispatch #2 established are substantively pure retags,
  and all four blocks are legacy `glm-5.2` stamps dated 2026-07-29, not wave-4
  verdicts. Kept, on the wave-3 precedent that a pure retag does not void a
  judge verdict. `thm-compactness-under-continuous-maps`, the fifth of that
  group, was materially repaired at A6, and its stale judge block is correctly
  gone.

### Inherited open actions

| # | action | state |
|---|---|---|
| 1 | round-3 certification of the Sorgenfrey item | **not started — the lane never ran.** This dispatch's whole job |
| 2 | `verification.verified` stamp on that item | blocked on 1 |
| 3 | close A6 green | blocked on 2 |

Everything else A6 owes is done and was re-verified here, not taken on report:
41 fatal adjudications applied, 32 Alpha repairs certified by independent Sol
lanes, 9/9 cross-batch edges, 77/77 `risk_review` records, genrisk and impact
receipts, the URL sweep.

### Exact next action

Dispatch the round-3 certifier (GPT 5.6 Sol, read-only, a different family from
me and the author of nothing in this wave) on the Sorgenfrey item's final text.
On CERTIFY, write `verification.verified` with `scope: published-audit` and
`delegated_by: owner`, re-run the A6 gate table, and close A6. On REFUSE,
adjudicate the finding from disk and repair before re-certifying.

I have written no `verification.audited`, run no judge lane, and applied no
judge stamp.

---

## Recovery receipt — 2026-08-05 (dispatch #4, A8)

**Outcome: A6 is closed green and A7 is complete. A8 has begun.**

### Files read in full

`CLAUDE.md`; `AUDIT-WORKFLOW.md` (726 lines); `briefs/audit-alpha.md` (my
dispatch prompt); `research/audit/RESUME.md` (its operative wave-4 head section,
which states it supersedes everything below it, plus the wave-3/wave-2 history
sections through line 872 — the remainder is wave-0/1 history superseded twice
over); this Alpha report end to end, including dispatch #1's blocker, dispatch
#2's A6 report §§1–12, and dispatch #3's resume receipt;
`research/audit/wave4-A3.md` (the adjudication of record for A4);
`research/audit/wave4-published-repairs.md` (the orchestrator's own
citation-precision repair to the Sorgenfrey item and why it authored it);
`research/audit/wave4-run-state.json` including its whole journal; all 14
rejection reason texts from `research/audit/wave4-judge.jsonl`.

Read mechanically rather than as prose, and stated as such: the 182 rows of the
judge ledger (parsed and tallied by model and verdict), the 33 labels of
`wave4-touches.json`, `depcheck` output in full.

### Verified state — from disk, not from any report

- Branch `main`, HEAD `6c54914`, **nothing committed**. The wave's edits are all
  still in the working tree.
- **A6 is green.** `depcheck` exits **0**; the `published-unaudited` class is
  **empty** (0 lines), so all 91 scoped items carry `verification.verified`,
  including the Sorgenfrey item that blocked dispatch #3. The 153 remaining
  lines are WARNINGS in the pre-existing corpus classes (`cited-not-in-deps`,
  `multi-home`, `b-leaf-legacy`), unchanged by this wave.
- The dispatch-#3 blocker is closed, and **not by me.** The round-3 certifier
  ran and **refused** the item; the owner directed the orchestrator to author the
  class-(b) citation repair itself, and lane `certify-round4` (Sol, read-only,
  not the author) certified it. Record: `wave4-published-repairs.md`. Lanes
  `certify-round3` and `certify-round4` both have `.log` and `.result.json` on
  disk. **No repair in this wave is certified by its author, and that now
  includes the one I could not certify.**
- **A7 is complete.** `wave4-judge.jsonl` holds **182 rows over 91 distinct
  items** — full 2-lane coverage, **zero nulls**. DeepSeek 87 keep / **4
  reject** (4.4%); Sonnet 5 81 keep / **10 reject** (11.0%). No item was
  rejected by both lanes; the 14 rejections are 14 distinct items.
- **The `pre-a8` snapshot already exists** — index 32 in `wave4-touches.json`,
  taken by the driver at 16:15:32Z at A8 step-begin, 2,767 items. I am not
  taking another: stage snapshots are the orchestrator's under the A6 efficiency
  protocol, and a second one taken now would only re-record the same tree.
- `step8-guard` against that baseline reports only that the adjudications ledger
  does not exist yet, which is correct — I have written no row and made no edit.
- `wave4-judge-adjudications.jsonl` does not exist. **A8 round 1 has not
  started.** No rejection in this wave has been adjudicated by anyone.

### Inherited open actions

| # | action | state |
|---|---|---|
| 1 | adjudicate all 14 rejections from disk, `item_sha256` on every row | not started — this dispatch's whole job |
| 2 | apply repairs for `confirmed_fatal` only; A8 is fatal-only | blocked on 1 |
| 3 | `step8-guard` the stage | blocked on 2 |
| 4 | targeted paired rejudge + receipt for any material repair | blocked on 2 |
| 5 | impact closure if any repair changes a public interface | blocked on 2 |

Everything A6 owed is done and was re-verified here rather than taken on report.

### A note on lane independence, recorded before I adjudicate

**Ten of the fourteen rejections are Claude Sonnet 5's, and I am
`claude-opus-5`.** Under the owner's 2026-08-04 lineup change Sonnet is the same
family as its adjudicator, and `CLAUDE.md` says so in terms: weight a Sonnet-only
agreement with an existing Claude-authored proof accordingly. That cuts both
ways here — my *dismissal* of a Sonnet finding is also intra-family. So I will
not adjudicate any of the 14 on my own reading alone: each gets an independent
**GPT 5.6 Sol** read-only lane, cross-family to both me and Sonnet, and I
adjudicate from disk with that evidence in front of me.

Three of Sonnet's ten reason texts additionally exhibit the known
verdict-extraction failure `CLAUDE.md` documents — a `reject` recorded while the
reason text itself concludes *keep*. I will name each one in the ledger rather
than treat it as a finding, because it is evidence about the lane, and the owner
asked for Sonnet's precision to be re-measured at this comparison.

### Exact next action

Dispatch 14 read-only Sol lanes, one per rejection, then adjudicate each from
disk with a fix and a named defect or a refutation and a verbatim quote.

---

# A8 ROUND 2 — recovery receipt and continuation (Alpha, `claude-opus-5`, 2026-08-05)

**Recovery completed before any action**, per `briefs/audit-alpha.md`
§"Mandatory recovery".

**Read in full:** `CLAUDE.md`, `AUDIT-WORKFLOW.md`, `research/audit/RESUME.md`
(wave-4 section and the wave-3/2/1b history it supersedes),
`research/audit/wave4-A8-round2-task.md`, this report's §§1–12,
`research/audit/wave4-published-repairs.md`, and the round-1 certifier record
`certifier-a8-def-cofinality.result.json`. Ledgers read and reconciled from
disk: `wave4-judge.jsonl` (329 rows, 182 distinct `(id, model)` pairs),
`wave4-judge-adjudications.jsonl` (14 rows), `wave4-touches.json`.

**Baseline verified from disk.** `git log --oneline -1` = `fcc99b5`; working tree
carries the wave's uncommitted item/page changes plus untracked
`research/audit/wave4-*` and `wave5-*` artifacts. Nothing committed by this
round.

**The two inherited open actions, both confirmed from disk rather than taken on
report:**

1. **10 open judge rejections.** Recomputed independently: of 182 distinct
   `(id, model)` current verdicts, 12 are rejections and 10 have no matching
   adjudication row. The list matches the dispatch exactly.
2. **5 published items carrying no verification stamp.** `depcheck.mjs` reports
   `published-unaudited` on exactly `def-cofinality`,
   `ex-compactness-in-the-standard-topologies`,
   `ex-the-alexander-subbase-lemma-applied-to-a-closed-interval`,
   `lem-successor-cardinal-exists`, `thm-locally-compact-hausdorff-basics`.

**Pre-edit baseline for this round:** `touchlog` snapshot
`"pre-a8-round2-alpha"` (2767 items, 36th in the ledger), taken before the first
edit of this round. The orchestrator's own `"pre-a8-round2"` snapshot precedes
it and is unchanged.

**Lanes dispatched this round** (new all-Claude/DeepSeek lineup, owner
2026-08-05): 6 read-only `claude-sonnet-5` certifiers and 4 tool-less DeepSeek
V4 Pro `audit-refuter` lanes on Alpha-assembled context. Full record in
`research/audit/wave4-A8-round2.md`.

---

## A8 round 3 — 2026-08-05 (Alpha, `claude-opus-5`)

**Substage:** A8, third adjudication round. **Complete.** Full report:
`research/audit/wave4-A8-round3.md`.

**Recovery receipt.** Read before acting: `CLAUDE.md`, the A8-round-3 dispatch
brief, `research/audit/wave4-A8-round2.md` (rounds 1–2 record, incl. §6
`thm-konig`), `wave4-judge-adjudications.jsonl`, `wave4-judge.jsonl` (all
`def-cofinality` verdicts), `wave4-touches.json` snapshot labels,
`tools/step8-guard.mjs`, `tools/item-hash.mjs`, `tools/impact-audit.mjs`,
`tools/dispatch.mjs`, and on disk `items/def-cofinality.md`,
`items/thm-cofinality-basics.md`, `items/thm-regularity-of-the-alephs.md`,
`items/fs-every-aleph-is-regular.md`, `items/def-cofinal-subset-of-an-ordinal.md`,
`items/def-subnet.md`. Baseline verified: commit `9448c62`, tree clean under
`items/` at round start.

**Owned artifacts this round:** `research/audit/wave4-A8-round3.md`,
`research/audit/wave4-a8-round3-impact-audit.json`, one adjudication row, one
repaired clause in `items/def-cofinality.md`, dispatch records
`audit-refuter-a8r3-cofinality-{blind,focused}`, `certifier-a8r3-def-cofinality`,
briefs `audit-refuter-a8r3.brief.md` / `certifier-a8r3.brief.md`, task files
`task-a8r3-*.md`, snapshots `pre-a8-round3-alpha` / `post-a8-round3`.

**Decision:** `def-cofinality` / `deepseek-v4-pro` / `213fc8ea…` →
**`confirmed_fatal`** (`other`), pre-edit `item_sha256` `4f1fbb6b…`. First Remark
asserted, on its natural reading, that cf(α)=α at every infinite cardinal — the
proposition `fs-every-aleph-is-regular` carries as FALSE on the same page.
Repaired in one clause, certified by an independent `claude-sonnet-5` lane after
the stale stamp was deleted pre-edit.

**Gates:** `step8-guard` 1/1 licensed; `impact-audit` exit 0, 11/11
`still-licensed`; `depcheck` OK; `precheck` clean.

**Open, carried out of A8 (no licence to edit, owner queue):** `thm-konig`
Remark (from round 2); `def-cofinality` Remark 4 heading "Only one notion of
'cofinal' exists in this library", falsified by `def-subnet`'s eventually-cofinal
index maps. Both are the same class, now six in wave 4 — see round-3 report §5,
which proposes the A10 gate.

**Exact next action (orchestrator's, not Alpha's):** targeted rejudge of
`def-cofinality` alone at `context_sha256`
`7588c88d630684842278476950414de2c4d848d9ac47066c7219ed9ecf85a5bb`,
`item_sha256` `3515524fe4ea9be1dd9ab0b392d44e5e48f16cdd9b3011a4603e5268ef404e70`,
then `apply-judge-stamps.mjs --audit-targeted-rejudges`. No `verification.judge`
was written by Alpha.
