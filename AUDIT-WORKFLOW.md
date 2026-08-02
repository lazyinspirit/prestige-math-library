# The published-page audit, step A0 to A10

**Status: NORMATIVE for the published-page audit workflow (owner approved
execution 2026-08-02; decisions resolved one at a time, recorded in §11).**
Maintained under the same-commit doc rule beside `CLAUDE.md`, `LEVELS.md`,
and `ARCHITECTURE.md`: every tool or brief named here changes in the same
commit as this description. `LEVELS.md` remains the per-level BUILD workflow;
this file is the retro-audit of already-published pages. Tool behaviour below
is verified against the code as of 2026-08-02.

This is the retro-audit counterpart of `LEVELS.md`: the per-level **build**
workflow minus scaffolding and authoring (steps 1–5 of the build have no
analogue here), with every auditing → judging mechanism retained and applied to
the **already-published corpus**. Everything below was verified against the
code and content on 2026-08-02.

---

## 1. Purpose and measured baseline

Two objectives, in the owner's priority order (mathematical accuracy and
semantically precise dependency citation are non-negotiable; everything
nonfatal ranks below them):

1. **Component-provenance retro-tagging.** Every published mathematical-content
   item receives evidence-based `provenance.statement` and `provenance.proof`
   under the existing SCHEMA §3 vocabulary, assigned by literature search, not
   by guessing. AI-generated statements are then contained: every downstream
   consumer is computed and flagged for scrutiny, and each generated statement
   is made as little load-bearing as the mathematics allows.

**Already-tagged content is out of scope (owner, 2026-08-02, standing rule for
this and all future sessions).** An item that already carries both component
provenance tags (a literature-derived/ai-altered/ai-generated statement label
and a proof label) was tagged, audited, and judged when it was authored under
the current contract; the audit does not re-audit it. The exclusion is
mechanical: `rounds.mjs --audit-batches` drops tagged items at scope
generation, so every downstream gate and the judge sweep inherit it, and a
pair whose items are all tagged drops out entirely. `genrisk.mjs` still reads
the whole corpus — blast-radius tracking of a tagged `ai-generated` seed is
not an audit of that seed. Measured 2026-08-02 (site-parity levels): 40 batch
manifests across waves 0–14, 2,179 items in scope, 428 already-tagged
appearances excluded; the in-scope pair levels agree with the app's own
`pageGraph` output on all 66 pairs, and the 16 published pairs absent from
scope are exactly the fully-tagged frontier pairs (R3).
2. **Citation-precision and accuracy audit.** Every proof step and every
   dependency citation in the published corpus is read skeptically — the same
   duties as build step 6a — including cross-page and cross-batch edges, with
   the paired-judge screen on the final text.

Baseline measured from disk (2026-08-02):

- 2,684 items; **2,406 published**; only **185 published items carry
  `provenance`** (412 corpus-wide; 202 carry only the legacy one-axis
  `authorship`). The retro-tag scope is therefore ≈2,220 published items.
- 8 categories under `library/` (abstract-algebra, combinatorics, foundations,
  linear-algebra, not-proved-here, number-theory, real-analysis, topology).
- `rounds.mjs --pairs`: 214 A/B pairs across 33 levels; **69 published A
  pages**; frontier at level 11 (published depth currently reaches level ~10).

## 2. Owner rule changes this workflow needs (explicit supersessions)

These three deltas are owner decisions embodied in the commissioning
instruction; they are recorded here so no future session mistakes them for
drift:

- **Model substitution (owner, 2026-08-02).** In this audit workflow every
  GPT 5.6 Sol/Terra AGENT role (Audit-Beta, Alpha, independent readers,
  proof-refuters) is replaced by **Opus 5 (`claude-opus-5`)** dispatched
  through the Claude runtime at high reasoning effort. The JUDGE lane is
  **Sonnet 5** (`claude-sonnet-5`), an owner amendment later the same day:
  under the sweep's 16-way lane concurrency the headless Opus judge exited
  status 1 on 303 of 382 wave-0 attempts (~3s, ~142 bytes) — a capacity
  refusal, never a mathematical verdict — leaving 101 of 180 items null.
  Sonnet 5 runs the identical headless lane and passed the mandatory
  injection test (`judge.mts` PASS 5). DeepSeek V4 Pro stays as
  a judge lane, called directly with `DEEPSEEK_API_KEY` from the environment or
  `/root/Projects/prestige-intelligence/.env` (the existing `judge.mts:208`
  resolution). The build workflow's GPT lineup is untouched; the model lineup
  becomes a parameter, not a fork (§8).
- **Legacy-provenance amendment.** The standing rule "never retrofit legacy
  items" existed because *retroactive provenance guesses would be dishonest*
  (`QUALITY-CONTROLS.md` §Scope). This workflow replaces guessing with an
  audited determination: every retro-tag carries an evidence class, a working
  source URL where the class requires one, and a rationale in a durable ledger.
  Uncertainty never falls toward a *sourced* label (`literature-derived` /
  `semantic-source` require a located, verified source), and — owner amendment
  2026-08-02 — it never falls toward `ai-generated` either: that label
  requires a positive determination of genuine novelty (§6); a recoverable
  restatement of established mathematics is `ai-altered`, and a genuinely
  undecidable case escalates to Alpha instead of defaulting.
- **Published-audit repair delegation (owner decision R1, 2026-08-02:
  delegate everything found).** The narrow
  obvious-published-dependency-repair protocol (`CLAUDE.md`) is extended,
  inside audit scope only, to four repair classes: (a) unambiguous falsehoods
  (the existing protocol, unchanged); (b) semantically imprecise dependency
  citations — a fact or step citing an item for more than, or other than, it
  states; (c) provenance retags and their required `sources.references`
  additions; (d) **debatable restatements** — convention choices (settled by
  the standing convention rule: most widely adopted form, Wikipedia as
  tiebreaker), narrowing an overstrong Statement to what the proof licenses,
  and equivalent judgment-call rewrites, with **Alpha as final adjudicator**.
  All existing safeguards carry over: dedicated touch snapshots,
  `impact-audit` closure on any public-interface change, no self-certification,
  stale-verdict deletion, targeted paired rejudge. Only **deletions, id
  renames/removals, and structural reading-order changes** remain owner-only;
  they go to the A10 queue with evidence and a proposed route.

## 3. Actors

| actor | model | does |
|---|---|---|
| **owner** | human | approves this proposal; receives the per-wave A10 rundown; decides every non-delegated repair |
| **orchestrator** | this session | wave/batch computation, briefs, the gate of record, ledgers, twice-touched personal audits, the A10 report |
| **Audit-Beta** | **Opus 5, high effort** | the reading workhorse: per-item provenance determination with literature search, full proof-step and citation audit, proof-contract capture, delegated repairs in its batch. Owns at most **two A/B pairs** (the existing Beta capacity rule); a wider batch gets more Betas |
| **Alpha** | **Opus 5, high effort** | sole adjudicator: verifies Beta findings and repairs from disk, dispatches read-only proof-refuters, audits every cross-batch/cross-level edge, adjudicates judge rejections, owns the repair and blast-radius ledgers |
| **independent reader** | **Opus 5, high effort** | Alpha-assigned check of any repair authored by a Beta or by Alpha itself — the author of a repair never certifies it |
| **judges** | **DeepSeek V4 Pro direct (`max`) + fresh headless Sonnet 5** | paired adversarial screens on identical hash-attested frozen context, invoked through `tools/judge.mts --parallel` / `tools/judge-sweep.mjs` (§8) |

Cross-family honesty note: the published corpus was authored largely by
Claude-family and GPT-family sessions, and this audit's Betas, Alpha, readers
and refuters are Opus 5. **DeepSeek is the cross-family screen**; the Sonnet 5
judge lane is an independent same-family comparison lane, mirroring exactly how
Terra was labeled relative to Sol — it is not claimed as cross-family
separation. It is at least a different model from the Opus agents that audited
the text, not merely a different process.

Context-continuity checkpoints carry over unchanged: orchestrator at 50% of
active context into `research/audit/RESUME.md`; each Beta at 60% into its
namespaced batch notes; Alpha at 60% into its Alpha report.

## 4. Batching — waves by dependency level, batches by category

The owner works in concurrent batches: **one batch = one category × one
dependency level**, all batches of a wave running in parallel.

- **Wave k** = every published A/B pair whose A page shows **dependency level
  k on the live `/library` index** (owner, 2026-08-02: the audit order must
  agree with the site). That level is the app's `pageGraph` computation
  (`web/lib/library-categories.ts`), ported verbatim into
  `rounds.mjs --audit-batches`: page P depends on page Q when an item of P
  transitively `deps`-reaches an item whose home page is Q (home = first
  published page listing the item; an item listed on P is always local to P);
  edges are kept within P's own category and transitively reduced; the level
  is the longest path from a category root, **roots at 0** — so the first
  wave is wave 0. It is NOT the plan-spec `requires` function that orders the
  build. The pre-plan pages (the ℕ/ℝ constructions, `foundations-of-the-real-
  numbers`, `formal-laurent-series-field`) are ordinary pages here and land
  at their site level; the `not-proved-here` catalogue pages are excluded
  from scope by owner instruction (they still take part in the home map).
- **Batch** = the pairs of one category inside that wave, e.g.
  `wave1-abstract-algebra` = the level-1 abstract-algebra pairs. A batch wider
  than two pairs is split across multiple Audit-Betas (capacity rule), but the
  batch remains the ledger and manifest unit.
- **Waves run bottom-up, and the guarantee is category-local.** Levels are
  computed per category, so within a category every dependency target of a
  wave-k page was audited in a wave < k: a citation into your own category is
  checked against a verified target, and the reverse-`deps` closure of any
  `ai-generated` seed below is known before its consumers are read. A
  **cross-category** target may sit in the same or a later wave; those edges
  are exactly the cross-batch edges Alpha audits at A6, and their provenance
  tags arrive when the target's own wave runs.
- Cross-page and cross-batch edges are first-class: Beta audits edges internal
  to its batch; **Alpha audits every edge leaving the batch** (backward into
  earlier waves of the same category, and into other categories at any wave —
  the levels are category-local, so a cross-category target can share the
  wave or sit above it), the direct analogue of build step 6c.

`tools/rounds.mjs` already computes everything needed; a thin
`--audit-batches` mode (§8) emits the per-wave, per-category batch manifests
under `research/audit/wave<k>-<category>.pages.json` so that manifest-scoped
gates (`audit-manifest.mjs`, `level-coverage.mjs`) run unchanged in shape.

## 5. Artifacts

All run artifacts live under `research/audit/` to keep the `research/level*`
build namespace clean.

| path | what |
|---|---|
| `wave<k>-<cat>.pages.json` | generated batch manifest (pages + item lists, from disk) |
| `wave<k>-<cat>.provenance.jsonl` | Beta's **provenance evidence ledger**: one row per item, `{id, statement, proof, evidence, urls[], rationale, at}` |
| `wave<k>-<cat>.findings.md` | Beta's batch notes: defects found, repairs proposed/applied, coverage statement, checkpoint section |
| `wave<k>-<cat>.proof-contracts.json` | Beta's namespaced full proof contracts for every proof-bearing item in the batch (D1) |
| `wave<k>-audit-manifest.json` | generated relationship checklist for the wave |
| `wave<k>-alpha.md` | Alpha's report: adjudications, cross-edge coverage, refuter evidence |
| `wave<k>-published-repairs.md` | the repair ledger: old text, new text, class (falsehood / citation-precision / retag), source or elementary derivation, certifier, impact receipt path |
| `wave<k>-touches.json` | `touchlog.mjs` snapshots (baseline, after A4, after A6, after A8) |
| `wave<k>-impact-audit.json` | Alpha dispositions for consumers of any changed public interface |
| `wave<k>-judge.jsonl` / `-judge-attempts.jsonl` | paired verdict and transport ledgers |
| `wave<k>-judge-adjudications.jsonl` | Alpha's exact-hash `{id, model, context_sha256, outcome, defect_type?}` decisions |
| `wave<k>-coverage.json` | the coverage receipt enforced by `level-coverage.mjs` in audit mode |
| `genrisk.json` | standing corpus-wide generated-statement blast-radius report + Alpha dispositions (§6) |
| `RESUME.md` | orchestrator checkpoint |
| `briefs/audit-beta.md`, `briefs/audit-alpha.md` | new brief templates; both open with the no-shell-permission-prompts rule and state the triage rule verbatim, like every existing brief |

## 6. The provenance determination (the mathematical core of step A1)

Per item, Audit-Beta reads the item from disk and searches reputable literature
(peer-reviewed/open textbooks, university notes, Stacks Project, Encyclopedia
of Mathematics; Wikipedia as convention tiebreaker) for the Statement or
Construction. The classification uses the existing SCHEMA §3 vocabulary — no
new frontmatter labels — with an **evidence class** recorded in the ledger:

| evidence found | `provenance.statement` | ledger `evidence` | obligations |
|---|---|---|---|
| exact statement located (same hypotheses, quantifiers, direction, conventions; cosmetic edits only) | `literature-derived` | `exact-source` | working URL added to `sources.references` |
| no exact match, but a **semantically identical** statement located (reformulated, renotated, specialised/merged without changing content) | `ai-altered` | `semantic-source` | working URL added to `sources.references`; exact convention deltas recorded in the ledger |
| no semantically identical statement located AND Beta positively judges the claim genuinely AI-invented — a bespoke witness/example, an invented bridge claim, or a composition with no recognizable counterpart in established mathematics (owner, 2026-08-02: `ai-generated` requires this positive determination, never mere failure to find a source) | `ai-generated` | `none` | full truth-risk route below; the rationale must state why the claim is judged novel, not just unsourced |
| Beta recognizes it as an established standard result but cannot locate a source after a real search (**owner decision D2**) | `ai-altered` **without a URL** — model-recognized standard knowledge counts as the source | `established-knowledge` | requires **Alpha's independent concurrence** that the statement is standard (Beta's recognition alone never clears it; on refusal Alpha determines the final label under the positive-determination standard below); `content-policy --audit` waives the URL requirement only for this ledger evidence class |
| trivially true: directly and easily verifiable from its stated dependencies (the direct-corollary / checkable-witness standard) | `ai-generated` + `generation.role` where the existing role vocabulary fits | `trivial` | verification recorded in the ledger; low repair priority; still excluded from future `deps` targets by `content-policy` |

`provenance.proof` is assigned independently: `literature-derived` (follows a
sourced proof faithfully, URL recorded), `ai-altered` (adapted from a sourced
argument), `ai-generated` (locally invented — the expected default for this
session-authored corpus), `not-supplied`, or `not-applicable` per kind. Per
SCHEMA, **proof provenance never changes dependency eligibility and a repaired
proof never establishes its Statement**.

Hard rules: an `ai-generated` statement is the truth-risk flag — on any
concrete doubt Beta searches for a counterexample before accepting the item or
a repair of it; every `literature-derived` / `ai-altered` tag requires a
reader-visible working `sources.references` URL — with the single D2 exception
above (`established-knowledge`, Alpha-concurred, ledger-recorded).

**The `ai-generated` positive-determination standard (owner, 2026-08-02,
supersedes the earlier inconclusive-defaults-to-`ai-generated` rule).** Beta
tags a statement `ai-generated` only when it is **absolutely sure the claim is
genuinely AI-invented** — not merely restated, renotated, specialised, or
otherwise recoverably altered from an established result. A statement that is
a recoverable restatement or alteration of established mathematics is
`ai-altered` even when no URL surfaces (evidence `established-knowledge`,
Alpha concurrence). When Beta genuinely cannot decide between "recoverable
from established mathematics" and "invented", it does not default either way:
it records the evidence and escalates the item to Alpha, who adjudicates the
label. What never changed: uncertainty never falls toward a *sourced* label —
`literature-derived`/`exact-source` and `semantic-source` still require an
actually located, verified source.

**Legacy `authorship` retirement (owner decision D5).** The one-axis
`authorship` field (185 items on disk: 165 `ai-altered`, 9 `ai-generated`, 11
`literature-derived`) is **deleted in the same edit** that writes the audited
`provenance` block; the original self-declaration survives in git history and
in the batch ledger row. The 9 `authorship: ai-generated` items are seeded
into `genrisk` from wave 0 regardless of when their wave is audited.

**What a retro-tag does and does not invalidate.** SCHEMA's material-rewrite
test ("would the judge have seen something different" — adding a citation that
changes no claim does not count) means a **pure retro-tag preserves existing
`verification.judge` and `audited`/`verified` stamps**. Any repair to
mathematical text follows §9 and voids them as usual. **Measured correction
(wave 0, 2026-08-02):** `touchlog.mjs`'s public-surface hash keeps ALL
frontmatter except the `verification` block, so writing a `provenance`/
`sources` block DOES flip the interface hash — by design, the tool never
trusts an agent's description of its own edit. The workflow therefore
classifies the changed interfaces mechanically from the git diff (pure
additive retag frontmatter vs anything else) into
`research/audit/wave<k>-impact-classification.json`; Alpha disposes the pure
class wholesale and reviews the material class item by item in the
`impact-audit` receipt.

### Generated-statement containment (blast radius)

A new tool `tools/genrisk.mjs` (§8) is the mechanical half, mirroring
machinery that already exists:

- **Seeds** = published items with `provenance.statement: ai-generated`.
- **Closure** = transitive reverse-`deps` consumers plus direct citation
  consumers (the `impact-audit.mjs` consumer computation, run corpus-wide),
  i.e. the same propagation shape as `extcheck`'s `unprovedDependence` —
  a dependence propagates, a mention does not.
- **Output** = `research/audit/genrisk.json`: per seed, its consumer cone,
  ranked by cone size exactly as `spine-audit.mjs` ranks — the largest cones
  are the highest blast radius and get read first.
- **Every flagged consumer is scrutiny-routed:** its own audit reads the proof
  step(s) that actually use the generated statement, and `risk-report.mjs`
  routing plus an Alpha proof-refuter apply to high/critical cones.

For each **load-bearing** seed (nonzero cone), Alpha records exactly one
disposition in `genrisk.json`, tried in this order:

1. **retag** — deeper search found a source after all; becomes
   `literature-derived`/`ai-altered` with URL;
2. **restate** — repair the statement to a source-checked semantically
   equivalent or slightly narrower sourced form (`ai-altered`), under the §9
   repair protocol, with every consumer re-licensed via `impact-audit`;
3. **unfold** — the fact is elementary: inline the short derivation into each
   consumer and delete the `deps` edge (the exact maneuver used for the
   `rem-r-native-topology-scope` forward-ref trap), leaving the seed
   non-load-bearing;
4. **narrow** — weaken the seed to the strongest claim its proof and sources
   actually license, then re-license consumers;
5. **verified-generated** — none of the above closes: the seed keeps
   `ai-generated`, receives a counterexample search, an Alpha proof-refuter
   reading, and both judges; it stays in `genrisk.json` as a standing flagged
   seed with its cone, and `content-policy` already forbids any **future**
   batch from citing it, so the blast radius is frozen at today's cone.

Deleting or replacing a published id is never delegated (ids are immutable;
removals are owner-only) — a seed that *should* die goes to the A10 owner
queue with its cone and a proposed replacement route.

No renderer change (owner decision D4: **ledger-only for now**): the
presentation is frozen, and the provenance pill already renders component
provenance for items that carry it. Whether consumers of a generated statement
get a visible fourth accent is revisited after the first wave's `genrisk` report shows
how large real cones are; commissioning that tier is a separate owner decision
then.

## 7. Execution order

```
A0 → A1 → A2 → A3 → A4 → A6 → A7 → A8 → A9 → A10      (per wave, bottom-up)
      ▲          ▲    ▲    ▲    ▲    ▲     ▲     ▲
      │          │    │    │    │    │     │     └ rundown, sole owner pause
      │          │    │    │    │    │     └ scope-denial re-grep of repaired files
      │          │    │    │    │    └ Alpha adjudicates judge rejections
      │          │    │    │    └ judge ONCE, after the audit, on final text
      │          │    │    └ Alpha: refuters, repair certification, cross-edges, genrisk
      │          │    └ apply approved retags/repairs, touch snapshots
      │          └ orchestrator adjudicates Beta recommendations
      └ provenance determination + citation audit (Beta, batches in parallel)
```

Step numbers are kept sparse deliberately: A5 does not exist (authoring has no
analogue), so old build-step intuitions do not silently transfer.

**A0 — Batch (orchestrator).** Compute the wave from disk, never from memory:
`rounds.mjs --audit-batches` over published page files. Emit batch manifests,
take the `touchlog` **baseline snapshot**, report batch/pair counts and the
cross-batch seam count before spawning. Name pages by id and file path, never
by order.

**A1 — Provenance determination (Audit-Beta, all batches in parallel).** §6
per item, over every mathematical-content item in the batch (definitions,
theorems, lemmas, propositions, corollaries, examples, counterexamples, false
statements, remarks). Writes only its namespaced batch files.

**A2 — Citation-precision and accuracy audit (same Beta, same pass).** The
build step-6a duties, executed while the item is open:

1. verify every proof step skeptically against its cited facts and the cited
   dependency items on disk — a step is clean only if the cited material
   licenses exactly what it claims;
2. verify every dependency citation semantically: target exists, is a legal
   earlier/same-page dependency, and **actually states the proposition for
   which it is cited** — right hypotheses, right quantifiers, right direction,
   no hidden stronger claim (the dominant historical defect class);
3. capture the **full three-part proof contract** (`citations` with exact
   quotes, step input map, boundary worksheet) for **every proof-bearing item
   in the batch** (owner decision D1: full contracts everywhere) — the
   citations block is incremental while reading; the input map and boundary
   worksheet are the deliberate extra spend the owner chose;
4. read Remarks and A-page summaries with proof-step suspicion; triage prose
   defects per the standing rule (nonfatal classes are recorded, not chased);
5. propose (not yet apply) repairs, classed per §2's delegation: falsehood /
   citation-precision / retag; anything outside the delegation is written up
   for the owner queue.

**A3 — Adjudicate (orchestrator).** Verify every load-bearing claim from disk;
approve or decline each Beta recommendation with best judgment and a logged
rationale. Decision priority: mathematical accuracy and citation precision are
non-negotiable; then minimize AI-generated load-bearing surface; then preserve
mathematical richness and exposition. No owner pause.

**A4 — Apply (Beta).** Apply approved retags and repairs under §9. `reflow` +
`precheck` on any changed proof item; snap `touchlog` after the stage;
`impact-audit` template generated for any public-interface change.

**A6 — Alpha audit.** Kept at the build's number because it is the same
mechanism: (a) independent readers certify every Beta repair (and a reader
certifies any Alpha repair); (b) Alpha dispatches read-only proof-refuters on
`risk-report` high/critical items and on every `ai-generated` seed and
large-cone consumer; (c) Alpha audits **every cross-batch and cross-level
edge** against `wave<k>-audit-manifest.json` so omission is visible; (d) Alpha
records `genrisk` dispositions and every `impact-audit` consumer disposition.
Alpha's 30-second threshold is binding: a gap a competent reader closes in 30
seconds is nonfatal, recorded at most.

**A7 — Judge (once, after the audit, on final text).** Paired
DeepSeek V4 Pro + fresh Opus 5 sweep over **every item in every audited batch
of the wave**, whether or not it was touched — coverage is the mechanism, and
under the new lineup no prior verdict exists to reuse. Same frozen A/B-pair
context unit, same single hash attestation shared by both lanes, same 16+16
file-backed cross-process slot pools, same attempt-ledger/retry semantics,
same `verification.judge`-is-passes-only honesty rule. **Before the first
production sweep, the Opus 5 lane must pass the standing injection test** — a
deliberately false claim under this library's conventions must be caught — the
same bar every previous judge change met (`ARCHITECTURE.md` §5).

**A8 — Adjudicate rejections (Alpha).** Adjudicate, do not comply: fix with
the defect named, or refute with a verbatim quote. Exact-hash rows in
`wave<k>-judge-adjudications.jsonl`; delete `verification.judge` on material
rewrites; targeted `--items` rejudge of exactly what changed; re-run
`impact-audit` and the coverage gate after any interface repair.

**A9 — Scope-denial re-grep.** Re-grep every repaired file for the prose
defect classes; because this workflow *reads the whole corpus level by level*,
Betas also flag published-claim decay (claims true when written, falsified by
later levels) encountered in passing — the sweep no other gate can perform.
No pause.

**A10 — Rundown and sole owner pause (per wave).** Concise but complete:

- provenance census for the wave (counts per label × evidence class, before/after);
- the generated-statement report: every seed, its cone size, its disposition;
- the fatal-error report in the build's exact format — grouped by defect type
  (invalid inference; incorrect/missing dependency citation; false/overstrong
  statement; missing hypothesis/choice scope; invalid witness) then by location
  (title/Statement, proof, Facts/deps, Remark, page prose), each entry naming
  the item and disposition;
- judge comparison from `judge-compare.mjs --adjudications`: agreement,
  model-only rejections, nulls, owner-confirmed fatal detections per lane;
- the owner queue (narrowed by R1): proposed deletions, id renames/removals,
  and structural reading-order changes only, each with evidence and a proposed
  route; plus the full record of delegated debatable restatements Alpha
  adjudicated, so the delegation stays inspectable;
- gate results and the coverage receipt.

The wave's repairs ship (commit + push, conventional style, no trailers) after
the owner clears this pause; retro-tags with no repair attached ride the same
commit.

## 8. Gates and tool changes

**Reused unchanged:** `precheck.mts`, `depcheck.mjs`, `fwdcheck.mjs`,
`extcheck.mjs`, `citecheck.mjs`, `rendercheck.mjs`, `prosecheck.mjs`,
`depsource.mjs`, `reflow.mts`, `touchlog.mjs`, `impact-audit.mjs`,
`risk-report.mjs`, `proof-contract.mjs`, `merge-proof-contracts.mjs`,
`audit-manifest.mjs`, `spine-audit.mjs`, `judge-compare.mjs`,
`consumers.mjs`. The orchestrator runs the authoritative pass after every
stage; no stage advances on an agent's report.

**Modified (backward-compatible; build defaults untouched, all implemented
2026-08-02):**

| tool | change |
|---|---|
| `tools/judge.mts` | `OPUS_MODEL = "claude-opus-5"` lane: `runFreshOpus` spawns the local `claude` CLI (verified v2.1.220) headless — `-p --model claude-opus-5 --effort high --no-session-persistence` (`--bare` measured to skip OAuth login and deliberately absent), an empty temporary working directory as cwd (repo project settings/hooks out of scope), and every core tool explicitly `--disallowed-tools` — the `runFreshTerra` pattern with the Codex binary swapped for Claude. Lineup selected by env `JUDGE_LINEUP` (`deepseek+terra` default, `deepseek+sonnet` for this workflow); preflight covers the Claude lane; the frozen prompt, hash attestation, verdict JSON contract, and `briefs/judge-conventions.txt` loading are untouched, so both lanes still receive byte-identical prompts |
| `tools/judge-sweep.mjs` | model lanes derived from the same `JUDGE_LINEUP`; the Opus lane has its own 16-slot cross-process pool directory (per-lane caps unchanged: 16 + 16, 32 combined); the child judge inherits the env var so sweep and judges cannot disagree about the lineup. New `--manifests` input (2026-08-02): item universe read from audit batch manifests instead of plan-spec pages, because spec `items` arrays are stale for legacy pages (`--pages` measured to select 180/276 wave-0 items); dedupes shared-prelude items automatically |
| `tools/level-coverage.mjs` | `JUDGES` derived from `JUDGE_LINEUP`; new `--audit` flag downgrades `ai-generated-statement-dependency` to a warning routed to the `genrisk` disposition (everything else stays hard); audit batch manifests are accepted as scope unchanged |
| `tools/rounds.mjs` | `--audit-batches [--wave K] [--outdir research/audit]`: emits `wave<k>-<category>.pages.json` entirely from disk. The wave is the **site's dependency level** — the app's `pageGraph` (item `deps` projected to pages via the home convention, in-category edges, transitive reduction, longest path from a category root, roots at 0) ported verbatim, so the audit order and the `/library` index can never disagree (owner, 2026-08-02); the plan-spec `requires` function keeps ordering the build only. Pages read from `library/*/*.md` with `status: published`; pair = A page + its published `-examples` companion; `not-proved-here` excluded from scope; item lists from the page files, each item carrying its current authored `deps` as the reconciliation baseline. Items already carrying both provenance tags are excluded at generation (owner rule 2026-08-02); fully-tagged pairs drop out |
| `tools/content-policy.mjs` | `--audit --ledger <provenance.jsonl>…` mode: requires both provenance components and a matching evidence-ledger row (`audit-ledger-missing-row`, `audit-ledger-mismatch`, `audit-ledger-evidence[-mismatch]`, `audit-ledger-rationale`) for every scoped item; mechanizes D2 (`established-knowledge` needs `alpha_concurred: true` and is the only URL waiver, surfaced as the `established-knowledge-unsourced` warning) and D5 (`legacy-authorship-retained` error); downgrades to warnings what cannot bind history — `ai-generated-statement-dependency` (routed to genrisk), `generated-kind`/`generated-role`, and `external-record-missing` on legacy deferred items |

**New (implemented 2026-08-02):**

| tool | does |
|---|---|
| `tools/genrisk.mjs` | seeds = published `ai-generated` statements plus legacy untagged `authorship: ai-generated` items (D5); computes reverse-`deps` + direct-citation cones (impact-audit's computation, corpus-wide); ranks by cone size (spine-audit's ordering). Report mode regenerates `research/audit/genrisk.json` preserving dispositions by seed id; `--receipt` requires one concrete Alpha disposition (`retag`/`restate`/`unfold`/`narrow`/`verified-generated`/`owner-queue`, with reviewer + notes) per load-bearing seed, verifies retag/restate/unfold/narrow claims against disk, and fails on stale cones. Baseline measured 2026-08-02: 23 seeds, all zero-cone |

**Coverage gate per wave (the A7→A8 receipt, mirroring the build):**

```sh
node tools/merge-proof-contracts.mjs --level audit-wave<k> research/audit/wave<k>-proof-contracts.json research/audit/wave<k>-*.proof-contracts.json
node tools/proof-contract.mjs research/audit/wave<k>-proof-contracts.json --strict
node tools/risk-report.mjs research/audit/wave<k>-proof-contracts.json --require-reviewed
node tools/content-policy.mjs --audit --ledger research/audit/wave<k>-<cat>.provenance.jsonl [...] research/audit/wave<k>-*.pages.json
node tools/audit-manifest.mjs research/audit/wave<k>-*.pages.json --json > research/audit/wave<k>-audit-manifest.json
node tools/genrisk.mjs --receipt research/audit/genrisk.json
node tools/impact-audit.mjs --touches research/audit/wave<k>-touches.json --from <baseline> --receipt research/audit/wave<k>-impact-audit.json
JUDGE_LINEUP=deepseek+sonnet node tools/level-coverage.mjs --audit --contracts research/audit/wave<k>-proof-contracts.json --judge-ledger research/audit/wave<k>-judge.jsonl --judge-adjudications research/audit/wave<k>-judge-adjudications.jsonl --spine-receipt research/dependency-spine-audit.json --audit-receipt research/audit/wave<k>-coverage.json --verify-current-context research/audit/wave<k>-*.pages.json
```

The judge sweep itself runs under the same lineup:

```sh
JUDGE_LINEUP=deepseek+sonnet node tools/judge-sweep.mjs --ledger research/audit/wave<k>-judge.jsonl --cost research/audit/wave<k>-judge-cost.jsonl --manifests research/audit/wave<k>-<cat1>.pages.json,research/audit/wave<k>-<cat2>.pages.json,...
# --manifests, not --pages: the audit's scope of record is the batch manifest
# (item lists from the page FILES). plan-spec's `items` arrays are stale for
# legacy pages, so --pages under-covers old waves — measured wave 0: 180 of
# 276 items. The sweep skips items already holding a current-context verdict
# in the ledger, so a completion re-run with --manifests wastes no calls.
```

**The prompt-side half:** `briefs/audit-beta.md` (A1/A2/A4) and
`briefs/audit-alpha.md` (A6/A8), both opening with the no-shell-permission
rule and carrying the triage rule verbatim, like every build brief.

## 9. Repair protocol for published items (verification-stamp honesty)

For every applied repair, in order: dedicated `touchlog` snapshot immediately
before the edit → smallest correction, never an id rename/removal → ledger row
in `wave<k>-published-repairs.md` (old text, new text, class, source URL or
written-out elementary derivation, provenance transition) → independent
certification (Alpha for a Beta repair; an independent reader for an Alpha
repair; never self) → `impact-audit` disposition for every computed consumer →
stamps: delete any stale `verification.judge`; on a **material** repair remove
the obsolete `audited` stamp and record the independent current reading as
`verification.verified` with `scope: published-audit` and
`delegated_by: owner` (`depcheck` accepts `verified` as the publish gate,
verified at `depcheck.mjs:281`) → both judge lanes rejudge the repaired item
and every materially repaired consumer on matching frozen context. A
`proved_here: false` item gets a refreshed `sources_checked` record instead of
a judge call (`extcheck` forbids judging it). Materially AI-repaired components
are retagged `ai-altered`; an already-`ai-generated` component stays so.

Escalation rules bind unchanged: an item **refuted or repaired more than once**
(judge ledger + touch ledger combined, measured from disk) escalates to the
orchestrator's personal audit naming the fault and the ramification of
dropping; snap after **every** item-modifying stage or the ledger lies.

## 10. Scale, cost, and sequencing estimate

- Retro-tagging: ≈2,220 published items lacking provenance, each needing a
  read + literature search. This, plus full contract capture (D1) for every
  proof-bearing item, is the wall-clock center, not judging.
- Judging: ≈2,400 items × 2 lanes ≈ 4,800 calls across the run, paced by the
  16+16 pools; the sweep is resumable and skips completed current-context
  pairs, so waves are safely interruptible.
- ~11 published waves (levels 1–10/11), per-wave width 1–8+ pairs. Waves are
  sequential by design; batches inside a wave are concurrent.

## 11. Resolved owner decisions (2026-08-02, decided one at a time)

- **D1 — proof-contract scope: FULL.** The complete three-part contract
  (citation quotes, step input map, boundary worksheet) is required for every
  proof-bearing item in audit scope; `proof-contract.mjs --strict` gates it
  per wave. Maximally faithful to the build; the cost was accepted knowingly.
- **D2 — established-but-unsourced: `ai-altered` WITHOUT URL.**
  Model-recognized standard knowledge counts as a source. Safeguards: ledger
  evidence class `established-knowledge`; Alpha must independently concur the
  statement is standard (disagreement → `ai-generated`); `content-policy
  --audit` waives the URL requirement for exactly this evidence class and no
  other.
- **D3 — pause granularity: ONE PAUSE PER WAVE.** Each wave ends at A10 with
  its rundown and queue; approved repairs and retags commit and ship
  immediately, wave by wave.
- **D4 — reader-facing cone marker: LEDGER-ONLY FOR NOW.** No renderer
  change; revisit an additive fourth tier after the first wave's `genrisk` report
  shows real cone sizes.
- **D5 — legacy `authorship`: REMOVE ONCE SUPERSEDED.** Deleted in the same
  edit that writes the audited `provenance`; git history and the batch ledger
  keep the original declaration. (Measured: 185 items — 165 `ai-altered`, 9
  `ai-generated`, 11 `literature-derived`; the 9 are immediate `genrisk`
  seeds.)
- **R1 — repair delegation: DELEGATE EVERYTHING FOUND.** Falsehoods,
  citation-precision repairs, retags, and debatable restatements (conventions
  per the standing most-widely-adopted/Wikipedia-tiebreak rule) are all
  agent-repairable with Alpha as final adjudicator and every safeguard
  mandatory; only deletions, id changes, and reading-order restructures queue
  for the owner.
- **R2 — judge coverage: EVERY ITEM, EVERY WAVE.** Full paired
  DeepSeek + Opus 5 coverage of each wave on final post-audit text,
  producing a complete fresh ledger under the new lineup. (Scoped by R3:
  ≈4,000 calls over the 2,007 in-scope items.)
- **R3 — already-tagged content excluded (owner, 2026-08-02, standing for all
  future sessions).** Items already carrying both component-provenance tags
  are never audit scope; the exclusion is mechanical at batch generation
  (§1). This narrows R2's coverage to in-scope items and removes fully-tagged
  pairs from the wave plan.
