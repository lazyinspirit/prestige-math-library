# Proposed CC-only radial closure and source40 completion

This is a local proof module for the owning reviewer's examination, not an
accepted production supplier or readiness decision. It follows the constructions
in `cc-local-modules.md` and the actual repaired Coulomb bodies. It does not
change their current AC+CC contracts. Unlike the initial findings, this candidate
includes the Green/domain and uniform boundary argument and the corrected
negative-energy exhaustion. The separate generic short-range stationary problem
is outside this Coulomb proof and remains unresolved.

## Inputs and exact choice ledger

Work in ZF+CC with the specified L² Lebesgue spaces and their fixed rational
simple-function dense sequences. Use Plancherel, weak Fourier derivatives,
Sobolev density, three-dimensional Hardy, polar integration, dominated
convergence, Tonelli/Fubini, Cauchy–Schwarz and Hilbert completeness. Use the
actual countable spherical-harmonic ONB and sphere-Laplacian diagonal-domain
suppliers, whose public hypotheses are CC. Use the actual regular-IVP supplier
for continuous scalar coefficients on compact intervals, with its CC hypothesis;
complex holomorphic dependence below is proved by its explicit Volterra Picard
series, not asserted from its real-parameter clause. Hilbert Riesz is an actual
CC supplier. General Kato–Rellich, nonseparable spectral theorems, generic
C0-Riesz–Markov with DC, and generic spectral-type decomposition are not inputs.

`cc-local-modules.md` constructs self-adjoint C on exactly H², its PVM and
groups, compact-resolvent Weyl inference, and negative discrete-subspace
closure under CC. Its scalar circle measure uses the actual CC Stieltjes
extension and regularity results. Its subsequence and cyclic-space recursions
are canonical; they use neither DC nor a maximal family. Countable choices of
density approximants, representatives and Borel versions are the remaining
choice sites. The angular labels (l,m) and the bound labels (n,l,m) are countable.

## Radial realization and the free branch

For γ≥0 and l≥0 let V_l be the completion of C_c^∞(0,∞) for

    ||u||² + ||u'−u/r||² + l(l+1)||u/r||².

On that core, integrating (|u|²/r)' gives both
||u'−u/r||²=||u'||² and ||u/r||≤2||u'−u/r||. Thus for fixed l this is H¹_0
with equivalent norm. In particular u,u',u/r∈L² with zero trace at zero
belongs to V_l: multiply by a cutoff vanishing below ε and equal to one
above 2ε; the added derivative has squared norm bounded by a constant times
∫_0^{2ε}|u|²/r²→0. Cut off at infinity and smooth on compact intervals.

Define the form a_l by kinetic plus l(l+1)/r² minus γ/r. Its Coulomb pairing
is bounded by 2||u'−u/r|| ||v||, including l=0. Young's inequality gives

    a_l[u] ≥ (1/2)||u'−u/r||²+l(l+1)||u/r||²−2γ²||u||².

Hence a_l+(2γ²+1)<·,·> is a complete coercive inner product equivalent to
the V_l norm, uniformly in l. Riesz solves a_l(u,v)+μ<u,v>=<f,v> with
μ=2γ²+1. Define A_l by the form identity. It is densely defined (contains
compact smooth tests), symmetric, and A_l+μ is onto. For y∈D(A_l*) solve
(A_l+μ)x=(A_l*+μ)y; the difference is in ker(A_l*+μ)=ran(A_l+μ)^perp={0}.
Thus A_l is self-adjoint and A_l≥−2γ². Its weak equation gives local H²
regularity and classical solutions for eigenvectors.

The polar unitary U sends ψ to u_lm(r)=r∫ψ(rΩ)Y_lm(Ω)bar dσ. On finite
compact smooth radial sums, angular orthogonality and integration by parts give

    ||∇ψ||²=Σ_lm[||u_lm'−u_lm/r||²+l(l+1)||u_lm/r||²],
    ∫|ψ|²/r dx=Σ_lm∫|u_lm|²/r dr.

These sums extend to H¹. For a smooth ψ supported away from zero, truncate
the harmonic expansion; Parseval for ψ, its radial derivative and its smooth
sphere Laplacian makes the omitted gradient sum tend to zero on its compact
radial support. Such ψ are H¹-dense by the actual Hardy/cutoff argument.
Conversely approximate a square-summable family in the V_l norm by finite
smooth radial families; these transport to an H¹ Cauchy sequence. Thus the
polar form domain and norm identity are exact.

The shifted Coulomb form norm is equivalent to H¹ by Hardy and Young. Its
actual spectral form completion is H¹: the multiplication PVM from the local
modules gives a form core by energy truncation, while H² is H¹-dense and its
form values agree with the differential form. Each A_l has form domain V_l
by the same energy truncation/completion argument. The countable direct sum
of A_l is self-adjoint (its nonreal resolvents solve coordinates with uniform
bound), has the same closed form as UCU*, and thus is exactly UCU* including
the square-summable graph-domain condition. Uniqueness follows from the form
identity a(u,v)=<Au,v> on the domain. This works also at γ=0, where C is the
explicit free multiplier. H²⊂C_b follows from Fourier Cauchy–Schwarz, so a
radial eigenvector transported into H² has bounded u(r)/r near zero.

## Actual solutions, Green domain and positive density

For z=k², the regular series φ=r^{l+1}Σc_nr^n has c_0=1 and
c_n=−(γc_{n−1}+k²c_{n−2})/[n(n+2l+1)]. Choosing C≥max(1,γ,|k|) on a
compact k-set gives |c_n|≤C^n/n! by the exact ratio
[γ/C+|k|²(n−1)/C²]/(n+2l+1)≤1. All compact derivatives converge. Therefore
φ is entire in k, regular at zero, and real for real k.

On a compact first-quadrant k-set away from zero put a=γ/(2k),
b=a²+l(l+1)+ia, and w(r)=exp[i(kr+a log r)]. For s≥y on a sufficiently
large common tail,

    |w(s)²w(y)^(-2)|
      =exp[−2 Im k(s−y)](s/y)^(-2 Im a) ≤1.

This uses −2 Im a=γ Im k/|k|² and log(s/y)≤(s−y)/y. Also choose the tail
with |a|/y≤|k|/2. Integration by parts bounds
w(s)²∫_r^s w(y)^(-2)dy uniformly. The actual double-integral Volterra kernel
is therefore bounded by C/s²; on a sufficiently large tail it is a
contraction on bounded continuous functions. Its unique fixed point v gives
f=wv and v=1+O(1/r). Differentiating the actual double integral gives
v'=−b w(r)^(-2)∫_r^∞w(s)²v(s)s^(-2)ds and
v''+2i(k+a/r)v'−bv/r²=0. Thus f solves the exact radial equation. Uniform
Picard convergence gives parameter continuity to real k; dominated triangle
integration and Morera give holomorphy in the open upper half-plane, and
compact-interval IVP Picard series extend both properties to finite r.
For Im k>0, f,f' decay exponentially times a power.

For real k, constant W(fbar,f)=2ik follows by the asymptotic limit.
Since φ is real, W(φ,f) cannot vanish: proportionality would give zero
W(fbar,f). For nonreal k, vanishing W would make the common regular/decaying
solution belong to V_l and satisfy a_l(u,v)=z<u,v>; the A_l domain definition
would make it a nonreal eigenvector, impossible. Put W=W(φ,f).

For a source g supported in [r1,r2]⊂(0,∞), use

    u(r)=−f(r)∫_0^r φ(s)g(s)/W ds−φ(r)∫_r^∞f(s)g(s)/W ds.

Below r1 it is a constant times φ and above r2 a constant times f. Therefore
u,u',u/r∈L² with zero trace. It belongs to V_l by the cutoff characterization.
Differentiation on compact intervals gives (−d²/dr²+l(l+1)/r²−γ/r−z)u=g,
with derivative jump −1 in the kernel −φ(r<)f(r>)/W. Integration by parts
against compact tests extends by form continuity to all of V_l, so u is in
D(A_l) and equals (A_l−z)^(-1)g. This is an actual operator-domain proof,
not identification merely from the differential equation or L² membership.

At real k, Im(−f/W)=kφ/|W|², so the boundary kernel is
Im G=kφ(r)φ(s)/|W|². The compact k-parameter continuity and nonzero real
Wronskian give uniform kernel convergence and a uniform denominator bound on
compact r-supports and compact positive E-intervals, as k=√(E+iε)→√E.
Consequently compact-source pairings converge uniformly there.

For h continuous with compact support in (0,∞), the scalar PVM resolvent
formula and Fubini give

    (1/π)∫h(E) Im<(A_l−E−iε)^(-1)g,g>dE
      =∫(P_ε*h)(λ)dμ_g(λ),
    P_ε(t)=ε/[π(t²+ε²)].

Uniform continuity and the small tail mass of P_ε imply P_ε*h→h uniformly.
The other limit is the uniformly obtained Green boundary density. Finite
regular measure uniqueness hence gives, on all positive Borel sets,

    dμ_g(E)=ρ_l(E)|∫φ_l(√E,r)g(r)dr|²dE,
    ρ_l(E)=√E/[π|W_l(√E)|²]>0.

This first proves the density, then absence of atoms, avoiding circular
endpoint assumptions in Stone's interval formula. For general g, compact
source approximation and
|μ_g(B)−μ_gn(B)|≤(||g||+||gn||)||g−gn||, uniformly in B, prove absolute
continuity of its measure restricted to positive energies. Thus the positive
space is purely absolutely continuous.

## Onto continuum transform and the complete bound spectrum

Define Tg(E)=√ρ_l(E)∫φ_l(√E,r)g(r)dr on compact sources. The density gives
||Tg||²=<P_+g,g>. Extend it as a contraction to all of H; it vanishes on
(I−P_+)H and is an isometry on P_+H, with closed range. Polarization gives
T* M_B T=E_A(B) for every positive Borel B. If Q is its range projection,

    Q M_B Tg=T E_A(B)g,
    ||M_B Tg||²=<E_A(B)g,g>=||Q M_B Tg||².

Pythagoras forces M_B Tg into the range. Thus Q commutes with all indicators.
The bounded-commutant proof with g0(E)=e^{-E} shows Q=M_{1_S} for a measurable
S. If S^c had positive measure, all transform images of a fixed countable
dense collection of rational step functions supported in [1/k,k] would vanish
there, simultaneously outside one null set. Pairing continuity in L²[1/k,k]
would force φ_l(√E,·)=0 locally for such E, contradicting its regular
coefficient 1. Hence S is conull and T|P_+H is onto scalar L²(dE).
Indicator intertwining, bounded simple approximation and unbounded energy
truncation give its exact bounded Borel calculus and domain {h:Eh∈L²}.

For γ>0 and negative energy −k², substitute
u=r^{l+1}e^{-kr}v(2kr). The Kummer recurrence is
v_{i+1}=(i−j)v_i/[(i+1)(i+2l+2)], j=γ/(2k)−l−1, v0=1.
Its factorial majorant proves an entire solution. It terminates exactly for
j∈N0 and is then the normalized Laguerre polynomial; the exact coefficient
ratio is (i−j)/[(i+1)(i+2l+2)]. Local reduction of order on a zero-free
interval near zero gives a second solution ∼−r^{-l}/(2l+1). Extend it
globally by regular IVP, including across polynomial nodes. Its |u|/r is
unbounded, so transported H² eigenfunctions must be multiples of the regular
solution. In the nonterminating case the coefficients have a fixed sign
eventually and, for every ε∈(0,1/2), their tail dominates c(1−ε)^i/i!.
Thus |v(x)|≥c e^{(1−ε)x}−P(x) on x≥0 and the regular u is not L².
In the terminating case the polynomial-exponential u has u,u',u/r∈L²,
zero trace and the form eigenidentity; hence it lies in D(A_l). Therefore
the negative radial levels are exactly −γ²/(4n²), n≥l+1, each simple.

The modules' negative discrete-subspace closure and the exact block identity
exhaust the negative C-subspace. At fixed n there are 0≤l≤n−1 and 2l+1
angular labels; its dimension is Σ(2l+1)=n². Normalize each explicitly given
nonzero polynomial-exponential vector; this needs no arbitrary eigenspace
basis selection. For γ=0 the free multiplier has zero nonpositive projection,
so there are no bound copies.

There is no zero eigenvector: for Cψ=0, the dilation
D(s)ψ=e^{3s/2}ψ(e^s x) preserves H² and has
D(s)*CD(s)=e^{2s}H0+e^s V. Self-adjointness gives the exact zero pairing
<D(s)*ψ,(D(s)*CD(s)−C)ψ>. Divide by s and take s→0 to get
2<H0ψ,ψ>+<Vψ,ψ>=0; together with <Cψ,ψ>=0 this gives <Vψ,ψ>=0,
impossible for γ>0 and ψ≠0. At γ=0 the Fourier multiplier directly excludes
a zero eigenvector. Thus the full explicit countable resolution has only the
bound copies and positive scalar continuum copies. Directly from this
representation H_ac(C)=H_c(C)=E_C((0,∞))H, without generic spectral-type
decomposition as an extra premise.

## Completion of exactly the original Coulomb Dollard claims

The repaired all-sign analytic remainder is the original annular-profile
Fourier proof, independent of Coulomb spectral calculus. On that dense class,
U_D(t) lies in H² and is graph differentiable. The explicit Hardy map
H²→L² justifies differentiating F(t)=e^{itC}U_D(t), yielding

    F'(t)ψ=−i e^{itC}[γ/r−γ/(2|t||P|)]U_D(t)ψ.

Its norm is O((1+log|t|)/|t|²), so the Banach fundamental theorem makes F(t)ψ
Cauchy at either infinity. All approximants are unitary; limits are isometries,
and the bound ||F(t)(ψ−ψ_n)||≤||ψ−ψ_n|| extends the limits to all H.
For fixed s the extra phase difference log|t|−log|t−s| tends pointwise to
zero in the explicit momentum representation and is bounded by 2 after
exponentiation. Dominated convergence gives
e^{-isC}Ω=Ωe^{-isH0}. Exact generator domains and the unique separable PVM
give E_C(B)Ω=ΩE_H0(B). Since the free nonpositive projection is zero, the
range is in the positive Coulomb space before any radial conjugation.

The angular block decomposition and the modifier as a function of H0 show
that Ω preserves each (l,m). Conjugating each channel by the onto free and
Coulomb positive transforms gives an isometry B on scalar L²(dE), commuting
with every energy indicator. To prove B is a multiplier, take g0=e^{-E}>0,
let h=Bg0 and b=h/g0. The inequality ||1_C h||≤||B||||1_C g0|| proves
|b|≤||B|| a.e. Commutation and bounded simple approximation give
B(ug0)=ubg0 for bounded measurable u; these vectors are dense by truncation.
Thus B=M_b. CC provides a Borel version from countably many Borel versions
of the completed-measure level sets in simple approximations. Isometry gives
|b|=1 a.e., so M_b has inverse M_bbar and is onto. Countable angular assembly
then gives ran Ω=E_C((0,∞))H=H_ac(C)=H_c(C). Both signs have this same range,
and Ω_+*Ω_- is unitary on the whole free Hilbert space. Every original bound
level and its multiplicity are retained.

This is the full proposed **CC-only** Coulomb proof route. Its production
integration would require embedding these actual local arguments in the
owning source40 carriers or authoring proved local suppliers through the
authorized workflow; the existing AC-bearing supplier Statements cannot be
treated as CC theorems merely by citing this research. Owning mathematical
acceptance, metadata integration and native readiness remain outstanding.
