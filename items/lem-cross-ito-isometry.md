---
id: lem-cross-ito-isometry
kind: lemma
title: "Cross Ito isometry"
status: draft
origin: pipeline
deps: [thm-ito-isometry-for-elementary-integrands, lem-elementary-ito-integral-is-independent-of-the-step-representation, def-ito-integral-of-an-elementary-predictable-process, def-elementary-predictable-brownian-integrand, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aad van der Vaart, Stochastic Integration and Differential Equations, Lemma 5.22"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. For elementary predictable
integrands $H,K$ on $[0,T]$ and every $t\in[0,T]$,
$$E\bigl[I_t(H)\,I_t(K)\bigr]=E\int_0^tH_sK_s\,ds,$$
where the sums $I_t(\cdot)$ are the elementary integrals of the chosen
representations [[def-ito-integral-of-an-elementary-predictable-process]]. Both
sides depend only on the $(\mathrm dt\otimes P)$-classes of $H$ and $K$ and are
finite.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), a horizon $T>0$, elementary representations of $H,K$ on some partitions, their common refinement, and $t\in[0,T]$.

[F1] On the common refinement, $H+K$, $H-K$ and their scalar multiples are again elementary predictable integrands with bounded coefficients measurable at the left endpoints of that refinement; the defining sums are linear there, so $I_t(H\pm K)=I_t(H)\pm I_t(K)$ identically. [[def-ito-integral-of-an-elementary-predictable-process]] [[def-elementary-predictable-brownian-integrand]]

[F2] For every elementary predictable $G$, $E[I_t(G)^2]=E\int_0^tG_s^2\,ds$ is finite and $t\mapsto I_t(G)$ is a continuous square-integrable martingale. [[thm-ito-isometry-for-elementary-integrands]]

[F3] The pointwise identity $(H+K)^2-(H-K)^2=4HK$ holds on $[0,T]\times\Omega$, and the same expansion applies to the random variables $I_t(H)\pm I_t(K)$. [[def-elementary-predictable-brownian-integrand]]

[F4] AC enters only through the ambient isometry item and its conditional-expectation interface. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** direct.

1.1 Pass to the common refinement of the two partitions and keep the notation $H,K$ for the refined representations; by [F1] both $H+K$ and $H-K$ are elementary predictable integrands on that refinement, and $I_t(H+K)=I_t(H)+I_t(K)$, $I_t(H-K)=I_t(H)-I_t(K)$ identically, with all quantities square-integrable. [F1, F2, given]

1.2 Applying the elementary isometry [F2] to $H+K$ and to $H-K$ gives the two finite identities $E[I_t(H+K)^2]=E\int_0^t(H+K)^2ds$ and $E[I_t(H-K)^2]=E\int_0^t(H-K)^2ds$. [F2, given]

2.1 Subtracting the second identity of step 1.2 from the first and expanding with [F3] gives $E\bigl[(I_t(H)+I_t(K))^2\bigr]-E\bigl[(I_t(H)-I_t(K))^2\bigr]=E\int_0^t\bigl((H+K)^2-(H-K)^2\bigr)ds=4E\int_0^tH_sK_s\,ds$, where the right-hand side is finite because $|HK|\le\tfrac12(H^2+K^2)$ and both elementary integrands have finite energy. [F2, F3, step 1.2]

3.1 The left-hand side of step 2.1 equals $4E[I_t(H)I_t(K)]$ by the algebraic expansion [F3], and $4$ is invertible in $\mathbb R$, so $E[I_t(H)I_t(K)]=E\int_0^tH_sK_s\,ds$. Representation independence follows from [[lem-elementary-ito-integral-is-independent-of-the-step-representation]] applied to $H$ and to $K$; AC is used only through [F4] and the conditional-expectation interface of the isometry item. [step 2.1, F3, F4, given] ∎

## Source notes

Van der Vaart, Lemma 5.22, records the bilinear form of the isometry as the polarized version of the squared identity. No additional source of randomness or integrability beyond the elementary isometry is used.
