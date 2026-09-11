---
id: "ex-first-constructible-levels"
kind: "example"
title: "The first constructible levels"
deps: ["def-constructible-hierarchy-and-constructible-rank", "def-cumulative-hierarchy-stages", "def-definable-subsets-of-a-membership-structure"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke Lemma 5.6(b) p15
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

In ZF,

$$L_0=\varnothing,\quad L_1=\{\varnothing\},\quad L_2=\{\varnothing,\{\varnothing\}\},\quad L_3=\mathcal P(L_2).$$

For every $n<\omega$, $L_n=V_n$, and therefore $L_\omega=V_\omega$.

## Facts & Assumptions

**Given:** ZF. Calculated the first four levels and explicitly defined every subset of a finite carrier; finite induction and the omega union give the promised V-level identities.

[F1] [[def-constructible-hierarchy-and-constructible-rank]]: The L hierarchy starts from empty, uses Def at successors, and takes unions at nonzero limits.

[F2] [[def-cumulative-hierarchy-stages]]: The V hierarchy starts from empty, uses power sets at successors, and takes unions at nonzero limits.

[F3] [[def-definable-subsets-of-a-membership-structure]]: Def includes each subset definable with finitely many parameters and has the designated empty case.

## Verification

1.1 For a finite set A every subset B is finite. If $B=\{b_1,\ldots,b_k\}$ is nonempty, the formula $x=b_1\lor\cdots\lor x=b_k$ defines it over A using those parameters. The formula $x\ne x$ defines the empty subset when A is nonempty; the designated clause treats A empty. Hence $\operatorname{Def}(A)=\mathcal P(A)$ for finite A. [F3]

2.1 Starting with empty gives $L_1=\{\varnothing\}$ and $L_2=\{\varnothing,\{\varnothing\}\}$. The four elements of $L_3$ are $\varnothing$, $\{\varnothing\}$, $\{\{\varnothing\}\}$ and $\{\varnothing,\{\varnothing\}\}$. Induction gives finiteness at each stage (a set with k elements has subsets encoded by k binary choices) and $L_{n+1}=\mathcal P(L_n)=\mathcal P(V_n)=V_{n+1}$. The zero stages coincide. Taking the unions over n yields $L_\omega=V_\omega$. [F1, F2, step 1.1] ∎
