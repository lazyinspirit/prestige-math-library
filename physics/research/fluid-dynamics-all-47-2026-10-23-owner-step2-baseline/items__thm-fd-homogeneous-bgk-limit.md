---
id: thm-fd-homogeneous-bgk-limit
kind: theorem
title: Exact homogeneous BGK fast relaxation
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
deps:
  - def-fd-kinetic-density
  - def-fd-conserving-bgk
  - prop-fd-maxwellian-moments
dependency_roles:
  def-fd-kinetic-density: mathematical-premise
  def-fd-conserving-bgk: mathematical-premise
  prop-fd-maxwellian-moments: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2, §2.5.1, pp. 45–46"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, §§3.1–3.2"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf"
verification:
  precheck: pending
---

## Statement

Let $v_*=1\,\mathrm{m\,s^{-1}}$, $\omega_3(v):=\sum_{j=0}^3(|v|/v_*)^j$, $\tau>0$, and $\epsilon>0$. Let $f_0:\mathbb R^3\to[0,\infty)$ be measurable with $\int\omega_3f_0\,dv<\infty$, number density $n>0$, and strictly positive centered second moment. Let $M=M[f_0]$ be its positive-temperature Gaussian from the single-species BGK definition, and assume $\int f_0|\log(f_0/f_{\rm ref})|\,dv<\infty$ for a fixed $f_{\rm ref}>0$, with $0\log0:=0$ and the integrand $f_0|\log(f_0/f_{\rm ref})|$ assigned value zero where $f_0=0$. Define
$$f^\epsilon(t,v):=M(v)+e^{-t/(\epsilon\tau)}(f_0(v)-M(v)),\qquad t\ge0.$$
Then $f^\epsilon\ge0$, has the same mass, momentum, and kinetic energy as $f_0$ for every $t$, belongs to $C^1([0,\infty);L^1(\omega_3\,dv))$, and solves, as an equality in $L^1(\omega_3\,dv)$,
$$\partial_t f^\epsilon=\frac{M[f^\epsilon]-f^\epsilon}{\epsilon\tau},\qquad f^\epsilon(0)=f_0.$$
A solution means a nonnegative $C^1([0,\infty);L^1(\omega_3\,dv))$ function satisfying this equality at each time. The solution is unique among nonnegative solutions in this function class whose density and temperature remain strictly positive. Moreover,
$$\int_{\mathbb R^3}\omega_3|f^\epsilon(t)-M|\,dv =e^{-t/(\epsilon\tau)}\int_{\mathbb R^3}\omega_3|f_0-M|\,dv,$$
and for every $T_*>0$,
$$\int_0^{T_*}\int_{\mathbb R^3}\omega_3|f^\epsilon-M|\,dv\,dt \le\epsilon\tau\int_{\mathbb R^3}\omega_3|f_0-M|\,dv.$$
Thus the equilibrium limit is exact for each fixed $t>0$ and in spacetime weighted $L^1$, but need not be uniform at $t=0$. This branch has stationary homogeneous Euler moments; it gives no evolving inhomogeneous Euler limit.

## Statement references

[Tong, §2.5.1, full lecture notes](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

[Golse, §§3.1–3.2, full chapter](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)

## Facts & Assumptions

**Given:** Nonnegative $f_0$ with finite weighted third moment and positive variance, its moment-matched Maxwellian $M$, and $\epsilon,\tau>0$.

[F1] [[def-fd-conserving-bgk]]: $Q_{\rm BGK}(f)=(M[f]-f)/\tau$.

[F2] [[prop-fd-maxwellian-moments]]: $M[f_0]$ has exactly the mass, momentum, and energy moments used to define it, and belongs to $L^1(\omega_3\,dv)$.


[A1] The initial data and parameters satisfy the hypotheses in the Statement.

## Proof

1.1 Put $a(t)=e^{-t/(\epsilon\tau)}$. Then $0<a(t)\le1$ and $f^\epsilon=(1-a(t))M+ a(t)f_0$, so $f^\epsilon\ge0$. Since $M,f_0\in L^1(\omega_3\,dv)$, this formula is continuously differentiable in that Banach space and
$$\partial_t f^\epsilon=-\frac{a(t)}{\epsilon\tau}(f_0-M)=\frac{M-f^\epsilon}{\epsilon\tau}.$$
[F1, A1, algebra]

1.2 Let $\tilde f$ be any other solution in the stated class. For each invariant polynomial $\psi$ of degree at most two, the functional $\Lambda_\psi(g)=\int\psi g\,dv$ is bounded on $L^1(\omega_3\,dv)$ because $|\psi(v)|\le C_\psi\omega_3(v)$. Continuity of this linear functional and the defining Banach-space derivative give $(\Lambda_\psi\circ\tilde f)\prime(t)=\Lambda_\psi(\partial_t\tilde f)$. Integrating the equation against these invariants shows each derivative is zero, because $M[\tilde f]$ and $\tilde f$ have the same defining moments by [F2]. Its moments are therefore those of $f_0$, so $M[\tilde f(t)]=M$. The equation reduces to $\partial_t(\tilde f-M)=-(\tilde f-M)/(\epsilon\tau)$ in $L^1(\omega_3\,dv)$. Multiplication by $e^{t/(\epsilon\tau)}$ has zero derivative, hence $\tilde f(t)=M+e^{-t/(\epsilon\tau)}(f_0-M)=f^\epsilon(t)$. [A1, F1, F2, algebra]

2.1 By [F2], the invariant moments of $M$ and $f_0$ agree. The affine formula for $f^\epsilon$ therefore preserves them. In particular its positive number density and positive centered second moment stay fixed, so $M[f^\epsilon(t)]=M$ for every $t$. Step 1.1 is consequently the stated nonlinear BGK equation with the correct moment-matched target. [A1, F1, F2, step 1.1, algebra]

3.1 Homogeneity of the weight and the exact formula give
$$\int\omega_3|f^\epsilon(t)-M|\,dv=a(t)\int\omega_3|f_0-M|\,dv.$$
Integrating in $t$ yields the stated bound because $\int_0^{T_*}a(t)\,dt=\epsilon\tau(1-e^{-T_*/(\epsilon\tau)})\le\epsilon\tau$. For fixed $t>0$, $a(t)\to0$ as $\epsilon\to0$, whereas at $t=0$ the distance is $\int\omega_3|f_0-M|$. [A1, step 1.1, algebra] ∎

