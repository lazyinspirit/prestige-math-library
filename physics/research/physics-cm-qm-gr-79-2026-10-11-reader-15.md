# Step 3a reader report — batch 15

Run: physics-cm-qm-gr-79-2026-10-11  
Role: reader-15  
Scope: batch 15 only

## Inventory

### Assigned pages opened

- library/non-relativistic-classical-mechanics-mathematics/cm-math-fluid.md
- library/non-relativistic-classical-mechanics-mathematics/cm-math-fluid-examples.md

### Assigned items opened in dependency order

- Level 0: def-periodic-vector-sobolev-space-and-leray-projection; lem-cm-integral-and-ftc-for-continuous-normed-space-curves.
- Level 1: lem-cm-lattice-shell-count-and-weight-sums.
- Level 2: lem-fourier-lattice-sobolev-embedding; lem-fourier-tail-diagonal-compact-convergence.
- Level 3: lem-discrete-young-and-sobolev-product; ex-cm-leray-projection-explicit-computations; cex-cm-absolute-convergence-fails-in-h-zero.
- Level 4: lem-tame-transport-commutator; lem-fluid-galerkin-coefficient-ivp; lem-cm-strong-solution-smoothness-bootstrap.
- Level 5: lem-fluid-energy-common-lifespan; lem-periodic-pressure-reconstruction.
- Level 6: lem-high-sobolev-norms-share-base-lifespan; ex-cm-plane-wave-and-shear-exact-solutions.
- Level 7: thm-local-smooth-periodic-euler-viscous-solution.
- Level 8: thm-fluid-uniqueness-and-continuous-dependence.
- Level 9: rem-local-versus-known-open-global-fluid-scope.

The assignment contains 18 items. All are draft mathematical items; no physical or empirical item is in this batch.

### Dependency context opened

I inspected the exact relevant definition or statement clauses for the Fourier basis/Parseval theorem, the one-dimensional and finite-torus construction, product measure, countable choice, the Fejer convergence theorem cited in the local definition, the ODE existence and maximal-solution theorems, the finite-dimensional coordinate-map theorem, the finite Holder and Gronwall inequalities, the real FTC and integral monotonicity theorems, and the measure and topology clauses used in the Fourier estimates. I used the local proof contracts as navigation evidence and checked their cited statements where needed. I did not re-prove the imported mathematical supplier theorems.

I also opened the cited official CMI Navier-Stokes announcement. Its 11 September 2026 date and qualified “apparently settled” wording match the remark; the source also states that evaluation is deliberately unhurried: [Clay Mathematics Institute announcement](https://www.claymath.org/news/navier-stokes-announcement/). The remark correctly limits this to the Euclidean Millennium problem and does not transfer the claim to the periodic model.

## Review outcome

No edits were made. This was a read-only reader assignment. No formatter, precheck, or proof-layout command was run because no item was changed. The report and findings JSON are the only files written.

### Unedited defects

- def-periodic-vector-sobolev-space-and-leray-projection: the L1 real-valuedness equivalence relies on thm-fejer-convergence-in-lp, but that supplier is not in deps. The same definition only names “analogous scalar spaces” and does not define them, although later assigned consumers use scalar H^m.
- lem-cm-integral-and-ftc-for-continuous-normed-space-curves: the stated integral domain has a<b, but G(a), endpoint additivity splits, and negative difference quotients require degenerate or oriented integrals that the item never defines. Its proof contract records these endpoint cases as checked by assuming the missing zero-integral convention.
- lem-cm-lattice-shell-count-and-weight-sums: step 3.1 contains a malformed comparison with an unbound m before giving the valid finite-partial-sum estimate.
- lem-fourier-lattice-sobolev-embedding: F1’s multi-index summability justification does not establish convergence of the reciprocal-weight series; step 2.2 uses a metric ball on T^3 without defining a metric; step 3.1 uses the fundamental theorem of calculus without an exact dependency or local derivation; claim 3 applies C^j to an H^sigma equivalence class rather than its canonical representative.
- lem-discrete-young-and-sobolev-product: claim 2 and F5 multiply vector-valued fields and coefficients without specifying a vector multiplication or output type.
- lem-fluid-galerkin-coefficient-ivp: F6 uses tensor product and matrix divergence operations not defined by its dependencies; the proof fixes an ordered basis after only showing finite spanning, without citing or proving the finite basis construction.
- lem-cm-strong-solution-smoothness-bootstrap: F2 states a transport-product mapping estimate for all p>3/2 that is not supplied by the cited product result; step 2.1 needs the bounded point-evaluation argument to pass from the Sobolev-valued derivative to the pointwise time derivative.
- thm-local-smooth-periodic-euler-viscous-solution: step 3.1 uses the Riemann integral at t=0 although its supplier only defines it for positive interval length; step 4.1 should choose an integer m at least max(s,p), since the equation was established only for m≥s.
- lem-periodic-pressure-reconstruction: scalar p is asserted to lie in H^m although the cited definition does not define scalar H^m; F3 omits the product theorem’s m>3/2 hypothesis; step 3.1 passes from equal coefficients directly to equality of continuous fields without first using Fourier coefficient injectivity to obtain equality almost everywhere.
- cm-math-fluid page: the summary calls the pressure-reconstruction item “line 12,” but it is the 13th item in the page list; the 12th item is the local existence theorem.
- Proof-step formatting: numbered steps are not separated by blank lines in every proof-bearing assigned item: lem-cm-lattice-shell-count-and-weight-sums; lem-cm-integral-and-ftc-for-continuous-normed-space-curves; lem-fourier-lattice-sobolev-embedding; lem-discrete-young-and-sobolev-product; lem-tame-transport-commutator; lem-fluid-galerkin-coefficient-ivp; lem-fluid-energy-common-lifespan; lem-high-sobolev-norms-share-base-lifespan; lem-fourier-tail-diagonal-compact-convergence; lem-cm-strong-solution-smoothness-bootstrap; thm-local-smooth-periodic-euler-viscous-solution; lem-periodic-pressure-reconstruction; thm-fluid-uniqueness-and-continuous-dependence; ex-cm-leray-projection-explicit-computations; ex-cm-plane-wave-and-shear-exact-solutions; cex-cm-absolute-convergence-fails-in-h-zero. The exact carrier locations are in the findings JSON.

The findings JSON contains only defects left unedited. No published or cross-batch dependency defect was identified.

## Page verdicts

- cm-math-fluid: revision required. The mathematical narrative is broadly consistent with the local result, but the item-number statement is inaccurate and several assigned definitions/proofs need repair.
- cm-math-fluid-examples: page summary passes review. Its three example/counterexample computations match the assigned item statements; their verification step formatting remains defective.

## Blocker

No blocker prevented the review. The read-only role prevented repairs, so all confirmed findings remain for owner disposition.

## Coverage note

I opened all 18 assigned items and both assigned pages, and inspected the exact supplier clauses needed for the claims reviewed. The assigned items were opened in dependency-level order, but I consulted some external mathematical supplier clauses during the subsequent verification pass rather than before the first item pass; I revisited the current claims against those clauses before recording findings. I did not independently re-audit the full proofs of imported mathematical suppliers or retrieve the cited fluid-analysis monographs. The official CMI page was read directly because the assigned remark makes a date-sensitive status statement.
