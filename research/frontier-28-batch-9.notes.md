# frontier-28 · Beta · batch-9 notes — `leaf-reducibility-and-wonderful-families`

Run `frontier-28`, batch `9`, one A/B pair, category `combinatorics`.
Author: Beta. Session date: Monday, August 31, 2026.

Artifacts owned by this batch:
`research/frontier-28-batch-9.pages.json`,
`research/frontier-28-batch-9.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Controlling design and resulting shape

Design locations opened:

- `research/plan-combinatorics-and-categories.md` lines `3885-3964`

Controlling design call:

- The controlling design is the single combinatorics extension block at
  `research/plan-combinatorics-and-categories.md` lines `3885-3964`.
- The page-specific row is the `425/426` entry at line `3912`, but its route is
  constrained by the immediately following global conventions and requirements:
  the blockade/order conventions at lines `3885-3890`, the section-2-through-6
  proof-splitting requirement at lines `3941-3943`, and the explicit E/Bird
  route note at lines `3961-3964`.

Shape after scaffolding:

- `leaf-reducibility-and-wonderful-families` (A): **7 items**
- `leaf-reducibility-and-wonderful-families-examples` (B): **2 items**

The A page stays well below the `60`-item split ceiling, so no split is
proposed.

---

## 2. Design-vs-spec drift I did not settle

None for this batch.

- The generated task, the controlling design row, the existing batch manifest,
  and `research/plan-spec.json` all place the pair at orders `425/426`.
- They also agree on the page ids, titles, category, companions, and declared
  `requires` list:
  `small-graph-erdos-hajnal-consequences` and
  `iterative-restriction-and-comb-extraction-lemmas`.

There is an existing-published overlap, but it is **not** design-vs-spec drift:
`def-leaf-reducible-finite-family` and
`lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph`
already live on the published prerequisite page
`library/combinatorics/iterative-restriction-and-comb-extraction-lemmas.md`.
I recorded that boundary in the scaffold instead of duplicating those items.

---

## 3. Local scaffold decisions

### Decision 1 — page 425 starts at wonderfulness, not by re-homing already-published leaf items

The design row says "Leaf-reducibility, wonderfulness, Lemmas 2.1-2.2 and
their pattern-embedding proof." In the live library, however, the leaf side is
already partially authored earlier:

- `def-leaf-reducible-finite-family`
- `lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph`

Both are published and both are harvested again from HJZ Section 2.2 as
`already-published`. The new A-page scaffold therefore begins with
`def-wonderful-finite-family` and the proof kernel of Lemma 2.1, while the B
page supplies the E/P5 structural witness so the title still has a visible
leaf-reducibility role.

### Decision 2 — Lemma 2.1 is decomposed along the design's section-2 proof-kernel rule

The design says Sections 2-6 should expose local adjacency cases and induced
witness steps as named lemmas. I therefore split the source proof into:

1. `lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge`
2. `lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph`
3. `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses`
4. `lem-a-polynomial-homogeneous-set-in-the-auxiliary-pattern-yields-a-y-four-restricted-union`
5. `lem-star-or-special-vertex-obstructions-force-wonderfulness`

That keeps the auxiliary graph `J`, the mixed-block witness selection, and the
final `r^{-1} + y^a <= y^4` estimate explicit instead of hiding them inside one
overloaded source-translation lemma.

### Decision 3 — the B page avoids adjacency-duplicate examples

The small-graph examples page already contains:

- `ex-the-e-graph-and-co-e-graph-by-adjacency`
- `ex-the-bird-graph-and-co-bird-graph-by-adjacency`

I therefore chose different B-page jobs here:

- `ex-the-e-graph-sits-inside-a-one-subdivided-star-and-deletes-to-the-five-vertex-path`
- `ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit`

These are the two finite checks that the A-page proof route actually spends.

### Decision 4 — I kept the opened-source seam in Lemma 2.1 visible

HJZ Lemma 2.1's first alternative is internally awkward in the opened source:

- the statement at lines `243-247` says `F` contains an induced subgraph of the
  plain `1`-subdivision of `K_{1,t}`;
- the proof at line `254` says a clique in the auxiliary graph induces **the
  complement** of that `1`-subdivision; but
- Lemma 2.2 at line `270` then uses the `E`-graph as an induced subgraph of the
  plain `1`-subdivision of `K_{1,3}`.

I did **not** silently choose one wording and erase the others. The scaffold
keeps the generic Lemma 2.1 item, but the notes and the proof split make the
seam explicit so step 5 can reconcile it against the source rather than
importing an accidental false statement.

---

## 4. Source choices and harvest boundaries

Only the A page owes a coverage ledger.

### 4.1 Sources actually harvested

I harvested three sources:

1. Huang-Ju-Zhou, *Erdos-Hajnal beyond the five-vertex path*  
   `https://arxiv.org/html/2606.06258v2`
2. Nguyen-Scott-Seymour, *Induced subgraph density. IV. New graphs with the Erdos-Hajnal property*  
   `https://arxiv.org/html/2307.06455v4`
3. Maria Chudnovsky, *The Erdos-Hajnal Conjecture: A Survey*  
   `https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf`

Why these three:

- HJZ is the direct source for `wonderful`, Lemma 2.1, Lemma 2.2, and the
  exact proof kernel this page needs.
- Nguyen-Scott-Seymour is the independent leaf-deletion and substitution
  treatment that HJZ itself imports in Section 2.2, so it backs the
  already-published prerequisite machinery non-circularly.
- Chudnovsky's survey is the qualifying primary treatment with a harvestable
  section structure. It does not carry the new wonderfulness lemma, but it
  does independently back the substitution route and the prime-five-vertex
  landscape that this page inherits from its published prerequisites.

### 4.2 Coverage boundaries I kept explicit

The reused HJZ preliminaries are recorded as exact `already-published` rows
rather than as one omnibus deferment:

- `def-c-sparse-and-c-restricted-vertex-set`
- `def-directional-and-weak-sparsity-between-vertex-sets`
- `def-blockade-length-and-width`
- `def-comb-in-a-graph`

The HJZ Section 2.2 rows are also mostly `already-published`, because the
library already has the blockade and leaf-reduction lemmas that source section
names:

- Lemmas `2.3-2.10` are all mapped to published items.
- `leaf-reducible` is mapped to the published definition on order `423`.
- `wonderful`, `Lemma 2.1`, and `Lemma 2.2` are the genuinely new A-page
  carriers.

The scaffold still needs several intermediate results that no source headlines
as standalone theorems, so those are recorded as `canonical` rows:

- the mixed-anticonnected witness lemma,
- the auxiliary-pattern obstruction lift,
- the polynomial homogeneous-set reformulation of Claim `2.1.1`, and
- the final restricted-union estimate.

### 4.3 One source issue is real and left on the record

The HJZ source seam in Decision 4 is not merely stylistic. It affects the exact
shape of the first branch of Lemma 2.1. The scaffold is therefore source-backed
but not source-silent:

- the coverage row for `Lemma 2.1` is kept `included`;
- the generic obstruction theorem is scaffolded rather than dropped; and
- this notes file records the contradiction with exact source lines.

That is the right step-1 outcome. Rewording the source theorem without
recording the conflict would have been a silent mathematical choice.

---

## 5. Validation results

Checks run on Monday, August 31, 2026:

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-28-batch-9.pages.json','utf8')); console.log('pages-json: ok')"`
- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-28-batch-9.coverage.json','utf8')); console.log('coverage-json: ok')"`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-9.coverage.json`
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-9.coverage.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/validate-plan.mjs /tmp/frontier-28-batch-9-overlay-plan.json`
- `node tools/url-sweep.mjs --coverage research/frontier-28-batch-9.coverage.json --out /tmp/frontier-28-batch-9-url-liveness.json --recover --fail-on-dead`

The validator outcomes and any necessary repair round are recorded below after
the commands are run.

Results:

- `pages-json: ok`
- `coverage-json: ok`
- `coverage-checklist`: `1` page, `32` harvested results, `0` errors,
  `1` warning
- `content-policy --manifest-only`: `217` scoped items, `0` errors, `0`
  warnings
- `source-fetch-check`: `3/3` sources fetch-verified
- `validate-plan.mjs research/plan-spec.json`: exit `0`; only the repository's
  standing `redundant-prereq` advisories, ending with  
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.`
- `validate-plan.mjs /tmp/frontier-28-batch-9-overlay-plan.json`: exit `0`;
  again only the standing `redundant-prereq` advisories, ending with  
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 624 page(s) with item lists.`
- `url-sweep.mjs --recover --fail-on-dead`: exit `1`; exact failures recorded
  in §6 below

The only checklist warning was:

- `coverage-low-yield`: `9/32` harvested results are newly scaffolded. This is
  expected here because HJZ Section `2.2` is mostly re-harvested as
  `already-published` material from the prerequisite pages, and I left that
  warning for Alpha rather than padding page `425` with duplicate claims.

---

## 6. URL verification and known limits

All three recorded source URLs were opened directly in the web reader on
Monday, August 31, 2026, and re-opened on Tuesday, September 1, 2026. Each
coverage row now carries an honest manual `fetch_verified` record reflecting
the latest web-open verification.

The shell-side liveness sweep is still required by the task template. If it
fails because this runner cannot resolve external hosts, I will leave the exact
URLs and error mode here rather than pretending that those are mathematical
source failures.

Shell-side sweep result:

- `node tools/url-sweep.mjs --coverage research/frontier-28-batch-9.coverage.json --out /tmp/frontier-28-batch-9-url-liveness.json --recover --fail-on-dead`
  exited `1` with
  `url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-28-batch-9-url-liveness.json`

Exact failures:

- `https://arxiv.org/html/2307.06455v4`
- `https://arxiv.org/html/2606.06258v2`
- `https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf`

## Step-5 authoring

Authored on Tuesday, September 1, 2026:

- page files:
  `library/combinatorics/leaf-reducibility-and-wonderful-families.md`,
  `library/combinatorics/leaf-reducibility-and-wonderful-families-examples.md`
- A-page items:
  `def-wonderful-finite-family`,
  `lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge`,
  `lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph`,
  `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses`,
  `lem-a-polynomial-homogeneous-set-in-the-auxiliary-pattern-yields-a-y-four-restricted-union`,
  `lem-star-or-special-vertex-obstructions-force-wonderfulness`,
  `lem-the-e-graph-and-the-bird-graph-are-wonderful`
- B-page items:
  `ex-the-e-graph-sits-inside-a-one-subdivided-star-and-deletes-to-the-five-vertex-path`,
  `ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit`
- proof-contract artifact:
  `research/frontier-28-batch-9.proof-contracts.json`

Provenance and route choices kept explicit:

- `def-wonderful-finite-family` is tagged `ai-altered`, not `literature-derived`,
  because the source phrase "every two blocks are complete or $y^a$-sparse" had
  to be made explicit as mutual directional sparsity in order for the later
  per-vertex union estimate to be true on the written proof.
- The source Lemma `2.1` statement was **narrowed**, not copied literally:
  branch `(1)` is authored in the direction actually used by the proof and by
  the `E` example, namely "some $F_\star\in\mathcal F$ is an induced subgraph of
  the $1$-subdivision of $K_{1,t}$", not the printed reverse wording.
- The source special-vertex branch was also **narrowed** to the adjacent-pair
  `H^+` route that the written lifting proof supports. I did not claim the full
  printed `H^\pm` criterion without a proof of the nonadjacent branch.
- The Bird witness example still records both finite co-Bird checks in `H^+`
  and `H^-`, but the A-page theorem only spends the proved `H^+` branch.

One additional finite source seam surfaced during authoring:

- With the Figure `6` edge list read directly from the source, the explicit
  `co`-Bird witness in `H^+` occurs as `H^+-v_3`, not as `H^+-v_2` as the
  printed proof sentence says. The examples page and the A-page theorem both use
  the checked edge-list witness `H^+-v_3`; I did not silently preserve the
  printed deletion label once the finite check contradicted it.

No scaffolded item was dropped. The only claim-shape changes were the two
recorded narrowings above, both made to keep the authored mathematics truthful
to the proof actually written.

Checks run after authoring on Tuesday, September 1, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge.md items/lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph.md items/lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses.md items/lem-a-polynomial-homogeneous-set-in-the-auxiliary-pattern-yields-a-y-four-restricted-union.md items/lem-star-or-special-vertex-obstructions-force-wonderfulness.md items/lem-the-e-graph-and-the-bird-graph-are-wonderful.md items/ex-the-e-graph-sits-inside-a-one-subdivided-star-and-deletes-to-the-five-vertex-path.md items/ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit.md`
  -> `8 checked, 0 failing — all clean`
- `node tools/regen-contract-entries.mjs research/frontier-28-batch-9.proof-contracts.json <8 scoped ids>`
  -> `research/frontier-28-batch-9.proof-contracts.json: regenerated 8, skipped 0`
- `node tools/proof-contract.mjs research/frontier-28-batch-9.proof-contracts.json --strict`
  -> `0 error(s), 0 warning(s), 8/8 item(s) checked`
- `node tools/content-policy.mjs research/frontier-28-batch-9.pages.json`
  -> `9 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`; only the repository's standing `redundant-prereq` advisories,
  ending with
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 650 page(s) with item lists.`
- `git diff --check -- items/def-wonderful-finite-family.md items/lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge.md items/lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph.md items/lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses.md items/lem-a-polynomial-homogeneous-set-in-the-auxiliary-pattern-yields-a-y-four-restricted-union.md items/lem-star-or-special-vertex-obstructions-force-wonderfulness.md items/lem-the-e-graph-and-the-bird-graph-are-wonderful.md items/ex-the-e-graph-sits-inside-a-one-subdivided-star-and-deletes-to-the-five-vertex-path.md items/ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit.md library/combinatorics/leaf-reducibility-and-wonderful-families.md library/combinatorics/leaf-reducibility-and-wonderful-families-examples.md research/frontier-28-batch-9.proof-contracts.json research/frontier-28-batch-9.notes.md`
  -> clean

Blockers:

- none inside batch `9`

Exact error mode:

- all three failures were shell-side DNS resolution failures
  (`curl: (6) Could not resolve host`)
- the sweep therefore also reported `no archived snapshot under any host
  variant`, but that is a consequence of the same network restriction here, not
  evidence that the mathematical source text is unavailable to a reader

What that does and does not mean:

- It does **not** overturn the manual `web-open` fetch verification recorded in
  the coverage file.
- It does **not** justify re-harvesting onto different sources inside this
  batch, because the same documents were opened and read in the web reader on
  Monday, August 31, 2026.
- It **does** mean that any later scout or Alpha reading only shell-side
  liveness artifacts should re-check these URLs from an environment with actual
  outbound DNS before treating them as dead citations.

## Step-3 fix pass

Date: Tuesday, September 1, 2026.

- Stable review file checked:
  `research/frontier-28-alpha-d-step3-scaffold-review.md`.

- Finding `D9-1` on `leaf-reducibility-and-wonderful-families`
  Disposition: accepted as already repaired on current bytes; no pushback.
  Evidence: the current
  `research/frontier-28-batch-9.coverage.json` no longer has the inexact HJZ
  omnibus deferment described in the review. Instead it carries four exact
  `already-published` rows naming
  `def-c-sparse-and-c-restricted-vertex-set`,
  `def-directional-and-weak-sparsity-between-vertex-sets`,
  `def-blockade-length-and-width`, and `def-comb-in-a-graph`, and
  `research/frontier-28-batch-9.notes.md` §4.2 matches that split. The only
  remaining page-425 decline row is Chudnovsky `Conjecture 2.3` with
  destination `owner-decision`, exactly as the stable review says.

- Source verification evidence in this pass:
  reopened `https://arxiv.org/html/2606.06258v2` and rechecked the recorded
  HJZ locators at the live URL, including the table of contents lines `15-30`,
  Section `2.1` lines `226-272` for `wonderful`, Lemma `2.1`, Lemma `2.2`,
  and Figure `6`, and Section `2.2` beginning at line `273`; reopened
  `https://arxiv.org/html/2307.06455v4` and rechecked Theorem `1.2` at lines
  `45-49` and Theorem `7.8` at lines `690-697`; and reopened
  `https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf` and rechecked the
  section-overview lines `64-69`, Section `2` lines `83-176`, and Conjecture
  `2.3` at lines `176-180`. I refreshed the three `fetch_verified` receipts in
  the coverage ledger to `2026-09-01T03:39:03Z` to match this pass.

- Validator results on current bytes:
  `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-9.coverage.json`
  -> `WARN coverage-low-yield [leaf-reducibility-and-wonderful-families]: frontier-28-batch-9.coverage.json: leaf-reducibility-and-wonderful-families: 9/32 harvested results scaffolded; confirm the declines with Alpha`
  and then `coverage-checklist: 1 page(s), 32 harvested result(s), 0 error(s), 1 warning(s)`.
  `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-9.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`.
  `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
  -> `content-policy: 424 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`, with only the standing repo-wide `redundant-prereq`
  advisories, ending with `OK — declared page order is acyclic and consistent;
  no item-level cycles, forward references, B-page dependencies, or unresolved
  ids among the 622 page(s) with item lists.`
  `node tools/validate-plan.mjs /tmp/frontier-28-batch-9-overlay-plan.json`
  -> exit `0`, again with only the standing repo-wide
  `redundant-prereq` advisories, ending with `OK — declared page order is
  acyclic and consistent; no item-level cycles, forward references, B-page
  dependencies, or unresolved ids among the 624 page(s) with item lists.`

- Changed scaffold record:
  no change to `research/frontier-28-batch-9.pages.json`;
  refreshed the three `fetch_verified` receipts in
  `research/frontier-28-batch-9.coverage.json`;
  appended this Step-3 fix-pass receipt in
  `research/frontier-28-batch-9.notes.md`.
