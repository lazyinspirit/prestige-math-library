---
id: "lem-kernel-composition-is-well-defined-and-associative"
kind: "lemma"
title: "Kernel composition is well defined and associative"
deps: ["def-composition-of-probability-kernels", "thm-measurability-of-integration-against-a-kernel", "thm-monotone-convergence-for-the-integral", "thm-increasing-simple-approximation-of-a-nonnegative-measurable-function"]
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

## Statement

The composition KL of probability kernels $K:S\to T$ and $L:T\to U$ is a probability kernel $S\to U$. If $M:U\to V$ is another probability kernel, then $(KL)M=K(LM)$ at every source point and every measurable subset of V. Equality concerns the specified kernels, not unspecified almost-everywhere classes.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] The composition candidate is the integral of the second kernel evaluation. [[def-composition-of-probability-kernels]].

[F2] Integrating a nonnegative jointly measurable function against a probability kernel is measurable. [[thm-measurability-of-integration-against-a-kernel]].

[F3] An increasing sequence of nonnegative measurable functions passes through each integral. [[thm-monotone-convergence-for-the-integral]].

[F4] Nonnegative measurable functions admit increasing simple approximations. [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]].

## Proof

**Proof technique:** direct.

1.1 For each measurable $A\subseteq U$, the function $L(\cdot,A)$ is measurable and between zero and one. Its lift to $S\times T$ is product-measurable because inverse images are rectangles with first factor S. The integration theorem therefore gives measurable source evaluations of KL. For a fixed s, $(KL)(s,\varnothing)=0$ and $(KL)(s,U)=\int1\,dK(s,\cdot)=1$. If $(A_j)_{j\in\mathbb N}$ are disjoint measurable subsets of U, then $L(t,\bigcup_{j\in\mathbb N}A_j)=\lim_N\sum_{j=0}^NL(t,A_j)$, an increasing limit. Monotone convergence and finite additivity of the integral yield $(KL)(s,\bigcup_jA_j)=\sum_j(KL)(s,A_j)$. Hence each source section is a probability measure. [F1, F2, F3]

2.1 Fix s. For every nonnegative measurable $h:U\to[0,\infty]$, $$\int_Uh(u)(KL)(s,du)=\int_T\left(\int_Uh(u)L(t,du)\right)K(s,dt).$$ For h=1_A this is exactly the definition. Finite nonnegative linear combinations establish it for simple h. For increasing simple h_n converging to h, monotone convergence first under each L(t,·), then under K(s,·), and also under (KL)(s,·), proves the identity. The inner integrals are measurable by the integration theorem, so every displayed integral is defined. This is an iterated-kernel identity proved locally; it is not an application of product-measure Fubini to a varying measure. [step 1.1, F1, F2, F3, F4]

3.1 For $A\subseteq V$ measurable take the bounded measurable function $h(u)=M(u,A)$ in step 2.1. Its left side is $((KL)M)(s,A)$, while its right side is $\int_T(LM)(t,A)K(s,dt)=(K(LM))(s,A)$. Step 1.1 also ensures LM is a probability kernel, so both compositions are defined. This proves the asserted pointwise equality for every s and A. When A is empty both sides are zero; when A=V both are one. For an empty source equality is vacuous. If an intermediate target is empty while its source is nonempty, the hypothesized probability kernel cannot exist; no measure of mass one on the empty set is used. The proof requires no AC. [step 1.1, step 2.1, F1] ∎
