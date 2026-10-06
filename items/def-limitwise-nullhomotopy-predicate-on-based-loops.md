---
id: def-limitwise-nullhomotopy-predicate-on-based-loops
kind: definition
title: "Limitwise-nullhomotopy predicate on based loops"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-limit-cycle-of-a-leaf-of-a-codimension-one-foliation, def-leaf-of-a-regular-foliation, def-based-loops-and-fundamental-group, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
dependency_level: 7
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a73, printed pp. 9\u201310 (Definition 3.1 and the definition of $\\Pi^j_1(A)$)"
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$. Let $F$ be a transversely oriented
codimension-one foliation, $L$ a leaf, $x\in L$, and $j$ one of its two sides. For a
based loop $f:S^1\to L$ whose class belongs to $N_j(L,x)$, and for a chosen sufficiently
short normal fence on side $j$, define the representative-level predicate $Q_j(f)$ to
hold when every sufficiently small positive normal displacement $f_\epsilon$ is null-
homotopic in its leaf. At this stage $Q_j$ is a predicate on a specified loop and fence;
no representative-independence is part of this definition.


For clarity, a displacement is obtained by starting at a chosen positive point of the base transversal and continuing the loop plaque by plaque through a finite chart subdivision. Within each chart its transverse label is held fixed; the fence specifies the nearby endpoint in that plaque. Since $[f]\in N_j$, the return map is the identity on a sufficiently short interval on side j, so these displacements are closed loops. The quantifier means: there exists ε₀>0 such that every displacement with 0<ε<ε₀ is nullhomotopic in its own leaf. No uniform bound on the filling disks is part of the definition.
