---
id: def-riesz-transforms-on-euclidean-space
kind: definition
title: Riesz transforms on Euclidean space
status: draft
origin: pipeline
deps: [lem-ltwo-fourier-multiplier-bound, thm-plancherel, def-real-gamma-function-by-the-euler-integral, thm-real-gamma-euler-integral-convergence, thm-real-gamma-functional-equation, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 5.1.4, Definition 5.1.13 and Proposition 5.1.14, printed pp. 324-326"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 20, Definition 20.1 and Proposition 20.3, printed pp. 113-116"
---

## Definition

Assume [[def-countable-choice|Countable Choice]], let $n\ge1$, and let
$1\le j\le n$. On $L^2(\mathbb R^n;\mathbb C)$ define the $j$-th **Riesz
transform** $R_j$ by its Fourier multiplier

$$m_j(\xi):=\begin{cases}-i\,\xi_j/|\xi|,&\xi\ne0,\\0,&\xi=0,\end{cases}\qquad \widehat{R_jf}=m_j\,\widehat f ,$$

where the Fourier transform is the unitary Plancherel extension $\mathcal F_2$
of [[thm-plancherel]] and the multiplier acts by
$R_j=\mathcal F_2^{-1}M_{m_j}\mathcal F_2$. The symbol $m_j$ is measurable and
$|m_j(\xi)|\le1$ for every $\xi$ on account of $|\xi_j|\le|\xi|$, so the
published $L^2$ multiplier theorem
[[lem-ltwo-fourier-multiplier-bound]] applies with essential supremum at most
one: $R_j$ is a well-defined bounded complex-linear operator on
$L^2(\mathbb R^n)$, it depends only on the almost-everywhere class of $m_j$,
and in particular the assigned value $m_j(0)=0$ has no effect on the operator.
The theorem also identifies $R_j$ on Schwartz functions with the regular
distribution of $\mathcal F_2^{-1}(m_j\mathcal F_2f)$, and gives $\|R_j\|\le1$.

The **Riesz kernel** attached to this definition is the function on
$\mathbb R^n\setminus\{0\}$

$$K_j(x):=c_n\,\frac{x_j}{|x|^{n+1}},\qquad c_n:=\frac{\Gamma\bigl((n+1)/2\bigr)}{\pi^{(n+1)/2}} ,$$

with [[def-real-gamma-function-by-the-euler-integral|$\Gamma$]] the Euler
integral. Since $(n+1)/2>0$, the published convergence theorem
[[thm-real-gamma-euler-integral-convergence]] gives $0<\Gamma((n+1)/2)<\infty$,
so $c_n$ is a positive finite constant and $K_j$ is a smooth function on
$\mathbb R^n\setminus\{0\}$, odd under $x\mapsto-x$ and homogeneous of degree
$-n$: $K_j(tx)=t^{-n}K_j(x)$ for $t>0$.

This definition asserts only the multiplier description. It does not assert
that the principal value $\lim_{\varepsilon\downarrow0}\int_{|y|>\varepsilon}
K_j(y)f(x-y)\,dy$ exists for any particular $f$ or $x$; that statement is
proved separately for Schwartz functions, as is the identification of the limit
with the $L^2$ class $R_jf$. In dimension $n=1$ the constant collapses to
$c_1=\Gamma(1)/\pi=1/\pi$, by the value $\Gamma(1)=1$ of
[[thm-real-gamma-functional-equation]], and $K_1(x)=1/(\pi x)$ is the
line Hilbert kernel; the comparison of $R_1$ with the Hilbert transform of the
line is worked out on the examples page. The Fourier convention is the
$e^{-2\pi ix\cdot\xi}$ convention of $\mathcal F_2$. Replacing its phase by
$e^{-ix\cdot\xi}$ leaves both $m_j$ and $c_n$ unchanged: the frequency
rescaling $\xi\mapsto\xi/(2\pi)$ preserves $\xi_j/|\xi|$.
