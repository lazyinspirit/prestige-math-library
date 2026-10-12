---
id: ex-cm18-uniform-motion-sampling-check
kind: example
title: "Repeated observation of a uniform motion: prediction map, adopted IID sampling hypotheses and the resulting sample-mean bound on declared data"
status: draft
origin: pipeline
domain: physics
deps: [def-cm18-observable-model, def-cm18-sampling-model, def-cm02-newtonian-flow, post-cm02-force-superposition, def-cm01-velocity-acceleration, def-cm01-units, cor-iid-finite-variance-weak-law, def-moments-variance-and-covariance, lem-variance-and-covariance-identities-for-random-variables]
dependency_roles:
  def-cm18-observable-model: formulation-prerequisite
  def-cm18-sampling-model: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  cor-iid-finite-variance-weak-law: mathematical-premise
  def-moments-variance-and-covariance: mathematical-premise
  lem-variance-and-covariance-identities-for-random-variables: mathematical-premise
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked conditional computation on a declared one-label force model with zero force: the motion with constant coordinate velocity is checked to be a motion, the protocol reads one position coordinate at one time, and under the adopted IID and second-moment hypotheses of the sampling model the sample mean of repeated readings satisfies the displayed variance identity and probability bound. All numerical values are declared model data and hypothetical illustration; no physical motion, apparatus reading, measured velocity or uncertainty is asserted."
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data - Guide to the expression of uncertainty in measurement (BIPM, 2008 corrected version), clause 4.2.1 on the arithmetic mean of repeated observations and clause 5.1.2, equation (10), on the combination of standard uncertainties"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 2.2.1: the variance of a sum of independent variables and the L2 weak law for i.i.d. sequences (Theorem 2.2.3)"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): Newton's second law for a particle and the free particle with constant velocity"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

**The declared model.** In the force branch [[post-cm02-force-superposition]]
take $N=1$ label of mass $m>0$, time window $I_{0}=\mathbb R$, configuration
domain $Q=\mathbb R^{3}$ and the **zero force map** $F(t,x,v):=0$. It is
continuous and state-Lipschitz with constant $0$, so it satisfies the
standing hypotheses of the branch. With $e_{1}$ the first standard basis
vector and a parameter $v\in\mathbb R$ of dimension $\ell\tau^{-1}$
([[def-cm01-units]]), declare the initial datum $\zeta(v):=(0,0,v e_{1})$ at
time $t_{0}=0$, so that $\Theta:=\mathbb R$ and the datum map $\zeta$ of
[[def-cm18-observable-model]] is defined. Fix an observation time $t_{1}>0$
and the **position readout** $\Phi(v):=x_{v}(t_{1})\cdot e_{1}$, where
$x_{v}$ is the motion of the model with datum $\zeta(v)$; the readout has
dimension $\ell$ and is read in metres.

**The motion.** The curve $x_{v}(t):=(vt,0,0)$, $t\in\mathbb R$, is a
motion of the declared model with datum $\zeta(v)$: its coordinate velocity
is $w_{v}(t)=(v,0,0)$ ([[def-cm01-velocity-acceleration]]), its coordinate
acceleration vanishes, and $m\ddot x_{v}=0=F$ identically
([[def-cm02-newtonian-flow]]). Hence the prediction map is
$\Phi(v)=v\,t_{1}$, of dimension $\ell$ with $[t_{1}]=\tau$.

**The repeated protocol.** Fix $n\ge1$ and adopt the IID sampling hypothesis
and the second-moment hypothesis of [[def-cm18-sampling-model]] for the
errors $\varepsilon_{1},\dots,\varepsilon_{n}$ of $n$ repetitions of the
protocol at the same parameter $v$ and the same preparation, on a common
probability space. Suppose additionally that $E[\varepsilon_{1}]=0$ and
$\operatorname{Var}(\varepsilon_{1})=\sigma^{2}\in[0,+\infty)$; these two
statements are extra model hypotheses, not part of either definition. Then
the observations are $Y_{k}=v t_{1}+\varepsilon_{k}$ and
$$\mu:=E[Y_{1}]=v\,t_{1},\qquad \sigma^{2}=\operatorname{Var}(Y_{1}),\qquad \overline Y=\frac1n\sum_{k=1}^{n}Y_{k}.$$
Consequently, by [[cor-iid-finite-variance-weak-law]],
$$E\bigl\lvert\overline Y-v t_{1}\bigr\rvert^{2}=\frac{\sigma^{2}}{n}, \qquad \mathbb P\bigl(\bigl\lvert\overline Y-v t_{1}\bigr\rvert\ge a\bigr) \le\frac{\sigma^{2}}{n\,a^{2}}\quad(a>0).$$

**A declared illustration.** With the declared model data
$v:=2\,\mathrm m\,\mathrm s^{-1}$, $t_{1}:=3\,\mathrm s$, $\sigma^{2}:=4\,\mathrm m^{2}$
and $n:=16$, the nominal prediction is $v t_{1}=6\,\mathrm m$ and the bound
reads $\mathbb P(\lvert\overline Y-6\,\mathrm m\rvert\ge1\,\mathrm m)\le\frac{4}{16\cdot1}=\frac14$.
These numbers are hypothetical illustration of the formula; they are not
measured values, and no apparatus is asserted to realize the protocol.

## Facts & Assumptions

**Given:** The one-label model with zero force map of the statement, the datum map $\zeta(v)=(0,0,ve_{1})$, the observation time $t_{1}>0$, the position readout $\Phi(v)=x_{v}(t_{1})\cdot e_{1}$, and the adopted IID, second-moment, zero-mean and variance hypotheses on the errors of $n$ repetitions.

[L1] The curve $x_{v}(t)=(vt,0,0)$ is of class $C^{\infty}$; coordinate velocities and accelerations are obtained componentwise, and a motion of the model is a $C^{2}$ curve satisfying $m\ddot x=F$ on the time window ([[def-cm01-velocity-acceleration]], [[def-cm02-newtonian-flow]]); the zero force map satisfies the standing hypotheses of [[post-cm02-force-superposition]] because it is continuous and state-Lipschitz with constant $0$.

[L2] Under the IID and second-moment hypotheses, the sampling model [[def-cm18-sampling-model]] has common mean $\mu=E[Y_{1}]$ and variance $\sigma^{2}=\operatorname{Var}(Y_{1})$ defined by [[def-moments-variance-and-covariance]], and the mathematical consequences for the sample mean are those of [[cor-iid-finite-variance-weak-law]]: $E\lvert\overline Y-\mu\rvert^{2}=\sigma^{2}/n$ and $\mathbb P(\lvert\overline Y-\mu\rvert\ge a)\le\sigma^{2}/(na^{2})$ for $a>0$.

[L3] Variance and covariance identities: for square-integrable real random variables, $\operatorname{Var}(X)=E[X^{2}]-E[X]^{2}$ and covariance is symmetric and bilinear on finite linear combinations; consequently adding a constant to a random variable leaves its variance unchanged ([[lem-variance-and-covariance-identities-for-random-variables]], [[def-moments-variance-and-covariance]]).

## Verification

**Proof technique:** direct substitution to exhibit the motion, evaluation of the readout, and application of the cited sampling corollary to the declared data.

1.1 For every $t\in\mathbb R$ one has $x_{v}(t)=(vt,0,0)$, $w_{v}(t)=x_{v}'(t)=(v,0,0)$ and $\ddot x_{v}(t)=(0,0,0)$, so the equation $m\ddot x_{v}(t)=F(t,x_{v}(t),w_{v}(t))=0$ holds identically by [L1], and $x_{v}(0)=(0,0,0)$ with $w_{v}(0)=(v,0,0)$ matching the datum $\zeta(v)$; hence $x_{v}$ is a motion with datum $\zeta(v)$. [given, L1]

1.2 Evaluating the readout at the state of that motion at $t_{1}$ gives $\Phi(v)=x_{v}(t_{1})\cdot e_{1}=v\,t_{1}$, linear in $v$, with $[\Phi(v)]=\ell$ because $[v]=\ell\tau^{-1}$ and $[t_{1}]=\tau$ ([[def-cm01-units]]); by [[def-cm18-observable-model]] the observation of a single run at parameter $v$ is $Y=\Phi(v)+\varepsilon$, and the repeated protocol of [[def-cm18-sampling-model]] has $Y_{k}=\Phi(v)+\varepsilon_{k}$. [given, L1, algebra]

1.3 The hypotheses $E[\varepsilon_{1}]=0$ and $\operatorname{Var}(\varepsilon_{1})=\sigma^{2}$ transfer to $Y_{k}=vt_{1}+\varepsilon_{k}$ by linearity of expectation and the translation invariance of variance from [L3], so $\mu=vt_{1}$ and $E\lvert Y_{1}\rvert^{2}=\mu^{2}+\sigma^{2}<+\infty$; the family $(Y_{k})_{k\le n}$ is IID with common mean $\mu$ and variance $\sigma^{2}$, and [L2] gives the two displayed conclusions for $\overline Y$. [given, L2, L3, algebra]

2.1 Substituting the declared model data into the identity and the bound of step 1.3 gives $E\lvert\overline Y-6\,\mathrm m\rvert^{2}=\frac{4}{16}\,\mathrm m^{2}=\frac14\,\mathrm m^{2}$ and $\mathbb P(\lvert\overline Y-6\,\mathrm m\rvert\ge1\,\mathrm m)\le\frac14$, computations on declared data. [step 1.3, algebra]

3.1 The computed quantities are model quantities of the declared force model and the adopted sampling hypotheses; the example asserts no motion of a physical body, no apparatus reading and no measured uncertainty, and a use of the displayed bound in inference carries the IID and second-moment hypotheses, the zero-mean and variance hypotheses of the errors, and the declared units. [step 1.3, step 2.1, given] ∎
