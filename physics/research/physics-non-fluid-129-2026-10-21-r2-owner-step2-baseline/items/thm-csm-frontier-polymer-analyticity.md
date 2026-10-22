---
id: thm-csm-frontier-polymer-analyticity
kind: theorem
title: "A strict polymer majorant gives a zero-free finite partition function"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-frontier-abstract-polymer
  - lem-csm-frontier-polymer-tree-majorant
  - def-complex-numbers-and-arithmetic
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - thm-termwise-differentiation-of-complex-power-series
  - def-real-exponential-function-and-e
justified_by: []
dependency_roles:
  def-csm-frontier-abstract-polymer: mathematical-premise
  lem-csm-frontier-polymer-tree-majorant: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-termwise-differentiation-of-complex-power-series: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
physical_scope: null
empirical_premises: []
sources:
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, Chapter 5, Cluster Expansion"
      url: "https://www.unige.ch/~velenik/smbook/Cluster_Expansion.pdf"
      locator: "§§5.3–5.5, PDF pp. 4–9 (printed pp. 222–228): formal graph-component expansion, Theorem 5.4 and its proof, and Theorem 5.8 on analytic activity dependence."
    - title: "Daniel Ueltschi, Cluster expansions and correlation functions"
      url: "https://arxiv.org/pdf/math-ph/0304003"
      locator: "§2, Theorem 1 and full proof, PDF pp. 1–4: absolute cluster convergence, the rooted bound, and the logarithm of the partition function."
---

## Statement

Let $\Gamma$ be countable with a reflexive symmetric incompatibility relation $\sim$. Let $V\subseteq\Gamma$ be finite, and fix weights $w_\gamma\in\mathbb C$, numbers $a_\gamma\geq0$, and a radius $r>0$. Call $X\subseteq V$ compatible when no two distinct elements of $X$ are related by $\sim$. Suppose there is $\varepsilon\in(0,1]$ such that

$$\sum_{\substack{\eta\in V\\\eta\sim\gamma}}r|w_\eta|e^{a_\eta}\leq(1-\varepsilon)a_\gamma\qquad(\gamma\in V).$$

For $t\in\mathbb C$, define $Z_V(t):=\sum_{\substack{X\subseteq V\ X\text{ compatible}}}\prod_{\gamma\in X}(tw_\gamma)$. Define the connected series

$$L_V(t):=\sum_{n=1}^{\infty}\frac{t^n}{n!}\sum_{\gamma_1,\ldots,\gamma_n\in V}U_n(\gamma_1,\ldots,\gamma_n)\prod_{i=1}^nw_{\gamma_i}.$$

Then $L_V$ converges absolutely and uniformly on every closed subdisc strictly inside $|t|<r$, may be differentiated there term by term, and satisfies $Z_V(t)=\exp(L_V(t))$ for $|t|<r$. Thus $Z_V$ has no zero in this disc and $L_V$ is its analytic logarithm normalized by $L_V(0)=0$.

## Statement references

[[def-csm-frontier-abstract-polymer]]

## Facts & Assumptions

**Given:** The finite polymer model, weights, radius, and strict majorant in the Statement.

[F1] [[def-csm-frontier-abstract-polymer]]: for finite $V$, $Z_V$ sums products of activities over compatible subsets, and $U_n$ sums connected graph products with edge weight $-\mathbf 1_{\{\gamma_i\sim\gamma_j\}}$.

[F2] [[lem-csm-frontier-polymer-tree-majorant]]: if $\sum_{\eta\sim\gamma}|z_\eta|e^{a_\eta}\leq a_\gamma$, then the rooted connected-cluster sum with root $\gamma$ is at most $e^{a_\gamma}$.

[F3] [[def-complex-exponential]] and [[thm-complex-exponential-addition-and-real-extension]]: the complex exponential is defined by its everywhere convergent power series and satisfies $\exp(u+v)=\exp(u)\exp(v)$.

[F4] [[thm-termwise-differentiation-of-complex-power-series]]: a complex power series differentiates term by term at every point strictly inside its radius of convergence.

[A1] For every $\gamma\in V$, $\sum_{\eta\in V,\ \eta\sim\gamma}r|w_\eta|e^{a_\eta}\leq(1-\varepsilon)a_\gamma$.

## Proof

**Given:** The definitions [F1], the rooted estimate [F2], and [A1].

1.1 Write $f_{ij}=-\mathbf 1_{\{\gamma_i\sim\gamma_j\}}$. Reflexivity makes $\prod_{i<j}(1+f_{ij})$ zero when a tuple repeats a polymer, and otherwise this product is one exactly for a compatible subset. Hence $Z_V(t)=\sum_{n\geq0}\frac{t^n}{n!}\sum_{\vec\gamma\in V^n}(\prod_iw_{\gamma_i})\prod_{i<j}(1+f_{ij})$ as a formal series. Expanding the pair product gives all simple graphs. Each graph decomposes uniquely into a set partition of its vertex labels into connected components, and its weight factors over the blocks. The coefficient of $t^n$ in $\exp(L_V(t))$ is $\frac1{n!}\sum_{\pi\in\Pi_n}\sum_{\vec\gamma\in V^n}(\prod_{B\in\pi}U_{|B|}(\vec\gamma_B))(\prod_{i=1}^nw_{\gamma_i})$: the exponential's $1/k!$ removes ordering of the $k$ blocks, while assigning their labels contributes the multinomial factor that cancels the block factorials. This is exactly the connected-component decomposition of the all-graph coefficient, so $Z_V$ and $\exp(L_V)$ have identical formal coefficients. [F1, algebra]

1.2 Let $d_n$ be the coefficient of $t^n$ in $L_V$, and apply [F2] to the finite polymer set $V$ with activities $r w_\eta$. Condition [A1] implies its rooted criterion. For each fixed root $\gamma_1$, the $n$th nonnegative term of that rooted sum is at most $e^{a_{\gamma_1}}$; summing over roots and dividing by $n!$ gives $r^n|d_n|\leq\frac1n\sum_{\gamma\in V}r|w_\gamma|e^{a_\gamma}$. Thus on $|t|\leq s<r$, the series is dominated by a constant times $\sum_{n\geq1}(s/r)^n/n$, and its derivative series by a constant times $\sum_{n\geq1}(s/r)^{n-1}$. Both converge uniformly on every such closed subdisc. [A1, F2, algebra]

2.1 By [F4], $L_V$ differentiates term by term throughout $|t|<r$. For each fixed $t$ with $|t|<r$, step 1.2 gives $\sum_{n\geq1}|d_n||t|^n<\infty$, so the total absolute sum after expanding $\exp(L_V(t))$ is at most $\sum_{k\geq0}(\sum_{n\geq1}|d_n||t|^n)^k/k!<\infty$. The products may therefore be regrouped by total degree; their coefficients are the formal coefficients identified in step 1.1, so $Z_V(t)=\exp(L_V(t))$ on the disc. By [F3], $\exp(L_V(t))\exp(-L_V(t))=1$, so $Z_V(t)$ is nonzero and $L_V$ is its analytic logarithm with $L_V(0)=0$. [F3, F4, step 1.1, step 1.2] ∎
