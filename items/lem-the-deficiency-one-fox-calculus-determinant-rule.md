---
id: lem-the-deficiency-one-fox-calculus-determinant-rule
kind: lemma
title: "The deficiency-one Fox calculus rule for the Alexander invariant"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps: [def-axiom-of-choice, def-alexander-polynomial-from-the-first-elementary-ideal,
       def-one-variable-alexander-module-of-an-oriented-link,
       def-free-group, def-group-presentation, def-group-ring,
       def-finitely-presented-module-and-algebra, thm-group-ring-is-a-unital-algebra-with-basis-g]
justified_by: []
aliases: []
proof_strategy: literature-input
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. R. Morton, The multivariable Alexander polynomial for a closed braid, arXiv:math/9803138, section 2 (the standard Fox-calculus method, printed pp. 4-5) and the proof of Theorem 1 (printed pp. 5-6)"
      url: "https://arxiv.org/pdf/math/9803138"
    - title: "Anthony Conway, Burau maps and twisted Alexander polynomials, arXiv:1510.06678, section 3.3 and Theorem 3.15 with its proof (printed pp. 16-17)"
      url: "https://arxiv.org/pdf/1510.06678"
    - title: "R. H. Crowell and R. H. Fox, Introduction to Knot Theory, Ginn and Co. (1963), chapters VII-VIII (free differential calculus and the Alexander matrix)"
  scraped: []
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the library's Alexander module. Let $L$ be an oriented link, let $G=G_L$ be its complement group, and take a deficiency-one presentation
$$G=\langle g_1,\ldots,g_{n+1}\mid r_1,\ldots,r_n\rangle$$
([[def-group-presentation]], [[def-free-group]]). Let $\varphi:G\to H$ be a homomorphism to a finitely generated free abelian group, with induced ring map $\mathbb Z[G]\to\mathbb Z[H]$ ([[def-group-ring]]). Form the evaluated Fox matrix $J_\varphi=(\varphi(\partial r_i/\partial g_j))$. If $c$ is a presentation generator with $\varphi(c)\ne1$, delete its column and define
$$Q_\varphi(L)\doteq \frac{\det J_\varphi'}{1-\varphi(c)} \quad\text{in }\operatorname{Frac}(\mathbb Z[H]).$$
The Fox rule identifies this quotient, up to a group-ring unit, with the corresponding specialization of the link's Alexander invariant; admissible deleted columns and presentations give the same invariant up to units. For the natural meridian abelianization $H\cong\mathbb Z^r$, it is the multivariable Alexander polynomial when $r>1$, and for a knot it is $\Delta_L(t)/(1-t)$, where $\Delta_L$ is the one-variable Alexander polynomial of [[def-alexander-polynomial-from-the-first-elementary-ideal]]. Specializations are asserted only when the displayed denominator remains nonzero. A generator with $\varphi(c)=1$ is not an admissible deleted column; the denominator then vanishes. For several components the equal-variable specialization of the multivariable invariant is distinguished from the library's absolute-homology one-variable polynomial.

## Facts & Assumptions

**Given:** AC, an oriented link $L$, a deficiency-one presentation of its group, a homomorphism $\varphi$ to a finitely generated free abelian group $H$, and an admissible deleted generator $c$. AC is inherited from the Alexander module.

[F1] **Literature input.** Morton's standard method, printed pp. 4–5, applies to a presentation of a LINK group: evaluate its Fox derivatives, delete a generator column with $\varphi(c)\ne1$, and divide the determinant by $1-\varphi(c)$. It computes the specialized Alexander invariant; under natural abelianization this is the multivariable polynomial for more than one component and $\Delta_L/(1-t)$ for a knot. Relations written $r=s$ may use derivatives of $r-s$. This is a literature input, not a local derivation of the Fox theorem (Morton, section 2 and proof of Theorem 1).

[F2] The one-variable absolute homology Alexander module and its polynomial $\Delta_L=\gcd E_0(A_L)$ are the conventions of [[def-one-variable-alexander-module-of-an-oriented-link]] and [[def-alexander-polynomial-from-the-first-elementary-ideal]]. For a knot the invariant is the fraction $\Delta_L/(1-t)$; the library's one-variable normalization for several components does not identify its polynomial with every specialization of the multivariable polynomial.

[F3] The multiplication of a group ring is $[g][h]=[gh]$ ([[thm-group-ring-is-a-unital-algebra-with-basis-g]]). For a basis of the finite-rank free abelian group $H$, identify its elements with integer exponent vectors: the basis elements of $\mathbb Z[H]$ are then precisely Laurent monomials, with exponent-addition multiplication. This is a commutative domain: in two nonzero finite sums, the product of the lexicographically largest exponent terms is the unique largest term, with nonzero integer coefficient. Thus evaluated determinants and quotients by nonzero elements lie in its fraction field ([[def-group-ring]], [[def-group-presentation]], [[def-free-group]]).

## Proof

1.1 *Application of the source rule.* All source hypotheses in [F1] hold for the specified link group and admissible deleted column. Thus the evaluated deleted determinant divided by $1-\varphi(c)$ computes the source invariant. The evaluation takes place in the commutative target of [F3], even though the initial Fox coefficients need not commute. [F1, F3, given]

1.2 *The codomain and specializations.* The denominator is nonzero by hypothesis, so the quotient exists in the fraction field. Under natural meridian abelianization [F1] gives the multivariable polynomial for several components and the rational knot invariant of [F2]. Other homomorphisms substitute meridian images into this rule, provided their denominator stays nonzero; no polynomial divisibility is claimed for the knot fraction. When $\varphi(c)=1$, one cannot use that column because $1-\varphi(c)=0$. [F1, F2, F3, algebra]

2.1 *Unit ambiguity.* The source's invariance clause gives independence of admissible presentations and columns for the quotient, up to group-ring units, not a claim that the deleted determinants themselves differ by a unit when their denominators differ. In one variable these are the units $\pm t^k$ of the polynomial convention. This proves exactly the asserted Fox computation and its normalization. [F1, F2, step 1.1, step 1.2] ∎

## Remarks

The axis computation in [[thm-the-burau-determinant-formula-for-a-closed-braid-and-its-axis]] uses the axis meridian with its independent variable $x\ne1$, hence is an admissible application. The absolute one-variable polynomial is fixed separately by the E0 convention; the multivariable specialization and its extra factor are stated explicitly in that consumer.
