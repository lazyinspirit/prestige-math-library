---
id: lem-trace-riccati-inequality
kind: lemma
title: Trace riccati inequality
status: published
origin: pipeline
deps:
  - thm-radial-riccati-equation
  - def-ricci-curvature
  - lem-ricci-curvature-is-symmetric-and-basis-independent
  - def-countable-choice
  - def-trace-of-an-endomorphism
  - def-radial-jacobi-tensor
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-cauchy-schwarz-and-the-euclidean-norm
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§4, equation (4.1) and the paragraph following it, printed p.15: the trace Riccati inequality and the substitution a = tr(A)/(n−1)"
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§26.1–26.2 and 28.1, pp.191–197, 205–209: the Riccati equation and the traced scalar inequality"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a Riemannian manifold of dimension $n\ge2$, let $\gamma:I\to M$ be
a unit-speed geodesic with $0$ in the interior of $I$, let $A$ be the radial
Jacobi tensor of [[def-radial-jacobi-tensor]], let
$S=D_tA\circ A^{-1}$ be the radial Riccati operator of
[[thm-radial-riccati-equation]] on the interval $0<t<\tau$, where $\tau$ is
the first conjugate instant of $\gamma(0)$ along $\gamma$, and let
$h(t):=\operatorname{tr}S(t)$ be its trace on the normal space $N_t$. Then
$h$ is differentiable and
$$h'(t)+\frac{h(t)^2}{n-1} +\operatorname{Ric}_{\gamma(t)}(\dot\gamma(t),\dot\gamma(t))\le0 \qquad(0<t<\tau).$$

In dimension $n=2$ the normal space is one-dimensional and the inequality is an
identity: $h'=S'$ and $h^2/(n-1)=S^2$. The endpoint $t=0$ is excluded because
$S$ is undefined there; here $S$ is defined only on $(0,\tau)$, regardless of
whether the radial tensor becomes invertible again later. No choice beyond the inherited
$\mathrm{AC}_\omega$ is used.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1], a Riemannian manifold $(M,g)$ of dimension $n\ge2$, a unit-speed geodesic $\gamma$, the radial Jacobi tensor $A$, the Riccati operator $S=D_tA\circ A^{-1}$ defined on $0<t<\tau$, and its trace $h=\operatorname{tr}S$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the curvature-symmetry and Wronskian inputs of [[thm-radial-riccati-equation]] and by the Ricci-curvature interface [F2]; no further selection is made below.

[F1] Riccati equation: on $0<t<\tau$ the operator $S$ is self-adjoint on the normal space and satisfies $S'+S^2+R_\gamma=0$, where $R_\gamma(X)=R(X,\dot\gamma)\dot\gamma$ ([[thm-radial-riccati-equation]]). The normal space $N_t$ is the orthogonal complement of $\dot\gamma(t)$ in $T_{\gamma(t)}M$, of dimension $n-1$ ([[def-radial-jacobi-tensor]]).

[F2] Ricci curvature: $\operatorname{Ric}_p(X,Y)=\operatorname{tr}\bigl(Z \mapsto R_p(Z,X)Y\bigr)$ is the basis-independent trace of that endomorphism ([[def-ricci-curvature]], [[lem-ricci-curvature-is-symmetric-and-basis-independent]]). In particular $\operatorname{tr}\bigl(Z\mapsto R(Z,T)T\bigr) =\operatorname{Ric}(T,T)$.

[F3] Trace: for a finite-dimensional vector space the trace is the sum of the diagonal entries in any ordered basis, is basis-independent and is additive ([[def-trace-of-an-endomorphism]]).

[F4] Real spectral theorem: a self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal basis of eigenvectors, with real eigenvalues ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F5] Cauchy–Schwarz: for real numbers $s_1,\dots,s_{m}$, $\bigl(\sum_{i=1}^m s_i\bigr)^2\le m\sum_{i=1}^m s_i^2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

**Proof technique:** direct: trace the Riccati equation, identify the curvature trace with the Ricci curvature, and apply Cauchy–Schwarz to the real eigenvalues of the self-adjoint operator $S$.

1.1 Tracing the Riccati equation. [F1, F2, F3, given]
Differentiating the trace and using the Riccati equation of [F1], $$h'=(\operatorname{tr}S)'=\operatorname{tr}(S') =\operatorname{tr}\bigl(-S^2-R_\gamma\bigr) =-\operatorname{tr}(S^2)-\operatorname{tr}(R_\gamma),$$ the second equality because the trace is linear and basis-independent and the derivative acts entrywise in any fixed basis of the normal space [F3]. The operator $R_\gamma$ is $Z\mapsto R(Z,\dot\gamma)\dot\gamma$, so by [F2] $$\operatorname{tr}(R_\gamma) =\operatorname{tr}\bigl(Z\mapsto R(Z,\dot\gamma)\dot\gamma\bigr) =\operatorname{Ric}(\dot\gamma,\dot\gamma).$$ Hence $$h'+\operatorname{tr}(S^2)+\operatorname{Ric}(\dot\gamma,\dot\gamma)=0 .$$ [F1, F2, F3, given]

1.2 The Cauchy–Schwarz bound on the quadratic trace. [F4, F5, F1, given]
By [F1] the operator $S(t)$ is self-adjoint on the $(n-1)$-dimensional inner product space $N_t$, so by [F4] there is an orthonormal basis $e_1,\dots,e_{n-1}$ of $N_t$ with $S e_i=s_i e_i$ and $s_i\in\mathbb R$. In this basis, which is orthonormal and hence admissible for the trace of [F3], $$h=\operatorname{tr}S=\sum_{i=1}^{n-1}s_i,\qquad \operatorname{tr}(S^2)=\sum_{i=1}^{n-1}\langle S^2e_i,e_i\rangle =\sum_{i=1}^{n-1}s_i^2 .$$ Applying [F5] with $m=n-1$ to the real numbers $s_1,\dots,s_{n-1}$ gives $$h^2=\Bigl(\sum_{i=1}^{n-1}s_i\Bigr)^2 \le(n-1)\sum_{i=1}^{n-1}s_i^2=(n-1)\operatorname{tr}(S^2),$$ that is $\operatorname{tr}(S^2)\ge h^2/(n-1)$, since $n-1\ge1>0$. [F4, F5, F1, given]

2.1 Conclusion. [step 1.1, step 1.2, given]
Substituting the bound of step 1.2 into the identity of step 1.1, $$h'=-\operatorname{tr}(S^2)-\operatorname{Ric}(\dot\gamma,\dot\gamma) \le-\frac{h^2}{n-1}-\operatorname{Ric}(\dot\gamma,\dot\gamma),$$ which is the asserted inequality $h'+h^2/(n-1)+\operatorname{Ric}(\dot\gamma,\dot\gamma)\le0$ on $0<t<\tau$. In dimension $n=2$ the sum in [F5] has the single term $s_1$, so the Cauchy–Schwarz step is an equality: $h'=-h^2-\operatorname{Ric} (\dot\gamma,\dot\gamma)$. At $t=0$ the operator $S$ is not defined, and its domain here is $(0,\tau)$; the radial tensor may become invertible again later. Neither completeness of $M$ nor any choice beyond [A1] enters. [step 1.1, step 1.2, given] ∎

## Source locator

Eschenburg §4 (printed p.15) traces the Riccati equation $A'+A^2+R_V=0$ to $\operatorname{trace}(A)'+\operatorname{trace}(A^2)+\operatorname{Ric}(V)=0$, the starting point of the average comparison theorems; the step from this identity to the scalar inequality $h'+h^2/(n-1)+\operatorname{Ric}\le0$ is the $a=\operatorname{trace}(A)/(n-1)$ substitution of the same section, whose Cauchy–Schwarz input is the one proved above. Datar §§26.1–26.2 and §28.1, pp.191–197 and 205–209, contains the same Riccati calculus. The proof above is carried out from the in-run Riccati equation and the published Ricci-curvature suppliers.
