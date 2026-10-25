---
id: def-cyclic-induction-subgroup
kind: definition
title: "The cyclic induction subgroup of the character ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-virtual-character-and-character-ring-of-a-finite-group, def-induced-character-of-a-complex-representation, def-generated-subgroup]
justified_by: []
aliases: []
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Tammo tom Dieck, Representation Theory, Section 4.5"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "Janos Kramar, Artin's and Brauer's Theorems on Induced Characters, Lemma 1"
      url: "https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf"
---

## Definition

Let $G$ be a finite group. For each cyclic subgroup $C\le G$
([[def-generated-subgroup]]), induction on characters gives a homomorphism

$$\operatorname{Ind}_C^G:R(C)\longrightarrow R(G)$$

([[def-induced-character-of-a-complex-representation]],
[[def-virtual-character-and-character-ring-of-a-finite-group]]).

The **cyclic induction subgroup** of $R(G)$ is

$$I_{\mathrm{cyc}}(G):=\sum_{\substack{C\le G\\ C\text{ cyclic}}}\operatorname{Ind}_C^G(R(C))\subseteq R(G).$$

Thus an element of $I_{\mathrm{cyc}}(G)$ is a finite sum

$$\sum_i \operatorname{Ind}_{C_i}^G(\theta_i)$$

with each $C_i\le G$ cyclic and each $\theta_i\in R(C_i)$.

## Remarks

- The subgroup $I_{\mathrm{cyc}}(G)$ is defined using all rational or virtual
  characters of cyclic subgroups, not only their trivial characters.

- The Artin relation on this page first produces $|G|1_G$ as an integral
  combination of permutation characters $\operatorname{Ind}_C^G1_C$, and then
  the theorem upgrades that relation to arbitrary elements of $R_{\mathbb Q}(G)$
  by multiplying inside the ideal $I_{\mathrm{cyc}}(G)$.
