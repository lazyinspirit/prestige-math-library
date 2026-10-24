---
id: "ex-a-deterministic-kernel-from-a-measurable-map"
kind: "example"
title: "A deterministic kernel from a measurable map"
deps: ["def-measure-kernel-and-probability-kernel", "def-composition-of-probability-kernels", "lem-kernel-composition-is-well-defined-and-associative"]
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

A measurable map $g:(S,\Sigma)\to(T,\Tau)$ defines the deterministic probability kernel $K_g(s,A)=\mathbf1_A(g(s))$. For another measurable map $h:T\to U$, composition of kernels satisfies $K_gK_h=K_{h\circ g}$ pointwise.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] Kernel sections are pointwise measures and event evaluations are measurable. [[def-measure-kernel-and-probability-kernel]].

[F2] Kernel composition is defined by integrating the second evaluation against the first. [[def-composition-of-probability-kernels]].

[F3] The composition candidate is a probability kernel. [[lem-kernel-composition-is-well-defined-and-associative]].

## Verification

**Proof technique:** direct.

1.1 For fixed s, $A\mapsto\mathbf1_A(g(s))$ vanishes on the empty set and equals one on T. If $A_j$ are disjoint, at most one contains g(s), so $\mathbf1_{\bigcup_jA_j}(g(s))=\sum_j\mathbf1_{A_j}(g(s))$. This is countable additivity, so the section is the Dirac probability at g(s). For a measurable A, the evaluation is $\mathbf1_{g^{-1}(A)}(s)$; its set $g^{-1}(A)$ is measurable by hypothesis. These are exactly [F1]. [F1]

2.1 By [F2] and [F3], for a measurable $C\subseteq U$, $$ (K_gK_h)(s,C)=\int_T\mathbf1_C(h(t))K_g(s,dt)=K_g(s,h^{-1}(C))=\mathbf1_C(h(g(s))).$$ The middle equality is the integral of an indicator of the measurable set $h^{-1}(C)$. The composite h after g is measurable because $(h\circ g)^{-1}(C)=g^{-1}(h^{-1}(C))$. This proves the formula at every s, with no reference to a null set. For example on real Borel spaces take $g(s)=s^2$ and $h(t)=t+1$. Then the composite section is $\delta_{s^2+1}$; at s=2 its mass on (4,6) is one and on (0,4] is zero. If S is empty the assertions are vacuous; an empty T with nonempty S cannot support the assumed map g. [step 1.1, F2, F3] ∎
