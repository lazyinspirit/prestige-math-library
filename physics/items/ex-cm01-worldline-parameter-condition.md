---
id: ex-cm01-worldline-parameter-condition
kind: example
title: "The frame-time parameter condition of a worldline: failure under rescaling and behaviour under time shifts"
status: draft
origin: session
domain: physics
dependency_level: 6
deps: [post-cm01-worldlines, post-cm01-frames, post-cm01-spacetime, def-cm-affine-time-space, lem-cm-adapted-charts-and-galilean-transformations]
dependency_roles:
  post-cm01-worldlines: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  post-cm01-spacetime: formulation-prerequisite
  def-cm-affine-time-space: mathematical-premise
  lem-cm-adapted-charts-and-galilean-transformations: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked kinematic example of the framework's worldline definition: an explicitly parametrized curve that fails the frame-time parameter condition, the reparametrization behaviour of a worldline under a time shift between inertial frames, and the obstruction to nontrivial affine reparametrizations within one frame. The item verifies the definition's parameter condition and asserts no dynamics and no empirical claim."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Sections 1.1-1.2, printed pages 2-4 (PDF pages 8-10): the trajectory x(t) of a particle with respect to a reference frame, its velocity and acceleration as derivatives with respect to the frame time"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): the inertial frame defined by r = r_0 + v t, so that the description of a motion is tied to the frame's time coordinate"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Work in the standard model data of [[post-cm01-spacetime]]:
$V=\mathbb R^{4}$ with coordinates $(x^{0},x^{1},x^{2},x^{3})$,
$\tau(x^{0},x^{1},x^{2},x^{3})=x^{0}$, $K=\{0\}\times\mathbb R^{3}$, the
standard inner product and orientation, $A=\mathbb R^{4}$; the first inertial
frame is standard with $o=0$, $u=(1,0,0,0)$ and the standard basis, and the
worldline of the Example is

$$\gamma:\mathbb R\longrightarrow A,\qquad \gamma(t)=tu,$$

with $F$-coordinates $(t,0,0,0)$. Consider also the curve
$\kappa(s):=2su$, the affine reparametrizations
$\kappa_{\lambda,\mu}(s):=\gamma(\lambda s+\mu)$ for $\lambda,\mu\in\mathbb R$
with $\lambda\ne0$, and a second inertial frame $F'$ whose time coordinate
differs by $t'=t+b$.

## Facts & Assumptions

**Given:** The standard data and frames above, the curves $\gamma$, $\kappa$ and $\kappa_{\lambda,\mu}$, and the class of worldlines with the parameter condition of [[post-cm01-worldlines]].

[L1] Adapted charts and coordinates: the standard chart $(o,u,(e_{1},e_{2},e_{3}))$ is adapted, and the adapted coordinates $(t,x)$ of the event $p=o+tu+\sum_{j}x_{j}e_{j}$ satisfy $t(p)=\tau(p-o)$ ([[def-cm-affine-time-space]]).

[L2] Worldlines: a worldline described in an inertial frame is a curve of class $C^{2}$ whose parameter is the frame time, $\tau(\gamma(s)-o)=s$ for all $s$ in its interval ([[post-cm01-worldlines]]); inertial frames are the adapted charts ([[post-cm01-frames]]).

[L3] Transformation between inertial frames: two adapted charts are related by $t'=t+b$ with $b\in\mathbb R$, and a curve with $t(\gamma(s))=s$ satisfies $t'(\gamma(s))=s+b$ ([[lem-cm-adapted-charts-and-galilean-transformations]], clause 1).

## Verification

**Proof technique:** direct; evaluate the parameter condition on each explicit
curve and solve the resulting affine equation.

1.1 The standard chart is adapted and its coordinates are the standard ones: $o=0$, $u=(1,0,0,0)$ has $\tau(u)=1$, the standard basis is orthonormal and positively oriented, and for $p=(x^{0},x^{1},x^{2},x^{3})$ the expansion $p=o+x^{0}u+\sum_{j}x^{j}e_{j}$ exhibits the adapted coordinates as $t=x^{0}$, $x=(x^{1},x^{2},x^{3})$ by [L1]. Hence $\gamma(t)=tu$ has $F$-coordinates $(t,0,0,0)$ and satisfies $\tau(\gamma(s)-o)=s$; it is a worldline of the model by [L2]. [L1, L2, algebra]

2.1 The curve $\kappa(s)=2su$ has $\tau(\kappa(s)-o)=2s$, which differs from $s$ for every $s\ne0$, for instance at $s=1$ the value is $2$; therefore $\kappa$ **fails** the parameter condition and is not a worldline of the model, although it is of class $C^{\infty}$ and its image is the same time axis as that of $\gamma$; it is the reparametrization $\kappa(s)=\gamma(2s)$. The parameter condition is thus a genuine restriction, and the image of a curve does not determine whether it is a worldline. [step 1.1, L2, algebra]

2.2 Under a change of frame the parameter condition is consistent with the reparametrization: by [L3] the same worldline $\gamma$ satisfies $t'(\gamma(s))=s+b$, so the curve $\gamma_{b}(t'):=\gamma(t'-b)$, defined on the shifted interval, satisfies $t'(\gamma_{b}(t'))=t'$ and is the description of the motion in $F'$ in the sense of [L2]; the time shift $b$ is absorbed into the reparametrization. For the explicit worldline of step 1.1 this reads $\gamma_{b}(t')=(t'-b)u$. [step 1.1, L3, L2, algebra]

3.1 For the affine reparametrizations in one fixed frame, $\tau(\kappa_{\lambda,\mu}(s)-o)=t(\gamma(\lambda s+\mu))=\lambda s+\mu$ by [L1] and step 1.1, and the equation $\lambda s+\mu=s$ holds for all real $s$ exactly when $\lambda=1$ and $\mu=0$. Hence no nontrivial affine reparametrization preserves the parameter condition in a fixed frame: the parameter of a worldline is fixed to be the frame time, and a reparametrized curve with $\lambda\ne1$ becomes a worldline only after the inverse reparametrization. The example confirms that both the parameter and the frame enter the definition of a worldline, as recorded in [L2]. [step 2.1, step 2.2, L1, L2, algebra] ∎

## Remarks

- The failure of $\kappa$ is not a failure of regularity or of the curve's image: it is the model's requirement that the parameter be the elapsed time from the frame's origin. A model that describes the same geometric trajectory twice as fast is not a model with a different worldline of the framework; it is the same worldline with a different, nonadmitted parametrization, unless a frame change accounts for the difference.

- The class of worldlines is not empty in any of the frames used here: the curves $\gamma_{b}$ of step 2.2 are worldlines in $F'$ whenever $\gamma$ is a worldline in $F$, and the observers at rest of [[post-cm01-frames]] satisfy the same $C^2$ frame-time condition as observer worldlines. They become particle-worldline examples only if a particle label is separately assigned that curve under [[post-cm01-worldlines]].
