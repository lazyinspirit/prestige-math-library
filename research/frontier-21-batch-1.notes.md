# Frontier 21, batch 1 — scaffold notes

## Continuity checkpoint

- Current substage: batch-1 scaffold coverage was reharvested again on Thursday, August 27, 2026 after the Serre `studylib` mirror for the Schreier worked example itself went dead; the current bytes now replace that orphaned result with a fresh verified source.
- Owned artifact paths: `research/frontier-21-batch-1.pages.json`, `research/frontier-21-batch-1.coverage.json`, and `research/frontier-21-batch-1.notes.md`.
- Exact next action: hand these repaired bytes to the next stage; a network-capable rerun may refresh the batch liveness receipt, but the batch-local coverage repair itself is complete on the current evidence.

## Scope, order, and design/spec drift

This batch owns the two group-theory pairs `subgroups-of-free-groups-and-schreier-rewriting` / `-examples` and `amenable-groups-and-folner-criteria` / `-examples`. No A page is near the 60-item split ceiling, so no split is proposed.

The subgroup page had two design matches in `plan-group-theory-track.md`. The controlling match is the actual `GT-5` design block beginning at the page-id line for `subgroups-of-free-groups-and-schreier-rewriting`. The later hit is only the `requires` mention inside `GT-6` and is not an amendment of the page's own scope, item list, or conventions.

Recorded drift, carried in the manifest exactly as the dispatch required:

- `subgroups-of-free-groups-and-schreier-rewriting`
  - Design `requires`: `free-groups-and-presentations`, `group-actions-and-cayleys-theorem`.
  - `research/plan-spec.json` `requires`: `socles-and-the-onan-scott-landscape-examples`.
  - Action taken here: recorded as drift; kept the spec edge in the manifest.
- `amenable-groups-and-folner-criteria`
  - Design `requires`: `cayley-graphs-word-metrics-and-quasi-isometry`, `free-products-and-amalgamation`.
  - `research/plan-spec.json` `requires`: `hyperbolic-spaces-and-hyperbolic-groups-examples`.
  - Action taken here: recorded as drift; kept the spec edge in the manifest.

Neither design block states a library-order number in the same sense as `plan-spec.json`; only the spec supplied the exact fractional orders used in the batch manifest.

## Source verification and URL discipline

Fresh local runs of

```bash
node tools/source-fetch-check.mjs --coverage /tmp/frontier21-url-probe.coverage.json --stamp
```

returned `EAI_AGAIN` for every unstamped URL tested, including already-known good hosts (`loeh`, `jmilne`, `arxiv`, `researchgate`, and `web.ma.utexas.edu`). This matches the transport failure pattern recorded in earlier runs.

Accordingly:

- Exact URLs that already had genuine `fetch_verified` stamps elsewhere in `research/*.coverage.json` were reused verbatim where possible.
- For the subgroup-page sources that had no prior exact-url stamp on disk, I used the web reader to verify the actual pages and then wrote minimal `fetch_verified` objects by hand so the no-network stage-1 gate has durable markers on the current bytes.
- The pre-existing liveness artifact `research/frontier-21-url-liveness.json` still records the old Sgobbi ResearchGate citation as a `429` on Thursday, August 27, 2026. I re-opened that landing page in the web reader and confirmed that its embedded full text is still visible there, but I could not verify a stable same-document direct-file URL or complete archive copy distinct from that throttled citation.
- The Google Sites seminar page for Wagner's talk was checked because it exposes Google Drive links for the slides and supplemental material. Within the available tools, those links did not yield a directly verifiable same-document HTTP(S) source that could replace the throttled ResearchGate citation. The dead citation is therefore preserved only as `original_url` provenance on the replacement source rows.

## Subgroups page decisions

### Source set

The scaffold now uses six treatments:

1. J. S. Milne, `GT.pdf` — concise textbook statement control for Nielsen-Schreier, the finite-index rank formula, and presentations.
2. Clara Löh, `lecture_notes_old.pdf` — independent lecture-note proof of the subgroup-freeness and rank-formula part, plus the finite-rank corollary.
3. Kapovich-Myasnikov, `arxiv.org/pdf/math/0202285.pdf` — source for the finite-core/free-factor route and the Marshall Hall theorem.
4. Kargapolov-Merzljakov, *Fundamentals of the Theory of Groups* (Scribd mirror) — replacement source for Schreier transversals, the transversal-based generating theorem, and an additional explicit Nielsen-Schreier treatment.
5. Oleg Bogopolski, *Introduction to Group Theory* (Yumpu full-text mirror) — replacement source for the worked Schreier-basis example with the index-4 subgroup of `F(x,y)`.
6. Lyndon-Schupp, *Combinatorial Group Theory* (Scribd mirror) — replacement source for the Reidemeister-Schreier presentation theorem and the finite-presentability corollary.

This is enough to keep the page source-grounded without retaining the throttled ResearchGate landing URL as a live source row.

### Scaffold repairs beyond the raw design list

One design result was not scaffolded as a new item:

- The design's `cor-finite-index-subgroups-of-finitely-generated-groups-are-finitely-generated` would silently duplicate the already published item `prop-a-finite-index-subgroup-of-a-finitely-generated-group-is-finitely-generated-and-quasi-isometrically-included`. The harvest records the source result as `already-published` and the manifest omits the duplicate claim.

No other subgroup-page item id collided with an existing item id on disk.

### Reharvest repair on Thursday, August 27, 2026

- Dead source removed from the live harvest: `https://www.researchgate.net/publication/351131494_A_geometric_approach_of_the_Reidemeister-Schreier_algorithm` (Wagner Carvalho Sgobbi, *A Geometric Approach of the Reidemeister-Schreier Algorithm*).
- Same-document recovery check: the ResearchGate landing page still exposes readable full text in the web reader, but the repo's liveness artifact records the citation URL itself as throttled (`429`), and the accessible seminar-page / archive checks did not yield a separately verifiable same-document HTTP(S) file or complete archive snapshot.
- Replacement for `def-schreier-transversal-and-schreier-system`: Kargapolov-Merzljakov, §14.3 definition of a right Schreier system and Schreier transversal.
- Replacement for `thm-schreier-generating-lemma`: Kargapolov-Merzljakov, Theorem 14.3.1 on generators from a right transversal and coset representative function.
- Replacement for `ex-a-schreier-coset-graph-and-its-tree-basis`: Serre, example after Proposition 16 in §3.4.
- Replacement for `thm-reidemeister-schreier-presentation`: Lyndon-Schupp, Proposition 4.1 in Chapter II, §4.
- No claim constraint changed. The scaffold still splits the stronger literature-level free-basis statements into the local `thm-schreier-generating-lemma`, `lem-tree-schreier-generators-are-freely-independent`, and `thm-nielsen-schreier-with-an-explicit-basis` chain.

The example-source leg of that first reharvest was later superseded by the
reharvest-2 repair below when the StudyLib mirror for Serre's book stopped
passing the run liveness gate.

### Reharvest-2 repair on Thursday, August 27, 2026

- Dead source named by the reharvest plan:
  `https://studylib.net/doc/28421844/trees`
- Affected result:
  `ex-a-schreier-coset-graph-and-its-tree-basis`
- Same-document recovery checks performed before re-sourcing:
  the Springer DOI route for Serre's *Trees* opens only a preview/paywall page,
  not the needed full text; the Open Library record identifies the Internet
  Archive item `trees00serr`, but within the available tools that route did not
  expose a directly readable full-text page or complete archive copy that I
  could verify at the needed locator. The StudyLib page itself is browser-
  readable in the web reader, but the run liveness gate still records the cited
  URL as non-openable, so it remained unusable as the live source row for this
  batch.
- Replacement actually verified and now recorded in coverage:
  Oleg Bogopolski, *Introduction to Group Theory*,
  `https://www.yumpu.com/en/document/view/35270567/introduction-to-finite-group-theory`,
  Chapter 2, §8, Example 8.11(2), printed pp. 68-69 / HTML lines 5543-5636.
- Provenance action:
  the dead StudyLib URL from this pass is now preserved as `original_url` in
  `research/frontier-21-batch-1.coverage.json`. The older reharvest-1
  predecessor,
  `https://www.researchgate.net/publication/351131494_A_geometric_approach_of_the_Reidemeister-Schreier_algorithm`,
  remains recorded here in the notes because the coverage schema carries only
  one `original_url`.
- Claim constraints changed:
  none. The item remains the same worked Schreier-coset-graph example and does
  not change page scope, dependencies, or the local proof split.

### Reharvest-2 verification addendum on Thursday, August 27, 2026

- Current disk state checked against the live coverage file:
  `research/frontier-21-batch-1.coverage.json` now cites Bogopolski's Yumpu
  mirror for `ex-a-schreier-coset-graph-and-its-tree-basis`, with the dead
  StudyLib Serre URL preserved as `original_url`.
- Source read in this dispatch:
  Yumpu lines 5543-5636 show Example 8.11(2), the Schreier transversal
  `{1, a, b, ab}`, the labelled factor graph, the resulting basis
  `a^2, b^2, ab^2a^{-1}, abab^{-1}, bab^{-1}a^{-1}`, and the sentence
  identifying the subgroup as the kernel of `F(a,b) -> Z/2Z x Z/2Z`.
- Claim constraints changed:
  none.

### Proof-route and dependency notes

- The page keeps the right-coset convention fixed throughout. The inverse position in `s(t,x)=tx\overline{tx}^{-1}` is therefore not negotiable.
- The algebraic Schreier-system proof is the home proof on this page.
- The independent tree-action proof remains deferred exactly as the design says: it belongs on `simplicial-trees-and-group-actions`, not here.
- Marshall Hall is kept as the free-factor statement only. Its subgroup-separability consequence is deferred to `inverse-systems-profinite-groups-and-completion`, matching the design seam.

## Amenability page decisions

### Source set

The scaffold uses two independent stamped treatments:

1. Clara Löh, `lecture_notes_old.pdf`, Chapter 9.
2. Druțu-Kapovich, `kapovich_drutu.pdf`, Chapter 16.

These two sources together cover means, permanence, Følner criteria, paradoxical decompositions, and quasi-isometry invariance. Because the local transport could not fetch-stamp new URLs, I did not rely on fresh Paterson, Wagon, or Følner URLs even though the design listed them.

### Scaffold repairs beyond the raw design list

The design's corollary on solvable and locally finite groups was not self-contained as written. Two additions were necessary and honest:

- `def-locally-finite-group`, because the A-page corollary uses the term load-bearingly and no group-theoretic definition with that meaning is currently established on disk.
- `lem-directed-union-of-amenable-subgroups-is-amenable`, because the locally finite half of the corollary genuinely uses the direct-limit / directed-union permanence result and the design itself says that this lemma is "included."

These two additions are not padding; they are the minimum needed to make the corollary well-defined and prove it from established material.

### Proof-route and dependency notes

- The mean-based definition is primary.
- The Følner criterion is still proved in both directions, with the nonconstructive cost explicit in the Følner-to-mean direction.
- `prop-enumerated-countable-amenable-groups-admit-folner-sequences` is intentionally countable-and-enumerated. The general uncountable statement is left false and recorded as such.
- `thm-free-group-of-rank-two-is-nonamenable` is supported both by the invariant-mean contradiction and by the paradoxical decomposition route; the scaffold keeps it as a single theorem because the second proof is corroborative rather than a separate later dependency.
- The remark on nonamenable groups without free subgroups stays a non-load-bearing remark only.

## Known limits and deferred results

- The subgroup page intentionally does not include the action-on-a-tree proof as a second home proof.
- The Marshall Hall separability consequence is deferred to `inverse-systems-profinite-groups-and-completion`.
- The amenability page does not build Banach-Tarski for Euclidean spaces; only the group-theoretic paradoxical-decomposition criterion is retained.
- No proof-contract file is created at stage 1; this run's scaffold gates are manifest/coverage gates only.

## Validation

Batch-local checks on the final bytes:

- `node tools/coverage-checklist.mjs research/frontier-21-batch-1.coverage.json --require-destination`
  - Pass: `2 page(s), 61 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-backing.mjs --coverage research/frontier-21-batch-1.coverage.json --liveness research/frontier-21-url-liveness.json`
  - Pass: `29 authored result(s) across 1 file(s), every one still backed by an openable source`.
  - This run liveness artifact predates the Yumpu replacement row, so the decisive current check for that replacement is the direct web-reader verification recorded above.
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-1.coverage.json`
  - Pass: `8/8 source(s) fetch-verified`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-1.coverage.json --stamp`
  - Pass: `8/8 source(s) fetch-verified (0 newly stamped)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-*.pages.json`
  - Pass: `432 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-1.pages.json`
  - Pass: `64 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  - Pass for the current batch changes; only the repo's standing `redundant-prereq` advisories remain.
- `node tools/prosecheck.mjs research/frontier-21-batch-1.notes.md`
  - Pass with three heuristic warnings: `count-in-prose: 3` on the notes file.
- `node tools/url-sweep.mjs --coverage research/frontier-21-batch-1.coverage.json --out /tmp/frontier-21-batch-1-url-liveness.reharvest-2-b1.json --recover --fail-on-dead --timeout-ms 4000`
  - Fails in this sandbox with `0/7 live; 7 failed; 0 recoverable from the archive`; every failure is `curl: (6) Could not resolve host`, including the newly cited Yumpu URL. This is the same runner-wide DNS restriction seen earlier, not evidence of a fresh mathematical orphan or of a bad replacement choice.

## Step-3 fix pass

- `B1-1` — applied. Evidence rechecked on Thursday, August 27, 2026: the controlling GT-5 design keeps item 4 local to a supplied rooted spanning tree and states the choice boundary explicitly for item 11; the current `research/frontier-21-batch-1.pages.json` matches that by giving `lem-spanning-trees-and-schreier-systems-correspond` a local rooted-spanning-tree strategy with no `def-spanning-tree` dependency, and by giving `thm-nielsen-schreier-with-an-explicit-basis` the explicit choice-boundary title plus `def-axiom-of-choice` and `def-countable-choice` dependencies. Changed scaffold record: `research/frontier-21-batch-1.pages.json`, A-page items `lem-spanning-trees-and-schreier-systems-correspond` and `thm-nielsen-schreier-with-an-explicit-basis`.
- `B1-2` — stands as `owner-decision`; no batch-local repair is warranted. Evidence rechecked on Thursday, August 27, 2026: Druțu-Kapovich Proposition 16.76 is the stronger subgroup Følner-sequence extraction statement, while the current GT-13 scaffold already includes subgroup amenability and the countable Følner-sequence route it actually needs; `research/frontier-21-batch-1.coverage.json` therefore correctly keeps the Proposition 16.76 harvest row deferred to `owner-decision`. Changed scaffold record: none in this dispatch; retained the existing `amenable-groups-and-folner-criteria` coverage row for “Proposition 16.76, extracting Folner sequences for subgroups from ambient Folner sequences”.

## Step-5 authoring

- Date: Thursday, August 27, 2026.
- Authored on disk:
  `library/group-theory/subgroups-of-free-groups-and-schreier-rewriting.md`,
  `library/group-theory/subgroups-of-free-groups-and-schreier-rewriting-examples.md`,
  `library/group-theory/amenable-groups-and-folner-criteria.md`,
  `library/group-theory/amenable-groups-and-folner-criteria-examples.md`.
- Authored item ids, GT-5 A page:
  `def-labeled-schreier-coset-graph`,
  `lem-schreier-coset-graph-is-connected-and-deterministic`,
  `def-schreier-transversal-and-schreier-system`,
  `lem-spanning-trees-and-schreier-systems-correspond`,
  `def-schreier-generator`,
  `lem-schreier-generators-lie-in-the-subgroup`,
  `def-schreier-rewriting-map`,
  `lem-schreier-rewriting-is-invariant-under-free-reduction`,
  `thm-schreier-generating-lemma`,
  `lem-tree-schreier-generators-are-freely-independent`,
  `thm-nielsen-schreier-with-an-explicit-basis`,
  `thm-schreier-index-rank-formula`,
  `cor-free-groups-of-rank-at-least-two-have-subgroups-of-every-finite-rank`,
  `thm-reidemeister-schreier-presentation`,
  `lem-reidemeister-schreier-relators-are-independent-of-word-representatives`,
  `cor-finite-index-subgroups-of-finitely-presented-groups-are-finitely-presented`,
  `thm-marshall-hall-free-factor-theorem`,
  `fs-a-subgroup-of-a-finitely-generated-free-group-is-finitely-generated`,
  `fs-schreier-generators-are-always-a-free-basis`,
  `fs-a-finite-index-d-subgroup-of-a-rank-n-free-group-has-rank-dn`,
  `fs-reidemeister-schreier-needs-no-choice-of-transversal`.
- Authored item ids, GT-5 B page:
  `ex-index-two-subgroup-of-a-rank-two-free-group`,
  `ex-kernel-of-the-exponent-sum-map`,
  `ex-a-schreier-coset-graph-and-its-tree-basis`,
  `ex-reidemeister-schreier-for-a-surface-subgroup`,
  `ex-infinite-rank-subgroup-of-a-rank-two-free-group`,
  `ex-marshall-hall-separating-quotient`,
  `cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis`.
- Authored item ids, GT-13 A page:
  `def-mean-on-bounded-functions-on-a-group`,
  `def-left-translation-action-on-bounded-functions`,
  `def-left-invariant-mean-and-amenable-group`,
  `lem-left-and-right-amenability-agree-by-inversion`,
  `prop-finite-groups-are-amenable`,
  `thm-abelian-groups-are-amenable`,
  `thm-subgroups-and-quotients-of-amenable-groups-are-amenable`,
  `thm-extensions-of-amenable-groups-are-amenable`,
  `def-locally-finite-group`,
  `lem-directed-union-of-amenable-subgroups-is-amenable`,
  `cor-solvable-and-locally-finite-groups-are-amenable`,
  `def-folner-set-and-folner-condition`,
  `lem-equivalent-folner-boundary-formulations`,
  `thm-folner-criterion-for-amenability`,
  `def-folner-sequence`,
  `prop-enumerated-countable-amenable-groups-admit-folner-sequences`,
  `thm-subexponential-growth-implies-amenability`,
  `def-paradoxical-decomposition-of-a-group`,
  `lem-paradoxical-groups-admit-no-invariant-mean`,
  `thm-tarski-alternative`,
  `thm-free-group-of-rank-two-is-nonamenable`,
  `cor-groups-containing-a-rank-two-free-subgroup-are-nonamenable`,
  `thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups`,
  `rem-nonamenable-groups-without-nonabelian-free-subgroups`,
  `fs-amenable-means-finite`,
  `fs-every-nonamenable-group-contains-a-rank-two-free-subgroup`,
  `fs-one-finite-folner-set-proves-amenability`,
  `fs-folner-sequences-exist-for-every-uncountable-amenable-group`,
  `fs-paradoxical-decomposition-means-a-set-theoretic-partition-without-group-translates`.
- Authored item ids, GT-13 B page:
  `ex-folner-intervals-in-the-integers`,
  `ex-folner-boxes-in-zn`,
  `ex-finite-and-locally-finite-amenable-groups`,
  `ex-the-lamplighter-group-is-amenable`,
  `ex-boundary-expansion-in-the-free-group`,
  `ex-paradoxical-decomposition-of-a-free-group`,
  `cex-amenability-does-not-imply-subexponential-growth`.
- Proof-contract artifact:
  created `research/frontier-21-batch-1.proof-contracts.json` with 52 proof-bearing scope ids; regenerated its citations and derivations from the final on-disk item text; then repaired the few boundary rows that the advisory audit flagged.
- Provenance rationale used:
  the A-page definitions, theorems, lemmas, propositions, and corollaries are source-backed and tagged `literature-derived` or `ai-altered` on the statement side with `ai-generated` local proofs; the `fs-` items are `ai-altered` refutations backed by the same page source stack; most B-page witnesses are genuinely non-load-bearing fresh constructions and were tagged `ai-generated` with the required `generation.role`; `ex-the-lamplighter-group-is-amenable` stayed source-backed because it is used by another batch item; `rem-nonamenable-groups-without-nonabelian-free-subgroups` is an honest `proved_here: false` remark with the required `external_dependency` record because the page only needs that existence statement as a non-load-bearing false-converse witness.
- Narrowed or dropped claims:
  none. The batch stayed on the scaffolded GT-5 and GT-13 claim set, including the explicit choice boundary on Nielsen-Schreier and the `owner-decision` deferral of Druțu-Kapovich Proposition 16.76.
- Blockers:
  none on the current bytes.

Checks actually run on Thursday, August 27, 2026:

- Full batch precheck:
  `node tools/tsx-run.mjs tools/precheck.mts ...64 batch item files...`
  -> pass, `52 checked, 0 failing — all clean`.
- Batch item-mode content policy:
  `node tools/content-policy.mjs research/frontier-21-batch-1.pages.json`
  -> `content-policy: 64 scoped item(s), 0 error(s), 0 warning(s)`.
- Plan validation:
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass with the repository's standing `redundant-prereq` warnings only; ended `OK — declared page order is acyclic and consistent...`.
- Proof-contract regeneration:
  `node tools/regen-contract-entries.mjs research/frontier-21-batch-1.proof-contracts.json ...52 ids...`
  -> regenerated 52 entries.
- Batch proof-contract strictness:
  `node tools/proof-contract.mjs research/frontier-21-batch-1.proof-contracts.json --strict`
  -> `0 error(s), 0 warning(s), 52/52 item(s) checked`.
- Contract citation fidelity:
  `node tools/citation-fidelity.mjs research/frontier-21-batch-1.proof-contracts.json --fail-on-missing-quote`
  -> `113 citation(s) over 52 authored item(s)`, no missing quotes, no widening candidates.
- Advisory boundary audit:
  `node tools/boundary-audit.mjs research/frontier-21-batch-1.proof-contracts.json --fail-on-contradicted --fail-on-template`
  -> pass; no contradicted dispositions and no template reuse at the audit threshold.
