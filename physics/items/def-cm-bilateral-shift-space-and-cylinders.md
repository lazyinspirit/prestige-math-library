---
id: def-cm-bilateral-shift-space-and-cylinders
kind: definition
title: "The bilateral two-symbol shift space, its metric, its shift map and its cylinder sets"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-function-space, def-series, thm-geometric-series, def-integer-power, def-abs-value]
dependency_roles:
  def-function-space: mathematical-premise
  def-series: mathematical-premise
  thm-geometric-series: mathematical-premise
  def-integer-power: mathematical-premise
  def-abs-value: mathematical-premise
justified_by: [lem-cm-bilateral-shift-metric-and-sequential-compactness]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "C. Ulcigrai, MATH36206/MATHM6206 Topological and Symbolic Dynamics (University of Bristol/Manchester), Section 2.6: the full bi-sided shift space Sigma_N, and Section 2.7: the metric d_rho and cylinders C_{-m,n}(a_{-m},...,a_n)"
      url: "https://m-artigiani.github.io/files/SisDin-Part2.pdf"
verification:
  precheck: pass
---

## Definition

Let

$$X:=\{0,1\}^{\mathbb Z}=\{\,s\;:\;s\text{ is a function }\mathbb Z\to\{0,1\}\,\}$$

be the set of bi-infinite binary sequences, with the function-set convention of [[def-function-space]]; for $s\in X$ write $s_k:=s(k)$ for the value at the integer $k$. Define

$$d(s,t):=\sum_{k=0}^{\infty}2^{-k}\,|s_k-t_k|\;+\;\sum_{k=1}^{\infty}2^{-k}\,|s_{-k}-t_{-k}|\qquad(s,t\in X).$$

Both series converge by comparison with the geometric series $\sum_{k\ge0}2^{-k}=2$ ([[def-series]], [[thm-geometric-series]], [[def-integer-power]], [[def-abs-value]]), since $|s_j-t_j|\in\{0,1\}$ for every $j\in\mathbb Z$; hence $d(s,t)$ is a well-defined real number. That $d$ is a metric on $X$ is proved in the companion lemma [[lem-cm-bilateral-shift-metric-and-sequential-compactness]] and is not part of this definition.

The **(bilateral) shift** is the map

$$\sigma:X\longrightarrow X,\qquad \sigma(s)_k:=s_{k+1}\qquad(k\in\mathbb Z,\ s\in X).$$

For $n\ge1$ the $n$-fold iterate is written $\sigma^n$, defined by $\sigma^1:=\sigma$ and $\sigma^{n+1}:=\sigma\circ\sigma^n$; a point $s\in X$ is **periodic** when $\sigma^n(s)=s$ for some $n\ge1$.

A **cylinder** is a set of the form

$$[w]_{p,q}:=\{\,s\in X\;:\;s_k=w_k\text{ for }p\le k\le q\,\},$$

where $p\le q$ are integers and $w=(w_p,\dots,w_q)\in\{0,1\}^{\{p,\dots,q\}}$ is a finite binary word; the integers $p,q$ and the word $w$ are part of the data. When $p=q$ this is the set of sequences with prescribed value at the single coordinate $p$.

## Remarks

- The set $X$ is uncountable and the map $\sigma$ is a bijection with inverse $\sigma^{-1}(s)_k=s_{k-1}$; the definition itself asserts only the displayed formulas, while continuity of $\sigma$ is a theorem ([[thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive]]).

- No measure, probability or invariant measure on $X$ is introduced by this definition. The example used in this collection is topological; statements about invariant measures for the one-sided fair-coin shift are separate published results and are not consumed here.

- Cylinders form a basis for the metric topology. More precisely, for $m\ge0$ the centered cylinder $[s]_{-m,m}$ satisfies $B(s,2^{-m})\subseteq[s]_{-m,m}\subseteq\overline B(s,2^{1-m})$. An arbitrary cylinder $[w]_{p,q}$ contains $B(s,2^{-\max\{|p|,|q|\}})$ about each of its points $s$, but need not have a comparable outer radius ([[lem-cm-bilateral-shift-metric-and-sequential-compactness]], clause 2 and proof step 2.1).
