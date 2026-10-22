---
id: pthm-emx-scattering-contraction
kind: physics-theorem
title: "Passivity gives a contractive scattering matrix"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emx-port-scattering-model
  - def-euclidean-inner-product
  - lem-the-divergence-and-curl-of-a-cross-product
  - post-emx-drude-current-closure
  - post-emx-lorentz-medium
  - pthm-em-macroscopic-maxwell
  - thm-algebra-of-derivatives
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emx-port-scattering-model: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  lem-the-divergence-and-curl-of-a-cross-product: mathematical-premise
  post-emx-drude-current-closure: physical-assumption
  post-emx-lorentz-medium: physical-assumption
  pthm-em-macroscopic-maxwell: physical-result
  thm-algebra-of-derivatives: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
verification:
  precheck: pending
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional classical Maxwell scattering deduction at one real frequency for the finite port model of emx-port-scattering-channels. The material branches are exactly the homogeneous finite Lorentz oscillator or Drude current closures stated here; fields are smooth and periodic, free-current work is zero, wall power is nonnegative, and all unlisted outgoing power is counted. It is not an existence theorem, does not cover arbitrary passive constitutive laws, and makes no empirical claim."
sources:
  references:
    - title: "Weng Cho Chew, Theory of Microwave and Optical Waveguides, Purdue lecture notes, complete 362-page text"
      url: "https://engineering.purdue.edu/wcchew/course/tgwAll20121211.pdf"
      locator: "§1.7.1–§1.7.4, printed pp. 10–12 (PDF pp. 19–22): time-domain and frequency-domain Poynting identities, time-average power, and lossless conditions; §2.4, printed pp. 50–52 (PDF pp. 60–61): power carried by propagating guide modes. The local argument derives its exact balance from the declared oscillator postulates."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS complete lecture script, 176 pages"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "Chapter 13, §13.2, printed pp. 13.3–13.9: propagating and evanescent mode branches and the guide power-flow context. The local argument does not use the source's group-velocity claim."
    - title: "Roger B. Marks and Dylan F. Williams, A General Waveguide Circuit Theory, Journal of Research of the National Institute of Standards and Technology 97(5) (1992), pp. 533–562"
      url: "https://nistdigitalarchives.contentdm.oclc.org/digital/api/collection/p16009coll6/id/74796/download"
      locator: "§5, printed pp. 555–556 (PDF pp. 22–23): power-wave normalization and net-power bookkeeping."
---

## Statement

Assume $\mathrm{AC}_\omega$. Fix the finite port model at a real angular frequency $\omega>0$ and period $T=2\pi/\omega$, with bounded $C^1$ device region $\Omega$ and scattering matrix $S(\omega)$. For every incoming amplitude $a\in\mathbb C^N$, let $\widetilde E_a,\widetilde H_a\in C^1(\overline\Omega;\mathbb C^3)$ be that model's unique phasor solution with outgoing amplitude $b=S(\omega)a$, and set $E(x,t)=\operatorname{Re}(\widetilde E_a(x)e^{-i\omega t})$ and $H(x,t)=\operatorname{Re}(\widetilde H_a(x)e^{-i\omega t})$. Assume for every such input that these real fields, $D,B:\overline\Omega\times\mathbb R\to\mathbb R^3$, and the material states are jointly $C^\infty$ and $T$-periodic, satisfy the smooth source-free macroscopic Maxwell equations with $\rho_f=0$ and $J_f=0$, and obey the same one of the following two homogeneous material branches with coefficients independent of the input. The units of $E,H,D,B$ are respectively $\mathrm{V\,m^{-1}}$, $\mathrm{A\,m^{-1}}$, $\mathrm{C\,m^{-2}}$, and $\mathrm T$.

For real vectors $v,w\in\mathbb R^3$, the Euclidean product is $v\cdot w:=\sum_{r=1}^3v_rw_r$ and $|v|^2:=v\cdot v$.

The port model uses incoming and outgoing vectors $a,b\in\mathbb C^N$ with amplitude units $\mathrm{W^{1/2}}$; for either vector $z$, $\|z\|_2^2:=\sum_{\alpha=1}^N|z_\alpha|^2$ is its power in W, and the net outward port power is $\|b\|_2^2-\|a\|_2^2$.

**Finite Lorentz branch.** For a finite $M\ge1$, each $P_\ell:\overline\Omega\times\mathbb R\to\mathbb R^3$ has units $\mathrm{C\,m^{-2}}$, $D=\varepsilon_\infty E+\sum_{\ell=1}^M P_\ell$, $B=\mu H$, and $\partial_t^2P_\ell+\gamma_\ell\partial_tP_\ell+\omega_\ell^2P_\ell=a_\ell E$, where $\varepsilon_\infty,\mu,a_\ell,\omega_\ell>0$ and $\gamma_\ell\ge0$.

**Drude branch.** $P,V:\overline\Omega\times\mathbb R\to\mathbb R^3$ have units $\mathrm{C\,m^{-2}}$ and $\mathrm{A\,m^{-2}}$, respectively; $D=\varepsilon_\infty E+P$, $B=\mu H$, $\partial_tP=V$, and $\partial_tV+\gamma V=aE$, where $\varepsilon_\infty,\mu,a>0$ and $\gamma\ge0$.

The constants have the SI units of the respective adopted closure: $\varepsilon_\infty$ in $\mathrm{F\,m^{-1}}$, $\mu$ in $\mathrm{H\,m^{-1}}$, each $a_\ell$ or $a$ in $\mathrm{F\,m^{-1}\,s^{-2}}$, and each $\omega_\ell$ or damping rate in $\mathrm{s^{-1}}$. In the Lorentz branch define the loss-density map $\ell:\overline\Omega\times\mathbb R\to[0,\infty)$ by $\ell=\sum_{\ell=1}^M(\gamma_\ell/a_\ell)|\partial_tP_\ell|^2$; in the Drude branch define it by $\ell=(\gamma/a)|V|^2$. These have units $\mathrm{W\,m^{-3}}$. For the solution with the fixed input $a$, set $P_{\mathrm{mat}}(a):=T^{-1}\int_0^T\int_\Omega\ell\,dV\,dt$. Let $P_\partial(a)\ge0$ be its cycle-averaged outward power at passive physical walls, and let $P_{\mathrm{other}}(a)\ge0$ be all its outgoing radiation or propagating-channel power not represented in $b$, as defined by the port model. For brevity, in the proof write these three quantities as $P_{\mathrm{mat}}$, $P_\partial$, and $P_{\mathrm{other}}$. Then

$$\|a\|_2^2-\|S(\omega)a\|_2^2=P_{\mathrm{mat}}(a)+P_\partial(a)+P_{\mathrm{other}}(a)\ge0.$$

For complex vectors and matrices, an overline denotes componentwise complex conjugation and a superscript ${}^{\mathsf T}$ denotes ordinary transpose; set $z^\dagger:=\overline z^{\,\mathsf T}$ for $z\in\mathbb C^N$ and $A^\dagger:=\overline A^{\,\mathsf T}$ for $A\in\mathbb C^{N\times N}$. A matrix is **Hermitian** when $A^\dagger=A$, and is **unitary** when $A^\dagger A=AA^\dagger=I_N$, where $I_N$ is the identity matrix on $\mathbb C^N$.

Consequently $S(\omega)$ is contractive: $\|Sa\|_2\le\|a\|_2$ for every $a$. If $P_{\mathrm{mat}}(a)=P_\partial(a)=P_{\mathrm{other}}(a)=0$ for every incoming vector $a$, then $S^\dagger S=I_N$; because the defined map is square, $S$ is unitary. The exact equality and unitarity are conditional deductions of this model, not existence claims about arbitrary scatterers.

## Statement references

[[def-countable-choice]]

[[def-emx-port-scattering-model]]

[[def-euclidean-inner-product]]

[[lem-the-divergence-and-curl-of-a-cross-product]]

[[post-emx-lorentz-medium]]

[[post-emx-drude-current-closure]]

[[pthm-em-macroscopic-maxwell]]

[[thm-algebra-of-derivatives]]

[[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]

[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; one fixed $\omega>0$ and $T=2\pi/\omega$; for every input, the real $E,H$ obtained from that finite scattering model's phasor solution; the same stated homogeneous material branch with its positive parameters and nonnegative damping; smooth periodic real fields and material states for every input; zero free current; and nonnegative passive-wall and unlisted-outgoing powers. Fix an arbitrary input $a$ for the calculation below.

[A1] The Lorentz postulate has constant $\varepsilon_\infty,\mu,a_\ell,\omega_\ell,\gamma_\ell$, $D=\varepsilon_\infty E+\sum P_\ell$, and the displayed second-order oscillator equations. [[post-emx-lorentz-medium]]

[A2] The Drude postulate has constant $\varepsilon_\infty,\mu,a,\gamma$, $D=\varepsilon_\infty E+P$, $P_t=V$, and $V_t+\gamma V=aE$. [[post-emx-drude-current-closure]]

[L1] On the smooth Maxwell branch, $\operatorname{curl}E=-\partial_tB$ and $\operatorname{curl}H=J_f+\partial_tD$. [[pthm-em-macroscopic-maxwell]]

[F1] For real $C^1$ fields, $\operatorname{div}(E\times H)=H\cdot\operatorname{curl}E-E\cdot\operatorname{curl}H$. [[lem-the-divergence-and-curl-of-a-cross-product]]

[F2] Component products obey the ordinary product rule; the real Euclidean inner product is symmetric and componentwise bilinear. [[thm-algebra-of-derivatives]] [[def-euclidean-inner-product]]

[F3] On a bounded $C^1$ device, the integral of the divergence of a real $C^1$ vector field equals its outward boundary flux under $\mathrm{AC}_\omega$. [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]

[F4] Fubini's theorem permits exchanging the order of integration for an integrable function on the finite-volume product $\Omega\times[0,T]$. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F5] The port model defines the outward port flux as $\|b\|_2^2-\|a\|_2^2$ and the total outward boundary power as that port flux plus $P_\partial+P_{\mathrm{other}}$; it assumes no unlisted incoming channel. [[def-emx-port-scattering-model]]

[A3] Physical wall conditions are either smooth PEC, with zero outward flux, or passive conditions with cycle-averaged outward power $P_\partial\ge0$. This is an explicit model premise, not a trace theorem. [[def-emx-port-scattering-model]]

## Proof

**Proof technique:** derive the local Poynting identity separately for the Lorentz and Drude closures, integrate it over the device and one period, then use the port flux identity and finite-dimensional matrix algebra.

1.1 In the Lorentz branch set $J_{\mathrm{tot}}=J_f+\sum_{\ell=1}^M\partial_tP_\ell$, and in the Drude branch set $J_{\mathrm{tot}}=J_f+V$. From [L1] and [A1] or [A2], respectively, the field and constitutive equations give $\varepsilon_\infty\partial_tE=\operatorname{curl}H-J_{\mathrm{tot}}$ and $\mu\partial_tH=-\operatorname{curl}E$. [given, A1, A2, L1, algebra]

1.2 In the Lorentz branch, dot the $\ell$th oscillator equation [A1] with $\partial_tP_\ell/a_\ell$. Since $a_\ell>0$, the division is valid; the product rule in [F2] gives $E\cdot\partial_tP_\ell=\partial_t\!\left((|\partial_tP_\ell|^2+\omega_\ell^2|P_\ell|^2)/(2a_\ell)\right)+(\gamma_\ell/a_\ell)|\partial_tP_\ell|^2$. The last term is nonnegative because $\gamma_\ell\ge0$. [given, A1, F2, algebra]

1.3 In the Drude branch, dot $\partial_tV+\gamma V=aE$ from [A2] with $V/a$. The product rule and $a>0$ give $E\cdot V=\partial_t(|V|^2/(2a))+(\gamma/a)|V|^2$, whose last term is nonnegative because $\gamma\ge0$. [given, A2, F2, algebra]

2.1 Define the field energy density $u_f:\overline\Omega\times\mathbb R\to[0,\infty)$ by $u_f=(\varepsilon_\infty|E|^2+\mu|H|^2)/2$. Differentiate it componentwise using [F2] and the field equations of step 1.1. This gives $\partial_tu_f=E\cdot\operatorname{curl}H-E\cdot J_{\mathrm{tot}}-H\cdot\operatorname{curl}E$. Applying [F1] yields $-\operatorname{div}(E\times H)-E\cdot J_f-\sum E\cdot\partial_tP_\ell$ in the Lorentz branch and $-\operatorname{div}(E\times H)-E\cdot J_f-E\cdot V$ in the Drude branch. [step 1.1, F1, F2, algebra]

3.1 Define the total field-plus-material energy density $u:\overline\Omega\times\mathbb R\to[0,\infty)$ branchwise: in the Lorentz branch, $u:=u_f+\sum_{\ell=1}^M\bigl(|\partial_tP_\ell|^2+\omega_\ell^2|P_\ell|^2\bigr)/(2a_\ell)$; in the Drude branch, $u:=u_f+|V|^2/(2a)$. All terms are nonnegative, have SI units $\mathrm{J\,m^{-3}}$, and are jointly smooth and $T$-periodic under the Statement's hypotheses. Substituting step 1.2 into the Lorentz field balance of step 2.1 cancels every $E\cdot\partial_tP_\ell$ term; substituting step 1.3 into its Drude balance cancels $E\cdot V$. Since the given source-free condition has $J_f=0$, each branch therefore satisfies $\partial_tu+\operatorname{div}(E\times H)=-\ell$ with exactly the loss density $\ell$ in the Statement. [given, step 1.2, step 1.3, step 2.1, algebra]

4.1 Integrate the local identity of step 3.1 over $\Omega$ at each time and apply [F3] to $E\times H$. Then integrate in time from $0$ to $T$. The integrand $\partial_tu$ is continuous and integrable on the finite product domain, so [F4] permits integration first in time: $\int_\Omega\int_0^T\partial_tu\,dt\,dV=\int_\Omega(u(x,T)-u(x,0))\,dV=0$ by periodicity. Hence the time-integrated outward boundary flux equals $-T P_{\mathrm{mat}}$. [given, F3, F4, step 3.1, algebra]

5.1 For the given phasor solution, expand each real part as $(z+\overline z)/2$ in $E\times H$. The terms proportional to $e^{\pm2i\omega t}$ have zero average over $[0,T]$, leaving $T^{-1}\int_0^T E\times H\,dt=\tfrac12\operatorname{Re}(\widetilde E_a\times\overline{\widetilde H_a})$. Thus the cycle average in step 4.1 is precisely the phasor power used by [F5]. Divide that step by $T$ and use its total boundary-flux decomposition: the port term is $\|b\|_2^2-\|a\|_2^2$, the wall term is $P_\partial\ge0$ by [A3], and the remaining outgoing term is $P_{\mathrm{other}}\ge0$. Rearrangement gives the power balance for the arbitrary input $a$. The all-input hypotheses permit this calculation for every incoming vector of the same matrix $S(\omega)$. [given, A3, F5, step 4.1, algebra]

6.1 Since each of $P_{\mathrm{mat}},P_\partial,P_{\mathrm{other}}$ is nonnegative, step 5.1 gives $\|Sa\|_2^2\le\|a\|_2^2$ for every $a$; taking nonnegative square roots proves contractivity. If all three powers vanish for every $a$, set $K:=I_N-S^\dagger S$. Then $K^\dagger=K$ because $(S^\dagger S)^\dagger=S^\dagger S$, and the power balance gives $a^\dagger Ka=\|a\|_2^2-\|Sa\|_2^2=0$ for every $a$. Let $e_j$ denote the $j$th coordinate vector of $\mathbb C^N$. Testing $a=e_j$ gives $K_{jj}=0$; for $j<k$, testing $a=e_j+e_k$ gives $2\operatorname{Re}K_{jk}=0$, while testing $a=e_j+i e_k$ gives $-2\operatorname{Im}K_{jk}=0$. Hence every entry of $K$ is zero, so $S^\dagger S=I_N$. The square matrix $S$ is injective, hence surjective by finite-dimensional rank-nullity; therefore $S^{-1}=S^\dagger$ and $SS^\dagger=I_N$ as well. Thus $S$ is unitary. [given, step 5.1, algebra] ∎
