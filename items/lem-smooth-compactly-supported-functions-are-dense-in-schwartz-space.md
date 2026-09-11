---
id: lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space
kind: lemma
title: Smooth compact supports are dense in Schwartz space
deps: ["def-schwartz-space-and-its-seminorms", "def-schwartz-topology-and-convergence", "lem-schwartz-cutoffs-from-the-standard-smooth-step", "def-ck-and-multi-index-notation-in-several-variables", "thm-general-leibniz-rule", "thm-symmetry-of-higher-mixed-partials"]
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
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Remark 11.5 and Exercise 11.1
---

## Statement

For $f\in\mathcal S(\mathbb R^n)$ and the preceding cutoff, $\chi(x/R)f(x)\in C_c^\infty$ and tends to $f$ in every Schwartz seminorm as $R\to\infty$. Thus $C_c^\infty$ is dense in the topology of [[def-schwartz-topology-and-convergence]]. This is choice-free.

## Facts & Assumptions

**Given:** Schwartz seminorms and multi-index notation ([[def-schwartz-space-and-its-seminorms]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[F1] The cutoff equals one on the unit ball, vanishes outside radius two, and its dilated derivatives have factor $R^{-|\gamma|}$ ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]).

[F2] The one-variable higher product rule holds ([[thm-general-leibniz-rule]]).

[F3] Smooth mixed partials commute ([[thm-symmetry-of-higher-mixed-partials]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F2] successively in each coordinate and use [F3] to regroup derivatives; for complex functions apply the real rule to the four real products. This gives $\partial^\beta(uv)=\sum_{\gamma\le\beta}\binom\beta\gamma(\partial^\gamma u)(\partial^{\beta-\gamma}v)$, where $\binom\beta\gamma=\prod_{j<n}\binom{\beta_j}{\gamma_j}$. Also, on $|x|\ge R$, $|x|\le\sum_{j<n}|x_j|$ gives $$|x^\alpha\partial^\delta f(x)|\le R^{-1}\sum_{j<n}p_{\alpha+e_j,\delta}(f).$$ Indeed multiply the left side by $|x|$ and bound each $|x_jx^\alpha\partial^\delta f|$ by its seminorm. [F2, F3, given, algebra] 

2.1 For $u=\chi_R-1$, [F1] makes the undifferentiated product-rule term vanish on $|x|\le R$ and have coefficient at most one elsewhere. For $\gamma\ne0$, $\partial^\gamma\chi_R$ is supported on $R\le|x|\le2R$, with supremum $R^{-|\gamma|}C_\gamma$, $C_\gamma=\|\partial^\gamma\chi\|_\infty<\infty$. Boundedness follows from continuity on its compact support. Hence for $R\ge1$ the formula in step 1.1 gives $$p_{\alpha\beta}((\chi_R-1)f)\le R^{-1}\sum_{j<n}p_{\alpha+e_j,\beta}(f)+\sum_{0\ne\gamma\le\beta}\binom\beta\gamma C_\gamma R^{-1-|\gamma|}\sum_{j<n}p_{\alpha+e_j,\beta-\gamma}(f).$$ This tends to zero. The product is smooth with compact support inside the dilated support of $\chi$; each weighted derivative is bounded on that compact set, so $\chi_Rf\in C_c^\infty\subseteq\mathcal S$. Taking the explicit integers $R=1,2,\ldots$ proves density. [step 1.1, F1, given] ∎
