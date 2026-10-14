# Batch 19 — Sparse Estimation and Covariance authoring notes

Run: `mathematical-statistics-foundations-37` · role: beta · batch: 19 · assigned page dependency level: 4.  The dispatch scheduling-input hash was `dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c`.

## Controlling design and reconciliation

The binding owner direction names `research/plan-mathematical-statistics-track.md` as the controlling design. MSF-23 (row at line 100) controls this pair. It specifies sparse Gaussian sequence and fixed-design Lasso, the exact incoherence premise, the basic-inequality/score/RE proof route, centered dense covariance concentration with a separate sample-centering argument, the clean weak-$\ell_q$ covariance model, entrywise thresholding, the Cai–Zhou rate claim, and three B examples. It explicitly excludes robust and heavy-tailed covariance claims. The A and B page IDs, orders 1880/1881, titles, category, companion, and four A-page requirements match `research/plan-spec.json`; its empty item arrays are planning placeholders, not an inventory conflict.

The controlling design requires $n\ge2$ in the Lasso prediction theorem. Its local statement now has that domain; the fixed-design model and incoherence definition retain $n\ge1$ so the separate $n=1$ collinear-design counterexample remains in scope. The source's minimax statement has a separate mathematical defect recorded below. No shared plan or plan-spec file was changed.

## Inventory and dependency levels

The assigned manifests contain 29 A items and 3 B examples/counterexamples, below the 100-item page cap. Current item levels were recomputed over the run's 470 manifest items; there are no cycles or inventory errors, and all 29 batch-19 labels match the full run graph.

| Level | Assigned items |
|---:|---|
| 0 | `def-gaussian-sequence-sparse-means-model`; `def-fixed-design-incoherence-condition`; `def-restricted-eigenvalue-condition`; `def-lasso-estimator`; `def-sample-covariance-and-operator-norm-loss`; `def-weak-lq-sparse-covariance-class`; `def-minimax-squared-operator-risk`; `def-soft-thresholding-function`; `lem-symmetric-matrix-operator-norm-rayleigh`; `lem-directional-tail-implies-subgaussian-mgf` |
| 1 | `def-subgaussian-fixed-design-regression-model`; `lem-lasso-objective-has-minimizer`; `lem-incoherence-implies-restricted-eigenvalue`; `lem-epsilon-net-controls-symmetric-operator-norm`; `alg-entrywise-thresholded-sample-covariance`; `lem-directional-tail-products-are-subexponential`; `cex-thresholded-sparse-covariance-rate-unbounded-at-superexponential-dimension`; `cex-collinear-design-fails-re-and-incoherence`; `ex-sample-covariance-rank-deficiency-when-p-exceeds-n` |
| 2 | `thm-lasso-basic-inequality`; `lem-fixed-design-subgaussian-score-concentration`; `lem-products-of-subgaussian-coordinates-are-subexponential`; `lem-weak-lq-thresholded-covariance-row-sum`; `thm-weak-lq-sample-covariance-entrywise-deviation`; `ex-orthogonal-design-lasso-is-soft-thresholding` |
| 3 | `thm-lasso-prediction-and-l1-error-under-incoherence`; `thm-centered-subgaussian-sample-covariance-bound`; `thm-thresholded-sparse-covariance-high-probability-bound` |
| 6 | `thm-thresholded-sparse-covariance-minimax-rate` |

The minimax item is level 6 because its declared lower-bound interfaces in batch 17 are level 5. The assigned page remains at batch level 4 with prerequisite batches 14, 15, and 17; this later item-level edge does not change the batch graph's declared page prerequisites.

`research/mathematical-statistics-foundations-37-batch-19.cross-batch-dependencies.json` records body-level checks, not approval. Batch 14's required concentration suppliers and 11 direct item edges were checked against their actual statements and proofs. Batch 15's 15 A and 3 B carriers are now present; the independent-process symmetrization, one-sided contraction, and finite-class deviation statements/proofs were read. No batch-19 item uses a batch-15 result, so this is a page-context edge without item edges. Batch 17's 9 A and 3 B carriers are present. The actual two-point, Fano, Assouad, and product-KL statements/proofs were read and are declared dependencies of the minimax item. Their interfaces require, respectively: two laws and separated scalar targets; a finite separated metric target set and reference-law average KL bound; a finite hypercube with squared Euclidean loss and neighboring-TV control; and AC with finite product probability laws. The Fano/product-KL route has an explicit AC branch. These are draft supplier-body checks, not independent acceptance.

## Mathematical review and escalation

- The Lasso page separates the fixed-design model, incoherence, and cone RE condition. The minimizer-set lemma proves existence, compactness, and convexity; the main bounds apply to every minimizer. The score result retains its zero-noise case. B gives orthogonal soft-thresholding and a collinear design where both incoherence and RE fail.
- The dense covariance theorem covers both the known-mean second moment and sample-centered covariance. It handles $L=0$ exactly, derives the sample-mean correction, and gives $C=176$ under the stated proxy $L=\|\Sigma\|_{op}$.
- The sparse covariance definition is the clean directional-tail model; it assumes neither coordinate independence nor robustness. Local lemmas derive the product tails, centered covariance entrywise deviation, deterministic weak-$\ell_q$ row-sum bound, and a thresholded operator-norm probability bound. That last theorem requires $\log p\le n$ and does not prove expected risk.
- E17 owner resolution independently verified the super-exponential counterexample and retains it. The theorem now gives the full capped rate min{1,c^2(logp/n)^(1-q)+logp/n} across every original dimension regime, with constants depending only on the fixed parameters. An explicit threshold-or-zero rule attains the cap. The raw threshold estimator retains a proved expected-risk bound when logp/n<=1; no global raw-estimator cap is claimed.
- The strengthened entrywise theorem exposes the arbitrary-u tail already obtained by its proof and retains the original specialization. Its existing high-probability consumer remains valid unchanged. The new expected-risk lemma uses u=log(8p^10), the unchanged threshold8192tau sqrt(logp/n), coordinate eighth moments, and Cauchy–Schwarz on the bad event; sample centering, divisor n and unknown means are all treated exactly.
- Two local lower-bound suppliers now prove the missing covariance reductions. A p+1 diagonal Gaussian family and explicit KL calculation gives min{1,logp/n}, including c=0 and all floor-small radii. The complete sparse Gaussian-mixture proof handles the nontrivial row-count branch, including the exact Gaussian cross moment, properly weighted nuisance law1/binom(d,k), uniform conditional row estimates, iterative conditioning without row independence, overlap generating function and finite nearest-target testing reduction. Its technical remainder is proved locally, rather than delegated to an unproved source lemma. The main theorem handles finite-p, saturated-dimension and q=0 branches explicitly. AC is retained through Gaussian existence and Fano.
- The local sphere-net packing construction remains choice-free. The Gaussian sequence model and its orthogonal example explicitly retain AC. Other local concentration and covariance proofs do not infer coordinate independence.

## Source reading and retrieval

The A-page coverage file records five source rows, 18 harvested results, URLs, locators, item support, and dispositions. Rigollet–Hütter lecture notes and Bickel–Ritov–Tsybakov provide independent Lasso treatments; Cai–Zhou supports the clean sparse-covariance definitions and source claims; Vershynin's author book supports the concentration context. Four full texts are stamped and the relevant reasoning was inspected. The Yale Cai–Zhou supplement URL failed the initial fetch and five recovery retries with `CERT_HAS_EXPIRED`; searches and alternatives are recorded in `source_resolution`. Its source row is dropped because none of its technical lower-bound proofs supports an included or inline result here. The two draft items that had listed that URL now cite the successfully fetched main article only; the supplement failure history remains in coverage. `source-fetch-check` reports 4/5 fetch-verified, 5/5 resolved, and one documented drop.

## Final scoped checks and readiness records

- Item dependency recomputation over the full run: 470 items, no cycles/errors; all 29 batch-19 levels match (maximum assigned level 6).
- Scoped `depcheck`: 29 items, 0 errors and 0 warnings.
- Normative precheck: 18 proof-bearing items, 0 failures; 11 items have no claimed proof and are `n/a`.
- `node tools/proof-layout.mjs` on all 29 assigned carriers: 29 items, 53 numbered steps, 0 defects.
- Strict proof contracts: 29/29 checked, 85 exact supplier-section citations, 53 step derivations, five finite smoke checks, 0 errors and 0 warnings.
- Scoped content policy: 29 items, 0 errors and 0 warnings. Coverage checklist: 1 page, 18 harvested results, 0 errors and 0 warnings.
- Source retrieval: 4/5 stamped, 5/5 resolved, 1 documented drop.
- `step1-decisions.mjs record` used without `--owner` for every item: 28 `ready`, 1 `escalated`. The run-wide check remains open: at the final check it listed 470 items, 338 ready, and 132 unresolved work entries; batch 19's only open record is the escalated minimax claim. These records are authoring evidence, not approval.

The shared derived batch-dependency file was left untouched. Its recorded input hash is `6e1c86944ecd4ef6db1a3278746ff762bf62c176309acd6c8da4e73df54b6f80`; after current manifest changes, recomputation yields `cdebffbfc32bd398618df63f9b47d5ac6eda27d67ce43c911751a827a3545893`. Both differ from the dispatch hash `dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c`. `batch-dependency-levels.mjs check` therefore reports stale shared scheduling evidence. The graph still computes batch 19 at level 4 with prerequisites 14, 15, and 17; the owner must refresh the shared derived hash before run transitions.

## Owner E17 proof scope and verification

Read actual Cai–Zhou full relevant arguments on PDF pp3–14 and20–28. Supplement retrieval failed; no reading or supplier claim is made for it. The local conditional-row argument replaces its technical lemma with a complete proof. The original uncapped source claim is false as written, independently of that supplement. Root applied the exact MSF-23 controlling-row amendment and refreshed source-policy evidence. All other controlling scaffold rows were retained.

The native author had left the assigned A/B page files absent; this resolution supplies those carriers with all32 manifest items and concise summaries. Original native Step1 decision records remain historical and unchanged. Existing other item bodies and other batches are untouched. The high-probability theorem is the only existing direct/transitive consumer of the strengthened entrywise supplier outside the repaired main theorem/new suppliers; its hypotheses and probability bound still follow from the retained specialization. The main minimax item has no actual outside consumers.

Only mandatory final explicit-path proof-layout is run for this repair. No optional tests, hashes, readiness/acceptance markers, native controls, gates or commits. Earlier author check results above describe the prior carrier versions and do not certify the repaired versions; root must recertify. See mathematical-statistics-foundations-37-owner-sparse-covariance-rate-resolution.json.
