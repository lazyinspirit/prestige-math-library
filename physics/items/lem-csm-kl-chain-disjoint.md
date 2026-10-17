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
and each conditional increment is at least $D(P_i\Vert Q_i)$. If the left side is infinite, the displayed inequality is understood in the extended order and is automatic. For an integer $d\ge1$ and disjoint spatial blocks with fixed particle counts $n_i\in\{0,1,2,\ldots\}$ and fixed positions, apply this result to their mark spaces $X_i=(\mathbb R^d)^{n_i}$, with Borel sigma-algebras and probability mark references $Q_i$. The zero-fold product $X_i=(\mathbb R^d)^0$ is the singleton consisting of the empty mark tuple. On that singleton both $P_i$ and $Q_i$ are its unique probability measure, so a zero-occupancy mark block contributes zero. No zero-divergence claim is made for an unconditioned occupancy law.

## Facts & Assumptions

**Given:** Standard-Borel block spaces, probability reference laws, and the stated joint probability.

[A1] AC supplies the conditional-law and entropy chain-rule hypotheses recorded in the current supplier.

[F1] [[lem-tdmath-relative-entropy-variational-and-chain-rules]]: $D(R\Vert Q)=\sup_{\phi\in B_b}\{R(\phi)-\log Q(e^\phi)\}$, where $B_b$ consists of bounded real measurable functions; relative entropy is nonnegative and cannot increase under a measurable map; finite relative entropy against a product probability reference has the conditional chain rule.

[F2] [[def-tdmath-finite-region-relative-entropy]]: $D(P\Vert Q)$ is the extended directional KL divergence, equal to $\int h\log h\,dQ$ for $P\ll Q$, with value $+\infty$ otherwise.

## Proof

**Given:** The hypotheses and exact entropy conventions above.

1.1 If $D(P\Vert\bigotimes_iQ_i)=+\infty$, then the inequality holds in the extended order. Suppose instead the joint entropy is finite. For $1\leq i\leq m$, let $P_{1:i}$ be the marginal on the first $i$ coordinates and set $D_i=D(P_{1:i}\Vert\bigotimes_{j=1}^iQ_j)$. Projection contraction in [F1] gives $D_i\leq D_m<\infty$. For $i\geq2$, apply the finite-entropy chain rule to $P_{1:i}$ with reference $(\bigotimes_{j<i}Q_j)\otimes Q_i$. It gives $D_i=D_{i-1}+G_i$, where $G_i=E_P D(P_{X_i\mid X_1,\ldots,X_{i-1}}\Vert Q_i)$. Each $G_i$ is nonnegative and finite. Telescoping these equalities gives the stated chain equality without subtracting infinite terms. [A1, F1, F2]

2.1 For $i\geq2$, write $S=(X_1,\ldots,X_{i-1})$ and $K_i(s,\cdot)=P_{X_i\mid S=s}$ for the conditional probability kernel in step 1.1. For every bounded real measurable $\phi:X_i\to\mathbb R$, the variational formula [F1] gives $D(K_i(s,\cdot)\Vert Q_i)\geq\int\phi\,dK_i(s,\cdot)-\log Q_i(e^\phi)$. Integrating against $P_S$ and using the conditional-law identity yields $G_i\geq P_i(\phi)-\log Q_i(e^\phi)$. Taking the supremum over these tests and applying [F1] again gives $G_i\geq D(P_i\Vert Q_i)$. Summing with the first chain term $D_1=D(P_1\Vert Q_1)$ proves the inequality. For $m=1$, the assertion is equality. On a zero-fold mark space, the density of its unique probability relative to itself is $1$, so its marginal and conditional divergences are $1\log1=0$. [F1, F2, step 1.1] ∎
