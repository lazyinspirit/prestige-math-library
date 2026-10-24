---
id: def-finite-dimensional-lie-algebra
kind: definition
title: Finite-dimensional Lie algebra
status: published
origin: pipeline
deps: ["def-vector-space", "def-dimension"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Introduction §1, printed pages 4–5
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Definition 3.17, printed page 33
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $\mathbb F$ be either $\mathbb R$ or $\mathbb C$. A
**finite-dimensional Lie algebra over $\mathbb F$** is a finite-dimensional
$\mathbb F$-vector space $\mathfrak g$ together with an $\mathbb F$-bilinear
map

$$[\ ,\ ]:\mathfrak g\times\mathfrak g\longrightarrow\mathfrak g$$

such that, for all $X,Y,Z\in\mathfrak g$,

$$[X,X]=0$$

and

$$[X,[Y,Z]]+[Y,[Z,X]]+[Z,[X,Y]]=0.$$

The first identity is **alternation** and the second is the **Jacobi
identity**. Over $\mathbb R$ or $\mathbb C$, alternation is equivalent to
skew-symmetry. Indeed, bilinearity and alternation give
$0=[X+Y,X+Y]=[X,Y]+[Y,X]$, while skew-symmetry gives
$2[X,X]=0$ and hence $[X,X]=0$ because both fields have characteristic zero.
For a complex Lie algebra the bracket is required to be complex-bilinear, not
merely real-bilinear.

The definition permits the zero bracket. The zero vector space, with its
unique bracket, is a zero-dimensional Lie algebra. On a one-dimensional space,
every alternating bilinear bracket is zero: any two vectors are scalar
multiples of one vector and bilinearity reduces their bracket to $[X,X]=0$.
A vector space is nonempty because it contains zero. No basis is selected by
asserting finite-dimensionality, so the definition is choice-free. It is
purely algebraic and has no metric, nondegeneracy, manifold-boundary, or
endpoint condition.
