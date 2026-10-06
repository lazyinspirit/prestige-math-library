---
id: "prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class"
kind: "proposition"
title: "Surgery on a normal map preserves its normal bordism class"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 6
deps: ["def-p-surgery-on-a-smooth-m-manifold", "def-surgery-trace-cobordism", "thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold", "lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle", "def-degree-one-normal-map-for-the-surgery-program", "def-oriented-smooth-cobordism", "lem-fundamental-class-of-a-boundary-pushes-forward-to-zero", "def-stable-normal-bundle-of-a-compact-smooth-manifold", "thm-stable-normal-bundle-is-independent-of-the-embedding", "cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map", "thm-relative-whitney-approximation-for-manifold-valued-maps", "prop-relative-cw-inclusions-are-cofibrations", "def-countable-choice"]
justified_by: []
aliases: []
proof_strategy: "extend the map over the trace handle using the null-homotopy, smooth it relatively, and read off the normal bordism"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 3 §3.4.3, Theorem 3.59 (1) and (4), printed pp. 75-76 (the commutative bundle diagram over the square and over the handle, and the normal map (F,F): TW⊕R^{a+b}->xi⊕R^b extending (f,f) with effect normally bordant to (f,f)); Remark 3.63, printed p. 78"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.1, Definition 10.6 (a b-framed n-embedding includes the extension of (f,b) to a normal map on the trace), Proposition 10.16 (ii) (the b-framing section), printed pp. 196-202"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.1, Theorem 7.1.1 with proof, printed pp. 197-198 (xi in pi_r(f) determines a regular homotopy class of immersions, and given an embedding one can do surgery to obtain another normal map)"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $X$ and $M$ be
closed connected oriented smooth $m$-manifolds and let $(f,b):M\to X$ be a
degree-one normal map with respect to the stable normal bundle $\nu_X$ of $X$
([[def-degree-one-normal-map-for-the-surgery-program]]), let $0\le p\le m-1$
and $q=m-p$, and let $\varphi$ be a framed embedded surgery sphere in $M$ with
underlying sphere $\varphi_0$. Require the framing to be orientation-compatible
with $M$ in the trace sense of [[def-surgery-trace-cobordism]]; this condition
is essential for the two attaching components when $p=0$.

A **$b$-framed surgery datum** on $(f,b)$ along $\varphi$ consists of:

- a null-homotopy $h:D^{p+1}\to X$ of $f\circ\varphi_0$ (for $p\ge1$ and supplied basepoint data this represents an
  element of $\pi_{p+1}(f)$; for $p=0$ no group structure on $\pi_1(f)$ is asserted);
- for the extension $F:W_\varphi\to X$ of $f$ over the trace constructed from
  $h$ in (i) below, an extension $B:\nu_{W_\varphi}\to F^*\nu_X$ of the stable
  isomorphism $b$ to a stable isomorphism of stable normal bundles over the
  trace.

The second item is the extension of the normal data over the trace handle; it
is taken as part of the datum, as in the source's definition of a $b$-framed
embedding (Ranicki, Definition 10.6). The datum requires this extension for the chosen framing and chosen extension
$F$; triviality of the sphere normal bundle and a null-homotopy alone do not
supply it. Ranicki Definition 10.6 includes $B$ as part of the datum. Let $W_\varphi$ be the trace, oriented as an
oriented bordism from $M$ to $M_\varphi$
([[def-surgery-trace-cobordism]], [[def-oriented-smooth-cobordism]]). Then:

(i) $f$ extends to a continuous map $F:W_\varphi\to X$ restricting to $f$ on the
incoming face $M$ and to a map $f_\varphi$ on the outgoing face $M_\varphi$;
it may be taken to agree with $f\circ\operatorname{pr}_M$ on
$M\times[0,1]$. If $f$ is smooth, $F$ can be chosen smooth before supplying
the bundle extension $B$; a continuous nonsmooth $f$ cannot be the restriction
of a smooth $F$;

(ii) the stable isomorphism $B$ restricts to $b$ over $M$ and to a stable
isomorphism $b_\varphi:\nu_{M_\varphi}\to f_\varphi^*\nu_X$ over $M_\varphi$;

(iii) $f_\varphi$ has degree one, so $(f_\varphi,b_\varphi)$ is a degree-one
normal map, and $(F,B)$ is a normal bordism from $(f,b)$ to
$(f_\varphi,b_\varphi)$: the surgery step changes the source manifold and map
but preserves the normal bordism class;

(iv) for $p\ge1$ in the below-middle range $p\le q-2$ the class killed by the step is the
class $z=[\varphi_0]\in\pi_p(M)$: it lies in the kernel of
$\pi_p(M)\to\pi_p(M_\varphi)$.

## Facts & Assumptions

**Given:** the degree-one normal map $(f,b):M\to X$ over the closed connected oriented smooth $m$-manifold $M$, the integers $0\le p\le m-1$ and $q=m-p$, the framed embedded surgery sphere $\varphi$, the null-homotopy $h$ of $f\circ\varphi_0$, and the extension $B$ of the stable bundle data.

[F1] [[def-degree-one-normal-map-for-the-surgery-program]]: a normal map $(f,b):M\to X$ with respect to a vector bundle $\xi$ over $X$ consists of a map $f$ together with a stable isomorphism $b:\nu_M\to f^*\xi$; it is of degree one when $f_*[M]=[X]$ for the class $[X]$ generating $H_n(X;\mathbb Z)$, fixed as part of the target datum, and in the manifold-target case $\xi=\nu_X$ is the stable normal bundle. A normal bordism between degree-one normal maps over the same target datum consists of an oriented bordism $(W;M_0,M_1)$ with a map $F:W\to X$ restricting to the given maps and a stable isomorphism $B:\nu_W\to F^*\xi$ restricting to the given data over the faces.

[F2] [[def-surgery-trace-cobordism]]: the trace is $W_\varphi=(M\times[0,1])\cup_{\varphi\times\{1\}}(D^{p+1}\times D^q)$, with incoming face $M\times\{0\}$, core disk, cocore disk and belt sphere; when $M$ is oriented it is an oriented bordism from $M$ to its outgoing face.

[F3] [[thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold]]: the outgoing face is diffeomorphic to $M_\varphi$, by the identity on $M\setminus\varphi(S^p\times\operatorname{int}D^q)$; the two-sided homotopy models give $W_\varphi\simeq M\cup_{\varphi_0}D^{p+1}$ relative to $M$.

[F4] [[def-stable-normal-bundle-of-a-compact-smooth-manifold]] and [[thm-stable-normal-bundle-is-independent-of-the-embedding]]: stable normal bundles are equivalence classes under adding trivial summands, independent of the Euclidean embedding, and a stable isomorphism is an isomorphism after adding trivial summands on both sides.

[F5] [[cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map]] and [[thm-relative-whitney-approximation-for-manifold-valued-maps]]: a continuous map from a manifold to a manifold with target data prescribed and smooth on a neighbourhood of a closed subset may be replaced by a smooth map agreeing there and homotopic to it relative to that set.

[F6] [[lem-fundamental-class-of-a-boundary-pushes-forward-to-zero]]: for a compact oriented smooth $(m+1)$-manifold $W$ with boundary and inclusion $i:\partial W\hookrightarrow W$, one has $i_*[\partial W]=0$ in $H_m(W;R)$.

[F7] [[def-oriented-smooth-cobordism]]: in an oriented bordism the induced boundary orientation of the incoming face is the negative of the supplied orientation and that of the outgoing face is the supplied orientation, so $[\partial W]=-[M]+[M_\varphi]$ under the boundary decomposition.

[F8] [[lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle]]: for $p\le q-2$ the class represented by the underlying sphere lies in the kernel of $\pi_p(M)\to\pi_p(M_\varphi)$.

[F9] [[prop-relative-cw-inclusions-are-cofibrations]]: a relative CW pair $(Z,A)$ has the homotopy extension property, so a null-homotopy on $A$, starting at the restriction of a constant map on $Z$ when read backwards, extends to a homotopy on $Z$; with a CW structure on $D^{p+1}$ in which $S^p$ is a subcomplex, the product CW structure makes the attaching region $S^p\times D^q$ a subcomplex of the handle $D^{p+1}\times D^q$.

## Proof

**Given:** the objects and hypotheses of the statement.

1.1 Contract the disk factor to see that $f\circ\varphi$ on $S^p\times D^q$ is homotopic to $f\circ\varphi_0\circ\operatorname{pr}_{S^p}$, which the supplied disk $h$ makes null-homotopic. The attaching region is a subcomplex of the product handle. Start with the constant map on the handle and apply [F9] to the reversed null-homotopy on its attaching region. At the end this gives a handle map extending $f\circ\varphi$, and its union with $f\circ\operatorname{pr}_M$ on the cylinder gives a continuous $F:W_\varphi\to X$. This proves the continuous assertion in (i). [F2, F9, given, construct]

1.2 By hypothesis the stable bundle isomorphism $B:\nu_{W_\varphi}\to F^*\nu_X$ extends $b$, and by [F3] the outgoing face is identified with $M_\varphi$, whose stable normal bundle restricts to $\nu_{W_\varphi}$ along the face; hence $b_\varphi:=B|_{M_\varphi}$ is a stable isomorphism $\nu_{M_\varphi}\to f_\varphi^*\nu_X$ over the outgoing face, and $B$ restricts to $b$ over the incoming face, with the identifications of [F4]. This proves (ii). [F2, F3, F4, given]

2.1 If $f$ is smooth, first prescribe the extension on a small collar on both sides of the attaching region by $f(\varphi(x,y))$, constant in the transverse collar coordinate; the boundary-local extension convention and a slightly extended disk factor give a smooth map on a neighbourhood of the cylinder in the rounded trace. Its restriction to the inner collar boundary is homotopic to $f\circ\varphi$, hence null-homotopic, so the reversed-HEP argument of step 1.1 extends it continuously over the remaining handle. Apply [F5] relative to the closed cylinder, where this map is now smooth on a neighbourhood, to obtain a smooth $F$ with the same cylinder values. Supply $B$ for this chosen $F$, as required by the datum; the proof does not keep a fixed bundle map while changing its covered base map. If $f$ is merely continuous, use the continuous $F$ of step 1.1. This proves the remaining assertion in (i). [F2, F5, F9, step 1.1, construct]

2.2 Degree of $f_\varphi$. The compact oriented $(m+1)$-manifold $W_\varphi$ has boundary $M\sqcup M_\varphi$, and by [F6] the boundary class pushes forward to zero in $H_m(W_\varphi;\mathbb Z)$. Applying $F_*$ and using that $F$ restricts to $f$ and $f_\varphi$ gives $f_*[M]-(f_\varphi)_*[M_\varphi]=0$, with the signs fixed by the orientation convention of [F7]; since $f_*[M]=[X]$ by hypothesis, $(f_\varphi)_*[M_\varphi]=[X]$, so $f_\varphi$ has degree one in the total-fundamental-class sense, even if $M_\varphi$ is disconnected (which can happen when $q=1$). [F6, F7, step 1.1]

3.1 The data $(W_\varphi,F,B)$ are an oriented bordism from $M$ to $M_\varphi$ together with a map to $X$ restricting to $f$ and $f_\varphi$ on the faces and a stable isomorphism $\nu_{W_\varphi}\to F^*\nu_X$ restricting to $b$ and $b_\varphi$: this is exactly a normal bordism in the sense of [F1]. Hence $(f_\varphi,b_\varphi)$ is a degree-one normal map normally bordant to $(f,b)$, and the normal bordism class is preserved. This proves (iii). [F1, F2, step 1.2, step 2.2]

4.1 If $p\ge1$ and $p\le q-2$, the class $z=[\varphi_0]\in\pi_p(M)$ represented by the underlying sphere lies in the kernel of $\pi_p(M)\to\pi_p(M_\varphi)$ by [F8], independently of the bundle data. This proves (iv). [F8, given] ∎
