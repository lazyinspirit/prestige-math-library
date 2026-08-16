---
id: lem-nowhere-vanishing-algebras-approximate-the-constant-one
kind: lemma
title: "A nowhere-vanishing real function algebra on a compact space approximates the constant one"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-unital-separating-real-function-algebra-general, lem-compactness-of-a-subspace-is-ambient, thm-compactness-under-continuous-maps, cor-weierstrass-approximation-on-a-closed-interval]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
sources:
  scraped: []
  references:
    - title: "E. Carlen, Notes on Topology and the Stone-Weierstrass Theorem, proof of Theorem 1.26"
      url: "https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a compact Hausdorff space and let $A\subseteq C(X,\mathbb R)$ be a nowhere-vanishing real function algebra, not necessarily unital. Then the constant-one function belongs to the uniform closure of $A$: for every $\varepsilon>0$ there is $u\in A$ such that
$$|u(x)-1|<\varepsilon\qquad\text{for every }x\in X.$$

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$, a nowhere-vanishing real function algebra $A\subseteq C(X,\mathbb R)$, and a real $\varepsilon>0$.

[L1] If an indexed family of open subsets of an ambient space covers a compact subset, finitely many indexed members cover it, with the empty-set case stated separately ([[lem-compactness-of-a-subspace-is-ambient]], clause 2).

[L2] If $X$ is compact and nonempty and $g:X\to\mathbb R$ is continuous, then $g[X]$ has a maximum and a minimum ([[thm-compactness-under-continuous-maps]], clause 2).

[L3] For $a\le b$, every continuous real function on $[a,b]$ is a uniform limit of polynomials ([[cor-weierstrass-approximation-on-a-closed-interval]]).

[L4] A nowhere-vanishing real function algebra has, for every $x\in X$, some $a\in A$ with $a(x)\ne0$, and it is closed under real linear combinations and pointwise products ([[def-unital-separating-real-function-algebra-general]]).

## Proof

**Proof technique:** direct.

1.1 If $X=\varnothing$, then the unique empty function is simultaneously the zero and constant-one function and belongs to the vector subspace $A$, so the conclusion is immediate. [L4]

1.2 Assume $X\ne\varnothing$. For each $a\in A$ let $U_a:=\{x\in X:a(x)\ne0\}$; these sets are open by continuity, and they cover $X$ by the nowhere-vanishing clause in [L4]. [L4]

2.1 By [L1], finitely many $U_{a_0},\ldots,U_{a_n}$ cover $X$. The function $h:=a_0^2+\cdots+a_n^2$ lies in $A$ and satisfies $h(x)>0$ for every $x\in X$. [step 1.2, L1, L4, algebra]

3.1 By [L2], $h$ has a minimum $m$ and maximum $M$; step 2.1 gives $0<m\le M$. [step 2.1, L2]

4.1 If $m=M$, then $h$ is the positive constant $m$ and $u:=m^{-1}h\in A$ is exactly the constant-one function. [step 3.1, L4, algebra]

4.2 If $m<M$, use [L3] to choose a polynomial $p$ satisfying $|p(t)-1/t|<\varepsilon/M$ on $[m,M]$; then $u:=hp(h)$ lies in $A$, because the polynomial $t\mapsto tp(t)$ has zero constant term. [step 3.1, L3, L4, choose]

5.1 In the case of step 4.2, every $x\in X$ satisfies $|u(x)-1|=h(x)|p(h(x))-1/h(x)|<h(x)\varepsilon/M\le\varepsilon$; together with step 4.1 this proves the claim in all cases. [step 4.1, step 4.2, step 3.1, algebra] ∎
