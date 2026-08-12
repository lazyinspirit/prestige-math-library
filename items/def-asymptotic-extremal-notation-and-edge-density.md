---
id: def-asymptotic-extremal-notation-and-edge-density
kind: definition
title: "Edge density and the asymptotic notations $O$, $o$, $\\Omega$, and $\\Theta$ for extremal functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extremal-number-turan-graph-and-blowup, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## Definition

For an $n$-vertex graph $G$ with $n\ge2$, its **edge density** is

$$d(G):=\frac{e(G)}{\binom n2}.$$

The normalized extremal number is $\operatorname{ex}(n,H)/\binom n2$ for $n\ge2$.

For eventually nonnegative functions $f,g:\mathbb N\to\mathbb R$ with $g(n)>0$ eventually:

- $f=O(g)$ means that some $C,N>0$ satisfy $f(n)\le Cg(n)$ for $n\ge N$;
- $f=o(g)$ means $f(n)/g(n)\to0$;
- $f=\Omega(g)$ means that some $c,N>0$ satisfy $f(n)\ge cg(n)$ for $n\ge N$;
- $f=\Theta(g)$ means both $f=O(g)$ and $f=\Omega(g)$.

A subscript, as in $O_{r,s}$, permits the hidden constant and threshold to depend on the subscripted parameters. No normalized edge density is assigned when $n<2$ because $\binom n2=0$.
