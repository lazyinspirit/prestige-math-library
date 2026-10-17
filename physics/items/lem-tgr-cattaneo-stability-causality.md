---
id: lem-tgr-cattaneo-stability-causality
kind: lemma
title: "Fixed-coefficient Cattaneo entropy and propagation"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-countable-choice
  - def-schwartz-space-and-its-seminorms
  - lem-tgr-constant-linear-energy-causality
dependency_roles:
  def-countable-choice: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  lem-tgr-constant-linear-energy-causality: mathematical-premise
justified_by: []
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "N. Andersson and G. L. Comer, Variational multifluid dynamics and causal heat conductivity, arXiv:0908.1707v1"
      url: "https://arxiv.org/pdf/0908.1707"
      locator: "Full 15-page paper; §4 equations (4.2)–(4.12), especially the linearized constant-parameter Cattaneo equation."
    - title: "N. Andersson and G. L. Comer, Heat conduction in rotating relativistic stars, arXiv:1804.01520v1"
      url: "https://arxiv.org/pdf/1804.01520"
      locator: "Full 13-page paper; §2.1 equations (1)–(3), Fourier diffusion, Cattaneo relaxation, and the telegrapher equation."
---

## Statement

Let $C,\kappa,\tau,T_0,L>0$. Let $\Omega$ be either $\mathbb R^3$ or the flat torus $\mathbb T_L^3:=(\mathbb R/L\mathbb Z)^3$, and let $I\subseteq\mathbb R$ be an open interval containing $0$. Consider real smooth fields $\theta:I\times\Omega\to\mathbb R$ and $q:I\times\Omega\to\mathbb R^3$ satisfying

$$C\theta_t+\operatorname{div}q=0,\qquad \tau q_t+q=-\kappa\nabla\theta.$$

The derivatives are ordinary derivatives of the Euclidean spatial coordinates; on the torus they are defined using periodic lifts. Write $U=(\theta,q)$ and let $e_j$ be the $j$th standard basis vector of $\mathbb R^3$. Define

$$A_j:=\begin{pmatrix}0&e_j^{\mathsf T}/C\\(\kappa/\tau)e_j&0_{3\times3}\end{pmatrix},\qquad B:=\operatorname{diag}(0,(1/\tau)I_3),\qquad M:=\operatorname{diag}(C,(\tau/\kappa)I_3).$$

Then the displayed system is $U_t+\sum_{j=1}^3A_j\partial_jU+BU=0$. The matrix $M$ is a positive symmetrizer, meaning $M=M^{\mathsf T}$ is positive definite and $MA_j$ is symmetric for each $j$. For a unit direction $\nu\in\mathbb R^3$, define the principal matrix $A(\nu):=\sum_{j=1}^3\nu_jA_j$; its eigenvalues are $0$ (multiplicity two) and $\pm v_h$, where $v_h:=\sqrt{\kappa/(C\tau)}>0$. For a fixed comparison speed $c_*>0$, $v_h\le c_*$ if and only if $\kappa\le C\tau c_*^2$.

For every such solution and every $s_0\in\mathbb R$, define the specified quadratic effective entropy density and flux by

$$s_{\rm eff}:=s_0+\frac{C\theta}{T_0}-\frac{C\theta^2}{2T_0^2}-\frac{\tau|q|^2}{2\kappa T_0^2},\qquad j_s:=\frac{q}{T_0}-\frac{\theta q}{T_0^2}.$$

Every smooth solution satisfies the exact identities

$$\partial_t s_{\rm eff}+\operatorname{div}j_s=\frac{|q|^2}{\kappa T_0^2}\ge0,\qquad \partial_t e_L+\operatorname{div}(\theta q)=-\frac{|q|^2}{\kappa},\qquad e_L:=\frac12\left(C\theta^2+\frac{\tau}{\kappa}|q|^2\right).$$

For every unit direction $\nu$, its quadratic flux satisfies $|\theta q\cdot\nu|\le v_h e_L$. The density $e_L$ is a positive quadratic Lyapunov density, not a physical energy density. The entropy identity asserts nonnegative production for this specified quadratic effective current; it does not assert positivity of $s_{\rm eff}$ for arbitrary data or a nonlinear material entropy law. These equations define the mathematical subsystem considered here; the sources give model context and do not establish a material-specific realization.

Use the exact global-solution, Fourier-coefficient, and weighted-norm conventions in [F1]. For initial data $U_0=(\theta_0,q_0)\in\mathcal S(\mathbb R^3;\mathbb R^4)$ or $C^\infty(\mathbb T_L^3;\mathbb R^4)$, the unique global smooth evolution, its weighted Sobolev contraction, and finite propagation at speed $v_h$ follow conditionally from [F1] after checking the matrices below. On $\mathbb T_L^3$, for every integer $r>3/2$, set

$$K_{r,L,C}:=C^{-1/2}\left(\sum_{k\in\mathbb Z^3}(1+|k/L|^2)^{-r}\right)^{1/2}<\infty,$$

where $C>0$ is the heat-capacity coefficient and $\|\cdot\|_{H^r_M(\mathbb T_L^3)}$ is the norm in [F1]. The periodic global solution supplied conditionally by [F1] obeys $T_0+\theta(t,x)>0$ for all $t\ge0$ whenever $K_{r,L,C}\|U_0\|_{H^r_M(\mathbb T_L^3)}<T_0$. The constant uses only the temperature component $C|\widehat\theta_k|^2$ of the supplied quadratic norm, so it does not compare heat-flux and temperature coordinates by a least eigenvalue. Although [F1] states a generic periodic supremum bound with unspecified constant $C_{s,L,M}$, the explicit $K_{r,L,C}$ bound here is derived directly from Fourier reconstruction and the stated norm contraction.

If the symbols receive their conventional SI thermal interpretation, take $\theta,T_0$ in K, $C$ in J m$^{-3}$ K$^{-1}$, $\kappa$ in W m$^{-1}$ K$^{-1}$, $\tau$ in s, $L$ in m, $q$ in W m$^{-2}$, and the comparison speed $c_*$ in m s$^{-1}$. Use the spatial coordinates in the inherited Fourier norms as their numerical values in metres, so the unit-frequency term in $1+|k/L|^2$ uses the reference length $1$ m. Then $s_0$ and $s_{\rm eff}$ have entropy-density units J m$^{-3}$ K$^{-1}$, $j_s$ has entropy-flux units J m$^{-2}$ s$^{-1}$ K$^{-1}$, and $e_L$ has units J K m$^{-3}$ rather than energy-density units. The norm $\|U\|_{H^r_M}$ has units $\sqrt{\mathrm{J\,K\,m^{-3}}}$ and $K_{r,L,C}$ has units $\sqrt{\mathrm{m^3\,K/J}}$, so their product has temperature units. These unit labels do not assert a physical realization of the linear subsystem.

## Facts & Assumptions

**Given:** Positive constants $C,\kappa,\tau,T_0,L$, an open time interval $I$ containing $0$, a smooth solution of the displayed system on $I$, and the stated spatial setting. For the conditional global-evolution clause, take $U_0$ in the stated Schwartz or smooth-periodic data class.

[F1] Conditional evolution supplier [[lem-tgr-constant-linear-energy-causality]]: assume $\mathrm{AC}_\omega$, an integer $d\ge1$, $U:\mathbb R\times\mathbb R^3\to\mathbb R^d$, and constant real matrices $A_1,A_2,A_3,B,M\in\mathbb R^{d\times d}$ with $M=M^{\mathsf T}$ positive definite, each $MA_j$ symmetric, and $S:=(MB+B^{\mathsf T}M)/2$ positive semidefinite. For $U_t+\sum_jA_j\partial_jU+BU=0$, the supplier gives a unique global smooth solution for Schwartz data on $\mathbb R^3$ and smooth periodic data on $\mathbb T_L^3$. Its negative-sign, $2\pi$-normalized Fourier transform is $\widehat U(\xi):=\int_{\mathbb R^3}e^{-2\pi i x\cdot\xi}U(x)\,dx$, and $\|U\|_{H^s_M}^2:=\int_{\mathbb R^3}(1+|\xi|^2)^s\widehat U(\xi)^*M\widehat U(\xi)\,d\xi$ contracts for every $s\ge0$ and $t\ge0$. On the torus, with $\widehat U_k:=L^{-3}\int_{[0,L]^3}U(x)e^{-2\pi i k\cdot x/L}\,dx$, $\|U\|_{H^s_M(\mathbb T_L^3)}^2:=\sum_{k\in\mathbb Z^3}(1+|k/L|^2)^s\widehat U_k^*M\widehat U_k$ also contracts. Its finite propagation speed is $v_*:=\sup_{|\nu|=1}\max\{|\lambda|:\lambda\in\operatorname{spec}(M^{1/2}A(\nu)M^{-1/2})\}$: if $v_*>0$, $R>v_*t$, and $U_0$ vanishes on $B_R(x_0)$, then $U(t)$ vanishes on $B_{R-v_*t}(x_0)$ for $0\le t<R/v_*$, with the same result on $\mathbb T_L^3$ using geodesic distance; if $v_*=0$, every $A_j=0$. The current carrier and proof are draft; this exact interface is used conditionally.

[A1] [[def-countable-choice]] defines $\mathrm{AC}_\omega$ as a choice function for each countable family of nonempty sets. This is the only choice strength used through [F1].

[F2] [[def-schwartz-space-and-its-seminorms]]: $\mathcal S(\mathbb R^3)$ consists of smooth complex-valued functions for which every seminorm $\sup_{x\in\mathbb R^3}|x^\alpha\partial^\beta f(x)|$ is finite; real components are viewed as complex-valued functions with zero imaginary part, and this condition is imposed componentwise on $\mathbb R^4$-valued data.

## Proof

1.1 Differentiate the first system equation in time and take the divergence of the second. Substituting $\operatorname{div}q=-C\theta_t$ gives $C\tau\theta_{tt}+C\theta_t-\kappa\Delta\theta=0$, or $\tau\theta_{tt}+\theta_t-(\kappa/C)\Delta\theta=0$. [given, algebra]

1.2 Expanding the derivative of $s_{\rm eff}$ and the divergence of $j_s$ gives $\partial_t s_{\rm eff}+\operatorname{div}j_s=\frac{C\theta_t+\operatorname{div}q}{T_0}-\frac{\theta(C\theta_t+\operatorname{div}q)+q\cdot(\tau q_t+\kappa\nabla\theta)/\kappa}{T_0^2}$. The first equation makes both occurrences of $C\theta_t+\operatorname{div}q$ zero, and the second gives $\tau q_t+\kappa\nabla\theta=-q$. Thus the expression equals $|q|^2/(\kappa T_0^2)$. [given, algebra]

1.3 Differentiating $e_L$ and adding the flux divergence gives $\partial_t e_L+\operatorname{div}(\theta q)=\theta(C\theta_t+\operatorname{div}q)+q\cdot\left(\frac{\tau}{\kappa}q_t+\nabla\theta\right)=-\frac{|q|^2}{\kappa}$, where the first term vanishes by the energy equation and the second equality uses the Cattaneo equation. Since $C,\tau,\kappa>0$, $e_L$ is a positive definite quadratic form in $(\theta,q)$. [given, algebra]

1.4 Write $U=(\theta,q)$, $e_j$ for the $j$th standard basis vector of $\mathbb R^3$, $A_j=\begin{pmatrix}0&e_j^{\mathsf T}/C\\(\kappa/\tau)e_j&0_{3\times3}\end{pmatrix}$, and $B=\operatorname{diag}(0,(1/\tau)I_3)$. With $M=\operatorname{diag}(C,(\tau/\kappa)I_3)$, $MA_j=\begin{pmatrix}0&e_j^{\mathsf T}\\e_j&0_{3\times3}\end{pmatrix}$ is symmetric, $M$ is positive definite, and $S=(MB+B^{\mathsf T}M)/2=\operatorname{diag}(0,(1/\kappa)I_3)$ is positive semidefinite. For each unit $\nu$, the longitudinal block of $A(\nu)$ has eigenvalues solving $\lambda^2=\kappa/(C\tau)$ and the two transverse eigenvalues are zero. Since $M$ is positive definite, $M^{1/2}$ is invertible and the supplier's matrix $M^{1/2}A(\nu)M^{-1/2}$ is similar to $A(\nu)$, so it has the same eigenvalues and maximum absolute eigenvalue $v_h=\sqrt{\kappa/(C\tau)}$. Finally, $|\theta q\cdot\nu|\le |\theta||q|\le \tfrac12\sqrt{\kappa/(C\tau)}(C\theta^2+(\tau/\kappa)|q|^2)=v_h e_L$, since $2\sqrt{C\tau/\kappa}|\theta||q|\le C\theta^2+(\tau/\kappa)|q|^2$. [given, algebra]

2.1 Fix a periodic solution from [F1]. For $k\ne0$, choose a coordinate $j$ with $|k_j|\ge |k|/\sqrt3$; periodic integration by parts $N$ times and $|\widehat{\partial_j^N U}_k|\le\sup_x|\partial_j^N U(t,x)|$ give $|\widehat U_k(t)|\le C_{N,t,L}(1+|k|)^{-N}$. For each integer $n\ge1$, the disjoint unit cubes centered at lattice points with $n\le|k|<n+1$ lie in an annulus of bounded extra width and volume $O((n+1)^2)$, so the shell has $O((n+1)^2)$ points. Hence $\sum_k(1+|k|)^{-N}<\infty$ for $N>3$, and the Fourier series converges absolutely and uniformly. To identify its sum with $U$, use the product Fejer kernel: in one dimension the normalized kernel is $F_N(y)=\frac1{L(N+1)}|\sum_{\ell=0}^N e^{2\pi i\ell y/L}|^2$. It is nonnegative with integral one, and for torus distance $|y|\ge\delta$ with $0<\delta<L/2$, the geometric-sum formula bounds it by $[L(N+1)\sin^2(\pi\delta/L)]^{-1}$. For the three-dimensional product, the mass outside the cube of coordinate distances less than $\delta$ is bounded by the sum of the three one-dimensional tail masses, hence tends to zero. Uniform continuity of $U(t,\cdot)$ then shows that convolution with these kernels converges uniformly to $U(t,\cdot)$. The convolutions are finite Fourier sums with weights $\prod_{j=1}^3(1-|k_j|/(N+1))_+$; absolute convergence makes the same sums converge uniformly to $\sum_k\widehat U_k(t)e^{2\pi i k\cdot x/L}$. Thus this series equals $U(t,x)$. [F1, step 1.4, algebra]

2.2 The matrices in step 1.4 have four components, positive-definite $M$, symmetric $MA_j$, and $S\ge0$, so they satisfy [F1]'s hypotheses under [A1]. The data class in the Statement is exactly the Schwartz/periodic class in [F1], using the componentwise Schwartz definition in [F2]. The eigenvalue computation in step 1.4 gives $v_*=v_h>0$. Applying [F1] therefore supplies the unique global smooth evolution for each stated data class, contraction of every stated weighted Sobolev norm for $t\ge0$, and the shrinking-ball finite-propagation conclusion at speed $v_h$ on $\mathbb R^3$ and on $\mathbb T_L^3$. [F1, A1, F2, step 1.4]

3.1 The same shell count in step 2.1 shows the lattice sum in $K_{r,L,C}$ converges: its shell contribution is $O((j+1)^{2-2r})$, summable for $r>3/2$. Set $a_k:=(1+|k/L|^2)^{-r/2}$ and $b_k:=(1+|k/L|^2)^{r/2}\sqrt C\,|\widehat\theta_k(t)|$. For each finite Fourier box, expanding $\sum_k(a_k-\lambda b_k)^2\ge0$ and minimizing over $\lambda\in\mathbb R$ gives $(\sum_k a_kb_k)^2\le(\sum_k a_k^2)(\sum_k b_k^2)$, with the zero-$b$ case immediate; increasing boxes and taking monotone limits gives the same inequality for the series. The explicit diagonal matrix $M=\operatorname{diag}(C,(\tau/\kappa)I_3)$ gives $C|\widehat\theta_k(t)|^2\le\widehat U_k(t)^*M\widehat U_k(t)$ for every $k$. Therefore $|\theta(t,x)|\le\sum_k|\widehat\theta_k(t)|\le K_{r,L,C}\|U(t)\|_{H^r_M(\mathbb T_L^3)}\le K_{r,L,C}\|U_0\|_{H^r_M(\mathbb T_L^3)}$, where the Fourier reconstruction is justified in step 2.1 and the last inequality is [F1] contraction. If the last quantity is less than $T_0$, then $T_0+\theta(t,x)>0$ for every $x$ and $t\ge0$. [F1, step 2.2, step 2.1, algebra]

4.1 Since $C,\kappa,\tau,c_*>0$, squaring the positive quantities in $v_h\le c_*$ gives the equivalent condition $\kappa\le C\tau c_*^2$, and reversing the same steps proves the converse. [given, step 1.4, algebra] ∎
