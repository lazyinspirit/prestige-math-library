---
id: "thm-compact-locally-contractible-euclidean-subsets-are-neighborhood-retracts"
kind: "theorem"
title: "Compact locally contractible Euclidean subsets are neighborhood retracts"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-cw-complex-with-closure-finiteness-and-weak-topology","def-axiom-of-choice","thm-homotopic-maps-induce-equal-maps-in-singular-cohomology","prop-singular-cohomology-is-contravariantly-functorial"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Appendix Theorem A.7, pp.8–10
      url: https://pi.math.cornell.edu/~hatcher/AT/ATapp.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume AC. For a compact subset $K\subset\mathbb R^m$, the following are equivalent:

- There is an open neighborhood $O$ of $K$ and a continuous retraction $r:O\to K$.
- $K$ is **weakly locally contractible**: for every $x\in K$ and every neighborhood $U$ of $x$ in $K$, some neighborhood $V\subset U$ of $x$ has nullhomotopic inclusion $V\hookrightarrow U$.

For such $K$, every abelian coefficient group $G$ and every integer $p$, restriction induces an isomorphism
$$\varinjlim_{O\supset K\text{ open}}H^p(O;G)\xrightarrow{\sim}H^p(K;G),$$
where transitions restrict to smaller open neighborhoods. AC is used to select nearest points and controlled extensions on the complement's cells. The converse and the cohomology conclusion from a supplied retraction are choice-free.

## Facts & Assumptions

[F1] [[def-cw-complex-with-closure-finiteness-and-weak-topology]] specifies the attaching, closure-finiteness and weak-topology conditions. The finite-dimensional, locally finite cell structure used below is constructed directly from Euclidean cubes.

[F2] [[def-axiom-of-choice]] allows selections from the nonempty sets of nearest points and of admissible continuous cell extensions.

[F3] [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]] gives homotopy invariance for every abelian coefficient group and integer degree.

[F4] [[prop-singular-cohomology-is-contravariantly-functorial]] gives restriction, identity and composition on cohomology.

## Proof

**Given:** The compact set $K$ and its Euclidean metric. For $K=\varnothing$, take $O=\varnothing$ and the empty retraction; the local condition is vacuous, and the empty neighborhood is terminal in the restriction system, giving zero cohomology. If $m=0$, the only other possibility is the one-point space, where the identity proves all assertions. Assume $m\ge1$ and $K\ne\varnothing$.

1.1 Put $X=\mathbb R^m\setminus K$. Consider all closed dyadic cubes of side $2^{-j}$ for $j\ge0$. Retain those disjoint from $K$ that are not contained in a larger such dyadic cube of side at most one. Distinct retained cubes have disjoint interiors: dyadic cubes whose interiors intersect are nested, and retention excludes proper nesting. They cover $X$, since a point of $X$ has positive distance from the closed $K$, so every sufficiently small dyadic cube containing it avoids $K$; among its finitely many ancestors up to unit size there is a largest avoiding cube. The retained family is locally finite in $X$. Indeed, near a fixed point $y\in X$, choose a closed ball disjoint from $K$ and a dyadic level whose cubes meeting a smaller ball all lie in the first ball. Any smaller retained cube meeting a still smaller ball would then lie in an avoiding cube at that fixed level, contradicting maximality. Only cubes at the finitely many coarser levels can meet that smaller ball, and there are finitely many of them. In particular each retained closed cube, being compact in $X$, meets only finitely many retained cubes. [given]

1.2 Conversely, suppose $r:O\to K$ is a retraction with $O$ open. Given $x\in K$ and a neighborhood $U$ of $x$ in $K$, first take a relatively open neighborhood $U'$ with $x\in U'\subset U$. By continuity of $r$, a small ambient ball $B$ about $x$ lies in $O\cap r^{-1}(U')$. On $V=K\cap B$, the formula $H(y,t)=r((1-t)y+tx)$ is continuous, remains in $U'\subset U$, starts at $y$ and ends at $x$. The segment stays in the convex ball $B$. Hence $V\hookrightarrow U$ is nullhomotopic. This direction uses no AC. [given]

1.3 For the cohomology limit, use representatives $(U,a)$ where $U$ is an open neighborhood of $K$ and $a\in H^p(U;G)$. Declare two representatives equal when their restrictions agree on some smaller open neighborhood contained in their intersection. The intersection of finitely many neighborhoods is again a neighborhood. This proves transitivity and makes addition well-defined by restriction to a common intersection; all group laws hold at a common stage. Compatible maps out of the groups give a unique map on these classes, so this is their direct limit. In particular a class is zero precisely when its representative restricts to zero on some smaller neighborhood. By [F4], restriction to $K$ is compatible and defines the map in the statement. [F4, given]

2.1 Give this tiling its face subdivision: where a smaller dyadic cube meets a larger face, use the smaller faces on that part, and do the same recursively on their boundaries. This produces cells that are relatively open dyadic faces, with top cells the retained cube interiors. Here is why this is a compatible finite subdivision on each closed cube. Intersections of aligned dyadic faces, when nonempty, are faces of one of the two, or one face is contained in the other. On a fixed face only finitely many cube faces occur by step 1.1. Their smallest pieces cover the face: at a point of a coarse face, the cubes on each incident side tile a neighborhood of that point; their faces either contain that face locally or supply its smaller pieces. Descend through the finitely many dyadic sizes present to reach a piece with no further subdivision in its relative interior. Boundaries are treated by the same procedure in a strictly lower dimension, so they are unions of the resulting lower-dimensional pieces. The procedure uses the same intersecting faces from both incident cubes and hence agrees on their intersection. Each closed cell is a closed cube of its dimension with a possibly subdivided boundary, homeomorphic to a closed ball, and its interior is the specified open cell. There are finitely many cells on each closed retained cube. Local finiteness from step 1.1 proves the weak topology: near any point only finitely many closed cells occur, so a subset closed on each is locally a finite union of relatively closed sets, hence closed. Attaching each closed cell along its already subdivided boundary and this weak topology give the cell structure of [F1], of dimension at most $m$. [F1, step 1.1]

2.2 Given a retraction $r:O\to K$, the pullback $r^*$ supplies every class on $K$ from the stage $O$, since restriction back to $K$ is the identity by [F4]. This proves surjectivity. For injectivity take $a\in H^p(U;G)$ with zero restriction to $K$, and put $W=U\cap O$. The straight-line map $H:W\times[0,1]\to\mathbb R^m$, $H(y,t)=(1-t)y+tr(y)$, fixes every point of $K$. The set $V$ of points $y\in W$ for which $H(\{y\}\times[0,1])\subset U$ is open and contains $K$. To prove openness, for such a $y$ use continuity at each $(y,t)$ and openness of $U$ to obtain product neighborhoods mapped into $U$; finitely many of their interval factors cover $[0,1]$, and the intersection of the finitely many spatial factors is a neighborhood of $y$ contained in $V$. On $V$, $H$ is a homotopy in $U$ from inclusion to the composite $V\xrightarrow{r}K\hookrightarrow U$. By [F3] and [F4], the restriction of $a$ to $V$ is $r^*(a|_K)=0$. The criterion in step 1.3 proves injectivity. The same calculation works for every $G$ and integer $p$ and uses no AC once $r$ is supplied. [F3, F4, step 1.3]

3.1 The cells shrink near each point $x\in K$ in the following precise sense. In a bounded ball about $x$, there are only finitely many dyadic cubes with side at least a fixed positive $a$ and at most one. The retained ones are closed and avoid $x$. Thus some neighborhood of $x$ misses all of them. In that neighborhood every retained cube has diameter less than $\sqrt m\,a$. It follows that for any ball $B$ about $x$, some smaller ball $B'$ has the property that every closed cell meeting $B'$ is contained in $B$: first make all its containing retained cubes have diameter less than one third the radius of $B$, then take $B'$ inside the concentric ball of one third that radius. The same holds for their faces. Consequently, if $Y$ is the subcomplex of cells whose closures lie in $B$, then $Y\cup K$ contains a neighborhood of $x$ in $\mathbb R^m$. [step 1.1, step 2.1]

3.2 Define a subcomplex $Z\subset X$ and a map $r:Z\to K$ inductively. Include every vertex, and send it to a nearest point of $K$. Such a point exists: the continuous distance function achieves its minimum on the nonempty compact set $K$; select one for each vertex using [F2]. Having defined the map on the chosen $(k-1)$-skeleton, include exactly the $k$-cells whose boundaries are included and whose prescribed boundary map extends continuously over the closed cell to $K$. For such a cell let $d$ be the infimum of the image diameters of all these extensions. These diameters are finite since $K$ is compact. If $d>0$, choose an extension with diameter less than $2d$, possible by the definition of infimum and [F2]. If $d=0$, the boundary image has diameter zero because it is contained in the image of every extension. The boundary is nonempty for $k\ge1$, so the boundary map is constant; choose its constant extension, with diameter zero. This explicitly resolves the zero-infimum case. After $m$ stages put $Z=Z^m$. The extensions agree on cell boundaries, and local finiteness and the weak topology in step 2.1 make the resulting map continuous on $Z$. These selections range over sets of maps on a set of cells, so [F2] applies. [F1, F2, step 2.1]

4.1 Suppose now the weak local contractibility condition holds. Fix $x\in K$ and an arbitrarily small metric ball about it in $K$. Choose balls $V_0,\ldots,V_m$ about $x$ and balls $U_0,\ldots,U_{m-1}$ about $x$ as follows, working down from $V_m$ inside the given ball. Choose the radius $\rho_i$ of $U_i$ less than one sixth the radius of $V_{i+1}$. Weak local contractibility supplies a neighborhood whose inclusion in $U_i$ contracts there; choose a ball $V_i$ inside this neighborhood and inside $U_i$ and restrict that contraction to $V_i$. Thus $V_i\hookrightarrow U_i$ is nullhomotopic. This is a finite series of existential choices, introducing no further choice axiom. Choose an ambient ball $B$ centered at $x$ with radius less than half that of $V_0$, and let $Y$ be the subcomplex of step 3.1 with closures in $B$. Every vertex $v$ of $Y$ satisfies $|r(v)-x|\le |r(v)-v|+|v-x|\le2|v-x|$, since $x\in K$ is a candidate nearest point. Hence $r(Y^0)\subset V_0$. [F2, step 3.1, step 3.2, given]

5.1 Inductively suppose all $(i-1)$-cells of $Y$ are included in $Z$ and $r(Y^{i-1})\subset V_{i-1}$. On the boundary of any $i$-cell of $Y$ the map therefore lands in $V_{i-1}$. Compose it with the supplied nullhomotopy in $U_{i-1}$ to extend over the closed cell, viewing a ball as the cone on its boundary; the terminal constant makes the map continuous at the cone point. Thus the cell is included in $Z$. This admissible extension has diameter at most $2\rho_{i-1}$. The extension selected in step 3.2 has diameter less than $4\rho_{i-1}$ if its infimum is positive, and diameter zero otherwise. Its image contains a boundary value lying in $V_{i-1}\subset U_{i-1}$, so its whole image lies within distance $5\rho_{i-1}$ of $x$. The radius choice in step 4.1 puts it in $V_i$. This proves the induction for $1\le i\le m$. In particular $Y\subset Z$ and $r(Y)\subset V_m$, inside the arbitrarily small initial ball. [step 3.2, step 4.1]

6.1 Extend $r$ to $Z\cup K$ by the identity on $K$. Steps 3.1 and 5.1 show both that $Z\cup K$ contains a neighborhood of every $x\in K$ and that this extension is continuous at $x$: for any prescribed ball in $K$ choose the above $Y$, and then an ambient neighborhood of $x$ contained in $Y\cup K$, also small enough that its points in $K$ lie in that prescribed ball. On this neighborhood every value lies in the ball. Away from $K$, continuity is already step 3.2, since $X$ is open. The union of the interiors of all neighborhoods of points of $K$ that are contained in $Z\cup K$ is an open set $O$ containing $K$ and contained in $Z\cup K$. Restricting $r$ gives the required retraction. This takes the union of all such neighborhoods and does not select one at each point. [step 3.1, step 3.2, step 5.1]

7.1 Steps 6.1 and 1.2 prove both directions, and steps 1.3 and 2.2 prove the cohomology conclusion. The empty and ambient-dimension-zero cases were treated in the Given paragraph. A singleton in any dimension also has the constant retraction, and the nearest-point construction is then constant; its zero extension infima are exactly the case treated in step 3.2. Zero coefficients give zero cohomology groups, and negative degrees are zero by [F3] and [F4]. Finite skeletal induction stops at dimension $m$; it does not require infinitely many nested contraction neighborhoods. No singular simplex normalization or nondegeneracy is used in the cohomology argument. The only global choices are the nearest points and positive-infimum cell extensions in step 3.2, as declared in [F2]. [F2, F3, F4, step 1.2, step 1.3, step 2.2, step 3.2, step 6.1] ∎
