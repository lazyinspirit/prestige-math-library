---
id: "lem-surgery-gluing-has-a-canonical-smooth-structure-up-to-diffeomorphism"
kind: "lemma"
title: "The surgery gluing has a canonical smooth structure up to diffeomorphism"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
deps: ["def-framed-embedded-surgery-sphere", "def-p-surgery-on-a-smooth-m-manifold", "lem-collar-gluing-and-corner-smoothing-give-transitivity", "thm-the-double-has-a-well-defined-smooth-structure", "thm-collar-neighborhood-theorem", "def-smooth-collar-of-a-manifold-boundary", "def-diffeomorphism-and-local-diffeomorphism-of-manifolds", "def-countable-choice", "lem-isotopy-extension-for-a-compact-source-with-boundary", "thm-smooth-inverse-function-theorem-on-manifolds", "thm-smooth-dependence-of-ode-solutions-on-parameters", "thm-smooth-partitions-of-unity-exist-on-manifolds", "thm-time-dependent-vector-fields-have-local-smooth-evolution-operators"]
justified_by: []
aliases: []
proof_strategy: "direct construction from the collar presentations of the two pieces, then isotopy invariance via ambient isotopy extension"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 3 §3.4.1, printed p. 72 (the technique of straightening the angle in order to get a well-defined smooth structure on M', with references to the standard treatments)"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.1, Definition 10.1 (vi) and the surrounding convention, printed p. 195 (M'=cl.(M\\g(S^n×D^{m-n}))∪D^{n+1}×S^{m-n-1})"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.1, printed p. 196 (the modification gives M' with the same boundary as M; it is determined by phi and by the diffeotopy class of phi, by Theorem 2.4.2)"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $M$ be a smooth
$m$-manifold, $0\le p\le m-1$, $q=m-p$, and let $\varphi$ be a framed embedded
surgery sphere in $M$. Write
$N=M\setminus\varphi(S^p\times\operatorname{int}D^q)$ for the complement of the
open tubular piece. Then:

(i) $N$ and $D^{p+1}\times S^{q-1}$ are smooth manifolds sharing the boundary component
$S^p\times S^{q-1}$ under the identification induced by $\varphi$, and gluing
them along collars of this common boundary, with the seam smoothed in the
standard way, gives a smooth $m$-manifold $M_\varphi$ without new boundary when
$M$ is closed, respectively with boundary $\partial M$ in general;

(ii) any two collar systems and compatible smoothings give smooth structures
related by a diffeomorphism equal to the identity outside an arbitrarily small
neighbourhood of the seam;

(iii) if $\varphi_t$ is a smooth isotopy of framed embeddings of
$S^p\times D^q$ into $\operatorname{int}M$, constant for $t$ near $0$ and $1$,
then $M_{\varphi_0}$ and $M_{\varphi_1}$ are diffeomorphic by a
diffeomorphism supported near the swept region.

Consequently the diffeomorphism type of the $p$-surgery depends only on the
isotopy class of the framed embedding, and the construction of the definition
is unambiguous up to diffeomorphism.

## Facts & Assumptions

**Given:** a smooth $m$-manifold $M$, integers $0\le p\le m-1$ and $q=m-p$, a framed embedded surgery sphere $\varphi$ with image in the interior, and the complement $N=M\setminus\varphi(S^p\times\operatorname{int}D^q)$.

[F1] [[def-framed-embedded-surgery-sphere]]: $\varphi:S^p\times D^q\to M$ is a smooth embedding with image in the interior of $M$; its restriction to the disk factor exhibits a trivialization of the normal bundle of the underlying sphere $\varphi_0$, and the framing is part of the data.

[F2] [[def-p-surgery-on-a-smooth-m-manifold]]: the $p$-surgery glues $M\setminus\varphi(S^p\times\operatorname{int}D^q)$ to $D^{p+1}\times S^{q-1}$ along the boundary identification induced by $\varphi$, and its smooth structure is the one given by collars of the two pieces together with a compatible smoothing of the seam. The construction takes place in the interior of $M$ and leaves $\partial M$ unchanged.

[F3] [[thm-collar-neighborhood-theorem]]: every smooth manifold with boundary has a smooth collar ([[def-smooth-collar-of-a-manifold-boundary]]), so each of the two pieces has its boundary identified with a product neighbourhood.

[F4] [[lem-collar-gluing-and-corner-smoothing-give-transitivity]], proof steps 1.1–2.1: for the supplied bordisms, signed collar charts have transitions given by boundary-coordinate changes and the identity in the normal coordinate. We reproduce that local atlas construction below for the two surgery pieces; neither piece is assumed to be a compact bordism.

[F5] [[thm-the-double-has-a-well-defined-smooth-structure]]: under $\mathrm{AC}_\omega$, a collar gives the labelled double a smooth boundaryless structure compatible with the original structures on its two halves. Its statement asserts seam-fixing, half-preserving comparison; support control will be proved below.

[F6] [[thm-smooth-inverse-function-theorem-on-manifolds]]: a smooth map with invertible differential is a local diffeomorphism; we apply this to smooth extensions across the boundary.

[F7] [[thm-smooth-dependence-of-ode-solutions-on-parameters]]: local solutions of a jointly smooth differential equation depend smoothly on their initial state and parameters.

[F9] [[thm-smooth-partitions-of-unity-exist-on-manifolds]]: under $\mathrm{AC}_\omega$, an open cover of a smooth manifold admits a subordinate smooth partition of unity.

[F10] [[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]]: smooth vector fields have local smooth flows with unique solution curves.

[F8] [[lem-isotopy-extension-for-a-compact-source-with-boundary]]: Assume $\mathrm{AC}_\omega$. Let $V$ be a compact smooth $n$-manifold with boundary, $N$ a smooth $n$-manifold without boundary and $F:V\times I\to N$ a smooth isotopy of embeddings, constant near the ends. Then for every open neighbourhood $W$ of $F(V\times I)$ there is a smooth $H:N\times I\to N$ with $H_0=\operatorname{id}_N$, every $H_t$ a diffeomorphism, $H_t\circ F_0=F_t$ for all $t\in I$, and $H_t=\operatorname{id}_N$ outside $W$ for every $t$.

## Proof

**Given:** the data of the statement; write $P=\varphi(S^p\times D^q)$ for the closed tubular piece, so that $N=M\setminus\varphi(S^p\times\operatorname{int}D^q)$ contains $P$'s boundary.

1.1 In the product normal form of $\varphi$, a point of $\varphi(S^p\times\partial D^q)$ has a chart in which $M$ is an open subset of $\mathbb R^m$ and the removed piece is the open half-space-product $\mathbb R^p\times\operatorname{int}D^q$; the complement there is locally a closed half-space, so $N$ is a smooth manifold with boundary $\partial M\sqcup\varphi(S^p\times S^{q-1})$, and the new boundary component is a closed embedded $(m-1)$-manifold. [F1, F2, given]

1.2 Put $B=S^p\times S^{q-1}$ and $P'=D^{p+1}\times S^{q-1}$. The latter has boundary $\partial P'=B$, and $\varphi|_B$ is a diffeomorphism from $B$ onto the new boundary part of $N$. This uses the supplied embedding on its boundary, rather than identifying that restriction with its derivative framing along the core. [F1, F2, algebra]

2.1 Choose collars $c_N:B\times[0,\varepsilon)\to N$ and $c_{P'}:B\times[0,\varepsilon)\to P'$, with $c_N(b,0)=\varphi(b)$ and $c_{P'}(b,0)=b$. On the quotient $N\cup_{\varphi|_B}P'$, define $C(b,s)=[c_N(b,-s)]$ for $s\le0$ and $C(b,s)=[c_{P'}(b,s)]$ for $s\ge0$. This is a homeomorphism onto an open seam neighbourhood: each half is a collar homeomorphism, and their relatively open half-images together are saturated in the disjoint union. For each boundary chart $y$ on $B$, use $(y(b),s)$ as a seam chart. Two such charts have transition $(y_2\circ y_1^{-1},s)$; an overlap with a chart away from the seam lies in $s<0$ or $s>0$, where it is a smooth collar-coordinate change. These charts and the original charts away from $B$ generate a smooth atlas. Every seam point is interior, and the remaining boundary is exactly $\partial M$. A compatible seam smoothing is this signed collar presentation after straightening its collar coordinate. [F2, F3, F4, step 1.1, step 1.2, construct]

3.1 The quotient is Hausdorff and second countable. Its quotient map from $N\sqcup P'$ is closed: saturating a closed set adds only images of its intersections with the compact seam, which are compact and closed in the opposite Hausdorff piece. Distinct quotient points have disjoint finite fibres; finite Hausdorff separation gives disjoint open sets about those fibres, and the complements of the quotient images of their closed complements give disjoint quotient neighbourhoods. The open cover by the two pieces minus their seam and the signed collar has a countable base, by the countable bases of the pieces and of $B\times(-\varepsilon,\varepsilon)$. Thus the atlas defines a smooth $m$-manifold. If $M$ is closed, $N$ is compact, so the quotient is compact with empty boundary. This proves (i). [step 2.1, given]

4.1 Fix an open seam neighbourhood $U$ in the quotient. On either piece $Q=N$ or $Q=P'$, write $c_0,c_1$ for the old and new collars of its compact boundary part $B$. Extend $c_0$ to the other boundary parts using [F3], and form the smooth boundaryless double $DQ$ using [F5]. Near $B$ in its positive half put $X_i=(c_i)_*\partial_t$. Extend their coordinate components locally across $B$ and combine them by [F9]; this retains the original fields on a smaller positive-side neighbourhood. In the signed $c_0$ coordinate $r$, both $dr(X_i)>0$ along $B$, and hence on a smaller neighbourhood. Choose a smooth $\theta:[0,1]\to[0,1]$ equal to $0$ near $0$ and $1$ near $1$, and flow $X_s=(1-\theta(s))X_0+\theta(s)X_1$ from $b\in B$ for time $t\ge0$, writing the result as $C_s(b,t)$. Local flow existence, uniqueness and smooth parameter dependence give a jointly smooth family. Its differential in $(b,t)$ at $t=0$ is $(v,a)\mapsto v+aX_s(b)$, an isomorphism. Local inverses exist by [F6]; uniqueness and strict increase of $r$ prevent two such trajectories from meeting with different boundary initial points or different flow times. Compactness of $[0,1]\times B$ therefore permits one $\delta>0$ for which all $C_s:B\times[0,\delta]\to DQ$ are embeddings, constant in $s$ near its endpoints, with $C_0=c_0$ and $C_1=c_1$ on this band. This is the local collar-family construction of the double theorem's proof, rather than an additional assertion of its statement. [F3, F5, F6, F7, F9, F10, step 1.2, step 3.1, construct]

5.1 Choose an open neighbourhood $W$ of $B$ in $DQ$ disjoint from its other seam parts, with its intersection with the positive half contained in the inverse image of $U$ in $Q$. Shrink $\delta$ so the whole compact swept collar band of step 4.1 lies in $W$; this is possible because $C_s(b,0)=b$ uniformly on the compact set $[0,1]\times B$. Apply [F8] to the compact smooth $m$-manifold with boundary $V=B\times[0,\delta]$, the boundaryless $m$-manifold $DQ$, and the isotopy $F_s(b,t)=C_s(b,t)$. It gives an ambient isotopy $A_s$ equal to the identity outside $W$ and satisfying $A_s\circ c_0=C_s$ on the band. Every $A_s$ fixes $B$ pointwise, and fixes all other seam parts because they lie outside $W$. A point off the seam cannot cross it during this isotopy: bijectivity and pointwise seam fixing imply $A_s^{-1}(\partial Q)=\partial Q$. Thus $A_s$ preserves the positive half. Its time-one restriction $H_Q$ is a boundary-fixing diffeomorphism of $Q$, equal to the identity outside the inverse image of $U$, and $H_Q(c_0(b,t))=c_1(b,t)$ near $B$. [F8, step 4.1, construct]

6.1 The maps $H_N,H_{P'}$ descend to a bijection of the quotients because they fix the identified boundary points. In the old source and new target seam coordinates it is $(b,s)\mapsto(b,s)$; away from the seam it and its inverse are the smooth maps on the pieces. Consequently it is a diffeomorphism equal to the identity outside $U$. A compatible seam smoothing is straightened into its signed collar presentation as in step 2.1, so the same comparison applies. Since $U$ was arbitrary, this proves (ii). [step 2.1, step 3.1, step 5.1]

7.1 Finally let $\varphi_t$ be a smooth isotopy of framed embeddings, constant near the ends, with images in the interior of $M$, and put $F(x,y,t):=\varphi_t(x,y)$ on the compact manifold with boundary $S^p\times D^q$ with values in the boundaryless manifold $N:=\operatorname{int}M$; choose an open neighbourhood $W\subseteq\operatorname{int}M$ of the swept image with $\overline W$ compact in $\operatorname{int}M$. Apply [F8] with $V=S^p\times D^q$ and $N=\operatorname{int}M$: there is a smooth $H:\operatorname{int}M\times I\to\operatorname{int}M$ with $H_t\circ\varphi_0=\varphi_t$ for every $t$, every $H_t$ a diffeomorphism, and $H_t$ the identity outside $W$. Since $H_1$ is the identity outside the compact set $\overline W\subseteq\operatorname{int}M$, it extends by the identity across $\partial M$ to a diffeomorphism $\widehat H:M\to M$ agreeing with $\varphi_1\circ\varphi_0^{-1}$ on $\varphi_0(S^p\times D^q)$; hence $\widehat H$ carries the complement of $\varphi_0(S^p\times\operatorname{int}D^q)$ onto the complement of $\varphi_1(S^p\times\operatorname{int}D^q)$ and satisfies $\widehat H\circ\varphi_0=\varphi_1$ on the whole product, in particular on the common boundary sphere, so together with the identity on the glued piece $D^{p+1}\times S^{q-1}$ it descends, using collars on the second complement transported by $\widehat H$, to the required diffeomorphism $M_{\varphi_0}\to M_{\varphi_1}$ supported near the swept region. Other collar choices are compared by (ii); no uniqueness of the resulting diffeomorphism is asserted. This proves (iii), and with it the concluding isotopy-invariance of the construction. [F1, F2, F8, step 2.1, step 6.1] ∎
