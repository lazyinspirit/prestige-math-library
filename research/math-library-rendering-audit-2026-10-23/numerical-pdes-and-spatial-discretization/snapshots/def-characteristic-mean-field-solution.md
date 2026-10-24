---
id: def-characteristic-mean-field-solution
kind: definition
title: Characteristic solution of a probability mean-field equation
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-p-one-wasserstein-one, def-globally-lipschitz-mean-field-kernel, thm-borel-products-of-euclidean-spaces-are-euclidean-borel]
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used in the definition.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
---

## Definition

Fix $T>0$, a globally Lipschitz kernel $K$ as in [[def-globally-lipschitz-mean-field-kernel]], and a Borel probability measure $\mu_0$ on $\mathbb R^d$ with finite first moment as in [[def-p-one-wasserstein-one]]. A characteristic solution on $[0,T]$ consists of a jointly Borel map $X:[0,T]\times\mathbb R^d\to\mathbb R^d$, defined up to a $\mu_0$-null set of labels, such that $t\mapsto X_t(x)$ is absolutely continuous for $\mu_0$-almost every $x$, $X_0(x)=x$, and
$$X_t(x)=x+\int_0^t\int_{\mathbb R^d}K(X_s(x),X_s(y))\,d\mu_0(y)\,ds$$
for $\mu_0$-almost every $x$. It transports $\mu_0$ to $\mu_t=(X_t)_\#\mu_0$, where $(X_t)_\#\mu_0(A):=\mu_0(X_t^{-1}(A))$. The weighted path integrability convention is $\int_{\mathbb R^d}\sup_{0\le t\le T}|X_t(x)|d\mu_0(x)<\infty$; in particular every time slice has finite first moment.
