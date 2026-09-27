---
id: lem-geometric-three-strand-braid-relation
kind: lemma
title: "The geometric three strand braid relation"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-elementary-geometric-half-twist, def-geometric-braid-with-setwise-endpoints,
       def-braid-isotopy-relative-top-and-bottom,
       prop-stacking-of-geometric-braids-is-well-defined, thm-geometric-braids-form-a-group,
       lem-continuity-is-local-and-pastes, def-continuous-map-top, def-interval]
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
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.5 and 3.2, printed pp. 7-8 and 23-26"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.2, author manuscript pp. 5-6"
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

Let $n\ge3$ and let $i$ be an index with $1\le i\le n-2$. Let $\sigma_i$ and
$\sigma_{i+1}$ be the elementary half twists of
[[def-elementary-geometric-half-twist]] based at $Q$, and let $\star$ be the
stacking of [[prop-stacking-of-geometric-braids-is-well-defined]]. Then

$$\sigma_i\star\sigma_{i+1}\star\sigma_i\ \sim\ \sigma_{i+1}\star\sigma_i\star\sigma_{i+1},$$

and consequently, in the group $G_n$ of [[thm-geometric-braids-form-a-group]],

$$[\sigma_i]\,[\sigma_{i+1}]\,[\sigma_i]=[\sigma_{i+1}]\,[\sigma_i]\,[\sigma_{i+1}].$$

The proof exhibits an explicit intermediate braid: writing $\kappa$ for the point
reflection $w\mapsto 2q_{i+1}-w$ and $\mathrm{rot}$ for the rotation of the three
points $q_i,q_{i+1},q_{i+2}$ about $q_{i+1}$ by the angle $\pi u$ at height $u$,
with the remaining strands fixed, the bracketing
$\sigma_i\star(\sigma_{i+1}\star\sigma_i)$ is braid-isotopic to
$\mathrm{rot}$, which is a braid based at $Q$ with endpoint permutation the
transposition of $i$ and $i+2$, and the reflection $\kappa$, followed by the
relabelling of $i$ and $i+2$, turns that bracketing into
$\sigma_{i+1}\star(\sigma_i\star\sigma_{i+1})$, so that bracketing is
braid-isotopic to $\mathrm{rot}$ as well; the two bracketings of each word are
themselves braid-isotopic by the associativity of stacking. All constructions
are explicit and no choice principle is used.

## Facts & Assumptions

**Given:** A natural number $n\ge3$, an index $i$ with $1\le i\le n-2$, the base configuration $Q=(q_1,\dots,q_n)$ with $q_{j+1}-q_j=(2h,0)$ and $h=\frac{1}{4(n+1)}$, and the half twists $\sigma_i,\sigma_{i+1}$ based at $Q$.

[F1] A braid based at $Q$ is a tuple $(u_1,\dots,u_n)$ of continuous maps $u_j\colon I\to D^\circ$ with $u_k(t)\ne u_l(t)$ for $k\ne l$, $u_k(0)=q_k$, and $\{u_1(1),\dots,u_n(1)\}=\{q_1,\dots,q_n\}$; its endpoint permutation $\pi(u)$ is the unique permutation with $u_k(1)=q_{\pi(u)(k)}$; the points $q_i,q_{i+1},q_{i+2}$ are collinear and equally spaced, so in the coordinates centred at $q_{i+1}$ they are $(-2h,0),(0,0),(2h,0)$, and $\lvert q_j-q_{i+1}\rvert\ge4h$ for every $j\notin\{i,i+1,i+2\}$ ([[def-geometric-braid-with-setwise-endpoints]]).

[F2] The half twist at $k$ is $(\sigma_k)_k=m_k+\rho$, $(\sigma_k)_{k+1}=m_k-\rho$ and $(\sigma_k)_j=q_j$ otherwise, where $m_k=q_k+(h,0)$; the diamond path $\rho$ satisfies $\rho(0)=(-h,0)$, $\rho(\tfrac12)=(0,-h)$, $\rho(1)=(h,0)$, $\lVert\rho(v)\rVert_2\le h$, and $\rho_2(v)\le0$ with $\rho_2(v)=0$ only for $v\in\{0,1\}$ and $\rho(v)\ne0$ for every $v\in I$; and $\pi(\sigma_k)$ is the transposition of $k$ and $k+1$, while the support disc contains $q_k,q_{k+1}$ and no other base point ([[def-elementary-geometric-half-twist]]).

[F3] A braid isotopy is a tuple of jointly continuous maps $Z_j\colon I\times I\to D^\circ$ whose every slice is a braid based at $Q$ and whose boundary slices are the two given braids ([[def-braid-isotopy-relative-top-and-bottom]]).

[F4] Stacking places its right factor in the lower half of the height interval and its left factor in the upper half: writing $z_j$ for the strands of the right factor $\beta$ and $w_j$ for those of the left factor $\gamma$, one has $(\gamma\star\beta)_j(t)=z_j(2t)$ for $t\le\tfrac12$ and $(\gamma\star\beta)_j(t)=w_{\pi(\beta)(j)}(2t-1)$ for $t\ge\tfrac12$; stacking of braids is a braid, it descends to isotopy classes, $\pi(\gamma\star\beta)=\pi(\gamma)\circ\pi(\beta)$, and the two bracketings of a threefold stacking are braid-isotopic, $(\delta\star\gamma)\star\beta\sim\delta\star(\gamma\star\beta)$ ([[prop-stacking-of-geometric-braids-is-well-defined]]).

[F5] $G_n$ is a group with operation $[\gamma][\beta]=[\gamma\star\beta]$, so equal isotopy classes have equal products ([[thm-geometric-braids-form-a-group]]).

[L6] Composites of continuous maps are continuous and continuity pastes over the two closed halves of a square; the interval $I=[0,1]$ carries the subspace topology in which the points $0,\tfrac12,1$ cut it into closed pieces ([[lem-continuity-is-local-and-pastes]], [[def-continuous-map-top]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 **(The two bracketings, in local coordinates.)** Put $c:=q_{i+1}$, $p_1:=q_i$, $p_2:=q_{i+1}$, $p_3:=q_{i+2}$, $m:=m_i=q_i+(h,0)$ and $m':=m_{i+1}=q_{i+1}+(h,0)$, so that the centred vectors $p_1-c=(-2h,0)$, $p_2-c=(0,0)$, $p_3-c=(2h,0)$, while $m-c=(-h,0)$ and $m'-c=(h,0)$; since $\pi(\sigma_i)$ is the transposition of $i,i+1$ and $\pi(\sigma_{i+1})$ that of $i+1,i+2$ by [F2] and $\pi$ multiplies by [F4], the composite $\pi(\sigma_i\star\sigma_{i+1})=\pi(\sigma_i)\circ\pi(\sigma_{i+1})$ is the 3-cycle $i\mapsto i+1\mapsto i+2\mapsto i$ and $\pi(\sigma_{i+1}\star\sigma_i)$ is its inverse $i\mapsto i+2\mapsto i+1\mapsto i$, so applying the stacking formula of [F4] twice shows that the strands $i,i+1,i+2$ of $W_0:=\sigma_i\star(\sigma_{i+1}\star\sigma_i)$ are $(m+\rho(4u),\,m-\rho(4u),\,p_3)$ for $0\le u\le\tfrac14$, $(m'+\rho(4u-1),\,p_1,\,m'-\rho(4u-1))$ for $\tfrac14\le u\le\tfrac12$ and $(p_3,\,m+\rho(2u-1),\,m-\rho(2u-1))$ for $\tfrac12\le u\le1$, while the same computation with the roles of $i$ and $i+1$ interchanged shows that the strands $i,i+1,i+2$ of $W_1:=\sigma_{i+1}\star(\sigma_i\star\sigma_{i+1})$ are $(p_1,\,m'+\rho(4u),\,m'-\rho(4u))$ for $0\le u\le\tfrac14$, $(m+\rho(4u-1),\,p_3,\,m-\rho(4u-1))$ for $\tfrac14\le u\le\tfrac12$ and $(m'+\rho(2u-1),\,m'-\rho(2u-1),\,p_1)$ for $\tfrac12\le u\le1$, every remaining strand of either tuple being constantly at its base point; hence $W_0$ and $W_1$ are braids based at $Q$ by [F4], with $\pi(W_0)=(i\ i+1)\circ(i+1\ i+2)\circ(i\ i+1)$ and $\pi(W_1)=(i+1\ i+2)\circ(i\ i+1)\circ(i+1\ i+2)$, both the transposition of $i$ and $i+2$, and by the associativity clause of [F4] $W_0$ is braid-isotopic to $\sigma_i\star\sigma_{i+1}\star\sigma_i$ and $W_1$ to $\sigma_{i+1}\star\sigma_i\star\sigma_{i+1}$. [F1, F2, F4, L6]

1.2 **(The rotation braid.)** Let $R_\theta$ be the linear rotation of $\mathbb R^2$ about the origin through angle $\theta$, and define $v_k:=q_k-c$ and $\mathrm{rot}_k(u):=c+R_{\pi u}v_k$ for $k\in\{i,i+1,i+2\}$; put $\mathrm{rot}_k(u):=q_k$ for all other labels. The motions are continuous, the two outer centred vectors are antipodal because $v_{i+2}=-v_i$, and $v_{i+1}=0$, so the middle strand stays at $c$ and all three remain pairwise distinct. Their distance from the origin is at most $\lVert c\rVert_2+2h\le(n+1)h<1$; every other base point is at distance at least $4h$ from $c$ by [F1], so no moving strand meets a constant one. At $u=0$ the triple has values $c+v_k=q_k$, and at $u=1$ it has values $c-v_k=q_{2i+2-k}$; thus $\mathrm{rot}$ is based at $Q$ and has endpoint permutation $(i\ i+2)$, shared by $W_0$ and $W_1$. [F1, F2, L6]

2.1 **(The interpolation family.)** For $s\in I$ define $Z_k(s,u):=(1-s)\,(W_0)_k(u)+s\,\mathrm{rot}_k(u)$ for every label $k$, where $(W_0)_k$ and $\mathrm{rot}_k$ are the motions of step 1.1 and step 1.2; each $Z_k$ is jointly continuous, being a sum of products of continuous functions, and satisfies $\lVert Z_k(s,u)\rVert_2\le(1-s)\lVert (W_0)_k(u)\rVert_2+s\lVert\mathrm{rot}_k(u)\rVert_2<1$, so it maps $I\times I$ into $D^\circ$; at $u=0$ one has $Z_k(s,0)=q_k$ for every $s$ because $(W_0)_k(0)=\mathrm{rot}_k(0)=q_k$, and at $u=1$ one has $Z_k(s,1)=q_{\pi(k)}$ for every $s$ because $(W_0)_k(1)=\mathrm{rot}_k(1)=q_{\pi(k)}$ for the transposition $\pi$ of $i$ and $i+2$ shared by both braids; so each slice $Z(s,\cdot)$ satisfies the endpoint conditions of [F1]. [F1, F3, step 1.1, step 1.2, L6]

2.2 **(The collision criterion.)** Fix $s\in(0,1)$ and $u\in I$ and let $k<l$ be two labels of the triple $\{i,i+1,i+2\}$; since $\mathrm{rot}_k(u)-\mathrm{rot}_l(u)=R_{\pi u}(q_k-q_l)$ by step 1.2 and $q_k-q_l=-2h\lambda_{kl}(1,0)$ with $\lambda_{kl}:=l-k>0$ by [F1], the equality $Z_k(s,u)=Z_l(s,u)$ is equivalent to $(1-s)\,((W_0)_k(u)-(W_0)_l(u))=2hs\,\lambda_{kl}\,(\cos\pi u,\sin\pi u)$, hence to the statement that $(W_0)_k(u)-(W_0)_l(u)$ is a positive multiple of $(\cos\pi u,\sin\pi u)$; so a slice $Z(s,\cdot)$ with $s\in(0,1)$ has no collision between two labels of the triple as soon as no difference $(W_0)_k-(W_0)_l$ with $k<l$ in the triple is a positive multiple of $(\cos\pi u,\sin\pi u)$ at any height $u$. [F1, F2, step 1.1, step 1.2]

2.3 **(Phase one: $0\le u\le\tfrac14$, $v=4u$.)** In this and the next two phase calculations, a subscript $a\in\{1,2,3\}$ on $(W_0)_a$ denotes the local position in the active triple, namely the global strand $(W_0)_{i+a-1}$; all other strands remain fixed. Here $(W_0)_1-(W_0)_2=2\rho(v)$ has second coordinate $\le0$, while $(W_0)_1-(W_0)_3=(-3h,0)+\rho(v)$ and $(W_0)_2-(W_0)_3=(-3h,0)-\rho(v)$ have first coordinate at most $-2h<0$; since $\cos(\pi u)\ge\cos(\tfrac\pi4)>0$ and $\sin(\pi u)\ge0$ on this phase, a positive multiple of $(\cos\pi u,\sin\pi u)$ has positive first coordinate, which excludes the pairs $(1,3)$ and $(2,3)$, while for the pair $(1,2)$ the second coordinates would have to agree, forcing $2\rho_2(v)=\lambda\sin(\pi u)\ge0$ and hence $\rho_2(v)=0$, that is $v\in\{0,1\}$; at $v=0$ one has $(W_0)_1-(W_0)_2=2\rho(0)=(-2h,0)$, a negative multiple of $(\cos0,\sin0)=(1,0)$, and at $v=1$ one has $(W_0)_1-(W_0)_2=2\rho(1)=(2h,0)$, which is not a multiple of $(\cos\tfrac\pi4,\sin\tfrac\pi4)$ at all. [F2, step 1.1]

2.4 **(Phase two: $\tfrac14\le u\le\tfrac12$, $v=4u-1$.)** Here $(W_0)_1-(W_0)_2=(2h+2hv,-2hv)$ respectively $(2h+2hv,2hv-2h)$ according to whether $v\le\tfrac12$ or $v\ge\tfrac12$, $(W_0)_1-(W_0)_3=2\rho(v)$ and $(W_0)_2-(W_0)_3=(2hv-4h,-2hv)$ respectively $(2hv-4h,2hv-2h)$; all three have second coordinate at most $0$, while $\sin(\pi u)\ge\sin(\tfrac\pi4)>0$ on this phase, so no one of them is a positive multiple of $(\cos\pi u,\sin\pi u)$, whose second coordinate is positive. [F2, step 1.1]

2.5 **(Phase three: $\tfrac12\le u\le1$, $v=2u-1$.)** Here $(W_0)_1-(W_0)_2=(3h,0)-\rho(v)$ and $(W_0)_1-(W_0)_3=(3h,0)+\rho(v)$ have first coordinate at least $2h>0$, while $\cos(\pi u)\le0$ on this phase, so neither is a positive multiple of $(\cos\pi u,\sin\pi u)$; the remaining difference $(W_0)_2-(W_0)_3=2\rho(v)$ has second coordinate at most $0$, and a positive multiple of $(\cos\pi u,\sin\pi u)$ has second coordinate $\ge0$ because $\sin(\pi u)\ge0$ on this phase, so a coincidence would force the common second coordinate to vanish, that is $\rho_2(v)=0$ and $\sin(\pi u)=0$, which gives $v\in\{0,1\}$ and $u\in\{\tfrac12,1\}$; with $v=2u-1$ this leaves the two candidates $(u,v)=(\tfrac12,0)$, where $(W_0)_2-(W_0)_3=(-2h,0)$ is not a multiple of $(\cos\tfrac\pi2,\sin\tfrac\pi2)=(0,1)$, and $(u,v)=(1,1)$, where $(W_0)_2-(W_0)_3=(2h,0)$ is a negative multiple of $(\cos\pi,\sin\pi)=(-1,0)$ rather than a positive one. [F2, step 1.1]

3.1 **(The isotopy from $W_0$ to $\mathrm{rot}$.)** By steps 2.2, 2.3, 2.4 and 2.5 no two labels of the triple can meet in any slice $Z(s,\cdot)$ with $s\in(0,1)$ and any height $u$, and at $s=0$ the slice is $W_0$ and at $s=1$ it is $\mathrm{rot}$, which are braids with pairwise distinct strands by steps 1.1 and 1.2; the triple values $(W_0)_k(u)$ and $\mathrm{rot}_k(u)$ all lie within distance $2h$ of $c$ by steps 1.1 and 1.2 and [F2], so $\lVert Z_k(s,u)-c\rVert_2\le(1-s)\lVert (W_0)_k(u)-c\rVert_2+s\lVert \mathrm{rot}_k(u)-c\rVert_2\le2h$ puts every triple strand of every slice in the ball of radius $2h$ about $c$, while the remaining strands are constantly at base points of distance at least $4h$ from $c$ by [F1], so no triple strand ever meets one of them; with the endpoint computations of step 2.1 this makes $Z$ a braid isotopy from $W_0$ to $\mathrm{rot}$ in the sense of [F3]. [F1, F2, F3, step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, step 2.4, step 2.5]

4.1 **(The reflection.)** Let $\kappa(w):=2c-w$ be the point reflection in $c$ and let $\tau$ be the transposition of $i$ and $i+2$; for $k\in\{i,i+1,i+2\}$ put $Z'_k(s,u):=\kappa(Z_{\tau(k)}(s,u))$ and $Z'_k(s,u):=q_k$ for the remaining labels; each $Z'_k$ is jointly continuous and, by step 3.1 and $\lVert\kappa(w)-c\rVert_2=\lVert w-c\rVert_2$, every value lies within distance $2h$ of $c$ and hence in $D^\circ$, because $\lVert c\rVert_2+2h\le(n+1)h<1$ as in step 1.2; within the triple $\kappa$ is injective, so distinct reflected strands stay distinct, and they stay within distance $2h$ of $c$ and hence at distance at least $2h$ from the constant strands, which are at distance at least $4h$ from $c$ by [F1]; so every slice $Z'(s,\cdot)$ is a braid based at $Q$; at $s=1$ one has $Z'=\mathrm{rot}$, because $\kappa(\mathrm{rot}_{\tau(k)}(u))=c-R_{\pi u}v_{\tau(k)}=c+R_{\pi u}v_k=\mathrm{rot}_k(u)$ for the three points $p_1,p_2,p_3$, whose labelling by $\tau$ only exchanges the two outer centred vectors and satisfies $v_{\tau(k)}=-v_k$; at $s=0$ the reflected slice is $W_1$, because the reflection identities $\kappa(m+\rho(v))=m'-\rho(v)$, $\kappa(m-\rho(v))=m'+\rho(v)$, $\kappa(p_1)=p_3$ and $\kappa(p_3)=p_1$ turn the window values of $W_0$ of step 1.1 into those of $W_1$: on $[0,\tfrac14]$ the reflected values are $(\kappa(p_3),\kappa(m-\rho(4u)),\kappa(m+\rho(4u)))=(p_1,m'+\rho(4u),m'-\rho(4u))$, on $[\tfrac14,\tfrac12]$ they are $(\kappa(m'-\rho(4u-1)),\kappa(p_1),\kappa(m'+\rho(4u-1)))=(m+\rho(4u-1),p_3,m-\rho(4u-1))$ and on $[\tfrac12,1]$ they are $(\kappa(m-\rho(2u-1)),\kappa(m+\rho(2u-1)),\kappa(p_3))=(m'+\rho(2u-1),m'-\rho(2u-1),p_1)$, which are exactly the window values of $W_1$; hence $Z'$ is a braid isotopy from $W_1$ to $\mathrm{rot}$. [F1, F2, F3, step 1.1, step 1.2, step 3.1, L6]

5.1 **(Conclusion.)** Steps 3.1 and 4.1 show that $W_0$ and $W_1$ are both braid-isotopic to $\mathrm{rot}$, hence braid-isotopic to each other; step 1.1 identifies $W_0$ as the bracketing $\sigma_i\star(\sigma_{i+1}\star\sigma_i)$ and $W_1$ as the bracketing $\sigma_{i+1}\star(\sigma_i\star\sigma_{i+1})$, and the associativity clause of [F4] shows that each is braid-isotopic to the corresponding word with the other bracketing, so that $\sigma_i\star\sigma_{i+1}\star\sigma_i\sim\sigma_{i+1}\star\sigma_i\star\sigma_{i+1}$; passing to isotopy classes with [F5] gives $[\sigma_i][\sigma_{i+1}][\sigma_i]=[\sigma_{i+1}][\sigma_i][\sigma_{i+1}]$ in $G_n$. ∎ [F4, F5, step 1.1, step 3.1, step 4.1]

## Remarks

- The proof is local: only the three strands $i,i+1,i+2$ move, and all formulas are those of the three-strand picture with base points $(-2h,0),(0,0),(2h,0)$ spaced $2h$ apart, which is why the lemma holds for every $n\ge3$ and every $i$ with $1\le i\le n-2$.
- The moving strands stay within distance $2h$ of $q_{i+1}$ throughout the interpolation and the reflection, while every other base point is at distance at least $4h$ from $q_{i+1}$; this clearance is what makes the local computation an isotopy of $n$-strand braids.
- The braid relation is the geometric statement that three consecutive half twists of a triple can be deformed into the same three half twists performed by rotating the triple rigidly by $\pi$ about its middle point; the point reflection in that middle point exchanges the two outer strands and turns one word into the other.
- The bracketing enters the formulas but not the conclusion: the proof computes the bracketings $\sigma_i\star(\sigma_{i+1}\star\sigma_i)$ and $\sigma_{i+1}\star(\sigma_i\star\sigma_{i+1})$, and the associativity clause of [[prop-stacking-of-geometric-braids-is-well-defined]] supplies the isotopy to the bracketings $(\sigma_i\star\sigma_{i+1})\star\sigma_i$ and $(\sigma_{i+1}\star\sigma_i)\star\sigma_{i+1}$.
