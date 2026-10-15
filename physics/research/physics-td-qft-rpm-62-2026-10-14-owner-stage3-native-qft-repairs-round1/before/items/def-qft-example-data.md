---
id: def-qft-example-data
kind: definition
domain: mathematics
title: QFT example units, metric, gauge, and pairing conventions
status: draft
origin: pipeline
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, §0.1 “Units and Scales”
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S0.html
    - title: David Tong, Quantum Field Theory, §4.2 Dirac action
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html
    - title: David Tong, Quantum Field Theory, §1.1.1 scalar action
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S1.html
    - title: BIPM, The International System of Units (SI), 9th edition, §§1.1, 2.1–2.3, 5.4.2
      url: https://www.bipm.org/utils/common/pdf/si-brochure/SI-Brochure-9.pdf
---

## Definition

These are conventions for constructed and formal calculations in this page pair. They are not empirical claims, physical postulates, or existence claims about an interacting continuum theory.

Work on a nonempty open coordinate region $U\subseteq\mathbb R^4$, with coordinates $x^0=ct,x^1,x^2,x^3$ in metres and $\partial_a=\partial/\partial x^a$ for $a\in\{0,1,2,3\}$. Use the geometric spacetime metric $\eta=\operatorname{diag}(-1,1,1,1)$ and the time coordinate $x^0=ct$ in metres. For Clifford algebra and momentum contraction use the separate algebraic metric $h=-\eta=\operatorname{diag}(1,-1,-1,-1)$; a slash or a square of an energy four-vector uses $h$, never $\eta$.

A physical energy four-vector is $p=(E,c\mathbf p_{\rm phys})$, with each component in joules. Write $M=mc^2$ for rest energy in joules and $p^2=h(p,p)=E^2-c^2|\mathbf p_{\rm phys}|^2$. For two such vectors, $s=(p_1+p_2)^2$ is in $\mathrm J^2$. Natural momentum coordinates are the energy-vector components divided by $\hbar c$, in $\mathrm m^{-1}$; they are not substituted into SI formulas without restoring this factor. Here $m\ge0$ is a mass parameter in kilograms, so $\mu=mc/\hbar$ is in $\mathrm m^{-1}$. The natural-unit field convention below concerns smooth test fields, not pointwise quantum operators. A real scalar field is a map $\varphi\in C_c^\infty(U;\mathbb R)$; a Dirac test field is $\Psi\in C_c^\infty(U;\mathbb C^4)$. Fix dimensionless matrices $\gamma^a\in M_4(\mathbb C)$ satisfying $\gamma^a\gamma^b+\gamma^b\gamma^a=2h^{ab}I_4$, and put $\overline\Psi=\Psi^\dagger\gamma^0$. Adopt dimensionless action normalizations with kinetic terms $\tfrac12\int_U h^{ab}(\partial_a\varphi)(\partial_b\varphi)\,d^4x$ and $\int_U i\overline\Psi\gamma^a\partial_a\Psi\,d^4x$, summing repeated indices from $0$ to $3$. The coefficients are dimensionless and introduce no additional length scale. These conventions assign $[\varphi]=\mathrm m^{-1}$ and $[\Psi]=\mathrm m^{-3/2}$: the integrands have length degrees $2[\varphi]-2$ and $2[\Psi]-1$, while $d^4x$ has degree $4$. No dynamics or continuum existence assertion is adopted.

Take SI $e>0$ in coulombs, $\hbar>0$ in joule-seconds, $c>0$ in metres per second, $\mu_0>0$ in $\mathrm{H\,m^{-1}}=\mathrm{kg\,m\,C^{-2}}$, and $\epsilon_0=(\mu_0c^2)^{-1}$ in $\mathrm{F\,m^{-1}}$. Define
$$\alpha=\frac{e^2}{4\pi\epsilon_0\hbar c},\qquad g=e\sqrt{\frac{\mu_0c}{\hbar}}=\sqrt{4\pi\alpha}>0.$$
Here $g$ is a dimensionless coupling. It is not the metric and not a gyromagnetic factor.

For gauge notation take $\phi\in C^1(U;\mathbb R)$ in volts and $\mathbf A\in C^1(U;\mathbb R^3)$ in tesla-metres. Write $A_{\rm lower}=(-\phi/c,\mathbf A)$ for the components of the real one-form $A=\sum_{a=0}^3 A_a\,dx^a$, so every $A_a$ is in tesla-metres. Take $\chi\in C^2(U;\mathbb R)$ in webers and a charged test field $\psi\in C^1(U;\mathbb C^N)$, where $N\ge1$ is fixed. With a constant real charge parameter $q$ in coulombs, define $D_a\psi=\partial_a\psi-iqA_a\psi/\hbar$ componentwise. The transformed fields are again $C^1$, with $d\chi=\sum_a(\partial_a\chi)dx^a$. In operator notation the conventions are
$$D_a=\partial_a-\frac{iqA_a}{\hbar},\qquad \psi\mapsto e^{iq\chi/\hbar}\psi,\qquad A\mapsto A+d\chi.$$
For the electron parameter use $q=-e$. The equivalent natural-unit coordinates are $A_{\rm nat}=A_{\rm SI}/\sqrt{\mu_0\hbar c}$ and $q_{\rm nat}=q_{\rm SI}\sqrt{\mu_0c/\hbar}$.

Finite-matrix examples act on $\mathbb C^d$ with the operator norm. For Hilbert spaces, use the first-variable-linear pairing $(u,v)_1=v^\dagger u$; a displayed coordinate contraction $u^\dagger v$ is second-variable-linear and equals $\overline{(u,v)_1}$. Thus norms, traces, and modulus-squared amplitudes agree under conversion, although the unsquared pairing is conjugated. No amplitude is assigned a probability by these conventions.

## Facts & Assumptions

**Given:** Positive SI constants $c,\hbar,\mu_0,\epsilon_0,e$ satisfying $\epsilon_0\mu_0c^2=1$, with their SI dimensions as stated above.

[A1] Adopt the geometric/algebraic metric distinction, energy-vector and mass-energy conventions, natural-unit conversions, gauge-coordinate conventions, and Hilbert-pairing conventions exactly as stated in the Definition. They are definitions for this library's constructed/formal examples.

## Proof

1.1 From $\epsilon_0\mu_0c^2=1$ and positivity, $\alpha=e^2\mu_0c/(4\pi\hbar)>0$. Hence $g^2=e^2\mu_0c/\hbar=4\pi\alpha$, and the positive square root gives the stated equality $g=\sqrt{4\pi\alpha}$. The units of $g^2$ are $\mathrm C^2(\mathrm{kg\,m\,C^{-2}})(\mathrm{m\,s^{-1}})/(\mathrm{J\,s})=1$, so $g$ is dimensionless. [given, A1, algebra]

1.2 Since $[c\,t]=\mathrm m$, $x^0$ is a length; since $[c\mathbf p_{\rm phys}]=\mathrm J$, every component of $p$ and $M$ is an energy. Thus $p^2$ and $s$ have units $\mathrm J^2$, while division of energy by $\hbar c$ has units $\mathrm J/(\mathrm{J\,m})=\mathrm m^{-1}$. For the adopted dimensionless kinetic actions, $4+2[\varphi]-2=0$ and $4+2[\Psi]-1=0$ in length degrees, yielding the assigned field dimensions. The stated $\mu$ has units $\mathrm{kg\,m\,s^{-1}}/(\mathrm{J\,s})=\mathrm m^{-1}$. [given, A1, algebra]

2.1 In SI, $[\mathrm T]=\mathrm{kg\,s^{-1}\,C^{-1}}$, so $[qA_a/\hbar]=\mathrm m^{-1}$ and $[q\chi/\hbar]=1$ because $\mathrm{Wb}=\mathrm{J\,s\,C^{-1}}$. Also $A_{\rm nat}$ has units $\mathrm m^{-1}$ and $q_{\rm nat}$ is dimensionless. Therefore the derivative and gauge phase terms in the Definition are dimensionally compatible. Finally $u^\dagger v=\overline{(u,v)_1}$, so their norms and modulus squares agree. [given, A1, algebra] ∎
