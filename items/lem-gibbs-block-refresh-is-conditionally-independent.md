---
id: lem-gibbs-block-refresh-is-conditionally-independent
kind: lemma
title: A Gibbs refresh is conditionally independent of the old block
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-gibbs-block-update
  - lem-gibbs-block-update-is-a-probability-kernel
  - def-gibbs-full-conditional-kernel
  - def-conditional-independence-given-a-sigma-algebra
  - def-axiom-of-choice
  - lem-finite-products-of-probability-kernels
  - lem-prior-and-model-kernel-define-joint-law
  - thm-measurability-of-integration-against-a-kernel
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 12"
      url: "https://artowen.su.domains/mc/Ch-MCMC.pdf"
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
axiom_use: "Assume AC only to use the library's conditional-expectation class definition of conditional independence. The displayed kernel construction and event identities require no choice."
---

## Statement

Assume AC for the conditional-expectation class convention in [[def-conditional-independence-given-a-sigma-algebra]]. Let $X=(U,Z)$ have law $\pi$, where $U$ is the block $B$ and $Z$ is the retained coordinate. Update once using [[alg-gibbs-block-update]], and write $V$ for the refreshed block. Under the resulting joint law of $(U,Z,V)$,
$$U\perp\!\!\!\perp V\mid\sigma(Z).$$
Both $U$ and $V$ have conditional law $K_B(Z,\cdot)$ given $Z$.

## Facts & Assumptions

**Given:** A target probability $\pi$, a supplied proper full conditional kernel $K_B$, and one exact block update.

[A1] AC supplies the library's conditional-expectation class convention used by the conditional-independence definition. [[def-axiom-of-choice]].

[F1] The full conditional event identity is $\pi(C\cap p_{-B}^{-1}(D))=\int_DK_B(z,C_z)\,\pi_{-B}(dz)$ for product-measurable $C$ and measurable $D$. [[def-gibbs-full-conditional-kernel]].

[F2] A block update retains $Z$ and draws the new block from $K_B(Z,\cdot)$. [[alg-gibbs-block-update]].

[F3] Conditional independence means $\mathbb E[f(U)g(V)\mid\sigma(Z)]=\mathbb E[f(U)\mid\sigma(Z)]\mathbb E[g(V)\mid\sigma(Z)]$ almost surely for all bounded measurable real $f,g$. [[def-conditional-independence-given-a-sigma-algebra]].

[F4] Two probability kernels with common source have a probability-kernel product whose rectangle evaluations are the products of the two evaluations. [[lem-finite-products-of-probability-kernels]].

[F5] A probability measure and probability kernel define a joint probability law by integrating the kernel over the first marginal, with the corresponding iterated-integral identity. [[lem-prior-and-model-kernel-define-joint-law]].

[F6] Integrating a bounded measurable function against a probability kernel gives a measurable function of the source. [[thm-measurability-of-integration-against-a-kernel]].

[F7] Finite measures agreeing on the generating rectangles agree on the product sigma-algebra. [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]].

## Proof
**Given:** The hypotheses in the Statement and facts [A1], [F1]–[F7].

1.1 Set $D=S_{-B}$ in [F1]. This identifies the law of $(Z,U)$ with $\pi_{-B}(dz)K_B(z,du)$ on every product-measurable event. By [F2], after the current $(Z,U)=(z,u)$ the refreshed block $V$ has law $K_B(z,\cdot)$. Form the product probability kernel $K_B(z,\cdot)\otimes K_B(z,\cdot)$ using [F4] and mix it against $\pi_{-B}$ by [F5]. For a rectangle $D\times A\times C$, the first conditional identity gives probability $K_B(z,A)$ for $U\in A$ at retained value $z$, and the update gives probability $K_B(z,C)$ for $V\in C$; iterating yields $\int_D K_B(z,A)K_B(z,C)\,\pi_{-B}(dz)$. This is also the rectangle value of the constructed triple law. Both are probability measures, so [F7] makes them equal on the product sigma-algebra. [F1, F2, F4, F5, F7, construct]

2.1 For measurable $A,C\subseteq S_B$ and $D\in\mathcal S_{-B}$, the triple-law formula from step 1.1 gives $\mathbb P(Z\in D,U\in A,V\in C)=\int_D K_B(z,A)K_B(z,C)\,\pi_{-B}(dz)$. The same formula with one of $A,C$ equal to the whole block space gives the two marginal testing identities. Hence, by testing on every event $\{Z\in D\}$, $K_B(Z,A)$ and $K_B(Z,C)$ are versions of the corresponding conditional expectations, and their product is a version of the conditional expectation of $\mathbf1_A(U)\mathbf1_C(V)$. The conditional-independence identity [F3] therefore holds for indicator functions. [F1, F3, step 1.1]

3.1 Finite linear combinations extend the identity in step 2.1 to finite-valued measurable simple functions. For bounded measurable real $f,g$, partition bounded intervals containing their ranges into finitely many subintervals of length below $1/n$ and choose one value on each inverse-image set; this gives finite-valued measurable simple $f_n,g_n$ with uniform errors tending to zero. By [F6], $h_f(z)=\int f\,dK_B(z,\cdot)$ and $h_g(z)=\int g\,dK_B(z,\cdot)$ are measurable; uniform approximation also gives uniform convergence of $h_{f_n}$ to $h_f$ and $h_{g_n}$ to $h_g$. Since the functions are uniformly bounded, the products $f_n(U)g_n(V)$ and $h_{f_n}(Z)h_{g_n}(Z)$ converge uniformly to their respective limits, so their testing identities over every $\{Z\in D\}$ pass to the limit. Thus $h_f(Z)$ and $h_g(Z)$ are the two conditional-expectation versions and $h_f(Z)h_g(Z)$ is a version for the product, proving [F3] for all bounded $f,g$. AC is used only for this class-valued notation. [A1, F3, F6, step 2.1, algebra] ∎
