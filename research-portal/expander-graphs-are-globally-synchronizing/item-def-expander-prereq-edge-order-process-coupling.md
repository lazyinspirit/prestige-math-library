---
title: Uniform edge orderings, graph-process times and independent labels
status: published
research_item: def-expander-prereq-edge-order-process-coupling
dependency_level: 0
---

## Prerequisites

- [math:def-uniform-finite-probability-space](https://alphabetamath.cc/item/def-uniform-finite-probability-space)
- [math:def-filtration-and-filtered-probability-space](https://alphabetamath.cc/item/def-filtration-and-filtered-probability-space)
- [math:def-discrete-stopping-time](https://alphabetamath.cc/item/def-discrete-stopping-time)
- [math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)
- [math:def-product-measure-on-sigma-finite-spaces](https://alphabetamath.cc/item/def-product-measure-on-sigma-finite-spaces)
- [math:thm-borel-products-of-euclidean-spaces-are-euclidean-borel](https://alphabetamath.cc/item/thm-borel-products-of-euclidean-spaces-are-euclidean-borel)
- [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-sigma-algebra-generated-by-a-function](https://alphabetamath.cc/item/def-sigma-algebra-generated-by-a-function)
- [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)
- [math:thm-finite-union-bound](https://alphabetamath.cc/item/thm-finite-union-bound)


## Definition

Assume countable choice. Let $n\ge 1$ be an integer, $V=\{1,\ldots,n\}$, and let $E=\{\{i,j\}:i,j\in V,\ i<j\}$ be the set of possible edges, with $N=|E|=\binom n2$. A graph here is the vertex set $V$ together with a subset of $E$; it is connected if each pair of vertices is joined by a finite path of edges. Give the set $\Omega$ of the $N!$ orderings $(e_1,\ldots,e_N)$ of $E$ its power-set sigma-algebra and the uniform probability law. For $0\le m\le N$, define $G(n,m)$ to have edge set $\{e_1,\ldots,e_m\}$. For $0\le m\le N$, the joint prefix map $R_m:\Omega\to E^m$ sends an ordering to $(e_1,\ldots,e_m)$; the finite target $E^m$ has the discrete topology and hence its full power set as its Borel sigma-algebra. For $m=0$, $E^0$ is the singleton consisting of the empty tuple. Its edge-revelation filtration is $\mathcal F_m=\sigma(R_m)=\{R_m^{-1}(B):B\subseteq E^m\}$, also written $\sigma(e_1,\ldots,e_m)$, extended by $\mathcal F_m=\mathcal F_N$ for $m>N$. Define the connectivity time $\tau=\min\{m:G(n,m)\text{ is connected}\}$. A discrete stopping time is a map whose event $\{\tau\le m\}$ belongs to $\mathcal F_m$ for every $m\ge0$.

Equivalently for the order process, assign to each edge an independent random label $U_e$ uniform on $[0,1)$ and order edges by increasing label, breaking ties using a fixed deterministic edge order. For $p\in[0,1]$, put an edge in the threshold graph $G_p$ exactly when $U_e\le p$. Here uniform means $\mathbb P(U_e\in[a,b))=b-a$ for $0\le a\le b\le1$, and independence means that probabilities of simultaneous coordinate events factor. Almost surely the labels are distinct, and their ordering has the uniform law above. At each fixed $p$, the edge indicators of $G_p$ are independent with inclusion probability $p$.

For a sequence of random processes indexed by $n$, an event holds with high probability if its probability tends to one as $n\to\infty$. A simultaneous assertion after connectivity means that the single event $\{G(n,m)\text{ has the property for every }m\in\{\tau,\ldots,N\}\}$ holds with high probability. This is stronger than separate high-probability assertions at deterministic times, even when the latter are restricted to times at or after $\tau$. No monotonicity of a graph property such as synchronization is asserted by this definition.

## Facts & Assumptions

[F1] On a nonempty finite set the uniform law assigns each outcome equal mass and each event its fraction of the outcomes ([math:def-uniform-finite-probability-space](https://alphabetamath.cc/item/def-uniform-finite-probability-space)).

[F2] A filtration is an increasing sequence of sigma-algebras, and a discrete stopping time is characterized by the events $\{\tau\le m\}$ being in the corresponding sigma-algebras ([math:def-filtration-and-filtered-probability-space](https://alphabetamath.cc/item/def-filtration-and-filtered-probability-space), [math:def-discrete-stopping-time](https://alphabetamath.cc/item/def-discrete-stopping-time)).

[F3] Finite products of the normalized Lebesgue law on $[0,1)$ exist by iteration of product measure; their coordinate events have product probabilities. Independent random elements are defined by factorization of their coordinate sigma-algebras ([math:def-product-measure-on-sigma-finite-spaces](https://alphabetamath.cc/item/def-product-measure-on-sigma-finite-spaces), [math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)).

[F4] Under countable choice, a finite-dimensional box has Lebesgue measure equal to the product of its side lengths, including the stated half-open conventions. Euclidean Borel sets agree with the finite product Borel sigma-algebra ([math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind), [math:thm-borel-products-of-euclidean-spaces-are-euclidean-borel](https://alphabetamath.cc/item/thm-borel-products-of-euclidean-spaces-are-euclidean-borel), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F5] A path is a finite vertex list with distinct vertices and with an edge between each consecutive pair; a single vertex is a path of length zero ([math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)).

[F6] For a map $f$ to a Borel measurable target, $\sigma(f)$ consists of the inverse images of its Borel sets; it is the smallest sigma-algebra making $f$ measurable. On a finite discrete target every subset is Borel ([math:def-sigma-algebra-generated-by-a-function](https://alphabetamath.cc/item/def-sigma-algebra-generated-by-a-function)).

[F7] For a finite family of events, the probability of their union is at most the sum of their probabilities, including the empty-family case ([math:thm-finite-union-bound](https://alphabetamath.cc/item/thm-finite-union-bound)).

## Justification

**Given:** An integer $n\ge1$, the finite edge set and the uniform permutation and label constructions in the definition, under countable choice.

**Goal:** Verify the laws, the coupling, the stopping-time assertion, and the stated distinction of quantifiers.

1.1 There are $N!$ edge orderings. For a fixed $m$-edge set, exactly $m!(N-m)!$ orderings put precisely that set first, so $G(n,m)$ is uniform among the $\binom Nm$ graphs with $m$ edges. Conditional on any specified first $m<N$ edges in their revealed order, each missing edge is next in exactly $(N-m-1)!$ of the $(N-m)!$ compatible orderings. Thus it is selected with probability $1/(N-m)$. For $N=0$ the unique empty ordering gives the same statements where applicable. [F1, algebra]

1.2 For $N>0$, use the $N$-fold product of normalized Lebesgue measure on $[0,1)$, indexed by $E$; for $N=0$ use the one-point probability space. Product rectangles show that the coordinate labels are independent and have the stated uniform law. A threshold event is a coordinate event of probability $p$, including the endpoints $p=0,1$; therefore all threshold indicators are independent. Strict ordering events are Borel, since they are defined by finitely many strict coordinate inequalities. [F3, F4, given]

1.3 Each $R_m$ has a finite discrete target, so $\mathcal F_m$ is a sigma-algebra of events by [F6]. Truncating a prefix of length $m+1$ to length $m$ shows that $\mathcal F_m\subseteq\mathcal F_{m+1}$. For each $m\le N$, the event that $G(n,m)$ is connected is the inverse image under $R_m$ of the set of prefixes whose edge set joins every pair of vertices by a path, and thus belongs to $\mathcal F_m$. Connectivity persists when edges are added, because every existing path remains a path. The complete graph is connected: distinct vertices have a one-edge path, and each vertex has a length-zero path to itself. Thus $\tau\le N$, including when $n=1$, and $\{\tau\le m\}$ is exactly the event that $G(n,m)$ is connected for $m\le N$; for $m>N$ it is the whole space. Hence $\tau$ is a bounded stopping time for the stated filtration. [F2, F5, F6, given]

1.4 For $n\ge2$, a disconnected graph on $V$ has at least $n-1$ missing edges. Indeed, choose a vertex and let $S$ be the vertices reachable from it by paths. Disconnectedness makes $S$ nonempty and proper, and there is no edge from $S$ to its complement: such an edge would extend a path to a vertex outside $S$. If $s=|S|$, at least $s(n-s)\ge n-1$ edges are therefore missing, since $s(n-s)-(n-1)=(s-1)(n-s-1)\ge0$. Consequently every graph with at most $n-2$ missing edges is connected. In the given process this proves $\tau\le a_n:=N-n+2$ deterministically. The set $L_n=\{a_n,\ldots,N\}$ contains $n-1$ indices, all at or after the actual connectivity time. [F5, given, algebra]

2.1 Divide $[0,1)$ into $k$ equal half-open intervals. The probability that a specified pair of distinct labels falls in the same interval is $1/k$, by independence and the interval lengths. A finite union bound gives probability at most $\binom N2/k$ that any pair shares an interval. The tie event is contained in this event for every $k$, so it has probability zero. [F3, F4, F7, step 1.2, algebra]

2.2 Write $S_n$ for the simultaneous event in the definition and $B_{n,m}=\{m<\tau\}\cup\{G(n,m)\text{ has the property}\}$ for the assertion at a deterministic index $0\le m\le N$, restricted to times at or after connectivity. Then $S_n=\bigcap_{m=0}^N B_{n,m}$, so $\mathbb P(B_{n,m})\ge\mathbb P(S_n)$ for each such index, including any deterministic choice depending on $n$. Thus simultaneous high probability implies each of these deterministic-time assertions. [given, step 1.3]

3.1 On the event that all labels occupy different intervals, each ordered list of distinct interval indices has probability $k^{-N}$, and relabeling its coordinates gives equally many lists for each of the $N!$ strict edge orders. Hence the probabilities of any two strict edge orders differ by at most $\binom N2/k$. Letting $k$ grow shows that all strict orders have equal probability. They are disjoint and, by step 2.1, their union has probability one; each therefore has probability $1/N!$. The deterministic tie-breaking rule changes nothing outside a null event, establishing the coupling to the uniform permutation process. The case $N=0$ is immediate. [F1, step 1.2, step 2.1, algebra]

4.1 On the finite space $\Omega\times L_n$, use the uniform law, so each pair has mass $1/(N!(n-1))$. Its ordering coordinate retains the original graph-process law. For subsets $A\subseteq\Omega$ and $B\subseteq L_n$, the probability of $A\times B$ is $|A||B|/(N!(n-1))$, the product of its marginal probabilities. Hence the index coordinate $J$ is uniform on $L_n$ and independent of the ordering. Define a time-indexed property to hold at $m$ exactly when $m\ne J$; equivalently, sample the graph property that its edge count differs from $J$. For each deterministic index $m$, its failure probability is $\mathbb P(J=m)\le1/(n-1)$, which tends to zero. Since $J\ge\tau$ by step 1.4, the simultaneous post-connectivity assertion fails for every outcome, at the index $m=J$. This proves the strict quantifier distinction on the stated graph process with an independently sampled property. No monotonicity of synchronization follows from the process construction or the definitions. [F1, F3, step 2.2, step 1.4, algebra] ∎
