---
id: "thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold"
kind: "theorem"
title: "The upper boundary of the surgery trace is the surgered manifold"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 4
deps: ["def-p-surgery-on-a-smooth-m-manifold", "def-surgery-trace-cobordism", "lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors", "def-k-handle-core-cocore-attaching-region-and-belt-sphere", "def-attaching-a-smooth-handle-with-corner-rounding", "def-smooth-cobordism-triad-for-morse-theory", "lem-product-cobordisms-have-critical-point-free-presentations", "def-diffeomorphism-and-local-diffeomorphism-of-manifolds", "def-countable-choice", "lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy"]
justified_by: []
aliases: []
proof_strategy: "apply the boundary trade to the product cobordism with one handle, then the handle retractions"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 3 §3.4.1, printed p. 72 (W=D^{k+1}×D^{n-k}∪_q M×[0,1], M=M×{0} and M' the other part of the boundary of W); §3.4.3, Theorem 3.59 (4), printed pp. 75-76"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.1, Proposition 10.2 with proof, printed pp. 195-196 (F is the trace of the dual surgery, and W is homotopy equivalent to both M∪D^{n+1} and M'∪D^{m-n})"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.1, printed pp. 196-197 (the supporting manifold has boundary part W=M and supported part W=M'; up to homotopy W is obtained from M by attaching an r-cell and from M' by attaching an (m-r+1)-cell)"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $M$ be a closed
smooth $m$-manifold, $0\le p\le m-1$, $q=m-p$, let $\varphi$ be a framed
embedded surgery sphere in $M$, let $W_\varphi$ be its trace and let
$M_\varphi$ be the $p$-surgery on $M$ along $\varphi$. Then:

(i) $\partial W_\varphi$ is the disjoint union of the two closed faces
$M\times\{0\}\cong M$ (the incoming face) and the outgoing face, and the
outgoing face is diffeomorphic to $M_\varphi$, with compatible collar choices the identification
being the identity on $M\setminus\varphi(S^p\times\operatorname{int}D^q)$ and
carrying the belt sphere of the handle to the belt sphere of the surgery;

(ii) there are homotopy equivalences of pairs relative to the indicated faces,
$$(W_\varphi,M)\simeq(M\cup_{\varphi_0}D^{p+1},M),\qquad (W_\varphi,M_\varphi)\simeq(M_\varphi\cup_{\beta}D^q,M_\varphi),$$
where $\beta$ is the belt-sphere embedding. The characteristic disks in these
models include the collar paths from the attaching spheres to the respective
faces; the raw core disk in the upper handle does not have boundary in the
incoming face;

(iii) in particular the trace is a bordism from $M$ to $M_\varphi$, as the
definition of the trace asserts.

## Facts & Assumptions

**Given:** the closed smooth $m$-manifold $M$, the integers $0\le p\le m-1$ and $q=m-p$, the framed embedded surgery sphere $\varphi$, the trace $W_\varphi=(M\times[0,1])\cup_{\varphi\times\{1\}}(D^{p+1}\times D^q)$ and the surgered manifold $M_\varphi$.

[F1] [[def-surgery-trace-cobordism]]: $W_\varphi$ is the cylinder with the standard $(p+1)$-handle attached along $\varphi\times\{1\}$ in the upper face $M\times\{1\}$; its fixed pieces are the incoming face $M\times\{0\}$, the core disk, the cocore disk and the belt sphere $\{0\}\times S^{q-1}$.

[F2] [[lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors]]: for the attachment of a $k$-handle to a smooth manifold $N$ with boundary along an embedding in $\partial N$, the boundary of the attached manifold is obtained from $\partial N$ by removing the open attaching region $\psi(S^{k-1}\times\operatorname{int}D^{n-k})$ and gluing in the outgoing region $D^k\times S^{n-k-1}$ along $S^{k-1}\times S^{n-k-1}$.

[F3] [[def-p-surgery-on-a-smooth-m-manifold]]: the surgered manifold is $M_\varphi=(M\setminus\varphi(S^p\times\operatorname{int}D^q))\cup_{\varphi|_{S^p\times S^{q-1}}}(D^{p+1}\times S^{q-1})$, with smooth structure given by collars and a compatible smoothing of the seam.

[F4] [[def-attaching-a-smooth-handle-with-corner-rounding]]: the handle is attached by gluing along the attaching region with the framing part of the data, the seam receives product charts, and the corner is rounded.

[F5] [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]: the standard handle $D^k\times D^{n-k}$ has attaching region $S^{k-1}\times D^{n-k}$, outgoing region $D^k\times S^{n-k-1}$, core $D^k\times\{0\}$, cocore $\{0\}\times D^{n-k}$ and belt sphere $\{0\}\times S^{n-k-1}$.

[F6] [[lem-product-cobordisms-have-critical-point-free-presentations]]: the cylinder $M\times[0,1]$ is the collar presentation with empty handle list, with incoming face $M\times\{0\}$ and outgoing face $M\times\{1\}$, and the product retraction of the cylinder onto each face is available.

[F7] [[def-smooth-cobordism-triad-for-morse-theory]]: a smooth cobordism triad $(W;M_0,M_1)$ consists of a compact smooth manifold with boundary and two closed embedded submanifolds forming the boundary, together with fixed collars of both faces.

[F8] [[lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy]]: for an attached handle of index $k$, the pair relative to the original manifold is homotopy equivalent to one $k$-cell attached along the core sphere. Only $1\le k\le m$ in dimension $m+1$ is used here.


## Proof

**Given:** the objects and hypotheses of the statement.

1.1 The trace is obtained from $N=M\times[0,1]$ by attaching the standard $(p+1)$-handle along the embedding $\varphi\times\{1\}$ in the upper face $M\times\{1\}$, with a handle of index $p+1$ in an ambient manifold of dimension $m+1$. The boundary trade of [F2] applies with $k=p+1$ and $n=m+1$, so $\partial W_\varphi=\Bigl(\partial N\setminus(\varphi\times\{1\})(S^p\times\operatorname{int}D^q)\Bigr)\cup\bigl(D^{p+1}\times S^{q-1}\bigr),$ the two parts meeting along $S^p\times S^{q-1}$ with the identification induced by $\varphi$. Since $\partial N=M\times\{0\}\sqcup M\times\{1\}$ and the removed piece lies in the upper face, the first summand is $M\times\{0\}\sqcup\bigl(M\times\{1\}\setminus\varphi(S^p\times\operatorname{int}D^q)\bigr)$. [F1, F2, F4, F5]

1.2 Put $C=M\times I$ and $k=p+1$. By [F8], $(W_\varphi,C)$ is equivalent, relative to $C$, to $E=C\cup_{\varphi_0\times\{1\}}D^k$; hence this equivalence also fixes $M\times\{0\}$. Let $Y=M\cup_{\varphi_0}D^k$. Collapse the cylinder coordinate to define $q:E\to Y$, leaving the cell coordinates unchanged. An inverse $j:Y\to E$ is the identity on the lower face and sends $u=rx$ in the cell to $2u$ in the upper cell for $r\le1/2$, and to $(\varphi_0(x),2(1-r))$ in the cylinder for $r\ge1/2$. The formulas agree at $r=1/2$ and at the attaching boundary. The composite $qj$ radially expands $r$ to $\min(2r,1)$, homotopic to the identity relative to the cell boundary. For $jq$, a homotopy on $E$ sends $(a,t)$ in the cylinder to $(a,(1-s)t)$ and sends $u=rx$ in the cell to $(1+s)u$ in that cell when $r\le1/(1+s)$, and to $(\varphi_0(x),2-(1+s)r)$ in the cylinder otherwise. These prescriptions agree on all seams, start at the identity, end at $jq$, and fix the lower face. This proves the first equivalence in (ii), without gluing incompatible retractions. [F1, F8, construct, algebra]

2.1 The second boundary component just computed, namely $\bigl(M\setminus\varphi(S^p\times\operatorname{int}D^q)\bigr)\cup(D^{p+1}\times S^{q-1})$ with the identification induced by the framing on the overlap, is exactly the surgered manifold $M_\varphi$ of [F3]: the removed sets agree, the glued pieces agree, and the gluing identification is the same framing datum. Hence the outgoing face is diffeomorphic to $M_\varphi$ by the identity on $M\setminus\varphi(S^p\times\operatorname{int}D^q)$, and this diffeomorphism carries the belt sphere $\{0\}\times S^{q-1}$ of the handle to the belt sphere of the surgery. The incoming face $M\times\{0\}$ is a union of boundary components untouched by the attachment, and it is disjoint from the outgoing face. This proves (i). [F1, F2, F3, F5, step 1.1]

3.1 Reverse the local handle presentation: the product $D^{p+1}\times D^q$ becomes $D^q\times D^{p+1}$, with attaching region $S^{q-1}\times D^{p+1}$, the former outgoing region. To see the reversed collar presentation, use the local handle height $-|u|^2+|v|^2$; changing its sign exchanges $u$ and $v$, its lower and upper faces, and core and cocore, while outside the handle the collars are read backwards. Its attaching sphere is therefore the belt sphere $\beta$ in the outgoing face. Applying [F8] to this $q$-handle and then the explicit cylinder-cell equivalence of step 1.2, now with $M_\varphi$ and $k=q$, gives $(W_\varphi,M_\varphi)\simeq(M_\varphi\cup_\beta D^q,M_\varphi)$. Both indices lie between $1$ and $m$; only these interior indices of [F8] are used. This proves (ii). [F1, F5, F8, step 2.1, step 1.2, algebra]

4.1 The trace is a compact smooth $(m+1)$-manifold whose boundary is the disjoint union of the incoming face $M\times\{0\}$, identified with $M$ by the product structure, and the outgoing face, identified with $M_\varphi$ by step 2.1; the collars of the two faces are those of the cylinder and of the handle attachment, and the triad data are those of [F7]. By [F6] the incoming face is the level $M\times\{0\}$ of the product presentation, so the trace is a bordism from $M$ to $M_\varphi$. This proves (iii). [F1, F6, F7, step 2.1] ∎


## Remarks

The two-sided cell models agree with Ranicki, Proposition 10.2, printed pp. 195–196.
