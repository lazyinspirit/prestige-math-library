---
id: def-weiss-smoothed-mellin-kernel
kind: definition
title: Weiss compactly supported smoothing kernel and Mellin transform
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-natural-logarithm
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-l-one-fourier-inversion
  - thm-residue-theorem-null-homologous-cycle
  - def-countable-choice
proof_strategy: direct
axiom_use: Countable Choice is used only through the stated L1 Fourier-inversion supplier; finite convolution and support arguments are choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: A. R. Weiss, The least prime ideal
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
      locator: §3, printed pp. 68–70, the smoothing function η_k, transforms h_k and H_k, Lemmas 3.1–3.3.
    - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the Chebotarev density theorem
      url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
      locator: §4A, Lemma 4.3 and proof, printed pp. 1156–1157.
---

## Definition

Let $A>0$. Define $\eta_{1,A}:\mathbb R\to\mathbb R$ by
$$\eta_{1,A}(x)= \begin{cases} A/2,& |x|<A^{-1},\\ A/4,& |x|=A^{-1},\\ 0,& |x|>A^{-1}. \end{cases}$$
For an integer $k\ge2$, define convolution recursively by
$$\eta_{k,A}(x)=(\eta_{1,A}*\eta_{k-1,A})(x) =\int_{\mathbb R}\eta_{1,A}(x-u)\eta_{k-1,A}(u)\,du.$$
For $y>0$ and $s\in\mathbb C$, put
$$H_{k,A}(y)=\eta_{k,A}(\log y),\qquad h_{k,A}(s)=\int_{\mathbb R}\eta_{k,A}(x)e^{-sx}\,dx.$$
All integrals are Lebesgue integrals. The value assigned to $\eta_{1,A}$ at its two endpoints does not affect any convolution or transform.

## Definition references

[[def-natural-logarithm|Natural logarithm on positive reals]]

[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces|Fubini for integrable functions]]

[[thm-l-one-fourier-inversion|L1 Fourier inversion]]

[[thm-residue-theorem-null-homologous-cycle|Residue theorem for contours]]

## Remark

For every integer $k\ge2$, real $t$, and $A>0$ with $|t|\le A/\sqrt{k}$, the transform satisfies $h_{k,A}(it)\ge4/5$.

## Facts & Assumptions

**Given:** Countable Choice, $A>0$, an integer $k\ge1$, and the functions defined above.

[F1] If $f\in L^1(\mathbb R)$ and its Fourier transform $\widehat f(t)=\int_{\mathbb R}f(x)e^{-2\pi ixt}\,dx$ is in $L^1$, then the inverse Fourier integral equals $f$ at each Lebesgue point. [[thm-l-one-fourier-inversion]]

[F2] For an $L^1$ function on a product of sigma-finite measure spaces, both iterated integrals equal the product-space integral. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F3] The real natural logarithm is the inverse of the exponential map from $\mathbb R$ to $(0,\infty)$. [[def-natural-logarithm]]

[F4] The integral of a meromorphic function over an admissible cycle equals $2\pi i$ times the sum of its residues weighted by winding numbers. [[thm-residue-theorem-null-homologous-cycle]]

[A1] Countable Choice is assumed only to apply the L1 Fourier-inversion supplier; the kernel definition and finite convolution are choice-free. [[def-countable-choice]]

## Verification

**Given:** The definitions and facts above.

1.1 The function $\eta_{1,A}$ is nonnegative, supported in $[-A^{-1},A^{-1}]$, and has integral $(A/2)(2/A)=1$. Inductively, convolution preserves nonnegativity and total integral by [F2], adds support intervals, and satisfies $\|\eta_{k,A}\|_\infty\le\|\eta_{1,A}\|_\infty\|\eta_{k-1,A}\|_1=A/2$. Therefore $\eta_{k,A}$ is supported in $[-k/A,k/A]$, has integral $1$, and is bounded by $A/2$. It is even because both factors are even. [F2, given, algebra]

1.2 Direct integration gives $h_{1,A}(s)=\sinh(s/A)/(s/A)$ with value $1$ at $s=0$. Compact support permits differentiation under the integral, so every $h_{k,A}$ is entire. Fubini in [F2] applied to the compactly supported product gives $h_{k,A}(s)=h_{1,A}(s)^k$. The inequality $|\sinh(\sigma+it)|^2=\sinh^2\sigma+\sin^2t$ and $|\sin t|\le|t|$ imply $$|h_{1,A}(\sigma+it)|\le\frac{\sinh(|\sigma|/A)}{|\sigma|/A}.$$ For $0\le x\le1$, the power series gives $\sinh(x)/x\le1+x^2/5$, since $\sum_{j\ge1}(2j+1)!^{-1}<1/5$. Consequently $|h_{k,A}(s)|\le(1+1/(5k))^k\le e^{1/5}$ whenever $|\operatorname{Re}s|\le A/\sqrt{k}$. Also $|h_{1,A}(s)|\le A|s|^{-1}e^{|\operatorname{Re}s|/A}$ for $s\ne0$. [F2, given, algebra]

1.3 For $|s|\le A$, the power series gives $$|h_{1,A}(s)-1| \le \sum_{j\ge1}\frac{|s/A|^{2j}}{(2j+1)!} \le \frac15\frac{|s|^2}{A^2}.$$ Consequently, if $k\ge2$ and $|\operatorname{Im}s|\le A/\sqrt{k}$ on the imaginary axis, then $$|h_{k,A}(s)|=|h_{1,A}(s)|^k \ge(1-1/(5k))^k \ge 1-k/(5k)=4/5.$$ The last inequality is Bernoulli's inequality. [given, algebra]

2.1 For $k\ge2$, $\eta_{k,A}$ is continuous: translation continuity of the $L^1$ function $\eta_{1,A}$ and the boundedness of $\eta_{k-1,A}$ from step 1.1 give continuity of their convolution. On the imaginary axis, $$|h_{k,A}(it)|\le\min\{1,(A/|t|)^k\},$$ so $t\mapsto h_{k,A}(it)$ is integrable. Apply [F1] to $\eta_{k,A}$; every point is a Lebesgue point by continuity. Under the change of variables $t=2\pi\xi$ in [F1], and with $x=\log y$, this gives $$H_{k,A}(y)=\frac1{2\pi i}\int_{-i\infty}^{i\infty}h_{k,A}(s)y^s\,ds.$$ For any fixed real $c$, shift this contour to $\operatorname{Re}s=c$; $h_{k,A}$ is entire and the horizontal integrals tend to zero by the $O(|\operatorname{Im}s|^{-k})$ bound from step 1.2. [F1, step 1.1, step 1.2, F4, algebra]

3.1 The support statement for $\eta_{k,A}$ and [F3] show that $H_{k,A}(y)=0$ unless $e^{-k/A}\le y\le e^{k/A}$. Thus $H_{k,A}$ is compactly supported in $(0,\infty)$, nonnegative, and $\int_0^\infty H_{k,A}(y)\,dy/y=1$ by the change of variables $y=e^x$. This verifies the stated transforms and the smoothing properties used below. [F3, step 1.1, given, algebra] ∎

## Proof status

The finite convolution, transform, and inversion properties are proved locally. The source's use of this kernel in the assigned mean-square and large-sieve theorems is recorded separately; this definition does not supply their analytic contour estimates.
