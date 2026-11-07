---
dependency_level: 0
id: def-finite-weighted-gcd-graph
kind: definition
title: Finite weighted GCD graphs and their quality
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
- thm-fundamental-theorem-of-arithmetic
- def-common-divisor-and-gcd
sources:
  references:
  - title: D. Koukoulopoulos and J. Maynard, On the Duffin–Schaeffer conjecture, Annals192(2020),251–307
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf
---

## Definition

A **finite weighted GCD graph** is $G=(\mu,V,W,E,P,f,g)$, where $V,W$ are finite sets of positive integers, $E\subseteq V\times W$, $\mu:\mathbb N\to[0,\infty)$ has finite values, $P$ is a finite set of primes, and $f,g:P\to\mathbb Z_{\ge0}$. Extend $\mu$ to vertex sets by summation and to edge sets by product weights $\mu(v)\mu(w)$. For each $p\in P$, require $p^{f(p)}\mid v$ on $V$, $p^{g(p)}\mid w$ on $W$, and $\nu_p(\gcd(v,w))=\min(f(p),g(p))$ on every edge. If $f(p)\ne g(p)$, require the exact valuations $\nu_p(v)=f(p)$ and $\nu_p(w)=g(p)$ on the entire respective vertex sets.

A subgraph restricts vertices and edges, enlarges $P$, and preserves the old functions $f,g$. A graph is nontrivial when $\mu(E)>0$. Its density is $\delta=\mu(E)/(\mu(V)\mu(W))$ if both side masses are positive and is zero otherwise. Put $C_0=10^{40}$, $H_0=10^{2000}$, $s=31/30$, and
$$ q(G):=\delta^{10}\mu(V)\mu(W)\prod_{p\in P}\frac{p^{|f(p)-g(p)|}}{(1-\mathbf1_{f(p)=g(p)\ge1}/p)^2(1-p^{-s})^{10}}. $$
The residual prime set is $R(G):=\{p\notin P:p\mid\gcd(v,w)\text{ for some }(v,w)\in E\}$. Let $R^\sharp(G)$ consist of residual $p$ for which some $k\ge0$ has both $\mu(\{v:\nu_p(v)=k\})\ge(1-C_0/p)\mu(V)$ and the analogous inequality on $W$; set $R^\flat(G)=R(G)\setminus R^\sharp(G)$.

For $p\notin P$, write $V_k=\{v:\nu_p(v)=k\}$, $W_l=\{w:\nu_p(w)=l\}$ and $E_{kl}=E\cap(V_k\times W_l)$. The graph $G_{kl}$ restricts to these sets and records $f(p)=k,g(p)=l$. For real $t\ge1$, put
$$ L_t(v,w):=\sum_{\substack{p\mid vw/\gcd(v,w)^2\\p\ge t}}\frac1p. $$
Prime valuations use unique prime factorization and the positive greatest common divisor. Empty products have value $1$.

## Definition references

[Koukoulopoulos–Maynard, §§6–14](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)
