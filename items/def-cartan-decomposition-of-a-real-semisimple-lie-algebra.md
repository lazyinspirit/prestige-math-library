---
id: def-cartan-decomposition-of-a-real-semisimple-lie-algebra
kind: definition
title: Cartan decomposition of a real semisimple Lie algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cartan-involution-of-a-real-semisimple-lie-algebra]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §2, printed pp. 357-364"
landmark: false
---

## Definition

Let $\mathfrak g_0$ be a finite-dimensional real semisimple Lie algebra with a
Cartan involution $\theta$
([[def-cartan-involution-of-a-real-semisimple-lie-algebra]]). The **Cartan
decomposition** attached to $\theta$ is the eigenspace decomposition

$$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0,\qquad \mathfrak k_0=\{X:\theta X=X\},\qquad \mathfrak p_0=\{X:\theta X=-X\},$$

of $\mathfrak g_0$ into the fixed and anti-fixed subspaces of the involution.
Both summands are real subspaces and the sum is direct because an element of
$\mathfrak k_0\cap\mathfrak p_0$ satisfies $X=-X$; every $X$ decomposes as
$X=\tfrac12(X+\theta X)+\tfrac12(X-\theta X)$. The bracket relations and the
signs of the Killing form are established in
[[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]].
