---
id: def-qftx-bv-antibracket-master-action
kind: definition
title: Classical BV Antibracket and Yang–Mills Master-Action Data
status: draft
origin: session
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-nonabelian-brst-complex
  - lem-qftx-nonabelian-brst-nilpotence
dependency_roles:
  def-qftx-nonabelian-brst-complex: mathematical-premise
  lem-qftx-nonabelian-brst-nilpotence: mathematical-premise
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Joaquim Gomis, Jordi París, and Stuart Samuel, Antibracket, Antifields and Gauge-Theory Quantization"
      url: "https://arxiv.org/pdf/hep-th/9412228"
      locator: "§§4.1–4.6 and 5.2: field/antifield degrees, the canonical antibracket and its identities, the classical master equation, and the minimal Yang–Mills master-action formula."
    - title: "Jian Qiu and Maxim Zabzine, Introduction to Graded Geometry, Batalin-Vilkovisky Formalism and their Applications"
      url: "https://arxiv.org/pdf/1105.2680"
      locator: "§§3.1–3.2 and 4.1–4.4, PDF pp. 11–26: graded coordinates, the odd cotangent bundle, the degree-one odd Poisson/Gerstenhaber bracket, and its finite-dimensional domain."
verification:
  precheck: pending
---

## Definition

Use the local field data and BRST convention on an open set $U\subseteq\mathbb R^n$ given by a finite-dimensional real Lie algebra $\mathfrak g$, a graded representation space $V$, an even $\mathfrak g$-valued gauge potential $A_\mu$, an odd ghost $c$ of ghost number $1$, and matter components $\psi^\alpha$ of parity $\epsilon_\alpha$ and ghost number $0$. For every field or ghost coordinate $\Phi^A$ of parity $\epsilon_A$ and ghost number $g_A$, introduce an antifield $\Phi_A^*$ of parity $\epsilon_A+1\pmod 2$ and ghost number $-1-g_A$. Thus $A^*$ and the antifields of even matter are odd of ghost number $-1$, while $c^*$ is even of ghost number $-2$. The minimal sector consists of $A,\psi,c$ and these antifields.

For a finite-dimensional canonical coordinate algebra, take the polynomial algebra in the even coordinates tensor the exterior algebra in the odd coordinates. In the local-field notation, use finite-jet local functionals with variational derivatives only when the chosen domain makes those derivatives and integrations by parts well-defined; compact support or boundary conditions that kill surface terms are part of that domain. For homogeneous functionals $F,G$, define the canonical antibracket by

$$
(F,G):=\sum_A\left(\frac{\partial_r F}{\partial\Phi^A}\frac{\partial_lG}{\partial\Phi_A^*}-\frac{\partial_rF}{\partial\Phi_A^*}\frac{\partial_lG}{\partial\Phi^A}\right),
$$

with an integral over $U$ replacing the sum in a local-field expression. Left and right derivatives are the graded derivatives acting from the indicated side. This convention has odd parity, ghost number $+1$, the shifted graded-skew identity, the shifted Jacobi identity, and the graded Leibniz identity. A regular finite-dimensional canonical domain has no nonzero central element of ghost number $1$: an element central against every coordinate has all coordinate derivatives zero and is a numerical constant. A formal local-functional domain used below must separately satisfy this same no-ghost-number-one-center condition.

Let a local gauge parameter be a smooth map $\lambda:U\to\mathfrak g$, and define its infinitesimal action on the fields by $\delta_\lambda A_\mu=\partial_\mu\lambda+[A_\mu,\lambda]$ and $\delta_\lambda\psi=-\rho(\lambda)\psi$. Write these variations as $\delta_\lambda\Phi^i=R^i_\alpha[\Phi]\lambda^\alpha$, where $R$ is the resulting linear differential operator in $\lambda$. Assume this declared gauge action is irreducible: if $\delta_\lambda\Phi^i\equiv0$ for every field configuration, then $\lambda\equiv0$. Assume also that its Lie-algebra action closes off shell, meaning its commutator closes without using equations of motion, and that no additional gauge symmetry is included. Let $S_0[A,\psi]$ be a specified local classical action invariant under these transformations. Write $s_0$ for the BRST operator on the minimal fields given by $s_0A_\mu=\partial_\mu c+[A_\mu,c]$, $s_0c=-\tfrac12[c,c]$, and $s_0\psi=-\rho(c)\psi$. The minimal BV functional candidate is

$$S_{\mathrm{BV}}:=S_0+\int_U d^nx\,\sum_A(-1)^{\epsilon_A}\Phi_A^*\,s_0\Phi^A,$$

where each product is in the displayed order and the same left/right derivative convention is used in the antibracket. It is a **classical master action** exactly when it satisfies the classical master equation $(S_{\mathrm{BV}},S_{\mathrm{BV}})=0$; the displayed formula alone does not assert that a particular $S_0$ satisfies that equation.

The optional nonminimal sector adds an odd antighost $\bar c^a$ of ghost number $-1$, an even auxiliary field $b^a$ of ghost number $0$, and their antifields, with the BV functional term $-\bar c_a^*b^a$ giving $s\bar c=b$ and $sb=0$. This definition makes no cohomological contractibility claim for that pair. The formal local-field notation does not define an infinite-dimensional measure, a BV Laplacian $\Delta$, a path integral, or the quantum master equation.

## Definition references

[[def-qftx-nonabelian-brst-complex|Local field, ghost, representation, and sign conventions]]

[[lem-qftx-nonabelian-brst-nilpotence|Square-zero BRST operator on the minimal sector]]

[[lem-qftx-bv-canonical-action-generates-brst-differential|Coordinate action of the minimal antifield coupling]]

[Gomis, París, and Samuel, §§4.1–4.6 and 5.2](https://arxiv.org/pdf/hep-th/9412228)

[Qiu and Zabzine, §§3.1–3.2 and 4.1–4.4](https://arxiv.org/pdf/1105.2680)
