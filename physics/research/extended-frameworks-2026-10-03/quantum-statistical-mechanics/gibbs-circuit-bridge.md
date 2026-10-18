# Finite Gibbs-state preparation under a sparse-oracle model

This mathematical bridge connects a finite-dimensional canonical Gibbs density
to the current published Quantum Algorithms Gibbs-purification algorithm. It
is an optional computational preparation route with explicit input-access and
cost assumptions. It does not derive a physical bath, assert equilibration, or
report experimental data.

<a id="QGA0"></a>
## QGA0. Target Gibbs density and its canonical purification

Let $H$ be a Hermitian operator on a nonzero finite-dimensional complex
Hilbert space $\mathcal H$ of dimension $d$, with energy values in joules, and
let $\beta>0$ have units $\mathrm J^{-1}$. Use the same-page
`lem-qsm-matrix-state-calculus` for finite Hermitian diagonalization,
functional calculus and trace identities. Its coordinate-space formulation
applies to this arbitrary $\mathcal H$: the chosen ordered orthonormal basis
identifies $\mathcal H$ unitarily with $\mathbb C^d$, and conjugating its
spectral constructions by that identification gives the same operators and
trace. This requires no site factorization or local $\mathbb C^q$ product
model. The matrix exponential is defined by that finite-dimensional
functional calculus (equivalently its convergent power series). Set
$$Z_\beta=\operatorname{tr}(e^{-\beta H})>0,\qquad
\rho_\beta=Z_\beta^{-1}e^{-\beta H}.$$
Positivity of each eigenvalue $e^{-\beta E_j}$ and finiteness of the eigenvalue
sum prove $Z_\beta>0$ and $\rho_\beta$ is a density operator. The exponent
$\beta H$ is dimensionless. The finite density interface is the published
root item `def-qc-density-operator`; it is a mathematical object, independent
of how a physical system is prepared.

Choose an ordered orthonormal basis $(e_j)_{j=1}^d$ and its identified copy in
a reference register $\mathcal H_R$. Define the maximally entangled unit
vector
$$|\Phi_d\rangle=d^{-1/2}\sum_{j=1}^d e_j\otimes e_j$$
and
$$|\Psi_\beta\rangle=\sqrt{\frac d{Z_\beta}}
(e^{-\beta H/2}\otimes I_R)|\Phi_d\rangle.$$
The norm identity
$$\langle\Phi_d|(A\otimes I_R)|\Phi_d\rangle
=d^{-1}\operatorname{tr}(A)$$
for every matrix $A$ follows by expanding the finite sum in the displayed
basis. With $A=e^{-\beta H}$ it proves $\|\Psi_\beta\|=1$. The finite
partial-trace definition `def-qc-partial-trace` and its trace-pairing
characterization give
$$\operatorname{Tr}_R(|\Psi_\beta\rangle\langle\Psi_\beta|)
=\frac{e^{-\beta H/2}I e^{-\beta H/2}}{Z_\beta}=\rho_\beta.$$
The normalized vector is a purification of the target Gibbs density. The
identity is basis-specific only in its displayed construction; the resulting
reduced operator is exactly the basis-independent matrix $\rho_\beta$.

<a id="QGA1"></a>
## QGA1. A costed circuit procedure

Assume the finite input additionally supplies every object required by the
published sparse-oracle procedure `alg-qa-30-sdp-gibbs-purification` for the
matrix $H$ and coefficient $\eta=\beta$: a finite decoded Hermitian matrix
approximating $\beta H$ within its declared operator-norm error budget, its
certified norm and sparse-oracle bounds, the required controlled evolutions
and inverses, an implementation of the maximally entangled reference-state
preparation, all precision and coefficient-generation routines, and their
costs. Let $\varepsilon_{\rm out}>0$ be the requested purification-vector
error and $0<\rho<1$ the rational amplification failure target. The access
contract must also supply the exact energy-shift and block-encoding inputs
specified in the algorithm; no matrix exponential, trace, spectral minimum,
oracle, or gate is supplied for free.

Run the normalized-output branch of
`alg-qa-30-sdp-gibbs-purification` with these inputs and parameters. On its
successful good-flag branch, return the normalized state register as an
approximate purification; measure only the procedure's specified good/bad
flag, as required by that algorithm. Retain the declared `FAIL` outcome when
the cap is reached. If the certified energy-shift event fails, the Gibbs
approximation guarantee below is not asserted; any overall failure bound must
include the supplied shift-confidence budget. The algorithm's target matrix
$G$ differs from $\beta H$ by a scalar multiple of identity. For a real scalar
$c$, $e^{-(\beta H+cI)}=e^{-c}e^{-\beta H}$ and its trace is multiplied by
the same factor, so the normalized density is exactly $\rho_\beta$; the
normalized purification vector is unchanged as well. Every sparse-oracle, controlled,
inverse, reflection, reference-preparation, arithmetic, precision, ancilla,
measurement, and classical cost remains the one declared by the invoked
algorithm and its inputs.

The mathematical algorithm is useful only when its finite access model is
available. A generic finite Hermitian matrix with no sparse representation or
no costed block access does not automatically meet this contract. It is not a
physical thermalization procedure.

<a id="QGA2"></a>
## QGA2. Correctness and reduced-state error

Under QGA1's access and successful energy-shift hypotheses, the published
`thm-qa-30-sdp-gibbs-state-error-cost` gives a normalized output vector
$|\widetilde\Psi_\beta\rangle$ within vector norm $\varepsilon_{\rm out}$ of
$|\Psi_\beta\rangle$ up to a global phase, with its stated amplification
probability and resource bound. We show that its system marginal is within
trace distance $\varepsilon_{\rm out}$ of $\rho_\beta$.

For unit vectors $u,v$, multiply $v$ by a phase so $s=\langle u,v\rangle$ is
real and lies in $[0,1]$. If $s=1$, their rank-one projectors agree. Otherwise
write $v=su+\sqrt{1-s^2}w$ with $w\perp u$ and $\|w\|=1$. In the basis $(u,w)$,
the difference $|u\rangle\langle u|-|v\rangle\langle v|$ has trace zero and
eigenvalues $\pm\sqrt{1-s^2}$; it vanishes on the orthogonal complement.
Therefore its trace distance is $\sqrt{1-s^2}$. Meanwhile
$$\|u-v\|^2=2(1-s),\qquad
1-s^2=(1-s)(1+s)\le2(1-s),$$
so the trace distance between their pure density operators is at most
$\|u-v\|$.

Partial trace is trace-distance contractive in this finite setting; the proof
uses only its actual root published interface. For any Hermitian trace-zero
matrix $X$, diagonalization writes $X=X_+-X_-$ with $X_\pm\ge0$ and
$\operatorname{tr}X_+=\operatorname{tr}X_-=\|X\|_1/2$. For any effect
$0\le F\le I$, finite positive square roots and trace cyclicity give
$$0\le\operatorname{tr}(FX_+)
=\operatorname{tr}(X_+^{1/2}FX_+^{1/2})\le\operatorname{tr}(X_+),$$
and the same bounds hold for $X_-$. Hence
$|\operatorname{tr}(FX)|\le\|X\|_1/2$.
For $Y=\operatorname{Tr}_R X$, the partial-trace trace-pairing identity gives
$\operatorname{tr}(FY)=\operatorname{tr}((F\otimes I_R)X)$, and
$F\otimes I_R$ is again an effect: diagonalizing the finite effect $F$ shows
that this tensor product with identity has the same eigenvalues, repeated by
$\dim\mathcal H_R$. Taking $F$ to be the positive spectral
projection of the trace-zero Hermitian matrix $Y$ attains
$\operatorname{tr}Y_+=\|Y\|_1/2$; applying the preceding bound to
$F\otimes I_R$ proves $\|Y\|_1\le\|X\|_1$. This proves contraction for the
specific partial trace without importing a general infinite-dimensional
channel theorem.

Apply these two finite inequalities to the normalized output and ideal
purification, then take their system partial traces. By QGA0 the ideal
partial trace is $\rho_\beta$, and thus
$$D\!\left(\operatorname{Tr}_R
|\widetilde\Psi_\beta\rangle\langle\widetilde\Psi_\beta|,\rho_\beta\right)
\le\varepsilon_{\rm out}.$$
This is a state-preparation error bound conditional on the specified
algorithmic success events. It makes no statement about finite measurement
frequencies, real-bath preparation, or the physical accuracy of the input
Hamiltonian model.

2026-10-17 source-level amendment: QGA0 replaces the former inventory edge to `def-qsm-local-finite-tensor-state` with `lem-qsm-matrix-state-calculus` on the same states page. QGA0–QGA2 retain their full definitions, normalized purification, access/success conditions, failure outcome, resource accounting and marginal-error guarantee. See `research/physics-remaining-80-2026-10-17-qsm-cycle-resolution.md`; historical audit/readings are not renewed by this correction.
