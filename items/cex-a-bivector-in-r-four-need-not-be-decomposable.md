---
id: cex-a-bivector-in-r-four-need-not-be-decomposable
kind: counterexample
title: "A bivector in $\\mathbb R^4$ need not be decomposable"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors, thm-exterior-algebra-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Statement refuted

Every bivector $\alpha\in\Lambda^2\mathbb R^4$ is decomposable, that is, of the form $\alpha=u\wedge v$.

## Facts & Assumptions

**Given:** The standard basis of $\mathbb R^4$ and the bivector $\alpha=e_1\wedge e_2+e_3\wedge e_4$.

[L1] The wedge $v_1\wedge\cdots\wedge v_k$ is a basis element of $\Lambda^k\mathbb R^4$, hence nonzero, for independent vectors ([[thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors]]).

[L2] The wedge product is associative and satisfies $v\wedge w=-w\wedge v$ for vectors ([[thm-exterior-algebra-laws]]).

## Counterexample

**Proof technique:** direct.


1.1 If $\alpha=u\wedge v$ were decomposable, then by [L2], $\alpha\wedge\alpha=u\wedge v\wedge u\wedge v=-u\wedge u\wedge v\wedge v=0$. [L2, algebra]

1.2 For the displayed $\alpha$, compute $\alpha\wedge\alpha=e_1\wedge e_2\wedge e_3\wedge e_4+e_3\wedge e_4\wedge e_1\wedge e_2=2e_1\wedge e_2\wedge e_3\wedge e_4$, which is the nonzero basis vector of $\Lambda^4\mathbb R^4$ by [L1]. [L1, L2, algebra]

2.1 Steps 1.1 and 1.2 contradict each other, so the bivector $\alpha$ is not decomposable. [step 1.1, step 1.2] ∎
