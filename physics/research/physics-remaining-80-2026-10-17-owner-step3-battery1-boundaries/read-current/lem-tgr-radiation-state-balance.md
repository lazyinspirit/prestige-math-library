---
id: lem-tgr-radiation-state-balance
kind: lemma
title: "Radiation Gibbs and perfect linear sound deduction"
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
  - def-tgr-entropy-only-radiation-state
  - def-schwartz-space-and-its-seminorms
  - def-countable-choice
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - lem-tgr-constant-linear-energy-causality
dependency_roles:
  def-tgr-entropy-only-radiation-state: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  lem-tgr-constant-linear-energy-causality: mathematical-premise
justified_by: []
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full lecture notes; §4.3 equations (4.10)–(4.14), §5.2 equation (5.4), and §5.3 equations (5.5)–(5.9): state differentials, perfect-stress divergence, and energy projection."
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (2022)"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics22/Hydrodynamics2022.pdf"
      locator: "Full lecture notes; Chapter X.3.2, equations (X.22) and its proof, and §XI.2, printed pp. 170–171 (PDF pp. 178–179), equations (XI.17)–(XI.19) and the following temperature/entropy scaling discussion."
---

## Statement

Fix $a_R>0$ and the maps of [[def-tgr-entropy-only-radiation-state]]. First, their temperature and entropy coordinates are inverse, $d\varepsilon_T=T\,ds_T$, $h_T=T s_T$, and $dp_T/d\varepsilon_T=1/3$ on $T>0$.

Next, assume countable choice $\mathrm{AC}_\omega$. Let $M$ be a smooth four-manifold without boundary and let $g$ be a smooth symmetric nondegenerate covariant $2$-tensor field of signature $(-,+,+,+)$. Write $g^{ab}$ for the inverse-metric components and $u_b:=g_{bc}u^c$. Use the Levi-Civita connection supplied by [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. Let $c>0$, let $u$ be a smooth vector field with $g_{ab}u^au^b=-c^2$, and let $T:M\to(0,\infty)$ be smooth. Put $\varepsilon=\varepsilon_T(T)$, $p=p_T(T)$, $s=s_T(T)$, and $h=\varepsilon+p$. Define the symmetric tensor field

$$\mathsf T^{ab}:=\frac{h}{c^2}u^au^b+p g^{ab}.$$

If $\nabla_a\mathsf T^{ab}=0$, then $\nabla_a(su^a)=0$. This is a conditional mathematical identity for the specified tensor and state maps; it assumes no particle-number current.

Finally, on $\mathbb R^4$ with Minkowski coordinates $(x^0,x^1,x^2,x^3)=(ct,x)$ and metric $\eta=\operatorname{diag}(-1,1,1,1)$, specify the linearization as follows. For some $\epsilon>0$, let $\lambda\mapsto(T_\lambda,u_\lambda)$ be jointly smooth on $(-\epsilon,\epsilon)\times\mathbb R^4$, with $T_\lambda(x)>0$, $T_{0}(x)=T_*$, $u_{0}=(c,0,0,0)$, and $\eta_{ab}u_\lambda^au_\lambda^b=-c^2$. Form $\mathsf T_\lambda^{ab}$ by the same stress formula above with $(T,u,g)$ replaced by $(T_\lambda,u_\lambda,\eta)$, using $\varepsilon_\lambda:=\varepsilon_T(T_\lambda)$ and $p_\lambda:=p_T(T_\lambda)$. Write $\delta f:=\left.\frac{d}{d\lambda}f_\lambda\right|_{\lambda=0}$; the linearized equation means $\delta(\partial_a\mathsf T_\lambda^{ab})=0$. Put $h_*:=\varepsilon_T(T_*)+p_T(T_*)$, $r:=\delta\varepsilon$, and $w^i:=\delta u^i/c$. Its resulting constant-coefficient linear system is

$$r_t+c h_*\operatorname{div}w=0,\qquad w_t+\frac{c}{3h_*}\nabla r=0,$$

where $\nabla$ and $\operatorname{div}$ are the Euclidean spatial gradient and divergence. With $U=(r,w)$, write this system as $U_t+\sum_{j=1}^3A_j\partial_jU=0$, where

$$A_j:=c\begin{pmatrix}0&h_*e_j^{\mathsf T}\\(1/(3h_*))e_j&0_{3\times3}\end{pmatrix},\qquad e_j\text{ is the }j\text{th standard basis vector of }\mathbb R^3.$$

The matrix $M_*:=\operatorname{diag}(1/(3h_*),h_* I_3)$ is a positive symmetrizer in the explicit sense that it is symmetric positive definite and $M_*A_j$ is symmetric for each $j$. For each unit spatial vector $\nu\in\mathbb R^3$, define the directional coefficient matrix $A(\nu):=\sum_{j=1}^3\nu_jA_j$; its eigenvalues are $0$ (multiplicity two) and $\pm c/\sqrt3$. For Schwartz initial perturbations on $\mathbb R^3$ or smooth periodic initial perturbations on $\mathbb T_L^3$ with $L>0$, where Schwartz means each component belongs to $\mathcal S(\mathbb R^3)$ as defined in [[def-schwartz-space-and-its-seminorms]], the global smooth evolution, weighted Sobolev contraction, and finite-propagation conclusions are conditional on the exact symmetrized-system interface of [[lem-tgr-constant-linear-energy-causality]] stated in [A1]. That current carrier is draft, so this item does not record those conclusions as independently accepted.

## Facts & Assumptions

**Given:** $a_R>0$, $T>0$, and the smooth fields and tensor equation in the Statement. Assume $\mathrm{AC}_\omega$ where indicated; no stronger choice principle is used.

[F1] [[def-tgr-entropy-only-radiation-state]] defines $\varepsilon_T=a_RT^4$, $p_T=\varepsilon_T/3$, $s_T=4a_RT^3/3$, and the candidate entropy-coordinate maps $\tau(s)=(3s/(4a_R))^{1/3}$, $\varepsilon_s=a_R\tau^4$, $p_s=\varepsilon_s/3$.

[F2] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: for a smooth four-manifold without boundary, smooth symmetric nondegenerate metric, and $\mathrm{AC}_\omega$, there is a unique torsion-free metric-compatible connection; its induced tensor derivative obeys the Leibniz and contraction rules and annihilates $g$ and $g^{-1}$. We use metric compatibility and the Leibniz rule only.

[F3] [[def-schwartz-space-and-its-seminorms]]: $\mathcal S(\mathbb R^3)$ is the class of smooth complex-valued functions for which every seminorm $\sup_x|x^\alpha\partial^\beta f(x)|$ is finite; real components are viewed as complex-valued functions with zero imaginary part, and the condition is imposed componentwise on vector-valued data.

[A1] Conditional evolution supplier [[lem-tgr-constant-linear-energy-causality]]: assume $\mathrm{AC}_\omega$, $m\ge1$, constant real matrices $A_1,A_2,A_3,B,M\in\mathbb R^{m\times m}$, symmetric positive-definite $M$, symmetric $MA_j$, and positive-semidefinite $S:=(MB+B^{\mathsf T}M)/2$. For $U_t+\sum_jA_j\partial_jU+BU=0$, the supplier gives a unique global smooth solution for Schwartz initial data on $\mathbb R^3$ and for smooth periodic data on $\mathbb T_L^3$. With its negative-sign, $2\pi$-normalized Fourier transform $\widehat U(\xi):=\int_{\mathbb R^3}e^{-2\pi i x\cdot\xi}U(x)\,dx$, its Euclidean weighted norms are $\|U\|_{H^s_M}^2:=\int_{\mathbb R^3}(1+|\xi|^2)^s\widehat U(\xi)^*M\widehat U(\xi)\,d\xi$ for $s\ge0$; they contract for $t\ge0$. On the torus, $\widehat U_k:=L^{-3}\int_{[0,L]^3}U(x)e^{-2\pi i k\cdot x/L}\,dx$ and $\|U\|_{H^s_M(\mathbb T_L^3)}^2:=\sum_{k\in\mathbb Z^3}(1+|k/L|^2)^s\widehat U_k^*M\widehat U_k$; these norms contract. For a unit $\nu\in\mathbb R^3$, put $A(\nu)=\sum_j\nu_jA_j$ and $v_*:=\sup_{|\nu|=1}\max\{|\lambda|:\lambda\in\operatorname{spec}(M^{1/2}A(\nu)M^{-1/2})\}$. If $v_*>0$, $R>v_*t$, and $U_0$ vanishes on $B_R(x_0)$, its solution vanishes on $B_{R-v_*t}(x_0)$ for $0\le t<R/v_*$, with the analogous torus statement using geodesic distance; if $v_*=0$, each $A_j=0$. Here $m=4$, $U=(r,w)$, $B=0$, and $M=M_*$. The current supplier carrier and proof are draft; this item uses its interface only conditionally.

[A2] [[def-countable-choice]] defines $\mathrm{AC}_\omega$ as a choice function for each countable family of nonempty sets. This is the only choice strength carried here, through [F2] and [A1].

## Proof

1.1 Differentiating the maps in [F1] gives $\varepsilon_T'(T)=4a_RT^3=T s_T'(T)$ and $s_T'(T)=4a_RT^2>0$. For $T>0$ and $s>0$, direct substitution gives $\tau(s_T(T))=T$ and $s_T(\tau(s))=s$, since $3s_T(T)/(4a_R)=T^3$ and $\tau(s)^3=3s/(4a_R)$. Hence the explicitly defined $\varepsilon_s,p_s$ are the energy and pressure expressed in the entropy coordinate, and $d\varepsilon_T=T\,ds_T$. [given, F1, algebra]

1.2 Write $D:=u^a\nabla_a$ and $\theta:=\nabla_a u^a$. Metric compatibility and $u_bu^b=-c^2$ give $u^a u_b\nabla_a u^b=\tfrac12u^a\nabla_a(u_bu^b)=0$. Expanding the divergence by the Leibniz rule and contracting with $u_b$ yields $u_b\nabla_a\mathsf T^{ab}=\frac{u_bu^b}{c^2}\nabla_a(hu^a)+\frac{h}{c^2}u^a u_b\nabla_a u^b+u^a\nabla_a p=-Dh-h\theta+Dp=-D\varepsilon-h\theta$. The last pressure term uses $\nabla_a g^{ab}=0$ and $u_b g^{ab}=u^a$. Thus the assumed tensor equation implies $D\varepsilon+h\theta=0$. [given, F2, algebra]

2.1 From [F1], $h_T=\varepsilon_T+p_T=\tfrac43a_RT^4=T s_T$, and $dp_T/d\varepsilon_T=p_T'(T)/\varepsilon_T'(T)=1/3$. In particular $h_T>0$ for all $T>0$. [given, F1, step 1.1, algebra]

3.1 By step 1.1 and the chain rule, $D\varepsilon=T Ds$; by step 2.1, $h=Ts$. Substitution in step 1.2 gives $0=T(Ds+s\theta)=T\nabla_a(su^a)$. Since $T>0$, division gives $\nabla_a(su^a)=0$. [step 1.1, step 2.1, step 1.2, algebra]

3.2 By the linearization definition in the Statement, differentiating $\eta_{ab}u_\lambda^au_\lambda^b=-c^2$ at $\lambda=0$ gives $-2c\,\delta u^0=0$, so $\delta u^0=0$; also $\delta u^i=cw^i$. Since $r=\delta\varepsilon$ and step 2.1 gives $dp_T/d\varepsilon_T=1/3$, the state variations satisfy $\delta p=r/3$ and $\delta h=r+\delta p$. The first variations of the stress components are therefore $\delta\mathsf T^{00}=\delta h-\delta p=r$, $\delta\mathsf T^{0i}=h_*w^i$, and $\delta\mathsf T^{ij}=\delta p\,\delta^{ij}$. Differentiating $\partial_a\mathsf T_\lambda^{ab}=0$ at $\lambda=0$, with $\partial_0=c^{-1}\partial_t$, yields the displayed equations for $b=0$ and $b=i$. [given, step 2.1, algebra]

4.1 Write the system of step 3.2 as $U_t+\sum_jA_j\partial_jU=0$ with $U=(r,w)$, $A_j=c\begin{pmatrix}0&h_* e_j^{\mathsf T}\\ (1/(3h_*))e_j&0_{3\times3}\end{pmatrix}$, and $M_*=\operatorname{diag}(1/(3h_*),h_*I_3)$. Because $h_*>0$, $M_*$ is positive definite, and $M_*A_j=c\begin{pmatrix}0&\tfrac13e_j^{\mathsf T}\\\tfrac13e_j&0_{3\times3}\end{pmatrix}$ is symmetric. For a unit $\nu$, $A(\nu)$ has the two transverse zero eigenvalues and the longitudinal eigenvalues $\lambda=\pm c/\sqrt3$, obtained from $\lambda^2=c^2/3$ on the span of $(1,0)$ and $(0,\nu)$. The supplier matrix $M_*^{1/2}A(\nu)M_*^{-1/2}$ is similar to $A(\nu)$ because $M_*$ is positive definite, so it has the same spectrum and the supplier speed is $v_*=c/\sqrt3$. Thus the exact matrices meet the algebraic hypotheses in [A1] with $B=0$ and $S=0$. [given, step 3.2, A1, A2, algebra]

5.1 Conditional on [A1], apply its stated global-evolution and finite-propagation conclusions to the matrices of steps 3.2 and 4.1; the resulting speed is $v_*=c/\sqrt3$. The Schwartz data class is the componentwise class in [F3]. The linearization and characteristic calculation in steps 3.2 and 4.1 are unconditional, while these PDE conclusions remain conditional on the current draft supplier interface. [A1, F3, step 3.2, step 4.1] ∎
