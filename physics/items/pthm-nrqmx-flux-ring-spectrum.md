---
id: pthm-nrqmx-flux-ring-spectrum
kind: physics-theorem
domain: physics
library: physics
title: Aharonov–Bohm ring spectrum and flux periodicity
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 4
deps:
  - post-nrqmx-magnetic-model-extension
  - def-nrqmx-periodic-ring-domain
  - thm-nrqmx-periodic-flux-spectrum
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  post-nrqmx-magnetic-model-extension: physical-assumption
  def-nrqmx-periodic-ring-domain: mathematical-premise
  thm-nrqmx-periodic-flux-spectrum: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
physical_scope: "Exact spectrum of an ideal spinless particle constrained to a zero-width circle with static enclosed magnetic flux and periodic wavefunctions. Finite-width rings, interactions, apparatus, and experimental identification are outside scope."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Applications of Quantum Mechanics, §1.3.1, the flux-threaded ring"
      url: "https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf"
    - title: "V. P. Nair, Notes on Quantum Mechanics, §13.1, flux and the Aharonov–Bohm phase"
      url: "https://nair.ccny.cuny.edu/Notes-QM.pdf"
    - title: "Aram Harrow, MIT 8.06 Spring 2016 Lecture Notes, Chapter 4, §3.5, Aharonov–Bohm effect"
      url: "https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2016/6e02558ecf4b7af37d2cdff550fc0f71_MIT8_06S16_chap4.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Adopt the static ring model of a spinless particle of mass $m>0$ kilograms
and charge $q\ne0$ coulombs constrained to a circle of radius $R>0$ metres.
Use $\hbar>0$ in joule-seconds, flux $\Phi$ in webers, and energies in joules.
The angular coordinate is $\phi\in\mathbb R/(2\pi\mathbb Z)$; the
single-valued wavefunction belongs to the periodic domain
$H^2_{\mathrm{per}}(S^1)$; the scalar potential is zero; and a static
tangential vector potential $A_\phi=\Phi/(2\pi R)$ has circulation
$\oint A\cdot d\ell=\Phi$, where $\Phi$ is flux in webers. Under the SI
minimal-coupling assignment, the Hamiltonian is
$$H_\Phi=\frac{\hbar^2}{2mR^2}\left(-i\partial_\phi-\alpha\right)^2,\qquad \alpha=\frac{q\Phi}{2\pi\hbar},$$
on that periodic domain. Its energies are
$$E_n(\Phi)=\frac{\hbar^2}{2mR^2}(n-\alpha)^2,\qquad n\in\mathbb Z,$$
with a complete periodic Fourier eigenbasis. For every $j\in\mathbb Z$,
$\Phi\mapsto\Phi+2\pi\hbar j/q$ gives a unitarily equivalent Hamiltonian;
a noninteger $\alpha$ cannot be removed by a single-valued periodic gauge
phase. These are conditional deductions of the ideal ring model.

## Statement references

[[post-nrqmx-magnetic-model-extension]]

[[def-nrqmx-periodic-ring-domain]]

[[thm-nrqmx-periodic-flux-spectrum]]

## Facts & Assumptions

**Given:** the ideal ring constraint, $m>0$, $q\ne0$, $R>0$, $\hbar>0$,
static flux $\Phi$, zero scalar potential, periodic wavefunctions, and the
SI minimal-coupling postulate.

[A1] The ring is an ideal zero-width constraint with no radial or transverse
degrees of freedom. The model adopts a single-valued periodic wavefunction and
the periodic $H^2$ realization of the tangential minimal-coupling expression;
the static flux is represented by $A_\phi=\Phi/(2\pi R)$.

[A2] The Choice, Countable Choice, and Dependent Choice axioms are the exact
mathematical hypotheses of the periodic spectral calculation
([[def-axiom-of-choice]], [[def-countable-choice]],
[[def-dependent-choice]]).

[F1] The minimal-coupling covariant momentum is $-i\hbar\nabla-qA$ in SI
units; $m$ is the mass parameter and $q$ the charge parameter
([[post-nrqmx-magnetic-model-extension]]).

[F2] The angular Hilbert space and periodic $H^2$ domain are those of
[[def-nrqmx-periodic-ring-domain]].

[F3] For $\kappa>0$ and $\alpha\in\mathbb R$, the operator
$\kappa(-i\partial_\phi-\alpha)^2$ has complete eigenbasis
$(2\pi)^{-1/2}e^{in\phi}$, energies $\kappa(n-\alpha)^2$, integer-shift
unitary equivalence, and no periodic gauge multiplier removing a
noninteger $\alpha$
([[thm-nrqmx-periodic-flux-spectrum]]).

## Proof

1.1 On the circle, arclength is $s=R\phi$, so the tangential derivative is
$\partial_s=R^{-1}\partial_\phi$. The circulation of the constant tangential
potential is $\int_0^{2\pi}A_\phi R\,d\phi=\Phi$ by [A1]. Therefore the
covariant tangential momentum supplied by [F1] is
$$-i\hbar\partial_s-qA_\phi=\frac1R\left(-i\hbar\partial_\phi-\frac{q\Phi}{2\pi}\right).$$
Dividing its square by $2m$ gives the Hamiltonian in the Statement and the
dimensionless parameter $\alpha=q\Phi/(2\pi\hbar)$. [given, A1, A2, F1, algebra]

2.1 Put $\kappa=\hbar^2/(2mR^2)>0$. The operator in the Statement is
$\kappa(-i\partial_\phi-\alpha)^2$, so [F2] and [F3] give its periodic
domain, complete Fourier eigenbasis, energy list, and spectrum. If the flux
is shifted by $2\pi\hbar j/q$, then $\alpha$ shifts by $j$ and the unitary
multiplication $U_jf=e^{ij\phi}f$ intertwines the two Hamiltonians by [F3].
The same fact [F3] shows that a smooth single-valued periodic phase removing
$\alpha$ exists only for integral $\alpha$. Thus the spectrum and its gauge
periodicity follow conditionally from the declared ideal ring model; no
finite-width correction or measurement is asserted. [A1, A2, F2, F3, step 1.1, algebra] ∎

## Remarks

The loop orientation is increasing $\phi$, and positive flux means the
circulation $\oint A\cdot d\ell=\Phi$ in that orientation. The figure is a
schematic of the excluded flux core and the constrained path; it is not a
geometrical proof of the spectral statement.

```tikz
\begin{tikzpicture}[scale=1]
  \draw[thick] (0,0) circle (1.5);
  \draw[thick,->] (0.2,0.2) -- (1.35,0.85) node[midway,above] {$R$};
  \draw[fill=gray!25] (0,0) circle (0.28);
  \node at (0,0) {$\Phi$};
  \draw[->] (1.15,0.55) arc[start angle=25,end angle=75,radius=1.28];
  \node at (1.8,0.2) {$\phi\uparrow$};
\end{tikzpicture}
```
