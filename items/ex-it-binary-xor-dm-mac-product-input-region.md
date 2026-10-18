---
id: ex-it-binary-xor-dm-mac-product-input-region
kind: example
title: The binary XOR MAC exposes the independent private-input law
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-it-finite-conditional-mutual-information, def-it-finite-mutual-information, def-it-two-user-discrete-memoryless-mac-code, thm-it-finite-conditional-mutual-information-identities-and-equality, thm-it-finite-entropy-chain-rule, thm-it-two-user-discrete-memoryless-mac-capacity-region]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the channel and product input distributions are finite.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 4, binary additive MAC examples
      url: https://arxiv.org/pdf/1001.3404v3
    - title: Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 15, §15.3
      url: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf
---

## Statement

For the deterministic binary XOR channel $Y=X_1\oplus X_2$, the independent-private-message capacity region is the triangle $R_1,R_2\ge0$, $R_1+R_2\le\ln2$. Independent uniform inputs attain the maximum sum information $\ln2$. A fixed-$Q$ correlated law $X_1=X_2\sim\operatorname{Bern}(1/2)$ is not a product input law; it can be represented only by mixing deterministic product laws with a public time-sharing variable, and that common variable supplies no private-message rate conditional on $Q$.

## Facts & Assumptions

**Given:** The no-feedback independent-private-message DM-MAC model and the binary XOR kernel.

[F1] [[def-it-two-user-discrete-memoryless-mac-code]]: messages are independent private messages and the encoders are separate message-only maps, so $X_{1i}$ and $X_{2i}$ are independent at each fixed coordinate.

[F2] [[thm-it-two-user-discrete-memoryless-mac-capacity-region]]: the region is the closure of the union over finite $Q$ and conditional product input laws of the three MAC mutual-information inequalities.

[F3] [[def-it-finite-mutual-information]]: mutual information is the finite KL sum, equivalently $I(A;B)=H(B)-H(B\mid A)$ for finite variables.

[F4] [[def-it-finite-conditional-mutual-information]]: conditional mutual information averages the conditional finite-law informations over positive-mass conditioning values.

[F5] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: $I(A;B\mid C)=H(B\mid C)-H(B\mid A,C)$ for finite variables.

[F6] [[thm-it-finite-entropy-chain-rule]]: finite information satisfies the chain rule and $I(A;B)=H(B)-H(B\mid A)$.

## Proof

1.1 For independent Bernoulli inputs with parameters $p,q$, given $X_2$ the XOR is a bijective relabeling of $X_1$, and given $(X_1,X_2)$ the output is fixed. Thus [F4]–[F5] give $I(X_1;Y\mid X_2)=H(X_1\mid X_2)=h_b(p)$; interchanging users gives $h_b(q)$. The deterministic output and [F3], [F6] give $I(X_1,X_2;Y)=H(Y)=h_b(p+q-2pq)$. [F1, F3, F4, F5, F6, algebra]

2.1 For any finite time-sharing variable, the sum bound is $I(X_1,X_2;Y\mid Q)=H(Y\mid Q)\le\ln2$, because each conditional output is binary. With $Q$ constant and $p=q=1/2$, both individual informations and the sum information equal $\ln2$. Hence every nonnegative pair with sum at most $\ln2$ is in the closed region, and no pair with larger sum is. [F2, step 1.1, algebra]

3.1 The diagonal joint law has probability $1/2$ on $(0,0)$ and $(1,1)$, so it is not a product law: its marginals are uniform but their product puts positive mass on $(0,1)$ and $(1,0)$. More generally, suppose a finite mixture $P_QP_{X_1|Q}P_{X_2|Q}$ equals this diagonal law. For every positive-mass $q$, nonnegativity and zero total off-diagonal mass force $P(X_1=0|q)P(X_2=1|q)=P(X_1=1|q)P(X_2=0|q)=0$. If $X_1$ had positive conditional mass on both bits, these equalities would force $P(X_2=0|q)=P(X_2=1|q)=0$, impossible; hence $X_1$ is deterministic given $q$, and the two equalities then force $X_2$ to be the same deterministic bit. Thus any such public time-sharing representation uses deterministic diagonal product components. With $Q$ selecting $(0,0)$ or $(1,1)$, [F5] gives $I(X_1;Y\mid X_2,Q)=I(X_2;Y\mid X_1,Q)=0$; the mixture adds no private-message rate. [F1, F2, F5, algebra] ∎

