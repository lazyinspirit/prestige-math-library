---
id: "lem-coefficient-ideal-is-equivalent"
kind: "lemma"
title: "The coefficient ideal is equivalent to the marked ideal"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 7
deps:
  - "def-axiom-of-choice"
  - "def-coefficient-ideal"
  - "def-equivalence-of-marked-ideals"
  - "def-multiple-test-blowup-and-controlled-transform"
  - "lem-addition-and-multiplication-of-marked-ideals"
  - "lem-derivative-ideals-have-the-same-support"
  - "lem-derivatives-of-a-multiple-test-blowup"
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

Assume AC ([[def-axiom-of-choice]]).

Let $(\mathcal I,\mu)$ be a marked ideal of maximal order with $\mu\ge1$ ([[def-coefficient-ideal]]).
Then $C(\mathcal I,\mu)\simeq(\mathcal I,\mu)$ in the sense of [[def-equivalence-of-marked-ideals]].

## Facts & Assumptions

**Given:** Assume AC. Let $(\mathcal I,E,\mu)$ be a marked ideal of maximal order with $\mu\ge1$ and its coefficient ideal $C(\mathcal I,\mu)=\sum_{i=0}^{\mu-1}(\mathcal D^i(\mathcal I),\mu-i)$.

[A1] [[def-axiom-of-choice]]: AC is used through the marked-sum support and test-sequence assertion [F2].

[F1] [[def-coefficient-ideal]]: $C(\mathcal I,\mu)$ is the sum of the marked ideals $(\mathcal D^i\mathcal I,\mu-i)$ for $0\le i\le\mu-1$ in the sense of the addition operation.

[F2] [[lem-addition-and-multiplication-of-marked-ideals]]: the multiple test blow-ups of a sum are exactly the simultaneous multiple test blow-ups of its summands, and the controlled transforms of the sum are the sums of the controlled transforms.

[F3] [[lem-derivatives-of-a-multiple-test-blowup]]: every multiple test blow-up of $(\mathcal I,\mu)$ is a multiple test blow-up of each $\mathcal D^i(\mathcal I,\mu)$, with $[\mathcal D^i(\mathcal I,\mu)]_k\subseteq\mathcal D^i(\mathcal I_k,\mu)$.

[F4] [[lem-derivative-ideals-have-the-same-support]]: in every characteristic and at every stage $k$, $\operatorname{supp}(\mathcal I_k,\mu)\subseteq\operatorname{supp}(\mathcal D^i(\mathcal I_k),\mu-i)$ for $0\le i<\mu$.

[F5] [[def-equivalence-of-marked-ideals]]: equivalence means equal $E$-data, equal supports and equal multiple test blow-ups with equal induced supports.

## Proof

1.1 The multiple test blow-ups coincide. By [F2], a multiple test blow-up of the coefficient sum is a simultaneous multiple test blow-up of its summands; since the $i=0$ summand is $(\mathcal I,\mu)$, every such sequence is a multiple test blow-up of $(\mathcal I,\mu)$. Conversely, [F3] shows that every multiple test blow-up of $(\mathcal I,\mu)$ is a multiple test blow-up of every derivative summand, hence of their sum. Thus the two families coincide in every characteristic. [A1, F1, F2, F3]

2.1 Equal supports at every stage. At any stage $k$, [F4] shows that the support of $(\mathcal I_k,\mu)$ is contained in the support of every derivative summand. Their intersection therefore contains $\operatorname{supp}(\mathcal I_k,\mu)$, using the transformed-derivative inclusion in [F3]; the reverse inclusion follows because the $i=0$ summand is exactly $(\mathcal I_k,\mu)$. By [F2], this intersection is the support of the coefficient sum's controlled transform. Hence the two supports agree at every stage, and together with step 1.1 and [F5] this proves $C(\mathcal I,\mu)\simeq(\mathcal I,\mu)$ in every characteristic. [A1, F2, F3, F4, F5, step 1.1] ∎
