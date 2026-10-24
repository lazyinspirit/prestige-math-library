---
id: cor-short-exact-sequences-of-vector-bundles-split-over-the-base
kind: corollary
title: Short exact sequences of numerable vector bundles split
status: published
origin: pipeline
deps: [def-vector-bundle-map-section-subbundle-and-isomorphism, thm-numerable-vector-bundles-admit-bundle-metrics]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §1.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Orthogonal complements, printed pp.11–13"
    - title: "MIT 18.906 notes, Lecture 16"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Metrics and splitting, printed pp.54–55"
---

## Statement

Assume AC. If
$0\to E'\xrightarrow iE\xrightarrow qE''\to0$ is a short exact sequence of
finite-rank real or complex vector bundles over a paracompact Hausdorff base,
then $E\cong E'\oplus E''$ over the base. More generally, it suffices that
$E$ have a supplied bundle metric. The splitting need not be canonical.

## Facts & Assumptions

**Given:** The short exact sequence and base hypotheses in the statement.

[F1] Short exactness includes the local subbundle structure on $i(E')$ and fiberwise exactness of $q$ ([[def-vector-bundle-map-section-subbundle-and-isomorphism]]).

[A1] Under AC a finite-rank bundle over a paracompact Hausdorff base has a bundle metric; with a supplied numeration the metric construction is choice-free ([[thm-numerable-vector-bundles-admit-bundle-metrics]]).

## Proof

**Proof technique:** direct.

1.1 Use [A1] to give $E$ a metric, or use the metric supplied in the more general clause. Let $C=i(E')^\perp$. In a local frame adapted to the subbundle $i(E')$, the Gram matrix is continuous and positive definite; solving the finite linear equations $\langle v,i(e')\rangle=0$ expresses $C$ as the graph of a continuous linear map. Hence $C$ is a vector subbundle of rank $\operatorname{rank}E-\operatorname{rank}E'$. [F1, A1, algebra]

2.1 On every fiber, $E_x=i(E'_x)\oplus C_x$. Exactness in [F1] gives $\ker q_x=i(E'_x)$, so $q_x|_{C_x}:C_x\to E''_x$ is injective and, by equal finite dimensions, bijective. In the local graph frames its matrix and inverse vary continuously, hence $q|_C:C\to E''$ is a bundle isomorphism. [F1, step 1.1, algebra]

3.1 The map $E'\oplus C\to E$, $(e',c)\mapsto i(e')+c$, is a bundle isomorphism by the local direct-sum frames. Composing its $C$ summand with $(q|_C)^{-1}$ yields $E'\oplus E''\cong E$. The result depends on the chosen metric, so no canonical splitting is asserted. [step 1.1, step 2.1] ∎
