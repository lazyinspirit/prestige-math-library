---
id: thm-tdmath-finite-mixture-envelope
kind: theorem
title: "Finite-mixture convex envelope and its supporting-face condition"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
deps:
  - def-complete-ordered-field
  - def-convex-subset-of-euclidean-space
  - def-euclidean-inner-product
  - def-tdmath-extended-convex-function
  - def-tdmath-fenchel-transform-and-subgradient
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - lem-tdmath-extended-convex-epigraph-equivalence
  - lem-tdmath-fenchel-young-equality
  - thm-continuous-image-of-a-compact-space-is-compact
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - thm-tdmath-finite-dimensional-biconjugation
dependency_roles:
  def-complete-ordered-field: mathematical-premise
  def-convex-subset-of-euclidean-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-tdmath-extended-convex-function: mathematical-premise
  def-tdmath-fenchel-transform-and-subgradient: mathematical-premise
  lem-euclidean-linear-maps-have-matrices-and-are-bounded: mathematical-premise
  lem-tdmath-extended-convex-epigraph-equivalence: mathematical-premise
  lem-tdmath-fenchel-young-equality: mathematical-premise
  thm-continuous-image-of-a-compact-space-is-compact: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-tdmath-finite-dimensional-biconjugation: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. T. Rockafellar, Convex Analysis, §§12, 18, and 23"
      url: "https://djvu.online/file/68u51YEBQaqiP"
    - title: "P. Bianchi, O. Fercoq, and W. Hachem, Elements of Convex Analysis and Optimization, §§1.1–1.5 and 2.1–2.3"
      url: "https://bianchi.wp.imt.fr/files/2023/11/m2ds.pdf"
    - title: "Zhiyuan Li, Lecture 4: Convex Conjugates and Marginal Duality"
      url: "https://zhiyuanli.ttic.edu/convex-optimization-site/Lecture-4___-Convex-Conjugates___-and-Marginal-Duality/"
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

Let $m\ge1$ and $d\ge1$ be integers, let $q_1,\ldots,q_m\in\mathbb R^d$, and let $a_1,\ldots,a_m\in\mathbb R$. Put

$$\Delta_m=\{\theta\in\mathbb R^m:\theta_i\ge0,\ \sum_{i=1}^m\theta_i=1\},\qquad P:=\left\{\sum_{i=1}^m\theta_iq_i:\theta\in\Delta_m\right\}.$$

Thus $P$ is the finite convex hull of the listed points, defined here as their convex combinations.

For $x\in P$ let $\Theta_x=\{\theta\in\Delta_m:\sum_i\theta_iq_i=x\}$ and define

$$f_{\rm mix}(x)=\min_{\theta\in\Theta_x}\sum_{i=1}^m\theta_i a_i;$$

set $f_{\rm mix}(x)=+\infty$ for $x\notin P$. Then every minimum is attained; $f_{\rm mix}$ is proper, lower semicontinuous, and convex; and it is pointwise greatest among convex functions $h:\mathbb R^d\to\overline{\mathbb R}$ satisfying $h(q_i)\le a_i$ for every $i$. Consequently $f_{\rm mix}=f_{\rm mix}^{**}$. If $p\in\partial f_{\rm mix}(x)$ and $\theta$ is any minimizing mixture for $x$, then every $i$ with $\theta_i>0$ satisfies

$$a_i=\langle p,q_i\rangle-f_{\rm mix}^*(p).$$

Thus all occupied data points $(q_i,a_i)$ lie on one supporting affine hyperplane. The assertion is finite-dimensional and makes no claim about infinite families.

## Facts & Assumptions

**Given:** The finite data in the Statement, the extended-real conventions of [[def-tdmath-extended-convex-function]], and the conjugate and subgradient definitions of [[def-tdmath-fenchel-transform-and-subgradient]].

[F1] The set $\Delta_m$ is nonempty, closed, and bounded: it contains each coordinate vector; it is the intersection of the closed coordinate half-spaces $\{\theta_i\ge0\}$ with the closed affine set $\{\sum_i\theta_i=1\}$; and every coordinate satisfies $0\le\theta_i\le1$, so $\|\theta\|_2^2=\sum_i\theta_i^2\le m$. Hence [[thm-heine-borel-rn]] makes it compact. The map $Q(\theta)=\sum_i\theta_iq_i$ is linear and continuous by [L1], so $\Theta_x=\Delta_m\cap Q^{-1}(\{x\})$ is closed and bounded, hence compact. The objective $\theta\mapsto\sum_i\theta_i a_i$ is also linear and continuous by [L1].

[F2] A continuous image of a compact metric space is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[F3] A continuous real function on a nonempty compact metric space attains its minimum ([[thm-extreme-value-metric]]).

[F4] The epigraph characterizations of extended convexity and lower semicontinuity are [[lem-tdmath-extended-convex-epigraph-equivalence]].

[F5] [[def-convex-subset-of-euclidean-space]]: a convex set contains every segment between two of its points.

[F6] A closed proper convex function equals its biconjugate ([[thm-tdmath-finite-dimensional-biconjugation]]).

[F7] Equality in Fenchel's inequality is equivalent to the subgradient relation ([[lem-tdmath-fenchel-young-equality]]).

[L1] [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]: every linear map between finite-dimensional Euclidean spaces is continuous.

## Proof

**Proof technique:** direct.

1.1 The set $\Delta_m$ contains each coordinate vector. The coordinate maps, the sum map $\theta\mapsto\sum_i\theta_i$, and $Q$ are continuous by [L1]. For any continuous map $T$ into a Euclidean space and any closed set $K$, the complement of $T^{-1}(K)$ is open: if $T(z)\notin K$, a ball about $T(z)$ misses $K$, and continuity gives a ball about $z$ mapped inside that ball. Thus $T^{-1}(K)$ is closed. Coordinate half-lines $[0,\infty)$ and singletons are closed, since a point outside either has a positive-distance ball missing it; a finite intersection of closed sets is closed because its complement is a finite union of open sets. These facts show that $\Delta_m$ is closed and that $\Theta_x=\Delta_m\cap Q^{-1}(\{x\})$ is closed. Since $0\le\theta_i\le1$ on $\Delta_m$, both sets are bounded and hence compact by [F1]. For $x\in P$, the definition of $P$ makes $\Theta_x$ nonempty. The linear objective is continuous by [L1] and attains its minimum on $\Theta_x$ by [F3]. [F1, F3, L1, given, construct]

2.1 Let $C=\{\sum_i\theta_i(q_i,a_i):\theta\in\Delta_m\}\subset\mathbb R^{d+1}$ and $V=\{(0,s):s\ge0\}$. The affine map defining $C$ is continuous by [L1], so $C$ is compact by [F2]. The set $C$ is convex because convex combinations of points in $\Delta_m$ remain in $\Delta_m$ (nonnegativity and the unit-sum equation are preserved) and the defining map is affine; $V$ is closed and convex. If $(x,r)\in\operatorname{epi}f_{\rm mix}$, a minimizing $\theta\in\Theta_x$ gives $(x,f_{\rm mix}(x))\in C$ and $r-f_{\rm mix}(x)\ge0$, so $(x,r)\in C+V$. Conversely if $(x,r)=\sum_i\theta_i(q_i,a_i)+(0,s)$ with $s\ge0$, then $f_{\rm mix}(x)\le\sum_i\theta_i a_i\le r$. Thus $\operatorname{epi}f_{\rm mix}=C+V$. [F1, F2, L1, step 1.1, construct]

2.2 The coordinate vector with $\theta_i=1$ and all other weights zero shows $f_{\rm mix}(q_i)\le a_i$. Let $h:\mathbb R^d\to\overline{\mathbb R}$ be convex with $h(q_i)\le a_i$. For any weights $\theta\in\Delta_m$, prove $h(\sum_i\theta_iq_i)\le\sum_i\theta_i h(q_i)$ by induction on the number $N$ of positive weights: for $N=1$ it is equality; for $N>1$, choose an index $j$ with $0<\theta_j<1$, put $y=(1-\theta_j)^{-1}\sum_{i\ne j}\theta_iq_i$, and apply the induction hypothesis to the normalized remaining weights. Convexity then gives $h(\sum_i\theta_iq_i)\le\theta_jh(q_j)+(1-\theta_j)h(y)\le\sum_i\theta_i h(q_i)$. All terms on the right are finite because $h(q_i)\le a_i$ and the codomain excludes $-\infty$. For $x\in P$ and any $\theta\in\Theta_x$, this gives $h(x)\le\sum_i\theta_i a_i$; taking the minimum yields $h(x)\le f_{\rm mix}(x)$. For $x\notin P$, $h(x)\le+\infty=f_{\rm mix}(x)$. Thus $f_{\rm mix}$ is the greatest convex minorant of the data. [F4, given, step 1.1, algebra, induction]

3.1 The set $C+V$ is convex: for $c_1,c_2\in C$, $v_1,v_2\in V$, and $t\in[0,1]$, $(1-t)(c_1+v_1)+t(c_2+v_2)=((1-t)c_1+tc_2)+((1-t)v_1+tv_2)\in C+V$ by [F5]. To see it is closed, fix $z=(x,r)\notin C+V$ and write $c=(u,a)\in C$. The distance from $z$ to the ray $c+V$ is $\rho_z(c)=\sqrt{\|x-u\|_2^2+\max\{a-r,0\}^2}$: if $r\ge a$ the closest ray point has height $r$, and if $r<a$ it has height $a$. This formula is continuous in $c$ because $\max\{w,0\}=(w+|w|)/2$, and it is positive for every $c\in C$ since $z\notin c+V$. Compactness of $C$ and [F3] give a minimum $\delta>0$; every point of $C+V$ is at distance at least $\delta$ from $z$, so the ball of radius $\delta/2$ about $z$ misses $C+V$. [F1, F2, F3, F5, step 2.1, algebra]

4.1 By [F4] and step 3.1, $f_{\rm mix}$ is convex and lower semicontinuous. It is proper because $P$ is nonempty, each value on $P$ is finite by step 1.1, and it is $+\infty$ outside $P$. Therefore [F6] gives $f_{\rm mix}=f_{\rm mix}^{**}$. [F4, F6, step 1.1, step 3.1]

5.1 Let $p\in\partial f_{\rm mix}(x)$ and let $\theta$ attain the minimum defining $f_{\rm mix}(x)$. By [F7], $f_{\rm mix}^*(p)=\langle p,x\rangle-f_{\rm mix}(x)$. Also $f_{\rm mix}(q_i)\le a_i$ implies $\langle p,q_i\rangle-a_i\le\langle p,q_i\rangle-f_{\rm mix}(q_i)\le f_{\rm mix}^*(p)$. Since $\langle p,x\rangle-f_{\rm mix}(x)=\sum_i\theta_i(\langle p,q_i\rangle-a_i)$ is a weighted average of terms bounded above by $f_{\rm mix}^*(p)$, each term with $\theta_i>0$ equals that bound, proving the supporting-hyperplane formula. [F7, step 1.1, step 2.2, algebra] ∎
