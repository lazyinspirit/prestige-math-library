---
title: Combining the actual motivic and cdh outer-term bounds
status: draft
research_item: lem-author-0bac6b264f4a-motivic-dim-prime-field-vanishing
dependency_level: 12
---

PDF p. 4: Motivic dimension vanishing

## Prerequisites

- [lem-author-0bac6b264f4a-motivic-dim-general-interface](item-lem-author-0bac6b264f4a-motivic-dim-general-interface)
- [lem-author-0bac6b264f4a-motivic-dim-fiber-bound](item-lem-author-0bac6b264f4a-motivic-dim-fiber-bound)
- [lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing](item-lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing)
- [thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input](item-thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input)

## Statement
For a prime field $F$, a Noetherian $F$-scheme $X$ of finite dimension $d$ and $j\geq0$, the complex $M_{j,F}(X)$ is supported in degrees $\leq j+d$. Moreover the actual comparison $M_{j,F}(X)\to C_{j,F}(X)$ induces a surjection in degree $j+d$ and isomorphisms in every larger degree.

## Facts & Assumptions
**Given:** $F,X,d,j$ under the stated hypotheses.

**Goal:** Combine the two specific outer terms, rather than replace graded vanishing by a claim about total K-theory.

[F1] [lem-author-0bac6b264f4a-motivic-dim-general-interface](item-lem-author-0bac6b264f4a-motivic-dim-general-interface) supplies the actual fiber sequence $F_{j,F}(X)\to M_{j,F}(X)\to C_{j,F}(X)$.

[F2] [lem-author-0bac6b264f4a-motivic-dim-fiber-bound](item-lem-author-0bac6b264f4a-motivic-dim-fiber-bound) gives the first outer bound $\leq j+d$. [thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input](item-thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input) supplies the second outer bound on exactly the Noetherian finite-dimensional prime-field scheme $X$.

[F3] [lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing](item-lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing) is the derived long-exact-sequence calculation.

## Proof
1.1 Apply [F3] to the actual sequence in [F1] with $N=j+d$, using the fiber bound from [F2]. It gives the surjection at degree $j+d$ and comparison isomorphisms for every $i>j+d$. These are maps induced by the actual natural transformation, not merely abstract group isomorphisms. [F1, F2, F3]

2.1 The cdh outer bound in [F2] makes the target of each high-degree comparison zero, so step 1.1 gives $H^i(M_{j,F}(X))=0$ for $i>j+d$. Both source-side dimension inputs were applied with their full Noetherian and finite-dimensional hypotheses; $j=0$ is included. [F1, F2, F3, step 1.1] ∎
