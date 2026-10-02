# Step 3a scope repair potential — logarithmic potential and Riesz decomposition

## Finding and repair

The held Step 3a review identified a real design-harvest obligation: the binding source assignment at `research/plan-complex-analysis-track.md` L4717–4719 sends Saff §1, “Transfinite diameter, logarithmic capacity, and Chebyshev constant,” to CA-PT-1 A and polynomial Chebyshev applications to its B page. The initial A inventory stopped at the capacity/transfinite-diameter equality and did not define the Chebyshev constant; the coverage locator stopped at Theorem 1.12, and Example 1.3 was incorrectly deferred to a nonexistent approximation-theory page.

The pair manifest now keeps every original contract and adds four A suppliers plus two B examples. Its current inventory is 23 A contracts, 8 B contracts, 31 total. The updated Saff coverage has 68 named headings/results across four sources. No scope/readiness decision is made in this note.

## Source verification

On 2026-09-30 I fetched the complete 36-page arXiv PDF of E. B. Saff, *Logarithmic Potential Theory with Applications to Approximation Theory*, `https://arxiv.org/pdf/1010.3760`. SHA-256: `cfbeaad8cf695fc1b5528fd56295d7e3053056634c6841765a434ce9b074d862`. I checked PDF page labels and extracted/read the complete printed pp. 175–178 with PyMuPDF. This covered Proposition 1.13, the monic-polynomial extremal problem and Chebyshev-constant definition, Lemma 1.14, Examples 1.15–1.17, and the complete proof of Theorem 1.18(a)–(d). The record describes this targeted reread; it does not claim a new full-paper reread.

## Added proof route and contracts

The A additions are ordered so each supplier precedes its consumers:

1. `prop-reciprocity-inequality-for-logarithmic-potential` states Saff Proposition 1.13 for a compactly supported probability measure. Its proof exchanges the two logarithmic-kernel integrals by Tonelli after a finite lower-bound shift, uses the equilibrium measure's support on K, and then Frostman's everywhere upper bound.
2. `def-chebyshev-constant-compact-set` defines
   `t_n(K)=inf{‖p‖_K : p monic of degree n}` and
   `cheb(K)=inf_n t_n(K)^(1/n)`. Best-polynomial existence and uniqueness are not claimed.
3. `lem-chebyshev-constant-is-submultiplicative-root-limit` proves `t_(m+n)≤t_m t_n` by multiplying near-minimizers and proves the root-limit formula. It handles a zero term separately; in the positive case, division `n=qk+r` bounds `t_n` by a fixed multiple of `t_k^q`, and the published nth-root/limsup facts give the limit. The proof is local and does not depend on the published `lem-submultiplicative-root-limit` from the Banach-algebra page.
4. `lem-monic-polynomial-capacity-lower-bound` includes Saff Lemma 1.14, `‖p‖_K≥cheb(K)^n`, directly from the definition and the submultiplicative root-limit result. It also proves `‖p‖_K≥cap(K)^n` by factoring p, using its normalized zero-counting measure in Proposition 1.13, and rewriting the resulting potential inequality. This supplies `cap(K)≤cheb(K)`.

The existing `def-fekete-points-and-transfinite-diameter` now defines the associated monic polynomial `F_n(z)=∏_j(z−z_j)`. The existing `thm-logarithmic-capacity-equals-transfinite-diameter` now covers Saff Theorem 1.18(a)–(d): `cap(K)=τ(K)=cheb(K)`; asymptotic Chebyshev optimality of Fekete polynomials; the existing weak convergence of Fekete empirical measures; and

`|F_n(z)|^(1/n) → exp(−U^{μ_K}(z))`

uniformly on each compact subset of `C\K` when `cap(K)>0`.

The equality proof retains the existing complete `cap=τ` and weak-convergence route. For `τ≥cheb`, append an arbitrary point to an n-point Fekete tuple to get

`‖F_n‖_K^(1/n) ≤ √(δ_(n+1)(K) δ_n(K))`,

then use Lemma 1.14 for the lower bound and `δ_n↓τ`. For `cheb≥cap`, the capacity lower bound gives `t_n(K)≥cap(K)^n`. These inequalities squeeze the Fekete-polynomial norms to the common limit. Finite K is handled separately, where all three constants are zero. For Theorem 1.18(d), weak convergence of the empirical measures and uniform continuity of `log(1/|z−w|)` on `L×K`, for compact `L⊂C\K`, give uniform convergence of potentials by a finite-net argument. Exponentiating the zero-counting-measure identity gives the stated limit on the whole complement, not only its unbounded component.

The B additions are:

- `ex-chebyshev-extremal-polynomials-and-capacity`: `t_n=R^n` on a radius-R disk, `t_n=2^(1−n)` on `[-1,1]`, the matching capacities, the exact roots-of-unity Fekete tuple on the unit disk with `F_n=z^n−1`, its weak limit, and its asymptotic Chebyshev norm. The disk lower bound uses Cauchy's derivative inequality; the interval lower bound uses the published monic minimax theorem after taking real parts. For the new exact Fekete claim, the example proves Hadamard locally from published Gram–Schmidt and determinant facts: dependent columns give determinant zero; otherwise Gram–Schmidt gives `A=QR`, Pythagoras bounds each residual norm, `|det Q|=1`, and the triangular determinant is the diagonal product. Every unit-disk Vandermonde column has norm at most `√n`. The roots-of-unity Fourier columns are orthogonal by the finite geometric-sum identity and each has norm `√n`, giving equality `|det A|=n^(n/2)`. The Fekete theorem gives their weak limit, and the disk example identifies the limiting measure.
- `ex-chebyshev-extremal-nodes-and-arcsine-measure`: Chebyshev nodes `cos(kπ/n)` are alternating extrema and their empirical probability measures converge to the interval's arcsine equilibrium measure by Riemann sums under `x=cos θ`.

The coverage JSON now has source entries for Proposition 1.13, the Chebyshev definition, Lemma 1.14, Examples 1.15–1.17, and Theorem 1.18(a)–(d). Its Saff locator reaches printed p. 178. Examples 1.3, 1.4 and 1.17 are now explicitly included in the B node/polynomial examples; the previous invented approximation-theory destination is removed.

## Exact shared-plan edits for owner integration

No shared plan file was edited. The owner should make these exact changes in `research/plan-complex-analysis-track.md`:

- In the CA-PT-1 A table (around L3646–3663), add, after `thm-frostman-equilibrium-theorem` and before the Fekete/transfinite equality, these four rows in order: `prop-reciprocity-inequality-for-logarithmic-potential`; `def-chebyshev-constant-compact-set`; `lem-chebyshev-constant-is-submultiplicative-root-limit`; `lem-monic-polynomial-capacity-lower-bound`.
- Update the existing Fekete-definition row to define its associated monic polynomial `F_n`.
- Update `thm-logarithmic-capacity-equals-transfinite-diameter` to state `cap=τ=cheb`, Fekete-polynomial asymptotic optimality, preserve empirical-measure weak convergence, and include the locally uniform exterior limit on compact subsets of `C\K`.
- Add `ex-chebyshev-extremal-polynomials-and-capacity` and `ex-chebyshev-extremal-nodes-and-arcsine-measure`, in that order after the existing disk/interval companion entry near L3664–3666.
- Add those same B identifiers, in the same order, to the binding CA-PT-1 B list near L5763–5768.
- Keep the source-harvest sentence at L4717–4719: its existing placement of polynomial Chebyshev applications on B is now fulfilled. The erroneous coverage deferral has been corrected in the batch coverage file; it does not justify creating or naming a future approximation-theory home.

No additional page prerequisite is proposed. In particular, do not add `banach-algebras-spectrum-and-holomorphic-functional-calculus`: the local submultiplicative root-limit proof removes the only use of its published lemma.

## Dependency, labels, and limits

The direct dependencies resolve to published library items or same-batch suppliers. A fresh audit of the full run DAG found 802 items across 60 pages; batch 24 has 121 direct edges to published items and 74 edges to same-batch suppliers, with no missing targets and no direct cross-batch edges. The batch’s cross-batch dependency file remains `[]`. `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` passes with a maximum level of 31. The exact disk Fekete example has dependency level 7. There is no remaining batch-24 dependency on `lem-submultiplicative-root-limit` and therefore no Banach-algebra page prerequisite. Generated inventories consume live manifests, so Step 3b can see these suppliers without editing another batch.

The exact disk Fekete-tuple claim from Saff Examples 1.4 and 1.17 is now proved in the B example by the local Hadamard bound and Fourier-column equality, using the published Gram–Schmidt, Pythagoras and determinant contracts. The corresponding coverage entries are included without a caveat.

No readiness receipts, scope decisions, engine transitions, or dispatches were made by this worker. The owner should reconcile the plan and certify the stable run artifacts after the repair writers finish.

## Final verification

After adding the exact disk Fekete proof, correcting its in-run dependency label to 7, and confirming the JSON-decoded TeX contains one literal backslash per command, I reran the requested gates:

- `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` — `802 item(s) checked across 60 page(s); maximum level 31`.
- `node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-24.coverage.json --require-destination` — `1 page(s), 68 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-37-owner-30-batch-24.pages.json` — `31 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-*.pages.json` — `802 item(s), 0 normalized, 0 error(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-37-owner-30-batch-24.coverage.json` — all 4/4 sources fetch-verified and resolved, with 0 documented drops.

The exact disk Fekete dependency audit covered the full run DAG, including published page inventories and item files: 121 published edges and 74 same-batch edges for batch 24, 0 cross-batch edges, and 0 unresolved dependencies. No substantive proof or source uncertainty remains in this repaired scope; these checks do not make a Step 3a readiness decision.
