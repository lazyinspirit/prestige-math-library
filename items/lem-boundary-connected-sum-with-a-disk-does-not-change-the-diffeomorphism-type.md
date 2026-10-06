---
id: lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type
kind: lemma
title: "Boundary connected sum with a disk does not change the diffeomorphism type"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-smooth-collar-of-a-manifold-boundary, thm-collar-neighborhood-theorem, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, def-countable-choice, thm-smooth-inverse-function-theorem-on-manifolds]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
proof_strategy: "explicit half-space straightening along a collar"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $N$ be a connected smooth $n$-manifold with
nonempty boundary and let $D\subseteq\partial N$ be an embedded closed disk.
Then the boundary connected sum $N\natural D^n$, obtained by gluing an $n$-disk
along $D$, is diffeomorphic to $N$ by a diffeomorphism equal to the identity
outside a collar neighbourhood of $D$.

## Facts & Assumptions

[F1] [[def-smooth-collar-of-a-manifold-boundary]]: A smooth collar is a smooth embedding $c:\partial M\times[0,\varepsilon)\to M$ such that $c(p,0)=p$ and whose image is an open neighbourhood of $\partial M$ in $M$. Locally one may first use a positive smooth width depending on $p$.

[F2] [[thm-collar-neighborhood-theorem]]: Assume $\mathrm{AC}_\omega$. Every smooth manifold with boundary has a smooth collar.

[F3] [[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]: If $M$ has dimension $n\ge1$, the restrictions of boundary charts to their faces give $\partial M$ the structure of a closed embedded smooth boundaryless $(n-1)$-manifold. For $n=0$, $\partial M=\varnothing$.

[F4] [[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]: A boundary chart is a homeomorphism $\varphi:U\to V\subseteq\mathbb H^n$, where $U\subseteq M$ is open and $V$ is relatively open. Two charts are compatible if each transition map is smooth in the local-extension sense. A smooth atlas is a compatible covering atlas; its smooth structure is its maximal compatible atlas.

[F5] [[thm-smooth-inverse-function-theorem-on-manifolds]]: a smooth map with invertible differential has a smooth local inverse. Apply this to the local open extensions of the full-dimensional disk parametrization.

[A1] **Model straightening.** In the half-space $\mathbb H^n=\{x_n\ge0\}$ let $\Delta=D^{n-1}\times\{0\}$ be the flat unit disk. Glue the standard $n$-disk along $\Delta$ by a diffeomorphism onto $\Delta$ and round the codimension-two corner of the resulting set. The result is diffeomorphic to $\mathbb H^n$ by a diffeomorphism equal to the identity outside a compact neighbourhood of $\Delta$: in suitable coordinates along the rounded corner the glued set is $\{(x',x_n):x_n\ge\gamma(x')\}$ for a compactly supported smooth $\gamma\le0$ with $\gamma=0$ off a neighbourhood of the disk, and $(x',x_n)\mapsto(x',x_n-\gamma(x')\rho(x_n))$ is the required straightening. Here the added disk is first represented as a sufficiently thin cap, $\rho=1$ near that cap and $\rho=0$ near the inner edge of the chosen collar, and $\|\gamma\rho'\|<1$; the normal derivative $1-\gamma\rho'$ is positive, so this fibre map is a diffeomorphism and becomes the identity at the inner edge.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Choose a collar $c:\partial N\times[0,1)\to N$. The parametrization of the embedded disk $D$ extends to a neighbourhood of the closed unit disk in $\mathbb R^{n-1}$: its differential is invertible along $D$, so the inverse function theorem gives local extensions, which agree with the disk parametrization and give an embedding after shrinking around the compact disk. Let $O\subseteq\partial N$ be such an open coordinate neighbourhood of $D$, and put $V=c(O\times[0,\varepsilon))$ for a sufficiently small $\varepsilon>0$. This open collar neighbourhood includes space around the edge of $D$ for the compactly supported model straightening. [F1, F2, F3, F4, F5, given, construct]

2.1 Identify the glued manifold $M:=N\natural D^n$ and the model of [A1]: in the collar coordinates $(x,t)\in O\times[0,\varepsilon)$ the half-tube $V$ is carried onto the standard flat-disk neighbourhood of the model half-space, the attached $n$-disk is glued along the flat disk, and the rounded corner corresponds to the rounding in the model. Hence [A1] provides a diffeomorphism $\Phi$ of $M$ onto the collar half-tube union its complement in $N$ — that is, onto $N$ — which is the identity outside a compact subset of $V$. [A1, step 1.1, construct]

3.1 The resulting diffeomorphism $N\natural D^n\to N$ is the identity outside the collar neighbourhood $V$ of $D$, as claimed. For $n=1$ the disk $D$ is a single boundary point, the glued $1$-disk is an interval attached at that point, and the one-dimensional model straightening applies verbatim; for $n=0$ there is no boundary even to state the hypothesis. The connectivity hypothesis on $N$ is not used by the argument, which is local near $D$; it is retained from the statement. [A1, step 2.1, algebra] ∎
