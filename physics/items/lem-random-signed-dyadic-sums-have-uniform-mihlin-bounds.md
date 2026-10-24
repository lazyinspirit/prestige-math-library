---
id: lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds
kind: lemma
title: "Random signed dyadic sums have uniform Mihlin and Lp multiplier bounds"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition, def-inhomogeneous-dyadic-frequency-partition, def-mihlin-symbol-with-more-than-half-dimension-derivatives, thm-mihlin-fourier-multiplier-theorem, def-lp-fourier-multiplier-and-multiplier-norm, def-translation-invariant-fourier-multiplier-on-schwartz-space, def-countable-choice]
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
      locator: "§5.5, 'for arbitrary choices of signs $\\epsilon_j$, the sum $\\sum_j\\epsilon_j\\psi_j$ obeys the homogeneous symbol estimates of order 0', printed pp. 25-26"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 6.2.7 with the dyadic symbol estimates, printed pp. 445-447"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Lemma 5.14 and §5.3, the transference/Mihlin route to the $L^p$ theorem, printed pp. 21-22"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). For every sequence
$(c_j)_{j\ge0}$ of complex numbers with $|c_j|\le1$ the symbol
$$m:=\sum_{j\ge0}c_j\varphi_j$$
of [[def-inhomogeneous-dyadic-frequency-partition]] is a Mihlin symbol with
constants $C_\alpha\le A_\alpha(n,\psi)$ for
$|\alpha|\le\lfloor n/2\rfloor+1$, where $A_\alpha$ does not depend on the
coefficients and the series is locally finite. Consequently, for every
$1<p<\infty$ and every $f\in L^p(\mathbb R^n;\mathbb C)$,
$$\|T_mf\|_p\le C_{n,\psi}\max\bigl(p,(p-1)^{-1}\bigr)\|f\|_p$$
with $C_{n,\psi}$ independent of the coefficients. In particular the bound is
uniform over all sign sequences $c_j=\pm1$ and over all finite truncations,
that is over $\sum_{j<N}\varepsilon_j\varphi_j$ for every $N$ and every choice
of signs.

## Facts & Assumptions

**Given:** the fixed partition $(\varphi_j)$ of [[def-inhomogeneous-dyadic-frequency-partition]]; a sequence $(c_j)$ with $|c_j|\le1$; $q:=\lfloor n/2\rfloor+1$; a real $1<p<\infty$.

[F1] Each $\varphi_j\in C_c^\infty(\mathbb R^n)$ satisfies $0\le\varphi_j\le1$, $\sum_j\varphi_j=1$ with a locally finite sum, $\operatorname{supp}\varphi_j\subset\{2^{j-1}\le|\xi|\le2^{j+1}\}$ for $j\ge1$ and $\operatorname{supp}\varphi_0\subset\{|\xi|\le2\}$; for every multi-index $\alpha$ there is $C_\alpha<\infty$ with $|\partial^\alpha\varphi_j(\xi)|\le C_\alpha2^{-j|\alpha|}$ for $j\ge1$ and all $\xi$, with $|\partial^\alpha\varphi_0(\xi)|\le C_\alpha$ ([[lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition]], [[def-inhomogeneous-dyadic-frequency-partition]]).

[F2] Mihlin's theorem: if $m$ is a Mihlin symbol with constants $C_\alpha$ and $A:=\max_{|\alpha|\le q}C_\alpha$, then $m$ is an $L^p$ Fourier multiplier and $\|m\|_{M_p}\le C_n\max(p,(p-1)^{-1})(A+\|m\|_\infty)$ ([[def-mihlin-symbol-with-more-than-half-dimension-derivatives]], [[thm-mihlin-fourier-multiplier-theorem]], [[def-lp-fourier-multiplier-and-multiplier-norm]], [[def-translation-invariant-fourier-multiplier-on-schwartz-space]]).

## Proof

**Proof technique:** direct.

1.1 The symbol is well defined and bounded. At each fixed $\xi$ at most three of the numbers $\varphi_j(\xi)$ are nonzero by [F1], so the series $m(\xi)=\sum_jc_j\varphi_j(\xi)$ is actually a finite sum at every point and converges locally uniformly to a smooth function; and $|m(\xi)|\le\sum_j\varphi_j(\xi)=1$ because $|c_j|\le1$ and $\varphi_j\ge0$. [F1, algebra]

2.1 Uniform Mihlin constants. For $\alpha=0$ step 1.1 gives $|m|\le1$, which is the required degree-zero bound with constant $1$. Fix $\alpha$ with $1\le|\alpha|\le q$ and $\xi\ne0$, and put $k:=|\alpha|$. By [F1], $|\partial^\alpha m(\xi)|\le\sum_{j\ge0}|\partial^\alpha\varphi_j(\xi)|$. If the $j=0$ derivative is nonzero, then $|\xi|\le2$, so $|\xi|^k|\partial^\alpha\varphi_0(\xi)|\le2^kC_\alpha$. For $j\ge1$, a nonzero derivative requires $2^{j-1}\le|\xi|\le2^{j+1}$; at most three integers $j$ satisfy both inequalities. On each such annulus, [F1] gives $|\xi|^k|\partial^\alpha\varphi_j(\xi)|\le|\xi|^k C_\alpha2^{-jk}\le2^kC_\alpha$. Therefore $|\xi|^k|\partial^\alpha m(\xi)|\le4\cdot2^kC_\alpha$, which is the required homogeneous Mihlin estimate. Thus $m$ is a Mihlin symbol with constants $A_0:=1$ and $A_\alpha:=4\cdot2^{|\alpha|}C_\alpha$ for $1\le|\alpha|\le q$, depending only on $n,\psi,\alpha$, uniformly in the coefficients. [F1, step 1.1, algebra]

3.1 Uniform $L^p$ bounds. By step 2.1 the symbol $m$ is Mihlin with $A:=\max_{|\alpha|\le q}A_\alpha$ and, by step 1.1, $\|m\|_\infty\le1$; [F2] therefore gives the $L^p$ multiplier bound $\|T_mf\|_p\le C_n\max(p,(p-1)^{-1})(A+1)\|f\|_p$ for every $f\in L^p$, with constants depending only on $n,\psi,p$. [F2, step 1.1, step 2.1, algebra]

4.1 Truncations and signs. A finite truncation $\sum_{j<N}\varepsilon_j\varphi_j$ is the symbol $m$ for the sequence $c_j=\varepsilon_j\mathbf 1_{j<N}$, which again satisfies $|c_j|\le1$; the bound of step 3.1 therefore applies to all such truncations and to all sign sequences $c_j=\pm1$, with the same constant $C_{n,\psi}$. [step 3.1, algebra] ∎
