---
id: ex-complex-mollification-by-components
kind: example
title: "Mollification of a complex two-step function"
status: draft
origin: pipeline
landmark: false
deps: [lem-complex-translation-and-approximate-identity-interfaces, thm-complex-holder-minkowski-and-the-quotient-norm, def-countable-choice, thm-lebesgue-measure-of-a-box-of-every-kind, thm-finite-and-countable-subadditivity-of-measures, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-integral-of-a-nonnegative-simple-function, prop-the-nonnegative-integral-agrees-with-the-simple-integral]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: "Compute interval integrals, localize the error to jump neighborhoods, and use continuity at zero for the infinity lower bound."
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "\u00a710.4, Lemmas 10.18\u201310.19; original interval calculation and endpoint warning."
---

## Example

Assume countable choice. Let $\rho\in C_c^\infty(\mathbb R;\mathbb R)$ be nonnegative, supported in $[-1,1]$, and satisfy $\int\rho=1$. Put $\rho_\varepsilon(x)=\varepsilon^{-1}\rho(x/\varepsilon)$ and $f=\mathbf1_{[0,1]}+i\mathbf1_{[1,2]}$. Then
$$(\rho_\varepsilon*f)(x)=\int_{x-1}^{x}\rho_\varepsilon(t)\,dt+i\int_{x-2}^{x-1}\rho_\varepsilon(t)\,dt.$$
This is smooth, is supported in $[-\varepsilon,2+\varepsilon]$, and tends to $f$ in each finite $L^p$, with
$$\|\rho_\varepsilon*f-f\|_p\le2(6\varepsilon)^{1/p}\qquad(1\le p<\infty,\ 0<\varepsilon<1/4).$$
Its essential-supremum error is at least $1/2$: every continuous function on $\mathbb R$ has essential-supremum distance at least $1/2$ from this $f$.

## Facts & Assumptions

**Given:** Countable choice, the specified real nonnegative mass-one smooth kernel, $\varepsilon>0$, and the displayed complex two-step function.

[F1] Real mollifiers smooth locally integrable complex inputs, send compactly supported inputs to compactly supported outputs, and their scalings have mass one ([[lem-complex-translation-and-approximate-identity-interfaces]]).

[F2] The complex Lp norm is the quantity $N_p$ induced by the modulus and is well-defined on a.e. classes ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F3] Under countable choice interval measures equal their lengths, including all endpoint conventions ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F4] A finite union has measure at most the sum of its component measures ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F5] The nonnegative integral is monotone and positively homogeneous ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F6] The simple integral is the value-weighted sum of the measures of disjoint fibers ([[def-integral-of-a-nonnegative-simple-function]]); on nonnegative simple functions it equals the nonnegative Lebesgue integral ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

## Verification

**Proof technique:** Compute interval integrals, localize the error to jump neighborhoods, and use continuity at zero for the infinity lower bound.

1.1 The input is bounded and supported in $[0,2]$, so F3 makes it integrable and locally integrable. In the convolution integral, $f(x-t)$ has real part one exactly for $t\in[x-1,x]$ and imaginary part one exactly for $t\in[x-2,x-1]$. Integrating the two components gives the displayed formula. Their common endpoint has measure zero by F3. F1 makes the output smooth. Since $\rho_\varepsilon$ vanishes outside $[-\varepsilon,\varepsilon]$, both integrals vanish for $x<-\varepsilon$ and for $x>2+\varepsilon$, proving the stated support inclusion. [F1, F3, given]

2.1 For $0<\varepsilon<1/4$, put $U=\bigcup_{a\in\{0,1,2\}}[a-\varepsilon,a+\varepsilon]$. Outside $U$, the entire interval $[x-\varepsilon,x+\varepsilon]$ stays in a constant region of $f$, so the unit kernel mass from F1 implies $(\rho_\varepsilon*f)(x)=f(x)$. Each component of the convolution is between zero and one, because $\rho_\varepsilon\ge0$ and its integral is one. The same is true for each component of $f$, including its value at the shared endpoint. Consequently the modulus error is at most $\sqrt2\le2$ everywhere and is zero outside $U$. F3–F4 give $\mu(U)\le6\varepsilon$. Since $|\rho_\varepsilon*f-f|^p\le2^p\mathbf1_U$, F5–F6 and the definition of $N_p$ in F2 give $\|\rho_\varepsilon*f-f\|_p^p\le2^p\mu(U)\le2^p6\varepsilon$. Taking p-th roots proves the bound, and its limit is zero for each fixed finite $p$. [F1, F2, F3, F4, F5, F6, step 1.1]

3.1 Let $h$ be any continuous complex function. If $\|h-f\|_\infty<1/2$, choose a real essential bound $a<1/2$ for the error. On $(-1/2,0)$ the function $f$ is zero, so $|h(x)|\le a$ a.e.; by continuity this inequality holds throughout that interval, since any failure persists on an open interval of positive measure by F3. Similarly $|h(x)-1|\le a$ throughout $(0,1/2)$. Taking the respective limits at zero gives $|h(0)|\le a$ and $|h(0)-1|\le a$, whence $1\le|h(0)|+|h(0)-1|\le2a<1$, a contradiction. Thus every such $h$ has error at least $1/2$, in particular the smooth function from step 1.1. [F3, step 1.1, assume-contra, discharge-contradiction] ∎
