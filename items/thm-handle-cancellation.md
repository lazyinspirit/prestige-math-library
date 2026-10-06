---
id: thm-handle-cancellation
kind: theorem
title: "Handle cancellation"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 7
deps: [def-geometric-cancelling-handle-pair, lem-one-intersection-gives-the-standard-local-cancelling-model, lem-standard-complementary-pair-fills-an-n-ball, lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type, def-handle-decomposition-relative-to-the-incoming-boundary, def-attaching-a-smooth-handle-with-corner-rounding, lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism, lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Theorem 5.4.3 (Handle Cancellation Theorem), §5.4, printed pp. 146-147"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes; complete author PDF)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Cancellation Lemma 1.12, Ch. 1 §1.1, printed pp. 6-7"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W$ be a compact smooth $n$-manifold with collared boundary $\partial W=\partial_0W\sqcup\partial_1W$, let $\varphi:S^{k-1}\times D^{n-k}\to\partial_1W$ be an attaching embedding of a $k$-handle and let $\psi:S^k\times D^{n-k-1}\to\partial_1(W\cup_\varphi h^k)$ be an attaching embedding of a $(k+1)$-handle attached after it, where $0\le k\le n-1$. If the attaching sphere of $h^{k+1}$ meets the belt sphere of $h^k$ transversely in exactly one point, then $W\cup_\varphi h^k\cup_\psi h^{k+1}$ is diffeomorphic to $W$ relative to $\partial_0W$. Consequently a geometrically cancelling consecutive pair may be deleted from, or added to, any handle presentation of the same manifold; the diffeomorphism may be taken to act only in a collar of the affected boundary disc and in the two handles, so the attaching data of all later handles are carried along.

## Facts & Assumptions

**Given:** A compact smooth $n$-manifold $W$ with collared boundary $\partial W=\partial_0W\sqcup\partial_1W$, an attaching embedding $\varphi$ of a $k$-handle $h^k$, an attaching embedding $\psi$ of a $(k+1)$-handle $h^{k+1}$ attached after it, $0\le k\le n-1$, and the hypothesis that the attaching sphere of $h^{k+1}$ meets the belt sphere of $h^k$ transversely in exactly one point.

[F1] [[def-geometric-cancelling-handle-pair]] and [[def-handle-decomposition-relative-to-the-incoming-boundary]]: geometrically cancelling means one transverse intersection point of the two spheres in the middle boundary; a finite presentation attaches handles in order relative to $\partial_0W$ and the outgoing boundary after each stage is well defined.

[F2] [[lem-one-intersection-gives-the-standard-local-cancelling-model]]: assume $\mathrm{AC}_\omega$; a geometrically cancelling pair may be isotoped, through embeddings fixed outside a compact neighbourhood of the two attaching regions, to the standard complementary pair attached to an embedded disc $E$ of the pre-handle boundary $\partial_1W$. The quoted support is near the swept attaching regions; containment in a boundary disk is verified in step 2.1 below.

[F3] [[lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type]]: assume $\mathrm{AC}_\omega$; isotopic attaching embeddings give diffeomorphic attachments, by a diffeomorphism supported near the swept region and carrying the attaching data of later handles.

[F4] [[lem-standard-complementary-pair-fills-an-n-ball]] and [[def-attaching-a-smooth-handle-with-corner-rounding]]: the standard complementary pair fills an $n$-disc, so a small $n$-disc with outgoing face $E$, together with the two handle bodies is an $n$-disc attached to $W$ along $E$; with corners rounded this is the boundary connected sum $W\natural D^n$.

[F5] [[lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type]]: assume $\mathrm{AC}_\omega$; for a connected smooth $n$-manifold $N$ with nonempty boundary and an embedded closed disk $D\subseteq\partial N$, the boundary connected sum $N\natural D^n$ is diffeomorphic to $N$ by a diffeomorphism equal to the identity outside a collar of $D$.

[F6] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed; it is used through [F2], [F3] and [F5].

## Proof

**Proof technique:** direct.

1.1 By [F2] the affected region of the outgoing boundary $\partial_1W$ is an embedded closed disc $E$ to which the pair is attached in the standard way, and the attaching data are isotopic to the given ones through embeddings fixed outside a compact neighbourhood of the two attaching regions. By [F3] the total manifolds obtained from the given data and from the standard data are diffeomorphic relative to $\partial_0W$, with a diffeomorphism supported near the swept region; it therefore suffices to prove the claim for the standard pair attached to $E$. [F1, F2, F3, given]

2.1 Localize the normalization before composing diffeomorphisms. In the construction of [F2], put $q=n-k$. The radial expulsion and crossing-chart adjustment act, on the old-boundary side, only in an extended collar of the original lower attaching region; their other support is in the lower handle. After that expulsion the upper sphere's complementary hemisphere, with its normal coordinates, is an embedded cap $D^k\times D^{q-1}$ in $\partial_1W$, outside the lower attaching region and joined to it along $S^{k-1}\times D^{q-1}$. The old-boundary part of the upper attaching region before expulsion is contained in this cap neighbourhood and the seam collar: the radial map is the identity off that collar. Retain the full lower attaching tube, rather than its subsequently shrunken version. Its union with the cap neighbourhood is the rounded product $(S^{k-1}\times D^q)\cup_{S^{k-1}\times D^{q-1}}(D^k\times D^{q-1})$, a closed $(n-1)$-disk by [F4](i) with dimensions $n-1,k-1$. The attaching patch can be taken smaller than the displayed hemisphere; expanding it in its disk coordinates gives the same product model. Enlarge this disk slightly by its boundary collar to a disk $D$, containing the seam collars and the compact old-boundary sweeps in its interior. The remaining graph, normal-radius and lower-normal-disk adjustments of [F2] may now be made inside this disk neighbourhood and the lower handle: the normal-radius contractions and translations stay in the retained tubes, and the cap coordinates are fixed away from their seam collar. Thus all their old-boundary supports lie in $D$. When $k=0$, the cap is simply the disk about the upper handle's old-boundary foot, and the other support is in the new $0$-handle, giving the same conclusion. Choose the extensions in [F3] in the corresponding collar of $D$ and the handles. The final model disk $E$ lies in this enclosing $D$. This proves the required support containment; it does not shrink the support to the possibly smaller final disk $E$. [F2, F3, F4, step 1.1, construct]

3.1 For the standard pair, a small $n$-disc with outgoing face $E$, together with the two handle bodies is an $n$-disc attached to $W$ along $E$: the standard complementary pair region fills a ball by [F4], and its attaching boundary is exactly $E$. Hence $W\cup_\varphi h^k\cup_\psi h^{k+1}$ is diffeomorphic to the boundary connected sum $W\natural D^n$ formed along $E$. [F4, step 1.1, step 2.1]

4.1 Apply [F5] to the connected component of $W$ containing $E$, with $D:=E$, and leave every other component fixed. This identifies $W\natural D^n$ with $W$ by a diffeomorphism equal to the identity outside a collar of $E$. The diffeomorphism may be taken to be the identity on $\partial_0W$, because the connected sum is formed in a collar of $\partial_1W$ disjoint from a collar of $\partial_0W$, and both collars are part of the given collar data. [F5, F6, step 3.1, given]

5.1 By step 2.1 the normalization comparison is the identity off a collar of $D$ and the two handle bodies. The ball replacement and absorption in steps 3.1–4.1 take place in a collar of $E\subset\operatorname{int}D$ and the handles. Choose that collar inside the same collar neighbourhood of $D$; these maps then fix its complement and carry that neighbourhood onto the corresponding neighbourhood, so their composition has the asserted support. The affected boundary disk in the support clause is this enclosing disk $D$. Every later attaching embedding is carried by the composed boundary diffeomorphism; attaching those handles by the transported embeddings extends the comparison relative to $\partial_0W$. [F3, F4, step 2.1, step 3.1, step 4.1]

6.1 Consequently a geometrically cancelling consecutive pair may be deleted from, or added to, any handle presentation of the same manifold, relative to the incoming boundary. The argument covers the endpoints $k=0$ and $k=n-1$, where the intersection is read by the endpoint conventions of [F1] and the standard model is the corresponding endpoint case of [F4]. [F1, F4, step 5.1, given] ∎
