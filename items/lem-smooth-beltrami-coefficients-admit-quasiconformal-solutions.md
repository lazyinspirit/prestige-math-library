---
id: lem-smooth-beltrami-coefficients-admit-quasiconformal-solutions
kind: lemma
title: "Smooth Beltrami coefficients admit quasiconformal solutions"
status: published
origin: pipeline
deps:
  - def-measurable-beltrami-coefficient
  - lem-nondegenerate-local-holder-beltrami-coordinates
  - def-acl-sobolev-quasiconformal-homeomorphism
  - def-beltrami-coefficient-and-maximal-dilatation
  - thm-uniformization-simply-connected-riemann-surfaces
  - def-riemann-surface-and-holomorphic-atlas
  - def-biholomorphic-map
  - def-riemann-sphere-holomorphic-charts
  - thm-one-point-compactification-properties
  - rem-riemann-sphere-one-point-compactification
  - lem-three-simply-connected-models-are-inequivalent
  - def-compact-space
  - def-axiom-of-choice
  - def-countable-choice
  - thm-continuous-partials-and-cauchy-riemann-imply-holomorphic
  - thm-chain-rule-for-total-derivatives
  - thm-euclidean-inverse-function-theorem
  - lem-classical-derivatives-are-weak-derivatives
  - def-wirtinger-derivatives
  - thm-three-point-transitivity-mobius-transformations
  - def-mobius-transformation
  - thm-mobius-transformations-biholomorphic-sphere
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - def-r-orientation-of-a-topological-manifold
  - thm-local-homology-detects-interior-points-boundary-points-and-dimension
  - thm-singular-chain-homotopy-formula
  - thm-determinant-sign-detects-orientation-change
  - prop-relative-homology-is-functorial-for-maps-of-pairs
  - lem-coordinate-ball-classes-identify-local-homology-stalks
dependency_level: 2
proof_strategy: direct
axiom_use: >-
  Assume the Axiom of Choice, as required by the uniformization theorem. Its
  countable-choice consequences are used by the local Hölder-coordinate
  supplier. The finite subcover is obtained from compactness, and no other
  selection is made.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §14.2, printed p. 196: local solutions form a holomorphic atlas by conformal transition maps, and uniformization of the resulting sphere complex structure gives a global solution; the transition and regularity details are proved directly here."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. Let $\mu$ be a Beltrami coefficient on the Riemann sphere with $\|\mu\|_\infty\le k<1$ ([[def-measurable-beltrami-coefficient]]), and suppose its representatives are $C^\infty$ in the two standard charts ([[def-riemann-sphere-holomorphic-charts]]). Then there is an orientation-preserving quasiconformal homeomorphism $f:\widehat{\mathbb C}\to\widehat{\mathbb C}$ with $\mu_f=\mu$ almost everywhere ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-beltrami-coefficient-and-maximal-dilatation]]). It can be normalized by $f(0)=0$, $f(1)=1$, and $f(\infty)=\infty$ ([[def-mobius-transformation]], [[thm-three-point-transitivity-mobius-transformations]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, a smooth chartwise Beltrami coefficient $\mu$ on $\widehat{\mathbb C}$, and a constant $0\le k<1$ with $\|\mu\|_\infty\le k$.

[F1] A Beltrami coefficient is an a.e. class with chart representatives related by the holomorphic pullback law; the essential norm is invariant under those chart changes ([[def-measurable-beltrami-coefficient]]).

[F2] For each chartwise $C^{0,1/2}$ coefficient bounded pointwise by $k_0<1$, the local coordinate lemma gives neighborhoods with injective $C^{1,1/2}$ solutions $\Phi_{\bar z}=\mu\Phi_z$, positive Jacobian, open image, and a $C^{1,1/2}$ inverse ([[lem-nondegenerate-local-holder-beltrami-coordinates]]).

[F3] The standard sphere with its usual topology and charts is a nonempty connected Hausdorff second-countable, simply connected Riemann surface; biholomorphisms are homeomorphisms ([[lem-three-simply-connected-models-are-inequivalent]], [[def-riemann-surface-and-holomorphic-atlas]], [[def-biholomorphic-map]]).

[F4] The Riemann sphere is the one-point compactification of $\mathbb C$ and is compact and Hausdorff ([[rem-riemann-sphere-one-point-compactification]], [[thm-one-point-compactification-properties]]).

[F5] Under the Axiom of Choice, every simply connected Riemann surface is biholomorphic to exactly one of $\widehat{\mathbb C}$, $\mathbb C$, and $\mathbb D$ ([[thm-uniformization-simply-connected-riemann-surfaces]]).

[F6] A homeomorphism is analytically $K$-quasiconformal when it is locally $W^{1,2}$ and satisfies $|f_{\bar z}|\le (K-1)/(K+1)|f_z|$ a.e.; its Beltrami coefficient is $f_{\bar z}/f_z$ where $f_z\ne0$ ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-beltrami-coefficient-and-maximal-dilatation]]).

[F7] The Wirtinger formulas express a real differential as $Dh=h_z,dz+h_{\bar z}\,d\bar z$; the real chain rule and inverse-function theorem give the derivatives of compositions and local inverses. A $C^1$ map with $h_{\bar z}=0$ is holomorphic ([[def-wirtinger-derivatives]], [[thm-continuous-partials-and-cauchy-riemann-imply-holomorphic]], [[thm-chain-rule-for-total-derivatives]], [[thm-euclidean-inverse-function-theorem]]).

[F8] If a continuous function on an open planar chart has essential supremum at most $k$, then its pointwise modulus is at most $k$: a point where it exceeded $k$ would, by continuity, give an open disk where it exceeds an intermediate value greater than $k$, contradicting that disk's positive area ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F9] For a $C^1$ local diffeomorphism of oriented surfaces, the local orientation multiplier is the sign of its derivative determinant: in centered coordinates, the straight homotopy from the derivative $L$ to $G(x)$ avoids $0$ on a sufficiently small punctured ball since $G(x)=Lx+o(|x|)$ and $L$ is invertible. The homotopy remains in the target chart after shrinking the ball; its prism chain homotopy descends to relative chains because the punctured subspace remains punctured. Thus the two local maps agree on homology, and determinant sign detects whether the local orientation is preserved ([[def-r-orientation-of-a-topological-manifold]], [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]], [[thm-singular-chain-homotopy-formula]], [[thm-determinant-sign-detects-orientation-change]], [[prop-relative-homology-is-functorial-for-maps-of-pairs]], [[lem-coordinate-ball-classes-identify-local-homology-stalks]]).

[F10] Compactness means every open cover has a finite subcover ([[def-compact-space]]).

[F11] A Möbius transformation is a biholomorphism of the sphere, and any ordered triple of distinct sphere points can be carried to $0,1,\infty$ by one ([[thm-mobius-transformations-biholomorphic-sphere]], [[thm-three-point-transitivity-mobius-transformations]]).

[F12] The classical derivatives of a $C^1$ map are locally integrable and represent its weak derivatives under Countable Choice ([[lem-classical-derivatives-are-weak-derivatives]]).

[F13] The Axiom of Choice implies Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]).

**Choice.** Full Axiom of Choice is required by [F5]. The local-coordinate supplier uses Countable Choice; compactness supplies the finite subcover, so no further family of local solutions is selected.

## Proof

**Proof technique:** local charts and uniformization.

1.1 In each standard source chart the coefficient has a smooth representative and essential norm at most $k$ by [F1]. By [F8], its pointwise modulus is at most $k$. Apply [F2] with the bound $k$, regularity order $0$ and exponent $1/2$ at every point. The family of all local solution charts so obtained covers the compact sphere; [F4] gives a finite subcover, which we denote $(V_j,\Phi_j)_{j=1}^m$. Each $\Phi_j$ is a $C^{1,1/2}$ diffeomorphism onto an open subset and solves the Beltrami equation for the coefficient expressed in its source chart. [F1, F2, F4, F8, F13, given]

1.2 On an overlap, fix a point and restrict to a standard source chart $z$ around it. Write $a_i=(\Phi_i)_z$, $b_i=(\Phi_i)_{\bar z}$ and likewise $a_j,b_j$. The pullback law [F1] makes both local equations use the same chart representative $\mu_z$, so $b_i=\mu_z a_i$ and $b_j=\mu_z a_j$. The transition $\tau=\Phi_i\circ\Phi_j^{-1}$ is $C^1$; the real chain rule and inverse derivative formula [F7] give $\tau_{\bar w}=(b_i a_j-a_i b_j)/(|a_j|^2-|b_j|^2)=0$, whose denominator is $J_{\Phi_j}>0$ by [F2]. Thus $\tau$ is holomorphic by [F7]. Interchanging $i$ and $j$ proves its inverse is holomorphic as well. These transitions are holomorphic near every overlap point, so the finite family $(V_j,\Phi_j)$ is a holomorphic atlas on the topological sphere. Since $J_{\Phi_j}>0$, [F9] shows these charts induce the usual sphere orientation. [F1, F2, F3, F7, F9, algebra]

1.3 Let $X$ be the sphere with this atlas. Its topological properties are unchanged: it is a Riemann surface by [F3], compact and simply connected by [F4]. Uniformization [F5] gives a biholomorphism from $X$ to one of $\widehat{\mathbb C}$, $\mathbb C$, or $\mathbb D$. The last two targets are not compact: the disks $D(0,n)$ for $n\ge1$ cover $\mathbb C$ with no finite subcover, and the disks $D(0,1-1/n)$ for $n\ge2$ cover $\mathbb D$ with no finite subcover. By [F10], neither is compact. A biholomorphism is a homeomorphism [F3], so it preserves compactness. Hence its target must be $\widehat{\mathbb C}$; write $H:X\to\widehat{\mathbb C}$ for this biholomorphism. [F3, F4, F5, F10, F13, algebra]

1.4 Regard $H$ as a homeomorphism $f$ of the underlying sphere. In a source chart $z$ and a target chart, its local expression has the form $\chi\circ\Phi_j$, where $\chi$ is holomorphic with nonzero derivative because $H$ and its inverse are holomorphic. The chain rule [F7] and the local equation give $f_{\bar z}=\mu_z f_z$ and $J_f=|\chi'\circ\Phi_j|^2J_{\Phi_j}>0$. Moreover $f_z\ne0$: from $J_{\Phi_j}=(1-|\mu_z|^2)|a_j|^2>0$ we have $a_j\ne0$, and $\chi'\ne0$. Since $f$ is locally $C^1$, [F12] makes it locally $W^{1,2}$; the derivatives are locally square-integrable because they are continuous on compact subcharts. With $K=(1+k)/(1-k)$, the equation and [F8] give $|f_{\bar z}|\le (K-1)/(K+1)|f_z|$. By [F6], $f$ is analytically quasiconformal. The positive Jacobian makes it preserve local orientation by [F9], so it is orientation-preserving; the nonvanishing $f_z$ gives $\mu_f=\mu$ a.e. [F1, F2, F6, F7, F8, F9, F12, algebra]

2.1 The three points $f(0),f(1),f(\infty)$ are distinct because $f$ is a homeomorphism. By [F11], choose a Möbius map $M$ carrying them to $0,1,\infty$. Its derivative is nonzero by composing with its holomorphic inverse and applying the chain rule [F7]. In local target charts, $(M\circ f)_{\bar z}=(M'\circ f)f_{\bar z}$ and $(M\circ f)_z=(M'\circ f)f_z$, so postcomposition preserves the derivative ratio and Beltrami coefficient. Since $M\circ f$ is still a local $C^1$ diffeomorphism, it remains in $W^{1,2}_{\rm loc}$ and the same bound in [F6] applies; its local Jacobian is positive because $M$ is conformal. Therefore $M\circ f$ has all claimed properties and the prescribed normalization. [F1, F6, F7, F11, algebra] ∎

## Source notes

Lyubich §14.2 supplies the local-to-global atlas and uniformization route. The transition calculation, smooth local regularity, analytic quasiconformality, and normalization are verified above from the authored local coordinate lemma and the cited library definitions.
