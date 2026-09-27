---
id: thm-flowout-theorem
kind: theorem
title: "The flowout theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-flowout-of-an-embedded-submanifold, thm-fundamental-theorem-on-flows, def-local-defining-map-for-an-embedded-submanifold, thm-smooth-partitions-of-unity-exist-on-manifolds, thm-smooth-inverse-function-theorem-on-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (thm-flowout-theorem). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $X$ be a smooth vector field on $M$ with maximal flow $\Phi$, and let
$S\hookrightarrow M$ be an embedded codimension-one submanifold. If $X_p\notin T_pS$
for every $p\in S$, then there is an open neighbourhood
$\mathcal O\subseteq \mathbb R\times S$ of $\{0\}\times S$ such that the map

$$ F:\mathcal O\to M,\qquad F(t,p)=\Phi_t(p), $$

is an embedding. Its image is a flowout of $S$ along $X$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth vector field $X$ with maximal flow $\Phi$, and a codimension-one embedded submanifold $S$ everywhere transverse to $X$.

[L1] The maximal flow is smooth on an open domain ([[thm-fundamental-theorem-on-flows]]).

[L2] A codimension-one embedded submanifold has local defining functions ([[def-local-defining-map-for-an-embedded-submanifold]]).

[L3] Under $\mathrm{AC}_\omega$, every indexed open cover of a smooth manifold admits a smooth partition of unity indexed by that cover and subordinate to it ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[L4] A map with invertible differential at a point is a local diffeomorphism near that point ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

## Proof

**Proof technique:** direct.

1.1 Fix $p\in S$. Because $X_p\notin T_pS$ and $S$ has codimension one, one has $T_pM=\mathbb R X_p\oplus T_pS$. The map $F(t,q)=\Phi_t(q)$ is smooth near $(0,p)$ by [L1], and its differential at $(0,p)$ sends the time direction to $X_p$ and the $S$-directions identically onto $T_pS$. Hence $dF_{(0,p)}$ is an isomorphism. [L1, given]

2.1 By [L4], for each $p\in S$ there exist an open neighbourhood $W\subseteq S$ of $p$, an open neighbourhood $U\subseteq M$, and $\varepsilon>0$ such that $F$ restricts to a diffeomorphism from $(-\varepsilon,\varepsilon)\times W$ onto its image in $U$. By [L2], after shrinking $U$ choose a local defining function $u:U\to\mathbb R$ for $S\cap U$. Since $X_p\notin T_pS=\ker(du)_p$, change the sign of $u$ if needed and shrink $U,W,\varepsilon$ so that $X(u)\ge c>0$ on $U$ and $F((-\varepsilon,\varepsilon)\times W)\subseteq U$. This is a pointwise existence argument; it does not select such data simultaneously for all $p$. [L2, L4, step 1.1]

3.1 For any local data from step 2.1 and $q\in W$, the integral curve $r\mapsto F(r,q)$ satisfies $\frac d{dr}u(F(r,q))=X(u)(F(r,q))\ge c$. Since $u(q)=0$, the fundamental theorem of calculus gives $|u(F(t,q))|\ge c|t|$ for $|t|<\varepsilon$. Hence $F(t,q)\in S$ in that interval only when $t=0$. [L1, step 2.1]

4.1 Let $I$ be the set of all pairs $i=(W_i,\varepsilon_i)$ where $W_i\subseteq S$ is open, $\varepsilon_i$ is a positive rational, $(-\varepsilon_i,\varepsilon_i)\times W_i\subseteq\mathcal D$, and $F(t,q)\in S$ for $q\in W_i$, $|t|<\varepsilon_i$ implies $t=0$. Steps 2.1–3.1 show that $(W_i)_{i\in I}$ covers $S$: each point has local data, and one can shrink its width to a positive rational. This canonical family of all admissible pairs requires no point-indexed selection. By [L3], take a locally finite subordinate partition $(\rho_i)_{i\in I}$ and define $f(q)=\sum_{i\in I}\varepsilon_i\rho_i(q)$. This is smooth and positive. At each $q$, only finitely many $\rho_i(q)$ are nonzero; choose among them $i_0$ with maximal $\varepsilon_i$. Then $q\in W_{i_0}$ and $f(q)\le\varepsilon_{i_0}$ because $\sum_i\rho_i(q)=1$. Put $\delta=f/2$ and $\mathcal O=\{(t,q)\in\mathcal D:|t|<\delta(q)\}$. This is an open neighbourhood of $\{0\}\times S$. If $F(t,q)=F(t',q')$ for two points of $\mathcal O$, interchange them so $f(q')\le f(q)$. The flow group law gives $F(t-t',q)=q'\in S$, while $|t-t'|<f(q)/2+f(q')/2\le f(q)\le\varepsilon_{i_0}$. The defining no-return property for $i_0$ forces $t=t'$, and then uniqueness gives $q=q'$. Thus $F$ is injective on $\mathcal O$. [L1, L3, step 3.1]

5.1 Because $S$ has codimension one, the source $\mathcal O\subseteq \mathbb R\times S$ and the target $M$ have the same dimension. The flow group law transports the invertible differential from $(0,q)$ in step 1.1 to every $(t,q)\in\mathcal O$. Thus [L4] makes $F$ a local diffeomorphism throughout $\mathcal O$, and step 4.1 makes it injective. Hence $F:\mathcal O\to M$ is a diffeomorphism onto the open submanifold $F[\mathcal O]$. By definition, this image is a flowout of $S$ along $X$. [L4, step 1.1, step 4.1] ∎
