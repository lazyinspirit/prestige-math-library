---
id: lem-characteristic-disk-center-saddle-index-count
kind: lemma
title: "The characteristic disk has one more center than saddle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-transversely-oriented-codimension-one-foliation, lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary, thm-heine-borel-rn, def-countable-choice-principle-for-foliation-pair, def-degree-of-a-circle-loop, cor-degree-descends-to-circle-loop-classes, cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero, lem-lifts-of-circle-loop-concatenation-and-reversal, thm-path-lifting-for-covering-maps, thm-homotopy-lifting-for-covering-maps, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, thm-chain-rule-for-total-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 3
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a76, printed pp. 16-19 (the index count of the characteristic disk); the boundary-degree and punctured-disk arguments are supplied locally"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a
cooriented codimension-one foliation of a smooth $3$-manifold $M$ with
nowhere-vanishing defining form $\omega$
([[def-transversely-oriented-codimension-one-foliation]]), and let $h:D^2\to M$
be a $C^2$ disk map whose characteristic covector $\beta=h^*\omega$ is nowhere
vanishing on $\partial D^2$ and has finitely many interior zeros, all
nondegenerate, each a center or a saddle
([[lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary]]).
Assume moreover that the boundary loop is either leafwise ($\beta(\tau)=0$ everywhere) or a closed transversal ($\beta(\tau)\neq0$ everywhere), where $\tau$ is its tangent. Then the characteristic line field of $h$ has finitely many nondegenerate
centers and saddles, and their numbers satisfy
$$c-s=1 .$$
In particular there is at least one center.

## Facts & Assumptions

**Given:** A cooriented codimension-one foliation $F$ with defining form $\omega$, and a $C^2$ map $h:D^2\to M$ whose characteristic covector $\beta=h^*\omega$ is nowhere vanishing on $\partial D^2$ and whose interior zeros are finitely many nondegenerate center/saddle points, with the boundary leafwise or a closed transversal as stated.

[F1] Relative generic position supplies exactly the stated boundary and interior behaviour, and it also identifies each singularity with a nondegenerate critical point of the local transverse function, definite Hessian for a center and indefinite Hessian for a saddle ([[lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary]]).

[F2] In a foliation chart with transverse coordinate $z$ one has $\omega=a\,dz$ with $a\neq0$, and $\beta=(a\circ h)\,d(z\circ h)$; writing $\beta=P\,dx+Q\,dy$ in oriented source coordinates, $\nabla u$ with $u=z\circ h$ satisfies $(P,Q)=(a\circ h)\nabla u$, so at a zero $p$ the chain rule gives $D(P,Q)(p)=(a\circ h)(p)\,D^2u(p)$ ([[def-transversely-oriented-codimension-one-foliation]], [[thm-chain-rule-for-total-derivatives]]).

[F3] Closed bounded subsets of $\mathbb R^2$ are compact, and a continuous positive function on a compact set has a positive minimum ([[thm-heine-borel-rn]]).

[F4] Degree of circle loops: for a based loop $\alpha$ in $S^1$ the degree $\deg(\alpha)=\widetilde\alpha(1)$ is computed by the lift from $0$, descends to $\pi_1$, equals $0$ exactly for nullhomotopic loops, and adds under concatenation and changes sign under reversal; moreover there is a continuous argument along any continuous path in $S^1$ by path lifting, and the increment of an argument along a path is invariant under homotopies of paths with fixed endpoints ([[def-degree-of-a-circle-loop]], [[cor-degree-descends-to-circle-loop-classes]], [[cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero]], [[lem-lifts-of-circle-loop-concatenation-and-reversal]], [[thm-path-lifting-for-covering-maps]], [[thm-homotopy-lifting-for-covering-maps]]).

[F5] The identity map of $S^1$ has degree $1$ and a single coordinate reflection has degree $-1$ ([[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]]).

## Proof

**Proof technique:** direct.

1.1 Write $\beta=h^*\omega=P\,dx+Q\,dy$ in the oriented source coordinates of the disk and define the characteristic field $X:=(Q,-P)$, so that $\iota_X(dx\wedge dy)=\beta$; then $X$ vanishes exactly at the zeros of $\beta$, which are the finitely many nondegenerate interior points $p_1,\dots,p_N$ of the hypothesis, and $X$ is nowhere zero on $\partial D^2$ and on a collar of it. [given, F1, F2]

2.1 **Boundary degree.** The normalized field $x\mapsto X(x)/|X(x)|$ is a continuous loop in $S^1$ on the counterclockwise circle $\partial D^2$, and its degree is $1$. If $h(\partial D^2)$ lies in one leaf, then $\beta(\tau)=0$ for the unit tangent $\tau$ of $\partial D^2$, while $\beta\neq0$ on the boundary; from $0=\beta(\tau)=(dx\wedge dy)(X,\tau)$ the vector $X$ is tangent to the boundary circle and nonzero, hence $X(x)=\varepsilon(x)\,\tau(x)$ with $\varepsilon\neq0$, and $\varepsilon$ is continuous on the connected circle, so it has a constant sign: the normalized field is $\pm\tau$ and has the same degree as the unit tangent $\tau$, which is the rotation of the identity map and so has degree $1$ [F5]. If $h|_{\partial D^2}$ is a closed transversal, write $X=an+b\tau$ with $n$ the outward unit normal; then $\beta(\tau)=(dx\wedge dy)(X,\tau)=a\,(dx\wedge dy)(n,\tau)$ with $(dx\wedge dy)(n,\tau)>0$ for the counterclockwise orientation, so $a$ has a fixed nonzero sign, and the straight homotopy $X_s=(1-s)X+s\,\sigma n$ with $\sigma=\operatorname{sign}a$ has normal component $\sigma((1-s)|a|+s)\neq0$, hence is nonzero for all $s\in[0,1]$; the normalized fields are therefore homotopic loops, and the normalized outward normal $n$ has degree $1$ [F5], so the boundary degree is $1$ in both cases. [step 1.1, F4, F5]

3.1 **Outer polygon and holes.** Since $\partial D^2$ has a zero-free collar and the zeros are interior, by [F3] we may choose a regular polygon $Q_0$, star-shaped about the origin with positive radial function $r_0(\theta)$, whose boundary lies in the zero-free collar and whose closed convex hull contains all $p_i$. Around each $p_i$ choose pairwise disjoint disks $D_i$ with closures in the interior of $Q_0$ and containing no zero of $X$ other than $p_i$, and inside $D_i$ a centered closed square $Q_i$ with positive radial function $\rho_i(\theta)$ about $p_i$. The radial homotopies $\theta\mapsto((1-s)r_0(\theta)+s)e^{i\theta}$ and $\theta\mapsto p_i+((1-s)\rho_i(\theta)+sR_i)e^{i\theta}$, with $R_i$ the radius of $D_i$, move $\partial Q_0$ to the boundary circle of $D^2$ and $\partial Q_i$ to $\partial D_i$ through loops on which $X$ never vanishes; by the homotopy invariance of the argument increment [F4] the degree of the normalized field on $\partial Q_0$ equals the boundary degree $1$ of step 2.1, and the degree on $\partial Q_i$ equals the degree on $\partial D_i$. [step 2.1, F3, F4]

4.1 **The local degree at a zero is the sign of the Hessian.** Fix $p_i$ and work in a foliation chart around $h(p_i)$ with transverse coordinate $z$ and $u=z\circ h$. By [F2] the derivative of $(P,Q)$ at $p_i$ is $(a\circ h)(p_i)D^2u(p_i)$, and $X=(Q,-P)$, so $DX(p_i)=(a\circ h)(p_i)J\,D^2u(p_i)$ with $J$ the quarter-turn matrix of determinant $1$. The normalized field near $p_i$ is homotopic through nonzero fields on a small circle to the normalized linear field of $DX(p_i)$. If $D^2u(p_i)$ is definite, write $H=D^2u(p_i)$ and let $\lambda$ be any eigenvalue; the family $H_s=(1-s)H+s\lambda I$ is invertible for every $s\in[0,1]$, so the normalized fields of $JH_s$ give a homotopy, and for $H=\lambda I$ the field $J H x$ is, in the complex notation $x_1+ix_2$, the map $z\mapsto-\lambda i\,z$, of degree $1$. If $D^2u(p_i)$ is indefinite, choose coordinates diagonalizing it with eigenvalues $\lambda_1>0>\lambda_2$; the family $(1-s)H+s\operatorname{diag}(\lambda_1,-\lambda_1)$ stays invertible, and for $H=\operatorname{diag}(1,-1)$ one computes $JHx=(-\sin\theta,-\cos\theta)=-i\,e^{-i\theta}$ on the unit circle, of degree $-1$. Hence a center contributes local degree $+1$ and a saddle contributes $-1$. [step 3.1, F1, F2, F4]

5.1 **The index sum.** Cover the closed polygon $Q_0$ by a finite grid of closed axis-parallel rectangles chosen so that every grid line through a side of some square $Q_i$ is a grid line; then each grid cell either lies inside one of the squares $Q_i$ or has interior disjoint from all of them. Discard the cells lying inside a square $Q_i$ and the cells disjoint from $Q_0$; for every remaining cell $C$, the set $C\cap Q_0$ is convex, hence contractible, and is contained in the closed zero-free region $A=Q_0\setminus\bigcup_i\operatorname{int}(Q_i)$, so the normalized field $g=X/|X|$ is defined on $C\cap Q_0$ and the loop $g|_{\partial(C\cap Q_0)}$ extends to a map of the convex set $C\cap Q_0$, hence is nullhomotopic and has argument increment $0$ [F4]. Summing the increments over the finitely many cells, every edge of the grid that lies in the interior of $A$ occurs twice with opposite orientations and cancels by the additivity and reversal rules [F4] (the cells' boundaries are finite polygonal paths, and the common edges are traversed in opposite directions with equal image under $g$); what survives is the boundary of $Q_0$ traversed counterclockwise together with the boundaries of the squares $Q_i$ traversed clockwise. Therefore $0=\deg(g|_{\partial Q_0})-\sum_i\deg(g|_{\partial Q_i})$, that is, $1=\sum_i\operatorname{ind}_{p_i}(X)$. [step 3.1, step 4.1, F4]

6.1 By step 4.1 the sum $\sum_i\operatorname{ind}_{p_i}(X)$ equals $c-s$, where $c$ is the number of centers and $s$ the number of saddles among the nondegenerate zeros; step 5.1 gives $c-s=1$, so in particular $c\ge1$ and the zeros of the characteristic line field are exactly the finitely many nondegenerate centers and saddles. The proof used the relative-genericity supplier, the chain rule, compactness and the elementary degree calculus of circle loops; all of these are choice-free and the only inherited hypothesis is the stated $\mathrm{AC}_\omega$ of the cooriented interface. [step 2.1, step 5.1] ∎
