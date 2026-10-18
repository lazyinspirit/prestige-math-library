# Batch 65 Step 3a adjudication

Run: numerical-analysis-remaining-71-2026-10-17. Group: batch-65.

Reviewed scope, reader report/findings, refuter completion, producer definition, contract and manifest. The routed batch-54 grammar finding is historical and nonfatal; current definition joins the label clause and permits full common faces (including vertices). No producer edit made. Published mesh supplier still has an explicit indexing defect; owner maintenance is required.

Completed review in dependency order:

- `lem-unit-cube-h01-separability-and-l2-compactness`: Reviewed all five steps: first-coordinate FTC proves Poincare also for d=1 with empty transverse tuple; zero extension of compactly supported approximants to the side-3 torus preserves H1; rescaling and integration by parts give the weighted Parseval tail. Countable base selection uses AC_omega; successive Fourier subsequences can be selected canonically by real Bolzano-Weierstrass extraction, without DC. Finite-mode convergence plus uniform N^-2 tail proves L2 compactness. Coordinate repair is sound.

- `lem-periodic-averaging-on-cube`: Reviewed all three steps: compact support keeps intersecting epsilon cells within Q for small epsilon, zero extension controls the grid Riemann sum, signed L1 follows by positive/negative parts, and at most C_d epsilon^-d cells give the L2 bound for 0<epsilon<=1. Dense smooth tests and uniform bounds extend to every L2 test; no uniform pointwise regularity of g is assumed.

- `lem-periodic-cell-poincare`: Reviewed all three steps: periodic smooth derivatives have mean zero; coordinate telescoping, integral Cauchy-Schwarz and Tonelli yield the factor sqrt(d); subtracting approximant means preserves periodic smoothness and H1 convergence. Closedness and norm equivalence give completeness. Zero gradient forces the zero mean-zero function; indexing 0<=i<d covers d=1.

- `lem-periodic-cell-corrector-wellposedness`: Reviewed all three steps: gradient-norm Hilbert completeness follows from periodic Poincare and the closed Sobolev subspace. Bounded form <=Lambda and coercivity >=lambda and RHS <=Lambda|p| satisfy real Lax-Milgram under declared Countable Choice. Testing with chi handles zero norm before division; uniqueness proves linearity, including p=0. No coefficient differentiability is used.

- `thm-two-scale-compactness-for-l2-bounded-sequences`: All three steps checked. Expand squared finite-product tests to apply averaging to each cross term, giving sampled norm convergence. Countable rational test span is dense; diagonal scalar convergence defines a bounded rational-linear functional, whose continuous extension is real-linear. Riesz and limsup bounds on each fixed smooth difference yield convergence for every allowed test. Zero bounded sequence and nonmonotone positive scales cause no exception.

- `def-periodic-cell-correctors-and-effective-tensor`: Definition checked against uniqueness and linearity of the corrector. Explicit PDE-label i to library-index i-1 map handles coordinates, derivatives and tensor columns; integrals are finite by bounded coefficient and L2 gradient on unit measure. No symmetry is assumed by definition; it is proved downstream. Consumer uses reviewed for the same label convention.

- `lem-two-scale-gradient-decomposition-for-h01`: All six steps reviewed. Inserted the missing definition H=G-grad_x u before the first use; statement and prerequisites unchanged. Finite component subsequences preserve weak H1 and strong L2 limits. Divergence-free sampled fields have no epsilon^-1 divergence term; strong L2 identifies the scalar limit. Countable Fourier tests imply zero mean and frequency-parallel H; potential coefficients divided by 2pi i |k|^2 give a real product-measurable H1 periodic mean-zero limit with the required integrable norm. d=1 has trivial transverse subspace and still works.

- `alg-fehmm-periodic-cell-micro-macro`: Full defining procedure checked: compatible diagonal macro labels, finite matching periodic micro mesh, positive hat means and explicit mean-zero basis, empty-space branches, exact-integral data, deterministic pivot search and row operations, backward substitution and output propagation. Solver/basis labels map to zero-based library coordinates. Correctness is proved separately in the wellposedness lemma. Published reference-simplex indexing defect is retained for owner maintenance and is not repaired here; actual triangles, P1 spaces and algorithmic systems have an explicit geometric meaning.

- `lem-fehmm-one-dimensional-nonaligned-resonance-bound`: Both steps checked. For b=a or the generally nonperiodic sampled b, cb/b-1 has zero integral; Fubini proves the periodic weak derivative of its primitive and Fourier H1 approximation establishes V# membership. Constant flux solves the periodic-coupling equation and coercivity gives uniqueness. Whole periods plus one remainder give |Ir-I|<=1/(lambda r), hence the stated weaker factor 2, with Ir,I>=1/Lambda. r=1 and constant coefficients are covered.

- `lem-fehmm-period-aligned-sampling-has-zero-resonance`: Both steps checked. Positive integer m is essential: scaled corrector is periodic and its pulled-back flux remains divergence-free by Fourier approximation with a bounded L2 composition operator. Mean subtraction fixes uniqueness. Integer-side translated box integrals equal m^d cell integrals, including arbitrary phase, yielding exactly A*. Statement concerns continuum comparator; finite micro error remains.

- `thm-periodic-effective-tensor-symmetric-elliptic`: All three steps checked. Cross-testing the p and q cell equations yields the symmetric energy pairing (the explanatory gradient label is harmless since both cross identities are given). Mean-zero periodic gradients give lower ellipticity through Cauchy-Schwarz. Exact variational expansion establishes minimization and competitor zero gives Lambda upper bound, including p=0 and lambda=Lambda.

- `lem-fehmm-micro-cell-solves-wellposedness`: All four steps checked against current algorithm. Continuous periodic nodal hats have H1 weak derivatives by facet cancellation; opposite-edge cancellation gives Fourier derivative identities and H1 periodic approximation. Positive hat integrals give the mean constraint basis, including N=1. Full and finite coercive forms yield unique solutions for every sampled bounded b, even without unit periodicity of b. Variational energy gives symmetry and lambda/Lambda bounds, hence macro SPD, including M=0. Row equivalence and nonsingular Schur block give a pivot at each finite stage; triangular substitution returns the unique solution.

- `lem-periodic-flux-corrector`: Both steps checked. Corrector flux minus its average has zero mode and divergence zero; each nonzero Fourier coefficient is perpendicular to its integer frequency. Antisymmetric coefficient formula has divergence q with the displayed sign and a weighted square-summable H1 bound. Symmetric Fourier truncations prove periodic closure and reality. In d=1 the divergence-free mean-zero flux is zero, so sigma=0 works. Shen Proposition 2.1.1 printed pp26-27 checked, including its Poisson construction.

- `thm-periodic-dirichlet-homogenization-on-unit-cube`: All eight steps checked. Poincare gives uniform energy bounds and real Lax-Milgram applies. Rational real trigonometric polynomials are H1-dense in V#. Oscillating smooth tests identify the two-scale variational identity; bounded a times each smooth periodic factor can be approximated in L2 with the uniform rescaling bound, so measurable coefficients are admissible. Slice functionals are L2 and vanish by dense slow tests; the countable H1-dense family gives one full-measure set for cell uniqueness. Averaged flux yields A* and density gives the full equation. Uniqueness forces every weak cluster limit and the whole family. Zero datum and nonmonotone scales are covered.

- `ex-layered-periodic-effective-tensor`: Both steps checked. Positive phase values and 0<rho<1 give bounded reciprocal; one-dimensional mean-zero primitive has smooth periodic H1 approximants whose lift preserves the norm. Normal flux is constant harmonic mean, tangential zero correctors satisfy the equation by periodic FTC and density, and no off-diagonal flux occurs. Equal phases reduce to a scalar multiple of identity; endpoints are excluded by the stated hypothesis.

- `ex-nonaligned-periodic-sampling-resonance`: Both steps checked directly: reciprocal integral over length 3/2 is 1/2+1/4+1/2=5/4, normalized mean 5/6, inverse 6/5 versus full-cell inverse 4/3. Absolute discrepancy 2/15 and conservative upper bound 16/3 are correct. Half-open endpoint values affect only null sets; sampling pullback preserves these classes.

- `ex-periodic-effective-tensor-high-contrast-no-uniform-condition-number`: Both steps checked. One-dimensional primitive and lifted periodic approximation give normal eigenvalue 2kappa/(1+kappa), and periodic tangential FTC gives (1+kappa)/2. The squared difference (1-kappa)^2 establishes ordering; condition number is the quotient, equals 1 at kappa=1, and diverges only in the excluded zero endpoint. Each fixed kappa remains uniformly elliptic.

- `cor-periodic-dirichlet-homogenization-strong-l2`: Both steps checked. Testing the oscillatory equation gives an explicit uniform H1 bound, with zero gradient treated before division. Any sequence violating strong convergence has a compact L2 subsequence whose weak limit is the established u0, contradiction. No rate or coefficient regularity beyond bounded periodic ellipticity is asserted.

- `lem-fehmm-micro-tensor-approximation-error`: Both steps checked. Same-coefficient nested-space Galerkin orthogonality gives Pythagoras and exact best approximation in the weighted gradient norm. Expanding full/discrete tensor energy cancels full-equation cross terms, yielding the bilinear error Gram identity. Unit p,q Cauchy-Schwarz gives operator norm <=eta_K^2. Empty W has the same identities and no approximation rate is asserted.

- `thm-periodic-boundary-layer-corrector-estimate`: All four steps checked. Bounded C1 factors times scaled periodic H1 correctors are H1; the cutoff correction has compact support so batch69 compact-support closure supplies H01 membership. Flux identity has the epsilon factor and antisymmetry cancels the symmetric test Hessian; density extends the residual from compact smooth tests. On a cube, C_d epsilon^(1-d) boundary-strip cells give sqrt(epsilon) L2 rescaling for arbitrary periodic L2 functions, including d=1. Cutoff derivative terms and coercivity yield the energy bound; Poincare plus an O(epsilon) corrector L2 norm gives the final estimate. Constants depend on fixed C2 data, not epsilon. Shen smoothed estimate is related context only.

- `thm-fehmm-macro-micro-resonance-error-decomposition`: All three steps checked. P1 gradients are cell constants, so the tensor operator difference controls the form exactly by D0<=Delta. Comparing equal loads against UH-VH and using reference-form norm <=Lambda yields (lambda+Lambda)/(lambda-D0) after the final triangle inequality; zero error needs no division. Both coefficients increase on [0,lambda), giving the claimed Delta denominators after best approximation. Delta=0, empty macro space and integer aligned sampling are consistent; no accuracy is inferred when Delta>=lambda.


Sources checked: [Allaire](https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf), §1.2.2–1.2.3 pp7–9, §1.3.1 pp12–15 and §1.3.2 pp15–19; [Shen](https://arxiv.org/pdf/1710.11257), §1.2 printed pp10–14, §1.3 pp14–18, Proposition 2.1.1 pp26–27 and Lemma 2.2.1/Theorem 2.2.2 pp31–33. The local boundary proof is an unsmoothed C2 estimate, distinct from Shen’s smoothed H2 expansion. Allaire Remark 1.3.7 is not used for boundary compatibility. Ciarlet–Stohrer §§2–3 are FE-HMM assembly context; all error inequalities here have local proofs.

Historical comparison and dispositions:

| Carrier | Pre-reader item SHA256 | Reader-post item SHA256 | Disposition |
|---|---|---|---|
| `alg-fehmm-periodic-cell-micro-macro` | `38df78b01a365b42e6e3dc8f69f0c9e990ff3b4934c77be56088beba279b7935` | `8fdbee68e2ce2117bf568e1eccf4f8ad44bf3c1d23a5f53ed38c9e6413b15a96` | escalated |
| `cor-periodic-dirichlet-homogenization-strong-l2` | `68cae29557bc31c39acf7dfe915cc7cc0c775de2d325858dadaf1c01fd3d4040` | `68cae29557bc31c39acf7dfe915cc7cc0c775de2d325858dadaf1c01fd3d4040` | reviewed_no_defect |
| `def-periodic-cell-correctors-and-effective-tensor` | `35cda4f402725854fafb6b875e0bf2f018658a98f0bd5827632f430c4b1e2af3` | `5254c2aed42c2c9e6c9fc2cd44c68f269d154341b630971cff150541ce160a11` | escalated |
| `ex-layered-periodic-effective-tensor` | `576259d2fb42fb3f68f976f0ef14f2d00a8c0626312403f075dc4ed2c4e04e7b` | `5a1a131b8012e6e641cefa2cbd090acea8405714ed169f807f6c9054fe103e61` | escalated |
| `ex-periodic-effective-tensor-high-contrast-no-uniform-condition-number` | `1e0face02c719cd62c7948d06acbc85a4df37684eff277a833ef1c9c37b95167` | `9eccc75ef1f6e9307e845990280406963371c2b20491af46bb3b49817d9905c1` | escalated |
| `lem-fehmm-micro-cell-solves-wellposedness` | `2bd4c435d50f019a38f9a225cdf19c12d8f4ccee56ad5f98d0cf6f4f1aed944a` | `ddb985c6f708e96399e1efc3ceaf08b94399b40c6813cf5f3527ac28dd7d675e` | escalated |
| `lem-fehmm-micro-tensor-approximation-error` | `fbae29aa19c481096346fec1d5ffbf976c7312f10d7cdfb2f2eecd9495d3dc82` | `fbae29aa19c481096346fec1d5ffbf976c7312f10d7cdfb2f2eecd9495d3dc82` | reviewed_no_defect |
| `lem-fehmm-one-dimensional-nonaligned-resonance-bound` | `53fbf21d586261fb3557606cdb9cb8ac77804603ae1f0b9e2971d0037741b4db` | `5ff8bda3b44bf735cf6a24a17690049d5f2d8bec2d583caaada9dda2e7a7c27d` | escalated |
| `lem-fehmm-period-aligned-sampling-has-zero-resonance` | `b5de0426f86f2698ca782f9f337c535a22251520db427380184af8889d50e776` | `b5de0426f86f2698ca782f9f337c535a22251520db427380184af8889d50e776` | reviewed_no_defect |
| `lem-periodic-cell-poincare` | `db3f18ba65242e7703022a2a76b6af251bb8553c646f42032b13ca3482ded790` | `4c59f5d6ad0f006e3e75159941600598c47973c7a5399e8cd45c7cbc2a04ecb8` | escalated |
| `lem-periodic-flux-corrector` | `8c4e61c6dcf8e354a222861df06c4de48260e16db9d7aa2e4e4bdf647e4df587` | `0e54ac72e6553f4d30cece36e34382fcef9c15f304d8203a5063b45fe4f1d9d0` | escalated |
| `lem-two-scale-gradient-decomposition-for-h01` | `874be7e4cca02fb9f38e98b1e9969fc353abce1bb8e58c5b1460f254a61ed743` | `b0a8117053d9b1b154e5dbe9307c30326fc5ba818175d17dc2b29dcc454f3719` | escalated |
| `lem-unit-cube-h01-separability-and-l2-compactness` | `213dad69a886d1781d3317725f682244967b2743740abe55d48a1c2a68fa452c` | `833eb8f62f84d569321f5510f63ffd341e41fd1840dec8cb965539f13e0c5faa` | escalated |
| `thm-fehmm-macro-micro-resonance-error-decomposition` | `a18c632debc2379b79f96fe6f825d3544da04eee9b86d9cd394130cb2910362b` | `a18c632debc2379b79f96fe6f825d3544da04eee9b86d9cd394130cb2910362b` | reviewed_no_defect |
| `thm-periodic-boundary-layer-corrector-estimate` | `12685b194ed026ac737e07008adad58dbd16e0278b2ffab80433fa10a616ca82` | `5d5c2881bbdb3cf42d9d8c619f909e5b13679ae37365ce02fe3d8d1f9bccc658` | escalated |
| `thm-periodic-dirichlet-homogenization-on-unit-cube` | `3913dbb22709b21fba1394bea35c292285d5a9dd2752d81eade64386c91c1263` | `3913dbb22709b21fba1394bea35c292285d5a9dd2752d81eade64386c91c1263` | amended_repair |
| `thm-periodic-effective-tensor-symmetric-elliptic` | `f39ab3484d58c4e0b8ea2638b3bbe6cc9adf02dd9212d63376f75a9648b1f084` | `f39ab3484d58c4e0b8ea2638b3bbe6cc9adf02dd9212d63376f75a9648b1f084` | amended_repair |

The 11 source-edited reader carriers matched reader-post bytes at review entry. Their exact pre-reader sources were not recovered from current owned archives or HEAD; the reader narrative supports the described edits but is not an authenticated exhaustive preimage. Those historical acceptances remain escalated pending authenticated bytes or explicit owner current-content authorization. Current mathematical risk reviews are complete, without historical acceptance or judge credit. The six source-identical routes are supporting metadata, except two now amended for the independently found source-locator corrections.

The two NVB grammar obligations share one nonfatal-recorded row. Current producer review is read-only and preserves the exact original dependency path and immutable producer pre-reader fingerprints in both decisions. The published simplex indexing finding remains open and escalated; its intended repair is simple but outside this dispatch’s published-write authority. No published source was changed.

Additional completed local repairs: defined H=G-grad_x u in gradient proof 2.2; corrected the eight source-locator records listed in batch-65.source-evidence.json and synchronized the manifest. Three corrections (`lem-periodic-averaging-on-cube`, `thm-two-scale-compactness-for-l2-bounded-sequences`, `lem-periodic-cell-corrector-wellposedness`) are risk-only carriers with no owed touched decision: the engine/owner must route those new closed defect rows before ownership closure. No unowed decisions were invented. All changes preserve Statements and Definitions; consumer contracts need no mathematical repair from these alpha edits.

No claim is made that historical reader repairs were accepted, that published maintenance is complete, or that the engine gate battery passed. Focused local checks are recorded below.

Local validation after final edits:

- Reflow: eight edited items unchanged.
- Precheck: seven proof-bearing edited items, zero failures; one definition is not applicable.
- Rendercheck: eight files, no errors.
- Strict proof-contract check: all 26 scoped entries, zero errors and zero warnings after synchronizing exact current supplier quotations, omitted use maps and the gradient derivation claim. These mechanical synchronizations create no defect-ledger rows.
- Risk report, before review and after review with `--require-reviewed`: zero errors; all 21 HIGH/CRITICAL entries have specific complete current risk reviews. Historical acceptance and published supplier maintenance remain open as stated above.
- Final single batched proof-layout command: `proof-layout: 8 items, 30 steps, 0 defects` (exit 0).
- Obligation inventory: exactly 20 decisions for 17 touched carriers, two reader findings and one refuter finding. Twelve escalations remain: 11 unknown historical preimages and one published supplier repair.
- Frontier consumer input updated for current batch-54 mesh uses and batch-69 compact-support H1 supplier; refresh completed.
- Defect ledger append: 11 rows, including eight source corrections, the gradient notation repair, one shared historical nonfatal grammar row and the open published typing row. No judge/stamp/whole-run gate was invoked.

Current edited source hashes (raw SHA256):

- `lem-two-scale-gradient-decomposition-for-h01`: `79d455848fc38e91df0dd2cdc693c52cfbebfca42bc64878046767516ccb7672`.
- `lem-periodic-averaging-on-cube`: `0bcedfcbd522a235ffbf278b20a0c81af3b803f64b36016be463d6da2f4caf89`.
- `lem-periodic-cell-corrector-wellposedness`: `ea66def97d9ce8edaffffa8539e3e2e0f9f61149dcd2040df25047183e5a1d90`.
- `def-periodic-cell-correctors-and-effective-tensor`: `53cbc53495dbdac59c5d8d894404e04fb75e20483cee5d12b5971099cda61b2f`.
- `thm-two-scale-compactness-for-l2-bounded-sequences`: `c97bdcf36a8b9d726e777f489b5dee81eb669c63ee0a5fd5946bf5b084f3c02f`.
- `thm-periodic-dirichlet-homogenization-on-unit-cube`: `abc67ea3aa33d089fbfc11eda2079145130bfc0c5615efc809328987f318150b`.
- `thm-periodic-boundary-layer-corrector-estimate`: `3f452ef02b6e09926c80651e7cca079f3a114859e051c5834530085398106032`.
- `thm-periodic-effective-tensor-symmetric-elliptic`: `2bd24747b0296c2e0b33038206eeb6a629b2c3ff3be0a28afd9df82db9f9422d`.

Owner handoff: recover/authenticate the 11 pre-reader source files or explicitly authorize bounded current-content dispositions; perform the published mesh label-map maintenance and affected consumer checks; route the three risk-only source corrections. Until those decisions are made, batch 65 is not ready for acceptance/closure.
