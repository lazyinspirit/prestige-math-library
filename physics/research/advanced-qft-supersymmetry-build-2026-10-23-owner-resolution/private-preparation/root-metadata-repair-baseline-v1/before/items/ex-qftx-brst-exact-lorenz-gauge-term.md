---
id: ex-qftx-brst-exact-lorenz-gauge-term
kind: example
title: A BRST-Exact Lorenz-Gauge Functional
status: draft
origin: pipeline
dependency_level: 5
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
physical_scope: "A local formal Lorenz-gauge functional in the finite-jet Yang–Mills BRST algebra; no global slice, continuum measure, or empirical prediction is asserted."
deps:
  - def-qftx-formal-perturbative-yang-mills-data
  - def-qftx-nonabelian-brst-complex
  - lem-qftx-nonabelian-brst-nilpotence
  - def-qftx-local-brst-cohomology
  - def-qftx-bv-antibracket-master-action
dependency_roles:
  def-qftx-formal-perturbative-yang-mills-data: operational-prerequisite
  def-qftx-nonabelian-brst-complex: mathematical-premise
  lem-qftx-nonabelian-brst-nilpotence: mathematical-premise
  def-qftx-local-brst-cohomology: mathematical-premise
  def-qftx-bv-antibracket-master-action: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Glenn Barnich, Friedemann Brandt, and Marc Henneaux, Local BRST cohomology in gauge theories"
      url: "https://arxiv.org/pdf/hep-th/0002245"
      locator: "§§2.2–2.3 and Appendix 2.A: non-Abelian BRST transformations, Lorenz-type gauge fixing, and the nonminimal antighost/auxiliary sector."
    - title: "Axel Maas, Quantum Field Theory II: Advanced Quantum Field Theory (full lecture notes, 2024)"
      url: "https://static.uni-graz.at/fileadmin/_Persoenliche_Webseite/maas_axel/qftii2024.pdf"
      locator: "§§4.5 and 4.7.2, printed pp. 68–73 and 92–94: BRST transformations and Lorenz-gauge Slavnov–Taylor identities."
verification:
  precheck: pass
---

## Example

Let $U\subseteq\mathbb R^{1,3}$ be a nonempty open region with compact support or boundary conditions that remove total-derivative terms. Work in the adopted pure $SU(2)$ model, with Lie algebra $\mathfrak{su}(2)$ and normalized positive $\operatorname{Ad}$-invariant form $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$, extended bilinearly to the graded coefficient algebra. In the finite-jet algebra take $A_\mu$ to be an even $\mathfrak{su}(2)$-valued field of ghost number $0$ and dimension $1$, $c$ an odd $\mathfrak{su}(2)$-valued field of ghost number $1$ and dimension $0$, $\bar c$ an odd $\mathfrak{su}(2)$-valued field of ghost number $-1$ and dimension $2$, and $b$ an even $\mathfrak{su}(2)$-valued field of ghost number $0$ and dimension $2$. Let $\xi>0$ be dimensionless. Use the Lie-algebra bracket and odd left BRST derivation

$$sA_\mu=\partial_\mu c+[A_\mu,c],\qquad sc=-\tfrac12[c,c],\qquad s\bar c=b,\qquad sb=0,$$

extended to jets by commuting with total derivatives. Define the Lorenz-gauge fermion and its BRST-exact functional by

$$\Psi_\xi=\int_U d^4x\,\kappa(\bar c,\partial^\mu A_\mu+\tfrac{\xi}{2}b),\qquad S_{\rm gf}:=s\Psi_\xi.$$

Then

$$S_{\rm gf}=\int_U d^4x\,\left(\kappa(b,\partial^\mu A_\mu)+\tfrac{\xi}{2}\kappa(b,b)-\kappa(\bar c,\partial^\mu D_\mu c)\right),\qquad D_\mu c:=\partial_\mu c+[A_\mu,c],$$

is a local, even, ghost-number-zero functional of density dimension $4$, and it is BRST-closed. It is an exact gauge-fixing term in the formal local algebra; this example does not claim a global representative for every gauge orbit or a continuum functional measure.

## Example references

[Barnich, Brandt, and Henneaux, §§2.2–2.3 and Appendix 2.A](https://arxiv.org/pdf/hep-th/0002245)

[Maas, §§4.5 and 4.7.2](https://static.uni-graz.at/fileadmin/_Persoenliche_Webseite/maas_axel/qftii2024.pdf)

## Facts & Assumptions

**Given:** The finite-jet non-Abelian BRST algebra, the optional nonminimal variables, and the Lorenz gauge data in the example statement.

[F1] The minimal BRST transformations are $sA_\mu=\partial_\mu c+[A_\mu,c]$ and $sc=-\tfrac12[c,c]$, and $s$ is an odd left derivation. [[def-qftx-nonabelian-brst-complex]]

[F2] The finite-jet minimal BRST derivation satisfies $s^2=0$ and commutes with each total derivative. [[lem-qftx-nonabelian-brst-nilpotence]]

[F3] The nonminimal pair has $s\bar c=b$ and $sb=0$ in the selected BV convention. [[def-qftx-bv-antibracket-master-action]]

[F4] The local cohomology quotient identifies $s$-exact ghost-number-zero four-forms with the zero class, modulo the declared horizontal exact terms. [[def-qftx-local-brst-cohomology]]

[F5] The adopted formal datum assigns these gauge-fixed pure-SU(2) fields their stated dimensions and selects the Lorenz gauge with $\xi>0$. [[def-qftx-formal-perturbative-yang-mills-data]]

## Verification

**Given:** [F1]–[F5] and the compact-support or boundary condition from the statement.

1.1 Since $\bar c$ is odd, the left-derivation rule gives $s\kappa(\bar c,\partial^\mu A_\mu)=\kappa(b,\partial^\mu A_\mu)-\kappa(\bar c,\partial^\mu sA_\mu)$. Commutation of $s$ with total derivatives from [F2] and $sA_\mu=D_\mu c$ give $\partial^\mu sA_\mu=\partial^\mu D_\mu c$. Likewise $s\kappa(\bar c,\xi b/2)=\xi\kappa(b,b)/2$ because $sb=0$. Adding these terms yields the displayed expression for $S_{\rm gf}$. [given, F1, F2, F3, algebra]

1.2 The displayed density is local. The field dimensions in [F5] give $2+2=4$ in the $b\partial A$ term, $2+2=4$ in the $b^2$ term, and $2+1+1+0=4$ in the $\bar c\partial D c$ term; the ghost numbers in the statement sum to zero and the density is even. [given, F5, algebra]

2.1 The square of the extended derivation vanishes on $A,c$ by [F2] and on $\bar c,b$ since $s^2\bar c=sb=0$ and $s^2b=0$. Its square is an even derivation, so it vanishes on every finite-jet polynomial; therefore $sS_{\rm gf}=s^2\Psi_\xi=0$. Since $S_{\rm gf}=s\Psi_\xi$, [F4] identifies its local cohomology class with zero. [F2, F3, F4, step 1.1, algebra] ∎

