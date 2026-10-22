---
id: ex-csm-frontier-distinct-scaling-limits
kind: example
title: Distinct kinetic scaling limits
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-csm-dk-periodic-mean-field-model
  - def-csm-frontier-boltzmann-grad-scaling
  - def-csm-frontier-two-velocity-scaling
  - lem-csm-frontier-two-velocity-contraction
  - thm-csm-frontier-two-velocity-heat-limit
  - def-countable-choice
dependency_roles:
  def-csm-dk-periodic-mean-field-model: mathematical-premise
  def-csm-frontier-boltzmann-grad-scaling: mathematical-premise
  def-csm-frontier-two-velocity-scaling: mathematical-premise
  lem-csm-frontier-two-velocity-contraction: mathematical-premise
  thm-csm-frontier-two-velocity-heat-limit: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Edward A. Codling, Michael J. Plank and Simon Benhamou, Random Walk Models in Biology, Journal of the Royal Society Interface 5(25), 2008"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2504494/"
      locator: "§2.7, equations (2.21)–(2.29): two-state switching and the telegraph model's effective diffusivity."
    - title: "Thomas Hillen and Amanda Swan, The Diffusion Limit of Transport Equations in Biology, Lecture Notes in Mathematics 2167, 2016"
      url: "https://www.math.ualberta.ca/~thillen/paper/HillenSwan12withStyle.pdf"
      locator: "§2.1, equations (8)–(13), and §4.1–4.2: the Goldstein–Kac model and formal parabolic scaling."
    - title: "Isabelle Gallagher, Laure Saint-Raymond and Benjamin Texier, From Newton to Boltzmann: Hard Spheres and Short-Range Potentials, arXiv:1208.5753v2, 2013"
      url: "https://arxiv.org/pdf/1208.5753"
      locator: "Chapter 1, §1.0 equations (1.0.1)–(1.0.2), and §1.3, pp. 5–9: hard-sphere free flight, elastic reflection and the Boltzmann–Grad parameter."
---

## Example

Fix an integer dimension $d\ge2$ and a spatial side length $L>0$ in metres; compare three model families. In the smooth periodic mean-field family, $N\ge2$ equal masses $m>0$ kilograms have positions $q_i\in\mathbb T_L^d$ and canonical momenta $p_i\in\mathbb R^d$ measured in $\mathrm{kg\,m\,s^{-1}}$, and move under the Hamiltonian

$$H_N=\sum_{i=1}^N\frac{|p_i|^2}{2m}+\frac1N\sum_{1\le i<j\le N}W(q_i-q_j),$$

where $W\in C^\infty(\mathbb T_L^d)$ is even and measured in joules. In the periodic hard-sphere family, the dimensionless diameter $a_N=\delta_N/L$ obeys $N a_N^{d-1}=\kappa$ for a fixed $\kappa>0$. In the two-velocity family on $\mathbb T_L$, the two densities have speeds $\pm c/\epsilon$ and switch to the opposite state at rate $\lambda/\epsilon^2$, with $\epsilon\downarrow0$; for well-prepared smooth data the density has the heat limit with $D=c^2/(2\lambda)$.

These prescriptions use different model variables and interaction rules: respectively a smooth pair force with coefficient $1/N$, hard-core collisions with $N a_N^{d-1}$ fixed, and a two-state linear transport equation with $\epsilon\downarrow0$. The comparison asserts no implication among their limit theorems and no derivation of the nonlinear Boltzmann equation.

## Example references

[[def-csm-dk-periodic-mean-field-model]]

[[def-csm-frontier-boltzmann-grad-scaling]]

[[def-csm-frontier-two-velocity-scaling]]

[[thm-csm-frontier-two-velocity-heat-limit]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the three model specifications in the Example, $d\ge2$, $L>0$, $m>0$, $N\ge2$, and admissible hard-sphere trajectories when discussing collision invariants.

[A1] Assume the Axiom of Countable Choice, $\mathrm{AC}_\omega$ ([[def-countable-choice]]), as required by the two-velocity heat-limit theorem.

[F1] [[def-csm-dk-periodic-mean-field-model]]: $W$ is a smooth even periodic pair potential in joules, $H_N$ contains the dimensionless coefficient $1/N$, the Hamiltonian convention is $\iota_{X_{H_N}}\omega_N=dH_N$, and the physical force law is $\dot p_i=N^{-1}\sum_{j\ne i}K(q_i-q_j)$ with $K=-\nabla W$ odd. In dimensionless variables the force law is $x_i'=v_i$ and $v_i'=N^{-1}\sum_{j\ne i}k(x_i-x_j)$ with odd $k$.

[F2] [[def-csm-frontier-boltzmann-grad-scaling]]: $a_N=\delta_N/L$ is dimensionless, $N a_N^{d-1}=\kappa$ is fixed, $\delta_N<L/2$ makes the torus contact normal unique, and an equal-mass hard-sphere collision reverses the relative velocity component normal to the contact surface.

[F3] [[def-csm-frontier-two-velocity-scaling]]: $dm_L=dx/L$, $\widehat g(n)=\int g\overline{e_n}\,dm_L$, $c/\epsilon$ has units $\mathrm{m\,s^{-1}}$, $\lambda/\epsilon^2$ has units $\mathrm{s^{-1}}$, and the total density is $\rho^\epsilon=f_+^\epsilon+f_-^\epsilon$.

[F4] [[thm-csm-frontier-two-velocity-heat-limit]]: for well-prepared smooth data, $\rho^\epsilon$ converges in $L^2(dm_L)$ uniformly on each bounded time interval to $u(t,x)=\sum_n\widehat{\rho_0}(n)e^{-D\kappa_n^2t}e_n(x)$, where $D=c^2/(2\lambda)$; its zero Fourier coefficient is the constant $\widehat{\rho_0}(0)$.

[F5] [[lem-csm-frontier-two-velocity-contraction]]: the periodic two-velocity evolution conserves $\int_0^L\rho^\epsilon(x,t)\,dx$.

## Verification

**Proof technique:** direct.

1.1 The mean-field coefficient $1/N$ and particle number $N$ are dimensionless; $q_i$ has units m, $p_i$ has units $\mathrm{kg\,m\,s^{-1}}$, $W$ and $H_N$ have units J, and $K=-\nabla W$ has units N by [F1]. The total momentum $P_N=\sum_i p_i$ is conserved because $\dot P_N=N^{-1}\sum_{i<j}(K(q_i-q_j)+K(q_j-q_i))=0$ by oddness of $K$. Along any differentiable Hamiltonian trajectory, $H_N$ is constant: the defining convention $\iota_{X_{H_N}}\omega_N=dH_N$ gives $dH_N(X_{H_N})=\omega_N(X_{H_N},X_{H_N})=0$ since a two-form is antisymmetric. The model keeps the finite particle count $N$ fixed; its separate mean-field scaling varies $N$ while retaining the smooth all-to-all interaction coefficient $1/N$. [F1, given, algebra]

1.2 In the hard-sphere scaling, $N$ and $a_N=\delta_N/L$ are dimensionless and $a_N=(\kappa/N)^{1/(d-1)}\to0$. Between collisions every velocity is constant. At a binary collision set $U=(v_i^-+v_j^-)/2$ and $g=v_i^--v_j^-$. The rule in [F2] leaves $U$ unchanged and sends $g$ to $g'=g-2(g\cdot n)n$, so $|g'|^2=|g|^2$ because $|n|=1$. Therefore the pair momentum $m(v_i+v_j)=2mU$ and pair kinetic energy $\frac m2(|v_i|^2+|v_j|^2)=m|U|^2+\frac m4|g|^2$ are unchanged. Other particles are unaffected at this isolated binary collision. Thus momentum and kinetic energy are unchanged between any two times across which only finitely many of these collision updates occur, by composing the free-flight and single-collision equalities. This comparison uses only the specified collision rule; it does not assert existence of a global hard-sphere flow or address accumulation of collisions. [F2, given, algebra]

2.1 For the two-velocity model, $[c/\epsilon]=\mathrm{m\,s^{-1}}$ and $[\lambda/\epsilon^2]=\mathrm{s^{-1}}$ by [F3], so $D=c^2/(2\lambda)$ has units $\mathrm{m^2\,s^{-1}}$. Its conserved quantity is the total density mass $\int_0^L\rho^\epsilon(x,t)\,dx$ by [F5]; the limiting heat equation preserves the same mass because its zero Fourier mode is constant. It has no particle-count parameter $N$, pair potential $W$, hard-sphere diameter $\delta_N$, or collision events. [A1, F3, F4, F5, given, algebra]

3.1 The three prescriptions constrain different variables and specify different state spaces: a smooth Hamiltonian $N$-body system with $1/N$ pair coupling, a hard-sphere system with $N a_N^{d-1}=\kappa$, and a two-component periodic density equation with $\epsilon\downarrow0$. The conservation checks in steps 1.1–2.1 concern their own equations and collision rule. None supplies a map from one model family to another or a proof of another family's limit, so the comparison asserts no mutual implication and no molecular-chaos or hard-sphere derivation of the two-velocity heat equation. [step 1.1, step 1.2, step 2.1, algebra] ∎
