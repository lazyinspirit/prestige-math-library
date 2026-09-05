---
id: def-twisted-product-extension-from-a-two-cocycle
kind: definition
title: "Twisted product extension from a two-cocycle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-normalized-two-cocycle-and-two-coboundary, def-extension-inducing-a-prescribed-abelian-kernel-action]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Definition

Given a normalized two-cocycle $f\in Z^2(G,M)$ in the sense of
[[def-normalized-two-cocycle-and-two-coboundary]], define a multiplication on
$M\times G$ by

$$
(m,g)(n,h):=(m+g\cdot n+f(g,h),gh).
$$

The cocycle identity gives associativity, normalization gives the identity
$(0,1)$, and the resulting group is denoted $M\times_f G$ and called the
**twisted product** defined by $f$.

The maps

$$i(m)=(m,1),\qquad \pi(m,g)=g$$

then give an extension

$$1\to M\xrightarrow{i}M\times_f G\xrightarrow{\pi}G\to1$$

inducing the original $G$-action on $M$.
