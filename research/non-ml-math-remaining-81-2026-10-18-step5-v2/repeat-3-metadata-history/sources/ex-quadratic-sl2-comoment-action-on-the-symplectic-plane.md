---
id: ex-quadratic-sl2-comoment-action-on-the-symplectic-plane
kind: example
title: Quadratic sl2 comoment action on the symplectic plane
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-symplectic-form-and-symplectic-manifold
  - def-symplectic-vector-space
  - def-lie-algebra-over-a-field
  - def-representation-of-a-lie-algebra
  - def-countable-choice
  - prop-coordinate-formula-for-the-poisson-bracket
  - def-symplectic-comoment-map-and-hamiltonian-observable-action
  - prop-comoment-maps-act-on-observables-by-poisson-derivations
justified_by: []
generation:
  role: example
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^2$ with coordinates $(q,p)$ and $\omega=dq\wedge dp$. Let
$\mathfrak g=\mathfrak{sl}_2(\mathbb R)=\{\begin{pmatrix}a&b\\c&-a\end{pmatrix}:a,b,c\in\mathbb R\}$
with bracket $[A,B]=AB-BA$. Use the basis
$H=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$,
$E=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, and
$F=\begin{pmatrix}0&0\\1&0\end{pmatrix}$.
Define the real-linear map $J:\mathfrak g\to C^\infty(M,\mathbb R)$ by

$$J(H)=-qp,\qquad J(E)=\frac{q^2}{2},\qquad J(F)=-\frac{p^2}{2}.$$

Write $\partial_q$ and $\partial_p$ for the coordinate derivative operators.
Then $J$ is a comoment map under
[[def-symplectic-comoment-map-and-hamiltonian-observable-action]], and its
observable operators are

$$\rho_J(H)=q\partial_q-p\partial_p,\qquad \rho_J(E)=q\partial_p,\qquad \rho_J(F)=p\partial_q.$$

These operators give the real three-dimensional matrix Lie algebra its
observable representation. By
[[prop-comoment-maps-act-on-observables-by-poisson-derivations]], they preserve
both pointwise multiplication and the Poisson bracket on all smooth functions;
the Verification also checks the commutators on an arbitrary smooth test
function and gives explicit product and bracket-preservation calculations.

## Facts & Assumptions

**Given:** The standard symplectic plane $(\mathbb R^2,dq\wedge dp)$, the real
traceless $2\times2$ matrices with the commutator bracket, the displayed basis,
and the map $J$ in the Example. Assume $\mathrm{AC}_\omega$ only when applying
the coordinate-formula supplier.

[A1] $\mathrm{AC}_\omega$ is the Axiom of Countable Choice; it is the sole
choice assumption used by the coordinate-formula supplier. No arbitrary-index
choice is used here. [[def-countable-choice]]

[F1] A symplectic form is closed and restricts to a nondegenerate alternating
form on every tangent space. [[def-symplectic-form-and-symplectic-manifold]]

[F2] A finite-dimensional real symplectic vector space has an alternating
bilinear form whose map to the dual is an isomorphism; equivalently, only the
zero vector pairs to zero with every vector. [[def-symplectic-vector-space]]

[F3] For a real vector space $V$, $\operatorname{End}_{\mathbb R}(V)$ has the
commutator Lie bracket, and a Lie-algebra representation is a bracket-preserving
linear map into it. [[def-representation-of-a-lie-algebra]]

[F4] A real Lie algebra has a bilinear alternating bracket satisfying Jacobi.
[[def-lie-algebra-over-a-field]]

[F5] In canonical $(q,p)$ coordinates and under $\mathrm{AC}_\omega$,
$\{A,B\}=A_qB_p-A_pB_q$. [[prop-coordinate-formula-for-the-poisson-bracket]]

[F6] The comoment identity and observable action are
$J([\xi,\eta])=\{J(\xi),J(\eta)\}$ and
$\rho_J(\xi)A=\{J(\xi),A\}$. [[def-symplectic-comoment-map-and-hamiltonian-observable-action]]

[F7] A comoment map defines a Lie-algebra representation on functions, and
each operator is a Poisson derivation. [[prop-comoment-maps-act-on-observables-by-poisson-derivations]]

## Verification

1.1 The form $\omega=dq\wedge dp$ is smooth and alternating, and $d\omega=0$ because $d(dq)=d(dp)=0$. For $v=a\partial_q+b\partial_p$, $\iota_v\omega=a\,dp-b\,dq$; if this is zero, then $a=b=0$. Thus $\omega$ is nondegenerate at every point and is symplectic by [F1]–[F2]. [given, F1, F2, algebra]

1.2 Every real traceless matrix is uniquely $aH+bE+cF$, so $(H,E,F)$ is a basis of the stated vector space. Matrix multiplication gives $HE=E$, $EH=-E$, $HF=-F$, $FH=F$, $EF=\begin{pmatrix}1&0\\0&0\end{pmatrix}$, and $FE=\begin{pmatrix}0&0\\0&1\end{pmatrix}$. Consequently $[H,E]=2E$, $[H,F]=-2F$, and $[E,F]=H$; the span is closed under commutators. The ambient endomorphism algebra has the commutator Lie bracket by [F3], and the closed subspace therefore inherits its bilinearity, alternation, and Jacobi identity by [F4]. This verifies the stated $\mathfrak{sl}_2(\mathbb R)$ convention without identifying it with the library's complex $\mathfrak{sl}_2(\mathbb C)$. [given, F3, F4, algebra]

1.3 Differentiating the three quadratic functions gives $(\partial_qJ(H),\partial_pJ(H))=(-p,-q)$, $(\partial_qJ(E),\partial_pJ(E))=(q,0)$, and $(\partial_qJ(F),\partial_pJ(F))=(0,-p)$. By [F5], $\{J(H),J(E)\}=q^2=2J(E)=J([H,E])$, $\{J(H),J(F)\}=p^2=-2J(F)=J([H,F])$, and $\{J(E),J(F)\}=-qp=J(H)=J([E,F])$. The matrix bracket is alternating by [F4], and swapping the inputs in the coordinate formula [F5] negates the Poisson bracket; both are bilinear. Since $(H,E,F)$ is a basis, these three pairs, their reversals, and the zero diagonal pairs establish the comoment identity for every $\xi,\eta\in\mathfrak g$. [given, A1, F4, F5, F6, algebra]

1.4 Applying [F5] to arbitrary $u\in C^\infty(\mathbb R^2,\mathbb R)$ gives $\rho_J(H)u=qu_q-pu_p$, $\rho_J(E)u=qu_p$, and $\rho_J(F)u=pu_q$. The result in [F7] supplies the two Poisson-derivation identities for every pair of smooth functions. [given, A1, F5, F6, F7, algebra]

2.1 Write $u_{qp}=\partial_q\partial_pu$ and $u_{pq}=\partial_p\partial_qu$; for smooth $u$ these are equal. Direct composition gives $[\rho_J(H),\rho_J(E)]u=(q u_p+q^2u_{qp}-pq u_{pp})-(q^2u_{pq}-q u_p-pq u_{pp})=2q u_p=2\rho_J(E)u$, $[\rho_J(H),\rho_J(F)]u=(pq u_{qq}-p u_q-p^2u_{qp})-(pu_q+pq u_{qq}-p^2u_{pq})=-2p u_q=-2\rho_J(F)u$, and $[\rho_J(E),\rho_J(F)]u=(q u_q+pq u_{qp})-(p u_p+pq u_{pq})=q u_q-pu_p=\rho_J(H)u$. These are exactly the three matrix brackets from step 1.2; bilinearity extends them from basis elements to all of $\mathfrak g$. [given, step 1.2, algebra]

2.2 For $u=p$ and $v=q+p$, $\rho_J(E)(uv)=q\partial_p\bigl(p(q+p)\bigr)=q(q+2p)=q^2+2pq$, while $\rho_J(E)(u)v+u\rho_J(E)(v)=q(q+p)+pq=q^2+2pq$. Thus the product rule is directly verified on this nontrivial pair. [given, A1, F5, step 1.4, algebra]

3.1 For $u=q^2/2$ and $v=p^2/2$, the coordinate bracket gives $\{u,v\}=qp$, so $\rho_J(H)\{u,v\}=0$. Also $\rho_J(H)u=q^2$ and $\rho_J(H)v=-p^2$, whence $\{\rho_J(H)u,v\}+\{u,\rho_J(H)v\}=\{q^2,p^2/2\}+\{q^2/2,-p^2\}=2qp-2qp=0$. This checks bracket preservation directly on a nonconstant pair, while [F7] establishes it for all smooth functions. [given, A1, F5, F7, step 1.4, algebra] ∎
