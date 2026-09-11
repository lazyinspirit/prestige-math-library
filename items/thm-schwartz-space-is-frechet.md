---
id: thm-schwartz-space-is-frechet
kind: theorem
title: Schwartz space is Fréchet
deps: ["def-schwartz-topology-and-convergence", "thm-uniform-derivative-limit-on-a-closed-interval", "thm-uniform-cauchy-criterion-real-functions", "thm-uniform-limit-continuous-real-functions", "thm-symmetry-of-higher-mixed-partials"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: Lemma 14.29 and equations (14.95)–(14.96), p.404
---

## Statement

The Schwartz topology is locally convex, metrizable and complete. Set $q_j=\max_{|\alpha|,|\beta|\le j}p_{\alpha\beta}$. A complete translation-invariant metric defining it is
$$d(f,g)=\sum_{j=0}^\infty2^{-j-1}\min(1,q_j(f-g)).$$
No choice axiom is required.

## Facts & Assumptions

**Given:** The seminorm topology of [[def-schwartz-topology-and-convergence]], already verified to be Hausdorff and locally convex.

[F1] The uniform Cauchy criterion gives uniform limits of real functions ([[thm-uniform-cauchy-criterion-real-functions]]).

[F2] Uniform limits of continuous real functions are continuous ([[thm-uniform-limit-continuous-real-functions]]).

[F3] On a nondegenerate closed interval, convergence at one point and uniform convergence of continuous derivatives identify the derivative of the limit ([[thm-uniform-derivative-limit-on-a-closed-interval]]).

[F4] Continuous higher mixed partials commute ([[thm-symmetry-of-higher-mixed-partials]]), applied separately to real and imaginary parts.

## Proof

**Proof technique:** direct.

1.1 The series converges since its terms are bounded by $2^{-j-1}$. Symmetry and translation invariance follow termwise; $\min(1,a+b)\le\min(1,a)+\min(1,b)$ proves the triangle inequality. Vanishing distance forces $q_0(f-g)=0$, hence $f=g$. To make $d(f,0)<\varepsilon$, choose $J$ with $\sum_{j>J}2^{-j-1}<\varepsilon/2$ and require $q_J(f)<\varepsilon/2$. Conversely, to ensure $q_J(f)<\eta$, put $\eta'=\min(\eta/2,1/2)$ and require $d(f,0)<2^{-J-1}\eta'$. Then $\min(1,q_J(f))<\eta'<1$, as required. Every finite seminorm neighbourhood contains such a $q_J$ ball and each $q_J$ ball is a finite seminorm neighbourhood, proving equality of topologies. [given, algebra]

2.1 Let $(f_k)$ be $d$-Cauchy. The converse estimate in step 1.1 makes it Cauchy in every $q_J$. Each $\partial^\beta f_k$ therefore has a unique uniform complex limit $g_\beta$, by applying [F1] to its real and imaginary parts, and this limit is continuous by [F2]. On any fixed coordinate segment $x+te_j$, $a\le t\le b$ with $a<b$, [F4] gives derivative $\partial^{\beta+e_j}f_k$. Apply [F3] componentwise to these restricted functions: their values converge at $a$ and their derivatives converge uniformly. Consequently $\partial_jg_\beta=g_{\beta+e_j}$ along every segment. Induction on the length of an ordered derivative now gives $f=g_0\in C^\infty$ and $\partial^\beta f=g_\beta$. Limits are unique specified values, so forming this family requires no choice. [step 1.1, F1, F2, F3, F4]

3.1 Fix $\alpha,\beta$ and $\varepsilon>0$. The seminorm Cauchy property gives $N$ with $|x^\alpha\partial^\beta(f_k-f_l)(x)|<\varepsilon/2$ for every $x$ and $k,l\ge N$. For fixed $x,k$, let $l\to\infty$ using step 2.1. Then $p_{\alpha\beta}(f_k-f)\le\varepsilon/2<\varepsilon$. Taking $k=N$ also shows $p_{\alpha\beta}(f)\le p_{\alpha\beta}(f_N)+\varepsilon/2<\infty$. Thus $f\in\mathcal S$ and $f_k\to f$ in every seminorm and hence in $d$. Combined with local convexity, this proves the claimed Fréchet property. [step 2.1, step 1.1, given] ∎
