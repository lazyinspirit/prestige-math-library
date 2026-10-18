---
id: def-qc-tqc-unitary-fusion-category
kind: definition
title: Unitary fusion category
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-fusion-and-multifusion-category, def-real-and-complex-inner-product-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§§3.2–3.4, PDF pp. 4–13: dagger categories, unitary endomorphism algebras, and unitary monoidal/fusion categories."
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, author final text"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§4.1, Definition 4.1.1, printed p. 65: finite semisimple rigid tensor categories."
---

## Definition

Let $\mathcal C$ be a fusion category over $\mathbb C$ in the sense of
[[def-fusion-and-multifusion-category]]. A **dagger structure** assigns to every
morphism $f:X\to Y$ a morphism $f^\dagger:Y\to X$, conjugate-linearly, with
$(g\circ f)^\dagger=f^\dagger\circ g^\dagger$ and
$(f^\dagger)^\dagger=f$. A **unitary fusion category** is such a fusion
category equipped with this dagger so that every morphism space is a
finite-dimensional normed space, composition is submultiplicative,
$\|f^\dagger\|=\|f\|$, and $\|f^\dagger f\|=\|f\|^2$. Thus each
$\operatorname{End}_{\mathcal C}(X)$ is a finite-dimensional $C^*$-algebra.
Positive endomorphisms are the elements of its usual $C^*$-positive cone
(equivalently $u^\dagger u$ for an endomorphism $u$); in particular, if $c$ is
simple and $\operatorname{End}(c)=\mathbb C\operatorname{id}_c$, then
$\lambda\operatorname{id}_c$ is positive exactly when $\lambda\ge0$. For any
morphism $f:X\to Y$, $f^\dagger f$ is positive in $\operatorname{End}(X)$;
also require $f^\dagger f=0$ to imply $f=0$. Semisimple direct-sum
decompositions can be chosen orthogonally:
their inclusions $i_j$ satisfy $i_j^\dagger i_k=0$ for $j\ne k$,
$i_j^\dagger i_j=\operatorname{id}$, and $\sum_j i_j i_j^\dagger=\operatorname{id}$.
Tensor product preserves daggers:
$(f\otimes g)^\dagger=f^\dagger\otimes g^\dagger$. Its associator and unit
constraints are **unitary**, meaning $\alpha^\dagger=\alpha^{-1}$,
$\lambda^\dagger=\lambda^{-1}$, and $\rho^\dagger=\rho^{-1}$.

The underlying fusion category is rigid, so its evaluation and coevaluation
morphisms satisfy the duality zig-zag identities. Those morphisms are not
required to be unitary isomorphisms. A braiding is additional structure; when
it is specified as a **unitary braiding**, each component satisfies
$c_{X,Y}^\dagger=c_{X,Y}^{-1}$. Positivity and unitarity are extra structure,
not consequences of the fusion rules or of the braid relations alone.

