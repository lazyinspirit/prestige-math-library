---
id: "lem-cech-differential-squares-zero"
kind: "lemma"
title: "The Čech differential squares to zero"
status: draft
origin: pipeline
deps: [def-cech-cochain-complex-open-cover, def-section-restriction-and-global-section, lem-sheaf-section-over-empty-set-terminal]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
    - title: "Jiahui Gao and Shuwu Zhang, Lectures on Algebraic Geometry"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Statement

Let $X$ be a topological space, $\mathcal F$ a sheaf of abelian groups on $X$
and $\mathcal U=(U_i)_{i\in I}$ an open cover indexed by a linearly ordered set
$I$, with ordered Čech cochains $C^p(\mathcal U,\mathcal F)$ as in
[[def-cech-cochain-complex-open-cover]]. Then for every $p\in\mathbb Z$
$$\delta^{p+1}\circ\delta^p=0,$$
so that $\bigl(C^\bullet(\mathcal U,\mathcal F),\delta^\bullet\bigr)$ is a
cochain complex.

## Facts & Assumptions

[F1] For $s\in C^p(\mathcal U,\mathcal F)$ and an increasing $(p+2)$-tuple the differential is $(\delta^p s)_{i_0\cdots i_{p+1}}=\sum_{j=0}^{p+1}(-1)^j s_{i_0\cdots\widehat{i_j}\cdots i_{p+1}}|_{U_{i_0}\cap\cdots\cap U_{i_{p+1}}}$, a sum of restrictions inside the single group $\mathcal F(U_{i_0}\cap\cdots\cap U_{i_{p+1}})$ ([[def-cech-cochain-complex-open-cover]]).

[F2] Restrictions of a section are compatible: for open $W\subseteq V\subseteq U$ and $s\in\mathcal F(U)$ one has $(s|_V)|_W=s|_W$ ([[def-section-restriction-and-global-section]]).

[F3] An intersection factor over an empty intersection is the zero group $\mathcal F(\varnothing)=0$ ([[lem-sheaf-section-over-empty-set-terminal]]), so every cochain component indexed by an empty intersection is zero.

## Proof

**Given:** A topological space $X$, a sheaf of abelian groups $\mathcal F$, a linearly ordered open cover $\mathcal U$, a degree $p\in\mathbb Z$ and a $p$-cochain $s\in C^p(\mathcal U,\mathcal F)$.

1.1 First take $p\ge0$. Fix an increasing $(p+3)$-tuple $i_0<\cdots<i_{p+2}$, which indexes a component of $C^{p+2}$, the target of $\delta^{p+1}\delta^p$. If no such tuple exists, then $C^{p+2}=0$ and the identity is vacuous. If the full intersection is empty, its section group is zero by [F3]. Otherwise the component $(\delta^{p+1}\delta^p s)_{i_0\cdots i_{p+2}}$ is computed in the single abelian group $\mathcal F(U_{i_0}\cap\cdots\cap U_{i_{p+2}})$. [F1, F3]

1.2 Applying [F1] twice gives
$$ (\delta^{p+1}\delta^p s)_{i_0\cdots i_{p+2}}=\sum_{j=0}^{p+2}(-1)^j(\delta^p s)_{i_0\cdots\widehat{i_j}\cdots i_{p+2}}\big|_{U_{i_0}\cap\cdots\cap U_{i_{p+2}}}. $$
Expanding each inner differential produces terms indexed by ordered pairs of distinct positions $j,k\in\{0,\ldots,p+2\}$; each is the restriction of the $p$-cochain component $s_{i_0\cdots\widehat{i_j}\cdots\widehat{i_k}\cdots i_{p+2}}$, whose tuple has $p+1$ indices. The coefficient for omitting $i_j$ first and then $i_k$ is $(-1)^{j+k-1}$ when $j<k$, and $(-1)^{j+k}$ when $j>k$. Compatibility of restrictions [F2] places all terms in the section group of the full intersection. [F1, F2, step 1.1]

2.1 For $j<k$, pair the term omitting $i_j$ then $i_k$ with the term omitting $i_k$ then $i_j$. By [F2] these are restrictions of the same $p$-cochain component to the full intersection, while their coefficients $(-1)^{j+k-1}$ and $(-1)^{j+k}$ sum to zero. Every ordered pair occurs in exactly one such pair. Thus every component of $\delta^{p+1}\delta^p s$ vanishes. [F1, F2, F3, step 1.2]

3.1 The tuple was arbitrary, so step 2.1 proves the identity for $p\ge0$. For $p<0$, the convention $C^p=0$ and $\delta^p=0$ makes the composite zero. Hence $\delta^{p+1}\circ\delta^p=0$ in every degree, and the Čech cochains form a cochain complex. [step 2.1, given] ∎
