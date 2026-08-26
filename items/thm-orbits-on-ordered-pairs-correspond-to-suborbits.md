---
id: thm-orbits-on-ordered-pairs-correspond-to-suborbits
kind: theorem
title: "Orbits on ordered pairs correspond to suborbits"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-action, def-rank-suborbits-and-subdegrees-of-a-transitive-action]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Statement

Let $G$ act transitively on $\Omega$, and fix $\alpha \in \Omega$. Then the
assignment
$$G \cdot (\alpha,\beta) \longmapsto G_\alpha \cdot \beta$$
is a bijection from the $G$-orbits on $\Omega \times \Omega$ to the suborbits
of the action at $\alpha$.

## Facts & Assumptions

**Given:** A transitive action of $G$ on $\Omega$ and a point $\alpha \in \Omega$.

[L1] A suborbit at $\alpha$ is an orbit of the stabilizer $G_\alpha$ on $\Omega$ ([[def-rank-suborbits-and-subdegrees-of-a-transitive-action]]).

[L2] A transitive action sends any chosen point to any other point by some element of $G$ ([[def-group-action]]).

## Proof

**Proof technique:** direct.

1.1 Every $G$-orbit on $\Omega \times \Omega$ contains some pair $(\alpha,\beta)$: for $(x,y)$ choose $g \in G$ with $g \cdot x = \alpha$ by [L2], and then $(g \cdot x, g \cdot y) = (\alpha, g \cdot y)$. [L2, choose]

1.2 The assignment is well defined. If $(\alpha,\beta_1)$ and $(\alpha,\beta_2)$ lie in the same $G$-orbit, choose $g \in G$ with $g \cdot (\alpha,\beta_1) = (\alpha,\beta_2)$. Then $g \in G_\alpha$, so $\beta_2 = g \cdot \beta_1$ and the two second coordinates lie in the same suborbit. [L1, choose]

1.3 The assignment is surjective because every suborbit has the form $G_\alpha \cdot \beta$, and it is the image of the orbital $G \cdot (\alpha,\beta)$. [L1]

1.4 The assignment is injective. If $G_\alpha \cdot \beta_1 = G_\alpha \cdot \beta_2$, choose $g \in G_\alpha$ with $g \cdot \beta_1 = \beta_2$. Then $g \cdot (\alpha,\beta_1) = (\alpha,\beta_2)$, so the two pairs lie in the same $G$-orbit. [L1, choose]

2.1 Steps 1.2, 1.3, and 1.4 show that orbital classes on ordered pairs correspond bijectively to suborbits at $\alpha$. [step 1.2, step 1.3, step 1.4] ∎
