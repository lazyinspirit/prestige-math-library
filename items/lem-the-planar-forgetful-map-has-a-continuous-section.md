---
id: lem-the-planar-forgetful-map-has-a-continuous-section
kind: lemma
title: "A choice-free continuous section of planar coordinate forgetting"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-ordered-configuration-space, lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles, lem-path-conjugation-isomorphism-of-fundamental-groups, thm-fundamental-group-laws]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: constructive
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 2.1, printed pp. 11-14 (the explicit cross-section of the pure braid tower)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3, author manuscript pp. 5-7 (splitting of the pure braid sequence)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Statement

Let $n\ge2$, write $p:F_n(\mathbb C)\to F_{n-1}(\mathbb C)$ and
$\widetilde p:F_n(\operatorname{int}D^2)\to F_{n-1}(\operatorname{int}D^2)$
for the maps forgetting the last coordinate, and let
$h:\mathbb C\to\operatorname{int}D^2$, $h(w)=w/(1+|w|)$, be the radial
homeomorphism with inverse $h^{-1}(z)=z/(1-|z|)$. Then:

1. The formula
   $$s(z_1,\dots,z_{n-1}):=(z_1,\dots,z_{n-1},\,1+|z_1|+\dots+|z_{n-1}|)$$
   defines a continuous section of $p$, that is $p\circ s=\operatorname{id}_{F_{n-1}(\mathbb C)}$.
2. Transporting $s$ through the coordinatewise homeomorphisms induced by $h$
   yields a continuous section $s'=h^{(n)}\circ s\circ(h^{-1})^{(n-1)}$ of
   $\widetilde p$.
3. Fix a base configuration $q=(q_1,\dots,q_n)\in F_n(\operatorname{int}D^2)$
   and put $q':=(q_1,\dots,q_{n-1})$. Then $q$ and $s'(q')$ both lie in the
   fibre $\widetilde p^{-1}(q')$, that fibre is path-connected, and any path
   $\alpha$ in it from $q$ to $s'(q')$ yields a homomorphism
   $\sigma:\pi_1(F_{n-1}(\operatorname{int}D^2),q')\to\pi_1(F_n(\operatorname{int}D^2),q)$
   with $\widetilde p_*\circ\sigma=\operatorname{id}$, so $\widetilde p_*$ is
   split surjective on fundamental groups at $q$.

No choice principle is used.

## Facts & Assumptions

**Given:** an integer $n\ge2$, a base configuration $q=(q_1,\dots,q_n)\in F_n(\operatorname{int}D^2)$ with $q'=(q_1,\dots,q_{n-1})$, and the radial homeomorphism $h(w)=w/(1+|w|)$ with two-sided inverse $h^{-1}(z)=z/(1-|z|)$ ([[lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles]]).

[F1] $F_m(X)=\{(x_1,\dots,x_m)\in X^m:x_i\ne x_j\text{ whenever }i\ne j\}$ with the subspace topology, and single-coordinate evaluation is a homeomorphism $F_1(X)\cong X$ ([[def-ordered-configuration-space]]).

[F2] The map $h:\mathbb C\to\operatorname{int}D^2$, $h(w)=w/(1+|w|)$, is a homeomorphism with inverse $h^{-1}(z)=z/(1-|z|)$; it preserves arguments and multiplies moduli by the strictly increasing function $r\mapsto r/(1+r)$ ([[lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles]]).

[F3] For a path $c:x_0\to x_1$ in $X$ the assignment $\varphi_c([\alpha]):=[(\bar c*\alpha)*c]$ is a group isomorphism $\pi_1(X,x_0)\to\pi_1(X,x_1)$ whose two-sided inverse is $\varphi_{\bar c}$ ([[lem-path-conjugation-isomorphism-of-fundamental-groups]]).

[F4] Loop classes at a point form a group under first-then-second concatenation, with the constant loop as identity and reversal as inversion ([[thm-fundamental-group-laws]]).

## Proof

**Proof technique:** constructive.

1.1 **The plane section.** Define $s(z_1,\dots,z_{n-1}):=(z_1,\dots,z_{n-1},\,1+\sum_{i<n}|z_i|)$ on $F_{n-1}(\mathbb C)$. The last coordinate is a positive real number and $1+\sum_i|z_i|>|z_i|$ for every $i$, so it differs from each of $z_1,\dots,z_{n-1}$; the first $n-1$ coordinates are pairwise distinct because $(z_1,\dots,z_{n-1})\in F_{n-1}(\mathbb C)$ by [F1]. Hence $s$ takes values in $F_n(\mathbb C)$. The absolute-value and sum operations are continuous, and a tuple of continuous coordinate maps is continuous, so $s$ is continuous; forgetting the last coordinate returns the given tuple, that is $p\circ s=\operatorname{id}$. [construct, F1, given]

1.2 **Complements of finite sets in the disc are path-connected.** Let $Q\subseteq\operatorname{int}D^2$ be finite and let $x,y\in\operatorname{int}D^2\setminus Q$. If $x=y$ the constant path joins them, so assume $x\ne y$ and choose $r$ with $\max\{|x|,|y|\}<r<1$ and $r\ne|w|$ for every $w\in Q$; only finitely many radii are forbidden, so such an $r$ exists, and then the circle $C_r=\{z:|z|=r\}$ is disjoint from $Q$ and contains $x,y$ in its interior. For each $w\in Q$ let $R_x(w):=\{x+t(w-x):t\ge1\}$ and $R_y(w):=\{y+t(w-y):t\ge1\}$ be the rays from $x$ and from $y$ through $w$ extended beyond $w$; each meets $C_r$ in at most one point, so only finitely many points of $C_r$ are excluded. Choose $z\in C_r$ outside this finite excluded set. If some $w\in Q$ lay on the segment $[x,z]$, then $z=x+t(w-x)$ with $t\ge1$, contradicting the exclusion of $z$; thus $[x,z]\cap Q=\varnothing$, and likewise $[z,y]\cap Q=\varnothing$. Both segments lie in $\operatorname{int}D^2$ because that disc is convex and all three endpoints do, so the concatenation $[x,z]\cup[z,y]$ is a path in $\operatorname{int}D^2\setminus Q$ from $x$ to $y$. [construct, F1, given]

1.3 **Conjugation and the constant loop.** By [F3] every path $c$ from $x_0$ to $x_1$ gives an isomorphism $\varphi_c:\pi_1(X,x_0)\to\pi_1(X,x_1)$ with inverse $\varphi_{\bar c}$; by [F4] the constant loop at a point represents the identity class, so if $c$ is the constant path at $x_0$ then $\varphi_c$ is the identity map of $\pi_1(X,x_0)$, since $(\bar c*\alpha)*c$ differs from $\alpha$ only by insertions of constant loops at the endpoints. [F3, F4]

2.1 **The disc section.** Put $s':=h^{(n)}\circ s\circ(h^{-1})^{(n-1)}$ on $F_{n-1}(\operatorname{int}D^2)$, where $h^{(k)}(u_1,\dots,u_k):=(h(u_1),\dots,h(u_k))$; explicitly $s'(v_1,\dots,v_{n-1})=(v_1,\dots,v_{n-1},\,h(1+\sum_{i<n}|u_i|))$ with $u_i=h^{-1}(v_i)$. This is continuous as a composite of continuous maps, and it takes values in $F_n(\operatorname{int}D^2)$: the last coordinate $h(1+\sum_i|u_i|)$ lies in $\operatorname{int}D^2$, and it differs from $v_i=h(u_i)$ because $h$ is injective and $1+\sum_i|u_i|=u_i$ is impossible — taking moduli would give $1+\sum_i|u_i|=|u_i|\le\sum_i|u_i|$. Composing with $\widetilde p$ returns the given tuple, so $\widetilde p\circ s'=\operatorname{id}$; thus $s'$ is a continuous section of $\widetilde p$, transported from $s$ as defined. [construct, step 1.1, F2]

3.1 **The based splitting.** Let $F:=\widetilde p^{-1}(q')=\{(q_1,\dots,q_{n-1},x):x\in\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\}\}$ be the fibre over $q'$; it contains $q$, since $q_n\ne q_i$ for $i<n$, and it contains $s'(q')$ by step 2.1. The fibre is homeomorphic to $\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\}$ and hence path-connected by step 1.2 applied to the finite set $Q=\{q_1,\dots,q_{n-1}\}$. Choose a path $\alpha:I\to F$ from $q$ to $s'(q')$; such a path exists, and choosing it is a single selection, not an instance of AC. Write $\iota:F\to F_n(\operatorname{int}D^2)$ for the inclusion and $\varphi_\alpha:\pi_1(F_n(\operatorname{int}D^2),q)\to\pi_1(F_n(\operatorname{int}D^2),s'(q'))$ for the conjugation isomorphism of [F3], and define $\sigma:=\varphi_{\bar\alpha}\circ s'_*:\pi_1(F_{n-1}(\operatorname{int}D^2),q')\to\pi_1(F_n(\operatorname{int}D^2),q)$, where $s'_*$ is induced at the basepoint $q'$ and $\varphi_{\bar\alpha}([\beta])=[(\alpha*\beta)*\bar\alpha]$. For $[\gamma]\in\pi_1(F_{n-1}(\operatorname{int}D^2),q')$, the path $\widetilde p\circ((\alpha*(s'\circ\gamma))*\bar\alpha)=(\widetilde p\circ\alpha)*(\widetilde p\circ s'\circ\gamma)*(\widetilde p\circ\bar\alpha)$ has the constant paths $\widetilde p\circ\alpha$ and $\widetilde p\circ\bar\alpha$ at $q'$ as outer factors, because $\alpha$ lies in the fibre over $q'$, and its middle factor is $\widetilde p\circ s'\circ\gamma=\gamma$ by step 2.1; by [F4] and step 1.3 this class equals $[\gamma]$ in $\pi_1(F_{n-1}(\operatorname{int}D^2),q')$, so $\widetilde p_*\circ\sigma=\operatorname{id}$ and $\widetilde p_*$ is split surjective. [step 1.2, step 1.3, step 2.1, F3, F4, discharge-construct]

The section is explicit, the basepoint adjustment uses one path in one fibre, and no selection over an infinite family is made; the construction is therefore choice-free. ∎
