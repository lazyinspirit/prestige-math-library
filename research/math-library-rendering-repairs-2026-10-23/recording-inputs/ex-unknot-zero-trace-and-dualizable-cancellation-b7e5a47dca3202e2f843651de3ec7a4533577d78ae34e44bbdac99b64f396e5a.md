---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-unknot-zero-trace-and-dualizable-cancellation.json
  precheck: pass
id: ex-unknot-zero-trace-and-dualizable-cancellation
kind: example
title: "The unknot zero-trace and a dualizable cancellation diagram"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-smooth-zero-trace
  - def-dualizable-handle-link
  - thm-knot-slice-iff-zero-trace-embeds-in-s-four
  - def-countable-choice
  - thm-handle-cancellation
  - def-handle-slide-of-one-k-handle-over-another
  - lem-handle-slides-preserve-the-relative-diffeomorphism-type
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://arxiv.org/pdf/1808.02923"
      locator: "Definition 1.2 and the dualizable-link cancellation in Theorem 3.1, §3, arXiv v1 PDF p. 4"
    - title: "Jennifer Hom, Getting a handle on the Conway knot"
      url: "https://arxiv.org/pdf/2107.09171"
      locator: "§5, product handles and the framing convention; §7, trace embeddings"

---

## Example

Assume countable choice. Let $U$ be the standard unknot. Its zero-trace is
diffeomorphic to $S^2\times D^2$ and embeds in the standard $S^4$ as a tubular
neighborhood of an unknotted $S^2$. It also has the following dualizable-link
description: take a dotted unknot $R$ and two zero-framed meridian circles
$B,G$ at distinct points of $R$, with their normal spanning disks disjoint.
Then $B\cup R$ and $G\cup R$ are meridional pairs, $\operatorname{lk}(B,G)=0$,
and cancelling either meridional $1$–$2$ pair leaves the zero-framed unknot
trace.

## Example references

[Piccirillo, Definition 1.2 and Theorem 3.1](https://arxiv.org/pdf/1808.02923)

[Hom, §§5 and 7, handles and trace embeddings](https://arxiv.org/pdf/2107.09171)

## Facts & Assumptions

**Given:** Countable choice, the standard unknot $U$, and the framed link described in the Example.

[A1] Countable choice, written $\mathrm{AC}_\omega$, is [[def-countable-choice]].

[F1] [[def-smooth-zero-trace]]: $X_0(U)$ is obtained by attaching a single zero-framed $2$-handle to $B^4$ along $U$.

[F2] [[def-dualizable-handle-link]]: a dotted $R$ represents a $1$-handle, and the meridional sublinks and zero mutual linking are the dualizability conditions.

[F3] [[thm-handle-cancellation]]: a $1$-handle and $2$-handle with one transverse attaching/belt-sphere intersection cancel, transporting remaining attaching data.

[F4] [[thm-knot-slice-iff-zero-trace-embeds-in-s-four]]: a smooth slice disk for $U$ gives a smooth embedding of $X_0(U)$ in $S^4$.

[F5] [[def-handle-slide-of-one-k-handle-over-another]] and [[lem-handle-slides-preserve-the-relative-diffeomorphism-type]]: a framed band sum with a signed framed parallel is an allowed $2$-handle slide and preserves the diffeomorphism type, carrying the other attaching data along.

## Proof

**Proof technique:** direct.

1.1 The standard spanning disk for $U$ in $B^4$ is a smooth proper slice disk. By [F4], its zero-trace embeds smoothly in $S^4$. [A1, F4, given, construct]

1.2 Write the standard $0$-handle as the rounded product $D^2\times D^2$, with $U=\partial D^2\times\{0\}$. Its product attaching region is $\partial D^2\times D^2$. A section pushoff $\partial D^2\times\{z\}$ for $z\in\partial D^2$ bounds $D^2\times\{z\}$ in the other boundary face, so the product framing is the zero framing of [F1]. Attaching the second product $D^2\times D^2$ by this framing glues the two first-factor disks along their boundaries without twisting the second factor. After rounding, the result is $(D^2\cup_{S^1}D^2)\times D^2\cong S^2\times D^2$. [F1, construct, algebra]

1.3 Each of $B$ and $G$ bounds its chosen normal disk meeting the core $R$ once, so both indicated sublinks are a knot and its meridian. The disks are disjoint, so $B$ and $G$ have zero linking number. Their framings are zero by the stated preferred-longitude pushoffs. Thus $(B,G,R)$ satisfies [F2]. [F1, F2, given, construct]

2.1 In the round model $S^4\subset\mathbb R^5$, take the standard equatorial sphere $S^2=\{(x_1,x_2,x_3,0,0):x_1^2+x_2^2+x_3^2=1\}$. The constant vectors $e_4,e_5$ are tangent to $S^4$ at every point of this sphere and orthogonal to its tangent plane, so they form its normal frame. Explicitly, for small $v=(v_1,v_2)\in D^2$, the map $(x,v)\mapsto(\sqrt{1-\lVert v\rVert^2}\,x,v_1,v_2)$ is a product tubular embedding. Its image is an unknotted-sphere neighborhood diffeomorphic to $S^2\times D^2$, hence gives the stated embedding of $X_0(U)$. [step 1.2, construct]

3.1 Put $R$ in its standard planar position, with spanning disk $D_R$, and carry the two small normal meridians along it. Along an arc of $R$ between their base points, the normal circles sweep a product annulus. Replace its $B$ boundary by a close zero-framed parallel $B_f$ toward $G$, so the annulus misses the retained $B$. The annulus meets $D_R$ in its inward longitudinal arc. Take a narrow strip about that arc joining its two boundary circles. Slide $G$ over the oppositely oriented $B_f$ along this strip, with the product framing, as permitted by [F5]. The new circle bounds the disk obtained by cutting the annulus open along the strip; push its boundary slightly to round the band seams. This disk misses $D_R\cup B\cup R$, and its disk framing is the slide framing: the two old zero framings are the product annulus framings at its ends, and the product strip adds no twist. Thus it and its framed boundary can be kept outside a sufficiently thin cancellation neighborhood. Now [F3] cancels $(R,B)$ using the single geometric intersection, leaving this disk-bounding zero-framed unknot on the $4$-ball. By [F1] the remaining attachment is $X_0(U)$. Interchanging $B,G$ gives the other cancellation. This explicitly transports the remaining attaching data; the original normal disk meeting $R$ is not used as a disk disjoint from the cancellation region. [A1, F1, F2, F3, F5, step 1.3, construct] ∎


## Diagram

```tikz
\begin{tikzpicture}[node distance=2.5cm,>=stealth]
  \node (x) {$B^4\cup_R h^1\cup_B h^2_0\cup_G h^2_0$};
  \node (g) [below left of=x] {$B^4\cup_U h^2_0$};
  \node (b) [below right of=x] {$B^4\cup_U h^2_0$};
  \draw[->] (x) -- node[left,align=center] {slide $G$ over $B$;\\cancel $(R,B)$} (g);
  \draw[->] (x) -- node[right,align=center] {slide $B$ over $G$;\\cancel $(R,G)$} (b);
\end{tikzpicture}
```

The sketch shows handle incidence only: dotted $R$ denotes the $1$-handle and subscript $0$ denotes zero framing. Each slide produces the disk-bounding remaining circle before the indicated single-intersection cancellation; the proof is independent of the sketch.

