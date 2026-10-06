---
id: lem-group-ring-modification-lemma-for-embedded-spheres
kind: lemma
title: "The group-ring modification lemma for embedded spheres"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 9
deps: ["def-based-handle-chain-complex-over-the-fundamental-group-ring", "def-group-ring", "lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation", "prop-relative-handle-chain-complex-of-a-cobordism", "lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers", "lem-embedded-bands-joining-two-framed-spheres-exist", "lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type", "def-handle-slide-of-one-k-handle-over-another", "def-smooth-embedding", "def-countable-choice", "thm-handle-duality-from-negating-a-morse-function", "thm-seifert-van-kampen", "lem-metastable-embedding-for-maps-from-a-compact-manifold", "thm-parametric-transversality", "thm-transverse-preimage-theorem"]
provenance:
  statement: literature-derived
  proof: literature-derived
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 1 §1.3, Lemma 1.23 and its proof, printed pp. 15--16"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Corollary 7.30, printed pp. 160--161; PDF pages 168, 169"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W$ be a nonempty connected compact smooth $(n+1)$-manifold with a finite handle presentation relative to $M_0$, all of whose indices are at least $q$, where $2\le q\le n-2$. Write $W_q$ for the trace through the $q$-handles and $N^\circ\subset\partial_1W_q$ for the complement of the attaching tubes of the $(q+1)$-handles. Put $R=\mathbb Z[\pi_1(W)]$. Let $f:S^q\hookrightarrow N^\circ$ be an embedded oriented sphere, choose a lift, and choose $x_1,\ldots,x_r\in R$, one for each $(q+1)$-handle. There is an embedded sphere $g:S^q\hookrightarrow N^\circ$, isotopic to $f$ in $\partial_1W_{q+1}$, with a compatible lift such that
$$[\widetilde g]=[\widetilde f]+\sum_{j=1}^r d_{q+1}[\varphi_j]\cdot x_j\quad\text{in }C_q^{\mathrm h}(W,M_0).$$
The rank of $C_q^{\mathrm h}$ is the number of $q$-handles, not necessarily $r$. If a normal framing of $f$ is supplied, the construction gives a framing of $g$ carried to that of $f$ by the higher-level isotopy. Integer coefficients recover the integer modification construction.

## Facts & Assumptions

**Given:** The connected handle presentation, the embedded sphere and its chosen lift, and the finite list of coefficients in the statement.

[F1] The ambient-cover handle complex is a right group-ring complex with one generator per handle; $d[h]=\sum_{h'}[h']a_{h'h}$, where each coefficient is the signed count in the corresponding lifted belt. [[def-based-handle-chain-complex-over-the-fundamental-group-ring]], [[def-group-ring]].

[F2] Reading the trace backwards gives handles of index at least $n+1-q\ge3$; remaining forward handles have index at least $q+1\ge3$. These attachments preserve fundamental groups by van Kampen. [[thm-handle-duality-from-negating-a-morse-function]], [[thm-seifert-van-kampen]].

[F3] Compact framed sphere germs in codimension at least two can be joined by framed bands. Relative embedding approximation makes a prescribed arc homotopy class embedded in dimension $n\ge4$; relative transversality avoids finitely many spheres of codimension at least two. [[lem-embedded-bands-joining-two-framed-spheres-exist]], [[lem-metastable-embedding-for-maps-from-a-compact-manifold]], [[thm-parametric-transversality]], [[thm-transverse-preimage-theorem]].

[F4] Isotopies of framed attaching regions preserve the relative diffeomorphism type and transport later data. [[lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type]].

## Proof

1.1 Put $N=\partial_1W_q$. Since all initial indices are at least two, connectedness of $W$ forces connectedness of its nonempty incoming collar and $W_q$. The surgery description of $N$ replaces tubes of $(q-1)$-spheres, of codimension $n-q+1\ge3$, by $D^q\times S^{n-q}$, with connected gluing regions; thus $N$ is connected. By [F2], $\pi_1(N)\to\pi_1(W)$ is an isomorphism. Removing the higher attaching cores, of codimension $n-q\ge2$, preserves connectedness and surjects on fundamental groups: perturb paths and loops transverse to them using [F3], with expected intersection dimensions $1+q-n<0$. Radial collar retraction replaces core complements by tube complements. Consequently every desired group label is represented by a path in $N^\circ$. [F2, F3, given]

1.2 For handle $\varphi_j$, take a parallel copy $t_j=S^q\times\{z\}$ of its attaching sphere, with $z$ on the boundary of the normal disk. Push it slightly into $N^\circ$. Its lift represents $d[\varphi_j]$ by [F1], with orientation chosen accordingly. After the handle is attached it bounds the outgoing disk $D^{q+1}\times\{z\}$, and is therefore a trivial framed sphere in $\partial_1W_{q+1}$. The disk is disjoint from $f$, which lies in the old common open region. [F1, construct]

2.1 Fix a monomial $\varepsilon\gamma$ in $x_j$. Choose a joining path from $f$ to $t_j$ in $N^\circ$ with the required relative homotopy class by step 1.1. Smooth it, preserve its embedded endpoint germs, approximate it by an embedded arc and perturb its interior off the two spheres by [F3]; the inequalities are $2<n$ and $1+q<n$. Thicken it to a sufficiently thin framed band as in [F3]. Lifting that band fixes the lift of its second sphere; by choosing the path class this is $T_{\gamma^{-1}}\widetilde t_j$, namely $\widetilde t_j\cdot\gamma$. The band sum thus has class $[\widetilde f]+\varepsilon d[\varphi_j]\cdot\gamma$: collapsing the band to its core gives the pinch map whose two oriented sphere classes add, and the negative orientation gives the sign $\varepsilon$. This uses right multiplication throughout. [F1, F3, step 1.1, step 1.2, construct]

3.1 In the higher outgoing level, the disk bounded by $t_j$ together with a thin neighborhood of the joining band lets the added sphere shrink along the band back to its end disk on $f$. This is an isotopy supported in that disk-and-band neighborhood; it preserves a supplied normal framing by transporting it along the same local motion. It is the local band-sum isotopy in Lück’s Modification Lemma, printed pp. 15–16. The resulting sphere remains in $N^\circ$, while its comparison isotopy takes place one level higher. When it is attaching data, [F4] transports all subsequent handles. [F3, F4, step 1.2, step 2.1]

4.1 Expand each $x_j$ as its finite signed sum of group elements. Repeat steps 2.1–3.1 for those finitely many monomials, always choosing fresh sufficiently thin parallel copies and bands. Compatible lifts agree on the unchanged part of the sphere, so the class additions sum to the displayed right-linear formula. Concatenating the higher-level isotopies proves the isotopy and framing assertions. Countable choice is inherited through the geometric suppliers; the coefficient expansion and the number of modifications are finite. [F1, F3, F4, step 2.1, step 3.1] ∎
