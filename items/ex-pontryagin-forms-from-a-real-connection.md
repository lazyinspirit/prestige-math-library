---
id: ex-pontryagin-forms-from-a-real-connection
kind: example
title: Pontryagin forms from a real connection
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-chern-pontryagin-and-euler-characteristic-forms
  - def-complex-linear-and-compatible-bundle-connections
  - thm-curvature-two-form-structure-equation
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: Stefan Haller, The Atiyah–Singer Index Theorem, Vienna lecture notes (2013)
      url: https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf
      locator: "§II.4.11 and Proposition II.4.12(c), printed p. 95: p_k(E)=(-1)^k c_{2k}(E⊗C), the rank cutoff, p_1(E)=-tr(R²)/(8π²), and p(L_R)=1+c_1(L)²"
    - title: John W. Milnor and James D. Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Appendix C, printed pp. 289–317: Pfaffian lemma, oriented rank-two determinant normalization, and the relation of p_1 to the Euler class of an oriented plane bundle"
---

## Example

Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold,
possibly empty or with boundary, let $E\to M$ be a smooth real vector bundle of
finite rank $r$, and let $\nabla$ be a real connection on $E$ with curvature
$\Omega$. Use the conventions of
[[def-chern-pontryagin-and-euler-characteristic-forms]] for the complexified
connection $\nabla_{\mathbb C}$ on
$E_{\mathbb C}=E\otimes_{\mathbb R}\mathbb C$, the Chern forms $c_j$, the
Pontryagin forms $p_j$, and the Euler form $e$. Then:

1. $p_1(\nabla)=-c_2(\nabla_{\mathbb C})$.
2. If $\nabla$ is compatible with a Euclidean metric, then in every local
   orthonormal frame $\operatorname{tr}\Omega=0$ and
$$p_1(\nabla)=-\frac{\operatorname{tr}(\Omega\wedge\Omega)}{8\pi^2}.$$
3. If in addition $r=2$, the bundle is oriented, and
   $\Omega=\begin{pmatrix}0&-F\\F&0\end{pmatrix}$ for a real $2$-form $F$ in a
   positively oriented orthonormal frame, then
$$p_1(\nabla)=\frac{F\wedge F}{4\pi^2}=e(\nabla)\wedge e(\nabla).$$

For every real connection the second determinant coefficient is
$$c_2(\nabla_{\mathbb C})=\frac{\operatorname{tr}(\Omega\wedge\Omega)-\operatorname{tr}\Omega\wedge\operatorname{tr}\Omega}{8\pi^2},$$
so clause 2 uses metric compatibility exactly to delete the
$(\operatorname{tr}\Omega)^2$ term; the trace formula without that correction
is false for general real connections, as the witness below shows. No integral
or topological equality is claimed. The Euler form is defined only in even
rank, so clause 3 is restricted to rank two.

## Facts & Assumptions

**Given:** The manifold, bundle, connection and curvature of the three clauses; in clause 2 a Euclidean metric compatible with $\nabla$; in clause 3 an orientation and a positively oriented orthonormal frame in which the curvature matrix has the displayed form.

[F1] In a real bundle the total Chern form of a complex connection is the determinant $c(\nabla)=\det\!\left(I-\frac{\Omega}{2\pi i}\right)=\sum_j c_j(\nabla)$, with $c_j$ of degree $2j$, and the complexified connection on $E_{\mathbb C}=E\otimes_{\mathbb R}\mathbb C$ is the complexification of the real one ([[def-chern-pontryagin-and-euler-characteristic-forms]]).

[F2] For a real connection, $p_j(\nabla)=(-1)^jc_{2j}(\nabla_{\mathbb C})$ is a real form of degree $4j$, and $p_j=0$ whenever $2j>r$ ([[def-chern-pontryagin-and-euler-characteristic-forms]]).

[F3] For an oriented Euclidean bundle of even rank with a metric-compatible connection, the Euler form is $e(\nabla)=\operatorname{Pf}\!\left(\frac{\Omega}{2\pi}\right)$ in an ordered oriented orthonormal frame, with the normalization $\operatorname{Pf}\!\left(\begin{smallmatrix}0&a\\-a&0\end{smallmatrix}\right)=a$ ([[def-chern-pontryagin-and-euler-characteristic-forms]]).

[F4] A real connection on a Euclidean vector bundle is Euclidean-compatible when it obeys the identity $Xh(s,t)=h(\nabla_Xs,t)+h(s,\nabla_Xt)$ for all smooth sections $s,t$ and vector fields $X$ ([[def-complex-linear-and-compatible-bundle-connections]]).

[F5] In a local frame the curvature matrix of a connection obeys the structure equation $\Omega=d\omega+\omega\wedge\omega$ ([[thm-curvature-two-form-structure-equation]]).

## Verification

**Given:** The objects and hypotheses above, and the standard coordinates on $\mathbb R^4$ in step 3.1.

1.1 **The second determinant coefficient.** In a real frame $e_1,\ldots,e_r$ the complexified connection restricts to $\nabla$ on $E\otimes1$ and is complex-linear in the scalar factor, so it has the same connection matrix and hence the same curvature matrix $\Omega$ over $\mathbb C$. Put $A=-\Omega/(2\pi i)$. Its entries are $2$-forms and therefore commute, so the usual expansion $\det(I+A)=1+e_1(A)+e_2(A)+\cdots$ in principal minors is valid, with $e_1(A)=\operatorname{tr}A$ and $e_2(A)=\frac12\bigl((\operatorname{tr}A)^2-\operatorname{tr}(A\wedge A)\bigr)$ by Newton's identity. Since $(2\pi i)^2=-4\pi^2$, $$c_2(\nabla_{\mathbb C})=\frac{\operatorname{tr}(\Omega\wedge\Omega)-\operatorname{tr}\Omega\wedge\operatorname{tr}\Omega}{8\pi^2},$$ and [F2] turns this into $p_1(\nabla)=-c_2(\nabla_{\mathbb C}) =\bigl[(\operatorname{tr}\Omega)^2-\operatorname{tr}(\Omega\wedge\Omega)\bigr]/(8\pi^2)$. For $r\le1$ the rank cutoff gives $c_2=0=p_1$. [F1, F2, given, algebra]

2.1 **Metric connections.** Let $\nabla$ be Euclidean-compatible and let $e_1,\ldots,e_r$ be a local orthonormal frame, so $h(e_i,e_j)=\delta_{ij}$. Applying [F4] to these frame sections gives $0=Xh(e_i,e_j)=h(\nabla_Xe_i,e_j)+h(e_i,\nabla_Xe_j)=\omega_{ji}(X)+\omega_{ij}(X)$ for every vector field $X$, hence $\omega^{\mathsf T}=-\omega$. Transposing [F5] and using $(\omega\wedge\omega)^{\mathsf T}=-\omega^{\mathsf T}\wedge\omega^{\mathsf T}$ together with the anticommutativity of one-form coefficients gives $\Omega^{\mathsf T}=d(\omega^{\mathsf T})-\omega^{\mathsf T}\wedge\omega^{\mathsf T}=-\Omega$. Thus every diagonal entry of $\Omega$ vanishes and $\operatorname{tr}\Omega=0$. Step 1.1 then gives $c_2(\nabla_{\mathbb C})=\operatorname{tr}(\Omega\wedge\Omega)/(8\pi^2)$ and $p_1(\nabla)=-\operatorname{tr}(\Omega\wedge\Omega)/(8\pi^2)$. [F4, F5, step 1.1, algebra]

3.1 **The correction term is genuine.** On the trivial rank-two real bundle over $\mathbb R^4$ take the standard frame, let $\omega=\operatorname{diag}(x_2\,dx_1,\,x_4\,dx_3)$, and let $\nabla=d+\omega$. Then $\omega\wedge\omega=0$ and $\Omega=d\omega=\operatorname{diag}(dx_2\wedge dx_1,\,dx_4\wedge dx_3)$. Hence $\operatorname{tr}\Omega=dx_2\wedge dx_1+dx_4\wedge dx_3$ is nonzero, while $\operatorname{tr}(\Omega\wedge\Omega) =(dx_2\wedge dx_1)^2+(dx_4\wedge dx_3)^2=0$. Step 1.1 gives $$c_2(\nabla_{\mathbb C})=-\frac{\operatorname{tr}\Omega\wedge\operatorname{tr}\Omega}{8\pi^2}=-\frac{dx_1\wedge dx_2\wedge dx_3\wedge dx_4}{4\pi^2}\ne0,$$ whereas the uncorrected expression $-\operatorname{tr}(\Omega\wedge\Omega)/(8\pi^2)$ of step 2.1 evaluates to $0$; the trace formula therefore requires metric compatibility. [step 1.1, step 2.1, given, algebra]

3.2 **Rank two.** Let $r=2$, let the bundle be oriented, and let $\Omega=\begin{pmatrix}0&-F\\F&0\end{pmatrix}$ in a positively oriented orthonormal frame. Then $\Omega\wedge\Omega =\begin{pmatrix}-F\wedge F&0\\0&-F\wedge F\end{pmatrix}$, so $\operatorname{tr}(\Omega\wedge\Omega)=-2F\wedge F$ and step 2.1 gives $p_1(\nabla)=F\wedge F/(4\pi^2)$. By [F3] and the $2\times2$ normalization, $e(\nabla)=\operatorname{Pf}(\Omega/(2\pi))=-F/(2\pi)$, hence $e(\nabla)\wedge e(\nabla)=F\wedge F/(4\pi^2)=p_1(\nabla)$. [F3, step 2.1, algebra]

4.1 **Boundary cases.** If $M$ is empty then every form space is zero and the identities hold trivially. If $r=0$ or $r=1$, then $c_2=p_1=0$ in clause 1 by the rank cutoff; for $r=1$ and a Euclidean-compatible connection, step 2.1 makes the $1\times1$ curvature matrix skew-symmetric, hence zero, so $p_1=-\operatorname{tr}(\Omega\wedge\Omega)/(8\pi^2)=0$. The Euler form is defined only in even rank, so clause 3 has no rank-one case. If $\Omega=0$, then both sides of each displayed identity in clauses 2 and 3 vanish, with $F=0$ there. All three clauses are pointwise local statements in frame coefficients, so they restrict to boundary charts unchanged; no choice principle, parameter, or limiting process occurs, clause 2 assumes metric compatibility while clause 1 does not, and no converse of clause 2 is asserted. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 3.2, cases] ∎
