---
id: def-lie-algebra-homomorphism
kind: definition
title: Lie-algebra homomorphism
status: published
origin: pipeline
deps: ["def-finite-dimensional-lie-algebra", "def-linear-map"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Definition 3.17 and following sentence, printed page 33
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $\mathfrak g$ and $\mathfrak h$ be finite-dimensional Lie algebras over the
same field $\mathbb F\in\{\mathbb R,\mathbb C\}$. A **Lie-algebra
homomorphism**

$$\varphi:\mathfrak g\longrightarrow\mathfrak h$$

is an $\mathbb F$-linear map, in the sense of [[def-linear-map]], such that

$$\varphi([X,Y]_{\mathfrak g})=[\varphi(X),\varphi(Y)]_{\mathfrak h}$$

for every $X,Y\in\mathfrak g$. Both linearity and bracket preservation are
requirements. For complex Lie algebras, $\varphi$ must therefore be
complex-linear, not merely real-linear.

The zero brackets allowed by [[def-finite-dimensional-lie-algebra]] are not
required to be nondegenerate. The unique linear map from the zero Lie algebra
to any $\mathfrak h$ is a homomorphism. One-dimensional Lie algebras have zero
bracket, so a linear map between two such algebras preserves the bracket
automatically, while a linear map from an abelian algebra to a nonabelian one
still has to have commuting image.

The source and target are nonempty because they contain zero. The supplied map
is data, and checking the two universal algebraic identities uses no choice.
There is no metric, manifold boundary, interval, or endpoint. This is a
definition with two simultaneous requirements, not a biconditional theorem.
