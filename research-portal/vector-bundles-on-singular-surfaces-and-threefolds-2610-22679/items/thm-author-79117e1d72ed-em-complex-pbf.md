---
id: thm-author-79117e1d72ed-em-complex-pbf
kind: theorem
title: External EM projective bundle equivalence with its specified components
status: published
domain: mathematics
deps:
  - thm-author-79117e1d72ed-em-multiplication-c1
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-locally-free-sheaf-finite-rank
  - math:def-axiom-of-choice
dependency_roles:
  thm-author-79117e1d72ed-em-multiplication-c1: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes (arXiv v1)
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem5.24(2), p.43, and its proof pp.43–44; preceding explicit
        component maps and line convention, p.43; Definition5.2 and
        negative-weight convention following(5.2), p.34
      hypotheses: X any qcqs F-scheme over F=Q or F_p; j>=0; V a locally free sheaf of
        constant rank r>=1. Terms of negative weight are zero. No smoothness,
        reducedness, finite type or finite dimension hypothesis.
      statement: "The actual map Σ_m c1(O(1))^mπ*: ⊕_(m=0)^(r−1) Z(j−m)_mot(X)[−2m] →
        Z(j)_mot(P_X^lin(V)) is a natural equivalence in D(Z)."
      reading_limits: "The earlier authoring record reports reading Definition 5.2,
        equation (5.2) and its negative-weight convention on printed p. 34, and
        the component maps, line convention, complete Theorem 5.24 and its proof
        on printed pp. 43–44 in the versioned primary PDF. During
        consumer-06c843bdf3be, checked the versioned primary HTML at
        https://arxiv.org/html/2309.08463v1: Section 2.2, Definition 5.2 and the
        negative-weight paragraph, the component maps and line-subbundle
        convention before Theorem 5.24, its statement, and the proof text
        outside the embedded blowup diagram, including the final Zariski-descent
        deduction. That diagram was not visually checked. The theorem and
        constructions remain imported; Annala–Iwasa Lemma 3.3.5, the earlier
        projective-line and syntomic arguments, and the higher-categorical
        foundations were not reconstructed. No full-paper review is claimed."
dependency_level: 13
formulation_deps:
  - thm-author-79117e1d72ed-em-multiplication-c1
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-locally-free-sheaf-finite-rank
  - math:def-axiom-of-choice
argument_deps:
  - thm-author-79117e1d72ed-em-multiplication-c1
  - math:def-axiom-of-choice
---

## Statement
Assume the Axiom of Choice and the fixed compatible universe and site-size bounds of the supplied EM multiplication and first-Chern construction.

Let $F$ be a prime field, $X$ a qcqs $F$-scheme, $V$ a finite locally free sheaf of constant rank $r>0$, and $j\geq0$. For the line projectivization $\pi:P_X^{\rm lin}(V)\to X$ of the preceding external input, the actual map
$$\sum_{m=0}^{r-1}c_1(\mathcal O(1))^m\pi^*: \bigoplus_{m=0}^{r-1} C_{j-m}(X)[-2m]\longrightarrow C_j(P_X^{\rm lin}(V))$$
is an equivalence. Each component is pullback followed by multiplication by the $m$-th power of the specific Definition5.2 class; $C_{j-m}=0$ when $j-m<0$.

## Statement references

[[thm-author-79117e1d72ed-em-multiplication-c1]]

[[math:def-quasi-compact-and-quasi-separated-scheme]]

[[math:def-locally-free-sheaf-finite-rank]]

## External input
The local realization retains the assumed [[math:def-axiom-of-choice]] and exactly the compatible universe and site-size bounds of [[thm-author-79117e1d72ed-em-multiplication-c1]]. These are premises of the specified local coefficient and first-Chern constructions; no additional geometric hypothesis is attributed to the imported EM projective bundle theorem.

Import EM v1 Theorem5.24(2). The source proves regular-blowup excision, deduces the projective-space formula from its P¹ formula using Annala–Iwasa’s argument, and then obtains the vector-bundle formula by Zariski descent. This imports that established proof; it does not pretend to reconstruct all its prerequisites. The explicitly displayed components and the first-Chern/product convention are part of this input. It is not merely an assertion that the two groups or complexes happen to be isomorphic.
