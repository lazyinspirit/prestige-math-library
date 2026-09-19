---
id: thm-gleason-kahane-zelazko
kind: theorem
title: Gleason Kahane Zelazko
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-zero-free-entire-function-of-exponential-type-is-an-exponential, def-unital-banach-algebra, lem-neumann-series, thm-banach-series-criterion, lem-complex-exponential-series-converges-everywhere, lem-cauchy-product-of-absolutely-convergent-complex-series, thm-liouville-bounded-entire-function, cor-complex-power-series-sums-are-analytic, thm-complex-power-series-converge-locally-uniformly, def-complex-exponential, cor-complex-power-series-sums-have-derivatives-of-all-orders]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Theorem 3.1.11, printed pp. 59–61"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.5.1, printed pp. 258–262"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Let $A$ be a complex unital Banach algebra
([[def-unital-banach-algebra]]) and let $\varphi : A \to \mathbb C$ be a complex
linear map with $\varphi(1) = 1$ which is **nonzero on every invertible element**:
$\varphi(a) \ne 0$ whenever $a \in A$ is invertible. Then $\varphi$ is
continuous and multiplicative:

$$|\varphi(a)| \le \|a\| \quad\text{and}\quad \varphi(ab) = \varphi(a)\varphi(b) \qquad (a,b \in A).$$

No commutativity of $A$ is assumed, and the argument is choice-free. The
hypothesis is that $\varphi$ is nonzero on invertible elements, not that it is
nonzero on $A$; together with $\varphi(1) = 1$ it is the exact hypothesis used.

## Facts & Assumptions

**Given:** A complex unital Banach algebra $A$ and a complex-linear $\varphi : A \to \mathbb C$ with $\varphi(1) = 1$ that is nonzero at every invertible element.

[L1] $A$ is complete, $\|1\| = 1$, the multiplication is associative and bilinear with $\|xy\| \le \|x\|\,\|y\|$, and $1 \ne 0$ ([[def-unital-banach-algebra]]).

[L2] If $\|y\| < 1$ then $1-y$ is invertible with inverse $\sum_{n\ge0}y^n$; hence $\lambda 1 - a$ is invertible whenever $|\lambda| > \|a\|$ ([[lem-neumann-series]]).

[L3] A normed space is a Banach space if and only if every absolutely convergent series in it converges ([[thm-banach-series-criterion]]).

[L4] For every $\zeta \in \mathbb C$ the series $\sum \zeta^n/n!$ converges absolutely ([[lem-complex-exponential-series-converges-everywhere]], [[def-complex-exponential]]).

[L5] A scalar power series with coefficients $c_n$ converges absolutely for $|z| < R$ where $1/R = \limsup|c_n|^{1/n}$, its sum is analytic (holomorphic) on that disc, and its derivative is obtained by termwise differentiation; a series with $c_n = O(r^n/n!)$ has $R = \infty$ and defines an entire function ([[cor-complex-power-series-sums-are-analytic]], [[thm-complex-power-series-converge-locally-uniformly]], [[cor-complex-power-series-sums-have-derivatives-of-all-orders]]).

[L6] If $f$ is entire and zero-free with constants $M>0$, $C \ge 0$ satisfying $|f(z)| \le Me^{C|z|}$ for all $z$, then $f(z) = f(0)e^{az}$ with $a = f'(0)/f(0)$ ([[lem-zero-free-entire-function-of-exponential-type-is-an-exponential]]).

[L7] Every bounded entire function is constant ([[thm-liouville-bounded-entire-function]]).

## Proof

**Proof technique:** direct.

1.1 $|\varphi(a)| \le \|a\|$ for every $a$: otherwise put
$\lambda:=\varphi(a)$, so $|\lambda|>\|a\|$ and
$\lambda 1-a=\lambda(1-a/\lambda)$ is invertible by [L2], while
$\varphi(\lambda1-a)=\lambda-\varphi(a)=0$ by linearity and
$\varphi(1)=1$; this contradicts the hypothesis that $\varphi$ vanishes at no
invertible element. [L1, L2, algebra]

1.2 For $a \in A$ and $z \in \mathbb C$ the series $E_a(z) := \sum_{n\ge0} z^na^n/n!$ converges absolutely in $A$ and satisfies $\|E_a(z)\| \le e^{|z|\|a\|}$ and $E_a(z)E_a(-z) = E_a(-z)E_a(z) = 1$, so $E_a(z)$ is invertible: absolute convergence follows from [L3] and the scalar majorant $\sum|z|^n\|a\|^n/n! = e^{|z|\|a\|} < \infty$ [L4] with the norm estimate by the triangle inequality; for the product, the partial sums satisfy $S_N(z)S_N(-z) = \sum_{n\le N}(z-z)^n/n! + R_N = 1 + R_N$ with $\|R_N\| \le \sum_{N<n\le 2N}\binom{n}{k}\ldots$ bounded by $\sum_{n>N}(2|z|\|a\|)^n/n!$, which tends to $0$; multiplication is jointly continuous by [L1], so passing to the limit gives $E_a(z)E_a(-z) = 1$, and the same computation with the factors exchanged gives $E_a(-z)E_a(z) = 1$. [L1, L3, L4, algebra]

2.1 $\varphi(E_a(z)) = \sum_{n\ge0}z^n\varphi(a^n)/n!$ for every $z$, by continuity of $\varphi$ from [step 1.1] applied to the partial sums of the absolutely convergent series of [step 1.2]; consequently $f_a(z) := \varphi(E_a(z))$ is an entire function of $z$, with $|f_a(z)| \le \|E_a(z)\| \le e^{|z|\|a\|}$, $f_a(0) = \varphi(1) = 1$, derivative $f_a'(0) = \varphi(a)$ by termwise differentiation, and $f_a$ is zero-free because $E_a(z)$ is invertible by [step 1.2] and $\varphi$ vanishes at no invertible element. [step 1.1, step 1.2, L5, algebra]

3.1 By [L6] applied to the zero-free entire $f_a$ of [step 2.1] with $M = 1$ and $C = \|a\|$: $f_a(z) = e^{z\varphi(a)}$, that is, $\varphi(E_a(z)) = e^{z\varphi(a)}$ for all $z \in \mathbb C$ and all $a \in A$. [step 2.1, L6]

4.1 Fix $a,b \in A$ and put $F(z,w) := \varphi(E_a(z)E_b(w))$. For fixed $w$, the function $z \mapsto F(z,w) = \sum_n z^n\varphi(a^nE_b(w))/n!$ is entire with $|F(z,w)| \le e^{|z|\|a\|}e^{|w|\|b\|}$, the bound coming from [step 1.2] and [step 1.1]; $F(0,w) = \varphi(E_b(w)) = e^{w\varphi(b)}$ by [step 3.1]; $F(\cdot,w)$ is zero-free because $E_a(z)E_b(w)$ is a product of invertibles [step 1.2]; and $\partial_zF(0,w) = \varphi(aE_b(w))$ because $(E_a(z)E_b(w) - E_b(w))/z = \bigl((E_a(z)-1)/z\bigr)E_b(w) \to aE_b(w)$ in $A$ as $z \to 0$ and $\varphi$ is continuous. [step 1.1, step 1.2, step 3.1, L5, algebra]

5.1 Applying [L6] to $z \mapsto F(z,w)/F(0,w)$ (zero-free, value $1$ at $0$, growth $M_w e^{\|a\||z|}$ with $M_w := e^{2\|b\||w|}$) gives $F(z,w) = F(0,w)e^{zc(w)}$ for every $z$, where $c(w) := \partial_zF(0,w)/F(0,w) = \varphi(aE_b(w))e^{-w\varphi(b)}$. [step 4.1, L6, algebra]

6.1 The function $c$ is entire in $w$, and $\operatorname{Re}c(w) \le \|a\|$ for all $w$: the numerator $\varphi(aE_b(w)) = \sum_n w^n\varphi(ab^n)/n!$ is an entire power series with coefficients bounded by $\|a\|\|b\|^n$, and multiplication by the nowhere-vanishing entire $e^{-w\varphi(b)}$ preserves entirety [L5]; for the bound, take $z>0$ real and use $|F(z,w)| = |F(0,w)|e^{z\operatorname{Re}c(w)} = e^{\operatorname{Re}(w\varphi(b))}e^{z\operatorname{Re}c(w)} \le e^{\|a\|z}e^{\|b\||w|}$ from [step 4.1] to get $z\operatorname{Re}c(w) \le \|a\|z + 2\|b\||w|$, then divide by $z$ and let $z \to \infty$. [step 4.1, step 5.1, L5, algebra]

7.1 $e^{c(w)-\|a\|}$ is an entire function of modulus $e^{\operatorname{Re}c(w)-\|a\|} \le 1$, hence constant by [L7]; as $c$ is continuous on the connected set $\mathbb C$ and $c(w) - \|a\|$ then takes values in a discrete coset of $2\pi i\mathbb Z$, $c$ is constant, and evaluating at $w = 0$ gives $c \equiv c(0) = \varphi(aE_b(0))e^{0} = \varphi(a)$ since $E_b(0) = 1$ and $\varphi(1) = 1$ [step 1.2]. [step 6.1, L7, algebra]

8.1 Consequently $F(z,w) = e^{w\varphi(b)}e^{z\varphi(a)}$ for all $z,w \in \mathbb C$ by [step 5.1] and [step 7.1]. [step 5.1, step 7.1, algebra]

9.1 Comparing coefficients of $zw$: on the one hand $F(z,w) = \varphi(E_a(z)E_b(w)) = \sum_{k,m\ge0}z^kw^m\varphi(a^kb^m)/(k!m!)$ (the double series converges absolutely since $\|a^kb^m\|/(k!m!) \le \|a\|^k\|b\|^m/(k!m!)$ has sum $e^{\|a\|}e^{\|b\|}$, and $\varphi$ is continuous [step 1.1]), so the coefficient of $zw$ is $\varphi(ab)$; on the other hand $e^{w\varphi(b)}e^{z\varphi(a)}$ has coefficient of $zw$ equal to $\varphi(a)\varphi(b)$; hence $\varphi(ab) = \varphi(a)\varphi(b)$ for all $a,b \in A$. [step 1.1, step 8.1, algebra]

10.1 By [step 1.1] $\varphi$ is bounded, hence continuous, and by [step 9.1] it is multiplicative; both assertions of the theorem are proved. [step 1.1, step 9.1] ∎

## Remarks

- **The hypothesis is used twice.** It gives continuity through the spectrum argument [step 1.1] and zero-freeness of the functions $f_a$ and $F(\cdot,w)$ in [steps 2.1 and 4.1]; no other invocation occurs.
- **The two-variable step is not a formal consequence of the one-variable step**, which is why the function $F$ and its $w$-dependent constant $c(w)$ are introduced: the one-variable theorem applied for fixed $w$ produces a constant that has to be shown independent of $w$.
