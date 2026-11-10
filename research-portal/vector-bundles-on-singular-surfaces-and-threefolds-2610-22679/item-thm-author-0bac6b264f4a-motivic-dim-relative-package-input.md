---
title: External geometric properties of the actual motivic comparison fiber
status: published
research_item: thm-author-0bac6b264f4a-motivic-dim-relative-package-input
dependency_level: 9
---

PDF p. 4: Motivic dimension vanishing

## Prerequisites

- [thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input](item-thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes · Proposition8.12 p.57 and its proof p.58; Theorem8.2 p.54, footnote14, and its proof p.55; Theorem8.7 p.55 for identification of the intended fiber](https://arxiv.org/pdf/2309.08463v1)

## Statement
For a prime field $F$ and $j\geq0$, define the actual comparison fiber
$$F_{j,F}=\operatorname{fib}(M_{j,F}\xrightarrow{\alpha_{j,F}}C_{j,F}).$$
It is a finitary Nisnevich sheaf, satisfies $L_{\mathrm{cdh}}F_{j,F}=0$ and pro-cdh descent on Noetherian $F$-schemes, and for every $F$-algebra $A$ and finitely generated nilpotent ideal $I\subseteq A$ one has
$$\operatorname{fib}(F_{j,F}(A)\to F_{j,F}(A/I))\in D(\mathbb Z)^{\leq j}.$$

## Source contract
**Given:** The actual complexes and comparison of [thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input](item-thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input), with prime field $F$ and nonnegative weight.

**Goal:** Import exactly the geometric hypotheses later normalized for the dimension criterion.

[F1] EM Proposition8.12, with its proof, gives all the stated properties of this specified fiber; Theorem8.2 is its pro-cdh ingredient.

## External input
Import [F1] under the recorded hypotheses and reading limits. Throughout this package and its dimension-criterion application, pro-cdh descent means the explicit degreewise convention in EM Theorem 8.2, footnote 14: every cohomology group of the levelwise total fiber for an abstract blowup square and its infinitesimal thickenings is zero as a pro abelian group. The source's additional comparison with cartesianness in the unbounded category $\operatorname{Pro}(D(\mathbb Z))$ is not imported. The dimension criterion's proof needs only this degreewise condition. In particular, no degreewise extraction from vanishing K-groups is used. The characteristic-zero derived de Rham and characteristic-$p$ syntomic-rigidity arguments underlying the relative bound, and the pro-cdh machinery, remain explicit imported foundations. The local argument below checks their application and the shift required by the criterion instead of claiming to reprove them.
