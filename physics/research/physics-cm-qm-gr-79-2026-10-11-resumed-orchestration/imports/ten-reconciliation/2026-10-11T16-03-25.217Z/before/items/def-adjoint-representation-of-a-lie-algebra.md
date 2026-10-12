---
id: def-adjoint-representation-of-a-lie-algebra
kind: definition
title: Adjoint representation of a Lie algebra
status: published
origin: pipeline
deps: ["def-finite-dimensional-lie-algebra", "def-vector-space-of-linear-maps"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Definition and Jacobi reformulation (1.1), printed page 24
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Theorem 3.16 and equivalent last identity in (3.6), printed page 33
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $\mathfrak g$ be a finite-dimensional Lie algebra over
$\mathbb F\in\{\mathbb R,\mathbb C\}$. For $X\in\mathfrak g$, its **adjoint
endomorphism** is

$$\operatorname{ad}_X\in\operatorname{End}_{\mathbb F}(\mathfrak g),\qquad \operatorname{ad}_X(Y)=[X,Y].$$

Bilinearity of the bracket makes $\operatorname{ad}_X$ linear in $Y$ and
makes the assignment $X\mapsto\operatorname{ad}_X$ linear in $X$. Moreover,
the Jacobi identity in [[def-finite-dimensional-lie-algebra]] gives, for every
$Z\in\mathfrak g$,

$$[\operatorname{ad}_X,\operatorname{ad}_Y](Z)=[X,[Y,Z]]-[Y,[X,Z]]=\bigl[\,[X,Y],Z\bigr]=\operatorname{ad}_{[X,Y]}(Z).$$

Consequently

$$\operatorname{ad}:\mathfrak g\longrightarrow\mathfrak{gl}(\mathfrak g),\qquad X\longmapsto\operatorname{ad}_X,$$

is a Lie-algebra homomorphism into the commutator Lie algebra of endomorphisms,
where here a Lie-algebra homomorphism means a linear map that preserves the
bracket. A linear homomorphism from a Lie algebra into the commutator Lie
algebra of endomorphisms is called a **representation**, and this particular
one is the **adjoint representation of $\mathfrak g$**. The later general
definition of Lie-algebra representations uses exactly this convention but is
not a prerequisite for the construction above.

For the zero algebra this is the unique map between zero spaces. Every
one-dimensional Lie algebra over the stated fields has zero bracket, so its
adjoint representation is zero. Degenerate adjoint maps are allowed; no
faithfulness is asserted. The construction is algebraic, boundaryless and
endpoint-free, uses no metric or choice principle, and contains no
biconditional.
