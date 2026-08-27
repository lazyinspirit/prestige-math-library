# frontier-21 batch 10 notes - beta scaffold

Owned pairs:

- `pure-pairs-forests-and-path-antipath-classes` / `pure-pairs-forests-and-path-antipath-classes-examples`
- `quotient-blockades-and-mixing-relations` / `quotient-blockades-and-mixing-relations-examples`

Artifacts written in this dispatch:

- `research/frontier-21-batch-10.pages.json`
- `research/frontier-21-batch-10.coverage.json`
- this file

Session date: Thursday, August 27, 2026.

## Design against spec

I read `research/frontier-21-beta-10.task.md`, `research/plan-spec.json`, and
the assigned design row in
[research/plan-combinatorics-and-categories.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-combinatorics-and-categories.md:3904)
for page `409/410` and
[research/plan-combinatorics-and-categories.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-combinatorics-and-categories.md:3917)
for page `435/436`, together with the source-and-correction ledger in
`§16.5`.

For both owned pairs, the design row and the current spec agree on:

- page id
- companion page id
- page title
- order
- category
- prerequisite page

No design-vs-spec drift needed recording for this batch.

One design correction *does* matter for later authoring and is carried forward
here: `§16.5` says Theorem `1.7` in the target paper needs its complement
notation restored. I therefore scaffolded the leaf/co-leaf item from the
corrected family statement, not from the broken apostrophe/complement text that
appears in one OCR rendering.

## Item census and split check

- A page `pure-pairs-forests-and-path-antipath-classes`: **14 items**
- B page `pure-pairs-forests-and-path-antipath-classes-examples`: **4 items**
- A page `quotient-blockades-and-mixing-relations`: **7 items**
- B page `quotient-blockades-and-mixing-relations-examples`: **4 items**

No A page is close to the `60`-item split gate, so no split is needed.

## Route choices

### `pure-pairs-forests-and-path-antipath-classes`

The page is intentionally short and layered:

1. a small cograph bridge (`P_4`-free graphs and the strong-to-weak
   implication),
2. the general pure-pair baseline of Erdős-Hajnal-Pach,
3. the two family endpoints the design row names explicitly:
   path-antipath classes and forests,
4. the earlier leaf-deletion virality theorem, and then
5. the leaf/co-leaf virality and Erdős-Hajnal closure step used later in the
   extension.

Important decisions:

- I kept the **general pure-pair theorem** on the A page because earlier
  harvest work in this lane already routed Erdős-Hajnal-Pach's bipartite
  analogue here, and it is genuinely the pure-pair baseline beneath the later
  linear pure-pair theorems.
- I kept the **forest theorem** in the strong form ("linear pure pair") and
  the weak Erdős-Hajnal corollary as separate items. The page title promises
  pure pairs, not just the later clique-or-stable-set consequence.
- I did **not** scaffold the broader buildable-class theorem from
  `Induced subgraph density. IV`. It is mathematically relevant, but it would
  force a separate `J`-class closure package and move the page away from the
  design's narrower pure-pairs / forests / path-antipath / leaf-co-leaf route.
- I added the small `P_4`-free bridge because the strong-to-weak implication is
  not honest without the cograph endpoint it actually uses.
- I also promoted the **forest sparse theorem** and the earlier **leaf
  deletion virality theorem** from implicit support to explicit scaffold items.
  They were already carrying two of the later endpoints, and making them named
  items clears the omission warning without padding the page.

### `quotient-blockades-and-mixing-relations`

This page stays as narrow as the design row suggests:

1. define the mixed-block reachability relation,
2. prove it is an equivalence relation,
3. define the quotient blockade,
4. split Lemma `6.1` into its three logical parts,
5. end with the exact reduction Lemma `6.2`.

Important decisions:

- I did **not** continue past Lemma `6.2` into Lemmas `6.3` and `6.4`.
  Those are already the beginning of the co-`E` structural argument and belong
  on the later page `co-e-free-comb-structure`.
- I exposed the equivalence relation as its own definition-plus-lemma pair
  instead of hiding it in prose, because every later quotient-blockade proof
  depends on that closure property and not merely on the raw mixed relation.
- I added the counterexample on the B page showing that **mixedness itself is
  not transitive**. Without that example, the reason for quotienting by the
  transitive closure rather than by direct mixedness is too easy to miss.

## Source set actually read

### For `pure-pairs-forests-and-path-antipath-classes`

I harvested from the following verified treatments:

1. Maria Chudnovsky, *The Erdős-Hajnal Conjecture—A Survey*.
2. Tung H. Nguyen, *Notes on Recent Work on the Erdős-Hajnal Conjecture*.
3. Nicolas Bousquet, Aurélie Lagoutte, and Stéphan Thomassé,
   *The Erdős-Hajnal Conjecture for Paths and Antipaths*.
4. Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl,
   *Pure pairs. I. Trees and linear anticomplete pairs*.
5. Tung Nguyen, Alex Scott, and Paul Seymour,
   *Induced subgraph density. IV. New graphs with the Erdős-Hajnal property*.
6. Shenwei Huang, Yiao Ju, and Yidong Zhou,
   *Erdős-Hajnal beyond the five-vertex path*.

What each source is doing in the scaffold:

- The survey supplies the general pure-pair theorem and keeps the page anchored
  in the established Erdős-Hajnal literature rather than only in the newest
  extension papers.
- Nguyen's notes are now the page's qualifying lecture-note treatment. They
  contribute the `P_4` cograph bridge directly and also expose, under their own
  section headings, the general density theorems and blockade log-log bound
  that this page intentionally defers to the later general-bounds page.
- Bousquet-Lagoutte-Thomassé supplies both the strong-to-weak implication in
  the exact form used here and the path-antipath strong theorem.
- *Pure pairs. I* supplies the forest pure-pair endpoint and its immediate
  Erdős-Hajnal corollary.
- `Induced subgraph density. IV` supplies the earlier leaf-deletion virality
  theorem that underlies the new leaf/co-leaf formulation.
- The target paper `2606.06258v2` supplies the exact family formulation of
  Theorem `1.7` and Corollary `1.8`, plus the modern placement of the forest
  and path-antipath results inside the current six-vertex extension program.

### For `quotient-blockades-and-mixing-relations`

I harvested from the following verified treatments:

1. Tung H. Nguyen, *Notes on Recent Work on the Erdős-Hajnal Conjecture*.
2. Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl,
   *Erdős-Hajnal for graphs with no 5-hole*.
3. Shenwei Huang, Yiao Ju, and Yidong Zhou,
   *Erdős-Hajnal beyond the five-vertex path*.

What each source is doing in the scaffold:

- Nguyen's notes are the batch's eligible lecture-note treatment and back the
  blockade-centric iterative-sparsification context, even though they do not
  themselves state the quotient-blockade lemmas.
- The `5`-hole paper supplies the earlier pure-blockade and pattern-graph
  background that the quotient construction is extending.
- The target paper supplies the exact mixed-block reachability relation,
  quotient blockade, and Lemmas `6.1-6.2`.

## Known limits and step-5 risks

- The forest strong theorem is the one page-409 item whose eventual authored
  proof may still need the most care. The source endpoint is clear, but a full
  on-page reconstruction of the blockade / rainbow-tree argument would be much
  longer than the present scaffold. If step 5 insists on internalizing every
  proof ingredient instead of using a recorded theorem boundary, page `409`
  will need expansion rather than compression.
- Page `435` is structurally clean, but its authored examples must be chosen
  with care: they need to witness mixedness, quotienting, and the Lemma `6.2`
  reduction without accidentally smuggling in later `co-E`-specific structure.

## Validation checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-21-batch-10.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-21-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-10.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-10.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-21-batch-10.coverage.json --out /tmp/frontier-21-batch-10-url-liveness.json --recover --fail-on-dead
```

Results are appended below after execution.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-21-batch-10.coverage.json`
  passed on Thursday, August 27, 2026:
  `coverage-checklist: 2 page(s), 33 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-*.pages.json`
  passed:
  `content-policy: 364 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Thursday, August 27, 2026. The visible output remained the
  repository-wide `redundant-prereq` notes outside this batch, and ended with:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 432 page(s) with item lists.`

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-10.coverage.json --stamp`
  failed for all eight source URLs with the same resolver error `EAI_AGAIN`.
  Exact failing citations:
  - `https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf`
  - `https://arxiv.org/pdf/1303.5205`
  - `https://arxiv.org/pdf/1809.00919`
  - `https://arxiv.org/pdf/2307.06455`
  - `https://arxiv.org/html/2606.06258v2`
  - `https://web.math.princeton.edu/~tunghn/ehnotes.pdf`
  - `https://arxiv.org/html/2102.04994v1`
  - `https://arxiv.org/html/2606.06258v2`

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-10.coverage.json`
  then failed, correctly, because no `fetch_verified` stamps exist after the
  resolver failure.

- `node tools/url-sweep.mjs --coverage research/frontier-21-batch-10.coverage.json --out /tmp/frontier-21-batch-10-url-liveness.json --recover --fail-on-dead`
  failed `0/7` live. Every failure was the same DNS-level error
  `curl: (6) Could not resolve host`, with no archive recovery. The receipt was
  still written to `/tmp/frontier-21-batch-10-url-liveness.json`.

What was verified despite the shell-side source gate blocker:

- Every recorded source URL was actually opened through the web research
  channel in this dispatch before I wrote its locator and contents rows.
- I did not fabricate any `fetch_verified` stamps.
- The fetch and liveness failures are host-resolution wide in this shell, not
  source-specific dead-link findings. That is why I left the URLs themselves
  unchanged and recorded the failure mode here instead of replacing the
  citations with lower-quality alternates.

---

## Reharvest addendum for the path-antipath source

Date: Thursday, August 27, 2026.

Batch-10 scope check:

- `research/frontier-21-reharvest-plan.json` has **no** `work[]` row for
  `research/frontier-21-batch-10.coverage.json`. This dispatch therefore did
  not have an orphaned-result replacement assignment of the same kind as
  batches `1`, `4`, `6`, or `9`.
- The batch did still have one mechanical source defect on current disk:
  `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-10.coverage.json`
  reported `7/8` fetch-verified sources, with the only unstamped row being the
  Bousquet-Lagoutte-Thomassé path/antipath source.

Same-document recovery and repair:

- The old source URL
  `https://arxiv.org/pdf/1303.5205`
  is live in the web reader but serves only a **3-page PDF**, so it fails the
  repository's full-text fetch rule for a citable treatment.
- Before changing treatments, I checked other same-document routes. The HAL
  landing page `https://hal.science/hal-01134469v1` and direct document route
  `https://hal.science/hal-01134469v1/document` are both blocked by Anubis
  access control, and direct open of the ScienceDirect article URL
  `https://www.sciencedirect.com/science/article/pii/S0095895615000027`
  returned `403 Forbidden` in the research browser.
- The same document is openable at
  `https://arxiv.org/html/1303.5205v3`, whose HTML text carries Theorem `1`,
  Theorem `2`, Lemma `3`, and Theorem `4`. Coverage now cites that live
  same-document HTML rendering, preserves the old PDF route as `original_url`,
  and updates the locator from PDF pages to HTML lines `33-89`.

Affected harvested results:

- `Theorem 1` remains `deferred` to
  `sparse-restricted-subgraphs-and-rodl-nikiforov`.
- `Theorem 2` remains `included` for
  `thm-strong-erdos-hajnal-property-implies-erdos-hajnal-property`.
- `Lemma 3` remains `inline` for
  `thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property`.
- `Theorem 4` remains `included` for
  `thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property`.

Claim-constraint changes:

- No page item, dependency, or disposition changed.
- The only change is source-side provenance and locator precision for the
  existing path/antipath source row.

Validator reruns from the repaired batch state:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-21-batch-10.coverage.json`
  passed:
  `coverage-checklist: 2 page(s), 33 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/source-backing.mjs --coverage research/frontier-21-batch-10.coverage.json --liveness research/frontier-21-url-liveness.json`
  passed:
  `source-backing: 16 authored result(s) across 1 file(s), every one still backed by an openable source`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-10.coverage.json --stamp`
  failed on the new HTML URL with shell-side DNS error `EAI_AGAIN`, so no new
  stamp could be written:
  `source-fetch-check: 7/8 source(s) fetch-verified (0 newly stamped), 1 FAILED`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-10.coverage.json`
  correspondingly fails on current disk only because the repaired HTML URL is
  still unstamped:
  `source-fetch-check: 7/8 source(s) fetch-verified, 1 FAILED`.

- `node tools/url-sweep.mjs --coverage research/frontier-21-batch-10.coverage.json --out /tmp/frontier-21-batch-10-url-liveness.json --recover --fail-on-dead`
  failed `0/7` live, with every URL failing the same runner-wide DNS error
  `curl: (6) Could not resolve host`; the artifact was still written to
  `/tmp/frontier-21-batch-10-url-liveness.json`.

Current state:

- The batch coverage is repaired to a live same-document full-text URL for the
  path/antipath source.
- The batch notes now distinguish the genuine source-row repair from the
  runner-wide DNS failures of the shell validators.
- The remaining unresolved gate is mechanical: this runner could not fetch and
  stamp the new HTML body, even though the web reader opened it and the
  run-wide liveness ledger still shows the batch's authored results as backed.

## Step-3 fix pass

Worked from `research/frontier-21-alpha-d-step3-scaffold-review.md` and the
current scope receipt `research/frontier-21-alpha-d-scope-decisions.json`.

- `B10-1` — explicit pushback on a source-row repair that would overclaim the
  available evidence. Evidence: I reopened and checked three live qualifying-form
  candidates before deciding not to mutate the batch coverage dishonestly.
  1. Valerio Boncompagni, *On hereditary graph classes defined by forbidding
     Truemper configurations: recognition and combinatorial optimization
     algorithms, and χ-boundedness results* — White Rose eTheses landing page
     `https://etheses.whiterose.ac.uk/id/eprint/23386/` and full thesis PDF
     `https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf`. Exact ranges
     read: landing-page metadata and download block; thesis contents page
     `Contents` and Chapter 1 `Introduction` plus the Chapter 2.2.1 path
     definition. This is a genuine monograph, but the verified text I could read
     is hereditary-class, clique/stable-set, and path vocabulary, not the
     page-409 pure-pair / forest / path-antipath / leaf/co-leaf route.
  2. Tero Harju, *Lecture Notes on GRAPH THEORY* — course page
     `https://users.utu.fi/harju/graphtheory/graphs2011.htm` and full PDF
     `https://users.utu.fi/harju/graphtheory/graphtheory.pdf`. Exact ranges
     read: course page lines 2-17 naming the notes and PDF link; the notes'
     table of contents on PDF p. 1 and the opening introduction on PDF pp. 2-4.
     This is a genuine lecture-note set, but the verified range stays at general
     graph-theory topics and still does not cover the page-409 pure-pair route.
  3. Sophie Spirkl's research page
     `https://sites.google.com/site/sophiespirkl/research` and Princeton
     DataSpace search result
     `https://dataspace.princeton.edu/handle/88435/dsp01td96k251d/simple-search?etal=0&filter_field_1=subject&filter_type_1=equals&filter_value_1=Mathematics&order=desc&query=&rpp=10&sort_by=score&start=160`
     both show the thesis *Cliques, stable sets, and coloring in graphs with
     forbidden induced subgraphs* as a plausible route-specific candidate. But
     the thesis body itself remains inaccessible here: the research-page link is
     only an unfetchable Google-Drive target in this toolchain, and the
     repository copy is behind an interactive verification wall. Under the
     dispatch's URL discipline I cannot add a source row or headings for unread
     content.
  Changed scaffold record: this notes file only. I am explicitly refusing to add
  a non-route-specific or unread source to
  `research/frontier-21-batch-10.coverage.json`, so Alpha's blocker remains open
  on current disk.
- `coverage-checklist --require-destination` — pass on Thursday, August 27,
  2026:
  `coverage-checklist: 2 page(s), 33 harvested result(s), 0 error(s), 0 warning(s)`.
- `content-policy --manifest-only research/frontier-21-batch-{1..10}.pages.json`
  — pass on Thursday, August 27, 2026:
  `content-policy: 433 scoped item(s), 0 error(s), 0 warning(s)`.
- `validate-plan research/plan-spec.json` — pass on Thursday, August 27, 2026.
  The validator still emits only the repository-wide `redundant-prereq`
  advisories outside this batch and ends with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 432 page(s) with item lists.
  ```

## Scaffold-fix round

Date: Thursday, August 27, 2026.

- `B10-1` — `applied`.
  Evidence: I reread Tung H. Nguyen, *Notes on Recent Work on the
  Erdős-Hajnal Conjecture*, at the exact ranges now recorded in
  `research/frontier-21-batch-10.coverage.json`: Exercise `1.1` in §1
  (pdf pp. `2-3`; extracted lines `105-113`), Theorems `2.2` and `2.5` in §2
  (pdf pp. `5-6`; extracted lines `350-358` and `473-500`), and Theorem `3.4`
  in §3 (pdf pp. `7-8`; extracted lines `747-767`). This source is a full
  lecture-note treatment with named sections and a harvestable internal
  structure, and the verified text is now specific enough to page `409`'s
  accepted route.
  Change: added a new `lecture-notes` row to
  `research/frontier-21-batch-10.coverage.json` for
  `pure-pairs-forests-and-path-antipath-classes`, with two `included`
  Exercise `1.1` harvests mapped to the existing cograph-bridge items
  `thm-nontrivial-p-four-free-graphs-are-disconnected-or-their-complements-are-disconnected`
  and
  `cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order`,
  and three honestly `deferred` harvests (`Theorems 2.2, 2.5, 3.4`) routed to
  `classical-and-loglog-erdos-hajnal-bounds`. No page item, dependency, or
  page split changed, so `research/frontier-21-batch-10.pages.json` remains
  correct on current bytes.

- `node tools/coverage-checklist.mjs --require-destination research/frontier-21-batch-10.coverage.json`
  — rerun pass on Thursday, August 27, 2026:
  `coverage-checklist: 2 page(s), 38 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-*.pages.json`
  — rerun pass on Thursday, August 27, 2026:
  `content-policy: 433 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  — rerun pass on Thursday, August 27, 2026, again with only the standing
  repository-wide `redundant-prereq` advisories outside this batch, ending:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 432 page(s) with item lists.`

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-10.coverage.json`
  — additional confirmation pass on Thursday, August 27, 2026:
  `source-fetch-check: 9/9 source(s) fetch-verified`.

## Step-5 authoring

Date: Thursday, August 27, 2026.

Authored draft page files:

- `library/combinatorics/pure-pairs-forests-and-path-antipath-classes.md`
- `library/combinatorics/pure-pairs-forests-and-path-antipath-classes-examples.md`
- `library/combinatorics/quotient-blockades-and-mixing-relations.md`
- `library/combinatorics/quotient-blockades-and-mixing-relations-examples.md`

Authored item ids on current disk:

- Page `409`: `def-strong-erdos-hajnal-property-for-a-hereditary-class`, `thm-nontrivial-p-four-free-graphs-are-disconnected-or-their-complements-are-disconnected`, `cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order`, `thm-strong-erdos-hajnal-property-implies-erdos-hajnal-property`, `thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property`, `cor-path-and-antipath-free-graphs-have-the-erdos-hajnal-property`, `def-coleaf-of-a-graph`.
- Page `410`: `ex-the-path-antipath-theorem-specialized-to-the-five-vertex-path`, `ex-a-coleaf-is-a-leaf-in-the-complement-of-the-five-vertex-path`.
- Page `435`: `def-mixed-block-reachability-relation-on-a-blockade`, `lem-mixed-block-reachability-is-an-equivalence-relation`, `def-quotient-blockade-by-mixed-block-reachability`, `lem-quotient-blocks-preserve-connectedness-and-anticonnectedness`, `lem-blocks-from-different-mixed-block-classes-form-pure-pairs`, `lem-a-vertex-mixed-on-a-quotient-block-yields-opposite-adjacency-on-two-member-blocks`, `lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks`.
- Page `436`: `cex-mixedness-of-blocks-is-not-transitive`, `ex-a-mixed-chain-collapses-to-one-quotient-block`, `ex-a-vertex-can-be-mixed-on-a-quotient-block-while-pure-on-each-member-block`, `ex-the-quotient-witness-reduction-in-a-four-block-configuration`.

Contract artifact created:

- `research/frontier-21-batch-10.proof-contracts.json`

Provenance rationale used in the authored scope:

- The cograph, strong-EH, path-antipath, and quotient-blockade statements are source-backed and are tagged `literature-derived` or `ai-altered` exactly where the on-page wording is a sourced restatement.
- Their local proofs are tagged `ai-generated`, because the proofs written here are fresh reconstructions using the existing library dependencies and direct graph arguments.
- The B-page witness items I authored are tagged `ai-generated` with the required `generation.role`, and I kept them non-load-bearing: none of them is used as a dependency target.

Narrowed or dropped authoring scope:

- I did not author the nine still-planned items `thm-erdos-hajnal-pach-pure-pair-theorem`, `thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex`, `thm-forest-and-complement-free-graphs-have-the-strong-erdos-hajnal-property`, `cor-forest-and-complement-free-graphs-have-the-erdos-hajnal-property`, `thm-leaf-deletion-preserves-virality-of-a-finite-family`, `thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family`, `cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property`, `ex-the-forest-theorem-specialized-to-the-four-vertex-path`, and `ex-the-leaf-coleaf-corollary-recovers-the-five-vertex-path-case-from-the-four-vertex-path-case`.
- I therefore kept the authored page-409 and page-410 library files partial: they list only the items actually proved or verified on current disk, while the batch manifest still records the full planned scope.

Blockers:

- The omitted page-409 pure-pair, forest, and leaf-deletion results do not have an honest internal proof route from earlier published library material on current disk.
- In particular, the current earlier pages do not yet internalize the Erdős-Hajnal-Pach candidate-set pure-pair theorem, the `Pure pairs. I` forest machinery, or the Nguyen-Scott-Seymour leaf-deletion virality theorem in a form I could cite as library dependencies.
- I did not replace those missing proofs with source-theorem placeholders or recorded-not-proved stand-ins, because that would violate the step-5 proof contract and the schema's item-kind rules.

Checks run on Thursday, August 27, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts ...` over the 16 proof-bearing authored items: pass, `16 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/frontier-21-batch-10.proof-contracts.json --strict`: pass, `0 error(s), 0 warning(s), 16/16 item(s) checked`.
- `node tools/boundary-audit.mjs research/frontier-21-batch-10.proof-contracts.json --fail-on-contradicted --fail-on-template`: pass, `128` boundary rows, `97` marked `not_applicable`, no template cluster and no contradicted disposition.
- `node tools/validate-plan.mjs research/plan-spec.json`: pass; ends `OK — declared page order is acyclic and consistent...` and currently reports `460 page(s) with item lists`.
- `node tools/content-policy.mjs research/frontier-21-batch-10.pages.json`: fail, exactly `9` `scope-item-missing` errors, one for each blocked item listed above, and no additional warnings.
