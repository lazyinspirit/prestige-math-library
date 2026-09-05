# frontier-30 · Beta · batch-11 notes — `singular-chains-and-singular-homology`

Run `frontier-30`, batch `11`, one A/B pair, category `algebraic-topology`.
Author: Beta. Session date: Friday, September 4, 2026.

Artifacts owned by this dispatch:

- `research/frontier-30-batch-11.pages.json`
- `research/frontier-30-batch-11.coverage.json`
- this file

Per the dispatch, I did not edit workflow state, another batch artifact,
published content, or plan structure outside batch `11`.

## 1. Outcome

The pair is now scaffolded with:

- A page `singular-chains-and-singular-homology`: **27 items**
- B page `singular-chains-and-singular-homology-examples`: **8 items**

No split is needed. The A page stays well below the 60-item ceiling.

The scaffold follows the AT-2 design route rather than broadening into AT-3:

1. standard simplices, singular chains, and the boundary complex first
2. induced maps, reduced homology, and the `H_0` interpretation next
3. prism-operator homotopy invariance as the central proof
4. cross-product and simplicial-comparison preliminaries only, with the full
   comparison theorem deferred

## 2. Live Context Checked From Disk

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated batch
task `research/frontier-30-beta-11.task.md`, the seed manifest
`research/frontier-30-batch-11.pages.json`, the live plan entry in
`research/plan-spec.json`, the run note `research/frontier-30-step0-notes.md`,
and the cited design block in `research/plan-algebraic-topology-track.md`.

Per `AGENTS.md`, I also checked the live controller from disk rather than
trusting any resume prose:

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  reports the repo-root live controller as run `frontier-23` at stage
  `5-author`

That mismatch with the separately generated `frontier-30` scaffold task is
context to record, not something this batch is allowed to repair.

## 3. Design Control And Drift

### Controlling design material

The dispatch points to:

- `research/plan-algebraic-topology-track.md:425`
- `research/plan-algebraic-topology-track.md:468`

These are not competing amendments. Line `425` starts the full `AT-2` block,
and line `468` is the B-page subsection inside that same block. I therefore
treated the full `AT-2` section beginning at line `425` as controlling, with
the later line `468` read as part of the same control text rather than as a
rival source.

### Design-vs-spec prerequisite drift

There is a real prerequisite conflict:

- the design says `simplicial-complexes-and-simplicial-homology`,
  `homotopy-and-homotopy-equivalence`, and
  `chain-homotopy-and-the-homotopy-category`
- the live spec and the batch manifest say only
  `simplicial-complexes-and-simplicial-homology-examples`

Per the dispatch, I did not adjudicate that conflict locally. The scaffold
follows the current spec and records the disagreement here for run-wide drift
review.

### Small title normalization

I normalized one design title:

- `def-fundamental-singular-cycle-of-an-oriented-simplex`

The design description calls this a "cycle", but the local role is the affine
characteristic singular simplex attached to an oriented simplex, before any
relative or comparison theorem turns it into a cycle class. I kept the stable
id and corrected the title to match the actual mathematical object.

## 4. Sources Actually Read

I harvested two independent textbooks and three MIT lecture-note supplements:

1. Allen Hatcher, *Algebraic Topology*:
   `https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf`
2. J. Peter May, *A Concise Course in Algebraic Topology*:
   `https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf`
3. Haynes Miller, *Algebraic Topology I*, Lecture 6:
   `https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/87a1ec7a7bcb92c59881ab6a8e70e0c2_MIT18_905F16_lec6.pdf`
4. Haynes Miller, *Algebraic Topology I*, Lecture 7:
   `https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/9e7c0386b3c2febaa2cf58e75d9c7c32_MIT18_905F16_lec7.pdf`
5. Haynes Miller, *Algebraic Topology I*, Lecture 16:
   `https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b237384604ec40e1454c7048c958f239_MIT18_905F16_lec16.pdf`

### Source roles

- Hatcher is the controlling primary treatment for the page's actual route:
  singular chains, `H_0`, prism homotopy invariance, contractible-space
  vanishing, and the first simplicial-to-singular comparison seam.
- May is the second textbook the design explicitly named. Its reduced-homology
  and singular-chain discussion support the A page, and its cellular-homology
  torus example now carries the exact same-homology half of the repaired
  B-page counterexample.
- Miller Lectures 6 and 7 carry the singular cross-product seam much more
  directly than Hatcher or May do in the cited ranges, especially the chain
  product's naturality, Leibniz rule, and explicit Eilenberg-Zilber chain.
- Miller Lecture 16 supplies the local CW-homology machinery for the repaired
  B-page witness without widening the A-page route into a separate cellular
  homology development.

### URL handling

All five recorded source URLs were opened in the web reader on Friday,
September 4, 2026 and therefore carry manual `fetch_verified` receipts in the
coverage file rather than shell-side byte/hash stamps.

## 5. Key Route Choices

- **Keep the prism proof visible.** The design explicitly postpones relative
  homology, excision, and the full simplicial-singular equivalence theorem.
  I kept the page centered on the chain-level homotopy formula instead of
  collapsing it into a broader omnibus page.
- **Use the published homological-algebra interface.** The singular page reuses
  the already-authored chain-complex, homology, and chain-homotopy machinery
  instead of rebuilding it.
- **Carry coefficients but avoid false basis language.** The chain-group item
  uses `C_n(X; G) = C_n(X; Z) tensor G`, matching the design's warning not to
  pretend there is a preferred `G`-basis of singular chains.
- **Only the comparison-map seam, not the comparison theorem.** The current
  page defines the simplicial-to-singular chain map and proves boundary
  compatibility, but the isomorphism statement itself is deferred to AT-3,
  exactly as the design says.
- **Only the chain-level cross-product seam.** The current page stops at the
  generator formula, boundary identity, and naturality. The induced homology
  cross product and stronger product theorems are deferred to
  `universal-coefficients-and-kunneth-theorems`.

## 6. Coverage And Scope Notes

The coverage file records five source entries for the single A page. The main
deliberate non-local rows are:

- Hatcher's full `The Equivalence of Simplicial and Singular Homology`
  theorem is deferred to `relative-homology-excision-and-mayer-vietoris`
  because the design explicitly says the current page should stop before that
  subdivision-heavy proof.
- May's `Gamma X` geometric-realization and weak-equivalence theorems are
  marked `out-of-scope`, not deferred, because they are an alternate CW
  approximation route rather than an omitted local dependency of this page.
- May's section `5. Some examples: T, K, and RP^n` and Miller Lecture 16 now
  carry the exact same-homology witness for
  `cex-equal-homology-does-not-imply-homotopy-equivalence`: torus homology
  from May's explicit cellular-chain calculation, and the matching
  `(S^1 vee S^1) vee S^2` computation from Miller's bouquet-of-spheres and
  cellular-chain discussion.
- Miller Lecture 7's homology-level cross product results are deferred to
  `universal-coefficients-and-kunneth-theorems`, which already exists in the
  live plan.

## 7. Repaired Counterexample Seam

The first scaffold's blocking seam was:

- `cex-equal-homology-does-not-imply-homotopy-equivalence`

The fix pass now makes that witness exact. The counterexample uses `T^2` and
`(S^1 vee S^1) vee S^2`. May's cellular-homology example supplies
`H_0 = Z`, `H_1 = Z^2`, and `H_2 = Z` for the torus. Miller Lecture 16 then
supplies the bouquet-of-spheres and cellular-chain facts needed to compute the
same groups for `(S^1 vee S^1) vee S^2` from its one-vertex, two-1-cell,
one-2-cell CW model with zero differentials.

The non-homotopy-equivalence half is now dependency-honest on current disk:
the counterexample depends on the published torus and two-circle-wedge
fundamental-group items, the published simply connectedness of `S^2`, the
published van Kampen free-product corollary for simply connected overlap, and
the published functoriality and based-homotopy invariance of induced `pi_1`
maps.

This closes Alpha's specific blocker without widening AT-2 into a general
cellular-homology page: the CW machinery stays local to this one B-page
counterexample.

## 8. Validation

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-30-batch-11.pages.json','utf8')); JSON.parse(require('fs').readFileSync('research/frontier-30-batch-11.coverage.json','utf8'))"`:
  **PASS**
- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-11.coverage.json`:
  **PASS** — `1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-11.coverage.json`:
  **PASS** — `5/5 source(s) fetch-verified`
- `node tools/manifest-deps.mjs research/frontier-30-batch-11.pages.json`:
  **PASS** — `35 item(s), 0 normalized, 0 error(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`:
  **PASS** — `694 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`:
  **PASS** — exit `0`; the closing `OK` line reported no item-level cycles,
  forward references, B-page dependencies, or unresolved ids, with only the
  repository's standing run-wide `redundant-prereq` advisories preceding it
- `git diff --check -- research/frontier-30-batch-11.pages.json research/frontier-30-batch-11.coverage.json research/frontier-30-batch-11.notes.md`:
  **PASS**

## Step-3 fix pass

Run date for this fix pass: Friday, September 4, 2026. The governing alpha
review is `research/frontier-30-alpha-e-step3-scaffold-review.md`.

| finding id | disposition | evidence | changed scaffold record |
| --- | --- | --- | --- |
| `E11-1` | applied | I re-read May's `5. Some examples: T, K, and RP^n` section and Miller's Lecture 16 `Homology of CW-complexes`, both fetch-verified on Friday, September 4, 2026. May's torus example gives the exact cellular-homology groups `H_0 = Z`, `H_1 = Z^2`, and `H_2 = Z`; Miller's bouquet-of-spheres and Theorem 16.3 passages support the matching local CW calculation for `(S^1 vee S^1) vee S^2`. The non-homotopy-equivalence half is now dependency-backed by the published torus and two-circle-wedge `pi_1` items, the published simply connectedness of `S^2`, the published van Kampen free-product corollary, and the published functoriality and based-homotopy invariance of induced `pi_1` maps. | `research/frontier-30-batch-11.pages.json` now rewrites `cex-equal-homology-does-not-imply-homotopy-equivalence` to the exact witness `T^2` versus `(S^1 vee S^1) vee S^2` and adds the published `pi_1` dependencies that proof actually needs; `research/frontier-30-batch-11.coverage.json` extends the May harvest to the torus cellular-homology section and adds Miller Lecture 16 as the missing same-homology source; this notes file now records the repaired witness and the validator reruns. |

## Scaffold-fix round

Run date for this scaffold-fix round: Saturday, September 5, 2026 (AEST). The
governing closure file is `research/frontier-30-scaffold-closure.json`.

| finding id | disposition | evidence | change |
| --- | --- | --- | --- |
| `closure-b11-1` | applied | I reproduced the current-byte failure on an isolated temp splice of `research/frontier-30-batch-11.pages.json` over `research/plan-spec.json`: `validate-plan` failed only with `[undeclared-prereq] page singular-chains-and-singular-homology-examples has an item depending on the-seifert-van-kampen-theorem, which is NOT in the closure of its declared requires`. The cause is the B-page counterexample's dependency on `cor-seifert-van-kampen-simply-connected-overlap`, whose published home is `the-seifert-van-kampen-theorem`. I then re-opened all five recorded source URLs in the web reader on Saturday, September 5, 2026 (AEST), refreshing the coverage receipts to keep the harvest current. | `research/frontier-30-batch-11.pages.json` now adds `the-seifert-van-kampen-theorem` to the A page `singular-chains-and-singular-homology` `requires`, so the companion B page reaches that prerequisite through its mandatory A-page edge. `research/frontier-30-batch-11.coverage.json` now refreshes every `fetch_verified` receipt to Saturday, September 5, 2026 (AEST). After the change, `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-11.coverage.json`, `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`, `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-11.coverage.json`, and `node tools/validate-plan.mjs /tmp/frontier-30-batch-11-spliced-post.json` all passed; `git diff --check -- research/frontier-30-batch-11.pages.json research/frontier-30-batch-11.coverage.json research/frontier-30-batch-11.notes.md` is clean. |

## Step-5 authoring

Run date for this authoring pass: Saturday, September 5, 2026 (AEST).

### Authored pages and items

- Page files:
  `library/algebraic-topology/singular-chains-and-singular-homology.md` and
  `library/algebraic-topology/singular-chains-and-singular-homology-examples.md`
- A-page items:
  `def-standard-topological-simplex-and-its-affine-face-maps`,
  `lem-affine-face-maps-satisfy-the-cosimplicial-identities`,
  `def-singular-simplex-and-singular-chain-group-with-coefficients`,
  `def-singular-boundary-operator`,
  `thm-the-singular-boundary-squares-to-zero`,
  `def-singular-chain-complex-and-singular-homology`,
  `def-induced-singular-chain-map`,
  `lem-induced-singular-chain-maps-commute-with-boundaries`,
  `prop-singular-chains-and-homology-are-covariantly-functorial`,
  `def-zero-simplex-augmentation-and-reduced-singular-homology`,
  `lem-singular-augmentation-commutes-with-boundary`,
  `prop-zero-th-singular-homology-is-free-on-path-components`,
  `cor-path-connected-spaces-have-zero-reduced-zero-th-homology`,
  `prop-singular-homology-of-a-disjoint-union-is-the-direct-sum`,
  `def-prism-operator-for-a-homotopy`,
  `lem-the-prism-triangulation-has-the-stated-oriented-boundary`,
  `thm-singular-chain-homotopy-formula`,
  `cor-homotopic-maps-induce-the-same-map-on-singular-homology`,
  `thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology`,
  `cor-contractible-nonempty-spaces-have-the-homology-of-a-point`,
  `prop-singular-homology-is-invariant-under-deformation-retracts`,
  `def-singular-chain-cross-product-on-generators`,
  `lem-singular-chain-cross-product-boundary-formula`,
  `prop-singular-chain-cross-products-are-natural`,
  `def-fundamental-singular-cycle-of-an-oriented-simplex`,
  `def-simplicial-to-singular-chain-map`,
  `lem-simplicial-to-singular-chains-commute-with-boundaries`
- B-page items:
  `ex-singular-chain-complex-of-a-point`,
  `ex-boundaries-of-the-standard-one-and-two-simplices`,
  `ex-direct-cancellation-in-the-boundary-squared-of-a-two-simplex`,
  `ex-the-prism-operator-for-a-path-homotopy`,
  `ex-homology-of-an-interval-from-contractibility`,
  `ex-homology-of-punctured-euclidean-space-by-deformation-retraction`,
  `cex-equal-homology-does-not-imply-homotopy-equivalence`,
  `cex-a-singular-cochain-is-not-a-finite-singular-chain`
- Proof-contract report:
  `research/frontier-30-batch-11.proof-contracts.json`

### Provenance and route rationale

- Every new page and item remains `status: draft`.
- I kept the design's prism-first AT-2 route: singular chains, induced maps,
  reduced homology, the $H_0$ computation, homotopy invariance, and only the
  chain-level seams for cross products and simplicial comparison.
- The same-homology / non-homotopy-equivalence counterexample stayed on the
  repaired witness `T^2` versus `(S^1 vee S^1) vee S^2`, with the homology half
  recorded truthfully as source-backed witness data and the non-homotopy side
  discharged by published $\pi_1$ results already in the declared closure.
- All proof-bearing items received proof-contract entries with boundary
  dispositions. I generated the citation and derivation rows from the final
  on-disk item text with `tools/regen-contract-entries.mjs` so the report
  matches the authored proofs exactly.

### Narrowed or dropped claims

- No planned item was dropped.
- No theorem statement was narrowed relative to the current batch manifest.
- One proof-format repair round adopted the precheck's canonical numbering
  stratification on four items:
  `thm-the-singular-boundary-squares-to-zero`,
  `prop-zero-th-singular-homology-is-free-on-path-components`,
  `lem-the-prism-triangulation-has-the-stated-oriented-boundary`, and
  `cex-equal-homology-does-not-imply-homotopy-equivalence`.
- I also removed one unused cited fact from
  `prop-zero-th-singular-homology-is-free-on-path-components` and rewrote one
  cochain witness citation in
  `cex-a-singular-cochain-is-not-a-finite-singular-chain` so every cited target
  now matches the actual claim used.

### Blockers

- None in this Step-5 authoring pass.

### Checks run

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-11 proof-bearing items...`
  after the canonical proof-row repair: **PASS** (`25 checked, 0 failing`)
- `node tools/validate-plan.mjs research/plan-spec.json`: **PASS**
- `node tools/content-policy.mjs research/frontier-30-batch-11.pages.json`:
  **PASS** (`35 scoped item(s), 0 error(s), 0 warning(s)`)
- `node tools/proof-contract.mjs research/frontier-30-batch-11.proof-contracts.json --strict`:
  **PASS**
- `node tools/citation-fidelity.mjs research/frontier-30-batch-11.proof-contracts.json --items-dir items --fail-on-missing-quote`:
  **PASS**
- `node tools/boundary-audit.mjs research/frontier-30-batch-11.proof-contracts.json --items-dir items --fail-on-contradicted`:
  **PASS** (template-reuse warnings only; no contradicted dispositions)
- `git diff --check -- ...batch-11 authored files...`: **PASS**
