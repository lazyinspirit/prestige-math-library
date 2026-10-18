# Typed dependencies and same-reviewer consumer continuation

Research instructions for native materialization; no canonical edits or acceptance performed.

## Exact new-item dependency direction

`alg-finite-budget-stable-block-reordering-for-schur-and-qz`:

- `def-real-and-complex-schur-forms`: ordinary input form, real2 discriminant.
- `def-generalized-schur-form`: homogeneous scalar/real2 input form, both factor orientations.
- `def-verified-linear-residual-certificate-data`: optional usable inverse certificate.
- `thm-uniform-linear-residual-solution-enclosure`: optional certified inverse/solve route; exact solving remains explicit.
- `thm-outward-rounded-operations-are-isotone-and-dag-sound`: outward comparisons/margins when used.
- `thm-gram-schmidt-orthonormalisation`: the specified finite local completion and block QR operations.

`justified_by: [thm-finite-budget-stable-block-reordering-correctness-and-status]` may be used. Never reverse that link into the algorithm's deps.

`thm-finite-budget-stable-block-reordering-correctness-and-status`:

- `alg-finite-budget-stable-block-reordering-for-schur-and-qz`.
- `thm-sylvester-unique-solvability-spectral-separation`: ordinary and transformed generalized homogeneous kernel.
- `thm-root-bound-for-polynomials-over-a-domain`: finite zeta choice in the generalized proof.
- `thm-operator-invertible-iff-determinant-nonzero`: finite square injectivity/determinant tests.
- `thm-rank-nullity`: injective square small operator is invertible.
- `thm-gram-schmidt-orthonormalisation`: orthonormal completion.
- `thm-determinant-multiplicative`: strict equivalence preserves homogeneous determinant up to nonzero constant.
- `lem-block-upper-triangular-pencil-determinant-factorizes`: exchange/cancellation proof.
- `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`: residual-norm transport and ||Y||2<=||Y||F.
- `lem-neumann-inverse-norm-bound`: optional approximate inverse margin.

The vectorization identities are proved entrywise here; optionally cite `lem-sylvester-vectorization-isometry-and-kronecker-identity` if using its notation. No dependency on the Riccati extraction, Hamiltonian graph, DARE sensitivity, or Riccati work proposition is necessary, so the supplier is earlier and acyclic. The proof of the ordinary Sylvester theorem already carries its Schur/fundamental-theorem-of-algebra prerequisites; do not repeat those direct edges unless their statements are used independently.

Source provenance for both new statements: `literature-derived`, with actual read URLs `https://www.netlib.org/lapack/double/dlaexc.f` and `https://www.netlib.org/lapack/double/dtgex2.f`. Algorithm proof is `not-applicable`; theorem proof is `ai-altered` with local full proof. Explain that the finite exact-core/controller wrapper and inverse threshold are authored here, not copied LAPACK rounding constants. These established local claims are not `ai-generated` dependency suppliers. Keep draft status and pipeline run. Assign levels from actual prerequisite levels and current page ordering, not from preexisting batch23 level2 shorthand.

## Existing algorithm: full surgical replacement plan

For `alg-finite-budget-schur-qz-riccati-candidate-extraction`, retain title, CARE/DARE matrices, no inverse(A), graph solve, Hermitian symmetrization and actual equation-level diagnostics. Replace its input demand for a verifier-supplied stable-order certificate/ordered basis by finite Schur/QZ sweep controls, the new finite reordering controls (K,W,eta), and outward verifier controls. Remove only the final paragraph asserting the missing routine is absent.

After the unordered reduction actually succeeds, call the new reordering algorithm on its returned arrays. Use CARE half-plane and DARE homogeneous disk selector with r=n. Propagate `invalid-form`, boundary, selected-dimension, inverse-separation, primitive/range and swap/work-budget failures explicitly; statuses must not be renamed success. When reordering returns `ordered`, use first n columns of the accumulated ordinary factor for CARE or **right** accumulated QZ factor for DARE, including the new local product factors. Never substitute the QZ left factor. Carry original reduction residuals and the theorem's exact residual transport. Keep certificate inconclusive if an original residual certificate was unavailable. Check finite verified invertibility and its bound for U1, solve X0 U1=U2 without explicit inverse, and preserve all existing acceptance diagnostics and independent closed-loop checks. A reordering certificate certifies selected spectrum of the computed represented form; acceptance for original equation data still requires the original diagnostics and the corresponding CARE/DARE local residual-root/stability certificates. The exact algebraic output representation is part of the algorithm contract, with any rounded basis evaluation separately bounded.

Add direct deps on both new IDs. Retain the actual underlying Francis/QZ and residual verification suppliers. Remove `thm-generalized-schur-form-exists-for-regular-pencil` only if inspection shows it no longer directly proves anything in the rewritten procedure; mathematical existence is not execution of ordering. This is not a reason to replace the concrete new procedure by existence. Mirror current dependency/statement changes in batch23 manifest, proof contract, cross-batch dependency ledger, coverage, A-page item ordering, notes and readiness, using actual post-write sources. Re-read sibling PBH and DARE graph packets in the single continuation so no concurrent author overwrite occurs.

## Work-count consumer

`prop-riccati-dense-work-and-acceptance-diagnostics` is the only current direct item consumer of extraction. No current item consumes this work proposition. A structural traversal of all current run `batch-*.pages.json` deps/justified_by rows, and canonical text search across items/library, found exactly these two existing carriers in this closure at inspection. The A-page lists both; its placement/description and batch23 sidecars are affected. Recompute this narrowly after the live original writer drains, since this observation is not a frozen frontier claim.

Add both new IDs to work proposition dependencies and a fact naming actual bounded adjacent graph swaps and exact residual transport. Preserve O(d^3+s*d^2) unordered reduction core. Add the explicit reordering term O(d^2+k*d), k actual attempts; selected/nonselected inversion bound makes worst-case core O(d^3). For Riccati d=2n, reduction plus exact reordering plus graph solve is still O(n^3+s*n^2) in the specified scalar model. Add exact-algebraic/controller/enclosure/evaluated-factor and residual-action costs separately; do not claim this as a floating-point implementation flop bound or a bit-complexity theorem. The supplied stored dense factor, if used, is updated in constant-width panels; a product must be evaluated by its actual action count. Do not multiply full dense matrices separately for every swap.

The existing Bartels–Stewart cubic claim is justified by its **actual** admitted bounds N_A<=c0*m and N_B<=c0*n and fixed bounded-controller branch. State this in the Facts/assumptions and replace the vague step2 assertion “two dense Schur reductions, each O(n^3) by step1.1” with: its actual supplier imposes O(n) sweep budgets, so step1.1 yields O(n^3); exact factor certificate checking, transformations and block substitution are also O(n^3). Keep arbitrary terminating controller cost separate, as its algorithm explicitly requires. Retain O(J*n^3+J*(n^2*m+n*m^2)) for this cubic branch and charge R factorization once. If a different Schur policy is used, add its actual sweep totals instead of importing unconditional convergence. Preserve SDA count and every original CARE/DARE acceptance warning. The exact reordering does not improve structural backward errors.

## Small elimination proof detail for native theorem

Expand PROOF step1 by the following when rendering phase proofs: at a nonzero Gaussian pivot, row/column permutations are invertible coordinate changes, and subtracting a multiple of the pivot row is invertible with its opposite addition as inverse. Hence each elimination stage preserves the solution set under its recorded variable permutation. The block after eliminating the first j variables is a Schur complement; if an invertible square H had an all-zero remaining block before j reaches its dimension, the transformed full matrix would have deficient rank, a contradiction. Back-substitution then determines every variable uniquely. Apply the same operations to h and each standard basis column to obtain x and Y. Independent exact identity checks guard implementation; a positive unresolved pivot is never guessed zero. Local order<=8 makes its arithmetic cost constant, with bit/certification cost separate.

## Ownership and current limits

After native materialization I remain reviewer for these two consumers and their newly discovered actual transitive consumers, at most cycle2. No broad audit, tests, gates, hashes, receipts, acceptance or recertification was performed. Root owns continuation aggregation, sidecar currency, native dispatch and mandatory subsequent mechanics. The two complete local statements/proof are a construction proposal requiring actual authoring and review, not evidence those items already exist.
