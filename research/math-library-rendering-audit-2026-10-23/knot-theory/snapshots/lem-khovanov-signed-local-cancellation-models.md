---
id: lem-khovanov-signed-local-cancellation-models
kind: lemma
title: "Signed local cancellation models for the Khovanov Reidemeister moves"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - def-reduced-khovanov-cohomology-of-a-knot
  - lem-khovanov-cube-differential-squares-to-zero
  - def-chain-homotopy
  - def-chain-homotopy-equivalence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bar-Natan, On Khovanov's categorification of the Jones polynomial, §§3.5.2–3.5.5, printed pp. 347–350"
      url: "https://arxiv.org/pdf/math/0201043"
    - title: "Khovanov, A categorification of the Jones polynomial, §§5 and 8.1–8.4, especially Proposition 38"
      url: "https://arxiv.org/pdf/math/9908171v2"
dependency_level: 5
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

The integral signed Khovanov cubes have the local graded cancellation models described below. They are chain homotopy equivalences over every fixed exterior resolution, commute with exterior saddle differentials, and commute with multiplication by $X$ at every marked point outside the local disk. Consequently they also give chain homotopy equivalences after taking the reduced quotient. For the crossing with A-smoothing the identity matching and B-smoothing the cap-cup matching, the two three-crossing braid cubes with words $121$ and $212$ retract to the same three-term complex. The two-crossing inverse-pair cube retracts to the identity matching in local cohomological degree one and quantum shift upward by one. All retractions are integral; their homotopies and the two cancellations in the three-crossing cube are specified in the proof.

## Statement references

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions]]

[[def-reduced-khovanov-cohomology-of-a-knot]]

[[lem-khovanov-cube-differential-squares-to-zero]]

[[def-chain-homotopy-equivalence]]

## Facts & Assumptions

**Given:** The algebra $A=\mathbb Z[X]/(X^2)$, its Frobenius maps, and cube signs $(-1)^{\sum_{a<j}v_a}$, with local crossings ordered before exterior crossings.

[F1] The Frobenius maps and their basis values are those of [[def-khovanov-frobenius-algebra-and-cube-of-resolutions]]. The corresponding signed cubes square to zero by [[lem-khovanov-cube-differential-squares-to-zero]].

[F2] In the reduced quotient the distinguished component has module $M=\mathbb Z$, with $X=0$, $m_M(1\otimes u)=u$, $m_M(X\otimes u)=0$ and $\Delta_M(u)=X\otimes u$ ([[def-reduced-khovanov-cohomology-of-a-knot]]).

## Proof

1.1 **Meaning of every local map.** Use rectangles with top boundary points $1,\ldots,n$ and bottom boundary points $1',\ldots,n'$, both listed left to right. Let $I$ join $a$ to $a'$. Let $E_i$ join top $i$ to $i+1$, bottom $i'$ to $(i+1)'$, and all other $a$ to $a'$. In a product $UV$, $U$ is above $V$ and equal middle labels are joined. Thus $E_iE_i$ is $E_i$ with one disjoint middle circle, and $E_1E_2E_1$ is boundary-fixing planar isotopic to $E_1$; likewise with $1,2$ interchanged. For the latter assertion, trace top $1,2$ to one cap, bottom $1',2'$ to one cup, and top $3$ to bottom $3'$ along the remaining arc; there is no closed component. Contracting the intervening bends gives the stated isotopy. Close any of these matchings by a fixed exterior resolution. Order the resulting circle factors by the least arc label on each circle, using a fixed total order on all local and exterior arcs; factor permutations have no Koszul signs. A dot on an arc means multiplication by $X$ on the circle containing that arc. A saddle replacing an occurrence of $I$ by $E_i$, or conversely, means precisely $m$ on the two ordered circle factors if they merge, and $\Delta$ if they split, followed by the indicated factor permutation. All unmentioned factors have the identity map. This defines the maps below on every tensor basis $\{1,X\}^{\otimes k}$, even when several local arcs belong to the same global circle. In the based case use $M$ for the distinguished factor and [F2] for a saddle meeting it. [F1, F2, given, construct]

2.1 **Circle coordinates and neck cutting.** For a disjoint middle circle put its factor first and write $w=1\otimes w_1+X\otimes w_X$. If a saddle splits that circle from an arc carrying dot operator $x$, its map in these coordinates is $u\mapsto(xu,u)$; if it merges the circle into an arc carrying dot operator $y$, its map is $(w_1,w_X)\mapsto w_1+yw_X$. These follow from $\Delta(a)=1\otimes Xa+X\otimes a$ and $m(a\otimes b)=ab$. Two successive opposite saddles between the same two local arcs equal the sum of a dot on each arc. If the arcs are on distinct circles, this is the identity $\Delta m(a\otimes b)=Xa\otimes b+a\otimes Xb$: on $1\otimes1,1\otimes X,X\otimes1,X\otimes X$, both sides are $X\otimes1+1\otimes X,X\otimes X,X\otimes X,0$. If they are on one circle it is $m\Delta(a)=2Xa$. The same formulas with the distinguished factor reduced modulo $X$ prove the assertion in that case too. These are the exact tensor interpretations of the local neck-cutting identities, including when two dot positions are on the same circle. [F1, F2, step 1.1, algebra]

2.2 **An explicit cancellation rule.** Suppose a differential between consecutive degrees has block matrix $\begin{pmatrix}\phi&\beta\\ \gamma&\delta\end{pmatrix}:A_0\oplus R\to B_0\oplus S$, with $\phi$ an isomorphism. Set $L(a,r)=(a+\phi^{-1}\beta r,r)$ and $T(b,s)=(b,s-\gamma\phi^{-1}b)$. These invertible integral changes of coordinates give $T d L^{-1}=\operatorname{diag}(\phi,\delta-\gamma\phi^{-1}\beta)$. Conjugate the adjacent differentials too. The equation $d^2=0$ and invertibility of $\phi$ imply that the incoming differential has zero $A_0$ coordinate and the outgoing differential vanishes on $B_0$. Thus there is a direct summand $A_0\xrightarrow{\phi}B_0$, contracted by $h|_{B_0}=\phi^{-1}$, $h=0$ elsewhere. Inclusion and projection of the remaining coordinates, conjugated by $L,T$, are chain maps $i,p$ with $pi=1$ and $1-ip=dh+hd$. This supplies actual chain maps and a homotopy for every cancellation used below, rather than merely an acyclicity assertion. If the blocks are homogeneous, these maps have quantum degree zero and $h$ has cohomological degree $-1$. [F1, step 1.1, algebra, construct]

3.1 **RII: all four modules and signs.** Take two strands and order the crossing with states $(I,E)$ first, the opposite crossing with states $(E,I)$ second. The four states $00,01,10,11$ are $U=E$, $V=I$, $W=E$ with a middle circle, and $Z=E$, respectively. The local differential is $d^0(u)=(su,xu,u),\qquad d^1(v,w_1,w_X)=tv-w_1-yw_X,$ where $s:E\to I$ and $t:I\to E$ are the two saddles, $x$ is the dot on the arc from which the middle circle splits, and $y$ is the dot on the arc into which it merges. Here $C^1=V\oplus W_1\oplus W_X$; the minus signs on the $10\to11$ edge are exactly the cube sign for the second crossing. Step 2.1 gives $ts=x+y$, so these displayed differentials square to zero. Define $i(v)=(v,tv,0),\qquad p(v,w_1,w_X)=v-sw_X,$ with $i,p$ zero in other local degrees, and define $h^1(v,w_1,w_X)=w_X,\qquad h^2(z)=(0,-z,0).$ Then $d i=0$, $p d=0$, and $pi=1$. In degree zero $hd=1$, in degree two $dh=1$, and in degree one $dh+hd$ sends $(v,w_1,w_X)$ to $(sw_X,w_1-tv+(x+y)w_X,w_X)$, which is exactly $1-ip$. The surviving $V$ has local degree one and quantum grading increased by one; in the shift conventions of the question this is $[-1]\{-1\}$. Thus both acyclic pairs and the signed quotient are explicitly identified. The other crossing order follows by swapping the two cube coordinates with state sign $(-1)^{v_1v_2}$. [F1, step 1.1, step 2.1, step 2.2, algebra, construct]

3.2 **RIII: ordered states and the first cancellation.** Let each crossing have states $(I,E_i)$, and form the word $121$ from top to bottom, with crossings ordered in that order. Write $P=E_1E_2$ and $Q=E_2E_1$. In degrees $0,1,2,3$ the ordered states are $I;\quad (E_1^{100},E_2^{010},E_1^{001});\quad(P^{110},(E_1\sqcup\bigcirc)^{101},Q^{011});\quad E_1^{111}.$ In the last term use the boundary-fixing isotopy $E_1E_2E_1\cong E_1$ of step 1.1. Denote a degree-one element by $(a,b,c)$ and the circle coordinates in state $101$ by $(w_1,w_X)$. Introduce four precisely located saddles: $u:E_1\to P$ inserts $E_2$ below $E_1$, $v:E_2\to P$ inserts $E_1$ above $E_2$, $w:E_1\to Q$ inserts $E_2$ above $E_1$, and $z:E_2\to Q$ inserts $E_1$ below $E_2$. Let $x$ and $y$ be the dot operators on the bottom cup and top cap of $E_1$, respectively. The degree-one differential is $d^1(a,b,c)=(-ua+vb,\ -xa+yc,\ -a+c,\ wc-zb),$ with output coordinates $(P,W_1,W_X,Q)$. Indeed the six cube edges are $100\to110$ with sign $-$, $010\to110$ with sign $+$, $100\to101$ with sign $-$, $001\to101$ with sign $+$, $010\to011$ with sign $-$, and $001\to011$ with sign $+$. The two edges to $101$ split the middle circle from the bottom cup or top cap, giving exactly the two displayed circle-coordinate pairs by step 2.1. The $101\to111$ edge has sign $-$ and merges that middle circle into the remaining through arc of $E_1E_2E_1$. Its $W_1\to E_1^{111}$ component is therefore $-1$, with its $W_X$ component minus the dot on that through arc. Cancel this $-1$ component by step 2.2. There are no remaining degree-three terms; the differential into $(P,W_X,Q)$ is the corresponding projection of the displayed $d^1$. [F1, step 1.1, step 2.1, step 2.2, algebra, construct]

4.1 **The second cancellation and the common residual matrix.** In the resulting complex, the $c\to W_X$ component is $+1$. Cancel it by step 2.2: its row is $-a+c$, so the residual coordinate substitution is $c=a$. The retained degree-one coordinates are $(a,b)$, the retained degree-two coordinates are $(P,Q)$, and the differentials become $I\xrightarrow{\binom{s_1}{s_2}}E_1\oplus E_2\xrightarrow{\begin{pmatrix}-u&v\\ w&-z\end{pmatrix}}P\oplus Q,$ where $s_i:I\to E_i$ is the saddle inserting $E_i$. The first map is obtained from the original $d^0=(s_1,s_2,s_1)$ by deleting the canceled coordinate; it is compatible with $c=a$. Repeat both cancellations for $212$ with $1$ and $2$ interchanged. Its retained coordinates before reordering are $(E_2,E_1)$ and $(Q,P)$, with matrix $\begin{pmatrix}-z&w\\ v&-u\end{pmatrix}$. Swapping both pairs, without a sign, gives exactly the preceding matrix and the preceding $d^0$. The four entries refer to the same saddles on the same labelled boundary matchings: for instance $E_2\to P$ inserts $E_1$ above, and $E_1\to P$ inserts $E_2$ below, on both sides. Hence these are actual equal tensor maps by step 1.1, not identifications of unlabelled spaces. Their kernels, composites and signs need no further $\tau$ identities. Composing the two explicit cancellation maps and their inverses gives the RIII equivalence; the homotopy for a composite of retractions $(i_1,p_1,h_1)$ and $(i_2,p_2,h_2)$ is $h_1+i_1h_2p_1$. [F1, step 1.1, step 2.2, step 3.2, algebra, construct]

5.1 **Quantum degrees.** A state of local height $r$ has quantum degree increased by $r$. In RII, $W_1$ has the underlying grading of $E$ increased by two, $W_X$ has the grading of $E$, and $Z$ has the grading of $E$ increased by two. Thus both canceled isomorphisms and the maps of step 3.1 preserve quantum degree. In RIII, $W_1^{101}$ and $E_1^{111}$ both have the grading of $E_1$ increased by three; $W_X^{101}$ and $E_1^{001}$ both have the grading of $E_1$ increased by one. The common residual complex has quantum increases $0,1,2$ in its three degrees. Every change of coordinates in step 2.2 is therefore homogeneous. [F1, step 2.1, step 3.1, step 3.2, step 4.1, algebra]

6.1 **Exterior differentials and the marked quotient.** Dots commute with every exterior saddle: $m(Xa,b)=Xm(a,b)=m(a,Xb)$ and $\Delta(Xa)=(X\otimes1)\Delta(a)=(1\otimes X)\Delta(a)$. Two saddles in disjoint local disks commute before cube signs, including when their participating arcs lie on a common global circle, by associativity, coassociativity and the Frobenius identity in [F1]. A middle circle being delooped is contained in the local disk, so no exterior saddle meets it. Boundary-fixing isotopies of the matchings preserve the labelled exterior arcs. All matrix changes, inverses of $\pm1$ blocks, projections, inclusions and contractions above therefore commute with unsigned exterior saddles and with $X$ at a fixed exterior marked point. The total differential, with local crossings first, is $d_{\rm loc}+(-1)^r d_{\rm ext}$ on local degree $r$. A local homotopy lowers $r$ by one, so its two exterior terms in $dh+hd$ cancel; local degree-zero maps commute with the signed total differential. These identities prove the same retractions for the total cube. The identities descend modulo $\operatorname{im}X_p$ because every map and every homotopy commutes with $X_p$; this argument does not assume that every local saddle acts trivially on the distinguished interval. It proves all assertions, integrally and choice-free. [F1, F2, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1, algebra] ∎
