---
id: "lem-homogenized-ideal-is-equivalent"
kind: "lemma"
title: "The homogenized ideal is equivalent to the marked ideal"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 7
deps:
  - "def-axiom-of-choice"
  - "def-equivalence-of-marked-ideals"
  - "def-homogenized-ideal"
  - "def-maximal-order-and-tangent-directions"
  - "def-multiple-test-blowup-and-controlled-transform"
  - "def-marked-ideal"
  - "def-order-of-an-ideal-sheaf-at-a-point"
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

Let $(\mathcal I,\mu)$ be a marked ideal of maximal order with $\mu\ge1$ ([[def-maximal-order-and-tangent-directions]]).
Then:
(1) $(\mathcal I,\mu)\simeq(H(\mathcal I),\mu)$ in the sense of [[def-equivalence-of-marked-ideals]];
(2) Assume AC. For every multiple test blow-up $(X_k)$ of $(\mathcal I,\mu)$, the controlled transform $H(\mathcal I,\mu)_k$ is equivalent to the iterated marked sum
$$ (\mathcal I,\mu)_k+[\mathcal D(\mathcal I,\mu)]_k\cdot[(T(\mathcal I),1)]_k+\dots+[\mathcal D^{\mu-1}(\mathcal I,\mu)]_k\cdot[(T(\mathcal I),1)]_k^{\mu-1}$$
of [[lem-addition-and-multiplication-of-marked-ideals]]. Its underlying ideal with mark $\mu$ is the literal sum of the controlled transforms of the homogenization summands.

## Facts & Assumptions

**Given:** A marked ideal $(\mathcal I,\mu)$ of maximal order with $\mu\ge1$, its tangent ideal $T(\mathcal I)=\mathcal D^{\mu-1}(\mathcal I)$ and its homogenization $H(\mathcal I)$.

[F1] [[def-homogenized-ideal]]: $H(\mathcal I)=\sum_{i=0}^{\mu-1}\mathcal D^i(\mathcal I)T(\mathcal I)^i$, where $T(\mathcal I)=\mathcal D^{\mu-1}(\mathcal I)$.

[F2] [[def-marked-ideal]], [[def-order-of-an-ideal-sheaf-at-a-point]], [[lem-derivative-ideals-have-the-same-support]]: in every characteristic, $\operatorname{supp}(\mathcal I,\mu)\subseteq\operatorname{supp}(\mathcal D^i(\mathcal I),\mu-i)$ for $0\le i<\mu$, and $\operatorname{supp}(\mathcal I,\mu)\subseteq\operatorname{supp}(T(\mathcal I),1)$.

[F3] [[def-multiple-test-blowup-and-controlled-transform]], [[lem-addition-and-multiplication-of-marked-ideals]]: the homogenized ideal is a literal sum of ideals with common mark $\mu$; the order of an ideal sum is the minimum of the summand orders, and for a common admissible sequence the controlled transform distributes over that sum and over products of the marked factors.

[F4] [[lem-derivatives-of-a-multiple-test-blowup]]: every multiple test blow-up of $(\mathcal I,\mu)$ is also a multiple test blow-up of each $(\mathcal D^i(\mathcal I),\mu-i)$ and $(T(\mathcal I),1)$, with $[\mathcal D^i(\mathcal I,\mu)]_k\subseteq\mathcal D^i(\mathcal I_k,\mu)$.

[F5] [[def-equivalence-of-marked-ideals]], [[def-multiple-test-blowup-and-controlled-transform]]: equivalence requires equal supports and the same multiple test blow-ups, with equal induced supports at every stage.

[A1] [[def-axiom-of-choice]]: AC is required in assertion (2) for the iterated marked-sum support and test-sequence route.

## Proof

1.1 Equality of supports at every stage. Fix a multiple test blow-up $(X_k)$ of $(\mathcal I,\mu)$. By [F4], each derivative factor and the tangent ideal have controlled transforms along this same sequence. At every stage, [F2] gives $\operatorname{supp}(\mathcal I_k,\mu)\subseteq\operatorname{supp}(\mathcal D^i(\mathcal I_k),\mu-i)$ for $i<\mu$, and also $\operatorname{supp}(\mathcal I_k,\mu)\subseteq\operatorname{supp}(T(\mathcal I_k),1)$. By [F4], the actual transformed derivative and tangent factors are contained in the corresponding derivative ideals of $\mathcal I_k$; their product is thus contained in $\mathcal D^i(\mathcal I_k)T(\mathcal I_k)^i$. The product order inequality therefore puts every point of $\operatorname{supp}(\mathcal I_k,\mu)$ in the support of each transformed summand $(\mathcal D^i(\mathcal I_k)T(\mathcal I_k)^i,\mu)$. The support of the literal sum is the intersection of the summand supports: for ideals $J_i$, $\operatorname{ord}_x(\sum_iJ_i)=\min_i\operatorname{ord}_x(J_i)$. Hence $\operatorname{supp}(\mathcal I_k,\mu)\subseteq\operatorname{supp}(H(\mathcal I,\mu)_k)$. Conversely, the first summand of $H$ is $\mathcal I$, so $\mathcal I_k\subseteq H(\mathcal I,\mu)_k$ and $\operatorname{supp}(H(\mathcal I,\mu)_k)\subseteq\operatorname{supp}(\mathcal I_k,\mu)$. This proves equality of supports at every stage. [F1, F2, F3, F4]

2.1 Equivalence and transform decomposition. Equality of supports at every stage in step 1.1 shows that the two marked ideals have the same admissible centers and the same induced supports along every multiple test blow-up. By [F5] they are equivalent, proving (1). For (2), the controlled transform of the literal ideal sum defining $H(\mathcal I)$ distributes termwise because all summands have mark $\mu$; each transformed summand is the product of the transforms of $(\mathcal D^i(\mathcal I),\mu-i)$ and $(T(\mathcal I),1)^i$ by [F3, F4]. Thus its underlying ideal with mark $\mu$ is the literal sum displayed in the Statement. Under AC, the iterated marked sum has the intersection of the transformed summand supports and exactly their simultaneous test sequences by [F3]. The literal sum with common mark $\mu$ has that same support, and its transforms continue to distribute termwise at every common admissible center. Induction gives equal induced supports and the same test sequences, hence equivalence by [F5], proving (2). [A1, F3, F4, F5, step 1.1] ∎
