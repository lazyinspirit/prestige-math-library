---
id: thm-baer-sum-agrees-with-addition-in-h-two
kind: theorem
title: "The Baer sum agrees with addition in H^2"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action, def-baer-sum-of-abelian-kernel-extensions, lem-baer-sum-is-independent-of-extension-representatives]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Statement

Under the classification bijection between extension classes and $H^2(G,M)$,
the Baer sum of extensions corresponds to addition of cohomology classes.

## Facts & Assumptions

**Given:** Two extension classes of $G$ by the abelian $G$-module $M$.

[L1] $H^2(G,M)$ classifies the extension classes
([[thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action]]).

[F1] The Baer sum is defined on extension classes
([[def-baer-sum-of-abelian-kernel-extensions]]).

[L2] That operation is independent of the chosen representatives
([[lem-baer-sum-is-independent-of-extension-representatives]]).

## Proof

**Proof technique:** direct.

1.1 Choose cocycle representatives $f_1$ and $f_2$ for the two classes via [L1]. The corresponding twisted-product extensions have a pullback whose kernel is $M\oplus M$, and pushing out along addition sends the pair $(f_1,f_2)$ to the cocycle $f_1+f_2$. [L1, F1, given, choose, algebra]

2.1 Therefore the extension class of the Baer sum corresponds to the cohomology class $[f_1+f_2]=[f_1]+[f_2]$ in $H^2(G,M)$. By [L2], this description does not depend on the chosen cocycle representatives. [L2, step 1.1, algebra]

3.1 So the classification bijection is an additive identification. [step 2.1] ∎
