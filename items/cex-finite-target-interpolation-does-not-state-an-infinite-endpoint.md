---
id: cex-finite-target-interpolation-does-not-state-an-infinite-endpoint
kind: counterexample
title: Finite target bounds do not supply an infinite target bound
deps: [def-complex-lp-and-euclidean-test-function-conventions, thm-complex-holder-minkowski-and-the-quotient-norm, thm-lebesgue-measure-of-a-box-of-every-kind,
  def-countable-choice, thm-of-archimedean]
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Laugesen Theorem C.6 and Remark C.7, endpoint parameter scope; explicit witness
      url: https://arxiv.org/pdf/0903.3845
  scraped: []
status: draft
origin: pipeline
generation:
  role: counterexample
proof_strategy: direct
---

## Statement refuted

The implication “$L^1\to L^1$ and $L^2\to L^2$ core bounds entail a bounded $L^1\to L^\infty$ core estimate” is false, even with both given constants equal to one. Assume countable choice for the cited Lebesgue measure construction.

## Facts & Assumptions

[F1] The Lp norms of complex simple functions are given by the integrals of their moduli and their essential bounds [[def-complex-lp-and-euclidean-test-function-conventions]].

[F2] Under countable choice an open interval has measure equal to its length [[thm-lebesgue-measure-of-a-box-of-every-kind]].

[F3] Countable choice is assumed for the preceding interval-measure result [[def-countable-choice]].

[F4] The complex norm is well-defined on a.e. classes [[thm-complex-holder-minkowski-and-the-quotient-norm]].

[F5] For every real bound there is a larger natural number [[thm-of-archimedean]].

## Counterexample

**Given:** The objects and hypotheses in the statement.

1.1 Use Lebesgue measure on (0,1) and let T be the identity on complex finite simple classes. It is complex-linear and has $\|Tf\|_1=\|f\|_1$ and $\|Tf\|_2=\|f\|_2$. Countable choice supplies the stated earlier Lebesgue-measure result, which gives measure one to (0,1) and measure $1/n$ to $(0,1/n)$ for each integer $n\ge2$. [F1, F2, F3]

2.1 Define $f_n=n\mathbf1_{(0,1/n)}$. It is a finite simple function of finite-measure support. Direct integration gives $\|f_n\|_1=n(1/n)=1$ and $\|f_n\|_2^2=n^2(1/n)=n$. Its infinity norm is n: n is a pointwise bound, and every smaller nonnegative bound fails on a set of measure $1/n>0$. Thus an $L^1\to L^\infty$ bound C would require $n=\|Tf_n\|_\infty\le C\|f_n\|_1=C$ for every $n\ge2$, impossible for finite C. [F1, F2, F4, step 1.1, F5] ∎
