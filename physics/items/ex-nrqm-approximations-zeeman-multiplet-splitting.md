---
id: ex-nrqm-approximations-zeeman-multiplet-splitting
aliases: [nrqm-approximations-zeeman-multiplet-splitting]
kind: example
domain: physics
title: "A spin-one multiplet in a uniform field: the exact Zeeman spectrum and degenerate first-order check"
status: published
origin: session
dependency_level: 12
deps: [post-nrqm-angular-momentum-magnetic-moment-coupling, def-nrqm-kinematics-framework-massive-spin-s-model, pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws, prop-nrqm-orbital-and-spin-finite-spin-matrices, def-nrqm-approximations-framework-perturbed-family-model, pthm-nrqm-approximations-degenerate-first-order-splitting, def-nrqm-framework-quantities-and-units, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-identical-particles-and-spin, def-nrqm-observables-framework-observable-and-outcome-law, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  post-nrqm-angular-momentum-magnetic-moment-coupling: physical-assumption
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws: physical-result
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  def-nrqm-approximations-framework-perturbed-family-model: formulation-prerequisite
  pthm-nrqm-approximations-degenerate-first-order-splitting: physical-result
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional finite-level computation for the declared spin-one internal multiplet of the massive spin-s model with the adopted effective magnetic-moment coupling: the Zeeman family H0 + lambda V with H0 = epsilon I on the three-dimensional multiplet and V = -gamma B S3, its three energy eigenvalues counted with multiplicity (three distinct levels occur exactly when lambda gamma is nonzero), the first-order operator P0VP0 = V and the corresponding degenerate-perturbation localisation, and the absence of any relaxation or branch selection statement. The example identifies no laboratory species, reports no measured splitting or gyromagnetic ratio, and asserts no detector record."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.1.3 printed pages 208-211 (PDF pages 216-219), Eq. (9.25): the perturbation HBs = mu_B B(Lz + 2Sz) = mu_B B(Jz + Sz), its diagonalisation in the m_l, m_s labels and the Zeeman/Paschen-Back splitting patterns"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two State Systems', Sections 2-4 printed and PDF pages 2-10: spin precession in a magnetic field (Section 2), the general two-state system viewed as a spin system (Section 3), and the ammonia molecule as a two-state system (Section 4); the spin operator along a field direction, its two eigenvalues and the magnetic-dipole energy are read in this range"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b27e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
verification:
  precheck: pass
---

## Example

Adopt P1, P2, P4 and P6 for the massive spin-$s$ particle model of
[[def-nrqm-kinematics-framework-massive-spin-s-model]]
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-identical-particles-and-spin]]), together with the
effective magnetic-moment coupling
[[post-nrqm-angular-momentum-magnetic-moment-coupling]] with real
gyromagnetic parameter $\gamma:=\gamma_{1}$ and the spin-one internal factor
$\mathbb C^{3}$ with spin operators $S_i=\hbar J_i$ of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] at $s=1$; read energies in
joules as in [[def-nrqm-framework-quantities-and-units]]. Declare the
**finite-level Zeeman model** by the perturbed-family model of
[[def-nrqm-approximations-framework-perturbed-family-model]] with
$$\mathfrak H:=\mathbb C^{3},\qquad H_{0}:=\varepsilon I_{3},\qquad V:=-\gamma B_{z}S_{3},$$
where $\varepsilon\in\mathbb R$ is a declared multiplet energy, $B_{z}>0$ is
the field magnitude in tesla of the uniform field $\mathbf B=(0,0,B_{z})$,
so that the family is $H(\lambda)=H_{0}+\lambda V$ with real coupling
$\lambda$ (dimensionless, equal to $1$ for the physical field) and
$v=\|V\|=|\gamma|B_{z}\hbar$. For the physical value $\lambda=1$ the family is
the model's Zeeman operator on the internal multiplet. Then:

(a) the perturbation preserves the multiplet: $[H_{0},V]=0$, the
first-order operator is $V_{E}=V$, and its eigenvalues counted with
multiplicity are $-\hbar\gamma B_{z},0,+\hbar\gamma B_{z}$ in joules. If
$\gamma\ne0$, these are three distinct simple eigenvalues; if $\gamma=0$,
the only eigenvalue is $0$ with multiplicity three. Thus the first-order
operator describes a triply degenerate level when the adopted magnetic
coupling vanishes;

(b) the exact energy eigenvalues of the family, counted with multiplicity,
are
$$\varepsilon-\lambda\hbar\gamma B_{z},\qquad \varepsilon,\qquad \varepsilon+\lambda\hbar\gamma B_{z}.$$
They are three distinct simple levels exactly when $\lambda\gamma\ne0$;
when $\lambda=0$ or $\gamma=0$, the only energy is $\varepsilon$ with
multiplicity three. Each eigenvalue is affine in $\lambda$, so its
second-order and higher Taylor coefficients vanish identically;

(c) when $v>0$, the page's degenerate theorem applies for every $g>0$ (the
gap condition is vacuous because the spectrum of $H_{0}$ is the single value
$\varepsilon$) and every real $\lambda$ with $|\lambda|v<g/4$; each
eigenvalue $z$ then satisfies
$\operatorname{dist}(z,\varepsilon+\lambda\operatorname{spec}(V_{E}))
\le 4\lambda^{2}v^{2}/g$, and the exact spectrum in (b) shows that this
distance is $0$. If $v=0$, equivalently $\gamma=0$, then
$H(\lambda)=\varepsilon I_{3}$ for every real $\lambda$, so the same
distance is $0$ directly, without invoking the theorem's positive-norm
hypothesis. In both cases the first-order eigenvalue set is exact, with
multiplicity retained as in (a)-(b);

(d) for a unit preparation vector $u\in\mathbb C^3$, put
$u(t)=e^{-itH(\lambda)/\hbar}u$ and $s_i(t)=\langle S_i u(t),u(t)\rangle$.
With $\omega=\lambda\gamma B_z$ (in $\mathrm{s^{-1}}$),
$$s_3(t)=s_3(0),\qquad s_1(t)=\cos(\omega t)s_1(0)+\sin(\omega t)s_2(0),\qquad s_2(t)=\cos(\omega t)s_2(0)-\sin(\omega t)s_1(0).$$
Thus the transverse means rotate by $-\omega t$, with the signed Larmor
parameter $\omega$ equal to $\gamma B_z$ at $\lambda=1$;

(e) no branch selection: the energy eigenspaces of (b) are spectral data of
the family; a preparation in any eigenstate is stationary, and a superposition
evolves with the relative phases of (b). The example asserts
no instantaneous transition of any preparation to the lowest sublevel, no
relaxation and no measurement; which sublevel a preparation occupies is
fixed by the preparation and by P4.

## Verification

**Given:** the declared spin-one model with internal factor $\mathbb C^{3}$,
spin matrices $S_{1},S_{2},S_{3}$ with $[S_{i},S_{j}]=i\hbar\varepsilon_{ijk}S_{k}$
and spectrum $\sigma(S_{3})=\hbar\{-1,0,1\}$; the field data
$\mathbf B=(0,0,B_{z})$, $B_{z}>0$; the gyromagnetic parameter $\gamma$; the
multiplet energy $\varepsilon$; the family $H(\lambda)=\varepsilon
I_{3}-\lambda\gamma B_{z}S_{3}$; the Axiom of Countable Choice and the Axiom
of Choice as the choice hypotheses of the cited suppliers.

[L1] **Internal spin matrices.** On $\mathbb C^3$ the orthonormal basis $e_m$, $m=1,0,-1$, satisfies $S_3e_m=\hbar m e_m$, and the self-adjoint matrices satisfy $[S_i,S_j]=i\hbar\varepsilon_{ijk}S_k$, by [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] at $s=1$ and the internal-factor reading of [[def-nrqm-kinematics-framework-massive-spin-s-model]] clause (c). Consequently $\|S_3\|=\hbar$ and its three internal eigenspaces are lines. The amplified operators on the full spatial state space of [[pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws]] have different eigenspace multiplicities; only their internal matrices are used here.

[L2] **Finite-dimensional autonomous flow.** P4 assigns $U(t)=e^{-itH(\lambda)/\hbar}$ on the declared finite state space ([[post-nrqm-framework-autonomous-dynamics]]). The matrix exponential is the everywhere convergent power series; differentiating that series gives $U'=-iH(\lambda)U/\hbar$. For a fixed matrix $A$, the product rule gives $(U^*AU)'=(i/\hbar)U^*[H(\lambda),A]U$; all domains are $\mathbb C^3$.

[L3] **The model's degenerate theorem.** Under the perturbed-family model
with an isolated finite-multiplicity label $E$ of $H_{0}$ and gap at least
$g>0$, for $|\lambda|v<g/4$ every eigenvalue $z$ of $H(\lambda)$ with
$|z-E|+|\lambda|v\le g/2$ satisfies
$\operatorname{dist}(z,E+\lambda\operatorname{spec}(V_{E}))\le4\lambda^{2}v^{2}/g$,
where $V_{E}=(P_{0}VP_{0})|_{P_{0}\mathfrak H}$
([[pthm-nrqm-approximations-degenerate-first-order-splitting]],
[[def-nrqm-approximations-framework-perturbed-family-model]]).

[L4] **Elementary spectral facts for a scalar multiple of $S_{3}$.** For a
bounded self-adjoint operator $T$ with spectrum $\sigma(T)$ and real
$a\ne0$, the operator $aT$ has spectrum $a\sigma(T)$; here
$H(\lambda)=\varepsilon I-\lambda\gamma B_{z}S_{3}$ therefore has the
eigenvalues $\varepsilon-\lambda\gamma B_{z}s$ for $s\in
\sigma(S_{3})=\hbar\{-1,0,1\}$, and
$\|V\|=|\gamma|B_{z}\|S_{3}\|=|\gamma|B_{z}\hbar$
([[pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws]] clause (a),
algebra).

**Proof technique:** direct; read the spectrum of the scalar multiple of
$S_{3}$ from the supplied spin spectrum, verify that the first-order
operator is the whole perturbation, and compare the exact energy eigenvalues
with the page's degenerate localisation bound.

**Given:** the data of the Example and [L1]-[L4].

1.1 [The first-order data] $H_{0}=\varepsilon I$ has the single spectral value $\varepsilon$ with full eigenspace $\mathfrak H=\mathbb C^{3}$, so $P_{0}=I$ and $Q_{0}=0$; the perturbation is $V=-\gamma B_{z}S_{3}$, bounded self-adjoint with norm $v=|\gamma|B_{z}\hbar$ by [L4]; and $V_{E}=(P_{0}VP_{0})|_{P_{0}\mathfrak H} =V$. By [L1] the spectrum of $S_{3}$ is $\hbar\{-1,0,1\}$, so by [L4] the spectrum of $V_{E}$ is $\{-\hbar\gamma B_{z},0,+\hbar\gamma B_{z}\}$; if $\gamma\ne0$ these three eigenvalues of $V$ are simple, while for $\gamma=0$ one has $V=0$. This is clause (a). [L1, L4, given, algebra]

2.1 [Exact spectrum with multiplicity] If $\lambda\gamma\ne0$, [L1] and [L4] give three distinct simple eigenvalues $\varepsilon-\lambda\hbar\gamma B_{z}$, $\varepsilon$, and $\varepsilon+\lambda\hbar\gamma B_{z}$. If $\lambda\gamma=0$, then $H(\lambda)=\varepsilon I_{3}$, so $\varepsilon$ is the sole eigenvalue and has multiplicity three. In both cases each energy label is affine in $\lambda$, with derivative the corresponding eigenvalue of $V_E$ and with all higher Taylor coefficients zero. This is clause (b). [L1, L4, step 1.1, algebra]

3.1 [The localisation check and zero branch] Since $\sigma(H_0)=\{\varepsilon\}$, any $g>0$ is a gap in the stated convention. Each eigenvalue of step 2.1 has $|z-\varepsilon|\le|\lambda|v$, so $|\lambda|v<g/4$ implies $|z-\varepsilon|+|\lambda|v<g/2$, exactly the controlled window required by [L3]. For $v>0$ the theorem therefore applies; the actual distance is already zero by the exact spectrum of step 2.1, for every real $\lambda$. One could also send $g\to\infty$ while keeping $\lambda$ fixed to make the upper bound tend to zero; decreasing $g$ would not do so. If $v=0$, then $\gamma=0$ and the family is constant, with the same zero distance directly and no division by $v$. This proves (c) in all branches. [L3, step 1.1, step 2.1, given, algebra]

4.1 [Finite-level conservation, precession and scope] Put $\omega=\lambda\gamma B_z$ and $A_i(t)=U(t)^*S_iU(t)$. By [L1] and [L2], $A_3'=0$, $A_1'=\omega A_2$ and $A_2'=-\omega A_1$, with $A_i(0)=S_i$. The matrices $A_1=\cos(\omega t)S_1+\sin(\omega t)S_2$ and $A_2=\cos(\omega t)S_2-\sin(\omega t)S_1$ satisfy these equations and initial data. Uniqueness follows entrywise: for the difference of two solutions, the derivative of $|a_1|^2+|a_2|^2$ is zero, and its initial value is zero. Pairing with $u$ proves (d), including zero frequency. The scalar $\varepsilon I$ cancels from the commutators and contributes only a common phase. Each energy eigenvector evolves by its scalar phase, while a superposition has the relative phases of step 2.1. This proves (e), with no transition, relaxation, branch selection, measurement or laboratory identification assumed. [L1, L2, step 2.1, given, algebra] ∎

## Remarks

- **Degenerate perturbation theory is exact here.** The perturbation
  commutes with $H_{0}$ and acts inside the multiplet, so the first-order
  operator is the whole perturbation and there is no second-order shift; when
  $\lambda\gamma\ne0$ it gives three distinct levels, while zero coupling
  leaves one triply degenerate level. The example exhibits the degenerate
  theorem's first-order content on a clean exactly solvable family. This is
  the Zeeman side of the page's examples;
  the Stark side uses a nondegenerate truncation with a genuine
  second-order shift.
- **No relaxation.** When distinct levels occur, they do not force a
  preparation to move to the lowest one; the affine spectral shifts, with
  degeneracy retained at zero coupling, are statements about the spectrum, in
  agreement with the corrected reading of the textbook degenerate-perturbation
  conjecture recorded in
  [[rem-nrqm-approximations-scope-and-empirical-status]].
