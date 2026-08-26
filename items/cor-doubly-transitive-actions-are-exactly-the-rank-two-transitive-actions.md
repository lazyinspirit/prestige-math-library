---
id: cor-doubly-transitive-actions-are-exactly-the-rank-two-transitive-actions
kind: corollary
title: "A transitive action on more than one point is doubly transitive exactly when it has rank two"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-k-transitive-and-k-homogeneous-actions, def-rank-suborbits-and-subdegrees-of-a-transitive-action, thm-orbits-on-ordered-pairs-correspond-to-suborbits]
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

A transitive action on more than one point is doubly transitive if and only if it has rank two.

## Facts & Assumptions

**Given:** A transitive action of $G$ on $\Omega$ with $|\Omega| > 1$ and a point $\alpha \in \Omega$.

[L1] A transitive action has rank two when the stabilizer $G_\alpha$ has exactly two orbits on $\Omega$ ([[def-rank-suborbits-and-subdegrees-of-a-transitive-action]]).

[L2] A $2$-transitive action sends any ordered pair of distinct points to any other such pair ([[def-k-transitive-and-k-homogeneous-actions]]).

[L3] The suborbits at $\alpha$ correspond to the $G$-orbits on ordered pairs through $(\alpha,\beta)$ ([[thm-orbits-on-ordered-pairs-correspond-to-suborbits]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, suppose the action is doubly transitive. Then every $\beta \ne \alpha$ can be sent to every other $\gamma \ne \alpha$ by some element fixing $\alpha$, because [L2] applies to the ordered pairs $(\alpha,\beta)$ and $(\alpha,\gamma)$. Since $|\Omega| > 1$, the complement $\Omega \setminus \{\alpha\}$ is nonempty, so the two $G_\alpha$-orbits are exactly $\{\alpha\}$ and $\Omega \setminus \{\alpha\}$. Hence the rank is two by [L1]. [L1, L2, given]

1.2 For the converse direction, suppose the rank is two. Then [L1] says the only $G_\alpha$-orbits are $\{\alpha\}$ and $\Omega \setminus \{\alpha\}$, so $G_\alpha$ is transitive on the complement of $\alpha$. Given ordered pairs $(x,y)$ and $(x',y')$ with $x \ne y$ and $x' \ne y'$, choose $g \in G$ with $g \cdot x = x'$ by transitivity. The stabilizer satisfies $G_{x'} = gG_xg^{-1}$, and because the action is transitive the rank-two hypothesis at $\alpha$ implies the same two-suborbit description at $x$. Hence $G_{x'}$ is transitive on $\Omega \setminus \{x'\}$, so some $h \in G_{x'}$ sends $g \cdot y$ to $y'$. Then $hg$ sends $(x,y)$ to $(x',y')$. Therefore the action is doubly transitive by [L2]. [L1, L2, L3]

2.1 The two directions of steps 1.1 and 1.2 prove the equivalence. [step 1.1, step 1.2] ∎
