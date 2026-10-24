---
id: lem-qftx-parametric-vector-bundle-section-smoothing
kind: lemma
title: "Finite-parameter smoothing of vector-bundle sections"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-gauge-group-sphere-homotopy
physical_scope: null
proof_strategy: direct
axiom_base: "ZF + AC"
deps:
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - def-smooth-manifold
  - def-vector-bundle-chart-and-transition-function
  - def-smooth-partition-of-unity-subordinate-to-an-open-cover
  - def-axiom-of-choice
dependency_roles:
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-vector-bundle-chart-and-transition-function: mathematical-premise
  def-smooth-partition-of-unity-subordinate-to-an-open-cover: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. M. Lee, Introduction to Smooth Manifolds, full ULB-hosted text"
      url: https://pierre.ag.gerard.web.ulb.be/textbooks/books/Introduction_To_Smooth_Manifolds.pdf
      locator: "Theorem 6.26, relative Whitney approximation; alternative full text inspected after the originally recorded Dokumen route failed."
    - title: "Allen Hatcher, Algebraic Topology, Chapter 4"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: "§4.2, printed pp. 379–381; background on compact smooth topology and homotopy constructions."
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 7, pp. 49–56; bundle and homotopy framework."
verification:
  precheck: pass
---
## Statement

Let $X$ be a compact finite-dimensional smooth manifold, $K\subseteq X$ a closed smooth submanifold with a chosen collar, $M$ a compact smooth manifold, and $E\to M$ a finite-rank smooth real vector bundle. Let $s:X\times M\to E$ be a continuous family of sections, meaning $s(x,m)\in E_m$ and $(x,m)\mapsto s(x,m)$ is continuous. Assume $x\mapsto s(x,\cdot)$ is continuous in the uniform topology, its restriction to $K$ is continuous in the $C^\infty$ section topology, and for distinct marked points $m_1,\ldots,m_q\in M$ the values $s(x,m_i)=v_i\in E_{m_i}$ are independent of $x$. For every $\varepsilon>0$ there is a family $\widetilde s:X\to\Gamma^\infty(E)$ continuous in the $C^\infty$ topology, equal to $s$ on $K$, equal to $v_i$ at every $m_i$, and satisfying $\sup(\{0\}\cup\{\|\widetilde s(x,m)-s(x,m)\|:(x,m)\in X\times M\})<\varepsilon$ for any fixed bundle norm. The straight-line homotopy in each vector fiber from $s$ to $\widetilde s$ fixes $K$ and all marked values.

## Statement references

[Lee, Theorem 6.26, relative Whitney approximation](https://pierre.ag.gerard.web.ulb.be/textbooks/books/Introduction_To_Smooth_Manifolds.pdf)

[Hatcher, Algebraic Topology, Chapter 4](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

[May, A Concise Course in Algebraic Topology, Chapter 7](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf)

## Facts & Assumptions

**Given:** The compact manifolds, vector bundle, collar, family, fixed fiber values and uniform bundle norm of the Statement. Work in ZF + AC to use the supplied smooth partition-of-unity theorem.

[F1] A smooth vector bundle is locally a product with finite-dimensional vector fibers, and its smooth transition functions identify the local section coefficients. [[def-vector-bundle-chart-and-transition-function]]

[F2] On a smooth manifold, a smooth partition of unity subordinate to an open cover supplies smooth cutoff functions supported in the chosen charts. [[thm-smooth-partitions-of-unity-exist-on-manifolds]], with the convention of [[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]

[A1] The family on $K$ is continuous into the full $C^\infty$ topology, not merely pointwise smooth in $m$; this is the relative-topology hypothesis used below.

## Proof

1.1 If $X$ is empty, take the unique empty family. If $M$ is empty, its bundle has the unique empty smooth section, and take the unique family of those sections. In either case all agreement constraints and the straight-line homotopy hold vacuously, and the displayed error is $\sup\{0\}=0$. We may therefore assume $X$ and $M$ nonempty. Choose a finite bundle atlas and a subordinate finite smooth partition of unity using compactness and [F1, F2]. In each chart multiply a section coefficient by its partition function, extend by zero within the chart, convolve with a fixed compactly supported smooth mollifier of radius $\delta$, and sum the finitely many resulting local sections. For each $\delta>0$ this defines a linear operator $S_\delta:C^0(M,E)\to\Gamma^\infty(E)$: every output derivative is an integral of the input against a derivative of a fixed smooth kernel, so each $C^r$ seminorm is bounded by a finite constant times the input $C^0$ norm. Uniform continuity of each input on compact chart supports gives $\|S_\delta u-u\|_{C^0}\to0$ for every $u$. Since $x\mapsto s(x,\cdot)$ has compact image in $C^0(M,E)$, a finite subcover argument makes this convergence uniform over $x\in X$. [given, F1, F2, given, construct]

2.1 The family $x\mapsto S_\delta s(x,\cdot)$ is continuous into $C^\infty$ by the seminorm bounds in step 1.1. Let $U$ be the chosen collar neighborhood of $K$, with projection $r:U\to K$, and choose a continuous cutoff $\chi:X\to[0,1]$ equal to $1$ on $K$ and supported inside $U$. For an interior hypersurface use the two-sided collar $c:K\times(-2a,2a)\to U$, $r(c(k,t))=k$, with $\chi$ supported in $|t|<a$; no boundary of $X$ is needed. Set
$$s_1(x)=S_\delta s(x)+\chi(x)\bigl(s(r(x))-S_\delta s(r(x))\bigr)$$
on $U$ and $s_1=S_\delta s$ off $U$. Every term is a smooth section in $m$ and varies continuously in $C^\infty$ with $x$. At $x\in K$, $s_1(x)=s(x)$. As $x$ approaches $K$, continuity into $C^0$ and the uniform approximation in step 1.1 make the correction uniformly small; choose the collar width and then $\delta$ so $s_1$ remains arbitrarily $C^0$-close to $s$. [given, A1, step 1.1, construct]

3.1 For each marked point choose a bundle chart and a smooth bump $b_i$ supported in that chart with $b_i(m_i)=1$; shrink the charts to be pairwise disjoint. In the chart extend $v_i-s_1(x,m_i)$ as the constant coefficient vector and multiply by $b_i$. The resulting correction $c_i(x,\cdot)$ is a smooth section continuous in $x$ in every $C^r$ seminorm, is zero on $K$ because $s_1=s=v_i$ there, and changes the value at $m_i$ by exactly $v_i-s_1(x,m_i)$. Put $\widetilde s=s_1+\sum_i c_i$. The finite corrections preserve $C^\infty$ continuity and the relative condition. Since the errors at the marked points are bounded by the uniform $C^0$ error from step 2.1 and the bumps have fixed bounded norms, choosing that error sufficiently small gives the prescribed $\varepsilon$ bound. [F1, given, step 2.1, construct]

4.1 For $0\le t\le1$ define $H_t(x,m)=(1-t)s(x,m)+t\widetilde s(x,m)$ in the vector space $E_m$. This is continuous, equals $s$ at $t=0$ and $\widetilde s$ at $t=1$, and is constant on $K$ and at each marked point because both endpoint families agree there. Thus the required relative homotopy exists. [given, step 3.1, algebra] ∎

