---
id: lem-em-period-average
kind: lemma
title: "Period averages of products of real parts of complex exponentials"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-em-complex-plane-wave, def-complex-exponential, def-complex-conjugate-real-imaginary-part-and-modulus, def-complex-numbers-and-arithmetic, thm-complex-numbers-form-a-field, thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-addition-and-real-extension, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, lem-complex-conjugation-and-modulus-laws, thm-kernel-and-fibres-of-complex-exponential, thm-newton-leibniz-with-interior-derivative, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-cross-product-in-r3, def-euclidean-inner-product]
dependency_roles:
  def-em-complex-plane-wave: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  thm-kernel-and-fibres-of-complex-exponential: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Review of Phasor Notation (course notes, University of San Diego), Complex Vectors and Time Harmonic Representation; Amplitude, Time Average, Mean Square"
      url: "https://home.sandiego.edu/~ekim/e171f00/lectures/phasors"
    - title: "J. Lebl, Basic Analysis II, §9.1 (Leibniz integral rule), Theorem 9.1.1"
      url: "https://www.jirka.org/ra/realanal2.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $\omega>0$ and $T:=2\pi/\omega>0$.

**Scalar form.** Let $a,d\in\mathbb C$. Then

$$\frac1T\int_0^T\operatorname{Re}\bigl(ae^{-i\omega t}\bigr)\operatorname{Re}\bigl(de^{-i\omega t}\bigr)\,dt=\frac12\operatorname{Re}\bigl(a\overline d\bigr).$$

**Vector forms.** Let $a,d\in\mathbb C^3$, write the same symbols for the componentwise complex-bilinear extensions of the Euclidean inner product and of the cross product of [[def-euclidean-inner-product]] and [[def-cross-product-in-r3]] to $\mathbb C^3$, and let $\operatorname{Re}$ act componentwise. In coordinate formulas, $\epsilon_{ijk}$ is $+1$ for even permutations of $(1,2,3)$, $-1$ for odd permutations and zero for repeated indices; all displayed repeated-index sums run from 1 to 3. Then

$$\frac1T\int_0^T\bigl\langle\operatorname{Re}\bigl(ae^{-i\omega t}\bigr),\operatorname{Re}\bigl(de^{-i\omega t}\bigr)\bigr\rangle\,dt=\frac12\operatorname{Re}\bigl(\langle a,\overline d\rangle\bigr),\qquad \frac1T\int_0^T\operatorname{Re}\bigl(ae^{-i\omega t}\bigr)\times\operatorname{Re}\bigl(de^{-i\omega t}\bigr)\,dt=\frac12\operatorname{Re}\bigl(a\times\overline d\bigr),$$

the integrals of the real vector-valued integrands being componentwise. The real-valued functions $\operatorname{Re}(ae^{-i\omega t})$ are the time-dependent factors of the plane-wave fields of [[def-em-complex-plane-wave]] at a fixed position, with the phase absorbed into $a$ and $d$; no electromagnetic interpretation is asserted. Real quadratic expressions may not be replaced by complex quadratic expressions without conjugation: the average is not $\tfrac12\operatorname{Re}(ad)$ in general. For $a=d=1+i$ the proved average is $\tfrac12|1+i|^2=1$, whereas $\tfrac12\operatorname{Re}((1+i)^2)=0$.

## Facts & Assumptions

**Given:** A real $\omega>0$, $T=2\pi/\omega$; complex numbers $a,d\in\mathbb C$ and, in the vector forms, $a,d\in\mathbb C^3$ with the componentwise conventions of the Statement.

[F1] Complex exponential and its calculus: $\exp z=\sum_{n\ge0}z^n/n!$ has $\exp 0=1$, is entire with $\exp'=\exp$, and satisfies the addition law $\exp(z+w)=\exp z\exp w$; for real $x,y$ one has $\exp(x+iy)=e^x(\cos y+i\sin y)$ and $|\exp(x+iy)|=e^x$, so $|e^{i\theta}|=1$ for real $\theta$ ([[def-complex-exponential]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F2] Coordinates, conjugation and modulus: $z=a+bi$ has $\operatorname{Re}z=a$, $\operatorname{Im}z=b$, $\overline z=a-bi$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]); conjugation is a real-field automorphism with $\overline{z+w}=\overline z+\overline w$, $\overline{zw}=\overline z\,\overline w$, $\overline{\overline z}=z$, and $z\overline z=|z|^2$ ([[lem-complex-conjugation-and-modulus-laws]]); in particular $\overline i=-i$, $\overline r=r$ for real $r$, and the field axioms of [[thm-complex-numbers-form-a-field]] hold. Consequently, for real $\theta$, $e^{i\theta}e^{-i\theta}=e^0=1$ by [F1] and $|e^{i\theta}|=1$ by [F1], so $\overline{e^{i\theta}}=\overline{e^{i\theta}}\cdot e^{i\theta}e^{-i\theta}=|e^{i\theta}|^2e^{-i\theta}=e^{-i\theta}$; replacing $\theta$ by $-\theta$ gives $\overline{e^{-i\theta}}=e^{i\theta}$.

[F3] Kernel of the exponential: $\ker(\exp)=2\pi i\mathbb Z$, so $e^{2\pi in}=1$ for every $n\in\mathbb Z$; in particular $e^{-4\pi i}=1$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[F4] Real and imaginary parts of differentiable paths: identifying $\mathbb C$ with $\mathbb R^2$, the maps $\operatorname{Re},\operatorname{Im}:\mathbb C\to\mathbb R$ are real-linear, so for a differentiable path $z:J\to\mathbb C$ on an interval $J$ the functions $t\mapsto\operatorname{Re}z(t)$ and $t\mapsto\operatorname{Im}z(t)$ are differentiable with derivatives $\operatorname{Re}z'(t)$ and $\operatorname{Im}z'(t)$ by the chain rule ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]]); in particular $\frac{d}{dt}e^{-2i\omega t}=-2i\omega\,e^{-2i\omega t}$, since $t\mapsto-2i\omega t$ is real-linear with derivative $-2i\omega$ and $\exp'=\exp$ by [F1].

[F5] Fundamental theorem of calculus: if $G:[\alpha,\beta]\to\mathbb R$ is continuous on $[\alpha,\beta]$ and differentiable on $(\alpha,\beta)$, and $f$ is Riemann integrable on $[\alpha,\beta]$ with $f=G'$ on $(\alpha,\beta)$, then $\int_\alpha^\beta f=G(\beta)-G(\alpha)$ ([[thm-newton-leibniz-with-interior-derivative]]).

[F6] Additivity of the real part: $\operatorname{Re}(u+v)=\operatorname{Re}u+\operatorname{Re}v$ for $u,v\in\mathbb C$, hence the same for every finite sum, and $\operatorname{Re}(\lambda u)=\lambda\operatorname{Re}u$ for real $\lambda$; these are the coordinate rules of the real-linear map $\operatorname{Re}$ of [F2].

## Proof

**Proof technique:** direct; expand each real part with $\operatorname{Re}z=(z+\overline z)/2$, exhibit an explicit antiderivative whose real part has the integrand as derivative, and evaluate it by the fundamental theorem using the period $2\pi i$ of the exponential.

1.1 Scalar algebraic identity. Let $a,d\in\mathbb C$ and $t\in\mathbb R$. By [F2], $\operatorname{Re}(ae^{-i\omega t})=\frac12(ae^{-i\omega t}+\overline a\,\overline{e^{-i\omega t}})=\frac12(ae^{-i\omega t}+\overline a\,e^{i\omega t})$, and likewise $\operatorname{Re}(de^{-i\omega t})=\frac12(de^{-i\omega t}+\overline d\,e^{i\omega t})$. Multiplying the two real expressions and using the conjugation rules of [F2] throughout gives $4\operatorname{Re}(ae^{-i\omega t})\operatorname{Re}(de^{-i\omega t})=ad\,e^{-2i\omega t}+a\overline d+\overline a\,d+\overline a\overline d\,e^{2i\omega t}$. Since $\overline{ad\,e^{-2i\omega t}}=\overline a\overline d\,e^{2i\omega t}$ and $\overline{a\overline d}=\overline a\,d$ by [F2], the first and fourth terms are conjugate, as are the second and third, so the last display equals $2\operatorname{Re}(ad\,e^{-2i\omega t})+2\operatorname{Re}(a\overline d)=2\operatorname{Re}(ad\,e^{-2i\omega t}+a\overline d)$ by [F6]; hence $\operatorname{Re}(ae^{-i\omega t})\operatorname{Re}(de^{-i\omega t})=\frac12\operatorname{Re}(ad\,e^{-2i\omega t}+a\overline d)$. [given, F2, F6, algebra]

2.1 Antiderivative. Define $\Phi(t):=\dfrac{ad\,e^{-2i\omega t}}{-2i\omega}+a\overline d\,t$ for $t\in\mathbb R$; the division is by the nonzero complex number $-2i\omega$, and $\Phi$ is differentiable with $\Phi'(t)=ad\,e^{-2i\omega t}+a\overline d$ by [F1], [F4] and the algebra of derivatives: the derivative of $e^{-2i\omega t}$ is $-2i\omega\,e^{-2i\omega t}$ because $\exp'=\exp$ ([F1]) and the parameter map is real-linear. Hence the real function $G:=\operatorname{Re}\Phi$ is continuous on $[0,T]$ and differentiable on $(0,T)$ with derivative $G'(t)=\operatorname{Re}\Phi'(t)=\operatorname{Re}(ad\,e^{-2i\omega t}+a\overline d)=2\operatorname{Re}(ae^{-i\omega t})\operatorname{Re}(de^{-i\omega t})$ by [F4] and step 1.1; in particular $G'$ is continuous, hence Riemann integrable on $[0,T]$. [step 1.1, F1, F4, algebra]

3.1 Scalar identity. Since $2\omega T=4\pi$, the kernel computation of [F3] gives $e^{-2i\omega T}=e^{-4\pi i}=1$; therefore $\Phi(T)=\dfrac{ad}{-2i\omega}+a\overline d\,T$ and $\Phi(0)=\dfrac{ad}{-2i\omega}$, so $\Phi(T)-\Phi(0)=a\overline d\,T$. The fundamental theorem [F5] applied to $G$ and $G'$ gives $\int_0^TG'=G(T)-G(0)=\operatorname{Re}\bigl(\Phi(T)-\Phi(0)\bigr)=T\operatorname{Re}(a\overline d)$ by [F6]. Since $G'=2\operatorname{Re}(ae^{-i\omega t})\operatorname{Re}(de^{-i\omega t})$ by step 2.1, dividing the identity $\int_0^TG'=T\operatorname{Re}(a\overline d)$ by $2T>0$ gives the scalar form of the Statement. [step 2.1, F3, F5, F6, algebra]

4.1 Vector forms. Let $a,d\in\mathbb C^3$ and $F(t):=\operatorname{Re}(ae^{-i\omega t})$, $G(t):=\operatorname{Re}(de^{-i\omega t})$. For every $j,k\in\{1,2,3\}$, the already proved scalar identity of step 3.1 gives $T^{-1}\int_0^TF_j(t)G_k(t)\,dt=\frac12\operatorname{Re}(a_j\overline{d_k})$. The coordinate inner product and cross product use finite sums: $\langle F,G\rangle=\sum_{j=1}^3F_jG_j$ and $(F\times G)_i=\sum_{j,k=1}^3\epsilon_{ijk}F_jG_k$. Each product has the explicit real antiderivative constructed in step 2.1 for its pair $(a_j,d_k)$; summing those finitely many antiderivatives and applying [F5] proves that their integrals sum with the same coefficients. Hence $T^{-1}\int_0^T\langle F,G\rangle\,dt=\frac12\operatorname{Re}\sum_{j=1}^3a_j\overline{d_j}=\frac12\operatorname{Re}\langle a,\overline d\rangle$, and $T^{-1}\int_0^T(F\times G)_i\,dt=\frac12\operatorname{Re}\sum_{j,k=1}^3\epsilon_{ijk}a_j\overline{d_k}=\frac12\operatorname{Re}(a\times\overline d)_i$ by real linearity of [F6]. This proves both componentwise vector formulas, including all zero amplitudes. [step 2.1, step 3.1, F5, F6, algebra] ∎

## Remarks

- The conjugation in $\frac12\operatorname{Re}(a\overline d)$ is essential and cannot be absorbed into the amplitudes: at $t=0$ with $a=d=1+i$ one has $\operatorname{Re}(a)\operatorname{Re}(d)=1$ while $\frac12\operatorname{Re}(ad)=\frac12\operatorname{Re}(2i)=0$, so the real quadratic form and the complex square differ even pointwise.
- The proof uses no choice principle: only the power-series exponential, its kernel, the fundamental theorem and real-linear algebra of $\operatorname{Re}$ enter, and the integrand is a continuous real function on a compact interval.
