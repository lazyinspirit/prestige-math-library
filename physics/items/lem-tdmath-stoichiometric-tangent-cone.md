---
id: lem-tdmath-stoichiometric-tangent-cone
kind: lemma
title: "The feasible tangent cone for nonnegative stoichiometric amounts"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
proof_strategy: direct
deps:
  - def-convex-subset-of-euclidean-space
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-euclidean-inner-product
  - def-total-derivative-in-euclidean-space
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - thm-chain-rule-for-total-derivatives
dependency_roles:
  def-convex-subset-of-euclidean-space: mathematical-premise
  def-convex-and-strictly-convex-functions-on-euclidean-sets: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  lem-euclidean-linear-maps-have-matrices-and-are-bounded: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Bindel, Optimization Theory, §6.1.4, Numerical Methods for Data Science lecture notes"
      url: "https://www.cs.cornell.edu/~bindel/nmds/00-Background/05-Optimization.html"
    - title: "IIT Madras EE5121, Constrained Optimization, Geometric tools and first-order necessary conditions"
      url: "https://ee.iitm.ac.in/~uday/notes/opt/co1.html"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Statement

Let $s,r\ge1$, let $\nu\in\mathbb R^{s\times r}$ be a stoichiometric matrix (column $k$ gives the signed species-amount change per unit extent of reaction $k$), and let $n^0\in[0,\infty)^s$ be initial species amounts. Extents $\xi\in\mathbb R^r$ are measured in one fixed amount unit, so $n(\xi)=n^0+\nu\xi$ has species amounts in that same unit; $\nu$ is dimensionless. The feasible extent set is the polyhedron

$$\mathcal F=\{\xi\in\mathbb R^r:n^0+\nu\xi\in[0,\infty)^s\}.$$

At $\xi_*\in\mathcal F$, let $J=\{j:n^0_j+(\nu\xi_*)_j=0\}$ be the active species set. Define the Bouligand tangent cone $T_{\mathcal F}(\xi_*)$ to consist of all $h\in\mathbb R^r$ for which there are $t_k>0$ with $t_k\to0$ and $h_k\to h$ such that $\xi_*+t_kh_k\in\mathcal F$. Then

$$T_{\mathcal F}(\xi_*)=\{h\in\mathbb R^r:(\nu h)_j\ge0\text{ for every }j\in J\}.$$

If $U\subseteq\mathbb R^r$ is open with $\xi_*\in U$, and $f:U\to\mathbb R$ is differentiable with a local minimum at $\xi_*$ relative to $\mathcal F\cap U$, then $Df(\xi_*)h\ge0$ for every $h\in T_{\mathcal F}(\xi_*)$. Conversely, if $U$ is convex and $f$ is convex and differentiable on $U$, this directional inequality for every $h\in T_{\mathcal F}(\xi_*)$ implies $f(\xi)\ge f(\xi_*)$ for every $\xi\in\mathcal F\cap U$. Suppose $V\subseteq\mathbb R^s$ is open, $n_*:=n^0+\nu\xi_*\in V$, $\Phi:V\to\mathbb R$ is totally differentiable at $n_*$, and $f(\xi)=\Phi(n^0+\nu\xi)$ near $\xi_*$. For each $j$, let $e_j\in\mathbb R^s$ have coordinate $1$ in position $j$ and $0$ in every other position; define $\mu_j:=D\Phi(n_*)e_j$. Then

$$Df(\xi_*)h=\sum_{j=1}^s\mu_j(\nu h)_j=(\nu^{\mathsf T}\mu)\cdot h.$$

The tangent-cone and optimality claims are mathematical deductions. They do not assert that a particular physical system obeys this model or is at equilibrium.

## Facts & Assumptions

**Given:** The finite stoichiometric matrix, initial amounts, feasible extent set, Euclidean convergence, and differentiability/convexity hypotheses in the Statement.

[F1] [[def-total-derivative-in-euclidean-space]]: differentiability at $\xi_*$ gives $f(\xi_*+w)=f(\xi_*)+Df(\xi_*)w+o(\|w\|_2)$ as $w\to0$.

[F2] [[def-convex-subset-of-euclidean-space]]: convexity of $U$ and the affine inequalities defining $\mathcal F$ keep every segment between feasible points in $\mathcal F\cap U$.

[F3] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition is the composition of its total derivatives.

[F4] [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]: a real-valued function is convex when $f((1-t)x+ty)\le(1-t)f(x)+tf(y)$ for points in its convex domain and $t\in[0,1]$.

[F5] [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]: a finite-dimensional linear map is bounded and therefore continuous.

## Proof

**Proof technique:** direct.

1.1 Suppose $h\in T_{\mathcal F}(\xi_*)$, and choose sequences $t_k,h_k$ from its definition. For each active $j\in J$, feasibility gives $0+t_k(\nu h_k)_j\ge0$, hence $(\nu h_k)_j\ge0$. Since [F5] makes the finite matrix map continuous, $h_k\to h$ implies $\nu h_k\to\nu h$, so $(\nu h)_j\ge0$. This proves one inclusion. [F5, given, algebra]

1.2 Conversely suppose $(\nu h)_j\ge0$ for all $j\in J$. For each inactive $j$, put $b_j=n^0_j+(\nu\xi_*)_j>0$. If $(\nu h)_j<0$, restrict $0\le t\le b_j/[-(\nu h)_j]$; if $(\nu h)_j\ge0$, no restriction is needed. There are finitely many species, so choose a common $\epsilon>0$ no larger than all positive bounds (or $\epsilon=1$ if there are none). For $j\in J$, $n^0_j+(\nu(\xi_*+th))_j=t(\nu h)_j\ge0$; for inactive $j$, the choice of $\epsilon$ gives $b_j+t(\nu h)_j\ge0$ for $0\le t\le\epsilon$. Thus $\xi_*+th\in\mathcal F$ throughout that interval. Taking $h_k=h$ and any positive $t_k\le\epsilon$ tending to zero proves $h\in T_{\mathcal F}(\xi_*)$. [given, choose, algebra]

2.1 By steps 1.1–1.2, every tangent $h$ has a feasible ray $\xi_*+th$ for all sufficiently small $t\ge0$. Openness of $U$ keeps the initial part of this ray in $U$. At a relative local minimum, $[f(\xi_*+th)-f(\xi_*)]/t\ge0$ for all sufficiently small $t>0$; differentiability [F1] makes its limit $Df(\xi_*)h$. Hence $Df(\xi_*)h\ge0$. [F1, step 1.1, step 1.2, given]

2.2 Now assume $U$ is convex and $f$ convex and differentiable. For any $\xi\in\mathcal F\cap U$, put $h=\xi-\xi_*$. For active $j$, $(\nu h)_j=n_j(\xi)-n_j(\xi_*)=n_j(\xi)\ge0$, so step 1.2 makes $h$ a tangent direction; the segment $\xi_*+th$ also lies in $\mathcal F\cap U$ by [F2]. Let $g(t)=f(\xi_*+th)$. [F4] gives $(g(t)-g(0))/t\le g(1)-g(0)$ for $0<t<1$; as $t\downarrow0$, the left side tends to $Df(\xi_*)h$ by [F1]. If every tangent derivative is nonnegative, then $f(\xi)-f(\xi_*)=g(1)-g(0)\ge Df(\xi_*)h\ge0$. [F1, F2, F4, step 1.2, given, algebra]

3.1 The affine map $\xi\mapsto n^0+\nu\xi$ has derivative $h\mapsto\nu h$. By [F3], $Df(\xi_*)h=D\Phi(n_*)(\nu h)$. Since $\nu h=\sum_{j=1}^s(\nu h)_j e_j$ and $D\Phi(n_*)$ is linear, this equals $\sum_{j=1}^s(\nu h)_jD\Phi(n_*)e_j=\sum_{j=1}^s\mu_j(\nu h)_j=(\nu^{\mathsf T}\mu)\cdot h$, as claimed. [F3, given, algebra] ∎
