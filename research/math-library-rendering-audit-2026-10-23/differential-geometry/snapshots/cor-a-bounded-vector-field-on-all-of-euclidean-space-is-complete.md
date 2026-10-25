---
id: cor-a-bounded-vector-field-on-all-of-euclidean-space-is-complete
kind: corollary
title: "A bounded vector field on all of Euclidean space is complete"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-autonomous-ordinary-differential-equation,
       cor-finite-maximal-time-forces-escape-from-every-compact-set,
       prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation,
       thm-norm-inequality-for-the-vector-valued-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Statement

Let $V:\mathbb R^n\to\mathbb R^n$ be a bounded continuous vector field that is
locally Lipschitz in the state variable. Then every maximal solution of the
autonomous ODE $x'=V(x)$ is defined for all time. In particular, a bounded smooth
Euclidean vector field is complete.

## Facts & Assumptions

**Given:** A bound $\|V(x)\|_2\le M$ for all $x\in\mathbb R^n$ and a maximal solution $x:(\alpha,\beta)\to\mathbb R^n$ of $x'=V(x)$.

[F1] This is an autonomous ODE in the sense of [[def-autonomous-ordinary-differential-equation]].

[F2] A solution satisfies the Volterra integral equation ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

[L1] The norm of a vector-valued integral is at most the integral of the norm ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[L2] If a maximal solution had a finite endpoint, then near that endpoint it would leave every compact subset of the ODE domain ([[cor-finite-maximal-time-forces-escape-from-every-compact-set]]).

## Proof

**Proof technique:** direct.

1.1 Fix $t_*\in(\alpha,\beta)$. If $t\ge t_*$, then [F2] and [L1] give the first inequality below, and if $t\le t_*$ they give the reflected inequality. [F2, L1]

$$\|x(t)-x(t_*)\|_2=\left\|\int_{t_*}^{t}V(x(s))\,ds\right\|_2\le\int_{t_*}^{t}\|V(x(s))\|_2\,ds\le M(t-t_*).$$

If $t\le t_*$, the oriented Volterra equation gives $x(t)-x(t_*)=-\int_t^{t_*}V(x(s))\,ds$, so [L1] yields

$$\|x(t)-x(t_*)\|_2\le\int_t^{t_*}\|V(x(s))\|_2\,ds\le M(t_*-t).$$

Thus $\|x(t)-x(t_*)\|_2\le M|t-t_*|$ for every $t\in(\alpha,\beta)$, so on every finite time interval the solution stays in one Euclidean ball about $x(t_*)$.

2.1 Suppose $\beta<\infty$. Then step 1.1 shows that for $t$ close to $\beta$ the graph point $(t,x(t))$ stays inside the compact box $[\beta-1,\beta]\times\overline B(x(t_*),\,M(\beta-t_*)+1)$ of the ODE domain $\mathbb R\times\mathbb R^n$, contradicting [L2]. Thus $\beta=\infty$. The same argument at the left endpoint gives $\alpha=-\infty$. [L2, step 1.1]

3.1 Therefore every maximal solution is global, so the vector field is complete. [F1, step 2.1] ∎
