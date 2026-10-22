---
id: pthm-emx-drude-plasma-response
kind: physics-theorem
title: "Drude conductivity, passive energy and plasma cutoff"
status: draft
origin: pipeline
domain: physics
dependency_level: 3
proof_strategy: direct
deps:
  - post-emx-drude-current-closure
  - def-countable-choice
  - def-em-plane-wave-definition
  - def-em-si-conventions
  - pthm-emx-oscillator-energy
  - pthm-em-macroscopic-maxwell
  - lem-cm-cross-product-triple-identity
  - thm-of-square-roots
dependency_roles:
  post-emx-drude-current-closure: physical-assumption
  def-countable-choice: mathematical-premise
  def-em-plane-wave-definition: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  pthm-emx-oscillator-energy: physical-result
  pthm-em-macroscopic-maxwell: physical-result
  lem-cm-cross-product-triple-identity: mathematical-premise
  thm-of-square-roots: mathematical-premise
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional harmonic response and transverse bulk dispersion for the phenomenological Drude current closure in a fixed homogeneous material rest frame. The energy statement is conditional on the proved Drude branch of the augmented-energy theorem and the smooth finite-energy Maxwell model. The cutoff applies to nonzero real-wavevector transverse bulk modes in the collisionless branch only; it asserts no interface modes, longitudinal plasma oscillations, experimental validation or microscopic carrier theory."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (236-page complete text)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§7.6.1, printed pp. 205–206: the Drude conductivity from a damped free-carrier equation; §7.6.2, pp. 207–208: the frequency-dependent dielectric response and collisionless plasma cutoff. The wavelength and microscopic-regime qualifications in the source are not generalized here."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course, complete University of Texas at Austin lecture notes"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node100.html"
      locator: "Node 100, equations (1150)–(1165): collisionless plasma permittivity, transverse dispersion and below-cutoff attenuation; no claim about all plasma modes is imported."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course, complete University of Texas at Austin lecture notes"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node103.html"
      locator: "Node 103, equations (1201)–(1209): damped current response and its collisional/conductor limits; the current closure is treated as phenomenological."
---

## Statement

Assume Countable Choice, the hypothesis carried by the finite-energy Maxwell supplier. Work in a fixed homogeneous material rest frame in SI and standard right-handed Cartesian coordinates with orthonormal basis $\hat x,\hat y,\hat z$. Let $\varepsilon_\infty>0$ be in F m$^{-1}$, $\mu>0$ in H m$^{-1}$, $a>0$ in F m$^{-1}$ s$^{-2}$, and $\gamma\ge0$ in s$^{-1}$ as in the adopted Drude current closure. For a spatially uniform harmonic electric field $E(t)=\operatorname{Re}(e e^{-i\omega t})$, with $\omega>0$ in s$^{-1}$ and $e$ in V m$^{-1}$, the carrier-current amplitude $v$ in A m$^{-2}$ and polarization amplitude $p$ in C m$^{-2}$ satisfy $V(t)=\operatorname{Re}(v e^{-i\omega t})$ and $P(t)=\operatorname{Re}(p e^{-i\omega t})$. The conductivity $\sigma(\omega)$ is the complex scalar mapping $e$ to $v$, in S m$^{-1}$, and the absolute permittivity $\varepsilon(\omega)$ is the scalar mapping $e$ to the displacement amplitude in $D=\varepsilon_\infty E+P$, in F m$^{-1}$.

For every $\omega>0$,

$$\sigma(\omega)=\frac{a}{\gamma-i\omega},\qquad \operatorname{Re}\sigma(\omega)=\frac{a\gamma}{\gamma^2+\omega^2}\ge0,\qquad \varepsilon(\omega)=\varepsilon_\infty-\frac{a}{\omega(\omega+i\gamma)}.$$

The carrier energy density and the loss term in the smooth Maxwell energy balance are $|V|^2/(2a)$ and $\gamma|V|^2/a$, respectively; the energy density has units J m$^{-3}$ and the loss density has units W m$^{-3}$.

In the collisionless branch $\gamma=0$, set $\omega_p:=\sqrt{a/\varepsilon_\infty}>0$ (so $\omega_p$ is in s$^{-1}$). For a source-free nonzero transverse bulk plane wave with real $k\in\mathbb R^3\setminus\{0\}$ in m$^{-1}$, frequency $\omega>0$ in s$^{-1}$, and nonzero complex electric amplitude $e$ satisfying $k\cdot e=0$, the Maxwell amplitude equations imply

$$|k|^2=\mu\varepsilon_\infty(\omega^2-\omega_p^2).$$

Thus $\omega>\omega_p$ admits source-free transverse modes with nonzero real wavevectors, while $0<\omega<\omega_p$ admits none with real wavevector. Extending the same harmonic ansatz to a complex wave number $\kappa$ in m$^{-1}$ along a coordinate $z$ in m, the positive-imaginary branch below cutoff gives a transverse mode that decays exponentially as $z$ increases; this is the evanescent meaning used here. At $\omega=\omega_p$ the symbol gives $k=0$, outside the stated nonzero-wavevector plane-wave class; no claim about the separate spatially uniform endpoint or longitudinal plasma oscillations is made.

## Statement references

[[post-emx-drude-current-closure]]

[[def-countable-choice]]

[[def-em-plane-wave-definition]]

[[def-em-si-conventions]]

[[pthm-emx-oscillator-energy]]

[[pthm-em-macroscopic-maxwell]]

## Diagram

This schematic projects a right-handed orthonormal triad for the real-wavevector transverse mode: $k$ is along $+\hat z$, the electric amplitude $e$ is along $\hat x$, and the magnetic-induction amplitude $b$ is along $+\hat y$. The axes are drawn in a two-dimensional projection; their right-handed three-dimensional convention is stated above. The mode construction and cross-product signs are proved in steps 3.1–4.1. The diagram does not depict the below-cutoff complex wave number as a real vector.

~~~tikz
\begin{tikzpicture}[>=stealth,scale=1.0]
  \draw[->,gray] (0,0) -- (2.4,0) node[below] {$\hat x$};
  \draw[->,gray] (0,0) -- (0.6,1.1) node[above right] {$\hat y$};
  \draw[->,gray] (0,0) -- (0,2.3) node[left] {$\hat z$};
  \draw[->,thick,blue] (0,0) -- (1.8,0) node[below=4pt] {$e$};
  \draw[->,thick,green!60!black] (0,0) -- (0.45,0.82) node[above right] {$b$};
  \draw[->,thick,red] (0,0) -- (0,1.8) node[left=4pt] {$k$};
\end{tikzpicture}
~~~

## Facts & Assumptions

**Given:** Countable Choice; the real Drude state equations $P_t=V$, $V_t+\gamma V=aE$, $D=\varepsilon_\infty E+P$, $B=\mu H$ in the material rest frame; the smooth macroscopic Maxwell equations in that framework; the SI constants and units; $\omega>0$; and, for the plane-wave claim, a source-free nonzero transverse harmonic mode with real $k\ne0$.

[A1] The free-carrier current and polarization obey $P_t=V$, $V_t+\gamma V=aE$ with $a>0$, $\gamma\ge0$; $D=\varepsilon_\infty E+P$ and $B=\mu H$ with constant positive scalars; the initial polarization is separately specified ([[post-emx-drude-current-closure]]).

[A2] In the smooth macroscopic model, $\operatorname{curl}E=-\partial_tB$ and $\operatorname{curl}H=J_f+\partial_tD$, with the free sources and the $D,H$ definitions of the framework ([[pthm-em-macroscopic-maxwell]], clause (b)).

[F1] The real plane-wave encoding uses $E(x,t)=\operatorname{Re}(e e^{i(k\cdot x-\omega t)})$ and $B(x,t)=\operatorname{Re}(b e^{i(k\cdot x-\omega t)})$, with real $k\ne0$, $\omega>0$, and complex amplitudes; the componentwise exponential encoding is real-field notation ([[def-em-plane-wave-definition]]).

[F2] For real vectors, $k\times(k\times e)=k(k\cdot e)-|k|^2e$; extending the cross product complex-bilinearly in the amplitude preserves this componentwise identity ([[lem-cm-cross-product-triple-identity]]).

[F3] Countable Choice is the set-theoretic assumption used by the finite-energy Maxwell energy supplier and is carried through the augmented-energy result ([[def-countable-choice]], [[pthm-emx-oscillator-energy]]).

[F4] Every positive real number has a unique positive square root ([[thm-of-square-roots]]).

[L1] The current augmented-energy carrier's Drude branch gives carrier storage $|V|^2/(2a)$ and local loss $\gamma|V|^2/a$ when $P_t=V$ and $V_t+\gamma V=aE$. Its complete current proof has been inspected; this use retains the exact weak-Poynting and Countable Choice hypotheses declared there ([[pthm-emx-oscillator-energy]], Drude branch of the Statement and Proof).

## Proof
**Proof technique:** solve the first-order current equation in harmonic form, use the established conditional Drude energy branch, then substitute the collisionless response into the smooth Maxwell plane-wave symbol.

1.1 Under $e^{-i\omega t}$ time dependence, $V_t$ has amplitude $-i\omega v$, so $(\gamma-i\omega)v=ae$. The scalar $\gamma-i\omega$ is nonzero because its imaginary part is $-\omega\ne0$; hence the vector equation gives $v=\bigl(a/(\gamma-i\omega)\bigr)e$, including when $e=0$. The conductivity is the scalar multiplier $\sigma(\omega):=a/(\gamma-i\omega)$ of this linear map. Multiplying numerator and denominator by $\gamma+i\omega$ gives $\operatorname{Re}\sigma=a\gamma/(\gamma^2+\omega^2)\ge0$. [given, A1, algebra]

1.2 The Drude branch in [L1] applies to precisely the state equations in [A1] under Countable Choice [F3]; it gives the material energy $|V|^2/(2a)$ and loss $\gamma|V|^2/a$. Together with the field energy in that same balance, these are nonnegative storage and dissipation because $a>0$ and $\gamma\ge0$. This is a deduction within the adopted model, conditional on [L1]'s Maxwell-energy prerequisite. [A1, F3, L1]

2.1 The equation $P_t=V$ gives $-i\omega p=v$. Combining with step 1.1, $p=\frac{a}{(-i\omega)(\gamma-i\omega)}e=-\frac{a}{\omega(\omega+i\gamma)}e$. Because $D=\varepsilon_\infty E+P$, its harmonic amplitude is $\bigl(\varepsilon_\infty-a/[\omega(\omega+i\gamma)]\bigr)e$, which is the stated absolute permittivity. [given, A1, step 1.1, algebra]

3.1 In the collisionless case, step 2.1 gives $\varepsilon(\omega)=\varepsilon_\infty-a/\omega^2=\varepsilon_\infty(1-\omega_p^2/\omega^2)$. For the encoded plane wave [F1], differentiating the phase gives the amplitude equations $k\times e=\omega b$ and $k\times h=-\omega\varepsilon(\omega)e$, where $b=\mu h$; the real-field equality is equivalent to equality of the complex amplitudes since the phase ranges over all real values. Substitution yields $k\times(k\times e)=-\mu\omega^2\varepsilon(\omega)e$. By $k\cdot e=0$ and [F2], the left side is $-|k|^2e$; since $e\ne0$, cancellation gives $|k|^2=\mu\omega^2\varepsilon(\omega)=\mu\varepsilon_\infty(\omega^2-\omega_p^2)$. If $0<\omega<\omega_p$ this right side is negative, impossible for real $k$. If $\omega>\omega_p$, define $k_0=\sqrt{\mu\varepsilon_\infty(\omega^2-\omega_p^2)}>0$ by [F4], set $k=k_0\hat z$, $e=\hat x$, $b=(k_0/\omega)\hat y$, and $h=b/\mu$. Then $k\cdot e=k\cdot b=0$, $k\times e=\omega b$, and $k\times h=-k_0^2e/(\mu\omega)=-\omega\varepsilon(\omega)e$, so both source-free curl equations and the divergence constraints hold for a transverse plane-wave mode with real nonzero $k$. At equality the only magnitude is zero, outside [F1]. [given, A1, A2, F1, F2, F4, step 2.1, algebra]

4.1 For $0<\omega<\omega_p$, let $\alpha=\sqrt{\mu\varepsilon_\infty(\omega_p^2-\omega^2)}>0$ by [F4] and set $\kappa=i\alpha$. Choose $k=\kappa\hat z$, $e=\hat x$, $b=(\kappa/\omega)\hat y$, and $h=b/\mu$. Then $k\cdot e=k\cdot b=0$, $k\times e=\omega b$, and $k\times h=-\kappa^2e/(\mu\omega)=\alpha^2e/(\mu\omega)=-\omega\varepsilon(\omega)e$, using $\varepsilon(\omega)=-\varepsilon_\infty(\omega_p^2-\omega^2)/\omega^2$. Thus both curl equations and the divergence constraints hold for these transverse amplitudes, while $e^{i\kappa z}=e^{-\alpha z}$ for $z\ge0$ gives exponential attenuation. This complex-$k$ branch is not a real-$k$ propagating mode and does not classify interfaces, longitudinal modes, or the uniform endpoint. [step 3.1, F2, F4, algebra] ∎
