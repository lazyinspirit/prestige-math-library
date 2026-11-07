---
id: lem-compact-complex-projective-submanifolds-have-algebraic-underlying-set
kind: lemma
title: A compact complex projective submanifold has an algebraic underlying set
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-complex-projective-space-and-holomorphic-charts
- lem-holomorphic-line-bundle-section-dimensions-have-polynomial-growth
- thm-hilbert-polynomial-degree-support-dimension
- thm-serre-vanishing
- thm-nonempty-regular-locus-reduced-variety-perfect-field
- thm-regular-locus-is-open-variety
- thm-regular-equals-smooth-over-perfect-field
- lem-smooth-projective-analytification-has-rational-kahler-polarization
- lem-irreducible-complex-varieties-are-analytically-connected
- thm-holomorphic-inverse-function-theorem-several-variables
- thm-identity-theorem-in-several-complex-variables
- lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs
justified_by: []
sources:
  references:
  - title: J.-P. Demailly, Complex Analytic and Differential Geometry (2012)
    url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
    locator: Chapter II section8, Theorem8.10 (Chow), printed121. The special compact-submanifold assertion below is reconstructed from section growth and regular-locus density rather than the source's Remmert–Stein cone argument.
---

## Statement

Assume the Axiom of Choice. Let $X$ be a compact connected complex manifold of dimension $n\ge1$ and let $i:X\hookrightarrow\mathbb P^N(\mathbb C)$ be a holomorphic embedding. Let $Z$ be the reduced Zariski closure of $i(X)$ in $\mathbb P^N_{\mathbb C}$. Then $Z$ is integral, $\dim Z=n$, and
$$Z(\mathbb C)=i(X).$$
The same assertion holds for a one-point zero-dimensional complex manifold. This statement concerns the algebraic underlying set and its dimension; it does not yet identify analytic and algebraic local rings or prove an algebraic group law.

## Facts & Assumptions

**Given:** AC, the compact connected complex manifold, its holomorphic projective embedding and the reduced algebraic closure in the Statement.

[A1] AC is explicit and supplies any inherited DC or Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Complex projective space has its homogeneous-coordinate holomorphic charts. On a connected complex manifold, a holomorphic function vanishing on a nonempty open set is zero everywhere, by the local several-variable identity theorem and continuation through overlapping charts ([[def-complex-projective-space-and-holomorphic-charts]], [[thm-identity-theorem-in-several-complex-variables]]).

[F2] On a compact complex $n$-manifold, a holomorphic line bundle $L$ satisfies $\dim H^0(X,L^m)\le C(m+1)^n$. A coherent Hilbert polynomial on a projective scheme has degree its support dimension, and sufficiently high twists have vanishing higher coherent cohomology ([[lem-holomorphic-line-bundle-section-dimensions-have-polynomial-growth]], [[thm-hilbert-polynomial-degree-support-dimension]], [[thm-serre-vanishing]]).

[F3] Over a perfect field, a reduced finite-type variety has a nonempty regular locus, the regular locus is open, and regularity is smoothness. Smooth complex varieties have holomorphic manifold charts, irreducible complex varieties are analytically connected, and a holomorphic map with invertible differential between equal-dimensional manifolds is locally invertible ([[thm-nonempty-regular-locus-reduced-variety-perfect-field]], [[thm-regular-locus-is-open-variety]], [[thm-regular-equals-smooth-over-perfect-field]], [[lem-smooth-projective-analytification-has-rational-kahler-polarization]], [[lem-irreducible-complex-varieties-are-analytically-connected]], [[thm-holomorphic-inverse-function-theorem-several-variables]]).

[F4] For an irreducible positive-dimensional complex variety, every point is the limit of a normalized holomorphic curve arc whose nonzero points lie in any specified nonempty Zariski open ([[lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs]]).

## Proof

1.1 The homogeneous ideal of polynomials vanishing on $i(X)$ is prime in the homogeneous sense. Indeed, if homogeneous $P,Q$ have product zero on $X$ and $P$ is not identically zero there, the open set where its pullback section is nonzero is nonempty, so $Q$ vanishes there. In the projective charts its pullback is a holomorphic section with a local function representative. By [F1] and connectedness it vanishes identically. Thus one factor is always zero on $X$. A homogeneous ideal prime on homogeneous elements is prime: the first nonzero homogeneous components of any two nonzero classes in its graded quotient have nonzero product. Consequently the homogeneous coordinate quotient defining $Z$ is a domain, and $Z$ is integral. [A1, F1, given, algebra]

2.1 Let $L=i^*O(1)$; its holomorphic transition functions are the nonzero ratios of projective coordinates on overlapping standard charts. A homogeneous polynomial of degree $m$ pulls back to a holomorphic section of $L^m$. Its kernel is precisely the degree-$m$ component of the vanishing ideal of $Z$, by the definition of Zariski closure. Hence the degree-$m$ homogeneous coordinate quotient injects into $H^0(X,L^m)$ and has dimension at most $C(m+1)^n$ by [F2]. For all sufficiently large $m$ that coordinate dimension equals the coherent Hilbert polynomial of $O_Z$: apply Serre vanishing to the coherent ideal sheaf in $0\to I_Z(m)\to O_{\mathbb P^N}(m)\to O_Z(m)\to0$, and to $O_Z(m)$ for its higher cohomology. The Hilbert polynomial has exact degree $\dim Z$ by [F2]. Its leading coefficient is positive because the coordinate dimensions are positive for all large $m$. The polynomial bound therefore gives $\dim Z\le n$. [F1, F2, step 1.1, construct, algebra]

3.1 Let $R=Z_{\rm reg}$, a nonempty smooth irreducible open by [F3]. The image $i(X)$ meets $R$: otherwise its Zariski closure would be contained in the proper closed complement. Near a point of intersection, the holomorphic embedding of $X$ factors through the smooth manifold $R^{\rm an}$, so its injective differential gives $n\le\dim R=\dim Z$. Together with step 2.1 this is equality. The inverse function theorem in [F3] makes $i(X)\cap R(\mathbb C)$ open in $R^{\rm an}$, since the equal-dimensional differential is invertible at every such point. It is also closed there because $i(X)$ is compact and projective space is Hausdorff. The space $R^{\rm an}$ is connected by [F3], so this nonempty open and closed subset is all of $R(\mathbb C)$. [F1, F3, step 1.1, step 2.1, algebra]

4.1 For every $z\in Z(\mathbb C)$, [F4] applied to $R$ supplies a holomorphic curve arc with centre $z$ and every nonzero point in $R$. Step 3.1 places those nonzero points in the closed set $i(X)$, so its centre also lies there. Thus $Z(\mathbb C)=i(X)$. For $n=0$ and connected $X$, the image is one point and its reduced Zariski closure is that point, of dimension zero. These arguments prove exactly the set/dimension assertion without an unstated smoothness or group-law conclusion for $Z$. [F4, step 3.1, algebra] ∎

## Source-reading boundary

The cached 2012 Demailly text was read at Chapter II Theorem8.10 and its complete cone proof, printed121; the text's later cross-reference II-7.10 is not the actual theorem number in this edition. That proof invokes Remmert–Stein, which is not imported here. The local section-growth supplier, algebraic Hilbert polynomial, connected regular locus and normalized curve arcs instead establish the stated restricted assertion directly.
