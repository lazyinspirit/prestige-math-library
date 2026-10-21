# Batch 4 — Step 1 authoring notes

Run: inverse-problems-knot-theory-all-109-2026-10-19  
Pair: operator-approximation-and-regularization-error (A/B)  
Authoring date: 2026-10-19

## Live-run and scope evidence

- The native status command for this run reported stage 1-scaffold, 1/109 covered, and no in-flight work; batch 4 was not yet covered in that status. The batch-4 manifest existed as an untracked empty scaffold. The state directory and workflow were left unchanged.
- Git HEAD was dd17c1fe56, “Lower mathematics workflow worker concurrency to 20”. The batch-4 page manifest existed as an untracked empty scaffold. No assigned item carrier or page carrier existed before authoring.
- The assignment gives batch dependency level 2, prerequisite batch 2, and scheduling input e7960405a04b69483ac9536af1a978655d4818b99a5c54b66daa19a26efa3f79.
- Only batch-4 carriers and evidence are in scope. Published content, the shared plan, other batches, and engine state are not being edited.

## Plan comparison and interpretation

The IP-04 section in research/plan-inverse-problems-track.md names the A items def-ip-error-budget-for-computed-inversion and prop-ip-regularized-output-error-splits-by-source, with two B leaves: a resolution sequence with small singular values and an iterative solve stopped at nonzero residual. The current plan-spec.json row agrees on page IDs, title, inverse-problems category, order 3004/3005, and all three page requirements. Its empty items array is the unfilled construction inventory, not a conflicting item selection; the batch-4 manifest is now populated from the named IP-04 design items and the two specified B leaves. No page identity or dependency conflict was found.

The existing published thm-tikhonov-error-chain-with-discretization-and-residual already states and proves the four- and five-term telescoping chains, residual estimates, and the “no rate is implicit” caveat. The published thm-tikhonov-forward-discretization-and-stopping-coupling adds a separate sequence convergence condition, and lem-computed-augmented-tikhonov-solve-residual-and-output-error supplies the finite stored-matrix residual certificate under its explicit arithmetic hypotheses. The local proposition is retained because IP-04 explicitly assigns it; it packages the exact terms as the named error-budget interface and derives only the corresponding triangle bound. It does not present the supplier chain, stopping criterion, or QR arithmetic result as new.

## Item inventory and in-run dependency levels

The manifest inventory and direct logical dependencies were fixed before writing item carriers. Levels count only current run item dependencies; published dependencies do not raise a level.

| item | page | kind | direct item dependencies | level |
|---|---|---|---|---:|
| def-ip-error-budget-for-computed-inversion | operator-approximation-and-regularization-error | definition | def-ip-compact-linear-inverse-model | 2 |
| prop-ip-regularized-output-error-splits-by-source | operator-approximation-and-regularization-error | proposition | def-ip-error-budget-for-computed-inversion; published norm, Tikhonov residual, noise, and discretization suppliers | 3 |
| ex-ip-mesh-sequence-small-singular-values | operator-approximation-and-regularization-error-examples | example | def-ip-error-budget-for-computed-inversion; lem-finite-rank-operators-are-compact | 3 |
| ex-ip-iterative-tikhonov-solve-stopped-with-residual | operator-approximation-and-regularization-error-examples | example | def-ip-error-budget-for-computed-inversion; lem-finite-rank-operators-are-compact | 3 |

The assigned page dependency level remains 2 from the manifest: batch 4 requires batch 2, whose maximum page-batch level is 1. Item levels 2 and 3 follow the item graph and are not substituted for the page-batch level.

## Supplier bodies and conventions inspected

- The current batch-2 manifest and actual linear-operators-pseudoinverses-and-picard-criteria page declare the compact Hilbert model, Moore–Penrose inverse definition, closed-range theorem, and Picard theorem. The actual compact-model Definition states that X and Y are real or complex Hilbert spaces, K is compact, every x-dagger in X is admissible, y=Kx-dagger is exact data, and no injectivity, surjectivity, or closed-range condition is imposed. The batch-2 Definition, closed-range proof, and Picard proof were read in full.
- The current def-ip-forward-map-and-solution-classes carrier exists. Its Step-1 decision is ready, with direct dependency def-metric-space. The Definition names metric parameter/data spaces, a nonempty truth class, the forward map, exact solution sets, and metric solution classes. The published metric-space definition and the published compact-operator and Hilbert-space definitions were read. The current batch-2 def-ip-compact-linear-inverse-model record is also ready and its recorded dependencies match the actual bodies. The older batch-2 note that def-ip-forward-map-and-solution-classes was absent predates the current body and is not treated as a current blocker.
- The published numerical-inverse-problems-and-regularization-error page and spectral-regularization-and-parameter-choice page were inspected with their actual relevant item carriers. The proof of thm-tikhonov-error-chain-with-discretization-and-residual was checked term by term; its hypotheses include Countable Choice, real or complex Hilbert spaces, compact A, bounded finite-rank A-h, lambda>0, common data noise, and an exact normal residual. The separate finite-matrix augmented-solve lemma’s output-roundoff guarantee is conditional on its stated residual certificate, successful arithmetic, and representation/precision conditions.
- The published discretization-coupling theorem’s x-dagger perpendicular to ker(A), operator-difference, noise/parameter, and residual/parameter conditions are retained as separate hypotheses; none is inferred from the pointwise budget.
- The Countable Choice branch belongs to the general Hilbert-space proposition because its adjoints and normal-operator inverse suppliers assume it. The two finite examples use explicit real matrices and scalar recurrences and make no choice-axiom assumption.

## Cross-batch prerequisite status

Batch 4 directly requires the batch-2 A page, and the error-budget definition directly depends on def-ip-compact-linear-inverse-model. Both actual interfaces and the relevant proofs are present; the batch-2 model and theorem carriers are draft and their records claim authoring readiness only. They confer no independent approval. The compact-model definition’s transitive batch-1 forward-map supplier is present and has its current ready Step-1 record. The other batch-2 page requirements are the batch-1 inverse-problem model page and the published Hilbert-geometry and compact-operator pages; their current page identities and dependency roles were checked. Batch 4 does not import the draft Picard or closed-range conclusions into a proof step.

The batch-4 cross-batch dependency input records the current page and direct item edges as verified interfaces, not as acceptance. No cross-batch supplier is currently missing.

## Source search and reading scope

Three independent full-text treatments were inspected. Christian Clason’s 137-page lecture notes were read at Chapter 8, Theorem 8.8 and its complete proof, and Theorems 8.9–8.10 with their complete min–max proofs, printed pp. 76–78 (PDF pp. 79–81). The relevant argument separates projection bias from noise by the smallest retained singular value and requires parameter/resolution coupling for convergence. Per Christian Hansen’s complete Chapter 5 PDF was read at slides 2–6: the coefficient convention is lambda_H squared, and the finite-matrix forward error splits into regularization bias and data perturbation, with small singular values causing amplification. Tristan van Leeuwen and Christoph Brune’s full Chapter 3.4.1 was read at lines 354–395: the regularized pseudoinverse error is split into bias and perturbation terms, the bound depends on regularized operator norms, and their differentiation witness keeps error nonvanishing as data noise tends to zero. These sources support the error-accounting conventions; the repository-local suppliers provide the full operator, forward-discretization, solve-residual, and exact local proof statements.

Searches used:

- “Clason Regularization of Inverse Problems Chapter 8 discretization error Tikhonov pdf”
- “site:people.compute.dtu.dk/pcha/DIP/ chap5.pdf Tikhonov data noise error decomposition”
- “inverse problems Tikhonov discretization regularization solve residual error bound lecture notes finite rank”

No retrieval failure or source drop occurred, so source-resolution recovery records are not applicable. The source-coverage artifact records actual fetch stamps, locators, item support, and harvested-result dispositions. No registered finite-smoke fixture matches either authored example: the nearest inverse fixture checks an LSQR 2-by-2 case, not this Tikhonov mesh family or the scalar stopped normal-equation solve. Both examples are therefore verified by complete symbolic finite calculations in their local Verification sections; no general asymptotic conclusion is assigned to a finite-smoke check.

## Checkpoint before item carriers

The item inventory, direct dependencies, and levels above were written to the batch-4 manifest before item authoring. The four assigned items are now authored. To account for in-run suppliers outside this batch, their levels were recomputed against all current run manifests: the definition is level 2 and the proposition and both examples are level 3. The complete run-wide checker remains blocked by empty inventories in other scaffold batches; the scoped Batch 4 levels match the full current graph.

### Completed item: def-ip-error-budget-for-computed-inversion

- Claim and conventions: conditional definition for real or complex Hilbert spaces with a compact exact operator, bounded finite-dimensional-range discretization, supplied Hilbert adjoints, and bijective shifted normal operators. Lambda is the coefficient of the squared penalty. The five channels distinguish truth bias, data perturbation, regularized-operator difference, pre-inversion forward residual, and algebraic solve error; the latter is tied to, but is not itself, the exact normal residual. No existence theorem, floating-point certificate, or rate is built into the definition.
- Direct dependency: def-ip-compact-linear-inverse-model, the current batch-2 definition at level 1; this item is manifest level 2. Its actual compact Hilbert model body and transitive batch-1 forward-map definition were inspected, including the current ready record for the forward-map supplier.
- Sources read: Clason, Chapter 8; Hansen, Chapter 5; van Leeuwen and Brune, Chapter 3.4.1. They support the bias/noise/discretization accounting; no source statement substitutes for the local definition.
- Decision checkpoint: definition carrier and placement are complete. It has one actual in-run supplier at level 1, so its level is 2. Its definition format is not subject to proof precheck; the relevant source-fetch, dependency, content-policy, render, and final proof-layout evidence is recorded below.

### Completed item: prop-ip-regularized-output-error-splits-by-source

- Exact claim: under Countable Choice, compact A, bounded finite-dimensional-range A-h, lambda>0, common data perturbation, and an arbitrary returned output with its exact normal-equation residual, the five named vectors telescope to x-dagger minus the output. Triangle inequality, the 1/(2 sqrt(lambda)) Tikhonov data bound, and the 1/lambda normal-inverse bound give the pointwise budget estimate. Operator and evaluated-residual substitutions are explicitly conditional. The proposition asserts no sequence rate.
- Direct dependencies: the batch-4 error-budget definition; Countable Choice and the Hilbert-adjoint definition; the published inner-product triangle inequality, operator norm, normal-inverse and noise bounds; the published exact error-chain theorem, finite augmented-solve certificate, and forward-discretization/stopping-coupling theorem. Its in-run level is 3.
- Proof route: cancel the shared-noise terms to identify d-h, derive the exact telescope by expanding the local channel definitions, apply triangle inequality, bound the data and pre-inversion channels by the Tikhonov norm estimate, and solve error by applying the shifted-normal inverse to the exact residual. The published chain supplier is used only for its no-rate and no-floating-point-certificate caveat, not as a premise for the local identity. The conditional QR certificate retains the finite stored-matrix and residual-evaluation assumptions. The Countable Choice use is confined to the Hilbert-adjoint and normal-inverse suppliers; no stronger choice axiom is invoked.
- Source and design disposition: the proposition is a local channel-level interface to the existing published chain, not a claim that its underlying Tikhonov telescoping theorem is new. Clason’s discretization theorem supplies a separate sufficient sequence-convergence route only under the extra assumptions recorded in Fact F8.
- Decision checkpoint: statement and complete proof are complete with exact supplier facts, phase steps, and the Countable Choice branch. The strict proof contract, precheck, render, scoped dependency/content-policy checks, and final proof-layout evidence are recorded below.

### Completed item: ex-ip-mesh-sequence-small-singular-values

- Exact claim: at each resolution n, the finite real diagonal operator and discretized operator are both diag(1,1/2,...,1/n), the truth and exact data are zero, the last-coordinate noise has norm 1/n, and lambda=n^-4. Direct diagonal calculation gives exact Tikhonov output and truth error n^2/(n^2+1), tending to 1 despite vanishing noise. The operator, pre-inversion, bias, and exact-solve channels vanish; only data perturbation remains.
- Conventions and assumptions: Euclidean inner products, real matrices, lambda is the coefficient of the squared penalty, exact finite arithmetic, and no choice axiom. The example is a sequence of finite-resolution models and asserts no convergence result for a single infinite-dimensional operator.
- Dependencies: def-ip-error-budget-for-computed-inversion (in-run level 2) and the published bounded-finite-rank compactness lemma; item level 3. The compactness and shifted-normal invertibility conditions are checked directly for each finite diagonal matrix.
- Source support: Clason Chapter 8, Theorem 8.8 and proof (printed pp. 76–77 / PDF p. 79); Hansen Chapter 5, slides 4–6; van Leeuwen–Brune §3.4.1. These support the small-singular-value/noise-amplification context; the exact sequence values are calculated locally.
- Decision checkpoint: the finite sequence example and its complete Verification are complete. Its exact output, vanishing noise, persistent error, and zero-channel claims are checked symbolically. The strict proof contract, precheck, render, scoped dependency/content-policy checks, and final proof-layout evidence are recorded below.

### Completed item: ex-ip-iterative-tikhonov-solve-stopped-with-residual

- Exact claim: for the scalar finite model A=A-h=I, lambda=1, zero truth/data/noise, one Richardson step from x0=1/2 returns x-tilde=1/4 with exact normal residual 1/2. Its only nonzero budget channel is the algebraic solve error, whose norm is 1/4. All arithmetic and the adjoint/inverse maps are explicit.
- Conventions and assumptions: real one-dimensional Euclidean inner product, lambda is the coefficient of the squared penalty, and one exact-arithmetic iteration is stopped early. The finite example is choice-free and makes no floating-point roundoff claim.
- Dependencies: def-ip-error-budget-for-computed-inversion and lem-finite-rank-operators-are-compact; item level 3. The identity’s finite range proves compactness and the shifted normal operator is explicitly 2I.
- Decision checkpoint: the scalar stopped-iteration example and its complete Verification are complete. No registered finite-smoke selector matches this exact step; the recurrence, residual, and solve channel are verified symbolically. The strict proof contract, precheck, render, scoped dependency/content-policy checks, and final proof-layout evidence are recorded below.

## Final validation and remaining owner gates

- `node tools/tsx-run.mjs tools/precheck.mts` on all four item carriers: 3 proof-bearing items checked, 0 failing; the definition has `verification.precheck: n/a`. The three proof-bearing carriers record `verification.precheck: pass`.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-4.proof-contracts.json --strict`: 4/4 items, 0 errors, 0 warnings.
- `node tools/rendercheck.mjs` on the four items and two A/B pages: 6 files passed KaTeX, frontmatter, and markup checks. Page bodies remain empty YAML-frontmatter-only carriers.
- Scoped `depcheck` with `/tmp/inverse-problems-batch4-item-scope.json`: the four selected items and their prerequisite cycle checks passed. Scoped `content-policy` on the batch-4 manifest: 4 items, 0 errors, 0 warnings.
- Recomputed against all current run manifests with the item-level dependency helper: levels are 2, 3, 3, 3 for the four assigned items, matching the manifest/carriers. The unscoped run check cannot close yet: 166 of 218 run pages still have empty scaffold inventories. An attempted `depcheck --help` was not a help mode and ran the whole-corpus scan (36,142 items and 2,867 pages), exiting on unrelated existing corpus findings; this was exploratory and is not Batch 4 evidence.
- The shared `batch-dependency-levels.json` check reports `Stale batch dependency levels ...; recompute before authoring` after the batch-4 manifest inventory was populated. That shared derived file is left untouched for the owner to refresh. Its declared Batch 4 page dependency level remains 2 with batch 2 as its prerequisite; the batch has no cycle.
- Source fetch stamps and check both passed: 3/3 sources fetched and resolved, 0 retries, 0 drops. The source records identify the complete texts inspected and item-level dispositions above.
- Final explicit-item `proof-layout`: 4 items, 13 steps, 0 defects. All four `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-<item>.json` records are `ready` with current hashes and the exact examined dependency sets. They are authoring-readiness records only; they do not constitute independent approval or publication.
