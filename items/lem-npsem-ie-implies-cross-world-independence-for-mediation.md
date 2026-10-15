---
id: lem-npsem-ie-implies-cross-world-independence-for-mediation
kind: lemma
title: "Independent errors imply mediation cross-world independence"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-simple-markovian-mediation-scm
  - def-independent-random-elements
  - def-conditional-independence-given-a-sigma-algebra
  - def-conditional-expectation-given-a-sigma-algebra
  - def-conditional-expectation-as-an-ae-class
  - def-axiom-of-choice
  - thm-independent-random-elements-have-product-joint-law
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-measurability-of-integration-against-a-kernel
proof_strategy: direct
axiom_use: "AC is used only for the conditional-expectation classes in the library's definition of conditional independence. The finite exogenous product integral is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Technical Point 23.1 and §23.2 (2020; author revision 19 August 2026)"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Judea Pearl, Causal inference in statistics: An overview, §§3.1 and 5.1.2 (Statistics Surveys 3, 2009)"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf"
---

## Statement

Assume the Axiom of Choice for the conditional-expectation conventions. In a
simple Markovian mediation SCM, for every supplied treatment levels $a,a'$ and
mediator value $m$,
$$M(a')\perp\!\!\!\perp Y(a,m)\mid\sigma(L),$$
$$A\perp\!\!\!\perp M(a')\mid\sigma(L),\qquad A\perp\!\!\!\perp Y(a,m)\mid\sigma(L).$$
Thus independent structural errors supply the cross-world restriction needed
by the natural-effect formula, in addition to the single-world
treatment-outcome, treatment-mediator, and mediator-outcome independences.

## Facts & Assumptions

**Given:** The simple Markovian mediation SCM and the Axiom of Choice.

[A1] The Axiom of Choice is used for the conditional-expectation almost-sure
classes that define conditional independence.
[[def-axiom-of-choice]]

[F1] In the simple model, $L=f_L(U_L)$, $A=f_A(L,U_A)$,
$M(a')=f_M(a',L,U_M)$, and $Y(a,m)=f_Y(a,m,L,U_Y)$, with all four
exogenous variables mutually independent.
[[def-simple-markovian-mediation-scm]]

[F2] Independent random elements have independent generated sigma-algebras.
[[def-independent-random-elements]]

[F3] Conditional independence given $\sigma(L)$ is the bounded measurable
conditional-product identity, interpreted as equality of almost-sure classes.
[[def-conditional-independence-given-a-sigma-algebra]],
[[def-conditional-expectation-given-a-sigma-algebra]],
[[def-conditional-expectation-as-an-ae-class]]

[F4] The joint law of the four independent exogenous random elements is their
finite product law, and bounded integrands may be integrated in either order.
[[thm-independent-random-elements-have-product-joint-law]],
[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F5] Integrating a jointly measurable function against a fixed probability
kernel gives a measurable function of the remaining variables.
[[thm-measurability-of-integration-against-a-kernel]]

## Proof

**Proof technique:** test the conditional identities against bounded functions
and bounded functions of $L$; the structural responses use distinct independent
exogenous coordinates.

**Given:** The hypotheses in the statement.

1.1 Let $g_A,g_M,g_Y$ be bounded measurable real functions and let $r$ be a bounded measurable function of $L$. By [F1], each response is a measurable function of $L$ and its own exogenous coordinate. The exogenous family is independent in the sense of [F2], so its joint law is the product law [F4]; Fubini integrates $U_A,U_M,U_Y$ separately, giving $E[r(L)g_A(A)g_M(M(a'))g_Y(Y(a,m))]=E[r(L)\alpha_A(L)\alpha_M(L)\alpha_Y(L)]$, where each $\alpha$ is the corresponding integral over one error law and is measurable by [F5]. The same event-testing calculation with two $g$'s set to $1$ identifies each $\alpha$ as the appropriate conditional-expectation version; testing against every $r$ gives the triple conditional-product identity. [A1, F1, F2, F3, F4, F5, construct]

2.1 Setting $g_A$, $g_Y$, and $g_M$, respectively, equal to $1$ in the triple conditional-product identity of step 1.1 gives $M(a')\perp\!\!\!\perp Y(a,m)\mid\sigma(L)$, $A\perp\!\!\!\perp M(a')\mid\sigma(L)$, and $A\perp\!\!\!\perp Y(a,m)\mid\sigma(L)$ by the bounded-function definition [F3]. These are exactly the three claims. [A1, F3, step 1.1] ∎

