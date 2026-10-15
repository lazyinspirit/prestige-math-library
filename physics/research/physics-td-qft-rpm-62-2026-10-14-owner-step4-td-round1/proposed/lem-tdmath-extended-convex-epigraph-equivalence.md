---
id: lem-tdmath-extended-convex-epigraph-equivalence
kind: lemma
title: "Extended-real convexity and lower semicontinuity are characterized by the epigraph"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
deps:
  - def-metric-topology
  - def-tdmath-extended-convex-function
dependency_roles:
  def-metric-topology: mathematical-premise
  def-tdmath-extended-convex-function: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. T. Rockafellar, Convex Analysis, §§7 and 12"
      url: "https://djvu.online/file/68u51YEBQaqiP"
    - title: "P. Bianchi, O. Fercoq, and W. Hachem, Elements of Convex Analysis and Optimization, §§1.2 and 1.4"
      url: "https://bianchi.wp.imt.fr/files/2023/11/m2ds.pdf"
verification:
  precheck: n/a
---

## Statement

Let $d\ge1$ and let $f:\mathbb R^d\to\overline{\mathbb R}$ use the conventions of [[def-tdmath-extended-convex-function]]. Then $f$ is convex if and only if $\operatorname{epi}f$ is a convex subset of $\mathbb R^{d+1}$, and $f$ is lower semicontinuous if and only if $\operatorname{epi}f$ is closed.

## Facts & Assumptions

**Given:** $d\ge1$, the extended-real conventions and epigraph of the Statement, and the Euclidean topology.

[F1] [[def-tdmath-extended-convex-function]]: convexity is the extended chord inequality; lower semicontinuity means that every weak sublevel set is closed.

[F2] [[def-metric-topology]]: a set is closed exactly when its complement is open, and openness means that each point has a positive-radius metric ball contained in the set.

## Proof

**Proof technique:** direct.

1.1 Suppose $f$ is convex and take $(x,r),(y,s)\in\operatorname{epi}f$. For $t\in[0,1]$, the chord inequality gives $f((1-t)x+ty)\le(1-t)f(x)+tf(y)\le(1-t)r+ts$, so $(1-t)(x,r)+t(y,s)\in\operatorname{epi}f$. Thus the epigraph is convex. [given, F1, algebra]

1.2 Conversely, if the epigraph is convex and $f(x),f(y)$ are finite, then $(x,f(x))$ and $(y,f(y))$ lie in it; their convex combination lies in it and gives the chord inequality. If either value is $+\infty$ and its coefficient is positive, the right side is $+\infty$ and the inequality is automatic; at $t=0$ or $t=1$ it is equality. [F1, algebra]

1.3 Suppose $\operatorname{epi}f$ is closed and fix $a\in\mathbb R$. For $n=d,d+1$ write $d_n(u,v)=\bigl(\sum_{j=1}^n(u_j-v_j)^2\bigr)^{1/2}$ for the Euclidean metric. The slice map $i_a(x)=(x,a)$ satisfies $d_{d+1}(i_a(x),i_a(y))=d_d(x,y)$, as a direct distance identity. If $f(x)>a$, then $(x,a)\notin\operatorname{epi}f$; closedness gives $\varepsilon>0$ such that the $d_{d+1}$-ball of radius $\varepsilon$ around $(x,a)$ misses $\operatorname{epi}f$. Whenever $d_d(x,y)<\varepsilon$, the distance identity puts $(y,a)$ in that ball, so $f(y)>a$. Thus the complement of $\{y:f(y)\le a\}$ is open, and this weak sublevel set is closed. [F1, F2, construct]

2.1 Conversely suppose every weak sublevel set is closed and let $(x,r)\notin\operatorname{epi}f$, so $r<f(x)$. Choose a finite real $a$ with $r<a<f(x)$ when $f(x)$ is finite, and choose $a=r+1$ when $f(x)=+\infty$. The set $N=\{y:f(y)>a\}$ is an open neighborhood of $x$, as it is the complement of a closed weak sublevel set. Choose $\eta>0$ with $r+\eta<a$. For every $y\in N$ and $s\in(r-\eta,r+\eta)$ one has $s<a<f(y)$, so $(y,s)\notin\operatorname{epi}f$. Choose $\varepsilon>0$ with the $d_d$-ball around $x$ contained in $N$, and put $\rho=\min(\varepsilon,\eta)>0$. If $d_{d+1}((y,s),(x,r))<\rho$, then $d_d(y,x)<\varepsilon$ and $|s-r|<\eta$, so $(y,s)$ is outside the epigraph. Hence a Euclidean ball about $(x,r)$ misses the epigraph. Its complement is open at every point outside the epigraph, so the epigraph is closed. [given, F1, F2, construct] ∎
