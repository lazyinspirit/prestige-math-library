---
id: def-aqft-anomaly-matching-data
kind: definition
title: Flat-space chiral anomaly-matching data and regulator convention
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 4
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-thooft-anomalies
deps:
  - def-aqft-thooft-anomaly
  - def-aqft-p-form-global-symmetry
  - def-qftx-local-brst-cohomology
  - def-qftx-nonabelian-brst-complex
  - lem-qftx-nonabelian-brst-nilpotence
  - def-aqft-cubic-anomaly-polynomial
dependency_roles:
  def-aqft-thooft-anomaly: formulation-prerequisite
  def-aqft-p-form-global-symmetry: formulation-prerequisite
  def-qftx-local-brst-cohomology: mathematical-premise
  def-qftx-nonabelian-brst-complex: mathematical-premise
  lem-qftx-nonabelian-brst-nilpotence: mathematical-premise
  def-aqft-cubic-anomaly-polynomial: mathematical-premise
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A formal, one-loop background-field data contract for massless four-dimensional Weyl species and auxiliary nondynamical charged probes, with effective compact SU(3)×U(1) action on the combined data; the anomaly problem uses the connection-background subalgebra. It does not construct an interacting continuum measure or test global anomalies."
sources:
  references:
    - title: Adel Bilal, Lectures on Anomalies (full lecture notes)
      url: https://arxiv.org/pdf/0802.0634
      locator: "§2.4, Eq. (2.20), printed p. 7, and §§5.2–5.2.4, 7.1–7.2, 9.4, and 10.4, printed pp. 31–39, 45–50, 75–77, and 87–88: the mostly-plus chirality convention, Pauli–Villars-regulated chiral triangle, representation traces, consistent descent, and normalized degree-six polynomial."
    - title: Enrique Alvarez, Gauge Anomalies
      url: https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf
      locator: "§§2.1–2.4, printed pp. 25–38: the independent Stora–Zumino derivation, chiral spectrum additivity, conjugate-representation trace, and local counterterm convention."
verification:
  precheck: n/a
---

## Definition

Use natural units $c=\hbar=1$ and flat oriented Minkowski spacetime $M=\mathbb R^{1,3}$ with metric $\eta=\operatorname{diag}(-,+,+,+)$, orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, and its standard spin structure. Fix Dirac matrices by $\{\gamma^\mu,\gamma^\nu\}=2\eta^{\mu\nu}I$ and $\gamma_5=-i\gamma^0\gamma^1\gamma^2\gamma^3=i\gamma_0\gamma_1\gamma_2\gamma_3$; set $P_+=(I+\gamma_5)/2$ and $P_-=I-P_+$. Here $\gamma_0=-\gamma^0$ and $\gamma_j=\gamma^j$ for spatial $j$; this is Bilal's mostly-plus positive-chirality convention, Eq. (2.20), used by the adopted source-normalized determinant law below. Reversing this chirality convention would reverse the one-species anomaly sign. The global symmetry group is the fixed global form $H=SU(3)\times U(1)_V$, acting on a finite multiset $S$ of massless positive-chirality Weyl fields. Each field is a Grassmann-odd smooth compactly supported section of $\operatorname{im}(P_+)\otimes V_i$, where $V_i$ carries a specified finite-dimensional unitary representation $R_i$ of $H$. The chiral kinetic operator is $\mathcal D_{+,i}=P_-i\gamma^\mu D_{\mu,i}P_+$ from positive to negative chirality; its regulated determinant phase is a formal perturbative input. The matter field has mass dimension $3/2$; the background components $A_\mu,B_\mu$ have mass dimension one, their curvature components have dimension two, $x^\mu$ and $dx^\mu$ have dimension minus one, and all $U(1)_V$ charges and trace coefficients are dimensionless. Thus the connection one-forms and curvature two-forms including their coordinate differentials are dimensionless. The backgrounds are global one-forms on the trivial bundles over $M$, vary smoothly, and have compact support; the global symmetry is not integrated over as a dynamical gauge redundancy.

To retain this fixed product group for every finite $S$, including the empty spectrum, also admit auxiliary nondynamical background probes $q=(u,v)\in C_c^\infty(M,\mathbb C^3\oplus\mathbb C)$ of mass dimension zero, with commuting components. For a constant $h=(g,z)\in H$, define the active global action by $q\mapsto(gu,zv)$, $\psi_i\mapsto R_i(h)\psi_i$, $A\mapsto gAg^{-1}$, and $B\mapsto B$. These maps obey the group-action law. The probes range over all such sections, rather than one fixed section: if $h$ fixes every probe, taking $u(x)=\chi(x)a$, $v(x)=\chi(x)b$ for a nonzero smooth compactly supported scalar function $\chi$ and arbitrary $a\in\mathbb C^3$, $b\in\mathbb C$ gives $ga=a$ and $zb=b$, hence $g=I_3$ and $z=1$. Thus the action on the combined admitted data is effective in the preceding 0-form symmetry interface. This is an explicit enlargement of the background data, not a faithfulness assertion for the Weyl fields alone: for $S=\{E\}$ their action has kernel $\{(\omega I_3,\omega^{-1}):\omega^3=1\}$. The probes are not integrated over, have no kinetic operator or determinant, and are not members of $S$. The formal generating functional is declared independent of them, $\Gamma[A,B;q]=\Gamma[A,B]$. All anomaly densities, admitted counterterms and boundary primitives below are likewise independent of $q$; the anomaly problem is the one in the specified connection-background subalgebra, not a claim about cohomology after adjoining probe jets. Setting $q=0$ is an invariant restriction for evaluating these quantities, but does not replace the complete probe domain when testing effectiveness.

For each species, the background covariant derivative is $D_{\mu,i}=\partial_\mu+\rho_{i*}(A_\mu,iB_\mu)$ in its representation, where $A$ is an anti-Hermitian $\mathfrak{su}(3)$ connection, $B$ is a real $U(1)_V$ connection, and $\rho_{i*}:\mathfrak{su}(3)\oplus i\mathbb R\to\mathfrak u(V_i)$ is the derived Lie-algebra representation. Set $F_A=dA+A\wedge A$ and $f=dB$, and write $A_i:=\rho_{i*}(A,iB)$ and $F_i:=dA_i+A_i\wedge A_i$; thus $D_{\mu,i}=\partial_\mu+(A_i)_\mu$. For $E=(\mathbf3,+1)$, $A_E=A+iB I_3$ and $F_E=F_A+ifI_3$; for $E^*=(\bar{\mathbf3},-1)$, $A_{E^*}=-A^T-iB I_3$ and $F_{E^*}=-F_A^T-ifI_3$. Local changes of background trivialization use the inverse action on charged data: $A\mapsto g^{-1}Ag+g^{-1}dg$, $B\mapsto B+d\alpha$, $\psi_i\mapsto R_i(g,e^{i\alpha})^{-1}\psi_i$, and $q=(u,v)\mapsto(g^{-1}u,e^{-i\alpha}v)$, for smooth $g:M\to SU(3)$ equal to $I_3$ outside a compact set and $\alpha\in C_c^\infty(M,\mathbb R)$. Let $c$ be the ghost-number-one odd $\mathfrak{su}(3)$ ghost and $\eta$ the ghost-number-one odd real $U(1)_V$ ghost. The finite-jet BRST differential for $\mathfrak h=\mathfrak{su}(3)\oplus i\mathbb R$ is specified on components by $sA_\mu=\partial_\mu c+[A_\mu,c]$, $sc=-[c,c]/2$, $sB_\mu=\partial_\mu\eta$, $s\eta=0$, and $s\psi_i=-\rho_{i*}(c,i\eta)\psi_i$; it acts on jets by commuting with total derivatives. If probe jets are adjoined, their transformations are $su=-cu$ and $sv=-i\eta v$; their exclusion from the connection-background subalgebra is preserved by $s$. The $U(1)_V$ factor is central. On horizontal forms use the supplier's extension $s(dx^\mu\wedge a)=-dx^\mu\wedge s(a)$, so $sd_H+d_Hs=0$. In particular the whole one-form obeys $sB=-d_H\eta$; the positive component rule is not a whole-form equation.

For an ordinary compactly supported infinitesimal parameter $\epsilon=\epsilon^aT_a:M\to\mathfrak{su}(3)$ and $\alpha:M\to\mathbb R$, define a linear map $\mathcal E^p_{\epsilon,\alpha}$ from ghost-number-one background horizontal $p$-forms to ordinary $p$-forms. In the unique normal form with all $dx$ factors to the left and the single ghost jet to the right, replace $c_I^a$ by $\partial_I\epsilon^a$ and $\eta_I$ by $\partial_I\alpha$, leaving background jets unchanged. Every such form has precisely one ghost factor because the background algebra has no negative-ghost generators. This is a linear map on that homogeneous component, not an algebra homomorphism on the exterior ghost algebra. It commutes with $d_H$. If $C_p$ is ghost-free, the finite-jet chain rule gives $\mathcal E^p_{\epsilon,\alpha}(sC_p)=(-1)^p\delta_{\epsilon,\alpha}C_p$: the sign moves $s$ past the $p$ coordinate one-forms, and the component rules give the ordinary infinitesimal field variation. Thus in physical degree four $\mathcal E^4(sC_4)=\delta C_4$, and $d_H$-exact terms evaluate to ordinary total derivatives. The degree-five descent is first formed on the formal auxiliary extension used for the degree-six polynomial, before restriction to $M$; there $\mathcal E^5(sI_5)=-\delta I_5$. Consequently $sI_5+d_HI_4^{(1)}=0$ yields the physical convention $\delta I_5=d_H\mathcal E^4(I_4^{(1)})$.

For the units of the full local algebra, fix a reference mass $\mu_*>0$, held fixed under all transformations, and dimensionless coordinates $y^\mu=\mu_*x^\mu$. Set $\widehat A_\mu(y)=\mu_*^{-1}A_\mu(y/\mu_*)$, $\widehat B_\mu(y)=\mu_*^{-1}B_\mu(y/\mu_*)$, $\widehat c(y)=c(y/\mu_*)$, and $\widehat\eta(y)=\eta(y/\mu_*)$; the ghosts have mass dimension zero. Define $\mathcal A_{\mathrm{bg},M}^{g,p}$ using the supplier's finite-jet construction over $\mathbb K=\mathbb C$, with coefficient functions $C^\infty(\mathbb R^4_y,\mathbb C)$, these dimensionless background and ghost jets, and the dimensionless one-forms $dy^\mu$, without matter jets. The BRST component formulas have the same form with hats and $\partial/\partial y^\mu$, and $d_H=dy^\mu D_{y^\mu}$. Rescaling is an invertible identification of the jet algebras and horizontal forms commuting with $s$ and $d_H$; the displayed formulas in $x$ coordinates use this identification. In particular every horizontal form in this algebra is dimensionless. In physical coordinates a homogeneous component monomial $O_\Delta$ of mass dimension $\Delta$ in a $p$-form carries an explicit factor $\mu_*^{p-\Delta}$, times an arbitrary dimensionless coefficient function of $\mu_*x$. Thus the constant four-form is $d^4y=\mu_*^4d^4x$, and a term $O_\Delta d^4x$ has coefficient $\lambda\mu_*^{4-\Delta}$ for dimensionless $\lambda$. This is a unit convention allowing all finite jet polynomials, not a power-counting restriction or an empirical mass input.

The anomaly-matching data include one common Pauli–Villars subtraction prescription for the chiral triangle graphs, with opposite-statistics regulator fields and regulator masses taken to the large-mass limit, together with the consistent effective-action variation convention and compact-support boundary conditions. In the notation of the local-anomaly definition, fix the full complex linear spaces $\mathcal C=\mathcal A_{\mathrm{bg},M}^{0,4}$ and $\mathcal N=\mathcal A_{\mathrm{bg},M}^{1,3}$ in this normalized background algebra. A density $C\in\mathcal C$ defines the dimensionless action change $\Delta\Gamma_C[A,B]=\int_M(C[A,B]-C[0,0])$, with its field-independent vacuum value subtracted: the integrand has compact support for compactly supported backgrounds, even when the coefficient functions do not. The subtraction is BRST invariant and has zero background variation. Evaluation uses compactly supported backgrounds and ghost parameters, so every ghost-number-one boundary primitive and its derivatives have compact support and the integral of its total derivative vanishes. Thus this selected scheme uses the full relative quotient $H^{1,4}(s\mid d_H)=H^{1,4}_{\mathcal C,\mathcal N}(s\mid d_H)$; no background-gauge-invariance condition is imposed on an individual counterterm. In particular, for real dimensionless $\lambda$, the four-form $C_4=\lambda B\wedge K_3(A)$ is admitted, where $K_3(A):=\operatorname{tr}(A\wedge dA+\tfrac23A\wedge A\wedge A)$; its component density has dimension four, so it needs no power of $\mu_*$, and $C_4[0,0]=0$. As an explicit source-backed one-loop input, after the regulator masses are taken to infinity this selected prescription assigns to each positive-chirality species $R_i$ the consistent local anomaly obtained by descent from $\mathcal I_6(R_i,A_i)$ of the preceding cubic-polynomial definition. The fixed linear descent map is normalized by $\mathcal I_6=dI^{(0)}_5$, $sI^{(0)}_5+d_HI^{(1)}_4=0$, and $sI^{(1)}_4+d_HI^{(2)}_3=0$, with $\delta_{\epsilon,\alpha}\Gamma=\sum_{i\in S}\int_M\mathcal E^4_{\epsilon,\alpha}(I^{(1)}_4(R_i,A_i))$. This determinant law is an adopted regulator input in the data, not a locally derived theorem about every regulator. The total polynomial is $\mathcal I_6^{\mathrm{tot}}=\sum_{i\in S}\mathcal I_6(R_i,A_i)$, and its local anomaly class is interpreted using the preceding local ’t Hooft-anomaly definition. No large-transformation test, torsion calculation, mixed gravitational term, dynamical gauge quantization, or continuum-existence result is included.

## Definition references

[[def-aqft-thooft-anomaly|Local anomaly class modulo the selected counterterms]]

[[def-aqft-p-form-global-symmetry|The 0-form global-symmetry and background interface]]

[[def-qftx-local-brst-cohomology|Finite-jet BRST complex and local relative cohomology]]

[[def-qftx-nonabelian-brst-complex|Finite-jet BRST transformations for the product Lie algebra]]

[[lem-qftx-nonabelian-brst-nilpotence|Nilpotence of the product Lie-algebra BRST differential]]

[[def-aqft-cubic-anomaly-polynomial|Anti-Hermitian degree-six polynomial normalization]]

[Bilal, §2.4 Eq. (2.20), §§5.2, 7.1–7.2, 9.4, and 10.4](https://arxiv.org/pdf/0802.0634)

[Alvarez, §§2.1–2.4](https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf)
