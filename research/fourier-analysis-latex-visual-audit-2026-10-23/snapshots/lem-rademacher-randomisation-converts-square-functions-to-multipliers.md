---
id: lem-rademacher-randomisation-converts-square-functions-to-multipliers
kind: lemma
title: "Rademacher randomisation turns dyadic square functions into random signed multipliers"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [thm-khintchine-inequality-for-finite-rademacher-sums, def-inhomogeneous-dyadic-frequency-partition, def-littlewood-paley-square-function, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-arithmetic-and-lattice-operations-preserve-measurability, def-rademacher-functions-on-the-unit-interval, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Corollary 5.8 (Khinchine's inequality for functions) and the alternate proof of Proposition 5.3, printed pp. 25-26"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Remark 5.6 and §5.3, the pointwise Khintchine inequality $|Sf|^p\\le E|\\sum_jr_j(P_jf)|^p$, printed pp. 17, 21-22"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "(6.1.2) and §6.1.1, the comparison with random signs, printed pp. 420-421"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). For every $0<p<\infty$
there are constants $0<c_p\le C_p<\infty$ depending only on $p$ with the
following property. For every finite set
$F\subset\{0,1,2,\dots\}$, every $f\in\mathcal S(\mathbb R^n)$ and every
$x\in\mathbb R^n$,
$$c_p\Bigl(\sum_{j\in F}|\Delta_jf(x)|^2\Bigr)^{1/2}\le\Bigl(\int_0^1\Bigl|\sum_{j\in F}\varepsilon_j(t)\Delta_jf(x)\Bigr|^pdt\Bigr)^{1/p}\le C_p\Bigl(\sum_{j\in F}|\Delta_jf(x)|^2\Bigr)^{1/2}.$$
Moreover, for every fixed $t\in[0,1)$ the finite sum
$\sum_{j\in F}\varepsilon_j(t)\Delta_jf$ equals the Fourier multiplier
$T_{m_{t,F}}f$ with symbol
$m_{t,F}:=\sum_{j\in F}\varepsilon_j(t)\varphi_j\in C_c^\infty(\mathbb R^n)$;
integrating the pointwise inequality in $x$ and using Tonelli gives, for every
$f\in\mathcal S$,
$$c_p^p\|S_Ff\|_p^p\le\int_0^1\|T_{m_{t,F}}f\|_p^pdt\le C_p^p\|S_Ff\|_p^p .$$
The same statements hold with $\Delta_j$ replaced by the companion operators
$\tilde\Delta_j$.

## Facts & Assumptions

**Given:** $0<p<\infty$, a finite set $F\subset\{0,1,2,\dots\}$, a Schwartz function $f\in\mathcal S(\mathbb R^n)$ and a point $x\in\mathbb R^n$; the fixed partition $(\varphi_j)$, operators $\Delta_j$ and kernels $K_j$ of [[def-inhomogeneous-dyadic-frequency-partition]]; the square function $S_Ff=\bigl(\sum_{j\in F}|\Delta_jf|^2\bigr)^{1/2}$ of [[def-littlewood-paley-square-function]].

[F1] Khintchine's inequality: for every finite sequence $(a_j)_{j\in J}$ of complex numbers and every $0<p<\infty$ there are $0<c_p\le C_p<\infty$, depending only on $p$, with $c_p(\sum_j|a_j|^2)^{1/2}\le(\int_0^1|\sum_j\varepsilon_j(t)a_j|^pdt)^{1/p}\le C_p(\sum_j|a_j|^2)^{1/2}$, and the constants are independent of $J$ ([[thm-khintchine-inequality-for-finite-rademacher-sums]], [[def-rademacher-functions-on-the-unit-interval]]).

[F2] For $f\in\mathcal S$ the operators act as $\Delta_jf=T_{\varphi_j}f=\mathcal F^{-1}(\varphi_j\widehat f)$, and $T$ is linear in the symbol: for smooth compactly supported symbols $m,n$ one has $T_m+T_n=T_{m+n}$ on $\mathcal S$. The finite sum $m_{t,F}:=\sum_{j\in F}\varepsilon_j(t)\varphi_j$ lies in $C_c^\infty(\mathbb R^n)$; if $F\ne\varnothing$, writing $j_F:=\max F$, its support is contained in $\{|\xi|\le2^{j_F+2}\}$, while for $F=\varnothing$ it is the zero symbol with empty support ([[def-inhomogeneous-dyadic-frequency-partition]]). For $f\in\mathcal S$, $T_{m_{t,F}}f$ is a Schwartz function and the multiplier action is convolution by the corresponding kernel.

[F3] $(t,x)\mapsto\sum_{j\in F}\varepsilon_j(t)\Delta_jf(x)$ is measurable on $[0,1)\times\mathbb R^n$: it is a finite sum of products of Borel functions of $t$ with continuous functions of $x$ ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]); hence $|{\cdot}|^p$ of it is nonnegative and product-measurable, and Tonelli's theorem applies, in particular $\int_0^1\int_{\mathbb R^n}|\cdot|^pdx\,dt=\int_{\mathbb R^n}\int_0^1|\cdot|^pdt\,dx$ ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Pointwise Khintchine. At the fixed point $x$ apply [F1] to the finite coefficient vector $a_j:=\Delta_jf(x)$, $j\in F$ (legitimate because the coefficients are complex numbers); this gives exactly the displayed pointwise two-sided inequality, with constants depending only on $p$ and not on $F$, $f$ or $x$. [F1, algebra]

1.2 The random sum is a multiplier. Fix $t\in[0,1)$. By [F2] each $\Delta_jf=T_{\varphi_j}f$ is in $\mathcal S$ and the multiplier map is linear in its symbol, so $\sum_{j\in F}\varepsilon_j(t)\Delta_jf=T_{m_{t,F}}f$ with $m_{t,F}=\sum_{j\in F}\varepsilon_j(t)\varphi_j\in C_c^\infty(\mathbb R^n)$; in particular $T_{m_{t,F}}f\in\mathcal S$ and $\int_{\mathbb R^n}|T_{m_{t,F}}f|^pdx<\infty$. [F2, algebra]

2.1 The integrated inequality. By [F3] the function $|{\sum_{j\in F}\varepsilon_j(t)\Delta_jf(x)}|^p$ is nonnegative and product-measurable, and $S_Ff$ is measurable by [[def-littlewood-paley-square-function]]; the pointwise inequality of step 1.1 passes to the $x$-integral, so $c_p^p\|S_Ff\|_p^p\le\int_{\mathbb R^n}\int_0^1|\sum_j\varepsilon_j(t)\Delta_jf(x)|^pdt\,dx\le C_p^p\|S_Ff\|_p^p$. Since the inner expression equals $|T_{m_{t,F}}f(x)|^p$ by step 1.2, Tonelli [F3] rewrites the middle term as $\int_0^1\|T_{m_{t,F}}f\|_p^pdt$; the quantities are finite because a finite sign vector takes only finitely many values, each corresponding random sum is Schwartz, and a finite sum of Schwartz moduli lies in $L^p$ for every $p>0$ by choosing decay exponent $M$ with $Mp>n$. [F3, step 1.1, step 1.2, algebra]

3.1 Companions. Replacing $K_j$ by $\tilde K_j$, $\varphi_j$ by $\tilde\varphi_j$ and $\Delta_j$ by $\tilde\Delta_j$ throughout, steps 1.1 to 2.1 apply verbatim with $S_F$ replaced by $\tilde S_Ff=\bigl(\sum_{j\in F}|\tilde\Delta_jf|^2\bigr)^{1/2}$, because the companion symbols are again compactly supported smooth functions and the Khintchine inequality is insensitive to the coefficients. [F1, F2, step 1.1, step 2.1, algebra] ∎
