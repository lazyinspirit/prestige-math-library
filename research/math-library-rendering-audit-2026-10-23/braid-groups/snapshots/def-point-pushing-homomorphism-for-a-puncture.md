---
id: def-point-pushing-homomorphism-for-a-puncture
kind: definition
title: "Point pushing the last puncture"
status: published
origin: pipeline
landmark: true
deps: [def-pure-mapping-class-group-of-a-punctured-disk,
       def-boundary-fixed-mapping-class-group-of-a-punctured-disk,
       cor-pure-braids-are-pure-punctured-disk-mapping-classes,
       def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes,
       lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism,
       thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk,
       thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations,
       def-geometric-braid-with-setwise-endpoints,
       def-ordered-configuration-space,
       def-unordered-configuration-space,
       def-based-loops-and-fundamental-group,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Fadell and Neuwirth, Configuration Spaces, section IV, printed pp. 118-120"
      url: "https://tidsskrift.dk/math/article/download/10517/8538"
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, sections 4.2.1-4.2.3, printed pp. 101-105"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3, author manuscript pp. 5-7"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  audited: 2026-10-02
  precheck: n/a
---

## Definition

Assume the Axiom of Choice, let $n\ge1$, and let $D^2$,
$\operatorname{int}D^2$ and the base configuration $Q_n=(q_1,\dots,q_n)$ be as
in [[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]. Point pushing
holds the first $n-1$ punctures fixed and moves the last one around them.

**The puncture complement.** Put

$$Y_n:=\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\};$$

for $n=1$ the removed set is empty and $Y_1=\operatorname{int}D^2$. The domain
$Y_n$ contains $q_n$, because $q_n$ is distinct from
$q_1,\dots,q_{n-1}$, and every point of $Y_n$ is distinct from the first $n-1$
marked points.

**The ordered loop and its orbit.** Let $\gamma:I\to Y_n$ be a based loop of
$Y_n$ at $q_n$, that is, a continuous map with $\gamma(0)=q_n=\gamma(1)$. Its
**ordered lift** is

$$L_\gamma:I\longrightarrow F_n(\operatorname{int}D^2),\qquad L_\gamma(t):=(q_1,\dots,q_{n-1},\gamma(t)).$$

The $n$ coordinates of $L_\gamma(t)$ are pairwise distinct because
$\gamma(t)\neq q_j$ for $j<n$ and the $q_j$ are pairwise distinct, so
$L_\gamma$ takes values in the ordered configuration space
([[def-ordered-configuration-space]]); it is continuous, being built from
constant maps and $\gamma$, and $L_\gamma(0)=Q_n=L_\gamma(1)$. Composing with
the quotient map $p_n:F_n(\operatorname{int}D^2)\to
C_n(\operatorname{int}D^2)$ gives the based loop

$$\bar\gamma:=p_n\circ L_\gamma:I\longrightarrow C_n(\operatorname{int}D^2), \qquad \bar\gamma(t)=[\,(q_1,\dots,q_{n-1},\gamma(t))\,],$$

of the unordered configuration space at the basepoint $[Q_n]$
([[def-unordered-configuration-space]]).

**The point-pushing class.** Let $\delta$ be the inverse-endpoint boundary map
of [[def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes]].
The **point-pushing homomorphism at the last puncture** is defined on the
path-homotopy class $[\gamma]$ of a based loop $\gamma$ at $q_n$ by

$$\operatorname{Push}_n([\gamma]):=\delta\bigl([\bar\gamma]\bigr)\in \operatorname{Mod}(D^2,Q_n;\partial D^2).$$

**The class is pure.** The tuple $L_\gamma$ is a **pure** geometric braid based
at $Q_n$: it is a tuple of continuous paths in $\operatorname{int}D^2$ with
pairwise distinct values and both the initial tuple $L_\gamma(0)$ and the
terminal tuple $L_\gamma(1)$ equal to $Q_n$
([[def-geometric-braid-with-setwise-endpoints]]), and its raw slice is
$S(L_\gamma)=p_n\circ L_\gamma=\bar\gamma$
([[thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations]]).
Let $\Psi$ be the braid-to-mapping-class isomorphism of
[[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]],
so that $\Psi=\delta\circ(\iota^C_*)^{-1}\circ\Phi$ with
$\Phi([\beta])=(\iota^C_*[S(\beta)])^{-1}$ precomposed with the inverse of the
open-to-closed configuration isomorphism; then

$$\Psi\bigl([L_\gamma]\bigr)=\delta\bigl([S(L_\gamma)]^{-1}\bigr) =\delta\bigl([\,\bar\gamma\,]\bigr)^{-1} =\operatorname{Push}_n([\gamma])^{-1}.$$

Since $L_\gamma$ is pure, $\Psi([L_\gamma])$ lies in
$\operatorname{PMod}(D^2,Q_n;\partial D^2)$ by
[[cor-pure-braids-are-pure-punctured-disk-mapping-classes]], and
$\operatorname{PMod}(D^2,Q_n;\partial D^2)$ is a subgroup of
$\operatorname{Mod}(D^2,Q_n;\partial D^2)$
([[def-pure-mapping-class-group-of-a-punctured-disk]]), so its inverse
$\operatorname{Push}_n([\gamma])$ lies in
$\operatorname{PMod}(D^2,Q_n;\partial D^2)$ as well. Thus the point push of the
last puncture is a *pure* mapping class: it fixes the first $n-1$ punctures and
acts trivially on the marked set. In particular the fixed coordinates do not
merely preserve $Q_n$ setwise; they prevent any exchange of punctures.

**Well-definedness.** The value is independent of the representative of
$[\gamma]$: if $H:I\times I\to Y_n$ is a path homotopy relative to $\{0,1\}$
from $\gamma$ to a second based loop $\gamma'$, then
$(t,u)\mapsto(q_1,\dots,q_{n-1},H(t,u))$ is a path homotopy relative to
$\{0,1\}$ in $F_n(\operatorname{int}D^2)$ from $L_\gamma$ to $L_{\gamma'}$, and
composing it with the continuous map $p_n$ gives a path homotopy relative to
$\{0,1\}$ from $\bar\gamma$ to $\bar\gamma'$: the composite of a continuous
homotopy with a continuous map is continuous and it is constant on
$\{0,1\}\times I$ because $H$ is. Since $\delta$ is
well defined on path-homotopy classes
([[lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism]]), the
class $\operatorname{Push}_n([\gamma])$ depends only on $[\gamma]$.

**Multiplicativity.** Let $\gamma,\gamma'$ be based loops at $q_n$ and let
$\gamma*\gamma'$ be their concatenation, traversed first $\gamma$ then
$\gamma'$ ([[def-based-loops-and-fundamental-group]]). Since concatenation is
computed coordinatewise, $L_{\gamma*\gamma'}(t)=L_\gamma(2t)$ for
$t\le\frac12$ and $L_{\gamma*\gamma'}(t)=L_{\gamma'}(2t-1)$ for
$t\ge\frac12$, that is, $L_{\gamma*\gamma'}=L_\gamma*L_{\gamma'}$; applying the
continuous map $p_n$ gives $\overline{\gamma*\gamma'}=\bar\gamma*\bar\gamma'$.
Hence, by the multiplicativity of $\delta$
([[lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism]]) and the
product convention $[\gamma][\gamma']=[\gamma*\gamma']$ of
[[def-based-loops-and-fundamental-group]],

$$\operatorname{Push}_n\bigl([\gamma][\gamma']\bigr) =\delta\bigl([\overline{\gamma*\gamma'}]\bigr) =\delta\bigl([\bar\gamma][\bar\gamma']\bigr) =\delta\bigl([\bar\gamma]\bigr)\,\delta\bigl([\bar\gamma']\bigr) =\operatorname{Push}_n([\gamma])\,\operatorname{Push}_n([\gamma']).$$

So $\operatorname{Push}_n:\pi_1(Y_n,q_n)\to
\operatorname{PMod}(D^2,Q_n;\partial D^2)$ is a group homomorphism. No choice is
made in the definition itself: the lift of $\bar\gamma$ used to evaluate
$\delta$ is supplied by the evaluation fibration, and its endpoint component is
independent of the lift by the cited well-definedness lemma. The Axiom of
Choice enters only through the evaluation fibration and the isomorphisms
$\Psi$ and $\delta$ built from it.

**No injectivity claim.** The kernel of $\operatorname{Push}_n$ is *not*
computed here. The Birman exact sequence and the resulting injectivity claim
are deferred to the companion pure-braid page. This item only defines
$\operatorname{Push}_n$ and proves that it is a homomorphism into the pure
subgroup.

**Elementary case.** For $n=1$ the domain $Y_1=\operatorname{int}D^2$ carries
no puncture, the first $n-1$ coordinates are absent, the construction above
applies verbatim, and $\operatorname{PMod}(D^2,Q_1;\partial D^2)=
\operatorname{Mod}(D^2,Q_1;\partial D^2)$ because the setwise and pointwise
stabilisers of a one-point marked set coincide
([[def-pure-mapping-class-group-of-a-punctured-disk]]); no injectivity is
claimed in this case either.

## Remarks

- The homomorphism pushes the $n$-th puncture along loops in the complement of
  the other $n-1$ punctures. The first $n-1$ points are frozen throughout, so
  the resulting ambient isotopy moves only the last point among the marked
  points and represents a pure class, even though the definition itself only
  records the unordered loop.
- The definition is the disk boundary-fixed version of the classical
  point-pushing construction: the evaluation boundary map plays the role of the
  connecting homomorphism, and the inverse-endpoint convention of the library
  is what makes $\operatorname{Push}_n$ a homomorphism rather than an
  anti-homomorphism.
- The deferred injectivity is exactly the content of Birman's exact sequence
  for the disk, and it is stated on the pure-braid page after the relevant
  higher homotopy group has been shown to vanish; the present item must not be
  used as if it already contained that theorem.
