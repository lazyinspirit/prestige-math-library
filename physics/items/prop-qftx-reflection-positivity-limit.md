---
id: prop-qftx-reflection-positivity-limit
kind: proposition
title: Reflection positivity passes to a distributional limit
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-qftx-euclidean-limit-data
dependency_roles:
  def-qftx-euclidean-limit-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Stephen J. Summers, A Perspective on Constructive Quantum Field Theory, §3 opening
      url: https://arxiv.org/pdf/1203.3991
      locator: "PDF pp. 9–10: reflection positivity, the additional linear growth condition, and the hierarchy-level reconstruction caveat."
    - title: Arthur Jaffe, Constructive Quantum Field Theory, §4
      url: https://arthurjaffe.net/Assets/pdf/CQFT.pdf
      locator: "PDF pp. 5–6, equations (8)–(9): the free-field reflected form and preservation of positivity under appropriate cutoff limits."
verification:
  precheck: pass
---

## Statement

Let $S^\lambda$ and $S$ be regulated and limit Schwinger hierarchies for one fixed dimension $d\ge1$. Assume each $S^\lambda$ is reflection positive on the same positive-time algebra and, for every fixed $n$ and every $\Phi\in\mathcal S(\mathbb R^{dn})$, $\langle S^\lambda_n,\Phi\rangle\to\langle S_n,\Phi\rangle$. Then $S$ is reflection positive. Euclidean invariance and permutation symmetry also pass to the limit when the same fixed continuous test transformations preserve those properties at every regulator. These hypotheses yield no clustering or order-uniform growth conclusion.

## Statement references

[[def-qftx-euclidean-limit-data]]

## Facts & Assumptions

**Given:** A directed regulator set $\Lambda$, hierarchies $S^\lambda$ and $S$ as in the earlier limit-data definition, and the two assumptions in the Statement.

[A1] Every $S^\lambda$ is reflection positive on the common positive-time polynomial algebra.

[A2] For each fixed order $n$, the distributions $S^\lambda_n$ converge pointwise on every fixed test $\Phi\in\mathcal S(\mathbb R^{dn})$ to $S_n$.

[F1] The limit-data definition fixes the positive-time algebra, reflection form, Euclidean pullbacks, and permutation action.

## Proof

**Given:** [A1], [A2], [F1].

1.1 For each $n\ge1$, define the product-test map $J_n:S_d^{\otimes_{\rm alg}n}\to S_{d,n}$ by $J_n(f_1\otimes\cdots\otimes f_n)(x_1,\ldots,x_n)=\prod_{i=1}^n f_i(x_i)$ and linear extension; the product of Schwartz functions is a Schwartz function. Set $J_0(c)=c$ and, for $a\in T_d$, define $Q_S(a):=\omega_S(\Theta a\,a)$. Fix a finite positive-time polynomial $a=\sum_{j=0}^{N}a_j$, with each $a_j$ a finite sum of degree-$j$ product tests. Expanding concatenation and the moment functional gives the finite sum $Q_{S^\lambda}(a)=\sum_{j,k=0}^{N}\langle S^\lambda_{j+k},J_{j+k}((\Theta a_j)a_k)\rangle .$ Every test in this finite sum is fixed independently of $\lambda$, so [A2] gives $Q_{S^\lambda}(a)\to Q_S(a)$. By [A1], every value $Q_{S^\lambda}(a)$ is a nonnegative real number. Since $[0,\infty)$ is closed in $\mathbb C$, its limit $Q_S(a)$ is also a nonnegative real number. As $a$ was arbitrary, $S$ is reflection positive. [A1, A2, F1, given, algebra]

2.1 Fix one Euclidean isometry $\gamma(x)=Rx+b$ and one order-$n$ test $\Phi$. The pullback $\Phi\mapsto\Phi\circ(\gamma^{-1})^{\times n}$ is continuous on Schwartz space: the chain rule writes each derivative as a finite linear combination of derivatives of $\Phi$ evaluated at the inverse affine image, and each polynomial weight in $x$ becomes a finite sum of polynomial weights in the new variable with fixed coefficients. Thus each transformed Schwartz seminorm is bounded by finitely many original seminorms. If every $S^\lambda_n$ is invariant under this fixed pullback, [A2] applied to both $\Phi$ and its pullback passes the equality to $S_n$. A permutation of argument blocks is a coordinate permutation and preserves the same seminorms exactly, so the same limit argument passes permutation symmetry. Step 1.1 uses only a fixed finite number of orders and tests; it supplies neither a uniform-in-$n$ bound nor a limit as a translation parameter tends to infinity, so it proves no order-uniform growth or clustering claim. [A2, F1, step 1.1, algebra] ∎ 
