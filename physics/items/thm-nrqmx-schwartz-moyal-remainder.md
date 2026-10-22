---
id: thm-nrqmx-schwartz-moyal-remainder
kind: theorem
domain: mathematics
library: mathematics
title: Weyl composition with a controlled Schwartz remainder
status: draft
origin: pipeline
dependency_level: 3
deps:
  - def-nrqmx-weyl-symbol-wigner
  - lem-nrqmx-weyl-hilbert-schmidt-bound
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
  - thm-fourier-inversion-on-schwartz-space
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - cor-c-one-change-of-variables-for-l-one-functions
  - lem-complex-integration-by-parts-on-intervals-and-decaying-lines
  - thm-ftc-second-part
  - lem-schwartz-space-is-dense-in-l-two
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-countable-choice
dependency_roles:
  def-nrqmx-weyl-symbol-wigner: mathematical-premise
  lem-nrqmx-weyl-hilbert-schmidt-bound: mathematical-premise
  thm-fourier-transform-maps-schwartz-space-continuously-to-itself: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  lem-complex-integration-by-parts-on-intervals-and-decaying-lines: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  lem-schwartz-space-is-dense-in-l-two: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Stéphane Nonnenmacher, Introduction to Semiclassical Analysis, lecture notes (2019)
      url: https://www.imo.universite-paris-saclay.fr/~stephane.nonnenmacher/enseign/Cours-Semiclassical-Analysis2019-lecture1-8.pdf
      locator: §4.1.2–4.2, Theorems 4.2 and 4.7, printed pp. 33–37; source uses the opposite Poisson-bracket orientation
    - title: Lawrence C. Evans and Maciej Zworski, Lectures on Semiclassical Analysis
      url: https://math.mit.edu/~vwg/semiclassicalEvansZworski.pdf
      locator: Chapter 4, §§4.1–4.3, Weyl composition and semiclassical expansion, printed pp. 54–67
    - title: Gianfausto Dell’Antonio, Lectures on the Mathematics of Quantum Mechanics, Volume II (2016)
      url: https://people.sissa.it/~gianfa/sito-web/%20Dell%27Antonio%20%20Mathematics%20of%20Quantum%20Mechanics%20II%20.pdf
      locator: Lecture 2, §§2.2, 2.5–2.6, printed pp. 41–54
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Countable Choice. Let $d\geq1$, $0<\epsilon\leq1$, and $a,b\in\mathcal S(\mathbb R^{2d})$. Use the Poisson bracket

$$ \{a,b\}(x,\xi):=\nabla_xa(x,\xi)\cdot\nabla_\xi b(x,\xi)-\nabla_\xi a(x,\xi)\cdot\nabla_xb(x,\xi). $$

There is $r_\epsilon\in\mathcal S(\mathbb R^{2d})$ such that

$$ \operatorname{Op}^W_\epsilon(a)\operatorname{Op}^W_\epsilon(b) =\operatorname{Op}^W_\epsilon\!\left(ab+\frac{i\epsilon}{2}\{a,b\}\right) +\epsilon^2\operatorname{Op}^W_\epsilon(r_\epsilon). $$

There is an integer $M_d=12d+16$ and a constant $C_d$, independent of $\epsilon$, such that

$$ \|\operatorname{Op}^W_\epsilon(r_\epsilon)\|_{L^2\to L^2} \leq C_d\,p_{M_d}(a)p_{M_d}(b),\qquad p_M(f):=\max_{|\alpha|\leq M}\sup_z\langle z\rangle^M|\partial^\alpha f(z)|,\quad \langle z\rangle:=(1+|z|^2)^{1/2}. $$

## Statement references

[[def-nrqmx-weyl-symbol-wigner]]

## Facts & Assumptions

**Given:** Countable Choice, $d\geq1$, $0<\epsilon\leq1$, and $a,b\in\mathcal S(\mathbb R^{2d})$.

[A1] Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] Weyl quantization uses the kernel and Fourier conventions of [[def-nrqmx-weyl-symbol-wigner]].

[F2] The square-integrable kernel estimate extends each Schwartz Weyl operator boundedly to $L^2$ ([[lem-nrqmx-weyl-hilbert-schmidt-bound]]).

[F3] The Fourier transform maps Schwartz space continuously to itself ([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]).

[F4] Fourier inversion on Schwartz space is pointwise and absolutely convergent ([[thm-fourier-inversion-on-schwartz-space]]).

[F5] Fubini's theorem applies to absolutely integrable products on Euclidean product spaces ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F6] Translations $x\mapsto x+\epsilon p$ preserve Lebesgue integrals by the $C^1$ change-of-variables theorem ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F7] Schwartz functions are dense in $L^2(\mathbb R^d)$ ([[lem-schwartz-space-is-dense-in-l-two]]).

[F8] A $C^1$ diffeomorphism $T:U\to V$ between open Euclidean sets satisfies $\int_V f=\int_U(f\circ T)|\det DT|$ for complex $f\in L^1(V)$. The frequency rescalings, translations, and affine kernel changes below have these hypotheses; their integrands are Schwartz or absolutely integrable products ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F9] Complex integration by parts holds on a line when both derivative products are integrable and the endpoint products vanish. Its coordinatewise use below is justified by Fubini; Schwartz Fourier factors and their derivatives make the products integrable and the endpoint terms zero ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[F10] If a real-valued function is differentiable on a closed interval and its derivative is integrable, then the integral of the derivative is the endpoint increment. Apply this separately to real and imaginary parts for a complex curve ([[thm-ftc-second-part]]).

[F11] Complex $L^2(\mathbb R^{2d})$ with $\langle f,g\rangle=\int f\overline g$ is a Hilbert space ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F12] In any complex inner-product space, $|\langle f,g\rangle|\le\|f\|\|g\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F13] Tonelli's theorem permits iterated integration of nonnegative product-measurable functions on sigma-finite measure spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

## Proof
**Given:** The data of the Statement and [A1]–[F13]. For $z=(x,\xi)$ and $\lambda=(q,p)$, write $\lambda\cdot z=q\cdot x+p\cdot\xi$ and $\sigma(\lambda,\mu)=q\cdot p'-p\cdot q'$ for $\mu=(q',p')$.

1.1 Let $\widehat a(\lambda)=\int e^{-i\lambda\cdot z}a(z)\,dz$, and similarly for $b$. These are rescaled versions of the negative-sign $2\pi$ Fourier transform; [F3], [F4], and the linear frequency scaling in [F8] imply they are Schwartz, integrable, and have inverse $a(z)=(2\pi)^{-2d}\int e^{i\lambda\cdot z}\widehat a(\lambda)\,d\lambda$. For $\lambda=(q,p)$, define the unitary map $$ (T^\epsilon_{q,p}u)(x)=e^{iq\cdot(x+\epsilon p/2)}u(x+\epsilon p). $$ The phase has modulus one and [F6] preserves the norm under translation, so $T^\epsilon_{q,p}$ is unitary, with inverse given by reversing the translation and phase. Fourier inversion [F4], this formula, Fubini [F5], and [F8] applied to the complex $L^1$ integrands under $x\mapsto y=x+\epsilon p$ give the scalar form representation $$ \mathcal B_a(u,v):=(2\pi)^{-2d}\int\widehat a(\lambda)\langle T^\epsilon_\lambda u,v\rangle\,d\lambda . $$ For $u,v\in L^2$, this scalar integral is absolutely convergent and bounded by $(2\pi)^{-2d}\|\widehat a\|_1\|u\|_2\|v\|_2$. For Schwartz $u,v$, use $T^\epsilon_{q,p}u(x)=e^{iq\cdot(x+\epsilon p/2)}u(x+\epsilon p)$, change variables by [F8] to $y=x+\epsilon p$, and then apply Fourier inversion in $q$: $\int e^{iq\cdot(x+y)/2}\widehat a(q,(y-x)/\epsilon)\,dq=(2\pi)^d\int e^{-i(y-x)\cdot\xi/\epsilon}a((x+y)/2,\xi)\,d\xi$. This gives $\mathcal B_a(u,v)=\langle\operatorname{Op}^W_\epsilon(a)u,v\rangle$. Both forms are bounded on $L^2\times L^2$, so [F7] extends their equality from the dense Schwartz subspace to all $L^2$ pairs; [F2] supplies the bounded Weyl extension. [given, A1, F1, F2, F3, F4, F5, F6, F7, F8, construct]

2.1 Direct substitution in $T^\epsilon_{q,p}T^\epsilon_{q',p'}u$ gives the Weyl relation $$ T^\epsilon_\lambda T^\epsilon_\mu=e^{-i\epsilon\sigma(\lambda,\mu)/2}T^\epsilon_{\lambda+\mu}. $$ For $u,v\in L^2$, first apply [step 1.1] with $w=\operatorname{Op}^W_\epsilon(b)u$; then $$ \langle\operatorname{Op}^W_\epsilon(a)\operatorname{Op}^W_\epsilon(b)u,v\rangle =(2\pi)^{-2d}\int\widehat a(\lambda)\langle\operatorname{Op}^W_\epsilon(b)u,T_\lambda^{\epsilon *}v\rangle\,d\lambda. $$ Apply [step 1.1] for $b$ to each pair $(u,T_\lambda^{\epsilon *}v)$. Since $T_\lambda^\epsilon$ is unitary, $\langle T_\mu^\epsilon u,T_\lambda^{\epsilon *}v\rangle=\langle T_\lambda^\epsilon T_\mu^\epsilon u,v\rangle$; the double integral is absolutely convergent with majorant $(2\pi)^{-4d}\|\widehat a\|_1\|\widehat b\|_1\|u\|_2\|v\|_2$, so Fubini and the Weyl relation give $$ c_\epsilon(z)=(2\pi)^{-4d}\iint\widehat a(\lambda)\widehat b(\mu)e^{i(\lambda+\mu)\cdot z}e^{-i\epsilon\sigma(\lambda,\mu)/2}\,d\lambda\,d\mu . $$ The phase-space Fourier coefficient of $\{a,b\}$ is $-\sigma(\lambda,\mu)\widehat a(\lambda)\widehat b(\mu)$; this follows by differentiating the Fourier modes in the explicitly fixed Poisson convention. [step 1.1, F1, F3, algebra]

3.1 Fix $\lambda,\mu$ and write $f(s)=e^{-is\epsilon\sigma(\lambda,\mu)/2}$, a $C^2$ complex function on $[0,1]$. Applying [F10] to the real and imaginary parts twice gives $f(1)-f(0)=\int_0^1f'(r)\,dr=f'(0)+\int_0^1\int_0^r f''(s)\,ds\,dr=f'(0)+\int_0^1(1-s)f''(s)\,ds$; the last equality is Fubini [F5] on the continuous integrand over the triangle. Since $f'(0)=-i\epsilon\sigma/2$ and $f''(s)=-\epsilon^2\sigma^2e^{-is\epsilon\sigma/2}/4$, this derives $$ e^{-i\epsilon\sigma/2}=1-\frac{i\epsilon\sigma}{2} -\frac{\epsilon^2\sigma^2}{4}\int_0^1(1-s)e^{-is\epsilon\sigma/2}\,ds. $$ Set $$ R_\epsilon(\lambda,\mu):=\frac{\sigma(\lambda,\mu)^2}{4} \int_0^1(1-s)e^{-is\epsilon\sigma(\lambda,\mu)/2}\,ds . $$ Consequently the symbol remainder is $$ r_\epsilon(z)=-(2\pi)^{-4d}\iint\widehat a(\lambda)\widehat b(\mu)e^{i(\lambda+\mu)\cdot z}R_\epsilon(\lambda,\mu)\,d\lambda\,d\mu. $$ For multi-indices $\alpha,\beta$ with $|\alpha|,|\beta|\le K:=4d+4$, differentiate $|\alpha|$ times in $z$ and integrate by parts $|\beta|$ times in $\lambda$ using [F9] coordinatewise to estimate $z^\beta\partial_z^\alpha r_\epsilon(z)$. Each integration is justified because the Fourier factors and all their derivatives have rapid decay and every differentiated factor has at most polynomial growth; thus the derivative products are integrable and boundary products vanish. Each $\lambda$-derivative of the remainder factor is bounded by $$ |\partial_\lambda^\gamma R_\epsilon(\lambda,\mu)|\le C_\gamma\langle\lambda\rangle^2\langle\mu\rangle^{|\gamma|+2} \quad (|\gamma|\le K), $$ because $\sigma$ is bilinear, $\partial_\lambda\sigma$ is linear in $\mu$, and $0<\epsilon\le1$. Derivatives of $e^{i(\lambda+\mu)\cdot z}$ contribute powers of $\lambda+\mu$. Thus the absolute integrand is bounded by a finite sum of $$ |\partial_\lambda^\gamma\widehat a(\lambda)|\,\langle\lambda\rangle^{K+2}\, |\widehat b(\mu)|\,\langle\mu\rangle^{2K+2}. $$ For completeness, in Fourier dimension $n=2d$, if $2k>L+n$, then $$ \int\langle\lambda\rangle^L|\partial^\gamma\widehat f(\lambda)|\,d\lambda \le C\sum_{|\delta|\le2k}\|\partial^\delta(z^\gamma f)\|_{L^1} \le C p_M(f) $$ whenever $M\ge2k$ and $M>|\gamma|+n$: apply $(1-\Delta_z)^k$ to $z^\gamma f$, use its Fourier multiplier $\langle\lambda\rangle^{2k}$, and integrate the resulting $\langle z\rangle^{-M+|\gamma|}$ bound. Taking $K=4d+4$, $L_a=K+2$, $L_b=2K+2$, choose $k_a=3d+4$ for $a$ and $k_b=5d+6$ for $b$. Then $2k_a>L_a+2d$, $2k_b>L_b+2d$, and $M=12d+16$ exceeds both $2k_b$ and $K+2d$, so the weighted estimates hold for all indicated derivatives. This proves $p_K(r_\epsilon)\le C_dp_M(a)p_M(b)$, uniformly in $\epsilon$. The same argument with any fixed larger $K$ proves every Schwartz seminorm of $r_\epsilon$ is finite, so $r_\epsilon\in\mathcal S$. Hence $c_\epsilon=ab+\frac{i\epsilon}{2}\{a,b\}+\epsilon^2r_\epsilon$ is Schwartz, and the weak Fourier representation from step 1.1 identifies the product in step 2.1 with $\operatorname{Op}^W_\epsilon(c_\epsilon)$. [step 1.1, step 2.1, F3, F4, F5, F8, F9, F10, algebra]

4.1 The kernel of $\operatorname{Op}^W_\epsilon(r_\epsilon)$, in $q=(x+y)/2$, $s=x-y$, is $$ K_\epsilon(q,s)=(2\pi\epsilon)^{-d}\int e^{is\cdot\xi/\epsilon}r_\epsilon(q,\xi)\,d\xi. $$ The affine map $(x,y)\mapsto(q,s)$ has absolute determinant $1$, and the kernel integrands are Schwartz and hence complex $L^1$, so [F8] justifies this kernel-coordinate substitution. Since $K=4d+4\ge2d+2$, $\langle(q,\xi)\rangle^K\ge\langle q\rangle^{d+1}\langle\xi\rangle^{d+1}$ and $\int_{\mathbb R^d}\langle\xi\rangle^{-d-1}d\xi<\infty$ imply $\int|\partial_\xi^\gamma r_\epsilon(q,\xi)|\,d\xi\le C_dp_K(r_\epsilon)\langle q\rangle^{-d-1}$ for $|\gamma|\le2d+2$. Integrating by parts with $(1-\Delta_\xi)^{d+1}$ is justified coordinatewise by [F9], because $r_\epsilon$ is Schwartz; using this bound gives $$ |K_\epsilon(q,s)|\leq C_dp_{12d+16}(a)p_{12d+16}(b)\epsilon^{-d} \langle q\rangle^{-d-1}(1+|s|/\epsilon)^{-2d-2}. $$ For fixed $x$, $dy=2^d\,dq$ and $s=2(x-q)$; [F8] applies to these affine changes in the absolutely integrable row integrals, and integrating this bound in $y$ is at most a constant times $\epsilon^{-d}\int(1+|x-q|/\epsilon)^{-2d-2}\,dq\leq C_d$; the same bound holds with $x,y$ interchanged. Let $R$ and $C$ be the resulting uniform row and column $L^1$ bounds for the actual kernel $K_\epsilon(x,y)=K_\epsilon((x+y)/2,x-y)$. For $u\in L^2(\mathbb R^d)$, Tonelli [F13] and the column bound make $\int|K_\epsilon(x,y)||u(y)|^2dy$ finite for almost every $x$. At such $x$, factor the integrand as $\sqrt{|K_\epsilon(x,y)|}\,[(K_\epsilon/|K_\epsilon|)(x,y)\sqrt{|K_\epsilon(x,y)|}u(y)]$, with quotient $0$ where the kernel vanishes. Cauchy–Schwarz [F12] in $L^2(dy)$ gives $$ |\int K_\epsilon(x,y)u(y)\,dy|^2\le R\int|K_\epsilon(x,y)||u(y)|^2\,dy. $$ Tonelli [F13] and the column bound then give $\|\int K_\epsilon(\cdot,y)u(y)\,dy\|_2^2\le RC\|u\|_2^2$. This proves the integral-kernel Schur estimate with norm at most $\sqrt{RC}$ and hence $\|\operatorname{Op}^W_\epsilon(r_\epsilon)\|\le C_dp_{12d+16}(a)p_{12d+16}(b)$. Combining steps 2.1–4.1 proves the asserted Weyl composition formula with the plus sign fixed by $[Q_j,P_k]=i\epsilon\delta_{jk}$. [step 3.1, F1, F2, F8, F9, F11, F12, F13, algebra] ∎

