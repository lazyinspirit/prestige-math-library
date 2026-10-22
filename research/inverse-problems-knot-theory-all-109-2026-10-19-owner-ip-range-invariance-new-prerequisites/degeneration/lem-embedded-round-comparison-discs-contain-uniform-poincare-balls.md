---
id: lem-embedded-round-comparison-discs-contain-uniform-poincare-balls
kind: lemma
title: Embedded round comparison discs contain uniformly shaped Poincare balls
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-normalized-univalent-class
  - thm-koebe-distortion-theorem
  - thm-unit-disc-schwarz-lemma-with-rigidity
  - cor-injective-holomorphic-derivative-nonzero
  - def-poincare-metric-hyperbolic-riemann-surface
  - thm-covering-space-lifting-criterion
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Theorem6.1 proof printed448, complete Sections5–7 read; the uniform inner neighborhood of the maximal comparison ball is proved below from actual univalent derivative distortion
---

## Statement

Assume AC, hence Countable Choice. Let $\Omega\subset S^2$ be a simply connected hyperbolic domain containing the closed Euclidean disc $\overline D_2$ in the given finite sphere coordinate. Supply a biholomorphism $\psi:\Omega\to\mathbb D$, normalized by $\psi(0)=0$, and use its curvature-minus-one Poincare metric. Let $\pi:\Omega\to Y$ be a holomorphic covering with the induced quotient Poincare metric, and suppose $\pi$ is injective on $D_2$. Put $r_0=1/1000$. For every $z_*\in D_{r_0}$ define $x=\pi(z_*)$ and
$$t=\operatorname{dist}_Y\bigl(x,Y\setminus\pi(D_1)\bigr).$$
Then $t$ is finite and positive, $t\le\operatorname{inj}_Y(x)$, and $B_Y(x,t)$ is the largest open metric ball centered at $x$ contained in $\pi(D_1)$. Its unique preimage $E$ in $D_1$ satisfies
$$D_{r_0}\subset E\subset D_1\subset\overline D_1\Subset D_2.$$
Writing $\rho_0=2|\psi'(0)|$, one has the explicit metric bounds
$$\frac{\rho_0}{9}\le t\le20\rho_0.$$
All constants and Euclidean containments are uniform over these domains and covers, even when $\rho_0\to0$. Thus actual injectivity of one normalized round disc and convergence of the chosen points to its center supply the uniform ball-shape input required by a local pairing theorem. No geometric mechanism producing that round disc or cover injectivity is asserted.

## Facts & Assumptions

**Given:** AC, the actual domain and disk uniformizer, the quotient covering and its injectivity on the round disc, and the indicated center.

[A1] Choice and Countable Choice are [[def-axiom-of-choice]] and [[def-countable-choice]].

[F1] If $f$ is normalized and univalent on the unit disc, then $(1-u)/(1+u)^3\le|f'(w)|\le(1+u)/(1-u)^3$ at $|w|=u<1$. [[def-normalized-univalent-class]], [[thm-koebe-distortion-theorem]] An injective holomorphic derivative never vanishes. [[cor-injective-holomorphic-derivative-nonzero]]

[F2] A holomorphic self-map of the unit disc fixing zero has $|h(w)|\le|w|$. [[thm-unit-disc-schwarz-lemma-with-rigidity]]

[F3] Poincare length and distance are defined by pulling back $2|dw|/(1-|w|^2)$ from the disk uniformizer and descending under the covering; every inverse covering sheet is a local isometry. [[def-poincare-metric-hyperbolic-riemann-surface]] Path lifting is unique and preserves these local lengths. [[thm-covering-space-lifting-criterion]] The quotient model identifies injectivity radius with half the infimum of lengths of noncontractible based loops, with infinite radius in the simply connected case. [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]]

## Proof

1.1 Write $k=|\psi'(0)|>0$. The function $f(w)=\psi(2w)/(2\psi'(0))$ is normalized univalent on $\mathbb D$. For $|z|\le1$, [F1] at $|z|/2\le1/2$ gives $$\frac4{27}\le\frac{|\psi'(z)|}{k}\le12.$$ Also $w\mapsto\psi(2w)$ is a disc self-map fixing zero, so [F2] gives $|\psi(z)|\le|z|/2\le1/2$. Therefore its exact Poincare density satisfies $$\frac4{27}\rho_0\le\rho_\Omega(z)=\frac{2|\psi'(z)|}{1-|\psi(z)|^2}\le16\rho_0\qquad(|z|\le1),\qquad\rho_0=2k.$$ This is a relative-density estimate, so it remains valid when the absolute scale $\rho_0$ is arbitrarily small. The normalized derivative bounds, rather than just an upper density bound, are essential for that conclusion. [F1, F2, F3, given, construct, algebra]

2.1 The restriction of $\pi$ embeds the closed disc $\overline D_1$ and a neighborhood into $Y$, because it is injective on the larger $D_2$ and is a local biholomorphism. Its image is an embedded compact disc with boundary $\pi(\partial D_1)$. Any path from $x$ to outside its open interior must first meet that boundary. Lift the initial path segment within this chart. Its Euclidean length is at least $1-|z_*|>3/4$, so step 1.1 bounds its Poincare length below by $(4/27)(3/4)\rho_0=\rho_0/9$. Hence $t\ge\rho_0/9>0$. The complement is nonempty, since the images of points of $D_2\setminus\overline D_1$ are outside $\pi(D_1)$ by injectivity. To bound $t$ above, the straight segment from $z_*$ to the boundary point $1$ lies in $\overline D_1$, has Euclidean length less than two, and its density is at most $16\rho_0$. More sharply its length is at most $16(1+r_0)\rho_0<20\rho_0$. Its endpoint is outside $\pi(D_1)$, so $t\le20\rho_0$. All distance estimates used actual first exits in the embedded chart; a shortcut outside the chart cannot evade that exit. [F3, step 1.1, given, construct, algebra]

3.1 By the definition of $t$, every point at distance less than $t$ from $x$ lies in $\pi(D_1)$. Conversely any larger open radius contains a point of its complement, by the defining infimum. Thus $B_Y(x,t)$ is exactly the maximal open centered ball contained there; no minimizing boundary point needs to be chosen. For $z\in D_{r_0}$, the straight segment from $z_*$ to $z$ has Euclidean length less than $2r_0$ and lies in $D_1$. Its Poincare length is less than $32r_0\rho_0<\rho_0/9\le t$, by step 1.1. Hence $\pi(z)\in B_Y(x,t)$, giving $D_{r_0}\subset E$. The other containments follow from the actual chart and its injectivity. Finally any based loop at $x$ of length less than $2t$ lies entirely in $B_Y(x,t)$: at each point use the shorter of its two subarcs from $x$, of length less than $t$. This ball lies in the embedded topological disc $\pi(D_1)$, so every such loop is contractible. The quotient characterization in [F3] therefore gives $\operatorname{inj}_Y(x)\ge t$. This proves all ball, injectivity and uniform-shape conclusions at their exact supplied geometric interface. [F3, step 1.1, step 2.1, given, construct, algebra] ∎

## Actual reading and remaining interface

The actual complete Koebe distortion proof, its normalized-univalent definition and second-coefficient supplier, the full Schwarz lemma, the injective-holomorphic derivative supplier, full Poincare surface and disk definitions, covering lifting and complete hyperbolic-model suppliers were read. The authentic Iteration full Sections5–7, including the complete6.1 comparison-ball argument, were read. No domain uniformization is inferred from the unproved application geometry: the biholomorphism is supplied in this statement.

This gives the analytic ball-shape conclusion once the actual normalized domain contains the round disc and projects it injectively. The three-dimensional domain containment, quotient injectivity and nonidentity parabolic normalization remain geometric obligations. All earlier six thin-analytic drafts and accepted mass11 successors are unchanged.
