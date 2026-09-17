---
id: def-riemannian-symmetric-pair-of-noncompact-type
kind: definition
title: Riemannian symmetric pair of noncompact type
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cartan-decomposition-of-a-real-semisimple-lie-algebra, def-cartan-involution-of-a-real-semisimple-lie-algebra, thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group, def-homogeneous-space-of-a-lie-group]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §3, discussion following Theorem 6.31, printed pp. 361-368; Chapter IV §§3-4"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 43, §§43.1-43.6, printed pp. 217-222"
landmark: false
---

## Definition

A **Riemannian symmetric pair of noncompact type** is a pair $(G,K)$ together
with a global Cartan involution $\Theta$ of $G$, in the following sense.

$G$ is a connected real semisimple Lie group with finite center and Lie algebra
$\mathfrak g_0$, $\Theta$ is a global Cartan involution of $G$
([[def-cartan-involution-of-a-real-semisimple-lie-algebra]],
[[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]),
$K=G^\Theta$, and $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ is the
Cartan decomposition attached to $\theta_*=d\Theta_e$
([[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]). By
[[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]
the subgroup $K$ is closed with Lie algebra $\mathfrak k_0$ and compact, so
$K$ is a closed subgroup of $G$ and the coset space $G/K$ is a homogeneous
$G$-space ([[def-homogeneous-space-of-a-lie-group]]); the pair is of
**noncompact type** when, in addition, $\mathfrak g_0$ has no nonzero compact ideal
(equivalently, when $\mathfrak p_0$ is not contained in any proper ideal of
$\mathfrak g_0$, so that no compact factor of $G$ is carried along); this is the
normalisation used below whenever a statement speaks of a symmetric pair of
noncompact type, and without it the same construction applies after splitting
off the compact ideals.

On the Lie-algebra level the same object is the pair $(\mathfrak g_0,\theta_*)$
consisting of a real semisimple Lie algebra $\mathfrak g_0$ and a Cartan
involution $\theta_*$; the corresponding symmetric space is $G/K$ with the
$G$-invariant Riemannian metric whose value at the origin $eK$ is the positive
definite form $B_{\theta_*}$ restricted to
$\mathfrak p_0\cong T_{eK}(G/K)$. The metric, its invariance and its curvature
are constructed in
[[prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k]],
and the identification of $\mathfrak p_0$ with $G/K$ is
[[thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space]].

The hypothesis that $\mathfrak g_0$ has **no compact ideal** is a normalisation
used in the literature: $\mathfrak g_0$ is the direct sum of its compact and
noncompact simple ideals, the compact ideals contribute a compact factor to
$G$ that acts trivially on the symmetric space, and one removes them so that
$\mathfrak p_0$ determines $\mathfrak g_0$ up to a compact summand.
