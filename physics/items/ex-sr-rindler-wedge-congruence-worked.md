---
id: ex-sr-rindler-wedge-congruence-worked
kind: example
domain: mathematics
title: "Worked Rindler wedge congruence: chart, metric, acceleration, rigidity and non-coordinate frame"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-sr-fermi-walker-and-rigid-observer-examples, def-sr-observer-congruence-and-kinematics, thm-sr-local-congruence-adapted-charts-and-frobenius, def-inertial-frame-and-inertial-chart, def-lie-bracket-of-smooth-vector-fields, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components, def-hyperbolic-functions, thm-hyperbolic-identities-and-derivatives, def-sr-affine-minkowski-model, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, def-flat-covariant-derivative-on-affine-minkowski-space, def-natural-logarithm, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]
dependency_roles:
  thm-sr-fermi-walker-and-rigid-observer-examples: mathematical-premise
  def-sr-observer-congruence-and-kinematics: mathematical-premise
  thm-sr-local-congruence-adapted-charts-and-frobenius: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lie-bracket-of-smooth-vector-fields: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-hyperbolic-functions: mathematical-premise
  thm-hyperbolic-identities-and-derivatives: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-diffeomorphism-and-local-diffeomorphism-of-manifolds: mathematical-premise
  def-flat-covariant-derivative-on-affine-minkowski-space: mathematical-premise
  def-natural-logarithm: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "D. Giulini, Algebraic and geometric structures of Special Relativity, arXiv:math-ph/0602018: Section 5.5 pp. 41-49 (Definition 7 and equation (123) of Born rigidity, equations (125)-(126), Proposition 14, Lemma 16, Theorem 15 part 1, Lemmas 17-18, Theorem 19 part 2); signature (+---) converted to (-+++)"
      url: "https://arxiv.org/pdf/math-ph/0602018"
---

## Example

In the inertial chart $(x^0,x,y,z)$ with metric $\operatorname{diag}(-1,1,1,1)$ consider $\Phi(\theta,\rho,y,z):=(\rho\sinh\theta,\rho\cosh\theta,y,z)$ on $\mathbb R\times(0,\infty)\times\mathbb R^2$, with $\theta\in\mathbb R$ and $\rho>0$. Then:

(a) the identities $x^2-(x^0)^2=\rho^2$ and $x=\rho\cosh\theta>0$ show that the image of $\Phi$ is the right wedge $W=\{x>|x^0|\}$, and the inverse $\rho=\sqrt{x^2-(x^0)^2}$, $\theta=\tfrac12\log\bigl((x+x^0)/(x-x^0)\bigr)$ is smooth on $W$; both maps are smooth, so $\Phi$ is a diffeomorphism onto $W$;

(b) differentiating gives $dx^0=\sinh\theta\,d\rho+\rho\cosh\theta\,d\theta$ and $dx=\cosh\theta\,d\rho+\rho\sinh\theta\,d\theta$, so the pullback metric is $-\rho^2d\theta^2+d\rho^2+dy^2+dz^2$;

(c) the field $n:=\rho^{-1}\partial_\theta$ satisfies $\eta(n,n)=-1$ and is future; computing with the pullback metric, the nonzero connection coefficients are $\Gamma^\rho_{\theta\theta}=\rho$ and $\Gamma^\theta_{\theta\rho}=\Gamma^\theta_{\rho\theta}=1/\rho$, so $\nabla_{\partial_\theta}\partial_\theta=\rho\,\partial_\rho$ and the congruence acceleration is $a=\nabla_nn=\rho^{-1}\partial_\rho$ with $\eta(a,a)=1/\rho^2$; for example at $\rho=2$ one has $|a|=1/2$ in reciprocal-length units;

(d) the slices $\theta=const$ are open subsets of hyperplanes through the origin with induced metric $d\rho^2+dy^2+dz^2$, independent of $\theta$; hence the congruence is Born rigid, and it is irrotational because its rest distribution is the tangent distribution of these slices;

(e) the tetrad field $(n,\partial_\rho,\partial_y,\partial_z)$ is not a coordinate frame, since $[n,\partial_\rho]=[\rho^{-1}\partial_\theta,\partial_\rho]=+\rho^{-2}\partial_\theta=+(1/\rho)n$ is nonzero, whereas the members of a coordinate frame commute.

This realizes the Rindler congruence of [[thm-sr-fermi-walker-and-rigid-observer-examples]] clause (b) with exact formulas.

## Facts & Assumptions

**Given:** The inertial chart of the affine Minkowski model with $\eta=\operatorname{diag}(-1,1,1,1)$ ([[def-inertial-frame-and-inertial-chart]], [[def-sr-affine-minkowski-model]]), the map $\Phi(\theta,\rho,y,z)=(\rho\sinh\theta,\rho\cosh\theta,y,z)$ defined on $\mathbb R\times(0,\infty)\times\mathbb R^2$, and the field $n=\rho^{-1}\partial_\theta$.

[L1] Hyperbolic functions: $\cosh^2s-\sinh^2s=1$, $\cosh s>|\sinh s|$ for all real $s$, $\sinh'=\cosh$, $\cosh'=\sinh$, and $\tanh=\sinh/\cosh$ ([[def-hyperbolic-functions]], [[thm-hyperbolic-identities-and-derivatives]]).

[L2] Future timelike criterion and units: in the inertial chart a vector with components $(u^0,u^1,u^2,u^3)$ is future timelike exactly when $-(u^0)^2+(u^1)^2+(u^2)^2+(u^3)^2<0$ and $u^0>0$ ([[lem-timelike-cone-has-two-convex-components]], [[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]).

[L3] Kinematics and Frobenius: the acceleration $a$ of a congruence, its expansion $\theta$ and vorticity $\omega$ satisfy $\nabla_an_b=-n_aa_b+\theta_{ab}+\omega_{ab}$ with $\theta,\omega$ horizontal; Born rigidity is $\theta=0$; and the rest distribution is integrable on an open set if and only if $\omega=0$ there ([[def-sr-observer-congruence-and-kinematics]], [[thm-sr-local-congruence-adapted-charts-and-frobenius]] clauses (ii),(iii)).

[L4] Lie bracket: $[fX,Y]=f[X,Y]-Y(f)X$ and coordinate frame members commute, $[\partial_a,\partial_b]=0$ ([[def-lie-bracket-of-smooth-vector-fields]]).

[L5] The logarithm is $\exp^{-1}:(0,\infty)\to\mathbb R$ ([[def-natural-logarithm]]); smooth Euclidean maps with invertible derivative have smooth local inverses ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]). Diffeomorphisms: a smooth bijection with smooth inverse between open subsets is a diffeomorphism ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[L6] The flat covariant derivative differentiates inertial components, $(\nabla_XY)^a=X^b\partial_bY^a$ ([[def-flat-covariant-derivative-on-affine-minkowski-space]]). In another coordinate basis its connection coefficients are the coefficients of these same derivatives in that basis.
## Verification

**Proof technique:** direct.

1.1 Bijection and inverse: $\Phi$ is smooth because its components are sums of smooth functions of $(\theta,\rho,y,z)$ by [L1]. For $(\theta,\rho,y,z)$ in the domain one has $x^2-(x^0)^2=\rho^2(\cosh^2\theta-\sinh^2\theta)=\rho^2$ and $x=\rho\cosh\theta>0$, so $\Phi$ maps into $W$. Conversely, given $(x^0,x,y,z)$ with $x>|x^0|$, put $\rho:=\sqrt{x^2-(x^0)^2}>0$ and $\theta:=\frac12\log\bigl((x+x^0)/(x-x^0)\bigr)\in\mathbb R$ (the argument of the logarithm being positive because $x\pm x^0>0$); then $e^{\theta}=\sqrt{(x+x^0)/(x-x^0)}$ and $e^{-\theta}=\sqrt{(x-x^0)/(x+x^0)}$, so $\rho\sinh\theta=\rho(e^\theta-e^{-\theta})/2=\frac{(x+x^0)-(x-x^0)}{2}=x^0$ and $\rho\cosh\theta=\rho(e^\theta+e^{-\theta})/2=\frac{(x+x^0)+(x-x^0)}{2}=x$ by [L1], which gives a two-sided inverse. The $(\theta,\rho)$ derivative block has determinant $\rho(\cosh^2\theta-\sinh^2\theta)=\rho>0$, with identity transverse block, so [L5] makes this inverse smooth locally everywhere. Hence $\Phi$ is a smooth bijection onto $W$ with smooth inverse, that is, a diffeomorphism by [L5]. [L1, L5]

2.1 Pullback metric: differentiating the four components of $\Phi$ and using [L1] gives $dx^0=\sinh\theta\,d\rho+\rho\cosh\theta\,d\theta$, $dx=\cosh\theta\,d\rho+\rho\sinh\theta\,d\theta$, $dy=dy$, $dz=dz$. Substituting into $-(dx^0)^2+(dx)^2+dy^2+dz^2$: the cross terms are $-2\rho\sinh\theta\cosh\theta+2\rho\cosh\theta\sinh\theta=0$, the $d\theta^2$ coefficient is $-\rho^2\cosh^2\theta+\rho^2\sinh^2\theta=-\rho^2$ and the $d\rho^2$ coefficient is $-\sinh^2\theta+\cosh^2\theta=1$; hence the pullback metric is $-\rho^2d\theta^2+d\rho^2+dy^2+dz^2$. [L1, step 1.1]

3.1 Unit future field: in these coordinates $g(\partial_\theta,\partial_\theta)=-\rho^2$, $g(\partial_\rho,\partial_\rho)=g(\partial_y,\partial_y)=g(\partial_z,\partial_z)=1$ and all mixed components vanish, so $n=\rho^{-1}\partial_\theta$ satisfies $g(n,n)=-\rho^2\cdot\rho^{-2}=-1$. In the inertial chart, $\partial_\theta=\rho(\cosh\theta\,\partial_0+\sinh\theta\,\partial_1)$ by step 2.1, hence $n=\cosh\theta\,\partial_0+\sinh\theta\,\partial_1$, whose time component is $\cosh\theta>0$ and whose $\eta$-square is $-\cosh^2\theta+\sinh^2\theta=-1$; by [L2] $n$ is future timelike, so $n$ is a congruence on $W$. [L1, L2, step 2.1]

4.1 Acceleration and connection coefficients: by the coordinate map, $\partial_\theta=\rho(\cosh\theta\,e_0+\sinh\theta\,e_1)$ and $\partial_\rho=\sinh\theta\,e_0+\cosh\theta\,e_1$. Differentiating these inertial components with [L6] gives $\nabla_{\partial_\theta}\partial_\theta=\rho\partial_\rho$, $\nabla_{\partial_\theta}\partial_\rho=\nabla_{\partial_\rho}\partial_\theta=\rho^{-1}\partial_\theta$ and $\nabla_{\partial_\rho}\partial_\rho=0$; all derivatives involving the constant transverse basis fields vanish. Hence the only nonzero coordinate connection coefficients are $\Gamma^\rho_{\theta\theta}=\rho$ and $\Gamma^\theta_{\theta\rho}=\Gamma^\theta_{\rho\theta}=\rho^{-1}$, as claimed. Since $\partial_\theta\rho=0$, $a=\nabla_{\rho^{-1}\partial_\theta}(\rho^{-1}\partial_\theta)=\rho^{-2}\nabla_{\partial_\theta}\partial_\theta=\rho^{-1}\partial_\rho$, and $\eta(a,a)=\rho^{-2}$ by step 2.1. At $\rho=2$, this is $1/4$ and $|a|=1/2$. [L1, L6, step 2.1, step 3.1]

4.2 Rigidity, irrotationality and the coframe: the $\theta=const$ slices are the portions $\{x^0=\tanh\theta\,x\}\cap W$ of hyperplanes through the origin, and their tangent space is spanned by $\partial_\rho,\partial_y,\partial_z$, which are orthogonal to $n$ by the metric of step 2.1; their induced metric is $d\rho^2+dy^2+dz^2$, independent of $\theta$. The rest distribution is therefore integrable, being the tangent distribution of the foliation by these slices; by [L3] its vorticity vanishes and the congruence is irrotational. Moreover $h(n,\cdot)=0$, the rest-basis pairings $h(\partial_\rho,\partial_\rho)=h(\partial_y,\partial_y)=h(\partial_z,\partial_z)=1$ are constant, and $[n,\partial_\rho]=(1/\rho)n$ while $[n,\partial_y]=[n,\partial_z]=0$. Thus $\mathcal L_nh(X,Y)=n(h(X,Y))-h([n,X],Y)-h(X,[n,Y])=0$ on that basis and on $n$, so the congruence is Born rigid; equivalently, the metric components on the rest slices are constant along $\partial_\theta$, which is the content of the supplier's rigidity computation ([[thm-sr-fermi-walker-and-rigid-observer-examples]] clause (b)). [L1, L3, step 2.1, step 3.1]

4.3 Non-coordinate frame: by [L4], $[n,\partial_\rho]=[\rho^{-1}\partial_\theta,\partial_\rho]=\rho^{-1}[\partial_\theta,\partial_\rho]-\partial_\rho(\rho^{-1})\partial_\theta=0+\rho^{-2}\partial_\theta=\rho^{-1}n$, which is nonzero since $n\ne0$; here $[\partial_\theta,\partial_\rho]=0$ because $\theta,\rho$ are coordinates. Hence the members of the tetrad field $(n,\partial_\rho,\partial_y,\partial_z)$ do not commute pairwise, while the members of any coordinate frame do; so this tetrad field is not the coordinate frame of any chart. [L4, step 3.1]

5.1 Conclusion: steps 1.1-2.1 verify the diffeomorphism and the exact pullback metric; step 3.1 checks that $n$ is a future unit field; step 4.1 computes the acceleration $a=\rho^{-1}\partial_\rho$ with $\eta(a,a)=\rho^{-2}$; step 4.2 verifies Born rigidity and vanishing vorticity with the explicit rest slices; and step 4.3 exhibits the nonzero commutator showing that the frame is not a coordinate frame. All identities are exact symbolic computations in the hyperbolic functions. [step 4.1, step 4.2, step 4.3] ∎

## Remarks

- **The acceleration is not constant over the congruence.** Each observer at fixed $\rho$ has constant congruence-acceleration magnitude $1/\rho$ in reciprocal-length units, but the acceleration magnitude is not the same for all observers: the acceleration grows as $\rho$ decreases, and no global statement about a rigid body extending to $\rho=0$ is made.

- **The metric is not curved.** The pullback metric is the flat metric rewritten in curvilinear coordinates, which is why $\nabla_{\partial_\theta}\partial_\theta=\rho\partial_\rho$ has the form of a connection coefficient; the model's curvature is zero, and the example uses only the flat connection of the inertial chart.
