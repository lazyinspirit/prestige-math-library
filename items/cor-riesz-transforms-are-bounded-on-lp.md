---
id: cor-riesz-transforms-are-bounded-on-lp
kind: corollary
title: "The Riesz transforms are bounded on Lp"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [cor-riesz-transforms-are-ltwo-bounded, def-calderon-zygmund-kernel-and-principal-value-operator, def-countable-choice, def-hilbert-space-adjoint, def-riesz-transforms-on-euclidean-space, def-standard-holder-calderon-zygmund-kernel, lem-holder-cz-kernels-satisfy-hormander-cancellation, lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds, lem-riesz-transform-principal-value-kernel-formula, thm-calderon-zygmund-singular-integrals-are-bounded-on-lp, thm-plancherel, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-locally-integrable-functions-embed-in-distributions, thm-polar-coordinates-formula-for-lebesgue-measure]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§5.1.4, Definition 5.1.13 and Proposition 5.1.14, printed pp. 324–327; §5.3.2–5.3.3, Theorem 5.3.3, printed pp. 358–363"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 20, Proposition 20.3, printed pp. 113–117"
---

## Statement

Assume Countable Choice. Let $n\ge1$ and $1\le j\le n$. The $j$-th Riesz
transform $R_j$ of [[def-riesz-transforms-on-euclidean-space]] extends uniquely
to a bounded operator on $L^p(\mathbb R^n;\mathbb C)$ for every
$1<p<\infty$, with norm at most $C_{n,p}$, a constant depending only on $n$
and $p$: the Riesz kernel $K_j(x)=c_nx_j/|x|^{n+1}$ is a standard $1$-Hölder
Calderón–Zygmund kernel with constant $C_n=c_n2^{n+1}(3n+4)$, so that
$$\|R_jf\|_p\le C_{n,p}\bigl(1+|S^{n-1}|2^{-1}C_n\bigr) \max\bigl(p,(p-1)^{-1}\bigr)\|f\|_p \qquad(f\in L^p(\mathbb R^n;\mathbb C)).$$

## Facts & Assumptions

**Given:** Countable Choice; the dimension $n\ge1$ and index $1\le j\le n$; the Riesz kernel $K_j(x)=c_nx_j/|x|^{n+1}$ and operator $R_j$ of [[def-riesz-transforms-on-euclidean-space]]; a compactly supported $f\in L^2(\mathbb R^n;\mathbb C)$; a test function $\varphi\in C_c^\infty(\mathbb R^n)$ supported off $\operatorname{supp}f$.

[F1] $|K_j(x)|\le c_n|x|^{-n}$ for $x\ne0$; $|K_j(x-h)-K_j(x)|\le C_n|h|\,|x|^{-(n+1)}$ with $C_n=c_n2^{n+1}(3n+4)$ whenever $|h|\le|x|/2$; and $\int_{S^{n-1}}K_j(r\omega)\,d\sigma(\omega)=0$ for every $r>0$ ([[lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds]]).

[F2] For every Schwartz function $g$ the truncated integrals $\int_{|y|>\varepsilon}K_j(y)g(x-y)\,dy$ converge as $\varepsilon\downarrow0$ for every $x$, and the limit is a continuous representative of the $L^2$ class $R_jg$ ([[lem-riesz-transform-principal-value-kernel-formula]]).

[F3] $R_j$ is the $L^2$ Fourier multiplier with symbol $m_j(\xi)=-i\xi_j/|\xi|$ for $\xi\ne0$ and $m_j(0)=0$, is bounded with $\|R_jg\|_2\le\|g\|_2$ for all $g\in L^2$, and satisfies $\langle R_jf,g\rangle=\int m_j\widehat f\,\overline{\widehat g}$ for the first-variable-linear pairing $\langle u,v\rangle=\int u\overline v$ ([[def-riesz-transforms-on-euclidean-space]], [[cor-riesz-transforms-are-ltwo-bounded]], [[thm-plancherel]], [[def-hilbert-space-adjoint]]).

[F4] A pointwise bound $|k|\le c|\cdot|^{-n}$ implies the annular condition with $A_1=c|S^{n-1}|\log2$; a standard $\delta$-Hölder kernel with constant $A_2'$ is a Calderón–Zygmund kernel with Hörmander constant $A_2=|S^{n-1}|2^{-\delta}\delta^{-1}A_2'$; and a Calderón–Zygmund operator with constants $A_1,A_2$ and $L^2$ norm $B$ extends uniquely to a bounded operator on $L^p$ for $1<p<\infty$ with $\|Tg\|_p\le C_{n,p}(A_2+B)\max(p,(p-1)^{-1})\|g\|_p$ ([[def-calderon-zygmund-kernel-and-principal-value-operator]], [[def-standard-holder-calderon-zygmund-kernel]], [[lem-holder-cz-kernels-satisfy-hormander-cancellation]], [[thm-calderon-zygmund-singular-integrals-are-bounded-on-lp]]).



[F5] Fubini interchanges absolutely integrable complex double integrals, and locally integrable functions with equal distribution pairings agree almost everywhere. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-locally-integrable-functions-embed-in-distributions]])

[F6] Under Countable Choice, for every nonnegative Borel function $g$, $\int_{\mathbb R^n}g(x)\,dx=\int_0^\infty\int_{S^{n-1}}g(r\omega)r^{n-1}\,d\sigma(\omega)\,dr$, with $\sigma$ a finite Borel measure. ([[thm-polar-coordinates-formula-for-lebesgue-measure]])

## Proof

**Proof technique:** direct.

1.1 The published estimates give the size bound $|K_j(x)|\le c_n|x|^{-n}$, the first-difference bound $|K_j(x-h)-K_j(x)|\le C_n|h||x|^{-(n+1)}$ for $|h|\le|x|/2$, and the vanishing of every spherical mean. The explicit kernel is smooth on the punctured space, hence Borel measurable and locally integrable there. [F1, given]

1.2 $R_j$ is $L^2$-bounded with $\|R_jg\|_2\le\|g\|_2$, since $|m_j|\le1$ and the $L^2$ multiplier bound gives $\|R_j\|\le1$; hence $B=1$ is an admissible $L^2$ norm bound. Moreover $R_j$ is skew-adjoint: for $f,g\in L^2$, $\langle R_jf,g\rangle=\int m_j\widehat f\,\overline{\widehat g}=\int\widehat f\,\overline{(-m_j)\widehat g}=\langle f,-R_jg\rangle$, because $\overline{m_j}=-m_j$ for the purely imaginary symbol; that is, $R_j^*=-R_j$. [F3, given, algebra]

2.1 By [F6], the size bound gives $\int_{R\le|x|\le2R}|K_j(x)|\,dx\le c_n|S^{n-1}|\int_R^{2R}dr/r=c_n|S^{n-1}|\log2$. For every $h\ne0$, directly integrating the difference bound gives $\int_{|x|\ge2|h|}|K_j(x-h)-K_j(x)|\,dx\le C_n|h||S^{n-1}|\int_{2|h|}^\infty r^{-2}dr=|S^{n-1}|C_n/2$. Thus $K_j$ is a base Calderón–Zygmund kernel with $A_1=c_n|S^{n-1}|\log2$ and $A_2=|S^{n-1}|C_n/2$; its first-difference estimate now establishes standard $1$-Hölder status with $A_2'=C_n$. [F1, F4, F6, step 1.1, algebra]

2.2 Off-support representation: let $f\in L^2$ be compactly supported, let $\varphi\in C_c^\infty$ be supported off $\operatorname{supp}f$, and put $d:=\operatorname{dist}(\operatorname{supp}f,\operatorname{supp}\varphi)>0$. Using the adjoint identity of [F3], skew-adjointness from step 1.2 and the Schwartz principal-value formula [F2], and writing $K_j$ for the real-valued kernel, $$\langle R_jf,\varphi\rangle=\langle f,R_j^*\varphi\rangle=-\int f(y)\overline{R_j\varphi(y)}\,dy=-\iint K_j(y-x)f(y)\overline{\varphi(x)}\,dx\,dy=\iint K_j(x-y)f(y)\overline{\varphi(x)}\,dx\,dy,$$ where $\overline{R_j\varphi(y)}=\lim_{\varepsilon\downarrow0}\int_{|y-x|>\varepsilon}K_j(y-x)\overline{\varphi(x)}\,dx$ is an absolutely convergent integral on the two supports (there $|x-y|\ge d>0$, so the limit may be taken inside the $y$-integration), Fubini applies over the bounded supports, and the last step uses the oddness $K_j(-z)=-K_j(z)$. Since this holds for every test function supported off $\operatorname{supp}f$, the $L^2$ class $R_jf$ agrees almost everywhere off $\operatorname{supp}f$ with the locally integrable function $x\mapsto\int K_j(x-y)f(y)\,dy$; this is the off-support representation (3) required of a Calderón–Zygmund operator. [F2, F3, step 1.2, algebra, F5]

3.1 By steps 2.1, 1.2 and 2.2 the operator $R_j$ is a standard-kernel Calderón–Zygmund operator with annular constant $c_n|S^{n-1}|\log2$, Hörmander constant $|S^{n-1}|2^{-1}C_n$ and $L^2$ norm $B=1$; the strict-range theorem [F4] therefore gives its unique extension to a bounded operator on $L^p(\mathbb R^n;\mathbb C)$, $1<p<\infty$, with $\|R_jf\|_p\le C_{n,p}(1+|S^{n-1}|2^{-1}C_n)\max(p,(p-1)^{-1})\|f\|_p$. This is the assertion. [F4, step 2.1, step 1.2, step 2.2] ∎
