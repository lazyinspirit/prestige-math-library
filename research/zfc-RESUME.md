# Run `zfc` — resume record

**Objective (owner, 2026-08-06).** Build two new A/B pairs in the `foundations`
category that formally and fully introduce the ZFC axioms and the set-theoretic
consequences working mathematicians take for granted, then the set-theoretic
treatment of relations, partial orders, equivalence relations and functions,
including the theorem that an equivalence relation on $S$ partitions $S$ into its
set of equivalence classes. They are companions to the published
`order-zorn-and-the-axiom-of-choice` and the rest of the Foundations category.

## Owner instructions that differ from the standing rules

1. **No prose scaffold (owner, 2026-08-06).** `LEVELS.md` step 1 normally starts
   from a `research/plan-*.md` prose scaffold. There is none for these pages and
   none is to be written or amended. Beta determines the content itself by
   reading the published Foundations corpus. Steps 0–10 otherwise run as
   `LEVELS.md` describes, supervised directly by the owner in-session rather
   than through `tools/run-level.mjs`.
2. **Today's model lineup (owner, 2026-08-06, THIS DAY ONLY).** The Codex weekly
   limit is exhausted, so **no GPT model may be used anywhere today**. Every
   build role that `CLAUDE.md`/`LEVELS.md` assigns to **GPT 5.6 Sol** runs as
   **Claude Opus 5** today (Beta, independent step-6 readers, Alpha); every role
   assigned to **GPT 5.6 Terra** runs as **Claude Sonnet 5**. The step-7 judge
   lineup is unchanged and stays `JUDGE_LINEUP=deepseek+sonnet`.
   **What this costs, recorded because it is load-bearing:** with the author,
   the readers and Alpha all `claude-opus-5`, and the second judge lane
   `claude-sonnet-5`, **DeepSeek V4 Pro is the only cross-family reader in the
   entire build today.** A Sonnet-lane agreement with an Opus-authored proof is
   weak evidence; a DeepSeek rejection is the strong signal. Weight the step-10
   comparison accordingly. Alpha's step-6 proof-refuters are therefore routed to
   **DeepSeek V4 Pro, read-only** (`dispatch.mjs --role audit-refuter`, which is
   tool-less and needs Alpha to assemble its `--task` context), so that at least
   one adversarial reader inside step 6 is cross-family.
   `tools/dispatch.mjs` is **not** edited for this: its ROLES table still encodes
   the standing Sol lineup, and today's substitution is recorded here instead of
   churning the normative docs for a one-day exception.
3. **Re-homing of three published items (owner, confirmed 2026-08-06).** See
   "Decisions" below. This is the owner approval that the standing rule
   (`AUDIT-WORKFLOW.md`: reading-order changes are owner-only) requires.
4. **"Partial relations" means PARTIAL ORDERS (owner, confirmed 2026-08-06).**
   The pair-2 A page defines the relation properties (reflexive, irreflexive,
   symmetric, antisymmetric, transitive, connex/total) generically; the published
   `def-partial-order` and its neighbours are rewired to cite them.
5. **Published-page rewiring is delegated (owner, 2026-08-06).** Beta and Alpha
   are to update published pages so their items are correctly and adequately
   referenced with respect to the new pairs. Guardrails in "Constraints" below.

## Decisions taken

**D1 — page ids, orders and batching (orchestrator, step 0).** Four pages
inserted into `research/plan-spec.json` at **fractional orders**, so that no
existing page is renumbered and no order quoted in an existing prose scaffold
goes stale (`LEVELS.md` explicitly permits fractional orders for exactly this):

| order | id | kind |
|---|---|---|
| 5.1 | `the-zfc-axioms-and-basic-set-constructions` | A |
| 5.2 | `the-zfc-axioms-and-basic-set-constructions-examples` | B |
| 5.3 | `relations-functions-and-quotients` | A |
| 5.4 | `relations-functions-and-quotients-examples` | B |

They sit immediately above the five `not-proved-here` catalogue pages (orders
1–5) and immediately below `construction-of-the-natural-numbers` (order 6), so
every existing page in the library may cite them and they may cite nothing but
the catalogue. `validate-plan.mjs` passes on the spliced spec.

**Batch: ONE batch, `zfc-batch-1`, both A/B pairs, one Beta.** Pair 2 depends
heavily on pair 1 (ordered pairs, Cartesian products), so packing both into one
batch puts that seam *inside* the batch, which is what `LEVELS.md` step 0
prescribes. **Cross-batch seam count: 0.** Two A pages is exactly the owner's
per-Beta cap.

**D2 — the three re-homed ids (owner-approved).** These are published, they
already contain part of what the owner asked to be built, and they are homed on
pages far later in the reading order, so the new pages could not cite them
without a load-bearing forward reference, which is forbidden:

| id | current home | current order | moves to |
|---|---|---|---|
| `def-equivalence-relation` | `monoids-groups-and-subgroups` | 24 | `relations-functions-and-quotients` (5.3) |
| `lem-equivalence-classes-partition` | `monoids-groups-and-subgroups` | 24 | `relations-functions-and-quotients` (5.3) |
| `def-injection-surjection-bijection` | `countability-and-uncountability` | 18 | `relations-functions-and-quotients` (5.3) |

Ids stay immutable; only page composition changes. Every existing consumer stays
backward-pointing because each item's home order only *decreases*.

**Known consequence:** each re-homed item must be re-read for wikilinks that now
point *forward* (`fwdcheck` `forward-undeclared`). `def-equivalence-relation`
links `lem-int-add-well-defined`, `lem-int-mul-well-defined`,
`lem-rat-ops-well-defined`, `lem-int-equivalence`, `lem-rat-equivalence` in its
`## Remarks`; those become orientation-only forward references and must be
declared in `forward_refs`. Its "Why this item exists so late" remark also
becomes false prose and needs repair. A Remarks correction is a **material**
rewrite under SCHEMA §3, so the stale `verification.judge` block goes and the
item is re-verified.

## Constraints binding every agent on this run

- **The repository IS the serving path.** The live site reads this working
  directory, so any edit to a published item or page is live the moment it is
  written, before any commit. Therefore **no published item or page is edited on
  disk during steps 1–8.** Beta and Alpha record every intended published-page
  edit as an exact applyable edit (file, exact old text, exact new text,
  justification) in `research/zfc-published-rewiring.md`; the orchestrator
  applies them in the single commit that publishes these pages, so no reader ever
  sees a published page citing a draft item.
- Item ids are immutable. Nothing published is deleted, renamed, or rebuilt.
- At order 5.x the only citable published content is the `not-proved-here`
  catalogue at orders 1–5 (plus the three re-homed ids once they land on 5.3).
  Everything else the new pages need must be built there.

## Step-3 adjudications (orchestrator)

Every load-bearing claim in Beta's report was verified from disk before
deciding. **Approved:** F1 (Choice is named by an orientation-only forward
reference to `def-axiom-of-choice`, not duplicated — verified that item deps
`def-choice-function`, so re-homing it would cascade into
`order-zorn-and-the-axiom-of-choice`), F2 (indexed families belong to pair 2,
because an indexed family *is* a function), F3 (generic relation properties;
`def-partial-order` rewired, not duplicated), F4 (general relation notion minted,
agreement recorded per `briefs/beta-scaffold.md` §7), F5 (the composition and
two-sided-inverse facts that `def-injection-surjection-bijection`'s Remarks
assert unproved get proved — Remarks read from disk and confirmed), F6 (splice
actions), F7 (`scope: published-rehoming-repair`). **Declined:** F8 — page 5.1
keeps its title; the page presents the ZFC system, and the summary and
`rem-which-axiom-each-construction-uses` state that Choice is the tenth axiom and
lives at `def-axiom-of-choice`. **Noted:** F9 (95 items is large; acceptable).

Verified independently: 92 new ids collision-free against `items/`, every
`aliases:` list and `plan-spec.json`; 95/95 kind/prefix pairs agree; 35/35 staged
old-text blocks byte-exact on disk; the re-homing wikilink analysis exact
(5 forward + 1 intra-page, 1 intra-page, 0); `depsource` 0 unresolved /
0 planned-later / 0 homeless on the spliced spec.

**G1 (orchestrator finding).** Beta listed `content-policy.mjs` as not run. Run
here, it found the batch's only B-page dependency edge:
`fs-symmetry-and-transitivity-imply-reflexivity` → `cex-a-symmetric-transitive-relation-that-is-not-reflexive`,
both on page 5.4. `SCHEMA.md` §7 permits an earlier item on the *same* B page but
`content-policy.mjs` has no same-page exemption, and it is a hard gate at steps
4–6. Rather than loosen a gate mid-build, the false statement was sent back to
exhibit its own witness inline. **The `content-policy` / SCHEMA §7 divergence is
a real finding and is deliberately left unfixed here** — it belongs in the
step-10 report, not in a mid-build gate change.

**G2 (orchestrator finding, mechanism built).** The re-home broke two hard gates
with no way to express the owner's approval: `validate-plan` `dup-id` ×3 and
`content-policy --manifest-only` `batch-item-already-exists` ×3 +
`batch-plan-id-collision` ×3. The first would have cleared at publish; the second
never would, because the item files exist permanently. Built
`research/zfc-rehomed.json` and taught both tools `--rehomed FILE`
(`ARCHITECTURE.md` §3.11a, added in the same change). Measured: with the receipt
both gates pass; without it, both still fail. `from_page` is verified against the
item's real disk home, so a stale receipt raises `dup-id` rather than passing.

## The re-home was applied on disk at step 5, not deferred to publish

The original plan deferred **every** published-content edit to the publish commit.
Step 5's gates falsified that: `depcheck` raised a `page-cycle`
(`monoids-groups-and-subgroups` → `relations-functions-and-quotients` →
`countability-and-uncountability` → back) and `fwdcheck` raised **21
`forward-undeclared` errors plus a `stack-cycle`**. Both gates attribute an item
to the **first page file listing it in directory-walk order**, so
`library/abstract-algebra/` kept the two equivalence ids while
`library/foundations/` took `def-injection-surjection-bijection` — and that split
attribution closed the loop.

**Delaying the re-home does not fix this.** The 21 forward references are new
page-5.3 items citing `def-equivalence-relation`, which really is homed 19 pages
later until it moves. That is a genuine backwards-citation, not a cosmetic one.
Nor was waiving an option: 22 known errors would have masked any new one for the
whole of step 6, which is exactly when 95 items are being edited.

**What made it safe** was reading the renderer instead of assuming:
`web/app/library/[...path]/page.tsx` filters Prerequisites with
`owner || p.status === "published"`, so a published page **never** shows the
public a prerequisite link to a draft page. The feared broken link does not exist.

Applied on disk, **the minimum that clears the gates and nothing more**: `E4a`,
`E4b`, `E5a`, `E6a`, `E1b`. Every one is draft-free — no published item or page
now links to an unpublished item. `E4b`'s paragraph deletion left a double blank
line, collapsed to one per SCHEMA §4.

**Still staged for the publish commit:** `E1a`, `E1c`–`E1h`, `E2a`, `E3a`–`E3g`,
`E7`–`E12`. Every one of them adds a reference to a **draft** item, which is why
none may land early. In particular `def-equivalence-relation` keeps its `judge`
and `audited` stamps for now: its Remark repairs (`E1f`, `E1g`) are material, and
clearing the stamps before an independent reader can certify would trade one hard
gate failure (`published-unaudited`) for another. Two mild stalenesses are
knowingly carried until then — that item's "so late" Remark, and
`def-injection-surjection-bijection`'s "ambient ZFC vocabulary" Remark.

## Owner directive of 2026-08-06, and the second re-home it forced

> (1) forward references involving direct consequences of ZFC are minimized;
> (2) direct consequences of ZFC are concentrated in these two new A/B pairs;
> (3) everything is cleaned up at the end.

**The placement was already right and stays.** `rounds.mjs` puts page 5.1 at
dependency level 2, where level 1 is only the `not-proved-here` catalogue.
Moving *lower* cannot reduce forward references — every forward target sits at
order 6, 10, 72, 243 or 245, all above — and would convert the one legal backward
edge (the order-3 Cohen citation) into a new forward one. The direction that
removes them is *upward*, which would destroy the point of the build: nothing at
order 6 or 10 could then cite the axioms.

**What the directive did change** is which items belong here. Three more
published items were re-homed onto page 5.3 (receipt extended, owner-approved):
`def-partial-order`, `def-choice-function`, `def-axiom-of-choice`.

- `def-axiom-of-choice` **is an axiom of ZFC** and was sitting on an order-theory
  page. That is the sharpest violation of (2) in the corpus.
- `def-partial-order` is a relation with three of the properties page 5.3 defines
  generically. Keeping the general properties on 5.3 and the named structure five
  pages up is exactly the silent-redefinition defect `briefs/beta-scaffold.md` §7
  names.
- `def-choice-function` moves because AC cannot move without it.

**Verified safe before committing to it:** every wikilink on the three that the
move turns forward lives in `## Remarks`, so all are orientation-only and none
trips `forward-on-spine`, which would have been fatal on a definition. The single
`## Definition` link, `def-axiom-of-choice` → `def-choice-function`, becomes an
ordinary same-page link because both move together.

**The measured win.** Raw forward-reference count rises slightly, and that is the
right trade, because the two kinds are not equivalent: *before*, a foundational
page reached up for definitions it needed; *after*, definitions signpost the
theorems that use them, which is the healthy pattern `def-axiom-of-choice`
already followed. Decisively, **the batch's only load-bearing forward reference
disappears** — `fs-every-surjection-has-a-right-inverse-in-zf` → `def-axiom-of-choice`
becomes an ordinary backward `deps` edge. Seven declarations on the new pages
collapse to intra-page links.

**Deliberately NOT re-homed**, and the reason, because the boundary is the
judgement: `def-inductive-set` / `def-natural-numbers` / `thm-omega-is-peano-system`
(order 6) — moving them would gut `construction-of-the-natural-numbers`, and the
three references to them are orientation-only Remarks *recording the agreement*
between the Axiom of Infinity and the ℕ construction, which is the prescribed
pattern rather than a defect. `def-equinumerous` / countability vocabulary
(order 18) and the ordinal/cardinal development (order 243) are coherent
developments, not direct consequences of the axioms, and are outside the two
pairs' commissioned remit. `foundations-of-the-real-numbers` (31 items) is
deliberately axiomatic about ℝ; it is staged for the owner's call at step 10, not
decided here.

## The spine-wiring extension (owner rule 2)

Beta staged 20 published-side edits. Measured from disk, wiring just the six
targets among them puts **2,495 of 2,859 items** transitively onto the ZFC pages;
266 across 30 pages would still not reach it, of which ~114 are the
`not-proved-here` catalogue (correctly ungrounded — no proofs at all). The
substantive remainder is the algebraic and real-number spine roots, which are
ungrounded for the reason the directive names: `def-binary-operation` has
`deps: []` while its first sentence reads *"a **binary operation** on a set $S$ is
a function $*: S \times S \to S$"* — and **804 items rest on it**; `def-field`
carries 1,921 and `def-complete-ordered-field` 1,782. Alpha's step-6 remit is
therefore extended to stage `deps` + wikilink edges from those spine **roots** to
`def-function` / `def-cartesian-product`. Roots only: transitivity does the rest,
and direct edges from every item that merely uses ∪ or ∅ would be redundant
edges of exactly the kind `redundant-prereq` exists to discourage.

## Three latent gate-table defects found and fixed

All three were pre-existing, and all three are the same species: a gate asking a
step for a record that step cannot have produced.

1. **`gates.mjs` step 4 ran `content-policy` in post-authoring mode.** Step 4 is
   the splice; authoring is step 5, so no item file exists and it reported
   `scope-item-missing` for all 95 items. **That step could never have passed on
   a fresh build.** Now runs the manifest-only form.
2. **`gates.mjs` step 5 ran `risk-report --require-reviewed`.** A `risk_review`
   is a disposition only Alpha writes, at step 6. Halted here on six critical
   items whose reviews were not yet due — the identical bug the audit table
   already fixed at A4 versus A6. Step 5 now computes tiers;
   step 6 requires dispositions. `CLAUDE.md`, `LEVELS.md` and
   `QUALITY-CONTROLS.md` corrected to match.
3. **No gate could express an owner-approved re-home** (G2 above).

## Step 6a — both independent readers complete

Neither reader authored what it audited. Both gave an explicit no-exception
coverage statement over every proof step and every dependency citation on their
pair, reading cited items from disk.

**Five fatal defects found and repaired** (the step-10 ledger):

| id | type | location | disposition |
|---|---|---|---|
| `def-axiom-schema-of-replacement` | invalid inference — **circular derivation** | Remark | derivation replaced |
| `rem-which-axiom-each-construction-uses` | the same circularity, second site | page-prose remark | prose corrected |
| `ex-kuratowski-ordered-pairs-computed` | false claim in a proof step | step 1.1 | proof repaired |
| `def-axiom-of-infinity` | overstated claim + **incorrect dependency citation** | Remark | restated, dependencies corrected |
| `def-product-of-an-indexed-family` | false/overstrong statement | Remark | prose corrected |

The Replacement one is the most instructive: the remark "derived" Separation from
Replacement by using $\{z \in x : \psi(z)\}$ — the set to be produced — as
Replacement's *domain*, which the schema requires to be a set already. The repair
is the case split on whether some $c \in x$ satisfies $\psi$, with the empty case
discharged by Infinity and **not** by `thm-the-empty-set-exists-and-is-unique`,
which is itself proved from Separation. `def-product-of-an-indexed-family`'s was
false exactly when some $A_j = \varnothing$ — the case a proposition two items
later exhibits.

Verified against primary sources rather than memory: Beta's hand-rendered
unabbreviated **Infinity** and **Foundation** sentences are correct; the
Russell/no-universal-set split overstates nothing; $\bigcap\varnothing$ is
coherent across all four places it appears; connexity is genuinely not
transported by the order correspondence; and
`ex-a-nonempty-product-built-without-choice` survives a counterexample search and
is a `deps` target nowhere.

## Two process hazards, both recorded rather than patched over

**H1 — concurrent write on the shared batch contract (structural).** Both readers
hold write authority on `research/zfc-batch-1.proof-contracts.json`, because this
run has **one batch** and `LEVELS.md` §6a scopes a reader's write authority to
"its assigned in-flight batch files". With one batch that is not a partition, and
the pair-2 reader's write silently clobbered the pair-1 reader's edits to the
merged file. `proof-contract --strict` caught it as `citation-use-unmapped`; it
was repaired by re-running `merge-proof-contracts.mjs`, the documented
single-writer handoff. **Verified from disk after the repair:** the pair-1
reader's `L5` use on `prop-basic-properties-of-the-power-set` step 2.1 and its
`ex-kuratowski` boundary re-anchors are present, the pair-2 reader's `L17` on
`thm-canonical-decomposition-of-a-function` is present, and strict passes 62/62.
The batch file is authoritative; the merged file is a deterministic copy and no
reader may hand-edit it. **The namespaced write protocol assumes one Beta per
batch and does not extend to two readers on one batch — report at step 10.**

**H2 — a staged edit will break a gate at publish.** `E10b` rewrites the exact
sentence of `def-partial-order` that `thm-reflexive-and-irreflexive-orders-correspond`'s
`[L15]` contract quote reproduces byte-for-byte, so **`proof-contract --strict`
will fail the moment `E10b` lands** unless that quote is refreshed. The fact text
stays mathematically faithful — the three clauses survive verbatim — so this is a
quote refresh, not a repair. The pair-2 reader pre-empted the identical hazard
from `E11b` on `[L14]`.

## Publish/cleanup checklist (owner objective (3))

Nothing here runs before the owner's step-10 audit. All of it lands in the single
publish commit.

1. Apply every remaining staged edit in `research/zfc-published-rewiring.md`
   (`E1a`, `E1c`–`E1h`, `E2a`, `E3a`–`E3g`, `E7`–`E12`, plus Alpha's spine-root
   additions). `E10f` is recommended **decline** by both Beta and the pair-2
   reader.
2. **Refresh every contract quote the applied edits invalidate — `[L15]` at
   minimum (H2) — then re-run `proof-contract --strict`.** This gate is not in
   the usual post-edit list and is the one H2 breaks.
3. Replace the stale stamps on materially edited published items with
   `verification.verified`, `scope: published-rehoming-repair`,
   `delegated_by: owner`, naming the independent current reader. No agent
   certifies its own repair.
4. Flip the four new pages and all 92 new items to `status: published`.
5. Re-run the full gate set and confirm the build-window transients are **zero**:
   no `dup-id`, no `multi-home` on the six re-homed ids, no
   `published-unaudited`, `fwdcheck` and `depcheck` clean.
6. Commit — conventional style, **no `Co-Authored-By` trailers**.

## Steps 7–9 complete

**Step 7.** Full paired coverage, 98 items, both lanes, no nulls surviving.
DeepSeek 90 pass / 8 reject / 0 null; Sonnet 92 pass / 6 reject / 0 null (three
Sonnet nulls re-run, all passed). Lane caps were tuned **down** from the default
on two measured grounds: 4 GB host headroom against a 4.6 GB peak recorded for
16+16, and `judge-sweep.mjs`'s own record that Sonnet at cap 16 returned **207
capacity refusals against 140 responses** in wave 5. Run at DeepSeek 16 / Sonnet
6, DeepSeek returned 98/98 and Sonnet produced 3 nulls.

**Step 8.** 14 rejections, 13 items. **5 confirmed fatal, 8 nonfatal, 1 false
positive.** The item-granular rejudge rule held: 5 repairs staled 5 items, not
98. Both lanes rejected `def-axiom-of-choice`, independently rediscovering the
defect already staged as `E11b`.

**Step 10 judge comparison** — `judge-compare.mjs`, adjudicated:

| lane | candidates | confirmed fatal | nonfatal | false positive | precision |
|---|---|---|---|---|---|
| deepseek-v4-pro | 8 | 4 | 4 | 0 | **0.50** |
| claude-sonnet-5 | 8 | 2 | 5 | 1 | **0.25** |

`CLAUDE.md` asks for exactly this re-measurement of the Sonnet lane before
treating it as settled. **On this run the cross-family lane was twice as precise
and produced the run's only false positive** — and with author, readers and Alpha
all `claude-opus-5`, that is the result to weight.

**Step 9.** Gate clear. The targeted falsified-claim sweep found only the two
Alpha had already staged (`def-ordinal`'s "does not assume Foundation anywhere",
`def-injection-surjection-bijection`'s "ambient ZFC vocabulary"); both become
false only at publish, so staging is correct. The axiom-count repair (E19) was
applied here.

## The prose-count defect class — five instances, one shape

The single most repeated defect on this run, and every instance survived the
agent that wrote it:

1. **"The nine ZF axioms"** / "the tenth axiom of ZFC", at three sites. The page
   states **eight**; the empty set is a theorem here, not an axiom. It passed
   Beta, both step-6 readers — one of which *explicitly considered the count and
   chose to keep it* — and was caught only when a judge rejection on a different
   item led Alpha to the numbering.
2. **"the one principle this library places strictly between ZF and AC"** —
   `rem-choice-ledger` lists three and says "none of them is 'the weakest'".
3. **"the two applications of Zorn's lemma"** — `consumers.mjs thm-zorn` returns
   **38** consumers.
4. **"most of them collapse"** in a total order — refuted by the least upper
   bound property of ℝ.
5. An unbounded universal about every AC-invoking result being flagged.

(2)–(5) were **introduced or left behind by the repairs themselves**, each one a
claim that was true under a page bound and became false when the bound was
removed. **Every instance was repaired by DELETING the count, never by correcting
it** — a corrected count preserves the failure mode, which is precisely the
owner's standing rule ("every count written here has eventually been wrong").

**No-self-certification is what caught (2)–(5).** Alpha repaired, Alpha's gates
passed, and **both judge lanes passed the repaired text** — three falsehoods were
still in it. Only an independent certifier with no stake in the repair found
them. That certifier then correctly declined to certify its own follow-up round,
so a second, fresh certifier was dispatched.

## Step 10 — ALL GATES CLEAR, at the owner pause

```
step 5 CLEAR   step 6 CLEAR   step 8 CLEAR (--against after-step8-alpha)   step 9 CLEAR
level-coverage: 98 items, 62 proof-bearing, 582 relationships, 98 complete judge pairs, 0 errors
```

**The certification loop ran four rounds and every round found a real defect.**
`def-partial-order` certified in round 2. `def-axiom-of-choice` took four:
round 1 removed the judge-rejected Cartesian-product falsehood and introduced
"the one principle"; round 2 fixed that and introduced an unbounded universal
about flagging AC use, refuted by a **published counterexample**
(`thm-proper-ideal-contained-in-maximal-ideal` deps `thm-zorn`, whose Statement
opens "Assume the Axiom of Choice", while "choice" appears nowhere in Krull);
round 3 restated it normatively and left the Con(ZF) conditional dropped and a
false credit to `rem-choice-ledger`; round 4 removed the **survey clauses**
themselves, per SCHEMA §"Remarks JUSTIFY; they do not SURVEY", and certified.

**Every defect in all four rounds lived in clauses characterising OTHER items.**
Fixing the class rather than the instance is what converged it.

**Ordering note for future runs:** writing `verification.verified` **stales the
item's judge verdicts**, because `judge.mts` excludes only `verification.judge`
from its normalization. Stamp first, then judge. Discovered here when stamping
two certified items reopened `judge-coverage-missing` on both.

## Publish-time reminder (unchanged, still binding)

Nothing in `research/zfc-published-rewiring.md` beyond what is recorded as
APPLIED has been applied. `E10b` still breaks `proof-contract --strict` on
`[L15]` unless that quote is refreshed when it lands (H2).

## Published — and one deliberate, owner-approved shortfall

The level publishes on **`verification.verified`** (`scope: page`,
`delegated_by: owner`), which SCHEMA §3 accepts as the publish gate for
owner-delegated auditing. The 92 new items carry **no `verification.judge`
stamp**, and that understates the work: `research/zfc-judge.jsonl` holds **full
paired coverage of all 98 items from step 7**, and `level-coverage
--verify-current-context` certified 98/98 complete pairs before publication.

Why the stamps are absent: applying the staged rewiring moved the pair-context
hashes, so `apply-judge-stamps` could honestly stamp only 2 of 98. A final sweep
against the published text would have restored them; **the owner declined that
spend (2026-08-07)** and the sweep was stopped mid-run. The ledger is intact
(280 rows, none malformed).

**This errs in the honest direction** — the page's verification caption will say
fewer items were independently judged than actually were, rather than claiming a
pass on text a judge never saw. To close it later: run
`judge-sweep.mjs --pages the-zfc-axioms-and-basic-set-constructions,relations-functions-and-quotients`
then `apply-judge-stamps.mjs --apply`, in that order and **after** any other text
change, because `judge.mts` excludes only `verification.judge` from its hash.

## Two findings left for a future run (neither licensable under R1)

1. **`thm-proper-ideal-contained-in-maximal-ideal` `[L3]`** states what its target
   is *for* rather than what it says, violating the citation-fidelity rule — and
   the clause it drops is "A **nonempty** subset", the exact hypothesis the
   empty-chain repair exists to respect. Two independent certifiers flagged it.
2. **`rem-choice-ledger`'s list of results assuming full choice omits Krull** and
   `thm-every-independent-set-extends-to-a-basis`. Its framing is
   non-exhaustive, so no sentence there is false, but the omission is now more
   visible because Krull declares AC in its Statement.

## State

- Step 0 **complete**: batch decided (one batch, both pairs, 0 cross-batch
  seams); preflight `READY`. The four page skeletons were spliced and then
  reverted — the real splice happens once at step 4 with Beta's item lists, so
  the working tree carries no half-state.
- Steps 1–2 **complete**: Beta-zfc-1 returned 95 items across the four pages
  (39 / 10 / 36 / 10), 92 new ids plus the 3 re-homed, 62 proof-bearing items
  with contract entries, 35 staged published edits, 12 forward references
  (11 orientation-only, 1 load-bearing on a B-page false statement, legal).
- Step 3 **complete**: adjudications above; Beta applying the G1 fix.
- Working-tree baseline: `main` at `5e8e8a1`. Modified: `tools/validate-plan.mjs`,
  `tools/content-policy.mjs`, `ARCHITECTURE.md`, `LEVELS.md` (the `--rehomed`
  mechanism and its docs). Added: this file, `zfc-brief-beta-1.md`,
  `zfc-rehomed.json`, and Beta's four artifacts. `research/plan-spec.json` is
  **unmodified**.
- Step 4 **complete**: spec spliced (both F6 actions applied); gates clear.
- Step 5 **complete**: 92 new item files + 4 page files authored by Beta-zfc-1,
  all `status: draft`. **`gates.mjs --step 5 --run zfc` → STEP 5 CLEAR**, all 12
  gates, including `precheck` 2172/0 failing, `proof-contract --strict` 62/62,
  `content-policy` 95 scoped / 0 errors, and `rendercheck` over 3043 files.
  Contracts merged to `research/zfc-proof-contracts.json` (62 scoped items).
  Touch snapshots in `research/zfc-touches.json`: `pre-authoring` (2767 items),
  `after-authoring` (2859).
- Provenance across the 92: 33 `ai-altered/ai-altered`, 27
  `literature-derived/ai-altered`, 25 `literature-derived/not-applicable`, 6
  `ai-altered/not-applicable`, and exactly **one** `ai-generated` statement,
  `ex-a-nonempty-product-built-without-choice` (`generation.role: example`, a
  deps target nowhere).
- **62 items routed by `risk-report`: 47 CRITICAL, 13 HIGH, 2 MODERATE.** All 60
  high/critical need an Alpha `risk_review` before step 7.
  **CORRECTION (2026-08-06):** this record previously said "6 critical", copied
  from a `gates.mjs` failure line that printed only its first six errors. The
  pair-1 step-6 reader flagged the discrepancy and the count was re-measured
  directly with `node tools/risk-report.mjs research/zfc-proof-contracts.json`.
  This is the `halt-record-truncates-gate-errors` failure mode exactly: a summary
  line undercounts blockers, so **re-run the gate rather than quoting a report**.
  Had it stood, Alpha would have delivered 6 reviews against an obligation of 60.
- **Second re-home integrated (owner-approved).** Page 5.3 now carries 39 items
  including `def-partial-order`, `def-choice-function` and `def-axiom-of-choice`.
  All 7 inverse `fwdcheck` errors cleared; **`fwdcheck` exits 0 and the batch now
  has NO load-bearing forward reference** —
  `fs-every-surjection-has-a-right-inverse-in-zf` carries `def-axiom-of-choice`
  in `deps`. `gates.mjs --step 5 --run zfc` → **STEP 5 CLEAR** (98 scoped items).
  Three of Beta's findings are real mathematics rather than wording: clause (vi)
  of `thm-reflexive-and-irreflexive-orders-correspond` proves that
  `def-partial-order`'s "associated strict order" and this page's map
  $R \mapsto R \setminus \Delta_A$ are the same map (the §7 silent-redefinition
  defect, invisible while the two lived five pages apart); the correspondence
  does **not** transport connexity, since an irreflexive relation is connex on
  $A$ only when $A$ is empty; and a choice function is exactly an element of a
  product, so AC's two formulations are one statement about one object.

- **Level/order alignment applied (owner-approved, 2026-08-06).** Three spec
  edits — page 5.1 `requires: []`, `construction-of-the-natural-numbers` requires
  both new A pages, `order-zorn-and-the-axiom-of-choice` requires
  `relations-functions-and-quotients` — plus a one-line correction in
  `tools/rounds.mjs`. Beta independently reached the same `order-zorn` edit from
  four `undeclared-prereq` errors over 51 published items, which is the
  mechanical confirmation that the edge is real and not merely declared.
  `validate-plan --rehomed` exits 0. Live result:

  | order | level | page |
  |---|---|---|
  | 3 | 1 | `deferred-set-theory-beyond-choice` (the ‡ shelf) |
  | **5.1** | **1** | **the ZFC axioms — the bottom, requires nothing** |
  | 5.3 | 2 | relations, functions, quotients |
  | 5.4 | 3 | its examples |
  | 6 | 3 | `construction-of-the-natural-numbers` |
  | 10 | 4 | `order-zorn-and-the-axiom-of-choice` |

  **The `rounds.mjs` defect was the real cause of the misalignment**, and it is a
  fourth of the same species as the three gate-table defects: `kind: P` pages
  were pinned to level 0 unconditionally — a *build-planning* claim ("already
  published, schedules no work") silently doing duty as a *dependency-depth*
  claim. `construction-of-the-natural-numbers` is a P stub, so it sat below the
  axioms its own items depend on, and every page requiring it inherited that.
  Pages now level from their own `requires`; the P exclusion is kept where it
  belongs, in the round scheduling.

- **Tried and reverted:** backfilling all four `kind: P` stubs with their real
  item lists (161 items) to complete the spec's item graph. It surfaced **22
  pre-existing `dup-id`s** — the two ℝ-construction pages genuinely share
  `def-integers`, `lem-int-*` and about twenty more — plus 4 `companion` errors.
  Legacy conditions, out of scope mid-build; **report at step 10, do not fix
  here.**

- Next action: step 6 — two independent readers running now (Opus 5, pair 1 and
  pair 2, neither is Beta-zfc-1), then Alpha-zfc with DeepSeek proof-refuters.
  Briefs: `research/zfc-brief-reader.md`, `research/zfc-brief-alpha.md`.

## Step 6b/6c — Alpha-zfc complete (2026-08-06)

**`node tools/gates.mjs --step 6 --run zfc` → STEP 6 CLEAR**, all 14 gates,
including `precheck` 2172/0, `proof-contract --strict` 62/62, `risk-report
--require-reviewed` **0 errors / 62 routed**, `content-policy` 98 scoped / 0
errors, `depcheck`/`fwdcheck`/`extcheck`/`prosecheck`/`citecheck` clean.

**Alpha edited exactly ONE item**, computed from touch snapshots rather than
claimed: `ex-a-partition-and-the-equivalence-relation-it-induces-computed`.
The step-6a readers changed 19 (three of which are the second re-home's
`forward_refs` edits, not repairs). Snapshots now:
`pre-authoring -> after-authoring -> after-step6a-readers -> after-step6-alpha`.

**The five fatal repairs were re-verified from disk, not from the reports, and
all five hold.** In particular the Replacement derivation is now valid: the case
split is on whether some $c \in x$ satisfies $\psi$, the witness formula assigns
exactly one $w$ to each $z \in x$, and the empty case is discharged by
**Infinity** — not by `thm-the-empty-set-exists-and-is-unique`, which is itself
proved from Separation. `rem-which-axiom-each-construction-uses` carries the same
corrected account. The pair-2 `[L17]` on `thm-canonical-decomposition-of-a-function`
anchors to clause 2 of `lem-equivalence-classes-partition`'s **Statement**, not to
an internal step.

**Proof-refuters (DeepSeek V4 Pro, read-only, tool-less, the only cross-family
reader in this build).** 47 dispatched, one per critical item, on context Alpha
assembled. **43 CLEAN, 2 DEFECTS, 1 null verdict, 1 recovered on retry.**
- `ex-a-partition-and-the-equivalence-relation-it-induces-computed` — **CONFIRMED
  and REPAIRED.** Step 2.1 said "the only pair it contains with distinct
  coordinates is $(u,v)$, and $(v,u)$ is present", which contradicts itself:
  $(v,u)$ also has distinct coordinates. A false assertion in a proof step is not
  a closable gap, so the 30-second rule did not cover it; step 6 is where polish
  belongs, so Alpha repaired it.
- `thm-reflexive-and-irreflexive-orders-correspond` — **FALSE POSITIVE.** The
  refuter read step 2.2's "transitivity of $S$ gives $(a,c) \in S$" as false when
  $a = c$. It is a valid application of a hypothesis; $a = c$ makes the subcase
  unsatisfiable, and step 1.2 (asymmetry) is already cited there.
- `ex-a-nonempty-product-built-without-choice` — **NULL VERDICT**: DeepSeek
  exhausted its 40k reasoning budget on all three dispatches. A capacity
  exhaustion is not a verdict. Alpha read it personally; both claims are true and
  the item is a `deps` target nowhere.

**Boundary worksheet: 496 dispositions audited, 21 contract repairs applied.**
Fourteen items had a `checked` disposition naming a step whose text does not
establish what the evidence claimed — twice asserting something the item does not
contain at all (`thm-canonical-decomposition-of-a-function` credited step 2.1 with
making $\pi$ a bijection, which the item never shows; `fs-every-property-defines-a-set`
named a formula $\varphi(x) := x \neq x$ that appears nowhere in it). **Every one
was a defect of the CONTRACT RECORD, not of the mathematics**, so no item text
changed and no judge verdict was staled. `proof-contract --strict` validates that a
boundary anchor *exists*, never that it is truthful; that gap is a step-10 finding.

**Citation fidelity.** All 491 citations compared mechanically against item text:
484 reproduce the contract quote verbatim. Of the 7 divergences, 5 are faithful
shortenings and 2 were contract-record errors whose quotes were refreshed.

**H2 swept exhaustively.** Every staged edit was applied in memory and every
contract quote re-tested: **exactly one hazard corpus-wide**, the known
E10b/`[L15]` one, with its repair written into `research/zfc-published-rewiring.md`
§10. 50 staged blocks are still byte-exact and unique on disk; 5 already applied;
0 stale. E11b does **not** break `[L14]` — the pre-emption works.

**Spine-root rewiring staged (§7-§9 of the rewiring file), measured not asserted.**
Grounding, counted as items transitively reaching pages 5.1-5.4 through `deps`:
**2,169 -> 2,742 of 2,859**. Four root edits carry it: `def-binary-operation` (E13),
`def-field` (E14, **flagged for the owner at step 10** because
`foundations-of-the-real-numbers` is deliberately axiomatic), `def-peano-system`
(E15), `def-filter` (E16). Of the 117 items still not reaching, **116 are the
`not-proved-here` catalogue** (no proofs at all, correctly ungrounded) and the
single substantive one, `lem-pasted-squares-commute`, is deliberately left alone:
it is a diagram chase over arbitrary morphisms and invokes no set-theoretic
construction.

**Two published claims the new pages FALSIFY, staged as E17/E18 (class ii).**
`def-ordinal` asserts "This library does not assume Foundation anywhere" — page 5.1
now states Foundation as an axiom and proves two results from it.
`def-order-isomorphism` asserts that functions, bijections, ordered pairs and
Cartesian products "are ambient ZFC vocabulary in this library" — after 5.1/5.3
every one of them is a built item. No gate can see either: `prosecheck` reads
positional claims against the spec, not scope claims about the corpus.

**OUTSTANDING for the orchestrator before step 7 closure.**
`research/zfc-spine-audit.json` is a template with **68 proof-bearing items in the
top-100 dependency cones and zero attestations**. `level-coverage
--verify-current-context` cannot pass without it, no agent on this run was
assigned that reading, and it is an independent reading of PUBLISHED proofs, so
Alpha may not self-certify it.

**Artifacts written:** `research/zfc-audit-manifest.json` (581 edges),
`research/zfc-impact-audit.json` (17 changed interfaces, 1,527 dispositions,
validates exit 0), `research/zfc-audit-coverage.json` (reviewer + attestation
complete; judge fields empty by design), `research/zfc-spine-audit.json`
(template), `research/zfc-brief-refuter.md`, and 47 refuter records under
`research/audit/zfc-dispatch/`.

## Artifact paths

```
research/zfc-brief-beta-1.md              the Beta brief for this run
research/zfc-batch-1.pages.json           Beta's page objects
research/zfc-batch-1.notes.md             Beta's notes
research/zfc-batch-1.proof-contracts.json Beta's proof contracts
research/zfc-published-rewiring.md        staged edits to published content
research/zfc-touches.json                 touch ledger
research/zfc-judge.jsonl                  paired judge verdicts
research/zfc-judge-adjudications.jsonl    Alpha's adjudications
research/zfc-audit-coverage.json          Alpha's whole-level receipt
```
