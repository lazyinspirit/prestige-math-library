# Step 3a reader report — batch 13

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Scope: batch `13`

## Inventory opened

Assigned pages:

- `library/einstein-maxwell-models/emg-g02.md` (A page).
- `library/einstein-maxwell-models/emg-g02-examples.md` (B page).

Assigned items, read in dependency order:

- `def-emg-topological-sector` (definition).
- `pthm-emg-potentials-and-topological-limits` (physics theorem).
- `ex-emg-classical-flux-versus-normalization` (example).

The batch proof contract and manifest were opened as navigation/context, not as verdicts. Page context opened for the direct page requirements included `emg-g01`, `emg-mg02`, and the current `emg-g03` consumer summary. The assigned dependency carriers reviewed for the arguments include `def-emg-geometry-units`, `def-emg-local-potentials-and-circle-data`, `post-emg-covariant-maxwell`, `lem-emg-local-potential-construction`, `lem-emg-sphere-flux-holonomy`, `lem-emg-circle-connection-gluing`, and `thm-stokes-theorem-for-smooth-singular-chains`.

Relevant mathematical statements and proof routes opened include `def-emg-lorentzian-forms`, `lem-emg-lorentz-hodge-calculus`, `lem-emg-observer-field-decomposition`, `def-em-electromagnetic-tensor`, `def-em-si-conventions`, `post-em-minkowski-physical-model`, `def-principal-g-bundle-and-associated-fiber-bundle`, `def-de-rham-cohomology`, and `def-emg-set-size-and-class-schema`; the seven local EMG foundational conventions on `emg-mg02`; the local potential, circle gluing, and sphere-flux proofs; and the Stokes/integration and calculus suppliers used in those calculations. In particular, I opened the Stokes theorem's direct simplex-chain, integral, pullback and exterior-derivative suppliers, plus `prop-integration-of-top-forms-by-finite-parametrizations` and its direct inputs. The authored local proofs were checked against their stated hypotheses and exact formulas.

Additional supplier IDs opened for these uses: `def-emg-finite-real-supremum-domain`, `def-emg-real-metric-axiom-convention`, `lem-emg-metric-axioms-imply-nonnegativity`, `def-emg-explicit-power-regimes`, `lem-emg-positive-square-root-smoothness`, `lem-emg-sequence-limit-criterion-with-choice`, `def-emg-boundaryless-completeness-domain`, `def-smooth-singular-chain-and-cochain-complexes`, `def-integral-of-a-form-over-a-smooth-singular-simplex`, `lem-simplex-integrals-are-independent-of-affine-coordinate-identification`, `lem-stokes-theorem-for-the-standard-simplex`, `thm-the-exterior-derivative-commutes-with-pullback`, `prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges`, `prop-integration-over-an-oriented-embedded-submanifold`, `prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components`, `lem-c-one-images-of-content-zero-compact-sets-have-content-zero`, `lem-integral-additivity-over-a-content-zero-almost-partition`, `thm-change-of-variables-for-compact-jordan-sets`, `lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary`, `thm-heine-borel-rn`, `thm-nth-roots-exist`, `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, `thm-newton-leibniz-with-interior-derivative`, `thm-continuous-implies-integrable`, `thm-ftc-first-part`, `thm-chain-rule-for-total-derivatives`, `thm-kernel-and-fibres-of-complex-exponential`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-sine-and-cosine-parametrize-the-unit-circle`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-sine-and-cosine-derivatives`, `cor-differentiable-implies-continuous`, `def-ck-euclidean-maps-and-diffeomorphisms`, and `thm-ck-euclidean-maps-closed-under-algebra-and-composition`.

## Review findings

### `def-emg-topological-sector` — pass

The definition distinguishes the smooth real two-form branch from the optional fixed-bundle, fixed-normalization connection data. The local/global potential distinction is explicit; the transition convention, local connection forms, units, gauge transformations, and holonomy sign convention are compatible with the circle-gluing supplier. It makes no claim that every closed field is a curvature and does not import a quantum phase or charge-quantization rule.

### `pthm-emg-potentials-and-topological-limits` — pass

The local radial formula has the required star-shaped coordinate-domain hypothesis and length-coordinate unit convention. The coefficient computation uses the homogeneous Maxwell clause $dF=0$, and the exact radial-primitive supplier proves smoothness and $dA=F$. In the punctured example, the Cartesian field is smooth on the stated domain, the outward sphere flux has sign $+4\pi b$, and the finite smooth singular cycle/Stokes argument rules out a global potential for $b\ne0$. The north/south patch forms have the stated difference $-2b\,d\phi$; for the declared convention $a_S=a_N+df_{NS}$, single-valuedness of $e^{-2ib\phi/\kappa_0}$ is equivalent to $2b/\kappa_0\in\mathbb Z$. The flat example's holonomy $e^{-2\pi ia}$ and integer gauge removal have consistent signs. The statement and physical scope do not claim a coupled Einstein solution, a physical monopole, or empirical charge quantization.

### `ex-emg-classical-flux-versus-normalization` — pass

The example uses only the theorem's exact conditional calculations. The choices $b=\kappa_0/2$, $b=\kappa_0/(2\sqrt2)$, and $b=0$ give respectively integer normalized transition number $1$, noninteger $1/\sqrt2$, and the zero field. The flat cases $a=1/2$ and $a=1$ give holonomies $-1$ and $1$, with the latter removed by the single-valued map $w\mapsto w^{-1}$. The example labels these as constructed parameters, not observations.

## Edit and evidence

Edited only the assigned A-page prose in `library/einstein-maxwell-models/emg-g02.md`:

1. Replaced the undefined phrase “nonbounding sphere” with an explicit statement: a global potential $F=dA$ forces $\int_cF=0$ for each finite smooth singular 2-chain $c$ with $\partial c=0$, by the named Stokes theorem; the punctured-space example supplies a cycle with nonzero flux. Evidence: `def-emg-topological-sector` defines closedness and global potential, `thm-stokes-theorem-for-smooth-singular-chains` states the finite-chain formula, and `lem-emg-sphere-flux-holonomy` constructs the cycle and evaluates its flux.
2. Corrected the `tikzcd` cover diagram. The former arrows sent $O$ to a blank cell and directly to $S^2_r$, despite the prose describing the two composites through $U_N$ and $U_S$. The diagram now shows $O\hookrightarrow U_N\hookrightarrow S^2_r$ and $O\hookrightarrow U_S\hookrightarrow S^2_r$, with both composites the same subset inclusion.

The A-page edit does not change any item Statement or Definition. I opened the current `emg-g03` page summary, the direct page consumer, and found no use that conflicts with the clarified cycle statement. No B-page prose or item was edited. No proof contract, judge record, or item validator was changed or run; no item was edited, so proof reflow and proof-layout were not applicable.

## Source checks

- [David Tong, General Relativity](https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S2.html), §§2.4.2–2.4.3: the two-form/potential description and closed-versus-exact distinction. [David Tong, General Relativity, §3.2.5](https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html): curved Maxwell formulations, used only as source context; the local SI signs and adopted status are stated in the postulate.
- [David Tong, Gauge Theory](https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf), §1.1.2, printed pp. 6–8: north/south patch potentials and overlap transformation. The adjacent wavefunction-phase Dirac condition is not adopted by these items.
- [Guillemin and Haine, Differential Forms](https://math.mit.edu/classes/18.952/2019SP/18.952_book_2019.pdf), §§2.4 and 2.6, especially Theorem 2.6.15: exterior-derivative/homotopy context. The radial formula used here is proved locally rather than attributed to the source.
- [Scott Morrison, Connections on Principal Fibre Bundles](https://tqft.net/papers/ConnectionsAndBundles.pdf), §§5.1 and 7.1–7.3: horizontal-subspace and local connection/curvature conventions.
- [H. S. Reall, General Relativity](https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf), §6.2, equations (6.7)–(6.8), and §8.5, equations (8.55)–(8.59): curved Maxwell and Hodge conventions in Gaussian units. The source's index/sign and unit conventions are converted explicitly in the authored postulate.
- [David Tong, Electromagnetism](https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf), §§1.1–1.2 and 5.3–5.4: SI Maxwell and tensor conventions. The source uses signature (+---) and a different covariant tensor convention; the authored items state the conversion.
- [BIPM, SI Brochure, 9th ed., version 4.01](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf), §§2.2 and 2.3.1: exact SI values of $c,e$, experimentally determined $\mu_0$, and exact $\varepsilon_0\mu_0=1/c^2$ relation.

## Uneditable defects and verdicts

No confirmed defect requiring an out-of-scope finding was identified in the inspected dependency statements and proof steps. The two A-page issues above were repaired in the assigned page and are therefore not findings.

- `emg-g02`: pass after the page-only repairs; its summaries and inclusion diagram now match the assigned definition and theorem.
- `emg-g02-examples`: pass; its summary and example match the assigned calculations and empirical-status qualifications.

Blocker: none for this batch.

## Coverage limitation

I did not independently audit the complete transitive proof closure beneath every real-analysis, complex-analysis, bundle, and geometry prerequisite in the 22-item local circle-data definition dependency list. I checked the exact interfaces and proof uses relevant to the assigned claims, including the radial primitive, patch/gluing, phase-lift, sphere-cycle, Stokes, and integration arguments. The report and empty findings file do not certify those unopened transitive proofs or the entire run.
