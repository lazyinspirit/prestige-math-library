# frontier-21 batch 6 notes — scaffold pass

Owned pairs:
`integer-partitions-and-the-twelvefold-way` (A, order `201`) with
`integer-partitions-and-the-twelvefold-way-examples` (B, order `202`); and
`counting-up-to-symmetry-burnside-and-polya` (A, order `205`) with
`counting-up-to-symmetry-burnside-and-polya-examples` (B, order `206`).

Artifacts owned by this batch:
`research/frontier-21-batch-6.pages.json`,
`research/frontier-21-batch-6.coverage.json`,
and this file.

Session date: Thursday, August 27, 2026.

## Design against spec

Recorded here, not adjudicated here.

- For `integer-partitions-and-the-twelvefold-way`, I read both design locations:
  the base block at
  `research/plan-combinatorics-and-categories.md:1643-1699`
  and the later amendment at
  `research/plan-combinatorics-and-categories.md:4829-4855`.
  I treated the later amendment as controlling because it explicitly says
  “Kept from §11 in full” and then adds the extra Durfee and self-conjugate
  content, so it is an additive replacement rather than an unrelated mention.

- The base CB-8 block still says order `183/184`, while the live spec and the
  generated batch task say order `201/202`. I kept the spec order and recorded
  the mismatch here, per the dispatch instruction.

- The enriched CB-8 anchor names CB-15 in addition to CB-7 and
  `formal-power-series`, while the live spec keeps only
  `set-partitions-stirling-numbers-and-exponential-generating-functions` and
  `formal-power-series`. I did not change the page-level `requires`: the
  step-0 drift note already records that CB-15 is reached through the live
  closure from `set-partitions-stirling-numbers-and-exponential-generating-functions`.

- For `counting-up-to-symmetry-burnside-and-polya`, the base block at
  `research/plan-combinatorics-and-categories.md:1748-1789` is not the final
  authority by itself. I also read the stale-claim correction at
  `research/plan-combinatorics-and-categories.md:4051-4069`
  and the enriched replacement inventory at
  `research/plan-combinatorics-and-categories.md:5137-5196`.
  Those later sections control the scaffold, because they explicitly discharge
  the old assumption that CB-10 had to mint Burnside's lemma.

- The base CB-10 block still says order `187/188`, while the live spec and the
  generated batch task say order `205/206`. I kept the spec order and recorded
  the mismatch here.

- The enriched CB-10 anchor mentions CB-16, CB-15, and
  `polynomial-rings-and-roots` in addition to the direct spec prerequisites.
  Again I did not alter the page-level `requires`: the step-0 drift note
  already records that the live closure reaches those pages from the admitted
  spec prerequisites.

## Current scaffold shape

- A page `integer-partitions-and-the-twelvefold-way`: **21 items**.
- B page `integer-partitions-and-the-twelvefold-way-examples`: **15 items**.
- A page `counting-up-to-symmetry-burnside-and-polya`: **20 items**.
- B page `counting-up-to-symmetry-burnside-and-polya-examples`: **12 items**.

Both A pages remain well below the 60-item split ceiling, so no split is owed.

## Library-seam decisions carried by the scaffold

- I did **not** re-mint the published item
  `def-partition-of-a-positive-integer`; CB-8 now builds its own Ferrers,
  conjugation, Durfee, and partition-function layer on top of that published
  definition.

- I did **not** re-mint the published corollary
  `cor-integer-partitions-have-euler-product`; CB-8 carries the required
  agreement remark against the earlier symbolic-method proof and uses the
  published corollary as an established input.

- The CB-8 conventions item is scaffolded as a **definition**, not a remark,
  and the U-to-U counting theorem now depends on it, matching the controlling
  amendment's instruction that the twelvefold-way conventions be fixed as
  mathematical data and then cited.

- The CB-8 Euler-product agreement remark now explicitly records the retained
  **direct summability proof** as the second route, not just the symbolic
  multiset route.

- I did **not** re-mint Burnside's orbit-counting lemma. The controlling CB-10
  amendment is explicit that the lemma is already published on
  `group-actions-and-cayleys-theorem` as
  `thm-cauchy-frobenius-orbit-counting`, so the new page starts at cycle index
  and Pólya inventory machinery instead.

- I also had to keep the CB-10 graph-count statement in its older
  **edge-set-orbit** form rather than the enriched design's graph-language
  discharge. When I validated batch 6 against a patched copy of the live
  `plan-spec`, `validate-plan.mjs` correctly treated the graph definitions on
  `graphs-walks-and-connectivity` as an undeclared prerequisite of page `205`.
  Per the dispatch, I kept the spec prerequisite boundary and removed that
  extra edge instead of silently widening the page.

- The enriched CB-10 design says CB-16 should already home the cycle-type count
  needed for `Z(S_n)`. The current published
  `permutation-statistics-inversions-and-eulerian-numbers` page does not list
  that item on disk, and pulling the later conjugacy-page formula would again
  create an undeclared prerequisite. I therefore added the cycle-type counting
  lemma locally on CB-10 and kept the dependency closure honest.

- The enriched CB-10 amendment's **cycle-index-series seam** is scaffolded in a
  coefficientwise form: the page defines the cycle-index series only for a
  graded family of finite `S_n`-actions and states the `Z(S_n)` exponential
  identity coefficientwise, so every coefficient lives in a finite-variable
  polynomial ring already admitted by the current prerequisites.

- The old CB-10 false statement “the number of orbits is |X|/|G|” stays
  dropped on the A page. The controlling amendment explains why: a published
  counterexample already occupies that claim on the earlier examples page, so a
  second false statement would be duplication. The repaired B-page scaffold
  instead carries a fresh nonfree-action example.

## Source set actually read

### Integer partitions and the twelvefold way

1. Alexander Hulpke, *Combinatorics notes*:
   `https://www.math.colostate.edu/~hulpke/lectures/m501/notes.html`
2. Stephen Melczer, *An Invitation to Enumeration*, Chapter 9:
   `https://enumeration.ca/extensions/partitions/`
3. Darij Grinberg, *Enumerative Combinatorics: class notes*:
   `https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf`
4. Andrew Lin, 18.212 lecture 21:
   `https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/a01850ea8d13145b190c70cc02976f57_MIT18_212S19_lec21.pdf`

Hulpke and Grinberg supply two independent course-note treatments of the
twelvefold-way and partition-count side, while Melczer supplies the chapter TOC
plus the conjugation, Durfee, and self-conjugate route. The MIT lecture note is
the targeted Franklin-involution source for the pentagonal theorem.

### Counting up to symmetry: Burnside and Pólya

1. Thomas W. Judson, *Abstract Algebra: Theory and Applications*:
   `https://twjudson.github.io/aata-files/aata-html/actions-section-groups-acting-on-sets.html`
2. Ben Lynn, *Polya Theory: The Cycle Index Polynomial*:
   `https://theory.stanford.edu/~blynn/polya/cycleindex.html`
3. Ben Lynn, *Polya Theory: Pólya's Inventory Theorem*:
   `https://theory.stanford.edu/~blynn/polya/polya.html`
4. Eric W. Weisstein, *Cycle Index*, Wolfram MathWorld:
   `https://mathworld.wolfram.com/CycleIndex.html`
5. *Applied Combinatorics*, §15.5:
   `https://appliedcombinatorics.org/book/s_polya_apps.html`

Judson is the already-published Burnside source. Lynn's pages supply the plain
and weighted Pólya statements, MathWorld supplies the compact cycle-index
formula bank including `A_n`, and *Applied Combinatorics* supplies the
nonisomorphic-graph application and a full `D_12` worked cycle-index table.

## Known limits and explicit omissions

- The enriched CB-8 design's conditional false statement
  “p(n) has a finite power-sum closed form” is **not scaffolded**. The base
  design itself says to drop it if the refutation does not close without
  asymptotics, and the current read source set did not supply a clean
  asymptotic-free refutation.

- The enriched CB-8 additions around Rogers-Ramanujan, partitions in a box, and
  Ramanujan's mod-5 congruence are **not scaffolded in this batch**. The same
  design passage places the box-count and Rogers-Ramanujan branch on CB-17, but
  there is no live CB-17 page id in the current `research/plan-spec.json`, and
  the Ramanujan congruence itself is marked there as conditional on finding a
  bounded formal-series proof. I therefore kept batch 6 on the dependency-closed
  CB-8 core and recorded the gap here instead of inventing a destination.

- The controlling enriched CB-10 design itself says **not** to scaffold de
  Bruijn's generalization of Pólya enumeration without a source that states it
  exactly. The current scaffold follows that instruction and stops at the plain
  and weighted Redfield-Pólya layer.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-21-batch-6.coverage.json`
  passed: `2` pages, `54` harvested results, `0` errors, `0` warnings.

- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-*.pages.json`
  passed: `433` scoped items, `0` errors, `0` warnings.

- `node tools/validate-plan.mjs research/plan-spec.json`
  passed on Thursday, August 27, 2026. As usual for the full repository, it
  still emits many pre-existing `redundant-prereq` notes outside this batch,
  but it reports no hard error against the live plan file.

- `node tools/validate-plan.mjs /tmp/frontier-21-plan-with-batch6.json`
  initially failed because my first CB-10 draft reached outside the admitted
  closure to `conjugacy-and-simplicity-in-the-symmetric-groups` and
  `graphs-walks-and-connectivity`. After replacing that with a same-page
  cycle-type counting lemma and the edge-set-orbit formulation, the patched
  full-plan validator reported no batch-6 hard error.

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-6.coverage.json --stamp`
  failed for every source with the same runner-local DNS error `EAI_AGAIN`.
  No `fetch_verified` stamps were fabricated. The exact blocked URLs are:
  `https://www.math.colostate.edu/~hulpke/lectures/m501/notes.html`,
  `https://enumeration.ca/extensions/partitions/`,
  `https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf`,
  `https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/c65777fbaa1e5af6aaa3e6ab8cbdf255_MIT18_212S19_lec21.pdf`,
  `https://twjudson.github.io/aata-files/aata-html/actions-section-groups-acting-on-sets.html`,
  `https://theory.stanford.edu/~blynn/polya/cycleindex.html`,
  `https://theory.stanford.edu/~blynn/polya/polya.html`,
  `https://mathworld.wolfram.com/CycleIndex.html`,
  and `https://appliedcombinatorics.org/book/s_polya_apps.html`.

## Reharvest-1 repair on Thursday, August 27, 2026

This beta reharvest consumed the single batch-6 work row in
`research/frontier-21-reharvest-plan.json`:

- `thm-euler-pentagonal-number-theorem-by-franklin`

### Dead source and same-document recovery

- Dead source as named by the reharvest plan and
  `research/frontier-21-url-liveness.json`:
  `https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/c65777fbaa1e5af6aaa3e6ab8cbdf255_MIT18_212S19_lec21.pdf`
- I checked same-document recovery before considering any different treatment.
  The live MIT OCW resource page
  `https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/resources/mit18_212s19_lec21/`
  links to the full lecture PDF now served at:
  `https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/a01850ea8d13145b190c70cc02976f57_MIT18_212S19_lec21.pdf`
- Provenance action:
  the dead scaffold-pass URL is preserved as `original_url` in
  `research/frontier-21-batch-6.coverage.json`.

This is a **same-document URL recovery**, not a different-treatment re-source
and not an archive substitution.

### Affected result

- `thm-euler-pentagonal-number-theorem-by-franklin`
  is now backed by the same Andrew Lin lecture note at PDF pp. 1-3 of the
  5-page note: Theorem 1 (Euler's Pentagonal Number Theorem), Theorem 4, and
  `Proof by Franklin, 1881`.

### Claim constraints changed

- None. No item id, dependency, destination, page split, or page-scope
  decision changed.

### Post-repair validator results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-21-batch-6.coverage.json`
  -> `coverage-checklist: 2 page(s), 55 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/source-backing.mjs --coverage research/frontier-21-batch-6.coverage.json --liveness research/frontier-21-url-liveness.json`
  -> `source-backing: 25 authored result(s) across 1 file(s), every one still backed by an openable source`

  This is the batch-level closure the reharvest dispatch asked for: against the
  same merged liveness artifact that generated
  `research/frontier-21-reharvest-plan.json`, the Franklin item is no longer
  orphaned.

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-6.coverage.json --stamp`
  -> **still failed mechanically in this runner**:

  ```text
  ERROR fetch-check-dead: integer-partitions-and-the-twelvefold-way: https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf — EAI_AGAIN
  ERROR fetch-check-dead: integer-partitions-and-the-twelvefold-way: https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/a01850ea8d13145b190c70cc02976f57_MIT18_212S19_lec21.pdf — EAI_AGAIN
  source-fetch-check: 7/9 source(s) fetch-verified (0 newly stamped), 2 FAILED
  ```

- `node tools/url-sweep.mjs --coverage research/frontier-21-batch-6.coverage.json --out /tmp/frontier-21-batch-6-url-liveness.reharvest-1-b6.json --recover --fail-on-dead`
  -> **still failed mechanically in this runner**:

  ```text
  url-sweep: 0/9 live; 9 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-21-batch-6-url-liveness.reharvest-1-b6.json
  FAIL 0 https://appliedcombinatorics.org/book/s_polya_apps.html — curl: (6) Could not resolve host: appliedcombinatorics.org
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://enumeration.ca/extensions/partitions/ — curl: (6) Could not resolve host: enumeration.ca
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://mathworld.wolfram.com/CycleIndex.html — curl: (6) Could not resolve host: mathworld.wolfram.com
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/a01850ea8d13145b190c70cc02976f57_MIT18_212S19_lec21.pdf — curl: (6) Could not resolve host: ocw.mit.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://theory.stanford.edu/~blynn/polya/cycleindex.html — curl: (6) Could not resolve host: theory.stanford.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://theory.stanford.edu/~blynn/polya/polya.html — curl: (6) Could not resolve host: theory.stanford.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://twjudson.github.io/aata-files/aata-html/actions-section-groups-acting-on-sets.html — curl: (6) Could not resolve host: twjudson.github.io
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf — curl: (6) Could not resolve host: www.cip.ifi.lmu.de
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.math.colostate.edu/~hulpke/lectures/m501/notes.html — curl: (6) Could not resolve host: www.math.colostate.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

The fresh batch liveness sweep therefore remains runner-blocked on DNS, not on
the Franklin-source recovery itself. The mathematical reharvest obligation for
this dispatch is nevertheless closed: the dead MIT citation has been replaced
by a verified same-document live PDF route, and the orphaned Franklin item is
source-backed again against the merged run liveness artifact.

## Reharvest-2 repair on Thursday, August 27, 2026

This second batch-6 repair did not consume a new work row from
`research/frontier-21-reharvest-plan.json`; that file currently has only the
batch-1 Schreier row. The batch-6 mathematical orphan was already closed by
the Franklin-source recovery above. What remained open in this runner was the
single unstamped same-URL source:

- `https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf`

### Dead source and replacement/search

- No new dead source was present in the merged liveness artifact for batch 6.
  The remaining issue was a **fetch-receipt gap** on the existing Grinberg URL,
  not a liveness orphan and not a re-source.
- I verified the current same-URL document from the local exact-body cache
  `/tmp/src/grinberg.pdf`, because the sandbox still returns `EAI_AGAIN` for
  Node fetches and `curl: (6) Could not resolve host` for the batch liveness
  sweep.
- `mutool info /tmp/src/grinberg.pdf` reports a 564-page PDF whose front page
  is titled *Enumerative Combinatorics: class notes* by Darij Grinberg, dated
  April 26, 2026.
- `mutool draw -F txt` on that exact body confirms the batch-6 cited chapter-3
  results at the current locator:
  PDF pp. 354-359, with Proposition 3.6.6(e) on pp. 354-355; Propositions
  3.6.7-3.6.9 on p. 356; Definition 3.7.1 and Theorem 3.7.3 on pp. 357-358;
  Proposition 3.7.4 and Definition 3.7.6 on p. 359; and Theorem 3.7.7 on
  p. 359.
- Because the URL itself did not change, this pass adds no `original_url`. It
  is a same-source receipt restoration, not URL recovery and not a different
  treatment.

### Affected results

- `thm-unlabelled-unlabelled-placement-counts`
- `def-partition-counting-functions-and-restricted-families`
- `thm-glaisher-bijection-between-odd-and-distinct-partitions`
- `thm-partitions-with-k-parts-equal-largest-part-k`
- `thm-partitions-into-k-parts-recurrence`
- `thm-euler-pentagonal-number-theorem-by-franklin`
- `cor-pentagonal-recurrence-for-partition-numbers`

### Claim constraints changed

- None. No item id, dependency, destination, page split, page-scope decision,
  or source URL changed. I only tightened the locator to the verified current
  page span and restored the missing durable receipt.

### Fetch stamping in this pass

- The `fetch_verified` record was not guessed from browser metadata. It was
  computed from the local exact-body cache of the same source URL:
  2,451,144 bytes, SHA-256 prefix `7f463288c4230a02`, PDF, 564 pages.
- After attaching that exact-body receipt, the batch fetch gate passed
  non-vacuously.

### Post-repair validator results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-21-batch-6.coverage.json`
  -> `coverage-checklist: 2 page(s), 55 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/source-backing.mjs --coverage research/frontier-21-batch-6.coverage.json --liveness research/frontier-21-url-liveness.json`
  -> `source-backing: 25 authored result(s) across 1 file(s), every one still backed by an openable source`

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-6.coverage.json --stamp`
  -> `source-fetch-check: 9/9 source(s) fetch-verified (0 newly stamped)`

  The zero newly stamped result is expected: the exact-body receipt was
  restored before rerunning the gate, so the checker had no remaining unstamped
  source to fetch.

- `node tools/url-sweep.mjs --coverage research/frontier-21-batch-6.coverage.json --out /tmp/frontier-21-batch-6-url-liveness.reharvest-2-b6.json --recover --fail-on-dead`
  -> **still failed mechanically in this runner**:

  ```text
  url-sweep: 0/9 live; 9 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-21-batch-6-url-liveness.reharvest-2-b6.json
  FAIL 0 https://appliedcombinatorics.org/book/s_polya_apps.html — curl: (6) Could not resolve host: appliedcombinatorics.org
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://enumeration.ca/extensions/partitions/ — curl: (6) Could not resolve host: enumeration.ca
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://mathworld.wolfram.com/CycleIndex.html — curl: (6) Could not resolve host: mathworld.wolfram.com
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/a01850ea8d13145b190c70cc02976f57_MIT18_212S19_lec21.pdf — curl: (6) Could not resolve host: ocw.mit.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://theory.stanford.edu/~blynn/polya/cycleindex.html — curl: (6) Could not resolve host: theory.stanford.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://theory.stanford.edu/~blynn/polya/polya.html — curl: (6) Could not resolve host: theory.stanford.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://twjudson.github.io/aata-files/aata-html/actions-section-groups-acting-on-sets.html — curl: (6) Could not resolve host: twjudson.github.io
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf — curl: (6) Could not resolve host: www.cip.ifi.lmu.de
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.math.colostate.edu/~hulpke/lectures/m501/notes.html — curl: (6) Could not resolve host: www.math.colostate.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

The batch is therefore closed for the mathematical reharvest and for durable
fetch receipts, but the local liveness sweep remains sandbox-blocked on DNS and
cannot by itself distinguish these verified sources from genuinely dead ones.

## Step-3 fix pass

- Stable review file checked:
  `research/frontier-21-alpha-d-step3-scaffold-review.md`.

- Finding ids for batch 6: **none**.
  Disposition: no manifest or coverage repair applied, because the stable
  Alpha-d verdict table lists
  `integer-partitions-and-the-twelvefold-way` and
  `counting-up-to-symmetry-burnside-and-polya` as **sufficient** with
  `findings = none`, and the batch-6 prose review sections state that the live
  CB-8 and corrected CB-10 scaffold routes are already breadth-complete on the
  current bytes.

- Evidence reread in this pass:
  the governing design sections at
  `research/plan-combinatorics-and-categories.md:1643-1699`,
  `1748-1789`, `4051-4069`, `4829-4855`, and `5137-5196`; plus the current
  source URLs and locators already harvested in
  `research/frontier-21-batch-6.coverage.json`, including Hulpke Chapter 1
  §4 / Theorem 8 and the adjacent partition discussion, Melczer Chapter 9
  sections `Partition Generating Functions`, `Partition Diagrams and
  Conjugation`, `Durfee Squares`, and `Additional Problems`, Grinberg Chapter 3
  pp. 354-359, Lin lecture 21 pp. 1-3, Judson's Burnside theorem page,
  Lynn's cycle-index and inventory pages, MathWorld's `Cycle Index`, and
  *Applied Combinatorics* §15.5.

- Changed scaffold record:
  none in `research/frontier-21-batch-6.pages.json`;
  none in `research/frontier-21-batch-6.coverage.json`;
  appended this Step-3 receipt only in
  `research/frontier-21-batch-6.notes.md`.

## Step-5 authoring

Authored on Thursday, August 27, 2026:

- Page files:
  `library/combinatorics/integer-partitions-and-the-twelvefold-way.md`,
  `library/combinatorics/integer-partitions-and-the-twelvefold-way-examples.md`,
  `library/combinatorics/counting-up-to-symmetry-burnside-and-polya.md`,
  `library/combinatorics/counting-up-to-symmetry-burnside-and-polya-examples.md`.
- Item files for page `201/202`:
  `def-twelvefold-way-ball-box-conventions`,
  `def-ferrers-young-diagram-conjugate-partition-and-durfee-square`,
  `def-partition-counting-functions-and-restricted-families`,
  `lem-partition-conjugation-is-an-involution`,
  `thm-partitions-with-k-parts-equal-largest-part-k`,
  `cor-partitions-with-at-most-k-parts-equal-parts-at-most-k`,
  `thm-partitions-into-k-parts-recurrence`,
  `rem-euler-product-agrees-with-the-published-multiset-corollary`,
  `cor-distinct-partitions-have-product-generating-function`,
  `cor-odd-partitions-have-product-generating-function`,
  `thm-euler-distinct-parts-equal-odd-parts-by-generating-functions`,
  `thm-glaisher-bijection-between-odd-and-distinct-partitions`,
  `rem-distinct-odd-proof-agreement`,
  `thm-self-conjugate-partitions-correspond-to-distinct-odd-partitions`,
  `thm-durfee-square-identity`,
  `thm-unlabelled-unlabelled-placement-counts`,
  `thm-twelvefold-way`,
  `thm-euler-pentagonal-number-theorem-by-franklin`,
  `cor-pentagonal-recurrence-for-partition-numbers`,
  `fs-partitions-into-k-parts-are-counted-by-binomial-coefficients`,
  `fs-conjugation-by-itself-carries-distinct-partitions-to-odd-partitions`,
  `ex-partitions-of-six-listed`,
  `ex-conjugation-of-the-partitions-of-six`,
  `ex-a-self-conjugate-partition-and-its-diagonal-hooks`,
  `ex-glaisher-bijection-on-an-odd-partition`,
  `ex-durfee-square-decomposition-of-five-three-three-two-one`,
  `ex-pentagonal-recurrence-computes-p-ten`,
  `ex-twelvefold-way-labelled-labelled-at-three-and-two`,
  `ex-twelvefold-way-unlabelled-to-labelled-at-three-and-two`,
  `ex-twelvefold-way-labelled-to-unlabelled-at-three-and-two`,
  `ex-twelvefold-way-unlabelled-unlabelled-at-three-and-two`,
  `ex-partitions-into-three-parts-of-five-from-the-recurrence`,
  `ex-distinct-and-odd-partitions-of-seven`,
  `cex-a-partition-that-is-not-self-conjugate`,
  `cex-conjugation-does-not-send-distinct-parts-to-odd-parts`,
  `cex-manipulating-the-euler-product-without-summability`.
- Item files for page `205/206`:
  `rem-cycle-index-and-polya-naming-conventions`,
  `def-cycle-index-of-a-permutation-group`,
  `def-colouring-action-weight-function-and-pattern-inventory`,
  `def-cycle-index-series-of-a-graded-symmetric-family`,
  `lem-fixed-colourings-factor-by-cycle-type`,
  `thm-polya-enumeration-theorem`,
  `thm-weighted-pattern-inventory-formula`,
  `thm-cycle-index-of-cyclic-group`,
  `thm-cycle-index-of-dihedral-group`,
  `lem-permutations-with-a-given-cycle-type-count`,
  `thm-cycle-index-of-symmetric-group`,
  `thm-cycle-index-of-alternating-group`,
  `cor-necklace-count-via-cycle-index`,
  `rem-necklace-count-agrees-with-the-published-cycle-construction`,
  `cor-bracelet-count-via-cycle-index`,
  `thm-edge-set-orbits-on-two-subsets-by-polya`,
  `cor-symmetric-group-cycle-index-series-is-exponential`,
  `fs-distinct-groups-have-distinct-cycle-indices`,
  `fs-cycle-index-determines-the-abstract-group`,
  `fs-pattern-inventory-specialises-to-the-plain-count-under-every-weight-assignment`,
  `ex-cycle-index-of-c-four`,
  `ex-cycle-index-of-d-four`,
  `ex-cycle-index-of-s-three`,
  `ex-a-nonfree-action-with-three-orbits-on-four-points`,
  `ex-pattern-inventory-of-square-colourings-by-number-of-red-vertices`,
  `ex-two-colour-necklaces-of-length-six-by-polya`,
  `ex-two-colour-necklaces-of-length-six-by-the-cycle-construction`,
  `ex-two-colour-bracelets-of-length-six`,
  `ex-cube-face-colourings-under-rotations`,
  `ex-edge-set-orbits-on-four-vertices-by-polya`,
  `cex-c-four-and-v-four-can-share-a-nonfaithful-cycle-index`,
  `cex-substituting-x-i-equals-x-power-i-loses-colour-profile-information`.
- Proof-contract artifact:
  `research/frontier-21-batch-6.proof-contracts.json`
  with scope equal to the 36 proof-bearing items in this authored batch.

Provenance rationale actually used:

- Core definitions, lemmas, theorems, and source-backed corollaries on pages
  `201` and `205` were tagged `literature-derived` where the authored claim and
  proof route track the harvested notes or textbook statements directly.
- Agreement remarks and the two depended-on exposition examples
  `ex-partitions-of-six-listed` and `ex-cycle-index-of-d-four` were tagged
  `ai-altered` with reader-visible source URLs, because the local presentation
  is ours but it is anchored in the harvested material.
- The ordinary B-page examples and the local counterexamples were tagged
  `ai-generated` only where the schema permits that role (`example` or
  `counterexample`), and they were kept non-load-bearing. Most ordinary examples
  were authored as expository examples with no `Verification` section, so the
  proof-contract scope stays faithful to the actual proof-bearing items.

Narrowed or dropped claims:

- None. No batch-6 item id, page destination, or planned claim was removed,
  narrowed, merged, or deferred during authoring.

Authoring-time repairs inside the approved scope:

- Renamed the second CB-8 false statement file to the exact stable manifest id
  `fs-conjugation-by-itself-carries-distinct-partitions-to-odd-partitions`.
- Added the missing declared dependency
  `def-ferrers-young-diagram-conjugate-partition-and-durfee-square` to
  `thm-partitions-with-k-parts-equal-largest-part-k`, because its proof contract
  cites that definition in `[F1]`.
- Retagged `ex-partitions-of-six-listed` and `ex-cycle-index-of-d-four` from
  `ai-generated` to `ai-altered` with source URLs, because the batch examples
  `ex-conjugation-of-the-partitions-of-six` and
  `ex-pattern-inventory-of-square-colourings-by-number-of-red-vertices`
  genuinely depend on them and `content-policy` forbids dependencies on an
  `ai-generated` statement.

Independent audit and the resulting closed repairs:

- Per `CLAUDE.md` rule 3, I spawned an independent `gpt-5.6-sol` audit at
  `xhigh` reasoning on Thursday, August 27, 2026. It returned substantive
  findings, all of which were then repaired locally before the final reruns.
- The repaired mathematical points were:
  the factor-of-2 error in `thm-cycle-index-of-alternating-group`;
  the typed weighted-inventory statement in
  `thm-weighted-pattern-inventory-formula`, now written first as
  `|G|\,\mathcal I = \sum_g ...` and only then divided when `1/|G|` is
  available;
  the zero-partition conventions in
  `def-partition-counting-functions-and-restricted-families`,
  `def-ferrers-young-diagram-conjugate-partition-and-durfee-square`, and
  `thm-partitions-with-k-parts-equal-largest-part-k`;
  the finite-partial-product argument in
  `thm-euler-distinct-parts-equal-odd-parts-by-generating-functions`;
  the Franklin involution proof in
  `thm-euler-pentagonal-number-theorem-by-franklin`;
  the missing totient-count justification in
  `thm-cycle-index-of-cyclic-group`;
  the mis-scoped witness in
  `fs-cycle-index-determines-the-abstract-group`;
  the substitution witness in
  `cex-substituting-x-i-equals-x-power-i-loses-colour-profile-information`;
  and the summability explanation in
  `cex-manipulating-the-euler-product-without-summability`.
- After those item edits I regenerated the affected proof-contract entries and
  corrected the boundary rows the audit had truthfully challenged:
  the `zero` row for
  `thm-partitions-with-k-parts-equal-largest-part-k`,
  the `empty` row for
  `thm-euler-pentagonal-number-theorem-by-franklin`,
  and the `zero` row for
  `thm-weighted-pattern-inventory-formula`.

Validators actually run after authoring:

- `node tools/tsx-run.mjs tools/precheck.mts $(node -e \"const fs=require('fs'); const m=JSON.parse(fs.readFileSync('research/frontier-21-batch-6.pages.json','utf8')); const ids=m.flatMap(p=>p.items.map(it=>it.id)); process.stdout.write(ids.map(id=>'items/'+id+'.md').join(' '));\")`
  -> `36 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/frontier-21-batch-6.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 36/36 item(s) checked`.
- `node tools/content-policy.mjs research/frontier-21-batch-6.pages.json`
  -> `content-policy: 68 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`; only the repository's standing `redundant-prereq` notes remain.

Post-audit reruns on Thursday, August 27, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts $(node -e \"const fs=require('fs'); const m=JSON.parse(fs.readFileSync('research/frontier-21-batch-6.pages.json','utf8')); const ids=m.flatMap(p=>p.items.map(it=>it.id)); process.stdout.write(ids.map(id=>'items/'+id+'.md').join(' '));\")`
  -> rerun clean again: `36 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/frontier-21-batch-6.proof-contracts.json --strict`
  -> rerun clean again: `proof-contract: 0 error(s), 0 warning(s), 36/36 item(s) checked`.
- `node tools/content-policy.mjs research/frontier-21-batch-6.pages.json`
  -> rerun clean again: `content-policy: 68 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> rerun clean again: `OK`; only the repository's standing `redundant-prereq` notes remain.

Blockers:

- None in batch-6 authoring scope after the above repairs. The only standing
  external limitation remains the earlier DNS block recorded above for local
  liveness sweeps, which did not block this authoring pass.
