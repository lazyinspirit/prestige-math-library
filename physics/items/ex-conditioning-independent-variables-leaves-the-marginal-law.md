---
id: "ex-conditioning-independent-variables-leaves-the-marginal-law"
kind: "example"
title: "Conditioning independent variables leaves the marginal law"
deps: ["def-regular-conditional-distribution", "def-measure-kernel-and-probability-kernel", "thm-independent-random-elements-have-product-joint-law"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
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

## Example

For independent random elements X and Y in arbitrary measurable spaces $(E,\mathcal S)$ and $(T,\mathcal T)$, the constant probability kernel $K(y,A)=P_X(A)$ is a conditional law of X given Y. No standard-Borel assumption or AC existence theorem is needed for this explicit construction.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] A supplied probability kernel satisfies the RCD definition when all conditioning-event integrals agree. [[def-regular-conditional-distribution]].

[F2] The kernel requires probability sections and measurable evaluations. [[def-measure-kernel-and-probability-kernel]].

[F3] Independent random elements have the product of their marginal probabilities as joint law. [[thm-independent-random-elements-have-product-joint-law]].

## Verification

**Proof technique:** direct.

1.1 For each y the section $K(y,\cdot)=P_X$ is a probability measure; for each A the evaluation is constant and therefore measurable. For $B\in\mathcal T$, independence through [F3] gives $$\int_{\{Y\in B\}}K(Y,A)\,dP=P_X(A)P_Y(B)=P(X\in A,Y\in B).$$ Every event in $\sigma(Y)$ is of this form, because the inverse images of all measurable B already form a sigma-algebra. This proves [F1], while the first two observations prove [F2]. [F1, F2, F3]

2.1 For a concrete calculation, put probability 1/6 at each point of $\{0,1\}\times\{0,1,2\}$ and let X,Y be the two coordinates. Each pair has probability $(1/2)(1/3)$, so their marginal rectangle probabilities factor and the coordinates are independent. The kernel gives $K(y,\{1\})=1/2$ for every y. For $B=\{0,2\}$ its event integral is $(1/2)(2/3)=1/3$, equal to the mass of the two points $(1,0),(1,2)$. If either variable is deterministic the same formula applies, with a Dirac marginal where appropriate. [step 1.1, F3] ∎
