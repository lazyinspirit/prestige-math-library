---
id: ex-low-degree-admissible-steenrod-monomials
kind: example
title: "Low-degree admissible Steenrod monomials"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - lem-adem-reduction-spans-by-admissible-composites
  - thm-admissible-composites-present-the-mod-two-square-algebra
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.L, printed p. 499: Adem reduction to admissible monomials."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume AC. The admissible bases in degrees 0–4 are respectively {1}, {Sq¹}, {Sq²}, {Sq³,Sq²Sq¹}, and {Sq⁴,Sq³Sq¹}. The Adem relations give Sq¹Sq¹=0, Sq¹Sq²=Sq³, and Sq²Sq²=Sq³Sq¹.

## Facts & Assumptions

**Given:** AC; the admissible words of the mod-two square algebra in total degrees $0$ through $4$; and the three displayed composite pairs $Sq^1Sq^1$, $Sq^1Sq^2$, $Sq^2Sq^2$.

[F1] The Adem-reduction lemma spans each homogeneous degree by admissible words, and the admissible composites form a basis of the square algebra in each degree ([[lem-adem-reduction-spans-by-admissible-composites]], [[thm-admissible-composites-present-the-mod-two-square-algebra]]).

[F2] The Adem relations hold in the square algebra for $0<a<2b$, and the square algebra and its excess calculus are the local definition.

## Verification

1.1 List the positive sequences of each total degree and retain those satisfying i_j≥2i_{j+1}; this gives exactly the displayed rows. The Adem-reduction item shows every other word reduces to an admissible combination. [given, F1]

2.1 The basis theorem proves the listed words are independent, so the table is a basis calculation rather than a dimension guess. Substitution in the displayed Adem relation gives the three sample reductions. [step 1.1, F2, algebra] ∎
