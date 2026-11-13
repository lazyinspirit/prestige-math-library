---
id: def-expander-prereq-asymptotic-quantifiers
kind: definition
title: Asymptotic quantifiers and uniform parameter ranges
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:def-sequences-in-an-ordered-field
  - math:def-probability-measure
  - math:def-finite-probability-space-and-event
  - math:def-finite-simple-graph
  - math:def-graph-adjacency-incidence-neighbourhood-and-degree
  - math:lem-geometric-sequence-null
dependency_roles:
  math:def-sequences-in-an-ordered-field: mathematical-premise
  math:def-probability-measure: mathematical-premise
  math:def-finite-probability-space-and-event: mathematical-premise
  math:def-finite-simple-graph: mathematical-premise
  math:def-graph-adjacency-incidence-neighbourhood-and-degree: mathematical-premise
  math:lem-geometric-sequence-null: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 0
---

## Definition

Let $S$ be an unbounded subset of the natural numbers. All limits below are taken as $n\to\infty$ through $n\in S$: $x_n\to L$ means that for every $\varepsilon>0$ there is an $N$ such that $|x_n-L|<\varepsilon$ for every $n\in S$ with $n\ge N$. A property holds eventually if it holds for all such $n$ beyond some $N$.

For real deterministic sequences $a_n,b_n$ with $b_n>0$ eventually, $a_n=o(b_n)$ means that for every $\varepsilon>0$ there is an $N$ such that $|a_n|\le\varepsilon b_n$ for all $n\in S$ with $n\ge N$. The notation $a_n=O(b_n)$ means that there are constants $C>0$ and $N$ such that $|a_n|\le Cb_n$ for all $n\in S$ with $n\ge N$.

For each $n\in S$, let $(\Omega_n,\mathcal F_n,\mathbb P_n)$ be a probability space and $E_n\in\mathcal F_n$ an event. The events $E_n$ hold with high probability if $\mathbb P_n(E_n)\to1$. The spaces may vary with $n$; in the finite outcome-weight model $(\Omega,w)$, every subset of $\Omega$ is an event and its probability is the sum of its outcome weights.

Suppose that for each $n\in S$ a parameter $p$ ranges over a set $I_n$, and that $a_n(p)$ and $b_n(p)>0$ are real-valued on that set. The assertion $a_n(p)=O(b_n(p))$ uniformly over $p\in I_n$ means that there are $C>0$ and $N$, independent of $p$ and $n$, such that $|a_n(p)|\le Cb_n(p)$ for every $n\in S$ with $n\ge N$ and every $p\in I_n$. The assertion $a_n(p)=o(b_n(p))$ uniformly means that for every $\varepsilon>0$ there is an $N$, independent of $p$, such that $|a_n(p)|\le\varepsilon b_n(p)$ for all those $n$ and $p$. Similarly, events $E_{n,p}$ hold with high probability uniformly over $p\in I_n$ if for every $\varepsilon>0$ there is an $N$ such that $\mathbb P_{n,p}(E_{n,p})\ge1-\varepsilon$ for every $n\in S$ with $n\ge N$ and every $p\in I_n$. Each $E_{n,p}$ is an event in its indicated probability space. Empty parameter sets impose no condition at that index.

For integers $n\ge1$ and $d\ge0$, a simple $d$-regular graph on $n$ vertices means a finite graph with no loops or repeated edges in which every vertex has exactly $d$ neighbors. An order is feasible when such a graph exists. Limits over this model are taken through feasible orders; necessarily $0\le d<n$ and $nd$ is even. A fixed-$n$ estimate retains its stated constants and cutoff rather than replacing them by an asymptotic assertion.

## Justification

The definitions of $o$ and $O$ are, respectively, convergence to zero and eventual boundedness of $a_n/b_n$ in the sequence sense; eventual positivity makes the ratios and inequalities equivalent. Restriction to an unbounded index set simply requires the same inequalities at its indices. These use [[math:def-sequences-in-an-ordered-field]].

A probability space supplies a probability in $[0,1]$ for each event, so the high-probability definition is an ordinary real-sequence limit. In the finite outcome-weight model, the stated sum formula is the finite probability-space definition. See [[math:def-probability-measure]] and [[math:def-finite-probability-space-and-event]].

The uniform definitions place the cutoff outside the parameter quantifier. Thus a uniform bound applies to any choice $p=p(n)\in I_n$, whereas a result for each fixed $p$ alone need not: for $I_n=(0,1)$, $p^n\to0$ for each fixed $p$ by [[math:lem-geometric-sequence-null]], but for $n\ge1$ with $p_n=1-1/(2n)$, the factorization $1-p_n^n=(1-p_n)\sum_{k=0}^{n-1}p_n^k\le1/2$ gives $p_n^n\ge1/2$. The distinction uses the convergence and boundedness notions in [[math:def-sequences-in-an-ordered-field]].

In a simple $d$-regular graph on $n\ge1$ vertices, each vertex has at most $n-1$ neighbors. Counting incident vertex-edge pairs by vertices gives $nd$, while counting by edges gives twice the number of edges; hence $nd$ is even. The graph, neighbor and incidence conventions are those of [[math:def-finite-simple-graph]] and [[math:def-graph-adjacency-incidence-neighbourhood-and-degree]]. Feasibility is defined by existence, so these necessary restrictions are not asserted to be sufficient here. The finite-$n$ convention records precisely the constants and cutoff appearing in the relevant quantified inequality.
