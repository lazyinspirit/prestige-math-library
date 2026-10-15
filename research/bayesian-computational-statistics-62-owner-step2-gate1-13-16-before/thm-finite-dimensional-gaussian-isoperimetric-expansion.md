---
dependency_level: 0
id: thm-finite-dimensional-gaussian-isoperimetric-expansion
kind: theorem
title: Finite-dimensional Gaussian isoperimetric expansion
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-absolutely-continuous-function
  - cor-mean-value-theorem
  - thm-cauchy-schwarz-finite
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - def-multivariate-normal-law
  - lem-standard-normal-cdf-is-continuous-and-strictly-increasing
  - thm-derivative-of-exponential
  - thm-derivative-of-an-inverse
  - thm-chain-rule
  - thm-intermediate-value
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-differentiation-under-the-integral-sign
  - thm-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-integration-by-parts-for-absolutely-continuous-functions
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - def-mollifier-family-generated-by-a-unit-mass-smooth-bump
  - thm-borel-probability-measures-on-polish-spaces-are-inner-regular
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
justified_by: []
forward_refs: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: S. G. Bobkov, An isoperimetric inequality on the discrete cube, and an elementary proof of the isoperimetric inequality in Gauss space (1997)
      url: https://www-users.cse.umn.edu/~bobkov/papers/1997_AOP.pdf
      locator: The Gaussian isoperimetric inequality and proof from the discrete-cube inequality, pp. 1–8.
    - title: C. Borell, The Brunn–Minkowski inequality in Gauss space (1975)
      url: https://dornsife.usc.edu/sergey-lototsky/wp-content/uploads/sites/211/2023/06/Borell-Subspace-original.pdf
      locator: Section 3, Theorem 3.1 proof, especially the finite-dimensional reduction on pp. 209–210.
    - title: D. Chafaï and J. Lehec, Lectures on the logarithmic Sobolev inequality, Chapter 4, Theorem 4.6, pp. 45–50
      url: https://djalil.chafai.net/docs/M2/chafai-lehec-m2-lsie-lecture-notes.pdf
      locator: Full PDF retrieved; complete semigroup proof pp. 49–50 read; the finite-ball neighborhood passage is supplied locally below.
proof_strategy: direct
axiom_use: AC is assumed as in the Gaussian suppliers; it implies DC and Countable Choice for the stated integration interfaces. The sharp inequality is proved locally by explicit Gaussian-semigroup calculus, smooth cutoffs and finite-ball approximation.
---

## Statement

Assume AC. For $d\ge1$, let $\gamma_d$ be standard Gaussian measure on $\mathbb R^d$,
let $A\subseteq\mathbb R^d$ be Borel, and let
$A+rB_2^d=\{a+ru:a\in A,\ |u|\le1\}$. Then for every $r\ge0$,
$$\gamma_{d,*}(A+rB_2^d)\ge \Phi\!\left(\Phi^{-1}(\gamma_d(A))+r\right),$$
where $\gamma_{d,*}(S)=\sup\{\gamma_d(K):K\subseteq S,\ K\text{ compact}\}$ is Gaussian inner measure, and $\Phi^{-1}(0)=-\infty$, $\Phi^{-1}(1)=+\infty$.


## Facts & Assumptions

**Given:** AC, $d\ge1$, standard Gaussian measure $\gamma_d$, a Borel set $A$, and $r\ge0$.

[F1] The scalar standard normal has density $\varphi(x)=(2\pi)^{-1/2}e^{-x^2/2}$, and $\Phi$ is continuous and strictly increasing with limits $0$ and $1$ at the two infinities. Independent standard Gaussian vectors form a joint Gaussian vector, and orthogonal linear combinations have their stated Gaussian laws. [[def-standard-normal-and-normal-laws]], [[def-multivariate-normal-law]], [[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]], [[lem-standard-normal-cdf-is-continuous-and-strictly-increasing]].

[F2] Differentiation under the integral follows from an integrable majorant, dominated convergence passes dominated limits, and Fubini applies to absolutely integrable functions. [[thm-differentiation-under-the-integral-sign]], [[thm-dominated-convergence]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]].

[F3] Integration by parts and the fundamental theorem apply on one-dimensional absolutely continuous slices. AC implies their DC and Countable Choice assumptions. [[thm-integration-by-parts-for-absolutely-continuous-functions]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-axiom-of-choice]].

[F4] Borel probabilities on Polish spaces are inner regular. [[thm-borel-probability-measures-on-polish-spaces-are-inner-regular]].

[F5] A unit-mass smooth bump gives the scaled convolution family. One may choose it nonnegative and supported in the unit ball by normalizing $\exp(-1/(1-|x|^2))\mathbf1_{\{|x|<1\}}$. [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]].

[F6] Under Countable Choice, the nonnegative Lebesgue change-of-variables theorem applies to Euclidean dilations and orthogonal maps; hence a ball of radius $R$ has volume $v_dR^d$ with finite $v_d$ bounded by the volume of the containing cube. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]].

[F7] The exponential derivative, the derivative-of-inverse rule at a nonzero derivative, and the chain rule apply to the scalar functions below. [[thm-derivative-of-exponential]], [[thm-derivative-of-an-inverse]], [[thm-chain-rule]].

[F8] A continuous real-valued function on a closed interval takes every value between its endpoint values. [[thm-intermediate-value]].

[F9] For finite real rows, $(\sum_i a_ib_i)^2\le(\sum_i a_i^2)(\sum_i b_i^2)$ [[thm-cauchy-schwarz-finite]].

[F10] Absolute continuity uses sums of endpoint increments over disjoint intervals of sufficiently small total length; the mean value theorem bounds increments by a derivative bound [[def-absolutely-continuous-function]] [[cor-mean-value-theorem]].

## Proof

**Given:** The objects and assumptions above; $\varphi(x)=(2\pi)^{-1/2}e^{-x^2/2}$ denotes the standard-normal density. The auxiliary function $I$ is defined in step 1.1.

1.1 Write $\varphi(x)=(2\pi)^{-1/2}e^{-x^2/2}$. For $h\ne0$, the density formula gives $[\Phi(x+h)-\Phi(x)]/h=h^{-1}\int_x^{x+h}\varphi(s)\,ds$, which tends to $\varphi(x)$ by continuity; hence $\Phi'(x)=\varphi(x)>0$. The CDF lemma gives continuity, strict increase and limits $0,1$ at the two infinities. For any $u\in(0,1)$, choose $a<b$ with $\Phi(a)<u<\Phi(b)$ using those limits; [F8] applied to $\Phi$ on $[a,b]$ gives an $x$ with $\Phi(x)=u$, and strict increase makes it unique. Thus $\Phi$ is a bijection onto $(0,1)$. Set $I(u)=\varphi(\Phi^{-1}(u))$ for $0<u<1$, and set $I(0)=I(1)=0$. The derivative-of-inverse rule [F7] therefore gives $(\Phi^{-1})'(u)=1/\varphi(\Phi^{-1}(u))=1/I(u)$. From $\varphi(x+h)=\varphi(x)e^{-xh-h^2/2}$ and $(\exp)'(0)=1$ in [F7], the difference quotient gives $\varphi'(x)=-x\varphi(x)$. Writing $x=\Phi^{-1}(u)$, the chain rule [F7] yields $I'(u)=\varphi'(x)/\varphi(x)=-x$ and then $I''(u)=-(\Phi^{-1})'(u)=-1/I(u)$. Thus $II''=-1$. As $u\downarrow0$ or $u\uparrow1$, $\Phi^{-1}(u)$ tends to the corresponding infinity and $\varphi(\Phi^{-1}(u))\to0$, so $I$ is continuous on $[0,1]$; also $0<I(u)\le(2\pi)^{-1/2}$ on $(0,1)$. First take a smooth $f$ valued in $[\eta,1-\eta]$, $0<\eta<1/2$, with all derivatives bounded. Define $P_tf(x)=\int f(e^{-t}x+\sqrt{1-e^{-2t}}y)\gamma_d(dy)$ and $u_t=P_tf$. Gaussian integration by parts in $y$ gives $\partial_tu_t=Lu_t$, $L=\Delta-x\cdot\nabla$, while $\nabla P_tf=e^{-t}P_t\nabla f$. Invariance $\int P_tg\,d\gamma_d=\int g\,d\gamma_d$ follows because $e^{-t}X+\sqrt{1-e^{-2t}}Y$ is standard Gaussian for independent standard $X,Y$. Differentiation is justified by [F2]; the integration-by-parts boundary terms vanish by bounded derivatives and Gaussian decay. [F1, F2, F3, F7, F8, given, algebra]

1.2 Put $v=\nabla u_t$, $H=D^2u_t$, $K=I(u_t)^2+|v|^2$ and $J(t)=\int\sqrt K\,d\gamma_d$. The identity $\nabla Lu=L\nabla u-\nabla u$, Gaussian integration by parts, and $II''=-1$ give $$J'(t)=\int\frac{-\|I'(u_t)vv^T-I(u_t)H\|_F^2+|Hv|^2-\|H\|_F^2|v|^2}{K^{3/2}}\,d\gamma_d\le0.$$ To verify the displayed computation, differentiating $J$ first gives $\int[II'Lu+v\cdot\nabla Lu]/\sqrt K$. Integrating both $Lu$ and each $Lv_i$ by parts leaves numerator $-I'^2|v|^4+2II'v^THv-I^2\|H\|_F^2-\|H\|_F^2|v|^2+|Hv|^2$, the displayed square expansion. Applying [F9] to row $i$ gives $(\sum_j H_{ij}v_j)^2\le(\sum_j H_{ij}^2)(\sum_jv_j^2)$; summing over the finitely many rows gives $|Hv|^2\le\|H\|_F^2|v|^2$. All operations on compact time intervals are dominated because $I(u_t)$ has a fixed positive lower bound, derivatives are bounded, and Gaussian polynomial moments are finite. [F2, F3, F9, step 1.1, algebra]

2.1 As $t\to\infty$, $u_t(x)\to\int f\,d\gamma_d$ and $|\nabla u_t|\le e^{-t}\|\nabla f\|_\infty\to0$. Dominated convergence and step 1.2 yield $$I\left(\int f\,d\gamma_d\right)\le\int\sqrt{I(f)^2+|\nabla f|^2}\,d\gamma_d\le\int I(f)\,d\gamma_d+\int|\nabla f|\,d\gamma_d.$$ Replacing a smooth $[0,1]$-valued $f$ by $\eta+(1-2\eta)f$ and letting $\eta\downarrow0$ extends this inequality to smooth $[0,1]$-valued functions with bounded derivatives. [F2, step 1.1, step 1.2, algebra]

3.1 Let $D$ be a nonempty finite union of closed balls of one common positive radius. Its boundary is contained in finitely many spheres, which have Lebesgue and hence Gaussian measure zero. For $h>0$ put $f_h=(1-\operatorname{dist}(\cdot,D)/h)_+$. Distance is $1$-Lipschitz, since $\operatorname{dist}(x,D)\le|x-y|+\operatorname{dist}(y,D)$ and one may interchange $x,y$. Thus $0\le f_h\le1$ and it is $1/h$-Lipschitz. Outside finitely many inner and outer cutoff spheres and nearest-center bisector hyperplanes it is smooth, its gradient has norm at most $1/h$, and its gradient vanishes outside $(D+hB_2^d)\setminus D$. These exceptional sets have Lebesgue measure zero by Fubini in suitable orthogonal coordinates. [F1, F2, construct, algebra]

3.2 Convolve $f_h$ with the nonnegative bumps $\rho_\delta$ from [F5]. The convolutions are smooth, valued in $[0,1]$, have bounded derivatives, and converge uniformly to $f_h$. On almost every coordinate line the distance formula is a finite piecewise smooth minimum of distances to centers, so $f_h$ is absolutely continuous there with derivative bounded by $1/h$. One-dimensional integration by parts and Fubini show $\nabla(f_h*\rho_\delta)=(\nabla f_h)*\rho_\delta$. At each point off the exceptional hypersurfaces the latter converges to $\nabla f_h$, and its norm is at most $1/h$. Dominated convergence against Gaussian probability therefore passes step 2.1 to $f_h$ and gives $$I\left(\int f_h\,d\gamma_d\right)\le\int I(f_h)\,d\gamma_d+\frac{\gamma_d(D+hB_2^d)-\gamma_d(D)}h.$$ As $h\downarrow0$, $f_h\to\mathbf1_D$ and $I(f_h)\to0$, so $I(\gamma_d(D))$ is at most the lower right derivative of the neighborhood mass. [F2, F3, F5, step 2.1, step 3.1, algebra]

4.1 Set $D_t=D+tB_2^d$ and $V(t)=\gamma_d(D_t)$. On each bounded interval $[0,R]$, $V$ is Lipschitz: for $0\le t<t+h\le R$, the mass difference is bounded by the sum of masses of finitely many spherical shells. Gaussian density is bounded, and [F6] gives each shell volume as $v_d((a+t+h)^d-(a+t)^d)\le C_Rh$, where $a>0$ is the common initial radius. Thus $|V(t+h)-V(t)|\le L_Rh$ for a finite constant $L_R$. For any finite disjoint interval family, the sum of its endpoint increments is therefore at most $L_R$ times its total length; taking $\delta=\varepsilon/(L_R+1)$ proves absolute continuity directly from [F10]. By [F3], $V$ is differentiable almost everywhere. Each $D_t$ is again a finite union of equal-radius balls, so the lower-right derivative bound in step 3.2 implies $V'(t)\ge I(V(t))$ at each differentiability point. Since $D_0$ has interior and $D_R$ is bounded, $0<V(0)\le V(t)\le V(R)<1$. On this compact range, $I$ has a positive minimum, so the inverse derivative formula in step 1.1 and the mean value theorem [F10] show that $\Phi^{-1}$ is Lipschitz there. Hence $G=\Phi^{-1}\circ V$ is Lipschitz on $[0,R]$; the same finite-total-length argument proves that $G$ is absolutely continuous. At every differentiability point of $V$, the chain rule [F7] gives $G'=V'/I(V)\ge1$. Applying the fundamental theorem [F3] to $G$ and taking $R=r$ (with $r=0$ immediate) yields $G(r)-G(0)\ge r$, or $$\gamma_d(D+rB_2^d)\ge\Phi(\Phi^{-1}(\gamma_d(D))+r).$$ [F1, F3, F6, F7, F10, step 1.1, step 3.2, algebra]

5.1 For nonempty compact $K$ and $r>0$, choose $0<\delta<r$ and cover $K$ by finitely many closed $\delta$-balls centered in $K$; call their union $D_\delta$. Then $K\subseteq D_\delta\subseteq K+\delta B_2^d$ and $D_\delta+(r-\delta)B_2^d\subseteq K+rB_2^d$. Step 4.1 gives $\gamma_d(K+rB_2^d)\ge\Phi(\Phi^{-1}(\gamma_d(K))+r-\delta)$; let $\delta\downarrow0$. For Borel $A$, inner regularity provides compact $K\subseteq A$ with mass arbitrarily close to $\gamma_d(A)$. Each $K+rB_2^d$ is compact and contained in $A+rB_2^d$, so taking the supremum gives the asserted inner-measure bound. If $\gamma_d(A)=0$ the right side is zero; if it is one, compact inner approximation gives lower bound one. At $r=0$, [F4] identifies the inner and ordinary measures of $A$. [F4, step 4.1, given, choose, algebra] ∎

## Source notes

The full Bobkov paper and the complete Chafaï–Lehec semigroup proof were read. The sharp functional inequality is proved by the local derivative computation above; the finite-ball cutoff and compact approximation supply the full neighborhood passage without an imported spherical isoperimetry, coarea theorem, or Rademacher theorem.
