---
id: def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient
kind: definition
title: "Equivalence of group extensions with fixed kernel and fixed quotient"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-split-extension-of-groups, def-group-isomorphism-and-automorphism]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
---

## Definition

Fix groups $N$ and $Q$. Two extensions of $Q$ by $N$,

$$1\to N\xrightarrow{i_1}E_1\xrightarrow{\pi_1}Q\to1,\qquad 1\to N\xrightarrow{i_2}E_2\xrightarrow{\pi_2}Q\to1,$$

are **equivalent with fixed kernel and fixed quotient** when there is a group
isomorphism ([[def-group-isomorphism-and-automorphism]])
$\varphi:E_1\to E_2$ such that

$$\varphi\circ i_1=i_2,\qquad \pi_2\circ\varphi=\pi_1.$$

Thus the middle groups may change, but the identified copies of $N$ and $Q$
are held fixed. In the language of [[def-split-extension-of-groups]], this is
the isomorphism relation on short exact sequences that preserves the displayed
kernel and quotient identifications.
