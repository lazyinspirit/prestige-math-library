---
id: thm-misspecified-iid-lan-under-kv-smoothness
kind: theorem
title: A local KL expansion and square-integrable log-Lipschitz envelope give misspecified iid LAN
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-op-and-little-op-stochastic-bounds
  - lem-local-lipschitz-class-empirical-process-bound
justified_by: []
proof_strategy: direct
axiom_use: "None in the supplied-density formulation. The contrast K(theta)=E_0 log(p_0/p_theta) and the jointly measurable density versions are explicit inputs; no Radon–Nikodym representatives are selected here."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises theorem under misspecification, §2.2, Lemma 2.1 and proof"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
    - title: "Peter Bartlett, Theoretical Statistics, Lecture 23, QMD and local asymptotic normality"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/23notes.pdf"
---

## Statement

Let $X_1,X_2,\ldots$ be IID from $P_0$ on a measurable space, and let
$\Theta\subset\mathbb R^d$ be open, $d\ge1$. Suppose a sigma-finite measure
$\mu$ and jointly measurable finite-valued densities $p_0,p_\theta$ are
supplied, with $P_0(dx)=p_0(x)\mu(dx)$, $P_\theta(dx)=p_\theta(x)\mu(dx)$,
and $p_{\theta^*}>0$ $P_0$-almost surely. Define the directional contrast
$$K(\theta)=E_0\log\frac{p_0(X)}{p_\theta(X)}.$$
Assume $K$ is finite near an interior point $\theta^*$, $\theta^*$ is a
finite minimizer of $K$, and, for $t\to0$,
$$E_0\log\frac{p_{\theta^*}(X)}{p_{\theta^*+t}(X)}=\tfrac12t^TVt+o(\|t\|_2^2)$$
for a fixed symmetric positive-definite matrix $V$. Assume also that a
measurable random vector $s(X)\in\mathbb R^d$ satisfies
$$\frac{\log p_{\theta^*+t}(X)-\log p_{\theta^*}(X)-t^Ts(X)}{\|t\|_2}\longrightarrow0$$
in $P_0$-probability as $t\to0$ through nonzero vectors, and that on a
neighbourhood $U$ of $\theta^*$ there is a common $P_0$-almost-sure bound
$$\left|\log\frac{p_{\theta_1}(X)}{p_{\theta_2}(X)}\right|\le M(X)\|\theta_1-\theta_2\|_2\qquad(\theta_1,\theta_2\in U),$$
where $M\ge0$ and $E_0M^2<\infty$. Then $E_0s=0$ and
$I=E_0[ss^T]$ is finite. With $S_n=n^{-1/2}\sum_{i=1}^ns(X_i)$ and
$\Delta_n=V^{-1}S_n$, for every compact $H\subset\mathbb R^d$,
$$\sup_{h\in H}\left|\sum_{i=1}^n\log\frac{p_{\theta^*+h/\sqrt n}(X_i)}{p_{\theta^*}(X_i)}-h^TS_n+\tfrac12h^TVh\right|=o_{P_0}(1).$$
Suprema and convergence in probability use measurable versions obtained by
setting the log-ratio class to zero off its common measurable full set.
In particular $\Delta_n=O_{P_0}(1)$. No equality between $I$ and $V$ is
assumed; under misspecification they generally differ.

## Facts & Assumptions

**Given:** The supplied dominated iid density model, finite interior KL minimizer, differentiability in $P_0$-probability, square-integrable local log-Lipschitz envelope, and positive-definite second-order contrast expansion in the Statement.

[F1] [[def-identically-distributed-and-iid-random-variables]]: The observations have one common law and are mutually independent.

[F2] [[def-op-and-little-op-stochastic-bounds]]: $o_P(1)$ means convergence in probability to zero, and $O_P(1)$ means boundedness in probability in finite-dimensional Euclidean norm.

[F3] [[lem-local-lipschitz-class-empirical-process-bound]]: For an iid sample and a pointwise Lipschitz class with square-integrable envelope $M$, the local centered-process supremum is at most $C_dr\|M\|_2$ in expectation, and its modulus over parameter pairs at distance at most $\varepsilon$ is at most $C_d\varepsilon\sqrt{\log(e r/\varepsilon)}\|M\|_2$ in expectation.

## Proof

**Given:** The objects and hypotheses in the Statement. Write $P_nf=n^{-1}\sum_{i=1}^nf(X_i)$ and $G_nf=\sqrt n(P_n-P_0)f$.

1.1 Define the log-ratio class to be zero off the common measurable full set of the log-Lipschitz bound, as in [F3]; this changes no integral or almost-sure sample path and makes its suprema measurable. On that full set put $f_t=\log(p_{\theta^*+t}/p_{\theta^*})$ and $r_t=f_t-t^Ts$. Along every coordinate direction $e_j$, $f_{ae_j}/a\to s_j$ in $P_0$-probability as $a\to0$, while the envelope gives $|f_{ae_j}/a|\le M$. Dominated convergence along almost-surely convergent subsequences therefore gives $E_0s_j=\lim_{a\to0}E_0f_{ae_j}/a=0$, since the contrast expansion makes the last numerator $O(a^2)$. The same subsequence argument applied to the directional difference quotients and the common envelope gives $|s_j|\le M$ almost surely for every coordinate, hence $\|s\|_2\le\sqrt d M$ and $E_0\|s\|_2^2<\infty$. [F1, F3, given, algebra]

1.2 The contrast expansion is uniform after the local substitution: for fixed $R$, $\sup_{\|h\|_2\le R}\left|nE_0f_{h/\sqrt n}+\tfrac12h^TVh\right|\longrightarrow0,$ because the remainder divided by $\|t\|_2^2$ tends to zero uniformly over $0<\|t\|_2\le R/\sqrt n$. [given, algebra]

2.1 Differentiability in probability says $r_t/\|t\|_2\to0$ in $P_0$-probability. The bound $|r_t|/\|t\|_2\le M+\|s\|_2\le(1+\sqrt d)M$ and $E_0M^2<\infty$ imply $E_0r_t^2=o(\|t\|_2^2)$ by dominated convergence along every sequence $t\to0$. Also $|r_t-r_u|\le L\|t-u\|_2$ on the common full set, where $L=(1+\sqrt d)M$. Fix $R>0$ and $0<\varepsilon\le R$, and choose a finite $\varepsilon$-net $H_\varepsilon$ of the radius-$R$ ball. For each fixed $h\in H_\varepsilon$, independence gives $E_0\left|n(P_n-P_0)r_{h/\sqrt n}\right|^2=n\,\operatorname{Var}_0(r_{h/\sqrt n})\le nE_0r_{h/\sqrt n}^2\longrightarrow0.$ Because the net is finite, the maximum of these centered sums tends to zero in probability. For any $h$ in the ball choose $h_\varepsilon\in H_\varepsilon$ with $\|h-h_\varepsilon\|_2\le\varepsilon$. The modulus bound [F3], applied to $r_t$ with envelope $L$ on radius $R/\sqrt n$ and distance $\varepsilon/\sqrt n$, gives $E_0\sup_{\substack{\|h\|_2,\|h'\|_2\le R\\\|h-h'\|_2\le\varepsilon}}\left|n(P_n-P_0)(r_{h/\sqrt n}-r_{h'/\sqrt n})\right|\le C_d\|L\|_{L^2(P_0)}\varepsilon\sqrt{\log(eR/\varepsilon)}.$ For fixed $\varepsilon$, the finite-net maximum vanishes as $n\to\infty$; Markov's inequality bounds the remaining modulus probability by a constant times $\varepsilon\sqrt{\log(eR/\varepsilon)}$, which tends to zero as $\varepsilon\downarrow0$. Therefore $\sup_{\|h\|_2\le R}\left|n(P_n-P_0)r_{h/\sqrt n}\right|=o_{P_0}(1).$ [F1, F2, F3, step 1.1, given, choose, algebra]

3.1 For $\|h\|_2\le R$, decompose $\sum_{i=1}^nf_{h/\sqrt n}(X_i)=nE_0f_{h/\sqrt n}+h^TS_n+n(P_n-P_0)r_{h/\sqrt n},$ where $E_0s=0$ from step 1.1. Step 2.1 controls the last term uniformly, and step 1.2 gives the uniform quadratic term. Therefore the displayed LAN remainder is $o_{P_0}(1)$ uniformly on every compact $H$. [step 1.1, step 2.1, step 1.2, algebra]

4.1 Independence, $E_0s=0$, and $E_0\|s\|_2^2<\infty$ give $E_0\|S_n\|_2^2=E_0\|s\|_2^2$ for every $n$. Since $R^2\mathbf1_{\{\|S_n\|_2>R\}}\le\|S_n\|_2^2$, $P_0(\|S_n\|_2>R)\le E_0\|s\|_2^2/R^2$, so $(S_n)$ is bounded in probability. Multiplication by the fixed matrix $V^{-1}$ preserves boundedness because $\|V^{-1}S_n\|_2\le\|V^{-1}\|\,\|S_n\|_2$. Thus $\Delta_n=O_{P_0}(1)$ by [F2], completing the LAN assertion. [F1, F2, step 1.1, algebra] ∎
