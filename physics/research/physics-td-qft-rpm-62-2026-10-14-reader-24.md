# Step 3a reader report — batch 24

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Batch: `24`

## Inventory opened

Pages:

- `library/relativistic-particle-mechanics/rpm-external-charge.md` (A page, manifest order 417).
- `library/relativistic-particle-mechanics/rpm-external-charge-examples.md` (B page, manifest order 418).

Assigned items, read in their prerequisite order:

- `lem-rpm-curved-charge-action-variation`
- `lem-rpm-external-charge-local-ivp`
- `lem-rpm-charge-gauge-boundary`
- `def-rpm-charge-spin-model`
- `post-rpm-external-charge-action`
- `post-rpm-bmt-dipole-model`
- `pthm-rpm-external-charge-action-equivalence`
- `pthm-rpm-charge-mass-shell`
- `ex-rpm-pure-gauge-free-charge`

The batch-24 page manifest, cross-batch dependency record, proof contracts, and source review contracts were read as evidence, not verdicts. The 45 unique direct dependency IDs in the assigned manifest were opened at the statements or definitions used by the assigned arguments:

`cor-archimedean-reciprocal`, `cor-cauchy-reals-lub-complete`, `cor-mean-value-theorem`, `cor-zero-derivative-implies-constant`, `def-countable-choice`, `def-em-electromagnetic-tensor`, `def-em-si-conventions`, `def-gr-smooth-lorentzian-objects`, `def-inertial-frame-and-inertial-chart`, `def-real-numbers`, `def-rpm-charge-spin-model`, `def-rpm-spacetime-observer-and-worldline`, `def-sr-affine-minkowski-model`, `lem-em-particle-curve-variation`, `lem-gr-future-causal-classification-by-a-timelike-field`, `lem-of-inverse-positive`, `lem-of-naturals-positive`, `lem-rpm-charge-gauge-boundary`, `lem-rpm-curved-charge-action-variation`, `lem-rpm-external-charge-local-ivp`, `lem-test-function-cutoffs-and-euclidean-localization`, `post-rpm-external-charge-action`, `pthm-rpm-external-charge-action-equivalence`, `pthm-sr-momentum-and-four-force`, `thm-additivity-over-subintervals`, `thm-algebra-of-continuous-functions`, `thm-algebra-of-derivatives`, `thm-bolzano-weierstrass`, `thm-chain-rule`, `thm-chain-rule-for-total-derivatives`, `thm-clairaut-schwarz-mixed-partials`, `thm-composition-of-continuous-functions`, `thm-continuous-implies-integrable`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, `thm-extreme-value-metric`, `thm-ftc-first-part`, `thm-ftc-second-part`, `thm-gr-compact-metric-and-timelike-curve-variation`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `thm-heine-borel-rn`, `thm-integration-by-parts`, `thm-monotonicity-of-the-integral`, `thm-picard-lindelof-local-existence-and-uniqueness`, `thm-real-power-continuity-and-derivatives`, `thm-sr-proper-time-and-observer-decomposition`.

I read `research/math-imports.json` to identify the pinned mathematical snapshots. The following 27 direct suppliers are imported root-mathematics items and were left read-only: `cor-archimedean-reciprocal`, `cor-cauchy-reals-lub-complete`, `cor-mean-value-theorem`, `cor-zero-derivative-implies-constant`, `def-countable-choice`, `def-real-numbers`, `lem-of-inverse-positive`, `lem-of-naturals-positive`, `lem-test-function-cutoffs-and-euclidean-localization`, `thm-additivity-over-subintervals`, `thm-algebra-of-continuous-functions`, `thm-algebra-of-derivatives`, `thm-bolzano-weierstrass`, `thm-chain-rule`, `thm-chain-rule-for-total-derivatives`, `thm-clairaut-schwarz-mixed-partials`, `thm-composition-of-continuous-functions`, `thm-continuous-implies-integrable`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, `thm-extreme-value-metric`, `thm-ftc-first-part`, `thm-ftc-second-part`, `thm-heine-borel-rn`, `thm-integration-by-parts`, `thm-monotonicity-of-the-integral`, `thm-picard-lindelof-local-existence-and-uniqueness`, `thm-real-power-continuity-and-derivatives`.

I checked the field-domain compatibility of the four downstream physical consumers of `pthm-rpm-charge-mass-shell`: `pthm-rpm-constant-magnetic-helix`, `pthm-rpm-constant-electric-orbit`, `pthm-rpm-crossed-field-drift` (batch 28), and `pthm-rpm-relativistic-coulomb-scattering` (batch 29). The three uniform-field items give smooth global potentials. The Coulomb phase-system supplier has domain $(\mathbb R^3\setminus\{0\})\times\mathbb R^3$, and the cited scattering branch has $r\ge r_*>0$; these uses remain inside their field domains.

## Independent mathematical review

The curved variation formula has the correct sign for the library convention $F_{ab}=\partial_aA_b-\partial_bA_a$ and $F^\sharp$ defined by $g(F^\sharp(v),w)=F(w,v)$. The free and interaction terms differentiate to the stated covector coefficient. The chart subdivision, compact-interval integrals, and endpoint cancellation are supported by the named suppliers.

The original necessity argument in step 5.1 named a coordinate variation but did not construct a curve family. I repaired it by explicitly perturbing one chart coordinate with a compactly supported cutoff. The compact support and open chart/potential domain give a uniform coordinate neighborhood; continuity on the compact support keeps the varied tangent timelike and future-directed. Step 6.1 now integrates the resulting nonnegative coefficient over the whole interval and obtains the strict positive first variation.

The local IVP statement and proof require the starting event to lie in the open field domain. The mass-shell statement omitted that hypothesis even though its cited IVP requires $x_0\in O$. I added the open potential domain $O$ and $x_0\in O$ to the Statement, Facts & Assumptions, proof step, and `physical_scope`. The four downstream consumers remain compatible as noted above.

The model postulates remain explicitly adopted assumptions. The curved and variable-field BMT transport law is stated as a separate model extension; it is not presented as a consequence of the homogeneous flat-field paper, covariance, or experimental evidence. The assigned items make no experiment or measurement claim.

## Source review and citation repairs

The source sections examined were:

- David Tong, General Relativity, [author-hosted Chapter 1 PDF](https://davidtong.org/pdfs/teaching/general-relativity/gr1.pdf), §1.2.3 equation (1.21). It uses the interaction sign $-qA_\mu\dot x^\mu$; the library's $+qA(U)$ convention is now stated explicitly in the affected locators.
- David Tong, Electromagnetism, [Chapter 5 PDF](https://davidtong.org/pdfs/teaching/electromagnetism/electro4.pdf), §§5.3.1–5.3.2 and §5.4.1 for the tensor, force, and power conventions.
- Poisson, Pound, and Vega, [arXiv v3 PDF](https://arxiv.org/pdf/1102.0529v3), §18.1 equations (18.3)–(18.7), printed pp. 96–97. The locator was corrected from §5.2.1. This source uses a coupled field-particle model and warns that its point-particle equation is formal at the singular self-field; it is not the prescribed smooth external-field model adopted here.
- Bargmann, Michel, and Telegdi, [1959 paper](https://www.ihes.fr/~vergne/LouisMichel/publications/PhysRevLett.2.435.pdf), equation (7), p. 1, for homogeneous flat fields.
- László, [PSI lecture note](https://www.psi.ch/en/media/48911/download), pp. 6–7, for curved TBMT/Fermi–Walker context and a separate EDM term.
- Colding, [MIT ODE lecture note](https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec23.pdf), pp. 1–4, for the Picard–Lindelöf context.

These sources provide context and conventions; the local prescribed-field action and curved BMT extension remain explicit model assumptions.

The corresponding source locators/URLs were corrected in the assigned items that cite them: `lem-rpm-curved-charge-action-variation`, `lem-rpm-external-charge-local-ivp`, `lem-rpm-charge-gauge-boundary`, `def-rpm-charge-spin-model`, `post-rpm-external-charge-action`, `pthm-rpm-external-charge-action-equivalence`, `pthm-rpm-charge-mass-shell`, and `ex-rpm-pure-gauge-free-charge`. No published item or other batch was edited.

## Repairs and evidence

- `items/lem-rpm-curved-charge-action-variation.md`: constructed the missing chart-supported test variation and simplified the positivity contradiction. The proof contract now matches steps 5.1 and 6.1 and no longer attributes Heine–Borel to the witness step. `verification.judge` was already absent.
- `items/pthm-rpm-charge-mass-shell.md`: stated $x_0\in O$ wherever the local solution is claimed. The proof contract's step 1.1 now records the same hypothesis. `verification.judge` was already absent.
- The postulate source-review contract now records Tong's opposite interaction sign and the Poisson–Pound–Vega source's coupled-field/self-field scope while retaining the existing review verdict.
- Source locators were corrected in the eight assigned items listed above. These citation edits do not change the mathematical claims or dependency interfaces.

## Uneditable findings

Seven direct published proof suppliers are marked `status: published` and contain a Proof section, but their frontmatter lacks the required `verification.audited` or `verification.verified` publication marker. `lem-em-particle-curve-variation` has a precheck and judge record only; the schema says those do not satisfy publication. The exact suppliers and assigned consumers are in the findings JSON. These are publication-metadata defects; I do not claim that their mathematical statements are false, and I did not edit published content.

- `def-gr-smooth-lorentzian-objects` — precheck only; reached by `lem-rpm-curved-charge-action-variation`.
- `lem-em-particle-curve-variation` — precheck and judge only; reached by `lem-rpm-curved-charge-action-variation`.
- `lem-gr-future-causal-classification-by-a-timelike-field` — precheck only; reached by `lem-rpm-curved-charge-action-variation`.
- `pthm-sr-momentum-and-four-force` — no verification block; reached by `pthm-rpm-charge-mass-shell`.
- `thm-gr-compact-metric-and-timelike-curve-variation` — precheck only; reached by `lem-rpm-curved-charge-action-variation`.
- `thm-gr-nondegenerate-levi-civita-and-tensor-derivative` — precheck only; reached by `lem-rpm-curved-charge-action-variation`.
- `thm-sr-proper-time-and-observer-decomposition` — precheck only; reached by `def-rpm-charge-spin-model`.

## Page verdicts

- `rpm-external-charge`: pass after the two in-flight repairs. Its summary accurately limits the action to a prescribed external field and separates the BMT model extension.
- `rpm-external-charge-examples`: pass. Its summary accurately describes the pure-gauge calculation and its conditional model status. The B-page prose was not edited.

## Validation and blocker

Reflow exited successfully for all eight changed items; proof-bearing carriers were unchanged by reflow. Precheck exited successfully for all eight; proof-bearing items passed and the definition had zero proof checks and zero failures. The repaired variation lemma was reflowed and prechecked again after its final proof wording. The final proof-layout check reported 8 items, 23 steps, and 0 defects. The direct proof-layout invocation initially could not resolve the sibling web checkout's `@/components` TypeScript alias; a rerun of the same application renderer with a temporary resolver matching the web `tsconfig.json` `@/*` mapping passed. That temporary file was removed.

The autopilot status remained at Step 3a reader with no worker in flight. There is no blocker to this reader handoff; the seven published supplier metadata findings remain for owner routing.
