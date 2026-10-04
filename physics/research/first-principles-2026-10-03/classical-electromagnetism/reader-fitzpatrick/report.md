# Fitzpatrick reader report

## Source and reading status

Richard Fitzpatrick, **Classical Electromagnetism: An intermediate level course**, complete author-hosted upper-division undergraduate lecture notes, University of Texas at Austin. Document/translation date **2006-02-02**; course landing page last modified **2014-08-24**. This is the HTML lecture course, not the later Jones & Bartlett book edition. Official landing: <https://farside.ph.utexas.edu/teaching/em/em.html>; complete contents: <https://farside.ph.utexas.edu/teaching/em/lectures/lectures.html>.

I read all substantive nodes 1–133 sequentially, including the vector primer, circuits, plasma models, and relativistic radiation, in bounded text chunks. Node134 is translator metadata. `reading-ledger.md` records chapter-specific findings; `completeness.json` lists every node/title and exact local extraction. Full prose and all available equation ALT text were read. LaTeX2HTML truncates 198 long-formula image occurrences (196 unique PNGs), so I subsequently **visually read all 198 occurrences** at original detail in fourteen labelled contact sheets. `truncated-formulas.json` records exact node/image/ALT locators; `visual/01.png`–`14.png` and the visual ledger preserve this recovery. No unread truncated equation remains. This is **not a complete equation-by-equation proof audit**: diagrams were interpreted from their full explanatory prose, and every untruncated ALT was not independently compared with the underlying image. Preservation of all image assets is not a claim that every diagram/image was visually inspected.

The initial guessed `lectures/lectures.pdf` URL returned HTTP 404. Recovery used the same complete text at the official HTML link; no alternate author/course was substituted. `pdftotext` was unavailable but unnecessary for this HTML course. `source-manifest.json` records individual URLs, UTC retrieval timestamps, bytes, SHA256; `assets-manifest.json` covers all 3406 embedded images and the stylesheet; none failed. `offline/lectures.html` is an optional local reading copy with asset links adjusted; original `html/` bytes are untouched. `extraction-manifest.json` covers derived text hashes. Research archives retain source copyright; no permissive reuse license was established. Proposals below are paraphrases and independent rigor requirements, not extensive reproduction or authored library items.

## Framework, quantities, and units

A rigorous initial presentation can adopt laboratory coordinates on Euclidean spatial space with a fixed oriented orthonormal Cartesian basis. Let **Omega be an open subset of R^3, I an open interval of R**, and initially define **E,B: Omega × I → R^3**, with E,B in C^1 jointly; require C^2 for classical second-order wave/potential deductions. Source densities are **rho: Omega × I → R**, charge per volume, and **J: Omega × I → R^3**, oriented charge flux per area/time; initially C^1 for continuity/compatibility deductions. Mathematical regularity is an explicit claim hypothesis, not an empirical claim that physical matter is literally smooth. Initial data, boundary data, source compatibility, and a constitutive closure must accompany a solution problem.

For finitely many classical charges with trajectories **r_a:I→Omega**, C^2 and mutually noncolliding, use the spacetime complement of their graphs for classical E,B; do not assign finite field values on the charges. Alternatively take rho=sum q_a delta_(r_a(t)) and J=sum q_a r'_a(t) delta_(r_a(t)) as distributions on space/time. Delta_x is the evaluation functional phi↦phi(x) on smooth compactly supported test functions, not an ordinary function infinite at x. Locally integrable field distributions can satisfy linear Maxwell equations, but E^2, B^2 and products with singular sources need separate hypotheses or regularization; distribution theory alone does not define arbitrary products. A self-force cannot be obtained by simply evaluating a particle's own singular field on its worldline.

At a fixed, smooth oriented interface Sigma separating Omega_1 and Omega_2, use piecewise C^1 fields with finite one-sided traces, and surface charge sigma:Sigma×I→R [C/m²], surface current K:Sigma×I→T Sigma [A/m]. Moving interfaces and delta-type layers require a separately formulated transport/jump theory. Do not borrow the stationary jump conditions without that analysis.

| Quantity | Mathematical role in the adopted formulation | SI units |
|---|---|---|
| q_a | signed scalar particle parameter; additivity/charge invariance are physical assumptions | C = A s |
| rho, J | scalar density and vector flux map above | C/m³; A/m² |
| E | primitive physical field, operationally related to test-charge force at rest | N/C = V/m |
| B | primitive physical field, axial under improper spatial orthogonal changes; boosts mix E and B | T = N/(A m) |
| phi, A | scalar/vector potential maps with domains and gauge freedom specified; normally C² locally | V; T m = V s/m |
| epsilon_0, mu_0 | positive vacuum normalization constants; c²=1/(epsilon_0 mu_0) in SI Maxwell theory | F/m; H/m = N/A² |
| c | vacuum characteristic propagation speed and relativistic invariant speed under extra kinematic assumptions | m/s |
| m_a | positive mechanical rest-mass parameter in coupled dynamics; not derived by EM | kg |
| P, D | polarization and displacement maps; D=epsilon_0 E+P | C/m² |
| M, H | magnetization and intensity maps; H=B/mu_0−M | A/m |
| epsilon_r, chi_e, chi_m | dimensionless material-model parameters; source denotes relative permittivity by epsilon | 1 |
| epsilon, mu, conductivity | absolute constitutive coefficients when explicitly introduced; avoid confusing epsilon with source's epsilon_r | F/m; H/m; S/m |
| u, S, g, T_ij | scalar energy density, vector energy flux, vector momentum density, symmetric stress map | J/m³; W/m²; kg/(m² s); N/m² |

Node32 eq231 gives mu_0=4 pi ×10^-7 N/A², the historical SI convention of this 2006 text. **Modern SI mu_0 is experimentally determined, not exact**; epsilon_0=1/(mu_0 c²) inherits that uncertainty, whereas c's SI numerical value is fixed. A current BIPM/SI supplier is needed before publishing numerical constants or operational unit definitions. Do not present rounded source values as exact or current measurements. Charge and SI base-unit status are distinct questions from whether charge is primitive in a physical model.

## Physical assumptions and conditional results

The clean foundational choice is to **adopt vacuum Maxwell equations and the Lorentz force as physical postulates**, with experimentally motivated scope. Source sections 3–4 instead develop them from Coulomb/Ampere/Faraday observations and mathematical consistency. Both expositions are possible, but Coulomb's law and superposition cannot themselves be derived from vector algebra; extrapolation from ideal straight wires to arbitrary/time-dependent sources is an adopted physical generalization. The no-magnetic-charge formulation is an explicit framework restriction, supported by non-observation, not a mathematical proof that monopoles cannot exist.

With the domains above, classical SI equations are div E=rho/epsilon_0, div B=0, curl E=−partial_t B, curl B=mu_0 J+(1/c²)partial_t E. The Lorentz coupling gives **F_a(t)=q_a[E(r_a(t),t)+r'_a(t)×B(r_a(t),t)]** for a test particle in regular external fields, with either Newtonian **m_a r''_a=F_a** in the nonrelativistic regime, or a separately postulated relativistic momentum law. Charge continuity follows conditionally by taking divergence of Ampere–Maxwell and using Gauss, with commuting derivatives justified. Conversely, continuity fixes the coefficient of partial_t E only *within the proposed ansatz*: it leaves room for other solenoidal additions. Mathematical consistency does not uniquely derive the empirical Maxwell law.

Ohm's law J_f=conductivity E, local isotropic P=epsilon_0 chi_e E, and M=chi_m H are **material model assumptions**, not universal Maxwell consequences. Positive real constant coefficients, linearity, isotropy, homogeneity, time locality, fixed material, nondispersion, and absence of hysteresis are distinct hypotheses. A dispersive medium requires a time-response kernel or a stated frequency-domain constitutive map; treating its epsilon(omega) as an instantaneous scalar multiplier for arbitrary pulses is invalid. Atomic oscillator and Drude collision models include mechanical mass, restoring frequency, damping, dilute-medium and small-perturbation assumptions. They approximate matter response; they do not derive atomic stability from classical EM.

Retarded potentials are a **selected solution** for compatible conserved sources plus temporal/radiation conditions. Homogeneous/free radiation and advanced solutions remain mathematical possibilities. A purely spatial condition of decay at infinity does not fix time-dependent fields or eliminate residual gauge freedom. The source itself acknowledges advanced solutions in node51; its schematic absorber account is an optional historical discussion, not a proved foundational item.

## Boundary, PDE, and topology obligations

For a fixed interface, n points from side1 to side2. In the absence of singular magnetic layers and with bounded relevant time derivatives, distributional Maxwell/vanishing pillbox-loop deductions give **n·(E_2−E_1)=sigma_total/epsilon_0**, **n·(B_2−B_1)=0**, **n×(E_2−E_1)=0**, and **n×(B_2−B_1)=mu_0 K_total**. Macroscopic versions give n·(D_2−D_1)=sigma_free and n×(H_2−H_1)=K_free. Zero jumps require explicitly absent free sheets, not merely a pillbox volume tending to zero. Nodes70 and76 state continuity after assuming no free sheet, then summarize too generally. Static PEC equipotential boundaries are model restrictions; a perfect conductor does not universally expel pre-existing static magnetic flux.

Required mathematical suppliers include oriented curve/surface integration, divergence and Stokes theorems with regularity and boundary hypotheses, differential identities with commuting mixed derivatives, Green identities, compactness/decay estimates, distributions and convolution/fundamental solutions, elliptic Dirichlet/Neumann compatibility and uniqueness, trace theory for weak solutions, and hyperbolic Cauchy problems/finite propagation. For spectral solution methods add Fourier convergence and differentiation under integrals/series; for waveguides add self-adjoint transverse Laplacians, eigenfunction completeness, and boundary conditions. Complex-potential methods require holomorphicity and harmonic conjugates, not merely a 'well-defined' complex function.

**Topology matters:** curl-free implies a local gradient; a global potential requires vanishing periods, e.g. simple connectedness under appropriate smooth hypotheses. A solenoidal B can have nonzero flux through a nonbounding sphere on a punctured domain and need not admit a global A. An explicit star-shaped/contractible domain and Poincare lemma or appropriate cohomology hypotheses should precede global potentials. Whole-space Helmholtz reconstruction needs actual decay and integrability; boundedness is not zero boundary data. Poisson uniqueness is not an existence theorem. Source node62 contains a useful energy uniqueness argument once bounded connected domain/regularity and boundary conditions are supplied.

## Energy, momentum, and relativity

Under smooth vacuum Maxwell and regular total sources, define **u=(epsilon_0 |E|²+|B|²/mu_0)/2**, **S=E×B/mu_0**, **g=epsilon_0 E×B**, and **T_ij=epsilon_0(E_i E_j−|E|² delta_ij/2)+(B_i B_j−|B|² delta_ij/2)/mu_0**. Vector-product identities imply partial_t u+div S=−J·E and the stress/momentum balance. These are **physical theorems conditional on postulates**. Total conserved energy/momentum also requires a mechanical/material balance and either controlled boundary flux or a closed system. The local fields alone generally exchange energy with matter. Integrability/decay must be stated before integrating over all space.

The source's point-charge pair interaction energy excludes self-energy (node56 eq584); its positive continuous field-energy integral includes it. This distinction is essential and is explained well in that chapter. A point charge has divergent classical self-energy; no deduction of particle mass follows. Image-charge energy in node64 eqs725–730 cannot literally identify a negative finite interaction energy with a positive divergent total field integral; use finite work relative to a reference or a justified subtraction of unchanged self-energy. Derive conductor force/stress and inductance positivity without relying on such ambiguous total-energy expressions.

Radiation momentum in node90 is motivated using relativity and then photons. A classical foundational development should instead use node91's Maxwell stress balance, so it does not require quantum assumptions. In material media, one-half E·D+B·H formulas require reversible instantaneous time-independent symmetric linear constitutive coefficients; ordinary linear frequency dispersion alone is insufficient. Hysteresis loops describe energy loss and do not define a state function by one-half B·H.

For relativistic reformulation adopt Minkowski spacetime **M=R⁴**, metric eta=diag(−1,−1,−1,+1) in the source convention **X=(x,y,z,ct)**, time orientation and spatial orientation. An inertial frame is an affine chart whose coordinate basis is constant, orthonormal for eta, future oriented, related to others by an appropriate Poincare transformation; a worldline is **gamma:J_tau→M**, C², future timelike with eta(gamma',gamma')=c² under proper-time parametrization. Specify the metric/coordinate convention before field tensor, dual, four-current and four-force. Source uses scaled potential (c A,phi), field tensor entries E and c B, and switches d'Alembertian sign between chapters4 and10. These are conventions to record, not intermix.

Charge invariance, Minkowski geometry, inertial equivalence, relativistic mechanical momentum, and causal boundary selection are extra adopted assumptions. Node127 proves Lorentz four-force orthogonality and constant rest mass conditionally; that does not determine its numerical value. Retarded-time uniqueness for subluminal trajectories needs an existence interval/past domain plus monotonicity/implicit-function hypotheses. Accelerated-source differentiation needs adequate trajectory regularity and positive 1−n·v/c. Dipole radiation requires source size small compared with wavelength, not just distance to observer; far-zone and small-source approximations are separate. Radiation reaction is not solved by prescribing a trajectory and calculating its outgoing flux.

## Empirical sourcing and source defects

Nodes28,32,33,43 describe Coulomb, Ampere, Thomson and Faraday historically; they are secondary qualitative accounts without complete calibration records, sampling model, uncertainties or primary dataset. Rounded q/m values and material numbers are not sufficient to create quantitative experiment items. Sources support a limited historical summary or motivation relation only until original reports or authoritative detailed empirical treatments are read. Proposed numerical estimates and imagined setups remain examples/thought experiments. Independent observations, predictions, and statistical inference must be recorded separately; no experiment proves a postulate deductively.

Do not copy the following passages without repair/supplement:

- **node30 eqs192–208:** classical divergence theorem across a point singularity; delta treated as a pointwise spike limit. Replace with test-function proof/excision.
- **node37 eqs308–310:** 'bounded at infinity' gives unique zero harmonic solution. Constants are counterexamples; require actual vanishing data. Nodes38/44 also omit global-potential topology.
- **node43 eqs373–374:** stationary electric circulation formula discussed alongside moving loops. Include motional Lorentz emf and moving-surface transport.
- **node48 eq451**, visually confirmed in assets/img1039.png: the intermediate equality uses +k² E_0 where −k² E_0 is required. **node71 eq842/846**, visually confirmed in assets/img1747.png and img1752.png: surface-charge expressions omit the external field E_0 and fail dimensional consistency. **node48 eqs448–449:** real-vector geometric reasoning is applied after allowing complex phasors; bilinear B_0·B_0 need not be positive. Establish geometry of real instantaneous fields or use Hermitian norms correctly. Eqs464–466 are a plane-pulse subclass, not the most general 3D wave solution.
- **node50 eqs520–521:** a lone charge appears/disappears with no current, violating continuity; switched potential differentiation omits wavefront distributions. This is not a valid Maxwell thought experiment.
- **node52 eq551:** replacing all source retardations by one common time requires source-size/wavelength control, not merely source size much smaller than observation distance.
- **node58:** 'shielding works both ways' needs grounding/net-charge constraints; a charge inside an isolated neutral conducting shell induces external net flux.
- **node63 eqs707–709:** Child–Langmuir solution needs space-charge-limited emission/cathode-field condition, not just the two potential boundary values.
- **node65:** well-defined complex function is conflated with differentiable/holomorphic. **node66:** completeness needs function space and convergence sense.
- **node100:** group velocity is identified universally with information speed; this is restricted to an appropriate narrowband nondistorting regime. Relativistic causality concerns front/signal propagation, especially in anomalous dispersive/absorptive media.
- **node102:** using dc conductivity out to optical/x-ray frequencies is an additional uncontrolled material assumption. Node103 appropriately introduces frequency-dependent response.
- **node118:** vague 'sensible' boundary conditions remove every homogeneous residual gauge; state zero Cauchy data/precise gauge conditions instead.
- **node126 eq1549:** integrating mechanical work determines energy only up to a constant; rest-energy normalization is an extra relativistic-mechanics identification.
- Source ALT formulas show probable elementary transcription/typographical problems (e.g. node33 eq240 dv/dr, node65 eq748 limit at infinity, node66 eq797 sin(nx), node85 eq969 L dL/dt, node104 eq1227 E_t on both sides). Inspect PNGs and independently calculate before authoring; this reading does not certify these formulas.

## Proposed A/B inventory and order

These are research proposals, not plan/item mutations. A pages contain reusable definitions/postulates/proved suppliers; B companions contain worked examples and independent hypothetical analyses and must remain prerequisite leaves across pages.

| Order | A suppliers/topic | B examples/conditional analyses | Necessary earlier suppliers |
|---|---|---|---|
| 1 | Euclidean laboratory coordinates, quantity maps, SI conventions, charge/flux definitions | signed-source and unit checks | vector spaces, multivariable calculus; current SI supplement |
| 2 | oriented integration; differential identities; distributions; delta source | Coulomb singularity by excision; topology counterexamples | 1's mathematical language only |
| 3 | Maxwell/Lorentz postulates and adopted scope; charge continuity and constraint propagation | charging capacitor consistency; prescribed smooth test trajectory | 1–2; ODE existence |
| 4 | electrostatic potential, Poisson fundamental solution and energy uniqueness | sphere/sheet fields; grounded images | 2–3; decay and Green identities |
| 5 | electrostatic conductors, boundary traces, capacitance and stress | empty cavity; sphere/parallel plate/coaxial capacitance | 4; conductor material model |
| 6 | rigorous Fourier/harmonic BVP methods | strip potential, complex cylindrical and spherical problems | 2,4; holomorphicity/eigenfunction convergence |
| 7 | magnetostatic vector potential, topology, Biot–Savart and dipole moment | straight wire, loop, solenoid; multiply connected domains | 2–3; divergence-free localized J |
| 8 | P,M,D,H and total/free/bound source construction | dielectric sphere/interface and magnetic core | 3–7; surface distributions |
| 9 | linear constitutive models and reversible material energy | anisotropic energy and hysteresis counterexample | 8; positivity/symmetry hypotheses |
| 10 | moving-loop emf, flux transport, quasistatic approximations | sliding conductor; induced loop | 3,7; Reynolds transport |
| 11 | inductance matrix reciprocity/positivity; lumped circuit model | RL, RLC, transformer; finite-radius self-inductance | 5,7,9–10; linear ODE/phasor suppliers |
| 12 | vacuum energy and momentum balances, Maxwell stress | conductor pressure, absorbed/reflected wave momentum | 3; vector identities; material/mechanical balances |
| 13 | hyperbolic Maxwell Cauchy problem, wave equation and polarization | plane waves, finite pulses, superposition/interference | 2–3,12; PDE existence/finite propagation |
| 14 | potentials/gauge, Lorenz gauge, retarded Green distribution and homogeneous freedom | causal source pulse satisfying continuity | 2–3,13; topology, compatible source conditions |
| 15 | small-source expansion and electric dipole radiation | Hertzian antenna and radiation resistance | 12–14; controlled approximation bounds |
| 16 | oscillator and collision material models; dispersion and attenuation | Thomson/Rayleigh prediction, plasma cutoff, skin depth | 9,13,15; mechanical parameters, asymptotics |
| 17 | interface-wave matching, Fresnel laws and flux coefficients | Brewster case, total reflection and evanescence | 8–9,12–13,16 |
| 18 | transverse eigenproblem and guide modes; telegrapher/TEM formulation | rectangular TE/TM cutoff; coax line and matching | 5–7,11,13,17; Laplacian spectral suppliers |
| 19 | Minkowski geometry, frames/worldlines, charge/current transformation | boost and velocity-addition calculations | rigorous affine/metric/tensor mathematics; relativity postulates |
| 20 | field tensor, dual, covariant Maxwell/Lorentz and stress-energy | invariants, boosted Coulomb field | 3,12,14,19 |
| 21 | Lienard–Wiechert potentials and radiation from prescribed timelike curves | Larmor/Lienard, angular beaming, synchrotron losses | 14–15,19–20; implicit function and hypersurface integration |
| 22 | radiation-reaction limitations and empirical validation accounts | model discrimination/uncertainty worked analysis | 21; independent detailed empirical sources and statistics |

Pure mathematical prerequisites cannot depend on physical postulates or observations. Formulation dependencies for postulates are not proofs; operational dependencies for experiments do not generate measured outcomes. Earlier physical results retain their model/empirical qualifications. Historical support/testing links belong in relations, outside deps. No imported supplier IDs have been asserted as available here: the scaffold must inspect pinned mathematics imports and fill or escalate each exact gap.
