---
id: lem-geometric-braids-admit-generic-polygonal-representatives
kind: lemma
title: "Geometric braids admit generic polygonal representatives"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-geometric-braid-with-setwise-endpoints,
       def-braid-isotopy-relative-top-and-bottom,
       thm-heine-borel-rn, thm-heine-cantor-metric, thm-extreme-value-metric,
       thm-algebra-of-continuous-functions, lem-continuity-is-local-and-pastes,
       thm-cauchy-schwarz-and-the-euclidean-norm, def-norm-and-normed-space,
       lem-euclidean-polygonal-paths-are-continuous,
       def-polygonal-path-and-polygonal-connectedness,
       thm-root-bound-for-polynomials-over-a-domain,
       def-polynomial-evaluation-and-root, def-polynomial-ring-over-a-commutative-ring,
       thm-polynomial-degree-of-a-product-over-a-domain,
       def-finite-cardinality, thm-subset-of-a-finite-set, cor-interval-uncountable,
       lem-finite-choice, def-interval, def-continuous-map-top]
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
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.5, printed pp. 7-8"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.2, author manuscript pp. 5-6"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $n\in\mathbb N$ and let $\beta=(z_1,\dots,z_n)$ be a braid based at $Q$
([[def-geometric-braid-with-setwise-endpoints]]). Then there is a braid
$\beta'=(\beta'_1,\dots,\beta'_n)$ based at $Q$ with
$\beta'\sim\beta$ ([[def-braid-isotopy-relative-top-and-bottom]]) such that:

1. **Polygonal.** There are $m\ge1$ and $0=t_0<t_1<\dots<t_m=1$ such that every
   $\beta'_j$ is affine on each of the closed intervals $[t_{k-1},t_k]$; for
   $n=0$ the tuple is empty and $m:=1$ is understood.
2. **General position.** Writing $\xi_j:=\pi_1\circ\beta'_j$ for the first
   coordinate of the $j$-th strand, no two strands meet in the projection at a
   breakpoint, $\xi_i(t_k)\neq\xi_j(t_k)$ for all $i\neq j$ and
   $1\le k\le m-1$, and every interior coincidence of first coordinates is a
   *simple* coincidence of exactly one pair: for all $i\neq j$ and
   $t\in(0,1)$ with $\xi_i(t)=\xi_j(t)$, the height $t$ lies in the interior of
   one of the affine pieces, the difference $\xi_i-\xi_j$ changes sign at $t$,
   and $\xi_l(t)\neq\xi_i(t)$ for every $l\notin\{i,j\}$.
3. **Consequences.** The set
   $C:=\{t\in(0,1):\xi_i(t)=\xi_j(t)\text{ for some }i\neq j\}$ is finite, say
   $C=\{c_1<\dots<c_{m'}\}$ with $m'\ge0$ (the empty list for $m'=0$), and at
   each $c_r$ exactly one pair of strands has equal first coordinates, that pair
   exchanging its two positions across $c_r$.
4. **Boundary clearance.** There is a real $b'>0$ with
   $\lVert\beta'_j(t)\rVert_2\le1-b'$ for every $j$ and every $t\in I$; that
   is, the representative stays at a uniform positive distance $b'$ from the
   boundary circle $\partial D$. For $n=0$ the condition is vacuous.

Thus a braid can be replaced by a polygonal one whose projected crossings are
transversal, occur two at a time, and occur at pairwise distinct interior
heights, and which keeps a uniform positive distance from the boundary circle.
The construction is explicit and only finitely many choices are made; no choice
principle is used.

## Facts & Assumptions

**Given:** A natural number $n$ and a braid $\beta=(z_1,\dots,z_n)$ based at $Q$, with base configuration $Q=(q_1,\dots,q_n)$, $h=1/(4(n+1))$ and $q_j=((2j-n-1)h,0)$.

[F1] A braid based at $Q$ is a tuple of continuous maps $z_j\colon I\to D^\circ$ with $z_i(t)\neq z_j(t)$ for $i\neq j$, $z_j(0)=q_j$ and $\{z_1(1),\dots,z_n(1)\}=\{q_1,\dots,q_n\}$; the base points are pairwise distinct, lie in $D^\circ$ with $\lVert q_j\rVert_2\le(n-1)h<1$, satisfy $q_{j+1}-q_j=(2h,0)$ and have pairwise distinct first coordinates ([[def-geometric-braid-with-setwise-endpoints]], [[def-interval]], [[def-continuous-map-top]]).

[F2] A braid isotopy from $\alpha$ to $\gamma$ is a tuple of jointly continuous maps $Z_j\colon I\times I\to D^\circ$ whose every slice $Z(s,\cdot)$ is a braid based at $Q$ and whose slices at $s=0,1$ are $\alpha,\gamma$ ([[def-braid-isotopy-relative-top-and-bottom]]).

[F3] $I=[0,1]$ is a nonempty compact metric space, so every continuous real-valued function on it is bounded and attains a least value, every continuous map from $I$ to a metric space is uniformly continuous, and every closed bounded subset of $\mathbb R$ is compact; a finite union of closed bounded pieces of $\mathbb R$ is closed and bounded ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]], [[thm-heine-cantor-metric]], [[def-interval]]).

[F4] Sums, differences, scalar multiples and composites of continuous maps are continuous, continuity pastes over finitely many closed pieces, the Euclidean norm satisfies the triangle inequality $\lVert u+v\rVert_2\le\lVert u\rVert_2+\lVert v\rVert_2$ and $\lVert u\rVert_2=0$ only for $u=0$, and affine interpolations $t\mapsto(1-\lambda(t))u+\lambda(t)v$ of continuous data are continuous ([[thm-algebra-of-continuous-functions]], [[lem-continuity-is-local-and-pastes]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-norm-and-normed-space]], [[lem-euclidean-polygonal-paths-are-continuous]], [[def-polygonal-path-and-polygonal-connectedness]]).

[F5] For a nonzero polynomial $f$ over the integral domain $\mathbb R$ of degree $d$ the set of its real roots has at most $d$ elements, evaluation of a formal polynomial at a real point is a ring homomorphism and a polynomial taking a nonzero value is not the zero polynomial, while products of nonzero polynomials over $\mathbb R$ are nonzero; consequently, if a polynomial in $N$ variables does not vanish at every point of a nonempty open box then, viewed as a polynomial in the last variable over the polynomial ring in the remaining variables, at least one of its coefficient polynomials does not vanish at every point of the projection box, since a point of the box at which every coefficient polynomial took the value $0$ would make the evaluation of the polynomial zero ([[thm-root-bound-for-polynomials-over-a-domain]], [[def-polynomial-evaluation-and-root]], [[def-polynomial-ring-over-a-commutative-ring]], [[thm-polynomial-degree-of-a-product-over-a-domain]]).

[F6] A nondegenerate real interval is uncountable and hence not finite, and every subset of a finite set is finite ([[cor-interval-uncountable]], [[def-finite-cardinality]], [[thm-subset-of-a-finite-set]]).

[L7] Finitely many nonvacuous choices may be made: if $S_1,\dots,S_N$ are nonempty sets then there is a function picking an element of each $S_i$, and a finite nonempty set of positive reals has a positive least element ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 **The uniform margins of $\beta$.** For $n=0$ the empty braid itself satisfies the statement with $m=1$, so assume $n\ge1$. For each label $j$ the continuous function $t\mapsto1-\lVert z_j(t)\rVert_2$ attains a positive minimum on $I$ by [F1], [F3] and [F4]; let $b>0$ be the least of these finitely many values. If $n\ge2$, each continuous separation function $t\mapsto\lVert z_i(t)-z_j(t)\rVert_2$ for $i<j$ likewise attains a positive minimum; let $M>0$ be the least of these finitely many pair minima. [F1, F3, F4, L7]

1.2 **The polygonal approximation.** Since each $z_j$ is continuous on the compact metric space $I$, it is uniformly continuous by [F3], so by [L7] we may choose, for the finitely many labels $j$, a real $\delta_j>0$ with $\lVert z_j(t)-z_j(s)\rVert_2<\varepsilon$ whenever $\lvert t-s\rvert<\delta_j$, where $\varepsilon:=\min(M/4,b/2)$ for $n\ge2$ and $\varepsilon:=b/2$ for $n=1$; fix an integer $m\ge2$ with $1/m<\min_j\delta_j$, possible because every sufficiently large integer satisfies the bound, and put $t_k:=k/m$, and define $p_j\colon I\to\mathbb R^2$ to be affine on each $[t_{k-1},t_k]$ with $p_j(t_k)=z_j(t_k)$. Then each $p_j$ is continuous by [F4], and for $t\in[t_{k-1},t_k]$ the point $p_j(t)=(1-\lambda)z_j(t_{k-1})+\lambda z_j(t_k)$ with $\lambda=m(t-t_{k-1})\in I$ satisfies $\lVert p_j(t)-z_j(t)\rVert_2\le(1-\lambda)\lVert z_j(t_{k-1})-z_j(t)\rVert_2+\lambda\lVert z_j(t_k)-z_j(t)\rVert_2<\varepsilon$ because $\lvert t-t_{k-1}\rvert,\lvert t_k-t\rvert\le 1/m<\delta_j$. [F1, F3, F4, L7]

2.1 **First conclusion: the interpolation is a braid isotopy to the polygonal braid.** The tuple $p=(p_1,\dots,p_n)$ of step 1.2 has the same bottom and top values as $\beta$. Define $H_j(s,t):=(1-s)z_j(t)+s\,p_j(t)$; each map is jointly continuous by [F4]. If $n\ge2$, then for every $i\ne j$ and $(s,t)$ the estimate from steps 1.1 and 1.2 gives $\lVert H_i(s,t)-H_j(s,t)\rVert_2\ge M-2\varepsilon>0$; for $n=1$ the collision condition is vacuous. In either case, $\lVert H_j(s,t)\rVert_2\le1-b+\varepsilon<1$, so every slice is a braid based at $Q$ and $H$ is a braid isotopy from $\beta$ to the polygonal braid $p$. For $n=1$ there are no projected crossings or pair conditions, so $p$ already satisfies the full statement, with clearance $1-\lVert p_1(t)\rVert_2\ge b-\varepsilon=b/2>0$. Henceforth $n\ge2$; then $\lVert p_i(t)-p_j(t)\rVert_2\ge M-2\varepsilon=:M_1>0$ and $1-\lVert p_j(t)\rVert_2\ge b-\varepsilon=:b_1>0$. [F1, F2, F4, step 1.1, step 1.2]

3.1 **The perturbation box and its uniformity.** Let $\mathcal V$ be the set of interior vertices $(j,k)$ with $1\le j\le n$, $1\le k\le m-1$, and choose $\eta_*>0$ with $M_1-4\eta_*>0$ and $b_1-2\eta_*>0$, for instance $\eta_*:=\min(M_1/8,b_1/4)$; for each interior vertex let $\eta_{j,k}\in(-\eta_*,\eta_*)$ be a real parameter and let $p^{(\eta)}$ be the tuple obtained from $p$ by moving the vertex $p_j(t_k)$ to $p_j(t_k)+(\eta_{j,k},0)$, all other data unchanged. At every height $t\in[t_{k-1},t_k]$ the point $p^{(\eta)}_j(t)$ is the convex combination, with weight $\lambda=m(t-t_{k-1})$, of the possibly moved vertices at $t_{k-1}$ and $t_k$, so $\lVert p^{(\eta)}_j(t)-p_j(t)\rVert_2\le\eta_*$; hence $\lVert p^{(\eta)}_i(t)-p^{(\eta)}_j(t)\rVert_2\ge M_1-2\eta_*>0$ and $\lVert p^{(\eta)}_j(t)\rVert_2\le1-b_1+\eta_*<1$ for all $i\neq j$ and $t$, so every choice of parameters gives a braid $p^{(\eta)}$ based at $Q$ whose bottom points are the base points and whose top points are those of $p$; moreover for two parameter values $\eta,\eta'$ the interpolation $p^{(s\eta+(1-s)\eta')}$ is a braid isotopy by the same estimates, so all these braids are braid-isotopic to $p$ and hence to $\beta$. [F1, F2, F4, step 2.1, L7]

4.1 **Bad configurations are polynomial conditions.** For the parameter-dependent braid $p^{(\eta)}$ of step 3.1, put $X_{j,k}:=\pi_1(p_j^{(\eta)}(t_k))$; thus $X_{j,k}=\pi_1(p_j(t_k))+\eta_{j,k}$ for $1\le k\le m-1$, while $X_{j,0}$ and $X_{j,m}$ are the fixed endpoint coordinates. For a pair $i<j$ and a piece $[t_{k-1},t_k]$ put $A:=X_{i,k-1}-X_{j,k-1}$ and $B:=(X_{i,k}-X_{i,k-1})-(X_{j,k}-X_{j,k-1})$, so that the first-coordinate difference of the pair at height $t=t_{k-1}+\lambda/m$ equals $A+\lambda B$ and, if $A\neq0$, $B\neq0$ and $A+B\neq0$, the pair has equal first coordinates at a unique height inside the piece, at which the difference changes sign, if and only if $A(A+B)<0$, the height being $\lambda=-A/B$. Consequently (a) a pair has equal first coordinates at a breakpoint $t_k$, $1\le k\le m-1$, exactly when $X_{i,k}-X_{j,k}=0$, with the parameter-dependent coordinates just defined, and (b) if two distinct pairs of strands have equal first coordinates at the same height $t^*\in(0,1)$ that is not one of the breakpoints $t_1,\dots,t_{m-1}$, then, the interiors of distinct pieces being disjoint, both coincidences lie in the interior of one and the same piece $[t_{k-1},t_k]$, and for the two pairs on that common piece, with the common local parameter $\lambda:=mt^*-(k-1)\in(0,1)$, the two coincidences give $A_r+\lambda B_r=0$ for $r=1,2$ and hence $A_1B_2=A_2B_1$. [F1, F4, step 3.1]

5.1 **Each bad condition is avoided on a box.** All coordinates $X_{i,k}$ are affine functions of the parameters $\eta_{l,\kappa}$ by step 3.1, so each equation $X_{i,k}-X_{j,k}=0$ of step 4.1(a) is the zero set of a polynomial in the parameters that is nonzero, since it restricts to the nonzero affine function $\eta_{j,k}\mapsto(\text{constant})-\eta_{j,k}$ when only $\eta_{j,k}$ varies (here $X_{i,k}$ does not involve $\eta_{j,k}$ because $i\neq j$); likewise, for a piece $[t_{k-1},t_k]$ and two distinct pairs of strands with the common piece of step 4.1(b), the equation $A_1B_2-A_2B_1=0$ is the zero set of the parameter polynomial $\Phi:=A_1B_2-A_2B_1$, and $\Phi$ is not the zero polynomial, so the bad configurations of step 4.1(b) are confined to a proper algebraic condition: take a label $l$ of the first pair that is not a label of the second (it exists because the pairs are distinct); if $k\le m-1$, then the coordinate $X_{l,k}$ occurs in $B_1$ only, with coefficient $\pm1$, so the formal partial derivative $\partial\Phi/\partial X_{l,k}$, equivalently the derivative with respect to the parameter $\eta_{l,k}$, equals $\mp A_2$, and this is a nonzero polynomial because the other pair's coefficient $A_2$ is the difference of the first coordinates of the vertices $(i_2,k-1)$ and $(j_2,k-1)$ of that pair: either $k-1=0$ and it is the nonzero constant given by the distinct first coordinates of $q_{i_2},q_{j_2}$ of [F1], or $k-1\ge1$ and it involves the two independent parameters $\eta_{i_2,k-1}$ and $\eta_{j_2,k-1}$ with coefficients $+1$ and $-1$; if instead $k=m$, so that both pairs cross in the piece $[t_{m-1},t_m]$, then $B_r=C_r-A_r$ with $C_r:=A_r+B_r$ the top first-coordinate difference of the pair, a number independent of the parameters, so that $\Phi=A_1C_2-A_2C_1$ with $C_1\neq0$ and $C_2\neq0$ because the top configuration has pairwise distinct first coordinates by [F1], and the partial derivative $\partial\Phi/\partial X_{l,m-1}=\pm C_2$ is nonzero, the vertex $(l,m-1)$ being a parameter because $m\ge2$; hence in every case the required polynomial is not the zero polynomial, and the finite family of these conditions, over all pairs of strands, all breakpoints and all pieces, is avoided below with [F5] and [F6]. [F1, F4, F5, F6, step 4.1]

6.1 **Avoiding finitely many proper algebraic conditions.** Let $J:=\prod_{l,\kappa}(-\eta_*,\eta_*)$ be the box of parameters and let $\Phi_1,\dots,\Phi_s$ be the finitely many parameter polynomials of step 5.1, each of which is not the zero polynomial; then $J$ contains a point at which all $\Phi_1,\dots,\Phi_s$ are nonzero, by induction on the number $N$ of parameters (for $N=0$, the box has one empty parameter tuple and each nonzero polynomial is a nonzero constant, so the claim holds): for $N=1$ each $\Phi_i$ is a nonzero polynomial in one variable, so its root set has at most $\deg\Phi_i$ elements by [F5], the bad set is a union of finitely many finite sets inside the nonempty interval $J$, and an interval is not a subset of a finite set by [F6]; for $N>1$ write each $\Phi_i$ as a polynomial in the last parameter with coefficient polynomials in the remaining parameters, for each $\Phi_i$ retain one coefficient polynomial that is formally nonzero, and apply the induction hypothesis to these finitely many nonzero coefficient polynomials, and the box $J'$ to choose the first $N-1$ parameters so that none of them vanishes at that point, and then avoid, in the last coordinate interval, the finitely many roots of the resulting nonzero polynomials in the last parameter, again by [F5] and [F6]. [F5, F6, step 5.1]

7.1 **Conclusion.** Choose the parameters by step 6.1. Then no pair of strands has equal first coordinates at a breakpoint $t_k$ with $1\le k\le m-1$ by step 4.1(a), and no two pairs of strands have equal first coordinates at the same interior height by step 4.1(b); since the first-coordinate difference of a pair restricted to one affine piece is affine and is not identically zero on that piece (it is nonzero at each end of the piece: at the base and top heights because the first coordinates of distinct strands are then distinct by [F1], and at an interior breakpoint because the chosen parameters avoid step 4.1(a)), each pair realises at most one interior coincidence in each piece, and such a coincidence lies in the interior of the piece, changes the sign of the difference, and involves no third strand (a third strand with the same first coordinate at that height would be a second pair meeting at the same height); hence the set $C$ of interior coincidences is finite, and each of its elements is a crossing of exactly one pair which exchanges the two positions of that pair across the crossing height. The resulting braid $p^{(\eta)}$ is polygonal with breakpoints $t_0<\dots<t_m$ by step 3.1, satisfies the general-position clauses by the above, keeps the uniform boundary clearance $\lVert p^{(\eta)}_j(t)\rVert_2\le1-b_1+\eta_*$ with $b_1-\eta_*>0$ by step 3.1, and is braid-isotopic to $\beta$ by steps 2.1 and 3.1, which is the assertion. ∎ [F1, F2, F4, step 2.1, step 3.1, step 4.1, step 6.1]

## Remarks

- The hypothesis that the strands move in the interior $D^\circ$ of the disc is what produces the uniform boundary margin $b>0$ of step 1.1; a strand touching the boundary would make the approximation $\lVert p_j\rVert_2<1$ fail, and an additional inward push would be required.
- Only the *first coordinate* is used in the general-position clauses: a crossing in this lemma means a coincidence of first coordinates of two strands, not a collision of points. Collisions are excluded throughout by the uniform distance bound $M_1-2\eta_*>0$, which is positive by construction and is the reason the perturbation keeps every slice a braid.
- The perturbation moves one coordinate per vertex; the verification that each excluded condition is a *nonzero* polynomial in the parameters is where step 5.1 uses that the two pairs of strands are distinct, so that some label occurs in only one of them, and that the moved vertices carry independent parameters, whose coefficients witness the nonvanishing of the relevant partial derivative; and the induction of step 6.1 is the only place where the root bound for polynomials enters.
