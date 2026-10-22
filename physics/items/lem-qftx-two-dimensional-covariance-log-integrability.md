---
id: lem-qftx-two-dimensional-covariance-log-integrability
kind: lemma
title: Logarithmic singularity and decay of the massive two-dimensional covariance
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
proof_strategy: direct
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - cor-c-one-change-of-variables-for-l-one-functions
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - cor-exponential-reciprocal-and-positivity
  - def-axiom-of-choice
  - def-countable-choice
  - def-fourier-transform-on-l-one-of-rn
  - def-real-exponential-function-and-e
  - def-qftx-two-dimensional-wick-cutoff
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - thm-derivative-of-exponential
  - thm-dominated-convergence
  - thm-exponential-beats-every-polynomial
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-gaussian-integral
  - thm-newton-leibniz-with-interior-derivative
  - thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line
  - thm-substitution-for-improper-integrals
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-qftx-tempered-massive-gaussian-field
dependency_roles:
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  def-qftx-two-dimensional-wick-cutoff: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-exponential-beats-every-polynomial: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-gaussian-integral: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line: mathematical-premise
  thm-substitution-for-improper-integrals: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-qftx-tempered-massive-gaussian-field: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Stephen J. Summers, A Perspective on Constructive Quantum Field Theory, §3 opening"
      url: "https://arxiv.org/pdf/1203.3991"
      locator: "PDF p. 10: the massive two-dimensional free Euclidean covariance is (−Δ+m²)⁻¹. The heat-kernel representation and all pointwise bounds are derived locally."
    - title: "Barry Simon, The P(φ)₂ Euclidean (Quantum) Field Theory, Chapter I, §1.1 (publisher preview)"
      url: "https://api.pageplace.de/preview/DT0400.9781400868759_A26063613/preview-9781400868759_A26063613.pdf"
      locator: "PDF pp. 24–33, printed pp. 4–13: the Gaussian Euclidean-field framework; the logarithmic kernel bounds are proved locally from the stated resolvent covariance."
---

## Statement

Assume the Axiom of Choice, its countable-family consequence, $m>0$, and the fixed mollifier from the earlier cutoff definition. Let $C_m$ be the translation-invariant covariance distribution whose Fourier multiplier is $(|p|^2+m^2)^{-1}$ in the convention $\widehat f(p)=\int e^{-ip\cdot x}f(x)\,d^2x$. It is represented by the even locally integrable function

$$G_m(z)=\frac1{4\pi}\int_0^\infty t^{-1}\exp\!\left(-m^2t-\frac{|z|^2}{4t}\right)dt,\qquad z\ne0.$$

There are constants $K_m,K_{m,R}<\infty$ such that $|G_m(z)|\le K_m(1+|\log|z||)$ for $0<|z|\le1$, $|G_m(z)|\le K_m e^{-m|z|}/\sqrt{m|z|}$ for $|z|\ge1$, and $G_m^q\in L^1_{\mathrm{loc}}(\mathbb R^2)$ for every finite $q\ge1$. For the mollified fields of the earlier cutoff definition, $\kappa_{\epsilon,\delta}(w)=\int\rho_\epsilon(a)\rho_\delta(a-w)\,d^2a$ and $C_{\epsilon,\delta}=G_m*\kappa_{\epsilon,\delta}$ satisfy $\mathbb E[\Phi_\epsilon(x)\Phi_\delta(y)]=C_{\epsilon,\delta}(x-y)$. Moreover, $C_{\epsilon,\delta}(z)\to G_m(z)$ for every $z\ne0$ as $\epsilon,\delta\downarrow0$, and for every $R>0$ there are $K_{m,R},\epsilon_{m,R}>0$ with

$$|C_{\epsilon,\delta}(z)|\le K_{m,R}(1+|\log|z||)\quad(0<|z|\le R,\ 0<\epsilon,\delta\le\epsilon_{m,R}).$$

## Statement references

[[thm-qftx-tempered-massive-gaussian-field]]

[[def-qftx-two-dimensional-wick-cutoff]]

[[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]

## Facts & Assumptions

**Given:** Assume the Axiom of Choice and its countable-family consequence. Let $m>0$, use the Fourier convention and Gaussian covariance from the Statement and preceding definition, and fix the nonnegative compactly supported mollifier $\rho$ with unit integral.

[A1] The Axiom of Choice is required by the Gaussian random distribution supplier. [[def-axiom-of-choice]]

[A2] Countable Choice is the countable-family instance inherited from [A1] and is used by the Gaussian Fourier transform supplier. [[def-countable-choice]]

[F1] For real Schwartz tests, the centered Gaussian field has covariance multiplier $(|p|^2+m^2)^{-1}$ with inverse-transform normalization $(2\pi)^{-2}$. [[thm-qftx-tempered-massive-gaussian-field]]

[F2] Under $\mathcal F_{2\pi}f(\xi)=\int e^{-2\pi i x\cdot\xi}f(x)dx$, $\mathcal F_{2\pi}(e^{-\pi s|x|^2})(\xi)=s^{-1}e^{-\pi|\xi|^2/s}$ in dimension two. [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]

[F3] Absolutely integrable functions on sigma-finite product measure spaces may be integrated in either order. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F4] Almost-everywhere convergence under one integrable majorant implies convergence of the integrals. [[thm-dominated-convergence]]

[F5] $\int_{\mathbb R}e^{-u^2}du=\sqrt\pi$. [[thm-gaussian-integral]]

[F6] A monotone differentiable substitution on an improper interval preserves the integral under the supplier's compact-truncation hypotheses. [[thm-substitution-for-improper-integrals]]

[F7] The real exponential is differentiable with derivative itself and is given by its all-real power series. [[thm-derivative-of-exponential]] [[def-real-exponential-function-and-e]]

[F8] $\exp(-x)=1/\exp(x)>0$. [[cor-exponential-reciprocal-and-positivity]]

[F9] For each fixed integer power and positive scale, the exponential dominates that power at $+\infty$. [[thm-exponential-beats-every-polynomial]]

[F10] If a continuous function $G$ has a Riemann-integrable interior derivative on a compact interval, Newton-Leibniz gives the integral as the endpoint difference. [[thm-newton-leibniz-with-interior-derivative]]

[F11] A convergent nonnegative improper Riemann integral on a half-line equals the Lebesgue integral there. [[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]]

[F12] A continuous real function on a closed interval is Riemann integrable. [[thm-continuous-on-a-rectangle-is-riemann-integrable]]

[F13] The $2\pi$-normalized Fourier transform maps Schwartz functions to Schwartz functions; rescaling the frequency variable gives the same property for $\widehat f(p)=\int e^{-ip\cdot x}f(x)dx$. [[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]

[F14] The $2\pi$-normalized Fourier transform is $\mathcal Ff(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$. [[def-fourier-transform-on-l-one-of-rn]]

[F15] For a $C^1$ diffeomorphism $T$ between Euclidean open sets, substitution in the Lebesgue integral multiplies by $|\det DT|$; in particular translations and the reflection $p\mapsto-p$ preserve Lebesgue measure. [[cor-c-one-change-of-variables-for-l-one-functions]]

## Proof

**Proof technique:** heat-kernel representation followed by explicit one-dimensional bounds.

**Given:** [A1]–[A2], [F1]–[F6], $m>0$, and the fixed mollifier.

1.1 For $a>0$ and $T>0$, substitute $u=-at$ by [F6]. The function $u\mapsto\exp(u)$ is continuous and has derivative $\exp(u)$ by [F7], and this derivative is Riemann integrable on $[-aT,0]$ by [F12]; hence [F10] gives $\int_0^T\exp(-at)dt=a^{-1}(1-\exp(-aT))$. By [F9] with power $1$ and scale $a$, $T/\exp(aT)\to0$; for $T\ge1$, [F8] gives $0<\exp(-aT)\le T/\exp(aT)$, so $\exp(-aT)\to0$. Thus $\int_0^\infty\exp(-at)dt=1/a$ as a nonnegative improper Riemann integral, and as a Lebesgue integral by [F11]. Next, [F2] and [F14] with $s=t/\pi$ and $\xi=-z/(2\pi)$ give $(2\pi)^{-2}\int e^{ip\cdot z}e^{-t|p|^2}d^2p=(2\pi)^{-2}(\pi/t)e^{-|z|^2/(4t)}=(4\pi t)^{-1}e^{-|z|^2/(4t)}=:h_t(z)$. Its integral is one: [F5] in each coordinate and $x=2\sqrt t\,u$ by [F6] give $\int h_t(z)d^2z=1$. For every $p$, the Laplace identity gives $(|p|^2+m^2)^{-1}=\int_0^\infty e^{-t(|p|^2+m^2)}dt$. If $\psi\in\mathcal S(\mathbb R^2)$, the displayed inverse-kernel formula and Fubini give $\int h_t(z)\psi(z)d^2z=(2\pi)^{-2}\int e^{-t|p|^2}\widehat\psi(-p)d^2p$; the exchanges are absolute because $e^{-t|p|^2}\in L^1$ and $\psi\in L^1$. Therefore $\int_0^\infty e^{-m^2t}\int h_t(z)|\psi(z)|d^2zdt\le\|\psi\|_\infty/m^2$, while the Fourier-side integral is absolutely convergent since [F13] makes $\widehat\psi$ Schwartz and $m>0$. Integrating the Fourier identity over $t$ and applying Fubini [F3] in $(t,z)$ and $(t,p)$ gives the heat-kernel superposition's pairing $(2\pi)^{-2}\int\widehat\psi(-p)(|p|^2+m^2)^{-1}d^2p$; reflection $p\mapsto-p$ preserves Lebesgue measure by [F15] and yields the covariance pairing. For real Schwartz $f,g$, set $\Psi(z)=\int\overline{f(y+z)}g(y)d^2y$. Differentiation under this integral is justified locally in $z$ by bounded derivatives of $f$ and the integrability of $g$. For multiindices $\alpha,\beta$, write $x=y+z$ and expand $z^\alpha=(x-y)^\alpha$; each term of $z^\alpha\partial^\beta\Psi(z)$ is bounded uniformly in $z$ by a finite product of seminorms $\sup_x|x^\gamma\partial^\beta f(x)|$ and integrals $\int|y^{\alpha-\gamma}g(y)|d^2y$, which are finite because $f,g$ are Schwartz. Thus $\Psi\in\mathcal S(\mathbb R^2)$. Absolute Fubini and the substitution $x=y+z$ give $\widehat\Psi(-p)=\int\!\!\int e^{ip\cdot(x-y)}\overline{f(x)}g(y)d^2x\,d^2y=\overline{\widehat f(p)}\widehat g(p)$; absolute integrability follows from $\|f\|_1\|g\|_1<\infty$. Applying the just-proved kernel pairing to this Schwartz test $\Psi$ recovers exactly the covariance $C_m(f,g)$ in [F1]. Thus the heat-kernel superposition is the a.e. spatial density of the covariance distribution, and its value for each $z\ne0$ is the defining integral for $G_m(z)$. [A1, A2, F1, F2, F3, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F15, given, algebra]

2.1 For $0<r=|z|\le1$, the part of the defining $t$-integral over $t\ge1$ is bounded by $\int_1^\infty e^{-m^2t}dt<\infty$ by step 1.1. On $0<t<1$, drop $e^{-m^2t}\le1$ and substitute $u=r^2/(4t)$ by [F6] to bound the remaining integral by $\int_{r^2/4}^\infty e^{-u}du/u\le\log(4/r^2)+\int_1^\infty e^{-u}du/u$; the last tail is finite because $1/u\le1$ and step 1.1 gives $\int_1^\infty e^{-u}du<\infty$. This gives $|G_m(z)|\le K_m(1+|\log r|)$. For $r\ge1$, substitute $t=(r/(2m))e^v$ in [F6]; then $m^2t+r^2/(4t)=mr\cosh v$ and $dt/t=dv$. Define $\cosh v=(\exp(v)+\exp(-v))/2$. The exponential power series gives $\cosh v=\sum_{j\ge0}v^{2j}/(2j)!\ge1+v^2/2$. [F5] and a further scaling substitution from [F6] give $G_m(z)\le (4\pi)^{-1}e^{-mr}\int_{\mathbb R}e^{-mr v^2/2}dv\le K_m e^{-mr}/\sqrt{mr}$. Together with the almost-everywhere density from step 1.1, this proves that $G_m$ is a locally integrable representative of the covariance distribution. [F5, F6, F7, step 1.1, algebra]

3.1 For every finite $p\ge1$ and $0<s\le1$, the same annuli scaled to $s$ show $\int_{|z|\le s}(1+|\log|z||)^p d^2z\le K_p s^2(1+|\log s|)^p$: on $s2^{-j-1}<|z|\le s2^{-j}$ the area is at most $\pi s^22^{-2j}$ and the logarithmic factor is at most $(1+|\log s|+(j+1)\log2)^p$. Put $A=1+|\log s|\ge1$; then this factor is at most $A^p(1+(j+1)\log2)^p$. The ratio of successive terms $4^{-j}(1+(j+1)\log2)^p$ tends to $1/4$, so after an index depending only on $p$ it is at most $1/2$; the remaining series is bounded by its finite initial sum plus a geometric tail. This proves the bound with $K_p$ independent of $s$, hence $G_m^p\in L^1_{\mathrm{loc}}$. The integral formula is continuous for $z\ne0$: for any sequence $z_k\to z\ne0$, choose $c>0$ so $|z_k|^2/4\ge c$ for all sufficiently large $k$. On $0<t\le1$, substitution $u=c/t$ by [F6] gives $\int_0^1t^{-1}e^{-c/t}dt=\int_c^\infty u^{-1}e^{-u}du<\infty$; the finite interval up to $1$ is bounded and the tail is at most $\int_1^\infty e^{-u}du$, finite by step 1.1. On $t\ge1$, $t^{-1}e^{-m^2t}\le e^{-m^2t}$, integrable by step 1.1. Thus [F4] applies and gives sequential continuity. [F4, F6, step 1.1, step 2.1, algebra]

4.1 Let $R_\rho>0$ satisfy $\operatorname{supp}\rho\subseteq B(0,R_\rho)$. For $f_{\epsilon,x}(u)=\rho_\epsilon(x-u)$ and $f_{\delta,y}(v)=\rho_\delta(y-v)$, the Gaussian covariance [F1] and the kernel representation in steps 1.1–2.1 give $\mathbb E[\Phi_\epsilon(x)\Phi_\delta(y)]=\int\!\!\int f_{\epsilon,x}(u)f_{\delta,y}(v)G_m(u-v)d^2u\,d^2v$. This integral is absolute because the tests are bounded and compactly supported and $G_m\in L^1_{\mathrm{loc}}$. Put $z=x-y$, $a=x-u$, and $b=y-v$; [F15] preserves Lebesgue measure and yields $\int\!\!\int\rho_\epsilon(a)\rho_\delta(b)G_m(z-a+b)d^2a\,d^2b$. With $w=a-b$, Fubini [F3] gives this as $\int G_m(z-w)\kappa_{\epsilon,\delta}(w)d^2w=C_{\epsilon,\delta}(z)$. The nonnegative correlation kernel $\kappa_{\epsilon,\delta}$ has integral one, support in a disk of radius $2R_\rho q$ for $q=\max(\epsilon,\delta)$, and $\|\kappa_{\epsilon,\delta}\|_\infty\le\|\rho\|_\infty q^{-2}$. Its support shrinks to zero, so continuity of $G_m$ away from zero gives $C_{\epsilon,\delta}(z)\to G_m(z)$ for each $z\ne0$. To get the uniform bound, fix bounded $|z|\le R$. If $|z|$ exceeds twice the support radius, then $|z-w|\ge|z|/2$ throughout the convolution and step 2.1 bounds the integrand by $K_{m,R}(1+|\log|z||)$. Otherwise $|z|\le4R_\rho q$ and $|z-w|\le6R_\rho q$; the scaled dyadic-annulus estimate in step 3.1 gives $\int_{|u|\le6R_\rho q}|G_m(u)|d^2u\le K_mq^2(1+|\log q|)$. Multiplying by $\|\kappa\|_\infty$ bounds the convolution by $K_m(1+|\log q|)\le K_{m,R}(1+|\log|z||)$ because $q\ge|z|/(4R_\rho)$. Choose $\epsilon_{m,R}$ small enough that $6R_\rho q\le1$. This proves the uniform estimate for all $0<\epsilon,\delta\le\epsilon_{m,R}$. [F1, F3, F4, F15, step 1.1, step 2.1, step 3.1, given, algebra] ∎
