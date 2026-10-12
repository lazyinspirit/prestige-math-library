---
id: ex-cm18-pendulum-calibration-proposal
kind: example
title: "A proposed small-angle pendulum calibration of a gravitational parameter: linearized propagation and a bounded nonlinearity remainder on declared data"
status: draft
origin: pipeline
domain: physics
deps: [cor-cm-linearization-error-bounds, cor-expectation-linearity-monotonicity-and-modulus-bound, def-cm-covariance-matrix-of-a-random-vector, def-cm01-units, def-cm18-calibration, def-cm18-observable-model, def-euclidean-inner-product, def-hessian-and-euclidean-critical-point, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, lem-cm-linearized-propagation-of-covariance, lem-cm-uniform-second-order-remainder-bound, lem-derivative-of-a-power, rem-cm18-primary-report-contract, thm-algebra-of-derivatives, thm-cauchy-schwarz-in-an-inner-product-space]
dependency_roles:
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-cm18-observable-model: formulation-prerequisite
  def-cm18-calibration: formulation-prerequisite
  rem-cm18-primary-report-contract: formulation-prerequisite
  lem-cm-linearized-propagation-of-covariance: mathematical-premise
  lem-cm-uniform-second-order-remainder-bound: mathematical-premise
  cor-cm-linearization-error-bounds: mathematical-premise
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  def-cm-covariance-matrix-of-a-random-vector: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
dependency_level: 14
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked, explicitly hypothetical calibration proposal inside the pendulum branch: the declared protocol reads a length and a duration and uses the small-angle period relation 4 pi^2 l / T^2 as its prediction map for a gravitational parameter, with the period relation declared as the model adopted from the cited treatments and the finite-amplitude discrepancy left as an unquantified model error. The item computes the first and second derivatives of the model function, the exactly propagated covariance of the linearization, and the bounded nonlinearity remainder on a declared box; it asserts no measured length, period, parameter value or uncertainty."
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data - Guide to the expression of uncertainty in measurement (BIPM, 2008 corrected version), clauses 5.1.2-5.1.3 (law of propagation of uncertainty, sensitivity coefficients), clause 5.2.2 (correlated inputs, equation (13)), and example H.5.2 on the period of a pendulum model, which treats exactly the relation between a period, a length and a gravitational parameter"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 3.1, chapter pages 1-3 (PDF pages 39-41): the pendulum equation and its small-oscillation linearization with frequency omega0 = sqrt(g/l), with the small-angle approximation treated as an idealization"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2.4 and Chapter 3, printed pages 6-7 and 52-59: the pendulum as a one-dimensional system and its small-oscillation description"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Adopt as the declared physical content of a **proposed protocol** the ideal
planar pendulum of the cited treatments: parameters $m,l,g>0$, exact
equation $ml^{2}\theta''+mgl\sin\theta=0$, and small-angle idealization
$T=2\pi\sqrt{l/g}$ for the period $T$ of a small oscillation, whose
linearization at $\theta=0$ is the quadratic mode of angular frequency
$\omega=\sqrt{g/l}$. The model and its small-angle idealization are **declared
data** of the example, adopted from the cited treatments; the exact
finite-amplitude period discrepancy is not derived here. No measurement is
performed and no measured value is used.

**The declared protocol.** The protocol of [[def-cm18-observable-model]]
reads two coordinates of one oscillation: the pendulum length $l$ and the
period $T$, both with the dimensions and units of [[def-cm01-units]]
($[l]=\ell$, $[T]=\tau$). As its prediction map for a gravitational
parameter it uses
$$h:U\longrightarrow\mathbb R,\qquad U:=\bigl\{(l,T)\in\mathbb R^{2}:l>0,\ T>0\bigr\},\qquad h(l,T):=\frac{4\pi^{2}l}{T^{2}},$$
an idealization whose exact justification would require the small-angle
period relation of the cited treatments. The difference between the exact
period of the ideal pendulum at finite amplitude and $2\pi\sqrt{l/g}$ is a
**model discrepancy** of the protocol, denoted $\delta\ge0$ in units of
$\tau$; this example neither estimates nor bounds $\delta$, and a
quantitative use of the protocol must supply it separately. The reference
deviations of any calibration of the apparatus are likewise data of
[[def-cm18-calibration]] and are not part of the computation below. A
calibration setting has the explicit form $c=\Gamma(y,\theta_{\mathrm{ref}})$
in fixed parameter units; the proposal supplies no reference observations
or realized setting. In the calculations below $l$ and $T$ denote numerical
coefficients in metres and seconds and $h$ the numerical coefficient in
metres per second squared. Euclidean norms are applied to these fixed
numerical coordinates, not to sums of physical quantities of different
dimensions; their constants depend on this coordinate convention.

**Declared data.** Fix a nominal input $\mu=(l_{0},T_{0})\in U$ with
$l_{0},T_{0}>0$ and radii $0<\rho_{l}<l_{0}$, $0<\rho_{T}<T_{0}$, and put
$$U_{B}:=(l_{0}-\rho_{l},\,l_{0}+\rho_{l})\times(T_{0}-\rho_{T},\,T_{0}+\rho_{T}) \subseteq U,$$
an open convex box. Let $X=(l,T):\Omega\to U_{B}$ be a square-integrable
random vector with
$$E[X]=\mu,\qquad \operatorname{Cov}(X)=\begin{pmatrix}\sigma_{l}^{2}&\sigma_{lT}\\ \sigma_{lT}&\sigma_{T}^{2}\end{pmatrix}.$$
All entries are declared **model data**: no reading of an apparatus is
asserted. With $h$ as above:

1. $h$ is $C^{\infty}$ on $U$, with
   $$\frac{\partial h}{\partial l}(l,T)=\frac{4\pi^{2}}{T^{2}}=\frac{h(l,T)}{l}, \qquad \frac{\partial h}{\partial T}(l,T)=-\frac{8\pi^{2}l}{T^{3}} =-\frac{2h(l,T)}{T},$$
   so $Dh(\mu)$ has the two components $h(\mu)/l_{0}$ and $-2h(\mu)/T_{0}$;
2. the Hessian on $U$ is
   $$H_{h}(l,T)=\begin{pmatrix}0&-\dfrac{8\pi^{2}}{T^{3}}\\[2mm] -\dfrac{8\pi^{2}}{T^{3}}&\dfrac{24\pi^{2}l}{T^{4}}\end{pmatrix},$$
   and on $U_{B}$ its operator norm is at most the Frobenius bound
   $$B:=\Bigl(2\Bigl(\frac{8\pi^{2}}{(T_{0}-\rho_{T})^{3}}\Bigr)^{2} +\Bigl(\frac{24\pi^{2}(l_{0}+\rho_{l})}{(T_{0}-\rho_{T})^{4}}\Bigr)^{2} \Bigr)^{1/2};$$
3. the covariance of the linearization
   $T_{\mu}(x)=h(\mu)+Dh(\mu)\cdot(x-\mu)$ is the $1\times1$ matrix
   $$\operatorname{Cov}\bigl(T_{\mu}(X)\bigr) =\frac{16\pi^{4}}{T_{0}^{4}}\,\sigma_{l}^{2} -\frac{64\pi^{4}l_{0}}{T_{0}^{5}}\,\sigma_{lT} +\frac{64\pi^{4}l_{0}^{2}}{T_{0}^{6}}\,\sigma_{T}^{2},$$
   which for uncorrelated inputs ($\sigma_{lT}=0$) reads
   $$\operatorname{Cov}\bigl(T_{\mu}(X)\bigr) =\frac{16\pi^{4}}{T_0^4}\Bigl(\sigma_{l}^{2}+\frac{4l_{0}^{2}}{T_{0}^{2}}\,\sigma_{T}^{2}\Bigr) =h(\mu)^{2}\Bigl(\frac{\sigma_{l}^{2}}{l_{0}^{2}} +\frac{4\sigma_{T}^{2}}{T_{0}^{2}}\Bigr);$$
4. for the nonlinearity remainder
   $R:=h(X)-h(\mu)-Dh(\mu)\cdot(X-\mu)$ one has the pointwise bound
   $\lvert R\rvert\le\frac{B}{2}\lvert X-\mu\rvert^{2}$, hence
   $\lvert E[R]\rvert\le E\lvert R\rvert\le\frac{B}{2}E\lvert X-\mu\rvert^{2}$,
   and if $E\lvert X-\mu\rvert^{4}<+\infty$ then
   $E[R^{2}]\le\frac{B^{2}}{4}E\lvert X-\mu\rvert^{4}$.

Since $E[X]=\mu$ gives $E\bigl[Dh(\mu)(X-\mu)\bigr]=0$, the mean of the
reading $\hat g:=h(X)$ satisfies
$\bigl\lvert E[\hat g]-h(\mu)\bigr\rvert\le\frac{B}{2}E\lvert X-\mu\rvert^{2}$,
while the exact variance of the linearization is the matrix of clause 3. The
actual variance has the explicit correction of
[[cor-cm-linearization-error-bounds]]: with $s^2=\operatorname{Var}(T_\mu(X))$
and $M_4=E|X-\mu|^4$,
$$|\operatorname{Var}(\hat g)-s^2|\le B\sqrt{s^2M_4}+\frac{B^2}{4}M_4.$$
The box ensures $M_4\le(\rho_l^2+\rho_T^2)^2<\infty$; the model discrepancy
$\delta$ and the reference deviations of the calibration contribute further
unquantified terms. The protocol is a proposal: no value of $l$, $T$, $g$,
$\sigma_{l}$, $\sigma_{T}$, $\sigma_{lT}$, $\delta$ or $B$ is a measurement
here.

## Facts & Assumptions

**Given:** The declared protocol and its idealization of the statement, the open convex set $U$, the map $h(l,T)=4\pi^{2}lT^{-2}$, the point $\mu=(l_{0},T_{0})\in U$, the open box $U_{B}\subseteq U$, and the random vector $X$ with mean $\mu$ and covariance matrix as displayed.

[L1] The declared model: the ideal pendulum equation $ml^{2}\theta''+mgl\sin\theta=0$ and the small-angle period relation $T=2\pi\sqrt{l/g}$, with linearized angular frequency $\omega=\sqrt{g/l}$, are the model adopted from the cited treatments ([[def-cm18-observable-model]] for the protocol structure); the prediction map $h(l,T)=4\pi^{2}l/T^{2}$ is this relation written for the parameter $g$, and the finite-amplitude period discrepancy is the declared model error $\delta$, not bounded here.

[L2] Powers and their derivatives: for $n\ge1$ the function $x\mapsto x^{-n}$ is differentiable on $\{x\ne0\}$ with derivative $-n x^{-n-1}$, and the algebra of derivatives gives the product and quotient rules ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]]); the set $U$ is open and convex, and $h$ is $C^{\infty}$ on it because $T>0$ there; total differentiability and the Jacobian and Hessian conventions are those of [[def-total-derivative-in-euclidean-space]], [[def-jacobian-matrix-and-gradient]] and [[def-hessian-and-euclidean-critical-point]], with the Euclidean norm of [[def-euclidean-inner-product]]. For each row $r_i$ of a matrix $H$, $|r_i\cdot v|^2\le|r_i|^2|v|^2$ by [[thm-cauchy-schwarz-in-an-inner-product-space]]; summing over rows yields $|Hv|^2\le(\sum_{i,j}H_{ij}^2)|v|^2$, the Frobenius bound on its operator norm.

[L3] Linearized propagation: for a totally differentiable $h:U\to\mathbb R$ at $\mu$, a random element $X$ with values in $U$, mean $\mu$ and covariance matrix $\Sigma$, the affine map $T_{\mu}(x)=h(\mu)+Dh(\mu)\cdot(x-\mu)$ applied to $X$ has covariance matrix $Dh(\mu)\Sigma Dh(\mu)^{\mathsf T}$ ([[lem-cm-linearized-propagation-of-covariance]], [[def-cm-covariance-matrix-of-a-random-vector]]).

[L4] Remainder bounds: on an open convex set with $\lVert H_{h}\rVert\le B$ and $X$ taking values in it with $E[X]=\mu$, the remainder $R=h(X)-h(\mu)-\nabla h(\mu)\cdot(X-\mu)$ satisfies $\lvert R\rvert\le\frac{B}{2}\lvert X-\mu\rvert^{2}$ pointwise, $\lvert E[R]\rvert\le E\lvert R\rvert\le\frac{B}{2}E\lvert X-\mu\rvert^{2}$, and $E[R^{2}]\le\frac{B^{2}}{4}E\lvert X-\mu\rvert^{4}$ when the fourth moment is finite; writing $s^2=\operatorname{Var}(T_\mu(X))$ and $M_4=E|X-\mu|^4$, the explicit variance bound is $|\operatorname{Var}(h(X))-s^2|\le B\sqrt{s^2M_4}+B^2M_4/4$ ([[lem-cm-uniform-second-order-remainder-bound]], [[cor-cm-linearization-error-bounds]]).

[L5] Linearity of expectation for integrable components: the expectation of a finite linear combination of integrable real random variables is the same linear combination of the expectations, so for a fixed vector $u$ and a square-integrable random vector $X$ with $E[X]=\mu$ one has $E\bigl[u\cdot(X-\mu)\bigr]=0$ ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

## Verification

**Proof technique:** direct computation of the first and second derivatives, application of the linearized propagation identity, and application of the uniform second-order remainder bound.

1.1 On $U$ the function $l\mapsto 4\pi^{2}l$ is a polynomial and $T\mapsto T^{-2}$ has derivative $-2T^{-3}$ by [L2], so the product rule gives $\partial h/\partial l=4\pi^{2}T^{-2}$ and $\partial h/\partial T=4\pi^{2}l\cdot(-2T^{-3})=-8\pi^{2}lT^{-3}$, which the identity $h=4\pi^{2}lT^{-2}$ turns into $h/l$ and $-2h/T$; hence $Dh(\mu)=\bigl(h(\mu)/l_{0},\,-2h(\mu)/T_{0}\bigr)$. [given, L2, algebra]

2.1 Differentiating the first derivatives with the same rules gives $\partial^{2}h/\partial l^{2}=0$, $\partial^{2}h/\partial l\partial T=-8\pi^{2}T^{-3}$ and $\partial^{2}h/\partial T^{2}=24\pi^{2}lT^{-4}$, the symmetric Hessian $H_{h}$ of clause 2 of the statement; for $(l,T)\in U_{B}$ one has $T>T_{0}-\rho_{T}>0$ and $l<l_{0}+\rho_{l}$, so the moduli of the two second derivatives are below $8\pi^{2}(T_{0}-\rho_{T})^{-3}$ and $24\pi^{2}(l_{0}+\rho_{l})(T_{0}-\rho_{T})^{-4}$; since the Euclidean operator norm of a real symmetric $2\times2$ matrix is at most its Frobenius norm, the square root of the sum of the squares of all four entries (including both off-diagonal entries), $\lVert H_{h}(x)\rVert\le B$ holds on $U_{B}$ with the displayed $B$. [step 1.1, L2, algebra]

2.2 The map $h$ is $C^{2}$ on the open convex $U$, hence totally differentiable at $\mu$ with $Dh(\mu)$ as in step 1.1, and $X$ takes values in $U_{B}\subseteq U$ with mean $\mu$ and covariance matrix $\Sigma$, so [L3] identifies the covariance matrix of $T_{\mu}(X)$ as the $1\times1$ matrix $Dh(\mu)\Sigma Dh(\mu)^{\mathsf T}=\bigl(h(\mu)/l_{0}\bigr)^{2}\sigma_{l}^{2}-2\bigl(h(\mu)/l_{0}\bigr)\bigl(2h(\mu)/T_{0}\bigr)\sigma_{lT}+\bigl(2h(\mu)/T_{0}\bigr)^{2}\sigma_{T}^{2}$; substituting $h(\mu)=4\pi^{2}l_{0}/T_{0}^{2}$ gives the three terms of clause 3, and at $\sigma_{lT}=0$ the relation $Dh\Sigma Dh^{\mathsf T}=h(\mu)^{2}\bigl(\sigma_{l}^{2}/l_{0}^{2}+4\sigma_{T}^{2}/T_{0}^{2}\bigr)$ follows by factoring out $h(\mu)^{2}=16\pi^{4}l_{0}^{2}/T_{0}^{4}$. [given, step 1.1, L3, algebra]

3.1 Steps 1.1 and 2.1 exhibit $h$ as $C^{2}$ on the open convex box $U_{B}$ with $\lVert H_{h}\rVert\le B$ there, and $X$ takes values in $U_{B}$ with $E[X]=\mu$; [L4] with this $B$ gives the pointwise bound, the two mean bounds and the squared-moment bound of clause 4, the last under its stated fourth-moment hypothesis. [step 2.1, L4, algebra]

4.1 By [L5] with $u=Dh(\mu)$ the term $E\bigl[Dh(\mu)(X-\mu)\bigr]$ vanishes because $E[X]=\mu$, so $E[\hat g]=h(\mu)+E[R]$ and clause 4 bounds $\lvert E[\hat g]-h(\mu)\rvert$ by $\frac{B}{2}E\lvert X-\mu\rvert^{2}$, while the exact variance of $\hat g$ equals the propagated covariance of step 2.2 plus the covariance contributions of $R$, and [L4] explicitly gives $|\operatorname{Var}(\hat g)-s^2|\le B\sqrt{s^2M_4}+B^2M_4/4$ with $s^2=\operatorname{Var}(T_\mu(X))$ and $M_4=E|X-\mu|^4\le(\rho_l^2+\rho_T^2)^2<\infty$ by the bounded box; the model discrepancy $\delta$ of [L1] and the reference deviations of [[def-cm18-calibration]] are additional, separately declared terms, no number in the statement is a measured value, and the protocol has the status of a proposal for a future reported experiment in the sense of [[rem-cm18-primary-report-contract]]. [step 2.2, step 3.1, L1, L4, L5, given] ∎
