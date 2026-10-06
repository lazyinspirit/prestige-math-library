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
      - research/frontier-38-owner-30-step7-v2/step7-v2-impact-initial-r1-u3.json
      - research/frontier-38-owner-30-dispatch/alpha-repair-step7-v2-impact-initial-r1-u3.result.json
id: ex-riesz-transform-as-a-standard-calderon-zygmund-operator
kind: example
title: "The Riesz kernel is a standard Calderón–Zygmund kernel"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [cor-riesz-transforms-are-ltwo-bounded, def-calderon-zygmund-kernel-and-principal-value-operator, def-countable-choice, def-hilbert-space-adjoint, def-riesz-transforms-on-euclidean-space, def-standard-holder-calderon-zygmund-kernel, thm-polar-coordinates-formula-for-lebesgue-measure, lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds, lem-riesz-transform-principal-value-kernel-formula, thm-plancherel, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-locally-integrable-functions-embed-in-distributions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§5.1.4, Definition 5.1.13, Proposition 5.1.14 and the estimates in its proof, printed pp. 324–327"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 20, Proposition 20.3, printed pp. 113–117"
---

## Example

Assume Countable Choice. For $n\ge1$ and $1\le j\le n$ the Riesz kernel
$K_j(x)=c_nx_j/|x|^{n+1}$ satisfies the pointwise size bound
$|K_j(x)|\le c_n|x|^{-n}$, the $\delta=1$ first-difference bound on
$|x|\ge2|y|>0$, and the zero spherical-mean estimate; the Riesz transform $R_j$
is $L^2$-bounded and the published principal-value formula identifies its
truncations on Schwartz functions. Hence $R_j$ is a standard-kernel
Calderón–Zygmund operator in the sense of this page.

## Facts & Assumptions

**Given:** Countable Choice; the integer $n\ge1$ and index $1\le j\le n$; a compactly supported $f\in L^2$ and a test function $\varphi\in C_c^\infty$ supported off $\operatorname{supp}f$.

[F1] $K_j(x)=c_nx_j/|x|^{n+1}$ satisfies $|K_j(x)|\le c_n|x|^{-n}$; $|K_j(x-h)-K_j(x)|\le C_n|h||x|^{-(n+1)}$ whenever $x\ne0$ and $|h|\le|x|/2$; and $\int_{S^{n-1}}K_j(r\omega)d\sigma(\omega)=0$ for every $r>0$ ([[lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds]]).

[F2] For every Schwartz function $g$ the truncated integrals $\int_{|y|>\varepsilon}K_j(y)g(x-y)dy$ converge as $\varepsilon\downarrow0$ to a continuous representative of the $L^2$ class $R_jg$, for every $x$ ([[lem-riesz-transform-principal-value-kernel-formula]]).

[F3] $R_j$ is the $L^2$ Fourier multiplier with symbol $m_j(\xi)=-i\xi_j/|\xi|$ for $\xi\ne0$, $\|R_jf\|_2\le\|f\|_2$, and Plancherel's theorem identifies the pairing $\langle R_jf,g\rangle$ with $\int m_j\widehat f\,\overline{\widehat g}$ for the first-variable-linear pairing ([[def-riesz-transforms-on-euclidean-space]], [[cor-riesz-transforms-are-ltwo-bounded]], [[thm-plancherel]], [[def-hilbert-space-adjoint]]).

[F4] A Calderón–Zygmund kernel is a measurable $k$ on $\mathbb R^n\setminus\{0\}$, locally integrable there, with finite annular constant and finite Hörmander constant; a pointwise bound $|k|\le c|\cdot|^{-n}$ implies the annular condition with $A_1=c|S^{n-1}|\log2$; a Calderón–Zygmund operator is an $L^2$-bounded linear operator satisfying the off-support kernel representation for compactly supported $L^2$ inputs ([[def-calderon-zygmund-kernel-and-principal-value-operator]], [[def-standard-holder-calderon-zygmund-kernel]], [[thm-polar-coordinates-formula-for-lebesgue-measure]]). Polar coordinates give $\int_{|x|\ge a}|x|^{-n-1}dx=|S^{n-1}|/a$ for $a>0$.

[F5] Fubini interchanges absolutely integrable complex double integrals, and locally integrable functions with equal distribution pairings agree almost everywhere. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-locally-integrable-functions-embed-in-distributions]])

## Verification

**Proof technique:** direct.

1.1 The published estimates give exactly the size bound $|K_j(x)|\le c_n|x|^{-n}$, the $\delta=1$ first-difference bound in the regime $|x|\ge2|h|>0$ with constant $A_2'=C_n$, and the vanishing of all spherical means of $K_j$. The formula for $K_j$ makes it smooth, hence measurable and locally integrable, off the origin. [F1, F3, given]

1.2 $R_j$ is $L^2$-bounded with norm at most one, since its symbol $m_j$ is measurable with $|m_j|\le1$ on $\{\xi\ne0\}$ and the Plancherel multiplier bound gives $\|R_j\|\le\|m_j\|_\infty\le1$; thus $B=1$ is an admissible $L^2$ norm bound. [F3, given]

1.3 $R_j$ is skew-adjoint: for $f,g\in L^2$, $\langle R_jf,g\rangle=\int m_j\widehat f\overline{\widehat g}=\int\widehat f\overline{(-m_j)\widehat g}=\langle f,-R_jg\rangle$, because $\overline{m_j}=-m_j$ for the purely imaginary symbol; hence $R_j^*=-R_j$. [F3, given, algebra]

2.1 The pointwise size bound gives the annular condition with $A_1=c_n|S^{n-1}|\log2$. For every $h\ne0$, integrating the raw difference bound in [F1] and using polar coordinates yields $$\int_{|x|\ge2|h|}|K_j(x-h)-K_j(x)|\,dx\le C_n|h|\int_{|x|\ge2|h|}|x|^{-n-1}dx=C_n|h|\,\frac{|S^{n-1}|}{2|h|}=\frac12C_n|S^{n-1}|.$$ Thus Hörmander's condition holds with $A_2=|S^{n-1}|2^{-1}C_n$. Together with step 1.1 this proves that $K_j$ is a Calderón–Zygmund kernel, and its raw first-difference bound now makes it standard $1$-Hölder with constant $C_n$. [F1, F4, step 1.1, algebra]

2.2 Let $f\in L^2$ have compact support and let $\varphi\in C_c^\infty$ be supported off it. If either is zero the formula is immediate; otherwise the supports have distance $d>0$. By skew-adjointness and [F2], $\int(R_jf)\varphi=\langle R_jf,\overline\varphi\rangle=-\int f(y)\overline{R_j\overline\varphi(y)}\,dy=-\iint K_j(y-x)f(y)\varphi(x)\,dx\,dy=\iint K_j(x-y)f(y)\varphi(x)\,dx\,dy$. The kernel is real and odd, and the positive separation and bounded supports make the double integral absolutely convergent. Fubini and injectivity of locally integrable distribution pairings identify $R_jf$ almost everywhere off its support with $\int K_j(x-y)f(y)\,dy$. [F1, F2, F3, step 1.3, algebra, F5]

3.1 Steps 2.1, 1.2 and 2.2 verify the annular and Hörmander bounds for $K_j$, the $L^2$ bound for $R_j$ and the off-support representation for compactly supported $L^2$ inputs; by steps 1.1 and 2.1 the kernel is standard $1$-Hölder. Therefore $R_j$ is a standard-kernel Calderón–Zygmund operator in the sense of the base definition and the standard-kernel definition. [F4, step 1.1, step 2.1, step 1.2, step 2.2] ∎
