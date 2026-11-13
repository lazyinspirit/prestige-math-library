---
title: Feasible labelled simple regular graph orders
status: draft
research_item: lem-author-bcce21321c2a-feasible-regular-orders
dependency_level: 1
---

## Prerequisites

- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning)


## Statement

For integers $n\ge1$ and $d\ge0$, put $V=\{1,\ldots,n\}$ and let $\mathcal G_d(n)$ be the set of all graphs $(V,E)$ such that $E$ is a set of two-element subsets of $V$ and each vertex belongs to exactly $d$ edges. These are the labelled simple $d$-regular graphs on $V$; this definition imposes no parity restriction on $nd$. Then $\mathcal G_d(n)$ is nonempty if and only if $d<n$ and $nd$ is even. Under these conditions the simplicity event $S$ in the uniform pairing model has strictly positive probability. No lower bound uniform in $n$ is asserted.

## Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning)

## Facts & Assumptions

[F1] A finite simple graph $(V,E)$ has a finite vertex set $V$ and an edge set consisting of two-element subsets of $V$, with no loops or repeated edges ([math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)). The requirement that each vertex belongs to exactly $d$ edges defines $d$-regularity here for every integer $d\ge0$.

[F2] For $n\ge1$, $d\ge0$ and $nd$ even, [def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning) defines the finite uniform pairing space, its collapse and its simplicity event $S$; each simple regular graph has exactly $(d!)^n$ pairing realizations. Every outcome of this nonempty finite uniform space has positive probability, including the unique empty pairing when $d=0$.

## Proof

**Given:** Integers $n\ge1$ and $d\ge0$ and the graph set defined in the statement; the pairing model is invoked only after $nd$ is known to be even.

**Goal:** Prove feasibility and positivity of the simplicity event.

1.1 If $(V,E)$ belongs to $\mathcal G_d(n)$, its $d$ distinct neighbours at any vertex lie among the other $n-1$ vertices. Counting the incidences $(v,e)$ with $v\in e\in E$ first by vertices and then by edges gives $nd=2|E|$, since every edge has two distinct endpoints. Thus $d<n$ and $nd$ is even. [F1, given, algebra]

1.2 Conversely suppose $d<n$ and $nd$ is even. If $d=2k$, put $D=\{1,\ldots,k\}\cup\{n-k,\ldots,n-1\}$, with both sets empty when $k=0$. Since $2k<n$, the two sets are disjoint subsets of $\{1,\ldots,n-1\}$. If $d=2k+1$, then $n$ is even; put $D=\{1,\ldots,k\}\cup\{n-k,\ldots,n-1\}\cup\{n/2\}$, again taking the first two sets empty when $k=0$. The inequality $2k+1<n$ gives $k<n/2$, so the three sets are disjoint subsets of $\{1,\ldots,n-1\}$. In either case $|D|=d$ and $t\in D$ if and only if $n-t\in D$. [given, construct, algebra]

1.3 For $v\in V$ and an integer $1\le t\le n-1$, define $c_v(t)=v+t$ when $v+t\le n$, and $c_v(t)=v+t-n$ when $v+t>n$. These two explicit formulas give a vertex of $V$ different from $v$. The map $t\mapsto c_v(t)$ is a bijection from $\{1,\ldots,n-1\}$ to $V\setminus\{v\}$: for $w>v$ its unique inverse value is $t=w-v$, and for $w<v$ it is $t=n+w-v$, as is checked in the two branches. If $w=c_v(t)$, the same formulas give $c_w(n-t)=v$: when $v+t\le n$ one has $w+n-t=v+n>n$, and when $v+t>n$ one has $w+n-t=v\le n$. This defines and verifies the required cyclic operation using integer labels only. [given, construct, algebra]

2.1 Define $E=\{\{v,c_v(t)\}:v\in V,\ t\in D\}$. It is a set of two-element subsets of $V$, hence $(V,E)$ is simple by [F1]. At each $v$ the vertices $c_v(t)$ for $t\in D$ are distinct by step 1.3. Every edge incident to $v$ is of this form: an edge generated at some other vertex $w$ with $v=c_w(t)$ has $w=c_v(n-t)$, and $n-t\in D$ by step 1.2. Thus the incident edges at $v$ are exactly $\{v,c_v(t)\}$ for $t\in D$, and there are $|D|=d$ of them. This constructs a member of $\mathcal G_d(n)$, including the empty edge set when $d=0$ and in particular when $n=1$. [F1, step 1.2, step 1.3, construct]

3.1 Under the sufficient conditions, $nd$ is even, so [F2] applies to the constructed graph. It has $(d!)^n\ge1$ pairing realizations. At least one outcome of the nonempty finite uniform pairing space therefore belongs to $S$, and every such outcome has positive probability by [F2]. Consequently $\mathbb P(S)>0$. Together with step 1.1 and step 2.1 this proves the equivalence and the asserted positivity, without asserting a uniform lower bound. [F2, step 1.1, step 2.1, algebra] ∎
