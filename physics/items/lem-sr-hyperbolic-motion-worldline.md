---
id: lem-sr-hyperbolic-motion-worldline
kind: lemma
title: "The uniformly accelerated worldline: hyperbolic motion, constant four-acceleration magnitude, and identification as a Rindler flow line"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart, def-sr-regular-causal-curve-and-worldline, def-sr-proper-time, def-sr-four-velocity-and-four-acceleration, thm-sr-proper-time-and-observer-decomposition, def-sr-observer-congruence-and-kinematics, def-flat-covariant-derivative-on-affine-minkowski-space, thm-sr-fermi-walker-and-rigid-observer-examples, def-hyperbolic-functions, thm-hyperbolic-identities-and-derivatives, def-derivative, thm-algebra-of-derivatives, thm-chain-rule, lem-sr-proper-time-parametrization, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, thm-exponential-limits-and-range, lem-sr-future-causal-sums-and-inertial-coordinate-criterion]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-observer-congruence-and-kinematics: mathematical-premise
  def-flat-covariant-derivative-on-affine-minkowski-space: mathematical-premise
  thm-sr-fermi-walker-and-rigid-observer-examples: mathematical-premise
  def-hyperbolic-functions: mathematical-premise
  thm-hyperbolic-identities-and-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  lem-sr-proper-time-parametrization: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  thm-exponential-limits-and-range: mathematical-premise
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 3.5.2 'The acceleration vector', Example 4 'Constant proper acceleration' and the following page (hyperbolic motion t = (1/a) sinh(a tau), x = (1/a) cosh(a tau), the identity x = (1/a) sqrt(1 + a^2t^2) and the lightlike asymptote) and Section 7.1 'An example: accelerated coordinates' p. 148 (t = X sinh T, x = X cosh T, proper acceleration 1/X); signature (+---) converted to (-+++), c = 1 formulas restored to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "M. Blau, Lecture Notes on General Relativity (University of Bern, last update October 5, 2026, 1052 PDF pages): Section 1.3 pp. 36-38 (the worldline u = (cosh a tau, sinh a tau), xi = (a^{-1} sinh a tau, a^{-1} cosh a tau), the hyperbola eta(xi,xi) = -a^{-2} in the quadrant x^1 > |x^0|, and the proper time and acceleration a = 1/rho_0 of a rho = const worldline) and Section 3.4 pp. 90-93 (Rindler coordinates, their ranges and the right Rindler wedge)"
      url: "http://www.blau.itp.unibe.ch/newlecturesGR.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
aliases: []
---

## Statement

Let $c > 0$ and $\alpha > 0$, set $R := c^2/\alpha$, and let $(A,V,\eta,C^+)$ be the affine Minkowski space with an inertial chart $\chi = (x^0,x^1,x^2,x^3)$, $x^0 = c t$ ([[def-sr-affine-minkowski-model]], [[def-inertial-frame-and-inertial-chart]]). Write $x^a(\tau):=\chi^a(x(\tau))$ for the coordinate components of the curve $x:\mathbb R\to A$ defined by $x(\tau) := \chi^{-1}(R \sinh \theta, R \cosh \theta, 0, 0)$, where $\theta := \alpha \tau/c$.

(a) **Regularity, causal character and parametrization.** $x$ is $C^\infty$, and $x'(\tau) = c(\cosh \theta, \sinh \theta, 0, 0)$ is future timelike for every $\tau$ ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]), so $x$ is a future timelike worldline ([[def-sr-regular-causal-curve-and-worldline]]). Since $\eta(x',x') = -c^2$ is constant, the parameter $\tau$ is a proper-time parameter of the curve: the proper-time function $T$ of [[def-sr-proper-time]] satisfies $T(b)-T(a)=b-a$ for all $a < b$ in $\mathbb R$ ([[def-sr-proper-time]], [[lem-sr-proper-time-parametrization]]), and the four-velocity is $U := dx/d\tau = c(\cosh \theta, \sinh \theta, 0, 0)$ with $\eta(U,U) = -c^2$ ([[def-sr-four-velocity-and-four-acceleration]], [[thm-sr-proper-time-and-observer-decomposition]] (a)).

(b) **Constant four-acceleration magnitude.** The four-acceleration $A := dU/d\tau = \alpha(\sinh \theta, \cosh \theta, 0, 0)$ satisfies $\eta(A,A) = \alpha^2$ and $\eta(U,A) = 0$. The chart coordinate velocity is $dx^1/dt = c \tanh \theta$, so $|dx^1/dt| < c$ for every $\tau$, and $x^1 = R \cosh \theta > R|\sinh \theta| = |x^0|$ for every $\tau$: the worldline lies in the right wedge $W := \{x^1 > |x^0|\}$ and its speed in the chart tends to $c$ only as $\tau \to \pm\infty$.

(c) **Rindler flow line.** Let $\Phi(\theta,\rho,y,z) := \chi^{-1}(\rho \sinh \theta, \rho \cosh \theta, y, z)$ on $\mathbb R \times (0,\infty) \times \mathbb R^2$ and let $n := \rho^{-1} \partial_\theta$ be the Rindler congruence of [[thm-sr-fermi-walker-and-rigid-observer-examples]] (b), whose pullback metric is $-\rho^2 d\theta^2 + d\rho^2 + dy^2 + dz^2$ and whose congruence acceleration $a_{\mathrm{cg}} := \nabla_n n$ is $\rho^{-1} \partial_\rho$, with $\eta(a_{\mathrm{cg}},a_{\mathrm{cg}}) = \rho^{-2}$ ([[def-flat-covariant-derivative-on-affine-minkowski-space]], [[def-sr-observer-congruence-and-kinematics]]). Then $x$ is exactly the flow line $\Phi(\cdot, R, 0, 0)$ reparametrized by $\theta = \alpha \tau/c$, and along $x$ one has $A = c^2 a_{\mathrm{cg}}$: the four-acceleration of the worldline is $c^2$ times the congruence acceleration, and $\eta(a_{\mathrm{cg}},a_{\mathrm{cg}}) = 1/R^2 = \alpha^2/c^4$ on the flow line $\rho = R$.

(d) **Asymptotic behaviour.** Along $x$ one has $x^1 - x^0 = R e^{-\theta} \to 0$ with $x^0 \to +\infty$ as $\tau \to +\infty$, and $x^1 + x^0 = R e^{\theta} \to 0$ with $x^0 \to -\infty$ as $\tau \to -\infty$: the worldline approaches each of the null planes $\{x^1 = x^0\}$ and $\{x^1 = -x^0\}$ asymptotically without meeting either, and the chart coordinate speed tends to $c$ at both ends.

(e) **Scope.** This is an exact kinematic computation in the affine model. It uses no force law, no mass, no clock hypothesis and no empirical input; beyond identifying the displayed parameter with the proper time of the curve, only the flow parametrization of the congruence is used. The curve is not asserted to be a geodesic and no statement is made about the forces that would maintain it. No choice principle is used.

## Facts & Assumptions

**Given:** The affine Minkowski space $(A,V,\eta,C^+)$ with fixed $c>0$; an inertial chart $\chi=(x^0,x^1,x^2,x^3)$ with $x^0=ct$ and orthonormal basis $(e_0,e_1,e_2,e_3)$ ([[def-inertial-frame-and-inertial-chart]]); $\alpha>0$, $R=c^2/\alpha$, $\theta=\alpha\tau/c$, and the curve $x(\tau)=\chi^{-1}(R\sinh\theta,R\cosh\theta,0,0)$ for $\tau\in\mathbb R$.

[L1] Model and chart: $\chi(p)=E^{-1}(p-o)$ for the frame isomorphism $E$, so specifying the four coordinates determines the event, and vector components are read in the orthonormal basis $(e_a)$ in which $\eta$ has matrix $\operatorname{diag}(-1,1,1,1)$ ([[def-sr-affine-minkowski-model]], [[def-inertial-frame-and-inertial-chart]]).

[L2] Differentiability of a curve $x:I\to A$ is defined through its coordinate representation $\chi\circ x$, with $x'(\tau)=E((\chi\circ x)'(\tau))$; the curve is $C^k$ when the coordinate map is ([[def-sr-regular-causal-curve-and-worldline]] (a)).

[L3] $\sinh u=(e^u-e^{-u})/2$, $\cosh u=(e^u+e^{-u})/2$, $\tanh u=\sinh u/\cosh u$, and $\cosh u>0$ for all real $u$ ([[def-hyperbolic-functions]]).

[L4] $\cosh^2u-\sinh^2u=1$, $(\sinh u)'=\cosh u$, $(\cosh u)'=\sinh u$, $\sinh$ is odd, $\cosh$ is even, $\tanh:\mathbb R\to(-1,1)$ is strictly increasing and onto ([[thm-hyperbolic-identities-and-derivatives]]). The limits $\tanh u\to\pm1$ follow from its exponential formula and [L14].

[L5] Differentiability and the chain rule: the derivative of a composite with an affine inner map is the product, $(\sinh\circ g)'=(\cosh\circ g)g'$, and sums, scalar multiples and products of differentiable functions are differentiable with the usual rules ([[def-derivative]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[L6] Coordinate criterion: in any inertial chart, $C^+=\{v:v^0>|v_s|\}$ and $\bar C^+=\{v:v^0\ge|v_s|\}$, where $v^0$ is the time component and $|v_s|$ the Euclidean norm of the spatial part ([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]] (a)).

[L7] Causal classification: a vector $v$ is timelike if $\eta(v,v)<0$, spacelike if $\eta(v,v)>0$, and each nonzero timelike vector is future or past but not both ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]).

[L8] Proper time: for a $C^1$ future timelike worldline $x$, $\tau(b)-\tau(a)=c^{-1}\int_a^b\sqrt{-\eta(x'(u),x'(u))}\,du$, defined up to an additive constant ([[def-sr-proper-time]]).

[L9] Proper-time parametrization: $\tau$ is $C^1$ and strictly increasing with $\tau'(s)=c^{-1}\sqrt{-\eta(x'(s),x'(s))}>0$; the reparametrized curve $x\circ\rho$ has tangent $x'(s)/\tau'(s)$ at the proper-time parameter, and the derivative formula is the four-velocity ([[lem-sr-proper-time-parametrization]] (i),(iii),(iv)).

[L10] Four-velocity and four-acceleration: $U=x'/\tau'=cx'/\sqrt{-\eta(x',x')}$, and for $C^2$ curves $A=U'/\tau'$ is the derivative of $U$ with respect to the proper-time parameter ([[def-sr-four-velocity-and-four-acceleration]] (a),(b)); $\eta(U,U)=-c^2$ and $\eta(U,A)=0$ with $A$ spacelike wherever it is nonzero ([[thm-sr-proper-time-and-observer-decomposition]] (a),(b)).

[L11] The smooth Rindler field of [L13] is future unit timelike; its acceleration is $a_{\mathrm{cg}}=\nabla_nn$ with $\eta(n,a_{\mathrm{cg}})=0$ ([[def-sr-observer-congruence-and-kinematics]] (b),(e)).

[L12] Covariant derivative along curves: for a $C^1$ curve $y$ and a $C^1$ ambient field $W$ defined near its image, the derivative of the restricted field $W\circ y$ is $\nabla_{\dot y}W$ in the canonical identification, and $\nabla_{fX}Y=f\nabla_XY$ ([[def-flat-covariant-derivative-on-affine-minkowski-space]] (a),(d)).

[L13] Rindler congruence: $\Phi(\theta,\rho,y,z)=\chi^{-1}(\rho\sinh\theta,\rho\cosh\theta,y,z)$ is a smooth bijection onto the right wedge $W$ with pullback metric $-\rho^2d\theta^2+d\rho^2+dy^2+dz^2$; $n=\rho^{-1}\partial_\theta$ is future unit timelike, Born rigid and irrotational, with $a_{\mathrm{cg}}=\rho^{-1}\partial_\rho$ and $\eta(a_{\mathrm{cg}},a_{\mathrm{cg}})=\rho^{-2}$ ([[thm-sr-fermi-walker-and-rigid-observer-examples]] (b)).

[L14] Exponential limits: $e^u\to+\infty$ as $u\to+\infty$ and $e^u\to0$ as $u\to-\infty$ ([[thm-exponential-limits-and-range]]).

## Proof

**Proof technique:** direct.

1.1 (The tangent.) Writing $x$ in the chart, the coordinate functions are $\tau\mapsto R\sinh(\alpha\tau/c)$, $\tau\mapsto R\cosh(\alpha\tau/c)$, and the two constants $0$; differentiating with the chain rule and the hyperbolic derivative formulas gives $x'(\tau)=(R\frac{\alpha}{c}\cosh\theta,\,R\frac{\alpha}{c}\sinh\theta,\,0,\,0)=(c\cosh\theta,\,c\sinh\theta,\,0,\,0)$, because $R\alpha/c=c$ by $R=c^2/\alpha$. In particular the coordinate functions are $C^\infty$, since each derivative has the same form with $\sinh$ and $\cosh$ exchanged. [L1, L2, L3, L4, L5, algebra]

1.2 (Elementary hyperbolic identities.) From the exponential definitions, $\cosh\theta-\sinh\theta=e^{-\theta}$ and $\cosh\theta+\sinh\theta=e^{\theta}$; combined with $\cosh^2\theta-\sinh^2\theta=1$ and $\cosh\theta>0$ this gives $\cosh\theta>|\sinh\theta|\ge0$, hence $|\tanh\theta|<1$ for every $\theta$. [L3, L4, algebra]

1.3 (The curve is a Rindler flow line.) Substituting $\rho=R$, $y=z=0$ into $\Phi$ gives $\Phi(\theta,R,0,0)=\chi^{-1}(R\sinh\theta,R\cosh\theta,0,0)=x(\tau)$ with $\theta=\alpha\tau/c$; hence $x$ is exactly the flow line $\Phi(\cdot,R,0,0)$, reparametrized by the affine map $\tau\mapsto\theta=\alpha\tau/c$, and at $\rho=R$ the Rindler field is $n=R^{-1}\partial_\theta$ with acceleration $a_{\mathrm{cg}}=R^{-1}\partial_\rho$. [L1, L13, given]

2.1 ($x$ is a $C^\infty$ regular future timelike worldline.) By step 1.1 the coordinate functions are $C^\infty$, so $x$ is $C^\infty$ by [L2]; $\eta(x',x')=c^2(-\cosh^2\theta+\sinh^2\theta)=-c^2<0$ by step 1.2 and the matrix of $\eta$ in the frame, so $x'$ is timelike; and its time component is $x'^0=c\cosh\theta>c|\sinh\theta|=|(x')_s|$ by step 1.2, so $x'\in C^+$ by the coordinate criterion [L6]. Hence $x'$ is future timelike and nonzero, and $x$ is a future timelike worldline. [L6, L7, step 1.1, step 1.2]

2.2 (Chart speed and the wedge.) The chart time is $x^0=ct$ with $x'^0=c\cosh\theta$, so $dt/d\tau=\cosh\theta$ and, by step 1.1, $dx^1/dt=(dx^1/d\tau)/(dt/d\tau)=c\sinh\theta/\cosh\theta=c\tanh\theta$; step 1.2 gives $|dx^1/dt|=c|\tanh\theta|<c$. Also $x^1=R\cosh\theta>R|\sinh\theta|=|x^0|$ by step 1.2, so the worldline lies in $W=\{x^1>|x^0|\}$. [L1, L3, step 1.1, step 1.2]

3.1 (Proper-time parametrization and four-velocity.) By step 2.1 the curve is a $C^1$ future timelike worldline, so its proper-time function satisfies $T(b)-T(a)=c^{-1}\int_a^b\sqrt{-\eta(x',x')}\,du=c^{-1}\int_a^bc\,du=b-a$ by [L8] and step 2.1; thus the given parameter is a proper-time parameter of $x$ up to an additive constant, in agreement with [L9]. Consequently the four-velocity is $U=x'/T'=c(\cosh\theta,\sinh\theta,0,0)$ by [L10] and step 1.1, and $\eta(U,U)=-c^2$. [L8, L9, L10, step 1.1, step 2.1]

3.2 (Asymptotics.) From the addition formulas in exponential form of step 1.2, $x^1-x^0=R(\cosh\theta-\sinh\theta)=Re^{-\theta}$ and $x^1+x^0=R(\cosh\theta+\sinh\theta)=Re^{\theta}$, both strictly positive for every $\tau$. As $\tau\to+\infty$ we have $\theta\to+\infty$, so $e^{-\theta}\to0$ by [L14] and $x^0=R\sinh\theta\to+\infty$; as $\tau\to-\infty$ we have $\theta\to-\infty$, so $e^{\theta}\to0$ and $x^0\to-\infty$. Hence the worldline approaches both null planes asymptotically and meets neither. For $\theta\to+\infty$, $\tanh\theta=(1-e^{-2\theta})/(1+e^{-2\theta})\to1$ by [L14]; oddness gives the negative-end limit $-1$. Thus the signed chart velocity tends to $\pm c$ and its magnitude to $c$. [L4, L14, step 1.2, step 2.2]

4.1 (The four-acceleration and its magnitude.) Differentiating each component of $U$ in the proper-time parameter $\tau$ with the chain rule and the hyperbolic derivative formulas gives $A=U'=c(\sinh\theta,\cosh\theta,0,0)\tfrac{\alpha}{c}=\alpha(\sinh\theta,\cosh\theta,0,0)$. Then $\eta(A,A)=\alpha^2(-\sinh^2\theta+\cosh^2\theta)=\alpha^2$ and $\eta(U,A)=c\alpha(-\cosh\theta\sinh\theta+\sinh\theta\cosh\theta)=0$ by step 1.2; the second identity is consistent with [L10]. [L4, L5, L10, step 1.2, step 3.1, algebra]

4.2 (Identification of the four-acceleration with $c^2a_{\mathrm{cg}}$.) Along $x$ one has $dx/d\tau=cn$ by steps 1.3 and 3.1 with $n=R^{-1}\partial_\theta$; the total derivative of $n\circ x$ along this smooth curve is $\nabla_{dx/d\tau}n$, and by [L12] and [L11] it equals $\nabla_{cn}n=c\nabla_nn=ca_{\mathrm{cg}}$. Therefore $A=dU/d\tau=c\,d(n\circ x)/d\tau=c\nabla_{dx/d\tau}n=c^2a_{\mathrm{cg}}$. Substituting $\rho=R$ into $\eta(a_{\mathrm{cg}},a_{\mathrm{cg}})=\rho^{-2}$ from [L13] gives $\eta(a_{\mathrm{cg}},a_{\mathrm{cg}})=1/R^2=\alpha^2/c^4$. [L11, L12, L13, step 1.3, step 3.1]

5.1 (Scope.) Every step above is a finite-dimensional computation in the affine model from the cited definitional suppliers: the curve, its causal character, its proper-time parametrization, its four-acceleration, the identification $A=c^2a_{\mathrm{cg}}$ and the asymptotics. No force law, mass, geodesic property, clock hypothesis or empirical input was used, and no choice principle was used. [L11, step 3.1, step 3.2, step 4.1, step 4.2] ∎
