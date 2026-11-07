---
id: lem-finite-marked-local-homeomorphism-from-a-punctured-four-torus
kind: lemma
title: Finite marked local homeomorphism from a punctured four-torus
status: draft
origin: session
deps:
  - def-countable-choice
  - lem-parametric-immersion-extension-on-a-disk
  - lem-formal-immersion-homotopies-extend-over-a-subcritical-handle
  - lem-restriction-of-formal-immersion-data-has-the-parametric-lifting-property
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Frank Quinn, Ends of maps I, Annals of Mathematics 110 (1979), 275–331, especially Section 8"
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/ends1.pdf
---

## Statement

Assume Countable Choice. Let $T^4=\mathbb R^4/(32\mathbb Z)^4$, let $q:\mathbb R^4\to T^4$ be the quotient, and let $C=q([-2,2]^4)$ have its displayed affine coordinates. There are a smoothly embedded closed four-ball $B\subset T^4\setminus C$, an open set $O\subset T^4$ containing $T^4\setminus\operatorname{int}B$, and an orientation-preserving local homeomorphism
$$j:O\longrightarrow(-8/3,8/3)^4$$
such that $j(q(x))=x$ for every $x\in[-2,2]^4$. The ball parameterization extends to a larger concentric ball disjoint from $C$. On the compact set $T^4\setminus\operatorname{int}B$, the local inverse charts admit a finite cover and uniform shrinking constants. The map $j$ is the composition of a smooth immersion with a coordinatewise increasing piecewise linear homeomorphism of the target; no piecewise linear approximation of a smooth four-manifold is required.

## Statement references

[[def-countable-choice]]

[[lem-parametric-immersion-extension-on-a-disk]]

[[lem-formal-immersion-homotopies-extend-over-a-subcritical-handle]]

[[lem-restriction-of-formal-immersion-data-has-the-parametric-lifting-property]]

## Facts & Assumptions

[A1] Countable Choice is assumed, as in [[def-countable-choice]]. It is used through the three immersion suppliers below; the additional choices in this proof are finite.

[F1] The absolute disk derivative comparison in [[lem-parametric-immersion-extension-on-a-disk]] includes the equal-dimensional disk $D^4\to\mathbb R^4$. Its full-column handle form retains all four source columns and realizes a core in its full source handle.

[F2] For a four-dimensional handle of index $k<4$, [[lem-formal-immersion-homotopies-extend-over-a-subcritical-handle]] integrates compact formal data genuine on an open neighborhood of the preceding source stage, relative to that stage. Weak equivalence of the preceding derivative comparison passes to the attached stage.

[F3] The boundary interface of [[lem-restriction-of-formal-immersion-data-has-the-parametric-lifting-property]] retains the actual base radial derivative independently of the formal bundle columns. Its dimension-qualified first-jet lifting applies to $m=n=4$ and $k=0,1,2,3$; no arbitrary codimension-zero genuine restriction fibration is assumed.

## Proof

**Given:** The standard affine torus, its marked cube $C$, and [A1].

1.1 Put $F(q(x))=\sum_{i=1}^4(1-\cos(\pi x_i/16))$. Its critical points have each coordinate $0$ or $16$ modulo $32$. A point with $k$ coordinates equal to $16$ has index $k$ and value $2k$. In centered coordinates $y_i$ near a critical point, the changes $u_i=\sqrt2\sin(\pi y_i/32)$ give exactly $F=2k+\sum_{+}u_i^2-\sum_{-}u_i^2$. Thus there is one minimum, four index-one points, six index-two points, four index-three points, and one maximum. Separate equal critical values by finitely many bumps constant near their centers and supported away from the minimum and maximum. Choose their derivatives smaller than the positive minimum of $|dF|$ on the compact transition annuli, so they introduce no new critical point. [given, construct]

1.2 The unchanged sublevel $A_0=\{F\le1\}$ is a smooth four-ball in the flat chart about $0$: $F\le1$ implies $|x_i|\le8$, and the coordinates $u_i$ of step 1.1 identify it with $\sum u_i^2\le1$. It contains $C$, since $4(1-\cos(\pi/8))<1$. Choose a small closed ball $B$ about the maximum in its displayed quadratic chart, with its doubled concentric ball still in that chart and disjoint from $C$, and put $M=T^4\setminus\operatorname{int}B$. [step 1.1, construct]

1.3 The manifold $M$ is obtained from $A_0$ by finitely many handles of indices one, two and three, followed by a collar. Indeed, on every compact slab without a critical point the vector field $\nabla F/|\nabla F|^2$ has $F$ increasing at unit speed and identifies the slab with a level product. In each critical chart the explicit positive and negative quadratic coordinate factors give $D^k\times D^{4-k}$ attached along $S^{k-1}\times D^{4-k}$. Glue these finitely many pieces to the level products. The terminal level is below the unique index-four maximum, so there is no index-four handle. [step 1.1, step 1.2, construct]

2.1 Choose a smooth map $b:T^4\to\mathbb R^4$ equal to the flat coordinate map on an open neighborhood of $A_0$, by a bump supported in the flat chart. The affine framing $e_1,\ldots,e_4$ of $TT^4$ defines a full formal bundle isomorphism $L$ by $L(e_i)=E_i$. Thus $(b,L)$ is an orientation-preserving formal immersion and is already genuine on an open neighborhood of the entire marked zero-handle. [step 1.2, construct]

2.2 The disk comparison [F1] supplies the initial derivative comparison on $A_0$. Apply [F2] successively to the finite handle list of step 1.3, always with $m=n=4$, $k<4$, a one-point parameter space, and empty relative parameter set. Retain all four source columns and the actual base boundary jets of [F3], and fix the genuine open neighborhood of the preceding stage. Cocore directions remain source directions. These are the literal subcritical hypotheses; no relative top-index disk extension or stronger parameter assertion is used. [A1, F1, F2, F3, step 1.3, step 2.1]

2.3 Formal homotopies on a finite stage extend across its unprocessed exterior without a genuine codimension-zero lifting assertion. In the fixed affine framing, formal data are maps to $\mathbb R^4\times\mathrm{GL}^+(4,\mathbb R)$. For an outside collar with coordinate $s\in[0,1)$, set $v=s/(1-s)$ and retract the quadrant $(v,t)$ onto its axes by $(v,t)\mapsto(\max(v-t,0),\max(t-v,0))$. This is the ordinary homotopy-extension retraction, gluing to the identity at the outer collar edge. Compose the formal homotopy with it, retaining the genuine germ on a slightly smaller open neighborhood of the processed stage. Smooth only outside that neighborhood. Compactness of the source and homotopy interval gives positive distance of the matrix values from the singular locus, so sufficiently small relative mollification preserves $\mathrm{GL}^+$ and the fixed germ. This extends formal data only and permits the next application in step 2.2. [F3, step 2.2, construct]

2.4 Finite induction gives a smooth immersion $a:M\to\mathbb R^4$ fixed on the original open neighborhood of $A_0$. Its derivative is orientation-preserving, since the formal homotopy stays in the same component of the invertible matrices. The smooth source germs supplied at the boundary extend $a$ to a neighborhood of $M$; invertibility is open, so shrink that neighborhood to an open $O$ on which $a$ remains an immersion. Choose $O$ with compact closure inside this immersion germ. In particular, $a(q(x))=x$ on the marked cube. [step 2.1, step 2.2, step 2.3]

3.1 Define an odd increasing piecewise linear homeomorphism $\rho:\mathbb R\to(-8/3,8/3)$ by $\rho(t)=t$ for $|t|\le2$ and, for integers $\ell\ge0$, by $\rho(2+4\ell)=8/3-(2/3)2^{-\ell}$, with linear interpolation on consecutive intervals and odd extension. The values are strictly increasing and tend to $8/3$, so this is a homeomorphism onto the stated interval and fixes $[-2,2]$. Set $j=(\rho,\rho,\rho,\rho)\circ a$ on $O$. The inverse-function charts of $a$, followed by the increasing coordinate homeomorphisms, show that $j$ is an orientation-preserving local homeomorphism, has the asserted bounded image, and retains the exact marked cube. [step 2.4, construct]

3.2 Cover the compact set $M$ by finitely many smaller inverse charts with closures in larger inverse charts for $j$. Their positive margins and the uniform continuity of the finitely many local inverses give uniform shrinking constants on this finite cover. These are inverse charts in the open set $O$, including at points of the boundary of $M$; no claim that a half-space boundary itself is open in $\mathbb R^4$ is involved. Together with the concentric ball of step 1.2 and the explicit construction of step 3.1, this proves every assertion. [step 1.2, step 2.4, step 3.1] ∎
