---
id: def-geometric-braid-with-setwise-endpoints
kind: definition
title: "Geometric braids in the disc with setwise endpoints"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-product-topology, def-subspace-topology-top, def-continuous-map-top,
       def-interval, def-euclidean-spheres-and-closed-balls, def-natural-numbers,
       def-finite-symmetric-group-and-permutation-notation]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.2-1.3, printed pp. 4-5"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.1, author manuscript pp. 3-5"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

Throughout this page $n\in\mathbb N$ is a natural number
([[def-natural-numbers]]) with the labels $1,\dots,n$, and

$$I:=[0,1]\subseteq\mathbb R$$

is the unit interval ([[def-interval]]). Points of $\mathbb R^2$ are written as
vectors and are added and scaled coordinatewise. The **closed unit disc** is

$$D:=\overline B_2(0,1)=\{w\in\mathbb R^2:\lVert w\rVert_2\le 1\}$$

and its interior is $D^\circ:=\{w\in\mathbb R^2:\lVert w\rVert_2<1\}$
([[def-euclidean-spheres-and-closed-balls]]), with the subspace topology inherited
from $\mathbb R^2$ ([[def-subspace-topology-top]]); the **cylinder** $D^\circ\times I$
carries the product topology ([[def-product-topology]]) and its subspace
topology. Continuous means continuous with respect to these topologies
([[def-continuous-map-top]]).

**The base configuration.** Put

$$h:=\frac{1}{4(n+1)},\qquad q_j:=\bigl((2j-n-1)h,\,0\bigr)\in\mathbb R^2\quad(1\le j\le n),$$

and let $Q:=(q_1,\dots,q_n)$. The points $q_1,\dots,q_n$ lie in $D^\circ$, listed
strictly left to right, and are equally spaced:

$$\lVert q_j\rVert_2=(n+1-2j)h\ \text{for }j\le\tfrac{n+1}{2},\qquad \lVert q_j\rVert_2=(2j-n-1)h\ \text{for }j\ge\tfrac{n+1}{2},$$

so that $\lVert q_j\rVert_2\le(n-1)h<\tfrac14$ and
$q_{j+1}-q_j=(2h,0)$ for every $j$. In particular $q_i\ne q_j$ for $i\ne j$, and
$Q$ is an ordered tuple of pairwise distinct points of $D^\circ$. The
configuration $Q$ is **fixed once and for all** on this page and is not part of
the data of a braid.

**The label set.** The labels $1,\dots,n$ are part of the data. Throughout this
page and its companion they are identified with the set
$n=\{0,1,\dots,n-1\}$ of predecessors of $n$ ([[def-natural-numbers]]) by the
bijection $\kappa(i):=i-1$, and it is through $\kappa$ that the symmetric group
$S_n=\operatorname{Sym}(n)$ of
[[def-finite-symmetric-group-and-permutation-notation]] acts on the labels, with
composition read with the right-hand factor first. Thus a symbol such as
$(i\ i+1)$ denotes the transposition exchanging the labels $i$ and $i+1$ for
$1\le i\le n-1$, the symbol $\operatorname{id}$ denotes the identity permutation
of the labels, and a bijection of $\{1,\dots,n\}$ is regarded as an element of
$S_n$ through $\kappa$.

**Geometric braid.** A **geometric braid on $n$ strands based at $Q$**, or simply
a braid, is an $n$-tuple

$$\beta=(z_1,\dots,z_n)$$

of continuous maps $z_j\colon I\to D^\circ$ ([[def-continuous-map-top]]) such
that

1. $z_i(t)\ne z_j(t)$ whenever $i\ne j$ and $t\in I$;
2. $z_j(0)=q_j$ for every $j$;
3. $\{z_1(1),\dots,z_n(1)\}=\{q_1,\dots,q_n\}$.

The $j$-th **strand** of $\beta$ is the graph
$\{(z_j(t),t):t\in I\}\subseteq D^\circ\times I$, and the second coordinate $t$
is its **height**. The defining conditions say that each strand meets every
horizontal slice $\mathbb R^2\times\{t\}$ in exactly one point, that no two
strands meet, that the bottom endpoints are the labelled base points
$q_1,\dots,q_n$, and that the **top endpoints form the base configuration
setwise**. A braid is called **pure** when in addition $z_j(1)=q_j$ for every
$j$.

This parametrised, level-preserving presentation is the object used in this
page: the $z_j$ are the **point motions**, and the strands are recovered as
their graphs. It is not an unqualified tame link in the cylinder. The moving
points stay in the **interior** $D^\circ$ of the disc, and the base
configuration is chosen in $D^\circ$: this interior convention gives every
motion a positive distance from the boundary circle $\partial D=S^1$, which the
later polygonal approximation uses.

**Endpoint permutation.** Let $\beta=(z_1,\dots,z_n)$ be a braid. For each
$j$ the setwise condition (3) produces at least one index $\pi(j)$ with
$z_j(1)=q_{\pi(j)}$, and the pairwise distinctness of $q_1,\dots,q_n$ makes it
unique; moreover $j\mapsto\pi(j)$ is injective, because $q_{\pi(j)}=z_j(1)$
shows that distinct $j$ give distinct points $q_{\pi(j)}$. Hence $j\mapsto
\pi(j)$ is a bijection of $\{1,\dots,n\}$, that is, a permutation
([[def-finite-symmetric-group-and-permutation-notation]]). It is called the
**endpoint permutation** of $\beta$ and is written $\pi(\beta)\in S_n$:

$$z_j(1)=q_{\pi(\beta)(j)}\qquad(1\le j\le n).$$

Labels are transported from the bottom: the $j$-th strand is the one that
starts at $q_j$, and $\pi(\beta)(j)$ records where it ends. Thus $\beta$ is
pure exactly when $\pi(\beta)=\operatorname{id}$, while the setwise condition
(3) alone allows $\pi(\beta)\ne\operatorname{id}$. The adjective *setwise* in
the title refers to condition (3); it is not a purity assumption.

**Elementary cases and the trivial braid.** For $n=0$ the tuple is empty, the
conditions are vacuous, and there is exactly one braid, the empty tuple; its
endpoint permutation is the unique element of $S_0$. For $n=1$ we have
$q_1=(0,0)$, and a braid is exactly a continuous path
$z_1\colon I\to D^\circ$ with $z_1(0)=z_1(1)=(0,0)$, the endpoint permutation
being the identity of $S_1$. For every $n$ the **trivial braid** $e$ is the
tuple of constant motions $z_j(t):=q_j$; it is pure, since $e_j(1)=q_j=q_{\operatorname{id}(j)}$
for every $j$.

**Slicing is continuous by construction.** Because each $z_j$ is a genuine
function of the height with $z_j(0)=q_j$, the bottom endpoints are fixed
pointwise, and the top condition is imposed only on the set of top endpoints.
This is the distinction used by
[[def-braid-isotopy-relative-top-and-bottom]]: an isotopy of braids must keep
each bottom point fixed and the top configuration setwise equal to $Q$, but it
need not return each strand to its own starting point.
