---
id: thm-pe03-convex-scaling-limiter-preserves-mean-and-node-positivity
kind: theorem
title: Convex scaling preserves the cell mean and positive-margin node states
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - alg-pe03-convex-scaling-positivity-limiter
  - def-pe03-euler-positive-margin-domain
  - prop-pe03-euler-state-and-margin-domains-are-convex-and-closed
proof_strategy: direct
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "X. Zhang and C.-W. Shu, On Positivity-Preserving High Order Discontinuous Galerkin Schemes for Compressible Euler Equations on Rectangular Meshes"
      url: "https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf"
      locator: "§2, positivity-preserving scaling limiter and strict positive-state accuracy, PDF pp. 5–9; complete article read"
    - title: "J.-L. Guermond and B. Popov, Invariant Domains and First-Order Continuous Finite Element Approximation for Hyperbolic Systems"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_popov_sinum_hyperbolic_systems_2016.pdf"
      locator: "§2.2, convex invariant sets and convex combinations, PDF pp. 3–4; complete article read"
---

## Statement

Fix $\gamma>1$, $\varepsilon>0$, a finite nonempty node set $J$, positive
weights $w_j$ summing to one, and candidate states $V_j\in\mathbb R^3$ with
mean $\bar V=\sum_jw_jV_j\in K_{\gamma,\varepsilon}$. Apply the maximal
convex scaling limiter of
[[alg-pe03-convex-scaling-positivity-limiter]] with $K=K_{\gamma,\varepsilon}$.
Its output is well-defined, every limited node lies in $K_{\gamma,\varepsilon}$,
and the weighted cell mean remains $\bar V$. Hence every limited node has
positive density and positive pressure. If the unscaled nodes already lie in
$K_{\gamma,\varepsilon}$, the maximal parameter is $\theta_*=1$. In
particular, if smooth target states stay a distance at least $\delta>0$ from
$\mathbb R^3\setminus K_{\gamma,\varepsilon}$ and each reconstruction node
has error less than $\delta$, the limiter is inactive and preserves that
reconstruction's accuracy. No positivity between finitely many nodes is
claimed.

## Facts & Assumptions

**Given:** The finite weighted nodes and admissible mean, the closed convex set $K_{\gamma,\varepsilon}$, and the maximal scaling procedure. Prove existence, conservation, nodewise admissibility, and the strict-margin accuracy implication.

[F1] [[alg-pe03-convex-scaling-positivity-limiter]]: the limiter selects the largest $\theta\in[0,1]$ such that $\bar V+\theta(V_j-\bar V)\in K$ for all nodes.

[F2] [[def-pe03-euler-positive-margin-domain]]: $K_{\gamma,\varepsilon}$ imposes $\rho\ge\varepsilon$ and $E-m^2/(2\rho)\ge\varepsilon$.

[F3] [[prop-pe03-euler-state-and-margin-domains-are-convex-and-closed]]: $K_{\gamma,\varepsilon}$ is closed and convex.

## Proof

1.1 The feasible parameter set $S=\{\theta\in[0,1]:\bar V+\theta(V_j-\bar V)\in K_{\gamma,\varepsilon}\text{ for every }j\}$ contains $0$. Each node map is continuous and $K_{\gamma,\varepsilon}$ is closed by [F3], so each inverse image is closed; the finite intersection $S$ is closed in compact $[0,1]$. Thus $S$ is nonempty compact and has a maximum $\theta_*$. By its definition, every limited node lies in $K_{\gamma,\varepsilon}$. [given, F1, F3, algebra]

2.1 Using $\sum_jw_j=1$ and $\sum_jw_jV_j=\bar V$, the limited weighted mean is $\sum_jw_j(\bar V+\theta_*(V_j-\bar V))=\bar V+\theta_*(\bar V-\bar V)=\bar V$. By [F2], each limited node has density at least $\varepsilon>0$ and pressure at least $(\gamma-1)\varepsilon>0$. [given, F1, F2, step 1.1, algebra]

3.1 If every original $V_j\in K_{\gamma,\varepsilon}$, then $1\in S$, so $\theta_*=1$. If a target state has distance at least $\delta$ from the complement and the candidate differs from it by less than $\delta$, the candidate belongs to $K_{\gamma,\varepsilon}$; applying this at every node makes $1$ feasible. Thus the limiter leaves all candidates unchanged under the stated strict margin, and their reconstruction error is unchanged. The conclusion concerns only the supplied nodes. [given, F1, F3, step 2.1, algebra] ∎

