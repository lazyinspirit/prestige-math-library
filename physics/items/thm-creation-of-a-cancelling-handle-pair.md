---
id: thm-creation-of-a-cancelling-handle-pair
kind: theorem
title: "Creation of a cancelling handle pair"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps: [def-geometric-cancelling-handle-pair, thm-handle-cancellation, lem-standard-complementary-pair-fills-an-n-ball, lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type, def-attaching-a-smooth-handle-with-corner-rounding, def-handle-decomposition-relative-to-the-incoming-boundary, lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type, def-countable-choice]
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
      locator: "Theorem 5.4.4, §5.4, printed p. 147 (a complementary pair can be introduced at any point)"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes; complete author PDF)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Lemma 1.13, Ch. 1 §1.1, printed p. 7 (trivial embedding creates a cancelling pair)"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W$ be a compact connected smooth $n$-manifold with collared boundary $\partial W=\partial_0W\sqcup\partial_1W$, with $\partial_1W\neq\varnothing$, and let $0\le k\le n-1$. For every point $x\in\partial_1W$ and every neighbourhood $V$ of $x$ in $\partial_1W$ there are attaching embeddings of a $k$-handle $h^k$ and, after it, a $(k+1)$-handle $h^{k+1}$ whose lower attaching region lies in $V$ and whose upper attaching region lies in the boundary region obtained from $V$ after the lower attachment, forming the standard complementary pair on an embedded disc $E\subset V$, and the resulting manifold $W\cup h^k\cup h^{k+1}$ is diffeomorphic to $W$ relative to $\partial_0W$. Equivalently, every handle presentation of $W$ may be modified by introducing a geometrically cancelling pair of consecutive indices at any prescribed disc of the outgoing boundary, without changing the manifold; the pair is the inverse local modification of the cancellation theorem.

## Facts & Assumptions

**Given:** A compact connected smooth $n$-manifold $W$ with collared boundary $\partial W=\partial_0W\sqcup\partial_1W$, $\partial_1W\neq\varnothing$, an integer $0\le k\le n-1$, a point $x\in\partial_1W$ and a neighbourhood $V$ of $x$ in $\partial_1W$.

[F1] [[lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type]]: assume $\mathrm{AC}_\omega$; for a connected smooth $n$-manifold $N$ with nonempty boundary and an embedded closed disk $D\subseteq\partial N$, the boundary connected sum $N\natural D^n$ is diffeomorphic to $N$ by a diffeomorphism equal to the identity outside a collar of $D$.

[F2] [[lem-standard-complementary-pair-fills-an-n-ball]] and [[thm-handle-cancellation]]: the standard complementary pair fills an $n$-disc, and a geometrically cancelling pair may be deleted from a presentation; conversely the standard model may be read backwards as the introduction of a cancelling pair along a disc of the boundary.

[F3] [[lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type]] and [[def-attaching-a-smooth-handle-with-corner-rounding]]: attachments along isotopic attaching data are diffeomorphic, and the attachment convention fixes the collar data used to compare the two presentations.

[F4] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed; it is used through [F1] and [F3].

## Proof

**Proof technique:** direct.

1.1 Choose an embedded closed disc $E\subseteq V$ with $x\in\operatorname{int}E$ and attach an $n$-disc $D^n$ to $W$ along $E$; by [F1], applied to $N=W$ and $D=E$, the boundary connected sum $W\natural D^n$ is diffeomorphic to $W$ relative to $\partial_0W$, by a diffeomorphism equal to the identity outside a collar of $E$. [F1, given]

2.1 By [F2] the standard $n$-disc admits the decomposition $D^n=D^n\cup h^k\cup h^{k+1}$ with the two handles attached in the standard complementary way along a disc of its boundary: the standard $k$-handle is attached along the equatorial embedding and the standard $(k+1)$-handle fills the resulting $S^k\times D^{n-k}$ back to a disc. Hence the attached disc in step 1.1 can be decomposed into the two standard handles supported over $E$ (the upper region lies in the boundary after the lower attachment). [F2, step 1.1]

3.1 Transporting this decomposition along the absorption diffeomorphism of step 1.1 and adjusting the attaching data by an isotopy inside $V$ using [F3], we obtain attaching embeddings of a $k$-handle $h^k$ and, after it, a $(k+1)$-handle $h^{k+1}$ whose lower attaching region lies in $V$ and whose upper attaching region lies in the boundary region obtained from $V$ after the lower attachment, forming the standard complementary pair on an embedded disc $E\subseteq V$, with $W\cup h^k\cup h^{k+1}$ diffeomorphic to $W$ relative to $\partial_0W$. [F3, F4, step 1.1, step 2.1, given]

4.1 Consequently every handle presentation of $W$ may be modified by introducing a geometrically cancelling pair of consecutive indices at any prescribed disc of the outgoing boundary, without changing the manifold; the pair is the inverse local modification of the cancellation theorem, and the construction works for every $0\le k\le n-1$ and covers the endpoints through the endpoint conventions of the standard model. [F2, step 3.1, given] ∎
