---
id: lem-one-intersection-gives-the-standard-local-cancelling-model
kind: lemma
title: "One transverse intersection gives the standard local cancelling model"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 6
deps: [def-geometric-cancelling-handle-pair, lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type, lem-transverse-complementary-spheres-have-product-charts, lem-standard-complementary-pair-fills-an-n-ball, def-attaching-a-smooth-handle-with-corner-rounding, def-k-handle-core-cocore-attaching-region-and-belt-sphere, def-tubular-neighbourhood-of-an-embedded-submanifold, thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold, prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Proof of Theorem 5.4.3, §5.4, printed pp. 146-147 (chart from Lemma 4.8.1, uniqueness of tubular neighbourhoods, both attaching images inside one disc)"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes; complete author PDF)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Cancellation Lemma 1.12 and Example 1.11, Ch. 1 §1.1, printed pp. 6-7 (isotoping the second attaching sphere to the standard position)"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $h^k,h^{k+1}$ be attached in that order to a compact manifold $W_0$, and suppose the attaching sphere $A$ of the upper handle meets the belt sphere $B$ of the lower handle transversely at exactly one point in $M=\partial_+(W_0\cup h^k)$. After isotopies of the attaching data, with the later data transported, the pair is supported over an embedded closed disc $E\subset\partial_+W_0$ and has the standard complementary form there. More precisely, writing $q=n-k$, the affected part of the **pre-handle** boundary is the rounded disk
$$E\cong (S^{k-1}\times D^q)\cup_{S^{k-1}\times D^{q-1}}(D^k\times D^{q-1}),$$
where the $D^{q-1}$ in the gluing is a hemisphere of $\partial D^q$. One hemisphere of the upper attaching sphere crosses the outgoing region of $h^k$ as $D^k\times\{X\}$, for $X\in S^{q-1}$; its other hemisphere, with its normal disk factor, is the $D^k\times D^{q-1}$ piece in $E$. A collar of $E$ with the two handles is the standard local cancelling model. The isotopies and resulting comparison are supported near the swept attaching regions. The lower attaching map belongs to $\partial_+W_0$, rather than to the middle boundary $M$.

## Facts & Assumptions

**Given:** A compact manifold $W_0$, handles $h^k$ and $h^{k+1}$ attached in that order, the middle boundary $M=\partial_+(W_0\cup h^k)$, the attaching sphere $A$ of $h^{k+1}$ and the belt sphere $B$ of $h^k$ in $M$, meeting transversely in exactly one point $P$, so that the pair is geometrically cancelling.

[F1] [[def-geometric-cancelling-handle-pair]] and [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]: a geometrically cancelling pair means $A$ and $B$ meet transversely in exactly one point in the middle boundary; $\dim A=k$, $\dim B=n-k-1$ and $\dim M=n-1$, so the two dimensions are complementary in $M$.

[F2] [[lem-transverse-complementary-spheres-have-product-charts]]: at a point $p$ where complementary-dimensional transverse embedded submanifolds meet there is a chart carrying them to complementary coordinate subspaces.

[F3] [[def-tubular-neighbourhood-of-an-embedded-submanifold]], [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]] and [[prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section]]: assume $\mathrm{AC}_\omega$; a closed embedded submanifold has a tubular neighbourhood, namely a diffeomorphism onto an ambient neighbourhood from an open neighbourhood of the zero section of its normal bundle, and the transition between two such charts is a diffeomorphism fixing the zero section. This germ isomorphism alone does not assert an ambient isotopy; the local adjustments used here are described in step 2.1.

[F4] [[def-attaching-a-smooth-handle-with-corner-rounding]]: the attaching region of a handle is glued along the attaching embedding with corners rounded; the part of the new boundary affected by an attached handle is the image of its attaching region together with the outgoing region of the handle.

[F5] [[lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type]]: assume $\mathrm{AC}_\omega$; isotopic attaching embeddings give diffeomorphic attachments, by a diffeomorphism that is the identity outside a collar of the swept attaching regions and that carries the attaching data of later handles.

[F6] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed; it is used through the tubular-neighbourhood and isotopy suppliers of [F3] and [F5].

[F7] [[lem-standard-complementary-pair-fills-an-n-ball]]: the hemisphere attachment $(S^r\times D^{d-r})\cup(D^{r+1}\times D^{d-r-1})$ is a rounded $d$-disc; step 3.1 uses $d=n-1$, $r=k-1$ when $k>0$.

## Proof

**Proof technique:** direct.

1.1 Write $L=\partial_+W_0$, $q=n-k$, and $R=D^k\times S^{q-1}$ for the lower handle's outgoing region in $M$. A small disk-fibre neighbourhood of $B=\{0\}\times S^{q-1}$ meets $A$ only near the unique crossing: the compact part of $A$ outside a crossing chart is disjoint from the compact sphere $B$. In that chart [F2] makes the crossing a single transverse disk. For $k>0$, a radial diffeotopy in the fibres of $R$, extended across its boundary into a collar in the old-boundary summand, carries the portion away from this small neighbourhood out of $R$. Concretely choose an increasing radial map with $h(0)=0$, taking the chosen small radius to radius $1$, and equal to the identity beyond radius $1+\delta$ in the extended collar; interpolate increasing maps to obtain the diffeotopy. It fixes $B$ and the region beyond that collar, but it does move points in the old-boundary collar. For $k=0$ the single crossing already means one upper attaching point on the new sphere and one in $L$. [F1, F2, F4, given, construct]

2.1 Normalize the crossing disk and its normal disk coordinates. In the product chart the disk is a graph over the transverse $D^k$ factor; interpolate its graph to the constant graph, on a smaller disk and with a cutoff on a surrounding annulus. After shrinking, the graph projections remain invertible and the adjustment is an isotopy of embeddings. Fibre contraction makes the upper attaching neighbourhood as small as needed. The corresponding normal-coordinate adjustment is obtained by rescaling its transition germ: for a transition fixing the zero section, replace the fibre variable by $tz$ and divide the output fibre variable by $t$. This extends smoothly at $t=0$ to the induced normal linear map. Choose the normal coordinates with that same linear map; after shrinking the compact disk, all these maps are embeddings by the inverse-function theorem. [F5] extends these full-dimensional attaching-region isotopies and transports the later data. Expanding the small transverse disk by the radial map of step 1.1 now makes one upper hemisphere the fibre $D^k\times\{X\}$, with its framed neighbourhood $D^k\times D^{q-1}$, where $D^{q-1}$ is a small hemisphere patch at $X\in S^{q-1}$. The other hemisphere and its neighbourhood lie in $L$ outside the lower attaching region. This is the crossing normalization in Wall's cancellation proof, printed pp. 146–147, and Lück's Cancellation Lemma, printed p. 6. [F2, F3, F4, F5, step 1.1, construct]

3.1 The lower hemisphere gives an embedded $D^k\times D^{q-1}$ in $L$, whose boundary is the part $\varphi(S^{k-1}\times D^{q-1})$ of the lower attaching data. Shrink and move the lower normal disk inside its extended disk coordinates to a small disk near $X$: the maps $y\mapsto c_t+\lambda_t y$, with $\lambda_t>0$, give the isotopy, using the stipulated extension beyond the disk boundary at the end. Transport the upper data by [F5]. The resulting lower attaching region lies in a collar of the boundary of that embedded lower-hemisphere disk. Their union, with corners rounded, is therefore a single disk $E\subset L$. In coordinates it is $(S^{k-1}\times D^q)\cup(D^k\times D^{q-1})$ glued along the chosen normal hemisphere. This is the collar-and-cap product model of the standard-pair lemma with dimensions $n-1$ and $k-1$; for $k=0$ only the $D^0\times D^{n-1}$ piece remains. [F4, F5, F7, step 2.1, construct]

4.1 In these coordinates the upper hemisphere is the fibre patch on the outgoing lower handle, and its complementary hemisphere is the disk patch in $E$. The framing is carried in the same normal coordinates throughout, so the collar of $E$ and the two handle bodies have exactly the standard complementary attachment. The argument also covers $q=1$: the normal hemisphere is $D^0$, the upper attaching sphere is a boundary component, and precisely one of the two belt points lies on it. All changes are isotopies of the framed attaching regions, supported in the crossing charts, radial collar and swept disk neighbourhoods; [F5] converts them into comparisons of the attached manifolds. [F1, F4, F5, F6, step 2.1, step 3.1] ∎
