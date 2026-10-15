---
id: thm-qft-example-massive-tree-annihilation
kind: theorem
title: Full-mass unpolarized formal pair-production coefficient
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - def-qft-example-data
  - def-qft-example-two-body-phase-space-data
  - lem-qft-example-spin-trace-completeness
  - lem-qft-example-two-body-phase-space
  - lem-qft-qed-formal-matrix-ward
dependency_roles:
  def-qft-example-data: mathematical-premise
  def-qft-example-two-body-phase-space-data: mathematical-premise
  lem-qft-example-spin-trace-completeness: mathematical-premise
  lem-qft-example-two-body-phase-space: mathematical-premise
  lem-qft-qed-formal-matrix-ward: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, section 6.6
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter; formal QED vertices, electron–positron annihilation, and adding a muon species.
    - title: Mark Srednicki, Quantum Field Theory, author-posted prepublication draft, sections 46–48 and 59
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted textbook draft; printed pp. 292–302 for spin sums and traces, pp. 351–354 for spinor-QED tree amplitudes and Ward-current qualifications.
---

## Statement

Let $m,M\geq0$ be the electron and muon rest energies in joules. Use the positive shells of [[def-qft-example-two-body-phase-space-data]]: $p_i=(E_i,\mathbf p_i)$ with $E_i=\sqrt{|\mathbf p_i|^2+m^2}>0$ for $i=1,2$, and $k_i=(\varepsilon_i,\mathbf k_i)$ with $\varepsilon_i=\sqrt{|\mathbf k_i|^2+M^2}>0$ for $i=1,2$. With $p_1+p_2=k_1+k_2=P$, set $s=h(P,P)>4\max(m^2,M^2)$, using the algebraic metric $h=(+,-,-,-)$ of [[def-qft-example-data]]. Since $P^0=E_1+E_2>0$ and $h(P,P)=s>0$, $P$ is future timelike. A center-of-momentum map is a proper orthochronous linear $h$-Lorentz map $\Lambda$ with $\Lambda^Th\Lambda=h$, $\det\Lambda=1$, $\Lambda(C_+)=C_+$ for $C_+=\{(E,\mathbf q)\in\mathbb R\times\mathbb R^3:E\geq|\mathbf q|\}$, and $\Lambda P=(\sqrt{s},\mathbf0)$. Write $\mathbf p_1^*$ and $\mathbf k_1^*$ for the spatial components of $\Lambda p_1$ and $\Lambda k_1$, respectively. The strict threshold makes both nonzero; define $\theta\in[0,\pi]$ by $\cos\theta=(\mathbf p_1^*\cdot_{\mathbb R^3}\mathbf k_1^*)/(|\mathbf p_1^*||\mathbf k_1^*|)$. This angle is independent of the chosen center-of-momentum map because any two choices differ by a spatial rotation. For $a,b\in\{0,1,2,3\}$, set $h_{ab}=h^{ab}$ equal to the diagonal entries of $h=\operatorname{diag}(1,-1,-1,-1)$, sum repeated Lorentz indices over this range, and define $\gamma_a:=\sum_{b=0}^3h_{ab}\gamma^b$ and $P_a:=\sum_{b=0}^3h_{ab}P^b$. Use the dimensionless coupling $g=\sqrt{4\pi\alpha}$ from [[def-qft-example-data]]. Adopt only the formal single-photon tree coefficient
$$\mathcal M=\frac{g^2}{s} [\bar v(p_2)\gamma^a u(p_1)] [\bar u(k_1)\gamma_a v(k_2)],$$
with equal weight $1/4$ on the four initial spin-label pairs and a sum over final spin labels. The outgoing labels denote the distinct $\mu^-$ and $\mu^+$ species, so $S_f=1$ in the coefficient map. With the spinor normalization of [[lem-qft-example-spin-trace-completeness]], $\mathcal M$ is dimensionless. No interacting continuum $S$-matrix or exact QED cross section is assumed.

In the auxiliary finite-matrix setting of [L1], assume $d\geq1$, an invertible $K_0$, and the stated covariance of $K_0$ and $V$ under the finite-graph phase action; then the coefficientwise inverse and covariance identities in [L1] hold. Separately stipulate the displayed formal pair-production amplitude above. Its on-shell spin average is
$$\overline{|\mathcal M|^2} =g^4[3-\beta_e^2-\beta_\mu^2 +\beta_e^2\beta_\mu^2\cos^2\theta], \qquad \beta_e=\sqrt{1-\frac{4m^2}{s}}, \quad \beta_\mu=\sqrt{1-\frac{4M^2}{s}},$$
where the angle $\theta$ is defined above. The resulting formal differential and total coefficients are
$$\frac{d\sigma_{\mathrm{coeff}}}{d\Omega} =\frac{\alpha^2(\hbar c)^2\beta_\mu}{4s\beta_e} [3-\beta_e^2-\beta_\mu^2+\beta_e^2\beta_\mu^2\cos^2\theta],$$
$$\sigma_{\mathrm{coeff}} =\frac{\pi\alpha^2(\hbar c)^2}{s}\frac{\beta_\mu}{\beta_e} [3-\beta_e^2-\beta_\mu^2+\tfrac13\beta_e^2\beta_\mu^2].$$
If $\delta=4m^2/s\leq1/2$, the full differential coefficient divided by its $m=0$ value is between $1$ and $1+4\delta$. This bound concerns only omission of the incoming electron mass in this formal tree coefficient, not loop, soft-radiation, threshold, or empirical errors.

The same on-shell equations give $P_a\bar v(p_2)\gamma^a u(p_1)=0$ and $P_a\bar u(k_1)\gamma^a v(k_2)=0$. Thus a propagator term proportional to $P_aP_b$ does not change this specified tree coefficient. These current cancellations are proved locally for all $m,M\geq0$; the actual QFT-MG03 matrix-Ward carrier supplies only its finite-matrix inverse and covariance interface, not the broader tree-current clauses in the historical Q7 research module.

## Facts & Assumptions

**Given:** Assume Countable Choice as inherited from [[lem-qft-example-spin-trace-completeness]] and [[lem-qft-example-two-body-phase-space]]. Use their spinor normalization, gamma trace conventions, positive-shell conventions, flux, and coefficient map, with $p_i$ and $k_i$ satisfying the shell conditions and $\theta$ defined in the Statement. Let $s>4\max(m^2,M^2)$.

[F1] [[def-qft-example-data]]: $h=-\eta$, energy-vector components and rest energies are in joules, and $g^2=4\pi\alpha$ with dimensionless $\alpha$.

[F2] [[lem-qft-example-spin-trace-completeness]]: $\sum_su_s\bar u_s=\not p+m$, $\sum_sv_s\bar v_s=\not p-m$, the corresponding on-shell Dirac equations, and the two- and four-gamma trace formulas.

[F3] [[lem-qft-example-two-body-phase-space]]: for finite incoming and outgoing label sets, normalized initial weights, Borel amplitudes, and $F>0$, the cross-section map is $d\sigma_{\mathrm{coeff}}=(\hbar c)^2\overline{|\mathcal A|^2}d\Phi_2/(FS_f)$; $d\Phi_2/d\Omega=k_*/(16\pi^2\sqrt{s})$. For equal incoming rest energy $m$, $\beta_e=\sqrt{1-4m^2/s}$ and $F=2s\beta_e$; distinguishable final particles have $S_f=1$. Its sphere angular measure $d\Omega$ is the chart surface measure and is invariant under orthogonal maps, as established there from its sphere-measure prerequisite.

[L1] [[lem-qft-qed-formal-matrix-ward]]: for its finite-dimensional formal matrices $K(z;\zeta)=K_0(\zeta)+zV(\zeta)$ and $S(z;\zeta)$, with $d\geq1$, invertible $K_0$, and coefficient covariance under its finite-graph phase action, the actual batch-45 statement says $S$ is a two-sided inverse in $M_d(\mathbb C\llbracket z\rrbracket)$ and transforms coefficientwise as $S(z;\zeta^\theta)=D_\theta S(z;\zeta)D_\theta^{-1}$. It also states $\delta K=i[\Theta,K]$, $\delta S=i[\Theta,S]=-S(\delta K)S$, and the ordinary finite-matrix resolvent identity. The carrier exists in the current QFT-MG03 manifest but has no Step-1 readiness record. Its transitive prerequisite items and unresolved readiness are recorded in the batch-46 cross-batch evidence. The broader Q7 research-module clauses about free Dirac propagators and on-shell currents are not part of this item's actual Statement and are not used as supplier claims here.

[A1] The amplitude displayed in the Statement is adopted as a formal tree coefficient with the stated uniform initial-spin average and final-spin sum; it is not asserted to be an exact amplitude of a constructed continuum theory.

## Proof

1.1 By [F2], the spin sums reduce the squared-current factors to
$$L_e^{ab}=\frac14\operatorname{Tr}[(\not p_2-m)\gamma^a(\not p_1+m)\gamma^b], \qquad L_{\mu,ab}=\operatorname{Tr}[(\not k_1+M)\gamma_a(\not k_2-M)\gamma_b].$$
The odd traces vanish. Expanding the even terms with [F2] and using $p_1\cdot p_2+m^2=s/2$ and $k_1\cdot k_2+M^2=s/2$ gives
$$L_e^{ab}=p_2^ap_1^b+p_2^bp_1^a-\frac{s}{2}h^{ab}, \qquad L_{\mu,ab}=4(k_{1a}k_{2b}+k_{1b}k_{2a}-\frac{s}{2}h_{ab}).$$
These mass-shell dot products follow from $(p_1+p_2)^2=(k_1+k_2)^2=s$. [given, A1, F2, algebra]

2.1 Contracting the tensors gives
$$L_e^{ab}L_{\mu,ab} =4\{2[(p_2\cdot k_1)(p_1\cdot k_2)+(p_2\cdot k_2)(p_1\cdot k_1)] +s^2-s(p_1\cdot p_2+k_1\cdot k_2)\}.$$
The two cross-metric terms contribute $-s(p_1\cdot p_2+k_1\cdot k_2)$, while the metric-metric term contributes $s^2$; substituting $p_1\cdot p_2=(s-2m^2)/2$ and $k_1\cdot k_2=(s-2M^2)/2$ reduces the last two terms to $s(m^2+M^2)$. [step 1.1, F2, algebra]

2.2 The finite matrix hypothesis [L1] supplies coefficientwise inverse and phase-covariance identities only for its specified finite graph kernel. For the separate amplitude in [A1], the spinor equations from [F2] give $\bar v(p_2)\not p_2=-m\bar v(p_2)$ and $\not p_1u(p_1)=mu(p_1)$, so their sum contracted with the incoming current is zero. Likewise $\bar u(k_1)\not k_1=M\bar u(k_1)$ and $\not k_2v(k_2)=-Mv(k_2)$, so the outgoing current is transverse to $P=k_1+k_2$. A longitudinal propagator term is therefore multiplied by two zero contractions. No broader tree-current claim is taken from [L1]. [L1, A1, F2, step 1.1, algebra]

3.1 In the center-of-momentum frame, the equal-mass positive-shell formulas of [F3] give $|\mathbf p_1^*|=\sqrt{s}\beta_e/2$ and $|\mathbf k_1^*|=\sqrt{s}\beta_\mu/2$. By the definition of $\theta$ in the Statement, the four cross-dot-products in step 2.1 are $s/4\pm|\mathbf p_1^*||\mathbf k_1^*|\cos\theta$, with each sign occurring twice. Substitution into step 2.1 and multiplication by $g^4/s^2$ gives $\overline{|\mathcal M|^2}=g^4[3-\beta_e^2-\beta_\mu^2+\beta_e^2\beta_\mu^2\cos^2\theta]$. Each basis spinor $\xi_{\pm,s}$ is dimensionless, so $u_s$ and $v_s$ have units $\mathrm J^{1/2}$; each current has units $\mathrm J$, and $g^2/s$ has units $\mathrm J^{-2}$. Thus $\mathcal M$ is dimensionless as required by the coefficient map. For each outgoing direction $\mathbf n\in S^2$, the rank-two projections $P_+$ and $P_-$ of [F2] depend continuously on $\mathbf n$, since the outgoing energies are positive. For either projection field $P(\mathbf n)$, the sets on which each fixed pair of columns $P(\mathbf n)e_j,P(\mathbf n)e_k$ is linearly independent are open and cover $S^2$: a rank-two matrix has two linearly independent columns. Order the six pairs and partition $S^2$ by the first pair whose columns are independent. On each Borel piece, Gram--Schmidt gives a Borel orthonormal frame of the range. Thus the outgoing spinors can be chosen Borel in $\mathbf n$; the incoming spinors are fixed. The spin-resolved amplitudes are Borel, and their finite spin-label sums are Borel. The trace formula already computed makes the averaged squared amplitude continuous. [F2] The strict threshold gives positive $\beta_e,\beta_\mu$, and [F3] gives incoming flux $F=2s\beta_e>0$. [step 2.1, F1, F2, F3, algebra]

4.1 For distinguishable final particles, [F3] gives $d\Phi_2/d\Omega=\beta_\mu/(32\pi^2)$ and $F=2s\beta_e$. Substituting the squared amplitude from step 3.1 into [F3] yields the displayed differential coefficient after using $g^4=(4\pi\alpha)^2$. To integrate, choose the polar axis along $\mathbf p_1^*$ and write the outgoing unit direction as $X(\theta,\varphi)=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$. The phase-space angular measure is the chart surface measure on $S^2$ and is invariant under rotations by [F3]. This chart has area density $\sin\theta$; the omitted meridian and poles have zero chart area. Thus $\int_{S^2}d\Omega=2\pi\int_0^\pi\sin\theta\,d\theta=4\pi$ and $\int_{S^2}\cos^2\theta\,d\Omega=2\pi\int_0^\pi\cos^2\theta\sin\theta\,d\theta=4\pi/3$. This gives the displayed total coefficient. [step 3.1, F1, F3, algebra]

5.1 For $\delta=4m^2/s\leq1/2$, set $B_0=2-\beta_\mu^2+\beta_\mu^2\cos^2\theta$ and $Q=1-\beta_\mu^2\cos^2\theta$. Then $B_0\geq1$, $0\leq Q\leq1$, and the ratio of the full coefficient to its $m=0$ value is $R=(B_0+\delta Q)/(B_0\sqrt{1-\delta})\geq1$. Also
$$R-1=\frac1{\sqrt{1-\delta}}-1+ \frac{\delta Q}{B_0\sqrt{1-\delta}} \leq2\sqrt2\,\delta\leq4\delta,$$
because $1/\sqrt{1-\delta}-1=\delta/(\sqrt{1-\delta}(1+\sqrt{1-\delta}))\leq\sqrt2\,\delta$ for $0\leq\delta\leq1/2$, and $B_0\sqrt{1-\delta}\geq1/\sqrt2$. This compares only the two formal tree coefficients. [step 4.1, algebra] ∎
