---
id: def-ascending-hnn-extension
kind: definition
title: "Ascending HNN extensions of injective endomorphisms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-homomorphism, def-hnn-extension-and-stable-letter, thm-group-homomorphism-injective-iff-trivial-kernel]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Definition

Let $\phi:A\to A$ be an injective endomorphism of a group $A$
([[def-group-homomorphism]]). By
[[thm-group-homomorphism-injective-iff-trivial-kernel]], injectivity means that
$\phi$ identifies $A$ with the subgroup $\phi(A)\le A$.

The **ascending HNN extension** of $\phi$ is the HNN extension

$$A\ast_\phi=\left\langle A,t \,\middle|\, tat^{-1}=\phi(a)\text{ for every }a\in A\right\rangle,$$

that is, the case in which the negative associated subgroup is all of $A$ and
the positive associated subgroup is the image $\phi(A)$.
