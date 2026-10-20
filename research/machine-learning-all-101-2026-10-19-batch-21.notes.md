# Batch 21 — Spectral clustering and graph cuts

Run: `machine-learning-all-101-2026-10-19`  
Pair: `ml02-spectral-clustering` / `ml02-spectral-clustering-examples`  
Scaffold input SHA-256: `4652875380fb83fe2b469069a490dc8aeba66b4b740ea67dbde87608a9c8b602`

## Plan and batch evidence

- The controlling design is ML-20 at `research/plan-machine-learning-track.md:222`; the execution assignment is batch 21. The current `research/plan-spec.json` entry has the same title, page IDs, order 2736, category, page requirements, and complete mathematical scope. There is no mathematical-content conflict. The two labels are navigation coordinates: ML-20 is the track-pair label and 21 is the execution batch.
- The scope retains arbitrary finite symmetric nonnegative zero-diagonal weights, weighted Laplacian identity and componentwise kernel, RatioCut/Ncut indicator traces, real relaxations, isolate handling, and deterministic K-means rounding. The unweighted published Laplacian results are only special-case context; no weighted claim is inferred from them. No Davis–Kahan perturbation theorem or graph/manifold consistency guarantee is asserted.
- `research/machine-learning-all-101-2026-10-19-batch-dependency-levels.json` declares batch 21 at level 1 with prerequisite batch 20; its input hash matches the dispatch. The page manifest now contains the complete 8-item A inventory and 4-item B inventory below, with levels from actual in-run item edges.
- Current `research/machine-learning-all-101-2026-10-19-alpha-step1-drift.md` records `no-drift` for this page and says its planned item inventory was empty. The inventory is now made explicit here and in `batch-21.pages.json`.
- Live state was checked with `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run machine-learning-all-101-2026-10-19 --state-dir .autopilot/machine-learning-all-101-2026-10-19`: the run is `running`, Step 1 scaffold is held for owner repair/recertification, 19/101 pairs are covered, and nothing is currently in flight. This authoring handoff does not alter `.autopilot/` or the owner blocker.
- `git log -5 --oneline` for the pair manifest, assigned pages, and new item path returned no commits. Existing workspace changes outside this pair were left untouched.

## Item inventory and logical dependency order

| Item | Level | Direct in-run item dependencies (published suppliers noted separately) | Claim / role |
|---|---:|---|---|
| `def-finite-weighted-graph-laplacian` | 0 | — | Finite weighted graph, support, isolates, and normalized Laplacian domain. |
| `lem-finite-trace-minimization` | 0 | — | Full multi-vector trace minimum; one-vector case uses the published Rayleigh result. |
| `lem-deterministic-eigenspace-basis` | 0 | `def-orthogonal-projection` (published; external) | Deterministic basis from projections of ordered coordinate vectors, including an optional prescribed unit zero-mode vector. |
| `def-ratio-cut-and-normalized-cut` | 1 | `def-finite-weighted-graph-laplacian` | Cut, volume, RatioCut/Ncut domains, and indicator columns. |
| `lem-weighted-graph-laplacian-quadratic-form-and-kernel` | 1 | `def-finite-weighted-graph-laplacian` | Weighted quadratic identity, PSD, and exact componentwise kernel. |
| `lem-ratio-cut-indicator-trace-identities` | 2 | `def-finite-weighted-graph-laplacian`; `def-ratio-cut-and-normalized-cut`; `lem-weighted-graph-laplacian-quadratic-form-and-kernel` | Indicator constraints and trace identities. |
| `thm-weighted-ratio-and-normalized-cut-relaxations` | 3 | `def-finite-weighted-graph-laplacian`; `def-ratio-cut-and-normalized-cut`; `lem-weighted-graph-laplacian-quadratic-form-and-kernel`; `lem-ratio-cut-indicator-trace-identities`; `lem-finite-trace-minimization` | Weighted relaxations, generalized eigenproblem, and lower bounds. |
| `alg-weighted-spectral-clustering` | 4 | `def-finite-weighted-graph-laplacian`; `def-ratio-cut-and-normalized-cut`; `lem-weighted-graph-laplacian-quadratic-form-and-kernel`; `thm-weighted-ratio-and-normalized-cut-relaxations`; `lem-deterministic-eigenspace-basis`; `alg-lloyd-k-means`; `thm-lloyd-objective-monotonicity-and-termination` | Graph construction interface, exact deterministic eigenspace convention, normalized rows, and deterministic Lloyd rounding. |
| `ex-knn-symmetrization-changes-ratio-cut` | 2 | `def-finite-weighted-graph-laplacian`; `def-ratio-cut-and-normalized-cut` | Three-point finite witness comparing union and mutual kNN cuts. |
| `ex-disconnected-weighted-components-spectral-clustering` | 5 | `def-finite-weighted-graph-laplacian`; `def-ratio-cut-and-normalized-cut`; `lem-weighted-graph-laplacian-quadratic-form-and-kernel`; `alg-weighted-spectral-clustering` | Two weighted components, zero cut objectives, and exact unnormalized embedding output. |
| `ex-isolated-vertex-in-normalized-cut` | 5 | `def-finite-weighted-graph-laplacian`; `def-ratio-cut-and-normalized-cut`; `lem-weighted-graph-laplacian-quadratic-form-and-kernel`; `alg-weighted-spectral-clustering` | Positive-degree subgraph, zero Ncut value, and separate isolate output. |
| `ex-concentric-circles-spectral-embedding` | 5 | `def-finite-weighted-graph-laplacian`; `lem-weighted-graph-laplacian-quadratic-form-and-kernel`; `alg-weighted-spectral-clustering` | Explicit two-ring finite graph whose embedding and deterministic Lloyd step separate the rings. |

The B-page examples are at level 2 or 5 according to their actual item dependencies; the page-level companion edge remains `ml02-spectral-clustering-examples` → `ml02-spectral-clustering`. No dependency cycle is present in this declared inventory.

## Supplier inspection and unresolved cross-batch obligations

- Read the full current body of published `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`. It applies to each finite real symmetric Laplacian matrix. Its proof uses `def-self-adjoint-and-normal-endomorphism`, `prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases`, and `thm-real-normal-endomorphism-classification`; those interfaces and the cited proof route were inspected. No choice axiom is listed or needed for the finite eigenbasis use.
- Read the full current body of published `cor-rayleigh-quotient-extreme-eigenvalue-characterisation`, its definition `def-rayleigh-quotient`, and `thm-courant-fischer-min-max-principle`. The supplier orders eigenvalues decreasingly and gives the smallest eigenvalue as the minimum quotient; the local trace lemma restates eigenvalues increasingly and invokes this only for `k=1`, proving `k≥2` itself. The inspected finite-dimensional hypotheses match; no choice axiom is used.
- Read the current full body of draft `alg-lloyd-k-means` and the proof of draft `thm-lloyd-objective-monotonicity-and-termination` from batch 20. The procedure accepts finite vectors in Euclidean space, arbitrary supplied initial centers, smallest-index initialization ties, retention of a current nearest label, sample-mean updates, and unchanged empty centers. Its termination theorem assumes the same tie-sensitive update and proves finite termination for finite data and any initial centers. The spectral algorithm supplies deterministic farthest-first initial centers and uses these exact updates.
- **Unresolved supplier readiness:** both `alg-lloyd-k-means` and `thm-lloyd-objective-monotonicity-and-termination` are present as draft batch-20 carriers; neither has an owner acceptance/readiness record visible in this handoff. Do not treat either as approved. The dependent item `alg-weighted-spectral-clustering` and B examples that claim its returned partition remain readiness-blocked pending owner reconciliation of these exact supplier bodies and their current batch-20 records. The local definitions, weighted lemmas, trace lemma, and relaxation theorem do not depend on batch 20 and can be assessed independently.
- The plan names the published unweighted Laplacian definition/PSD/kernel items only for the equal-positive-weight case. The general weighted identity and kernel are proved locally. The plan's Davis–Kahan warning is preserved by making no perturbation claim; an eigengap, norm, and exact proof supplier would be required before adding one.

## Source reading and retrieval history

- Ulrike von Luxburg, “A Tutorial on Spectral Clustering,” full PDF: <https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf>. Read the complete relevant weighted Laplacian statement/proof in §3 (PDF pp. 3–4), component-kernel argument in §3, unnormalized and normalized algorithms in §4, RatioCut/Ncut indicator and relaxation derivations in §§5.1–5.3 (PDF pp. 9–12), and the explicit no-rounding-quality-guarantee caveat in §5.4 (PDF p. 12). Supports the graph definitions, weighted identities, trace formulas, relaxations, algorithm outline, and warning; the weighted extension is proved locally here.
- Jean Gallier, “Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts,” full arXiv text/PDF: <https://arxiv.org/pdf/1311.2492>. Read Chapter 2 §§2.1–2.2 for weighted graphs, the quadratic form, PSD and component kernel; Chapter 3 for eigenvector graph drawings and repeated-eigenvalue examples; Chapter 4 §§4.1–4.2 for cut objectives and normalized-cut relaxation; and Appendix A for finite-dimensional Rayleigh/Courant–Fischer arguments. This is the independent full-notes treatment and supports the weighted graph and cut interfaces; all used claims have complete local proofs.
- ESL §14.5.3 is the planned textbook treatment. Five browser routes failed (author download target 403; chapter mirror 404; legacy Stanford URL redirected to an inaccessible current host; GitHub raw PDF had unsupported `application/octet-stream`; browser could not open the authors' Google Drive direct URL). The required `source-fetch-check --stamp` final attempt succeeded: 13,399,454 bytes, 764-page PDF, SHA-256 prefix `8d098d65cf53925b`. The local download matched that stamp, and the complete §14.5.3 text on printed pp. 544–547 was read. ESL labels its either-direction kNN symmetrization “mutual” and describes discarding the constant eigenvector; those conventions are not imported. The assigned finite example explicitly distinguishes union from both-directions mutual, and the controlling plan’s bottom-k convention (including the zero mode) governs. ESL is used only for its graph-construction/eigenvector/K-means overview and practical parameter caveats; its empirical concentric-circle figure supplies no consistency theorem.

## Item progress and next action

Manifest inventory and A/B frontmatter are in place; the deterministic projected-coordinate basis lemma was added before the consuming algorithm was authored. This section records the authoring checkpoint; final scoped results and the Step 1 recorder outcome are recorded below. After each item is completed, record its exact claim, source locator, deps/level, proof decision, validation outcome, unresolved obligations, and next action in the table below.

| Item | Completed claim and convention | Sources / locators | Deps / level | Validation and disposition |
|---|---|---|---|---|
| `def-finite-weighted-graph-laplacian` | Defined finite symmetric nonnegative zero-diagonal weights, support components including isolates, and `L_sym` only on positive-degree vertices. | Luxburg §3, PDF pp. 3–4; Gallier Ch. 2 §§2.1–2.2. | `[]` / 0 | Draft carrier written; `verification.precheck: n/a` is appropriate for a definition. Scoped rendering and metadata checks pending. |
| `lem-finite-trace-minimization` | Proved the multi-vector trace minimum for every symmetric real matrix; the scalar case uses the supplier Rayleigh convention. Eigenvalues are restated in increasing order and cutoff multiplicities are allowed. | Luxburg §5.2; Gallier Appendix A; published spectral suppliers. | `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `cor-rayleigh-quotient-extreme-eigenvalue-characterisation` / 0 | Precheck PASS: `node tools/tsx-run.mjs tools/precheck.mts items/def-finite-weighted-graph-laplacian.md items/lem-finite-trace-minimization.md` (1 proof checked, 0 failing). No choice axiom used. |
| `def-ratio-cut-and-normalized-cut` | Defined one-sided cut counting, weighted volume, RatioCut over all vertices, Ncut only on positive-degree vertices, and both normalized indicator columns. | Luxburg §§5.1–5.3; Gallier Ch. 4 §4.1. | `def-finite-weighted-graph-laplacian` / 1 | Draft definition written; `verification.precheck: n/a` is appropriate. Final scoped render/metadata checks pending. |
| `lem-weighted-graph-laplacian-quadratic-form-and-kernel` | Proved the weighted quadratic identity, PSD, and exact componentwise kernel including isolates; no unweighted-special-case theorem is used. | Luxburg §3, PDF pp. 3–4; Gallier Ch. 2 §2.2. | `def-finite-weighted-graph-laplacian` / 1 | Precheck PASS after adopting canonical layer numbers: one proof checked, zero failures. No choice axiom used. |
| `lem-ratio-cut-indicator-trace-identities` | Proved both indicator feasibility constraints and the RatioCut/Ncut trace formulas using ordered-pair cut counting. | Luxburg §§5.2–5.3; Gallier Ch. 4 §4.1. | graph definition, cut definition, weighted identity / 2 | Precheck PASS after canonical phase numbering: 1 proof checked, zero failures. |
| `thm-weighted-ratio-and-normalized-cut-relaxations` | Proved weighted RatioCut and active-vertex Ncut trace relaxations, nonnegative spectra, generalized eigenproblem equivalence, and lower-bound-only status. | Luxburg §§5.2–5.4; Gallier Ch. 4 §§4.1–4.2 and App. A. | local graph/cut/energy/trace suppliers / 3 | Precheck PASS after correcting a stale step reference and adopting the checker’s dependency-layer order: 1 proof checked, 0 failures. No rounding-quality claim. |
| `alg-weighted-spectral-clustering` | Defines deterministic graph construction input, ratio/normalized modes, isolate handling, projected-coordinate bottom-eigenspace basis, optional row normalization, seeded farthest-first Lloyd initialization, and tie-sensitive Lloyd updates. No approximation guarantee. | Luxburg §4; Gallier Chs. 3–4; ESL §14.5.3, printed pp. 544–547; current batch-20 Lloyd bodies. | local graph/cut/energy/eigenspace-basis/relaxation; `alg-lloyd-k-means`; `thm-lloyd-objective-monotonicity-and-termination` / 4 | Cross-batch draft readiness unresolved; procedure interface verified, acceptance not established. |
| `ex-knn-symmetrization-changes-ratio-cut` | Verified the tie-free three-point nearest-neighbor choices and RatioCut values `3/2` (union) and `0` (mutual) for `{1,2}|{3}`. | Luxburg §§2.1–2.2 and §5; Gallier Chs. 2 and 4. | graph and cut definitions / 2 | Precheck PASS (1 proof checked, 0 failing); diagram is outside Facts/Verification. |
| `ex-disconnected-weighted-components-spectral-clustering` | Verified weighted components `{1,2}` and `{3,4}`, zero RatioCut/Ncut minima, deterministic zero modes, and exact two-group Lloyd output. | Luxburg §3 and §5; Gallier Chs. 2–4. | local weighted definitions/lemma and algorithm / 5 | Precheck PASS (1 proof checked, 0 failing); batch-20 readiness remains unresolved. |
| `ex-isolated-vertex-in-normalized-cut` | Verified `V_+={1,2}`, active Ncut value 0, one-row embedding, and separate singleton output `{3}`. | Luxburg §3 and §5.3; Gallier Chs. 2 and 4. | graph/cut/weighted lemma and algorithm / 5 | Precheck PASS (1 proof checked, 0 failing); batch-20 readiness unresolved. |
| `ex-concentric-circles-spectral-embedding` | Verified the exact two-cycle support, its two-dimensional zero eigenspace, deterministic embedding rows, and exact Lloyd separation of the rings. | Luxburg §§3–4; Gallier Ch. 3. | graph/weighted kernel/eigenspace algorithm / 5 | Precheck PASS (1 proof checked, 0 failing); batch-20 readiness unresolved. |

**Historical checkpoint:** final contract and source-coverage reconciliation, scoped validation, and the ordinary readiness-recorder attempt are completed or blocked as detailed in the final audit below.


### Completed: `def-finite-weighted-graph-laplacian`

- Claim/conventions: finite vertex set `V={1,…,n}`; `W` symmetric, entrywise nonnegative, zero diagonal; support edge iff `w_ij>0`; isolates are singleton components; `D`, `L`, `V_+`, `D_+`, `L_+`, and `L_sym,+` are defined only on the declared domains.
- Sources read: von Luxburg §3 (full PDF, pp. 3–4) and Gallier Ch. 2 §§2.1–2.2 (full notes); no imported unweighted assertion is used.
- Dependencies/level: no item suppliers; level 0.
- Decision: definition-only, no proof or choice axiom.
- Validation: carrier authored; final scoped render/content checks pending.
- Unresolved obligations: none for this definition.
- Next action: author the independent finite trace-minimization lemma at level 0.


### Completed: `lem-finite-trace-minimization`

- Claim/conventions: for symmetric `A`, `tr(QᵀAQ)` over `QᵀQ=I_k` is the sum of the `k` smallest eigenvalues; eigenvalues are increasingly ordered here, in contrast to the cited Rayleigh item’s decreasing order. The proof handles `k=1` via that exact minimum-quotient clause and proves the multi-vector case by projection weights.
- Sources read: Luxburg §5.2 and Gallier Appendix A; published supplier bodies read in full: `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `cor-rayleigh-quotient-extreme-eigenvalue-characterisation`, `def-rayleigh-quotient`, and `thm-courant-fischer-min-max-principle`. Their finite-dimensional real hypotheses and eigenvalue conventions agree; no additional axiom is invoked.
- Dependencies/level: the two published spectral suppliers only; no in-run supplier, level 0.
- Decision: local `k≥2` proof supplied; repeated cutoff eigenvalues are explicitly permitted and the displayed eigenbasis attains the minimum.
- Validation: precheck passed (one proof checked, zero failures); final render/proof-layout checks remain pending.
- Unresolved obligations: none for this lemma.
- Next action: define RatioCut/Ncut at level 1, then prove the weighted quadratic identity/kernel at level 1.


### Completed: `def-ratio-cut-and-normalized-cut`

- Claim/conventions: each undirected crossing edge is counted once by summing from `A` to `A^c`; volume is `sum_{i in A} d_i`; RatioCut partitions all vertices, while Ncut partitions only `V_+`, so isolates never create zero Ncut denominators. Indicator columns use the stated cardinality/volume normalizations.
- Sources read: Luxburg §§5.1–5.3 and Gallier Ch. 4 §4.1. The definition section contains no inline links; its earlier local definition and external source links immediately follow in `Definition references`.
- Dependencies/level: `def-finite-weighted-graph-laplacian`; level 1.
- Decision: definition-only, no proof or choice axiom.
- Validation: authored; definition precheck is not applicable. Final scoped render/metadata checks pending.
- Unresolved obligations: none for this definition.
- Next action: prove the general weighted quadratic identity and componentwise kernel locally.


### Completed: `lem-weighted-graph-laplacian-quadratic-form-and-kernel`

- Claim/conventions: finite `W=Wᵀ≥0` with zero diagonal, `L=D-W`; the energy is the half-sum over ordered pairs, so symmetric crossing edges are counted once. Kernel vectors are exactly the vectors constant on each support component, including singleton isolates.
- Sources read: Luxburg §3, PDF pp. 3–4; Gallier Ch. 2 §2.2. Both cover weighted graphs, but the carrier derives the weighted formula and both kernel directions locally. Published simple-graph suppliers are not stretched to unequal weights.
- Dependencies/level: `def-finite-weighted-graph-laplacian`; level 1.
- Decision: all steps are finite algebra and path propagation; no choice axiom.
- Validation: `node tools/tsx-run.mjs tools/precheck.mts items/lem-weighted-graph-laplacian-quadratic-form-and-kernel.md` passed (1 proof checked, 0 failing). The first pass requested dependency-layered numbering; that repair was adopted before the passing rerun. Final renderer/proof-layout checks remain pending.
- Unresolved obligations: none for the weighted identity/kernel lemma.
- Next action: prove the RatioCut/Ncut indicator trace identities at level 2.


### Completed: `lem-ratio-cut-indicator-trace-identities`

- Claim/conventions: RatioCut uses the full vertex set and cardinality normalization; Ncut uses only `V_+` and volume normalization. `cut(A,A^c)` is a one-sided sum; the `1/2` in the quadratic form cancels the two symmetric directions. Trace is defined as the sum of diagonal entries in the statement.
- Sources read: Luxburg §§5.2–5.3 and Gallier Ch. 4 §4.1. The local proof independently computes both formulas.
- Dependencies/level: `def-finite-weighted-graph-laplacian`, `def-ratio-cut-and-normalized-cut`, and `lem-weighted-graph-laplacian-quadratic-form-and-kernel`; level 2.
- Decision: both identities and both indicator constraints proved; no zero-volume Ncut parts admitted.
- Validation: `node tools/tsx-run.mjs tools/precheck.mts items/lem-ratio-cut-indicator-trace-identities.md` passed (1 proof checked, 0 failing). The first scoped pass requested canonical dependency-layer numbering; the repair was adopted before the passing rerun. Final renderer/proof-layout checks remain pending.
- Unresolved obligations: none for the trace identities.
- Next action: prove the weighted RatioCut/Ncut relaxations at level 3.


### Completed: `thm-weighted-ratio-and-normalized-cut-relaxations`

- Claim/conventions: RatioCut partitions all vertices; Ncut partitions only `V_+`; `D_+` is positive diagonal; isolates have zero rows/columns and are excluded from Ncut denominators. Relaxed eigenvalues are increasingly ordered with multiplicity. The generalized problem is `L_+u=λD_+u`.
- Sources read: Luxburg §§5.2–5.4 (including the explicit no-guarantee caveat) and Gallier Ch. 4 §§4.1–4.2 and Appendix A. The arbitrary weighted argument, PSD of `L_sym,+`, indicator feasibility, and trace minimum are fully supplied by local proof items.
- Dependencies/level: graph and cut definitions; weighted energy/kernel lemma; indicator trace lemma; finite trace-minimization lemma; level 3.
- Decision: both relaxations are proved; they yield lower bounds only. No Davis–Kahan, rounding approximation, or manifold-recovery statement is made. No additional choice axiom.
- Validation: `node tools/tsx-run.mjs tools/precheck.mts items/thm-weighted-ratio-and-normalized-cut-relaxations.md` passed (1 proof checked, 0 failing). Earlier scoped results were `forward-ref-1.4` and then a canonical phase-order repair; both were corrected before the passing run. Final renderer/proof-layout checks remain pending.
- Unresolved obligations: none for the relaxation theorem.
- Next action: author the deterministic spectral-clustering algorithm at level 4 using the declared batch-20 Lloyd interface.


### Prerequisite extension before algorithm authoring

- The deterministic repeated-eigenvalue convention uses the orthogonal projection onto each eigenspace. Read the complete published `def-orthogonal-projection` definition and `thm-orthogonal-projection-is-the-unique-nearest-point` proof; the definition depends on finite-dimensional orthogonal decomposition. The construction uses uniqueness of the direct-sum components, not a choice axiom.
- Added `lem-deterministic-eigenspace-basis` at level 0 with `deps: [def-orthogonal-projection]`; it proves that the projected standard coordinate vectors span the eigenspace and that a finite Gram–Schmidt scan yields a deterministic orthonormal basis, preserving a supplied unit zero-mode vector first. `alg-weighted-spectral-clustering` now depends on this lemma and remains at level 4.
- The A-page frontmatter and batch manifest were updated before writing the algorithm carrier.


### Completed: `lem-deterministic-eigenspace-basis`

- Claim/conventions: for a finite-dimensional subspace of standard `R^m`, projected coordinate vectors span the subspace; finite modified Gram–Schmidt in coordinate order yields a unique deterministic orthonormal list after zero residuals are skipped, preserving an optional prescribed unit vector first.
- Sources read: Luxburg §§3–4 and Gallier Ch. 3 for spectral embeddings; prerequisite `def-orthogonal-projection` and its finite-dimensional orthogonal-decomposition supplier were read. The uniqueness of the orthogonal decomposition gives linearity of the projection; no arbitrary choice axiom is used.
- Dependencies/level: `def-orthogonal-projection` (published, external); level 0.
- Decision: complete local finite-dimensional span and Gram–Schmidt proof supplied before the algorithm uses this convention.
- Validation: authored; scoped precheck and final renderer/proof-layout checks pending.
- Unresolved obligations: none for the eigenspace-basis lemma.
- Next action: define the composed spectral clustering algorithm at level 4.

- Scoped precheck for `lem-deterministic-eigenspace-basis` passed: `node tools/tsx-run.mjs tools/precheck.mts items/lem-deterministic-eigenspace-basis.md` (1 checked, 0 failing).

## Dependency-level recomputation after eigenspace lemma addition

The scoped call to `dependencyLevels` over batch-20 and batch-21 manifests returned these batch-21 levels: 0 for `def-finite-weighted-graph-laplacian`, `lem-finite-trace-minimization`, and `lem-deterministic-eigenspace-basis`; 1 for `def-ratio-cut-and-normalized-cut` and `lem-weighted-graph-laplacian-quadratic-form-and-kernel`; 2 for `lem-ratio-cut-indicator-trace-identities` and `ex-knn-symmetrization-changes-ratio-cut`; 3 for `thm-weighted-ratio-and-normalized-cut-relaxations`; 4 for `alg-weighted-spectral-clustering`; and 5 for the other three examples. The scoped graph had no errors.


### Completed: `alg-weighted-spectral-clustering`

- Claim/conventions: deterministic graph builder returns symmetric `W≥0` with zero diagonal; ratio mode retains isolates, normalized mode removes them and reports them separately; repeated eigenspaces use the local projected-coordinate basis lemma with a prescribed positive zero mode; optional normalized rows are defined on nonzero rows; farthest-first uses the smallest active vertex as seed and lowest-index ties; K-means uses the exact batch-20 retention/mean/empty-center rules. Output may have fewer than `k` nonempty groups; no cut-approximation or manifold guarantee.
- Sources read: Luxburg §4 and graph-cut derivation in §5; Gallier Chs. 3–4. Current batch-20 `alg-lloyd-k-means` procedure and `thm-lloyd-objective-monotonicity-and-termination` proof were read, including finite data, arbitrary initial-center, tie, and empty-center hypotheses.
- Dependencies/level: local graph, cut, weighted energy, deterministic basis, and relaxation items; batch-20 `alg-lloyd-k-means` and `thm-lloyd-objective-monotonicity-and-termination`; level 4.
- Decision: well-defined exact procedure with deterministic tie conventions; termination relies on the draft batch-20 theorem and is therefore not ready for owner reconciliation.
- Validation: authored; precheck is not applicable to an algorithm definition. Final renderer, dependency-level, and proof-layout checks pending.
- Unresolved obligations: owner reconciliation/readiness of the two batch-20 supplier IDs above.
- Next action: construct and verify the B-page finite examples; preserve the same unresolved supplier disposition where they invoke the algorithm.


### Completed: `alg-weighted-spectral-clustering`

- Claim/conventions: `G` is an input deterministic graph builder returning a symmetric nonnegative zero-diagonal matrix; ratio mode retains all vertices, normalized mode removes isolates and reinserts them as separately reported singletons; repeated eigenspaces use the projected-coordinate basis lemma with a prescribed positive zero mode; optional normalized rows are therefore nonzero; K-means is seeded by the smallest-index row then farthest-first with lowest-index ties. Empty Lloyd clusters may leave fewer than `k` returned groups. No approximation or recovery guarantee.
- Sources read: Luxburg §4 and §§5.2–5.4; Gallier Chs. 3–4. Batch-20 `alg-lloyd-k-means` and `thm-lloyd-objective-monotonicity-and-termination` were read in full; their exact finite-data, supplied-center, retention-on-tie, mean-update, and empty-center hypotheses match the call.
- Dependencies/level: local graph/cut/energy/eigenspace-basis/relaxation items; `alg-lloyd-k-means`; `thm-lloyd-objective-monotonicity-and-termination`; level 4.
- Decision: complete deterministic procedure; termination of its Lloyd subprocedure is supported by the current draft supplier proof but owner readiness remains unresolved.
- Validation: definition-only; `verification.precheck: n/a` is appropriate. Final render/depcheck/proof-layout checks pending.
- Unresolved obligations: readiness/reconciliation of the two batch-20 draft suppliers. No acceptance is claimed.
- Next action: write B-page examples in ascending item levels, then contracts and evidence.


### Completed: `ex-knn-symmetrization-changes-ratio-cut`

- Claim/conventions: points `0,1,3` on the real line; `k=1`; unique nearest choices; unit weights on union/mutual symmetrized edges; partition `{1,2}|{3}`; only RatioCut compared (mutual graph gives a zero-volume part, so no Ncut claim).
- Sources read: Luxburg §§2.1–2.2, §5; Gallier Chs. 2 and 4. The example is computed from its explicit finite graph; the diagram labels and layout are explained after Verification.
- Dependencies/level: `def-finite-weighted-graph-laplacian`, `def-ratio-cut-and-normalized-cut`; level 2.
- Decision: generated finite example, fully computed; no algorithmic or approximation claim.
- Validation: `node tools/tsx-run.mjs tools/precheck.mts items/ex-knn-symmetrization-changes-ratio-cut.md` passed (1 proof checked, 0 failing); final renderer and proof-layout checks remain pending.
- Unresolved obligations: none for this example.
- Next action: verify the disconnected weighted-component example at level 5.


### Completed: `ex-disconnected-weighted-components-spectral-clustering`

- Claim/conventions: edge weights are 2 and 3 on separate two-vertex components; degrees are `(2,2,3,3)`; Ncut has positive volumes; the prescribed unnormalized zero-mode basis yields two distinct row values and the farthest-first Lloyd step is fixed after one update.
- Sources read: Luxburg §3 and §5; Gallier Chs. 2–4. All matrix, cut, embedding, and one-step Lloyd computations are explicit in Verification; the TikZ graph is explained separately.
- Dependencies/level: weighted graph/cut definitions, weighted identity/kernel, relaxation theorem, and spectral algorithm; level 5.
- Decision: generated finite example; the demonstrated output is exact for this graph, not a general approximation guarantee.
- Validation: `node tools/tsx-run.mjs tools/precheck.mts items/ex-disconnected-weighted-components-spectral-clustering.md` passed (1 proof checked, 0 failing); the initial phase-order repair was adopted. Final renderer/proof-layout checks remain pending.
- Unresolved obligations: the algorithm’s batch-20 Lloyd suppliers remain draft and await owner readiness reconciliation.
- Next action: handle the isolate example, then the concentric-ring example.


### Completed: `ex-isolated-vertex-in-normalized-cut`

- Claim/conventions: normalized mode uses positive-degree vertices only; row normalization is explicitly disabled (the default); the active one-cluster result is `{1,2}`, and isolate `{3}` is separately returned, not included in Ncut.
- Sources read: Luxburg §3 and §5.3; Gallier Chs. 2 and 4. The matrix, eigenvector, single-center update, and Ncut value are computed locally; the TikZ diagram is explained outside Facts/Verification.
- Dependencies/level: graph/cut definitions, weighted kernel lemma, and spectral algorithm; level 5.
- Decision: generated finite example, exact within this stated graph.
- Validation: `node tools/tsx-run.mjs tools/precheck.mts items/ex-isolated-vertex-in-normalized-cut.md` passed (1 proof checked, 0 failing); final renderer/proof-layout checks remain pending.
- Unresolved obligations: batch-20 Lloyd supplier readiness required by the algorithm item remains owner-held.
- Next action: verify the concentric-ring graph example.


### Completed: `ex-concentric-circles-spectral-embedding`

- Claim/conventions: vertices `1–4` are the radius-one four-cycle and `5–8` the radius-three four-cycle; only cycle edges have weight one; no cross-ring edges; unnormalized `k=2`, no row normalization. The projected-coordinate rule gives two exact row values, and farthest-first seeds one per component.
- Sources read: Luxburg §§3–4 and Gallier Ch. 3. The graph drawing and exact finite eigenspace computations are locally verified; no manifold-recovery claim is made.
- Dependencies/level: weighted graph definition/kernel lemma and deterministic spectral algorithm; level 5.
- Decision: generated finite example, exact under the stated graph rule.
- Validation: `node tools/tsx-run.mjs tools/precheck.mts items/ex-concentric-circles-spectral-embedding.md` passed (1 proof checked, 0 failing); final renderer/proof-layout checks remain pending.
- Unresolved obligations: batch-20 Lloyd supplier readiness remains owner-held.
- Next action: run scoped checks and complete source, contract, and decision evidence.


## ESL section reconciliation after successful retrieval

The direct author-linked Google Drive PDF was fetched by source-fetch-check after five browser-route failures; stamp: 13,399,454 bytes, 764 pages, SHA-256 prefix 8d098d65cf53925b. A local download matched the stamp, was extracted with MuPDF, and the complete §14.5.3 on printed pp. 544–547 was read. The section defines a symmetric similarity graph, radial-kernel and kNN construction, L=G-W, the weighted quadratic identity, eigenvector/K-means row clustering, and graph/cluster-count parameter choices. It uses “mutual KNN” for the OR/either-direction rule; our example explicitly defines OR as union and AND as mutual, so that ambiguous source label is not imported. ESL's procedure drops the constant vector and selects subsequent eigenvectors, while the controlling ML-20 plan specifies the k lowest eigenvectors including the zero mode; the plan controls. Its concentric-circle figure is an empirical illustration, not a consistency theorem. The algorithm item now cites this book section for its graph/eigenvector/K-means overview only.

## Final scoped audit and readiness handoff

- Final authored scope is 12 items: 8 A-page items and 4 B-page examples. Page YAML inventories match the manifest, both page bodies are empty, and every assigned Definition/Statement/Example is uninterrupted by links with references in the immediately following matching `references` section. The local structural check reports 12 items, 2 pages, 0 errors. The 100-item page cap is respected.
- Final in-run item dependency levels were recomputed from batch 21 with the exported `dependencyLevels` checker: 0 for `def-finite-weighted-graph-laplacian`, `lem-finite-trace-minimization`, `lem-deterministic-eigenspace-basis`; 1 for `def-ratio-cut-and-normalized-cut`, `lem-weighted-graph-laplacian-quadratic-form-and-kernel`; 2 for `lem-ratio-cut-indicator-trace-identities`, `ex-knn-symmetrization-changes-ratio-cut`; 3 for `thm-weighted-ratio-and-normalized-cut-relaxations`; 4 for `alg-weighted-spectral-clustering`; 5 for the remaining three examples. The scoped graph has 12 items and 0 errors. The theorem’s direct dependency on the graph definition was made explicit in carrier and manifest; levels did not change.
- Final proof checks: `node tools/tsx-run.mjs tools/precheck.mts` over the 12 assigned item carriers checked 9 proof-bearing items with 0 failures; strict `tools/proof-contract.mjs` over those 9 reports 0 errors and 0 warnings; `node tools/proof-layout.mjs` over all 12 reports 37 steps and 0 defects. The contracts contain exact current supplier excerpts, actual step claims/inputs, standard boundary dispositions, and all proof-bearing items in this pair (9/9).
- `finite-smoke.mjs` scoped to those 9 proof-bearing items reports 0 errors and 0 checks over 0/9 items carrying registered obligations. No spectral-graph/cut check exists in its registry; the four concrete B examples instead carry complete, explicit finite calculations in their Verification proofs.
- Final content checks: `rendercheck` over 12 item files and 2 pages passed real KaTeX math parsing and YAML parsing; focused `depcheck` covered the 12 items and both pages with 0 errors and 0 warnings; focused `fwdcheck` and `extcheck` each report 0 errors and 0 warnings; `content-policy` reports 12 items, 0 errors, 0 warnings; `manifest-deps` reports 12 items, 0 missing dependency lists, 0 errors.
- Final source evidence: `coverage-checklist --require-destination` reports 1 A page, 26 harvested results, 0 errors, 0 warnings. `source-fetch-check --stamp` reports 3/3 sources fetch-verified and resolved. ESL’s five failed browser routes and successful stamped final route are retained under that source’s `retrieval_history`/`recovery_attempts`; no source is dropped or unresolved.
- Full-run gates remain blocked outside this pair. The latest `item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` reports 131 errors across the run (105 empty scaffold inventories, 26 items without IDs, 0 level mismatches); no error names a batch-21 item. `batch-dependency-levels.mjs check` stops at `Duplicate item undefined` in the incomplete run inventory. Full-run `proof-contract-coverage` stops at `Empty or invalid frontier page inventory distribution-shift-and-domain-adaptation` before reaching this pair. Scoped batch-21 level and strict contract checks both pass.
- The prescribed `step1-decisions.mjs record` was attempted for each of the 12 items with its examined direct dependency IDs and no `--owner` override. All 12 attempts fail before writing with `Duplicate item undefined` from the same invalid full-run inventory; no Step 1 record existed beforehand and none was written. The author’s complete-prerequisite disposition is `ready` for `def-finite-weighted-graph-laplacian`, `lem-finite-trace-minimization`, `lem-deterministic-eigenspace-basis`, `def-ratio-cut-and-normalized-cut`, `lem-weighted-graph-laplacian-quadratic-form-and-kernel`, `lem-ratio-cut-indicator-trace-identities`, `thm-weighted-ratio-and-normalized-cut-relaxations`, and `ex-knn-symmetrization-changes-ratio-cut`; `escalated` for `alg-weighted-spectral-clustering` and its three dependent examples pending owner reconciliation of batch-20 `alg-lloyd-k-means` and `thm-lloyd-objective-monotonicity-and-termination`. The two batch-20 carriers were read in full; the relevant interface assumes finite Euclidean data, `1≤K≤n`, arbitrary supplied initial centers, current-nearest-label retention, sample-mean updates, and unchanged empty-cluster centers. This handoff claims neither supplier acceptance nor a Step 1 readiness record.
- Corrections made during the final checks: closed the missing inline math delimiter in the weighted graph definition; made the relaxation theorem’s direct graph-definition dependency explicit in both carrier and manifest; removed an unused relaxation-theorem fact from the disconnected finite example; synchronized its proof contract; added the omitted `step 1.1` input to the finite trace proof and contract; and anchored checked boundary evidence to relevant proof steps. Final scoped checks above were rerun after these edits.
