---
id: lem-generic-complex-algebraic-whitney-regularity
kind: lemma
title: Generic complex algebraic Whitney regularity
status: draft
origin: session
deps: [def-finite-complex-algebraic-whitney-stratification-and-control-data, thm-generic-fibre-dimension, lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs, lem-classical-variety-noetherian-components, lem-dimension-nonempty-open-subset, thm-zariski-tangent-space-jacobian-kernel, lem-grassmannian-standard-affine-charts, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Hassler Whitney, Tangents to an analytic variety, Annals of Mathematics 81 (1965), 496–549
      url: https://doi.org/10.2307/1970400
---

## Statement

Assume AC. Let $S,Y\subseteq\mathbb C^n$ be disjoint irreducible smooth locally closed complex algebraic varieties with $Y\subseteq\overline S$ and $\dim Y<\dim S$. There is a proper closed algebraic subset $E\subsetneq Y$ such that $(S,Y)$ satisfies Whitney (a) and (b) at every point of $Y\setminus E$. Finite prescribed incident upper strata can be treated with one common exceptional subset by taking a finite union. The same result holds in the affine charts of a quasi-projective algebraic ambient manifold.

## Facts & Assumptions

**Given:** AC, smooth irreducible disjoint $S,Y\subseteq\mathbb C^n$, with $Y\subseteq\overline S$ and $\dim Y<\dim S$.

[F1] Whitney (a),(b) use limits of tangent planes and secant lines as specified in [[def-finite-complex-algebraic-whitney-stratification-and-control-data]]. Complex tangent limits remain complex linear, and annihilation by their complex covectors implies containment of the corresponding real secant line.

[F2] A dominant morphism of irreducible algebraic varieties has nonempty pure-dimensional fibers of its expected dimension over a dense target open ([[thm-generic-fibre-dimension]]).

[F3] A point in a positive-dimensional irreducible complex algebraic variety can be reached by a normalized holomorphic curve whose punctured part lies in any prescribed nonempty Zariski open ([[lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs]]).

[F4] Algebraic closed subsets have finitely many components, and proper closed subsets of irreducible varieties have smaller dimension ([[lem-classical-variety-noetherian-components]], [[lem-dimension-nonempty-open-subset]]).

[F5] Tangents are kernels of the equation Jacobian, and Grassmannian matrix-chart coordinates and transitions are algebraic ([[thm-zariski-tangent-space-jacobian-kernel]], [[lem-grassmannian-standard-affine-charts]]).

[A1] AC is inherited from the algebraic fiber and curve suppliers ([[def-axiom-of-choice]]).

## Proof

1.1 Put $d=\dim S$ and form the graph $G$ of the map $(x,y)\mapsto(T_xS,[x-y])$ on $S\times Y$, into $\operatorname{Gr}(d,n)\times\mathbb P^{n-1}$. This is algebraic by [F5]: local Jacobian minors with a nonzero pivot express the tangent plane as the graph of a matrix of regular functions, and the secant projective coordinates are regular because $x\ne y$. Take its reduced closure $Z$ in $\overline S\times Y\times\operatorname{Gr}(d,n)\times\mathbb P^{n-1}$. The original graph is locally closed and dense, hence open in $Z$. The product is irreducible: on affine charts with coordinate domains $A,B$, write two nonzero tensors using finite linearly independent coefficient lists in $B$. Their coefficient functions in $A$ are not all zero. Choose a point of the first irreducible chart where a nonzero coefficient of each tensor is nonzero; there both tensors specialize to nonzero elements of the domain $B$, so their product is nonzero. Thus $A\otimes_{\mathbb C}B$ is a domain. Products of affine charts cover $S\times Y$ with nonempty pairwise overlaps, proving irreducibility globally; its graph and graph closure $Z$ are therefore irreducible. Let $B=Z\setminus G$, a proper closed subset, and let $g:Z\to Y$ be the projection. It is onto on $G$, hence dominant. [F1, F4, F5, construct]

2.1 Apply [F2] to $g$, obtaining a dense open on which $Z_y$ has pure dimension $r=\dim Z-\dim Y$. This number is positive: each fiber contains its original graph over all $x\in S$, which is a copy of $S$ of positive dimension. For each irreducible component $B_i$ of $B$, remove its image closure if $B_i\to Y$ is nondominant. If it is dominant, [F2] on that component gives a further dense open where its fiber has dimension $\dim B_i-\dim Y\le r-1$, by [F4]. Intersect these finitely many opens. On the resulting dense open $Y^0$, $Z_y$ is pure $r$-dimensional and $B_y$ has dimension at most $r-1$. Thus no irreducible component of $Z_y$ is contained in $B_y$. Every point of $Z_y$ lies in a component whose intersection with $G_y$ is a nonempty dense open. [F2, F4, A1, step 1.1, algebra]

3.1 Fix $y\in Y^0$ and a limiting incidence point $(y,y,T,[u])\in Z_y$, where $u\ne0$. Choose an irreducible component of $Z_y$ containing that point. It has positive dimension and meets $G_y$ densely by step 2.1. By [F3], there is a normalized holomorphic arc in this component through the incidence point with punctured arc in $G_y$. Crucially its second coordinate is the fixed point $y$ for the entire arc. Write its coordinates as $(x(s),y,T(s),[u(s)])$, so $T(s)=T_{x(s)}S$ and $[u(s)]=[x(s)-y]$ for $s\ne0$. Choose a projective chart nonzero at $[u]$. Its normalized representative is holomorphic, and some coordinate of $x(s)-y$ has a finite positive vanishing order $m$, since $x(s)\ne y$ on the punctured disk. Therefore $x(s)-y=s^m v(s)$ with $v(s)$ holomorphic and $v(0)\ne0$, spanning the limiting line $[u]$. [F3, step 2.1, construct]

4.1 For any complex covector $p_0$ annihilating $T$, extend it holomorphically to covectors $p(s)$ annihilating $T(s)$. In a Grassmannian matrix chart, write $T(s)$ as the graph of $A(s)$ and use the frame $(-A(s)^t b,b)$ for fixed coefficient $b$ chosen to give $p_0$ at zero. Since the punctured arc lies in $S$, its derivative satisfies $p(s)x'(s)=0$. Differentiating the expression of step 3.1 and dividing by $s^{m-1}$ gives $p(s)(m v(s)+s v'(s))=0$ for $s\ne0$. Letting $s\to0$ yields $m p_0 v(0)=0$, so $p_0u=0$. Every annihilator covector has this property, hence the limiting complex secant direction lies in $T$. This is the radial secant calculation on an actually constructed fixed-$y$ arc, rather than an assumed replacement of moving lower-stratum points by fixed ones. [F5, step 3.1, algebra]

5.1 Now take arbitrary sequences $x_j\in S$ and $y_j\in Y$ tending to the same $y\in Y^0$, with tangent planes tending to $T$ and real secant lines tending to $\ell$. Their complex projective secants tend to the complex line spanned by $\ell$. Their graph points converge to a point $(y,y,T,[\ell])$ of $Z_y$, so steps 3.1–4.1 imply $\ell\subseteq T$. This proves Whitney (b) for the moving-point sequences in its full definition. [F1, step 3.1, step 4.1]

6.1 To obtain Whitney (a), take any sequence $x_j\to y$ with tangent limit $T$ and any nonzero $w\in T_yY$ viewed as a real tangent vector. In a smooth chart of $Y$, choose $y_j=y+\epsilon_j w+o(\epsilon_j)$ with $\epsilon_j>0$ tending to zero and $\|x_j-y\|/\epsilon_j\to0$, for example $\epsilon_j=\sqrt{\|x_j-y\|}$. Then the secants from $y_j$ to $x_j$ tend to the real line spanned by $w$. Whitney (b) from step 5.1 places that line in $T$. Since every real tangent vector is so obtained, $T_yY\subseteq T$, proving Whitney (a). [F1, step 5.1, construct]

7.1 Put $E=Y\setminus Y^0$. It is proper algebraic closed and satisfies the claimed conclusion. For finitely many upper strata, apply the argument to each and take the union of their proper exceptional subsets; irreducibility of $Y$ makes the complement of that finite union nonempty. On a finite affine ambient cover, apply the same construction to the nonempty lower-stratum opens in those charts and remove the closures in $Y$ of their exceptional sets. Each such closure still has smaller dimension by [F4], so their finite union is proper. This gives the quasi-projective-chart version. [F4, step 2.1, step 5.1, step 6.1] ∎

## Source and integrity note

The cited Whitney source identifies the established theorem; its full proof was not retrieved/read in this construction. The local proof above uses the actually read existing algebraic fiber-dimension suppliers and the separately authored normalized-curve helper. The decisive fixed-lower-point passage is proved by generic fiber purity of the full moving-secant incidence closure; differentiating an arbitrary radial curve alone would not have proved Whitney (b).
