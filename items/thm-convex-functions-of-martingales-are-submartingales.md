---
id: "thm-convex-functions-of-martingales-are-submartingales"
kind: "theorem"
title: "Convex functions of martingales are submartingales"
deps: ["def-martingale-submartingale-and-supermartingale", "thm-conditional-jensen-inequality", "lem-convex-functions-have-countable-supporting-line-representations", "thm-composition-with-borel-functions-preserves-measurability", "def-axiom-of-choice", "thm-basic-algebra-and-order-properties-of-conditional-expectation"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: "draft"
origin: "pipeline"
---

## Statement

Assume AC. If $M$ is a real martingale and $\phi:\mathbb R\to\mathbb R$ is finite convex with $\phi(M_n)\in L^1(P)$ for every $n$, then $(\phi(M_n))$ is a submartingale. If $X$ is instead a submartingale and $\phi$ is also nondecreasing, the same conclusion holds provided $\phi(X_n)\in L^1(P)$ for every $n$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] A finite convex real function is Borel measurable. [[lem-convex-functions-have-countable-supporting-line-representations]].

[F2] Composition with a Borel outer function preserves measurability. [[thm-composition-with-borel-functions-preserves-measurability]].

[F3] Conditional Jensen applies when the real input and its finite convex image are integrable. [[thm-conditional-jensen-inequality]].

[F4] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 The function $\phi$ is Borel, so each $\phi(M_n)$ is $\mathcal F_n$-measurable. Integrability of the image is an explicit assumption. At time $n+1$ the input $M_{n+1}$ is integrable by the martingale definition and its image is integrable by hypothesis. Conditional Jensen therefore gives $E[\phi(M_{n+1})\mid\mathcal F_n]\ge\phi(E[M_{n+1}\mid\mathcal F_n])=\phi(M_n)$ a.s. These are exactly the submartingale inequalities [[def-martingale-submartingale-and-supermartingale]]. [given, F1, F2, F3]

2.1 For a submartingale $X$, measurability and integrability of $\phi(X_n)$ hold by the same argument. Jensen and the nondecreasing hypothesis give $E[\phi(X_{n+1})\mid\mathcal F_n]\ge\phi(E[X_{n+1}\mid\mathcal F_n])\ge\phi(X_n)$ a.s. Monotonicity is applied to the submartingale inequality at that fixed time. AC is inherited from conditional Jensen and the CE existence used in both computations. No convex image of an arbitrary integrable variable is presumed integrable. [given, F1, F2, F3, F4, step 1.1] ∎
