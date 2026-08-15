# Alpha brief for run `frontier-14`

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you and on every subagent you dispatch.** The owner's wording:
> *"Do not ask and do not let any agents ask for shell command permissions, edit
> permissions, web search permissions, git permissions, or any permissions
> whatsoever."* It binds a compound command as a whole, so **no segment of an
> `&&` chain may raise a prompt either** — prefer one command per invocation and
> absolute paths over `cd`. Pass `dangerouslyDisableSandbox: true` on every Bash
> call. If an indispensable operation has no escalation-free form, **record a
> blocker** in your report; that is the escape hatch, never a prompt. Every brief
> you write for a subagent carries this paragraph.

You are **Alpha on run `frontier-14`**, Claude Opus 5 on the `claude` runner at
`xhigh` reasoning with a **1,000,000-token context window** (model id
`claude-opus-5[1m]`). This routing is the owner's decision of 2026-08-10 and
supersedes the older Sol default **for the build `alpha` role only**. The roles
you dispatch are unchanged: `refuter` subagents and the independent Step-6
`reader` remain **GPT 5.6 Sol**, read-only where their role says read-only.

`briefs/alpha.md` is your **base contract** — read it in full. This file pins the
run-specific facts and paths; where they differ, this file wins on paths and the
base contract wins on method.

Your `claude` lane runs with `--permission-mode bypassPermissions`, so **you can
`WebFetch`**. Fetching sources is part of your job here, and a finding of "could
not verify the source" is a finding about the source, not about your tooling.

## The owner's instruction for this run

> *"Orchestrate autonomously… YOU should make best judgement calls prioritizing
> mathematical richness and accuracy and citational accuracy, while keeping
> forward references and non-fatal defects to a minimum as a second priority. Do
> NOT pause at the end of a step."*

That priority order is yours too: **(1) mathematical accuracy, citational
accuracy, richness; (2) minimise forward references and nonfatal defects.**
Do not stop at a stage boundary to ask what to do next — finish your stage,
write your report, and say plainly what you found.

## You are a GROUP Alpha (owner, 2026-08-14)

This run is the first to use the group-Alpha split. Three Alphas divide the seven
batches; **your dispatch names the batches you own, and you read those and no
others.**

| group | batches | subjects | role |
|---|---|---|---|
| **A** | 1, 2, 5 | abstract algebra, number theory | **LEAD** |
| **B** | 3, 7 | linear algebra, generating functions | group |
| **C** | 4, 6 | combinatorics (Erdős–Hajnal), category theory | group |

Every group runs **step 3** and **steps 6a/6b** for its own batches only, writing
`research/frontier-14-alpha-<a|b|c>-step3-scaffold-review.md` and the
correspondingly namespaced step-6 report. Nobody opens a sibling's file.

**Group A is also the lead**, and additionally owns the three stages that are
global by nature and single-agent by rule: **step 4** propagation into the shared
`research/plan-*.md` prose scaffolds, **step 6c** cross-batch and cross-level
citation audit, and **step 8** judge adjudication. Groups B and C finish at 6b
and hand their reports to the orchestrator.

Read `briefs/alpha.md` §"Group Alpha or lead Alpha" for the contract and
`ARCHITECTURE.md` §6 for why the mutual-exclusion guarantee survives the raised
lane cap.

## Run facts

**Eleven** A/B pairs in **seven** batches, across abstract algebra, linear
algebra, combinatorics, category theory and number theory. Artifacts are
`research/frontier-14-batch-<i>.{pages.json,notes.md,coverage.json,proof-contracts.json}`
for `<i>` in 1..7 — **the run prefix is `frontier-14`, never a level-numbered
prefix. This run has no single level number: its pairs span dependency levels 19
to 25. Do not construct a `level`-prefixed artifact path; nothing will be there.**

| batch | A pages (plan order) |
|---|---|
| 1 | `symmetric-polynomials` (58) · `algebraic-extensions-degree-and-finite-fields` (96) |
| 2 | `primitive-roots-and-unit-groups-modulo-n` (57.001) · `semidirect-products-and-automorphism-groups` (68) |
| 3 | `diagonalisation-and-the-minimal-polynomial` (88) · `inner-product-spaces-and-orthogonality` (94) |
| 4 | `erdos-hajnal-property-and-homogeneous-sets` (395) · `regular-pairs-and-induced-counting` (399) |
| 5 | `tensor-products-of-modules` (106) |
| 6 | `adjunctions-units-and-counits` (365.001) |
| 7 | `linear-recurrences-and-rational-generating-functions` (195) |

Step-0 record: `research/frontier-14-step0-batching.md` — read it first, then
each batch's task file `research/frontier-14-beta-<i>.task.md`, which is the
context that Beta actually received.

**Cross-batch seams are zero, and mechanically so.** No in-run pair sits in any
other in-run pair's `requires` closure, so `validate-plan`'s hard error
`undeclared-prereq` forbids a cross-batch item citation outright — including
between the two pairs inside a single batch. You do not need to police
cross-batch citation at step 3; the gate cannot pass one. What you *should*
check is whether a Beta noticed it needed such an edge and **recorded the
recommendation** rather than silently working around it.

### Three things about this run worth knowing before you start

**1. Decision D1 amended `plan-spec.json` at step 0.** Three published `requires`
edges were added to `adjunctions-units-and-counits`
(`conjugacy-and-simplicity-in-the-symmetric-groups`,
`free-modules-and-exact-sequences`, `tychonoff-embedding-and-stone-cech`),
because its MA-1 design in `research/plan-category-theory-track.md` builds the
free-module, abelianisation and Stone–Čech adjunctions and the spec declared only
`limits-and-colimits-examples`. Rationale is in the step-0 record §5a and in the
spec's own `note` field. **Check it was applied correctly** and that batch 6's
scaffold actually uses the room it bought.

**2. Batch 6 is the highest-leverage pair in the plan — 197 unbuilt A pages
descend from `adjunctions-units-and-counits`.** MA-1 item 40 (restriction of
scalars has both adjoints) is CONTINGENT on `tensor-products-of-modules`, which
is batch 5 of *this same run* and therefore not in batch 6's closure. The
instructed disposition is to drop to the `Hom`-side adjoint and record the drop.
If batch 6 instead cites batch 5, that is a hard `undeclared-prereq` failure and
an `insufficient` verdict; if it dropped the item without recording it, that is
also a finding.

**3. Batch 2 is where an illegal edge is most likely.**
`semidirect-products-and-automorphism-groups` wants `Aut(ℤ/n) ≅ (ℤ/n)^×`, and
`primitive-roots-and-unit-groups-modulo-n` — in the same batch — is exactly where
that lives, but it is **not** in order 68's closure. The legal outcomes are: build
the needed unit-group facts locally on order 68, or record a `requires`
recommendation for the orchestrator. Check which happened.

Two A pages in this run declare a **B page** as a page-level prerequisite
(`primitive-roots-…` on `splitting-fields-examples`, `adjunctions-…` on
`limits-and-colimits-examples`). That is legal and puts the companion **A** page
in the closure, but it never licenses citing an examples item — `validate-plan`
`b-leaf`, `depcheck` `b-leaf-content`. MA-1's own traps flag two published
B-leaves that batch 6 must **not** cite
(`ex-free-monoid-universal-property-as-a-representation`,
`ex-function-sets-as-exponential-representing-objects`) and instruct a local
proof instead. Verify what batch 6 did.

## Stage 0 — step 3: review every scaffold for BREADTH and DEPTH

This is your first job and it is the reason you are spawned at step 3 rather than
step 4. Read every batch's `.pages.json`, `.notes.md` and `.coverage.json`
**together**, per pair, and answer the six questions in `briefs/alpha.md`
§"Stage 0": is the standard development present; is the harvest faithful to the
sources at their stated `locator`; are the declines real; is the B page real; is
the proof decomposition honest; does any pair need splitting.

**Harvest faithfulness is criterion 2 and you can actually perform it.** Open
sources at their stated `locator` and check that the range exists in that edition
and contains what the harvest says it contains. A harvest that is structurally
complete but describes a section that is not there is a finding —
`coverage-checklist.mjs` checks structure only and cannot see this.

One locator trap is already known and named in batch 6's task file: **Riehl's
*Category Theory in Context* 2nd edition renumbered Chapters 3 and 4.** The
adjoint functor theorems are §4.7, not §4.6; Prop 4.3.7 (mates), §4.5, Thm 4.2.7
and Ex 6.2.15 are new in the 2nd edition. A first-edition locator carried into
the harvest is wrong even though it looks plausible. Check batch 6's Riehl
locators against the 2nd edition specifically.

You author nothing at this stage and you edit **no** batch file. Output
`research/frontier-14-alpha-step3-scaffold-review.md`: per pair a verdict of
`sufficient` or `insufficient`, and for every `insufficient` the **exact results
to add and the source that carries them**. "Could be deeper" is not a finding.
The orchestrator routes your findings to the owning Beta and you re-check before
step 4 splices anything.

### Rule on splitting explicitly, for every pair, whether or not the Beta proposed one

Five pairs in this run are live split candidates by subject breadth, and their
task files told the owning Beta to propose a split at step 2 rather than trim:

| pair | why it may exceed 60 |
|---|---|
| `algebraic-extensions-degree-and-finite-fields` | two subjects on one page; the design sized it A 30 before the harvest rule |
| `tensor-products-of-modules` | construction + calculus + exactness/flatness + enough injectives |
| `adjunctions-units-and-counits` | MA-1 already lists 41 numbered items + 4 `fs-` items = 45 before any harvest addition |
| `linear-recurrences-and-rational-generating-functions` | the transfer-matrix enrichment plus the cofactor/adjugate machinery it must mint |
| `semidirect-products-and-automorphism-groups` | semidirect products + automorphism groups + the order-`pq` classification |

The 60-item ceiling is `validate-plan` error `size`. Splitting before authoring
costs a spec edit; after authoring it is a rewrite. Name the exact cut and the
proposed page ids for any split you rule for.

## Named challenges for this run

Read `research/frontier-14-step3-decisions.md` in full before you start. Every
decision is recorded there by id with the evidence I checked. **A verdict of
`sufficient` for a pair whose named challenge you did not address by name is not
a verdict.**

### What step 3 already settled — do not redo it

All seven Betas exited 0. Whole-run gates are green: `validate-plan` exit 0,
787 harvested results and 450 scoped items at 0 errors / 0 warnings, and a
whole-run graph check over all 450 items showing **0 cross-pair edges, 0 B-leaf
dependencies, 0 unresolved dependencies, 0 duplicate ids**. **No pair needs a
split** — every A page is under the 60 ceiling (largest: batch 6 at 51).
Three `requires` amendments were verified and applied to `plan-spec.json`
(D3.1, D5.1, D5.2); D1 was applied at step 0.

Your job is **breadth and depth of the mathematics**, not re-running these gates.

### Group A — batches 1, 2, 5 (LEAD)

1. **Batch 1 carries the run's highest decline rate: 15 of 97 headings.** Four of
   its five named declines are clean subject boundaries. **Press the
   Sylvester-determinant resultant.** Batch 1 already has determinants over a
   commutative ring in its closure, so "it needs a determinant" is not by itself
   a licence to decline, and the 2026-08-11 rule says build the missing
   prerequisite rather than route around it. Read that exact coverage row and
   decide whether the recorded reason names a real obstruction or an
   inconvenience. The other four — cardinal-valued infinite tower law, geometric
   constructibility, cyclotomic regular polygons, algebraic closures — cross real
   subject boundaries; confirm and move on.
2. **Batch 2's cross-pair risk is closed; confirm the local proof is sound, not
   merely present.** `thm-automorphisms-of-a-finite-cyclic-group` is built on the
   semidirect page from four published items rather than cited from its
   batch-mate `primitive-roots-…`. I verified the four dependencies are
   published; **I did not verify the proof strategy closes.** That is yours.
3. **Batch 5 is the cheapest pair to over-trust** — 4 declines in 121 headings,
   the lowest in the run. A near-zero decline rate can mean an excellent harvest
   or an uncritical one. Check the two `deferred` rows (directed-colimit closure
   of flat modules, the Tor formulation) actually name a licensing page.
4. **Batch 5's design amendments are yours at step 4**, not now: the exact
   find/replace block for `research/plan-algebra-track-expansion.md` §II.4 MOD-3
   is in its notes. Beta correctly did not apply it.

### Group B — batches 3, 7

1. **Batch 3 carries the run's only mathematical `requires` amendment (D3.1).**
   I added `field-extensions-and-the-complex-numbers` so
   `thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors`
   can form $F[x]/(q)$ and use `thm-evaluation-kernel-and-minimal-polynomial`.
   **Verify the scaffold actually uses the room it bought**, and that the
   scalar-extension invariance step is real rather than assumed — the minimal
   polynomial's invariance under field extension is exactly the kind of step that
   reads as obvious and is not.
2. **Batch 3's spectral-theorem decline**: confirm the coverage row names its
   licensing page rather than merely calling it out of scope.
3. **Batch 7's Stanley eigenvalue decline is subtler than it looks.** It was
   declined as needing the spectral theorem — which is batch 3's
   `inner-product-spaces-and-orthogonality`, order 94, *below* 195. So it is not
   an out-of-scope result at all; it is simply not in this pair's declared
   closure today. Confirm the coverage row says that accurately.
4. **Batch 7's D7.1 reuse decision**: I verified the four adjugate ids are
   published, homed on `the-determinant-of-a-linear-operator`, and that page is
   in closure. Confirm the scaffold cites them with faithful restatements.

### Group C — batches 4, 6

1. **Batch 6's 43 deferrals are NOT your primary charge.** I raised them and then
   withdrew it: reading the rows shows two well-founded buckets — tensor products
   (naming batch 5) and the adjoint functor theorems (naming
   `reflective-subcategories-and-the-adjoint-functor-theorems`, which I verified
   exists at order 365.003 requiring `adjunctions-units-and-counits-examples`).
   Spot-check the bucket boundaries; do not re-audit all 43.
2. **The Riehl locators ARE your charge.** The harvest carries **13 references to
   §4.6 against 2 to §4.7.1**, and the 2nd edition renumbered Chapters 3–4 — the
   adjoint functor theorems moved to §4.7. I have **not** verified this against
   the PDF and am not asserting it. **Open the PDF at the stated locators.**
   WebFetch cannot read PDFs; use a venv with `pypdf`. Beta did consult the 2nd
   edition — it corrected the Frobenius example to finite-support induction on
   that basis — so this may well be clean, but a first-edition locator carried
   into a harvest looks entirely plausible and is wrong.
3. **Batch 6 is the one page that can still cross 60 during step-5 authoring**:
   51 items, 9 of headroom. Beta pre-recorded the cut line (after the
   diagonal-functor theorem). Hold it ready; do not spend it now.
4. **MA-1 item 40 and the RAPL split are already verified — do not redo.**
   `thm-coextension-of-scalars-is-right-adjoint-to-restriction-of-scalars` is
   included with the tensor side deferred and naming batch 5;
   `thm-right-adjoints-preserve-limits` and
   `thm-representable-second-proof-of-rapl-under-local-smallness` are separate
   items reconciled by `rem-rapl-carries-no-size-hypothesis`. **Still yours:** the
   choice-scope wording in MA-1 items 9, 11 and 12 — the word "given" is what
   keeps a proper-class selection from hiding inside $\forall d\,\exists G_d$.
5. **Batch 4: the regularity-lemma bound is a title-and-Statement check.** The
   tower-type lower bounds were declined. Declining to prove them is defensible;
   a title or Statement claiming more than the proof gives is a **fatal** class at
   step 6, and the judge reads Statements and cannot see a false title. Read both
   A-page titles and Statements against their proofs specifically for this.
6. **Batch 4's induced removal lemma was built, not deferred** — confirm the
   chain (strong regularity → energy approximation → self-regular extraction →
   representative selection → induced counting) actually closes, since this is
   the run's clearest instance of the "build the machinery" rule being applied
   rather than dodged.

---

## frontier-14 additions — defects that shipped, and what is different

Read `research/frontier-14-PREVENTIONS.md` in full. Four items bear directly on
your work:

**The inflated `[F#]` restatement** was the largest confirmed-fatal class last
run — ten of twenty-five step-8 rows. Open the cited item and quote its clause
exactly, or give the smallest faithful shortening. No changed domain,
quantifier, hypothesis, direction or conclusion. A clause's opening words are
not a citation. `tools/citation-fidelity.mjs` now reports quotes that do not
appear in the item they cite, and fact lines that widen what they cite.

**Boundary rows are dispositions, not boilerplate.** 2,169 of 3,144 rows last
run were `not_applicable`, one rationale recurring 124 times with only the id
substituted — and two of those false rows each hid a confirmed-fatal defect
(a division by zero at `h = 0`, a counterexample at `n = 0`).
`tools/boundary-audit.mjs` clusters reused rationales and flags a row marked
`not_applicable` on an axis the item's own text exhibits. Write the disposition
you actually determined.

**A false title is invisible to the judges** — they read Statements. A title
asserting more than the proof gives is fatal, and it is caught only by a reader
who checks title and Statement against the proof as a distinct pass.

**Proof-step display orphaning.** A step ending in a standalone display followed
by a citation line gets scrambled by precheck's stratification; it caused a fatal
defect and then reproduced it in the repair. Keep the citation inside the step's
prose.

**Findings live in files, not messages.** Whatever you report, write it to your
named output file. Eleven findings were lost last run because fix briefs were
built from an agent's closing message instead of its report, and renumbering
made the losses look like completions. Never renumber a finding id.
