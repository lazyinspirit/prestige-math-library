---
id: lem-tdmath-constrained-curvature
kind: lemma
title: "Second-order curvature tests on an affine feasible slice"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
proof_strategy: direct
deps:
  - cor-mean-value-theorem
  - def-complete-ordered-field
  - def-convex-subset-of-euclidean-space
  - def-euclidean-inner-product
  - def-interval
  - def-metric-topology
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - thm-extreme-value-metric
  - thm-heine-borel-rn
dependency_roles:
  cor-mean-value-theorem: mathematical-premise
  def-complete-ordered-field: mathematical-premise
  def-convex-subset-of-euclidean-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-interval: mathematical-premise
  def-metric-topology: mathematical-premise
  lem-euclidean-linear-maps-have-matrices-and-are-bounded: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Bianchi, O. Fercoq, and W. Hachem, Elements of Convex Analysis and Optimization, §1.5"
      url: "https://bianchi.wp.imt.fr/files/2023/11/m2ds.pdf"
    - title: "MIT OpenCourseWare 18.02SC, Session 30: Second Derivative Test"
      url: "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/a4685876e286873102a9937e1998a098_MIT18_02SC_MNotes_sd.pdf"
    - title: "David Bindel, Optimization Theory, §6.1.4, Numerical Methods for Data Science lecture notes"
      url: "https://www.cs.cornell.edu/~bindel/nmds/00-Background/05-Optimization.html"
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

Let $d\ge0$ and $k\ge0$ be integers, let $U\subseteq\mathbb R^d$ be open and convex, let $A:\mathbb R^d\to\mathbb R^k$ be linear, let $b\in\mathbb R^k$, and let $x_*\in U$ satisfy $Ax_*=b$. Put $T=\ker A$. Assume $f:U\to\mathbb R$ is differentiable and has second directional derivatives represented by a continuous matrix field: there is a continuous map $H:U\to\mathbb R^{d\times d}$ with symmetric values, and for every $x\in U$ and $h\in\mathbb R^d$,

$$\left.\frac{d^2}{dt^2}f(x+th)\right|_{t=0}=Q_x(h):=h^{\mathsf T}H(x)h.$$

Assume stationarity $Df(x_*)h=0$ for every $h\in T$. If $Q_{x_*}(h_0)<0$ for some $h_0\in T$, then $x_*$ is not a local minimum of $f$ on $\{x\in U:Ax=b\}$. If $Q_{x_*}(h)>0$ for every nonzero $h\in T$, then $x_*$ is a strict local minimum on that feasible slice. If $T=\{0\}$, the latter conclusion holds because $x_*$ is the only feasible point.

## Facts & Assumptions

**Given:** The open convex domain, linear constraint, differentiable function, continuous symmetric matrix field, directional second-derivative identity, and stationarity in the Statement.

[F1] [[def-convex-subset-of-euclidean-space]]: the segment between two points of a convex set stays in that set.

[L1] [[def-euclidean-inner-product]]: the Euclidean norm is $\|h\|_2=\sqrt{\langle h,h\rangle}$.

[L2] [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]] and [[def-metric-topology]]: $A$ is continuous and $T=A^{-1}(\{0\})$ is closed.

[L3] [[thm-heine-borel-rn]]: every closed bounded subset of $\mathbb R^d$ is compact.

[L4] [[thm-extreme-value-metric]]: a continuous real function on a nonempty compact set attains its minimum.

[L5] [[cor-mean-value-theorem]]: if a real function is continuous on a closed interval and differentiable inside it, some interior derivative equals its endpoint secant slope.

## Proof

**Proof technique:** direct.

1.1 If $d=0$, then $\mathbb R^0$ has only its zero vector, $U=\{x_*\}$, and $T=\{0\}$. There is no negative-curvature direction and $x_*$ is the only feasible point, so the strict-minimum conclusion holds. In the remaining argument suppose $d\ge1$. Suppose $h_0\in T$ and $Q_{x_*}(h_0)<0$. Set $\phi(t)=f(x_*+th_0)$ for $t$ near $0$. Openness of $U$ permits this definition; stationarity gives $\phi'(0)=0$. The identity in the Statement gives $\phi''(t)=Q_{x_*+th_0}(h_0)$ wherever defined, and continuity of the entries of $H$ makes this negative for every sufficiently small $t\ge0$. [given, L1, algebra]

1.2 Suppose $T\ne\{0\}$ and $Q_{x_*}(h)>0$ for each nonzero $h\in T$. The unit sphere $S_T=\{h\in T:\|h\|_2=1\}$ is nonempty, closed by [L2] and continuity of the norm, and bounded; [L3] makes it compact. The quadratic polynomial $h\mapsto h^{\mathsf T}H(x_*)h$ is continuous, so [L4] gives $\lambda=\min_{h\in S_T}Q_{x_*}(h)>0$. [L1, L2, L3, L4, given]

2.1 Choose such a small $t>0$. Applying [L5] to $\phi'$ on $[0,t]$ gives $\phi'(t)-\phi'(0)=t\phi''(s)<0$ for some $s\in(0,t)$, hence $\phi'(t)<0$; the same argument applies to every positive endpoint up to $t$. Applying [L5] to $\phi$ on $[0,t]$ gives $\phi(t)-\phi(0)=t\phi'(r)<0$ for some $r\in(0,t)$. Since $h_0\in\ker A$, $x_*+th_0$ is feasible, so $x_*$ is not a local minimum. [L5, step 1.1, algebra]

2.2 By continuity of the finitely many entries of $H$, choose $\delta>0$ so that $\|x-x_*\|_2<\delta$ implies $|Q_x(h)-Q_{x_*}(h)|<\lambda/2$ for every unit vector $h$: expand the difference as a finite sum of entry differences times $h_i h_j$, each with $|h_i h_j|\le1$. If $y\ne x_*$ is feasible and $\|y-x_*\|_2<\delta$, put $v=y-x_*$. Then $v\in T$, and convexity of $U$ keeps $x_*+tv$ in $U$ for $0\le t\le1$. For $\phi(t)=f(x_*+tv)$, stationarity gives $\phi'(0)=0$, while homogeneity of the quadratic form gives $\phi''(t)=Q_{x_*+tv}(v)\ge(\lambda/2)\|v\|_2^2>0$. [F1, L1, step 1.2, given, algebra]

3.1 For any $t\in(0,1]$, [L5] applied to $\phi'$ on $[0,t]$ yields $\phi'(t)-\phi'(0)=t\phi''(s)>0$ for some $s\in(0,t)$, so $\phi'(t)>0$. Applying [L5] to $\phi$ on $[0,1]$ gives $\phi(1)-\phi(0)=\phi'(r)>0$ for some $r\in(0,1)$. Thus every distinct feasible $y$ with $\|y-x_*\|_2<\delta$ has $f(y)>f(x_*)$. If $T=\{0\}$, $Ay=Ax_*$ implies $y-x_*\in T=\{0\}$, so $x_*$ is the only feasible point. [L5, step 2.2, algebra] ∎
