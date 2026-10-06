---
id: "ex-zero-surgery-on-the-circle"
kind: "example"
title: "Zero-surgery on the circle"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 3
deps: ["def-p-surgery-on-a-smooth-m-manifold", "lem-surgery-gluing-has-a-canonical-smooth-structure-up-to-diffeomorphism", "lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors"]
justified_by: []
aliases: []
proof_strategy: "reading a boundary decomposition of the square from the other side"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.1, Definition 10.1 (vi), printed p. 195 (the effect of an n-surgery: replacing g(S^n×D^{m-n}) by D^{n+1}×S^{m-n-1}; the two disk factors are interchanged)"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.1, printed p. 196 (a spherical modification of type (1,1) on a 1-manifold and the reversal statement)"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 3 §3.4.1, printed p. 72 (the two pieces are glued along S^k×S^{n-k-1}, and the modification replaces S^k×D^{n-k} by D^{k+1}×S^{n-k-1})"
---

## Example

Assume $\mathrm{AC}_\omega$, as in the surgery definition. Take $M=S^1$, $p=0$, $q=1$, and the standard framed embedding
$\varphi:S^0\times D^1\hookrightarrow S^1$ that is the inclusion of the
vertical sides in the standard decomposition (with corner charts rounded compatibly)
$\partial(D^1\times D^1)=(S^0\times D^1)\cup(D^1\times S^0)$ of the square's
boundary, whose image is the union of two disjoint closed intervals. The
framing is part of this data, and it is the one used in the verification
below. The range $0\le p\le m-1$ holds with $m=1$. The
$0$-surgery removes the interiors of the two intervals and glues
$D^1\times S^0$, that is, two intervals, along $S^0\times S^0$, that is, four
points. The result is $S^1\sqcup S^1$.

## Verification

**Given:** $M=S^1$ with the standard framed embedding
$\varphi:S^0\times D^1\hookrightarrow S^1$ of the two closed intervals.

[F1] [[def-p-surgery-on-a-smooth-m-manifold]]: the $p$-surgery is
$$M_\varphi=\bigl(M\setminus\varphi(S^p\times\operatorname{int}D^q)\bigr)\cup_{\varphi|_{S^p\times S^{q-1}}}\bigl(D^{p+1}\times S^{q-1}\bigr),$$
with $p=0$, $q=1$ this removes the interiors of the two intervals and glues two
intervals along four points; the construction takes place in the interior of
$M$.

[F2] [[lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors]]:
for $k=1$, $n=2$ the boundary of the square is
$\partial(D^1\times D^1)=(S^0\times D^1)\cup(D^1\times S^0)$, two pairs of
opposite sides meeting in the four corners $S^0\times S^0$, and the trade
lemma identifies the complement of the open attaching region with the
complementary pair of sides.

[F3] [[lem-surgery-gluing-has-a-canonical-smooth-structure-up-to-diffeomorphism]]:
the gluing along the common boundary gives a smooth $1$-manifold, and its
diffeomorphism type is the one fixed by the identification on the overlap.

1.1 The normal bundle of a point in a $1$-manifold is trivial, so a framing of the $0$-sphere $S^0\times\{0\}$ is exactly the product structure exhibited by $\varphi$; the image of $\varphi$ is the union of two disjoint closed intervals of $S^1$, whose complement after removal of their interiors is a union of two disjoint closed arcs. [F1, given]

2.1 Reading the standard decomposition of the square's boundary in [F2], the two intervals $S^0\times D^1$ are the two vertical sides and the two intervals $D^1\times S^0$ are the two horizontal sides; the four corners are $S^0\times S^0$. The $0$-surgery removes the open vertical sides and glues in the two horizontal sides, identifying their endpoints with the four corners by the framing, so the result is exactly the boundary of the square with the vertical sides replaced by the horizontal sides. [F1, F2, step 1.1]

3.1 The complement of the open vertical sides in the square's boundary is the union of the two horizontal sides, each a closed arc; the glued interval $D^1\times\{-1\}$ joins the two endpoints of one horizontal side and the glued interval $D^1\times\{+1\}$ joins the two endpoints of the other, so each horizontal side is closed up by one glued interval into a circle. There are no other points, and the two circles are disjoint because the four corners are distributed two to each. Hence the surgered manifold is $S^1\sqcup S^1$. [F2, step 2.1, algebra]

4.1 Equivalently, the same computation reads $D^1\times S^0\cup D^1\times S^0=S^0\times\bigl(D^1\cup_{S^0}D^1\bigr)=S^0\times S^1=S^1\sqcup S^1,$ the two copies of $D^1\times S^0$ being the glued-in piece and the complementary arcs of the standard decomposition of $\partial(D^1\times D^1)$; the gluing is the one induced by the framing, and by [F3] the smooth structure is the canonical one. [F1, F2, F3, step 3.1] ∎

The example exercises the endpoint $p=0$ of the definition and the case
$p=m-1$ ($q=1$) of the trace construction: the trace is the cylinder
$S^1\times[0,1]$ with a single $1$-handle attached, in accordance with the index
shift of the trace definition, and its outgoing face is the two-circle manifold
just computed.
