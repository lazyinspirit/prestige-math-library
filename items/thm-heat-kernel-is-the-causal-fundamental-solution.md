---
id: thm-heat-kernel-is-the-causal-fundamental-solution
kind: theorem
title: "The causal heat kernel is the fundamental solution of the heat operator"
status: published
origin: pipeline
deps:
  - cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions
  - cor-mean-value-theorem
  - def-countable-choice
  - def-dirac-delta-and-its-derivatives
  - def-distribution
  - def-distributional-derivative
  - def-heat-kernel
  - def-regular-distribution-from-a-locally-integrable-function
  - def-test-function-space-d-of-an-open-set
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - thm-integration-by-parts-with-interior-derivatives
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-tonelli-and-fubini-for-completed-product-measures
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Lemma 1.0.3, Remark 1.0.4 and Proposition 1.0.4, pp. 2–3 (weak initial Dirac limit; the space-time causal identity is proved locally)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "printed p. 151, §6.2 (fundamental solution, Fourier route)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "Remark 3.1.3, printed p. 102 (the initial value is the Dirac δ)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "printed p. 131: Γ(·,t) → δ in S′ as t → 0+ and Γ_t = ΔΓ"
---

## Statement

Assume Countable Choice and let $n\ge1$, and let $\Gamma$ be the causal
extension of the heat kernel. Then
$\Gamma\in L^1_{\mathrm{loc}}(\mathbb R^{n+1})$, and its regular distribution
$u_\Gamma\in\mathcal D'(\mathbb R^{n+1})$ satisfies
$(\partial_t-\Delta)u_\Gamma=\delta_{(0,0)}$, that is,
$$\langle(\partial_t-\Delta)u_\Gamma,\varphi\rangle=\varphi(0,0)\qquad\text{for every }\varphi\in C_c^\infty(\mathbb R^{n+1}),$$
so the causal extension is a fundamental solution of $\partial_t-\Delta$.
Moreover $\Gamma(\cdot,t)\to\delta_0$ in $\mathcal D'(\mathbb R^n)$ as
$t\downarrow0^+$, that is, $\int_{\mathbb R^n}\Gamma(x,t)\varphi(x)\,dx\to\varphi(0)$
for every $\varphi\in C_c^\infty(\mathbb R^n)$. The derivative $\partial_t$ is
the distributional derivative in the last space-time coordinate.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, a test function $\varphi\in C_c^\infty(\mathbb R^{n+1})$, a real $R>0$ with $\operatorname{supp}\varphi$ contained in the open box $B_R\times(-R,R)\subseteq\mathbb R^{n+1}$, and $0<\varepsilon<R$.

[A1] Countable Choice is the hypothesis carried by the integration and embedding suppliers below ([[def-countable-choice]]).

[F1] The causal extension of the heat kernel is $\Gamma(x,t)$ for $t>0$ and $\Gamma(x,t)=0$ for $t\le0$, with $\Gamma(x,t)=(4\pi t)^{-n/2}\exp(-|x|^2/(4t))$ positive and $C^\infty$ on $\mathbb R^n\times(0,\infty)$ ([[def-heat-kernel]]).

[F2] For every $t>0$, $\int_{\mathbb R^n}\Gamma(x,t)\,dx=1$, $\partial_t\Gamma=\Delta_x\Gamma$ on $\mathbb R^n\times(0,\infty)$, and $(\Gamma(\cdot,t))_{t>0}$ is an $L^1$ approximate identity on $\mathbb R^n$ ([[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F3] For $f\in L^1_{\mathrm{loc}}(\Omega)$ the regular functional $\langle u_f,\varphi\rangle=\int_\Omega f\varphi$ is well-defined and depends only on the almost-everywhere class of $f$ ([[def-regular-distribution-from-a-locally-integrable-function]]).

[F4] The distributional derivative is $\langle\partial^\alpha u,\varphi\rangle=(-1)^{|\alpha|}\langle u,\partial^\alpha\varphi\rangle$ ([[def-distributional-derivative]]); thus a first time derivative contributes a sign $-1$ and a second spatial derivative a sign $+1$.

[F5] Assuming Countable Choice, $f\mapsto u_f$ is an injection from $L^1_{\mathrm{loc}}(\Omega)$ modulo almost-everywhere equality into $\mathcal D'(\Omega)$, and local $L^1$ convergence implies strong distribution convergence ([[thm-locally-integrable-functions-embed-in-distributions]]).

[F6] The Dirac distribution satisfies $\delta_a(\varphi)=\varphi(a)$ and $\langle\partial^\alpha\delta_a,\varphi\rangle=(-1)^{|\alpha|}\partial^\alpha\varphi(a)$ ([[def-dirac-delta-and-its-derivatives]]).

[F7] If $F,G$ are continuous on $[a,b]$ and differentiable on $(a,b)$ with $F'=f$, $G'=g$ Riemann integrable there, then $\int_a^bFg+\int_a^bfG=F(b)G(b)-F(a)G(a)$ ([[thm-integration-by-parts-with-interior-derivatives]]).

[F8] On completed sigma-finite product measure spaces, Tonelli's theorem holds for nonnegative measurable functions and Fubini's theorem for $L^1$ functions ([[thm-tonelli-and-fubini-for-completed-product-measures]]); under $\mathbb R^{m+n}=\mathbb R^m\times\mathbb R^n$, $\lambda_{m+n}$ is that completed product measure ([[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]).

[F9] If $(K_\varepsilon)$ is an $L^1$ approximate identity and $f$ is bounded and continuous, then $(f*K_\varepsilon)(x)\to f(x)$ uniformly for $x$ in every compact set ([[cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions]]).

[F10] For continuous $f$ on $[a,b]$, differentiable on $(a,b)$, there is $c\in(a,b)$ with $f(b)-f(a)=f'(c)(b-a)$ ([[cor-mean-value-theorem]]).



## Proof

**Proof technique:** direct.

1.1 Local integrability: let $K\subseteq\mathbb R^{n+1}$ be compact and choose $R>0$ with $K\subseteq B_R\times[-R,R]$. By Tonelli's theorem [F8] over the completed product measure, $\int_K|\Gamma|\le\int_0^R\int_{\mathbb R^n}\Gamma(x,t)\,dx\,dt=\int_0^R1\,dt=R<\infty$ using unit mass from [F2] and $\Gamma=0$ for $t\le0$ from [F1]; hence $\Gamma\in L^1_{\mathrm{loc}}(\mathbb R^{n+1})$ and its regular functional $u_\Gamma$ of [F3] is a distribution by [F5]. [A1, F1, F2, F3, F5, F8, given]

1.2 Dirac limit at time zero: fix a spatial test function $\psi\in C_c^\infty(\mathbb R^n)$. For every $t>0$, $\int_{\mathbb R^n}\Gamma(x,t)\psi(x)\,dx=(\psi*\Gamma_t)(0)$ because $\Gamma$ is spatially even, and by [F9] applied on a compact set containing $0$ and $\operatorname{supp}\psi$ this converges to $\psi(0)$ as $t\downarrow0^+$, so $\Gamma(\cdot,t)\to\delta_0$ in $\mathcal D'(\mathbb R^n)$ by the definition of $\delta_0$ in [F6]. [F1, F2, F6, F9, given, algebra]

2.1 Pairing: fix $\varphi$ with support in $B_R\times(-R,R)$. The definitions of the regular functional and of the distributional derivative give $\langle(\partial_t-\Delta_x)u_\Gamma,\varphi\rangle=-\int_{\mathbb R^{n+1}}\Gamma\,\partial_t\varphi-\int_{\mathbb R^{n+1}}\Gamma\,\Delta_x\varphi=-\int_{\mathbb R^{n+1}}\Gamma(\partial_t\varphi+\Delta_x\varphi)$, the two integrals being absolutely convergent by step 1.1 and the compact support of $\varphi$, with the signs as in [F4]. [step 1.1, F3, F4, given]

2.2 Truncated integration by parts: for $0<\varepsilon<R$, choose $T>R$ with $\operatorname{supp}\varphi\subseteq\mathbb R^n\times(-T,T)$. Fubini [F8] on the strip $\varepsilon\le t\le T$, the scalar integration by parts [F7] in the time variable at each fixed $x$, and [F7] twice in each spatial coordinate at each fixed $t$ (the boundary terms vanish because $\varphi$ and all its derivatives are supported in the open box $B_R\times(-R,R)$) give $\int_\varepsilon^\infty\int_{\mathbb R^n}\Gamma\,\partial_t\varphi\,dx\,dt=-\int_{\mathbb R^n}\Gamma(x,\varepsilon)\varphi(x,\varepsilon)\,dx-\int_\varepsilon^\infty\int_{\mathbb R^n}\partial_t\Gamma\,\varphi\,dx\,dt$ and $\int_\varepsilon^\infty\int_{\mathbb R^n}\Gamma\,\Delta_x\varphi\,dx\,dt=\int_\varepsilon^\infty\int_{\mathbb R^n}\Delta_x\Gamma\,\varphi\,dx\,dt$; adding the two identities and substituting the heat equation $\partial_t\Gamma=\Delta_x\Gamma$ of [F2] cancels the interior terms and yields $\int_\varepsilon^\infty\int_{\mathbb R^n}\Gamma(\partial_t\varphi+\Delta_x\varphi)\,dx\,dt=-\int_{\mathbb R^n}\Gamma(x,\varepsilon)\varphi(x,\varepsilon)\,dx$. [step 1.1, F1, F2, F7, F8, given]

3.1 Limit as $\varepsilon\downarrow0$: by step 2.2 and step 2.1, $\langle(\partial_t-\Delta_x)u_\Gamma,\varphi\rangle=\lim_{\varepsilon\downarrow0}\int_{\mathbb R^n}\Gamma(x,\varepsilon)\varphi(x,\varepsilon)\,dx$. Write the last integral as $\int_{\mathbb R^n}\Gamma(x,\varepsilon)\varphi(x,0)\,dx+\int_{\mathbb R^n}\Gamma(x,\varepsilon)\bigl(\varphi(x,\varepsilon)-\varphi(x,0)\bigr)\,dx$. The first term equals $(\varphi(\cdot,0)*\Gamma_\varepsilon)(0)$ because $\Gamma$ is even in its spatial variable, and it tends to $\varphi(0,0)$ by the approximate-identity corollary [F9] applied to the bounded continuous compactly supported function $x\mapsto\varphi(x,0)$ on a compact set containing $0$; the second term is bounded in modulus by $\sup_x|\varphi(x,\varepsilon)-\varphi(x,0)|\cdot\|\Gamma(\cdot,\varepsilon)\|_1\le\varepsilon\sup|\partial_t\varphi|$ by the mean value theorem [F10] in the time variable and unit mass from [F2], hence tends to $0$. [step 2.1, step 2.2, F1, F2, F9, F10, given, algebra]

4.1 Step 3.1 gives $\langle(\partial_t-\Delta_x)u_\Gamma,\varphi\rangle=\varphi(0,0)=\langle\delta_{(0,0)},\varphi\rangle$ for every $\varphi\in C_c^\infty(\mathbb R^{n+1})$ by [F6], that is, $(\partial_t-\Delta_x)u_\Gamma=\delta_{(0,0)}$; step 1.2 gives the weak Dirac limit at time zero; step 1.1 gives local integrability, so the causal extension is a fundamental solution of $\partial_t-\Delta_x$. [step 1.1, step 3.1, step 1.2, F6, given] ∎
