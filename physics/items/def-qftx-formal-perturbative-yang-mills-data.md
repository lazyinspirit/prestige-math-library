---
id: def-qftx-formal-perturbative-yang-mills-data
kind: definition
title: Formal Perturbative Yang–Mills Renormalization Data
status: "published"
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
      locator: "§§2.2–2.4, Appendices 2.A–2.B, and §§12.2–12.3: Yang–Mills-type local BRST fields, the antifield-dependent complex, the nonminimal antighost/auxiliary sector, and counterterm/anomaly cohomology."
    - title: "Axel Maas, Quantum Field Theory II: Advanced Quantum Field Theory (full lecture notes, 2024)"
      url: "https://static.uni-graz.at/fileadmin/_Persoenliche_Webseite/maas_axel/qftii2024.pdf"
      locator: "§§4.7.2 and 5.2.7–5.2.8, printed pp. 92–94 and 120–124: formal BRST Slavnov–Taylor identities, symmetry-breaking regulators, dimensional regularization, and pole subtraction."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Use the adopted pure $SU(2)$ Yang–Mills model: $G=SU(2)$, $\mathfrak g=\mathfrak{su}(2)$, the selected smooth right-principal bundle sector has no matter fields, and the positive invariant form is $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$ with $\kappa(T_a,T_b)=\delta_{ab}$ for $T_a=-i\sigma_a/2$, extended bilinearly to the graded coefficient algebra. Work in a nonempty local trivialization chart of the selected bundle over oriented, time-oriented Minkowski space with signature $(-,+,+,+)$ and coordinates $x^0=t$ in natural units $c=\hbar=1$. Let $\eta_{\mu\nu}=\operatorname{diag}(-1,1,1,1)$ and define $\partial^\mu:=\eta^{\mu\nu}\partial_\nu$. With the alternating wedge–Lie bracket fixed by the principal-curvature supplier, write $F_A=dA+\tfrac12[A\wedge A]$. The adopted Lorentzian gauge action is $S_0[A]=-(2g_{\rm YM}^2)^{-1}\int\kappa(F_A\wedge *F_A)$, with fixed positive dimensionless $g_{\rm YM}$. In the perturbative formulas $A_\mu$ has canonical engineering dimension $1$ and $g_{\rm YM}$ dimension $0$ in mass units; the ghost $c$ has dimension $0$, the antighost $\bar c$ and auxiliary field $b$ have dimension $2$, and the BRST differential has dimension $0$. Assign each antifield $\Phi^*$ engineering dimension $4-\dim\Phi$, so its product with the corresponding BRST variation has density dimension $4$ whenever that variation is nonzero. The model postulate supplies the physical units, bundle sector, action, and boundary conditions; the classical gauge-invariance result supplies invariance under the declared bundle gauge transformations. This definition does not prove either supplier.

In the chosen local trivialization write $D_\mu c=\partial_\mu c+[A_\mu,c]$ and choose the linear covariant gauge condition $G(A)=\partial^\mu A_\mu=0$ with gauge parameter $\xi>0$. The nonminimal BRST variables are an odd antighost $\bar c$ of ghost number $-1$ and an even auxiliary field $b$ of ghost number $0$, with $s\bar c=b$ and $sb=0$. The gauge-fixing fermion and gauge-fixing contribution are

$$\Psi_\xi=\int d^4x\,\kappa(\bar c,\partial^\mu A_\mu+\tfrac{\xi}{2}b),\qquad S_{\rm gf}:=s\Psi_\xi.$$

Here $s$ is the odd BRST derivation on the finite-jet field algebra, extended to the nonminimal variables and their antifields using the specified BV convention. The gauge condition is a local perturbative choice; it does not assert a global slice or remove all gauge copies. For finite-dimensional regulated data as in the preceding gauge-slice definition, with a smooth right action of a $k$-dimensional Lie group $K$ on $X$, a gauge condition $\chi:U\to\mathbb R^k$, and specified positive densities on $\mathfrak k$ and $\mathbb R^k$, the ordinary Faddeev–Popov Jacobian at every $x\in U$ is the density determinant $\Delta_{\rm FP}(x)=|\det(d\chi_x\circ R_x)|$, where $R_x=d(k\mapsto x\cdot k)_e$. It is zero when $d\chi_x\circ R_x$ is singular; at a slice point it is positive exactly when the slice is transverse. Such a Jacobian is not a continuum functional determinant and does not define a continuum measure.

For the relative local complex used in this datum, the field coordinates are $A_\mu^a,c^a,\bar c^a,b^a$ and their canonical antifields $A^{*\mu}_a,c^*_a,\bar c^*_a,b^*_a$. Each antifield $\Phi^*$ has parity $|\Phi|+1$ modulo $2$ and ghost number $-1-\operatorname{gh}(\Phi)$. The extended coefficient algebra $\mathcal F_{\mathrm{BV,nm}}(U)$ is $C^\infty(U)$ tensored with the graded-commutative polynomial algebra in all even field/antifield jet generators and the exterior algebra in all odd field/antifield jet generators; each element depends on finitely many jets. For every multi-index $I\in\mathbb N^4$, total derivatives satisfy $D_\mu f=\partial_\mu f$ and $D_\mu\Phi_I=\Phi_{I+e_\mu}$; the $D_\mu$ commute. Let $\mathcal A_{\mathrm{BV,nm}}^{g,p}(U)$, $0\le p\le4$, be the finite sums of horizontal $p$-forms with coefficients in the ghost-number-$g$ part of this algebra, where the $dx^\mu$ anticommute under wedge product; set $\mathcal A_{\mathrm{BV,nm}}^{g,-1}(U)=\{0\}$ and $d_H=dx^\mu D_\mu$.

A **formal perturbative renormalization datum** consists of the selected pure SU(2) classical BV action $\Gamma_0$, the above gauge-fixing choice, the dimensional-regularization prescription $D=4-2\epsilon$ with a fixed positive reference mass scale $\mu$, modified minimal subtraction ($\overline{\mathrm{MS}}$), and a local counterterm space $\mathcal C_{\leq d_*}$. Fix the coupling convention $g_D(\mu,\epsilon)=\mu^\epsilon g(\mu)$ and $g_B=\mu^\epsilon Z_g g(\mu)$, where $g(\mu)$ is dimensionless, $g(\mu)=g_{\rm YM}$ at the selected reference scale, and $Z_g=1+O(\lambda)$ is the formal coupling-renormalization factor. Thus $g_D$ and the bare coupling $g_B$ have mass dimension $\epsilon$. With the geometric connection $A$ of dimension $1$, the dimensionally continued gauge action has coefficient $1/g_D^2=\mu^{-2\epsilon}/g(\mu)^2$; its density has dimension $4-2\epsilon=D$. The four-dimensional engineering dimensions used for local counterterms below remain those of the $\epsilon\to0$ local complex. Use the unrescaled $\mu$ convention: subtraction removes the pole parts together with the associated $-\gamma_E+\log(4\pi)$ constants, whose one-loop combination is $\Delta_\epsilon=1/\epsilon-\gamma_E+\log(4\pi)$. Equivalently, $\bar\mu^2=4\pi e^{-\gamma_E}\mu^2$ absorbs these constants into the scale; these two scale conventions are not applied simultaneously. This specifies scheme data and asserts neither a value for $Z_g$ nor a running-coupling equation. In the adopted pure-gauge sector, dimensional regularization is taken to preserve BRST in the formal analytic continuation: the regulator introduces no BRST-breaking term in the regularized gauge-fixed action or its defining rules. This is an explicit regulator property of the selected prescription, not a conclusion of the Slavnov–Taylor theorem and not an automatic claim about other matter contents or regularization schemes. The QAP and local anomaly-cancellation assumptions below remain separate. Here $d_*$ is a finite engineering-dimension bound fixed by the selected power-counting prescription; $\mathcal C_{\leq d_*}$ consists of integrated Lorentz-scalar polynomials of ghost number zero and engineering dimension at most $d_*$ in $A,c,\bar c,b$, their antifields, and finitely many spacetime derivatives, represented by elements of $\mathcal A_{\mathrm{BV,nm}}^{0,4}(U)$. The usual renormalizable four-dimensional Yang–Mills choice is $d_*=4$. With the canonical BV convention, the classical master functional is

$$\Gamma_0=S_0+\int_U d^4x\left(A^{*\mu}_a(D_\mu c)^a+\tfrac12c^*_a[c,c]^a-\bar c^*_ab\right),$$

where the nonminimal term is omitted if that pair is not included. Let $s=B_{\Gamma_0}=(\Gamma_0,\cdot)$ be the local evolutionary representative of the canonical BV antibracket with this master functional: on each field and antifield jet it is prolonged by $s(D_I\Phi)=D_I(s\Phi)$, and on a horizontal form $dx^{\mu_1}\wedge\cdots\wedge dx^{\mu_p}\wedge a$ it is extended by $s(dx^{\mu_1}\wedge\cdots\wedge dx^{\mu_p}\wedge a)=(-1)^p dx^{\mu_1}\wedge\cdots\wedge dx^{\mu_p}\wedge sa$, so $s d_H+d_Hs=0$. Its restriction to $A,c,\bar c,b$ is the transformations already specified. The shifted Jacobi identity for the canonical antibracket gives $s^2X=\tfrac12((\Gamma_0,\Gamma_0),X)=0$ for every element $X$ of the canonical domain; the jet prolongation then gives the differential on the full finite-jet complex. The datum is admissible only when $\Gamma_0$ satisfies the classical master equation and the chosen local BV functional domain has no nonzero central element of ghost number one. Its loop-counting variable $\lambda$ is formal and dimensionless; a formal effective action is a coefficient sequence $\Gamma(\lambda)=\Gamma_0+\sum_{n\geq1}\lambda^n\Gamma_n$ and no convergence at any nonzero $\lambda$ is asserted.

For a local BV functional $\Gamma$, define the Slavnov functional by $\mathfrak S(\Gamma):=\tfrac12(\Gamma,\Gamma)$ using the chosen odd antibracket, and define the linearized operator $B_{\Gamma_0}X:=(\Gamma_0,X)$. For fixed allowed counterterm coefficients $C_j\in\mathcal C_{\leq d_*}$, put $\Gamma^{(<n)}:=\Gamma+\sum_{1\leq j<n}\lambda^j C_j$, with lower-order coefficients corrected so that $\mathfrak S(\Gamma^{(<n)})=O(\lambda^n)$. The superscript records the corrected orders, not a truncation of the given $\Gamma$. The datum has the **local QAP property** when, at each first order $n$ where the coefficientwise Slavnov identity fails, its defect has a finite-jet local four-form representative $\delta_n\in\mathcal A_{\mathrm{BV,nm}}^{1,4}(U)$ and a finite-jet local three-form $\rho_n\in\mathcal A_{\mathrm{BV,nm}}^{2,3}(U)$ satisfying

$$\mathfrak S(\Gamma^{(<n)})=\lambda^n\int_U\delta_n+O(\lambda^{n+1}),\qquad B_{\Gamma_0}\delta_n+d_H\rho_n=0.$$

This local representative and consistency condition are part of the QAP input; take $\delta_n$ to have engineering dimension at most $d_*$ and $\rho_n$ at most $d_*-1$. The definition does not prove the QAP. Define the extended relative local cohomology by

$$H_{\mathrm{BV,nm}}^{g,p}(s\mid d_H):=\frac{\{a\in\mathcal A_{\mathrm{BV,nm}}^{g,p}(U):\text{there is }b\in\mathcal A_{\mathrm{BV,nm}}^{g+1,p-1}(U)\text{ with }sa+d_Hb=0\}}{\{sm+d_Hn:m\in\mathcal A_{\mathrm{BV,nm}}^{g-1,p}(U),\ n\in\mathcal A_{\mathrm{BV,nm}}^{g,p-1}(U)\}}.$$

For the counterterm-relevant restriction, let $\mathcal L_{\leq d_*}^{g,p}$ be the subspace of $\mathcal A_{\mathrm{BV,nm}}^{g,p}(U)$ consisting of Lorentz-covariant local horizontal forms whose coefficient engineering dimension is at most $d_*-4+p$. Here covariance means that under a simultaneous proper orthochronous Lorentz change of coordinates, fields, antifields and jet indices, the expression transforms as a horizontal $p$-form, with no fixed noncovariant background tensor; this is a local covariance requirement on charts and does not require $U$ to be Lorentz invariant. Antifields transform in the dual tensor representations needed to make the displayed master density a scalar. In degree four this says precisely that the density multiplying the oriented volume form is a Lorentz scalar. In degree three it includes the covariant current forms whose horizontal derivative is a scalar density. The four-dimensional weights count $D_\mu$ as dimension $1$ and $s$ as dimension $0$; they are coefficient weights, so no dimension is assigned to the displayed $dx^\mu$ for this bound. Put $\mathcal L^{g,-1}_{\leq d_*}=0$. The scalar classical master action and the tensorial total derivatives preserve covariance; their dimension rules give $s\mathcal L^{g,p}_{\leq d_*}\subseteq\mathcal L^{g+1,p}_{\leq d_*}$ and $d_H\mathcal L^{g,p}_{\leq d_*}\subseteq\mathcal L^{g,p+1}_{\leq d_*}$. Define the restricted quotient for $g=0,1$ by

$$H_{\mathrm{Lor},\leq d_*}^{g,4}(s\mid d_H):=\frac{\{a\in\mathcal L_{\leq d_*}^{g,4}:sa+d_Hb=0\text{ for some }b\in\mathcal L_{\leq d_*}^{g+1,3}\}}{\{sm+d_Hn:m\in\mathcal L_{\leq d_*}^{g-1,4},\ n\in\mathcal L_{\leq d_*}^{g,3}\}}.$$

Both representatives and equivalence primitives are restricted: $m$ has scalar top-form density of dimension at most $d_*$, and $n$ is a covariant current three-form of coefficient dimension at most $d_*-1$. This denominator is contained in the numerator, since for $a=sm+d_Hn$ the allowed witness $b=sn$ gives $sa+d_Hb=0$. This restricted cohomology is not asserted equal to a subspace of unrestricted cohomology, nor to the minimal-only cohomology. The counterterm quotient means the infinitesimally Slavnov-invariant part of $\mathcal C_{\leq d_*}$ modulo precisely these allowed trivial counterterms and currents. For the restricted QAP input require $\delta_n\in\mathcal L^{1,4}_{\leq d_*}$ and $\rho_n\in\mathcal L^{2,3}_{\leq d_*}$.

The datum satisfies the **local anomaly-cancellation hypothesis** when a sequence of pairs $\Xi_n\in\mathcal L^{0,4}_{\leq d_*}$ and $\Theta_n\in\mathcal L^{1,3}_{\leq d_*}$ is supplied, with

$$\delta_n=B_{\Gamma_0}\Xi_n+d_H\Theta_n$$

at every first failing order of the recursive partial actions with $C_j=-\int_U\Xi_j$; at nonfailing orders set $\Xi_n=\Theta_n=0$. Thus each encountered obstruction class $[\delta_n]$ vanishes in $H_{\mathrm{Lor},\leq d_*}^{1,4}(s\mid d_H)$, and the sequence supplies explicit primitives rather than requiring an additional choice construction. This is a separate assumption: the QAP consistency equation alone does not imply it, and no vanishing of the whole ghost-number-one cohomology is asserted. The supplied primitives obey the covariance and dimension restrictions above; unrestricted exactness does not establish this hypothesis. A $d_H$-exact top form represents zero as a local functional only under the declared compact-support or boundary condition. The coefficientwise Slavnov–Taylor identity is $\mathfrak S(\Gamma(\lambda))=0$ as an equality of formal power series.

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

