---
id: thm-fd-collision-maxwellian
kind: theorem
title: Full-support collision equilibrium has Maxwellian form
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-fd-kinetic-density
  - def-fd-elastic-collision-measure
  - thm-fd-kinetic-h
  - thm-taylor-peano-remainder
  - thm-ftc-second-part
  - thm-logarithm-derivative-and-integral
  - cor-mean-value-theorem
dependency_roles:
  def-fd-kinetic-density: mathematical-premise
  def-fd-elastic-collision-measure: mathematical-premise
  thm-fd-kinetic-h: mathematical-premise
  thm-taylor-peano-remainder: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2, §§2.2.2–2.3, pp. 23–35"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, §3.2, pp. 23–25"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf"
verification:
  precheck: pending
---

## Statement

Fix a time on the periodic cell $\Omega$ from the kinetic-density definition, choose a constant reference density $f_{\rm ref}>0$ with the units of $f$, and let $f:\Omega\times\mathbb R^3\to(0,\infty)$ be measurable in $x$, $C^2$ in $v$, and integrable in velocity for almost every $x$. Write the elastic collision set as $Q_{\rm el}=\{(v,w,v',w') : v+w=v'+w',\ |v|^2+|w|^2=|v'|^2+|w'|^2\}$. Let $\nu$ be a locally finite symmetric measure on the elastic collision set with full support, meaning every nonempty relatively open subset has positive $\nu$-measure. For almost every $x$, define
$$D_x:=\frac14\int_{Q_{\rm el}}\bigl(f(x,v)f(x,w)-f(x,v')f(x,w')\bigr) \log\!\left(\frac{f(x,v)f(x,w)}{f(x,v')f(x,w')}\right)d\nu,$$
and assume $D_x$ is measurable and integrable. If $\int_\Omega D_x\,dx=0$, then for almost every $x$ there exist $C(x)>0$ with the units of $f$, $U(x)\in\mathbb R^3$ measured in metres per second, and $\theta(x)>0$ measured in squared metres per second squared, such that
$$f(x,v)=C(x)\exp\!\left(-\frac{|v-U(x)|^2}{2\theta(x)}\right)\quad\text{for every }v\in\mathbb R^3.$$
Conversely, each such velocity profile has $D_x=0$. Here $\theta$ has units of squared speed. The claim characterizes zero collision production only; it does not assert that a spatially varying Maxwellian solves the transport equation.

## Statement references

[Tong, §§2.2.2–2.3, full lecture notes](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

[Golse, §3.2, full chapter](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)

## Facts & Assumptions

**Given:** A positive velocity profile, a symmetric locally finite full-support collision measure, and zero total production as in the Statement.

[F1] [[def-fd-elastic-collision-measure]]: Elastic quadruples conserve $v+w$ and $|v|^2+|w|^2$; the collision bracket and symmetric measure are defined there.

[F2] [[thm-fd-kinetic-h]]: The production integrand $(A-B)\log(A/B)$ is nonnegative, and its spatial integral is the entropy decay rate.

[F3] [[thm-taylor-peano-remainder]]: For a $C^2$ function, the second-order Taylor expansion at a point has remainder $o(|z|^2)$.

[F4] [[thm-ftc-second-part]]: A continuously differentiable function with zero derivative along a coordinate segment is constant along that segment.

[F5] [[thm-logarithm-derivative-and-integral]] and [[cor-mean-value-theorem]]: Since $\log' (z)=1/z>0$ for $z>0$, the mean-value theorem makes the natural logarithm strictly increasing on positive reals.

[A1] The hypotheses in the Statement hold; in particular the production is finite and $\nu$ has full support.

## Proof

1.1 By [F2], $D_x\ge0$ for almost every $x$. Since its spatial integral is zero, $D_x=0$ for almost every $x$. Fix any such $x$ and write $g(v)=\log(f(x,v)/f_{\rm ref})$, where $f_{\rm ref}>0$ is a constant with the units of $f$. The integrand defining $D_x$ is continuous and nonnegative in the collision variables. If it were positive at any elastic quadruple, it would be bounded below by a positive constant on a relatively open neighborhood; full support would make that neighborhood have positive measure, contradicting $D_x=0$. Therefore $f(v)f(w)=f(v')f(w')$ for every elastic quadruple, equivalently $g(v)+g(w)=g(v')+g(w')$. [A1, F1, F2, F5, algebra]

2.1 For arbitrary $a,z\in\mathbb R^3$ and any rotation $R\in SO(3)$, the incoming pair $(a+z,a-z)$ and outgoing pair $(a+Rz,a-Rz)$ have equal total momentum $2a$ and equal total squared speed $2|a|^2+2|z|^2$. The collision identity from step 1.1 gives
$$g(a+z)+g(a-z)=g(a+Rz)+g(a-Rz).$$
Thus for fixed $a$ and radius $|z|$, the left side is independent of the direction of $z$. [F1, step 1.1, algebra]

3.1 Fix a unit vector $\xi$ and any other unit vector $\eta$. Choose a rotation taking $\xi$ to $\eta$, put $z=s\xi$ in step 2.1, and expand each side at $s=0$ using [F3]. The constant and linear terms cancel in each symmetric pair. Dividing the resulting equality by $s^2$ and taking $s\to0$ gives $\xi^{\mathsf T}D^2g(a)\xi=\eta^{\mathsf T}D^2g(a)\eta$. Hence the quadratic form of the symmetric Hessian is constant on the unit sphere. Testing $e_i$ gives equal diagonal entries; testing $(e_i+e_j)/\sqrt2$ gives zero off-diagonal entries. Therefore $D^2g(a)=\lambda(a)I$. [A1, F3, step 2.1, algebra]

4.1 Since the mixed second derivatives vanish, $\partial_i g(v)$ is constant along every coordinate segment in a direction $e_j$ with $j\ne i$, by [F4]. Connecting points with the same $i$th coordinate by three coordinate segments shows $\partial_i g(v)=G_i(v_i)$ for a differentiable one-variable function $G_i$. The Hessian identity in step 3.1 yields $G_i'(v_i)=G_j'(v_j)$ for every pair $i\ne j$ and every independent choice of $v_i,v_j$. Fixing $v_j$ while varying $v_i$ shows $G_i'$ is constant; equality then makes the constants the same $\lambda$. Thus $G_i(s)=\lambda s+b_i$, and integrating the gradient along coordinate segments gives
$$g(v)=\alpha+b\cdot v+\frac{\lambda}{2}|v|^2$$
for constants $\alpha\in\mathbb R$, $b\in\mathbb R^3$, and $\lambda\in\mathbb R$. [A1, F4, step 3.1, algebra]

5.1 Because $f$ is integrable and positive on $\mathbb R^3$, $\lambda$ cannot be positive: the quadratic term then makes $e^{g(v)}$ nonintegrable at infinity. If $\lambda=0$, an affine exponential is either constant or grows on a half-space, and is again nonintegrable. Hence $\lambda<0$. Completing the square gives $g(v)=\alpha' - |v-U|^2/(2\theta)$ with $\theta=-1/\lambda>0$ and $U=-b/\lambda$. Exponentiating gives the asserted profile. [A1, step 4.1, algebra]

6.1 Conversely, for $g(v)=\alpha'-|v-U|^2/(2\theta)$, the sum $g(v)+g(w)$ depends only on $v+w$ and $|v|^2+|w|^2$. These are conserved on every elastic quadruple by [F1], so $A=B$ pointwise and the integrand defining $D_x$ vanishes. [F1, algebra] ∎
