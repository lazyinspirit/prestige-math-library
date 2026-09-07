---
id: "def-clifford-ramification-index"
kind: "definition"
title: "Clifford ramification index"
status: "draft"
origin: "pipeline"
deps: ["thm-clifford-homogeneous-restriction-formula", "cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product", "thm-character-inner-product-computes-intertwiner-dimension"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — §4.2 p.54 after Proposition 4.2.2"
      url: "https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf"
---

## Definition

Let $G$ be finite, $N\trianglelefteq G$, $\theta\in\operatorname{Irr}(N)$, and $\chi\in\operatorname{Irr}(G\mid\theta)$. The **ramification index** $e(\chi,\theta)$ is the common positive multiplicity in [[thm-clifford-homogeneous-restriction-formula]]. If $V$ affords $\chi$ and $S$ affords $\theta$, then
$$ e(\chi,\theta)=\langle\operatorname{Res}_N^G\chi,\theta\rangle_N=\dim_{\mathbb C}\operatorname{Hom}_N(S,V). $$
The first equality is [[cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]] and the second is [[thm-character-inner-product-computes-intertwiner-dimension]], applied to $N$. The formula makes the number independent of the chosen models $S,V$ and constant as $\theta$ varies in its $G$-orbit. It is defined here only for a constituent, so it is always positive.
