---
id: thm-c1-paths-have-length-equal-to-the-integral-of-speed
kind: theorem
title: "If $\\gamma:[a,b]\\to\\mathbb{R}^n$ is continuous, differentiable on $(a,b)$, and $\\gamma'$ extends continuously to $[a,b]$, then $L(\\gamma)=\\int_a^b\\lVert\\gamma'(t)\\rVert_2\\,dt$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-vector-valued-derivative-and-integral, cor-vector-valued-ftc-and-lipschitz-bound, thm-norm-inequality-for-the-vector-valued-integral, thm-heine-cantor-r, thm-darboux-equals-riemann, cor-mean-value-theorem, def-path-polygonal-length-and-rectifiability-in-rn]
justified_by: []
aliases: []
landmark: true
proof_strategy: two-inequalities
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. R. Shastri, Metric Spaces, Section 5"
      url: "https://www.math.iitb.ac.in/~ars/ma403.pdf"
    - title: "U. Lang, Differential Geometry I, Section 1.1"
      url: "https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ and $a<b$. Suppose $\gamma:[a,b]\to\mathbb R^n$ is continuous, differentiable on $(a,b)$, and its derivative extends to a continuous function $v:[a,b]\to\mathbb R^n$. Then $\gamma$ is rectifiable and

$$L_{[a,b]}(\gamma)=\int_a^b\lVert v(t)\rVert_2\,dt.$$

The extension values $v(a)$ and $v(b)$ are necessarily the relative one-sided derivatives of $\gamma$; thus the statement is exactly the usual $C^1$ hypothesis on a closed interval. The formula also holds on a singleton interval, with both sides defined as zero.

## Facts & Assumptions

**Given:** The path $\gamma$ and continuous derivative extension $v$.

[L1] Vector differentiability and integration are componentwise ([[def-vector-valued-derivative-and-integral]]).

[L2] The scalar mean value theorem identifies each endpoint difference quotient with an interior derivative value ([[cor-mean-value-theorem]]).

[L3] If a vector-valued function is differentiable on a closed interval and its derivative is integrable, then its endpoint increment is the vector integral of its derivative ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[L4] For $u\le w$, $\lVert\int_u^w v\rVert_2\le\int_u^w\lVert v\rVert_2$, and the norm of an integrable vector function is integrable ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[L5] A continuous function on a compact interval is uniformly continuous ([[thm-heine-cantor-r]]), and tagged Riemann sums of an integrable function converge uniformly over sufficiently fine tagged partitions to its integral ([[thm-darboux-equals-riemann]]).

[L6] Arc length is the supremum of polygonal lengths ([[def-path-polygonal-length-and-rectifiability-in-rn]]).

## Proof

**Proof technique:** two inequalities.

1.1 For each coordinate and $h>0$, [L2] gives $(\gamma_j(a+h)-\gamma_j(a))/h=\gamma_j'(\xi_h)$ for some $\xi_h\in(a,a+h)$. Continuity of $v_j$ makes this tend to $v_j(a)$; the analogous argument at $b$ gives the left derivative $v_j(b)$. Hence $\gamma$ is differentiable relative to $[a,b]$ with derivative $v$ everywhere. [given, L1, L2]

1.2 Fix $\varepsilon>0$. By uniform continuity in [L5], choose $\delta>0$ so that $\lVert v(t)-v(s)\rVert_2<\varepsilon/(2(b-a))$ whenever $|t-s|<\delta$. Choose a tagged partition $P$ of mesh below $\delta$ whose Riemann sum for the continuous speed differs from its integral by less than $\varepsilon/2$. [given, L5]

2.1 Applying [L3] on every subinterval $[u,w]\subseteq[a,b]$ gives $\gamma(w)-\gamma(u)=\int_u^w v$. [step 1.1, L3]

3.1 For any partition $P$, [L4] applied to each increment from step 2.1 gives $\ell_P(\gamma)\le\sum_i\int_{t_i}^{t_{i+1}}\lVert v\rVert_2=\int_a^b\lVert v\rVert_2$. [step 2.1, L4]

3.2 On a subinterval with tag $\xi_i$, step 2.1 gives $\gamma(t_{i+1})-\gamma(t_i)=v(\xi_i)\Delta t_i+\int_{t_i}^{t_{i+1}}(v-v(\xi_i))$. By [L4] and the reverse triangle inequality, its norm is at least $\lVert v(\xi_i)\rVert_2\Delta t_i-\varepsilon\Delta t_i/(2(b-a))$. [step 2.1, step 1.2, L4]

4.1 Taking the supremum over $P$ gives $L(\gamma)\le\int_a^b\lVert v\rVert_2$, so in particular $\gamma$ is rectifiable. [step 3.1, L6]

4.2 Summing step 3.2 and using the tagged-sum choice gives $\ell_P(\gamma)>\int_a^b\lVert v\rVert_2-\varepsilon$. Since $L(\gamma)\ge\ell_P(\gamma)$ and $\varepsilon$ is arbitrary, the reverse inequality follows. [step 1.2, step 3.2, L6]

5.1 Combining steps 4.1 and 4.2 proves equality. On $[a,a]$ the length and oriented integral are both zero by definition. [step 4.1, step 4.2] ∎
