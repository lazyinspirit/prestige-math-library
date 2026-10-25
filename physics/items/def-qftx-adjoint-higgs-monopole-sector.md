---
id: def-qftx-adjoint-higgs-monopole-sector
kind: definition
title: Static SU(2) adjoint-Higgs Prasad–Sommerfield monopole sector
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-bps-solitons-monopoles
dependency_level: 2
deps:
  - def-countable-choice
  - def-qftx-nonabelian-gauge-data
  - def-qftx-principal-connection-form
  - def-qftx-lie-algebra-valued-form-bracket
  - def-qftx-associated-covariant-derivative
  - prop-adjoint-is-a-smooth-lie-group-representation
  - lem-qftx-su2-compact-nonabelian-invariant-form
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-nonabelian-gauge-data: formulation-prerequisite
  def-qftx-principal-connection-form: formulation-prerequisite
  def-qftx-lie-algebra-valued-form-bracket: formulation-prerequisite
  def-qftx-associated-covariant-derivative: formulation-prerequisite
  prop-adjoint-is-a-smooth-lie-group-representation: mathematical-premise
  lem-qftx-su2-compact-nonabelian-invariant-form: mathematical-premise
proof_strategy: not-applicable
axiom_base: "ZF + AC_omega inherited through the specified gauge-data and connection definitions; the normalized positive invariant form is supplied by the current SU(2) lemma."
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "An adopted classical static SU(2) gauge field with one real adjoint Higgs field on flat 3+1-dimensional Minkowski spacetime, in the zero-potential Prasad–Sommerfield sector and with the explicit finite-energy asymptotic reduction and global charge data below. No quantum field theory, particle-state, empirical, or other-global-form claim is made."
sources:
  references:
    - title: "David Tong, TASI Lectures on Solitons: Instantons, Monopoles, Vortices and Kinks"
      url: https://arxiv.org/pdf/hep-th/0509216
      locator: "§2.1.1, equations (2.9)–(2.15), printed pp. 41–43 (PDF pp. 42–44); §2.1.2, equations (2.16)–(2.18), printed p. 43 (PDF p. 44); and §2.1.3, equation (2.19), printed p. 44 (PDF p. 45). Tong uses signature (+---), Hermitian-generator/component conventions, and coupling e; this item fixes anti-Hermitian T_a, kappa(T_a,T_b)=delta_ab, signature (-+++), and the rescaled 1/(2g^2) energy convention explicitly."
    - title: "Jeffrey A. Harvey, Magnetic Monopoles, Duality, and Supersymmetry"
      url: https://arxiv.org/pdf/hep-th/9603086
      locator: "§1.4, equations (1.20)–(1.40); §2.1, equations (2.1)–(2.6); and §2.2, equations (2.7)–(2.9). These give SU(2) Yang–Mills–Higgs data, the zero-potential limit, the fundamental-doublet charge unit, the Bianchi surface term, square completion, and Prasad–Sommerfield radial functions. Harvey uses B_i=-epsilon_ijk F_jk/2 and e inside D; neither convention is silently adopted here."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Assume the Axiom of Countable Choice, written $\mathrm{AC}_\omega$. Use natural units $\hbar=c=1$ on Minkowski spacetime $\mathbb R^{1,3}$ with metric $\eta=\operatorname{diag}(-1,1,1,1)$, orientation $dt\wedge dx^1\wedge dx^2\wedge dx^3$, and spatial orientation $\epsilon_{123}=1$. Fix the global gauge group $SU(2)$, not $SO(3)$, and the trivial right principal $SU(2)$-bundle over each spatial slice. Let

$$T_a=-\frac{i}{2}\sigma_a\quad(a=1,2,3),\qquad \kappa(X,Y)=-2\operatorname{Tr}_2(XY),$$

where $\sigma_a$ are the Pauli matrices and $\mathfrak{su}(2)$ has basis $T_1,T_2,T_3$. Thus $[T_a,T_b]=\epsilon_{abc}T_c$ and $\kappa(T_a,T_b)=\delta_{ab}$. The positive coupling $g$ is dimensionless. The scalar field is one real adjoint Higgs field: a smooth $\mathfrak{su}(2)$-valued map $\Phi$ on $\mathbb R^3$, viewed as the real form in the complexified adjoint representation. A gauge connection is a smooth $\mathfrak{su}(2)$-valued one-form $A=A_i dx^i$. In a local section change $s_j=s_i h_{ij}$, use the right-action convention $A_j=\operatorname{Ad}_{h_{ij}^{-1}}A_i+h_{ij}^{-1}dh_{ij}$ and $\Phi_j=\operatorname{Ad}_{h_{ij}^{-1}}\Phi_i$. Define

$$F_{ij}=\partial_iA_j-\partial_jA_i+[A_i,A_j],\qquad D_i\Phi=\partial_i\Phi+[A_i,\Phi],\qquad B_i=\frac12\epsilon_{ijk}F_{jk}.$$

The static spacetime fields are the smooth maps $\widetilde\Phi,\widetilde A_\mu:\mathbb R\times\mathbb R^3\to\mathfrak{su}(2)$, $\mu=0,1,2,3$, defined by $\widetilde\Phi(t,x)=\Phi(x)$, $\widetilde A_i(t,x)=A_i(x)$, and $\widetilde A_0(t,x)=0$; thus $\partial_t\widetilde A_i=\partial_t\widetilde\Phi=0$. The spacetime connection is $\widetilde A=\widetilde A_\mu dx^\mu$, with $x^0=t$. This Prasad–Sommerfield sector has no other dynamical fields and identically zero Higgs potential. Its adopted energy functional is

$$E[A,\Phi]=\frac{1}{2g^2}\int_{\mathbb R^3}\sum_{i=1}^3\bigl(\kappa(B_i,B_i)+\kappa(D_i\Phi,D_i\Phi)\bigr)\,d^3x.$$

The field dimensions are $[A_i]=[\Phi]=\mathrm{length}^{-1}$ and $[F_{ij}]=[B_i]=[D_i\Phi]=\mathrm{length}^{-2}$, so $E$ has dimension $\mathrm{length}^{-1}$. A configuration is finite-energy when this integral is finite.

The boundary data fix $v>0$ of dimension $\mathrm{length}^{-1}$ and require $\Phi(R\,\cdot)/v\to n_\infty$ in $C^\infty(S^2,\mathfrak{su}(2))$, where $S^2=\{\omega\in\mathbb R^3:|\omega|=1\}$ has its outward orientation and $|n_\infty|_\kappa=1$; here $|X|_\kappa^2:=\kappa(X,X)$. In particular $|\Phi(R\omega)|_\kappa\to v$ uniformly. The stabilizer subgroup of $T_3$ is $U(1)=\{\exp(\theta T_3):\theta\in\mathbb R/(4\pi\mathbb Z)\}$. Let $D_N,D_S$ be the closed northern and southern hemispheres. Specify smooth lifts $u_\alpha:U_\alpha\to SU(2)$ on open neighborhoods $U_\alpha\supset D_\alpha$ with $\operatorname{Ad}_{u_\alpha}T_3=n_\infty$. On their common equator $C$, oriented as $\partial D_N$, the transition is $u_S=u_Nh$, where $h(\varphi)=\exp(\theta(\varphi)T_3)$, $\varphi\in[0,2\pi]$ runs positively around $C$, and $\theta:[0,2\pi]\to\mathbb R$ is a specified smooth lift.

For $R>0$, put $\iota_R(\omega)=R\omega$ and $F=\tfrac12F_{ij}dx^i\wedge dx^j$. Define the adapted angular forms

$$\mathcal A_{\alpha,R}=\operatorname{Ad}_{u_\alpha^{-1}}(\iota_R^*A)+u_\alpha^{-1}du_\alpha,\qquad \mathcal F_{\alpha,R}=\operatorname{Ad}_{u_\alpha^{-1}}(\iota_R^*F).$$

Require pointwise convergence $\mathcal A_{\alpha,R}\to\mathcal A_{\alpha,\infty}$ on $D_\alpha$, with $\mathcal A_{\alpha,\infty}$ extending as a $C^1$ one-form to $U_\alpha$. Require its curvature $\mathcal F_{\alpha,\infty}:=d\mathcal A_{\alpha,\infty}+\tfrac12[\mathcal A_{\alpha,\infty}\wedge\mathcal A_{\alpha,\infty}]$ to extend as a $C^1$ two-form to $U_\alpha$, and $\mathcal F_{\alpha,R}\to\mathcal F_{\alpha,\infty}$ uniformly on $D_\alpha$. Norms and convergence use the round metric of the unit sphere and $\kappa$. Define the limiting tangential covariant derivative by its local expression

$$D_{\mathrm{tan}}n_\infty|_{D_\alpha}:=\operatorname{Ad}_{u_\alpha}\bigl(dT_3+[\mathcal A_{\alpha,\infty},T_3]\bigr)=\operatorname{Ad}_{u_\alpha}[\mathcal A_{\alpha,\infty},T_3],$$

where $dT_3=0$ and the bracket is evaluated on tangent vectors. The transition law makes these expressions agree on the equator. Require $D_{\mathrm{tan}}n_\infty=0$. Let $d\Omega$ be the outward round area form on $S^2$ and define $B_\infty:S^2\to\mathfrak{su}(2)$ by

$$\operatorname{Ad}_{u_\alpha}\mathcal F_{\alpha,\infty}=B_\infty\,d\Omega\quad\hbox{on }D_\alpha.$$

Curvature covariance makes this definition agree on $C$. Equivalently, $B_\infty(\omega)=\lim_{R\to\infty}R^2\sum_i\omega_iB_i(R\omega)$ uniformly on each hemisphere, since $\iota_R^*F=R^2\sum_i\omega_iB_i(R\omega)\,d\Omega$. It is the scaled radial magnetic field, not the unscaled spatial field. Require $[B_\infty(\omega),n_\infty(\omega)]=0$, meaning that its value belongs to the pointwise stabilizer Lie algebra $\{X\in\mathfrak{su}(2):[X,n_\infty(\omega)]=0\}$. These convergence and reduction conditions are adopted boundary hypotheses, not consequences asserted for every finite-energy field. The surface limit below is also required to exist.

The admissible external Wilson probes include the fundamental doublet, on which $T_3$ has weights $\pm\tfrac12$; this specifies the electric probe lattice without adding a propagating fundamental matter field. Define the classical magnetic surface charge and its energy normalization by

$$m:=\lim_{R\to\infty}\int_{S_R^2}\kappa(\Phi,B_i)\,\hat x_i\,dS,\qquad T:=g^{-2}m,$$

where $\hat x=x/|x|$ is the outward unit normal and $dS$ is Euclidean area. The transition increment $\theta(2\pi)-\theta(0)$ is not assumed to be quantized in this definition. These are adopted classical model data; they assert no empirical law, quantum continuum construction, supersymmetry representation, or quantum BPS state.

## Definition references

[David Tong, §2.1, model and monopole conventions](https://arxiv.org/pdf/hep-th/0509216)

[Jeffrey A. Harvey, §§1.4 and 2.1–2.2, SU(2) Higgs model and monopole conventions](https://arxiv.org/pdf/hep-th/9603086)

[[def-qftx-nonabelian-gauge-data|Non-Abelian gauge group, bundle, and representation data]]

[[def-qftx-principal-connection-form|Principal connection and right-action convention]]

[[def-qftx-lie-algebra-valued-form-bracket|Lie-algebra-valued form bracket convention]]

[[def-qftx-associated-covariant-derivative|Associated covariant derivative]]

[[prop-adjoint-is-a-smooth-lie-group-representation|Smooth adjoint representation]]

[[lem-qftx-su2-compact-nonabelian-invariant-form|Normalized invariant form on SU(2)]]

