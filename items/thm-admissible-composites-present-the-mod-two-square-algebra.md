---
id: thm-admissible-composites-present-the-mod-two-square-algebra
kind: theorem
title: "Admissible composites present the mod-two square algebra"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - thm-adem-relations-for-steenrod-squares
  - prop-steenrod-square-normalization-instability-and-top-square
  - def-mod-two-square-algebra-admissible-sequences-and-excess
  - lem-adem-reduction-spans-by-admissible-composites
  - lem-admissible-square-action-has-a-distinct-leading-monomial
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 4.L, printed pp. 496, 499–500: the admissible basis of the Steenrod algebra."
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Section 8, printed pp. 14–15: the square-algebra presentation."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. The natural map $\mathcal A_{\mathrm{Adem}}\to\mathcal A_{\mathrm{Sq}}$ is an isomorphism. In each degree $N$, its admissible composites $Sq^I$ with $|I|=N$ form an $\mathbb F_2$-basis. Thus the Adem relations impose all algebraic relations among composites of the published Steenrod squares.

## Facts & Assumptions

**Given:** AC; a total degree $N\ge0$; the quotient map $\mathcal A_{\mathrm{Adem}}\to\mathcal A_{\mathrm{Sq}}$; the admissible composites $Sq^I$ of degree $N$; and the evaluation test of the leading-monomial lemma on $P$ in $(\mathbb{RP}^{N+1})^{N+1}$.

[F1] The definition of the square algebra makes the quotient-to-operation map well defined, and the admissible words of each degree span the quotient by the reduction lemma ([[def-mod-two-square-algebra-admissible-sequences-and-excess]], [[lem-adem-reduction-spans-by-admissible-composites]]).

[F2] Distinct admissible composites of a fixed degree have distinct leading monomials on $P$ with coefficient one, and squares are natural additive operations acting through the quotient ([[lem-admissible-square-action-has-a-distinct-leading-monomial]]); the Adem relations hold in the square algebra ([[thm-adem-relations-for-steenrod-squares]]) and normalization fixes the degree-zero operation ([[prop-steenrod-square-normalization-instability-and-top-square]]).

[F3] AC is used only for the algebraic choices in the square-algebra presentation ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Surjectivity follows from the definition of the image algebra. The reduction lemma spans each homogeneous quotient by admissible words. Suppose a nontrivial linear combination of distinct degree-$N$ admissible composites were zero as a natural operation. Choose $r=N+1$ and $L=N+1$. Every admissible sequence of degree $N$ has $e(I)\le N<r$, so the leading-monomial lemma applies to the same class $P$ on the same finite CW product for all terms. Pick the largest leading monomial among the composites occurring with coefficient one. No composite with a smaller leading monomial contains it, and its coefficient in its own composite is one. The evaluation of the combination on $P$ is therefore nonzero, a contradiction. Degree zero is the nonzero identity operation. Since all relations in the abstract quotient are homogeneous, injectivity in each degree proves injectivity of the graded algebra map. [given, F1, F2, F3]

2.1 **Boundary of the theorem.** It does not yet identify the square algebra with all stable cohomology operations. Such a classification would additionally use the Eilenberg–Mac Lane surjectivity calculation and the published universal-operation corollary. No such classification is imported into the admissible-basis theorem's proof. [step 1.1] ∎
