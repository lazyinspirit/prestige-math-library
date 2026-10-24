---
id: thm-flat-quotients-preserve-short-exact-tensor-sequences
kind: theorem
title: "A short exact sequence with flat quotient remains short exact after tensoring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-flat-and-faithfully-flat-modules-and-ring-maps, thm-right-exactness-of-tensor-products, cor-free-modules-are-projective-and-flat, cor-every-module-is-a-quotient-of-a-free-module, def-exact-and-short-exact-sequences-of-modules]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemma 10.39.12"
      url: "https://stacks.math.columbia.edu/tag/00H9"
    - title: "C. Dennis, Week 4 on tensor products and flatness"
      url: "https://math.uchicago.edu/~may/PEOPLE/DENNIS/week4b.pdf"
pipeline_run: null
---

## Statement

Let

$$0\longrightarrow A\xrightarrow{i}B\xrightarrow{p}C\longrightarrow0$$

be a short exact sequence of modules over a commutative ring $R$. If $C$ is flat, then for every $R$-module $N$ the sequence

$$0\longrightarrow A\otimes_RN\xrightarrow{i\otimes1}B\otimes_RN\xrightarrow{p\otimes1}C\otimes_RN\longrightarrow0$$

is short exact.

## Facts & Assumptions

**Given:** A short exact sequence $0\to A\xrightarrow iB\xrightarrow pC\to0$ with $C$ flat, and an $R$-module $N$.

[L1] Flatness makes tensoring preserve injections ([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

[L2] Tensoring is right exact ([[thm-right-exactness-of-tensor-products]]).

[L3] Free modules are flat, and flatness means that tensoring preserves exact sequences; hence tensoring a short exact sequence with a free module preserves short exactness ([[cor-free-modules-are-projective-and-flat]], [[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

[L4] Every module admits a canonical surjection from a free module ([[cor-every-module-is-a-quotient-of-a-free-module]]).

[L5] A short exact sequence has an injective first map, a surjective second map, and image equal to kernel ([[def-exact-and-short-exact-sequences-of-modules]]).

## Proof

**Proof technique:** direct.

1.1 By [L4], choose a surjection $\varepsilon:F\to N$ from a free module and let $K=\ker\varepsilon$, so $0\to K\to F\to N\to0$ is short exact. [L4, L5, choose]

2.1 Tensor the sequence in step 1.1 with each of $A,B,C$. By [L2], the three resulting columns $X\otimes_RK\to X\otimes_RF\to X\otimes_RN\to0$ are right exact. The map $C\otimes_RK\to C\otimes_RF$ is injective by flatness of $C$ and [L1]. [step 1.1, L1, L2]

2.2 Tensor the given short exact sequence with $F$. Since $F$ is flat by [L3], the middle row $0\to A\otimes_RF\to B\otimes_RF\to C\otimes_RF\to0$ is short exact. Tensoring it with $K$ and $N$ gives right-exact bottom and top rows by [L2]. [given, step 1.1, L2, L3]

3.1 Let $x\in A\otimes_RN$ map to zero in $B\otimes_RN$. By right exactness of the $A$-column, lift $x$ to $y\in A\otimes_RF$. Its image $y_B\in B\otimes_RF$ maps to zero in $B\otimes_RN$, so right exactness of the $B$-column gives $z\in B\otimes_RK$ mapping to $y_B$. [step 2.1, step 2.2, choose]

4.1 The image of $z$ in $C\otimes_RK$ maps in $C\otimes_RF$ to the image of $y_B$, which is zero because $y$ came from $A\otimes_RF$. The injectivity in step 2.1 therefore makes the image of $z$ in $C\otimes_RK$ zero. [step 2.1, step 3.1, L5]

5.1 By right exactness of the bottom row in step 2.2, choose $w\in A\otimes_RK$ mapping to $z$. In $B\otimes_RF$, the images of $y$ and of $w$ are both $y_B$; injectivity of $A\otimes_RF\to B\otimes_RF$ from step 2.2 makes $y$ the image of $w$. [step 2.2, step 3.1, step 4.1, choose]

6.1 The composite $A\otimes_RK\to A\otimes_RF\to A\otimes_RN$ is zero because $K\to F\to N$ is zero. Hence step 5.1 gives $x=0$, proving $i\otimes1$ injective. [step 3.1, step 5.1, algebra]

7.1 Right exactness [L2] already gives exactness at $B\otimes_RN$, surjectivity onto $C\otimes_RN$, and the terminal zero. Together with step 6.1, the tensored sequence is short exact. [step 6.1, L2, L5] ∎
