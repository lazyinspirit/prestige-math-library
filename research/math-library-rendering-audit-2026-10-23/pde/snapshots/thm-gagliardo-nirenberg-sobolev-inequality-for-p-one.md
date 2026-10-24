---
id: thm-gagliardo-nirenberg-sobolev-inequality-for-p-one
kind: theorem
title: "The p=1 Gagliardo-Nirenberg-Sobolev inequality"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [thm-generalized-holder-inequality-for-products, cor-vector-valued-ftc-and-lipschitz-bound, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.1, Lemma 3.2 and the first part of the proof of Theorem 3.3, printed pp. 62-64."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3 §3.7, the case p=1 in the proof of Theorem 3.28, printed pp. 64-66."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Theorem 3.17 including the N=1, p=1 case, printed pp. 65-66."
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $n\ge2$. There is a constant $C(n)$ such that $\|u\|_{L^{n/(n-1)}(\mathbb R^n)}\le C(n)\,\|Du\|_{L^1(\mathbb R^n)}$ for every $u\in C_c^{\infty}(\mathbb R^n;\mathbb K)$.

## Facts & Assumptions

**Given:** Countable Choice; an integer $n\ge2$; a field $\mathbb K\in\{\mathbb R,\mathbb C\}$; and a function $u\in C_c^\infty(\mathbb R^n;\mathbb K)$.

[F1] Vector-valued fundamental theorem: if $f$ is differentiable with integrable derivative on an interval, then $\int_a^bf'=f(b)-f(a)$ ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[F2] Tonelli's theorem on sigma-finite products: iterated integrals of nonnegative product-measurable functions may be computed in any order and partial integrals may be renamed ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F3] Holder's inequality: if $1/r=1/p+1/q$ and the indicated spaces are over one measure space, then $\|fg\|_r\le\|f\|_p\|g\|_q$ ([[thm-generalized-holder-inequality-for-products]]).

[F4] $L^p$ is the quotient by almost-everywhere null functions, and complex-valued Lebesgue spaces use the componentwise conventions ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F5] Countable Choice, assumed for the measure-theoretic interfaces above ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Sections and pointwise bounds. Fix $j\in\{1,\dots,n\}$ and write $\hat x_j$ for the coordinates other than $x_j$. For each fixed $\hat x_j$, the section $t\mapsto u(x_1,\dots,t,\dots,x_n)$ is smooth and compactly supported, so the fundamental theorem [F1] applied on an interval containing the support and the estimate $|\partial_ju|\le|Du|$ give $|u(x)|\le\int_{\mathbb R}|Du(x_1,\dots,t,\dots,x_n)|\,dt=:P_j(\hat x_j)$ for every $x$. [F1, F4, given, algebra]

1.2 The product-integral lemma. For $d\ge2$ and nonnegative integrable functions $f_j$ on $\mathbb R^{d-1}$, each independent of the $j$-th coordinate, one has $\int_{\mathbb R^d}\prod_{j=1}^d f_j(\hat x_j)^{1/(d-1)}\,dx\le\prod_{j=1}^d(\int f_j)^{1/(d-1)}$. For $d=2$ this is Tonelli [F2]. For $d>2$, integrate first in $x_d$ and apply [F3] with $d-1$ equal exponents to the factors $j<d$. Put $g_j:=\int_{\mathbb R}f_j\,dx_d$ for $j<d$; the resulting upper bound is $\int_{\mathbb R^{d-1}}f_d^{1/(d-1)}\prod_{j<d}g_j^{1/(d-1)}$. Holder with exponents $d-1$ and $(d-1)/(d-2)$ bounds this by $(\int f_d)^{1/(d-1)}(\int\prod_{j<d}g_j^{1/(d-2)})^{(d-2)/(d-1)}$. The induction hypothesis in dimension $d-1$, followed by Tonelli, gives the required product of the $\int f_j$. Zero integrals make the integrand zero almost everywhere, so they cause no division. [F2, F3, algebra]

2.1 Product and root. Multiplying the $n$ pointwise inequalities of step 1.1 and taking the $(n-1)$-th root gives $|u(x)|^{n/(n-1)}\le\prod_{j=1}^nP_j(\hat x_j)^{1/(n-1)}$ for every $x$. [F5, step 1.1, algebra]

3.1 Apply step 1.2 with $d=n$ and $f_j=P_j$. Tonelli gives $\int_{\mathbb R^{n-1}}P_j=\int_{\mathbb R^n}|Du|=\|Du\|_1<\infty$. Step 2.1 therefore yields $\int|u|^{n/(n-1)}\le\|Du\|_1^{n/(n-1)}$. Taking the $(n-1)/n$-th power proves the assertion with $C(n)=1$. [F2, F4, step 2.1, step 1.2, algebra] ∎

## Source notes

Kinnunen's Theorem 3.3 computes the product of the $n$ one-dimensional primitive estimates and integrates one variable at a time with the generalized Holder inequality for $(n-1)$ factors; the proof above records a dimension induction for the product-integral inequality. The constant obtained is $1$, which is not sharp but is dimension-only as asserted. The argument is the case $p=1$ separated in the plan because the power-and-Holder reduction used for $1<p<n$ is unavailable at the endpoint.
