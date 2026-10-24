---
id: "lem-coefficient-ideal-disjoint-centres"
kind: "lemma"
title: "Coefficient-ideal control with centres allowed off the subvariety"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 9
deps:
  - "def-axiom-of-choice"
  - "def-coefficient-ideal"
  - "def-field"
  - "def-multiple-test-blowup-and-controlled-transform"
  - "lem-coefficient-ideal-restriction-support"
  - "lem-restriction-of-marked-ideal-to-a-smooth-subvariety"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Statement

Assume AC ([[def-axiom-of-choice]]), $\mu\ge1$, and either $\operatorname{char}K=0$ or $K$ perfect with $\operatorname{char}K=p>\mu$ ([[def-field]]). In the setting of [[lem-coefficient-ideal-restriction-support]], let $(X_i)$ be a multiple test blow-up of $(\mathcal I,\mu)$ whose centers $C_i$ are either contained in the strict transforms $S_i$ of $S$ or disjoint from them, for every $i$.
Then the restrictions $\sigma_i|_{S_i}$ define a multiple test blow-up $(S_i)$ of $C(\mathcal I,\mu)|_S$ and
$$\operatorname{supp}(\mathcal I_i,\mu)\cap S_i=\operatorname{supp}\bigl[C(\mathcal I,\mu)|_S\bigr]_i$$
for every $i$.

## Facts & Assumptions

**Given:** Assume AC. Let $K$ be a field and let $\mu\ge1$ with $\operatorname{char}K=0$ or $K$ perfect with $\operatorname{char}K=p>\mu$; let $(\mathcal I,E,\mu)$ be a marked ideal of maximal order whose support does not contain a smooth subvariety $S\subseteq X$ having SNC with $E$; and let $(X_i)$ be a multiple test blow-up all of whose centers $C_i$ are either contained in the strict transform $S_i$ of $S$ or disjoint from it.

[A1] [[def-axiom-of-choice]]: AC is used through the restriction-support supplier [F1].

[F1] [[lem-coefficient-ideal-restriction-support]], [[def-field]]: under AC and the stated characteristic bound, for centers contained in the strict transforms, $(S_i)$ is a multiple test blow-up of $C(\mathcal I,\mu)|_S$ and $\operatorname{supp}(\mathcal I_i,\mu)\cap S_i=\operatorname{supp}[C(\mathcal I,\mu)|_S]_i$.

[F2] [[lem-restriction-of-marked-ideal-to-a-smooth-subvariety]]: the restriction of a controlled transform is the controlled transform of the restriction along the strict transform, and the restriction of the marked ideal does not change when the blow-up center is disjoint from $S$.

[F3] [[def-multiple-test-blowup-and-controlled-transform]]: a blow-up with center disjoint from $S_i$ restricts to an isomorphism over $S_i$ and does not modify the restricted marked ideal.

## Proof

1.1 The restriction sequence is a multiple test blow-up. At each step, if $C_i\subseteq S_i$ then the restricted center is admissible for $C(\mathcal I,\mu)|_S$ and the transform rule is [F2]; if $C_i\cap S_i=\varnothing$ then the step restricts to an isomorphism over $S_i$ and does not change the restricted marked ideal by [F3]. Hence the restrictions of the morphisms define a multiple test blow-up (with isomorphism steps allowed) of $C(\mathcal I,\mu)|_S$. [A1, F1, F2, F3]

2.1 Equality of supports persists. For steps with centers contained in $S_i$ the equality is [F1]; for steps with centers disjoint from $S_i$, both sides are unchanged: $\operatorname{supp}(\mathcal I_{i+1},\mu)\cap S_{i+1}=\operatorname{supp}(\mathcal I_i,\mu)\cap S_i$ because the blow-up is an isomorphism near $S_i$ and the strict transform of $S$ is identified with $S$, and $\operatorname{supp}[C(\mathcal I,\mu)|_S]_{i+1}=\operatorname{supp}[C(\mathcal I,\mu)|_S]_i$ by [F3]. Induction over the steps gives the asserted identity at every stage. [A1, F1, F2, F3, step 1.1] ∎
