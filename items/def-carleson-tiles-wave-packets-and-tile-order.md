---
id: "def-carleson-tiles-wave-packets-and-tile-order"
kind: "definition"
title: "Carleson tiles wave packets and tile order"
deps: ["def-schwartz-space-and-its-seminorms", "thm-fourier-inversion-on-schwartz-space", "thm-exponential-beats-every-polynomial", "thm-derivative-of-exponential", "thm-chain-rule", "thm-algebra-of-derivatives", "cor-exponential-reciprocal-and-positivity", "thm-fourier-transform-maps-schwartz-space-continuously-to-itself", "thm-fourier-translation-modulation-dilation-and-reflection-laws", "lem-schwartz-functions-and-all-derivatives-are-integrable", "def-axiom-of-choice", "thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations'
      url: https://arxiv.org/pdf/math/0307008
      locator: Sections 2–3
provenance:
  statement: literature-derived
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

Assume [[def-axiom-of-choice]] for the countable-choice Fourier suppliers. A **dyadic interval** is $[j2^k,(j+1)2^k)$ with $j,k\in\mathbb Z$; its length is positive. A **tile** is $s=I_s\times\omega_s$ with both intervals dyadic and $|I_s||\omega_s|=1$. Their centers are denoted c. Write $\omega_{s,-}$ and $\omega_{s,+}$ for the left and right half-open halves. The midpoint belongs only to the right half.

Here is an explicit nonzero packet convention. Define $\rho(t)=\exp(-1/t)$ for $t>0$ and $\rho(t)=0$ for $t\le0$. Here is the complete smoothness justification. Put $P_0(u)=1$ and recursively $P_{k+1}(u)=u^2(P_k(u)-P_k'(u))$. The exponential derivative, chain rule and product/quotient rules ([[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]) show on $t>0$ that the kth derivative is $P_k(1/t)\exp(-1/t)$. For each polynomial P and each integer r>=0, $t^{-r}P(1/t)\exp(-1/t)\to0$ as $t\downarrow0$: expand P into finitely many monomials, put u=1/t, and apply [[thm-exponential-beats-every-polynomial]] with parameter one and [[cor-exponential-reciprocal-and-positivity]]. Extend each displayed kth-derivative formula by zero on $t\le0$. Each extension is continuous at zero (r=0); its difference quotient at zero tends to zero (r=1), so its derivative there equals the next extension's value. On the two open half-lines differentiation already gives the next extension. Induction therefore proves $\rho\in C^\infty(\mathbb R)$ and $\rho^{(k)}(0)=0$ for every k. Positivity of the exponential makes $\rho(t)>0$ exactly when $t>0$. Set $a=1/9$, $b=1/8$ and
$$\psi(\xi)=\frac{\rho(b^2-\xi^2)}{\rho(b^2-\xi^2)+\rho(\xi^2-a^2)}.$$
The denominator is positive: for $|\xi|\le a$ its first term is positive, for $|\xi|\ge b$ its second term is positive, and between a and b both are positive. Thus $\psi$ is smooth, $0\le\psi\le1$, equals one on $[-a,a]$ and vanishes outside $[-b,b]$. Every derivative is bounded on its compact support, so it is Schwartz under [[def-schwartz-space-and-its-seminorms]]. Define $\phi(x)=\widehat\psi(-x)$. The transform theorem [[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]] makes this Schwartz, and [[thm-fourier-inversion-on-schwartz-space]] gives $\widehat\phi=\psi$. In detail inversion applied to $\psi$ says $\int\widehat\psi(y)e^{2\pi iy\xi}\,dy=\psi(\xi)$; changing $y=-x$ gives the claimed transform. All integrals are absolute by [[lem-schwartz-functions-and-all-derivatives-are-integrable]]. In particular $\phi$ is not zero. No unspecified zero packet is allowed.

Use $\operatorname{Tr}_y h(x)=h(x-y)$, $\operatorname{Mod}_\xi h(x)=e^{2\pi i\xi x}h(x)$ and $\operatorname{Dil}^2_\ell h(x)=\ell^{-1/2}h(x/\ell)$ for $\ell>0$. Define
$$\phi_s(x)=|I_s|^{-1/2}e^{2\pi i c(\omega_{s,-})x}\phi\bigl((x-c(I_s))/|I_s|\bigr).$$
The translation, modulation and dilation laws [[thm-fourier-translation-modulation-dilation-and-reflection-laws]] give
$$\widehat{\phi_s}(\xi)=|I_s|^{1/2}e^{-2\pi i c(I_s)(\xi-c(\omega_{s,-}))}\psi\bigl(|I_s|(\xi-c(\omega_{s,-}))\bigr).$$
Its support lies strictly inside $\omega_{s,-}$, since its half-width is $1/(8|I_s|)$ whereas that half-interval has half-width $1/(4|I_s|)$. For every integer M there is a finite constant $C_M$ with $|\phi_s(x)|\le C_M|I_s|^{-1/2}(1+|x-c(I_s)|/|I_s|)^{-M}$, directly from the Schwartz seminorms. The pairing is $\langle f,h\rangle=\int f\overline h$, linear in f. The fixed packet is not assumed to have norm one; its fixed norm and seminorms enter constants.

Set $s\le t$ when $I_s\subseteq I_t$ and $\omega_t\subseteq\omega_s$. This is a partial order: reflexivity and transitivity follow from inclusions, and mutual comparability gives equality of both intervals. A finite **tree** is a set T with a designated top tile t such that $s\le t$ for every $s\in T$; the top need not belong to T and is part of the data. A **plus tree** has, in addition, $\omega_t\subseteq\omega_{s,+}$ for every $s\in T\setminus\{t\}$. The top alone is allowed. Empty trees have no contribution; any assigned top is retained only when a forest count is explicitly specified. For a finite tile set S, a measurable selector $N:\mathbb R\to\mathbb R$ and $f\in L^2$, define the finite model
$$C_{S,N}f(x)=\sum_{s\in S}\langle f,\phi_s\rangle\mathbf1_{\omega_{s,+}}(N(x))\phi_s(x).$$
The coefficients exist by Cauchy–Schwarz [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]] and Schwartz integrability. Each summand is measurable, the sum is finite and for fixed S,N it is linear in f. Its testing form for $|g|\le\mathbf1_E$, $m(E)<\infty$, is the sum of $\langle f,\phi_s\rangle\langle\mathbf1_{\omega_{s,+}}(N)\phi_s,g\rangle$; these integrals exist since the packets are integrable and g is bounded. These definitions do not assert orthogonality of overlapping packets.
