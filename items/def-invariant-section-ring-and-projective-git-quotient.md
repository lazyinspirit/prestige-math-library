---
id: def-invariant-section-ring-and-projective-git-quotient
kind: definition
title: The invariant section ring and the projective GIT quotient
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
justified_by: []
aliases: []
forward_refs: [cex-semistable-locus-depends-on-linearization, ex-gm-on-projective-line-with-two-linearizations]
deps: [lem-linearizations-powers-and-equivariant-section-ring, def-g-linearization-of-an-invertible-sheaf, lem-proj-veronese-invariance, def-proj-graded-ring-points, thm-proj-structure-sheaf-scheme, def-ample-invertible-sheaf, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
      locator: "Section 1.3, Proposition 1.29 and its proof, printed p. 11; Proposition 1.35, printed p. 12"
    - title: "P. E. Newstead, Geometric Invariant Theory, lecture notes, CIMAT Guanajuato 2006 (CEL/HAL; archived copy)"
      url: "https://web.archive.org/web/20231019082211id_/https://cel.hal.science/cel-00392098/file/newstead_notes.pdf"
      locator: "Lecture 3, Sections 3.2-3.5, in particular Theorem 3.4 and the definition preceding it"
    - title: "Victoria Hoskins, Moduli Problems and Geometric Invariant Theory, FU Berlin lecture notes (2015/16)"
      url: "https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf"
      locator: "Definition 5.2 and Theorem 5.3"
    - title: "I. Dolgachev, Lectures on Invariant Theory, London Mathematical Society Lecture Note Series 296, Cambridge University Press, 2003"
      url: "https://www.math.ens.psl.eu/~benoist/refs/Dolgachev.pdf"
      locator: "Chapter 8.1-8.2, printed pp. 115-121"
---

## Definition

Assume the Axiom of Choice inherited from the Proj construction. Let $G$ be a complex affine algebraic group acting algebraically on a complex projective variety $X$, let $L$ be an ample $G$-linearized invertible sheaf ([[def-g-linearization-of-an-invertible-sheaf]], [[def-ample-invertible-sheaf]]), and let $R(X,L)=\bigoplus_{n\ge0}\Gamma(X,L^{\otimes n})$ be its graded section ring ([[lem-linearizations-powers-and-equivariant-section-ring]]). Write
$$R(X,L)^G=\bigoplus_{n\ge0}\Gamma(X,L^{\otimes n})^G$$
for the graded subalgebra of $G$-invariant sections.

The **projective GIT quotient of $X$ by $G$ with respect to $L$** is the $\mathbb C$-scheme
$$X/\!/_L G:=\operatorname{Proj}R(X,L)^G$$
([[def-proj-graded-ring-points]], [[thm-proj-structure-sheaf-scheme]]), the Proj of the graded invariant subalgebra.

For a homogeneous invariant section $f\in\Gamma(X,L^{\otimes d})^G$ with $d\ge1$ write $D_+(f)=\operatorname{Spec}(R(X,L)^G)_{(f)}\subseteq X/\!/_L G$ for the standard open chart of $\operatorname{Proj}$, and $X_f=\{x\in X:f(x)\ne0\}$ for the nonvanishing locus of $f$.

The construction is recorded together with the given linearization and the ample sheaf $L$; replacing $L$ by a positive tensor power does not change the Proj ([[lem-proj-veronese-invariance]]).

## Remarks

- **Ampleness.** The definition uses the ampleness of $L$ only to know that the section ring has sufficiently many sections for the construction to be the GIT quotient; the Proj itself is defined for any graded algebra, and, when $G$ is reductive, the quotient properties of $X/\!/_L G$ are proved in [[thm-linear-action-projective-git-quotient]] and [[thm-projective-git-quotient-from-invariant-section-ring]].
- **Finite generation is not asserted here.** The definition does not claim that $R(X,L)^G$ is finitely generated, nor that $X/\!/_L G$ is of finite type; For reductive $G$, both are proved in the two theorems just named, the first in the linear case and the second in the ample case.
- **Dependence on the linearization.** The quotient genuinely depends on the chosen linearization of $L$ and not only on the isomorphism class of $L$; this is recorded in [[def-g-linearization-of-an-invertible-sheaf]] and demonstrated on the companion page by [[cex-semistable-locus-depends-on-linearization]] and [[ex-gm-on-projective-line-with-two-linearizations]].
- **Veronese invariance.** Replacing $L$ by $L^{\otimes m}$ replaces $R(X,L)^G$ by its $m$-th Veronese subalgebra and leaves $\operatorname{Proj}$ unchanged ([[lem-proj-veronese-invariance]]).
