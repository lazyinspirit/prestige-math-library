---
id: lem-calderon-reproducing-formula-for-the-hardy-decomposition
kind: lemma
title: "Calderon reproducing pair and the telescoping identity in $\\mathcal S'$"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [lem-existence-of-schwartz-functions-with-flat-fourier-transform-at-the-origin, def-countable-choice, lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions, def-real-hardy-space-by-a-radial-maximal-function, def-convolution-of-a-tempered-distribution-with-a-schwartz-function, def-tempered-distribution, thm-tempered-convolution-is-smooth-with-polynomial-growth, def-schwartz-space-and-its-seminorms, def-schwartz-topology-and-convergence, lem-schwartz-dilations-preserve-schwartz-space, thm-lebesgue-measure-under-dilations-and-reflections, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, lem-schwartz-functions-and-all-derivatives-are-integrable, thm-holder-inequality-for-integrals, thm-chebyshev-markov-inequality-for-the-integral, thm-maximal-function-characterisations-of-real-hardy-spaces, lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions, lem-sphere-and-ball-measures-scale, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable, lem-schwartz-parameter-pairing-and-integral-interchange]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "section 2, printed pp. 62-63 (PDF pp. 4-5): construction of $\\varphi,\\psi,\\tilde\\psi$, the telescoping identity $f=\\varphi_j*\\varphi_j*f+\\sum_{k\\ge j}\\psi_k*\\tilde\\psi_k*f$ in $\\mathcal S'$, and the estimate (19)"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proposition 7.38 and the identity (7.42)-(7.43), printed pp. 41-42: the classical tent-space reproducing formula"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $K\ge0$ and let $\varphi\in C_c^\infty(\mathbb R^n)$ satisfy
$\operatorname{supp}\varphi\subseteq B(0,1)$, $\widehat\varphi(0)=1$ and
$\partial^\alpha\widehat\varphi(0)=0$ for $0<|\alpha|\le K$ (such a $\varphi$
exists by
[[lem-existence-of-schwartz-functions-with-flat-fourier-transform-at-the-origin]]).
Put $\psi=2^n\varphi(2\,\cdot)-\varphi$ and
$\widetilde\psi=2^n\varphi(2\,\cdot)+\varphi$, and for $k\in\mathbb Z$ write
$h_k(x)=2^{kn}h(2^kx)$. Then
$$\operatorname{supp}\psi_k\subseteq B(0,2^{-k}),\qquad \operatorname{supp}\widetilde\psi_k\subseteq B(0,2^{-k}),\qquad \int_{\mathbb R^n}\psi(x)x^\alpha\,dx=0\quad(|\alpha|\le K),$$
and for every $f\in\mathcal S'(\mathbb R^n)$ and every $j\in\mathbb Z$ the
identity
$$f=\varphi_j*\varphi_j*f+\sum_{k\ge j}\psi_k*\widetilde\psi_k*f \qquad\text{in }\mathcal S'(\mathbb R^n)$$
holds, the series being the limit of its partial sums in $\mathcal S'$. If
$f\in H^p(\mathbb R^n)$ for some $0<p<\infty$ (with the fixed admissible
kernel and the space of
[[def-real-hardy-space-by-a-radial-maximal-function]]), then also
$$f=\sum_{k\in\mathbb Z}\psi_k*\widetilde\psi_k*f\qquad\text{in }\mathcal S'.$$
The absolute convergence of the scalar series
$\sum_{k\ge j}|\langle\psi_k*\widetilde\psi_k*f,\chi\rangle|$ for every test
function $\chi$ is proved where it is consumed, in the level-decomposition
item, whose quantitative hypotheses are available there. The two-sided
identity can fail for general $f\in\mathcal S'$: for the constant
function $f=1$ one has $\varphi_j*\varphi_j*f=f\ne0$ for every $j$, while
$\psi_k*\widetilde\psi_k*f=0$ for every $k$ because $\int\psi=0$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $K\ge0$, $\varphi,\psi,\widetilde\psi$ as in the statement; the convolutions and dilations of [[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]], [[lem-schwartz-dilations-preserve-schwartz-space]], [[def-schwartz-space-and-its-seminorms]] and [[def-schwartz-topology-and-convergence]].

[F1] The Fourier identity $\partial^\alpha\widehat\varphi(0)=(-2\pi i)^{|\alpha|}\int_{\mathbb R^n}x^\alpha\varphi(x)\,dx$ holds, so the moment conditions on $\varphi$ at the origin are equivalent to the vanishing of the positive-order moments of $\varphi$; the mean of $\varphi$ is one, and the mean of $\psi$ is zero ([[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]).

[F2] For $\Phi=\varphi*\varphi\in\mathcal S$ one has $\int\Phi=1$ and $\Phi_t=\varphi_t*\varphi_t$, so $\Phi_t*f\to f$ in $\mathcal S'$ as $t\downarrow0$ ([[lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions]]).

[F3] By kernel independence in [[thm-maximal-function-characterisations-of-real-hardy-spaces]], membership in $H^p$ gives integrability for the reproducing kernel $\varphi$, even when a different admissible kernel defines the given quasi-norm. Thus for $f\in H^p$ the radial maximal function $g=M^0_\varphi f$ belongs to $L^p$. When $p\ge1$, $h=\varphi_j*f$ satisfies $|h|\le g$ and hence $\|h\|_p\le\|g\|_p$; the regular-distribution convolution formula and Hölder give $\|\varphi_j*h\|_\infty\le\|\varphi_j\|_{p'}\|h\|_p$ ([[def-real-hardy-space-by-a-radial-maximal-function]], [[def-tempered-distribution]], [[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]], [[def-schwartz-space-and-its-seminorms]], [[thm-holder-inequality-for-integrals]]).

[F4] Schwartz functions and their polynomial multiples are integrable, so $x^\alpha\psi\in L^1$ and $\int_{\mathbb R^n}(1+|x|)^N|\psi|<\infty$ for every $N$ ([[lem-schwartz-functions-and-all-derivatives-are-integrable]]).

[F5] For $f\in H^p$, the maximal-characterisation theorem supplies an admissible integer order $N$ with $G=M_Nf\in L^p$. Grand-maximal domination gives $|(f*\varphi_t)(y)|\le3^NP_N(\varphi)G(x)$ whenever $|y-x|\le2t$ ([[thm-maximal-function-characterisations-of-real-hardy-spaces]], [[lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions]]).

[F6] Under Countable Choice, translation invariance and the ball-volume formula give $\lambda(B(x,R))=c_nR^n$ for every $x$ and $R>0$, while dilation gives $\|\varphi_t\|_{L^1}=\|\varphi\|_{L^1}$ and, for $1\le q<\infty$, $\|\varphi_j\|_q=2^{jn(1-1/q)}\|\varphi\|_q$; for $q=\infty$, $\|\varphi_j\|_\infty=2^{jn}\|\varphi\|_\infty$. Indeed, for finite $q$, $\int|\varphi_j(x)|^qdx=2^{jnq}2^{-jn}\int|\varphi(u)|^qdu$ under $u=2^jx$ ([[lem-sphere-and-ball-measures-scale]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[lem-schwartz-dilations-preserve-schwartz-space]], [[thm-lebesgue-measure-under-dilations-and-reflections]]).

[F7] The grand maximal function $M_Nf$ is Borel measurable, so its strict superlevel sets are measurable ([[lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable]]).

[F8] If $G\ge0$ is measurable and $t>0$, then $\lambda(\{G\ge t\})\le t^{-1}\int G$ by the Chebyshev-Markov inequality ([[thm-chebyshev-markov-inequality-for-the-integral]]).



**Proof technique:** telescoping of the two-scale identity, an elementary limit at $-\infty$, and a moment-Taylor estimate for the absolute convergence.

## Proof

**Proof technique:** constructive.

1.1 Support and moments. Since $\operatorname{supp}\varphi\subseteq B(0,1)$, both $\operatorname{supp}(2^n\varphi(2\cdot))$ and $\operatorname{supp}\varphi$ lie in $B(0,1)$; hence $\operatorname{supp}\psi,\operatorname{supp}\widetilde\psi\subseteq B(0,1)$ and, after dilation, $\operatorname{supp}\psi_k,\operatorname{supp}\widetilde\psi_k\subseteq B(0,2^{-k})$ for every $k$. For $0<|\alpha|\le K$ one has $\int x^\alpha\psi(x)dx=2^{-|\alpha|}\int x^\alpha\varphi(x)dx-\int x^\alpha\varphi(x)dx=(2^{-|\alpha|}-1)\int x^\alpha\varphi=0$ by [F1] and the flatness of $\widehat\varphi$; the case $\alpha=0$ gives $\int\psi=0$ as well. [F1, F4, algebra, construct]

2.1 Telescoping. For every $k\in\mathbb Z$ the definitions give $\psi_k=\varphi_{k+1}-\varphi_k$ and $\widetilde\psi_k=\varphi_{k+1}+\varphi_k$: indeed $h=2^n\varphi(2\cdot)$ has $h_k=\varphi_{k+1}$ and $\varphi_k=\varphi_k$. Therefore $\psi_k*\widetilde\psi_k*f=(\varphi_{k+1}*\varphi_{k+1}-\varphi_k*\varphi_k)*f$, and the finite sums telescope: $$\varphi_j*\varphi_j*f+\sum_{k=j}^{N}\psi_k*\widetilde\psi_k*f=\varphi_{N+1}*\varphi_{N+1}*f=(\varphi*\varphi)_{N+1}*f$$ for every $N\ge j$. By [F2], $(\varphi*\varphi)_{N+1}*f\to f$ in $\mathcal S'$ as $N\to\infty$, so the partial sums converge to $f-\varphi_j*\varphi_j*f$ and the displayed one-sided identity holds for every $f\in\mathcal S'$ and $j\in\mathbb Z$. [F2, step 1.1, algebra]

3.1 The two-sided identity for $H^p$ elements. Let $f\in H^p$ and set $g=M^0_\varphi f\in L^p$, so $|\varphi_j*f|\le g$ pointwise for every $j$. If $0<p<1$, choose an admissible integer order $N$ with $G=M_Nf\in L^p$ by [F5], and let $C_N=3^NP_N(\varphi)$. For $r\in\mathbb Z$ put $\Omega_r=\{x:G(x)>2^r\}$; by [F7] it is measurable, and $\Omega_r\subseteq\{G^p\ge2^{rp}\}$, so [F8] applied to $G^p$ at threshold $2^{rp}$ gives $\lambda(\Omega_r)\le2^{-rp}\|G\|_p^p<\infty$. Fix $r$. By [F6], $\lambda(B(y,2^{-j+1}))=c_n2^{(-j+1)n}\to\infty$ as $j\to-\infty$, uniformly in $y$. Thus for all sufficiently negative $j$ and every $y\in\mathbb R^n$ there is $x\in B(y,2^{-j+1})\setminus\Omega_r$; otherwise this ball would be contained in $\Omega_r$ and have measure at most $\lambda(\Omega_r)$. Then $|y-x|<2\cdot2^{-j}$, so [F5] gives $|(\varphi_j*f)(y)|\le C_NG(x)\le C_N2^r$. Hence $\|\varphi_j*f\|_\infty\le C_N2^r$, and [F6] gives $$\|\varphi_j*\varphi_j*f\|_\infty\le\|\varphi_j\|_1\|\varphi_j*f\|_\infty\le\|\varphi\|_1C_N2^r.$$ Given $\varepsilon>0$, choose $r$ so negative that the right-hand side is less than $\varepsilon$, and then choose $j$ sufficiently negative. Thus $\varphi_j*\varphi_j*f\to0$ uniformly, hence in $\mathcal S'$ because every Schwartz test function is integrable by [F4]. If $p\ge1$, Hölder instead gives $$|\varphi_j*\varphi_j*f(x)|\le\|\varphi_j\|_{p'}\|\varphi_j*f\|_p\le2^{jn/p}\|\varphi\|_{p'}\|g\|_p\longrightarrow0$$ as $j\to-\infty$. For $p>1$, [F6] gives this norm scaling since $\int|\varphi_j|^{p'}=2^{jnp'}2^{-jn}\int|\varphi(u)|^{p'}du$, so $n(1-1/p')=n/p$; for $p=1$ it is the supremum scaling $\|\varphi_j\|_\infty=2^{jn}\|\varphi\|_\infty$. The other bound uses $|\varphi_j*f|\le g$ and [F3]. Hence in every case $\varphi_j*\varphi_j*f\to0$ in $\mathcal S'$. Passing to the limit $j\to-\infty$ in the one-sided identity of step 2.1 (with the series understood as $\lim_{j\to-\infty}\sum_{k\ge j}$, whose partial sums are $\varphi_{N+1}*\varphi_{N+1}*f-\varphi_j*\varphi_j*f$) gives $f=\sum_{k\in\mathbb Z}\psi_k*\widetilde\psi_k*f$ in $\mathcal S'$. [F3, F4, F5, F6, F7, F8, step 2.1, given, algebra]

4.1 Conclusion. Step 1.1 gives the support and moment properties of $\psi$; step 2.1 gives the one-sided telescoping identity for every tempered distribution; step 3.1 gives the two-sided identity for $H^p$ elements. This proves the lemma. [step 1.1, step 2.1, step 3.1, discharge-construct] ∎
