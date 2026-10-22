---
id: thm-csm-frontier-polymer-analyticity
kind: theorem
title: "A strict polymer majorant gives a zero-free finite partition function"
status: published
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
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - lem-complex-modulus-of-real-embedding-equals-real-absolute-value
  - def-sum-over-a-finite-index-set
justified_by: []
dependency_roles:
  def-csm-frontier-abstract-polymer: mathematical-premise
  lem-csm-frontier-polymer-tree-majorant: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-termwise-differentiation-of-complex-power-series: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  lem-complex-modulus-of-real-embedding-equals-real-absolute-value: mathematical-premise
  def-sum-over-a-finite-index-set: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
physical_scope: null
empirical_premises: []
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Sacha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, Chapter 5, Cluster Expansion"
      url: "https://www.unige.ch/~velenik/smbook/Cluster_Expansion.pdf"
      locator: "§§5.3–5.5, PDF pp. 4–9 (printed pp. 222–228): formal graph-component expansion, Theorem 5.4 and its proof, and Theorem 5.8 on analytic activity dependence."
    - title: "Daniel Ueltschi, Cluster expansions and correlation functions"
      url: "https://arxiv.org/pdf/math-ph/0304003"
      locator: "§2, Theorem 1 and full proof, PDF pp. 1–4: absolute cluster convergence, the rooted bound, and the logarithm of the partition function."
---

## Statement

Let $\Gamma$ be an at most countable set (finite or in bijection with $\mathbb N$) and let $\sim$ be a reflexive symmetric relation on $\Gamma$ ($\gamma\sim\gamma$ and $\gamma\sim\eta$ implies $\eta\sim\gamma$). Let $V\subseteq\Gamma$ be finite, and fix maps $w:V\to\mathbb C$ and $a:V\to[0,\infty)$ and a radius $r>0$. Call $X\subseteq V$ compatible when no two distinct elements of $X$ are related by $\sim$. Suppose there is $\varepsilon\in(0,1]$ such that

$$\sum_{\substack{\eta\in V\\\eta\sim\gamma}}r|w_\eta|e^{a_\eta}\leq(1-\varepsilon)a_\gamma\qquad(\gamma\in V).$$

For $t\in\mathbb C$, define $Z_V(t):=\sum_{\substack{X\subseteq V\\\text{and }X\text{ is compatible}}}\prod_{\gamma\in X}(tw_\gamma)$. Define the connected series

$$L_V(t):=\sum_{n=1}^{\infty}\frac{t^n}{n!}\sum_{\gamma_1,\ldots,\gamma_n\in V}U_n(\gamma_1,\ldots,\gamma_n)\prod_{i=1}^nw_{\gamma_i}.$$

Then $L_V$ converges absolutely and uniformly on every closed subdisc strictly inside $|t|<r$, may be differentiated there term by term, and satisfies $Z_V(t)=\exp(L_V(t))$ for $|t|<r$. Thus $Z_V$ has no zero in this disc. Here an analytic logarithm of $Z_V$ on the disc means a holomorphic function $L$ with $\exp(L(t))=Z_V(t)$ there; the logarithm $L_V$ is normalized by $L_V(0)=0$.

## Statement references

[[def-csm-frontier-abstract-polymer]]

[[def-complex-conjugate-real-imaginary-part-and-modulus]]

[[lem-complex-conjugation-and-modulus-laws]]

[[lem-complex-modulus-of-real-embedding-equals-real-absolute-value]]

[[def-sum-over-a-finite-index-set]]

## Facts & Assumptions

**Given:** The finite polymer model, weights, radius, and strict majorant in the Statement.

[F1] [[def-csm-frontier-abstract-polymer]]: for finite $V$, $Z_V$ sums products of activities over compatible subsets, and $U_n$ is a real-valued sum of connected graph products with edge weight $-\mathbf 1_{\{\gamma_i\sim\gamma_j\}}\in\{-1,0\}$.

[F2] [[lem-csm-frontier-polymer-tree-majorant]]: if $\sum_{\eta\sim\gamma}|z_\eta|e^{a_\eta}\leq a_\gamma$, then the rooted connected-cluster sum with root $\gamma$ is at most $e^{a_\gamma}$.

[F3] [[def-complex-exponential]] and [[thm-complex-exponential-addition-and-real-extension]]: the complex exponential is defined by its everywhere convergent power series and satisfies $\exp(u+v)=\exp(u)\exp(v)$.

[F4] [[thm-termwise-differentiation-of-complex-power-series]]: a complex power series differentiates term by term at every point strictly inside its radius of convergence.

[F5] [[def-complex-conjugate-real-imaginary-part-and-modulus]] and [[lem-complex-conjugation-and-modulus-laws]]: for $z=x+iy$, $|z|=\sqrt{x^2+y^2}$; complex modulus is nonnegative, multiplicative and subadditive. The canonical real-embedding identity is stated in [[lem-complex-modulus-of-real-embedding-equals-real-absolute-value]]. Its current imported carrier is marked `published` and has `provenance.proof: ai-generated`, but records only `verification.precheck: pass`, with no `verification.audited` or `verification.verified`; the format pass does not evidence proof acceptance. Repeated subadditivity gives the finite-sum triangle inequality.

[F6] [[def-sum-over-a-finite-index-set]]: real and natural sums and products over finite sets are defined by any enumeration, independently of the enumeration; finite complex sums and products use the same enumeration-independent recursion specified in [[def-csm-frontier-abstract-polymer]].

[A1] For every $\gamma\in V$, $\sum_{\eta\in V,\ \eta\sim\gamma}r|w_\eta|e^{a_\eta}\leq(1-\varepsilon)a_\gamma$.

## Proof

**Given:** The definitions [F1], the rooted estimate [F2], and [A1].

1.1 Write $f_{ij}=-\mathbf 1_{\{\gamma_i\sim\gamma_j\}}$. Reflexivity makes $\prod_{i<j}(1+f_{ij})$ zero when a tuple repeats a polymer, and otherwise this product is one exactly for a compatible subset. Hence $Z_V(t)=\sum_{n\geq0}\frac{t^n}{n!}\sum_{\vec\gamma\in V^n}(\prod_iw_{\gamma_i})\prod_{i<j}(1+f_{ij})$ as a formal series. Expanding the pair product gives all simple graphs. A set partition of $[n]$ is a finite family of nonempty pairwise-disjoint blocks whose union is $[n]$; write $\Pi_n$ for the set of such partitions. This set is finite since it is contained in $\mathcal P(\mathcal P([n]))$. The connected components of each finite graph give its unique partition into connected graph blocks. Each graph's edge weight factors over these blocks. The coefficient of $t^n$ in $\exp(L_V(t))$ is $\frac1{n!}\sum_{\pi\in\Pi_n}\sum_{\vec\gamma\in V^n}(\prod_{B\in\pi}U_{|B|}(\vec\gamma_B))(\prod_{i=1}^nw_{\gamma_i})$: for ordered block sizes $m_1,\ldots,m_k$, assigning the $n$ labels to those blocks contributes $n!/(m_1!\cdots m_k!)$, and the exponential's factor $1/k!$ removes the ordering of the $k$ blocks. These factors leave exactly the connected-component expansion of the all-graph coefficient. Thus $Z_V$ and $\exp(L_V)$ have identical formal coefficients. [F1, F6, algebra]

1.2 Let $d_n$ be the coefficient of $t^n$ in $L_V$, and apply [F2] to the finite polymer set $V$ with activities $r w_\eta$. Since $r>0$, [F5] gives $|r w_\eta|=r|w_\eta|$, so [A1] implies the rooted criterion. For each fixed root $\gamma_1$, the $n$th nonnegative term of that rooted sum is at most $e^{a_{\gamma_1}}$. The finite-sum triangle inequality, multiplicativity in [F5], and agreement of the complex modulus with real absolute value give $r^n|d_n|\leq\frac1{n!}\sum_{\gamma_1\in V}r|w_{\gamma_1}|\sum_{\gamma_2,\ldots,\gamma_n\in V}|U_n(\gamma_1,\ldots,\gamma_n)|\prod_{j=2}^n|r w_{\gamma_j}|\leq\frac1n\sum_{\gamma\in V}r|w_\gamma|e^{a_\gamma}$. Thus on $|t|\leq s<r$, the series is dominated by a constant times $\sum_{n\geq1}(s/r)^n/n$, and its derivative series by a constant times $\sum_{n\geq1}(s/r)^{n-1}$. Both converge uniformly on every such closed subdisc. [A1, F2, F5, F6, algebra]

2.1 By [F4], $L_V$ differentiates term by term throughout $|t|<r$. For each fixed $t$ with $|t|<r$, step 1.2 gives $\sum_{n\geq1}|d_n||t|^n<\infty$, so the total absolute sum after expanding $\exp(L_V(t))$ is at most $\sum_{k\geq0}(\sum_{n\geq1}|d_n||t|^n)^k/k!<\infty$. The products may therefore be regrouped by total degree; their coefficients are the formal coefficients identified in step 1.1, so $Z_V(t)=\exp(L_V(t))$ on the disc. By [F3], $\exp(L_V(t))\exp(-L_V(t))=1$, so $Z_V(t)$ is nonzero and $L_V$ is its analytic logarithm with $L_V(0)=0$. [F3, F4, step 1.1, step 1.2] ∎
