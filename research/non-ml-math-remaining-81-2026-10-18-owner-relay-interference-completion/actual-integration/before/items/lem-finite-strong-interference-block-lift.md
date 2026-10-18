---
id: lem-finite-strong-interference-block-lift
kind: lemma
title: Strong-interference information inequalities tensorize over product code inputs
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-finite-two-user-interference-channel-and-strong-regime, thm-it-finite-conditional-mutual-information-identities-and-equality, thm-it-finite-entropy-chain-rule]
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the proof is a finite chain-rule argument.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 6, §6.2, block extension of the strong-interference inequalities, printed pp. 116–118.
    - title: M. H. M. Costa and Abbas A. El Gamal, The Capacity Region of the Discrete Memoryless Interference Channel with Strong Interference, IEEE Transactions on Information Theory 33(5), 1987
      url: https://isl.stanford.edu/groups/elgamal/abbas_publications/J022.pdf
      locator: Theorem 1, printed pp. 710–711.
---

## Statement

Assume the strong-interference inequalities of [[def-finite-two-user-interference-channel-and-strong-regime]]. For independent random vectors $X_1^n,X_2^n$, pass each coordinate through independent uses of the channel. Then
$$I(X_1^n;Y_1^n|X_2^n)\le I(X_1^n;Y_2^n|X_2^n),\qquad I(X_2^n;Y_2^n|X_1^n)\le I(X_2^n;Y_1^n|X_1^n).$$

## Facts & Assumptions

**Given:** The finite interference channel in [F1], product-over-time channel uses, and independent input vectors $X_1^n\perp X_2^n$.

[F1] [[def-finite-two-user-interference-channel-and-strong-regime]]: for each fixed input of one user and every law of the other, the corresponding single-letter output channel has the indicated mutual-information ordering.

[F2] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: conditional mutual information is nonnegative.

[F3] [[thm-it-finite-entropy-chain-rule]]: finite mutual information obeys the chain rule used in the telescoping sum.

## Proof

1.1 First fix $x_2^n$. Under this conditioning, $Y_1^n$ and $Y_2^n$ are product channels from $X_1^n$, with the $i$th channel determined by $x_{2,i}$. Set $A^n=Y_2^n$, $B^n=Y_1^n$, and $J_i=I(X_1^n;A^i,B_{i+1}^n\mid X_2^n=x_2^n)$ for $i=0,\ldots,n$. The chain rule [F3] gives
$$J_i-J_{i-1}=I(X_1^n;A_i\mid A^{i-1},B_{i+1}^n,x_2^n)-I(X_1^n;B_i\mid A^{i-1},B_{i+1}^n,x_2^n).$$
Because the channel is memoryless across coordinates, each term reduces to the mutual information between $X_{1,i}$ and that coordinate's output conditional on the common context $(A^{i-1},B_{i+1}^n,x_2^n)$. For each value of this context, [F1] applies to the induced law of $X_{1,i}$ and fixed $x_{2,i}$, so $J_i-J_{i-1}\ge0$. Summing over $i$ yields $I(X_1^n;Y_2^n|X_2^n=x_2^n)\ge I(X_1^n;Y_1^n|X_2^n=x_2^n)$. Average over $X_2^n$. [F1, F2, F3, given, algebra]

1.2 Exchange the user indices and exchange $Y_1,Y_2$. The second strong-interference inequality in [F1] gives the same telescoping argument with receiver 1 as the more informative output for user 2. Averaging over $X_1^n$ gives $I(X_2^n;Y_1^n|X_1^n)\ge I(X_2^n;Y_2^n|X_1^n)$. [F1, F2, F3, given, step 1.1, algebra] ∎
