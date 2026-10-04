# Framework quantities and physical adoptions

Draft research, 2026-10-04. These are physical model declarations, not mathematical existence assumptions. All adopted representations are constructed in the cited mathematical modules before their predictions are interpreted. Empirical parameters and reported observations remain separate from deductions.

<a id="framework-units"></a>

## Physical definition — def-qft-framework-units

Use oriented, time-oriented Minkowski spacetime with metric η=diag(−1,1,1,1) and length coordinates x⁰=ct, xⁱ in metres. Primitive positive constants are c [m/s], ℏ [J s], and the electromagnetic SI normalization μ₀ [kg m/C²]; a species mass m [kg], electric charge q [C], regulator geometry, couplings, and selected state are primitive model inputs. Their empirical values are not deduced here. Define μ=mc/ℏ [m⁻¹], ω(k)=√(|k|²+μ²) [m⁻¹], E=ℏcω [J], and momentum ℏk [kg m/s]. Vacuum-subtracted Hamiltonians, distributions, probabilities, correlations and regulator eigenvalues are derived quantities with the domains specified by their constructions.

Normalize scalar fields to dimension m⁻¹, Dirac fields m⁻³ᐟ², photon potential a=A_SI/√(μ₀ℏc) to m⁻¹, and curvature f=F_SI/√(μ₀ℏc) to m⁻². The natural action is S/ℏ; its density has m⁻⁴ and physical energy density is ℏc times that density. Define dimensionless charge q_n=q√(μ₀c/ℏ); for positive elementary charge e_SI, e=e_SI√(μ₀c/ℏ) and α=e²/(4π). The electron has q_n=−e. Minimal coupling is D=∂−iq_n a, hence D=∂+iea for the electron. No quantum equation is obtained by multiplying undefined point fields.

Use γ⁰=β, γⁱ=βαⁱ, {γᵃ,γᵇ}=−2ηᵃᵇ and (iγᵃ∂ₐ−μ)ψ=0; the effective Clifford metric is −η. The phase p∘x=ωx⁰−k·x equals −η(p,x). State evolution is exp(−itH/ℏ), while the corresponding Heisenberg conjugation uses exp(+itH/ℏ). The free-field module uses a second-variable-linear Hilbert pairing; its explicit conversion to the repository first-variable-linear pairing is ⟨u,v⟩_FF=(v,u)_root. Operator identities must retain that conversion.

Fields are operator-valued distributions on common dense domains, not pointwise observables. Real scalar smeared fields have proved self-adjoint closures; bounded Weyl operators are everywhere defined. Fermion-even local bounded algebras represent observables; odd charged fields obey graded locality. Photon field strengths are local smeared distributions, while a Coulomb-gauge potential may be nonlocal. General composites require their separately supplied product/extension construction. Test-function units may be chosen so the smeared observable is dimensionless.

<a id="constructed-measurement"></a>

## Physical postulate — post-qft-constructed-model-and-measurement

For each explicitly selected model whose Hilbert space, state, Hamiltonian, domain and unitary evolution have actually been constructed, adopt that construction as the quantum description of the specified system. A normalized vector or positive trace-one density operator represents its state; a constructed self-adjoint operator, its spectral effects, or a bounded positive effect represents the specified measurement. For a supplied bounded instrument with ΣMᵢ* Mᵢ=I, probabilities are ||Mᵢv||² (or tr(ρMᵢ* Mᵢ)); conditional state update is the normalized corresponding instrument output when its probability is positive. Constructed H generates the displayed Schrödinger evolution. These assignments are physical premises; normalization, positivity and unitary preservation are mathematical deductions in C5 and the respective operator modules.

A model adoption specifies which species, field normalization, regulator and preparation/observable are intended. It does not assert that every classical action has a quantization, every formal state is positive, or every cutoff can be removed. In particular it supplies no interacting continuum four-dimensional QED Hilbert space, scattering operator, asymptotic completeness, LSZ limit, spin–statistics theorem or nonperturbative convergence. Formal coefficients are interpreted, where separately adopted, as a specified approximation rule; they do not become exact probabilities by this postulate. Agreement with reported data tests the selected approximation and empirical inputs, with source-reported uncertainty assumptions retained.

<a id="framework-examples"></a>

## B — finite measurement and formal-model distinction

In an actually constructed two-level Hilbert space let v=α|0⟩+β|1⟩ with |α|²+|β|²=1 and instruments M₀=|0⟩⟨0|, M₁=|1⟩⟨1|. C5 gives probabilities |α|², |β|² and their normalization; the physical postulate identifies them with the selected measurement outcomes. By contrast C5's formal factorial series has radius zero although each coefficient exists: a formal interaction coefficient alone has no probability interpretation without an additional controlled approximation and a constructed model. This is a conditional thought experiment, with no claimed observations.

## Branch quantity register

| Quantity | Object and unit | Primitive or derived; defining carrier |
|---|---|---|
| Test f, Φ(f), Ψ(F) | Schwartz/compact smooth test; smeared dense-domain operator or bounded CAR operator | Test is input; operator constructed in FF3/FF5; no point field |
| h, Fock space, D_fin | Closed one-particle Hilbert space, symmetric/antisymmetric sum, finite-particle domain | Model specification and constructed completion, FF1 |
| H, P, N, Q | Maximal direct-sum multipliers; J, kg m/s, dimensionless, C | Derived with exact weighted domains, FF1/FF3/FF6/FF7 |
| Ω, ω, W, H_F | Vacuum vector, positive functional, tempered two-point and time-ordered distributions | Supplied state or derived correlations, FF3/FF9/C0–C3 |
| E_*, q_j, a_j, V | Energy scale J, dimensionless coordinates/kinetic coefficients/coercive real polynomial | Finite-regulator primitive data, IR00; q_j not SI electric charge |
| h_poly, U(t), Z, ρ_β | Spectral-domain operator, unitary, partition number, trace-one density | Constructed, IR01/IR02; β_phys J⁻¹; equilibrium interpretation adopted separately |
| C, λ, ν_λ | Finite positive covariance, nonnegative dimensionless coupling, probability measure | C/λ input, measure derived IR03; no continuum path measure |
| η_book, z | Formal coefficient variables | Algebraic input IR04/IR04C; no convergence/positivity implied |
| sd(T), μ_R, counterterm | Scaling degree, inverse-length subtraction scale, finite delta jet | Derived analytic index/input scale/derived ambiguity IR05/IR05G/IR06 |
| θ_e, E_e, U_e, G_x | Compact rotor angle, integer electric multiplier, unitary link, Gauss multiplier | Exact regulator variables Q5; angle/E/G dimensionless |
| λ_E, M_x, T_e, H_lat | Electric and hopping coefficients J; self-adjoint Hamiltonian J | Coefficients input, Hamiltonian derived Q5; positive physical sector constructed |
| s, M_i, dσ_coeff, Γ_coeff | Energy-squared J², mass-energies J, tree coefficient m², rate coefficient s⁻¹ | Input kinematics and formally derived coefficients QX05–QX07; approximation premise retained |
| κ, ε, C(f_ε) | Inverse-length soft cutoffs and normalized coherent state | Cutoffs/preparation input, exact free norm/energy/limit derived Q8; not full QED dressing |
| g_e/2 and stated uncertainty | Experimental fitted corrected dimensionless estimate and source-reported uncertainty | Observational report with apparatus/inference assumptions; not an exact derived constant |

The separate worker physical modules specify their selected models and any additional approximation or equilibrium premise. No empty cell is filled by assuming mathematical existence.
