# Step 3a reader report — batch 30

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `30`

## Opened inventory

Assigned pages:

- `library/inverse-problems/banach-range-invariance-and-eit-rates.md` — draft A page; frontmatter-only, `page_layout: compact-v1`; 19 listed items and no examples.
- `library/inverse-problems/banach-range-invariance-and-eit-rates-examples.md` — draft B page; frontmatter-only, `page_layout: compact-v1`; two listed examples and no items.

Assigned A-page items were opened in dependency order:

1. `lem-ip-collared-sobolev-besov-source-functional-cutoff`
2. `lem-ip-positive-sobolev-cgo-remainders-by-shifted-lattice`
3. `lem-ip-sharp-weighted-modulated-cgo-remainder-absorption`
4. `lem-ip-calderon-boundary-trace-quotient-identification`
5. `lem-ip-centered-neumann-sequence-map-and-differentiability`
6. `lem-ip-logarithmic-index-conjugate-and-parameter-rates`
7. `lem-ip-collared-liouville-potential-and-hone-recovery`
8. `lem-ip-logarithmic-endpoint-under-effective-noise-control`
9. `lem-ip-centered-ntd-cgo-identity-and-modulated-remainder`
10. `lem-ip-geometric-logarithmic-frozen-stopping-schedule`
11. `def-ip-differential-range-invariance`
12. `lem-ip-sharp-centered-eit-hone-logarithmic-stability`
13. `def-ip-relaxed-range-invariance-objective`
14. `lem-ip-joint-range-invariance-vsc-estimate`
15. `lem-ip-frozen-newton-one-step-error-recursion`
16. `lem-ip-eit-centered-range-invariance-vsc-and-frozen-compatibility`
17. `thm-ip-joint-regularization-rate-under-range-invariance`
18. `thm-ip-frozen-newton-rate-under-range-invariance`
19. `rem-ip-eit-conductivity-rate-source-reconciliation`

Assigned B-page items:

- `ex-ip-partial-observation-range-invariance-without-tcc`
- `ex-ip-relaxed-variable-requires-penalty`

The direct mathematical suppliers were also opened: `def-axiom-of-choice`, `def-countable-choice`, `def-dependent-choice`, `def-banach-space`, `def-fractional-sobolev-space-on-a-compact-c-one-boundary`, `def-hk-and-hk-zero-notation`, `def-wkp-zero-as-a-sobolev-closure`, `def-ip-banach-convex-subgradient-and-dual-pairing`, `def-ip-bregman-distance`, `def-ip-tangential-cone-condition`, `def-ip-variational-source-condition`, `lem-ip-index-function-young-conjugate-bound`, `lem-spherical-harmonics-form-complete-basis-and-addition-formula`, `thm-plancherel`, `thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces`, `thm-fourier-basis-and-parseval-on-the-n-torus`, `thm-bounded-right-inverse-for-the-sobolev-trace`, `thm-kernel-of-the-trace-is-w-one-p-zero`, `thm-sharp-trace-theorem-for-w-one-p`, `thm-extension-theorem-for-bounded-smooth-domains`, `thm-poincare-wirtinger-on-bounded-connected-extension-domains`, and `thm-lax-milgram`.

For the repaired proof steps I additionally opened `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-young-convolution-inequality`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `thm-smooth-up-to-the-boundary-density-on-smooth-domains`, `lem-compact-support-zero-extension-in-wkp`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `def-l-one-approximate-identity-on-rn`, `lem-mollification-commutes-with-weak-derivatives-in-the-interior`, and `thm-l-one-approximate-identities-converge-in-l-p`. I also consulted `thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces` and `lem-bem-half-order-bessel-slobodeckij-equivalence` while checking the fractional product estimate; the latter is stated only in dimension two and was not used as a supplier for the three-dimensional argument.

I opened the five page prerequisites listed by the A page: `nonlinear-inverse-problems-and-tangential-cone-conditions`, `variational-source-conditions-and-bregman-rates`, `fredholm-elliptic-problems-and-the-elliptic-spectrum`, `volume-integral-scattering-and-partial-wave-error`, and `littlewood-paley-theory-and-square-functions`. The first two are empty-body draft pages. The latter three have narrative bodies; their body-policy defects are recorded below. The volume-integral page also contains a TikZ schematic, which is outside this batch's diagram-review scope and was not mathematically adjudicated.

## Independent mathematical review

The two finite-dimensional examples are correct. The first has a valid factorization and bi-Lipschitz range coordinate; at `(5,0)` its TCC remainder exceeds the data increment, so every allowed `η<1` fails. The second has infinitely many exact unpenalized minimizers and the added quadratic penalty gives the unique minimizer `(y,0)`.

The main analytic chain is consistent under its stated hypotheses. In particular, the Neumann sequence is centered so its background columns are square summable only after subtracting the background; the CGO phase construction keeps the Fourier modulation in the remainder; and the integrated weighted estimate supplies the logarithmic stability step. The joint and frozen rate arguments use the corrected exponent and the separate effective-noise condition at the nominal endpoint.

The Weidling thesis was read at the relevant EIT sections: Theorem 6.9 and equation (6.19), printed pp. 174–176; Theorems 6.10–6.11, printed pp. 176–179; Theorem 6.12, printed pp. 181–182; and Theorem 6.15, printed p. 185. Theorem 6.9's printed first-integral estimate pairs the potential difference in `H^{-1/2}` with the unmodulated CGO remainder, although the exact product contains the Fourier modulation. The local proof instead retains the modulation and integrates its negative-Sobolev norm before absorption. Theorem 6.15 gives `μ=2(s-(3/p+1+τ))/(s-1)`; with `p=2`, this yields the corrected EIT VSC exponent with denominator `s₂-1`.

Kaltenbacher's paper was checked at Theorem 10, Corollary 11, and Remark 1. Theorem 10 prints the exponent with denominator `s₁-1`; Remark 1 separately asserts the same logarithmic rate for pure-power parameter choices. The local items accurately distinguish that printed source assertion from the locally proved corrected exponent and the separate strict-power derivation. Salo's *Calderón problem* lecture notes, §3.2, pp. 20–23, confirm the half-shifted Fourier lattice construction and its nonvanishing imaginary symbol.

## Repairs made

- `lem-ip-collared-sobolev-besov-source-functional-cutoff`: added the Young convolution and Tonelli dependencies used in the Besov multiplier bound and Fourier difference identity, and cited each in the affected proof steps.
- `lem-ip-sharp-weighted-modulated-cgo-remainder-absorption`: added Tonelli for the integrated kernel estimate. Its CGO application now declares the positive-Sobolev CGO, smooth-density, and compact-support zero-extension suppliers, and gives the Fourier derivation of the three-dimensional `H^{1/2}` difference-norm product estimate used there.
- `lem-ip-centered-neumann-sequence-map-and-differentiability`: declared the divergence theorem and smooth-density suppliers used to extend the background integration-by-parts identity to all `H^1` tests.
- `lem-ip-centered-ntd-cgo-identity-and-modulated-remainder`: declared the divergence theorem, smooth density, Tonelli, and compact-support zero-extension interfaces. The Green identities now name these suppliers, and the `H^{1/2}` product estimate used in the CGO remainder is derived from the Fourier difference identity.
- `lem-ip-collared-liouville-potential-and-hone-recovery`: replaced the unreferenced smooth-approximation step used to test the weak identity with an explicit zero-extension and mollifier argument, backed by the compact-support, mollification, and approximate-identity suppliers.
- `lem-ip-logarithmic-endpoint-under-effective-noise-control`: restricted the joint-objective noise comparison to `p≥1`, as required by its power inequality, and applied the scalar conjugate bound to `max(dδ,0)` so the general statement does not silently assume `dδ≥0`.
- Updated the corresponding batch-30 proof contracts for all six edited items. None of the six carriers had a stale `verification.judge` record to remove. No statement or definition in an assigned item changed. The new same-batch edge from the weighted CGO remainder item to the positive-Sobolev CGO item raises the carrier's `dependency_level` to 1; the dispatch manifest still records its pre-repair level 0 and was not edited because it is outside the authorized item/page write scope.

Validation after the final edits: reflow and precheck passed for each of the six edited items. The required batched proof-layout command reported `6 items, 31 steps, 0 defects`. No tests or workflow gates were run.

## Uneditable findings

All listed item-supplier defects are statement-first formatting violations in published dependencies: their complete `Definition` or `Statement` contains inline wikilinks, and no immediately following `<heading> references` section contains those links. All are fatal `ill-formed` findings. The assigned consumer is included for each dependency.

| Subject | Exact location | Assigned consumer | Evidence |
|---|---|---|---|
| `def-banach-space` | `items/def-banach-space.md`, Definition lines 28–30 | `def-ip-differential-range-invariance` | Inline wikilinks to normed-space definitions occur before the Definition ends; they need a following “Definition references” section. |
| `def-hk-and-hk-zero-notation` | `items/def-hk-and-hk-zero-notation.md`, Definition lines 35–43 | `lem-ip-calderon-boundary-trace-quotient-identification` | Inline wikilinks to Sobolev-space and norm suppliers occur in the Definition; they need a following “Definition references” section. |
| `def-wkp-zero-as-a-sobolev-closure` | `items/def-wkp-zero-as-a-sobolev-closure.md`, Definition lines 36–52 | `lem-ip-calderon-boundary-trace-quotient-identification` | Inline wikilinks to Sobolev-space and weak-derivative suppliers occur in the Definition, with no following “Definition references” section. |
| `def-fractional-sobolev-space-on-a-compact-c-one-boundary` | `items/def-fractional-sobolev-space-on-a-compact-c-one-boundary.md`, Definition lines 39–60 and 66–76 | `lem-ip-calderon-boundary-trace-quotient-identification` | Inline wikilinks occur throughout the formulation; the next heading is “Source notes,” not “Definition references.” |
| `thm-bounded-right-inverse-for-the-sobolev-trace` | `items/thm-bounded-right-inverse-for-the-sobolev-trace.md`, Statement line 46 | `lem-ip-calderon-boundary-trace-quotient-identification` | The Statement includes a wikilink to the trace operator definition before it ends; it needs a following “Statement references” section. |
| `thm-kernel-of-the-trace-is-w-one-p-zero` | `items/thm-kernel-of-the-trace-is-w-one-p-zero.md`, Statement lines 44–48 | `lem-ip-calderon-boundary-trace-quotient-identification` | The Statement includes wikilinks to the trace operator and zero-boundary-space definition, with no following “Statement references” section. |
| `thm-sharp-trace-theorem-for-w-one-p` | `items/thm-sharp-trace-theorem-for-w-one-p.md`, Statement lines 52–55 | `lem-ip-calderon-boundary-trace-quotient-identification` | The Statement includes wikilinks to the boundary space and trace operator, not moved to “Statement references.” |
| `thm-smooth-up-to-the-boundary-density-on-smooth-domains` | `items/thm-smooth-up-to-the-boundary-density-on-smooth-domains.md`, Statement lines 34–39 | `lem-ip-centered-neumann-sequence-map-and-differentiability` | A wikilink to the graph-chart definition interrupts the Statement; no following “Statement references” section is present. |
| `thm-lax-milgram` | `items/thm-lax-milgram.md`, Statement line 52 | `lem-ip-centered-neumann-sequence-map-and-differentiability` | Wikilinks to Countable Choice and the sesquilinear-form definition occur in the Statement and need a following “Statement references” section. |
| `thm-extension-theorem-for-bounded-smooth-domains` | `items/thm-extension-theorem-for-bounded-smooth-domains.md`, Statement lines 32–38 | `lem-ip-centered-neumann-sequence-map-and-differentiability` | A wikilink to the graph-chart definition occurs before the Statement ends; no following “Statement references” section is present. |
| `lem-spherical-harmonics-form-complete-basis-and-addition-formula` | `items/lem-spherical-harmonics-form-complete-basis-and-addition-formula.md`, Statement line 34 | `lem-ip-centered-neumann-sequence-map-and-differentiability` | The Statement includes a wikilink to the spherical-harmonic convention definition, with no following “Statement references” section. |
| `thm-fourier-basis-and-parseval-on-the-n-torus` | `items/thm-fourier-basis-and-parseval-on-the-n-torus.md`, Statement lines 25–29 | `lem-ip-positive-sobolev-cgo-remainders-by-shifted-lattice` | The Statement includes wikilinks to Countable Choice, the torus, and Fourier-coefficient definitions, with no following “Statement references” section. |
| `thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces` | `items/thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces.md`, Statement lines 31–38 | `lem-ip-collared-sobolev-besov-source-functional-cutoff` | Wikilinks to Countable Choice, the Bessel-potential characterization, and the dyadic partition occur inside the Statement. |
| `thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces` | `items/thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces.md`, Statement lines 35–39 and 56–57 | `lem-ip-collared-sobolev-besov-source-functional-cutoff` | Wikilinks to the Bessel-potential definition and canonical-embedding theorem occur within the Statement; they belong after it in “Statement references.” |

The following three page prerequisites are outside batch 30 and were not edited. Each is a fatal `ill-formed` page-body violation because the page format requires YAML frontmatter only.

| Page | Exact location | Evidence |
|---|---|---|
| `fredholm-elliptic-problems-and-the-elliptic-spectrum` | `library/pde/fredholm-elliptic-problems-and-the-elliptic-spectrum.md`, Markdown body immediately after frontmatter | Body begins “This page builds the elliptic Fredholm theory…” |
| `volume-integral-scattering-and-partial-wave-error` | `library/numerical-pdes-and-spatial-discretization/volume-integral-scattering-and-partial-wave-error.md`, Markdown body immediately after frontmatter | Body begins “This page defines the three-dimensional outgoing volume integral model…” and includes a later schematic. The diagram was not adjudicated because the page is outside batch 30. |
| `littlewood-paley-theory-and-square-functions` | `library/fourier-analysis/littlewood-paley-theory-and-square-functions.md`, Markdown body immediately after frontmatter | Body begins “This page develops the inhomogeneous Littlewood–Paley theory…” |

## Page verdicts

- `banach-range-invariance-and-eit-rates` (A): inventory and frontmatter presentation pass; no summary body or diagram. Its assigned mathematical items are reviewed above, with the remaining published-dependency findings routed separately.
- `banach-range-invariance-and-eit-rates-examples` (B): inventory and frontmatter presentation pass; no summary body or diagram. Both examples are mathematically sound.

No mathematical blocker remains within the assigned write scope. At the final read-only status check, autopilot reported the run as `PAUSED`; stage `3a-read` showed 42/109 covered with batch 30 still listed as missing, and nothing running. No batch-30 rendered source-evidence bundle was present in the run-named `research/` or `.autopilot/` file search. I did not recursively audit every transitive prerequisite proof or every bibliography entry of the opened published suppliers. The out-of-batch volume-integral diagram was not reviewed for correctness.
