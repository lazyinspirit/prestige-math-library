---
id: lem-two-disjoint-circles-in-s-two-cobound-an-annulus
kind: lemma
title: "Two disjoint circles in the two-sphere cobound an annulus"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-jordan-brouwer-separation, lem-jordan-schoenflies-extension-for-plane-curves,
       def-axiom-of-choice, def-smooth-embedding, def-one-point-compactification,
       cor-components-of-open-subsets-of-rn-are-polygonally-connected,
       lem-finite-plane-graph-ear-and-face-facts,
       thm-euclidean-tubular-neighbourhood-theorem]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2, printed pp. 13-16: two disjoint circles in S^2 cobound an annulus, used in the Yamada-Vogel height argument"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Carsten Thomassen, The Jordan-Schoenflies Theorem and the Classification of Surfaces, American Mathematical Monthly 99 (1992), 116-130; crosscut and annulus arguments"
      url: "https://people.math.wisc.edu/~dymarz/751/thomass.pdf"
---

## Statement

Assume the Axiom of Choice. Let $C,C'$ be two disjoint smoothly embedded
circles in $S^2$ ([[def-smooth-embedding]]). Then $S^2\setminus(C\cup C')$ has
exactly three components: two of them are open disks and one of them is an open
annulus whose boundary is $C\cup C'$. Consequently $C$ and $C'$ cobound a
unique annulus $A$, and each of the two complementary disks is bounded by one of
the circles.

## Facts & Assumptions

**Given:** AC, two disjoint smoothly embedded circles $C,C'$ in $S^2$, and the standard model $S^2=\mathbb R^2\cup\{\infty\}$ as the one-point compactification of the plane ([[def-one-point-compactification]]).

[F1] Assume AC. The image of a topological embedding $S^1\hookrightarrow S^2$ has exactly two complementary path components, and it is their common boundary; for an embedding into $\mathbb R^2$ there are exactly two complementary components, one bounded and one unbounded, with the curve as common boundary ([[thm-jordan-brouwer-separation]]). AC is inherited only from Alexander duality.

[F2] Assume AC. Every homeomorphism between Jordan curves in $\mathbb R^2$ extends to a homeomorphism of $\mathbb R^2$ mapping the bounded complementary component of the first onto the bounded complementary component of the second; in particular each closed bounded Jordan region is a closed $2$-disk ([[lem-jordan-schoenflies-extension-for-plane-curves]]).

[F3] A smooth embedding of $S^1$ is injective, an immersion, and a homeomorphism onto its image, hence a Jordan curve ([[def-smooth-embedding]]).

[F4] Assume AC. A smoothly embedded compact submanifold $S\subseteq\mathbb R^m$ has a tubular neighbourhood: there is a positive smooth function $\delta$ on $S$ such that the normal addition map on $\{(p,v)\in N^\perp S:\lvert v\rvert<\delta(p)\}$ is a diffeomorphism onto an open neighbourhood of $S$ ([[thm-euclidean-tubular-neighbourhood-theorem]]).

[F6] Every open connected subset of $\mathbb R^n$ is polygonally connected, hence path connected ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

[F8] Assume AC. Let a finite $2$-connected graph be drawn in the plane by simple arcs meeting only at common endpoints, let one cycle $C$ be drawn as a Jordan curve, and let every other edge be a simple polygonal arc whose relative interior lies in the bounded component of $\mathbb R^2\setminus C$. Then every component of the complement of the drawing has a graph cycle as its boundary, and $V-E+F=2$ where $F$ is the number of complement components ([[lem-finite-plane-graph-ear-and-face-facts]]).

## Proof

**Proof technique:** direct.

1.1 **Reduction to a planar picture and Jordan–Brouwer.** By Jordan separation, $C$ has two complementary components and the connected circle $C'$ lies in one. Choose $o$ in the other component; in the model $S^2=\mathbb R^2\cup\{\infty\}$ of the Given we may suppose $o=\infty$, since otherwise we replace the model by its image under a smooth rotation of $S^2$ carrying $o$ to $\infty$; the number of complementary components and their homeomorphism types are unchanged by a homeomorphism. This pole choice puts $C'$ in the bounded component of $\mathbb R^2\setminus C$. Then $C,C'\subset\mathbb R^2$, and by [F3] and [F1] each curve has exactly two complementary components with the curve as their common boundary; write $D$ and $D'$ for the bounded components of $\mathbb R^2\setminus C$ and $\mathbb R^2\setminus C'$. By [F2] the closed regions $\overline D$ and $\overline{D'}$ are closed $2$-disks, hence $D$ and $D'$ are open disks. [F1, F2, F3, given]

2.1 **The pole gives actual nesting.** By the pole choice in step 1.1, $C'\subset D$. The exterior of $\overline D$ is connected and unbounded, misses $C'$, and thus lies in the unbounded complementary component of $C'$. Since the two compact circles are disjoint, a collar of $C$ also misses $C'$, so $C$ lies in that same unbounded component. Hence the closed bounded region $\overline{D'}$ misses $C$ and its exterior and is contained in $D$. This uses the specified pole; two side-by-side curves in a previously fixed planar chart would not have this nesting. [F1, F3, step 1.1, algebra]

3.1 **Topological polygonal reduction in disjoint collars.** It suffices to prove the topological annulus assertion for polygonal curves. A smooth embedded circle has a smooth tubular collar by [F4]. A sufficiently fine inscribed polygon in that collar projects one-to-one onto the circle: on every sufficiently short regular arc its tangent has positive component in the original tangent direction, so the projection is locally monotone; compact separation of distant arcs excludes other intersections. Thus the polygon is a continuous normal graph $r=u(s)$ with arbitrarily small displacement. In collar coordinates, choose a smooth cutoff $\chi(r)$ equal to $1$ near $r=0$ and $0$ near the collar boundary, and make the approximation so small that $\|\chi'\|_\infty\|u\|_\infty<1$. The map $H_t(s,r)=(s,r+t\chi(r)u(s))$ is a homeomorphism: on each normal fibre it is strictly increasing, fixes the ends, and has continuous inverse, since its increase is bounded below by $(1-\|\chi'\|_\infty\|u\|_\infty)$ times the fibre increment. It is identity off the collar and sends the original curve to its polygon at $t=1$. Choose the two collars disjoint and apply these maps simultaneously. This is a topological ambient isotopy, sufficient for complementary homeomorphism types; no smooth isotopy extension is applied to a polygonal endpoint. The two nested polygonal curves retain their disks and middle region under this homeomorphism. [F3, F4, step 1.1, step 2.1, construct]

4.1 **A crosscut and its finite polygonal collar.** Now the curves are polygonal and $\overline{D'}\subset D$. Put $M=D\setminus\overline{D'}$. This open region is nonempty and connected: join any two of its points by a polygonal path in the connected disk $D$ using [F6], perturb its segments to avoid vertices of $C'$ and cross its edges transversely, and replace every run through $\overline{D'}$ by a path in a thin exterior polygonal collar of $C'$. Compact nesting keeps that collar inside $D$; its side strips and vertex sectors connect around the whole polygon. Finitely many detours give a path in $M$, so [F6] makes it polygonally connected. Choose $p\in C,q\in C'$ in edge interiors and short straight access segments entering $M$. Join their other ends in $M$, perturb to make all intersections finite, subdivide there and erase cycles in the resulting finite edge walk. Trim in the endpoint collars to obtain a simple polygonal crosscut $P$ with interior in $M$. Construct a companion $P_1$ on one fixed side of $P$: choose disjoint small disks at its bends, disjoint thin rectangles on its truncated straight segments, and endpoint rectangles meeting only the appropriate edge interiors of $C,C'$. Finitely many nonincident pieces have positive separation; choose all widths smaller than it. Offset each segment in those rectangles and connect its offsets in the intervening bend sectors by short bevels. Since each bend sector joins just its two consecutive rectangles and the neighbourhoods miss all nonincident pieces, this is an embedded polygonal $P_1$, disjoint from $P$, ending at nearby $p_1\in C,q_1\in C'$. The rectangles and bend sectors between the two arcs, with the short boundary intervals $\alpha_1\subset C,\alpha_2\subset C'$, form a closed thin strip $S\subset\overline M$. Its boundary is precisely $P\cup P_1\cup\alpha_1\cup\alpha_2$, with no unintended intersection or boundary portion. [F6, step 2.1, step 3.1, construct]

5.1 **The four faces, not all graph cycles.** Use the endpoints $p,p_1\in C$, $q,q_1\in C'$ from step 4.1, and divide each boundary into two arcs $\alpha_1,\alpha_1'$ and $\alpha_2,\alpha_2'$, with $\alpha_1,\alpha_2$ bounding the thin strip together with $P,P_1$. The embedded graph $G=C\cup C'\cup P\cup P_1$ has four vertices, six edges and is $2$-connected: after deleting any vertex, the surviving bridge and the remaining boundary arcs still connect it. Subdivide each of its six edges once to get a simple $2$-connected graph, with ten vertices and twelve edges and the same faces. By [F8] it has $2-10+12=4$ complementary faces, each bounded by a graph cycle. The exterior of $C$ is one face and the interior of $C'$ another; their boundary cycles are $C,C'$. The thin-strip interior is a third face, with boundary $\gamma=\alpha_1\cup P_1\cup\alpha_2\cup P$. Following the other side of either bridge, the local cyclic order of its three incident edges forces the fourth face walk to use $\alpha_1',P_1,\alpha_2',P$, so its boundary is $\gamma_1=\alpha_1'\cup P_1\cup\alpha_2'\cup P$. This also follows by exhaustively following the two directed sides of the six edges: the two boundary faces, the strip and this last walk use every edge side once. There are other mixed bridge cycles in $G$; they are not face boundaries. Let $Z$ be the closure of the strip face and $Z_1$ the closure of the fourth open face. By [F2] these Jordan-bounded closures are closed disks. They satisfy $\overline M=Z\cup Z_1$ and $Z\cap Z_1=P\cup P_1$: the four-face enumeration exhausts the middle region, and only the two bridges border both middle faces. In particular $Z_1$ is the closure of its open face, not a set obtained by removing a strip interior and retaining unrelated boundary arcs. [F1, F2, F8, step 4.1, algebra]

6.1 **The middle region is an annulus.** By [F2] each of $Z$ and $Z_1$ is a closed $2$-disk, and its boundary is divided by the four points $p,p_1,q,q_1$ into the four arcs $\alpha_1,\alpha_2,P,P_1$, respectively $\alpha_1',\alpha_2',P,P_1$, in the cyclic order $P,\alpha_1,P_1,\alpha_2$ (respectively $P,\alpha_1',P_1,\alpha_2'$). A closed disk whose boundary is split by four points is homeomorphic to the square $[0,1]\times[0,1]$ with the four boundary arcs corresponding to the four sides; transporting the splitting of $Z$ and of $Z_1$ through such homeomorphisms describes the gluing of step 5.1 as the identification of the left edges of two squares with each other and of the right edges with each other, which is the standard description of $S^1\times[0,1]$: the free boundary consists of the two circles $\alpha_1\cup\alpha_1'=C$ and $\alpha_2\cup\alpha_2'=C'$. Hence $\overline M\cong S^1\times[0,1]$ and $M\cong S^1\times(0,1)$ is an open annulus with boundary $C\cup C'$. [F2, step 5.1, algebra]

7.1 **Conclusion.** In the polygonal case the complement of $C\cup C'$ has exactly the three components $D'$, $(\mathbb R^2\setminus\overline D)\cup\{\infty\}$ and $M$ by steps 1.1, 2.1 and 4.1: the first two are open disks and the third is an open annulus whose boundary is $C\cup C'$. The annulus cobounded by $C$ and $C'$ is unique, because the interior of any such closed cobounding annulus is the connected complementary component adjacent to both circles, and exactly one component does; and the complementary disks $D'$ and $(\mathbb R^2\setminus\overline D)\cup\{\infty\}$ are bounded by $C'$ and by $C$ respectively. step 3.1 transfers this conclusion back to the given pair of disjoint smoothly embedded circles in $S^2$: the collar homeomorphism constructed there carries each complementary component of the polygonal pair onto a complementary component of the original pair preserving the homeomorphism types, and it carries the annulus onto the annulus cobounded by $C$ and $C'$. This proves every claim. [step 3.1, step 5.1, step 6.1] ∎
