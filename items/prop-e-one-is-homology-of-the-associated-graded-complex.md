---
id: prop-e-one-is-homology-of-the-associated-graded-complex
kind: proposition
title: E one is homology of the associated graded complex
deps: ["thm-the-next-page-is-the-homology-of-the-current-page", "prop-e-zero-is-the-associated-graded-complex", "lem-the-filtered-differential-induces-d-r-on-the-r-page"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

There is a canonical isomorphism $E^1_{p,q}\cong H_{p+q}(\operatorname{gr}^F_pC)$, inverse to the specified initial next-page map. If $d(F_pC_n)\subseteq F_{p-1}C_{n-1}$ for all $p,n$, then $E^1_{p,q}\cong\operatorname{gr}_pC_{p+q}$ and $d^1$ is the map between these graded objects induced by $d$.

## Facts & Assumptions

**Given:** A filtered chain complex and integers p,q.

[F1] $\alpha_0:H(E^0)\to E^1$ is a natural isomorphism ([[thm-the-next-page-is-the-homology-of-the-current-page]]).

[F2] $E^0$ is the associated graded complex with its differential ([[prop-e-zero-is-the-associated-graded-complex]]).

[F3] The page differential is induced by the chain differential on its numerator ([[lem-the-filtered-differential-induces-d-r-on-the-r-page]]).

## Proof

**Proof technique:** direct.

1.1 Fix p. By [F2], the terms at total degrees n are $\operatorname{gr}_pC_n$, and the differential lowers n by one while fixing p. Consequently the kernel and boundary quotient at $(p,q)$ is exactly $H_{p+q}(\operatorname{gr}_pC)$. [F2]

2.1 Apply the inverse of $\alpha_0$ from [F1] and then the identification in step 1.1. The composite is the asserted isomorphism; each factor is canonical and natural, so their composite is too. [F1, step 1.1]

3.1 Under the additional lowering hypothesis, the induced differential on $F_pC_n/F_{p-1}C_n$ is zero, because the image of $d$ lies in the denominator. Its homology is therefore the same graded object. Steps 1.1 and 2.1 identify this with $E^1$. At the next filtration level, $d(F_{p-1}C_n)\subseteq F_{p-2}C_{n-1}$, so $[x]\mapsto[dx]$ is well defined from $\operatorname{gr}_pC_n$ to $\operatorname{gr}_{p-1}C_{n-1}$. By [F3] this is precisely $d^1$, including when either graded object is zero. [F2, F3, step 1.1, step 2.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.

The lowering-hypothesis clause is the increasing homological translation of [Stacks §12.24](https://stacks.math.columbia.edu/tag/012K), Lemma 12.24.3(2). The proof here is componentwise and requires no countable direct sum.
