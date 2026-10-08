---
id: def-lie-bialgebra-and-root-graded-manin-triple
kind: definition
title: "Lie bialgebras, degreewise duality, and root-graded Manin triples"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-exterior-algebra-of-a-vector-space
  - def-field
  - def-lie-algebra-over-a-field
  - def-ring-characteristic
aliases: []
dependency_level: 0
verification:
  precheck: n/a
sources:
  references:
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 10, Definition 10.1.1.1, printed p. 228: Lie bialgebra axioms; §10.4.1.4–10.4.1.8, printed pp. 243–244: Drinfeld double, invariant pairing, and the two dual bialgebra structures; §10.4.2.1–10.4.2.2, printed pp. 244–245, and Exercise 10(c), printed p. 252: Borel example and its double."
pipeline_run: frontier-43-complex-representation-15
---

## Definition

Let $k$ be a field of characteristic $0$. A **Lie bialgebra** is a Lie algebra
$\mathfrak a$ over $k$ together with a linear map
$\delta_{\mathfrak a}:\mathfrak a\to\Lambda^2\mathfrak a$ such that

$$\operatorname{Alt}(\delta_{\mathfrak a}\otimes\operatorname{id})\delta_{\mathfrak a}=0$$

and $\delta_{\mathfrak a}([x,y])=[x,\delta_{\mathfrak a}(y)]-[y,\delta_{\mathfrak a}(x)]$ for all $x,y\in\mathfrak a$. The bracket action on $\Lambda^2\mathfrak a$ is
$[x,u\wedge v]=[x,u]\wedge v+u\wedge[x,v]$.

Suppose $\mathfrak a=\bigoplus_{\alpha\in Q}\mathfrak a_\alpha$ and
$\mathfrak c=\bigoplus_{\alpha\in Q}\mathfrak c_\alpha$ are $Q$-graded vector
spaces with finite-dimensional graded pieces, and for each $\alpha$ only
finitely many pairs of nonzero graded pieces have degrees summing to $\alpha$.
A pairing between them is
**degreewise perfect** if $\mathfrak a_\alpha$ pairs perfectly with
$\mathfrak c_{-\alpha}$ and all other degree pairs are orthogonal. It then
identifies $\mathfrak c$ with the restricted graded dual
$\mathfrak a^{\mathrm{gr}\prime}:=\bigoplus_{\alpha\in Q}\mathfrak a_\alpha^*$.
The induced pairing on exterior powers is the determinant pairing:
$\langle x_1\wedge\cdots\wedge x_m,y_1\wedge\cdots\wedge y_m\rangle=\det(\langle x_i,y_j\rangle)_{i,j=1}^m$.

Two such Lie bialgebras are **dual** when these pairings are degreewise
perfect and their cobrackets are transposes of the opposite brackets:
$\langle\delta_{\mathfrak a}(x),y\wedge z\rangle=\langle x,[y,z]\rangle$
and
$\langle x\wedge x',\delta_{\mathfrak c}(y)\rangle=\langle[x,x'],y\rangle$.
All pairings are interpreted degree by degree; finite-dimensionality and
finite decompositions of each degree make the transposes ordinary elements of
the exterior squares rather than formal infinite sums.

A **root-graded Manin triple** is a $Q$-graded Lie algebra
$\mathfrak d=\bigoplus_{\alpha\in Q}\mathfrak d_\alpha$ with finite-dimensional
graded pieces, a symmetric invariant bilinear form $B$ pairing
$\mathfrak d_\alpha$ perfectly with $\mathfrak d_{-\alpha}$, and graded Lie
subalgebras $\mathfrak d_+$ and $\mathfrak d_-$ such that
$\mathfrak d=\mathfrak d_+\oplus\mathfrak d_-$ as a vector space and
$B(\mathfrak d_+,\mathfrak d_+)=B(\mathfrak d_-,\mathfrak d_-)=0$. The grading
is locally finite in the sense specified above, so the cross pairing is
degreewise perfect. The finite-dimensional Manin-triple definition is the
special case with finitely many nonzero graded pieces.
