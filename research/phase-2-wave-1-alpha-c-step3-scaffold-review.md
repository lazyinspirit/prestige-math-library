# Phase 2 wave 1 — Alpha c Step 3 scaffold review

Date: 2026-09-08  
Run: `phase-2-wave-1`  
Group: `c`  
Batches: 10 and 11

## Outcome

All three assigned A/B pairs are mathematically supportable from their stated hypotheses and earlier local results. The CK majorant construction, Euclidean surface/divergence construction, and measurable-density construction have sound proof routes, compatible conventions, and no missing prerequisite A/B pair.

The machine verdicts remain `insufficient` because required Step-3 bookkeeping is not closed:

1. both batch-owned cross-batch dependency input files are absent;
2. one CK source result is deferred to an already-published page that does not contain the whole result.

These are exact repair obligations, not waivers of otherwise useful mathematics. No batch scaffold, prose scaffold, design, plan, published page, or item was edited by this reviewer.

## Materials audited

I read the governing contracts and the current versions of `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/alpha.md`, `briefs/beta-scaffold.md`, and `briefs/tasks/frontier-dependency-ledger.md`; the run notes, drift review, scope ledger, designs, current plan, batch 10 and 11 manifests, coverage files, notes, published prerequisite pages/items, and the local mathematical repair record.

The assigned inventory is:

- batch 10: `analytic-majorants-and-the-cauchy-kovalevskaya-theorem` (15 A items, 7 B items) and `euclidean-surface-measure-divergence-and-green-identities` (16 A items, 6 B items);
- batch 11: `measurable-densities-and-radon-volume-on-manifolds` (11 A items, 7 B items).

Every item has an explicit `deps` array. The current plan contains the same item inventories and page requirements in proof order. None of these pages is in Foundations, none reaches `deferred-set-theory-beyond-choice`, and no `source_resolution` drop or owner-escalation record occurs in either coverage file.

## Pair review: analytic majorants and Cauchy–Kovalevskaya

### Mathematical and dependency finding

The pair's mathematical scaffold is sufficient.

- The coefficientwise order is explicit, componentwise for systems, and compatible with the library's ordinary multi-index coefficients.
- Sums, products, differentiation, zero-constant-term composition, reciprocals, and analytic substitution are proved before use.
- Cauchy estimates supply the rational geometric majorant. The real-analytic inverse/implicit theorem is obtained from the earlier several-complex-variables theorem with conjugation symmetry, so no merely smooth inverse theorem is substituted.
- The analytic ODE lemma is proved by its own coefficient majorant and does not assume CK.
- Flattening uses an analytic coordinate map, and the fully nonlinear statement fixes a compatible jet and one implicit branch. The proof does not claim branch-independent uniqueness.
- The formal normal recursion is triangular. The positive Goursat construction chooses `rho` so `1-d N M rho/r>0`; its analytic quadratic branch has nonnegative coefficients and the ansatz supplies the required convergent majorant.
- Higher order is reduced to a first-order jet system after formal uniqueness is established, preventing circular recovery of mixed derivatives.
- The theorem states uniqueness only among analytic germs. The B page correctly shows that characteristic data may be nonunique or incompatible, that smooth nonanalytic data need not admit an analytic solution, that analytic heat data may have a divergent time series when the initial surface is characteristic, and that elliptic analytic Cauchy problems are not smoothly well posed.

The page requirements resolve backward through the published PDE characteristics and real/complex analytic machinery. I found no missing, circular, forward, direction-reversed, or axiom-strength-inadequate proof dependency.

### Source check

Two independent complete treatments support this A page:

- Tsogtgerel Gantumur, *The Cauchy–Kovalevskaya theorem*, <https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf>, §§1–5, especially Theorem 18, Corollary 20, Examples 21 and 23, and Exercises 22 and 24, printed pp. 1–14. The full relevant text supports the formal recursion, positive majorant method, higher-order reduction, characteristic criterion, and counterexamples.
- Giacomo Ageno, *Part III: Analysis of Partial Differential Equations*, <https://giacomoageno.github.io/LectureNotesAPDE.pdf>, complete §2.3 and §2.4.1, PDF pp. 20–29, especially Theorem 2.22 and its proof. The full relevant text supports analytic flattening, solving the noncharacteristic highest derivative, zero-data subtraction, and the scope limits.

`source-fetch-check --stamp` verified all current bytes; neither source needs a drop.

### Defect routed to batch 10 Beta

The Gantumur row named “Exercise 24: Tricomi, wave, ultrahyperbolic and transport classifications” is marked `deferred` to `partial-differential-equations-and-characteristics`. That destination is already published. Its plan and published pages contain Tricomi, standard model-symbol, canonical two-variable, and transport items, but no ultrahyperbolic item and no count of the connected components of the characteristic-cone complement in `R^4`. Thus the destination does not receive the whole harvested result.

Required repair: the batch 10 writer must either (a) change this row to `out-of-scope` with a specific mathematical reason that genuinely excludes the whole classification exercise, or (b) name a real future destination for the omitted ultrahyperbolic/cone-topology result. No new prerequisite pair is needed for the CK proof itself. Scope decline `5491bad8d0a23ffac3cca52bcbec08bd7286130eccefbb2ad47e64a1f68e36df` is therefore `owner-decision`.

## Pair review: Euclidean surface measure, divergence, and Green identities

### Mathematical and dependency finding

The pair's mathematical scaffold is sufficient.

- Surface measure is defined from injective regular `C^1` parametrizations and Gram density, with nonnegative Borel integration first and signed integration afterward.
- The local replacement lemma for nonnegative Borel `C^1` substitution is sound. For `T:U -> V`, it compares the pushforward measure `mu(A)=lambda(T(A))` with `nu(A)=integral_A |det DT| d lambda`; both are locally finite Radon measures, equality on compactly supported continuous test functions follows from the published continuous compact-support substitution theorem, and RMK uniqueness gives equality on Borel sets. Indicator/simple-function approximation then yields precisely the nonnegative Borel formula used on chart overlaps. It does not invoke the known defective published measurable-`C^1` proof.
- Chart independence follows from the Gram transformation law and the absolute Jacobian. Graph density and outward normal conventions agree.
- The local graph flux calculation uses Fubini, Newton–Leibniz, and differentiation under the integral sign. Ambient partitions globalize it without assuming manifold Stokes.
- The piecewise theorem requires an explicit finite graph-face presentation. The local cutoff lemma proves small ambient support and small `L^1` gradient from facewise surface-nullity; it does not assume finite-perimeter theory. Internal normals cancel only in a specified gluing.
- The polar comparison, first and second Green identities, ball, box, corner, punctured-domain, and truncated-cone examples have the needed hypotheses and correct normal directions. The conical-tip limit is proved by truncation rather than treating the apex as a regular face.

The added requirement on `radon-measures-and-the-riesz-markov-kakutani-theorem` is load-bearing and correct. All page requirements otherwise resolve backward to published measure, calculus, linear-algebra, and partition machinery. I found no mathematical closure defect, cycle, forbidden forward supplier, or hidden use of future distribution/manifold-Stokes machinery.

### Source check

Two independent complete treatments support this A page:

- John K. Hunter, *Notes on Partial Differential Equations*, <https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf>, §§1.9–1.12 and Theorem 2.23. These sections support graph surface measure, partitions, the classical divergence theorem, boundary conventions, Green identities, and rough-boundary scope limits.
- Sung-Jin Oh, *Math 222A lecture notes*, <https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf>, §3.9, especially Proposition 3.23 and its complete graph/partition proof. The current page adapts only the scalar local calculation; the distributional identity remains deferred.

The exact edge-cutoff lemma is locally proved in `research/phase-2-local-mathematical-repairs-2026-09-08.md`; Hunter is not misrepresented as containing that omitted argument. `source-fetch-check --stamp` verified both current texts.

## Pair review: measurable densities and Radon volume on manifolds

### Mathematical and dependency finding

The pair's mathematical scaffold is sufficient once its already-declared same-frontier edge is reviewed in the batch-owned ledger.

- The density convention uses finite positive transition factors, permits coefficients in `[0,infinity]`, fixes `0*infinity=0`, includes dimension zero, and makes no premature almost-everywhere quotient.
- On boundary-chart overlaps, smooth boundary invariance identifies the Euclidean interiors. Coordinate faces are Lebesgue-null, so their integrals vanish even when a coefficient is infinite. The exact batch 10 Borel substitution lemma then proves overlap agreement.
- A countable locally finite chart cover and subordinate partition define the nonnegative Borel set function. Countable additivity uses nonnegative sums/Beppo Levi and does not assume sigma-finiteness before it is proved.
- Common partition refinements prove choice independence and the intrinsic chart-restriction formula. Positive smooth coefficients are locally bounded, hence compact-finite; second countability supplies sigma-finiteness, and the published LCH regularity theorem supplies a Radon measure and its completion.
- The finite-dimensional Darboux bridge disjointifies box faces, whose Lebesgue measure is zero, and squeezes a bounded Borel Riemann-integrable function between lower and upper step functions. It does not misuse the published one-dimensional comparison theorem.
- Indicator functions, nonnegative simple approximation, and monotone convergence prove the chart formula. For completed-measurable functions, completed simple level sets are replaced by Borel sets modulo null sets, the countable exceptional union remains null, and the pointwise simple limit yields a Borel representative. This is a complete local route from the completion and approximation machinery; it does not use completed-measurable substitution.
- Positivity of nonempty open sets, compact ball finiteness, infinite total mass, Euclidean volume, weighted interval, circle, nonorientable flat strip, and dimension-zero weighted counting examples all respect their stated hypotheses.

No new prerequisite A/B pair is required. In particular, the published measurable-`C^1` change-of-variables theorem remains protected Phase 3 debt and is not in this proof path.

### Source check

Two complete textbook treatments support this A page:

- John M. Lee, *Introduction to Smooth Manifolds*, second edition, <https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf>, Chapter 16 “Densities,” printed pp. 428–433, Propositions 16.35–16.45 and the intervening construction. Lee supplies density transformations, pullback, local chart integration, partition gluing, and smooth-density properties.
- Gerald B. Folland, *Real Analysis*, second edition, <https://djvu.online/file/NPF4BEtSuqdFA>, Theorems 2.14–2.15 (pp. 50–51), Theorem 2.47 and full proof (pp. 74–76), Theorem 7.8 and full proof (p. 217), and §11.4 (pp. 361–363). Folland supplies monotone integration, Euclidean substitution, Radon regularity, and density conventions.

`source-fetch-check --stamp` verified both complete texts. There is no source drop to adjudicate.

## Same-frontier dependency bookkeeping

The unified ledger currently detects both declarations but lists batch 11 as unreviewed and has no review evidence. The following exact inputs are routed to the owning writers; this Alpha did not edit them.

Batch 10 Beta must create `research/phase-2-wave-1-batch-10.cross-batch-dependencies.json` as:

```json
[]
```

Batch 11 Beta must create `research/phase-2-wave-1-batch-11.cross-batch-dependencies.json` as:

```json
[
  {
    "kind": "page",
    "consumer": "measurable-densities-and-radon-volume-on-manifolds",
    "supplier": "euclidean-surface-measure-divergence-and-green-identities",
    "status": "verified",
    "evidence": "The boundary-chart overlap construction requires the supplier page's nonnegative Borel C1 substitution lemma. The supplier is batch 10, precedes batch 11, assumes AC_omega, and proves the exact Borel formula without the protected measurable-C1 theorem."
  },
  {
    "kind": "item",
    "consumer": "lem-measurable-density-chart-integrals-agree-on-overlaps",
    "supplier": "lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness",
    "status": "verified",
    "evidence": "Used on the interiors of two manifold charts after removing their coordinate boundary faces. The transition is a C1 diffeomorphism between open subsets of R^n and the indicator times density coefficient is nonnegative Borel, exactly matching the supplier's hypotheses and direction."
  }
]
```

After writing either input, its owner must run `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1`. No other same-frontier page or item edge, implicit proof use, well-definedness justification, or load-bearing forward reference was found for batches 10–11.

## Scope dispositions

`research/phase-2-wave-1-alpha-c-scope-decisions.json` resolves all 21 current rows: 20 `stands` and one `owner-decision` (the complete Gantumur Exercise 24 disposition described above). The accepted deferrals point to real, currently unauthored planned suppliers where appropriate; accepted exclusions are not used by any retained proof.

## Checks run

- `node tools/scope-decisions.mjs refresh --run phase-2-wave-1 --group c` — produced 21 current pending rows before adjudication.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-wave-1-batch-10.coverage.json,research/phase-2-wave-1-batch-11.coverage.json --stamp` — `6/6` fetch-verified, `0` newly stamped; `6/6` resolved, `0` documented drops.
- Initial `node tools/scope-decisions.mjs check --run phase-2-wave-1 --group c` — 21 current declines, 0 errors. A concurrent plan/scaffold update later changed nine CK context hashes.
- Re-ran `node tools/scope-decisions.mjs refresh --run phase-2-wave-1 --group c`, reread the affected current rows, restored their decisions against the new hashes, and re-ran `check` — 21 current declines, 0 errors.
- First attempted `manifest-deps` with nonexistent batch 16–20 paths — failed with 5 file-not-found errors after checking 434 items. This was a command-scope error, not a repository result.
- Corrected whole-run `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-*.pages.json`, then repeated it after the concurrent update — both final-scope runs passed; the last reported 434 items, 0 normalized, 0 errors.
- `node tools/validate-plan.mjs research/plan-spec.json`, repeated after the concurrent update — exit 0; 1,616 pages, 15,116 planned items, 892 pages with item lists; declared page order acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved IDs among those pages. The tool reported its existing redundant-prerequisite advisories and 719 page-level-only plans.
- `node tools/extcheck.mjs`, repeated after the concurrent update — exit 0; 15,416 items, 161 recorded-not-proved, 63 consequences resting on them; all such statements remain cited remarks with no proof and all consequences are marked. The 63 published warnings are pre-existing run-wide debt, including `rem-cauchy-kovalevskaya-proof-boundary`; none is introduced by the batch 10–11 scaffolds.
- Local JSON/shape assertion — parsed both JSON outputs; found 21 scope rows (`20` stands, `1` owner-decision), no pending/empty-evidence row, and 3 actionable insufficient verdicts with nonempty `missing` arrays.
- `git diff --check` on the three authorized Alpha artifacts — no whitespace errors.
