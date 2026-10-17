---
id: def-dependent-input-shapley-effects
kind: definition
title: Shapley effects for dependent inputs
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [thm-conditional-expectation-is-the-l2-orthogonal-projection, def-axiom-of-choice, def-moments-variance-and-covariance]
axiom_use: The Axiom of Choice is assumed only because the published L2 conditional-expectation projection supplier states it; no further choice is used in this finite definition.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Eunhye Song, Barry L. Nelson, and Jeremy Staum, Shapley Effects for Global Sensitivity Analysis: Theory and Computation, §3.1"
      url: https://users.iems.northwestern.edu/~nelsonb/Publications/SongNelsonStaum.pdf
---

## Definition

Assume AC. On a probability space $(\Omega,\mathcal F,\mathbb P)$, let
$d\ge1$ be finite and let $X=(X_1,\ldots,X_d)$ be any jointly distributed
finite family of random elements. Let $Y=f(X)\in L^2(\mathbb P)$, and put
$V=\operatorname{Var}(Y)$. For $S\subseteq[d]$, set
$\mathcal G_S=\sigma(X_j:j\in S)$, with $\mathcal G_\varnothing=\{\varnothing,\Omega\}$, and
$$v(S)=\operatorname{Var}(\mathbb E[Y\mid\mathcal G_S]).$$
If $V>0$, let $\mathfrak S_d$ be the set of all $d!$ permutations of $[d]$,
and let $P_i^\pi$ contain the indices occurring before $i$ in $\pi$. The
**Shapley effect** of coordinate $i$ under this convention is
$$\phi_i=\frac{1}{d!\,V}\sum_{\pi\in\mathfrak S_d}\bigl(v(P_i^\pi\cup\{i\})-v(P_i^\pi)\bigr).$$
If $V=0$, the normalized effects are undefined. This definition is for
dependent inputs as well as independent ones; the independent Sobol ANOVA
components are not used to define $v$.
