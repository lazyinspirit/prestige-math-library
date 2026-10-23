---
id: ex-fd-bgk-initial-layer
kind: example
title: Non-equilibrium BGK data create an initial layer
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-fd-kinetic-density
  - thm-fd-homogeneous-bgk-limit
  - prop-fd-maxwellian-moments
  - thm-exponential-beats-every-polynomial
  - thm-gaussian-integral
  - thm-substitution-for-improper-integrals
  - thm-integration-by-parts
  - thm-of-square-roots
  - thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-fd-kinetic-density: mathematical-premise
  thm-fd-homogeneous-bgk-limit: mathematical-premise
  prop-fd-maxwellian-moments: mathematical-premise
  thm-exponential-beats-every-polynomial: mathematical-premise
  thm-gaussian-integral: mathematical-premise
  thm-substitution-for-improper-integrals: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2, §2.5.1, pp. 45–46"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "Nicola Zamponi, From the Boltzmann Equation to Hydrodynamic Models,
        §3.2, pp. 11–12"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/lecture_no\
        tes/LectureNotes-Prague-2017.pdf"
verification:
  precheck: pending
---

## Example

Adopt Countable Choice $\mathrm{AC}_\omega$, as in the kinetic-density framework. Let $v_*=1\,\mathrm{m\,s^{-1}}$, $\omega_3(v)=\sum_{j=0}^3(|v|/v_*)^j$, $\theta>0$ be a squared speed, choose a speed $a>0$ with $a^2<\theta$, and let $n>0$. For a positive-definite covariance matrix $\Sigma$, define the normalized Gaussian
$$G_{\mu,\Sigma}(v):=\frac{n}{(2\pi)^{3/2}\sqrt{\det\Sigma}} \exp\!\left(-\frac12(v-\mu)^{\mathsf T}\Sigma^{-1}(v-\mu)\right).$$
Set $\Sigma=\operatorname{diag}(\theta-a^2,\theta,\theta)$ and
$$f_0(v):=\frac12G_{ae_1,\Sigma}(v)+\frac12G_{-ae_1,\Sigma}(v).$$
This positive density has mass $n$, mean velocity $0$, and normalized covariance $\theta I_3$ (equivalently, second centered moment tensor $n\theta I_3$), so its moment-matched Maxwellian is $M=M_{n,0,T}$ with $k_BT=m\theta$. It is not itself Maxwellian and satisfies $\int f_0|\log(f_0/f_{\rm ref})|\,dv<\infty$ for every fixed positive constant reference density $f_{\rm ref}$ with the same units as $f_0$, interpreting the integrand as zero where $f_0=0$. For $\epsilon,\tau>0$, its homogeneous BGK evolution is
$$f^\epsilon(t,v)=M(v)+e^{-t/(\epsilon\tau)}(f_0(v)-M(v)).$$
For every $t>0$ this approaches $M$ as $\epsilon\to0$, and on every finite interval $[0,T_*]$ its $\omega_3$ weighted spacetime distance to $M$ is at most $\epsilon\tau\int\omega_3|f_0-M|\,dv$. It does not converge uniformly in time on $[0,T_*]$, since the distance at $t=0$ is strictly positive.

## Example references

[Tong, §2.5.1, full lecture notes](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

[Zamponi, §3.2, full lecture notes](https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/lecture_notes/LectureNotes-Prague-2017.pdf)

## Facts & Assumptions

**Given:** Countable Choice $\mathrm{AC}_\omega$, a fixed positive constant $f_{\rm ref}$ in the same units as $f_0$, $0<a^2<\theta$, $n,m,k_B,\epsilon,\tau>0$, and $k_BT=m\theta$.

[F1] [[thm-gaussian-integral]], [[thm-substitution-for-improper-integrals]], and [[thm-of-square-roots]]: Each one-dimensional Gaussian factor with variance $\sigma_i^2>0$ normalizes to one after $z=(v_i-\mu_i)/\sigma_i$.

[F2] [[thm-integration-by-parts]] and [[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]]: The centered one-dimensional Gaussian has mean zero by oddness and variance $\sigma_i^2$ by integration by parts, with the nonnegative improper integrals equal to their Lebesgue values.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] applied iteratively to the nonnegative absolute products establishes their integrability from the finite one-dimensional Gaussian moments; [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] then factors the signed moments.

[F4] [[prop-fd-maxwellian-moments]]: The isotropic Gaussian with density $n$, mean $u$, and variance $\theta I_3$ is $M_{n,u,T}$ when $k_BT=m\theta$.

[F5] [[def-fd-kinetic-density]]: $\omega_3(v)=\sum_{j=0}^3(|v|/v_*)^j$ for $v_*=1\,\mathrm{m\,s^{-1}}$.

[F6] [[thm-exponential-beats-every-polynomial]]: Polynomial factors times a Gaussian are integrable at infinity.

[F7] [[thm-fd-homogeneous-bgk-limit]]: The exact BGK solution satisfies $\|f^\epsilon(t)-M\|_{L^1(\omega_3dv)}=e^{-t/(\epsilon\tau)}\|f_0-M\|_{L^1(\omega_3dv)}$.

[A1] $f_0$ is the positive Gaussian mixture in the Example.

## Verification

1.1 Write $\sigma_1^2=\theta-a^2$ and $\sigma_2^2=\sigma_3^2=\theta$. Each factor $g_{\mu_i,\sigma_i}(v_i)=(2\pi\sigma_i^2)^{-1/2}e^{-(v_i-\mu_i)^2/(2\sigma_i^2)}$ has mass one, mean $\mu_i$, and centered second moment $\sigma_i^2$ by [F1]–[F2]. Product Fubini [F3] therefore gives mass $n$, mean $\pm ae_1$, and covariance $\Sigma$ for each $G_{\pm ae_1,\Sigma}$. Their equal mixture has mean zero and covariance
$$\Sigma+a^2e_1\otimes e_1=\operatorname{diag}(\theta,\theta,\theta)=\theta I_3.$$
Its moments identify the target as $M_{n,0,T}$ with $k_BT=m\theta$ by [F4]. Since $\Sigma$ is positive definite, eigenvalue bounds give constants $C,c>0$ such that $f_0(v)\le C e^{-c|v|^2}$ and $f_0(v)\ge C^{-1}e^{-C(1+|v|^2)}$. Hence $|\log(f_0/f_{\rm ref})|\le C'(1+|v|^2)$ and the absolute entropy and weighted third moment are finite by [F6] and [F3]. [A1, F1, F2, F3, F4, F5, F6, algebra]

2.1 Along $v=(s,0,0)$, the mixture is a positive constant times
$$e^{-s^2/(2(\theta-a^2))}\cosh\!\left(\frac{as}{\theta-a^2}\right).$$
The second derivative of its logarithm contains
$$\left(\frac{a}{\theta-a^2}\right)^2 \operatorname{sech}^2\!\left(\frac{as}{\theta-a^2}\right),$$
which is nonconstant because $a>0$. The logarithm of any Maxwellian is quadratic with constant Hessian, so $f_0\ne M$. By [F7], the weighted distance at time $t$ is $e^{-t/(\epsilon\tau)}C$ with $C:=\int\omega_3|f_0-M|\,dv>0$. It tends to zero for each fixed $t>0$, equals $C$ at $t=0$, and its time integral is at most $\epsilon\tau C$. Therefore convergence is not uniform on $[0,T_*]$, while the stated spacetime convergence holds. [A1, F3, F5, F7, algebra] ∎
