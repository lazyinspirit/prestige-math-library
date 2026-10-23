---
id: pthm-fd-bgk-equilibration
kind: physics-theorem
title: Exact equilibrium approach in the BGK model
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
physical_scope: >-
  Conditional exact homogeneous fast-relaxation branch of the separately adopted
  single-species BGK model, for nonnegative initial velocity densities with
  finite dimensionless third-moment weight, positive number density and centered
  second moment, finite reference-relative entropy, and the stated pointwise
  solution regularity. It is a model prediction, not a binary-Boltzmann theorem,
  an inhomogeneous Euler limit, or an empirical claim.
deps:
  - post-fd-bgk-relaxation
  - def-fd-conserving-bgk
  - prop-fd-maxwellian-moments
  - thm-fd-homogeneous-bgk-limit
  - prop-fd-bgk-entropy-rate
  - thm-differentiation-under-the-integral-sign
  - thm-derivative-of-exponential
  - thm-chain-rule
  - def-derivative
  - thm-algebra-of-function-limits
  - cor-mean-value-theorem
dependency_roles:
  post-fd-bgk-relaxation: physical-assumption
  def-fd-conserving-bgk: mathematical-premise
  prop-fd-maxwellian-moments: mathematical-premise
  thm-fd-homogeneous-bgk-limit: mathematical-premise
  prop-fd-bgk-entropy-rate: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-function-limits: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "François Golse and C. David Levermore, Fluid Dynamics from Kinetic
        Equations"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Exposes/HLslides2.pdf"
      locator: "Lecture 2, section V, 'The BGK Operator', PDF p. 28;
        moment-preserving local-Maxwellian relaxation model."
    - title: "David Tong, Lectures on Kinetic Theory, Chapter 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
      locator: "Section 2.5.1, printed pp. 45–46; relaxation-time approximation and
        the warning that it is not exact."
verification:
  precheck: pending
---

## Statement

Let $v_*=1\,\mathrm{m\,s^{-1}}$ and
$\omega_3(v)=\sum_{j=0}^3(|v|/v_*)^j$. Let
$f_0:\mathbb R^3\to[0,\infty)$ be a measurable velocity number density,
with $f_0$ in $\mathrm{s^3\,m^{-6}}$ and $f_0\,d^3v$ measured in
$\mathrm{m^{-3}}$, satisfying
$\int\omega_3 f_0\,d^3v<\infty$, number density
$n_0=\int f_0\,d^3v>0$, positive centered second moment, and finite
reference-relative entropy $\int f_0|\log(f_0/f_{\rm ref})|\,d^3v$, where
$f_{\rm ref}>0$ is constant in the same units as $f_0$. Take the primitive
particle mass $m>0$ in kilograms and Boltzmann constant $k_B>0$ in joules per
kelvin. Define $u_0=n_0^{-1}\int v f_0\,d^3v$ and
$T_0=m(3k_Bn_0)^{-1}\int |v-u_0|^2f_0\,d^3v>0$. For any nonnegative velocity
density $g$ with finite $\omega_3$ moment, number density
$n[g]=\int g\,d^3v>0$, and positive centered second moment, define
$u[g]=n[g]^{-1}\int vg\,d^3v$,
$T[g]=m(3k_Bn[g])^{-1}\int|v-u[g]|^2g\,d^3v$, and its normalized
moment-matched Maxwellian

$$M[g](v)=n[g]\left(\frac{m}{2\pi k_BT[g]}\right)^{3/2}\exp\left(-\frac{m|v-u[g]|^2}{2k_BT[g]}\right).$$

Write $M=M[f_0]$; it has the same number, momentum, and kinetic-energy
moments as $f_0$.
For $\tau>0$ in seconds and dimensionless $\varepsilon>0$, consider the
homogeneous equation

$$\partial_t f^\varepsilon(v,t)=\frac{M[f^\varepsilon](v,t)-f^\varepsilon(v,t)}{\varepsilon\tau},\qquad f^\varepsilon(v,0)=f_0(v),\quad t\ge0.$$

There is a nonnegative solution
$f^\varepsilon\in C^1([0,\infty);L^1(\omega_3\,d^3v))$ given by

$$f^\varepsilon(v,t)=M(v)+e^{-t/(\varepsilon\tau)}(f_0(v)-M(v)).$$

It solves the equation in $L^1(\omega_3\,d^3v)$ and preserves the number,
momentum, and kinetic-energy moments of $f_0$. It is also the unique solution
in the following pointwise class: a jointly measurable
$\tilde f:\mathbb R^3\times[0,\infty)\to[0,\infty)$ with finite
$\omega_3$-weighted velocity integral at every time and initial trace
$\tilde f(v,0)=f_0(v)$ for almost every $v$, whose velocity sections are
continuous on $[0,\infty)$ and differentiable on $(0,\infty)$ for almost
every $v$. Require a common full-measure set of velocities on which the
equation holds for every $t>0$, and, on each compact time interval, an
integrable $\omega_3$-weighted majorant for $\partial_t\tilde f$ independent
of $t$. Also require the density and temperature of $\tilde f$ to remain
positive. These envelopes permit differentiation of the three moment
integrals and justify the conservation argument in the proof.

For each $T_*>0$, with the dimensionless fixed velocity weight
$\|g\|_{1,3}=\int_{\mathbb R^3}(1+|v/v_*|^3)|g(v)|\,d^3v$, which has
units $\mathrm{m^{-3}}$ for velocity densities $g$, it satisfies

$$\|f^\varepsilon(t)-M\|_{1,3}=e^{-t/(\varepsilon\tau)}\|f_0-M\|_{1,3},\qquad \int_0^{T_*}\|f^\varepsilon(t)-M\|_{1,3}\,dt\le\varepsilon\tau\|f_0-M\|_{1,3}.$$

Writing $H(g)=\int_{\mathbb R^3}g\log(g/f_{\rm ref})\,d^3v$ with $0\log0:=0$,
which has units $\mathrm{m^{-3}}$ for velocity densities $g$, the entropy
gap obeys

$$0\le H(f^\varepsilon(t))-H(M)\le e^{-t/(\varepsilon\tau)}\bigl(H(f_0)-H(M)\bigr).$$

Thus for each fixed $t>0$, $f^\varepsilon(t)\to M$ in this weighted $L^1$
norm as $\varepsilon\to0$, while $f^\varepsilon(0)=f_0$; if $f_0$ differs
from $M$ on a set of positive measure, the initial mismatch is nonzero. If
$f_0=M$ almost everywhere, the formula gives the stationary equilibrium with
zero norm and entropy gaps. This is an exact homogeneous BGK model prediction
and does not assert an inhomogeneous Boltzmann-to-Euler limit or an observed
relaxation.

## Statement references

[François Golse and C. David Levermore, Fluid Dynamics from Kinetic Equations, Lecture 2, “The BGK Operator”](https://www.cmls.polytechnique.fr/perso/golse/Exposes/HLslides2.pdf)

[David Tong, Lectures on Kinetic Theory, §2.5.1 (relaxation-time approximation and its non-exactness qualification)](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

## Facts & Assumptions

**Given:** The nonnegative initial density, its finite $\omega_3$ moment and entropy, positive number density and centered second moment, $\varepsilon,\tau>0$, and the homogeneous fast-scale BGK equation.

[F1] [[thm-fd-homogeneous-bgk-limit]] (current batch-25 draft carrier; its Step 1 readiness record is present and marked ready, recording authoring readiness but not proof acceptance): for the stated $\omega_3$-integrable initial data and positive moments, the solution is in $C^1([0,\infty);L^1(\omega_3\,d^3v))$, has the exact formula $M+e^{-t/(\varepsilon\tau)}(f_0-M)$, and satisfies the $\omega_3$-weighted equality and integrated bound in its Statement.

[F2] [[def-fd-conserving-bgk]]: the BGK operator is $(M[f]-f)/\tau$, with $M[f]$ the Maxwellian of the exact number, mean-velocity, and positive-temperature moments.

[F3] [[prop-fd-maxwellian-moments]]: the Maxwellian has exactly the number, momentum, and kinetic-energy moments used to define it.

[F4] [[prop-fd-bgk-entropy-rate]] (current batch-25 draft carrier; its Step 1 readiness record is present and marked ready, recording authoring readiness but not proof acceptance): under the hypotheses of the exact homogeneous relaxation theorem, $0\le H(f^\varepsilon(t))-H(M)\le e^{-t/(\varepsilon\tau)}(H(f_0)-H(M))$.

[F5] [[thm-differentiation-under-the-integral-sign]]: a common integrable derivative majorant permits differentiating each invariant moment integral.

[F6] [[thm-derivative-of-exponential]] and [[thm-chain-rule]]: the exponential is differentiable with derivative itself, and differentiating its composition with a scalar multiple applies the chain rule.

[F7] [[def-derivative]] and [[thm-algebra-of-function-limits]]: the derivative is a difference-quotient limit, and products of existing limits have the product limit.

[F8] [[cor-mean-value-theorem]]: a differentiable function with zero derivative on an interval is constant there, by applying the theorem to any compact subinterval.

[A1] The initial-data, pointwise-solution, positivity, derivative-envelope, and model assumptions in the Statement hold.

[A2] [[post-fd-bgk-relaxation]]: for $C^1([0,\infty);L^1(\omega_3\,d^3v))$ trajectories, the adopted equation holds in that weighted Banach space at every $t\ge0$; for the pointwise solution class stated here, it holds for every $t>0$ on one common full-measure set of velocities. In both senses it is the separate moment-preserving BGK model with relaxation time $\tau>0$, not the binary Boltzmann collision operator.

## Proof

1.1 The initial data and parameters meet the hypotheses of [F1]. It supplies the explicit solution in the weighted Banach space and its $\omega_3$ estimate. The BGK definition [F2] and Gaussian moment result [F3] use the same positive number density, momentum, and kinetic energy as the Statement. [given, A1, F1, F2, F3]

1.2 Let $\tilde f$ be any solution in the pointwise class stated above. By [F5], its number, momentum, and energy moment functions are differentiable under their integrals. Integrating the equation [A2] against $1$, $mv_i$, and $m|v|^2/2$, the BGK definition [F2] and Maxwellian moments [F3] make each derivative zero. Hence those moments equal their initial values, so $M[\tilde f(t)]=M$ for every $t$. The equation reduces to $\partial_t(\tilde f-M)=-(\tilde f-M)/(\varepsilon\tau)$ for almost every velocity and every $t>0$. [given, A1, A2, F2, F3, F5, algebra]

2.1 For almost every $v$, set $G_v(t)=e^{t/(\varepsilon\tau)}(\tilde f(v,t)-M(v))$. By [F6]–[F7] and step 1.2, $G_v'(t)=0$ on $(0,\infty)$. Continuity at zero and [F8] imply $G_v(t)=f_0(v)-M(v)$ for all $t\ge0$. Thus every pointwise solution has the formula in step 1.1, proving uniqueness in the stated class. [given, A1, F6, F7, F8, step 1.1, step 1.2, algebra]

2.2 The formula gives $|f^\varepsilon(t)-M|=e^{-t/(\varepsilon\tau)}|f_0-M|$. Since $1+(|v|/v_*)^3\le\omega_3(v)$, the stated norm is finite and obeys the exact equality. Integrating the exponential in time gives the displayed $\varepsilon\tau$ bound. Applying [F4] to the same solution gives the entropy-gap estimate. [given, A1, F1, F4, step 1.1, algebra]

3.1 For fixed $t>0$, $e^{-t/(\varepsilon\tau)}\to0$; at $t=0$ the solution is $f_0$. If $f_0$ differs from $M$ on a set of positive measure, the strictly positive weight makes $\|f_0-M\|_{1,3}>0$. When $f_0=M$ almost everywhere, the formula is stationary. These are conditional predictions of the adopted BGK model [A2]. [given, A1, A2, step 2.2, algebra] ∎
