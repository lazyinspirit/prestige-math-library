---
id: lem-a-k-handle-deformation-retracts-onto-its-cocore-and-outgoing-region
kind: lemma
title: "The dual handle retraction onto the cocore, with the outgoing region carried onto the belt sphere"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-k-handle-core-cocore-attaching-region-and-belt-sphere, def-attaching-a-smooth-handle-with-corner-rounding, def-retraction-and-deformation-retract, def-euclidean-spheres-and-closed-balls]
justified_by: []
aliases: []
landmark: false
proof_strategy: explicit-formulas
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Section 6 and Section 7, PDF pp. 87-93"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
    - title: "C. T. C. Wall, Differential Topology, Sections 5.1-5.4, printed pp. 129-148 (PDF pp. 137-151)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Chapter 12 Section 5, printed pp. 489-493 (PDF pp. 501-505)"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
dependency_level: 0
---

## Statement

For the standard $n$-dimensional $k$-handle $H=D^k\times D^{n-k}$
([[def-k-handle-core-cocore-attaching-region-and-belt-sphere]],
[[def-euclidean-spheres-and-closed-balls]]) with core
$K=D^k\times\{0\}$, cocore $C=\{0\}\times D^{n-k}$, attaching region
$S^{k-1}\times D^{n-k}$, attaching sphere $S^{k-1}\times\{0\}$, outgoing region
$R=D^k\times S^{n-k-1}$ and belt sphere $B=\{0\}\times S^{n-k-1}$:

(a) The formula $H_s(x,y):=(x,(1-s)y)$ defines a strong deformation retraction
of $H$ onto the core $K$ ([[def-retraction-and-deformation-retract]]) that maps
the attaching region into itself and maps it onto the attaching sphere at
$s=1$.

(b) The formula $G_s(x,y):=((1-s)x,y)$ defines a strong deformation retraction
of $H$ onto the cocore $C$ that maps the outgoing region $R$ into itself and
maps it onto the belt sphere $B$ at $s=1$.

(c) $R\smallsetminus B$ strongly deformation retracts onto
$S^{k-1}\times S^{n-k-1}$ by the radial map $(x,y)\mapsto(x/|x|,y)$, and this
retraction fixes $S^{k-1}\times S^{n-k-1}$ pointwise.

## Facts & Assumptions

**Given:** Integers $0\le k\le n$ and the standard handle $H=D^k\times D^{n-k}$ with its core, cocore, attaching region, outgoing region and belt sphere.

[F1] The standard $n$-dimensional $k$-handle is $D^k\times D^{n-k}$, with core $D^k\times\{0\}$, cocore $\{0\}\times D^{n-k}$, attaching region $S^{k-1}\times D^{n-k}$, attaching sphere $S^{k-1}\times\{0\}$, outgoing region $D^k\times S^{n-k-1}$ and belt sphere $\{0\}\times S^{n-k-1}$; $D^0$ is a point and $S^{-1}=\varnothing$ ([[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]).

[L1] $D^j$ is the Euclidean closed unit ball and $S^{j-1}$ its boundary sphere, carrying the subspace topology of $\mathbb R^j$ ([[def-euclidean-spheres-and-closed-balls]]).

[F2] A strong deformation retraction of $X$ onto $A\subseteq X$ is a retraction $r:X\to A$ together with a homotopy $H:\operatorname{id}_X\simeq_A i\circ r$ from the identity to $i\circ r$ that fixes $A$ pointwise ([[def-retraction-and-deformation-retract]]).

[F3] The model handle is glued by a smooth embedding of the attaching region that extends over a neighbourhood of the disk factor, with the framing part of the data; there is no corner to round when $k=0$ or $k=n$ ([[def-attaching-a-smooth-handle-with-corner-rounding]]).

## Proof

**Proof technique:** explicit formulas.

1.1 For $(x,y)\in H$ and $s\in[0,1]$ put $H_s(x,y):=(x,(1-s)y)$. This map is continuous, $H_0=\operatorname{id}_H$, and $H_1(x,y)=(x,0)\in K$; moreover $H_s(x,0)=(x,0)$ for all $s$, so $K$ is fixed pointwise. Hence $H_s$ is a strong deformation retraction of $H$ onto $K$ in the sense of [F2]. Its restriction to the attaching region satisfies $H_s(S^{k-1}\times D^{n-k})=S^{k-1}\times(1-s)D^{n-k}\subseteq S^{k-1}\times D^{n-k}$, and at $s=1$ the image is $S^{k-1}\times\{0\}$, the attaching sphere. [F1, F2, given, construct]

1.2 For $(x,y)\in H$ and $s\in[0,1]$ put $G_s(x,y):=((1-s)x,y)$. This map is continuous, $G_0=\operatorname{id}_H$, and $G_1(x,y)=(0,y)\in C$; moreover $G_s(0,y)=(0,y)$ for all $s$, so $C$ is fixed pointwise and $G_s$ is a strong deformation retraction of $H$ onto the cocore $C$ by [F2]. Its restriction to the outgoing region satisfies $G_s(D^k\times S^{n-k-1})=(1-s)D^k\times S^{n-k-1}\subseteq D^k\times S^{n-k-1}=R$, and at $s=1$ the image is $\{0\}\times S^{n-k-1}=B$, the belt sphere. [F1, F2, given, construct]

1.3 The complement of the belt sphere in the outgoing region is $R\smallsetminus B=\{(x,y)\in D^k\times S^{n-k-1}:x\ne 0\}$. Define $K_s(x,y):=((1-s)x+s\,x/|x|,y)$ on $(R\smallsetminus B)\times[0,1]$; this is well defined and continuous because $x\ne 0$ on the domain and $y\in S^{n-k-1}$ is unchanged, and by [L1] the norm $|x|$ is the Euclidean norm. We have $K_0=\operatorname{id}$, $K_1(x,y)=(x/|x|,y)\in S^{k-1}\times S^{n-k-1}$, and $K_s$ fixes every point of $S^{k-1}\times S^{n-k-1}$ pointwise, because $x/|x|=x$ there. Hence $K_s$ is a strong deformation retraction of $R\smallsetminus B$ onto $S^{k-1}\times S^{n-k-1}$ in the sense of [F2]. [F1, L1, F2, given, construct]

2.1 The three formulas are explicit and continuous for all $0\le k\le n$, including the endpoint cases $k=0$ and $k=n$: at $k=0$ the attaching region $S^{-1}\times D^n$ is empty, the core is a point, and $R\smallsetminus B=\varnothing$ because $B=R$; at $k=n$ the outgoing region and belt sphere are empty while the cocore is a point. Thus (a), (b) and (c) hold as stated, and the standard model is the one glued by [F3]. [F1, F3, step 1.1, step 1.2, step 1.3] ∎

## Remarks

- **Relation to Wall's retraction.** Statement (a) is Wall's handle retraction onto the core and attaching region in the disk-factor direction (Wall, Figure 5.6), and (b) is its dual in the complementary disk-factor direction; (c) is the punctured-disk retraction $D^k\smallsetminus\{0\}\to S^{k-1}$ written in the outgoing coordinates.
- **Use.** In Milnor's proof of Lemma 7.2 the local computation is exactly (b) together with (c): the handle retracts to its cocore while the complement of the belt sphere in the outgoing region is pushed back onto the attaching boundary $S^{k-1}\times S^{n-k-1}$.
- **Choice.** All three homotopies are explicit formulas, so no choice principle is used.
