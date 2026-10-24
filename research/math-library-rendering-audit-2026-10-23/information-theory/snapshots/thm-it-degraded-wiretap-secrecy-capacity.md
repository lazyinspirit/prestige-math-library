---
id: thm-it-degraded-wiretap-secrecy-capacity
kind: theorem
title: "Secrecy capacity of a finite degraded wiretap channel"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps: [def-it-degraded-wiretap-channel, def-it-wiretap-secrecy-capacities, def-it-finite-mutual-information, thm-it-finite-entropy-chain-rule, thm-it-finite-markov-data-processing, lem-it-classical-wiretap-auxiliary-cardinality, thm-it-finite-classical-wiretap-auxiliary-capacity]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the simplex and all channel alphabets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, arXiv:1001.3404v3"
      url: https://arxiv.org/pdf/1001.3404v3
      locator: "The Wiretap Channel, PDF pp. 23-9–23-10: physically degraded channel specialization and secrecy capacity formula."
    - title: "Paul Cuff, Princeton ELE 538: Information Theoretic Security, Lecture 11"
      url: https://www.princeton.edu/~cuff/ele538/files/lecture_11.pdf
      locator: "PDF p. 4: degraded wiretap secrecy-capacity formula (weak secrecy); the auxiliary reduction and strong-secrecy extension are proved locally."
---

## Statement

If $W(y,z\mid x)$ is a finite degraded wiretap channel in the sense of [[def-it-degraded-wiretap-channel]], then all four operational capacities in [[def-it-wiretap-secrecy-capacities]] are equal to

$$\max_{P_X}\bigl[I(X;Y)-I(X;Z)\bigr],$$

where $P_X$ ranges over probability vectors on the finite input alphabet and the output law is induced by $W$. The maximum is attained.

## Facts & Assumptions

**Given:** A finite wiretap channel with a stochastic degradation kernel $V(z\mid y)$ satisfying $W(y,z\mid x)=W_Y(y\mid x)V(z\mid y)$.

[F1] [[def-it-degraded-wiretap-channel]]: for every input law $P_X$, $P_{XYZ}(x,y,z)=P_X(x)W_Y(y\mid x)V(z\mid y)$; this factorization is the finite Markov condition written $X-Y-Z$.

[F2] [[def-it-finite-mutual-information]]: mutual information is finite joint-law KL in nats.

[F3] [[thm-it-finite-entropy-chain-rule]]: finite mutual information satisfies its chain rule.

[F4] [[thm-it-finite-markov-data-processing]]: for finite $A-B-C$, $I(A;C)\le I(A;B)$.

[F5] [[lem-it-classical-wiretap-auxiliary-cardinality]]: the auxiliary objective's maximum is attained, and $q\mapsto I_q(X;Y)-I_q(X;Z)$ is continuous on the finite input simplex.

[F6] [[thm-it-finite-classical-wiretap-auxiliary-capacity]]: each of the four operational weak/strong secrecy capacities equals the maximum over finite $U-X-(Y,Z)$.

[F7] [[def-it-wiretap-secrecy-capacities]]: the four operational capacities use the rate, reliability, and secrecy limits stated in its Definition.

## Proof

1.1 Fix any finite $P_{U,X}$ and form the joint law $P_{U,X,Y,Z}(u,x,y,z)=P_{U,X}(u,x)W(y,z\mid x)$, which is the notation $U-X-(Y,Z)$. For each $u$ with $P_U(u)>0$, the degraded factorization [F1] makes $X-Y-Z$ under the posterior law $P_{X\mid U=u}$, so [F4] gives $I(X;Z\mid U=u)\le I(X;Y\mid U=u)$. Averaging over $u$ yields $I(X;Z\mid U)\le I(X;Y\mid U)$. [F1, F4, given, algebra]

1.2 Conversely, for any input law $P_X$, take $U=X$. Then $U-X-(Y,Z)$ holds and $I(U;Y)-I(U;Z)=I(X;Y)-I(X;Z)$. Thus the supremum over auxiliaries is at least the supremum of the displayed single-letter objective. [F2, given, construct, algebra]

2.1 The Markov condition $U-X-Y$ gives $I(U;Y\mid X)=0$, so the chain rule [F3] yields $I(X;Y)=I(U;Y)+I(X;Y\mid U)$. Likewise $U-X-Z$ gives $I(X;Z)=I(U;Z)+I(X;Z\mid U)$. Subtracting these identities and using step 1.1 shows $I(U;Y)-I(U;Z)=I(X;Y)-I(X;Z)-\bigl(I(X;Y\mid U)-I(X;Z\mid U)\bigr)\le I(X;Y)-I(X;Z).$ [F2, F3, step 1.1, given, algebra]

3.1 By [F5], choose an auxiliary law attaining the maximum in the general formula. Step 2.1 shows that replacing this law by $U=X$ at the same marginal $P_X$ cannot decrease its value, so this input law attains the maximum of the single-letter expression. Every input law is itself an allowed auxiliary with $U=X$ by step 1.2. Thus the auxiliary maximum equals the displayed maximum, and [F6] identifies it with all four capacities in the sense of [F7]. [F5, F6, F7, step 2.1, step 1.2, algebra] ∎
