---
id: lem-finite-conditional-channel-mutual-information-concave-input-law
kind: lemma
title: Conditional mutual information is concave in the channel input law
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-it-finite-conditional-mutual-information, thm-it-finite-entropy-chain-rule, thm-it-finite-conditional-mutual-information-identities-and-equality]
aliases: []
proof_strategy: chain-rule-mixture
axiom_use: No choice axiom is used; all variables have finite alphabets.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 2, conditional mutual information identities and concavity in the input distribution, printed pp. 28–32.
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Cambridge University Press prepublication book"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 5, §5.1, Theorem 5.3 (mutual information is concave in the input distribution), printed pp. 92–93.
---

## Statement

Let $Q,X,Z,Y$ be finite random variables and suppose the channel law $P_{Y|X,Z,Q}$ depends on $Q$ only through $(X,Z)$; equivalently, $Q-(X,Z)-Y$ is a Markov chain. Then
$$I(X;Y\mid Z)\ge I(X;Y\mid Z,Q).$$
Thus, for a fixed finite channel and fixed side information $Z$, averaging input laws over a time-sharing variable cannot increase the average conditional mutual information.

## Facts & Assumptions

**Given:** The finite variables and Markov condition in the statement.

[F1] [[def-it-finite-conditional-mutual-information]]: conditional mutual information is defined by the finite conditional-KL sum.

[F2] [[thm-it-finite-entropy-chain-rule]]: finite entropy and mutual information obey the chain rules used to expand the joint conditional mutual information.

[F3] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: conditional mutual information is nonnegative.

## Proof

1.1 By the chain rule in [F2],
$$I(X,Q;Y\mid Z)=I(X;Y\mid Z)+I(Q;Y\mid X,Z)=I(X;Y\mid Z),$$
since the Markov assumption makes the last term zero. Expanding in the other order gives
$$I(X,Q;Y\mid Z)=I(Q;Y\mid Z)+I(X;Y\mid Z,Q).$$
The first term on the right is nonnegative by [F3], proving the inequality. [F1, F2, F3, given, algebra] ∎
