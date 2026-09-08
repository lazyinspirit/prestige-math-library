---
id: ex-first-order-sentence-deduction
kind: example
title: "A two-premise formal deduction"
status: draft
origin: pipeline
deps: [thm-first-order-sentence-deduction, def-set-coded-formal-derivation]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Moschovakis, axioms and rules §§1H.1–1H.2 pp34–35 and Theorem 1H.8 p37; explicit local instance."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Example

In the signature with unary relations $P,Q$, write $A=\forall x(P(x)\to Q(x))$, $B=\forall xP(x)$ and $C=\forall xQ(x)$. From the two sentence assumptions $A,B$ derive $C$, and then discharge either assumption.

## Facts & Assumptions

**Given:** The displayed signature and sentences $A,B,C$.

[F1] The sentence deduction theorem discharges an assumed sentence and permits MP in the reverse direction. ([[thm-first-order-sentence-deduction]])

[F2] Universal instantiation, MP and generalization are rules of the fixed calculus. ([[def-set-coded-formal-derivation]])

## Verification

1.1 The annotated derivation is: line $0$: $A$ (assumption); line $1$: $A\to(P(x)\to Q(x))$ (universal instantiation); line $2$: $P(x)\to Q(x)$ (MP on $0,1$); line $3$: $B$ (assumption); line $4$: $B\to P(x)$ (universal instantiation); line $5$: $P(x)$ (MP on $3,4$); line $6$: $Q(x)$ (MP on $5,2$); line $7$: $\forall xQ(x)=C$ (generalization). Both substitutions are $x/x$, which is free-for, and both assumptions are sentences, so generalization has no free-assumption obstruction. [F2]

2.1 Apply F1 to that eight-line proof to obtain $\{A\}\vdash B\to C$ and, discharging $A$ instead, $\{B\}\vdash A\to C$. Discharge the remaining sentence in the first proof to obtain $\vdash A\to(B\to C)$. Thus the example displays a derivation and its actual discharged conclusions. [F1, step 1.1] ∎
