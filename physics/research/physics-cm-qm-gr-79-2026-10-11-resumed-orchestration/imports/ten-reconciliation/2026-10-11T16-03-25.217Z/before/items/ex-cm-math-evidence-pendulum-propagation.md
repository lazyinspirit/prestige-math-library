---
id: ex-cm-math-evidence-pendulum-propagation
kind: example
title: "Symbolic two-input propagation of a period–length model"
status: draft
origin: pipeline
domain: mathematics
deps: [def-cm-covariance-matrix-of-a-random-vector, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, lem-cm-linearized-propagation-of-covariance, lem-derivative-of-a-power, thm-algebra-of-derivatives]
dependency_roles:
  def-cm-covariance-matrix-of-a-random-vector: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  lem-cm-linearized-propagation-of-covariance: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
dependency_level: 2
proof_strategy: direct computation
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data — Guide to the expression of uncertainty in measurement (BIPM), clauses 5.1.2–5.1.3 and example H.5.2 (period of a pendulum model) on sensitivity coefficients"
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

## Facts & Assumptions

**Given:** The function $h(T,l)=4\pi^2lT^{-2}$ on the open convex set $U=\{T>0\}$, a nominal input $\mu=(T_0,l_0)\in U$, and a square-integrable random vector $(T,l):\Omega\to U$ with mean $\mu$ and covariance matrix as displayed.

[L1] If $h:U\to\mathbb R$ is Borel measurable and totally differentiable at $\mu$ and $(T,l)$ is square-integrable with mean $\mu$ and covariance matrix $\Sigma$, then the linearization $x\mapsto h(\mu)+Dh(\mu)(x-\mu)$ has mean $h(\mu)$ and covariance matrix $Dh(\mu)\Sigma Dh(\mu)^{\mathsf T}$. ([[lem-cm-linearized-propagation-of-covariance]])

[L2] The covariance matrix of a square-integrable random vector is $\Sigma_{ij}=E[(X_i-\mu_i)(X_j-\mu_j)]$ with $\Sigma_{11}=\sigma_T^2$, $\Sigma_{22}=\sigma_l^2$ and $\Sigma_{12}=\Sigma_{21}=\sigma_{Tl}$. ([[def-cm-covariance-matrix-of-a-random-vector]])

[L3] The partial derivatives of $h(T,l)=4\pi^2lT^{-2}$ are $\partial_Th=-8\pi^2lT^{-3}$ and $\partial_lh=4\pi^2T^{-2}$ on $U$, by the derivative of a power and the algebra of derivatives. ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-jacobian-matrix-and-gradient]])

[L4] The Jacobian matrix of a totally differentiable map is the matrix of its total derivative in the standard bases, and matrix multiplication in the $1\times2$ and $2\times2$ case gives the displayed quadratic form. ([[def-total-derivative-in-euclidean-space]], [[def-jacobian-matrix-and-gradient]], [[def-euclidean-inner-product]])

## Verification

**Proof technique:** direct computation.

1.1 The set $U=\{T>0\}$ is open and convex, and the partial derivatives of [L3] are continuous on $U$, so $h$ is $C^1$, hence totally differentiable at $\mu$, with Jacobian matrix $Dh(\mu)=\bigl(-8\pi^2l_0T_0^{-3},\ 4\pi^2T_0^{-2}\bigr)$. [given, L3, L4]

2.1 By [L1] and [L2] the propagated covariance is the single entry $\sum_{k,l=1}^{2}a_{1k}a_{1l}\Sigma_{kl}$ with $a_{11}=-8\pi^2l_0T_0^{-3}$, $a_{12}=4\pi^2T_0^{-2}$, $\Sigma_{11}=\sigma_T^2$, $\Sigma_{22}=\sigma_l^2$ and $\Sigma_{12}=\Sigma_{21}=\sigma_{Tl}$: $$a_{11}^2\sigma_T^2+2a_{11}a_{12}\sigma_{Tl}+a_{12}^2\sigma_l^2=\frac{64\pi^4l_0^2}{T_0^{6}}\sigma_T^2-\frac{64\pi^4l_0}{T_0^{5}}\sigma_{Tl}+\frac{16\pi^4}{T_0^{4}}\sigma_l^2 .$$ [step 1.1, L1, L2, algebra]

3.1 The three coefficients computed in step 2.1 are exactly those displayed in the Example: $a_{11}^2=64\pi^4l_0^2T_0^{-6}$, $2a_{11}a_{12}=-64\pi^4l_0T_0^{-5}$ and $a_{12}^2=16\pi^4T_0^{-4}$. [step 2.1, algebra] ∎
