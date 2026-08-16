---
id: thm-real-stone-weierstrass-dichotomy-for-separating-algebras
kind: theorem
title: "A separating real function algebra is dense or its closure consists exactly of the functions vanishing at one point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-unital-separating-real-function-algebra-general, lem-nowhere-vanishing-algebras-approximate-the-constant-one, thm-real-stone-weierstrass-general, def-topology-of-uniform-convergence]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Carlen, Notes on Topology and the Stone-Weierstrass Theorem, Theorem 1.26"
      url: "https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a compact Hausdorff space and let $A\subseteq C(X,\mathbb R)$ be a point-separating real function algebra, not necessarily unital. Exactly one of the following descriptions applies when $X$ is nonempty:

1. $A$ has no common zero, and its uniform closure is $C(X,\mathbb R)$;
2. there is a unique $x_0\in X$ at which every member of $A$ vanishes, and the uniform closure of $A$ is exactly
$$I_{x_0}:=\{f\in C(X,\mathbb R):f(x_0)=0\}.$$

If $X=\varnothing$, the first conclusion holds: $A=C(X,\mathbb R)$.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$ and a point-separating real function algebra $A\subseteq C(X,\mathbb R)$.

[L1] A real function algebra is a real vector subspace closed under pointwise multiplication; it is point-separating when each distinct pair is distinguished by one member, and nowhere-vanishing when each point has some member nonzero there ([[def-unital-separating-real-function-algebra-general]]).

[L2] A nowhere-vanishing real function algebra on a compact space uniformly approximates the constant-one function ([[lem-nowhere-vanishing-algebras-approximate-the-constant-one]]).

[L3] Every unital point-separating real function algebra on a compact Hausdorff space is uniformly dense in $C(X,\mathbb R)$ ([[thm-real-stone-weierstrass-general]]).

[L4] On nonempty $X$, the topology of uniform convergence on $C(X,\mathbb R)$ is the metric topology of the restricted uniform metric ([[def-topology-of-uniform-convergence]]).

## Proof

**Proof technique:** direct.

1.1 If $X=\varnothing$, then $C(X,\mathbb R)$ contains only the empty function, which is the zero element of the vector subspace $A$, so the first conclusion holds. [L1]

1.2 Assume $X\ne\varnothing$ and let $Z:=\{x\in X:a(x)=0\text{ for every }a\in A\}$. Point separation implies that $Z$ has at most one element, because two distinct members of $Z$ could not be distinguished by any $a\in A$. [L1]

1.3 Let $A^+:=A+\mathbb R1=\{a+c1:a\in A,\ c\in\mathbb R\}$, where $1$ is the constant-one function, itself continuous because the preimage of every open set under it is $\varnothing$ or $X$. Sums and real multiples of such members again have this form, and $(a+c1)(b+d1)=(ab+da+cb)+cd\,1$, so $A^+$ is a real function algebra in the sense of [L1]; it is unital by construction and point-separating because it contains $A$. Hence [L3] makes $A^+$ uniformly dense in $C(X,\mathbb R)$. [L1, L3, algebra]

2.1 If $Z=\varnothing$, then $A$ is nowhere-vanishing, so [L2] says that it uniformly approximates the constant-one function. [step 1.2, L1, L2]

2.2 Suppose instead $Z=\{x_0\}$, so that step 1.2 makes $x_0$ the unique point at which every member of $A$ vanishes. For $f\in I_{x_0}$ and $\varepsilon>0$, use step 1.3 to choose $a+c1\in A^+$ within $\varepsilon/2$ of $f$. Evaluating at $x_0$, where $a(x_0)=0$ and $f(x_0)=0$, gives $|c|=|a(x_0)+c-f(x_0)|<\varepsilon/2$, so $|a(x)-f(x)|\le|a(x)+c-f(x)|+|c|<\varepsilon$ for every $x$; hence $I_{x_0}\subseteq\overline A$. [step 1.2, step 1.3, L4, choose, algebra]

2.3 Conversely, still in the case $Z=\{x_0\}$, if $f\in\overline A$ then for every $\varepsilon>0$ some $a\in A$ satisfies $|f(x_0)-a(x_0)|<\varepsilon$; since $a(x_0)=0$, this forces $f(x_0)=0$, so $\overline A\subseteq I_{x_0}$. [step 1.2, L4]

3.1 Suppose $Z=\varnothing$. Given $f\in C(X,\mathbb R)$ and $\varepsilon>0$, use the density in step 1.3 to choose $a+c1\in A^+$ within $\varepsilon/2$ of $f$, then use step 2.1 to choose $u\in A$ within $\varepsilon/(2(|c|+1))$ of $1$; the member $a+cu\in A$ satisfies $|a+cu-f|\le|a+c1-f|+|c||u-1|<\varepsilon$ everywhere, so the uniform closure of $A$ is all of $C(X,\mathbb R)$. [step 2.1, step 1.3, L1, L4, choose, algebra]

4.1 The alternatives $Z=\varnothing$ and $Z=\{x_0\}$ exhaust step 1.2; step 3.1 gives the full closure in the first case, while steps 2.2 and 2.3 give exactly $I_{x_0}$ in the second. [step 1.2, step 3.1, step 2.2, step 2.3] ∎
