---
id: def-complex-linear-and-compatible-bundle-connections
kind: definition
title: Complex-linear and metric-compatible bundle connections
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-connection-on-a-smooth-vector-bundle
  - def-metric-compatible-connection-on-a-riemannian-vector-bundle
  - def-real-and-complex-topological-vector-bundle
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - thm-curvature-two-form-structure-equation
justified_by: []
landmark: false
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: John Milnor and James Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: Appendix C, printed pp. 289–312, complex and metric-compatible connections
    - title: Stefan Haller, The Atiyah–Singer Index Theorem
      url: https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf
      locator: §II.4.1, printed p. 86, connections on complex bundles
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Definition

Let $E\to M$ be a smooth real vector bundle of rank $2r$, where $r\geq0$,
over a smooth manifold that may have boundary. A **smooth complex structure**
on $E$ is a smooth bundle endomorphism $J:E\to E$ with $J^2=-I$. It makes
each fiber a complex vector space by $(a+ib)v=av+bJv$. Equivalently, $E$ has
local smooth complex frames with transition maps in $\operatorname{GL}_r(\mathbb C)$. In one direction, multiplication by $i$ in complex bundle charts gives
such a smooth $J$ because the transition maps are complex-linear. Conversely,
near any point choose a complex basis in its fiber and extend its vectors to
local smooth real sections; those sections together with their $J$-images
remain a real frame after shrinking the neighborhood, and give a local complex
frame. Forgetting smoothness in these charts gives the associated rank-$r$
complex topological vector bundle of
[[def-real-and-complex-topological-vector-bundle]].

For a smooth complex bundle $(E,J)$, write $\Gamma_{\mathbb C}(E)$ for its
smooth complex sections. A **complex connection** is a covariant derivative
$\nabla:\Gamma_{\mathbb C}(E)\to\Omega^1(M;E)$ that is $\mathbb C$-linear
and satisfies
$$\nabla(fs)=df\otimes s+f\nabla s$$
for every smooth complex-valued function $f$ and section $s$. This extends the
real bundle-connection convention of
[[def-connection-on-a-smooth-vector-bundle]]. A complex connection is
**Hermitian** for a supplied Hermitian metric $h$, taken linear in its first
variable and conjugate-linear in its second, when
$$Xh(s,t)=h(\nabla_Xs,t)+h(s,\nabla_Xt)$$
for all smooth sections $s,t$ and vector fields $X$. A real connection on a
Euclidean vector bundle is **Euclidean-compatible** when it obeys the same
identity for the real bundle metric, as in
[[def-metric-compatible-connection-on-a-riemannian-vector-bundle]].

## Local frame calculation

In a local complex frame $e=(e_1,\ldots,e_r)$ write
$\nabla e_j=\sum_i e_i\omega^i{}_j$. Applying Hermitian compatibility to
the frame sections gives
$$dH=\omega^{\mathsf T}H+H\overline\omega,\qquad H_{ij}=h(e_i,e_j).$$
After smooth Gram–Schmidt, a local unitary frame has $H=I$, so
$\omega^*=-\omega$. In a real orthonormal frame the corresponding equation
is $\omega^{\mathsf T}=-\omega$. With the curvature convention
$\Omega=d\omega+\omega\wedge\omega$ of
[[thm-curvature-two-form-structure-equation]], these identities imply
$\Omega^*=-\Omega$ and $\Omega^{\mathsf T}=-\Omega$, respectively: exterior
differentiation preserves the adjoint relation, and for a matrix of
one-forms $(\omega\wedge\omega)^*=-\omega\wedge\omega$ because transposition
reverses the matrix order while one-forms anticommute. The published local
structure-equation calculation is coefficientwise, so it also applies to
complex frame coefficients. Thus curvature matrices
of Hermitian or Euclidean-compatible connections are skew-Hermitian or
skew-symmetric in the corresponding frames. For rank zero these frame
identities are vacuous. In boundary charts the same identities hold up to the
boundary by restriction of the smooth half-space coefficient formulas.
