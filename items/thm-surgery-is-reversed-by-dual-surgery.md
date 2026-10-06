---
id: "thm-surgery-is-reversed-by-dual-surgery"
kind: "theorem"
title: "Surgery is reversed by dual surgery"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 6
deps: ["def-framed-embedded-surgery-sphere", "def-p-surgery-on-a-smooth-m-manifold", "def-surgery-trace-cobordism", "lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors", "thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold", "def-dual-surgery-sphere", "def-attaching-a-smooth-handle-with-corner-rounding", "lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism", "def-diffeomorphism-and-local-diffeomorphism-of-manifolds", "def-countable-choice", "lem-surgery-gluing-has-a-canonical-smooth-structure-up-to-diffeomorphism", "lem-gluing-handle-morse-models-along-collars"]
justified_by: []
aliases: []
proof_strategy: "identify the two disk factors in the two readings of the same handle"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.1, printed p. 196 (if M' is obtained from M by a spherical modification of type (r,m-r+1), we can obtain M from M' by one of type (m-r+1,r), and we have the same supporting manifold for both modifications)"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.1, Proposition 10.2, printed pp. 195-196 (F is the trace of the dual (m-n-1)-surgery on f' with the same W)"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 3 §3.4.1, printed p. 72 (gluing M-int(im(q)) to D^{k+1}×S^{n-k-1} along S^k×S^{n-k-1}, the same handle read from the other side)"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $M$ be a closed
connected smooth $m$-manifold, $0\le p\le m-1$, $q=m-p$, let $\varphi$ be a
framed embedded surgery sphere in $M$ with trace $W_\varphi$ and surgered
manifold $M_\varphi$, and let $S_\varphi$ be the dual surgery sphere of
dimension $q-1$, with its canonical framing
([[def-dual-surgery-sphere]]). Then the $(q-1)$-surgery on $M_\varphi$ along
$S_\varphi$ produces a closed smooth $m$-manifold diffeomorphic to
$M$, the diffeomorphism being the identity outside the union of the removed
tubular piece and the glued $D^q\times S^p$. Equivalently, the two spherical
modifications are inverse operations up to diffeomorphism, and the trace
$W_\varphi$ is the supporting manifold of both. The construction is compatible
with the framings: the dual framing is the one for which this holds.

## Facts & Assumptions

**Given:** the closed connected smooth $m$-manifold $M$, integers $0\le p\le m-1$ and $q=m-p$, the framed embedded surgery sphere $\varphi$, the trace $W_\varphi$, the surgered manifold $M_\varphi$ and the dual surgery sphere $S_\varphi$.

[F1] [[def-p-surgery-on-a-smooth-m-manifold]]: writing $N=M\setminus\varphi(S^p\times\operatorname{int}D^q)$, the surgered manifold is $M_\varphi=N\cup_{\varphi|_{S^p\times S^{q-1}}}(D^{p+1}\times S^{q-1})$, with the smooth structure given by collars and a compatible smoothing of the seam; the identification on the overlap is the restriction of the supplied product embedding.

[F2] [[def-dual-surgery-sphere]]: the dual surgery sphere is $S_\varphi=\{0\}\times S^{q-1}\subseteq D^{p+1}\times S^{q-1}\subseteq M_\varphi$, of dimension $q-1$, framed by the $D^{p+1}$-factor directions, and the dual operation is the $(q-1)$-surgery on $M_\varphi$ along $S_\varphi$; the dual piece is $D^q\times S^p$ because $(q-1)+1=q$ and $p+1=m-(q-1)$.

[F3] [[def-framed-embedded-surgery-sphere]]: a framed embedded surgery sphere of dimension $q-1$ is an embedding $S^{q-1}\times D^{p+1}\hookrightarrow M_\varphi$; its boundary is $S^{q-1}\times S^p$.

[F4] [[lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors]]: the two faces of the trace handle are $S^p\times D^q$ and $D^{p+1}\times S^{q-1}$, with common boundary $S^p\times S^{q-1}$. The replacement piece in the dual surgery is $D^q\times S^p$, with boundary $S^{q-1}\times S^p$.

[F5] [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]: a diffeomorphism is a bijective smooth map with smooth inverse.

[F6] [[lem-gluing-handle-morse-models-along-collars]], proof steps 1.2–2.1: in dimension $n$ and for $0<k<n$, the elementary band with $Q(u,v)=-|u|^2+|v|^2$, $-1\le Q\le1$ and $|u|^2|v|^2\le2$ has incoming face $S^{k-1}\times D^{n-k}$, outgoing face $D^k\times S^{n-k-1}$ and product side $S^{k-1}\times S^{n-k-1}\times[-1,1]$. Gluing its side to the complement times the height interval gives the prescribed handle trace up to diffeomorphism and absorption of outer regular collars.

[F7] [[lem-surgery-gluing-has-a-canonical-smooth-structure-up-to-diffeomorphism]]: different auxiliary collars and compatible seam presentations of the same surgery are related by a diffeomorphism supported near the seam.

## Proof

**Given:** the objects and hypotheses of the statement.

1.1 By [F1] the surgered manifold is the union of $N$ with the glued handle $D^{p+1}\times S^{q-1}$ along the boundary $\varphi(S^p\times S^{q-1})= S^p\times S^{q-1}$. The dual sphere $S_\varphi=\{0\}\times S^{q-1}$ lies in that handle, and by [F2] its framing exhibits the product $\{0\}\times S^{q-1}\times D^{p+1}$; the closed glued-in product is a framed product neighbourhood of $S_\varphi$ in $M_\varphi$, so the dual surgery of [F2] removes exactly the interior of the glued handle and glues $D^q\times S^p$ along $S^{q-1}\times S^p$. [F1, F2, F3]

2.1 Removing the interior of the glued handle from $M_\varphi$ leaves the complement $N$ with boundary $\varphi(S^p\times S^{q-1})$, up to a collar; by [F4] the boundary of $D^q\times S^p$ is $S^{q-1}\times S^p$, and the gluing identification is the given framing on that overlap. Hence the surgered manifold of the dual operation is $M_{\text{dual}}=N\cup_{\varphi|_{S^p\times S^{q-1}}}(D^q\times S^p).$ [F1, F2, F4, step 1.1]

3.1 The factor swap $(y,x)\mapsto(x,y)$ identifies $D^q\times S^p$ with $S^p\times D^q$ and its boundary with $S^p\times S^{q-1}$. Composing with $\varphi$ identifies the quotient in step 2.1 with $N\cup_{\varphi|_B}(S^p\times D^q)=M$, where $B=S^p\times S^{q-1}$. Choose the signed seam collars transported from $M$ for this reconstruction; the map is smooth across the seam and is the identity on $N$. Other collar choices are compared by [F7], with support near the seam. This gives the asserted diffeomorphism and support. [F1, F4, F5, F7, step 2.1]

4.1 To identify the supporting manifold, use [F6] with $n=m+1$ and $k=p+1$, so $0<k<n$ since $q\ge1$. Write its elementary band as $H=\{(u,v):-1\le Q\le1,\ |u|^2|v|^2\le2\}$, with $u\in\mathbb R^{p+1}$ and $v\in\mathbb R^q$. At $Q=-1$ the coordinates are $(x,v)\mapsto(\sqrt{1+|v|^2}\,x,v)$ for $x\in S^p$, $|v|\le1$; at $Q=1$ they are $(u,y)\mapsto(u,\sqrt{1+|u|^2}\,y)$ for $|u|\le1$, $y\in S^{q-1}$. Glue the side to $N\times[-1,1]$ using $\varphi|_B$ on the sphere coordinates. By [F6] this is $W_\varphi$ up to diffeomorphism. Now exchange $(u,v)$ with $(v,u)$ and reverse the height on the complementary product. The inequalities defining $H$ are invariant, $Q$ changes to $-Q$, and the old outgoing coordinates become the incoming $S^{q-1}\times D^{p+1}$ coordinates. Their disk derivative along $u=0$ is the product normal framing of [F2]. The same side gluing, read backwards, is therefore the elementary band for that dual framed surgery on $M_\varphi$. Applying [F6] with $k=q$ identifies it with the dual trace, after absorbing outer collars; compatible roundings are compared by [[lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]]. Thus both traces have the same supporting manifold up to diffeomorphism. [F2, F4, F6, step 1.1, step 3.1, construct, algebra] ∎
