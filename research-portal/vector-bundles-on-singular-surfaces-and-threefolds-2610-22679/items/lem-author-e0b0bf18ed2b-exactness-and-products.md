---
id: lem-author-e0b0bf18ed2b-exactness-and-products
kind: lemma
title: Stable rotation and exact coherent products
status: published
domain: mathematics
deps:
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
dependency_roles:
  thm-author-e0b0bf18ed2b-stable-enhancement-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 1
---

## Statement
In $\mathrm{Sp}$ every small coherent diagram has a homotopy limit and colimit. For $f:A\to B$ define $\operatorname{fib}(f)=A\times_B0$ and $\operatorname{cofib}(f)=B\amalg_A0$. Then $\operatorname{cofib}(f)\simeq\operatorname{fib}(f)[1]$. A fiber sequence $F\to A\to B$, including its nullhomotopy and defining pullback square, extends to the cofiber triangle $F\to A\to B\to F[1]$. Products are coherent homotopy products. Smash with a fixed spectrum preserves finite limits and finite colimits in either variable.

## Facts & Assumptions
**Given:** Spectra, a map $f$ and a small indexing infinity-category. Write $0$ for the zero object and $[1]$ for suspension, $E[1]=0\amalg_E0$.

**Goal:** Establish rotation, products and separate exactness of smash.

[F1] The stable enhancement gives all small limits and colimits, equality of pushouts and pullbacks, and a symmetric monoidal smash preserving colimits separately. [[thm-author-e0b0bf18ed2b-stable-enhancement-input]]

## Proof
1.1 The limits and colimits exist by [F1] and are homotopy limits and colimits because their universal properties are equivalences of mapping spaces. In particular, the limit over a discrete small indexing category is the homotopy product, with the coherences supplied by the limit construction. [F1]

1.2 The square defining $F$ as the fiber of $A\to B$ is a pullback and hence a pushout. Thus $B\simeq A\amalg_F0$. Pasting pushouts gives $B\amalg_A0\simeq(A\amalg_F0)\amalg_A0\simeq0\amalg_F0=F[1]$. The induced map $B\to F[1]$ completes the stated cofiber triangle. Taking $F=\operatorname{fib}(f)$ gives $\operatorname{cofib}(f)\simeq\operatorname{fib}(f)[1]$. [F1, given]

2.1 Smash with a fixed spectrum preserves colimits and therefore the zero object and pushout squares. A pullback square is a pushout square, so its image is again both a pushout and a pullback. Preservation of the zero object and pullbacks gives preservation of finite limits; finite colimits are preserved by assumption. The same argument applies in the other variable. This proves the statement. [F1, step 1.1, step 1.2] ∎
