---
id: lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles
kind: lemma
title: "A finitely punctured open disk has the homotopy type of a finite wedge of circles"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-homotopy-equivalence, def-retraction-and-deformation-retract, thm-a-deformation-retract-is-a-homotopy-equivalence, thm-fundamental-group-of-finite-wedge-of-circles, thm-covering-space-lifting-criterion, thm-higher-dimensional-spheres-are-simply-connected, thm-reduced-words-form-the-free-group, prop-cubical-and-spherical-models-of-higher-homotopy-agree, prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant, lem-cw-quotients-and-collapse-of-a-contractible-subcomplex, def-wedge-of-pointed-spaces, lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent, thm-induced-fundamental-group-map-functoriality]
justified_by: []
aliases: []
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, section 1.A pp. 83-86 and Example 1B.1 pp. 87-88 (trees, free bases and graphs as K(G,1))"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 2.1, printed pp. 11-13 (free kernels of the pure braid tower, punctured disk meridians)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Edward Fadell and Lee Neuwirth, Configuration Spaces, section II, printed pp. 111-114"
      url: "https://tidsskrift.dk/math/article/download/10517/8538"
---

## Statement

Let $k\in\mathbb N$, let $\operatorname{int}D^2=\{z\in\mathbb C:|z|<1\}$ be
the open unit disc and let $Q\subseteq\operatorname{int}D^2$ be a set of
$k$ distinct points. Then $\operatorname{int}D^2\setminus Q$ is homotopy
equivalent to a wedge of $k$ circles, and for each puncture there is a
positively oriented meridian loop such that these $k$ meridian classes form a
free basis of the fundamental group. Moreover $\pi_j(\operatorname{int}D^2
\setminus Q)=0$ for every $j\ge2$. For $k=0$ the wedge is a point and
$\operatorname{int}D^2$ is contractible. The same conclusions hold for
$\mathbb C$ minus $k$ points under the explicit radial homeomorphism
$h:\mathbb C\to\operatorname{int}D^2$, $h(w)=w/(1+|w|)$. No choice axiom is
used.

## Facts & Assumptions

**Given:** $k\in\mathbb N$, a set $Q=\{p_1,\dots,p_k\}$ of $k$ distinct points of $\operatorname{int}D^2$, and the space $X:=\operatorname{int}D^2\setminus Q$. Write $h:\mathbb C\to\operatorname{int}D^2$ for $h(w)=w/(1+|w|)$, with inverse $h^{-1}(z)=z/(1-|z|)$, and $D^2,\operatorname{int}D^2$ for the closed and open unit discs in the notation of [[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]].

[F1] A homotopy equivalence is a continuous map with a homotopy inverse ([[def-homotopy-equivalence]]); if $A\subseteq Y$ is a deformation retract with retraction $r$ then the inclusion is a homotopy equivalence with homotopy inverse $r$ ([[def-retraction-and-deformation-retract]], [[thm-a-deformation-retract-is-a-homotopy-equivalence]]).

[F2] Let $Q=\mathbb R/\mathbb Z$ be pointed at $[0]$ and $W_r=\bigvee_{j<r}(Q,[0])$ for $r\in\mathbb N$. Then $\pi_1(W_r,w)$ is the free group on the $r$ standard loops, one traversing each circle summand once; for $r=0$, $W_0$ is a point ([[thm-fundamental-group-of-finite-wedge-of-circles]], [[def-wedge-of-pointed-spaces]]).

[F3] Let $Y$ be path-connected and locally path-connected, let $f:(Y,y_0)\to(B,b_0)$ be based and let $p:(E,e_0)\to(B,b_0)$ be a covering. A based lift exists if and only if $f_*\pi_1(Y,y_0)\subseteq p_*\pi_1(E,e_0)$; it is then unique ([[thm-covering-space-lifting-criterion]]).

[F4] For $j\ge2$ the sphere $S^j$ is simply connected ([[thm-higher-dimensional-spheres-are-simply-connected]]).

[F5] The reduced words on $X\sqcup X^{-1}$ form the free group on $X$ under concatenation followed by free reduction, and reduced representatives are unique: two reduced words represent the same element only if they are equal ([[thm-reduced-words-form-the-free-group]]).


[F6] For $n\ge1$ the cubical model $\pi_n$ and the based sphere model agree under any fixed orientation-preserving based homeomorphism $I^n/\partial I^n\cong S^n$ ([[prop-cubical-and-spherical-models-of-higher-homotopy-agree]]); a based map induces a homomorphism $f_*[a]=[f\circ a]$, composition and identities are preserved, based homotopic maps induce equal maps and based homotopy equivalences induce isomorphisms, also in degree one ([[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]], [[thm-induced-fundamental-group-map-functoriality]]).

[F8] Let $(Z,A)$ be a CW pair with $A\ne\varnothing$. If $A$ admits a contraction, then the quotient map $Z\to Z/A$ is a homotopy equivalence ([[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]]).



## Proof

**Proof technique:** direct.

1.1 **The plane model.** The map $h(w)=w/(1+|w|)$ is continuous, and $h^{-1}(z)=z/(1-|z|)$ is a two-sided inverse: both maps change only $|w|$ and do it strictly increasingly onto $[0,1)$ and $[0,\infty)$. Hence $h$ is a homeomorphism, and it is orientation-preserving because it preserves arguments. A homeomorphism carries homotopy equivalences, free bases of fundamental groups, positive meridians and the vanishing of homotopy groups between the two spaces. So it suffices to prove the assertions of the statement for the plane model $Y:=\mathbb C\setminus Q'$ with $Q'=h^{-1}(Q)$, and from now on we work in $Y$. [F1, given]

1.2 **Put the punctures on a line.** For $k=0$, the contraction $(z,t)\mapsto(1-t)z$ proves all the assertions, so assume $k\ge1$. Rotate coordinates so that the punctures $p_i=(x_i,y_i)$ have distinct first coordinates $x_1<\cdots<x_k$; only finitely many directions are excluded. Let $f:\mathbb R\to\mathbb R$ interpolate the finitely many values $f(x_i)=y_i$ linearly between consecutive $x_i$, and be constant on the two exterior intervals. The shear $J(x,y)=(x,y-f(x))$ is a homeomorphism, with inverse $(x,y)\mapsto(x,y+f(x))$. It carries the punctures to $(x_i,0)$ and preserves orientation: $(x,y)\mapsto(x,y-tf(x))$ is an isotopy from the identity to $J$. Hence it suffices to work with punctures $(x_i,0)$. [given]

1.3 **Push out the small disks.** Choose $\varepsilon>0$ so that the closed disks $D_i=\overline{B((x_i,0),\varepsilon)}$ are pairwise disjoint; for $k=1$ take $\varepsilon=1$, and otherwise take $\varepsilon=\frac14\min_{i<k}(x_{i+1}-x_i)$. On a punctured disk write $z=(x_i,0)+ru$, where $0<r\le\varepsilon$ and $|u|=1$, and define $$R_t(z)=(x_i,0)+((1-t)r+t\varepsilon)u.$$ Outside the disk interiors put $R_t(z)=z$. The formulas agree at $r=\varepsilon$, so finite pasting gives a continuous homotopy, which avoids all punctures and fixes $$B:=\mathbb R^2\setminus\bigcup_i\operatorname{int}D_i.$$ At $t=1$ its image is $B$, so this is a deformation retraction onto $B$. [F1, given]

1.4 **Higher homotopy of the wedge vanishes.** Let $r\ge1$ and let $T_r$ be the graph with vertex set the free group $F_r:=F(x_1,\dots,x_r)$ realised as the reduced words of [F5], with one oriented edge from $g$ to $gx_i$ for every $g\in F_r$ and $1\le i\le r$, traversable in either direction. Then $T_r$ is connected: any word is reached from the empty word by appending its letters one at a time. It has no cycle: a cycle would exhibit a nonempty sequence of letters and their inverses, read as a reduced word equal to the identity of $F_r$, contradicting the uniqueness of reduced representatives in [F5]. Hence $T_r$ is a tree and, for any two vertices $g,h$, the edge path from $g$ to $h$ is unique: two distinct reduced paths would differ by a cycle. The map $p_r:T_r\to W_r$ that sends every vertex to the wedge point and traverses, on the edge from $g$ to $gx_i$, the $i$-th circle once in the positive direction, is a covering map: the star of each vertex in $T_r$ is mapped homeomorphically onto the open neighbourhood of the wedge point formed by short initial and terminal arcs of all $r$ circles, and interior points of edges are handled by the local homeomorphism property of the circle parametrisations, so the standard evenly covered neighbourhoods of $W_r$ pull back to disjoint unions of stars. [F2, F5, given]

2.1 **A vertical retraction.** Define the continuous function $d:\mathbb R\to[0,\varepsilon]$ by $d(x)=\sqrt{\varepsilon^2-(x-x_i)^2}$ on each interval $[x_i-\varepsilon,x_i+\varepsilon]$, and $d(x)=0$ elsewhere. These intervals are disjoint. A point $(x,y)$ belongs to $B$ exactly when $|y|\ge d(x)$. On $B$ put $v(x,y)=d(x)$ for $y>0$, $v(x,y)=-d(x)$ for $y<0$, and $v(x,0)=0$. This is continuous even at points with $y=0$: there $d(x)=0$, and throughout $B$ the bound $|v(x,y)|=d(x)\le|y|$ holds. The homotopy $$V_t(x,y)=(x,(1-t)y+tv(x,y))$$ stays in $B$, since on each half-plane the absolute value of its second coordinate remains at least $d(x)$. It fixes the graph $$G:=\{(x,d(x)):x\in\mathbb R\}\cup\{(x,-d(x)):x\in\mathbb R\}$$ pointwise and retracts $B$ onto $G$. This graph consists of the $k$ circles $C_i=\partial D_i$, joined consecutively by real intervals, and two exterior rays. [F1, step 1.3]

2.2 **The tree is contractible.** For $x\in T_r$ let $\pi(x)$ be the unique edge path from $x$ to the root vertex $1$ (for $x$ in the interior of an edge, start toward the endpoint closer to $1$). Let $L(x)$ be its length. Define $H(x,t)$ to be the point on this path at distance $t\,L(x)$ from $x$. On every finite subgraph of $T_r$ the map $(x,t)\mapsto H(x,t)$ is continuous, because it is the inclusion of a finite star of intervals for a bounded number of steps and can be written as a finite patching of continuous maps on closed edges; continuity is local, so $H$ is continuous. Then $H(-,0)=\operatorname{id}$, $H(-,1)\equiv1$ and $H(1,t)=1$: the tree $T_r$ is contractible in the strong sense of having a contraction fixing the root. [F5, step 1.4]

3.1 **A finite spine and its tree.** Put $a=x_1-\varepsilon$, $b'=x_k+\varepsilon$, and $\Sigma=G\cap([a,b']\times\mathbb R)$. Contract each exterior ray of $G$ to its endpoint by $(x,0)\mapsto((1-t)x+t\max\{a,\min\{b',x\}\},0)$, fixing $\Sigma$. This is a deformation retraction. Give $\Sigma$ a finite graph structure with the left and right endpoints of each circle as vertices, its semicircles as edges, and the joining intervals as edges. The subgraph $T$ consisting of all lower semicircles and joining intervals is an interval and is contractible fixing the leftmost vertex $b=(a,0)$. By [F8] the collapse $\Sigma\to\Sigma/T$ is a based homotopy equivalence. Each upper semicircle becomes one circle after its endpoints are identified, so $\Sigma/T\cong W_k$. [F1, F2, F8, step 2.1]

3.2 **$\pi_j(W_r)=0$ for $j\ge2$.** Fix $j\ge2$ and a based map $u:S^j\to W_r$ (the cubical model is identified with the spherical one by [F6]). The sphere $S^j$ is path-connected, locally path-connected and simply connected by [F4], and $\pi_1(T_r)=1$ because $T_r$ is contractible by step 2.2, so the lifting criterion [F3] gives a based lift $\widetilde u:S^j\to T_r$ of $u$. By step 2.2 there is a based homotopy $\widetilde u\simeq\mathrm{const}$ in $T_r$; composing it with $p_r$ gives a based homotopy $u\simeq\mathrm{const}$ in $W_r$. Hence every based class in $\pi_j(W_r,w)$ is trivial, and $\pi_j(W_r,w)=0$. For the case $r=0$, $W_0$ is a point by [F2], so the same conclusion is immediate. [F2, F3, F4, F6, step 1.4, step 2.2]

4.1 **The homotopy type.** The deformation retractions of steps 1.3, 2.1 and 3.1 give $\mathbb R^2\setminus\{(x_i,0):1\le i\le k\}\simeq\Sigma\simeq W_k$. The shear and rotation of step 1.2 transfer this equivalence back to $Y$. [F1, step 1.2, step 1.3, step 2.1, step 3.1]

5.1 **The meridian basis.** In the straightened plane, let $\alpha_i$ be the path in the tree $T$ from $b$ to the left endpoint of $C_i$. Let $\gamma_i$ follow $\alpha_i$, traverse $C_i$ counterclockwise once, and return along $\bar\alpha_i$. Its circular part encloses just $(x_i,0)$, so it is a positive based meridian. Collapsing $T$ sends these loops to the $k$ standard circle loops of $W_k$, oriented by their images. By [F2], [F6] and the based equivalence of step 3.1, their classes are a free basis of $\pi_1(\Sigma,b)$, hence of the punctured plane by the deformation retractions. Transferring them back by the inverse shear and rotation gives positive based meridians forming a free basis of $\pi_1(Y)$. [F1, F2, F6, step 1.2, step 1.3, step 2.1, step 3.1, step 4.1]

6.1 **Conclusion for the plane model and the disc.** Combining steps 5.1 and 3.2 with the isomorphisms of homotopy groups induced by the homotopy equivalences $Y\simeq\Sigma\simeq W_k$ ([F1], [F6]), we obtain $\pi_j(Y)=0$ for every $j\ge2$, with basepoint $b$; a homotopy equivalence induces isomorphisms at every basepoint, so the choice of basepoint is immaterial. Transferring along the homeomorphism $h$ of step 1.1 gives the corresponding statements for $\operatorname{int}D^2\setminus Q$; the image under $h$ of the loops $\gamma_j$ are positively oriented meridians of the punctures of $Q$, because $h$ preserves arguments and is a homeomorphism, and their classes form a free basis of $\pi_1$ for the same reason. [F1, F6, step 1.1, step 5.1, step 3.2] The meridian basis, the homotopy equivalence with the wedge and the vanishing of all $\pi_j$ with $j\ge2$ are therefore established for $\operatorname{int}D^2\setminus Q$ and for $\mathbb C$ minus $k$ points, with no choice principle beyond the ordered-field and interval facts already available in the ambient theory. [F1, F6, step 1.1, step 5.1, step 3.2] ∎

