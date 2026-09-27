---
id: def-plurality-decoding-of-powered-local-views
kind: definition
title: "Plurality decoding of powered local views"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-constraint-graph-powering, def-constraint-graph-and-labeling-value]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-27
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5.1 (plurality assignment), printed p. 373."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Irit Dinur, The PCP theorem by gap amplification, §6 (popular opinion), printed pp. 19-20."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Definition

Let $G$ be a binary constraint graph over the finite nonempty alphabet $\Sigma$ whose underlying graph is $d$-regular in the adjacency-slot convention of [[def-constraint-graph-and-labeling-value]], let $t\ge1$, and let $G_t$ be its local-view powered graph with view alphabet $\Sigma_t=\Sigma^{\mathcal P_R}$, pattern sets $\mathcal P_\ell=\{1,\dots,2d\}^{\ell}$, length $L=2t+1$ and central window $J$ as in [[def-constraint-graph-powering]]. Fix once and for all a total order on $\Sigma$, and write $\min$ below for the least element in that order.

Let $\varphi:V\to\Sigma_t$ be a labeling of $G_t$; its value $\varphi(w)$ at a vertex $w$ is the **view at $w$**. For vertices $v,w$ with $\operatorname{dist}(v,w)\le R$, write $\kappa_{w,v}$ for the canonical length-$R$ pattern from $w$ to $v$ fixed in [[def-constraint-graph-powering]].

**Claims.** Let $1\le\ell\le R$ and let $\pi\in\mathcal P_\ell$ be a lazy-walk pattern read from $v$ that ends at $w$. Since $\operatorname{dist}(v,w)\le\ell\le R$, the canonical pattern $\kappa_{w,v}$ exists, and the view at $w$ assigns it a symbol $\varphi(w)(\kappa_{w,v})\in\Sigma$; we say that **the view at $w$ claims the value $\varphi(w)(\kappa_{w,v})$ for $v$ via $\pi$**. The claim depends on the endpoint $w$, not on the placement of holds in $\pi$.

**Plurality decoding.** For $v\in V$ and $a\in\Sigma$ put
$$p_v(a):=\frac{1}{(2d)^t}\#\Bigl\{\pi\in\mathcal P_t:\text{the view at the endpoint of }\pi\text{ read from }v\text{ claims }a\text{ for }v\Bigr\},$$
the number of length-$t$ patterns from $v$ whose endpoint's view claims $a$ for $v$, divided by the total number $(2d)^t$ of such patterns. Equivalently, $p_v$ is the law of the claimed value for $v$: if a pattern is drawn uniformly at random from $\mathcal P_t$, the view at its endpoint claims $a$ for $v$ with probability $p_v(a)$. The **plurality decoding** of the powered labeling $\varphi$ is the labeling
$$\hat\varphi:V\to\Sigma,\qquad \hat\varphi(v):=\min\Bigl\{a\in\Sigma:\ p_v(a)=\max_{b\in\Sigma}p_v(b)\Bigr\},$$
that is, the least symbol, in the fixed order on $\Sigma$, that is claimed for $v$ with maximal probability. We call $\hat\varphi(v)$ the **decoded label** of $v$ and $p_v$ the **opinion distribution** of $v$.

## Remarks

- **Patterns are counted with multiplicity.** Distinct patterns with the same endpoint contribute separate votes, while repeated visits inside a single pattern do not create extra votes; no uniform vote over distinct centres is taken. This is Dinur's "popular opinion" [display (4) of §6] and the Arora-Barak "plurality assignment" of §18.5.1, both of which average the claim of the endpoint of a random walk of the decoding length, with multiplicities.
- **Tie breaking is part of the definition.** The order on $\Sigma$ is fixed once on the page, so the decoding is a function of the powered labeling and of the fixed explicit data of $G_t$: it makes no choice, and it is computable from the explicit encoding of $G_t$ by counting patterns, since $(2d)^t$ is a constant once $d$ and $t$ are fixed.
- **The relation and decoding use the same canonical coordinate.** The decoding consults a view at $w$ only at $\kappa_{w,v}$, the same coordinate that a powered slot relation reads for the base vertex $v$ at a middle position. Distinct length-$t$ patterns with the same endpoint therefore contribute the same claim value but are still counted with their pattern multiplicity.
- The decoding is defined for every labeling of $G_t$, canonical lifts included: for the canonical lift $\bar\sigma$ of a base labeling $\sigma$, every pattern from $v$ ends at a vertex $w$ whose view claims $\sigma(v)$ for $v$, so $p_v$ is concentrated on $\sigma(v)$ and $\hat{\bar\sigma}=\sigma$.
