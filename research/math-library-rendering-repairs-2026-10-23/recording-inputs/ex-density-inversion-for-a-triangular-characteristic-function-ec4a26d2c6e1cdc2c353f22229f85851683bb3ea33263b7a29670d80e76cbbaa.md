---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-density-inversion-for-a-triangular-characteristic-function.json
  precheck: pass
id: "ex-density-inversion-for-a-triangular-characteristic-function"
kind: "example"
title: "Density inversion for a triangular characteristic function"
deps: ["def-characteristic-function-of-a-real-random-variable", "cor-density-inversion-from-an-integrable-characteristic-function", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "thm-ftc-second-part", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "def-axiom-of-choice", "thm-sine-and-cosine-derivatives", "thm-integration-by-parts", "thm-integration-against-a-density", "lem-basic-properties-of-characteristic-functions", "thm-monotone-convergence-for-the-integral"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Assume AC. The triangular function $\tau(t)=(1-|t|)_+$ is the characteristic function of the probability density
$$f(x)=\frac{1-\cos x}{\pi x^2}\quad(x\ne0),\qquad f(0)=\frac1{2\pi}.$$
This value makes f continuous at zero.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] The characteristic function integrates the exponential componentwise. [[def-characteristic-function-of-a-real-random-variable]].

[F2] Inversion of an already known integrable characteristic function gives a continuous density. [[cor-density-inversion-from-an-integrable-characteristic-function]].

[F3] Nonnegative Borel densities define measures. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].

[F4] Compact primitive increments evaluate derivative integrals. [[thm-ftc-second-part]].

[F5] The compact bridge is available under countable choice. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F6] AC covers the bridge and density inversion. [[def-axiom-of-choice]].

[F7] The sine and cosine derivatives give their real primitives. [[thm-sine-and-cosine-derivatives]].

[F8] Compact integration by parts applies to continuously differentiable factors. [[thm-integration-by-parts]].

[F9] Nonnegative tests against a density integrate the product. [[thm-integration-against-a-density]].

[F10] Characteristic functions are continuous, bounded by one and normalized at zero. [[lem-basic-properties-of-characteristic-functions]].

[F11] Nonnegative expanding compact truncations recover their full integral. [[thm-monotone-convergence-for-the-integral]].

## Verification

**Proof technique:** direct.

1.1 First use $h(u)=(1-|u|)_+$ as a density in the space variable u. It is nonnegative Borel and $\int h=2\int_0^1(1-u)\,du=1$, so it defines a probability. Its characteristic function q has vanishing imaginary part by the oddness of $h(u)\sin(su)$. For $s\ne0$, integration by parts with $1-u$ and $\sin(su)/s$ yields $$q(s)=2\int_0^1(1-u)\cos(su)\,du=\frac2s\int_0^1\sin(su)\,du=\frac{2(1-\cos s)}{s^2}.$$ All factors and derivatives are continuous on $[0,1]$, so FTC and the bridge apply. Density integration is applied to the real and imaginary positive/negative parts. At s=0, q(0)=1, and continuity follows from the characteristic-function lemma. Thus q is nonnegative everywhere and bounded by one, with $q(s)\le4/s^2$ for $|s|\ge1$. The primitive $-1/s$ on $[1,R]$, the bridge and monotone convergence give $\int_1^\infty s^{-2}\,ds=1$; reflection gives the other tail. Hence q is integrable. [F1, F3, F4, F5, F7, F8, F9, F10, F11]

2.1 Apply density inversion to that probability with characteristic function q. It supplies the continuous density $H(y)=(2\pi)^{-1}\int e^{-isy}q(s)\,ds$. This equals h everywhere: if the two continuous densities differed at y, continuity would give a small interval where their difference had one strict sign, contradicting that both densities integrate to the same interval mass. In particular $1=h(0)=H(0)=(2\pi)^{-1}\int q$. Therefore $f=q/(2\pi)$ is nonnegative and integrates to one, so defines a probability. It has exactly the displayed formula and the continuous value $1/(2\pi)$ at zero. [step 1.1, F2, F3]

3.1 Density integration and the identity in step 2.1 now give $$\varphi_f(t)=\frac1{2\pi}\int e^{itx}q(x)\,dx=H(-t)=h(-t)=(1-|t|)_+.$$ This includes t=0 and both endpoints t=±1, where the value is zero; outside the closed interval it is zero as well. The density value at x=0 was fixed by continuity, not division by zero. AC is inherited from the compact bridge and density inversion. The argument applied inversion only to the known law h before establishing that the triangle is a characteristic function. [step 2.1, F1, F6, F9] ∎


## Remarks

The paired graphs distinguish the compactly supported characteristic function from its density, which has nonnegative oscillatory lobes extending beyond the displayed window. The Fourier convention is $\tau(t)=\int_{\mathbb R}e^{itx}f(x)\,dx$ and $f(x)=(2\pi)^{-1}\int_{\mathbb R}e^{-itx}\tau(t)\,dt$. The density graph uses the continuous value at zero; its other zeros are $x=2\pi k$ for nonzero integers $k$. The verification above is independent of this illustration.

```tikz
\begin{tikzpicture}[>=stealth,font=\small]
\begin{scope}[x=1.2cm,y=2.4cm]
\draw[->] (-1.8,0) -- (1.9,0) node[right] {$t$};
\draw[->] (0,-0.08) -- (0,1.25) node[above] {$\tau(t)$};
\draw[very thick,blue] (-1.7,0) -- (-1,0) -- (0,1) -- (1,0) -- (1.7,0);
\fill[blue] (-1,0) circle (1.5pt) (0,1) circle (1.5pt) (1,0) circle (1.5pt);
\node[below] at (-1,0) {$-1$};
\node[below right] at (0,0) {$0$};
\node[below] at (1,0) {$1$};
\node[left] at (0,1) {$1$};
\end{scope}
\begin{scope}[shift={(6.2cm,0)},x=1.1cm,y=2.4cm]
\draw[->] (-2.7,0) -- (2.8,0) node[right] {$x$};
\draw[->] (0,-0.08) -- (0,1.25) node[above] {$f(x)$};
\draw[very thick,blue] plot[domain=-2.5:-0.001,samples=220] (\x,{(sin(180*\x)/(pi*\x))^2});
\draw[very thick,blue] plot[domain=0.001:2.5,samples=220] (\x,{(sin(180*\x)/(pi*\x))^2});
\fill[blue] (0,1) circle (1.5pt);
\node[left] at (0,1) {$\frac{1}{2\pi}$};
\node[below right] at (0,0) {$0$};
\node[below] at (-2,0) {$-4\pi$};
\node[below] at (-1,0) {$-2\pi$};
\node[below] at (1,0) {$2\pi$};
\node[below] at (2,0) {$4\pi$};
\end{scope}
\end{tikzpicture}
```
