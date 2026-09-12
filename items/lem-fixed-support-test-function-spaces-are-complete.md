---
id: "lem-fixed-support-test-function-spaces-are-complete"
kind: "lemma"
title: "Fixed support test function spaces are complete"
deps: ["def-fixed-support-test-function-frechet-space", "thm-uniform-derivative-limit-on-a-closed-interval"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For every compact $K\subseteq\Omega$ with $\Omega\subseteq\mathbb R^n$ open, the space $\mathcal D_K$ is Hausdorff, locally convex and complete for
$$d(f,g)=\sum_{m=0}^\infty2^{-m-1}\min(1,p_m(f-g)).$$
This metric induces exactly its derivative-seminorm topology. Multiplying the metric by two gives the equivalent convention with weights $2^{-m}$. These assertions require no choice axiom.

## Facts & Assumptions

[F1] The functions, increasing seminorms and zero extensions are defined in [[def-fixed-support-test-function-frechet-space]].

[F2] On a nondegenerate closed real interval, uniform convergence of continuously differentiable functions and their derivatives identifies the derivative of the limit; the weaker hypothesis of convergence at one point suffices ([[thm-uniform-derivative-limit-on-a-closed-interval]]). Apply this to real and imaginary parts separately.

## Proof

**Given:** a compact $K$ and its space in F1.

1.1 Nonnegativity, symmetry and separation for $d$ follow from F1 and its $p_0$ term. The inequality $\min(1,a+b)\le\min(1,a)+\min(1,b)$ gives the triangle inequality term by term. For fixed $m$ and $0<\varepsilon<1$, $d(f,g)<2^{-m-1}\varepsilon$ implies $p_m(f-g)<\varepsilon$. Conversely, given $\varepsilon>0$, choose $M$ with $\sum_{m>M}2^{-m-1}<\varepsilon/2$; then $p_M(f-g)<\varepsilon/2$ gives $d(f,g)<\varepsilon$. These bounds identify the two topologies and their Cauchy sequences. Seminorm balls are convex, and their triangle and homogeneity inequalities give continuity of vector operations. [given, F1, algebra]

2.1 Let $(f_j)$ be $d$-Cauchy and extend each function smoothly by zero to $\mathbb R^n$. For every multi-index $\alpha$, the functions $\partial^\alpha f_j$ are uniformly Cauchy on all of $\mathbb R^n$: outside $K$ they vanish and on $K$ the bound is $p_{|\alpha|}(f_j-f_k)$. At each point their complex values have a unique limit $g_\alpha(x)$. Passing $k$ to infinity in the uniform Cauchy bound proves uniform convergence to $g_\alpha$. This definition uses unique limits, not a choice of subsequences. Each $g_\alpha$ is continuous: at a point, approximate it uniformly by one continuous derivative within $\varepsilon/3$ and use continuity of that derivative. It vanishes off $K$. [step 1.1, F1]

3.1 Fix a coordinate direction $e_i$, a point $x$ and a positive $h$. On $[-h,h]$, the functions $t\mapsto\partial^\alpha f_j(x+te_i)$ and their derivatives converge uniformly to $g_\alpha(x+te_i)$ and $g_{\alpha+e_i}(x+te_i)$ respectively. F2, componentwise, gives $\partial_i g_\alpha(x)=g_{\alpha+e_i}(x)$. All these functions are continuous by step 2.1, so iterating this identity shows $g_0$ is smooth with every derivative $g_\alpha$. Its support is contained in the closed set $K$, hence $g_0|_\Omega\in\mathcal D_K$. [step 2.1, F2]

4.1 Uniform convergence of the finitely many derivatives of order at most $m$ gives $p_m(f_j-g_0)\to0$ for each $m$, hence $d(f_j,g_0)\to0$ by step 1.1. This proves completeness. If $K$ is empty or has empty interior, F1 makes the space zero and the same argument yields its sole element. No endpoint differentiation in $\Omega$ was assumed: the coordinate segments in step 3.1 lie in the globally smooth zero extension. $\square$ [step 3.1, step 2.1, step 1.1, F1]
