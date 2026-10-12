---
id: lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact
aliases: [nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact]
kind: lemma
domain: mathematics
title: "L^2 kernel operators are bounded and compact"
status: draft
origin: pipeline
dependency_level: 1
deps: [def-nrqm-coulomb-ltwo-kernel-operators, cor-cauchy-schwarz-inequality-for-l-two, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-dominated-convergence, thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn, lem-finite-rank-operators-are-compact, thm-norm-limit-of-compact-operators-is-compact, def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-hilbert-space, def-countable-choice]
dependency_roles:
  def-nrqm-coulomb-ltwo-kernel-operators: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn: mathematical-premise
  lem-finite-rank-operators-are-compact: mathematical-premise
  thm-norm-limit-of-compact-operators-is-compact: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.3 pp. 139-145 (an integral operator with L^2 kernel is bounded with norm at most the L^2 norm of its kernel and is compact)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis (ETH lecture notes, 2017), Section 5.2.3 pp. 224-227 (finite-rank operators are compact; norm limits of compact operators are compact)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$L^2=L^2(\mathbb R^3;\mathbb C)$ and let
$k\in L^2(\mathbb R^3\times\mathbb R^3;\mathbb C)$, with $T_k$ the
$L^2$-kernel operator of [[def-nrqm-coulomb-ltwo-kernel-operators]]. Then:

(a) $D(T_k)=L^2$; $T_k$ is linear and bounded with
$\|T_kf\|_2\le\|k\|_{L^2(\mathbb R^3\times\mathbb R^3)}\|f\|_2$ for every
$f\in L^2$, so $\|T_k\|\le\|k\|_{L^2(\mathbb R^3\times\mathbb R^3)}$;

(b) if $n\ge1$, $f_1,\dots,f_n,g_1,\dots,g_n\in L^2$ and
$k(x,y)=\sum_{i=1}^nf_i(x)\overline{g_i(y)}$ a.e., then $k$ is a class in
$L^2(\mathbb R^3\times\mathbb R^3;\mathbb C)$, the range of $T_k$ is contained
in $\operatorname{span}\{f_1,\dots,f_n\}$, and $T_k$ is compact;

(c) $T_k$ is compact; and

(d) for every sequence $(k_m)$ in
$L^2(\mathbb R^3\times\mathbb R^3;\mathbb C)$ with
$\|k_m-k\|_{L^2(\mathbb R^3\times\mathbb R^3)}\to0$ one has
$T_{k_m}-T_k=T_{k_m-k}$ and
$\|T_{k_m}-T_k\|\le\|k_m-k\|_{L^2(\mathbb R^3\times\mathbb R^3)}\to0$; in
particular $T_k$ is the operator-norm limit of finite-rank kernel operators.

No statement is made about the spectrum of $T_k$, about its singular values,
or about $L^2$ kernels of a given compact operator.

## Facts & Assumptions

**Given:** the Hilbert space $L^2$ and its product
$L^2(\mathbb R^3\times\mathbb R^3;\mathbb C)$; a kernel $k$ of the stated class;
the operators $T_k$ of [[def-nrqm-coulomb-ltwo-kernel-operators]].

[F1] Cauchy-Schwarz for $L^2$: $|\int h\overline g|\le\|h\|_2\|g\|_2$ whenever $h,g\in L^2$, and Tonelli's theorem computes $\int_{\mathbb R^3}\bigl(\int_{\mathbb R^3}|k(x,y)|^2dy\bigr)dx=\|k\|^2_{L^2(\mathbb R^3\times\mathbb R^3)}$ ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F2] Density of box step functions: for $1\le p<\infty$ the finite linear combinations of indicators of half-open boxes in $\mathbb R^n$ with rational endpoints and rational coefficients are dense in $L^p(\mathbb R^n)$ ([[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]).

[F3] Finite-rank operators are compact, and an operator-norm limit of compact operators is compact ([[lem-finite-rank-operators-are-compact]], [[thm-norm-limit-of-compact-operators-is-compact]]).

[F4] Dominated convergence identifies a.e. limits of sequences in $L^2$ and computes integrals of a.e. equal representatives ([[thm-dominated-convergence]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

## Proof

1.1 [Boundedness and full domain] Fix $f\in L^2$. For a.e. $x$ the function $y\mapsto k(x,y)f(y)$ is measurable, and by [F1] $\int|k(x,y)f(y)|dy\le\|f\|_2\bigl(\int|k(x,y)|^2dy\bigr)^{1/2}<\infty$ for a.e. $x$, the last integral being finite for a.e. $x$ with $\int\bigl(\int|k(x,y)|^2dy\bigr)dx=\|k\|^2_2<\infty$; hence $(T_kf)(x)$ exists for a.e. $x$ and $|(T_kf)(x)|\le\|f\|_2\bigl(\int|k(x,y)|^2dy\bigr)^{1/2}$. Integrating the square and using Tonelli gives $\|T_kf\|_2^2\le\|f\|_2^2\int\int|k(x,y)|^2dx\,dy=\|k\|^2_2\|f\|^2_2$, so $D(T_k)=L^2$, $T_kf\in L^2$ with the stated bound, and $T_k$ is linear because the integral is linear in $f$ for each $x$. This is (a). [F1, F4, algebra]

2.1 [Finite product kernels] Let $k(x,y)=\sum_{i=1}^nf_i(x)\overline{g_i(y)}$ a.e. with $f_i,g_i\in L^2$. By Tonelli and [F1], $\int\int|k|^2\le\bigl(\sum_i\|f_i\|_2\|g_i\|_2\bigr)^2<\infty$, so $k$ is a class in $L^2(\mathbb R^3\times\mathbb R^3;\mathbb C)$; moreover for $f\in L^2$ step 1.1 applies and, for a.e. $x$, $(T_kf)(x)=\sum_if_i(x)\int\overline{g_i(y)}f(y)dy=\sum_i\langle f,g_i\rangle f_i(x)$ by linearity of the integral and [F4]; hence the range of $T_k$ lies in the finite-dimensional space $\operatorname{span}\{f_1,\dots,f_n\}$. By [F3] $T_k$ is compact. This is (b). [step 1.1, F1, F3, F4, algebra]

3.1 [Box step functions are finite product kernels] A half-open box in $\mathbb R^6$ is a product $B\times B'$ of half-open boxes $B,B'\subseteq\mathbb R^3$, and its indicator satisfies $\mathbf 1_{B\times B'}(x,y)=\mathbf 1_B(x)\mathbf 1_{B'}(y)$ for every $(x,y)$; the indicators of bounded boxes lie in $L^2(\mathbb R^3;\mathbb C)$. Hence every finite linear combination of indicators of half-open boxes in $\mathbb R^6$ with rational coefficients is a finite product kernel as in step 2.1, and its kernel operator is compact by step 2.1. [step 2.1, F2, F4, algebra]

4.1 [Norm approximation and compactness] Let $k\in L^2(\mathbb R^3\times\mathbb R^3;\mathbb C)$. By [F2] with $n=6$ and $p=2$ there are finite linear combinations $s_m$ of indicators of half-open boxes in $\mathbb R^6$ with $\|s_m-k\|_{L^2(\mathbb R^3\times\mathbb R^3)}\to0$. For each $m$, step 3.1 makes $T_{s_m}$ compact, and by linearity of the kernel operator $T_k-T_{s_m}=T_{k-s_m}$; step 1.1 applied to the kernel $k-s_m$ gives $\|T_k-T_{s_m}\|\le\|k-s_m\|_{L^2(\mathbb R^3\times\mathbb R^3)}\to0$. By [F3] the operator-norm limit $T_k$ is compact, and the displayed bound is (d). This is (c). [step 1.1, step 3.1, F2, F3, algebra]

5.1 [Conclusion] Part (a) is step 1.1, part (b) is step 2.1, and parts (c) and (d) are step 4.1. [step 1.1, step 2.1, step 4.1] ∎
