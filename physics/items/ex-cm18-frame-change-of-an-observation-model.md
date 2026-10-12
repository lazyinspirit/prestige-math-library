---
id: ex-cm18-frame-change-of-an-observation-model
kind: example
title: "Frame change of a declared protocol: how the prediction map and an additive error transform between two inertial frames"
status: draft
origin: pipeline
domain: physics
deps: [def-cm18-observable-model, pthm-cm01-galilean-kinematics, post-cm01-frames, def-cm-covariance-matrix-of-a-random-vector, lem-cm-linearized-propagation-of-covariance, def-cm01-units, def-random-element-and-real-random-variable, def-measurable-function-between-measurable-spaces, thm-continuous-preimages-of-borel-sets-are-borel, cor-expectation-linearity-monotonicity-and-modulus-bound]
dependency_roles:
  def-cm18-observable-model: formulation-prerequisite
  pthm-cm01-galilean-kinematics: physical-result
  post-cm01-frames: formulation-prerequisite
  def-cm-covariance-matrix-of-a-random-vector: mathematical-premise
  lem-cm-linearized-propagation-of-covariance: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-random-element-and-real-random-variable: mathematical-premise
  def-measurable-function-between-measurable-spaces: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked conditional computation of the frame behaviour of one declared protocol: a protocol whose readout is the position of one label at one observation time is described in a second inertial frame, and the prediction map and the additive error are transformed by the displayed affine law. The item asserts no measured position, no measured error and no frame-independent reading; it records that the prediction map and the error model are frame-relative data of a protocol."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Section 1.2.1, printed page 5 (PDF page 11): the Galilean transformations t' = t + b, x' = Rx + vt + a between inertial frames"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.1 point (v), chapter pages 2-3 (PDF pages 6-7): the transfer of the radius vector and of velocity and acceleration between frames, with the warning that rotating frames require more care"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "JCGM 100:2008, Evaluation of measurement data - Guide to the expression of uncertainty in measurement (BIPM, 2008 corrected version), clauses 5.1.2 and 5.2.2, equations (10) and (13): propagation of covariance through a linear relation, used here for the rotating error"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
verification:
  precheck: pass
---

## Example

Fix one particle label ($N=1$), the force branch and a model as in [[def-cm18-observable-model]], and fix
two inertial frames $F$, $F'$ of the model with adapted coordinates $(t,x)$
and $(t',x')$. By [[pthm-cm01-galilean-kinematics]] there are $b\in\mathbb R$,
$a_{0},v\in\mathbb R^{3}$ and $R\in SO(3)$ with
$$t'(p)=t(p)+b,\qquad x'(p)=R\,x(p)+v\,t(p)+a_{0}\qquad\text{for every event }p .$$

**The protocol in $F$.** Take a protocol of [[def-cm18-observable-model]]
with a single observation time $t_{1}\in I_{0}$ and the **position readout**
$\Phi(\theta,z):=x_{\theta,z}(t_{1})\in\mathbb R^{3}$ of dimension $\ell$,
read in metres ([[def-cm01-units]]); the observation is
$$Y=\Phi(\theta,z)+\varepsilon$$
for an error random element $\varepsilon:\Omega\to\mathbb R^{3}$ on a
probability space $(\Omega,\mathfrak F,\mathbb P)$.

**Domains under the coordinate change.** The transformed configuration set at time $t'$ is $Q'_{t'}:=RQ+v(t'-b)+a_0$, so the transformed time-configuration domain $\{(t',x'):t'\in I_0+b,\ x'\in Q'_{t'}\}$ is open (it is the image of $I_0\times Q$ under the invertible affine frame change). It need not be a product with one fixed configuration set, for example when a boost translates bounded $Q$. The following formulas always describe the coordinates of the same worldline and recorded events. They define a force-branch protocol in $F'$ only when the transformed model has an admissible fixed-domain presentation, in particular when $Q=\mathbb R^3$; no fixed-domain model is asserted in the general moving-domain case.

**The coordinate readout in $F'$.** The same event at which the readout is taken has
$F'$-time $t_{1}+b$; reading the same label position in $F'$ at that time
defines the transformed prediction map on the same parameter/preparation labels,
$$\Phi'(\theta,z):=x'_{\theta,z}(t_{1}+b)=R\,\Phi(\theta,z)+v\,t_{1}+a_{0},$$
and the $F'$-coordinates of the recorded point are
$$Y':=R\,Y+v\,t_{1}+a_{0}=\Phi'(\theta,z)+R\,\varepsilon,$$
so the additive-error form is preserved with the rotated error $\varepsilon':=R\varepsilon$ and the transformed open error domain $V':=RV$, which contains $0$ and contains every value of $\varepsilon'$.

**Transform of the error law.** Suppose $\varepsilon$ is square-integrable
with mean $E[\varepsilon]=0$ and covariance matrix $\Sigma$ in the sense of
[[def-cm-covariance-matrix-of-a-random-vector]]. Then $\varepsilon'=R\varepsilon$
has mean $0$ and covariance
$$\operatorname{Cov}(\varepsilon')=R\,\Sigma\,R^{\mathsf T},$$
and $\lvert\varepsilon'\rvert=\lvert\varepsilon\rvert$ in the Euclidean norm because $R$ is orthogonal. In particular an additive error
declared in one frame need not have the same law in another: its law is the pushforward under $R$, which equals the original law precisely when that law is invariant under this rotation, and the prediction
map acquires the known affine term $v\,t_{1}+a_{0}$. A protocol must declare
the frame of its readout and of its error model.

## Facts & Assumptions

**Given:** Two inertial frames $F$, $F'$ with the transformation of [[pthm-cm01-galilean-kinematics]], a protocol with the single position readout $\Phi(\theta,z)=x_{\theta,z}(t_{1})$, and a square-integrable error $\varepsilon$ with mean $0$ and covariance $\Sigma$.

[L1] The transformation law between the two frames is $t'(p)=t(p)+b$ and $x'(p)=R x(p)+v t(p)+a_{0}$ for every event $p$, with $b\in\mathbb R$, $a_{0},v\in\mathbb R^{3}$ and $R\in SO(3)$; the parameters have dimensions $[b]=\tau$, $[a_{0,j}]=\ell$, $[v_{j}]=\ell\tau^{-1}$ and $R$ is dimensionless ([[pthm-cm01-galilean-kinematics]], [[post-cm01-frames]], [[def-cm01-units]]).

[L2] A continuous map preimage of a Borel set is Borel, and composing a random element with a Borel map gives a random element: for the continuous affine map $\alpha(y):=Ry+v t_{1}+a_{0}$ one has $\alpha^{-1}(B)$ Borel for Borel $B$, and $(\alpha\circ\varepsilon)^{-1}(B)=\varepsilon^{-1}(\alpha^{-1}(B))$ ([[def-measurable-function-between-measurable-spaces]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[def-random-element-and-real-random-variable]]).

[L3] For a square-integrable random vector $X$ with mean $\mu$ and covariance $\Sigma$ and a linear map $A$, the affine map $T(x)=h(\mu)+A(x-\mu)$ applied to $X$ has covariance $A\Sigma A^{\mathsf T}$ ([[lem-cm-linearized-propagation-of-covariance]], [[def-cm-covariance-matrix-of-a-random-vector]]); expectations of integrable components are linear and the components of a linear image are finite linear combinations of integrable components ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

## Verification

**Proof technique:** direct transformation of the worldline and of the recorded point by the cited frame-change law, followed by the linear propagation of the error mean and covariance.

1.1 The worldline of the label described in $F'$ satisfies $x'_{\theta,z}(t')=R\,x_{\theta,z}(t'-b)+v(t'-b)+a_{0}$ for $t'\in J_{\theta,z}+b$ by [L1] applied to the events of the worldline; the readout event in $F$ has $F$-time $t_{1}$, hence $F'$-time $t_{1}+b$, and evaluating at $t'=t_{1}+b$ gives $\Phi'(\theta,z)=R\,x_{\theta,z}(t_{1})+v\,t_{1}+a_{0}=R\,\Phi(\theta,z)+v\,t_{1}+a_{0}$. [given, L1, algebra]

1.2 Square-integrability of $\varepsilon$ and the hypothesis $E[\varepsilon]=0$ give $E[\varepsilon_{j}]=0$ for every $j$, and the components of $R\varepsilon$ are finite linear combinations of the integrable components $\varepsilon_{j}$, so $E[R\varepsilon]=R\,E[\varepsilon]=0$ by linearity of expectation of the components [L3]; for the covariance, [L3] applied to $X=\varepsilon$, $\mu=0$ and the affine map $y\mapsto Ry$ (whose derivative is $R$ at every point) gives $\operatorname{Cov}(R\varepsilon)=R\,\Sigma\,R^{\mathsf T}$, and orthogonality of $R$ gives $\lvert R u\rvert=\lvert u\rvert$ for every $u$, hence equality of the norms of $\varepsilon'$ and $\varepsilon$ pointwise. [given, L3, algebra]

2.1 The recorded point has $F'$-coordinates $Y'=R\,Y+v\,t_{1}+a_{0}$ by the same transformation law applied to the observed event, and substituting $Y=\Phi+\varepsilon$ together with step 1.1 gives $Y'=\Phi'+R\varepsilon$; the rotated error $\varepsilon':=R\varepsilon$ is a random element of $\mathbb R^{3}$ by [L2], since $y\mapsto Ry$ is linear and continuous and addition of the constant vector $v t_{1}+a_{0}$ is a translation. [given, step 1.1, L2]

3.1 The computation is a transformation of declared protocol data; it asserts nothing about which frame an apparatus realizes, no measured position and no measured error, and it shows that the prediction map and the error model of [[def-cm18-observable-model]] are frame-relative and that a change of frame applies to both, with the affine shift $v\,t_{1}+a_{0}$ and the rotation of the error. [step 1.1, step 2.1, step 1.2, given] ∎
