---
id: lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times
kind: lemma
title: "Generic isotopies have only Reidemeister singular times"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-a-smooth-isotopy-of-links-can-be-put-in-general-position,
       def-oriented-reidemeister-moves, def-planar-isotopy-of-link-diagrams,
       def-regular-oriented-link-diagram]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Queffelec, Reidemeister's theorem using transversality, Bulletin of the Australian Mathematical Society (2024); arXiv:2406.18203v1, sections 3.3-3.6 and Figures 4-6"
      url: "https://arxiv.org/pdf/2406.18203v1"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); Appendix B.1 and Figure B.3, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
---

## Statement

Let $F'$ be an isotopy in general position as in the preceding item, with
exceptional times $t_1<\dots<t_N$, and for $t\notin\{t_1,\dots,t_N\}$ let
$D_t$ be the regular projection of $F'_t$. Then:

(a) for each $i$ and all sufficiently small $\delta>0$, the diagrams
$D_{t_i-\delta}$ and $D_{t_i+\delta}$ are related by exactly one oriented
Reidemeister move up to planar isotopy, of the following type: a vertical
tangency of case (i) gives R1, a tangency of the slice with the double-point
locus of case (ii) gives R2, and a transverse triple point of case (iii) gives
R3;

(b) for $t$ between consecutive exceptional times the diagrams are pairwise
planar isotopic, and the movement from $t=0$ to $t=1$ is a finite sequence of
planar isotopies and oriented Reidemeister moves taking the projection of
$F'_0$ to that of $F'_1$;

(c) the over/under and orientation data of each move are those carried by $F'$.

## Facts & Assumptions

**Given:** An isotopy $F'$ in general position with exceptional times $t_1<\dots<t_N$ as in [[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position]], and the slices $D_t$ for the remaining times.

[F1] The general-position conditions are those of [[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position]]: the vertical-tangency locus is finite with distinct times; the double-point locus is a smooth $1$-manifold whose time projection has only nondegenerate critical points, at distinct times; the triple points are finite, transverse, at distinct times; and each locus is transverse to the constant-time slices away from the listed times. The loci are compact because $L\times I$ is compact.

[F2] Away from the loci (i)--(iii) the slice is a regular projection ([[def-regular-oriented-link-diagram]]), and a smoothly varying family of regular projections is a planar isotopy of diagrams ([[def-planar-isotopy-of-link-diagrams]]).

[F3] R1, R2, R3 are the local moves of [[def-oriented-reidemeister-moves]], including all sign and orientation variants, each supported in a small disk and determined by the local over/under and orientation data.

## Proof

**Proof technique:** direct.

1.1 **R1 at a vertical tangency.** Let $(x_0,t_0)$ be a point of the vertical-tangency locus, so $d(\pi\circ F'_{t_0})_{x_0}=0$; by [F1] the locus is transverse to the slice $t=t_0$ at $(x_0,t_0)$ and consists there of finitely many points. In coordinates $(u,\delta)$ around $(x_0,t_0)$ with $u$ the source coordinate and $\delta=t-t_0$, the general-position form of the projected track is $\pi\circ F'_{t_0+\delta}(u_0+\epsilon)=\mathrm{const}+(b\epsilon^2+d\delta+O(3),\,e\epsilon\delta+c\epsilon^3+O(4))$ with $b>0$ and $e\ne0$, $c\ne0$: the second-order term in $\epsilon$ is positive definite because the tangency is vertical and transverse to the slice, and the mixed term $e\epsilon\delta$ with $e\ne0$ is exactly the transversality of the tangency locus with the slice. For $\delta<0$ and $\delta>0$ the local curve has no double point and one transverse double point respectively (or inversely), and the two local pictures differ by creating or deleting a kink; the sign of the crossing is the sign of the normal coordinate, hence determined by the over/under data. This is one oriented R1 move. [F1, F3, algebra]

1.2 **R2 at a tangent double point.** Let $t_0$ be a time at which the slice is tangent to the double-point locus at a pair $(x_0,y_0)$, so the two branches through the double point are tangent to first order. In suitable coordinates the two branches near the double point read $\pi\circ F'_{t_0+\delta}(x_0+\epsilon)=(a_1\epsilon,\,b_1\epsilon^2)+(\delta\text{-terms})$ and $(a_2\epsilon,\,b_2\epsilon^2)+(\delta\text{-terms})$ with $a_1\ne a_2$; the nondegeneracy of the critical point of the time projection in [F1] means that the difference of the normal components of the two branches is an affine function $q(\epsilon,\delta)=\lambda(\epsilon-\epsilon_0)+\mu\delta+O(2)$ with $(\lambda,\mu)\ne(0,0)$ and $\mu\ne0$. For $\delta$ of one sign the two parabolas miss, and for $\delta$ of the other sign they meet in exactly two points, close to $\epsilon_0$, where the two branches cross transversely; the two crossings have opposite signs because the difference of normal components changes sign at each. Hence the two adjacent slices differ by the creation or deletion of two crossings of opposite signs, which is one oriented R2 move. [F1, F3, algebra]

1.3 **R3 at a transverse triple point.** Let $t_0$ be a triple-point time. By [F1] the three branches through the triple point have pairwise distinct tangent directions and the triple point is isolated and transverse to the slices. Choose coordinates in which the three branches read $p_1(\epsilon)=v_1\epsilon+O(2)$, $p_2(\epsilon)=v_2\epsilon+O(2)$, $p_3(\epsilon)=v_3\epsilon+O(2)$ with pairwise independent directions $v_1,v_2,v_3$; for $\delta=t-t_0\ne0$ small, the branch $p_3$ has moved off the intersection point of the other two, and the projections of the three branches exhibit one crossing between each pair, three crossings in all, arranged exactly as the two local pictures of R3: the crossing of branches $1$ and $2$ lies on one side of branch $3$ for $\delta<0$ and on the other side for $\delta>0$, and the three crossing signs are unchanged. Hence the two adjacent slices differ by one oriented R3 move. Over/under data are those of $F'$ at the three crossings, and the orientation data are those of the strands. [F1, F3, algebra]

2.1 **Conclusion.** By [F1] the exceptional times are finitely many and are the only times at which the slice can fail to be a regular projection; by [F2] the slices between consecutive exceptional times vary by planar isotopy; by steps 1.1, 1.2 and 1.3 each exceptional time contributes exactly one oriented Reidemeister move of type R1, R2 or R3 with the over/under and orientation data carried by $F'$. Composing the finitely many planar isotopies and moves from $t=0$ to $t=1$ gives the required sequence. This proves (a), (b) and (c). ∎ [F1, F2, step 1.1, step 1.2, step 1.3]
