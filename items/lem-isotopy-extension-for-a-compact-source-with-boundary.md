---
id: "lem-isotopy-extension-for-a-compact-source-with-boundary"
kind: "lemma"
title: "Isotopy extension for a compact source with boundary"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps: ["def-countable-choice", "def-smooth-manifold", "def-smooth-embedding", "def-smooth-map-between-manifolds-with-boundary", "def-smooth-vector-field-as-a-tangent-bundle-section", "def-time-dependent-vector-field-and-evolution-operator", "def-diffeomorphism-and-local-diffeomorphism-of-manifolds", "def-embedded-smooth-submanifold-with-boundary", "def-compact-space", "lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure", "lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space", "thm-smooth-partitions-of-unity-exist-on-manifolds", "thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set", "thm-compactness-under-continuous-maps", "thm-closed-subspace-of-a-compact-space-is-compact", "thm-time-dependent-vector-fields-have-local-smooth-evolution-operators", "prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law", "thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval"]
justified_by: []
aliases: []
proof_strategy: "the graph of the isotopy in the product, the horizontal velocity field along it, its extension by a partition of unity, a cutoff in time, and the flow of the resulting compactly supported time-dependent field"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Morris W. Hirsch, Differential Topology (Graduate Texts in Mathematics 33, Springer 1976; full text retrieved from the Internet Archive Wayback Machine snapshot of the luis.impa.br course copy)"
      url: "https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf"
      locator: "Chapter 8 §1, Theorem 1.3 with its proof, printed p. 180 (a compact submanifold isotopy with image in M−∂M extends to a diffeotopy of M of compact support), Theorems 1.1-1.2, printed p. 179 (compactly supported time-dependent fields generate isotopies), and the definition of the track F:V×I→M×I, printed p. 178"
    - title: "The Isotopy Extension Theorem (University of California, Riverside, graduate differential topology hand-out, 2010)"
      url: "https://math.ucr.edu/~res/math260s10/isotopyextension.pdf"
      locator: "Statement of the Isotopy Extension Theorem, printed p. 2 (a compact smooth source and a boundaryless target), and the negative example for noncompact sources, printed p. 4"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $V$ be a compact
smooth $n$-manifold with boundary and let $N$ be a smooth $n$-manifold without
boundary ([[def-smooth-manifold]]). Let $F:V\times I\to N$ be a smooth map such
that $F_t:=F(\cdot,t)$ is a smooth embedding for every $t\in I$
([[def-smooth-embedding]]), and suppose $F$ is constant near the ends: for some
$\varepsilon\in(0,\tfrac12)$ one has $F(x,t)=F(x,0)$ for $t\le\varepsilon$ and
$F(x,t)=F(x,1)$ for $t\ge1-\varepsilon$, for all $x\in V$.

Then for every open neighbourhood $W\subseteq N$ of the compact image
$F(V\times I)$ there is a smooth map $H:N\times I\to N$ such that
$H_0=\operatorname{id}_N$, every $H_t$ is a diffeomorphism of $N$
([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]),
$$H_t\circ F_0=F_t\quad\text{for every }t\in I,$$
$H_t=\operatorname{id}_N$ outside $W$ for every $t$, $H_t=\operatorname{id}_N$
for $t\le\varepsilon/2$, and $H_t=H_1$ for $t\ge1-\varepsilon/2$.

## Facts & Assumptions

**Given:** the compact smooth $n$-manifold with boundary $V$, the smooth $n$-manifold without boundary $N$, the smooth isotopy of embeddings $F:V\times I\to N$ constant near the ends with parameter $\varepsilon$, and the open neighbourhood $W$ of $F(V\times I)$.

[F1] [[def-smooth-embedding]]: a smooth embedding is an injective smooth immersion that is a homeomorphism onto its image with the subspace topology. For an embedding between manifolds of the same dimension the differential is invertible at every point.

[F2] [[def-smooth-map-between-manifolds-with-boundary]]: a continuous map of manifolds with boundary is smooth when every coordinate representative in boundary charts is smooth on a relatively open subset of a half-space in the local-extension sense, that is, it is the restriction of a smooth map defined on an open subset of the ambient Euclidean space.

[F3] [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]: if $U\subseteq\mathbb R^n$ is open, $f:U\to\mathbb R^n$ is smooth and $Df(a)$ is invertible, then $f$ restricts to a diffeomorphism from an open neighbourhood of $a$ onto an open subset of $\mathbb R^n$. No choice axiom is used.

[F4] [[thm-smooth-partitions-of-unity-exist-on-manifolds]]: every open cover of a smooth manifold admits a smooth partition of unity subordinate to it.

[F5] [[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]]: for a closed set inside an open set there is a smooth cutoff that equals $1$ on a neighbourhood of the closed set and has support in the open set.

[F6] [[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]]: every point of a locally compact Hausdorff space has basic open neighbourhoods with compact closure; smooth manifolds are locally compact Hausdorff.

[F7] [[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]]: for a smooth time-dependent vector field $X_t$ on a manifold $M$ and every $(s,p)$ there are an open interval around $s$ and neighbourhoods of the evolving points carrying a smooth evolution map $\Psi$ whose curves are the unique solutions of $\dot\gamma(t)=X_t(\gamma(t))$ with $\gamma(s)=p$.

[F8] [[prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law]]: evolution operators of a smooth time-dependent vector field satisfy $\Psi_{u,t}\circ\Psi_{t,s}=\Psi_{u,s}$ and $\Psi_{s,s}=\operatorname{id}$ wherever both sides are defined.

[F9] [[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]]: a smooth time-dependent vector field on $M$ whose union of supports over a compact interval $J$ is contained in a compact subset of $M$ has a global evolution operator $\Psi_{t,s}:M\to M$ for all $s,t\in J$.

[F10] [[def-smooth-vector-field-as-a-tangent-bundle-section]] and [[def-time-dependent-vector-field-and-evolution-operator]]: a time-dependent vector field on $N$ over $\mathbb R$ is a smooth map $X:\mathbb R\times N\to TN$ with $X(t,y)\in T_yN$; a horizontal field on the product $\mathbb R\times N$ is one of this form, placed in the second summand of $T(\mathbb R\times N)$.

[F11] [[def-embedded-smooth-submanifold-with-boundary]]: a subset of a smooth manifold is an embedded smooth submanifold with boundary when it carries a manifold-with-boundary smooth structure for which the inclusion is a smooth embedding.

[F12] [[thm-compactness-under-continuous-maps]] and [[thm-closed-subspace-of-a-compact-space-is-compact]]: continuous images of compact spaces are compact, closed subsets of compact spaces are compact, and finite unions of compact subsets are compact (including the empty union).

## Proof

**Given:** the objects and hypotheses of the statement; write $K:=F(V\times I)$ for the compact image and fix the parameter $\varepsilon$ of constancy near the ends.

1.1 The product $V\times I$ is compact: for an open cover and each time, compactness of $V$ supplies finitely many product neighbourhoods covering that time slice; intersect their time intervals to obtain a neighbourhood of that time, and compactness of $I$ supplies finitely many such neighbourhoods. Thus a finite subcover exists. The image $K=F(V\times I)$ is compact, being the continuous image of the compact space $V\times I$, and $K\subseteq W$; every point of $K$ has by [F6] an open neighbourhood with compact closure contained in $W$, finitely many of these cover $K$, and their union $V'$ is an open neighbourhood of $K$ with $\overline{V'}$ compact and $\overline{V'}\subseteq W$. [F6, F12, given]

1.2 Extend $F$ in the time direction by $\widetilde F(t,x)=F(x,0)$ for $t\le0$, $\widetilde F(t,x)=F(x,t)$ for $0\le t\le1$ and $\widetilde F(t,x)=F(x,1)$ for $t\ge1$: the prescriptions agree on the overlaps because $F$ is constant for $t\le\varepsilon$ and for $t\ge1-\varepsilon$, so $\widetilde F:\mathbb R\times V\to N$ is smooth and each $\widetilde F_t$ is a smooth embedding; let $\Theta:\mathbb R\times V\to\mathbb R\times N$, $\Theta(t,x)=(t,\widetilde F(t,x))$, be the graph map. [given, construct, algebra]

2.1 The graph map is an injective immersion with invertible differential at every point: injectivity is immediate from the first coordinate, and at $(t_0,x_0)$ a boundary chart of $V$ at $x_0$ and a chart of $N$ at $\widetilde F(t_0,x_0)$ present the coordinate representative of $\Theta$ as a map smooth on a relatively open subset of a half-space in the sense of [F2], hence as the restriction of a smooth map $\Phi$ defined near $(t_0,u(x_0))$ in an open set; the differential of $\widetilde F_{t_0}$ at $x_0$ is invertible by [F1] because $\widetilde F_{t_0}$ is an embedding between $n$-manifolds, so the differential of $\Phi$ there is invertible and [F3] restricts $\Phi$ to a local diffeomorphism, exhibiting $\Theta$ locally as the restriction of an ambient diffeomorphism to the source half-space. At a boundary point its image is a half-space neighbourhood, not an ambient open set; in the interior it is open. [F1, F2, F3, step 1.2]

3.1 The graph map is proper: for a compact $L\subseteq\mathbb R\times N$ the time projection $\pi_1(L)$ is compact, $\Theta^{-1}(L)$ is closed in the compact set $\pi_1(L)\times V$ by continuity and closedness of $L$, hence $\Theta^{-1}(L)$ is compact; a proper continuous map into this locally compact Hausdorff target is closed: for a closed source subset $A$ and $y$ outside its image, choose a compact target neighbourhood $L$ of $y$; the image of $A\cap\Theta^{-1}(L)$ is compact and hence closed in the Hausdorff target, and deleting it from the interior of $L$ gives a neighbourhood of $y$ missing the image of $A$. Therefore $\Theta$ is closed, its image $S:=\Theta(\mathbb R\times V)$ is closed in $\mathbb R\times N$ and $\Theta$ is a homeomorphism onto $S$ whose inverse is smooth by step 2.1, so $S$ is an embedded smooth submanifold with boundary of $\mathbb R\times N$ in the sense of [F11] with $\partial S=\Theta(\mathbb R\times\partial V)$. [F11, F12, step 1.2, step 2.1]

4.1 Define the horizontal velocity along the graph by placing $Y(\Theta(t,x)):=\bigl(0,\partial_t\widetilde F(t,x)\bigr)$ in $\{0\}\oplus T_{\widetilde F(t,x)}N\subseteq T_{(t,\widetilde F(t,x))}(\mathbb R\times N)$: the assignment is well defined because $\Theta$ is injective and smooth because $\Theta^{-1}$ is smooth by step 3.1, it is a horizontal smooth field along $S$ in the sense of [F10], and $Y=0$ at every point of $S$ whose first coordinate lies outside $[0,1]$, because $\widetilde F$ is constant in $t$ there. [F10, step 3.1, algebra]

5.1 At every point $q\in S$ the field $Y$ extends over an open neighbourhood in $\mathbb R\times N$ to a smooth horizontal field: choose $(t_0,x_0)=\Theta^{-1}(q)$ and, by step 2.1, an open neighbourhood $U$ of $(t_0,x_0)$ in $\mathbb R\times V$ mapped diffeomorphically onto $\Omega_0:=\Theta(U)$; shrink $U$ so that $\widetilde F(t,x)\in V'$ for all $(t,x)\in U$, possible by continuity because $\widetilde F(t_0,x_0)\in K\subseteq V'$. If $x_0\in\operatorname{int}V$ then $\Omega_0$ is open in $\mathbb R\times N$ and $\widetilde Y_q(\Theta(t,x)):=(0,\partial_t\widetilde F(t,x))$ defines on it a smooth horizontal field restricting to $Y$ on $S\cap\Omega_0$. If $x_0\in\partial V$ then $\Omega_0$ is only a half-space neighbourhood of $q$, but in boundary charts of $V$ the horizontal components of $Y$ are smooth functions on that half-space model, so by the local-extension convention of [F2] they extend smoothly to an open neighbourhood of $q$ in $\mathbb R\times N$ while the zero first component extends by zero, giving a smooth horizontal field on a neighbourhood $\Omega$ that restricts to $Y$ on $S\cap\Omega$; in both cases $\Omega$ may be shrunk to lie in $\mathbb R\times V'$. [F2, F10, step 1.1, step 2.1, step 4.1, construct]

6.1 The compact set $S_0:=\Theta([0,1]\times V)\subseteq S$ is covered by finitely many neighbourhoods $\Omega_{q_1},\dots,\Omega_{q_m}$ from step 5.1, each contained in $\mathbb R\times V'$; let $(\psi_0,\psi_1,\dots,\psi_m)$ be a smooth partition of unity on $\mathbb R\times N$ subordinate to the open cover $\{\mathbb R\times N\setminus S_0,\Omega_{q_1},\dots,\Omega_{q_m}\}$, which exists by [F4], and define $\widetilde Y:=\sum_{i=1}^{m}\psi_i\widetilde Y_{q_i}$ with each term extended by zero outside $\Omega_{q_i}$; the sum is smooth because $\operatorname{supp}\psi_i\subseteq\Omega_{q_i}$, it takes values in the horizontal subbundle and so is a time-dependent vector field $\widetilde Y(t,y)=X(t,y)\in T_yN$ on $N$ over $\mathbb R$ in the sense of [F10], and for $q\in S$ one has $\widetilde Y(q)=\sum_i\psi_i(q)Y(q)=(1-\psi_0(q))Y(q)=Y(q)$, because $\psi_0(q)\ne0$ forces $q\notin S_0$ and then $Y(q)=0$ by step 4.1; finally $\operatorname{supp}\widetilde Y\subseteq\mathbb R\times\overline{V'}$ because each $\Omega_{q_i}\subseteq\mathbb R\times V'$. [F4, step 1.1, step 4.1, step 5.1, algebra]

7.1 By [F5] choose a smooth function $\beta:\mathbb R\to[0,1]$ with $\beta=1$ on $[\varepsilon,1-\varepsilon]$ and $\beta=0$ outside $(\varepsilon/2,1-\varepsilon/2)$, and put $X'_t:=\beta(t)X_t$ for $t\in[0,1]$; then $\bigcup_{t\in[0,1]}\operatorname{supp}X'_t$ is contained in the compact subset $\overline{V'}\subseteq N$, so [F9] provides a global evolution operator $\Psi_{t,s}:N\to N$ for $s,t\in[0,1]$. [F5, F9, step 6.1]

8.1 The isotopy identity: fix $x\in V$ and put $\gamma(t):=F_t(x)$ for $t\in[0,1]$; then $\gamma(0)=F_0(x)$ and $\gamma'(t)=\partial_tF(t,x)$ equals $X'_t(\gamma(t))$ for every $t$, because on $[\varepsilon,1-\varepsilon]$ one has $\beta=1$ and $X_t(\gamma(t))=\partial_t\widetilde F(t,x)=\partial_tF(t,x)$ by step 6.1, while off $[\varepsilon,1-\varepsilon]$ the derivative $\partial_tF(t,x)$ vanishes and is multiplied by $\beta(t)\in[0,1]$; the curve $t\mapsto\Psi_{t,0}(F_0(x))$ solves the same equation with the same initial value by the defining property of the evolution operator in [F10], both curves are defined on all of $[0,1]$, and the local uniqueness in [F7] makes them agree near every point of the connected interval, so $H_t\circ F_0=F_t$ for $H_t:=\Psi_{t,0}$. [F7, F10, step 7.1, algebra]

9.1 The remaining properties: $H_0=\Psi_{0,0}=\operatorname{id}_N$ and each $H_t$ is a diffeomorphism with inverse $\Psi_{0,t}$, since the cocycle law of [F8] gives $\Psi_{0,t}\circ\Psi_{t,0}=\Psi_{0,0}=\operatorname{id}_N$ and $\Psi_{t,0}\circ\Psi_{0,t}=\Psi_{t,t}=\operatorname{id}_N$; the map $(t,y)\mapsto H_t(y)$ is smooth because near every $(t_0,y_0)$ it agrees by [F7] with the local smooth evolution map of $X'$ through the point $H_{t_0}(y_0)$ at time $t_0$; if $y\notin\overline{V'}$ then $X'_t(y)=0$ for all $t$ by step 6.1, so the constant curve at $y$ solves the equation of $X'$, [F7] gives $H_t(y)=y$, and hence $H_t=\operatorname{id}_N$ outside $W$ because $\overline{V'}\subseteq W$; finally $X'_t=0$ for $t\le\varepsilon/2$ and for $t\ge1-\varepsilon/2$, so the cocycle law gives $H_t=\operatorname{id}_N$ for $t\le\varepsilon/2$ and $H_t=\Psi_{t,1-\varepsilon/2}\circ H_{1-\varepsilon/2}=H_{1-\varepsilon/2}=H_1$ for $t\ge1-\varepsilon/2$. [F7, F8, step 1.1, step 6.1, step 7.1, step 8.1] ∎
