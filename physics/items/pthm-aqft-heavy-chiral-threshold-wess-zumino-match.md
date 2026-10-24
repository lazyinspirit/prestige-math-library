---
id: pthm-aqft-heavy-chiral-threshold-wess-zumino-match
kind: physics-theorem
title: Heavy-chiral threshold Wess–Zumino anomaly match
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 7
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: aqft-eft-anomalies
deps:
  - def-aqft-heavy-chiral-u1-threshold-data
  - def-aqft-thooft-anomaly
  - def-aqft-anomaly-matching-data
justified_by: []
dependency_roles:
  def-aqft-heavy-chiral-u1-threshold-data: formulation-prerequisite
  def-aqft-thooft-anomaly: formulation-prerequisite
  def-aqft-anomaly-matching-data: formulation-prerequisite
physical_scope: "Perturbative local anomaly matching for one positive-chirality SU(3)-singlet, U(1)_V-charge-one Weyl field, one neutral negative-chirality mass partner, and a retained charge-one Goldstone phase under small background U(1)_V transformations. It asserts no dynamical-gauge consistency, large-transformation/global anomaly, gravitational term, non-Abelian generalization, or continuum limit."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Adel Bilal, Lectures on Anomalies"
      url: "https://arxiv.org/pdf/0802.0634"
      locator: "Targeted source passages: §2.4, Eq. (2.20), printed p. 7; §5.2.3, Eqs. (5.32)–(5.47), §8.2, Eqs. (8.20)–(8.25), and §9.3, Eqs. (9.16)–(9.30), for the regulated positive-chirality coefficient, Hermitian connection convention, and consistent representative."
    - title: "John Preskill, Gauge Anomalies in an Effective Field Theory"
      url: "https://preskill.caltech.edu/pubs/preskill-1991-effective.pdf"
      locator: "Full 78-page PDF retrieved; read §6.3–6.4, Eqs. (6.34)–(6.45), for the chiral field redefinition, mass-independent anomalous Jacobian, and heavy-threshold Wess–Zumino interpretation."
verification:
  precheck: pending
---
## Statement

On natural-unit Minkowski space $M=\mathbb R^{1,3}$ with $\eta=\operatorname{diag}(-1,1,1,1)$ and orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, take the trivial $H=SU(3)\times U(1)_V$ bundle, zero $SU(3)$ background, and a smooth compactly supported real nondynamical $U(1)_V$ connection $B$ with $G=dB$. Let $\alpha,\theta\in C_c^\infty(M,\mathbb R)$. Use the model's source-signed chirality convention $\gamma_5=i\gamma^0\gamma^1\gamma^2\gamma^3=-i\gamma_0\gamma_1\gamma_2\gamma_3$, with positive chirality meaning eigenvalue $+1$. Use the model's Grassmann-odd coefficient algebra and conjugation for both Weyl fields: one smooth compactly supported positive-chirality Weyl field in $(\mathbf1,+1)$, one smooth compactly supported neutral negative-chirality mass partner, and the charge-one scalar $\Phi=v e^{i\theta}$ in the Yukawa term $-y\Phi\bar\psi_+\psi_-+\mathrm{h.c.}$, where $v>0$, $y\ne0$, and $M_H=|y|v$. Fix the transformations $B\mapsto B+d\alpha$, $\psi_+\mapsto e^{-i\alpha}\psi_+$, $\psi_-\mapsto\psi_-$, and $\theta\mapsto\theta-\alpha$, and use the consistent-anomaly representative with no non-invariant local counterterm. For any fixed integer $n\geq1$, consider a specified $n$-point background-field vertex of $\Gamma_H$ with insertions from components of $B$ and/or $\theta$, and incoming real coordinate covectors $p_j=(p_{j0},p_{j1},p_{j2},p_{j3})\in\mathbb R^{1,3}$ satisfying $\sum_{j=1}^n p_j=0$; set $E=\max_{1\leq j\leq n,\,0\leq\mu\leq3}|p_{j\mu}|$. No on-shell condition is imposed. Require $E/M_H\ll1$ only for the low-energy effective-field-theory interpretation of that vertex. This condition applies to its finite set of external legs, not to the Fourier support of the compactly supported backgrounds, and gives no expansion-remainder bound; the exact local anomaly identity below is independent of it.

Adopt the source-derived consistent-anomaly formula for a positive-chirality Weyl field in representation $R$, written in Bilal's Hermitian convention,

$$\delta_{\epsilon}\Gamma_R=-\frac{1}{24\pi^2}\int_M\operatorname{tr}_R\!\left(\epsilon\,d\left(\mathscr A\wedge d\mathscr A-\frac{i}{2}\mathscr A\wedge\mathscr A\wedge\mathscr A\right)\right).$$

For the selected $U(1)_V$ representation, set $\mathscr A=-B$ and $\epsilon=-\alpha$, so $d-i\mathscr A=d+iB$ and the positive-chirality field transforms as specified above. Since $R=(\mathbf1,+1)$ is one-dimensional, $\operatorname{tr}_R(1)=1$; since $\mathscr A$ is Abelian, its cubic wedge term vanishes. The massless chiral-triangle calculation gives $\mathcal A_{\mathrm{tri},0}(\alpha,B)=+\frac{1}{24\pi^2}\int_M\alpha G\wedge G$. Use $Z_H=\exp(i\Gamma_H)$ and the model data's local field-redefinition relation $\Gamma_H=\mathcal F_M[B+d\theta,M_H]-\Delta_M[B,\theta]$, where $\mathcal F_M$ is invariant and $\Delta_M=\Gamma_R^M[B+d\theta]-\Gamma_R^M[B]$. Thus $\delta_\alpha\Delta_M=-\mathcal A_{\mathrm{tri},0}$ and the effective-action contribution $-\Delta_M$ transfers the positive local variation to the Yukawa-massive sector independently of $M_H$, so its local variation is $\mathcal A_H(\alpha,B)=+\frac{1}{24\pi^2}\int_M\alpha G\wedge G$. If $\Gamma_L$ is any specified remaining-light-sector functional with infinitesimal variation $\mathcal A_L$, and the low-energy theory retains $\theta$ and is required to match this perturbative background anomaly, then

$$\Gamma_{\mathrm{WZ}}[B,\theta]=-\frac{1}{24\pi^2}\int_M\theta G\wedge G$$

satisfies $\delta_\alpha\Gamma_{\mathrm{WZ}}=\mathcal A_H$ and hence $\delta_\alpha(\Gamma_L+\Gamma_{\mathrm{WZ}})=\mathcal A_L+\mathcal A_H=\delta_\alpha(\Gamma_L+\Gamma_H)$. Its coefficient has no $M_H^{-1}$ factor. This is an exact local perturbative anomaly identity in the adopted formal model and fixed representative; the low-energy interpretation is restricted to the specified finite-leg vertex above. It asserts no global determinant phase, dynamical-gauge consistency, gravitational contribution, non-Abelian generalization, quantitative EFT remainder, or continuum interacting QFT.

## Statement references

[[def-aqft-heavy-chiral-u1-threshold-data|Selected U(1)_V-singlet model, charge, mass, regulator, and threshold conventions]]

[[def-aqft-thooft-anomaly|Local perturbative background-anomaly class modulo counterterms]]

[[def-aqft-anomaly-matching-data|Selected H=SU(3)×U(1)_V representation, regulator, and descent data]]

[Bilal, full Lectures on Anomalies PDF](https://arxiv.org/pdf/0802.0634)

[Preskill, full Gauge Anomalies in an Effective Field Theory lecture notes](https://preskill.caltech.edu/pubs/preskill-1991-effective.pdf)

## Facts & Assumptions

**Given:** The selected $U(1)_V$ model and small-transformation convention, the local anomaly-class definition and matching-data interface, Bilal's positive-chirality consistent variation in the explicitly translated Hermitian convention, Preskill's source-backed mass-independence argument, and the stated low-energy matching condition.

[F1] [[def-aqft-heavy-chiral-u1-threshold-data]]: $B\mapsto B+d\alpha$, $\delta_\alpha\theta=-\alpha$, $G=dB$ is invariant, and $M_H=|y|v>0$; the model uses $Z_H=\exp(i\Gamma_H)$, $B_\theta=B+d\theta$, and $\Gamma_H=\mathcal F_M[B_\theta,M_H]-\Delta_M$, with $\mathcal F_M$ invariant. The measure multiplier is $J_M=\exp(-i\Delta_M)$, while its effective-action contribution is $-\Delta_M$.

[F2] [[def-aqft-thooft-anomaly]]: the local perturbative background anomaly is a class in $H^{1,4}_{\mathcal C,\mathcal N}(s\mid d_H)$ modulo the selected model's admissible local four-dimensional counterterms and boundary convention; the definition distinguishes a nondynamical global background from a dynamical gauge redundancy.

[F3] [[def-aqft-anomaly-matching-data]]: the selected group is $H=SU(3)\times U(1)_V$, and the one-loop local anomaly for the finite positive-chirality Weyl spectrum is an adopted descent input from the normalized degree-six polynomial. Its component BRST rules are $sB_\mu=\partial_\mu\eta$ and $s\psi_+=-i\eta\psi_+$ in the charge-one sector. With $dx$ factors left, $s(dx^\mu a)=-dx^\mu sa$, so the whole horizontal one-form instead satisfies $sB=-d_H\eta$. The supplier defines a linear one-ghost evaluation $E^p_{\epsilon,\alpha}$ by replacing the single rightmost ghost jet with the corresponding ordinary parameter jet. It is not a homomorphism of the Grassmann algebra. For a ghost-free horizontal $p$-form $C$, $E^p(sC)=(-1)^p\delta C$; thus the four-form anomaly is evaluated with a plus sign. The descent law remains an adopted source-backed input, not a theorem about every regulator.

[A1] [Bilal's consistent positive-chirality anomaly formula](https://arxiv.org/pdf/0802.0634): use $\delta_\epsilon\Gamma_R=-\frac1{24\pi^2}\int\operatorname{tr}_R(\epsilon\,d(\mathscr A\wedge d\mathscr A-\frac i2\mathscr A\wedge\mathscr A\wedge\mathscr A))$ in the displayed Hermitian convention, without a non-invariant local counterterm. The model's explicit map is $\mathscr A=-B$, $\epsilon=-\alpha$.

[A2] [Preskill's heavy-chiral threshold argument](https://preskill.caltech.edu/pubs/preskill-1991-effective.pdf): with the finite difference $\Delta_E=\Gamma_R^E[B_\theta]-\Gamma_R^E[B]$, Eqs. (6.34), (6.43)–(6.45) give the Euclidean measure multiplier $J_E=\exp(\Delta_E)$ and its effective-action contribution $-\Delta_E$. With $\Gamma_E=-i\Gamma_M$ and $\Delta_E=-i\Delta_M$, this gives the Minkowski relation in [F1]. Only this local perturbative threshold input and mass independence are adopted, not a global determinant phase, full determinant construction or remainder estimate.

[A3] For a specified finite-$n$ background-field vertex with $E/M_H\ll1$, the low-energy description retains $\theta$ and is required to match the formal heavy-sector contribution's local background-$U(1)_V$ variation in the fixed representative. This is a matching condition, not a claim of a nonperturbative continuum construction or a uniform expansion-remainder bound.

## Proof

**Given:** [F1], [F2], [F3], [A1], [A2], and [A3].

1.1 From [F1], $G'=d(B+d\alpha)=G+d^2\alpha=G$, while $\delta_\alpha\theta=-\alpha$. Thus $G\wedge G$ is invariant under the specified small background transformations. [given, F1, algebra]

1.2 By [F3], the linear map $\mathcal E^4_{0,\alpha}$ sets the $SU(3)$ ghost jets to zero and replaces each $U(1)_V$ ghost jet $\eta_I$ by $\partial_I\alpha$; for every ghost-free background four-form $C_4$, $\mathcal E^4_{0,\alpha}(sC_4)=\delta_{0,\alpha}C_4$, so its degree-four sign is positive. The model's $\gamma_5=i\gamma^0\gamma^1\gamma^2\gamma^3$ is Bilal's mostly-plus positive-chirality matrix; in particular $\gamma_0=-\gamma^0$, so this equals his $-i\gamma_0\gamma_1\gamma_2\gamma_3$. In Bilal's Hermitian convention [A1], $\mathscr A=-B$ and $\epsilon=-\alpha$, so $d-i\mathscr A=d+iB$ and the transformations agree with [F1]. For the positive-chirality $SU(3)$ singlet of $U(1)_V$ charge one in [F3], $\operatorname{tr}_R(1)=1$ and $d(\mathscr A\wedge d\mathscr A)=d(B\wedge G)=G\wedge G$; the Abelian cubic term vanishes. Inserting these values into [A1] gives $-\frac{1}{24\pi^2}\int_M(-\alpha)G\wedge G=+\frac{1}{24\pi^2}\int_M\alpha G\wedge G=\mathcal A_{\mathrm{tri},0}(\alpha,B)$ for the massless chiral triangle. To evaluate the finite difference, integrate this infinitesimal identity along $B_t=B+t\,d\theta$. Since $dB_t=G$, it gives $\Delta_M=\int_0^1\mathcal A_{\mathrm{tri},0}(\theta,B_t)\,dt=\frac1{24\pi^2}\int_M\theta G\wedge G$. Under the simultaneous transformation $B+d\theta$ is invariant, so $\delta_\alpha\Delta_M=-\frac1{24\pi^2}\int_M\alpha G\wedge G=-\mathcal A_{\mathrm{tri},0}$. The adopted relation [F1], [A2] has invariant $\mathcal F_M[B_\theta,M_H]$ and effective-action term $-\Delta_M=(1/i)\log J_M$; its variation is therefore $+\mathcal A_{\mathrm{tri},0}$, independent of $M_H$. The neutral partner has zero $U(1)_V$ charge. Hence $\delta_\alpha\Gamma_H=+\frac{1}{24\pi^2}\int_M\alpha G\wedge G=\mathcal A_H(\alpha,B)$. [given, F1, F3, A1, A2, algebra]

2.1 Vary the displayed local functional: $\delta_\alpha\Gamma_{\mathrm{WZ}}=-\frac{1}{24\pi^2}\int_M((\delta_\alpha\theta)G\wedge G+\theta\,\delta_\alpha(G\wedge G))=+\frac{1}{24\pi^2}\int_M\alpha G\wedge G=\mathcal A_H(\alpha,B)$ by step 1.1 and step 1.2. [F1, A1, step 1.1, step 1.2, algebra]

3.1 Linearity of infinitesimal variation gives $\delta_\alpha(\Gamma_L+\Gamma_{\mathrm{WZ}})=\mathcal A_L+\mathcal A_H=\delta_\alpha(\Gamma_L+\Gamma_H)$ by step 1.2 and step 2.1. The equality is of the selected local representatives and therefore also determines their classes modulo the admissible counterterms in [F2]; it concerns only the connected, infinitesimal background transformations. [F2, A3, step 1.2, step 2.1, algebra]

4.1 The coefficient in $\Gamma_{\mathrm{WZ}}$ is the fixed dimensionless number $-1/(24\pi^2)$ and contains no factor of $M_H^{-1}$; the low-energy interpretation of the specified vertex is restricted by $E/M_H\ll1$. Thus the anomaly-carrying term is unsuppressed in the heavy-mass coefficient, without any claim of convergence or a quantitative remainder bound. [A1, A2, A3, step 2.1, algebra] ∎


## Remarks

The retained $\theta$ is the smooth transforming order-parameter phase specified in the model. The functional depends on $\theta$ as well as $B$, so $\Gamma_{\mathrm{WZ}}[B,\theta]$ is not a background-only counterterm in the quotient of [F2]. Its variation reproduces the heavy-sector anomaly; this does not show that the background anomaly class vanishes.
