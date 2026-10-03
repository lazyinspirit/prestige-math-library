---
id: def-closure-of-a-geometric-braid
kind: definition
title: "The closure of a geometric braid"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-geometric-braid-with-setwise-endpoints, def-circle-as-real-line-mod-integers,
       def-euclidean-spheres-and-closed-balls, def-product-topology, def-smooth-embedding,
       lem-every-geometric-braid-is-braid-isotopic-to-a-smooth-braid, def-countable-choice]
justified_by: [lem-closure-depends-only-on-the-braid-isotopy-class]
aliases: []
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2 (printed pp. 12-26) and Figures 3-12"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); section 2.1, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
    - title: "Traczyk, A new proof of Markov's braid theorem, Banach Center Publications 42 (1998), 409-419; sections 1-2 and Figures 1-2"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
---

## Definition

Let $n\ge0$ and let $\beta=(z_1,\ldots,z_n)$ be a geometric braid with
the fixed real basepoints $q_j=((2j-n-1)/(4(n+1)),0)$ and endpoint
permutation $\pi$, as in [[def-geometric-braid-with-setwise-endpoints]].
Identify the disk with $\{x\in\mathbb C:|x|<1\}$ and put
$$V=(D^\circ\times[0,1])/((x,1)\sim(x,0)).$$
The quotient and its topology use [[def-product-topology]] and the circle
$\mathbb R/\mathbb Z$ of [[def-circle-as-real-line-mod-integers]].
The interval images
$$s_j=\{[(z_j(t),t)]:0\le t\le1\},\qquad \operatorname{cl}(\beta)=\bigcup_{j=1}^n s_j$$
are the **closure in the open solid torus**. In general an individual
$s_j$ is an interval image, not a closed circle: its last point is the
first point of $s_{\pi(j)}$.

**Components and orientation.** For a cycle
$(j,\pi(j),\ldots,\pi^{k-1}(j))$ concatenate these $k$ strand maps in
that order, with parameter in $[0,k]$. Their endpoints agree in $V$,
so the concatenation factors through $\mathbb R/k\mathbb Z$.
It is injective on this circle: points at distinct nonintegral heights
can agree only when their parameters have the same fractional part,
and the distinct strands at that height have distinct disk coordinates;
at integral heights only the specified adjacent endpoints agree.
Thus each cycle gives an embedded circle. Different cycles give
disjoint circles, and every strand belongs to exactly one cycle.
These circles are precisely the connected components of the closure.
The orientation is increasing concatenation parameter. In particular
the number of components equals the number of cycles of $\pi$.

**The standard axis and fixed framing.** In
$S^3=\{(z,w)\in\mathbb C^2:|z|^2+|w|^2=1\}$, as in
[[def-euclidean-spheres-and-closed-balls]], set
$$A=\{(0,w):|w|=1\},\qquad P_\theta=\{(z,w)\in S^3:z\ne0,\ \arg z=\theta\}.$$
Fix the following particular diffeomorphism, including its disk framing:
$$\varphi([(x,t)])=  \bigl(\sqrt{1-|x|^2}\,e^{2\pi it},x\bigr):  V\longrightarrow S^3\setminus A.$$
Its inverse has disk coordinate $x=w$ and circle coordinate
$[t]=[\arg z/(2\pi)]$. Every $P_\theta$ is consequently an open disk.
The **raw topological oriented closure** is
$$\widehat\beta_{\mathrm{top}}=\varphi(\operatorname{cl}(\beta)).$$
This explicit $\varphi$ is part of the construction; the definition
does not allow an arbitrary page-preserving change of framing.

**Page intersections and smooth representatives.** The whole closure
meets every page in exactly $n$ points. A component belonging to a
$\pi$-cycle of length $k$ meets each page in exactly $k$ points:
at any fractional height it uses exactly those $k$ distinct strands.
The page coordinate of its concatenation is $[t]$, for
$t\in\mathbb R/k\mathbb Z$, so its oriented degree is $+k$.
If all disk-coordinate strand maps are smooth and have all positive-order derivatives
zero at their endpoints, their cycle concatenations have matching jets
at every seam. The page coordinate has nonzero derivative, so the
result is a smooth embedding of disjoint oriented circles, in the
sense of [[def-smooth-embedding]]. For an endpoint-flat smooth braid, its literal $\varphi$-image is therefore a smooth oriented link and is denoted $\widehat\beta$.

**Closure in the smooth oriented-link category.** The raw image need not be smooth, even if individual strands are smooth but their endpoint jets fail to match at the cycle seams. For an arbitrary continuous braid, assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and choose a smooth representative $\beta_s$ by [[lem-every-geometric-braid-is-braid-isotopic-to-a-smooth-braid]]. Make it endpoint-flat by composing all disk-coordinate strands with a fixed smooth nondecreasing $\psi:I\to I$, equal to $0$ near $0$ and $1$ near $1$. Interpolation of height maps $(1-u)t+u\psi(t)$ is an endpoint-fixed braid isotopy, because every strand is evaluated at the same height. The smooth-category closure of $\beta$ is the oriented-link isotopy class of this chosen model's literal $\varphi$-image; when a subset is needed, use that chosen closed-braid representative. Independence of the representative is proved by [[lem-closure-depends-only-on-the-braid-isotopy-class]]. Page and cycle properties refer to the chosen constructed closed braid, with the same number of strands and endpoint permutation as $\beta$.

If $\beta$ already has smooth strands with matching cycle-seam jets, in particular if it is endpoint-flat, its literal raw image is a smooth link and is retained as $\widehat\beta$. The raw quotient, fixed $\varphi$, finite cycles, page counts and trivial closures remain choice-free. Finite elementary words have explicit smooth endpoint-flat models, so forming their literal closures also requires no choice assumption; $\mathrm{AC}_\omega$ is used for the general continuous-representative convention and its independence theorem.

**The trivial closure.** For the constant braid its circles are
$\{(\sqrt{1-q_j^2}e^{2\pi it},q_j):[t]\in\mathbb R/\mathbb Z\}$.
They are latitudes of the sphere
$S=\{(z,w)\in S^3:\operatorname{Im}w=0\}$, with
$\operatorname{Re}w=q_j$. Each northern cap
$C_j=\{p\in S:\operatorname{Re}w(p)\ge q_j\}$ is a smooth disk:
stereographic coordinates on $S$ give radius
$\sqrt{(1-q_j)/(1+q_j)}$ for this cap. To make their spanning disks
disjoint, let $e$ be the unit vector in the $\operatorname{Im}w$
direction, set $\varepsilon=\pi/16$ and
$f_j(p)=\varepsilon(\operatorname{Re}w(p)-q_j)$ on $C_j$, and use
$$F_j(p)=\cos(f_j(p))p+\sin(f_j(p))e.$$
The boundary is fixed. The tubular parametrization
$(p,s)\mapsto\cos(s)p+\sin(s)e$ is injective for $|s|<\pi/2$,
and $0\le f_j<\pi/8$. On overlapping caps, if $q_i<q_j$ then
$f_i-f_j=\varepsilon(q_j-q_i)>0$, so their graphs are disjoint.
Thus these are pairwise disjoint smooth spanning disks. The trivial
$n$-braid closes to the oriented $n$-component unlink; for $n=1$
this is the unknot.

At $n=0$ all strand and cycle unions are empty, every page has zero intersections,
and the closure is the empty link. The basepoint list and disk constructions
above then have no entries.
