---
id: def-qftx-formal-perturbative-yang-mills-data
kind: definition
title: Formal Perturbative Yang–Mills Renormalization Data
status: draft
origin: pipeline
dependency_level: 4
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
axiom_base: "ZF + AC_omega inherited through the selected pure SU(2) bundle model; the supplied formal counterterm sequence requires no additional choice."
deps:
  - def-qftx-nonabelian-brst-complex
  - lem-qftx-nonabelian-brst-nilpotence
  - def-qftx-local-brst-cohomology
  - def-qftx-bv-antibracket-master-action
  - def-qftx-gauge-slice-and-faddeev-popov-operator
  - def-qftx-principal-connection-form
  - lem-qftx-principal-curvature-cartan-bianchi
  - post-qftx-nonabelian-yang-mills-model
  - pthm-qftx-nonabelian-yang-mills-classical-gauge-invariance
dependency_roles:
  def-qftx-nonabelian-brst-complex: mathematical-premise
  lem-qftx-nonabelian-brst-nilpotence: mathematical-premise
  def-qftx-local-brst-cohomology: mathematical-premise
  def-qftx-bv-antibracket-master-action: mathematical-premise
  def-qftx-gauge-slice-and-faddeev-popov-operator: operational-prerequisite
  def-qftx-principal-connection-form: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  post-qftx-nonabelian-yang-mills-model: physical-assumption
  pthm-qftx-nonabelian-yang-mills-classical-gauge-invariance: physical-result
proof_strategy: definition
physical_scope: "Formal coefficientwise gauge fixing and local renormalization data for the adopted pure SU(2) Yang–Mills model; it constructs no continuum functional measure or continuum theory."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Glenn Barnich, Friedemann Brandt, and Marc Henneaux, Local BRST cohomology in gauge theories"
      url: "https://arxiv.org/pdf/hep-th/0002245"
      locator: "§§2.2–2.3 and 12.2–12.3: Yang–Mills-type local BRST fields, local functionals modulo total derivatives, and the cohomological roles of counterterms and anomalies."
    - title: "Axel Maas, Quantum Field Theory II: Advanced Quantum Field Theory (full lecture notes, 2024)"
      url: "https://static.uni-graz.at/fileadmin/_Persoenliche_Webseite/maas_axel/qftii2024.pdf"
      locator: "§§4.7.2 and 5.2.7–5.2.8, printed pp. 92–94 and 120–124: formal BRST Slavnov–Taylor identities, symmetry-breaking regulators, dimensional regularization, and pole subtraction."
verification:
  precheck: n/a
---

## Definition

Use the adopted pure $SU(2)$ Yang–Mills model: $G=SU(2)$, $\mathfrak g=\mathfrak{su}(2)$, the selected smooth right-principal bundle sector has no matter fields, and the positive invariant form is $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$ with $\kappa(T_a,T_b)=\delta_{ab}$ for $T_a=-i\sigma_a/2$, extended bilinearly to the graded coefficient algebra. Work in a nonempty local trivialization chart of the selected bundle over oriented, time-oriented Minkowski space with signature $(-,+,+,+)$ and coordinates $x^0=t$ in natural units $c=\hbar=1$. With the alternating wedge–Lie bracket fixed by the principal-curvature supplier, write $F_A=dA+\tfrac12[A\wedge A]$. The adopted Lorentzian gauge action is $S_0[A]=-(2g_{\rm YM}^2)^{-1}\int\kappa(F_A\wedge *F_A)$, with fixed positive dimensionless $g_{\rm YM}$. In the perturbative formulas $A_\mu$ has canonical engineering dimension $1$ and $g_{\rm YM}$ dimension $0$ in mass units; the ghost $c$ has dimension $0$, the antighost $\bar c$ and auxiliary field $b$ have dimension $2$, and the BRST differential has dimension $0$. Assign each antifield the dimension making its product with the corresponding BRST variation have density dimension $4$. The model postulate supplies the physical units, bundle sector, action, and boundary conditions; the classical gauge-invariance result supplies invariance under the declared bundle gauge transformations. This definition does not prove either supplier.

In the chosen local trivialization write $D_\mu c=\partial_\mu c+[A_\mu,c]$ and choose the linear covariant gauge condition $G(A)=\partial^\mu A_\mu=0$ with gauge parameter $\xi>0$. The nonminimal BRST variables are an odd antighost $\bar c$ of ghost number $-1$ and an even auxiliary field $b$ of ghost number $0$, with $s\bar c=b$ and $sb=0$. The gauge-fixing fermion and gauge-fixing contribution are

$$\Psi_\xi=\int d^4x\,\kappa(\bar c,\partial^\mu A_\mu+\tfrac{\xi}{2}b),\qquad S_{\rm gf}:=s\Psi_\xi.$$

Here $s$ is the odd BRST derivation on the finite-jet field algebra, extended to the nonminimal variables and their antifields using the specified BV convention. The gauge condition is a local perturbative choice; it does not assert a global slice or remove all gauge copies. A finite-dimensional regulated configuration space has an ordinary Faddeev–Popov Jacobian only when it supplies the finite-dimensional group action, gauge condition, and transverse slice data in the preceding finite-dimensional definition. Such a Jacobian is not a continuum functional determinant and does not define a continuum measure.

A **formal perturbative renormalization datum** consists of the selected pure SU(2) classical BV action $\Gamma_0$, the above gauge-fixing choice, the dimensional-regularization prescription $D=4-2\epsilon$, modified minimal subtraction of the $1/\epsilon$ poles together with $-\gamma_E+\log(4\pi)$, and a local counterterm space $\mathcal C_{\leq d_*}$. Here $d_*$ is a finite engineering-dimension bound fixed by the selected power-counting prescription; $\mathcal C_{\leq d_*}$ consists of integrated Lorentz-scalar polynomials of ghost number zero and engineering dimension at most $d_*$ in $A,c,\bar c,b$, their antifields, and finitely many spacetime derivatives. The usual renormalizable four-dimensional Yang–Mills choice is $d_*=4$. The minimal BV action is the extension of $S_0$ by the antifield couplings to $sA_\mu=D_\mu c$ and $sc=-\tfrac12[c,c]$; when the nonminimal pair is included it also has the term $-\int_U\bar c^*b$. The datum is admissible only when $\Gamma_0$ satisfies the classical master equation and the chosen local BV functional domain has no nonzero central element of ghost number one. Its loop-counting variable $\lambda$ is formal and dimensionless; a formal effective action is a coefficient sequence $\Gamma(\lambda)=\Gamma_0+\sum_{n\geq1}\lambda^n\Gamma_n$ and no convergence at any nonzero $\lambda$ is asserted.

For a local BV functional $\Gamma$, define the Slavnov functional by $\mathfrak S(\Gamma):=\tfrac12(\Gamma,\Gamma)$ using the chosen odd antibracket, and define the linearized operator $B_{\Gamma_0}X:=(\Gamma_0,X)$. The datum has the **local QAP property** when, at each first order $n$ where the coefficientwise Slavnov identity fails, its defect has a finite-jet local four-form representative $\delta_n$ of ghost number one and a finite-jet local three-form $\rho_n$ of ghost number two satisfying

$$\mathfrak S(\Gamma^{(<n)})=\lambda^n\int_U\delta_n+O(\lambda^{n+1}),\qquad B_{\Gamma_0}\delta_n+d_H\rho_n=0.$$

This local representative and consistency condition are part of the QAP input; take $\delta_n$ to have engineering dimension at most $d_*$ and $\rho_n$ at most $d_*-1$. The definition does not prove the QAP. The finite-jet local BRST cohomology $H^{g,p}(s\mid d_H)$ uses the local forms, ghost grading, and horizontal differential of the preceding cohomology definition; $d_H$-exact top forms are identified with zero only under the declared compact-support or boundary condition. The coefficientwise Slavnov–Taylor identity is $\mathfrak S(\Gamma(\lambda))=0$ as an equality of formal power series.

## Definition references

[Barnich, Brandt, and Henneaux, §§2.2–2.3 and 12.2–12.3](https://arxiv.org/pdf/hep-th/0002245)

[Maas, §§4.7.2 and 5.2.7–5.2.8](https://static.uni-graz.at/fileadmin/_Persoenliche_Webseite/maas_axel/qftii2024.pdf)

[[post-qftx-nonabelian-yang-mills-model|Adopted Yang–Mills action, field content, units, and scope]]

[[pthm-qftx-nonabelian-yang-mills-classical-gauge-invariance|Classical gauge invariance of the selected action]]

[[def-qftx-nonabelian-brst-complex|Minimal non-Abelian BRST field and sign conventions]]

[[lem-qftx-nonabelian-brst-nilpotence|Minimal finite-jet BRST nilpotence]]

[[def-qftx-local-brst-cohomology|Finite-jet local cohomology modulo total derivatives]]

[[def-qftx-bv-antibracket-master-action|BV antibracket, classical master action, and nonminimal variables]]

[[def-qftx-gauge-slice-and-faddeev-popov-operator|Finite-dimensional gauge-slice and Faddeev–Popov Jacobian data]]

[[def-qftx-principal-connection-form|Right-action principal connection and local gauge potential]]

[[lem-qftx-principal-curvature-cartan-bianchi|Curvature formula and local transformation convention]]

