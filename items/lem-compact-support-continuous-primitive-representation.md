---
id: "lem-compact-support-continuous-primitive-representation"
kind: "lemma"
title: "Compact support continuous primitive representation"
deps: ["thm-local-structure-of-distributions-as-derivatives-of-continuous-functions", "thm-leibniz-rule-for-distributions", "lem-test-function-cutoffs-and-euclidean-localization", "lem-compactly-supported-distributions-extend-to-smooth-functions", "def-axiom-of-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
      title: "Razvan Gelca, Functional Analysis"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Let $u\in\mathcal D'(\Omega)$ have compact support $K$ and global order at most $m$. For every open $V$ with $K\subseteq V\subseteq\Omega$, there are finitely many continuous functions $g_\beta$ on $\Omega$, each compactly supported in $V$, such that
$$u=\sum_{0\le\beta_i\le m+2}\partial^\beta u_{g_\beta}.$$
Zero functions may fill unused indices. Only the AC use in the local representation theorem is needed beyond the stated elementary operations.

## Facts & Assumptions

[F1] Under AC, local representation by a continuous function can use the multi-index $\alpha=(m+2,\ldots,m+2)$ when the localized distribution has order bound $m$ ([[thm-local-structure-of-distributions-as-derivatives-of-continuous-functions]]).

[F2] Distributional Leibniz's rule holds for smooth multipliers ([[thm-leibniz-rule-for-distributions]]).

[F3] A compact set inside an open set admits a smooth compact cutoff equal to one near it ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F4] A compactly supported distribution pairs with smooth functions by cutoff, and vanishes on smooth functions zero near its support ([[lem-compactly-supported-distributions-extend-to-smooth-functions]]).

[F5] The assumed axiom is [[def-axiom-of-choice]].

## Proof

**Given:** $u,K,m,V$ and AC.

1.1 Use F3 in $V$ to choose $\theta\in\mathcal D(V)$ equal to one near $K$, and put $L=\operatorname{supp}\theta$. By F1 and F5 there is continuous $f$ on $\Omega$ with $u=\partial^\alpha u_f$ on $\mathcal D_L$, where each $\alpha_i=m+2$. For every test $\varphi$, F4 gives $u(\varphi)=u(\theta\varphi)$, and $\theta\varphi\in\mathcal D_L$, hence $u=\theta\partial^\alpha u_f$ globally on $\Omega$. [given, F1, F3, F4, F5]

2.1 For any distribution $w$, F2 implies the inverse product identity [step 1.1, F2, algebra]
$$\theta\partial^\alpha w=\sum_{\beta\le\alpha}(-1)^{|\alpha-\beta|}\binom\alpha\beta\partial^\beta\bigl((\partial^{\alpha-\beta}\theta)w\bigr).$$
Indeed expand each derivative on the right by F2. The coefficient of $(\partial^{\alpha-\gamma}\theta)\partial^\gamma w$ is $\binom\alpha\gamma\sum_{\delta\le\alpha-\gamma}(-1)^{|\alpha-\gamma-\delta|}\binom{\alpha-\gamma}\delta$. The sum is the product of the binomial expansions of $(1-1)^{\alpha_i-\gamma_i}$, so it is zero unless $\gamma=\alpha$, when it is one. Thus precisely the left side remains. [step 1.1, F2, algebra]

3.1 Apply step 2.1 to $w=u_f$ and define $g_\beta=(-1)^{|\alpha-\beta|}\binom\alpha\beta(\partial^{\alpha-\beta}\theta)f$. These functions are continuous and supported in $L\subseteq V$. Multiplying a regular functional by the smooth factor yields its pointwise product by the defining integral, so step 1.1 and the identity give the required sum. There are only $\prod_i(m+3)$ indices. If $K$ is empty, $u=0$ by support locality and all functions may be zero. For $m=0$ the bound is still $\beta_i\le2$. No further infinite selection occurs. $\square$ [step 2.1, step 1.1, F4]
