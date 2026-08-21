---
id: thm-convex-functions-have-subgradients-at-interior-points
kind: theorem
title: "A convex function has a subgradient at every interior point of its domain"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-convex-function-iff-convex-epigraph, cor-convex-functions-on-open-convex-sets-are-continuous, thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set, def-subgradient-and-subdifferential, def-epigraph-and-hypograph, def-metric-interior-closure-boundary, def-axiom-of-choice, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lectures 7 and 12"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
    - title: "D. Drusvyatskiy, Convex Analysis and Nonsmooth Optimization, Theorem 3.36"
      url: "https://sites.math.washington.edu/~ddrusv/crs/Math_516_2020/curr_notes.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and the Axiom of Countable Choice ([[def-countable-choice]]). Let $C\subseteq\mathbb R^n$ be convex and let $f:C\to\mathbb R$ be convex. Then $\partial f(a)$ is nonempty for every $a\in\operatorname{int}C$.

## Facts & Assumptions

**Given:** Fix $a\in\operatorname{int}C$ and assume the choice principles in the Statement ([[def-metric-interior-closure-boundary]]). The restriction of $f$ to the open convex set $\operatorname{int}C$ is continuous by [[cor-convex-functions-on-open-convex-sets-are-continuous]], and subgradients have the convention of [[def-subgradient-and-subdifferential]], [[def-epigraph-and-hypograph]].

[A1] AC and $\mathrm{AC}_\omega$ supply the choice functions asserted in [[def-axiom-of-choice]] and [[def-countable-choice]].

[L1] The function $f:C\to\mathbb R$ is convex if and only if its epigraph is a convex subset of $\mathbb R^{n+1}$ ([[thm-convex-function-iff-convex-epigraph]]).

[L2] At every boundary point of a nonempty convex set there is a nonzero supporting normal $u$ whose inner product with every displacement into the set is nonpositive ([[thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set]]).

## Proof

**Proof technique:** direct.

1.1 Choose a closed ball $B$ centred at $a$ and contained in $\operatorname{int}C$. The restricted epigraph $$E=\{(x,s):x\in B,\ f(x)\le s\}$$ is closed by continuity and convex by [L1]. The point $(a,f(a))$ is on its boundary, so [A1] licenses the hypotheses of [L2], which gives a supporting normal $(u,\mu)\ne0$. Since the epigraph contains every upward vertical ray, $\mu\le0$; if $\mu=0$, the ball contains small displacements from $a$ in both directions and forces $u=0$, impossible. Thus $\mu<0$, and rescaling to $\mu=-1$ gives $f(x)\ge f(a)+\langle u,x-a\rangle$ on $B$. [A1, L1, L2, given, algebra]

2.1 Let $y\in C$. Choose $0<t\le1$ so that $z=a+t(y-a)\in B$. The local inequality from step 1.1 gives $f(z)\ge f(a)+t\langle u,y-a\rangle$, while convexity gives $f(z)\le(1-t)f(a)+tf(y)$. Combining and dividing by $t>0$ yields $f(y)\ge f(a)+\langle u,y-a\rangle$. Thus $u\in\partial f(a)$. [step 1.1, given, algebra] ∎
