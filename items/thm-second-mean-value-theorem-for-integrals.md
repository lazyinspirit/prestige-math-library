---
id: thm-second-mean-value-theorem-for-integrals
kind: theorem
title: "Bonnet's second mean value theorem: for $f$ monotone and $g$ integrable on $[a,b]$ there is $\\xi\\in[a,b]$ with $\\int_a^b fg = f(a)\\int_a^\\xi g + f(b)\\int_\\xi^b g$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-monotone-implies-integrable, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-the-integral-function-is-lipschitz, def-the-integral-function, lem-abel-summation-by-parts, thm-riemann-criterion, thm-extreme-value-r, thm-heine-borel-r, def-open-cover-r, cor-continuous-image-of-an-interval-is-an-interval, thm-additivity-over-subintervals, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, lem-integral-elementary-bounds, def-monotone-function, lem-finite-sum-laws, def-finite-sum, def-series, def-oriented-integral, def-partition-and-refinement, def-darboux-sums, def-darboux-integral, def-continuity-real, def-max-min, def-interval, def-bounded-set, lem-of-abs-value, def-abs-value, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: [thm-bonnet-second-mean-value-theorem]
landmark: true
short: "second mean value theorem (Bonnet)"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "Summation by parts (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Summation_by_parts"
    - title: "Encyclopedia of Mathematics, Lebesgue integral"
      url: "https://encyclopediaofmath.org/wiki/Lebesgue_integral"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be monotone, that is
nondecreasing or nonincreasing ([[def-monotone-function]]), and let
$g : [a,b] \to \mathbb{R}$ be integrable ([[def-darboux-integral]]). Then $fg$ is
integrable and there is $\xi \in [a,b]$ with

$$\int_a^b f\,g \;=\; f(a)\int_a^{\xi} g \;+\; f(b)\int_{\xi}^{b} g .$$

**No differentiability and no continuity of $f$ is assumed.** A monotone function
may be discontinuous at infinitely many points and is still integrable
([[thm-monotone-implies-integrable]]), and the proof below uses only that its
increments over the subintervals of a partition all have the same sign. This is
the general form; the version usually proved by integration by parts needs $f$
continuously differentiable, which is a strictly stronger hypothesis.

## Facts & Assumptions

**Given:** Reals $a<b$, a monotone $f : [a,b] \to \mathbb{R}$, an integrable $g : [a,b] \to \mathbb{R}$, and a real $\varepsilon > 0$. Write $G(x) := \int_a^x g$ for the integral function of $g$, and fix a real $K \ge 0$ with $|g(t)| \le K$ for every $t \in [a,b]$.

[L1] A monotone function on $[a,b]$ is bounded and integrable there ([[thm-monotone-implies-integrable]], [[def-monotone-function]], [[def-bounded-set]]); an integrable function is bounded, so $K$ exists ([[def-darboux-sums]]).

[L2] Products of integrable functions are integrable, as are absolute values, and $\bigl|\int_p^q u\bigr| \le \int_p^q |u|$ for $p \le q$ ([[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L3] $G$ is defined on $[a,b]$, $G(a) = 0$, $G(y)-G(x) = \int_x^y g$ for all $x,y \in [a,b]$ in either order, and $G$ is continuous on $[a,b]$ ([[def-the-integral-function]], [[thm-the-integral-function-is-lipschitz]], [[thm-additivity-over-subintervals]], [[def-oriented-integral]], [[def-continuity-real]]).

[L4] $[a,b]$ is compact and nonempty, so a continuous real function on it attains a minimum and a maximum, and its image is exactly the closed interval between them ([[thm-heine-borel-r]], [[def-open-cover-r]], [[thm-extreme-value-r]], [[cor-continuous-image-of-an-interval-is-an-interval]], [[def-max-min]], [[def-interval]]).

[L5] Abel summation by parts: with $A_j = \sum_{k<j}\alpha_k$, for every $n \ge 1$ one has $\sum_{k<n}\alpha_k\beta_k = A_n\beta_{n-1} - \sum_{k<n-1}A_{k+1}(\beta_{k+1}-\beta_k)$ ([[lem-abel-summation-by-parts]], [[def-series]]).

[L6] Finite sums: additivity, scaling, splitting with the shift $\sum_{k=p}^{q-1}x_k = \sum_{j<q-p}x_{p+j}$, monotonicity in the terms, and telescoping $\sum_{k<n}(c_{k+1}-c_k) = c_n - c_0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L7] For a partition $P = (n,t)$ of $[a,b]$: $n \ge 1$, $t_0 = a$, $t_k = b$ for $k \ge n$, $\Delta_i = t_{i+1}-t_i > 0$ for $i<n$, $I_i = [t_i,t_{i+1}] \subseteq [a,b]$, and $U(f,P)-L(f,P) = \sum_{i<n}(M_i-m_i)\Delta_i$ with $m_i \le f(x) \le M_i$ for $x \in I_i$ ([[def-partition-and-refinement]], [[def-darboux-sums]]).

[L8] Riemann's criterion for the integrable $f$: for every real $\eta>0$ there is a partition $P$ with $U(f,P)-L(f,P) < \eta$ ([[thm-riemann-criterion]]).

[L9] Linearity and monotonicity of the integral, and $\int_p^q c = c(q-p)$ for a constant ([[thm-linearity-of-the-integral]], [[thm-monotonicity-of-the-integral]], [[lem-integral-elementary-bounds]]).

[L10] Absolute value and ordered-field arithmetic: $-c \le x \le c$ is equivalent to $|x| \le c$, multiplying an inequality by a positive real preserves it and by a negative real reverses it, the order is total and transitive, and a real that is $\le M + \eta$ for every real $\eta>0$ is $\le M$ ([[lem-of-abs-value]], [[def-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 $f$ is bounded and integrable by [L1], so $fg$ is integrable by [L2]; put $\Psi(x) := \int_a^x fg$, so $\Psi(b) = \int_a^b fg$ and $\Psi(y)-\Psi(x) = \int_x^y fg$ by [L3] applied to $fg$. [given, L1, L2, L3]

1.2 $G$ is continuous on $[a,b]$, so by [L4] there are $m \le M$ with $G[\,[a,b]\,] = [m,M]$, $m = \min G[\,[a,b]\,]$ and $M = \max G[\,[a,b]\,]$. [L3, L4, choose]

1.3 Put $C := f(b) - f(a)$ and, for a partition $P=(n,t)$ of $[a,b]$, put $d_j := f(t_{j+1}) - f(t_j)$ for $j < n$. By [L6], $\sum_{j<n} d_j = f(t_n)-f(t_0) = C$; and all the $d_j$ are $\ge 0$ when $f$ is nondecreasing and all are $\le 0$ when $f$ is nonincreasing, by [L7] and [[def-monotone-function]]. [given, L6, L7, construct]

2.1 **The case $C = 0$.** Then $f(a) = f(b)$, and monotonicity forces $f(x) = f(a)$ for every $x \in [a,b]$, since $f(x)$ lies between $f(a)$ and $f(b)$; so $\int_a^b fg = f(a)\int_a^b g$ by [L9], while the right-hand side at $\xi := a$ is $f(a)\cdot 0 + f(b)\int_a^b g = f(a)\int_a^b g$ by [L3]. The theorem holds with $\xi = a$. [step 1.1, step 1.3, L3, L9, L10]

2.2 **Abel summation on a partition.** Let $P = (n,t)$ be any partition of $[a,b]$. Apply [L5] with $\alpha_k := G(t_{k+1})-G(t_k)$ and $\beta_k := f(t_{k+1})$, noting $t_k \in [a,b]$ for every $k \in \mathbb{N}$ by [L7]. By [L6], $A_j = \sum_{k<j}\bigl(G(t_{k+1})-G(t_k)\bigr) = G(t_j) - G(t_0) = G(t_j)$, since $G(a) = 0$. [step 1.2, L3, L5, L6, L7]

2.3 **$S(P)$ approximates $\int_a^b fg$.** For $k<n$ one has $G(t_{k+1})-G(t_k) = \int_{t_k}^{t_{k+1}}g$ by [L3], so by [L9] the $k$-th term of $\Psi(t_{k+1})-\Psi(t_k) - f(t_{k+1})\bigl(G(t_{k+1})-G(t_k)\bigr)$ equals $\int_{t_k}^{t_{k+1}}\bigl(f - f(t_{k+1})\bigr)g$. [step 1.1, L3, L9]

3.1 So, writing $S(P) := \sum_{k<n}\bigl(G(t_{k+1})-G(t_k)\bigr)f(t_{k+1})$, [L5] gives $S(P) = G(t_n)f(t_n) - \sum_{k<n-1}G(t_{k+1})\bigl(f(t_{k+2})-f(t_{k+1})\bigr) = G(b)f(b) - \sum_{k<n-1}x_{k+1}$, where $x_j := G(t_j)\,d_j$. [step 2.2, L5, L7, construct]

3.2 For $x \in I_k$ both $f(x)$ and $f(t_{k+1})$ lie in $[m_k,M_k]$, so $\bigl|\bigl(f(x)-f(t_{k+1})\bigr)g(x)\bigr| \le K\,(M_k-m_k)$; hence by [L2] and [L9], $-K(M_k-m_k)\Delta_k \le \int_{t_k}^{t_{k+1}}\bigl(f-f(t_{k+1})\bigr)g \le K(M_k-m_k)\Delta_k$. [step 2.3, given, L2, L7, L9, L10]

4.1 By [L6], $\sum_{j<n}x_j = x_0 + \sum_{k<n-1}x_{k+1}$, and $x_0 = G(t_0)d_0 = G(a)d_0 = 0$; so, putting $T(P) := \sum_{j<n}G(t_j)\,d_j$, step 3.1 reads $S(P) = G(b)f(b) - T(P)$. [step 3.1, L3, L6, construct]

4.2 Summing over $k<n$ with [L6], and telescoping $\sum_{k<n}\bigl(\Psi(t_{k+1})-\Psi(t_k)\bigr) = \Psi(b)-\Psi(a) = \int_a^b fg$, gives $\bigl|\int_a^b fg - S(P)\bigr| \le K\bigl(U(f,P)-L(f,P)\bigr)$. [step 1.1, step 2.3, step 3.2, L6, L7, L10]

5.1 **$T(P)$ is $\lambda_P C$ for some $\lambda_P \in [m,M]$, when $C \ne 0$.** By step 1.2, $m \le G(t_j) \le M$ for every $j$. If $f$ is nondecreasing then $d_j \ge 0$, so $m\,d_j \le G(t_j)d_j \le M\,d_j$, and summing with [L6] and step 1.3 gives $mC \le T(P) \le MC$ with $C \ge 0$; if $f$ is nonincreasing then $d_j \le 0$, so $M\,d_j \le G(t_j)d_j \le m\,d_j$, and summing gives $MC \le T(P) \le mC$ with $C \le 0$. Dividing by $C$ in the first case, and by the negative $C$ with the inequalities reversed in the second, gives $m \le T(P)/C \le M$ in both. [step 1.2, step 1.3, step 4.1, L6, L10, construct]

6.1 **The case $C \ne 0$.** Put $\lambda := \bigl(G(b)f(b) - \int_a^b fg\bigr)/C$. By step 4.1, $\int_a^b fg - S(P) = \int_a^b fg - G(b)f(b) + T(P) = \bigl(\lambda_P - \lambda\bigr)C$ for every partition $P$, where $\lambda_P = T(P)/C$. [step 4.1, step 5.1, L10, construct]

7.1 By [L8] fix a partition $P$ with $U(f,P)-L(f,P) < \varepsilon\,|C|/(K+1)$, a positive real; then step 4.2 and step 6.1 give $|\lambda_P - \lambda|\,|C| \le K\bigl(U(f,P)-L(f,P)\bigr) < \varepsilon|C|$, so $|\lambda_P - \lambda| < \varepsilon$. [step 4.2, step 6.1, L8, L10, choose]

8.1 Since $m \le \lambda_P \le M$ by step 5.1, it follows that $m - \varepsilon < \lambda < M + \varepsilon$; as $\varepsilon > 0$ was arbitrary, $m \le \lambda \le M$. [step 5.1, step 7.1, L10]

9.1 By step 1.2, $G[\,[a,b]\,] = [m,M]$, so there is $\xi \in [a,b]$ with $G(\xi) = \lambda$. [step 1.2, step 8.1, L4, choose]

10.1 Then $\int_a^b fg = G(b)f(b) - \lambda C = f(b)G(b) - G(\xi)\bigl(f(b)-f(a)\bigr) = f(a)G(\xi) + f(b)\bigl(G(b)-G(\xi)\bigr)$, and $G(\xi) = \int_a^{\xi}g$ with $G(b)-G(\xi) = \int_{\xi}^{b} g$ by [L3]; this is the stated identity. [step 6.1, step 9.1, L3, algebra]

11.1 The cases $C = 0$ and $C \ne 0$ are exhaustive, so the theorem holds in both. [step 2.1, step 10.1, L10] ∎

## Remarks

- **The published summation-by-parts lemma was matched to its own indexing before it was used.** [[lem-abel-summation-by-parts]] reads $\sum_{k<n}\alpha_k\beta_k = A_n\beta_{n-1} - \sum_{k<n-1}A_{k+1}(\beta_{k+1}-\beta_k)$ with $A_j = \sum_{k<j}\alpha_k$, so $A_0 = 0$ and the boundary value is $\beta_{n-1}$, not $\beta_n$. Taking $\beta_k := f(t_{k+1})$ rather than $f(t_k)$ is what makes that boundary value $f(t_n) = f(b)$; and the shifted sum on the right is a sum over $j = 1, \dots, n-1$ whose missing $j = 0$ term is $G(t_0)d_0 = 0$, because the integral function vanishes at its base point. Both observations are step 3.1 and step 4.1, and the theorem would be off by a term without either.

- **The passage to the limit is an estimate, not a Riemann-sum convergence theorem.** Step 4.2 bounds $\bigl|\int_a^b fg - S(P)\bigr|$ by $K\bigl(U(f,P)-L(f,P)\bigr)$ for *every* partition, and the integrability of $f$ alone drives the right-hand side to $0$. No tagged partition, no mesh condition and no appeal to [[thm-darboux-equals-riemann]] is involved, and the approximating sums are not Riemann sums of $fg$.

- **What is not proved here.** Nothing is claimed about $\xi$ lying in the open interval, and nothing about the sharper form in which $f$ is assumed nonnegative and nonincreasing, where the conclusion becomes $\int_a^b fg = f(a)\int_a^{\xi}g$. That refinement needs the one-sided normalisation of $f$ at $a$ and is not used anywhere on this page.
