---
id: lem-csm-frontier-two-velocity-contraction
kind: lemma
title: Well-posedness, positivity and contraction for two-velocity transport
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-frontier-two-velocity-scaling
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - def-countable-choice
  - thm-ftc-second-part
  - lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
  - lem-exponential-series-of-a-bounded-operator
  - thm-euclidean-space-complete
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-euclidean-inner-product
  - def-operator-norm
dependency_roles:
  def-csm-frontier-two-velocity-scaling: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  thm-euclidean-space-complete: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-operator-norm: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Thomas Hillen and Amanda Swan, The Diffusion Limit of Transport Equations in Biology, Lecture Notes in Mathematics 2167, 2016"
      url: "https://www.math.ualberta.ca/~thillen/paper/HillenSwan12withStyle.pdf"
      locator: "§2.1, equations (8)–(10), for the Goldstein–Kac transport and density/flux variables; §2.2, for periodic boundary conditions."
    - title: "Thomas Hillen and Hans G. Othmer, The Diffusion Limit of Transport Equations Derived from Velocity-Jump Processes, SIAM Journal on Applied Mathematics 61(3), 2000"
      url: "https://www-users.cse.umn.edu/~othmer/papers/hill1.pdf"
      locator: "§1, equations (1.2)–(1.3), pp. 752–753, for the two-state switching equation and its conserved density/flux balance."
---

## Statement

Assume $\mathrm{AC}_\omega$. For every $\epsilon>0$, $c,\lambda,L>0$, and smooth real initial pair $(f_{+,0},f_{-,0})$ on $\mathbb T_L$, the periodic system

$$\partial_t f_+^\epsilon+\frac c\epsilon\partial_x f_+^\epsilon=\frac\lambda{\epsilon^2}(f_-^\epsilon-f_+^\epsilon),\qquad \partial_t f_-^\epsilon-\frac c\epsilon\partial_x f_-^\epsilon=\frac\lambda{\epsilon^2}(f_+^\epsilon-f_-^\epsilon),\qquad f_\pm^\epsilon(\cdot,0)=f_{\pm,0}$$

has a unique global smooth solution $(f_+^\epsilon,f_-^\epsilon)$. Its total mass $M^\epsilon(t)$ is constant. If both initial densities are nonnegative, then both evolved densities are nonnegative. For any two smooth real initial pairs $F_0,G_0$, their solutions satisfy

$$\|F^\epsilon(t)-G^\epsilon(t)\|_{2,L}^2\le \|F_0-G_0\|_{2,L}^2\qquad(t\ge0),$$

where $\|(g_+,g_-)\|_{2,L}^2:=L^{-1}\int_0^L(|g_+|^2+|g_-|^2)\,dx$. In particular, for one solution,

$$\frac{d}{dt}\|F^\epsilon(t)\|_{2,L}^2=-\frac{2\lambda}{\epsilon^2}\|f_+^\epsilon(t)-f_-^\epsilon(t)\|_{2,L}^2\le0.$$

## Statement references

[[def-csm-frontier-two-velocity-scaling]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $\epsilon,c,\lambda>0$, a period $L>0$, and the smooth real initial data and Cauchy problem in the Statement.

[A1] Assume the Axiom of Countable Choice, $\mathrm{AC}_\omega$ ([[def-countable-choice]]): every countable family of nonempty sets has a choice function.

[F1] [[def-csm-frontier-two-velocity-scaling]]: $\mathbb T_L=\mathbb R/(L\mathbb Z)$, $dm_L=dx/L$, $\kappa_n=2\pi n/L$, and the two equations have transport speeds $\pm c/\epsilon$ and switching rate $\lambda/\epsilon^2$ in each direction.

[F2] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: under $\mathrm{AC}_\omega$, the characters $y\mapsto e^{2\pi iny}$ form an orthonormal basis of complex $L^2(\mathbb R/\mathbb Z,dy)$ and Parseval's identity holds. The change of variable $y=x/L$ preserves normalized measure and carries these characters to $e_n(x)$, so the same coefficient expansion and Parseval identity hold on $\mathbb T_L$ with $dm_L$.

[F3] [[thm-ftc-second-part]]: for a differentiable function $G$ on a closed interval with integrable derivative, $\int_a^b G'(x)\,dx=G(b)-G(a)$. For periodic $C^1$ functions on $[0,L]$, the right side is zero.

[F4] [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]: for every compact interval $I$, continuous real matrix field $C$ on $I$, and initial time $t_0\in I$, the real linear matrix IVP $Y'=C(t)Y$ has a unique solution on all of $I$.

[F5] [[lem-exponential-series-of-a-bounded-operator]]: on a real or complex Banach space, a bounded operator $A$ has an operator-norm convergent exponential series $E(t)=\sum_{m\ge0}t^mA^m/m!$; $E'(t)=AE(t)$ and $\|E(t)-I-tA\|\le\tfrac12t^2\|A\|^2e^{|t|\|A\|}$.

[F6] [[thm-euclidean-space-complete]]: for every integer $n\ge1$, $\mathbb R^n$ with its Euclidean metric is complete; in particular $\mathbb R^4$ with the Euclidean norm is a Banach space.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: on $\mathbb R^4$, $|x\cdot y|\le\|x\|_2\|y\|_2$ and $\|\cdot\|_2$ is the Euclidean norm.

[F8] [[def-euclidean-inner-product]]: on $\mathbb R^4$, $x\cdot y=\sum_{j=1}^4x_jy_j$ and $\|x\|_2=(x\cdot x)^{1/2}$.

[F9] [[def-operator-norm]]: for a bounded linear map $A$ on a normed space, $\|A\|=\sup_{\|x\|\le1}\|Ax\|$ and $\|Ax\|\le\|A\|\|x\|$.

## Proof

**Given:** [A1], [F1]–[F3], and the initial data of the Statement.

**Proof technique:** direct.

1.1 For $n\in\mathbb Z$, put $U_n=(\widehat f_+^\epsilon(n),\widehat f_-^\epsilon(n))^{\mathsf T}$, $v=c/\epsilon$, and $\alpha=\lambda/\epsilon^2$. Integrating by parts in the real and imaginary parts separately, using [F3], gives $U_n'=M_nU_n$, with $M_n=\begin{pmatrix}-i\kappa_n v-\alpha&\alpha\\ \alpha&i\kappa_n v-\alpha\end{pmatrix}$. Realify $z\in\mathbb C^2$ by $\mathcal Rz=(\operatorname{Re}z_1,\operatorname{Re}z_2,\operatorname{Im}z_1,\operatorname{Im}z_2)\in\mathbb R^4$, and for $M=P+iQ$ put $\mathcal RM=\begin{pmatrix}P&-Q\\Q&P\end{pmatrix}$. Direct coordinate multiplication gives $\mathcal R(Mz)=(\mathcal RM)\mathcal Rz$ and $|\mathcal Rz|_2^2=|z_1|^2+|z_2|^2$. By [F6], $\mathbb R^4$ is Banach; [F7] applied rowwise bounds $\mathcal RM_n$ as an operator, and [F8]–[F9] specify the Euclidean and operator norms. Hence [F5] makes $t\mapsto e^{t\mathcal RM_n}\mathcal RU_n(0)$ a solution of the realified constant-matrix IVP; [F4] gives uniqueness on each compact interval $[0,T]$, so these compatible solutions define the unique global complex Fourier mode solution after pulling back by $\mathcal R$. Since real initial data satisfy $U_{-n}(0)=\overline{U_n(0)}$ and $M_{-n}=\overline{M_n}$, uniqueness gives $U_{-n}(t)=\overline{U_n(t)}$, so the reconstructed Fourier series is real. The skew-Hermitian transport part contributes zero to the derivative of $|U_n|^2$, and direct multiplication of the collision matrix gives $(|U_n|^2)'=-2\alpha|\widehat f_+^\epsilon(n)-\widehat f_-^\epsilon(n)|^2\le0$. For every integer $r\ge0$ and every integer $q>r+1$, repeated integration by parts gives $|\widehat f_{\pm,0}(n)|\le |\kappa_n|^{-q}\|\partial_x^q f_{\pm,0}\|_{L^1(dm_L)}$ for $n\ne0$; grouping $2^j\le |n|<2^{j+1}$ shows $\sum_n(1+|\kappa_n|)^r|U_n(0)|<\infty$. The mode bound preserves these summable tails, and $M_n$ grows at most linearly in $|n|$, so the Fourier series and every space-time derivative converge uniformly on compact time intervals. They define a global smooth solution of the Cauchy problem. Any other smooth solution has the same mode ODEs and initial coefficients; [A1] and [F2] then make it identical. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, given, algebra]

1.2 Put $F_0=(f_{+,0},f_{-,0})$. For $h\ge0$, free transport $T_h(g_+,g_-):=(g_+(\cdot-vh),g_-(\cdot+vh))$ preserves nonnegativity and pair norm. It preserves each component mass because a change of variable turns its integral into an integral of a smooth periodic function over another full period, which is unchanged by [F3]. The pointwise collision operator $C_h$ is the matrix $\frac12\begin{pmatrix}1+e^{-2\alpha h}&1-e^{-2\alpha h}\\1-e^{-2\alpha h}&1+e^{-2\alpha h}\end{pmatrix}$. Its entries are nonnegative and its column sums are one. The orthonormal vectors $(1,1)/\sqrt2$ and $(1,-1)/\sqrt2$ have eigenvalues $1$ and $e^{-2\alpha h}\in[0,1]$, so $C_h$ preserves nonnegativity and total mass and contracts the pair norm pointwise, hence in pair $L^2$. Thus the alternating products $(T_{t/m}C_{t/m})^mF_0$ are nonnegative when $F_0$ is and are $L^2$ contractions. [F1, F3, algebra]

1.3 Fix a Fourier mode $k\in\mathbb Z$ and let $A_k=\operatorname{diag}(-i\kappa_kv,i\kappa_kv)$ and $B=\alpha\begin{pmatrix}-1&1\\1&-1\end{pmatrix}$. Under the realification of step 1.1, their generators are real $4\times4$ matrices $\widetilde A_k=\mathcal R(A_k)$ and $\widetilde B=\mathcal R(B)$. Transport on this mode is $e^{\widetilde A_kh}$, and collision is $e^{\widetilde Bh}$ because the eigenvectors and eigenvalues in step 1.2 diagonalize $B$. By [F6], $\mathbb R^4$ with its Euclidean norm is Banach; applying [F7] rowwise bounds every real matrix as an operator, and [F8]–[F9] give the Euclidean and operator norms used in [F5]. For $X\in\{\widetilde A_k,\widetilde B,\widetilde A_k+\widetilde B\}$, [F5] gives $e^{Xh}=I+hX+R_X(h)$ with $\|R_X(h)\|\le K_Xh^2$ on $0\le h\le t$, where $K_X:=\tfrac12\|X\|^2e^{t\|X\|}$. Multiplying the first two expansions and subtracting the third shows $\|e^{\widetilde A_kh}e^{\widetilde Bh}-e^{(\widetilde A_k+\widetilde B)h}\|\le C_{k,\epsilon,t}h^2$, where one may take $C_{k,\epsilon,t}=\|\widetilde A_k\|\|\widetilde B\|+K_{\widetilde A_k}+K_{\widetilde B}+K_{\widetilde A_k+\widetilde B}+t(\|\widetilde A_k\|K_{\widetilde B}+\|\widetilde B\|K_{\widetilde A_k})+t^2K_{\widetilde A_k}K_{\widetilde B}$. All factors are contractions: the split factors by step 1.2, and the exact mode evolution by the energy identity in step 1.1. Telescoping the $m$-fold products with $h=t/m$ bounds the error by $mC_{k,\epsilon,t}(t/m)^2=C_{k,\epsilon,t}t^2/m$, so the split evolution converges to the exact solution in each fixed mode. [F5, F6, F7, F8, F9, step 1.1, step 1.2, algebra]

1.4 For a finite set of modes, step 1.3 gives convergence of the split evolution to the exact solution. Let $P_{>K}$ be the Fourier projection onto $|k|>K$, applied componentwise. Its initial pair tail tends to zero by [A1] and [F2]. Every split product preserves modes and contracts this tail by step 1.2. The exact evolution also preserves modes; applying the mode energy identity in step 1.1 and summing by Parseval [F2] shows it contracts the same tail. Hence the split products converge in pair $L^2$ to the solution from step 1.1. [A1, F2, step 1.1, step 1.2, step 1.3, algebra]

1.5 The nonnegative cone is closed in real $L^2$: if $g_m\ge0$ and $g_m\to g$, then pointwise $g^-\le|g-g_m|$, so $\|g^-\|_2\le\|g-g_m\|_2\to0$. Since the split products are nonnegative by step 1.2 and converge by step 1.4, the exact solution is nonnegative. [step 1.2, step 1.4, algebra]

1.6 The zero mode in the equations of [F1] satisfies $(\widehat f_+(0)+\widehat f_-(0))'=0$, since the switching terms cancel and the transport frequency is zero. As $M^\epsilon(t)=L(\widehat f_+^\epsilon(0,t)+\widehat f_-^\epsilon(0,t))$, this proves total-mass conservation. [F1, step 1.1, algebra]

2.1 Under [A1], apply the mode identity in step 1.1 to the difference of two solutions; summing over $n$ by Parseval [F2] gives the stated contraction. Step 1.1 gives uniform convergence of the solution and time-derivative Fourier series, so termwise differentiation of Parseval's sum is valid. Applying the same sum to one solution gives $\frac{d}{dt}\|F^\epsilon(t)\|_{2,L}^2=-2\alpha\|f_+^\epsilon(t)-f_-^\epsilon(t)\|_{2,L}^2$, which is the displayed dissipation identity because $\alpha=\lambda/\epsilon^2$. [A1, F2, step 1.1, algebra] ∎
