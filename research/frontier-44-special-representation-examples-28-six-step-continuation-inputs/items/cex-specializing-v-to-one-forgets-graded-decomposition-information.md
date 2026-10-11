---
id: cex-specializing-v-to-one-forgets-graded-decomposition-information
kind: counterexample
title: "Specializing the grading variable to one forgets graded decomposition information"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 42
deps: [def-axiom-of-choice,
       def-graded-module-and-projective-grothendieck-groups-for-klr-towers,
       ex-projective-versus-simple-grothendieck-classes-in-a-small-block,
       def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention,
       thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883-1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 3.4-3.7, printed pp. 16-21: Fock space and restricted multipartitions; Section 5.1-5.4, printed pp. 45-52: the graded decomposition numbers and their ungraded specialization. Complete passages read."
verification:
  precheck: pass
---

## Statement refuted

Assume inherited AC [[def-axiom-of-choice]] for the Fock/global-basis and graded-decomposition identifications used below; the explicit finite block and polynomial calculations make no additional choices.

The claim under refutation is that specializing the grading variable $q$ to
$1$ determines the graded decomposition data: that the forgetful map is
injective on the graded Grothendieck classes of the block, or equivalently that
the graded transition polynomials, graded Cartan entries and shift classes are
recovered from their values at $q=1$.

## Facts & Assumptions

**Given:** Assume the inherited AC above. Use the example's field $\mathbb C$, Hecke parameter $\xi=-1$, level-one weight $\Lambda_0$ and rank $2$, so $e=2$ and the block has content $\alpha_0+\alpha_1$. The symbol $q$ is the formal grading variable, distinct from the numerical Hecke parameter $\xi$.

[F1] In the example's block $[P]=(1+q^2)[D]$, $[S(1,1)]=[D]$ and $[S(2)]=q[D]$, with the graded Cartan pairing and shift action there recorded
([[ex-projective-versus-simple-grothendieck-classes-in-a-small-block]]).

[F2] The level-one transition polynomials in the $e=2$ case are $d_{(1,1),(1,1)}(q)=1$ and $d_{(1,1),(2)}(q)=q$
([[def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention]]).

[F3] The graded decomposition theorem identifies the graded multiplicities with the transition polynomials
([[thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero]]).

## Counterexample

**Proof technique:** direct.

1.1 **The polynomials and the class $[P]$.** In $\mathbb Z[q,q^{-1}]$ the elements $1+q^2$ and $2$ differ (their difference $q^2-1$ is nonzero) while $(1+q^2)|_{q=1}=2$; multiplying by the nonzero class $[D]$ gives distinct classes $[P]=(1+q^2)[D]$ and $2[D]$ in the free $A$-module $G_0^{\mathrm{gr}}(H^\Lambda_{\alpha_0+\alpha_1})$, whose images under the forgetful map $\zeta$ (which satisfies $\zeta(qm)=\zeta(m)$) both equal $2[D]$ [[def-graded-module-and-projective-grothendieck-groups-for-klr-towers]] [F1]. [F1]

1.2 **The Specht classes and the transition polynomials.** The example computes $[S(1,1)]=[D]$ and $[S(2)]=q[D]$, which are distinct because $q\ne1$; the forgetful map sends both to $[D]$. The corresponding transition polynomials are $d_{(1,1),(1,1)}(q)=1$ and $d_{(1,1),(2)}(q)=q$ in the recorded $e=2$ Fock computation, distinct in $\mathbb Z[q,q^{-1}]$ and equal at $q=1$ ([[ex-projective-versus-simple-grothendieck-classes-in-a-small-block]], [[def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention]]) [F2]. [F1, F2]

2.1 **Conclusion.** By the graded decomposition theorem the classes are read through the transition polynomials, so the failure above is exactly the statement that the specialization $q\mapsto1$ loses the graded multiplicities and shift data ([[thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero]]). The displayed finite block and polynomial computations introduce no new choice; AC is inherited only through the invoked Fock/global-basis and graded-decomposition identifications. [F1, F2, F3] ∎
