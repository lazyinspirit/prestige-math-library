---
id: "ex-boolean-valued-one-bit-name"
kind: "example"
title: "A one-bit Boolean-valued name"
deps: ["lem-boolean-valued-semantics-is-well-defined", "def-forcing-name-valuation-and-generic-extension"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke Definition 6.27 pp26–27; local finite Boolean calculation
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

In the complete Boolean algebra $B=\mathcal P(\{0,1\})$, let $b=\{0\}$, let e be the empty name and let $t=\{\langle e,b\rangle\}$. Then

$$\|e\in t\|=b,\qquad\|t=e\|=\neg b=\{1\},\qquad\|t=t\|=1_B.$$

Valuation using the principal Boolean ultrafilter $U_0=\{a\subseteq\{0,1\}:0\in a\}$ gives $t_{U_0}=\{\varnothing\}$; using $U_1$ gives $t_{U_1}=\varnothing$.

## Facts & Assumptions

**Given:** ZF. Calculated all three Boolean values directly in the four-element algebra and both principal valuations; no generic truth theorem or Boolean completion is consumed.

[F1] [[lem-boolean-valued-semantics-is-well-defined]]: The atomic clauses give well-defined joins and meets, including the empty ones.

[F2] [[def-forcing-name-valuation-and-generic-extension]]: Valuation is defined recursively by retaining exactly the subnames whose coefficients lie in the evaluating set; in particular, the empty name evaluates to empty.

## Verification

1.1 In this algebra join is union, meet is intersection and complement is relative to $\{0,1\}$. Every family has these bounds, so the algebra is complete. The empty atomic clauses give $E(e,e)=1_B$ and $I(e,e)=0_B$. Thus $I(e,t)=b\wedge1_B=b$, while $E(t,e)=(\neg b\vee0_B)\wedge1_B=\neg b$. [F1]

2.1 The equality clause for t with itself has in both factors the single term $\neg b\vee I(e,t)=\neg b\vee b=1_B$, so $E(t,t)=1_B$. The only subname of t is e, whose valuation is empty. Since $b\in U_0$ and $b\notin U_1$, the valuation rule gives respectively the singleton of empty and the empty set. These U_i are filters deciding each subset by whether it contains i; no ultrafilter-extension principle or generic truth theorem is used. [F1, F2, step 1.1] ∎
