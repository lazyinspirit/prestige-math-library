---
id: "cex-the-density-ratio-is-undefined-on-zero-marginal-fibres"
kind: "counterexample"
title: "The density ratio is undefined on zero marginal fibres"
deps: ["thm-conditional-density-formula", "def-measure-kernel-and-probability-kernel", "thm-ftc-second-part", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "def-axiom-of-choice", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

False assertion: a joint probability density always defines its conditional density by the ratio $p(x,y)/\int p(t,y)dt$ at every y.

Assume AC for the compact integration bridge. The uniform joint density $p(x,y)=\mathbf1_{(0,1)}(x)\mathbf1_{(0,1)}(y)$ on the unit square refutes this at y=2. The constant uniform-on-(0,1) probability kernel is nevertheless a valid measurable conditional extension.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement refuted.

[F1] The conditional density theorem normalizes only finite positive marginal fibres and permits a fixed probability filler elsewhere. [[thm-conditional-density-formula]].

[F2] An extension must have probability sections and measurable evaluations everywhere. [[def-measure-kernel-and-probability-kernel]].

[F3] The integral of one on [0,1] is computed by the primitive x. [[thm-ftc-second-part]].

[F4] The compact integral agrees with its Lebesgue integral under countable choice. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F5] AC supplies the countable-choice bridge; no version selection is needed. [[def-axiom-of-choice]].

[F6] Tonelli computes this nonnegative product density and its marginal. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F7] The square density and the interval density define measures. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].

## Counterexample

**Proof technique:** direct.

1.1 The density p is the indicator of a Borel rectangle. By [F3]–[F5], $\int_0^11\,dx=1$; endpoints have measure zero by containment in intervals with arbitrarily small lengths. Tonelli [F6] gives total joint mass $1\cdot1=1$ and marginal $m(y)=\mathbf1_{(0,1)}(y)$. The measure construction is [F7]. At y=2, $p(x,2)=0$ for every x and $m(2)=0$. The asserted quotient is therefore 0/0, which is undefined, at every x on that fibre. Thus the claimed everywhere formula fails for a fully normalized bounded joint density. [F3, F4, F5, F6, F7]

2.1 Put $\rho(A)=\lambda_1(A\cap(0,1))$ and $K(y,A)=\rho(A)$ for all real y. By [F7] and the mass calculation, rho is a probability, and constant evaluations are measurable, proving [F2]. On $0<y<1$ this agrees with the density ratio. On its complement it is the supplied filler allowed by [F1]. Directly, for Borel A,B, $$\int_BK(y,A)P_Y(dy)=\lambda_1(A\cap(0,1))\lambda_1(B\cap(0,1))=P(X\in A,Y\in B),$$ with the last equality from [F6]. So the extension is a conditional law, including an everywhere probability section at y=2. For example $K(2,(0,1/2))=1/2$, a chosen valid extension value, not a value of 0/0. [step 1.1, F1, F2, F6, F7] ∎
