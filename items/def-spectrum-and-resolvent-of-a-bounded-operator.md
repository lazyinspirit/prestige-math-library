---
id: def-spectrum-and-resolvent-of-a-bounded-operator
kind: definition
title: Spectrum and resolvent of a bounded operator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-bounded-linear-operator, def-banach-space, def-space-of-bounded-linear-operators, def-linear-map, def-linear-subspace, def-dimension, def-complex-metric-convergence-and-continuity]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.1 pp.163–164, definitions preceding Lemma 6.1"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §5.2, spectrum and resolvent of a bounded operator"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Definition

Let $X$ be a complex Banach space ([[def-banach-space]],
[[def-complex-metric-convergence-and-continuity]]) and let
$T\in\mathcal B(X)$ be a bounded linear operator
([[def-bounded-linear-operator]], [[def-space-of-bounded-linear-operators]]).
For a scalar $\lambda\in\mathbb C$ write $\lambda I-T$ for the bounded linear
operator $x\mapsto\lambda x-Tx$ ([[def-linear-map]]).

- The **resolvent set** of $T$ is
  $$\rho(T):=\{\lambda\in\mathbb C:\lambda I-T \text{ is bijective and its inverse is a bounded operator } X\to X\}.$$
  For $\lambda\in\rho(T)$ the inverse $R(\lambda,T):=(\lambda I-T)^{-1}$,
  an element of $\mathcal B(X)$, is the **resolvent operator** of $T$ at
  $\lambda$.
- The **spectrum** of $T$ is its complement
  $$\sigma(T):=\mathbb C\setminus\rho(T).$$
- A scalar $\lambda$ is an **eigenvalue** of $T$ when
  $\ker(\lambda I-T)\ne\{0\}$; the nonzero vectors of that kernel are the
  **eigenvectors** of $T$ for $\lambda$, and
  $E_\lambda(T):=\ker(\lambda I-T)$ is the **eigenspace**. The set of
  eigenvalues is the **point spectrum** of $T$; plainly the point spectrum is
  contained in $\sigma(T)$, since an operator with nonzero kernel is not
  injective.
- For $\lambda\in\mathbb C$ the **generalized eigenspace** of $T$ at $\lambda$
  is
  $$G_\lambda(T):=\bigcup_{n\ge1}\ker\bigl((T-\lambda I)^n\bigr),$$
  an increasing union of linear subspaces ([[def-linear-subspace]]); the union
  is a linear subspace because the union is increasing. If $G_\lambda(T)$ is
  finite dimensional, $\dim_{\mathbb C}G_\lambda(T)$
  ([[def-dimension]]) is the **algebraic multiplicity** of the eigenvalue
  $\lambda$.

**Every element of $G_\lambda(T)\setminus\{0\}$ produces an eigenvector, and
conversely.** If $(T-\lambda I)^nx=0$ with $x\ne0$, let $k\ge1$ be least with
$(T-\lambda I)^kx=0$; then $y:=(T-\lambda I)^{k-1}x$ is nonzero and satisfies
$(T-\lambda I)y=0$. So $G_\lambda(T)\ne\{0\}$ exactly when $\lambda$ is an
eigenvalue. In particular $\lambda\in\rho(T)$ implies
$G_\lambda(T)=\{0\}$. If $G_\lambda(T)$ is finite dimensional, then the
algebraic multiplicity is defined and is at least
$\dim_{\mathbb C}E_\lambda(T)$, because $E_\lambda(T)\subseteq G_\lambda(T)$.

**Conventions.** Only complex scalars are treated here; the real case is
handled by complexification on a later page, so no spectrum is attached here to
a bounded operator on a real Banach space. The definition is purely one of
vocabulary; it asserts no nonemptiness of $\sigma(T)$, no openness of $\rho(T)$
and no continuity of $\lambda\mapsto R(\lambda,T)$, all of which are proved
separately. Since $0I-T=-T$, the number $0$ lies in $\sigma(T)$ exactly when
$T$ is not invertible with bounded inverse.
