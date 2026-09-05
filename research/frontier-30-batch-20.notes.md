# frontier-30 batch 20 notes - beta scaffold

Owned pair:

- `classical-np-completeness-reductions` /
  `classical-np-completeness-reductions-examples`

Artifacts written in this dispatch:

- `research/frontier-30-batch-20.pages.json`
- `research/frontier-30-batch-20.coverage.json`
- this file

Session date: Saturday, September 5, 2026 (Australia/Sydney).

## Control files and active-run check

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`,
`research/frontier-30-beta-20.task.md`,
`research/frontier-30-dispatch/beta-batch-20.prompt.md`,
`research/plan-spec.json`, and the matched design location in
`research/plan-computability-theory-track.md`.

I also opened the currently published prerequisite material that this scaffold
actually reuses:

- `library/computability-theory/p-np-conp-and-polynomial-reductions.md`
- `library/computability-theory/the-cook-levin-theorem.md`
- `library/combinatorics/graphs-walks-and-connectivity.md`
- `items/def-graph-isomorphism-and-complement.md`
- `items/def-multigraph-loop-and-digraph.md`
- `items/def-worst-case-time-and-space-complexity.md`

I checked the live autopilot state with:

- `cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..`

On current disk that command reports run `frontier-23` in stage `5-author`.
Because workflow state is out of scope and this dispatch explicitly assigns
`frontier-30`, I edited only the three `research/frontier-30-batch-20.*`
scaffold artifacts and did not touch `.autopilot/`.

## Controlling design and design/spec drift

For this pair the cited lines are not rival amendments:

- line `944` starts the full `TC-22` block;
- line `969` is the B-page subheading inside that same block.

I therefore treated the full `TC-22` block beginning at line `944` as the
controlling design text, with line `969` read as part of the same section
rather than as a later conflicting source.

There is no design-vs-spec drift to record for this batch. The controlling
design, `research/plan-spec.json`, and `research/frontier-30-alpha-step0-drift.md`
all agree on:

- A-page id `classical-np-completeness-reductions`
- B-page id `classical-np-completeness-reductions-examples`
- order `623` / `624`
- category `computability-theory`
- declared prerequisite pages `the-cook-levin-theorem` and
  `graphs-walks-and-connectivity`

## Item census and split check

- A page `classical-np-completeness-reductions`: `19` items
- B page `classical-np-completeness-reductions-examples`: `3` items

The A page is well below the `60`-item split ceiling, so no split is needed.

## Route choices and local closure repairs

I kept the TC-22 spine intact but made two local closure repairs because the
current prerequisite closure does not already carry the published definitions
where the present on-disk library homes them.

1. I added
   `def-clique-independent-set-and-vertex-cover-problems`.
   The currently published definitions for clique / independent set and vertex
   cover live on pages outside this pair's declared `requires` closure, so
   relying on them directly would hide a future step-4 prerequisite problem.
   The local definition keeps the page self-contained while preserving the
   design's reduction order.
2. I added `def-directed-hamiltonian-path-and-cycle-problems` for the same
   reason. The existing published Hamiltonian problem definition is on
   `eulerian-and-hamiltonian-graphs`, which is not in this pair's declared
   closure.

Other route decisions:

- I kept `def-reduction-gadget-and-interface-invariant` as the page's opening
  convention item, because the design explicitly wants the reduction proofs to
  be organized around local gadget obligations and resource bounds.
- I did not mint a separate `INDEPENDENT SET is NP-complete` theorem. The
  design wants the clique theorem first and a combined interreduction theorem
  afterward, so the scaffold transfers hardness through that shared theorem and
  packages the complexity conclusions as corollaries.
- I kept `thm-three-sat-reduces-to-subset-sum` direct at the page level, but
  its planned proof composes the earlier page-local 3SAT -> CLIQUE and
  CLIQUE -> INDEPENDENT SET steps with Trevisan's explicit independent-set to
  subset-sum digit encoding.
- I kept `thm-three-sat-reduces-to-three-colourability` as a single theorem and
  planned to inline the standard not-all-equal intermediate inside its proof
  rather than adding a separate NAESAT item, which the design does not budget.
- I kept the design's single Hamiltonian corollary. Its proof plan reuses the
  directed path gadget before adding the closing arc for the cycle theorem, and
  then uses the tripling reduction to pass to the undirected versions.

## Sources actually read

I re-opened the following live sources in the web reader while preparing this
scaffold.

1. Sanjeev Arora and Boaz Barak, *Computational Complexity: A Modern Approach*:
   `https://theory.cs.princeton.edu/complexity/book.pdf`
2. Luca Trevisan and Fabrizio Iozzi, 30540 Computer Science 2 course page:
   `https://lucatrevisan.github.io/30540/index.html`
3. Fabrizio Iozzi and Luca Trevisan, *Handout NP2*:
   `https://lucatrevisan.github.io/30540/notes-np2.pdf`
4. Fabrizio Iozzi and Luca Trevisan, *Handout NP3*:
   `https://lucatrevisan.github.io/30540/notes-np3.pdf`
5. John E. Savage, *Models of Computation*, Chapter 8:
   `https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter8.pdf`
6. MIT 6.045J / 18.400J, *Lecture 16: More NP-completeness*:
   `https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/567d75f927ca3c11a819baee9ab260ac_MIT6_045JS11_lec16.pdf`

This source stack satisfies the standing rule:

- Arora-Barak is the eligible textbook / primary treatment.
- Trevisan's course page plus NP2 / NP3 give an independent lecture-note set
  with a harvestable table of contents.
- Savage independently backs the three-colourability route.
- MIT independently backs the Hamiltonian path / cycle route and the standard
  reduction-web placement of subset sum and partition.

What each source is doing:

- Arora-Barak is the textbook backbone for the clause-cluster
  3SAT-to-independent-set gadget that the page immediately complements into the
  direct 3SAT -> CLIQUE theorem, and for the already-published 3SAT seam.
- Trevisan NP2 supplies the explicit digit-column encoding used for the planned
  subset-sum theorem.
- Trevisan NP3 supplies the clique / independent-set / vertex-cover web, the
  vertex-cover -> set-cover reduction, and the subset-sum -> partition
  construction.
- Savage supplies the not-all-equal and three-colourability route that the
  design's final theorem needs.
- MIT supplies the Hamiltonian path gadget and the directed-to-undirected
  translation pattern.

## URL discipline and fetch receipts

Every recorded URL in `research/frontier-30-batch-20.coverage.json` was opened
through the web reader while preparing this scaffold.

This runner's shell network is restricted, so I could not honestly mint fresh
shell-side byte or hash receipts. Following the truthful convention already
used elsewhere in this repository, every recorded source therefore carries a
manual `fetch_verified` receipt marked `verified_via: web-open`.

No URL substitution or archive recovery was needed at harvest time because each
recorded source opened directly at its canonical URL in the web reader.

## Validation

One coverage fix was required after the first gate run.

- I initially marked two source rows about 3SAT as `already-published`.
  `coverage-checklist` rejected that because the item
  `thm-three-sat-is-np-complete` is not published at item level on current
  disk, even though the prerequisite page is published. I repaired both rows to
  honest `deferred` dispositions with destination `the-cook-levin-theorem`,
  because that seam is owned by the prerequisite page rather than by TC-22.

Final gate results on the repaired bytes:

- `node -e "JSON.parse(...pages.json); JSON.parse(...coverage.json)"` ->
  `json-parse: ok`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-20.coverage.json`
  -> `coverage-checklist: 1 page(s), 32 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-20.coverage.json`
  -> `source-fetch-check: 6/6 source(s) fetch-verified`

  -> `source-fetch-check: 6/6 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  -> `content-policy: 243 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`; final line
  `OK -- declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.`
- `git diff --check`
  -> clean

`validate-plan` still emits the repository's standing `redundant-prereq`
advisories, including the known advisory that
`classical-np-completeness-reductions` lists `graphs-walks-and-connectivity`
directly even though the same page is already reached through
`the-cook-levin-theorem`. I did not adjudicate that inside this batch because
the design and the spec both keep the direct edge.

Blocked locally:

- `node tools/url-sweep.mjs --coverage research/frontier-30-batch-20.coverage.json --out /tmp/frontier-30-batch-20.url-sweep.json --recover --fail-on-dead`
  -> `url-sweep: 0/6 live; 6 failed; 0 recoverable from the archive; 0 suspect`

Exact failure mode on this runner:

- `https://theory.cs.princeton.edu/complexity/book.pdf`
  -> `curl: (6) Could not resolve host: theory.cs.princeton.edu`
- `https://lucatrevisan.github.io/30540/index.html`
  -> `curl: (6) Could not resolve host: lucatrevisan.github.io`
- `https://lucatrevisan.github.io/30540/notes-np2.pdf`
  -> `curl: (6) Could not resolve host: lucatrevisan.github.io`
- `https://lucatrevisan.github.io/30540/notes-np3.pdf`
  -> `curl: (6) Could not resolve host: lucatrevisan.github.io`
- `https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter8.pdf`
  -> `curl: (6) Could not resolve host: cs.brown.edu`
- `https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/567d75f927ca3c11a819baee9ab260ac_MIT6_045JS11_lec16.pdf`
  -> `curl: (6) Could not resolve host: ocw.mit.edu`

`url-sweep --recover` found no archive copies from this runner. Because all six
URLs were nevertheless opened successfully in the web reader during this
dispatch, this is a runner-local DNS / network blocker rather than evidence
that the sources are dead or need re-sourcing.

## Step-3 fix pass

I re-read the stable alpha review in
`research/frontier-30-alpha-f-step3-scaffold-review.md` on Saturday,
September 5, 2026 (Australia/Sydney). That review records two finding ids,
both scoped to batch `19`, and its TC-22 page review states that
`classical-np-completeness-reductions` is already sufficient on current bytes.

- finding id: `B19-1`
  disposition: pushed back as out of scope for batch `20`
  evidence: the stable review identifies `B19-1` as a repaired missing
  backward prerequisite on batch `19`
  `post-correspondence-and-language-undecidability`, already applied in
  `research/frontier-30-batch-19.pages.json` and
  `research/frontier-30-batch-19.notes.md`. The same review's TC-22 section
  says "Beta's local closure repairs already make the page self-contained"
  for `classical-np-completeness-reductions`.
  changed scaffold record: no batch-20 manifest or coverage change; this notes
  receipt only

- finding id: `B19-2`
  disposition: pushed back as out of scope for batch `20`
  evidence: the stable review identifies `B19-2` as an owner-level forward
  dependency inside batch `19`
  `post-correspondence-and-language-undecidability`, not a TC-22 defect. The
  controlling TC-22 design block still states `Forward references: NONE`, the
  alpha review marks `classical-np-completeness-reductions` `sufficient`, and
  the current `node tools/validate-plan.mjs research/plan-spec.json` run still
  ends in `OK`.
  changed scaffold record: no batch-20 manifest or coverage change; this notes
  receipt only

Fresh evidence on current bytes:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-20.coverage.json`
  -> `coverage-checklist: 1 page(s), 32 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-20.coverage.json`
  -> `source-fetch-check: 6/6 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  -> `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`; final line
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.`

I also re-opened all six URLs recorded in
`research/frontier-30-batch-20.coverage.json` through the web reader on
Saturday, September 5, 2026 (Australia/Sydney). Each URL still resolved
directly at its recorded canonical address, so no URL substitution, archive
recovery, or re-sourcing was needed in this fix pass.

## Step-5 authoring

Session date: Friday, September 4, 2026.

Authored page files:

- `library/computability-theory/classical-np-completeness-reductions.md`
- `library/computability-theory/classical-np-completeness-reductions-examples.md`

Authored item ids:

- `def-reduction-gadget-and-interface-invariant`
- `def-clique-independent-set-and-vertex-cover-problems`
- `thm-three-sat-reduces-to-clique`
- `cor-clique-is-np-complete`
- `thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible`
- `cor-independent-set-and-vertex-cover-are-np-complete`
- `def-directed-hamiltonian-path-and-cycle-problems`
- `thm-three-sat-reduces-to-directed-hamiltonian-cycle`
- `thm-directed-reduces-to-undirected-hamiltonian-cycle`
- `cor-hamiltonian-path-and-cycle-are-np-complete`
- `def-subset-sum-and-partition`
- `thm-three-sat-reduces-to-subset-sum`
- `thm-subset-sum-reduces-to-partition`
- `def-set-cover`
- `thm-vertex-cover-reduces-to-set-cover`
- `def-three-colourability`
- `thm-three-sat-reduces-to-three-colourability`
- `fs-gadget-correctness-needs-only-one-direction`
- `fs-pseudopolynomial-is-polynomial-in-bit-length`
- `ex-clique-is-np-complete`
- `ex-three-sat-reduces-to-three-colourability`
- `cex-gadget-correctness-needs-only-one-direction`

Proof-contract artifact written:

- `research/frontier-30-batch-20.proof-contracts.json`

Provenance rationale:

- Standard textbook and lecture-note claims were tagged `literature-derived` at the statement level.
- The local convention item `def-reduction-gadget-and-interface-invariant` and the two false statements were tagged `ai-altered` at statement level because they package standard reduction obligations and slogans into this library's exact phrasing.
- The B-page example and counterexample statements were tagged `ai-generated` with the required `generation.role` blocks because they are fresh worked instances rather than source-headline theorems.
- All locally written proofs and verifications were tagged `ai-generated`.

Canonical precheck repairs applied before final rerun:

- phase-stratification renumbering on `thm-three-sat-reduces-to-clique`, `cor-clique-is-np-complete`, `thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible`, `cor-independent-set-and-vertex-cover-are-np-complete`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-directed-reduces-to-undirected-hamiltonian-cycle`, `cor-hamiltonian-path-and-cycle-are-np-complete`, `thm-three-sat-reduces-to-subset-sum`, `thm-subset-sum-reduces-to-partition`, `thm-vertex-cover-reduces-to-set-cover`, and `thm-three-sat-reduces-to-three-colourability`
- proof-row flattening for in-proof display equations in `thm-subset-sum-reduces-to-partition`, `thm-vertex-cover-reduces-to-set-cover`, `thm-three-sat-reduces-to-three-colourability`, and `cex-gadget-correctness-needs-only-one-direction`

Contract follow-up repair:

- `boundary-audit` flagged the `zero` boundary row for `fs-pseudopolynomial-is-polynomial-in-bit-length` as overstated. I changed that row from `checked` to the honest `not_applicable` reason because the written refutation never analyzes a zero target and the local SUBSET SUM convention uses positive targets.

Narrowed or dropped claims:

- none

Blockers:

- none

Checks run on final bytes:

- `node tools/tsx-run.mjs tools/precheck.mts items/def-reduction-gadget-and-interface-invariant.md items/def-clique-independent-set-and-vertex-cover-problems.md items/thm-three-sat-reduces-to-clique.md items/cor-clique-is-np-complete.md items/thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible.md items/cor-independent-set-and-vertex-cover-are-np-complete.md items/def-directed-hamiltonian-path-and-cycle-problems.md items/thm-three-sat-reduces-to-directed-hamiltonian-cycle.md items/thm-directed-reduces-to-undirected-hamiltonian-cycle.md items/cor-hamiltonian-path-and-cycle-are-np-complete.md items/def-subset-sum-and-partition.md items/thm-three-sat-reduces-to-subset-sum.md items/thm-subset-sum-reduces-to-partition.md items/def-set-cover.md items/thm-vertex-cover-reduces-to-set-cover.md items/def-three-colourability.md items/thm-three-sat-reduces-to-three-colourability.md items/fs-gadget-correctness-needs-only-one-direction.md items/fs-pseudopolynomial-is-polynomial-in-bit-length.md items/ex-clique-is-np-complete.md items/ex-three-sat-reduces-to-three-colourability.md items/cex-gadget-correctness-needs-only-one-direction.md`
  -> `16 checked, 0 failing -- all clean`
- `node tools/regen-contract-entries.mjs research/frontier-30-batch-20.proof-contracts.json thm-three-sat-reduces-to-clique cor-clique-is-np-complete thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible cor-independent-set-and-vertex-cover-are-np-complete thm-three-sat-reduces-to-directed-hamiltonian-cycle thm-directed-reduces-to-undirected-hamiltonian-cycle cor-hamiltonian-path-and-cycle-are-np-complete thm-three-sat-reduces-to-subset-sum thm-subset-sum-reduces-to-partition thm-vertex-cover-reduces-to-set-cover thm-three-sat-reduces-to-three-colourability fs-gadget-correctness-needs-only-one-direction fs-pseudopolynomial-is-polynomial-in-bit-length ex-clique-is-np-complete ex-three-sat-reduces-to-three-colourability cex-gadget-correctness-needs-only-one-direction`
  -> `research/frontier-30-batch-20.proof-contracts.json: regenerated 16, skipped 0`
- `node tools/proof-contract.mjs research/frontier-30-batch-20.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 16/16 item(s) checked`
- `node tools/citation-fidelity.mjs research/frontier-30-batch-20.proof-contracts.json --fail-on-missing-quote`
  -> `citation-fidelity: 49 citation(s) over 16 authored item(s)` with `QUOTE NOT FOUND -- none` and `WIDENING CANDIDATES -- none found by the three detectors`
- `node tools/boundary-audit.mjs research/frontier-30-batch-20.proof-contracts.json --fail-on-contradicted`
  -> `boundary-audit: 128 rows over 1 contract file(s); 87 marked not_applicable` and `CONTRADICTED DISPOSITIONS -- none found by the three detectors`
- `node tools/content-policy.mjs research/frontier-30-batch-20.pages.json`
  -> `content-policy: 22 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`; final line `OK -- declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 746 page(s) with item lists.`
- `git diff --check -- items/def-reduction-gadget-and-interface-invariant.md items/def-clique-independent-set-and-vertex-cover-problems.md items/thm-three-sat-reduces-to-clique.md items/cor-clique-is-np-complete.md items/thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible.md items/cor-independent-set-and-vertex-cover-are-np-complete.md items/def-directed-hamiltonian-path-and-cycle-problems.md items/thm-three-sat-reduces-to-directed-hamiltonian-cycle.md items/thm-directed-reduces-to-undirected-hamiltonian-cycle.md items/cor-hamiltonian-path-and-cycle-are-np-complete.md items/def-subset-sum-and-partition.md items/thm-three-sat-reduces-to-subset-sum.md items/thm-subset-sum-reduces-to-partition.md items/def-set-cover.md items/thm-vertex-cover-reduces-to-set-cover.md items/def-three-colourability.md items/thm-three-sat-reduces-to-three-colourability.md items/fs-gadget-correctness-needs-only-one-direction.md items/fs-pseudopolynomial-is-polynomial-in-bit-length.md items/ex-clique-is-np-complete.md items/ex-three-sat-reduces-to-three-colourability.md items/cex-gadget-correctness-needs-only-one-direction.md library/computability-theory/classical-np-completeness-reductions.md library/computability-theory/classical-np-completeness-reductions-examples.md research/frontier-30-batch-20.proof-contracts.json research/frontier-30-batch-20.notes.md`
  -> clean
