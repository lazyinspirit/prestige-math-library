---
id: prop-the-associated-graded-of-a-filtered-complex-is-a-bigraded-complex
kind: proposition
title: The associated graded of a filtered complex is a bigraded complex
deps: ["lem-associated-graded-quotients-are-well-defined-subquotients", "def-filtered-chain-complex", "lem-the-differential-descends-to-a-quotient-complex"]
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

Let $(C,d,F)$ be an increasingly filtered chain complex in an abelian category, and let $\pi_{p,n}:F_pC_n\to F_pC_n/F_{p-1}C_n$ be the quotient projections. The family $\operatorname{gr}^F_pC_{p+q}$ has the canonical differential $d^0_{p,q}$ uniquely characterized, for $n=p+q$, by
$d^0_{p,q}\pi_{p,n}=\pi_{p,n-1}(d_n|_{F_pC_n}).$
This differential has bidegree $(0,-1)$ and satisfies $(d^0)^2=0$. The family with this differential is the associated graded complex.

## Facts & Assumptions

**Given:** A filtered chain complex in an abelian category.

[F1] The graded quotients exist as subquotients ([[lem-associated-graded-quotients-are-well-defined-subquotients]]).

[F2] $F_{p-1}C$ and $F_pC$ are subcomplexes ([[def-filtered-chain-complex]]).

[F3] The differential of a complex descends to its quotient by a subcomplex, with square zero ([[lem-the-differential-descends-to-a-quotient-complex]]).

## Proof

**Proof technique:** direct.

1.1 The inclusion $F_{p-1}C\hookrightarrow F_pC$ is a chain map of subcomplexes by [F2]. Apply [F3] to this inclusion: it gives $d^0:F_pC_n/F_{p-1}C_n\to F_pC_{n-1}/F_{p-1}C_{n-1}$, uniquely satisfying $d^0\pi_n=\pi_{n-1}d_n$. The quotients are those supplied by [F1]. [F1, F2, F3]

2.1 Writing $n=p+q$, the target has complementary degree $n-1-p=q-1$; its filtration degree is still $p$. Moreover $(d^0)^2\pi_n=\pi_{n-2}d_{n-1}d_n=0$, and the quotient map $\pi_n$ is epic. Hence $(d^0)^2=0$, including zero graded pieces. [F3, step 1.1, algebra] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), Construction 5.4.6 and Lemma 5.4.7, pp.133–134; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), Theorem 4.2.3, pp.91–92. Increasing homological indices are used here.
