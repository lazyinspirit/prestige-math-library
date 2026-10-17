---
id: lem-qsm-kms-invariance
kind: lemma
title: KMS states are invariant under their dynamics
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps: [def-qsm-kms-state, lem-qsm-kms-strip-uniqueness, thm-goursat-triangle-theorem, thm-liouville-bounded-entire-function, thm-morera-triangle-theorem]
dependency_roles:
  def-qsm-kms-state: mathematical-premise
  lem-qsm-kms-strip-uniqueness: mathematical-premise
  thm-goursat-triangle-theorem: mathematical-premise
  thm-liouville-bounded-entire-function: mathematical-premise
  thm-morera-triangle-theorem: mathematical-premise
dependency_level: 9
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4, KMS discussion, pp. 74–75
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §7, pp. 13–14
      url: https://arxiv.org/pdf/math-ph/0107009
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $\omega$ be a $\beta$-KMS state for a strongly continuous group $\alpha_t$ as in [[def-qsm-kms-state]], with $b=\beta\hbar>0$. Then

$$\omega(\alpha_t(B))=\omega(B)\qquad(B\in\mathcal A,\ t\in\mathbb R).$$

Thus invariance is a consequence of the full bounded-strip KMS condition; it is not an extra clause in the definition.

## Facts & Assumptions

**Given:** A unital C$^*$-algebra $\mathcal A$, a strongly continuous one-parameter group $\alpha_t$ of unital $*$-automorphisms, $\beta>0$, $\hbar>0$, and a $\beta$-KMS state $\omega$.

[F1] [[def-qsm-kms-state]]: for every $A,B\in\mathcal A$ there is a bounded function $F_{A,B}$ continuous on $S_b=\{z:0\le\operatorname{Im}z\le b\}$, holomorphic inside, with lower boundary $\omega(A\alpha_t(B))$ and upper boundary $\omega(\alpha_t(B)A)$.

[F2] [[thm-goursat-triangle-theorem]]: a holomorphic scalar function on an open set has zero integral around every filled triangle contained in that set.

[F3] [[thm-morera-triangle-theorem]]: a continuous scalar function on an open set is holomorphic if its integral around every contained filled triangle is zero.

[F4] [[thm-liouville-bounded-entire-function]]: every bounded entire scalar function on $\mathbb C$ is constant.

## Proof

**Proof technique:** use the KMS condition with the identity observable, glue copies of its strip function periodically, and prove analyticity across the seams by Morera's theorem.

**Given:** [F1]–[F4], $b=\beta\hbar>0$, and an arbitrary $B\in\mathcal A$.

1.1 Let $F:=F_{I,B}$ be the strip function from [F1]. Since every $\alpha_t$ is unital, its two boundary values coincide: $F(t)=\omega(\alpha_t(B))=F(t+ib)$ for every $t\in\mathbb R$. Denote this common continuous function of $t$ by $g(t)$. [F1, given]

2.1 For each integer $k$, define $\widetilde F(t+iy):=F(t+i(y-kb))$ when $kb\le y\le(k+1)b$. At a shared seam the lower and upper definitions agree by step 1.1, so the definition is single-valued. It is continuous on each closed translated strip and across every seam, is $ib$-periodic, and is bounded on $\mathbb C$ by the bound for $F$ on $S_b$. It is holomorphic away from the horizontal seams because there it is a translate of $F$ on its open strip. [F1, step 1.1, construct]

3.1 Fix a point on a seam and choose a disk about it that meets no other seam. Let $T$ be any filled triangle in this disk. If $T$ crosses the seam, cut it along that horizontal line; the resulting at most two polygons can each be triangulated by joining one vertex to the other vertices. Every resulting small triangle lies in one of the two closed half-disks. If a small triangle touches the seam, translate it a distance $\epsilon>0$ into that half's open strip; for all sufficiently small $\epsilon$, its translate remains inside that strip and the translated contour integral is zero by [F2]. Uniform continuity of $\widetilde F$ on a compact neighborhood of the original contour implies the translated integrals converge to the original integral as $\epsilon\downarrow0$. Hence each small triangle has zero integral. Summing their boundary integrals cancels shared edges with opposite orientations and yields $\int_{\partial T}\widetilde F(z)\,dz=0$. Triangles wholly on one side also have zero integral by [F2]. [F2, step 2.1, construct]

4.1 Step 3.1 applies to every triangle in the disk. The function $\widetilde F$ is continuous there by step 2.1, so [F3] makes it holomorphic across the seam in that disk. Away from seams it was already holomorphic by step 2.1; since the point on the seam was arbitrary, $\widetilde F$ is entire on $\mathbb C$. [F3, step 2.1, step 3.1]

5.1 Step 2.1 gives a global bound on $\widetilde F$, so [F4] makes it constant. Its restriction to the real axis is $g(t)=\omega(\alpha_t(B))$ by step 1.1, and at $t=0$ this is $\omega(B)$. Therefore $\omega(\alpha_t(B))=\omega(B)$ for every real $t$. Since $B$ was arbitrary, $\omega$ is invariant. [F4, step 1.1, step 2.1, step 4.1] ∎
## Remarks

The strip tiling below is explanatory only. Each adjacent strip is the translate by $ib$; the equality of edge values, not the drawing, is what makes the periodic extension single-valued.

```tikz
\begin{tikzpicture}[scale=0.85]
  \draw[->] (-3.5,0) -- (3.5,0) node[right] {$\operatorname{Re}z$};
  \draw[->] (-3,0) -- (-3,3.5) node[above] {$\operatorname{Im}z$};
  \draw (-3,0) rectangle (3,1);
  \draw (-3,1) rectangle (3,2);
  \draw (-3,2) rectangle (3,3);
  \node at (0,0.5) {$F(z)$};
  \node at (0,1.5) {$F(z-ib)$};
  \node at (0,2.5) {$F(z-2ib)$};
  \node[left] at (-3,1) {$g(t)$};
  \node[left] at (-3,2) {$g(t)$};
  \node[right] at (3.2,1) {$ib$};
  \node[right] at (3.2,2) {$2ib$};
\end{tikzpicture}
```
