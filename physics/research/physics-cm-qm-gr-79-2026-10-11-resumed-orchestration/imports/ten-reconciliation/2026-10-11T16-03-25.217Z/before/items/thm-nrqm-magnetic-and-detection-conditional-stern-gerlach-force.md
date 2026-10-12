---
id: thm-nrqm-magnetic-and-detection-conditional-stern-gerlach-force
aliases: [nrqm-magnetic-and-detection-conditional-stern-gerlach-force]
kind: theorem
domain: mathematics
title: "Conditional Stern-Gerlach force for a spin-coupled bounded field model"
status: draft
origin: pipeline
dependency_level: 3
deps: [lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, thm-tonelli-theorem-for-sigma-finite-product-spaces, prop-nrqm-orbital-and-spin-finite-spin-matrices, thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws, thm-nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint, def-nrqm-magnetic-and-detection-position-and-momentum-operators, lem-schwartz-cutoffs-from-the-standard-smooth-step, lem-weak-product-rule-for-bounded-sobolev-functions, lem-sobolev-integration-by-parts-for-dual-exponents, lem-weak-leibniz-rule-with-a-smooth-factor, thm-plancherel, def-fourier-transform-on-l-one-of-rn, thm-dominated-convergence, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, def-inner-product-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws: mathematical-premise
  thm-nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  lem-schwartz-cutoffs-from-the-standard-smooth-step: mathematical-premise
  lem-weak-product-rule-for-bounded-sobolev-functions: mathematical-premise
  lem-sobolev-integration-by-parts-for-dual-exponents: mathematical-premise
  lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  thm-plancherel: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 3.6 pp. 54-58 and Chapter 7 (spin coupling, Stern-Gerlach force and the inhomogeneous field)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum' pp. 18-26 (spin one-half operators and Stern-Gerlach type couplings)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]). Fix $\hbar>0$, $m>0$,
$\gamma_s\in\mathbb R$ and a real function $B_z\in C^1(\mathbb R)$ with
$B_z$ and $B_z'$ bounded. Let
$$\mathcal H:=L^2(\mathbb R^3;\mathbb C)\oplus L^2(\mathbb R^3;\mathbb C), \qquad \langle(u_+,u_-),(v_+,v_-)\rangle:=\langle u_+,v_+\rangle+\langle u_-,v_-\rangle,$$
let $P_j,Q_j$ act componentwise ([[def-nrqm-magnetic-and-detection-position-and-momentum-operators]],
[[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]]), write
$B_z(Q_x)$ for componentwise multiplication by $x\mapsto B_z(x_1)$ and
$$S_z(u_+,u_-):=\Bigl(\frac\hbar2u_+,-\frac\hbar2u_-\Bigr),\qquad K(u_+,u_-):=\Bigl(\frac1{2m}\sum_jP_j^2u_+-\frac{\gamma_s\hbar}2B_z(Q_x)u_+,\ \frac1{2m}\sum_jP_j^2u_-+\frac{\gamma_s\hbar}2B_z(Q_x)u_-\Bigr),$$
with $D(K):=\{(u_+,u_-):u_+,u_-\in W^{2,2}(\mathbb R^3;\mathbb C)\}$, so that
formally $K=\frac1{2m}\sum_jP_j^2-\gamma_sS_zB_z(Q_x)$. Identify the spin
factor with $V_{1/2}=\mathbb C^2$ of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] by the basis
$(e_{1/2},e_{-1/2})$, so that on that factor $S_z=\hbar J_z$ with
$J_ze_m=me_m$ and eigenvalues $\pm\hbar/2$. Then:

(a) $K$ is self-adjoint with domain $D(K)$, and $S_zK=KS_z$ on $D(K)$;
consequently, for $u(t):=e^{-itK/\hbar}u_0$ and the sector projections
$p_\pm:=\frac12(I\pm\frac2\hbar S_z)$,
$$\|p_\pm u(t)\|^2=\|p_\pm u_0\|^2,\qquad \langle S_zu(t),u(t)\rangle=\langle S_zu_0,u_0\rangle \qquad(t\in\mathbb R,\ u_0\in\mathcal H);$$

(b) for every $u_0\in D(K^2):=\{u\in D(K):Ku\in D(K)\}$ the function
$t\mapsto\langle P_xu(t),u(t)\rangle$ is $C^1$ and
$$\frac d{dt}\langle P_xu(t),u(t)\rangle =\gamma_s\,\bigl\langle S_zB_z'(Q_x)u(t),u(t)\bigr\rangle,$$
where $B_z'(Q_x)$ is componentwise multiplication by $x\mapsto B_z'(x_1)$ and
$S_zB_z'(Q_x)(u_+,u_-)=(\frac\hbar2B_z'(Q_x)u_+,-\frac\hbar2B_z'(Q_x)u_-)$;

(c) if in addition $\|u_0\|=1$, $p_+u_0=u_0$, and $B_z'(s)=G$ for every
$s$ in a Borel set $N\subseteq\mathbb R$ with
$\int_{\mathbb R\setminus N}\eta_+(x_1)\,dx_1=0$, where $\eta_+(x_1):=\int_{\mathbb R^2}|u_0^+(x_1,x_2,x_3)|^2\,dx_2\,dx_3$ is the first-coordinate marginal density, then
$$\frac d{dt}\Bigr|_{t=0}\langle P_xu(t),u(t)\rangle=\frac{\gamma_s\hbar}2G,$$
an identity at the preparation time $t=0$; for $t\ne0$ the general formula of
(b) applies and may differ;

(d) for the model field $B(x):=(0,0,B_z(x_1))$ one has
$\operatorname{div}B=0$ and
$\operatorname{curl}B=(0,-B_z'(x_1),0)$ at every point.

The statements are conditional identities for the displayed model; no
apparatus, measured trajectory, source-free Maxwell realisation of $B$ or
inference about an individual particle is asserted.

## Facts & Assumptions

**Given:** $\hbar,m>0$, $\gamma_s\in\mathbb R$, bounded $B_z\in C^1(\mathbb R)$ with bounded $B_z'$; the direct-sum Hilbert space $\mathcal H$; the operators $S_z$, $B_z(Q_x)$, $K$ on $\mathcal H$; the componentwise operators $P_j,Q_j$.

[F1] On each component, $K_\pm:=\frac1{2m}\sum_jP_j^2\mp\frac{\gamma_s\hbar}2M_{B_z}$ is self-adjoint with domain $W^{2,2}(\mathbb R^3;\mathbb C)$: this is [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clause (c) with the real bounded potential $\mp\frac{\gamma_s\hbar}2B_z$; $M_{B_z}$ is bounded self-adjoint ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clause (a)).

[F2] A direct sum $T=T_+\oplus T_-$ of self-adjoint operators is self-adjoint on $D(T_+)\oplus D(T_-)$: symmetry is componentwise, and surjectivity of $T\pm i$ follows from surjectivity of the components ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F3] $T_{u(t),u(t)}$ denotes the rank-one operator $x\mapsto\langle x,u(t)\rangle u(t)$; the PVM of the bounded self-adjoint $S_z$ is $F(\{\hbar/2\})=p_+$, $F(\{-\hbar/2\})=p_-$, $F(\mathbb R\setminus\{\pm\hbar/2\})=0$, and $F(S)U(t)=U(t)F(S)$ whenever $S_zK\subseteq KS_z$, by [[thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws]] clauses (a') and (b)(iii). Also $p_\pm=\frac12(I\pm\frac2\hbar S_z)$.

[F4] [[thm-nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale]] clause (a), one-sided form: if $\psi:I\to\mathcal H$ is $C^1$ into $D(A)$ with the graph norm, $\psi'(t)=-\frac i\hbar K\psi(t)$ and $K\psi(t)\in D(A)$ for all $t$, then $t\mapsto\langle A\psi(t),\psi(t)\rangle$ is $C^1$ with derivative $-\frac2\hbar\operatorname{Im}\langle A\psi(t),K\psi(t)\rangle$.

[F5] Plancherel and Fourier calculus: $\mathcal F_2$ is unitary and $\|g\|_2=\|\mathcal F_2g\|_2$ ([[thm-plancherel]], [[def-fourier-transform-on-l-one-of-rn]]). For $w\in W^{2,2}(\mathbb R^3;\mathbb C)$ the class is bounded with $|w(x)|\le C\|w\|_{W^{2,2}}$ for a.e. $x$, because $|w(x)|=|\int\mathcal F_2w(\xi)e^{2\pi ix\cdot\xi}d\xi|\le\|\langle\xi\rangle^{2}\mathcal F_2w\|_2\,\|\langle\xi\rangle^{-2}\|_2$ and $\int(1+|\xi|^2)^{-2}d\xi<\infty$ in three dimensions.

[F6] Products of bounded Sobolev classes: for $w\in W^{2,2}(\mathbb R^3;\mathbb C)\subseteq W^{1,2}\cap L^\infty$ and its conjugate $\overline w\in W^{1,2}\cap L^\infty$, the product $|w|^2=w\overline w$ lies in $W^{1,2}$ with $D_j|w|^2=(D_jw)\overline w+wD_j\overline w=2\operatorname{Re}\bigl((D_jw)\overline w\bigr)$ ([[lem-weak-product-rule-for-bounded-sobolev-functions]]).

[F7] Compactly supported integration by parts: if $u\in W^{1,2}(\mathbb R^3)$ is compactly supported and $v\in W^{1,2}(\mathbb R^3)$, then $\int u\,D_jv=-\int v\,D_ju$ ([[lem-sobolev-integration-by-parts-for-dual-exponents]], case $p=p'=2$). More generally a smooth compactly supported multiplier times a bounded Lipschitz function lies in $W^{1,2}$ with the Leibniz derivative ([[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[F8] Cutoffs and dominated convergence: the functions $\chi_R(x)=\chi(x/R)$ of [[lem-schwartz-cutoffs-from-the-standard-smooth-step]] satisfy $0\le\chi_R\le1$, $\chi_R=1$ on $[-R,R]^3$, $\chi_R=0$ outside $[-2R,2R]^3$ and $|D_j\chi_R|\le C/R$; $L^1$ dominated convergence applies to integrals against $|w|^2$ and $|\partial_j|w|^2|$ ([[thm-dominated-convergence]]).

[F9] For self-adjoint $K$, the spectral unitary group preserves $D(K)$, commutes with $K$ there and has derivative $-iK/\hbar$ for initial vectors in $D(K)$. Tonelli on the sigma-finite product $\mathbb R\times\mathbb R^2$ defines the nonnegative marginal $\eta_+$ and gives $\int\eta_+=\|u_0^+\|_2^2$ ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

## Proof

1.1 [Self-adjointness and commutation] By [F1] each $K_\pm$ is self-adjoint on $W^{2,2}$, so [F2] makes $K=K_+\oplus K_-$ self-adjoint on $D(K)=W^{2,2}\oplus W^{2,2}$. Also $S_z$ is bounded self-adjoint with eigenvalues $\pm\hbar/2$ by the identification with $\hbar J_z$ of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]], and for $(u_+,u_-)\in D(K)$, $S_zK(u_+,u_-)=(\frac\hbar2K_+u_+,-\frac\hbar2K_-u_-)=KS_z(u_+,u_-)$ componentwise. [given, F1, F2]

1.2 [The free part is real] For $w\in W^{2,2}(\mathbb R^3;\mathbb C)$ put $K_0:=\frac1{2m}\sum_jP_j^2$ and $c:=\frac{(2\pi\hbar)^2}{2m}$. By [F5] and the multiplier identity of [[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]], $\langle P_xw,K_0w\rangle=\int_{\mathbb R^3}2\pi\hbar\xi_1\,c|\xi|^2|\mathcal F_2w(\xi)|^2\,d\xi$, an absolutely convergent integral of a real-valued function, hence a real number (Cauchy–Schwarz bounds it by $\|P_xw\|_2\|K_0w\|_2$; no parity of $|\mathcal F_2w|^2$ is assumed); so $\operatorname{Im}\langle P_xw,K_0w\rangle=0$. [given, F5]

1.3 [The potential part] Let $w\in W^{2,2}$ and let $\chi_R$ be as in [F8]. By [F6], $|w|^2\in W^{1,2}$ with $D_x|w|^2=2\operatorname{Re}((D_xw)\overline w)$, and by [F7] the compactly supported class $\chi_RB_z(x_1)\in W^{1,2}$ satisfies $\int\chi_RB_z\,D_x|w|^2=-\int D_x(\chi_RB_z)\,|w|^2=-\int\chi_RB_z'|w|^2-\int(D_x\chi_R)B_z|w|^2$. Letting $R\to\infty$, [F8] gives $\int B_z\,D_x|w|^2=-\int B_z'|w|^2$ and $|\int(D_x\chi_R)B_z|w|^2|\le C\|B_z\|_\infty R^{-1}\int_{|x|\ge R}|w|^2\to0$. Since $\operatorname{Im}\langle P_xw,M_{B_z}w\rangle=\operatorname{Im}\int(-i\hbar D_xw)B_z\overline w=-\hbar\operatorname{Re}\int B_zD_xw\,\overline w=-\frac\hbar2\int B_zD_x|w|^2$, this gives $\operatorname{Im}\langle P_xw,M_{B_z}w\rangle=\frac\hbar2\int B_z'|w|^2$. [given, F6, F7, F8, algebra]

2.1 [Conserved spin law] By step 1.1 the inclusion $S_zK\subseteq KS_z$ holds, so [F3] gives $S_zU(t)=U(t)S_z$ and hence $p_\pm U(t)=U(t)p_\pm$ because $p_\pm$ are polynomials in $S_z$. For $u_0\in\mathcal H$, $\|p_\pm u(t)\|=\|U(t)p_\pm u_0\|=\|p_\pm u_0\|$, and the mean identity follows from $\langle S_zu,u\rangle=\frac\hbar2(\|p_+u\|^2-\|p_-u\|^2)$ applied at times $t$ and $0$. This is (a). [given, step 1.1, F3]

2.2 [Graph differentiability for the full stated domain] For $w\in W^{2,2}$, the Fourier inequality $\xi_1^2\le1+|\xi|^4$ and Plancherel [F5] give $\|P_xw\|\le C(\|K_0w\|+\|w\|)$. Since $K_\pm=K_0+V_\pm$ with bounded $V_\pm$, it follows componentwise that $\|P_xu\|\le C'(\|Ku\|+\|u\|)$ on $D(K)$, so $P_x$ is continuous from the $K$ graph norm into $\mathcal H$. If $u_0\in D(K^2)$, [F9] applied both to $u_0$ and to $Ku_0\in D(K)$ makes $u(t)=U(t)u_0$ and $Ku(t)=U(t)Ku_0$ continuously differentiable in $\mathcal H$, with derivatives $-iKu(t)/\hbar$ and $-iK^2u(t)/\hbar$. Thus $u(t)$ is $C^1$ in the $K$ graph norm, and applying the graph-continuous map $P_x$ yields $\frac d{dt}P_xu(t)=-iP_xKu(t)/\hbar$. The domain inclusions $u(t),Ku(t)\in D(K)\subseteq D(P_x)$ therefore meet [F4], which gives $f(t)=\langle P_xu(t),u(t)\rangle\in C^1$ and $f'(t)=-2\operatorname{Im}\langle P_xu(t),Ku(t)\rangle/\hbar$ without weakening $D(K^2)$. [given, step 1.1, F1, F4, F5, F9, algebra]

3.1 [Assembling the force] Write $u=(u_+,u_-)$, $K_\pm=K_0\mp\frac{\gamma_s\hbar}2M_{B_z}$ and $z(t)=\sum_\pm\langle P_xu_\pm,K_\pm u_\pm\rangle$. By steps 1.2 and 1.3, $\operatorname{Im} z(t)=\sum_\pm\bigl(\mp\frac{\gamma_s\hbar}2\bigr)\frac\hbar2\int B_z'|u_\pm|^2=-\frac{\gamma_s\hbar^2}4\int B_z'|u_+|^2+\frac{\gamma_s\hbar^2}4\int B_z'|u_-|^2=-\frac{\gamma_s\hbar}2\langle S_zB_z'(Q_x)u,u\rangle$, because $\langle S_zB_z'(Q_x)u,u\rangle=\frac\hbar2\int B_z'|u_+|^2-\frac\hbar2\int B_z'|u_-|^2$. Substituting into step 2.2, $f'=-\frac2\hbar\operatorname{Im}z=\gamma_s\langle S_zB_z'(Q_x)u(t),u(t)\rangle$, which is (b). [given, step 2.2, step 1.2, step 1.3, algebra]

4.1 [Constant-gradient preparation in three dimensions] Under (c), $u_0=(u_0^+,0)$ and the marginal $\eta_+(x_1)$ of [F9] satisfies $\int\eta_+=\|u_0\|^2=1$ and vanishes in integral off $N$. Tonelli and boundedness of $B_z'$ give $\langle S_zB_z'(Q_x)u_0,u_0\rangle=\frac\hbar2\int_{\mathbb R}B_z'(x_1)\eta_+(x_1)dx_1=\frac\hbar2G\int_N\eta_+=\frac\hbar2G$. By step 3.1 at preparation time $t=0$, $f'(0)=\gamma_s\hbar G/2$. The general force formula retains the later-time dependence of the marginal and field gradient. [given, step 3.1, F9, algebra]

5.1 [Field identities] For $B(x)=(0,0,B_z(x_1))$: $\operatorname{div}B=D_1B_1+D_2B_2+D_3B_3=0$ because $B_1=B_2=0$ and $B_3$ is independent of $x_3$; and $\operatorname{curl}B=(D_2B_3-D_3B_2,\,D_3B_1-D_1B_3,\,D_1B_2-D_2B_1)=(0,-B_z'(x_1),0)$ ([[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]]). This is (d). [given, algebra] ∎
