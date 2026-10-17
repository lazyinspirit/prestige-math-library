---
id: thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n
kind: theorem
title: "Lebesgue differentiation theorem on $\\mathbb{R}^n$"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-ball-average-operator-on-r-n, def-countable-choice, def-locally-integrable-function-on-r-n, lem-continuous-compactly-supported-functions-differentiate-by-ball-averages, thm-c-c-rn-is-dense-in-l-p-of-rn, thm-chebyshev-markov-inequality-for-the-integral, thm-hardy-littlewood-maximal-inequality-for-balls, thm-countable-union-of-null-is-null]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Theorem 1.6.11 and Exercise 1.6.14"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Theorem 3.18"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $f\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$. Then
$$\lim_{r\to0^+}A_rf(x)=f(x)$$
for Lebesgue-almost every $x\in\mathbb{R}^n$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a function $f\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$.

[L1] Continuous compactly supported functions are recovered by small ball averages at every point. ([[lem-continuous-compactly-supported-functions-differentiate-by-ball-averages]])

[L2] For $1\le p<\infty$, $C_c(\mathbb{R}^n)$ is dense in $L^p(\mathbb{R}^n)$. ([[thm-c-c-rn-is-dense-in-l-p-of-rn]])

[L3] Chebyshev-Markov controls superlevel sets by the integral. ([[thm-chebyshev-markov-inequality-for-the-integral]])

[L4] The centered maximal operator is weak type $(1,1)$. ([[thm-hardy-littlewood-maximal-inequality-for-balls]])

[L5] A countable union of null sets is null. ([[thm-countable-union-of-null-is-null]])

## Proof

**Proof technique:** direct.

1.1 For each integer $m\ge1$ and each integer $j\ge1$, apply [L2] to the [L2, given, choose, construct] $L^1$ function $f\mathbf{1}_{B(0,m+1)}$ and choose $g_{m,j}\in C_c(\mathbb{R}^n)$ such that $$\int_{B(0,m+1)}|f-g_{m,j}|\,d\lambda<\frac{2^{-2j}}{5^n}.$$ Set $$h_{m,j}:=(f-g_{m,j})\mathbf{1}_{B(0,m+1)}.$$ [L2, given, choose, construct]

2.1 Let [L3, L4, step 1.1, algebra] $$E_{m,j}:=\left\{x\in B(0,m):Mh_{m,j}(x)>2^{-j}\right\} \cup\left\{x\in B(0,m):|h_{m,j}(x)|>2^{-j}\right\}.$$ By [L4] and [L3], $$\lambda(E_{m,j}) \le \frac{5^n}{2^{-j}}\|h_{m,j}\|_1 +\frac{1}{2^{-j}}\|h_{m,j}\|_1 <2^{-j}+5^{-n}2^{-j}\le2^{1-j}.$$ [L3, L4, step 1.1, algebra]

3.1 For fixed $m$, put [step 2.1, algebra] $$N_m:=\bigcap_{N=1}^\infty\bigcup_{j\ge N}E_{m,j}.$$ The sets $\bigcup_{j\ge N}E_{m,j}$ decrease with $N$, and by step 2.1 $$\lambda\!\left(\bigcup_{j\ge N}E_{m,j}\right) \le\sum_{j\ge N}\lambda(E_{m,j}) \le\sum_{j\ge N}2^{1-j}=2^{2-N}.$$ Hence $\lambda(N_m)=0$. [step 2.1, algebra]

4.1 Let $x\in B(0,m)\setminus N_m$. Then there is $N_x$ such that [L1, step 1.1, step 3.1, algebra] $x\notin E_{m,j}$ for every $j\ge N_x$. Fix such a $j$ and take $0<r<1$. Since $x\in B(0,m)$, one has $B(x,r)\subseteq B(0,m+1)$, so $$A_r f(x)-f(x) =\big(A_rg_{m,j}(x)-g_{m,j}(x)\big)+A_rh_{m,j}(x)-h_{m,j}(x).$$ Therefore $$|A_r f(x)-f(x)| \le |A_rg_{m,j}(x)-g_{m,j}(x)|+Mh_{m,j}(x)+|h_{m,j}(x)| \le |A_rg_{m,j}(x)-g_{m,j}(x)|+2^{1-j}.$$ Now [L1] gives $A_rg_{m,j}(x)\to g_{m,j}(x)$, so $$\limsup_{r\to0^+}|A_r f(x)-f(x)|\le 2^{1-j}$$ for every $j\ge N_x$. Letting $j\to\infty$ yields $A_r f(x)\to f(x)$. [L1, step 1.1, step 3.1, algebra]

5.1 The bad set for radius differentiation is contained in [step 3.1, step 4.1, L5] $\bigcup_{m\ge1}N_m$, which is null by [L5]. Thus the convergence holds for almost every $x\in\mathbb{R}^n$. [step 3.1, step 4.1, L5] ∎
