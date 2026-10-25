---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item read and recorded Step 7 mathematical repair review, including the used supplier interfaces; current mathematical content matches the bound evidence. The repair review is local and does not claim an independent audit of the repair."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-5.md
      - research/frontier-38-owner-30-dispatch/reader-reader-5.result.json
      - research/frontier-38-owner-30-step5-hash-5-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-5-5a-decisions.json
      - research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u5.json
      - research/frontier-38-owner-30-dispatch/alpha-adjudicate-step7-v2-initial-r1-u5.result.json
id: cex-calderon-zygmund-strong-lone-bound-fails
kind: counterexample
title: "Strong type (1,1) fails for the Hilbert transform"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-hilbert-space-adjoint, def-truncated-hilbert-transform-and-principal-value, lem-hilbert-transform-has-signum-fourier-multiplier, lem-hilbert-transform-is-skew-adjoint-on-ltwo, thm-dominated-convergence, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-locally-integrable-functions-embed-in-distributions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§5.1.1, Example 5.1.3, printed pp. 314–317"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/abs/0903.3845"
      locator: "Chapter 20, computation of the interval transform, printed pp. 113–119"
---

## Statement refuted

Assume Countable Choice ([[def-countable-choice]]).

The interval indicator $f=\mathbf 1_{(0,1]}$ lies in $L^1(\mathbb R)$, but its
Hilbert transform is $Hf(x)=\pi^{-1}\log|x/(x-1)|$ for $x\notin\{0,1\}$, which is
not integrable because $|Hf(x)|\gtrsim1/|x|$ for large $x$. Hence the Hilbert
transform has no compatible strong type $(1,1)$ extension: there is no bounded
$L^1\to L^1$ extension agreeing with the $L^2$ Hilbert transform on
$L^1\cap L^2$. No weak $(1,1)$ estimate is refuted here; the Hilbert transform
is a Calderón–Zygmund operator and the companion page proves the weak endpoint
instead.

## Facts & Assumptions

**Given:** Countable Choice; the indicator $f=\mathbf 1_{(0,1]}$; the function $q(x)=\frac1\pi\log\frac{|x|}{|x-1|}$ on $\mathbb R\setminus\{0,1\}$; the dominating function $G(x):=|q(x)|$ off $\{0,1\}$, with arbitrary values on that null set; the $L^p$ conventions of [[def-complex-lp-and-euclidean-test-function-conventions]].

[F1] For $h\in L^p(\mathbb R)$, $1\le p<\infty$, and $\varepsilon>0$, the truncation $H_\varepsilon h(x)=\frac1\pi\int_{|x-y|>\varepsilon}\frac{h(y)}{x-y}\,dy$ is an absolutely convergent Lebesgue integral, is defined for every $x$, and depends only on the almost-everywhere class of $h$ ([[def-truncated-hilbert-transform-and-principal-value]]). The interval-specific domination $|H_\varepsilon f|\le G$ is proved in step 1.1 below.

[F2] For every Schwartz function $\varphi$ the principal value $\lim_{\varepsilon\downarrow0}H_\varepsilon\varphi(y)$ exists at every $y$ and equals $H\varphi(y)$; the Hilbert transform extends to an isometric $L^2$ multiplier operator with $H^*=-H$ for the first-variable-linear pairing, so $\langle Hh,\psi\rangle=\langle h,H^*\psi\rangle$ ([[lem-hilbert-transform-has-signum-fourier-multiplier]], [[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity]], [[lem-hilbert-transform-is-skew-adjoint-on-ltwo]], [[def-hilbert-space-adjoint]]).

[F3] Dominated convergence holds for sequences dominated by an integrable function on a fixed measure space ([[thm-dominated-convergence]]); Countable Choice is assumed throughout and is used only through the cited suppliers.



[F4] Fubini interchanges absolutely integrable complex double integrals, and locally integrable functions with equal distribution pairings agree almost everywhere. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-locally-integrable-functions-embed-in-distributions]])

## Counterexample

**Proof technique:** direct.

1.1 Explicit values of the truncations. For $x\notin\{0,1\}$ and $0<\varepsilon<d(x):=\min\{|x|,|x-1|\}$ the truncation is a sum of ordinary integrals with no singular point in the domain, and direct antiderivatives give: for $x<0$ or $x>1$, $H_\varepsilon f(x)=\frac1\pi\int_0^1\frac{dy}{x-y}=\frac1\pi\log\frac{|x|}{|x-1|}=q(x)$; for $0<x<1$, $H_\varepsilon f(x)=\frac1\pi\bigl(\int_0^{x-\varepsilon}+\int_{x+\varepsilon}^1\bigr)\frac{dy}{x-y}=\frac1\pi\bigl(\log x-\log\varepsilon+\log\varepsilon-\log(1-x)\bigr)=\frac1\pi\log\frac{x}{1-x}=q(x)$, since $|x/(x-1)|=x/(1-x)$ there. Hence $H_\varepsilon f(x)=q(x)$ for every $\varepsilon<d(x)$, so $\lim_{\varepsilon\downarrow0}H_\varepsilon f(x)=q(x)$ at every $x\notin\{0,1\}$. Moreover, for $0<x<1$ direct integration gives $\pi H_\varepsilon f(x)=(\log(x/\varepsilon))_+-(\log((1-x)/\varepsilon))_+$. Since $u\mapsto u_+$ is $1$-Lipschitz, $|H_\varepsilon f(x)|\le|q(x)|$. Outside $[0,1]$ the integrand has one sign, so deleting part of the integration domain also gives $|H_\varepsilon f(x)|\le|q(x)|$. Thus $G$ dominates the truncations almost everywhere. It is locally integrable because $|q(x)|\le\pi^{-1}(|\log|x||+|\log|x-1||)$ and $\int_0^a|\log t|\,dt<\infty$ for finite $a>0$. [F1, given, algebra]

1.2 Distributional convergence to the $L^2$ transform. Let $\varphi\in C_c^\infty(\mathbb R)$ and put $b_\varepsilon(y):=\frac1\pi\int_{|x-y|>\varepsilon}\frac{\overline{\varphi(x)}}{x-y}\,dx$; on the domain $|x-y|\ge\varepsilon$ the double integral $\iint_{|x-y|>\varepsilon}\frac{|f(y)\varphi(x)|}{|x-y|}\,dy\,dx$ is finite because $|x-y|^{-1}\le\varepsilon^{-1}$ and $f$ and $\varphi$ are bounded with bounded support, so Fubini applies and $\langle H_\varepsilon f,\varphi\rangle=\int_0^1f(y)b_\varepsilon(y)\,dy$. As $\varepsilon\downarrow0$ one has $b_\varepsilon(y)=-\frac1\pi\int_{|x-y|>\varepsilon}\frac{\overline{\varphi(x)}}{y-x}\,dx\to-H\overline{\varphi}(y)=-\overline{H\varphi(y)}$, using that the kernel is real and [F2]; the convergence is dominated by a constant depending on $\varphi$, because applying the estimate $|\int_{|t|>\varepsilon}\psi(y+t)t^{-1}dt|\le\int_{|t|\le1}|\psi(y+t)-\psi(y)|\,|t|^{-1}dt+\int_{|t|>1}|\psi(y+t)|\,dt\le2\|\psi'\|_\infty+2\|\psi\|_1$ to $\psi=\overline\varphi$ bounds all $b_\varepsilon(y)$ uniformly. Hence dominated convergence on the finite-measure set $(0,1]$ gives $\langle H_\varepsilon f,\varphi\rangle\to-\int_0^1f(y)\overline{H\varphi(y)}\,dy=-\langle f,H\varphi\rangle=\langle f,H^*\varphi\rangle=\langle Hf,\varphi\rangle$. [F1, F2, F3, given, algebra, F4]

1.3 $q\notin L^1(\mathbb R)$: for $x\ge2$ one has $\frac{x}{x-1}=1+\frac1{x-1}$ with $\frac1{x-1}\le1$, and $\log(1+u)\ge\frac u2$ for $0\le u\le1$, so $q(x)=\frac1\pi\log\bigl(1+\frac1{x-1}\bigr)\ge\frac1{2\pi(x-1)}\ge\frac1{2\pi x}$. Therefore $\int_{2}^{\infty}|q|\ge\frac1{2\pi}\int_2^\infty\frac{dx}{x}=+\infty$. [given, algebra]

2.1 Identification of the limit. On each compact $K$ the domination $|H_\varepsilon f|\le G$ of step 1.1 with $G\in L^1(K)$ and the pointwise convergence $H_\varepsilon f\to q$ off the null set $\{0,1\}$ let dominated convergence pass the limit inside the pairing: $\langle H_\varepsilon f,\varphi\rangle\to\int q\,\overline\varphi$ for every test function $\varphi$ supported in $K$, hence for every test function. Comparing with step 1.2, $\int(q-Hf)\overline\varphi=0$ for every $\varphi\in C_c^\infty$, and both $q$ and the $L^2$ class $Hf$ are locally integrable, so $q=Hf$ almost everywhere; in particular $f\in L^1\cap L^2$ with $\|f\|_1=1$ and $Hf=q$. [F2, step 1.1, step 1.2, algebra, F4]

3.1 Suppose $T:L^1(\mathbb R;\mathbb C)\to L^1(\mathbb R;\mathbb C)$ were bounded and agreed with the $L^2$ Hilbert transform on $L^1\cap L^2$. Since $f\in L^1\cap L^2$ by step 2.1, the $L^1$ class $Tf$ would equal the $L^1$ class $Hf$, which step 2.1 identifies with $q$; but $q\notin L^1$ by step 1.3, whereas $Tf\in L^1$ by definition of $T$. This contradiction shows that no such $T$ exists, which is exactly the failure of strong type $(1,1)$; the statement says nothing about weak type $(1,1)$. [step 2.1, step 1.3, algebra] ∎
