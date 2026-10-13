---
id: ex-cm-math-evidence-pendulum-propagation
kind: example
title: "Symbolic two-input propagation of a period–length model"
status: draft
origin: pipeline
domain: mathematics
deps:
  [
    cor-cm-linearization-error-bounds,
    def-cm-covariance-matrix-of-a-random-vector,
    def-ck-euclidean-maps-and-diffeomorphisms,
    def-euclidean-inner-product,
    def-hessian-and-euclidean-critical-point,
    def-jacobian-matrix-and-gradient,
    def-total-derivative-in-euclidean-space,
    lem-cm-linearized-propagation-of-covariance,
    lem-cm-uniform-second-order-remainder-bound,
    lem-derivative-of-a-power,
    thm-algebra-of-derivatives,
    thm-cauchy-schwarz-in-an-inner-product-space,
    thm-continuous-partial-derivatives-imply-total-differentiability,
    thm-continuous-preimages-of-borel-sets-are-borel
  ]
dependency_roles:
  cor-cm-linearization-error-bounds: mathematical-premise
  def-cm-covariance-matrix-of-a-random-vector: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  lem-cm-linearized-propagation-of-covariance: mathematical-premise
  lem-cm-uniform-second-order-remainder-bound: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
dependency_level: 3
proof_strategy: direct computation
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data — Guide to the expression
        of uncertainty in measurement (BIPM), clauses 5.1.2 and 5.2.2, equations
        (10) and (13), on first-order uncertainty propagation with correlated inputs"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
verification:
  precheck: pass
---

## Example

Consider the model function
$$h:\mathbb R^2\supseteq U\longrightarrow\mathbb R,\qquad h(T,l):=\frac{4\pi^2l}{T^2},\qquad U:=\{(T,l)\in\mathbb R^2:T>0\},$$
where $T$ represents a duration and $l$ a length in an adopted unit
convention; the definition here is purely formal and no physical model,
period, length or measurement is asserted. The set $U$ is open and convex in
$\mathbb R^2$, and $h$ is $C^\infty$ there. Fix a nominal input
$\mu=(T_0,l_0)\in U$ with $T_0>0$, and let $(T,l):\Omega\to U$ be a
square-integrable random vector with
$$E[(T,l)]=(T_0,l_0),\qquad \operatorname{Cov}(T,l)=\begin{pmatrix}\sigma_T^2&\sigma_{Tl}\\ \sigma_{Tl}&\sigma_l^2\end{pmatrix}.$$
Then the linearization of $h$ at $\mu$ has slope
$$Dh(\mu)=\Bigl(-\frac{8\pi^2l_0}{T_0^3},\ \frac{4\pi^2}{T_0^2}\Bigr),$$
and the propagated covariance of the linearization is the $1\times1$ matrix
$$Dh(\mu)\operatorname{Cov}(T,l)Dh(\mu)^{\mathsf T} =\frac{64\pi^4l_0^2}{T_0^{6}}\,\sigma_T^2 -\frac{64\pi^4l_0}{T_0^{5}}\,\sigma_{Tl} +\frac{16\pi^4}{T_0^{4}}\,\sigma_l^2 .$$
This is a symbolic computation in a declared model; it neither supplies
values for $T_0,l_0,\sigma_T^2,\sigma_{Tl},\sigma_l^2$ nor asserts that any
apparatus realizes the model. A physical reading in which $T$ is a period and
$l$ a length, and in which a pendulum protocol with a small-angle model is
used to estimate a gravitational parameter, belongs to a separate physical
item that states the protocol, the small-angle idealization and its
remaining error; no such reading is made here.

**Explicit bounded nonlinearity correction.** In addition suppose $X=(T,l)$ takes values in the open convex box $U_B=(T_0-\rho_T,T_0+\rho_T)\times(l_0-\rho_l,l_0+\rho_l)$, where $0<\rho_T<T_0$ and $\rho_l>0$. The coordinates are fixed numerical coordinates (no addition of physical durations and lengths is intended). Write $t_-=T_0-\rho_T$, $l_+=|l_0|+\rho_l$, and
$$H_h(T,l)=\begin{pmatrix}24\pi^2l/T^4&-8\pi^2/T^3\\-8\pi^2/T^3&0\end{pmatrix},\qquad B=\sqrt{(24\pi^2l_+/t_-^4)^2+2(8\pi^2/t_-^3)^2}.$$
Then $\|H_h\|\le B$ on $U_B$. For $R=h(X)-h(\mu)-Dh(\mu)(X-\mu)$, $M_k=E|X-\mu|^k$ and the propagated variance $s^2=Dh(\mu)\operatorname{Cov}(X)Dh(\mu)^{\mathsf T}$ computed above,
$$|R|\le\frac B2|X-\mu|^2,\qquad |E[R]|\le\frac B2M_2,\qquad E[R^2]\le\frac{B^2}{4}M_4,\qquad |\operatorname{Var}(h(X))-s^2|\le B\sqrt{s^2M_4}+\frac{B^2}{4}M_4.$$

The box makes $M_4\le(\rho_T^2+\rho_l^2)^2<\infty$. This correction is mathematical; physical small-angle and apparatus discrepancies are additional inputs of a physical consumer.

## Facts & Assumptions

**Given:** The function $h(T,l)=4\pi^2lT^{-2}$ on the open convex set $U=\{T>0\}$, a nominal input $\mu=(T_0,l_0)\in U$, and a square-integrable random vector $(T,l):\Omega\to U$ with mean $\mu$ and covariance matrix as displayed.

[L1] If $h:U\to\mathbb R$ is Borel measurable and totally differentiable at $\mu$ and $(T,l)$ is square-integrable with mean $\mu$ and covariance matrix $\Sigma$, then the linearization $x\mapsto h(\mu)+Dh(\mu)(x-\mu)$ has mean $h(\mu)$ and covariance matrix $Dh(\mu)\Sigma Dh(\mu)^{\mathsf T}$. ([[lem-cm-linearized-propagation-of-covariance]])

[L2] The covariance matrix of a square-integrable random vector is $\Sigma_{ij}=E[(X_i-\mu_i)(X_j-\mu_j)]$ with $\Sigma_{11}=\sigma_T^2$, $\Sigma_{22}=\sigma_l^2$ and $\Sigma_{12}=\Sigma_{21}=\sigma_{Tl}$. ([[def-cm-covariance-matrix-of-a-random-vector]])

[L3] The partial derivatives of $h(T,l)=4\pi^2lT^{-2}$ are $\partial_Th=-8\pi^2lT^{-3}$ and $\partial_lh=4\pi^2T^{-2}$ on $U$, by the derivative of a power and the algebra of derivatives. ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-jacobian-matrix-and-gradient]])

[L4] The Jacobian matrix of a totally differentiable map is the matrix of its total derivative in the standard bases, and matrix multiplication in the $1\times2$ and $2\times2$ case gives the displayed quadratic form. ([[def-total-derivative-in-euclidean-space]], [[def-jacobian-matrix-and-gradient]], [[def-euclidean-inner-product]])

[L5] On an open convex domain with $\|H_h\|\le B$, the Taylor remainder has $|R|\le B|X-\mu|^2/2$; its mean and mean-square obey the stated bounds, and its variance differs from the linearized variance by at most $B\sqrt{s^2M_4}+B^2M_4/4$ when $M_4<\infty$. ([[lem-cm-uniform-second-order-remainder-bound]], [[cor-cm-linearization-error-bounds]])

[L6] The matrix action $Hv$ and operator norm $\|H\|$ are those of [[lem-cm-uniform-second-order-remainder-bound]]. For a $2\times2$ matrix $H$ and vector $v$, applying Euclidean Cauchy–Schwarz to each row gives $|Hv|^2\le(\sum_{0\le i,j<2}H_{ij}^2)|v|^2$, so its operator norm is at most the square root of the sum of squared entries. ([[def-hessian-and-euclidean-critical-point]], [[thm-cauchy-schwarz-in-an-inner-product-space]])

[L7] If $h$ is continuous, it has Borel preimages of Borel sets; if every first partial derivative exists on a neighbourhood of $\mu$ and is continuous at $\mu$, then $h$ is totally differentiable there with Jacobian derivative. The $C^k$ convention is continuity of the iterated coordinate derivatives through order $k$. ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[def-ck-euclidean-maps-and-diffeomorphisms]])

[L8] Define $c_0:=4\pi^2$ and $c_{k+1}:=-(k+2)c_k$ for integers $k\ge0$. For each $k$, any iterated partial with $k$ derivatives in $T$ and no $l$ derivative is $c_klT^{-k-2}$; with one $l$ derivative in any position it is $c_kT^{-k-2}$; with at least two $l$ derivatives it is zero. These formulas follow by repeated differentiation of powers and the product rule and are continuous on $T>0$, so $h$ is $C^\infty$ under the convention of [L7]. ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]])

## Verification

**Proof technique:** direct computation.

1.1 The formula $h(T,l)=4\pi^2lT^{-2}$ is continuous on $U=\{T>0\}$, and its first partial derivatives in [L3] are continuous there. Thus $h$ is Borel measurable by [L7], and [L7] gives total differentiability at $\mu$ with Jacobian matrix $Dh(\mu)=\bigl(-8\pi^2l_0T_0^{-3},\ 4\pi^2T_0^{-2}\bigr)$; its entries agree with the partial derivatives of [L3] by [L4]. [given, L3, L4, L7]

1.2 Differentiating [L3] once more gives $h_{TT}=24\pi^2l/T^4$, $h_{Tl}=h_{lT}=-8\pi^2/T^3$ and $h_{ll}=0$, hence the displayed Hessian by [L6]. On $U_B$, $T>t_->0$ and $|l|<l_+$; the sum of squared entries is at most $(24\pi^2l_+/t_-^4)^2+2(8\pi^2/t_-^3)^2$, so [L6] gives $\|H_h\|\le B$. The formulas of [L8] verify continuity of every iterated partial derivative on $U$, as asserted in the Example. [given, L3, L6, L8, algebra]

2.1 By [L1] and [L2] the propagated covariance is the single entry $\sum_{k,l=1}^{2}a_{1k}a_{1l}\Sigma_{kl}$ with $a_{11}=-8\pi^2l_0T_0^{-3}$, $a_{12}=4\pi^2T_0^{-2}$, $\Sigma_{11}=\sigma_T^2$, $\Sigma_{22}=\sigma_l^2$ and $\Sigma_{12}=\Sigma_{21}=\sigma_{Tl}$: $$a_{11}^2\sigma_T^2+2a_{11}a_{12}\sigma_{Tl}+a_{12}^2\sigma_l^2=\frac{64\pi^4l_0^2}{T_0^{6}}\sigma_T^2-\frac{64\pi^4l_0}{T_0^{5}}\sigma_{Tl}+\frac{16\pi^4}{T_0^{4}}\sigma_l^2 .$$ [step 1.1, L1, L2, algebra]

2.2 Under the additional box hypothesis, $|X-\mu|^2<\rho_T^2+\rho_l^2$ pointwise, so $M_4\le(\rho_T^2+\rho_l^2)^2<\infty$. The box is open and convex and contains $\mu$ and all values of $X$, so [L5] with step 1.2 gives the pointwise, mean, mean-square and scalar covariance-error bounds displayed in the Example. [given, step 1.2, L5, algebra]

3.1 The three coefficients computed in step 2.1 are exactly those displayed in the Example: $a_{11}^2=64\pi^4l_0^2T_0^{-6}$, $2a_{11}a_{12}=-64\pi^4l_0T_0^{-5}$ and $a_{12}^2=16\pi^4T_0^{-4}$. [step 2.1, algebra]

4.1 Steps 2.1 and 3.1 establish the exact propagated covariance of the linearization for the initial square-integrable model; steps 1.2 and 2.2 establish its explicit Hessian correction under the additional box hypothesis. [step 2.1, step 3.1, step 1.2, step 2.2] ∎
