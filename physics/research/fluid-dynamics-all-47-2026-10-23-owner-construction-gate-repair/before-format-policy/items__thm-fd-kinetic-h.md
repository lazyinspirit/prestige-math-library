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

Let $I$ be an open time interval and let $\Omega=\prod_{j=1}^3(\mathbb R/L_j\mathbb Z)$ have quotient Lebesgue measure, with fixed periods $L_j>0$. Let $f:\Omega\times\mathbb R^3\times I\to(0,\infty)$ be $C^1$ in $(x,t)$ and $C^2$ in $v$, and fix a constant $f_{\rm ref}>0$ with the same units as $f$. Put $\ell=\log(f/f_{\rm ref})$, $A=f(x,v,t)f(x,w,t)$, and $B=f(x,v',t)f(x,w',t)$. Assume for each $t$ that $f$, $f|v|^2$, and $f|\ell|$ are integrable over $\Omega\times\mathbb R^3$. On each compact time interval assume a common integrable envelope for $|(1+\ell)\partial_t f|$; at each $t$ assume $(1+|\ell|)|v\cdot\nabla_x f|$ is integrable. Assume the collision-production integral in $x$ is measurable and integrable:
$$x\longmapsto\int_{Q_{\rm el}}|(A-B)(\ell(v)+\ell(w)-\ell(v')-\ell(w'))|\,d\nu\in L^1(\Omega).$$
At every $(x,t)$ assume $f(x,\cdot,t)$ belongs to the collision domain and the weak identity is absolutely convergent for tests $1$ and $\ell(x,\cdot,t)$. With $A=f(x,v,t)f(x,w,t)$, $B=f(x,v',t)f(x,w',t)$, and $\delta\varphi=\varphi(v)+\varphi(w)-\varphi(v')-\varphi(w')$, assume
$$\int_{\mathbb R^3}\varphi(v)Q_\nu(f)(v)\,dv=\frac14\int_{Q_{\rm el}}(B-A)\delta\varphi\,d\nu$$
for these two tests, and suppose $$\partial_t f+v\cdot\nabla_x f=Q_\nu(f).$$
Define
$$H(t):=\int_\Omega\int_{\mathbb R^3} f\log(f/f_{\rm ref})\,dv\,dx,\qquad
D(t):=\frac14\int_\Omega\int_{Q_{\rm el}}(A-B)\log(A/B)\,d\nu\,dx.$$
Then $H$ is differentiable and
$$\frac{dH}{dt}=-D(t)\le0.$$
The inequality is conditional on the adopted weak collision identity; it is not a derivation from reversible many-particle mechanics or a kinetic-PDE existence theorem.

## Statement references

[Tong, §2.3, full lecture notes](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

[Golse, §3.2, full chapter](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)

## Facts & Assumptions

**Given:** The positive regular periodic solution, time and spatial integrability envelopes, and absolutely convergent weak collision tests $1$ and $\ell$.

[F1] [[def-fd-elastic-collision-measure]]: The weak identity has factor $1/4$ and is assumed for every declared test; the elastic set is invariant under incoming/outgoing and particle exchanges.

[F2] [[thm-tdmath-regular-collision-entropy]]: Under the same positivity, regularity, periodicity, entropy envelopes, and weak tests, the conditional entropy balance has dissipation $\frac14\int(A-B)\log(A/B)$, nonnegative because $\log$ is increasing; its proof differentiates $f\log(f/f_{\rm ref})$, cancels periodic transport, and applies the weak identity.

[F3] [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]: The chain and product rules give $\nabla(f\log(f/f_{\rm ref}))=(1+\log(f/f_{\rm ref}))\nabla f$ for positive differentiable $f$.

[F4] [[thm-differentiation-under-the-integral-sign]]: The stated common $L^1$ envelope permits differentiating the entropy integral in time.

[F5] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] and [[thm-ftc-second-part]]: Absolute integrability permits the product integral rearrangements; periodic coordinate boundary terms cancel.

[A1] All hypotheses displayed in the Statement hold, including the adopted PDE and collision identity.

## Proof

1.1 By [F4], [F3], and the integrable entropy envelope, differentiation under the product integral gives
$$H'(t)=\int_\Omega\int_{\mathbb R^3}(1+\ell)\partial_t f\,dv\,dx.$$
Use [A1] to substitute $\partial_t f=Q_\nu(f)-v\cdot\nabla_x f$. [A1, F3, F4, F5, algebra]

1.2 The transport contribution is
$$-\int_\Omega\int_{\mathbb R^3}(1+\ell)v\cdot\nabla_x f\,dv\,dx
=-\int_\Omega\int_{\mathbb R^3}v\cdot\nabla_x(f\ell)\,dv\,dx,$$
because $\nabla_x(f\ell)=(1+\ell)\nabla_x f$ by [F3]. For each velocity coordinate, the integral of the corresponding periodic spatial derivative is zero by [F5]; the displayed integrability and Fubini justify integrating first in $x$. Thus only the collision contribution remains. [A1, F3, F5, step 1.1, algebra]

2.1 The test $\varphi=1$ has $\delta\varphi=0$, so [F1] gives $\int Q_\nu(f)\,dv=0$ at each $x,t$. The $\ell Q_\nu(f)$ term is therefore the whole collision contribution. For $\varphi=\ell$, the constant $f_{\rm ref}$ cancels from the four logarithms and
$$\delta\ell=\log A-\log B=\log(A/B).$$
The weak identity gives $\int\ell Q_\nu(f)\,dv=(1/4)\int(B-A)\log(A/B)\,d\nu$. Integrating in $x$ is justified by the Statement's absolute-integrability hypothesis and yields $H'(t)=-D(t)$. [A1, F1, F2, F5, step 1.1, algebra]

3.1 Since $A,B>0$ and $\log$ is increasing, $(A-B)\log(A/B)\ge0$ pointwise, with equality exactly when $A=B$. Its integral is nonnegative, so $D(t)\ge0$ and the asserted inequality follows. [A1, F1, F2, step 2.1, algebra] ∎
