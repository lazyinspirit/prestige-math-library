---
id: thm-fd-kinetic-h
kind: theorem
title: Conditional periodic kinetic H theorem
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-elastic-collision-measure
  - thm-tdmath-regular-collision-entropy
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-differentiation-under-the-integral-sign
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-ftc-second-part
dependency_roles:
  def-fd-elastic-collision-measure: mathematical-premise
  thm-tdmath-regular-collision-entropy: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-ftc-second-part: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2, §2.3, pp. 32–35"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, §3.2, pp. 23–25"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf"
verification:
  precheck: pending
---

## Statement

Let $I$ be an open time interval in seconds and let $\Omega=\prod_{j=1}^3(\mathbb R/L_j\mathbb Z)$, with fixed periods $L_j>0$ in metres. Give $\Omega$ the completed, unnormalised pushforward of Lebesgue measure on $C=\prod_{j=1}^3[0,L_j)$ under the quotient map, as in the kinetic-density definition. Let $f:\Omega\times\mathbb R^3\times I\to(0,\infty)$ be $C^1$ in $(x,t)$ and $C^2$ in $v$, with $v$ measured in metres per second and $f$ in the units assigned by the kinetic-density definition. Fix a constant $f_{\rm ref}>0$ with the same units as $f$. Put $\ell=\log(f/f_{\rm ref})$, $A=f(x,v,t)f(x,w,t)$, and $B=f(x,v',t)f(x,w',t)$. Use the elastic collision set $Q_{\rm el}=\{(v,w,v',w')\in\mathbb R^{12}:v+w=v'+w',\ |v|^2+|w|^2=|v'|^2+|w'|^2\}$ with its relative Borel sigma-algebra and the nonnegative countably additive measure $\nu$ invariant under particle exchange in either pair and incoming/outgoing interchange, together with the weak operator $Q_\nu$ from the elastic-collision definition. Assume for each $t$ that $f$, $f|v|^2$, and $f|\ell|$ are integrable over $\Omega\times\mathbb R^3$. On each compact time interval assume a common integrable envelope in $(x,v)$ for $|(1+\ell)\partial_t f|$; at each $t$ assume $(1+|\ell|)|v\cdot\nabla_x f|$ is integrable over $\Omega\times\mathbb R^3$. In addition, assume
$$f(1+|v|)|\ell|,\quad (1+|\ell|)|\partial_t f|,\quad (1+|\ell|)|v|\,|\nabla_x f|\in L^1(I_0\times\Omega\times\mathbb R^3,dt\,dx\,dv)\quad\text{for every compact time interval }I_0\subset I,$$
where each velocity integral is over all of $\mathbb R^3$, without a velocity cutoff. Thus the entropy density, entropy flux, and differentiation terms are integrable on compact time-space regions. Define
$$D(x,t):=\frac14\int_{Q_{\rm el}}(A-B)\log(A/B)\,d\nu.$$
Assume that $D$ is measurable and locally integrable on $I\times\Omega$, and that for each $t$ its spatial section belongs to $L^1(\Omega)$. At every $(x,t)$ assume $f(x,\cdot,t)\in\mathcal D_\nu$ and $1,\ell(x,\cdot,t)\in\mathcal S_{f(x,\cdot,t)}$, with the measurability and absolute-convergence conditions of the elastic-collision definition. With $\delta\varphi=\varphi(v)+\varphi(w)-\varphi(v')-\varphi(w')$, assume
$$\int_{\mathbb R^3}\varphi(v)Q_\nu(f)(v)\,dv=\frac14\int_{Q_{\rm el}}(B-A)\delta\varphi\,d\nu$$
for those two tests, and suppose $\partial_t f+v\cdot\nabla_x f=Q_\nu(f)$. Define
$$h(x,t):=\int_{\mathbb R^3}f\log(f/f_{\rm ref})\,dv,\qquad J_H(x,t):=\int_{\mathbb R^3}v f\log(f/f_{\rm ref})\,dv,$$
$$H(t):=\int_\Omega h(x,t)\,dx,\qquad D_{\rm tot}(t):=\int_\Omega D(x,t)\,dx.$$
Then the local entropy balance holds in distributions: for every $\eta\in C_c^\infty(I\times\Omega)$,
$$\int_I\int_\Omega\bigl(h\,\partial_t\eta+J_H\cdot\nabla_x\eta-D\eta\bigr)\,dx\,dt=0.$$
Moreover, $D(x,t)\ge0$ for almost every $(x,t)$. The periodic global entropy $H$ is differentiable and
$$\frac{dH}{dt}=-D_{\rm tot}(t)\le0.$$
The inequality is conditional on the adopted weak collision identity; it is not a derivation from reversible many-particle mechanics or a kinetic-PDE existence theorem.

## Statement references

[Tong, §2.3, full lecture notes](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

[Golse, §3.2, full chapter](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)

## Facts & Assumptions

**Given:** The positive regular periodic solution, time and spatial integrability envelopes, and absolutely convergent weak collision tests $1$ and $\ell$.

[F1] [[def-fd-elastic-collision-measure]]: The weak identity has factor $1/4$ and is assumed for every declared test; the elastic set is invariant under incoming/outgoing and particle exchanges.

[F2] [[thm-tdmath-regular-collision-entropy]]: Under the same positivity, regularity, periodicity, entropy and time-derivative envelopes, spatial-transport integrability, and weak tests $1$ and $\ell$, the global functional $H(t)$ is differentiable and has derivative $-D_{\rm tot}(t)\le0$. That published Statement supplies the global identity only; the local distributional balance in this item is proved directly.

[F3] [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]: The chain and product rules give $\nabla(f\log(f/f_{\rm ref}))=(1+\log(f/f_{\rm ref}))\nabla f$ for positive differentiable $f$.

[F4] [[thm-differentiation-under-the-integral-sign]]: The stated common $L^1$ envelope permits differentiating the entropy integral in time.

[F5] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] and [[thm-ftc-second-part]]: Absolute integrability permits the product integral rearrangements; periodic coordinate boundary terms cancel.

[A1] All hypotheses displayed in the Statement hold, including the local spacetime integrability, adopted PDE, and collision identity.

## Proof

1.1 By [F4], [F3], and the integrable entropy envelope, differentiation under the product integral gives
$$H'(t)=\int_\Omega\int_{\mathbb R^3}(1+\ell)\partial_t f\,dv\,dx.$$
Use [A1] to substitute $\partial_t f=Q_\nu(f)-v\cdot\nabla_x f$. [A1, F3, F4, F5, algebra]

2.1 The transport contribution is
$$-\int_\Omega\int_{\mathbb R^3}(1+\ell)v\cdot\nabla_x f\,dv\,dx =-\int_\Omega\int_{\mathbb R^3}v\cdot\nabla_x(f\ell)\,dv\,dx,$$
because $\nabla_x(f\ell)=(1+\ell)\nabla_x f$ by [F3]. For each velocity coordinate, the integral of the corresponding periodic spatial derivative is zero by [F5]; the displayed integrability and Fubini justify integrating first in $x$. Thus only the collision contribution remains. [A1, F3, F5, step 1.1, algebra]

2.2 The test $\varphi=1$ has $\delta\varphi=0$, so [F1] gives $\int Q_\nu(f)\,dv=0$ at each $x,t$. The $\ell Q_\nu(f)$ term is therefore the whole collision contribution. For $\varphi=\ell$, the constant $f_{\rm ref}$ cancels from the four logarithms and
$$\delta\ell=\log A-\log B=\log(A/B).$$
The weak identity gives $\int\ell Q_\nu(f)\,dv=(1/4)\int(B-A)\log(A/B)\,d\nu=-D(x,t)$. Integrating in $x$ is justified by the Statement's absolute-integrability hypothesis and yields $H'(t)=-D_{\rm tot}(t)$. [A1, F1, F2, F5, step 1.1, algebra]

3.1 For $\eta\in C_c^\infty(I\times\Omega)$, the product and chain rules give $\partial_t(f\ell)+v\cdot\nabla_x(f\ell)=(1+\ell)(\partial_t f+v\cdot\nabla_x f)$. The local integrability hypotheses and Fubini [F5] permit integration against $\eta$ and rearrangement of the $(t,x,v)$ integrals. At each $(x,t)$, the identity for test $1$ gives $\int Q_\nu(f)\,dv=0$, while the identity for $\ell$ gives $\int\ell Q_\nu(f)\,dv=-D(x,t)$ because $\delta\ell=\log(A/B)$. Integrating the resulting equation by parts in $t$ and on the periodic torus yields the displayed local distributional balance. [A1, F1, F3, F5, step 2.2, algebra]

4.1 Since $A,B>0$ and $\log$ is increasing, $(A-B)\log(A/B)\ge0$ pointwise, with equality exactly when $A=B$. Its integral is nonnegative, so $D(x,t)\ge0$ and therefore $D_{\rm tot}(t)\ge0$. [A1, F1, F2, step 2.2, algebra] ∎

