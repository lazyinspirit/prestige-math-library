---
id: def-lie-bialgebra-and-root-graded-manin-triple
kind: definition
title: "Lie bialgebras, degreewise duality, and root-graded Manin triples"
status: published
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
  audited: "2026-10-08"
  precheck: n/a
sources:
  references:
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 10, Definition 10.1.1.1, printed p. 228: Lie bialgebra axioms; §10.4.1.4–10.4.1.8, printed pp. 242–244: Drinfeld double, invariant pairing, and the two dual bialgebra structures; §10.4.2.1–10.4.2.2, printed pp. 244–245, and Exercise 10(c), printed p. 251: Borel example and its double."
pipeline_run: frontier-43-complex-representation-15
---

## Definition

Let $k$ be a field of characteristic $0$. A **Lie bialgebra** is a Lie algebra
$\mathfrak a$ over $k$ together with a linear map
$\delta_{\mathfrak a}:\mathfrak a\to\Lambda^2\mathfrak a$ such that

$$\operatorname{Alt}(\delta_{\mathfrak a}\otimes\operatorname{id})\delta_{\mathfrak a}=0$$

and $\delta_{\mathfrak a}([x,y])=[x,\delta_{\mathfrak a}(y)]-[y,\delta_{\mathfrak a}(x)]$ for all $x,y\in\mathfrak a$. The bracket action on $\Lambda^2\mathfrak a$ is
$[x,u\wedge v]=[x,u]\wedge v+u\wedge[x,v]$.

Let $Q$ be an additive abelian group. Suppose $\mathfrak a=\bigoplus_{\alpha\in Q}\mathfrak a_\alpha$ and
$\mathfrak c=\bigoplus_{\alpha\in Q}\mathfrak c_\alpha$ are $Q$-graded vector
spaces with finite-dimensional graded pieces, and suppose that, within each space separately, only finitely many pairs of nonzero graded pieces have degrees summing to any fixed degree.
A pairing between them is
**degreewise perfect** if $\mathfrak a_\alpha$ pairs perfectly with
$\mathfrak c_{-\alpha}$ and all other degree pairs are orthogonal. It then
identifies $\mathfrak c$ with the restricted graded dual
$\mathfrak a^{\mathrm{gr}\prime}:=\bigoplus_{\alpha\in Q}\mathfrak a_\alpha^*$.
The induced pairing on exterior powers is the determinant pairing:
$\langle x_1\wedge\cdots\wedge x_m,y_1\wedge\cdots\wedge y_m\rangle=\det(\langle x_i,y_j\rangle)_{i,j=1}^m$.

For the Lie bialgebra duality below, require both brackets to preserve degree:
$[\mathfrak a_\alpha,\mathfrak a_\beta]\subseteq\mathfrak a_{\alpha+\beta}$ and
$[\mathfrak c_\alpha,\mathfrak c_\beta]\subseteq\mathfrak c_{\alpha+\beta}$.
Two such Lie bialgebras are **dual** when these pairings are degreewise
perfect and their cobrackets are transposes of the opposite brackets:
$\langle\delta_{\mathfrak a}(x),y\wedge z\rangle=\langle x,[y,z]\rangle$
and
$\langle x\wedge x',\delta_{\mathfrak c}(y)\rangle=\langle[x,x'],y\rangle$.
For $x\in\mathfrak a_\gamma$, degree preservation and orthogonality make
$\langle x,[\mathfrak c_\alpha,\mathfrak c_\beta]\rangle$ vanish unless
$\alpha+\beta=-\gamma$. There are only finitely many such nonzero pairs,
and their finite-dimensional perfect pairings identify the transpose with a
unique element of $(\Lambda^2\mathfrak a)_\gamma$ under the determinant pairing.
The same argument applies with the two algebras exchanged, and linear extension
handles arbitrary elements. Thus the transposes lie in the ordinary exterior
squares rather than formal infinite sums.

A **root-graded Manin triple** is a $Q$-graded Lie algebra
$\mathfrak d=\bigoplus_{\alpha\in Q}\mathfrak d_\alpha$ with finite-dimensional
graded pieces, a symmetric invariant bilinear form $B$ pairing
$\mathfrak d_\alpha$ perfectly with $\mathfrak d_{-\alpha}$ and satisfying
$B(\mathfrak d_\alpha,\mathfrak d_\beta)=0$ whenever $\alpha+\beta\ne0$, and graded Lie
subalgebras $\mathfrak d_+$ and $\mathfrak d_-$ such that
$\mathfrak d=\mathfrak d_+\oplus\mathfrak d_-$ as a vector space and
$B(\mathfrak d_+,\mathfrak d_+)=B(\mathfrak d_-,\mathfrak d_-)=0$. The cross pairing is degreewise perfect: a vector in $(\mathfrak d_+)_\alpha$ annihilating $(\mathfrak d_-)_{-\alpha}$ also annihilates $(\mathfrak d_+)_{-\alpha}$ by isotropy, so it is zero by perfectness on the double. The same argument applies with the two halves exchanged, and finite dimensionality gives perfectness of the cross pairing. All other degree pairs are orthogonal by the condition on $B$. Require finite degree decompositions within each of $\mathfrak d_+$ and $\mathfrak d_-$ separately, as above; a triple satisfying this requirement is called **locally finite**. No finite-decomposition condition is imposed on the whole double. This permits opposite Borels with infinitely many roots, since each Borel has support in one root cone. The finite-dimensional Manin-triple definition is the
special case with finitely many nonzero graded pieces.
