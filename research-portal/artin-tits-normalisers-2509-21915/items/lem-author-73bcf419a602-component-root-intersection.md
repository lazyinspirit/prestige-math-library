---
id: lem-author-73bcf419a602-component-root-intersection
kind: lemma
title: Component roots intersect the complementary parabolic exactly
status: published
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-parabolic-subgroups-artin-tits-normalisers
  - def-connected-support-artin-tits-normalisers
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-parabolic-subgroups-artin-tits-normalisers: mathematical-premise
  def-connected-support-artin-tits-normalisers: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 8
---

## Statement

Use the arbitrary-rank geometric representation of [[def-coxeter-data-artin-tits-normalisers]] and the orbit definition $\Phi_L=\{w\alpha_i:w\in W_L,i\in L\}$ from [[def-parabolic-subgroups-artin-tits-normalisers]]. Let $I\subseteq\Gamma_0$, $a\in\Gamma_0\setminus I$, $K=[I,a]$, $J=K\setminus\{a\}$, $V_L=\operatorname{span}_{\mathbb R}\{\alpha_i:i\in L\}$ and $D=\Phi_{I+a}\setminus\Phi_I$, with connected-component notation from [[def-connected-support-artin-tits-normalisers]]. Vectors have finite support, even if the vertex set is infinite. Then $\Phi_K\cap\Phi_I=\Phi_J$. In particular $\Phi_K\setminus\Phi_J\subseteq D$. No rank-finiteness assumption is needed.

## Facts & Assumptions

**Given:** the diagram and reflection formula from [[def-coxeter-data-artin-tits-normalisers]], the root orbits from [[def-parabolic-subgroups-artin-tits-normalisers]], and the component $K=[I,a]$ from [[def-connected-support-artin-tits-normalisers]]. Put $L=I\setminus K$. [F1] There is no edge between $K$ and $L$; hence $B(\alpha_k,\alpha_l)=0$ and $s_k s_l=s_l s_k$ for $k\in K,l\in L$. [F2] The subspaces $V_K$ and $V_L$ have zero intersection, and every root is nonzero because it is the invertible image of a basis vector.

## Proof

**Goal:** Establish the assertion in the Statement.

**Proof technique:** direct.

1.1 The two disjoint parts of $I$ are $J$ and $L$. By [F1] every finite word in $I$ can be reordered to a word in $J$ followed by a word in $L$. Generators in $L$ act identically on $V_K$, and generators in $J$ act identically on $V_L$, by the reflection formula. Consequently the orbit under $W_I$ of a simple root indexed by $J$ is exactly its orbit under $W_J$; the orbit of a simple root indexed by $L$ stays in $V_L$. Thus $\Phi_I=\Phi_J\cup\Phi_L$, with $\Phi_J\subseteq V_K$ and $\Phi_L\subseteq V_L$. [F1, given]

2.1 Every root in $\Phi_K$ lies in $V_K$, because its generators preserve $V_K$. By [F2] and step 1.1, a root belonging also to $\Phi_I$ must lie in $\Phi_J$. Conversely $J\subseteq K\cap I$ gives $\Phi_J\subseteq\Phi_K\cap\Phi_I$ directly from the orbit definitions. This proves equality. Finally $\Phi_K\subseteq\Phi_{I+a}$, so a root in $\Phi_K\setminus\Phi_J$ is outside $\Phi_I$ by the equality and hence lies in $D$. [F2, step 1.1, given] ∎
