---
id: thm-closed-real-function-algebras-are-function-spaces-on-their-quotients
kind: theorem
title: 'A closed unital real function algebra is $C(Y,\mathbb R)$ on its indistinguishability quotient'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-function-algebra-indistinguishability-quotient, thm-compactness-under-continuous-maps, thm-real-stone-weierstrass-general, def-quotient-topology, def-hausdorff-space, lem-real-line-is-a-metric-space, thm-metric-hausdorff-separation, lem-uniform-metric-on-a-function-space]
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
    - title: "J. M. Erdman, A Companion to Real Analysis, Theorem 21.2.15"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a compact Hausdorff space and let $A\subseteq C(X,\mathbb R)$ be a uniformly closed unital real function algebra. Let $Y_A=X/{\sim_A}$ be its indistinguishability quotient and $q_A:X\to Y_A$ the canonical projection ([[def-function-algebra-indistinguishability-quotient]]). Then $Y_A$ is compact Hausdorff, every $f\in A$ descends uniquely to a continuous $\widetilde f\in C(Y_A,\mathbb R)$ with $f=\widetilde f\circ q_A$, and
$$A\longrightarrow C(Y_A,\mathbb R),\qquad f\longmapsto\widetilde f,$$
is a unital algebra isomorphism. When $X$ is nonempty it is also isometric for the uniform metric, which [[lem-uniform-metric-on-a-function-space]] defines only on a nonempty domain. Thus $A$ is canonically the full continuous real function algebra on the quotient whose points it separates.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$, a uniformly closed unital real function algebra $A\subseteq C(X,\mathbb R)$, its indistinguishability quotient $Y_A$, and the canonical surjection $q_A:X\to Y_A$.

[L1] The relation $x\sim_A y$ means $f(x)=f(y)$ for every $f\in A$, and $Y_A=X/{\sim_A}$ carries the quotient topology of $q_A$ ([[def-function-algebra-indistinguishability-quotient]]).

[L2] For a quotient map $q:X\to Y$, a set $V\subseteq Y$ is open exactly when $q^{-1}[V]$ is open in $X$ ([[def-quotient-topology]]).

[L3] If $f:X\to Y$ is continuous and $X$ is compact, then $f[X]$ is a compact subset of $Y$ ([[thm-compactness-under-continuous-maps]], clause 1).

[L4] Every unital point-separating real function algebra on a compact Hausdorff space is uniformly dense in the full continuous real function space ([[thm-real-stone-weierstrass-general]]).

[L5] A topological space is Hausdorff when any two distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

[L6] The function $d_{\mathbb R}(s,t)=|s-t|$ is a metric on $\mathbb R$, and its metric topology is the usual topology ([[lem-real-line-is-a-metric-space]]).

[L7] In every metric space, distinct points have disjoint open balls; hence every metric space is Hausdorff ([[thm-metric-hausdorff-separation]]).

[L8] For a **nonempty** set $X$ and a metric space $(Y,d)$, the uniform metric on $Y^X$ is $\bar\rho(f,g)=\sup_{x\in X}\min\{d(f(x),g(x)),1\}$ ([[lem-uniform-metric-on-a-function-space]]).

## Proof

**Proof technique:** direct.

1.1 For $f\in A$, [L1] makes $f$ constant on each fibre of $q_A$, so there is a unique function $\widetilde f:Y_A\to\mathbb R$ satisfying $f=\widetilde f\circ q_A$. [L1, given]

1.2 The quotient map $q_A$ is continuous and surjective by [L2], so [L3] makes $Y_A=q_A[X]$ compact. [L2, L3]

2.1 For every open $U\subseteq\mathbb R$, one has $q_A^{-1}[\widetilde f^{-1}[U]]=f^{-1}[U]$, which is open because $f$ is continuous; [L2] therefore makes $\widetilde f$ continuous. [step 1.1, L2]

2.2 The descent map is an injective unital algebra homomorphism, because descent respects the pointwise operations and $f=\widetilde f\circ q_A$ determines $\widetilde f$ on the surjective image. When $X$ is nonempty it is moreover isometric: $q_A$ is onto, so the two families of values coincide and $\sup_{x\in X}|g(q_A(x))-h(q_A(x))|=\sup_{y\in Y_A}|g(y)-h(y)|$. For $X=\varnothing$ both function spaces have the unique empty function as their only member, so the map is a bijection; no isometry is asserted there, since [L8] defines the uniform metric only on a nonempty domain. [step 1.1, L8, algebra]

3.1 If $[x]_A\ne[y]_A$, then [L1] supplies $f\in A$ with $f(x)\ne f(y)$. By [L6] and [L7], the distinct real values $\widetilde f([x]_A)$ and $\widetilde f([y]_A)$ have disjoint open neighbourhoods; their inverse images under the continuous $\widetilde f$ are disjoint open neighbourhoods of the two classes, so $Y_A$ is Hausdorff by [L5]. [L1, step 2.1, L5, L6, L7]

3.2 The descended family $\widetilde A:=\{\widetilde f:f\in A\}$ is a unital real function algebra because descent respects the pointwise operations, and it separates points by the definition of $\sim_A$ in [L1]. [step 1.1, step 2.1, L1, algebra]

4.1 Since $Y_A$ is compact Hausdorff by steps 1.2 and 3.1, [L4] makes $\widetilde A$ uniformly dense in $C(Y_A,\mathbb R)$. [step 1.2, step 3.1, step 3.2, L4]

5.1 For $g\in C(Y_A,\mathbb R)$ and $\varepsilon>0$, step 4.1 supplies $f\in A$ with $|\widetilde f(y)-g(y)|<\varepsilon$ for every $y\in Y_A$; since $f=\widetilde f\circ q_A$, the same bound reads $|f(x)-g(q_A(x))|<\varepsilon$ for every $x\in X$, so $g\circ q_A$ is uniformly approximable by members of $A$. As $A$ is uniformly closed, $g\circ q_A\in A$, and its unique descent in step 1.1 is $g$ because $q_A$ is surjective. Hence the descent map is surjective, and with step 2.2 it is the claimed unital algebra isomorphism, isometric whenever $X\ne\varnothing$. [step 1.1, step 4.1, step 2.2, given] ∎
