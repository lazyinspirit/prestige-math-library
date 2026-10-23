# Batch 34 authoring notes — `fd-st03`

Run: `fluid-dynamics-all-47-2026-10-23`  
Scope: A/B pair `fd-st03` / `fd-st03-examples` only.

## Controlling design and plan comparison

- Re-read the current owner direction before authoring. It controls older research and releases only the operational `/tmp` hold.
- The controlling design is `research/plan-fluid-dynamics-refresh-track.md` § “Dependent profile resampling and observation inference” (lines 1127–1150). It assigns A `fd-st03` and B `fd-st03-examples`, order 673/674, category `fluid-dynamics-mathematics`, library `mathematics`, A page requirements `block-bootstrap-for-dependent-data` and `hilbert-valued-clt-for-weakly-dependent-functional-time-series`, and the successor inventory `def-fd-fluid-profile-bootstrap-interface`, `prop-fd-profile-functional-bootstrap`, and `ex-fd-constant-profile-bootstrap`.
- The matching `research/plan-spec.json` rows agree on page IDs, titles, order, category, library, companion links, and the A/B page requirements. Both plan rows currently have empty `items` arrays, which are pre-authoring placeholders; I am populating them from the controlling design. No shared plan is changed.
- The design's earlier research inventory at `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json` has the same three item IDs and most direct suppliers. Its profile interface omitted the affine (L^2) normalization argument needed by the design's Jacobian/unit warning; a local A-page isometry lemma will supply it. Its functional-bootstrap proposition omits an explicit Axiom of Choice edge although the inspected published MBB theorem assumes AC; current `SCHEMA.md` requires that axiom to be stated, directly depended on, and carried to consumers. I am adding `def-axiom-of-choice` to the proposition and example. These additions preserve the design's claim scope.
- `research/fluid-dynamics-all-47-2026-10-23-batch-dependency-levels.json` records batch 34 at level 0 with no in-run batch suppliers. The two required published pages are recorded as verified page edges in the cross-dependency array; the item edges are local to this A/B pair.

## Inspected supplier interfaces and readiness

- The pinned published supplier page `library/bayesian-computational-statistics/block-bootstrap-for-dependent-data.md` has SHA-256 `63d64470bb388561ee435bb2e2370de643450d1d340b10353da6cdcc2a6b5f64`, matching `research/math-imports.json`. Its exact relevant inputs are `alg-moving-block-bootstrap` and `thm-moving-block-bootstrap-clt-for-dependent-data`.
- The pinned published supplier page `library/mathematical-statistics/hilbert-valued-clt-for-weakly-dependent-functional-time-series.md` has SHA-256 `3c7c4ff9df4c885abe77fa46a7370c00b2b38728d3fc519a4838aa201ee5e3be`, matching `research/math-imports.json`. Its exact relevant input is `thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts`.
- Read the complete current local imported carrier and proof for `thm-moving-block-bootstrap-clt-for-dependent-data`. Its actual hypotheses are AC; (H=L^2([0,1])); a centered causal Bernoulli shift with (sum_{m\ge1}(E\|X_0-X_{0,m}\|_H^2)^{1/2}<\infty); and integer (b_n\to\infty), (b_n/\sqrt n\to0), applied on the admissible tail. It derives the paper's (m\delta_m\to0) condition using the local independent-tail lemma, centers by the actual conditional expectation, and proves the covariance limit in Hilbert–Schmidt norm for a possible final partial block. This is narrower than generic mixing and supports only the stated sample-mean bootstrap.
- Read the complete current local proof of `thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts`. It is a Hilbert-valued sample-sum CLT and defines the centered Gaussian limit and long-run covariance; it is not a time-indexed functional CLT. The interface and proposition retain this distinction.
- Read the exact definitions in `def-l2-m-approximable-causal-bernoulli-shift` and `alg-moving-block-bootstrap`; the replacement coupling and finite-block sampling/conditional-center conventions are carried forward. All six item carriers above have byte-identical local snapshots and root originals; the two supplier page hashes match their import pins.
- Current readiness was queried with `loadStep1Record` and `step1Decision`. The imported items/pages are outside this run, so these run-local queries return “Readiness record missing” for them; that is not a Step-1 prerequisite gap. Their actual current pages are published and pinned, and their complete inspected item statements/proofs provide the exact interfaces used. No supplier escalation is warranted.

## Source reading record

The full-text sources and locators, supported items, harvested-result dispositions, and mechanical retrieval stamps are recorded in `research/fluid-dynamics-all-47-2026-10-23-batch-34.coverage.json`. The planned A-page treatments are the Hilbert-valued MBB paper, the functional sample-mean CLT paper, the book treatment of block bootstrap, and the real-analysis lecture notes for the affine coordinate map. Their scope limits are recorded per source; no measured data or precision are introduced.

## Item checkpoints

### Completed item — `lem-fd-profile-affine-coordinate-isometry`

- Claim/convention: for \(I=(a,a+\ell)\), \(\ell>0\), the map \(q\mapsto\sqrt\ell\,q(a+\ell\xi)\) is a well-defined linear isometric bijection from real \(L^2(I,dz)\) to real \(L^2((0,1),d\xi)\); the inverse is explicit. The proof applies the measurable \(C^1\) change-of-variables formula to null sets and \(|q|^2\), checking the quotient and norm separately.
- Exact suppliers: `def-countable-choice`, `def-l-p-space-as-a-quotient-by-null-functions`, and `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`; all are mathematical. The COV statement's Countable Choice hypothesis is explicit.
- Source: Ohio State Math 6212 Real Analysis II, Theorem 137 and proof, pp. 49–51, https://people.math.osu.edu/costin.9/6211-2018/C.pdf. The complete current published change-of-variables supplier proof was also read. Coverage contains its retrieval stamp; the final check confirms all four sources fetch-verified.
- Item level: 0 (all suppliers are outside this run).
- Item proof carrier complete. The contract records its three proof steps, exact supplier excerpts, and all eight boundary cases.

### Completed item — `def-fd-fluid-profile-bootstrap-interface`

- Claim/convention: \(H=L^2([0,1],\mathcal B,\lambda;\mathbb R)\); an underlying probability space and Bochner mean integral are explicit; the causal shift has the exact independent-tail replacement coupling and summability condition; MBB has uniform starts, ordered blocks, exact-\(n\) truncation, and its actual conditional center; scalar summaries use bounded real-linear \(L:H\to\mathbb R\). Physical profiles on \(z\in(a,a+\ell)\) use \(X(\xi)=\sqrt{\ell}\,q(a+\ell\xi)\), with \(dz=\ell\,d\xi\) and units stated. The definition asserts no bootstrap validity or measurement-error removal.
- Direct suppliers: `lem-fd-profile-affine-coordinate-isometry`, `def-l2-m-approximable-causal-bernoulli-shift`, `alg-moving-block-bootstrap`, `def-countable-choice`, `def-dependent-choice`, and `def-bochner-integrable-function`; these are explicit mathematical dependencies. The definition states the sample space, Bochner mean, product extension, and replacement law.
- Item level: 1, one above the local normalization lemma (external direct suppliers are level 0).
- Item carrier complete. Its definition contract contains all eight boundary dispositions and no proof steps. Current manifest text and dependency metadata match the authored carrier.

### Completed item — `prop-fd-profile-functional-bootstrap`

- Claim: for every bounded real-linear \(L:H\to\mathbb R\), the conditional law of \(\sqrt n L(\bar X_n^*-\mathbb E^*\bar X_n^*)\) converges in probability to \(\mathcal L(LG)\). Its conditional variance converges to \(L\Gamma L^*\), with the exact bound \(\|L\|^2\|n\operatorname{Cov}^*(\bar X_n^*)-\Gamma\|_{\mathrm{HS}}\). Assumptions remain AC, centered causal \(L^2\)-\(m\)-approximability, and \(b_n\to\infty,\ b_n/\sqrt n\to0\); the state spaces are separable complete; nonlinear functionals and finite-replicate quantile error are excluded.
- Direct suppliers: the local interface and `def-l2-m-approximable-causal-bernoulli-shift`; `thm-moving-block-bootstrap-clt-for-dependent-data` and `thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts`; AC; conditional weak convergence and weak-law topology; Riesz representation; separable-Hilbert basis; and Hilbert–Schmidt definition, basis independence, and ideal theorem. All are mathematical.
- Item level: 2, one above the local interface (all other suppliers are outside this run).
- Item proof carrier complete. The contract records both proof steps, their inputs, exact supplier excerpts, and all eight boundary cases.

### Completed item — `ex-fd-constant-profile-bootstrap`

- Claim/convention: a centered scalar causal Bernoulli shift with finite second moment and summable independent-tail errors embeds as constant functions in \(H=L^2([0,1])\); the embedding preserves norms and replacement errors, while \(L(v)=\int_0^1v\) has norm one and returns the original scalar observation. The proof constructs finite-valued simple approximants to establish strong measurability, then verifies the Bochner mean and replacement errors before applying the proposition. This is symbolic mathematics, not measured data.
- Direct suppliers: `prop-fd-profile-functional-bootstrap`, `def-l2-m-approximable-causal-bernoulli-shift`, `def-axiom-of-choice`, random-variable Cauchy–Schwarz, the Bochner-integral definition/criterion, inner-product Cauchy–Schwarz, and `def-strongly-measurable-banach-valued-function`; all are mathematical. The verification constructs finite-valued simple approximants before applying the Bochner criterion.
- Item level: 3, one above the proposition (all other suppliers are outside this run).
- Item proof carrier complete. Its contract records the three verification steps, exact supplier excerpts, inputs, and all eight boundary cases.

## Final validation and readiness

- The four item carriers are complete and placed on the A/B pair. Their dependency levels are 0 (`lem-fd-profile-affine-coordinate-isometry`), 1 (`def-fd-fluid-profile-bootstrap-interface`), 2 (`prop-fd-profile-functional-bootstrap`), and 3 (`ex-fd-constant-profile-bootstrap`). The scoped item graph has no cycle or level mismatch.
- `research/fluid-dynamics-all-47-2026-10-23-batch-34.pages.json` contains three A items and one B example in the run manifest's `items` inventory, with exact current statements, dependencies, roles, source metadata, and levels. The YAML-only A/B pages have empty bodies and matching inventories. `manifest-integrity.mjs --run fluid-dynamics-all-47-2026-10-23 --json` reports 94/94 owed, no missing or added entries.
- `proof-contract.mjs research/fluid-dynamics-all-47-2026-10-23-batch-34.proof-contracts.json --strict`: 4/4 items checked, 0 errors, 0 warnings. `proof-layout.mjs` on the four changed items: 4 items, 8 proof steps, 0 defects.
- `source-fetch-check.mjs --coverage research/fluid-dynamics-all-47-2026-10-23-batch-34.coverage.json --stamp`: 4/4 sources fetch-verified and resolved; 0 newly stamped on the final check. Coverage retains retrieval stamps, supported-item locators, dispositions, and source-scope limits. The long PPS appendix is not claimed as independently reconstructed line by line; the complete current local bootstrap theorem proof used by the proposition was read in full.
- `research/fluid-dynamics-all-47-2026-10-23-batch-34.cross-batch-dependencies.json` is a JSON array with two verified page edges, one for each pinned published prerequisite. Their page hashes match `research/math-imports.json`; the relevant item statements/proofs and consuming assumptions were compared. `verified` records the scoped interface check, not independent approval.
- The run-wide `item-dependency-levels.mjs check` still reports other batches' empty scaffold inventories and stale levels; it reports no error for these four items. The run-wide `batch-dependency-levels.mjs check` reports a stale input hash after current manifest authoring. The recomputed row for batch 34 is unchanged at level 0 with `requires: []`; the shared scheduling file was not rewritten.
- `node tools/physics-support/step1-decisions.mjs record` wrote four `ready` records with `owner: false` and the direct examined dependencies. A final `loadStep1Record`/`step1Decision` check reports all four closed and hash-current. These records attest completed Step-1 authoring readiness; later review gates still determine independent acceptance.
