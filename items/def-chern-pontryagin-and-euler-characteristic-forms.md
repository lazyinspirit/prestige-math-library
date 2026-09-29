---
id: def-chern-pontryagin-and-euler-characteristic-forms
kind: definition
title: Chern, Pontryagin, and Euler characteristic forms
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-evaluation-of-an-invariant-polynomial-on-curvature
  - def-invariant-polynomial-on-a-matrix-lie-algebra
  - def-complex-linear-and-compatible-bundle-connections
  - thm-curvature-two-form-structure-equation
  - lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles
  - lem-an-invariant-polynomial-of-curvature-is-closed
  - lem-transgression-between-two-connections-is-exact
  - def-axiom-of-choice
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Stefan Haller, The Atiyah–Singer Index Theorem, Vienna lecture notes (2013)
      url: https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf
      locator: "§II.4.3, Hermitian normalized curvature; §II.4.5, total Chern form; §II.4.11, Pontryagin normalization, printed pp. 90–95"
    - title: John Milnor and James Stasheff, Characteristic Classes
      url: https://xiaoshuo-lin.me/files/Char-Class.pdf
      locator: "Appendix C, Corollary C.10 and Lemma C.12, printed pp. 194–196; real odd-coefficient exactness and Pfaffian covariance and normalization"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold,
possibly with boundary. If $E\to M$ is a rank-$r$ complex vector bundle with
complex connection $\nabla$ and curvature $\Omega$, define the total Chern form
$$c(\nabla)=\det\!\left(I-\frac{\Omega}{2\pi i}\right)=\sum_{j=0}^r c_j(\nabla),$$
where $c_j(\nabla)$ has degree $2j$. For a Hermitian connection these forms
are real-valued; a general complex connection need not give real-valued forms.

For a rank-$r$ real vector bundle with real connection $\nabla$, let
$E_{\mathbb C}=E\otimes_{\mathbb R}\mathbb C$ carry the complexified
connection $\nabla_{\mathbb C}$ and set
$$p_j(\nabla)=(-1)^j c_{2j}(\nabla_{\mathbb C})\quad\text{in degree }4j,\qquad p(\nabla)=\sum_{j\geq0}p_j(\nabla).$$
Then $p_0=1$, $p_j=0$ when $2j>r$, and every $p_j(\nabla)$ is real-valued,
even if $\nabla$ is not metric-compatible. If $\nabla$ is compatible with a
Euclidean metric, each odd Chern form $c_{2j+1}(\nabla_{\mathbb C})$ vanishes
pointwise. Assume full Axiom of Choice (AC); for every real connection each
$c_{2j+1}(\nabla_{\mathbb C})$ is then exact, with AC used through existence
of a metric-compatible connection and the transgression lemma.

If $E$ is an oriented Euclidean bundle of even rank $2m$ and $\nabla$ is
metric-compatible, define
$$e(\nabla)=\operatorname{Pf}\!\left(\frac{\Omega}{2\pi}\right),$$
where the Pfaffian uses the ordered oriented orthonormal frame and
$\operatorname{Pf}\!\left(\begin{smallmatrix}0&a\\-a&0\end{smallmatrix}\right)=a$.
These curvature evaluations are closed forms. In rank zero,
$c(\nabla)=p(\nabla)=e(\nabla)=1$. The Euler form is defined here only for
oriented even-rank Euclidean bundles with a metric-compatible connection.

## Facts & Assumptions

**Given:** The manifold and bundle; the complex or real connection in the
relevant clause; and, for the Hermitian or Euler clause, the supplied
compatible metric and orientation.

[A1] Full AC says every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

[F1] The coefficients of $\det(I-tA)$ are invariant polynomials on
$\mathfrak{gl}_r(\mathbb C)$, and polarization preserves invariance
([[def-invariant-polynomial-on-a-matrix-lie-algebra]]).

[F2] Evaluation of an invariant polynomial on curvature gives a global form
of the prescribed degree ([[def-evaluation-of-an-invariant-polynomial-on-curvature]]).

[F3] A Hermitian connection obeys the Hermitian metric derivative identity
([[def-complex-linear-and-compatible-bundle-connections]]).

[F4] Under AC, each smooth real bundle has a Euclidean metric and a
compatible connection ([[lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles]]).

[F5] For the same $G$-reduction, two connections' invariant curvature
evaluations differ by the exterior derivative of the supplied transgression
form, including on manifolds with boundary
([[lem-transgression-between-two-connections-is-exact]]).

[F6] The Pfaffian is invariant under $SO(2m)$, with the fixed orientation sign
([[def-invariant-polynomial-on-a-matrix-lie-algebra]]).

[F7] The global evaluation of an invariant polynomial on curvature is closed
([[lem-an-invariant-polynomial-of-curvature-is-closed]]).

[F8] In a local frame, the curvature matrix is $\Omega=d\omega+\omega\wedge\omega$
([[thm-curvature-two-form-structure-equation]]).

[F9] A Euclidean-compatible connection obeys the real metric derivative
identity ([[def-complex-linear-and-compatible-bundle-connections]]).

## Proof

1.1 For $A\in\mathfrak{gl}_r(\mathbb C)$, let $q_j(A)$ be the coefficient of $t^j$ in $\det(I-tA/(2\pi i))$. The determinant expansion makes $q_j$ homogeneous of degree $j$, with $q_0=1$ and $q_j=0$ for $j>r$. Conjugation leaves the determinant unchanged, so $q_j$ is invariant by [F1]. Applying [F2] and [F7] gives a global closed form $q_j(\Omega)$ of degree $2j$; define $c_j(\nabla)=q_j(\Omega)$ and sum these forms to obtain the stated total determinant. This is the published determinant normalization; the global form-level construction here follows from the curvature-evaluation suppliers. [F1, F2, F7, given, algebra]

1.2 For a real bundle define $\nabla_{\mathbb C}(s\otimes z)=\nabla s\otimes z$ and extend complex-linearly; in a real frame its curvature is the same real matrix $\Omega$ over $\mathbb C$. Let $e_j(A)$ be the coefficient of $t^j$ in $\det(I+tA)$. Since $\det(I-tA/(2\pi i))=\det(I+itA/(2\pi))$, we have $c_j(\nabla_{\mathbb C})=i^j e_j(\Omega)/(2\pi)^j$. Each $e_j(\Omega)$ is real, so $p_j(\nabla)=(-1)^jc_{2j}(\nabla_{\mathbb C})=e_{2j}(\Omega)/(2\pi)^{2j}$ is a real closed form; the rank cutoff gives $p_j=0$ for $2j>r$, and the constant coefficient gives $p_0=1$. This sign agrees with the published Pontryagin convention; real-valuedness for arbitrary real connections follows here from the real coefficients $e_{2j}(\Omega)$. [F1, F2, F7, given, algebra]

1.3 If $\nabla$ is Hermitian, applying [F3] in a unitary frame gives $\omega^*=-\omega$. The structure equation [F8] and the identity $(\omega\wedge\omega)^*=-\omega^*\wedge\omega^*$ give $\Omega^*=-\Omega$, so $H=\Omega/(2\pi i)$ satisfies $H^*=H$. Its even-degree entries commute, and coefficientwise conjugation and transpose yield $\overline{\det(I-tH)}=\det(I-t\overline H)=\det(I-tH^{\mathsf T})=\det(I-tH)$; therefore every $c_j(\nabla)$ is real-valued. Haller states the equivalent self-adjoint normalized-curvature and real-trace fact; the determinant calculation proves form-level reality of every coefficient here. [F3, F8, algebra]

2.1 If $\nabla$ preserves a Euclidean metric, choose a local orthonormal frame; applying [F9] to the frame vectors gives $\omega^{\mathsf T}=-\omega$. The structure equation [F8] and anticommutation of one-form coefficients give $(\omega\wedge\omega)^{\mathsf T}=-\omega^{\mathsf T}\wedge\omega^{\mathsf T}$, hence $\Omega^{\mathsf T}=-\Omega$. Since scalar coefficients of even-degree forms commute, $\det(I+t\Omega)=\det((I+t\Omega)^{\mathsf T})=\det(I-t\Omega)$, so every odd coefficient $e_{2j+1}(\Omega)$ is zero and step 1.2 gives $c_{2j+1}(\nabla_{\mathbb C})=0$ pointwise. The total Pontryagin form is $p(\nabla)=\det(I+\Omega/(2\pi))=\det(I-\Omega/(2\pi))$ because all odd determinant coefficients vanish. [F9, F8, step 1.2, algebra]

2.2 On the trivial complex line over $\mathbb R^2$ with coordinates $(x,y)$, take $\nabla=d+(1+i)x\,dy$. Its curvature is $\Omega=(1+i)\,dx\wedge dy$, and step 1.1 gives $c_1(\nabla)=-\Omega/(2\pi i)=(-1+i)\,dx\wedge dy/(2\pi)$, which is not real-valued. This witness shows that no general reality assertion holds for arbitrary complex connections. [step 1.1, algebra]

3.1 For any real connection assume [A1]; [F4] supplies a Euclidean metric and a metric-compatible connection $\nabla^g$ on $E$. The complexified connections are both compatible with the same $\operatorname{GL}_r(\mathbb C)$ reduction of $E_{\mathbb C}$. For each odd $k\geq1$, step 2.1 gives $c_k(\nabla^g_{\mathbb C})=0$, while [F5] gives $c_k(\nabla^g_{\mathbb C})-c_k(\nabla_{\mathbb C})=dT_{q_k}$; hence $c_k(\nabla_{\mathbb C})=-dT_{q_k}$ is exact. This is the only AC use: it supplies the comparison connection through [F4]; the determinant calculation and transgression are choice-free once the connections are given. [A1, F4, F5, step 2.1, construct]

3.2 For an oriented Euclidean bundle of rank $2m$, step 2.1 gives curvature in $\mathfrak{so}(2m)$; by [F6] the Pfaffian is $SO(2m)$-invariant with the stated $2\times2$ normalization. Its evaluation on $\Omega/(2\pi)$ is therefore a global closed real form by [F2] and [F7]. In oriented orthonormal frames a transition $S\in SO(2m)$ obeys $\operatorname{Pf}(S\Omega S^{\mathsf T})=\det(S)\operatorname{Pf}(\Omega)=\operatorname{Pf}(\Omega)$, so the local forms patch; for an orientation-reversing orthogonal frame change the factor is $\det(S)=-1$. Milnor–Stasheff Appendix C, Lemma C.12, gives the same covariance and rank-two normalization. [F2, F6, F7, step 2.1, given, algebra]

4.1 If the base is empty, every form space has its unique section, so each total form is the unique inhomogeneous form there. If the rank is zero, the empty determinant and Pfaffian are both $1$ and every positive Pontryagin index vanishes by step 1.2. For rank one, $c_1=-\operatorname{tr}(\Omega)/(2\pi i)$ and a real rank-one bundle has $p=1$. Forms whose degree exceeds $\dim M$ are zero, including a top Pfaffian when $2m>\dim M$. The same frame calculations hold in boundary charts, and [F2] and [F5] include the boundary-capable form complex. Supplied-data calculations use no choice; only step 3.1 assumes AC, and this statement contains no iff assertion. [F2, F5, step 1.1, step 1.2, cases] ∎
