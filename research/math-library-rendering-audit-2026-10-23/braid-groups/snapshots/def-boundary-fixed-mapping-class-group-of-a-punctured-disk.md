---
id: def-boundary-fixed-mapping-class-group-of-a-punctured-disk
kind: definition
title: "Boundary-fixed mapping class group of a punctured disk"
status: published
origin: pipeline
landmark: true
deps: [def-geometric-braid-with-setwise-endpoints,
       def-compact-open-topology-for-topological-domains,
       prop-compact-open-is-uniform-on-a-compact-metric-domain,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.4, printed pp. 6-7"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3, author manuscript pp. 5-6"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  audited: 2026-10-02
  precheck: n/a
---

## Definition

Throughout this page $n\in\mathbb N$ is a natural number and

$$I:=[0,1],\qquad D^2:=\{\,z\in\mathbb C:|z|\le1\,\},\qquad \partial D^2:=\{\,z\in\mathbb C:|z|=1\,\},\qquad \operatorname{int}D^2:=\{\,z\in\mathbb C:|z|<1\,\}$$

is the closed unit disc, its boundary circle and its interior, with the subspace
topologies of $\mathbb C\cong\mathbb R^2$. The **fixed base configuration** is
the tuple

$$Q_n=(q_1,\dots,q_n),\qquad q_j:=\Bigl(\frac{2j-n-1}{4(n+1)},0\Bigr)\in\operatorname{int}D^2\qquad(1\le j\le n),$$

which is exactly the tuple denoted $Q$ in
[[def-geometric-braid-with-setwise-endpoints]]: the points $q_1,\dots,q_n$ are
pairwise distinct, are listed strictly from left to right, and satisfy
$q_{j+1}-q_j=(2h_0,0)$ with $h_0:=\frac{1}{4(n+1)}$ and
$\lVert q_j\rVert_2\le(n-1)h_0<\frac14$. A **homeomorphism** of $D^2$ is a
bijection $f:D^2\to D^2$ that is continuous in both directions
([[def-homeomorphism-and-open-maps]]).

**The boundary-fixed disc homeomorphism group.** Write

$$\operatorname{Homeo}^+(D^2,\partial D^2):=\{\,f:D^2\to D^2 \text{ a homeomorphism}\ :\ f|_{\partial D^2}=\operatorname{id}_{\partial D^2}\,\}$$

for the set of homeomorphisms of $D^2$ that fix the boundary circle pointwise,
with composition as its multiplication. This is a group: the identity fixes
$\partial D^2$ pointwise, the composite of two boundary-fixing homeomorphisms
fixes $\partial D^2$ pointwise, and the inverse of a boundary-fixing
homeomorphism fixes $\partial D^2$ pointwise.

Boundary fixing is the primitive condition here; no separate orientation
test is imposed. The punctured-disc group discussed in the literature is
obtained by restricting the **setwise stabilizer** of the marked set,
defined below, to $D^2\setminus\{q_1,\dots,q_n\}$. A boundary-fixed
homeomorphism that moves a marked point outside that set does not restrict
to a self-homeomorphism of this punctured disc.

**Isotopies and the compact-open topology.** The set of all continuous maps
$D^2\to D^2$ carries the compact-open topology
([[def-compact-open-topology-for-topological-domains]]), and
$\operatorname{Homeo}^+(D^2,\partial D^2)$ carries the subspace topology. The
domain $D^2$ is a nonempty compact metric space, so by
[[prop-compact-open-is-uniform-on-a-compact-metric-domain]] this subspace
topology is the topology of uniform convergence: basic neighbourhoods of $f$
are the sets $\{g:\sup_{x\in D^2}\lVert g(x)-f(x)\rVert_2<\varepsilon\}$.
Composition and inversion are continuous for this topology (verified below),
so the group is a topological group.

A path $t\mapsto f_t$ in this group transposes to a continuous map
$H:D^2\times I\to D^2$, $H(x,t):=f_t(x)$: continuity follows from
$\lVert f_t(x)-f_{t_0}(x_0)\rVert_2\le d(f_t,f_{t_0})+
\lVert f_{t_0}(x)-f_{t_0}(x_0)\rVert_2$. Conversely, a continuous $H$ on
the compact metric space $D^2\times I$ is uniformly continuous, so
$t\mapsto H(-,t)$ is continuous in the uniform topology. Thus paths
correspond exactly to **isotopies** through homeomorphisms fixing
$\partial D^2$ pointwise. We say $f$ and $g$ are **isotopic rel
$\partial D^2$** when some such path joins them.

**Composition and inversion are continuous.** For $f,g,f',g'\in
\operatorname{Homeo}^+(D^2,\partial D^2)$, define
$d(u,v):=\sup_{z\in D^2}\lVert u(z)-v(z)\rVert_2$ and let $\omega_f$ be a
modulus of uniform continuity for $f$ on $D^2$. For every $x\in D^2$,
inserting $f(g'(x))$ gives
$$\lVert f(g(x))-f'(g'(x))\rVert_2\le\lVert f(g(x))-f(g'(x))\rVert_2+\lVert f(g'(x))-f'(g'(x))\rVert_2\le\omega_f(d(g,g'))+d(f,f').$$
Taking the supremum in $x$ gives
$d(f\circ g,f'\circ g')\le\omega_f(d(g,g'))+d(f,f')$, which tends to zero
as $(f',g')\to(f,g)$.

For inversion, let $f_k\to f$ uniformly in the group and suppose the sequence
$f_k^{-1}$ did not converge uniformly to $f^{-1}$. Then for some
$\varepsilon>0$ there are $x_k\in D^2$ with
$\lVert f_k^{-1}(x_k)-f^{-1}(x_k)\rVert_2\ge\varepsilon$ for infinitely many
$k$. Passing to a subsequence, $x_k\to x$ for some $x\in D^2$ by compactness.
Put $y_k:=f_k^{-1}(x_k)$, so $f_k(y_k)=x_k$; by compactness pass to a further
subsequence with $y_k\to y$. Then uniform convergence gives
$f(y)=\lim_kf_k(y_k)=\lim_kx_k=x$, so $y=f^{-1}(x)$. Hence
$f_k^{-1}(x_k)\to f^{-1}(x)$ along this subsequence, contradicting
$\lVert f_k^{-1}(x_k)-f^{-1}(x_k)\rVert_2\ge\varepsilon$ for
$f^{-1}(x_k)\to f^{-1}(x)$. A sequence argument of this kind rules out
non-uniform convergence, so inversion is continuous. (The same estimates show
that the group operations of every subgroup described below are continuous in
the subspace topology.)

**The setwise stabilizer of $Q_n$.** Put

$$\operatorname{Homeo}^+(D^2,\partial D^2;Q_n):=\{\,f\in\operatorname{Homeo}^+(D^2,\partial D^2)\ :\ f(\{q_1,\dots,q_n\})=\{q_1,\dots,q_n\}\,\},$$

the subgroup of homeomorphisms of the disc that fix the boundary pointwise and
preserve the marked set $Q_n$ **setwise**. The requirement is preservation of
the set, not of every marked point: an element may permute $q_1,\dots,q_n$. If
$f$ maps $Q_n$ onto itself, the induced map on the finite set
$\{q_1,\dots,q_n\}$ is a permutation, so there is a unique
$\pi(f)\in S_n$ with $f(q_j)=q_{\pi(f)(j)}$ for all $j$; this permutation is
computed from the labelling of $Q_n$ fixed above. As in
[[def-geometric-braid-with-setwise-endpoints]], $S_n$ acts on labels
$1,\dots,n$ through $\kappa(j)=j-1$: the displayed $\pi(f)(j)$ means
$\kappa^{-1}(\pi(f)(\kappa(j)))$. Equivalently, without this shorthand,
$f(q_j)=q_{\pi(f)(j-1)+1}$ for $\pi(f)\in\operatorname{Sym}(\{0,\dots,n-1\})$.

**The mapping class group.** The **boundary-fixed mapping class group of the
punctured disc** is the set of path components

$$\operatorname{Mod}(D^2,Q_n;\partial D^2):=\pi_0\bigl(\operatorname{Homeo}^+(D^2,\partial D^2;Q_n)\bigr),$$

the set of isotopy classes rel $\partial D^2$ of homeomorphisms of $D^2$ fixing
$\partial D^2$ pointwise and preserving $Q_n$ setwise. Path components are
computed in the subspace topology of the compact-open topology, that is,
$[f]=[g]$ exactly when $f$ and $g$ are joined by an isotopy whose every time
is a boundary-fixing homeomorphism preserving $Q_n$ setwise. The class of $f$
is written $[f]$.

**Multiplication is ordinary composition.** Composition and inversion are
continuous, so $\pi_0$ of this topological group is a group: if
$f_s$ is a path from $f$ to $f'$ and $g_s$ a path from $g$ to $g'$, then
$f_s\circ g_s$ is a path from $f\circ g$ to $f'\circ g'$ and
$f_s^{-1}$ is a path from $f^{-1}$ to $f'^{-1}$. Hence the formulas
$$[f][g]:=[f\circ g],\qquad [f]^{-1}:=[f^{-1}]$$
are well defined, are independent of the chosen representatives, and give
$\operatorname{Mod}(D^2,Q_n;\partial D^2)$ the structure of a group with
identity $[\operatorname{id}_{D^2}]$; associativity, the identity law and the
inverse law are those of composition of maps, passed to classes. In particular
the multiplication on $\operatorname{Mod}(D^2,Q_n;\partial D^2)$ is ordinary
composition of representatives, not stacking of braids.

**Elementary cases.** For $n=0$ the tuple $Q_0$ is empty, the setwise
condition is vacuous, and
$\operatorname{Homeo}^+(D^2,\partial D^2;Q_0)=\operatorname{Homeo}^+(D^2,\partial D^2)$;
the statement of this page includes $n=0$ and the later isomorphism theorems
state their results for all $n\ge0$. For $n=1$ the marked set is the single
point $q_1$, so setwise and pointwise preservation of the marked set coincide
and $Q_1$ is fixed by every element of the stabilizer.

## Remarks

- **Why the boundary is fixed pointwise rather than setwise.** The definition
  above fixes $\partial D^2$ pointwise and lets an element move the marked
  points only within $D^2$. Both requirements are load-bearing later: a
  boundary rotation can absorb disc twisting, and setwise preservation of
  $Q_n$ alone does not force the identity permutation of the marked points.
  The companion page exhibits both phenomena as counterexamples.

- **Relation to the punctured disc.** Elements of the setwise stabilizer
  restrict to self-homeomorphisms of $D^2\setminus Q_n$. The punctured-disc
  isotopies used here are restrictions of ambient isotopies fixing
  $\partial D^2$ pointwise and preserving $Q_n$ setwise at every time.
  This specifies the boundary and puncture conventions in the mapping
  class group just defined.

- **Orientation.** For the disc, the identity component of the group of all
  homeomorphisms of $D^2$ is the group of orientation-preserving
  homeomorphisms; since every element above lies in the identity component
  after the boundary is fixed pointwise, no additional orientation condition
  is imposed or needed. This convention is used consistently on this page and
  its companion.
