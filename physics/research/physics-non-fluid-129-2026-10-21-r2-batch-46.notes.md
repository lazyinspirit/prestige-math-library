# Batch 46 authoring and dependency notes

Run: physics-non-fluid-129-2026-10-21-r2; owner: nrqmx-semiclassical-calculus A/B pair only.

## Plan reconciliation

The assigned frontier design is the controlling source. Its detailed section specifies the five principal A items (Weyl/Wigner definition, Wigner marginals, Schwartz Moyal remainder, order-zero bounded-symbol estimate, and quadratic/nonquadratic Egorov result) and the two B examples (Gaussian Wigner flow and a negative-Wigner counterexample). research/plan-spec.json lists the two page shells but leaves their items arrays empty. This is an inventory materialization omission, not a conflicting statement or prerequisite; the detailed design was followed.

The dependency-level map assigns this pair batch level 0 with no in-run pair suppliers. The authored local item levels are: definition 0; scaled Plancherel 1; Wigner marginals 1; Hilbert–Schmidt kernel and bounded-symbol estimate 2; Schwartz Moyal and cubic commutator remainders 3; Egorov 4; negative-Wigner counterexample 2; Gaussian flow example 5. All levels count only in-run suppliers.

Three A-page support items were necessary before the planned consumers: lem-nrqmx-scaled-plancherel proves the epsilon-scaled transform is unitary from the standard transform plus the exact dilation Jacobian; lem-nrqmx-weyl-hilbert-schmidt-bound records the exact kernel estimate while explicitly warning that its epsilon dependence is not uniform; and lem-nrqmx-cubic-moyal-commutator-remainder supplies the unbounded-potential Taylor remainder.

A design dependency was repaired locally rather than used outside its hypotheses. The Schwartz Moyal theorem assumes both symbols lie in Schwartz space, so its statement cannot be applied directly with h(x,xi)=|xi|^2/2+V(x), which is generally unbounded and not Schwartz. The Egorov proof therefore depends on the separate cubic commutator lemma, whose proof treats the kinetic and potential kernels directly, and on the order-zero bound. It does not cite the Schwartz Moyal theorem for the unbounded Hamiltonian.

The common-domain evolution supplier requires a self-adjoint generator on a common graph domain. The Egorov statement makes this operator input explicit: H_epsilon is a self-adjoint extension of the differential expression and Schwartz space is a core. The local proof is conditional on that stated premise and does not claim to derive self-adjointness for every potential in the displayed smoothness class. The oscillator example verifies the premise directly from the published oscillator realization and its Hermite core. If the owner intends the nonquadratic result to include a proof of operator realization for every such V, that is a separate substantial theorem and should be placed on this A page before Egorov; it is not silently inferred from the abstract dynamics page.

## Interfaces and conventions checked

The local Weyl kernel is (2 pi epsilon)^(-d) integral exp(i(x-y) dot xi / epsilon) a((x+y)/2,xi) dxi; F_epsilon is the negative-sign transform (2 pi epsilon)^(-d/2) integral exp(-i x dot xi / epsilon) u(x) dx; the inner product is linear in its first argument. The coordinate operators Q_j u=x_j u, P_j u=-i epsilon partial_j u satisfy [Q_j,P_k]=i epsilon delta_jk I. The page Poisson convention is {a,b}=nabla_x a dot nabla_xi b-nabla_xi a dot nabla_x b, fixing the plus sign in the first Moyal correction and the Heisenberg/Egorov orientation.

The standard Plancherel supplier uses the negative-sign 2 pi transform; the local scaled-Plancherel lemma composes it with the unitary dilation of factor 2 pi epsilon using the complete C1 change-of-variables supplier. Fourier inversion and Fourier preservation of Schwartz space use their current exact imported statements. Gaussian Fourier normalization and Countable Choice conditions were checked against the actual imported suppliers. The common-domain dynamics item is used only for its stated self-adjoint common-domain strong propagator. The Hamiltonian flow is global because the bounded Hessian makes nabla V globally Lipschitz; smooth finite-time support and symbol-seminorm bounds are established locally.

All items are mathematics, with mathematical prerequisites only. No experimental, statistical, or measured claim is made. The page contains 8 A items and 2 B examples, below the 100-item cap.

## Source retrieval and disposition

The full Nonnenmacher lecture PDF, Evans–Zworski lecture PDF, and Dell’Antonio Volume II PDF were retrieved and inspected at the locators recorded in the coverage file. They supply three independent treatments for the A page, including full lecture texts. Dell’Antonio’s Lemma 1.2 states the marginals but omits their proof; the complete marginal proof is local. Evans–Zworski Theorem 8.2 is an O(epsilon) comparison only and is recorded as out-of-scope for the Weyl O(epsilon^2) claim. Its bounded-symbol and composition treatments are independent comparisons.

The historical source ledger records HTTP 404 retrievals from former Berkeley-hosted Zworski/Evans URLs. Those URLs are not cited as support in this batch. The current alternatives above were found, fetched as full text, and read; no current selected source retrieval failed, so no current source was dropped and no source_resolution drop record was created. source-fetch-check --stamp records the actual current fetch attempts and hashes in coverage.

## Readiness boundary

The proof contracts reflect the finished local arguments and their actual direct dependencies. A ready record means the local Step 1 prerequisite interfaces, page placement and contract exist; it does not mean independent approval or that the conditional self-adjointness premise has been derived from V. That premise is stated in the Egorov theorem itself and is verified for the quadratic oscillator example.

## Final scoped validation

Validation after the final proof and rendering edits:

- `proof-layout.mjs` on all 10 assigned items: 34 proof steps, 0 defects.
- `proof-contract.mjs --strict`: 9 proof-bearing items checked, 0 errors and 0 warnings. Scoped `proof-contract-coverage.mjs`: 10 inventory items, 9/9 supplied arguments covered.
- `rendercheck.mjs` on all 10 item drafts and both pages: 12 files, no delimiter or KaTeX errors. Inline and display math uses the renderer-supported dollar delimiters; each display block occupies one source line.
- `content-policy.mjs` on the assigned manifest: 10 scoped items, 0 errors and 0 warnings. Focused `depcheck.mjs`: selected item/page and prerequisite-cycle checks passed.
- Scoped `item-dependency-levels.mjs` on this batch manifest: 10 items across 2 pages, maximum level 5. The item frontmatter and manifest levels agree. A metadata comparison also confirmed all 10 manifest item records match their current draft metadata; the cross-batch JSON contains exactly 60 direct external item/page edges, each with nonempty evidence.
- `source-fetch-check.mjs` check mode: all 6 selected source records fetch-verified; no current source drop or retrieval failure.

The run-wide `item-dependency-levels.mjs` and `proof-contract-coverage.mjs` checks cannot form a complete run scope because other batches still have empty scaffold inventories (the first coverage error names `emx-paraxial-optics`; the item-level check reports empty inventories across unrelated pages). The batch-wide dependency-level check also reports `Stale batch dependency levels for physics-non-fluid-129-2026-10-21-r2; recompute before authoring` after the populated batch manifest changed. These are owner-managed run artifacts; this batch did not rewrite the shared level map or other batches. The scoped checks above validate this assignment independently.

## Step 1 readiness records

`step1-decisions.mjs record` wrote hash-bound `ready` records for all 10 assigned items in supplier-before-consumer order. A fresh `loadStep1Record` / `step1Decision` pass reports all 10 records current and closed. The records cite each item’s direct dependencies; page prerequisites remain represented by the A/B manifest and cross-batch page rows. These records document authoring readiness only, not independent proof acceptance. The Egorov record retains the explicit self-adjoint extension/core premise described above.
