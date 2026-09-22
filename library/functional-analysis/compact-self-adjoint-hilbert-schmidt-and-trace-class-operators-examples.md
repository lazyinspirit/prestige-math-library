---
page: compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples
title: Compact Self Adjoint Hilbert Schmidt and Trace Class Operators — Examples
status: draft
items: []
examples: [ex-diagonal-schatten-class-criteria-on-ell-two, ex-volterra-operator-is-hilbert-schmidt-and-quasinilpotent, ex-rank-one-operator-adjoint-norm-and-trace, ex-integral-operator-trace-under-a-valid-diagonal-hypothesis, cex-compact-does-not-imply-hilbert-schmidt, cex-hilbert-schmidt-does-not-imply-trace-class, cex-trace-of-products-is-not-cyclic-without-summability, rem-schatten-p-classes]
---

The companion computes the theory on concrete operators. The diagonal operator
$Te_n=d_ne_n$ on $\ell^2$ is treated first: it is bounded with
$\|T\|=\sup_n|d_n|$ exactly when $d\in\ell^\infty$, compact exactly when
$d_n\to0$, Hilbert–Schmidt against the standard basis exactly when
$\sum_n|d_n|^2<+\infty$, and trace class exactly when
$\sum_n|d_n|<+\infty$, in which case $\operatorname{tr}(T)=\sum_nd_n$. The
Volterra operator $Vf(x)=\int_0^xf$ is the second worked case: its kernel is a
square-integrable indicator with $\|V\|_{HS}^2=\tfrac12$, so $V$ is compact, the
iterated-integration formula produces a factorial operator-norm bound that
excludes every nonzero eigenvalue, and Riesz–Schauder then gives
$\sigma(V)=\{0\}$: a compact quasinilpotent operator that is not self-adjoint.
The rank-one operator $x\mapsto\langle x,v\rangle u$ is followed through its
adjoint, its norm $\|u\|\|v\|$, its single singular value and its trace
$\langle u,v\rangle$.

The integral-operator example shows how a diagonal trace formula becomes a
theorem rather than a definition: for a compact metric space with finite regular
Borel measure and a continuous Hermitian positive semidefinite kernel $k$, the
reproducing-kernel space of $k$ is separable, the inclusion $J$ into $L^2$ is
Hilbert–Schmidt, the operator factors as $T_k=JJ^*$, and hence
$\operatorname{tr}(T_k)=\int_Xk(x,x)\,d\mu(x)$; the example also records that an
arbitrary $L^2$-kernel need not determine diagonal values and that continuity without
positivity does not give trace class.

Boundary phenomena are collected as three separating counterexamples and one
orientation remark. The diagonal operators $n^{-1/2}$ and $n^{-1}$ show that
compact does not imply Hilbert–Schmidt and Hilbert–Schmidt does not imply trace
class; the unilateral shift shows that $S^*S=I$ and $SS^*=I-P_0$ can both fail
to be trace class while their difference is rank one with trace $1$, so
cyclicity cannot be extended by subtracting undefined infinite traces. A
closing remark records the Schatten scale $\mathcal S_p$ for orientation only,
identifying $p=1,2,\infty$ with the trace class, Hilbert–Schmidt class and
compact operators, and explicitly refusing interpolation, duality and Hölder
theory as later material.
