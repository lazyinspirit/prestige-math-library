---
id: pthm-fd-ideal-gas-euler-interface
kind: physics-theorem
title: Conditional ideal-gas Euler kinetic interface
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
physical_scope: >-
  Conditional d=3, periodic, monatomic Boltzmann-to-Euler interface under the
  exact dimensionless fast-collision equation, C1 positive limiting fields,
  and strong weighted-L1 convergence of the kinetic density to its local
  Maxwellian, including the stated initial convergence. No existence or
  convergence theorem, Navier–Stokes limit, or empirical derivation is claimed.
deps:
  - def-fd-physical-kinetic-observables
  - thm-fd-controlled-euler-passage
  - post-fd-boltzmann-model
dependency_roles:
  def-fd-physical-kinetic-observables: formulation-prerequisite
  thm-fd-controlled-euler-passage: mathematical-premise
  post-fd-boltzmann-model: physical-assumption
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Statistical Mechanics I, Lecture 11"
      url: "https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/7b163cc0ea1359b70b018a1415399d64_MIT8_333F13_Lec11.pdf"
      locator: "Section III.H, printed pp. 67–68; local Maxwellian moments and zeroth-order fluid equations."
    - title: "David Tong, Lectures on Kinetic Theory, Chapter 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
      locator: "Section 2.4.2, printed pp. 41–43; local Maxwellian, ideal-gas pressure, and Euler reduction, with the streaming-equation qualification."
verification:
  precheck: pending
---

## Statement

Let $\Omega=\prod_{j=1}^3(\mathbb R/L_j\mathbb Z)$ be a fixed rectangular periodic cell with periods $L_j>0$ in metres, $T_*>0$ in seconds, and $\varepsilon>0$ a dimensionless fast-collision parameter. Spatial position $x$ is measured in metres, velocity $v$ in metres per second, and $f^\varepsilon d^3x\,d^3v$ counts particles, so $f^\varepsilon$ has units $\mathrm{s^3\,m^{-6}}$. Put $v_*=1\,\mathrm{m\,s^{-1}}$ and $\omega_k(v)=\sum_{j=0}^k(|v|/v_*)^j$ for $k=2,3$. For each $\varepsilon$, let $f^\varepsilon>0$ be periodic on $\Omega$, continuously differentiable in $t,x$, and twice continuously differentiable in $v$ on $\Omega\times\mathbb R^3\times[0,T_*]$. Let $f_{\rm ref}>0$ be constant in the same units as $f^\varepsilon$ and put $\ell^\varepsilon=\log(f^\varepsilon/f_{\rm ref})$. On each compact time interval, require integrable velocity majorants uniform in $x,t$ for each of $\omega_3 f^\varepsilon$, $\omega_3|\partial_t f^\varepsilon|$, $\omega_3|v\cdot\nabla_xf^\varepsilon|$, $f^\varepsilon|\ell^\varepsilon|$, $|v|f^\varepsilon|\ell^\varepsilon|$, $(1+|\ell^\varepsilon|)|\partial_t f^\varepsilon|$, and $(1+|\ell^\varepsilon|)|v||\nabla_x f^\varepsilon|$. Require the collision logarithmic test to be absolutely integrable. Define

$$Q_{\rm el}=\{(v,w,v',w')\in(\mathbb R^3)^4:v+w=v'+w',\ |v|^2+|w|^2=|v'|^2+|w'|^2\}$$

with its relative Borel sigma-algebra and let $\nu$ be the nonnegative symmetric collision-rate measure on this set. For each admissible velocity test $\psi$ with absolute convergence, the collision operator is assumed to satisfy

$$\int_{\mathbb R^3}\psi(v)Q_\nu(f^\varepsilon)(x,v,t)\,d^3v=\frac14\int_{Q_{\rm el}}(B-A)\bigl(\psi(v)+\psi(w)-\psi(v')-\psi(w')\bigr)\,d\nu,$$

where $A=f^\varepsilon(x,v,t)f^\varepsilon(x,w,t)$ and $B=f^\varepsilon(x,v',t)f^\varepsilon(x,w',t)$. In particular require this identity for $\psi=1,mv_i,m|v|^2/2$; the elastic collision constraints make each corresponding collision bracket zero. Require $f^\varepsilon$ to solve

$$\varepsilon\bigl(\partial_t f^\varepsilon+v\cdot\nabla_x f^\varepsilon\bigr)=Q_\nu(f^\varepsilon),$$

Let $m>0$ in kilograms and $k_B>0$ in joules per kelvin. Let $n,u,T$ be $C^1$ periodic fields, with $n,T$ bounded above and bounded away from zero and $u$ bounded, and define their local Maxwellian by

$$M_{n,u,T}(v)=n\left(\frac{m}{2\pi k_BT}\right)^{3/2}\exp\left(-\frac{m|v-u|^2}{2k_BT}\right),$$

where $n$ is number density in $\mathrm{m^{-3}}$, $u$ is velocity in $\mathrm{m\,s^{-1}}$, $T$ is translational temperature in kelvins, and $I_3$ below is the identity tensor on $\mathbb R^3$.

For the fixed velocity unit $v_*=1\,\mathrm{m\,s^{-1}}$, assume

$$\int_0^{T_*}\int_\Omega\int_{\mathbb R^3}\omega_3(v)|f^\varepsilon-M_{n,u,T}|\,d^3v\,d^3x\,dt\longrightarrow0\quad\text{as }\varepsilon\to0,$$

and assume the initial convergence

$$\int_\Omega\int_{\mathbb R^3}\omega_2(v)|f^\varepsilon(x,v,0)-M_{n(x,0),u(x,0),T(x,0)}(v)|\,d^3v\,d^3x\longrightarrow0.$$

Then, with $\rho=mn$, $E=\frac12\rho|u|^2+\frac32nk_BT$, and local-equilibrium scalar pressure $p=nk_BT$, the limiting fields satisfy the compressible ideal-monatomic-gas Euler equations

$$\partial_t\rho+\nabla_x\cdot(\rho u)=0,$$

$$\partial_t(\rho u)+\nabla_x\cdot(\rho u\otimes u+pI_3)=0,$$

$$\partial_tE+\nabla_x\cdot((E+p)u)=0.$$

The equations hold distributionally and pointwise because the limiting fields are $C^1$; the initial trace is the one supplied by the initial convergence. The weighted strong convergence is a hypothesis, not a consequence of small $\varepsilon$, the entropy estimate, or the adopted model alone. This is a conditional model deduction, not an empirical claim.

## Statement references

[MIT OpenCourseWare 8.333, Lecture 11, §III.H (local Maxwellian and zeroth-order Euler equations)](https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/7b163cc0ea1359b70b018a1415399d64_MIT8_333F13_Lec11.pdf)

[David Tong, Lectures on Kinetic Theory, §2.4.2 (ideal fluids and the streaming-equation qualification)](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

## Facts & Assumptions

**Given:** The periodic domain and time strip, the exact scaled equation, regular kinetic solutions, $C^1$ positive bounded limiting fields, the displayed weighted strong convergence, and the analogous initial convergence.

[F1] [[prop-fd-maxwellian-moments]]: the displayed local Maxwellian has mass moment $mn=\rho$, momentum moment $mnu=\rho u$, isotropic stress $pI_3$ with $p=nk_BT$, zero centered heat flux, and energy moment $E=\rho|u|^2/2+3nk_BT/2$. Expanding $v=u+(v-u)$ and using these centered moments gives momentum flux $\rho u\otimes u+pI_3$ and energy flux $Eu+pI_3u=(E+p)u$. These are Gaussian moment calculations for the supplied positive $n,T$, not kinetic convergence assertions.

[F2] [[def-fd-physical-kinetic-observables]]: $n$ is number density in $\mathrm{m^{-3}}$, $\rho=mn$ is mass density in $\mathrm{kg\,m^{-3}}$, $u$ is mean velocity in $\mathrm{m\,s^{-1}}$, $T$ is translational temperature in kelvins, and $E$ is total kinetic-energy density in $\mathrm{J\,m^{-3}}$.

[F3] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: absolutely integrable functions on the time, periodic spatial-cell, and velocity product measures may be integrated in either order.

[F4] [[thm-integration-by-parts]]: integration by parts for continuously differentiable functions gives the endpoint terms; opposite spatial faces cancel for periodic functions.

[F5] [[lem-smooth-bump-between-concentric-euclidean-balls]]: concentric Euclidean balls with radii $0<r<R$ admit a nonnegative smooth function equal to one on the inner ball and supported in the outer ball.

[A1] [[post-fd-boltzmann-model]]: the elastic collision operator and its nonrelativistic single-species interpretation are adopted physical model inputs.

[A2] The fast-collision scaling and weighted strong convergence in the statement are additional hypotheses of this conditional result; no convergence is inferred from $\varepsilon\to0$ alone.

## Proof

1.1 Use the collision-invariant multipliers $\psi=m$, $\psi=mv_i$ for $i=1,2,3$, and $\psi=m|v|^2/2$. Their weak collision brackets vanish by the elastic constraints, and the stated absolute convergence makes $\int\psi Q_\nu(f^\varepsilon)\,d^3v=0$ for each of them. Since $\varepsilon>0$, the scaled equation therefore gives $\int\psi(\partial_t f^\varepsilon+v\cdot\nabla_xf^\varepsilon)\,d^3v=0$. The assumed $\omega_3|\partial_t f^\varepsilon|$ and $\omega_3|v\cdot\nabla_xf^\varepsilon|$ majorants justify these integrals. This uses the summed transport derivative as supplied; separate majorants for $\psi v_j\partial_{x_j}f^\varepsilon$ are not needed. [given, A1, A2, algebra]

1.2 Let $\chi\in C^1([0,T_*]\times\Omega)$ be periodic in space and vanish near $T_*$, allowing $\chi(0,x)\ne0$. For each fixed velocity, integrate $\psi f^\varepsilon$ against $\partial_t\chi+v\cdot\nabla_x\chi$ and use [F4] in time and in each spatial coordinate. The time boundary is $-\int_\Omega\psi f^\varepsilon(0,x,v)\chi(0,x)\,d^3x$, and opposite periodic spatial boundaries cancel. Integrate this identity in velocity using [F3]. Indeed, $\psi$ has degree at most two, so $|\psi|$ and $|\psi||v|$ are bounded by constants times $\omega_3$; the displayed moment, time-derivative, and summed-transport envelopes make the grouped terms absolutely integrable. The initial term is integrable by the same moment bound at $t=0$. Thus step 1.1 gives the weak moment identity
$$\int_0^{T_*}\int_\Omega\int_{\mathbb R^3}\psi f^\varepsilon(\partial_t\chi+v\cdot\nabla_x\chi)\,d^3v\,d^3x\,dt+\int_\Omega\int_{\mathbb R^3}\psi f^\varepsilon(0,x,v)\chi(0,x)\,d^3v\,d^3x=0.$$
The spatial integration by parts was performed at each fixed velocity before applying Fubini to the summed transport and final test-gradient terms, so no separate weighted spatial derivative bound has been assumed. [given, F3, F4, step 1.1, algebra]

2.1 Replace $f^\varepsilon$ in step 1.2 by $M=M_{n,u,T}$, including its value at $t=0$. The absolute difference of the spacetime terms is at most $C_\chi\int_0^{T_*}\int_\Omega\int\omega_3|f^\varepsilon-M|$, since the coefficients $\psi\partial_t\chi+\psi v\cdot\nabla_x\chi$ have velocity degree at most three and the test derivatives are bounded. The initial difference is at most $C_\chi\int_\Omega\int\omega_2|f^\varepsilon(0)-M(0)|$, since $\psi$ has degree at most two. Both tend to zero by the two stated convergence hypotheses. Hence the displayed weak moment identity holds with $M$ and its initial value. [given, A2, step 1.2, algebra]

3.1 Apply [F1] to the Gaussian moments in step 2.1. The multiplier $m$ gives density $\rho$ and flux $\rho u$; the three multipliers $mv_i$ give momentum $\rho u$ and flux tensor $\rho u\otimes u+pI_3$; the multiplier $m|v|^2/2$ gives energy $E$ and flux $(E+p)u$. Applying the scalar identity componentwise to a vector test gives the momentum weak identity. Thus all three Euler equations hold in distributions, and their weak identities include exactly the initial values of the displayed Gaussian moments, identified by the $\omega_2$ initial convergence. These are the stated initial traces of the $C^1$ limiting fields. [F1, step 2.1, algebra]

3.2 The residuals of the three displayed Euler equations are continuous because the limiting fields are $C^1$. If a residual component were nonzero at an interior point, it would have one strict sign on a sufficiently small coordinate ball in $(0,T_*)\times\Omega$. Choose concentric balls within that chart and a nonnegative smooth bump from [F5], equal to one on the inner ball and supported in the outer ball; extend it by zero to the periodic cylinder. Its pairing with the residual would have strict sign, contradicting the distributional identity from step 3.1. Every residual therefore vanishes pointwise for $0<t<T_*$. [F5, step 3.1, algebra]

4.1 The observables [F2] identify $\rho=mn$ and the physical kinetic-energy density. The Gaussian moments in [F1] give $E=\rho|u|^2/2+3nk_BT/2$ and $p=nk_BT$, with precisely the stated SI units. The argument has used weighted strong convergence and its initial counterpart as assumptions, not derived them from small $\varepsilon$ or entropy. The full conclusion is conditional on the adopted physical model [A1] and convergence hypotheses [A2], with no empirical validity claim. [F1, F2, A1, A2, step 3.1, step 3.2, algebra] ∎
