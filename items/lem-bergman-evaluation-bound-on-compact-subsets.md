---
id: lem-bergman-evaluation-bound-on-compact-subsets
kind: lemma
title: Sup-norm and first-derivative bounds by the $L^2$ norm on compact subsets
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 1
proof_strategy: direct
deps:
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - cor-holomorphic-functions-in-several-variables-are-smooth
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - def-ck-and-multi-index-notation-in-several-variables
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-countable-choice
  - def-metric-ball
  - def-metric-continuity
  - def-metric-space
  - def-metric-topology
  - lem-bergman-mean-value-l2-bound
  - lem-compactness-is-intrinsic
  - lem-distance-to-set-is-lipschitz
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - prop-algebra-of-holomorphic-functions-in-several-variables
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - rem-complex-euclidean-space-dictionary
  - thm-cauchy-estimates-on-a-polydisc
  - thm-complex-plane-is-complete
  - thm-extreme-value-metric
  - thm-fatou-lemma
  - thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables
      url: https://www.jirka.org/scv/scv.pdf
      locator: "§5.2, Lemma 5.2.1 and its proof, PDF p. 161: the compact-set sup bound and $A^2$-closure argument; the first-derivative estimates are proved locally here. The source assumes a domain, while this local proof works for arbitrary open $\\Omega$."
    - title: Zbigniew Błocki, The Bergman Kernel and Metric
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: "§1, printed p. 1 (PDF p. 1): the point-evaluation estimate from the $|f|^2$ submean inequality and the resulting compact-set sup bound; the source assumes a bounded domain, while the local proof below needs only openness."
---

## Facts & Assumptions

**Given:** $m\ge1$, the Axiom of Countable Choice $\mathrm{AC}_\omega$, an open set $\Omega\subseteq\mathbb C^m$, a nonempty compact set $K\subseteq\Omega$, and a holomorphic function $f\in L^2(\Omega)$.

[A1] The only choice principle is $\mathrm{AC}_\omega$ ([[def-countable-choice]]). It is used through the local mean-value lemma and the complex $L^2$ Hilbert-space supplier; no full Axiom of Choice or sequence-selection principle is used.

[F1] Read $\mathbb C^m$ as $\mathbb R^{2m}$ with its Euclidean metric and norm ([[rem-complex-euclidean-space-dictionary]]).

[F2] Open and closed polydiscs and balls have the coordinatewise definitions of [[def-balls-and-polydiscs-in-complex-euclidean-space]].

[F3] For a holomorphic $g$ on an open set containing a closed polydisc $\overline\Delta_{\mathbf r}(a)$, the local mean-value lemma gives $|g(a)|\le (\pi^m\prod_{j<m}r_j^2)^{-1/2}\|g\|_{L^2(\Delta_{\mathbf r}(a))}$ ([[lem-bergman-mean-value-l2-bound]]).

[F4] If $g$ is holomorphic on $\Delta_{\boldsymbol\rho}(a)$, $r_j<\rho_j$, and $M=\sup_{\Gamma_{\mathbf r}(a)}|g|$, then $|\partial_z^\alpha g(a)|\le\alpha!M\prod_{j<m}r_j^{-\alpha_j}$ ([[thm-cauchy-estimates-on-a-polydisc]]).

[F5] Holomorphic functions on open subsets of $\mathbb C^m$ are continuous ([[cor-holomorphic-functions-in-several-variables-are-smooth]]).

[F6] Multi-index notation and $\partial^0 f=f$ use the convention of [[def-ck-and-multi-index-notation-in-several-variables]].

[F7] Under $\mathrm{AC}_\omega$, complex $L^2(\Omega)$ with its quotient norm is a Hilbert space, so the norm satisfies the triangle inequality and convergence implies the Cauchy property ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F8] If $0\le g\le h$ are measurable, then $\int g\le\int h$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F9] In a metric space, distance to a nonempty set is $1$-Lipschitz and hence continuous by the $\varepsilon$-$\delta$ definition ([[def-metric-space]], [[lem-distance-to-set-is-lipschitz]], [[def-metric-continuity]]).

[F10] In a metric space, openness gives a ball about each point ([[def-metric-topology]], [[def-metric-ball]]).

[F11] A compact subset is compact in its subspace metric, and a continuous real-valued function on a nonempty compact metric space attains its minimum ([[lem-compactness-is-intrinsic]], [[thm-extreme-value-metric]]).

[F12] Every Euclidean closed ball of positive radius in $\mathbb R^{2m}$ is compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[F13] A Cauchy sequence in $\mathbb C$ converges ([[thm-complex-plane-is-complete]]).

[F14] A locally uniform limit of holomorphic functions is holomorphic with locally uniform convergence of every complex derivative ([[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]]).

[F15] For nonnegative measurable functions, Fatou's lemma gives $\int\liminf g_n\le\liminf\int g_n$ ([[thm-fatou-lemma]]).

[F16] Sums and scalar multiples of holomorphic functions are holomorphic ([[prop-algebra-of-holomorphic-functions-in-several-variables]]).

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $m\ge1$, let $\Omega\subseteq\mathbb C^m$ be open, and let $K\subseteq\Omega$ be nonempty and compact. There are finite constants $C_K$ and $C_{K,\alpha}$ for every multi-index $\alpha$ with $|\alpha|\le1$ such that every holomorphic $f\in L^2(\Omega)$ satisfies

$$\sup_{z\in K}|f(z)|\le C_K\|f\|_{L^2(\Omega)},\qquad \sup_{z\in K}|\partial_z^\alpha f(z)|\le C_{K,\alpha}\|f\|_{L^2(\Omega)}.$$

Moreover, if a sequence of holomorphic $L^2(\Omega)$ functions $(f_n)$ converges in $L^2(\Omega)$ to an equivalence class $g$, then $g$ has a holomorphic representative $F$ and $f_n\to F$, $\partial_z^\alpha f_n\to\partial_z^\alpha F$ uniformly on $K$ for every $|\alpha|\le1$.

## Proof

**Proof technique:** direct, combining a local mean-value estimate with polydisc Cauchy estimates.

**Given:** $m,\Omega,K,f$ as in the statement.

1.1 If $\Omega^c=\varnothing$, set $\delta=1$. Otherwise put $q(z)=d(z,\Omega^c)$. By [F9] this is continuous, and for each $z\in K$ openness gives an $\varepsilon_z>0$ with $B(z,\varepsilon_z)\subseteq\Omega$, so $q(z)\ge\varepsilon_z>0$. The minimum $d_0=\min_{z\in K}q(z)$ is positive by [F11]; set $\delta=\min\{1,d_0\}$. In either case, $\overline B(z,\delta/2)\subseteq\Omega$ for every $z\in K$. Let $r=\delta/(4\sqrt m)>0$. [F1, F9, F10, F11, given]

2.1 For $z\in K$ the closed polydisc $\overline\Delta_{2r}(z)$ is contained in $\overline B(z,\delta/2)$, since each coordinate difference is at most $2r$ and $2\sqrt m r=\delta/2$. If $\zeta\in\Gamma_r(z)$, each coordinate of a point in $\overline\Delta_r(\zeta)$ differs from $z$ by at most $2r$ as well, so $\overline\Delta_r(\zeta)\subseteq\overline B(z,\delta/2)$. Thus these closed polydiscs lie in $\Omega$. For each such $\zeta$, the local mean bound [F3], monotonicity [F8], and the $L^2$ norm definition in [F7] give $|f(\zeta)|^2\le(\pi r^2)^{-m}\int_{\Delta_r(\zeta)}|f|^2\le(\pi r^2)^{-m}\|f\|_{L^2(\Omega)}^2$, so $\sup_{\zeta\in\Gamma_r(z)}|f(\zeta)|\le(\pi r^2)^{-m/2}\|f\|_{L^2(\Omega)}$. [A1, F1, F2, F3, F7, F8, step 1.1, given]

3.1 Since $f$ is holomorphic on $\Delta_{2r}(z)$ and $r<2r$, apply [F4] with outer polyradius $2r$ and inner polyradius $r$. For every $|\alpha|\le1$ this gives $|\partial_z^\alpha f(z)|\le\alpha!r^{-|\alpha|}(\pi r^2)^{-m/2}\|f\|_{L^2(\Omega)}$. This includes $\alpha=0$, where $\partial_z^0f=f$ by [F6]. [F2, F4, F6, step 2.1, given]

4.1 Taking $C_K=(\pi r^2)^{-m/2}$ and $C_{K,\alpha}=\alpha!r^{-|\alpha|}(\pi r^2)^{-m/2}$ in step 3.1 proves both compact estimates. [step 3.1, given, algebra]

5.1 Now let $(f_n)$ converge in $L^2(\Omega)$ to $g$. By [F7] it is Cauchy in that norm. For every nonempty compact $K'\subseteq\Omega$, applying the first estimate of step 4.1 to the holomorphic $L^2$ difference $f_n-f_k$ (holomorphic by [F16]) shows that $(f_n)$ is uniformly Cauchy on $K'$. Every point of $\Omega$ has an open ball neighborhood contained in $\Omega$ by [F10]; its concentric closed ball of half the radius is compact by [F12]. Completeness of $\mathbb C$ in [F13] therefore gives a pointwise limit $F$ on $\Omega$, and letting $k\to\infty$ in the uniform Cauchy bound shows $f_n\to F$ uniformly on every compact subset of $\Omega$. [A1, F1, F7, F10, F12, F13, F16, step 4.1, given]

6.1 The convergence in step 5.1 is locally uniform, so [F14] implies that $F$ is holomorphic and that $\partial_z^\alpha f_n\to\partial_z^\alpha F$ locally uniformly for every multi-index $\alpha$. In particular this convergence is uniform on the compact set $K$ for $|\alpha|\le1$. [F6, F14, step 5.1]

7.1 To identify the $L^2$ limit, fix $\varepsilon>0$ and choose $N$ so that $\|f_n-f_k\|_{L^2(\Omega)}<\varepsilon$ whenever $n,k\ge N$, using convergence to $g$ and [F7]. For fixed $n\ge N$, $f_k(z)\to F(z)$ pointwise; the functions are measurable since $f_n$ and the holomorphic $F$ are continuous by [F5]. Fatou's lemma [F15] applied to $|f_n-f_k|^2$ gives $\|f_n-F\|_{L^2(\Omega)}^2\le\liminf_{k\to\infty}\|f_n-f_k\|_{L^2(\Omega)}^2\le\varepsilon^2$. Thus $f_n-F\in L^2(\Omega)$, and the vector-space property in [F7] gives $F\in L^2(\Omega)$; the same estimate for all $n\ge N$ proves $f_n\to F$ in $L^2(\Omega)$. Uniqueness of limits in the norm metric gives $[F]=g$. [A1, F5, F7, F15, step 5.1, step 6.1, given] ∎
