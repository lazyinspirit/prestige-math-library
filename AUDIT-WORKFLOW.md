# The published-page audit, step A0 to A10 — PROPOSAL

**Status: PROPOSAL, awaiting owner approval (2026-08-02).** Nothing in this
file is normative yet. On approval, the same-commit doc rule applies: the tool
changes it names land together with updates to `CLAUDE.md`, `LEVELS.md`,
`ARCHITECTURE.md`, and this file becoming normative.

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
  GPT 5.6 Sol/Terra role is replaced by **Opus 5 (`claude-opus-5`)** dispatched
  through the Claude runtime at high reasoning effort. DeepSeek V4 Pro stays as
  a judge lane, called directly with `DEEPSEEK_API_KEY` from the environment or
  `/root/Projects/prestige-intelligence/.env` (the existing `judge.mts:208`
  resolution). The build workflow's GPT lineup is untouched; the model lineup
  becomes a parameter, not a fork (§8).
- **Legacy-provenance amendment.** The standing rule "never retrofit legacy
  items" existed because *retroactive provenance guesses would be dishonest*
  (`QUALITY-CONTROLS.md` §Scope). This workflow replaces guessing with an
  audited determination: every retro-tag carries an evidence class, a working
  source URL where the class requires one, and a rationale in a durable ledger.
  Where evidence is inconclusive the tag defaults **conservatively to
  `ai-generated`** — the label that raises scrutiny — never toward
  `literature-derived`.
- **Published-audit repair delegation.** The narrow
  obvious-published-dependency-repair protocol (`CLAUDE.md`) is extended,
  inside audit scope only, to three repair classes: (a) unambiguous falsehoods
  (the existing protocol, unchanged); (b) semantically imprecise dependency
  citations — a fact or step citing an item for more than, or other than, it
  states; (c) provenance retags and their required `sources.references`
  additions. All existing safeguards carry over: dedicated touch snapshots,
  `impact-audit` closure on any public-interface change, no self-certification,
  stale-verdict deletion, targeted paired rejudge. Anything debatable — a
  restatement between conventions, a deletion, a new theorem, a changed reading
  order — is **not** delegated; it goes to the owner queue at A10.

## 3. Actors

| actor | model | does |
|---|---|---|
| **owner** | human | approves this proposal; receives the per-wave A10 rundown; decides every non-delegated repair |
| **orchestrator** | this session | wave/batch computation, briefs, the gate of record, ledgers, twice-touched personal audits, the A10 report |
| **Audit-Beta** | **Opus 5, high effort** | the reading workhorse: per-item provenance determination with literature search, full proof-step and citation audit, proof-contract capture, delegated repairs in its batch. Owns at most **two A/B pairs** (the existing Beta capacity rule); a wider batch gets more Betas |
| **Alpha** | **Opus 5, high effort** | sole adjudicator: verifies Beta findings and repairs from disk, dispatches read-only proof-refuters, audits every cross-batch/cross-level edge, adjudicates judge rejections, owns the repair and blast-radius ledgers |
| **independent reader** | **Opus 5, high effort** | Alpha-assigned check of any repair authored by a Beta or by Alpha itself — the author of a repair never certifies it |
| **judges** | **DeepSeek V4 Pro direct (`max`) + fresh headless Opus 5** | paired adversarial screens on identical hash-attested frozen context, invoked through `tools/judge.mts --parallel` / `tools/judge-sweep.mjs` (§8) |

Cross-family honesty note: the published corpus was authored largely by
Claude-family and GPT-family sessions. **DeepSeek is the cross-family screen**;
the Opus 5 judge lane is an independent same-family comparison lane, mirroring
exactly how Terra was labeled relative to Sol — it is not claimed as
cross-family separation.

Context-continuity checkpoints carry over unchanged: orchestrator at 50% of
active context into `research/audit/RESUME.md`; each Beta at 60% into its
namespaced batch notes; Alpha at 60% into its Alpha report.

## 4. Batching — waves by dependency level, batches by category

The owner works in concurrent batches: **one batch = one category × one
dependency level**, all batches of a wave running in parallel.

- **Wave k** = every published A/B pair whose A page sits at level k of the
  existing `rounds.mjs` level function (`level(p) = 1 + max over requires`,
  computed over the spec with published state read from page files, exactly as
  `--pairs` does). Pages sharing a level are provably mutually independent, so
  intra-wave batches cannot depend on one another; every dependency edge from
  wave k lands in a wave < k.
- **Batch** = the pairs of one category inside that wave, e.g.
  `wave4-abstract-algebra` = the level-4 abstract-algebra pairs. A batch wider
  than two pairs is split across multiple Audit-Betas (capacity rule), but the
  batch remains the ledger and manifest unit.
- **Waves run bottom-up.** This is what makes citation-precision auditing and
  blast-radius tracking sound: when wave k is audited, every dependency target
  it cites already carries an audited provenance tag and an audited Statement,
  so (a) a citation can be checked against a verified target, and (b) the
  reverse-`deps` closure of any `ai-generated` seed discovered below is already
  known before its consumers are read.
- Cross-page and cross-batch edges are first-class: Beta audits edges internal
  to its batch; **Alpha audits every edge leaving the batch** (cross-batch
  within the wave — necessarily into other categories — and backward into
  earlier waves), the direct analogue of build step 6c.

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
| `wave<k>-<cat>.proof-contracts.json` | Beta's namespaced proof contracts for scoped proof-bearing items (§7) |
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
| no semantically identical statement located | `ai-generated` | `none` | full truth-risk route below |
| Beta recognizes it as an established standard result but cannot yet locate a source | **keep searching** — a genuinely standard result virtually always has a findable source. If the search still fails: `ai-generated`, `evidence: established-unsourced` | `established-unsourced` | truth-risk route, but ranked below `none` in scrutiny ordering (open decision D2) |
| trivially true: directly and easily verifiable from its stated dependencies (the direct-corollary / checkable-witness standard) | `ai-generated` + `generation.role` where the existing role vocabulary fits | `trivial` | verification recorded in the ledger; low repair priority; still excluded from future `deps` targets by `content-policy` |

`provenance.proof` is assigned independently: `literature-derived` (follows a
sourced proof faithfully, URL recorded), `ai-altered` (adapted from a sourced
argument), `ai-generated` (locally invented — the expected default for this
session-authored corpus), `not-supplied`, or `not-applicable` per kind. Per
SCHEMA, **proof provenance never changes dependency eligibility and a repaired
proof never establishes its Statement**.

Hard rules carried over verbatim: an `ai-generated` statement is the
truth-risk flag — on any concrete doubt Beta searches for a counterexample
before accepting the item or a repair of it; inconclusive evidence defaults to
`ai-generated`, never to a sourced label; every `literature-derived` /
`ai-altered` tag requires a reader-visible working `sources.references` URL
(the existing `content-policy` requirement).

**What a retro-tag does and does not invalidate.** `touchlog.mjs` hashes
exclude the `verification` block and (verified against the code) do not treat
provenance/sources additions as mathematical edits; SCHEMA's material-rewrite
test ("would the judge have seen something different" — adding a citation that
changes no claim does not count) means a **pure retro-tag preserves existing
`verification.judge` and `audited`/`verified` stamps**. Any repair to
mathematical text follows §9 and voids them as usual.

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

No renderer change is proposed: the presentation is frozen, and the provenance
pill already renders component provenance for items that carry it. A visible
"rests on a generated statement" tier would be a fourth accent and is left as
an explicit owner decision (D4), default **no**.

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
3. capture the proof contract (`citations` with exact quotes, step input map,
   boundary worksheet) for scoped proof-bearing items — incremental cost,
   since the Beta is reading every step anyway; scope per open decision D1;
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
- the owner queue: every non-delegated repair proposal with evidence;
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

**Modified (backward-compatible; build defaults untouched):**

| tool | change |
|---|---|
| `tools/judge.mts` | add an `OPUS_MODEL = "claude-opus-5"` lane: spawn the local `claude` CLI (verified present, v2.1.220) headless — `claude -p --model claude-opus-5` with an ephemeral config home, an empty temporary read-only work directory, and all tools disabled — the exact `runFreshTerra` pattern (`judge.mts:231–241`) with the Codex binary swapped for Claude. Lineup selected by `JUDGE_LINEUP=deepseek+opus` (default remains `deepseek+terra`); the frozen prompt, hash attestation, verdict JSON contract, and `briefs/judge-conventions.txt` loading are untouched, so both lanes still receive byte-identical prompts |
| `tools/judge-sweep.mjs` | model constants derived from the same lineup; a third 16-slot pool directory for the Opus lane (per-lane caps unchanged: 16 + 16, 32 combined) |
| `tools/level-coverage.mjs` | `JUDGES` (line 42) derived from the lineup instead of hard-coded; accepts audit batch manifests as scope |
| `tools/rounds.mjs` | `--audit-batches` mode: emit `research/audit/wave<k>-<category>.pages.json` from the existing level function + on-disk published state |
| `tools/content-policy.mjs` | `--audit` mode scoped by audit manifests: requires both provenance components on every scoped item, a `sources.references` URL for every sourced label, and a ledger row for every tag; it does **not** apply the future-batch prohibition retroactively (a legacy load-bearing `ai-generated` item is a `genrisk` finding to disposition, not an instant gate failure) |

**New:**

| tool | does |
|---|---|
| `tools/genrisk.mjs` | seeds = published `ai-generated` statements; computes reverse-`deps` + direct-citation cones (impact-audit's computation, corpus-wide); ranks by cone size (spine-audit's ordering); requires an Alpha disposition per load-bearing seed; `--receipt` verifies completeness. Standing report, regenerated per wave |

**Coverage gate per wave (the A7→A8 receipt, mirroring the build):**

```sh
node tools/merge-proof-contracts.mjs --level audit-wave<k> research/audit/wave<k>-proof-contracts.json research/audit/wave<k>-*.proof-contracts.json
node tools/proof-contract.mjs research/audit/wave<k>-proof-contracts.json --strict
node tools/risk-report.mjs research/audit/wave<k>-proof-contracts.json --require-reviewed
node tools/content-policy.mjs --audit research/audit/wave<k>-*.pages.json
node tools/audit-manifest.mjs research/audit/wave<k>-*.pages.json --json > research/audit/wave<k>-audit-manifest.json
node tools/genrisk.mjs --receipt research/audit/genrisk.json
node tools/impact-audit.mjs --touches research/audit/wave<k>-touches.json --from <baseline> --receipt research/audit/wave<k>-impact-audit.json
JUDGE_LINEUP=deepseek+opus node tools/level-coverage.mjs --contracts ... --judge-ledger research/audit/wave<k>-judge.jsonl --judge-adjudications research/audit/wave<k>-judge-adjudications.jsonl --spine-receipt research/dependency-spine-audit.json --audit-receipt research/audit/wave<k>-coverage.json --verify-current-context research/audit/wave<k>-*.pages.json
```

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
  read + literature search. This, not judging, is the wall-clock center.
- Judging: ≈2,400 items × 2 lanes ≈ 4,800 calls across the run, paced by the
  16+16 pools; the sweep is resumable and skips completed current-context
  pairs, so waves are safely interruptible.
- ~11 published waves (levels 1–10/11), per-wave width 1–8+ pairs. Waves are
  sequential by design; batches inside a wave are concurrent.

## 11. Open decisions for the owner

- **D1 — proof-contract scope.** Default proposed: full contracts for every
  proof-bearing item in audit scope (maximally faithful to the build, largest
  cost). Alternative: contracts only for repaired + high/critical-risk +
  spine-selected + `ai-generated`-citing items.
- **D2 — `established-unsourced`.** The commissioning instruction can be read
  as letting "part of the LLM's existing knowledge" rescue an unsourced
  statement from `ai-generated`. Proposed resolution keeps the schema honest:
  such an item is tagged `ai-generated` with a distinguishing evidence class
  and reduced scrutiny ranking, because `literature-derived`/`ai-altered`
  require a URL that does not exist. Confirm or override.
- **D3 — pause granularity.** One owner pause per wave (proposed, mirrors the
  per-level build) vs. a single end-of-run pause.
- **D4 — reader-facing marker for generated-statement cones.** Ledger-only by
  default (presentation is frozen). A visible fourth tier is possible but is
  an owner-level restyle decision.
- **D5 — legacy `authorship` field.** 202 items carry the one-axis legacy
  field; proposed: leave it in place (SCHEMA keeps it readable) and let the
  new component tags stand beside it.
