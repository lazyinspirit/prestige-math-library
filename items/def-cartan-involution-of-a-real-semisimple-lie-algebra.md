---
id: def-cartan-involution-of-a-real-semisimple-lie-algebra
kind: definition
title: Cartan involution of a real semisimple Lie algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-killing-form-of-a-finite-dimensional-lie-algebra]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §2, printed pp. 357-364"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 43, §43.1, printed pp. 217-218"
landmark: false
---

## Definition

Let $\mathfrak g_0$ be a finite-dimensional real semisimple Lie algebra with
Killing form $B$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]]). A
**Cartan involution** of $\mathfrak g_0$ is a Lie-algebra automorphism
$\theta\colon\mathfrak g_0\to\mathfrak g_0$ with $\theta^2=\mathrm{id}$ for which
the symmetric bilinear form

$$B_\theta(X,Y):=-B(X,\theta Y)$$

is positive definite on $\mathfrak g_0$. The associated **Cartan decomposition**
is the eigenspace decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$
into the $+1$- and $-1$-eigenspaces of $\theta$
([[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]). Since
$\theta$ is an involution, $\mathfrak k_0,\mathfrak p_0$ are the fixed and
anti-fixed subspaces respectively, and $B_\theta$ being positive definite makes
the decomposition orthogonal for $B$ with $B$ negative definite on
$\mathfrak k_0$ and positive definite on $\mathfrak p_0$
([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]).
Existence of Cartan involutions is proved in
[[thm-existence-of-a-cartan-involution]].
