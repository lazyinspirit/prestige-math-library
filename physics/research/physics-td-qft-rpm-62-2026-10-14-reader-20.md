# Step 3a reader report — batch 20

Run: physics-td-qft-rpm-62-2026-10-14  
Role: reader  
Scope: batch 20

## Inventory opened

Assigned pages:

- library/thermodynamics/td-continuum-heat-model.md (td-continuum-heat-model, A page).
- library/thermodynamics/td-continuum-heat-model-examples.md (td-continuum-heat-model-examples, B page).

Assigned items, reviewed against their exact dependencies:

- def-td-rectangular-local-equilibrium-fields
- def-td-regular-elastic-collision-model
- post-td-fourier-conductivity
- post-td-local-energy-balance
- post-td-local-equilibrium-entropy-density
- post-td-boltzmann-molecular-chaos-model
- lem-td-rectangular-poincare
- pthm-td-collision-h-theorem
- pthm-td-fourier-entropy-production
- pthm-td-constant-conductivity-neumann-existence
- pthm-td-neumann-heat-relaxation
- rem-td-solution-existence-scope
- ex-td-insulated-polynomial-relaxation
- ex-td-diffusive-infinite-propagation

The exact mathematical and physical suppliers opened were def-td-si-quantities, def-tdmath-elastic-collision-kernel, post-td-first-law-energy, post-td-concave-fundamental-entropy, thm-newton-leibniz-with-interior-derivative, thm-riemann-fubini-on-product-rectangles, and the current/pre-reader versions of thm-tdmath-regular-collision-entropy. For the heat-kernel chain I read def-countable-choice, cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions, def-ck-and-multi-index-notation-in-several-variables, def-heat-kernel, lem-heat-kernel-normalisation-scaling-and-derivatives, lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-linear-change-of-variables-for-lebesgue-measure, and thm-heat-cauchy-solution-for-bounded-continuous-data.

I also opened the required page-level context: td-entropy-foundation, td-math-local-pfaff-geometry, td-math-mixture-dynamics-and-shells, and the published the-heat-kernel-and-the-cauchy-problem page. The page summaries and supplier interfaces match their stated roles; the geometry page adds no item-level premise to the assigned claims.

## Review and repairs

- def-td-rectangular-local-equilibrium-fields: the field domains, regularity, temperature/energy types, and units are explicit. I clarified that j_Q is an oriented thermal-energy flux density and that “local-equilibrium field record” names this model's field class rather than asserting microscopic equilibration.
- def-td-regular-elastic-collision-model: the collision set is the three-dimensional restriction of the mathematical supplier; the conservation constraints, Borel measure, exchange symmetries, sigma-finiteness, rate role, and non-derivation caveat are present.
- post-td-fourier-conductivity: the sign, tensor type, units, symmetric-part positivity, and non-universality are explicit. I clarified its scope as an idealized adopted first-order continuum law and stated that no quantitative gradient threshold or empirically validated coefficient range is supplied. Its direct consumers, pthm-td-fourier-entropy-production and pthm-td-constant-conductivity-neumann-existence, were checked and remain conditional on the postulate.
- post-td-local-energy-balance: the local equation, boundary condition, regularity, units, sign convention, and distinction from the global first-law process balance are explicit.
- post-td-local-equilibrium-entropy-density: s(T) is defined by an integral with the correct positive-temperature domain, heat-capacity units, reference density, and constant-capacity specialization. Its relation to the macroscopic entropy postulate is explicitly adopted rather than derived.
- post-td-boltzmann-molecular-chaos-model: the periodic domain, one-particle density, units, regularity, collision weak identity, and one-sided incoming factorization are explicit. I clarified that “dilute-gas” applicability is qualitative and that no density threshold, hard-sphere/Boltzmann–Grad limit, or many-particle derivation is claimed. Its direct consumer, pthm-td-collision-h-theorem, was checked against the current mathematical supplier interface.
- lem-td-rectangular-poincare: the finite-difference path decomposition, integral Cauchy–Schwarz estimate, Fubini use, and constant C_Ω prove the stated mean-zero inequality.
- pthm-td-fourier-entropy-production: the chain rule, Fourier substitution, positive-semidefinite symmetric part, face integration, and time differentiation yield the stated local identity and total entropy/energy conclusions under the declared continuum postulates. No empirical inference is made.
- pthm-td-constant-conductivity-neumann-existence: the original text used an unbound u in u'(T)=c, did not define the initial profile's map and units, and relied on coordinatewise evenness without stating it. I defined the affine caloric function u(θ)=u_*+cθ, the conductivity field K, the initial profile as a Kelvin-valued C² map with coordinatewise reflection and period equations, and the regularity class at t=0. I also stated the physical units of the rescaled Gaussian kernel. Its proof of the heat equation, Neumann compatibility, regularity at zero, and uniqueness is sound under these hypotheses. Direct and indirect consumers (pthm-td-neumann-heat-relaxation, rem-td-solution-existence-scope, and both examples) were checked against the clarified interface.
- pthm-td-neumann-heat-relaxation: mean conservation, the energy identity, the rectangular Poincare constant, and the exponential differential estimate are correct.
- rem-td-solution-existence-scope: I replaced the unexplained “parabolic model” label with an explicit reference to the constant-coefficient heat equation and its Gaussian-kernel solution. Its limitations about rough data, arbitrary domains, state-dependent conductivity, and microscopic derivation remain accurate.
- ex-td-insulated-polynomial-relaxation: the even-periodic extension is C², the mean and variance integrals evaluate to T_b and ε²|Ω|/2100, and the decay estimate follows from the parent theorem. I made the coefficient and temperature units explicit and included the parent theorem's affine energy-density datum.
- ex-td-diffusive-infinite-propagation: the compactly supported cutoff is C², and positivity of the Gaussian convolution gives a positive perturbation at every interior point for positive time. I made the length and temperature units explicit and stated that the cutoff is dimensionless.
- pthm-td-collision-h-theorem: during review, the current math supplier gained the transport-integrability condition that was absent from its immutable pre-reader version. I updated this assigned consumer's A3/L1 statement to match the current supplier's exact regularity and integrability interface, including its pointwise weak-identity assumption, and clarified the dimensionless logarithm. Its proof remains conditional on the draft supplier and makes no microscopic or empirical claim.

The batch proof contract was refreshed for the changed definitions, postulate scopes, heat theorem, its checked consumers, both examples, and the collision-entropy supplier interface. The strict contract check for all 14 assigned items passed with no errors or warnings. No changed item had a verification.judge record to remove.

## Source checks

- The [MIT 8.333 Lecture 9 notes](https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/ce250b44390106351cb97aafb0060ca7_MIT8_333F13_Lec9.pdf), printed pp. 57–58, explicitly distinguish the incoming molecular-chaos factorization from the post-collision factorization and its time-reversal consequence.
- [Fitzpatrick, “Boltzmann H-Theorem”](https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html), equations (3.123)–(3.131), gives the symmetrized collision-entropy sign argument.
- The [MIT 18.303 heat-equation notes](https://ocw.mit.edu/courses/18-303-linear-partial-differential-equations-fall-2006/d11b374a85c3fde55ec971fe587f8a50_heateqni.pdf), §§1.1–1.2, state the negative-gradient Fourier sign and derive the one-dimensional insulated-rod balance under constant-property assumptions.
- [Likharev §1.3](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/01:_Review_of_Thermodynamics/1.03:_The_1st_and_3rd_laws_of_thermodynamics_and_heat_capacity), equations (17)–(23), distinguishes fixed-volume from fixed-pressure heat capacity and gives the reversible entropy relation. [Likharev §6.5](https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/06:_Elements_of_Kinetics/6.05:_Thermoelectric_effects), equations (118)–(119), states the isotropic heat-conduction equation and constant-medium diffusivity specialization.
- [Hunter, Notes on Partial Differential Equations, §5.1, Theorem 5.5](https://www.math.ucdavis.edu/~hunter/pdes/ch5.pdf), supports the positive-time Gaussian convolution solution and smoothing interface; the Neumann reflection, uniqueness, and zero-time regularity arguments are proved locally.

The assigned Arovas 2010 PDF URL could not be fetched by the web reader, and the cited Likharev full PDF exceeded its size limit. The relevant Likharev LibreTexts section pages and an accessible Arovas entropy chapter were read instead; I do not claim to have read either full cited PDF. The incoming-only molecular-chaos statement was independently checked against MIT 8.333 Lecture 9. No experimental observations or numerical statistical claims occur in this batch.

## Findings not editable in this batch

The exact pre-reader snapshot research/physics-td-qft-rpm-62-2026-10-14-step3-hash-12-pre.json binds thm-tdmath-regular-collision-entropy to raw item SHA-256 f7c242ff0ba4c5fc952dd26ae25ac95024c4e8557389f79abf96d5a89fc5f7df, which are the bytes I initially reviewed. In those pre-reader bytes, A2 did not require integrability of (1+|ℓ|)v·∇_r f, while Proof 1.1 invokes absolute integrability and Fubini to cancel that transport term. The stated moments, entropy integrability, and collision envelopes do not supply this missing transport hypothesis. The current source, SHA-256 c1adcd5aa5f5a385faa5db92bf76c4057e9bcbf2589a96fa4195dfb052235845, now explicitly states transport integrability in the Statement/A2 and uses it in Proof 1.1; the historical finding below is bound to the pre-reader bytes and does not characterize the current source as defective.

The current source also has a nonfatal omission in Proof 4.1: it says the full-measure set of collision-balanced spatial points is dense without proving or citing that every nonempty open subset of the quotient torus has positive Lebesgue measure. A short argument that any open neighborhood contains a coordinate box of positive volume would close this, or the unnecessary density/continuity extension sentence can be removed; the stated almost-everywhere Maxwellian conclusion does not depend on it.

## Page verdicts

- td-continuum-heat-model (A): conditional pass after repairs. The page summary accurately separates the local Fourier and periodic Boltzmann models and does not claim that either is universally realized or experimentally established. Its collision-entropy consumer depends on a draft mathematical supplier: the historical pre-reader fatal transport-integrability defect is corrected in current bytes, while the current source retains the nonfatal density-justification omission recorded above.
- td-continuum-heat-model-examples (B): pass after repairs. Both items are constructed conditional model examples, not measurements; the polynomial mean/variance and positive-kernel support arguments are correct under the now-explicit parent assumptions.

## Validation and blocker

- Reflow and precheck completed for all eight changed items. All commands exited successfully; every proof-bearing item passed precheck.
- proof-contract.mjs --strict checked all 14 assigned items and returned ok: true with no errors or warnings.
- The required final proof-layout.mjs invocation on all eight changed item paths failed before rendering: the shared web renderer could not resolve the @/components alias imported from web/components/library/ItemBody.tsx. An explicit TSX_TSCONFIG_PATH retry failed the same way. The formatter result is unavailable until the renderer's TypeScript alias resolver is available.

I did not recursively audit every transitive prerequisite of the published mathematical suppliers; I checked the exact supplier interfaces used by the assigned arguments and verified the assigned local proofs. No empirical claims or measurements were used.
