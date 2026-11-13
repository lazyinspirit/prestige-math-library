---
id: lem-author-73bcf419a602-connected-orbit-span
kind: lemma
title: Connected propagation spans the component
status: published
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-parabolic-subgroups-artin-tits-normalisers
  - def-connected-support-artin-tits-normalisers
  - lem-author-73bcf419a602-outside-root-invariance
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-parabolic-subgroups-artin-tits-normalisers: mathematical-premise
  def-connected-support-artin-tits-normalisers: mathematical-premise
  lem-author-73bcf419a602-outside-root-invariance: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 9
formulation_deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-parabolic-subgroups-artin-tits-normalisers
  - def-connected-support-artin-tits-normalisers
argument_deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-parabolic-subgroups-artin-tits-normalisers
  - def-connected-support-artin-tits-normalisers
  - lem-author-73bcf419a602-outside-root-invariance
---

## Statement

Use the arbitrary-rank geometric representation of [[def-coxeter-data-artin-tits-normalisers]] and the orbit definition $\Phi_L=\{w\alpha_i:w\in W_L,i\in L\}$ from [[def-parabolic-subgroups-artin-tits-normalisers]]. Let $I\subseteq\Gamma_0$, $a\in\Gamma_0\setminus I$, $K=[I,a]$, $J=K\setminus\{a\}$, $V_L=\operatorname{span}_{\mathbb R}\{\alpha_i:i\in L\}$ and $D=\Phi_{I+a}\setminus\Phi_I$, with connected-component notation from [[def-connected-support-artin-tits-normalisers]]. Vectors have finite support, even if the vertex set is infinite. Then $V_K\subseteq\operatorname{span}_{\mathbb R}D$. This assertion does not assume that $K$ or $I$ is finite.

## Facts & Assumptions

**Given:** the notation and reflection formula of [[def-coxeter-data-artin-tits-normalisers]], the root orbits of [[def-parabolic-subgroups-artin-tits-normalisers]], and $K$ as the vertices joined to $a$ by finite paths in [[def-connected-support-artin-tits-normalisers]]. [F1] The set $D$ contains $\alpha_a$ and is $W_I$-invariant by [[lem-author-73bcf419a602-outside-root-invariance]]. [F2] Across a diagram edge $i-j$, $B(\alpha_i,\alpha_j)\ne0$: it is $-\cos(\pi/m_{ij})<0$ for finite $m_{ij}\geq3$ and $-1$ for infinite $m_{ij}$.

## Proof


**Given:** the notation and reflection formula of [[def-coxeter-data-artin-tits-normalisers]], the root orbits of [[def-parabolic-subgroups-artin-tits-normalisers]], and $K$ as the vertices joined to $a$ by finite paths in [[def-connected-support-artin-tits-normalisers]]. [F1] The set $D$ contains $\alpha_a$ and is $W_I$-invariant by [[lem-author-73bcf419a602-outside-root-invariance]]. [F2] Across a diagram edge $i-j$, $B(\alpha_i,\alpha_j)\ne0$: it is $-\cos(\pi/m_{ij})<0$ for finite $m_{ij}\geq3$ and $-1$ for infinite $m_{ij}$.



**Goal:** Establish the assertion in the Statement.

**Proof technique:** direct.

1.1 Let $U=\operatorname{span}_{\mathbb R}D$. By [F1], $U$ is $W_I$-invariant and contains $\alpha_a$. Fix $v\in K$ and choose a path of least length $a=i_0,i_1,\ldots,i_r=v$. Such a path has no repeated vertex, so every $i_t$ with $t>0$ belongs to $I$. [F1, given]

2.1 Induct along this finite path. If $\alpha_{i_{t-1}}\in U$, then $s_{i_t}\alpha_{i_{t-1}}\in U$ by invariance. Subtracting gives $-2B(\alpha_{i_{t-1}},\alpha_{i_t})\alpha_{i_t}\in U$. The coefficient is nonzero by [F2], so $\alpha_{i_t}\in U$. Thus every basis vector indexed by $K$ lies in $U$, proving $V_K\subseteq U$. [F1, F2, step 1.1, algebra] ∎
