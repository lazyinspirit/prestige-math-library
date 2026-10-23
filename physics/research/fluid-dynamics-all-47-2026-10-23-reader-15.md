# Reader report — fluid dynamics batch 15

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Batch: `15`

## Opened inventory

Assigned pages:

- `library/fluid-dynamics-mathematics/fd-mf04.md`
- `library/fluid-dynamics-mathematics/fd-mf04-examples.md`

Assigned items, reviewed with their suppliers:

- `items/def-fd-nonnewtonian-laws.md`
- `items/lem-fd-generalized-newtonian-dissipation.md`
- `items/lem-fd-bingham-monotone-graph.md`
- `items/lem-fd-conformation-storage.md`
- `items/ex-fdmath-bingham-zero-rate-stress.md`

The direct mathematical dependencies opened were `def-fd-smooth-motion`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-determinant-multiplicative`, `lem-fd-observer-calculus`, `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`, `prop-a-fundamental-matrix-is-invertible`, `thm-derivative-of-matrix-inversion`, `thm-chain-rule-for-total-derivatives`, `thm-algebra-of-derivatives`, `thm-determinant-differential-and-jacobis-formula`, `thm-logarithm-derivative-and-integral`, `thm-integral-logarithm-product-law`, `lem-cm-positive-definite-matrix-square-roots`, `thm-derivative-of-exponential`, and `cor-exponential-reciprocal-and-positivity`. The real-power repair uses the published read-only suppliers `def-real-power`, `thm-real-power-continuity-and-derivatives`, `thm-real-power-laws`, `cor-mean-value-theorem`, and `cor-exponential-reciprocal-and-positivity`.

Further exact targets opened to check logarithm, Euclidean, and motion definitions were `def-natural-logarithm`, `def-integral-logarithm`, `def-oriented-integral`, `thm-integral-logarithm-derivative-and-normalisation`, `thm-integral-logarithm-product-law`, `thm-algebra-of-continuous-functions`, `thm-continuous-implies-integrable`, `cor-integral-logarithm-agrees-with-natural-logarithm`, `def-euclidean-inner-product`, `thm-euclidean-inverse-function-theorem`, and `thm-exponential-limits-and-range`. `research/math-imports.json` was checked for the read-only real-power suppliers.

For the edited Definition's consumer review, I also opened the current batch-16 chain: `def-fd-adopted-nonnewtonian-models`, `pthm-fd-nonnewtonian-conditional-admissibility`, `ex-fd-bingham-rest-stress`, and pages `fd-f04` and `fd-f04-examples`. Those consumers remain consistent with the clarified positive-base power convention; none was edited.

## Review findings and edits

### `def-fd-nonnewtonian-laws`

The Carreau and power-law formulas use arbitrary real exponents on positive bases. The Definition previously supplied no operation for that notation. I added the convention $a^r=\exp(r\log_{\mathrm{nat}}a)$ for $a>0$ and $r\in\mathbb R$, clarified that powers of dimensional quantities use their numerical SI values with units carried separately, and added the published mathematical dependency `def-real-power`. The integral logarithm in the conformation branch remains separately defined.

Evidence: `def-real-power` states the positive-base definition $a^x=\exp(x\log a)$, with its logarithm the natural logarithm. The locally used integral logarithm has its own explicit definition. The power domains in the Carreau and regularized formulas are positive; the unregularized formula is restricted to positive shear rate.

### `lem-fd-generalized-newtonian-dissipation`

The proof's finite-power, monotonicity, and endpoint-limit claims used unstated real-power facts. I added the exact power-definition, derivative, power-law, mean-value, and exponential-positivity suppliers to `deps` and `Facts & Assumptions`. The proof now derives the sign monotonicity from the derivative and mean value theorem, and gives threshold arguments for $x^p\to\infty$, $x^{-p}\to0$, and the zero-rate limits. The dissipation identity, Carreau cases, and observer covariance then follow under the stated assumptions.

### Other assigned items

- `lem-fd-bingham-monotone-graph`: the potential is convex, its subdifferential equals the stated graph at nonzero and zero strain rate, and the monotonicity, power, and rotation-equivariance deductions are sound.
- `lem-fd-conformation-storage`: the continuous-coefficient fundamental matrix exists on the compact interval and is invertible; the transformed conformation formula gives a positive-definite forward solution; the spectral and logarithm steps establish nonnegative storage and the stated dissipation identity. The observer covariance and units are consistent. Its published dependencies `thm-algebra-of-derivatives` and `lem-cm-positive-definite-matrix-square-roots` have the statement-format defects listed below.
- `ex-fdmath-bingham-zero-rate-stress`: the displayed nonzero diagonal tensor is trace-free and has norm exactly $\tau_y$, so the example verifies membership in the zero-rate Bingham ball.

The changed items' current proof contracts were updated in `research/fluid-dynamics-all-47-2026-10-23-batch-15.proof-contracts.json`. Neither changed item had a `verification.judge` record to remove. The changed Definition's direct and indirect consumers in batch 15 and the inspected batch-16 consumer chain were checked; no consumer repair was needed. No TikZ or tikzcd diagrams occur in the assigned items.

The cited fluid-model sources support model context, not empirical validity or these local proofs: [Reddy, Chapter 6, §§6.6.2.1–6.6.2.3](https://courses.washington.edu/mengr503/Chapter_6.pdf) gives the power-law, Carreau, and Bingham forms; [Mei, MIT OCW §1.6.2, equations (1.6.13)–(1.6.18)](https://ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/0c5e315f2b97fff948cb35f10a97894c_16stressstrain.pdf) treats Bingham yield and invariant conventions; [Barrett and Boyaval, §1.1](https://arxiv.org/pdf/0907.4066) states a standard Oldroyd-B model; [Boyaval, Lelièvre, and Mangoubi, §2.1.2, Theorem 2.2 and Lemma 2.1](https://www.numdam.org/item/10.1051/m2an/2009008.pdf) gives a full smooth-PDE energy estimate and conformation positivity result under its own hypotheses. The batch-15 conformation item proves a separate trajectory-level ODE claim and does not import the PDE result. No assigned item reports an experiment or statistical observation.

## Page verdicts

- `fd-mf04`: no page body, summary, or inventory defect found. Its Definition repair adds `def-real-power`, whose canonical home is `the-logarithm-and-general-powers`; the native dependency disclosure should compute this from the item edge. The page retains `page_layout: compact-v1`; I did not manually edit its frontmatter.
- `fd-mf04-examples`: no page defect found. Its frontmatter lists the assigned example under `examples`, requires `fd-mf04`, retains `page_layout: compact-v1`, and has no Markdown body or summary.

## Defects not editable in this assignment

All findings below are published mathematical dependencies of `lem-fd-conformation-storage`, so they remain unchanged for owner disposition.

- `thm-algebra-of-derivatives`, `## Statement`, lines 62–70: the sentence inserts “the last claim of If … then … there applied to $g$” into prose and then runs together theorem-title text, making the published Statement ill-formed.
- `lem-cm-positive-definite-matrix-square-roots`, `## Statement`, line 37: the Statement contains `[[def-euclidean-inner-product]]` inline and has no immediately following `## Statement references` section.
- `def-integral-logarithm`, `## Definition`, lines 32–41: wikilinks to the oriented integral and integrability suppliers interrupt the Definition; there is no immediately following `## Definition references` section.
- `def-oriented-integral`, `## Definition`, lines 36–54: wikilinks to the Darboux integral, partitions, interval, and boundedness definitions interrupt the Definition; there is no immediately following `## Definition references` section.
- `def-euclidean-inner-product`, `## Definition`, lines 39–43: phrases such as “is the function space of The vector space” and “the same set that … calls” merge item-title text into the definition and leave it ill-formed.

## Validation and blocker

`reflow.mts` reported both changed items unchanged. `precheck.mts` reported 0 failures for the Definition and a pass for the lemma. The final `node tools/physics-support/proof-layout.mjs items/def-fd-nonnewtonian-laws.md items/lem-fd-generalized-newtonian-dissipation.md` run reported 2 items, 5 proof steps, and 0 defects. No blocker remains within batch 15.

## Coverage limit

This review covers the assigned pages and items, the direct mathematics needed to verify their claims, the exact upstream definitions opened for the logarithm and real-power arguments, and the affected current-run consumer chain. It is not a whole-corpus audit of every transitive published mathematical prerequisite; the findings record the published dependency defects observed along the opened paths.
