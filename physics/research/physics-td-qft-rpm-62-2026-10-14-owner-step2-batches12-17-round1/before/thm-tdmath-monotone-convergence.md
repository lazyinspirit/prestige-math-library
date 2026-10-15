---
id: thm-tdmath-monotone-convergence
kind: theorem
title: "Monotone convergence for the measure integral"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: ["def-complete-ordered-field","def-finite-sum","def-tdmath-measure-integral"]
justified_by: []
dependency_roles: {"def-complete-ordered-field":"mathematical-premise","def-finite-sum":"mathematical-premise","def-tdmath-measure-integral":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Terence Tao, 245A Notes 3: Integration on Abstract Measure Spaces and the Convergence Theorems, full author-hosted lecture text"
      url: "https://terrytao.wordpress.com/2010/09/25/245a-notes-3-integration-on-abstract-measure-spaces-and-the-convergence-theorems/"
      locator: "Complete HTML lecture text read; abstract measure spaces, integration, Fatou, monotone convergence, dominated convergence, and the L1 convergence argument."
---

## Statement

Let $(X,\Sigma,\mu)$ be a measure space and let $f_n:X\to[0,\infty]$ be measurable with $f_n\le f_{n+1}$ and $f_n\to f$ pointwise. Then $\int f_n\,d\mu\uparrow\int f\,d\mu$, including infinite values. Also, for measurable $f,g\ge0$, $\int(f+g)\,d\mu=\int f\,d\mu+\int g\,d\mu$. For every $c\ge0$, $\int cf\,d\mu=c\int f\,d\mu$; the integral is also linear on real integrable functions.

## Facts & Assumptions


**Given:** A measure space, its nonnegative integral, and a pointwise increasing measurable sequence.

[F1] [[def-tdmath-measure-integral]]: nonnegative integrals are suprema over measurable simple minorants; monotonicity follows by inclusion of the minorant sets.

[F2] [[def-finite-sum]]: finite sums of simple-function level values can be regrouped.

[F3] [[def-complete-ordered-field]]: bounded nonempty subsets of $\mathbb R$ have suprema.

[A1] Countable additivity of $\mu$ is part of the measure-space definition.

[A2] The sequence is measurable and satisfies $0\le f_n\le f_{n+1}$ and $f_n\to f$ pointwise.

## Proof

**Given:** A measure space and a pointwise increasing sequence $0\le f_n\uparrow f$.

1.1 The simple minorants of $f_n$ are also minorants of $f_{n+1}$, so their integral suprema increase. Each is at most $\int f$; hence $L:=\lim_n\int f_n$ exists in $[0,\infty]$ and $L\le\int f$. [F1, A2]

2.1 Fix a nonnegative simple $s\le f$ and $0<t<1$. The measurable sets $A_n:=\{f_n\ge ts\}$ increase and cover $\{s>0\}$, since $f_n(x)\to f(x)\ge s(x)>ts(x)$ there. Write $s=\sum_{j=1}^m c_j\mathbf1_{B_j}$ in disjoint level form. For each $c_j>0$, $A_n\cap B_j\uparrow B_j$; countable additivity, applied to successive disjoint differences, gives $\mu(A_n\cap B_j)\uparrow\mu(B_j)$. The finite-sum definition [F2] then gives $\int s\mathbf1_{A_n}\uparrow\int s$. As $f_n\ge ts\mathbf1_{A_n}$, monotonicity and homogeneity of the simple integral imply $L\ge t\int s$. Let $t\uparrow1$ and take the supremum over $s\le f$; [F1, F3] give $L\ge\int f$. Together with step 1.1 this proves monotone convergence. [F1, F2, F3, A1, A2, step 1.1]

2.2 For nonnegative measurable $f$, define $s_n:=2^{-n}\sum_{k=1}^{n2^n}\mathbf1_{\{f\ge k2^{-n}\}}$. Each $s_n$ is a finite-valued measurable simple function. Every threshold counted in $s_n$ is also counted at the even-index threshold in $s_{n+1}$, so $s_n\le s_{n+1}$. If $f(x)<\infty$, once $n>f(x)$ the mesh gives $0\le f(x)-s_n(x)<2^{-n}$; if $f(x)=\infty$, then $s_n(x)=n$. Thus $s_n\uparrow f$. Define $t_n:=2^{-n}\sum_{k=1}^{n2^n}\mathbf1_{\{g\ge k2^{-n}\}}$; the same threshold and mesh argument shows $t_n\uparrow g$. Apply step 1.1 to $s_n$, $t_n$, and $s_n+t_n$. Refine their finitely many level sets to the finite partition of intersections $B_j\cap C_k$; regrouping the resulting sums by [F2] gives $\int(s_n+t_n)=\int s_n+\int t_n$. Passing to the three monotone limits proves $\int(f+g)=\int f+\int g$. [F1, F2, A1, step 1.1]

3.1 For $c>0$, simple minorants of $cf$ are exactly $c$ times simple minorants of $f$, so the supremum definition gives $\int cf=c\int f$; for $c=0$ both sides are zero. If an integrable real function is expressed as $u-v$ with $u,v\ge0$ integrable, the value $\int u-\int v$ is independent of the expression: $u-v=u'-v'$ implies $u+v'=u'+v$, and step 2.2 equates the finite sums of integrals. The definition using positive and negative parts is one such expression, so signed integrals are linear. [F1, F2, step 2.2] ∎
