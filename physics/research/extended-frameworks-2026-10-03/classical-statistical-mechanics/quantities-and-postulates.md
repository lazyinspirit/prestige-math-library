# Quantities, units and physical preparations

Primitive/derived status is local to the declared statistical model. Mathematical
spaces and reference measures are stipulated inputs; their physical adoption,
preparation and measurement meaning are separate postulates. The default physical
dimension is three and SI is used. Other spatial dimensions are explicitly
mathematical/model specializations, with pressure then in J/m$^d$.

| Object | Type and domain | Status in the model | Units/construction |
|---|---|---|---|
| $Q_N,\Gamma_N$ | Configuration manifold/measurable space and, for smooth mechanics, $T^*Q_N$ | Model input | Particle positions m; covector components kg m/s |
| $\lambda,\omega,m_N$ | Canonical one-form, symplectic two-form and reference measure | Derived geometry with adopted normalization | $\lambda,\omega$ J s; $m_N=dqdp/(N!h_*^{dN})$ dimensionless |
| $h_*,v_*,p_*$ | Positive reference action, volume and momentum constants | Counting inputs | J s, m$^d$, kg m/s; optional $h_*^d=v_*p_*^d$ |
| $N,N_s$ | Nonnegative integer number/species labels | Sector data or sampled variable | Dimensionless; no ordinary integer-number derivative |
| $m,m_i$ | Positive scalar particle masses | Primitive mechanical data | kg |
| $U,\phi,J,h$ | Interaction function, even pair potential or lattice coupling/field energy | Adopted model input | J; $\phi=+\infty$ means forbidden configurations |
| $H,K$ | Measurable full energy; smooth Hamiltonian on dynamical branch | Derived from specified interactions/kinetic law | J; quadratic $K=|p|^2/(2m)$ in the neutral model |
| $k_B,T,\beta$ | Positive entropy conversion, temperature parameter and inverse energy | Adopted constant/control and derived parameter | J/K, K, J⁻¹; $\beta=1/(k_BT)$ |
| $\mu,z,a_c$ | Chemical energy, dimensionless activity, number activity | Preparation control and derived normalization | J, dimensionless, m$^{-d}$; reference/momentum factors explicit |
| $Z,\Xi,\Delta$ | Canonical, grand and volume-exchange normalizers | Derived integrals/sums | Dimensionless with declared references; existence checked |
| $P,\rho$ | Statistical probability; number density | Adopted preparation/derived expectation | $P$ unitless, $\rho$ m$^{-d}$; $P$ is not a phase-space point |
| $S_G,S_B,S_{\rm shell}$ | Gibbs/reference entropy, macrocell entropy, chosen shell entropy | Distinct derived functionals/physical identifications | J/K; logs of dimensionless density or reference-weighted volumes |
| $D,I$ | Relative entropy and spatial specific entropy | Derived information functionals | Dimensionless; $I$ m$^{-d}$ after restoring reference length |
| $F,\Omega,G_{\rm NPT}$ | Ensemble free potentials | Derived with adopted thermal interpretation | J; $-\beta^{-1}\log Z$, $-\beta^{-1}\log\Xi$, $-\beta^{-1}\log\Delta$ |
| $V,V_0,P_{\rm ext}$ | Actual volume, reference volume, pressure control | Geometry/reference/preparation inputs | m³, m³, Pa in physical $d=3$; NPT includes $dV/V_0$ prior |
| $C_V,C_P,\kappa_T$ | Thermal/volume response functions on stated charts | Derived covariances with moment envelopes | J/K, J/K, Pa⁻¹ in physical $d=3$ |
| $D(E),\delta E,E_0$ | Shell density, band width and shell entropy scale | Coarea-derived density and preparation/reference inputs | J⁻¹, J, J with dimensionless phase reference |
| $\delta_n,e$ | Total-energy-density width and selected energy density | Constructed controlled window/derived derivative | J/m$^d$; $e=-F_\beta+d\rho/(2\beta)$ in C0 convention |
| $B,A_*,\psi,\Psi$ | Stability bound, superstable coercivity and tail envelopes | Mathematical hypotheses on the adopted potential | J, J, J-valued envelopes with explicit geometry/decay |
| $\gamma_\Lambda,\mu_{\rm DLR}$ | Finite conditional probability kernels and infinite Gibbs laws | Derived kernels/solutions of conditional identities | Dimensionless; distinct from continuum variational minimizers without a bridge |
| $c_{ij},\xi$ | Dobrushin influence and correlation length | Derived model quantities | Dimensionless influence; lattice spacings or metres after $a$ restoration |
| $f(q,v,t)$ | Kinetic particle density on spatial/velocity domain | Dynamical field of adopted kinetic model | Counts per spatial volume per velocity volume |
| Collision kernel/rate | Nonnegative measure or operator on declared elastic collision space | Adopted collision/closure input | Chosen so collision term has density/time; conservation/rate conventions explicit |
| Mean-field coupling | Smooth Lipschitz force on stated torus model | Adopted interaction; Lipschitz bound a proof hypothesis | Force N; finite-time estimates use chosen dimensionless comparison norm |
| Markov generator/bath | Finite transition-rate matrix or exact specified stochastic coefficients | Adopted stochastic dynamics | Rates s⁻¹; diffusion m²/s and friction s⁻¹ where applicable |
| Experimental sample/count | Actual finite observations, if supplied | Empirical input | Source-reported apparatus/calibration/sampling uncertainty; none invented here |

An inertial coordinate frame in the nonrelativistic model is the declared spatial
Euclidean chart and time coordinate with its mechanical transformation rule,
not an unexplained Lorentz observer. Probability densities transform by the
reference-measure Jacobian; scalar probability and observer-dependent momentum
components are distinct objects. The momentum marks in C0 are mechanical
quadratic kinetic momenta for the specified neutral model. Canonical momentum
in an electromagnetic gauge-coupled model requires its separately declared
mechanical identification; matching names or units does not establish it.

The physical postulates are formulated completely in foundations F0/F4, Gibbs
G0, examples P0, dynamics' own model sections and canonical C7. They specify
Hamiltonians, counting, alternative ensemble preparations, thermal identification
and optional stochastic/kinetic closure. They do not assert unproved ergodicity,
equilibration, universal continuum limits or physical applicability. Exact finite
derivations and mathematical characterizations precede their conditional physical
interpretations. The canonical full-phase bridge explicitly retains superstable
regular interaction, periodic domains, exact number, positive beta, differentiable
rate, supporting singleton and constructed total-energy window.

No experiment item or empirical premise is introduced by these calculations.
If later observations calibrate a mass, potential, rate or temperature, their
preparation/measurement conditions and statistical/systematic uncertainty must
travel into each physical prediction. A probability distribution and a finite
histogram are different objects, and none of the mathematical proofs establishes
an entire theory's empirical truth.
