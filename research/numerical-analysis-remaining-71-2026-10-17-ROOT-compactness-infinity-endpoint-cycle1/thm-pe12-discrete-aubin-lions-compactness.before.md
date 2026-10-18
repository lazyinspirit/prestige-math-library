---
id: thm-pe12-discrete-aubin-lions-compactness
kind: theorem
title: Piecewise-constant discrete Aubin–Lions compactness
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-pe12-gelfand-triple, def-compactly-embedded-normed-spaces, def-dependent-choice, def-countable-choice, thm-holder-inequality-for-integrals, thm-minkowski-inequality-for-integrals, thm-pe12-bochner-lp-completeness, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Tomáš Roubíček, Nonlinear Partial Differential Equations with Applications, 2nd ed., Birkhäuser, 2005
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MC/MCde/Roubicek%20T.%20Nonlinear%20partial%20differential%20equations%20with%20applications%20%282ed.%2C%202005%29%28ISBN%209783034805124%29%28O%29%28457s%29_MCde_.pdf
      locator: §7.3, compactness proof via time averaging, printed pp. 208–210
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes, arXiv:1709.08618v2
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: Chapter 12 §12.1, piecewise-constant dG(0)/implicit Euler time stepping, PDF pp. 102–103
---

## Statement

Assume the Axiom of Choice.

Let $V\Subset H\hookrightarrow V^*$ be a Banach evolution triple. For each
$k$, let $0=t_0^k<\cdots<t_{N_k}^k=T$ be a partition with maximum step
$\delta_k\to0$, let $U_k^n\in V$, and define $\overline U_k(t)=U_k^n$ on
$I_n^k=(t_{n-1}^k,t_n^k]$ and
$D_k(t)=(U_k^n-U_k^{n-1})/\tau_n^k$ there. Suppose, for some
$1<p<\infty$ and $1<q\le\infty$,
$$\sup_k\|\overline U_k\|_{L^p(0,T;V)} +\sup_k\|D_k\|_{L^q(0,T;V^*)}<\infty.$$
Then the time translates satisfy, on their common intervals,
$$\|\overline U_k(\cdot+s)-\overline U_k\|_{L^q(V^*)} \le (s+2\delta_k)\|D_k\|_{L^q(V^*)},$$
and $(\overline U_k)$ is relatively compact in $L^p(0,T;H)$. If also
$\sup_{k,n}\|U_k^n\|_H<\infty$, every convergent subsequence converges in
every $L^r(0,T;H)$ with $1\le r<\infty$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the compact and continuous embeddings, the partitions and node
values, and the two uniform Bochner bounds in the statement.

[F1] $V\Subset H$ means bounded subsets of $V$ have compact closure in $H$;
$H\hookrightarrow V^*$ is the canonical evolution embedding
([[def-compactly-embedded-normed-spaces]],
[[def-pe12-gelfand-triple]]).

[F2] Hölder and Minkowski inequalities give
$\|\int_a^b g\|\le\int_a^b\|g\|$ and
$\|g+h\|_{L^q}\le\|g\|_{L^q}+\|h\|_{L^q}$
([[thm-holder-inequality-for-integrals]],
[[thm-minkowski-inequality-for-integrals]]).

[F3] The Bochner space $L^p(0,T;H)$ is complete
([[thm-pe12-bochner-lp-completeness]]).

[A1] The Axiom of Choice supplies Countable and Dependent Choice for
sequential compactness and subsequence extraction
([[def-axiom-of-choice]],
[[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]],
[[def-countable-choice]], [[def-dependent-choice]]).

## Proof
1.1 Let $\widehat U_k$ be the continuous affine interpolation of the nodes. On $I_n^k$ its derivative equals $D_k$. For $0\le s<T$ and $0<t<T-s$, the fundamental theorem for the affine function gives $\widehat U_k(t+s)-\widehat U_k(t)=\int_t^{t+s}D_k(r)\,dr$. Minkowski [F2] and translation invariance of the time integral yield $\|\widehat U_k(\cdot+s)-\widehat U_k\|_{L^q(0,T-s;V^*)} \le s\|D_k\|_{L^q(V^*)}$. [F2, given]

2.1 If $t\in I_n^k$, write $t=t_{n-1}^k+\theta\tau_n^k$ with $0<\theta\le1$. Then $\overline U_k(t)-\widehat U_k(t)=(1-\theta)(U_k^n-U_k^{n-1})$. Consequently, $$\|\overline U_k-\widehat U_k\|_{L^q(V^*)}^q \le\sum_n\tau_n^k\|U_k^n-U_k^{n-1}\|_{V^*}^q \le\delta_k^q\|D_k\|_{L^q(V^*)}^q.$$ Combining this estimate at $t$ and $t+s$ with step 1.1 proves the stated $(s+2\delta_k)$ translate bound. [F2, step 1.1, algebra]

3.1 Fix $\varepsilon>0$. By [F1], the image in $H$ of the $V$ unit ball has compact closure. Choose finitely many centers from that image forming an $\varepsilon$-net, let $E\subset i(V)$ be their span, and let $P_E$ be the $H$-orthogonal projection. Its best-approximation property gives $\|(I-P_E)iv\|_H\le\varepsilon\|v\|_V$ for every $v\in V$. Choose an $H$-orthonormal basis $e_j=iv_j$ of $E$. The scalar coefficients $a_{k,j}^n=(U_k^n,e_j)_H$ have weighted $L^p$ bounds from the $L^p(V)$ bound, and their total variation satisfies $$\sum_n|a_{k,j}^n-a_{k,j}^{n-1}| \le\|v_j\|_V\sum_n\tau_n^k\|D_k\|_{V^*} \le T^{1-1/q}\|v_j\|_V\|D_k\|_{L^q(V^*)}.$$ At least one node value is no larger than its weighted $L^p$ average, so the total-variation bound gives a uniform bound for every nodal coefficient. [F1, F2, step 2.1, choose]

4.1 The affine scalar interpolants of these finitely many coefficients are uniformly bounded. Their derivatives have $L^q$ bounds, so Hölder gives a common modulus $C|t-s|^{1-1/q}$ (or $C|t-s|$ for $q=\infty$). Finite-grid rounding therefore makes the projected affine family totally bounded in $C([0,T];E)$. The maximum nodal jump is at most $\delta_k^{1-1/q}\|D_k\|_{L^q(V^*)}\|v_j\|_V$, so the projected piecewise-constant family differs from it uniformly by a quantity tending to zero. Thus $\{P_E\overline U_k\}$ is relatively compact in $L^p(H)$. [F2, step 3.1]

5.1 The projection remainder satisfies $\|\overline U_k-P_E\overline U_k\|_{L^p(H)} \le\varepsilon\|\overline U_k\|_{L^p(V)}$. Since $\varepsilon$ is arbitrary, steps 3.1 and 4.1 show the full family is totally bounded in $L^p(H)$; [A1] extracts a Cauchy subsequence, which converges by [F3]. This proves relative compactness. [A1, F1, F3, step 3.1, step 4.1]

6.1 If the nodal values are uniformly bounded by $M$ in $H$, then $\|\overline U_k-\overline U_\ell\|_{L^\infty(H)}\le2M$. For $r<p$, finite-measure Hölder upgrades the strong $L^p(H)$ convergence to $L^r(H)$. For $r\ge p$, $\|\overline U_k-\overline U_\ell\|_{L^r(H)}^r \le(2M)^{r-p}\|\overline U_k-\overline U_\ell\|_{L^p(H)}^p$, so the same subsequence is Cauchy in every finite $L^r(H)$ and converges there by [F3]. [F2, F3, step 5.1, algebra] ∎
