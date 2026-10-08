---
id: thm-dolbeault-laplacian-has-finite-dimensional-kernel-and-closed-range
kind: theorem
title: "The Dolbeault Laplacian has finite-dimensional kernel and closed range"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-hilbert-space
  - def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface
  - def-orthogonality-and-orthogonal-complement
  - def-self-adjoint-positive-unitary-and-normal-operator
  - lem-dolbeault-green-operator-is-compact-on-the-orthogonal-complement-of-the-kernel
  - lem-kernel-of-identity-minus-compact-is-finite-dimensional
  - lem-range-of-identity-minus-compact-is-closed
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface
  - thm-orthogonal-decomposition-by-a-closed-subspace
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VI §2, (2.4) and (2.6)–(2.8), printed pp. 289–290: finite-dimensional kernel, closed range of the smooth elliptic operator, and orthogonal decomposition by the formal-adjoint kernel. The source cites Hörmander for the elliptic PDE facts; this item proves the Hilbert-domain claim from the local Green-operator supplier."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VI §7, opening paragraph and (7.1)–(7.2), printed pp. 308–310: the smooth Chern Dolbeault Laplacian is elliptic and self-adjoint; the text states the Dolbeault Hodge decomposition and finite-dimensional cohomology."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08

---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). It is inherited through the construction of the boundary and Green operators in [[lem-dolbeault-green-operator-is-compact-on-the-orthogonal-complement-of-the-kernel]]. It supplies Dependent Choice for the closed-range theorem and Countable Choice for the Hilbert orthogonal-decomposition theorem ([[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]). Let $X$ be a nonempty compact Riemann surface, let $E\to X$ be a holomorphic line bundle with Hermitian metric $h$, and let $g$ be a compatible Riemannian metric. Use the Hilbert spaces and block Dolbeault Laplacian $\Delta''$ from [[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]. Put $H:=\ker\Delta''\subset L^2:=L^2_0\oplus L^2_1$. Let $B:L^2\to L^2$ and $G:H^\perp\to H^\perp$ be the compact boundary and Green operators from [[lem-dolbeault-green-operator-is-compact-on-the-orthogonal-complement-of-the-kernel]]; in particular, $B$ is compact and self-adjoint, $\ker(I-B)=H$, and
$$(I+\Delta'')B=I\quad\text{on }L^2,\qquad B(I+\Delta'')u=u\quad(u\in\operatorname{dom}\Delta'').$$
The Green identities are $\Delta''Gf=f$ for $f\in H^\perp$ and $G\Delta''u=u$ for $u\in\operatorname{dom}\Delta''\cap H^\perp$. The space $H^2$ below is the finite-chart Sobolev space of [[thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface]].

1. **Finite-dimensional harmonic space.** $H$ is finite dimensional.

2. **Closed range and orthogonal decomposition.** The range $\Delta''(\operatorname{dom}\Delta'')$ is closed and equals $H^\perp$, so
$$L^2=H\oplus\Delta''(\operatorname{dom}\Delta'')$$
orthogonally. The range of $\Delta''$ on each summand $L^2_q$, $q=0,1$, is closed in that summand.

3. **Quantitative inverse.** There is a constant $c>0$ such that
$$\|\Delta''u\|_{L^2}\ge c\|u\|_{L^2}\qquad(u\in H^\perp\cap\operatorname{dom}\Delta'').$$
Moreover, $\Delta''$ restricts to a topological isomorphism
$$H^\perp\cap\operatorname{dom}\Delta''\longrightarrow H^\perp$$
with inverse $G$. On its domain use the graph norm
$$\|u\|_{H^2,\Delta}:=\|u\|_{H^2}+\|\Delta''u\|_{L^2}.$$

## Facts & Assumptions

**Given:** The compact Riemann surface and supplied metrics; the maximal Dolbeault complex, its total Hilbert space, and its block Laplacian; the boundary and Green operators of the preceding lemma; and full AC.

[F1] The total space $L^2_0\oplus L^2_1$ is a complex Hilbert space and hence a Banach space ([[def-hilbert-space]]).

[F2] The Laplacian is the nonnegative self-adjoint block operator $\Delta''_0\oplus\Delta''_1$ on the direct-sum composition domain ([[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]).

[F3] $B$ is compact, bounded and self-adjoint, $\ker(I-B)=H$, and $(I+\Delta'')B=I$ on $L^2$ while $B(I+\Delta'')=I$ on $\operatorname{dom}\Delta''$. The Green operator $G$ is bounded into $H^2$, has range $\operatorname{dom}\Delta''\cap H^\perp$, and satisfies both Green identities ([[lem-dolbeault-green-operator-is-compact-on-the-orthogonal-complement-of-the-kernel]]).

[F4] If $K$ is compact on a normed space, then $\ker(I-K)$ is finite dimensional ([[lem-kernel-of-identity-minus-compact-is-finite-dimensional]]).

[F5] If $K$ is compact on a Banach space, then $\operatorname{ran}(I-K)$ is closed under DC ([[lem-range-of-identity-minus-compact-is-closed]]).

[F6] For a bounded self-adjoint operator $T$ on a Hilbert space, $\langle Tx,y\rangle=\langle x,Ty\rangle$ for all $x,y$; the identity operator is self-adjoint ([[def-self-adjoint-positive-unitary-and-normal-operator]]).

[F7] For a subset $S$ of a Hilbert space, $S^\perp$ consists of the vectors orthogonal to every element of $S$; every closed subspace of a Hilbert space has a unique orthogonal decomposition ([[def-orthogonality-and-orthogonal-complement]], [[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[F8] The finite-chart $H^2$ norm is the Sobolev norm in the preceding Gårding theorem; the inclusion $H^2\hookrightarrow L^2$ is continuous, and $G:H^\perp\to H^2$ is bounded ([[thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface]], [[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]], [[lem-dolbeault-green-operator-is-compact-on-the-orthogonal-complement-of-the-kernel]]).

[F9] Full AC implies DC and Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Proof technique:** Use compact-perturbation facts for $I-B$ and the exact Green identities for $\Delta''$.

1.1 By [F3], $H=\ker(I-B)$. Apply the compact-kernel lemma [F4] to $B$ on the normed space $L^2$ from [F1]. Thus $H$ is finite dimensional. [F1, F3, F4]

1.2 Set $A:=I-B$. For $f\in L^2$, $(I+\Delta'')Bf=f$, so $(I-B)f=\Delta''Bf$. For $u\in\operatorname{dom}\Delta''$, $B(I+\Delta'')u=u$, so $(I-B)(I+\Delta'')u=(I+\Delta'')u-u=\Delta''u$. Both containments give $\operatorname{ran}\Delta''=\operatorname{ran}A$. The space $L^2$ is Banach by [F1], and AC supplies DC for [F5]; hence this range is closed. [F1, F3, F5, F9, algebra]

1.3 If $H^\perp=\{0\}$, the displayed estimate holds with $c=1$. Otherwise boundedness of $G:H^\perp\to H^2$ and the continuous inclusion $H^2\hookrightarrow L^2$ give some $M>0$ with $\|Gf\|_{L^2}\le M\|f\|_{L^2}$ for all $f\in H^\perp$. For $u\in H^\perp\cap\operatorname{dom}\Delta''$, the Green identity gives $u=G\Delta''u$, whence $\|u\|_{L^2}\le M\|\Delta''u\|_{L^2}$. Taking $c=M^{-1}$ proves the estimate in this case. [F3, F8, algebra]

2.1 The operator $A=I-B$ is bounded and self-adjoint by [F3, F6]. If $y\perp\operatorname{ran}A$, then $\langle x,Ay\rangle=\langle Ax,y\rangle=0$ for every $x\in L^2$, so $Ay=0$; conversely, $Ay=0$ implies $y\perp\operatorname{ran}A$. Therefore $(\operatorname{ran}A)^\perp=\ker A=H$ by [F3]. Apply [F7] to the closed subspace $\operatorname{ran}A$ from step 1.2: $L^2=\operatorname{ran}A\oplus H$. Every vector in $\operatorname{ran}A$ is orthogonal to $H$; if $z\in H^\perp$ and $z=r+h$ is this decomposition, then $h=z-r\in H\cap H^\perp=\{0\}$. Thus $\operatorname{ran}A=H^\perp$, and step 1.2 gives $\operatorname{ran}\Delta''=H^\perp$. AC supplies the theorem's countable-choice hypothesis by [F9]. [F3, F6, F7, F9, step 1.2]

2.2 By [F2], $\Delta''$ is block diagonal and its domain is the direct sum of the two block domains, so its range is $\operatorname{ran}\Delta''_0\oplus\operatorname{ran}\Delta''_1$. If a sequence in either block range converges in that $L^2_q$ summand, embed it in $L^2_0\oplus L^2_1$ with zero in the other component. Closedness of the total range from step 1.2 puts the limit in the total range with that other component still zero, hence in the same block range. Both degreewise ranges are closed. [F2, step 1.2]

3.1 The two Green identities make $\Delta''$ and $G$ inverse bijections between $H^\perp\cap\operatorname{dom}\Delta''$ and $H^\perp$. By [F8], $\|Gf\|_{H^2}\le C\|f\|_{L^2}$; together with $\|\Delta''Gf\|_{L^2}=\|f\|_{L^2}$ this bounds $G$ into the graph norm $\|\cdot\|_{H^2,\Delta}$. The forward map is continuous in that graph norm by its definition, so this is a topological isomorphism. [F3, F8] ∎

## Source notes

Demailly's Ch. VI §2 (2.4), (2.6)–(2.8) states the finite-dimensional kernel, closed smooth range and orthogonal decomposition for a smooth elliptic differential operator on a compact manifold; its proof uses the Gårding and Rellich results and cites Hörmander for elliptic PDE facts. Ch. VI §7 (7.1)–(7.2) states the smooth Chern-Dolbeault decomposition and finite-dimensional Dolbeault cohomology, without giving its proof there. The present proof establishes the Hilbert-domain range and inverse claims from the preceding Green-operator lemma and the compact-perturbation suppliers; it does not import Demailly's smooth decomposition as a Hilbert-domain argument.
