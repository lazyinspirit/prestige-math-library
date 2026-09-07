---
id: "cex-continuous-cantor-image-raises-hausdorff-dimension"
kind: "counterexample"
title: "A continuous image can raise Hausdorff dimension"
deps: ["thm-cantor-function-properties", "cor-cantor-function-is-continuous", "thm-cantor-set-hausdorff-dimension-and-exact-measure", "cor-euclidean-hausdorff-dimension"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin 264J; published Cantor-function ternary/binary formula
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement refuted

Assume the Axiom of Countable Choice. A continuous image can have strictly larger Hausdorff dimension than its domain. The Cantor function restricted to $C$ maps $C$ continuously onto $[0,1]$, raising dimension from $\log2/\log3$ to one.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] The Cantor function is onto $[0,1]$, agrees with $\gamma$ on $C$, and is constant on each gap interval $[u,v]$ with endpoints in $C$; every point outside $C$ lies in such a gap. [[thm-cantor-function-properties]]

[F2] The Cantor function is continuous on $[0,1]$. [[cor-cantor-function-is-continuous]]

[F3] Under the standing Countable Choice hypothesis, $\dim_H C=\log2/\log3$. [[thm-cantor-set-hausdorff-dimension-and-exact-measure]]

[F4] Under the standing Countable Choice hypothesis, positive-length subsets of $\mathbb R$ have Hausdorff dimension one. [[cor-euclidean-hausdorff-dimension]]

## Counterexample

1.1 Given $y\in[0,1]$, surjectivity provides $x\in[0,1]$ with $c(x)=y$. If $x\in C$ this already suffices. Otherwise $x$ lies in a gap $(u,v)$ whose endpoints are in $C$ and $c(u)=c(x)=y$. Thus $c(C)=[0,1]$. Restricting the continuous function to $C$ preserves continuity. [F1, F2]

2.1 The domain has dimension $\log2/\log3<1$, whereas the image interval has positive length and dimension one. This is the claimed strict increase; no injectivity is asserted for this example. [F3, F4, step 1.1] ∎
