---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-indicator-of-the-unit-interval-convolved-with-itself-is-the-tent-function.json
  precheck: pass
id: ex-indicator-of-the-unit-interval-convolved-with-itself-is-the-tent-function
kind: example
title: "$\\mathbf{1}_{[0,1]} * \\mathbf{1}_{[0,1]}$ is the tent function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Example

Let $f := \mathbf{1}_{[0,1]}$ on $\mathbb{R}$. Then

$$ (f*f)(x) = \int_{\mathbb{R}} \mathbf{1}_{[0,1]}(x-y)\mathbf{1}_{[0,1]}(y)\,dy $$

is the tent function

$$ (f*f)(x)= \begin{cases} 0,& x \le 0,\\ x,& 0 \le x \le 1,\\ 2-x,& 1 \le x \le 2,\\ 0,& x \ge 2. \end{cases} $$

## Facts & Assumptions

**Given:** The indicator $f=\mathbf{1}_{[0,1]}$.

## Verification

**Proof technique:** direct.

1.1 For fixed $x$, the integrand is $1$ exactly when $y \in [0,1] \cap [x-1,x]$ and zero otherwise. This bounded-support integrand is integrable for every $x$, and $(f*f)(x)$ is the length of that overlap interval. [given, algebra]

2.1 If $0 \le x \le 1$, the overlap is $[0,x]$, so $(f*f)(x)=x$. If $1 \le x \le 2$, the overlap is $[x-1,1]$, so $(f*f)(x)=2-x$. For $x \le 0$ or $x \ge 2$, there is no overlap, so $(f*f)(x)=0$. [step 1.1, algebra]

3.1 The explicit formula is positive precisely on $(0,2)$, so its support is $[0,2]=[0,1]+[0,1]$, as claimed by the displayed tent function. [step 2.1] ∎

## Remarks

The graph below illustrates the displayed formula: the convolution vanishes outside $[0,2]$, rises to $1$ at $x=1$, and then falls to zero.

```tikz
\begin{tikzpicture}[x=2cm,y=2cm]
  \draw[->] (-0.5,0) -- (2.7,0) node[right] {$x$};
  \draw[->] (0,-0.18) -- (0,1.4) node[above] {$(f*f)(x)$};
  \draw[very thick,blue] (-0.4,0) -- (0,0) -- (1,1) -- (2,0) -- (2.5,0);
  \draw[dashed,gray] (1,0) -- (1,1) -- (0,1);
  \node[below left] at (0,0) {$0$};
  \draw (1,0.04) -- (1,-0.04) node[below] {$1$};
  \draw (2,0.04) -- (2,-0.04) node[below] {$2$};
  \node[left] at (0,1) {$1$};
  \fill[blue] (1,1) circle (1.5pt);
\end{tikzpicture}
```
