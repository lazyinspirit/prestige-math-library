---
id: lem-hilbert-transform-has-signum-fourier-multiplier
kind: lemma
title: "The Hilbert transform is the tempered convolution with pv(1/(pi x)) and has signum Fourier multiplier"
status: published
origin: pipeline
deps: [def-truncated-hilbert-transform-and-principal-value, lem-singular-kernel-sine-integral-under-countable-choice, def-fourier-transform-of-a-tempered-distribution, thm-fourier-transform-converts-allowed-tempered-convolutions-to-products, def-convolution-of-a-tempered-distribution-with-a-schwartz-function, def-tempered-distribution, def-schwartz-space-and-its-seminorms, lem-schwartz-functions-and-all-derivatives-are-integrable, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, cor-mean-value-theorem, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-dominated-convergence, thm-substitution-for-improper-integrals, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 5.1.1, equations (5.1.1)-(5.1.13), printed pp. 314-317"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 20, Proposition 20.2, printed pp. 114-115"
---

## Statement

Assume [[def-countable-choice|Countable Choice]] and use the
$e^{-2\pi ix\xi}$ Fourier convention of
[[def-fourier-transform-of-a-tempered-distribution]]. Define the tempered
distribution $W=\operatorname{pv}\frac1{\pi x}$ by its pairing with a Schwartz
test function, $\langle W,\varphi\rangle$ equal to

$$ \frac1\pi\int_{|x|>1}\frac{\varphi(x)}{x}\,dx+\frac1\pi\int_{|x|<1}\frac{\varphi(x)-\varphi(0)}{x}\,dx .$$

Then, for every Schwartz function $f$:

1. the principal value $\lim_{\varepsilon\downarrow0}H_\varepsilon f(x)$ of
   [[def-truncated-hilbert-transform-and-principal-value]] exists at every
   $x\in\mathbb R$, and equals $(W*f)(x)$ for the tempered convolution of
   [[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]];
2. hence $Hf:=W*f$ is a tempered distribution, and
   $\mathcal F(Hf)=-i\operatorname{sgn}(\xi)\widehat f(\xi)$, where
   $\operatorname{sgn}(0)=0$ and $\widehat f=\mathcal Ff$ is the Schwartz
   transform of $f$.

The principal value is taken symmetrically about the singularity, and the
statement is made for Schwartz functions only; no $L^p$ mapping property and
no almost-everywhere statement for general $f$ is asserted.

## Facts & Assumptions

**Given:** Countable Choice, the Schwartz space $\mathcal S(\mathbb R)$ and its seminorms $p_{\alpha\beta}(\varphi)=\sup_x|x^\alpha\partial^\beta\varphi(x)|$, and the Fourier convention $\widehat\varphi(\xi)=\int\varphi(x)e^{-2\pi ix\xi}dx$.

[F1] The truncated Hilbert transform is $H_\varepsilon f(x)=\frac1\pi\int_{|t|>\varepsilon}\frac{f(x-t)}{t}\,dt$, and the principal-value transform is its symmetric $\varepsilon\downarrow0$ limit wherever it exists; the definition asserts no almost-everywhere existence by itself. [[def-truncated-hilbert-transform-and-principal-value]]

[F2] The sine integral satisfies $\int_0^\infty\frac{\sin u}{u}du=\frac\pi2$, its partial integrals obey $|S(T)|\le3$ for all $T\ge0$ and $|S(T)|\le T$ for $0\le T\le1$, and $\int_A^B\frac{\sin u}{u}du\le\frac2A$ in absolute value for $1\le A<B$. [[lem-singular-kernel-sine-integral-under-countable-choice]]

[F3] The Fourier transform of a tempered distribution is defined by $\langle\mathcal Fu,\varphi\rangle=\langle u,\mathcal F\varphi\rangle$; the pairing is bilinear with no conjugation. [[def-fourier-transform-of-a-tempered-distribution]]

[F4] For $u\in\mathcal S'(\mathbb R^n)$ and Schwartz $\varphi$ one has $\mathcal F(u*\varphi)=(\mathcal Fu)(\mathcal F\varphi)$, the product being the product of a tempered distribution with a smooth polynomially bounded function. [[thm-fourier-transform-converts-allowed-tempered-convolutions-to-products]]

[F5] The tempered convolution is defined by $(u*\varphi)(x)=\langle u_y,\varphi(x-y)\rangle$, a scalar function of $x$. [[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]]

[F6] A tempered distribution is a continuous complex-linear functional on Schwartz space. [[def-tempered-distribution]]

[F7] Schwartz seminorms $p_{\alpha\beta}(\varphi)=\sup_x|x^\alpha\partial^\beta\varphi(x)|$ are finite for $\varphi\in\mathcal S(\mathbb R)$. [[def-schwartz-space-and-its-seminorms]]

[F8] If $f\in\mathcal S(\mathbb R^n)$ then $f\in L^p$ for every $1\le p\le\infty$, with norm bounded by a finite sum of Schwartz seminorms. [[lem-schwartz-functions-and-all-derivatives-are-integrable]]

[F9] The Fourier transform is a topological automorphism of Schwartz space, so $\widehat f\in\mathcal S$ for $f\in\mathcal S$. [[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]

[F10] Mean value theorem: for differentiable $\varphi$, $|\varphi(x)-\varphi(0)|\le\|\varphi'\|_\infty|x|$ on $[-1,1]$. [[cor-mean-value-theorem]]

[F11] Fubini for L^1 functions on a sigma-finite product. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F12] Dominated convergence. [[thm-dominated-convergence]]

[F13] Substitution for improper integrals, with orientation retained for decreasing parametrizations. [[thm-substitution-for-improper-integrals]]

## Proof

**Proof technique:** direct.

1.1 For $\varphi\in\mathcal S(\mathbb R)$ both integrals in the definition of $W$ converge absolutely: on $|x|>1$ the bound $|\varphi(x)/x|\le p_{20}(\varphi)|x|^{-3}$ is integrable, and on $|x|<1$ the bound $|\varphi(x)-\varphi(0)|/|x|\le p_{01}(\varphi)$ from [F10] is integrable on a set of length two. Hence $|\langle W,\varphi\rangle|\le\frac2\pi(p_{20}(\varphi)+p_{01}(\varphi))$ and $W$ is a tempered distribution by [F6]. Moreover $\int_{\varepsilon<|x|<1}\varphi(0)/x\,dx=0$ by oddness of $1/x$, so for $0<\varepsilon<1$ the truncated pairing $(1/\pi)\int_{|x|>\varepsilon}\varphi(x)/x\,dx$ equals the defining two-piece pairing with the local piece integrated over $\varepsilon<|x|<1$; consequently $\langle W,\varphi\rangle=\lim_{\varepsilon\downarrow0}\frac1\pi\int_{|x|>\varepsilon}\varphi(x)/x\,dx$. [F6, F7, F10]

2.1 Fix $\varphi\in\mathcal S(\mathbb R)$ and $0<\varepsilon<R$. By [F11] applied on the product of the finite-measure annulus $\{\varepsilon<|x|<R\}$ with $\mathbb R$, using the integrable majorant $|\varphi(\xi)|/|x|$ from [F8], $I_{\varepsilon,R}:=\frac1\pi\int_{\varepsilon<|x|<R}\frac{\widehat\varphi(x)}{x}\,dx=\frac1\pi\int_{\mathbb R}\varphi(\xi)\Lambda_{\varepsilon,R}(\xi)\,d\xi$ with $\Lambda_{\varepsilon,R}(\xi):=\int_{\varepsilon<|x|<R}e^{-2\pi ix\xi}x^{-1}dx$. Writing the exponential in cosine and sine, the cosine term is odd and integrates to zero, while [F13] with $u=2\pi x\xi$ gives $\Lambda_{\varepsilon,R}(\xi)=-2i\int_\varepsilon^R\frac{\sin(2\pi x\xi)}{x}dx=-2i\operatorname{sgn}(\xi)\bigl(S(2\pi R|\xi|)-S(2\pi\varepsilon|\xi|)\bigr)$ for the partial sine integral $S$ of [F2]; in particular $|\Lambda_{\varepsilon,R}(\xi)|\le12$. [step 1.1, F2, F8, F11, F13]

2.2 Fix $f\in\mathcal S(\mathbb R)$ and $x\in\mathbb R$. For $0<\varepsilon<1$, [F1] gives $H_\varepsilon f(x)=\frac1\pi\int_{|t|>\varepsilon}\frac{f(x-t)}{t}\,dt$; since $\int_{\varepsilon<|t|<1}f(x)/t\,dt=0$, this equals $\frac1\pi\int_{\varepsilon<|t|<1}\frac{f(x-t)-f(x)}{t}\,dt+\frac1\pi\int_{|t|>1}\frac{f(x-t)}{t}\,dt$. The tail is absolutely convergent by [F8], and the first integral converges as $\varepsilon\downarrow0$ by [F12], the integrand tending pointwise to $\frac{f(x-t)-f(x)}{t}$ and being dominated on $(-1,1)$ by $p_{01}(f)=\|f'\|_\infty$ thanks to [F10]. The resulting limit is exactly $\langle W_y,f(x-y)\rangle=(W*f)(x)$ by the defining formula of $W$ in 1.1 and the convolution definition [F5]. Hence $\lim_{\varepsilon\downarrow0}H_\varepsilon f(x)$ exists at every $x$ and equals $(W*f)(x)$. [step 1.1, F1, F5, F8, F10, F12]

3.1 By 1.1 and [F3], $\langle\mathcal FW,\varphi\rangle=\langle W,\widehat\varphi\rangle=\lim_{\varepsilon\downarrow0}\frac1\pi\int_{|x|>\varepsilon}\widehat\varphi(x)/x\,dx$. Holding $\varepsilon$ fixed, [F2] gives $\Lambda_{\varepsilon,R}(\xi)\to\rho_\varepsilon(\xi):=-2i\operatorname{sgn}(\xi)\bigl(\frac\pi2-S(2\pi\varepsilon|\xi|)\bigr)$ as $R\to\infty$, with $|\rho_\varepsilon(\xi)|\le\pi+6$. Thus [F12] against $|\varphi|$ yields $I_{\varepsilon,R}\to\frac1\pi\int\varphi\rho_\varepsilon$ as $R\to\infty$. Then $S(2\pi\varepsilon|\xi|)\le2\pi\varepsilon|\xi|$ for $2\pi\varepsilon|\xi|\le1$ by [F2] makes $\rho_\varepsilon(\xi)\to-i\pi\operatorname{sgn}(\xi)$ pointwise as $\varepsilon\downarrow0$, and a second application of [F12] gives $\frac1\pi\int\varphi\rho_\varepsilon\to\int(-i\operatorname{sgn}\xi)\varphi(\xi)\,d\xi$. Combining the two limits with the pairing identity gives $\langle\mathcal FW,\varphi\rangle=\int(-i\operatorname{sgn}\xi)\varphi(\xi)\,d\xi$ for every $\varphi\in\mathcal S$, that is, $\mathcal FW=-i\operatorname{sgn}(\xi)$ as tempered distributions. [step 1.1, step 2.1, F2, F3, F12]

4.1 By 3.1 and [F4] applied to the tempered distribution $W$ and the Schwartz function $f$, $\mathcal F(W*f)=(\mathcal FW)(\mathcal Ff)=-i\operatorname{sgn}(\xi)\widehat f(\xi)$, the product being that of the distribution $-i\operatorname{sgn}$ with the Schwartz function $\widehat f\in\mathcal S$ supplied by [F9] and [F3]. By 2.2 the same $Hf=W*f$ is the pointwise principal-value transform of $f$; thus the principal value defines the tempered convolution with $\operatorname{pv}\frac1{\pi x}$ and has the signum Fourier multiplier, as claimed. [step 2.2, step 3.1, F3, F4, F9] ∎
