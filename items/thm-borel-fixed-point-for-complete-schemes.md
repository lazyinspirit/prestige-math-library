---
id: thm-borel-fixed-point-for-complete-schemes
kind: theorem
title: Borel fixed point theorem for complete schemes
dependency_level: 6
deps:
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
  - thm-proper-ideal-contained-in-maximal-ideal
  - lem-nonaffine-connected-group-geometrically-connected
  - def-affine-scheme
  - def-axiom-of-choice
  - def-borel-subgroup-and-maximal-torus
  - def-complete-variety
  - def-proper-morphism
  - def-smooth-morphism-schemes
  - lem-closed-immersion-proper
  - lem-complete-connected-scheme-to-affine-scheme-morphism-is-constant
  - lem-derived-subgroup-properties
  - lem-fixed-locus-and-normal-orbit-closure
  - lem-orbit-map-faithfully-flat-and-orbit-locally-closed
  - lem-orbit-map-fibres-and-stabilizer-dimension
  - lem-smooth-finite-type-schemes-have-schematically-dense-rational-points
  - prop-faithfully-flat-orbit-map-represents-coset-quotient
  - thm-homogeneous-space-for-smooth-affine-group
  - thm-nonaffine-affine-normal-group-quotient-affine
  - thm-reduction-universal-property
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Corollary 17.3 and the surrounding results, printed p. 353
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Corollary 18.4 and Notes 18.8 (the original induction), printed p. 314; Corollary 9.10, printed p. 143
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Section 5.2, Theorem 118 and its proof, pp. 49-50
---
## Statement

Assume the Axiom of Choice where the geometric orbit and dimension suppliers use it. Let $k$ be a field, let $G$ be a smooth connected solvable affine algebraic group over $k$ ([[def-affine-scheme]], [[def-smooth-morphism-schemes]]), and let $X$ be a nonempty complete $k$-scheme of finite type ([[def-complete-variety]], [[def-proper-morphism]]) with a rational action of $G$. Then there is a point $x\in X(k^{\mathrm a})$ fixed by $G(k^{\mathrm a})$. If $k$ is algebraically closed, the fixed point lies in $X(k)$.

Completeness and affineness are essential for this theorem: $\mathbf G_a$ acting by translation on $\mathbf A^1$ has no fixed point, while an elliptic curve acting on itself by translation is a smooth connected solvable nonaffine group acting on a complete scheme without a fixed point. Smoothness is used by the scheme-theoretic orbit proof below; no assertion that it is necessary for the stated geometric-point conclusion is made.

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, a smooth connected solvable affine algebraic group $G$ over $k$, and a nonempty complete finite-type $k$-scheme $X$ with an action of $G$.

[F1] Base change along $k\to k^{\mathrm a}$ preserves completeness, nonemptiness and finite type, and the action base changes; a fixed point over $k^{\mathrm a}$ is exactly a point of $X(k^{\mathrm a})$ fixed by $G(k^{\mathrm a})$. Smoothness survives field extension; connectedness does so for group schemes by geometric connectedness, and solvability does so because the derived-subgroup construction commutes with field extension. Completeness here means properness, including for nonreduced $X$. (Milne A.75 and A.76, printed p. 587; [[lem-nonaffine-connected-group-geometrically-connected]], [[lem-derived-subgroup-properties]], [[def-proper-morphism]])

[F2] If $\dim G=0$, then $G=1$: a smooth connected finite-type group scheme of dimension zero is a single reduced point. A nonempty finite-type scheme over an algebraically closed field has a $k$-point: take a nonempty affine chart $\operatorname{Spec}B$, choose a maximal ideal in its nonzero finitely generated algebra by AC, and apply the weak Nullstellensatz to its preimage under a polynomial-ring surjection onto $B$. ([[def-smooth-morphism-schemes]], [[lem-nonaffine-connected-group-geometrically-connected]], [[thm-proper-ideal-contained-in-maximal-ideal]], [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]])

[F3] Assume AC. If $G$ is smooth, connected and solvable with $G\ne1$, then $DG$ is a smooth connected closed characteristic normal subgroup scheme with $DG\ne G$, so $\dim DG<\dim G$. ([[lem-derived-subgroup-properties]])

[F4] Assume AC. Let $G$ be smooth over an algebraically closed field acting on a separated finite-type scheme $X$, let $H\subseteq G$ be a smooth closed normal subgroup scheme and $y\in X(k)$ fixed by $H(k)$. Then the closure $Z$ of the $G$-orbit of $y$ is $G$-stable and fixed pointwise by $H(k)$; and for every $x\in Z(k)$ fixed by $H(k)$, the stabilizer $G_x$ contains $H$. ([[lem-fixed-locus-and-normal-orbit-closure]])

[F5] Assume AC. For a smooth group $G$ acting on a separated finite-type scheme $X$, the orbit map $G\to G\cdot x$ is faithfully flat, the orbit of a $k$-point of minimal dimension among the orbits in a $G$-stable closed subset is closed, and for an orbit of minimal dimension the orbit map exhibits the orbit as the coset space $G/G_x$, a separated finite-type scheme. ([[lem-orbit-map-faithfully-flat-and-orbit-locally-closed]], [[lem-orbit-map-fibres-and-stabilizer-dimension]], [[prop-faithfully-flat-orbit-map-represents-coset-quotient]], [[thm-homogeneous-space-for-smooth-affine-group]])

[F6] Assume AC. If $N$ is a closed normal subgroup scheme of the affine group $G$, the quotient $G/N$ is affine; if $G_x$ is a closed subgroup containing $DG$, then $G_x$ is normal in $G$. A reduced connected complete affine finite-type $k$-scheme over algebraically closed $k$ is a single reduced point: properness makes its coordinate algebra finite-dimensional, reducedness makes it a product of finite field extensions of $k$, and connectedness leaves one factor, equal to $k$. The reducedness condition excludes infinitesimal counterexamples such as $\alpha_p$. ([[thm-nonaffine-affine-normal-group-quotient-affine]], [[lem-derived-subgroup-properties]], [[lem-complete-connected-scheme-to-affine-scheme-morphism-is-constant]])

## Proof

**Given:** The Axiom of Choice, a field $k$, a smooth connected solvable affine $k$-group $G$, and a nonempty complete finite-type $k$-scheme $X$ with a $G$-action.

1.1 Base changing along $k\to k^{\mathrm a}$ preserves all hypotheses and produces a nonempty complete finite-type $k^{\mathrm a}$-scheme with an action of the smooth connected solvable group $G_{k^{\mathrm a}}$, and a fixed point there is a point of $X(k^{\mathrm a})$ fixed by $G(k^{\mathrm a})$; for the second assertion we may therefore assume $k$ algebraically closed, and it suffices to prove the first. We keep the given scheme structure on $X$; no reduction of the ambient action is required. [F1]

1.2 We argue by induction on $d=\dim G$. If $d=0$, then $G=1$ by [F2] and any $k$-point of the nonempty finite-type $k$-scheme $X$ (which exists by [F2]) is fixed by $G(k)$. [F2]

2.1 Suppose $d>0$; then $G\ne1$, and [F3] makes $N=DG$ a smooth connected closed normal subgroup scheme with $\dim N<d$, solvable as a subgroup of the solvable group $G$. By the induction hypothesis applied to the action of $N$ on $X$, there is a point $y\in X(k)$ fixed by $N(k)$. By [F4] the orbit closure $Z$, equipped with its reduced induced closed subscheme structure, is a nonempty $G$-stable closed subset of $X$, fixed pointwise by $N(k)$; it is complete as a closed subscheme of the complete scheme $X$, and reduced by its chosen induced scheme structure. [F3, F4, step 1.1]

3.1 Among the $G$-orbits of $k$-points of the nonempty $Z$, choose one of minimal dimension and let $x$ be a point of it; its orbit $O_x$ is closed in $Z$ and hence complete. The orbit lemma in [F5] applies on the reduced orbit closure $Z$: the smooth connected $G$ is geometrically integral, hence its orbit closure is irreducible and reduced, a classical variety over algebraically closed $k$ (Milne Appendix A.22(a)-(d), printed p. 574, the scheme/classical closed-point dictionary). By [F5] the orbit map $G\to O_x$ is faithfully flat and exhibits $O_x\cong G/G_x$ as the coset space, a separated finite-type scheme. Since $x\in Z(k)$ is fixed by $N(k)$, [F4] gives $N=DG\subseteq G_x$; by [F6] the subgroup $G_x$ is then normal in $G$, so $G/G_x$ is an affine group scheme by [F6], connected (as a quotient of the connected group $G$), and complete because it is isomorphic to $O_x$. [F4, F5, F6, step 2.1]

4.1 The orbit $O_x$ has its reduced orbit structure from [F5], so its isomorphic quotient $G/G_x$ is reduced. Applying the reduced connected complete affine assertion of [F6] makes this quotient the reduced point $\operatorname{Spec}k$. Its scheme kernel is therefore all of $G$, so $G_x=G$; hence $x$ is fixed by $G(k)$. This completes the induction, and with [step 1.1] it proves both assertions of the statement. [F6, step 3.1] ∎ 