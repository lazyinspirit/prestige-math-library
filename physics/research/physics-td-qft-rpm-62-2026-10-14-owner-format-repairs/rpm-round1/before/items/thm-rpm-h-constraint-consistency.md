---
id: thm-rpm-h-constraint-consistency
kind: theorem
title: "Constraint consistency for a regular first-order model"
status: draft
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
---

## Statement

Let $I\subset\mathbb R$ be an open interval and $(P,\omega)$ a symplectic manifold. Let $\chi_a:I\times P\to\mathbb R$ be smooth and suppose the covectors $d_z\chi_a(\lambda,z)$ are linearly independent at every $z\in N_\lambda:=\{z:\chi_1(\lambda,z)=\cdots=\chi_r(\lambda,z)=0\}$; this is the regular constraint condition of [[def-rpm-h-regular-constraint-system]] on each slice. Let $H_c:I\times P\to\mathbb R$ be a smooth ambient extension of a specified descended Hamiltonian. Work in a Darboux chart with coordinates $(q^i,p_i)$ and local potential $\theta=p_i\,dq^i$, so $d\theta=-\omega$ under the convention $\omega=dq^i\wedge dp_i$; paths stay in this chart.
For any compact interval $[a,b]\subset I$ with $a<b$, paths $z:[a,b]\to P$ that stay in the chart and smooth multipliers $u^a:[a,b]\to\mathbb R$ have action

$$I[z,u]=\int_a^b\left[\theta(\dot z)-H_c(\lambda,z)-u^a(\lambda)\chi_a(\lambda,z)\right]d\lambda.$$

Fixed-endpoint variations of $z$ and unrestricted variations of $u$ imply $z(\lambda)\in N_\lambda$ and $\dot z=X_{H_c(\lambda,\cdot)}+u^a(\lambda)X_{\chi_a(\lambda,\cdot)}$. A trajectory remains in the moving level set only when

$$\partial_\lambda\chi_a+\{\chi_a,H_c(\lambda,\cdot)\}+u^b(\lambda)\{\chi_a,\chi_b\}=0\quad\text{on }N_\lambda.$$

For constraints independent of $\lambda$, the first term is zero.

## Facts & Assumptions

**Given:** An open interval, a symplectic $P$, a smooth constraint family with regular slices $N_\lambda$, a smooth ambient $H_c$, and smooth multipliers.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-rpm-h-regular-constraint-system]]: at each fixed parameter, the independent constraint differentials define the tangent space as the intersection of their kernels.

[F2] [[thm-rpm-h-canonical-poisson-and-flow]]: $\iota_{X_H}\omega=dH$, $dF(X_H)=\{F,H\}$, and the stated bracket convention applies.

[F3] [[thm-darboux-theorem]]: locally a symplectic form has canonical coordinates $\omega=dq^i\wedge dp_i$.

[F4] [[thm-cm-stationarity-iff-euler-lagrange]]: fixed-endpoint first variation of a smooth first-order action vanishes exactly when its Euler–Lagrange equations hold.

## Proof

1.1 In a Darboux chart, the integrand is $p_i\dot q^i-H_c-u^a\chi_a$. Variation of $u^a$ is arbitrary and gives $\chi_a=0$; variation of each $p_i,q^i$, with endpoint variations zero, and [F4] gives Hamilton's equations for $H_T=H_c+u^a\chi_a$. [given, A1, F3, F4, algebra]

1.2 The multiplier functions depend on λ only, so $d_zH_T=dH_c+u^a d\chi_a$. By linearity of $\iota_{X_H}\omega=dH$, $X_{H_T}=X_{H_c}+u^aX_{\chi_a}$. If instead phase-dependent extensions $u^a(z,\lambda)$ are used, the extra term $\chi_aX_{u^a}$ vanishes on $N$. [given, F2, step 1.1, algebra]

2.1 Differentiate $\chi_a(\lambda,z(\lambda))=0$ along a solution; the chain rule yields $0=\partial_\lambda\chi_a+d_z\chi_a(\dot z)$. [given, F1, step 1.1, calculus]

2.2 Substitute the vector field from step 1.2 and use [F2]: $d_z\chi_a(X_{H_c})=\{\chi_a,H_c\}$ and $d_z\chi_a(X_{\chi_b})=\{\chi_a,\chi_b\}$, giving the displayed consistency equation on $N_\lambda$. Its possible algebraic outcomes depend on its coefficient matrix and remaining constraints; no rank or termination premise was assumed. [given, F2, step 1.2, step 2.1, algebra] ∎
