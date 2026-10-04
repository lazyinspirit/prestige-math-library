# Classical Statistical Mechanics

This category develops statistical descriptions of classical systems from
explicit mechanical state models, reference measures and preparation assumptions.
It separates three questions: which probability law a model assigns to a
preparation, what mathematical conclusions follow from that law, and when a
mechanical or experimental system realizes the preparation. Canonical weights
can be characterized by an entropy inequality; that does not prove a reservoir
prepares them. Hamiltonian flow conserves phase volume and its own fine-grained
entropy; that does not prove ergodicity or relaxation. Thermodynamic limits can
make pressures nonsmooth while finite partition functions stay smooth. Every
connection carries the assumptions that actually establish it.

The reusable mathematical strand develops measures on configuration and phase
spaces, quotient counting, Gibbs differentiation, entropy and information,
infinite-volume limits, Gibbs specifications and dynamical estimates. Physical
items adopt a chosen Hamiltonian, counting convention, apparatus/preparation and
interpretation of observables. They draw conditional conclusions from that
model. The proposed A/B inventory is supplier-first; B calculations and
counterexamples are leaves, and every A and B page stays within 100 items.
These are research designs and complete scoped arguments, not production
acceptance or publication.

## States, counting and full ensembles

Begin with a specified configuration manifold or measurable configuration space.
For smooth mechanical models the phase space is its cotangent bundle with
canonical one-form, symplectic form and Liouville measure. Positions and momenta
have different units; dimensionless reference coordinates are chosen before a
Euclidean shell gradient is used. At a collision or a hard wall, neither a smooth
manifold quotient nor a smooth Hamiltonian force is assumed. Statistical
integration over excluded configurations can be defined even when a separate
mechanical flow has not been constructed.

A statistical state is a probability measure, not necessarily a density relative
to phase volume. An observable is a measurable function with the stated moment
integrability when its expectation or variance is used. A coarse macrostate is
a measurable map; its pushforward probability, macrocell volume and Gibbs
distribution entropy are separate objects. Quotient counting for operationally
indistinguishable particles is specified through a measurable orbit map and
$1/\prod_sN_s!$, without claiming a smooth quotient at coincidences. Species
resolution and reference action scales affect entropy offsets and chemical
potentials and are physical/model choices.

Develop exact finite ensembles on these full spaces: normalized regular energy
surfaces using coarea, finite-energy bands with a stated width, canonical fixed
number, grand particle exchange, and isothermal-isobaric volume exchange with
an actual volume prior. Distinguish shell area from the weighted shell measure,
band entropy from shell-density entropy, and both from cumulative phase-volume
entropy. An exact shell is singular relative to full phase volume; it has no
ordinary Gibbs density entropy in that reference. Critical levels and infinite
normalization are explicit boundaries. For $H=K(p)+U(q)$ retain all $p$ and $q$:
an exact full-energy shell has positional density weighted by available kinetic
energy and conditional mass-scaled momentum spheres, whereas its canonical law
has independent Gaussian momenta under the quadratic kinetic model.

Prove exponential normalization and first/second derivative identities only with
the required uniform integrable envelopes over parameters and particle-number
sectors. Derivatives at fixed chemical potential concern $H-\mu N$, while a
grand activity derivative probes number. A changing physical volume carries its
Jacobian; a chosen $dV/V_0$ prior produces the exact finite-size volume correction.
Integer $N$ has no ordinary derivative. Derive covariance responses, valid
potential differentials, equipartition with boundary terms and the Gibbs
variational identity on the same declared reference measure. The statistical
identification with macroscopic thermal state functions is an additional bridge,
not a consequence of units or a universal finite-system Euler relation.

## Finite and infinite interacting equilibrium

Specify interactions before discussing an equilibrium phase. Finite lattice
models have a spin alphabet, interaction neighborhoods, boundary configuration,
Hamiltonian and normalized finite Gibbs kernels. Consistency of those kernels
defines a Gibbs specification. Infinite states satisfy the specified conditional
DLR equations; existence, uniqueness and phase coexistence require their actual
compactness, locality, coupling or contour proofs. A finite positive partition
function is not an infinite-volume uniqueness theorem. Transfer matrices prove
the exact one-dimensional short-range branch; low-temperature contour estimates
and high-temperature contraction concern their respective models and domains.
No universal critical exponents or phase diagram of arbitrary matter is inferred.

For continuum particles reuse the actual completed thermodynamic supplier
chain, with its exact hypotheses and proof status. M17/M27 supply Gaussian and
measure calculations; M28/M29 give finite-range lattice pressure and controlled
limiting response; L19/L27 give general stable decreasing-integrable free-cube
pressure/canonical limits. L29/L32 add arbitrary van Hove geometry under actual
superstability; they do not prove the stronger stability-alone arbitrary-shape
upper bound. L25/L28 specify admissible external boundaries and the genuine-core
tempered class. Reference-Poisson pressure shifts, activity normalization and
attainable density endpoints are retained.

L21/L23/L26/L30/L31 supply exact entropy compactness, energy semicontinuity,
variational duality and positional local-ensemble statements. Their observable
topology includes every measurable bounded local test and at-most-linear local
particle-count growth, with proved count uniform integrability. Thermodynamic
duality, concentration and local-observable equivalence are different claims.
The supporting equality is $P(\alpha,\beta)=F(\rho,\beta)+\alpha\rho$; in
concave-supergradient notation it means $-\alpha\in\partial^+F$, correcting
the inherited source's terminology sign while preserving its valid dual proof.
Continuum variational minimizers are not called DLR states without a separately
proved identification.

## The new full interacting phase-space bridge

`full-phase-equivalence.md` supplies the previously missing full momentum–position
extension. For the actual superstable regular periodic continuum interaction,
exact $N_n/V_n\to\rho$ in the interior domain, $\beta>0$, differentiable
canonical rate and a unique supporting configurational variational minimizer,
use the full Hamiltonian $U_{n,\mathrm{per}}+\sum|p|^2/(2m)$. Gaussian
integration factors the canonical partition but does **not** factor a uniform
full-energy shell. Construct the total-energy-density window from actual
canonical concentration. The uniform phase band then has vanishing specific
canonical relative entropy.

The complete entropy-chain argument transfers the positional marginal's combined
entropy–energy bound to the source variational compactness theorem. Superstable
occupation control and uniqueness give its positional local limit. Conditional
on **all positions**, split the random finite momentum sets among disjoint fixed
spatial cells. Product-reference entropy superadditivity and joint torus
translation invariance bound the conditional mark entropy of each cell by the
total entropy divided by the number of packed cells. Information contraction
and Pinsker give local mark closeness to the independent Gaussian lift. This
handles locally selected particles of random occupation, rather than relying
on a fixed-label marginal that rarely enters the observation region.

The resulting full shell, canonical and correctly activity-shifted grand laws
agree for each fixed measurable bounded local marked observable and each fixed
count-tame marked observable. A separate Gaussian tilted-entropy calculation
proves the named local kinetic-energy and first/second momentum sums; TV alone
does not justify an arbitrary unbounded observable. All exact window,
differentiability, uniqueness, reference and periodic hypotheses remain in the
inventory. No growing-region/uniform-all-observable or arbitrary ultrathin-shell
theorem is asserted. Explicit Bernoulli countermodels show why energy
concentration or vanishing entropy density without the local hypotheses would
not suffice.

## Mechanics, time averages and kinetic models

Start the dynamical strand from actual finite-dimensional Hamiltonian flows on
their regular domains. Derive Liouville evolution, invariant densities, full
phase-space marginals and the finite BBGKY hierarchy under stated differentiability
and boundary/decay conditions. Conservation of energy and phase volume does not
construct complete motion for singular interactions. Recurrence requires an
invariant finite measure and all relevant iterates. The exact Birkhoff supplier
identifies time and space averages only under its explicit measure-preserving,
integrability and ergodicity conditions, with almost-everywhere qualifications.
Neither Gibbs stationarity nor recurrence proves the required ergodicity.

Supply a substantive microscopic limiting branch with smooth Lipschitz mean-field
interactions on the specified torus and a quantified finite-time coupling/
propagation estimate. Keep it distinct from hard-sphere Boltzmann–Grad and a
general hydrodynamic limit. The elastic Boltzmann model has a separately specified
collision operator, positive regular solution class, molecular-chaos premise,
moment conservation and complete entropy/equality argument. It does not derive
its own closure from reversible many-particle mechanics. Fluid balance laws
and collision moments form conditional bridges to the new fluid framework;
constitutive transport and local equilibrium require their actual extra inputs.

Finite reversible Markov models and the exact OU bath supplier give independent
stochastic preparation/evolution models. Detailed balance, invariant measures,
entropy contraction, response and Green–Kubo identities are established with
their finite-state or regular stochastic assumptions. A noise/bath model is a
physical input. Formal Langevin, kinetic or transport language is never used
as a postulate claiming an unavailable general convergence/well-posedness theorem.

## Substantive models, fluctuations and evidence

Worked models retain their own preparations and exclusions: full ideal-gas
canonical/grand laws and finite spherical-shell marginals; massive Gaussian
versus separately adopted classical ultra-relativistic kinetic energies;
confined harmonic modes and the unpinned-chain zero-mode divergence; exact
Ising-ring correlations; Tonks hard rods with a proved thermodynamic limit and
convergent exclusion virial remainder; and explicitly nonadditive toy models
with a proved positive-temperature singularity and ensemble inequivalence.
Finite Bernoulli sampling gives exact moments and finite-sample concentration/
large-deviation bounds. A selected random walk has its actually proved scaling
statement; a characteristic-function calculation is not silently upgraded to
path-space convergence. Recurrence and coarse-entropy reversal counterexamples
make the limits of relaxation rhetoric concrete.

All these are predictions and hypothetical calculations. No source-backed
reported experiment is manufactured from them. A future empirical comparison
must specify preparation, apparatus, calibration, sampling, resolution,
uncertainty and the particular comparison model. Counts fluctuate, a predicted
mean is not every realization, a small likelihood is not logical impossibility,
and agreement does not prove an entire framework. Retrieved-source ledgers
record raw bytes, hashes, actual full relevant reading extents and failures;
they never substitute a citation or a planned supplier for a missing argument.
The supplier map, coverage/closure ledgers and structural report distinguish
completed scoped mathematics from unconsumed stronger research extensions.
