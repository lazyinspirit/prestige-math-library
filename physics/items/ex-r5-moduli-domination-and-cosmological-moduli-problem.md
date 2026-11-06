---
id: ex-r5-moduli-domination-and-cosmological-moduli-problem
kind: example
title: "Moduli domination and reheating constraints in a symbolic model"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 4
deps:
  - pthm-r5-quadratic-modulus-averaged-dust
  - pthm-r5-sudden-decay-reheating-temperature
dependency_roles:
  pthm-r5-quadratic-modulus-averaged-dust: physical-result
  pthm-r5-sudden-decay-reheating-temperature: physical-result
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "A symbolic, conditional illustration of the growth of an averaged canonical-scalar-to-radiation density ratio and of a model-selected reheating-temperature requirement. It specifies no compactification, modulus mass, decay-width law, measured BBN threshold, branching ratio, dark-radiation abundance, or universal exclusion of string vacua."
sources:
  references:
    - title: "M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "Complete review. Read §5.1 and §5.5.1, PDF pp. 81–83 and 92–94, for the stated sudden-decay idealization, moduli-dominated histories and the conditional distinction between hard and model-dependent reheating constraints. No numerical bound or universal string conclusion from those sections is asserted here."
---

## Example

Use units $\hbar=c=k_B=1$. Let $J\subseteq\mathbb R$ be a nonempty open time interval. In the inherited FLRW convention, $t$ and $a_n$ have length dimension, spatial coordinates and $\gamma$ are dimensionless, $[\varphi_n]=[m_n]=\mathrm{mass}$, $[\rho_{\phi,n}]=[\rho_{r,n}]=[p_{r,n}]=\mathrm{mass}^4$, and $[\Gamma_n]=[M_P]=[T]=\mathrm{mass}$; $g_0$ is dimensionless. A **modulus mode** here is the label for one retained real scalar coordinate $\varphi_n:J\to\mathbb R$, locally canonical near a quadratic minimum; the label is compactification-motivated, but no particular compactification is assumed. For each $n$, take target $\mathbb R$, target metric $G_{11}=1$, scalar coupling $K=1$, mass $m_n>0$ constant on $I$, and potential $V_n(\varphi)=m_n^2\varphi^2/2$ on the field range. The scalar time profile is $\varphi_n\in C^\infty(J,\mathbb R)$ and its homogeneous spacetime field is $\Phi_n(t,x)=\varphi_n(t)$.

Take flat, expanding FLRW model data with $c=1$ on a common nonempty open time interval $J$: $\Sigma$ is a connected smooth three-manifold with flat Riemannian metric $\gamma$, each $a_n\in C^\infty(J,(0,\infty))$, $M_n=J\times\Sigma$, $g_n=-dt^2+a_n(t)^2\gamma$, and the comoving future-directed unit field is $n_n=\partial_t$. Write $H_n=\dot a_n/a_n$. The scalar comoving density and pressure are $\rho_{\phi,n}=(\dot\varphi_n^2+m_n^2\varphi_n^2)/2$ and $p_{\phi,n}=(\dot\varphi_n^2-m_n^2\varphi_n^2)/2$.

A pre-decay radiation component means smooth homogeneous profiles $\widetilde\rho_{r,n},\widetilde p_{r,n}\in C^\infty(J,\mathbb R)$, pulled back to $M_n$ by $\pi_J:M_n\to J$, $\pi_J(t,x)=t$, with $\rho_{r,n}>0$ and $p_{r,n}=\rho_{r,n}/3$. It is a perfect fluid carried by $n_n$, with stress tensor $T_{r,n}^{ab}=(\rho_{r,n}+p_{r,n})n_n^an_n^b+p_{r,n}g_n^{ab}$. The scalar and this fluid are the only pre-decay sources, and $\rho_{\mathrm{tot},n}=\rho_{\phi,n}+\rho_{r,n}$ is their total comoving density.

Let $I\subset J$ be a nondegenerate compact interval. Use the centered uniform average of width $\Delta_n>0$ from the averaged-dust result: $\bar Q_n(t)=\Delta_n^{-1}\int_{t-\Delta_n/2}^{t+\Delta_n/2}Q_n(s)\,ds$ when $W_n(t)=[t-\Delta_n/2,t+\Delta_n/2]\subseteq I$. Assume the full smoothness, homogeneous-equation, pointwise adiabatic, total-variation, and window-limit hypotheses of $\texttt{pthm-r5-quadratic-modulus-averaged-dust}$. In particular, for a fixed admissible reference center with positive averaged density, that result gives $a_n(t)^3\bar\rho_{\phi,n}(t)/(a_n(t_0)^3\bar\rho_{\phi,n}(t_0))\to1$ uniformly over admissible centers. Choose fixed times $t_i<t_d$ in $I$, independent of $n$, with $W_n(t_i),W_n(t_d)\subseteq I$ and $\bar\rho_{\phi,n}(t_i),\bar\rho_{\phi,n}(t_d)>0$ for all sufficiently large $n$.

Set $a_{i,n}=a_n(t_i)$, $a_{d,n}=a_n(t_d)$, and $r_{i,n}=\bar\rho_{\phi,n}(t_i)/\rho_{r,n}(t_i)$, with $0<r_{i,n}<1$. Between $t_i$ and $t_d$, assume exact separate radiation conservation, $\rho_{r,n}(t)a_n(t)^4=\rho_{r,n}(t_i)a_{i,n}^4$, with no energy exchange between the components. Define $q_n=r_{i,n}a_{d,n}/a_{i,n}$ and suppose $q_n\to q\in[0,\infty)$. Define the averaged-density diagnostic $r_n(t_d^-)=\bar\rho_{\phi,n}(t_d)/\rho_{r,n}(t_d)$, using the prescribed smooth pre-decay family on the full centered window $W_n(t_d)$; this is only a pre-decay branch diagnostic, not post-decay scalar data. The averaged-dust result and radiation conservation give $r_n(t_d^-)=q_n(1+o(1))$, hence $r_n(t_d^-)\to q$. Define averaged modulus domination at $t_d^-$ by $r_n(t_d^-)>1$ and averaged subdominance by $r_n(t_d^-)<1$. Thus $q>1$ implies eventual averaged modulus domination and $q<1$ eventual averaged subdominance; if $q=1$, the limit gives no exact sign conclusion.

At $t_d$, impose the total-source sudden-decay prescription: $H_n(t_d^-)=\Gamma_n>0$ and all pre-decay energy is instantaneously matched to an ideal thermal radiation bath with density $\rho_{\mathrm{rad}}(T)=\pi^2g_*(T)T^4/30$. Let $M_P>0$ be the reduced Planck mass, $M_P^2=(8\pi G_N)^{-1}$, and take $g_*(T)=g_0>0$ for every $T>0$. A reheating temperature $T_{\mathrm{RH},n}>0$ satisfies $\pi^2g_*(T_{\mathrm{RH},n})T_{\mathrm{RH},n}^4/30=\rho_{\mathrm{tot},n}(t_d^-)$. For this globally constant-$g_0$ model the matching equation has a unique positive solution. For a declared model requirement $T_{\mathrm{RH},n}\ge T_{\min}>0$, the equivalent condition is $\Gamma_n\ge(\pi^2g_0/90)^{1/2}T_{\min}^2/M_P$. Here $T_{\min}$ is a model requirement, not a reported BBN threshold. The example gives no universal modulus mass or lifetime, decay-width law, branching ratio, dark-radiation abundance, or exclusion of string compactifications; its density comparison is averaged and leading-order only.
## Example references

[[pthm-r5-quadratic-modulus-averaged-dust]]

[[pthm-r5-sudden-decay-reheating-temperature]]

## Facts & Assumptions

**Given:** A controlled family of averaged quadratic moduli with the same compact interval $I$, fixed times $t_i<t_d$ whose windows are admissible and have positive averaged density, a separately conserved radiation component with positive density, $0<r_{i,n}<1$, a strictly expanding scale factor, complete sudden decay into radiation, a globally constant $g_*(T)=g_0>0$ for every $T>0$, and a model-specified threshold $T_{\min}>0$.

[F1] [[pthm-r5-quadratic-modulus-averaged-dust]]: on its prescribed background $J\times\mathbb R^3$ with metric $-dt^2+a_n(t)^2\delta_{ij}dx^i dx^j$, under its joint adiabatic, total-variation and centered-window hypotheses, for fixed admissible reference center $t_i$ with positive average and admissible $t_d$, $a_n(t_d)^3\bar\rho_{\phi,n}(t_d)/(a_n(t_i)^3\bar\rho_{\phi,n}(t_i))\to1$; this is a leading-limit result and supplies no finite-parameter dilution error bound.

[F2] [[pthm-r5-sudden-decay-reheating-temperature]]: with the smooth scalar-plus-radiation sources and comoving perfect-fluid datum just specified, its actual proof derives $\rho_{\rm tot}(t_d^-)=3M_P^2\Gamma_n^2$ from the flat-FLRW $00$ Einstein component and, for any positive temperature satisfying total-energy matching, derives the stated formula. Its Statement does not assert existence for a temperature-dependent $g_*$; the constant-$g_0$ root is established locally below.

[A1] Between the fixed times $t_i$ and $t_d$, radiation satisfies $\rho_{r,n}(t)a_n(t)^4=\rho_{r,n}(t_i)a_{i,n}^4$ exactly, while the averaged modulus dilution is only the leading limit supplied by [F1]; the scale factor is strictly increasing and no energy exchange between the components occurs.

[A2] At the fixed $t_d$, the sudden-decay assumptions of [F2] apply for each $n$, with $H_n(t_d^-)=\Gamma_n>0$, $g_*(T)=g_0>0$ for every $T>0$, and $T_{{\rm RH},n}\ge T_{\min}$ a model requirement rather than a reported measurement.

## Verification

1.1 To apply [F1] for the stated general $\Sigma$, construct an auxiliary spacetime $\widehat M=J\times\mathbb R^3$ with prescribed metric $\widehat g_n=-dt^2+a_n(t)^2\delta_{ij}dx^i dx^j$ and homogeneous scalar $\widehat\Phi_n(t,x)=\varphi_n(t)$, using exactly the given time functions, masses and widths. The assumed scalar ODE, smoothness, expansion, all joint pointwise, total-variation and window limits, and the selected admissible positive-density windows hold unchanged on this auxiliary background. Its density and pressure profiles are exactly $\rho_{\phi,n}$ and $p_{\phi,n}$ by their defining formulas, so its centered averages equal those on $J\times\Sigma$. Thus [F1] applies on $\widehat M$ and yields $\bar\rho_{\phi,n}(t_d)=\bar\rho_{\phi,n}(t_i)(a_{i,n}/a_{d,n})^3(1+o(1))$ for the original profiles as well; no Einstein equation on $\widehat M$ is needed. Define $r_n(t):=\bar\rho_{\phi,n}(t)/\rho_{r,n}(t)$. By [A1], $\rho_{r,n}(t_d)=\rho_{r,n}(t_i)(a_{i,n}/a_{d,n})^4$. The densities used as denominators are positive, so division gives $r_n(t_d^-)=q_n(1+o(1))$. [given, F1, A1, algebra]

1.2 By [F2] and [A2], the matching equation reduces to $\frac{\pi^2g_0}{30}T^4=3M_P^2\Gamma_n^2$. Both coefficient and right-hand side are positive. Therefore this equation has the unique positive root $T_{*,n}=(90M_P^2\Gamma_n^2/(\pi^2g_0))^{1/4}=(90/(\pi^2g_0))^{1/4}\sqrt{\Gamma_nM_P}$, so the constant-$g_0$ reheating temperature exists and is unique. [F2, A2, algebra]

2.1 If $q_n\to q$, step 1.1 gives $r_n(t_d^-)\to q$. By the definitions in the Statement, $q>1$ implies eventual averaged modulus domination and $q<1$ implies eventual averaged subdominance; when $q=1$, this leading limit gives no exact sign conclusion. [step 1.1, A1, algebra]

3.1 By step 1.2, $T_{{\rm RH},n}=(90/(\pi^2g_0))^{1/4}\sqrt{\Gamma_nM_P}>0$. Since $T_{\min}>0$, $T_{{\rm RH},n}\ge T_{\min}$ is equivalent to raising both sides to the fourth power; rearranging with $M_P,g_0>0$ gives exactly $\Gamma_n\ge(\pi^2g_0/90)^{1/2}T_{\min}^2/M_P$. Conversely, reversing these positive operations recovers the temperature inequality. This threshold equivalence is exact in the globally constant-$g_0$ model. [A2, step 1.2, algebra] ∎

## Remarks

The calculation uses no decay-width formula such as $\Gamma\propto m^3/M_P^2$; such a coefficient is channel- and model-dependent. A numerical BBN, baryogenesis, dark-radiation or gravitino constraint would require its own sourced temperature threshold, decay products and thermal-history assumptions. This example only shows how specified requirements propagate through the two conditional A-page results.
