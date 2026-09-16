---
id: def-cartan-matrix-of-a-based-root-system
kind: definition
title: Cartan matrix of a based root system
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-coroot-and-dual-root-system, def-positive-system-and-base-of-simple-roots]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §5, the Cartan matrix of a based root system, printed p. 157"
landmark: false
---

## Definition

Let $\Phi\subseteq E$ be a reduced crystallographic root system with base
$\Delta=\{\alpha_1,\dots,\alpha_r\}$
([[def-positive-system-and-base-of-simple-roots]]) and coroots
$\alpha_i^{\vee}=2\alpha_i/(\alpha_i,\alpha_i)$
([[def-coroot-and-dual-root-system]]). The **Cartan matrix** of $\Phi$
relative to $\Delta$ is the $r\times r$ matrix $A=(a_{ij})$ with rows indexed
by coroots,
$$a_{ij}=(\alpha_j,\alpha_i^{\vee})=\frac{2(\alpha_j,\alpha_i)}{(\alpha_i,\alpha_i)} .$$
Thus $a_{ij}$ is the Cartan integer of the ordered pair $(\alpha_j,\alpha_i)$,
that is, the eigenvalue by which $\alpha_j$ is multiplied in the reflection
$s_{\alpha_i}(\alpha_j)=\alpha_j-a_{ij}\alpha_i$. All entries are integers by
the root-system axioms, $a_{ii}=2$ for every $i$, and $a_{ij}\le0$ for
$i\ne j$ ([[prop-distinct-simple-roots-have-nonpositive-inner-product]]).
The Cartan matrix depends on the numbering of the simple roots: renumbering
conjugates it by the corresponding permutation matrix. The indexing
convention here is the row-coroot convention: the entries of row $i$ record
the action of the coroot $\alpha_i^{\vee}$ on the other simple roots.
