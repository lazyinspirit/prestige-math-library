# Step 3a reader report — batch 91

Run: `physics-non-fluid-129-2026-10-21-r2`  
Reader: `reader-91`  
Scope: batch `91`

## Review outcome

I independently reviewed the batch 91 manifest, both assigned pages, all eight assigned items, their proof contracts, and the mathematical suppliers needed to check their claims. I made no source edits. No assigned item or page has a confirmed mathematical defect. One nonfatal in-run supplier metadata finding remains outside this batch's write scope; it is listed below and in the findings JSON.

The final argument check followed this supplier-to-consumer order: choice and Fourier conventions; sector connectivity and weak-heat formulation; Fourier heat flow; finite-state generator and its existence result; SSEP definition; fixed and time-dependent martingales; maximal inequality; hydrodynamic limit; Fourier-mode example.

## Opened inventory

### Assigned pages

- `csm-frontier-hydrodynamic-ssep` — `library/classical-statistical-mechanics/csm-frontier-hydrodynamic-ssep.md`, A page. Its draft frontmatter places the seven assigned non-example items and requires `csm-stochastic-response` and `csm-frontier-probability-interfaces`. The empty body matches the compact frontmatter-only page policy.
- `csm-frontier-hydrodynamic-ssep-examples` — `library/classical-statistical-mechanics/csm-frontier-hydrodynamic-ssep-examples.md`, B page. It places the single assigned example, requires the A page, and has an empty body as permitted by the compact page policy.

Both page identities, classifications, item placements, and page dependencies are consistent. The required page `csm-stochastic-response` is published and was opened; `csm-frontier-probability-interfaces` is the draft page in batch 85 and was opened. No page-prose defect was found.

### Assigned items

All listed item files and their bodies were opened:

1. `lem-csm-frontier-ssep-sector-connectivity`
2. `def-csm-frontier-ssep-weak-heat-solution`
3. `lem-csm-frontier-ssep-heat-flow`
4. `def-csm-frontier-ssep-diffusive-model`
5. `lem-csm-frontier-ssep-bracket`
6. `lem-csm-frontier-ssep-time-dependent-martingale`
7. `thm-csm-frontier-ssep-heat-limit`
8. `ex-csm-frontier-ssep-density-mode`

I also opened `research/physics-non-fluid-129-2026-10-21-r2-batch-91.proof-contracts.json` and checked its supplier excerpts, derivation mappings, and boundary records against the current item text. They were treated as review evidence, not as verdicts. The `batch-91.cross-batch-dependencies.json` file was opened and its records were checked against the current supplier content.

### Mathematical suppliers and page context

The following exact supplier items were opened:

- Published choice/Fourier suppliers: `def-axiom-of-choice`, `def-countable-choice`, `def-the-one-dimensional-torus-and-normalized-haar-integral`, `def-fourier-coefficients-and-trigonometric-polynomials`, `lem-trigonometric-characters-are-orthonormal`, and `thm-fourier-basis-and-parseval-on-the-n-torus`.
- Published stochastic-model supplier: `def-csm-dk-finite-reversible-rate-model`.
- Current-run batch 85 suppliers: `def-csm-frontier-finite-generator-chain`, `lem-csm-frontier-finite-generator-chain-existence`, `lem-csm-frontier-finite-chain-martingale`, and `lem-csm-frontier-finite-doob-bound`.
- Mathematical interfaces used to check those supplier proofs: `thm-ionescu-tulcea-construction-of-a-markov-chain`, `thm-dynkin-pi-lambda`, `thm-monotone-convergence-for-the-integral`, `def-continuous-time-adapted-process-and-martingale`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `lem-continuous-finite-variation-martingale-is-zero`, `def-progressively-measurable-and-predictable-process`, `cor-cauchy-schwarz-for-random-variables`, `cor-layer-cake-formulas-for-random-variables`, and `thm-tonelli-theorem-for-sigma-finite-product-spaces`.

I opened the cited Biswal–Lanchier paper, Section 3, Lemmas 5–6, which establishes communication within fixed-particle sectors for their finite connected graph exclusion model. I opened Varadhan's *Hydrodynamic Scaling*, Section 4.3, including Theorem 4.3.1 and its displayed generator calculation. These support the source context; the assigned graph-connectivity, martingale, Fourier heat-flow, and hydrodynamic-limit arguments were checked locally.

The cited Landim PDF at `https://math.arizona.edu/~sethuram/588/Landim.pdf` timed out on direct retrieval. Search indexing confirmed the document identity, but I did not inspect the cited pages in that PDF. I did not rely on that source alone for any conclusion.

## Item verdicts

- `lem-csm-frontier-ssep-sector-connectivity` — pass. The spanning-tree reduction and leaf induction cover all $0\le k\le m$; the two occupancy-change cases use legal edge moves and correctly reduce to the smaller tree.
- `def-csm-frontier-ssep-weak-heat-solution` — pass. It specifies the torus, measure, datum, function classes, tests, continuity condition, and weak identity.
- `lem-csm-frontier-ssep-heat-flow` — pass. The Fourier coefficient decay supports the asserted uniform convergence and termwise differentiation. The duality identity gives the weak equation; the convex truncations establish the bounds, and Fourier coefficients establish uniqueness. The indexed product in the published Fourier-basis proof is consistent with the $0,\ldots,n-1$ product convention in the exact torus definition.
- `def-csm-frontier-ssep-diffusive-model` — pass. The torus graph, state space, rates, row-generator convention, scaling, empirical measure, and discrete Laplacian are explicit. The graph connectivity and finite-chain suppliers support the sector and process claims.
- `lem-csm-frontier-ssep-bracket` — pass. The exchange jump and generator calculations give the stated drift and bracket; the coordinate derivative estimate gives the claimed $TN^{-d}\sum_i\|\partial_iG\|_\infty^2$ bound.
- `lem-csm-frontier-ssep-time-dependent-martingale` — pass. The time-dependent drift calculation, finite-state short-time estimates, squared-jump bracket, predictability argument, and uniform bracket bound are consistent with the stated regularity and suppliers.
- `thm-csm-frontier-ssep-heat-limit` — pass. Backward heat tests give the fixed-time reduction, the centered second-difference error is $O(N^{-2})$, the martingale variance is $O(N^{-d})$, and the fixed-test martingale plus a finite mesh gives the stated uniform-in-time convergence in probability under the explicit initial-profile premise. This is a conditional mathematical result, not an empirical observation.
- `ex-csm-frontier-ssep-density-mode` — pass. The cosine eigenvalue calculation, density range including endpoint cases, and use of the conditional limit theorem are correct.

No assigned item contains a TikZ or tikzcd diagram. No diagram addition is required by these expositions.

## Uneditable finding

`def-csm-frontier-finite-generator-chain` is a draft supplier in batch 85 and is outside this assignment's write scope. Its Definition's final paragraph asserts that every finite rate matrix and initial law admit a uniformized realization and links the existence lemma. The lemma `lem-csm-frontier-finite-generator-chain-existence` depends on this definition and establishes that existence statement. The definition has `deps: []` and no `justified_by` field, so the well-definedness result is not declared through the schema's `justified_by` relation. The assigned consumer reaching this supplier is `def-csm-frontier-ssep-diffusive-model`; it separately lists the existence lemma in `deps`, so this metadata issue does not leave that consumer's existence premise absent. This is nonfatal and requires owner/batch-85 disposition.

Observed current supplier bytes: SHA-256 `12a1668c53a7d4f20d72bb8c4d6a05b638509f11524f62054a44d1e54f625a2b`.

## Page verdicts

- `csm-frontier-hydrodynamic-ssep` — pass on the page carrier and prose (frontmatter-only). Its dependency closure includes the batch 85 metadata finding above through `def-csm-frontier-ssep-diffusive-model`.
- `csm-frontier-hydrodynamic-ssep-examples` — pass on the page carrier and prose (frontmatter-only).

## Edits and blockers

- Edits: none. No assigned defect was confirmed, so no contracts, judge records, or item bodies were changed and no repair-only formatter or precheck was run.
- Blocker: none. The Landim retrieval limitation is recorded above; the local proof was checked directly, and Varadhan's source was available for the main hydrodynamic reference.
