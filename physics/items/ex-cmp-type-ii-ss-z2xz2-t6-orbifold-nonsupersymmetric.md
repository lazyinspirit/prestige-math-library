---
id: ex-cmp-type-ii-ss-z2xz2-t6-orbifold-nonsupersymmetric
kind: example
title: A four-dimensional nonsupersymmetric Type II Scherk–Schwarz orbifold
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
physical_scope: "A source-reported four-dimensional Type II closed-string construction using a symmetric Z2×Z2 orbifold of (T2)^3, a specified free-fermionic basis/GSO choice, shifted Gamma(2,2) sectors, and a freely acting Scherk–Schwarz Z2 deformation. Its modular invariance, full spectrum, tachyon exclusion, and one-loop statements remain attributed to the source; no full stabilized vacuum is claimed."
deps:
  - def-cmp-geometric-orbifold-compactification-data
  - def-supergravity-conventions-and-normalizations
dependency_roles:
  def-cmp-geometric-orbifold-compactification-data: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ignatios Antoniadis, Alonzo R. Diaz Avalos, and Alon E. Faraggi, A Perturbatively Stable Non-Supersymmetric String Model with AdS Vacuum, arXiv:2504.19364v2"
      url: https://arxiv.org/pdf/2504.19364v2
      locator: "§2.1 construction, GSO matrix, shifted lattices, and Scherk–Schwarz phase, PDF pp. 3–6; Appendix A, PDF pp. 24–25, Jacobi theta-function definition; §2.3 gravitino mass shifts, pp. 6–9; §2.4 tachyon analysis, pp. 9–10; §2.5 torus-moduli potential, pp. 10–12; conclusions, pp. 24–25."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

The earlier A-page item `def-cmp-geometric-orbifold-compactification-data` defines the relevant orbifold data as a complete finite-group action on full worldsheet CFT data, with a twisted sector and centralizer action for every group element. Its genus-zero local and genus-one trace conditions require separate level-matching, phase-lift, twisted-OPE and modular-covariance checks; higher-genus sewing is additional data for a complete string background. It does not assert that every finite-group action has such a completion.

Antoniadis, Diaz Avalos, and Faraggi report a four-dimensional Type II closed-string construction on a symmetric $\mathbb Z_2\times\mathbb Z_2$ orbifold of $T^6=(T^2)^3$, with complex moduli $T^{(i)},U^{(i)}$ for $i=1,2,3$, a source-reported choice of sector-projection phases, and an additional $\mathbb Z_2$ modification of the genus-one phase sum specified below. The following basis, projection matrix, shifted lattices, and phase are the source data. All binary labels and additions below are in $\mathbb Z_2$.

Here a free-fermionic basis is an ordered list of boundary-condition vectors for the worldsheet fermions. In each vector, the displayed fields are periodic and every other fermion in the basis system is antiperiodic; sums of basis vectors are componentwise sums of these boundary-condition labels in $\mathbb Z_2$. The vertical bar separates left-moving fields from right-moving fields, and a bar on a field symbol marks a right mover. The index $\mu=0,1,2,3$ labels four-dimensional fermions, and $IJ$ denotes an internal index pair. As in the source, $\chi^{IJ}=\chi^I+i\chi^J$; $y^{IJ}$ and $w^{IJ}$ denote the complexified fermions for internal bosons $X^{IJ}=X^I+iX^J$, with $\partial X^I\sim y^I\omega^I$. The displayed $w^I$ notation is the source's $\omega^I$ notation.

The ordered free-fermionic basis is $(1,S,\bar S,b_1,b_2,T_1,T_2)$, where $\mu=0,1,2,3$ labels four-dimensional spacetime fermions and $IJ$ denotes the indicated internal pair:
$$ \begin{aligned} 1&=\{\psi^\mu,\chi^{1,\ldots,6},y^{1,\ldots,6},w^{1,\ldots,6}\mid\bar\psi^\mu,\bar\chi^{1,\ldots,6},\bar y^{1,\ldots,6},\bar w^{1,\ldots,6}\},\\ S&=\{\psi^\mu,\chi^{1,\ldots,6}\},\qquad \bar S=\{\mid\bar\psi^\mu,\bar\chi^{1,\ldots,6}\},\\ b_1&=\{\psi^\mu,\chi^{12},y^{34},y^{56}\mid\bar\psi^\mu,\bar\chi^{12},\bar y^{34},\bar y^{56}\},\\ b_2&=\{\psi^\mu,\chi^{34},y^{12},y^{56}\mid\bar\psi^\mu,\bar\chi^{34},\bar y^{12},\bar y^{56}\},\\ T_1&=\{y^{12},w^{12}\mid\bar y^{12},\bar w^{12}\},\qquad T_2=\{y^{34},w^{34}\mid\bar y^{34},\bar w^{34}\}. \end{aligned} $$
The source also denotes the derived sector $T_3=1+S+\bar S+T_1+T_2$; it is not an eighth independent basis vector.

A Gliozzi–Scherk–Olive (GSO) phase matrix is, here, the ordered array of signs used for the source's projections on free-fermion sectors: $C[v_i,v_j]\in\{+1,-1\}$ is the phase in row $v_i$ and column $v_j$. In the row/column order $(1,S,\bar S,b_1,b_2,T_1,T_2)$, the complete source matrix is
$$ C[v_i,v_j]=\begin{pmatrix} 1&1&1&1&1&1&1\\ 1&-1&1&-1&-1&-1&-1\\ 1&1&-1&-1&-1&-1&-1\\ 1&1&1&1&1&1&1\\ 1&1&1&1&1&1&1\\ 1&-1&-1&1&1&1&1\\ 1&-1&-1&1&1&1&1 \end{pmatrix}. $$
The item records this matrix as source data; it does not independently prove that the full model's partition function is modular invariant or that its twisted OPE data sew.

For each torus define $T^{(i)}=T_1^{(i)}+iT_2^{(i)}$ and $U^{(i)}=U_1^{(i)}+iU_2^{(i)}$, with $T_2^{(i)},U_2^{(i)}>0$. The labels $h_i,g_i\in\mathbb Z_2$ are the orbifold twists and $H_i,G_i\in\mathbb Z_2$ are the shifted-lattice labels. Let $\tau\in\mathbb H:=\{z\in\mathbb C:\operatorname{Im}z>0\}$ be the worldsheet-torus modulus, and put $q=e^{2\pi i\tau}$ and $\bar q=e^{-2\pi i\bar\tau}$. The left-moving spin-structure labels are $a,b\in\mathbb Z_2$ and the right-moving labels are $k,l\in\mathbb Z_2$, each pair specifying boundary conditions around the two non-contractible torus cycles. For $\alpha,\beta\in\mathbb Z_2$, represented by $0$ or $1$, write
$$\vartheta\begin{bmatrix}\alpha\\\beta\end{bmatrix}:=\vartheta\begin{bmatrix}\alpha\\\beta\end{bmatrix}(0|\tau),\qquad \vartheta\begin{bmatrix}\alpha\\\beta\end{bmatrix}(z|\tau)=\sum_{r\in\mathbb Z}q^{\frac12(r-\alpha/2)^2}\exp\!\left(2\pi i(z-\beta/2)(r-\alpha/2)\right).$$
Thus every theta symbol below with omitted arguments means the theta constant at $z=0$ and this same $\tau$; all additions in its characteristics are reduced in $\mathbb Z_2$.
For lattice summation indices $m_1,m_2,n_1,n_2\in\mathbb Z$, set
$$ \mathbf m=\begin{pmatrix}m_1\\m_2\end{pmatrix},\qquad \mathbf n=\begin{pmatrix}n_1\\n_2+H_i/2\end{pmatrix},\qquad \mathsf G^{(i)}=\frac{T_2^{(i)}}{U_2^{(i)}}\begin{pmatrix}1&U_1^{(i)}\\U_1^{(i)}&|U^{(i)}|^2\end{pmatrix},\qquad \mathsf B^{(i)}=T_1^{(i)}\begin{pmatrix}0&-1\\1&0\end{pmatrix}. $$
The source-normalized left/right lattice momenta and their norms are
$$ p_L=\frac{(\mathsf G^{(i)})^{-1}}{\sqrt2}(-\mathbf m+\mathsf B^{(i)}\mathbf n+\mathsf G^{(i)}\mathbf n),\qquad p_R=\frac{(\mathsf G^{(i)})^{-1}}{\sqrt2}(-\mathbf m+\mathsf B^{(i)}\mathbf n-\mathsf G^{(i)}\mathbf n), \quad p_{L,R}^2=p_{L,R}^{I}\mathsf G^{(i)}_{IJ}p_{L,R}^{J}. $$
They are in the dimensionless normalization used in the source, so their squared values enter the exponents of $q$ and $\bar q$ below; no conversion to dimensionful target-space momenta is made here. The shifted untwisted lattice factor is
$$ \Gamma^{(i)}_{2,2}\begin{bmatrix}H_i\\G_i\end{bmatrix}(T^{(i)},U^{(i)}) =\sum_{m_1,m_2,n_1,n_2\in\mathbb Z}(-1)^{G_i m_2}q^{p_L^2/2}\bar q^{p_R^2/2},\qquad q=e^{2\pi i\tau}. $$
The full lattice factor with the paired orbifold twist $(h_j,g_j)$ is source-defined by
$$ \Gamma^{(i)}_{2,2}\begin{bmatrix}H_i\\G_i\end{bmatrix}\!\begin{bmatrix}h_j\\g_j\end{bmatrix} =\begin{cases} \Gamma^{(i)}_{2,2}\begin{bmatrix}H_i\\G_i\end{bmatrix},&h_j=g_j=0,\\[2mm] \frac12\displaystyle\sum_{\zeta_i,\delta_i=0}^1(-1)^{\zeta_iG_i+\delta_iH_i+H_iG_i} \left|\vartheta\begin{bmatrix}\zeta_i\\\delta_i\end{bmatrix} \vartheta\begin{bmatrix}\zeta_i+h_j\\\delta_i+g_j\end{bmatrix}\right|^2,&\text{otherwise}. \end{cases} $$
In the total partition function the paired twists are $(h_2,g_2)$ for $i=1$, $(h_1,g_1)$ for $i=2$, and $(h_1+h_2,g_1+g_2)$ for $i=3$. Define the base spin-structure phase $P_0:=(-1)^{a+b+k+l}$ and the Scherk–Schwarz insertion
$$\Xi_{\mathrm{SS}}:=(-1)^{a(G_1+G_3)+b(H_1+H_3)+H_1G_1+H_3G_3+kG_2+lH_2+H_2G_2}.$$
The source's phase replacement is $P_0\mapsto P_0\Xi_{\mathrm{SS}}$, so the full phase is
$$(-1)^{a+b+k+l+a(G_1+G_3)+b(H_1+H_3)+H_1G_1+H_3G_3+kG_2+lH_2+H_2G_2}.$$

Use $\hbar=c=1$, $\alpha'>0$, $\ell_s=\sqrt{\alpha'}$ and $M_s=\ell_s^{-1}$ as in `def-supergravity-conventions-and-normalizations`. Here $\mathsf G$ and $\mathsf B$ are dimensionless lattice data: the internal physical metric in angular coordinates is $\alpha'\mathsf G$. Thus $T_2,U_2$ and the displayed $p_{L,R}$ are dimensionless. To remove the ambiguity of “string units”, write $\widehat m^2:=\alpha'M_{\mathrm{phys},s}^2$, where $M_{\mathrm{phys},s}$ is the four-dimensional string-frame pole mass. In the NS chiral sectors relevant to the source's tachyon test, set
$$\mathcal L_L=\tfrac12p_L^2+N_L-\tfrac12,\qquad \mathcal L_R=\tfrac12p_R^2+N_R-\tfrac12.$$
The source denotes these chiral levels $M_L^2,M_R^2$ in equations (2.21)–(2.22). A physical level-matched NS–NS state obeys $\widehat m^2=4\mathcal L_L=4\mathcal L_R$ in the adopted $\alpha'$ restoration, since its noncompact chiral momentum contribution is $-\alpha'M_{\mathrm{phys},s}^2/4$. The Ramond intercept is zero rather than $1/2$ for a Ramond chiral factor. This normalization also gives $\widehat m^2=n^2/\mathsf G_{11}$ for a pure circle momentum mode: the displayed lattice normalization has $p_L^2=p_R^2=n^2/(2\mathsf G_{11})$, so each chiral level shift is $n^2/(4\mathsf G_{11})$. No chiral level is silently equated to the full pole mass.

For the tree-level pole-mass interpretation, fix four-dimensional Minkowski space $M_4=\mathbb R^4$ with global coordinates $x^\mu$ of length dimension, $\mu=0,1,2,3$, and string-frame metric $g_{4,s}=\eta=\operatorname{diag}(-1,1,1,1)$. Use the trivial spin structure and its complex Dirac bundle $S_4=M_4\times\Delta_4$, $\Delta_4=\mathbb C^4$, with constant Clifford matrices $\gamma^\mu\in\operatorname{End}_{\mathbb C}(\Delta_4)$ satisfying $\gamma^\mu\gamma^\nu+\gamma^\nu\gamma^\mu=2\eta^{\mu\nu}I$. A vector-spinor is a smooth section $\psi\in C^\infty(M_4,T^*M_4\otimes S_4)$, written $\psi=dx^\mu\otimes\psi_\mu(x)$ in this parallel trivialization. Define $\mathcal D_4\psi_\mu=\gamma^\nu\partial_\nu\psi_\mu$ and $(\Box_{4,s}\psi)_\mu=\eta^{\nu\rho}\partial_\nu\partial_\rho\psi_\mu$ componentwise. For a positive constant pole mass $m=M_{\mathrm{phys},s}$, use the free linear spin-$3/2$ description $(\mathcal D_4-m)\psi_\mu=0$, $\partial^\mu\psi_\mu=0$, and $\gamma^\mu\psi_\mu=0$, with indices raised using $\eta$. A complex Fourier mode is $\psi_\mu(x)=u_\mu e^{ip_\nu x^\nu}$, where $p\in(\mathbb R^4)^*$ is a constant momentum covector of inverse-length dimension and $u_\mu\in\Delta_4$ is its constant polarization; its constraints are $p^\mu u_\mu=\gamma^\mu u_\mu=0$ and $(i\gamma^\nu p_\nu-m)u_\mu=0$. Composing the kinetic equation with $\mathcal D_4+m$ gives $(\Box_{4,s}-m^2)\psi_\mu=0$, so a nonzero mode has $\eta^{\nu\rho}p_\nu p_\rho=-m^2$. Here “gravitino” denotes the fermionic mode with this linear description whose massless supersymmetric parent is the gauge field of local supersymmetry. This is a flat-background tree-level description of the reported pole masses, not an interacting field equation on the putative one-loop vacuum. The symbols $S,\bar S$ label the source's left and right sectors, not two new scalar fields. Its equation (2.14) reports the two would-be massless gravitinos' dimensionless squared pole-mass shifts
$$ \widehat m_S^2=\frac1{T_2^{(1)}U_2^{(1)}}+\frac1{T_2^{(3)}U_2^{(3)}},\qquad \widehat m_{\bar S}^2=\frac1{T_2^{(2)}U_2^{(2)}}. $$
Thus $M_{S,\mathrm{phys},s}^2=M_s^2\widehat m_S^2$ and similarly for $\bar S$; writing $\alpha'=1$ gives precisely the paper's numerical formulas. A tree-level tachyon means a physical, level-matched, projection-surviving state with $M_{\mathrm{phys},s}^2<0$ in the genus-zero spectrum. It is not a generic negative term before level matching and GSO/orbifold projections, nor a negative one-loop Hessian eigenvalue. The source reports absence of such states throughout the allowed torus moduli after its sector analysis; this item does not rederive that analysis.

At genus one the source reports a minimum of the twelve real $T,U$ torus-moduli directions at $T^{(i)}=U^{(i)}=1+i$, with positive Hessian in those directions and negative vacuum-energy density $\Lambda_s$ in the four-dimensional string-frame effective action term $-\int\sqrt{-g_{4,s}}\,\Lambda_s$. To state its separate dilaton caveat, let $v_6=V_{6,s}/(2\pi\ell_s)^6$ and define the four-dimensional dilaton by $e^{-2\phi_4}=v_6e^{-2\Phi_{10}}$, up to a fixed reference-volume constant absorbed into the gravitational coefficient. The local four-dimensional coupling variable is $g_4=e^{\phi_4}$, while the ten-dimensional string coupling at a constant background is $g_{\mathrm{str}}=e^{\Phi_{10}}$. At fixed torus volume their weak-coupling limits agree. The four-dimensional Einstein metric is
$$g_{4,E}=e^{-2\phi_4}g_{4,s},\qquad V_E(\phi_4)=e^{4\phi_4}\Lambda_s.$$
This is the four-dimensional Weyl rescaling, distinct from the ten-dimensional relation $G_{10,E}=e^{-\Phi_{10}/2}G_{10,s}$. At fixed torus moduli, $\Lambda_s<0$ gives no finite dilaton stationary point and $V_E\to0$ from below as $g_4\to0$. “Runaway” here means the absence of a stationary dilaton in this truncated potential; no dynamical rolling direction toward weak coupling is inferred from that limit. The source proposes additional flux/orientifold mechanisms as possibilities outside this construction. The negative torus-moduli energy therefore does not itself establish a stabilized AdS vacuum.
## Example references

[[def-cmp-geometric-orbifold-compactification-data]]

[[def-supergravity-conventions-and-normalizations]]

## Facts & Assumptions

**Given:** The source-reported data in the Example and the conditional orbifold-data interface [F1]. Statements attributed to the paper remain source reports; they are not presented as independent proofs of modular invariance, sewing, or the complete spectrum.

[F1] [[def-cmp-geometric-orbifold-compactification-data]]: a geometric finite-group orbifold datum includes the complete worldsheet group action, twisted sectors, centralizer projections, and any discrete-torsion phases. The definition is a conditional data interface and does not prove that every finite quotient gives a consistent CFT.

[F2] [[def-supergravity-conventions-and-normalizations]] supplies $\hbar=c=1$, $\alpha'>0$, $\ell_s=\sqrt{\alpha'}$, the string-coupling convention, and the distinction between ten-dimensional string and Einstein metrics. The four-dimensional dilaton and Weyl rescaling used here are defined explicitly in the Example; the mass units are fixed by the displayed chiral levels.

[A1] Adopt the basis vectors, GSO matrix, shifted $\Gamma_{2,2}$ factors, and Scherk–Schwarz phase exactly as data reported in Antoniadis–Diaz Avalos–Faraggi, arXiv:2504.19364v2, §2.1, PDF pp. 3–6. No independent modular transformation or sewing proof is asserted here.

[A2] Adopt as source reports the two gravitino mass shifts, the tree-level no-tachyon conclusion, and the genus-one torus-moduli result with its negative energy, unbounded directions, and dilaton runaway. The Appendix C spectrum table and the full sector-by-sector tachyon proof have not been independently reconstructed in this batch.

[A3] The paper's results are at tree level for the spectrum/tachyon statement and at genus one for the stated moduli potential. No higher-genus, nonperturbative, backreaction, flux, orientifold, localized-charge cancellation, or completed dilaton-stabilization result is adopted.

## Proof

**Given:** [F1]–[F2], [A1]–[A3], the source's moduli domain $T_2^{(i)},U_2^{(i)}>0$, and the exact locators in the source reference.

1.1 The ordered basis has seven entries, and the displayed matrix has the same row and column order; the shifted lattice and phase definitions use the source's distinct labels $h_i,g_i$ for orbifold twists and $H_i,G_i$ for Scherk–Schwarz shifts. These are the exact source data adopted in [A1]. This records the source-specific basis, projections, lattices and phase only. These data do not establish an instance of [F1]: its full-local fields, all twisted-sector OPE maps and compatible centralizer transports have not been supplied here. The source reports and the conditional deductions below do not assume that missing completion. [F1, A1, given]

1.2 At finite allowed moduli, each $T_2^{(i)}U_2^{(i)}$ is a product of two positive finite real numbers. Its reciprocal is positive, so both displayed sums $\widehat m_S^2$ and $\widehat m_{\bar S}^2$ are strictly positive. In the source's stated decompactification limits $T_2^{(1)},T_2^{(3)}\to\infty$ the terms in $\widehat m_S^2$ tend to zero with fixed positive $U_2^{(1)},U_2^{(3)}$, and $T_2^{(2)}\to\infty$ makes $\widehat m_{\bar S}^2\to0$. For the defined flat vector-spinor, commuting partial derivatives and the Clifford relations give $\mathcal D_4^{\,2}=\frac12\{\gamma^\nu,\gamma^\rho\}\partial_\nu\partial_\rho=\Box_{4,s}$ on each covector component. Thus $(\mathcal D_4+m)(\mathcal D_4-m)=\Box_{4,s}-m^2$, and substituting $u_\mu e^{ip\cdot x}$ gives the stated mass shell. These are local consistency checks of the linear description. Positivity and the limits follow from the reported formulas; the formulas themselves are not independently derived. [A2, given, algebra]

1.3 The no-tree-tachyon assertion is included only as the result that the named paper reports from its sector analysis. The local proof here neither reconstructs the Appendix C sectors nor derives the exclusion over the full moduli space, so the claim remains explicitly source-attributed. [A2, given]

2.1 From $g_{4,s}=e^{2\phi_4}g_{4,E}$ in four dimensions, $\sqrt{-g_{4,s}}=e^{4\phi_4}\sqrt{-g_{4,E}}$, so the genus-one string-frame term gives $V_E=e^{4\phi_4}\Lambda_s$. Holding the torus moduli fixed, $dV_E/d\phi_4=4e^{4\phi_4}\Lambda_s\ne0$ for $\Lambda_s<0$, while its weak-coupling limit is zero from below. The one-loop statement concerns the twelve real torus-moduli directions and is separate from the tree-level tachyon claim. The negative energy, unbounded directions, and nonstationary Einstein-frame dilaton potential defined above and recorded in [A2] prevent this item from promoting the torus-moduli minimum to a fully stabilized vacuum. [F2, A2, A3, step 1.3, algebra] ∎

## Remarks

The paper is the sole primary source for this specific GSO choice, shifted lattices, tree spectrum, and genus-one calculation. Its relevant full text and exact equations were inspected. Ginsparg's orbifold discussion is used only for the general conditional vocabulary in [F1], not to prove the model-specific partition function. The source's own title uses “AdS vacuum,” but its conclusion states that the negative one-loop energy does not by itself imply an AdS vacuum because the Einstein-frame dilaton runs away; this carrier preserves that caveat.
