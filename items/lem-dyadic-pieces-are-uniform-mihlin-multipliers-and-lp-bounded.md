---
id: lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded
kind: lemma
title: "Dyadic pieces are uniformly Mihlin multipliers and uniformly Lp-bounded"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition, def-inhomogeneous-dyadic-frequency-partition, lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds, def-mihlin-symbol-with-more-than-half-dimension-derivatives, thm-mihlin-fourier-multiplier-theorem, def-lp-fourier-multiplier-and-multiplier-norm, def-translation-invariant-fourier-multiplier-on-schwartz-space, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p, thm-extension-of-a-bounded-map-from-a-dense-subspace, thm-young-convolution-inequality, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 6.2.7 (Mihlin-Hormander multiplier theorem) and the dyadic symbol estimates (6.2.10)-(6.2.14), printed pp. 445-447"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "§3.9, Theorem 3.13 (Mihlin multiplier theorem), printed pp. 13-14"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Proposition 5.3 and its proof, the symbol estimates for annular bumps, printed pp. 23-24"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). For every $j\ge0$ the
symbol $\varphi_j$ of [[def-inhomogeneous-dyadic-frequency-partition]] is a
Mihlin symbol in the sense of
[[def-mihlin-symbol-with-more-than-half-dimension-derivatives]], with constants
$C_\alpha\le A_\alpha(n,\psi)$ for $|\alpha|\le\lfloor n/2\rfloor+1$ that do
not depend on $j$; the same holds for the companion symbols $\tilde\varphi_j$.
Consequently, for every $1<p<\infty$ the multiplier operators $\Delta_j$ and
$\tilde\Delta_j$ extend uniquely to bounded operators on
$L^p(\mathbb R^n;\mathbb C)$ with
$$\|\Delta_jf\|_p\le C_{n,\psi}\max\bigl(p,(p-1)^{-1}\bigr)\|f\|_p,\qquad \|\tilde\Delta_jf\|_p\le C'_{n,\psi}\max\bigl(p,(p-1)^{-1}\bigr)\|f\|_p$$
for all $f\in L^p$ and all $j\ge0$; on $\mathcal S$ the extensions agree with
the convolution representatives $f*K_j$, $f*\tilde K_j$. In particular each
$\Delta_j$ is well defined on $L^p$ as an honest function given by that
convolution.

## Facts & Assumptions

**Given:** the fixed partition $(\varphi_j)$ with companions $(\tilde\varphi_j)$ and kernels $K_j,\tilde K_j$ of [[def-inhomogeneous-dyadic-frequency-partition]]; the exponent $q:=\lfloor n/2\rfloor+1$ of [[def-mihlin-symbol-with-more-than-half-dimension-derivatives]]; a real $1<p<\infty$.

[F1] $\varphi_j,\tilde\varphi_j\in C_c^\infty(\mathbb R^n)$ and, for every multi-index $\alpha$, $|\partial^\alpha\varphi_j(\xi)|\le C_\alpha2^{-j|\alpha|}$ for $j\ge1$ and all $\xi$, with $|\partial^\alpha\varphi_0(\xi)|\le C_\alpha$; moreover $|\partial^\alpha\varphi_j(\xi)|\le2^{|\alpha|}C_\alpha|\xi|^{-|\alpha|}$ for $j\ge1$ and $\xi\ne0$ ([[lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition]]).

[F2] $\operatorname{supp}\psi\subset\{|\xi|<2\}$ and $\operatorname{supp}\varphi_j\subset\{2^{j-1}\le|\xi|\le2^{j+1}\}$ for $j\ge1$, $\operatorname{supp}\varphi_0\subset\{|\xi|\le2\}$; hence all derivatives of $\varphi_0$ vanish for $|\xi|\ge2$ ([[lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition]]).

[F3] Mihlin's theorem: if $m$ is a Mihlin symbol with constants $C_\alpha$, $A:=\max_{|\alpha|\le q}C_\alpha$, then $m$ is an $L^p$ Fourier multiplier for $1<p<\infty$ and $\|m\|_{M_p}\le C_n\max(p,(p-1)^{-1})(A+\|m\|_\infty)$ ([[thm-mihlin-fourier-multiplier-theorem]], [[def-lp-fourier-multiplier-and-multiplier-norm]], [[def-translation-invariant-fourier-multiplier-on-schwartz-space]]).

[F4] For $f\in\mathcal S$ the tempered distribution $T_{\varphi_j}f$ is the regular distribution of the convolution $f*K_j$, and $K_j\in L^1$ with $\|K_j\|_1\le C$ uniformly; hence $f\mapsto f*K_j$ is a bounded operator on $L^p$ with norm at most $C$, and the compactly supported smooth functions are dense in $L^p$ for finite $p$, so bounded operators agreeing on $\mathcal S$ agree everywhere by uniqueness of the bounded extension ([[def-inhomogeneous-dyadic-frequency-partition]], [[lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds]], [[thm-young-convolution-inequality]], [[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]], [[thm-extension-of-a-bounded-map-from-a-dense-subspace]]).

## Proof

**Proof technique:** direct.

1.1 Uniform Mihlin constants. Fix a multi-index $\alpha$ with $|\alpha|\le q$. For $j\ge1$ and $\xi\ne0$, [F1] and [F2] give $|\partial^\alpha\varphi_j(\xi)|\le2^{|\alpha|}C_\alpha|\xi|^{-|\alpha|}$, and for $j=0$ the same bound holds with constant $2^{|\alpha|}C_\alpha$: for $|\xi|<2$ one has $2^{|\alpha|}|\xi|^{-|\alpha|}\ge1$ so the bound follows from $|\partial^\alpha\varphi_0|\le C_\alpha$, while for $|\xi|\ge2$ all derivatives of $\varphi_0$ vanish by [F2]. Hence $\varphi_j$ is a Mihlin symbol with constants $A_\alpha:=2^{|\alpha|}C_\alpha$ for every $j\ge0$. For the companions, $|\partial^\alpha\tilde\varphi_j|\le|\partial^\alpha\varphi_{j-1}|+|\partial^\alpha\varphi_j|+|\partial^\alpha\varphi_{j+1}|\le3A_\alpha|\xi|^{-|\alpha|}$ for $\xi\ne0$ (each summand satisfying the same bound, with $\varphi_{-1}=0$ for $j=0$), so the constants $A'_\alpha:=3A_\alpha$ are uniform in $j$ as well. [F1, F2, algebra]

2.1 Uniform $L^p$ multiplier bounds. By step 1.1 the symbols $\varphi_j,\tilde\varphi_j$ are Mihlin symbols with constants bounded by the $j$-independent numbers $A:=\max_{|\alpha|\le q}A_\alpha$ and $A'=\max_{|\alpha|\le q}A'_\alpha$, and $|m|\le\|m\|_\infty\le1$ for both. [F3] therefore makes each of them an $L^p$ Fourier multiplier with $\|\varphi_j\|_{M_p}\le C_n\max(p,(p-1)^{-1})(A+1)$ and $\|\tilde\varphi_j\|_{M_p}\le C_n\max(p,(p-1)^{-1})(A'+1)$, uniformly in $j$, and the corresponding operators $T_{\varphi_j},T_{\tilde\varphi_j}$ act boundedly on $L^p$ by the definition of the multiplier norm. [F3, step 1.1, algebra]

3.1 The extension is the convolution. Fix $j\ge0$. On $\mathcal S$ the operator $T_{\varphi_j}$ agrees with the convolution representative $f\mapsto f*K_j$ by [F4], and the convolution operator is bounded on $L^p$ with norm at most $C$ by Young's inequality [F4]; since $\mathcal S$ is dense in $L^p$ ($p$ finite) and the bounded extension of $T_{\varphi_j}$ is unique, the $L^p$ multiplier operator equals the convolution operator, so for every $f\in L^p$ the class $\Delta_jf$ has the honest representative $f*K_j$ and $\|\Delta_jf\|_p\le C\|f\|_p$; the same argument applies to $\tilde K_j$. [F4, step 2.1, algebra]

4.1 Conclusion. Steps 1.1 and 2.1 give the uniform Mihlin property and the uniform multiplier bounds, and step 3.1 identifies the extensions with the convolution representatives; the asserted inequalities follow with $C_{n,\psi}$ a constant depending only on $n,\psi$ (absorbing $C_n(A+1)$ and the $L^1$ bound, and enlarging it for the companions). [step 1.1, step 2.1, step 3.1] ∎
