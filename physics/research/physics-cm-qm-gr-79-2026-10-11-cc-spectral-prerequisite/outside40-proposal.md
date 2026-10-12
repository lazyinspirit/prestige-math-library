# Concrete outside40 scope proposal, same owning reviewer

No source40 production edits yet. Exact current guard hashes for the nine
named candidates below are in `outside40-current-bindings.json`. Root should
release only the actual confirmed prerequisite/consumer repairs listed here,
with their owned40 manifest, contract, coverage and readiness mirrors. Preserve
the earlier quantum author/reviewer identity and history; these distinct
findings do not reset earlier CC-hold rounds. This reviewer retains all actual
old/current/alias direct and indirect consumer obligations; outside40 consumers
are read-only until specifically released, and live writer overlaps defer
acceptance.

## Requested order and retained claims

1. `thm-nrqm-controlled-dynamics-mellin-incoming-and-outgoing-propagation`:
   retain its all-order outgoing/incoming norm decay and opposite-time strong
   limit on the full smooth positive-energy cutoff class. Replace the
   unspecified radial amplitude/spherical sum with the actual unitary
   momentum-log kernel below. Correct the position/momentum dilation signs.
2. `thm-nrqm-controlled-dynamics-compact-scattering-defects`: retain the
   every-`C_c(R)` public claim, record the genuinely proved smooth positive-
   energy intermediate separately, and prove its remaining threshold part
   before accepting the full item. Essential-spectrum and C0 functional-
   calculus compactness have explicit CC resolvent/finite-rank routes.
   The threshold extension is currently **unproved**, not silently narrowed
   and not asserted false.
3. `thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness`:
   retain full generic real bounded compact V, absence of singular continuous
   spectrum, each individual wave range equal to H_ac=H_c and unitary S.
   Its independent argument needs only the proved positive-energy intermediate,
   the spectral discreteness below zero, and the opposite-time strong estimate;
   it does not need the unproved zero-threshold part of item 2.
4. `thm-nrqm-controlled-dynamics-bounded-potential-weak-ucp`: retain connected
   open Ω, locally bounded complex B and H²_loc solution. Apply the actual
   Carleman cutoff on a ball **larger** than the known zero neighborhood;
   the current proof merely shrinks an already-zero ball and does not propagate.
5. `thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues`:
   retain all real bounded compact V. Correct reduced exterior solutions to
   r times the spherical Bessel functions, and use |A|², |B|² and conjugate
   cross terms for complex coefficients. Actual UCP from item 4 finishes it.
6. `thm-nrqm-controlled-dynamics-outgoing-fredholm-invertibility`: retain all
   k>0 and generic V. Keep the actual flux/positive-eigenvalue argument and
   replace its AC/DC Banach Fredholm supplier by the explicit finite-rank
   Hilbert factorization below. Prove uniform compact energy boundary behavior.
7. `thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux`:
   retain generic V, the exact outgoing solution, smooth amplitude and
   scattered flux/cross-section result. Its parenthetical invertibility is for
   I+K, not K (K=0 for V=0). Use the actual L² compact source Vu, rather than
   the false blanket assertion that arbitrary L¹ compact sources give H¹_loc.
   Do not assert that incident/scattered interference averages away; the flux
   statement is for Ψ_sc and is computed directly. Keep normalization/signs.
8. `thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence`:
   this supplier already assumes **central** V. Preserve its radial result,
   Legendre expansion, unit-modulus phase ratio, full cross-section series and
   resonance-model calculation. Correct its proof's factor of two in the
   Legendre integral, and supply the actual bounded radial-potential regular
   Volterra/outer-Hankel matching input; generic Coulomb transforms do not
   supply compact-potential radial transforms.
9. `thm-nrqm-controlled-dynamics-stationary-dynamical-sector-identification`:
   retain the full **generic** V branch. Replace its false generic scalar-l
   restriction with the full energy/angular representation and operator-valued
   unitary S(E) on L²(S²); preserve the existing scalar S_l identification as
   the radial specialization. Generic rotations give covariance under
   V→V_R, not commutation for a fixed nonradial V. The actual stationary
   resolvent-to-dynamical comparison must be proved, not a label change.

Additionally the two original Coulomb Dollard items require embedding the
complete CC construction in `cc-local-modules.md` and
`cc-radial-and-dollard-candidate.md` (or authorized proved suppliers), with their
exact current source40 consumer checks. Do not strengthen their hypotheses to
AC. The research candidate alone is not accepted prerequisite content.

## Actual noncircular positive-energy completeness route

Use F_p with kernel (2π)^(-3/2)e^{-ip·x}. The position dilation operator is
D=−i(x·∇+3/2), U(s)=e^{-isD}. Its position log representation is −i∂ρ.
Fourier conjugation gives +i(p·∇_p+3/2); in momentum-log coordinates
Tφ(ρ,ω)=e^{3ρ/2}φ(e^ρω), followed by (2π)^(-1/2)∫e^{-iηρ}dρ, it is
multiplication by **−η**. Thus P_+ is η<0 in that representation.

The kernel of 1_{|x|<2at} e^{-itH0}f(H0)P_+ from (η,ω) to x is exactly

    (2π)^(-2) ∫ exp[i e^ρ ω·x −it e^{2ρ}+iηρ]
                    f(e^{2ρ}) e^{3ρ/2} dρ,    η<0.

The amplitude has fixed compact ρ-support, with e^ρ∈[a+δ,b−δ] for δ>0.
For |x|<2at,

    phase' = e^ρ ω·x−2t e^{2ρ}+η ≤ −c t−|η|.

All higher phase derivatives are O(t) on that support. Quotient-rule
integration by parts N times therefore bounds the kernel by
C_N(t+|η|)^(-N), uniformly in x,ω. Squaring and integrating over η<0,
ω and the ball |x|<2at gives a Hilbert–Schmidt bound C_N t^{2−N}.
Increasing N proves the full asserted all-order norm decay. The time-reversed
sign gives the incoming bound. For the opposite-time strong limit, take
adjoints of the localized operator and split a **fixed** test vector into
that expanding ball and its L² tail; both terms tend to zero. No unproved
derivative of an unspecified g_η or uniform angular-series assertion is used.

For compact bounded V and f∈C_c∞((0,∞)), the same kernel localized to
supp V makes ||V e^{-itH0}f(H0)P_+|| integrable. Its Duhamel integrand is
compact: factor VR0(i) times the bounded energy cutoff factor; its norm
continuity follows from finite-rank approximation of the compact factor and
bounded H0 on the cutoff. Thus the **positive-energy** defect is compact.
The elementary compact-resolvent route gives f(H)−f(H0) compact for f∈C0:
Laurent/Fejér approximation after Cayley transport supplies rational functions
vanishing at infinity, whose resolvent differences telescope into compact
terms. This avoids general C*-spectral/Gelfand choice.

Cook existence comes independently from the free t^{-3/2} dispersive estimate
on Schwartz vectors; explicit bounded-potential Neumann resolvents supply
self-adjoint H on H² under CC. Separable PVM uniqueness gives intertwining
and absolutely continuous wave ranges. Relative compactness gives negative
discreteness, so all singular continuous spectrum is nonnegative. On a compact
positive interval, projecting the two compact positive defects onto H_sc makes
the localized singular projection compact, hence finite rank and therefore
zero; zero itself cannot support a continuous measure. Thus H_sc=0.

For ψ∈H_ac orthogonal to ran Ω_+, localize ψ=f(H)ψ with a smooth positive
energy cutoff. By scalar Riemann–Lebesgue, ψ_t=e^{-itH}ψ is weakly null.
Compactness gives ψ_t−f(H0)ψ_t→0 and both defect images tending to zero.
Replace its outgoing and incoming pieces by Ω_+f(H0)P_+ψ_t and
Ω_-f(H0)P_-ψ_t in the inner product. The first is orthogonal to ψ_t.
Move the adjoint in the second and use intertwining to obtain
P_-f(H0)* e^{-itH0}Ω_-*ψ, which tends strongly to zero as t→+∞.
Hence ||ψ||²=0. This proves **individual** outgoing completeness; reverse
time for incoming. Positive localization exhausts H_ac, since negative
spectrum and any zero atom are pure point. This avoids circular stationary
identification or an inference from joint coverage of the two ranges.

## Exact UCP and CC Fredholm replacements

At a center x0 where ψ vanishes on some small neighborhood, choose a larger
ball B_R(x0) compactly inside Ω and a cutoff equal to one on B_{R/2}, supported
inside B_R. The cutoff product vanishes near x0, as needed by the actual
Carleman estimate. Absorb the bounded potential term for sufficiently large
integer weight. The commutator is supported outside B_{R/2}, so for every
ρ<R/2 the estimate gives C/s·(2ρ/R)^{s+1}||commutator||→0. This proves zero
on B_{R/2}, which may be larger than the initial known zero ball. Along a
compact path use a common small R with support balls inside Ω and a finite
bound for B; moving centers by less than R/4 extends the zero region in
finitely many steps. All choices are finite/countable, not arbitrary AC.

For a compact Hilbert kernel K approximate it in operator norm by a finite-
rank F, with ||K−F||<1. Put L=I+(K−F), invertible by Neumann. Then
I+K=L(I+L^{-1}F). Let Y=ran(L^{-1}F), a finite-dimensional closed subspace.
The second factor is the identity on the quotient H/Y and restricts to a
finite-dimensional map on Y. If it is injective, that restriction is onto;
decompose y into Y and Y^perp, solve its finite-dimensional Y equation and
recover a preimage for every y. This gives a bounded inverse under CC and
finite-dimensional linear algebra, with no DC kernel/range-chain argument.
The compact kernel K_k is norm-continuous in k on compact positive intervals,
so invertibility there gives a uniform inverse bound and boundary extension
by Neumann perturbation. Incoming kernels are conjugates for real V.

## Generic stationary candidate and remaining hard obligations

The exact free energy/angular unitary is

    (F0 g)(E,ω)=E^{1/4} F_p g(√E ω)/√2.

Once independent completeness is proved, F0 Ω_±* is a unitary H_ac(H) onto
L²((0,∞),dE;L²(S²)). For compact sources, the proposed stationary forward
transform with dynamical sign σ is

    Z_{V,σ}(E)g=Z0(E)[I−V R_H(E+iσ0)]g.

A damped Cook-adjoint identity gives the same formula with ε>0: the Abel
average of e^{itH0}e^{-itH} is I−i∫_0∞e^{-εt}e^{itH0}V e^{-itH}dt,
whose energy form is Z0(E)[I−V R_H(E+iε)]. Compact-support Fredholm
boundary control can then identify its limit with F0Ω_+*; opposite signs
give the other transform. This needs a complete Abel convergence proof and
the actual compact-source local resolvent construction. Those are still
candidate obligations, not accepted deductions in the current body.

Commutation of S with the free energy projections yields an operator-valued
unitary fiber S(E): apply the scalar multiplier-commutant construction to all
matrix coefficients in the fixed countable spherical ONB, intersect the
countably many conull sets, and reconstruct the bounded fiber from rational
finite angular combinations. Rotation covariance follows by conjugating
the generic potential and its wave operators. Only radial V makes each l,m
subspace invariant and the fiber scalar on a fixed l representation.

The full stationary amplitude identity, the matching of the radial normalized
Wronskian ratio, and especially the full **every-C_c(R) zero-threshold compact
defect** require completion before their corresponding public claims can be
accepted. A proof of the positive intermediate does not establish that last
threshold claim. No threshold regularity/nonresonance restriction is added,
and no finite-bound-spectrum assumption is substituted for an actual proof.

## Source reading and acceptance boundary

The complete Teschl 12.5, 12.6, 12.10, 12.11 and 12.12 proofs/hypotheses were
read from the retrieved full book (printed pp.251–256). They prove the
positive-cutoff argument, not the current larger threshold contract. This
packet contains actual proposed constructions and explicitly identified
remaining obligations; it supplies neither independent acceptance nor a
native source40 resolution. Root release should retain the current reviewer
for all changed suppliers and their entire actual consumer cone.
