---
id: thm-stable-stiefel-space-is-contractible
kind: theorem
title: Stable Stiefel space is contractible
status: published
origin: pipeline
deps: [def-stiefel-space-grassmannian-and-tautological-bundle]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "MIT 18.906 notes, Lecture 21"
      url: https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Stable Stiefel contractibility, printed pp.69–72; the item gives an explicit coordinate contraction"
    - title: "Hatcher, Vector Bundles & K-Theory, §1.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Infinite Stiefel space and Grassmannian model, printed pp.28–31"
    - title: "Franklin and Thomas, A Survey of k-omega Spaces"
      url: https://topology.nipissingu.ca/tp/reprints/v02/tp02105.pdf
      locator: "Definition on printed p.111 and finite-product Property 4 on printed p.113"
---

## Statement

For $\mathbb F=\mathbb R$ or $\mathbb C$ and fixed $n\geq0$, the stable
Stiefel space $V_n(\mathbb F^\infty)$ is contractible. For $n=0$ it is
already a point. For $n>0$ there is an explicit contraction that first moves
every frame to odd coordinates and then rotates it to a fixed frame in the
even coordinates. The odd- and even-coordinate embeddings are each homotopic
to the identity through the same Gram-normalized injective linear paths.

## Facts & Assumptions

**Given:** $\mathbb F\in\{\mathbb R,\mathbb C\}$ and fixed $n\geq0$.

[F1] Stable Stiefel space is the weak direct limit of its finite stages, whose
points are orthonormal $n$-frames
([[def-stiefel-space-grassmannian-and-tautological-bundle]]).

[F2] Franklin and Thomas, *Topology Proceedings* 2 (1977), printed pp.111 and
113, define a $k_\omega$-decomposition as an increasing compact-Hausdorff
exhaustion with the weak topology and state in Property 4 that products of two
such decompositions have the weak topology of the stagewise products. In
particular, product with the compact interval is tested on finite stages.

## Proof

**Proof technique:** direct.

1.1 The case $n=0$ is the one-point space by [F1]. Suppose $n>0$. Let $O(e_r)=e_{2r-1}$ and $P(e_r)=e_{2r}$. For $Q\in\{O,P\}$ put $L_s^Q=(1-s)I+sQ$. Every $L_s^Q$ is injective. For $s>0$ and a nonzero finite vector whose largest nonzero coordinate is $r$, coordinate $2r$ of $L_s^Pv$ is $s v_r\ne0$. For $Q=O$ and $r>1$, coordinate $2r-1$ is $s v_r\ne0$, while for $r=1$ coordinate $1$ is $v_1$. The case $s=0$ is immediate. [F1, algebra]

2.1 If $u=(u_1,\ldots,u_n)$ is a frame, injectivity of $L_s^Q$ makes $L_s^Qu_1,\ldots,L_s^Qu_n$ independent. Writing their column matrix as $A_s^Q$, the Gram-normalized matrix $A_s^Q((A_s^Q)^*A_s^Q)^{-1/2}$ is an orthonormal frame and varies continuously in $(u,s)$ because positive-definite finite matrices have continuous inverse square roots. For each $Q\in\{O,P\}$ this homotopes $u$ to $Q(u)$, since $L_0^Q=I$ and $Q$ is an isometry. [step 1.1, algebra]

3.1 Let $E=(e_2,e_4,\ldots,e_{2n})$. The vectors of $O(u)$ occupy odd coordinates and are orthogonal to the vectors of $E$. Therefore, for $0\leq\theta\leq\pi/2$, the columns $\cos\theta\,O(u_i)+\sin\theta\,e_{2i}$ are orthonormal: their pairings are $(\cos^2\theta+\sin^2\theta)\delta_{ij}$. They give a homotopy from $O(u)$ to the constant frame $E$. [step 2.1, algebra]

4.1 Each finite Stiefel stage is compact Hausdorff because it is a closed subspace of a finite product of unit spheres, and its coordinate inclusion into the next stage is closed. Thus [F1] is a $k_\omega$-decomposition. By [F2], $V_n(\mathbb F^\infty)\times I$ has the weak topology tested on $V_n(\mathbb F^N)\times I$. On that product stage, the $O$ and $P$ homotopies in step 2.1 land respectively in $V_n(\mathbb F^{2N-1})$ and $V_n(\mathbb F^{2N})$, while step 3.1 lands in a finite stage containing also the first $2n$ coordinates. The compatible stagewise formulas are continuous, so [F2] proves ordinary continuity of both parity homotopies and of their concatenation from the identity to the constant frame $E$. This is the required contraction and uses no choice principle. [F1, F2, step 2.1, step 3.1] ∎
