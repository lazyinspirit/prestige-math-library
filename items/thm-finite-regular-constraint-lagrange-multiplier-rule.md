---
id: "thm-finite-regular-constraint-lagrange-multiplier-rule"
kind: "theorem"
title: "The Lagrange multiplier rule for finitely many regular constraints"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 4
deps:
  - "def-axiom-of-choice"
  - "def-banach-space"
  - "def-dual-space-of-a-normed-space"
  - "def-frechet-derivative-between-banach-spaces"
  - "def-kernel-and-image-of-a-linear-map"
  - "def-linear-independence"
  - "lem-finite-choice"
  - "lem-standard-basis-of-f-n"
  - "lem-functionals-vanishing-on-the-common-kernel-of-an-independent-family"
  - "lem-the-differential-annihilates-the-tangent-kernel-at-a-constrained-extremum"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 13 Section 13.3 Constraints, printed pp. 302-304 (Theorem 13.6 and its proof: the multiplier identity for the constrained variational principle)"
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 7, printed pp. 67-69 (finite-dimensional Lagrange multipliers with independent constraint gradients)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a real Banach space ([[def-banach-space]]), let $U\subseteq X$ be open, let $I:U\to\mathbb R$ be Fréchet differentiable at $u\in U$, and let $G=(G_1,\dots,G_m):U\to\mathbb R^m$ be of class $C^1$ with $DG(u):X\to\mathbb R^m$ surjective ([[def-frechet-derivative-between-banach-spaces]]). If $u$ is a local minimiser or a local maximiser of $I$ on the level set $\{G=G(u)\}$, then there is a unique $\lambda\in\mathbb R^m$ with
$$DI(u)=\sum_{i=1}^m\lambda_i\,DG_i(u).$$

## Facts & Assumptions

**Given:** A real Banach space $X$, open $U\subseteq X$, a functional $I$ Fréchet differentiable at $u$, a $C^1$ map $G=(G_1,\dots,G_m)$ with $DG(u)$ surjective, and the assumption that $u$ is a local minimiser or local maximiser of $I$ on the level set $\{G=G(u)\}$.

[F1] [[lem-the-differential-annihilates-the-tangent-kernel-at-a-constrained-extremum]]: under these hypotheses $DI(u)h=0$ for every $h\in\ker DG(u)$, that is, $\bigcap_{i=1}^m\ker DG_i(u)\subseteq\ker DI(u)$.

[F2] [[def-frechet-derivative-between-banach-spaces]], [[def-dual-space-of-a-normed-space]]: $DI(u)$ and each component $DG_i(u)=\pi_{i-1}\circ DG(u)$ is a bounded linear functional on $X$, and the kernel of $DG(u)$ is the intersection of the kernels of its components.

[F3] [[lem-finite-choice]]: a finite family of nonempty sets indexed by a natural number admits a choice function.

[F4] [[def-linear-independence]]: the functionals $\psi_1,\dots,\psi_m\in X^*$ are linearly independent exactly when $\sum c_i\psi_i=0$ in $X^*$ forces all $c_i=0$.

[F5] [[lem-functionals-vanishing-on-the-common-kernel-of-an-independent-family]]: for $m\ge1$, if $\psi_1,\dots,\psi_m\in X^*$ are linearly independent and $\bigcap_{i=1}^m\ker\psi_i\subseteq\ker\varphi$ for some $\varphi\in X^*$, then there is a unique $\lambda\in\mathbb R^m$ with $\varphi=\sum_{i=1}^m\lambda_i\psi_i$.

[F6] [[lem-standard-basis-of-f-n]]: $\mathbb R^0$ is the zero space. For $m\ge1$, use the one-based labels $e_i:=\widehat e_{i-1}$ for $1\le i\le m$, where $(\widehat e_k)_{k<m}$ is the supplied standard basis; likewise $G_i=\pi_{i-1}\circ G$ and $\lambda_i=\lambda(i-1)$. Sums and intersections over $1\le i\le m$ reindex those over $k<m$; at $m=0$ the sum is the zero functional and the intersection of component kernels is $X$.

[A1] [[def-axiom-of-choice]]: recorded as in the statement; the selections below are finite and need no choice principle.

## Proof

**Proof technique:** direct.

**Given:** The hypotheses above, including the local extremum at $u$.

1.1 By [F1] the differential $DI(u)$ vanishes on $\ker DG(u)=\bigcap_{i=1}^m\ker DG_i(u)$ [F2]. [given, F1, F2]

1.2 For $m\ge1$, the functionals $\psi_i:=DG_i(u)\in X^*$ are linearly independent. Indeed, since $DG(u)$ is surjective, for each $1\le i\le m$ the preimage $DG(u)^{-1}(\{e_i\})$ of the $i$-th standard unit vector of [F6] is nonempty, so finite choice [F3], applied to the family indexed by $k<m$ with $i=k+1$, selects $x_1,\dots,x_m\in X$ with $DG(u)x_i=e_i$, that is, $\psi_j(x_i)=\delta_{ij}$; if $\sum_ic_i\psi_i=0$ is the zero functional, evaluating at $x_j$ gives $c_j=0$ for every $j$, and independence follows by [F4]. [given, F3, F4, F6, choose]

2.1 If $m=0$, then $\ker DG(u)=X$ by [F6], and step 1.1 gives $DI(u)=0$. The unique vector of $\mathbb R^0$ gives the zero empty sum, proving both existence and uniqueness of the multiplier identity. If $m\ge1$, apply [F5] with $\psi_i=DG_i(u)$ and $\varphi=DI(u)$: the independence of step 1.2 and the kernel inclusion of step 1.1 are exactly its hypotheses, so there is a unique $\lambda\in\mathbb R^m$ with $DI(u)=\sum_{i=1}^m\lambda_iDG_i(u)$. [step 1.1, step 1.2, F5, F6]

3.1 This is the asserted multiplier identity, with the uniqueness statement included; the constrained-stationarity supplier uses the implicit function theorem under the Axiom of Choice [A1], while the common-kernel argument above uses no additional choice principle. [step 2.1, A1] ∎

