# Step 3a reader report — batch 39

- Run: `physics-td-qft-rpm-62-2026-10-14`
- Role: independent reader
- Date: 2026-10-15

## Opened inventory

Assigned manifest: `research/physics-td-qft-rpm-62-2026-10-14-batch-39.pages.json`.

Assigned pages:

- `library/quantum-field-theory-mathematics/qft-mc04.md` (A page)
- `library/quantum-field-theory-mathematics/qft-mc04-examples.md` (B page)

Assigned items:

- `items/thm-qft-conformal-external-scalar.md`
- `items/ex-qft-constant-conformal-normalization.md`

The batch proof-contract record was inspected at `research/physics-td-qft-rpm-62-2026-10-14-batch-39.proof-contracts.json`.

Opened the theorem's 15 direct dependency carriers and checked the relevant definitions/statements and proof-status metadata:

- `items/def-countable-choice.md`
- `items/def-fixed-support-test-function-frechet-space.md`
- `items/def-gr-curvature-tensor-and-derived-tensors.md`
- `items/def-qft-fock-and-test-spaces.md`
- `items/def-qft-scalar-mass-shell.md`
- `items/def-schwartz-space-and-its-seminorms.md`
- `items/def-test-function-topology.md`
- `items/lem-nrqm-composites-bounded-tensor-maps.md`
- `items/lem-nrqm-composites-permutation-sector-projections.md`
- `items/lem-test-function-lf-topology-universal-property.md`
- `items/lem-qft-smeared-free-scalar.md`
- `items/lem-qft-scalar-causal-commutator.md`
- `items/thm-emg-conformal-einstein-transformation.md`
- `items/thm-gr-nondegenerate-levi-civita-and-tensor-derivative.md`
- `items/thm-fourier-transform-maps-schwartz-space-continuously-to-itself.md`

Additional definitions opened to check the test-space and time-orientation conventions used by those suppliers:

- `items/def-test-function-space-d-of-an-open-set.md`
- `items/def-sr-affine-minkowski-model.md`
- `items/def-inertial-frame-and-inertial-chart.md`
- `items/def-time-orientation-and-future-causal-sets.md`

## Review and edits

### `thm-qft-conformal-external-scalar`

**Verdict: pass as a conditional mathematical theorem.** The statement specifies `M = R^4`, signature `(-+++)`, a smooth strictly positive dimensionless conformal factor $\Omega$, the curvature convention, compact test space, selected massless Fock representation, and its common invariant domain. The declared dependencies all have the mathematical-premise role. Five direct suppliers remain draft; the theorem states and preserves that conditional reliance and makes no empirical claim.

The curvature calculation is consistent with the exact sign convention in `def-gr-curvature-tensor-and-derived-tensors` and the transformation statement in `thm-emg-conformal-einstein-transformation`: for the flat base $S_\eta=0$, $\theta=\eta^{ab}\partial_a(\Omega^{-1}\partial_b\Omega)$, and $s=\eta^{ab}(\Omega^{-1}\partial_a\Omega)(\Omega^{-1}\partial_b\Omega)$, so the gradient-square terms cancel and $R_g=-6\Omega^{-3}\Box_\eta\Omega$. The divergence formula for $\Box_g$ then gives $P_g(\Omega^{-1}u)=\Omega^{-3}\Box_\eta u$ with the stated sign.

The continuity proof bounds multiplication by $\Omega^3$ on each fixed-support test space, uses the Fourier-Schwartz supplier and the massless shell measure to reduce the one-particle norm estimate to $\int_0^\infty r(1+\sqrt2r)^{-4}\,dr<\infty$, and bounds the creation/annihilation maps on each finite-particle sector. The LF universal-property supplier then gives continuity on the stated test-function topology. The field equation follows by the intertwining identity and integration by parts against the massless shell plane waves. The positivity argument uses the common invariant domain and the normalized vacuum; the locality argument preserves supports under the positive smooth multiplier and applies the causal-commutator supplier to real and imaginary parts. The two-point kernel has the stated $\Omega^{-1}(x)\Omega^{-1}(y)$ factor relative to curved volume: the two volume densities contribute $\Omega^4$ each, leaving exactly the $\Omega^3$ multiplier on each test. Formal symmetry follows by integration by parts with compact supports and the real curvature potential.

The proof contract matches these steps. In particular, its two citations with fact label `F13` correspond to the two suppliers combined in the item's single `F13` fact (the topology definition and its universal-property lemma); step 1.2 uses the latter's continuity criterion. I found no unsupported conclusion, sign error, unit mismatch, or defect in the source-to-claim mapping.

### `ex-qft-constant-conformal-normalization`

**Verdict: pass.** For $b>0$, the example correctly obtains $R_g=0$, $P_g=b^{-2}\Box_\eta$, field smearing multiplier $b^3$, volume density $b^4$, and relative two-point kernel multiplier $b^{-2}$. Double smearing contributes $b^4b^4b^{-2}=b^6$, matching the two field-smearing multipliers. The stated limitation to constant normalization is accurate. Its proof-contract derivations agree with the Verification steps.

### Page summary repair

The A-page summary said the construction was conditional on “three current draft suppliers.” The direct dependency statuses show five current draft direct suppliers: `def-qft-fock-and-test-spaces`, `def-qft-scalar-mass-shell`, `lem-qft-smeared-free-scalar`, `lem-qft-scalar-causal-commutator`, and `thm-emg-conformal-einstein-transformation`. I corrected the summary to name those five. This was the only edit; no item or proof contract was changed.

## Source review

- Christopher J. Fewster, *Lectures on quantum field theory in curved spacetime*, Lecture Note 39 (2008), §3.1, pp. 11–12: the Klein–Gordon Lagrangian includes the $\xi R$ term; the massless conformal value is $\xi=(n-2)/(4n-4)$, which is $1/6$ in four dimensions; and the conformal field weight is $\Omega^{1-n/2}$. The section also gives the covariant wave equation and divergence form/integration-by-parts identity. URL: <https://inspirehep.net/files/a02ec079ff7063d1254ba3df86641d86>.
- L. H. Ford, *Quantum Field Theory in Curved Spacetime*, arXiv:gr-qc/9707062v1, §1.1, eq. (1.2), and §1.2: the equation is $\Box\varphi+m^2\varphi+\xi R\varphi=0$, with $\xi=1/6$ identified as conformal coupling in the massless four-dimensional case. Ford uses signature $(+---)$ and units $G=c=\hbar=1$; the assigned item's local calculation instead follows its explicit $(-+++ )$ convention and its exact curvature supplier. The external sources support the formulation and conformal-coupling context; the displayed curvature and field identities are derived locally. URL: <https://arxiv.org/html/gr-qc/9707062v1>.

## Page verdicts and remaining issues

- `qft-mc04`: pass after the summary repair above.
- `qft-mc04-examples`: pass; its summary matches the constant-factor normalization example.
- Uneditable defects: none confirmed.
- Blocker: none.
- No item was edited, so item reflow, precheck, and proof-layout were not run.

## Coverage limitation

I checked every assigned page and item and all 15 declared direct dependencies needed by the theorem, including their exact interfaces and relevant conventions. In the first pass I opened `def-fixed-support-test-function-frechet-space` before its indirect base definition `def-test-function-space-d-of-an-open-set`; I opened that base definition immediately afterward and checked the consuming use, but did not re-read the earlier file. I also did not independently re-prove the complete transitive proof closures of every mathematical supplier; where those suppliers provide prerequisites, this review checks the consuming uses and retains each supplier's current published/draft status honestly.
