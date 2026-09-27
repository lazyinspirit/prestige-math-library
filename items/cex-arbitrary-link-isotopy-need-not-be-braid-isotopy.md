---
id: cex-arbitrary-link-isotopy-need-not-be-braid-isotopy
kind: counterexample
title: "An arbitrary isotopy of arcs need not be a braid isotopy"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-braid-isotopy-relative-top-and-bottom,
       def-geometric-braid-with-setwise-endpoints,
       def-euclidean-spheres-and-closed-balls,
       thm-algebra-of-continuous-functions, lem-continuity-is-local-and-pastes,
       def-continuous-map-top, def-product-topology, def-interval,
       def-natural-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.2-1.3, printed pp. 4-5"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.1, author manuscript pp. 3-5"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement refuted

**Refuted claim:** the requirement in
[[def-braid-isotopy-relative-top-and-bottom]] that *every slice of the family be
a braid* is redundant, that is: if $(\alpha_s)_{s\in I}$ is a continuous family
of injective parameterisations of arcs in $D^\circ\times I$ whose endpoints
$\alpha_s(0)$ and $\alpha_s(1)$ are held fixed at the bottom and top points of
the base configuration throughout, then the images $A_s:=\alpha_s[I]$ are
strands of geometric braids, so that the family is a braid isotopy as soon as
its two boundary arcs are braids.

The witness deforms the single strand of the trivial one-strand braid. At the
middle of the deformation its height coordinate has a horizontal shelf: two distinct
points at one and the same height, so its image meets a horizontal slice in two
points and is therefore not the strand of any braid. Since reparametrising an
arc does not change its image, no choice of parameterisation repairs this; the
family is a legitimate continuous deformation of arcs with fixed endpoints, but
it is not a braid isotopy, and the definition's one-point-per-height condition
is not redundant.

**What is and is not claimed.** The two boundary arcs $A_0$ and $A_1$ of the
exhibited family are *equal* (both are the trivial braid), so nothing here
asserts that two braids fail to be braid-isotopic; what is refuted is only the
claim that an arbitrary arc deformation with braid boundary arcs is itself a
braid isotopy. Nothing is claimed about closed links or about the classification
of knots. The height function of the middle arc is not strictly increasing;
the definition of braid isotopy requires each intermediate object to be a braid, which for
a single strand means exactly that it meets each horizontal slice once.

## Facts & Assumptions

**Given:** The natural number $1$, so that $h=\frac{1}{4(1+1)}=\frac18$ and the base configuration of [[def-geometric-braid-with-setwise-endpoints]] is $Q=(q_1)$ with $q_1=(0,0)$, and the family of arc parameterisations $\alpha_s\colon I\to D^\circ\times I$, $s\in I$, defined by

$$\lambda(s):=\tfrac14\min(2s,\,2-2s),\qquad w(u):=\begin{cases}4u,&0\le u\le\tfrac14,\\ 2-4u,&\tfrac14\le u\le\tfrac34,\\ 4u-4,&\tfrac34\le u\le1,\end{cases}\qquad \alpha_s(u):=\Bigl(\bigl(\tfrac{\lambda(s)}{8}w(u),\,0\bigr),\; u+\lambda(s)w(u)\Bigr).$$

[F1] For $n=1$ a braid based at $Q$ is a continuous map $z_1\colon I\to D^\circ$ with $z_1(0)=q_1$ and $\{z_1(1)\}=\{q_1\}$, and its **strand** is the graph $\{(z_1(t),t):t\in I\}\subseteq D^\circ\times I$, which by construction meets each horizontal slice $D^\circ\times\{t\}$, $t\in I$, in exactly one point; the trivial braid has the constant strand $z_1(t)=q_1$, whose graph is $\{(0,0)\}\times I$, and a braid isotopy from $\beta$ to $\beta'$ is a family of braids $Z(s,\cdot)$ depending jointly continuously on $s$, with each slice a braid ([[def-geometric-braid-with-setwise-endpoints]], [[def-braid-isotopy-relative-top-and-bottom]], [[def-interval]]).

[F2] The closed unit disc is $D=\{w\in\mathbb R^2:\lVert w\rVert_2\le1\}$ with interior $D^\circ$; the set $D^\circ\times I$ carries the product topology, and its points are written as $(\text{spatial point},\text{height})$ ([[def-euclidean-spheres-and-closed-balls]], [[def-product-topology]]).

[F3] The functions $s\mapsto\lambda(s)$ and $u\mapsto w(u)$ are continuous, being piecewise linear with continuous gluing, and sums, products and composites of continuous maps are continuous; continuity of a function on $I$ or on $I\times I$ follows from continuity on the finitely many closed pieces $\{s\le\frac12\}$, $\{s\ge\frac12\}$ and $\{u\le\frac14\}$, $\{\frac14\le u\le\frac34\}$, $\{u\ge\frac34\}$ ([[thm-algebra-of-continuous-functions]], [[lem-continuity-is-local-and-pastes]], [[def-continuous-map-top]], [[def-interval]]).

## Counterexample

**Proof technique:** direct.

1.1 **The family is jointly continuous with the prescribed fixed endpoints.** By [F3] the maps $s\mapsto\lambda(s)$ and $u\mapsto w(u)$ are continuous, hence $(s,u)\mapsto\alpha_s(u)$ is continuous by [F3]; at $u=0$ one has $w(0)=0$, so $\alpha_s(0)=((0,0),0)=(q_1,0)$ for every $s$, and at $u=1$ one has $w(1)=0$ and $\lambda(s)w(1)=0$, so $\alpha_s(1)=((0,0),1)=(q_1,1)$ for every $s$; thus the endpoints of the parameterised arcs are fixed at the bottom and top points of $Q$. [F1, F2, F3]

1.2 **Every slice lies in $D^\circ\times I$.** For every $s\in I$ one has $0\le\lambda(s)\le\frac14$, and $w$ takes the values $w(0)=0$, $w(\frac14)=1$, $w(\frac12)=0$, $w(\frac34)=-1$, $w(1)=0$ with $|w(u)|\le1$ for all $u$; hence the spatial coordinate satisfies $|\frac{\lambda(s)}8w(u)|\le\frac1{32}<1$, so each spatial point $(\frac{\lambda(s)}8w(u),0)$ lies in $D^\circ$; and the height $u+\lambda(s)w(u)$ lies in $I$, because $w(u)\ge0$ for $u\le\frac12$ gives $0\le u\le u+\lambda(s)w(u)\le\frac12+\frac14\le1$ there, while $w(u)\le0$ for $u\ge\frac12$ gives $\frac12-\frac14\le u+\lambda(s)w(u)\le u\le1$ there. [F2, F3]

2.1 **Each slice is a simple arc.** Let $s\in I$ and suppose $\alpha_s(u)=\alpha_s(u')$; comparing the spatial coordinates gives $\lambda(s)w(u)=\lambda(s)w(u')$ and comparing the heights gives $u-u'=\lambda(s)\bigl(w(u')-w(u)\bigr)=0$, so $u=u'$; hence every $\alpha_s$ is injective, and its image $A_s:=\alpha_s[I]$ is a simple arc with the endpoints $(q_1,0)$ and $(q_1,1)$. [step 1.1, step 1.2]

2.2 **The middle slice is not the strand of a braid.** At $s=\frac12$ one has $\lambda(\frac12)=\frac14$, and the two parameters $u=\frac14$ and $u=\frac34$ are distinct while $w(\frac14)=1$, $w(\frac34)=-1$ give equal heights $\frac14+\frac14=\frac12$ and $\frac34-\frac14=\frac12$ and spatial coordinates $\frac1{32}$ and $-\frac1{32}$; hence $\alpha_{1/2}(\frac14)=((\frac1{32},0),\frac12)$ and $\alpha_{1/2}(\frac34)=((-\frac1{32},0),\frac12)$ are two distinct points of $A_{1/2}$ in the same horizontal slice $D^\circ\times\{\frac12\}$. [F2, step 1.2]

3.1 **The boundary arcs are braids.** For $s\in\{0,1\}$ one has $\lambda(s)=\frac14\min(0,2)=0$, so $\alpha_s(u)=((0,0),u)$; the image $A_0=A_1=\{(0,0)\}\times I$ is exactly the strand of the trivial braid of [F1], hence both boundary slices are geometric braids based at $Q$ and the hypothesis of the refuted claim is satisfied. [F1, step 1.1, step 2.1]

4.1 **Conclusion.** The family $(\alpha_s)$ satisfies the hypotheses of the refuted claim by steps 1.1, 1.2, 2.1 and 3.1, but its slice at $s=\frac12$ meets the horizontal slice at height $\frac12$ in two distinct points by step 2.2, whereas the strand of a braid based at $Q$ meets each horizontal slice in exactly one point by [F1]; since a reparametrisation does not change the image $A_{1/2}$, no choice of parameterisation makes that slice a braid, so the family is not a braid isotopy. Hence the one-point-per-height requirement in the definition of braid isotopy is not redundant, and the refuted claim is false. ∎ [F1, step 2.1, step 3.1, step 2.2]

## Remarks

- At $s=1/2$ the height function is $2u$ on $[0,1/4]$, constant $1/2$ on $[1/4,3/4]$, and $2u-1$ on $[3/4,1]$. This horizontal shelf gives many distinct points at height $1/2$; the height is nondecreasing, but not strictly increasing, and the arc is not a one-point-per-height graph.
- The example is one-dimensional in the sense that a single strand suffices: no collision analysis between different strands arises, and the whole phenomenon is the failure of the height projection to restrict to a homeomorphism of the arc onto $I$.
- The two boundary arcs being equal is what makes the point sharp: the deformation does not change the isotopy class of anything, and yet it leaves the class of braid isotopies, because braid isotopy is a relation between braids (tuples of one-point-per-height strands) and not between arcs.
