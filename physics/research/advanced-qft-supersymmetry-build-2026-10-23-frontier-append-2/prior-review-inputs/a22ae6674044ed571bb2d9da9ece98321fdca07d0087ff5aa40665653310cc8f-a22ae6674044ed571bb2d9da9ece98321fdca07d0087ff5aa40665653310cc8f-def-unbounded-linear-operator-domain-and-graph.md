---
id: def-unbounded-linear-operator-domain-and-graph
kind: definition
title: "Unbounded linear operators: domain, graph and extension"
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-space, def-linear-map, def-linear-subspace, def-real-and-complex-inner-product-space, def-complete-metric-space]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Definition 7.3 and Remark 7.4, p.29"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Definition 6.1, Sec. 6.1"
verification:
  audited: 2026-09-22
---

## Definition

Throughout this page $H$ is a complex Hilbert space ([[def-hilbert-space]]) with
inner product linear in the first variable and conjugate-linear in the second
([[def-real-and-complex-inner-product-space]]).

A **(possibly unbounded) linear operator on $H$** is a linear map
$T:D(T)\to H$ ([[def-linear-map]]) whose **domain** $D(T)\subseteq H$ is a linear
subspace ([[def-linear-subspace]]). The domain is part of the data: $T=S$ means
$D(T)=D(S)$ and $Tx=Sx$ for all $x\in D(T)$. One writes $T\subseteq S$, and
calls $S$ an **extension** of $T$, when $D(T)\subseteq D(S)$ and $Sx=Tx$ for
every $x\in D(T)$.

The **graph** of $T$ is
$$\Gamma(T):=\{(x,Tx):x\in D(T)\}\subseteq H\oplus H .$$
The direct sum $H\oplus H$ is read as the complex vector space of pairs with
coordinatewise operations and the inner product
$\langle (x,y),(u,v)\rangle=\langle x,u\rangle+\langle y,v\rangle$, whose induced
norm is
$$\|(x,y)\|=(\|x\|^2+\|y\|^2)^{1/2};$$
it is complete because $H$ is ([[def-complete-metric-space]]). The **graph norm**
on $D(T)$ is
$$\|x\|_T:=(\|x\|^2+\|Tx\|^2)^{1/2},$$
so that $x\mapsto(x,Tx)$ is an isometric isomorphism of $(D(T),\|\cdot\|_T)$
onto $\Gamma(T)$ with the norm restricted from $H\oplus H$.

$T$ is **closed** when $\Gamma(T)$ is a closed subset of $H\oplus H$. A linear
operator is determined by its graph, and the following elementary translations
are used silently below: $\Gamma(T)$ is a linear subspace of $H\oplus H$;
$\Gamma(T)\cap(\{0\}\oplus H)=\{(0,0)\}$; the image of $\Gamma(T)$ under the
first coordinate projection is $D(T)$; and $T\subseteq S$ if and only if
$\Gamma(T)\subseteq\Gamma(S)$. In particular a closed operator is exactly one
whose graph is a closed subspace of $H\oplus H$.

**Notation.** No boundedness of $T$ is assumed, and $T$ is frequently called
*unbounded* to stress this; a bounded everywhere defined operator on $H$ is the
special case $D(T)=H$ in which $\Gamma(T)$ is a closed subspace by continuity.
The letter $I$ denotes the identity operator on $H$ with domain $H$.

**Completeness of $H\oplus H$.** If $(x_n,y_n)$ is a Cauchy sequence in
$H\oplus H$, then $\|x_n-x_m\|\le\|(x_n-x_m,y_n-y_m)\|$ and
$\|y_n-y_m\|\le\|(x_n-x_m,y_n-y_m)\|$ show that $(x_n)$ and $(y_n)$ are Cauchy
in $H$; let $x,y$ be their limits. Then
$\|(x_n,y_n)-(x,y)\|^2=\|x_n-x\|^2+\|y_n-y\|^2\to0$, so $H\oplus H$ is
complete. Consequently a sequence in $H\oplus H$ converges exactly when its two
coordinate sequences converge in $H$.
