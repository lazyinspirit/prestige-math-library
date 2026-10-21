---
id: prop-stacking-of-geometric-braids-is-well-defined
kind: proposition
title: "Stacking of geometric braids is a well-defined associative operation on isotopy classes"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-braid-isotopy-relative-top-and-bottom, def-geometric-braid-with-setwise-endpoints,
       lem-continuity-is-local-and-pastes, thm-continuity-characterisations-top,
       cor-connected-subsets-of-the-line, def-connected-space, def-interval,
       def-subspace-topology-top]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.2-1.3, printed pp. 4-5"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.1, author manuscript pp. 3-4"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $n\in\mathbb N$ and let $Q=(q_1,\dots,q_n)$ be the base configuration of
[[def-geometric-braid-with-setwise-endpoints]], with $h:=\frac{1}{4(n+1)}$ and
$q_j=((2j-n-1)h,0)$. Let $\beta=(z_1,\dots,z_n)$ and $\gamma=(w_1,\dots,w_n)$
be braids based at $Q$ with endpoint permutations $\pi(\beta)$ and $\pi(\gamma)$
([[def-geometric-braid-with-setwise-endpoints]]), and let $\sim$ denote braid
isotopy relative to the top and bottom
([[def-braid-isotopy-relative-top-and-bottom]]).

**(a) The stacked tuple is a braid.** Define $\gamma\star\beta$ by

$$(\gamma\star\beta)_j(t):=\begin{cases}z_j(2t),&0\le t\le\tfrac12,\\[2pt] w_{\pi(\beta)(j)}(2t-1),&\tfrac12\le t\le1.\end{cases}$$

Then $\gamma\star\beta$ is a braid based at $Q$. It is the stacking of $\beta$
below $\gamma$: the motion $\beta$ runs during the first half of the height
interval and the motion $\gamma$ during the second half, after the strand of
label $\pi(\beta)(j)$ has been joined.

**(b) The endpoint permutation multiplies.** $\pi(\gamma\star\beta)
=\pi(\gamma)\circ\pi(\beta)$, with $(\pi\circ\sigma)(j)=\pi(\sigma(j))$.

**(c) The operation descends to isotopy classes.** If $\beta\sim\beta'$ and
$\gamma\sim\gamma'$ then $\gamma\star\beta\sim\gamma'\star\beta'$.

**(d) The operation is associative.** If $\delta$ is a further braid based at
$Q$, then $(\delta\star\gamma)\star\beta\sim\delta\star(\gamma\star\beta)$.

**(e) The endpoint permutation is constant along isotopies.** If
$\beta\sim\beta'$ then $\pi(\beta)=\pi(\beta')$; equivalently $\pi$ is constant
on each braid isotopy class, so that $\pi$ is a function of the class $[\beta]$
alone.

Consequently the stacking of isotopy classes,
$[\gamma]\,[\beta]:=[\gamma\star\beta]$, is a well-defined associative binary
operation on the set of braid isotopy classes based at $Q$, with
$\pi(\delta\star\gamma\star\beta)=\pi(\delta)\pi(\gamma)\pi(\beta)$ for any
three braids.

## Facts & Assumptions

**Given:** A natural number $n$, the base configuration $Q=(q_1,\dots,q_n)$ with $q_j=((2j-n-1)h,0)$ and $h=\frac{1}{4(n+1)}$, and braids $\beta=(z_j)$, $\beta'$, $\gamma=(w_j)$, $\gamma'$, $\delta$ based at $Q$.

[F1] A braid based at $Q$ is a tuple $(u_1,\dots,u_n)$ of continuous maps $u_j\colon I\to D^\circ$ with $u_i(t)\ne u_j(t)$ for $i\ne j$, $u_j(0)=q_j$, and $\{u_1(1),\dots,u_n(1)\}=\{q_1,\dots,q_n\}$; its endpoint permutation $\pi(u)\in S_n$ is the unique permutation with $u_j(1)=q_{\pi(u)(j)}$ for all $j$; the points $q_1,\dots,q_n$ are pairwise distinct, lie in the interior of the closed unit disc, and are listed with strictly increasing first coordinates ([[def-geometric-braid-with-setwise-endpoints]]).

[F2] A braid isotopy from $\beta$ to $\beta'$ is a tuple $Z=(Z_1,\dots,Z_n)$ of jointly continuous maps $Z_j\colon I\times I\to D^\circ$ such that each slice $Z(s,\cdot)$ is a braid based at $Q$ and $Z_j(0,t)=z_j(t)$, $Z_j(1,t)=z'_j(t)$ for all $j,t$ ([[def-braid-isotopy-relative-top-and-bottom]]).

[L3] Composites of continuous maps are continuous, and a function whose domain is covered by finitely many closed sets on each of which it is continuous is continuous ([[lem-continuity-is-local-and-pastes]]).

[L4] For closed $F$ and continuous $f$ the preimage $f^{-1}[F]$ is closed ([[thm-continuity-characterisations-top]]), and the interval $I=[0,1]$ is connected ([[cor-connected-subsets-of-the-line]], [[def-connected-space]]).

[L5] The sets $[0,\tfrac12]$ and $[\tfrac12,1]$ are closed subsets of $I$ carrying the subspace topology, their union is $I$, and likewise the two closed halves $\{t\le\tfrac12\}$ and $\{t\ge\tfrac12\}$ of the square $I\times I$ are closed and cover it ([[def-interval]], [[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 **(a)** With $(\gamma\star\beta)_j$ given by the two-branch formula of the statement, the two branches agree at $t=\tfrac12$, because the first gives $z_j(1)=q_{\pi(\beta)(j)}$ and the second gives $w_{\pi(\beta)(j)}(0)=q_{\pi(\beta)(j)}$ by [F1]; both branches are composites of continuous maps with the rescalings $t\mapsto 2t$ and $t\mapsto 2t-1$, hence continuous, and the two closed halves of $I$ cover $I$, so $t\mapsto(\gamma\star\beta)_j(t)$ is continuous by [L3] and [L5] and takes values in $D^\circ$; it is collision-free because on each half the tuple is the collision-free tuple of time-slices of a braid reparametrised by an injective continuous map and the halves meet only at $t=\tfrac12$; the bottom values are $(\gamma\star\beta)_j(0)=z_j(0)=q_j$, and the top values are $(\gamma\star\beta)_j(1)=w_{\pi(\beta)(j)}(1)=q_{\pi(\gamma)(\pi(\beta)(j))}$, which run through the set $\{q_1,\dots,q_n\}$; hence $\gamma\star\beta$ is a braid based at $Q$. [F1, L3, L5]

1.2 Braid isotopy is transitive: given an isotopy $Z$ from $\beta$ to $\beta'$ and an isotopy $W$ from $\beta'$ to $\beta''$, put $U_j(s,t):=Z_j(2s,t)$ for $s\le\tfrac12$ and $U_j(s,t):=W_j(2s-1,t)$ for $s\ge\tfrac12$; the branches agree at $s=\tfrac12$ because both equal $z'_j(t)$, each is jointly continuous, and the two closed halves of the square cover it, so $U$ is jointly continuous by [L3]; every slice of $U$ is a slice of $Z$ or of $W$, hence a braid based at $Q$, and the boundary slices are $\beta$ and $\beta''$, so $U$ is an isotopy from $\beta$ to $\beta''$. [F2, L3, L5]

1.3 **(e)** Let $Z$ be an isotopy from $\beta$ to $\beta'$ and fix $j$; if $n=0$ there is no endpoint label and the unique endpoint permutation is fixed; otherwise, for each $k$ put $A_k:=\{s\in I:Z_j(s,1)=q_k\}$. The sets $A_k$ are pairwise disjoint and cover $I$, since every $Z_j(s,1)$ is one of the pairwise distinct points $q_k$ of [F1]; each $A_k$ is closed in $I$, being the preimage under the continuous map $s\mapsto Z_j(s,1)$ of the closed set $\{q_k\}$ by [L4]; each $A_k$ is also open in $I$, because for $s_0\in A_k$ for $n=1$ one already has $A_1=I$; for $n\ge2$ the distance $\delta:=\min\{|q_l-q_k|:l\ne k\}$ is positive by [F1] and continuity at $s_0$ yields a neighbourhood $V$ of $s_0$ in $I$ with $|Z_j(s,1)-q_k|<\delta/2$ for $s\in V$, which forces $Z_j(s,1)=q_k$ and so $s\in A_k$. Hence the nonempty $A_k$ are pairwise disjoint nonempty clopen subsets of the connected space $I$ by [L4], and if some $A_k$ were nonempty and proper, its open complement $\bigcup_{l\ne k}A_l$ would separate $I$ from it; so exactly one $A_k$ is all of $I$. Thus $Z_j(s,1)$, and with it the endpoint permutation of the braid $Z(s,\cdot)$, is independent of $s$ by [F2], and in particular $\pi(\beta)=\pi(\beta')$. [F1, F2, L4]

2.1 **(b)** The top values computed in step 1.1 satisfy $(\gamma\star\beta)_j(1)=q_{(\pi(\gamma)\circ\pi(\beta))(j)}$ for every $j$, so the bijection $j\mapsto(\pi(\gamma)\circ\pi(\beta))(j)$ has the defining property of the endpoint permutation of $\gamma\star\beta$ in [F1]; that permutation is unique, whence $\pi(\gamma\star\beta)=\pi(\gamma)\circ\pi(\beta)$. [F1, step 1.1]

2.2 **Triple concatenations.** Let $\sigma:=\pi(\beta)$ and $\tau:=\pi(\gamma)$, and for $0<a<b<1$ let $\Theta^{a,b}$ be the tuple that equals $z_j(t/a)$ for $0\le t\le a$, equals $w_{\sigma(j)}(\tfrac{t-a}{b-a})$ for $a\le t\le b$, and equals $v_{\tau\sigma(j)}(\tfrac{t-b}{1-b})$ for $b\le t\le1$, where $v_j$ are the motions of $\delta$; the three branches agree at the break points by [F1], each is continuous, and the three closed pieces of $I$ cover $I$, so each $\Theta^{a,b}_j$ is continuous by [L3] and [L5]; collision-freeness and the endpoint conditions are checked exactly as in step 1.1, so $\Theta^{a,b}$ is a braid based at $Q$, and reading off the two bracketings gives $(\delta\star\gamma)\star\beta=\Theta^{1/2,\,3/4}$ and $\delta\star(\gamma\star\beta)=\Theta^{1/4,\,1/2}$, since in both the three motions occur in the order $\beta,\gamma,\delta$ with couplings $\sigma$ then $\tau$ and only the two height breaks differ. [F1, step 1.1, L3, L5]

2.3 **(c)** Let $Z$ be an isotopy from $\beta$ to $\beta'$ and $W$ an isotopy from $\gamma$ to $\gamma'$, and put $U_j(s,t):=Z_j(s,2t)$ for $t\le\tfrac12$ and $U_j(s,t):=W_{\pi(\beta)(j)}(s,2t-1)$ for $t\ge\tfrac12$; the two branches agree at $t=\tfrac12$ because $Z_j(s,1)=q_{\pi(\beta)(j)}=W_{\pi(\beta)(j)}(s,0)$ for every $s$ by [F1] and [F2], and step 1.3 shows that the coupling $\pi(\beta)$ is the endpoint permutation of every braid $Z(s,\cdot)$, so no $s$-dependent relabelling is needed; joint continuity follows from [L3] and [L5], each slice $U(s,\cdot)$ is the stacking of the braids $Z(s,\cdot)$ and $W(s,\cdot)$, hence a braid by step 1.1, and the boundary slices are $\gamma\star\beta$ and $\gamma'\star\beta'$; hence $\gamma\star\beta\sim\gamma'\star\beta'$. [F1, F2, step 1.1, step 1.3, L3, L5]

3.1 **Moving the breaks is an isotopy.** Let $s\mapsto(a_s,b_s)$ be continuous with $0<a_s<b_s<1$, $a_0=\tfrac12$, $b_0=\tfrac34$, $a_1=\tfrac14$, $b_1=\tfrac12$, for instance the linear interpolation of the two pairs; then $(s,t)\mapsto\Theta^{a_s,b_s}_j(t)$ is jointly continuous, because the three regions $\{t\le a_s\}$, $\{a_s\le t\le b_s\}$, $\{t\ge b_s\}$ are closed and cover the square and on each the formula is a composite of continuous maps with the positive denominators $a_s$, $b_s-a_s$, $1-b_s$ bounded below on the compact parameter interval; each slice is a braid by step 2.2 and the boundary slices are $\Theta^{1/2,\,3/4}$ and $\Theta^{1/4,\,1/2}$, so those two braids are braid-isotopic. [step 2.2, F2, L3, L5]

4.1 **(d)** Steps 2.2 and 3.1 exhibit the two bracketings $(\delta\star\gamma)\star\beta$ and $\delta\star(\gamma\star\beta)$ of the triple as braid-isotopic representatives, and step 2.3 shows that the isotopy class of a stacking depends only on the isotopy classes of its two factors; hence $(\delta\star\gamma)\star\beta\sim\delta\star(\gamma\star\beta)$ for the given braids, and the induced operation on classes is associative. [F2, step 2.2, step 2.3, step 3.1]

5.1 Assertions (a), (b), (c), (d) and (e) are steps 1.1, 2.1, 2.3, 4.1 and 1.3, so the stacking of classes $[\gamma][\beta]=[\gamma\star\beta]$ is a well-defined associative binary operation on the set of braid isotopy classes based at $Q$, and $\pi(\delta\star\gamma\star\beta)=\pi(\delta)\pi(\gamma)\pi(\beta)$ follows by applying step 2.1 twice. ∎ [step 1.1, step 1.3, step 2.1, step 2.3, step 4.1]

## Remarks

- The reparametrisation used in step 3.1 is the only place where associativity needs work: the two bracketings of a threefold stack differ by how the height interval is cut, and a continuous family of cuts is an isotopy because the underlying sequence of motions, and all label couplings, are unchanged.
- Clause (e) is what makes the endpoint permutation a function of the isotopy class rather than of the representative; it is the connectedness of the height interval, through [L4], that rules out a strand ending at a different base point at the two ends of an isotopy.
- Nothing in the proposition uses a choice principle: the base configuration, and every reparametrisation, is given by an explicit formula, and the two-element cover of $I$ in step 1.1 is finite.
