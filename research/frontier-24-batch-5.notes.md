# frontier-24 · Beta · batch notes — `the-riemann-mapping-theorem`, `bloch-schottky-and-picard` (step 1 scaffold)

Run `frontier-24`, batch `5`, two A/B pairs, category `complex-analysis`.
Author: Beta. Session date: Saturday, August 29, 2026.
Design sections read:
[research/plan-complex-analysis-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-complex-analysis-track.md:2241),
[research/plan-complex-analysis-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-complex-analysis-track.md:3002),
and
[research/frontier-24-alpha-step0-drift.md](/Users/ianx/Projects/prestige-math-library/research/frontier-24-alpha-step0-drift.md:1).

Artifacts owned by this batch:
`research/frontier-24-batch-5.pages.json`,
`research/frontier-24-batch-5.coverage.json`,
and this file.

---

## 1. Shape and split check

- `the-riemann-mapping-theorem` (A): **18 items**.
- `the-riemann-mapping-theorem-examples` (B): **9 items**.
- `bloch-schottky-and-picard` (A): **16 items**.
- `bloch-schottky-and-picard-examples` (B): **7 items**.

Both A pages stay far below the 60-item split threshold, so no split is proposed.

High-level shape:

- CA-16 follows the design's four-stage extremal proof literally: nonempty extremal family, bounded derivative and Montel attainment, Hurwitz-to-univalence, and the explicit square-root enlargement that forces surjectivity. The page then turns to the classical univalent-function consequences: the area theorem, Bieberbach's `a_2` bound, Koebe quarter, and growth/distortion.
- CA-23 follows the design's classical route, not the later modular-`lambda` or Nevanlinna pages: Bloch, Landau, omitted-value logarithms, Schottky, Montel-Caratheodory, little Picard, the omitted-values lemma at a puncture, and great Picard.
- The CA-23 agreement remark is retained as a real item but kept non-load-bearing as a plain later-proof seam to CA-NV-2. The live plan does not yet expose an exact later item id for that agreement record, so the scaffold does not declare a formal `forward_refs` edge here.

## 2. Drift check

The generated task requires that design-vs-spec disagreements be recorded here and that `research/plan-spec.json` win locally if any appear.

### Finding 1 — no design/spec drift for either pair

- For `the-riemann-mapping-theorem`, the live spec and the design both use order `333`, companion order `334`, and page prerequisites
  `normal-families-and-montels-theorem`,
  `conformal-mapping-branches-and-the-schwarz-lemma`,
  and
  `the-winding-number-and-the-global-cauchy-theorem`.
- For `bloch-schottky-and-picard`, the live spec and the design both use order `347`, companion order `348`, and page prerequisites
  `normal-families-and-montels-theorem`,
  `conformal-mapping-branches-and-the-schwarz-lemma`,
  and
  `isolated-singularities-and-laurent-series`.
- The run's step-0 drift note records both pages as `VERDICT: no-drift` in
  [research/frontier-24-alpha-step0-drift.md](/Users/ianx/Projects/prestige-math-library/research/frontier-24-alpha-step0-drift.md:1)
  and
  [research/frontier-24-alpha-step0-drift.md](/Users/ianx/Projects/prestige-math-library/research/frontier-24-alpha-step0-drift.md:53).

No batch-local prerequisite or order repair was needed.

## 3. Source stack and harvest choices

Only the A pages carry the coverage harvest. The companion B pages are example/counterexample leaves.

### CA-16 source choice

- Matthias Weber, *Complex Analysis*:
  `https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download`
- Walter Rudin, *Real and Complex Analysis*:
  `https://studylib.net/doc/28312702/real-and-complex-analysis`

Why these two:

- Weber is the cleanest source match to the design itself: the exact sections named there are `5.2` for the extremal proof and `7.5` for the area/Bieberbach/Koebe block.
- Rudin independently backs the same classical package from a textbook treatment with the same `class S` route.

### CA-23 source choice

- Matthias Weber, *Complex Analysis*:
  `https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download`
- Aleksander Simonic, *The Ahlfors lemma and Picard's theorems*:
  `https://www.researchgate.net/publication/279310682_The_Ahlfors_lemma_and_Picard%27s_theorems`
- Alexandre Eremenko, *Lectures on Nevanlinna theory*:
  `https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf`

Why three rather than two:

- Weber is the primary classical treatment and matches the design's chosen route through Ahlfors/Bloch/Landau.
- Simonic gives a readable independent treatment of Schottky, little Picard, the omitted-values normality theorem, and great Picard in one continuous source.
- Eremenko is used only for the agreement seam. I read a narrow verified slice around the Second Main Theorem and the statement that the `n = 1` case is exactly Nevanlinna's SMT, which is enough to support the non-load-bearing CA-NV-2 remark without pretending this page re-proves Nevanlinna theory early.

## 4. Local scaffold decisions

- **Riemann-stage surjectivity stays on `Omega`, not on the image domain.** The delicate square-root enlargement does not require a new invariance lemma for homological simple connectivity. After moving the omitted disc value to `0` with a Blaschke factor, the composed map is nowhere zero on `Omega`, so the existing holomorphic-logarithm/root theorem on homologically simply connected domains supplies the square root directly on the original source domain.
- **The Hurwitz seam is kept auditable.** I did not compress "Montel limit plus injectivity survives" into one theorem. The design explicitly warns against a one-item Riemann Mapping Theorem, so the limit-attainment, Hurwitz-to-univalence, and surjectivity contradiction are separate.
- **The B page examples are normalized specializations, not reprints of earlier example pages.** The generic half-plane, strip, and sector maps already exist elsewhere in the library, and B-page leaf rules make those poor dependency targets. I therefore specialized the companion examples to normalized Riemann maps at chosen basepoints, which keeps the constructive scope the design wants without duplicating published examples.
- **CA-23 keeps Bloch and Landau distinct.** Landau is not folded into Bloch or vice versa. The page records the separate radius notions and then proves `L >= B > 0`, matching the design.
- **The omitted-values lemma is a real bridge item.** It is not replaced by a prose remark. It is the page's formal hinge between little Picard and great Picard, exactly as the design requires.
- **The CA-NV-2 bridge is explicit and non-load-bearing.** `rem-agreement-between-classical-and-nevanlinna-picard-theorems` stays as a local remark about the later Nevanlinna route, but the scaffold does not declare a formal `forward_refs` target because the live plan has not yet exposed the later item id.

## 5. Known limits

- CA-16 does **not** claim Caratheodory boundary extension in general. The design explicitly warns against that, and the companion page therefore avoids a boundary-extension item that would need more planar topology.
- CA-16 does **not** invoke CA-17's topological equivalence of simply connected notions. Every occurrence here is the homological notion from the published winding/global-Cauchy page.
- CA-23 does **not** import the modular-`lambda` proof or the later Nevanlinna page as a prerequisite. Both are recorded as later agreement routes only.
- CA-23 does **not** claim Cartan-Nevanlinna or projective-space value distribution. The Eremenko harvest records that material as out of scope for this batch rather than pretending the live plan already exposes a destination page id for it.

## 6. Validator results

Commands run on Saturday, August 29, 2026:

- `node tools/coverage-checklist.mjs research/frontier-24-batch-5.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-5.coverage.json --stamp`
- `git diff --check -- research/frontier-24-batch-5.pages.json research/frontier-24-batch-5.coverage.json research/frontier-24-batch-5.notes.md`

Results:

- `coverage-checklist`:
  `coverage-checklist: 2 page(s), 35 harvested result(s), 0 error(s), 0 warning(s)`
- whole-run `content-policy --manifest-only`:
  `content-policy: 294 scoped item(s), 0 error(s), 0 warning(s)`
- `validate-plan` passed. Its output is very long because it prints the live run's whole page order, but it ends with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 512 page(s) with item lists.
  ```

- `source-fetch-check --stamp` failed on every external URL from the shell with host-resolution errors:

  ```text
  ERROR fetch-check-dead: the-riemann-mapping-theorem: https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download — ENOTFOUND
  ERROR fetch-check-dead: the-riemann-mapping-theorem: https://studylib.net/doc/28312702/real-and-complex-analysis — ENOTFOUND
  ERROR fetch-check-dead: bloch-schottky-and-picard: https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download — ENOTFOUND
  ERROR fetch-check-dead: bloch-schottky-and-picard: https://www.researchgate.net/publication/279310682_The_Ahlfors_lemma_and_Picard%27s_theorems — ENOTFOUND
  ERROR fetch-check-dead: bloch-schottky-and-picard: https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf — ENOTFOUND
  source-fetch-check: 0/5 source(s) fetch-verified (0 newly stamped), 5 FAILED
  ```

- `git diff --check` on the three batch artifacts was clean.

State at close:

- The scaffold manifest is green.
- The coverage harvest is green.
- The fetch-stamp gate is red only because this runner cannot resolve external hosts from the shell, even though the cited URLs were opened and read through the web reader during this session.

Orchestrator resolution on Saturday, August 29, 2026:

- A network-enabled retry stamped three of the five source rows. The remaining
  StudyLib and ResearchGate URLs returned HTTP 403, so the orchestrator treated
  them as content blockers rather than transport noise.
- The StudyLib Rudin row was replaced by the body-verified Telecom Paris PDF of
  the same third edition. Chapter 14 and Theorems 14.9 and 14.13-14.15 were
  checked in the downloaded PDF.
- The ResearchGate Simonič row was replaced by the author's
  `arXiv:1506.07019v1` PDF. Sections 5.2-5.4 and Theorems 10-13 were checked on
  PDF pages 12-14, and the locator was corrected accordingly.
- `source-fetch-check --stamp` now passes `5/5 source(s) fetch-verified`, and
  `url-sweep --recover --fail-on-dead` reports all four unique URLs live with
  zero failures or suspects.

The batch-5 content blocker is resolved.

## Step-3 fix pass

### C5-1

- Disposition: accepted as already repaired on current disk; no further manifest edit was needed in this fix pass.
- Evidence: `research/frontier-24-batch-5.pages.json` now carries `rem-agreement-between-classical-and-nevanlinna-picard-theorems` with only backward `deps` on `thm-little-picard-theorem` and `thm-great-picard-theorem`, and no `forward_refs` field. `rg` against the batch manifest, notes, and `research/plan-spec.json` finds no live target item `cor-nevanlinna-picard-theorems` in batch 5 or the run plan. The controlling design at `research/plan-complex-analysis-track.md:3002` still describes CA-NV-2 only as a later non-load-bearing agreement route.
- Changed scaffold record: the repaired scaffold record remains the batch-5 CA-23 remark entry `rem-agreement-between-classical-and-nevanlinna-picard-theorems` in `research/frontier-24-batch-5.pages.json`, with the companion explanatory record in this notes file under the CA-23 shape and local-decision bullets stating that the seam is explicit but not a formal `forward_refs` edge.

## Step-5 authoring

- Authored ids: none.
- Provenance rationale: no new item or page file was written, so no new provenance block was added.
- Narrowed or dropped claims: none on disk.
- Blocker: I did not find a truthful way to complete the CA-23 chain (`lem-two-omitted-values-rule-out-an-essential-singularity` and therefore `thm-great-picard-theorem`) from the currently established local library results without importing an unestablished rescaling/normality lemma. The planned route in `research/frontier-24-batch-5.pages.json` names Montel-Caratheodory and little Picard, but the missing step is the nonconstant entire-limit extraction from an omitted-values punctured-disc function. I could not justify that bridge from the existing published items without silently appealing to Zalcman-type machinery that is not in the declared dependency stock for this batch.
- Recovery recheck on Saturday, August 29, 2026: I reopened the primary-source classical Picard treatment before retrying authoring. Simonic's Section `6.3` and the adjacent Picard section run Schottky and great Picard through Ahlfors-lemma / complete-hyperbolic-metric machinery on $\mathbb C\setminus\{0,1\}$; that machinery is not presently established anywhere in the batch-5 prerequisite closure or elsewhere on current disk as a citable item chain. So the live blocker is structural on the current repository state, not merely a missed local citation or a stale manifest dependency.
- Consequence: I stopped before writing partial batch content, because a half-authored CA-16-only or CA-23-prefix-only state would leave the batch scope materially incomplete while still requiring a misleading batch-wide validator report.
- Validators run in this blocked pass: none of the Step-5 authoring gates were rerun, because the scoped item set was not authored.
- Exact next action for an unblock: either add the missing rescaling theorem to the live plan as a prior dependency, or approve a different classical great-Picard route that can be closed from the existing prerequisite pages without hidden machinery.

## Orchestrator resolution of the Step-5 content blocker

- The blocker does not require Zalcman's lemma, a new prerequisite page, or a
  reading-order change. The batch's fetch-verified full text, Simonic §5.4,
  Theorem 14 (PDF pp. 14-15), gives the needed fixed-annulus argument.
- Replace the proposed nonconstant-entire-limit step by the following route.
  For dyadic radii tending to the puncture, rescale to
  `1/2 < |z| < 2`. Montel-Caratheodory supplies a chordally locally uniform
  subsequence. The published chordal-limit theorem makes its limit either
  finite holomorphic or identically infinity. Hence, on the unit circle, the
  selected rescalings of `f` are uniformly bounded in the first case, while
  their reciprocals are uniformly bounded in the second. Applying the
  published boundary maximum-modulus principle to each annulus between two
  consecutive selected circles bounds `f` or `1/f` on a whole punctured
  neighborhood. The published removable-singularity characterization then
  makes `f` removable or a pole.
- The scaffold and live plan now record this route and its exact backward
  dependencies. `thm-little-picard-theorem` was removed from this lemma's
  dependency list because the repaired proof does not consume it.
- This resolves the reported mathematical gap autonomously; no owner decision
  is needed. The recovery author should proceed with the full batch and retain
  the original-source verification instruction for any new mathematical
  uncertainty.

## Step-5 recovery audit — author-recover-5-2

- Date: Saturday, August 29, 2026.
- Scope reopened: the full batch-5 authoring target, with special attention to
  the CA-23 front half (`def-bloch-radius-and-bloch-constant` through
  `thm-schottky-theorem`) after the earlier tail repair for
  `lem-two-omitted-values-rule-out-an-essential-singularity`.

### Finding R5-1 — the remaining blocker is the Bloch/Landau/Schottky front half, not the repaired Picard tail

- I re-read the live design at
  [research/plan-complex-analysis-track.md](/Users/ianx/Projects/prestige-math-library/research/plan-complex-analysis-track.md:3002)
  together with the current batch manifest and the existing library closure on
  disk.
- The current repository does **not** contain an established Ahlfors-lemma /
  supporting-metric / complete-hyperbolic-domain chain under any live item id.
  `rg` over `items/`, `library/`, and `research/plan-spec.json` finds no
  authored or planned batch-5-local prerequisite item for that machinery.
- The CA-23 scaffold's declared dependencies for the Bloch/Landau/Schottky
  block are exactly the already-known one-variable branch, Schwarz-Pick,
  Montel, chordal-normality, and isolated-singularity items. That closure is
  enough for the repaired Picard tail, but it does **not** presently supply a
  truthful in-library proof of:
  - a universal positive Bloch radius bound,
  - the Schottky estimate derived from that bound, or
  - the resulting Landau radius statement,
  without importing unscheduled Ahlfors machinery or silently changing the
  route to a theorem that the library has not yet established.
- I tested the obvious fallback routes before stopping:
  - direct rescaling plus elementary Cauchy estimates is too weak to force the
    fixed schlicht-disc radius demanded by `thm-bloch-theorem`;
  - the current Riemann-mapping / Koebe page gives univalent-function
    consequences once injectivity is already known, but it does not by itself
    produce the needed universal local injectivity radius for an arbitrary
    holomorphic disc map;
  - the repaired Simonic fixed-annulus argument closes the **great Picard**
    lemma, but it does not backfill the missing Bloch/Schottky mechanism.

### Consequence

- The earlier tail blocker is genuinely resolved, but batch 5 is still blocked
  overall by the unestablished CA-23 front-half mechanism.
- I did **not** author any batch-5 item file, page file, or
  `research/frontier-24-batch-5.proof-contracts.json`, because doing so would
  require either unsupported mathematics in CA-23 or a knowingly incomplete
  batch artifact.
- I did **not** rerun the Step-5 authoring validators in this recovery pass,
  because no authoring changes were made on disk.

### Exact next action for an unblock

- The live plan needs one of these two upstream changes before honest batch-5
  authoring can proceed:
  - add the missing Ahlfors/Bloch-supporting machinery as explicit prior
    dependencies, or
  - revise CA-23 to a different proof route whose full prerequisite chain is
    already established in the library.

### Clarification after recovery attempt 1

- Recovery attempt 1 conflated two different parts of Simonic's exposition.
  The complete-hyperbolic-metric/Ahlfors machinery occurs upstream in that
  source's chosen derivation of Schottky and normality. It is **not** used in
  the fixed-annulus argument after the Normality Theorem has been established.
- This batch independently establishes `thm-schottky-theorem` from its
  logarithm/Bloch chain and then establishes
  `thm-montel-caratheodory-theorem` from Schottky plus the already-published
  chordal Arzela-Ascoli criterion. Those are earlier same-page results, so the
  fixed-annulus proof may cite them without importing Simonic's upstream metric
  construction.
- For this lemma, start after `thm-montel-caratheodory-theorem`. The remaining
  argument consumes only that theorem,
  `thm-chordal-limit-theorem-for-meromorphic-functions`,
  `thm-boundary-maximum-modulus-principle`, and
  `thm-removable-singularity-characterizations`/the isolated-singularity
  trichotomy. Every one is in the current page closure and `validate-plan`
  passes with the exact dependency list.
- The ordinary Great Picard conclusion is simpler than Simonic's stronger
  Julia cone theorem: after assuming two finite values occur only finitely
  often, shrink one punctured disc so both are omitted globally, normalize
  them to `0` and `1`, and apply the repaired lemma. No cone cover, nonconstant
  entire limit, Zalcman lemma, or new Ahlfors-metric item is part of this proof.

## Orchestrator resolution of the Bloch/Landau front-half blocker

- Recovery attempt 2 correctly rejected the old scaffold sentence claiming
  Schwarz-Pick controls the derivative of an arbitrary holomorphic range map.
  That sentence was too weakly justified. It does not make the page
  structurally blocked: the standard elementary maximizing-point proof closes
  Bloch directly from existing results.
- Fix `R=1/2` and maximize `(R-|z|)|f'(z)|` on `|z|<=R`. At a maximizer `z_0`,
  put `r=(R-|z_0|)/2` and normalize
  `g(w)=(f(z_0+rw)-f(z_0))/(r f'(z_0))`. Maximality gives `|g'|<=2` on the unit
  disc, while `r|f'(z_0)|>=R|f'(0)|/2`.
- Since `g(0)=0` and `g'(0)=1`, Schwarz applied to `(g'-1)/3` gives
  `|g'(w)-1|<=3|w|`. On `|w|<=1/6`, straight-line integration gives
  injectivity and `|g(w)|>=|w|/2` on the boundary. Rouche then shows that
  `g(D(0,1/6))` contains `D(0,1/12)`. Undoing normalization gives a schlicht
  disc of radius at least `1/48` under `|f'(0)|=1`.
- Landau follows immediately because every schlicht disc is a round disc in
  the image. The scaffold and live plan now state this exact route and cite
  `thm-extreme-value-metric`, `thm-unit-disc-schwarz-lemma-with-rigidity`, and
  `thm-rouche-theorem`; no Ahlfors-metric prerequisite is required.
- Full-text source verification for the repaired route: Berkeley Math 215A
  notes, Theorem 19.6 and its proof/sketch on PDF pp. 69-71
  (`https://math.berkeley.edu/~moorxu/oldsite/notes/215a/215amain.pdf`) use the
  same maximizing quantity `|f'(z_0)|(1-|z_0|)`, the half-radius disc, the
  resulting derivative/increment bound, and a smaller disc for the univalent
  Bloch conclusion. The original source is André Bloch, *Les théorèmes de M.
  Valiron sur les fonctions entières et la théorie de l'uniformisation*,
  Annales de Toulouse 17 (1925), pp. 1-22, available as full text at
  `https://www.numdam.org/item/AFST_1925_3_17__1_0.pdf`. These corroborate that
  the elementary route is classical rather than a newly invented Ahlfors-free
  claim.

## Orchestrator clarification of the Schottky bridge

- Stoll, *Introductory Complex Analysis*, Lemma 16.6, Corollaries 16.7/16.9,
  and Theorem 16.10 (PDF pp. 54-56,
  `https://mathe2.uni-bayreuth.de/stoll/lecture-notes/IntroductoryComplexAnalysis.pdf`)
  gives the complete branch construction the earlier scaffold only named.
- Write `f=exp(2 pi i h)`. Since `f` omits `1`, `h` omits the integers and in
  particular `0,1`; on the disc, take holomorphic roots `u^2=h` and
  `v^2=h-1`. Because `(u-v)(u+v)=1`, take `u-v=exp(g)` and obtain
  `f=-exp(pi i cosh(2g))`. The explicitly displayed lattice omitted by `g`
  meets every radius-one disc.
- Rescaling the already proved Bloch theorem at `w` now gives
  `|g'(w)| <= 1/(b(1-|w|))`, where `b>0` is the page's Bloch bound. A bounded
  center value for `f` bounds a branch choice of `g(0)`; for very small
  `f(0)`, apply the same construction to `1-f`. Radial integration and the
  displayed exponential-cosh formula give the required Schottky bound on
  each smaller disc.
- The scaffold and plan now name the published holomorphic-root corollary and
  remove the unused Landau dependency. Thus the complete Schottky proof also
  lies in the current closure; no Ahlfors metric is hidden in this step.

## Orchestrator repair of the Koebe growth/distortion order

- The previous scaffold put growth before distortion and suggested obtaining
  the sharp growth bounds from the quarter theorem. That route does not supply
  the sharp constants. The authoritative full-text proof instead derives
  derivative distortion first from the normalized automorphism transform and
  the sharp second-coefficient bound, then derives growth by integration.
- Weber, *An Introduction to Complex Analysis and Geometry*, Theorem 7.5.8,
  PDF pp. 108-109
  (`https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download`)
  gives this order explicitly: the transformed second coefficient yields
  `(1-r)/(1+r)^3 <= |f'(z)| <= (1+r)/(1-r)^3`; radial integration gives the
  upper growth bound; and the lower bound follows by choosing a point of
  minimum image modulus on `|z|=r`, lifting the segment from zero to its image,
  and integrating the lower derivative bound along that lifted curve.
- The batch manifest and live plan now put
  `thm-koebe-distortion-theorem` before `thm-koebe-growth-theorem`, remove the
  backward growth dependency from distortion, and make growth depend on the
  established distortion theorem. Both proof strategies spell out the sharp
  route the author must use.

## Step-5 authoring

- Date: Saturday, August 29, 2026.
- Authored ids on `the-riemann-mapping-theorem`: `def-univalent-holomorphic-function`, `def-normalized-univalent-class`, `def-riemann-map-extremal-family`, `lem-riemann-map-extremal-family-is-nonempty`, `lem-riemann-map-extremal-derivatives-are-positive-and-bounded`, `lem-riemann-map-extremal-derivative-is-attained`, `lem-nonconstant-local-uniform-limits-of-univalent-functions-are-univalent`, `lem-riemann-map-extremizer-is-univalent`, `lem-riemann-map-extremizer-is-surjective`, `thm-riemann-mapping-theorem`, `cor-uniqueness-of-the-normalized-riemann-map`, `thm-area-theorem-for-exterior-univalent-functions`, `cor-bieberbach-second-coefficient-bound`, `thm-koebe-one-quarter-theorem`, `thm-koebe-distortion-theorem`, `thm-koebe-growth-theorem`, `cor-quarter-disc-inclusion-for-univalent-functions`, `rem-choice-strength-of-the-riemann-mapping-proof`.
- Authored ids on `the-riemann-mapping-theorem-examples`: `ex-normalized-riemann-map-for-the-upper-half-plane-at-i`, `ex-normalized-riemann-map-for-a-horizontal-strip`, `ex-normalized-riemann-map-for-a-sector-with-branch-choice`, `ex-normalized-riemann-map-for-the-slit-plane`, `ex-the-unit-disc-extremal-problem-is-solved-by-the-identity`, `ex-koebe-function-realizes-the-quarter-disc-bound`, `cex-a-biholomorphism-between-the-disc-and-the-punctured-disc-cannot-exist`, `fs-riemann-map-is-unique-without-normalization`, `fs-conformal-equivalence-preserves-euclidean-area`.
- Authored ids on `bloch-schottky-and-picard`: `def-bloch-radius-and-bloch-constant`, `def-landau-radius-and-landau-constant`, `def-two-value-omitting-holomorphic-family`, `lem-bloch-rescaling-at-an-almost-maximal-derivative`, `lem-quantitative-univalence-from-controlled-derivative`, `thm-bloch-theorem`, `thm-landau-theorem`, `lem-holomorphic-logarithms-for-two-omitted-values`, `thm-schottky-theorem`, `thm-montel-caratheodory-theorem`, `thm-little-picard-theorem`, `lem-two-omitted-values-rule-out-an-essential-singularity`, `thm-great-picard-theorem`, `cor-meromorphic-little-picard-theorem`, `cor-meromorphic-great-picard-theorem`, `rem-agreement-between-classical-and-nevanlinna-picard-theorems`.
- Authored ids on `bloch-schottky-and-picard-examples`: `ex-ahlfors-proof-yields-the-explicit-bloch-bound-sqrt-three-over-four`, `ex-schottky-bound-for-a-map-with-center-value-one-half`, `ex-the-exponential-function-omits-exactly-zero-and-shows-little-picard-is-sharp`, `ex-exp-one-over-z-shows-great-picard-is-sharp`, `cex-a-meromorphic-function-on-the-plane-can-omit-two-sphere-values`, `fs-little-picard-needs-a-boundedness-hypothesis`, `fs-a-nonconstant-meromorphic-function-on-the-plane-omits-at-most-one-sphere-value`.
- Provenance rationale: all four page files and all fifty batch-5 items remain `status: draft`. Definitions and remarks are tagged `proof: not-applicable`. The theorem/corollary/example/counterexample/false-statement statements are literature-derived except for the explicit Bloch-example revision below; the written proofs are `ai-generated` because the on-disk arguments are new local formulations built from published prerequisites rather than copied source text.
- Revised claim: `ex-ahlfors-proof-yields-the-explicit-bloch-bound-sqrt-three-over-four` now records the explicit `1/48` bound produced by the elementary maximizing-point Bloch proof established on this page. The stable legacy id is retained, while the item, batch manifest, live plan, and page description all state the proof and constant actually supplied. `thm-koebe-growth-theorem` is not narrowed: it contains both sharp bounds, with distortion proved first as required by the full-text source.
- Additional source rationale during authoring: `thm-schottky-theorem` cites Stoll's notes for the branch-construction seam named in the recovery note, while the fixed-annulus omitted-values lemma stays on the fetched Simonic route already recorded in batch coverage.
- Proof-contract artifact written: `research/frontier-24-batch-5.proof-contracts.json` with `42` proof-bearing entries, then regenerated from the authored facts blocks and numbered proof steps on current bytes.
- Blockers: none remaining for Step 5 on current disk.
- Validators run on Saturday, August 29, 2026:
  - `node tools/tsx-run.mjs tools/precheck.mts <all 50 batch-5 item files>` -> `42 checked, 0 failing — all clean`.
  - `node tools/validate-plan.mjs research/plan-spec.json` -> `OK`, with only the standing repository-wide `redundant-prereq` advisories.
  - `node tools/content-policy.mjs research/frontier-24-batch-5.pages.json` -> `content-policy: 50 scoped item(s), 0 error(s), 0 warning(s)`.
  - Extra contract sanity check: `node tools/proof-contract.mjs research/frontier-24-batch-5.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 42/42 item(s) checked`.

## Orchestrator post-author audit and repair

- Restored the full sharp two-sided statement of Koebe growth and proved its
  lower bound by the source-backed minimum-modulus/preimage-segment argument.
  Distortion now precedes growth in the manifest, live plan, page wrapper, and
  item dependency chain.
- Replaced the invalid annular-image/sign calculation in the area theorem with
  the classical bounded-complement calculation and finite-partial-sum limit.
- Replaced Schottky's false compactness claim with Stoll Corollary 16.9's
  explicit logarithm/root center normalization, fetched from the recorded full
  text, and repaired the omitted-lattice evaluation to distinguish `g(z)` from
  its value `zeta`.
- Corrected the Bloch-radius definition, the rescaling lemma's nonzero-derivative
  hypothesis, Little Picard's fixed-radius rescaling, and the holomorphic and
  meromorphic Great Picard infinitely-often quantifiers.
- Synchronized the legacy Ahlfors-named example id to the elementary `1/48`
  claim actually proved in the chosen Ahlfors-free route across the item,
  manifest, live plan, page prose, and authoring report.
- Replaced mechanically repeated proof-contract boundary text with evidence
  tied to each item's actual numbered derivations. Strict proof-contract,
  citation fidelity, and boundary audit are now clean; boundary audit reports
  no template-reuse clusters and no contradicted dispositions.
