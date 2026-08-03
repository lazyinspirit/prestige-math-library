# ARCHITECTURE — every mechanism in this library, and why it exists

**Companion to `LEVELS.md`.** `LEVELS.md` says *what happens in what order*;
this file says *what each mechanism is, how it works, and which failure it was
built to prevent*. `SCHEMA.md` and `CLAUDE.md` win where they differ.

**Keep this current.** Every mechanism added, changed or retired gets an entry
here in the same commit. A mechanism nobody can find is a mechanism that gets
rebuilt worse. See §9.

Verified against the code 2026-08-01.

---

## 1. The shape of the system

Four layers, and **every one of them has caught defects the others missed**.
That is the design claim, and it is measured, not assumed.

```
  PROSE SCAFFOLD          research/plan-*.md         human page designs
        │  Beta-n-i reads
        ▼
  MACHINE SCAFFOLD        research/plan-spec.json    ids, order, deps
        │  validate-plan + depsource gate it BEFORE authoring
        ▼
  CONTENT                 items/*.md, library/*/*.md
        │  12 gates + Beta/Alpha reading audit + 1 judge
        ▼
  RENDERED PAGE           app repo, read-only bind mount
```

The asymmetry worth internalising: **mechanical gates prove absence of a defect
class; reading tiers find defects; the judge is a cheap screen and finds almost
nothing.** Historical judge measurements on this corpus were **21–24%**
precision and **0/3** on real historical defects. The current DeepSeek/Terra
pair receives no inherited quality claim: its effectiveness is reported only
from owner-adjudicated per-level findings. Never model it as the thing that
finds problems.

## 2. The content contract (`SCHEMA.md`)

Frontmatter fields, and what enforces each:

| field | meaning | enforced by |
|---|---|---|
| `id` | must equal filename | `depcheck` (`id-filename`) |
| `kind` | definition/lemma/theorem/corollary/example/counterexample/false-statement/remark | `depcheck` (`kind-prefix`), `validate-plan` (`prefix`) |
| `status` | `draft` → `published` | `depcheck` (`draft-on-published-page`) |
| `provenance.statement` / `.proof` | separate reader-facing provenance of the Statement/Construction and its local Proof/Verification | `depcheck` validates supplied component values; `content-policy` requires both in every future batch scope |
| `generation` | constrained role record for a non-load-bearing AI-generated Statement/Construction | `content-policy` permits only direct corollaries and checkable examples/counterexamples |
| `deps` | **logical** dependencies | `depcheck` (cycles, resolution), `citecheck`; `content-policy`, `proof-contract`, and `level-coverage` reject an AI-generated Statement/Construction target |
| `justified_by` | forward-pointing discharge of a definition's obligation | `depcheck` (target must transitively depend on the citer) |
| `forward_refs` | references to later material | `fwdcheck` |
| `external_refs` | *mentions* of unproved items | `extcheck` |
| `proved_here: false` | visible ‡ record of a result not proved locally | `extcheck`; `content-policy` requires structured source, local-attempt and necessity evidence in future batch scope |
| `landmark` | appears as a flowchart node | curation only |
| `verification.precheck` | phase-format result | `precheck` |
| `verification.judge` | **passes only, never rejections** | honesty rule |
| `verification.audited` | **the owner's field alone** | `depcheck` (`published-unaudited`) |

**Why `justified_by` is separate from `deps`:** a lemma proving a definition is
well-defined *depends on that definition*, so putting it in `deps` creates a real
cycle. The split is what lets `depcheck` guarantee acyclicity without losing the
justification.

**Why `external_refs` is separate from `deps`:** a `deps` edge to an unproved
remark would inject a false logical edge into acyclicity, the page prerequisite
closure and the flowchart — `def-axiom-of-choice` does not *depend* on Cohen's
theorem.

Conversely, a genuinely load-bearing external result belongs in `deps`, not
`external_refs`: its effect must propagate through the dependency graph and be
shown to the reader. The future-session exception permits this only for a
well-established, exact-source-checked result whose proof Beta could not build
from available library dependencies. It is represented by a source-cited
`rem-` item with `proved_here: false`; batch notes and proof contracts record
the exact source, failed local route, and necessity.

## 3. The base gates and future-scope closures

Run from the repo root. The orchestrator runs the authoritative pass **after**
every agent in a stage finishes; no stage advances on an agent's report.

### 3.1 `precheck.mts` — phase-proof format
Normative checker is `worker/src/precheck.ts`. Verifies every proof-bearing item
parses as a phase proof and that its declared strategy is discharged.

Strategies: `direct`, `contradiction`, `cases`, `induction`, `contrapositive`,
`constructive`. Tag families, opener → discharge: `contrapositive-reduce` →
`discharge-contrapositive`; `assume-contra` → `discharge-contradiction`;
`base`/`ih` → `discharge-induction`; `assume-case`/`cases-exhaustive` → `cases`.
Errors: `no-given`, `no-steps`, `no-qed`, `qed-not-final`,
`qed-not-final-postrepair`, `untagged-steps`, `bad-tag`, `strategy-missing(...)`.

**It is LINE-BASED**, so a soft-wrapped step fails. Run `reflow.mts` first. On
REPAIR output the repo stores the canonical stratification — a step citing
phase-k steps sits in phase k+1 — adopted with `adopt-repair.mjs`, which also
rewrites stale prose references like "step 3.2" that precheck cannot see.

**Known limitation, measured 2026-07-27 (level-7-algebra authoring):
`adopt-repair.mjs` SKIPped 20 of 22 REPAIR blocks**, at `tools/adopt-repair.mjs:94`,
`"repaired steps do not match the originals by text"`. Cause: precheck's repair
renumbers steps *and* rewrites the `step k.j` back-references inside step bodies,
so the repaired line no longer matches the original line and the text-based
mapping goes ambiguous. The more a proof cross-references its own steps, the more
likely adoption fails — so it fails hardest exactly on the long proofs that need
it most. **Adopting REPAIR output is therefore substantially a hand operation
today; budget for it, and never assume a clean `adopt-repair` run means the
repair was applied.** A positional-fallback adopter would fix this and does not
exist in `tools/`; adding one is a tool change and carries the §9 doc obligation.

### 3.2 `depcheck.mjs` — dependency and circularity
Runs over **actual content**, not the plan, so it stays true as things are
authored. Errors: `id-filename`, `yaml-escape`, `kind-prefix`, `authorship-invalid`,
`authorship-kind`, `dep-unresolved`,
`link-unresolved`, `self-dep`, `item-cycle`, `page-cycle`, `page-item-missing`,
`page-item-dup`, `draft-on-published-page`, `published-unaudited`,
`published-unchecked`, `justification-backward`, `justification-duplicated`,
`sources-checked-on-proved`, `b-leaf-content`, and `b-leaf-allowlist`.
Warnings are `orphan`, `multi-home`, `cited-not-in-deps`, and the explicitly
grandfathered `b-leaf-legacy` edge.

**This is the mechanical guarantee behind "no circular reasoning."**
`published-unaudited` is what forces the owner's re-audit when an amendment
changes published text.

**Authored B-leaf closure (owner, 2026-08-01).** `validate-plan` had always
checked the intended scaffold, but an author could add a `deps` edge to an item
living only on an examples/B page after the splice. `depcheck` now derives B
pages from the plan (with the `-examples` filename fallback) and rejects that
actual-content edge unless both items are on the same B page. A single known
published legacy edge is listed with its reason in
`research/b-leaf-legacy-allowlist.json`, emits `b-leaf-legacy` on every run,
and is not a general exemption. New B-page dependencies hard-fail.

### 3.3 `fwdcheck.mjs` — forward references
`forward-on-spine` is the hard one: a *load-bearing* forward reference on a
definition, lemma, proposition or theorem is forbidden, because the spine must
stay strictly ordered. Everything outside `## Remarks` counts as load bearing.
Also `forward-undeclared`, `forward-in-deps`, `forward-not-later`,
`forward-same-page`, `forward-dangling`, `forward-unused`, `forward-cycle`,
`stack-cycle`. Computes a `direct`/`inherited` marking that propagates along
`deps`, so a consequence of a forward reference is marked too. `--ledger` writes
the generated forward-reference ledger.

**Measured, 2026-07-27: the orientation/load-bearing split is what makes anchoring
vocabulary in a low published item affordable.** `web/lib/library-forward.ts`
strips `## Remarks` before seeding, so only load-bearing references propagate. The
algebra track needed the five order-7 items that say "commutative ring", "ideal"
and "maximal ideal" to point at the definitions arriving at order 34. A
load-bearing edge there would have marked **570 of 862 published items (66%)** as
resting on later material, because ℤ and the Cauchy construction sit at the bottom
of the graph, and a marker carried by two thirds of the library carries nothing.
As Remarks-only orientation refs the blast radius is **zero items**, and
`forward-on-spine` would have rejected the load-bearing form anyway, since those
five are theorems and lemmas. **Anchoring vocabulary in the spine is a
Remarks-only operation; there is no other legal form.**

**The corollary, measured 2026-07-28 (frontier-1): an item that DECLARES
`forward_refs` is radioactive as a dependency.** Propagation runs along `deps`,
so citing such an item marks the citer and everything downstream of it as resting
on later material — regardless of what the citer needed it for.

`rem-r-native-topology-scope` is the live example, and it is a trap because it is
the *natural* citation for a true and useful fact: that the two collections of
open subsets of ℝ (the order-native one and the metric one) are one collection.
`def-metrizable-space` attributes exactly that to it. But it declares
`forward_refs: [cex-closed-bounded-in-q-not-compact, def-topological-space,
def-metrizable-space]`, and when `separation-axioms` (order 261) cited it, **13
items inherited the sky ↗ chip for targets all published far earlier than 261** —
an assertion that is simply false about those items. The author removed all 13 by
unfolding the identification inline from `def-open-and-closed-in-r`,
`def-neighbourhood-r`, `def-metric-topology` and `lem-real-line-is-a-metric-space`.

So: before citing any item, check whether it declares `forward_refs`. If it does
and the fact wanted is elementary, unfold the fact rather than inherit the
marking. No gate reports this — `fwdcheck` is doing exactly what it should, and
the resulting chip is a correct consequence of an incorrect citation choice.

### 3.4 `extcheck.mjs` — the ‡ "not proved here" tier
`proved_here: false` items must be `rem-`, have `precheck: n/a`, carry no proof
section, carry a real citation, and have **no judge block** (there is no proof to
judge): `unproved-kind`, `unproved-has-proof`, `unproved-judged`,
`unproved-precheck`, `unproved-on-published`, `unproved-uncited`. For references:
`external-dangling`, `external-in-deps`, `external-not-unproved`,
`external-unused`.

The tier primarily records the deferred catalogue. Its narrow new-content use
is a genuine external dependency: Beta must never use an AI-generated
Statement/Construction dependency, search a reputable source for the exact
statement, and attempt a local proof first. Only a well-established result that
cannot be proved from available library dependencies may become a source-cited
`proved_here: false` `rem-` dependency. It goes in `deps` (not `external_refs`)
and its source, failed local route, and necessity go in the batch notes and
proof contract.

**A DEPENDENCE propagates; a MENTION does not.** Owner decision on a
measurement: propagating mentions marked 26 items instead of 13, including
`thm-zorn` and `thm-well-ordering-theorem`, which are proved in full here and
rest on Cohen for nothing — the chip would have asserted something false.
Mentions are added *after* the propagation fixed point so they can never act as
seeds.

### 3.5 `citecheck.mjs` — mis-attribution
Heuristic lint for the **dominant historical defect class**: 14 of 50 defects in
a 150-item certification pass were a fact citing an item that does not state it.
Pattern-matches elementary ordered-field and order-theoretic moves against the
item actually cited. Also flags **nonstrict attribution**: a source giving only
the strict form cited for a nonstrict claim. Warnings, not hard errors —
`[cited-not-in-deps]` has documented legitimate cases, notably naming an axiom
without using it.

### 3.6 `rendercheck.mjs` — defects visible only when rendered
Exists because two defects reached the owner's eye at level 8 in text that was
valid markdown, valid frontmatter, valid phase format and mathematically
correct. `wikilink-in-math` (the renderer rewrites `[[id]]` before KaTeX, so a
wikilink inside `$…$` silently kills the block while every other gate stays
green), `unsupported-tex-delimiter` (remark-math leaves `\(…\)` and `\[…\]`
literal, so authors must use `$…$` and `$$…$$`), `nested-dollar-in-display`,
`dollar-in-tag`, `multiline-display`,
`unclosed-display`, `unbalanced-inline-dollar`, `blank-line-in-inline-math`,
`tikz-in-proof-section` (a fence in a section rendered by `ProofBlock` would
bypass the server diagram extractor and reach the reader as raw code), and
**`katex-parse-error` from a real KaTeX parse** using the app's own KaTeX, plus
`unreadable` for a file it cannot open.

### 3.7 `prosecheck.mjs` — the prose defect class (owner approved 2026-07-28)
**Every defect this library has shipped for seven consecutive builds was in
prose**, and almost none was mathematical: they were claims *about the library* —
counts, positions, what the corpus does not contain. An author cannot verify any
of those while writing, because each is a claim about a file they are not looking
at. That is why they survive authoring and cost a human reading tier to find.

Three rules, gated: **no count in prose**; **no positional claim not derived from
the spec**; **scope denials scoped to this page's declared prerequisites, never to
"the library"**.

**Severity is split on certainty.** The only ERROR is `position-contradiction`: a
"later/earlier page" phrase whose linked target's page order contradicts it —
decidable from `plan-spec.json`, no judgement. Warnings are the heuristics
(`count-in-prose`, `count-of-this-page`, `library-scope-denial`), modelled on
`citecheck`, which is warnings-only for the same reason. **Never silence a warning
by making a true sentence vaguer.**

**Its own false-positive history is the instructive part, and is why the ERROR is
narrow.** The first draft fired whenever a direction word shared a *sentence* with
any wikilink and produced **240 "errors" on a corpus that had just been read end
to end** — i.e. almost all false. Two causes, both now handled: "above"/"below"
overwhelmingly mean *within this item*, not a page position, so only
"later"/"earlier" count; and the word must attach to the link, so the phrase must
name a page or the reading order and the link must fall inside the same sentence.
`"later on this page"` is excluded outright. After tightening: **0 errors on the
live corpus, and an injection of the real historical defect** (general compactness
at order 255 called "a later page" from 283) **is caught**, with the control clean
and the file byte-identical after restore.

Current corpus: 0 errors, ~670 warnings — dominated by real counts in prose such
as "three false statements" and "three theorems", which are *true today* and
exactly the class the rule bans.

### 3.8 `validate-plan.mjs` — the scaffold, before authoring
**Takes the spec path as an argument** — `node tools/validate-plan.mjs
research/plan-spec.json`. Run bare it prints usage and exits non-zero, which
reads as a gate failure and is not one.

Errors: `resolve`, `requires-resolve`, `requires-cycle`, `item-cycle`,
`page-cycle`, `prereq-order`, `undeclared-prereq`, `forward-ref`,
`forward-whitelist`, `intra-order`, **`b-leaf`** (nothing may depend on an item
on a B/examples page — B pages are leaves), `b-requires-a`, `dup-id`, `prefix`,
`kind`, `companion`. Warnings: `orphan`, `size` (above 100 A-page items; a review
ceiling, not a target or permission to prune), `redundant-prereq` (a declared prerequisite already reachable transitively; 12
stand in the spec as of 2026-07-27 and are kept deliberately where the direct
edge is mathematically real). 19 codes total.

### 3.9 `depsource.mjs` — where each dep actually lives
Per dep: `published` / `planned-earlier` / `draft-page` / `homeless` /
`planned-later` / `unresolved`. **Only `unresolved` fails.** `planned-later` is
the forward-reference report.

**Known blind spot: it reads `deps` only and cannot see `forward_refs`.** A level
can declare dozens of forward references while `depsource` reports
`planned-later 0`. This caused a false "zero forward references" claim at
level 9.

### 3.10 Proof contracts, finite smoke, and risk routing

`tools/proof-contract.mjs` turns Beta's formerly private proof-obligation map
into a versioned, per-level audit artifact. For each scoped proof-bearing item
it checks that every direct fact citation names a declared dependency, quotes a
clause from the actual cited Statement/Definition/Example, and lists every step
using that fact. It also requires every numbered step to have exactly one input
map entry and every standard boundary case to be checked or specifically ruled
out. It verifies accountable *links*, not the truth of the inference; Alpha and
the judges still read the mathematics. `--strict` turns absent scoped contracts
into gate errors.

Parallel Betas write only namespaced batch contract files. `merge-proof-contracts.mjs`
is the deterministic single-writer handoff that combines them for each
whole-level gate and rejects duplicate ownership. This avoids a shared JSON file
becoming a new parallel-write failure mode.

`tools/finite-smoke.mjs` runs selected, independently computed finite-model
checks for graph-tree, induced-complement, and cyclic-subgroup invariants. Each
test must name an exact item excerpt that it probes. It is a **falsification
screen**: a pass has no general-proof force, while a fail provides a concrete
countermodel or convention discrepancy for Alpha to adjudicate.

`tools/risk-report.mjs` exposes a transparent score for dependency fan-in,
proof length, biconditionals, existence/well-definedness, boundary-sensitive
language, induction, quotient constructions, and analytic limits. High and
critical results route to an additional Alpha proof-refuter and require a
recorded `risk_review` before Step 7. It is deliberately not a defect detector:
the score explains *where to spend reading attention*, not what is false.

### 3.11 Future-scope containment and coverage

`tools/content-policy.mjs` is deliberately scoped by the active batch manifests.
It closes rules that cannot truthfully be backfilled over legacy content:
component provenance is mandatory; only non-load-bearing generated
corollaries/examples/counterexamples have allowed roles; every
AI-generated Statement/Construction is forbidden as a dependency target; and a
future external fallback carries a source URL,
exact statement, failed local route, and necessity matching a reference URL.
In its explicit `--manifest-only` Step-0 mode it also rejects more than two A
pages, duplicate or colliding ids, missing dependency targets, backwards
reading-order edges, and any edge into a B/examples page. This enforces the
owner's future-session maximum of two A/B pairs per Beta without rewriting
historical three-pair manifests. The gate does not decide whether a literature
source is semantically correct; it makes that exact check an explicit Alpha
obligation, especially when an AI-adapted target's exact claim or conventions
are in doubt.

`tools/impact-audit.mjs` turns a repair's blast radius into a hard receipt. Each
`touchlog` snapshot now records both the full mathematical-content hash and a
public-interface hash. When an interface changes, the tool computes every
transitive reverse-`deps` consumer and every direct citation consumer, then
requires Alpha to account for each one. Proof-only changes do not manufacture a
large consumer queue, but still require their ordinary audit and rejudge.

**Published-dependency correction is a deliberately narrow use of those existing
mechanisms (owner, 2026-08-01).** A current Beta or Alpha may correct an already
published dependency only for an unambiguous falsehood whose exact replacement
is source-checked or directly elementary. Semantic obviousness is a reading
judgment, not something a gate can honestly infer, so the protocol records the
old claim, corrected claim, source or derivation, and provenance transition in
Alpha's per-level repair ledger. It takes a dedicated before/after touch pair,
then uses `impact-audit`'s actual reverse-dependency and direct-citation sets;
every listed consumer needs a concrete disposition. A material correction
invalidates its old judge pass and owner-audit date. `depcheck` already permits
the independent reader's `verification.verified` slot as the delegated publish
gate; the protocol records `delegated_by: owner`, rather than misrepresenting
that reader as the owner. The corrected item and every materially repaired
consumer receive a current paired rejudge. The exception permits correction, not
id renames, removals, speculative theorem repair, or an unresolved public
impact queue.

`tools/level-coverage.mjs` is the whole-level closure gate. It derives item and
relationship scope from actual batch manifests, demands a contract for every
proof-bearing item, verifies an Alpha receipt against a current manifest hash,
and requires both judge models to have a usable verdict for every item. A
current `keep: false` verdict is never silently cleared: the gate requires an
exact `{id, model, context_sha256}` Alpha adjudication from
`--judge-adjudications`; `confirmed_fatal` and a missing adjudication fail,
while `confirmed_nonfatal` and `false_positive` are retained as warnings under
the explicit 30-second-gap policy. With
`--verify-current-context` it recomputes each no-network judge prompt hash, so
an old pass cannot be reused after its item, cited statement, pair context, or
conventions changed. It also computes every planned-versus-authored `deps`
difference from the batch manifest; Alpha must record the exact planned and
actual lists plus a reason, so a legitimate proof-driven change cannot drift
silently into the scaffold. It requires `spine-audit.mjs`'s independent,
hash-bound reading receipt for proof-bearing items among the 100 largest
transitive dependency cones.

### 3.12 The published-page audit closures (owner, 2026-08-02)

`AUDIT-WORKFLOW.md` is the normative workflow; these are its mechanisms.

**`genrisk.mjs`** — the generated-statement blast-radius ledger. Seeds are
published items with `provenance.statement: ai-generated`, plus legacy
untagged `authorship: ai-generated` items (owner decision D5). Cones are the
transitive reverse-`deps` closure plus direct citation consumers —
impact-audit's consumer computation run corpus-wide, because a dependence
propagates and a mention does not — ranked by cone size like `spine-audit`.
Report mode regenerates `research/audit/genrisk.json` preserving dispositions
by seed id; `--receipt` requires one concrete Alpha disposition per
load-bearing seed (`retag`/`restate`/`unfold`/`narrow`/`verified-generated`/
`owner-queue`), verifies applied dispositions against disk, and fails on stale
cones. Baseline 2026-08-02: 23 seeds, all zero-cone — the containment rule
held historically.

**`rounds.mjs --audit-batches`** — emits the audit batch manifests
(`research/audit/wave<k>-<category>.pages.json`) entirely from disk: the wave
is the **site's reader-facing dependency level** (owner, 2026-08-02 — the
audit order must agree with the `/library` index), computed by a verbatim
port of the app's `pageGraph` (`web/lib/library-categories.ts`): item `deps`
projected onto pages via the home convention (home = first published page
listing an item; an item listed on P is always local to P), in-category edges
only, transitive reduction, longest path from a category root, roots at 0 —
so waves start at wave 0 and the bottom-up guarantee is category-local
(cross-category edges are A6's cross-batch audit). The plan-spec `requires`
level function keeps ordering the build only. Batches are one category per
wave; pairs are A page + published `-examples` companion; `not-proved-here`
is excluded from scope (its pages still take part in the home map); item
lists come from the page files (spec lists are stale for old pages), and
each item records its current authored `deps` as the reconciliation
baseline. Items already carrying both component-provenance tags are excluded
at scope generation (owner standing rule 2026-08-02 — tagged content was
audited and judged at authoring and is never re-audited), so every
downstream gate and the judge sweep inherit the exclusion; a fully-tagged
pair drops out of the wave plan. `genrisk.mjs` deliberately still reads the
whole corpus. Measured 2026-08-02: 40 batch manifests across waves 0–14,
2,179 items in scope, 428 already-tagged appearances excluded; all 66
in-scope pair levels equal the app's own `pageGraph` output, and the 16
absent published pairs are exactly the fully-tagged frontier pairs.

**`content-policy.mjs --audit --ledger …`** — the retro-tag accountability
gate. Every scoped item needs both provenance components and a matching
evidence-ledger row; evidence classes map mechanically to labels
(`exact-source`→literature-derived, `semantic-source`→ai-altered,
`established-knowledge`→ai-altered with mandatory `alpha_concurred: true` —
the sole URL waiver (D2), `trivial`/`none`→ai-generated). It enforces D5
(`legacy-authorship-retained`) and downgrades to warnings only what cannot
bind history: the ai-generated dependency prohibition (routed to genrisk),
generated kind/role restrictions, and structured external records on legacy
deferred items.

**`level-coverage.mjs --audit`** — same hard gate as the build (provenance,
contracts, receipts, current paired verdicts), with exactly one difference: a
legacy `ai-generated` dep target is a warning routed to the genrisk
disposition instead of an instant error.

**`JUDGE_LINEUP`** (env, read identically by `judge.mts`, `judge-sweep.mjs`,
and `level-coverage.mjs`): `deepseek+terra` (default, the build) or
`deepseek+sonnet` (the audit; `deepseek+opus` stays selectable but its
headless lane refused ~80% of calls at 16-way concurrency). See §5.

**`judge-sweep.mjs --manifests`** (2026-08-02): audit sweeps supply the batch
manifests, not `--pages` — the sweep's `--pages` universe is plan-spec's
`items` arrays, which are stale for legacy pages (measured: 180 of wave 0's
276 in-scope items). Manifest mode reads the same files the gates read and
dedupes shared-prelude items. The ledger skip (item × model × current context
hash) makes a completion re-run free of duplicate calls.

### Helpers
`reflow.mts` (join soft-wrapped steps; purely syntactic, never changes
mathematics) · `adopt-repair.mjs` · `consumers.mjs --changed` (who cites what I
touched — one agent per page otherwise leaves consumers unowned, which has failed
three times) · `rounds.mjs` (static levels; **ignores publication state**) ·
`gen-spec.mjs`.

**`rounds.mjs` emits ONE ROUND PER LEVEL** (owner, 2026-07-28). The old `--max 8`
cap split wide levels into sequential sub-rounds and turned 19 dependency levels
into 36 rounds; it is now opt-in and off by default. Splitting a level bought
nothing, because pages sharing a level are provably mutually independent — a
dependency would force the dependent page to a strictly higher level — so there
is no ordering to discover inside a level. The whole level is authored in
parallel by its Beta batches, each owning one or two A/B pairs and never more
than two. Only a real dependency edge forces sequencing.

**`rounds.mjs --pairs`** (owner, 2026-07-28) prints one row per A/B pair ranked
by dependency level, so a session can build the library layer by layer with
minimal forward referencing; `--md` emits it as the committed table
`research/BUILD-LEVELS.md`. **Regenerate that file, never hand-edit it** — the
spec moves under it every time a track is spliced. It shares `rounds.mjs`'s level
function deliberately, so the table and the round plan cannot disagree.

Unlike the round plan, `--pairs` reads **publication state from disk**, and it
reads the PAGE FILE first rather than the spec's `items` array. That matters: 62
page files exist and only 58 spec entries carry an item list, so a state inferred
from `items` alone reports long-published pages as unscaffolded. It also
distinguishes a B companion that is outstanding work from one the owner has said
is never being built — five A pages are published with no B page file at all, and
labelling those `not-building` is what stops every future session re-proposing
them.

## 4. The ledgers — state that must outlive its own repair

| ledger | written by | answers |
|---|---|---|
| `research/level<n>-judge.jsonl` | `judge.mts` via `JUDGE_VERDICTLOG` | how many times was this proof refuted? |
| `research/level<n>-judge-attempts.jsonl` | `judge.mts` via `JUDGE_ATTEMPTLOG` | why did a judge call slow, retry, or fail? |
| `research/level<n>-touches.json` | `touchlog.mjs` | how many times was this proof repaired? |
| `research/level<n>-RESUME.md` | orchestrator | what durable run state must survive context compaction? |

Both exist for the **twice-touched escalation rule**, and both were built because
the data was being destroyed:

- `verification.judge` records **passes only** — correctly, since an absent block
  honestly says "not yet judged" while a stale one claims a pass on text the
  judge never saw. So a rejection vanished the moment it was repaired.
  `JUDGE_COSTLOG` stores spend, not verdicts.
- Repairs had **no record at all**: they lived in subagent prose, and item files
  are untracked while a level is draft, so `git log` cannot supply them either.

**SNAP AFTER EVERY ITEM-MODIFYING STAGE, OR THE LEDGER IS EMPTY — measured
2026-07-28 (frontier-1), and it was the orchestrator's error.** A baseline
snapshot taken *before* authoring, followed by one taken after step 8, records
every item as a **first appearance**, i.e. a creation. First appearance is
deliberately not a repair (below), so `touchlog report --min 1` returned **0
items** for a build in which eleven step-8 repairs and nine author repairs had
actually happened. The escalation set had to be reconstructed from narrative in
the resume log rather than measured, which is exactly what the ledger exists to
prevent.

The rule in `LEVELS.md` — snap "after EVERY item-modifying stage" — is not
advice, and two snapshots at the ends of a build do not satisfy it. Minimum for a
build: baseline, **after authoring**, after step 6 audit, after step 8
adjudication, and after the step-9 sweep (plus after any item repair in step
10). The judge ledger still supplied refutation counts, so the
escalation rule fired correctly on its other trigger; repairs were the half that
went unrecorded.

`touchlog.mjs` hashes item files per stage. **The hash excludes the
`verification` block**, because stamping a judge verdict rewrites the file
without touching a character of mathematics — hashing raw bytes charged 53
stamped items with a phantom repair in one pass. It keeps `title`, `deps`,
`forward_refs`, `external_refs` and `proved_here`, since changing those *is* a
mathematical edit despite living in frontmatter. First appearance = creation,
not repair.

**Context-continuity checkpoint (owner 2026-08-03).** Once active context
reaches **60%**, the active run's `research/<run>-RESUME.md` is automatically
refreshed at the next safe boundary, preferably after the current task or gate
rather than mid-operation. It is deliberately a small operational handoff, not
another content ledger: owner policy deltas, current step and frozen-text state,
batch/agent ownership, material artifact and ledger paths, gates, open risks,
working-tree baseline, and exact next action — never secrets or copied
transcripts. After that durable session history is saved, context is compacted at
a convenient safe boundary whenever the platform offers or performs compaction;
on resume, the orchestrator reads it and verifies action-critical disk state
before continuing immediately. This closes the otherwise fragile gap between a
live agent's working context and the durable evidence ledgers without adding a
pause or a publication authority.

**Role-level continuity.** The orchestrator, Beta, and Alpha threshold is 60%
of the role's active context. Beta and Alpha keep the same compact-and-resume
procedure in their write-authorized namespace:
Beta appends a concise checkpoint to its batch notes and Alpha to its Alpha
report/handoff. This preserves the single-writer boundary while retaining the
agent's owned artifacts, completed checks, constraints, and exact next action.

**Attempt telemetry is separate from the verdict ledger.** A verdict line says
only whether the model produced a mathematical pass, refutation, or honest null;
it must not be polluted by an individual socket error or rate-limit retry. The
attempt ledger instead records the per-attempt latency, HTTP status and available
rate-limit headers, terminal finish reason, token usage, and structured transport
error cause. Empty non-final responses (`content: ""`, no finish reason) are
requeued by the sweep with jitter under the existing three-attempt limit; the
slot is released during the wait so other independent calls are not starved.
DeepSeek starts at
40k maximum-reasoning output tokens and receives a single 80k fallback only for an empty
`length` response; a second length response is retained as a reasoning-budget
null so its distinct failure mode remains measurable.

## 5. The judge

**Current routing (owner, 2026-07-31): session-item judging runs DeepSeek V4
Pro directly at maximum reasoning and freshly spawned GPT 5.6 Terra through the
Codex subscription at `xhigh`, in parallel.**

**Lineup parameter (owner, 2026-08-02).** `JUDGE_LINEUP` selects the paired
lineup without forking the tools: `deepseek+terra` (default, the build) or
`deepseek+sonnet` (the published-page audit, `AUDIT-WORKFLOW.md`). The Opus lane
is `runFreshOpus` in `judge.mts`: a fresh headless Claude Code process —
`claude -p --model claude-opus-5 --effort high --no-session-persistence`, an
empty temporary working directory (which also keeps the repo's project
settings and hooks out of scope), every core tool `--disallowed-tools` — the
`runFreshTerra` isolation pattern with the Codex binary swapped for the local
`claude` CLI. `--bare` is deliberately absent: it was measured (2026-08-02)
to skip OAuth credential loading and the lane reports "Not logged in". The frozen prompt, hash
attestation, verdict contract, attempt telemetry, and retry semantics are
identical across lineups, and `judge-sweep.mjs` gives the lane its own
16-slot cross-process pool. The corpus was authored largely by Claude/GPT
sessions, so DeepSeek remains the cross-family screen; the Opus lane is an
independent same-family comparison lane, exactly as Terra was labeled
relative to Sol. The injection-test requirement below applies to the Opus
lane like any other judge change. Both receive the exact same
hash-attested frozen item, A/B-pair, dependency, and conventions prompt; Terra
runs read-only from an empty temporary work directory. Every
GPT 5.6 Sol author, Beta, and Alpha uses `xhigh` reasoning with a 1,000,000-token
context window. DeepSeek is the cross-family screen from the Sol author; Terra
is an independent same-context comparison lane, not a claim of cross-family
separation. `tools/judge.mts --parallel` supports a one-item paired call and
retains the historical GLM/DeepSeek injection-test record. The normal sweep
uses independent model lanes so a slow judge never blocks the other's next item.

**When it runs:** once, after the step-6 independent-reader/Alpha audit, on final
text, with **both judges covering every item in the completed level** regardless
of whether Alpha changed it. The old
reason still applies: judging before audit bought verdicts that later rewrites
invalidated. Measured on `frontier-1`, 292 calls for 212 items produced 80 repeat
calls and 30 destroyed passes. Judging after audit preserves coverage and makes
verdicts describe the text that ships.

**Prompt source:** the adversarial refuter instructions live in
`tools/judge.mts`; `briefs/judge-conventions.txt` is loaded by that program by
default and its literal bytes enter the frozen prompt hash. `--conventions` is
only a deliberate experiment override. This closes the old sweep-path drift in
which documentation named the conventions file but `judge-sweep` never passed
it. The conventions remain a separate canonical block because omitting their
30-second threshold drives useless repair cycles. `briefs/codex-judge.md` is a
human-readable historical brief, not a runtime prompt source.

**Context unit:** the A/B pair. The judge receives the target item, its own page
and companion `-examples` page in full, plus only additional A pages that the
target page both declares in `requires` and actually cites. That edge-restricted
context rule was measured on `frontier-1`: passing every sibling page produced a
mean 93,810-token prompt and omitted three of five siblings on every call.

**Ledger:** every paired judge run writes two full lines to
`research/level<n>-judge.jsonl`, one per model, with at least
`{id, model, keep, reason, context_sha256, at}`. The matching
`context_sha256` attests that the pair saw the same frozen prompt.
`verification.judge` records a pass only when both models passed the current
text; an absent block means unjudged or owner-audited over a refuted false
positive. `keep: null` is not a pass. `tools/judge-sweep.mjs` resumes selected
plan pages: naming an A page automatically includes the item list on its
B/examples companion, so A/B-pair coverage cannot silently omit examples. It
skips only complete pairs whose hash also matches a freshly
assembled current prompt. It assembles that hash once per selected item and
shares it across both model queues. At step 10, `tools/judge-compare.mjs` reports both
latest-attempt and latest-usable agreement: a later null cannot erase an
earlier complete verdict on the same prompt, but a later substantive verdict
does. It also summarizes model-only findings for the owner report. Its optional
`--adjudications` input measures which judge actually found owner-confirmed
fatal logic or dependency-citation defects; rejection volume alone is never
treated as effectiveness.
The ordinary sweep selects both judges; a targeted `--models` recovery selects
only the named model's missing current-context verdicts and never re-spends a
complete verdict from its peer.

**Effectiveness ledger:** step 8 appends one owner decision per rejected
`{id, model, context_sha256}` to
`research/level<n>-judge-adjudications.jsonl`: `outcome` is
`confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`; a fatal outcome
also classifies `defect_type` as `logic`, `dependency_citation`, or `other`.
`tools/judge-compare.mjs <ledger> --adjudications <file>` reports the two
models' owner-confirmed fatal detection counts and fatal-confirmation rate among
adjudicated rejection candidates. It makes no unsupported recall claim, because
the complete universe of fatal defects is not independently enumerated.

**Concurrency cap (owner, 2026-08-01):** `tools/judge-sweep.mjs` uses two
file-backed, cross-process model pools: sixteen DeepSeek slots and sixteen Terra
slots. Each lane advances independently when one of its own slots is free; the
hard ceiling is 32 calls combined. The numbered slots live under model-specific
directories in `/tmp`, are acquired atomically, heartbeat while a child judge
runs, and are reclaimed only after a five-minute stale heartbeat, so a second
resumed sweep cannot exceed either cap and a killed run cannot block it forever.

**Injection tests still govern future model changes.** DeepSeek v4-flash was
reverted after passing a blatantly false injected claim; GLM caught that
injection but still scored 0/3 on real historical defects. A low rejection rate
and fluent reasons are not evidence of a good judge. The owner has nevertheless
required a DeepSeek v4 Pro parallel screen. The historical GLM result is
preserved as evidence, but the current DeepSeek/Terra comparison is measured
from paired Step-10 owner adjudications, especially fatal logic and
dependency-citation detections. Before any further judge model or context-shape
change, inject a defect known to be false under this library's conventions and
verify the model catches it.

## 5b. Audit-manifest coverage backstop

`tools/audit-manifest.mjs` supports step 6. Given the level batch JSON files, it
classifies every authored `deps`, `justified_by`, `forward_refs`, and
`external_refs` relationship as same-batch, cross-batch, published-backward,
forward, unresolved, or missing-source. It does not certify semantic correctness;
it makes omissions visible so Beta and Alpha reports can be reconciled against an
explicit checklist. `level-coverage.mjs` hashes that actual checklist into
Alpha's receipt.

## 6. The prompt-side mechanisms (`briefs/`)

Half the workflow. These are templates; substitute `<n>` and `<i>`.

| file | actor | carries |
|---|---|---|
| `beta-scaffold.md` | Beta-n-i, steps 1–2 | reputable-web-source research ledger, full published-corpus read access, plan order, dependency closure, namespaced writes, id reuse, seams, per-pair proof decomposition, corollary pass, 100-item review ceiling |
| `beta-step8-audit.md` | independent Step-6 reader, **step 6a batch auditor** (historical filename retained) | exhaustive audit of a batch the reader did not author; fixes; added/deleted in-flight results |
| `authoring.md` | the same GPT 5.6 Sol Beta-n-i that scaffolded the batch, step 5 | precheck traps, shipped-defect checklist, fixed A/B page-summary contract, no-judge rule |
| `alpha.md` | Alpha-n, steps 4, 6, and 8 | dispatches read-only skeptical proof-refuters; adjudicates their and judges' findings; propagates, audits independent-reader fixes, and audits cross-batch and cross-level references |
| `codex-judge.md` | DeepSeek V4 Pro + GPT 5.6 Terra judges, step 7 (historical filename) | human-readable role and JSON-verdict contract; runtime prompt lives in `judge.mts` |
| `judge-conventions.txt` | the judge | canonical triage/library block loaded by `judge.mts` into both frozen prompts |
| `audit-beta.md` | Audit-Beta, audit steps A1/A2/A4 (`AUDIT-WORKFLOW.md`) | provenance determination table, evidence ledger row contract, citation-precision duties, full proof-contract capture (D1), repair classes and A3 approval boundary |
| `audit-alpha.md` | audit Alpha, audit steps A6/A8 | sole-adjudicator role, D2 concurrences, refuter dispatch, cross-edge audit, genrisk dispositions, exact-hash judge adjudication |

**Beta proof-design backstop (owner, 2026-07-31).** The scaffold and authoring
briefs require a proof-obligation map, a boundary-case pass, step-level
dependency whitelisting, focused lemmas for distinct conceptual moves, and
claim-narrowing or dropping when the licensed proof does not close. These act
before the independent Step-6 audit; they do not replace it.

**Every one states the triage rule verbatim.** Non-negotiable: mathematical
accuracy, logical validity, correct citation. Explicitly acceptable, zero effort:
citational quirks, gaps a competent reader closes **within 30 seconds**,
non-fatal quirks, letter-level imperfection. It is repeated rather than
referenced because an agent that does not receive it damages correct text roughly
three times per real repair.

**Every content-facing brief also carries the natural-voice and citation rule
(owner, 2026-07-30).** Agents write direct mathematical prose without canned
headings, meta-commentary, or rhetorical filler. A `[F#]`, `[A#]`, or `[L#]`
fact states the cited proposition,
not an AI-sounding label or an interpretation of what the result is for. Exact
Definition/Statement text is preferred; a concise shortening must preserve the
domain, quantifiers, hypotheses, conclusion, and direction. The live defect that
prompted the rule was `Null definition: a null perturbation is eventually
smaller ...`, which obscured the ordinary quantified null-sequence definition.

**Beta scaffolding is source-grounded and dependency-closed (owner,
2026-07-30).** Before constructing page item lists, Beta searches reputable
mathematical sources on the web for definitions, theorem and corollary
statements, counterexamples, and proof strategies, recording working URLs,
supported planned material, and convention disagreements in its namespaced
notes. This is deliberately paired with full read access to published `items/`
and `library/`: every proposed published dependency is opened from disk and
checked for exact statement, hypotheses, direction, and status. Beta never
uses an `ai-generated` Statement/Construction as a dependency; the target
proof's provenance is irrelevant. An AI-adapted target remains eligible but is
source-checked whenever its exact claim or conventions are in doubt.
For a needed well-known result absent from the library, it searches an exact
source and first attempts a local proof. Only the source-checked,
proof-impossible-in-scope fallback may remain external, as a visible
`proved_here: false` `rem-` dependency with its necessity and failed local route
recorded; otherwise the result is decomposed, rescoped, or dropped.

**AI-generated truth-risk route (owner, 2026-08-01).** Every future
mathematical-content item receives `provenance.statement` and
`provenance.proof`, including examples, counterexamples, false statements, and
mathematical remarks. The former labels the claim/witness/construction, the
latter its local derivation. If Beta cannot show that the particular claim or
witness is both well-established and directly documented in reliable literature,
it marks the Statement/Construction `ai-generated` and records that gap in the
source ledger. That label raises scrutiny rather than lowering the standard:
Beta and Alpha test the claim or witness for counterexamples whenever there is
concrete doubt. An AI-generated proof by itself does not taint a source-backed
statement; a repaired derivation is not evidence that its Statement was true.

**Generated-claim minimization route (owner, 2026-08-01).** Source-backed
statements, not invented theorems, form the development. Beta may generate only
an easily verifiable corollary or a checkable example/counterexample. Every
AI-generated Statement/Construction is excluded from dependency infrastructure;
a would-be decomposition lemma stays inline or is replaced by a source-backed
statement. Alpha and the independent Beta reader reject any prohibited edge.

**Step-3 adjudication is an orchestrator mechanism (owner, 2026-07-30).** Beta
reports discrete recommendations with evidence; the orchestrator verifies them
from disk and approves or declines them without a routine owner pause. Its
ordered decision rule is: mathematical accuracy and correct dependency citation
are non-negotiable; then minimize forward references; then preserve
mathematical richness. The decision ledger is the durable audit trail.

**The step-10 fatal-error rundown and sole owner pause are durable aggregation
mechanisms (owner, 2026-07-31).** Step 9 completes the scope-denial sweep and
continues without a pause. Beta audit reports and Alpha's audit ledger classify every
publish-blocking defect by mathematical type, location in the artifact, affected
id, and fix disposition. Judge and touch ledgers add refutation/repair history;
the orchestrator adjudication log adds approved reversals and drops. Step 10
aggregates those records into a concise but complete owner report grouped by
type and location, then makes the only owner pause. Grouping may
compress repeated defects, but every fatal item must remain named and every
resolution must be stated.

### 6.1 No shell-permission prompts, and the mechanical backstops

**Owner rule, 2026-07-30:** neither the orchestrator nor any current or future
subagent may ask the owner for shell-command permission. Routine repository
reads, writes, and gates must use command forms already allowed inside the
workspace sandbox. A runtime without an escalation-free form records a blocker;
it does not raise an approval prompt.

On Claude runtimes, every brief still says to pass
`dangerouslyDisableSandbox: true` on every Bash call. On sandboxed Codex
runtimes, that parameter does not exist, so agents instead remain inside the
granted workspace and use non-escalated equivalents. This distinction preserves
the unattended-build outcome without asking the owner to approve prefixes one
command at a time.

Two Claude-side backstops remain in `.claude/settings.local.json`:

| backstop | what it does |
|---|---|
| `"sandbox": {"enabled": false}` | removes the cause — there is no sandbox to escalate out of, so no prompt can be raised |
| a `SubagentStart` hook | injects the rule verbatim into **every** subagent's context at spawn, whatever brief it was given |

The hook was verified end to end rather than assumed: a probe subagent reported
the rule present verbatim and its Bash call needed no approval.

**Why the rule is also written in every brief.** `.claude/settings.local.json` is
gitignored and does not travel with a checkout, so a fresh clone — or any machine
but this one — has neither backstop. The briefs are the only copy that ships.
Belt and braces is the correct redundancy here, not duplication to be tidied away.

`briefs/alpha.md` additionally carries a **pass-it-on** clause, because Alpha-n
briefs independent Step-6 readers at step 6 and those prompts may be composed by Alpha, not by
this repo.

## 7. Presentation (FROZEN — owner-approved 2026-07-24)

Implemented in the **app repo**, `/root/Projects/prestige-intelligence`. Do not
restyle without an explicit in-session owner instruction.

| file | owns |
|---|---|
| `web/lib/library-kinds.ts` | per-kind palette; colour always paired with the kind label |
| `web/components/library/ItemBody.tsx` | sectioned proof rendering, per-citation tag chips, and extraction of fenced `tikz` / `tikzcd` blocks for server-side SVG rendering |
| `web/lib/tikz.ts` | cached server-side TikZ/tikz-cd SVG compiler; serializes cache misses because node-tikzjax has one mutable TeX runtime |
| `web/components/library/badges.tsx` | kind chips, DRAFT banner, provenance + verification chips |
| `web/components/library/Mermaid.tsx` | flowchart v2, birds-eye, `landmark: true` nodes only |
| `web/lib/library-forward.ts` | the sky / dashed / ↗ forward-reference accent |
| `web/lib/library-external.ts` | the fuchsia / dotted / ‡ accent + `unprovedDependence` closure |
| `web/lib/library-categories.ts` | index grouping (itself frozen since 2026-07-26) |
| `web/lib/math-library.ts` | `plainTitle`, the one de-TeX for every plain-text context |

**Three ranked citation tiers, none relying on colour alone:**

| tier | colour | underline | glyph |
|---|---|---|---|
| ordinary citation | indigo | solid | none |
| forward reference | sky | dashed | ↗ |
| not proved here | fuchsia | dotted | ‡ |

The bottom tier **outranks** the middle: "never proved here" is a far stronger
caveat than "developed later". Since 2026-07-27 the ‡ tier is a **catalogue
only** — new content may not depend on it (`LEVELS.md`, self-contained scope).

## 8. What no mechanism covers

State this honestly rather than implying coverage.

- **No gate reads a page summary.** The judge reads items and cannot see a page
  file; precheck ignores prose. Six summary defects survived every gate at
  level 7; two published summaries were false at level 8. Level 7-algebra added
  one more: a summary opened "Nothing here assumes anything about numbers" while
  a theorem purely about ℤ was homed on that same page, contradicted by the
  summary's OWN later paragraph. The prompt-side backstop is now a fixed page
  contract (owner, 2026-07-30): every A summary is exactly two nonempty prose
  paragraphs under 150 words each, first for mathematical background and used
  declared dependencies, second for the main definitions/results and their
  logical progression; B pages carry no authored summary body. This remains a
  reading rule, not a mechanical gate.
- **`depsource` cannot see `forward_refs`** (§3.8).
- **Authored B-leaf edges are now covered.** `depcheck` reads actual page homes
  and rejects any `deps` edge to an item that lives only on B/examples pages,
  except an earlier item on the same B page. This closes the post-splice hole
  that `validate-plan` could never see. One published legacy edge is explicitly
  allowlisted and emits a warning on every run; it is not silently treated as
  conforming and no new edge receives that exception.
- **Plan/content dependency drift is now receipt-bound for future levels.**
  Step 5 may legitimately adjust deps as proofs take shape, but
  `level-coverage.mjs` compares every manifest entry's planned list with the
  authored list. Alpha records each exact difference and its reason in the
  manifest-hashed receipt. Legacy levels retain their historical manifests and
  are not retroactively rewritten.
- **Scope-denial decay has no detector.** A claim true when written that a later
  level falsifies changes no file, so every gate passes forever. Only the step-9a
  sweep finds it — and a repair confirmed by reading the diff can leave the same
  falsehood elsewhere in the same file, which happened at level 8.
- **`citecheck` is a heuristic**, not a proof of correct attribution.
- **High-blast-radius dependency proofs now have a dedicated reading receipt.**
  Readers normally open a cited item's Statement, which catches misattribution
  but not a false proof inside that item. The graph is a power law, so
  `spine-audit.mjs` selects proof-bearing items among the top 100 transitive
  consumer cones. The set is recomputed rather than remembered, because a new
  dependency can legitimately change the ranking. An independent reader's content-hashed receipt is required by future
  `level-coverage` gates and lapses on a mathematical edit. It does not replace
  ordinary per-level reading of lower-fan-out dependencies, nor does a receipt
  mechanically establish a proof; it makes the previously ownerless high-impact
  read explicit. Do not point the judge at the whole spine.
- **No page has ever been visually rendered.** `rendercheck` closes part of this.
- **The step-6 Alpha/Beta audit** required by `CLAUDE.md` before publishing
  mathematical content is the reading tier; it is not replaced by the judge.

## 9. Maintaining this file, `LEVELS.md`, `WORKFLOW.md` and `CLAUDE.md`

Owner instruction, 2026-07-27. These four are normative and **must be updated in
the same commit as the change they describe**:

| doc | scope |
|---|---|
| `CLAUDE.md` | session entry point, hard rules, publish path |
| `WORKFLOW.md` | per-page runbook and the hard rules in full |
| `LEVELS.md` | the per-level build, step 0 → 10 |
| `AUDIT-WORKFLOW.md` | the published-page audit, step A0 → A10 |
| `ARCHITECTURE.md` | this file — every mechanism, how it works, why |

**Triggers:** a new or retired tool; a new gate error code; a change to the agent
hierarchy or a brief; a new owner rule; a change to the frontmatter contract; a
measured fact about a mechanism (a precision number, a timeout, a failure mode).

**Verify against the code, not from memory.** Reading the source for this file
turned up a stale cross-reference and two undocumented mechanisms on the day it
was written. When a doc and the code disagree, **the code is the truth and the
doc is the bug** — fix the doc in that commit.
