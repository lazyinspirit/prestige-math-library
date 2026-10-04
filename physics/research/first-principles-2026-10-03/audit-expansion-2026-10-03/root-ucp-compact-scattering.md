# Pure mathematical helper: bounded-potential unique continuation and stationary invertibility

Root-developed argument for the active physics audits. This is research prose,
not a published item, engine receipt or independent audit. Its hypotheses contain
no physical premise. Owners must verify and integrate the argument before using
it. Supporting interfaces: spherical-harmonic completeness/Plancherel and H²
local elliptic regularity (the exact planned PDE interface is allowed, with its
status recorded). Coordinate lengths below are mathematical real variables.

## Radial Carleman inequality in three dimensions

For integer s≥1 set τ=s+1. For u∈Cc∞(R³\{0}),

$$\|r^{-\tau}u\|_2\leq {2\over s}\|r^{-\tau+2}\Delta u\|_2.\tag{1}$$

Write r=exp(−t), u=r^(−1/2)v(t,θ), and w=exp(st)v. The radial derivative
calculation gives
Δu=r^(−5/2)(v_tt+ΔS²v−v/4). Both weighted squared norms use the same measure
factor r^(2−2τ)dt dθ=exp(2st)dt dθ. For spherical harmonic degree l,
−ΔS²=l(l+1), so the transformed RHS operator is
(∂t−s)²−(l+1/2)². In the unitary e^(−iξt) Fourier convention its squared
multiplier modulus is
[ξ²+(s−l−1/2)²][ξ²+(s+l+1/2)²]≥s²/4.
Plancherel for t and the complete angular orthonormal basis prove (1), summing
nonnegative squared modal norms. The two-π library convention gives the same
estimate with ξ replaced by2πξ. Density extends (1) to compactly supported H²
functions vanishing near0: all weights/derivatives are bounded on their fixed
support annulus, so H² convergence passes both sides to the limit.

## Weak unique continuation for bounded V

Let Ω⊂R³ be connected and open, V∈L∞loc(Ω), and ψ∈H²loc(Ω) satisfy
Δψ=Vψ weakly. If ψ vanishes on a nonempty open set, it vanishes everywhere.
To prove local propagation, center a ball B_R compactly contained in Ω at a
point with a zero neighborhood. Choose χ∈Cc∞(B_R), χ=1 on B_(R/2).
Set u=χψ, which vanishes near the center and belongs to the class in (1).
Then Δu=Vu+e with e=2∇χ·∇ψ+(Δχ)ψ, supported where R/2≤r≤R and in L².
With M=esssup_(B_R)|V|, (1) implies
‖r^−τu‖≤(2/s)MR²‖r^−τu‖+(2/s)‖r^(−τ+2)e‖.
For s≥4MR², absorb the first term. For any ρ<R/2,

$$\|\psi\|_{L^2(B_\rho)}
 \leq {4R^2\over s}(2\rho/R)^\tau\|e\|_2.$$

The fixed RHS tends to0 as integers s→∞. Hence ψ=0 in B_(R/2).
A path in Ω from the initial zero region to any point has a compact image with
positive distance to the complement. Propagate along finitely many overlapping
balls of a fixed smaller radius, centered successively in the established zero
region. This proves the assertion without any physical or analyticity assumption.
H² regularity is the displayed hypothesis; when starting from H¹loc and L²
forcing, first invoke the explicitly mapped interior regularity theorem.

## Compact real potentials have no positive eigenvalues

Let real V∈L∞(R³) have compact support and H=−Δ+V on H²(R³), self-adjoint
by the already justified bounded-potential construction. Suppose Hψ=k²ψ,
k>0, ψ∈L². Outside a support ball each angular coefficient solves the free
radial Helmholtz equation and is a linear combination of spherical j_l(kr)
and y_l(kr). A nonzero combination has leading r^−1 times a nonzero sine/cosine
combination, with O(r^−2) remainder. Its squared radial L² integral with r²dr
diverges: the leading periodic squared modulus has positive average and the
r-multiplied remainder is in L². Angular Parseval and nonnegativity force every
coefficient to vanish. Thus ψ vanishes outside the ball. The unique-continuation
result with coefficient V−k² makes ψ=0. There is no positive eigenvector.

The radial j_l,y_l statements follow either from their finite differential
recurrences from sin z/z,cos z/z, or their ordinary radial ODE; their complete
proof/interface must be included in an integrating owner's harmonic module.
They are not a new physical assumption.

## No exceptional positive energies for the outgoing compact-source equation

On a ball containing supp V define

$$K_k f(x)=\int {e^{ik|x-y|}\over4\pi|x-y|}V(y)f(y)\,dy.$$

This operator on L²(B_R) is Hilbert–Schmidt: its squared kernel is bounded by
const·|x−y|^−2|V(y)|², whose x integral over B_R is uniformly finite in3D.
Its sign-normalized equation for the model −Δ+V is (I+K_k)f=g.
If (I+K_k)f=0, extend ψ=−G_k*(Vf) to all R³. It equals f on the ball,
solves (−Δ+V−k²)ψ=0, and is H²loc by the mapped regularity interface.
Vf is compactly supported L²∩L¹. The kernel's uniform large-r expansion,
including its first radial derivative, gives
ψ(rθ)=exp(ikr)A(θ)/r+O(r^−2) and the corresponding Sommerfeld condition,
with A(θ)=−(4π)^−1∫exp(−ikθ·y)V(y)f(y)dy. Compact support supplies the
finite moments needed for the differentiated error estimate. A is smooth.
Green's identity on a large ball gives

$$0=\operatorname{Im}\int_{|x|=L}\bar\psi\,\partial_r\psi
 \longrightarrow k\int_{S^2}|A|^2,$$

because the volume integral of |∇ψ|²+(V−k²)|ψ|² is real. Thus A=0.
Outside the support the exact outgoing radial harmonic coefficients are
multiples of h_l^(1)(kr); their leading amplitudes are nonzero constants times
those multiples. The Sommerfeld condition rules out incoming h_l^(2) terms.
Taking angular coefficients of the uniform amplitude limit shows all outgoing
multiples vanish. Consequently ψ=0 outside the ball, and unique continuation
makes ψ=0 everywhere; f=0. The Fredholm alternative for identity plus compact
therefore makes I+K_k boundedly invertible for every k>0.

Owners should record the angular radial/Green/Fredholm interfaces and their
publication/planning status, and any needed bounded-domain H² trace step in
Green's identity. No theorem is asserted for complex/long-range potentials or
multichannel thresholds. For NR QM the physical energy/units and Hamiltonian
assignment are a separate interpretation. For exterior homogeneous EM, the
bounded-coefficient continuation argument can also be used componentwise,
but this scalar construction does not by itself prove vector boundary existence.
