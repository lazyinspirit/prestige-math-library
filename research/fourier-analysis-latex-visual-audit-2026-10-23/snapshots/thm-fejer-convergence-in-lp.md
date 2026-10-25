---
id: thm-fejer-convergence-in-lp
kind: theorem
title: "Fejer means converge in L^p for 1 <= p < infinity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cesaro-and-abel-means-of-a-fourier-series, lem-fejer-kernel-is-a-positive-approximate-identity, thm-fejer-uniform-convergence-for-continuous-periodic-functions, thm-c-c-rn-is-dense-in-l-p-of-rn]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
---

## Statement

Assume the Axiom of Countable Choice.

Let $1\le p<\infty$, and let $f:\mathbb R\to\mathbb C$ be one-periodic with
$f|_{[0,1]}\in L^p([0,1])$. Then

$$\|\sigma_Nf-f\|_{L^p([0,1])}\longrightarrow0 \qquad (N\to\infty).$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, an exponent $1\le p<\infty$, and a one-periodic function $f$ with $f|_{[0,1]}\in L^p([0,1])$.

[L1] The Cesaro means satisfy $\sigma_Ng=g*F_N$ for every one-periodic integrable $g$ ([[def-cesaro-and-abel-means-of-a-fourier-series]]).

[L2] The Fejer kernels are nonnegative and have integral $1$ ([[lem-fejer-kernel-is-a-positive-approximate-identity]]).

[L3] Fejer means of continuous one-periodic functions converge uniformly ([[thm-fejer-uniform-convergence-for-continuous-periodic-functions]]).

[L4] Assuming the Axiom of Countable Choice, $C_c(\mathbb R)$ is dense in $L^p(\mathbb R)$ for $1\le p<\infty$ ([[thm-c-c-rn-is-dense-in-l-p-of-rn]]).

## Proof

**Proof technique:** direct.

1.1 Let $g$ be any one-periodic member of $L^p([0,1])$. By [L1] and the positivity and unit mass from [L2], Jensen's inequality gives $$|\sigma_Ng(x)|^p=\left|\int_0^1 g(x-t)F_N(t)\,dt\right|^p \le \int_0^1 |g(x-t)|^pF_N(t)\,dt.$$ Integrating in $x$ over $[0,1]$ and using one-periodicity yields $$\|\sigma_Ng\|_{L^p([0,1])}\le \|g\|_{L^p([0,1])}.$$ Applying this to $g-h$ shows $$\|\sigma_Ng-\sigma_Nh\|_{L^p([0,1])}\le \|g-h\|_{L^p([0,1])}.$$ [L1, L2, algebra]

1.2 If $u$ is continuous and one-periodic, then [L3] gives $$\sup_{x\in\mathbb R}|\sigma_Nu(x)-u(x)|\to0.$$ Hence $$\|\sigma_Nu-u\|_{L^p([0,1])}\le \sup_{x\in\mathbb R}|\sigma_Nu(x)-u(x)|\to0.$$ [L3, algebra]

1.3 Let $\varepsilon>0$. Because $|f|^p$ is integrable on $[0,1]$, choose $a\in(0,1/6)$ so that $$\int_0^a |f(x)|^p\,dx+\int_{1-a}^1 |f(x)|^p\,dx < (\varepsilon/6)^p.$$ Define $F_a:\mathbb R\to\mathbb C$ by $F_a(x)=f(x)$ for $x\in[a,1-a]$ and $F_a(x)=0$ otherwise. Then [L4] gives $g\in C_c(\mathbb R)$ with $$\|F_a-g\|_{L^p(\mathbb R)}<\varepsilon/6.$$ Let $\eta_a$ be the piecewise linear cutoff that is $0$ on $(-\infty,a/2]\cup[1-a/2,\infty)$, $1$ on $[a,1-a]$, and linear on $[a/2,a]$ and $[1-a,1-a/2]$. Put $h:=\eta_ag$. Then $h\in C_c((0,1))$ and, because $\eta_a=1$ on $[a,1-a]$ where $F_a$ is supported, $$\|h-F_a\|_{L^p(\mathbb R)}\le \|g-F_a\|_{L^p(\mathbb R)}<\varepsilon/6.$$ Now periodize $h$ by $$u(x):=\sum_{m\in\mathbb Z}h(x-m).$$ Since $\operatorname{supp}(h)$ is a compact subset of $(0,1)$, at most one summand is nonzero at each $x$, so $u$ is continuous and one-periodic. On $[0,1]$ only the $m=0$ summand can contribute, hence $u=h$ there. Therefore $$\|f-u\|_{L^p([0,1])}\le \|f-F_a\|_{L^p([0,1])}+\|F_a-h\|_{L^p(\mathbb R)}<\varepsilon/3.$$ [L4, given, choose, construct, algebra]

2.1 Choose $u$ as in step 1.3. Then $$\|\sigma_Nf-f\|_{L^p([0,1])}\le \|\sigma_N(f-u)\|_{L^p([0,1])}+\|\sigma_Nu-u\|_{L^p([0,1])}+\|u-f\|_{L^p([0,1])}.$$ Step 1.1 bounds the first term by $\|f-u\|_{L^p([0,1])}<\varepsilon/3$, and step 1.2 makes the middle term $<\varepsilon/3$ for all large $N$. Thus $$\|\sigma_Nf-f\|_{L^p([0,1])}<\varepsilon$$ for all large $N$. Since $\varepsilon>0$ was arbitrary, $\sigma_Nf\to f$ in $L^p([0,1])$. [step 1.1, step 1.2, step 1.3, choose, algebra] ∎
