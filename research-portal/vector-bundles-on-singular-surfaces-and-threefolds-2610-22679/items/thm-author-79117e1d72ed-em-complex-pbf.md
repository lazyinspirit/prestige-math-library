---
id: thm-author-79117e1d72ed-em-complex-pbf
kind: theorem
title: External EM projective bundle equivalence with its specified components
status: published
domain: mathematics
deps:
  - thm-author-79117e1d72ed-em-multiplication-c1
dependency_roles:
  thm-author-79117e1d72ed-em-multiplication-c1: mathematical-premise
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
      reading_limits: Read the entire Theorem5.24 statement and proof pp43–44,
        including its reduction from regular blowups and the P¹ formula, Zariski
        descent for bundles, and its explicit component maps. Read Definition5.2
        and negative-weight convention. Imported the substantial theorem; did
        not reconstruct the cited Annala–Iwasa Lemma3.3.5 or the earlier
        complete P¹/syntomic proof.
dependency_level: 10
---

## Statement
Let $F$ be a prime field, $X$ a qcqs $F$-scheme, $V$ a finite locally free sheaf of constant rank $r>0$, and $j\geq0$. For the line projectivization $\pi:P_X^{\rm lin}(V)\to X$ of the preceding external input, the actual map
$$\sum_{m=0}^{r-1}c_1(\mathcal O(1))^m\pi^*: \bigoplus_{m=0}^{r-1} C_{j-m}(X)[-2m]\longrightarrow C_j(P_X^{\rm lin}(V))$$
is an equivalence. Each component is pullback followed by multiplication by the $m$-th power of the specific Definition5.2 class; $C_{j-m}=0$ when $j-m<0$.

## External input
Import EM v1 Theorem5.24(2). The source proves regular-blowup excision, deduces the projective-space formula from its P¹ formula using Annala–Iwasa’s argument, and then obtains the vector-bundle formula by Zariski descent. This imports that established proof; it does not pretend to reconstruct all its prerequisites. The explicitly displayed components and the first-Chern/product convention are part of this input. It is not merely an assertion that the two groups or complexes happen to be isomorphic.
