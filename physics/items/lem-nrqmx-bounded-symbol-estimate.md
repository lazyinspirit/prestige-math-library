---
id: lem-nrqmx-bounded-symbol-estimate
kind: lemma
domain: mathematics
library: mathematics
title: Order-zero Weyl L² boundedness
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-nrqmx-weyl-symbol-wigner
  - def-schwartz-space-and-its-seminorms
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
  - thm-fourier-inversion-on-schwartz-space
  - lem-nrqmx-scaled-plancherel
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - cor-c-one-change-of-variables-for-l-one-functions
  - lem-complex-integration-by-parts-on-intervals-and-decaying-lines
  - lem-schwartz-space-is-dense-in-l-two
  - def-countable-choice
  - thm-riesz-representation-for-hilbert-space
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-cauchy-schwarz-in-an-inner-product-space
dependency_roles:
  def-nrqmx-weyl-symbol-wigner: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  thm-fourier-transform-maps-schwartz-space-continuously-to-itself: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  lem-nrqmx-scaled-plancherel: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  lem-complex-integration-by-parts-on-intervals-and-decaying-lines: mathematical-premise
  lem-schwartz-space-is-dense-in-l-two: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Stéphane Nonnenmacher, Introduction to Semiclassical Analysis, lecture notes (2019)
      url: https://www.imo.universite-paris-saclay.fr/~stephane.nonnenmacher/enseign/Cours-Semiclassical-Analysis2019-lecture1-8.pdf
      locator: Theorem 5.26 and its phase-space partition/Cotlar–Stein proof, printed pp. 53–55
    - title: Lawrence C. Evans and Maciej Zworski, Lectures on Semiclassical Analysis
      url: https://math.mit.edu/~vwg/semiclassicalEvansZworski.pdf
      locator: Theorems 4.15–4.16, phase-space cube partition and almost orthogonality, printed pp. 64–67
    - title: Gianfausto Dell’Antonio, Lectures on the Mathematics of Quantum Mechanics, Volume II (2016)
      url: https://people.sissa.it/~gianfa/sito-web/%20Dell%27Antonio%20%20Mathematics%20of%20Quantum%20Mechanics%20II%20.pdf
      locator: Theorem 2.2 and the proof outline using a phase-space cube partition, printed pp. 43–47
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Countable Choice. Let $d\geq1$, $0<\epsilon\leq1$, and set $N_d=4d+4$. For a smooth $a:\mathbb R^{2d}\to\mathbb C$ with $\partial^\alpha a$ bounded for every $|\alpha|\leq N_d$, define

$$ \mathcal W_\epsilon[u,v](x,\xi):=(2\pi\epsilon)^{-d}\int_{\mathbb R^d}e^{-iy\cdot\xi/\epsilon}u(x+y/2)\overline{v(x-y/2)}\,dy $$

for $u,v\in\mathcal S(\mathbb R^d)$, and define the Weyl operator initially as the form

$$ B_{\epsilon,a}(u,v):=\int_{\mathbb R^{2d}}a(x,\xi)\mathcal W_\epsilon[u,v](x,\xi)\,dx\,d\xi . $$

There is a unique bounded operator $\operatorname{Op}^W_\epsilon(a)$ on $L^2(\mathbb R^d)$ representing this form, and

$$ \|\operatorname{Op}^W_\epsilon(a)\|_{L^2\to L^2}\leq C_d\sum_{|\alpha|\leq N_d}\|\partial^\alpha a\|_\infty , $$

where $C_d$ depends only on $d$. For $a\in\mathcal S(\mathbb R^{2d})$, this extension agrees with the kernel definition in [def-nrqmx-weyl-symbol-wigner].

## Statement references

[[def-nrqmx-weyl-symbol-wigner]]

## Facts & Assumptions

**Given:** Countable Choice, $d\geq1$, $0<\epsilon\leq1$, and the stated bounded-derivative symbol $a$.

[A1] Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] Schwartz space and its finite-seminorm topology are defined in [[def-schwartz-space-and-its-seminorms]].

[F2] The scaled Fourier transform is unitary on $L^2$ ([[lem-nrqmx-scaled-plancherel]]).

[F3] The normalized Gaussian Fourier integral is $\int e^{-|x|^2/(2\epsilon)}e^{-ip\cdot x/\epsilon}\,dx=(2\pi\epsilon)^{d/2}e^{-|p|^2/(2\epsilon)}$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F4] Tonelli's theorem applies to nonnegative product integrals ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F5] Absolutely integrable product integrals may be exchanged ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F6] $L^2(\mathbb R^d;\mathbb C)$ with the first-variable-linear integral pairing is a complex Hilbert space ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F7] Every bounded linear functional on a Hilbert space has a unique representing vector ([[thm-riesz-representation-for-hilbert-space]]).

[F8] Partial Fourier transformation of a Schwartz function in the $y$-variables is Schwartz jointly in the remaining $x$- and frequency variables; this follows by writing it as a full Fourier transform followed by inverse Fourier transform in $x$ ([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]], [[thm-fourier-inversion-on-schwartz-space]]).

[F9] A $C^1$ diffeomorphism between open Euclidean sets changes integrals of complex $L^1$ functions by its absolute Jacobian. Translations and positive scalings of the Gaussian integrands below are such maps; those integrands, including their polynomial multiples, are absolutely integrable ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F10] For $C^1$ functions $f,g$ on a line, integration by parts applies when $f'g$ and $fg'$ are integrable and $fg$ vanishes at both ends. Applied one coordinate at a time, with Fubini, it applies to the Gaussian packets and their derivatives here: the Gaussian factors and all their derivatives decay rapidly, while the symbol derivatives are bounded ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]).

[F11] Schwartz classes are dense in $L^2(\mathbb R^d;\mathbb C)$ under Countable Choice ([[lem-schwartz-space-is-dense-in-l-two]]).

[F12] The $L^2$ inner product satisfies $|\langle f,g\rangle|\le\|f\|_2\|g\|_2$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof
**Given:** The data of the Statement and [A1]–[F12]. Write $Z=(q,p)\in\mathbb R^{2d}$ and $dZ=dq\,dp$.

1.1 For $Z=(q,p)$, define the normalized Gaussian packet $$ g_Z^\epsilon(x):=(\pi\epsilon)^{-d/4}e^{-|x-q|^2/(2\epsilon)}e^{ip\cdot(x-q/2)/\epsilon}. $$ Its norm is $1$ by [F3] at zero after applying [F9] to the translation and positive scaling of the nonnegative Gaussian. For $u\in\mathcal S$, put $V_\epsilon u(Z)=(2\pi\epsilon)^{-d/2}\langle u,g_Z^\epsilon\rangle$. The Fourier transform of the shifted Gaussian gives $$ \langle u,g_{q,p}^\epsilon\rangle=(\pi\epsilon)^{-d/4}e^{ip\cdot q/(2\epsilon)}(2\pi\epsilon)^{d/2}\mathcal F_\epsilon\!\left(u(\,\cdot\,)e^{-|\cdot-q|^2/(2\epsilon)}\right)(p). $$ Plancherel [F2], followed by Tonelli [F4] and the Gaussian integral from [F3] after [F9], gives $$ \|V_\epsilon u\|_2^2=(2\pi\epsilon)^{-d}\int|\langle u,g_{q,p}^\epsilon\rangle|^2\,dq\,dp=(\pi\epsilon)^{-d/2}\int\!\!\int |u(x)|^2e^{-|x-q|^2/\epsilon}\,dx\,dq=\|u\|_2^2. $$ The middle equality follows from Plancherel [F2] for each fixed $q$; the final equality uses the Gaussian integral [F3] in $q$, with Tonelli [F4]. The same identity holds for all $u\in L^2$ by [F2] and Tonelli [F4]. Polarization gives $\langle u,v\rangle=(2\pi\epsilon)^{-d}\int\langle u,g_Z^\epsilon\rangle\overline{\langle v,g_Z^\epsilon\rangle}\,dZ$, hence the weak resolution $$ u=(2\pi\epsilon)^{-d}\int_{\mathbb R^{2d}}\langle u,g_Z^\epsilon\rangle g_Z^\epsilon\,dZ . $$ [given, A1, F2, F3, F4, F9, algebra]

2.1 For $u\in\mathcal S$, the joint function $F(x,q):=u(x)e^{-|x-q|^2/(2\epsilon)}$ is Schwartz in $(x,q)$: each derivative is a finite sum of derivatives of $u$, Gaussian factors, and polynomials in $x-q$, and the inequality $\langle q\rangle^m\le C_m\langle x\rangle^m\langle x-q\rangle^m$ transfers every $q$-weight to a Schwartz factor and a Gaussian moment. Its partial Fourier transform in $x$ is Schwartz in $(p,q)$ by the same full Fourier/inverse Fourier argument as [F8]. The additional phase $e^{ip\cdot q/(2\epsilon)}$ in $\langle u,g_{q,p}^\epsilon\rangle$ has derivatives that are polynomial factors, so the packet coefficient $V_\epsilon u$ remains Schwartz in $Z=(q,p)$. The Schwartz seminorms of $Z\mapsto g_Z^\epsilon$ grow at most polynomially in $Z$, so the resolution integral in step 1.1 converges in every Schwartz seminorm. The product $u(x+y/2)\overline{v(x-y/2)}$ is Schwartz in $(x,y)$; its partial Fourier transform is Schwartz by [F8], so $\mathcal W_\epsilon[u,v]\in\mathcal S$ and $|B_{\epsilon,a}(u,v)|\le\|a\|_\infty\|\mathcal W_\epsilon[u,v]\|_1$ proves continuity of the form in Schwartz seminorms. If $a\in\mathcal S$, its Weyl kernel is Schwartz; the kernel pairing is absolutely convergent, and the change $q=(x+y)/2,\ r=x-y$, followed by $r\mapsto-y$, identifies it with $B_{\epsilon,a}(u,v)$. Thus the bounded-symbol form extends the kernel definition on Schwartz symbols. Applying the continuous form to the two Schwartz-convergent resolutions is valid; Fubini [F5] for the resulting absolutely integrable products gives $$ B_{\epsilon,a}(u,v)=(2\pi\epsilon)^{-d}\iint B_{\epsilon,a}(g_{Z'}^\epsilon,g_Z^\epsilon)V_\epsilon u(Z')\overline{V_\epsilon v(Z)}\,dZ'\,dZ . $$ [step 1.1, F1, F5, F8, algebra]

2.2 Let $Z=(q,p)$, $Z'=(q',p')$, $m=(Z+Z')/2$, and $\delta=Z-Z'$. Define $\sigma((x,\xi),(x',\xi'))=x\cdot\xi'-\xi\cdot x'$. Substitution of the packets into $\mathcal W_\epsilon[g_{Z'}^\epsilon,g_Z^\epsilon]$, completing the square in $y$, and applying [F3] gives $$ \mathcal W_\epsilon[g_{Z'}^\epsilon,g_Z^\epsilon](z)=(\pi\epsilon)^{-d}e^{-|w|^2/\epsilon}e^{-i\sigma(w,\delta)/\epsilon+i\theta(Z,Z')},\qquad w=z-m, $$ with $|e^{i\theta(Z,Z')}|=1$. If $|\delta|\leq\sqrt\epsilon$, its $L^1$ norm is $1$, hence $|B_{\epsilon,a}(g_{Z'},g_Z)|\leq\|a\|_\infty$. If $|\delta|>\sqrt\epsilon$, then $$ L_\delta:=\frac{\epsilon}{i|\delta|^2}\nabla_w\phi_\delta\cdot\nabla_w,\qquad \phi_\delta(w):=-\sigma(w,\delta) $$ satisfies $L_\delta e^{i\phi_\delta(w)/\epsilon}=e^{i\phi_\delta(w)/\epsilon}$, since $|\nabla_w\phi_\delta|=|\delta|$. Integrating by parts $N_d$ times against the Gaussian is justified coordinatewise by [F10] and Fubini [F5]: derivatives of the Gaussian are integrable, derivatives of $a$ are bounded, and the Gaussian forces the endpoint products to vanish. Translation $w=z-m$ and scaling $w=\sqrt\epsilon\,s$ in these absolutely integrable terms are justified by [F9]. Each derivative on the Gaussian contributes a factor bounded by $\sqrt\epsilon/|\delta|$; a derivative on $a$ contributes $\epsilon/|\delta|\leq\sqrt\epsilon/|\delta|$, since $|\delta|>\sqrt\epsilon$ and $\epsilon\leq1$. Thus $$ |B_{\epsilon,a}(g_{Z'},g_Z)|\leq C_d\left(\sum_{|\alpha|\leq N_d}\epsilon^{|\alpha|/2}\|\partial^\alpha a\|_\infty\right)(1+|\delta|/\sqrt\epsilon)^{-N_d}\leq C_dD(a)(1+|Z-Z'|/\sqrt\epsilon)^{-N_d}, $$ where $D(a)=\sum_{|\alpha|\leq N_d}\|\partial^\alpha a\|_\infty$. Increasing $C_d$ makes this bound valid also when $|\delta|\leq\sqrt\epsilon$. [step 1.1, given, A1, F3, F5, F9, F10, algebra]

3.1 Partition $\mathbb R^{2d}$ into cubes of side $\sqrt\epsilon$. For each fixed $Z$, the sum of $(1+|Z-Z'|/\sqrt\epsilon)^{-N_d}$ over these cubes, each weighted by its volume $\epsilon^d$, is at most $C_d\epsilon^d\sum_{k\in\mathbb Z^{2d}}(1+|k|)^{-N_d}\leq C_d'\epsilon^d$, since $N_d=4d+4>2d$. The same holds with $Z,Z'$ interchanged. Thus the integral kernel $$ K_\epsilon(Z,Z'):=(2\pi\epsilon)^{-d}B_{\epsilon,a}(g_{Z'}^\epsilon,g_Z^\epsilon) $$ has uniformly bounded row and column $L^1$ norms, each at most $C_dD(a)$. For $f\in L^2(\mathbb R^{2d})$, Tonelli [F4] and the column bound show that $\int|K_\epsilon(Z,Z')||f(Z')|^2dZ'$ is finite for almost every $Z$. For each such $Z$, write $$ \int K_\epsilon(Z,Z')f(Z')\,dZ'=\int\sqrt{|K_\epsilon(Z,Z')|}\,\frac{K_\epsilon(Z,Z')}{|K_\epsilon(Z,Z')|}\sqrt{|K_\epsilon(Z,Z')|}f(Z')\,dZ', $$ using quotient $0$ where $K_\epsilon=0$. Cauchy–Schwarz [F12] in $L^2(dZ')$ yields $$ |\int K_\epsilon(Z,Z')f(Z')\,dZ'|^2\leq(\int|K_\epsilon(Z,Z')|\,dZ')\int|K_\epsilon(Z,Z')||f(Z')|^2\,dZ'. $$ Integrating in $Z$ and using Tonelli [F4] and the column bound yields $\|K_\epsilon f\|_2\leq C_dD(a)\|f\|_2$. Applying this estimate to step 2.1 and using the isometry in step 1.1 proves $$ |B_{\epsilon,a}(u,v)|\leq C_dD(a)\|V_\epsilon u\|_2\|V_\epsilon v\|_2=C_dD(a)\|u\|_2\|v\|_2 . $$ [step 1.1, step 2.1, step 2.2, A1, F4, F12, algebra]

4.1 For fixed $u\in\mathcal S$, the bounded form in step 3.1 extends continuously in $v$ to $L^2$, which is a Hilbert space by [F6], and $v\mapsto\overline{B_{\epsilon,a}(u,v)}$ is a bounded linear functional there. Riesz representation [F7] gives a unique $y\in L^2$ with $\overline{B_{\epsilon,a}(u,v)}=\langle v,y\rangle$ for every $v\in L^2$; conjugate symmetry gives $B_{\epsilon,a}(u,v)=\langle y,v\rangle$, so set $A_\epsilon u=y$. Its norm is at most $C_dD(a)\|u\|_2$. Uniqueness makes $u\mapsto A_\epsilon u$ linear on $\mathcal S$, and [F11] makes its extension to all of $L^2$ unique. Hence the operator norm is at most $C_dD(a)$. [given, A1, step 3.1, F6, F7, F11, algebra] ∎

