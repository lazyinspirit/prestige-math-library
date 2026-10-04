# Physical quantities, model inputs and domains

Primitive status refers to this explicitly adopted quantum ensemble formulation; a mathematical parameter may be stipulated without asserting its physical interpretation.

| Quantity | Mathematical type/domain | Role/status | SI |
|---|---|---|---|
| H | nonzero complex Hilbert space; finite C^D or justified normal-state space | prescribed state model | abstract vectors dimensionless |
| H operator | Hermitian finite matrix or self-adjoint operator with dense D(H) | primitive/model Hamiltonian input | J |
| PVM E_H | projection-valued spectral measure | derived from self-adjoint H through exact spectral supplier | probabilities dimensionless; energy labels J |
| ρ | positive trace-class operator, Trρ=1 | adopted normal prepared state; eigenvalues derived weights | dimensionless |
| A,B | bounded Hermitian observables, or specified unbounded self-adjoint domains | model measurement inputs | each observable's declared unit; momentum kg m/s, energy J |
| N | integer-valued particle-number observable with specified joint domain | conserved-count model input/observable | dimensionless |
| k_B | positive energy-temperature calibration constant | primitive within thermal identification | J/K |
| T,β | reservoir temperature, inverse-energy parameter | primitive preparation label / β=1/(k_BT) derived | K, J^-1 |
| ℏ | positive dynamical-phase constant | primitive in quantum dynamics | J s |
| t,z | real time / complex time argument | parameter; KMS imaginary height βℏ | s |
| μ,η | chemical potential and η=βμ | primitive preparation label / derived grand parameter | J per particle, dimensionless |
| Z,Ξ | Tr exp(-βH), Tr exp[-β(H-μN)] when finite | derived normalization | dimensionless; no classical phase-cell factor |
| p_i | density eigenvalues | derived spectral weights | dimensionless; log arguments dimensionless |
| S(ρ) | -k_BΣp_i logp_i | defined spectral state entropy; may be infinite | J/K |
| D(ρ||σ) | nonnegative relative entropy on stated support/cross-log domain | derived comparison functional | dimensionless |
| F,Ω | -β^-1log normalization | derived ensemble potentials | J |
| U,Var(H),C | scalar spectral mean, variance, temperature response | derived when moments finite | J, J², J/K |
| h | coupling parameter in H-hB | prescribed control | [h][B]=J |
| Cov_KM(A,B) | imaginary-power Gibbs matrix bilinear form | derived static fluctuation/response form | [A][B] |
| finite band P,g | finite-rank spectral projection/rank | adopted accessible energy-band preparation | dimensionless; P/g normalization only g finite positive |
| ω,m,ε | oscillator frequency, positive mass, two-level energy gap | model parameters | s^-1, kg, J |

Unbounded observable first absolute spectral moment defines its mean on a density, with form domain D(|A|^(1/2)); second moment defines variance and D(A) for pure vectors. A density times an unbounded observable is never automatically claimed trace class. Finite form energy is the actual competitor domain for Q5's trace-Gibbs minimization. Infinite entropy requires care; no infinity-minus-infinity variational functional is defined.

Postulates are Q7: normal density/Born interpretation, canonical, finite-band and appropriately joint-domain grand preparations. Normal states do not exhaust infinite-volume algebraic states. Quantum entropy and finite sums are mathematically derived conditional on the adopted model; no measured frequencies, observed relaxation or empirical precision are asserted.
