---
id: lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient
kind: lemma
title: Cofiber of a based cofibration is equivalent to the quotient
deps: ["def-reduced-cone-suspension-and-cofiber-sequence", "prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip", "thm-quotient-universal-property", "lem-interval-exponential-law-and-quotient-homotopies"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 8 §4 first lemma p.60
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For a based cofibration $i:A\hookrightarrow X$ in CGWH, the canonical map $\psi:C_i\to X/A$, collapsing the cone CA, is a based homotopy equivalence.

## Facts & Assumptions

[F1] The cofiber is X with the reduced cone CA attached at height zero. [[def-reduced-cone-suspension-and-cofiber-sequence]]

[F2] Based HEP gives a retraction from the reduced cylinder onto the reduced mapping strip. [[prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip]]

[F3] A continuous map constant on quotient fibres descends uniquely and continuously. [[thm-quotient-universal-property]]

[F4] Products of quotient maps with the interval are quotient, so fibrewise-compatible homotopies descend. [[lem-interval-exponential-law-and-quotient-homotopies]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 Let r retract the reduced cylinder on X to $M_i=X\cup_i(A\times I)$ with basepoint track collapsed. Collapse $A\times\{1\}$ in the target to obtain $R:X\times I\to C_i$. It satisfies $R(x,0)=x$ and $R(a,t)=[a,t]$. In particular $R(a,1)=*$, so $R(-,1)$ descends to a based map $\phi:X/A\to C_i$. All maps are continuous through their quotient topologies by F2 and F3. [F1, F2, F3]

2.1 The homotopy $\psi R(x,t)$ is constant on A for every t, since R(a,t) lies in CA. It is constant on the fibres of $(X\to X/A)\times\operatorname{id}_I$, so F3 and F4 descend it to a homotopy on X/A. At t=0 it is the identity and at t=1 it is $\psi\phi$. [F1, F3, F4, step 1.1]

3.1 On X use R(x,t), and on the attached cone use $[a,s]\mapsto[a,\max(s,t)]$. At s=0 these agree by step 1.1; at s=1 the image is always the tip, and on the basepoint track it is always *. These compatible formulas descend through the cofiber quotient and its product with I by F3 and F4. At t=0 the resulting homotopy is the identity of $C_i$; at t=1 it agrees with $\phi\psi$ on X and sends CA to *. Along with step 2.1 this proves the based homotopy equivalence. [F1, F3, F4, step 1.1, step 2.1] ∎
