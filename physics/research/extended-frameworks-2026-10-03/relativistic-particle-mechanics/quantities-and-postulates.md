# Quantities, physical adoption and model interfaces

The canonical conventions are in `prose-scaffold.md`; the explicit geometry and
einbein table is `workers/geometry/quantities-and-postulates.md`. This dossier
uses SI with $c$ retained and distinguishes prescribed model inputs from derived
observables. These are framework-local declarations, not assertions that SI base
quantities are universally fundamental.

| Model | Primitive/adopted data | Derived objects and units | Scope |
|---|---|---|---|
| Massive free/test particle | Smooth time-oriented $(M,g)$; $c>0$ m/s; $m>0$ kg; action stationarity; ideal-clock interpretation | $\tau$ s, $U$ m/s, $P=mU$ kg m/s; $E_n=-cg(P,n)$ J; $S$ J s | Future nonzero timelike curves; local/maximal interval, no completeness |
| Massless free/test particle | Separate future nonzero null initial momentum and positive energy scale; positive-einbein action | $P=x'/e$ kg m/s; affine label s/kg in geometry's convention; $E_n=c|p_n|$ J | No proper-time normalization, rest observer or massive $mU$ substitution |
| Finite collisions | All included incoming/outgoing momentum data at one event; isolated additive balance | Total invariant mass kg, $s$ J², COM momenta kg m/s; recoil energy J | Finite event kinematics; no rates or interaction existence |
| External charged monopole | $q$ C, $m$ kg; prescribed smooth two-form $F$ T; potential $A$ T m when available; action coupling | $K=qF^\sharp U$ N; canonical covector $\pi=mU^\flat+qA$ kg m/s; gauge scalar $\chi$ T m² | EM sign C1; self-field excluded; local potential topology explicit |
| Hamiltonian constraints | Cotangent model and imposed action/constraint; independent regular constraint functions and gauge data | $\lambda,\omega$ J s; Poisson bracket units product/action; $C_m$ kg² m²/s²; positive multiplier units s/(kg × parameter-unit) | Singular Legendre transform; local regular quotient unless global slice/properness proved |
| BMT spin | Initial $s\perp U$; material $g_s$ dimensionless; adopted rest torque and transport ansatz | $s$ J s; $\mu=(g_sq/2m)s$ A m²; preserved length | No EDM, gradients in translation, quantum representation or spin backreaction |
| Extended body/MPD | Prescribed stress and transport/slice moment convention; pole-dipole truncation, SSC and constitutive closure | $p$ kg m/s, $S^{ab}$ J s; force N, torque J; quadrupole $J^{abcd}$ kg m⁴/s²; size m | Evolved moment $p$ is generally distinct from centroid $mU$; TD domain invertibility/timelikeness explicit |
| LAD/LL effective models | Independently stipulated flat effective equation; smooth external field and regular-branch assumptions when used | $\tau_e=q^2/(6\pi\epsilon_0mc^3)$ s; acceleration m/s²; residual bounds with quantified constants | No singular Maxwell construction or unrestricted long-time reduction theorem |
| Schwarzschild examples | Prescribed exterior central $M$ kg, $G_N$ m³ kg⁻¹ s⁻²; free test-body/ray premises | $\mu=G_NM/c^2$ m; orbital $h$ m²/s, null impact $b$ m, frequencies s⁻¹ | Exterior $r>2\mu$; null capture meaning uses actual extension and boundary model |

Metric/connection/curvature components have dimensionless, m⁻¹ and m⁻² units in
length charts. Other charts change these component units through their Jacobians.
An observer is a future unit tangent vector, a congruence a smooth such field,
a tetrad an ordered local orthonormal basis, and a chart a coordinate map. Their
definitions and existence conditions precede all dynamical uses.

Physical postulates are specified in geometry's final postulate section, charge
and spin CS0/CS4/CS7, Hamiltonian H5 and dynamics D0. Their status is model
adoption, with source motivation and explicit regimes; they are never proofs
of physical applicability. No empirical premise enters this dossier. Existing
external experiment dossiers, if later consumed, must retain their actual
preparation, apparatus, sampling, uncertainty and inferential scope.
