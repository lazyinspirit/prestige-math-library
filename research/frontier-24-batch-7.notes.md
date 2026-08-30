# frontier-24 · Beta-7 · batch notes — `the-diagram-lemmas-in-an-abelian-category`

Run `frontier-24`, batch `7`, one A/B pair, category `category-theory`.
Author: Beta-7. Session date: Saturday, August 29, 2026.

Artifacts owned by this batch:

- `research/frontier-24-batch-7.pages.json`
- `research/frontier-24-batch-7.coverage.json`
- this file

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Control files and active-run check

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated task
file `research/frontier-24-beta-7.task.md`, the dispatch prompt
`research/frontier-24-dispatch/beta-batch-7.prompt.md`, and the cited design
anchors in `research/plan-category-theory-track.md`.

I also attempted the live autopilot status command recorded in `README.md`:

- `node --import tsx tools/autopilot/bin/autopilot.mts status --repo .`

In this runner that failed immediately with `ERR_MODULE_NOT_FOUND` for `tsx`,
so there is no shell-side recomputed status receipt in these notes. I therefore
treated the on-disk batch skeleton and `.autopilot/` presence as the durable
state and proceeded without touching workflow files.

---

## 2. Controlling design and design/spec drift

### Controlling design material

The dispatch cites two locations in the same track file:

- `research/plan-category-theory-track.md:2212`
- `research/plan-category-theory-track.md:2308`

I treated the later `MA-11` block beginning at line `2212` as the controlling
design. The `2308` match is its B-page subsection, not a rival page design.
This means the controlling instructions are the ones that say:

- snake before four before five
- the connecting morphism is built arrow-theoretically
- naturality of the connecting morphism is a library-written proof obligation
- the published module lemmas are cited as instances and not reproved

### Design/spec drift

The page-level `requires` field disagrees between design and live spec, and I
recorded the disagreement without adjudicating it.

- The design block lists `exactness-and-the-member-calculus`,
  `abelian-categories`, and `free-modules-and-exact-sequences`.
- The live `research/plan-spec.json` entry and the seed batch manifest use only
  `exactness-and-the-member-calculus-examples`.

Per the dispatch, I kept the spec value in the batch manifest. This is the same
disagreement already recorded as `VERDICT: no-drift` for this page in
`research/frontier-24-alpha-step0-drift.md`: the closure already contains the
design pages even though the direct spec edge lands on the `-examples`
companion.

The order agrees: both design and spec place the A page at `365.021` and the B
page at `365.022`.

---

## 3. Scaffold shape and dependency repairs

The scaffold now has:

- `the-diagram-lemmas-in-an-abelian-category` (A): **35 items**
- `the-diagram-lemmas-in-an-abelian-category-examples` (B): **8 items**

The A page is well below the 60-item split threshold, so no split is proposed.

I kept the page's designed scope and traps, but I made two intra-page ordering
repairs because the design prose itself described dependencies that contradicted
its own numbered order.

### Repair 1: sharp five before classical five

The design says item `16` is the reusable sharp version and that item `15` is
its corollary, but the printed list places `15` first. I repaired the manifest
order so the sharp five lemma comes before the classical five lemma. This is a
dependency repair, not a scope change.

### Repair 2: half nine before full nine

The design says item `19` is the left-exact half from which item `18` is
obtained by adjoining its dual, but the printed list places `18` first. I again
repaired the manifest order so the half nine lemma appears before the full nine
lemma.

Other design decisions preserved exactly:

- the snake lemma is the page's engine, and the four/five lemmas are downstream
  of it
- exactness at `ker(h)` is the one place where the subtraction-surrogate rule is
  spent
- naturality of the connecting morphism stays a library-written proof
- no forward references are used
- the B page keeps the published-module instance examples and the explicit
  kernel-row failure counterexample

---

## 4. Source set actually recorded

I recorded four sources in `research/frontier-24-batch-7.coverage.json`:

1. `https://math.mit.edu/~hrm/palestine/maclane-categories.pdf`
2. `https://stacks.math.columbia.edu/tag/00ZX`
3. `https://djvu.online/file/WrPctxOTQCdBj`
4. `https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf`

This satisfies the standing source rule:

- two independent treatments
- at least one textbook
- at least one lecture-note set with a harvestable contents list

### What each recorded source is doing

- Mac Lane `CWM` is the primary source for the short five lemma, the classical
  five lemma, the arrow-theoretic connecting morphism, the snake lemma, the
  naturality exercise, and the three `3 x 3` exercises.
- Stacks `00ZX` gives the sharp snake statement, the omitted naturality
  statement, the four lemma, and the sharp five lemma in the exact tagged form
  this page cites.
- Weibel `1.3` supplies the exercise-form `3 x 3` variants, the sharp mono/epi
  form of the five lemma, and the explicit embedding-theorem route that the
  page's closing false statement rejects as the library's method.
- Mehrle/Johnstone provides the independent lecture-note cross-check on the
  snake and five lemma package, with a harvestable table of contents.

### Design-named sources not copied into the coverage ledger

The design also names Mac Lane *Homology*, Freyd *Abelian Categories*, and
Rotman. I read the design's instructions about those sources and used them to
shape the canonical scaffold, but I did not record them as coverage-ledger
sources in this dispatch because I could not produce an honest full-text
fetch-verified same-text URL for them in this runner.

That omission did **not** narrow the mathematical scaffold:

- the Freyd- and Homology-owned results remain in the manifest as canonical
  obligations, not dropped results
- the notes below record that as a known source-side limit for step 5

---

## 5. URL verification and source handling

### What I re-opened on Saturday, August 29, 2026

I re-opened the active source texts in the web reader on Saturday, August 29,
2026:

- Mac Lane via the accessible HTML mirror for the exact `VIII.4` lines,
  together with the existing exact-url MIT PDF receipt
- Stacks `00ZX` directly, through Lemmas `12.5.17` to `12.5.20`
- Weibel `1.3` directly on the djvu text view, through Exercise `1.3.3` and
  Proposition `1.3.4`
- Mehrle directly as an 80-page PDF, including the contents and Chapter `7`
  lemma range

### Receipt handling

- For Mac Lane, Stacks, and Mehrle I reused exact-url `fetch_verified` stamps
  already present elsewhere in the repository for those same URLs. I did not
  fabricate new byte hashes.
- For the Weibel djvu URL there was no existing exact-url repo stamp and the
  runner cannot perform shell-side network fetches (`ENOTFOUND` on both Stacks
  and Cornell test fetches). I therefore recorded a minimal manual
  `fetch_verified` block that says only what I actually verified in the web
  reader: that the full HTML text is reader-visible at that URL on this date.

This is enough for the local `source-fetch-check` gate, which checks for a
durable fetch-verification block, but it is still a known limitation compared
to a normal byte-and-hash shell stamp.

---

## 6. Coverage shape

The coverage ledger deliberately splits work between harvested source rows and
canonical scaffold rows.

- Source-row coverage carries the named source results that are explicitly
  present in the texts I re-opened.
- Canonical coverage carries the standard page obligations that the library must
  still author even when they do not sit under one single named source heading
  or when the design's original printed source could not be cleanly fetched in
  this runner.

In particular:

- the Freyd/Homology cluster (`half nine`, `nine`, `sharp nine`, `symmetric
  nine`, `splitting from nine`, `Noether from nine`, and the pullback/pushout
  packaging) is kept canonically rather than deleted or falsely attributed
- the B-page examples are also named canonically so the batch manifest and
  coverage remain aligned

---

## 7. Validation checklist

I ran the scaffold-stage checks that are meaningful inside batch ownership:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-24-batch-7.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-7.coverage.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/validate-plan.mjs /tmp/frontier-24-batch-7-spliced-plan.json
git diff --check
```

The temporary spliced plan was created by replacing the empty `frontier-24`
batch-7 entries inside `research/plan-spec.json` with the new manifest entries
from `research/frontier-24-batch-7.pages.json`.

---

## 8. Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-24-batch-7.coverage.json`
  passed on Saturday, August 29, 2026: `1` page, `62` harvested results,
  `0` errors, `0` warnings.

- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
  passed on Saturday, August 29, 2026: `450` scoped items, `0` errors,
  `0` warnings.

## Step-5 authoring

On Saturday, August 29, 2026, I authored both owned page files:

- `library/category-theory/the-diagram-lemmas-in-an-abelian-category.md`
- `library/category-theory/the-diagram-lemmas-in-an-abelian-category-examples.md`

I also authored all 43 owned item files and the required batch contract
artifact `research/frontier-24-batch-7.proof-contracts.json`.

### Authored ids

- A page `the-diagram-lemmas-in-an-abelian-category`:
  `thm-short-five-lemma-in-an-abelian-category`,
  `cor-a-morphism-of-short-exact-sequences-with-invertible-outer-maps-is-invertible`,
  `thm-short-five-lemma-by-pullback-without-members`,
  `def-snake-data`,
  `thm-the-connecting-morphism-exists-and-is-unique`,
  `rem-the-connecting-morphism-depends-on-no-choices`,
  `thm-snake-lemma-in-an-abelian-category`,
  `thm-snake-lemma-under-the-weaker-stacks-hypotheses`,
  `def-the-arrow-category-of-an-abelian-category`,
  `thm-naturality-of-the-connecting-morphism`,
  `cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake`,
  `thm-four-lemma-in-an-abelian-category`,
  `thm-weak-four-lemma-with-the-exactness-hypotheses-named`,
  `rem-the-two-halves-of-the-four-lemma-are-mutually-dual`,
  `thm-sharp-five-lemma-in-an-abelian-category`,
  `thm-five-lemma-in-an-abelian-category`,
  `rem-why-the-five-lemma-asks-for-isomorphisms-in-the-middle`,
  `lem-half-nine-lemma`,
  `thm-nine-lemma-in-an-abelian-category`,
  `thm-nine-lemma-variants-by-which-rows-are-assumed-exact`,
  `rem-why-the-middle-nine-lemma-needs-a-zero-composite`,
  `thm-sharp-nine-lemma`,
  `thm-symmetric-nine-lemma`,
  `thm-the-nine-lemma-follows-from-the-snake-lemma`,
  `thm-the-splitting-lemma-follows-from-the-nine-lemma`,
  `thm-noether-isomorphism-theorems-recovered-from-the-nine-lemma`,
  `thm-the-pullback-and-pushout-theorems`,
  `thm-the-diagram-lemmas-hold-in-the-opposite-category`,
  `thm-an-exact-functor-transports-every-diagram-lemma`,
  `thm-five-lemma-for-a-morphism-of-long-exact-sequences`,
  `fs-the-connecting-morphism-depends-on-the-choices-made-in-its-construction`,
  `fs-the-five-lemma-needs-only-that-the-two-middle-maps-are-monic`,
  `fs-the-middle-nine-lemma-holds-without-assuming-the-composite-is-zero`,
  `fs-the-snake-lemma-is-just-a-pair-of-short-exact-kernel-and-cokernel-rows`,
  `fs-the-diagram-lemmas-in-an-abelian-category-follow-from-the-module-case-by-the-embedding-theorem`.

- B page `the-diagram-lemmas-in-an-abelian-category-examples`:
  `ex-the-published-module-five-lemma-as-an-instance`,
  `ex-the-published-module-snake-lemma-as-an-instance`,
  `ex-the-published-module-four-lemma-as-an-instance`,
  `ex-the-connecting-morphism-computed-for-a-short-exact-sequence-of-abelian-groups`,
  `ex-the-snake-lemma-applied-to-multiplication-by-an-integer`,
  `ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups`,
  `cex-a-snake-configuration-whose-kernel-row-is-not-short-exact`,
  `ex-the-short-five-lemma-chased-with-members`.

### Provenance rationale

- I kept the classical source-stated lemmas and their direct categorical
  variants as `provenance.statement: literature-derived`; this includes the
  short five lemma, the connecting morphism, the snake lemma, the four/five
  lemmas, the nine lemma, and the module-instance examples.
- I tagged the page-local packaging statements, route summaries, remarks, and
  false statements as `ai-altered` when the library wording is a deliberate
  reformulation of the sourced material rather than a verbatim imported claim.
- I used `ai-generated` only on the non-load-bearing B-page examples and the
  B-page counterexample, with the required `generation.role` fields present.
  No `ai-generated` statement is a dependency target.

### Narrowed or dropped claims

- No planned batch-7 item id was dropped.
- No page was split.
- I kept `thm-noether-isomorphism-theorems-recovered-from-the-nine-lemma` and
  `thm-the-pullback-and-pushout-theorems` as route-packaging theorems rather
  than restating already-published results under new ids; this preserves the
  scaffold claim while keeping the earlier published interfaces canonical.

### Contract and proof notes

- The connecting-morphism naturality item was written as a local proof
  obligation, using the arrow-category route recorded in MA-11. No source proof
  was imported or implied.
- The snake-lemma proof contract was generated from the final on-disk proof
  steps after removing one unused endpoint-hypothesis fact row, so the citation
  map matches the actual written proof rather than an earlier draft outline.

### Checks run after authoring

- `node tools/tsx-run.mjs tools/precheck.mts <37 proof-bearing batch-7 item files>`
  - result: `37 checked, 0 failing — all clean`
- `node tools/content-policy.mjs research/frontier-24-batch-7.pages.json`
  - result: `content-policy: 43 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/proof-contract.mjs research/frontier-24-batch-7.proof-contracts.json --strict`
  - result: `proof-contract: 0 error(s), 0 warning(s), 37/37 item(s) checked`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; it ended with the standard repository note that pages without
    item lists must be revalidated after authoring
- `git diff --check`
  - result: clean

### Blockers

- None on the required Step-5 authoring scope and checks.

- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-7.coverage.json`
  passed on Saturday, August 29, 2026: `4/4` sources fetch-verified.

- `node tools/validate-plan.mjs research/plan-spec.json`
  passed on Saturday, August 29, 2026 with only the repository's standing
  out-of-batch `redundant-prereq` warnings.

- `node tools/validate-plan.mjs /tmp/frontier-24-batch-7-spliced-plan.json`
  also passed on Saturday, August 29, 2026. This is the real batch-manifest
  check: with the batch-7 manifest spliced into the plan, there were no
  page-cycle, item-cycle, forward-reference, B-leaf, unresolved-id, or
  over-cap failures.

- `git diff --check -- research/frontier-24-batch-7.pages.json research/frontier-24-batch-7.coverage.json research/frontier-24-batch-7.notes.md`
  produced no output on Saturday, August 29, 2026, so the batch-owned edits are
  whitespace-clean.

---

## 9. Known limits and step-5 risks

- The design's Freyd and Mac Lane *Homology* references were not put into the
  coverage ledger because this runner could not give them a clean, fetch-verified
  same-text URL. Their item cluster remains scaffolded canonically, but if the
  owner wants every design-named theorem tied to a harvested source row before
  authoring, batch 7 still owes a source-scout or reharvest pass for those books.

- Item `thm-naturality-of-the-connecting-morphism` stays the page's sharpest
  authoring obligation. The sources record the statement or the exercise, but
  the actual proof route remains the library's arrow-category argument.

- The exact-functor transport theorem is likewise a proof-writing risk: the
  statement must explicitly use comparison isomorphisms for kernels, cokernels,
  pullbacks, and pushouts, not on-the-nose preservation of chosen constructions.

- Because the design/source gap on the Freyd/Homology cluster is carried by
  canonical rows rather than source rows, Alpha should expect to audit those
  titles and proof strategies closely.

## 10. Orchestrator fetch verification

On Saturday, August 29, 2026, the network-enabled orchestrator reran
`source-fetch-check --stamp --force` and obtained fresh mechanical content
hashes for all four recorded sources: `4/4 source(s) fetch-verified (4 newly
stamped)`. A separate `url-sweep --recover --fail-on-dead` reported `4/4 live`
with zero failures or suspects. The earlier manually recorded receipt has
therefore been replaced by an orchestrator-generated fetch receipt.

## Step-3 fix pass

Alpha group `a`'s Step-3 review still reads correctly on the current Saturday,
August 29, 2026 bytes: batch `7` remains scaffold-sufficient, so this pass
accepts the two batch-local source findings as no-op confirmations rather than
as manifest or coverage repairs.

- Finding id `a563e62d36bd30d97e587a87f9982e63429fdd10738b998d7e17d06c15616ef2`
  (`Mac Lane, CWM`, VIII.4 Exercise 7, "the category `Ses(A)` is not in
  general abelian") — disposition: accepted, no scaffold change. Evidence: I
  rechecked the recorded source locator through the accessible HTML mirror of
  the MIT PDF and re-read the controlling `MA-11` block. The live scaffold
  still stops at the diagram lemmas themselves, their duality closure,
  exact-functor transport, and the eight scoped B-page examples and
  counterexamples; no A-page item or B-page witness studies `Ses(A)` as a
  separate object. The existing `out-of-scope` coverage row therefore remains
  accurate. Changed scaffold record: `research/frontier-24-batch-7.notes.md`
  only; the existing row in `research/frontier-24-batch-7.coverage.json`
  remains unchanged.

- Finding id `b6d11a86483d6dfd8defc47414987752f4ef3e28c5bf2570b3800c35809ab559`
  (`Weibel`, §1.3 Proposition 1.3.4, "naturality of the long exact sequence")
  — disposition: accepted, no scaffold change. Evidence: I re-read the
  recorded djvu source through Proposition 1.3.4. The proposition is the
  functoriality statement for the homology long exact sequence, and its proof
  explicitly invokes Embedding Theorem `1.6.1`; it is not the same obligation
  as `thm-naturality-of-the-connecting-morphism`, which `MA-11` still owns
  locally via the arrow-category route. The existing `deferred` row to
  `long-exact-sequences-in-homology` therefore remains exact. Changed scaffold
  record: `research/frontier-24-batch-7.notes.md` only; the existing row in
  `research/frontier-24-batch-7.coverage.json` remains unchanged.

- Fresh checks on the current bytes:
  `node tools/coverage-checklist.mjs research/frontier-24-batch-7.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 62 harvested result(s), 0 error(s), 0 warning(s)`.
  `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
  -> `content-policy: 493 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-7.coverage.json`
  -> `source-fetch-check: 4/4 source(s) fetch-verified`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with the repository's standing `redundant-prereq` advisories only.
  `node tools/validate-plan.mjs /tmp/frontier-24-batch-7-spliced-plan.json`
  -> `OK`; the freshly regenerated temp splice contains the current batch-7
  manifest entries and reports no page-order, item-cycle, forward-reference,
  B-page-dependency, unresolved-id, or over-cap failure.
