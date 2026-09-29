---
id: lem-complex-flag-splitting-over-smooth-bases-with-injective-real-pullback
kind: lemma
title: Complex flag splitting with injective real pullback on smooth bases
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-complex-linear-and-compatible-bundle-connections
  - lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - def-smooth-manifold
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-smooth-function-on-a-relatively-open-subset-of-a-half-space
  - def-smooth-map-between-manifolds-with-boundary
  - prop-chain-rule-for-smooth-half-space-maps
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - thm-second-countable-implies-lindelof
  - thm-countable-union-of-countable
  - def-real-and-complex-topological-vector-bundle
  - def-locally-trivial-fiber-bundle
  - def-complex-projective-bundle-and-tautological-complex-line
  - thm-integral-complex-projective-bundle-theorem
  - lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator
  - thm-naturality-orientation-sign-and-whitney-product-for-euler-classes
  - thm-cellular-homology-computes-singular-homology
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - def-singular-cochain-complex-with-coefficients
  - def-singular-cohomology-with-coefficients
  - def-singular-cohomology-ring
  - prop-singular-cohomology-is-contravariantly-functorial
  - thm-homotopic-maps-induce-equal-maps-in-singular-cohomology
  - thm-numerable-fiber-bundles-are-hurewicz-fibrations
  - thm-leray-hirsch-module-isomorphism
  - thm-heine-borel-rn
  - thm-compactness-under-continuous-maps
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-finite-products-of-compact-spaces
  - thm-compact-subset-of-a-hausdorff-space-is-closed
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: §3.1, Proposition 3.3 proof and its complex adaptation, printed pp. 80–81
---

## Statement

Assume the Axiom of Choice (AC). Let $E\to M$ be a smooth complex vector
bundle of finite rank $r$ over a finite-dimensional Hausdorff second-countable
smooth manifold, possibly with boundary or empty. There is a smooth complete
flag-bundle projection $q:F(E)\to M$ such that $q^*E$ is a direct sum of $r$
smooth complex line bundles, $q$ is proper, and
$$q^*:H^*(M;\mathbb R)\longrightarrow H^*(F(E);\mathbb R)$$
is injective. Here proper means that inverse images of compact subsets are
compact; $F(E)$ is given the smooth structure of the finite projective tower
constructed below, whose fibers are the complete flags of $E$. In ranks zero
and one take $q$ to be the identity. The assertion is componentwise for
disconnected $M$.

## Facts & Assumptions

**Given:** AC, the stated smooth complex bundle, and its finite rank $r$.

[A1] AC says every family of nonempty sets has a choice function. In particular
it implies countable choice by applying a choice function to the set of
distinct values of a countable family and composing with the indexing map
([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] Every finite-rank smooth complex vector bundle over the stated manifold
admits a smooth Hermitian metric, and a supplied Hermitian metric admits a
compatible complex connection ([[lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles]]).

[F2] A smooth complex bundle has local smooth complex frames; a smooth vector
bundle has smooth local trivializations linear on fibers
([[def-complex-linear-and-compatible-bundle-connections]],
[[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[F3] Boundary charts have relatively open half-space images; smoothness of
maps is checked in such charts, smooth functions admit local Euclidean
extensions, and smooth half-space maps compose
([[def-smooth-manifold]],
[[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]],
[[def-smooth-function-on-a-relatively-open-subset-of-a-half-space]],
[[def-smooth-map-between-manifolds-with-boundary]],
[[prop-chain-rule-for-smooth-half-space-maps]]).

[F4] Every finite-dimensional Hausdorff second-countable smooth manifold,
including one with boundary, is paracompact Hausdorff and CGWH, has CW
homotopy type, and every smooth finite-rank bundle on it is numerable
([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]).

[F5] Under AC$_\omega$, every second-countable space is Lindelöf, and a
countable union of countable sets is countable
([[thm-second-countable-implies-lindelof]],
[[thm-countable-union-of-countable]]).

[F6] Over a paracompact Hausdorff CGWH base of CW homotopy type, the complex
projectivization, tautological line, and its complex-oriented integral Euler
class use the same quotient and local chart formulas as over a CW base
([[thm-integral-complex-projective-bundle-theorem]]). The projective fiber
$\mathbb{CP}^{m-1}$ is compact Hausdorff and has one cell in each dimension
$0,2,\ldots,2m-2$ ([[def-complex-projective-bundle-and-tautological-complex-line]]).

[F7] On $\mathbb{CP}^{m-1}$, the powers $1,x_{\rm taut},\ldots,x_{\rm taut}^{m-1}$
of the tautological real Euler class form an integral
cohomology basis for $m\geq2$ ([[lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator]]).
Euler classes commute with orientation-preserving pullback
([[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

[F8] Cellular homology computes singular homology for CW complexes
([[thm-cellular-homology-computes-singular-homology]]). The cohomological
universal-coefficient sequence for a free integral chain complex is natural
and has the form $0\to\operatorname{Ext}^1(H_{k-1},G)\to H^k(-;G)\to\operatorname{Hom}(H_k,G)\to0$
([[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]).

[F9] Singular cochains are Hom groups with coboundary given by precomposition
with the boundary, cohomology is cocycles modulo coboundaries, and the cup
product is induced by the front/back face formula
([[def-singular-cochain-complex-with-coefficients]],
[[def-singular-cohomology-with-coefficients]],
[[def-singular-cohomology-ring]]). Pullbacks compose and
coefficient homomorphisms commute with pullbacks
([[prop-singular-cohomology-is-contravariantly-functorial]]).

[F10] Homotopic maps induce equal singular-cohomology maps
([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[F11] If a Serre fibration over a path-connected CW complex has finitely many
homogeneous cohomology classes restricting to a basis on each fiber, the
Leray–Hirsch cup-product map is an isomorphism over any commutative unital
coefficient ring ([[thm-leray-hirsch-module-isomorphism]]). A numerable fiber
bundle with its support-subordinate partition is a Hurewicz, hence Serre,
fibration under AC ([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]).
Numerability means that the local product charts carry a locally finite
partition whose supports lie in their chart domains
([[def-real-and-complex-topological-vector-bundle]],
[[def-locally-trivial-fiber-bundle]]).

[F12] Closed bounded subsets of Euclidean space are compact; continuous images
of compact spaces are compact; closed subsets of compact spaces are compact;
finite products and finite unions of compact spaces are compact; compact
subsets of Hausdorff spaces are closed
([[thm-heine-borel-rn]], [[thm-compactness-under-continuous-maps]],
[[thm-closed-subspace-of-a-compact-space-is-compact]],
[[thm-finite-products-of-compact-spaces]],
[[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

## Proof

**Proof technique:** direct projective tower and Leray–Hirsch on CW models.

1.1 Assume AC as in [A1]. It discharges the full-AC hypotheses of [F1], [F4], [F6]–[F8], and [F11], and implies AC$_\omega$ for [F5]. In the disconnected cohomology argument below, AC is also used to choose componentwise cocycle representatives and primitives. [A1, F1, F4, F5, F6, F7, F8, F11]

1.2 Let $V\to B$ be any smooth complex bundle of rank $m\geq2$ over a finite-dimensional Hausdorff second-countable smooth manifold with boundary allowed. By [F4], $B$ is paracompact Hausdorff CGWH of CW type and $V$ is numerable, so [F6] supplies the topological projective bundle $p:P(V)\to B$ and its tautological line. Locally, projectivizing a smooth frame chart gives $U\times\mathbb{CP}^{m-1}$; on overlaps a smooth matrix map $g:U\cap U'\to\operatorname{GL}_m(\mathbb C)$ acts by $(b,[z])\mapsto(b,[g(b)z])$. In affine projective charts $z_j\neq0$, coordinates are $z_i/z_j$; the overlap formulas are ratios of smooth functions with nonzero denominators, so they extend smoothly in the local Euclidean extensions of [F3], including at boundary points. Their inverse formulas have the same property. Thus these charts make $P(V)$ a smooth manifold with boundary of dimension $\dim B+2(m-1)$, and $p$ is smooth. It is Hausdorff: different base points separate in $B$, and points over one base point separate in a local product because $\mathbb{CP}^{m-1}$ is Hausdorff. It is second-countable: [F5] gives a countable subcover of the frame charts, and the products of their restricted countable base with the finite affine-chart countable base of projective space form a countable base after a countable union. Its tautological line is smooth by the local representative $z_j=1$ and the same smooth transition formulas. [F2, F3, F4, F5, F6]

1.3 Consider one stage $p:P(V)\to B$ with rank $m\geq2$ and first suppose $B$ is connected. Manifold charts are locally path-connected, so $B$ is path-connected. Its projective bundle is numerable: the numeration of $V$ from [F4] projectivizes using the same cover and partition, as required by [F11]. The CW-type extension [F6] supplies $x=e((\gamma_V)_{\mathbb R})\in H^2(P(V);\mathbb Z)$. For each $b\in B$, pullback to the fiber identifies $x$ with the tautological Euler class by [F7]; [F7] says its powers form the integral basis of $H^*(\mathbb{CP}^{m-1};\mathbb Z)$. Write $\bar x$ for the image of $x$ under the coefficient map. The homomorphism $\mathbb Z\hookrightarrow\mathbb R$ is postcomposition on cochains by [F9]. Since coefficient inclusion is multiplicative and the cup product uses the front/back formula, it sends $x^j$ to $\bar x^j$. [F7, F9]

1.4 Each stage $p:P(V)\to B$ is proper. In a smooth chart contained in a projective trivializing domain, shrink a relatively open ball or half-ball $U$ so its closed coordinate ball lies in the chart domain; let $C$ be the image of that closed ball, intersected with the closed half-space in a boundary chart. In dimension zero use the single-point chart and $C=U$. The coordinate set is closed and bounded in Euclidean space, so Heine–Borel [F12] makes $C$ compact; since $B$ is Hausdorff, [F12] makes $C$ closed. The family of all such pairs $(U,C)$ covers $B$. Given compact $K\subseteq B$, choose a finite subcover $(U_i,C_i)$ of $K$. Each $K_i=K\cap C_i$ is closed in the compact space $K$, hence compact by [F12], and the $K_i$ cover $K$. In the product chart, $p^{-1}(K_i)\cong K_i\times\mathbb{CP}^{m-1}$, which is compact by [F6] and [F12]. Their finite union is $p^{-1}(K)$ and is compact by [F12]. Thus $p$ is proper. [F3, F6, F12]

2.1 By [F1] choose a Hermitian metric on $E$. Put $B_0=M$ and $V_0=E$. If $V_{j-1}\to B_{j-1}$ has rank $m\geq2$, use step 1.2 to form $\pi_j:B_j=P(V_{j-1})\to B_{j-1}$ and its smooth tautological line $L_j\subseteq\pi_j^*V_{j-1}$. Pull back the Hermitian metric and let $V_j=L_j^\perp$. In a local nonvanishing frame $e$ of $L_j$, the orthogonal projection is $v\mapsto h(v,e)e/h(e,e)$; it is a smooth complex-linear idempotent of rank one. The images of $1-P$ on vectors forming a basis of its kernel at one point remain independent nearby, so $V_j=\ker P$ is a smooth complex bundle of rank $m-1$. Fiberwise orthogonality gives the smooth bundle isomorphism $\pi_j^*V_{j-1}=L_j\oplus V_j$. Repeating this finite construction until rank one gives $q:B_{r-1}\to M$ and the decomposition $q^*E=L_1\oplus\cdots\oplus L_r$. The tower fiber is the space of ordered orthogonal line splittings; the maps $W_\bullet\mapsto(W_i\cap W_{i-1}^{\perp})_{i=1}^r$ and $(L_i)\mapsto(L_1\oplus\cdots\oplus L_i)_{i=1}^r$ identify it smoothly with the complete flag manifold. [F1, F2, F3, step 1.2]

2.2 The cell dimensions in [F6] imply that the cellular chain groups of $\mathbb{CP}^{m-1}$ are $\mathbb Z$ in degrees $0,2,\ldots,2m-2$ and zero in odd degrees; all cellular differentials are zero. By [F8], its integral homology is consequently $\mathbb Z$ in those even degrees and zero in odd degrees. The universal-coefficient sequence [F8] has zero Ext terms because these homology groups are free, so evaluation identifies $H^{2j}(\mathbb{CP}^{m-1};\mathbb R)$ with $\operatorname{Hom}(\mathbb Z,\mathbb R)\cong\mathbb R$. The restricted powers from step 1.3 are integral generators; naturality of this sequence sends each such generator to $+1$ or $-1$ in that copy of $\mathbb R$. Hence $1,\bar x,\ldots,\bar x^{m-1}$ restrict to an $\mathbb R$-basis on every fiber. This is the coefficient step needed here; no real-coefficient conclusion is assumed from the integral projective bundle theorem. [F6, F7, F8, F9, step 1.3]

3.1 Choose a homotopy equivalence $h:X\to B$ from a connected CW complex, as provided by [F4]. The pullback $p_X:h^*P(V)\to X$ is a projective bundle; pulling back the numeration of $p$ makes it numerable, and [F11] makes it a Serre fibration. The pulled-back classes $1,h^*\bar x,\ldots,(h^*\bar x)^{m-1}$ still restrict to the fiber basis of step 2.2. Apply Leray–Hirsch [F11] with coefficient ring $\mathbb R$: its module isomorphism has the summand for the basis element $1$ equal to $p_X^*$, so $p_X^*$ is injective. If $p^*\alpha=0$ for $\alpha\in H^*(B;\mathbb R)$, pullback functoriality [F9] gives $p_X^*h^*\alpha=0$. Thus $h^*\alpha=0$; since $h$ is a homotopy equivalence, [F10] implies that $h^*$ is an isomorphism, and $\alpha=0$. This proves injectivity for a connected base. [F4, F9, F10, F11, step 2.2]

4.1 A manifold chart can be shrunk to a path-connected open ball or half-ball, so its connected components are open and path-connected. For a disconnected manifold, the projective total space decomposes into the open-and-closed preimages of those components. Every singular simplex has connected image and therefore lies in one such piece. Thus each singular chain complex is the direct sum of the component chain complexes, and its cochain complex is their product. Kernels are componentwise; AC in [A1] chooses a cocycle representative for each component class and a primitive for each component coboundary, so the cohomology is the product of the component cohomologies. The pullback is the product of the connected-stage maps from step 3.1, hence injective. The same argument includes the empty base, whose cohomology groups are zero. [A1, F3, F9, step 3.1]

5.1 The composition of proper maps is proper: the inverse image of a compact set under the last stage is compact, and taking its inverse image under each preceding proper stage preserves compactness. The same finite composition of smooth stage projections is smooth by [F3]. Each stage pullback on real cohomology is injective by steps 3.1–4.1, so their composite $q^*$ is injective. If $r=0$, the flag space is $M$, the pulled-back bundle is the empty direct sum, and $q=1_M$; if $r=1$, $F(E)=M$, $q=1_M$, and the sole summand is $E$. Identity maps are proper and induce identity cohomology maps. For $M=\varnothing$ the tower and all cohomology groups are empty or zero as stated. Boundary charts were retained in step 1.2, so the construction and properness proof include boundary points. [F3, step 1.2, step 1.4, step 2.1, step 3.1, step 4.1]

∎

## Source notes

Hatcher, *Vector Bundles & K-Theory*, §3.1, Proposition 3.3, printed pp. 80–81,
constructs the real splitting tower by projectivizing and splitting off a
tautological line, applies Leray–Hirsch for injectivity, and then adapts the
argument to complex bundles with integral cohomology. The present proof
supplies the smooth half-space charts, properness, and the coefficient bridge
from integral fiber generators to the real-coefficient basis required here.
