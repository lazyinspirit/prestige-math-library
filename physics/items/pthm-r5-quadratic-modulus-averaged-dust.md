---
id: pthm-r5-quadratic-modulus-averaged-dust
kind: physics-theorem
title: "A quadratic modulus has leading averaged dust behavior"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 3
deps:
  - def-r5-cosmology-4d-scalar-eft-data
  - pthm-r5-multiscalar-flrw-dynamics
  - def-gr-flrw-friedmann-system
  - def-gr-scalar-field-matter-model
dependency_roles:
  def-r5-cosmology-4d-scalar-eft-data: formulation-prerequisite
  pthm-r5-multiscalar-flrw-dynamics: physical-result
  def-gr-flrw-friedmann-system: mathematical-premise
  def-gr-scalar-field-matter-model: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "A leading-limit deduction for one homogeneous canonical real scalar on a prescribed expanding, spatially flat FLRW background. The result concerns only the averaged pressure and energy dilution in the stated quadratic, adiabatic, and uniform-window regime. It asserts no global string compactification, pointwise dust stress, finite-parameter O(H/m) correction, observation, decay law, or behavior for nonquadratic potentials or backgrounds dynamically determined by the scalar rather than prescribed."
sources:
  references:
    - title: "M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "Complete 190-page review. Read §5.1 and §5.5.1, PDF pp. 81–83 and 92–94, for reheating, modulus domination, the conditional cosmological moduli problem and late reheating; PDF p. 92 identifies coherent modulus oscillations as matter-like."
    - title: "Daniel Baumann, TASI Lectures on Inflation, arXiv:0907.5424v2"
      url: "https://arxiv.org/pdf/0907.5424"
      locator: "Complete 159-page lecture-note PDF. Read Lecture 1 §6.4, PDF p. 35 (zero-based page index 34; printed p. 35), especially Eqs. (91)–(92): coherent scalar oscillations act like pressureless matter, while the decay rate is model-dependent and reheating is not derived in detail."
    - title: "David J. E. Marsh, Axion Cosmology, arXiv:1510.07633v2"
      url: "https://arxiv.org/pdf/1510.07633v2"
      locator: "Complete 111-page review. Read §4.2, Eqs. (55)–(57), for the homogeneous canonical harmonic-scalar equation and its energy density and pressure, and §4.3.1, Eq. (62) and the following text, for the stated WKB ansatz, A∝a^(−3/2), averaged equation of state zero and a^(−3) density. The application there is an axion; it is used here only as an independent harmonic-scalar treatment, not as a modulus or compactification supplier."
---

## Statement

Use units $\hbar=c=1$ and assign length dimension to the FLRW coordinates $t$ and $a_n$, and dimensionless coordinates $x^i$ and metric components $\delta_{ij}$ as displayed below. Thus $[H_n]=[m_n]=\mathrm{mass}$, $[\Delta_n]=\mathrm{mass}^{-1}$, $[\varphi_n]=\mathrm{mass}$, and $[\rho_n]=[p_n]=\mathrm{mass}^4$. In this item, a **modulus mode** means a one-field scalar model with target $\mathbb R$, metric $G_{11}=1$, coupling $K=1$, positive mass constant on $I$, and exact quadratic potential $V(\varphi)=m^2\varphi^2/2$ on the field range; “modulus” is a model label and no compactification is assumed. Let $I=[t_-,t_+]$ be a nondegenerate compact interval inside an open cosmic-time interval $J$, with $a_n\in C^\infty(J,(0,\infty))$ and $H_n=\dot a_n/a_n>0$ on $I$. For each $n\ge1$, let $\varphi_n\in C^\infty(J,\mathbb R)$ be the time profile of the homogeneous spacetime scalar $(t,x)\mapsto\varphi_n(t)$ on $J\times\mathbb R^3$. Use the one-field target coordinate $\mathcal T_0=\mathbb R$ with metric $G_{11}=1$ and scalar coupling $K=1$, as in the cited scalar EFT and scalar-field conventions. Let $m_n>0$ be constant on $I$ and have mass dimension one and let $V_n(\varphi)=m_n^2\varphi^2/2$ throughout the field range. The prescribed spatially flat FLRW metric is $ds^2=-dt^2+a_n(t)^2\delta_{ij}dx^i dx^j$ on $J\times\mathbb R^3$. Assume the canonical homogeneous scalar equation $\ddot\varphi_n+3H_n\dot\varphi_n+m_n^2\varphi_n=0$ and define $\rho_n=\dot\varphi_n^2/2+m_n^2\varphi_n^2/2$ and $p_n=\dot\varphi_n^2/2-m_n^2\varphi_n^2/2$. For each $n$, let $\Delta_n>0$. For $Q\in\{\rho_n,p_n\}$ define the centered uniform window average $\bar Q_n(t)=\Delta_n^{-1}\int_{t-\Delta_n/2}^{t+\Delta_n/2}Q(s)\,ds$ whenever the window lies in $I$. Write $W_n(t)=[t-\Delta_n/2,t+\Delta_n/2]$ and call $t$ an admissible center when $W_n(t)\subseteq I$. Consider nonzero solutions and admissible centers with $\bar\rho_n(t)>0$, and suppose

$$\sup_I H_n/m_n\to0,\quad \sup_I|\dot H_n|/m_n^2\to0,\quad \sup_I|\ddot H_n|/m_n^3\to0,\quad m_n^{-1}\int_I|\dot H_n(s)|\,ds\to0,$$

$$m_n\Delta_n\to\infty,\quad \Delta_n\sup_I H_n\to0,\quad \Delta_n\sup_I|\dot H_n|/m_n\to0,\quad \Delta_n\sup_I|\ddot H_n|/m_n^2\to0.$$

Fix a reference center $t_0\in I$ such that $W_n(t_0)\subseteq I$ and $\bar\rho_n(t_0)>0$ for all sufficiently large $n$. For every such fixed reference center, the joint limit is $\bar p_n(t)/\bar\rho_n(t)\to0$ and $a_n(t)^3\bar\rho_n(t)/(a_n(t_0)^3\bar\rho_n(t_0))\to1$, uniformly over admissible centers $t$ with $\bar\rho_n(t)>0$. Define the local averaged envelope by $A_n(t)=(2\Delta_n^{-1}\int_{t-\Delta_n/2}^{t+\Delta_n/2}\varphi_n(s)^2\,ds)^{1/2}$. Then $A_n(t)/A_n(t_0)=(a_n(t_0)/a_n(t))^{3/2}(1+o(1))$ and $\bar\rho_n(t)=m_n^2A_n(t)^2/2\,(1+o(1))$. The total-variation limit $m_n^{-1}\int_I|\dot H_n(s)|\,ds\to0$ controls the accumulated $\dot H_n$ term in the dilution estimate. This is an averaged leading-limit claim: it supplies no pointwise field-amplitude remainder or finite-parameter $O(H/m)$ correction, and makes no claim for nonquadratic potentials or for backgrounds dynamically determined by the scalar rather than prescribed as in the hypotheses.

## Statement references

[[def-r5-cosmology-4d-scalar-eft-data]]

[[pthm-r5-multiscalar-flrw-dynamics]]

[[def-gr-flrw-friedmann-system]]

[[def-gr-scalar-field-matter-model]]

## Facts & Assumptions

**Given:** The one-field unit-metric branch of the four-dimensional Einstein-frame scalar EFT, its homogeneous scalar equation on a spatially flat expanding FLRW background, the quadratic potential and positive constant mass, the stated smoothness and compact interval, and the joint pointwise, total-variation and window limits in the Statement.

[F1] [[def-r5-cosmology-4d-scalar-eft-data]]: the scalar EFT uses $\hbar=c=1$, a smooth scalar target with positive metric, and a smooth potential; for this one-field item the target patch is $\mathbb R$ with metric $G_{11}=1$.

[F2] [[pthm-r5-multiscalar-flrw-dynamics]]: under its smooth, homogeneous, Euclidean-chart hypotheses and its matter-free adopted model (no other stress tensor and no direct scalar source), scalar stationarity gives $D_t\dot\phi^i+3H\dot\phi^i+G^{ij}\partial_jV=0$, with $\rho=G_{ij}\dot\phi^i\dot\phi^j/2+V$ and $p=G_{ij}\dot\phi^i\dot\phi^j/2-V$. Here this supplies the one-field convention for comparison; the scalar ODE and energy expressions are explicitly assumed in the Statement, rather than inferred by extending that theorem to a prescribed background.

[F3] [[def-gr-flrw-friedmann-system]]: the FLRW Hubble function is $H=\dot a/a$ and the Friedmann system is a named collection of pointwise scalar equations on the time interval; this mathematical definition itself adopts no equation of state.

[F4] [[def-gr-scalar-field-matter-model]]: in the single-real-scalar convention the scalar equation and candidate stress tensor are specified separately; with $K=1$ and $c=1$ its homogeneous canonical density and pressure have the same kinetic-minus/plus-potential signs used here.

[A1] For each family member the field is nonzero, $m_n$ is constant and positive on $I$, the potential is exactly quadratic over the field range, $H_n>0$, the background is prescribed, the windows are centered uniform windows contained in $I$, and all limits in the Statement hold. Backreaction is neglected in the prescribed-background calculation or is treated separately; no empirical input is used.

## Proof

1.1 Use the explicitly assumed equation $\ddot\varphi_n+3H_n\dot\varphi_n+m_n^2\varphi_n=0$ and definitions $\rho_n=(\dot\varphi_n^2+m_n^2\varphi_n^2)/2$ and $p_n=(\dot\varphi_n^2-m_n^2\varphi_n^2)/2$, with $H_n=\dot a_n/a_n$ as in [F3]. For comparison with [F2], the constant target metric $G_{11}=1$ of [F1] gives $G^{11}=1$ and $\Gamma^1{}_{11}=\tfrac12G^{11}\partial_1G_{11}=0$, while $V_n'(\varphi)=m_n^2\varphi$; hence the assumed expressions have exactly its canonical one-field form and the signs of [F4]. This comparison does not invoke [F2]'s matter-free model or its Einstein equations on the prescribed background. [given, F1, F2, F3, F4, algebra]

2.1 Put $q_n=\varphi_n\dot\varphi_n$. Differentiating the energy and using step 1.1 gives $\dot\rho_n=\dot\varphi_n(\ddot\varphi_n+m_n^2\varphi_n)=-3H_n\dot\varphi_n^2$. Differentiating $q_n$ and substituting the same equation gives $\dot q_n=\dot\varphi_n^2-3H_nq_n-m_n^2\varphi_n^2$, hence $p_n=(\dot q_n+3H_nq_n)/2$. Finally, $2m_n|q_n|\le\dot\varphi_n^2+m_n^2\varphi_n^2=2\rho_n$ by $(|\dot\varphi_n|-m_n|\varphi_n|)^2\ge0$, so $|q_n|\le\rho_n/m_n$. [A1, step 1.1, algebra]

3.1 Write $J_n(t)=[t-\Delta_n/2,t+\Delta_n/2]$. Since $\dot\varphi_n^2\le2\rho_n$ and $H_n\le H_{n,\max}:=\sup_IH_n$, step 2.1 gives $|\dot\rho_n|\le6H_{n,\max}\rho_n$. For $s\ge u$, the derivative of $e^{-6H_{n,\max}(s-u)}\rho_n(s)$ is nonpositive, so $\rho_n(s)\le e^{6H_{n,\max}(s-u)}\rho_n(u)$. For $s\le u$, the derivative of $e^{6H_{n,\max}(s-u)}\rho_n(s)$ is nonnegative, giving $\rho_n(s)\le e^{6H_{n,\max}(u-s)}\rho_n(u)$. Thus $\rho_n(s)\le e^{6H_{n,\max}\Delta_n}\rho_n(u)$ for all $s,u\in J_n(t)$; averaging over $u$ bounds each endpoint energy by $e^{6H_{n,\max}\Delta_n}\bar\rho_n(t)$. Averaging the identity for $p_n$ in step 2.1 and using $|q_n|\le\rho_n/m_n$ now yields $|\bar p_n(t)|\le\bar\rho_n(t)\left(e^{6H_{n,\max}\Delta_n}/(m_n\Delta_n)+3H_{n,\max}/(2m_n)\right)$. [A1, step 2.1, algebra]

3.2 Let $R_n=a_n^3\rho_n$. step 2.1 and $H_n=\dot a_n/a_n$ give $\dot R_n=3H_na_n^3\rho_n+a_n^3\dot\rho_n=-3H_na_n^3p_n$. Substituting $p_n=(\dot q_n+3H_nq_n)/2$ and integrating by parts on $[t_0,t]$ gives $R_n(t)-R_n(t_0)=-\frac32[H_na_n^3q_n]_{t_0}^{t}+\frac32\int_{t_0}^{t}(H_na_n^3)'q_n\,ds-\frac92\int_{t_0}^{t}H_n^2a_n^3q_n\,ds$. Since $(H_na_n^3)'=a_n^3\dot H_n+3H_n^2a_n^3$, the two $H_n^2$ integral terms, with coefficients $9/2$ and $-9/2$, cancel exactly, leaving $R_n(t)-R_n(t_0)=-\frac32[H_na_n^3q_n]_{t_0}^{t}+\frac32\int_{t_0}^{t}a_n^3\dot H_nq_n\,ds$. [A1, step 2.1, F3, algebra]

4.1 The first term in parentheses in step 3.1 tends to zero because $m_n\Delta_n\to\infty$ and $H_{n,\max}\Delta_n\to0$; the second tends to zero because $H_{n,\max}/m_n\to0$. Division is permitted by the stated $\bar\rho_n(t)>0$. This proves $\bar p_n(t)/\bar\rho_n(t)\to0$ uniformly for admissible centers. [A1, step 3.1, algebra]

4.2 The reference window is admissible and has $\bar\rho_n(t_0)>0$. If $R_n(t_0)=a_n(t_0)^3\rho_n(t_0)=0$, then $\rho_n(t_0)=0$; the comparison in step 3.1 with $u=t_0$ gives $0\le\rho_n(s)\le e^{6H_{n,\max}\Delta_n}\rho_n(t_0)=0$ throughout $W_n(t_0)$. This would force $\bar\rho_n(t_0)=0$, a contradiction, so $R_n(t_0)>0$. Because $R_n$ is continuous on compact $I$, let $M_n=\sup_{s\in I}R_n(s)<\infty$ and $C_n=\frac{3}{2m_n}\left(2H_{n,\max}+\int_I|\dot H_n(s)|\,ds\right)$. The bound $a_n^3|q_n|\le R_n/m_n$ from step 2.1 and the exact identity in step 3.2 imply $|R_n(t)-R_n(t_0)|\le C_nM_n$. Hence $R_n(t)\le R_n(t_0)+C_nM_n$ for every $t$, and taking the supremum yields $M_n\le R_n(t_0)+C_nM_n$. By the $H/m$ and total-variation limits, $C_n\to0$; eventually $C_n<1$, so $M_n\le R_n(t_0)/(1-C_n)$ and $\sup_I|R_n(t)/R_n(t_0)-1|\le C_n/(1-C_n)\to0$. [A1, step 2.1, step 3.1, step 3.2, algebra]

5.1 For $s\in J_n(t)$, $a_n(s)^3/a_n(t)^3=\exp(3\int_t^sH_n(u)\,du)=1+o(1)$ uniformly because $H_{n,\max}\Delta_n\to0$; step 4.2 also gives $R_n(s)/R_n(t)=1+o(1)$ uniformly. Since $\rho_n=R_n/a_n^3$, it follows that $\rho_n(s)=\rho_n(t)(1+o(1))$ uniformly on the window and hence $a_n(t)^3\bar\rho_n(t)=R_n(t)(1+o(1))$. Combining this with step 4.2 proves $a_n(t)^3\bar\rho_n(t)/(a_n(t_0)^3\bar\rho_n(t_0))\to1$. [A1, step 4.2, algebra]

6.1 The definitions give the exact identity $\bar\rho_n(t)-\bar p_n(t)=m_n^2\Delta_n^{-1}\int_{J_n(t)}\varphi_n(s)^2\,ds=m_n^2A_n(t)^2/2$. By step 4.1, $\bar p_n/\bar\rho_n\to0$, so $\bar\rho_n=m_n^2A_n^2/2\,(1+o(1))$. step 5.1 then implies $A_n(t)/A_n(t_0)=(a_n(t_0)/a_n(t))^{3/2}(1+o(1))$, with the positive square root fixed by the definition of $A_n$. These are averaged leading-limit statements, not pointwise dust or a pointwise sinusoidal approximation. [A1, step 4.1, step 5.1, algebra] ∎
