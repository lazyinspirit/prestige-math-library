---
id: def-evaluation-of-an-invariant-polynomial-on-curvature
kind: definition
title: Evaluation of an invariant polynomial on curvature
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-invariant-polynomial-on-a-matrix-lie-algebra
  - def-complex-linear-and-compatible-bundle-connections
  - prop-vector-bundle-curvature-is-an-endomorphism-valued-two-form
  - thm-curvature-two-form-structure-equation
  - lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary
justified_by: []
aliases: []
landmark: false
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Raoul Bott, Lectures on Characteristic Classes and Foliations
      url: https://poisson.phc.dm.unipi.it/~lmigliorini/secondo_magistrale/gauge_theory/bott_foliations.pdf
      locator: §5.1, invariant curvature evaluation and gluing, printed pp. 27–28 (gluing on p. 28; PDF p. 30)
    - title: John Milnor and James Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: Appendix C, printed pp. 289–312
verification:
  precheck: pass
---

## Definition

Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold,
possibly with boundary. Let $\mathbb F,\mathbb K\in\{\mathbb R,\mathbb C\}$,
let $G$ be a real or complex matrix Lie group in
$\operatorname{GL}_r(\mathbb F)$, and let $\mathfrak g$ be its Lie algebra.
For a smooth rank-$r$ $\mathbb F$-vector bundle $E\to M$, a **$G$-frame
atlas** is a supplied open cover with local frames $e_\alpha$ whose transition
matrices $A_{\beta\alpha}$, defined by $e_\beta=e_\alpha A_{\beta\alpha}$,
take values in $G$. This is the local-frame description of a reduction of
the frame group to $G$. If $\mathbb F=\mathbb C$, a connection means a
complex connection as in
[[def-complex-linear-and-compatible-bundle-connections]]; for
$\mathbb F=\mathbb R$ it means an ordinary smooth bundle connection. A
connection is **compatible with this reduction** when its connection matrix
$\omega_\alpha$ in every supplied $G$-frame is $\mathfrak g$-valued. In
the convention of
[[thm-curvature-two-form-structure-equation]], its curvature matrix is
$$
\Omega_\alpha=d\omega_\alpha+\omega_\alpha\wedge\omega_\alpha.
$$
It is $\mathfrak g$-valued: for tangent vectors $X,Y$, the second term
evaluates to $[\omega_\alpha(X),\omega_\alpha(Y)]$, and both this bracket
and $d\omega_\alpha(X,Y)$ lie in $\mathfrak g$.

Let $P:\mathfrak g\to\mathbb K$ be a homogeneous degree-$k$
$G$-invariant polynomial, with symmetric multilinear polarization
$P_k$ as in [[def-invariant-polynomial-on-a-matrix-lie-algebra]]. For
$k\ge1$, define its **evaluation on curvature** in a supplied $G$-frame by
the alternating $2k$-form
$$
P_k(\Omega_\alpha,\ldots,\Omega_\alpha) =\sum_{a_1,\ldots,a_k} P_k(T_{a_1},\ldots,T_{a_k})\, \Omega_\alpha^{a_1}\wedge\cdots\wedge\Omega_\alpha^{a_k},
$$
where $(T_a)$ is any basis of $\mathfrak g$ and
$\Omega_\alpha=\sum_a T_a\otimes\Omega_\alpha^a$. The right side is the
multilinear extension of $P_k$ followed by exterior multiplication, so it is
independent of the chosen basis or tensor decomposition. Equivalently, for
$v_1,\ldots,v_{2k}\in T_xM$,
$$
\bigl(P_k(\Omega_\alpha^k)\bigr)_x(v_1,\ldots,v_{2k}) =\frac{1}{(2!)^k} \sum_{\sigma\in S_{2k}}\operatorname{sgn}(\sigma)\, P_k\!\left( \Omega_\alpha(v_{\sigma(1)},v_{\sigma(2)}),\ldots, \Omega_\alpha(v_{\sigma(2k-1)},v_{\sigma(2k)}) \right).
$$
For $k=0$, set $P_0(\Omega_\alpha^0)=P_0$, the corresponding constant
$\mathbb K$-valued $0$-form. A finite sum of homogeneous invariant
polynomials is evaluated degree by degree and the resulting forms are added.

These local forms agree on overlaps. Indeed, [[prop-vector-bundle-curvature-is-an-endomorphism-valued-two-form]]
makes the curvature a global $\operatorname{End}(E)$-valued $2$-form. To
see its frame transformation, if a fibre vector has coordinate columns
$x_\alpha=A_{\beta\alpha}x_\beta$ and an endomorphism has matrices
$T_\alpha,T_\beta$, then $T_\beta=A_{\beta\alpha}^{-1}T_\alpha
A_{\beta\alpha}$. Applying this pointwise to curvature gives
$\Omega_\beta=A_{\beta\alpha}^{-1}\Omega_\alpha
A_{\beta\alpha}$. Since $A_{\beta\alpha}\in G$, simultaneous
$G$-invariance of $P_k$ gives
$$
P_k(\Omega_\beta,\ldots,\Omega_\beta) =P_k(\Omega_\alpha,\ldots,\Omega_\alpha).
$$
Thus the local evaluations define a global $\mathbb K$-valued $2k$-form.
For $\mathbb K=\mathbb C$, this means a complex-valued form, obtained by
complexifying the real form convention; the same local formulas are smooth up
to boundary charts by
[[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]].

## Remarks

All scalar $2$-form coefficients commute under exterior multiplication
because their degree is even. Matrix factors inside polynomial expressions,
including traces and determinant coefficients, retain the order prescribed by
the matrix polynomial.

The reduction and compatible connection are part of the input when $P$ is
invariant only under $G$. For a polynomial invariant under the full general
linear group, the construction may use the full frame group. The in-scope
applications use $\operatorname{GL}_r(\mathbb C)$-invariant polynomials for
Chern forms, their complexified analogues for Pontryagin forms, and the
Pfaffian on $\mathfrak{so}(2m)$ with an oriented orthonormal frame for Euler
forms.

The local $G$-frames and compatible connection are supplied data. The
definition makes no simultaneous global choice of frames, and its construction
uses no axiom of choice.
