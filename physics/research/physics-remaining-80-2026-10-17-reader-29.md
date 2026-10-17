# Step 3a reader report — batch 29

Run: `physics-remaining-80-2026-10-17`  
Batch: `29`  
Role: reader  
Verdict: both assigned pages reviewed; five in-flight items repaired; no confirmed uneditable content defect remains.

## Opened inventory

### Assigned pages

- A page `csm-full-phase-local-equivalence`: `library/classical-statistical-mechanics/csm-full-phase-local-equivalence.md`.
- B page `csm-full-phase-local-equivalence-examples`: `library/classical-statistical-mechanics/csm-full-phase-local-equivalence-examples.md`.

### Assigned items, read in dependency order

The A page contains 14 items: `lem-csm-kl-chain-disjoint`, `lem-csm-gaussian-mark-moments`, `lem-csm-information-contraction-pinsker`, `def-csm-full-marked-model`, `def-csm-marked-periodic-continuation`, `lem-csm-gaussian-marked-lift-existence`, `thm-csm-total-canonical-window`, `post-csm-fullphase-interacting-preparations`, `thm-csm-uniform-phase-shell-entropy`, `thm-csm-full-shell-positional-minimizer`, `thm-csm-local-mark-kl-bound`, `thm-csm-local-full-phase-equivalence`, `thm-csm-local-momentum-moments`, and `pthm-csm-full-interacting-phase-equivalence`.

The B page contains `cex-csm-energy-concentration-not-local` and `cex-csm-specific-entropy-not-local`.

### Dependency context opened

- Current-run suppliers from batch 26: `def-csm-statistical-state-observable`, `post-csm-counting-and-physical-observables`, `post-csm-canonical-preparation`, and `post-csm-grand-preparation`.
- Current-run supplier from batch 27: `def-csm-stable-superstable-continuum-interaction`.
- Mathematical suppliers inspected at their current statements and, where needed, proofs: `def-axiom-of-choice`, `def-standard-borel-space`, `def-tdmath-finite-region-relative-entropy`, `lem-tdmath-relative-entropy-variational-and-chain-rules`, `def-kullback-leibler-divergence`, `def-total-variation-distance-for-probability-laws`, `thm-pinsker`, `thm-dominated-convergence`, `thm-gaussian-integral`, `thm-integration-by-parts`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`, `lem-finite-products-of-standard-borel-spaces-are-standard-borel`, `lem-borel-subspaces-admit-polish-presentations`, `def-countable-choice`, `def-dependent-choice`, `def-hahn-banach-extension-principle-relative`, `def-ultrafilter-extension-principle`, `def-csm-phase-space-reference`, `def-cm01-units`, `def-td-si-quantities`, `def-tdmath-poisson-configuration-reference`, `def-tdmath-superstable-regular-interaction`, `def-tdmath-local-tame-topology`, `thm-tdmath-poisson-reference-count-properties`, `def-tdmath-periodized-empirical-field`, `lem-tdmath-periodized-empirical-field-stationary-density`, `lem-tdmath-integrable-tail-diagonal-gap`, `lem-tdmath-superstable-cell-energy-bound`, `thm-tdmath-periodic-fixed-n-limit`, `thm-tdmath-canonical-grand-duality`, `thm-tdmath-continuum-variational-pressure`, `thm-tdmath-local-tame-entropy-compactness`, and `thm-tdmath-specific-entropy-density`.
- Page prerequisites opened: `csm-gibbs-lattice` (draft), `csm-phase-ensembles` (draft), `td-math-interacting-ensemble-geometry` (published), `minimax-lower-bounds-and-information-theoretic-methods` (published), and `stationary-markov-chains-and-ergodic-limits` (published). The further page IDs in `csm-phase-ensembles`'s own `requires` list all have current carriers; their prose was not needed to verify batch 29's item claims.

The current tree contains carriers for the two pages marked missing in the earlier cross-dependency evidence: `minimax-lower-bounds-and-information-theoretic-methods` and `stationary-markov-chains-and-ergodic-limits`. I opened both current pages and the directly used KL, Pinsker, and total-variation suppliers. The old missing-carrier observations were not used as verdicts.

## Repairs and evidence

- `def-csm-full-marked-model`: defined the numerical potential scaling explicitly, including the physical pair-potential map $V_{\rm pair}(\mathbf r)=E_0\phi(\mathbf r/\ell_0)$, and set $U_{L,\mathrm{free}}=H_\phi$ and $U_{L,\mathrm{per}}=H_{L,\mathrm{per}}$ using the named TD-mathematics supplier. Defined the finite marked-sector sigma-algebra, made the finite symmetric mark product independent of point enumeration, recorded SI momentum units and the physical Hamiltonian $H^{\rm phys}=E_0\mathcal H$, and defined the periodic space $\mathbb T_L^d$. The finite-mark reference's sigma-finiteness cover now uses balls of radius $kp_*$, so the units are consistent. I checked all 10 current consumers of this definition in batch 29; their canonical, shell, marked-local, and physical uses match the clarified conventions. Their claims needed no further repair.
- `post-csm-fullphase-interacting-preparations`: specified the single-species flat-torus model, identified the physical Hamiltonian with $E_0\mathcal H$, and recorded the exact reference relation $R_{L,N}=e^{-V_L}\bar m_N^{\rm phys}$. The factor is independent of $N$ and cancels in the normalized fixed-$N$, band, and grand-sector laws. Clarified the physical scope as single-species and aligned the total-canonical-window dependency role with its use as a mathematical premise. I checked its assigned consumer, `pthm-csm-full-interacting-phase-equivalence`.
- `pthm-csm-full-interacting-phase-equivalence`: stated the integer side-length sequence, periodic boundary condition, exact density and rate hypotheses, single-species preparation, physical Hamiltonian map, and positive SI scale conventions needed by its mathematical suppliers. The proof uses only the cited conditional convergence and moment results; no empirical premise or equilibration claim is introduced.
- `cex-csm-energy-concentration-not-local`: defined the reference $P_N=\operatorname{Bernoulli}(\theta)^{\otimes N}$ and energy $H_N$ in the refuted statement, and replaced “converges deterministically” with the exact condition that $H_N/N=e_N$ almost surely for deterministic $e_N\to\epsilon\theta$. I checked its assigned consumer, `cex-csm-specific-entropy-not-local`; its likelihood, entropy, and concentration calculations remain valid.
- `thm-csm-full-shell-positional-minimizer`: proved the periodic cell-superstability and stability bounds by replicating a finite torus configuration over $M^d$ cells and taking the periodic-image limit. Made the countable independent-tile construction and its measurable union map explicit using the existing Poisson-coordinate dependency closure. Derived convexity of relative entropy for the uniform-phase mixture from the bounded-test variational formula, and distinguished total energy from the sums of positive and negative pair terms in the boundary-energy estimate.

For the public definition and physical preparation edits, I checked the direct and indirect item consumers in this assigned batch in supplier order. The authors' proof contracts were synchronized to the current statements and repaired proof steps; no stale `verification.judge` record was present on any changed item. The assigned batch manifest's direct `deps` and `dependency_roles` still match all changed carriers. The batch cross-dependency file now records completed scoped checks for its six current-run item edges and four current page prerequisite edges; those `verified` rows record dependency-use review only, not proof or page publication acceptance. Its historical removed row was left intact.

## Page verdicts

- A page `csm-full-phase-local-equivalence`: the summary matches the conditional mathematical conclusions and explicitly preserves the model/observation distinction. Its required pages are present. `csm-gibbs-lattice` remains a draft prerequisite, and its edge is marked as a scoped review, not as a proof acceptance.
- B page `csm-full-phase-local-equivalence-examples`: the summary accurately describes the two finite Bernoulli countermodels, their first-coordinate discrepancy, and their nonexperimental scope. The reference law is now explicit in the first counterexample.

## Checks

For each changed item, `reflow.mts` reported unchanged and `precheck.mts` passed: `def-csm-full-marked-model`, `post-csm-fullphase-interacting-preparations`, `pthm-csm-full-interacting-phase-equivalence`, `cex-csm-energy-concentration-not-local`, and `thm-csm-full-shell-positional-minimizer`. The final batched `proof-layout.mjs` run reported 5 items, 9 steps, 0 defects.

## Uneditable findings and blocker

No confirmed uneditable content defect remains in the assigned pages or items. No blocker remains in the current page-carrier inventory.

## Coverage note

The author-hosted Tong notes were accessible for §1.3.1 (canonical weights) and §1.4.1 (grand-canonical weights): [Statistical Physics by David Tong](https://davidtong.org/teaching/statistical-physics/statmechhtml/S1). Direct retrieval of the cited Arovas and Georgii PDFs failed in the web reader, so I do not claim independent full-text reading of those sources. The corresponding mathematical deductions were checked against the current local supplier statements and proofs. I did not re-audit the complete transitive proof closures of every published mathematical supplier.
