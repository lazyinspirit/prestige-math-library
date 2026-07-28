# ARCHITECTURE — every mechanism in this library, and why it exists

**Companion to `LEVELS.md`.** `LEVELS.md` says *what happens in what order*;
this file says *what each mechanism is, how it works, and which failure it was
built to prevent*. `SCHEMA.md` and `CLAUDE.md` win where they differ.

**Keep this current.** Every mechanism added, changed or retired gets an entry
here in the same commit. A mechanism nobody can find is a mechanism that gets
rebuilt worse. See §9.

Verified against the code 2026-07-27.

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
        │  6 content gates + 4 reading tiers + 1 judge
        ▼
  RENDERED PAGE           app repo, read-only bind mount
```

The asymmetry worth internalising: **mechanical gates prove absence of a defect
class; reading tiers find defects; the judge is a cheap screen and finds almost
nothing.** Measured judge precision on this corpus is **21–24%**, and it scored
**0/3** on real historical defects. Never model it as the thing that finds
problems.

## 2. The content contract (`SCHEMA.md`)

Frontmatter fields, and what enforces each:

| field | meaning | enforced by |
|---|---|---|
| `id` | must equal filename | `depcheck` (`id-filename`) |
| `kind` | definition/lemma/theorem/corollary/example/counterexample/false-statement/remark | `depcheck` (`kind-prefix`), `validate-plan` (`prefix`) |
| `status` | `draft` → `published` | `depcheck` (`draft-on-published-page`) |
| `deps` | **logical** dependencies | `depcheck` (cycles, resolution), `citecheck` |
| `justified_by` | forward-pointing discharge of a definition's obligation | `depcheck` (target must transitively depend on the citer) |
| `forward_refs` | references to later material | `fwdcheck` |
| `external_refs` | *mentions* of unproved items | `extcheck` |
| `proved_here: false` | this item is a ‡ catalogue entry | `extcheck` |
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

## 3. The eight gates

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
authored. Errors: `id-filename`, `yaml-escape`, `kind-prefix`, `dep-unresolved`,
`link-unresolved`, `self-dep`, `item-cycle`, `page-cycle`, `page-item-missing`,
`page-item-dup`, `draft-on-published-page`, `published-unaudited`,
`published-unchecked`, `orphan`, `multi-home`, `cited-not-in-deps`,
`justification-backward`, `justification-duplicated`,
`sources-checked-on-proved` (19 total).

**This is the mechanical guarantee behind "no circular reasoning."**
`published-unaudited` is what forces the owner's re-audit when an amendment
changes published text.

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
green), `nested-dollar-in-display`, `dollar-in-tag`, `multiline-display`,
`unclosed-display`, `unbalanced-inline-dollar`, `blank-line-in-inline-math`, and
**`katex-parse-error` from a real KaTeX parse** using the app's own KaTeX, plus
`unreadable` for a file it cannot open.

### 3.7 `validate-plan.mjs` — the scaffold, before authoring
**Takes the spec path as an argument** — `node tools/validate-plan.mjs
research/plan-spec.json`. Run bare it prints usage and exits non-zero, which
reads as a gate failure and is not one.

Errors: `resolve`, `requires-resolve`, `requires-cycle`, `item-cycle`,
`page-cycle`, `prereq-order`, `undeclared-prereq`, `forward-ref`,
`forward-whitelist`, `intra-order`, **`b-leaf`** (nothing may depend on an item
on a B/examples page — B pages are leaves), `b-requires-a`, `dup-id`, `prefix`,
`kind`, `companion`. Warnings: `orphan`, `size` (above 30 items),
`redundant-prereq` (a declared prerequisite already reachable transitively; 12
stand in the spec as of 2026-07-27 and are kept deliberately where the direct
edge is mathematically real). 19 codes total.

### 3.8 `depsource.mjs` — where each dep actually lives
Per dep: `published` / `planned-earlier` / `draft-page` / `homeless` /
`planned-later` / `unresolved`. **Only `unresolved` fails.** `planned-later` is
the forward-reference report.

**Known blind spot: it reads `deps` only and cannot see `forward_refs`.** A level
can declare dozens of forward references while `depsource` reports
`planned-later 0`. This caused a false "zero forward references" claim at
level 9.

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
parallel, one agent per A/B pair. Only a real dependency edge forces sequencing.

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
| `research/level<n>-touches.json` | `touchlog.mjs` | how many times was this proof repaired? |

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
build: baseline, **after authoring**, after step 7 adjudication, after step 8,
after step 9. The judge ledger still supplied refutation counts, so the
escalation rule fired correctly on its other trigger; repairs were the half that
went unrecorded.

`touchlog.mjs` hashes item files per stage. **The hash excludes the
`verification` block**, because stamping a judge verdict rewrites the file
without touching a character of mathematics — hashing raw bytes charged 53
stamped items with a phantom repair in one pass. It keeps `title`, `deps`,
`forward_refs`, `external_refs` and `proved_here`, since changing those *is* a
mathematical edit despite living in frontmatter. First appearance = creation,
not repair.

## 5. The judge

`tools/judge.mts`, `z-ai/glm-5.2` over ofox. **Never a Claude model for a session
item** — the tool refuses `anthropic/claude*` without `--allow-claude`.

**Its prompt is a file, not a habit:** `briefs/judge-conventions.txt`, invoked as
`--conventions "$(cat briefs/judge-conventions.txt)"`. The judge is the only
actor whose prompt is a bare CLI argument, which made it the weakest link — a run
that forgot the string gets a judge flagging 30-second gaps, driving repair
cycles against a 21–24%-precision screen.

**Its context unit is the A/B PAIR, not the item (owner, 2026-07-28).** Every
call carries, in this order: the item; the full text of every item it cites
(Statement + Remarks, or the FULL item when the citation is same-pair); the other
items on its page, in full; **its companion page, in full**; and, with `--batch`,
the other pages of the level as Statement + Remarks. The pair is what the reader
gets and what the renderer publishes, so judging an A-page theorem without its
`-examples` page left both halves unchecked against each other. `--batch` takes
A-page slugs and pulls in each `-examples` companion itself.

**The batch block is cut in RELEVANCE order, and getting this wrong made it worse
than nothing (fixed 2026-07-28).** The batch is capped at `BATCH_BUDGET` 200k
characters, because an uncapped one pushed the request into the gateway timeout
this file's history already records. The cut originally fell in the order
`--batch` named the slugs, which has nothing to do with the item being judged.

Measured on level 9 (mixed): every item of `the-derivative-and-mean-value-theorems`
was judged with the primes and linear-algebra pages in context and with
`monotone-functions-and-discontinuities` **dropped** — the one page it cites, and
the only one whose statements it could restate wrongly. The block spent its whole
budget on primes and vector spaces while judging derivatives, and then declared
the elision of the page that mattered. The authoring agent reported this; no gate
could have.

Pages the item actually cites now sort first, so the cut falls on pages it does
not cite; ties keep the caller's order. Verified by re-running the same call on
`thm-derivative-of-an-inverse`: the omitted set flipped from
`{monotone-functions…, riemann-integral}` to `{primes…, riemann-integral}`, i.e.
the cited page is retained and the uncited ones are dropped.

**Injection-tested before use, and the test is the point.** A context change gets
the same treatment as a model change (see §"never adopt a judge model", and the
`tools/judge.mts` header for the run). The pair block caught a Remark that was
false *only* against the companion page's contents and mathematically neutral —
the class it exists for. The first attempt at that injection was **not actually
false**, and the judge was right to accept it: verify an injection is false
against the library's own conventions before reading an acceptance as a miss.
None of this promotes the judge above a screen; the 0/3 on real historical
defects stands.

**Measured behaviour, all in the tool header:** retry envelope
`AbortSignal.timeout(420_000)` × 3 ≈ **21 minutes worst case per item**, so a
slow call is usually not a hang; verdicts drop intermittently and must be re-run;
LaTeX backslashes in the reason break JSON parsing. **`keep: null` is not a
pass.**

**Concurrency: CAPPED, not banned (owner, 2026-07-27, superseding the serial
rule below).** The sweep runs in subagents, **at most 2 concurrent `judge.mts`
processes per agent and 6 globally**. A serial sweep run by the orchestrator was
rejected as slow and as spending the orchestrator's context on work a subagent
should do. The cap, not serialism, is what derisks the failure measured below:
6 is well under the 9 that produced it. The measurement stands as the reason the
cap exists — do not raise it without re-measuring.

**The failure the cap prevents. Measured 2026-07-27 (level 7-algebra).** A sweep
run at `xargs -P 7`, with a subagent's retry loops layered on top (up to **nine**
concurrent `judge.mts` processes against one gateway), produced repeated
`NO_CONTENT: fetch failed` and indefinite hangs on one item across **seven**
calls. With every competing process killed, the *same item, unchanged text*
passed on the **first** attempt. Two false conclusions were drawn from those
failures before the isolated test: that the item was too long (the batch's
**largest** item, 11,732 bytes, judged fine while the 11,450-byte holdout failed),
and that seven failures were seven independent trials. They were one observation
of self-inflicted contention. The lesson that survives the cap: an unbounded
sweep is slower in wall-clock than a bounded one, because it has to be repeated.

**Corollary on staleness: compute it, never read it from a report.** Per item,
whether a verdict covers the CURRENT text. That check corrected a subagent twice
and the orchestrator once in a single level, including a case where a `null` sat
as the newest entry and would have looked like the item was simply unjudged.

**But `max(pass timestamp) > file mtime` is the WRONG test, and it fires on
everything (measured 2026-07-28).** Recording the verdict *is* a write: the agent
writes `verification.judge` into frontmatter after the pass, so mtime is always
later than the verdict it records. Run naively it reported all 25 items of a pair
stale when exactly one had changed. **Compare the verdict against the last change
to the item's BODY, not to the file** — diff the text below the closing
frontmatter delimiter against the last commit:

```
git show HEAD:items/<id>.md | awk 'f>=2{print} /^---$/{f++}'
```

A frontmatter-only diff (judge block, precheck flag) does not invalidate a
verdict; a body diff does, and needs a re-judge.

**The injection test is the only thing that separates a judge from a rubber
stamp.** DeepSeek v4-flash was adopted for 14× lower latency, then reverted: it
passed a *blatantly* false injected claim while writing a confident summary of
the proof it had failed to check. **Never adopt a judge model without running the
injection test recorded in the tool header.**

## 6. The prompt-side mechanisms (`briefs/`)

Half the workflow. These are templates; substitute `<n>` and `<i>`.

| file | actor | carries |
|---|---|---|
| `beta-scaffold.md` | Beta-n-i, steps 1–2 | plan order, namespaced writes, dep resolution, id reuse, seams |
| `beta-step8-audit.md` | Beta-n-i, step 8 | "you are the first real reader", ranked hunting grounds |
| `authoring.md` | authoring agent, steps 5/7 | precheck traps, shipped-defect checklist, judge protocol |
| `alpha.md` | Alpha-n, steps 4 and 9 | propagation, final whole-level audit (seams included as a risk source), twice-touched interaction |
| `judge-conventions.txt` | the judge | the triage rule and library conventions |

**Every one states the triage rule verbatim.** Non-negotiable: mathematical
accuracy, logical validity, correct citation. Explicitly acceptable, zero effort:
citational quirks, gaps a competent reader closes **within 30 seconds**,
non-fatal quirks, letter-level imperfection. It is repeated rather than
referenced because an agent that does not receive it damages correct text roughly
three times per real repair.

## 7. Presentation (FROZEN — owner-approved 2026-07-24)

Implemented in the **app repo**, `/root/Projects/prestige-intelligence`. Do not
restyle without an explicit in-session owner instruction.

| file | owns |
|---|---|
| `web/lib/library-kinds.ts` | per-kind palette; colour always paired with the kind label |
| `web/components/library/ItemBody.tsx` | sectioned proof rendering, per-citation tag chips |
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
  summary's OWN later paragraph.
- **`depsource` cannot see `forward_refs`** (§3.8).
- **`b-leaf` is enforced only against the SPEC, never against `items/`.**
  `validate-plan` owns the check and reads `research/plan-spec.json`;
  `depcheck` is the only gate that reads authored content and contains **zero**
  b-leaf checks (verified 2026-07-27). An authoring agent that adds a `deps` edge
  onto a B-page item after the splice is therefore invisible to all eight gates.
  Note the rule's exact shape before "fixing" a report of one:
  `validate-plan.mjs` guards with `dp.kind === 'B' && dp.id !== p.id`, so an item
  citing an **earlier item on its own B page is legal** — ordinary intra-page
  structure, covered by `intra-order`. A level-7-algebra audit misread this and
  rewrote a correct item on a false premise.
- **`b-leaf` used to be unreachable for a dep that was ALREADY PUBLISHED — fixed
  2026-07-28.** The main check loop begins `if (existing.has(d)) continue;`, so
  any dep resolving to an item already in `items/` skipped the leaf test
  entirely, and the rule was enforced against planned items only. A second loop
  now runs the same test against `homePageOf` after that map is built.
  **The hole was PARTLY masked, and the unmasked case is the dangerous one:** if
  the depending page does not declare the examples page in `requires`, the
  violation surfaces as `undeclared-prereq` instead — a real failure, but under
  the wrong name. If the page DOES declare it, the old gate passed the spec
  clean. That is exactly the shape an agent produces when it believes depending
  on a B page is allowed. Verified by injection both ways before and after the
  fix, and the current spec is unaffected (still exits 0).
- **Nothing reconciles the spec's `deps` against the authored items' `deps`.**
  Step 5 authors legitimately adjust deps as proofs take shape (19 of 40 items
  did at level 7-algebra), and no tool ever compares the two afterwards. The
  spec and the content drift apart silently, which is also why the gap above
  cannot be caught by re-running `validate-plan`.
- **Scope-denial decay has no detector.** A claim true when written that a later
  level falsifies changes no file, so every gate passes forever. Only the step-10a
  sweep finds it — and a repair confirmed by reading the diff can leave the same
  falsehood elsewhere in the same file, which happened at level 8.
- **`citecheck` is a heuristic**, not a proof of correct attribution.
- **No reader at any tier has read the PROOFS of cited dependencies.** Readers
  open a cited item's Statement and check the `[L#]` restates it faithfully,
  which catches the dominant defect class and nothing about whether the cited
  proof is itself sound. Measured 2026-07-28, and the shape is better than it
  sounds: the dep graph is a power law, so this is a **~40-item problem, not a
  1204-item one**. Of the top 100 items by consumer count, 60 are definitions
  with no proof to read; the proof-bearing 40 total **342 proof steps** (median
  9, max 20). The top 20 carry 28% of all 11,705 dep edges and the top 100 carry
  64%; `def-natural-numbers` alone has 945 transitive consumers.
  **If this is ever closed, rank by blast radius and not by level** — auditing
  per level re-reads `lem-of-abs-value` (233 consumers, 9 steps) every level and
  still never finishes it, whereas reading it once covers every future level.
  Key it to a content hash so a repair lapses the read. Do NOT point the judge
  at it. Owner deferred 2026-07-28; recorded so the measurement is not redone.
- **No page has ever been visually rendered.** `rendercheck` closes part of this.
- **The Fable audit** required by `CLAUDE.md` before publishing mathematical
  content has not been satisfied at level 8 or 9; step 9 is the nearest
  equivalent but is Alpha, not a separate tier.

## 9. Maintaining this file, `LEVELS.md`, `WORKFLOW.md` and `CLAUDE.md`

Owner instruction, 2026-07-27. These four are normative and **must be updated in
the same commit as the change they describe**:

| doc | scope |
|---|---|
| `CLAUDE.md` | session entry point, hard rules, publish path |
| `WORKFLOW.md` | per-page runbook and the hard rules in full |
| `LEVELS.md` | the per-level build, step 0 → 10 |
| `ARCHITECTURE.md` | this file — every mechanism, how it works, why |

**Triggers:** a new or retired tool; a new gate error code; a change to the agent
hierarchy or a brief; a new owner rule; a change to the frontmatter contract; a
measured fact about a mechanism (a precision number, a timeout, a failure mode).

**Verify against the code, not from memory.** Reading the source for this file
turned up a stale cross-reference and two undocumented mechanisms on the day it
was written. When a doc and the code disagree, **the code is the truth and the
doc is the bug** — fix the doc in that commit.
