---
id: lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative
kind: lemma
title: "The general Ito integral is well defined"
status: published
origin: pipeline
deps: [def-ito-integral-for-square-integrable-predictable-processes, thm-ito-isometry-for-elementary-integrands, def-ito-integral-of-an-elementary-predictable-process, def-elementary-predictable-brownian-integrand, lem-elementary-ito-integral-is-independent-of-the-step-representation, thm-density-of-elementary-predictable-processes-in-predictable-l2, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aad van der Vaart, Stochastic Integration and Differential Equations, Definition 5.25 and Theorem 5.26"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let $H$ be a predictable
process on $[0,T]$ with $E\int_0^TH^2ds<\infty$, and let $(H^n)$ and $(K^n)$ be
two sequences of bounded elementary predictable integrands converging to $H$ in
$L^2(\mathrm dt\otimes P)$. Then
$$\lim_{n\to\infty}I_T(H^n)=\lim_{n\to\infty}I_T(K^n)\qquad\text{in }L^2(P),$$
so the integral $\int_0^TH\,dB$ of
[[def-ito-integral-for-square-integrable-predictable-processes]] does not
depend on the approximating sequence. If $H'$ is any predictable process with
$H'=H$ $(\mathrm dt\otimes P)$-almost everywhere and finite energy, then
$\int_0^TH'\,dB=\int_0^TH\,dB$ almost surely; the integral is a function of the
$(\mathrm dt\otimes P)$-class alone.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), a finite-energy predictable $H$, two elementary approximating sequences $H^n\to H$ and $K^n\to H$ in $L^2(\mathrm dt\otimes P)$, and a predictable $H'$ with $H'=H$ almost everywhere and finite energy.

[F1] For elementary predictable $G,G'$ on a common refinement, $I_T(G)-I_T(G')=I_T(G-G')$ identically and $E(I_T(G)-I_T(G'))^2=E\int_0^T(G-G')^2ds=\|G-G'\|^2_{L^2(\mathrm dt\otimes P)}$. [[thm-ito-isometry-for-elementary-integrands]] [[def-ito-integral-of-an-elementary-predictable-process]]

[F2] Each of the sequences $I_T(H^n)$ and $I_T(K^n)$ is Cauchy in the complete space $L^2(P)$ and therefore has an $L^2(P)$ limit.  The construction designates the limit obtained from one admissible approximating sequence as $\int_0^TH\,dB$; equality with the limit from every other sequence is what is proved below. [[def-ito-integral-for-square-integrable-predictable-processes]]

[F3] The $L^2$ triangle inequality and the identities $\|U-V\|_2=0\iff U=V$ almost surely hold on the quotient space. [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]

[F4] The elementary integral of the difference is the difference of the elementary integrals on a common refinement, and the class of a bounded elementary integrand depends only on its $(\mathrm dt\otimes P)$-class. [[def-ito-integral-of-an-elementary-predictable-process]] [[lem-elementary-ito-integral-is-independent-of-the-step-representation]]

[F5] AC is declared for the ambient interfaces; the argument below only uses the two given sequences and the metric algebra of $L^2$. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 Pass to a common refinement of the two elementary representations at each index and use [F1]: $\|I_T(H^n)-I_T(K^n)\|^2_2=\|H^n-K^n\|^2_{L^2(\mathrm dt\otimes P)}$, a finite quantity depending only on the two indices. [F1, given]

1.2 The triangle inequality gives $\|H^n-K^n\|_2\le\|H^n-H\|_2+\|H-K^n\|_2\to0$ as $n\to\infty$, because both approximating sequences converge to $H$. [F3, given]

1.3 If $H'=H$ almost everywhere, then every approximating sequence for $H$ is an approximating sequence for $H'$: $\|H^n-H'\|_2\le\|H^n-H\|_2+\|H-H'\|_2=\|H^n-H\|_2\to0$, and likewise in the other direction. [F3, given]

2.1 By step 1.1 and step 1.2 the difference of the two sequences of elementary integrals converges to $0$ in $L^2(P)$, while by [F2] each sequence converges; two convergent sequences with difference tending to $0$ have the same limit, and by [F3] the limits agree as $L^2(P)$-classes, that is, almost surely. [F2, F3, step 1.1, step 1.2]

3.1 Consequently the class $\int_0^TH\,dB$ is independent of the approximating sequence; and by step 1.3, replacing $H$ by an almost-everywhere equal $H'$ keeps the same admissible sequences and hence the same limit, so $\int_0^TH'\,dB=\int_0^TH\,dB$ almost surely. Only the two given sequences are used, and AC enters only as the declared ambient interface [F5]. [F4, F5, step 1.3, step 2.1] ∎

## Source notes

Van der Vaart, Definition 5.25 and Theorem 5.26, performs the same two descents: independence of the approximating sequence for a fixed integrand, and invariance under changing the integrand on a product-null set. Both are isometry statements for elementary differences, so no pathwise argument is involved.
