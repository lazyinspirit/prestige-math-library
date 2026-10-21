# Step 3a reader report — batch 45

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `45`

## Run state and scope

The first recomputed autopilot status was `running`; Step 3a read/split were still in progress and no dispatch was in flight. At handoff, status recomputed as `PAUSED`, still with no dispatch in flight; batch 45 had not yet appeared in the run's 3a-read coverage. The latest repository commit observed was `ace06e03bc`. The shared worktree had unrelated edits and new files from other active work; I limited content edits to four in-flight items assigned to batch 45 and updated this batch's proof-contract file. The two assigned page bodies were empty as required, and both pages retained `page_layout: compact-v1`.

## Opened inventory

### Assigned pages

- `library/inverse-problems/eit-logarithmic-stability-and-conductivity-classes.md` (A)
- `library/inverse-problems/eit-logarithmic-stability-and-conductivity-classes-examples.md` (B)

### Assigned items, read in dependency order

**A-page, levels 0–2:**

- Level 0: `lem-ip-calderon-bourgain-cutoff-estimates`; `lem-ip-planar-cauchy-beurling-and-near-two-inversion`.
- Level 1: `lem-ip-calderon-averaged-negative-bourgain-estimate`; `lem-ip-planar-beltrami-caccioppoli-translation-tail`; `lem-ip-planar-principal-beltrami-inverse-gradient-integrability`; `lem-ip-planar-scattering-topological-zero-separation`.
- Level 2: `def-ip-calderon-admissible-conductivity-class`; `lem-ip-calderon-disk-inclusion-perimeter-scaling`; `lem-ip-calderon-rough-potential-cgo-construction`; `lem-ip-planar-conductivity-l2-interpolation`; `lem-ip-planar-measurable-beltrami-cgo-solutions`; `lem-ip-planar-qc-composition-preserves-power-translation-moduli`; `lem-ip-planar-oscillatory-beltrami-phase-decay`.

**A-page, levels 3–8:**

- Level 3: `def-ip-calderon-weak-dn-map-for-bounded-conductivities`; `lem-ip-calderon-fixed-collar-c1alpha-extension`; `lem-ip-planar-beltrami-cgo-power-phase-decay`; `lem-ip-planar-forced-beltrami-similarity-estimate`.
- Level 4: `lem-ip-calderon-rough-dn-map-wellposedness`; `lem-ip-planar-conductivity-cgo-logarithmic-phases`.
- Level 5: `lem-ip-bv-translation-modulus-for-conductivity`; `lem-ip-calderon-rough-alessandrini-and-quotient-norm`; `lem-ip-planar-scattering-dbar-equation-and-parameter-bounds`; `lem-ip-calderon-radial-inclusion-dn-spectrum`.
- Level 6: `lem-ip-calderon-higher-dimensional-cgo-fourier-logarithmic-stability`; `lem-ip-planar-dn-to-scattering-lipschitz-estimate`; `lem-ip-planar-dn-enclosure-and-reciprocal-comparison`.
- Level 7: `lem-ip-calderon-planar-beltrami-dbar-logarithmic-stability`.
- Level 8: `thm-ip-calderon-logarithmic-l2-stability`.

**B-page:**

- Level 3: `ex-ip-calderon-smooth-c1alpha-conductivity-class`; `ex-ip-calderon-discontinuous-bv-conductivity-class`.
- Level 6: `cex-ip-calderon-logarithmic-modulus-not-lipschitz`.

The 61 unique direct dependency interfaces outside batch 45 were opened at the statement/definition sections used by the assigned proofs:

```text
cor-additivity-of-the-nonnegative-lebesgue-integral
cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
cor-injective-holomorphic-derivative-nonzero
cor-poincare-wirtinger-on-convex-domains
cor-residue-theorem-circle
cor-second-green-identity-on-a-bounded-c-one-domain
cor-winding-number-classifies-loops-in-the-punctured-plane
def-axiom-of-choice
def-calderon-zygmund-kernel-and-principal-value-operator
def-countable-choice
def-distributional-derivative
def-hk-and-hk-zero-notation
def-ip-spatial-bv-and-distributional-tv
def-l-p-space-as-a-quotient-by-null-functions
def-surface-integral-on-a-compact-c-one-hypersurface
def-translation-of-a-function-on-rn
def-wirtinger-derivatives
def-wkp-zero-as-a-sobolev-closure
lem-analytic-quasiconformality-implies-modulus-distortion
lem-inverse-of-a-quasiconformal-map-is-quasiconformal
lem-ip-bv-extension-and-translation
lem-ip-calderon-boundary-trace-quotient-identification
lem-ip-lipschitz-graph-area-and-calculus-under-countable-choice
lem-local-holder-cauchy-transform-estimate
lem-smooth-bump-between-concentric-euclidean-balls
lem-surface-integral-is-independent-of-c-one-boundary-charts
thm-argument-principle-as-image-winding-number
thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
thm-calderon-zygmund-singular-integrals-are-bounded-on-lp
thm-chain-rule-for-total-derivatives
thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p
thm-complex-lp-completeness-and-almost-everywhere-subsequences
thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
thm-fourier-basis-and-parseval-on-the-n-torus
thm-fourier-transform-converts-convolution-to-products
thm-fourier-transform-maps-schwartz-space-continuously-to-itself
thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis
thm-fredholm-alternative-for-identity-minus-compact
thm-holder-inequality-for-integrals
thm-l-one-approximate-identities-converge-in-l-p
thm-l-one-fourier-inversion
thm-lax-milgram
thm-liouville-bounded-entire-function
thm-maximum-modulus-principle-with-boundary-and-infinity-control
thm-measurable-riemann-mapping-sphere
thm-metric-compactness-equivalences
thm-minimum-modulus-principle
thm-monotone-convergence-for-the-integral
thm-one-quasiconformal-is-conformal
thm-plancherel
thm-poincare-inequality-for-w-one-p-zero
thm-polar-coordinates-formula-for-lebesgue-measure
thm-riesz-thorin-interpolation
thm-smooth-up-to-the-boundary-density-on-smooth-domains
thm-sobolev-gauss-green-formula-on-c-one-domains
thm-tonelli-theorem-for-sigma-finite-product-spaces
thm-unit-disc-schwarz-lemma-with-rigidity
thm-weyl-lemma-for-the-laplacian
thm-winding-number-equals-circle-degree
thm-young-convolution-inequality
```

I also opened the current-run BV trace, strict-approximation and extension supplier bodies before using the extension/translation interface, and the current-run Calderón trace quotient proof. The graph-area dependency used by the disk-perimeter proof was checked at its exact graph-flux statement. Current proof-contract bundles were rendered by dependency level; cap markers were treated as prompts to open the named item, not as evidence of missing material.

## Repairs

1. **`lem-ip-planar-scattering-topological-zero-separation`, Statement.** Bound `\delta` explicitly as one fixed parameter in `(0,1/2]`, and state that the error inequalities hold for every `k`. This matches the proof's use of `\delta` as the fixed error size and removes the former unbound-parameter ambiguity. The primary source states the same interface as a fixed `0<\rho\le1/2` in Faraco–Prats, Proposition 5.3, printed p. 30; Lemma 5.6 derives the corresponding forcing bounds, printed pp. 33–34: [paper](https://arxiv.org/pdf/1701.06480). The endpoint proof-contract evidence now records this parameter scope. Its assigned direct consumer `lem-ip-calderon-planar-beltrami-dbar-logarithmic-stability` and indirect consumer `thm-ip-calderon-logarithmic-l2-stability` were checked against the clarified interface.

2. **`lem-ip-calderon-higher-dimensional-cgo-fourier-logarithmic-stability`, Proof 2.1.** Expanded the Liouville transform step that identifies the mixed Schrödinger form difference with the weak DN difference: the proof now chooses the matching conductivity-harmonic representatives for the opposite trace classes, uses the weak equations to replace arbitrary representatives, and uses symmetry for the second form. The local derivation is consistent with the Schrödinger product identity discussed by Haberman–Tataru, §1, printed pp. 2–3: [paper](https://arxiv.org/pdf/1108.6068). The step-2 proof contract was updated.

3. **`lem-ip-calderon-radial-inclusion-dn-spectrum`, Proof 2.1.** Added the piecewise integration-by-parts formula for arbitrary smooth boundary representatives, cancellation of interface fluxes, and extension to all `H^1` representatives by smooth density. This supplies the missing link from the computed outer normal flux to the weak DN functional; the proof contract now includes the density interface in this step.

4. **`lem-ip-planar-principal-beltrami-inverse-gradient-integrability`, Proof 5.1.** Made the Sobolev chain rule for `f=e^{ik\Phi}` explicit: approximate the compactly supported Beltrami derivative by smooth data, use the Cauchy and Hölder bounds for convergence of the phases, apply the classical chain rule, then pass to the `W^{1,r}` limit. The step-5 proof contract was updated.

No stale `verification.judge` records were present on the repaired items. No A- or B-page prose required repair. No TikZ diagrams were present in the assigned item bodies, and no exposition required adding a diagram.

## Validation

`node tools/tsx-run.mjs tools/reflow.mts` reported `unchanged` for each of the four changed item paths. `node tools/tsx-run.mjs tools/precheck.mts` passed each changed item. The final batched `node tools/proof-layout.mjs` invocation covered all four changed paths and reported `4 items, 22 steps, 0 defects`.

## Page verdicts

- **A-page `eit-logarithmic-stability-and-conductivity-classes`: PASS.** Frontmatter inventory matches the 28 assigned A-items; status is draft, layout is `compact-v1`, and the Markdown body is empty. No unedited page-level defect was found.
- **B-page `eit-logarithmic-stability-and-conductivity-classes-examples`: PASS.** Frontmatter inventory matches the three assigned examples/counterexample; status is draft, layout is `compact-v1`, and the Markdown body is empty. No unedited page-level defect was found.

## Unedited defects and blockers

No mathematical defect remains that requires an out-of-scope repair. Workflow status at handoff is `PAUSED`; no dispatch was in flight and the native read/split stages remained open. This reader report does not attempt gates, judgments, stamps, publication, or run-state transitions.

## Coverage limits

The evidence bundles were rendered after the initial manual item pass rather than before it; they were then used to cross-check proof-contract facts and citations. I opened all assigned pages/items and the direct dependency interfaces used in their proofs, but did not audit every transitive supplier proof or read each cited paper cover to cover. For the external results noted above, I used the exact cited sections and pages as context; the reported repairs are closed by the local item arguments and the listed interfaces.
