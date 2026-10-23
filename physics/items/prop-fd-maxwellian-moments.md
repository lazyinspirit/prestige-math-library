---
id: prop-fd-maxwellian-moments
kind: proposition
title: Gaussian Maxwellian normalization, stress, and heat flux
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-kinetic-density
  - thm-gaussian-integral
  - thm-of-square-roots
  - thm-substitution-for-improper-integrals
  - thm-integration-by-parts
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line
  - thm-exponential-beats-every-polynomial
dependency_roles:
  def-fd-kinetic-density: mathematical-premise
  thm-gaussian-integral: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-substitution-for-improper-integrals: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line: mathematical-premise
  thm-exponential-beats-every-polynomial: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2, §2.4.2, pp. 40–43"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "Nicola Zamponi, From the Boltzmann Equation to Hydrodynamic Models,
        §3.2, pp. 11–12"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/lecture_no\
        tes/LectureNotes-Prague-2017.pdf"
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Adopt Countable Choice, denoted $\mathrm{AC}_\omega$, as in the kinetic-density definition. Let $n>0$, $u\in\mathbb R^3$, $T>0$, particle mass $m>0$, and Boltzmann constant $k_B>0$. Set $\theta=k_BT/m$ and define $M_{n,u,T}(v):=n(2\pi\theta)^{-3/2}\exp(-|v-u|^2/(2\theta))$. Its Lebesgue moments are
$$\int_{\mathbb R^3}M_{n,u,T}\,dv=n,\qquad \int_{\mathbb R^3}vM_{n,u,T}\,dv=nu,$$
$$m\int_{\mathbb R^3}(v-u)\otimes(v-u)M_{n,u,T}\,dv=nk_BT\,I_3,\qquad \frac m2\int_{\mathbb R^3}|v-u|^2(v-u)M_{n,u,T}\,dv=0,$$
and
$$\frac m2\int_{\mathbb R^3}|v|^2M_{n,u,T}\,dv =\frac{mn|u|^2}{2}+\frac{3nk_BT}{2}.$$
Thus its pressure tensor is isotropic and its centered heat flux vanishes; these conclusions concern this Gaussian profile and do not impose isotropy on a general kinetic density.

## Statement references

[Tong, §2.4.2, full lecture notes](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

[Zamponi, §3.2, full lecture notes](https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/lecture_notes/LectureNotes-Prague-2017.pdf)

## Facts & Assumptions

**Given:** Countable Choice and $M_{n,u,T}(v)=n(2\pi\theta)^{-3/2}\exp(-|v-u|^2/(2\theta))$, with $\theta=k_BT/m>0$.

[F1] [[thm-gaussian-integral]]: $\int_{\mathbb R}e^{-z^2/2}\,dz=\sqrt{2\pi}$, obtained from the one-dimensional Gaussian integral by rescaling.

[F2] [[thm-substitution-for-improper-integrals]]: The affine substitution $v=u+\sqrt{\theta}\,z$ transforms the stated Gaussian integrals to integrals in $z$.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] applied iteratively to the nonnegative absolute products establishes their integrability from the finite one-dimensional Gaussian-polynomial integrals; [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] then factors the resulting signed moments.

[F4] [[thm-integration-by-parts]]: Gaussian decay makes the boundary term vanish and yields $\int_{\mathbb R}z^2e^{-z^2/2}\,dz=\int_{\mathbb R}e^{-z^2/2}\,dz$.

[F5] [[thm-of-square-roots]]: $\theta>0$ has the positive square root used in the substitution.

[F6] [[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]]: Under Countable Choice, a nonnegative function on $[b,\infty)$ that is Riemann integrable on every compact truncation and has a finite improper Riemann integral is Lebesgue integrable there with the same integral. Apply this also to the reflected function for a negative half-line; the Gaussian-polynomial factors here are continuous on every compact truncation.

[F7] [[thm-exponential-beats-every-polynomial]]: Polynomial factors times $e^{-z^2/2}$ are integrable at infinity, since the exponential dominates every inverse power after setting $x=z^2$.

[A1] The parameters $n,m,k_B,T$ are positive, and Countable Choice is adopted as in [[def-fd-kinetic-density]]. It is used for the Riemann-to-Lebesgue conversion in [F6]; no stronger choice principle is assumed.

## Proof

1.1 Apply [F2] coordinatewise with $v=u+\sqrt{\theta}\,z$. Then $dv=\theta^{3/2}dz$, and the prefactor becomes $n(2\pi)^{-3/2}$. By [F1], [F3], and [F6], the one-dimensional Gaussian Lebesgue integrals are finite and equal their improper Riemann values, and Tonelli/Fubini factors the three-dimensional product integral to $n$. Each centered first moment is zero because $z_i e^{-|z|^2/2}$ is odd in $z_i$ and absolutely integrable. Hence $\int M\,dv=n$ and $\int vM\,dv=nu$. [A1, F1, F2, F3, F5, F6, F7, algebra]

1.2 For $i\ne j$, the integral of $z_i z_j e^{-|z|^2/2}$ is zero by oddness in one coordinate. For each $i$, [F4] gives
$$\int_{\mathbb R^3}z_i^2(2\pi)^{-3/2}e^{-|z|^2/2}\,dz=1,$$
using [F1] and [F6] for the other coordinates. Thus $\int (v-u)_i(v-u)_jM\,dv=n\theta\,\delta_{ij}$, and multiplication by $m$ gives $mn\theta I_3=nk_BT I_3$. [A1, F1, F2, F3, F4, F5, F6, F7, algebra]

2.1 Each component of $|z|^2z e^{-|z|^2/2}$ is odd under $z\mapsto-z$, with absolute integrability, so its integral is zero and the centered heat flux vanishes. Finally write $|v|^2=|u|^2+2u\cdot(v-u)+|v-u|^2$. The middle term integrates to zero by step 1.1, and the last term has integral $3n\theta$ by step 1.2. Multiplying by $m/2$ yields the stated energy. [A1, F1, step 1.1, step 1.2, algebra] ∎

