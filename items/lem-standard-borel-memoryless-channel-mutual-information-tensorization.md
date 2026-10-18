---
id: lem-standard-borel-memoryless-channel-mutual-information-tensorization
kind: lemma
title: Mutual information tensorizes over a memoryless vector channel
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-axiom-of-choice, def-standard-borel-space, lem-finite-products-of-standard-borel-spaces-are-standard-borel, def-standard-borel-conditional-mutual-information, thm-general-kl-chain-rule-for-standard-borel-kernels, thm-mutual-information-chain-rule, thm-kullback-leibler-is-nonnegative, lem-kl-invariant-under-measurable-bijections]
aliases: []
proof_strategy: chain-rule-and-conditional-independence
axiom_use: AC is inherited from the standard-Borel conditional-law and mutual-information chain-rule suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition
      url: https://ee.stanford.edu/~gray/it.pdf
      locator: Chapter 5, §5.5, Lemmas 5.5.2 and 5.5.5, mutual-information chain rule for standard alphabets.
    - title: John Duchi, Lecture Notes on Statistics and Information Theory
      url: https://web.stanford.edu/class/stats311/lecture-notes.pdf
      locator: Chapter 2, §2.1.2, printed pp. 16–18, mutual-information chain rule.
---

## Statement

Assume AC. Let $X_1,\ldots,X_n$ and $Y_1,\ldots,Y_n$ take values in standard-Borel spaces. Let their joint law have an arbitrary input marginal $P_{X^n}$ and the memoryless conditional channel law
$$P_{Y^n|X^n}(dy^n|x^n)=\prod_{i=1}^n W_i(dy_i|x_i),$$
where each $W_i$ is a probability kernel. No independence across the input coordinates is assumed. Then, as an inequality in $[0,+\infty]$,
$$I(X^n;Y^n)\le\sum_{i=1}^n I(X_i;Y_i).$$

## Facts & Assumptions

**Given:** AC, standard-Borel coordinate spaces, an arbitrary joint input law, and the displayed product conditional channel law.

[A1] [[def-axiom-of-choice]]: AC is the choice axiom required by the standard-Borel conditional-law and mutual-information chain-rule suppliers.

[F1] [[def-standard-borel-space]] and [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]]: each coordinate space and each finite product used below is standard Borel.

[F2] [[thm-mutual-information-chain-rule]]: for standard-Borel random elements, $I((Z,X);Y)=I(Z;Y)+I(X;Y|Z)$ as an equality of extended nonnegative quantities.

[F3] [[def-standard-borel-conditional-mutual-information]]: conditional mutual information is the KL divergence from the same-marginal conditionally independent product law; it is zero when the conditional joint law equals that product law.

[F4] [[thm-kullback-leibler-is-nonnegative]]: mutual information and conditional mutual information, being KL divergences, are nonnegative.

[F5] [[lem-kl-invariant-under-measurable-bijections]]: a measurable coordinate permutation preserves KL divergence, so mutual information and conditional mutual information are symmetric in their two unconditioned variables.

[F6] [[thm-general-kl-chain-rule-for-standard-borel-kernels]]: when two laws have the same conditioning marginal, their joint KL is the integral of the conditional KLs.

## Proof





1.1 By [F2], successively adjoining $Y_i$ to $Y^{i-1}$ gives $$I(X^n;Y^n)=I(Y^n;X^n)=\sum_{i=1}^n I(Y_i;X^n|Y^{i-1})=\sum_{i=1}^n I(X^n;Y_i|Y^{i-1}).$$ The first equality and the last equality use the coordinate swap in [F5]; the initial term for the empty tuple $Y^0$ is zero. Every term is an extended nonnegative quantity, so no subtraction of infinities is involved. [A1, F1, F2, F5, given, algebra]

1.2 Fix $i$ and put $U=X_i$, $V=X_{[n]\setminus\{i\}}$, and $W=Y^{i-1}$. For $P_W$-almost every $w$, the conditional channel law makes $Y_i$ independent of $V$ given $U$. Apply [F2] to the conditional law of $(U,V,Y_i)$ given $W=w$ and use [F3]: $$I((U,V);Y_i|W=w)=I(U;Y_i|W=w)+I(V;Y_i|U,W=w)=I(U;Y_i|W=w).$$ Integrating this identity over $P_W$ gives $I(X^n;Y_i|Y^{i-1})=I(X_i;Y_i|Y^{i-1})$ by [F6] and the conditional-KL definition [F3]. [A1, F1, F2, F3, F6, given, algebra]

1.3 The product channel law gives $I(Y^{i-1};Y_i|X_i)=0$ by [F3]. Expanding $I((X_i,Y^{i-1});Y_i)$ with [F2] first in the order $X_i,Y^{i-1}$ gives $I((X_i,Y^{i-1});Y_i)=I(X_i;Y_i)$. Expanding in the reverse order and using the coordinate-swap invariance [F5] gives $$I(X_i;Y_i)=I(Y^{i-1};Y_i)+I(X_i;Y_i|Y^{i-1}).$$ Because the omitted term $I(Y^{i-1};Y_i|X_i)$ is zero and $I(Y^{i-1};Y_i)\ge0$ by [F4], this proves $I(X_i;Y_i|Y^{i-1})\le I(X_i;Y_i)$ in the extended nonnegative order. [A1, F2, F3, F4, F5, given, algebra]

2.1 Sum the coordinate inequalities from step 1.3 and use the chain-rule expansion in step 1.1 together with step 1.2. This gives $I(X^n;Y^n)\le\sum_{i=1}^nI(X_i;Y_i)$ for arbitrary dependent input coordinates. [step 1.1, step 1.2, step 1.3, algebra] ∎
