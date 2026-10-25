---
id: ex-cancelling-zero-one-handle-pair
kind: example
title: "A cancelling zero-one handle pair"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps: [def-geometric-cancelling-handle-pair, thm-handle-cancellation, lem-standard-complementary-pair-fills-an-n-ball, def-k-handle-core-cocore-attaching-region-and-belt-sphere, def-attaching-a-smooth-handle-with-corner-rounding, def-countable-choice]
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
      locator: "Lemma 5.4.2 with r = 0 and Theorem 5.4.3, §5.4, printed pp. 144-147 (the case k = 0)"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes; complete author PDF)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Example 1.11 and Cancellation Lemma 1.12 for q = 0, Ch. 1 §1.1, printed pp. 6-7"
verification:
  precheck: pass
---

## Example

Assume $\mathrm{AC}_\omega$. In dimension $n\ge1$ attach a $0$-handle $h^0$ to a compact manifold $W$ as a disjoint ball $D^n$ and then attach a $1$-handle $h^1$ by an embedding $S^0\times D^{n-1}\to\partial_+(W\sqcup D^n)$ whose attaching $0$-sphere consists of one point on the new boundary sphere $S^{n-1}$ of $h^0$ (its belt sphere) and one point on $\partial_+W$. In the endpoint convention of the definition the pair is geometrically cancelling, exactly one point of the $0$-sphere lying in the belt sphere with transversality automatic, and $W\sqcup D^n\cup h^1\cong W$ relative to $\partial_-W$. The local model is the identity $(S^0\times D^n)\cup h^1\cong D^n$: two $n$-balls joined by a $1$-handle are one $n$-ball.

## Facts & Assumptions

**Given:** Dimension $n\ge1$, a compact manifold $W$, a $0$-handle $h^0$ attached as a disjoint ball $D^n$ and a $1$-handle $h^1$ attached by an embedding $S^0\times D^{n-1}\to\partial_+(W\sqcup D^n)$ whose attaching $0$-sphere has one point on the new boundary sphere $S^{n-1}$ of $D^n$ and one point on $\partial_+W$.

[F1] [[def-geometric-cancelling-handle-pair]] and [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]: the belt sphere of a $0$-handle is the new boundary sphere $S^{n-1}$ (disconnected when $n=1$), the attaching sphere of a $1$-handle is a $0$-sphere, and the endpoint convention counts exactly one point of the $0$-sphere lying in the belt sphere, transversality being automatic.

[F2] [[lem-standard-complementary-pair-fills-an-n-ball]]: for the standard embedding the union of the standard $0$-handle and the standard $1$-handle is an $n$-disc: in its case $k=0$ the standard complementary pair fills the ball, i.e. $(S^0\times D^n)\cup h^1\cong D^n$ for the standard hemisphere embedding.

[F3] [[thm-handle-cancellation]], [[def-attaching-a-smooth-handle-with-corner-rounding]] and [[def-countable-choice]]: assume $\mathrm{AC}_\omega$; a geometrically cancelling pair may be deleted, giving a diffeomorphism relative to the incoming boundary; attachments are formed with corners rounded. The assumption is used through the standard-pair model of [F2] and through this deletion.

## Verification

**Given:** The configuration of the statement.

1.1 The attaching $0$-sphere of $h^1$ consists of two points, one on the belt sphere $S^{n-1}$ of the attached $0$-handle and one on $\partial_+W$; in the endpoint convention of [F1] exactly one point of the $0$-sphere lies in the belt sphere, with transversality automatic in these dimensions. Hence the pair is geometrically cancelling. [F1, given]

2.1 The local model is [F2] with $k=0$: two $n$-balls joined by a $1$-handle form one $n$-ball, $(S^0\times D^n)\cup h^1\cong D^n$, and the total is the boundary connected sum of $W$ with a disc along the point of $\partial_+W$ at which the second foot lands. [F2, step 1.1]

3.1 By [F3] the cancelling pair may be deleted from $W\sqcup D^n\cup h^1$; equivalently the boundary connected sum with a disc is $W$ again, so $W\sqcup D^n\cup h^1\cong W$ relative to $\partial_-W$. The attaching-belt matrix is not defined for $k=0$ (the definition requires $1\le k\le n-2$), so this endpoint case is handled directly by the geometric criterion. [F1, F2, F3, step 2.1, given] ∎
