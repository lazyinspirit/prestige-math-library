---
id: pthm-emx-oscillator-energy
kind: physics-theorem
title: "Augmented energy and passive absorption"
status: published
origin: pipeline
domain: physics
dependency_level: 2
proof_strategy: direct
deps:
  - def-emx-finite-energy-boundary-model
  - def-countable-choice
  - lem-the-divergence-and-curl-of-a-cross-product
  - def-euclidean-inner-product
  - post-emx-lorentz-medium
  - post-emx-drude-current-closure
  - pthm-em-macroscopic-maxwell
  - pthm-emx-weak-poynting-uniqueness
  - thm-algebra-of-derivatives
dependency_roles:
  def-emx-finite-energy-boundary-model: formulation-prerequisite
  def-countable-choice: mathematical-premise
  lem-the-divergence-and-curl-of-a-cross-product: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  post-emx-lorentz-medium: physical-assumption
  post-emx-drude-current-closure: physical-assumption
  pthm-em-macroscopic-maxwell: physical-result
  pthm-emx-weak-poynting-uniqueness: physical-result
  thm-algebra-of-derivatives: mathematical-premise
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional local energy identities and fixed-volume passive-energy balances for the finite Lorentz oscillator closure and the Drude current closure, in one homogeneous material rest frame under the stated smoothness and finite-energy Maxwell hypotheses. The undriven nonincrease result is for the closure-defined PEC branch. No existence theorem, microscopic explanation, empirical material claim, or energy law outside these constitutive branches is asserted."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (236-page complete text)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§7.5.1, printed pp. 193–194: the damped polarization oscillator; §7.6.1, pp. 205–206: the damped free-carrier current. The local energy identities below are derived directly and are not supplied by these model discussions."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course, complete University of Texas at Austin lecture notes"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node99.html"
      locator: "Node 99, equations (1147)–(1149): the restricted bound-oscillator response used as model context; no augmented energy identity is supplied."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS complete lecture script"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§12.1, printed p. 12.1 (PDF p. 142), equations (12.1)–(12.3): macroscopic Maxwell fields and the nondispersive field-energy convention. Dispersive oscillator storage is derived locally here."
---

## Statement

Let $I\subseteq\mathbb R$ be a nonempty open interval and let $\Omega\subseteq\mathbb R^3$ be a nonempty bounded Lipschitz polyhedron in one material rest frame. Use real SI fields: $E,H,D,B:\Omega\times I\to\mathbb R^3$, a free current density $J_f:\Omega\times I\to\mathbb R^3$, polarization $P:\Omega\times I\to\mathbb R^3$, and, when present, carrier current $V:\Omega\times I\to\mathbb R^3$. Their units are V m$^{-1}$, A m$^{-1}$, C m$^{-2}$, T, A m$^{-2}$, C m$^{-2}$ and A m$^{-2}$, respectively. Let $\varepsilon_\infty>0$ and $\mu>0$ be constant scalar coefficients in F m$^{-1}$ and H m$^{-1}$. Each $u_L,u_D$ is in J m$^{-3}$ and the flux $E\times H$ is in W m$^{-2}$.

Assume Countable Choice, the smooth macroscopic Maxwell material model, and its curl equations

$$\operatorname{curl}E=-\partial_tB,\qquad \operatorname{curl}H=J_f+\partial_tD$$

hold pointwise. The smooth macroscopic material model includes continuous free sources and the total polarization/magnetization identifications specified by the Lorentz or Drude closure. Assume $E,H$ are jointly $C^\infty$ pointwise and satisfy $E,H\in C^1(I;L^2(\Omega;\mathbb R^3))\cap C(I;H(\operatorname{curl};\Omega))$; $J_f$ and each material-current term belong to $C(I;L^2)$. Here $H(\operatorname{curl};\Omega)$ is the real $L^2$ vector fields whose distributional curl is represented by an $L^2$ vector field, with the graph norm. Take Lorentz fields $P_\ell$ jointly $C^\infty$ and in $C^2(I;L^2)$, or Drude fields $P,V$ jointly $C^\infty$ with $V\in C^1(I;L^2)$, so that the stored energies and current terms are finite. Take either one of the following constitutive branches:

1. **Finite Lorentz branch.** For some finite $N\ge1$, $D=\varepsilon_\infty E+\sum_{\ell=1}^{N}P_\ell$, $B=\mu H$, and
   $$\partial_t^2P_\ell+\gamma_\ell\partial_tP_\ell+\omega_\ell^2P_\ell=a_\ell E,$$
   where $P_\ell$ is jointly $C^2$, $a_\ell>0$ in F m$^{-1}$ s$^{-2}$, $\omega_\ell>0$ in s$^{-1}$, and $\gamma_\ell\ge0$ in s$^{-1}$.
2. **Drude branch.** $D=\varepsilon_\infty E+P$, $B=\mu H$, $\partial_tP=V$, and $\partial_tV+\gamma V=aE$, where $P,V$ are jointly $C^1$, $a>0$ in F m$^{-1}$ s$^{-2}$, and $\gamma\ge0$ in s$^{-1}$.

For the Lorentz branch define

$$u_L:=\frac{\varepsilon_\infty|E|^2+\mu|H|^2}{2}+\sum_{\ell=1}^{N}\frac{|\partial_tP_\ell|^2+\omega_\ell^2|P_\ell|^2}{2a_\ell}.$$

For the Drude branch define

$$u_D:=\frac{\varepsilon_\infty|E|^2+\mu|H|^2}{2}+\frac{|V|^2}{2a}.$$

The Lorentz density is positive definite in $(E,H,(P_\ell,\partial_tP_\ell)_{\ell=1}^N)$. The Drude density is positive definite in $(E,H,V)$; a constant polarization offset is not part of this energy.

Then the respective local identities hold pointwise:

$$\partial_tu_L+\operatorname{div}(E\times H)=-E\cdot J_f-\sum_{\ell=1}^{N}\frac{\gamma_\ell}{a_\ell}|\partial_tP_\ell|^2,$$

$$\partial_tu_D+\operatorname{div}(E\times H)=-E\cdot J_f-\frac{\gamma}{a}|V|^2.$$

If, in addition, the fields satisfy the exact closure-defined PEC branch of the finite-energy boundary model and $J_f=0$, then the total stored energy $U(t)=\int_\Omega u_L(x,t)\,dx$ or $U(t)=\int_\Omega u_D(x,t)\,dx$ is nonnegative and nonincreasing. More generally the corresponding fixed-volume balance includes the work $-\int E\cdot J_f$ and the displayed nonnegative material-loss terms; no claim of conservation without these terms is made.

## Statement references

[[def-emx-finite-energy-boundary-model]]

[[post-emx-lorentz-medium]]

[[post-emx-drude-current-closure]]

[[pthm-em-macroscopic-maxwell]]

[[def-countable-choice]]

[[pthm-emx-weak-poynting-uniqueness]]

## Facts & Assumptions

**Given:** Countable Choice, the bounded-domain, time-regularity, SI, and closure-defined PEC conventions of the finite-energy boundary model; either the finite Lorentz branch or the Drude branch and its stated coefficients; the pointwise Maxwell curl equations and local regularity in the Statement.

[A1] The Lorentz closure is the real, homogeneous, spatially local constitutive model $D=\varepsilon_\infty E+\sum P_\ell$, $B=\mu H$, $P_{\ell,tt}+\gamma_\ell P_{\ell,t}+\omega_\ell^2P_\ell=a_\ell E$, with $a_\ell,\omega_\ell,\varepsilon_\infty,\mu>0$, $\gamma_\ell\ge0$, and oscillator initial state $(P_\ell,P_{\ell,t})$. Its macroscopic identification is $P_{\mathrm{tot}}=(\varepsilon_\infty-\varepsilon_0)E+\sum P_\ell$ and $M_{\mathrm{tot}}=(\mu_0^{-1}-\mu^{-1})B$ ([[post-emx-lorentz-medium]]).

[A2] The Drude closure is $P_t=V$, $V_t+\gamma V=aE$, $D=\varepsilon_\infty E+P$, $B=\mu H$, with $a,\varepsilon_\infty,\mu>0$, $\gamma\ge0$ and the initial polarization state specified separately from $V$. Its macroscopic identification is $P_{\mathrm{tot}}=(\varepsilon_\infty-\varepsilon_0)E+P$ and $M_{\mathrm{tot}}=(\mu_0^{-1}-\mu^{-1})B$ ([[post-emx-drude-current-closure]]).

[A3] Countable Choice is assumed, as required by the weak Maxwell energy supplier's real $H(\operatorname{curl})$ convention ([[def-countable-choice]]).

[F1] In the finite-energy boundary model, $H(\operatorname{curl};\Omega)$ consists of $L^2$ vector fields whose distributional curl is represented by an $L^2$ field; the PEC condition is the graph-norm closure definition of $H_0(\operatorname{curl};\Omega)$, not an unproved identification with a trace kernel ([[def-emx-finite-energy-boundary-model]]).

[F2] For $C^1$ real vector fields, $\operatorname{div}(E\times H)=H\cdot\operatorname{curl}E-E\cdot\operatorname{curl}H$ ([[lem-the-divergence-and-curl-of-a-cross-product]]).

[F3] The Euclidean product is a symmetric positive-definite real bilinear form, so $|X|^2=\langle X,X\rangle\ge0$ and its componentwise pairing obeys the product rule ([[def-euclidean-inner-product]]).

[F4] For differentiable real scalar functions, sums, products and scalar multiples obey their usual derivative rules; these apply componentwise to the field squares and oscillator energies ([[thm-algebra-of-derivatives]]).

[L1] For smooth macroscopic material fields, $\operatorname{div}D=\rho_f$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, and $\operatorname{curl}H=J_f+\partial_tD$ ([[pthm-em-macroscopic-maxwell]], clause (b)).

[L2] For the finite-energy Maxwell model with time-independent bounded symmetric uniformly positive coefficients, $C^1(I;L^2)\cap C(I;H(\operatorname{curl}))$ fields, $J\in C(I;L^2)$ and the two $L^2$ evolution identities, the closure-defined PEC branch satisfies $W_f(t)-W_f(s)=-\int_s^t\int_\Omega E\cdot J\,dx\,dr$, where $W_f=\frac12\int_\Omega(E\cdot\varepsilon E+H\cdot\mu H)\,dx$ ([[pthm-emx-weak-poynting-uniqueness]], Statement).

## Proof
**Proof technique:** derive the local Maxwell work balance, dot each material equation with its velocity/current, then apply the exact weak Poynting result only to the PEC fixed-volume conclusion.

1.1 In either branch put $J_{\mathrm{tot}}=J_f+\sum_{\ell=1}^{N}\partial_tP_\ell$ for Lorentz, and $J_{\mathrm{tot}}=J_f+V$ for Drude. By [L1], $D_t=\varepsilon_\infty E_t+\sum P_{\ell,t}$ or $D_t=\varepsilon_\infty E_t+V$ and $\operatorname{curl}H=J_f+D_t$; also $B_t=\mu H_t=-\operatorname{curl}E$. Thus $\varepsilon_\infty E_t=\operatorname{curl}H-J_{\mathrm{tot}}$, and [F3]–[F4] give $\partial_t\bigl((\varepsilon_\infty|E|^2+\mu|H|^2)/2\bigr)=E\cdot\operatorname{curl}H-E\cdot J_{\mathrm{tot}}-H\cdot\operatorname{curl}E$. By [F2], this is $-\operatorname{div}(E\times H)-E\cdot J_f-\sum E\cdot P_{\ell,t}$ in the Lorentz branch, and $-\operatorname{div}(E\times H)-E\cdot J_f-E\cdot V$ in the Drude branch. [given, A1, A2, F2, F3, F4, L1]

1.2 In the Lorentz branch, dot the $\ell$th oscillator equation with $P_{\ell,t}/a_\ell$. By [F3]–[F4], the product rule gives $E\cdot P_{\ell,t}=\partial_t\bigl((|P_{\ell,t}|^2+\omega_\ell^2|P_\ell|^2)/(2a_\ell)\bigr)+(\gamma_\ell/a_\ell)|P_{\ell,t}|^2$. The division is valid since $a_\ell>0$; the $\omega_\ell^2P_\ell\cdot P_{\ell,t}$ term is the derivative of the potential-energy term and the damping term is nonnegative. [given, A1, F3, F4]

1.3 In the Drude branch, dot $V_t+\gamma V=aE$ with $V/a$. By [F3]–[F4] and $a>0$, $\partial_t(|V|^2/2)=V\cdot V_t$ and $E\cdot V=\partial_t(|V|^2/(2a))+(\gamma/a)|V|^2$. The last term is nonnegative because $\gamma\ge0$. [given, A2, F3, F4]

2.1 Substituting step 1.2 into the Lorentz balance of step 1.1 cancels every $E\cdot P_{\ell,t}$ term and yields the displayed identity for $u_L$. Substituting step 1.3 into the Drude balance of step 1.1 cancels $E\cdot V$ and yields the displayed identity for $u_D$. These are pointwise identities under the stated local regularity; they do not require a boundary condition. [step 1.1, step 1.2, step 1.3, algebra]

2.2 For the Lorentz fixed-volume conclusion, the fields in step 1.1 satisfy the weak model of [L2] with coefficient maps $\varepsilon(x)=\varepsilon_\infty I_3$, $\mu(x)=\mu I_3$ and current $J=J_{\mathrm{tot}}$. These are static symmetric uniformly positive maps, and $J_{\mathrm{tot}}\in C(I;L^2)$ by the hypotheses. Apply [L2] to obtain the field-energy change $-\int_s^t\int_\Omega E\cdot J_{\mathrm{tot}}\,dx\,dr$. Integrating step 1.2 over $\Omega\times[s,t]$ adds $+\int_s^t\int_\Omega E\cdot\sum P_{\ell,t}\,dx\,dr-\sum\int_s^t\int_\Omega(\gamma_\ell/a_\ell)|P_{\ell,t}|^2\,dx\,dr$; the polarization work cancels the same term in $J_{\mathrm{tot}}$. Hence $U_L(t)-U_L(s)=-\int_s^t\int_\Omega E\cdot J_f\,dx\,dr-\sum_{\ell=1}^{N}\int_s^t\int_\Omega(\gamma_\ell/a_\ell)|P_{\ell,t}|^2\,dx\,dr$. The same argument in the Drude branch uses $J_{\mathrm{tot}}=J_f+V$, applies [L2] with the same constant positive coefficients, and adds the integral of step 1.3, giving $U_D(t)-U_D(s)=-\int_s^t\int_\Omega E\cdot J_f\,dx\,dr-\int_s^t\int_\Omega(\gamma/a)|V|^2\,dx\,dr$. The PEC boundary contribution is zero by the exact PEC branch in [L2]. [given, A1, A2, A3, F1, L2, step 1.2, step 1.3]

3.1 In either branch, $\varepsilon_\infty,\mu,a_\ell,\omega_\ell$ (or $a$) are strictly positive, so [F3] makes the displayed densities nonnegative. The Lorentz density vanishes only when $E,H,P_\ell,\partial_tP_\ell$ all vanish; the Drude density vanishes exactly when $E,H,V$ vanish, without constraining a constant polarization offset. With $J_f=0$, every term on the right sides in step 2.2 is nonpositive because each $\gamma_\ell,\gamma\ge0$. Thus $U_L(t)\le U_L(s)$ or $U_D(t)\le U_D(s)$ for $s<t$ in $I$, and both are nonnegative energies. This is a conditional model deduction, not an empirical claim. [step 2.2, A1, A2, F3, algebra] ∎
