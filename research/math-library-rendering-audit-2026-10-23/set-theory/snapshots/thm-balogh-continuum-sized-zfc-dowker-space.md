---
id: thm-balogh-continuum-sized-zfc-dowker-space
kind: theorem
title: Balogh continuum-sized ZFC Dowker space
status: published
origin: pipeline
deps: [lem-balogh-hereditary-normality, lem-balogh-failure-of-countable-shrinking, thm-dowker-product-characterization, def-axiom-of-choice, def-balogh-continuum-topology, lem-balogh-neighborhood-basis, def-countable-paracompactness-and-dowker-space, cor-cardinal-absorption]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Hart, Set-Theoretic Methods in General Topology, Chapter 5 section 2, complete construction, printed pp. 30–34"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop.pdf
---

## Statement

Assume AC. There exists a Hausdorff hereditarily normal Dowker space of cardinality $2^{\aleph_0}$. It is a union of countably many relatively discrete subspaces, and its product with the usual closed interval $[0,1]$ is not normal. No CH assumption is required.

## Facts & Assumptions

**Given:** $\kappa=2^{\aleph_0}$ in ZFC.

[F1] The proved combinatorial map defines the Balogh space on $X=\kappa\times\omega$ ([[def-balogh-continuum-topology]]).

[F2] Its topology is $T_1$ and each level $L_n$ is relatively discrete ([[lem-balogh-neighborhood-basis]]).

[F3] The space is hereditarily normal and Hausdorff ([[lem-balogh-hereditary-normality]]).

[F4] It is not countably paracompact ([[lem-balogh-failure-of-countable-shrinking]]).

[F5] A normal $T_1$ space failing countable paracompactness is a Dowker space ([[def-countable-paracompactness-and-dowker-space]]).

[F6] Normality of the interval product of a $T_1$ space implies countable paracompactness of that space ([[thm-dowker-product-characterization]]).

[F7] An infinite cardinal absorbs multiplication by a nonzero smaller cardinal ([[cor-cardinal-absorption]]).

[A1] AC is assumed for the construction and cardinal comparisons ([[def-axiom-of-choice]]).

## Proof

1.1 Take the space in F1, whose defining map exists by the proved combinatorial construction. F2 and F3 under A1 give its $T_1$, Hausdorff and hereditary-normality properties. F4 gives failure of countable paracompactness. In particular it is normal, and F5 makes it a Dowker space. [F1, F2, F3, F4, F5, A1]

1.2 The map $\alpha\mapsto(\alpha,0)$ injects $\kappa$ into $X$. In the reverse direction the underlying set is exactly $\kappa\times\omega$ by F1. The cardinal $\kappa$ is infinite: the binary functions with a single value one at coordinate $n$ give an injection $\omega\to{}^\omega2$. Thus F7 gives $|\kappa\times\omega|=\kappa$, under the cardinal identifications allowed by A1. This proves $|X|=2^{\aleph_0}$. Also $X=\bigcup_{n<\omega}L_n$ directly from its underlying set, and F2 gives relative discreteness of each level. [F1, F2, F7, A1]

2.1 If $X\times[0,1]$ were normal, F6 would apply since $X$ is $T_1$ by step 1.1 and force countable paracompactness, contradicting F4. Hence the product is not normal. Steps 1.1–1.2 give the remaining assertions. Every assumption used was ZFC; no equation identifying the continuum with $\aleph_1$ was needed. QED. [step 1.1, step 1.2, F4, F6]
