---
id: lem-height-descent-from-finite-quotient-and-northcott
kind: lemma
title: Height descent from a finite quotient and finite sublevel sets
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Brian Conrad, Abelian Varieties"
      url: "https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf"
      locator: "§9.2.1, height descent in the proof of the Mordell–Weil theorem; this item isolates the abstract group step."
    - title: "Bjorn Poonen, Rational Points on Varieties"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "§8.4.4–8.4.5, height descent in the Mordell–Weil argument."
---

## Statement

Let $G$ be an abelian group and let $B:G\times G\to\mathbb R$ be a symmetric biadditive map such that $q(x):=B(x,x)\ge0$ for every $x\in G$. Suppose $G/2G$ is finite and $\{x\in G:q(x)\le T\}$ is finite for every real $T\ge0$. Then $G$ is finitely generated as an abelian group. The argument uses no form of the Axiom of Choice.

## Facts & Assumptions

**Given:** An abelian group $G$, a symmetric biadditive map $B:G\times G\to\mathbb R$ with nonnegative quadratic form $q(x)=B(x,x)$, finiteness of $G/2G$, and finiteness of every sublevel set $\{x:q(x)\le T\}$ for $T\ge0$. No choice axiom is assumed.

[A1] The hypotheses on $G$, $B$, and $q$ are exactly those in the statement; no external supplier is used.

## Proof

**Proof technique:** choose finite coset representatives and repeatedly divide by $2$, reducing the square-root height until it lies in a fixed finite sublevel set.

1.1 Positive semidefiniteness implies $|B(x,y)|\le\sqrt{q(x)q(y)}$. To see this using only the group operations, put $a=q(x)$, $b=B(x,y)$ and $c=q(y)$. Biadditivity gives $q(mx+ny)=m^2a+2mnb+n^2c\ge0$ for all integers $m,n$. For $m\ge1$, division by $m^2$ shows that $p(t)=a+2bt+ct^2$ is nonnegative for every rational $t=n/m$. For any real $t$, the rational numbers $t_j=\lfloor jt\rfloor/j$ satisfy $|t_j-t|<1/j$. Moreover $|p(t_j)-p(t)|\le |t_j-t|(2|b|+c(|t_j|+|t|))\to0$, so $p(t)\ge0$ for all real $t$. If $c>0$, evaluating at $t=-b/c$ gives $b^2\le ac$. If $c=0$ and $b\ne0$, taking $t=-(a+1)/(2b)$ would give $p(t)=-1$, a contradiction. This proves the claimed inequality without multiplying group elements by real numbers. [A1, algebra]

1.2 Enumerate the finite quotient $G/2G$ as $C_1,\ldots,C_s$. Finite induction chooses one $r_i\in C_i$ for each $i$, which is finite choice provable without the Axiom of Choice. Put $R=\{r_1,\ldots,r_s\}$, $C=\max_{r\in R}\sqrt{q(r)}$, and $T=2\max\{C,1\}$. [A1, choose]

2.1 For any $x\in G$, choose the representative $r\in R$ of its coset modulo $2G$ and write $x=r+2y$. By [step 1.1], $2\sqrt{q(y)}=\sqrt{q(x-r)} \le \sqrt{q(x)}+\sqrt{q(r)}.$ Thus, if $t:=\sqrt{q(x)}\ge T$, then $\sqrt{q(y)}\le(t+C)/2\le3t/4<t$. [A1, step 1.1, step 1.2, algebra]

3.1 Fix $x_0$ and put $t_0=\sqrt{q(x_0)}$. Choose a natural number $N$ with $(3/4)^Nt_0<T$ before making any descent choices: the elementary induction $(4/3)^N\ge1+N/3$ and the Archimedean property give such an $N$. At most $N$ successive applications of step 2.1 suffice, stopping as soon as $\sqrt{q(x_k)}<T$. Indeed, if no earlier stop occurs, finite induction constructs $x_0,\ldots,x_N$ with $x_i=r_i+2x_{i+1}$ and $\sqrt{q(x_N)}\le(3/4)^Nt_0<T$. The existence of this fixed finite chain follows by induction on its length, using the existence of a successor at each step; it requires neither an infinite sequence of choices nor Dependent Choice. Thus some $k\le N$ has $q(x_k)<T^2$. [step 2.1, algebra]

4.1 The set $F=\{x\in G:q(x)\le T^2\}$ is finite by hypothesis and contains $x_k$. Expanding the finite recurrence gives $x_0=r_0+2r_1+\cdots+2^{k-1}r_{k-1}+2^kx_k,$ so $x_0$ is an integer combination of elements of the finite set $R\cup F$. Since $x_0$ was arbitrary, $R\cup F$ generates $G$. [A1, step 1.2, step 3.1, algebra] ∎
