---
page: compact-self-adjoint-hilbert-schmidt-and-trace-class-operators
title: Compact Self Adjoint Hilbert Schmidt and Trace Class Operators
status: draft
items: [lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form, lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign, lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal, lem-orthogonal-complement-of-an-eigenspace-is-invariant, thm-spectral-theorem-for-compact-self-adjoint-operators, cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator, lem-positive-square-root-of-a-compact-positive-operator, def-absolute-value-and-singular-values-of-a-compact-operator, thm-singular-value-decomposition-for-compact-operators, lem-singular-values-equal-approximation-numbers, cor-compact-operator-iff-approximation-numbers-tend-to-zero, cor-finite-rank-operators-are-norm-dense-in-compact-hilbert-space-operators, thm-hilbert-schmidt-operators-form-a-two-sided-ideal, def-trace-class-operator, thm-trace-class-iff-product-of-two-hilbert-schmidt-operators, lem-nuclear-series-characterizes-trace-norm, thm-trace-class-is-a-two-sided-banach-operator-ideal, def-trace-of-a-trace-class-operator, thm-trace-is-absolutely-convergent-and-basis-independent, thm-cyclicity-of-the-trace, thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]
examples: []
---

The page begins with the quantitative core of self-adjoint operator theory: the
operator norm is the supremum of its quadratic form $\|T\|=\sup_{\|x\|=1}|\langle Tx,x\rangle|$,
proved over both scalar fields by a rotation and rescaling polarisation bound;
for a nonzero compact self-adjoint operator that supremum is attained up to sign
as an eigenvalue, using only countable choice for the approximate maximisers and
the choice-free equivalence of compactness with sequential compactness in metric
spaces. Eigenvalues of a self-adjoint operator are real, eigenspaces for
distinct eigenvalues are orthogonal, and the orthogonal complement of an
eigenspace is again a closed invariant subspace on which the restriction is
self-adjoint.

The spectral theorem for compact self-adjoint operators then assembles the
theory: nonzero eigenvalues form a finite or countable set of reals, have finite
multiplicity, and can accumulate only at $0$; the closed span of their
eigenspaces is $(\ker T)^\perp=\overline{\operatorname{ran}T}$; the operator is
the norm limit of its finite spectral partial sums $Tx=\sum_{\lambda\ne0}\lambda P_\lambda x$;
and on a complex Hilbert space the nonzero spectrum is exactly the set of
nonzero eigenvalues, obtained through an explicit bounded inverse off the
eigenvalue set. A Hilbert basis of $\ker T$ is never selected, and adjoining one
to orthonormal bases of the nonzero eigenspaces gives the orthonormal eigenbasis
corollary under full AC. Uniqueness of the compact positive square root of a
compact self-adjoint positive operator follows from its spectral expansion,
including uniqueness among all compact positive square roots via the
symmetric/skew decomposition of a root.

From the square root the page builds the absolute value $|T|=(T^*T)^{1/2}$ and
the zero-padded singular-value sequence, its singular-value decomposition
$Tx=\sum_js_j\langle x,e_j\rangle f_j$ with orthonormal systems indexed exactly
by the positive singular values and the partial isometry $U$ satisfying
$T=U|T|$, the identification of singular values with approximation numbers
$a_n(T)=\inf_{\operatorname{rank}F<n}\|T-F\|$, the resulting compactness
criterion $T$ compact $\iff a_n(T)\to0$, and the operator-norm density of
finite-rank operators in the compact operators with error the next singular
value.

The Hilbert–Schmidt theory is imported from the earlier square-kernel pair and
completed here by the two-sided ideal theorem: with bases supplied as data the
Hilbert–Schmidt operators form a vector space closed under adjoints, and
$\|ATB\|_{HS}\le\|A\|\|T\|_{HS}\|B\|$. The trace-class chain is then developed
in its own right: trace class is $\sum_ns_n(T)<+\infty$ with trace norm
$\|T\|_1=\sum_ns_n(T)$; products of two Hilbert–Schmidt operators are trace
class and every trace-class operator factors through two Hilbert–Schmidt
operators attaining the trace norm; the nuclear series
$T=\sum_j\langle\cdot,u_j\rangle v_j$, $\sum_j\|u_j\|\|v_j\|<\infty$
characterises the trace class and computes $\|T\|_1$ as the infimum of nuclear
sums; trace-class operators form a two-sided Banach ideal. The trace itself is
defined first relative to a supplied Hilbert basis by the absolutely convergent
sum $\operatorname{tr}_E(T)=\sum_{e\in E}\langle Te,e\rangle$, then shown to be
a single basis-independent scalar equal to $\sum_j\langle v_j,u_j\rangle$ for
every nuclear representation, using a deterministically constructed separable
support Hilbert space rather than a basis of the ambient space; cyclicity
$\operatorname{tr}(ST)=\operatorname{tr}(TS)$ follows by rank-one computation
and trace-norm density, and for self-adjoint positive operators the trace is the
eigenvalue sum $\operatorname{tr}(T)=\sum_n\lambda_n=\|T\|_1$. General Lidskii
theory is deliberately not claimed; it belongs to the later
Fredholm-determinant pair.
