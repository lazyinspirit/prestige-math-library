---
id: def-good-and-geometric-quotients-for-group-actions
kind: definition
title: Good and geometric quotients for group actions
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
justified_by: []
aliases: []
deps: [def-classical-algebraic-prevariety-regular-maps-and-varieties, lem-classical-points-inside-affine-scheme, def-categorical-and-geometric-quotients-of-classical-varieties, def-rational-action-on-affine-variety, def-locally-ringed-space, def-morphism-locally-ringed-spaces, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. E. Newstead, Geometric Invariant Theory, lecture notes, CIMAT Guanajuato 2006 (CEL/HAL; archived copy)"
      url: "https://web.archive.org/web/20231019082211id_/https://cel.hal.science/cel-00392098/file/newstead_notes.pdf"
      locator: "Lecture 1, Sections 1.3-1.4 (good and geometric quotients, Theorem 1.6, Theorem 1.12) and Lecture 3, Sections 3.2-3.5"
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
      locator: "Section 1.3, Definitions 1.28 and 1.30 and Theorem 1.24, printed pp. 11-12"
    - title: "Victoria Hoskins, Moduli Problems and Geometric Invariant Theory, FU Berlin lecture notes (2015/16)"
      url: "https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf"
      locator: "Sections 3.3-3.5 (good and geometric quotients, Remark 3.34, Theorem 4.30)"
    - title: "I. Dolgachev, Lectures on Invariant Theory, London Mathematical Society Lecture Note Series 296, Cambridge University Press, 2003"
      url: "https://www.math.ens.psl.eu/~benoist/refs/Dolgachev.pdf"
      locator: "Chapter 6.1, printed pp. 91-95"
---

## Definition

Assume AC inherited from the quotient suppliers. Let $G$ be a complex affine algebraic group acting algebraically on a classical complex variety $X$ ([[def-rational-action-on-affine-variety]]) and let $Y$ be a $\mathbb C$-scheme ([[def-locally-ringed-space]]). For the scheme, affine and sheaf clauses below, $X$ denotes its associated reduced finite-type complex scheme, obtained by gluing spectra of its affine coordinate rings; the algebraic action is interpreted on that scheme. Its complex closed points recover the classical variety ([[def-classical-algebraic-prevariety-regular-maps-and-varieties]], [[lem-classical-points-inside-affine-scheme]]). Closed invariant subsets refer to underlying closed subsets with their reduced induced schemes. A morphism $\pi:X\to Y$ of $\mathbb C$-schemes, that is, a morphism of locally ringed spaces commuting with the structure morphisms to $\operatorname{Spec}\mathbb C$ ([[def-morphism-locally-ringed-spaces]]), is a **good quotient** of the action if:

(i) $\pi$ is $G$-invariant and surjective;

(ii) $\pi$ is affine, i.e. $\pi^{-1}(U)$ is an affine scheme for every affine open $U\subseteq Y$;

(iii) for every open $U\subseteq Y$ the pullback $\mathcal O_Y(U)\to\mathcal O_X(\pi^{-1}U)^G$ is an isomorphism onto the $G$-invariant functions;

(iv) for every closed $G$-stable $Z\subseteq X$ the image $\pi(Z)$ is closed in $Y$; and

(v) for disjoint closed $G$-stable $Z_1,Z_2\subseteq X$ one has $\pi(Z_1)\cap\pi(Z_2)=\varnothing$.

It is a **geometric quotient** if in addition for every $y\in Y(\mathbb C)$, the complex points of its fibre $\pi^{-1}(y)$ form exactly one $G(\mathbb C)$-orbit. The fibre condition is stated on complex closed points; it does not identify all scheme points with classical points.

The definition deliberately separates the good-quotient assertions, which the two main theorems of this page prove for the projective GIT quotient, from the orbit-space assertion, which holds only on the stable locus.

## Remarks

- **Relation to the categorical-quotient definition.** A good quotient has the categorical universal property for invariant morphisms to classical varieties viewed as their associated schemes; when the target is a classical variety, this is the notion of [[def-categorical-and-geometric-quotients-of-classical-varieties]]. On complex closed points it gives a geometric quotient there exactly when its fibres are the $G$-orbits; both implications are proved in [[lem-good-quotient-local-on-target]] below. For affine $X$, [[thm-invariant-ring-finite-generation-and-affine-categorical-quotient]] supplies the classical closed-point quotient properties. The proof of [[lem-affine-chart-quotients-for-invariant-sections]] additionally verifies the scheme surjectivity, affine and invariant-sheaf clauses, giving good quotients of the affine charts.
- **Provenance of the notion.** This is Seshadri's notion as presented by Newstead in §1.4 and used by Brion (in the form $\mathcal O_Y\cong(\pi_*\mathcal O_X)^G$) and by Hoskins in §§3.3-3.4.
- **AC.** The definition itself uses no choice; the axiom is inherited only through the quotient suppliers that the later theorems invoke, and every theorem that uses such a supplier carries AC explicitly.
