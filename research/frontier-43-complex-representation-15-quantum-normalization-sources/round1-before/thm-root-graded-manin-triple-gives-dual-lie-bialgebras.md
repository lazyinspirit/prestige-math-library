---
id: thm-root-graded-manin-triple-gives-dual-lie-bialgebras
kind: theorem
title: "A root-graded Manin triple gives dual Lie bialgebras"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-exterior-algebra-of-a-vector-space
  - def-field
  - def-lie-algebra-over-a-field
  - def-lie-bialgebra-and-root-graded-manin-triple
  - def-ring-characteristic
aliases: []
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 10, §10.4.1.4–10.4.1.8, printed pp. 243–244: the Drinfeld double bracket is characterized by the two subalgebras and invariant pairing, and carries the two dual Lie bialgebra structures. The proof below checks the root-graded finite-piece version directly."
pipeline_run: frontier-43-complex-representation-15
---

## Statement

Let $k$ be a field of characteristic $0$, and let
$(\mathfrak d,\mathfrak d_+,\mathfrak d_-;B)$ be a locally finite
root-graded Manin triple in the sense of
[[def-lie-bialgebra-and-root-graded-manin-triple]]. Define
$\delta_+:\mathfrak d_+\to\Lambda^2\mathfrak d_+$ and
$\delta_-:\mathfrak d_-\to\Lambda^2\mathfrak d_-$ by transposing the
opposite brackets under the degreewise perfect pairing induced by $B$:

$$\langle\delta_+(x),y\wedge z\rangle=B(x,[y,z]),\qquad\langle u\wedge v,\delta_-(y)\rangle=B([u,v],y).$$

Then these maps are well defined and make $\mathfrak d_+$ and
$\mathfrak d_-$ dual Lie bialgebras.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $0$ and a locally finite
root-graded Manin triple.

[F1] The two complementary isotropic subalgebras have finite-dimensional
graded pieces, a degreewise perfect cross pairing, and only finitely many
degree decompositions in each fixed degree
([[def-lie-bialgebra-and-root-graded-manin-triple]]).

[F2] The wedge pairing is the determinant pairing on exterior powers, and a
Lie bialgebra cobracket is a cocycle satisfying co-Jacobi
([[def-exterior-algebra-of-a-vector-space]],
[[def-lie-bialgebra-and-root-graded-manin-triple]]).

## Proof

**Proof technique:** Transpose the bracket and use the Jacobi identity in the double.

1.1 By [F1], for each homogeneous $x\in\mathfrak d_+$ only finitely many opposite-degree pairs of components of $\mathfrak d_-$ can bracket to a degree paired with $x$. The perfect pairings therefore give a unique finite sum $\delta_+(x)\in\Lambda^2\mathfrak d_+$ satisfying the first transpose identity; the same construction defines $\delta_-$, and both maps are linear and preserve total root degree. [F1, construct]

1.2 Choose dual bases $e_i$ and $f^a$ in the finitely many homogeneous pieces involved in a fixed calculation, and write $[e_i,e_j]=\sum_k c^k_{ij}e_k$ and $[f^a,f^b]=\sum_k d_k^{ab}f^k$. Invariance gives $B([e_i,f^a],f^k)=B(e_i,[f^a,f^k])=d_i^{ak}$ and $B([e_i,f^a],e_k)=B(f^a,[e_k,e_i])=-c^a_{ik}$; since the two subalgebras are isotropic and pair perfectly, these identities determine $[e_i,f^a]=\sum_k(d_i^{ak}e_k-c^a_{ik}f^k)$. These sums are finite by [F1]. [F1, algebra]

2.1 Pair $\operatorname{Alt}(\delta_+\otimes\operatorname{id})\delta_+(x)$ with $y\wedge z\wedge w$ in the opposite subalgebra. By the defining transpose identity, the result is $B(x,[y,[z,w]]+[z,[w,y]]+[w,[y,z]])=0$ by Jacobi in $\mathfrak d_-$. Degreewise perfectness makes the co-Jacobi expression zero; the identical argument with signs exchanged proves co-Jacobi for $\delta_-$. [F1, F2, step 1.1, algebra]

3.1 Jacobi in $\mathfrak d$ for $e_i,e_j,f^a$, paired with $f^b$, gives $\sum_k c^k_{ij}d_k^{ab}=\sum_k(c^a_{ik}d_j^{kb}+c^b_{ik}d_j^{ak}-c^a_{jk}d_i^{kb}-c^b_{jk}d_i^{ak})$. By the transpose definition, this is exactly the coefficient identity for $\delta_+([e_i,e_j])=[e_i,\delta_+(e_j)]-[e_j,\delta_+(e_i)]$. Interchanging $+$ and $-$ and using Jacobi for $e_i,f^a,f^b$ proves the cocycle identity for $\delta_-$. Since the homogeneous bases were arbitrary and the pairings are perfect, both cocycle identities hold for all elements. Together with step 2.1, this proves that the two transposed maps are dual Lie bialgebra structures. [F1, F2, step 1.1, step 1.2, algebra] ∎
