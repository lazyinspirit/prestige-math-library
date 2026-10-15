---
id: thm-rpm-h-constraint-consistency
kind: theorem
title: "Constraint consistency for a regular first-order model"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-rpm-h-cotangent-phase-space, def-rpm-h-regular-constraint-system, thm-rpm-h-canonical-poisson-and-flow, thm-darboux-theorem, thm-cm-stationarity-iff-euler-lagrange]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-rpm-h-cotangent-phase-space: mathematical-premise
  def-rpm-h-regular-constraint-system: mathematical-premise
  thm-rpm-h-canonical-poisson-and-flow: mathematical-premise
  thm-darboux-theorem: mathematical-premise
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
sources:
  references:
    - title: "Henneaux, Teitelboim and Regge, Constrained Hamiltonian Systems, Part 1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download"
      locator: "Chapter I, printed pp. 7–11, constraint consistency."
    - title: "Ghanashyam Date, Lectures on Constrained Systems, arXiv:1010.2062"
      url: "https://arxiv.org/pdf/1010.2062"
      locator: "§§3–4, printed pp. 12–22; multiplier consistency and Dirac bracket."
physical_scope: "Conditional local result for a specified regular constraint surface and total-Hamiltonian ansatz; no universal termination or global quotient claim."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Let $I\subset\mathbb R$ be an open interval and $(P,\omega)$ a symplectic manifold. Let $\chi_a:I\times P\to\mathbb R$ be smooth and suppose the covectors $d_z\chi_a(\lambda,z)$ are linearly independent at every $z\in N_\lambda:=\{z:\chi_1(\lambda,z)=\cdots=\chi_r(\lambda,z)=0\}$; this is the regular constraint condition of [[def-rpm-h-regular-constraint-system]] on each slice. Let $H_c:I\times P\to\mathbb R$ be a smooth ambient extension of a specified descended Hamiltonian. Work in a Darboux chart with coordinates $(q^i,p_i)$ and local potential $\theta=p_i\,dq^i$, so $d\theta=-\omega$ under the convention $\omega=dq^i\wedge dp_i$; paths stay in this chart.
For any compact interval $[a,b]\subset I$ with $a<b$, take paths $z:[a,b]\to P$ that extend smoothly to a neighborhood of $[a,b]$ and stay in the chart, and multipliers $u^a$ that extend smoothly to a neighborhood of $[a,b]$. Their action is

$$I[z,u]=\int_a^b\left[\theta(\dot z)-H_c(\lambda,z)-u^a(\lambda)\chi_a(\lambda,z)\right]d\lambda.$$

Use $C^2$ one-parameter variations of $z$ with fixed endpoints, whose paths remain in the chart, and unrestricted $C^2$ one-parameter variations of $u$, all defined on a common neighborhood of $[a,b]$. Assume $(z,u)$ is stationary: $\left.\frac{d}{d\epsilon}\right|_{\epsilon=0}I[z_\epsilon,u_\epsilon]=0$ for every such variation through $(z,u)$. These classes satisfy the path and fixed-endpoint hypotheses of [[thm-cm-stationarity-iff-euler-lagrange]]. Stationarity implies $z(\lambda)\in N_\lambda$ and $\dot z=X_{H_c(\lambda,\cdot)}+u^a(\lambda)X_{\chi_a(\lambda,\cdot)}$. Along this trajectory, preservation of the moving level set requires

$$\partial_\lambda\chi_a+\{\chi_a,H_c(\lambda,\cdot)\}+u^b(\lambda)\{\chi_a,\chi_b\}=0\quad\text{at }(\lambda,z(\lambda)).$$

For constraints independent of $\lambda$, the first term is zero.

## Facts & Assumptions

**Given:** An open interval, a symplectic $P$, a smooth constraint family with regular slices $N_\lambda$, a smooth ambient $H_c$, and a smooth pair $(z,u)$ stationary for the displayed action under the stated variations.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-rpm-h-regular-constraint-system]]: at each fixed parameter, the independent constraint differentials define the tangent space as the intersection of their kernels.

[F2] [[thm-rpm-h-canonical-poisson-and-flow]]: $\iota_{X_H}\omega=dH$, $dF(X_H)=\{F,H\}$, and the stated bracket convention applies.

[F3] [[thm-darboux-theorem]]: locally a symplectic form has canonical coordinates $\omega=dq^i\wedge dp_i$.

[F4] [[thm-cm-stationarity-iff-euler-lagrange]]: fixed-endpoint first variation of a smooth first-order action vanishes exactly when its Euler–Lagrange equations hold.

## Proof

1.1 In a Darboux chart, the integrand is $p_i\dot q^i-H_c-u^a\chi_a$. Stationarity under independent variations of $u^a$ gives $\chi_a=0$: apply [F4] to the combined coordinates $(q,p,u)$, whose integrand has no $\dot u$ term, using its fixed-endpoint subclass. Stationarity under fixed-endpoint variations of $p_i,q^i$ gives $\dot q^i=\partial_{p_i}H_T$ and $\dot p_i=-\partial_{q^i}H_T$, where $H_T=H_c+u^a\chi_a$. The equations hold on $[a,b]$, including endpoints by continuity. [given, A1, F3, F4, algebra]

2.1 The multiplier functions depend on λ only, so $d_zH_T=dH_c+u^a d\chi_a$. By linearity of $\iota_{X_H}\omega=dH$, $X_{H_T}=X_{H_c}+u^aX_{\chi_a}$. If instead phase-dependent extensions $u^a(z,\lambda)$ are used, the extra term $\chi_aX_{u^a}$ vanishes on $N$. [given, F2, step 1.1, algebra]

2.2 Differentiate $\chi_a(\lambda,z(\lambda))=0$ along a solution; the chain rule yields $0=\partial_\lambda\chi_a+d_z\chi_a(\dot z)$. [given, F1, step 1.1, algebra]

3.1 Substitute the vector field from step 2.1 and use [F2]: $d_z\chi_a(X_{H_c})=\{\chi_a,H_c\}$ and $d_z\chi_a(X_{\chi_b})=\{\chi_a,\chi_b\}$, giving the displayed consistency equation at each point of the trajectory. Requiring the total vector field to preserve every initial point of the moving constraint surface requires this equation throughout $N_\lambda$. Its possible algebraic outcomes depend on its coefficient matrix and remaining constraints; no rank or termination premise was assumed. [given, F2, step 2.1, step 2.2, algebra] ∎

