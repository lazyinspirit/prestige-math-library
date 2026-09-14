---
id: cor-gitik-every-uncountable-cardinal-is-singular
kind: corollary
title: Every uncountable cardinal is singular in Gitik's model
status: published
origin: pipeline
deps:
  - thm-gitik-symmetric-submodel-satisfies-zf
  - thm-gitik-every-limit-ordinal-has-cofinality-omega
  - thm-cardinal-arithmetic-agrees-with-finite-counting
  - def-cardinal
  - def-cofinality
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Schürz, Gitik's model, abstract and final theorem"
      url: https://repositum.tuwien.at/bitstream/20.500.12708/5394/2/Schuerz%20Johannes%20Philipp%20-%202018%20-%20Gitiks%20model%20or%20a%20model%20of%20ZF%20where%20all...pdf
---

## Statement

The model $N_G$ satisfies that every uncountable cardinal $\kappa$ has
$\operatorname{cf}(\kappa)=\omega$ and is therefore singular.

## Facts & Assumptions

**Given:** The completed Gitik symmetric model.

[F1] [[thm-gitik-symmetric-submodel-satisfies-zf]]: $N_G$ satisfies ZF, without
assuming Choice.

[F2] [[thm-cardinal-arithmetic-agrees-with-finite-counting]]: In ZF every
infinite cardinal, viewed as an initial ordinal, is a limit ordinal.

[F3] [[thm-gitik-every-limit-ordinal-has-cofinality-omega]]: Every nonzero
limit ordinal of $N_G$ has cofinality $\omega$.

[F4] [[def-cardinal]] and [[def-cofinality]]: An infinite cardinal is singular
exactly when its cofinality differs from the cardinal.

## Proof

1.1 Work inside $N_G$, which satisfies ZF by F1, and let $\kappa$ be an uncountable cardinal. Then $\kappa$ is infinite, so F2 makes it a limit ordinal; it is nonzero because $0$ is finite. F3 therefore gives $\operatorname{cf}(\kappa)=\omega$. [F1, F2, F3]

2.1 Uncountability says $\omega<\kappa$, so the equality from step 1.1 gives $\operatorname{cf}(\kappa)\ne\kappa$. By F4, $\kappa$ is singular. The only excluded endpoint is $\omega$ itself: it is countable and regular, so the corollary neither includes nor misclassifies it. No Choice principle is used. [F4, step 1.1] ∎
