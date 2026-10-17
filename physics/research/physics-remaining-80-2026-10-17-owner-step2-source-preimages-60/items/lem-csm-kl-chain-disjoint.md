---
id: lem-csm-kl-chain-disjoint
kind: lemma
title: Conditional entropy chain and disjoint-block bounds
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-standard-borel-space
  - def-tdmath-finite-region-relative-entropy
  - lem-tdmath-relative-entropy-variational-and-chain-rules
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-standard-borel-space: mathematical-premise
  def-tdmath-finite-region-relative-entropy: mathematical-premise
  lem-tdmath-relative-entropy-variational-and-chain-rules: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Section 2.3, printed p.184 / PDF viewer p.8: relative entropy and conditional chain rule; complete paper inspected."
    - title: "H.-O. Georgii, Probabilistic aspects of entropy, in Entropy"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/Dresden.pdf"
      locator: "Sections 3–4, PDF viewer pp.5–6: relative entropy and its variational formula; Section 6, PDF viewer pp.10–12: specific entropy density and conditioning."
---

## Statement

Assume AC. Let $X_1,\ldots,X_m$ be standard-Borel spaces, let $Q_i$ be probability measures on $X_i$, and let $P$ be a probability on $\prod_{i=1}^mX_i$. Write $P_i$ for its $i$th marginal and use the directional extended relative entropy $D(\cdot\Vert\cdot)$ of [[def-tdmath-finite-region-relative-entropy]]. Then
$$D(P\Vert Q_1\otimes\cdots\otimes Q_m)\geq\sum_{i=1}^mD(P_i\Vert Q_i).$$
If the left side is finite, the conditional chain rule gives the stronger equality
$$D(P\Vert\textstyle\bigotimes_iQ_i)=D(P_1\Vert Q_1)+\sum_{i=2}^m E_P\,D(P_{X_i\mid X_1,\ldots,X_{i-1}}\Vert Q_i),$$
and each conditional increment is at least $D(P_i\Vert Q_i)$. If the left side is infinite, the displayed inequality is understood in the extended order and is automatic. This applies to finitely many disjoint spatial blocks after their particle counts and positions have been fixed; zero-occupancy blocks contribute zero.

## Facts & Assumptions

**Given:** Standard-Borel block spaces, probability reference laws, and the stated joint probability.

[A1] AC supplies the conditional-law and entropy chain-rule hypotheses recorded in the current supplier.

[F1] [[lem-tdmath-relative-entropy-variational-and-chain-rules]]: finite relative entropy has the conditional chain rule; relative entropy is nonnegative; and the expected conditional relative entropy against a fixed reference cannot decrease when more of the conditioning observation is retained.

[F2] [[def-tdmath-finite-region-relative-entropy]]: $D(P\Vert Q)$ is the extended directional KL divergence, equal to $\int h\log h\,dQ$ for $P\ll Q$, with value $+\infty$ otherwise.

## Proof

**Given:** The hypotheses and exact entropy conventions above.

1.1 If $D(P\Vert\bigotimes_iQ_i)=+\infty$, then the inequality holds because its left side is $+\infty$ and each summand on the right is nonnegative by [F1]. Suppose instead the joint entropy is finite. Repeatedly apply the conditional chain rule [F1] to the coordinate split $(X_1)$ and $(X_2,\ldots,X_m)$ and then to each remaining split. This gives the stated equality; finiteness ensures no subtraction of infinite terms. [A1, F1, F2]

2.1 For $i\ge2$, apply the conditioning monotonicity in [F1] with $Y=X_i$, $S=(X_1,\ldots,X_{i-1})$, and $R$ the constant observation. The expected conditional divergence given $R$ is exactly $D(P_i\Vert Q_i)$; the expected divergence given $S$ is the $i$th chain increment in step 1.1. Hence that increment is at least $D(P_i\Vert Q_i)$. The first chain term is $D(P_1\Vert Q_1)$, so summing proves the inequality. For $m=1$, the assertion is equality. [F1, step 1.1] ∎
