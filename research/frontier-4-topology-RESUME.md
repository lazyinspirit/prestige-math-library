# `frontier-4-topology` — build state and decision log

**Started 2026-07-30.** Owner instruction: build every topology A/B pair on the
current disk-derived frontier, with the canonical step 0 to step 9 workflow and
the post-step-9 publish/commit/push action treated as step 10. Beta scaffolders
must search reputable web sources for definitions, theorems, corollaries, and
proof strategies. They have read access to the full published library and must
verify that every load-bearing dependency is either earlier inside its A/B pair
or established by published content.

## Step 0 — frontier selection and batching

Step 0.1 recomputed the frontier from the page files and
`research/plan-spec.json`, using publication state rather than remembered static
levels. A pair qualifies when its A page is absent from `library/`, both planned
item lists are empty, and every declared A-page prerequisite is published on
disk.

| order | static level | A page | published prerequisites |
|---:|---:|---|---|
| 257 | 13 | `the-topology-of-euclidean-space` | `compactness`, `connectedness`, `subspaces-products-and-quotients`, `compactness-in-metric-spaces`, `rn-as-a-normed-space` |
| 259 | 9 | `nets-and-filters` | `compactness` |
| 265 | 10 | `hereditary-and-productive-separation` | `hausdorff-via-the-diagonal`, `compactness`, `ordinals-and-transfinite-recursion`, `ordinal-arithmetic` |
| 269 | 11 | `partitions-of-unity-and-paracompactness` | `urysohn-lemma-and-tietze`, `compactness` |
| 273 | 7 | `countability-axioms-and-cardinal-functions` | `subspaces-products-and-quotients`, `ordinals-and-transfinite-recursion`, `cardinal-arithmetic-and-cofinality` |
| 279 | 9 | `uniform-spaces` | `completeness-and-uniform-continuity`, `compactness` |

Static levels are context only. Publication state selects this build.

### Step 0.2–0.3 batches

Two batches, each at the cap of three A pages and including the corresponding B
companions:

1. **Convergence, uniformity, and Euclidean topology:**
   `nets-and-filters`, `uniform-spaces`,
   `the-topology-of-euclidean-space`.
2. **Separation, paracompactness, and countability:**
   `hereditary-and-productive-separation`,
   `partitions-of-unity-and-paracompactness`,
   `countability-axioms-and-cardinal-functions`.

The first batch clusters the pages that assemble general compactness with metric
and convergence structures. The second clusters separation properties and the
countability machinery used by their later consequences.

### Step 0.4 seam report before spawning

- **Declared page-level edges between selected A pages: 0.** Each selected page
  depends only on already-published pages, which is why it is on the disk
  frontier.
- **Cross-batch item-level seam count: not computable.** All twelve selected page
  objects have empty item lists before scaffolding. Reporting zero would be false
  precision.
- Beta scaffolders may propose a cross-batch seam only if the mathematics
  requires one and plan order permits it. They must report it explicitly.

No step beyond step 0 had run when this section was written.

## Owner instructions received during steps 1–2

- Beta, Alpha, and authoring agents run at `xhigh` reasoning.
- The Beta web-research and published-library dependency-closure requirements
  are standing rules for all future sessions. They are recorded in `CLAUDE.md`,
  `LEVELS.md`, `WORKFLOW.md`, `ARCHITECTURE.md`, and
  `briefs/beta-scaffold.md`.
- The A-page total-item review ceiling is 100, raised from 60. This is persisted
  in `SCHEMA.md`, the four normative workflow documents,
  `briefs/beta-scaffold.md`, and the default in `tools/validate-plan.mjs`.
  It remains a review warning, not a target or a reason to prune mathematics.
- Every A-page summary has exactly two nonempty prose paragraphs under 150 words
  each: mathematical background and used declared dependencies first, then the
  main definitions, theorems, and their logical progression. B pages have no
  authored summary body. This is persisted in `SCHEMA.md`, the four normative
  workflow documents, `briefs/authoring.md`, and the Beta/Alpha audit briefs.

## Steps 1–2 — Beta scaffolding and dependency resolution

Both `xhigh` Beta agents completed their namespaced outputs:

- `research/frontier-4-topology-batch-1.pages.json` and `.notes.md`:
  Euclidean topology, nets and filters, uniform spaces.
- `research/frontier-4-topology-batch-2.pages.json` and `.notes.md`:
  hereditary/productive separation, paracompactness, countability axioms.

The combined scaffold has 12 page objects and 234 distinct proposed item ids.
The orchestrator's integrated scratch splice passed `validate-plan`: no item
cycle, forward dependency, B-page dependency, or unresolved id. `depsource`
classified the selected pages' 573 dependency occurrences as 492 published and
81 planned-earlier, with zero draft-page, homeless, planned-later, or unresolved
occurrences. Exact collision checks against `items/`, the unspliced spec, and
other batch JSON files found zero collisions.

Step 3 now iterates the verified recommendations with the owner one at a time.

## Step 3 — owner decisions

1. **APPROVED:** replace the false T6 claim that first countability is exactly
   where sequences suffice by the implication hierarchy
   `first countable => Frechet-Urysohn => sequential`, with companion
   counterexamples to the converses.
2. **APPROVED:** drop Banach limits from the nets-and-filters companion because
   their construction needs unbuilt Hahn-Banach/functional-analysis machinery;
   use self-contained ultrafilter and convergence examples instead.
3. **APPROVED:** remove `beta N` from the nets-and-filters companion; its
   identification belongs to the unbuilt
   `tychonoff-embedding-and-stone-cech` pair and would be a forbidden forward
   dependency here.
4. **APPROVED:** state general uniform completion through the complete Hausdorff
   reflection; the canonical map is a uniform embedding exactly when the
   original uniformity is separated.
5. **APPROVED:** state the ultrafilter lemma explicitly for the T6 net/filter
   compactness equivalences, universal-subnet construction, and compact-Hausdorff
   product proof; keep the published arbitrary-product theorem distinct under
   full AC.
6. **APPROVED:** state dependent choice explicitly for the gauge/pseudometric
   construction and the complete-regularity-to-uniformizability direction,
   keeping the choice-free directions separate.
7. **APPROVED:** restrict the Euclidean grand compactness/extreme-value
   equivalence to nonempty subsets, avoiding the false empty-set case.
8. **APPROVED:** split the Euclidean compactness chart into its ZF core and the
   `AC_omega + DC` sequential/countable/limit-point and
   complete-plus-totally-bounded extensions.
9. **APPROVED:** keep the false statement that every pseudocompact topological
   space is compact, refuted self-containedly by an infinite particular-point
   space.
10. **APPROVED:** replace the ambiguous topological-group “two-sided
    uniformity” by separately named left, right, upper, and Roelcke
    uniformities.
11. **APPROVED:** use raw, unnormalised cardinal functions on the countability
    page, with `chi(X)` the supremum of local characters and `c(X)` the supremum
    of cellular-family sizes; prove the convention-safe metric equality `d=w`
    rather than false blanket coincidences.
12. **APPROVED:** add `cardinal-arithmetic-and-cofinality` as a direct
    prerequisite of `hereditary-and-productive-separation` for Jones's
    cardinal obstruction.
13. **APPROVED:** add the planned
    `hereditary-and-productive-separation` seam to
    `partitions-of-unity-and-paracompactness` for the lower-limit-line
    nonproductivity counterexample.
14. **APPROVED:** add `compactness` as a prerequisite of
    `countability-axioms-and-cardinal-functions`, reusing the published
    Lindelof definition, one-point compactification, and compactness facts.
15. **APPROVED:** add `separation-axioms` as a prerequisite of
    `countability-axioms-and-cardinal-functions` for the ordinal examples'
    separation properties.
16. **APPROVED:** restore the false statement that every regular space is
    normal, refuted by a self-contained deleted Tychonoff plank; use it also to
    prove normality is not hereditary.
17. **APPROVED:** reconstruct the lower-limit line on page 265's A page because
    the existing Sorgenfrey material is B-leaf locked; use the citable
    reconstruction for Jones's obstruction and nonproductivity of normality.
18. **APPROVED:** define paracompactness without Hausdorffness built in and state
    Hausdorff explicitly in every regularity, normality, shrinking, or
    partition-of-unity theorem that needs it.
19. **APPROVED:** use the decomposed paracompactness proof chain: locally finite
    closure/union lemmas, regularity, normality, double shrinking, Urysohn
    functions, locally finite summation, and normalization; keep Stone's theorem
    as a separate two-stage refinement argument.
20. **APPROVED:** require comparison of Ornstein's exact two-stage refinement
    lemmas with an accessible primary copy before authoring Stone's theorem;
    defer the theorem if that check cannot be completed.
21. **APPROVED:** state Stone's theorem under AC as a sufficient hypothesis
    without claiming that AC is its exact strength.
22. **APPROVED:** state AC and DC separately for the subordinate
    partition-of-unity theorem, reflecting the cover choices and the published
    DC-sensitive Urysohn lemma.
23. **APPROVED:** when page 273 publishes, apply the four pre-staged
    countability/separability amendments to earlier published prose, using
    order-relative wording and forward pointers; clear the affected owner-audit
    fields for re-audit.
24. **APPROVED:** when page 269 publishes, amend the earlier Stone
    choice-strength remark to point order-relatively to the new theorem while
    keeping its independence analysis explicitly unproved.
25. **APPROVED:** set the Euclidean page's direct prerequisites to
    `compactness`, `rn-as-a-normed-space`, and
    `finite-counting-and-binomial-coefficients`, removing redundant direct edges
    and adding the finite-counting dependency actually used.
26. **APPROVED:** add `absolute-convergence-and-rearrangement` and
    `finite-counting-and-binomial-coefficients` as direct prerequisites of
    `nets-and-filters` for its finite-subset unordered-summation development.
27. **APPROVED:** set `uniform-spaces` to require `nets-and-filters`,
    `hausdorff-via-the-diagonal`, and `monoids-groups-and-subgroups`, matching
    its direct convergence, separation, and group-theoretic proof surface.
28. **APPROVED:** on the Euclidean page state directly that `Q^n` is countable
    and dense and rational boxes form a countable basis, avoiding the
    not-yet-defined terms separable and second countable.
29. **APPROVED:** define directed sets as directed preorders and subnets through
    eventually cofinal index maps, recording stricter conventions without mixing
    them into the proofs.
30. **APPROVED:** use “totally bounded” throughout the uniform-space page and
    omit the convention-dependent synonym “precompact”.
31. **APPROVED:** state the ultrafilter lemma explicitly for the uniform-space
    equivalence between compactness and completeness plus total boundedness.
32. **APPROVED:** state the unordered-summability result precisely under
    countable choice: a real family is summable by its finite-subset net exactly
    when it has at most countable absolutely summable support.

All 32 step-3 recommendations were approved by the owner. Step 4 may proceed.

## Step 4 — splice and propagation

The orchestrator spliced both Beta page-object files into
`research/plan-spec.json`, preserving the canonical metadata of all twelve
existing page records and adding **234 item scaffolds**. The six approved
A-page prerequisite lists are:

| A page | approved direct `requires` |
|---|---|
| `the-topology-of-euclidean-space` | `compactness`, `rn-as-a-normed-space`, `finite-counting-and-binomial-coefficients` |
| `nets-and-filters` | `compactness`, `absolute-convergence-and-rearrangement`, `finite-counting-and-binomial-coefficients` |
| `hereditary-and-productive-separation` | `hausdorff-via-the-diagonal`, `compactness`, `ordinals-and-transfinite-recursion`, `ordinal-arithmetic`, `cardinal-arithmetic-and-cofinality` |
| `partitions-of-unity-and-paracompactness` | `urysohn-lemma-and-tietze`, `compactness`, `hereditary-and-productive-separation` |
| `countability-axioms-and-cardinal-functions` | `subspaces-products-and-quotients`, `ordinals-and-transfinite-recursion`, `cardinal-arithmetic-and-cofinality`, `compactness`, `separation-axioms` |
| `uniform-spaces` | `nets-and-filters`, `hausdorff-via-the-diagonal`, `monoids-groups-and-subgroups` |

This records the `requires` disagreements explicitly. Recommendations 25 and 27
were owner-approved replacements of stale metadata, so those exact lists
supersede the ordinary union rule. Recommendations 12–15 and 26 add the
load-bearing seams discovered by the Betas. Every B page retains the sole
prerequisite of its companion A page.

Authoritative post-splice gates:

- `node tools/validate-plan.mjs research/plan-spec.json` — **PASS**: no item
  cycle, forward dependency, B-page dependency, or unresolved id.
- `node tools/depsource.mjs research/plan-spec.json --json` — across the
  selected pages, every dependency is either `published` or `planned-earlier`;
  `draft-page`, `homeless`, `planned-later`, and `unresolved` are all zero.

Alpha-F4 ran at `xhigh` reasoning and applied the approved prose-plan amendments
as the sole writer in `research/plan-topology-track.md` and
`research/plan-topology-set-theory-track.md`. It changed no item, page, library,
or published-amendment file. Its post-propagation gates reported:

- `validate-plan` — PASS, with only existing or owner-approved redundant direct
  prerequisite warnings;
- `depsource` — 492 published and 81 planned-earlier dependency occurrences
  across the twelve pages, with every forbidden provenance class at zero;
- `prosecheck` — exit 0, zero errors (count warnings are explicit scaffold and
  audit counts);
- `git diff --check` — PASS.

The pre-authoring touch baseline is
`research/frontier-4-topology-touches.json`, snapshot label
`baseline before frontier-4 topology authoring`. Step 5 may proceed in
dependency order.

## Step 5 — authoring

The selected-page subgraph forces two seams:

- `nets-and-filters` precedes `uniform-spaces`;
- `hereditary-and-productive-separation` precedes
  `partitions-of-unity-and-paracompactness`.

The first xhigh Terra wave therefore dispatched `nets-and-filters`,
`hereditary-and-productive-separation`, and
`countability-axioms-and-cardinal-functions`. The fourth independent pair,
`the-topology-of-euclidean-space`, is queued for the first available worker
slot. The two dependent pairs are queued until their own predecessor lands.
The three-concurrent-worker ceiling is a platform limit; it does not create a
mathematical sequencing claim among the independent pairs.

Owner operational amendments received during step 5 and persisted in the
normative docs and briefs:

- no orchestrator or current/future agent may request shell-command permission;
  sandboxed Codex work uses non-escalated commands, including the direct Node
  `tsx` loader for `reflow.mts` and `precheck.mts`;
- in current and future builds, the orchestrator approves or declines step-3
  recommendations using best judgment: mathematical accuracy and correct
  dependency citation are non-negotiable, then minimize forward references,
  then preserve mathematical richness.

Completed author pairs so far:

- `nets-and-filters`: 36 items; 26 proof-bearing items pass precheck;
- `hereditary-and-productive-separation`: 31 items; 25 proof-bearing items pass;
- `countability-axioms-and-cardinal-functions`: 44 items; the original
  authoring pass left collapsed proof formatting, then a scoped xhigh Terra
  repair achieved 31/31 proof-bearing precheck passes.

All three report zero owned prosecheck errors/warnings and clean dependency,
forward-reference, and external-reference gates. `uniform-spaces`,
`partitions-of-unity-and-paracompactness`, and
`the-topology-of-euclidean-space` are in progress.

Author-stage step-3 adjudication:

- **APPROVED — Ornstein refinement dependency correction.** Independent AMS
  primary-text verification of Donald Ornstein, *A new proof of the
  paracompactness of metric spaces*, Proc. AMS 21 (1969), 341–342,
  DOI `10.1090/S0002-9939-1969-0242120-3`, confirms that part (B) restarts from
  the original open cover and constructs a locally finite refinement directly.
  It does not upgrade or cite part (A)'s point-finite refinement. The part-(B)
  lemma therefore has no dependency on part (A), and Stone's theorem depends on
  part (B) only. This removes a false dependency while preserving the theorem
  and introducing no forward reference.

- **REVERSED AFTER FULL PRIMARY-TEXT AUDIT — restore Ornstein A→B.** The
  preceding author-stage decision was wrong. Part (A) first refines the original
  cover to a point-finite cover. In part (B), the radius estimate proves
  `C'_alpha` meeting a fixed small ball forces the centre point into
  `C_alpha`; that implication yields local finiteness only because the input
  family is point-finite. The xhigh Beta audit caught the missing use, and the
  orchestrator independently confirmed it from both primary pages. Accuracy and
  source fidelity are non-negotiable, so part (B) again depends on part (A), and
  Stone's theorem uses both. `research/plan-spec.json`, the authored items, and
  the page summary must carry the restored two-stage proof. This reversal is
  logged rather than erasing the earlier mistaken adjudication.

Step 5 completed with **234 new draft/session items** and twelve draft page
files. Per pair:

| pair | items | proof-bearing precheck |
|---|---:|---:|
| Euclidean topology | 29 | 22/22 |
| nets and filters | 36 | 26/26 |
| uniform spaces | 62 | 46/46 |
| hereditary/productive separation | 31 | 25/25 |
| partitions of unity/paracompactness | 32 | 24/24 |
| countability axioms/cardinal functions | 44 | 31/31 |

The post-authoring snapshot is recorded in
`research/frontier-4-topology-touches.json` as
`after frontier-4 topology authoring`; the item-file count increased from 1598
to 1832, exactly the 234 planned creations.

Orchestrator gates of record after all writers landed:

- direct-loader `precheck.mts`: **174 checked, 0 failing**;
- scoped `prosecheck.mjs`: **246 files, 0 errors, 0 warnings**;
- `validate-plan`, `depcheck`, `fwdcheck`, `extcheck`, `citecheck`, and
  `rendercheck`: exit 0; their printed diagnostics are pre-existing heuristic or
  recorded-not-proved warnings, not owned failures;
- custom contract audit: twelve page files and 234 items exactly cover the
  spliced lists; all items are `draft` / `origin: session`; A pages each have
  exactly two nonempty summary paragraphs under 150 words; B pages have no
  authored body; no `verification.audited` or judge field exists.

Step 6a dispatched both original xhigh Beta agents in parallel against the
frozen post-authoring text, batch 1 covering Euclidean/nets/uniform and batch 2
covering separation/paracompactness/countability.

Step 6a completed:

- batch 1 read all 127 items and six pages, repaired 62 items, and recorded its
  full/fatal ledger in `research/frontier-4-topology-batch-1.audit.md`;
- batch 2 read all 107 items and six pages, repaired 33 items plus one page
  summary, and recorded its full/fatal ledger in
  `research/frontier-4-topology-batch-2.audit.md`;
- the post-Beta snapshot `after frontier-4 topology Beta audits` records exactly
  **95 first repairs**, matching the disjoint batch totals;
- final Beta gates: 94/94 and 80/80 proof-bearing prechecks; scoped prose,
  citation, dependency, forward, external, and summary contracts clean.

The Beta audits caught substantial defects invisible to the author gates,
including invalid subnet index/value constructions, hidden choice, incomplete
Frink/completion/star-refinement arguments, skeletal delta-system/Cantor-cube
proofs, and the incorrect author-stage claim that Ornstein part (B) was
independent of part (A). The latter adjudication was transparently reversed and
the two-stage dependency restored in the plan and content.

Step 6b/6c dispatched Alpha-F4 at `xhigh` to verify all 95 Beta repairs, audit
all cross-batch and published-backward edges, run the fixed summary contracts,
and consolidate the persistent step-9 fatal-error ledger.

Step 6b/6c completed. The durable report is
`research/frontier-4-topology-alpha-audit.md` and the 1,024-edge audit checklist
is `research/frontier-4-topology-audit-manifest.json`. Alpha verified all 95
Beta-repaired items, all 570 published-backward edges in the frozen manifest,
all 79 B-to-A companion seams, every page, and the remaining same-batch graph
against the complete Beta audits. Five item files required Alpha edits:

- `lem-metric-open-covers-have-point-finite-refinements`;
- `lem-pseudometric-from-a-normal-entourage-sequence`;
- `thm-compact-hausdorff-open-cover-uniformity`;
- `thm-compact-hausdorff-space-has-a-unique-compatible-uniformity`;
- `ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence`.

The first four except the open-cover-uniformity theorem, together with the
coordinate-reading example, were the four twice-touched items measured by the
post-Alpha snapshot. The orchestrator personally audited all four and recorded
PASS, including the ramifications of dropping each. The live topology graph
after the repairs has 1,040 edges: 579 published-backward and 461 same-batch,
with zero cross-batch and zero direct forward edges. The five live dependency
lists were spliced back into `research/plan-spec.json`.

Authoritative post-Alpha gates:

- direct-loader precheck: 174 proof-bearing items, 0 failing;
- prosecheck: 246 frontier files, 0 errors and 0 warnings;
- citecheck: 234 items clean;
- rendercheck: 246 files clean;
- `validate-plan`, `depcheck`, `fwdcheck`, `extcheck`, and `git diff --check`:
  exit 0;
- `depsource`: 11,902 published, 426 draft-page, and zero planned-later,
  homeless, or unresolved dependencies globally;
- contract audit: exactly 12 pages and 234 draft/session items, six two-paragraph
  A summaries, six empty B bodies, and no audit or judge metadata.

Step 7 cannot start in the current sandbox. `OFOXAI_API_KEY` is present, but
the required GLM 5.2 ofox preflight exits 3 immediately with
`transport failure — fetch failed`; DNS for `api.ofox.ai` is unavailable under
the restricted network. The standing no-shell-permission-prompts rule forbids
requesting escalation. No verdict was fabricated and no judge ledger entry was
written. Resume Step 7 by re-running the preflight in an already network-enabled
session, then judge all 234 items against their A/B pair context.

On 2026-07-31 the owner identified
`/root/Projects/prestige-intelligence/.env` as the credential source. Loading
that file explicitly still produced the same transport failure; a credential-free
diagnostic resolved the underlying cause as
`getaddrinfo EAI_AGAIN api.ofox.ai`. The API key location is therefore settled,
and DNS/network isolation—not missing authentication—is the remaining blocker.
The official OfoxAI documentation still names
`https://api.ofox.ai/v1/chat/completions`, so the configured endpoint is
current. A numeric HTTPS diagnostic to `1.1.1.1` failed before DNS with
`failed to open socket: Operation not permitted`, proving that this sandbox
blocks outbound sockets altogether; changing resolvers or hard-coding an API IP
cannot fix the session.

## Step 7 — GLM judge sweep resumed and completed

The resumed session had outbound HTTPS enabled. The Ofox preflight passed for
`z-ai/glm-5.2` with the account funded. The orchestrator judged all 234 items
using the required context unit: the complete A/B pair plus exactly the
prerequisite pages the source page both declares and cites.

The final ledgers are:

- `research/frontier-4-topology-judge.jsonl`;
- `research/frontier-4-topology-judge-cost.jsonl`;
- `research/frontier-4-topology-judge-adjudication.md`.

Final accounting is 249 calls, 234 distinct ids, 239 pass records, 10 historical
rejections, no null or failed verdicts, and all 234 ids ending in pass. The cost
ledger records 14,652,476 prompt tokens and 1,401,834 completion tokens, with no
zero-usage calls.

The 10 rejections were all true positives. They affected nine ids because
`thm-compactness-via-nets-filters-and-ultrafilters` was rejected twice for two
different defects. Every rejection was repaired and rejudged. No result was
dropped, deferred, or added solely to answer a rejection.

## Steps 8–9 — final Alpha audit, escalation, and gates

The first final-Alpha pass found two judge-passed publish blockers:

- `thm-subordinate-partitions-of-unity-exist` had reduced its normalization
  dependency below the support-preservation conclusion used in Step 4.1;
- `ex-cardinal-functions-of-the-real-line` cited countability of the rationals
  for their density and for the rational-interval basis.

The exact normalization statement was restored. The real-line example now cites
`thm-rational-points-and-boxes-in-rn` at \(n=1\), and its B-page context declares
`the-topology-of-euclidean-space`. Alpha also identified a nonfatal formal gap in
`lem-lindelof-degree-is-well-defined`: the proof spoke of the proper class of
all bounding cardinals. It now minimizes inside the nonempty set of bounds at
most \(|\mathcal T|\) and proves the result is globally least. All three changes
rejudged pass, and the narrow final Alpha re-audit returned PASS.

The regenerated dependency audit manifest has 1,049 edges: 585
published-backward, 463 same-batch, and one cross-batch edge, namely the
real-line cardinal example's exact dependency on the Euclidean rational-points
theorem. That seam is earlier in plan order and declared in the B-page context.

`tools/touchlog.mjs` was found to exclude block verification metadata but not
the equivalent inline form. This converted judge stamping into phantom
mathematical repairs. The regex now excludes both forms. The active ledger was
rebased with the mechanically preserved repair counts, retains the six original
snapshots as `legacy_snapshots`, and has a clean normalized baseline. The final
twice-touched escalation set has 14 items. The orchestrator personally audited
the nature of every fault and the ramifications of dropping each result; the
complete table is in the judge adjudication record. All 14 are mathematically
sound in final form and were retained.

Final authoritative gates on the exact draft state:

- precheck: 1,369 proof-bearing items globally, 0 failures;
- prosecheck: 1,933 files, 0 errors (678 known heuristic warnings);
- rendercheck: 1,933 files clean under KaTeX;
- citecheck, depcheck, fwdcheck, extcheck: exit 0;
- depsource: 11,912 published and 429 draft-page dependency occurrences, with
  zero homeless, planned-later, or unresolved occurrences;
- validate-plan: exit 0, no item cycles, forward dependencies, B-page
  dependency errors, or unresolved ids;
- Frontier 4 contract audit: 234 unique draft/session items, 174 proof passes,
  60 nonproof passes, 234 final judge passes, six A pages, six B pages, maximum
  54 items on any page, and no contract errors;
- `git diff --check`: exit 0.

The full fatal-error evidence remains in the two Beta audit ledgers,
`research/frontier-4-topology-alpha-audit.md`, and the judge adjudication
record. The publication-boundary scope-denial sweep found stale global claims
and three pre-existing false sequence/first-countability prose claims in
already-published material. Exact amendments and metadata rules are staged in
`research/frontier-4-topology-publish-amendments.md`. They are deliberately not
applied before owner audit because those files are served live; they must land
in the same change as Frontier 4 publication.

**Step 9 is complete. Publication, owner-audit stamping, commit, and push have
not run. Step 10 is paused for the owner's publication decision.**

## Step 10 — owner-authorised publication (2026-07-31)

The owner authorised publication. The 234 Frontier 4 items and twelve topology
pages are now `published`; every new item carries
`verification.audited: 2026-07-31`. The eight corrected already-published
proved items were freshly judged and re-audited on the same date. Their durable
release ledger is
`research/frontier-4-topology-publish-amendments-judge.jsonl` (eight GLM 5.2
passes), with matching token accounting in
`research/frontier-4-topology-publish-amendments-judge-cost.jsonl`.

One genuine release recheck rejection was repaired before publication:
`thm-first-countable-sequences-suffice` used the neighbourhood-superset rule in
proof step 4.2 without including that rule in fact `[L3]`. The fact now states
the exact cited consequence of `def-neighbourhood-top`, and GLM 5.2 passed the
corrected item. One mechanical forward-reference defect was also repaired:
`rem-stone-theorem-choice-strength` no longer declares the now-unused
`rem-choice-ledger` forward reference.

Post-publication gates passed: global precheck (1,369 proof-bearing items, zero
failures); prosecheck (1,933 files, zero errors); rendercheck; citecheck;
depcheck; fwdcheck (zero open forwards); extcheck; depsource (12,341 published
dependency occurrences, zero unresolved); validate-plan; and `git diff --check`.
The remaining prose/citation diagnostics are the pre-existing documented
heuristics and do not name a Frontier 4 release defect.
