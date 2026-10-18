---
id: lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing
kind: lemma
title: Conditional mutual-information chain rule and data processing for standard-Borel variables
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-axiom-of-choice, def-standard-borel-space, lem-finite-products-of-standard-borel-spaces-are-standard-borel, def-standard-borel-conditional-mutual-information, thm-general-kl-chain-rule-for-standard-borel-kernels, thm-mutual-information-chain-rule, thm-kullback-leibler-is-nonnegative, lem-kl-invariant-under-measurable-bijections]
aliases: []
proof_strategy: conditional-kl-chain-rule
axiom_use: AC is inherited from the standard-Borel conditional-law and KL-chain-rule suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition
      url: https://ee.stanford.edu/~gray/it.pdf
      locator: Chapter 5, §5.5, Lemma 5.5.2, conditional mutual information and its Markov characterization.
    - title: John Duchi, Lecture Notes on Statistics and Information Theory
      url: https://web.stanford.edu/class/stats311/lecture-notes.pdf
      locator: Chapter 2, §2.1.2, printed pp. 16–18, mutual-information chain rule and conditioning.
---

## Statement

Assume AC. Let $U,V,Y,S$ take values in standard-Borel spaces. Then
$$I((U,V);Y|S)=I(U;Y|S)+I(V;Y|U,S)$$
and also
$$I((U,V);Y|S)=I(V;Y|S)+I(U;Y|V,S),$$
where these are equalities of extended nonnegative quantities. In particular, if the conditional law of $Y$ given $(U,V,S)$ depends only on $(V,S)$, then
$$I(U;Y|S)\le I(V;Y|S).$$

## Facts & Assumptions

**Given:** AC and standard-Borel variables $U,V,Y,S$ with a joint law.

[A1] [[def-axiom-of-choice]]: AC is required by the standard-Borel conditional-law and KL-chain-rule suppliers.

[F1] [[def-standard-borel-space]] and [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]]: the finite product variables and their conditional laws remain standard Borel.

[F2] [[thm-mutual-information-chain-rule]]: for standard-Borel variables, $I((Z,X);Y)=I(Z;Y)+I(X;Y|Z)$ as an equality in $[0,+\infty]$.

[F3] [[def-standard-borel-conditional-mutual-information]]: conditional mutual information is the KL divergence from the same-marginal conditionally independent product law; it vanishes when that law is the actual joint law.

[F4] [[thm-general-kl-chain-rule-for-standard-borel-kernels]]: with a common conditioning marginal, joint KL is the integral of the conditional KLs.

[F5] [[thm-kullback-leibler-is-nonnegative]]: every KL divergence in the statement is nonnegative.

[F6] [[lem-kl-invariant-under-measurable-bijections]]: permuting coordinates preserves KL, hence conditional mutual information is symmetric in its two unconditioned variables.

## Proof

1.1 For $P_S$-almost every $s$, apply [F2] to the conditional law of $(U,V,Y)$ given $S=s$. It gives
$$I((U,V);Y|S=s)=I(U;Y|S=s)+I(V;Y|U,S=s).$$
Integrate over $P_S$; by the conditional-KL definition [F3] and disintegration chain rule [F4], the three integrals are the corresponding conditional mutual informations given $S$. This proves the first identity without subtracting extended values. [A1, F1, F2, F3, F4, given, algebra]

1.2 Exchange the roles of $U$ and $V$ in step 1.1 to obtain the second identity. The symmetry of conditional mutual information between the grouped variables follows from [F6]. [A1, F2, F3, F4, F6, given, step 1.1, algebra]

1.3 Suppose the conditional law of $Y$ given $(U,V,S)$ depends only on $(V,S)$. Then $U$ and $Y$ are conditionally independent given $(V,S)$, so [F3] gives $I(U;Y|V,S)=0$. The second identity in step 1.2 and nonnegativity [F5] imply $I(U;Y|S)\le I(V;Y|S)$. [F3, F5, step 1.2, given, algebra] ∎
