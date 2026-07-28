# `frontier-2` — build state, decisions, and what a resuming session must know

**Started 2026-07-29.** Owner instruction, given after the pair table was
regenerated and reviewed: **build the topology, combinatorics and foundations
A/B pairs only**, autonomously, step 0 through step 10, pausing at the rundown.
`verification.audited` is the owner's field alone and this build does not
publish.

The owner is not adjudicating mid-build, so every step-3 finding is decided by
the orchestrator and **logged here** for review at the pause.

## Why this build is called `frontier-2` and not `level<n>`

It is **not a dependency level**, for the same reason `frontier-1` was not:
`LEVELS.md` names its artifacts `research/level<n>-*`, and this build's are
`research/frontier-2-*`. The six pairs sit at computed levels **5, 7 and 8** and
were selected by a different criterion — every page prerequisite already
**published** — and then narrowed by the owner to three categories.

They are mutually independent at page level: no one of the six `requires`
another. The one-round rule therefore applies and all six pairs are authored in
parallel at step 5.

## Step 0 — the frontier, computed from disk, then narrowed by the owner

`node tools/rounds.mjs --pairs --md > research/BUILD-LEVELS.md`, then every A
page **absent from disk** whose every `requires` is `status: published` **in its
page file on disk**. That gave **eleven** pairs. The `kind: P` placeholder page
`construction-of-the-natural-numbers` is not a build target and was excluded.

The owner then selected topology, combinatorics and foundations. **Six pairs,
twelve pages counting companions:**

| order | A page | category | level | `requires` (all published) |
|---|---|---|---|---|
| 22 | `inclusion-exclusion-and-the-pigeonhole-principle` | combinatorics | 5 | `finite-counting-and-binomial-coefficients` |
| 247 | `cardinal-arithmetic-and-cofinality` | foundations | 5 | `ordinal-arithmetic`, `order-zorn-and-the-axiom-of-choice` |
| 253 | `connectedness` | topology | 7 | `subspaces-products-and-quotients`, `ordinal-arithmetic` |
| 255 | `compactness` | topology | 7 | `subspaces-products-and-quotients`, `filters-and-ultrafilters`, `ordinal-arithmetic` |
| 263 | `hausdorff-via-the-diagonal` | topology | 8 | `separation-axioms` |
| 267 | `urysohn-lemma-and-tietze` | topology | 8 | `separation-axioms` |

**The five real-analysis pairs of the eleven are NOT in this build** and remain
buildable: `darboux-lhopital-and-taylor` (155),
`bounded-variation-and-riemann-stieltjes` (163), `improper-integrals` (165),
`uniform-convergence-of-functions` (169),
`the-riemann-integral-in-rn-and-jordan-content` (235).

### Batching, and the seam count reported before spawning

Two batches of three A pages (the cap), packed by prerequisite affinity. **The
packing was decided by the structural finding in F2-D1 below, not by topic.**

- **Batch 1 — the spine.** `cardinal-arithmetic-and-cofinality` (247),
  `connectedness` (253), `compactness` (255). Both **load-bearing** seams of the
  build are internal to it: cofinality → compactness, and order topology →
  compactness.
- **Batch 2.** `hausdorff-via-the-diagonal` (263), `urysohn-lemma-and-tietze`
  (267), `inclusion-exclusion-and-the-pigeonhole-principle` (22). The two
  topology pages share `separation-axioms` as their sole prerequisite; the
  combinatorics page is genuinely independent of everything else in the build,
  which is stated rather than left silent.

**Cross-batch seam count at spawn: 2 page-level edges — `compactness` → 263 and
`compactness` → 267 — and the item-level count was NOT computable**, because all
twelve pages have empty `items` arrays (`LEVELS.md` step 0.4: say so rather than
report 0).

Both cross-batch edges are **additive rather than load-bearing**: 263 and 267 can
be scaffolded in full without them and then gain the compactness-dependent
theorems once `compactness`'s ids exist. They are also exactly the discharge of
inherited obligation 3. The alternative packing (255 with 263 and 267) would have
put the two *load-bearing* edges across the seam instead, which is strictly
worse: `compactness` cannot even state its signature counterexamples without
them.

## F2-D1 — THE STRUCTURAL FINDING, found by the orchestrator before dispatch

**There is no order topology that `connectedness` or `compactness` may legally
cite.** Verified from disk, not from any agent's report:

- `def-order-topology-on-an-ordinal` and `lem-ordinal-order-topology-is-t3` are
  published and homed on **`separation-axioms`**, order **261** — *above* both
  253 and 255. A page may not cite a later page.
- `ex-order-topology` is published but homed on
  `topological-spaces-and-continuity-examples`, a **B page**. Leaf-locked;
  uncitable from anywhere else.
- `grep` over `items/` finds no other order-topology definition.

**What it blocks as the prose scaffolds stand.** On `connectedness`: "the long
line is connected" and all linear-continuum material. On `compactness`: `ω₁` is
sequentially compact and not compact, `ω₁ + 1` is compact, the long line is
countably compact and not compact — the signature counterexamples of the page.

**Provisional reading handed to Beta-F2-1, which may overturn it:** mint a
general `def-order-topology` on **`connectedness`**, the lowest-ordered page in
this build that needs it, and let `compactness` cite it. The agreement with the
published ordinal special case then runs the *legal* direction — 261 sits above
253, so recording it is a one-sentence **staged amendment to a published item**,
never a forward reference, and never a silent second notion.

Alternatives Beta was told to reject explicitly and give reasons for: homing it
on the foundations page (topically wrong); dropping all ordinal-space material
(a large permanent loss); a declared forward reference (barred outright on a
definition by `fwdcheck`'s `forward-on-spine`).

**Status: awaiting Beta-F2-1's step-3 report. Decision logged at step 3.**

## The three inherited obligations, and their disposition in this build

From `research/NEXT-SESSION-PROMPT.md`, written at the close of `frontier-1`.

1. **`compactness` owes an agreement — LANDS IN THIS BUILD.** `frontier-1` minted
   `def-locally-compact-metric-space` (published, `function-space-topologies`) as
   a metric special case because general topological compactness did not exist.
   This build defines it in general, so the agreement must be recorded in the
   dictionary style of `def-metrizable-space`. Note the direction:
   `function-space-topologies` sits *above* `compactness`, so that half can only
   be a staged amendment to the published item; the `def-metric-compactness`
   half (order 120, *below*) is an ordinary backward citation and belongs on the
   new page. Assigned to Beta-F2-1.
2. **`uniform-convergence-of-functions` (169) — DOES NOT LAND.** It is
   real-analysis and the owner excluded that track from this build. The
   two-notions risk against `def-topology-of-uniform-convergence`,
   `thm-uniform-limit-theorem` and `thm-dini` (all published at order 283)
   therefore remains open, and the BINDING note in
   `research/plan-realanalysis-pages.md` §RA-23 stands unchanged. **Nothing in
   this build may assert anything about page 169.** Carried forward.
3. **The plan defect at `compactness` — LANDS IN THIS BUILD.**
   `plan-topology-track.md` §T5 plans "compact Hausdorff ⇒ normal" on the
   compactness page, but normality is defined at 261, above it; as planned that
   is a forward reference on the spine, which `fwdcheck` forbids outright on a
   theorem. Its only legal home is a page above both 255 and 261 — in this build,
   263 or 267, both owned by Beta-F2-2. The same reasoning was extended to two
   further §T5 entries with the same defect: **"locally compact Hausdorff ⇒
   completely regular"** (also needs Urysohn, so 267) and **"paracompact
   Hausdorff ⇒ normal"**. Both Betas were briefed on the reconciliation
   protocol: Beta-F2-2 names the *statements* it needs, never invented ids, and
   the orchestrator binds them at step 4.

## The Sonnet 5 authoring pilot — protocol, pre-registered

Owner-approved; the protocol is fixed in `LEVELS.md` §Step 5 and must not be
loosened after the fact. One A/B pair authored by **Sonnet 5**, one comparable
pair by **Opus 5**, identical brief, identical scaffold quality, and the step-9
readers are **not told which is which**.

`LEVELS.md` requires the two pairs to be "comparable in item count, proof length
and prerequisite depth" — which is measurable only once the scaffolds exist. So
the candidate set is fixed **now** and the assignment is made at step 5:

- **Candidate pairs:** {`hausdorff-via-the-diagonal`, `urysohn-lemma-and-tietze`}
  (same sole prerequisite, same batch, same subject) and {`connectedness`,
  `compactness`} (same two prerequisites, same batch, both flagship pages).
- **Selection rule, pre-registered:** take whichever of the two candidate pairs
  comes out **closest in scaffolded item count**, and give **Sonnet 5 the
  heavier of that pair's two pages**, so the pilot cannot flatter Sonnet by
  handing it the lighter page.
- **Measured per pair:** defects by class (proof / Statement / Remark /
  summary); scaffold errors caught and reported; gate failures before clean;
  tokens; wall clock.
- **Decision rule, fixed in advance:** switch the bulk only if Sonnet matches on
  **proof defects AND on scaffold errors caught**. Matching on proofs alone is
  not enough. If it matches on proofs but not on scaffold catching, the fallback
  is the split — Sonnet for B-page examples, definitions and routine proofs;
  Opus for whatever the scaffold flags high-risk.

A caveat recorded now rather than discovered later: `compactness` carries two of
the three inherited obligations and is the most consequential page in the build,
so if {`connectedness`, `compactness`} is the closer pair, the obligation load is
a confound and will be reported as one.

## Judge

`tsx tools/judge.mts --preflight` returned **OK (`z-ai/glm-5.2`), exit 0** before
anything was spawned. The credit exhaustion that truncated `frontier-1` to
122/212 is resolved. The judge runs **once, after step 9**, per the reformed
execution order `0 → 1 → 2 → 3 → 4 → 5 → 9 → 6 → 7 → 10`.

`JUDGE_VERDICTLOG=research/frontier-2-judge.jsonl` on every run, committed.

## Ledgers

- Repair ledger: `research/frontier-2-touches.json`, snapshotted **after every
  item-modifying stage** — `frontier-1`'s was snapped twice and was consequently
  blind, which was the orchestrator's error and is recorded in
  `ARCHITECTURE.md` §4.
- Refutation ledger: `research/frontier-2-judge.jsonl`.

## Step 3 — findings adjudicated (every load-bearing claim verified from disk)

Beta-F2-1 returned 106 items over six pages, Beta-F2-2 returned 75. Both ran
`validate-plan` and `depsource` against their own scratchpad splices and reported
clean; the authoritative pass is recorded at step 4 below.

### The checks NEITHER agent ran, which I ran before advancing

- **Cross-batch id collision.** Beta-F2-1 explicitly listed this under "what I did
  NOT verify". Checked all 181 ids against each other, against `items/` on disk,
  against every `aliases:` list, and against every other spec page:
  **zero collisions of any kind, and zero intra-batch duplicates.**
- **The `planned-earlier` trap.** `depsource` does not fail a dep onto an unbuilt
  planned page. Classified all **1962** deps of the twelve pages independently:
  1385 to a published item, 373 to an earlier item on the same page, 204 to an
  earlier `frontier-2` page, **0 to an unbuilt planned page, 0 unresolved.**

### Batch 1 (Beta-F2-1) — 11 findings, all ACCEPTED except the last

| finding | decision | verified how |
|---|---|---|
| **1** order topology unavailable; mint `def-order-topology-on-a-linearly-ordered-set` on `connectedness` | **ACCEPT** | confirms F2-D1 and corrects it: `ex-order-topology` carries `aliases: [def-order-topology]`, so the id I would have reached for is **taken** and would have been a hard error at splice |
| **2** no sine in the library; the topologist's sine curve becomes `lem-the-oscillating-zigzag-curve` | **ACCEPT** | `sine-cosine-and-the-definition-of-pi` is order **179 with 0 items** — *earlier* than 253 and unbuilt, exactly the trap; `ls items/` has no `def-sin`/`def-cos`. Precedent exists: `ex-distance-to-the-integers` is already "the trigonometry-free oscillator" |
| **3** `def-cardinal` defines $\lvert X\rvert$ only under AC, so Hessenberg/Tarski are unstatable as planned | **ACCEPT** | read it: line 46 opens **"Cardinality, under the Axiom of Choice. Assume the Axiom of Choice … and let $X$ be a set."** Hessenberg is ZF for alephs; the split into `lem-cardinality-of-a-well-orderable-set` is right |
| **4** the two independence `fs-` items are unwritable; two ZFC-refutable replacements | **ACCEPT** | self-contained scope bars ‡ material as a proof step; ST-2's own trap (i) anticipated this |
| **5** cardinal notation `⊕`/`⊗`, `κ^λ` under a stated rule | **ACCEPT**, owner-reversible | `rem-ordinal-versus-cardinal-exponentiation` exists precisely to warn of the collision |
| **6** Tychonoff via the Alexander subbase lemma, not ultrafilters | **ACCEPT** | read `filters-and-ultrafilters`: it has FIP, ultrafilters and the ultrafilter lemma but **no notion of a filter converging in a space**; that is `nets-and-filters` (259), which itself `requires: [compactness]` |
| **7** the three separation results drop from `compactness` | **ACCEPT** | confirmed from the spec, see the cross-batch table below |
| **8** the expected cofinality→compactness seam **does not exist** | **ACCEPT — and it corrects my own step-0 rationale** | `thm-countable-subsets-of-omega-one-are-bounded` is homed on `ordinal-arithmetic` (245), the **A** page, and its title already carries "no at most countable subset of $\omega_1$ is cofinal in it". So `compactness` needs nothing from `cardinal-arithmetic-and-cofinality`. My step-0 note gave that seam as a reason for the packing; the packing is still correct (the real seam is `connectedness` → `compactness`, 11 declared deps) but the stated reason was wrong |
| **9** three further drops from `compactness` | **ACCEPT** | `countability-axioms-and-cardinal-functions` is order **273 > 255**, so second countability cannot be minted here without a second notion |
| **10** the Sorgenfrey line must be re-minted on `compactness-examples` | **ACCEPT** | leaf-lock confirmed; the payoff needs only an uncountable closed discrete subspace, not Jones' lemma |
| **11** take `requires` as a **replacement**, not a union | **REJECT the narrowing, ACCEPT the additions** | `LEVELS.md` step 4 says union, and `frontier-1` §F-1 logged the same call: a `redundant-prereq` warning is cheaper than a page whose declared prerequisites rest on a transitive argument holding forever |

### Batch 2 (Beta-F2-2) — 12 findings, all ACCEPTED

| finding | decision | verified how |
|---|---|---|
| **F1** Urysohn's lemma costs **dependent choice**, not countable choice — *my brief was wrong* | **ACCEPT** | the published `rem-urysohn-lemma-not-a-zf-theorem` is **titled** "Urysohn's lemma is not a theorem of ZF, **nor of ZF plus countable choice**", citing Tachtsis 2019. My scaffolding brief asserted the construction was countable-choice-free "if written carefully". Following it would have shipped titles asserting non-theorems — the exact class that shipped twice in `frontier-1`. DC goes in the title and Statement of all six affected items |
| **F2** "compact Hausdorff ⇒ normal" is homed on **263**, not 267 | **ACCEPT** | decisive and checkable: `hereditary-and-productive-separation` (265) declares `requires: [hausdorff-via-the-diagonal, compactness, …]` and **not** `urysohn-lemma-and-tietze`. Homing it at 267 would put it permanently out of 265's reach. This resolves Beta-F2-1's open "263 or 267" |
| **F3** `thm-uniform-limit-theorem` is uncitable; mint a real-valued ε/3 lemma on 267 | **ACCEPT** | homed on `function-space-topologies`, order **283 > 267**, and so are its own prerequisites |
| **F4** "paracompact Hausdorff ⇒ normal" belongs to 269, not this build | **ACCEPT** | `partitions-of-unity-and-paracompactness` (269) already declares `requires: [urysohn-lemma-and-tietze, compactness]` |
| **F5** the compact-separation lemmas must be written **choice-free** | **ACCEPT**, binding on step 5 | the textbook "for each $y \in K$ choose…" is full AC over an arbitrary index set; the formula-defined family plus `lem-finite-choice` avoids it |
| **F6** `compactness` may not reuse seven published **metric** ids | **ACCEPT**, and already discharged | the id sweep above shows Beta-F2-1 collided with none of them |
| **F7** `plan-topology-track.md` §T5 homes three results where they cannot be stated | **ACCEPT** | old-text blocks verified byte-for-byte by the agent; applied by Alpha-F2 |
| **F8** scope-denial entries 1–3 are now stale and must be **rewritten**, not appended to | **ACCEPT** | a resolved denial left reading as a denial is the decay class |
| **F9** two `fs-` items drop from 267 with recoverable notes | **ACCEPT** | both need a witness this build cannot reach |
| **F10** no floor/ceiling exists; mint a local `def-the-ceiling-of-a-quotient-of-naturals` | **ACCEPT** | `ls items/` has no `def-floor`/`def-ceiling`; `divisibility-gcd-and-bezout` is order **26 > 22** |
| **F11** page 20 lacks double-sum interchange and the truncated alternating row sum | **ACCEPT** | both are minted on 22 |
| **F12** §CB-2's three traps re-checked and still accurate | **ACCEPT**, no action | orders 26, 30, 78, all above 22 |

### The two cross-batch conflicts, adjudicated from the item statements

1. **Duplicated argument.** Beta-F2-2 scaffolded two standalone separation lemmas
   on 263; Beta-F2-1 had already written **both clauses into the Statement** of
   `thm-compact-subset-of-a-hausdorff-space-is-closed` on 255 ("a point and a
   disjoint compact set, and two disjoint compact sets, have disjoint open
   neighbourhoods"). Beta-F2-2 pre-authorised the outcome: *"If Beta-F2-1 exports
   them, delete mine and rebind."* **De-duplicated at the splice**, with all six
   dependent deps rebound. 263 goes 15 → 13 items. **No result is lost** — the
   mathematics is on 255 in full; this is a de-duplication, not a drop, and is
   flagged here because the standing rule forbids removing a result without owner
   approval and the owner should see that this was not one.
2. **`rem-separation-axiom-conventions`: the two batches disagreed, and each is
   half right.** Read on disk. §5's first bullet says *"this library has no
   general topological compactness at this point"* — **falsified by `compactness`,
   which sits BELOW 261**, so Beta-F2-1 is right that it decays and Beta-F2-2 is
   wrong that it survives. §3, on the missing Urysohn arrow, says the licensing
   page *"sits above the present one"* — 267 > 261, so it stays **true**, and
   there Beta-F2-2 is right. **Amend §5 bullet 1, leave §3.** Staged, not applied.

### One placeholder mismatch, and one item-level risk passed to the authors

- Beta-F2-2's placeholder `lem-closed-subspace-…` vs Beta-F2-1's actual
  `thm-closed-subspace-…` (lemma vs theorem prefix) — **rebound at the splice**;
  it would otherwise have been a `dep-unresolved` failure.
- `thm-closed-subspace-of-a-compact-space-is-compact` (general) carries a dep on
  the **published metric** `lem-closed-subset-of-a-compact-space-is-compact`.
  That is a legal backward citation, but citing a metric statement inside a
  general theorem is the dominant defect class if it is load-bearing rather than
  a dictionary reference. **Flagged to the step-5 author to check or drop.**

## Step 4 — the splice, and the gate of record

12 pages spliced, **179 items** (181 scaffolded, minus the 2 de-duplicated). Page
metadata from the spec, `requires` by **union**, hard-fail on id clash — none
occurred. Every adjudication above was applied mechanically by the splice script
and logged, rather than by hand.

Authoritative gates, run by the orchestrator after the splice:

- `validate-plan.mjs research/plan-spec.json` — **exit 0, 0 errors.** Warnings are
  the pre-existing `redundant-prereq` set plus those the union introduced, and the
  pre-existing `[size]` on `monotone-functions-and-discontinuities` (32).
  **No new page trips `size`** — the largest here are `connectedness` and
  `compactness` at 28.
- `depsource.mjs` — **0 unresolved**; 10797 deps to a published page, 204 to an
  earlier planned page.
- The check `depsource` cannot do — see the 1962-dep classification above.
  **0 onto an unbuilt planned page.**

### Step 4b — Alpha-F2's propagation, and the three things it caught

Alpha-F2 applied both notes sets to the three prose scaffolds. Every "Old text"
block matched byte-for-byte; nothing was declined. Verified from disk before the
commit: only those three files modified, `prosecheck` 0 errors on all three, no
duplicate denial numbers after the renumber.

It caught three defects **in text that had already been approved**, which is the
argument for a single propagating writer rather than letting each Beta apply its
own notes:

1. **A numbering collision neither notes file could see.** Both batches numbered
   their new scope denials from 13. Renumbered on application.
2. **A wrong count in an approved amendment headline** — "FOUR PUBLISHED IDS"
   above a list of seven. Prose rule 1, in text I had signed off.
3. **A drop whose licence is ALREADY MET.** Batch 2 recorded the `fs-` item "the
   Urysohn function vanishes exactly on $A$" as blocked because its witness needs
   the compactness of $\omega_1 + 1$ homed on an **A** page. It is:
   `thm-ordinal-spaces-and-compactness` sits on `compactness`, kind A, citable —
   confirmed from the spliced spec. Batch 2 wrote the entry against its synthetic
   stand-in for `compactness` and could not have known.
   **The drop stands for this build** — the scaffold is frozen after the splice
   and reinstating an item is not a step-4 action — **but the licensing condition
   is satisfied and this is the cheapest recovery available to a later build.**
   Carried to the rundown.

### Recoverable-drop backlog — a standing observation

Item 3 above is an instance of a general pattern worth acting on outside this
build. Roughly 157 "dropped / would license it" notes sit across `research/`,
each a result already reasoned about with its licensing condition named, and
**nothing sweeps them when the licensing page is later built**. This build
recovered "compact Hausdorff ⇒ normal" only because it was hand-carried in a
handoff prompt. Measured against the published corpus for context: cross-page
citation is healthy (6994 cross-page dep edges vs 2592 within-page, 21.7% of
them crossing a category), and the negative tier is strong (246 of 1365 items,
18%, are `counterexample` or `false-statement`) — so the recoverable backlog and
the **28.6% of scaffolded items that are leaf-locked on B pages** are where
richness is actually being lost, not connectivity or counterexample density.

## Step 5 — in progress. The Sonnet 5 pilot ledger, and a gate gap

### `rendercheck` IS MISSING FROM THE AUTHORING BRIEF (orchestrator's omission)

`briefs/authoring.md` names `reflow`, `precheck`, `depcheck`, `fwdcheck`,
`extcheck`, `citecheck` and `prosecheck`. It does **not** name `rendercheck` —
zero mentions — even though `SCHEMA.md` §8 and `LEVELS.md` list it as one of the
hard gates. It catches what no other gate can see: a wikilink inside `$…$` (the
renderer resolves `[[…]]` before KaTeX runs, so the formula dies silently while
`precheck` stays green), unbalanced delimiters, and spans that fail a real KaTeX
parse. All five running authors were told to run it. **This is a run-scoped
instruction; the brief itself was left unchanged.**

**A trap worth keeping.** Seven of the eight rendercheck errors found so far were
not wikilinks at all but the digraph `[[` arising innocently, where a preimage
bracket meets a half-open interval: `f^{-1}[[0,a)]`. The wikilink resolver claims
it and the formula dies. Fix is `f^{-1}[\,[0,a)\,]` or `f^{-1}([0,a))`. Pages
using `[n]` index sets or `[A]^k` subset notation are equally exposed.

### PILOT RESULT — both arms returned. Decision: DO NOT switch the bulk.

| measure | **Opus 5** — `hausdorff-via-the-diagonal` | **Sonnet 5** — `urysohn-lemma-and-tietze` |
|---|---|---|
| items | 21 | 21 |
| precheck | all pass or legitimate `n/a` | all pass or legitimate `n/a` |
| rendercheck | **0 errors**, on a gate its brief never named | **8 errors** initially; 0 after being told to run it |
| scaffold errors caught | **5**, incl. one scaffolded statement that was outright **false** | **0** mathematical; one documented route change |
| dep over-declaration | pruned per item unprompted | 6 items pruned, on audit, after the instruction |
| citations to items it had not read | none — read the parallel pages' Statements | several; **spot-checked by me and accurate** |
| **tokens** | **~420k** | **~796k (1.9×)** |
| **wall clock** | **~42 min** | **~63 min (1.5×)** |

**The pre-registered rule: switch only if Sonnet matches on proof defects AND on
scaffold errors caught.** Proof defects are still blinded until step 9. On
scaffold errors it is **5 to 0**, so the rule is not met on the half the protocol
calls the expensive one.

**But the decisive finding is not quality at all — it is cost.** The entire
premise of the pilot was that Sonnet would be cheaper: authoring was 3.46M of
~6.5M tokens on `frontier-1`. **Sonnet used 1.9× the tokens and 1.5× the wall
clock of Opus on an equal-sized pair.** Whatever step 9 finds about proof
defects, the economic case that motivated the pilot does not survive this
measurement. Recorded as the primary result.

**Where Sonnet did well, stated because the ledger must not be one-sided.** Its
gates are clean on every dimension; it responded correctly and completely to two
mid-flight instructions; it ran a mechanical dep audit and pruned six items
rather than defending its list; and it **flagged honestly** that it had cited
five items from `plan-spec` titles alone because their bodies did not yet exist.
I checked the most load-bearing of those citations against the real Statement
once the parallel page landed — `thm-one-point-compactification-properties`
clauses 1, 2 and 4 — and **its citation is accurate**. On the dominant defect
class of this library, it did not fail.

**One confound I cannot dismiss, and will not pretend to have resolved.**
"Scaffold errors caught" conflates *errors present* with *errors detected*. Both
pages were scaffolded by the same agent, so provenance is matched, but 263's
scaffold happened to contain a false example title and a false counterexample
witness, and 267's may simply have been cleaner. **Nothing downstream looks for a
scaffold error the author missed** — that is precisely why the brief says so — so
this cannot be settled by the step-9 readers and would need me to audit 267's
scaffold directly. Until that is done, the 5–0 is suggestive, not conclusive; the
token and wall-clock result is not affected by the confound and stands on its own.

**Recommendation to the owner:** do not switch the bulk. The protocol's fallback
— Sonnet for B-page examples, definitions and routine proofs, Opus for whatever
the scaffold flags high-risk — is also not supported by this measurement, because
the cost advantage it assumes is absent. Re-run the pilot only if a future build
shows different token behaviour.

### Pilot ledger — arm 1 of 2 returned (superseded by the table above)

Blinding holds: neither author was told it is in a pilot, both briefs are
structurally identical, and no step-9 reader will be told which is which.

| measure | **Opus 5** — `hausdorff-via-the-diagonal` | **Sonnet 5** — `urysohn-lemma-and-tietze` |
|---|---|---|
| items | 21 (13 + 8) | 21 (13 + 8) |
| precheck | all pass or legitimate `n/a` | not yet reported |
| rendercheck | **0 errors on 21 files** — and it ran a gate its brief never named | **8 errors** (7 preimage-digraph, 1 genuine wikilink-in-math) |
| scaffold errors caught | **5**, one of them a scaffolded statement that was outright **false** | not yet reported |
| tokens | ~420k | not yet reported |
| wall clock | ~42 min | not yet reported |

**Fairness notes, recorded now rather than argued later.** (a) `rendercheck` was
in neither brief, so the 8 errors are not a protocol failure by the Sonnet arm —
but the Opus arm ran it unprompted, which is itself the "scaffold errors caught"
dimension the decision rule cares about. (b) The Sonnet arm's page is the heavier
of the two by proof length and prerequisite depth, by the pre-registered
selection rule, so the comparison is deliberately conservative against it.

### The Opus arm's best catch, and a live gap it found

**A scaffolded statement that was false.** "On an infinite set the cofinite *and
cocountable* topologies are $T_1$ with a diagonal that is not closed" fails for
the cocountable topology on a **countably infinite** set: every subset then has
an at most countable complement, so the topology is **discrete**, hence
Hausdorff, with a closed diagonal. Restated with the cofinite clause for an
infinite set, the cocountable clause for $\mathbb{R}$, and the degenerate case
written out.

**A gap that will recur.** `lem-q-and-irrationals-dense-r` states density in the
**ℝ-native** closure of `def-interior-closure-boundary-r`, and no item identifies
that closure with the topological or metric one — `lem-real-and-metric-notions-
agree` covers continuity, uniform continuity, Lipschitz, Hölder and compactness,
but **not closure**. The only item discussing the seam is
`rem-r-native-topology-scope`, which is a forward-dependence seed and barred.
So "ℚ is dense in ℝ" is **not citable topologically**, and three items derived it
instead from `lem-rat-embeds-dense`. Any future page needing topological density
of ℚ hits this. Carried to the rundown.

### Gate state during authoring — measured against a true baseline

A mid-build gate run is meaningless without a baseline, so I took one from the
pre-authoring commit in a detached worktree rather than reasoning about it.

| class | baseline (pre-authoring) | now (4 pairs still in flight) | verdict |
|---|---|---|---|
| `cited-not-in-deps` | 112 | 117 | warning class; **exit 0 at baseline**, so tolerated. All 5 new ones name `frontier-2` items on pages still being written |
| `multi-home` | 22 | 22 | **unchanged — entirely pre-existing**, and all 22 are the same pair: `construction-of-r-via-cauchy-sequences` and `construction-of-r-via-dedekind-cuts` share the integer/rational scaffolding |
| `link-unresolved` | 0 | 13 | the only hard-failing class. **All 7 distinct targets are `compactness` items whose author has not written them yet** — pure in-flight transience |
| exit code | 0 | 1 | expected mid-authoring; the authoritative pass is step 10 |

Of the 5 new `cited-not-in-deps`, three are same-page citations of a *later*
item from a Remark, which is legitimate; two are on `thm-tietze-extension-theorem`
(`def-topological-space`, `lem-geometric-sequence-null` cited in Statement/Facts
but absent from `deps`) and are genuine, minor, and on a page still in flight.
**Re-check all of this at step 10 rather than now.**

**A false finding I nearly recorded.** I first measured "204 published items with
no page home" — a number that would have gone into the rundown as a substantial
gap. It was my own measurement error: I checked the spec's `items[]`, but `kind:
P` placeholder pages carry empty arrays there while their real page files list
items. Re-measured against the page files: **all 1365 published items are homed,
zero orphans.** Recorded because the near-miss is the point — a corpus-wide claim
from the wrong source reads exactly like a finding.

### Step 5 — arm 2 of the authors, and a second self-caught defect

`inclusion-exclusion-and-the-pigeonhole-principle` returned 31 items, all
precheck clean, `rendercheck` clean on 33 files (it also grepped for stray `[[`
digraphs after the warning and found none), and 4 scaffold errors caught:

- `thm-double-counting` does **not** need the double-sum interchange lemma the
  notes assign it — the published `thm-sum-rule` clause 2 already counts a
  pairwise-disjoint family directly. The lemma is genuinely used three times, but
  elsewhere.
- **`lem-finite-set-has-max` cannot supply what Erdős–Szekeres needs**: its
  Statement is about a listed set of **reals**, and the proof needs a greatest
  element of a set of **naturals**. Derived from `thm-well-ordering-principle`
  instead and the dep dropped. This is the mis-citation class caught before it
  was committed.
- `thm-the-erdos-szekeres-bound-is-sharp` does not depend on `thm-erdos-szekeres`
  at all; the construction is self-contained. Dropped.
- It independently hit the `ARCHITECTURE.md` §3.3 trap: its remark inherited a
  sky ↗ marker propagated along one `deps` edge from
  `rem-counting-conventions-and-scope`. Dropping that edge cleared it, and no
  item on the pair now carries the chip.

**And it caught a falsehood of its own making**, which is the habit the brief
asks for: its first draft of `cor-the-derangement-recurrences` claimed the
recurrences *fail* at the excluded indices. Under this library's **truncated**
natural subtraction they do not — at $n=0$ the first reads $1 = 0\cdot 1 + 1$ and
at $n=1$ the second reads $0 = 0\cdot(D_0+D_0)$, both true. The hypotheses are
what the *proofs* need, not where the formulas break, and the item now says so.
The same error had propagated into a Remark and was corrected there too.

### AN ORCHESTRATOR ERROR THAT COST AN OWNER INSTRUCTION ITS AGENT

**I transposed two agent identifiers.** The seven step-5 agents were dispatched
in one batch and I recorded the returned ids against the wrong pairs for
`connectedness` and `compactness`. Consequence: **every Baire instruction — the
owner's explicit mid-build addition — went to the `connectedness` author**, which
verified `plan-spec.json` three times, found all four items homed on
`compactness`, and **correctly refused to write them**, citing its id-set
boundary and the 253→255 page cycle it would create. It escalated the misrouting
as its first report item.

So the owner's instruction sat unassigned for the length of an authoring run. It
has now been re-sent to the correct agent, which is still running.

**Two lessons, recorded rather than smoothed over.**

1. **The boundary rule saved this.** An author willing to write outside its id
   set would have produced the Baire items on the wrong page, created a page
   cycle, and no gate would have caught the *homing* error until `validate-plan`
   failed at step 10 — by which point the compactness author would also have
   written them, giving a duplicate id clash. The refusal is the mechanism
   working exactly as designed.
2. **Verify an agent id against something other than dispatch order.** The
   notification labels are authoritative; my own notes were not. The reconstructed
   map is in the commit message.

**A second instruction was misrouted in the same swap, and there I was also
wrong on the merits.** I told the `compactness` author to *remove* the forward
wikilink on `def-order-topology-on-a-linearly-ordered-set` rather than declare
it, reasoning that declaring it would propagate the sky ↗ chip to every
consequence. The item belongs to `connectedness`, which never got the message and
**declared it instead** — the better call. Checked from disk: the wikilink sits
under `## Remarks`, so it is orientation-only and legal on a definition;
`fwdcheck` reports **OK** overall, and there is exactly **one** inherited marker
in the whole repository, on a pre-existing item unrelated to this build. My
instruction was over-cautious and reached the wrong agent, so the correct outcome
occurred by accident.

### Two more pairs complete, and a spec/disk divergence repaired

`cardinal-arithmetic-and-cofinality` (34 items) and `connectedness` (36 items),
both gate-clean. Between them **11 scaffold errors caught**, of which three are
the fatal title class:

- `thm-konig`'s scaffolded title asserted "the theorem **implies** [AC]" — true of
  the *set* form, not proved for the cardinal form as stated. Retitled; the
  set-form derivation is given in Remarks as the justification for naming AC.
- `thm-tarski-square`'s title asserted an **independence** result needing Con(ZF)
  and Cohen — ‡ material, barred. Retitled to what is proved.
- `ex-aleph-one-is-at-most-the-continuum`'s title asserted "why the inequality is
  all that ZFC decides" — an independence claim an `ex-` cannot establish.
- `thm-cardinal-power-set-and-cantor` was scaffolded **with no choice
  hypothesis** although it writes $2^\kappa$ and $|\mathcal{P}(\kappa)|$, neither
  of which need denote anything in ZF.
- **`cex-components-differ-from-quasicomponents`'s scaffolded witness is simply
  false.** The notes specify a space that is a product of two totally
  disconnected spaces, in which each column is clopen — so the quasicomponent of
  $(0,0)$ cannot contain $(1,0)$ and the space witnesses nothing. Replaced with
  the classical space; id unchanged.
- `def-locally-connected` was scheduled **before** `def-path-connected` while its
  own title needs paths; and its title omitted **open**, which without it names
  *connectedness im kleinen*, a strictly weaker notion for which the following
  theorem is false as stated.

**Spec/disk divergence repaired.** The forced reorder above left
`research/plan-spec.json` disagreeing with the authored page file. Spliced;
`validate-plan` exit 0. (The five `fs-` items appearing in the spec's `items` but
not the page's was a **false alarm** — they sit in `examples:` per house
convention, which I checked before touching anything.)

**Five published items this build falsifies are now staged** in
`research/frontier-2-published-amendments.md`, each verified verbatim on disk,
none applied. They are additional to the seven found earlier, and every one would
become a live falsehood the moment this pair publishes.

### Owner decision, 2026-07-29: the workflow is UNCHANGED

The owner considered merging steps 1–2 with step 5 — a Beta that scaffolds, then
authors, logging logical gaps and amending its own scaffold in a loop — on the
ground that dependency correctness is what mathematical accuracy rests on and the
deriver should be the author.

**The premise is right and now measured.** Across the 143 authored items of this
build (compactness excluded, still running): **88% of scaffolded dep lists were
changed by their author**, 34% churn against scaffolded entries, and the edits
run **375 added against 129 dropped** — the scaffolds were predominantly
*under*-specified, by an average of 2.6 deps per item. A scaffolder cannot know
what a proof needs until the proof is written.

**Decision: stick with the workflow as is.** No change to `LEVELS.md`, the briefs
or the agent hierarchy. Recorded here so a future session does not re-propose it
without new evidence. The measurement above is kept because it is useful on its
own: it is the quantitative case for the standing rule that **the author owns the
dep list and a handed-down list is a hypothesis.**

### The escalation set — and a measurement artifact I will not report as a defect

`touchlog report --min 2` returns **9 items**, which fires trigger 2 of the
escalation rule (refuted or fixed more than once by any subagent → the
orchestrator audits personally).

| repairs | item | page |
|---|---|---|
| 3 | `thm-tietze-extension-theorem` | 267 |
| 2 | `cor-a-compact-hausdorff-space-is-tychonoff` | 267 |
| 2 | `ex-every-closed-subset-of-the-line-is-a-zero-set` | 267 |
| 2 | `fs-every-normal-space-is-completely-regular` | 267 |
| 2 | `lem-a-uniformly-approximable-real-valued-map-is-continuous` | 267 |
| 2 | `thm-a-locally-compact-hausdorff-space-is-completely-regular` | 267 |
| 2 | `cex-tietze-fails-in-a-t1-space-that-is-not-normal` | 267 |
| 2 | `lem-the-oscillating-zigzag-curve` | 253 |
| 2 | `thm-hessenberg` | 247 |

**Seven of nine are the Sonnet arm, and that is almost certainly an artifact of my
snapshot schedule, not a defect signal.** `touchlog` counts hash changes between
snapshots. I snapped at author-completion boundaries, and the Sonnet arm received
**two mid-flight instructions from me** — run `rendercheck`, and audit your dep
list — each of which it executed as a pass over its whole id set. Those edits
were **ordered by me and are not defect repairs**, but the ledger cannot tell the
difference.

This is the mirror of `frontier-1`'s failure, where snapping only twice made
every item look like a first appearance and the instrument was blind. Snapping
more often makes instructed edits look like repairs. **Neither schedule measures
what the rule means**, and the fix is not more snapshots but recording what each
snapshot straddles — which is what the labels now do.

**Disposition.** All nine are carried into the step-9 brief as a named risk list,
which is what the rule requires of the *judge*-refutation trigger. For the repair
trigger I audit personally, and the honest candidate is
**`thm-tietze-extension-theorem`**: highest count, and independently named by its
own author as one of its two least-confident items, with the combinatorial claim
that "every $D_{n+1}$-consecutive pair has a member among the new midpoints"
asserted on a one-line justification rather than a spelled-out induction. That
one gets a personal read regardless of the artifact.

## Progress

- [x] Step 0 — frontier computed from disk, narrowed by owner, batched, seams reported
- [x] Steps 1–2 — Beta-F2-1 and Beta-F2-2 scaffolding: 181 items
- [x] Step 3 — findings adjudicated from disk and logged
- [x] Step 4 — spliced, gates of record green, Alpha-F2 propagation applied
- [ ] Step 4 — spliced into plan-spec.json, Alpha-F2 spawned
- [ ] Step 5 — six A/B pairs authored in parallel, Sonnet pilot assigned
- [ ] Step 9 — Alpha-F2 fanned-out whole-build audit
- [ ] Step 6 — judge sweep, once, on final text
- [ ] Step 7 — rejections adjudicated by the orchestrator
- [ ] Step 10 — scope-denial sweep, gates of record, rundown, PAUSE

## The escalation audit — done personally, and both items are SOUND

Trigger 2 of the escalation rule (repaired more than once) required a personal
audit. Done on the two candidates that matter, against the files on disk.

**`thm-tietze-extension-theorem` — sound.** Checked line by line: $M_n =
r(2/3)^n$ indexed from $n=0$, so step 6.1 is a genuine base case rather than a
special first step; step 6.2's bound $|f_{n+1}| \le 2M_n/3 = M_{n+1}$ is
correct; $\sum_{n \ge 0} M_n/3 = (r/3)\cdot 3 = r$, which is what makes step
10.1's $|F| \le r$ hold and the target land in $[c-r,c+r] = [a,b]$; the
telescoping in 9.2 follows from $G_k = F_k - F_{k+1}$ on $A$; the degenerate
$a=b$ case is separated at step 2.1; and clause 2, the converse, genuinely
spends no choice and says so. **Its DC application at step 8.1 uses the
$\mathbb{N}$-pairing correctly** — the same pattern I had to specify for the
Baire lemma, arrived at independently here.

**The author's own named worry is in `thm-urysohn-lemma`, and it is also
correct.** The claim is that every $D_{n+1}$-consecutive pair has a member among
the newly inserted points. If both members were old they would be consecutive in
$D_n$ as well, hence a $D_n$-gap — but a new point was inserted into every
$D_n$-gap, contradicting consecutiveness in $D_{n+1}$. The one-line
justification the author gave is exactly that argument, and the check takes
about fifteen seconds, well inside the triage rule. **No defect.**

**One real observation, non-fatal.** `thm-urysohn-lemma` and
`thm-tietze-extension-theorem` each re-derive the dependent-choice
$\mathbb{N}$-pairing inline, although `lem-dependent-choice-along-a-sequence-of-
relations` now exists on `compactness` (order 255 < 267, so citable). That is an
artifact of **my** adding the lemma mid-build after 267's author had already
begun, not a failure by the author. Passed to step 9 as a consolidation
question, not a defect.

**Nature of the fault, as the rule requires: none.** No mathematical inaccuracy,
no mis-cited dependency, no unjustified step. Nothing is a candidate for
removal, so the ramification question does not arise.

## Step 5 closed — the gate of record

| gate | result |
|---|---|
| `precheck.mts` | **1195 checked, 0 failing** |
| `depcheck.mjs` | OK, exit 0 — no cycles, all references resolve, no draft on a published page |
| `fwdcheck.mjs` | OK, exit 0 |
| `extcheck.mjs` | OK, exit 0 |
| `rendercheck.mjs` | OK — **1687 files**, every math span parses under real KaTeX |
| `validate-plan.mjs` | OK, exit 0 (`[size]` on `compactness` at 31, owner-authorised) |
| `depsource.mjs` | **0 unresolved** |
| `citecheck.mjs` | 21 warnings, triage class |
| `prosecheck.mjs` | 0 errors; 684 warnings, overwhelmingly mathematical quantifiers |

**182 items, 12 pages, corpus 1416 → 1598.** All `status: draft`, all `origin:
session`. **Zero carry `verification.audited` and zero carry
`verification.judge`** — the judge has not run and `audited` is the owner's field.

---

# STEP 10b — THE RUNDOWN. Paused for the owner.

## What was built

**182 items across 12 pages, corpus 1416 → 1598.** All `status: draft`, all
`origin: session`. **Zero carry `verification.audited`** — that field is the
owner's alone.

| page | items | judged |
|---|---|---|
| `cardinal-arithmetic-and-cofinality` (+examples) | 26 + 8 | 30/34 |
| `connectedness` (+examples) | 28 + 8 | 36/36 |
| `compactness` (+examples) | 31 + 8 | 39/39 |
| `hausdorff-via-the-diagonal` (+examples) | 13 + 8 | 21/21 |
| `urysohn-lemma-and-tietze` (+examples) | 13 + 8 | 21/21 |
| `inclusion-exclusion-and-the-pigeonhole-principle` (+examples) | 21 + 10 | 31/31 |
| **total** | **182** | **178/182 (98%)** |

## The nine gates — final orchestrator pass

| gate | result |
|---|---|
| `precheck.mts` | **1195 checked, 0 failing** |
| `depcheck.mjs` | OK, exit 0 |
| `fwdcheck.mjs` | OK, exit 0 |
| `extcheck.mjs` | OK, exit 0 |
| `rendercheck.mjs` | OK — every math span parses under real KaTeX |
| `validate-plan.mjs` | OK, exit 0 (`[size]` on `compactness` at 31, owner-authorised) |
| `depsource.mjs` | **0 unresolved** |
| `citecheck.mjs` | 21 warnings, triaged |
| `prosecheck.mjs` | 0 errors |

**Judge coverage is corroborated, not asserted.** Every one of the 178 recorded
passes was cross-checked against `research/frontier-2-judge.jsonl` in both
directions. **Fabricated blocks: 0.** Two were found and removed during the
sweep — see below.

## What the owner is accepting if they publish

1. ~~Four items unjudged~~ **RESOLVED: judge coverage is 182/182 (100%)**, every
   pass corroborated against the verdict ledger, **0 fabricated**, 0 open
   rejections.
2. ~~Step 10a partial~~ **RESOLVED: step 10a is COMPLETE**, with a method
   validated before use — and it exposed a defect in the process itself. **The
   recall test `LEVELS.md` prescribes is stale**: both sentences it names were
   repaired at level 9, so they no longer exist and the test cannot be run as
   written. A live substitute of the same shape (`rem-choice-ledger` line 97,
   "this library neither proves nor records") was used and the net was validated
   against it first. Net new decayed claims: **zero** beyond those already staged.
3. **Thirteen amendments to published items are staged and unapplied**
   (`research/frontier-2-published-amendments.md`). Each becomes a live falsehood
   the moment this build publishes.
4. **Coverage asymmetry at step 9**, stated as Alpha gave it: every item was read
   in full by at least one attestable reader, but `connectedness`'s tail was read
   by Alpha itself after its assigned reader failed, and `hausdorff-via-the-diagonal`
   and `urysohn-lemma-and-tietze` have **one** full independent read rather than two.

## What this build found that no gate could

**Three invalid proof steps — breaking a seven-build streak** in which every
defect was in prose and none in a numbered step. The long line defined as two
*open* rays (a gap, hence disconnected); a Hausdorff separation using two
**non-disjoint** rays; a vacuous case analysis resting on a false intermediate
claim. I do not think authoring got worse: this is the first build whose step-9
readers were told to read *every numbered step*, and the streak was probably a
detection artifact.

**Six judge rejections, all six real** — against a documented historical
precision of 21–24%. **The sixth was nearly lost.** Duplicate sweeps judged it
twice and the second run PASSED the same text, washing the rejection away; a pass
block was recorded and it was only found by grouping the ledger by id and looking
for items whose verdicts disagree. `[L6]` asserted that the canonical embedding
$\iota$ is injective, citing `def-canonical-natural` — which states in terms that
"injectivity is a lemma rather than part of the definition" and names
`lem-of-naturals-positive`, an item the file cited zero times. Re-cited and
re-judged clean, with the judge confirming the derivation explicitly.

**Five of the 182 items received contradictory verdicts on identical text.** That
is the number to carry forward: a single judge verdict, pass or reject, is one
sample from a distribution, not a measurement. All five were the same class: **the mathematics is correct
and the licensing citation is wrong.** The sharpest used the *ambient* reading of
compactness while `def-compact-space` states that no item may do so without
citing `lem-compactness-of-a-subspace-is-ambient` — which it cited zero times.
The library caught a violation of a rule it wrote for itself.

**Three scaffolded witnesses were mathematically false**, each caught only by an
author deriving from it: a "counterexample" collapsing a *compact* set (which
preserves local compactness, so it refuted nothing); a quasicomponent witness
that was a product of totally disconnected spaces; a cofinite/cocountable claim
false on countable sets.

**Judge self-agreement is not 1.** Duplicate sweeps judged two items twice and
returned **pass then reject on identical text**. A pass block from the earlier run
masked the rejection until the two-way reconciliation caught it. That reconciliation
is only possible because `JUDGE_VERDICTLOG` is set on every call.

## Orchestrator errors, recorded because they shape what to trust

1. **I transposed two agent ids**, so the owner's Baire instruction went to the
   wrong author. It refused on boundary grounds and escalated — the rule working.
2. **I reported a reader's verbatim quote as fabricated. It was not.** I read the
   working tree after Alpha had repaired the file, while the pre-repair state sat
   in git. The long line genuinely was disconnected as authored.
3. **I raised a 5× judge-concurrency breach that did not exist.** `ps | grep -c`
   overcounts 4×, which `ARCHITECTURE.md` documents and warns has misled two
   readers before me. The real figure was exactly at cap; acting would have killed
   a healthy sweep.
4. **I let two sweeps race**, costing 34 duplicate paid judgements — though that
   is also how the contradictory-verdict finding surfaced.
5. **I supplied a 14-entry dep list I had not derived**, and a title naming a
   definition that did not exist.

All five were caught by verifying rather than by any gate.

## Sonnet 5 pilot — do not switch

Both arms, 21 items each, same scaffolder, blinded. **Sonnet used 1.9× the tokens
and 1.5× the wall clock**, caught **0** scaffold errors against Opus's 5 — and
produced **zero** invalid proof steps, where Opus produced three. Its weakness is
the apparatus (titles, citations, contract conformance), not the mathematics. The
cost result alone defeats the premise that motivated the pilot.

## Not done (as of the original PAUSE)

- The four unjudged items.
- A proper step-10a sweep with its recall test.
- Applying the thirteen staged amendments (publish-commit only).

**All three were completed in a later session and are recorded above and in
`frontier-2-published-amendments.md` — the four items were judged and step 10a
found 5 more staged amendments (13 -> 18) — see the PUBLISHED note below.**

## PUBLISHED — 2026-07-29, owner-delegated (content commit `203d2eb`)

The owner instructed "Fix those and publish. No need to ask for approval" (a
rendering-bug report, then a bare "publish" after interrupting a redundant
page-verifier fan-out). Per SCHEMA.md's precedent for delegated publication,
`verification.verified` with `delegated_by: owner` stands as the gate here, not
`audited` (the owner's own field, never fabricated).

**What actually verified this build**, so a future session can judge whether
that basis was sound: the step-9 Alpha-F2 whole-build audit (Fable 5, 30+ fatal
repairs, commit `3626f90`) already covered all 182 items; the judge is
182/182 with 0 fabricated blocks and 0 open rejections; step 10a's scope-denial
sweep is complete. Two of the six pairs — `cardinal-arithmetic-and-cofinality`
and `compactness` — additionally received an independent Opus page-verifier
re-read (73/73 CERTIFY, 0 WITHHOLD) that ran to completion despite being
interrupted mid-fan-out; it found a corrupted `precheck`/judge-date field on
four items (`def-baire-space`, `def-compactness-variants`,
`def-locally-compact-space`, `def-one-point-compactification` — a botched
sed had moved `/a` from `precheck: n/a` onto the judge date), fixed in the
publish commit. The other four pairs rest on the step-9 audit alone; no
independent page-verifier read them.

**The 18 staged amendments** (`frontier-2-published-amendments.md`, sections
A/B/B2/D — 13 grew to 18 once B2's four `fs-` title fixes and step 10a's D1/D2
were folded in) were applied in the same commit, each re-verified against disk
before restamping `verified`. One amendment pass (the three CH/GCH remarks
citing forward into `cardinal-arithmetic-and-cofinality`) closed a
forward-reference cycle through `def-cardinal-arithmetic`'s pre-existing
backward dependency on `rem-ordinal-versus-cardinal-exponentiation`; resolved
by stating the results in prose instead of as wikilinked forward references,
since none of those citations were load-bearing.

All nine gates green at publish. App-repo rendering fixes (the `\lvert`/`\rvert`
gap and the unnamed-inherited-‡-premises bug the owner reported) shipped
separately, commit `37dc065`.
