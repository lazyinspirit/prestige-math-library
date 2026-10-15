---
id: prop-qft-four-dimensional-log-scale-anomaly
kind: proposition
title: Exact four-dimensional Euclidean logarithmic scale anomaly
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dirac-delta-and-its-derivatives
  - def-polar-surface-measure-on-the-unit-sphere
  - def-qft-distribution-scaling-degree
  - def-regular-distribution-from-a-locally-integrable-function
  - def-test-function-topology
  - lem-test-function-cutoffs-and-euclidean-localization
  - prop-qft-local-counterterm-jet-classification
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-gaussian-integral
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-qft-finite-scaling-degree-extension
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dirac-delta-and-its-derivatives: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  def-qft-distribution-scaling-degree: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  def-test-function-topology: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  prop-qft-local-counterterm-jet-classification: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  thm-gaussian-integral: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-qft-finite-scaling-degree-extension: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Brunetti and K. Fredenhagen, Microlocal Analysis and Interacting Quantum Field Theories: Renormalization on Physical Backgrounds, §5.1–§5.2"
      url: "https://arxiv.org/pdf/math-ph/9903028"
    - title: "Klaus Fredenhagen and Katarzyna Rejzner, “Perturbative Algebraic Quantum Field Theory,” in Mathematical Aspects of Quantum Field Theories, ed. Damien Calaque and Thomas Strobl, Springer (2015), Section 7"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73875/1/95.pdf.pdf"
    - title: "K. J. Keller, Dimensional Regularization in Position Space and a Forest Formula for Regularized Epstein-Glaser Renormalization, dissertation, §I.1"
      url: "https://arxiv.org/pdf/1006.2148"
dependency_level: 4
---

## Statement

Assume the Axiom of Choice. On $\mathbb R^4\setminus\{0\}$ let $u(x)=1/(16\pi^4|x|^4)$, equivalently the square of the displayed Euclidean kernel $C_0(x)=1/(4\pi^2|x|^2)$; interpret $u$ as its regular distribution there. Choose $\chi\in\mathcal D(\mathbb R^4)$ equal to one near $0$. For $\mu>0$ define

$$T_\mu(\varphi):=\int_{\mathbb R^4\setminus\{0\}}\frac{\varphi(x)-\chi(\mu x)\varphi(0)}{16\pi^4|x|^4}\,d^4x.$$

Then $T_\mu$ is a distribution extending $u$, has scaling degree $4$, and for every $\mu,\nu>0$,

$$T_\mu-T_\nu=\frac{1}{8\pi^2}\log(\mu/\nu)\,\delta_0.$$

In particular, no extension of $u$ with scaling degree $4$ is exactly homogeneous, where exact homogeneity means $\rho^4T_\rho=T$ for every $\rho>0$. Coordinates use one fixed Euclidean unit; if units are assigned, $\mu$ and $\nu$ have reciprocal coordinate units, so the logarithm's ratio is dimensionless. This is a Euclidean distribution identity and does not identify a measured coupling or physical beta function.

## Facts & Assumptions

**Given:** The Euclidean space $\mathbb R^4$, the regular distribution induced by $u(x)=1/(16\pi^4|x|^4)$ on the punctured domain, a smooth compact cutoff $\chi=1$ near $0$, and $\mu,\nu>0$. Assume the Axiom of Choice.

[F1] [[def-qft-distribution-scaling-degree]]: $T_\rho(\varphi)=\rho^{-4}T(\varphi(\cdot/\rho))$; $\operatorname{sd}_0(T)$ is determined by the limits $\rho^\omega T_\rho$.

[F2] [[lem-test-function-cutoffs-and-euclidean-localization]]: there is a real smooth compact cutoff equal to one near $0$.

[F3] [[def-regular-distribution-from-a-locally-integrable-function]]: a locally integrable function acts by the bilinear pairing $\varphi\mapsto\int u\varphi$.

[F4] [[thm-locally-integrable-functions-embed-in-distributions]]: under AC$_\omega$, this regular functional is a distribution.

[F5] [[def-countable-choice]]: AC$_\omega$ chooses from every sequence of nonempty sets.

[F6] [[thm-choice-implies-dependent-implies-countable-choice]]: in ZF, AC implies both DC and AC$_\omega$.

[F7] [[def-polar-surface-measure-on-the-unit-sphere]] defines the finite-dimensional angular measure $\sigma_3$; [[thm-polar-coordinates-formula-for-lebesgue-measure]] gives the polar integral formula under AC$_\omega$.

[F8] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative product-measurable functions integrate by iterated integrals on sigma-finite product spaces.

[F9] [[thm-gaussian-integral]]: $\int_{\mathbb R}e^{-s^2}\,ds=\sqrt\pi$.

[F10] [[thm-qft-finite-scaling-degree-extension]]: under AC, the punctured distribution has at least one extension with its finite scaling degree.

[F11] [[prop-qft-local-counterterm-jet-classification]]: same-degree extensions differ by precisely the permitted finite delta jets; at $\delta=n$ the difference is a multiple of $\delta_0$.

[F12] [[def-dirac-delta-and-its-derivatives]]: $\langle\delta_0,\varphi\rangle=\varphi(0)$ and $\langle\partial^\alpha\delta_0,\varphi\rangle=(-1)^{|\alpha|}\partial^\alpha\varphi(0)$.

[F13] [[def-test-function-topology]]: continuity on $\mathcal D(\mathbb R^4)$ is determined by continuity on each fixed-support test space.

[A1] The Axiom of Choice is assumed. It supplies AC$_\omega$ for [F4] and [F7] by [F6], and DC for the scaling-degree extension theorem [F10].

## Proof

**Given:** The hypotheses in the statement.

1.1 The function $u$ is smooth, hence locally integrable, on $U=\mathbb R^4\setminus\{0\}$. By [F3]–[F6] it defines a distribution $t\in\mathcal D'(U)$; direct dilation gives $t_\rho=\rho^{-4}t$, so $\operatorname{sd}_0(t)=4$. [given, F1, F3, F4, F5, F6, A1, algebra]

1.2 Let $\sigma_3$ be the polar surface measure on $S^3$. By [F7]–[F9] and Tonelli, $$\pi^2=\int_{\mathbb R^4}e^{-|x|^2}\,d^4x=\sigma_3(S^3)\int_0^\infty e^{-r^2}r^3\,dr=\frac{\sigma_3(S^3)}2.$$ The last integral is $1/2$ by $s=r^2$ and integration by parts. Therefore $\sigma_3(S^3)=2\pi^2$. [F5, F6, F7, F8, F9, algebra]

2.1 Near $0$, $\chi(\mu x)=1$ and $|\varphi(x)-\varphi(0)|\le |x|\sup_{B}|\nabla\varphi|$ on a compact ball $B$ containing $0$ and the fixed test support. Thus the integrand is bounded by a fixed seminorm times $|x|^{-3}$ there, which is integrable in four dimensions. Away from $0$ its support is contained in the compact union of $\operatorname{supp}\varphi$ and $\mu^{-1}\operatorname{supp}\chi$, and $|x|^{-4}$ is bounded on that support; the remaining pairing is bounded by a fixed zeroth-order seminorm, including the evaluation $|\varphi(0)|$. These bounds hold uniformly on each fixed-support test space, so $T_\mu$ is continuous there and hence a distribution by [F13]. If $\varphi$ is supported away from $0$, then $\varphi(0)=0$, so $T_\mu(\varphi)=t(\varphi)$. [given, F1, F2, F3, F13, step 1.1]

2.2 Subtracting the two definitions gives $$T_\mu(\varphi)-T_\nu(\varphi)=-\frac{\varphi(0)}{16\pi^4}\int_{\mathbb R^4\setminus\{0\}}\frac{\chi(\mu x)-\chi(\nu x)}{|x|^4}\,d^4x.$$ The difference vanishes on a fixed neighborhood of $0$ and outside a fixed compact set, so it is absolutely integrable. Apply [F7] separately to its positive and negative parts; the integral is $\int_{S^3}\int_0^\infty[\chi(\mu r\omega)-\chi(\nu r\omega)]\,dr/r\,d\sigma_3(\omega)$. For $\mu$ in a compact interval $[\mu_0,\mu_1]\subset(0,\infty)$ choose $0<a<b$ so every first or second derivative of $\chi$ vanishes unless $a\le|y|\le b$. Writing $s=\log\mu$ and $g(s,r,\omega)=\chi(e^s r\omega)$, the first and second $s$-derivatives vanish unless $a/\mu_1\le r\le b/\mu_0$. On this annulus, $|\partial_s^2g|\le b\|\nabla\chi\|_\infty+b^2\|D^2\chi\|_\infty=:M$, by the chain rule; these suprema are finite because $\chi$ is smooth and compactly supported. For $s$ in a smaller compact interval and $h$ sufficiently small, the one-variable Taylor estimate gives $|(g(s+h,r,\omega)-g(s,r,\omega))/h-\partial_sg(s,r,\omega)|\le M|h|/2$ uniformly in $r,\omega$. The annulus has finite $dr/r$ measure and $S^3$ has finite measure by step 1.2, so integrating this uniform error proves differentiation under the polar integral. For each $\omega$, $$\int_0^\infty\frac{\partial}{\partial\log\mu}\chi(\mu r\omega)\,\frac{dr}{r} =\int_0^\infty\nabla\chi(s\omega)\cdot\omega\,ds =\chi(\infty\omega)-\chi(0)=-1,$$ where $s=\mu r$, $\chi=1$ near $0$, and $\chi$ is compactly supported. Since the difference integral vanishes at $\mu=\nu$, its value is $-\sigma_3(S^3)\log(\mu/\nu)$. With step 1.2 this proves the displayed formula for $T_\mu-T_\nu$. [F2, F7, F12, step 1.2, algebra]

3.1 Changing variables in the defining integral and using $u(\rho x)=\rho^{-4}u(x)$ gives $\rho^4(T_\mu)_\rho=T_{\rho\mu}$. Step 2.2 with $(\rho\mu,\mu)$ then gives $$\rho^4(T_\mu)_\rho=T_\mu+\frac{1}{8\pi^2}\log\rho\,\delta_0.$$ For every $\Omega>4$, multiplication by $\rho^{\Omega-4}$ makes the right side tend to zero as $\rho\downarrow0$, so $\operatorname{sd}_0(T_\mu)\le4$. Restriction to $U$ and step 1.1 give the reverse inequality, hence $\operatorname{sd}_0(T_\mu)=4$. [F1, F12, step 1.1, step 2.2, algebra]

4.1 The exact-degree extension family is nonempty by [F10], and [F11] says every member differs from $T_\mu$ by $c\delta_0$. Since $\rho^4(\delta_0)_\rho=\delta_0$, the scaling identity of step 3.1 yields $\rho^4(T_\mu+c\delta_0)_\rho=T_\mu+c\delta_0+(8\pi^2)^{-1}\log\rho\,\delta_0$, which is not constant in $\rho$. Thus no same-degree extension is exactly homogeneous. [F10, F11, F12, step 3.1, algebra] ∎
