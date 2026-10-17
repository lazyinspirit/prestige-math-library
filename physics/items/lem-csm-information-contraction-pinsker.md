---
id: lem-csm-information-contraction-pinsker
kind: lemma
title: Measurable information contraction and Pinsker bound
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-kullback-leibler-divergence
  - def-total-variation-distance-for-probability-laws
  - lem-csm-kl-chain-disjoint
  - lem-tdmath-relative-entropy-variational-and-chain-rules
  - thm-pinsker
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-kullback-leibler-divergence: mathematical-premise
  def-total-variation-distance-for-probability-laws: mathematical-premise
  lem-csm-kl-chain-disjoint: mathematical-premise
  lem-tdmath-relative-entropy-variational-and-chain-rules: mathematical-premise
  thm-pinsker: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Section 2.3, printed p.184 / PDF viewer p.8: entropy variational identity and data processing."
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 4, Lemma 4.8"
      url: "https://arxiv.org/pdf/2310.19244v1"
      locator: "Full 168-page PDF retrieved; Chapter 4 §4.2, Lemma 4.8 and its proof inspected. That lemma gives a weaker constant; the current imported theorem supplies the exact event-supremum convention and coefficient used here."
---

## Statement

Assume AC. Let $P,Q$ be probability measures on a measurable space and let $T$ be a measurable map to another measurable space. Then
$$D(T_*P\Vert T_*Q)\leq D(P\Vert Q),\qquad \|P-Q\|_{\rm TV}:=\sup_A|P(A)-Q(A)|\leq\sqrt{D(P\Vert Q)/2}.$$
The entropy convention is the directional KL definition of [[def-kullback-leibler-divergence]], and the total-variation convention is the event-supremum convention of [[def-total-variation-distance-for-probability-laws]]. The inequality remains valid when $D=+\infty$.

## Facts & Assumptions

**Given:** AC and probability measures on the stated measurable spaces.

[F1] [[lem-tdmath-relative-entropy-variational-and-chain-rules]]: for probability measures, $D(P\Vert Q)=\sup_{g\in B_b}(P(g)-\log Q(e^g))$, where $B_b$ denotes bounded real measurable functions.

[F2] [[thm-pinsker]]: under AC and the event-supremum convention $\sup_A|P(A)-Q(A)|$, $\|P-Q\|_{\rm TV}\leq\sqrt{D(P\Vert Q)/2}$ for all probabilities, including the extended-entropy case.

[F3] [[def-kullback-leibler-divergence]] and [[def-total-variation-distance-for-probability-laws]]: fix the direction $P\Vert Q$ and the event-supremum normalization; no factor of two is inserted in the definition of total variation.

## Proof

**Given:** The hypotheses and supplier conventions in Facts & Assumptions.

1.1 For each bounded measurable target test $g$, the pullback $g\circ T$ is bounded and measurable. Thus $P(g\circ T)=T_*P(g)$ and $Q(e^{g\circ T})=T_*Q(e^g)$. The variational formula [F1] bounds the target objective by the supremum over all bounded source tests, which is $D(P\Vert Q)$. Taking the target supremum proves data processing. [F1, F3, algebra]

2.1 Apply the imported theorem [F2] with the precise event-supremum convention [F3]. It gives the displayed square-root constant $1/\sqrt2$ without changing normalization. When $D=+\infty$, the right side is $+\infty$ and the inequality is automatic. [F2, F3, step 1.1] ∎
