---
id: thm-csm-dk-compact-hamiltonian-linear-response
kind: theorem
title: Exact finite-time response on a compact Hamiltonian phase
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-dk-hamiltonian-flow-measure
  - lem-csm-dk-volume-form-pullback-preserves-reference-measure
  - def-countable-choice
  - def-hamiltonian-vector-field-and-hamiltonian-function
  - def-time-dependent-hamiltonian-vector-field-and-flow
  - thm-smooth-dependence-of-ode-solutions-on-parameters
  - thm-chain-rule-for-total-derivatives
  - thm-liouville-volume-preservation
  - prop-a-hamiltonian-is-conserved-along-its-own-flow
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-dominated-convergence
dependency_roles:
  def-csm-dk-hamiltonian-flow-measure: mathematical-premise
  lem-csm-dk-volume-form-pullback-preserves-reference-measure: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hamiltonian-vector-field-and-hamiltonian-function: mathematical-premise
  def-time-dependent-hamiltonian-vector-field-and-flow: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-liouville-volume-preservation: mathematical-premise
  prop-a-hamiltonian-is-conserved-along-its-own-flow: mathematical-premise
  thm-integrals-are-invariant-under-measure-preserving-maps: mathematical-premise
  thm-dominated-convergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: David Tong, Classical Dynamics, complete author-hosted lecture notes, §4.2
      url: https://davidtong.org/teaching/classical-dynamics/dynhtml/S4
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §3.2
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/03:_Ergodicity_and_the_Approach_to_Equilibrium/3.02:_Phase_Flows_in_Classical_Mechanics
    - title: MIT OpenCourseWare, 22.103 Microscopic Theory of Transport, Lecture 3, pp. 1–4
      url: https://ocw.mit.edu/courses/22-103-microscopic-theory-of-transport-fall-2003/42a7a0ddcb94eb23f6c096ae04da0162_lec3.pdf
---

## Statement

Let $(M,\omega,H,\Phi,m_0)$ be a nonempty compact symplectic phase datum
without boundary, with $H\in C^\infty(M,\mathbb R)$. Let
$A,B\in C^\infty(M,\mathbb R)$ be observables, let $\beta>0$, and assume
$Z_\beta=\int_Me^{-\beta H}\,dm_0$ is finite and positive. Put
$d\mu_\beta=Z_\beta^{-1}e^{-\beta H}\,dm_0$. For $T>0$ and every
$t\in[0,T]$, choose
$h\in C^\infty([0,T],\mathbb R)$ and perturb the Hamiltonian to
$H_\epsilon(t,z)=H(z)-\epsilon h(t)B(z)$, where $\epsilon$ is dimensionless.
In SI, time has unit s. If $H$ is in J, $A$ has units $[A]$, and $B$ has
units $[B]$, then $h$ has units J$/[B]$, $\beta$ has units J$^{-1}$, and the
response derivative has units $[A]$.

Start every perturbed trajectory at the same unperturbed initial law
$\mu_\beta$ and define
$\langle A(t)\rangle_\epsilon=\int_M A(z_\epsilon(t;z))\,d\mu_\beta(z)$.
Then the derivative at $\epsilon=0$ exists and is
$$\left.\frac{d}{d\epsilon}\langle A(t)\rangle_\epsilon\right|_{\epsilon=0} =\int_0^t h(s)R_{AB}(t-s)\,ds,\qquad R_{AB}(u)=\beta\int_M(X_HB)(z)A(\Phi_u z)\,d\mu_\beta(z).$$
For constant $h(t)=h_0$, define the equilibrium correlation
$$C_{BA}(u)=\int_M(B-\langle B\rangle_\beta)(z) (A-\langle A\rangle_\beta)(\Phi_u z)\,d\mu_\beta(z).$$
Then the finite-time response is
$\beta h_0[C_{BA}(0)-C_{BA}(t)]$. If $C_{BA}(t)\to0$, its long-time limit
is $\beta h_0\operatorname{Cov}_{\mu_\beta}(B,A)$. No decay of this
correlation is assumed in the finite-time formula.

## Facts & Assumptions

**Given:** Compact boundaryless symplectic $M$, smooth $H,A,B$, a normalized canonical law, an unperturbed initial preparation, and a smooth finite-time control coupled as $H-\epsilon h(t)B$.

[A1] Assume $\mathrm{AC}_\omega$ for the positive-density measure construction in [[def-countable-choice]]. The phase $M$ is nonempty compact without boundary; $H,A,B$ are smooth real functions; $\beta>0$; $0<Z_\beta<\infty$; $h$ is smooth on $[0,T]$; and the initial law is the fixed unperturbed $\mu_\beta$.

[A2] $\epsilon$ is dimensionless, time is measured in s, $H$ has units J, $A$ has units $[A]$, $B$ has units $[B]$, $h$ has units J$/[B]$, and $\beta$ has units J$^{-1}$.

[F1] [[def-csm-dk-hamiltonian-flow-measure]] and [[def-hamiltonian-vector-field-and-hamiltonian-function]]: the sign convention is $\iota_{X_F}\omega=dF$, so $X_BH=dH(X_B)=-dB(X_H)=-X_HB$.

[F2] [[def-time-dependent-hamiltonian-vector-field-and-flow]]: the perturbation field is $X_H-\epsilon h(t)X_B$.

[F3] [[thm-smooth-dependence-of-ode-solutions-on-parameters]]: in Euclidean charts, solutions on a common compact time interval depend smoothly on the parameter. The finite-chart continuation and overlap argument needed for this compact-manifold application is supplied in step 1.1.

[F4] [[thm-liouville-volume-preservation]] and [[lem-csm-dk-volume-form-pullback-preserves-reference-measure]]: the unperturbed and $X_B$ flows preserve $m_0$ on their domains.

[F5] [[prop-a-hamiltonian-is-conserved-along-its-own-flow]]: $H\circ\Phi_t=H$. Together, [F4], the definition of $\mu_\beta$, and [[thm-integrals-are-invariant-under-measure-preserving-maps]] make $\mu_\beta$ invariant under $\Phi_t$.

[F6] [[thm-integrals-are-invariant-under-measure-preserving-maps]]: composition by a measure-preserving flow map leaves integrals unchanged.

[F7] [[thm-dominated-convergence]]: on compact $M$, the bounded parameter difference quotients may be passed through the $\mu_\beta$ integral.

[F8] [[thm-chain-rule-for-total-derivatives]]: derivatives of smooth observables along the flow are obtained by applying the generating vector field, using the ordinary Euclidean chain rule in each coordinate chart.

## Proof

**Given:** [A1]–[A2] and [F1]–[F8].

1.1 The perturbed field is the smooth time-dependent field
$X_H-\epsilon h(t)X_B$ by [F2]. Cover compact $M$ by finitely many smaller
coordinate neighborhoods whose closures lie in larger coordinate charts.
The coordinate fields and their first derivatives are bounded on these
closures, uniformly for $t\in[0,T]$ and $\epsilon$ in a fixed compact
neighborhood of zero. Local ODE existence therefore gives a common positive
continuation time from every point in each smaller neighborhood. Taking the
minimum over the finite cover extends every solution across $[0,T]$: a
purported finite endpoint can be restarted from a point within that common
time of the endpoint. The same argument applies backward for the
unperturbed flow. The Euclidean smooth-parameter theorem [F3], applied in
these charts on successive common time intervals, gives the smooth
parameter variation
$\xi(s)=\partial_\epsilon z_\epsilon(s;z)|_{\epsilon=0}\in
T_{\Phi_sz}M$ with $\xi(0)=0$. In a chart $x$, write $X_H^x$ and $X_B^x$
for the coordinate components. There the ordinary variational equation is
$$\dot\xi^a(s)=\partial_bX_H^{x,a}(\Phi_sz)\xi^b(s)-h(s)X_B^{x,a}(\Phi_sz).$$
Here $\partial_bX_H^{x,a}$ is the matrix of derivatives of coordinate
components in that chart; it is not asserted to be a canonical tangent
endomorphism. If $y$ is another chart and $\chi=y\circ x^{-1}$ is the
transition map, then $\xi^y=D\chi\,\xi^x$ and
$X_H^y\circ\chi=D\chi\,X_H^x$, with the analogous identity for $X_B$.
Differentiating these identities along the reference path shows that the
two variational equations agree: the extra term is
$D^2\chi[X_H^x,\xi^x]$, which equals
$D^2\chi[\xi^x,X_H^x]$ by symmetry of the second derivative. Thus the
variation is intrinsically defined. The tangent map
$Y(t,s)=D\Phi_{t-s}|_{\Phi_sz}:T_{\Phi_sz}M\to T_{\Phi_tz}M$ is likewise
intrinsic. In chart coordinates, variation of constants for the local
linear variational equations, composed across the finite chart intervals,
gives the intrinsic identity
$$\xi(t)=-\int_0^t h(s)\,D\Phi_{t-s}|_{\Phi_sz}\,X_B(\Phi_sz)\,ds,$$
where the integral is in the fixed vector space $T_{\Phi_tz}M$. Applying
the differential of $A$ and the chain rule [F8] gives
$$\left.\partial_\epsilon A(z_\epsilon(t;z))\right|_0 =-\int_0^t h(s)\,[X_B(A\circ\Phi_{t-s})](\Phi_sz)\,ds.$$
[A1, F2, F3, F8, given, construct]

2.1 All integrands in step 1.1 and their parameter difference quotients are
bounded on the compact manifold and finite time slab. Thus [F7] passes the
derivative through the initial-law integral. Invariance of $\mu_\beta$ under
$\Phi_s$ from [F5]–[F6] then gives
$$\left.\frac{d}{d\epsilon}\langle A(t)\rangle_\epsilon\right|_0 =-\int_0^t h(s)\int_M X_B(A\circ\Phi_{t-s})\,d\mu_\beta\,ds.$$
[F5, F6, F7, step 1.1]

2.2 Write $\rho_\beta=Z_\beta^{-1}e^{-\beta H}$. For any smooth $G$, let
$\Psi_\tau$ be the flow of $X_B$. By [F4], $\Psi_\tau$ preserves $m_0$.
Consequently
$$\int_MG(\Psi_\tau z)\rho_\beta(z)\,dm_0(z) =\int_MG(y)\rho_\beta(\Psi_{-\tau}y)\,dm_0(y).$$
Differentiate at $\tau=0$; compactness bounds the derivatives, so
differentiation under the integral is justified by [F7]. This proves
$\int\rho_\beta X_BG\,dm_0=-\int G X_B\rho_\beta\,dm_0$. From [F1],
$X_BH=-X_HB$, hence
$X_B\rho_\beta=-\beta\rho_\beta X_BH
=\beta\rho_\beta X_HB$. Therefore
$$-\int_M X_BG\,d\mu_\beta =\beta\int_MG(X_HB)\,d\mu_\beta.$$
[A1, F1, F4, F7, step 1.1, algebra]

3.1 Apply step 2.2 with $G=A\circ\Phi_{t-s}$ in step 2.1. This gives $R_{AB}(t-s)$ and proves the stated response formula. [F1, step 2.1, step 2.2]

4.1 For the correlation, differentiate under the integral on compact $M$: $C_{BA}'(u)=\int(B-\langle B\rangle_\beta) X_H(A\circ\Phi_u)\,d\mu_\beta$. Applying the same measure-preserving-flow argument as step 2.2 with $X_H$ and using $X_H\rho_\beta=0$ gives $C_{BA}'(u)=-\int(X_HB)(A\circ\Phi_u)\,d\mu_\beta$; the constant $\langle A\rangle_\beta$ contributes zero since $\int X_HB\,d\mu_\beta=0$. For constant $h_0$, step 3.1 is therefore $-\beta h_0\int_0^t C'_{BA}(u)\,du =\beta h_0[C_{BA}(0)-C_{BA}(t)]$. If $C_{BA}(t)\to0$, the limit is $\beta h_0C_{BA}(0)=\beta h_0\operatorname{Cov}_{\mu_\beta}(B,A)$. [F4, F5, F7, step 2.2, step 3.1, algebra] ∎

## Remarks

The conclusion is a mathematical model prediction conditional on its compact phase, smooth-control, and canonical-preparation hypotheses. The cited statistical-mechanics treatments motivate response/correlation formulas; the proof above supplies this precise finite-time sign convention and does not extend it to noncompact phases or unproved decay assumptions.
