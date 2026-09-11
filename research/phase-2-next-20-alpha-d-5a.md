# Phase 2 next-20 — Alpha d, Step 5A authored-content review (batch 6)

Run: `phase-2-next-20` · group `d` · covers batch `6` (36 items, 2 pages)
Scope file: `research/phase-2-next-20-step5-scope-6.json`
Reviews: 36 item decisions + 2 page decisions (one `authored:6:<id>` obligation each).

## Outcome

34 items and both pages accepted as sound; 2 items repaired locally with
`repair_confidence: 1`; 0 escalations. No statement, hypothesis, constant,
dependency or AC qualification was weakened or changed. The two repairs edit
proof text (and the owning contract's matching `derivations` claims) only; the
manifest statement/strategy entries, page order and dependency records are
unchanged, so no shared-plan or Phase-2 amendment is required.

| # | item | verdict |
|---|---|---|
| 1 | def-hg-toolkit-slim-triangles-products-and-four-point-constants | accepted |
| 2 | def-hg-toolkit-local-geodesics-and-hausdorff-control | accepted |
| 3 | def-hg-toolkit-hyperbolic-group-and-stable-length | accepted |
| 4 | lem-geodesic-triangles-in-trees-are-tripods | accepted |
| 5 | lem-slim-triangles-imply-the-gromov-product-inequality | accepted |
| 6 | lem-the-gromov-product-inequality-implies-the-four-point-condition | accepted |
| 7 | lem-the-four-point-condition-implies-slim-triangles | accepted |
| 8 | lem-hg-toolkit-halfspace-separation-for-local-geodesic-mesh | accepted |
| 9 | lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics | accepted |
| 10 | lem-hg-toolkit-polygonal-interpolation-of-quasi-geodesics | accepted |
| 11 | lem-hg-toolkit-exponential-projection-contraction | repaired |
| 12 | thm-morse-stability-with-explicit-parameter-dependence | repaired |
| 13 | lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse | accepted |
| 14 | lem-hyperbolicity-is-transported-by-a-quasi-isometry | accepted |
| 15 | lem-short-loop-relators-give-a-finite-dehn-presentation | accepted |
| 16 | lem-linear-isoperimetry-implies-uniformly-thin-geodesic-bigons | accepted |
| 17 | lem-infinite-order-elements-have-positive-stable-translation-length | accepted |
| 18 | lem-axis-fellow-travelling-controls-the-centralizer | accepted |
| 19 | def-hg-toolkit-gromov-sequences-and-boundary-product | accepted |
| 20 | lem-asymptotic-gromov-sequences-form-an-equivalence-relation | accepted |
| 21 | lem-boundary-products-are-independent-of-representative-and-basepoint | accepted |
| 22 | lem-hg-toolkit-proper-ray-compactness-and-sequence-comparison | accepted |
| 23 | lem-quasi-isometries-extend-to-boundary-homeomorphisms | accepted |
| 24 | def-hg-toolkit-loxodromics-and-independent-poles | accepted |
| 25 | lem-hg-toolkit-finitely-many-cayley-cone-types | accepted |
| 26 | lem-hg-toolkit-infinite-hyperbolic-groups-have-infinite-order-elements | accepted |
| 27 | lem-hg-toolkit-non-elementary-groups-have-independent-loxodromics | accepted |
| 28 | lem-independent-loxodromics-have-disjoint-pole-neighbourhoods | accepted |
| 29 | lem-loxodromic-elements-have-north-south-boundary-dynamics | accepted |
| 30 | lem-hg-toolkit-free-cayley-tree-from-reduced-words | accepted |
| 31 | thm-quantitative-hyperbolic-geometry-toolkit | accepted |
| 32 | ex-morse-stability-in-a-tree | accepted |
| 33 | ex-a-local-geodesic-constant-in-a-cayley-graph | accepted |
| 34 | ex-boundary-extension-of-a-tree-quasi-isometry | accepted |
| 35 | ex-ping-pong-for-two-loxodromics | accepted |
| 36 | cex-properness-is-needed-for-the-compact-boundary-package | accepted |
| p1 | page quantitative-hyperbolic-geometry-toolkit | accepted |
| p2 | page quantitative-hyperbolic-geometry-toolkit-examples | accepted |

## Repairs

### 1. `thm-morse-stability-with-explicit-parameter-dependence` (defect `p2-next20-5a-d-morse-prime-projection-bound`)

Defect: step 2.1 asserted "Step 1.2 yields `d(p(w),p(t')) < 4ρ+2Q`", but the
radial estimate displayed in step 1.2 gives only `s ≤ d(x,r)−A+2Q+4κ` and the
factor-two bound `s ≤ 2d(x,y)+2Q+4κ`. The constant `4ρ+2Q` (used again at the
stage thresholds `9ρ+4Q_k` and in the stopping construction) needs the prime
bound `s ≤ d(x,y)+2Q+4κ`, which the argument uses but never states. AFP
`Gromov_Hyperbolicity` (document.pdf, `Morse_Gromov_Theorem` chapter) proves and
uses exactly this prime bound as `proj-along-quasiconvex-contraction′`
(`dist px py ≤ dist x y + 4δ + 2C`, read at PDF pages 172–174), and its
`quasi-convex-projection-small-gaps` lemma (pages 174–177) then concludes
`d − 4δ − 2C ≤ dist (p a) (p t)`; the item's `4ρ+2Q` is the same constant with
δ→ρ and C→Q.

Repair: inserted the two-case derivation into step 1.2 (if `B≤A`, use the radial
estimate with `z=r`; if `B>A`, use it with the roles of `(x,p)` and `(y,r)`
interchanged), and rewrote the two sentences of step 2.1 that depend on it, so
the chain is now
`d(p(w),p(t')) ≤ d(f(w),f(t'))+2Q+4κ < 2(ρ−κ)+2Q+4κ = 2ρ+2Q+2κ ≤ 4ρ+2Q`.
The contract entries `derive-1.2`, `derive-2.1` were updated to the repaired
step text. Statement, endpoint constants, the `92λ²(ε+3δ)` conclusion and all
later steps are unchanged. Evidence is in
`research/defect-ledger.jsonl` and `research/phase-2-next-20-batch-6.proof-contracts.json`.

### 2. `lem-hg-toolkit-exponential-projection-contraction` (defect `p2-next20-5a-d-exp-projection-product-justification`)

Defect: step 1.2 justified `d(x,u) ≤ d(x,p)−t+2κ` by "Products give
`(x|u)_p ≥ t−κ`". The product inequality at basepoint `p` gives only
`s ≤ t+κ` for `s=(x|u)_p`, so the printed justification does not license the
step. The conclusion is true and is obtained directly at basepoint `x` with
bridge `u`: with `A=d(x,p)`, `P=d(p,z)` and `A+P=d(x,z)+2t`,
`(p|z)_x=A−t` and `(p|u)_x=(u|z)_x=(A+d(x,u)−t)/2`, so
`(p|z)_x ≥ min{(p|u)_x,(u|z)_x}−κ` rearranges to `d(x,u) ≤ d(x,p)−t+2κ`.

Repair: replaced the sentence with the explicit computation; `derive-1.2` was
updated. The rest of the item (steps 1.1, 1.2's four-point contraction, 2.1's
halving estimate, 2.2, 3.1, 4.1–4.2, 5.1, 6.1) was checked unchanged and the
exponential bound with `4√2 λ (b−a) exp(−(D−K−ε/2)log2/(5ρ))` matches AFP
`geodesic-projection-exp-contracting` with δ→ρ.

## Source evidence read for this review

- Drutu–Kapovich revised Chapter 11 (`https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf`),
  read directly at PDF indices 394–398: Corollary 11.43, Theorem 11.45 and
  Lemma 11.46. Our `lem-hg-toolkit-halfspace-separation-for-local-geodesic-mesh`
  strengthens DK's printed δ/2 half-space separation to δ (which is what DK's
  own proof derives) and its endpoint bound to 3δ/2 (direct triangle
  inequality); our `lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics`
  reproduces DK's k=6δ, (3,4δ) statement including the δ=0 tree case
  (DK Exercise 11.44).
- Drutu–Kapovich working draft (`kapovich_drutu.pdf`), PDF pages 235–236:
  Lemma 9.25 and Lemma 9.31 (Gromov product comparable to `dist(p,γ)`, Rips
  δ-hyperbolic implies Gromov 3δ-hyperbolic with
  `(x,y)_p ≥ min((x,z)_p,(y,z)_p) − 3δ`), which is exactly the statement and
  constant of `lem-slim-triangles-imply-the-gromov-product-inequality`.
- AFP `Gromov_Hyperbolicity` document (`/tmp/hg-afp.pdf`, 419 pp.), read at
  PDF pages 171–232: `proj-along-quasiconvex-contraction` and its prime form,
  `quasi-convex-projection-small-gaps`, `geodesic-projection-exp-contracting-aux`,
  `geodesic-projection-exp-contracting` (Main induction with
  `5δk+15δ/2+c/2`), the small-gap/stopping lemmas, and the final
  `hausdorff-distance (f'{a..b}) G ≤ 92*lambda^2*(C+deltaG)`. Our items use the
  plan's conservative `κ=3δ` in place of AFP's δ and reproduce the `92λ²`
  constant structure.
- Gouëzel–Shchur, arXiv:1810.04579 (10 pp., read): Lemma 2.1 and the formal
  `quasi_geodesic_made_lipschitz` parameters (approximation `4ΔC`,
  `(8Δ+1)C` quasi-geodesic, `Δ/(Δ−1)λ`-Lipschitz, endpoint separation `Δ·C`).
  `lem-hg-toolkit-polygonal-interpolation-of-quasi-geodesics` states and proves
  its own `4ε`/`(λ,4ε)`/`2λ` version under the endpoint separation `2ε`; the
  proof's constants were checked line by line (marking gaps in `[h,3h/2]`,
  `h=ε/λ`, case table `(6/5,3/5),(1,1),(3/2,0),(13/10,2/5)`, `1+2E+J ≤ 4`).
- The Hamann and Canary source locations already recorded by the Step-1/Step-3
  authors were reused for the cone-type, stable-length, centralizer, pole and
  north–south items; those arguments are elementary and were re-derived locally
  rather than re-fetched. Step-1/Step-3 retrieval history in
  `research/phase-2-next-20-batch-6.coverage.json` was not restated as new reading.
- `research/plan-group-theory-track.md:4040` fixes the intended Morse constant
  `M(λ,ε,δ)=92λ²(ε+3δ)`, matching the item.

## Local suppliers

None were needed. The batch already carries its two local lemmas
(`lem-hg-toolkit-halfspace-separation-for-local-geodesic-mesh`,
`lem-hg-toolkit-free-cayley-tree-from-reduced-words`) before their consumers,
and every external dependency resolves to a published item. No new item, pair,
page or manifest entry was added.

## Required shared-plan and Phase-2 amendments

None. The repairs do not change any statement, constant, dependency edge or AC
qualification, so the shared plan, `requires` arrays, page order, cross-batch
input (`phase-2-next-20-batch-6.cross-batch-dependencies.json`, still `[]`) and
the Phase-2 scope remain accurate.

Records made stale by the two repairs (reported, not edited — they are
owner-owned): `research/phase-2-next-20-step3b-owner-thm-morse-stability-with-explicit-parameter-dependence.json`
and `research/phase-2-next-20-step3b-owner-lem-hg-toolkit-exponential-projection-contraction.json`
now carry pre-repair item hashes (`9e02e79e…` and `0261419e…`), as do the
matching `research/phase-2-next-20-step1-<id>.json` readiness records. Their
decisions (`repaired`, owner true) are unaffected in substance — this review
accepted both items and strengthened their proofs — but the serial lead/owner
should re-record the current hashes if any later stage re-checks readiness.
The batch manifest, proof contract, page order and dependency records are
already current (stamped by `step5-scope.mjs stamp`).

## Published findings

No new defective published item was found in the reviewed scope. The two known
published defects that touch this material are already in the canonical ledger:

- `thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree`
  (A-P): defective right-Cayley orientation labels in proof 1.2. This batch does
  not consume it; `lem-hg-toolkit-free-cayley-tree-from-reduced-words` supplies
  the toolkit's free-tree examples from `thm-reduced-words-form-the-free-group`
  only. Under the ledger lock (acquired, re-read, merged, released) I updated
  the existing narrative entry and its A-P index row to record that the local
  alternative supplier is now authored/reviewed (draft, unpublished) and that
  the published repair is unchanged and still pending Phase 3. No published
  byte was edited.
- `cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings`
  and its consumer `thm-two-metric-spaces-are-quasi-isometric-exactly-when-...`
  and the wording slip in `thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse`
  (A-P): already recorded. `lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse`
  derives its embedding inequalities from the quasi-inverse definition directly
  (step 1.1/2.1), so the published omission is not a prerequisite of any clause
  in this batch.

## Checks actually run

- `node tools/tsx-run.mjs tools/precheck.mts <all 36 explicit item paths>`: **33
  proof-bearing items pass, 0 failing** (the three definitions are not
  proof-bearing). Re-run for the two repaired items after editing: pass.
- `node tools/proof-contract.mjs research/phase-2-next-20-batch-6.proof-contracts.json --strict`:
  **36/36 checked, 0 error(s), 0 warning(s)**; re-run for both repaired items.
- `node tools/citation-fidelity.mjs research/phase-2-next-20-batch-6.proof-contracts.json`:
  **129 citations over 36 items**, no missing quotes, no widening candidates.
- `node tools/content-policy.mjs research/phase-2-next-20-batch-6.pages.json`:
  **36 items, 0 error(s), 0 warning(s)**.
- `node tools/manifest-deps.mjs research/phase-2-next-20-batch-6.pages.json`:
  **36 items, 0 errors**.
- `node tools/risk-report.mjs research/phase-2-next-20-batch-6.proof-contracts.json --require-reviewed`:
  **0 errors, 36 items routed**; complete `risk_review` notes were written for
  all 22 high/critical items during this read via `tools/apply-risk-reviews.mjs`.
- `node tools/rendercheck.mjs <repaired items + both pages>`: clean (KaTeX and
  frontmatter parse).
- Structural cross-check: manifest page A item order equals the library page's
  `items` list (31/31, same order); the B page keeps its 5 examples in
  `examples`; all 25 external dependencies are published (none draft, none
  Recorded material, no cross-batch edge); the batch DFS over declared `deps`
  was re-read rather than re-run as a proof audit.
- `node tools/defect-ledger.mjs append` wrote the two repair rows and re-rendered
  `research/DEFECT-LEDGER.md` (7941 rows).
- `research/published-consumer-supplier-ledger.md` was edited only under
  `research/.published-consumer-ledger.lock` (mkdir, re-read, merge, `rmdir`).

Engine-side routing checks were run locally after the decisions file was
written: `node tools/step5-scope.mjs stamp --run phase-2-next-20 --group d`
stamped 38 current carrier hashes, and
`node tools/step5-scope.mjs check --run phase-2-next-20 --phase adjudicate
--batch 6` reported `36 item(s) routed, 38 adjudication obligation(s),
0 error(s)`. These are the engine's own validators in check mode; the serial
lead/engine still owns the transitions, and any later edit re-stamps the
carriers.

## Blockers and residual uncertainty

- No owner escalation is raised. Every assigned item has a complete, locally
  licensed proof; no missing prerequisite was found; the two published defects
  above are not load-bearing for any clause.
- Honest depth note for `thm-morse-stability-with-explicit-parameter-dependence`:
  the auxiliary estimates, the small-gap assertion, the outer induction, the
  product recurrence, the two stopping cases and the final Hausdorff inclusions
  were read and their constants recomputed (including the exact rational
  certificate: the degree-6 sum with geometric tail is 1.999706 < 2, and the
  degree-16 value at `(459/50)q₀` is 579.057 > 579). The coordinate bookkeeping
  of step 4.1/10.1 (the cap `L+d(m,π)` on projections in the two outer
  intervals) was checked for consistency with the stated thresholds and the AFP
  counterpart but was not reproduced line by line; I found no contradiction, but
  I do not claim a complete independent verification of that sub-chain.
- The Step-1 escalations for this batch (17 items) are resolved by the authored
  text reviewed here (each escalation's named obligation now has a local proof:
  6δ-local mesh, projection contraction, the exact Morse recurrence, the
  transport/boundary formulas, stable-length counting, cone types, poles,
  independent loxodromics, north–south dynamics, proper-ray compactness). No
  escalation is preserved as unresolved because none of the authored arguments
  leaves the escalation's specific obligation open.

## Choice audit

AC is declared and used exactly where the items state it: Morse projection and
radial-segment families (steps 3.1 and 7.1 of the Morse theorem), the coarse
inverse selector, the proper-ray countable selections, the filling/cone
selections behind `δ₀(K,L)`, and the boundary-extension use of Morse. The
metric equivalences, the finite-word Dehn argument, cone types, stable length,
the orbit-chord and centralizer/pole bounds, the sequence-product topology and
north–south dynamics are choice-free as claimed. No repair added or removed an
AC dependency.
