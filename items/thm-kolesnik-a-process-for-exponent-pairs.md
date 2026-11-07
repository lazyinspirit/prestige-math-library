---
id: thm-kolesnik-a-process-for-exponent-pairs
kind: theorem
title: "Kolesnik A-process transformation under its source hypotheses"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps: [def-kolesnik-exponent-pair-framework, lem-kolesnik-process-substitution-and-constrained-balancing, lem-kolesnik-a-difference-scaled-seminorm-estimate, lem-kolesnik-a-endpoint-absorption-criterion]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "G. A. Kolesnik, On the method of exponent pairs"
      url: "https://www.impan.pl/shop/publication/transaction/download/product/104633"
      locator: "Theorem 5, printed p. 119; transformation A and conditional proof at pp. 141–142"
verification:
  precheck: pending
---

## Statement

Let $n\ge1$, let $1\le m\le n$ be an integer, let $\lambda_j\ge0$ for $0\le j\le n$, and let $\lambda_j^*\ge0$ for $1\le j\le m$. Put $|\lambda^*|:=\sum_{j=1}^{m}\lambda_j^*$ and assume
$$\lambda_0+|\lambda^*|\ge m.$$
Assume the augmented tuple
$$(\lambda_0,\lambda_1,\ldots,\lambda_n,\lambda_1^*,\ldots,\lambda_m^*)\in E_{m+n}$$
in Kolesnik's source convention. Assume the uniform source estimates (1) and (4) of Kolesnik's exponent-tuple framework for every admitted phase, domain, scale and relevant process dimension, with their stated loss convention. The augmented estimates are used only on admitted transformed phase/scale data. The following is the full conditional source claim, including its ordinary $E_n$ conclusion.
Define
$$\widetilde\lambda_0:=\frac{\lambda_0m}{2(\lambda_0+|\lambda^*|)},$$
$$\widetilde\lambda_j:=\frac{(\lambda_j+\lambda_j^*-1)m}{2(\lambda_0+|\lambda^*|)}+\frac12\quad(1\le j\le m),$$
and
$$\widetilde\lambda_j:=\frac{(\lambda_j-1)m}{2(\lambda_0+|\lambda^*|)}+1\quad(m<j\le n).$$
Then $(\widetilde\lambda_0,\ldots,\widetilde\lambda_n)\in E_n$ in the same source convention.

## Statement references

[[def-kolesnik-exponent-pair-framework]]

[Kolesnik, Theorem 5, printed p. 119](https://www.impan.pl/shop/publication/transaction/download/product/104633)

## Facts & Assumptions

**Given:** The tuple, scale, and phase-class data in the Statement.

[F1] [[def-kolesnik-exponent-pair-framework]]: $E_n$ is Kolesnik's admissible class of exponent tuples for the source phase and domain class.

[F2] Under the explicit numerical process bounds, the B substitution and the A constrained-balancing estimate hold with their $N^\varepsilon$ loss and endpoint terms retained. [[lem-kolesnik-process-substitution-and-constrained-balancing]]

[F3] If a normalized phase has the stated $C^{L+1}$ additive approximation on a shifted box, its scaled finite difference is $C^L$-close to the explicit derivative-monomial sum by $O(\Delta+\rho)$. This does not prove estimates for that enlarged phase class or preserve the literal relative monomial class. [[lem-kolesnik-a-difference-scaled-seminorm-estimate]]

[F4] For the displayed numerical A expression, the trivial bound and optimization over an admitted interval yield the balanced bound up to a uniform factor exactly when the ratio $R$ in the endpoint criterion is uniformly bounded. The numerical criterion does not establish any admitted interval or a bound for $R$. [[lem-kolesnik-a-endpoint-absorption-criterion]]

[A1] The source makes Theorems 4–5 conditional on (1),(4) holding for all admitted phases and all relevant dimensions, in the loss convention explicitly distinguished in [F1].

## Authoring escalation

The exact partial calculation is now available in [F2]: if the source A estimate (4) and the augmented tuple bound apply uniformly on an admitted interval of shift products, substitution gives the displayed balanced exponents with an $N^\varepsilon$ loss. The clipped estimate also retains both endpoint terms. Under the extra numerical conditions of [F4], the criterion characterizes when these endpoints can be absorbed using the trivial cap. These conclusions are conditional on actual transformed-phase and scale admissibility. Under the additional hypotheses in [F3], the scaled difference admits the constructive additive-seminorm approximation there, while its membership in the source class and the required exponential-sum estimate remain unproved.

Held. This is source Theorem 5, the A substitution in (4), as printed pp. 141–142 show. The balancing-scale algebra produces the displayed exponents, but the complete local proof still owes the upper and lower admissible-shift endpoints, short-side/small-amplitude class extensions, and reconciliation of the loss estimates with ordinary $E_n$ membership. No balancing hypothesis has been inserted to narrow the full source conclusion; no Hessian hypothesis from the separate B-process Lemma 1 is falsely attributed to this A-process theorem.
