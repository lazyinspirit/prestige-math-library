---
id: def-schwartz-topology-and-convergence
kind: definition
title: Schwartz topology and convergence
deps: ["def-schwartz-space-and-its-seminorms"]
status: published
origin: pipeline
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Definition 11.3 and (11.5), p.120
---

## Definition

For the seminorms of [[def-schwartz-space-and-its-seminorms]], a basic neighbourhood of $f_0\in\mathcal S$ is
$$\{f:p_{\alpha_r\beta_r}(f-f_0)<\varepsilon_r\ (1\le r\le m)\},\qquad m<\infty,\quad\varepsilon_r>0.$$
The empty intersection is the whole space. The topology consists of unions of these neighbourhoods. A sequence $f_k$ converges to $f$ precisely when $p_{\alpha\beta}(f_k-f)\to0$ for every pair of multi-indices: necessity follows from the one-condition neighbourhoods, and sufficiency follows by taking the maximum of the finitely many convergence thresholds in a basic neighbourhood.

A complex topological vector space is called locally convex here when zero has a base of convex balanced sets; balanced means $|c|\le1$ implies $cV\subseteq V$. The displayed sets about zero are convex and balanced by the seminorm inequalities. They also show addition is continuous, by halving each tolerance. Scalar multiplication is jointly continuous: near $(c_0,f_0)$, restrict $|c-c_0|<1$ and use
$$p_{\alpha\beta}(cf-c_0f_0)\le (|c_0|+1)p_{\alpha\beta}(f-f_0)+|c-c_0|p_{\alpha\beta}(f_0).$$
There are finitely many bounds to enforce. Finally $p_{00}(f-g)>0$ for distinct functions; balls of radius less than half this number separate them. Thus this is a Hausdorff locally convex topological vector space. All these verifications use only finite choices.
