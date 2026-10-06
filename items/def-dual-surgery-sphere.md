---
id: "def-dual-surgery-sphere"
kind: "definition"
title: "Dual surgery sphere"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
deps: ["def-framed-embedded-surgery-sphere", "def-surgery-trace-cobordism", "thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold", "def-k-handle-core-cocore-attaching-region-and-belt-sphere", "def-normal-and-conormal-bundles-of-an-embedded-submanifold", "def-tubular-neighbourhood-of-an-embedded-submanifold", "def-countable-choice"]
justified_by: []
aliases: []
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  precheck: "n/a"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 3 §3.4.1, printed p. 72 (the boundary sphere S^k×S^{n-k-1} of the removed piece is glued back along D^{k+1}×S^{n-k-1}, which exhibits the complementary disk factor)"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.1, Proposition 10.2, printed pp. 195-196 (F is the trace of the dual (m-n-1)-surgery on f':M'->X killing an element x' in pi_{m-n}(f'); the dual core is an (m-n-1)-embedding)"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.1, printed p. 196 (if M' is obtained from M by a modification of type (r,m-r+1), then M is obtained from M' by one of type (m-r+1,r), with the same supporting manifold; the a-sphere and b-sphere vocabulary of Section 3)"
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $M$ be a closed
smooth $m$-manifold, $0\le p\le m-1$, $q=m-p$, let $\varphi$ be a framed
embedded surgery sphere in $M$, let $W_\varphi$ be the trace and let
$M_\varphi$ be the surgered manifold, identified with the outgoing face of the
trace ([[def-surgery-trace-cobordism]],
[[thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold]]). The
**dual surgery sphere** is the belt sphere
$$S_\varphi=\{0\}\times S^{q-1}\subseteq D^{p+1}\times S^{q-1}\subseteq M_\varphi,$$
of dimension $q-1$, together with the framing of its normal bundle in
$M_\varphi$ induced by the product structure of the handle.

The framing is canonical and not a choice: in the glued handle
$D^{p+1}\times S^{q-1}$ the tangent directions of the belt sphere are the
$S^{q-1}$-directions, so its normal directions inside $M_\varphi$ are the
$D^{p+1}$-factor directions, and the product trivialization of the disk factor
trivializes them. This is the same product data that was used to glue the
handle in, read from the other side
([[def-k-handle-core-cocore-attaching-region-and-belt-sphere]],
[[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]).

The **dual operation** is the $(q-1)$-surgery on the $m$-manifold
$M_\varphi$ along $S_\varphi$; after this dual operation its belt sphere
identifies with the original underlying sphere in $M$. The construction applies
to every datum of the definition, including the endpoint $q=1$, where
$S_\varphi=\{0\}\times S^0$ is a $0$-sphere, a two-point set with a framing of
its rank-$m$ normal bundle. The dimension count
$(q-1)+1=q$ shows that the dual surgery piece has disk factor
$p+1=m-(q-1)$, so the dual operation is again of the form considered in
[[def-framed-embedded-surgery-sphere]]: the sphere dimension is $q-1$ and the
disk factor has dimension $p+1$, and the range $0\le q-1\le m-1$ holds because
$1\le q\le m$.

In the normal direction the dual sphere carries the framing that the reversal
theorem of this page needs; no claim about the diffeomorphism type of the dual
surgered manifold is made here, and no orientation of $M$ is used.
