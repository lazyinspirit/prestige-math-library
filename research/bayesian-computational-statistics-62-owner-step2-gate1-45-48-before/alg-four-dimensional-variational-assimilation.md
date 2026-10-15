---
id: alg-four-dimensional-variational-assimilation
kind: algorithm
title: Strong- and weak-constraint 4DVAR with a finite gradient run
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-data-assimilation-problem
  - alg-gradient-descent
axiom_use: The finite-dimensional objective construction and finite gradient iteration use no choice principle.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 3 §3.3"
      url: "https://arxiv.org/pdf/1506.07825v1"
    - title: "Geir Evensen, Femke C. Vossepoel, and Peter Jan van Leeuwen, Data Assimilation Fundamentals, Chapters 4–5"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-96709-3.pdf"
---

## Definition

Fix $T\ge1$, an initial background mean $m_b$, background covariance $B\succ0$, observations $y_t$, observation maps $G_t$, and observation covariances $\Gamma_t\succ0$. All decision spaces below are finite-dimensional open subsets on which the stated maps are continuously differentiable. For a positive-definite covariance $M$, write $\|v\|_{M^{-1}}^2=v^TM^{-1}v$.

In **strong-constraint 4DVAR**, choose the initial state $u_0$ and generate $u_t=\Psi_{t-1}(u_{t-1})$ for $1\le t\le T$. Minimize the trajectory objective
$$J_s(u_0)=\tfrac12\|u_0-m_b\|_{B^{-1}}^2+\tfrac12\sum_{t=1}^T\|y_t-G_t(u_t)\|_{\Gamma_t^{-1}}^2.$$

In **weak-constraint 4DVAR**, the decision variable is the full path $(u_0,\ldots,u_T)$. Given model-error covariances $Q_t\succ0$, minimize
$$J_w(u_0,\ldots,u_T)=\tfrac12\|u_0-m_b\|_{B^{-1}}^2+\tfrac12\sum_{t=1}^T\|y_t-G_t(u_t)\|_{\Gamma_t^{-1}}^2+\tfrac12\sum_{t=1}^T\|u_t-\Psi_{t-1}(u_{t-1})\|_{Q_t^{-1}}^2.$$

Select one objective, an initial decision vector, a finite iteration limit $M\ge0$, and either positive fixed steps or the backtracking parameters required by [[alg-gradient-descent]]. Run that algorithm on the selected objective for at most $M$ updates and return its last iterate (or report its domain failure). In strong mode return the trajectory generated from the last initial-state iterate; in weak mode return the last path iterate. This is a finite numerical procedure, not a guarantee that a global or local minimizer is reached. The page's BCS-20 hypotheses for gradient descent supply no general guarantee for these objectives.
