---
id: ex-lacunary-exponential-sums-belong-to-bmo
kind: example
title: "Finite lacunary exponential sums belong to BMO"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-bmo-seminorm-and-quotient-by-constants]
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
      locator: "Exercise Q4 (Lacunary exponential sums lie in BMO), printed pp. 26-27"
---

## Example

Let $0<a\le b<\infty$, and let $(\xi_n)_{n\in\mathbb Z}$ be nonzero real
frequencies satisfying
$a2^n\le|\xi_n|\le b2^n$ for every $n$. Let $(c_n)_{n\in\mathbb Z}$ have
finite support and put
$$f(x):=\sum_{n\in\mathbb Z}c_ne^{2\pi i\xi_nx}.$$
Then
$$\|f\|_{\mathrm{BMO}(\mathbb R)}\le C_{a,b,\phi}\Bigl(\sum_n|c_n|^2\Bigr)^{1/2}.$$
More precisely, fix a nonnegative $\phi\in C_c^\infty(\mathbb R)$ with
$\phi\ge1$ on $[-\tfrac12,\tfrac12]$. For an interval $I$ of length $L$ and
centre $x_I$, set $\phi_I(x):=\phi((x-x_I)/L)$. There is a constant
$c_I\in\mathbb C$ such that
$$\int_{\mathbb R}\phi_I(x)|f(x)-c_I|^2\,dx \le C_{a,b,\phi}L\sum_n|c_n|^2.$$

## Facts & Assumptions

**Given:** The finite exponential sum $f$, the frequency bounds above, a nonnegative compactly supported smooth bump $\phi$ with $\phi\ge1$ on $[-\tfrac12,\tfrac12]$, and a nondegenerate interval $I$.

[L1] For every locally integrable $g$ and every constant $c$,
$$|I|^{-1}\int_I|g-g_I|\le2|I|^{-1}\int_I|g-c|,$$
and the BMO seminorm is the supremum of the mean oscillations over intervals
in dimension one ([[def-bmo-seminorm-and-quotient-by-constants]]).

[L2] Since $\phi\in C_c^\infty$, both $\int\phi(y)\,dy$ and
$\int\phi(y)y^2\,dy$ are finite. For every integer $M\ge1$, integration by
parts $M$ times gives
$$\left|\int_{\mathbb R}\phi(y)e^{2\pi i\zeta y}\,dy\right| \le C_{M,\phi}(1+|\zeta|)^{-M}.$$
For $|\zeta|\le1$ this follows instead from $\|\phi\|_1$; combining the two
estimates gives the displayed bound.

## Verification

**Proof technique:** direct low- and high-frequency split.

Fix $I$, write $L=|I|$, and let $n_0$ be the least integer with
$2^{n_0}\ge L^{-1}$. Thus $1\le L2^{n_0}<2$. Split $f=f_{<}+f_{\ge}$ at
$n_0$ and choose
$$c_I:=f_{<}(x_I)=\sum_{n<n_0}c_ne^{2\pi i\xi_nx_I}.$$

1.1 Low frequencies. For every $n<n_0$, $|e^{2\pi i\xi_nx}-e^{2\pi i\xi_nx_I}| \le2\pi|\xi_n||x-x_I|$. After $x=x_I+Ly$, $$\left(\int\phi_I(x) |e^{2\pi i\xi_nx}-e^{2\pi i\xi_nx_I}|^2dx\right)^{1/2} \le C_\phi |\xi_n|L^{3/2}.$$ The triangle inequality in $L^2(\phi_I dx)$, Cauchy--Schwarz, and the upper frequency bound therefore give $$\begin{aligned} \|f_{<}-c_I\|_{L^2(\phi_I dx)} &\le C_\phi L^{3/2}\sum_{n<n_0}|c_n||\xi_n|\\ &\le C_{b,\phi}L^{3/2}\Bigl(\sum_n|c_n|^2\Bigr)^{1/2} \Bigl(\sum_{n<n_0}4^n\Bigr)^{1/2}\\ &\le C_{b,\phi}L^{1/2}\Bigl(\sum_n|c_n|^2\Bigr)^{1/2}, \end{aligned}$$ because $2^{n_0}<2L^{-1}$. [L2, algebra]

1.2 High frequencies. Define $$G_{nm}:=L^{-1}\int_{\mathbb R}\phi_I(x) e^{2\pi i(\xi_n-\xi_m)x}\,dx\qquad(n,m\ge n_0).$$ The change of variables $x=x_I+Ly$ and [L2] give, for every fixed integer $M\ge1$, $$|G_{nm}|\le C_{M,\phi} (1+L|\xi_n-\xi_m|)^{-M}.$$ Choose an integer $K\ge1$ such that $b2^{-K}\le a/2$. If $|n-m|>K$, the frequency comparability implies $$|\xi_n-\xi_m|\ge\bigl||\xi_n|-|\xi_m|\bigr| \ge(a/2)2^{\max(n,m)}.$$ For each fixed $n\ge n_0$, the terms with $|m-n|\le K$ contribute at most a constant to $\sum_{m\ge n_0}|G_{nm}|$. For $m>n+K$ their sum is bounded by $$C\sum_{r\ge1}(1+L2^{n+r})^{-M}\le C\sum_{r\ge1}2^{-Mr}<\infty,$$ using $L2^n\ge1$. For $n_0\le m<n-K$, there are at most $n-n_0$ terms, each bounded by $C(1+L2^n)^{-M}$; their total is bounded uniformly because $L2^n\ge2^{n-n_0}$ and $\sup_{r\ge0}r(1+2^r)^{-M}<\infty$. Hence the absolute row sums of $(G_{nm})_{n,m\ge n_0}$ are uniformly bounded. Since $|G_{nm}|=|G_{mn}|$, the inequality $2|c_n||c_m|\le|c_n|^2+|c_m|^2$ yields $$\begin{aligned} \int\phi_I|f_{\ge}|^2 &\le L\sum_{n,m\ge n_0}|c_n||c_m||G_{nm}|\\ &\le C_{a,b,\phi} L\sum_n|c_n|^2. \end{aligned}$$ [L2, algebra]

2.1 Combining the two pieces with $|f-c_I|^2\le2|f_{<}-c_I|^2+2|f_{\ge}|^2$ gives $$\int_{\mathbb R}\phi_I|f-c_I|^2 \le C_{a,b,\phi}L\sum_n|c_n|^2.$$ Since $\phi_I\ge1$ on $I$, Cauchy--Schwarz and [L1] imply $$\begin{aligned} L^{-1}\int_I|f-f_I| &\le2L^{-1}\int_I|f-c_I|\\ &\le2L^{-1/2}\left(\int_I|f-c_I|^2\right)^{1/2}\\ &\le C_{a,b,\phi}\Bigl(\sum_n|c_n|^2\Bigr)^{1/2}. \end{aligned}$$ Taking the supremum over all nondegenerate intervals proves the BMO bound. The proof uses finite sums only and no choice principle. [step 1.1, step 1.2, L1, algebra] ∎ 
