---
id: "def-locally-convex-topological-vector-space"
kind: "definition"
title: "Local convexity, convex and balanced sets, and the continuous dual"
status: "draft"
origin: "pipeline"
deps: ["def-topological-vector-space-for-local-convexity", "lem-topological-vector-space-translation-scaling-and-absorption", "def-algebraic-dual-and-linear-functional", "def-sublinear-functional", "lem-restriction-of-scalars"]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis (17 November 2017)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo B\u00fchler and Dietmar Salamon, Functional Analysis (8 June 2017)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Harald Hanche-Olsen, Topological vector spaces, version 1.6 (bibliographic origin; complete local argument replaces unavailable backing)"
      url: "https://hanche.folk.ntnu.no/notes/topvec/topvec-a4.pdf"
pipeline_run: "phase-2-next-20"
---

## Definition

Let $X$ be a real or complex TVS ([[def-topological-vector-space-for-local-convexity]]). A subset $C$ is **convex** if $(1-t)x+ty\in C$ whenever $x,y\in C$ and $0\le t\le1$, with real coefficients even when $X$ is complex. Its **convex hull** is
$$\operatorname{co}(S)=\left\{\sum_{j=1}^n t_jx_j:n\ge1,\ x_j\in S,\ t_j\ge0,\ \sum_{j=1}^n t_j=1\right\}.$$
In particular $\operatorname{co}(\varnothing)=\varnothing$. This is the smallest convex superset of $S$: single-term sums contain $S$, and concatenating two weighted lists proves convexity. Every convex superset contains every finite convex combination: induct on list length, remove a zero coefficient, and otherwise group the first $n-1$ terms with weight $1-t_n$. If $t_n=1$ the value is $x_n$; if $t_n<1$, divide those first weights by $1-t_n$ and apply the induction hypothesis followed by binary convexity.

A set $C$ is **balanced** if $\lambda C\subseteq C$ for every scalar with $|\lambda|\le1$, and **absolutely convex** if it is convex and balanced. Empty sets satisfy both conditions; every nonempty balanced set contains zero, by taking $\lambda=0$, and is symmetric, by taking $\lambda=-1$ twice.

The TVS $X$ is **locally convex** if every zero-neighborhood contains a convex zero-neighborhood. Equivalently it has a base of open convex zero-neighborhoods. Indeed, if $C$ is a convex zero-neighborhood, its interior contains zero. For $x,y\in\operatorname{int}C$ and $0<t<1$, the set $(1-t)\operatorname{int}C+t\operatorname{int}C$ is open: it is a union of translates of the open set $(1-t)\operatorname{int}C$, using [[lem-topological-vector-space-translation-scaling-and-absorption]]. It contains $(1-t)x+ty$ and lies in $C$, so this point lies in the interior. The cases $t=0,1$ are immediate. Conversely an open convex zero-neighborhood is a convex zero-neighborhood.

A **seminorm** is a finite-valued $p:X\to[0,\infty)$ satisfying $p(x+y)\le p(x)+p(y)$ and $p(\lambda x)=|\lambda|p(x)$ for all scalars. It is **continuous** if continuous for the given topology and the usual real topology. Thus $p(0)=0$, but $p(x)=0$ need not imply $x=0$. Over the underlying real vector space it is sublinear in the sense of [[def-sublinear-functional]]; restriction of scalars is justified by [[lem-restriction-of-scalars]].

The **continuous dual** $X'$ consists of all continuous $\mathbb K$-linear maps $f:X\to\mathbb K$. The scalar field is a vector space over itself by [[lem-restriction-of-scalars]], clause 1, so these are linear functionals as in [[def-algebraic-dual-and-linear-functional]]. Pointwise operations make $X'$ a vector subspace of the algebraic dual: zero is continuous, and sums and scalar multiples are continuous by the scalar-operation continuity proved in [[lem-topological-vector-space-translation-scaling-and-absorption]]. Explicitly, continuity of $f,g$ at $x$ bounds their errors by $\varepsilon/2$ to control the sum, and by $\varepsilon/(|a|+1)$ to control $af$. All linear axioms are inherited pointwise.

For separation inequalities write $u=\operatorname{Re}f$, or $u=f$ over $\mathbb R$. The real part is continuous because $|\operatorname{Re}z-\operatorname{Re}w|\le|z-w|$. It is real-linear. No Hahn–Banach or choice principle is part of these definitions.
