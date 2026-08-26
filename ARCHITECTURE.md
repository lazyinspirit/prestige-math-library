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
precision and **0/3** on real historical defects. The current DeepSeek/Opus
pair receives no inherited quality claim: its effectiveness is reported only
from owner-adjudicated per-level findings, and no injection test has yet been
run against the Opus lane at all (§5). Never model it as the thing that
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

Run from the repo root. The engine runs the authoritative pass **after**
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

**`frontmatter-unparsable` / `frontmatter-duplicate-key`, added 2026-08-04, are
the same lesson one layer up.** The corpus loader parses frontmatter with the
`yaml` package inside a bare `catch {}`, so a YAML error does not break an item —
it *deletes* it, and `[...path]/page.tsx` then treats it as `missing` and calls
`notFound()`. The public gets a 404 on a page that is `published`, audited, and
perfect on disk; the owner gets the red "Broken published page" box.

Two published pages were in that state, each since the day it was published:
`real-analysis/power-series-and-real-analytic-functions` (8 items carrying a
duplicate `verification:` key) and
`abstract-algebra/ideals-and-quotient-rings-examples` (an unescaped apostrophe
inside a single-quoted `title`, which YAML requires doubled as `''`). Nine files,
found by neither the level build, five audit waves, nor any of the ten gates.

**Why every gate missed it is structural, not an oversight.** `depcheck` already
has exactly the right rules — `page-item-missing` and `draft-on-published-page` —
and both were blind, because every tool in this repo reads frontmatter with a
hand-rolled regex that takes the first matching `key:` line. A regex reader
cannot see a duplicate key (it stops at the first) and cannot see a quoting
error (it strips the quotes itself). So the gates were measuring a corpus the
renderer does not have. `depcheck`'s `yaml-escape` rule shows the hazard was
already known and was answered with a third hand-rolled rule rather than a
parser. The fix is that the gate now loads **the renderer's own `yaml`**, via
`paths.mjs`'s `yamlCandidates()`: agreement between gate and renderer has to be
guaranteed by shared code, since two parsers cannot be made to agree by
inspection.

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
`kind`, `companion`, **`size`** (above `--max-items` A-page items, default **60**
since owner 2026-08-11 — was a warning at 100. The remedy is always to SPLIT into
two or more A pages, never to prune: the same owner instruction requires Betas to
build every prerequisite a theorem needs, which makes pages larger, and 60 items
is the bound on a readable and auditable unit. No published page has ever exceeded
54, so the tightening stranded nothing). Warnings: `orphan`,
`redundant-prereq` (a declared prerequisite already reachable transitively; 12
stand in the spec as of 2026-07-27 and are kept deliberately where the direct
edge is mathematically real). 19 codes total.

**`--rehomed FILE` — the owner-approved re-home receipt (owner, 2026-08-06).**
See §3.11a. `dup-id` is the check it relaxes, and only for the exact
id/from-page/to-page triples the receipt names.

### 3.9 `depsource.mjs` — where each dep actually lives
Per dep: `published` / `planned-earlier` / `draft-page` / `homeless` /
`planned-later` / `unresolved`. **Only `unresolved` fails.** `planned-later` is
the forward-reference report.

**Known blind spot: it reads `deps` only and cannot see `forward_refs`.** A level
can declare dozens of forward references while `depsource` reports
`planned-later 0`. This caused a false "zero forward references" claim at
level 9.

### 3.9a `pathcheck.mjs` and `pathway-sync.mjs` — the category reading order

**Which failure it prevents.** A category page renders an authored course
pathway: named parts, each with a written brief, each listing its pages
(`library/<cat>/_pathway.md`, SCHEMA §6.1). Nothing about authored prose keeps
it covering a corpus that gains pages every level, so without a gate the
pathway silently stops describing the library and a reader is handed a reading
order with holes in it.

`pathcheck.mjs` is the gate. Hard errors: `part-page-missing`,
`part-page-foreign`, `part-page-companion`, `part-page-dup`, `page-unplaced`,
`part-empty`, `part-brief-missing`, `brief-orphan`, `part-order`,
`pathway-unparsable`. Warnings: `part-singleton`, `draft-unplaced`,
`brief-long`, `pathway-missing`. `part-order` is the load-bearing one: a page
must sit in the part of its last prerequisite or later, computed from the same
page relation the site renders, so the written order and the dependency order
cannot disagree.

`pathway-sync.mjs` is what keeps the gate cheap to satisfy. It runs at step 10,
ahead of `10-pathway-author-v2`, and places every unplaced page
in its LEGAL WINDOW: no earlier than the part of its last prerequisite, no later
than the part of the first page resting on it, choosing inside that window the
part where most of its neighbours already live. Measured against a hand-written
pathway, that heuristic reproduces the author's own placement. It never reorders
parts, never creates one, and never edits a brief. The receipt
`research/<run>-pathway.json` names the pages placed and the briefs that gained
material; `pathway-closure.mjs` converts those into exact section-hash
obligations which Lead Alpha rewrites before rendering. Same-run sync reruns
carry unresolved obligations forward instead of erasing them with an empty
placement pass.
Drafts are placed too, because a level publishes after the owner audit and a
sync that waited for `published` would place nothing.

Shared reading lives in `tools/pathway-lib.mjs`, so the tool that places a page
and the tool that checks the placement cannot drift apart.

### 3.10 Proof contracts, finite smoke, and risk routing

**Which failure it prevents.** A proof reads as licensed because every step
*looks* as though it follows, and nobody can hold a whole level's worth of "which
dependency was that, exactly?" in their head. `tools/proof-contract.mjs` turns
Beta's formerly private proof-obligation map into a versioned, per-level audit
artifact, so each citation, each numbered step and each boundary case has an
accountable link on the record and a gate that can miss one. It verifies those
*links*, not the truth of the inference; Alpha and the judges still read the
mathematics.

**`QUALITY-CONTROLS.md` owns the contract** and is where to look for what a
contract must contain: the version-1 JSON shape, the citation and input-map
rules, the eight boundary axes, and the gate command block. This section is why
each piece exists and what it has actually caught.

Parallel Betas write only namespaced batch contract files, and
`merge-proof-contracts.mjs` is the deterministic single-writer handoff that
combines them for each whole-level gate. That is what stops a shared JSON file
from becoming a new parallel-write failure mode.

`tools/finite-smoke.mjs` runs selected, independently computed finite-model
checks; the registry, and each check's obligation to name the exact item excerpt
it probes, are `QUALITY-CONTROLS.md` §"Finite countermodel smoke tests". It is a
**falsification screen**: a pass has no general-proof force, while a fail
provides a concrete countermodel or convention discrepancy for Alpha to
adjudicate.

**Its failure mode is silence, and it is the gate most likely to pass
vacuously.** A `finite_smoke` row is opt-in per item, so a level whose subjects
match no registered check reports `0 error(s), 0 check(s)` — indistinguishable at
a glance from a level that was checked. Measured on run `frontier-11`: a
240-item build of algebra, analysis and category theory executed **zero** checks,
because all four registered checks were then graph- or group-theoretic. Read the
check count, never the exit code alone.

Run `frontier-12` added `monotone-map-need-not-preserve-meets` and
`full-subposet-meet-differs-from-ambient` for that reason: a poset **is** a
category, so a finite poset is a real bounded countermodel search for a limit
claim rather than a toy, and it reaches subjects the graph and group checks never
could. How the two are built so a mistyped witness cannot pass by accident is
`QUALITY-CONTROLS.md`, with the rest of the registry.

`tools/risk-report.mjs` exposes a transparent score over structural signals —
listed with its two thresholds in `QUALITY-CONTROLS.md` §"High-risk routing".
High and critical results route to an additional Alpha proof-refuter and require
a recorded `risk_review` before Step 7. It is deliberately not a defect detector:
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
reading-order edges, and any edge into a B/examples page — **except an earlier
item on that same B page** (`batch-b-leaf-target`), with a later item on the same
B page caught separately as `batch-b-leaf-forward`. That exemption was missing
until 2026-08-11 and made this gate stricter than `depcheck`'s `b-leaf-content`,
whose rule has always read "except within that same B page" and which §8 below
documents. The two disagreed silently and the stricter one won by accident;
measured on `frontier-10`, it blocked six legitimate B-page scaffolds at step 0,
every one same-page and backward. An example resting on an earlier example of its
own page is ordinary and legal; what the leaf rule forbids is anything *outside*
a B page resting on its content. This enforces the
owner's future-session maximum of two A/B pairs per Beta without rewriting
historical three-pair manifests. The gate does not decide whether a literature
source is semantically correct; it makes that exact check an explicit Alpha
obligation, especially when an AI-adapted target's exact claim or conventions
are in doubt.

### 3.11a The re-home receipt — `--rehomed FILE`

**What it is for.** An item's home page is what fixes its position in the reading
order, and an item may only cite pages *below* it. So when a new page is built
underneath existing ones — a foundational page is the whole reason this happens —
a statement the library already owns may need to move down to be citable there.
Minting a second id for it is forbidden (`SCHEMA.md` §2: ids are immutable and a
statement gets one id), and citing it upward would be a load-bearing forward
reference, which `fwdcheck` forbids on the spine. **Moving it is the only legal
option, and nothing could express that.**

Two hard gates read a planned id that already exists as an illegal mint:
`validate-plan`'s `dup-id` and `content-policy --manifest-only`'s
`batch-item-already-exists` / `batch-plan-id-collision`. They are right to, by
default — that is how an agent claiming someone else's id gets caught. A re-home
is the one intentional case, and because it changes published **reading order**
it is owner-only (`AUDIT-WORKFLOW.md`). The receipt is that approval in
machine-readable form:

```json
{ "version": 1, "run": "<run>", "approved_by": "owner", "approved_on": "<date>",
  "reason": "<why the move is necessary>",
  "items": [{ "id": "<id>", "from_page": "<page>", "to_page": "<page>",
              "reason": "<why this item>" }] }
```

**It stays fully armed.** A receipt licenses only the exact id/destination pairs
it names; every other clash still fails. `approved_by` must be `owner` or both
tools exit 2. `from_page` is verified against the item's actual disk home rather
than trusted — a receipt naming the wrong origin raises `dup-id` with that
mismatch spelled out, because a stale receipt is precisely how this would quietly
stop protecting anything. `content-policy` additionally raises
`batch-rehome-missing-item` for a declared re-home with no item file to move.
`validate-plan` prints a `[rehome]` line per exercised entry: a waiver nobody can
see is a waiver nobody re-reads, and this one moves published pages.

**It does not do the move.** Re-homing means removing the id from its old page's
`items:` list and adding it to the new page's. On a published page that is a live
reader-facing change, so it belongs in the commit that publishes the new page,
never before — and until it lands, `depcheck` reports the item `multi-home`,
which is the truth.

**That deferral assumes the DESTINATION is unpublished** — it is written for the
case a foundational page is being built underneath existing ones, where applying
the move early would strand the item on a page no reader can see yet.
**When both endpoints are already published the deferral inverts** (measured on
`frontier-10`, 2026-08-11): the move is coherent the instant it lands, because
the item simply appears on the earlier published page instead, and *deferring* it
is what breaks things. `validate-plan` resolves item homes from the `library/`
page files on disk, so a staged move leaves it computing the OLD home and raising
`undeclared-prereq` on every page that cites the item from between the two
orders — four of them here, and no gate can be green until the move is applied.
Apply it at step 4 in that case, with the owner's approval already in the
receipt, and record why. **Both halves must move together**: the page `items:`
lists in `library/` AND the page item lists in `plan-spec.json`. Moving only the
page files leaves the spec disagreeing with disk and raises `dup-id` — 2 of them
here, which is how the omission was caught. Nor does the receipt touch the item text: a moved item's
own wikilinks may now point *forward*, and its prose may make positional claims
the move falsifies. Both are ordinary content repairs the audit has to make.

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
consumer receive a current Terra rejudge. The exception permits correction, not
id renames, removals, speculative theorem repair, or an unresolved public
impact queue.

`tools/level-coverage.mjs` is the whole-level closure gate. It derives item and
relationship scope from actual batch manifests, demands a contract for every
proof-bearing item, verifies an Alpha receipt against a current manifest hash,
and requires every currently configured judge model to have a usable verdict for every item in a
build. In published-audit mode, `--judge-targets` keeps those non-judge checks
whole-wave while requiring judge verdicts only for the exact repair receipt. A
current `keep: false` verdict is never silently cleared: the gate requires an
exact `{id, model, context_sha256}` Alpha adjudication from
`--judge-adjudications`; `confirmed_fatal` and a missing adjudication fail,
while `confirmed_nonfatal` and `false_positive` are retained as warnings under
the explicit 30-second-gap policy — and under R1 they close the rejection
without any edit, which `step8-guard.mjs` below enforces. Every row also
requires `item_sha256` (`judge-adjudication-unhashed`), the text state the
decision was made against. With
`--verify-current-context` it recomputes each no-network judge prompt hash, so
an old pass cannot be reused after its item, cited statement, or conventions
changed.

**`--judge-only`: the judge-closure half, runnable early** (2026-08-16). The
full gate needs a merged contract, a spine receipt and a completed audit
receipt, so the earliest point it can run is the very end of a build — which is
exactly where `frontier-14` found it red, with nothing left to do about it. Judge
closure needs only the manifests, the ledger and the items on disk, and answers
three questions: does every scoped item have a current configured-model verdict, is every
current rejection adjudicated at its exact hash, and is any adjudication
`confirmed_fatal`. `--judge-only` requires `--verify-current-context` — without
it the check compares verdicts against whatever context they were cast against,
which is trivially satisfied and answers nothing.

Two narrow, per-stage relaxations, because the same predicate is asked at three
different moments: `--allow-unadjudicated` demotes a rejection with no Alpha
outcome to a warning (true only at step 7, before anything has been adjudicated),
and `--allow-pending-rejudge` demotes a missing verdict (true only at step
8, where a repair correctly voids its own verdict and the rejudge stage owns the
consequence). `--out <receipt.json>` writes `needs_rejudge`, `unadjudicated` and
`open_fatal` as id summaries, plus exact `(id, model, context_sha256)`
`unadjudicated_rows` and an unconditional `closed` flag that ignores both
relaxations. A stage may proceed with work outstanding, but nothing reading the
receipt can conclude the level is finished when it is not. At `8-adjudicate`, a
nonempty exact-row list dispatches one narrow recovery Alpha before open-fatal
repair routing; it adjudicates only those missing rows and preserves the prior
Step-8 record. The receipt is written whether or not the gate passes: a failing
gate is precisely when the work it names needs to become someone's dispatch.
`frontier-14`'s step 8 named its 23 rejudge targets in a markdown table, the
rejudge never ran, and 22 of them are unjudged to this day — nothing downstream
can read a table. Frontier 16 exposed the other direction: six ids/eight exact
rejection rows reached the gate unadjudicated, and before this route two repair
rounds did no work until a manually targeted recovery Alpha closed them.

**COVERAGE FOLLOWS THE ITEM, NOT THE PAGE** (owner, 2026-08-06). The judge's
context unit is the A/B pair — an item is judged with its whole page and
companion in full, which is what lets a judge catch a claim its own siblings
falsify. The consequence nobody had costed: `context_sha256` moves when ANY item
on the pair is edited, so repairing one proof staled the verdicts of every item
beside it. Measured at wave 5's A8, 2 repairs demanded a fresh verdict pair for
all 31 items on the pair, 12 of which cite the repaired items nowhere, not even
transitively; over four rounds, 10 real repairs cost ~130 rejudge calls, and each
round's repairs staled the round before. A judge re-reading an unchanged proof
against an unchanged argument returns the same verdict and charges for it.
So an item is covered when EITHER its verdict was cast against the current pair
context, OR **the configured model's verdict was cast against byte-identical text of that
item** — `judge.mts` now records `item_sha256` on every verdict beside
`context_sha256`, normalised exactly as `apply-judge-stamps`' `attestedItemHash`
(the file with only the `judge:` block removed, so stamping a pass cannot
invalidate it). A REPAIRED item is never covered by the second route, because its
own hash changed; that guarantee is the point of the gate and is intact.
**The publication flip stales every verdict in the level, by construction**
(measured on `frontier-10`, 2026-08-11). `item_sha256` removes only the `judge:`
block, so the act of stamping a pass cannot invalidate it — but `status: draft`
→ `published` and the added `verification.audited` are both inside the hash.
Flipping 585 items therefore turned a green `--verify-current-context` into 585
`judge-coverage-missing` errors with **no mathematical content changed at all**:
the whole diff across those 585 files was 585 `status:` lines and 585 `audited:`
lines. So `COVERAGE()` in the step-10 table is a **pre-flip** receipt, and the
flip is the terminal act of the run; re-running it afterwards can only fail, and
rejudging to chase it would spend ~1,170 calls re-reading unchanged proofs. A
publishing run records the green step-10 suite, then flips. If the flip ever
needs to be gated after the fact, the fix is to widen the exclusion to the whole
`verification:` block, as `item-hash.mjs` already does for `step8-guard` — but
that renormalisation invalidates every verdict row ever written, so it is a
migration and not a patch. Rows
predating the field fall back to the strict context check. This is not a new
licence: `AUDIT-WORKFLOW.md` §9 and `CLAUDE.md` already required A8 to re-judge
"only on what changed", with an item SHA-256 so "a later unrelated companion-page
edit cannot stale it" — the field was simply never written, so the gate had
nothing to honour the rule with. It also computes every planned-versus-authored `deps`
difference from the batch manifest; Alpha must record the exact planned and
actual lists plus a reason, so a legitimate proof-driven change cannot drift
silently into the scaffold. It requires `spine-audit.mjs`'s independent,
hash-bound reading receipt for proof-bearing items among the 100 largest
transitive dependency cones.

`tools/step8-guard.mjs` enforces **R1: step 8 is fatal-only** (owner,
2026-08-03). `level-coverage` lets a `confirmed_nonfatal` or `false_positive`
clear closure as a warning, so no gate ever demanded the accompanying edit — and
`AUDIT-WORKFLOW.md` §9 already forbade it at A8. The failure it prevents is a
loop, not a wrong answer: any edit is a material rewrite under SCHEMA §3, whose
test is deliberately broad, so a cosmetic polish applied to a nonfatal finding
voids `verification.judge`, forces a rejudge, and resamples a refuter that
"tends to surface a different nitpick on each stochastic run of the same long
proof". Each turn costs another judge call and an adjudication and converges on
nothing. The guard reads a dedicated `touchlog` baseline taken immediately
before adjudication — the same dedicated-baseline pattern as `impact-audit` —
and requires every item changed since it to be licensed by a `confirmed_fatal`
row recorded against the pre-edit text state, which each adjudication row now
carries as `item_sha256`. Scoping to that explicit window is what makes it
exact: a step-9 scope-denial repair is simply not in it. **Owner clarification,
2026-08-25: the automatic Step-8 loop is capped at two frozen-context judge
cycles per item, including the frozen judge context whose first confirmed-fatal
adjudication licenses repair.** A fatal defect or
unusable judge response still open then becomes a terminal
owner/session intervention, recorded in an exact-hash
`<run>-step8-terminal-resolutions.jsonl` row. The terminal row is a distinct
licence source: it is neither a judge verdict nor a pass stamp, and a generic
retry cannot reopen the two-cycle budget. `tools/item-hash.mjs` is the single normalization both it and
`touchlog` use, so the two can never disagree about what a repair is.
**Two scope limits, measured in wave 5 (2026-08-06) and stated so nobody reads
the guard as wider than it is.** It tracks `items/` only, so a `library/` page-prose
mutation inside the step-8 window passes it silently even though R1's text
forbids a page mutation without a fatal licence; the guard is an item guard, and
page prose is covered by the A9/step-9 sweep instead. And `item-hash.mjs` is
*not* the normalization `judge.mts` writes into a verdict row's `item_sha256` —
the judge strips only the `judge:` sub-block, the guard and `touchlog` strip the
entire `verification:` block, so the two hashes differ for every stamped item.
Quoting a judge-ledger item hash into an adjudication would write a value the
guard can never match; adjudication rows take theirs from `item-hash.mjs`.
**A third limit, measured on `frontier-10` (2026-08-11): the guard assumes step 8
is one contiguous window, and `--against` only excludes edits that come after
it.** That run's owner pause fell *inside* step 8 — publication was authorised
while two judge rejections were still open — so 33 owner-approved published
scope-denial edits and 14 `forward_refs` declarations interleaved with two later
R1 rounds. The whole-run window then reports them all as `nonfatal-edit`, and no
single `baseline→against` pair separates owner edits from R1 edits. The honest
measurement is per round, one guard run per `baseline→against` pair, recorded in
the run's step-10 rundown; the gate itself closes at the last contiguous
pre-pause snapshot. If this recurs often, the fix is a guard accepting several
windows in one invocation rather than one.

### 3.11b The omission gate — `coverage-checklist.mjs` (owner, 2026-08-11)

**Which failure it prevents.** Every other gate in this file reads what was
written and asks whether it is true. None can see what was never written. That
blind spot is not hypothetical: `group-actions-and-cayleys-theorem` was
published with orbits, stabilisers and the orbit partition, but **without the
orbit–stabiliser theorem**, the class equation, or Cauchy's theorem, and with
`examples: []`. `free-groups-and-presentations` was published at 6 + 1 items and
had to be rewritten wholesale in run `freegroups-1`. Every gate passed both
times, correctly — nothing false was written.

**Why the obvious fix is the wrong one.** The tempting diagnosis is bad sources.
It is measurably not what happened: frontier-9's batch notes cite Sharifi
(UCLA), Brosnan (UMD), Judson, Axler and Diestel. The real defect is that a Beta
could *cite* a source without *harvesting* it. Brosnan's note is titled "Orbits
and stabilizers"; the ledger recorded it as covering "orbit structure"; the
orbit–stabiliser theorem was never scaffolded. Nothing asked what else was on
the page.

**The mechanism.** `research/<run>-batch-<i>.coverage.json` holds, per A page, a
list of sources — each with `url`, `kind`, `title`, `locator` (the exact range
read) and `contents`, the source's **own** section and named-result headings over
that range. Every heading carries a `disposition`:

| disposition | means | also requires |
|---|---|---|
| `included` | scaffolded in this batch | `item`, cross-checked against the batch manifest |
| `inline` | absorbed into another item's proof | `item` naming that item |
| `already-published` | the library already has it | `item`, verified `status: published` on disk |
| `deferred` | not built now, recoverable later | `reason` ≥ 40 chars about *this* result |
| `out-of-scope` | not this pair's material | `reason` ≥ 40 chars about *this* result |

At least two sources per pair, at least one of `textbook`/`monograph`/
`lecture-notes`/`course-notes`/`survey`. An `encyclopedia`/`wiki` source cannot
be a pair's only backing.

**Why source-anchored and not a minimum count.** A required *number* of results
would collide head-on with the scaffold-richness rule's "never pad". A required
*disposition for every heading the source itself contains* cannot be satisfied by
inventing anything — the bar is set by the source, so meeting it honestly is the
only way to meet it.

**Error codes.** `coverage-missing-page`, `coverage-missing-file`,
`coverage-unparseable`, `coverage-thin-sources`, `coverage-no-primary-source`,
`coverage-unknown-kind`, `coverage-source-url`, `coverage-source-locator`,
`coverage-empty-harvest`, `coverage-unnamed-result`, `coverage-undisposed`,
`coverage-included-no-item`, `coverage-inline-no-item`,
`coverage-published-no-item`, `coverage-not-published`, `coverage-unknown-item`,
`coverage-thin-reason`, `coverage-boilerplate-reason`. Warnings:
`coverage-no-manifest`, `coverage-low-yield` (fewer than 40% of ≥8 harvested
results scaffolded — a judgment call routed to Alpha, never a script's).

**Where it runs.** Required at **step 2**, where a gap still costs a scaffold
entry rather than a rewrite, and again at **step 6**, where it checks the
checklist is still true of what was actually authored. A missing checklist is a
`missing-receipt` failure, not a skip.

**What it does not do.** It cannot fetch a source and confirm the harvest is
honest — a Beta that under-enumerates a chapter passes. That reading is Alpha's
at step 6, and the checklist's real value there is that it gives Alpha something
specific and falsifiable to check rather than an open-ended "is this page thin?".
It also never checks that a cited URL *resolves* — §3.11c.

### 3.11c The citation-liveness gate — `url-sweep.mjs` (owner, 2026-08-15)

**Which failure it prevents.** §3.11b checks a source URL is *present*. Nothing
checked a reader could *open* it. On run `frontier-13` a batch cited Minhyong
Kim's UCL lecture notes at a URL returning 404: **47 of 114 harvested rows and 15
items rested on a document nobody could read**, both pages fell below the
two-independent-treatments floor, and every gate was green. It surfaced only
because a step-3 Alpha tried the link.

**The tool already existed and was already correct.** `url-sweep.mjs` was written
for the published-page audit and does exactly this job. Its only caller was
`run-wave.mjs`. The build never ran it — so the check that would have caught this
at step 2 ran, for the first time, three steps late. That is the whole lesson:
the gap was not a missing capability but a capability wired into one driver.

**Three changes made it a build gate.**

| change | why |
|---|---|
| `--coverage` | It read URLs from `items/<id>.md`, which do not exist until step 5. Scaffold-time sources live in `coverage.json`; without this the gate cannot run at step 2, the only step where acting costs a scaffold edit and not a rewrite. |
| `--recover` | **Recover before you replace** — see below. |
| `--fail-on-dead` | Default stays report-only, exit 0. `run-wave.mjs` halts the whole wave on a nonzero exit here, and a dead URL in published content is a finding for Alpha, not a reason to abort an audit. The build passes the flag; the audit does not. |

**RECOVER BEFORE YOU REPLACE.** The frontier-13 response to the dead source was
to re-source both pages onto different textbooks. That cost a 42-minute
re-harvest, an orchestrator instruction naming a chapter that turned out not to
contain the material, and nearly the loss of the original attribution — and the
notes were archived the entire time. What hid them is the part worth stating:
the citation read `homepages.ucl.ac.uk/~ucahmki/…` while the Wayback copy sits
under `www.ucl.ac.uk/~ucahmki/…`. UCL moved `~user` pages behind a new subdomain
and only the pre-move URL was ever crawled, so querying the archive on the
hostname *in the citation* returns nothing and reads as "never archived". The
recovery therefore walks host variants — each leading label stripped, `www.`
normalised, registry suffixes like `ac.uk` skipped — not the host as written.

A dead URL *with* a recovered snapshot is still a gate failure: the citation on
disk is what a reader clicks. The snapshot is printed so the fix is a URL swap.

**The swap is code (2026-08-17).** "The fix is a URL swap" originally named no
owner, and on frontier-15 that deadlocked stage 1: the sweep recorded two
recovered snapshots, the gate blocked, and the step-3 Alphas licensed to edit a
scaffold sat behind the `2-assign` barrier the gate held shut — while the
engine re-ran the full 18-gate battery back-to-back. The swap is a function of
two files on disk, so the roles rule assigns it to code:
`tools/url-recover-apply.mjs` applies every recorded snapshot into the
coverage sources (`url` ← snapshot, `original_url` preserved, idempotent), and
stage 1's `onGateFailure` hook runs it for exactly one repair round before the
battery re-verifies the archive URLs live. **Strictness is the point**: a dead
URL with no snapshot fails the tool, the round ends, and the blocker survives
— re-sourcing an unrecoverable citation is a judgment for a person or an
Alpha, never a default. The reader-clickable-citation principle is unchanged;
only the mechanism moved from "blocked until someone swaps" to "swapped by the
stage's own repair loop, then re-verified".

The sweep, in turn, treats a coverage source's `original_url` as a **declared
superseded citation** and excludes it from the probe queue (`superseded` in
the artifact). Found by the repair loop's first live firing: the swap landed,
and the sweep — whose collector deliberately harvests every URL in the raw
text — re-harvested the preserved original out of the repaired file and
exhausted the repair round on a URL that had stopped being a citation. Prose
URLs in items and ledgers keep the full harvest.

### 3.11c-2 Full-text fetchability — `source-fetch-check.mjs` (owner, 2026-08-17)

**Which failure it prevents.** The sweep probes headers only — a body download
at gate time once reported a live 9.4 MB PDF as dead — so a bot wall answering
200 with an interstitial body, and a URL that serves an *abstract* rather than
the document, both read as live citations. The owner's instruction: dead and
stale academic URLs are a normal occurrence; Betas test each URL at step 1 and
prove **full text** is fetchable — the document, never a landing page.

**Mechanism, four mechanical layers.** (1) Known abstract-page URL shapes fail
before any fetch, each message naming the fix — arXiv `/abs/` → `/pdf/` is the
canonical case; signatures are path shapes in the bot-wall spirit, never
substrings. (2) The final URL after redirects is checked against
`bot-wall.mjs`. (3) A PDF needs the `%PDF` magic, substantive size, and — when
its page objects are byte-countable — **more than three pages**; the count is
stamped so the step-3 Alpha can weigh a claimed locator range against it
(object-stream PDFs stamp `pages: null` and pass on size). (4) HTML needs
substantive extracted text.

**Who runs what.** The Beta stamps at harvest time (`--stamp` writes
`fetch_verified {at, bytes, sha256_16, kind, pages?|text_chars?}` per source;
idempotent; failures leave no stamp and name the scouting owed — an alternate
URL for the *same* source, or the §3.11c archive fallback). The gate is check
mode: every source stamped, no network, zero sources is a failure. It runs at
**both scaffold-side joins** (stage 1 and 3-recheck, a source can die between
them), and both joins share the `MECHANICAL_REPAIRS` table — a failure with a
table entry (the archive swap, the stamp) is repaired by code for one round;
only an unrecoverable or unfetchable source reaches a person or the fix loop,
because scouting a replacement is a judgment.

**Two bugs found by running it, both of which had already bitten the run.**

- *Liveness is a header question.* The first version downloaded the body and
  reported Knapp's *Basic Algebra* — a legitimately cited 9.4 MB PDF — as FAILED
  after timing out at 1.2 MB. That is almost certainly the same false positive
  that made a step-3 reviewer report that exact URL as a 404 and block a page on
  it. It now uses HEAD, falling back to a one-byte ranged GET for servers that
  refuse HEAD, so a large file costs the same as a small one. The real sweep went
  from 47 s to 4.9 s.
- *Multi-value flags.* `gates.mjs` expands `{checklists}` into one argv entry per
  file, and a comma-only reader silently saw batch 1 and pronounced the other six
  clean. The flag parser now accepts both forms.

**Where it runs.** Step 2 (scaffold sources) and step 6 (again, now including the
`sources.references` URLs step 5 adds to item files — a link can rot between a
scaffold and a publish). Receipt: `research/<run>-url-liveness.json`.

### 3.11d The engine — `tools/autopilot/` (owner, 2026-08-16)

This section is the **mechanism and the history**: what the engine owns, the
design rules its spec validator enforces, and the run that produced each. The
operational surface — the commands, the preflight, the blocker table, the
watchdog, what to do when it stops — is `UNATTENDED.md`.

**Which failure it prevents.** A stage completing produces artifacts; something
must notice and fire the next dispatch. For most of this library's history that
something was a model, and it is the slowest and least reliable component in the
system. Measured on `frontier-13`: **~14h wall-clock, of which roughly 5h was an
orchestrator writing a status report at a cleared stage instead of dispatching
the next one** — three times, against an explicit standing instruction not to
pause, with the identical failure already in session memory from two earlier
runs. Exhortation does not fix this. A stage boundary must be mechanical.

This section replaces the 2026-08-15 `run-supervisor.mjs` design and the
`run-drive.mjs` transition driver. Both put a model on the transition — one to
judge that a stage was finished, one to read a printed command and fire it — and
the owner's rule is that **no LLM drives a transition at all**.

**What the engine owns.** A stage owes a set of **units**; each dispatch declares
the units it **covers**; the stage is finished when the covered union contains
the owed set *and* its gates pass. Coverage is a set difference and "is this
stage finished" is a predicate over files on disk, so none of it needs a model.
Retries, blockers, the concurrency caps, the report cadence and every transition
are the engine's.

**What a model is still dispatched for**, and nothing else: scouting,
scaffolding, authoring, refutation, verification, adjudication, judgement, audit,
reporting, supervision. `src/roles.mts` enforces it *at the point of dispatch*,
because handing a model mechanical work does not error — it returns a plausible
answer and is wrong at a rate nobody measures. `transition`,
`dispatch-planning`, `gate-running`, `retry-decision`, `bookkeeping`,
`batching` and `status-reporting` are named as mechanical and refused. The test:
**if the answer is a function of files on disk, it is code.**

**Every stage must be able to fail.** `src/spec.mts` validates the stage table
before a run starts and `autopilot start` refuses rather than detaching:

- a stage declares at least one gate, or `gatesWaived: "<why>"` — a sentence, so
  a missing gate cannot pass for a deliberate one;
- the **terminal stage may not waive**;
- an empty gate list at runtime is *vacuous* and blocks;
- a gate whose declared `needs` are absent **fails**. It used to return
  `ok: true`, which is how a gate aimed at a receipt nobody generated reports
  that the receipt is fine.

This exists because `frontier-14` reached the end of step 10 with its receipt
gate red, two confirmed-fatal proofs unrepaired and sixteen judge rejections
nobody had read. No gate failed: `10-report` declared `gates: () => []`, an
empty list was read as "gates passed", and the last stage of the pipeline could
not say no. A model wrote an honest report saying the level was not publishable;
the engine marked the run done; both were right about their own half.

**Stages hold for each other.** Only the gate block waited for in-flight work to
drain; dispatch did not, so the engine would enter the next stage while the
previous one's processes were still running. On `frontier-14` that put step 8's
adjudicating Alpha on top of step 7's live judge sweep: every repair moved a
pair's context hash and re-armed the sweep on untouched page-mates, the ledger
grew by 97 rows *during* adjudication, and 8 items flipped pass to reject on
byte-identical text from the lane that had just passed them. Two stages writing
one ledger is a race, not concurrency. Holding costs seconds against stages that
run for hours.

**The self-correcting loops.** A gate says what is wrong; `onGateFailure`
dispatches whoever can fix it; the gate re-runs when those dispatches drain, and
either passes or names what is still wrong. Bounded by `maxFixRounds`, because a
repair that will not converge must become a blocker a person reads, not an
infinite spend. Two loops exist:

| loop | closure predicate | receipt |
|---|---|---|
| scaffold review → Beta fix → re-check | every pair `sufficient` | `scaffold-verdicts.mjs` → `<run>-scaffold-closure.json` |
| judge → adjudicate → repair → rejudge | every item paired, every rejection adjudicated, no open fatal | `level-coverage --judge-only` → `<run>-judge-closure.json` |

Both write machine-readable work, not prose. Judge closure carries id summaries
for rejudge/open-fatal routing and exact `(id, model, context_sha256)` rows for
missing adjudications. `frontier-14`'s step 8 named its 23 rejudge targets in a
markdown table and the rejudge never ran, because nothing downstream can read a
table; 22 of those repairs were still unjudged days later.
The hook itself also could not have worked as first written — it fired only when
the blocker *message* was new, and a gate failing the same way produces the same
message every time, so it fired once and deadlocked.

**Step 8 is now a five-boundary closure, not one mixed repair loop
(frontier-18, 2026-08-25).** The observed loop combined mathematical decisions,
contract repair, full repository validation and paired rejudging under one
counter. A proof-contract failure therefore spent a judge round; an
unadjudicated rejection could coexist with a missing pair and the sweep ran
first; and each retry reran 21–22 gates, including a serial 796-item currency
scan. The replacement gives each transition one meaning:

1. `8-scope` renders current exact rows but does not repeat the unchanged
   closure already proved by `7-judge`.
2. `8-adjudicate` decides every current rejection and licenses only fatal
   mathematical repairs.
3. `8-preflight` runs repository, contract and ledger integrity before another
   verdict is bought. Its repair budget cannot invoke the Step-7 full-sweep
   repair registered for `judge-closure`.
4. `8-rejudge` owns only exact judge currency. It always routes an existing
   unadjudicated/open-fatal row to the owning resumed group before it considers
   a missing-pair sweep. Immediately before fan-out a funded paired-lane
   preflight must pass. A durable receipt counts distinct frozen contexts per
   item, including that original confirmed-fatal context, and refuses a third context
   before any paid call. This is the sole lifetime two-cycle budget.
5. `8-close` runs the final repository/contract/ledger battery once. Full
   `level-coverage` waits for the Alpha audit receipt authored at Step 9;
   `8-final` instead recomputes exact judge currency with no repair hook, then
   `8-freeze` snapshots those bytes. An item edit during final closure makes
   currency stale and blocks rather than opening an implicit third cycle.

Recovery tasks are re-rendered from the live closure receipt, so stale historical
rejections are never copied into a new agent context. A failure naming exact
items routes only to their owners; an unscoped detector gets one focused review,
not four whole-group scans. Whole-level gates remain engine work and are banned
from agent tasks.

Exact context construction remains one canonical code path: every item invokes
`judge.mts --context-hash`, but `context-hash-pool.mjs` schedules those local
subprocesses through a bounded pool and reuses a receipt only when every item,
library file, judge convention, hashing tool and relevant environment input has
the same fingerprint. On frontier-18, the same closed 796-item
judge-only scan fell from roughly 5m47s serial to 57.63s at the default pool
size, with identical hashes tested against the former serial path. A failed item
is reported independently without discarding successful neighbours.

Every Step-8 adjudication now exact-joins a real `keep:false` verdict on
`(id, model, context_sha256)`; fabricated decisions, malformed JSONL, and
unlicensed creation/deletion are hard failures. Step-7 reading digests name the
exact owned page, item and seam inventories instead of an unverifiable count.
Cross-group findings have stable ids and owner dispositions, and a fatal target
must acquire its own targeted rejection before repair. Published repairs have a
separate closure and return to their originating group if either current lane
rejects them.

Stage hot reload now treats every gate-complete prefix as immutable. Frontier 18,
whose rejudge had already completed before the new preflight/close stages were
inserted, is handled by a write-once cutover receipt that freezes the successful
rejudge evidence and item hashes. Re-running the migration checks that boundary;
it cannot bless later edits by overwriting it.

The same rebuild removed another false repair source: proof contracts formerly
parsed only a numbered step's opening line. `facts-block.mjs` now owns the whole
numbered-step grammar, and both checking and regeneration see continuation-line
citations. The stricter live check found eight omitted `uses` mappings in two
frontier-18 entries; targeted regeneration cleared them without changing item
mathematics.

**The battery is event-driven, and a failing one reports everything it can
reach (owner directive, 2026-08-17; evidence in
`research/frontier-15-machinery.md`).** A blocked stage's battery re-runs only
when something that could change its verdict happened — a dispatch ended, a
repair round ran, a control command landed, adoption reconciled a record, a
result file appeared from an external process (dispatch-dir fingerprint), or a
backoff clock expired. There is no polling-count backstop: frontier-18 showed
that it simply reran the same 22-gate battery roughly nineteen times after
repair exhaustion, with no input capable of changing. frontier-15 ran the
7-judge battery 29 times against
unchanged inputs during one account outage, re-probing archive.org each pass;
unchanged inputs into deterministic tools cannot change a verdict. **A
hand-edit while the engine is blocked is re-armed by `autopilot retry`.**
On failure, the first failing gate keeps sole authority (blocker, repair
routing, `fixRounds`), and the REMAINING gates then run once in an ADVISORY
pass — named in `gate-advisory` events/notifies and on `failure.advisory` —
so one battery surfaces every routable failure instead of one per repair
round-trip (defect-ledger and risk-report failed the same 8-adjudicate join
and were discovered serially, costing two round-trips and a restart).
Blockers dedupe on stage+gate key, not message text. The stage table
hot-reloads at tick boundaries — validated first; a table that cannot fail is
refused and the running table stays — and `reconcileAdopted` stamps `endedAt`
onto records whose result files landed outside this process.

**An external outage is not divergence (owner, 2026-08-17).** The round budget
exists to stop a repair that will not converge; a platform outage — an account
session limit, a provider-wide 429 — says nothing about convergence, and during
the sonnet session limit on `frontier-15` every judge re-sweep was a guaranteed
null yet each consumed a round, exhausting `7-judge` on work that could never
have succeeded. A hook now returns `{ outage }` when **every** failure its round
produced carries the outage signature (`OUTAGE_SIGNATURE` in
`stages/mathlib.mts`; deliberately excluding UNPARSEABLE, which re-spends on a
round, and bare NO_CONTENT, which is a dead lane, not a busy one). The executor
**refunds the round and sets `backoffUntil`** (default 20 min): while the clock
runs the hook stays un-fired, no round spends, and exhaustion is never stamped.
Both round-spending sites — the gate-failure branch and the stalemate branch —
go through one `spendRepairRound`. A repair that runs as an *async dispatch*
(the 8-rejudge sweep) classifies one round late, over the `prevRoundAt` window
the executor hands every hook. The notify is `repair-outage`.

**Layout.** `src/executor.mts` is the loop; `src/coverage.mts` the predicate;
`src/gates.mts` runs gates and refuses a vacuous one; `src/spec.mts` validates
the table; `src/roles.mts` enforces the job rule; `stages/mathlib.mts` is the
only domain-specific file, 19 stages from scaffolding to the owner report;
`bin/autopilot.mts` is the CLI. Porting to another project
means writing another `stages/` file; porting to another agent platform means
changing one argv array in `autopilot.config.json`.

**`autopilot doctor`** exists because each thing it checks is answerable in
seconds *before* a run and costs hours if discovered during one, at 02:00, with
nobody watching. Every check corresponds to something that went wrong: four of
the first six tool invocations written from memory named a flag no tool defines,
and the judge sweep's would have failed twelve hours into an unattended run; a
missing brief is discovered by the stage that dispatches for it; the DeepSeek key
resolves through the app repo's `.env` rather than the environment, so an engine
started from a bare shell may or may not find it; and a scope ledger that was
never written leaves `manifest-integrity` nothing to compare against, with a
whole pair free to vanish. Its own flag check is guarded against collapsing:
zero flags examined over a table that *has* tool commands is reported as broken
detection, not as clean. The checklist as an operator sees it is
`UNATTENDED.md` §"Before you start".

### 3.11e-2 Stage completion by coverage, not by agent count (2026-08-16)

Every `done` predicate in the stage table used to be a count: "three group
Alphas returned". A count has to be known before the run, so it encodes one
run's shape. `3-review` hardcoded **3** because `frontier-13` had seven batches
and therefore three groups; `frontier-14` has six batches and two, so the
predicate could never fire and `run-drive` would have polled a finished stage
forever with nothing wrong in any log.

Deriving the count — `ceil(batches/3)` — fixes that instance and leaves the
class intact. It still hardcodes the grouping *rule*, so it breaks again when
the alpha cap changes, when a run deliberately uses one Alpha for everything, or
when a retried lane returns an extra result. And a count cannot distinguish
three Alphas covering two batches each from three Alphas that all covered the
same batch and left two unreviewed — the first is complete, the second has a
hole, and both read `3/3`.

So a stage declares the **units of work** it owes, each dispatch declares the
units it **covers** via `dispatch.mjs --covers 1,2,3`, and the stage is done
when the covered union over `ok:true` results contains the owed set. The number
of agents becomes irrelevant, which is the point — it is the thing that changes
every cycle.

| scenario | count says | coverage says |
|---|---|---|
| 1 Alpha over 6 batches | `1/3` — never advances | `6/6 covered` — done |
| 6 Alphas, 1 batch each | `3/3` after three — advances early | `3/6, missing 4, 5, 6` |
| 3 Alphas all on batch 1 | `3/3` — done, with a hole | `1/6, missing 2, 3, 4, 5, 6` |
| dead lane claiming 3 batches | counted if `ok:false` slips through | units not covered |

Two compatibility paths, both required. A run where **no** result declares
`covers` falls back to counting, so `frontier-13` and earlier still report
correctly. A run that is **partly** migrated — `frontier-14` hand-dispatched a
group Alpha before the flag existed — is read by coverage, and the out-of-band
map `research/<run>-covers.json` (`{"alpha-step3-b": ["4","5","6"]}`) annotates a
dispatch that could not declare its own units without rewriting its result file.
Leaving a lane unmapped in a mixed run correctly stalls the stage rather than
silently passing it.

### 3.11e-3 The step-0 drift review — `drift-review-check.mjs` (2026-08-16)

**Which failure it prevents.** A track design states what a page needs in
prose; `plan-spec.json` declares it as `requires`. When they disagree, the
scaffold is built against the design and step 4 rejects it as
`undeclared-prereq` — after the citations are written. The review is an Alpha
reading task because three mechanical differs each failed differently: the
real cases live in prose that never writes a `requires` line (frontier-14's
`ascoli-arzela`/`compactness`), or in a design that re-routed a whole proof
through pages the spec never declared (frontier-15's
`the-fundamental-theorem-of-algebra`, §II.8 of the algebra track — caught at
step 0, the pair left the run).

**Mechanism.** `autopilot plan` assembles per-page evidence
(`<run>-drift-evidence.json`: declared `requires`, transitive closure, every
design line naming the page, nearby out-of-closure page ids) and writes the
task. **Stage `1-drift` is the review, alone, ahead of `1-scaffold`.** The
Alpha applies **backward** edges itself (validate-plan gates the edit), and
since 2026-08-24 may also **reorder** to close a forward edge, **mint** a
prerequisite the spec lacks, or — above three mintings — **rescope** the run
onto its dependencies (≤14 pairs). `drift-review-check.mjs` fails the stage on
a missing report, an owed A page without exactly one well-formed verdict, an
applied edge untrue of the spec, an edge pointing at a page neither published
nor built here, or any `drift-blocked`. The verdict grammar lives in the task
template (`bin/autopilot.mts`), the brief (`briefs/alpha-drift.md`) and the
checker together; change them together.

`drift-blocked` still stops the run, but its meaning has moved: it used to say
*an owner must decide*, and now says *nobody decided*, since reordering,
minting and rescoping are all Alpha authority.

**Why it is its own stage.** It rode inside `1-scaffold` until 2026-08-24,
finishing in ~15 minutes against a ~50-minute scaffold window — free, while its
only outputs were `requires` edits and a report. The 2026-08-24 rulings made it
able to change **which pages the run builds**, and a scope change discovered
after ten Betas have scaffolded is a teardown of authored work:
`tools/drift-apply.mjs` refuses a scaffolded run, so the automation would have
deadlocked on precisely the decisions it was built to absorb. Ahead of the
Betas the same decision costs one Alpha pass. `batches()` reads the manifest
directory, so a batch minted at `1-drift` simply exists when `1-scaffold`
computes its units — no signalling between stages.

**The mechanical half.** `tools/drift-apply.mjs` is the drift gate's
`MECHANICAL_REPAIRS` entry. It reads `drift-minted` / `drift-rescoped`
verdicts, validates them against the spec the Alpha edited, writes the batch
manifests they imply, and regenerates the scope ledger, task files and covers
map from those manifests. It never decides anything: an Alpha that wrote
manifests would be an Alpha driving a stage transition (§3.11d). It exits 0
having done nothing when the report decided nothing, and refuses outright when
any manifest already carries authored items.

**History.** Between the engine rewrite and 2026-08-16 the review was a
never-invoked node: `plan` wrote the task and printed "dispatched as the first
audit node", no stage dispatched it, no gate read its report. Found because
frontier-15's step 0 contained exactly the drift class it exists to catch.

### 3.11e-4 Plan-time buildability — `unsatisfiableEdges` (2026-08-24)

**Which failure it prevents.** A run planned on pages that cannot legally be
built. `autopilot plan` now refuses a pair set containing a `requires` edge to
a page that is neither published on disk nor built by the same run — the same
predicate `drift-review-check` enforces at stage 1, and the same one
`autopilot frontier` uses to compute waves. `--allow-unbuildable` overrides it
and says on the record that the stage-1 stop was chosen.

**Why it exists.** On frontier-18 a fourteen-pair set was planned whose ten
largest members cited frontier-17 while that run was still `draft`. `frontier`
had already reported the buildable wave as **four**; the plan overrode it by
hand on the reasoning that frontier-17 had itself been planned before
frontier-16 was published — a misreading of git history, since the owner flips
`status: published` on disk hours before committing, and every gate reads the
filesystem. Nothing between `plan` and the stage-1 gate could see the
difference. The gate caught it 3h20m later, after ten Betas had scaffolded and
a session window was spent, and caught it as a stop needing a person. The check
costs two seconds. **Publication state is the `status:` line, never the git
log.**

### 3.11f Gate liveness — `gate-liveness.mjs` (2026-08-16)

Every gate reports `0 error(s)`. None distinguishes "checked 400 things, found
nothing wrong" from "checked nothing". On `frontier-13` that difference was
load-bearing four times: `finite-smoke` printed `0 error(s), 0 check(s)` for
most of the run because a contract may *reference* a smoke check the registry
does not *define*; `proof-contract --strict` passed single-step input maps;
`impact-audit` took its baseline after authoring so the diff was empty by
construction; and `url-sweep` read a comma-joined flag as one path and saw one
batch of seven.

The shared shape is a collapsed **scope**, not a failed check. `gate-liveness`
runs each vacuity-prone gate, extracts the count of things actually examined
from its own summary line, and exits nonzero when that count is zero. A gate
whose inputs are absent is `skipped`, never `passed`; a summary line it cannot
parse is `unparsed`, never `passed`. It runs inside `CONTRACT_TRIO`, so every
step that computes contracts asserts its own scope.

### 3.11g Boundary and citation detectors (2026-08-16)

Two defect classes had each reached disk twice, which is the threshold at which
`alpha-finding-lists-become-fix-scope` says a hand-read sample must become a
detector.

**`boundary-audit.mjs`** — `proof-contract --strict` checks the eight boundary
axes are *present*; it cannot check a disposition is *true*. On `frontier-13`,
2,169 of 3,144 rows were `not_applicable` and the most-repeated rationale
recurred 124 times with only the item id substituted — **two of those false rows
each concealed a confirmed-fatal defect** (an `h = 0` division by zero, an
`n = 0` counterexample), and `regen-contract-entries.mjs` re-emits them verbatim
after a repair. Two signals: *template reuse*, clustering `not_applicable`
rationales by normalised text; and *contradicted disposition*, a row marked
`not_applicable` on an axis the item's own text exhibits. Each detector is
scoped to the section it is entitled to read — the biconditional detector reads
the **Statement**, not the whole body, because a `[L#]` line in Facts quotes
*someone else's* biconditional. Unscoped it produced 256 hits and the first
inspected was a false positive; scoped, 25. Advisory by default;
`--fail-on-contradicted` and `--fail-on-template` make each signal blocking.

A **fourth signal** was added on `frontier-15` (Alpha `risk-review-1`): a
`checked` row crediting a step that **exists but discharges nothing**. The
`checked` detector had only ever tested whether the credited step *number*
occurs in the proof. `thm-sylow-second-theorem` marked `zero` and `degenerate`
as `checked` with the evidence "is resolved in step 4.1", quoting step 4.1
verbatim — and step 4.1 read *"We treat the trivial $p$-subgroup and primes not
dividing $|G|$."*, naming two cases and evaluating neither. Both halves are
mechanical, so this stays inside the tool's precision-first standard; it is
verified against a fixture that fires on the announcement-credited row and stays
silent on the row crediting real work.

**Not done, deliberately.** The same run found 518 boundary rows across 88
batch-2 items generated from a template that interpolates each item's own
**title and statement**, so no two rows are textually identical and the cluster
detector reports *nothing*. Stripping the title from the cluster key does
collapse them — into 31 clusters — but most of those are honest: "this item
states no biconditional" is the true disposition for 45 items and has one
natural phrasing. A detector that fires on a third of the corpus is one nobody
reads, so the title stays in the key and the class is reported instead
(`defect-ledger` row `f15-a-rr-005`).

**`announcement-steps.mjs`** (2026-08-17) is the item-side counterpart: a
numbered step whose every sentence *opens by naming an activity* and none of
which states an outcome. It splits hits into `strong` and `weak` so a terse but
real discharge — "We treat the trivial group, whose empty intersection
convention gives $\Phi(1)=1$" — is reported for a read rather than swept up.
Seventeen steps were repaired on `frontier-15`, two of them items whose *entire*
proof was announcements. Its verb list is **grown from live misses, never
guessed**: the first version missed 2 of 3 known instances because inline math
inside a *named case* counted as work, and a later one missed "Keep the two
prime orderings and the order-twelve boundary case explicit." because `Keep`
was absent. Cross-check a zero result against an orthogonal scan (steps with no
math, no relation symbol, under 170 characters) before trusting it; that scan is
too noisy to ship but it is what surfaced three further verbs.

**`citation-fidelity.mjs`** — the largest confirmed-fatal class, ten of
twenty-five step-8 rows. Two checks: *quote-not-found*, where the contract's
recorded verbatim `quote` does not appear in the cited item (hard failure under
`--fail-on-missing-quote`: the author asserted a verbatim quote), and *widening*,
where the fact line generalises it. Only two widening detectors ship. A third,
existential-read-as-universal, was written and **removed rather than shipped
noisy** — it fired 16 times on `frontier-13` and every case inspected was a
faithful reading of a ∀∃ statement. `tools/fixtures/citation-fidelity/` plants
one of each surviving defect shape so the tool cannot silently stop firing;
0 false positives over 1,416 real citations.

Both print locations, never a headline count that could be mistaken for a
finding count (`grep-counts-mislead`).

### 3.11h The defect ledger — `tools/defect-ledger.mjs` (owner, 2026-08-16)

**Failure it prevents:** defect history that cannot answer a question. ~78% of
frontier-14's fatals existed only in report prose; 7 of 3,920 adjudication rows
carried a stage; the one hand-maintained aggregate (`BUILD-AUDIT-INDEX.md`) was
wrong ~6x on its own total; `citation-fidelity` was built against a *memory* of
the inflated-citation class and found 0 of 15 real instances in three batches,
because the class's rows were never queryable at design time.

`research/defect-ledger.jsonl` — append-only, one row per DEFECT (two lanes on
one defect share one row via the `adjudication_ref` array), all runs in one
file because recurrence is the point. Eleven mandatory fields, all known at
disposition time; closed enums (`other` demands a note); the citation class
splits four ways (inflated/truncated/missing/corrupted — four detectors, four
fixes); `should_have_caught` is the leakage field and
`prevention: {mechanical|brief|process|none, ref}` is what makes it a control.
`unknown` is honest and first-class for the introduced-at fields.

**Whoever writes a disposition writes the row, in the same act** — 6b/6c
Alphas for the step-6 body, step 8 per `confirmed_fatal`, step 9 for
false-declines; step 10 authors no mathematical rows (it runs `stats` and
`render`). The `check` gate at 8-adjudicate/8-rejudge/9-scope/10-contract-close holds
ledger and adjudications to each other: exactly one row per `confirmed_fatal`
(anti-double-count), step-6-caught rows whenever a 6b report exists (a ledger
that mirrors the adjudication file fails), **fatal** open rows agreeing with
the closure receipt (two blockers once lived only in markdown; the receipt's
namespace is unrepaired fatal proof defects, and comparing every open row
against it false-positived on frontier-15's B41 — a nonfatal 503-ing archive
snapshot a 6b Alpha correctly left open pending a pre-publish re-sweep — and
burned a step-8 repair round), plus a liveness floor so zero rows never
passes. The 10-contract-close gate adds `--no-open`: step 9's sweep duty closes
each open row whose recorded condition is met, and a row still open at the
terminal stage is unfinished work the owner must read, whatever its severity.
**Step-6 ownership is auditable** (rebuilt 2026-08-25): each 6b group writes
`<run>-alpha-<g>-6b-decisions.json`. `step6-scope check --phase adjudicate`
derives the exact changed-item/page and reader/refuter-finding obligations,
requires each once, binds every decision to closed defect-ledger rows, and
rejects incompatible double ownership or an unowned row. A 6c final check
refuses all open Step-6 rows. This supersedes the count-only
`-6b-findings.json` contract, which could prove only that enough rows existed,
not that the right finding owned the right row. Historical files remain
evidence but satisfy no new run. The reader-findings batch label is
compatibility-normalised between bare `N` and legacy `<run>-batch-N`: `split`
already freezes either spelling into the scope, so `adjudicate` and `final`
must accept the same frozen bytes. The ownership join itself applies only to
decision-eligible Step-6 subjects — run items, run pages, and
published-dependency ids routed through a reader finding. Global contract-audit
summary rows stay owned by their own report/append file rather than forcing a
fake item-level `6b` decision. Relatedly, the
twice-touched instrument now sees: `9-scope` and `10-snapshot-v2` at their hard
boundaries (guarded so a resumed run never mislabels a later tree; the
`post-tau-v2` snapshot went with the visual lane on 2026-08-23, and
`10-snapshot-v2` is now the last one a run takes), and `touchlog audit` counts refutations as
distinct rejected VERSIONS (id + item hash) — both lanes rejecting one text
is agreement, and frontier-15's 30-item escalation noise collapsed to the 4
real signals its step-10 report had assembled by hand. `research/DEFECT-LEDGER.md` is the GENERATED view; it
leads with caught/prevented/escaped, never a bare total
(`judge-rejection-rates-mislead`). Back-filled rows are `source:
"reconstructed"` and the historical `check` against frontier-14 is
deliberately red where the record disagrees with itself — recorded, never
force-fitted.

### 3.11h-2 Exact Step-6 routing — `step6-scope.mjs` (2026-08-25)

**Failures prevented:** repeated full-level Alpha reads, unverifiable refuter
coverage, parallel scope-file overwrite, silent post-adjudication edits,
concurrent published-item repair, and ledger/report evidence that can be
retargeted after Step 6 closes.

`mathlib.step6.mts` supplies the active stages to the canonical table:

```
6a-baseline → 6a-read → 6a-split → 6a-refute → 6a-collect → 6b-adjudicate
→ 6b-baseline → 6c-edges → 6c-cross → 6d-close
```

The first six stages form one per-unit pipeline. Each batch owns independent
composite pre/post hashes and `<run>-step6-scope-<batch>.json`; the composite
covers item bytes, proof contract, semantic manifest ownership, page bytes,
page metadata, and relative item order. `split` derives changed/unchanged
carriers and structured reader findings. `refuter_scope` is every unchanged
item, every high/critical item, and every assigned page. `collect` requires its
exact `opened`/`not_opened` partition with `not_opened=[]` before group Alpha can
act.

Group Alpha receives only changed items/pages and reader/refuter findings.
`-6b-decisions.json` names each stable obligation once, carries evidence and a
mechanically stamped current carrier hash, and owns matching closed 6a/6b ledger
rows. Supplemental gate defects use `gate:<defect-id>`. Exact checks reject
missing/extra/duplicate/stale decisions and absent/open/mismatched/double-owned/
unowned rows. Published repairs use an atomic pre-edit claim plus locked JSONL
append, so parallel groups cannot edit one public item concurrently.

`6b-baseline` serially reconciles the plan and freezes exact post-6b carriers.
`6c-edges` computes cross-batch citations, forward references, and changes from
that boundary. `6c-cross` requires current-hash verdicts for every listed or
later-appearing obligation—including proof-only, contract, manifest, and page
changes—without re-reading unchanged same-batch or published citations. The
final battery also checks applied dispositions, plan/manifest agreement, impact,
contracts, risk, policy, coverage, URLs, and no open Step-6 row. The 6b and 6c
per-item/per-gate retry namespaces are separate.

`step6-close.mjs` reruns exact closure and writes the version-2 `6d-close`
receipt. It hashes the exact artifact set, canonical run-specific 6a/6b/6c
ledger projection, published-repair handoffs/claims, and reader/Alpha reports.
Later item repair is allowed; rewriting historical Step-6 evidence is not.

`<run>-step6-cutover.json` is the write-once migration for a run that completed
legacy Step 6 before these stages existed. It is bound to durable gate
timestamps and legacy evidence; future runs execute every rebuilt stage.

### 3.11i Full closure — `9-close`, `10-close-v2`, obligations (owner, 2026-08-17)

**Failure it prevents:** a run that ends as a to-do list. frontier-15 reached
its pause with four disk-derivable chores (stale impact receipt,
un-propagated plan drift, an uncommitted tree, external debts as caveat
prose) and one dead end (a contract-quality row whose remedy — the owning
Beta — had no dispatch route after authoring). `9-close` runs the splice
refresh and the impact-receipt refresh (`impact-audit --refresh-receipt`
adds `pending` rows that keep the gate red until the `impact-close` Alpha
writes real dispositions). The `10-contract-close` `--no-open` hook runs the
contract-rework loop: owning-Beta rewrite of its own worksheets (contract
files only), then Alpha certification closing the ledger row in place; a
quota-locked lane is an outage on the obligation row's clock, and a row's
`dispatch` field carries an owner model substitution on the record.
`tools/obligations.mjs` holds externally-blocked work as rows —
`block`-tier fails the terminal gate until closed or owner-accepted (named
acceptor, real reason); `report`-tier is surfaced, never blocking; due rows
with a `dispatch` spec re-fire themselves. `10-close-v2`, the terminal stage,
re-runs `level-coverage` and judge closure on the final tree, checks
obligations, verifies the **frontmatter closure** (`judge-stamps`:
`apply-judge-stamps --verify` fails on a ledger-licensed judge pass the item
does not carry, a pass block a current rejection contradicts, or any item
without a current configured-judge verdict; its mechanical repair is `--apply`, and
`lane-rejected` is the one honest skip — an adjudication never manufactures a
pass), and commits on `main` via `tools/run-commit.mjs` (refuses any
other branch, never touches a `status` field, no trailers). The stamp gate
exists because frontier-15 closed 398/398 in the ledger with **0 of 398 items
stamped** — no stage owned the act, and the owner ran the tool by hand at
publish (2026-08-17), where it first refused the ledger (retired Terra rows
under an exactly-two-lanes check) and then stamped nothing (clause-(a)-only
currency; `judge-currency.mjs` now supplies the shared predicate, with the
pair-context hash computed lazily only where the item-hash clause fails).
Push and publish remain owner acts.

### 3.11j Render closure — WITHDRAWN (owner, 2026-08-23)

The step-10 visual lane is **deleted**. It ran from 2026-08-21 to 2026-08-23 as
`10-render-initial-v2` → `10-sigma-initial-v2` → `10-tau-baseline-v2` →
`10-tau-repair-v2` → `10-tau-guard-v2` → `10-post-tau-v2` →
`10-tau-rejudge-v2` → `10-render-final-v2` → `10-sigma-final-v2`, backed by
`render-capture.mjs`, `render-manifest.mjs`, `visual-adjudication.mjs`,
`visual-repair.mjs`, `tau-rejudge.mjs`, the `sigma`/`tau` dispatch roles and
their briefs and schema. All of it is gone; nothing routes an image or an
`--output-schema` any more.

**Why, and what it cost.** The failure it was built to prevent is real —
mechanically valid Markdown whose rendered page shows raw or clipped LaTeX. What
it charged per run was two full-corpus Chromium captures (~90 MB of PNGs each)
and two whole-level adjudications of every A/B page, each a `cap: 1` xhigh
dispatch over the entire level. What it returned on frontier-17 was three
findings, all of which Tau closed as `no-change-required` because the repairs
were already on disk; `changed_files: []`, and the rejudge target set was empty.
The final Sigma pass was then dispatched over all 26 pages to re-confirm three
findings on three items, against a corpus in which zero of 6,151 items had
changed mathematically since the Tau baseline.

**What survives, and it is the part that worked.** `rendercheck.mjs` — the
mechanical source-level renderer check — is unchanged and still runs inside
`repoWide`, at every stage that sweeps the repo including `10-contract-close`,
`10-readiness-v2` and `10-close-v2`. The corpus-wide KaTeX mis-paint found on
2026-08-22 was an **app-repo** dependency conflict, not a content defect, and no
amount of Sigma adjudication of the build corpus would have prevented it; it was
fixed in `prestige-intelligence` at `2f098c5`. Rendering defects that originate
in the app belong to the app's own checks.

`publication-ready.mjs` still runs at `10-readiness-v2`, now requiring only the
pathway-closure and judge-closure receipts. It proves every workflow-owned
receipt is current and all scoped statuses remain draft, leaving owner
audit/status/push as the only actions outside the workflow.

**Cost of the deletion, stated rather than hidden.** No build stage now renders
a page in a browser. A defect visible only in the produced HTML — one that
`rendercheck` parses cleanly past — will reach the owner audit unflagged. That
is the trade the owner accepted on 2026-08-23.

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
baseline. **Its output is scope, not a work assignment**: a category with more
than two A/B pairs exceeds the Beta capacity rule, and no gate catches it —
`content-policy.mjs --audit` deliberately does not raise `batch-a-pair-cap`,
because the cap binds the assignment rather than the manifest.
**`tools/audit-batch-split.mjs`** closes that: A0 runs it immediately after
generation, applying `research/audit/wave<k>-batch-split.json`, which names A
pages only (a B companion always rides with its A page — the pair is the judge's
context unit). It refuses a target still over the cap, or any page left
unplaced, and writes nothing when it refuses, because a split that quietly drops
a pair would shrink audit scope while the wave still reported success. Declaring
the split as data rather than performing it by hand is not a style choice: A0's
first action regenerates every manifest, so a hand split is erased by the run
that consumes it. Idempotent, so A0 re-runs safely. Wave 5 is the first user —
`topology`'s five pairs become three batches of 2/2/1, chosen to sever a
cross-pair edge, which moved exactly one edge from same-batch to cross-batch
(501→500, 28→29) with the 1,927 total unchanged.
Items already carrying both component-provenance tags are excluded
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

**`level-coverage.mjs --audit`** — same hard gate as the build at the initial
A7 sweep (provenance, contracts, receipts, current judge verdicts), with
exactly one difference: a
legacy `ai-generated` dep target is a warning routed to the genrisk
disposition instead of an instant error. Its Step-8 mechanism is an exact copy
of the build: Alpha adjudicates the rejection from disk, records the
per-model/per-context outcome, deletes a stale pass on a material rewrite, and
re-runs Terra **only on what changed**. A public-interface repair repeats
impact closure and records a hash-attested targeted rejudge receipt, not a new
whole-wave coverage run or sweep.

**`JUDGE_LINEUP`** (env, read identically by `judge.mts`, `judge-sweep.mjs`,
`level-coverage.mjs`, `judge-compare.mjs`, `apply-judge-stamps.mjs` and
`run-wave.mjs`): `terra` for both the build and all future audit sweeps (owner,
2026-08-26). DeepSeek is not a Step-7 judge. Records from an unselected lineup
remain readable evidence only. Retired paired keys — `deepseek+opus`,
`deepseek+terra`, `deepseek+sonnet`, `deepseek+gpt54` — stay resolvable, because
a table carrying only today's answer is this repo's
oldest defect class. See §5.

**Those six tools now IMPORT the table rather than redeclaring it**
(2026-08-23; §3.13). They each carried their own copy until then, and one of the
six fell a lane change behind: `judge-compare.mjs` missed the 2026-08-17 switch
that the other five carried, so frontier-15's step-10 report had to be computed
by hand — the reporting tool was the one tool that could not read the run it
reports on. `preflight.mjs` keeps a literal copy **on purpose**, because it must
not import a tool it is checking is runnable, and
`tools/autopilot/test/model-registry.test.mts` reads that copy from source and
fails if it disagrees with the registry.

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

### 3.13 Environment resolution and preflight (2026-08-03)

**`tools/models.mjs` — the model registry (2026-08-23).** One file owns every
model id, the runner that can spawn it, its family, the `LANES` assignment
naming which job each model does, and `JUDGE_LINEUPS`. `dispatch.mjs` builds each
role from `lane('agentic')` or `lane('crossFamily')`, so a role cannot name a
model its runner cannot spawn; the six judge-lineup tools import the map.

*Failure it prevents:* the 2026-08-23 Sol/Terra → Opus swap changed no logic at
all and still had to touch twelve role entries plus six duplicate copies of one
three-key table. An earlier swap left `judge-compare.mjs` a lane behind, and
frontier-15's step-10 report was computed by hand as a result. A model swap is
now one edit to `LANES`; a new model id is one edit to `MODELS`.

*What it deliberately excludes:* caps, sandboxes, effort, web access and working
directories stay in `dispatch.mjs`, because they belong to the role and must not
follow a lane swap. `preflight.mjs` keeps a literal lineup copy on purpose — it
must not import a tool it is checking is runnable — and
`tools/autopilot/test/model-registry.test.mts` reads that copy from source and
fails on drift, asserts the `[1m]` context suffix survives, asserts no lineup
pairs a model with itself, and asserts `crossFamily` never resolves to the same
family as `agentic`. That last one is the guarantee a lane swap can silently
delete rather than rename.

This repo has no `node_modules` of its own. tsx, the normative precheck source
and KaTeX all live in the `prestige-intelligence` checkout next door, and every
tool that needed one reached in through a hardcoded `/root/Projects/...`
literal. **`tools/paths.mjs`** replaces all of them with one resolver: the app
repo is `$PRESTIGE_APP_DIR`, else the sibling checkout, else the original VPS
path, first existing directory winning; this repo's own root is derived from the
module's location and is never configured. Every accessor throws with the remedy
(`npm install in <worker>`) rather than returning a path that does not exist, and
nothing resolves at import time, so a tool that never needs tsx does not fail to
load because tsx is absent. `tools/tsx-run.mjs` is the launcher every doc and
brief now names — `node tools/tsx-run.mjs tools/precheck.mts` — instead of
repeating a loader path that only resolved on one machine. `CODEX_HOME` defaults
to `~/.codex` rather than `/root/.codex` for the same reason.

**`tools/preflight.mjs`** answers "can this machine run a build at all" before a
run starts spending model calls. The failure it exists for is the SOFT one:
`rendercheck` reports `real KaTeX (SKIPPED)` and exits 0, so a gate that never
ran is indistinguishable in an unattended log from a gate that found nothing
wrong — and the same is true of the frontmatter parse without `yaml`. It checks
the app repo, tsx loader, precheck source, KaTeX and `yaml` resolution, the
claude CLI, the now-optional Codex CLI and its `auth.json`, DeepSeek key
reachability (never printing it), Node version, git cleanliness and branch, and
free disk. **Which CLI is REQUIRED is computed, not assumed, and the computation
inverted on 2026-08-23:** every dispatched agent role is now claude, so the
claude CLI is unconditional and Codex is required only when the selected judge
lineup names a GPT-family lane. `--judges` additionally spends one minimal call
per lane through `judge.mts --preflight`; it is opt-in because it costs a live
token, and it is the check most likely to catch what actually kills an overnight
run — a spent subscription, which cannot be repaired without a human.

**That blast radius is now total, and the preflight cannot see it.** Before
2026-08-23 the build and the audit drew on two independent subscriptions, so an
outage on one left the other running. Every lane but `audit-refuter` now draws on
the Claude subscription: one session or weekly limit stalls the build, the audit
and the second judge lane together. Worse, a spent quota leaves a working CLI and
a valid session, so `claude-cli` stays green while every lane returns a capacity
refusal — which is why `claude-quota` is recorded as an explicit unchecked
warning rather than left silent. Exit 1 means at least one required check
failed.

**`tools/gates.mjs`** is the gates of record for one AUDIT step, as a table
instead of as prose someone reassembles by hand each time: `node tools/gates.mjs
--audit --step A6 --run wave3`, `--audit --list` to print the table without
executing, and `--json` for a driver. Its build table is retired: the build's
gates of record are `tools/autopilot/stages/mathlib.mts`, run by the engine. Two invariants make it safe to re-run. **A gate never
modifies content** — `reflow.mts`, `adopt-repair.mjs` and
`merge-proof-contracts.mjs` all write, so they are repair or prepare actions the
driver runs *before* this, never members of the table. **A gate never spends** —
`judge-sweep.mjs` is an action with a bill; `level-coverage.mjs` is the receipt
gate that checks what the sweep produced, which is what lets a step be re-gated
after a crash without re-buying its verdicts. A `needs` receipt that is absent
fails as `missing-receipt` rather than being skipped, because an unattended run
shrugging at an absent judge ledger is the exact failure this whole layer
exists to prevent. Steps 1 and 3 legitimately have no mechanical gate. Step 9
runs `prosecheck` for its decidable `position-contradiction` error only: with
`--strict` it would also fail on 589 heuristic warnings the published corpus
carries with legitimate cases, so that list is advisory and is the sweep's
candidate set. The spine receipt is resolved by whichever name the run actually
uses (`<run>-spine-audit.json`, `<run>-dependency-spine-audit.json`, then the
shared path the docs name), because practice and documentation diverged there.

**`tools/dispatch.mjs`** runs one briefed role, so a build no longer depends on
the subagent mechanism of whatever session started it. It declares three runners
and **routes roles to two of them** (owner, 2026-08-23): `claude` carries every
agent lane — Claude Opus 5 for Beta, reader, refuter, `alpha`, `scaffolder`,
`mechanic`, the audit orchestrator and the audit's
Beta/Alpha/`certifier` — and `deepseek` carries the audit proof-refuters as an
HTTP call rather than a process. Every claude role receives `xhigh` reasoning
(`mechanic` excepted at `medium`) and the 1,000,000-token window, which on this
runner is the `[1m]` suffix on the model id and nothing else.

The third runner, `codex`, now has **no role routed to it**. It carried every
agent lane from 2026-08-20 until 2026-08-23, when the Codex subscription reached
its weekly limit and the owner moved all of them to Opus 5. It is kept rather
than deleted for the same reason the `claude` runner was kept through that
window: it is the return path when the subscription resets, and its `--sandbox
read-only` is a kernel-level guarantee the claude runner can only approximate.

**Two things the claude runner has no flag for**, both of which Codex enforced
server-side and which `dispatch.mjs` emulates in the prompt: `--image` (paths
the model must Read) and `--output-schema` (a literal final-message contract,
with the `--result-artifact` JSON parse as the sole enforcement). **No role uses
either today** — the step-10 visual lane was the only one and was deleted on
2026-08-23 — so both shims are unexercised engine plumbing, kept because they
have their own test coverage. Anything routed through them again inherits the
weaker guarantee: the failure MODE is unchanged, a malformed final message still
turns the dispatch red, but its likelihood is not.

**What the move does NOT buy, stated once so no later session has to infer it.**
The Step-7-and-later judge is now Terra alone (owner, 2026-08-26), so its verdict
has no cross-family judge corroboration. DeepSeek remains only as the separate
audit `audit-refuter`; its output supplies no judge coverage. Alpha's `effort:
'xhigh'` stays explicit in
the role table even though the runner defaults are its own, because this is the
adjudicating lane and a silent downgrade there is invisible in the output.
`web: true` is now documentation rather than a switch — the claude runner loads
WebFetch/WebSearch by default for a write role and names them in the read-only
allow list — but it is kept because it records which lanes must not lose the
capability, and because the Codex return path reads it as a real switch. The role
keeps `workspace-write` and its lane cap (3, raised to 4 on 2026-08-24).

Read-only is a property of the ROLE, not of the prompt, and **each runner
enforces it differently because their guarantees differ in strength**:

| runner | mechanism | strength |
|---|---|---|
| `codex` | `--sandbox read-only` | process-level |
| `deepseek` | tool-less transport: no disk, no web, ever | absolute, and blind |

The retired Claude-runner observation remains in the historical record but is
not part of the active audit path. A deny list cannot cover a tool
that mints a fresh tool set, so the guarantee is now the ALLOW list, which
restricts what loads at all; re-probed, the same request reported no write tool
"loaded or discoverable" while `WebSearch` still retrieved and cited a live URL.
`node tools/dispatch.mjs --check-read-only` re-asserts the table above and is
cheap enough to belong in a preflight. `requiresTask` is enforced for the
tool-less runner: a refuter dispatched without assembled context would read
nothing, confidently.

**`tools/judge-overlay.mjs` — pair context for an ENRICHMENT run (2026-08-10).**
`judge.mts` discovers an item's A/B pair by reading the page files'
`items:`/`examples:` frontmatter, and the owner's rule makes that pair the
judge's context unit. An **enrichment** run — new draft items added to an
already published page — cannot list them there: `depcheck` raises
`draft-on-published-page`, and `library/` is bind-mounted by the live site, so a
served page naming an unpublished item publishes a dangling reference. Left
alone the new items are judged with **no page and no pair context**, and the
failure is silent, because a page listing nothing is indistinguishable from a
page with nothing to say.

`judge-overlay.mjs` copies `library/` to a scratch directory and splices the
staged ids into the affected pages there; `JUDGE_LIBRARY_DIR` points **page
discovery only** at that copy. Item bodies always come from `items/`, so the
overlay changes which ids count as page-mates and nothing else, and `library/`
is never written. Unset the variable for an ordinary build, whose pages are
themselves drafts and already list their items. Verified on `freegroups-1`: the
overlay resolves 32 A-page items and 12 B-page examples where the served pages
carry 6 and 1.

**Dispatch-log retention (2026-08-10).** `dispatch.mjs` writes
`<role>-<label>.log` per run and **no tool ever reads one back** — they are
write-only evidence, cited by path in Alpha reports and named by the
`agent-failed` halt code. They reached 742 MB across 2115 files, growing 400 to
700 files per wave, against 18 MB for `items/` — the library itself. They are
therefore **gzipped on disk and untracked** (`.gitignore`), not deleted: every
byte stays recoverable from git history at
`git show <commit>:research/audit/wave<k>-dispatch/<role>-<label>.log`, and the
working copy reads with `zcat`/`zless`/`zgrep`. Concluded waves' `*-touches.json`
snapshots get the same treatment; a **halted** wave's snapshot stays tracked and
plain, because `touchlog.mjs` must still read it on resume.
`research/BUILD-AUDIT-INDEX.md` is the concise standing record of what each
build and wave did and where its evidence lives.

**Alpha's lane cap is 4 (owner, raised 2026-08-24): GROUP ALPHAS.** It was 1, with the
stated reason "single writer of the prose scaffolds" — which is a **step-4**
invariant that the cap was enforcing at every stage. One Alpha per at most
**three** Beta batches now runs step 3 and steps 6a/6b, so no single agent reads a
whole level's proofs: `frontier-12` put **454 items across 24 pages** in front of
one Alpha, and attention, not context length, is what that spends.

**The mutual-exclusion guarantee is relocated, not deleted** — the same move
`scaffolder` makes below. A group Alpha at step 3 edits no batch file at all and
writes one namespaced report; at step 6 it owns its own group's batches and no
sibling's. Three stages stay single-agent **by rule rather than by lane cap**,
and the rule lives in `LEVELS.md` §"Step 3"/§"Step 6", not in this number:

| stage | why the LEAD Alpha alone |
|---|---|
| step 4 propagation | the shared `research/plan-*.md` prose scaffolds have one writer; two overwrite each other silently |
| step 6c cross-batch citation, forward-reference, and post-6b change audit | code derives obligations spanning batches plus later additions/removals/page edits; the lead owns their single verdict file and final Step-6 battery |

**Step 8 left this table on 2026-08-25 (owner).** It was here on the reasoning
that `step8-guard.mjs` gates one `pre-step8` baseline against one exact-hash
adjudications ledger, and that the 30-second rule is a judgement call four
adjudicators would draw in four places. Both halves were weaker than they looked.
The baseline is taken once, by the engine at `8-baseline`, and measures the
repository — it does not care how many Alphas edited inside the window, only that
every edit is licensed by a fatal row. The ledger is append-only, and the
partition gives each Alpha a disjoint item set, so four writers appending rows
about different items do not race; what would race is a rewrite, which the task
file forbids. What the single reader actually cost was attention: 796 items in
nine categories through one context window, with the last rejections read on the
least of it. The 30-second line moving between four readers is a real cost, and
the smaller one — steps 3 and 6 already accept it, and each group Alpha at least
draws its line while holding one coherent subject rather than nine.
`tools/step8-scope.mjs` renders the partition; `LEVELS.md` §"Step 8" is
normative.

**And the partition bought a second thing the single lead could not have.** With
the groups known before the sweep finishes, each group Alpha can read its own
pairs *while* step 7 runs (owner, 2026-08-25) — as units of `7-judge` rather than
a stage ahead of it, since the engine overlaps units inside a stage and
serialises stages. The digest it returns is this group's account of the
mathematics written before any verdict existed, which is the one reading that
cannot have been shaped by the judges' framing; `8-scope` puts it at the top of
the group's step-8 file. The reader is read-only at the kernel
(`alpha-preread`, `--sandbox read-only`, artifact via `--result-artifact`),
because an edit landing mid-sweep voids verdicts already cast and leaves a level
judged in two states with nothing on disk saying so.

**Quota is what bounds the number, not memory.** Four concurrent Opus lanes at
`xhigh` exhausted the Claude session limit in 25–34 minutes and died at once
(measured 2026-08-13, recorded under `scaffolder` below), **and concurrency
draws down the lead Alpha's own session too** — so an over-wide Alpha fan-out
kills the run, not just the stage. Three sits below that measured cliff.
**That cliff is a Claude-account fact, the role left Claude on 2026-08-20, and
it came back on 2026-08-23 — so the measurement applies again.** Three also
survives on the other reason it was always true: one Alpha per ≤3 batches against
a beta/reader cap of 9 is the group-Alpha arithmetic itself. Both readings now
agree for `alpha`, and they do NOT agree for `beta`/`reader`/`refuter`, whose
caps of 9/9/8 were set against the Codex subscription and were deliberately left
unchanged by the model move (owner: "Just replace LLMs as instructed without
changing anything else"). Every lane in the run now draws on one Claude
subscription; there is no second account to spread across.

**The cap is a ceiling, never a quota that must be spent.**
Which batches a group Alpha owns is decided at stage `2-assign` and validated by
`tools/alpha-groups.mjs`, not chopped off the sorted list. The old chunking was
deterministic but unsound: on `frontier-14` it gave one Alpha linear-algebra +
number-theory + category-theory at once and split topology's three batches
across two Alphas, so neither could see the cross-references among its own
pages. The gate fails on a category split that was avoidable — a category whose
batches fit inside one group must sit in one group — and reports how many
dependency edges still cross a boundary, which is the number the assigning
Alpha is minimising. What the data does not settle is the residual: five
categories over three Alphas forces two singletons to share, and which two is a
judgment about shared machinery, hence an agent and not a sort.

The accuracy win comes from *scoping* a group Alpha to three batches, which is
free; running the groups in series costs only wall clock and burns no more quota
than the single Alpha it replaces. Run them concurrently only when the stage is
light (step 3) or the quota headroom is known.

**`mechanic` (owner, 2026-08-14): "use Terra instead of Sol for tasks requiring
less reasoning".** `medium` effort, `workspace-write`, cap 4, for work whose
difficulty is bookkeeping rather than mathematics — applying an amendment
somebody else already adjudicated, collecting entries into a table, sweeping ids,
reformatting. The judgment has been made before this lane starts.

**After 2026-08-23 the cheapness is the effort, not the model.** Sol and Terra
were two models of one family and this row took the weaker one; every lane is now
Claude Opus 5, so the only thing separating this row from `beta` is `medium`. Do
not resolve that apparent inconsistency by raising it — a bookkeeping lane at
`xhigh` buys nothing and burns the same session quota every other lane draws on.

Adding it also made **reasoning effort role-driven**. It had been hardcoded
`xhigh`, so a deliberately cheap lane still paid for reasoning it did not need;
the role table now supplies it and silence still means `xhigh`, so every
pre-existing lane is bit-for-bit unchanged.

**Two things this lane may never do, and both are load-bearing.** It may not
**author mathematical content** — item authoring stays on `beta`, at the
authoring effort, and a `medium` lane must not become a cheap author. And it may
not **produce anything the second judge lane will later judge**, because that
lane is now the same model this row runs and a model reviewing its own output is
self-agreement wearing the costume of corroboration. That trap has been walked
into once already: on frontier-12 the Terra `certifier` declined to certify a
repair while citing *its own judge ledger row* as support — and collapsing every
lane onto one model makes it easier to walk into, not harder. Mechanical,
post-adjudication, non-judged work only.

**`scaffolder` (owner, 2026-08-13) serves concurrent SUBJECT-track prose
scaffolding outside any level build** — one lane per subject, each researching
sources and writing one track file. It is a separate row from `alpha` rather
than a raised `alpha` cap for the reason below.

**It moved from Opus 5 to Sol on 2026-08-14 (owner: "Change agent LLM from opus
5 to gpt 5.6 sol"), and quota is why.** Two rounds of Opus scaffolders were
killed mid-track by the Claude session limit — the first at 25–34 minutes, the
second at 10–43 minutes with the reset five and a half hours out.

**READ THAT AS LIVE, NOT HISTORICAL.** The owner moved this lane, and every
other, back to Opus 5 on 2026-08-23 because the Codex subscription reached its
weekly limit. The cap of 4 is unchanged and now sits exactly at the measured
cliff, and the escape hatch used last time is gone: Sol was a different account,
and there is no third one. `alpha` and `scaffolder` again share runner, model,
effort and window, differing only in cap. The lane carries `web: true`, which
recorded a load-bearing fact rather than decoration: half of a scaffolder's brief
is source research, and a lane without web access does not fail — it asserts from
memory. That is the same finding that put `web: true` on `alpha`.
Alpha's cap was never a
resource limit but a **mutual-exclusion guarantee**: within a level Alpha is the
single writer of a shared artifact set, and two concurrent Alphas overwrite each
other silently. Raising that cap *to run a scaffolding job* would have deleted
the guarantee for every future build. A scaffolder instead **owns exactly one
track file that no sibling may open for writing**, so mutual exclusion comes from
the ownership contract in the run's SEAMS record, and the cap is free to express
the constraint that actually binds.

That is precisely the move the 2026-08-14 group-Alpha change makes for `alpha`
itself (see above): the cap rose to 3 only once each group Alpha had a disjoint
owned artifact set and the genuinely shared stages — step 4, step 6c, and then
step 8 — were pinned to the lead Alpha **by rule**. The guarantee is intact; what
changed is where it is written down. Raising a cap without first relocating the
guarantee remains the error this paragraph warns about.

**`alpha-adjudicate` 1 → 4 on 2026-08-25 is the same move made again**, and it
passes the same test: step 8's partition gives each group Alpha a disjoint item
set before the cap rises, so the cap expresses throughput and the disjointness
expresses the guarantee. A cap of 1 under group units would not have failed
loudly — it would have serialised four groups behind one slot and looked like
slowness, which is the worse failure.

**That constraint is the Claude subscription session limit, not memory** —
corrected 2026-08-13, having first been written the other way round from
assumption rather than measurement. Measured under four live lanes, each `claude`
process held **~0.25 GB RSS, 0.9 GB across all four**: inference is server-side,
so a 1M window costs nothing locally and the judge-lane memory ceiling in
`UNATTENDED-AUDIT.md` has no analogue here. What does bind is quota. Four
concurrent Opus 5 lanes at `xhigh`, each fanning out to its own research
subagents, **exhausted the session limit in 25–34 minutes** and all four died
mid-scaffold at once. Concurrency multiplies burn against a shared quota, so
raising the cap buys a shorter run before simultaneous failure rather than more
throughput, and it draws down the session's own limit as well. The Codex
and DeepSeek lanes bill to different accounts and survive a Claude exhaustion —
which is why work that can legitimately run on them should.

**The drivers dispatch a step's agents in PARALLEL** (owner, 2026-08-05, binding
on this and every future session). Both `run-level.mjs` and `run-wave.mjs` used a
serial `for` loop that blocked on each dispatch, which made the surrounding
design inert: `beta`, `reader` and `audit-beta` all carry a lane cap of 5 so a
level's or wave's batches run at once, and `AUDIT-WORKFLOW.md` §7 justifies the
fan-out by the batches' disjoint write sets — but the cap never bound, and wave 5
was on course to spend ~2 hours reading four batches strictly one after another.
Concurrency is still bounded by the ROLE rather than by the driver, because
`dispatch.mjs` acquires a cross-process slot before spawning its model; a
genuinely single-agent stage (the lead Alpha at steps 4 and 6c) is unchanged,
and since 2026-08-14 the `alpha` cap (3, raised to 4 on 2026-08-24) lets a step's GROUP Alphas run at once
the way `beta` and `reader` already do. Failure semantics changed with it:
every agent now completes and the halt names ALL failures, because a broken brief
or credential is usually broken for every lane at once. Dry-run and simulation
stay serial on purpose — a simulation consumes its `outcomes` fixture by index,
so a shuffled completion order would silently reassign outcomes to agents.
A leftover `<n>` in a brief is fatal (briefing an agent about "level <n>" is how
it ends up guessing), while genuinely generic placeholders only warn.
`tools/slots.mjs` is the cross-process directory-semaphore pool it shares with
the judge lanes' design, checked by `tools/slots.test.mjs`.

**`tools/autopilot/`** is the driver, and `UNATTENDED.md` is its normative
description. It owns `research/<run>-run-state.json` — step, policy, parked
items, and a journal — so a session becomes a client of a run rather than its
life support. Every stop is a halt with a code, a reason and a resume command;
a halted run refuses to restart without `--from-step`, because resuming
automatically would spin through whatever caused the halt. Judgement steps (0, 3,
4, 9) default to halting rather than delegating. The owner pause at step 10 exits
**0**: it is the successful end of an unattended run, and reporting it as failure
would train an operator to ignore failures. `tools/run-control.mjs` writes the
control file the driver polls between transitions — never mid-step, since a
half-applied step is the expensive state to reason about later.

## 4. The ledgers — state that must outlive its own repair

| ledger | written by | answers |
|---|---|---|
| `research/<run>-judge.jsonl` | `judge.mts` via `JUDGE_VERDICTLOG` | how many times was this proof refuted? |
| `research/<run>-judge-attempts.jsonl` | `judge.mts` via `JUDGE_ATTEMPTLOG` | why did a judge call slow, retry, or fail? |
| `research/<run>-touches.json` | `touchlog.mjs` | how many times was this proof repaired? |
| `.autopilot/state.json` + each agent's namespaced notes | the engine, each agent | what durable run state must survive a restart or a compaction? |

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
on resume, the agent reads it and verifies action-critical disk state
before continuing immediately. This closes the otherwise fragile gap between a
live agent's working context and the durable evidence ledgers without adding a
pause or a publication authority.

**Role-level continuity.** The Beta and Alpha threshold is 60%
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

**Current routing (owner, 2026-08-26): session-item judging runs GPT-5.6 Terra
alone through a fresh Codex process at `xhigh` with the explicit 1,000,000-token
context window. DeepSeek is removed from Step 7 and all later rejudges.**

**Lineup parameter.** The active value is `JUDGE_LINEUP=terra` in both
workflows. Retired paired values remain resolvable only for historical replay;
their rows remain evidence but satisfy no current coverage. Coverage is per
frozen context and per configured model set, never merely per model name.

Terra runs via an ephemeral `codex exec` per call with a 0700 temporary
`CODEX_HOME` holding only `auth.json`, an empty temporary working directory,
read-only sandbox, and a cap-14 file-backed pool. A capacity refusal is a null
verdict, never a verdict; lower `JUDGE_CONCURRENCY_GPT_5_6_TERRA` rather than
re-spending null calls. Terra shares the OpenAI family with most work it screens
and the Sol adjudicator, so this judge route provides no cross-family
corroboration. The separate DeepSeek audit-refuter remains cross-family but is
not a Step-7 judge and supplies no judge coverage.

**When it runs:** once, after the step-6 independent-reader/Alpha audit, on final
text, with **Terra covering every item in a newly built completed level**
regardless of whether Alpha changed it. Published-page audit A7 is deliberately
different (owner clarification 2026-08-08): its whole wave has already received
Beta/Alpha/refuter coverage, so Terra rejudges only ids in the
machine-readable repair-target receipt. The old
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

**Ledger:** every judge run writes one Terra line to
`research/<run>-judge.jsonl`, with at least
`{id, model, keep, reason, context_sha256, at}`.
`verification.judge` records a pass only when Terra passed the current
text; an absent block means unjudged or owner-audited over a refuted false
positive. `keep: null` is not a pass. `tools/judge-sweep.mjs` resumes selected
plan pages: naming an A page automatically includes the item list on its
B/examples companion, so A/B-pair coverage cannot silently omit examples. It
skips only complete pairs whose hash also matches a freshly
assembled current prompt. It assembles that hash once per selected item. At
step 10, `tools/judge-compare.mjs` reports latest-attempt and latest-usable
status: a later null cannot erase an
earlier complete verdict on the same prompt, but a later substantive verdict
does. It also summarizes the judge's findings for the owner report. Its optional
`--adjudications` input measures which judge actually found owner-confirmed
fatal logic or dependency-citation defects; rejection volume alone is never
treated as effectiveness. It resolves the configured model set from `JUDGE_LINEUP` exactly as
`judge.mts`, `judge-sweep.mjs` and `level-coverage.mjs` do, and emits the
`lineup` it compared so a saved report names its model set. **It was pinned
to a retired lineup until wave 5 (2026-08-06)**, so a wave judged by a newer
lineup reported one absent model and silently dropped second-lane verdicts; the
agreement keys are `primary_only_reject` and
`second_only_reject` rather than model names for that reason.
The ordinary sweep selects Terra; a targeted `--models` recovery selects
the named configured model's missing current-context verdicts and never re-spends a
complete verdict from its peer.

**Effectiveness ledger:** step 8 appends one owner decision per rejected
`{id, model, context_sha256}` to
`research/<run>-judge-adjudications.jsonl`: `outcome` is
`confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`; a fatal outcome
also classifies `defect_type` as `logic`, `dependency_citation`, or `other`.
`tools/judge-compare.mjs <ledger> --adjudications <file>` reports the two
models' owner-confirmed fatal detection counts and fatal-confirmation rate among
adjudicated rejection candidates. It makes no unsupported recall claim, because
the complete universe of fatal defects is not independently enumerated.

**Concurrency cap (owner, 2026-08-01; DeepSeek raised 2026-08-03):**
`tools/judge-sweep.mjs` uses two file-backed, cross-process model pools:
sixteen slots per lane (owner, 2026-08-05, back down from twenty-four for
DeepSeek). Each lane advances
independently when one of its own slots is free; the hard ceiling is 32 calls
combined. DeepSeek's lane was raised from sixteen because its per-call latency,
not its throughput, gates every sweep — at the end of wave 1b's A7, Terra had
finished all 174 items while DeepSeek still had 36 pending with every slot
held. The numbered slots live under model-specific
directories in `/tmp`, are acquired atomically, heartbeat while a child judge
runs, and are reclaimed only after a five-minute stale heartbeat, so a second
resumed sweep cannot exceed either cap and a killed run cannot block it forever.

**Injection tests still govern future model changes.** DeepSeek v4-flash was
reverted after passing a blatantly false injected claim; GLM caught that
injection but still scored 0/3 on real historical defects. A low rejection rate
and fluent reasons are not evidence of a good judge. The owner has nevertheless
required a DeepSeek v4 Pro parallel screen. The historical GLM result is
preserved as evidence, but the current DeepSeek/Opus comparison is measured
from paired Step-10 owner adjudications, especially fatal logic and
dependency-citation detections. Before any further judge model or context-shape
change, inject a defect known to be false under this library's conventions and
verify the model catches it.

**Measured, audit wave 3, 2026-08-04 — the σ context change and its injection
test.** Wave 2's judge comparison found that **six of Terra's nine false
positives were one repeated mistake**: it read `σ(n)` as `{0,…,n−1}` when
`def-natural-numbers` sets `σ(n) := n ∪ {n}`, and on that misreading produced
confident, specific off-by-one allegations against correct proofs. One sentence
was therefore added to `briefs/judge-conventions.txt` stating that
`n = {0,…,n−1}` while `σ(n) = {0,…,n}` has exactly `n+1` elements, and that an
off-by-one objection resting on the other reading is a misreading of the library
rather than a defect. Wave 3 has **17 of its 224 items mentioning σ**, mostly on
`ordinal-arithmetic` and `countability-and-uncountability`, so the change was
worth making — and because the conventions file enters the frozen prompt hash
byte-for-byte, it is a context change and the rule above applied.

The test ran on `lem-nat-order-is-membership`. **Control:** both lanes passed the
unmodified item. **Injection:** step 1.2 gained the sentence "Moreover σ(n) has
exactly n elements, since σ(n) = {0,1,…,n−1}", false under this library's
conventions and deliberately sited in the region the new line governs.
**Both lanes rejected it, and both cited the convention to do so** — DeepSeek:
"In von Neumann encoding sigma(n) = n U {n} has exactly n+1 elements. Contradicts
the library's explicit convention"; Terra: "That is n itself; sigma(n) is
{0,…,n}". The file was restored and verified byte-identical by sha256.

The point of the test was **not** that the lanes can catch an easy falsehood. It
was the specific risk that a convention line telling a judge what is *not* a
defect makes it credulous in exactly that region. It did the opposite: it made
the region sharper. That is the property to re-test the next time a conventions
line is added, because the failure mode is silent — a credulous lane returns
`keep: true` and looks like a clean sweep.

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
| `authoring.md` | the same Claude Opus 5 Beta-n-i that scaffolded the batch, step 5 | precheck traps, shipped-defect checklist, fixed A/B page-summary contract, no-judge rule |
| `reader.md` | independent Step-6 reader | repairs and reports its batch; exact citation, well-formedness, boundary, provenance, and non-proof prose checks |
| `refuter.md` | read-only Step-6 refuter | schema-bound exact coverage of untouched and high/critical items; evidence only |
| `alpha-step6.md` | Step-6 group and lead Alphas | adjudicates exact reader/refuter obligations, repairs mathematics, and closes computed cross-batch and post-6b work without loading unrelated stage instructions |
| `alpha.md` | Alpha-n, steps 3–5 and 7–10 | stage-specific review, judge adjudication, repair, propagation, and closure outside Step 6 |
| `codex-judge.md` | GPT-5.6 Terra judge, step 7 (historical filename) | human-readable role and JSON-verdict contract; runtime prompt lives in `judge.mts` |
| `judge-conventions.txt` | the judge | canonical triage/library block loaded by `judge.mts` into the frozen prompt |
| `audit-beta.md` | Audit-Beta, audit steps A1/A2/A4 (`AUDIT-WORKFLOW.md`) | provenance determination table, evidence ledger row contract, citation-precision duties, full proof-contract capture (D1), repair classes and A3 approval boundary |
| `audit-alpha.md` | audit Alpha, audit steps A6/A8 | sole-adjudicator role, D2 concurrences, refuter dispatch, cross-edge audit, genrisk dispositions, exact-hash judge adjudication, the item-granular rejudge set |
| `audit-orchestrator.md` | the orchestrator itself, audit steps A3/A9 | the two judgment steps and only those: A3 proposal adjudication with its fixed decision priority, the A9 scope-denial re-grep and published-claim-decay sweep, the decision-receipt contract, and the duty to refuse a wrong dispatch nonzero. Exists because wave 4 dispatched `audit-alpha.md` — a different role — to a judgment step |

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

**Step-3 adjudication is an Alpha mechanism (owner, 2026-07-30; reassigned from
the orchestrator 2026-08-16).** Beta reports discrete recommendations with
evidence; the step-3 Alpha verifies them
from disk and approves or declines them without a routine owner pause. Its
ordered decision rule is: mathematical accuracy and correct dependency citation
are non-negotiable; then minimize forward references; then preserve
mathematical richness. The decision ledger is the durable audit trail.

**Steps 3, 9 and 10 use durable, delta-aware aggregation (owner, 2026-08-25).**
`scope-decisions.mjs` gives every decline a stable identity and binds its Alpha
decision to the exact row, page closure and destination. Step 9 reviews only
invalidated decisions (or every row on a legacy run). The controller sequences
delta capture → receipt refresh → Alpha review → deterministic register render
→ touch freeze, so a render or snapshot cannot race the review it records. Then
`step9-changes.mjs` derives all created and modified guarded hashes since
`post-step8`. Deletions, unowned creations and duplicate ownership stop; a
modified published item remains in the generated targeted judge scope. Changed
ids alone re-enter the judge/adjudication/rejudge path. Impact closure precedes final stamps and
receipts; if its Alpha repairs a consumer, the follower snapshot is keyed to
that dispatch's successful result rather than concurrent launch order. Step 10 reconciles scope, defect, judge, adjudication, touch, pathway
and readiness records into one hash-bound evidence packet. Code, not report
prose, renders every fatal row and statistic; the read-only Alpha adds only the
interpretation that cannot be derived mechanically.

### 6.1 No shell-permission prompts, and the mechanical backstops

**Owner rule, 2026-07-30:** no current or future
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

Step-6 readers and refuters are engine-dispatched from their own briefs. Alpha
does not compose or duplicate those prompts.

## 7. Presentation (FROZEN — owner-approved 2026-07-24)

Implemented in the **app repo** (the `prestige-intelligence` checkout that
`tools/paths.mjs` resolves; `/root/Projects/prestige-intelligence` on the VPS).
Do not restyle without an explicit in-session owner instruction.

*Owner instruction 2026-08-13, exercised:* a **recent-changes** section
(`/changes`, plus a boxed teaser on the index) listing pages published and
changed in the past week, `dd/mm/yyyy`. The box was styled on the owner's
explicit "give this new section its own box, make it look sleek and clean" and
introduces no new accent — it reuses `.library-card` and its two existing
variables. Dates come from item verification stamps, so this surface can never
contradict the sitemap or the feed. Everything frozen above is untouched.

*Owner instruction 2026-08-14, exercised:* the plan reached **28 groups** and
only seven had a `categoryStyle`, so 21 rendered in the neutral fallback; the 18
with no `library/<slug>/` directory yet had no NAME either, and four surfaces
each invented a different fallback for it. `library-categories.ts` now carries a
style for all **27 renderable groups** (`published` is a `kind: P` marker whose
four rows are published on disk under their real groups, so it never reaches the
renderer) and exports **`categoryTitle`**, the one naming fallback `/plan`, the
item breadcrumb, `/changes` and the index teaser now share. `_category.md` still
wins wherever it exists, and the fallback reproduces it verbatim for all ten
groups that have one, so no name changes when a directory is created — and none
were added, because `loadCategories()` walks directories and the index renders
every one it finds, so eighteen empty groups would have appeared immediately.

*Owner instruction 2026-08-17, exercised:* `categoryTitle` is now
`loadCategories()`'s OWN fallback too. `walkCategories()` seeded a group's title
from the raw directory name, so `library/measure-theory/` — the single built
group with no `_category.md` — carried the literal slug `measure-theory` onto
the public index, the group card and the share card, none of which route through
the four surfaces above. It now seeds from `categoryTitle(slug)`, so the loader
and those surfaces agree by construction and **no future group can ship as a
slug**, whether or not anyone remembers to add `_category.md`. `_category.md`
still wins wherever it exists (and now also wins over the fallback only when it
actually carries a `title`), so no published name moved. Fixing this in the
loader rather than by adding `library/measure-theory/_category.md` is the point:
one file would have fixed one group, and the rule the owner asked for is about
every group after it.
A hue names a **family** of related subjects and a **tier** steps it within that
family in reading order — `text-H-800/200`, then `-900/100`, then `-700/300` —
because there are not 28 legible hues and related subjects should look related;
the tier is a small step by design, since the house rule already puts the group's
name beside the colour. Every tier-1 string is byte-identical to the 2026-07-27
liquid-glass form and no existing group's hue moved: the diff is pure insertion.
Sky, fuchsia and neutral stay out. Only `title` renders today — the 2026-07-27
restyle made `GroupCard` one monochrome surface, so `wash`/`border`/`meta` are
held against a future restoration and read by nothing.

*Owner instruction 2026-08-14, exercised:* **the mirror's share card.**
`alphabetamath.cc` unfurled under the parent product's wordmark with a footer
naming `app.prestige-intelligence.cc`, because the library subtree inherited
`ogImage()`. It now renders `ogTaxonomy()` — the αβ mark, the published groups
as chips in their own hue families, and the live page and result counts — chosen
by the owner from twelve rendered candidates. Three properties are load-bearing:

- **The counts are live.** `taxonomyCard()` builds them from the corpus per
  request and the route is `force-dynamic`, because a file-convention
  `opengraph-image` is otherwise generated once at BUILD time and would freeze
  the numbers at the last container build. "Results" uses `pageBadge`'s own
  filter, deduped across pages, so the card's total is the sum of what the page
  badges already claim and the two cannot contradict each other.
- **The URL carries a content version.** Rendering per request makes the card
  right on every *fetch*, not in every *feed* — scrapers cache a card for weeks.
  `generateImageMetadata` returns `libraryVersion()` (a hash of the content
  fingerprint) as the image id, so a publish mints a URL no cache has seen.
  Verified end to end: touching a content file changes the id with no rebuild.
- **`/library/opengraph-image` is in `LIBRARY_MACHINE_PATHS`.** Without it the
  mirror 301s its own `og:image` outward, and the redirect is built through
  `URLSearchParams`, which rewrites Next's bare `?abc123` cache key to
  `?abc123=`. It resolved, but only for a crawler that follows redirects on an
  image URL. This predates the new card and applied to the old one too.

The chip packer picks the first of `[28px/3 rows, 26/4, 23/4, 20/4]` that holds
every group, so today's nine render exactly as approved and the card absorbs the
plan's twenty-eight instead of hiding two thirds behind "+ more"; the last row
always reserves the marker's width, since whether it is needed depends on how
many chips fit. `og:image` and `twitter:image` resolve to one URL — an `images`
entry in the layout would lose to the file convention for Open Graph yet win for
Twitter, pointing the two at different routes for the same card.

| file | owns |
|---|---|
| `web/lib/library-kinds.ts` | per-kind palette; colour always paired with the kind label |
| `web/components/library/ItemBody.tsx` | sectioned proof rendering, per-citation tag chips, and extraction of fenced `tikz` / `tikzcd` blocks for server-side SVG rendering |
| `web/lib/tikz.ts` | cached server-side TikZ/tikz-cd SVG compiler; serializes cache misses because node-tikzjax has one mutable TeX runtime |
| `web/components/library/badges.tsx` | kind chips, DRAFT banner, provenance + verification chips |
| `web/components/library/Mermaid.tsx` | flowchart v2, birds-eye, `landmark: true` nodes only |
| `web/lib/library-forward.ts` | the sky / dashed / ↗ forward-reference accent |
| `web/lib/library-external.ts` | the fuchsia / dotted / ‡ accent + `unprovedDependence` closure |
| `web/lib/library-categories.ts` | group hue families and tiers (Tailwind + hex), `categoryTitle`, `publishedGroups`, index grouping (itself frozen since 2026-07-26) |
| `web/lib/og.tsx` · `web/lib/library-og-data.ts` | share cards: `ogImage` / `ogFlowchart` for the product, `ogTaxonomy` for the mirror; the live counts and the content version behind it |
| `web/lib/math-library.ts` | `plainTitle`, the one de-TeX for every plain-text context |
| `web/lib/library-changes.ts` · `web/components/library/changes.tsx` | recent changes: what counts as published/revised in a window, and the shared row the index box and `/changes` both render |
| `web/lib/library-search.ts` · `web/app/library/search-index/route.ts` | the client-side search payload and the audience split that keeps drafts out of it |
| `web/lib/library-cache.ts` | the corpus memo: cached DATA, per-request RENDER |
| `web/app/library/[...path]/page.tsx` · `web/components/library/badges.tsx` | the provenance pill and the verification caption under it |

**Three ranked citation tiers, none relying on colour alone:**

| tier | colour | underline | glyph |
|---|---|---|---|
| ordinary citation | indigo | solid | none |
| forward reference | sky | dashed | ↗ |
| not proved here | fuchsia | dotted | ‡ |

The bottom tier **outranks** the middle: "never proved here" is a far stronger
caveat than "developed later". Since 2026-07-27 the ‡ tier is a **catalogue
only** — new content may not depend on it (`LEVELS.md`, self-contained scope).

### 7.1 Draft safety and the verification caption

Both are correctness rather than taste, which is why `CLAUDE.md` states the rules
and this section carries the mechanism.

**The search index is published-only for the public.** It is a CLIENT-SIDE index
— a file fetched once and searched in the browser, so every keystroke is instant
with no round trip — and therefore a draft in the public payload publishes
unpublished mathematics to anyone who opens devtools. `buildSearchIndex` takes
the audience explicitly and there is no default that leaks. Two further
properties of that file are correctness, not preference:

- **Titles are LaTeX**, so the index goes through `plainTitle`, the library's
  single de-TeX for every plain-text context (flowchart labels, OG cards,
  metadata). A reader typing "sqrt" or "epsilon" therefore matches `\sqrt` and
  `\varepsilon`. Do NOT add a second, cruder de-TeX here: a search box that
  silently fails on half its corpus is worse than no search box.
- **The index is a cached artefact**, so it must not read ambient request state.
  The library sits at `/library` on the app host and at the ROOT on the mirror,
  so the href prefix is a PARAMETER; reading the host inside the builder would
  bake one host's prefix into a payload the other host then serves.

On the app host the route is session-dependent and the caching headers are the
security boundary: the signed-in owner's index contains drafts, so it is served
`private, no-store` (never cached anywhere) while everyone else's is
`public, max-age=300`, and `Vary: cookie` stops any shared cache in front of it
mixing the two audiences whatever the `cache-control` says. On the mirror the
owner branch is UNREACHABLE — `auth()` is never called and drafts cannot be
requested — so the response has no cookie-dependent variation and drops
`Vary: cookie` to become genuinely edge-cacheable, which the app-host response
can never be. That drop is deliberate: Cloudflare honours only
`Vary: Accept-Encoding` outside Enterprise and treats other `Vary` values
conservatively, so keeping the header would silently defeat caching; its cache
rule additionally bypasses cache whenever a cookie is present.

**Corpus loading is memoised, rendering is not** (`library-cache.ts`, measured
2026-07-28). Every `/library` route is `force-dynamic` and every one calls
`loadItems()` / `loadPages()`, which had no memoisation, so a single page view
re-read and re-parsed the WHOLE corpus off disk — 1,204 items, 6.5 MB, ~50 ms of
pure CPU before rendering started — for content that changes only when a level is
published. Static generation is not the fix, and this is the draft rule again:
the routes await `auth()` and show draft pages to the owner and only published
pages to everyone else, so caching the *rendered* page would either leak
unpublished mathematics to the public or hide drafts from the owner. The DATA is
cached and the RENDER stays per-request. Invalidation is a (file count, newest
mtime) fingerprint — the content is a read-only bind mount whose only writer is a
publish — itself rate-limited, since recomputing it costs ~9 ms against the
~50 ms it saves and paying that on every request is a poor trade.

**The verification caption stays.** Under the provenance pill an always-visible
note reads "✓ N results · all verified · K also independently AI-judged", then
explains that every result on the page is machine-checked by a proof checker and
read in full — "and owner-audited", or "by a delegated reviewing agent on the
owner's instruction" where the reads were delegated, because the caption must not
say "owner-audited" of work the owner delegated — and that the judge is an
ADDITIONAL, independent cross-model AI review of the proofs. The items not
AI-judged were verified by owner audit, typically over a confirmed judge false
positive, and are **NOT failures**; a bare "judge 31/34" fraction as the headline
is banned, because it reads as failures. A page on which every item is
`proved_here: false` carries no proof at all, so the standard caption would be
false in one direction and read as a shortfall in the other: such a page gets its
own `ExternalPageNote` instead (owner instruction 2026-07-26; SCHEMA §3
`sources_checked`).

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
- **A step-8 repair could invalidate its own proof contract unseen, until
  2026-08-11.** Step 8's gate table ran `step8-guard`, `impact-audit` and
  `level-coverage`, none of which reads a contract for validity — yet a fatal
  repair edits proof text, which is exactly what strands a merged-away step, a
  quoted Statement that has since changed, or a dropped `risk_review`. Measured
  on `frontier-10`: 9 `proof-contract --strict` errors and one missing
  `risk_review` were live at step 8 as residue of the previous round and of
  step 6, and surfaced only because Alpha stashed its own changes and re-ran at
  HEAD to establish whether it had caused them. The contract trio now runs at
  step 8 too.
- **Omission is now partly covered, and only partly.** Until 2026-08-11 no gate
  could see a result that was never written; `coverage-checklist.mjs` (§3.11b)
  now forces every heading a cited source contains to be scaffolded or declined
  in writing. It closes the *silent* drop. It cannot close the *unread* source: a
  Beta that enumerates six of a chapter's twenty theorems passes the gate, and
  only Alpha's step-6 read catches that. Nor does it apply to legacy pages, which
  are not retro-harvested.
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
