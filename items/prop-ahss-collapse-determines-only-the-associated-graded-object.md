---
id: prop-ahss-collapse-determines-only-the-associated-graded-object
kind: proposition
title: AHSS collapse determines only the associated graded object
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cohomological-atiyah-hirzebruch-spectral-sequence, thm-homological-atiyah-hirzebruch-spectral-sequence, def-extension-problem-of-a-convergent-spectral-sequence, def-associated-graded-object-of-a-filtered-object]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Davis–Kirk, Lecture Notes in Algebraic Topology, §9.1, printed pp. 237–246"
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: "§9.1, associated graded and extension problem, printed pp. 237–246"
    - title: "Romyar Sharifi, Homological Algebra, §4.1, printed pp. 87–90"
      url: https://math.ucla.edu/~sharifi/homalg.pdf
      locator: "§4.1, extension problem, printed pp. 87–90"
---

## Statement

For the Atiyah–Hirzebruch spectral sequences of
[[thm-cohomological-atiyah-hirzebruch-spectral-sequence]] and
[[thm-homological-atiyah-hirzebruch-spectral-sequence]], a collapse of the
spectral sequence determines the associated graded object
$\operatorname{gr}_Fh^*(X)$ and no more: the pages determine the filtration
quotients, while recovering the abutment requires additional additive extension
data, and when the theory is multiplicative also multiplicative extension data.
In particular there is no general rule recovering $h^n(X)$ from a collapsed
$E_2=E_\infty$ page.

## Facts & Assumptions

[F1] The AHSS converges to the associated graded of the skeletal filtration: $E_\infty^{p,q}\cong F^ph^{p+q}(X)/F^{p+1}h^{p+q}(X)$ in the cohomological case and $E^\infty_{p,q}\cong F_ph_{p+q}(X)/F_{p-1}h_{p+q}(X)$ in the homological case ([[thm-cohomological-atiyah-hirzebruch-spectral-sequence]], [[thm-homological-atiyah-hirzebruch-spectral-sequence]]).

[F2] The extension problem consists of reconstructing an object from its associated graded pieces through the short exact sequences $0\to F^{p+1}\to F^p\to\operatorname{gr}^p\to0$; specifying the outside objects does not specify the middle one or the maps, and a splitting is extra data ([[def-extension-problem-of-a-convergent-spectral-sequence]], [[def-associated-graded-object-of-a-filtered-object]]).

[F3] A filtration of an abelian group determines the associated graded as the direct sum of its successive quotients; no converse reconstruction of the group is asserted ([[def-associated-graded-object-of-a-filtered-object]]).

## Proof

**Proof technique:** direct.

**Given:** The two AHSSs of [F1] and a collapsed page $E_2=E_\infty$.

1.1 By [F1] the collapsed page determines exactly the filtration quotients $F^p/F^{p+1}$ (cohomologically) or $F_p/F_{p-1}$ (homologically); nothing in the identification uses or supplies the extension classes, and the collapse hypothesis only asserts the vanishing of the differentials, so it adds no data beyond the pages. [F1, F2, given]

1.2 Additively, let $A=\mathbb Z/4$ with the filtration $F^0=A$, $F^1=2\mathbb Z/4\cong\mathbb Z/2$, $F^2=0$, and let $B=\mathbb Z/2\oplus\mathbb Z/2$ with the filtration $F^0=B$, $F^1=0\oplus\mathbb Z/2$, $F^2=0$. Then $\operatorname{gr}_FA\cong\mathbb Z/2\oplus\mathbb Z/2\cong\operatorname{gr}_FB$, but $A$ and $B$ are not isomorphic; hence the additive extension data are not determined by the graded pieces. [F2, F3, given]

1.3 Multiplicatively, let $A=\mathbb Z/4$ with the ideal filtration $F^0=A$, $F^1=(2)$, $F^2=0$ and let $R=\mathbb F_2[t]/(t^2)$ with the ideal filtration $F^0=R$, $F^1=(t)$, $F^2=0$. Both associated graded rings are $\mathbb Z/2\oplus\mathbb Z/2$, with the second summand in filtration degree one and square zero, but $A$ has characteristic four while $R$ has characteristic two, so the underlying rings differ; hence multiplicative extension data are additional. [F2, F3, algebra]

2.1 Steps 1.1 to 1.3 show that the collapsed pages determine the associated graded object and that distinct filtered objects, additively and multiplicatively, share that associated graded; therefore recovering the abutment requires the extension data of [F2]. [step 1.1, step 1.2, step 1.3] ∎

## Source notes

Compare [Davis–Kirk](https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf), §9.1, printed pp. 237–246, for the associated graded filtration of the abutment and the resulting extension problem, and [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1, printed pp. 87–90, for the extension problem.
