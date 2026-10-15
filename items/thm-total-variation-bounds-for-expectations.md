---
id: thm-total-variation-bounds-for-expectations
kind: theorem
title: "Total variation controls expectations of bounded functions"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - cor-archimedean-reciprocal
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-integral-of-a-nonnegative-simple-function
  - def-nonnegative-lebesgue-integral
  - def-probability-measure
  - def-total-variation-distance-for-probability-laws
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-linearity-of-the-lebesgue-integral-on-l-one
justified_by: []
proof_strategy: direct
axiom_use: "None. The proof uses explicit finite threshold sums for each integer n and the Archimedean reciprocal property; it makes no selections from arbitrary families."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Alison L. Gibbs and Francis E. Su, On Choosing and Bounding Probability Metrics, International Statistical Review 70(3), 419–435 (2002)"
      url: "https://math.hmc.edu/su/wp-content/uploads/sites/10/2019/06/ON-CHOOSING-AND-BOUNDING-PROBABILITY.pdf"
      locator: "Complete 21-page article, §§1–3; total-variation probability-metric conventions and bounded-integral comparisons."
    - title: "David A. Levin, Yuval Peres, and Elizabeth L. Wilmer, Markov Chains and Mixing Times, 2nd ed."
      url: "https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf"
      locator: "Complete 461-page book, §4.1 and Proposition 4.5; event-supremum and bounded-function dual forms."
---

## Statement

Let $(E,\mathcal E)$ be a measurable space, let $P$ and $Q$ be probability measures on it, and let $f:E\to\mathbb R$ be measurable with $|f|\le M$ pointwise for some finite $M\ge0$. With the convention
$$\lVert P-Q\rVert_{\mathrm{TV}}:=\sup_{A\in\mathcal E}|P(A)-Q(A)|,$$
one has
$$\left|\int f\,dP-\int f\,dQ\right|\le 2M\lVert P-Q\rVert_{\mathrm{TV}}.$$
For every measurable $g:E\to\mathbb R$ with $0\le g\le M$ pointwise, one also has
$$\left|\int g\,dP-\int g\,dQ\right|\le M\lVert P-Q\rVert_{\mathrm{TV}}.$$
Both integral differences are zero when $M=0$.

## Facts & Assumptions

**Given:** A measurable space $(E,\mathcal E)$, probability measures $P,Q$, and measurable real functions $f,g$ satisfying $|f|\le M<\infty$ and $0\le g\le M$.

[F1] A probability measure has total mass one. [[def-probability-measure]]

[F2] Total variation here is the event supremum $\sup_{A\in\mathcal E}|P(A)-Q(A)|$ and has no half-factor. [[def-total-variation-distance-for-probability-laws]]

[F3] On nonnegative simple functions, the nonnegative Lebesgue integral agrees with the simple integral. [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]

[F4] The simple integral is the sum of the coefficients times the measures of the level sets; in particular, an indicator integrates to the measure of its set. [[def-integral-of-a-nonnegative-simple-function]]

[F5] The nonnegative integral is additive, monotone, and nonnegatively homogeneous. [[cor-additivity-of-the-nonnegative-lebesgue-integral]] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[F6] A real measurable function is integrable when its absolute value has finite nonnegative integral; the integral is linear on integrable functions. [[def-integrable-real-and-complex-functions-and-their-integrals]] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F7] For every $\eta>0$ there is an integer $n\ge1$ with $1/n<\eta$. [[cor-archimedean-reciprocal]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 If $M=0$, then $f=0$ and $g=0$ pointwise, so both claims hold. To prove the nonnegative claim for an arbitrary finite bound $L>0$, let $w:E\to\mathbb R$ be measurable with $0\le w\le L$, fix an integer $n\ge1$, put $\Delta=L/n$, and define $A_k=\{x:w(x)\ge k\Delta\}$ for $1\le k\le n$ and $s_n=\Delta\sum_{k=1}^n\mathbf1_{A_k}$. The sets are measurable, $s_n$ is nonnegative simple, and $0\le w-s_n\le\Delta$ pointwise. [given, construct]

2.1 By [F3]–[F5], $\int s_n\,dP=\Delta\sum_{k=1}^nP(A_k)$ and likewise for $Q$, so $|\int s_n\,dP-\int s_n\,dQ|\le n\Delta\lVert P-Q\rVert_{\mathrm{TV}}=L\lVert P-Q\rVert_{\mathrm{TV}}$. Also $0\le\int(w-s_n)\,dP\le\Delta$ and $0\le\int(w-s_n)\,dQ\le\Delta$, because $w-s_n\le\Delta$ and both measures have mass one. The triangle inequality therefore gives $|\int w\,dP-\int w\,dQ|\le L\lVert P-Q\rVert_{\mathrm{TV}}+2L/n$. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 Given any $\eta>0$, choose $n$ by [F7] with $1/n<\eta/(2L)$. The estimate in step 2.1 then gives $|\int w\,dP-\int w\,dQ|<L\lVert P-Q\rVert_{\mathrm{TV}}+\eta$. If the bound by $L\lVert P-Q\rVert_{\mathrm{TV}}$ failed, choosing $\eta$ to be half the positive excess would contradict this inequality. Taking $w=g$ and $L=M$ proves the stated nonnegative case when $M>0$. [F7, step 2.1, algebra]

4.1 For the signed case with $M>0$, let $h=f+M$. Then $h$ is measurable and $0\le h\le2M$, so step 3.1 with $w=h$ and $L=2M$ gives $|\int h\,dP-\int h\,dQ|\le2M\lVert P-Q\rVert_{\mathrm{TV}}$. Also $|f|\le M$, so [F1], [F3]–[F5] give $\int|f|\,dP\le M$ and $\int|f|\,dQ\le M$; hence $f$ is integrable under both measures by [F6]. The constant $M$ has integral $M$ under each probability measure, so linearity [F6] gives $\int f\,dP-\int f\,dQ=\int h\,dP-\int h\,dQ$. This proves the signed case. [F1, F3, F4, F5, F6, step 3.1, algebra] ∎

