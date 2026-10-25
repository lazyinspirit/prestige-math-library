---
id: lem-qftx-taubes-disk-barriers-and-monotone-iteration
kind: lemma
title: Taubes disk barriers and monotone Dirichlet iteration
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-qftx-critical-abelian-higgs-divisor-data
  - def-axiom-of-choice
  - def-sobolev-space-wkp-and-its-norm
  - thm-lax-milgram
  - thm-weak-maximum-principle-for-coercive-divergence-form-equations
  - thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian
  - thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian
  - thm-higher-order-sobolev-embedding
  - thm-extension-theorem-for-bounded-smooth-domains
  - thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations
  - thm-interior-schauder-estimate-for-uniformly-elliptic-equations
  - lem-w-one-two-is-a-hilbert-space
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-integral-triangle-inequality
dependency_roles:
  def-qftx-critical-abelian-higgs-divisor-data: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-lax-milgram: mathematical-premise
  thm-weak-maximum-principle-for-coercive-divergence-form-equations: mathematical-premise
  thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian: mathematical-premise
  thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian: mathematical-premise
  thm-higher-order-sobolev-embedding: mathematical-premise
  thm-extension-theorem-for-bounded-smooth-domains: mathematical-premise
  thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations: mathematical-premise
  thm-interior-schauder-estimate-for-uniformly-elliptic-equations: mathematical-premise
  lem-w-one-two-is-a-hilbert-space: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
dependency_level: 1
axiom_base: "ZF + full Axiom of Choice; it supplies Countable Choice for the cited Sobolev and elliptic interfaces. No physical premise."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, TASI Lectures on Solitons, Lecture 3: Vortices"
      url: "https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf"
      locator: "§§3.1–3.2, printed pp. 70–73: critical model and square completion; no disk existence proof."
    - title: "Shouxin Chen and Yisong Yang, Existence of Multiple Vortices in Supersymmetric Gauge Field Theory"
      url: "https://arxiv.org/pdf/1203.3071"
      locator: "§§3 and 5–6, PDF pp. 5–19: scalar reduction and an independent full-plane variational existence/decay treatment. The normalization map is recorded in batch coverage; the disk barrier proof here is local."
---

## Statement

Let $\kappa>0$ and let $D=\sum_{j=1}^Jm_j[z_j]$ be a finite effective divisor in $\mathbb C$, where the centers $z_j$ are distinct and $m_j\in\mathbb N$; write $N=\sum_jm_j$. For any $a>0$ with $a\ge4N/\kappa$, the function
$$u_-(z)=\sum_{j=1}^Jm_j\log\frac{|z-z_j|^2}{|z-z_j|^2+a}$$
is a global distributional subsolution of $\Delta u+\kappa(1-e^u)=4\pi\sum_jm_j\delta_{z_j}$. For every $R>\max_j|z_j|$ (with the empty maximum interpreted as $0$), let $D_R=\{|z|<R\}$ and define
$$u_{s,R}(z)=\sum_jm_j\log\frac{R^2|z-z_j|^2}{|R^2-\overline z_jz|^2},\qquad \psi_R(z)=\frac{\kappa}{4}(R^2-|z|^2),\qquad A_R=e^{u_{s,R}}.$$
Then $u_{s,R}$ is the zero-boundary Dirichlet Green sum with $\Delta u_{s,R}=4\pi\sum_jm_j\delta_{z_j}$; $u_{s,R}+\psi_R$ is a supersolution and $u_-\le u_{s,R}+\psi_R$ on $D_R$. Write $H^1_0(D_R;\mathbb R)$ for the closure of $C_c^\infty(D_R;\mathbb R)$ in the real Sobolev space $W^{1,2}(D_R;\mathbb R)$. For any constant $L_R\ge\kappa\max_{\overline D_R}(A_Re^{\psi_R})$, the positive zero-Dirichlet resolver $(-\Delta+L_R)^{-1}$ on $H^1_0(D_R;\mathbb R)$ defines the monotone iteration
$$v_0=u_--u_{s,R},\qquad v_{k+1}=(-\Delta+L_R)^{-1}\bigl(\kappa+L_Rv_k-\kappa A_Re^{v_k}\bigr).$$
It converges pointwise and in $H^1(D_R)$ to a solution $v_R\in C^{2,\alpha}(\overline D_R)$ for every $0<\alpha<1$, with $v_0\le v_R\le\psi_R$ and zero boundary trace. Thus $u_R=u_{s,R}+v_R$ solves the distributional divisor equation, satisfies $u_-\le u_R\le0$, and has $u_R-2\sum_jm_j\log|z-z_j|$ smooth at the centers. For the fixed singular function $s(z)=2\sum_jm_j\log|z-z_j|$, every compact $K\subset\mathbb C$ and every $p>2$ admit constants independent of sufficiently large $R$ such that $u_R-s$ is uniformly bounded in $W^{2,p}(K)$. For each $0<\alpha<1$, choosing $p>2/(1-\alpha)$ also gives a uniform $C^{2,\alpha}(K)$ bound. These are the local compactness estimates for disk exhaustion.

## Statement references

[Critical model and BPS equations (Tong, §§3.1–3.2)](https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf)

[Independent scalar reduction and full-plane variational proof (Chen–Yang, §§3 and 5–6)](https://arxiv.org/pdf/1203.3071)

## Facts & Assumptions

**Given:** $\kappa>0$, the finite effective divisor $D=\sum_jm_j[z_j]$, its degree $N$, and a radius $R$ containing every $z_j$.

[A1] Full AC is the axiom base declared by [[def-axiom-of-choice]]; in particular it supplies the Countable Choice hypothesis in the Sobolev, Lax–Milgram, and weak Dirichlet regularity inputs below. The Lax–Milgram use is at step 3.1; no additional arbitrary-index choice is made.

[F1] [[def-qftx-critical-abelian-higgs-divisor-data]] fixes $\kappa=2e^2\xi$, the Euclidean orientation, the divisor multiplicity convention, $\Delta\log|z-z_j|^2=4\pi\delta_{z_j}$, and the scalar equation $\Delta u+\kappa(1-e^u)=4\pi D$.

[F2] [[def-sobolev-space-wkp-and-its-norm]] defines $W^{2,p}(D_R)$ by weak derivatives and its $L^p$ norm; its local representative and weak-derivative conventions are used for the resolvent.

[F3] [[thm-lax-milgram]]: on a real Hilbert space, a bounded coercive bilinear form and a bounded linear functional have a unique weak solution, with the norm estimate $\|u\|\le\|F\|/\alpha$; the theorem assumes Countable Choice.

[F4] [[thm-weak-maximum-principle-for-coercive-divergence-form-equations]]: for $-\operatorname{div}(A\nabla u)+cu=0$ on a bounded $C^1$ domain, with uniformly elliptic $A$, $c\ge0$, and nonpositive boundary trace, the weak subsolution satisfies $\operatorname{ess\,sup}u\le0$.

[F5] [[thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian]]: on a bounded $C^{2,\alpha}$ domain in dimension $n\ge2$, if $p>n$ and $u\in H^1_0$ weakly solves $-\Delta u=f\in L^p$, then $u\in W^{2,p}\cap W^{1,p}_0$ and obeys the stated global estimate; AC and Countable Choice are hypotheses.

[F6] The disk is a bounded $W^{2,p}$-extension domain by [[thm-extension-theorem-for-bounded-smooth-domains]], and [[thm-higher-order-sobolev-embedding]] gives $C^{1,\beta}$ representatives for $p>2$ and $0<\beta<1-2/p$.

[F7] [[thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian]]: on a bounded $C^{2,\alpha}$ disk, a weak zero-Dirichlet solution of $-\Delta v=f$ with $f\in C^{0,\alpha}$ has a unique representative in $C^{2,\alpha}$.

[F8] [[thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations]]: for $p>2$ and $\Delta w=f\in L^p$ on a ball in $\mathbb R^2$, the $W^{2,p}$ norm on the concentric half-ball is bounded by the local $L^p$ norms of $f$ and $w$.

[F9] [[thm-interior-schauder-estimate-for-uniformly-elliptic-equations]]: a bounded $C^2$ solution of $\Delta w=f$ on a ball with $f\in C^{0,\alpha}$ is $C^{2,\alpha}$ on the concentric half-ball, with the stated scaled estimate.

[F10] [[lem-w-one-two-is-a-hilbert-space]]: under Countable Choice, $H^1(D_R)=W^{1,2}(D_R)$ with its full Sobolev inner product is a Hilbert space, and $H^1_0(D_R)$ is a closed Hilbert subspace for the restricted inner product.

[F11] [[cor-cauchy-schwarz-inequality-for-l-two]]: for $f,g\in L^2(D_R)$, $\int_{D_R}|fg|\le\|f\|_2\|g\|_2$.

[F12] [[thm-integral-triangle-inequality]]: for any real $g\in L^1(D_R)$, $|\int_{D_R}g|\le\int_{D_R}|g|$.

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 For $z\ne z_j$, put $t_j=a/(|z-z_j|^2+a)$. Then $0<t_j<1$, $e^{u_-}=\prod_j(1-t_j)^{m_j}$, and direct radial differentiation gives $\Delta u_-=-\frac4a\sum_jm_jt_j^2+4\pi\sum_jm_j\delta_{z_j}$ distributionally. If $N>0$, let $t_*:=\max_jt_j$; then $1-e^{u_-}\ge t_*$ and $\sum_jm_jt_j^2\le Nt_*$. Hence $\Delta u_-+\kappa(1-e^{u_-})-4\pi D\ge(\kappa-4N/a)t_*\ge0$. For $N=0$, $u_-=0$ and the subsolution inequality is equality. [given, F1, algebra]

1.2 The denominator $R^2-\overline z_jz$ has no zeros on $\overline D_R$ because $|z_j|<R$. The logarithmic fundamental-solution identity and the boundary equality $R^2|z-z_j|^2=|R^2-\overline z_jz|^2$ for $|z|=R$ give $\Delta u_{s,R}=4\pi D$ and $u_{s,R}=0$ on $\partial D_R$. Consequently $A_R=e^{u_{s,R}}$ is smooth and nonnegative on $\overline D_R$, vanishes at the centers, and equals one on the boundary. Since $\Delta\psi_R=-\kappa$, the supersolution residual away from the Dirac masses is $\Delta\psi_R+\kappa(1-A_Re^{\psi_R})=-\kappa A_Re^{\psi_R}\le0$. [F1, given, algebra]

1.3 By [F10], $H^1_0(D_R;\mathbb R)$ is a real Hilbert space with the full $W^{1,2}$ inner product; [F2] gives its norm. For any $L_R>0$, [F11] and the pointwise Euclidean inequality $|\nabla v\cdot\nabla w|\le|\nabla v||\nabla w|$ give $|a(v,w)|\le(1+L_R)\|v\|_{W^{1,2}}\|w\|_{W^{1,2}}$, so the form is bounded. Also $a(v,v)\ge\min\{1,L_R\}\|v\|_{W^{1,2}}^2$, so it is coercive. For $f\in L^2(D_R)$, [F11] gives $\int|fw|\le\|f\|_2\|w\|_2$, and [F12] then gives $|\int fw|\le\|f\|_2\|w\|_2\le\|f\|_2\|w\|_{W^{1,2}}$. Thus [F3] gives a unique zero-Dirichlet weak solution of $(-\Delta+L_R)u=f$. The resolver is linear by uniqueness and positivity preserving: if $f\ge0$, then $-u$ is a weak subsolution of $(-\Delta+L_R)(-u)=-f\le0$ with zero trace, so [F4] gives $u\ge0$. [A1, F2, F3, F4, F10, F11, F12, algebra]

2.1 The lower and upper barriers have the same logarithmic singular part, so $w=u_--u_{s,R}-\psi_R$ extends continuously across every center. Their subsolution and supersolution inequalities imply $\Delta w-c_Rw\ge0$, where $c_R=\kappa\int_0^1\exp((1-t)(u_{s,R}+\psi_R)+tu_-)\,dt\ge0$, extended continuously at the centers. On $\partial D_R$, $w=u_-<0$ (and $w=0$ when $D$ is empty). Applying [F4] to $(-\Delta+c_R)w\le0$ with nonpositive boundary trace gives $w\le0$, hence $v_0=u_--u_{s,R}\le\psi_R$. [F1, F4, step 1.1, step 1.2, algebra]

3.1 Set $G_R(v)=\kappa+L_Rv-\kappa A_Re^v$ and choose $L_R\ge\kappa\max_{\overline D_R}(A_Re^{\psi_R})$. For $v\le\psi_R$, $G_R'(v)=L_R-\kappa A_Re^v\ge0$, so the iteration map $T_R=(-\Delta+L_R)^{-1}G_R$ is order preserving. The subsolution inequality from step 2.1 gives $v_0\le T_Rv_0$ and the supersolution inequality from step 1.2 gives $T_R\psi_R\le\psi_R$, by positivity of the resolver in step 1.3. Thus $v_0\le v_1\le\cdots\le\psi_R$; every iterate after $v_0$ has zero Dirichlet trace. [F3, F4, step 1.2, step 1.3, step 2.1, algebra]

4.1 The monotone iterates have a bounded pointwise limit $v_R$ on the finite disk and converge to it in $L^2(D_R)$ by dominated convergence. For functions $v,w$ with $v_0\le v,w\le\psi_R$, the pointwise mean-value formula gives $|e^v-e^w|\le e^{\psi_R}|v-w|$; hence $\|G_R(v)-G_R(w)\|_2\le(L_R+\kappa\|A_R\|_\infty e^{\max\psi_R})\|v-w\|_2$. Subtract the two resolvent equations for $T_Rv,T_Rw$ and test with $u=T_Rv-T_Rw$. The form in step 1.3 satisfies $a(u,u)\ge\min\{1,L_R\}\|u\|_{W^{1,2}}^2$, while [F11] and [F12] bound the right side by $\|G_R(v)-G_R(w)\|_2\|u\|_{W^{1,2}}$; division when $u\ne0$ (and trivially when $u=0$) gives $\|T_Rv-T_Rw\|_{W^{1,2}}\le\min\{1,L_R\}^{-1}\|G_R(v)-G_R(w)\|_2$. Therefore $T_Rv_k\to T_Rv_R$ in $H^1_0$; the shifted sequence $v_{k+1}=T_Rv_k$ has the same $L^2$ limit as $v_k$, so uniqueness of an $L^2$ limit gives $v_R=T_Rv_R$. It is a weak solution of $-\Delta v_R=\kappa(1-A_Re^{v_R})$ with zero trace. [F2, F3, F11, F12, step 1.2, step 1.3, step 3.1, algebra]

5.1 Since $v_0\le v_R\le\psi_R$ and $A_R$ is bounded on $\overline D_R$, the right-hand side in step 4.1 lies in $L^p(D_R)$ for every finite $p$. For a prescribed $0<\alpha<1$, choose $p>2/(1-\alpha)$. The disk is bounded and smooth, so [F5] gives $v_R\in W^{2,p}$; [F6] gives a $C^{1,\beta}$ representative with $\beta>\alpha$ and zero boundary values. The nonlinear right-hand side is then $C^{0,\alpha}$, and [F7] upgrades the weak solution to $C^{2,\alpha}(\overline D_R)$. Repeated local Schauder bootstrapping, using [F9], makes $v_R$ smooth in $D_R$. Setting $u_R=u_{s,R}+v_R$ proves its distributional equation and logarithmic center behavior. [A1, F5, F6, F7, F9, step 4.1, algebra]

6.1 If $u_R$ were positive somewhere, its boundary value is zero and it tends to $-\infty$ at each center, so it would attain a positive interior maximum away from the centers. There $\Delta u_R=\kappa(e^{u_R}-1)>0$ by its equation, contradicting the second-derivative test at a maximum. Thus $u_R\le0$; together with step 2.1 this gives $u_-\le u_R\le0$. [step 1.1, step 2.1, step 5.1, algebra]

7.1 Fix a disk $U=B_S(0)$ containing the centers in its interior and let $s=2\sum_jm_j\log|z-z_j|$. For every sufficiently large $R$, $w_R=u_R-s$ is smooth on $\overline U$. On $\partial U$, steps 1.1 and 6.1 give the uniform bounds $u_--s\le w_R\le-s$, whose endpoints are finite there. On $U$, $\Delta w_R=\kappa(e^s e^{w_R}-1)=\kappa(e^{u_R}-1)\in[-\kappa,0]$. A quadratic barrier $Q(z)=M+\kappa(S^2-|z|^2)/4$, with $M$ larger than the uniform boundary bound, satisfies $\Delta(w_R-Q)\ge0$ and $\Delta(-w_R-Q)\ge0$, and both differences are nonpositive on $\partial U$; the classical disk maximum principle yields $|w_R|\le Q$. [F1, step 1.1, step 5.1, step 6.1, algebra]

8.1 On any smaller compact disk $K\Subset U$, [F8] applied on finitely many nested balls and the uniform $L^\infty$ bound of step 7.1 yields uniform $W^{2,p}$ bounds for $w_R$ for every finite $p>2$, since its Laplacian is bounded. For a prescribed $0<\alpha<1$, choose $p>2/(1-\alpha)$ and then $\beta$ with $\alpha<\beta<1-2/p$; [F6] gives a uniform $C^{1,\beta}$ bound on a slightly larger compact disk. As $e^s$ is smooth and $\Delta w_R=\kappa(e^s e^{w_R}-1)$, the right-hand side has a uniform $C^{0,\alpha}$ bound there; [F9] then yields a uniform $C^{2,\alpha}$ bound on $K$. These bounds are independent of $R$ and are the local compactness estimates used for disk exhaustion. [F6, F8, F9, step 7.1, algebra] ∎
## Proof references

[Critical-model conventions (Tong, §§3.1–3.2)](https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf)

[Independent scalar existence method and decay (Chen–Yang, §§3 and 5–6)](https://arxiv.org/pdf/1203.3071)
