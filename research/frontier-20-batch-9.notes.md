# frontier-20 · Beta-9 · batch notes — `the-residue-theorem` / `the-hartogs-phenomena`

Run `frontier-20`, batch `9`, two A/B pairs, category `complex-analysis`.
Author: Beta-9. Session date: Wednesday, August 26, 2026.
Design sections:
[research/plan-complex-analysis-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-complex-analysis-track.md:1509) and
[research/plan-complex-analysis-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-complex-analysis-track.md:3238).

Artifacts owned by this batch:
`research/frontier-20-batch-9.pages.json`,
`research/frontier-20-batch-9.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Shape and split check

- `the-residue-theorem` (A): **22 items**.
- `the-residue-theorem-examples` (B): **11 items**.
- `the-hartogs-phenomena` (A): **19 items**.
- `the-hartogs-phenomena-examples` (B): **6 items**.

Both A pages stay well below the 60-item ceiling, so no split is proposed.

High-level shape:

- CA-9 keeps the design's core route: null-homologous-cycle residue theorem,
  the finiteness lemma, large-arc / Jordan / indentation estimates, rational
  and Fourier real-integral evaluations, the unit-circle substitution, the
  keyhole branch calculation, and the cotangent/cosecant summation branch plus
  the direct Basel computation.
- SC-2 keeps the design's elementary Hartogs route: Hartogs figures and their
  hulls, puncture and coordinate-hyperplane extension, the Baire-plus-Fatou
  local-boundedness step for separate holomorphy, then shellwise propagation
  and gluing to the compact-hole theorem.

---

## 2. Design-vs-spec drift that I did not settle

The dispatch says to record these and follow `research/plan-spec.json`, not the
design, when they disagree.

### Finding 1 — CA-9 page prerequisites still drift

The CA-9 design block states:

`CA-8, CA-7, improper-integrals, convexity`

but the current `research/plan-spec.json` page record is:

`["convexity", "isolated-singularities-and-laurent-series", "improper-integrals"]`.

I left the page-level `requires` at the spec value. The item graph still cites
earlier global-Cauchy and logarithm-branch items where the design actually
needs them, so this drift remains a run-level issue rather than something this
batch should silently normalize.

### Finding 2 — SC-2 page prerequisites drift even more heavily

The SC-2 design block states:

`SC-1, CA-8, CA-14, cantor-set-baire-and-measure-zero, and the MT-8 integration/Fatou interfaces`

but the current `research/plan-spec.json` page record is:

`["subharmonic-functions-and-the-dirichlet-problem", "holomorphic-functions-of-several-variables", "complete-metrizability-and-baire", "isolated-singularities-and-laurent-series"]`.

Again I kept the manifest page-level `requires` at the spec value and used
item-level `deps` for the actual mathematical closure. In particular, the
choice-free Baire item and Fatou's lemma are both real dependencies of the
separate-holomorphy proof strategy even though the current page-level spec does
not name those source pages explicitly.

---

## 3. Source choices and URL discipline

Only the two A pages need harvest ledgers. The companion B pages are worked
example and witness pages.

### CA-9 sources actually read

1. Lars V. Ahlfors, *Complex Analysis*, 3rd ed., via the live alternate
   StudyLib mirror:
   `https://studylib.net/doc/26190074/ahlfors---complex-analysis`
2. Elias M. Stein and Rami Shakarchi, *Complex Analysis*, via the live
   StudyLib mirror:
   `https://studylib.net/doc/27609666/stein-complex-analysis`
3. Russell Howell and John Mathews, *Complex Analysis*, official HTML textbook:
   `https://complexanalysis.org/web/ch_residue.html`

What these support in the scaffold:

- Ahlfors supplies the residue theorem in its homological form, the compactness
  argument for finiteness of the residue sum, the real-integral application
  route, the principal-value indentation discussion, and the keyhole branch
  setup.
- Stein--Shakarchi independently backs the residue formula itself, the circle
  corollary, and the main real/Fourier contour-evaluation method.
- Howell--Mathews independently backs the chapter-level application split that
  the scaffold follows: trigonometric integrals, rational improper integrals,
  oscillatory integrals, indented contours, and branch-point contours.

### Important CA-9 source note

The real-integral and keyhole branches are directly exposed by the read source
stack. The later cotangent/cosecant summation branch is **less explicitly
surfaced** by the exact ranges above, but I kept it because:

- the design explicitly includes it;
- the proofs are short direct residue applications once the page's residue
  theorem and the already-published complex sine/cosine material are in hand;
- the Basel corollary is deliberately kept as a separate direct rectangle
  computation, exactly as the design warns.

If Alpha later wants a stricter source-to-item ledger for that trio, the honest
repair is **additional source substitution**, not deleting the branch.

### SC-2 sources actually read

1. Jiri Lebl, *Tasty Bits of Several Complex Variables*, official PDF:
   `https://www.jirka.org/scv/scv.pdf`
2. Paul Garrett, *Hartogs' Theorem: separate analyticity implies joint*:
   `https://www-users.cse.umn.edu/~garrett/m/complex/hartogs.pdf`
3. Harold P. Boas, *Lecture Notes on Several Complex Variables*, via the live
   StudyLib mirror:
   `https://studylib.net/doc/10482305/lecture-notes-on-several-complex-variables-harold-p.-boas`

What these support in the scaffold:

- Lebl supplies the Hartogs-figure / domain-of-holomorphy route, the
  coordinate-hyperplane Riemann extension theorem, and an independent compact
  Hartogs-phenomenon statement for connected compact holes.
- Garrett supplies the full separate-holomorphy architecture in the exact
  four-stage form the design wants: continuous case, bounded case, Baire
  subpolydisc, and Hartogs-lemma/Fatou propagation.
- Boas independently backs the Hartogs/Osgood distinction and the dense-open
  Osgood step that feeds the local-boundedness lemma.

### Convention and scope decisions fixed from the sources

- CA-9 does **not** redefine principal value. The dictionary remark points back
  to the published `improper-integrals` page and keeps principal value separate
  from improper convergence.
- CA-9 treats the keyhole branch with the published slit-plane logarithm
  material; it does not fake a page-local logarithm construction and it does
  not restrict the integral to rational exponents.
- SC-2 keeps the Riemann extension statement only for a **coordinate
  hyperplane**. The general extension across an arbitrary holomorphic
  hypersurface remains downstream of Weierstrass preparation, exactly as the
  design requires.
- SC-2 proves separate holomorphy with **no continuity hypothesis**. The local
  boundedness lemma carries the Baire and subharmonic/Fatou burden, and the
  final theorem then closes by citing the already-scaffolded locally bounded
  separate-holomorphy theorem on SC-1.

---

## 4. Local scaffold choices that matter later

- I kept `lem-finiteness-support-residue-sum` as its own item. The design is
  right that the compactness argument is real mathematics and must not disappear
  into an "obviously finitely many poles" sentence.
- I kept `def-standard-residue-contours` as one shared contour-definition item
  so the later proofs can cite fixed orientations and branch conventions instead
  of redrawing them repeatedly.
- I kept the residue summation branch on the A page, not the examples page,
  because the design treats it as theorem-level residue calculus rather than as
  decorative computation.
- I used the direct puncture-removability route on SC-2, not the full Hartogs
  figure theorem, exactly because the design marks that shorter proof as the
  right local route.
- I kept `lem-local-boundedness-of-separately-holomorphic-functions` separate
  from `thm-hartogs-separate-holomorphy`. That isolates the hard Baire/Fatou
  stage the design cares about, while letting the final theorem close cleanly
  through the already-planned locally bounded theorem from SC-1.
- I kept the compact-hole theorem on SC-2 in the local-shell propagation form,
  not by a silent `\\bar\\partial` argument. The later `\\bar\\partial` page can
  still record agreement without turning SC-2 into a proof shell around a
  different theorem.

---

## 5. Known limits and caution points

- The CA-9 page-level `requires` still understate the actual prerequisite graph:
  the item-level proof plans use earlier homology/global-Cauchy and logarithm
  items. That is recorded deliberately rather than "fixed" inside the batch.
- The CA-9 cotangent/cosecant/Basel cluster is the part of the scaffold most
  likely to attract a later source-audit request for one more explicit external
  treatment.
- The SC-2 compact-hole theorem is scaffolded by Hartogs figures and gluing,
  not by the later compact-support `\\bar\\partial` proof. That is intentional.
- The SC-2 separate-holomorphy lemma depends on a choice-free Baire step from
  the real line plus Fatou/subharmonic propagation. If Alpha wants that proof
  split even more finely at step 5, the natural extra lemma would be a page-local
  Hartogs-lemma-for-subharmonic-sequences item, not any change to the theorem
  statement.

---

## 6. Validator results

I append the actual results after the patch. The batch brief requires the batch
coverage checklist, whole-run manifest-only content policy, `validate-plan`,
and URL/fetch checks.

### Actual results run on Wednesday, August 26, 2026

- `node tools/coverage-checklist.mjs research/frontier-20-batch-9.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 34 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs research/frontier-20-batch-1.pages.json research/frontier-20-batch-2.pages.json research/frontier-20-batch-3.pages.json research/frontier-20-batch-4.pages.json research/frontier-20-batch-5.pages.json research/frontier-20-batch-6.pages.json research/frontier-20-batch-7.pages.json research/frontier-20-batch-8.pages.json research/frontier-20-batch-9.pages.json --manifest-only`
  -> `content-policy: 418 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> **pass with warnings only**. The validator ended with `OK`.
  The warning relevant to this batch is:
  `[redundant-prereq] page the-hartogs-phenomena requires isolated-singularities-and-laurent-series directly, but already reaches it through subharmonic-functions-and-the-dirichlet-problem`.
  I left the page-level prerequisite list unchanged, exactly as the dispatch
  requires.

- Extra local sanity pass over `research/frontier-20-batch-9.pages.json`
  against the combined `plan-spec.json` item universe plus the frontier-20
  batch manifests:
  -> `combined-sanity pass`
  Meaning: no unresolved dependency ids and no duplicate item ids inside the
  batch-9 manifest.

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-9.coverage.json --stamp`
  -> **failed mechanically**:

  ```text
  ERROR fetch-check-dead: the-residue-theorem: https://studylib.net/doc/28251363/-lars-ahlfors--complex-analysis--third-edition- — EAI_AGAIN
  ERROR fetch-check-dead: the-residue-theorem: https://studylib.net/doc/27609666/stein-complex-analysis — EAI_AGAIN
  ERROR fetch-check-dead: the-residue-theorem: https://complexanalysis.org/web/ch_residue.html — EAI_AGAIN
  ERROR fetch-check-dead: the-hartogs-phenomena: https://www.jirka.org/scv/scv.pdf — EAI_AGAIN
  ERROR fetch-check-dead: the-hartogs-phenomena: https://www-users.cse.umn.edu/~garrett/m/complex/hartogs.pdf — EAI_AGAIN
  ERROR fetch-check-dead: the-hartogs-phenomena: https://studylib.net/doc/10482305/lecture-notes-on-several-complex-variables-harold-p.-boas — EAI_AGAIN
  source-fetch-check: 0/6 source(s) fetch-verified (0 newly stamped), 6 FAILED
  ```

- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-9.coverage.json --out /tmp/frontier-20-batch-9-url-liveness.json --recover --fail-on-dead`
  -> **failed mechanically**:

  ```text
  url-sweep: 0/6 live; 6 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-20-batch-9-url-liveness.json
  FAIL 0 https://complexanalysis.org/web/ch_residue.html — curl: (6) Could not resolve host: complexanalysis.org
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://studylib.net/doc/10482305/lecture-notes-on-several-complex-variables-harold-p.-boas — curl: (6) Could not resolve host: studylib.net
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://studylib.net/doc/27609666/stein-complex-analysis — curl: (6) Could not resolve host: studylib.net
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://studylib.net/doc/28251363/-lars-ahlfors--complex-analysis--third-edition- — curl: (6) Could not resolve host: studylib.net
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www-users.cse.umn.edu/~garrett/m/complex/hartogs.pdf — curl: (6) Could not resolve host: www-users.cse.umn.edu

## Step-5 authoring

Authored page material:

- `library/complex-analysis/the-hartogs-phenomena.md`
- `library/complex-analysis/the-hartogs-phenomena-examples.md`

Authored Hartogs item ids kept in scope:

- `def-holomorphic-extension-and-domain-of-holomorphy`
- `def-hartogs-figure-and-polydisc-hull`
- `lem-holomorphic-dependence-of-slice-laurent-coefficients`
- `lem-vanishing-of-negative-laurent-coefficients-on-a-hartogs-figure`
- `thm-hartogs-figure-extension`
- `cor-hartogs-figure-obstruction-to-domain-of-holomorphy`
- `thm-removability-of-a-puncture-in-several-complex-variables`
- `cor-no-isolated-holomorphic-singularities-in-several-complex-variables`
- `lem-bounded-punctured-slice-has-holomorphic-parameter-extension`
- `thm-riemann-extension-across-a-coordinate-hyperplane`
- `fs-punctured-domain-functions-must-be-unbounded`
- `fs-one-variable-isolated-singularity-theory-has-a-several-variable-analogue`
- `fs-every-domain-in-c-two-is-a-domain-of-holomorphy`
- `ex-hartogs-figure-in-modulus-coordinates`
- `ex-one-over-one-minus-z-one-z-two-extends-from-a-hartogs-figure`
- `ex-z-one-over-one-minus-z-one-z-two-extends-across-the-punctured-bidisc`
- `ex-bidisc-minus-the-origin-is-not-a-domain-of-holomorphy`
- `cex-one-over-z-has-a-nonremovable-puncture-in-one-variable`
- `cex-c-two-minus-a-complex-line-is-a-domain-of-holomorphy`

Provenance rationale:

- The new Hartogs definitions, theorems, lemmas, and corollaries were sourced from Lebl/Garrett and marked `statement: literature-derived`.
- The example and counterexample statements were authored as local witnesses for this page and marked `statement: ai-generated` with the required `generation.role`.
- All newly written proof/verification/refutation text was authored here and marked `proof: ai-generated`.

Narrowed or dropped claims:

- Dropped from live scope after an independent `gpt-5.6-sol` audit: `lem-local-boundedness-of-separately-holomorphic-functions`, `thm-hartogs-separate-holomorphy`, `lem-local-hartogs-extension-across-polydisc-shells`, `lem-propagation-and-gluing-of-hartogs-extensions`, `thm-hartogs-extension-across-compact-holes`, and the dependent false-statement `fs-separate-holomorphy-can-fail-to-imply-local-boundedness`.
- Reason: the written proofs for the global Hartogs branch were not sound enough to keep. The audit identified invalid chain/gluing hypotheses, an unsupported Hartogs-lemma step for subharmonic sequences, and unjustified jumps from one-parameter contour-integral holomorphy to joint holomorphy. I chose the allowed narrow/drop path rather than leave false mathematics on disk.
- The A-page summary was tightened to match the reduced, local-only Hartogs scope.

Proof-contract artifact:

- Created `research/frontier-20-batch-9.proof-contracts.json` for the 17 proof-bearing Hartogs items that remain in scope.
- Regenerated its citations/derivations from the on-disk item text and rechecked it with `proof-contract --strict`.

Checks actually run on Wednesday, August 26, 2026:

- Hartogs-only precheck:
  `node tools/tsx-run.mjs tools/precheck.mts ...17 Hartogs proof-bearing items...`
  -> pass, `17 checked, 0 failing`.
- Batch-9 Hartogs contract:
  `node tools/regen-contract-entries.mjs research/frontier-20-batch-9.proof-contracts.json ...`
  -> regenerated 17 entries.
- Hartogs contract strictness:
  `node tools/proof-contract.mjs research/frontier-20-batch-9.proof-contracts.json --strict`
  -> `0 error(s), 0 warning(s), 17/17 item(s) checked`.
- Batch-scoped content policy:
  `node tools/content-policy.mjs research/frontier-20-batch-9.pages.json`
  -> `content-policy: 52 scoped item(s), 0 error(s), 0 warning(s)`.
- Plan validation:
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass with warnings only; ended `OK`.

Blockers / not completed:

- I also ran the literal full batch-9 precheck over all current batch items, including the already-authored residue page side. That run is still red on multiple residue-side files because they need their own canonical precheck stratification repair. I did not finish those residue repairs in this Hartogs repair pass, so I am not claiming a clean full-batch precheck.
- The dropped global Hartogs branch remains a mathematical blocker for this batch unless it is re-authored from a sound proof route.

## Step-5 authoring

- Date: Wednesday, August 26, 2026.
- Authored on disk:
  `library/complex-analysis/the-residue-theorem.md`,
  `library/complex-analysis/the-residue-theorem-examples.md`,
  and the full residue-page item set under `items/`:
  `rem-cauchy-principal-value-dictionary`,
  `def-standard-residue-contours`,
  `def-admissible-cycle-for-residue-theorem`,
  `lem-finiteness-support-residue-sum`,
  `thm-residue-theorem-null-homologous-cycle`,
  `cor-residue-theorem-circle`,
  `lem-large-semicircle-vanishing`,
  `lem-jordans-lemma-rational-functions`,
  `lem-indented-arc-residue-limit`,
  `thm-residue-evaluation-rational-real-integrals`,
  `thm-residue-evaluation-principal-value-real-poles`,
  `thm-residue-evaluation-rational-fourier-integrals`,
  `thm-trigonometric-integral-unit-circle-substitution`,
  `lem-keyhole-branch-boundary-values`,
  `thm-keyhole-residue-formula-mellin-rational-integrals`,
  `thm-cotangent-residue-summation-rational-functions`,
  `thm-cosecant-residue-alternating-summation-rational-functions`,
  `cor-basel-sum-by-residues`,
  `fs-residue-theorem-applies-to-any-cycle-in-the-domain`,
  `fs-principal-value-convergence-implies-improper-convergence`,
  `fs-degree-drop-by-one-is-enough-for-rational-real-integral-convergence`,
  `fs-large-arc-vanishing-follows-from-pointwise-decay-alone`,
  `ex-residue-evaluates-int-one-over-one-plus-x-squared`,
  `ex-residue-evaluates-int-one-over-one-plus-x-fourth`,
  `ex-residue-evaluates-cos-over-one-plus-x-squared`,
  `ex-residue-evaluates-sine-over-x-principal-value`,
  `ex-trigonometric-integral-one-over-a-plus-cos-theta`,
  `ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x`,
  `ex-residue-evaluates-the-gaussian-cosine-integral-by-a-rectangle`,
  `ex-residue-evaluates-the-basel-sum`,
  `cex-sine-over-x-is-only-conditionally-convergent`,
  `cex-one-over-z-defeats-the-large-semicircle-estimate`,
  `cex-misidentifying-a-double-pole-gives-the-wrong-residue`.
- Not authored:
  the SC-2 page pair (`the-hartogs-phenomena`,
  `the-hartogs-phenomena-examples`) and their 25 planned items.
- Proof-contract artifact status:
  `research/frontier-20-batch-9.proof-contracts.json` is still absent. I did
  not create a partial or misleading contract file.
- Provenance rationale used in the residue items:
  standard named residue theorems and contour identities were tagged
  `literature-derived` / `ai-altered` where the page packages or refactors the
  classical proof; dictionary remarks and false statements were tagged
  `ai-altered`; generated B-page witnesses that were freshly minted rather than
  taken verbatim from the source stack were tagged `ai-generated` with the
  required `generation.role`.
- Narrowed or dropped claims:
  none in the residue pair.
- Mechanical state at stop:
  targeted residue `precheck` does not yet pass cleanly. On the current bytes it
  still prints `REPAIR` for 21 residue proof items and one residual
  `untagged-steps` failure on
  `cex-one-over-z-defeats-the-large-semicircle-estimate`. I did not claim a
  clean precheck run.
- Required checks not completed truthfully:
  no successful batch-wide residue precheck rerun, no batch-wide Hartogs
  precheck, no batch-wide `content-policy` item scope run, no `validate-plan`
  rerun after this partial Step-5 authoring.
- Blocker:
  I reached a real stop on Step 5 rather than a mathematical finish. The
  residue pair exists but is not yet normalized to the canonical phase format
  demanded by `precheck`, and the Hartogs pair plus the batch proof-contract
  artifact remain unwritten. I therefore did not certify the batch as authored.
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.jirka.org/scv/scv.pdf — curl: (6) Could not resolve host: www.jirka.org
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

### Interpretation of the failed URL gates

These failures are transport failures in this runner, not mathematical or
harvest failures discovered while reading:

- the six sources above were read through the web reader during this dispatch;
- both failing gate tools stop at DNS resolution (`EAI_AGAIN` and `curl: (6)`)
  before any body-level PDF/HTML verification or archive recovery;
- the liveness tool's printed `re-sourcing is justified here` line is generic
  for an unresolved host with no checked archive snapshot and is **not** proof
  that the harvested document text itself has changed or disappeared.

So the current blocker is: **no durable local fetch stamps and no local
liveness receipt because this runner could not resolve the six hosts on
Wednesday, August 26, 2026**.

The scaffold itself is structurally clean. The exact next action, when run from
an environment with working outbound DNS, is to rerun:

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-9.coverage.json --stamp`
- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-9.coverage.json --out /tmp/frontier-20-batch-9-url-liveness.json --recover --fail-on-dead`

---

## 7. Reharvest-1 repair on Wednesday, August 26, 2026

This beta reharvest repaired the two CA-9 rows that `source-backing.mjs`
still reported as orphaned on the current merged liveness artifact.

### Dead source and same-document recovery

- Dead source as named by the reharvest plan:
  `https://studylib.net/doc/28251363/-lars-ahlfors--complex-analysis--third-edition-`
- Replacement actually verified and now recorded in coverage:
  `https://studylib.net/doc/26190074/ahlfors---complex-analysis`
- Provenance action:
  the dead StudyLib URL is preserved as `original_url` in
  `research/frontier-20-batch-9.coverage.json`.

This is a **same-document URL recovery**, not a different-treatment re-source.
I verified that the alternate mirror exposes the same Ahlfors third-edition
text over the needed range, and I did not need to change any harvested
disposition or claim scope.

### Affected results

- `lem-finiteness-support-residue-sum`
  now backed by Ahlfors, Ch. 4 §5.1, pp. 150-151, in the paragraph immediately
  before Theorem 17: the zero-index locus is open, contains all points outside
  a large circle, and therefore its complement is compact and meets the
  isolated singular set in only finitely many points.

- `lem-large-semicircle-vanishing`
  now backed by Ahlfors, Ch. 4 §5.3, pp. 156-157, item 2 on rational improper
  integrals: the upper-semicircle arc integral is estimated by an obvious
  `O(1/p)` bound and tends to zero as the radius grows.

- `cor-residue-theorem-circle`
  needed no further repair in this pass. The current coverage row already
  points to the archived Stein--Shakarchi snapshot and no longer leaves that
  item orphaned under `research/frontier-20-url-liveness.json`.

### Claim constraints changed

- None. No item id, dependency, destination, or page-scope decision changed.
  The repair only swapped the Ahlfors reader-facing URL and preserved the dead
  URL as provenance.

### Post-repair validator results

- `node tools/coverage-checklist.mjs research/frontier-20-batch-9.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 31 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/source-backing.mjs --coverage research/frontier-20-batch-9.coverage.json --liveness research/frontier-20-url-liveness.json`
  -> `source-backing: 16 authored result(s) across 1 file(s), every one still backed by an openable source`

  This is only a **stale-liveness sanity check** against the merged run artifact.
  It shows that the Ahlfors repair closed the original two-row orphan problem in
  the same sense that generated `research/frontier-20-reharvest-plan.json`, but
  it is not fresh gate evidence for this runner because unknown replacement URLs
  are treated as usable until a new liveness receipt is generated.

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-9.coverage.json --stamp`
  -> **still failed mechanically in this runner**:

  ```text
  ERROR fetch-check-dead: the-residue-theorem: https://studylib.net/doc/26190074/ahlfors---complex-analysis — EAI_AGAIN
  ERROR fetch-check-dead: the-residue-theorem: https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis — EAI_AGAIN
  ERROR fetch-check-dead: the-hartogs-phenomena: https://www.jirka.org/scv/scv.pdf — EAI_AGAIN
  source-fetch-check: 2/5 source(s) fetch-verified (0 newly stamped), 3 FAILED
  ```

- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-9.coverage.json --out /tmp/frontier-20-batch-9-url-liveness.reharvest-1-b9.json --recover --fail-on-dead`
  -> **still failed mechanically in this runner**:

  ```text
  url-sweep: 0/5 live; 5 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-20-batch-9-url-liveness.reharvest-1-b9.json
  FAIL 0 https://complexanalysis.org/web/ch_residue.html — curl: (6) Could not resolve host: complexanalysis.org
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://studylib.net/doc/26190074/ahlfors---complex-analysis — curl: (6) Could not resolve host: studylib.net
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis — curl: (6) Could not resolve host: web.archive.org
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www-users.cse.umn.edu/~garrett/m/complex/hartogs.pdf — curl: (6) Could not resolve host: www-users.cse.umn.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.jirka.org/scv/scv.pdf — curl: (6) Could not resolve host: www.jirka.org
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

- `node tools/source-backing.mjs --coverage research/frontier-20-batch-9.coverage.json --liveness /tmp/frontier-20-batch-9-url-liveness.reharvest-1-b9.json`
  -> **failed mechanically after the fresh batch liveness sweep**:

  `source-backing: 16 authored result(s) have no openable source left`

  This does **not** identify a new mathematics-specific orphan after the
  Ahlfors repair. It is the expected consequence of the fresh batch receipt
  above recording `0/5 live` because this runner could not resolve any of the
  five external hosts. In other words: the replacement is substantively correct,
  but the batch is still **not validator-ready** on Wednesday, August 26, 2026
  because the URL and fetch gates remain red in this environment.

---

## 8. Reharvest-2 repair on Wednesday, August 26, 2026

This beta reharvest consumed the two CA-9 work rows in
`research/frontier-20-reharvest-plan.json`:

- `lem-finiteness-support-residue-sum`
- `lem-large-semicircle-vanishing`

### Dead source and same-document recovery

- Dead source as named by the current reharvest plan and the merged
  `research/frontier-20-url-liveness.json`:
  `https://studylib.net/doc/26190074/ahlfors---complex-analysis`
- The merged liveness artifact records that StudyLib URL as HTTP `403`, so it
  is not usable for the source-backing gate even though a reader-facing browser
  copy may still appear intermittently.
- I checked same-document recovery before considering any different treatment.
  A live Georgia Tech course page for McCuan's complex-analysis course links to
  the same Ahlfors third-edition PDF, served at:
  `https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf`
- The coverage row now records the exact routed URL that already has a genuine
  repo fetch receipt:
  `https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf`
- Provenance action:
  the dead StudyLib URL from this pass is preserved as `original_url` in
  `research/frontier-20-batch-9.coverage.json`. The older reharvest-1
  predecessor,
  `https://studylib.net/doc/28251363/-lars-ahlfors--complex-analysis--third-edition-`,
  remains recorded here in the batch notes because the coverage schema carries
  only one `original_url`.

This is a **same-document URL recovery**, not a different-treatment re-source
and not an archive substitution.

### Affected results

- `lem-finiteness-support-residue-sum`
  now backed by Ahlfors, Ch. 4 §5.1, printed p. 150, in the paragraph
  immediately before Theorem 17: the zero-index locus is open, contains all
  points outside a large circle, and therefore its complement is compact and
  meets the closed discrete singular set in only finitely many points.

- `lem-large-semicircle-vanishing`
  now backed by Ahlfors, Ch. 4 §5.3, printed p. 156, item 2 on rational
  improper integrals: once the large upper semicircle encloses all poles in the
  upper half-plane, the arc integral has an elementary estimate and tends to
  zero as the radius grows.

### Claim constraints changed

- None. No item id, dependency, destination, page split, or page-scope
  decision changed.

### Fetch stamping in this pass

- I carried over the genuine `fetch_verified` receipt already present in the
  repo for the exact Ahlfors Georgia Tech URL.
- I also carried over the genuine `fetch_verified` receipt already present in
  the repo for the exact Lebl URL `https://www.jirka.org/scv/scv.pdf`, which
  had remained the other unstamped batch source.
- After those exact-URL receipts were restored, the batch fetch gate passed
  non-vacuously.

### Post-repair validator results

- `node tools/coverage-checklist.mjs research/frontier-20-batch-9.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 31 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/source-backing.mjs --coverage research/frontier-20-batch-9.coverage.json --liveness research/frontier-20-url-liveness.json`
  -> `source-backing: 16 authored result(s) across 1 file(s), every one still backed by an openable source`

  This is the important batch-level closure for the current dispatch: against
  the same merged liveness artifact that generated the reharvest plan, the two
  CA-9 orphaned results are no longer orphaned.

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-9.coverage.json --stamp`
  -> `source-fetch-check: 5/5 source(s) fetch-verified (0 newly stamped)`

  The gate passed because every batch source now carries a durable full-text
  receipt; the runner did not need to redownload any of them in this pass.

- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-9.coverage.json --out /tmp/frontier-20-batch-9-url-liveness.reharvest-2-b9.json --recover --fail-on-dead`
  -> **still failed mechanically in this runner**:

  ```text
  url-sweep: 0/5 live; 5 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-20-batch-9-url-liveness.reharvest-2-b9.json
  FAIL 0 https://complexanalysis.org/web/ch_residue.html — curl: (6) Could not resolve host: complexanalysis.org
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf — curl: (6) Could not resolve host: people.math.gatech.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis — curl: (6) Could not resolve host: web.archive.org
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www-users.cse.umn.edu/~garrett/m/complex/hartogs.pdf — curl: (6) Could not resolve host: www-users.cse.umn.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.jirka.org/scv/scv.pdf — curl: (6) Could not resolve host: www.jirka.org
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

- `node tools/source-backing.mjs --coverage research/frontier-20-batch-9.coverage.json --liveness /tmp/frontier-20-batch-9-url-liveness.reharvest-2-b9.json`
  -> **failed mechanically after the fresh batch sweep**:

  `source-backing: 16 authored result(s) have no openable source left`

That last failure is not a new mathematics-specific scout obligation. It is the
expected consequence of the fresh batch liveness receipt above recording `0/5
live` because this runner still cannot resolve any external host. The actual
reharvest obligation for the current dispatch is nevertheless closed:

- the dead StudyLib Ahlfors mirror has been replaced by a same-document live
  PDF route,
- the two orphaned CA-9 results are source-backed again against the merged run
  liveness artifact, and
- the batch fetch gate is now green.

## Step-3 fix pass

Date: Wednesday, August 26, 2026.

- Finding ids in scope: **none**. `research/frontier-20-alpha-b-step3-scaffold-review.md`
  issues no `B9-*` findings. Its batch-9 verdicts are `the-residue-theorem`
  — **sufficient** and `the-hartogs-phenomena` — **sufficient**; the sole
  numbered finding in the group review is `B3-1`, routed to Beta 3 on batch 3.
- Disposition: no batch-9 scaffold repair was required, so I applied no
  manifest or coverage edit and pushed back on nothing.
- Evidence:
  - `node tools/coverage-checklist.mjs research/frontier-20-batch-9.coverage.json --require-destination`
    -> `coverage-checklist: 2 page(s), 31 harvested result(s), 0 error(s), 0 warning(s)`
  - `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-*.pages.json`
    -> `content-policy: 486 scoped item(s), 0 error(s), 0 warning(s)`
  - `node tools/validate-plan.mjs research/plan-spec.json`
    -> exit `0`, ending with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 404 page(s) with item lists.`
  - Batch-relevant `validate-plan` note unchanged:
    `[redundant-prereq] page the-hartogs-phenomena requires isolated-singularities-and-laurent-series directly, but already reaches it through subharmonic-functions-and-the-dirichlet-problem`
- Changed scaffold record: none. `research/frontier-20-batch-9.pages.json`
  unchanged; `research/frontier-20-batch-9.coverage.json` unchanged; this
  section is the only batch-9 artifact updated in this pass.

## Step-6 scope restoration

Date: Wednesday, August 26, 2026.

- Restored from `research/frontier-20-dispatch/beta-author-repair-batch-9.attempt-2.log`:
  `lem-local-boundedness-of-separately-holomorphic-functions`,
  `thm-hartogs-separate-holomorphy`,
  `lem-local-hartogs-extension-across-polydisc-shells`,
  `lem-propagation-and-gluing-of-hartogs-extensions`,
  `thm-hartogs-extension-across-compact-holes`,
  `fs-separate-holomorphy-can-fail-to-imply-local-boundedness`.
- Restored the six original batch-9 manifest rows and their ordering in `research/frontier-20-batch-9.pages.json`, restored the A-page item-list entries in `library/complex-analysis/the-hartogs-phenomena.md`, and restored the batch-9 proof-contract scope to all 23 proof-bearing Hartogs items.
- Preserved the prior Step-5 withdrawal/proof-concern record for Alpha. The restoration re-exposes those six items on disk and in the live batch artifacts; it does not retract the documented concern that their written proofs were the reason the prior repair tried to drop them.
- The exact logged item bodies triggered the current `precheck` parser's `untagged-steps` error on three files:
  `thm-hartogs-separate-holomorphy`,
  `lem-local-hartogs-extension-across-polydisc-shells`,
  `fs-separate-holomorphy-can-fail-to-imply-local-boundedness`.
  I applied only the canonical phase-format reflow needed to place the existing trailing tags on the numbered step lines. No mathematical statement, dependency, provenance field, source list, or proof content was otherwise changed.

Checks actually run on Wednesday, August 26, 2026:

- `node tools/regen-contract-entries.mjs research/frontier-20-batch-9.proof-contracts.json ...23 Hartogs proof-bearing ids...`
  -> `research/frontier-20-batch-9.proof-contracts.json: regenerated 23, skipped 0`
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-local-boundedness-of-separately-holomorphic-functions.md items/thm-hartogs-separate-holomorphy.md items/lem-local-hartogs-extension-across-polydisc-shells.md items/lem-propagation-and-gluing-of-hartogs-extensions.md items/thm-hartogs-extension-across-compact-holes.md items/fs-separate-holomorphy-can-fail-to-imply-local-boundedness.md`
  -> initial run: `6 checked, 3 failing` (`untagged-steps` on the three files named above)
  -> after the format-only reflow: `6 checked, 0 failing — all clean`
- `node tools/proof-contract.mjs research/frontier-20-batch-9.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 23/23 item(s) checked`
- `node tools/content-policy.mjs research/frontier-20-batch-9.pages.json`
  -> `content-policy: 58 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`; tail:
     `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 432 page(s) with item lists.`
     `NOTE: 769 planned page(s) carry no item list yet (marked * above). Their reading order is guaranteed; their item dependencies are not yet asserted, so re-run this after writing each page's items.`
